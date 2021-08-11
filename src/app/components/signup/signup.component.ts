import { Component, OnInit } from '@angular/core';

//afs
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormGroupDirective, NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //vars
  signupForm: FormGroup;
  firebaseErrorMessage: string;


  constructor(public auth: AuthService, private router: Router, private afAuth: AngularFireAuth) {
    this.firebaseErrorMessage = '';
}
  
user = AuthService
hide =true;

 
passFormControl = new FormControl('', [
  Validators.required,
]);
confirmFormControl = new FormControl('', [
  Validators.required, 
]);


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
  });
}

signup() {
  if (this.signupForm.invalid) 
      // console.log("not working")
      return;

  this.auth.signupUser(this.signupForm.value).then((result) => {
      if (result == null)                               // null is success, false means there was an error
          this.router.navigate(['/dashboard']);
      else if (result.isValid == false)
          this.firebaseErrorMessage = result.message;
  }).catch(() => {

  });
}


}
