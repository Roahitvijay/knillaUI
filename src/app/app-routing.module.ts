import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';

const routes: Routes = [
  {
    path:'',
    component:ContactlistComponent
  },
  {
    path:'addcontact',
    component:AddcontactComponent
  },
  {
    path:'deletecontact',
    component:DeletecontactComponent
  },
  {
    path:'contactlist',
    component:ContactlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
