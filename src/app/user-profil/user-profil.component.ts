import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  user = {
    name : 'Doe',
    firstname : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  constructor() { }

  ngOnInit(): void {
  }


isHidden: boolean = true;

setIsHidden(): void {
  this.isHidden = !this.isHidden;
}

}
