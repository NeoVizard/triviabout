(function(e){function t(t){for(var r,c,a=t[0],i=t[1],u=t[2],l=0,d=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&d.push(s[c][0]),s[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var b=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2179:function(e,t,n){e.exports=n.p+"img/triviabout.173a09de.png"},"21c2":function(e,t,n){"use strict";n("2f00")},"238c":function(e,t,n){},"2f00":function(e,t,n){},"3c9b":function(e,t,n){},5534:function(e,t,n){"use strict";n("238c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function s(e,t,n,s,o,c){var a=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(a)}var o={name:"App"};n("9d48");o.render=s;var c=o,a=n("6c02"),i=n("2179"),u=n.n(i),b=Object(r["D"])("data-v-74ce4d13");Object(r["t"])("data-v-74ce4d13");var l={class:"container"},d=Object(r["h"])("img",{src:u.a,alt:"TriviaBout"},null,-1);Object(r["r"])();var O=b((function(e,t,n,s,o,c){var a=Object(r["x"])("UserNameModal");return Object(r["q"])(),Object(r["e"])("div",l,[o.showModal?(Object(r["q"])(),Object(r["e"])(a,{key:0,onClose:t[1]||(t[1]=function(e){return o.showModal=!1})})):Object(r["f"])("",!0),d,Object(r["h"])("button",{onClick:t[2]||(t[2]=function(e){return c.makeRoom()})},"PLAY")])})),j=(n("7db0"),n("ac1f"),n("1276"),n("2ca0"),n("a15b"),Object(r["D"])("data-v-bff3ac7c"));Object(r["t"])("data-v-bff3ac7c");var m={class:"modal-mask"},f={class:"modal-wrapper"},h={class:"modal-container"},p=Object(r["h"])("div",{class:"modal-header"},"Choose a nickname",-1),v={class:"modal-body"},g={class:"modal-footer"};Object(r["r"])();var w=j((function(e,t,n,s,o,c){return Object(r["q"])(),Object(r["e"])(r["b"],{name:"modal"},{default:j((function(){return[Object(r["h"])("div",m,[Object(r["h"])("div",f,[Object(r["h"])("div",h,[p,Object(r["h"])("div",v,[Object(r["C"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.userName=e})},null,512),[[r["A"],o.userName]]),""!==o.error?(Object(r["q"])(),Object(r["e"])("span",{key:0,innerHTML:o.error},null,8,["innerHTML"])):Object(r["f"])("",!0)]),Object(r["h"])("div",g,[Object(r["h"])("button",{onClick:t[2]||(t[2]=function(e){return c.setUserName()})}," OK ")])])])])]})),_:1})})),q={name:"UserNameModal",data:function(){return{userName:"",error:""}},methods:{setUserName:function(){var e=this.userName;""!==e?(document.cookie="username=".concat(this.userName,"; expires=Fri, 31 Dec 9999 23:59:59 GMT"),this.$emit("close")):this.error="Please enter name"}}};n("be49");q.render=w,q.__scopeId="data-v-bff3ac7c";var k=q,y={components:{UserNameModal:k},name:"Home",data:function(){return{userName:"",showModal:!0}},created:function(){this.showModal=void 0===document.cookie.split("; ").find((function(e){return e.startsWith("username=")}))},methods:{makeRoom:function(){for(var e=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,r=0;r<10;r++)e.push(t.charAt(Math.floor(Math.random()*n)));this.$router.push("/room/".concat(e.join("")))}}};n("7c45");y.render=O,y.__scopeId="data-v-74ce4d13";var L=y,M=Object(r["D"])("data-v-26ae20f4");Object(r["t"])("data-v-26ae20f4");var A={class:"fill-box"};Object(r["r"])();var x=M((function(e,t,n,s,o,c){var a=Object(r["x"])("Loader"),i=Object(r["x"])("Lobby"),u=Object(r["x"])("Question"),b=Object(r["x"])("Answer"),l=Object(r["x"])("Scores");return Object(r["q"])(),Object(r["e"])("div",A,[-2===o.gameState?(Object(r["q"])(),Object(r["e"])(a,{key:0,message:o.loadMessage},null,8,["message"])):Object(r["f"])("",!0),-1===o.gameState?(Object(r["q"])(),Object(r["e"])(i,{key:1,users:o.users,isLeader:o.isLeader,onStartGame:c.startGame},null,8,["users","isLeader","onStartGame"])):Object(r["f"])("",!0),0===o.gameState?(Object(r["q"])(),Object(r["e"])(u,{key:2,question:o.currentQuestion,answers:o.currentAnswers,onSubmitAnswer:c.submitAnswer},null,8,["question","answers","onSubmitAnswer"])):Object(r["f"])("",!0),1===o.gameState?(Object(r["q"])(),Object(r["e"])(b,{key:3,userAnswer:o.userAnswer,correctAnswer:o.correctAnswer,users:o.users,isLeader:o.isLeader,onNextQuestion:c.nextQuestion},null,8,["userAnswer","correctAnswer","users","isLeader","onNextQuestion"])):Object(r["f"])("",!0),2===o.gameState?(Object(r["q"])(),Object(r["e"])(l,{key:4,score:o.score,isLeader:o.isLeader,users:o.users,onPlayAgain:t[1]||(t[1]=function(e){return c.playAgain()})},null,8,["score","isLeader","users"])):Object(r["f"])("",!0)])})),S=n("1da1"),N=(n("96cf"),n("bc3a")),T=n.n(N),Q=n("8e27"),H=n.n(Q),_=Object(r["D"])("data-v-6b0241e2");Object(r["t"])("data-v-6b0241e2");var I={class:"container question"},W={class:"options"};Object(r["r"])();var G=_((function(e,t,n,s,o,c){return Object(r["q"])(),Object(r["e"])("div",I,[Object(r["h"])("h1",{innerHTML:n.question},null,8,["innerHTML"]),Object(r["h"])("div",W,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(n.answers,(function(t){return Object(r["q"])(),Object(r["e"])("button",{class:"option",key:t,onClick:function(n){return e.$emit("submit-answer",t)}},[Object(r["h"])("span",{innerHTML:t},null,8,["innerHTML"])],8,["onClick"])})),128))])])})),C={name:"Question",props:{question:String,answers:Array},emits:["submit-answer"]};n("a9c9");C.render=G,C.__scopeId="data-v-6b0241e2";var P=C,D=(n("4de4"),n("b0c0"),Object(r["D"])("data-v-1daf46bd"));Object(r["t"])("data-v-1daf46bd");var R={class:"fill-box"},U=Object(r["g"])("Correct Answer: "),$={class:"name"},B=Object(r["g"])("'s Answer:"),E={class:"score"},J=Object(r["g"])("Score: ");Object(r["r"])();var V=D((function(e,t,n,s,o,c){return Object(r["q"])(),Object(r["e"])("div",R,[Object(r["h"])("h3",null,[U,Object(r["h"])("span",{innerHTML:n.correctAnswer},null,8,["innerHTML"])]),Object(r["h"])("ul",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(n.users.filter((function(e){return 1===e.state})),(function(e){return Object(r["q"])(),Object(r["e"])("li",{key:e},[Object(r["h"])("div",$,[Object(r["h"])("span",{innerHTML:e.name},null,8,["innerHTML"]),B]),Object(r["h"])("span",{class:"answer",innerHTML:e.answer},null,8,["innerHTML"]),Object(r["h"])("span",E,[J,Object(r["h"])("span",{innerHTML:e.score},null,8,["innerHTML"])])])})),128))]),n.isLeader?(Object(r["q"])(),Object(r["e"])("button",{key:0,onClick:t[1]||(t[1]=function(t){return e.$emit("next-question")})},"Next")):Object(r["f"])("",!0)])})),F={name:"Answer",props:{correctAnswer:String,userAnswer:String,users:Array,isLeader:Boolean},emits:["next-question"]};n("21c2");F.render=V,F.__scopeId="data-v-1daf46bd";var K=F,Y=Object(r["h"])("h2",null,"GAME OVER",-1),z=Object(r["g"])(": ");function X(e,t,n,s,o,c){return Object(r["q"])(),Object(r["e"])("div",null,[Y,Object(r["h"])("ul",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(n.users,(function(e){return Object(r["q"])(),Object(r["e"])("li",{key:e.id},[Object(r["h"])("span",{innerHTML:e.name},null,8,["innerHTML"]),z,Object(r["h"])("span",{innerHTML:e.score},null,8,["innerHTML"])])})),128))]),n.isLeader?(Object(r["q"])(),Object(r["e"])("button",{key:0,onClick:t[1]||(t[1]=function(t){return e.$emit("play-again")})},"Play Again")):Object(r["f"])("",!0)])}n("a9e3");var Z={name:"Scores",props:{score:Number,isLeader:Boolean,users:Array}};n("5534");Z.render=X;var ee=Z,te=Object(r["D"])("data-v-9e236bd0");Object(r["t"])("data-v-9e236bd0");var ne={class:"fill-box"},re=Object(r["g"])(),se={key:0};Object(r["r"])();var oe=te((function(e,t,n,s,o,c){return Object(r["q"])(),Object(r["e"])("div",ne,[Object(r["h"])("ul",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(n.users,(function(e){return Object(r["q"])(),Object(r["e"])("li",{key:e},[Object(r["h"])("span",{innerHTML:e.name},null,8,["innerHTML"]),re,e.isLeader?(Object(r["q"])(),Object(r["e"])("span",se,"👑")):Object(r["f"])("",!0)])})),128))]),n.isLeader?(Object(r["q"])(),Object(r["e"])("button",{key:0,onClick:t[1]||(t[1]=function(t){return e.$emit("start-game")})},"START")):Object(r["f"])("",!0)])})),ce={name:"Lobby",props:{users:Array,isLeader:Boolean}};n("b063");ce.render=oe,ce.__scopeId="data-v-9e236bd0";var ae=ce,ie=Object(r["h"])("h1",null,"LOADING...",-1);function ue(e,t,n,s,o,c){return Object(r["q"])(),Object(r["e"])("div",null,[ie,Object(r["h"])("h2",{innerHTML:n.message},null,8,["innerHTML"])])}var be={name:"Loader",props:{message:String}};be.render=ue;var le=be,de={name:"Game",components:{Question:P,Answer:K,Scores:ee,Lobby:ae,Loader:le},data:function(){return{users:[],userName:"",isLeader:!1,isWaiting:!1,roomName:"",questions:null,currentQuestionIndex:0,currentQuestion:"",currentAnswers:[],correctAnswer:"",userAnswer:"",socket:H()("localhost:3000"),gameState:-2,score:0,loadMessage:""}},created:function(){var e=this;this.userName=document.cookie.split("; ").find((function(e){return e.startsWith("username=")})).split("=")[1],this.roomName=this.$route.params.roomName,this.socket.emit("joinRoom",this.roomName,this.userName),this.socket.on("joinedRoom",(function(t){console.log(t),0===t?e.isWaiting||(e.gameState=-1):(e.isWaiting||(e.gameState=-2),e.loadMessage="Game in progress",e.isWaiting=!0)})),this.socket.on("playAgain",(function(){e.isWaiting=!1,e.gameState=-1,e.score=0})),this.socket.on("gettingQuestions",(function(){e.loadMessage="Getting questions",e.isWaiting||(e.gameState=-2)})),this.socket.on("questions",(function(t){console.log(t),e.isWaiting||(e.gameState=0),e.questions=t,e.currentQuestionIndex=0,e.currentQuestion=e.questions[0].question,e.currentAnswers=e.questions[0].answers})),this.socket.on("users",(function(t){e.users=t,console.log(t),console.log(e.userName),console.log(e.socket.id),e.isLeader=t.find((function(t){return t.id===e.socket.id})).isLeader})),this.socket.on("answers",(function(t){e.users=t,e.isWaiting||(e.gameState=1)})),this.socket.on("nextQuestion",(function(){e.currentQuestionIndex++,e.currentQuestionIndex<e.questions.length?(e.currentQuestion=e.questions[e.currentQuestionIndex].question,e.currentAnswers=e.questions[e.currentQuestionIndex].answers,e.isWaiting||(e.gameState=0)):e.isWaiting||(e.gameState=2)}))},methods:{getQuestions:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("http://localhost:3000/test2");case 3:n=t.sent,e.questions=n.data,e.currentQuestionIndex=0,e.currentQuestion=e.questions[0].question,e.currentAnswers=e.questions[0].answers,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},startGame:function(){this.socket.emit("startGame",this.roomName)},nextQuestion:function(){this.socket.emit("nextQuestion",this.roomName)},submitAnswer:function(e){this.correctAnswer=this.questions[this.currentQuestionIndex].correct_answer,this.userAnswer=e,this.isWaiting||(this.gameState=-2),this.loadMessage="Waiting for others",this.correctAnswer==e?this.score+=100:this.score-=50,this.socket.emit("answer",e,this.score,this.roomName)},playAgain:function(){this.socket.emit("playAgain",this.roomName)}}};de.render=x,de.__scopeId="data-v-26ae20f4";var Oe=de,je={class:"container"};function me(e,t,n,s,o,c){var a=Object(r["x"])("UserNameModal"),i=Object(r["x"])("Game");return Object(r["q"])(),Object(r["e"])("div",je,[o.showModal?(Object(r["q"])(),Object(r["e"])(a,{key:0,onClose:t[1]||(t[1]=function(e){return o.showModal=!1})})):Object(r["f"])("",!0),o.showModal?Object(r["f"])("",!0):(Object(r["q"])(),Object(r["e"])(i,{key:1}))])}var fe={components:{UserNameModal:k,Game:Oe},data:function(){return{showModal:!0}},created:function(){this.showModal=void 0===document.cookie.split("; ").find((function(e){return e.startsWith("username=")}))}};fe.render=me;var he=fe,pe=[{path:"/",name:"home",component:L},{path:"/game",name:"game",component:Oe},{path:"/room/:roomName",name:"room",component:he}],ve=Object(a["a"])({history:Object(a["b"])(),routes:pe}),ge=ve;Object(r["d"])(c).use(ge).mount("#app")},6190:function(e,t,n){},6518:function(e,t,n){},"7c45":function(e,t,n){"use strict";n("6518")},"8f25":function(e,t,n){},"9d48":function(e,t,n){"use strict";n("c0a8")},a9c9:function(e,t,n){"use strict";n("6190")},b063:function(e,t,n){"use strict";n("3c9b")},be49:function(e,t,n){"use strict";n("8f25")},c0a8:function(e,t,n){}});
//# sourceMappingURL=app.c98ba600.js.map