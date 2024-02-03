import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AcceuilComponent} from "../acceuil/acceuil.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
   formLogin! : FormGroup;

   constructor(private fb:FormBuilder, private authService :AuthService , private router:Router) {
   }
    // @ts-ignore
  ngOnInit(): void {
      this.formLogin=this.fb.group({
    username:this.fb.control(""),
    password : this.fb.control("")



      })

    }

  handleLogin() {
     console.log(this.formLogin.value)
    let username=this.formLogin.value.username;
     let pass=this.formLogin.value.password;
   this.authService.login(username,pass).subscribe({
     next:data => {

      this.authService.loadProfile(data);
      this.router.navigateByUrl("/admin/acceuil")



     },
     error:err => {
       console.log(err)

     }


   })
  }
}
