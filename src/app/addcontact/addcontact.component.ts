import { Component, inject } from '@angular/core';
import { contact } from '../models/contact.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';
import { ContactlistComponent } from '../contactlist/contactlist.component';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrl: './addcontact.component.css'
})
export class AddcontactComponent {
  httpService=inject(ContactsService);
  formBuilder=inject(FormBuilder);
  router=inject(Router);
  contactForm=this.formBuilder.group({
    firstName:["",[Validators.required]],
    lastName:["",[Validators.required]],
    email:["",[Validators.required]],
    phoneNumber:["",[Validators.required]],
    address:["",[Validators.required]],
    city:["",[Validators.required]],
    state:["",[Validators.required]],
    country:["",[Validators.required]],
    postalCode:["",[Validators.required]],
  });
  save(){
    const newcontact: contact = {
      firstName:this.contactForm.value.firstName!,
      lastName:this.contactForm.value.lastName!,
      email:this.contactForm.value.email!,
      phoneNumber:this.contactForm.value.phoneNumber!,
      address:this.contactForm.value.address!,
      city:this.contactForm.value.city!,
      state:this.contactForm.value.state!,
      country:this.contactForm.value.country!,
      postalCode:this.contactForm.value.postalCode!
    };
    this.httpService.addcontact(newcontact).subscribe(()=>{
      this.router.navigate(['/contactlist']);
    });
  }
  

}
