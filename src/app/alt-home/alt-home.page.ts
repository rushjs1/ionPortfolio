import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModelServiceService } from "../services/model-service.service";
@Component({
  selector: "app-alt-home",
  templateUrl: "./alt-home.page.html",
  styleUrls: ["./alt-home.page.scss"]
})
export class AltHomePage implements OnInit {
  constructor(
    public modelService: ModelServiceService,
    public router: Router
  ) {}

  ngOnInit() {}
  goProjects() {
    this.router.navigate(["/projects"]);
  }
  goTutorial() {
    this.router.navigate(["/blog"]);
  }
}
