import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/services/profil.service';
import { Profil } from 'src/models/profil.models';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  profils: Profil[] = [];

  constructor(private profilSer: ProfilService) { }

  ngOnInit(): void {
    this.profilSer.getAll().subscribe(
      res => {
        this.profils = res;
      },
      err => console.log(err)
    );
  }

}
