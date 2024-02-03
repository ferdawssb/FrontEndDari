import {Component, OnInit} from '@angular/core';
import {AcceuilService} from "../services/acceuil.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

// @ts-ignore
@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
  logement: any;

  constructor(private selectionService: AcceuilService, private  authService: AuthService,private router: Router) {
  }
  ngOnInit() {
    this.logement = this.selectionService.getLogement();
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/login']);
    }

    // Obtenez l'ID du locateur
    const locateurId = this.authService.getLocateurId();

  }

 /* reserverLogement() {
    // Obtenez l'ID du locateur
    const locateurId = this.authService.getLocateurId();

    if (this.dateDebut && this.dateFin) {
      // Vérifiez si l'ID du locateur est disponible
      if (locateurId) {
        // Appelez la méthode de réservation en passant l'ID du locateur
        this.selectionService.reserverLogement(this.logement.idlog, this.dateDebut, this.dateFin, locateurId)
          .subscribe(response => {
            // Gérer la réponse de la réservation, par exemple, afficher un message de succès
            console.log('Réservation réussie:', response);
            // Rediriger ou effectuer d'autres actions nécessaires
            this.router.navigate(['/accueil']);
          }, error => {
            // Gérer les erreurs, par exemple, afficher un message d'erreur
            console.error('Erreur de réservation:', error);
          });
      } else {
        // Gérer le cas où l'ID du locateur n'est pas disponible
        console.warn('L\'ID du locateur n\'est pas disponible.');
      }
    } else {
      // Gérer le cas où les dates ne sont pas sélectionnées
      console.warn('Veuillez sélectionner les dates de réservation.');
    }
  }*/
 /* onSubmit() {
    // Appelez la méthode reserverLogement lors de la soumission du formulaire
    this.reserverLogement();
  }*/

}
