import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
  constructor(private usersService: UsersService , private router: Router) { }

  ngOnInit() {
   this.user = this.usersService.userChoisi;
  }

  AfficherPosts() {
  this.router.navigate(['/post-detail']);
  }

}
