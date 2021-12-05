!function(){function o(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}function n(o,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"ct+p":function(e,t,i){"use strict";i.r(t),i.d(t,"HomePageModule",(function(){return h}));var a,r,b,l=i("ofXK"),c=i("TEn/"),s=i("3Pt+"),d=i("tyNb"),u=i("fXoL"),g=i("hJA6"),m=[{path:"",component:(a=function(){function e(n,t,i,a){o(this,e),this.modelService=n,this.router=t,this.domCtrl=i,this.animationCtrl=a}var t,i,a;return t=e,(i=[{key:"ionViewWillEnter",value:function(){window.matchMedia("(min-width: 850px)").matches?this.initializeBackgroundWeb():this.initializeBackgroundMobile()}},{key:"ionViewDidEnter",value:function(){console.log("test2"),this.animationCtrl.create().addElement(document.querySelector("#anim2")).duration(1800).iterations(1).fromTo("transform","translateX(-200px)","translateX(0px)").fromTo("opacity",".2","1").play(),this.animationCtrl.create().addElement(document.querySelector("#anim3")).duration(1500).iterations(1).fromTo("transform","translateX(-300px)","translateX(0px)").fromTo("opacity",".2","1").play(),this.animationCtrl.create().addElement(document.querySelector("#anim4")).duration(1500).iterations(1).fromTo("transform","translateY(-300px)","translateX(0px)").fromTo("opacity",".2","1").play()}},{key:"ngOnInit",value:function(){}},{key:"goProjects",value:function(){this.router.navigate(["/projects"])}},{key:"goTutorial",value:function(){this.router.navigate(["/blog"])}},{key:"goCV",value:function(){window.open("../../assets/images/CVForPortfolio.pdf","_blank")}},{key:"initializeBackgroundWeb",value:function(){try{console.log("initializing background");var o=document.querySelector(".background").shadowRoot.querySelector(".inner-scroll");this.domCtrl.write((function(){o.setAttribute("style",'background: url("../../assets/images/back7.jpg") center center / cover no-repeat')})),console.log("background initialized")}catch(n){}console.log("background not initialized")}},{key:"initializeBackgroundMobile",value:function(){try{console.log("initializing background");var o=document.querySelector(".background").shadowRoot.querySelector(".inner-scroll");this.domCtrl.write((function(){o.setAttribute("style",'background: url("../../assets/images/back18.jpg") center center / cover no-repeat')})),console.log("background initialized")}catch(n){}console.log("background not initialized")}}])&&n(t.prototype,i),a&&n(t,a),e}(),a.\u0275fac=function(o){return new(o||a)(u.Gb(g.a),u.Gb(d.g),u.Gb(c.b),u.Gb(c.a))},a.\u0275cmp=u.Ab({type:a,selectors:[["app-home"]],decls:118,vars:0,consts:[["color","dark"],["color","newtan",1,"Oswald"],["id","headBtnCont","slot","end"],["color","newtan","href","https://whispering-harbor-08664.herokuapp.com/","slot","end",1,"Oswald"],["name","planet-sharp"],[1,"background"],[1,"splash"],[1,"altCont"],[1,"homeCont1"],["color","danger","id","anim2",1,"Oswald"],["color","newtan","id","anim1",1,"Oswald"],["color","newtan","id","anim3",1,"Oswald2"],["name","desktop-outline","color","medium"],["name","bulb-outline","color","medium"],["name","dice-outline","color","medium"],["color","light"],["id","anim4",1,"homeCont2"],[1,"altRightForm"],["color","newtan"],["fill","outline","color","secondary","routerLink","/contact"],[1,"ionSec"],[1,"newHomeCont"],[1,"homeContainer"],["routerLink","/projects","color","light","id","firstCard"],["id","homeCard"],["id","imgConts1"],["id","images"],["pager",""],["src","../../assets/images/lokeDemo4.gif"],["src","../../assets/images/littab2.png"],["src","../../assets/images/space.png","alt","space"],["src","../../assets/images/Screen Shot 2020-12-09 at 5.54.49 PM.png"],["src","../../assets/images/galaxy5.gif"],["src","../../assets/images/php1.png"],["src","../../assets/images/weatherWeb1.png"],[1,"avatarBox"],["src","../../assets/images/me4.jpeg"],[1,"Oswald"],[1,"font-card-info"],["name","logo-nodejs"],["name","git-branch-outline"],["name","logo-web-component"],["name","logo-javascript"],["name","logo-html5"],["name","logo-vue"],["name","logo-angular"],[1,"butCont"],["color","newtan",3,"click"],["name","brush-outline"],["color","newtan","routerLink","/contact"],["name","megaphone-outline"],["color","newtan","href","https://github.com/rushjs1"],["name","logo-github"],["slot","end","color","newtan",3,"click"]],template:function(o,n){1&o&&(u.Jb(0,"ion-header"),u.Jb(1,"ion-toolbar",0),u.Jb(2,"ion-title",1),u.Xb(3,"RUSH | T"),u.Ib(),u.Jb(4,"div",2),u.Jb(5,"ion-button",3),u.Xb(6,"Space "),u.Hb(7,"ion-icon",4),u.Ib(),u.Ib(),u.Ib(),u.Ib(),u.Jb(8,"ion-content",5),u.Jb(9,"div",6),u.Jb(10,"div",7),u.Jb(11,"div",8),u.Jb(12,"ion-label",9),u.Xb(13," JOHN RUSH "),u.Jb(14,"ion-label",10),u.Xb(15,"| TECHNOLOGIES"),u.Ib(),u.Ib(),u.Hb(16,"br"),u.Jb(17,"ion-label",11),u.Hb(18,"ion-icon",12),u.Xb(19," Web Development "),u.Hb(20,"br"),u.Hb(21,"br"),u.Hb(22,"ion-icon",13),u.Xb(23," Augmented & Virtual Reality Solutions "),u.Hb(24,"br"),u.Hb(25,"br"),u.Hb(26,"ion-icon",14),u.Xb(27," Creative 3D Solutions "),u.Ib(),u.Hb(28,"ion-label",15),u.Ib(),u.Jb(29,"div",16),u.Jb(30,"div",17),u.Jb(31,"ion-label",18),u.Jb(32,"i"),u.Xb(33," Im always looking for new projects to help with, or more coding friends. Lets get in touch!"),u.Ib(),u.Ib(),u.Jb(34,"ion-button",19),u.Xb(35," Get in Touch "),u.Ib(),u.Ib(),u.Ib(),u.Ib(),u.Jb(36,"div",20),u.Jb(37,"ion-label",15),u.Hb(38,"br"),u.Jb(39,"div",21),u.Jb(40,"ion-item",22),u.Jb(41,"ion-card",23),u.Jb(42,"div",24),u.Jb(43,"div",25),u.Jb(44,"div",26),u.Jb(45,"ion-slides",27),u.Jb(46,"ion-slide"),u.Hb(47,"img",28),u.Ib(),u.Jb(48,"ion-slide"),u.Hb(49,"img",29),u.Ib(),u.Jb(50,"ion-slide"),u.Hb(51,"img",30),u.Ib(),u.Jb(52,"ion-slide"),u.Hb(53,"img",31),u.Ib(),u.Jb(54,"ion-slide"),u.Hb(55,"img",32),u.Ib(),u.Jb(56,"ion-slide"),u.Hb(57,"img",33),u.Ib(),u.Jb(58,"ion-slide"),u.Hb(59,"img",34),u.Ib(),u.Ib(),u.Ib(),u.Ib(),u.Ib(),u.Jb(60,"ion-card-header"),u.Jb(61,"div",35),u.Jb(62,"ion-avatar"),u.Hb(63,"img",36),u.Ib(),u.Jb(64,"ion-card-title",37),u.Xb(65," John Rush "),u.Ib(),u.Ib(),u.Jb(66,"ion-card-subtitle",37),u.Xb(67,"Web-Developer"),u.Ib(),u.Ib(),u.Jb(68,"ion-card-content"),u.Xb(69," Hello, My name is John Rush. I am a Web developer from Carmel, Indiana. With a passion for 3D, geospatial and RESTful web services, I love to develop robust web applications! "),u.Ib(),u.Jb(70,"ion-card-content",38),u.Jb(71,"strong"),u.Xb(72,"Technologies & Skills: "),u.Ib(),u.Xb(73," Node.js"),u.Hb(74,"ion-icon",39),u.Xb(75,", Git"),u.Hb(76,"ion-icon",40),u.Xb(77,", Web Components "),u.Hb(78,"ion-icon",41),u.Xb(79,", Webpack, Three.js, Babylon.js, P5.js, Greenstock, Mapbox, WebGL, WebXR, SASS, Bootstrap, Heroku, mySQL, phpMyAdmin, jQuery, Google Firebase, Stripe API, Adobe Suite, Blender, Unity, ARFoundation, XR Interaction Toolkit, Vuforia AR Engine. "),u.Hb(80,"br"),u.Hb(81,"br"),u.Jb(82,"strong"),u.Xb(83,"Languages: "),u.Ib(),u.Xb(84," Javascript"),u.Hb(85,"ion-icon",42),u.Xb(86,", PHP, C#, Swift, CSS, HTML"),u.Hb(87,"ion-icon",43),u.Xb(88,". "),u.Hb(89,"br"),u.Hb(90,"br"),u.Jb(91,"strong"),u.Xb(92,"Frameworks: "),u.Ib(),u.Xb(93,"Ionic, Vue.js"),u.Hb(94,"ion-icon",44),u.Xb(95,", Angular.js"),u.Hb(96,"ion-icon",45),u.Xb(97,", CodeIgniter 3.0, Express.js "),u.Hb(98,"br"),u.Hb(99,"br"),u.Ib(),u.Ib(),u.Ib(),u.Ib(),u.Ib(),u.Ib(),u.Jb(100,"ion-item"),u.Jb(101,"div",46),u.Jb(102,"ion-button",47),u.Qb("click",(function(){return n.goProjects()})),u.Xb(103," View My Work "),u.Hb(104,"ion-icon",48),u.Ib(),u.Jb(105,"ion-button",49),u.Xb(106," Contact Me "),u.Hb(107,"ion-icon",50),u.Ib(),u.Ib(),u.Ib(),u.Jb(108,"ion-item"),u.Jb(109,"ion-label",0),u.Xb(110,"Email: Rushjsdev@gmail.com"),u.Ib(),u.Ib(),u.Jb(111,"ion-item"),u.Jb(112,"ion-button",51),u.Xb(113," Github "),u.Hb(114,"ion-icon",52),u.Ib(),u.Jb(115,"ion-button",53),u.Qb("click",(function(){return n.goTutorial()})),u.Jb(116,"ion-label",0),u.Xb(117,"Other Resources"),u.Ib(),u.Ib(),u.Ib(),u.Ib(),u.Ib())},directives:[c.l,c.v,c.u,c.e,c.m,c.k,c.o,c.y,d.h,c.n,c.f,c.t,c.s,c.h,c.d,c.j,c.i,c.g],styles:[".ion-color-newtan[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-newtan);--ion-color-base-rgb:var(--ion-color-newtan-rgb);--ion-color-contrast:var(--ion-color-newtan-contrast);--ion-color-contrast-rgb:var(--ion-color-newtan-contrast-rgb);--ion-color-shade:var(--ion-color-newtan-shade);--ion-color-tint:var(--ion-color-newtan-tint)}.Oswald[_ngcontent-%COMP%]{font-family:Oswald}.splash[_ngcontent-%COMP%]{height:100%;width:100%}.altCont[_ngcontent-%COMP%]{flex-direction:row;height:100%;width:100%;text-shadow:2px 2px 4px #5b7073}.altCont[_ngcontent-%COMP%], .altRightForm[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.altRightForm[_ngcontent-%COMP%]{background-color:rgba(71,71,71,.8);width:80%;flex-direction:column;box-shadow:0 0 30px #f9f3e8;font-size:18px;text-shadow:2px 2px 5px #000;text-align:center;padding:5%;border-style:inset;border-radius:8px;border-color:rgba(213,166,112,.3)}.homeCont1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:10%;font-size:32px;width:100%;flex-direction:column}.butCont[_ngcontent-%COMP%], .homeCont2[_ngcontent-%COMP%]{width:100%}.butCont[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}img[_ngcontent-%COMP%]{height:100%;width:100%}#firstCard[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transform:translateY(-.5em)}#headBtnCont[_ngcontent-%COMP%]{margin-right:2%}@media only screen and (min-width:850px){#firstCard[_ngcontent-%COMP%]{width:65%;margin-left:18%}}"]}),a)}],p=((b=function n(){o(this,n)}).\u0275mod=u.Eb({type:b}),b.\u0275inj=u.Db({factory:function(o){return new(o||b)},imports:[[d.i.forChild(m)],d.i]}),b),h=((r=function n(){o(this,n)}).\u0275mod=u.Eb({type:r}),r.\u0275inj=u.Db({factory:function(o){return new(o||r)},imports:[[l.b,s.a,c.w,p]]}),r)}}])}();