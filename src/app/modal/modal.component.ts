import { Component } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UsersService } from "../users.service";
import { Http } from "@angular/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.less"]
})
export class ModalComponent {
  closeResult: string;
  addUserData = {};
  users: any[];

  constructor(
    private modalService: NgbModal,
    private _auth: UsersService,
    private http: Http,
    private _router: Router
  ) {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(result => {
        this.closeResult = `Closed with: ${result}`;
      });
  }

  onSubmit() {
    this._auth.addNewUser(this.addUserData).subscribe(
      res => {
        this.http.get("http://localhost:3001/api/users").subscribe(response => {
          this.users = response.json();
          this.users.push(res);
          console.log("users from response: ", this.users);
          this.addUserData = {};
          // this._router.navigate(["/events"]);
        });
        console.log("the whole response: ", res);
      },
      err => console.log(err)
    );

    // need to fetch the users from the data base
    /*  
  this.http.get("http://localhost:3001/api/users").subscribe(response => {
      this.users = response.json();
      console.log(this.users);
    });
    */
  }
}
