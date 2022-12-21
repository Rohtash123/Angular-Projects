import {Component} from '@angular/core';
import {RestService} from "./rest.service";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {EditViaPopupComponent} from "./edit-via-popup/edit-via-popup.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-nov-4-front';
  getApi: any;
  details = {id: '', firstname: '', lastname: '', email: '', phone: ''};
  flag = false;
  item: any;

  constructor(private rest: RestService, private http: HttpClient, private monu: MatDialog) {
  }

  ngOnInit() {
    this.fetchApiDetails()
  }

  fetchApiDetails() {
    this.rest.getApiData().subscribe((response: any) => {
      console.log(response)
      this.getApi = response.data;
    })
  }

  deleteAdmin(data: any) {
    console.log(data);
    // alert('Hey monu, do you really want to delete?');


    this.http.post('http://localhost:3000/api/v1/admin/delete_admin', {id: data}).subscribe((response: any) => {
      this.fetchApiDetails();
      console.log('delete api finished');
    })
  }


  openDialogEdit(item: any) {
    this.monu.open(EditViaPopupComponent, {
      data: {
        id: item.id,
        firstname: item.firstname,
        lastname: item.lastname,
        email: item.email,
        phone: item.phone,
      }
    });
  }
}
