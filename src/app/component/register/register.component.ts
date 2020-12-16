import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  public 'username' = '' ;
  public 'Prenom' = '' ;
  public 'Nom' = '' ;
  public 'Email' = '' ;
  public 'password' = '' ;
  public 'Avatar' = '' ;

  private file = '';

  constructor(private resSERV: RegisterService) { }

  ngOnInit(): void {
  }
  AjouterUtilisateur(){
    alert('dfghjk');
    const formdata = new FormData();
    formdata.append('Nom', this.Nom );
    formdata.append('Prenom', this.Prenom );
    formdata.append('username', this.username );
    formdata.append('Email', this.Email );
    formdata.append('password', this.password );
    formdata.append('Avatar', this.file );
    formdata.append('Statut', 'sdfghj' );

    this.resSERV.addUser(formdata).subscribe(data=>{console.log(data);
    })
  }
  onfile = (event: any) => {
    this.file = event.target.files[0];
    console.log(this.file);
  }


}
