import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {PostsComponent} from './posts/posts.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactComponent} from './contact/contact.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'auth/signIn', component: SigninComponent},
  {path: 'auth/signUp', component: SignupComponent},
  {path: 'users', canActivate: [AuthGuardService], component: UsersComponent},
  {path: 'users/:Id', canActivate: [AuthGuardService],  component: UserDetailComponent},
  {path: 'posts', canActivate: [AuthGuardService],  component: PostsComponent},
  {path: 'post-detail', canActivate: [AuthGuardService],  component: PostDetailComponent},
  {path: 'posts/:Id', canActivate: [AuthGuardService], component: PostDetailComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
