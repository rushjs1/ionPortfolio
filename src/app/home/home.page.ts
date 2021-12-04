import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModelServiceService } from "../services/model-service.service";
import { DomController } from "@ionic/angular";
import { Animation, AnimationController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  // public x = window.matchMedia("(min-width: 850px)");
  //public someTxt = document.querySelector(".Oswald");

  constructor(
    public modelService: ModelServiceService,
    public router: Router,
    private domCtrl: DomController,
    private animationCtrl: AnimationController
  ) {}
  ionViewWillEnter() {
    const x = window.matchMedia("(min-width: 850px)");
    if (x.matches) {
      // If media query matches
      this.initializeBackgroundWeb();
    } else {
      this.initializeBackgroundMobile();
    }
  }
  ionViewDidEnter() {
    console.log("test2");
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector("#anim2"))
      .duration(1800)
      .iterations(1)
      .fromTo("transform", "translateX(-200px)", "translateX(0px)")
      .fromTo("opacity", ".2", "1");
    animation.play();
    const animation2: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector("#anim3"))
      .duration(1500)
      .iterations(1)
      .fromTo("transform", "translateX(-300px)", "translateX(0px)")
      .fromTo("opacity", ".2", "1");
    animation2.play();
    const animation3: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector("#anim4"))
      .duration(1500)
      .iterations(1)
      .fromTo("transform", "translateY(-300px)", "translateX(0px)")
      .fromTo("opacity", ".2", "1");
    animation3.play();
  }
  ngOnInit() {}

  goProjects() {
    this.router.navigate(["/projects"]);
  }
  goTutorial() {
    this.router.navigate(["/blog"]);
  }

  goCV() {
    window.open("../../assets/images/CVForPortfolio.pdf", "_blank");
  }

  private initializeBackgroundWeb(): void {
    try {
      console.log("initializing background");
      const content = document.querySelector(".background");
      const innerScroll = content.shadowRoot.querySelector(".inner-scroll");
      this.domCtrl.write(() => {
        innerScroll.setAttribute(
          "style",
          'background: url("../../assets/images/back7.jpg") center center / cover no-repeat'
        );
      });

      console.log("background initialized");
    } catch (e) {}
    console.log("background not initialized");
  }
  private initializeBackgroundMobile(): void {
    try {
      console.log("initializing background");
      const content = document.querySelector(".background");
      const innerScroll = content.shadowRoot.querySelector(".inner-scroll");
      this.domCtrl.write(() => {
        innerScroll.setAttribute(
          "style",
          'background: url("../../assets/images/back18.jpg") center center / cover no-repeat'
        );
      });

      console.log("background initialized");
    } catch (e) {}
    console.log("background not initialized");
  }
}
