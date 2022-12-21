import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Component({
  selector: 'app-edit-via-popup',
  templateUrl: './edit-via-popup.component.html',
  styleUrls: ['./edit-via-popup.component.css']
})
export class EditViaPopupComponent implements OnInit {
  private dialogRef: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { }

  adminForm = new FormGroup({
    firstname: new FormControl(this.data.firstname),
    lastname: new FormControl(this.data.lastname),
    email: new FormControl(this.data.email),
    phone: new FormControl(this.data.phone)
  })

  ngOnInit(): void {
    console.log("In Dialog" + " => " + this.data.id);
  }

  updateDetails() {
    const details = {
      id: this.data.id,
      data: this.adminForm.value
    }
    this.http.post('http://localhost:3000/api/v1/admin/edit_admin', details).subscribe((response => {
      console.log(response);
      location.reload();
    }))
  }

}
