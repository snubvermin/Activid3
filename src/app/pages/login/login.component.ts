import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      pass:['', Validators.required]
    });
  }

  login() {
    const {email, pass} = this.form.getRawValue();
    this.authService.login(email, pass).then(response =>{
      this.authService.setUser(response.user);
      this.router.navigate(['/dashboard']);
    }).catch(err =>{
      console.log('error', err);
    });
  }

}
