(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(55)},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(23),l=t.n(i),c=t(2),o=t(5),s=t(6),u=t(8),m=t(7),d=t(9),p=function(e){return r.a.createElement("button",{type:"submit",onClick:e.click,"data-aos":e.dataAos},e.name,r.a.createElement("i",{className:"mdi mdi-arrow-right"}))},f=function(){return r.a.createElement("div",{className:"animation"},r.a.createElement("div",{className:"future"},"I'm not a bug, ",r.a.createElement("br",null),"I'm a future"))},E=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"middle-box"},r.a.createElement("div",{className:"text"},"Cze\u015b\u0107, Jestem ",r.a.createElement("span",{className:"highlight"},"Adrian Olszowski"),r.a.createElement("br",null),"I jestem full-stack web developer"),r.a.createElement(p,{click:this.props.click,name:"Zobacz wi\u0119cej"}),r.a.createElement(f,null))))}}]),a}(n.Component),b=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),i=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:i?"menu-flex":"menu-flex-none"},r.a.createElement("div",{className:"nav"},r.a.createElement("div",{onClick:e.clickHome},"HOME"),r.a.createElement("div",{className:"js-scroll-trigger",dest:"about",onClick:function(){return l(!1)}},"O MNIE"),r.a.createElement("div",{className:"js-scroll-trigger",dest:"work",onClick:function(){return l(!1)}},"PRACA"),r.a.createElement("div",{className:"js-scroll-trigger",dest:"blog",onClick:function(){return l(!1)}},"BLOGI"),r.a.createElement("div",{className:"js-scroll-trigger",dest:"contact",onClick:function(){return l(!1)}},"KONTAKT"))),r.a.createElement("div",{className:"menu"},r.a.createElement("i",{className:i?"mdi mdi-mixer":"mdi mdi-menu",onClick:function(){return l(!i)}})))},g=function(e){return r.a.createElement("img",{src:"{{site.baseurl}}/../img/".concat(e.scr,".jpg"),alt:""})},v=t(24),h=t.n(v),k=function(){return Object(n.useEffect)(function(){new h.a(document.querySelector(".glider"),{slidesToShow:1,slidesToScroll:1,draggable:!0,arrows:{prev:".glider-prev",next:".glider-next"},responsive:[{breakpoint:775,settings:{slidesToShow:2,slidesToScroll:1,duration:.25}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,duration:.25}}]})}),r.a.createElement("div",{className:"about"},r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"glider-contain"},r.a.createElement("div",{className:"glider glider-persp draggable"},r.a.createElement("div",null,r.a.createElement(g,{scr:"slider"}),r.a.createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio alias possimus aperiam inventore ratione. Fuga saepe tempora vitae expedita quidem velit, itaque laboriosam ratione molestiae ducimus ea dolorem iste.")),r.a.createElement("div",null,r.a.createElement(g,{scr:"biurko"}),r.a.createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio alias possimus aperiam inventore ratione. Fuga saepe tempora vitae expedita quidem velit, itaque laboriosam ratione molestiae ducimus ea dolorem iste.")),r.a.createElement("div",null,r.a.createElement(g,{scr:"slider1"}),r.a.createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio alias possimus aperiam inventore ratione. Fuga saepe tempora vitae expedita quidem velit, itaque laboriosam ratione molestiae ducimus ea dolorem iste.")),r.a.createElement("div",null,r.a.createElement(g,{scr:"slider2"}),r.a.createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio alias possimus aperiam inventore ratione. Fuga saepe tempora vitae expedita quidem velit, itaque laboriosam ratione molestiae ducimus ea dolorem iste.")),r.a.createElement("div",null,r.a.createElement(g,{scr:"slider3"}),r.a.createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio alias possimus aperiam inventore ratione. Fuga saepe tempora vitae expedita quidem velit, itaque laboriosam ratione molestiae ducimus ea dolorem iste."))),r.a.createElement("button",{role:"button","aria-label":"Previous",className:"glider-prev"},"\xab"),r.a.createElement("button",{role:"button","aria-label":"Next",className:"glider-next"},"\xbb"))))},j=function(e){return r.a.createElement("div",{className:"project-border","data-aos":"fade-up","data-aos-delay":e.delay},r.a.createElement("div",{className:"image-border",style:{backgroundImage:"url({{site.baseurl}}/../img/".concat(e.img,")")}}),e.content)},w=[{id:1,title:"tytul",content:"Tworzenie stron internetowych, w szczeg\xf3lno\u015bci implementacja formularzy sprzeda\u017cowych korzystaj\u0105c z wewn\u0119trznych rozwi\u0105za\u0144 (FreeMarker(ftl), HTML, CSS, JavaScript, JQuery , XML, Groovy)",img:"conf.jpg",delay:0},{id:2,title:"tytul",content:"Tworzenie i rozw\xf3j REST API dla partner\xf3w firmy za pomoc\u0105 PHP(laravel) oraz Mongodb",img:"work1.jpg",delay:300},{id:3,title:"tytul",content:"Rozw\xf3j wewn\u0119trznej aplikacji pomocniczej do obs\u0142ugi bazy Oracle oraz bazy Postgress i Mongo z u\u017cyciem Python oraz Flask, Rozw\xf3j wewn\u0119trznej aplikacji do przerzucania plik\xf3w na serwer ftp(WinScp), utworzonej w NodeJs oraz Vue.JS",img:"javascript.jpg",delay:600}],O=function(){return w.map(function(e){return r.a.createElement(j,{key:e.id,title:e.title,content:e.content,img:e.img,delay:e.delay})})},y=function(){return r.a.createElement("h1",{className:"header-work","data-aos":"fade-up-left"},"CZYM OBECNIE SI\u0118 ZAJMUJ\u0118")},x=function(){return r.a.createElement("section",{id:"work"},r.a.createElement("div",{className:"body-work"},r.a.createElement(y,null),r.a.createElement(O,null)))},N=function(e){return r.a.createElement("section",{id:"blog",className:"sticky"},r.a.createElement("blockquote",null,"Moje projekty",r.a.createElement("span",null)),r.a.createElement("img",{id:"office",src:"{{site.baseurl}}/../img/biurko.jpg"}),r.a.createElement("img",{id:"building",src:"{{site.baseurl}}/../img/pjona.jpg",onClick:e.openTodo}),r.a.createElement("div",{id:"box"}))},z=t(15),S=t.n(z),T=t(25),C=function(e){return r.a.createElement("label",{className:"inp","data-aos":e.dataAos},r.a.createElement("input",{type:"text",id:"inp",placeholder:"\xa0",value:e.value,onChange:e.change}),r.a.createElement("span",{className:"label"},e.label),r.a.createElement("span",{className:"border"}))},A=function(e){return r.a.createElement("label",{className:"inp","data-aos":e.dataAos},r.a.createElement("textarea",{name:"asdasd",id:"inp",cols:"200",rows:"5",placeholder:"\xa0",maxLength:"300",value:e.value,onChange:e.change}),r.a.createElement("span",{className:"label"},e.label),r.a.createElement("span",{className:"border"}))},D=t(26),I=t.n(D),q=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(""),o=Object(c.a)(l,2),s=o[0],u=o[1],m=Object(n.useState)(""),d=Object(c.a)(m,2),f=d[0],E=d[1],b=Object(n.useState)(""),g=Object(c.a)(b,2),v=g[0],h=g[1],k=Object(n.useState)(""),j=Object(c.a)(k,2),w=j[0],O=j[1],y=Object(n.useState)(!1),x=Object(c.a)(y,2),N=(x[0],x[1]);function z(){return(z=Object(T.a)(S.a.mark(function e(a){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,I.a.post("/api/form",{firstName:t,lastName:s,email:f,phone:v,text:w});case 3:e.sent,N(!0);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(C,{label:"Imi\u0119",dataAos:"fade-right",value:t,change:function(e){return i(e.target.value)}}),r.a.createElement(C,{label:"Nazwisko",dataAos:"fade-left",value:s,change:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement(C,{label:"Email",dataAos:"fade-right",value:f,change:function(e){return E(e.target.value)}}),r.a.createElement(C,{label:"Nr telefonu",dataAos:"fade-left",value:v,change:function(e){return h(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement(A,{label:"Wiadomo\u015b\u0107",dataAos:"fade-right",value:w,change:function(e){return O(e.target.value)}}),r.a.createElement(p,{name:"Wy\u015blij",dataAos:"fade-left",click:function(e){return z.apply(this,arguments)}}))))},P=function(){return r.a.createElement("footer",null,r.a.createElement("i",{className:"mdi mdi-facebook-box"}),r.a.createElement("i",{className:"mdi mdi-linkedin-box"}),r.a.createElement("i",{className:"mdi mdi-github-circle"}),r.a.createElement("i",{className:"mdi mdi-nodejs"}))},F=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"body"},r.a.createElement(b,{clickHome:this.props.clickHome}),r.a.createElement(k,null),r.a.createElement(x,null),r.a.createElement(N,{openTodo:this.props.openTodo}),r.a.createElement(q,null),r.a.createElement(P,null))}}]),a}(n.Component),M=t(12),L=function(e){var a=(new Date).toISOString().slice(0,10),t=1*a.slice(0,4)+2;t+=a.slice(4,10);var i=Object(n.useState)(""),l=Object(c.a)(i,2),o=l[0],s=l[1],u=Object(n.useState)(!1),m=Object(c.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)(a),E=Object(c.a)(f,2),b=E[0],g=E[1];return r.a.createElement("div",{className:"form"},r.a.createElement("input",{type:"text",placeholder:"Dodaj zadanie",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"checkbox",checked:d,onChange:function(){return p(!d)},id:"important"}),r.a.createElement("label",{htmlFor:"important"},"Priorytet")," ",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"duedate"},"Do kiedy zrobi\u0107"),r.a.createElement("input",{type:"date",value:b,min:a,max:t,onChange:function(e){return g(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){var t={text:o,date:b,important:d};e.add(t)&&(s(""),p(""),g(a))}},"DODAJ"))},J=function(e){var a=e.task,t=a.text,n=a.date,i=a.id,l=a.active,c=a.finishDate,o=a.important,s=new Date(c).toLocaleString();return l?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",{style:o?{color:"#e31b6d"}:null},t)," - do ",r.a.createElement("span",null,n," "),r.a.createElement("button",{onClick:function(){return e.change(i)}},"Zosta\u0142o zrobione"),r.a.createElement("button",{onClick:function(){return e.delete(i)}},"X"))):r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,t)," - zrobi\u0107 do ",r.a.createElement("span",null,n," ")," ",r.a.createElement("br",null),r.a.createElement("span",null," -potwierdzenie wykoniania ",s," ",r.a.createElement("button",{onClick:function(){return e.delete(i)},style:{height:"20px",width:"20px",fontSize:"10px",padding:"0"}},"X"))))},H=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),i=t[0],l=t[1],o=e.tasks.filter(function(e){return e.active}),s=e.tasks.filter(function(e){return!e.active}),u=o.map(function(a){return r.a.createElement(J,{key:a.id,task:a,delete:e.delete,change:e.change})}),m=s.map(function(a){return r.a.createElement(J,{key:a.id,task:a,delete:e.delete,change:e.change})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Zadanie do zrobienia "),u.length>0?u:r.a.createElement("p",null,"Brak aktywnych zada\u0144 do zrobienia")),r.a.createElement("div",null,r.a.createElement("h2",null,"Zadanie zrobione (",m.length,")"),i?m:m.length>0?m.slice(0,5):r.a.createElement("p",null,"Brak zrobionych zada\u0144"),m.length>5&&r.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return l(!i)}},i?"zwi\u0144":"rozwi\u0144...")))},V=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).deleteTask=function(e){var a=Object(M.a)(t.state.tasks);a=a.filter(function(a){return a.id!==e}),t.setState({tasks:a})},t.changeTaskStatus=function(e){var a=Object(M.a)(t.state.tasks);a.forEach(function(a){a.id===e&&(a.active=!1,a.finishDate=(new Date).getTime())}),t.setState({tasks:a})},t.addtask=function(e){var a=e.text,n=e.date,r=e.important,i={id:t.counter,text:a,date:n,important:r,active:!0,finishDate:null};return t.counter++,t.setState(function(e){return{tasks:[].concat(Object(M.a)(e.tasks),[i])}}),!0},t.counter=6,t.state={tasks:[{id:0,text:"adasdas",date:"2018-02-15",important:!0,active:!0,finishDate:null},{id:1,text:"dsfdsfffffffffffffff",date:"2019-05-13",important:!0,active:!0,finishDate:null},{id:2,text:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",date:"2018-01-11",important:!1,active:!0,finishDate:null},{id:3,text:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",date:"2018-01-11",important:!1,active:!0,finishDate:null},{id:4,text:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",date:"2018-01-11",important:!1,active:!0,finishDate:null},{id:5,text:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",date:"2018-01-11",important:!1,active:!0,finishDate:null}]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"todoapp"},r.a.createElement("h1",null,"TODO APP"),r.a.createElement(L,{add:this.addtask}),r.a.createElement(H,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus}))}}]),a}(n.Component),Z=t(4),B=t.n(Z),R=t(14),W=t.n(R),X=t(10),G=t(11),K=t.n(G);t.e(4).then(t.t.bind(null,56,7)),t.e(3).then(t.t.bind(null,57,7)),t(54),t(14);var U=function(){var e=Object(n.useState)(!0),a=Object(c.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(!1),o=Object(c.a)(l,2),s=o[0],u=o[1];Object(n.useEffect)(function(){B()("div.js-scroll-trigger").click(function(e){m(e.target)}),W.a.init({duration:1e3,easing:"slide",once:!1});var e=new X.TimelineMax({onUpdate:function(){e.progress()}}),a=new X.TimelineMax,t=new K.a.Controller;e.from("blockquote",.5,{x:200,opacity:0}),e.from("span",1,{width:0},"=-.5"),e.from("#office",1,{x:-200,opacity:0,ease:X.Power4.easeInOut},"=-1"),e.from("#building",1,{x:200,opacity:0,ease:X.Power4.easeInOut},"=-.7"),a.from("#box",1,{opacity:0,scale:0}),a.to("#box",.5,{left:"20%",scale:1.3,borderColor:"white",borderWidth:12,boxShadow:"1px 1px 0px 0px rgba(0,0,0,0.09)"}),new K.a.Scene({triggerElement:".sticky",triggerHook:"onLeave",duration:"100%"}).setPin(".sticky").setTween(e).addTo(t),new K.a.Scene({triggerElement:"blockquote"}).setTween(a).addTo(t)});var m=function(e){var a=B()("#"+B()(e).attr("dest"));if(a.length){var t=B()("body").width()>600?a.offset().top-54:a.offset().top;B()("html, body").animate({scrollTop:t},1e3,"easeInOutExpo")}};return r.a.createElement("div",{className:"App"},s?r.a.createElement(V,null):t?r.a.createElement(E,{click:function(){return i(!t)}}):r.a.createElement(F,{clickHome:function(){return i(!t)},openTodo:function(){return u(!0)}}))};l.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.971d0dca.chunk.js.map