import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/Services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  formData: any = {};
  isUserValid: boolean = true;

  constructor(private service: UserService) {

  }

  ngOnInit() {
  }

  checkUser(formData: NgForm) {
    if (formData.valid) {
      this.formData = formData.value;
      this.service.checkUser(this.formData.email, this.formData.password).subscribe((res: any) => {

      }, (error: any) => {
        this.isUserValid = false;
      });
    }
  }

}
