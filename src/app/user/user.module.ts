import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { UsersProfileComponent } from './users-profile/users-profile.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'users', component: UsersProfileComponent},
      {path: 'addUser', component: CreateUserComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UsersProfileComponent, CreateUserComponent]
})
export class UserModule { }
