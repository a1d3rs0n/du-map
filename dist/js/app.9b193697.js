(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"17af":function(e,t,r){"use strict";var n=r("8da1"),o=r.n(n);o.a},"18ef":function(e,t,r){"use strict";var n=r("2558"),o=r.n(n);o.a},2558:function(e,t,r){},"6ced":function(e,t,r){"use strict";var n=r("c467"),o=r.n(n);o.a},"71e1":function(e,t,r){},"8da1":function(e,t,r){},a216:function(e,t,r){"use strict";var n=r("71e1"),o=r.n(n);o.a},c467:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},a=[],i=n["a"].extend({data:function(){return{}}}),c=i,s=r("2877"),l=Object(s["a"])(c,o,a,!1,null,null,null),u=l.exports,p=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("Map",{attrs:{"map-options":e.mapOptions,token:e.token,"location-control":""},on:{loaded:e.onLoaded}}),e.dataLoaded?r("div",[r("app-bar",{staticClass:"animated fadeInDown faster layer-3"}),r("navi-drawer"),r("router-view",{staticClass:"animated fadeInUp faster layer-3"}),r("v-fab-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.searchClosed,expression:"searchClosed"}],attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"primary"},on:{click:function(t){return e.openSearch()}}},[r("v-icon",[e._v("mdi-magnify")])],1)],1),r("v-fab-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.searchClosed,expression:"!searchClosed"}],attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"warning"},on:{click:function(t){return e.closeSearch()}}},[r("v-icon",[e._v("mdi-close")])],1)],1)],1):e._e(),r("progress-indicator",{attrs:{show:!e.dataLoaded}})],1)},h=[],f=r("d4ec"),v=r("bee2"),m=r("99de"),b=r("7e84"),y=r("262e"),g=r("9ab4"),O=r("60a3"),w=(r("7db0"),r("2f62"));n["a"].use(w["a"]);var j,x=new w["a"].Store({state:{searchClosed:!0,dataLoaded:!1,placeList:Array(),drawer:!1},getters:{getPlace:function(e){return function(t){return e.placeList.find((function(e){return e.properties.id==t}))}},getPlaceList:function(){return this.placeList}},mutations:{setDataLoaded:function(e,t){e.dataLoaded=t},setPlaceList:function(e,t){e.placeList=t},setDrawer:function(e,t){e.drawer=t},toggleDrawer:function(e){e.drawer=!e.drawer},openSearch:function(e){e.searchClosed=!1},closeSearch:function(e){e.searchClosed=!0},toggleSearch:function(e){e.searchClosed=!e.searchClosed}},actions:{},modules:{}}),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"map"}})},_=[],C=(r("a4d3"),r("4de4"),r("4160"),r("c975"),r("d81d"),r("4e827"),r("a434"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("5319"),r("159b"),r("ade3")),S=r("e192"),L=r.n(S);r("0d03"),r("a9e3"),r("c35a"),r("25eb"),r("d3b7"),r("25f0");(function(e){e["department"]="department",e["office"]="office",e["hall"]="hall",e["canteen"]="canteen",e["copier"]="copier",e["hostel"]="hostel",e["threatre"]="threatre",e["bus_stop"]="bus stop",e["station"]="station",e["activity"]="activity",e["library"]="library",e["stadium"]="stadium",e["herbarium_house"]="herbarium house",e["rc"]="rc",e["atm"]="atm",e["other"]="other"})(j||(j={}));var P=j,$=function(){function e(t){var r=t.id,n=void 0===r?"":r,o=t.geometry,a=void 0===o?new V:o,i=t.properties,c=void 0===i?new D:i,s=t.generateID,l=void 0!==s&&s;Object(f["a"])(this,e),this.type="Feature",this.id=l?this.generateID():n,this.properties=c,this.geometry=a}return Object(v["a"])(e,[{key:"generateID",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"==e?t:3&t|8;return r.toString(16)})).replace(/-/g,"")}}],[{key:"parse",value:function(t){return new e({id:t.id.toString(),geometry:V.parse(t.geometry),properties:D.parse(t.properties)})}}]),e}(),V=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0];Object(f["a"])(this,e),this.type="Point",this.coordinates=t}return Object(v["a"])(e,null,[{key:"parse",value:function(e){return{coordinates:[Number.parseFloat(e.coordinates[0]),Number.parseFloat(e.coordinates[1])],type:"Point"}}}]),e}(),D=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P.other,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new T,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new B,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;Object(f["a"])(this,e),this.id=t,this.type=r,this.name=n,this.name_zg=o,this.open_hours=a,this.phones=i,this.population=c,this.note=s}return Object(v["a"])(e,null,[{key:"parse",value:function(t){var r=new e(t.id.toString(),t.type.toString(),t.name.toString(),t.name_zg.toString(),t.open_hours?T.parse(JSON.parse(t.open_hours)):null,t.phones?t.phones:null,t.population?B.parse(JSON.parse(t.population)):null,t.note?t.note.toString():null);return r}}]),e}(),B=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(f["a"])(this,e),this.teacher=t,this.student=r}return Object(v["a"])(e,null,[{key:"parse",value:function(e){return{teacher:e.teacher?Number.parseInt(e.teacher):null,student:e.student?Number.parseInt(e.student):null}}}]),e}(),T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(f["a"])(this,e),this.from=t,this.to=r}return Object(v["a"])(e,null,[{key:"parse",value:function(e){return{from:e.from?e.from:null,to:e.to?e.to:null}}}]),e}(),E=new n["a"],I=E;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(C["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments)),e.options=A({container:"map"},e.mapOptions),e}return Object(y["a"])(t,e),Object(v["a"])(t,[{key:"config",value:function(e){var t=new L.a.NavigationControl({visualizePitch:!0}),r=new L.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,fitBoundsOptions:{offset:[0,-3.5],zoom:15}});this.zoomControl&&e.addControl(t),this.locationControl&&e.addControl(r),e.on("mouseenter","poi-label-places",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","poi-label-places",(function(){e.getCanvas().style.cursor=""}))}},{key:"getCleanedPlaceData",value:function(e){var t=e.querySourceFeatures("composite",{sourceLayer:"DU_Places_New"});function r(e,t){var r=""+e.properties.name,n=""+t.properties.name;return r<n?-1:r>n?1:0}return console.log("SOURCE FEATURES"),console.log(t),t.forEach((function(e){var r=[];t.forEach((function(t){JSON.stringify(e.properties)===JSON.stringify(t.properties)&&e!=t&&r.push(t)})),r.forEach((function(e){var r=t.indexOf(e);t.splice(r,1)}))})),t.sort(r),t.map((function(e){return $.parse(e)}))}},{key:"mounted",value:function(){var e=this;L.a.accessToken=this.token;var t=new L.a.Map(this.$data.options);this.config(t);var r=new L.a.Marker({color:"#F85A40"}).setLngLat([0,0]).addTo(t);t.on("load",(function(){var r=e.getCleanedPlaceData(t);e.$emit("loaded",r),console.log("CLEAN DATA"),console.log(r),I.$emit("loaded")})),t.on("click",(function(t){n(),"home"!=e.$router.currentRoute.name&&e.$router.replace("/")})),t.on("click","poi-label-places",(function(t){if(t.features){var r=$.parse(t.features[0]);e.$router.push("/place/".concat(r.properties.id))}})),I.$on("removeHighlight",(function(){n(),e.$router.replace("/")})),I.$on("highlightPlace",(function(e){o(e)}));var n=function(){r.remove(),t.setFilter("building-3d-highlighted",["in","id",""])},o=function(e){r.remove();try{r.setLngLat(e.geometry.coordinates).addTo(t)}catch(n){console.log(e)}t.flyTo({center:e.geometry.coordinates,zoom:18}),t.setFilter("building-3d-highlighted",["in","id",e.properties.id])}}}]),t}(O["c"]);g["a"]([Object(O["b"])()],F.prototype,"mapOptions",void 0),g["a"]([Object(O["b"])()],F.prototype,"token",void 0),g["a"]([Object(O["b"])({type:Boolean,default:function(){return!0}})],F.prototype,"zoomControl",void 0),g["a"]([Object(O["b"])({type:Boolean,default:function(){return!1}})],F.prototype,"locationControl",void 0),F=g["a"]([Object(O["a"])({methods:Object(w["b"])(["setPlaceList","setDataLoaded"])})],F);var M=F,z=M,R=(r("6ced"),r("a216"),Object(s["a"])(z,k,_,!1,null,"c57427b8",null)),G=R.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("v-overlay",{attrs:{absolute:"",color:"#FFF",opacity:"1"}},[r("v-container",{staticStyle:{width:"200px"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("v-progress-linear",{attrs:{absolute:"",active:!0,indeterminate:"",color:"blue",rounded:!0,height:"8"}})],1)],1)],1)],1):e._e()},J=[],U=function(e){function t(){return Object(f["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(y["a"])(t,e),t}(O["c"]);g["a"]([Object(O["b"])(Boolean)],U.prototype,"show",void 0),U=g["a"]([O["a"]],U);var q=U,W=q,Y=r("6544"),Q=r.n(Y),K=r("62ad"),Z=r("a523"),X=r("a797"),ee=r("8e36"),te=r("0fd9"),re=Object(s["a"])(W,H,J,!1,null,null,null),ne=re.exports;Q()(re,{VCol:K["a"],VContainer:Z["a"],VOverlay:X["a"],VProgressLinear:ee["a"],VRow:te["a"]});var oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-col",{staticClass:"bar-container",attrs:{sm:"6"}},[r("v-app-bar",{attrs:{absolute:"",collapse:e.searchClosed,color:"primary",app:"",dark:""}},[r("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return e.toggleDrawer()}}},[r("v-icon",[e._v("mdi-menu")])],1),e.searchClosed?e._e():r("v-text-field",{staticClass:"mt-6",attrs:{placeholder:"Search",solo:"",dense:"",light:"","full-width":"",autofocus:""},on:{blur:function(t){return e.onBlur()},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.collapseBar()}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.searchClosed,expression:"searchClosed"}],attrs:{text:"",icon:""},on:{click:function(t){return e.onLayerClick()}}},[r("v-icon",[e._v("mdi-layers")])],1)],1),e.searchIsBusy?r("v-card",{staticClass:"mt-12 responsive-container",attrs:{color:"transparent",flat:""}},[r("v-list",{attrs:{dense:""}},[r("v-subheader",[e._v("Results")]),r("v-list-item-group",{attrs:{color:"primary"}},e._l(e.filteredPlaces,(function(t){var n=t.item;return r("v-list-item",{key:n.properties.id,staticClass:"body-2",on:{click:function(t){return e.goTo(n)}}},[e._v(" "+e._s(n.properties.name)+" ")])})),1)],1)],1):e._e()],1)},ae=[],ie=(r("841c"),r("ffe7")),ce=r.n(ie);function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){Object(C["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments)),e.width="80",e.searchText="",e.fuse=new ce.a(e.$store.state.placeList,{shouldSort:!0,includeMatches:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["properties.name","properties.type","properties.id"]}),e}return Object(y["a"])(t,e),Object(v["a"])(t,[{key:"collapseBar",value:function(){this.$store.commit("closeSearch"),this.searchText=""}},{key:"expandBar",value:function(){this.$store.commit("openSearch")}},{key:"onBlur",value:function(){this.searchIsBusy||this.collapseBar()}},{key:"goTo",value:function(e){this.searchText="",this.collapseBar(),this.$router.push("/place/".concat(e.properties.id))}},{key:"mounted",value:function(){var e=this;I.$on("openSearch",(function(){e.expandBar()})),I.$on("closeSearch",(function(){e.collapseBar()}))}},{key:"searchIsBusy",get:function(){return this.searchText.length>0&&this.filteredPlaces.length>0}},{key:"filteredPlaces",get:function(){return this.fuse.search(this.searchText)}},{key:"right",get:function(){var e=window.innerWidth>0?window.innerWidth:screen.width;console.log(e);var t=e>=320&&e<=767;return t?"0":"50%"}}]),t}(O["c"]);ue=g["a"]([Object(O["a"])({computed:le({},Object(w["c"])(["drawer","searchClosed"])),methods:le({},Object(w["b"])(["toggleDrawer"]))})],ue);var pe=ue,de=pe,he=(r("18ef"),r("40dc")),fe=r("8336"),ve=r("b0af"),me=r("132d"),be=r("8860"),ye=r("da13"),ge=r("1baa"),Oe=r("e0c7"),we=r("8654"),je=Object(s["a"])(de,oe,ae,!1,null,"628da914",null),xe=je.exports;Q()(je,{VAppBar:he["a"],VBtn:fe["a"],VCard:ve["a"],VCol:K["a"],VIcon:me["a"],VList:be["a"],VListItem:ye["a"],VListItemGroup:ge["a"],VSubheader:Oe["a"],VTextField:we["a"]});var ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{absolute:"",temporary:"",app:"",width:"300"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{nav:"",subheader:""}},[r("v-subheader",[e._v("Places")]),e._l(e.placeGroups,(function(t){return r("v-list-group",{key:t.name,attrs:{"prepend-icon":t.icon},scopedSlots:e._u([{key:"activator",fn:function(){return[r("v-list-item-title",{staticClass:"subtitle-1"},[e._v(e._s(t.name))])]},proxy:!0},{key:"default",fn:function(){return e._l(t.placeList,(function(t){return r("v-list-item",{key:t.properties.id,on:{click:function(r){return e.goTo(t)}}},[r("v-list-item-title",{staticClass:"body-1",staticStyle:{"margin-left":"56px"},domProps:{textContent:e._s(t.properties.name)}})],1)}))},proxy:!0}],null,!0)})}))],2)],1)},_e=[],Ce=(r("e01a"),r("d28b"),r("caad"),r("2532"),r("3ca3"),r("ddb0"),function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Object(f["a"])(this,e),this.placeList=[],this.name=t,this.types=r,this.icon=n}),Se={vuetifyBlue:"#1976d2",libBrown:"#795548",aiesecRed:"#f85a40"},Le={other:{icon:"mdi-domain",color:"grey"},department:{icon:"mdi-bank",color:Se.vuetifyBlue},canteen:{icon:"mdi-silverware",color:Se.aiesecRed},"bus stop":{icon:"mdi-bus",color:"yellow darken-3"},library:{icon:"mdi-library",color:Se.libBrown},hostel:{icon:"mdi-hotel",color:"pink"},hall:{icon:"mdi-school",color:"teal accent-4"},office:{icon:"mdi-domain",color:"grey"},copier:{icon:"mdi-content-copy",color:null},station:{icon:"mdi-train",color:"yellow darken-3"},activity:{icon:"mdi-run",color:null},"herbarium house":{icon:"mdi-leaf",color:"green darken-1"},atm:{icon:"mdi-cash-usd",color:"grey"},threatre:{icon:"mdi-domain",color:"grey"},stadium:{icon:"mdi-domain",color:"grey"},rc:{icon:"mdi-domain",color:"grey"}},Pe=Le,$e=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments)),e.placeGroups=[new Ce("Department",[P.department],"mdi-bank"),new Ce("Canteen",[P.canteen],"mdi-silverware"),new Ce("Bus Stop",[P.bus_stop],"mdi-bus"),new Ce("Sport and Activities",[P.rc,P.library,P.stadium],"mdi-run"),new Ce("Copier",[P.copier],"mdi-content-copy"),new Ce("Hostel",[P.hostel],"mdi-hotel"),new Ce("Other",[],"mdi-domain")],e}return Object(y["a"])(t,e),Object(v["a"])(t,[{key:"getColorOf",value:function(e){return Pe[e].color}},{key:"goTo",value:function(e){this.$router.push("/place/".concat(e.properties.id))}},{key:"mounted",value:function(){var e=this;this.$store.state.placeList.forEach((function(t){var r=!0,n=!1,o=void 0;try{for(var a,i=e.placeGroups[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var c=a.value;if(c.types.includes(t.properties.type)||0==c.types.length){c.placeList.push(t);break}}}catch(s){n=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}}))}},{key:"drawer",set:function(e){this.$store.commit("setDrawer",e)},get:function(){return this.$store.state.drawer}}]),t}(O["c"]);$e=g["a"]([O["a"]],$e);var Ve=$e,De=Ve,Be=r("56b0"),Te=r("5d23"),Ee=r("f774"),Ie=Object(s["a"])(De,ke,_e,!1,null,null,null),Ne=Ie.exports;Q()(Ie,{VList:be["a"],VListGroup:Be["a"],VListItem:ye["a"],VListItemTitle:Te["a"],VNavigationDrawer:Ee["a"],VSubheader:Oe["a"]});var Ae=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments)),e.token="pk.eyJ1IjoiYWtwMTAxIiwiYSI6ImNqeGtrbnVwazAxM2Izbm1vOWYwdHQxdjkifQ.gtLMDe9KAEU2rxBvk_vnzw",e.mapOptions={style:"mapbox://styles/akp101/cjxkkxwpc01x11cnur0aepitf/draft",center:[96.212739,16.911199],zoom:14.8,maxBounds:[[96.20043008891338,16.899012663005408],[96.22252355799174,16.9239222243597]],bearing:-27.5,touchZoomRotate:!0},e}return Object(y["a"])(t,e),Object(v["a"])(t,[{key:"onLoaded",value:function(e){this.$store.commit("setPlaceList",e),this.$store.commit("setDataLoaded",!0),this.$emit("loaded"),console.log("Home: LOADED")}},{key:"openSearch",value:function(){I.$emit("openSearch")}},{key:"closeSearch",value:function(){I.$emit("closeSearch")}}]),t}(O["c"]);Ae=g["a"]([Object(O["a"])({store:x,components:{Map:G,ProgressIndicator:ne,AppBar:xe,NaviDrawer:Ne},computed:Object(w["c"])(["dataLoaded","searchClosed"])})],Ae);var Fe=Ae,Me=Fe,ze=(r("17af"),r("7496")),Re=r("0789"),Ge=Object(s["a"])(Me,d,h,!1,null,"b68d84fe",null),He=Ge.exports;Q()(Ge,{VApp:ze["a"],VBtn:fe["a"],VFabTransition:Re["c"],VIcon:me["a"]});var Je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"dock"},[r("v-col",{staticClass:"pa-0",attrs:{sm:"6","offset-sm":"6"}},[r("v-card",{staticClass:"dock-header"},[r("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"place-label-container",on:{click:e.toggleExpand}},[r("p",{staticClass:"headline"},[e._v(e._s(e.place.properties.name))]),r("chip-label",{staticClass:"ml-2",attrs:{value:e.place.properties.type,theme:e.getThemeOf(e.place.properties.type)}})],1),e.expanded?r("div",[r("v-list-item",[r("v-list-item-title",[e._v(e._s(e.openHours))])],1),r("v-list-item",[r("v-list-item-title",[e._v(e._s(e.note))])],1)],1):e._e()])],1)],1)},Ue=[],qe=r("2fe1"),We=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-chip",{staticClass:"text-capitalize",attrs:{"text-color":"white",color:e.theme.color}},[r("v-avatar",{attrs:{left:"",small:"",color:"white"}},[r("v-icon",{attrs:{color:"#263238",small:""}},[e._v(e._s(e.theme.icon))])],1),e._v(" "+e._s(e.value)+" ")],1)},Ye=[],Qe=function(e){function t(){return Object(f["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(y["a"])(t,e),t}(O["c"]);g["a"]([Object(O["b"])({required:!0})],Qe.prototype,"theme",void 0),g["a"]([Object(O["b"])({required:!0})],Qe.prototype,"value",void 0),Qe=g["a"]([O["a"]],Qe);var Ke=Qe,Ze=Ke,Xe=r("8212"),et=r("cc20"),tt=Object(s["a"])(Ze,We,Ye,!1,null,null,null),rt=tt.exports;Q()(tt,{VAvatar:Xe["a"],VChip:et["a"],VIcon:me["a"]});var nt=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments)),e.place=e.$attrs.place,e.expanded=!1,e}return Object(y["a"])(t,e),Object(v["a"])(t,[{key:"getThemeOf",value:function(e){return Pe[e]}},{key:"toggleExpand",value:function(){this.expanded=!this.expanded}},{key:"mounted",value:function(){I.$emit("highlightPlace",this.place),console.log(this.place)}},{key:"onRouteChange",value:function(e,t){var r=x.getters.getPlace(e.params.id);I.$emit("highlightPlace",r),this.place=r}},{key:"openHours",get:function(){return this.place.properties.open_hours}},{key:"lngLat",get:function(){return this.place.geometry.coordinates}},{key:"phones",get:function(){return this.place.properties.phones}},{key:"population",get:function(){return this.place.properties.population}},{key:"note",get:function(){return this.place.properties.note}}]),t}(n["a"]);g["a"]([Object(O["d"])("$route")],nt.prototype,"onRouteChange",null),nt=g["a"]([Object(qe["b"])({components:{ChipLabel:rt}})],nt);var ot=nt,at=ot,it=(r("ea20"),r("269a")),ct=r.n(it),st=r("5607"),lt=Object(s["a"])(at,Je,Ue,!1,null,"12e6d93e",null),ut=lt.exports;Q()(lt,{VCard:ve["a"],VCol:K["a"],VListItem:ye["a"],VListItemTitle:Te["a"],VRow:te["a"]}),ct()(lt,{Ripple:st["a"]}),n["a"].use(p["a"]);var pt=[{path:"/",name:"home",component:He,alias:"/place",children:[{path:"/place/:id",name:"place",component:ut,props:function(e){return{place:x.getters.getPlace(e.params.id)}}}]}],dt=new p["a"]({routes:pt}),ht=dt,ft=r("9483");Object(ft["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var vt=r("f309");n["a"].use(vt["a"]);var mt=new vt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:ht,store:x,vuetify:mt,render:function(e){return e(u)}}).$mount("#app")},e923:function(e,t,r){},ea20:function(e,t,r){"use strict";var n=r("e923"),o=r.n(n);o.a}});
//# sourceMappingURL=app.9b193697.js.map