import { Component, OnInit } from "@angular/core";
// import { UsersService } from "./../users.service";
import { Http } from "@angular/http";
import { ModalComponent } from "./../modal/modal.component";
import { httpFactory } from "@angular/http/src/http_module";
import { UsersService } from "../users.service";

@Component({
  selector: "app-title-app",
  templateUrl: "./title-app.component.html",
  styleUrls: ["./title-app.component.less"]
})
export class TitleAppComponent implements OnInit {
  users: any[];
  isActive = true;
  user: object;

  // constructor passes the service like a dependency
  constructor(private http: Http, private _auth: UsersService) {
    // this.http.get("http://localhost:3001/api/users").subscribe(response => {
    this.http
      .get("https://heroku-react-users-app.herokuapp.com/api/users")
      .subscribe(response => {
        this.users = response.json();
        console.log(this.users);
      });
  }

  ngOnInit() {}

  onRemove = user => {
    // delete api
    this._auth.removeUser(user).subscribe(response => {
      console.log(response);
    });
  };
}
