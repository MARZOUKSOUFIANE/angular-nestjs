import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  user: any;
  paragraphes: string[];
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.user = this.userService.userChoisi;
     this.paragraphes = this.user.paragraphs.split('\n');
  }
  removeArticle(i) {
    this.paragraphes.splice(i, 1);
  }

}
