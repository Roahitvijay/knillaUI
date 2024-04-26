import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  baseApiUrl:string="https://localhost:7160"
  constructor(private http:HttpClient) {
    
   }
   getAllcontact(){
    return this.http.get<contact[]>(this.baseApiUrl+"/Contacts/GetContacts")
   }
   addcontact(contact:contact){
    return this.http.post<string>(this.baseApiUrl+"/Contacts/AddContact",contact);
  }
  getContactByID(rowId?:number){
    return this.http.get<contact>(this.baseApiUrl+"/Contacts/GetContactByID?id="+rowId);
  }
  updateContact(selectedContact:contact){
    return this.http.post<string>(this.baseApiUrl+"/Contacts/UpdateContact",selectedContact);
  }
  DeleteContact(id:number| undefined){
    return this.http.delete<string>(this.baseApiUrl+"/Contacts/DeleteContact?id="+id);
  }
}
