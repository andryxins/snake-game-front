(this["webpackJsonpsnake-game-front"]=this["webpackJsonpsnake-game-front"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a,i,s,r,c,o,u,l,h,d=n(1),p=n(0),f=n.n(p),j=n(25),b=n.n(j),m=n(17),v=(n(57),n(14)),O=n(4),g=n(16),x=n(8),y=n(9),k=n(11),S=n(10),w=n(5),_=n.n(w),T=n(49),N=n(15),G=n(2),P=n.n(G),L=n(7),I=Object(L.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,JSON.parse(localStorage.getItem("snakePlayer"));case 3:if(!(t=e.sent)){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",null);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),C=function(){var e=Object(L.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.setItem("snakePlayer",JSON.stringify(t)),e.abrupt("return",!0);case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),W=n(46),z=n(22),D=n.n(z),F=function(){return D.a.get("https://boiling-scrubland-96345.herokuapp.com/users").then((function(e){return e.data}))},A=function(e){return D.a.post("https://boiling-scrubland-96345.herokuapp.com/users/new-user",{login:e}).then((function(e){return e.data}))},E=function(e){var t=e.scores,n=e.level,a=e.token;return D.a.post("https://boiling-scrubland-96345.herokuapp.com/users/update-resault",{scores:t,level:n},{headers:{Authorization:a}})},M={scoresToWin:100,timeForGame:6e4},H=Object(W.a)(),J=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(){return Object(x.a)(this,n),t.call(this,"GameOverScene")}return Object(y.a)(n,[{key:"init",value:function(e){a=e.resault>=M.scoresToWin,i=e.resault}},{key:"preload",value:function(){this.cameras.main.setBackgroundColor("#24252A"),this.game.scene.add("GameScene",R)}},{key:"create",value:function(){return this.add.text(150,200,"Top Scores",{fill:"#0f0",fontSize:20,cursor:"pointer"}).setOrigin(.5).setInteractive().on("pointerdown",this.redirectToTopScoresPage.bind(this)),a?this.winDisplay():this.loseDisplay()}},{key:"winDisplay",value:function(){this.add.text(300,50,"You win :-)",{fill:"#0f0",fontSize:40}).setOrigin(.5),this.add.text(450,200,"Next Level",{fill:"#0f0",fontSize:20}).setOrigin(.5).setInteractive().on("pointerdown",this.nextLevelHandler.bind(this))}},{key:"loseDisplay",value:function(){var e=this;this.add.text(300,50,"You lose :-(",{fill:"#0f0",fontSize:40}).setOrigin(.5),this.add.text(450,200,"Restart",{fill:"#0f0",fontSize:20}).setOrigin(.5).setInteractive().on("pointerdown",(function(){return e.scene.start("GameScene")}))}},{key:"nextLevelHandler",value:function(){var e=Object(L.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.saveGameResault();case 2:this.scene.start("GameScene");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"saveGameResault",value:function(){var e=Object(L.a)(P.a.mark((function e(){var t,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=e.sent,n=Object(N.a)(Object(N.a)({},t),{},{level:t.level+=1,scores:t.scores+=i}),e.next=6,E(n).then((function(){return C(n)})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"redirectToTopScoresPage",value:function(){var e=Object(L.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.saveGameResault();case 2:H.push("/stats"),H.go();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(_.a.Scene),R=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(){return Object(x.a)(this,n),t.call(this,"GameScene")}return Object(y.a)(n,[{key:"init",value:function(){var e=Object(L.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=0,e.next=3,I();case 3:t=e.sent,u=t.level;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"preload",value:function(){this.cameras.main.setBackgroundColor("#24252A"),this.game.scene.add("GameOverScene",J),this.load.image("food","./coin.png"),this.load.image("player","./player.png")}},{key:"create",value:function(){var e=this,t=new _.a.Class({Extends:_.a.GameObjects.Image,initialize:function(e,t,n){_.a.GameObjects.Image.call(this,e),this.setTexture("food"),this.setPosition(16*t,16*n),this.setOrigin(0),this.total=0,e.children.add(this)},eat:function(){this.total++}}),n=new _.a.Class({initialize:function(e,t,n,a){this.headPosition=new _.a.Geom.Point(t,n),this.body=e.add.group(),this.head=this.body.create(10*t,10*n,"player"),this.head.setOrigin(0),this.alive=!0,this.speed=a,this.moveTime=0,this.tail=new _.a.Geom.Point(t,n),this.heading=3,this.direction=3},update:function(e){if(e>=this.moveTime)return this.move(e)},faceLeft:function(){0!==this.direction&&1!==this.direction||(this.heading=2)},faceRight:function(){0!==this.direction&&1!==this.direction||(this.heading=3)},faceUp:function(){2!==this.direction&&3!==this.direction||(this.heading=0)},faceDown:function(){2!==this.direction&&3!==this.direction||(this.heading=1)},move:function(e){switch(this.heading){case 2:this.headPosition.x=_.a.Math.Wrap(this.headPosition.x-1,0,38);break;case 3:this.headPosition.x=_.a.Math.Wrap(this.headPosition.x+1,0,38);break;case 0:this.headPosition.y=_.a.Math.Wrap(this.headPosition.y-1,0,18);break;case 1:this.headPosition.y=_.a.Math.Wrap(this.headPosition.y+1,0,18)}return this.direction=this.heading,_.a.Actions.ShiftPosition(this.body.getChildren(),16*this.headPosition.x,16*this.headPosition.y,1,this.tail),_.a.Actions.GetFirst(this.body.getChildren(),{x:this.head.x,y:this.head.y},1)?(this.alive=!1,!1):(this.moveTime=e+this.speed,!0)},grow:function(){this.body.create(this.tail.x,this.tail.y,"player").setOrigin(0)},collideWithFood:function(e){return this.head.x===e.x&&this.head.y===e.y&&(this.grow(),e.eat(),this.speed>20&&e.total%5===0&&(this.speed-=5),!0)},updateGrid:function(e){return this.body.children.each((function(t){var n=t.x/16,a=t.y/16;e[a][n]=!1})),e}});r=new t(this,3,4),s=new n(this,8,8,100-5*u),h=setTimeout((function(){s.alive=!1,e.scene.start("GameOverScene",{resault:o})}),M.timeForGame),c=this.input.keyboard.createCursorKeys(),l=this.add.text(500,50,"".concat(o),{fill:"#0f0"})}},{key:"update",value:function(e,t){s.alive?(c.left.isDown?s.faceLeft():c.right.isDown?s.faceRight():c.up.isDown?s.faceUp():c.down.isDown&&s.faceDown(),s.update(e)&&s.collideWithFood(r)&&(o+=10,l.setText("".concat(o)),this.repositionFood(),o>=M.scoresToWin&&(clearTimeout(h),this.scene.start("GameOverScene",{resault:o})))):this.scene.start("GameOverScene")}},{key:"repositionFood",value:function(){for(var e=[],t=0;t<17;t++){e[t]=[];for(var n=0;n<37;n++)e[t][n]=!0}s.updateGrid(e);for(var a=[],i=0;i<17;i++)for(var c=0;c<37;c++)!0===e[i][c]&&a.push({x:c,y:i});if(a.length>0){var o=a[Math.floor(Math.random()*a.length)];return r.setPosition(16*o.x,16*o.y),!0}return!1}}]),n}(_.a.Scene),U=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(){return Object(x.a)(this,n),t.call(this,"StartScene")}return Object(y.a)(n,[{key:"preload",value:function(){this.cameras.main.setBackgroundColor("#24252A"),this.game.scene.add("GameScene",R)}},{key:"create",value:function(){var e=Object(L.a)(P.a.mark((function e(){var t,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.add.text(150,200,"Continue",{fill:"#0f0"}).setInteractive().on("pointerdown",this.onContinueHandler.bind(this)),this.add.text(300,200,"Start New Game",{fill:"#0f0"}).setInteractive().on("pointerdown",this.onStartNewGameHandler.bind(this)),e.next=4,I();case 4:t=e.sent,n=t.scores,this.add.text(500,50,"".concat(n),{fill:"#0f0"});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onContinueHandler",value:function(){this.scene.start("GameScene")}},{key:"onStartNewGameHandler",value:function(){var e=Object(L.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=e.sent,e.next=5,C(Object(N.a)(Object(N.a)({},t),{},{scores:0,level:1}));case 5:this.scene.start("GameScene");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(_.a.Scene),B=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={initialize:!0,game:{width:600,height:300,type:_.a.AUTO,scene:U}},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this.state,t=e.initialize,n=e.game;return Object(d.jsx)(T.a,{game:n,initialize:t})}}]),n}(p.Component),Y=n(47),K=n.n(Y),q=function(){var e=Object(g.useLocalStorage)("snakePlayer");return Object(v.a)(e,1)[0]?Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"pageWrapper",children:[Object(d.jsx)("h1",{className:"pageTitle",children:"GamePage"}),Object(d.jsx)("div",{className:K.a.gameContainer,children:Object(d.jsx)(B,{})})]})}):Object(d.jsx)(O.a,{to:"/login"})},V=n(28),X=n.n(V),Z=function(){var e=Object(g.useLocalStorage)("snakePlayer"),t=Object(v.a)(e,1)[0],n=Object(p.useState)(""),a=Object(v.a)(n,2),i=a[0],s=a[1],r=Object(O.g)();return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"pageWrapper",children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"pageTitle",children:"Hello ".concat(t.login)}),Object(d.jsx)("button",{onClick:function(){return(e=t.id,D.a.get("https://boiling-scrubland-96345.herokuapp.com/users/".concat(e)).then((function(e){return e.data}))).then((function(e){return e.isExist?r.push("/"):A(t.login).then((function(e){var n=e.user;return Object(g.writeStorage)("snakePlayer",Object(N.a)(Object(N.a)({},t),{},{login:n.data.login,token:n.token,id:n.data._id}))})).then((function(e){return r.push("/")}))})).catch((function(e){return console.log(e)}));var e},className:X.a.btn,children:"Start Game"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"pageTitle",children:"What's your name?"}),Object(d.jsx)("input",{className:X.a.input,type:"text",value:i,onChange:function(e){var t=e.target;s(t.value)}}),Object(d.jsx)("button",{className:X.a.btn,onClick:function(){return A(i).then((function(e){var t=e.user;return Object(g.writeStorage)("snakePlayer",{login:t.data.login,scores:t.data.topScores,level:t.data.topLevel,token:t.token,id:t.data._id})})).then((function(e){return r.push("/")})).catch((function(e){return console.log(e)}))},disabled:i.length<3,children:"Start Game"})]})})})},Q=n(23),$=n.n(Q),ee=function(e){var t=e.user;return Object(d.jsxs)("div",{className:$.a.listItem,children:[Object(d.jsx)("span",{className:$.a.login,children:t.login}),Object(d.jsx)("span",{className:$.a.scores,children:t.topScores}),Object(d.jsx)("span",{className:$.a.level,children:t.topLevel})]})},te=n(20),ne=n.n(te),ae=function(){var e=Object(p.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(p.useEffect)((function(){function e(){return(e=Object(L.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsxs)("ul",{className:ne.a.list,children:[Object(d.jsxs)("div",{className:ne.a.listTitle,children:[Object(d.jsx)("span",{className:ne.a.listTitleItem,children:"Login"}),Object(d.jsx)("span",{className:ne.a.listTitleItem,children:"Scores"}),Object(d.jsx)("span",{className:ne.a.listTitleItem,children:"Top Level"})]}),n.sort((function(e,t){return t.topScores-e.topScores})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(ee,{user:e})},e._id)}))]})},ie=n(34),se=n.n(ie),re=function(){var e=Object(g.useLocalStorage)("snakePlayer");return Object(v.a)(e,1)[0]?Object(d.jsxs)("div",{className:"container",children:[" ",Object(d.jsxs)("div",{className:"pageWrapper",children:[Object(d.jsx)("h1",{className:"pageTitle",children:"Top Scores"}),Object(d.jsx)("div",{className:se.a.usersList,children:Object(d.jsx)(ae,{})}),Object(d.jsx)(m.b,{className:se.a.link,to:"/",children:"Back to game"})]})]}):Object(d.jsx)(O.a,{to:"/login"})},ce=function(){var e=Object(p.useState)(!1),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(p.useEffect)((function(){a(!0)}),[]),Object(d.jsxs)(O.d,{children:[n&&Object(d.jsx)(O.b,{path:"/",exact:!0,component:q}),Object(d.jsx)(O.b,{path:"/stats",component:re}),Object(d.jsx)(O.b,{path:"/login",component:Z}),Object(d.jsx)(O.a,{to:"/login"})]})};b.a.render(Object(d.jsx)(f.a.StrictMode,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)(ce,{})})}),document.getElementById("root"))},20:function(e,t,n){e.exports={list:"TopScoresList_list__98ref",listTitle:"TopScoresList_listTitle__COYT8",listTitleItem:"TopScoresList_listTitleItem__8gfX1"}},23:function(e,t,n){e.exports={listItem:"TopScoresListItem_listItem__24pFw",login:"TopScoresListItem_login__KZ6UO",scores:"TopScoresListItem_scores__z3mOV",level:"TopScoresListItem_level__guGbJ"}},28:function(e,t,n){e.exports={input:"LoginPage_input__3E3Lp",btn:"LoginPage_btn__sjJIY"}},34:function(e,t,n){e.exports={usersList:"StatsPage_usersList__1qn4c",link:"StatsPage_link__16-3L"}},47:function(e,t,n){e.exports={gameContainer:"GamePage_gameContainer__2Ktxd"}},57:function(e,t,n){},76:function(e,t,n){var a={"./ion-phaser.entry.js":[103,5]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id=76,e.exports=i}},[[100,2,3]]]);
//# sourceMappingURL=main.47d76505.chunk.js.map