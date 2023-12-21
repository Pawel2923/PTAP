function rS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ku(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var m_={exports:{}},Yu={},g_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),iS=Symbol.for("react.portal"),sS=Symbol.for("react.fragment"),oS=Symbol.for("react.strict_mode"),aS=Symbol.for("react.profiler"),lS=Symbol.for("react.provider"),uS=Symbol.for("react.context"),cS=Symbol.for("react.forward_ref"),dS=Symbol.for("react.suspense"),fS=Symbol.for("react.memo"),hS=Symbol.for("react.lazy"),eg=Symbol.iterator;function pS(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var v_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y_=Object.assign,__={};function As(t,e,n){this.props=t,this.context=e,this.refs=__,this.updater=n||v_}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function w_(){}w_.prototype=As.prototype;function Ah(t,e,n){this.props=t,this.context=e,this.refs=__,this.updater=n||v_}var Oh=Ah.prototype=new w_;Oh.constructor=Ah;y_(Oh,As.prototype);Oh.isPureReactComponent=!0;var tg=Array.isArray,E_=Object.prototype.hasOwnProperty,Lh={current:null},k_={key:!0,ref:!0,__self:!0,__source:!0};function S_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)E_.call(e,r)&&!k_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ea,type:t,key:s,ref:o,props:i,_owner:Lh.current}}function mS(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function gS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ng=/\/+/g;function Bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gS(""+t.key):e.toString(36)}function bl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case iS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bc(o,0):r,tg(i)?(n="",t!=null&&(n=t.replace(ng,"$&/")+"/"),bl(i,e,n,"",function(u){return u})):i!=null&&(Dh(i)&&(i=mS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Bc(s,a);o+=bl(s,e,n,l,i)}else if(l=pS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Bc(s,a++),o+=bl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return bl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},xl={transition:null},yS={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:xl,ReactCurrentOwner:Lh};te.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=As;te.Fragment=sS;te.Profiler=aS;te.PureComponent=Ah;te.StrictMode=oS;te.Suspense=dS;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yS;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=y_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)E_.call(e,l)&&!k_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ea,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:uS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lS,_context:t},t.Consumer=t};te.createElement=S_;te.createFactory=function(t){var e=S_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:cS,render:t}};te.isValidElement=Dh;te.lazy=function(t){return{$$typeof:hS,_payload:{_status:-1,_result:t},_init:vS}};te.memo=function(t,e){return{$$typeof:fS,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(t,e){return ct.current.useCallback(t,e)};te.useContext=function(t){return ct.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};te.useEffect=function(t,e){return ct.current.useEffect(t,e)};te.useId=function(){return ct.current.useId()};te.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ct.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};te.useRef=function(t){return ct.current.useRef(t)};te.useState=function(t){return ct.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ct.current.useTransition()};te.version="18.2.0";g_.exports=te;var S=g_.exports;const Ft=Ku(S),_S=rS({__proto__:null,default:Ft},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wS=S,ES=Symbol.for("react.element"),kS=Symbol.for("react.fragment"),SS=Object.prototype.hasOwnProperty,CS=wS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bS={key:!0,ref:!0,__self:!0,__source:!0};function C_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SS.call(e,r)&&!bS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ES,type:t,key:s,ref:o,props:i,_owner:CS.current}}Yu.Fragment=kS;Yu.jsx=C_;Yu.jsxs=C_;m_.exports=Yu;var p=m_.exports,Vd={},b_={exports:{}},Nt={},x_={exports:{}},I_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,z){var H=L.length;L.push(z);e:for(;0<H;){var ae=H-1>>>1,ie=L[ae];if(0<i(ie,z))L[ae]=z,L[H]=ie,H=ae;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var z=L[0],H=L.pop();if(H!==z){L[0]=H;e:for(var ae=0,ie=L.length,qn=ie>>>1;ae<qn;){var ne=2*(ae+1)-1,st=L[ne],ot=ne+1,Vt=L[ot];if(0>i(st,H))ot<ie&&0>i(Vt,st)?(L[ae]=Vt,L[ot]=H,ae=ot):(L[ae]=st,L[ne]=H,ae=ne);else if(ot<ie&&0>i(Vt,H))L[ae]=Vt,L[ot]=H,ae=ot;else break e}}return z}function i(L,z){var H=L.sortIndex-z.sortIndex;return H!==0?H:L.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,_=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=L)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function g(L){if(w=!1,m(L),!v)if(n(l)!==null)v=!0,it(E);else{var z=n(u);z!==null&&kt(g,z.startTime-L)}}function E(L,z){v=!1,w&&(w=!1,y(I),I=-1),_=!0;var H=f;try{for(m(z),d=n(l);d!==null&&(!(d.expirationTime>z)||L&&!$());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,f=d.priorityLevel;var ie=ae(d.expirationTime<=z);z=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&r(l),m(z)}else r(l);d=n(l)}if(d!==null)var qn=!0;else{var ne=n(u);ne!==null&&kt(g,ne.startTime-z),qn=!1}return qn}finally{d=null,f=H,_=!1}}var C=!1,b=null,I=-1,N=5,O=-1;function $(){return!(t.unstable_now()-O<N)}function Q(){if(b!==null){var L=t.unstable_now();O=L;var z=!0;try{z=b(!0,L)}finally{z?rt():(C=!1,b=null)}}else C=!1}var rt;if(typeof h=="function")rt=function(){h(Q)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,cn=Ht.port2;Ht.port1.onmessage=Q,rt=function(){cn.postMessage(null)}}else rt=function(){k(Q,0)};function it(L){b=L,C||(C=!0,rt())}function kt(L,z){I=k(function(){L(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,it(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var H=f;f=z;try{return L()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=f;f=L;try{return z()}finally{f=H}},t.unstable_scheduleCallback=function(L,z,H){var ae=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ae+H:ae):H=ae,L){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=H+ie,L={id:c++,callback:z,priorityLevel:L,startTime:H,expirationTime:ie,sortIndex:-1},H>ae?(L.sortIndex=H,e(u,L),n(l)===null&&L===n(u)&&(w?(y(I),I=-1):w=!0,kt(g,H-ae))):(L.sortIndex=ie,e(l,L),v||_||(v=!0,it(E))),L},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(L){var z=f;return function(){var H=f;f=z;try{return L.apply(this,arguments)}finally{f=H}}}})(I_);x_.exports=I_;var xS=x_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_=S,Tt=xS;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N_=new Set,Uo={};function Ci(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(Uo[t]=e,t=0;t<e.length;t++)N_.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,IS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rg={},ig={};function TS(t){return Gd.call(ig,t)?!0:Gd.call(rg,t)?!1:IS.test(t)?ig[t]=!0:(rg[t]=!0,!1)}function NS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RS(t,e,n,r){if(e===null||typeof e>"u"||NS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mh=/[\-:]([a-z])/g;function jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mh,jh);qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mh,jh);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mh,jh);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fh(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RS(e,n,i,r)&&(n=null),r||i===null?TS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=T_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Di=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),A_=Symbol.for("react.offscreen"),sg=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Hc;function mo(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var Vc=!1;function Gc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function PS(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=Gc(t.type,!1),t;case 11:return t=Gc(t.type.render,!1),t;case 1:return t=Gc(t.type,!0),t;default:return""}}function Qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case Di:return"Portal";case Kd:return"Profiler";case zh:return"StrictMode";case Yd:return"Suspense";case qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P_:return(t.displayName||"Context")+".Consumer";case R_:return(t._context.displayName||"Context")+".Provider";case Uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $h:return e=t.displayName||null,e!==null?e:Qd(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return Qd(t(e))}catch{}}return null}function AS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(e);case 8:return e===zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OS(t){var e=O_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=OS(t))}function L_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=O_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xd(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D_(t,e){e=e.checked,e!=null&&Fh(t,"checked",e,!1)}function Jd(t,e){D_(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zd(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zd(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(go(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function M_(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function j_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?j_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,F_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LS=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){LS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function z_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function U_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=z_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var DS=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nf(t,e){if(e){if(DS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var of=null,es=null,ts=null;function cg(t){if(t=Ca(t)){if(typeof of!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Zu(e),of(t.stateNode,t.type,e))}}function $_(t){es?ts?ts.push(t):ts=[t]:es=t}function W_(){if(es){var t=es,e=ts;if(ts=es=null,cg(t),e)for(t=0;t<e.length;t++)cg(e[t])}}function B_(t,e){return t(e)}function H_(){}var Kc=!1;function V_(t,e,n){if(Kc)return t(e,n);Kc=!0;try{return B_(t,e,n)}finally{Kc=!1,(es!==null||ts!==null)&&(H_(),W_())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var r=Zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var af=!1;if(Dn)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){af=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{af=!1}function MS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Co=!1,Kl=null,Yl=!1,lf=null,jS={onError:function(t){Co=!0,Kl=t}};function FS(t,e,n,r,i,s,o,a,l){Co=!1,Kl=null,MS.apply(jS,arguments)}function zS(t,e,n,r,i,s,o,a,l){if(FS.apply(this,arguments),Co){if(Co){var u=Kl;Co=!1,Kl=null}else throw Error(A(198));Yl||(Yl=!0,lf=u)}}function bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function G_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dg(t){if(bi(t)!==t)throw Error(A(188))}function US(t){var e=t.alternate;if(!e){if(e=bi(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dg(i),t;if(s===r)return dg(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function K_(t){return t=US(t),t!==null?Y_(t):null}function Y_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Y_(t);if(e!==null)return e;t=t.sibling}return null}var q_=Tt.unstable_scheduleCallback,fg=Tt.unstable_cancelCallback,$S=Tt.unstable_shouldYield,WS=Tt.unstable_requestPaint,Re=Tt.unstable_now,BS=Tt.unstable_getCurrentPriorityLevel,Bh=Tt.unstable_ImmediatePriority,Q_=Tt.unstable_UserBlockingPriority,ql=Tt.unstable_NormalPriority,HS=Tt.unstable_LowPriority,X_=Tt.unstable_IdlePriority,qu=null,gn=null;function VS(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(qu,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:YS,GS=Math.log,KS=Math.LN2;function YS(t){return t>>>=0,t===0?32:31-(GS(t)/KS|0)|0}var Xa=64,Ja=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vo(a):(s&=o,s!==0&&(r=vo(s)))}else o=n&~i,o!==0?r=vo(o):s!==0&&(r=vo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function qS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=qS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function J_(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function Yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function XS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e0,Vh,t0,n0,r0,cf=!1,Za=[],hr=null,pr=null,mr=null,Bo=new Map,Ho=new Map,ir=[],JS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hg(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function Zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ca(e),e!==null&&Vh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZS(t,e,n,r,i){switch(e){case"focusin":return hr=Zs(hr,t,e,n,r,i),!0;case"dragenter":return pr=Zs(pr,t,e,n,r,i),!0;case"mouseover":return mr=Zs(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bo.set(s,Zs(Bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,Zs(Ho.get(s)||null,t,e,n,r,i)),!0}return!1}function i0(t){var e=qr(t.target);if(e!==null){var n=bi(e);if(n!==null){if(e=n.tag,e===13){if(e=G_(n),e!==null){t.blockedOn=e,r0(t.priority,function(){t0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sf=r,n.target.dispatchEvent(r),sf=null}else return e=Ca(n),e!==null&&Vh(e),t.blockedOn=n,!1;e.shift()}return!0}function pg(t,e,n){Il(t)&&n.delete(e)}function eC(){cf=!1,hr!==null&&Il(hr)&&(hr=null),pr!==null&&Il(pr)&&(pr=null),mr!==null&&Il(mr)&&(mr=null),Bo.forEach(pg),Ho.forEach(pg)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,cf||(cf=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,eC)))}function Vo(t){function e(i){return eo(i,t)}if(0<Za.length){eo(Za[0],t);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&eo(hr,t),pr!==null&&eo(pr,t),mr!==null&&eo(mr,t),Bo.forEach(e),Ho.forEach(e),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)i0(n),n.blockedOn===null&&ir.shift()}var ns=Hn.ReactCurrentBatchConfig,Xl=!0;function tC(t,e,n,r){var i=oe,s=ns.transition;ns.transition=null;try{oe=1,Gh(t,e,n,r)}finally{oe=i,ns.transition=s}}function nC(t,e,n,r){var i=oe,s=ns.transition;ns.transition=null;try{oe=4,Gh(t,e,n,r)}finally{oe=i,ns.transition=s}}function Gh(t,e,n,r){if(Xl){var i=df(t,e,n,r);if(i===null)id(t,e,r,Jl,n),hg(t,r);else if(ZS(i,t,e,n,r))r.stopPropagation();else if(hg(t,r),e&4&&-1<JS.indexOf(t)){for(;i!==null;){var s=Ca(i);if(s!==null&&e0(s),s=df(t,e,n,r),s===null&&id(t,e,r,Jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else id(t,e,r,null,n)}}var Jl=null;function df(t,e,n,r){if(Jl=null,t=Wh(r),t=qr(t),t!==null)if(e=bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=G_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function s0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BS()){case Bh:return 1;case Q_:return 4;case ql:case HS:return 16;case X_:return 536870912;default:return 16}default:return 16}}var ur=null,Kh=null,Tl=null;function o0(){if(Tl)return Tl;var t,e=Kh,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tl=i.slice(t,1<r?1-r:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function mg(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:mg,this.isPropagationStopped=mg,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=Rt(Os),Sa=Ce({},Os,{view:0,detail:0}),rC=Rt(Sa),qc,Qc,to,Qu=Ce({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(qc=t.screenX-to.screenX,Qc=t.screenY-to.screenY):Qc=qc=0,to=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),gg=Rt(Qu),iC=Ce({},Qu,{dataTransfer:0}),sC=Rt(iC),oC=Ce({},Sa,{relatedTarget:0}),Xc=Rt(oC),aC=Ce({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),lC=Rt(aC),uC=Ce({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cC=Rt(uC),dC=Ce({},Os,{data:0}),vg=Rt(dC),fC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pC[t])?!!e[t]:!1}function qh(){return mC}var gC=Ce({},Sa,{key:function(t){if(t.key){var e=fC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vC=Rt(gC),yC=Ce({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yg=Rt(yC),_C=Ce({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),wC=Rt(_C),EC=Ce({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),kC=Rt(EC),SC=Ce({},Qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CC=Rt(SC),bC=[9,13,27,32],Qh=Dn&&"CompositionEvent"in window,bo=null;Dn&&"documentMode"in document&&(bo=document.documentMode);var xC=Dn&&"TextEvent"in window&&!bo,a0=Dn&&(!Qh||bo&&8<bo&&11>=bo),_g=String.fromCharCode(32),wg=!1;function l0(t,e){switch(t){case"keyup":return bC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ji=!1;function IC(t,e){switch(t){case"compositionend":return u0(e);case"keypress":return e.which!==32?null:(wg=!0,_g);case"textInput":return t=e.data,t===_g&&wg?null:t;default:return null}}function TC(t,e){if(ji)return t==="compositionend"||!Qh&&l0(t,e)?(t=o0(),Tl=Kh=ur=null,ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a0&&e.locale!=="ko"?null:e.data;default:return null}}var NC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!NC[t.type]:e==="textarea"}function c0(t,e,n,r){$_(r),e=Zl(e,"onChange"),0<e.length&&(n=new Yh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,Go=null;function RC(t){E0(t,0)}function Xu(t){var e=Ui(t);if(L_(e))return t}function PC(t,e){if(t==="change")return e}var d0=!1;if(Dn){var Jc;if(Dn){var Zc="oninput"in document;if(!Zc){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),Zc=typeof kg.oninput=="function"}Jc=Zc}else Jc=!1;d0=Jc&&(!document.documentMode||9<document.documentMode)}function Sg(){xo&&(xo.detachEvent("onpropertychange",f0),Go=xo=null)}function f0(t){if(t.propertyName==="value"&&Xu(Go)){var e=[];c0(e,Go,t,Wh(t)),V_(RC,e)}}function AC(t,e,n){t==="focusin"?(Sg(),xo=e,Go=n,xo.attachEvent("onpropertychange",f0)):t==="focusout"&&Sg()}function OC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xu(Go)}function LC(t,e){if(t==="click")return Xu(e)}function DC(t,e){if(t==="input"||t==="change")return Xu(e)}function MC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:MC;function Ko(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gd.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function Cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bg(t,e){var n=Cg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cg(n)}}function h0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p0(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jC(t){var e=p0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(r!==null&&Xh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bg(n,s);var o=bg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FC=Dn&&"documentMode"in document&&11>=document.documentMode,Fi=null,ff=null,Io=null,hf=!1;function xg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hf||Fi==null||Fi!==Gl(r)||(r=Fi,"selectionStart"in r&&Xh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Ko(Io,r)||(Io=r,r=Zl(ff,"onSelect"),0<r.length&&(e=new Yh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fi)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zi={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},ed={},m0={};Dn&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function Ju(t){if(ed[t])return ed[t];if(!zi[t])return t;var e=zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m0)return ed[t]=e[n];return t}var g0=Ju("animationend"),v0=Ju("animationiteration"),y0=Ju("animationstart"),_0=Ju("transitionend"),w0=new Map,Ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){w0.set(t,e),Ci(e,[t])}for(var td=0;td<Ig.length;td++){var nd=Ig[td],zC=nd.toLowerCase(),UC=nd[0].toUpperCase()+nd.slice(1);Ar(zC,"on"+UC)}Ar(g0,"onAnimationEnd");Ar(v0,"onAnimationIteration");Ar(y0,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(_0,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$C=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Tg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zS(r,e,void 0,t),t.currentTarget=null}function E0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Tg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Tg(i,a,u),s=l}}}if(Yl)throw t=lf,Yl=!1,lf=null,t}function ge(t,e){var n=e[yf];n===void 0&&(n=e[yf]=new Set);var r=t+"__bubble";n.has(r)||(k0(e,t,2,!1),n.add(r))}function rd(t,e,n){var r=0;e&&(r|=4),k0(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[nl]){t[nl]=!0,N_.forEach(function(n){n!=="selectionchange"&&($C.has(n)||rd(n,!1,t),rd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,rd("selectionchange",!1,e))}}function k0(t,e,n,r){switch(s0(e)){case 1:var i=tC;break;case 4:i=nC;break;default:i=Gh}n=i.bind(null,e,n,t),i=void 0,!af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function id(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}V_(function(){var u=s,c=Wh(n),d=[];e:{var f=w0.get(t);if(f!==void 0){var _=Yh,v=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":_=vC;break;case"focusin":v="focus",_=Xc;break;case"focusout":v="blur",_=Xc;break;case"beforeblur":case"afterblur":_=Xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=sC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=wC;break;case g0:case v0:case y0:_=lC;break;case _0:_=kC;break;case"scroll":_=rC;break;case"wheel":_=CC;break;case"copy":case"cut":case"paste":_=cC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=yg}var w=(e&4)!==0,k=!w&&t==="scroll",y=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,m;h!==null;){m=h;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,y!==null&&(g=Wo(h,y),g!=null&&w.push(qo(h,g,m)))),k)break;h=h.return}0<w.length&&(f=new _(f,v,null,n,c),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==sf&&(v=n.relatedTarget||n.fromElement)&&(qr(v)||v[Mn]))break e;if((_||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?qr(v):null,v!==null&&(k=bi(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(w=gg,g="onMouseLeave",y="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=yg,g="onPointerLeave",y="onPointerEnter",h="pointer"),k=_==null?f:Ui(_),m=v==null?f:Ui(v),f=new w(g,h+"leave",_,n,c),f.target=k,f.relatedTarget=m,g=null,qr(c)===u&&(w=new w(y,h+"enter",v,n,c),w.target=m,w.relatedTarget=k,g=w),k=g,_&&v)t:{for(w=_,y=v,h=0,m=w;m;m=Ai(m))h++;for(m=0,g=y;g;g=Ai(g))m++;for(;0<h-m;)w=Ai(w),h--;for(;0<m-h;)y=Ai(y),m--;for(;h--;){if(w===y||y!==null&&w===y.alternate)break t;w=Ai(w),y=Ai(y)}w=null}else w=null;_!==null&&Ng(d,f,_,w,!1),v!==null&&k!==null&&Ng(d,k,v,w,!0)}}e:{if(f=u?Ui(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var E=PC;else if(Eg(f))if(d0)E=DC;else{E=OC;var C=AC}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=LC);if(E&&(E=E(t,u))){c0(d,E,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Zd(f,"number",f.value)}switch(C=u?Ui(u):window,t){case"focusin":(Eg(C)||C.contentEditable==="true")&&(Fi=C,ff=u,Io=null);break;case"focusout":Io=ff=Fi=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,xg(d,n,c);break;case"selectionchange":if(FC)break;case"keydown":case"keyup":xg(d,n,c)}var b;if(Qh)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ji?l0(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(a0&&n.locale!=="ko"&&(ji||I!=="onCompositionStart"?I==="onCompositionEnd"&&ji&&(b=o0()):(ur=c,Kh="value"in ur?ur.value:ur.textContent,ji=!0)),C=Zl(u,I),0<C.length&&(I=new vg(I,t,null,n,c),d.push({event:I,listeners:C}),b?I.data=b:(b=u0(n),b!==null&&(I.data=b)))),(b=xC?IC(t,n):TC(t,n))&&(u=Zl(u,"onBeforeInput"),0<u.length&&(c=new vg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}E0(d,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wo(t,n),s!=null&&r.unshift(qo(t,s,i)),s=Wo(t,e),s!=null&&r.push(qo(t,s,i))),t=t.return}return r}function Ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ng(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Wo(n,s),l!=null&&o.unshift(qo(n,l,a))):i||(l=Wo(n,s),l!=null&&o.push(qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var WC=/\r\n?/g,BC=/\u0000|\uFFFD/g;function Rg(t){return(typeof t=="string"?t:""+t).replace(WC,`
`).replace(BC,"")}function rl(t,e,n){if(e=Rg(e),Rg(t)!==e&&n)throw Error(A(425))}function eu(){}var pf=null,mf=null;function gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,HC=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,VC=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(t){return Pg.resolve(null).then(t).catch(GC)}:vf;function GC(t){setTimeout(function(){throw t})}function sd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),hn="__reactFiber$"+Ls,Qo="__reactProps$"+Ls,Mn="__reactContainer$"+Ls,yf="__reactEvents$"+Ls,KC="__reactListeners$"+Ls,YC="__reactHandles$"+Ls;function qr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ag(t);t!==null;){if(n=t[hn])return n;t=Ag(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[hn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Zu(t){return t[Qo]||null}var _f=[],$i=-1;function Or(t){return{current:t}}function ye(t){0>$i||(t.current=_f[$i],_f[$i]=null,$i--)}function me(t,e){$i++,_f[$i]=t.current,t.current=e}var xr={},tt=Or(xr),_t=Or(!1),ai=xr;function ps(t,e){var n=t.type.contextTypes;if(!n)return xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function tu(){ye(_t),ye(tt)}function Og(t,e,n){if(tt.current!==xr)throw Error(A(168));me(tt,e),me(_t,n)}function S0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,AS(t)||"Unknown",i));return Ce({},n,r)}function nu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,ai=tt.current,me(tt,t),me(_t,_t.current),!0}function Lg(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=S0(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,ye(_t),ye(tt),me(tt,t)):ye(_t),me(_t,n)}var bn=null,ec=!1,od=!1;function C0(t){bn===null?bn=[t]:bn.push(t)}function qC(t){ec=!0,C0(t)}function Lr(){if(!od&&bn!==null){od=!0;var t=0,e=oe;try{var n=bn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,ec=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),q_(Bh,Lr),i}finally{oe=e,od=!1}}return null}var Wi=[],Bi=0,ru=null,iu=0,Lt=[],Dt=0,li=null,In=1,Tn="";function Br(t,e){Wi[Bi++]=iu,Wi[Bi++]=ru,ru=t,iu=e}function b0(t,e,n){Lt[Dt++]=In,Lt[Dt++]=Tn,Lt[Dt++]=li,li=t;var r=In;t=Tn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-sn(e)+i|n<<i|r,Tn=s+t}else In=1<<s|n<<i|r,Tn=t}function Jh(t){t.return!==null&&(Br(t,1),b0(t,1,0))}function Zh(t){for(;t===ru;)ru=Wi[--Bi],Wi[Bi]=null,iu=Wi[--Bi],Wi[Bi]=null;for(;t===li;)li=Lt[--Dt],Lt[Dt]=null,Tn=Lt[--Dt],Lt[Dt]=null,In=Lt[--Dt],Lt[Dt]=null}var xt=null,Ct=null,Ee=!1,Xt=null;function x0(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,Ct=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:In,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,Ct=null,!0):!1;default:return!1}}function wf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ef(t){if(Ee){var e=Ct;if(e){var n=e;if(!Dg(t,e)){if(wf(t))throw Error(A(418));e=gr(n.nextSibling);var r=xt;e&&Dg(t,e)?x0(r,n):(t.flags=t.flags&-4097|2,Ee=!1,xt=t)}}else{if(wf(t))throw Error(A(418));t.flags=t.flags&-4097|2,Ee=!1,xt=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function il(t){if(t!==xt)return!1;if(!Ee)return Mg(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gf(t.type,t.memoizedProps)),e&&(e=Ct)){if(wf(t))throw I0(),Error(A(418));for(;e;)x0(t,e),e=gr(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=xt?gr(t.stateNode.nextSibling):null;return!0}function I0(){for(var t=Ct;t;)t=gr(t.nextSibling)}function ms(){Ct=xt=null,Ee=!1}function ep(t){Xt===null?Xt=[t]:Xt.push(t)}var QC=Hn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var su=Or(null),ou=null,Hi=null,tp=null;function np(){tp=Hi=ou=null}function rp(t){var e=su.current;ye(su),t._currentValue=e}function kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){ou=t,tp=Hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(tp!==t)if(t={context:t,memoizedValue:e,next:null},Hi===null){if(ou===null)throw Error(A(308));Hi=t,ou.dependencies={lanes:0,firstContext:t}}else Hi=Hi.next=t;return e}var Qr=null;function ip(t){Qr===null?Qr=[t]:Qr.push(t)}function T0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hh(t,n)}}function jg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function au(t,e,n,r){var i=t.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,_=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(f=e,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(_,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(_,d,f):v,f==null)break e;d=Ce({},d,f);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=_,l=d):c=c.next=_,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ci|=o,t.lanes=o,t.memoizedState=d}}function Fg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var R0=new T_.Component().refs;function Sf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=_r(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(on(e,t,i,r),Rl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=_r(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(on(e,t,i,r),Rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=_r(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(on(e,t,r,n),Rl(e,t,r))}};function zg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,r)||!Ko(i,s):!0}function P0(t,e,n){var r=!1,i=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=wt(e)?ai:tt.current,r=e.contextTypes,s=(r=r!=null)?ps(t,i):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ug(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function Cf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=R0,sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=wt(e)?ai:tt.current,i.context=ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tc.enqueueReplaceState(i,i.state,null),au(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===R0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $g(t){var e=t._init;return e(t._payload)}function A0(t){function e(y,h){if(t){var m=y.deletions;m===null?(y.deletions=[h],y.flags|=16):m.push(h)}}function n(y,h){if(!t)return null;for(;h!==null;)e(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function i(y,h){return y=wr(y,h),y.index=0,y.sibling=null,y}function s(y,h,m){return y.index=m,t?(m=y.alternate,m!==null?(m=m.index,m<h?(y.flags|=2,h):m):(y.flags|=2,h)):(y.flags|=1048576,h)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,h,m,g){return h===null||h.tag!==6?(h=hd(m,y.mode,g),h.return=y,h):(h=i(h,m),h.return=y,h)}function l(y,h,m,g){var E=m.type;return E===Mi?c(y,h,m.props.children,g,m.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&$g(E)===h.type)?(g=i(h,m.props),g.ref=no(y,h,m),g.return=y,g):(g=Ml(m.type,m.key,m.props,null,y.mode,g),g.ref=no(y,h,m),g.return=y,g)}function u(y,h,m,g){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=pd(m,y.mode,g),h.return=y,h):(h=i(h,m.children||[]),h.return=y,h)}function c(y,h,m,g,E){return h===null||h.tag!==7?(h=ii(m,y.mode,g,E),h.return=y,h):(h=i(h,m),h.return=y,h)}function d(y,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=hd(""+h,y.mode,m),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ya:return m=Ml(h.type,h.key,h.props,null,y.mode,m),m.ref=no(y,null,h),m.return=y,m;case Di:return h=pd(h,y.mode,m),h.return=y,h;case tr:var g=h._init;return d(y,g(h._payload),m)}if(go(h)||Xs(h))return h=ii(h,y.mode,m,null),h.return=y,h;sl(y,h)}return null}function f(y,h,m,g){var E=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(y,h,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ya:return m.key===E?l(y,h,m,g):null;case Di:return m.key===E?u(y,h,m,g):null;case tr:return E=m._init,f(y,h,E(m._payload),g)}if(go(m)||Xs(m))return E!==null?null:c(y,h,m,g,null);sl(y,m)}return null}function _(y,h,m,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return y=y.get(m)||null,a(h,y,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ya:return y=y.get(g.key===null?m:g.key)||null,l(h,y,g,E);case Di:return y=y.get(g.key===null?m:g.key)||null,u(h,y,g,E);case tr:var C=g._init;return _(y,h,m,C(g._payload),E)}if(go(g)||Xs(g))return y=y.get(m)||null,c(h,y,g,E,null);sl(h,g)}return null}function v(y,h,m,g){for(var E=null,C=null,b=h,I=h=0,N=null;b!==null&&I<m.length;I++){b.index>I?(N=b,b=null):N=b.sibling;var O=f(y,b,m[I],g);if(O===null){b===null&&(b=N);break}t&&b&&O.alternate===null&&e(y,b),h=s(O,h,I),C===null?E=O:C.sibling=O,C=O,b=N}if(I===m.length)return n(y,b),Ee&&Br(y,I),E;if(b===null){for(;I<m.length;I++)b=d(y,m[I],g),b!==null&&(h=s(b,h,I),C===null?E=b:C.sibling=b,C=b);return Ee&&Br(y,I),E}for(b=r(y,b);I<m.length;I++)N=_(b,y,I,m[I],g),N!==null&&(t&&N.alternate!==null&&b.delete(N.key===null?I:N.key),h=s(N,h,I),C===null?E=N:C.sibling=N,C=N);return t&&b.forEach(function($){return e(y,$)}),Ee&&Br(y,I),E}function w(y,h,m,g){var E=Xs(m);if(typeof E!="function")throw Error(A(150));if(m=E.call(m),m==null)throw Error(A(151));for(var C=E=null,b=h,I=h=0,N=null,O=m.next();b!==null&&!O.done;I++,O=m.next()){b.index>I?(N=b,b=null):N=b.sibling;var $=f(y,b,O.value,g);if($===null){b===null&&(b=N);break}t&&b&&$.alternate===null&&e(y,b),h=s($,h,I),C===null?E=$:C.sibling=$,C=$,b=N}if(O.done)return n(y,b),Ee&&Br(y,I),E;if(b===null){for(;!O.done;I++,O=m.next())O=d(y,O.value,g),O!==null&&(h=s(O,h,I),C===null?E=O:C.sibling=O,C=O);return Ee&&Br(y,I),E}for(b=r(y,b);!O.done;I++,O=m.next())O=_(b,y,I,O.value,g),O!==null&&(t&&O.alternate!==null&&b.delete(O.key===null?I:O.key),h=s(O,h,I),C===null?E=O:C.sibling=O,C=O);return t&&b.forEach(function(Q){return e(y,Q)}),Ee&&Br(y,I),E}function k(y,h,m,g){if(typeof m=="object"&&m!==null&&m.type===Mi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ya:e:{for(var E=m.key,C=h;C!==null;){if(C.key===E){if(E=m.type,E===Mi){if(C.tag===7){n(y,C.sibling),h=i(C,m.props.children),h.return=y,y=h;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&$g(E)===C.type){n(y,C.sibling),h=i(C,m.props),h.ref=no(y,C,m),h.return=y,y=h;break e}n(y,C);break}else e(y,C);C=C.sibling}m.type===Mi?(h=ii(m.props.children,y.mode,g,m.key),h.return=y,y=h):(g=Ml(m.type,m.key,m.props,null,y.mode,g),g.ref=no(y,h,m),g.return=y,y=g)}return o(y);case Di:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(y,h.sibling),h=i(h,m.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else e(y,h);h=h.sibling}h=pd(m,y.mode,g),h.return=y,y=h}return o(y);case tr:return C=m._init,k(y,h,C(m._payload),g)}if(go(m))return v(y,h,m,g);if(Xs(m))return w(y,h,m,g);sl(y,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(y,h.sibling),h=i(h,m),h.return=y,y=h):(n(y,h),h=hd(m,y.mode,g),h.return=y,y=h),o(y)):n(y,h)}return k}var gs=A0(!0),O0=A0(!1),ba={},vn=Or(ba),Xo=Or(ba),Jo=Or(ba);function Xr(t){if(t===ba)throw Error(A(174));return t}function op(t,e){switch(me(Jo,e),me(Xo,t),me(vn,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tf(e,t)}ye(vn),me(vn,e)}function vs(){ye(vn),ye(Xo),ye(Jo)}function L0(t){Xr(Jo.current);var e=Xr(vn.current),n=tf(e,t.type);e!==n&&(me(Xo,t),me(vn,n))}function ap(t){Xo.current===t&&(ye(vn),ye(Xo))}var ke=Or(0);function lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ad=[];function lp(){for(var t=0;t<ad.length;t++)ad[t]._workInProgressVersionPrimary=null;ad.length=0}var Pl=Hn.ReactCurrentDispatcher,ld=Hn.ReactCurrentBatchConfig,ui=0,Se=null,De=null,Ue=null,uu=!1,To=!1,Zo=0,XC=0;function Je(){throw Error(A(321))}function up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function cp(t,e,n,r,i,s){if(ui=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?tb:nb,t=n(r,i),To){s=0;do{if(To=!1,Zo=0,25<=s)throw Error(A(301));s+=1,Ue=De=null,e.updateQueue=null,Pl.current=rb,t=n(r,i)}while(To)}if(Pl.current=cu,e=De!==null&&De.next!==null,ui=0,Ue=De=Se=null,uu=!1,e)throw Error(A(300));return t}function dp(){var t=Zo!==0;return Zo=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Se.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function $t(){if(De===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Ue===null?Se.memoizedState:Ue.next;if(e!==null)Ue=e,De=t;else{if(t===null)throw Error(A(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?Se.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function ea(t,e){return typeof e=="function"?e(t):e}function ud(t){var e=$t(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ui&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Se.lanes|=c,ci|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ln(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cd(t){var e=$t(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function D0(){}function M0(t,e){var n=Se,r=$t(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,fp(z0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,ta(9,F0.bind(null,n,r,i,e),void 0,null),He===null)throw Error(A(349));ui&30||j0(n,e,i)}return i}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F0(t,e,n,r){e.value=n,e.getSnapshot=r,U0(e)&&$0(t)}function z0(t,e,n){return n(function(){U0(e)&&$0(t)})}function U0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function $0(t){var e=jn(t,1);e!==null&&on(e,t,1,-1)}function Wg(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=eb.bind(null,Se,t),[e.memoizedState,t]}function ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function W0(){return $t().memoizedState}function Al(t,e,n,r){var i=fn();Se.flags|=t,i.memoizedState=ta(1|e,n,void 0,r===void 0?null:r)}function nc(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&up(r,o.deps)){i.memoizedState=ta(e,n,s,r);return}}Se.flags|=t,i.memoizedState=ta(1|e,n,s,r)}function Bg(t,e){return Al(8390656,8,t,e)}function fp(t,e){return nc(2048,8,t,e)}function B0(t,e){return nc(4,2,t,e)}function H0(t,e){return nc(4,4,t,e)}function V0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function G0(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,V0.bind(null,e,t),n)}function hp(){}function K0(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Y0(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function q0(t,e,n){return ui&21?(ln(n,e)||(n=J_(),Se.lanes|=n,ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function JC(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=ld.transition;ld.transition={};try{t(!1),e()}finally{oe=n,ld.transition=r}}function Q0(){return $t().memoizedState}function ZC(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},X0(t))J0(e,n);else if(n=T0(t,e,n,r),n!==null){var i=lt();on(n,t,r,i),Z0(n,e,r)}}function eb(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(X0(t))J0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var l=e.interleaved;l===null?(i.next=i,ip(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=T0(t,e,i,r),n!==null&&(i=lt(),on(n,t,r,i),Z0(n,e,r))}}function X0(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function J0(t,e){To=uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hh(t,n)}}var cu={readContext:Ut,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},tb={readContext:Ut,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,V0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZC.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Wg,useDebugValue:hp,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Wg(!1),e=t[0];return t=JC.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=fn();if(Ee){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),He===null)throw Error(A(349));ui&30||j0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bg(z0.bind(null,r,s,t),[t]),r.flags|=2048,ta(9,F0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=He.identifierPrefix;if(Ee){var n=Tn,r=In;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nb={readContext:Ut,useCallback:K0,useContext:Ut,useEffect:fp,useImperativeHandle:G0,useInsertionEffect:B0,useLayoutEffect:H0,useMemo:Y0,useReducer:ud,useRef:W0,useState:function(){return ud(ea)},useDebugValue:hp,useDeferredValue:function(t){var e=$t();return q0(e,De.memoizedState,t)},useTransition:function(){var t=ud(ea)[0],e=$t().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:M0,useId:Q0,unstable_isNewReconciler:!1},rb={readContext:Ut,useCallback:K0,useContext:Ut,useEffect:fp,useImperativeHandle:G0,useInsertionEffect:B0,useLayoutEffect:H0,useMemo:Y0,useReducer:cd,useRef:W0,useState:function(){return cd(ea)},useDebugValue:hp,useDeferredValue:function(t){var e=$t();return De===null?e.memoizedState=t:q0(e,De.memoizedState,t)},useTransition:function(){var t=cd(ea)[0],e=$t().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:M0,useId:Q0,unstable_isNewReconciler:!1};function ys(t,e){try{var n="",r=e;do n+=PS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ib=typeof WeakMap=="function"?WeakMap:Map;function ew(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fu||(fu=!0,Df=r),bf(t,e)},n}function tw(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ib;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yb.bind(null,t,e,n),e.then(t,t))}function Vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var sb=Hn.ReactCurrentOwner,gt=!1;function at(t,e,n,r){e.child=t===null?O0(e,null,n,r):gs(e,t.child,n,r)}function Kg(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=cp(t,e,n,r,s,i),n=dp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ee&&n&&Jh(e),e.flags|=1,at(t,e,r,i),e.child)}function Yg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nw(t,e,s,r,i)):(t=Ml(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function nw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ko(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return xf(t,e,n,r,i)}function rw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Gi,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Gi,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(Gi,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(Gi,St),St|=r;return at(t,e,i,n),e.child}function iw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,r,i){var s=wt(n)?ai:tt.current;return s=ps(e,s),rs(e,i),n=cp(t,e,n,r,s,i),r=dp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ee&&r&&Jh(e),e.flags|=1,at(t,e,n,i),e.child)}function qg(t,e,n,r,i){if(wt(n)){var s=!0;nu(e)}else s=!1;if(rs(e,i),e.stateNode===null)Ol(t,e),P0(e,n,r),Cf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=wt(n)?ai:tt.current,u=ps(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ug(e,o,r,u),nr=!1;var f=e.memoizedState;o.state=f,au(e,r,o,i),l=e.memoizedState,a!==r||f!==l||_t.current||nr?(typeof c=="function"&&(Sf(e,n,c,r),l=e.memoizedState),(a=nr||zg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,N0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ut(l):(l=wt(n)?ai:tt.current,l=ps(e,l));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ug(e,o,r,l),nr=!1,f=e.memoizedState,o.state=f,au(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||_t.current||nr?(typeof _=="function"&&(Sf(e,n,_,r),v=e.memoizedState),(u=nr||zg(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return If(t,e,n,r,s,i)}function If(t,e,n,r,i,s){iw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lg(e,n,!1),Fn(t,e,s);r=e.stateNode,sb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,a,s)):at(t,e,a,s),e.memoizedState=r.state,i&&Lg(e,n,!0),e.child}function sw(t){var e=t.stateNode;e.pendingContext?Og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Og(t,e.context,!1),op(t,e.containerInfo)}function Qg(t,e,n,r,i){return ms(),ep(i),e.flags|=256,at(t,e,n,r),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ow(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(ke,i&1),t===null)return Ef(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sc(o,r,0,null),t=ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nf(n),e.memoizedState=Tf,t):pp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ob(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=wr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tf,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pp(t,e){return e=sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,r){return r!==null&&ep(r),gs(e,t.child,null,n),t=pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ob(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dd(Error(A(422))),ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sc({mode:"visible",children:r.children},i,0,null),s=ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gs(e,t.child,null,o),e.child.memoizedState=Nf(o),e.memoizedState=Tf,s);if(!(e.mode&1))return ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=dd(s,r,void 0),ol(t,e,o,r)}if(a=(o&t.childLanes)!==0,gt||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),on(r,t,i,-1))}return wp(),r=dd(Error(A(421))),ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_b.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=gr(i.nextSibling),xt=e,Ee=!0,Xt=null,t!==null&&(Lt[Dt++]=In,Lt[Dt++]=Tn,Lt[Dt++]=li,In=t.id,Tn=t.overflow,li=e),e=pp(e,r.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kf(t.return,e,n)}function fd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function aw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&lu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fd(e,!0,n,null,s);break;case"together":fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ab(t,e,n){switch(e.tag){case 3:sw(e),ms();break;case 5:L0(e);break;case 1:wt(e.type)&&nu(e);break;case 4:op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(su,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?ow(t,e,n):(me(ke,ke.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);me(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return aw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,rw(t,e,n)}return Fn(t,e,n)}var lw,Rf,uw,cw;lw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};uw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xr(vn.current);var s=null;switch(n){case"input":i=Xd(t,i),r=Xd(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=ef(t,i),r=ef(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=eu)}nf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};cw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ro(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lb(t,e,n){var r=e.pendingProps;switch(Zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return wt(e.type)&&tu(),Ze(e),null;case 3:return r=e.stateNode,vs(),ye(_t),ye(tt),lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(Ff(Xt),Xt=null))),Rf(t,e),Ze(e),null;case 5:ap(e);var i=Xr(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)uw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Ze(e),null}if(t=Xr(vn.current),il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[Qo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)ge(yo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":og(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":lg(r,s),ge("invalid",r)}nf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,a,t),i=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":qa(r),ag(r,s,!0);break;case"textarea":qa(r),ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=eu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=j_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Qo]=r,lw(t,e,!1,!1),e.stateNode=t;e:{switch(o=rf(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)ge(yo[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":og(t,r),i=Xd(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ge("invalid",t);break;case"textarea":lg(t,r),i=ef(t,r),ge("invalid",t);break;default:i=r}nf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?U_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&F_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$o(t,l):typeof l=="number"&&$o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&Fh(t,s,l,o))}switch(n){case"input":qa(t),ag(t,r,!1);break;case"textarea":qa(t),ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=eu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)cw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Xr(Jo.current),Xr(vn.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return Ze(e),null;case 13:if(ye(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ct!==null&&e.mode&1&&!(e.flags&128))I0(),ms(),e.flags|=98560,s=!1;else if(s=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[hn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Xt!==null&&(Ff(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Me===0&&(Me=3):wp())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return vs(),Rf(t,e),t===null&&Yo(e.stateNode.containerInfo),Ze(e),null;case 10:return rp(e.type._context),Ze(e),null;case 17:return wt(e.type)&&tu(),Ze(e),null;case 19:if(ye(ke),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lu(t),o!==null){for(e.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>_s&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=lu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return Ze(e),null}else 2*Re()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=ke.current,me(ke,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return _p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function ub(t,e){switch(Zh(e),e.tag){case 1:return wt(e.type)&&tu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),ye(_t),ye(tt),lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ap(e),null;case 13:if(ye(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(ke),null;case 4:return vs(),null;case 10:return rp(e.type._context),null;case 22:case 23:return _p(),null;case 24:return null;default:return null}}var al=!1,et=!1,cb=typeof WeakSet=="function"?WeakSet:Set,j=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Pf(t,e,n){try{n()}catch(r){be(t,e,r)}}var Jg=!1;function db(t,e){if(pf=Xl,t=p0(),Xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)f=d,d=_;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(_=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:t,selectionRange:n},Xl=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,y=e.stateNode,h=y.getSnapshotBeforeUpdate(e.elementType===e.type?w:Yt(e.type,w),k);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(g){be(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return v=Jg,Jg=!1,v}function No(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pf(e,n,s)}i=i.next}while(i!==r)}}function rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dw(t){var e=t.alternate;e!==null&&(t.alternate=null,dw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Qo],delete e[yf],delete e[KC],delete e[YC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fw(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=eu));else if(r!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var Ve=null,qt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)hw(t,e,n),n=n.sibling}function hw(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(qu,n)}catch{}switch(n.tag){case 5:et||Vi(n,e);case 6:var r=Ve,i=qt;Ve=null,Jn(t,e,n),Ve=r,qt=i,Ve!==null&&(qt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(qt?(t=Ve,n=n.stateNode,t.nodeType===8?sd(t.parentNode,n):t.nodeType===1&&sd(t,n),Vo(t)):sd(Ve,n.stateNode));break;case 4:r=Ve,i=qt,Ve=n.stateNode.containerInfo,qt=!0,Jn(t,e,n),Ve=r,qt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pf(n,e,o),i=i.next}while(i!==r)}Jn(t,e,n);break;case 1:if(!et&&(Vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Jn(t,e,n),et=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cb),e.forEach(function(r){var i=wb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,qt=!1;break e;case 3:Ve=a.stateNode.containerInfo,qt=!0;break e;case 4:Ve=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(Ve===null)throw Error(A(160));hw(s,o,i),Ve=null,qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pw(e,t),e=e.sibling}function pw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),dn(t),r&4){try{No(3,t,t.return),rc(3,t)}catch(w){be(t,t.return,w)}try{No(5,t,t.return)}catch(w){be(t,t.return,w)}}break;case 1:Kt(e,t),dn(t),r&512&&n!==null&&Vi(n,n.return);break;case 5:if(Kt(e,t),dn(t),r&512&&n!==null&&Vi(n,n.return),t.flags&32){var i=t.stateNode;try{$o(i,"")}catch(w){be(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&D_(i,s),rf(a,o);var u=rf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?U_(i,d):c==="dangerouslySetInnerHTML"?F_(i,d):c==="children"?$o(i,d):Fh(i,c,d,u)}switch(a){case"input":Jd(i,s);break;case"textarea":M_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Zi(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qo]=s}catch(w){be(t,t.return,w)}}break;case 6:if(Kt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){be(t,t.return,w)}}break;case 3:if(Kt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(w){be(t,t.return,w)}break;case 4:Kt(e,t),dn(t);break;case 13:Kt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vp=Re())),r&4&&ev(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(et=(u=et)||c,Kt(e,t),et=u):Kt(e,t),dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(d=j=c;j!==null;){switch(f=j,_=f.child,f.tag){case 0:case 11:case 14:case 15:No(4,f,f.return);break;case 1:Vi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){be(r,n,w)}}break;case 5:Vi(f,f.return);break;case 22:if(f.memoizedState!==null){nv(d);continue}}_!==null?(_.return=f,j=_):nv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=z_("display",o))}catch(w){be(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){be(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(e,t),dn(t),r&4&&ev(t);break;case 21:break;default:Kt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fw(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($o(i,""),r.flags&=-33);var s=Zg(t);Lf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zg(t);Of(t,a,o);break;default:throw Error(A(161))}}catch(l){be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fb(t,e,n){j=t,mw(t)}function mw(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||al;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||et;a=al;var u=et;if(al=o,(et=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?rv(i):l!==null?(l.return=o,j=l):rv(i);for(;s!==null;)j=s,mw(s),s=s.sibling;j=i,al=a,et=u}tv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):tv(t)}}function tv(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||rc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}et||e.flags&512&&Af(e)}catch(f){be(e,e.return,f)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function nv(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function rv(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rc(4,e)}catch(l){be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){be(e,i,l)}}var s=e.return;try{Af(e)}catch(l){be(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){be(e,o,l)}}}catch(l){be(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var hb=Math.ceil,du=Hn.ReactCurrentDispatcher,mp=Hn.ReactCurrentOwner,zt=Hn.ReactCurrentBatchConfig,re=0,He=null,Ae=null,Ye=0,St=0,Gi=Or(0),Me=0,na=null,ci=0,ic=0,gp=0,Ro=null,pt=null,vp=0,_s=1/0,Cn=null,fu=!1,Df=null,yr=null,ll=!1,cr=null,hu=0,Po=0,Mf=null,Ll=-1,Dl=0;function lt(){return re&6?Re():Ll!==-1?Ll:Ll=Re()}function _r(t){return t.mode&1?re&2&&Ye!==0?Ye&-Ye:QC.transition!==null?(Dl===0&&(Dl=J_()),Dl):(t=oe,t!==0||(t=window.event,t=t===void 0?16:s0(t.type)),t):1}function on(t,e,n,r){if(50<Po)throw Po=0,Mf=null,Error(A(185));ka(t,n,r),(!(re&2)||t!==He)&&(t===He&&(!(re&2)&&(ic|=n),Me===4&&sr(t,Ye)),Et(t,r),n===1&&re===0&&!(e.mode&1)&&(_s=Re()+500,ec&&Lr()))}function Et(t,e){var n=t.callbackNode;QS(t,e);var r=Ql(t,t===He?Ye:0);if(r===0)n!==null&&fg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fg(n),e===1)t.tag===0?qC(iv.bind(null,t)):C0(iv.bind(null,t)),VC(function(){!(re&6)&&Lr()}),n=null;else{switch(Z_(r)){case 1:n=Bh;break;case 4:n=Q_;break;case 16:n=ql;break;case 536870912:n=X_;break;default:n=ql}n=Sw(n,gw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gw(t,e){if(Ll=-1,Dl=0,re&6)throw Error(A(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=Ql(t,t===He?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pu(t,r);else{e=r;var i=re;re|=2;var s=yw();(He!==t||Ye!==e)&&(Cn=null,_s=Re()+500,ri(t,e));do try{gb();break}catch(a){vw(t,a)}while(1);np(),du.current=s,re=i,Ae!==null?e=0:(He=null,Ye=0,e=Me)}if(e!==0){if(e===2&&(i=uf(t),i!==0&&(r=i,e=jf(t,i))),e===1)throw n=na,ri(t,0),sr(t,r),Et(t,Re()),n;if(e===6)sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!pb(i)&&(e=pu(t,r),e===2&&(s=uf(t),s!==0&&(r=s,e=jf(t,s))),e===1))throw n=na,ri(t,0),sr(t,r),Et(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Hr(t,pt,Cn);break;case 3:if(sr(t,r),(r&130023424)===r&&(e=vp+500-Re(),10<e)){if(Ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vf(Hr.bind(null,t,pt,Cn),e);break}Hr(t,pt,Cn);break;case 4:if(sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hb(r/1960))-r,10<r){t.timeoutHandle=vf(Hr.bind(null,t,pt,Cn),r);break}Hr(t,pt,Cn);break;case 5:Hr(t,pt,Cn);break;default:throw Error(A(329))}}}return Et(t,Re()),t.callbackNode===n?gw.bind(null,t):null}function jf(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=pu(t,e),t!==2&&(e=pt,pt=n,e!==null&&Ff(e)),t}function Ff(t){pt===null?pt=t:pt.push.apply(pt,t)}function pb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~gp,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function iv(t){if(re&6)throw Error(A(327));is();var e=Ql(t,0);if(!(e&1))return Et(t,Re()),null;var n=pu(t,e);if(t.tag!==0&&n===2){var r=uf(t);r!==0&&(e=r,n=jf(t,r))}if(n===1)throw n=na,ri(t,0),sr(t,e),Et(t,Re()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,pt,Cn),Et(t,Re()),null}function yp(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(_s=Re()+500,ec&&Lr())}}function di(t){cr!==null&&cr.tag===0&&!(re&6)&&is();var e=re;re|=1;var n=zt.transition,r=oe;try{if(zt.transition=null,oe=1,t)return t()}finally{oe=r,zt.transition=n,re=e,!(re&6)&&Lr()}}function _p(){St=Gi.current,ye(Gi)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HC(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Zh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tu();break;case 3:vs(),ye(_t),ye(tt),lp();break;case 5:ap(r);break;case 4:vs();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:rp(r.type._context);break;case 22:case 23:_p()}n=n.return}if(He=t,Ae=t=wr(t.current,null),Ye=St=e,Me=0,na=null,gp=ic=ci=0,pt=Ro=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function vw(t,e){do{var n=Ae;try{if(np(),Pl.current=cu,uu){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uu=!1}if(ui=0,Ue=De=Se=null,To=!1,Zo=0,mp.current=null,n===null||n.return===null){Me=1,na=e,Ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=Vg(o);if(_!==null){_.flags&=-257,Gg(_,o,a,s,e),_.mode&1&&Hg(s,u,e),e=_,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Hg(s,u,e),wp();break e}l=Error(A(426))}}else if(Ee&&a.mode&1){var k=Vg(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Gg(k,o,a,s,e),ep(ys(l,a));break e}}s=l=ys(l,a),Me!==4&&(Me=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=ew(s,l,e);jg(s,y);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yr===null||!yr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=tw(s,a,e);jg(s,g);break e}}s=s.return}while(s!==null)}ww(n)}catch(E){e=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function yw(){var t=du.current;return du.current=cu,t===null?cu:t}function wp(){(Me===0||Me===3||Me===2)&&(Me=4),He===null||!(ci&268435455)&&!(ic&268435455)||sr(He,Ye)}function pu(t,e){var n=re;re|=2;var r=yw();(He!==t||Ye!==e)&&(Cn=null,ri(t,e));do try{mb();break}catch(i){vw(t,i)}while(1);if(np(),re=n,du.current=r,Ae!==null)throw Error(A(261));return He=null,Ye=0,Me}function mb(){for(;Ae!==null;)_w(Ae)}function gb(){for(;Ae!==null&&!$S();)_w(Ae)}function _w(t){var e=kw(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?ww(t):Ae=e,mp.current=null}function ww(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ub(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Ae=null;return}}else if(n=lb(n,e,St),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Me===0&&(Me=5)}function Hr(t,e,n){var r=oe,i=zt.transition;try{zt.transition=null,oe=1,vb(t,e,n,r)}finally{zt.transition=i,oe=r}return null}function vb(t,e,n,r){do is();while(cr!==null);if(re&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XS(t,s),t===He&&(Ae=He=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,Sw(ql,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=oe;oe=1;var a=re;re|=4,mp.current=null,db(t,n),pw(n,t),jC(mf),Xl=!!pf,mf=pf=null,t.current=n,fb(n),WS(),re=a,oe=o,zt.transition=s}else t.current=n;if(ll&&(ll=!1,cr=t,hu=i),s=t.pendingLanes,s===0&&(yr=null),VS(n.stateNode),Et(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fu)throw fu=!1,t=Df,Df=null,t;return hu&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===Mf?Po++:(Po=0,Mf=t):Po=0,Lr(),null}function is(){if(cr!==null){var t=Z_(hu),e=zt.transition,n=oe;try{if(zt.transition=null,oe=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,hu=0,re&6)throw Error(A(331));var i=re;for(re|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:No(8,c,s)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var f=c.sibling,_=c.return;if(dw(c),c===u){j=null;break}if(f!==null){f.return=_,j=f;break}j=_}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,j=y;break e}j=s.return}}var h=t.current;for(j=h;j!==null;){o=j;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,j=m;else e:for(o=h;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rc(9,a)}}catch(E){be(a,a.return,E)}if(a===o){j=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,j=g;break e}j=a.return}}if(re=i,Lr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(qu,t)}catch{}r=!0}return r}finally{oe=n,zt.transition=e}}return!1}function sv(t,e,n){e=ys(n,e),e=ew(t,e,1),t=vr(t,e,1),e=lt(),t!==null&&(ka(t,1,e),Et(t,e))}function be(t,e,n){if(t.tag===3)sv(t,t,n);else for(;e!==null;){if(e.tag===3){sv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=ys(n,t),t=tw(e,t,1),e=vr(e,t,1),t=lt(),e!==null&&(ka(e,1,t),Et(e,t));break}}e=e.return}}function yb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ye&n)===n&&(Me===4||Me===3&&(Ye&130023424)===Ye&&500>Re()-vp?ri(t,0):gp|=n),Et(t,e)}function Ew(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=lt();t=jn(t,e),t!==null&&(ka(t,e,n),Et(t,n))}function _b(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ew(t,n)}function wb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),Ew(t,n)}var kw;kw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,ab(t,e,n);gt=!!(t.flags&131072)}else gt=!1,Ee&&e.flags&1048576&&b0(e,iu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ol(t,e),t=e.pendingProps;var i=ps(e,tt.current);rs(e,n),i=cp(null,e,r,t,i,n);var s=dp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,nu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sp(e),i.updater=tc,e.stateNode=i,i._reactInternals=e,Cf(e,r,t,n),e=If(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&Jh(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kb(r),t=Yt(r,t),i){case 0:e=xf(null,e,r,t,n);break e;case 1:e=qg(null,e,r,t,n);break e;case 11:e=Kg(null,e,r,t,n);break e;case 14:e=Yg(null,e,r,Yt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),xf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),qg(t,e,r,i,n);case 3:e:{if(sw(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,N0(t,e),au(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ys(Error(A(423)),e),e=Qg(t,e,r,n,i);break e}else if(r!==i){i=ys(Error(A(424)),e),e=Qg(t,e,r,n,i);break e}else for(Ct=gr(e.stateNode.containerInfo.firstChild),xt=e,Ee=!0,Xt=null,n=O0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),r===i){e=Fn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return L0(e),t===null&&Ef(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gf(r,i)?o=null:s!==null&&gf(r,s)&&(e.flags|=32),iw(t,e),at(t,e,o,n),e.child;case 6:return t===null&&Ef(e),null;case 13:return ow(t,e,n);case 4:return op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gs(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Kg(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(su,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!_t.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=An(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=Ut(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Yg(t,e,r,i,n);case 15:return nw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Ol(t,e),e.tag=1,wt(r)?(t=!0,nu(e)):t=!1,rs(e,n),P0(e,r,i),Cf(e,r,i,n),If(null,e,r,!0,t,n);case 19:return aw(t,e,n);case 22:return rw(t,e,n)}throw Error(A(156,e.tag))};function Sw(t,e){return q_(t,e)}function Eb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new Eb(t,e,n,r)}function Ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kb(t){if(typeof t=="function")return Ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uh)return 11;if(t===$h)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mi:return ii(n.children,i,s,e);case zh:o=8,i|=8;break;case Kd:return t=Mt(12,n,e,i|2),t.elementType=Kd,t.lanes=s,t;case Yd:return t=Mt(13,n,e,i),t.elementType=Yd,t.lanes=s,t;case qd:return t=Mt(19,n,e,i),t.elementType=qd,t.lanes=s,t;case A_:return sc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R_:o=10;break e;case P_:o=9;break e;case Uh:o=11;break e;case $h:o=14;break e;case tr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ii(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function sc(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=A_,t.lanes=n,t.stateNode={isHidden:!1},t}function hd(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function pd(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yc(0),this.expirationTimes=Yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kp(t,e,n,r,i,s,o,a,l){return t=new Sb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sp(s),t}function Cb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Cw(t){if(!t)return xr;t=t._reactInternals;e:{if(bi(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(wt(n))return S0(t,n,e)}return e}function bw(t,e,n,r,i,s,o,a,l){return t=kp(n,r,!0,t,i,s,o,a,l),t.context=Cw(null),n=t.current,r=lt(),i=_r(n),s=An(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,ka(t,i,r),Et(t,r),t}function oc(t,e,n,r){var i=e.current,s=lt(),o=_r(i);return n=Cw(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(on(t,i,o,s),Rl(t,i,o)),o}function mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ov(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sp(t,e){ov(t,e),(t=t.alternate)&&ov(t,e)}function bb(){return null}var xw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}ac.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));oc(t,e,null,null)};ac.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;di(function(){oc(null,t,null,null)}),e[Mn]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=n0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&i0(t)}};function bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function av(){}function xb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=mu(o);s.call(u)}}var o=bw(e,r,t,0,null,!1,!1,"",av);return t._reactRootContainer=o,t[Mn]=o.current,Yo(t.nodeType===8?t.parentNode:t),di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=mu(l);a.call(u)}}var l=kp(t,0,!1,null,null,!1,!1,"",av);return t._reactRootContainer=l,t[Mn]=l.current,Yo(t.nodeType===8?t.parentNode:t),di(function(){oc(e,l,n,r)}),l}function uc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=mu(o);a.call(l)}}oc(e,o,t,i)}else o=xb(n,e,t,i,r);return mu(o)}e0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(Hh(e,n|1),Et(e,Re()),!(re&6)&&(_s=Re()+500,Lr()))}break;case 13:di(function(){var r=jn(t,1);if(r!==null){var i=lt();on(r,t,1,i)}}),Sp(t,1)}};Vh=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=lt();on(e,t,134217728,n)}Sp(t,134217728)}};t0=function(t){if(t.tag===13){var e=_r(t),n=jn(t,e);if(n!==null){var r=lt();on(n,t,e,r)}Sp(t,e)}};n0=function(){return oe};r0=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};of=function(t,e,n){switch(e){case"input":if(Jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zu(r);if(!i)throw Error(A(90));L_(r),Jd(r,i)}}}break;case"textarea":M_(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};B_=yp;H_=di;var Ib={usingClientEntryPoint:!1,Events:[Ca,Ui,Zu,$_,W_,yp]},io={findFiberByHostInstance:qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Tb={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K_(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||bb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{qu=ul.inject(Tb),gn=ul}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ib;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bp(e))throw Error(A(200));return Cb(t,e,null,n)};Nt.createRoot=function(t,e){if(!bp(t))throw Error(A(299));var n=!1,r="",i=xw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kp(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,Yo(t.nodeType===8?t.parentNode:t),new Cp(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=K_(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return di(t)};Nt.hydrate=function(t,e,n){if(!lc(e))throw Error(A(200));return uc(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!bp(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bw(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,Yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ac(e)};Nt.render=function(t,e,n){if(!lc(e))throw Error(A(200));return uc(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!lc(t))throw Error(A(40));return t._reactRootContainer?(di(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};Nt.unstable_batchedUpdates=yp;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lc(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return uc(t,e,n,!1,r)};Nt.version="18.2.0-next-9e3b772b8-20220608";function Iw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iw)}catch(t){console.error(t)}}Iw(),b_.exports=Nt;var Tw=b_.exports;const Nw=Ku(Tw);var lv=Tw;Vd.createRoot=lv.createRoot,Vd.hydrateRoot=lv.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},we.apply(this,arguments)}var Pe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pe||(Pe={}));const uv="popstate";function Nb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ra("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fi(i)}return Pb(e,n,null,t)}function X(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ws(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Rb(){return Math.random().toString(36).substr(2,8)}function cv(t,e){return{usr:t.state,key:t.key,idx:e}}function ra(t,e,n,r){return n===void 0&&(n=null),we({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vn(e):e,{state:n,key:e&&e.key||r||Rb()})}function fi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Pb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pe.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(we({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Pe.Pop;let k=c(),y=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:y})}function f(k,y){a=Pe.Push;let h=ra(w.location,k,y);n&&n(h,k),u=c()+1;let m=cv(h,u),g=w.createHref(h);try{o.pushState(m,"",g)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(g)}s&&l&&l({action:a,location:w.location,delta:1})}function _(k,y){a=Pe.Replace;let h=ra(w.location,k,y);n&&n(h,k),u=c();let m=cv(h,u),g=w.createHref(h);o.replaceState(m,"",g),s&&l&&l({action:a,location:w.location,delta:0})}function v(k){let y=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:fi(k);return X(y,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,y)}let w={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(uv,d),l=k,()=>{i.removeEventListener(uv,d),l=null}},createHref(k){return e(i,k)},createURL:v,encodeLocation(k){let y=v(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:_,go(k){return o.go(k)}};return w}var Le;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Le||(Le={}));const Ab=new Set(["lazy","caseSensitive","path","id","index","children"]);function Ob(t){return t.index===!0}function zf(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(X(i.index!==!0||!i.children,"Cannot specify children on an index route"),X(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Ob(i)){let l=we({},i,e(i),{id:a});return r[a]=l,l}else{let l=we({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=zf(i.children,e,o,r)),l}})}function Ki(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Vn(e):e,i=Ds(r.pathname||"/",n);if(i==null)return null;let s=Rw(t);Lb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Bb(s[a],Gb(i));return o}function Rw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(X(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=On([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(X(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:$b(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Pw(s.path))i(s,o,l)}),e}function Pw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Pw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Lb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Wb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Db=/^:\w+$/,Mb=3,jb=2,Fb=1,zb=10,Ub=-2,dv=t=>t==="*";function $b(t,e){let n=t.split("/"),r=n.length;return n.some(dv)&&(r+=Ub),e&&(r+=jb),n.filter(i=>!dv(i)).reduce((i,s)=>i+(Db.test(s)?Mb:s===""?Fb:zb),r)}function Wb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Bb(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Hb({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:On([i,c.pathname]),pathnameBase:Qb(On([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=On([i,c.pathnameBase]))}return s}function Hb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Vb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=Kb(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Vb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ws(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Gb(t){try{return decodeURI(t)}catch(e){return ws(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kb(t,e){try{return decodeURIComponent(t)}catch(n){return ws(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ds(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Yb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Vn(t):t;return{pathname:n?n.startsWith("/")?n:qb(n,e):e,search:Xb(r),hash:Jb(i)}}function qb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function md(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xa(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Vn(t):(i=we({},t),X(!i.pathname||!i.pathname.includes("?"),md("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),md("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),md("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=Yb(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const On=t=>t.join("/").replace(/\/\/+/g,"/"),Qb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Xb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Jb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class xp{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Aw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ow=["post","put","patch","delete"],Zb=new Set(Ow),ex=["get",...Ow],tx=new Set(ex),nx=new Set([301,302,303,307,308]),rx=new Set([307,308]),gd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ix={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},so={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Lw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sx=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function ox(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;X(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=T=>({hasErrorBoundary:x(T)})}else i=sx;let s={},o=zf(t.routes,i,void 0,s),a,l=t.basename||"/",u=we({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,_=null,v=null,w=t.hydrationData!=null,k=Ki(o,t.history.location,l),y=null;if(k==null){let x=Ot(404,{pathname:t.history.location.pathname}),{matches:T,route:P}=_v(o);k=T,y={[P.id]:x}}let h=!k.some(x=>x.route.lazy)&&(!k.some(x=>x.route.loader)||t.hydrationData!=null),m,g={historyAction:t.history.action,location:t.history.location,matches:k,initialized:h,navigation:gd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||y,fetchers:new Map,blockers:new Map},E=Pe.Pop,C=!1,b,I=!1,N=!1,O=[],$=[],Q=new Map,rt=0,Ht=-1,cn=new Map,it=new Set,kt=new Map,L=new Map,z=new Map,H=!1;function ae(){return c=t.history.listen(x=>{let{action:T,location:P,delta:F}=x;if(H){H=!1;return}ws(z.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let q=qm({currentLocation:g.location,nextLocation:P,historyAction:T});if(q&&F!=null){H=!0,t.history.go(F*-1),Va(q,{state:"blocked",location:P,proceed(){Va(q,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go(F)},reset(){let K=new Map(g.blockers);K.set(q,so),ne({blockers:K})}});return}return At(T,P)}),g.initialized||At(Pe.Pop,g.location),m}function ie(){c&&c(),d.clear(),b&&b.abort(),g.fetchers.forEach((x,T)=>Mc(T)),g.blockers.forEach((x,T)=>Ym(T))}function qn(x){return d.add(x),()=>d.delete(x)}function ne(x){g=we({},g,x),d.forEach(T=>T(g))}function st(x,T){var P,F;let q=g.actionData!=null&&g.navigation.formMethod!=null&&Qt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((P=x.state)==null?void 0:P._isRedirect)!==!0,K;T.actionData?Object.keys(T.actionData).length>0?K=T.actionData:K=null:q?K=g.actionData:K=null;let Y=T.loaderData?yv(g.loaderData,T.loaderData,T.matches||[],T.errors):g.loaderData,B=g.blockers;B.size>0&&(B=new Map(B),B.forEach((fe,Xe)=>B.set(Xe,so)));let W=C===!0||g.navigation.formMethod!=null&&Qt(g.navigation.formMethod)&&((F=x.state)==null?void 0:F._isRedirect)!==!0;a&&(o=a,a=void 0),I||E===Pe.Pop||(E===Pe.Push?t.history.push(x,x.state):E===Pe.Replace&&t.history.replace(x,x.state)),ne(we({},T,{actionData:K,loaderData:Y,historyAction:E,location:x,initialized:!0,navigation:gd,revalidation:"idle",restoreScrollPosition:Xm(x,T.matches||g.matches),preventScrollReset:W,blockers:B})),E=Pe.Pop,C=!1,I=!1,N=!1,O=[],$=[]}async function ot(x,T){if(typeof x=="number"){t.history.go(x);return}let P=Uf(g.location,g.matches,l,u.v7_prependBasename,x,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:F,submission:q,error:K}=fv(u.v7_normalizeFormMethod,!1,P,T),Y=g.location,B=ra(g.location,F,T&&T.state);B=we({},B,t.history.encodeLocation(B));let W=T&&T.replace!=null?T.replace:void 0,fe=Pe.Push;W===!0?fe=Pe.Replace:W===!1||q!=null&&Qt(q.formMethod)&&q.formAction===g.location.pathname+g.location.search&&(fe=Pe.Replace);let Xe=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,le=qm({currentLocation:Y,nextLocation:B,historyAction:fe});if(le){Va(le,{state:"blocked",location:B,proceed(){Va(le,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),ot(x,T)},reset(){let Ne=new Map(g.blockers);Ne.set(le,so),ne({blockers:Ne})}});return}return await At(fe,B,{submission:q,pendingError:K,preventScrollReset:Xe,replace:T&&T.replace})}function Vt(){if(Dc(),ne({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){At(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}At(E||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function At(x,T,P){b&&b.abort(),b=null,E=x,I=(P&&P.startUninterruptedRevalidation)===!0,eS(g.location,g.matches),C=(P&&P.preventScrollReset)===!0;let F=a||o,q=P&&P.overrideNavigation,K=Ki(F,T,l);if(!K){let Ne=Ot(404,{pathname:T.pathname}),{matches:Fe,route:zr}=_v(F);jc(),st(T,{matches:Fe,loaderData:{},errors:{[zr.id]:Ne}});return}if(g.initialized&&!N&&dx(g.location,T)&&!(P&&P.submission&&Qt(P.submission.formMethod))){st(T,{matches:K});return}b=new AbortController;let Y=ao(t.history,T,b.signal,P&&P.submission),B,W;if(P&&P.pendingError)W={[Yi(K).route.id]:P.pendingError};else if(P&&P.submission&&Qt(P.submission.formMethod)){let Ne=await Ba(Y,T,P.submission,K,{replace:P.replace});if(Ne.shortCircuited)return;B=Ne.pendingActionData,W=Ne.pendingActionError,q=cl(T,P.submission),Y=new Request(Y.url,{signal:Y.signal})}let{shortCircuited:fe,loaderData:Xe,errors:le}=await Gs(Y,T,K,q,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,B,W);fe||(b=null,st(T,we({matches:K},B?{actionData:B}:{},{loaderData:Xe,errors:le})))}async function Ba(x,T,P,F,q){q===void 0&&(q={}),Dc();let K=gx(T,P);ne({navigation:K});let Y,B=Wf(F,T);if(!B.route.action&&!B.route.lazy)Y={type:Le.error,error:Ot(405,{method:x.method,pathname:T.pathname,routeId:B.route.id})};else if(Y=await oo("action",x,B,F,s,i,l),x.signal.aborted)return{shortCircuited:!0};if(ss(Y)){let W;return q&&q.replace!=null?W=q.replace:W=Y.location===g.location.pathname+g.location.search,await Ys(g,Y,{submission:P,replace:W}),{shortCircuited:!0}}if(Ao(Y)){let W=Yi(F,B.route.id);return(q&&q.replace)!==!0&&(E=Pe.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:Y.error}}}if(Jr(Y))throw Ot(400,{type:"defer-action"});return{pendingActionData:{[B.route.id]:Y.data}}}async function Gs(x,T,P,F,q,K,Y,B,W){let fe=F||cl(T,q),Xe=q||K||kv(fe),le=a||o,[Ne,Fe]=hv(t.history,g,P,Xe,T,N,O,$,kt,it,le,l,B,W);if(jc(ue=>!(P&&P.some(Gt=>Gt.route.id===ue))||Ne&&Ne.some(Gt=>Gt.route.id===ue)),Ht=++rt,Ne.length===0&&Fe.length===0){let ue=Gm();return st(T,we({matches:P,loaderData:{},errors:W||null},B?{actionData:B}:{},ue?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!I){Fe.forEach(Gt=>{let Xn=g.fetchers.get(Gt.key),Wc=lo(void 0,Xn?Xn.data:void 0);g.fetchers.set(Gt.key,Wc)});let ue=B||g.actionData;ne(we({navigation:fe},ue?Object.keys(ue).length===0?{actionData:null}:{actionData:ue}:{},Fe.length>0?{fetchers:new Map(g.fetchers)}:{}))}Fe.forEach(ue=>{Q.has(ue.key)&&Qn(ue.key),ue.controller&&Q.set(ue.key,ue.controller)});let zr=()=>Fe.forEach(ue=>Qn(ue.key));b&&b.signal.addEventListener("abort",zr);let{results:Ur,loaderResults:qs,fetcherResults:Fc}=await Hm(g.matches,P,Ne,Fe,x);if(x.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",zr),Fe.forEach(ue=>Q.delete(ue.key));let kn=wv(Ur);if(kn){if(kn.idx>=Ne.length){let ue=Fe[kn.idx-Ne.length].key;it.add(ue)}return await Ys(g,kn.result,{replace:Y}),{shortCircuited:!0}}let{loaderData:Sn,errors:Ga}=vv(g,P,Ne,qs,W,Fe,Fc,L);L.forEach((ue,Gt)=>{ue.subscribe(Xn=>{(Xn||ue.done)&&L.delete(Gt)})});let zc=Gm(),Uc=Km(Ht),$c=zc||Uc||Fe.length>0;return we({loaderData:Sn,errors:Ga},$c?{fetchers:new Map(g.fetchers)}:{})}function Fr(x){return g.fetchers.get(x)||ix}function Lc(x,T,P,F){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Q.has(x)&&Qn(x);let q=a||o,K=Uf(g.location,g.matches,l,u.v7_prependBasename,P,T,F==null?void 0:F.relative),Y=Ki(q,K,l);if(!Y){Ha(x,T,Ot(404,{pathname:K}));return}let{path:B,submission:W,error:fe}=fv(u.v7_normalizeFormMethod,!0,K,F);if(fe){Ha(x,T,fe);return}let Xe=Wf(Y,B);if(C=(F&&F.preventScrollReset)===!0,W&&Qt(W.formMethod)){Ks(x,T,B,Xe,Y,W);return}kt.set(x,{routeId:T,path:B}),Xk(x,T,B,Xe,Y,W)}async function Ks(x,T,P,F,q,K){if(Dc(),kt.delete(x),!F.route.action&&!F.route.lazy){let Oe=Ot(405,{method:K.formMethod,pathname:P,routeId:T});Ha(x,T,Oe);return}let Y=g.fetchers.get(x),B=vx(K,Y);g.fetchers.set(x,B),ne({fetchers:new Map(g.fetchers)});let W=new AbortController,fe=ao(t.history,P,W.signal,K);Q.set(x,W);let Xe=rt,le=await oo("action",fe,F,q,s,i,l);if(fe.signal.aborted){Q.get(x)===W&&Q.delete(x);return}if(ss(le))if(Q.delete(x),Ht>Xe){let Oe=Li(void 0);g.fetchers.set(x,Oe),ne({fetchers:new Map(g.fetchers)});return}else{it.add(x);let Oe=lo(K);return g.fetchers.set(x,Oe),ne({fetchers:new Map(g.fetchers)}),Ys(g,le,{submission:K,isFetchActionRedirect:!0})}if(Ao(le)){Ha(x,T,le.error);return}if(Jr(le))throw Ot(400,{type:"defer-action"});let Ne=g.navigation.location||g.location,Fe=ao(t.history,Ne,W.signal),zr=a||o,Ur=g.navigation.state!=="idle"?Ki(zr,g.navigation.location,l):g.matches;X(Ur,"Didn't find any matches after fetcher action");let qs=++rt;cn.set(x,qs);let Fc=lo(K,le.data);g.fetchers.set(x,Fc);let[kn,Sn]=hv(t.history,g,Ur,K,Ne,N,O,$,kt,it,zr,l,{[F.route.id]:le.data},void 0);Sn.filter(Oe=>Oe.key!==x).forEach(Oe=>{let Qs=Oe.key,Jm=g.fetchers.get(Qs),nS=lo(void 0,Jm?Jm.data:void 0);g.fetchers.set(Qs,nS),Q.has(Qs)&&Qn(Qs),Oe.controller&&Q.set(Qs,Oe.controller)}),ne({fetchers:new Map(g.fetchers)});let Ga=()=>Sn.forEach(Oe=>Qn(Oe.key));W.signal.addEventListener("abort",Ga);let{results:zc,loaderResults:Uc,fetcherResults:$c}=await Hm(g.matches,Ur,kn,Sn,Fe);if(W.signal.aborted)return;W.signal.removeEventListener("abort",Ga),cn.delete(x),Q.delete(x),Sn.forEach(Oe=>Q.delete(Oe.key));let ue=wv(zc);if(ue){if(ue.idx>=kn.length){let Oe=Sn[ue.idx-kn.length].key;it.add(Oe)}return Ys(g,ue.result)}let{loaderData:Gt,errors:Xn}=vv(g,g.matches,kn,Uc,void 0,Sn,$c,L);if(g.fetchers.has(x)){let Oe=Li(le.data);g.fetchers.set(x,Oe)}let Wc=Km(qs);g.navigation.state==="loading"&&qs>Ht?(X(E,"Expected pending action"),b&&b.abort(),st(g.navigation.location,{matches:Ur,loaderData:Gt,errors:Xn,fetchers:new Map(g.fetchers)})):(ne(we({errors:Xn,loaderData:yv(g.loaderData,Gt,Ur,Xn)},Wc||Sn.length>0?{fetchers:new Map(g.fetchers)}:{})),N=!1)}async function Xk(x,T,P,F,q,K){let Y=g.fetchers.get(x),B=lo(K,Y?Y.data:void 0);g.fetchers.set(x,B),ne({fetchers:new Map(g.fetchers)});let W=new AbortController,fe=ao(t.history,P,W.signal);Q.set(x,W);let Xe=rt,le=await oo("loader",fe,F,q,s,i,l);if(Jr(le)&&(le=await jw(le,fe.signal,!0)||le),Q.get(x)===W&&Q.delete(x),fe.signal.aborted)return;if(ss(le))if(Ht>Xe){let Fe=Li(void 0);g.fetchers.set(x,Fe),ne({fetchers:new Map(g.fetchers)});return}else{it.add(x),await Ys(g,le);return}if(Ao(le)){let Fe=Yi(g.matches,T);g.fetchers.delete(x),ne({fetchers:new Map(g.fetchers),errors:{[Fe.route.id]:le.error}});return}X(!Jr(le),"Unhandled fetcher deferred data");let Ne=Li(le.data);g.fetchers.set(x,Ne),ne({fetchers:new Map(g.fetchers)})}async function Ys(x,T,P){let{submission:F,replace:q,isFetchActionRedirect:K}=P===void 0?{}:P;T.revalidate&&(N=!0);let Y=ra(x.location,T.location,we({_isRedirect:!0},K?{_isFetchActionRedirect:!0}:{}));if(X(Y,"Expected a location on the redirect navigation"),Lw.test(T.location)&&n){let fe=t.history.createURL(T.location),Xe=Ds(fe.pathname,l)==null;if(e.location.origin!==fe.origin||Xe){q?e.location.replace(T.location):e.location.assign(T.location);return}}b=null;let B=q===!0?Pe.Replace:Pe.Push,W=F||kv(x.navigation);if(rx.has(T.status)&&W&&Qt(W.formMethod))await At(B,Y,{submission:we({},W,{formAction:T.location}),preventScrollReset:C});else if(K)await At(B,Y,{overrideNavigation:cl(Y),fetcherSubmission:W,preventScrollReset:C});else{let fe=cl(Y,W);await At(B,Y,{overrideNavigation:fe,preventScrollReset:C})}}async function Hm(x,T,P,F,q){let K=await Promise.all([...P.map(W=>oo("loader",q,W,T,s,i,l)),...F.map(W=>W.matches&&W.match&&W.controller?oo("loader",ao(t.history,W.path,W.controller.signal),W.match,W.matches,s,i,l):{type:Le.error,error:Ot(404,{pathname:W.path})})]),Y=K.slice(0,P.length),B=K.slice(P.length);return await Promise.all([Ev(x,P,Y,Y.map(()=>q.signal),!1,g.loaderData),Ev(x,F.map(W=>W.match),B,F.map(W=>W.controller?W.controller.signal:null),!0)]),{results:K,loaderResults:Y,fetcherResults:B}}function Dc(){N=!0,O.push(...jc()),kt.forEach((x,T)=>{Q.has(T)&&($.push(T),Qn(T))})}function Ha(x,T,P){let F=Yi(g.matches,T);Mc(x),ne({errors:{[F.route.id]:P},fetchers:new Map(g.fetchers)})}function Mc(x){let T=g.fetchers.get(x);Q.has(x)&&!(T&&T.state==="loading"&&cn.has(x))&&Qn(x),kt.delete(x),cn.delete(x),it.delete(x),g.fetchers.delete(x)}function Qn(x){let T=Q.get(x);X(T,"Expected fetch controller: "+x),T.abort(),Q.delete(x)}function Vm(x){for(let T of x){let P=Fr(T),F=Li(P.data);g.fetchers.set(T,F)}}function Gm(){let x=[],T=!1;for(let P of it){let F=g.fetchers.get(P);X(F,"Expected fetcher: "+P),F.state==="loading"&&(it.delete(P),x.push(P),T=!0)}return Vm(x),T}function Km(x){let T=[];for(let[P,F]of cn)if(F<x){let q=g.fetchers.get(P);X(q,"Expected fetcher: "+P),q.state==="loading"&&(Qn(P),cn.delete(P),T.push(P))}return Vm(T),T.length>0}function Jk(x,T){let P=g.blockers.get(x)||so;return z.get(x)!==T&&z.set(x,T),P}function Ym(x){g.blockers.delete(x),z.delete(x)}function Va(x,T){let P=g.blockers.get(x)||so;X(P.state==="unblocked"&&T.state==="blocked"||P.state==="blocked"&&T.state==="blocked"||P.state==="blocked"&&T.state==="proceeding"||P.state==="blocked"&&T.state==="unblocked"||P.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+T.state);let F=new Map(g.blockers);F.set(x,T),ne({blockers:F})}function qm(x){let{currentLocation:T,nextLocation:P,historyAction:F}=x;if(z.size===0)return;z.size>1&&ws(!1,"A router only supports one blocker at a time");let q=Array.from(z.entries()),[K,Y]=q[q.length-1],B=g.blockers.get(K);if(!(B&&B.state==="proceeding")&&Y({currentLocation:T,nextLocation:P,historyAction:F}))return K}function jc(x){let T=[];return L.forEach((P,F)=>{(!x||x(F))&&(P.cancel(),T.push(F),L.delete(F))}),T}function Zk(x,T,P){if(f=x,v=T,_=P||null,!w&&g.navigation===gd){w=!0;let F=Xm(g.location,g.matches);F!=null&&ne({restoreScrollPosition:F})}return()=>{f=null,v=null,_=null}}function Qm(x,T){return _&&_(x,T.map(F=>mx(F,g.loaderData)))||x.key}function eS(x,T){if(f&&v){let P=Qm(x,T);f[P]=v()}}function Xm(x,T){if(f){let P=Qm(x,T),F=f[P];if(typeof F=="number")return F}return null}function tS(x){s={},a=zf(x,i,void 0,s)}return m={get basename(){return l},get state(){return g},get routes(){return o},initialize:ae,subscribe:qn,enableScrollRestoration:Zk,navigate:ot,fetch:Lc,revalidate:Vt,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Fr,deleteFetcher:Mc,dispose:ie,getBlocker:Jk,deleteBlocker:Ym,_internalFetchControllers:Q,_internalActiveDeferreds:L,_internalSetRoutes:tS},m}function ax(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Uf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=cc(i||".",xa(a).map(c=>c.pathnameBase),Ds(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Ip(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:On([n,u.pathname])),fi(u)}function fv(t,e,n,r){if(!r||!ax(r))return{path:n};if(r.formMethod&&!px(r.formMethod))return{path:n,error:Ot(405,{method:r.formMethod})};let i=()=>({path:n,error:Ot(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=Mw(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Qt(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,v)=>{let[w,k]=v;return""+_+w+"="+k+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Qt(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}X(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=$f(r.formData),u=r.formData;else if(r.body instanceof FormData)l=$f(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=gv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=gv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Qt(c.formMethod))return{path:n,submission:c};let d=Vn(n);return e&&d.search&&Ip(d.search)&&l.append("index",""),d.search="?"+l,{path:fi(d),submission:c}}function lx(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function hv(t,e,n,r,i,s,o,a,l,u,c,d,f,_){let v=_?Object.values(_)[0]:f?Object.values(f)[0]:void 0,w=t.createURL(e.location),k=t.createURL(i),y=_?Object.keys(_)[0]:void 0,m=lx(n,y).filter((E,C)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(ux(e.loaderData,e.matches[C],E)||o.some(N=>N===E.route.id))return!0;let b=e.matches[C],I=E;return pv(E,we({currentUrl:w,currentParams:b.params,nextUrl:k,nextParams:I.params},r,{actionResult:v,defaultShouldRevalidate:s||w.pathname+w.search===k.pathname+k.search||w.search!==k.search||Dw(b,I)}))}),g=[];return l.forEach((E,C)=>{if(!n.some($=>$.route.id===E.routeId))return;let b=Ki(c,E.path,d);if(!b){g.push({key:C,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let I=e.fetchers.get(C),N=Wf(b,E.path),O=!1;u.has(C)?O=!1:a.includes(C)?O=!0:I&&I.state!=="idle"&&I.data===void 0?O=s:O=pv(N,we({currentUrl:w,currentParams:e.matches[e.matches.length-1].params,nextUrl:k,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),O&&g.push({key:C,routeId:E.routeId,path:E.path,matches:b,match:N,controller:new AbortController})}),[m,g]}function ux(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Dw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function pv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function mv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];X(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";ws(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Ab.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,we({},e(i),{lazy:void 0}))}async function oo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=v=>{let w,k=new Promise((y,h)=>w=h);return c=()=>w(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),k])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([d(v),mv(n.route,s,i)]))[0];else if(await mv(n.route,s,i),v=n.route[t],v)u=await d(v);else if(t==="action"){let w=new URL(e.url),k=w.pathname+w.search;throw Ot(405,{method:e.method,pathname:k,routeId:n.route.id})}else return{type:Le.data,data:void 0};else if(v)u=await d(v);else{let w=new URL(e.url),k=w.pathname+w.search;throw Ot(404,{pathname:k})}X(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Le.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(hx(u)){let v=u.status;if(nx.has(v)){let y=u.headers.get("Location");if(X(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!Lw.test(y))y=Uf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,y);else if(!a.isStaticRequest){let h=new URL(e.url),m=y.startsWith("//")?new URL(h.protocol+y):new URL(y),g=Ds(m.pathname,o)!=null;m.origin===h.origin&&g&&(y=m.pathname+m.search+m.hash)}if(a.isStaticRequest)throw u.headers.set("Location",y),u;return{type:Le.redirect,status:v,location:y,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||Le.data,response:u};let w,k=u.headers.get("Content-Type");return k&&/\bapplication\/json\b/.test(k)?w=await u.json():w=await u.text(),l===Le.error?{type:l,error:new xp(v,u.statusText,w),headers:u.headers}:{type:Le.data,data:w,statusCode:u.status,headers:u.headers}}if(l===Le.error)return{type:l,error:u};if(fx(u)){var f,_;return{type:Le.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((_=u.init)==null?void 0:_.headers)&&new Headers(u.init.headers)}}return{type:Le.data,data:u}}function ao(t,e,n,r){let i=t.createURL(Mw(e)).toString(),s={signal:n};if(r&&Qt(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=$f(r.formData):s.body=r.formData}return new Request(i,s)}function $f(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function gv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function cx(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(X(!ss(c),"Cannot handle redirect results in processLoaderData"),Ao(c)){let _=Yi(t,f),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[_.route.id]==null&&(o[_.route.id]=v),s[f]=void 0,l||(l=!0,a=Aw(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Jr(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function vv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=cx(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:_}=s[c];X(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(_&&_.signal.aborted))if(Ao(v)){let w=Yi(t.matches,f==null?void 0:f.route.id);u&&u[w.route.id]||(u=we({},u,{[w.route.id]:v.error})),t.fetchers.delete(d)}else if(ss(v))X(!1,"Unhandled fetcher revalidation redirect");else if(Jr(v))X(!1,"Unhandled fetcher deferred data");else{let w=Li(v.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function yv(t,e,n,r){let i=we({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Yi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function _v(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ot(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new xp(t||500,o,new Error(a),!0)}function wv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ss(n))return{result:n,idx:e}}}function Mw(t){let e=typeof t=="string"?Vn(t):t;return fi(we({},e,{hash:""}))}function dx(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Jr(t){return t.type===Le.deferred}function Ao(t){return t.type===Le.error}function ss(t){return(t&&t.type)===Le.redirect}function fx(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function hx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function px(t){return tx.has(t.toLowerCase())}function Qt(t){return Zb.has(t.toLowerCase())}async function Ev(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!Dw(u,l)&&(s&&s[l.route.id])!==void 0;if(Jr(a)&&(i||c)){let d=r[o];X(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await jw(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function jw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Le.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Le.error,error:i}}return{type:Le.data,data:t.deferredData.data}}}function Ip(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function mx(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Wf(t,e){let n=typeof e=="string"?Vn(e).search:e.search;if(t[t.length-1].route.index&&Ip(n||""))return t[t.length-1];let r=xa(t);return r[r.length-1]}function kv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function cl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function gx(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function lo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function vx(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Li(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gu(){return gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gu.apply(this,arguments)}const dc=S.createContext(null),Tp=S.createContext(null),xi=S.createContext(null),fc=S.createContext(null),Gn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Fw=S.createContext(null);function yx(t,e){let{relative:n}=e===void 0?{}:e;Ms()||X(!1);let{basename:r,navigator:i}=S.useContext(xi),{hash:s,pathname:o,search:a}=Np(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:On([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ms(){return S.useContext(fc)!=null}function wn(){return Ms()||X(!1),S.useContext(fc).location}function zw(t){S.useContext(xi).static||S.useLayoutEffect(t)}function Ia(){let{isDataRoute:t}=S.useContext(Gn);return t?Ax():_x()}function _x(){Ms()||X(!1);let t=S.useContext(dc),{basename:e,navigator:n}=S.useContext(xi),{matches:r}=S.useContext(Gn),{pathname:i}=wn(),s=JSON.stringify(xa(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return zw(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=cc(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:On([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const wx=S.createContext(null);function Ex(t){let e=S.useContext(Gn).outlet;return e&&S.createElement(wx.Provider,{value:t},e)}function Np(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Gn),{pathname:i}=wn(),s=JSON.stringify(xa(r).map(o=>o.pathnameBase));return S.useMemo(()=>cc(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function kx(t,e){return Uw(t,e)}function Uw(t,e,n){Ms()||X(!1);let{navigator:r}=S.useContext(xi),{matches:i}=S.useContext(Gn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=wn(),u;if(e){var c;let w=typeof e=="string"?Vn(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||X(!1),u=w}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",_=Ki(t,{pathname:f}),v=Ix(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:On([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:On([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&v?S.createElement(fc.Provider,{value:{location:gu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pe.Pop}},v):v}function Sx(){let t=Px(),e=Aw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const Cx=S.createElement(Sx,null);class bx extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Gn.Provider,{value:this.props.routeContext},S.createElement(Fw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xx(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(dc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Gn.Provider,{value:e},r)}function Ix(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||X(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Cx);let f=e.concat(s.slice(0,u+1)),_=()=>{let v;return c?v=d:l.route.Component?v=S.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,S.createElement(xx,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(bx,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:_(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):_()},null)}var Bf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Bf||(Bf={}));var ia;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ia||(ia={}));function Tx(t){let e=S.useContext(dc);return e||X(!1),e}function Nx(t){let e=S.useContext(Tp);return e||X(!1),e}function Rx(t){let e=S.useContext(Gn);return e||X(!1),e}function $w(t){let e=Rx(),n=e.matches[e.matches.length-1];return n.route.id||X(!1),n.route.id}function Px(){var t;let e=S.useContext(Fw),n=Nx(ia.UseRouteError),r=$w(ia.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Ax(){let{router:t}=Tx(Bf.UseNavigateStable),e=$w(ia.UseNavigateStable),n=S.useRef(!1);return zw(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,gu({fromRouteId:e},s)))},[t,e])}const Ox="startTransition",Sv=_S[Ox];function Lx(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=S.useState(n.state),{v7_startTransition:o}=r||{},a=S.useCallback(d=>{o&&Sv?Sv(()=>s(d)):s(d)},[s,o]);S.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,_)=>n.navigate(d,{state:f,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(d,f,_)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),u=n.basename||"/",c=S.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return S.createElement(S.Fragment,null,S.createElement(dc.Provider,{value:c},S.createElement(Tp.Provider,{value:i},S.createElement(jx,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?S.createElement(Dx,{routes:n.routes,state:i}):e))),null)}function Dx(t){let{routes:e,state:n}=t;return Uw(e,void 0,n)}function Mx(t){let{to:e,replace:n,state:r,relative:i}=t;Ms()||X(!1);let{matches:s}=S.useContext(Gn),{pathname:o}=wn(),a=Ia(),l=cc(e,xa(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Ww(t){return Ex(t.context)}function Ge(t){X(!1)}function jx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Pe.Pop,navigator:s,static:o=!1}=t;Ms()&&X(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Vn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:_="default"}=r,v=S.useMemo(()=>{let w=Ds(u,a);return w==null?null:{location:{pathname:w,search:c,hash:d,state:f,key:_},navigationType:i}},[a,u,c,d,f,_,i]);return v==null?null:S.createElement(xi.Provider,{value:l},S.createElement(fc.Provider,{children:n,value:v}))}function Fx(t){let{children:e,location:n}=t;return kx(vu(e),n)}var Cv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Cv||(Cv={}));new Promise(()=>{});function vu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,vu(r.props.children,s));return}r.type!==Ge&&X(!1),!r.props.index||!r.props.children||X(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=vu(r.props.children,s)),n.push(o)}),n}function zx(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:S.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:S.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Es(){return Es=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Es.apply(this,arguments)}function Bw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ux(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $x(t,e){return t.button===0&&(!e||e==="_self")&&!Ux(t)}const Wx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Bx=["aria-current","caseSensitive","className","end","style","to","children"];function Hx(t,e){return ox({basename:e==null?void 0:e.basename,future:Es({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Nb({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||Vx(),routes:t,mapRouteProperties:zx}).initialize()}function Vx(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Es({},e,{errors:Gx(e.errors)})),e}function Gx(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new xp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const Kx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,It=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=Bw(e,Wx),{basename:f}=S.useContext(xi),_,v=!1;if(typeof u=="string"&&Yx.test(u)&&(_=u,Kx))try{let h=new URL(window.location.href),m=u.startsWith("//")?new URL(h.protocol+u):new URL(u),g=Ds(m.pathname,f);m.origin===h.origin&&g!=null?u=g+m.search+m.hash:v=!0}catch{}let w=yx(u,{relative:i}),k=qx(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(h){r&&r(h),h.defaultPrevented||k(h)}return S.createElement("a",Es({},d,{href:_||w,onClick:v||s?r:y,ref:n,target:l}))}),Yr=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=Bw(e,Bx),d=Np(l,{relative:c.relative}),f=wn(),_=S.useContext(Tp),{navigator:v}=S.useContext(xi),w=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,k=f.pathname,y=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(k=k.toLowerCase(),y=y?y.toLowerCase():null,w=w.toLowerCase());let h=k===w||!o&&k.startsWith(w)&&k.charAt(w.length)==="/",m=y!=null&&(y===w||!o&&y.startsWith(w)&&y.charAt(w.length)==="/"),g=h?r:void 0,E;typeof s=="function"?E=s({isActive:h,isPending:m}):E=[s,h?"active":null,m?"pending":null].filter(Boolean).join(" ");let C=typeof a=="function"?a({isActive:h,isPending:m}):a;return S.createElement(It,Es({},c,{"aria-current":g,className:E,ref:n,style:C,to:l}),typeof u=="function"?u({isActive:h,isPending:m}):u)});var bv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(bv||(bv={}));var xv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xv||(xv={}));function qx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ia(),l=wn(),u=Np(t,{relative:o});return S.useCallback(c=>{if($x(c,n)){c.preventDefault();let d=r!==void 0?r:fi(l)===fi(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Hw={exports:{}},Qx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Xx=Qx,Jx=Xx;function Vw(){}function Gw(){}Gw.resetWarningCache=Vw;var Zx=function(){function t(r,i,s,o,a,l){if(l!==Jx){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Gw,resetWarningCache:Vw};return n.PropTypes=n,n};Hw.exports=Zx();var Vr=Hw.exports;const R=Ku(Vr),Bt=S.createContext({width:0,height:0,currentPage:"/",setCurrentPage:()=>{},fullscreen:!1,setFullscreen:()=>{}}),eI="_back_1nuw4_1",dl={back:eI},pn="/assets/symbol-defs-c3f83eaf.svg",Ta=t=>{const{width:e}=S.useContext(Bt);let n=t.enableText?t.enableText:!0;return t.notLink?p.jsxs("button",{type:"button",className:t.className?`${dl.back} ${t.className}`:dl.back,onClick:t.onClick,children:[p.jsx("svg",{className:"icon icon-arrow_left",children:p.jsx("use",{xlinkHref:`${pn}#icon-arrow_left`})}),e>740&&n?p.jsx("span",{children:t.text?t.text:"Wróć"}):""]}):p.jsxs(It,{to:t.to?t.to:-1,className:t.className?`${dl.back} ${t.className}`:dl.back,children:[p.jsx("svg",{className:"icon icon-arrow_left",children:p.jsx("use",{xlinkHref:`${pn}#icon-arrow_left`})}),e>740&&n?p.jsx("span",{children:t.text?t.text:"Wróć"}):""]})};Ta.propTypes={to:R.string,text:R.string,enableText:R.bool,notLink:R.bool,className:R.string,onClick:R.func};const Iv=[{name:"Wprowadzenie",element:"Intro",address:"/wiki"},{name:"Modele lotu w Armie 3",address:"/wiki/modele-lotu",keywords:["Arma 3","standardowy","zaawansowany"],article:{header:"Article title",content:"<p>Example article</p>"}},{name:"Sterowanie - sprzęt",element:"Gear",address:"/wiki/sprzet",keywords:["joystick","pedały","kalibracja","ustawienia","sterowniki","akcesoria","trackir","facetrack","vr","multiple monitors"],article:{header:"Sprzęt do latania",content:""}},{name:"Sterowanie - ustawienia w grze",element:"Settings",address:"/wiki/ustawienia-gry",keywords:["Arma 3","gra","czułość","martwa strefa","martwej strefy","przypisanie","controls"]},{name:"Kokpit - instrumenty",element:"Instruments",address:"/wiki/przyrzady",keywords:["prędkościomierz","wariometr","wysokoścomierz","sztuczny horyzont","żyrokompas","zakrętomierze i chyłomierze","akcelerometry","zegary","cabir air gauges","wskażnik temperatury zewnętrznej OAT","Flap Position Indicators","Kąt natarcia - AoA","Coupled Devices","akcesoria"]},{name:"Podstawy lotu",element:"Basics",address:"/wiki/podstawy-lotu"},{name:"Podstawy komunikacji",element:"Comms",address:"/wiki/podstawy-komunikacji"},{name:"Śmigłowce ze względu na przeznaczenie",element:"HeliPurpose",address:"/wiki/heli-przeznaczenie"},{name:"Śmigłowce ze względu na rozmiar",address:"/wiki/heli-rozmiar",article:{header:"Helikoptery ze względu na rozmiar",content:"<h3>Lekkie śmigłowce</h3><p>Śmigłowce lekkie służą do zwiadu lub transportu piechoty. Te helikoptery mogą unosić niewielkich rozmiarów ładunek na zawiesiu. Śmigłowce lekkie zwykle mają mniej pancerza, co nadrabiają manewrowością i niewielkimi gabarytami. Śmigłowce lekkie są idealne dla początkujących pilotów do nauki podstawowych manewrów.</p>"}},{name:"Śmigłowce - manewrowanie",element:"HeliManevouers",address:"/wiki/heli-manewry"},{name:"Samoloty ze względu na przeznaczenie",element:"PlanesPurpose",address:"/wiki/samoloty-przeznaczenie"}],Na=S.createContext({isShown:!1,setIsShown:()=>{}}),tI="_search_2lhum_1",nI="_placeholder_2lhum_61",rI="_reset_2lhum_77",iI="_content_2lhum_91",sI="_back_2lhum_131",rr={search:tI,"search-container":"_search-container_2lhum_22",placeholder:nI,reset:rI,content:iI,back:sI,"search-placeholder":"_search-placeholder_2lhum_135"},oI="_input_1snh7_1",aI="_invalid_1snh7_9",jl={input:oI,invalid:aI},lI=()=>{const t=wn(),e=S.useRef(),n=S.useRef(),[r,i]=S.useState(""),[s,o]=S.useState(!0),[a,l]=S.useState(Iv),{setIsShown:u}=S.useContext(Na),{setCurrentPage:c}=S.useContext(Bt),d=S.useCallback(()=>Iv.filter(g=>{let E=!1;return Object.values(g).forEach(C=>{E||(C.toString().toLowerCase().includes(r.toLowerCase())?E=!0:E=!1)}),E}),[r]);S.useEffect(()=>{r.trim()!==""?(o(!1),n.current.innerText="Pasujące artykuły"):(n.current.innerText="Wszystkie artykuły",o(!0)),l(d())},[r,d]),S.useEffect(()=>{e.current.focus()},[]);const f=()=>{e.current.focus()},_=g=>{i(g.target.value)},v=g=>{i(""),g.target.firstElementChild.focus()},w=g=>{g.preventDefault()},k=()=>{i(""),u(!1),c(t.pathname)},y=()=>{i(""),u(!1)},h=g=>{g.keyCode===27&&(i(""),u(!1),c(t.pathname))},m=p.jsx("nav",{className:rr.search,onKeyDown:h,children:p.jsxs("div",{className:rr["search-container"],children:[p.jsx(Ta,{className:rr.back,enableText:!1,notLink:!0,onClick:k}),p.jsxs("form",{onReset:v,onSubmit:w,children:[p.jsx("input",{type:"search",ref:e,className:jl.input,id:"search",value:r,onInput:_}),s&&p.jsxs("div",{className:rr.placeholder,onClick:f,children:[p.jsx("svg",{className:"icon icon-magnifying_glass",children:p.jsx("use",{xlinkHref:`${pn}#icon-magnifying_glass`})})," ","Przeszukaj wiki"]}),!s&&p.jsx("button",{type:"reset",className:rr.reset,children:p.jsx("svg",{className:"icon icon-circle_xmark",children:p.jsx("use",{xlinkHref:`${pn}#icon-circle_xmark`})})})]}),p.jsxs("div",{className:rr.content,children:[p.jsx("h2",{ref:n,children:"Wszystkie artykuły"}),a.map((g,E)=>p.jsx(It,{to:g.address,onClick:y,children:g.name},E))]})]})});return Nw.createPortal(m,document.getElementById("overlays"))},Kw=S.memo(()=>{const{setIsShown:t}=S.useContext(Na),{setCurrentPage:e}=S.useContext(Bt),n=()=>{t(!0),e("/szukaj")};return p.jsx("button",{type:"button",onClick:n,className:rr["search-placeholder"],children:p.jsxs("div",{className:rr.placeholder,children:[p.jsx("svg",{className:"icon icon-magnifying_glass",children:p.jsx("use",{xlinkHref:`${pn}#icon-magnifying_glass`})})," ","Przeszukaj wiki"]})})});Kw.displayName="SearchPlaceholder";const uI="_menu_1akx4_1",cI="_icon_1akx4_141",dI="_highlight_1akx4_149",$r={menu:uI,icon:cI,highlight:dI};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw js(e)},js=function(t){return new Error("Firebase Database ("+Yw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(f=64)),r.push(n[c],n[d],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new hI;const f=s<<2|a>>4;if(r.push(f),u!==64){const _=a<<4&240|u>>2;if(r.push(_),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qw=function(t){const e=qw(t);return Rp.encodeByteArray(e,!0)},yu=function(t){return Qw(t).replace(/\./g,"")},_u=function(t){try{return Rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){return Xw(void 0,t)}function Xw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mI(n)||(t[n]=Xw(t[n],e[n]));return t}function mI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=()=>gI().__FIREBASE_DEFAULTS__,yI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_I=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_u(t[1]);return e&&JSON.parse(e)},Pp=()=>{try{return vI()||yI()||_I()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jw=t=>{var e,n;return(n=(e=Pp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wI=t=>{const e=Jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zw=()=>{var t;return(t=Pp())===null||t===void 0?void 0:t.config},e1=t=>{var e;return(e=Pp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yu(JSON.stringify(n)),yu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function kI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SI(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function n1(){return Yw.NODE_ADMIN===!0}function CI(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="FirebaseError";class Dr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xI,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pa.prototype.create)}}class Pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?II(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dr(i,a,r)}}function II(t,e){return t.replace(TI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){return JSON.parse(t)}function Be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=sa(_u(s[0])||""),n=sa(_u(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},NI=function(t){const e=r1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},RI=function(t){const e=r1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Eu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tv(s)&&Tv(o)){if(!Eu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function AI(t,e){const n=new OI(t,e);return n.subscribe.bind(n)}class OI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vd),i.error===void 0&&(i.error=vd),i.complete===void 0&&(i.complete=vd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vd(){}function hc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return t&&t._delegate?t._delegate:t}class hi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ra;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FI(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jI(t){return t===Gr?void 0:t}function FI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const UI={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},$I=ce.INFO,WI={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},BI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Op{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=BI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const HI=(t,e)=>e.some(n=>t instanceof n);let Nv,Rv;function VI(){return Nv||(Nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GI(){return Rv||(Rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i1=new WeakMap,Vf=new WeakMap,s1=new WeakMap,yd=new WeakMap,Lp=new WeakMap;function KI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&i1.set(n,t)}).catch(()=>{}),Lp.set(e,t),e}function YI(t){if(Vf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vf.set(t,e)}let Gf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||s1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qI(t){Gf=t(Gf)}function QI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_d(this),e,...n);return s1.set(r,e.sort?e.sort():[e]),Er(r)}:GI().includes(t)?function(...e){return t.apply(_d(this),e),Er(i1.get(this))}:function(...e){return Er(t.apply(_d(this),e))}}function XI(t){return typeof t=="function"?QI(t):(t instanceof IDBTransaction&&YI(t),HI(t,VI())?new Proxy(t,Gf):t)}function Er(t){if(t instanceof IDBRequest)return KI(t);if(yd.has(t))return yd.get(t);const e=XI(t);return e!==t&&(yd.set(t,e),Lp.set(e,t)),e}const _d=t=>Lp.get(t);function JI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Er(o.result),l.oldVersion,l.newVersion,Er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ZI=["get","getKey","getAll","getAllKeys","count"],eT=["put","add","delete","clear"],wd=new Map;function Pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wd.get(e))return wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wd.set(e,s),s}qI(t=>({...t,get:(e,n,r)=>Pv(e,n)||t.get(e,n,r),has:(e,n)=>!!Pv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kf="@firebase/app",Av="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Op("@firebase/app"),rT="@firebase/app-compat",iT="@firebase/analytics-compat",sT="@firebase/analytics",oT="@firebase/app-check-compat",aT="@firebase/app-check",lT="@firebase/auth",uT="@firebase/auth-compat",cT="@firebase/database",dT="@firebase/database-compat",fT="@firebase/functions",hT="@firebase/functions-compat",pT="@firebase/installations",mT="@firebase/installations-compat",gT="@firebase/messaging",vT="@firebase/messaging-compat",yT="@firebase/performance",_T="@firebase/performance-compat",wT="@firebase/remote-config",ET="@firebase/remote-config-compat",kT="@firebase/storage",ST="@firebase/storage-compat",CT="@firebase/firestore",bT="@firebase/firestore-compat",xT="firebase",IT="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="[DEFAULT]",TT={[Kf]:"fire-core",[rT]:"fire-core-compat",[sT]:"fire-analytics",[iT]:"fire-analytics-compat",[aT]:"fire-app-check",[oT]:"fire-app-check-compat",[lT]:"fire-auth",[uT]:"fire-auth-compat",[cT]:"fire-rtdb",[dT]:"fire-rtdb-compat",[fT]:"fire-fn",[hT]:"fire-fn-compat",[pT]:"fire-iid",[mT]:"fire-iid-compat",[gT]:"fire-fcm",[vT]:"fire-fcm-compat",[yT]:"fire-perf",[_T]:"fire-perf-compat",[wT]:"fire-rc",[ET]:"fire-rc-compat",[kT]:"fire-gcs",[ST]:"fire-gcs-compat",[CT]:"fire-fst",[bT]:"fire-fst-compat","fire-js":"fire-js",[xT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map,qf=new Map;function NT(t,e){try{t.container.addComponent(e)}catch(n){pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(qf.has(e))return pi.debug(`There were multiple attempts to register component ${e}.`),!1;qf.set(e,t);for(const n of ku.values())NT(n,t);return!0}function Dp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kr=new Pa("app","Firebase",RT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=IT;function o1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=Zw()),!n)throw kr.create("no-options");const s=ku.get(i);if(s){if(Eu(n,s.options)&&Eu(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new zI(i);for(const l of qf.values())o.addComponent(l);const a=new PT(n,r,o);return ku.set(i,a),a}function a1(t=Yf){const e=ku.get(t);if(!e&&t===Yf&&Zw())return o1();if(!e)throw kr.create("no-app",{appName:t});return e}function Sr(t,e,n){var r;let i=(r=TT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pi.warn(a.join(" "));return}Ss(new hi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="firebase-heartbeat-database",OT=1,oa="firebase-heartbeat-store";let Ed=null;function l1(){return Ed||(Ed=JI(AT,OT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oa)}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),Ed}async function LT(t){try{return await(await l1()).transaction(oa).objectStore(oa).get(u1(t))}catch(e){if(e instanceof Dr)pi.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pi.warn(n.message)}}}async function Ov(t,e){try{const r=(await l1()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,u1(t)),await r.done}catch(n){if(n instanceof Dr)pi.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pi.warn(r.message)}}}function u1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=1024,MT=30*24*60*60*1e3;class jT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=MT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lv(),{heartbeatsToSend:n,unsentEntries:r}=FT(this._heartbeatsCache.heartbeats),i=yu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lv(){return new Date().toISOString().substring(0,10)}function FT(t,e=DT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CI()?bI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dv(t){return yu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t){Ss(new hi("platform-logger",e=>new tT(e),"PRIVATE")),Ss(new hi("heartbeat",e=>new jT(e),"PRIVATE")),Sr(Kf,Av,t),Sr(Kf,Av,"esm2017"),Sr("fire-js","")}UT("");var $T="firebase",WT="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr($T,WT,"app");const BT={apiKey:"AIzaSyCx6s29WHuk-RrXJPdJYIbe3Hi4q13-WLc",authDomain:"ptap-articles.firebaseapp.com",databaseURL:"https://ptap-articles-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ptap-articles",storageBucket:"ptap-articles.appspot.com",messagingSenderId:"741718300001",appId:"1:741718300001:web:6e16244aa1f3f0760ce120"},Qf=o1(BT);function Mp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function c1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HT=c1,d1=new Pa("auth","Firebase",c1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Op("@firebase/auth");function VT(t,...e){Su.logLevel<=ce.WARN&&Su.warn(`Auth (${zs}): ${t}`,...e)}function Fl(t,...e){Su.logLevel<=ce.ERROR&&Su.error(`Auth (${zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw jp(t,...e)}function yn(t,...e){return jp(t,...e)}function f1(t,e,n){const r=Object.assign(Object.assign({},HT()),{[e]:n});return new Pa("auth","Firebase",r).create(e,{appName:t.name})}function GT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Wt(t,"argument-error"),f1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return d1.create(t,...e)}function G(t,e,...n){if(!t)throw jp(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fl(e),new Error(e)}function zn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KT(){return Mv()==="http:"||Mv()==="https:"}function Mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KT()||kI()||"connection"in navigator)?navigator.onLine:!0}function qT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ap()||t1()}get(){return YT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new Aa(3e4,6e4);function Us(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ii(t,e,n,r,i={}){return p1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),h1.fetch()(m1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function p1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QT),e);try{const i=new JT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw f1(t,c,u);Wt(t,c)}}catch(i){if(i instanceof Dr)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function Oa(t,e,n,r,i={}){const s=await Ii(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function m1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fp(t.config,i):`${t.config.apiScheme}://${i}`}class JT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),XT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,e){return Ii(t,"POST","/v1/accounts:delete",e)}async function eN(t,e){return Ii(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tN(t,e=!1){const n=ft(t),r=await n.getIdToken(e),i=zp(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oo(kd(i.auth_time)),issuedAtTime:Oo(kd(i.iat)),expirationTime:Oo(kd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kd(t){return Number(t)*1e3}function zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=_u(n);return i?JSON.parse(i):(Fl("Failed to decode base64 JWT payload"),null)}catch(i){return Fl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nN(t){const e=zp(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dr&&rN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Cs(t,eN(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aN(s.providerUserInfo):[],a=oN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new g1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function sN(t){const e=ft(t);await Cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aN(t){return t.map(e=>{var{providerId:n}=e,r=Mp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e){const n=await p1(t,{},async()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=m1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",h1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new aa;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new aa,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class si{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new g1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tN(this,e)}reload(){return sN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new si(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Cs(this,ZT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:g,isAnonymous:E,providerData:C,stsTokenManager:b}=n;G(m&&b,e,"internal-error");const I=aa.fromJSON(this.name,b);G(typeof m=="string",e,"internal-error"),Zn(d,e.name),Zn(f,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof E=="boolean",e,"internal-error"),Zn(_,e.name),Zn(v,e.name),Zn(w,e.name),Zn(k,e.name),Zn(y,e.name),Zn(h,e.name);const N=new si({uid:m,auth:e,email:f,emailVerified:g,displayName:d,isAnonymous:E,photoURL:v,phoneNumber:_,tenantId:w,stsTokenManager:I,createdAt:y,lastLoginAt:h});return C&&Array.isArray(C)&&(N.providerData=C.map(O=>Object.assign({},O))),k&&(N._redirectEventId=k),N}static async _fromIdTokenResponse(e,n,r=!1){const i=new aa;i.updateFromServerResponse(n);const s=new si({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new Map;function Rn(t){zn(t instanceof Function,"Expected a class definition");let e=jv.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v1.type="NONE";const Fv=v1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zl(this.userKey,i.apiKey,s),this.fullPersistenceKey=zl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?si._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Rn(Fv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(Fv);const o=zl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=si._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new os(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k1(e))return"Blackberry";if(S1(e))return"Webos";if(Up(e))return"Safari";if((e.includes("chrome/")||_1(e))&&!e.includes("edge/"))return"Chrome";if(E1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function y1(t=nt()){return/firefox\//i.test(t)}function Up(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _1(t=nt()){return/crios\//i.test(t)}function w1(t=nt()){return/iemobile/i.test(t)}function E1(t=nt()){return/android/i.test(t)}function k1(t=nt()){return/blackberry/i.test(t)}function S1(t=nt()){return/webos/i.test(t)}function mc(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uN(t=nt()){var e;return mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cN(){return SI()&&document.documentMode===10}function C1(t=nt()){return mc(t)||E1(t)||S1(t)||k1(t)||/windows phone/i.test(t)||w1(t)}function dN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t,e=[]){let n;switch(t){case"Browser":n=zv(nt());break;case"Worker":n=`${zv(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}async function x1(t,e){return Ii(t,"GET","/v2/recaptchaConfig",Us(t,e))}function Uv(t){return t!==void 0&&t.enterprise!==void 0}class I1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function T1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fN().appendChild(r)})}function hN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pN="https://www.google.com/recaptcha/enterprise.js?render=",mN="recaptcha-enterprise",gN="NO_RECAPTCHA";class N1{constructor(e){this.type=mN,this.auth=Ti(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{x1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new I1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Uv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(gN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Uv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}T1(pN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function bu(t,e,n,r=!1){const i=new N1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $v(this),this.idTokenSubscription=new $v(this),this.beforeStateQueue=new vN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ft(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}async initializeRecaptchaConfig(){const e=await x1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new I1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new N1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ti(t){return ft(t)}class $v{constructor(e){this.auth=e,this.observer=null,this.addObserver=AI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t,e){const n=Dp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Eu(s,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function wN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EN(t,e,n){const r=Ti(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=R1(e),{host:o,port:a}=kN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||SN()}function R1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kN(t){const e=R1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wv(o)}}}function Wv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function CN(t,e){return Ii(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sd(t,e){return Oa(t,"POST","/v1/accounts:signInWithPassword",Us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Us(t,e))}async function xN(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends $p{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new la(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new la(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await bu(e,r,"signInWithPassword");return Sd(e,i)}else return Sd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await bu(e,r,"signInWithPassword");return Sd(e,s)}else return Promise.reject(i)});case"emailLink":return bN(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return CN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xN(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return Oa(t,"POST","/v1/accounts:signInWithIdp",Us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="http://localhost";class mi extends $p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:IN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NN(t){const e=_o(wo(t)).link,n=e?_o(wo(e)).deep_link_id:null,r=_o(wo(t)).deep_link_id;return(r?_o(wo(r)).link:null)||r||n||e||t}class Wp{constructor(e){var n,r,i,s,o,a;const l=_o(wo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=TN((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=NN(e);try{return new Wp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return la._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wp.parseLink(n);return G(r,"argument-error"),la._fromEmailAndCode(e,r.code,r.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends Bp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends La{constructor(){super("facebook.com")}static credential(e){return mi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends La{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mi._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends La{constructor(){super("github.com")}static credential(e){return mi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends La{constructor(){super("twitter.com")}static credential(e,n){return mi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cd(t,e){return Oa(t,"POST","/v1/accounts:signUp",Us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await si._fromIdTokenResponse(e,r,i),o=Bv(r);return new gi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Bv(r);return new gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Bv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends Dr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xu(e,n,r,i)}}function P1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xu._fromErrorAndOperation(t,s,e,r):s})}async function RN(t,e,n=!1){const r=await Cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Cs(t,P1(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=zp(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(t,e,n=!1){const r="signIn",i=await P1(t,r,e),s=await gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AN(t,e){return A1(Ti(t),e)}async function ON(t,e,n){var r;const i=Ti(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await bu(i,s,"signUpPassword");o=Cd(i,u)}else o=Cd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await bu(i,s,"signUpPassword");return Cd(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await gi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function LN(t,e,n){return AN(ft(t),$s.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e){return Ii(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ft(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Cs(r,DN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function jN(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function FN(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function zN(t,e,n,r){return ft(t).onAuthStateChanged(e,n,r)}function UN(t){return ft(t).signOut()}const Iu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Iu,"1"),this.storage.removeItem(Iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(){const t=nt();return Up(t)||mc(t)}const WN=1e3,BN=10;class L1 extends O1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$N()&&dN(),this.fallbackToPolling=C1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L1.type="LOCAL";const HN=L1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1 extends O1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D1.type="SESSION";const M1=D1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await VN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Hp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function KN(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function YN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QN(){return j1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="firebaseLocalStorageDb",XN=1,Tu="firebaseLocalStorage",z1="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vc(t,e){return t.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function JN(){const t=indexedDB.deleteDatabase(F1);return new Da(t).toPromise()}function Jf(){const t=indexedDB.open(F1,XN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tu,{keyPath:z1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tu)?e(r):(r.close(),await JN(),e(await Jf()))})})}async function Hv(t,e,n){const r=vc(t,!0).put({[z1]:e,value:n});return new Da(r).toPromise()}async function ZN(t,e){const n=vc(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function Vv(t,e){const n=vc(t,!0).delete(e);return new Da(n).toPromise()}const eR=800,tR=3;class U1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(QN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YN(),!this.activeServiceWorker)return;this.sender=new GN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jf();return await Hv(e,Iu,"1"),await Vv(e,Iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vc(i,!1).getAll();return new Da(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U1.type="LOCAL";const nR=U1;new Aa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t,e){return e?Rn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp extends $p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rR(t){return A1(t.auth,new Vp(t),t.bypassAuthState)}function iR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),PN(n,new Vp(t),t.bypassAuthState)}async function sR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),RN(n,new Vp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rR;case"linkViaPopup":case"linkViaRedirect":return sR;case"reauthViaPopup":case"reauthViaRedirect":return iR;default:Wt(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=new Aa(2e3,1e4);async function aR(t,e,n){const r=Ti(t);GT(t,e,Bp);const i=$1(r,n);return new Zr(r,"signInViaPopup",e,i).executeNotNull()}class Zr extends W1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oR.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="pendingRedirect",Ul=new Map;class uR extends W1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const r=await cR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cR(t,e){const n=hR(e),r=fR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dR(t,e){Ul.set(t._key(),e)}function fR(t){return Rn(t._redirectPersistence)}function hR(t){return zl(lR,t.config.apiKey,t.name)}async function pR(t,e,n=!1){const r=Ti(t),i=$1(r,e),o=await new uR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=10*60*1e3;class gR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gv(e))}saveEventToCache(e){this.cachedEventUids.add(Gv(e)),this.lastProcessedEventTime=Date.now()}}function Gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e={}){return Ii(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wR=/^https?/;async function ER(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yR(t);for(const n of e)try{if(kR(n))return}catch{}Wt(t,"unauthorized-domain")}function kR(t){const e=Xf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wR.test(n))return!1;if(_R.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new Aa(3e4,6e4);function Kv(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CR(t){return new Promise((e,n)=>{var r,i,s;function o(){Kv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kv(),n(yn(t,"network-request-failed"))},timeout:SR.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const a=hN("iframefcb");return _n()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},T1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $l=null,e})}let $l=null;function bR(t){return $l=$l||CR(t),$l}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new Aa(5e3,15e3),IR="__/auth/iframe",TR="emulator/auth/iframe",NR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PR(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fp(e,TR):`https://${t.config.authDomain}/${IR}`,r={apiKey:e.apiKey,appName:t.name,v:zs},i=RR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fs(r).slice(1)}`}async function AR(t){const e=await bR(t),n=_n().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:PR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=_n().setTimeout(()=>{s(o)},xR.get());function l(){_n().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LR=500,DR=600,MR="_blank",jR="http://localhost";class Yv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FR(t,e,n,r=LR,i=DR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=nt().toLowerCase();n&&(a=_1(u)?MR:n),y1(u)&&(e=e||jR,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(uN(u)&&a!=="_self")return zR(e||"",a),new Yv(null);const d=window.open(e||"",a,c);G(d,t,"popup-blocked");try{d.focus()}catch{}return new Yv(d)}function zR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR="__/auth/handler",$R="emulator/auth/handler",WR=encodeURIComponent("fac");async function qv(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zs,eventId:i};if(e instanceof Bp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof La){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${WR}=${encodeURIComponent(l)}`:"";return`${BR(t)}?${Fs(a).slice(1)}${u}`}function BR({config:t}){return t.emulator?Fp(t,$R):`https://${t.authDomain}/${UR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="webStorageSupport";class HR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M1,this._completeRedirectFn=pR,this._overrideRedirectResult=dR}async _openPopup(e,n,r,i){var s;zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qv(e,n,r,Xf(),i);return FR(e,o,Hp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qv(e,n,r,Xf(),i);return KN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AR(e),r=new gR(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bd,{type:bd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bd];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ER(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C1()||Up()||mc()}}const VR=HR;var Qv="@firebase/auth",Xv="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YR(t){Ss(new hi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b1(t)},u=new yN(r,i,s,l);return wN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ss(new hi("auth-internal",e=>{const n=Ti(e.getProvider("auth").getImmediate());return(r=>new GR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sr(Qv,Xv,KR(t)),Sr(Qv,Xv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=5*60,QR=e1("authIdTokenMaxAge")||qR;let Jv=null;const XR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QR)return;const i=n==null?void 0:n.token;Jv!==i&&(Jv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JR(t=a1()){const e=Dp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_N(t,{popupRedirectResolver:VR,persistence:[nR,HN,M1]}),r=e1("authTokenSyncURL");if(r){const s=XR(r);FN(n,s,()=>s(n.currentUser)),jN(n,o=>s(o))}const i=Jw("auth");return i&&EN(n,`http://${i}`),n}YR("Browser");const xd={user:null,isLogged:!1,isCreateSuccess:!1},Ni=()=>{const t=JR(Qf),[e,n]=S.useState(null),[r,i]=S.useState(null);return S.useEffect(()=>{zN(t,u=>{u?(i(u),n(u.uid),sessionStorage.setItem("uid",u.uid)):(i(null),n(null),sessionStorage.removeItem("uid"))})},[t]),{uid:e,currentUser:r,createUser:async(u,c,d)=>{let f=xd;return await ON(t,u,c).then(_=>{f.isCreateSuccess=!0,f.user=_.user,MN(f.user,{displayName:d})}).catch(_=>{throw new Error(_.code)}),f},loginWithEmail:async(u,c)=>{let d=xd;return await LN(t,u,c).then(f=>{d.isLogged=!0,d.user=f.user}).catch(f=>{throw new Error(f.code)}),d},loginWithGoogle:async(u="")=>{let c=xd;const d=new xn;return u.length>=3&&d.setCustomParameters({login_hint:u}),await aR(t,d).then(f=>{c.isLogged=!0,c.user=f.user}).catch(f=>{throw new Error(f.code)}),c},logout:async()=>{UN(t).then(()=>"Nastąpiło wylogowanie").catch(u=>{throw new Error(u.code)})}}},hl=(t,e)=>{let n=t===e;return t!=="/"&&(t=t.split("/"),n=e.includes(t[1])),n},H1=S.memo(()=>{const{uid:t}=Ni(),{setIsShown:e}=S.useContext(Na),{currentPage:n,setCurrentPage:r}=S.useContext(Bt),i=[{name:"Główna",path:"/",icon:"icon-house",type:"link"},{name:"Szukaj",path:"/szukaj",icon:"icon-magnifying_glass",type:"button"},{name:"Wiki",path:"/wiki",icon:"icon-globe",type:"link"},{name:t?"Wyloguj się":"Zapisz się",path:t?"/wylogowanie":"/rejestracja",icon:t?"icon-signout":"icon-signup",type:"link"}],s=()=>{e(!1)},o=()=>{e(!0),r("/szukaj")},a=p.jsx("nav",{className:$r.menu,children:p.jsx("ul",{children:i.map(l=>p.jsx("li",{children:l.type==="link"?p.jsxs(Yr,{to:l.path,className:hl(n,l.path)?$r.highlight:"",onClick:()=>{s()},children:[hl(n,l.path)?p.jsx("svg",{className:`icon ${$r.icon} ${l.icon}_solid`,children:p.jsx("use",{xlinkHref:`${pn}#${l.icon}_solid`})}):p.jsx("svg",{className:`icon ${$r.icon} ${l.icon}`,children:p.jsx("use",{xlinkHref:`${pn}#${l.icon}`})}),l.name]}):p.jsxs("div",{onClick:o,to:l.path,className:hl(n,l.path)?$r.highlight:"",children:[hl(n,l.path)?p.jsx("svg",{className:`icon ${$r.icon} ${l.icon}_solid`,children:p.jsx("use",{xlinkHref:`${pn}#${l.icon}_solid`})}):p.jsx("svg",{className:`icon ${$r.icon} ${l.icon}`,children:p.jsx("use",{xlinkHref:`${pn}#${l.icon}`})}),l.name]})},l.name))})});return Nw.createPortal(a,document.getElementById("overlays"))});H1.displayName="MobileMenu";const V1="/assets/logo-3e93847a.webp",ZR="_nav_ohanc_1",eP={nav:ZR},G1=S.memo(()=>{const{uid:t}=Ni(),{width:e}=S.useContext(Bt);let n=e>=1130?"Pilot Training Arma Project":"PTAP",r=p.jsxs(p.Fragment,{children:[p.jsxs(It,{to:"/",title:"Przejdź na stronę główną",children:[p.jsx("img",{src:V1,alt:"logo"}),p.jsx("h2",{children:n})]}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(Yr,{to:"/",children:"Strona główna"})}),p.jsx("li",{children:p.jsx(Yr,{to:"/wiki",children:"Wiki"})}),t&&p.jsx("li",{children:p.jsx(Yr,{to:"/console",children:"Konsola"})}),p.jsx("li",{children:t?p.jsx(Yr,{to:"/wylogowanie",children:"Wyloguj się"}):p.jsx(Yr,{to:"/rejestracja",children:"Zapisz się"})}),p.jsx("li",{children:p.jsx(Kw,{})})]})]});return p.jsx(p.Fragment,{children:e>875?p.jsx("nav",{className:eP.nav,children:r}):p.jsx(H1,{})})});G1.displayName="Nav";const tP="_footer_3cly8_1",nP="_bottom_3cly8_35",Id={footer:tP,bottom:nP},Mr=S.memo(()=>{const[t,e]=S.useState(0),{width:n}=S.useContext(Bt);return S.useEffect(()=>{document.querySelector("nav")&&n<=740?e(document.querySelector("nav").clientHeight):e(0)},[n]),p.jsxs("footer",{className:Id.footer,style:{marginBottom:`${t}px`},children:[p.jsx("div",{className:Id.top,children:p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(It,{to:"/sign-up",children:"Zapisz się do projektu"})}),p.jsx("li",{children:p.jsx(It,{to:"/feedback",children:"Zgłoś błąd na stronie"})}),p.jsx("li",{children:p.jsx(It,{to:"/console",children:"Konsola administracyjna"})})]})}),p.jsx("div",{className:Id.bottom,children:p.jsx("p",{children:"PTAP 2018-2023 © Wszelkie prawa zastrzeżone"})})]})});Mr.displayName="Fotter";const rP=()=>{let t;const e=[],n={vendor:void 0,id:void 0,src:void 0,thumbnail:void 0,title:void 0,initialized:!1,y:void 0,debounce:250,lazyload:!0,autoplay:!0,initinview:!1,onLoad:v=>{},onAppend:v=>{},onThumbnailLoad:v=>{}},r={regex:{youtube_nocookie:/(?:youtube-nocookie\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=)))([a-zA-Z0-9_-]{6,11})/,youtube:/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,vimeo:/vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/},condition:{youtube:v=>v&&v[1].length==11?v[1]:!1,youtube_nocookie:v=>v&&v[1].length==11?v[1]:!1,vimeo:v=>v&&v[1].length===9||v[1].length===8?v[1]:!1},src:{youtube:v=>`https://www.youtube.com/embed/${v.id}/?autoplay=${v.autoplay?"1":"0"}&${v.query}`,youtube_nocookie:v=>`https://www.youtube-nocookie.com/embed/${v.id}/?autoplay=${v.autoplay?"1":"0"}&${v.query}`,vimeo:v=>`https://player.vimeo.com/video/${v.id}/?autoplay=${v.autoplay?"1":"0"}&${v.query}`},endpoint:v=>`https://noembed.com/embed?url=${v.src}`,response:{title:v=>v.title,thumbnail:v=>v.thumbnail_url}};function i(v,...w){if(t=Object.assign({},n,w[0]),typeof v=="string"){const k=document.querySelectorAll(v);for(let y=0;y<k.length;y++)s(k[y])}else if(typeof v.length>"u")s(v);else for(let k=0;k<v.length;k++)s(v[k]);t.lazyload&&d()}function s(v){if(!(v instanceof HTMLElement)||v.classList.contains("lazyframe--loaded"))return;const w={el:v,settings:o(v)};w.el.addEventListener("click",()=>{w.el.appendChild(w.iframe);const k=v.querySelectorAll("iframe");w.settings.onAppend.call(this,k[0])}),t.lazyload?f(w):u(w,!!w.settings.thumbnail)}function o(v){const w=Array.prototype.slice.apply(v.attributes).filter(y=>y.value!=="").reduce((y,h)=>{let m=h.name.indexOf("data-")===0?h.name.split("data-")[1]:h.name;return y[m]=h.value,y},{}),k=Object.assign({},t,w,{y:v.offsetTop,originalSrc:w.src,query:a(w.src)});if(k.vendor){const y=k.src.match(r.regex[k.vendor]);k.id=r.condition[k.vendor](y)}return k}function a(v){const w=v.split("?");return w[1]?w[1]:null}function l(v){return v.vendor?!v.title||!v.thumbnail:!1}function u(v){l(v.settings)?c(v,(w,k)=>{if(w)return;const y=k[0],h=k[1];if(h.settings.title||(h.settings.title=r.response.title(y)),!h.settings.thumbnail){const m=r.response.thumbnail(y);h.settings.thumbnail=m,v.settings.onThumbnailLoad.call(this,m)}f(h,!0)}):f(v,!0)}function c(v,w){const k=r.endpoint(v.settings),y=new XMLHttpRequest;y.open("GET",k,!0),y.onload=function(){if(y.status>=200&&y.status<400){const h=JSON.parse(y.responseText);w(null,[h,v])}else w(!0)},y.onerror=function(){w(!0)},y.send()}function d(){const v=window.innerHeight;let w=e.length;const k=(E,C)=>{E.settings.initialized=!0,E.el.classList.add("lazyframe--loaded"),w--,u(E),E.settings.initinview&&E.el.click(),E.settings.onLoad.call(this,E)};e.filter(E=>E.settings.y<v).forEach(k);const y=g(()=>{m=h<window.pageYOffset,h=window.pageYOffset,m&&e.filter(E=>E.settings.y<v+h&&E.settings.initialized===!1).forEach(k),w===0&&window.removeEventListener("scroll",y,!1)},t.debounce);let h=0,m=!1;window.addEventListener("scroll",y,!1);function g(E,C,b){let I;return function(){let N=this,O=arguments,$=function(){I=null,b||E.apply(N,O)},Q=b&&!I;clearTimeout(I),I=setTimeout($,C),Q&&E.apply(N,O)}}}function f(v,w){if(v.iframe=_(v.settings),v.settings.thumbnail&&w&&(v.el.style.backgroundImage=`url(${v.settings.thumbnail})`),v.settings.title&&v.el.children.length===0){const k=document.createDocumentFragment(),y=document.createElement("span");y.className="lazyframe__title",y.innerHTML=v.settings.title,k.appendChild(y),v.el.appendChild(k)}t.lazyload||(v.el.classList.add("lazyframe--loaded"),v.settings.onLoad.call(this,v),e.push(v)),v.settings.initialized||e.push(v)}function _(v){const w=document.createDocumentFragment(),k=document.createElement("iframe");return v.vendor&&(v.src=r.src[v.vendor](v)),k.setAttribute("id",`lazyframe-${v.id}`),k.setAttribute("src",v.src),k.setAttribute("frameborder",0),k.setAttribute("allowfullscreen",""),v.autoplay&&(k.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),w.appendChild(k),w}return i},iP=rP(),Zf=t=>{const e=S.useCallback(()=>{},[]);return document.addEventListener("touchstart",e,{passive:!0}),iP(".lazyframe"),p.jsxs("div",{className:t.video,children:[p.jsx("p",{children:t.header?t.header:""}),p.jsx("iframe",{className:`${t.className?t.className:""} lazyframe`,width:t.width?t.width:"560",height:t.height?t.height:"315",src:t.src?t.src:"",title:t.title?t.title:"YouTube video player",allow:t.allow?t.allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})};Zf.propTypes={video:R.string.isRequired,header:R.string,className:R.string,width:R.string,height:R.string,src:R.string,title:R.string,allow:R.bool};const sP="_button_1xu07_1",oP="_highlight_1xu07_19",Nu={button:sP,"button-link":"_button-link_1xu07_2",highlight:oP},vi=({to:t,className:e,highlighted:n,onClick:r,children:i})=>(n==null&&(n=!0),p.jsx(It,{to:t,className:`${Nu["button-link"]} ${e||""} ${n?Nu.highlight:""}`,onClick:r||(()=>{}),children:i}));vi.propTypes={to:R.string.isRequired,className:R.string,highlighted:R.bool,onClick:R.func,children:R.any};const en=({to:t,className:e,highlighted:n,type:r,onClick:i,children:s})=>{const o=Ia(),a=()=>{o(t,{replace:!0})};return n==null&&(n=!0),p.jsx("button",{type:r||"button",onClick:()=>{t&&a(),i&&i()},className:`${Nu.button} ${e||""} ${n?Nu.highlight:""}`,children:s})};en.propTypes={to:R.string,className:R.string,highlighted:R.bool,type:R.string,onClick:R.func,children:R.any};const aP="/assets/autorotacja-c59c514a.webp",lP="_iframe_ywtud_20",uP="_video_ywtud_28",uo={"index-banner":"_index-banner_ywtud_1",iframe:lP,video:uP},cP=()=>{const{width:t}=S.useContext(Bt);return p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx("section",{className:`section ${uo["index-banner"]}`,children:p.jsxs("header",{children:[t<=740?p.jsx("img",{src:V1,alt:"Logo",width:"100",height:"100"}):"",p.jsx("h1",{children:"PTAP"}),p.jsx("h2",{children:"Pilot Training Arma Project"}),p.jsx("p",{children:"PTAP jest to projekt utworzony przez BowiX'a i ArrowX'a w grupie ARHD, którego celem było zapewnienie odpowiednich warunków szkoleniowych do nauki pilotażu."}),p.jsx("p",{children:"Obecnie strona służy do zapoznania z ogólnymi zagadnieniami lotnictwa w Armie 3. Na tej stronie dowiesz się jak przygotować się do lotu jak i znajdziesz pare bardziej zaawansowanych zagadnień."})]})}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{children:"Autorotacja"}),p.jsx("p",{children:"Manewr wykorzystywany do awaryjnego lądowania. Dzięki energii z powietrza, łopaty wirnika głównego pobudzane są do ruchu co pozwala na opanowanie maszyny i bezpieczne posadzenie jej na ziemię."}),p.jsxs("figure",{children:[p.jsx("img",{src:aP,alt:"Zdjęcie ukazujące przepływ powietrza podczas autorotacji",width:"332",height:"187"}),p.jsx("figcaption",{children:"Przepływ powietrza podczas autorotacji"})]})]}),p.jsxs("section",{className:"section",children:[p.jsx(Zf,{video:uo.video,src:"https://www.youtube.com/embed/v8pn1f3ijLI",className:uo.iframe,header:"Manewry Little Birdem - autorotacja"}),p.jsx(Zf,{video:uo.video,src:"https://www.youtube.com/embed/videoseries?list=PLsQ6ua1LSZQwRoOCiVa-0d1eL9wk0aVGj",className:uo.iframe,header:"MH-6/AH-6 Little Bird - lądowania"})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{children:"Wiki"}),p.jsx("h3",{children:"Zobacz więcej artykułów na wiki"}),p.jsx(vi,{to:"/wiki",children:"Przejdź do wiki"})]})]}),p.jsx(Mr,{})]})},dP=()=>{const t=wn(),e=/\/wiki\/.*/i.test(t.pathname);return p.jsxs(p.Fragment,{children:[e?p.jsx(Ta,{}):"",p.jsx("main",{children:p.jsx("section",{className:"section",children:p.jsx(Ww,{})})}),p.jsx(Mr,{})]})},Zv="@firebase/database",ey="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K1="";function fP(t){K1=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:sa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return En(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hP(e)}}catch{}return new pP},ei=Y1("localStorage"),eh=Y1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Op("@firebase/database"),mP=function(){let t=1;return function(){return t++}}(),q1=function(t){const e=DI(t),n=new PI;n.update(e);const r=n.digest();return Rp.encodeByteArray(r)},Ma=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ma.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let oi=null,ty=!0;const gP=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ls.logLevel=ce.VERBOSE,oi=ls.log.bind(ls),e&&eh.set("logging_enabled",!0)):typeof t=="function"?oi=t:(oi=null,eh.remove("logging_enabled"))},Ke=function(...t){if(ty===!0&&(ty=!1,oi===null&&eh.get("logging_enabled")===!0&&gP(!0)),oi){const e=Ma.apply(null,t);oi(e)}},ja=function(t){return function(...e){Ke(t,...e)}},th=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ma(...t);ls.error(e)},Un=function(...t){const e=`FIREBASE FATAL ERROR: ${Ma(...t)}`;throw ls.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+Ma(...t);ls.warn(e)},vP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bs="[MIN_NAME]",yi="[MAX_NAME]",Ri=function(t,e){if(t===e)return 0;if(t===bs||e===yi)return-1;if(e===bs||t===yi)return 1;{const n=ny(t),r=ny(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},_P=function(t,e){return t===e?0:t<e?-1:1},co=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Be(e))},Kp=function(t){if(typeof t!="object"||t===null)return Be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Be(e[r]),n+=":",n+=Kp(t[e[r]]);return n+="}",n},Q1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const X1=function(t){D(!Gp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},wP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const SP=new RegExp("^-?(0*)\\d{1,10}$"),CP=-2147483648,bP=2147483647,ny=function(t){if(SP.test(t)){const e=Number(t);if(e>=CP&&e<=bP)return e}return null},Ws=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},xP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Lo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class us{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}us.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="5",J1="v",Z1="s",eE="r",tE="f",nE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rE="ls",iE="p",nh="ac",sE="websocket",oE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function lE(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===sE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===oE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NP(t)&&(n.ns=t.namespace);const i=[];return Qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.counters_={}}incrementCounter(e,n=1){En(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td={},Nd={};function qp(t){const e=t.toString();return Td[e]||(Td[e]=new RP),Td[e]}function PP(t,e){const n=t.toString();return Nd[n]||(Nd[n]=e()),Nd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ws(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="start",OP="close",LP="pLPCommand",DP="pRTLPCB",uE="id",cE="pw",dE="ser",MP="cb",jP="seg",FP="ts",zP="d",UP="dframe",fE=1870,hE=30,$P=fE-hE,WP=25e3,BP=3e4;class qi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ja(e),this.stats_=qp(n),this.urlFn=l=>(this.appCheckToken&&(l[nh]=this.appCheckToken),lE(n,oE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BP)),yP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ry)this.id=a,this.password=l;else if(o===OP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[ry]="t",r[dE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[MP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[J1]=Yp,this.transportSessionId&&(r[Z1]=this.transportSessionId),this.lastSessionId&&(r[rE]=this.lastSessionId),this.applicationId&&(r[iE]=this.applicationId),this.appCheckToken&&(r[nh]=this.appCheckToken),typeof location<"u"&&location.hostname&&nE.test(location.hostname)&&(r[eE]=tE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qi.forceAllow_=!0}static forceDisallow(){qi.forceDisallow_=!0}static isAvailable(){return qi.forceAllow_?!0:!qi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wP()&&!EP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qw(n),i=Q1(r,$P);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[UP]="t",r[uE]=e,r[cE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mP(),window[LP+this.uniqueCallbackIdentifier]=e,window[DP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ke("frame writing exception"),a.stack&&Ke(a.stack),Ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uE]=this.myID,e[cE]=this.myPW,e[dE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hE+r.length<=fE;){const o=this.pendingSegs.shift();r=r+"&"+jP+i+"="+o.seg+"&"+FP+i+"="+o.ts+"&"+zP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(WP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=16384,VP=45e3;let Ru=null;typeof MozWebSocket<"u"?Ru=MozWebSocket:typeof WebSocket<"u"&&(Ru=WebSocket);class Jt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ja(this.connId),this.stats_=qp(n),this.connURL=Jt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[J1]=Yp,typeof location<"u"&&location.hostname&&nE.test(location.hostname)&&(o[eE]=tE),n&&(o[Z1]=n),r&&(o[rE]=r),i&&(o[nh]=i),s&&(o[iE]=s),lE(e,sE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ei.set("previous_websocket_failure",!0);try{let r;n1(),this.mySock=new Ru(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ru!==null&&!Jt.forceDisallow_}static previouslyFailed(){return ei.isInMemoryStorage||ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=sa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Q1(n,HP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2;Jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qi,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Jt&&Jt.isAvailable();let r=n&&!Jt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Jt];else{const i=this.transports_=[];for(const s of ua.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ua.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ua.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=6e4,KP=5e3,YP=10*1024,qP=100*1024,Rd="t",iy="d",QP="s",sy="r",XP="e",oy="o",ay="a",ly="n",uy="p",JP="h";class ZP{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ja("c:"+this.id+":"),this.transportManager_=new ua(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Lo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rd in e){const n=e[Rd];n===ay?this.upgradeIfSecondaryHealthy_():n===sy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===oy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=co("t",e),r=co("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:uy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ay,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ly,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=co("t",e),r=co("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=co(Rd,e);if(iy in e){const r=e[iy];if(n===JP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ly){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===QP?this.onConnectionShutdown_(r):n===sy?this.onReset_(r):n===XP?th("Server Error: "+r):n===oy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):th("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yp!==r&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Lo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:uy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends mE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ap()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pu}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=32,dy=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new de("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ir(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function Xp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function e2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ca(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function vt(t,e){const n=J(t),r=J(e);if(n===null)return e;if(n===r)return vt(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function t2(t,e){const n=ca(t,0),r=ca(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ri(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Jp(t,e){if(Ir(t)!==Ir(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ir(t)>Ir(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class n2{constructor(e,n){this.errorPrefix_=n,this.parts_=ca(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=pc(this.parts_[r]);vE(this)}}function r2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=pc(e),vE(t)}function i2(t){const e=t.parts_.pop();t.byteLength_-=pc(e),t.parts_.length>0&&(t.byteLength_-=1)}function vE(t){if(t.byteLength_>dy)throw new Error(t.errorPrefix_+"has a key path longer than "+dy+" bytes ("+t.byteLength_+").");if(t.parts_.length>cy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+cy+") or object contains a cycle "+Kr(t))}function Kr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp extends mE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zp}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=1e3,s2=60*5*1e3,fy=30*1e3,o2=1.3,a2=3e4,l2="server_kill",hy=3;class Ln extends pE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ln.nextPersistentConnectionId_++,this.log_=ja("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fo,this.maxReconnectDelay_=s2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!n1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Be(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ra,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Ln.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&En(e,"w")){const r=ks(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||RI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=NI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):th("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>a2&&(this.reconnectDelay_=fo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*o2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ln.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ke("getToken() completed but was canceled"):(Ke("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new ZP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{ut(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(l2)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ut(d),l())}}}interrupt(e){Ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hf(this.interruptReasons_)&&(this.reconnectDelay_=fo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Kp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hy&&(this.reconnectDelay_=fy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+K1.replace(/\./g,"-")]=1,Ap()?e["framework.cordova"]=1:t1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pu.getInstance().currentlyOnline();return Hf(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0;Ln.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Z(bs,e),i=new Z(bs,n);return this.compare(r,i)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;class yE extends yc{static get __EMPTY_NODE(){return pl}static set __EMPTY_NODE(e){pl=e}compare(e,n){return Ri(e.name,n.name)}isDefinedOn(e){throw js("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(yi,pl)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,pl)}toString(){return".key"}}const cs=new yE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??yt.EMPTY_NODE,this.right=s??yt.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class u2{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ml(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ml(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ml(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ml(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new u2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t,e){return Ri(t.name,e.name)}function em(t,e){return Ri(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rh;function d2(t){rh=t}const _E=function(t){return typeof t=="number"?"number:"+X1(t):"string:"+t},wE=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&En(e,".sv"),"Priority must be a string or number.")}else D(t===rh||t.isEmpty(),"priority of unexpected type.");D(t===rh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let py;class ze{constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wE(this.priorityNode_)}static set __childrenNodeConstructor(e){py=e}static get __childrenNodeConstructor(){return py}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:J(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=J(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_E(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=X1(this.value_):e+=this.value_,this.lazyHash_=q1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ze.VALUE_TYPE_ORDER.indexOf(n),s=ze.VALUE_TYPE_ORDER.indexOf(r);return D(i>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EE,kE;function f2(t){EE=t}function h2(t){kE=t}class p2 extends yc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ri(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(yi,new ze("[PRIORITY-POST]",kE))}makePost(e,n){const r=EE(e);return new Z(n,new ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const Te=new p2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=Math.log(2);class g2{constructor(e){const n=s=>parseInt(Math.log(s)/m2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Au=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new $e(f,d.node,$e.BLACK,null,null);{const _=parseInt(c/2,10)+l,v=i(l,_),w=i(_+1,u);return d=t[_],f=n?n(d):d,new $e(f,d.node,$e.BLACK,v,w)}},s=function(l){let u=null,c=null,d=t.length;const f=function(v,w){const k=d-v,y=d;d-=v;const h=i(k+1,y),m=t[k],g=n?n(m):m;_(new $e(g,m.node,w,null,h))},_=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(v+1));w?f(k,$e.BLACK):(f(k,$e.BLACK),f(k,$e.RED))}return c},o=new g2(t.length),a=s(o);return new yt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;const Oi={};class Pn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(Oi&&Te,"ChildrenNode.ts has not been loaded"),Pd=Pd||new Pn({".priority":Oi},{".priority":Te}),Pd}get(e){const n=ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return En(this.indexSet_,e.toString())}addIndex(e,n){D(e!==cs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Au(r,e.getCompare()):a=Oi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Pn(c,u)}addToIndexes(e,n){const r=wu(this.indexes_,(i,s)=>{const o=ks(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),i===Oi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Au(a,o.getCompare())}else return Oi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new Pn(r,this.indexSet_)}removeFromIndexes(e,n){const r=wu(this.indexes_,i=>{if(i===Oi)return i;{const s=n.get(e.name);return s?i.remove(new Z(e.name,s)):i}});return new Pn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;class V{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&wE(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ho||(ho=new V(new yt(em),null,Pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ho}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ho:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ho:this.priorityNode_;return new V(i,o,s)}}updateChild(e,n){const r=J(e);if(r===null)return n;{D(J(e)!==".priority"||Ir(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(pe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),r++,s&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_E(this.getPriority().val())+":"),this.forEachChild(Te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":q1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fa?-1:0}withIndex(e){if(e===cs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===cs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Te),i=n.getIterator(Te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cs?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class v2 extends V{constructor(){super(new yt(em),V.EMPTY_NODE,Pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Fa=new v2;Object.defineProperties(Z,{MIN:{value:new Z(bs,V.EMPTY_NODE)},MAX:{value:new Z(yi,Fa)}});yE.__EMPTY_NODE=V.EMPTY_NODE;ze.__childrenNodeConstructor=V;d2(Fa);h2(Fa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=!0;function We(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ze(n,We(e))}if(!(t instanceof Array)&&y2){const n=[];let r=!1;if(Qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=We(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return V.EMPTY_NODE;const s=Au(n,c2,o=>o.name,em);if(r){const o=Au(n,Te.getCompare());return new V(s,We(e),new Pn({".priority":o},{".priority":Te}))}else return new V(s,We(e),Pn.Default)}else{let n=V.EMPTY_NODE;return Qe(t,(r,i)=>{if(En(t,r)&&r.substring(0,1)!=="."){const s=We(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(We(e))}}f2(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2 extends yc{constructor(e){super(),this.indexPath_=e,D(!ee(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ri(e.name,n.name):s}makePost(e,n){const r=We(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,r);return new Z(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Fa);return new Z(yi,e)}toString(){return ca(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2 extends yc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ri(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const r=We(e);return new Z(n,r)}toString(){return".value"}}const E2=new w2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t){return{type:"value",snapshotNode:t}}function xs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function da(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function k2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(da(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(xs(n,r)):o.trackChildChange(fa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,s)=>{n.hasChild(i)||r.trackChildChange(da(i,s))}),n.isLeafNode()||n.forEachChild(Te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(fa(i,s,o))}else r.trackChildChange(xs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.indexedFilter_=new tm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ha.getStartPost_(e),this.endPost_=ha.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Z(n,r))||(r=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const s=this;return n.forEachChild(Te,(o,a)=>{s.matches(new Z(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ha(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Z(n,r))||(r=V.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new Z(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(fa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(da(n,d));const w=a.updateImmediateChild(n,V.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(xs(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(da(u.name,u.node)),s.trackChildChange(xs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bs}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new nm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function C2(t){return t.loadsAllData()?new tm(t.getIndex()):t.hasLimit()?new S2(t):new ha(t)}function my(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===E2?n="$value":t.index_===cs?n="$key":(D(t.index_ instanceof _2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends pE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ja("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ou.getListenId_(e,r),a={};this.listens_[o]=a;const l=my(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ks(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ou.getListenId_(e,n);delete this.listens_[r]}get(e){const n=my(e._queryParams),r=e._path.toString(),i=new Ra;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=sa(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(){return{value:null,children:new Map}}function CE(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=J(e);t.children.has(r)||t.children.set(r,Lu());const i=t.children.get(r);e=pe(e),CE(i,e,n)}}function ih(t,e,n){t.value!==null?n(e,t.value):x2(t,(r,i)=>{const s=new de(e.toString()+"/"+r);ih(i,s,n)})}function x2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=10*1e3,T2=30*1e3,N2=5*60*1e3;class R2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new I2(e);const r=vy+(T2-vy)*Math.random();Lo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Qe(e,(i,s)=>{s>0&&En(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Lo(this.reportStats_.bind(this),Math.floor(Math.random()*2*N2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function rm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function im(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=tn.ACK_USER_WRITE,this.source=rm()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new Du(se(),n,this.revert)}}else return D(J(this.path)===e,"operationForChild called for unrelated child."),new Du(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.source=e,this.path=n,this.type=tn.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new pa(this.source,se()):new pa(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=tn.OVERWRITE}operationForChild(e){return ee(this.path)?new _i(this.source,se(),this.snap.getImmediateChild(e)):new _i(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=tn.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new _i(this.source,se(),n.value):new Is(this.source,se(),n)}else return D(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Is(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function A2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(k2(o.childName,o.snapshotNode))}),po(t,i,"child_removed",e,r,n),po(t,i,"child_added",e,r,n),po(t,i,"child_moved",s,r,n),po(t,i,"child_changed",e,r,n),po(t,i,"value",e,r,n),i}function po(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>L2(t,a,l)),o.forEach(a=>{const l=O2(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function O2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function L2(t,e,n){if(e.childName==null||n.childName==null)throw js("Should only compare child_ events.");const r=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e){return{eventCache:t,serverCache:e}}function Do(t,e,n,r){return _c(new wi(e,n,r),t.serverCache)}function bE(t,e,n,r){return _c(t.eventCache,new wi(e,n,r))}function sh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ei(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad;const D2=()=>(Ad||(Ad=new yt(_P)),Ad);class he{constructor(e,n=D2()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return Qe(e,(r,i)=>{n=n.set(new de(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(ee(e))return null;{const r=J(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(pe(e),n);return s!=null?{path:Ie(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=J(e),r=this.children.get(n);return r!==null?r.subtree(pe(e)):new he(null)}}set(e,n){if(ee(e))return new he(n,this.children);{const r=J(e),s=(this.children.get(r)||new he(null)).set(pe(e),n),o=this.children.insert(r,s);return new he(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=J(e),r=this.children.get(n);if(r){const i=r.remove(pe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new he(null):new he(this.value,s)}else return this}}get(e){if(ee(e))return this.value;{const n=J(e),r=this.children.get(n);return r?r.get(pe(e)):null}}setTree(e,n){if(ee(e))return n;{const r=J(e),s=(this.children.get(r)||new he(null)).setTree(pe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new he(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ee(e))return null;{const s=J(e),o=this.children.get(s);return o?o.findOnPath_(pe(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,r){if(ee(e))return this;{this.value&&r(n,this.value);const i=J(e),s=this.children.get(i);return s?s.foreachOnPath_(pe(e),Ie(n,i),r):new he(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new he(null))}}function Mo(t,e,n){if(ee(e))return new an(new he(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=vt(i,e);return s=s.updateChild(o,n),new an(t.writeTree_.set(i,s))}else{const i=new he(n),s=t.writeTree_.setTree(e,i);return new an(s)}}}function oh(t,e,n){let r=t;return Qe(n,(i,s)=>{r=Mo(r,Ie(e,i),s)}),r}function yy(t,e){if(ee(e))return an.empty();{const n=t.writeTree_.setTree(e,new he(null));return new an(n)}}function ah(t,e){return Pi(t,e)!=null}function Pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(vt(n.path,e)):null}function _y(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(r,i)=>{e.push(new Z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Z(r,i.value))}),e}function Cr(t,e){if(ee(e))return t;{const n=Pi(t,e);return n!=null?new an(new he(n)):new an(t.writeTree_.subtree(e))}}function lh(t){return t.writeTree_.isEmpty()}function Ts(t,e){return xE(se(),t.writeTree_,e)}function xE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=xE(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t,e){return RE(e,t)}function M2(t,e,n,r,i){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Mo(t.visibleWrites,e,n)),t.lastWriteId=r}function j2(t,e,n,r){D(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=oh(t.visibleWrites,e,n),t.lastWriteId=r}function F2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function z2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&U2(a,r.path)?i=!1:jt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return $2(t),!0;if(r.snap)t.visibleWrites=yy(t.visibleWrites,r.path);else{const a=r.children;Qe(a,l=>{t.visibleWrites=yy(t.visibleWrites,Ie(r.path,l))})}return!0}else return!1}function U2(t,e){if(t.snap)return jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jt(Ie(t.path,n),e))return!0;return!1}function $2(t){t.visibleWrites=IE(t.allWrites,W2,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function W2(t){return t.visible}function IE(t,e,n){let r=an.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)jt(n,o)?(a=vt(n,o),r=Mo(r,a,s.snap)):jt(o,n)&&(a=vt(o,n),r=Mo(r,se(),s.snap.getChild(a)));else if(s.children){if(jt(n,o))a=vt(n,o),r=oh(r,a,s.children);else if(jt(o,n))if(a=vt(o,n),ee(a))r=oh(r,se(),s.children);else{const l=ks(s.children,J(a));if(l){const u=l.getChild(pe(a));r=Mo(r,se(),u)}}}else throw js("WriteRecord should have .snap or .children")}}return r}function TE(t,e,n,r,i){if(!r&&!i){const s=Pi(t.visibleWrites,e);if(s!=null)return s;{const o=Cr(t.visibleWrites,e);if(lh(o))return n;if(n==null&&!ah(o,se()))return null;{const a=n||V.EMPTY_NODE;return Ts(o,a)}}}else{const s=Cr(t.visibleWrites,e);if(!i&&lh(s))return n;if(!i&&n==null&&!ah(s,se()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(jt(u.path,e)||jt(e,u.path))},a=IE(t.allWrites,o,e),l=n||V.EMPTY_NODE;return Ts(a,l)}}}function B2(t,e,n){let r=V.EMPTY_NODE;const i=Pi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Cr(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=Ts(Cr(s,new de(o)),a);r=r.updateImmediateChild(o,l)}),_y(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Cr(t.visibleWrites,e);return _y(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function H2(t,e,n,r,i){D(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if(ah(t.visibleWrites,s))return null;{const o=Cr(t.visibleWrites,s);return lh(o)?i.getChild(n):Ts(o,i.getChild(n))}}function V2(t,e,n,r){const i=Ie(e,n),s=Pi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Cr(t.visibleWrites,i);return Ts(o,r.getNode().getImmediateChild(n))}else return null}function G2(t,e){return Pi(t.visibleWrites,e)}function K2(t,e,n,r,i,s,o){let a;const l=Cr(t.visibleWrites,e),u=Pi(l,se());if(u!=null)a=u;else if(n!=null)a=Ts(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=f.getNext();return c}else return[]}function Y2(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function Mu(t,e,n,r){return TE(t.writeTree,t.treePath,e,n,r)}function am(t,e){return B2(t.writeTree,t.treePath,e)}function wy(t,e,n,r){return H2(t.writeTree,t.treePath,e,n,r)}function ju(t,e){return G2(t.writeTree,Ie(t.treePath,e))}function q2(t,e,n,r,i,s){return K2(t.writeTree,t.treePath,e,n,r,i,s)}function lm(t,e,n){return V2(t.writeTree,t.treePath,e,n)}function NE(t,e){return RE(Ie(t.treePath,e),t.writeTree)}function RE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,fa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,da(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,xs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,fa(r,e.snapshotNode,i.oldSnap));else throw js("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const PE=new X2;class um{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new wi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ei(this.viewCache_),s=q2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){return{filter:t}}function Z2(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function eA(t,e,n,r,i){const s=new Q2;let o,a;if(n.type===tn.OVERWRITE){const u=n;u.source.fromUser?o=uh(t,e,u.path,u.snap,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ee(u.path),o=Fu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===tn.MERGE){const u=n;u.source.fromUser?o=nA(t,e,u.path,u.children,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ch(t,e,u.path,u.children,r,i,a,s))}else if(n.type===tn.ACK_USER_WRITE){const u=n;u.revert?o=sA(t,e,u.path,r,i,s):o=rA(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===tn.LISTEN_COMPLETE)o=iA(t,e,n.path,r,s);else throw js("Unknown operation type: "+n.type);const l=s.getChanges();return tA(e,o,l),{viewCache:o,changes:l}}function tA(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=sh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(SE(sh(e)))}}function AE(t,e,n,r,i,s){const o=e.eventCache;if(ju(r,n)!=null)return e;{let a,l;if(ee(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ei(e),c=u instanceof V?u:V.EMPTY_NODE,d=am(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Mu(r,Ei(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=J(n);if(u===".priority"){D(Ir(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=wy(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=pe(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=wy(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=lm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Do(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Fu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ee(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),_,null)}else{const _=J(n);if(!l.isCompleteForPath(n)&&Ir(n)>1)return e;const v=pe(n),k=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=c.updatePriority(l.getNode(),k):u=c.updateChild(l.getNode(),_,k,v,PE,null)}const d=bE(e,u,l.isFullyInitialized()||ee(n),c.filtersNodes()),f=new um(i,d,s);return AE(t,d,n,i,f,a)}function uh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new um(i,e,s);if(ee(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Do(e,u,!0,t.filter.filtersNodes());else{const d=J(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Do(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=pe(n),_=a.getNode().getImmediateChild(d);let v;if(ee(f))v=r;else{const w=c.getCompleteChild(d);w!=null?Xp(f)===".priority"&&w.getChild(gE(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=V.EMPTY_NODE}if(_.equals(v))l=e;else{const w=t.filter.updateChild(a.getNode(),d,v,f,c,o);l=Do(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ey(t,e){return t.eventCache.isCompleteForChild(e)}function nA(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ie(n,l);Ey(e,J(c))&&(a=uh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ie(n,l);Ey(e,J(c))||(a=uh(t,a,c,u,i,s,o))}),a}function ky(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ch(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ee(n)?u=r:u=new he(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=ky(t,_,f);l=Fu(t,l,new de(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),w=ky(t,v,f);l=Fu(t,l,new de(d),w,i,s,o,a)}}),l}function rA(t,e,n,r,i,s,o){if(ju(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Fu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ee(n)){let u=new he(null);return l.getNode().forEachChild(cs,(c,d)=>{u=u.set(new de(c),d)}),ch(t,e,n,u,i,s,a,o)}else return e}else{let u=new he(null);return r.foreach((c,d)=>{const f=Ie(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),ch(t,e,n,u,i,s,a,o)}}function iA(t,e,n,r,i){const s=e.serverCache,o=bE(e,s.getNode(),s.isFullyInitialized()||ee(n),s.isFiltered());return AE(t,o,n,r,PE,i)}function sA(t,e,n,r,i,s){let o;if(ju(r,n)!=null)return e;{const a=new um(r,e,i),l=e.eventCache.getNode();let u;if(ee(n)||J(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Mu(r,Ei(e));else{const d=e.serverCache.getNode();D(d instanceof V,"serverChildren would be complete if leaf node"),c=am(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=J(n);let d=lm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,pe(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,V.EMPTY_NODE,pe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mu(r,Ei(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ju(r,se())!=null,Do(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new tm(r.getIndex()),s=C2(r);this.processor_=J2(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(V.EMPTY_NODE,a.getNode(),null),c=new wi(l,o.isFullyInitialized(),i.filtersNodes()),d=new wi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=_c(d,c),this.eventGenerator_=new P2(this.query_)}get query(){return this.query_}}function aA(t){return t.viewCache_.serverCache.getNode()}function lA(t,e){const n=Ei(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function Sy(t){return t.eventRegistrations_.length===0}function uA(t,e){t.eventRegistrations_.push(e)}function Cy(t,e,n){const r=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function by(t,e,n,r){e.type===tn.MERGE&&e.source.queryId!==null&&(D(Ei(t.viewCache_),"We should always have a full cache before handling merges"),D(sh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=eA(t.processor_,i,e,n,r);return Z2(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,OE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function cA(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(s,o)=>{r.push(xs(s,o))}),n.isFullyInitialized()&&r.push(SE(n.getNode())),OE(t,r,n.getNode(),e)}function OE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return A2(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;class dA{constructor(){this.views=new Map}}function fA(t){D(!zu,"__referenceConstructor has already been defined"),zu=t}function hA(){return D(zu,"Reference.ts has not been loaded"),zu}function pA(t){return t.views.size===0}function cm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return D(s!=null,"SyncTree gave us an op for an invalid query."),by(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(by(o,e,n,r));return s}}function mA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Mu(n,i?r:null),l=!1;a?l=!0:r instanceof V?(a=am(n,r),l=!1):(a=V.EMPTY_NODE,l=!1);const u=_c(new wi(a,l,!1),new wi(r,i,!1));return new oA(e,u)}return o}function gA(t,e,n,r,i,s){const o=mA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),uA(o,n),cA(o,n)}function vA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Tr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Cy(u,n,r)),Sy(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Cy(l,n,r)),Sy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Tr(t)&&s.push(new(hA())(e._repo,e._path)),{removed:s,events:o}}function LE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ds(t,e){let n=null;for(const r of t.views.values())n=n||lA(r,e);return n}function DE(t,e){if(e._queryParams.loadsAllData())return wc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ME(t,e){return DE(t,e)!=null}function Tr(t){return wc(t)!=null}function wc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu;function yA(t){D(!Uu,"__referenceConstructor has already been defined"),Uu=t}function _A(){return D(Uu,"Reference.ts has not been loaded"),Uu}let wA=1;class xy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=Y2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jE(t,e,n,r,i){return M2(t.pendingWriteTree_,e,n,r,i),i?Bs(t,new _i(rm(),e,n)):[]}function EA(t,e,n,r){j2(t.pendingWriteTree_,e,n,r);const i=he.fromObject(n);return Bs(t,new Is(rm(),e,i))}function dr(t,e,n=!1){const r=F2(t.pendingWriteTree_,e);if(z2(t.pendingWriteTree_,e)){let s=new he(null);return r.snap!=null?s=s.set(se(),!0):Qe(r.children,o=>{s=s.set(new de(o),!0)}),Bs(t,new Du(r.path,s,n))}else return[]}function Ec(t,e,n){return Bs(t,new _i(im(),e,n))}function kA(t,e,n){const r=he.fromObject(n);return Bs(t,new Is(im(),e,r))}function SA(t,e){return Bs(t,new pa(im(),e))}function CA(t,e,n){const r=fm(t,n);if(r){const i=hm(r),s=i.path,o=i.queryId,a=vt(s,e),l=new pa(sm(o),a);return pm(t,s,l)}else return[]}function dh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||ME(o,e))){const l=vA(o,e,n,r);pA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,_)=>Tr(_));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=IA(f);for(let v=0;v<_.length;++v){const w=_[v],k=w.query,y=UE(t,w);t.listenProvider_.startListening(jo(k),$u(t,k),y.hashFn,y.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(jo(e),null):u.forEach(f=>{const _=t.queryToTagMap.get(kc(f));t.listenProvider_.stopListening(jo(f),_)}))}TA(t,u)}return a}function bA(t,e,n,r){const i=fm(t,r);if(i!=null){const s=hm(i),o=s.path,a=s.queryId,l=vt(o,e),u=new _i(sm(a),l,n);return pm(t,o,u)}else return[]}function xA(t,e,n,r){const i=fm(t,r);if(i){const s=hm(i),o=s.path,a=s.queryId,l=vt(o,e),u=he.fromObject(n),c=new Is(sm(a),l,u);return pm(t,o,c)}else return[]}function Iy(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=vt(f,i);s=s||ds(_,v),o=o||Tr(_)});let a=t.syncPointTree_.get(i);a?(o=o||Tr(a),s=s||ds(a,se())):(a=new dA,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=ds(v,se());w&&(s=s.updateImmediateChild(_,w))}));const u=ME(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=kc(e);D(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=NA();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const c=om(t.pendingWriteTree_,i);let d=gA(a,e,n,c,s,l);if(!u&&!o&&!r){const f=DE(a,e);d=d.concat(RA(t,e,f))}return d}function dm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=vt(o,e),u=ds(a,l);if(u)return u});return TE(i,e,s,n,!0)}function Bs(t,e){return FE(e,t.syncPointTree_,null,om(t.pendingWriteTree_,se()))}function FE(t,e,n,r){if(ee(t.path))return zE(t,e,n,r);{const i=e.get(se());n==null&&i!=null&&(n=ds(i,se()));let s=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=NE(r,o);s=s.concat(FE(a,l,u,c))}return i&&(s=s.concat(cm(i,t,r,n))),s}}function zE(t,e,n,r){const i=e.get(se());n==null&&i!=null&&(n=ds(i,se()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=NE(r,o),c=t.operationForChild(o);c&&(s=s.concat(zE(c,a,l,u)))}),i&&(s=s.concat(cm(i,t,r,n))),s}function UE(t,e){const n=e.query,r=$u(t,n);return{hashFn:()=>(aA(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?CA(t,n._path,r):SA(t,n._path);{const s=kP(i,n);return dh(t,n,null,s)}}}}function $u(t,e){const n=kc(e);return t.queryToTagMap.get(n)}function kc(t){return t._path.toString()+"$"+t._queryIdentifier}function fm(t,e){return t.tagToQueryMap.get(e)}function hm(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function pm(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const i=om(t.pendingWriteTree_,e);return cm(r,n,i,null)}function IA(t){return t.fold((e,n,r)=>{if(n&&Tr(n))return[wc(n)];{let i=[];return n&&(i=LE(n)),Qe(r,(s,o)=>{i=i.concat(o)}),i}})}function jo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(_A())(t._repo,t._path):t}function TA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=kc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function NA(){return wA++}function RA(t,e,n){const r=e._path,i=$u(t,e),s=UE(t,n),o=t.listenProvider_.startListening(jo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)D(!Tr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ee(u)&&c&&Tr(c))return[wc(c).query];{let f=[];return c&&(f=f.concat(LE(c).map(_=>_.query))),Qe(d,(_,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(jo(c),$u(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new mm(n)}node(){return this.node_}}class gm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new gm(this.syncTree_,n)}node(){return dm(this.syncTree_,this.path_)}}const PA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ty=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return AA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return OA(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},AA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},OA=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},$E=function(t,e,n,r){return vm(e,new gm(n,t),r)},WE=function(t,e,n){return vm(t,new mm(e),n)};function vm(t,e,n){const r=t.getPriority().val(),i=Ty(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ty(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ze(a,We(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ze(i))),o.forEachChild(Te,(a,l)=>{const u=vm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function _m(t,e){let n=e instanceof de?e:new de(e),r=t,i=J(n);for(;i!==null;){const s=ks(r.node.children,i)||{children:{},childCount:0};r=new ym(i,r,s),n=pe(n),i=J(n)}return r}function Hs(t){return t.node.value}function BE(t,e){t.node.value=e,fh(t)}function HE(t){return t.node.childCount>0}function LA(t){return Hs(t)===void 0&&!HE(t)}function Sc(t,e){Qe(t.node.children,(n,r)=>{e(new ym(n,t,r))})}function VE(t,e,n,r){n&&!r&&e(t),Sc(t,i=>{VE(i,e,!0,r)}),n&&r&&e(t)}function DA(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function za(t){return new de(t.parent===null?t.name:za(t.parent)+"/"+t.name)}function fh(t){t.parent!==null&&MA(t.parent,t.name,t)}function MA(t,e,n){const r=LA(n),i=En(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,fh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,fh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=/[\[\].#$\/\u0000-\u001F\u007F]/,FA=/[\[\].#$\u0000-\u001F\u007F]/,Od=10*1024*1024,wm=function(t){return typeof t=="string"&&t.length!==0&&!jA.test(t)},GE=function(t){return typeof t=="string"&&t.length!==0&&!FA.test(t)},zA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),GE(t)},UA=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Gp(t)||t&&typeof t=="object"&&En(t,".sv")},$A=function(t,e,n,r){r&&e===void 0||Cc(hc(t,"value"),e,n)},Cc=function(t,e,n){const r=n instanceof de?new n2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Kr(r)+" with contents = "+e.toString());if(Gp(e))throw new Error(t+"contains "+e.toString()+" "+Kr(r));if(typeof e=="string"&&e.length>Od/3&&pc(e)>Od)throw new Error(t+"contains a string greater than "+Od+" utf8 bytes "+Kr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!wm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);r2(r,o),Cc(t,a,r),i2(r)}),i&&s)throw new Error(t+' contains ".value" child '+Kr(r)+" in addition to actual children.")}},WA=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ca(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!wm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(t2);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&jt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},BA=function(t,e,n,r){if(r&&e===void 0)return;const i=hc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Qe(e,(o,a)=>{const l=new de(o);if(Cc(i,a,Ie(n,l)),Xp(l)===".priority"&&!UA(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),WA(i,s)},KE=function(t,e,n,r){if(!(r&&n===void 0)&&!GE(n))throw new Error(hc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),KE(t,e,n,r)},VA=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},GA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zA(n))throw new Error(hc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Jp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function YE(t,e,n){bc(t,n),qE(t,r=>Jp(r,e))}function un(t,e,n){bc(t,n),qE(t,r=>jt(r,e)||jt(e,r))}function qE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(YA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();oi&&Ke("event: "+n.toString()),Ws(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="repo_interrupt",QA=25;class XA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lu(),this.transactionQueueTree_=new ym,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JA(t,e,n){if(t.stats_=qp(t.repoInfo_),t.forceRestClient_||xP())t.server_=new Ou(t.repoInfo_,(r,i,s,o)=>{Ny(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ry(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ln(t.repoInfo_,e,(r,i,s,o)=>{Ny(t,r,i,s,o)},r=>{Ry(t,r)},r=>{eO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=PP(t.repoInfo_,()=>new R2(t.stats_,t.server_)),t.infoData_=new b2,t.infoSyncTree_=new xy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ec(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Em(t,"connected",!1),t.serverSyncTree_=new xy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);un(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ZA(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xc(t){return PA({timestamp:ZA(t)})}function Ny(t,e,n,r,i){t.dataUpdateCount++;const s=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=wu(n,u=>We(u));o=xA(t.serverSyncTree_,s,l,i)}else{const l=We(n);o=bA(t.serverSyncTree_,s,l,i)}else if(r){const l=wu(n,u=>We(u));o=kA(t.serverSyncTree_,s,l)}else{const l=We(n);o=Ec(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ns(t,s)),un(t.eventQueue_,a,o)}function Ry(t,e){Em(t,"connected",e),e===!1&&rO(t)}function eO(t,e){Qe(e,(n,r)=>{Em(t,n,r)})}function Em(t,e,n){const r=new de("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(r,i);const s=Ec(t.infoSyncTree_,r,i);un(t.eventQueue_,r,s)}function km(t){return t.nextWriteId_++}function tO(t,e,n,r,i){Ic(t,"set",{path:e.toString(),value:n,priority:r});const s=xc(t),o=We(n,r),a=dm(t.serverSyncTree_,e),l=WE(o,a,s),u=km(t),c=jE(t.serverSyncTree_,e,l,u,!0);bc(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||ut("set at "+e+" failed: "+f);const w=dr(t.serverSyncTree_,u,!v);un(t.eventQueue_,e,w),hh(t,i,f,_)});const d=Cm(t,e);Ns(t,d),un(t.eventQueue_,d,[])}function nO(t,e,n,r){Ic(t,"update",{path:e.toString(),value:n});let i=!0;const s=xc(t),o={};if(Qe(n,(a,l)=>{i=!1,o[a]=$E(Ie(e,a),We(l),t.serverSyncTree_,s)}),i)Ke("update() called with empty data.  Don't do anything."),hh(t,r,"ok",void 0);else{const a=km(t),l=EA(t.serverSyncTree_,e,o,a);bc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||ut("update at "+e+" failed: "+u);const f=dr(t.serverSyncTree_,a,!d),_=f.length>0?Ns(t,e):e;un(t.eventQueue_,_,f),hh(t,r,u,c)}),Qe(n,u=>{const c=Cm(t,Ie(e,u));Ns(t,c)}),un(t.eventQueue_,e,[])}}function rO(t){Ic(t,"onDisconnectEvents");const e=xc(t),n=Lu();ih(t.onDisconnect_,se(),(i,s)=>{const o=$E(i,s,t.serverSyncTree_,e);CE(n,i,o)});let r=[];ih(n,se(),(i,s)=>{r=r.concat(Ec(t.serverSyncTree_,i,s));const o=Cm(t,i);Ns(t,o)}),t.onDisconnect_=Lu(),un(t.eventQueue_,se(),r)}function iO(t,e,n){let r;J(e._path)===".info"?r=Iy(t.infoSyncTree_,e,n):r=Iy(t.serverSyncTree_,e,n),YE(t.eventQueue_,e._path,r)}function Py(t,e,n){let r;J(e._path)===".info"?r=dh(t.infoSyncTree_,e,n):r=dh(t.serverSyncTree_,e,n),YE(t.eventQueue_,e._path,r)}function sO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qA)}function Ic(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ke(n,...e)}function hh(t,e,n,r){e&&Ws(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function QE(t,e,n){return dm(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function Sm(t,e=t.transactionQueueTree_){if(e||Tc(t,e),Hs(e)){const n=JE(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oO(t,za(e),n)}else HE(e)&&Sc(e,n=>{Sm(t,n)})}function oO(t,e,n){const r=n.map(u=>u.currentWriteId),i=QE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];D(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=vt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ic(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(dr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Tc(t,_m(t.transactionQueueTree_,e)),Sm(t,t.transactionQueueTree_),un(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Ws(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ut("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ns(t,e)}},o)}function Ns(t,e){const n=XE(t,e),r=za(n),i=JE(t,n);return aO(t,i,r),r}function aO(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=vt(n,l.path);let c=!1,d;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=QA)c=!0,d="maxretry",i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=QE(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Cc("transaction failed: Data returned ",_,l.path);let v=We(_);typeof _=="object"&&_!=null&&En(_,".priority")||(v=v.updatePriority(f.getPriority()));const k=l.currentWriteId,y=xc(t),h=WE(v,f,y);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=km(t),o.splice(o.indexOf(k),1),i=i.concat(jE(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(dr(t.serverSyncTree_,k,!0))}else c=!0,d="nodata",i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0))}un(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Tc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ws(r[a]);Sm(t,t.transactionQueueTree_)}function XE(t,e){let n,r=t.transactionQueueTree_;for(n=J(e);n!==null&&Hs(r)===void 0;)r=_m(r,n),e=pe(e),n=J(e);return r}function JE(t,e){const n=[];return ZE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ZE(t,e,n){const r=Hs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Sc(e,i=>{ZE(t,i,n)})}function Tc(t,e){const n=Hs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,BE(e,n.length>0?n:void 0)}Sc(e,r=>{Tc(t,r)})}function Cm(t,e){const n=za(XE(t,e)),r=_m(t.transactionQueueTree_,e);return DA(r,i=>{Ld(t,i)}),Ld(t,r),VE(r,i=>{Ld(t,i)}),n}function Ld(t,e){const n=Hs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?BE(e,void 0):n.length=s+1,un(t.eventQueue_,za(e),i);for(let o=0;o<r.length;o++)Ws(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function uO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ay=function(t,e){const n=cO(t),r=n.namespace;n.domain==="firebase.com"&&Un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new aE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new de(n.pathString)}},cO=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=lO(t.substring(c,d)));const f=uO(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class tk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ee(this._path)?null:Xp(this._path)}get ref(){return new Kn(this._repo,this._path)}get _queryIdentifier(){const e=gy(this._queryParams),n=Kp(e);return n==="{}"?"default":n}get _queryObject(){return gy(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof bm))return!1;const n=this._repo===e._repo,r=Jp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+e2(this._path)}}class Kn extends bm{constructor(e,n){super(e,n,new nm,!1)}get parent(){const e=gE(this._path);return e===null?null:new Kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ma{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=Wu(this.ref,e);return new ma(this._node.getChild(n),r,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ma(i,Wu(this.ref,r),Te)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dd(t,e){return t=ft(t),t._checkNotDeleted("ref"),e!==void 0?Wu(t._root,e):t._root}function Wu(t,e){return t=ft(t),J(t._path)===null?HA("child","path",e,!1):KE("child","path",e,!1),new Kn(t._repo,Ie(t._path,e))}function fO(t,e){t=ft(t),VA("set",t._path),$A("set",e,t._path,!1);const n=new Ra;return tO(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function hO(t,e){BA("update",e,t._path,!1);const n=new Ra;return nO(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class xm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ek("value",this,new ma(e.snapshotNode,new Kn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tk(this,e,n):null}matches(e){return e instanceof xm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Im{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tk(this,e,n):null}createEvent(e,n){D(e.childName!=null,"Child events should have a childName.");const r=Wu(new Kn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ek(e.type,this,new ma(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Im?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function pO(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Py(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new dO(n,s||void 0),a=e==="value"?new xm(o):new Im(e,o);return iO(t._repo,t,a),()=>Py(t._repo,t,a)}function mO(t,e,n,r){return pO(t,"value",e,n,r)}fA(Kn);yA(Kn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO="FIREBASE_DATABASE_EMULATOR_HOST",ph={};let vO=!1;function yO(t,e,n,r){t.repoInfo_=new aE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function _O(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ay(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[gO]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Ay(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new us(us.OWNER):new TP(t.name,t.options,e);GA("Invalid Firebase Database URL",o),ee(o.path)||Un("Database URL must point to the root of a Firebase Database (not including a child path).");const d=EO(a,t,c,new IP(t.name,n));return new kO(d,t)}function wO(t,e){const n=ph[e];(!n||n[t.key]!==t)&&Un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sO(t),delete n[t.key]}function EO(t,e,n,r){let i=ph[e.name];i||(i={},ph[e.name]=i);let s=i[t.toURLString()];return s&&Un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new XA(t,vO,n,r),i[t.toURLString()]=s,s}class kO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kn(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Un("Cannot call "+e+" on a deleted database.")}}function Oy(t=a1(),e){const n=Dp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=wI("database");r&&SO(n,...r)}return n}function SO(t,e,n,r={}){t=ft(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Un("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new us(us.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:EI(r.mockUserToken,t.app.options.projectId);s=new us(o)}yO(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(t){fP(zs),Ss(new hi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _O(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Sr(Zv,ey,t),Sr(Zv,ey,"esm2017")}Ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};CO();const Ly=(t,e=[])=>{if(typeof t!="object")return console.error("Object nie jest obiektem! Wartość object ",t),!1;e.length>0&&e.forEach(n=>{if(!Object.hasOwn(t,n))return console.error("Obiekt nie ma właściwości ",n),!1});for(let n in t)if(t[n]==null)return console.error("Niepoprawna wartość!",t[n],"w",n),!1;return!0},Nc=()=>{const[t,e]=S.useState(null),[n,r]=S.useState({isSuccess:!1,message:""});return S.useEffect(()=>{const s=Oy(Qf),o=Dd(s,"/articles");mO(o,a=>{const l=a.val();e(l),r(u=>(u.isSuccess=!0,u.message="Udało się pobrać listę artykułów.",u))},a=>{throw new Error(a.code)})},[]),{data:t,response:n,pushData:async(s,o)=>{let a={isSuccess:!1,message:""};return new Promise((l,u)=>{if(Ly(s)){const c=Oy(Qf);let d={found:!1,article:{},key:-1};if(t.forEach((_,v)=>{if(_.address===s.address){d.article=_,d.key=v,d.found=!0;return}}),!o&&d.found)return l({...a,...d});if(o){d.article.author!==s.author&&(s.author+=", ".concat(d.article.author)),hO(Dd(c,"/articles/"+d.key),s).then(()=>{a.isSuccess=!0,a.message="Zapisano zmiany w artykule.",l(a)}).catch(_=>{u(_.code)});return}let f=[...t].concat(s);fO(Dd(c,"/articles"),f).then(()=>{a.isSuccess=!0,a.message="Zapisano zmiany w artykule.",l(a)}).catch(_=>{u(_.code)})}else u("Wprowadzone dane nie są poprawne.")})},checkObject:Ly}},bO="_content_xd3f2_1",xO={content:bO},IO=()=>{const{data:t,response:e}=Nc(),[n,r]=S.useState(""),[i,s]=S.useState("");return S.useEffect(()=>{if(!e.isSuccess||!t)return;let o=t.length;r(t.slice(o-3,o).reverse().map((a,l)=>p.jsx("div",{children:p.jsx(It,{to:a.address,children:a.name})},l))),s(t.slice(1,o-3).map((a,l)=>p.jsx("div",{children:p.jsx(It,{to:a.address,children:a.name})},l)))},[t,e]),p.jsxs(Ft.Fragment,{children:[p.jsx("header",{children:p.jsx("h2",{children:"Wiki"})}),p.jsxs("div",{className:xO.content,children:[p.jsx("h3",{children:"Zobacz najnowsze artykuły"}),n,p.jsx("h3",{children:"Lista wszystkich artykułów"}),i]})]})};let TO=t=>new DOMParser().parseFromString(t,"text/html").body.childNodes,nk=t=>t.map((e,n)=>{let r={};const{attributes:i,localName:s,childNodes:o,nodeValue:a}=e;return i&&Array.from(i).forEach(l=>{if(l.name==="style"){let u=l.nodeValue.split(";"),c={};u.forEach(d=>{let[f,_]=d.split(":");c[f]=_}),r[l.name]=c}else r[l.name]=l.nodeValue}),r.key=n,s?Ft.createElement(s,r,o&&Array.isArray(Array.from(o))?nk(Array.from(o)):[]):a});const NO=t=>nk(Array.from(TO(t.domString))),rk=({item:t})=>t.content&&t.name&&p.jsxs(p.Fragment,{children:[p.jsx("header",{children:p.jsx("h2",{children:t.name})}),p.jsx("div",{className:"content",children:p.jsx(NO,{domString:t.content})})]});rk.propTypes={item:R.any};var ik={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="right-from-bracket",r=512,i=512,s=["sign-out-alt"],o="f2f5",a="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faRightFromBracket=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(ik);var sk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="pencil",r=512,i=512,s=[9999,61504,"pencil-alt"],o="f303",a="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faPencil=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(sk);var ok={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="house",r=576,i=512,s=[127968,63498,63500,"home","home-alt","home-lg-alt"],o="f015",a="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faHouse=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(ok);var Tm={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="bars",r=448,i=512,s=["navicon"],o="f0c9",a="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faBars=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Tm);const RO="_option_wa99o_1",Dy={option:RO},Eo=({className:t,onClick:e,to:n,replace:r,title:i,children:s})=>n?p.jsx(Yr,{to:n,replace:r||!1,className:`${t||""} ${Dy.option}`,onClick:e,title:i||"",children:s}):p.jsx("button",{type:"button",className:`${t||""} ${Dy.option}`,onClick:e,title:i||"",children:s});Eo.propTypes={className:Vr.PropTypes.string,onClick:Vr.PropTypes.func,to:Vr.PropTypes.string,replace:Vr.PropTypes.bool,title:Vr.PropTypes.string,children:Vr.PropTypes.any};const jr=S.createContext({editorContent:"home",articleContent:"",articleAddress:"",articleName:"",toolbarButtons:{file:{main:{disabled:!1},exit:{disabled:!0},new:{disabled:!1},open:{disabled:!1},save:{disabled:!0}},edit:{newLine:{disabled:!0},copy:{disabled:!0},cleanCode:{disabled:!0}}},setEditorContent:()=>{},setArticleContent:()=>{},setArticleAddress:()=>{},setArticleName:()=>{},resetArticleInfo:()=>{},disableToolbarButtons:(t,e)=>!0,enableToolbarButtons:(t,e)=>!1});function My(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?My(Object(n),!0).forEach(function(r){je(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):My(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bu(t){"@babel/helpers - typeof";return Bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bu(t)}function PO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function AO(t,e,n){return e&&jy(t.prototype,e),n&&jy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nm(t,e){return LO(t)||MO(t,e)||ak(t,e)||FO()}function Ua(t){return OO(t)||DO(t)||ak(t)||jO()}function OO(t){if(Array.isArray(t))return mh(t)}function LO(t){if(Array.isArray(t))return t}function DO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function MO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function ak(t,e){if(t){if(typeof t=="string")return mh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mh(t,e)}}function mh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function jO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fy=function(){},Rm={},lk={},uk=null,ck={mark:Fy,measure:Fy};try{typeof window<"u"&&(Rm=window),typeof document<"u"&&(lk=document),typeof MutationObserver<"u"&&(uk=MutationObserver),typeof performance<"u"&&(ck=performance)}catch{}var zO=Rm.navigator||{},zy=zO.userAgent,Uy=zy===void 0?"":zy,Nr=Rm,_e=lk,$y=uk,gl=ck;Nr.document;var Yn=!!_e.documentElement&&!!_e.head&&typeof _e.addEventListener=="function"&&typeof _e.createElement=="function",dk=~Uy.indexOf("MSIE")||~Uy.indexOf("Trident/"),vl,yl,_l,wl,El,$n="___FONT_AWESOME___",gh=16,fk="fa",hk="svg-inline--fa",ki="data-fa-i2svg",vh="data-fa-pseudo-element",UO="data-fa-pseudo-element-pending",Pm="data-prefix",Am="data-icon",Wy="fontawesome-i2svg",$O="async",WO=["HTML","HEAD","STYLE","SCRIPT"],pk=function(){try{return!0}catch{return!1}}(),ve="classic",xe="sharp",Om=[ve,xe];function $a(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ve]}})}var ga=$a((vl={},je(vl,ve,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),je(vl,xe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),vl)),va=$a((yl={},je(yl,ve,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),je(yl,xe,{solid:"fass",regular:"fasr",light:"fasl"}),yl)),ya=$a((_l={},je(_l,ve,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),je(_l,xe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),_l)),BO=$a((wl={},je(wl,ve,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),je(wl,xe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),wl)),HO=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,mk="fa-layers-text",VO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,GO=$a((El={},je(El,ve,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),je(El,xe,{900:"fass",400:"fasr",300:"fasl"}),El)),gk=[1,2,3,4,5,6,7,8,9,10],KO=gk.concat([11,12,13,14,15,16,17,18,19,20]),YO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ti={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_a=new Set;Object.keys(va[ve]).map(_a.add.bind(_a));Object.keys(va[xe]).map(_a.add.bind(_a));var qO=[].concat(Om,Ua(_a),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ti.GROUP,ti.SWAP_OPACITY,ti.PRIMARY,ti.SECONDARY]).concat(gk.map(function(t){return"".concat(t,"x")})).concat(KO.map(function(t){return"w-".concat(t)})),Fo=Nr.FontAwesomeConfig||{};function QO(t){var e=_e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function XO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(_e&&typeof _e.querySelector=="function"){var JO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];JO.forEach(function(t){var e=Nm(t,2),n=e[0],r=e[1],i=XO(QO(n));i!=null&&(Fo[r]=i)})}var vk={styleDefault:"solid",familyDefault:"classic",cssPrefix:fk,replacementClass:hk,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fo.familyPrefix&&(Fo.cssPrefix=Fo.familyPrefix);var Rs=M(M({},vk),Fo);Rs.autoReplaceSvg||(Rs.observeMutations=!1);var U={};Object.keys(vk).forEach(function(t){Object.defineProperty(U,t,{enumerable:!0,set:function(n){Rs[t]=n,zo.forEach(function(r){return r(U)})},get:function(){return Rs[t]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){Rs.cssPrefix=e,zo.forEach(function(n){return n(U)})},get:function(){return Rs.cssPrefix}});Nr.FontAwesomeConfig=U;var zo=[];function ZO(t){return zo.push(t),function(){zo.splice(zo.indexOf(t),1)}}var er=gh,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function eL(t){if(!(!t||!Yn)){var e=_e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=_e.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return _e.head.insertBefore(e,r),t}}var tL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wa(){for(var t=12,e="";t-- >0;)e+=tL[Math.random()*62|0];return e}function Vs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Lm(t){return t.classList?Vs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function yk(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nL(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(yk(t[n]),'" ')},"").trim()}function Rc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Dm(t){return t.size!==mn.size||t.x!==mn.x||t.y!==mn.y||t.rotate!==mn.rotate||t.flipX||t.flipY}function rL(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function iL(t){var e=t.transform,n=t.width,r=n===void 0?gh:n,i=t.height,s=i===void 0?gh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&dk?l+="translate(".concat(e.x/er-r/2,"em, ").concat(e.y/er-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/er,"em), calc(-50% + ").concat(e.y/er,"em)) "):l+="translate(".concat(e.x/er,"em, ").concat(e.y/er,"em) "),l+="scale(".concat(e.size/er*(e.flipX?-1:1),", ").concat(e.size/er*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var sL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _k(){var t=fk,e=hk,n=U.cssPrefix,r=U.replacementClass,i=sL;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var By=!1;function Md(){U.autoAddCss&&!By&&(eL(_k()),By=!0)}var oL={mixout:function(){return{dom:{css:_k,insertCss:Md}}},hooks:function(){return{beforeDOMElementCreation:function(){Md()},beforeI2svg:function(){Md()}}}},Wn=Nr||{};Wn[$n]||(Wn[$n]={});Wn[$n].styles||(Wn[$n].styles={});Wn[$n].hooks||(Wn[$n].hooks={});Wn[$n].shims||(Wn[$n].shims=[]);var nn=Wn[$n],wk=[],aL=function t(){_e.removeEventListener("DOMContentLoaded",t),Hu=1,wk.map(function(e){return e()})},Hu=!1;Yn&&(Hu=(_e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_e.readyState),Hu||_e.addEventListener("DOMContentLoaded",aL));function lL(t){Yn&&(Hu?setTimeout(t,0):wk.push(t))}function Wa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?yk(t):"<".concat(e," ").concat(nL(r),">").concat(s.map(Wa).join(""),"</").concat(e,">")}function Hy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var uL=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},jd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?uL(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function cL(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function yh(t){var e=cL(t);return e.length===1?e[0].toString(16):null}function dL(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Vy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function _h(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Vy(e);typeof nn.hooks.addPack=="function"&&!i?nn.hooks.addPack(t,Vy(e)):nn.styles[t]=M(M({},nn.styles[t]||{}),s),t==="fas"&&_h("fa",e)}var kl,Sl,Cl,Qi=nn.styles,fL=nn.shims,hL=(kl={},je(kl,ve,Object.values(ya[ve])),je(kl,xe,Object.values(ya[xe])),kl),Mm=null,Ek={},kk={},Sk={},Ck={},bk={},pL=(Sl={},je(Sl,ve,Object.keys(ga[ve])),je(Sl,xe,Object.keys(ga[xe])),Sl);function mL(t){return~qO.indexOf(t)}function gL(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!mL(i)?i:null}var xk=function(){var e=function(s){return jd(Qi,function(o,a,l){return o[l]=jd(a,s,{}),o},{})};Ek=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),kk=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),bk=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Qi||U.autoFetchSvg,r=jd(fL,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Sk=r.names,Ck=r.unicodes,Mm=Pc(U.styleDefault,{family:U.familyDefault})};ZO(function(t){Mm=Pc(t.styleDefault,{family:U.familyDefault})});xk();function jm(t,e){return(Ek[t]||{})[e]}function vL(t,e){return(kk[t]||{})[e]}function ni(t,e){return(bk[t]||{})[e]}function Ik(t){return Sk[t]||{prefix:null,iconName:null}}function yL(t){var e=Ck[t],n=jm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Rr(){return Mm}var Fm=function(){return{prefix:null,iconName:null,rest:[]}};function Pc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ve:n,i=ga[r][t],s=va[r][t]||va[r][i],o=t in nn.styles?t:null;return s||o||null}var Gy=(Cl={},je(Cl,ve,Object.keys(ya[ve])),je(Cl,xe,Object.keys(ya[xe])),Cl);function Ac(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},je(e,ve,"".concat(U.cssPrefix,"-").concat(ve)),je(e,xe,"".concat(U.cssPrefix,"-").concat(xe)),e),o=null,a=ve;(t.includes(s[ve])||t.some(function(u){return Gy[ve].includes(u)}))&&(a=ve),(t.includes(s[xe])||t.some(function(u){return Gy[xe].includes(u)}))&&(a=xe);var l=t.reduce(function(u,c){var d=gL(U.cssPrefix,c);if(Qi[c]?(c=hL[a].includes(c)?BO[a][c]:c,o=c,u.prefix=c):pL[a].indexOf(c)>-1?(o=c,u.prefix=Pc(c,{family:a})):d?u.iconName=d:c!==U.replacementClass&&c!==s[ve]&&c!==s[xe]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?Ik(u.iconName):{},_=ni(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||_||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Qi.far&&Qi.fas&&!U.autoFetchSvg&&(u.prefix="fas")}return u},Fm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===xe&&(Qi.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=ni(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Rr()||"fas"),l}var _L=function(){function t(){PO(this,t),this.definitions={}}return AO(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),_h(a,o[a]);var l=ya[ve][a];l&&_h(l,o[a]),xk()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Ky=[],Xi={},fs={},wL=Object.keys(fs);function EL(t,e){var n=e.mixoutsTo;return Ky=t,Xi={},Object.keys(fs).forEach(function(r){wL.indexOf(r)===-1&&delete fs[r]}),Ky.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Bu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Xi[o]||(Xi[o]=[]),Xi[o].push(s[o])})}r.provides&&r.provides(fs)}),n}function wh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Xi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Si(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Xi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Bn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return fs[t]?fs[t].apply(null,e):void 0}function Eh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Rr();if(e)return e=ni(n,e)||e,Hy(Tk.definitions,n,e)||Hy(nn.styles,n,e)}var Tk=new _L,kL=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Si("noAuto")},SL={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yn?(Si("beforeI2svg",e),Bn("pseudoElements2svg",e),Bn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,lL(function(){bL({autoReplaceSvgRoot:n}),Si("watch",e)})}},CL={icon:function(e){if(e===null)return null;if(Bu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ni(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Pc(e[0]);return{prefix:r,iconName:ni(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(U.cssPrefix,"-"))>-1||e.match(HO))){var i=Ac(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Rr(),iconName:ni(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Rr();return{prefix:s,iconName:ni(s,e)||e}}}},Pt={noAuto:kL,config:U,dom:SL,parse:CL,library:Tk,findIconDefinition:Eh,toHtml:Wa},bL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?_e:n;(Object.keys(nn.styles).length>0||U.autoFetchSvg)&&Yn&&U.autoReplaceSvg&&Pt.dom.i2svg({node:r})};function Oc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Wa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Yn){var r=_e.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function xL(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Dm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Rc(M(M({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function IL(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(U.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function zm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,_=f===void 0?!1:f,v=r.found?r:n,w=v.width,k=v.height,y=i==="fak",h=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(function(N){return d.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(d.classes).join(" "),m={children:[],attributes:M(M({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(k)})},g=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/k*16*.0625,"em")}:{};_&&(m.attributes[ki]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||wa())},children:[l]}),delete m.attributes.title);var E=M(M({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:M(M({},g),d.styles)}),C=r.found&&n.found?Bn("generateAbstractMask",E)||{children:[],attributes:{}}:Bn("generateAbstractIcon",E)||{children:[],attributes:{}},b=C.children,I=C.attributes;return E.children=b,E.attributes=I,a?IL(E):xL(E)}function Yy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ki]="");var c=M({},o.styles);Dm(i)&&(c.transform=iL({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Rc(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function TL(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Rc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fd=nn.styles;function kh(t){var e=t[0],n=t[1],r=t.slice(4),i=Nm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(ti.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(ti.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(ti.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var NL={found:!1,width:512,height:512};function RL(t,e){!pk&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Sh(t,e){var n=e;return e==="fa"&&U.styleDefault!==null&&(e=Rr()),new Promise(function(r,i){if(Bn("missingIconAbstract"),n==="fa"){var s=Ik(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Fd[e]&&Fd[e][t]){var o=Fd[e][t];return r(kh(o))}RL(t,e),r(M(M({},NL),{},{icon:U.showMissingIcons&&t?Bn("missingIconAbstract")||{}:{}}))})}var qy=function(){},Ch=U.measurePerformance&&gl&&gl.mark&&gl.measure?gl:{mark:qy,measure:qy},ko='FA "6.4.2"',PL=function(e){return Ch.mark("".concat(ko," ").concat(e," begins")),function(){return Nk(e)}},Nk=function(e){Ch.mark("".concat(ko," ").concat(e," ends")),Ch.measure("".concat(ko," ").concat(e),"".concat(ko," ").concat(e," begins"),"".concat(ko," ").concat(e," ends"))},Um={begin:PL,end:Nk},Wl=function(){};function Qy(t){var e=t.getAttribute?t.getAttribute(ki):null;return typeof e=="string"}function AL(t){var e=t.getAttribute?t.getAttribute(Pm):null,n=t.getAttribute?t.getAttribute(Am):null;return e&&n}function OL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function LL(){if(U.autoReplaceSvg===!0)return Bl.replace;var t=Bl[U.autoReplaceSvg];return t||Bl.replace}function DL(t){return _e.createElementNS("http://www.w3.org/2000/svg",t)}function ML(t){return _e.createElement(t)}function Rk(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?DL:ML:n;if(typeof t=="string")return _e.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Rk(o,{ceFn:r}))}),i}function jL(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Bl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Rk(i),n)}),n.getAttribute(ki)===null&&U.keepOriginalSource){var r=_e.createComment(jL(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Lm(n).indexOf(U.replacementClass))return Bl.replace(e);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Wa(a)}).join(`
`);n.setAttribute(ki,""),n.innerHTML=o}};function Xy(t){t()}function Pk(t,e){var n=typeof e=="function"?e:Wl;if(t.length===0)n();else{var r=Xy;U.mutateApproach===$O&&(r=Nr.requestAnimationFrame||Xy),r(function(){var i=LL(),s=Um.begin("mutate");t.map(i),s(),n()})}}var $m=!1;function Ak(){$m=!0}function bh(){$m=!1}var Vu=null;function Jy(t){if($y&&U.observeMutations){var e=t.treeCallback,n=e===void 0?Wl:e,r=t.nodeCallback,i=r===void 0?Wl:r,s=t.pseudoElementsCallback,o=s===void 0?Wl:s,a=t.observeMutationsRoot,l=a===void 0?_e:a;Vu=new $y(function(u){if(!$m){var c=Rr();Vs(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Qy(d.addedNodes[0])&&(U.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&U.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Qy(d.target)&&~YO.indexOf(d.attributeName))if(d.attributeName==="class"&&AL(d.target)){var f=Ac(Lm(d.target)),_=f.prefix,v=f.iconName;d.target.setAttribute(Pm,_||c),v&&d.target.setAttribute(Am,v)}else OL(d.target)&&i(d.target)})}}),Yn&&Vu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function FL(){Vu&&Vu.disconnect()}function zL(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function UL(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ac(Lm(t));return i.prefix||(i.prefix=Rr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=vL(i.prefix,t.innerText)||jm(i.prefix,yh(t.innerText))),!i.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function $L(t){var e=Vs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||wa()):(e["aria-hidden"]="true",e.focusable="false")),e}function WL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=UL(t),r=n.iconName,i=n.prefix,s=n.rest,o=$L(t),a=wh("parseNodeAttributes",{},t),l=e.styleParser?zL(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var BL=nn.styles;function Ok(t){var e=U.autoReplaceSvg==="nest"?Zy(t,{styleParser:!1}):Zy(t);return~e.extra.classes.indexOf(mk)?Bn("generateLayersText",t,e):Bn("generateSvgReplacementMutation",t,e)}var Pr=new Set;Om.map(function(t){Pr.add("fa-".concat(t))});Object.keys(ga[ve]).map(Pr.add.bind(Pr));Object.keys(ga[xe]).map(Pr.add.bind(Pr));Pr=Ua(Pr);function e_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yn)return Promise.resolve();var n=_e.documentElement.classList,r=function(d){return n.add("".concat(Wy,"-").concat(d))},i=function(d){return n.remove("".concat(Wy,"-").concat(d))},s=U.autoFetchSvg?Pr:Om.map(function(c){return"fa-".concat(c)}).concat(Object.keys(BL));s.includes("fa")||s.push("fa");var o=[".".concat(mk,":not([").concat(ki,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ki,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Vs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Um.begin("onTree"),u=a.reduce(function(c,d){try{var f=Ok(d);f&&c.push(f)}catch(_){pk||_.name==="MissingIcon"&&console.error(_)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){Pk(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function HL(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ok(t).then(function(n){n&&Pk([n],e)})}function VL(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Eh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Eh(i||{})),t(r,M(M({},n),{},{mask:i}))}}var GL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,_=n.titleId,v=_===void 0?null:_,w=n.classes,k=w===void 0?[]:w,y=n.attributes,h=y===void 0?{}:y,m=n.styles,g=m===void 0?{}:m;if(e){var E=e.prefix,C=e.iconName,b=e.icon;return Oc(M({type:"icon"},e),function(){return Si("beforeDOMElementCreation",{iconDefinition:e,params:n}),U.autoA11y&&(f?h["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(v||wa()):(h["aria-hidden"]="true",h.focusable="false")),zm({icons:{main:kh(b),mask:l?kh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:C,transform:M(M({},mn),i),symbol:o,title:f,maskId:c,titleId:v,extra:{attributes:h,styles:g,classes:k}})})}},KL={mixout:function(){return{icon:VL(GL)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=e_,n.nodeCallback=HL,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?_e:r,s=n.callback,o=s===void 0?function(){}:s;return e_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(_,v){Promise.all([Sh(i,a),c.iconName?Sh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var k=Nm(w,2),y=k[0],h=k[1];_([n,zm({icons:{main:y,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Rc(a);l.length>0&&(i.style=l);var u;return Dm(o)&&(u=Bn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},YL={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Oc({type:"layer"},function(){Si("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(Ua(s)).join(" ")},children:o}]})}}}},qL={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Oc({type:"counter",content:n},function(){return Si("beforeDOMElementCreation",{content:n,params:r}),TL({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(Ua(a))}})})}}}},QL={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?mn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,_=f===void 0?{}:f;return Oc({type:"text",content:n},function(){return Si("beforeDOMElementCreation",{content:n,params:r}),Yy({content:n,transform:M(M({},mn),s),title:a,extra:{attributes:d,styles:_,classes:["".concat(U.cssPrefix,"-layers-text")].concat(Ua(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(dk){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return U.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},XL=new RegExp('"',"ug"),t_=[1105920,1112319];function JL(t){var e=t.replace(XL,""),n=dL(e,0),r=n>=t_[0]&&n<=t_[1],i=e.length===2?e[0]===e[1]:!1;return{value:yh(i?e[0]:e),isSecondary:r||i}}function n_(t,e){var n="".concat(UO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Vs(t.children),o=s.filter(function(b){return b.getAttribute(vh)===e})[0],a=Nr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(VO),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?xe:ve,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?va[f][l[2].toLowerCase()]:GO[f][u],v=JL(d),w=v.value,k=v.isSecondary,y=l[0].startsWith("FontAwesome"),h=jm(_,w),m=h;if(y){var g=yL(w);g.iconName&&g.prefix&&(h=g.iconName,_=g.prefix)}if(h&&!k&&(!o||o.getAttribute(Pm)!==_||o.getAttribute(Am)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var E=WL(),C=E.extra;C.attributes[vh]=e,Sh(h,_).then(function(b){var I=zm(M(M({},E),{},{icons:{main:b,mask:Fm()},prefix:_,iconName:m,extra:C,watchable:!0})),N=_e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(N,t.firstChild):t.appendChild(N),N.outerHTML=I.map(function(O){return Wa(O)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ZL(t){return Promise.all([n_(t,"::before"),n_(t,"::after")])}function eD(t){return t.parentNode!==document.head&&!~WO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(vh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function r_(t){if(Yn)return new Promise(function(e,n){var r=Vs(t.querySelectorAll("*")).filter(eD).map(ZL),i=Um.begin("searchPseudoElements");Ak(),Promise.all(r).then(function(){i(),bh(),e()}).catch(function(){i(),bh(),n()})})}var tD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=r_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?_e:r;U.searchPseudoElements&&r_(i)}}},i_=!1,nD={mixout:function(){return{dom:{unwatch:function(){Ak(),i_=!0}}}},hooks:function(){return{bootstrap:function(){Jy(wh("mutationObserverCallbacks",{}))},noAuto:function(){FL()},watch:function(n){var r=n.observeMutationsRoot;i_?bh():Jy(wh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},s_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},rD={mixout:function(){return{parse:{transform:function(n){return s_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=s_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},_={outer:a,inner:d,path:f};return{tag:"g",attributes:M({},_.outer),children:[{tag:"g",attributes:M({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),_.path)}]}]}}}},zd={x:0,y:0,width:"100%",height:"100%"};function o_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function iD(t){return t.tag==="g"?t.children:[t]}var sD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ac(i.split(" ").map(function(o){return o.trim()})):Fm();return s.prefix||(s.prefix=Rr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,_=rL({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:M(M({},zd),{},{fill:"white"})},w=c.children?{children:c.children.map(o_)}:{},k={tag:"g",attributes:M({},_.inner),children:[o_(M({tag:c.tag,attributes:M(M({},c.attributes),_.path)},w))]},y={tag:"g",attributes:M({},_.outer),children:[k]},h="mask-".concat(a||wa()),m="clip-".concat(a||wa()),g={tag:"mask",attributes:M(M({},zd),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:iD(f)},g]};return r.push(E,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},zd)}),{children:r,attributes:i}}}},oD={provides:function(e){var n=!1;Nr.matchMedia&&(n=Nr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},aD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},lD=[oL,KL,YL,qL,QL,tD,nD,rD,sD,oD,aD];EL(lD,{mixoutsTo:Pt});Pt.noAuto;Pt.config;Pt.library;Pt.dom;var xh=Pt.parse;Pt.findIconDefinition;Pt.toHtml;var uD=Pt.icon;Pt.layer;Pt.text;Pt.counter;function a_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?a_(Object(n),!0).forEach(function(r){Ji(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gu(t){"@babel/helpers - typeof";return Gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gu(t)}function Ji(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dD(t,e){if(t==null)return{};var n=cD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Ih(t){return fD(t)||hD(t)||pD(t)||mD()}function fD(t){if(Array.isArray(t))return Th(t)}function hD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function pD(t,e){if(t){if(typeof t=="string")return Th(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Th(t,e)}}function Th(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function mD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,_=t.inverse,v=t.border,w=t.listItem,k=t.flip,y=t.size,h=t.rotation,m=t.pull,g=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":_,"fa-border":v,"fa-li":w,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Ji(e,"fa-".concat(y),typeof y<"u"&&y!==null),Ji(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Ji(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Ji(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(g).map(function(E){return g[E]?E:null}).filter(function(E){return E})}function vD(t){return t=t-0,t===t}function Lk(t){return vD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var yD=["style"];function _D(t){return t.charAt(0).toUpperCase()+t.slice(1)}function wD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Lk(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[_D(i)]=s:e[i]=s,e},{})}function Dk(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Dk(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=wD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Lk(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=dD(n,yD);return i.attrs.style=fr(fr({},i.attrs.style),o),t.apply(void 0,[e.tag,fr(fr({},i.attrs),a)].concat(Ih(r)))}var Mk=!1;try{Mk=!0}catch{}function ED(){if(!Mk&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function l_(t){if(t&&Gu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xh.icon)return xh.icon(t);if(t===null)return null;if(t&&Gu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ud(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ji({},t,e):{}}var bt=Ft.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=l_(n),c=Ud("classes",[].concat(Ih(gD(t)),Ih(s.split(" ")))),d=Ud("transform",typeof t.transform=="string"?xh.transform(t.transform):t.transform),f=Ud("mask",l_(r)),_=uD(u,fr(fr(fr(fr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!_)return ED("Could not find icon",u),null;var v=_.abstract,w={ref:e};return Object.keys(t).forEach(function(k){bt.defaultProps.hasOwnProperty(k)||(w[k]=t[k])}),kD(v[0],w)});bt.displayName="FontAwesomeIcon";bt.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};bt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var kD=Dk.bind(null,Ft.createElement);const SD="_menu_1ka1u_1",CD="_shrink_1ka1u_32",$d={menu:SD,"shrink-menu":"_shrink-menu_1ka1u_32",shrink:CD},Wm=S.forwardRef(({setIsMenuExpanded:t},e)=>{const{width:n}=S.useContext(Bt),{disableToolbarButtons:r}=S.useContext(jr),[i,s]=S.useState(!1);S.useEffect(()=>{n>740?(s(!0),t(!0)):(s(!1),t(!1))},[n,t]);const o=()=>{s(c=>!c),t(c=>!c)},a=()=>{n<=740&&(s(!1),t(!1)),location.pathname.includes("/editor")||r("file","save","exit")},l=i?"":$d.shrink,u=i?"Zmniejsz menu":"Poszerz menu";return p.jsxs("nav",{className:`${$d.menu} ${i?"":$d["shrink-menu"]}`,ref:e,children:[p.jsxs(Eo,{className:`${l}`,title:u,onClick:o,children:[p.jsx(bt,{icon:Tm.faBars}),i&&p.jsx("span",{children:" Menu"})]}),p.jsxs(Eo,{to:"home",className:l,title:"Główna",onClick:a,children:[p.jsx(bt,{icon:ok.faHouse}),i&&p.jsx("span",{children:" Główna"})]}),p.jsxs(Eo,{to:"editor",className:l,title:"Edytor",onClick:a,children:[p.jsx(bt,{icon:sk.faPencil}),i&&p.jsx("span",{children:" Edytor"})]}),p.jsxs(Eo,{to:"/",replace:!0,className:l,title:"Wyjdź",onClick:a,children:[p.jsx(bt,{icon:ik.faRightFromBracket}),i&&p.jsx("span",{children:" Wyjdź"})]})]})});Wm.displayName="Menu";Wm.propTypes={setIsMenuExpanded:R.func};var jk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="angle-right",r=320,i=512,s=[8250],o="f105",a="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faAngleRight=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(jk);const bD="_main_sws6s_1",xD="_welcome_sws6s_24",ID="_card_sws6s_39",Bm={main:bD,welcome:xD,card:ID},Hl=({to:t,children:e})=>p.jsx(It,{to:t,className:Bm.card,children:e});Hl.propTypes={to:R.string,children:R.any};const Nh=({setMainHeader:t})=>(S.useEffect(()=>{t("Przydatne narzędzia")},[t]),p.jsxs("div",{className:Bm.welcome,children:[p.jsxs(Hl,{to:"/console/new",children:[p.jsx("h3",{children:"Najnowsze artykuły"}),p.jsx("p",{children:"Sprawdź najnowsze artykuły"}),p.jsx("p",{children:"Zarządzaj najnowszymi"})]}),p.jsxs(Hl,{to:"/console/all",children:[p.jsx("h3",{children:"Wszystkie artykuły"}),p.jsx("p",{children:"Zarządzaj listą artykułów"}),p.jsx("p",{children:"Sprawdzaj dane artykułów"})]}),p.jsxs(Hl,{to:"/console/editor",children:[p.jsx("h3",{children:"Edytor"}),p.jsx("p",{children:"Twórz nowe artykuły"}),p.jsx("p",{children:"Edytuj istniejące artykuły"})]})]}));Nh.propTypes={setMainHeader:R.func};const Fk=({setMainHeader:t})=>(S.useEffect(()=>{t("Nowe artykuły")},[t]),p.jsxs("div",{children:[p.jsx("p",{children:"Zmień kolejność artykułów"}),p.jsx("p",{children:"Zmień liczbę nowych artykyłów"}),p.jsx("p",{children:"Zarządzaj artykułami"})]}));Fk.propTypes={setMainHeader:R.func};const zk=({setMainHeader:t})=>(S.useEffect(()=>{t("Wszystkie artykuły")},[t]),p.jsx("div",{children:"Lista wszystkich artykuły"}));zk.propTypes={setMainHeader:R.func};var Uk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="minimize",r=512,i=512,s=["compress-arrows-alt"],o="f78c",a="M456 224H312c-13.3 0-24-10.7-24-24V56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L442.3 5.7C446 2 450.9 0 456 0s10 2 13.7 5.7l36.7 36.7C510 46 512 50.9 512 56s-2 10-5.7 13.7L433 143l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8zm0 64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-40 40 73.4 73.4c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C466 510 461.1 512 456 512s-10-2-13.7-5.7L369 433l-40 40c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V312c0-13.3 10.7-24 24-24H456zm-256 0c13.3 0 24 10.7 24 24V456c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L69.7 506.3C66 510 61.1 512 56 512s-10-2-13.7-5.7L5.7 469.7C2 466 0 461.1 0 456s2-10 5.7-13.7L79 369 39 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8H200zM56 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l40-40L5.7 69.7C2 66 0 61.1 0 56s2-10 5.7-13.7L42.3 5.7C46 2 50.9 0 56 0s10 2 13.7 5.7L143 79l40-40c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2V200c0 13.3-10.7 24-24 24H56z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faMinimize=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Uk);var $k={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="maximize",r=512,i=512,s=["expand-arrows-alt"],o="f31e",a="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faMaximize=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})($k);var Rh={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="arrow-right",r=448,i=512,s=[8594],o="f061",a="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faArrowRight=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Rh);const TD="_dropdown_1ahdd_1",ND="_menu_1ahdd_7",RD="_slideFromTop_1ahdd_1",PD="_slideFromLeft_1ahdd_1",AD="_active_1ahdd_32",OD="_option_1ahdd_36",Zt={dropdown:TD,menu:ND,"menu-horizontal":"_menu-horizontal_1ahdd_7",slideFromTop:RD,slideFromLeft:PD,active:AD,option:OD,"option-horizontral":"_option-horizontral_1ahdd_73","option-disabled":"_option-disabled_1ahdd_94"},Vl=({title:t,className:e,children:n})=>{const[r,i]=S.useState(!1),s=S.useRef(null),[o,a]=S.useState(Zt.dropdown);S.useEffect(()=>{a(r?`${Zt.dropdown} ${Zt.active}`:`${Zt.dropdown}`)},[r]),S.useEffect(()=>{function c(d){s.current&&!s.current.contains(d.target)&&i(!1)}return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[i]);const l=()=>{i(!0)},u=Ft.Children.map(n,c=>Ft.isValidElement(c)?Ft.cloneElement(c,{isMenuShown:r,setIsMenuShown:i}):c);return p.jsxs("div",{className:`${o} ${e||""}`,onClick:l,ref:s,children:[p.jsx("div",{children:t}),r&&p.jsx("div",{className:Zt.menu,children:u})]})};Vl.propTypes={title:R.any,className:R.string,children:R.any};const Ph=({title:t,id:e,disabled:n,isMenuShown:r,setIsMenuShown:i,children:s})=>{const[o,a]=S.useState(!1),l=()=>{a(!0)},u=()=>{a(!1)},c=()=>{a(f=>!f)},d=Ft.Children.map(s,f=>Ft.isValidElement(f)?Ft.cloneElement(f,{isMenuShown:r,setIsMenuShown:i}):f);return p.jsxs("div",{id:e,className:`${Zt["option-horizontral"]} ${Zt.option} ${n?Zt["option-disabled"]:""}`,onTouchEnd:c,onMouseOver:l,onMouseOut:u,children:[p.jsx("div",{children:t}),o&&p.jsx("div",{className:`${Zt.menu} ${Zt["menu-horizontal"]}`,children:d})]})};Ph.propTypes={title:R.any,id:R.string,isMenuShown:R.bool,setIsMenuShown:R.func,disabled:R.bool,children:R.any};const Wk=({id:t,onClick:e,disabled:n,setIsMenuShown:r,children:i})=>{const s=S.useRef(null);S.useEffect(()=>{n&&s.current.setAttribute("disabled","")},[n]);const o=l=>{r(!1),e&&e(l)},a=l=>{r(!1),e&&e(l)};return p.jsx("button",{type:"button",ref:s,id:t,className:Zt.option,onMouseUp:o,onTouchEnd:a,children:i})};Wk.propTypes={id:R.string,setIsMenuShown:R.func,onClick:R.func,disabled:R.bool,children:R.any};const LD="_modal_1mfln_1",DD="_close_1mfln_46",MD="_backdrop_1mfln_50",Wd={modal:LD,close:DD,backdrop:MD},Ps=({title:t,setShowModal:e,children:n})=>{const r=()=>{e(!1)};return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:Wd.backdrop,onClick:r}),p.jsxs("div",{className:Wd.modal,children:[p.jsx("h2",{children:t}),n,p.jsx("div",{className:Wd.close,onClick:r,children:p.jsx("svg",{className:"icon icon-circle_xmark",children:p.jsx("use",{xlinkHref:`${pn}#icon-circle_xmark`})})})]})]})};Ps.propTypes={title:R.string,setShowModal:R.func,children:R.any};const rn=S.forwardRef(({type:t,placeholder:e,value:n,disabled:r,required:i,className:s,style:o,id:a,minLength:l,onInput:u,onFocus:c,onBlur:d,onChange:f,validateInput:_,setIsFormInvalid:v},w)=>{const[k,y]=S.useState(!1),h=S.useRef(w);S.useLayoutEffect(()=>{if(!k){h.current.classList.remove(jl.invalid);return}h.current.classList.add(jl.invalid)},[k]),S.useEffect(()=>{if(k){h.current.setCustomValidity("Poprawnie wypełnij to pole");return}h.current.setCustomValidity(""),v&&v(!1)},[k,v]);const m=C=>{y(!1),f&&f(C)},g=C=>{c&&c(C)},E=C=>{_&&y(!_(n)),d&&d(C)};return p.jsx("input",{type:t||"text",ref:h,id:a,placeholder:e,value:n,disabled:r,required:i,className:`${jl.input} ${s||""}`,style:o||{},minLength:l||"",onChange:m,onFocus:g,onBlur:E,onInput:u||(()=>{})})});rn.displayName=rn;rn.propTypes={type:R.string,placeholder:R.string,value:R.string,disabled:R.bool,required:R.bool,className:R.string,style:R.any,id:R.string,minLength:R.number,onInput:R.func,onFocus:R.func,onBlur:R.func,onChange:R.func,validateInput:R.func,setIsFormInvalid:R.func};const jD="_toolbar_cuf8w_1",FD="_form_cuf8w_24",zD="_select_cuf8w_41",UD="_option_cuf8w_64",$D="_highlight_cuf8w_96",mt={toolbar:jD,"toolbar-fullscreen":"_toolbar-fullscreen_cuf8w_19",form:FD,"modal-buttons":"_modal-buttons_cuf8w_28","modal-button":"_modal-button_cuf8w_28",select:zD,option:UD,highlight:$D},WD=t=>/\/wiki\/+[\w-]{2,}/i.test(t.trim().toLowerCase()),BD=t=>t.trim().length>=3,HD={address:null,content:null,name:null,author:null},u_={show:!1,title:"",message:""},Bk=({setShowSave:t})=>{const{currentUser:e}=Ni(),{pushData:n,checkObject:r}=Nc(),{articleContent:i,articleAddress:s,articleName:o}=S.useContext(jr),[a,l]=S.useState(s||""),[u,c]=S.useState(o||""),[d,f]=S.useState(u_),[_,v]=S.useState(!1),[w,k]=S.useState(!1),y=b=>{f({...u_,...b})};S.useEffect(()=>{_&&(async(I=!1)=>{let N=HD;if(N.address=a,N.name=u,N.content=i,e.displayName?N.author=e.displayName:N.author=e.email.split("@")[0],r(N))try{let O=await n(N,I);if(!r(O))throw new Error("Wystąpił niespodziewany błąd.");if(O.found)y({show:!0,cancel:!0,title:"Potwierdź nadpisanie",message:"Artykuł pod tym adresem już istnieje. Czy na pewno chcesz zapisać zmiany?"});else{if(!O.isSuccess)throw new Error(O.message);y({show:!0,title:"Zapisano zmiany",message:O.message})}}catch(O){console.error(O.message),y({show:!0,title:"Wystąpił błąd",message:O.message})}v(!1)})(w)},[_,w]);const h=b=>{if(b.target.value.length<7){l("/wiki/");return}l(b.target.value)},m=b=>{c(b.target.value)},g=()=>{y({show:!1}),t(!1)},E=b=>{b?(k(!0),v(!0)):(y({show:!1}),t(!1))},C=b=>{b.preventDefault(),v(!0)};return p.jsxs(p.Fragment,{children:[!d.show&&p.jsxs(Ps,{title:"Zapisywanie artykułu",setShowModal:t,children:[p.jsx("span",{children:"Zapisz wszystkie zmiany lub anuluj"}),p.jsxs("form",{onSubmit:C,onReset:g,className:mt.form,children:[p.jsx(rn,{type:"text",id:"address",placeholder:"Adres do artykułu",value:a,minLength:7,onChange:h,validateInput:WD,required:!0}),p.jsx(rn,{type:"text",id:"name",placeholder:"Nazwa artykułu",value:u,minLength:3,onChange:m,validateInput:BD,required:!0}),p.jsxs("div",{className:mt["modal-buttons"],children:[p.jsx(en,{type:"submit",children:"Zapisz"}),p.jsx(en,{type:"reset",highlighted:!1,children:"Anuluj"})]})]})]}),d.show&&p.jsxs(Ps,{title:d.title,setShowModal:g,children:[p.jsx("span",{children:d.message}),p.jsxs("div",{className:mt["modal-buttons"],children:[p.jsx(en,{className:mt["modal-button"],onClick:E.bind(void 0,!!d.cancel),children:d.cancel?"Zapisz":"Ok"}),d.cancel&&p.jsx(en,{className:mt["modal-button"],highlighted:!1,onClick:g,children:"Anuluj"})]})]})]})};Bk.propTypes={setShowSave:R.func};const Hk=({setShowOpen:t})=>{const{data:e,response:n}=Nc(),[r,i]=S.useState(null),{editorContent:s,setArticleContent:o,setArticleAddress:a,setArticleName:l,setEditorContent:u}=S.useContext(jr),c=()=>{t(!1)},d=_=>{_.preventDefault(),n.isSuccess?e.forEach(v=>{v.address===r&&(o(v.content),a(v.address),l(v.name))}):console.error("Can't fetch article data from the database."),c(),s!=="edit"&&u("edit")},f=_=>{i(_.target.value)};return p.jsxs(Ps,{title:"Otwórz artykuł",setShowModal:t,children:[p.jsx("span",{children:"Edytuj istniejący artykuł"}),p.jsxs("form",{onSubmit:d,onReset:c,className:mt.form,children:[p.jsxs("select",{className:mt.select,name:"address",onChange:f,required:!0,defaultValue:"",children:[p.jsx("option",{value:"","aria-selected":!0,"aria-disabled":!0,disabled:!0,children:"Wybierz artykuł"}),e&&e.map((_,v)=>p.jsx("option",{value:_.address,children:_.name},v))]}),p.jsxs("div",{className:mt["modal-buttons"],children:[p.jsx(en,{type:"submit",children:"Otwórz"}),p.jsx(en,{type:"reset",highlighted:!1,children:"Anuluj"})]})]})]})};Hk.propTypes={setShowOpen:R.func};const VD=t=>{if(navigator.clipboard){navigator.clipboard.writeText(t);return}const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)},Vk=({setEditorStyles:t,setEditorContent:e})=>{const{width:n,fullscreen:r,setFullscreen:i}=S.useContext(Bt),{toolbarButtons:s,articleContent:o,resetArticleInfo:a,enableToolbarButtons:l,disableToolbarButtons:u,setArticleContent:c}=S.useContext(jr),[d,f]=S.useState(!1),[_,v]=S.useState(!1),[w,k]=S.useState({}),y=()=>{r?(i(!1),k({}),t({})):(i(!0),k({borderTopLeftRadius:"unset",borderTopRightRadius:"unset"}),t({position:"fixed",inset:0,zIndex:50,borderRadius:"unset"}))},h=$=>{$.currentTarget.id==="exit"?(e("home"),u("file",["exit","save"]),u("edit",["copy","newLine","cleanCode"])):$.currentTarget.id==="edit"?(a(),e("edit"),l("file",["exit","save"]),l("edit",["copy","newLine","cleanCode"])):$.currentTarget.id==="save"?f(!0):$.currentTarget.id==="open"?v(!0):(e($.currentTarget.id),l("file",["exit","save"]),l("edit",["copy","newLine","cleanCode"]))},m=()=>{c($=>($+="<br/>",console.log($),$))},g=()=>{VD(o)},E=()=>{c(""),u("edit",["copy","cleanCode"])},C=$=>$.map((Q,rt)=>p.jsx(Wk,{id:Q.id,onClick:Q.onClick,disabled:Q.disabled,children:Q.children},rt)),b=[{id:"edit",onClick:h,disabled:s.file.new.disabled,children:"Nowy"},{id:"open",onClick:h,disabled:s.file.open.disabled,children:"Otwórz"},{id:"save",onClick:h,disabled:s.file.save.disabled,children:"Zapisz"},{id:"exit",onClick:h,disabled:s.file.exit.disabled,children:"Wyjdź"}],I=[{id:"newLine",onClick:m,disabled:s.edit.newLine.disabled,children:"Wstaw nową linię"},{id:"copy",onClick:g,disabled:s.edit.copy.disabled,children:"Skopiuj kod"},{id:"cleanCode",onClick:E,disabled:s.edit.cleanCode.disabled,children:"Wyczyść zawartość"}],N=C(b),O=C(I);return p.jsxs(p.Fragment,{children:[_&&p.jsx(Hk,{setShowOpen:v}),d&&p.jsx(Bk,{setShowSave:f}),p.jsxs("nav",{className:mt.toolbar,style:w,children:[n>800?p.jsxs(p.Fragment,{children:[p.jsx(Vl,{title:"Plik",className:mt.option,children:N}),p.jsx(Vl,{title:"Edytuj",className:mt.option,children:O})]}):p.jsxs(Vl,{title:p.jsx(bt,{icon:Tm.faBars,className:mt.option}),children:[p.jsx(Ph,{title:p.jsxs(p.Fragment,{children:["Plik"," ",p.jsx(bt,{icon:Rh.faArrowRight})]}),children:N}),p.jsx(Ph,{title:p.jsxs(p.Fragment,{children:["Edytuj"," ",p.jsx(bt,{icon:Rh.faArrowRight})]}),children:O})]}),p.jsx("button",{type:"button",className:`${mt["toolbar-fullscreen"]} ${mt.option}`,title:r?"Zamknij pełny ekran":"Pełny ekran",onClick:y,children:p.jsx(bt,{icon:r?Uk.faMinimize:$k.faMaximize})})]})]})};Vk.propTypes={setEditorStyles:R.func,setEditorContent:R.func};const GD="_welcome_15ky3_1",KD="_option_15ky3_17",YD="_recent_15ky3_21",Wr={welcome:GD,option:KD,recent:YD},qD=()=>p.jsxs("div",{className:Wr.welcome,children:[p.jsxs("div",{children:[p.jsx("h3",{children:"Witaj! Zacznij edytować artykuły wybierając jedną z opcji"}),p.jsx("h4",{children:"Edytuj"}),p.jsx("button",{type:"button",className:Wr.option,children:"Nowy..."}),p.jsx("button",{type:"button",className:Wr.option,children:"Otwórz..."})]}),p.jsxs("div",{className:Wr.recent,children:[p.jsx("h4",{children:"Najnowsze"}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx("button",{type:"button",className:Wr.option,children:"Artykuł 1"})}),p.jsx("li",{children:p.jsx("button",{type:"button",className:Wr.option,children:"Artykuł 2"})}),p.jsx("li",{children:p.jsx("button",{type:"button",className:Wr.option,children:"Artykuł 3"})})]})]})]});var Gk={exports:{}};(function(t){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function h(m){return m instanceof l?new l(m.type,h(m.content),m.alias):Array.isArray(m)?m.map(h):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++s}),h.__id},clone:function h(m,g){g=g||{};var E,C;switch(a.util.type(m)){case"Object":if(C=a.util.objId(m),g[C])return g[C];E={},g[C]=E;for(var b in m)m.hasOwnProperty(b)&&(E[b]=h(m[b],g));return E;case"Array":return C=a.util.objId(m),g[C]?g[C]:(E=[],g[C]=E,m.forEach(function(I,N){E[N]=h(I,g)}),E);default:return m}},getLanguage:function(h){for(;h;){var m=i.exec(h.className);if(m)return m[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,m){h.className=h.className.replace(RegExp(i,"gi"),""),h.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(E){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(h){var m=document.getElementsByTagName("script");for(var g in m)if(m[g].src==h)return m[g]}return null}},isActive:function(h,m,g){for(var E="no-"+m;h;){var C=h.classList;if(C.contains(m))return!0;if(C.contains(E))return!1;h=h.parentElement}return!!g}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(h,m){var g=a.util.clone(a.languages[h]);for(var E in m)g[E]=m[E];return g},insertBefore:function(h,m,g,E){E=E||a.languages;var C=E[h],b={};for(var I in C)if(C.hasOwnProperty(I)){if(I==m)for(var N in g)g.hasOwnProperty(N)&&(b[N]=g[N]);g.hasOwnProperty(I)||(b[I]=C[I])}var O=E[h];return E[h]=b,a.languages.DFS(a.languages,function($,Q){Q===O&&$!=h&&(this[$]=b)}),b},DFS:function h(m,g,E,C){C=C||{};var b=a.util.objId;for(var I in m)if(m.hasOwnProperty(I)){g.call(m,I,m[I],E||I);var N=m[I],O=a.util.type(N);O==="Object"&&!C[b(N)]?(C[b(N)]=!0,h(N,g,null,C)):O==="Array"&&!C[b(N)]&&(C[b(N)]=!0,h(N,g,I,C))}}},plugins:{},highlightAll:function(h,m){a.highlightAllUnder(document,h,m)},highlightAllUnder:function(h,m,g){var E={callback:g,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),a.hooks.run("before-all-elements-highlight",E);for(var C=0,b;b=E.elements[C++];)a.highlightElement(b,m===!0,E.callback)},highlightElement:function(h,m,g){var E=a.util.getLanguage(h),C=a.languages[E];a.util.setLanguage(h,E);var b=h.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(b,E);var I=h.textContent,N={element:h,language:E,grammar:C,code:I};function O(Q){N.highlightedCode=Q,a.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,a.hooks.run("after-highlight",N),a.hooks.run("complete",N),g&&g.call(N.element)}if(a.hooks.run("before-sanity-check",N),b=N.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!N.code){a.hooks.run("complete",N),g&&g.call(N.element);return}if(a.hooks.run("before-highlight",N),!N.grammar){O(a.util.encode(N.code));return}if(m&&r.Worker){var $=new Worker(a.filename);$.onmessage=function(Q){O(Q.data)},$.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else O(a.highlight(N.code,N.grammar,N.language))},highlight:function(h,m,g){var E={code:h,grammar:m,language:g};if(a.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=a.tokenize(E.code,E.grammar),a.hooks.run("after-tokenize",E),l.stringify(a.util.encode(E.tokens),E.language)},tokenize:function(h,m){var g=m.rest;if(g){for(var E in g)m[E]=g[E];delete m.rest}var C=new d;return f(C,C.head,h),c(h,C,m,C.head,0),v(C)},hooks:{all:{},add:function(h,m){var g=a.hooks.all;g[h]=g[h]||[],g[h].push(m)},run:function(h,m){var g=a.hooks.all[h];if(!(!g||!g.length))for(var E=0,C;C=g[E++];)C(m)}},Token:l};r.Prism=a;function l(h,m,g,E){this.type=h,this.content=m,this.alias=g,this.length=(E||"").length|0}l.stringify=function h(m,g){if(typeof m=="string")return m;if(Array.isArray(m)){var E="";return m.forEach(function(O){E+=h(O,g)}),E}var C={type:m.type,content:h(m.content,g),tag:"span",classes:["token",m.type],attributes:{},language:g},b=m.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(C.classes,b):C.classes.push(b)),a.hooks.run("wrap",C);var I="";for(var N in C.attributes)I+=" "+N+'="'+(C.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+C.tag+' class="'+C.classes.join(" ")+'"'+I+">"+C.content+"</"+C.tag+">"};function u(h,m,g,E){h.lastIndex=m;var C=h.exec(g);if(C&&E&&C[1]){var b=C[1].length;C.index+=b,C[0]=C[0].slice(b)}return C}function c(h,m,g,E,C,b){for(var I in g)if(!(!g.hasOwnProperty(I)||!g[I])){var N=g[I];N=Array.isArray(N)?N:[N];for(var O=0;O<N.length;++O){if(b&&b.cause==I+","+O)return;var $=N[O],Q=$.inside,rt=!!$.lookbehind,Ht=!!$.greedy,cn=$.alias;if(Ht&&!$.pattern.global){var it=$.pattern.toString().match(/[imsuy]*$/)[0];$.pattern=RegExp($.pattern.source,it+"g")}for(var kt=$.pattern||$,L=E.next,z=C;L!==m.tail&&!(b&&z>=b.reach);z+=L.value.length,L=L.next){var H=L.value;if(m.length>h.length)return;if(!(H instanceof l)){var ae=1,ie;if(Ht){if(ie=u(kt,z,h,rt),!ie||ie.index>=h.length)break;var ot=ie.index,qn=ie.index+ie[0].length,ne=z;for(ne+=L.value.length;ot>=ne;)L=L.next,ne+=L.value.length;if(ne-=L.value.length,z=ne,L.value instanceof l)continue;for(var st=L;st!==m.tail&&(ne<qn||typeof st.value=="string");st=st.next)ae++,ne+=st.value.length;ae--,H=h.slice(z,ne),ie.index-=z}else if(ie=u(kt,0,H,rt),!ie)continue;var ot=ie.index,Vt=ie[0],At=H.slice(0,ot),Ba=H.slice(ot+Vt.length),Gs=z+H.length;b&&Gs>b.reach&&(b.reach=Gs);var Fr=L.prev;At&&(Fr=f(m,Fr,At),z+=At.length),_(m,Fr,ae);var Lc=new l(I,Q?a.tokenize(Vt,Q):Vt,cn,Vt);if(L=f(m,Fr,Lc),Ba&&f(m,L,Ba),ae>1){var Ks={cause:I+","+O,reach:Gs};c(h,m,g,L.prev,z,Ks),b&&Ks.reach>b.reach&&(b.reach=Ks.reach)}}}}}}function d(){var h={value:null,prev:null,next:null},m={value:null,prev:h,next:null};h.next=m,this.head=h,this.tail=m,this.length=0}function f(h,m,g){var E=m.next,C={value:g,prev:m,next:E};return m.next=C,E.prev=C,h.length++,C}function _(h,m,g){for(var E=m.next,C=0;C<g&&E!==h.tail;C++)E=E.next;m.next=E,E.prev=m,h.length-=C}function v(h){for(var m=[],g=h.head.next;g!==h.tail;)m.push(g.value),g=g.next;return m}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(h){var m=JSON.parse(h.data),g=m.language,E=m.code,C=m.immediateClose;r.postMessage(a.highlight(E,a.languages[g],g)),C&&r.close()},!1)),a;var w=a.util.currentScript();w&&(a.filename=w.src,w.hasAttribute("data-manual")&&(a.manual=!0));function k(){a.manual||a.highlightAll()}if(!a.manual){var y=document.readyState;y==="loading"||y==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return a}(e);t.exports&&(t.exports=n),typeof Zm<"u"&&(Zm.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(w,k){return"✖ Error "+w+" while fetching file: "+k},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",u="loaded",c="failed",d="pre[data-src]:not(["+a+'="'+u+'"]):not(['+a+'="'+l+'"])';function f(w,k,y){var h=new XMLHttpRequest;h.open("GET",w,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?k(h.responseText):h.status>=400?y(i(h.status,h.statusText)):y(s))},h.send(null)}function _(w){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(k){var y=Number(k[1]),h=k[2],m=k[3];return h?m?[y,Number(m)]:[y,void 0]:[y,y]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+d}),n.hooks.add("before-sanity-check",function(w){var k=w.element;if(k.matches(d)){w.code="",k.setAttribute(a,l);var y=k.appendChild(document.createElement("CODE"));y.textContent=r;var h=k.getAttribute("data-src"),m=w.language;if(m==="none"){var g=(/\.(\w+)$/.exec(h)||[,"none"])[1];m=o[g]||g}n.util.setLanguage(y,m),n.util.setLanguage(k,m);var E=n.plugins.autoloader;E&&E.loadLanguages(m),f(h,function(C){k.setAttribute(a,u);var b=_(k.getAttribute("data-range"));if(b){var I=C.split(/\r\n?|\n/g),N=b[0],O=b[1]==null?I.length:b[1];N<0&&(N+=I.length),N=Math.max(0,Math.min(N-1,I.length)),O<0&&(O+=I.length),O=Math.max(0,Math.min(O,I.length)),C=I.slice(N,O).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(N+1))}y.textContent=C,n.highlightElement(y)},function(C){k.setAttribute(a,c),y.textContent=C})}}),n.plugins.fileHighlight={highlight:function(k){for(var y=(k||document).querySelectorAll(d),h=0,m;m=y[h++];)n.highlightElement(m)}};var v=!1;n.fileHighlight=function(){v||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),v=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Gk);var QD=Gk.exports;const c_=Ku(QD);const XD="_code_wlch2_1",JD="_content_wlch2_30",Bd={code:XD,"line-numbers":"_line-numbers_wlch2_13",content:JD};String.prototype.lines=function(){return this.split(`
`)};String.prototype.lineCount=function(){return this.lines().length};const ZD=()=>{const{articleContent:t,setArticleContent:e,enableToolbarButtons:n,disableToolbarButtons:r}=S.useContext(jr),i=S.useRef(null),[s,o]=S.useState(1),a=S.useCallback(c=>{o(c.lineCount()),c.length>0?n("edit",["copy","cleanCode"]):r("edit",["copy","cleanCode"]),c[c.length-1]==`
`&&(c+=" "),i.current.innerHTML=c_.highlight(c.replace(new RegExp("&","g"),"&").replace(new RegExp("<","g"),"<"),c_.languages.html,"html")},[r,n]);S.useEffect(()=>{a(t)},[t,a]);const l=c=>{let d=c.target.value;a(d),e(d)},u=c=>{if(c.key=="Tab"){let d=c.target.value;const f=c.target;c.preventDefault();let _=d.slice(0,f.selectionStart),v=d.slice(f.selectionEnd,f.value.length),w=f.selectionEnd+1;f.value=_+"	"+v,f.selectionStart=w,f.selectionEnd=w}};return p.jsxs("div",{className:Bd.code,children:[p.jsx("div",{className:Bd["line-numbers"],children:[...Array(s)].map((c,d)=>p.jsx("span",{},d))}),p.jsxs("div",{className:Bd.content,children:[p.jsx("textarea",{onInput:l,onKeyDown:u,spellCheck:!1,value:t}),p.jsx("pre",{children:p.jsx("code",{className:"language-html",ref:i})})]})]})},eM="_editor_nw7wa_1",d_={editor:eM,"workspace-container":"_workspace-container_nw7wa_16"},Kk=({setMainHeader:t})=>{const{editorContent:e,setEditorContent:n}=S.useContext(jr),[r,i]=S.useState({});S.useEffect(()=>{t("Edytor artykułów")},[t]);let s="";return e==="home"?s=p.jsx(qD,{}):e==="edit"?s=p.jsx(ZD,{}):s="Wystąpił błąd",p.jsxs("div",{className:d_.editor,style:r,children:[p.jsx(Vk,{setEditorStyles:i,setEditorContent:n}),p.jsx("div",{className:d_["workspace-container"],children:s})]})};Kk.propTypes={setMainHeader:R.func};const tM=()=>{const{articleName:t}=S.useContext(jr),[e,n]=S.useState("");return p.jsxs("main",{className:Bm.main,children:[p.jsx("header",{children:p.jsxs("h2",{children:[e,t&&" ",t&&p.jsx(bt,{icon:jk.faAngleRight}),t&&" ",t&&t]})}),p.jsx("section",{children:p.jsxs(Fx,{children:[p.jsx(Ge,{path:"/home",element:p.jsx(Nh,{setMainHeader:n})}),p.jsx(Ge,{path:"/new",element:p.jsx(Fk,{setMainHeader:n})}),p.jsx(Ge,{path:"/all",element:p.jsx(zk,{setMainHeader:n})}),p.jsx(Ge,{path:"/editor",element:p.jsx(Kk,{setMainHeader:n})}),p.jsx(Ge,{path:"*",element:p.jsx(Nh,{setMainHeader:n})})]})})]})},nM={file:{main:{disabled:!1},exit:{disabled:!0},new:{disabled:!1},open:{disabled:!1},save:{disabled:!0}},edit:{newLine:{disabled:!0},copy:{disabled:!0},cleanCode:{disabled:!0}}},rM=(t,e)=>{let n=t;return e.type==="DISABLE"&&e.mainButton&&Array.isArray(e.subButtons)&&e.subButtons.forEach(r=>n[e.mainButton][r].disabled=!0),e.type==="ENABLE"&&e.mainButton&&Array.isArray(e.subButtons)&&e.subButtons.forEach(r=>n[e.mainButton][r].disabled=!1),n},Yk=({children:t})=>{const e=wn(),n=sessionStorage.getItem("editorContent")?sessionStorage.getItem("editorContent"):"home",r=sessionStorage.getItem("articleContent")?sessionStorage.getItem("articleContent"):"",i=sessionStorage.getItem("articleAddress")?sessionStorage.getItem("articleAddress"):"",s=sessionStorage.getItem("articleName")?sessionStorage.getItem("articleName"):"",[o,a]=S.useState(n),[l,u]=S.useState(r),[c,d]=S.useState(i),[f,_]=S.useState(s),[v,w]=S.useReducer(rM,nM),k=(g,E)=>{w({type:"DISABLE",mainButton:g,subButtons:E})},y=(g,E)=>{w({type:"ENABLE",mainButton:g,subButtons:E})},m={editorContent:o,articleContent:l,articleAddress:c,articleName:f,toolbarButtons:v,setEditorContent:a,setArticleContent:u,setArticleAddress:d,setArticleName:_,resetArticleInfo:()=>{u(""),d(""),_("")},disableToolbarButtons:k,enableToolbarButtons:y};return S.useEffect(()=>{e.pathname.includes("/editor")&&o==="edit"?(sessionStorage.setItem("editorContent",o),y("file",["exit","save"]),y("edit",["newLine"])):(k("file",["exit","save"]),k("edit",["newLine"]),sessionStorage.removeItem("editorContent"),a("home"))},[o,e.pathname]),S.useEffect(()=>{e.pathname.includes("/editor")&&o==="edit"?(sessionStorage.setItem("articleContent",l),sessionStorage.setItem("articleAddress",c),sessionStorage.setItem("articleName",f)):(sessionStorage.removeItem("articleContent"),u(""),sessionStorage.removeItem("articleAddress"),d(""),sessionStorage.removeItem("articleName"),_(""))},[l,c,f,o,e.pathname]),p.jsx(jr.Provider,{value:m,children:t})};Yk.propTypes={children:R.any};const iM="_console_9pz6r_1",f_={console:iM,"shrink-menu":"_shrink-menu_9pz6r_28"},sM=()=>{const t=S.useRef(null),{width:e}=S.useContext(Bt),[n,r]=S.useState({}),[i,s]=S.useState(!1);return S.useEffect(()=>{const o=t.current.clientWidth;e<=740&&!i&&r({width:o,height:"100vh"})},[e,i]),p.jsx(p.Fragment,{children:p.jsx(Yk,{children:p.jsxs("div",{className:`${i?"":f_["shrink-menu"]} ${f_.console}`,children:[e<=740&&p.jsx("div",{style:n}),p.jsx(Wm,{ref:t,setIsMenuExpanded:s}),p.jsx(tM,{})]})})})},oM=()=>p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx(Ta,{}),p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 404"})}),p.jsxs("div",{children:[p.jsx("p",{children:"Nie znaleziono strony."}),p.jsx(vi,{to:"/",children:"Strona główna"})]})]})]}),p.jsx(Mr,{})]}),aM=()=>p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx(Ta,{to:"/",text:"Wróć na stronę główną"}),p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 403"})}),p.jsxs("div",{children:[p.jsx("p",{children:"Nie masz dostępu do tej strony."}),p.jsx(vi,{to:"/logowanie",children:"Zaloguj się"})]})]})]}),p.jsx(Mr,{})]}),lM="_container_11xnx_1",uM="_form_11xnx_7",ht={container:lM,form:uM,"modal-button":"_modal-button_11xnx_39"},h_={show:!1,title:"",message:""},cM=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,dM=t=>t.trim()!==""&&t.trim().length>=3,fM=t=>cM.test(t.toLowerCase())&&t.toLowerCase().trim().length>=3,hM=()=>{const{uid:t,loginWithEmail:e}=Ni(),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(h_),[l,u]=S.useState(!0),c=h=>{r(h.target.value)},d=h=>{s(h.target.value)},f=()=>{r(""),s(""),u(!1)},_=h=>{if(h.preventDefault(),l){a({show:!0,title:"Wypełnij formularz",message:"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza."});return}f(),e(n,i).then(()=>{a({show:!0,title:"Zalogowano",message:"Logowanie zakończyło się sukcesem.",redirect:"/"})}).catch(m=>{let g={show:!0,title:"Wystąpił błąd",message:"Serwis w tej chwili jest niedostępny. Spróbuj ponownie później"};m.message==="auth/user-not-found"&&(g.message="Nie znaleziono takiego użytkownika"),m.message==="auth/wrong-password"&&(g.message="Podano błędne hasło"),a(g),console.log(m)})},v=()=>{a(h_)},w=p.jsxs("form",{onSubmit:_,className:ht.form,children:[p.jsxs("label",{children:[p.jsxs("p",{children:["E-mail ",p.jsx("span",{className:ht.asterisk,children:"*"})]}),p.jsx(rn,{type:"email",id:"email",value:n,minLength:3,onInput:c,validateInput:fM,setIsFormInvalid:u,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Hasło ",p.jsx("span",{className:ht.asterisk,children:"*"})]}),p.jsx(rn,{type:"password",id:"password",value:i,minLength:3,onInput:d,validateInput:dM,setIsFormInvalid:u,required:!0})]}),p.jsx(en,{type:"submit",children:"Zaloguj się"}),p.jsxs("p",{children:["Nie masz jeszcze konta?"," ",p.jsx(It,{to:"/rejestracja",children:"Zapisz się"})]})]}),k=t?"Jesteś już zalogowany":"Zaloguj się",y=t?"Wyloguj się i zaloguj na inne konto lub przejdź na inną stronę":"Wypełnij formularz logowania";return p.jsxs(p.Fragment,{children:[p.jsxs("main",{className:ht.container,children:[p.jsxs("section",{className:"section",children:[p.jsx("h1",{children:k}),p.jsx("h2",{children:y}),t?p.jsx("div",{children:p.jsx(vi,{to:"/wylogowanie",children:"Wyloguj się"})}):w]}),o.show&&p.jsxs(Ps,{title:o.title,setShowModal:v,children:[p.jsx("p",{children:o.message}),o.redirect?p.jsx(vi,{to:o.redirect,className:ht["modal-button"],onClick:v,children:"Ok"}):p.jsx(en,{className:ht["modal-button"],onClick:v,children:"Ok"})]})]}),p.jsx(Mr,{})]})},p_={show:!1,title:"",message:""},pM=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,Hd=t=>t.trim()!==""&&t.trim().length>=3,mM=t=>pM.test(t.toLowerCase())&&t.toLowerCase().trim().length>=3,gM=()=>{const{createUser:t}=Ni(),e=Ia(),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(""),[c,d]=S.useState(p_),[f,_]=S.useState(!1),[v,w]=S.useState(!0);S.useEffect(()=>{if(o===l){_(!0);return}_(!1)},[o,l]);const k=b=>{r(b.target.value)},y=b=>{s(b.target.value)},h=b=>{a(b.target.value)},m=b=>{u(b.target.value)},g=()=>{r(""),s(""),a(""),u(""),w(!1),_(!0)},E=b=>{if(b.preventDefault(),!f){d({show:!0,title:"Hasła się nie zgadzają",message:"Hasła powinny być takie same w obu polach i powinny mieć co najmniej 6 znaków."});return}if(v){d({show:!0,title:"Wypełnij formularz",message:"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza."});return}g(),t(i,o,n).then(()=>{d({show:!0,title:"Zarejestrowano",message:"Za chwilę nastąpi przejście do strony głównej.",redirect:"/"}),setTimeout(()=>{e("/",{replace:!0})},5e3)}).catch(I=>{let N={show:!0,title:"Wystąpił błąd",message:"Serwis jest niedostępny. Spróbuj ponownie później"};I.message==="auth/email-already-in-use"&&(N.message="Podany e-mail jest już zajęty"),I.message==="auth/weak-password"&&(N.message="Podane hasło jest za słabe. Hasło powinno mieć co najmniej 6 znaków."),d(N),console.log(I)})},C=()=>{d(p_)};return p.jsxs(p.Fragment,{children:[p.jsxs("main",{className:ht.container,children:[p.jsxs("section",{className:"section",children:[p.jsx("h1",{children:"Zarejestruj się"}),p.jsx("h2",{children:"Wypełnij formularz rejestracyjny"}),p.jsxs("form",{onSubmit:E,className:ht.form,children:[p.jsxs("label",{children:[p.jsxs("p",{children:["Nazwa"," ",p.jsx("span",{className:ht.asterisk,children:"*"})]}),p.jsx(rn,{type:"text",id:"name",value:n,minLength:3,onInput:k,validateInput:Hd,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["E-mail"," ",p.jsx("span",{className:ht.asterisk,children:"*"})]}),p.jsx(rn,{type:"email",id:"email",value:i,minLength:3,onInput:y,validateInput:mM,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Hasło"," ",p.jsx("span",{className:ht.asterisk,children:"*"})]}),p.jsx(rn,{type:"password",id:"password",value:o,minLength:6,onInput:h,validateInput:Hd,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Powtórz Hasło"," ",p.jsx("span",{className:ht.asterisk,children:"*"})]}),p.jsx(rn,{type:"password",id:"confirmPassword",value:l,minLength:6,onInput:m,validateInput:Hd,setIsFormInvalid:w,required:!0})]}),p.jsx(en,{type:"submit",children:"Zapisz się"}),p.jsxs("p",{children:["Masz już konto?"," ",p.jsx(It,{to:"/logowanie",children:"Zaloguj się"})]})]})]}),c.show&&p.jsxs(Ps,{title:c.title,setShowModal:C,children:[p.jsx("p",{children:c.message}),c.redirect?p.jsx(vi,{to:c.redirect,className:ht["modal-button"],onClick:C,children:"Ok"}):p.jsx(en,{className:ht["modal-button"],onClick:C,children:"Ok"})]})]}),p.jsx(Mr,{})]})},vM=()=>{const{logout:t}=Ni(),e=Ia();return S.useEffect(()=>{t(),e("/",{replace:!0})},[t,e]),p.jsxs(p.Fragment,{children:[p.jsx("main",{children:p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 404"})}),p.jsx("div",{children:p.jsx("p",{children:"Nie znaleziono strony."})})]})}),p.jsx(Mr,{})]})},yM=()=>{const t=wn(),{currentPage:e,setCurrentPage:n}=S.useContext(Bt),{isShown:r}=S.useContext(Na);return S.useEffect(()=>{e!==t.pathname&&!r&&n(t.pathname)},[t,e,r,n]),p.jsxs(p.Fragment,{children:[!e.includes("/console")&&p.jsx(G1,{}),r&&p.jsx(lI,{}),p.jsx(Ww,{})]})},_M=()=>{const{uid:t}=Ni(),{data:e,response:n}=Nc(),[r,i]=S.useState(!1),[s,o]=S.useState([]),[a,l]=S.useState(!0),u=S.useMemo(()=>t?!0:!!sessionStorage.getItem("uid"),[t]);S.useEffect(()=>{n.isSuccess&&i(e.length>0)},[e,n]),S.useEffect(()=>{n.isSuccess&&o(e)},[e,n]),S.useEffect(()=>{if(u){l(!0);return}l(!1)},[u]);const c=Hx(vu(p.jsxs(Ge,{path:"/",element:p.jsx(yM,{}),children:[p.jsx(Ge,{index:!0,element:p.jsx(cP,{})}),p.jsxs(Ge,{path:"wiki",element:p.jsx(dP,{}),children:[p.jsx(Ge,{index:!0,element:p.jsx(IO,{})}),r&&s&&s.map((d,f)=>p.jsx(Ge,{path:d.address,element:p.jsx(rk,{item:d})},f))]}),p.jsx(Ge,{path:"console/*",element:a?p.jsx(sM,{}):p.jsx(Mx,{to:"/zabroniony",replace:!0})}),p.jsx(Ge,{path:"rejestracja",element:p.jsx(gM,{})}),p.jsx(Ge,{path:"logowanie",element:p.jsx(hM,{})}),p.jsx(Ge,{path:"wylogowanie",element:p.jsx(vM,{})}),p.jsx(Ge,{path:"zabroniony",element:p.jsx(aM,{})}),p.jsx(Ge,{path:"*",element:p.jsx(oM,{})})]})));return p.jsx(Lx,{router:c})},qk=({children:t})=>{const[e,n]=S.useState(window.innerWidth),[r,i]=S.useState(window.innerHeight),[s,o]=S.useState(document.location.pathname),[a,l]=S.useState(!1),u={width:e,height:r,currentPage:s,setCurrentPage:o,fullscreen:a,setFullscreen:l};return S.useEffect(()=>{const c=()=>{const f=document.documentElement;f.requestFullscreen?f.requestFullscreen():f.webkitRequestFullscreen?f.webkitRequestFullscreen():f.msRequestFullscreen&&f.msRequestFullscreen()},d=()=>{document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};a?c():document.fullscreenElement&&d()},[a]),S.useEffect(()=>{const c=()=>{n(window.innerWidth),i(window.innerHeight)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),p.jsx(Bt.Provider,{value:u,children:t})};qk.propTypes={children:R.any};const Qk=({children:t})=>{const[e,n]=S.useState(),r={isShown:e,setIsShown:n};return S.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.removeAttribute("style")},[e]),p.jsx(Na.Provider,{value:r,children:t})};Qk.propTypes={children:R.any};/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */(function(){if(typeof window<"u"&&window.addEventListener){var t=Object.create(null),e,n,r=function(){clearTimeout(n),n=setTimeout(e,100)},i=function(){},s=function(){var u;window.addEventListener("resize",r,!1),window.addEventListener("orientationchange",r,!1),window.MutationObserver?(u=new MutationObserver(r),u.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i=function(){try{u.disconnect(),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)}catch{}}):(document.documentElement.addEventListener("DOMSubtreeModified",r,!1),i=function(){document.documentElement.removeEventListener("DOMSubtreeModified",r,!1),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)})},o=function(u){function c(v){var w;return v.protocol!==void 0?w=v:(w=document.createElement("a"),w.href=v),w.protocol.replace(/:/g,"")+w.host}var d,f,_;return window.XMLHttpRequest&&(d=new XMLHttpRequest,f=c(location),_=c(u),d.withCredentials===void 0&&_!==""&&_!==f?d=XDomainRequest||void 0:d=XMLHttpRequest),d},a="http://www.w3.org/1999/xlink";e=function(){var u,c,d,f,_,v=0,w,k,y,h,m;function g(){v-=1,v===0&&(i(),s())}function E(I){return function(){t[I.base]!==!0&&(I.useEl.setAttributeNS(a,"xlink:href","#"+I.hash),I.useEl.hasAttribute("href")&&I.useEl.setAttribute("href","#"+I.hash))}}function C(I){return function(){var N=document.body,O=document.createElement("x"),$;I.onload=null,O.innerHTML=I.responseText,$=O.getElementsByTagName("svg")[0],$&&($.setAttribute("aria-hidden","true"),$.style.position="absolute",$.style.width=0,$.style.height=0,$.style.overflow="hidden",N.insertBefore($,N.firstChild)),g()}}function b(I){return function(){I.onerror=null,I.ontimeout=null,g()}}for(i(),h=document.getElementsByTagName("use"),_=0;_<h.length;_+=1){try{c=h[_].getBoundingClientRect()}catch{c=!1}f=h[_].getAttribute("href")||h[_].getAttributeNS(a,"href")||h[_].getAttribute("xlink:href"),f&&f.split?y=f.split("#"):y=["",""],u=y[0],d=y[1],w=c&&c.left===0&&c.right===0&&c.top===0&&c.bottom===0,c&&c.width===0&&c.height===0&&!w?(h[_].hasAttribute("href")&&h[_].setAttributeNS(a,"xlink:href",f),u.length&&(m=t[u],m!==!0&&setTimeout(E({useEl:h[_],base:u,hash:d}),0),m===void 0&&(k=o(u),k!==void 0&&(m=new k,t[u]=m,m.onload=C(m),m.onerror=b(m),m.ontimeout=b(m),m.open("GET",u),m.send(),v+=1)))):w?u.length&&t[u]&&setTimeout(E({useEl:h[_],base:u,hash:d}),0):t[u]===void 0?t[u]=!0:t[u].onload&&(t[u].abort(),delete t[u].onload,t[u]=!0)}h="",v+=1,g()};var l;l=function(){window.removeEventListener("load",l,!1),n=setTimeout(e,0)},document.readyState!=="complete"?window.addEventListener("load",l,!1):l()}})();Vd.createRoot(document.getElementById("root")).render(p.jsx(Ft.StrictMode,{children:p.jsx(qk,{children:p.jsx(Qk,{children:p.jsx(_M,{})})})}));
