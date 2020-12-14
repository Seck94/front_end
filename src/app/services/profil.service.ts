import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profil } from 'src/models/profil.models';
import { environment } from 'src/environments/environment';



//const URLS = 'http://localhost:3000/profils/';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Profil[]> {
    // console.log('ok');
    return this.httpClient.get<Profil[]>(`${environment.url}/admin/profils`);
  }
}
