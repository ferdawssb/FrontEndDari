import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})





export class AppComponent implements OnInit{
constructor(public authService :AuthService , private router:Router) {
}
ngOnInit(): void {

  }

  title='FrontEndDari'
  handleLogout() {
   this.authService.logout();
   this.router.navigateByUrl("/login");
  }
}
