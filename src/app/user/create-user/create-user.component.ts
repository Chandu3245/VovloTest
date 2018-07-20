import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { IUsers } from '../user-data-model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  user: IUsers;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required,]],
      surname: ['', [Validators.required,]],
      phone: '',
      birthDate: '',
      number: '',
      street: '',
      city: ''
    });
  }
  create(){
      this.user = this.userForm.value;
      this.userService.addUser(this.user);
  }
}
