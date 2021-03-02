import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import User = firebase.User;
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user?: User;
  constructor(private fireAuth:AngularFireAuth) { 
    this.fireAuth.authState.subscribe((user)=>{
      if(user){
        this.setUser(user);
      }
    });
  }

  setUser(user:User): any{
    this.user = user;
  }

  get isLoggedIn(): boolean{
    return (this.user !== undefined);
  }

  login(email:string, pass:string): Promise<any>{
    return this.fireAuth.signInWithEmailAndPassword(email, pass);
  }

  logout(): Promise<any>{
    return this.fireAuth.signOut();
  }

  addContact(email:string, pass:string): Promise<any>{
    return this.fireAuth.createUserWithEmailAndPassword(email,pass);
  }
}
