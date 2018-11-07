import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private _authUsersList = "http://localhost:3001/api/users";
  private _newUser = "http://localhost:3001/api/users/create";
  users: any = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    // need a refactoring to take this data from the database dynamicaly
    // and then render it on the page
    return this.http.get(this._authUsersList).subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

  addNewUser(user) {
    return this.http.post(this._newUser, user);
  }

  editUser(currentUser) {
    return this.http.patch(
      this._authUsersList + "/" + currentUser._id + "/update",
      currentUser
    );
  }

  removeUser(currentUser) {
    return this.http.delete(
      this._authUsersList + "/" + currentUser._id + "/delete",
      currentUser
    );
  }
}
