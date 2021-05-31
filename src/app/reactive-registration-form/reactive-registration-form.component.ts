import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
@Component({
  selector: 'reactive-registration-form',
  templateUrl: './reactive-registration-form.component.html',
  styleUrls: ['./reactive-registration-form.component.css']
})
export class ReactiveRegistrationFormComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
}
