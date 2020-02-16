import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  formData: any = {};
  isUserValid: boolean = true;

  constructor(private service: UserService) {

  }

  ngOnInit() {
  }

  checkUser(formData: NgForm) {
    alert('check user called');
    if (formData.valid) {
      this.formData = formData.value;
      this.service.addUser(formData.value).subscribe((res: any) => {

      }, (error: any) => {
        this.isUserValid = false;
      });
    }
  }

}
