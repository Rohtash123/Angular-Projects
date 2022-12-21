import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { EditViaPopupComponent } from './edit-via-popup/edit-via-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AddFormComponent } from './add-form/add-form.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFiltersComponent } from './search-filters/search-filters.component';


@NgModule({
  declarations: [
    AppComponent,
    EditViaPopupComponent,
    AdminDetailsComponent,
    AddFormComponent,
    SearchFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
