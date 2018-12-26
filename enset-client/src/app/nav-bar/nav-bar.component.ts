import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuth = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  OnSignOut() {
    this.authService.SignOutUser();
  }

}
