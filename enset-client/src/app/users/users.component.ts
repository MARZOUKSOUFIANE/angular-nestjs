import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";
import {User} from 'firebase';
import index from '@angular/cli/lib/cli';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  userChoisi: any;
  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  DeleteUser(i) {
    this.usersService.DelUsers(i);
   const index = this.users.findIndex(
     (indexE) => {
       if (indexE.id === i) {
         return true;
       }
     }
   );
   this.users.splice(index, 1);
  }

  AfficherDetails(id) {
    const index = this.users.findIndex(
      (indexE) => {
        if (indexE.id === id) {
          return true;
        }
      }
    );
    this.userChoisi = this.users[index];
   this.usersService.AfficherDetails(this.userChoisi);
  }

}
