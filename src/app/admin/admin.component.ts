import { Component } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterOutlet, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {AcceuilComponent} from "../acceuil/acceuil.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    AcceuilComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if (this.authService.isAuthenticated) {
    return true;
  } else {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    this.router.navigate(['/login']);
    return false;
  }
}


}
