import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  // registerForm: FormGroup;
  // loading = false;
  // submitted = false;

  constructor() { 
    // this.registerForm;
    // private formBuilder: FormBuilder,
    // private router: Router
  }

   submit(){
     console.log('Form Submitted');
   }
}
