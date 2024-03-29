import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // this 'registerForm' is the representation of the entire form
  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[A-Za-z]+$'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[A-Za-z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    gender: new FormControl('', Validators.required),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
    rpwd: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
  });

  // this is a test method to debug your errors
  // go to the console and change variable name inside the get method
  registerSubmitted() {
    console.log(this.registerForm.get('pwd'));
  }

  // these are methods for accessing the form variables in the view (HTML)
  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get('lastname') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get Mobile(): FormControl {
    return this.registerForm.get('mobile') as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }

  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }

  get RPWD(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }

  constructor() {}

  ngOnInit(): void {}
}
