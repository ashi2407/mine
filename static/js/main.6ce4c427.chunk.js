(this.webpackJsonpoilmine=this.webpackJsonpoilmine||[]).push([[0],{378:function(e,t,n){},379:function(e,t,n){},383:function(e,t){},424:function(e,t){},426:function(e,t){},448:function(e,t){},450:function(e,t){},462:function(e,t){},463:function(e,t){},485:function(e,t){},492:function(e,t){},494:function(e,t){},590:function(e,t){},594:function(e,t){},602:function(e,t){},619:function(e,t){},620:function(e,t){},690:function(e,t){},691:function(e,t){},715:function(e,t){},722:function(e,t){},783:function(e,t){},807:function(e,t,n){},812:function(e,t,n){},813:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(47),a=n.n(s),i=(n(216),n(378),n(379),n(380),n(210)),r=n(13),l=n(23),o=n(4),d=n.n(o),j=n(353),b=n.n(j),u=n(59),h=n(369),m=n(362),x=n.n(m),p=n(363),O=n.n(p),f=n(213),y=n.n(f),g=n(79),v=n(34),w=n(96),N="0x7Ef462dfcA9FA34a7e88AB1c1bA9b5131d327b4E",C=n(22),k=(n(807),n(64)),M=(n(808),n(3)),_=function(){k.a.configure();var e=Object(C.g)();y()("button").on("click",(function(){function e(e){return Math.random()*(e-0)+0}for(var t=document.createDocumentFragment(),n=0;n<100;n++){var c="transform: translate3d("+(e(500)-250)+"px, "+(e(200)-150)+"px, 0) rotate("+e(360)+"deg);                    background: hsla("+e(360)+",100%,50%,1);                    animation: bang 700ms ease-out forwards;                    opacity: 0",s=document.createElement("i");s.style.cssText=c.toString(),t.appendChild(s)}y()(this).append(t)})),console.log(window.location.href);var t=Object(c.useState)("Connect"),n=Object(l.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),m=j[0],p=j[1],f=Object(c.useState)(""),_=Object(l.a)(f,2),T=_[0],S=_[1],A=Object(c.useState)(!1),P=Object(l.a)(A,2),E=P[0],B=P[1],D=Object(c.useState)(!1),F=Object(l.a)(D,2),I=F[0],L=F[1],R=Object(c.useState)(!1),W=Object(l.a)(R,2),Y=W[0],q=W[1],V=Object(c.useState)(!1),X=Object(l.a)(V,2),z=X[0],J=X[1],H=Object(c.useState)(""),U=Object(l.a)(H,2),G=U[0],$=U[1],K=Object(c.useState)("0"),Q=Object(l.a)(K,2),Z=Q[0],ee=(Q[1],Object(c.useState)("0")),te=Object(l.a)(ee,2),ne=te[0],ce=te[1],se=Object(c.useState)("0"),ae=Object(l.a)(se,2),ie=ae[0],re=ae[1],le=Object(c.useState)("0"),oe=Object(l.a)(le,2),de=oe[0],je=oe[1],be=Object(c.useState)(e.id),ue=Object(l.a)(be,2),he=(ue[0],ue[1],Object(c.useState)("")),me=Object(l.a)(he,2),xe=me[0],pe=me[1];Object(c.useEffect)((function(){S(JSON.parse(localStorage.getItem("walletAddress")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("walletAddress",JSON.stringify(T))}),[T]);var Oe={walletconnect:{package:h.a,options:{infuraId:"a21cf6bd75f74b49b4eeaac87f970745"}}},fe=new x.a({network:"rinkeby",theme:"dark",cacheProvider:!0,providerOptions:Oe}),ye=function(){B(!E)},ge=function(){L(!I)},ve=function(){q(!Y)},we=function(){J(!z)};function Ne(){return(Ne=Object(r.a)(d.a.mark((function e(){var t,n,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=23;break}return fe.clearCachedProvider(),e.next=4,fe.connect();case 4:return t=e.sent,n=new O.a(t),e.next=8,window.ethereum.send("eth_requestAccounts");case 8:return e.next=10,n.eth.getAccounts();case 10:if(c=e.sent,s=c[0],S(s),console.log(s),!s){e.next=20;break}return p(!0),a("Disconnect"),e.abrupt("return",k.a.info("Connected"));case 20:return e.abrupt("return",k.a.info("Failed to Connect"));case 21:e.next=27;break;case 23:console.log("already Connected !"),ke(),p(""),a("Connect");case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(){return(Ce=Object(r.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x13881"}]});case 3:e.next=16;break;case 5:if(e.prev=5,e.t0=e.catch(0),4902!==e.t0.code){e.next=16;break}return e.prev=8,e.next=11,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x13881",chainName:"Bsc Test Network",nativeCurrency:{name:"Binance",symbol:"BNB",decimals:18},blockExplorerUrls:["https://testnet.bscscan.io"],rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545/"]}]});case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(8),console.error(e.t1);case 16:case"end":return e.stop()}}),e,null,[[0,5],[8,13]])})))).apply(this,arguments)}function ke(){return Me.apply(this,arguments)}function Me(){return(Me=Object(r.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(""),fe.clearCachedProvider(),k.a.error("Wallet Disconnected"),window.location.reload();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _e(){return(_e=Object(r.a)(d.a.mark((function e(){var t,n,c,s,a,i,r,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=42;break}return e.next=3,fe.connect();case 3:return t=e.sent,n=new v.a.providers.Web3Provider(t),c=n.getSigner(),s=new v.a.Contract(N,w,c),a=c.getAddress(),e.t0=v.a.utils,e.next=11,s.getBalance();case 11:return e.t1=e.sent,e.t2=e.t0.formatEther.call(e.t0,e.t1),i=(1*e.t2).toFixed(6),console.log("Contract balance",i.toString()),re(i),e.t3=v.a.utils,e.next=19,s.getMyMiners(a);case 19:return e.t4=e.sent,e.t5=e.t3.formatEther.call(e.t3,e.t4),r=(1*e.t5).toFixed(3),console.log("oil",r.toString()),ce(r),e.prev=24,e.t6=v.a.utils,e.next=28,s.oilRewards(a);case 28:e.t7=e.sent,l=e.t6.formatEther.call(e.t6,e.t7),console.log("Rewards"),console.log(l.toString()),l=v.a.utils.formatEther(l),je(l.toFixed(4)),console.log("Rewards",l),e.next=40;break;case 37:e.prev=37,e.t8=e.catch(24),console.log("No Rewards Yet");case 40:e.next=43;break;case 42:console.log("plese connect wallet");case 43:case"end":return e.stop()}}),e,null,[[24,37]])})))).apply(this,arguments)}function Te(){return(Te=Object(r.a)(d.a.mark((function e(){var t,n,c,s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(bt(),T){e.next=3;break}return e.abrupt("return",k.a.info("Connect Wallet First!!"));case 3:return e.next=5,fe.connect();case 5:return t=e.sent,n=new v.a.providers.Web3Provider(t),c={value:v.a.utils.parseEther(G)},e.prev=8,s=n.getSigner(),a=new v.a.Contract(N,w,s),e.next=13,a.buyBarrels(T,c);case 13:e.sent,console.log(G),console.log(T),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),alert(e.t0);case 21:case"end":return e.stop()}}),e,null,[[8,18]])})))).apply(this,arguments)}function Se(){return Se=Object(r.a)(d.a.mark((function e(){var t,n,c,s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T){e.next=2;break}return e.abrupt("return",k.a.info("Connect Wallet First!!"));case 2:return e.next=4,fe.connect();case 4:return t=e.sent,n=new v.a.providers.Web3Provider(t),e.prev=6,c=n.getSigner(),s=new v.a.Contract(N,w,c),e.next=11,s.sellBarrels();case 11:a=e.sent,console.log(a),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[6,15]])}))),Se.apply(this,arguments)}function Ae(){return(Ae=Object(r.a)(d.a.mark((function e(){var t,n,c,s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T){e.next=2;break}return e.abrupt("return",k.a.info("Connect Wallet First!!"));case 2:return e.next=4,fe.connect();case 4:return t=e.sent,n=new v.a.providers.Web3Provider(t),e.prev=6,c=n.getSigner(),s=new v.a.Contract(N,w,c),e.next=11,s.sellBarrels();case 11:a=e.sent,console.log(a),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[6,15]])})))).apply(this,arguments)}function Pe(){return Pe=Object(r.a)(d.a.mark((function e(){var t,n,c,s,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("*********************************"),e.next=3,fe.connect();case 3:return t=e.sent,n=new v.a.providers.Web3Provider(t),c=new v.a.Contract(N,w,n),console.log(De),s=v.a.utils.parseEther(De),console.log(s),e.next=11,c.calculateBarrelBuySimple(s);case 11:return a=e.sent,i=a.toString(),console.log(i),it(i),e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e)}))),Pe.apply(this,arguments)}!function(){Ce.apply(this,arguments)}(),function(){_e.apply(this,arguments)}();var Ee=Object(c.useState)(""),Be=Object(l.a)(Ee,2),De=Be[0],Fe=Be[1],Ie=Object(c.useState)(""),Le=Object(l.a)(Ie,2),Re=Le[0],We=Le[1],Ye=Object(c.useState)(""),qe=Object(l.a)(Ye,2),Ve=(qe[0],qe[1],Object(c.useState)("")),Xe=Object(l.a)(Ve,2),ze=Xe[0],Je=Xe[1],He=Object(c.useState)(""),Ue=Object(l.a)(He,2),Ge=Ue[0],$e=Ue[1],Ke=Object(c.useState)(""),Qe=Object(l.a)(Ke,2),Ze=(Qe[0],Qe[1],Object(c.useState)("")),et=Object(l.a)(Ze,2),tt=et[0],nt=et[1],ct=Object(c.useState)(""),st=Object(l.a)(ct,2),at=st[0],it=st[1],rt=function(){var e=Object(r.a)(d.a.mark((function e(t){var n,c,s,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(Re,"myaPurchaseprice"),console.log(De,"myaAmount"),console.log(ze,"myaFuturePrice"),console.log(Ge,"duration"),e.next=7,fe.connect();case 7:return n=e.sent,c=new v.a.providers.Web3Provider(n),s=new v.a.Contract(N,w,c),e.t0=v.a.utils,e.next=13,s.calculateBarrelSell(1);case 13:return e.t1=e.sent,a=e.t0.formatEther.call(e.t0,e.t1).toString(),a=Number(a),pe(i=(ze-Re)*Ge*108/100),e.abrupt("return",i);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),lt=function(e){"myaPurchasePrice"===e.target.name?We(e.target.value):"myaAmount"===e.target.name?Fe(e.target.value):"myaFuturePrice"===e.target.name?Je(e.target.value):"Duration"===e.target.name&&($e(e.target.value),nt(De*e.target.value*8/100),function(){Pe.apply(this,arguments)}())},ot=Object(c.useRef)(null),dt=Object(c.useCallback)((function(e){ot.current=e}),[]),jt=Object(c.useCallback)((function(e,t){ot.current&&ot.current(Object(i.a)(Object(i.a)({},t),{},{origin:{y:.7},particleCount:Math.floor(200*e)}))}),[]),bt=Object(c.useCallback)((function(){jt(.25,{spread:26,startVelocity:55}),jt(.2,{spread:60}),jt(.35,{spread:100,decay:.91,scalar:.8}),jt(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),jt(.1,{spread:120,startVelocity:45})}),[jt]);return Object(M.jsxs)("section",{className:"mainminediv",children:[Object(M.jsx)("header",{children:Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-md-3",children:Object(M.jsx)("div",{className:"logobrand",children:Object(M.jsx)("img",{src:"images/minelogo.png",className:"img-fluid"})})}),Object(M.jsx)("div",{className:"col-md-9",children:Object(M.jsxs)("div",{className:"topnav",children:[Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"http://drive.google.com/file/d/1jQu65gdLol8gs4TFspLBJKEC5ghEgbSv/view?usp=sharing",children:"Litepaper"})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#","data-toggle":"modal","data-target":"#modalthree",onClick:ve,children:"Calculator"})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#","data-toggle":"modal","data-target":"#modalone",onClick:ye,children:"Creators Contest"})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#","data-toggle":"modal","data-target":"#modaltwo",onClick:ge,children:"Disclaimer"})}),Object(M.jsx)("li",{children:Object(M.jsx)(g.b,{to:"/RoadMap",children:"RoadMap"})})]}),Object(M.jsx)("div",{className:"fixdtopbtn",children:Object(M.jsx)("button",{className:"connectbtn",onClick:function(){return function(){return Ne.apply(this,arguments)}()},children:s})})]})})]})})}),Object(M.jsx)("div",{className:"container contentsection",children:Object(M.jsx)("div",{className:"row justify-content-center",children:Object(M.jsx)("div",{className:"col-md-6 ",children:Object(M.jsx)("div",{className:"maincontent",children:Object(M.jsxs)("div",{className:"tophiringmin",children:[Object(M.jsxs)("div",{className:"hircontent",children:[Object(M.jsxs)("div",{className:"himininput",children:[Object(M.jsxs)("ul",{children:[Object(M.jsxs)("li",{children:[Object(M.jsx)("p",{children:"Contract"}),Object(M.jsxs)("h5",{children:[ie," MATIC"]})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("p",{children:"Wallet"}),Object(M.jsxs)("h5",{children:[Z," MATIC"]})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("p",{children:"Oil"}),Object(M.jsxs)("h5",{children:[ne," Oil"]})]})]}),Object(M.jsxs)("div",{className:"hirinput",children:[Object(M.jsx)("input",{type:"number",placeholder:"0.1",className:"form-control",onChange:function(e){return $(e.target.value)}}),Object(M.jsx)("span",{children:"MATIC"})]}),Object(M.jsxs)("div",{className:"chekboxcustom",children:[Object(M.jsx)("input",{type:"checkbox"}),Object(M.jsxs)("span",{children:["I have read the ",Object(M.jsx)("span",{children:"Disclaimer"})]})]}),Object(M.jsxs)("button",{className:"hirbuton",onClick:function(){return Te.apply(this,arguments)},children:[Object(M.jsx)(b.a,{refConfetti:dt,style:{position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0}}),"HIRE MINERS"]})]}),Object(M.jsxs)("div",{className:"rewardbox",children:[Object(M.jsxs)("div",{className:"app__interactstatsreward",children:[Object(M.jsx)("p",{children:"Your Rewards"}),Object(M.jsxs)("h5",{children:[de," MATIC"]})]}),Object(M.jsx)("div",{className:"app__rewards",children:Object(M.jsxs)("span",{children:[Object(M.jsx)("button",{className:T?"cmnbtn hoverme":"cmnbtn",onClick:function(){return Ae.apply(this,arguments)},style:{width:"200px"},children:"RE-HIRE"}),Object(M.jsx)("button",{className:T?"cmnbtn hoverme":"cmnbtn",onClick:function(){return Se.apply(this,arguments)},style:{width:"200px"},children:"COLLECT"})]})})]})]}),Object(M.jsx)("div",{className:"adsbox hircontent"}),Object(M.jsxs)("div",{className:"statistics hircontent",children:[Object(M.jsx)("h2",{children:"Statistics"}),Object(M.jsx)("div",{className:"himininput",children:Object(M.jsxs)("ul",{children:[Object(M.jsxs)("li",{children:[Object(M.jsx)("p",{children:"Daily Return"}),Object(M.jsx)("h5",{children:"Up to 8%"})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("p",{children:"APR"}),Object(M.jsx)("h5",{children:"2,920%"})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("p",{children:"Deposit Fee"}),Object(M.jsx)("h5",{children:"8%"})]})]})})]}),Object(M.jsxs)("div",{className:"referrallink hircontent",children:[Object(M.jsx)("h2",{children:"Referral Link"}),Object(M.jsx)("input",{className:"app__referralinput form-control",type:"text",readonly:"",value:T?"https://oilminer.money/"+T:"https://oilminer.money/"}),Object(M.jsxs)("p",{children:["Earn 12% of the MATIC used to mine Oil",Object(M.jsx)("br",{})," from anyone who uses your referral link"]})]})]})})})})}),Object(M.jsxs)("ul",{className:"footerlist ftbottom  ",children:[Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"https://mumbai.polygonscan.com/address/0x7ef462dfca9fa34a7e88ab1c1ba9b5131d327b4e",children:Object(M.jsx)("img",{src:"images/snowtrace_social.png",className:"img-fluid"})})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"http://t.me/oilMiner_bot",children:Object(M.jsx)("img",{src:"images/telegram_social.png",className:"img-fluid"})})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"https://twitter.com/ManOfOil4",children:Object(M.jsx)("img",{src:"images/twitter_social.png",className:"img-fluid"})})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"https://discord.com/channels/963306092568404053/963306164492316722",children:Object(M.jsx)("img",{src:"images/discord_social.png",className:"img-fluid"})})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"https://www.facebook.com/Oil-Miner-105123775520438",children:Object(M.jsx)("img",{src:"images/fb.png",className:"img-fluid"})})})]}),Object(M.jsxs)("div",{children:[Object(M.jsxs)(u.a,{isOpen:E,toggle:function(){return ye()},children:[Object(M.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:ye,children:Object(M.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(M.jsx)(u.b,{children:Object(M.jsxs)("div",{className:"modalcontent",children:[Object(M.jsx)("h2",{children:"Oil Mine Creators Contest"}),Object(M.jsx)("p",{children:"Win a juicy MATIC price pool without the need of a huge following!"}),Object(M.jsx)("strong",{className:"colrpurple",children:"For who is this competition?"}),"         ",Object(M.jsxs)("p",{children:["For anyone who has a social following on Tiktok, Youtube, Twitter, Reddit,.... Small to medium sized accounts. This is for all of us.",Object(M.jsx)("br",{}),"We will have different measures in place to value your content individually depending on many KPIs such as views, comments, likes, post quality and quantity."]}),Object(M.jsx)("p",{children:"Prize pool: 15% of the total marketing wallet fees taken by 31st of May. The total prize pool amount will be announced on May 31st."}),Object(M.jsxs)("h6",{className:"colrpurple",children:["Competition Start: ",Object(M.jsx)("span",{children:"6th of April"})]}),Object(M.jsxs)("h6",{className:"colrpurple",children:["Competition End: ",Object(M.jsx)("span",{children:"31st of May"})]}),Object(M.jsx)("h6",{className:"colrpurple",children:"Prize pool distribution:"}),Object(M.jsxs)("p",{children:["#1 - 30%",Object(M.jsx)("br",{}),"#2 - 20%",Object(M.jsx)("br",{}),"#3 - 15%",Object(M.jsx)("br",{}),"#4 - 10%",Object(M.jsx)("br",{}),"#5 - 8%",Object(M.jsx)("br",{}),"#6 - 6%",Object(M.jsx)("br",{}),"#7 - 4%",Object(M.jsx)("br",{}),"#8 - 3%",Object(M.jsx)("br",{}),"#9 - 2%",Object(M.jsx)("br",{}),"#10 - 2%",Object(M.jsx)("br",{})]}),Object(M.jsx)("h6",{className:"colrpurple",children:"Competition Details & Rules:"}),Object(M.jsxs)("p",{children:["\u2022 Put our website link  in your post, bio or clearly mention it in the video, otherwise your post will not be valued.",Object(M.jsx)("br",{}),"\u2022 Submit your material to ",Object(M.jsx)("a",{href:"https://t.me/roihazecom",rel:"noreferrer",target:"_blank",children:"@roihazecom"})," on TG or Discord.",Object(M.jsx)("br",{}),"\u2022 Post as many times as you wish to increase your chances to win. Not only the quality counts, but also the quantity."]})]})}),Object(M.jsx)(u.c,{})]}),Object(M.jsxs)(u.a,{isOpen:I,toggle:function(){return ge()},className:"modal2",children:[Object(M.jsxs)(u.b,{children:[Object(M.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:ge,children:Object(M.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(M.jsxs)("div",{class:"modalcontent",children:[Object(M.jsx)("h2",{children:"High Risk Investment"}),Object(M.jsx)("p",{children:"Investing in Oil Mine carries a high level of risk, and may not be suitable for all investors. Before deciding to invest in Oil Mine you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with high-risk projects such as Oil Mine, and seek advice from an independent financial advisor."}),Object(M.jsx)("p",{children:"Oil Mine will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information."}),Object(M.jsx)("p",{children:"Oil Mine makes no representation or warranties as to the accuracy and or timelines of the information contained herein. A qualified professional should be consulted before making any financial decisions."})]})]}),Object(M.jsx)(u.c,{})]}),Object(M.jsxs)(u.a,{id:"Calc",isOpen:Y,toggle:function(){return ve()},children:[Object(M.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:ve,children:Object(M.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(M.jsx)(u.b,{style:{backgroundColor:"black"},children:Object(M.jsx)("div",{className:"content-area",children:Object(M.jsx)("div",{className:"custom-container",children:Object(M.jsx)("div",{className:"content-area-inner",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-12 col-md-4 col-lg-3 col-xl-2"}),Object(M.jsx)("div",{className:"col-12 col-md-8 col-lg-9 col-xl-8",children:Object(M.jsx)("form",{onSubmit:rt,children:Object(M.jsx)("div",{className:"content-right",children:Object(M.jsx)("div",{className:"custom-container-inner",children:Object(M.jsx)("div",{className:"video-grid",children:Object(M.jsx)("div",{className:"row justify-content-center",children:Object(M.jsx)("div",{className:"col-lg-12",children:Object(M.jsx)("div",{className:"ac-box",children:Object(M.jsxs)("div",{className:"ac-box-inner",children:[Object(M.jsxs)("div",{className:"text-center",children:[Object(M.jsx)("h4",{children:"Oil & Barrels"}),Object(M.jsx)("h4",{children:"Estimate your returns"}),Object(M.jsx)("h3",{children:"(APR 2920%)"})]}),Object(M.jsx)("div",{className:"ts-form bs-form mt-3",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-md-8 col-xl-3",children:Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"",children:Object(M.jsx)("h5",{children:"Amount(MATIC)"})}),Object(M.jsx)("input",{type:"text",className:"form-control",placeholder:"0",name:"myaAmount",onChange:lt}),Object(M.jsx)("p",{style:{textAlign:"right",transform:"translateY(-33px) translateX(-18px) ",display:"inline-block",float:"right"},children:"Max"})]})}),Object(M.jsx)("div",{className:"col-md-8 col-xl-4",children:Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"",children:Object(M.jsx)("h5",{children:"Price at Purchase($)"})}),Object(M.jsx)("input",{type:"text",className:"form-control",placeholder:"0.071422",name:"myaPurchasePrice",onChange:lt,value:Re}),Object(M.jsx)("p",{style:{textAlign:"right",transform:"translateY(-33px) translateX(-18px) ",display:"inline-block",float:"right"},children:"Current"})]})}),Object(M.jsx)("div",{className:"col-md-8 col-xl-4",children:Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"",children:Object(M.jsx)("h5",{children:"Future  Price($)"})}),Object(M.jsx)("input",{type:"text",className:"form-control",placeholder:"0.071422",name:"myaFuturePrice",onChange:lt}),Object(M.jsx)("p",{style:{textAlign:"right",transform:"translateY(-33px) translateX(-18px) ",display:"inline-block",float:"right"},children:"Current"})]})})]})}),Object(M.jsxs)("div",{className:"ct-range",children:[Object(M.jsx)("label",{htmlFor:"",children:Object(M.jsx)("h5",{children:"364 days"})}),Object(M.jsx)("input",{id:"krish",type:"range",min:"1",max:"364",defaultValue:"25",name:"Duration",className:"form-control-plaintext",onChange:lt})]}),Object(M.jsx)("label",{htmlFor:"",children:Object(M.jsx)("h5",{children:Ge})}),Object(M.jsx)("div",{className:"bridge-table-section mt-5",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-lg-6",children:Object(M.jsx)("table",{className:"table table-borderless",children:Object(M.jsxs)("tbody",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"text-white",children:Object(M.jsx)("h5",{children:"Your Initial Investment"})}),Object(M.jsx)("td",{className:"text-white text-end",children:Object(M.jsxs)("h5",{children:[De," MATIC"]})})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"text-white",children:Object(M.jsxs)("h5",{children:["Total Rewards estimation",Object(M.jsx)("br",{}),"(upto 8 % Daily)"]})}),Object(M.jsx)("td",{className:"text-white text-end",children:Object(M.jsx)("h5",{children:tt})})]})]})})}),Object(M.jsx)("div",{className:"col-lg-6",children:Object(M.jsx)("table",{className:"table table-borderless",children:Object(M.jsxs)("tbody",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"text-white",children:Object(M.jsx)("h5",{children:"Potential return"})}),Object(M.jsx)("td",{className:"text-white text-end",children:Object(M.jsxs)("h5",{children:["$",xe]})})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"text-white",children:Object(M.jsx)("h5",{children:"Barrels"})}),Object(M.jsx)("td",{className:"text-white",children:at}),Object(M.jsx)("td",{colSpan:"2",children:Object(M.jsx)("button",{className:T?"cmnbtn hoverme":"cmnbtn",children:"Calculate"})})]})]})})})]})})]})})})})})})})})})]})})})})})]}),Object(M.jsx)(u.a,{isOpen:z,toggle:function(){return we()},className:"modal4",style:{background:"black"},children:Object(M.jsx)(u.b,{id:"rest",children:Object(M.jsx)("div",{children:Object(M.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:we,children:Object(M.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})})})})]})]})};n(812);k.a.configure();var T=function(){var e=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=function(){s(window.pageYOffset)};return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[]),n}();return console.log(e),Object(M.jsxs)("div",{children:[Object(M.jsx)(g.b,{to:"/",children:Object(M.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(M.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})}),Object(M.jsx)("section",{id:"yeses",children:Object(M.jsxs)("div",{className:"section-timeline",children:[Object(M.jsx)("h2",{style:{backgroundColor:"#222222"},children:"Roadmap"}),Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)("div",{className:"timeline_wrapper",children:[Object(M.jsx)("div",{className:"timeline_progress",children:Object(M.jsx)("div",{className:"timeline_progress-bar"})}),Object(M.jsxs)("div",{"data-w-id":"0f683f86-f550-3954-0d49-2cb73ef13f85",className:"timeline_item",children:[Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f86-45cac3f1",className:"timeline_left",style:{willChange:"opacity",opacity:"1"},children:Object(M.jsx)("div",{className:"timeline_date-text",children:"Year 2022"})}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f89-45cac3f1",className:"timeline_centre",children:Object(M.jsx)("div",{className:"timeline_circle",style:{willChange:"background",backgroundColor:"rgb(65, 65, 65)"}})}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f8b-45cac3f1",className:"timeline_right",style:{willChange:"opacity",opacity:"1"},children:Object(M.jsxs)("div",{className:"margin-bottom-xlarge",children:[Object(M.jsx)("div",{className:"timeline_title",children:"Genesis"}),Object(M.jsxs)("ul",{role:"list",className:"list-4",children:[Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsxs)("div",{className:"timeline_text",children:["-Whitepaper Documentation Website Development",Object(M.jsx)("br",{}),"-Smart Contract Development",Object(M.jsx)("br",{}),"-Testnet for smart contract",Object(M.jsx)("br",{}),"-Smart Contract Audit",Object(M.jsx)("br",{}),"-Smart Contract Deployment on Mainnet",Object(M.jsx)("br",{}),"-Marketing Campaign",Object(M.jsx)("br",{}),"-Discord Launch",Object(M.jsx)("br",{}),"-Telegram Launch",Object(M.jsx)("br",{}),"-Twitter Page",Object(M.jsx)("br",{}),"-Facebook Launch",Object(M.jsx)("br",{}),"-1 Million Market Cap",Object(M.jsx)("br",{}),"-5 Million Market Cap",Object(M.jsx)("br",{}),"-10 Million Market Cap",Object(M.jsx)("br",{}),"-Monthly AMA\u2019s",Object(M.jsx)("br",{}),Object(M.jsx)("br",{})]})}),Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsx)("div",{className:"timeline_text",children:Object(M.jsx)("br",{})})})]})]})})]}),Object(M.jsxs)("div",{"data-w-id":"0f683f86-f550-3954-0d49-2cb73ef13f85",className:"timeline_item",children:[Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f86-45cac3f1",className:"timeline_left",style:e>599?{willChange:"opacity",opacity:"1"}:{willChange:"opacity",opacity:"0.25"},children:Object(M.jsx)("div",{className:"timeline_date-text",children:"Year(2022-2023)"})}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f89-45cac3f1",className:"timeline_centre",children:Object(M.jsx)("div",{className:"timeline_circle",style:e>599?{willChange:"background",backgroundColor:"rgb(255, 255, 255)"}:{willChange:"background",backgroundColor:"rgb(65, 65, 65)"}})}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f8b-45cac3f1",className:"timeline_right",style:e>599?{willChange:"opacity",opacity:"1"}:{willChange:"opacity",opacity:"0.25"},children:Object(M.jsxs)("div",{className:"margin-bottom-xlarge",children:[Object(M.jsx)("div",{className:"timeline_title",children:"Next Phase of the Miners "}),Object(M.jsxs)("ul",{role:"list",className:"list-4",children:[Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsxs)("div",{className:"timeline_text",children:["\u2022 Community Vote on where we go next",Object(M.jsx)("br",{}),"- DeFi is a broad field \u2013 we\u2019ll make it easy for you by narrowing down the best choices and letting you decide what kind of project we do next",Object(M.jsx)("br",{}),"- Those with the most barrels of Oil will have the most voting power",Object(M.jsx)("br",{}),"- The original Oil holders will be able to purchase tokens or nodes of the following project with their barrels of Oil",Object(M.jsx)("br",{}),"- Create a \u201cbulletproof portfolio\u201d with all aspects of investing to protect from any type of economic downturns",Object(M.jsx)("br",{}),"- Expand Marketing and Development Team",Object(M.jsx)("br",{}),"- New V2 dashboard development",Object(M.jsx)("br",{}),"- New Project Testnet testing",Object(M.jsx)("br",{}),"- 50 million Market Cap",Object(M.jsx)("br",{}),"- Apply for IDO on Polkabridge launchpad and do public sale",Object(M.jsx)("br",{}),"- Locked Liquidity for 10 years",Object(M.jsx)("br",{}),"- Audit of Branching Project",Object(M.jsx)("br",{}),"- New Project Mainnet Launch",Object(M.jsx)("br",{}),"- Listing on major DEX\u2019s",Object(M.jsx)("br",{}),"- Coinmarket Cap Listing",Object(M.jsx)("br",{}),"- Coingecko Listing",Object(M.jsx)("br",{}),"- Monthly AMA\u2019s",Object(M.jsx)("br",{}),"- Community votes on future investments from Treasury Funds",Object(M.jsx)("br",{}),"- 100 Million Market Cap",Object(M.jsx)("br",{}),"- Partnerships",Object(M.jsx)("br",{}),"- New V2 Dashboard Deployment",Object(M.jsx)("br",{}),"- Airdrop",Object(M.jsx)("br",{})]})}),Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsx)("div",{className:"timeline_text",children:Object(M.jsx)("br",{})})})]})]})})]}),Object(M.jsxs)("div",{"data-w-id":"0f683f86-f550-3954-0d49-2cb73ef13f85",className:"timeline_item",children:[Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f86-45cac3f1",className:"timeline_left",style:e>1899?{willChange:"opacity",opacity:"1"}:{willChange:"opacity",opacity:"0.25"},children:Object(M.jsx)("div",{className:"timeline_date-text",children:"Year (2023-2024)"})}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f89-45cac3f1",className:"timeline_centre",children:Object(M.jsx)("div",{className:"timeline_circle",style:e>1899?{willChange:"background",backgroundColor:"rgb(255, 255, 255)"}:{willChange:"background",backgroundColor:"rgb(65, 65, 65)"}})}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f8b-45cac3f1",className:"timeline_right",style:e>1899?{willChange:"opacity",opacity:"1"}:{willChange:"opacity",opacity:"0.25"},children:Object(M.jsxs)("div",{className:"margin-bottom-xlarge",children:[Object(M.jsx)("div",{className:"timeline_title",children:"Golden Ages"}),Object(M.jsxs)("ul",{role:"list",className:"list-4",children:[Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsxs)("div",{className:"timeline_text",children:["-Launch Influencer and Athlete Campaigns",Object(M.jsx)("br",{}),"-Sign Major Names to the team",Object(M.jsx)("br",{}),"-Merchandise and E-store Launch",Object(M.jsx)("br",{}),"-500 Million Market Cap",Object(M.jsx)("br",{}),"-Memecoin Lottery \u2013 there will be a lottery done with people\u2019s predictions of what the price of certain Memecoin\u2019s will be \u2013 whoever wins will receive an airdrop",Object(M.jsx)("br",{}),"-Launch on major CEX\u2019s",Object(M.jsx)("br",{}),"-Create DeFi and DEX Platform",Object(M.jsx)("br",{}),"-Allow seamless bridging in between all blockchains easily",Object(M.jsx)("br",{}),"-Develop liquid staking with our own DEX platform",Object(M.jsx)("br",{}),"-Allow project holders to vote on next investments from the treasury",Object(M.jsx)("br",{}),"-Monthly AMA\u2019s",Object(M.jsx)("br",{}),Object(M.jsx)("br",{})]})}),Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsx)("div",{className:"timeline_text",children:Object(M.jsx)("br",{})})})]})]})})]}),Object(M.jsxs)("div",{"data-w-id":"0f683f86-f550-3954-0d49-2cb73ef13f85",className:"timeline_item",children:[Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f86-45cac3f1",className:"timeline_left",style:e>2699?{willChange:"opacity",opacity:"1"}:{willChange:"opacity",opacity:"0.25"},children:Object(M.jsx)("div",{className:"timeline_date-text",children:"Year (2025-2026)"})}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f89-45cac3f1",className:"timeline_centre",children:Object(M.jsx)("div",{className:"timeline_circle",style:e>2699?{willChange:"background",backgroundColor:"rgb(255, 255, 255)"}:{willChange:"background",backgroundColor:"rgb(65, 65, 65)"}})}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f8b-45cac3f1",className:"timeline_right",style:e>2699?{willChange:"opacity",opacity:"1"}:{willChange:"opacity",opacity:"0.25"},children:Object(M.jsxs)("div",{className:"margin-bottom-xlarge",children:[Object(M.jsx)("div",{className:"timeline_title",children:"Unstoppable"}),Object(M.jsxs)("ul",{role:"list",className:"list-4",children:[Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsxs)("div",{className:"timeline_text",children:["-1 Billion Dollar Market Cap",Object(M.jsx)("br",{}),"- Continued Developer and Investor Team additions",Object(M.jsx)("br",{}),"- Form ETF\u2019s and DAO\u2019s that will overcome regulatory hurdle\u2019s",Object(M.jsx)("br",{}),"- PR and Marketing Campaign",Object(M.jsx)("br",{}),"- Monthly AMA\u2019s",Object(M.jsx)("br",{}),"- Much more to come!",Object(M.jsx)("br",{})]})}),Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsx)("div",{className:"timeline_text",children:Object(M.jsx)("br",{})})})]})]})})]}),Object(M.jsxs)("div",{"data-w-id":"0f683f86-f550-3954-0d49-2cb73ef13f85",className:"timeline_item",children:[Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f86-45cac3f1",className:"timeline_left",style:e>2170?{willChange:"opacity",opacity:"1"}:{willChange:"opacity",opacity:"0.25"},children:Object(M.jsx)("div",{className:"timeline_date-text"})}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f89-45cac3f1",className:"timeline_centre"}),Object(M.jsx)("div",{id:"w-node-_0f683f86-f550-3954-0d49-2cb73ef13f8b-45cac3f1",className:"timeline_right",style:e>2170?{willChange:"opacity",opacity:"1"}:{willChange:"opacity",opacity:"0.25"},children:Object(M.jsxs)("div",{className:"margin-bottom-xlarge",children:[Object(M.jsx)("div",{className:"timeline_title"}),Object(M.jsxs)("ul",{role:"list",className:"list-4",children:[Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsx)("div",{className:"timeline_text",children:Object(M.jsx)("br",{})})}),Object(M.jsx)("li",{className:"list-item-2",children:Object(M.jsx)("div",{className:"timeline_text",children:Object(M.jsx)("br",{})})})]})]})})]}),Object(M.jsx)("div",{className:"overlay-fade-bottom"}),Object(M.jsx)("div",{className:"overlay-fade-top"})]})})]})})]})};var S=function(){return Object(M.jsx)("div",{children:Object(M.jsxs)(C.c,{children:[Object(M.jsx)(C.a,{path:"/homePage",element:Object(M.jsx)(_,{})}),Object(M.jsx)(C.a,{path:"/",element:Object(M.jsx)(_,{})}),Object(M.jsx)(C.a,{path:"/roadMap",element:Object(M.jsx)(T,{})}),Object(M.jsx)(C.a,{path:"*",element:Object(M.jsx)(_,{})})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,824)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};a.a.render(Object(M.jsx)(g.a,{children:Object(M.jsx)(S,{})}),document.getElementById("root")),A()},96:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"_marketing","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyBarrels","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateBarrelBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateBarrelBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"barrels","type":"uint256"}],"name":"calculateBarrelSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getBarrelsSinceLastHarvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyBarrels","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"harvestBarrels","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"oilRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openMines","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellBarrels","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}},[[813,1,2]]]);
//# sourceMappingURL=main.6ce4c427.chunk.js.map