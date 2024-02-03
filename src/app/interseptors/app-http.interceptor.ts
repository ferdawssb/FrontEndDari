import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {log} from "node:util";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

constructor(private authService : AuthService) {
}
  // @ts-ignore
  intercept (req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
console.log(req.url);
if (!req.url.includes("/auth/login")){
  let newRequest = req.clone({

    headers: req.headers.set('Authorisation','Bearer '+this.authService.accesToken)
    // Afficher le jeton dans la console

  });
  console.log('Token:', 'Bearer ' + this.authService.accesToken);



}else
  return  next.handle(req);




  }
}
