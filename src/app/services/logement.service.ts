import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class LogementService {
  private baseUrl = 'http://localhost:8080/logement';

  constructor(private http: HttpClient,private authService: AuthService) { }

  /*addLogement(logementData: any, photo: File): Observable<any> {
    const formData: FormData = new FormData();

    Object.keys(logementData).forEach(key => {
      formData.append(key, logementData[key]);
    });

    // Créer un objet Blob à partir du fichier photo
    const photoBlob = new Blob([photo], { type: photo.type });

    // Ajouter la photo au formulaire avec le nom de fichier
    formData.append('photo', photoBlob, photo.name);

    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });

    return this.http.post(`${this.baseUrl}/add`, formData, { headers: headers });
  }*/

  addLogement(logementData: any, photo: File): Observable<any> {
    const formData: FormData = new FormData();

    Object.keys(logementData).forEach(key => {
      formData.append(key, logementData[key]);
    });

    // Créer un objet Blob à partir du fichier photo
    const photoBlob = new Blob([photo], { type: photo.type });

    // Ajouter la photo au formulaire avec le nom de fichier
    formData.append('photo', photoBlob, photo.name);

    // Récupérer le token d'accès depuis le service d'authentification
    const accessToken = this.authService.accesToken;

    // Créer des en-têtes avec l'autorisation
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.post(`${this.baseUrl}/add`, formData, { headers: headers });
  }}
