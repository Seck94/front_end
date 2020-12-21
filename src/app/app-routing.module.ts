import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { LoginComponent } from './component/login/login.component';
import { ProfilComponent } from './component/profil/profil.component';
import { RegisterComponent } from './component/register/register.component';
import { UserComponent } from './component/user/user.component';
import { EditComponent } from './edit/edit.component';
import { FormateurComponent } from './formateur/formateur.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'admin', component: UserComponent},
  {path: 'apprenants', component: ApprenantComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'formateur', component: FormateurComponent},
  {path: 'profils', component: ProfilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
