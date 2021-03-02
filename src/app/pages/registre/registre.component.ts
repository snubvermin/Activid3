import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase';
import User = firebase.User;

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  form: FormGroup;
  email:string;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      pass:['', Validators.required]
    });
  }

  registre(){
    const {email, pass} = this.form.getRawValue();
    this.authService.addContact(email, pass).then(response =>{
      console.log(response);
      this.authService.setUser(response.user);
      this.router.navigate(['/dashboard']);
    }).catch(err =>{
      console.log('error', err);
    });
  }

}
