import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private injector: Injector //, private authService: AuthService
  ) {}

  intercept(req, next) {
    var authService = this.injector.get(AuthService);
    // console.log("authService from the token-interceptor", this.authService);
    // let token = this.authService.getToken();
    // console.log("the token: ", token);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: "Bearer " + localStorage.getItem("token")
        // JSON.parse(localStorage.getItem('token'))
      }
    });
    console.log("localStorage token: ", localStorage.getItem("token"));
    console.log("tokenizedReq: ", tokenizedReq);
    return next.handle(tokenizedReq);
  }
}
