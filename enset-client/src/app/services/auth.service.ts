import { Injectable } from '@angular/core';
import {promise} from 'selenium-webdriver';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }

  CreateNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            return resolve();
          },
          (error) => {
            return reject(error);
          }
        );
      }
    );
  }
  SignInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            return resolve();
          },
          (error) => {
            return reject(error);
          }
        );
      }
    );
  }
  SignOutUser() {
   firebase.auth().signOut();
  }
}
