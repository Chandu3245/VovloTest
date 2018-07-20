import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUsers } from '../user-data-model';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.scss']
})
export class UsersProfileComponent implements OnInit {

  // private listFilter: string;
  private users: IUsers[];
  private filteredUsers: IUsers[];
  tempName: any;
  userEditId: any;
  changeText: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserProfiles();
  }

  getUserProfiles(){
    this.userService.getUserProfiles().subscribe(users => {
      this.tempName = users;
      this.users = this.tempName.names;
      this.performFilter(this.listFilter);
    });
  }

  private _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(filter: string) {
    this._listFilter = filter;
    this.performFilter(this.listFilter);
  }

  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLocaleLowerCase().indexOf(filterBy) !== -1
      );
    } else {
      this.filteredUsers = this.users;
    }
  }
  clear(): void {
    this.listFilter = '';
    this.filteredUsers = this.users;
  }

  delete(user: IUsers){
    // this.userService.deleteUser(hero);
    // console.log(hero);
   let removeIndex = this.users.indexOf(user);
    this.users.splice(removeIndex, 1);
  }
  toggleId(user){
    this.userEditId = user.id;
    if(this.changeText){
      //update user profile
      this.userService.updateUser(user);
      this.userEditId = '';
      this.getUserProfiles();
    }
    this.toggleButton();
    }

  toggleButton(){
    this.changeText = (this.changeText === true) ? false: true;
  }
}
