!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o=0;o<n.length;o++){var b=n[o];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"U4+L":function(o,b,r){"use strict";r.r(b),r.d(b,"BlogPageModule",(function(){return g}));var t,i,s,a=r("ofXK"),l=r("3Pt+"),c=r("TEn/"),p=r("tyNb"),d=r("fXoL"),u=[{path:"",component:(t=function(){function o(){e(this,o)}var b,r,t;return b=o,(r=[{key:"ngOnInit",value:function(){}}])&&n(b.prototype,r),t&&n(b,t),o}(),t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Ab({type:t,selectors:[["app-blog"]],decls:312,vars:0,consts:[["color","light"],["color","light","routerLink","/alt-home","slot","start",1,"backBtn"],["name","arrow-undo-circle-outline"],["color","dark"],[1,"projCont"],["color","warning"],["color","secondary"],["color","success"],["src","../../assets/images/2.png"],["src","../../assets/images/1.png"],["color","primary"],["color","danger"],[1,"codeSnips1"],["src","../../assets/images/3.png"],["src","../../assets/images/4.png"],[1,"codeSnips2"],[1,"codeSnips3"],[1,"codeSnips4"],[1,"codeSnips5"],["src","../../assets/images/5.png"],["src","../../assets/images/6.png"],[1,"codeSnips6"],["src","../../assets/images/7.png"],["src","../../assets/images/8.png"],["src","../../assets/images/9.png"],["src","../../assets/images/10.png"],[1,"codeSnips7"],["src","../../assets/images/11.png"]],template:function(e,n){1&e&&(d.Jb(0,"ion-header"),d.Jb(1,"ion-toolbar",0),d.Jb(2,"ion-button",1),d.Xb(3," Back "),d.Hb(4,"ion-icon",2),d.Ib(),d.Jb(5,"ion-title",3),d.Xb(6,"Blog"),d.Ib(),d.Ib(),d.Ib(),d.Jb(7,"ion-content"),d.Jb(8,"div",4),d.Jb(9,"h1"),d.Jb(10,"ion-label",3),d.Xb(11,"A "),d.Jb(12,"ion-label",5),d.Xb(13,"sensible"),d.Ib(),d.Jb(14,"ion-label",6),d.Xb(15," Webpack"),d.Ib(),d.Xb(16," setup using "),d.Jb(17,"ion-label",7),d.Xb(18," Node.js"),d.Ib(),d.Ib(),d.Ib(),d.Jb(19,"h5"),d.Hb(20,"br"),d.Hb(21,"br"),d.Xb(22," step 1.) Lets create some files "),d.Hb(23,"br"),d.Hb(24,"br"),d.Hb(25,"img",8),d.Hb(26,"br"),d.Hb(27,"br"),d.Xb(28," Step 2.) Move the index.html, script.js, and styles.css into the "),d.Jb(29,"i"),d.Xb(30,"src"),d.Ib(),d.Xb(31," directory we have just created. "),d.Hb(32,"br"),d.Hb(33,"br"),d.Hb(34,"img",9),d.Hb(35,"br"),d.Hb(36,"br"),d.Xb(37," Step 4.) in your terminal run "),d.Hb(38,"br"),d.Hb(39,"br"),d.Jb(40,"ion-label",10),d.Xb(41,"npm init -y"),d.Ib(),d.Hb(42,"br"),d.Hb(43,"br"),d.Xb(44," Step 5.) next lets generate our "),d.Jb(45,"ion-label",7),d.Xb(46,"node_modules"),d.Ib(),d.Xb(47," by installing some dependencies necessary for our "),d.Jb(48,"ion-label",6),d.Xb(49,"webpack"),d.Ib(),d.Xb(50," bundling. "),d.Hb(51,"br"),d.Hb(52,"br"),d.Xb(53," - Some of these dependencies include babel( js compiler), port finder, webpack file loading dependencies, a web pack dev server and more. This tutorial will not go over them individually, however I suggest you search them and read up a bit on what they are doing as it is interesting and will help you understand how webpack works a bit better. "),d.Hb(54,"br"),d.Xb(55," - Here is the list of dependencies, you may "),d.Jb(56,"ion-label",11),d.Xb(57,"copy and paste into your package.json file"),d.Ib(),d.Xb(58," in the dependencies section. once you have copied them, simply run npm i , and all the inserted dependencies will install in one go. "),d.Hb(59,"br"),d.Hb(60,"br"),d.Jb(61,"ion-label"),d.Jb(62,"textarea",12),d.Xb(63,'        "dependencies": { "@babel/core": "^7.12.10", "@babel/preset-env":\n        "^7.12.11", "babel-loader": "^8.2.2", "clean-webpack-plugin": "^3.0.0",\n        "copy-webpack-plugin": "^7.0.0", "css-loader": "^5.0.1", "file-loader":\n        "^6.2.0", "html-loader": "^1.3.2", "html-webpack-plugin":\n        "^5.0.0-alpha.7", "mini-css-extract-plugin": "^1.3.5",\n        "portfinder-sync": "0.0.2", "raw-loader": "^4.0.2", "style-loader":\n        "^2.0.0", "webpack": "^5.18.0", "webpack-cli": "^4.4.0",\n        "webpack-dev-server": "^3.11.2", "webpack-merge": "^5.7.3" }\n      '),d.Ib(),d.Ib(),d.Hb(64,"br"),d.Hb(65,"br"),d.Jb(66,"ion-label",10),d.Xb(67," npm install "),d.Ib(),d.Hb(68,"br"),d.Hb(69,"br"),d.Xb(70," Step. 6.) lets create our "),d.Jb(71,"ion-label",6),d.Xb(72,"webpack"),d.Ib(),d.Xb(73," files. "),d.Hb(74,"br"),d.Hb(75,"br"),d.Hb(76,"img",13),d.Hb(77,"br"),d.Hb(78,"br"),d.Xb(79," Step 7.) move them into the "),d.Jb(80,"i"),d.Xb(81,"bundler "),d.Ib(),d.Xb(82,"folder. Your folders should look identical to this now. "),d.Hb(83,"br"),d.Hb(84,"br"),d.Hb(85,"img",14),d.Hb(86,"br"),d.Hb(87,"br"),d.Xb(88," Step 8.) Lets start with our "),d.Jb(89,"ion-label",6),d.Xb(90,"webpack.dev.js"),d.Ib(),d.Xb(91," File. This file is responsible for merging our webpack configurations(that we will later create) and grabbing our ip, using port finder sync to serve our project locally on the webpack-dev-server. Copy and paste the blue code below into your webpack.dev.js "),d.Hb(92,"br"),d.Hb(93,"br"),d.Jb(94,"ion-label"),d.Jb(95,"textarea",15),d.Xb(96," \n            const { merge } = require('webpack-merge')\n            const commonConfiguration = require('./webpack.common.js')\n            const ip = require('internal-ip')\n            const portFinderSync = require('portfinder-sync')\n            \n            const infoColor = (_message) =>\n            {\n                return `\\u001b[1m\\u001b[34m${_message}\\u001b[39m\\u001b[22m`\n            }\n            \n            module.exports = merge(\n                commonConfiguration,\n                {\n                    mode: 'development',\n                    devServer:\n                    {\n                        host: '0.0.0.0',\n                        port: portFinderSync.getPort(8080),\n                        contentBase: './dist',\n                        watchContentBase: true,\n                        open: true,\n                        https: false,\n                        useLocalIp: true,\n                        disableHostCheck: true,\n                        overlay: true,\n                        noInfo: true,\n                        after: function(app, server, compiler)\n                        {\n                            const port = server.options.port\n                            const https = server.options.https ? 's' : ''\n                            const localIp = ip.v4.sync()\n                            const domain1 = `http${https}://${localIp}:${port}`\n                            const domain2 = `http${https}://localhost:${port}`\n                            \n                            console.log(`Project running at:\\n  - ${infoColor(domain1)}\\n  - ${infoColor(domain2)}`)\n                        }\n                    }\n                }\n            )\n            \n        "),d.Ib(),d.Ib(),d.Hb(97,"br"),d.Hb(98,"br"),d.Xb(99," Step 9.) Lets open the "),d.Jb(100,"ion-label",6),d.Xb(101,"webpack.prod.js"),d.Ib(),d.Xb(102,". Much like the dev.js file, this is also responsible for merging our configurations (still not created) , and initiates production mode by remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild. The clean-webpack-plugin is responsible for removing your build folder before building. "),d.Hb(103,"br"),d.Hb(104,"br"),d.Xb(105," -Copy and paste the code into the "),d.Jb(106,"ion-label",6),d.Xb(107,"webpack.prod.js"),d.Ib(),d.Hb(108,"br"),d.Hb(109,"br"),d.Jb(110,"ion-label"),d.Jb(111,"textarea",16),d.Xb(112,"            const { merge } = require('webpack-merge')\n            const commonConfiguration = require('./webpack.common.js')\n            const { CleanWebpackPlugin } = require('clean-webpack-plugin')\n            \n            module.exports = merge(\n                commonConfiguration,\n                {\n                    mode: 'production',\n                    plugins:\n                    [\n                        new CleanWebpackPlugin()\n                    ]\n                }\n            )\n             "),d.Ib(),d.Ib(),d.Hb(113,"br"),d.Hb(114,"br"),d.Xb(115," Step 10.) Lets make our webpack configuration! This is done in the "),d.Jb(116,"ion-label",6),d.Xb(117,"webpack.common.js"),d.Ib(),d.Xb(118,". So go ahead and open it up. This file is responsible for a lot, ill try to break it down briefly. In order to "),d.Hb(119,"br"),d.Hb(120,"br"),d.Xb(121," -Using path, we can first specify and entry point for this new module we want to create and bundle. Additionally, we need to specify our output options, as well as our plugins. as you see in our output.path = path.resolve(__dirname, \u201c../dist/) we are saying hey we want this new bundled module to be in a folder called dist and we want it in the root of our project folder. "),d.Hb(122,"br"),d.Hb(123,"br"),d.Jb(124,"ion-label"),d.Jb(125,"textarea",17),d.Xb(126,"module.exports = {\n\n            entry: path.resolve(__dirname, '../src/script.js'),\n               output:\n               {\n                   filename: 'bundle.[contenthash].js',\n                   path: path.resolve(__dirname, '../dist')\n               },\n               devtool: \u2018source-map\u2019,\n               plugins: {}\n           }\n            "),d.Ib(),d.Ib(),d.Hb(127,"br"),d.Hb(128,"br"),d.Xb(129," Our plugins will help load our files from our src folder, it will search inside to the spot that we point to and in our testing options we can specify in js what file types we would like to search for. If it finds the respective file type, ( in our case its .html, .js, .css, as well as assets such as .jpg, .png and so on), it include them in the bundle. "),d.Hb(130,"br"),d.Hb(131,"br"),d.Xb(132," Htmlwebpackplugin and copywebpackplugin both take one object as a parameter to define where in our project to search. "),d.Hb(133,"br"),d.Hb(134,"br"),d.Xb(135," Please ensure your entire "),d.Jb(136,"ion-label",6),d.Xb(137,"webpack.common.js"),d.Ib(),d.Xb(138," is identical to the code below. "),d.Hb(139,"br"),d.Hb(140,"br"),d.Jb(141,"ion-label"),d.Jb(142,"textarea",18),d.Xb(143," \n            const CopyWebpackPlugin = require('copy-webpack-plugin')\n            const HtmlWebpackPlugin = require('html-webpack-plugin')\n            const MiniCSSExtractPlugin = require('mini-css-extract-plugin')\n            const path = require('path')\n            \n            module.exports = {\n                entry: path.resolve(__dirname, '../src/script.js'),\n                output:\n                {\n                    filename: 'bundle.[contenthash].js',\n                    path: path.resolve(__dirname, '../dist')\n                },\n                devtool: 'source-map',\n                plugins:\n                [\n                    new CopyWebpackPlugin({\n                        patterns: [\n                            { from: path.resolve(__dirname, '../static') }\n                        ]\n                    }),\n                    new HtmlWebpackPlugin({\n                        template: path.resolve(__dirname, '../src/index.html'),\n                        minify: true\n                    }),\n                    new MiniCSSExtractPlugin()\n                ],\n                module:\n                {\n                    rules:\n                    [\n                        // HTML\n                        {\n                            test: /\\.(html)$/,\n                            use: ['html-loader']\n                        },\n            \n                        // JS\n                        {\n                            test: /\\.js$/,\n                            exclude: /node_modules/,\n                            use:\n                            [\n                                'babel-loader'\n                            ]\n                        },\n            \n                        // CSS\n                        {\n                            test: /\\.css$/,\n                            use:\n                            [\n                                MiniCSSExtractPlugin.loader,\n                                'css-loader'\n                            ]\n                        },\n            \n                        // Images\n                        {\n                            test: /\\.(jpg|png|gif|svg)$/,\n                            use:\n                            [\n                                {\n                                    loader: 'file-loader',\n                                    options:\n                                    {\n                                        outputPath: 'assets/images/'\n                                    }\n                                }\n                            ]\n                        },\n            \n                        // Fonts\n                        {\n                            test: /\\.(ttf|eot|woff|woff2)$/,\n                            use:\n                            [\n                                {\n                                    loader: 'file-loader',\n                                    options:\n                                    {\n                                        outputPath: 'assets/fonts/'\n                                    }\n                                }\n                            ]\n                        }\n                    ]\n                }\n            }\n            \n        "),d.Ib(),d.Ib(),d.Hb(144,"br"),d.Hb(145,"br"),d.Xb(146," Step 11.) Add something to your "),d.Jb(147,"ion-label",11),d.Xb(148,"index.html"),d.Ib(),d.Xb(149," to test. ** imprortant** no need to link js or css files into your index, webpack config will handle this. However, we do need to import our css into our js file like so. "),d.Hb(150,"br"),d.Hb(151,"br"),d.Hb(152,"img",19),d.Hb(153,"br"),d.Hb(154,"br"),d.Hb(155,"img",20),d.Hb(156,"br"),d.Hb(157,"br"),d.Xb(158," Step 12.) To run locally, we need to use the webpack dev server. Lets open "),d.Jb(159,"ion-label",7),d.Xb(160,"package.json"),d.Ib(),d.Xb(161," and write some scripts. The dev script will run our run our webpack dev server with our configurations defined in our "),d.Jb(162,"i"),d.Jb(163,"ion-label",6),d.Xb(164,"webpack.dev.js"),d.Ib(),d.Ib(),d.Xb(165,". Also, when we are ready to build, we can do run our build script. Finally, this will "),d.Jb(166,"ion-label",11),d.Xb(167,"bundle"),d.Ib(),d.Xb(168," our files with our configurations defined in our "),d.Jb(169,"i"),d.Jb(170,"ion-label",6),d.Xb(171,"webpack.prod.js"),d.Ib(),d.Ib(),d.Xb(172,". "),d.Hb(173,"br"),d.Hb(174,"br"),d.Jb(175,"ion-label"),d.Jb(176,"textarea",21),d.Xb(177,' \n            "scripts": {\n              "build": "webpack --config ./bundler/webpack.prod.js",\n              "dev": "webpack serve --config ./bundler/webpack.dev.js"\n            },\n        '),d.Ib(),d.Ib(),d.Hb(178,"br"),d.Hb(179,"br"),d.Hb(180,"img",22),d.Hb(181,"br"),d.Hb(182,"br"),d.Xb(183," Step.13) To run our dev script for local development, simply open a new terminal and type in "),d.Hb(184,"br"),d.Hb(185,"br"),d.Jb(186,"ion-label",10),d.Xb(187,"npm run dev"),d.Ib(),d.Hb(188,"br"),d.Hb(189,"br"),d.Xb(190," Step 14.) Now, if you look we have a compiling error. Something about it wanting something to be in there to look for maybe?? idk why, but if you add a "),d.Jb(191,"ion-label",11),d.Xb(192,".gitkeep "),d.Ib(),d.Xb(193,"file into your static folder it will be all set to go. "),d.Hb(194,"br"),d.Hb(195,"br"),d.Hb(196,"img",23),d.Hb(197,"br"),d.Hb(198,"br"),d.Xb(199," You should now see this in your browser if nothing horrible has happened. "),d.Hb(200,"br"),d.Hb(201,"br"),d.Hb(202,"img",24),d.Hb(203,"br"),d.Hb(204,"br"),d.Xb(205," When you are ready to be done, you can build and push to a server of choice. "),d.Hb(206,"br"),d.Hb(207,"br"),d.Jb(208,"i"),d.Xb(209," After building, you should see a "),d.Jb(210,"strong"),d.Xb(211,"dist"),d.Ib(),d.Xb(212," folder in your projects root, that will contain our bundled files!"),d.Ib(),d.Hb(213,"br"),d.Hb(214,"br"),d.Hb(215,"img",25),d.Hb(216,"br"),d.Hb(217,"br"),d.Jb(218,"h2"),d.Xb(219," Lastly, I will show you how to push this project to "),d.Jb(220,"ion-label",6),d.Xb(221," Heroku"),d.Ib(),d.Xb(222,". "),d.Ib(),d.Hb(223,"br"),d.Hb(224,"br"),d.Xb(225," Step 15.) lets install express and add index.js file to our project root "),d.Hb(226,"br"),d.Hb(227,"br"),d.Jb(228,"ion-label",10),d.Xb(229,"npm i express"),d.Ib(),d.Hb(230,"br"),d.Hb(231,"br"),d.Jb(232,"ion-label",10),d.Xb(233," 1> index.js"),d.Ib(),d.Hb(234,"br"),d.Hb(235,"br"),d.Xb(236," Step 16.) Set up basic express server in our index.js in our projects root. "),d.Hb(237,"br"),d.Hb(238,"br"),d.Jb(239,"ion-label"),d.Jb(240,"textarea",26),d.Xb(241,'            const express = require("express");\n            const path = require("path");\n            const port = process.env.PORT || 8080;\n            const app = express();\n            \n            app.use(express.static(__dirname + "/dist"));\n            \n            app.get("/src/", (req, res) => {\n              res.sendFile(path.resolve(__dirname, "index.html"));\n            });\n            app.listen(port);\n             '),d.Ib(),d.Ib(),d.Hb(242,"br"),d.Hb(243,"br"),d.Xb(244," Step 17.) Add these scripts to your package.json "),d.Hb(245,"br"),d.Hb(246,"br"),d.Xb(247,' "start": "node index.js", "heroku-postbuild": "webpack --config ./bundler/webpack.prod.js" '),d.Hb(248,"br"),d.Hb(249,"br"),d.Xb(250," Your scripts should now look like this "),d.Hb(251,"br"),d.Hb(252,"br"),d.Hb(253,"img",27),d.Hb(254,"br"),d.Hb(255,"br"),d.Jb(256,"strong"),d.Xb(257," ** NOTE: You need to run the build script one more time at this point"),d.Ib(),d.Hb(258,"br"),d.Hb(259,"br"),d.Xb(260," Step 18.) login using heroku cli "),d.Hb(261,"br"),d.Hb(262,"br"),d.Jb(263,"ion-label",10),d.Xb(264," heroku login"),d.Ib(),d.Hb(265,"br"),d.Hb(266,"br"),d.Xb(267," Step 19.) Create a new heroku app using "),d.Hb(268,"br"),d.Hb(269,"br"),d.Jb(270,"ion-label",10),d.Xb(271,"heroku create"),d.Ib(),d.Hb(272,"br"),d.Hb(273,"br"),d.Xb(274," Step 20.) initialize a new git repo with "),d.Hb(275,"br"),d.Hb(276,"br"),d.Jb(277,"ion-label",10),d.Xb(278," git init"),d.Ib(),d.Hb(279,"br"),d.Hb(280,"br"),d.Xb(281," on VS code , at this time you may be asked to add a "),d.Jb(282,"ion-label",11),d.Xb(283,".gitignore"),d.Ib(),d.Xb(284," , go ahead and click yes. "),d.Hb(285,"br"),d.Hb(286,"br"),d.Xb(287," Step 21.) retrieve the repo you just created and deploy. "),d.Hb(288,"br"),d.Hb(289,"br"),d.Jb(290,"ion-label",10),d.Xb(291,"heroku git:remote --a your-heroku-app-name"),d.Ib(),d.Hb(292,"br"),d.Hb(293,"br"),d.Jb(294,"ion-label",10),d.Xb(295,"git add ."),d.Ib(),d.Hb(296,"br"),d.Hb(297,"br"),d.Jb(298,"ion-label",10),d.Xb(299," git commit -am \u201cfirst\u201d "),d.Ib(),d.Hb(300,"br"),d.Hb(301,"br"),d.Jb(302,"ion-label",10),d.Xb(303," git push heroku master"),d.Ib(),d.Hb(304,"br"),d.Hb(305,"br"),d.Jb(306,"strong"),d.Jb(307,"h3"),d.Xb(308," You should now see a link to your hosted site in your terminal. "),d.Ib(),d.Ib(),d.Hb(309,"br"),d.Hb(310,"br"),d.Hb(311,"br"),d.Ib(),d.Ib(),d.Ib())},directives:[c.i,c.q,c.b,c.t,p.h,c.j,c.p,c.h,c.l],styles:[".ion-color-newtan[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-newtan);--ion-color-base-rgb:var(--ion-color-newtan-rgb);--ion-color-contrast:var(--ion-color-newtan-contrast);--ion-color-contrast-rgb:var(--ion-color-newtan-contrast-rgb);--ion-color-shade:var(--ion-color-newtan-shade);--ion-color-tint:var(--ion-color-newtan-tint)}.ion-color-black[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-black);--ion-color-base-rgb:var(--ion-color-black-rgb);--ion-color-contrast:var(--ion-color-black-contrast);--ion-color-contrast-rgb:var(--ion-color-black-contrast-rgb);--ion-color-shade:var(--ion-color-black-shade);--ion-color-tint:var(--ion-color-black-tint)}.backBtn[_ngcontent-%COMP%]{--border-color:var(--ion-color-black)}.imgCont[_ngcontent-%COMP%]{align-items:center}.imgCont[_ngcontent-%COMP%], .projCont[_ngcontent-%COMP%]{display:flex;justify-content:center}.projCont[_ngcontent-%COMP%]{width:90%;flex-direction:row;flex-wrap:wrap;margin-left:4.5%}.codeSnips1[_ngcontent-%COMP%]{width:50%;height:5%}.codeSnips2[_ngcontent-%COMP%], .codeSnips3[_ngcontent-%COMP%]{width:50%;height:8%}.codeSnips4[_ngcontent-%COMP%]{width:50%;height:5%}.codeSnips5[_ngcontent-%COMP%]{width:50%;height:15%}.codeSnips6[_ngcontent-%COMP%]{width:50%;height:3%}.codeSnips7[_ngcontent-%COMP%]{width:50%;height:5%}@media only screen and (max-width:1070px){.projCont[_ngcontent-%COMP%]{width:90%;display:flex;justify-content:center;align-items:center;flex-direction:row;margin-left:4.5%}}@media only screen and (max-width:960px){.projCont[_ngcontent-%COMP%]{width:40%;display:flex;justify-content:center;align-items:center;flex-direction:row;flex-wrap:wrap;margin-left:32%}}@media only screen and (max-width:460px){.projCont[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:center;align-items:center;flex-direction:row;flex-wrap:wrap;margin-left:10%}}"]}),t)}],h=((s=function n(){e(this,n)}).\u0275mod=d.Eb({type:s}),s.\u0275inj=d.Db({factory:function(e){return new(e||s)},imports:[[p.i.forChild(u)],p.i]}),s),g=((i=function n(){e(this,n)}).\u0275mod=d.Eb({type:i}),i.\u0275inj=d.Db({factory:function(e){return new(e||i)},imports:[[a.b,l.a,c.r,h]]}),i)}}])}();