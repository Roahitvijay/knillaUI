import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    AddcontactComponent,
    DeletecontactComponent,
    UpdatecontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
