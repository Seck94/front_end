import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const URL = 'http://localhost:3000/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  addUser(): Observable<any>{
    return this.http.post(URL,
      {
      'nom': 'nom',
      'prenom': 'prenom',
      'email': 'email',
      'password': 'password'});
  }
}
