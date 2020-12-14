import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private connexionSer: ConnexionService, private router: Router) {}

  ngOnInit(): void {
  }
 onLogin(form: any): void{
  this.connexionSer.login(form).subscribe(
    res => console.log(res)
    //this.router.navigate(['/admins'])
  );
 }
}
