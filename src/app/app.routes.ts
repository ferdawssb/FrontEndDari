import { Routes } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {NewLogementComponent} from "./new-logement/new-logement.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {authenticationGuard} from "./guards/authentication.guard";

export const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "admin",
    component: AdminComponent,  canActivate:[authenticationGuard],
    children: [
      {
        path:"new-logement",
        component: NewLogementComponent,

      },
      {
        path: "reserve",
        component: ReservationComponent,

      },
      {
        path: "acceuil",
        component: AcceuilComponent
      }
    ]
  },
  {
    path: "acceuil",
    component: AcceuilComponent
  }
];
