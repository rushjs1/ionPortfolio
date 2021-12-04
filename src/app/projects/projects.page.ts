import { Component, OnInit } from "@angular/core";

import { AnimationController, Animation } from "@ionic/angular";
@Component({
  selector: "app-projects",
  templateUrl: "./projects.page.html",
  styleUrls: ["./projects.page.scss"]
})
export class ProjectsPage implements OnInit {
  constructor(private animationCtrl: AnimationController) {}
  ionViewWillEnter() {
    const x = window.matchMedia("(min-width:850px)");
    if (x.matches) {
      //WEB Animations
      //row1
      const animation: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#lokeAnim"))
        .duration(1800)
        .iterations(1)
        .fromTo("transform", "translateY(-200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation.play();
      const animation1: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#litAnim"))
        .duration(1500)
        .iterations(1)
        .fromTo("transform", "translateX(200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation1.play();
      const animation2: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#gAnim1"))
        .duration(1900)
        .iterations(1)
        .fromTo("transform", "translateY(200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation2.play();
      //row2
      const animation3: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#sideQuestAnim"))
        .duration(1800)
        .iterations(1)
        .fromTo("transform", "translateY(200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation3.play();
      const animation4: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#weatherAnim1"))
        .duration(1500)
        .iterations(1)
        .fromTo("transform", "translateX(-200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation4.play();
      const animation5: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#cbAnim"))
        .duration(1900)
        .iterations(1)
        .fromTo("transform", "translateY(-200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation5.play();
    } else {
      //MOBILE Animations
      //row1
      const animation: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#lokeAnim"))
        .duration(1800)
        .iterations(1)
        .fromTo("transform", "translateX(-200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation.play();
      const animation1: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#litAnim"))
        .duration(1500)
        .iterations(1)
        .fromTo("transform", "translateX(200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation1.play();
      const animation2: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#gAnim1"))
        .duration(1900)
        .iterations(1)
        .fromTo("transform", "translateY(200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation2.play();
      //row2
      const animation3: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#sideQuestAnim"))
        .duration(1800)
        .iterations(1)
        .fromTo("transform", "translateX(200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation3.play();
      const animation4: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#weatherAnim1"))
        .duration(1500)
        .iterations(1)
        .fromTo("transform", "translateX(-200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation4.play();
      const animation5: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector("#cbAnim"))
        .duration(1900)
        .iterations(1)
        .fromTo("transform", "translateX(-200px)", "translateX(0px)")
        .fromTo("opacity", ".2", "1");
      animation5.play();
    }
  }

  ngOnInit() {}
  ionViewDidEnter() {
    /* const animation: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector(".isCard"))
      .duration(1800)
      .iterations(1)
      .fromTo("transform", "translateX(-200px)", "translateX(0px)")
      .fromTo("opacity", ".2", "1");
    animation.play();
    const animation1: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector(".isCard1"))
      .duration(1500)
      .iterations(1)
      .fromTo("transform", "translateX(200px)", "translateX(0px)")
      .fromTo("opacity", ".2", "1");
    animation1.play();
    const animation2: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector("#gAnim1"))
      .duration(1900)
      .iterations(1)
      .fromTo("transform", "translateY(200px)", "translateX(0px)")
      .fromTo("opacity", ".2", "1");
    animation2.play(); */
  }

  goWeather() {
    window.open("https://pacific-depths-30148.herokuapp.com/", "_blank");
  }
  goIonTennis() {
    window.open("https://ionfiretennis.firebaseapp.com/", "_blank");
  }
  goIonFire() {
    window.open("https://n432-data-rush.web.app/", "_blank");
  }
  goRecipe() {
    window.open("https://mealapp-d5b01.web.app/", "_blank");
  }
  goVRStar() {
    window.open("https://infinite-headland-17851.herokuapp.com/", "_blank");
  }
  goARStar() {
    window.open("https://lit-chamber-58106.herokuapp.com/", "_blank");
  }
  goKitchen() {
    window.open("https://powerful-river-53047.herokuapp.com/", "_blank");
  }
  goSideQuest() {
    window.open(
      "https://sidequestvr.com/app/4064/riley-kitchen-cook",
      "_blank"
    );
  }
  goGalaxy() {
    window.open("https://frozen-falls-11978.herokuapp.com/", "_blank");
  }
  goLit() {
    window.open("https://fast-island-46808.herokuapp.com/", "_blank");
  }
  goLoke() {
    window.open("https://www.getloke.com/skate-spots", "_blank");
  }
  goDBJ() {
    window.open("https://designsbyjarrett.com/", "_blank");
  }
  goRedGif() {
    window.open("https://redditgiffs-57424.web.app/", "_blank");
  }
  goCoffeeBreak() {
    window.open("https://youtu.be/s7x332rI210", "_blank");
  }
}
