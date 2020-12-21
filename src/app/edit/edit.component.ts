import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  currenUser: any ;
  user: any ;

  constructor(private userSer: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currenUser = this.route.snapshot.params["id"];
    this.userSer.get(this.currenUser).subscribe(data => {
      this.user = data ;
      console.log(data);
    });
  }

 update(){
   this.userSer.update(this.user, this.currenUser).subscribe();
 }

}
