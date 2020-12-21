import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  allUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${environment.url}/admin/users`);
   }
   get(id: any): Observable<User>{
     return this.http.get<User>(`${environment.url}/admin/users/${id}`);
   }
   update(data: any, id: any): Observable<any>{
    return this.http.put<any>(`${environment.url}/admin/admins/${id}`, data);
   }
}
