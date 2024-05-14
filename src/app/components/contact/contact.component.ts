import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};

  constructor() { }

  submitForm() {
    // You can handle form submission here, like sending the data to your backend server
    console.log(this.formData); // Just an example, replace it with your actual submission logic
  }
}
