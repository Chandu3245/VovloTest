import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UsersProfileComponent } from './users-profile/users-profile.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'users', component: UsersProfileComponent}
    ]),
    FormsModule
  ],
  declarations: [UsersProfileComponent]
})
export class UserModule { }
