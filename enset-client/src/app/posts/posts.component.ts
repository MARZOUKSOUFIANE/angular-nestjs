import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 users: any[];
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }
  private getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
