import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import User = firebase.User;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  date;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.date = new Date();
  }

  get user():User{
    return this.authService.user;
  }

  get isLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

}
