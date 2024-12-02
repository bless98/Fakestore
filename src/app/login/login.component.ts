import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      // Handle the login logic here
    } else {
      console.log('Form is invalid');
    }
  }
    
}
