import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

const BaseURL = 'http://localhost:8000/api';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient, private router: Router) { }
   public nameAuth = 'File_Rouge';
   public localSrorage = window.localStorage;
   login(data: any): Observable<any> {
     return this.http.post(`${BaseURL}/login_check`, data).pipe(
       map(
         (user: any) => {
           if (user) {
             localStorage.setItem('token', JSON.stringify(user));
             const tokendecode = jwt_decode(user.token);
             switch (tokendecode.roles[0]){
               case 'ROLE_ADMIN':
              this.router.navigate(['/admin']);
              break;
             }
             switch (tokendecode.roles[0]){
               case 'ROLE_APPRENANT':
              this.router.navigate(['/apprenants']);
              break;
             }
           }
          }
       )
     );
   }

   getToken(): any {
     const currentUser = localStorage.getItem('token');
     if (currentUser) {
      const token = JSON.parse(currentUser);

      return token.token;
     }
     return null;
   }
   islogin(): boolean{
     if (localStorage.getItem('token')) {
       return true;
     }
     return false ;
   }
}
