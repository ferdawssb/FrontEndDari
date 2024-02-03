import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {LogementService} from "../services/logement.service";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {response} from "express";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-new-logement',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-logement.component.html',
  styleUrl: './new-logement.component.css'
})
export class NewLogementComponent implements OnInit {

  logementForm: FormGroup;
  authenticatedOwnerId: string | null | undefined;

  constructor(private fb: FormBuilder, private logementService:LogementService,private authService :AuthService)

  {
    this.logementForm = this.fb.group({
      type: ['', Validators.required],
      ville: ['', Validators.required],
      description: [''],
      adresse: ['', Validators.required],
      places: ['', Validators.required],
      prix: ['', Validators.required],
      photo: [''],
    });
  }



  ngOnInit(): void {

    }


  addLogement() {

    if (this.logementForm.valid) {
      const logementData = this.logementForm.value;

      // Récupérer le contrôle du champ 'photo'
      const photoControl = this.logementForm.get('photo');

      console.log('Contenu du formulaire:', logementData);
      console.log('Contenu du contrôle du champ photo:', photoControl);

      // Vérifier si le contrôle existe et a une valeur
      if (photoControl && photoControl.value) {
        const photoValue = photoControl.value;

        // Envoyer la demande POST au service avec les données du logement et la photo
        this.logementService.addLogement(logementData, photoValue)
          .subscribe(
            response => {
              console.log('Logement ajouté avec succès :', response);
              // Réinitialisez les champs du formulaire ou effectuez d'autres actions nécessaires
              this.logementForm.reset();
            },
            error => {
              console.error('Erreur lors de l\'ajout du logement :', error);
            }
          );
      } else {
        console.error('Aucun fichier photo sélectionné.');
      }
    } else {
      console.error('Formulaire invalide. Veuillez vérifier les champs.');
    }
  }
}


