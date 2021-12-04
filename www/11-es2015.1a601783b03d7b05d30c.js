(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"U4+L":function(e,n,o){"use strict";o.r(n),o.d(n,"BlogPageModule",(function(){return c}));var b=o("ofXK"),r=o("3Pt+"),t=o("TEn/"),i=o("tyNb"),s=o("fXoL");const a=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Ab({type:e,selectors:[["app-blog"]],decls:312,vars:0,consts:[["color","light"],["color","light","routerLink","/home","slot","start",1,"backBtn"],["name","arrow-undo-circle-outline"],["color","dark"],[1,"projCont"],["color","warning"],["color","secondary"],["color","success"],["src","../../assets/images/2.png"],["src","../../assets/images/1.png"],["color","primary"],["color","danger"],[1,"codeSnips1"],["src","../../assets/images/3.png"],["src","../../assets/images/4.png"],[1,"codeSnips2"],[1,"codeSnips3"],[1,"codeSnips4"],[1,"codeSnips5"],["src","../../assets/images/5.png"],["src","../../assets/images/6.png"],[1,"codeSnips6"],["src","../../assets/images/7.png"],["src","../../assets/images/8.png"],["src","../../assets/images/9.png"],["src","../../assets/images/10.png"],[1,"codeSnips7"],["src","../../assets/images/11.png"]],template:function(e,n){1&e&&(s.Jb(0,"ion-header"),s.Jb(1,"ion-toolbar",0),s.Jb(2,"ion-button",1),s.Xb(3," Back "),s.Hb(4,"ion-icon",2),s.Ib(),s.Jb(5,"ion-title",3),s.Xb(6,"Blog"),s.Ib(),s.Ib(),s.Ib(),s.Jb(7,"ion-content"),s.Jb(8,"div",4),s.Jb(9,"h1"),s.Jb(10,"ion-label",3),s.Xb(11,"A "),s.Jb(12,"ion-label",5),s.Xb(13,"sensible"),s.Ib(),s.Jb(14,"ion-label",6),s.Xb(15," Webpack"),s.Ib(),s.Xb(16," setup using "),s.Jb(17,"ion-label",7),s.Xb(18," Node.js"),s.Ib(),s.Ib(),s.Ib(),s.Jb(19,"h5"),s.Hb(20,"br"),s.Hb(21,"br"),s.Xb(22," step 1.) Lets create some files "),s.Hb(23,"br"),s.Hb(24,"br"),s.Hb(25,"img",8),s.Hb(26,"br"),s.Hb(27,"br"),s.Xb(28," Step 2.) Move the index.html, script.js, and styles.css into the "),s.Jb(29,"i"),s.Xb(30,"src"),s.Ib(),s.Xb(31," directory we have just created. "),s.Hb(32,"br"),s.Hb(33,"br"),s.Hb(34,"img",9),s.Hb(35,"br"),s.Hb(36,"br"),s.Xb(37," Step 4.) in your terminal run "),s.Hb(38,"br"),s.Hb(39,"br"),s.Jb(40,"ion-label",10),s.Xb(41,"npm init -y"),s.Ib(),s.Hb(42,"br"),s.Hb(43,"br"),s.Xb(44," Step 5.) next lets generate our "),s.Jb(45,"ion-label",7),s.Xb(46,"node_modules"),s.Ib(),s.Xb(47," by installing some dependencies necessary for our "),s.Jb(48,"ion-label",6),s.Xb(49,"webpack"),s.Ib(),s.Xb(50," bundling. "),s.Hb(51,"br"),s.Hb(52,"br"),s.Xb(53," - Some of these dependencies include babel( js compiler), port finder, webpack file loading dependencies, a web pack dev server and more. This tutorial will not go over them individually, however I suggest you search them and read up a bit on what they are doing as it is interesting and will help you understand how webpack works a bit better. "),s.Hb(54,"br"),s.Xb(55," - Here is the list of dependencies, you may "),s.Jb(56,"ion-label",11),s.Xb(57,"copy and paste into your package.json file"),s.Ib(),s.Xb(58," in the dependencies section. once you have copied them, simply run npm i , and all the inserted dependencies will install in one go. "),s.Hb(59,"br"),s.Hb(60,"br"),s.Jb(61,"ion-label"),s.Jb(62,"textarea",12),s.Xb(63,'        "dependencies": { "@babel/core": "^7.12.10", "@babel/preset-env":\n        "^7.12.11", "babel-loader": "^8.2.2", "clean-webpack-plugin": "^3.0.0",\n        "copy-webpack-plugin": "^7.0.0", "css-loader": "^5.0.1", "file-loader":\n        "^6.2.0", "html-loader": "^1.3.2", "html-webpack-plugin":\n        "^5.0.0-alpha.7", "mini-css-extract-plugin": "^1.3.5",\n        "portfinder-sync": "0.0.2", "raw-loader": "^4.0.2", "style-loader":\n        "^2.0.0", "webpack": "^5.18.0", "webpack-cli": "^4.4.0",\n        "webpack-dev-server": "^3.11.2", "webpack-merge": "^5.7.3" }\n      '),s.Ib(),s.Ib(),s.Hb(64,"br"),s.Hb(65,"br"),s.Jb(66,"ion-label",10),s.Xb(67," npm install "),s.Ib(),s.Hb(68,"br"),s.Hb(69,"br"),s.Xb(70," Step. 6.) lets create our "),s.Jb(71,"ion-label",6),s.Xb(72,"webpack"),s.Ib(),s.Xb(73," files. "),s.Hb(74,"br"),s.Hb(75,"br"),s.Hb(76,"img",13),s.Hb(77,"br"),s.Hb(78,"br"),s.Xb(79," Step 7.) move them into the "),s.Jb(80,"i"),s.Xb(81,"bundler "),s.Ib(),s.Xb(82,"folder. Your folders should look identical to this now. "),s.Hb(83,"br"),s.Hb(84,"br"),s.Hb(85,"img",14),s.Hb(86,"br"),s.Hb(87,"br"),s.Xb(88," Step 8.) Lets start with our "),s.Jb(89,"ion-label",6),s.Xb(90,"webpack.dev.js"),s.Ib(),s.Xb(91," File. This file is responsible for merging our webpack configurations(that we will later create) and grabbing our ip, using port finder sync to serve our project locally on the webpack-dev-server. Copy and paste the blue code below into your webpack.dev.js "),s.Hb(92,"br"),s.Hb(93,"br"),s.Jb(94,"ion-label"),s.Jb(95,"textarea",15),s.Xb(96," \n            const { merge } = require('webpack-merge')\n            const commonConfiguration = require('./webpack.common.js')\n            const ip = require('internal-ip')\n            const portFinderSync = require('portfinder-sync')\n            \n            const infoColor = (_message) =>\n            {\n                return `\\u001b[1m\\u001b[34m${_message}\\u001b[39m\\u001b[22m`\n            }\n            \n            module.exports = merge(\n                commonConfiguration,\n                {\n                    mode: 'development',\n                    devServer:\n                    {\n                        host: '0.0.0.0',\n                        port: portFinderSync.getPort(8080),\n                        contentBase: './dist',\n                        watchContentBase: true,\n                        open: true,\n                        https: false,\n                        useLocalIp: true,\n                        disableHostCheck: true,\n                        overlay: true,\n                        noInfo: true,\n                        after: function(app, server, compiler)\n                        {\n                            const port = server.options.port\n                            const https = server.options.https ? 's' : ''\n                            const localIp = ip.v4.sync()\n                            const domain1 = `http${https}://${localIp}:${port}`\n                            const domain2 = `http${https}://localhost:${port}`\n                            \n                            console.log(`Project running at:\\n  - ${infoColor(domain1)}\\n  - ${infoColor(domain2)}`)\n                        }\n                    }\n                }\n            )\n            \n        "),s.Ib(),s.Ib(),s.Hb(97,"br"),s.Hb(98,"br"),s.Xb(99," Step 9.) Lets open the "),s.Jb(100,"ion-label",6),s.Xb(101,"webpack.prod.js"),s.Ib(),s.Xb(102,". Much like the dev.js file, this is also responsible for merging our configurations (still not created) , and initiates production mode by remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild. The clean-webpack-plugin is responsible for removing your build folder before building. "),s.Hb(103,"br"),s.Hb(104,"br"),s.Xb(105," -Copy and paste the code into the "),s.Jb(106,"ion-label",6),s.Xb(107,"webpack.prod.js"),s.Ib(),s.Hb(108,"br"),s.Hb(109,"br"),s.Jb(110,"ion-label"),s.Jb(111,"textarea",16),s.Xb(112,"            const { merge } = require('webpack-merge')\n            const commonConfiguration = require('./webpack.common.js')\n            const { CleanWebpackPlugin } = require('clean-webpack-plugin')\n            \n            module.exports = merge(\n                commonConfiguration,\n                {\n                    mode: 'production',\n                    plugins:\n                    [\n                        new CleanWebpackPlugin()\n                    ]\n                }\n            )\n             "),s.Ib(),s.Ib(),s.Hb(113,"br"),s.Hb(114,"br"),s.Xb(115," Step 10.) Lets make our webpack configuration! This is done in the "),s.Jb(116,"ion-label",6),s.Xb(117,"webpack.common.js"),s.Ib(),s.Xb(118,". So go ahead and open it up. This file is responsible for a lot, ill try to break it down briefly. In order to "),s.Hb(119,"br"),s.Hb(120,"br"),s.Xb(121," -Using path, we can first specify and entry point for this new module we want to create and bundle. Additionally, we need to specify our output options, as well as our plugins. as you see in our output.path = path.resolve(__dirname, \u201c../dist/) we are saying hey we want this new bundled module to be in a folder called dist and we want it in the root of our project folder. "),s.Hb(122,"br"),s.Hb(123,"br"),s.Jb(124,"ion-label"),s.Jb(125,"textarea",17),s.Xb(126,"module.exports = {\n\n            entry: path.resolve(__dirname, '../src/script.js'),\n               output:\n               {\n                   filename: 'bundle.[contenthash].js',\n                   path: path.resolve(__dirname, '../dist')\n               },\n               devtool: \u2018source-map\u2019,\n               plugins: {}\n           }\n            "),s.Ib(),s.Ib(),s.Hb(127,"br"),s.Hb(128,"br"),s.Xb(129," Our plugins will help load our files from our src folder, it will search inside to the spot that we point to and in our testing options we can specify in js what file types we would like to search for. If it finds the respective file type, ( in our case its .html, .js, .css, as well as assets such as .jpg, .png and so on), it include them in the bundle. "),s.Hb(130,"br"),s.Hb(131,"br"),s.Xb(132," Htmlwebpackplugin and copywebpackplugin both take one object as a parameter to define where in our project to search. "),s.Hb(133,"br"),s.Hb(134,"br"),s.Xb(135," Please ensure your entire "),s.Jb(136,"ion-label",6),s.Xb(137,"webpack.common.js"),s.Ib(),s.Xb(138," is identical to the code below. "),s.Hb(139,"br"),s.Hb(140,"br"),s.Jb(141,"ion-label"),s.Jb(142,"textarea",18),s.Xb(143," \n            const CopyWebpackPlugin = require('copy-webpack-plugin')\n            const HtmlWebpackPlugin = require('html-webpack-plugin')\n            const MiniCSSExtractPlugin = require('mini-css-extract-plugin')\n            const path = require('path')\n            \n            module.exports = {\n                entry: path.resolve(__dirname, '../src/script.js'),\n                output:\n                {\n                    filename: 'bundle.[contenthash].js',\n                    path: path.resolve(__dirname, '../dist')\n                },\n                devtool: 'source-map',\n                plugins:\n                [\n                    new CopyWebpackPlugin({\n                        patterns: [\n                            { from: path.resolve(__dirname, '../static') }\n                        ]\n                    }),\n                    new HtmlWebpackPlugin({\n                        template: path.resolve(__dirname, '../src/index.html'),\n                        minify: true\n                    }),\n                    new MiniCSSExtractPlugin()\n                ],\n                module:\n                {\n                    rules:\n                    [\n                        // HTML\n                        {\n                            test: /\\.(html)$/,\n                            use: ['html-loader']\n                        },\n            \n                        // JS\n                        {\n                            test: /\\.js$/,\n                            exclude: /node_modules/,\n                            use:\n                            [\n                                'babel-loader'\n                            ]\n                        },\n            \n                        // CSS\n                        {\n                            test: /\\.css$/,\n                            use:\n                            [\n                                MiniCSSExtractPlugin.loader,\n                                'css-loader'\n                            ]\n                        },\n            \n                        // Images\n                        {\n                            test: /\\.(jpg|png|gif|svg)$/,\n                            use:\n                            [\n                                {\n                                    loader: 'file-loader',\n                                    options:\n                                    {\n                                        outputPath: 'assets/images/'\n                                    }\n                                }\n                            ]\n                        },\n            \n                        // Fonts\n                        {\n                            test: /\\.(ttf|eot|woff|woff2)$/,\n                            use:\n                            [\n                                {\n                                    loader: 'file-loader',\n                                    options:\n                                    {\n                                        outputPath: 'assets/fonts/'\n                                    }\n                                }\n                            ]\n                        }\n                    ]\n                }\n            }\n            \n        "),s.Ib(),s.Ib(),s.Hb(144,"br"),s.Hb(145,"br"),s.Xb(146," Step 11.) Add something to your "),s.Jb(147,"ion-label",11),s.Xb(148,"index.html"),s.Ib(),s.Xb(149," to test. ** imprortant** no need to link js or css files into your index, webpack config will handle this. However, we do need to import our css into our js file like so. "),s.Hb(150,"br"),s.Hb(151,"br"),s.Hb(152,"img",19),s.Hb(153,"br"),s.Hb(154,"br"),s.Hb(155,"img",20),s.Hb(156,"br"),s.Hb(157,"br"),s.Xb(158," Step 12.) To run locally, we need to use the webpack dev server. Lets open "),s.Jb(159,"ion-label",7),s.Xb(160,"package.json"),s.Ib(),s.Xb(161," and write some scripts. The dev script will run our run our webpack dev server with our configurations defined in our "),s.Jb(162,"i"),s.Jb(163,"ion-label",6),s.Xb(164,"webpack.dev.js"),s.Ib(),s.Ib(),s.Xb(165,". Also, when we are ready to build, we can do run our build script. Finally, this will "),s.Jb(166,"ion-label",11),s.Xb(167,"bundle"),s.Ib(),s.Xb(168," our files with our configurations defined in our "),s.Jb(169,"i"),s.Jb(170,"ion-label",6),s.Xb(171,"webpack.prod.js"),s.Ib(),s.Ib(),s.Xb(172,". "),s.Hb(173,"br"),s.Hb(174,"br"),s.Jb(175,"ion-label"),s.Jb(176,"textarea",21),s.Xb(177,' \n            "scripts": {\n              "build": "webpack --config ./bundler/webpack.prod.js",\n              "dev": "webpack serve --config ./bundler/webpack.dev.js"\n            },\n        '),s.Ib(),s.Ib(),s.Hb(178,"br"),s.Hb(179,"br"),s.Hb(180,"img",22),s.Hb(181,"br"),s.Hb(182,"br"),s.Xb(183," Step.13) To run our dev script for local development, simply open a new terminal and type in "),s.Hb(184,"br"),s.Hb(185,"br"),s.Jb(186,"ion-label",10),s.Xb(187,"npm run dev"),s.Ib(),s.Hb(188,"br"),s.Hb(189,"br"),s.Xb(190," Step 14.) Now, if you look we have a compiling error. Webpack is looking for contents in the static folder, so if you have none it will throw the error. If you add a "),s.Jb(191,"ion-label",11),s.Xb(192,".gitkeep "),s.Ib(),s.Xb(193,"file into your static folder it will be all set to go. "),s.Hb(194,"br"),s.Hb(195,"br"),s.Hb(196,"img",23),s.Hb(197,"br"),s.Hb(198,"br"),s.Xb(199," You should now see this in your browser if nothing horrible has happened. "),s.Hb(200,"br"),s.Hb(201,"br"),s.Hb(202,"img",24),s.Hb(203,"br"),s.Hb(204,"br"),s.Xb(205," When you are ready to be done, you can build and push to a server of choice. "),s.Hb(206,"br"),s.Hb(207,"br"),s.Jb(208,"i"),s.Xb(209," After building, you should see a "),s.Jb(210,"strong"),s.Xb(211,"dist"),s.Ib(),s.Xb(212," folder in your projects root, that will contain our bundled files!"),s.Ib(),s.Hb(213,"br"),s.Hb(214,"br"),s.Hb(215,"img",25),s.Hb(216,"br"),s.Hb(217,"br"),s.Jb(218,"h2"),s.Xb(219," Lastly, I will show you how to push this project to "),s.Jb(220,"ion-label",6),s.Xb(221," Heroku"),s.Ib(),s.Xb(222,". "),s.Ib(),s.Hb(223,"br"),s.Hb(224,"br"),s.Xb(225," Step 15.) lets install express and add index.js file to our project root "),s.Hb(226,"br"),s.Hb(227,"br"),s.Jb(228,"ion-label",10),s.Xb(229,"npm i express"),s.Ib(),s.Hb(230,"br"),s.Hb(231,"br"),s.Jb(232,"ion-label",10),s.Xb(233," 1> index.js"),s.Ib(),s.Hb(234,"br"),s.Hb(235,"br"),s.Xb(236," Step 16.) Set up basic express server in our index.js in our projects root. "),s.Hb(237,"br"),s.Hb(238,"br"),s.Jb(239,"ion-label"),s.Jb(240,"textarea",26),s.Xb(241,'            const express = require("express");\n            const path = require("path");\n            const port = process.env.PORT || 8080;\n            const app = express();\n            \n            app.use(express.static(__dirname + "/dist"));\n            \n            app.get("/src/", (req, res) => {\n              res.sendFile(path.resolve(__dirname, "index.html"));\n            });\n            app.listen(port);\n             '),s.Ib(),s.Ib(),s.Hb(242,"br"),s.Hb(243,"br"),s.Xb(244," Step 17.) Add these scripts to your package.json "),s.Hb(245,"br"),s.Hb(246,"br"),s.Xb(247,' "start": "node index.js", "heroku-postbuild": "webpack --config ./bundler/webpack.prod.js" '),s.Hb(248,"br"),s.Hb(249,"br"),s.Xb(250," Your scripts should now look like this "),s.Hb(251,"br"),s.Hb(252,"br"),s.Hb(253,"img",27),s.Hb(254,"br"),s.Hb(255,"br"),s.Jb(256,"strong"),s.Xb(257," ** NOTE: You need to run the build script one more time at this point"),s.Ib(),s.Hb(258,"br"),s.Hb(259,"br"),s.Xb(260," Step 18.) login using heroku cli "),s.Hb(261,"br"),s.Hb(262,"br"),s.Jb(263,"ion-label",10),s.Xb(264," heroku login"),s.Ib(),s.Hb(265,"br"),s.Hb(266,"br"),s.Xb(267," Step 19.) Create a new heroku app using "),s.Hb(268,"br"),s.Hb(269,"br"),s.Jb(270,"ion-label",10),s.Xb(271,"heroku create"),s.Ib(),s.Hb(272,"br"),s.Hb(273,"br"),s.Xb(274," Step 20.) initialize a new git repo with "),s.Hb(275,"br"),s.Hb(276,"br"),s.Jb(277,"ion-label",10),s.Xb(278," git init"),s.Ib(),s.Hb(279,"br"),s.Hb(280,"br"),s.Xb(281," on VS code , at this time you may be asked to add a "),s.Jb(282,"ion-label",11),s.Xb(283,".gitignore"),s.Ib(),s.Xb(284," , go ahead and click yes. "),s.Hb(285,"br"),s.Hb(286,"br"),s.Xb(287," Step 21.) retrieve the repo you just created and deploy. "),s.Hb(288,"br"),s.Hb(289,"br"),s.Jb(290,"ion-label",10),s.Xb(291,"heroku git:remote --a your-heroku-app-name"),s.Ib(),s.Hb(292,"br"),s.Hb(293,"br"),s.Jb(294,"ion-label",10),s.Xb(295,"git add ."),s.Ib(),s.Hb(296,"br"),s.Hb(297,"br"),s.Jb(298,"ion-label",10),s.Xb(299," git commit -am \u201cfirst\u201d "),s.Ib(),s.Hb(300,"br"),s.Hb(301,"br"),s.Jb(302,"ion-label",10),s.Xb(303," git push heroku master"),s.Ib(),s.Hb(304,"br"),s.Hb(305,"br"),s.Jb(306,"strong"),s.Jb(307,"h3"),s.Xb(308," You should now see a link to your hosted site in your terminal. "),s.Ib(),s.Ib(),s.Hb(309,"br"),s.Hb(310,"br"),s.Hb(311,"br"),s.Ib(),s.Ib(),s.Ib())},directives:[t.l,t.v,t.e,t.y,i.h,t.m,t.u,t.k,t.o],styles:[".ion-color-newtan[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-newtan);--ion-color-base-rgb:var(--ion-color-newtan-rgb);--ion-color-contrast:var(--ion-color-newtan-contrast);--ion-color-contrast-rgb:var(--ion-color-newtan-contrast-rgb);--ion-color-shade:var(--ion-color-newtan-shade);--ion-color-tint:var(--ion-color-newtan-tint)}.ion-color-black[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-black);--ion-color-base-rgb:var(--ion-color-black-rgb);--ion-color-contrast:var(--ion-color-black-contrast);--ion-color-contrast-rgb:var(--ion-color-black-contrast-rgb);--ion-color-shade:var(--ion-color-black-shade);--ion-color-tint:var(--ion-color-black-tint)}.backBtn[_ngcontent-%COMP%]{--border-color:var(--ion-color-black)}.imgCont[_ngcontent-%COMP%]{align-items:center}.imgCont[_ngcontent-%COMP%], .projCont[_ngcontent-%COMP%]{display:flex;justify-content:center}.projCont[_ngcontent-%COMP%]{width:90%;flex-direction:row;flex-wrap:wrap;margin-left:4.5%}.codeSnips1[_ngcontent-%COMP%]{width:50%;height:5%}.codeSnips2[_ngcontent-%COMP%], .codeSnips3[_ngcontent-%COMP%]{width:50%;height:8%}.codeSnips4[_ngcontent-%COMP%]{width:50%;height:5%}.codeSnips5[_ngcontent-%COMP%]{width:50%;height:15%}.codeSnips6[_ngcontent-%COMP%]{width:50%;height:3%}.codeSnips7[_ngcontent-%COMP%]{width:50%;height:5%}@media only screen and (max-width:1070px){.projCont[_ngcontent-%COMP%]{width:90%;display:flex;justify-content:center;align-items:center;flex-direction:row;margin-left:4.5%}}@media only screen and (max-width:960px){.projCont[_ngcontent-%COMP%]{width:40%;display:flex;justify-content:center;align-items:center;flex-direction:row;flex-wrap:wrap;margin-left:32%}}@media only screen and (max-width:460px){.projCont[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:center;align-items:center;flex-direction:row;flex-wrap:wrap;margin-left:10%}}"]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=s.Eb({type:e}),e.\u0275inj=s.Db({factory:function(n){return new(n||e)},imports:[[i.i.forChild(a)],i.i]}),e})(),c=(()=>{class e{}return e.\u0275mod=s.Eb({type:e}),e.\u0275inj=s.Db({factory:function(n){return new(n||e)},imports:[[b.b,r.a,t.w,l]]}),e})()}}]);