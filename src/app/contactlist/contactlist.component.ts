import { Component, OnInit } from '@angular/core';
import { contact } from '../models/contact.model';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent implements OnInit {
contacts:contact[]=[];
selectedContact: contact ={
  id:0,
  firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address:'',
    city:'',
    state:'',
    country:'',
    postalCode:''

};
constructor(private router:Router,private contactService:ContactsService){

}
ngOnInit(): void {
  this.contactService.getAllcontact().subscribe({
    next:(contacts)=>{
      this.contacts=contacts;
    },
    error:(response)=>{
      console.log(response);
    }
  })
}
  GetContact(rowId?: number) {
    this.contactService.getContactByID(rowId).subscribe({
      next: (contact) => {
        this.selectedContact = contact;
        console.log("getbyID", contact);
      },
    })
  }
  edit(){
    window.location.reload();
  }
  UpdateContact(){
    this.contactService.updateContact(this.selectedContact).subscribe({
      next:(response)=>{
        this.router.navigate(['/contactlist']);
        
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  DeleteContact(id:number| undefined){
    this.contactService.DeleteContact(id).subscribe({
      next:(response)=>{
        let currenturl=this.router.url;
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate([currenturl]);
        });
      }
    });
  }
}
