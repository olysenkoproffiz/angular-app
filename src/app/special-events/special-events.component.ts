import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-special-events",
  templateUrl: "./special-events.component.html",
  styleUrls: ["./special-events.component.less"]
})
export class SpecialEventsComponent implements OnInit {
  usersAuth: any[];

  constructor(http: Http) {
    http.get("http://localhost:3001/api/userAuths").subscribe(response => {
      this.usersAuth = response.json();
      console.log(this.usersAuth);
    });
  }

  ngOnInit() {}
}
