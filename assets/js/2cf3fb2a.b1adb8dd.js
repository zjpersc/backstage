/*! For license information please see 2cf3fb2a.b1adb8dd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[525115],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=i,d=u["".concat(s,".").concat(y)]||u[y]||f[y]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},120680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(827378);var n=r(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={id:"plugin-playlist.playlistclient.getplaylistentities",title:"PlaylistClient.getPlaylistEntities()",description:"API reference for PlaylistClient.getPlaylistEntities()"},o=void 0,s={unversionedId:"reference/plugin-playlist.playlistclient.getplaylistentities",id:"reference/plugin-playlist.playlistclient.getplaylistentities",title:"PlaylistClient.getPlaylistEntities()",description:"API reference for PlaylistClient.getPlaylistEntities()",source:"@site/../docs/reference/plugin-playlist.playlistclient.getplaylistentities.md",sourceDirName:"reference",slug:"/reference/plugin-playlist.playlistclient.getplaylistentities",permalink:"/docs/reference/plugin-playlist.playlistclient.getplaylistentities",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-playlist.playlistclient.getplaylistentities.md",tags:[],version:"current",frontMatter:{id:"plugin-playlist.playlistclient.getplaylistentities",title:"PlaylistClient.getPlaylistEntities()",description:"API reference for PlaylistClient.getPlaylistEntities()"}},c={},p=[{value:"Parameters",id:"parameters",level:2}],u={toc:p};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/reference/plugin-playlist"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-playlist"))," ",">"," ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/reference/plugin-playlist.playlistclient"}),(0,n.kt)("inlineCode",{parentName:"a"},"PlaylistClient"))," ",">"," ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/reference/plugin-playlist.playlistclient.getplaylistentities"}),(0,n.kt)("inlineCode",{parentName:"a"},"getPlaylistEntities"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-typescript"}),"getPlaylistEntities(playlistId: string): Promise<Entity[]>;\n")),(0,n.kt)("h2",i({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"playlistId"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",i({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/reference/catalog-model.entity"}),"Entity"),"[","]",">"))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,a){for(var l,o,s=i(e),c=1;c<arguments.length;c++){for(var p in l=Object(arguments[c]))r.call(l,p)&&(s[p]=l[p]);if(t){o=t(l);for(var u=0;u<o.length;u++)n.call(l,o[u])&&(s[o[u]]=l[o[u]])}}return s}},541535:(e,t,r)=>{var n=r(862525),i=60103,a=60106;var l=60109,o=60110,s=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),l=u("react.provider"),o=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||d}function b(){}function h(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=h.prototype=new b;v.constructor=h,n(v,m.prototype),v.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,a={},l=null,o=null;if(null!=t)for(n in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(l=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:i,type:e,key:l,ref:o,props:a,_owner:O.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var E=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,l){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case a:s=!0}}if(s)return l=l(s=e),e=""===n?"."+N(s,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),_(l,t,r,"",(function(e){return e}))):null!=l&&(w(l)&&(l=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(E,"$&/")+"/")+e)),t.push(l)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=n+N(o=e[c],c);s+=_(o,t,r,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(o=e.next()).done;)s+=_(o=o.value,t,r,p=n+N(o,c++),l);else if("object"===o)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function S(e,t,r){if(null==e)return e;var n=[],i=0;return _(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function T(){var e=x.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);