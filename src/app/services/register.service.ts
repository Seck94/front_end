import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const URL = 'http://localhost:8000/api/admin/formateurs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  addUser(formdata: FormData): Observable<any>{
    const header = new HttpHeaders({Accept: '*/*'});
    return this.http.post(URL, formdata, {headers: header});
  }
}
