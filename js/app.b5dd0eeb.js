(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],m=0,d=[];m<s.length;m++)o=s[m],i[o]&&d.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Resume/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3906:function(t,e,n){},"44d1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=(n("a481"),{install:function(t){t.mixin({methods:{publicPath:function(t){return"/Resume/"+t.replace(/^\/+/g,"")}}})}}),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("dark-template-container")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"dark-template"}},[n("v-fade-transition",{attrs:{mode:"out-in",type:"animation"}},[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-flex",{attrs:{md10:"",sm12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{md4:""}},[n("sidebar-container",{staticClass:"fill-height"})],1),n("v-flex",{attrs:{md8:""}},[n("content-container",{staticClass:"fill-height"})],1)],1)],1)],1)],1)],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:"grey darken-3",dark:""}},[n("v-card-text",[n("avatar"),n("div",{staticClass:"text-sm-center mb-4 mt-3"},[n("h1",[t._v("\n        Anna-Maria "),n("span",{staticClass:"blue--text text--accent-1"},[t._v("Meer")])]),n("span",[t._v("\n        Computer Scientist & Artist\n      ")])]),n("sidebar-section",{attrs:{options:t.sections.info}}),n("sidebar-section",{attrs:{options:t.sections.socials}}),n("sidebar-section",{attrs:{options:t.sections.hobbies},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[n("v-chip",[n("v-avatar",[n("v-icon",[t._v("\n              "+t._s(a.icon)+"\n            ")])],1),t._v("\n          "+t._s(a.text)+"\n        ")],1)]}}])}),n("sidebar-section",{attrs:{options:t.sections.otherActivities}}),n("sidebar-section",{attrs:{options:t.sections.languages},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.items;return[n("v-container",{attrs:{"pa-0":""}},[n("v-layout",{staticClass:"text-xs-center",attrs:{wrap:""}},[t._l(a,function(e,a){return[n("v-flex",{key:a,attrs:{md3:"",sm4:"",xs6:""}},[n("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:"360",size:"65",width:"2",value:e.value,color:"white"}},[t._v("\n                  "+t._s(e.text)+"\n                ")])],1)]})],2)],1)]}}])})],1)],1)},u=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-md-center"},[n("v-avatar",{attrs:{color:"",size:"120"}},[n("img",{attrs:{src:t.publicPath("/img/avatar.jpg"),alt:"Anna-Maria Meer"}})])],1)},d=[],f={name:"Avatar"},v=f,p=n("2877"),h=n("6544"),g=n.n(h),_=n("8212"),b=Object(p["a"])(v,m,d,!1,null,"7742f602",null),y=b.exports;g()(b,{VAvatar:_["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4"},[n("div",{staticClass:"title mb-3"},[t._v("\n    "+t._s(t.options.title)+"\n  ")]),t.$slots.default?t._t("default"):t.$scopedSlots.items?[t._t("items",null,{items:t.options.items})]:t.$scopedSlots.item?[t._l(t.options.items,function(e){return t._t("item",null,{item:e})})]:t._l(t.options.items,function(t,e){return n("sidebar-section-item",{key:e,attrs:{item:t}})})],2)},C=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[t.hasIcon?n("v-flex",{attrs:{xs2:""}},[n("v-icon",[t._v("\n      "+t._s(t.item.icon)+"\n    ")])],1):t._e(),n("v-flex",{attrs:{xs10:t.hasIcon,xs12:!t.hasIcon}},[n("div",[t._v("\n      "+t._s(t.item.name)+"\n    ")]),n("p",[t.item.link?n("a",{staticClass:"grey--text",attrs:{href:t.item.link,target:"_blank"}},[t._v("\n        "+t._s(t.item.text)+"\n      ")]):n("span",{staticClass:"grey--text"},[t._v("\n        "+t._s(t.item.text)+"\n      ")])])])],1)},w=[],V={name:"SidebarSectionItem",props:{item:{type:Object,default:function(){}}},computed:{hasIcon:function(){return!!this.item.icon}}},k=V,O=n("0e8f"),A=n("132d"),E=n("a722"),M=Object(p["a"])(k,S,w,!1,null,"78122c3a",null),I=M.exports;g()(M,{VFlex:O["a"],VIcon:A["a"],VLayout:E["a"]});var j={name:"SidebarSection",components:{SidebarSectionItem:I},props:{options:{type:Object,default:function(){}}}},T=j,B=(n("9075"),Object(p["a"])(T,x,C,!1,null,"0f2cfb4d",null)),P=B.exports,R={name:"Sidebar",components:{SidebarSection:P,Avatar:y},data:function(){return{sections:{info:{title:"INFO",items:[{name:"Email",icon:"mdi-email",text:"ameer@uni-bremen.de"},{name:"Birth Date",icon:"mdi-cake-variant",text:"May 2, 1993"},{name:"Habitation",icon:"mdi-map-marker",text:"Mönchengladbach, Germany"}]},hobbies:{title:"HOBBIES",items:[{icon:"mdi-auto-fix",text:"Hackathons"},{icon:"mdi-pencil ",text:"Drawing"},{icon:"mdi-violin",text:"Viola, piano & orchestra"},{icon:"mdi-biohazard",text:"Challenges"},{icon:"mdi-walk",text:"Running"},{icon:"mdi-image-filter-hdr",text:"Nature"},{icon:"mdi-earth",text:"Travel"}]},otherActivities:{title:"OTHER ACTIVITIES",items:[{text:' - Role-model for young women at an expo of the "SMILE" project of the German Research Center for Artificial Intelligence'},{text:" - Violist at the youth orchestra of the Tonhalle Düsseldorf"},{text:" - Volunteering as a swimming teacher at the German Life Saving Association"}]},languages:{title:"LANGUAGES",items:[{text:"German",value:100},{text:"English",value:90},{text:"Latin",value:50},{text:"Korean",value:25}]}}}}},U=R,$=(n("cacf"),n("b0af")),L=n("99d9"),G=n("cc20"),D=n("a523"),F=n("490a"),H=Object(p["a"])(U,c,u,!1,null,"570f3730",null),N=H.exports;g()(H,{VAvatar:_["a"],VCard:$["a"],VCardText:L["a"],VChip:G["a"],VContainer:D["a"],VFlex:O["a"],VIcon:A["a"],VLayout:E["a"],VProgressCircular:F["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:"grey lighten-4",light:""}},[n("v-card-text",[n("div",{staticClass:"text-sm-center mb-4 mt-3"},[n("h1",[n("span",{staticClass:"blue--text text--lighten-1"})])]),n("content-section",{attrs:{title:"Who am I?"}},[t._v("\n        My name is Anna-Maria Meer and I am currently a student of computer science and arts/music in Germany.\n        Currently I am writing my bachelor thesis at the German Research Center for Artificial Intelligence, \n\t\twhile testing path planning algorithms on TurtleBots. I am passionate about new tools and finding ways\n\t\tto create them. My strength lies in having creative ideas in terms of problem solving strategies.\n      ")]),t.educations?n("content-section",{attrs:{title:"Education"}},t._l(t.educations,function(e,a){return n("v-layout",{key:a},[n("v-flex",{attrs:{md4:""}},[t._v("\n            "+t._s(e.from)+" - "+t._s(e.to)+"\n          ")]),n("v-flex",{attrs:{md8:""}},[e.title?n("strong",[t._v(t._s(e.title))]):t._e(),e.location?n("div",[n("i",[t._v(t._s(e.location))])]):t._e(),e.description?n("div",[t._v("\n              "+t._s(e.description)+"\n            ")]):t._e()])],1)}),1):t._e(),n("content-section",{attrs:{title:"Experiences"}},[n("ul",[n("li",[t._v("2020: "),n("b",[t._v("Bachelor thesis")]),n("ul",{staticStyle:{"list-style-type":"none"}},[n("li",[n("a",{attrs:{href:"https://www-cps.hb.dfki.de/home"}},[t._v("German Research Center for Artificial Intelligence")])]),n("li",[t._v("Implementation of a testframework for local and global path planner in C++/Python/ROS")])])]),n("li",[t._v("2019: "),n("b",[t._v("Project work")]),n("ul",{staticStyle:{"list-style-type":"none"}},[n("li",[t._v("University of Bremen")]),n("li",[n("a",{attrs:{href:"https://cgvr.cs.uni-bremen.de/teaching/studentprojects/virtualcooking/"}},[t._v("Collision Detection Plugin ")]),t._v("for grasping in C++/Unreal Engine. Collection of data for the later usage on robots")])])]),n("li",[t._v("2019: "),n("b",[t._v("Intern")]),n("ul",{staticStyle:{"list-style-type":"none"}},[n("li",[t._v("한양대학교 (Hanyang University)")]),n("li",[t._v("Bioinformatics lab, development of frontend prototype and algorithms for DNA alignment ")])])]),n("li",[t._v("2019: "),n("b",[t._v("Teaching assistant")]),n("ul",{staticStyle:{"list-style-type":"none"}},[n("li",[t._v("University of Bremen")]),n("li",[t._v("Exploring Virtual Reality technologies for documentary films")])])])])]),t.skills?n("content-section",{attrs:{id:"to-timeline",title:"Skills"}},[n("template",{slot:"actions"}),n("v-layout",{attrs:{wrap:""}},[t._l(t.skills,function(e,a){return[e.divider?n("v-flex",{key:a,attrs:{md12:"",xs12:"","mb-4":""}}):n("v-flex",{key:a,attrs:{md6:"",xs12:""}},[n("div",{staticClass:"mr-2 ml-2"},[n("div",{staticClass:"align-center"},[n("v-icon",{attrs:{small:""}},[t._v("\n                    "+t._s(e.icon)+"\n                  ")]),t._v("\n                  "+t._s(e.title)+"\n                ")],1),n("v-progress-linear",{staticClass:"progress",attrs:{color:"secondary",height:"3",value:e.value}})],1)])]})],2)],2):t._e()],1)],1)},z=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("h3",{staticClass:"title font-weight-light mb-1"},[t._v("\n      "+t._s(t.title)+"\n    ")]),n("v-spacer"),t._t("actions")],2),n("v-card-text",[t._t("default")],2)],1)},K=[],q={name:"ContentSection",components:{},props:{title:{type:String,default:""}}},Q=q,X=(n("767a"),n("12b2")),Y=n("9910"),Z=Object(p["a"])(Q,W,K,!1,null,"949f5c28",null),tt=Z.exports;g()(Z,{VCard:$["a"],VCardText:L["a"],VCardTitle:X["a"],VSpacer:Y["a"]});var et={name:"MainContent",components:{ContentSection:tt},data:function(){return{educations:[{from:"2016",to:"2020",title:"Bachelor's degree, Computer Science",location:"University of Bremen",description:"Bachelorthesis: implementing a testframework for global and local planner on TurtleBots in C++/Python/ROS at the German Research Center for Artificial Intelligence"},{from:"2017",to:"2020",title:"Master's degree, Art-Media-Aesthetic Education and Music",location:"University of Bremen",description:"Masterthesis: augmented reality technologies in art education"},{from:"2018",to:"2019",title:"Exchange student semester, Computer Science",location:"한양대학교 (Hanyang University)",description:"Focus on courses in the area of ai, algorithms and computer networks "},{from:"2014",to:"2015",title:"Exchange student semester, Media Arts",location:"한양대학교 (Hanyang University)",description:"Focus on courses in the area of new media arts"},{from:"2013",to:"2017",title:"Bachelor's degree, Art-Media-Aesthetic Education and Music ",location:"University of Bremen",description:"Bachelorthesis: new media art installations"}],skills:[{title:"Python",icon:"mdi-language-python",value:80},{title:"Java",icon:"mdi-language-java",value:80},{title:"C++",icon:"mdi-language-cpp",value:80},{title:"ROS",icon:"mdi-robot",value:60},{title:"HTML, JS, CSS",icon:"mdi-language-html5",value:80},{title:"Linux, Windows",icon:"mdi-ubuntu",value:80},{title:"Git",icon:"mdi-git",value:90},{title:"UE4",icon:"mdi-unreal",value:60},{title:"Modelling",icon:"mdi-blender-software",value:30}]}}},nt=et,at=(n("964f"),n("8e36")),it=Object(p["a"])(nt,J,z,!1,null,"557da7da",null),rt=it.exports;g()(it,{VCard:$["a"],VCardText:L["a"],VFlex:O["a"],VIcon:A["a"],VLayout:E["a"],VProgressLinear:at["a"]});var ot={name:"DarkTemplateContainer",components:{ContentContainer:rt,SidebarContainer:N}},st=ot,lt=(n("ab5c"),n("7496")),ct=n("549c"),ut=n("0789"),mt=Object(p["a"])(st,s,l,!1,null,"0ec9b120",null),dt=mt.exports;g()(mt,{VApp:lt["a"],VContainer:D["a"],VContent:ct["a"],VFadeTransition:ut["a"],VFlex:O["a"],VLayout:E["a"]});var ft={name:"App",components:{DarkTemplateContainer:dt},data:function(){return{}}},vt=ft,pt=Object(p["a"])(vt,r,o,!1,null,null,null),ht=pt.exports;g()(pt,{VApp:lt["a"],VContent:ct["a"]});var gt=n("bb71");n("da64");a["a"].use(gt["a"],{iconfont:"mdi"});n("ac6a");var _t=n("8103"),bt=n.n(_t),yt=n("bba4"),xt=n.n(yt),Ct=n("ffe0");Ct.keys().forEach(function(t){var e=Ct(t),n=bt()(xt()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));n="".concat(n),a["a"].component(n,e.default||e)}),a["a"].config.productionTip=!1,a["a"].use(i),new a["a"]({render:function(t){return t(ht)}}).$mount("#app")},"767a":function(t,e,n){"use strict";var a=n("c5e6"),i=n.n(a);i.a},9075:function(t,e,n){"use strict";var a=n("44d1"),i=n.n(a);i.a},"964f":function(t,e,n){"use strict";var a=n("3906"),i=n.n(a);i.a},ab5c:function(t,e,n){"use strict";var a=n("e82b"),i=n.n(a);i.a},c5e6:function(t,e,n){},cacf:function(t,e,n){"use strict";var a=n("ce40"),i=n.n(a);i.a},ce40:function(t,e,n){},e82b:function(t,e,n){},ffe0:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="ffe0"}});
//# sourceMappingURL=app.b5dd0eeb.js.map