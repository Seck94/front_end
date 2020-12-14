import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Prenom', 'Nom', 'Email', 'username', 'profil'];
  dataSource = new MatTableDataSource<User>();

  users: User[] = [];

  constructor(private userSer: UserService) { }

  ngOnInit(): void {
    this.userSer.allUsers().subscribe(
      data => {
        console.log(data);
        this.dataSource.data = data as User[];
      },
      err => console.log(err)
    );
  }

}
