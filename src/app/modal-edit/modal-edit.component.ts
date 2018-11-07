import { Component, Input } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UsersService } from "../users.service";
import { Http } from "@angular/http";

@Component({
  selector: "app-modal-edit",
  templateUrl: "./modal-edit.component.html",
  styleUrls: ["./modal-edit.component.less"]
})
export class ModalEditComponent {
  closeResult: string;
  addUserData = {};
  users: any[];
  @Input()
  currentUser: Object;

  constructor(
    private modalService: NgbModal,
    private _auth: UsersService,
    private http: Http
  ) {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(result => {
        this.closeResult = `Closed with: ${result}`;
      });
  }

  // UPDATE user
  updateUser = () => {
    /*this.http
      .patch(
        "http://localhost:3001/api/users/" + userId + "/update",
        JSON.stringify({ isRead: true })
      )*/
    this._auth.editUser(this.currentUser).subscribe(response => {
      console.log(response);
    });
  };
}
