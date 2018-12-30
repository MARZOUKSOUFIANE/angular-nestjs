import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class UsersService {
  private readonly BASE_URL = 'http://localhost:5000/users';
  userChoisi: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  DelUsers(id) {
     this.http.delete(this.BASE_URL, id);
  }

  AfficherDetails(user: any) {
    this.userChoisi = user;
    this.router.navigate(['/users', user.id]);
  }

}

