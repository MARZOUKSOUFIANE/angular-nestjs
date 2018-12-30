import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enset-client';
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAfTV0TCreKnvKO5WhwN-JZpuUAWS8Odn8",
      authDomain: "blog-application-23e67.firebaseapp.com",
      databaseURL: "https://blog-application-23e67.firebaseio.com",
      projectId: "blog-application-23e67",
      storageBucket: "blog-application-23e67.appspot.com",
      messagingSenderId: "782992182421"
    };
    firebase.initializeApp(config);
  }


}
