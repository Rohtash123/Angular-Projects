import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from "@angular/forms";
import { Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  adminForm = new FormGroup({
    'firstName' : new FormControl(null, Validators.required),
    'lastName' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'phone' : new FormControl(null,Validators.required),

  });



  constructor(private http: HttpClient,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.adminForm.value);
   this.http.post('http://localhost:3000/api/v1/admin/create_admin',this.adminForm.value).subscribe((response:any)=>{
     console.log("User created");
     location.reload();

   });

  }

}
