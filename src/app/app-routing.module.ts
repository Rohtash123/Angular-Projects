import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditViaPopupComponent} from "./edit-via-popup/edit-via-popup.component";
import {AdminDetailsComponent} from "./admin-details/admin-details.component";
import {AppComponent} from "./app.component";
import {filter} from "rxjs";
import {SearchFiltersComponent} from "./search-filters/search-filters.component";

const routes: Routes = [
  {path: 'admin-list', component: SearchFiltersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
