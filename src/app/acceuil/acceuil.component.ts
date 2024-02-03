import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {AcceuilService} from "../services/acceuil.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  standalone: true,
  imports:[CommonModule ],

})
export class AcceuilComponent implements  OnInit{

  public  logements: any  ;
  public logement:any ;
  constructor(private acceuilService:AcceuilService , private router: Router){}
ngOnInit(){

   this.acceuilService.getLogements()
      .subscribe(data=>{
      this.logements=data;

      }, err=>{
        console.log(err);


      })




}
  reserver(logement: any) {
    this.acceuilService.setLogement(logement);
    this.router.navigate(['/admin/reserve']);
  }





}
