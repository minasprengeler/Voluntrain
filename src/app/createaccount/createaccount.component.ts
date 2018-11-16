import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  signupForm;

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    this.signupForm = formBuilder.group({
      name: formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      email: formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      zipcode: formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      password: formBuilder.control('', Validators.required)
    });
  }

  submit() {
    console.log("On signup");
    console.log(this.signupForm.value);

    const params = new HttpParams()
    .set('name', this.signupForm.value.name)
    .set('email', this.signupForm.value.email)
    .set('zipcode', this.signupForm.value.zipcode)
    .set('password', this.signupForm.value.password);

    this.http.get("http://localhost:3000/createaccount", {params}).subscribe (
      data => {
        console.log("here");
      },
      err => {
        console.log("there was an error")
      },
      () => console.log("done")
    )
  }







}
