import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/services/profil.service';
import { Profil } from 'src/models/profil.models';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Libelle'];
  dataSource = new MatTableDataSource<Profil>();



  profils: Profil[] = [];

  constructor(private profilSer: ProfilService) { }

  ngOnInit(): void {
    this.profilSer.getAll().subscribe(
      res => {
        this.profils = res;
        this.dataSource.data = res as Profil [];
      },
      err => console.log(err)
    );
  }

}
