import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {

  constructor(private  http:HttpClient) { }
  public  host:string="http://localhost:8080"

  public  getLogements(){
       return this.http.get(this.host+"/logement/get");


  }
  selectedLogement: any;

  setLogement(logement: any) {
    this.selectedLogement = logement;
  }

  getLogement() {
    return this.selectedLogement;
  }

  reserverLogement(logementId: number, dateDebut: string, dateFin: string, locateurId: number): Observable<any> {
    const reservationData = {
      logementId: logementId,
      dateDebut: dateDebut,
      dateFin: dateFin,
      locateurId: locateurId
    };
    return this.http.post<any>('http://localhost:8080/reservation/creerReservation', reservationData);
  }

}
