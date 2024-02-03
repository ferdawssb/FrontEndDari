import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isAuthenticated : boolean=false;
    roles: any;
    username : any;
    accesToken!: any;
  private locateurId: number | null = null;
  private authenticatedOwnerIdSubject = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient) { }

  public login(username:string,password:string){
  let options={
    headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
  }


    let params= new HttpParams().set("username",username).set("password",password);
   return this.http.post("http://localhost:8080/auth/login",params,options)

  }

  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accesToken = data['access-token'];
    if (this.accesToken) {
      try {
        let decodeJwt: any = jwtDecode(this.accesToken);
        this.username = decodeJwt.sub;
        this.roles = decodeJwt.scope;
      } catch (error) {
        console.error('Erreur de décodage du token :', error);
        // Ajoutez une gestion des erreurs ici, par exemple, déconnexion de l'utilisateur
      }
    } else {
      console.error('Le token est null ou non défini.');
      // Ajoutez une gestion des erreurs ici, si nécessaire
    }
  }

  logout() {
    this.isAuthenticated=false;
    this.accesToken=undefined;
    this.username=undefined;
    this.roles=undefined;


  }

  getLocateurId(): number | null {
    return this.locateurId;
  }

  setAuthenticatedOwnerId(id: string | null): void {
    this.authenticatedOwnerIdSubject.next(id);
  }

  getAuthenticatedOwnerId(): Observable<string | null> {
    return this.authenticatedOwnerIdSubject.asObservable();
  }
}
