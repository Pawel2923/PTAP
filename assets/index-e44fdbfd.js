function Zk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h_={exports:{}},Ku={},p_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),eS=Symbol.for("react.portal"),tS=Symbol.for("react.fragment"),nS=Symbol.for("react.strict_mode"),rS=Symbol.for("react.profiler"),iS=Symbol.for("react.provider"),sS=Symbol.for("react.context"),oS=Symbol.for("react.forward_ref"),aS=Symbol.for("react.suspense"),lS=Symbol.for("react.memo"),uS=Symbol.for("react.lazy"),eg=Symbol.iterator;function cS(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var m_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g_=Object.assign,v_={};function Os(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||m_}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y_(){}y_.prototype=Os.prototype;function Ah(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||m_}var Oh=Ah.prototype=new y_;Oh.constructor=Ah;g_(Oh,Os.prototype);Oh.isPureReactComponent=!0;var tg=Array.isArray,__=Object.prototype.hasOwnProperty,Lh={current:null},w_={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)__.call(e,r)&&!w_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Sa,type:t,key:s,ref:o,props:i,_owner:Lh.current}}function dS(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function fS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ng=/\/+/g;function Hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fS(""+t.key):e.toString(36)}function xl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case eS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hc(o,0):r,tg(i)?(n="",t!=null&&(n=t.replace(ng,"$&/")+"/"),xl(i,e,n,"",function(u){return u})):i!=null&&(Dh(i)&&(i=dS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hc(s,a);o+=xl(s,e,n,l,i)}else if(l=cS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hc(s,a++),o+=xl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return xl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Il={transition:null},pS={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Il,ReactCurrentOwner:Lh};te.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Os;te.Fragment=tS;te.Profiler=rS;te.PureComponent=Ah;te.StrictMode=nS;te.Suspense=aS;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)__.call(e,l)&&!w_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Sa,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:sS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iS,_context:t},t.Consumer=t};te.createElement=E_;te.createFactory=function(t){var e=E_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:oS,render:t}};te.isValidElement=Dh;te.lazy=function(t){return{$$typeof:uS,_payload:{_status:-1,_result:t},_init:hS}};te.memo=function(t,e){return{$$typeof:lS,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(t,e){return lt.current.useCallback(t,e)};te.useContext=function(t){return lt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};te.useEffect=function(t,e){return lt.current.useEffect(t,e)};te.useId=function(){return lt.current.useId()};te.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return lt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};te.useRef=function(t){return lt.current.useRef(t)};te.useState=function(t){return lt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return lt.current.useTransition()};te.version="18.2.0";p_.exports=te;var k=p_.exports;const Mt=qu(k),mS=Zk({__proto__:null,default:Mt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gS=k,vS=Symbol.for("react.element"),yS=Symbol.for("react.fragment"),_S=Object.prototype.hasOwnProperty,wS=gS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ES={key:!0,ref:!0,__self:!0,__source:!0};function k_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_S.call(e,r)&&!ES.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vS,type:t,key:s,ref:o,props:i,_owner:wS.current}}Ku.Fragment=yS;Ku.jsx=k_;Ku.jsxs=k_;h_.exports=Ku;var p=h_.exports,Vd={},S_={exports:{}},xt={},C_={exports:{}},b_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,z){var H=O.length;O.push(z);e:for(;0<H;){var ae=H-1>>>1,ie=O[ae];if(0<i(ie,z))O[ae]=z,O[H]=ie,H=ae;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var z=O[0],H=O.pop();if(H!==z){O[0]=H;e:for(var ae=0,ie=O.length,Yn=ie>>>1;ae<Yn;){var ne=2*(ae+1)-1,rt=O[ne],it=ne+1,Bt=O[it];if(0>i(rt,H))it<ie&&0>i(Bt,rt)?(O[ae]=Bt,O[it]=H,ae=it):(O[ae]=rt,O[ne]=H,ae=ne);else if(it<ie&&0>i(Bt,H))O[ae]=Bt,O[it]=H,ae=it;else break e}}return z}function i(O,z){var H=O.sortIndex-z.sortIndex;return H!==0?H:O.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,_=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=O)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function g(O){if(w=!1,m(O),!v)if(n(l)!==null)v=!0,nt(E);else{var z=n(u);z!==null&&wt(g,z.startTime-O)}}function E(O,z){v=!1,w&&(w=!1,y(I),I=-1),_=!0;var H=f;try{for(m(z),d=n(l);d!==null&&(!(d.expirationTime>z)||O&&!V());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,f=d.priorityLevel;var ie=ae(d.expirationTime<=z);z=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&r(l),m(z)}else r(l);d=n(l)}if(d!==null)var Yn=!0;else{var ne=n(u);ne!==null&&wt(g,ne.startTime-z),Yn=!1}return Yn}finally{d=null,f=H,_=!1}}var C=!1,b=null,I=-1,N=5,D=-1;function V(){return!(t.unstable_now()-D<N)}function Z(){if(b!==null){var O=t.unstable_now();D=O;var z=!0;try{z=b(!0,O)}finally{z?_t():(C=!1,b=null)}}else C=!1}var _t;if(typeof h=="function")_t=function(){h(Z)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,ln=Ht.port2;Ht.port1.onmessage=Z,_t=function(){ln.postMessage(null)}}else _t=function(){S(Z,0)};function nt(O){b=O,C||(C=!0,_t())}function wt(O,z){I=S(function(){O(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,nt(E))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var H=f;f=z;try{return O()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var H=f;f=O;try{return z()}finally{f=H}},t.unstable_scheduleCallback=function(O,z,H){var ae=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ae+H:ae):H=ae,O){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=H+ie,O={id:c++,callback:z,priorityLevel:O,startTime:H,expirationTime:ie,sortIndex:-1},H>ae?(O.sortIndex=H,e(u,O),n(l)===null&&O===n(u)&&(w?(y(I),I=-1):w=!0,wt(g,H-ae))):(O.sortIndex=ie,e(l,O),v||_||(v=!0,nt(E))),O},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(O){var z=f;return function(){var H=f;f=z;try{return O.apply(this,arguments)}finally{f=H}}}})(b_);C_.exports=b_;var kS=C_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_=k,bt=kS;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I_=new Set,Wo={};function ki(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(Wo[t]=e,t=0;t<e.length;t++)I_.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,SS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rg={},ig={};function CS(t){return Gd.call(ig,t)?!0:Gd.call(rg,t)?!1:SS.test(t)?ig[t]=!0:(rg[t]=!0,!1)}function bS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xS(t,e,n,r){if(e===null||typeof e>"u"||bS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mh=/[\-:]([a-z])/g;function jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mh,jh);Ke[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mh,jh);Ke[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mh,jh);Ke[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fh(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xS(e,n,i,r)&&(n=null),r||i===null?CS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=x_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Di=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),N_=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),R_=Symbol.for("react.offscreen"),sg=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Bc;function vo(t){if(Bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+t}var Vc=!1;function Gc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function IS(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=Gc(t.type,!1),t;case 11:return t=Gc(t.type.render,!1),t;case 1:return t=Gc(t.type,!0),t;default:return""}}function Qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case Di:return"Portal";case qd:return"Profiler";case zh:return"StrictMode";case Kd:return"Suspense";case Yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N_:return(t.displayName||"Context")+".Consumer";case T_:return(t._context.displayName||"Context")+".Provider";case Uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $h:return e=t.displayName||null,e!==null?e:Qd(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return Qd(t(e))}catch{}}return null}function TS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(e);case 8:return e===zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NS(t){var e=P_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=NS(t))}function A_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=P_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xd(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function O_(t,e){e=e.checked,e!=null&&Fh(t,"checked",e,!1)}function Jd(t,e){O_(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zd(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zd(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yo=Array.isArray;function es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(yo(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function L_(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,M_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RS=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(t){RS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bo[e]=bo[t]})});function j_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bo.hasOwnProperty(t)&&bo[t]?(""+e).trim():e+"px"}function F_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PS=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nf(t,e){if(e){if(PS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var of=null,ts=null,ns=null;function cg(t){if(t=xa(t)){if(typeof of!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Zu(e),of(t.stateNode,t.type,e))}}function z_(t){ts?ns?ns.push(t):ns=[t]:ts=t}function U_(){if(ts){var t=ts,e=ns;if(ns=ts=null,cg(t),e)for(t=0;t<e.length;t++)cg(e[t])}}function $_(t,e){return t(e)}function W_(){}var qc=!1;function H_(t,e,n){if(qc)return t(e,n);qc=!0;try{return $_(t,e,n)}finally{qc=!1,(ts!==null||ns!==null)&&(W_(),U_())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var af=!1;if(On)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){af=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{af=!1}function AS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var xo=!1,Kl=null,Yl=!1,lf=null,OS={onError:function(t){xo=!0,Kl=t}};function LS(t,e,n,r,i,s,o,a,l){xo=!1,Kl=null,AS.apply(OS,arguments)}function DS(t,e,n,r,i,s,o,a,l){if(LS.apply(this,arguments),xo){if(xo){var u=Kl;xo=!1,Kl=null}else throw Error(A(198));Yl||(Yl=!0,lf=u)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function B_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dg(t){if(Si(t)!==t)throw Error(A(188))}function MS(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dg(i),t;if(s===r)return dg(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function V_(t){return t=MS(t),t!==null?G_(t):null}function G_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G_(t);if(e!==null)return e;t=t.sibling}return null}var q_=bt.unstable_scheduleCallback,fg=bt.unstable_cancelCallback,jS=bt.unstable_shouldYield,FS=bt.unstable_requestPaint,Re=bt.unstable_now,zS=bt.unstable_getCurrentPriorityLevel,Hh=bt.unstable_ImmediatePriority,K_=bt.unstable_UserBlockingPriority,Ql=bt.unstable_NormalPriority,US=bt.unstable_LowPriority,Y_=bt.unstable_IdlePriority,Yu=null,pn=null;function $S(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Yu,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:BS,WS=Math.log,HS=Math.LN2;function BS(t){return t>>>=0,t===0?32:31-(WS(t)/HS|0)|0}var Ja=64,Za=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_o(a):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function VS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=VS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q_(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function Kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function qS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function X_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J_,Vh,Z_,e0,t0,cf=!1,el=[],hr=null,pr=null,mr=null,Vo=new Map,Go=new Map,ir=[],KS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hg(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function to(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xa(e),e!==null&&Vh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function YS(t,e,n,r,i){switch(e){case"focusin":return hr=to(hr,t,e,n,r,i),!0;case"dragenter":return pr=to(pr,t,e,n,r,i),!0;case"mouseover":return mr=to(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vo.set(s,to(Vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Go.set(s,to(Go.get(s)||null,t,e,n,r,i)),!0}return!1}function n0(t){var e=qr(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=B_(n),e!==null){t.blockedOn=e,t0(t.priority,function(){Z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sf=r,n.target.dispatchEvent(r),sf=null}else return e=xa(n),e!==null&&Vh(e),t.blockedOn=n,!1;e.shift()}return!0}function pg(t,e,n){Tl(t)&&n.delete(e)}function QS(){cf=!1,hr!==null&&Tl(hr)&&(hr=null),pr!==null&&Tl(pr)&&(pr=null),mr!==null&&Tl(mr)&&(mr=null),Vo.forEach(pg),Go.forEach(pg)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,cf||(cf=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,QS)))}function qo(t){function e(i){return no(i,t)}if(0<el.length){no(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&no(hr,t),pr!==null&&no(pr,t),mr!==null&&no(mr,t),Vo.forEach(e),Go.forEach(e),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)n0(n),n.blockedOn===null&&ir.shift()}var rs=Wn.ReactCurrentBatchConfig,Jl=!0;function XS(t,e,n,r){var i=oe,s=rs.transition;rs.transition=null;try{oe=1,Gh(t,e,n,r)}finally{oe=i,rs.transition=s}}function JS(t,e,n,r){var i=oe,s=rs.transition;rs.transition=null;try{oe=4,Gh(t,e,n,r)}finally{oe=i,rs.transition=s}}function Gh(t,e,n,r){if(Jl){var i=df(t,e,n,r);if(i===null)id(t,e,r,Zl,n),hg(t,r);else if(YS(i,t,e,n,r))r.stopPropagation();else if(hg(t,r),e&4&&-1<KS.indexOf(t)){for(;i!==null;){var s=xa(i);if(s!==null&&J_(s),s=df(t,e,n,r),s===null&&id(t,e,r,Zl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else id(t,e,r,null,n)}}var Zl=null;function df(t,e,n,r){if(Zl=null,t=Wh(r),t=qr(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=B_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function r0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zS()){case Hh:return 1;case K_:return 4;case Ql:case US:return 16;case Y_:return 536870912;default:return 16}default:return 16}}var ur=null,qh=null,Nl=null;function i0(){if(Nl)return Nl;var t,e=qh,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Nl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function mg(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:mg,this.isPropagationStopped=mg,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kh=It(Ls),ba=Ce({},Ls,{view:0,detail:0}),ZS=It(ba),Yc,Qc,ro,Qu=Ce({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Yc=t.screenX-ro.screenX,Qc=t.screenY-ro.screenY):Qc=Yc=0,ro=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),gg=It(Qu),eC=Ce({},Qu,{dataTransfer:0}),tC=It(eC),nC=Ce({},ba,{relatedTarget:0}),Xc=It(nC),rC=Ce({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),iC=It(rC),sC=Ce({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oC=It(sC),aC=Ce({},Ls,{data:0}),vg=It(aC),lC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cC[t])?!!e[t]:!1}function Yh(){return dC}var fC=Ce({},ba,{key:function(t){if(t.key){var e=lC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yh,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hC=It(fC),pC=Ce({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yg=It(pC),mC=Ce({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yh}),gC=It(mC),vC=Ce({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),yC=It(vC),_C=Ce({},Qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wC=It(_C),EC=[9,13,27,32],Qh=On&&"CompositionEvent"in window,Io=null;On&&"documentMode"in document&&(Io=document.documentMode);var kC=On&&"TextEvent"in window&&!Io,s0=On&&(!Qh||Io&&8<Io&&11>=Io),_g=String.fromCharCode(32),wg=!1;function o0(t,e){switch(t){case"keyup":return EC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ji=!1;function SC(t,e){switch(t){case"compositionend":return a0(e);case"keypress":return e.which!==32?null:(wg=!0,_g);case"textInput":return t=e.data,t===_g&&wg?null:t;default:return null}}function CC(t,e){if(ji)return t==="compositionend"||!Qh&&o0(t,e)?(t=i0(),Nl=qh=ur=null,ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return s0&&e.locale!=="ko"?null:e.data;default:return null}}var bC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bC[t.type]:e==="textarea"}function l0(t,e,n,r){z_(r),e=eu(e,"onChange"),0<e.length&&(n=new Kh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,Ko=null;function xC(t){_0(t,0)}function Xu(t){var e=Ui(t);if(A_(e))return t}function IC(t,e){if(t==="change")return e}var u0=!1;if(On){var Jc;if(On){var Zc="oninput"in document;if(!Zc){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),Zc=typeof kg.oninput=="function"}Jc=Zc}else Jc=!1;u0=Jc&&(!document.documentMode||9<document.documentMode)}function Sg(){To&&(To.detachEvent("onpropertychange",c0),Ko=To=null)}function c0(t){if(t.propertyName==="value"&&Xu(Ko)){var e=[];l0(e,Ko,t,Wh(t)),H_(xC,e)}}function TC(t,e,n){t==="focusin"?(Sg(),To=e,Ko=n,To.attachEvent("onpropertychange",c0)):t==="focusout"&&Sg()}function NC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xu(Ko)}function RC(t,e){if(t==="click")return Xu(e)}function PC(t,e){if(t==="input"||t==="change")return Xu(e)}function AC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:AC;function Yo(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gd.call(e,i)||!on(t[i],e[i]))return!1}return!0}function Cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bg(t,e){var n=Cg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cg(n)}}function d0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f0(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OC(t){var e=f0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d0(n.ownerDocument.documentElement,n)){if(r!==null&&Xh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bg(n,s);var o=bg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LC=On&&"documentMode"in document&&11>=document.documentMode,Fi=null,ff=null,No=null,hf=!1;function xg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hf||Fi==null||Fi!==ql(r)||(r=Fi,"selectionStart"in r&&Xh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&Yo(No,r)||(No=r,r=eu(ff,"onSelect"),0<r.length&&(e=new Kh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fi)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zi={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},ed={},h0={};On&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function Ju(t){if(ed[t])return ed[t];if(!zi[t])return t;var e=zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in h0)return ed[t]=e[n];return t}var p0=Ju("animationend"),m0=Ju("animationiteration"),g0=Ju("animationstart"),v0=Ju("transitionend"),y0=new Map,Ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){y0.set(t,e),ki(e,[t])}for(var td=0;td<Ig.length;td++){var nd=Ig[td],DC=nd.toLowerCase(),MC=nd[0].toUpperCase()+nd.slice(1);Or(DC,"on"+MC)}Or(p0,"onAnimationEnd");Or(m0,"onAnimationIteration");Or(g0,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(v0,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jC=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Tg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DS(r,e,void 0,t),t.currentTarget=null}function _0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Tg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Tg(i,a,u),s=l}}}if(Yl)throw t=lf,Yl=!1,lf=null,t}function ge(t,e){var n=e[yf];n===void 0&&(n=e[yf]=new Set);var r=t+"__bubble";n.has(r)||(w0(e,t,2,!1),n.add(r))}function rd(t,e,n){var r=0;e&&(r|=4),w0(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[rl]){t[rl]=!0,I_.forEach(function(n){n!=="selectionchange"&&(jC.has(n)||rd(n,!1,t),rd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,rd("selectionchange",!1,e))}}function w0(t,e,n,r){switch(r0(e)){case 1:var i=XS;break;case 4:i=JS;break;default:i=Gh}n=i.bind(null,e,n,t),i=void 0,!af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function id(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}H_(function(){var u=s,c=Wh(n),d=[];e:{var f=y0.get(t);if(f!==void 0){var _=Kh,v=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":_=hC;break;case"focusin":v="focus",_=Xc;break;case"focusout":v="blur",_=Xc;break;case"beforeblur":case"afterblur":_=Xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=tC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=gC;break;case p0:case m0:case g0:_=iC;break;case v0:_=yC;break;case"scroll":_=ZS;break;case"wheel":_=wC;break;case"copy":case"cut":case"paste":_=oC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=yg}var w=(e&4)!==0,S=!w&&t==="scroll",y=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,m;h!==null;){m=h;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,y!==null&&(g=Bo(h,y),g!=null&&w.push(Xo(h,g,m)))),S)break;h=h.return}0<w.length&&(f=new _(f,v,null,n,c),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==sf&&(v=n.relatedTarget||n.fromElement)&&(qr(v)||v[Ln]))break e;if((_||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?qr(v):null,v!==null&&(S=Si(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(w=gg,g="onMouseLeave",y="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=yg,g="onPointerLeave",y="onPointerEnter",h="pointer"),S=_==null?f:Ui(_),m=v==null?f:Ui(v),f=new w(g,h+"leave",_,n,c),f.target=S,f.relatedTarget=m,g=null,qr(c)===u&&(w=new w(y,h+"enter",v,n,c),w.target=m,w.relatedTarget=S,g=w),S=g,_&&v)t:{for(w=_,y=v,h=0,m=w;m;m=Ri(m))h++;for(m=0,g=y;g;g=Ri(g))m++;for(;0<h-m;)w=Ri(w),h--;for(;0<m-h;)y=Ri(y),m--;for(;h--;){if(w===y||y!==null&&w===y.alternate)break t;w=Ri(w),y=Ri(y)}w=null}else w=null;_!==null&&Ng(d,f,_,w,!1),v!==null&&S!==null&&Ng(d,S,v,w,!0)}}e:{if(f=u?Ui(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var E=IC;else if(Eg(f))if(u0)E=PC;else{E=NC;var C=TC}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=RC);if(E&&(E=E(t,u))){l0(d,E,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Zd(f,"number",f.value)}switch(C=u?Ui(u):window,t){case"focusin":(Eg(C)||C.contentEditable==="true")&&(Fi=C,ff=u,No=null);break;case"focusout":No=ff=Fi=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,xg(d,n,c);break;case"selectionchange":if(LC)break;case"keydown":case"keyup":xg(d,n,c)}var b;if(Qh)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ji?o0(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(s0&&n.locale!=="ko"&&(ji||I!=="onCompositionStart"?I==="onCompositionEnd"&&ji&&(b=i0()):(ur=c,qh="value"in ur?ur.value:ur.textContent,ji=!0)),C=eu(u,I),0<C.length&&(I=new vg(I,t,null,n,c),d.push({event:I,listeners:C}),b?I.data=b:(b=a0(n),b!==null&&(I.data=b)))),(b=kC?SC(t,n):CC(t,n))&&(u=eu(u,"onBeforeInput"),0<u.length&&(c=new vg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}_0(d,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bo(t,n),s!=null&&r.unshift(Xo(t,s,i)),s=Bo(t,e),s!=null&&r.push(Xo(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ng(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Bo(n,s),l!=null&&o.unshift(Xo(n,l,a))):i||(l=Bo(n,s),l!=null&&o.push(Xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FC=/\r\n?/g,zC=/\u0000|\uFFFD/g;function Rg(t){return(typeof t=="string"?t:""+t).replace(FC,`
`).replace(zC,"")}function il(t,e,n){if(e=Rg(e),Rg(t)!==e&&n)throw Error(A(425))}function tu(){}var pf=null,mf=null;function gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,UC=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,$C=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(t){return Pg.resolve(null).then(t).catch(WC)}:vf;function WC(t){setTimeout(function(){throw t})}function sd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qo(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),dn="__reactFiber$"+Ds,Jo="__reactProps$"+Ds,Ln="__reactContainer$"+Ds,yf="__reactEvents$"+Ds,HC="__reactListeners$"+Ds,BC="__reactHandles$"+Ds;function qr(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ag(t);t!==null;){if(n=t[dn])return n;t=Ag(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[dn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Zu(t){return t[Jo]||null}var _f=[],$i=-1;function Lr(t){return{current:t}}function ye(t){0>$i||(t.current=_f[$i],_f[$i]=null,$i--)}function me(t,e){$i++,_f[$i]=t.current,t.current=e}var Ir={},et=Lr(Ir),gt=Lr(!1),si=Ir;function ms(t,e){var n=t.type.contextTypes;if(!n)return Ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function nu(){ye(gt),ye(et)}function Og(t,e,n){if(et.current!==Ir)throw Error(A(168));me(et,e),me(gt,n)}function E0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,TS(t)||"Unknown",i));return Ce({},n,r)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,si=et.current,me(et,t),me(gt,gt.current),!0}function Lg(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=E0(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,ye(gt),ye(et),me(et,t)):ye(gt),me(gt,n)}var Sn=null,ec=!1,od=!1;function k0(t){Sn===null?Sn=[t]:Sn.push(t)}function VC(t){ec=!0,k0(t)}function Dr(){if(!od&&Sn!==null){od=!0;var t=0,e=oe;try{var n=Sn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,ec=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),q_(Hh,Dr),i}finally{oe=e,od=!1}}return null}var Wi=[],Hi=0,iu=null,su=0,At=[],Ot=0,oi=null,bn=1,xn="";function Hr(t,e){Wi[Hi++]=su,Wi[Hi++]=iu,iu=t,su=e}function S0(t,e,n){At[Ot++]=bn,At[Ot++]=xn,At[Ot++]=oi,oi=t;var r=bn;t=xn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bn=1<<32-nn(e)+i|n<<i|r,xn=s+t}else bn=1<<s|n<<i|r,xn=t}function Jh(t){t.return!==null&&(Hr(t,1),S0(t,1,0))}function Zh(t){for(;t===iu;)iu=Wi[--Hi],Wi[Hi]=null,su=Wi[--Hi],Wi[Hi]=null;for(;t===oi;)oi=At[--Ot],At[Ot]=null,xn=At[--Ot],At[Ot]=null,bn=At[--Ot],At[Ot]=null}var Ct=null,kt=null,Ee=!1,Qt=null;function C0(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,kt=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:bn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,kt=null,!0):!1;default:return!1}}function wf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ef(t){if(Ee){var e=kt;if(e){var n=e;if(!Dg(t,e)){if(wf(t))throw Error(A(418));e=gr(n.nextSibling);var r=Ct;e&&Dg(t,e)?C0(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Ct=t)}}else{if(wf(t))throw Error(A(418));t.flags=t.flags&-4097|2,Ee=!1,Ct=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function sl(t){if(t!==Ct)return!1;if(!Ee)return Mg(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gf(t.type,t.memoizedProps)),e&&(e=kt)){if(wf(t))throw b0(),Error(A(418));for(;e;)C0(t,e),e=gr(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Ct?gr(t.stateNode.nextSibling):null;return!0}function b0(){for(var t=kt;t;)t=gr(t.nextSibling)}function gs(){kt=Ct=null,Ee=!1}function ep(t){Qt===null?Qt=[t]:Qt.push(t)}var GC=Wn.ReactCurrentBatchConfig;function qt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ou=Lr(null),au=null,Bi=null,tp=null;function np(){tp=Bi=au=null}function rp(t){var e=ou.current;ye(ou),t._currentValue=e}function kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function is(t,e){au=t,tp=Bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(tp!==t)if(t={context:t,memoizedValue:e,next:null},Bi===null){if(au===null)throw Error(A(308));Bi=t,au.dependencies={lanes:0,firstContext:t}}else Bi=Bi.next=t;return e}var Kr=null;function ip(t){Kr===null?Kr=[t]:Kr.push(t)}function x0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dn(t,n)}return i=r.interleaved,i===null?(e.next=e,ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dn(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bh(t,n)}}function jg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,r){var i=t.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,_=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(f=e,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(_,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(_,d,f):v,f==null)break e;d=Ce({},d,f);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=_,l=d):c=c.next=_,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=d}}function Fg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var T0=new x_.Component().refs;function Sf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=_r(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(rn(e,t,i,r),Pl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=_r(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(rn(e,t,i,r),Pl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=_r(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(rn(e,t,r,n),Pl(e,t,r))}};function zg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,r)||!Yo(i,s):!0}function N0(t,e,n){var r=!1,i=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=vt(e)?si:et.current,r=e.contextTypes,s=(r=r!=null)?ms(t,i):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ug(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function Cf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=T0,sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=vt(e)?si:et.current,i.context=ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tc.enqueueReplaceState(i,i.state,null),lu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===T0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $g(t){var e=t._init;return e(t._payload)}function R0(t){function e(y,h){if(t){var m=y.deletions;m===null?(y.deletions=[h],y.flags|=16):m.push(h)}}function n(y,h){if(!t)return null;for(;h!==null;)e(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function i(y,h){return y=wr(y,h),y.index=0,y.sibling=null,y}function s(y,h,m){return y.index=m,t?(m=y.alternate,m!==null?(m=m.index,m<h?(y.flags|=2,h):m):(y.flags|=2,h)):(y.flags|=1048576,h)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,h,m,g){return h===null||h.tag!==6?(h=hd(m,y.mode,g),h.return=y,h):(h=i(h,m),h.return=y,h)}function l(y,h,m,g){var E=m.type;return E===Mi?c(y,h,m.props.children,g,m.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&$g(E)===h.type)?(g=i(h,m.props),g.ref=io(y,h,m),g.return=y,g):(g=jl(m.type,m.key,m.props,null,y.mode,g),g.ref=io(y,h,m),g.return=y,g)}function u(y,h,m,g){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=pd(m,y.mode,g),h.return=y,h):(h=i(h,m.children||[]),h.return=y,h)}function c(y,h,m,g,E){return h===null||h.tag!==7?(h=ni(m,y.mode,g,E),h.return=y,h):(h=i(h,m),h.return=y,h)}function d(y,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=hd(""+h,y.mode,m),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ya:return m=jl(h.type,h.key,h.props,null,y.mode,m),m.ref=io(y,null,h),m.return=y,m;case Di:return h=pd(h,y.mode,m),h.return=y,h;case tr:var g=h._init;return d(y,g(h._payload),m)}if(yo(h)||Zs(h))return h=ni(h,y.mode,m,null),h.return=y,h;ol(y,h)}return null}function f(y,h,m,g){var E=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(y,h,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ya:return m.key===E?l(y,h,m,g):null;case Di:return m.key===E?u(y,h,m,g):null;case tr:return E=m._init,f(y,h,E(m._payload),g)}if(yo(m)||Zs(m))return E!==null?null:c(y,h,m,g,null);ol(y,m)}return null}function _(y,h,m,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return y=y.get(m)||null,a(h,y,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ya:return y=y.get(g.key===null?m:g.key)||null,l(h,y,g,E);case Di:return y=y.get(g.key===null?m:g.key)||null,u(h,y,g,E);case tr:var C=g._init;return _(y,h,m,C(g._payload),E)}if(yo(g)||Zs(g))return y=y.get(m)||null,c(h,y,g,E,null);ol(h,g)}return null}function v(y,h,m,g){for(var E=null,C=null,b=h,I=h=0,N=null;b!==null&&I<m.length;I++){b.index>I?(N=b,b=null):N=b.sibling;var D=f(y,b,m[I],g);if(D===null){b===null&&(b=N);break}t&&b&&D.alternate===null&&e(y,b),h=s(D,h,I),C===null?E=D:C.sibling=D,C=D,b=N}if(I===m.length)return n(y,b),Ee&&Hr(y,I),E;if(b===null){for(;I<m.length;I++)b=d(y,m[I],g),b!==null&&(h=s(b,h,I),C===null?E=b:C.sibling=b,C=b);return Ee&&Hr(y,I),E}for(b=r(y,b);I<m.length;I++)N=_(b,y,I,m[I],g),N!==null&&(t&&N.alternate!==null&&b.delete(N.key===null?I:N.key),h=s(N,h,I),C===null?E=N:C.sibling=N,C=N);return t&&b.forEach(function(V){return e(y,V)}),Ee&&Hr(y,I),E}function w(y,h,m,g){var E=Zs(m);if(typeof E!="function")throw Error(A(150));if(m=E.call(m),m==null)throw Error(A(151));for(var C=E=null,b=h,I=h=0,N=null,D=m.next();b!==null&&!D.done;I++,D=m.next()){b.index>I?(N=b,b=null):N=b.sibling;var V=f(y,b,D.value,g);if(V===null){b===null&&(b=N);break}t&&b&&V.alternate===null&&e(y,b),h=s(V,h,I),C===null?E=V:C.sibling=V,C=V,b=N}if(D.done)return n(y,b),Ee&&Hr(y,I),E;if(b===null){for(;!D.done;I++,D=m.next())D=d(y,D.value,g),D!==null&&(h=s(D,h,I),C===null?E=D:C.sibling=D,C=D);return Ee&&Hr(y,I),E}for(b=r(y,b);!D.done;I++,D=m.next())D=_(b,y,I,D.value,g),D!==null&&(t&&D.alternate!==null&&b.delete(D.key===null?I:D.key),h=s(D,h,I),C===null?E=D:C.sibling=D,C=D);return t&&b.forEach(function(Z){return e(y,Z)}),Ee&&Hr(y,I),E}function S(y,h,m,g){if(typeof m=="object"&&m!==null&&m.type===Mi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ya:e:{for(var E=m.key,C=h;C!==null;){if(C.key===E){if(E=m.type,E===Mi){if(C.tag===7){n(y,C.sibling),h=i(C,m.props.children),h.return=y,y=h;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&$g(E)===C.type){n(y,C.sibling),h=i(C,m.props),h.ref=io(y,C,m),h.return=y,y=h;break e}n(y,C);break}else e(y,C);C=C.sibling}m.type===Mi?(h=ni(m.props.children,y.mode,g,m.key),h.return=y,y=h):(g=jl(m.type,m.key,m.props,null,y.mode,g),g.ref=io(y,h,m),g.return=y,y=g)}return o(y);case Di:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(y,h.sibling),h=i(h,m.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else e(y,h);h=h.sibling}h=pd(m,y.mode,g),h.return=y,y=h}return o(y);case tr:return C=m._init,S(y,h,C(m._payload),g)}if(yo(m))return v(y,h,m,g);if(Zs(m))return w(y,h,m,g);ol(y,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(y,h.sibling),h=i(h,m),h.return=y,y=h):(n(y,h),h=hd(m,y.mode,g),h.return=y,y=h),o(y)):n(y,h)}return S}var vs=R0(!0),P0=R0(!1),Ia={},mn=Lr(Ia),Zo=Lr(Ia),ea=Lr(Ia);function Yr(t){if(t===Ia)throw Error(A(174));return t}function op(t,e){switch(me(ea,e),me(Zo,t),me(mn,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tf(e,t)}ye(mn),me(mn,e)}function ys(){ye(mn),ye(Zo),ye(ea)}function A0(t){Yr(ea.current);var e=Yr(mn.current),n=tf(e,t.type);e!==n&&(me(Zo,t),me(mn,n))}function ap(t){Zo.current===t&&(ye(mn),ye(Zo))}var ke=Lr(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ad=[];function lp(){for(var t=0;t<ad.length;t++)ad[t]._workInProgressVersionPrimary=null;ad.length=0}var Al=Wn.ReactCurrentDispatcher,ld=Wn.ReactCurrentBatchConfig,ai=0,Se=null,De=null,Ue=null,cu=!1,Ro=!1,ta=0,qC=0;function Xe(){throw Error(A(321))}function up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function cp(t,e,n,r,i,s){if(ai=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?XC:JC,t=n(r,i),Ro){s=0;do{if(Ro=!1,ta=0,25<=s)throw Error(A(301));s+=1,Ue=De=null,e.updateQueue=null,Al.current=ZC,t=n(r,i)}while(Ro)}if(Al.current=du,e=De!==null&&De.next!==null,ai=0,Ue=De=Se=null,cu=!1,e)throw Error(A(300));return t}function dp(){var t=ta!==0;return ta=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Se.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ut(){if(De===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Ue===null?Se.memoizedState:Ue.next;if(e!==null)Ue=e,De=t;else{if(t===null)throw Error(A(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?Se.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function na(t,e){return typeof e=="function"?e(t):e}function ud(t){var e=Ut(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ai&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Se.lanes|=c,li|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,on(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cd(t){var e=Ut(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function O0(){}function L0(t,e){var n=Se,r=Ut(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,fp(j0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,ra(9,M0.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(A(349));ai&30||D0(n,e,i)}return i}function D0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function M0(t,e,n,r){e.value=n,e.getSnapshot=r,F0(e)&&z0(t)}function j0(t,e,n){return n(function(){F0(e)&&z0(t)})}function F0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function z0(t){var e=Dn(t,1);e!==null&&rn(e,t,1,-1)}function Wg(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=QC.bind(null,Se,t),[e.memoizedState,t]}function ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function U0(){return Ut().memoizedState}function Ol(t,e,n,r){var i=cn();Se.flags|=t,i.memoizedState=ra(1|e,n,void 0,r===void 0?null:r)}function nc(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&up(r,o.deps)){i.memoizedState=ra(e,n,s,r);return}}Se.flags|=t,i.memoizedState=ra(1|e,n,s,r)}function Hg(t,e){return Ol(8390656,8,t,e)}function fp(t,e){return nc(2048,8,t,e)}function $0(t,e){return nc(4,2,t,e)}function W0(t,e){return nc(4,4,t,e)}function H0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B0(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,H0.bind(null,e,t),n)}function hp(){}function V0(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function G0(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function q0(t,e,n){return ai&21?(on(n,e)||(n=Q_(),Se.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function KC(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=ld.transition;ld.transition={};try{t(!1),e()}finally{oe=n,ld.transition=r}}function K0(){return Ut().memoizedState}function YC(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Y0(t))Q0(e,n);else if(n=x0(t,e,n,r),n!==null){var i=ot();rn(n,t,r,i),X0(n,e,r)}}function QC(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y0(t))Q0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var l=e.interleaved;l===null?(i.next=i,ip(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=x0(t,e,i,r),n!==null&&(i=ot(),rn(n,t,r,i),X0(n,e,r))}}function Y0(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function Q0(t,e){Ro=cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function X0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bh(t,n)}}var du={readContext:zt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},XC={readContext:zt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,H0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YC.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:Wg,useDebugValue:hp,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=Wg(!1),e=t[0];return t=KC.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=cn();if(Ee){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Be===null)throw Error(A(349));ai&30||D0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hg(j0.bind(null,r,s,t),[t]),r.flags|=2048,ra(9,M0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=Be.identifierPrefix;if(Ee){var n=xn,r=bn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JC={readContext:zt,useCallback:V0,useContext:zt,useEffect:fp,useImperativeHandle:B0,useInsertionEffect:$0,useLayoutEffect:W0,useMemo:G0,useReducer:ud,useRef:U0,useState:function(){return ud(na)},useDebugValue:hp,useDeferredValue:function(t){var e=Ut();return q0(e,De.memoizedState,t)},useTransition:function(){var t=ud(na)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:L0,useId:K0,unstable_isNewReconciler:!1},ZC={readContext:zt,useCallback:V0,useContext:zt,useEffect:fp,useImperativeHandle:B0,useInsertionEffect:$0,useLayoutEffect:W0,useMemo:G0,useReducer:cd,useRef:U0,useState:function(){return cd(na)},useDebugValue:hp,useDeferredValue:function(t){var e=Ut();return De===null?e.memoizedState=t:q0(e,De.memoizedState,t)},useTransition:function(){var t=cd(na)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:L0,useId:K0,unstable_isNewReconciler:!1};function _s(t,e){try{var n="",r=e;do n+=IS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eb=typeof WeakMap=="function"?WeakMap:Map;function J0(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hu||(hu=!0,Df=r),bf(t,e)},n}function Z0(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Bg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pb.bind(null,t,e,n),e.then(t,t))}function Vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var tb=Wn.ReactCurrentOwner,ht=!1;function st(t,e,n,r){e.child=t===null?P0(e,null,n,r):vs(e,t.child,n,r)}function qg(t,e,n,r,i){n=n.render;var s=e.ref;return is(e,i),r=cp(t,e,n,r,s,i),n=dp(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Ee&&n&&Jh(e),e.flags|=1,st(t,e,r,i),e.child)}function Kg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ew(t,e,s,r,i)):(t=jl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function ew(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yo(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return xf(t,e,n,r,i)}function tw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Gi,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Gi,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(Gi,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(Gi,Et),Et|=r;return st(t,e,i,n),e.child}function nw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,r,i){var s=vt(n)?si:et.current;return s=ms(e,s),is(e,i),n=cp(t,e,n,r,s,i),r=dp(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Ee&&r&&Jh(e),e.flags|=1,st(t,e,n,i),e.child)}function Yg(t,e,n,r,i){if(vt(n)){var s=!0;ru(e)}else s=!1;if(is(e,i),e.stateNode===null)Ll(t,e),N0(e,n,r),Cf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zt(u):(u=vt(n)?si:et.current,u=ms(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ug(e,o,r,u),nr=!1;var f=e.memoizedState;o.state=f,lu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||gt.current||nr?(typeof c=="function"&&(Sf(e,n,c,r),l=e.memoizedState),(a=nr||zg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,I0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zt(l):(l=vt(n)?si:et.current,l=ms(e,l));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ug(e,o,r,l),nr=!1,f=e.memoizedState,o.state=f,lu(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||gt.current||nr?(typeof _=="function"&&(Sf(e,n,_,r),v=e.memoizedState),(u=nr||zg(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return If(t,e,n,r,s,i)}function If(t,e,n,r,i,s){nw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lg(e,n,!1),Mn(t,e,s);r=e.stateNode,tb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):st(t,e,a,s),e.memoizedState=r.state,i&&Lg(e,n,!0),e.child}function rw(t){var e=t.stateNode;e.pendingContext?Og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Og(t,e.context,!1),op(t,e.containerInfo)}function Qg(t,e,n,r,i){return gs(),ep(i),e.flags|=256,st(t,e,n,r),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function iw(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(ke,i&1),t===null)return Ef(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sc(o,r,0,null),t=ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nf(n),e.memoizedState=Tf,t):pp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return nb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=wr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tf,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pp(t,e){return e=sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&ep(r),vs(e,t.child,null,n),t=pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dd(Error(A(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sc({mode:"visible",children:r.children},i,0,null),s=ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=Nf(o),e.memoizedState=Tf,s);if(!(e.mode&1))return al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=dd(s,r,void 0),al(t,e,o,r)}if(a=(o&t.childLanes)!==0,ht||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(t,i),rn(r,t,i,-1))}return wp(),r=dd(Error(A(421))),al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=gr(i.nextSibling),Ct=e,Ee=!0,Qt=null,t!==null&&(At[Ot++]=bn,At[Ot++]=xn,At[Ot++]=oi,bn=t.id,xn=t.overflow,oi=e),e=pp(e,r.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kf(t.return,e,n)}function fd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fd(e,!0,n,null,s);break;case"together":fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rb(t,e,n){switch(e.tag){case 3:rw(e),gs();break;case 5:A0(e);break;case 1:vt(e.type)&&ru(e);break;case 4:op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(ou,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?iw(t,e,n):(me(ke,ke.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);me(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,tw(t,e,n)}return Mn(t,e,n)}var ow,Rf,aw,lw;ow=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};aw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yr(mn.current);var s=null;switch(n){case"input":i=Xd(t,i),r=Xd(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=ef(t,i),r=ef(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tu)}nf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lw=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ib(t,e,n){var r=e.pendingProps;switch(Zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return vt(e.type)&&nu(),Je(e),null;case 3:return r=e.stateNode,ys(),ye(gt),ye(et),lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(Ff(Qt),Qt=null))),Rf(t,e),Je(e),null;case 5:ap(e);var i=Yr(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)aw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Je(e),null}if(t=Yr(mn.current),sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<wo.length;i++)ge(wo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":og(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":lg(r,s),ge("invalid",r)}nf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,t),i=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Qa(r),ag(r,s,!0);break;case"textarea":Qa(r),ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[Jo]=r,ow(t,e,!1,!1),e.stateNode=t;e:{switch(o=rf(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)ge(wo[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":og(t,r),i=Xd(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ge("invalid",t);break;case"textarea":lg(t,r),i=ef(t,r),ge("invalid",t);break;default:i=r}nf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?F_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&M_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&Fh(t,s,l,o))}switch(n){case"input":Qa(t),ag(t,r,!1);break;case"textarea":Qa(t),ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?es(t,!!r.multiple,s,!1):r.defaultValue!=null&&es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)lw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Yr(ea.current),Yr(mn.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return Je(e),null;case 13:if(ye(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&kt!==null&&e.mode&1&&!(e.flags&128))b0(),gs(),e.flags|=98560,s=!1;else if(s=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[dn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Qt!==null&&(Ff(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Me===0&&(Me=3):wp())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return ys(),Rf(t,e),t===null&&Qo(e.stateNode.containerInfo),Je(e),null;case 10:return rp(e.type._context),Je(e),null;case 17:return vt(e.type)&&nu(),Je(e),null;case 19:if(ye(ke),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)so(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,so(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>ws&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304)}else{if(!r)if(t=uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return Je(e),null}else 2*Re()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=ke.current,me(ke,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return _p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function sb(t,e){switch(Zh(e),e.tag){case 1:return vt(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),ye(gt),ye(et),lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ap(e),null;case 13:if(ye(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(ke),null;case 4:return ys(),null;case 10:return rp(e.type._context),null;case 22:case 23:return _p(),null;case 24:return null;default:return null}}var ll=!1,Ze=!1,ob=typeof WeakSet=="function"?WeakSet:Set,j=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Pf(t,e,n){try{n()}catch(r){be(t,e,r)}}var Jg=!1;function ab(t,e){if(pf=Jl,t=f0(),Xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)f=d,d=_;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(_=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:t,selectionRange:n},Jl=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,y=e.stateNode,h=y.getSnapshotBeforeUpdate(e.elementType===e.type?w:qt(e.type,w),S);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(g){be(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return v=Jg,Jg=!1,v}function Po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pf(e,n,s)}i=i.next}while(i!==r)}}function rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uw(t){var e=t.alternate;e!==null&&(t.alternate=null,uw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Jo],delete e[yf],delete e[HC],delete e[BC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cw(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(r!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var Ve=null,Kt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)dw(t,e,n),n=n.sibling}function dw(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Yu,n)}catch{}switch(n.tag){case 5:Ze||Vi(n,e);case 6:var r=Ve,i=Kt;Ve=null,Jn(t,e,n),Ve=r,Kt=i,Ve!==null&&(Kt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Kt?(t=Ve,n=n.stateNode,t.nodeType===8?sd(t.parentNode,n):t.nodeType===1&&sd(t,n),qo(t)):sd(Ve,n.stateNode));break;case 4:r=Ve,i=Kt,Ve=n.stateNode.containerInfo,Kt=!0,Jn(t,e,n),Ve=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pf(n,e,o),i=i.next}while(i!==r)}Jn(t,e,n);break;case 1:if(!Ze&&(Vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Jn(t,e,n),Ze=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ob),e.forEach(function(r){var i=gb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,Kt=!1;break e;case 3:Ve=a.stateNode.containerInfo,Kt=!0;break e;case 4:Ve=a.stateNode.containerInfo,Kt=!0;break e}a=a.return}if(Ve===null)throw Error(A(160));dw(s,o,i),Ve=null,Kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fw(e,t),e=e.sibling}function fw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),un(t),r&4){try{Po(3,t,t.return),rc(3,t)}catch(w){be(t,t.return,w)}try{Po(5,t,t.return)}catch(w){be(t,t.return,w)}}break;case 1:Gt(e,t),un(t),r&512&&n!==null&&Vi(n,n.return);break;case 5:if(Gt(e,t),un(t),r&512&&n!==null&&Vi(n,n.return),t.flags&32){var i=t.stateNode;try{Ho(i,"")}catch(w){be(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&O_(i,s),rf(a,o);var u=rf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?F_(i,d):c==="dangerouslySetInnerHTML"?M_(i,d):c==="children"?Ho(i,d):Fh(i,c,d,u)}switch(a){case"input":Jd(i,s);break;case"textarea":L_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?es(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?es(i,!!s.multiple,s.defaultValue,!0):es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jo]=s}catch(w){be(t,t.return,w)}}break;case 6:if(Gt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){be(t,t.return,w)}}break;case 3:if(Gt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(w){be(t,t.return,w)}break;case 4:Gt(e,t),un(t);break;case 13:Gt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vp=Re())),r&4&&ev(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(u=Ze)||c,Gt(e,t),Ze=u):Gt(e,t),un(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(d=j=c;j!==null;){switch(f=j,_=f.child,f.tag){case 0:case 11:case 14:case 15:Po(4,f,f.return);break;case 1:Vi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){be(r,n,w)}}break;case 5:Vi(f,f.return);break;case 22:if(f.memoizedState!==null){nv(d);continue}}_!==null?(_.return=f,j=_):nv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j_("display",o))}catch(w){be(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){be(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gt(e,t),un(t),r&4&&ev(t);break;case 21:break;default:Gt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cw(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ho(i,""),r.flags&=-33);var s=Zg(t);Lf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zg(t);Of(t,a,o);break;default:throw Error(A(161))}}catch(l){be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lb(t,e,n){j=t,hw(t)}function hw(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=ll;var u=Ze;if(ll=o,(Ze=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?rv(i):l!==null?(l.return=o,j=l):rv(i);for(;s!==null;)j=s,hw(s),s=s.sibling;j=i,ll=a,Ze=u}tv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):tv(t)}}function tv(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||rc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&qo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ze||e.flags&512&&Af(e)}catch(f){be(e,e.return,f)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function nv(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function rv(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rc(4,e)}catch(l){be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){be(e,i,l)}}var s=e.return;try{Af(e)}catch(l){be(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){be(e,o,l)}}}catch(l){be(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var ub=Math.ceil,fu=Wn.ReactCurrentDispatcher,mp=Wn.ReactCurrentOwner,jt=Wn.ReactCurrentBatchConfig,re=0,Be=null,Ae=null,qe=0,Et=0,Gi=Lr(0),Me=0,ia=null,li=0,ic=0,gp=0,Ao=null,ft=null,vp=0,ws=1/0,kn=null,hu=!1,Df=null,yr=null,ul=!1,cr=null,pu=0,Oo=0,Mf=null,Dl=-1,Ml=0;function ot(){return re&6?Re():Dl!==-1?Dl:Dl=Re()}function _r(t){return t.mode&1?re&2&&qe!==0?qe&-qe:GC.transition!==null?(Ml===0&&(Ml=Q_()),Ml):(t=oe,t!==0||(t=window.event,t=t===void 0?16:r0(t.type)),t):1}function rn(t,e,n,r){if(50<Oo)throw Oo=0,Mf=null,Error(A(185));Ca(t,n,r),(!(re&2)||t!==Be)&&(t===Be&&(!(re&2)&&(ic|=n),Me===4&&sr(t,qe)),yt(t,r),n===1&&re===0&&!(e.mode&1)&&(ws=Re()+500,ec&&Dr()))}function yt(t,e){var n=t.callbackNode;GS(t,e);var r=Xl(t,t===Be?qe:0);if(r===0)n!==null&&fg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fg(n),e===1)t.tag===0?VC(iv.bind(null,t)):k0(iv.bind(null,t)),$C(function(){!(re&6)&&Dr()}),n=null;else{switch(X_(r)){case 1:n=Hh;break;case 4:n=K_;break;case 16:n=Ql;break;case 536870912:n=Y_;break;default:n=Ql}n=Ew(n,pw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pw(t,e){if(Dl=-1,Ml=0,re&6)throw Error(A(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var r=Xl(t,t===Be?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mu(t,r);else{e=r;var i=re;re|=2;var s=gw();(Be!==t||qe!==e)&&(kn=null,ws=Re()+500,ti(t,e));do try{fb();break}catch(a){mw(t,a)}while(1);np(),fu.current=s,re=i,Ae!==null?e=0:(Be=null,qe=0,e=Me)}if(e!==0){if(e===2&&(i=uf(t),i!==0&&(r=i,e=jf(t,i))),e===1)throw n=ia,ti(t,0),sr(t,r),yt(t,Re()),n;if(e===6)sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!cb(i)&&(e=mu(t,r),e===2&&(s=uf(t),s!==0&&(r=s,e=jf(t,s))),e===1))throw n=ia,ti(t,0),sr(t,r),yt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Br(t,ft,kn);break;case 3:if(sr(t,r),(r&130023424)===r&&(e=vp+500-Re(),10<e)){if(Xl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vf(Br.bind(null,t,ft,kn),e);break}Br(t,ft,kn);break;case 4:if(sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ub(r/1960))-r,10<r){t.timeoutHandle=vf(Br.bind(null,t,ft,kn),r);break}Br(t,ft,kn);break;case 5:Br(t,ft,kn);break;default:throw Error(A(329))}}}return yt(t,Re()),t.callbackNode===n?pw.bind(null,t):null}function jf(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=mu(t,e),t!==2&&(e=ft,ft=n,e!==null&&Ff(e)),t}function Ff(t){ft===null?ft=t:ft.push.apply(ft,t)}function cb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~gp,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function iv(t){if(re&6)throw Error(A(327));ss();var e=Xl(t,0);if(!(e&1))return yt(t,Re()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var r=uf(t);r!==0&&(e=r,n=jf(t,r))}if(n===1)throw n=ia,ti(t,0),sr(t,e),yt(t,Re()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,ft,kn),yt(t,Re()),null}function yp(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(ws=Re()+500,ec&&Dr())}}function ui(t){cr!==null&&cr.tag===0&&!(re&6)&&ss();var e=re;re|=1;var n=jt.transition,r=oe;try{if(jt.transition=null,oe=1,t)return t()}finally{oe=r,jt.transition=n,re=e,!(re&6)&&Dr()}}function _p(){Et=Gi.current,ye(Gi)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UC(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Zh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nu();break;case 3:ys(),ye(gt),ye(et),lp();break;case 5:ap(r);break;case 4:ys();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:rp(r.type._context);break;case 22:case 23:_p()}n=n.return}if(Be=t,Ae=t=wr(t.current,null),qe=Et=e,Me=0,ia=null,gp=ic=li=0,ft=Ao=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kr=null}return t}function mw(t,e){do{var n=Ae;try{if(np(),Al.current=du,cu){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cu=!1}if(ai=0,Ue=De=Se=null,Ro=!1,ta=0,mp.current=null,n===null||n.return===null){Me=1,ia=e,Ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=Vg(o);if(_!==null){_.flags&=-257,Gg(_,o,a,s,e),_.mode&1&&Bg(s,u,e),e=_,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Bg(s,u,e),wp();break e}l=Error(A(426))}}else if(Ee&&a.mode&1){var S=Vg(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Gg(S,o,a,s,e),ep(_s(l,a));break e}}s=l=_s(l,a),Me!==4&&(Me=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=J0(s,l,e);jg(s,y);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yr===null||!yr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=Z0(s,a,e);jg(s,g);break e}}s=s.return}while(s!==null)}yw(n)}catch(E){e=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function gw(){var t=fu.current;return fu.current=du,t===null?du:t}function wp(){(Me===0||Me===3||Me===2)&&(Me=4),Be===null||!(li&268435455)&&!(ic&268435455)||sr(Be,qe)}function mu(t,e){var n=re;re|=2;var r=gw();(Be!==t||qe!==e)&&(kn=null,ti(t,e));do try{db();break}catch(i){mw(t,i)}while(1);if(np(),re=n,fu.current=r,Ae!==null)throw Error(A(261));return Be=null,qe=0,Me}function db(){for(;Ae!==null;)vw(Ae)}function fb(){for(;Ae!==null&&!jS();)vw(Ae)}function vw(t){var e=ww(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?yw(t):Ae=e,mp.current=null}function yw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sb(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Ae=null;return}}else if(n=ib(n,e,Et),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Me===0&&(Me=5)}function Br(t,e,n){var r=oe,i=jt.transition;try{jt.transition=null,oe=1,hb(t,e,n,r)}finally{jt.transition=i,oe=r}return null}function hb(t,e,n,r){do ss();while(cr!==null);if(re&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qS(t,s),t===Be&&(Ae=Be=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Ew(Ql,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=oe;oe=1;var a=re;re|=4,mp.current=null,ab(t,n),fw(n,t),OC(mf),Jl=!!pf,mf=pf=null,t.current=n,lb(n),FS(),re=a,oe=o,jt.transition=s}else t.current=n;if(ul&&(ul=!1,cr=t,pu=i),s=t.pendingLanes,s===0&&(yr=null),$S(n.stateNode),yt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hu)throw hu=!1,t=Df,Df=null,t;return pu&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===Mf?Oo++:(Oo=0,Mf=t):Oo=0,Dr(),null}function ss(){if(cr!==null){var t=X_(pu),e=jt.transition,n=oe;try{if(jt.transition=null,oe=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,pu=0,re&6)throw Error(A(331));var i=re;for(re|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Po(8,c,s)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var f=c.sibling,_=c.return;if(uw(c),c===u){j=null;break}if(f!==null){f.return=_,j=f;break}j=_}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Po(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,j=y;break e}j=s.return}}var h=t.current;for(j=h;j!==null;){o=j;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,j=m;else e:for(o=h;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rc(9,a)}}catch(E){be(a,a.return,E)}if(a===o){j=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,j=g;break e}j=a.return}}if(re=i,Dr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Yu,t)}catch{}r=!0}return r}finally{oe=n,jt.transition=e}}return!1}function sv(t,e,n){e=_s(n,e),e=J0(t,e,1),t=vr(t,e,1),e=ot(),t!==null&&(Ca(t,1,e),yt(t,e))}function be(t,e,n){if(t.tag===3)sv(t,t,n);else for(;e!==null;){if(e.tag===3){sv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=_s(n,t),t=Z0(e,t,1),e=vr(e,t,1),t=ot(),e!==null&&(Ca(e,1,t),yt(e,t));break}}e=e.return}}function pb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(qe&n)===n&&(Me===4||Me===3&&(qe&130023424)===qe&&500>Re()-vp?ti(t,0):gp|=n),yt(t,e)}function _w(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=ot();t=Dn(t,e),t!==null&&(Ca(t,e,n),yt(t,n))}function mb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_w(t,n)}function gb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),_w(t,n)}var ww;ww=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,rb(t,e,n);ht=!!(t.flags&131072)}else ht=!1,Ee&&e.flags&1048576&&S0(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ll(t,e),t=e.pendingProps;var i=ms(e,et.current);is(e,n),i=cp(null,e,r,t,i,n);var s=dp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,ru(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sp(e),i.updater=tc,e.stateNode=i,i._reactInternals=e,Cf(e,r,t,n),e=If(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&Jh(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yb(r),t=qt(r,t),i){case 0:e=xf(null,e,r,t,n);break e;case 1:e=Yg(null,e,r,t,n);break e;case 11:e=qg(null,e,r,t,n);break e;case 14:e=Kg(null,e,r,qt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),xf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Yg(t,e,r,i,n);case 3:e:{if(rw(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,I0(t,e),lu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_s(Error(A(423)),e),e=Qg(t,e,r,n,i);break e}else if(r!==i){i=_s(Error(A(424)),e),e=Qg(t,e,r,n,i);break e}else for(kt=gr(e.stateNode.containerInfo.firstChild),Ct=e,Ee=!0,Qt=null,n=P0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),r===i){e=Mn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return A0(e),t===null&&Ef(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gf(r,i)?o=null:s!==null&&gf(r,s)&&(e.flags|=32),nw(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Ef(e),null;case 13:return iw(t,e,n);case 4:return op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vs(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),qg(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(ou,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!gt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Rn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,is(e,n),i=zt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),Kg(t,e,r,i,n);case 15:return ew(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Ll(t,e),e.tag=1,vt(r)?(t=!0,ru(e)):t=!1,is(e,n),N0(e,r,i),Cf(e,r,i,n),If(null,e,r,!0,t,n);case 19:return sw(t,e,n);case 22:return tw(t,e,n)}throw Error(A(156,e.tag))};function Ew(t,e){return q_(t,e)}function vb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new vb(t,e,n,r)}function Ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yb(t){if(typeof t=="function")return Ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uh)return 11;if(t===$h)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mi:return ni(n.children,i,s,e);case zh:o=8,i|=8;break;case qd:return t=Lt(12,n,e,i|2),t.elementType=qd,t.lanes=s,t;case Kd:return t=Lt(13,n,e,i),t.elementType=Kd,t.lanes=s,t;case Yd:return t=Lt(19,n,e,i),t.elementType=Yd,t.lanes=s,t;case R_:return sc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T_:o=10;break e;case N_:o=9;break e;case Uh:o=11;break e;case $h:o=14;break e;case tr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function sc(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=R_,t.lanes=n,t.stateNode={isHidden:!1},t}function hd(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function pd(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _b(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kc(0),this.expirationTimes=Kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kp(t,e,n,r,i,s,o,a,l){return t=new _b(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sp(s),t}function wb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function kw(t){if(!t)return Ir;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(vt(n))return E0(t,n,e)}return e}function Sw(t,e,n,r,i,s,o,a,l){return t=kp(n,r,!0,t,i,s,o,a,l),t.context=kw(null),n=t.current,r=ot(),i=_r(n),s=Rn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,Ca(t,i,r),yt(t,r),t}function oc(t,e,n,r){var i=e.current,s=ot(),o=_r(i);return n=kw(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(rn(t,i,o,s),Pl(t,i,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ov(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sp(t,e){ov(t,e),(t=t.alternate)&&ov(t,e)}function Eb(){return null}var Cw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}ac.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));oc(t,e,null,null)};ac.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){oc(null,t,null,null)}),e[Ln]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=e0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&n0(t)}};function bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function av(){}function kb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=gu(o);s.call(u)}}var o=Sw(e,r,t,0,null,!1,!1,"",av);return t._reactRootContainer=o,t[Ln]=o.current,Qo(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=gu(l);a.call(u)}}var l=kp(t,0,!1,null,null,!1,!1,"",av);return t._reactRootContainer=l,t[Ln]=l.current,Qo(t.nodeType===8?t.parentNode:t),ui(function(){oc(e,l,n,r)}),l}function uc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gu(o);a.call(l)}}oc(e,o,t,i)}else o=kb(n,e,t,i,r);return gu(o)}J_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(Bh(e,n|1),yt(e,Re()),!(re&6)&&(ws=Re()+500,Dr()))}break;case 13:ui(function(){var r=Dn(t,1);if(r!==null){var i=ot();rn(r,t,1,i)}}),Sp(t,1)}};Vh=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=ot();rn(e,t,134217728,n)}Sp(t,134217728)}};Z_=function(t){if(t.tag===13){var e=_r(t),n=Dn(t,e);if(n!==null){var r=ot();rn(n,t,e,r)}Sp(t,e)}};e0=function(){return oe};t0=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};of=function(t,e,n){switch(e){case"input":if(Jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zu(r);if(!i)throw Error(A(90));A_(r),Jd(r,i)}}}break;case"textarea":L_(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};$_=yp;W_=ui;var Sb={usingClientEntryPoint:!1,Events:[xa,Ui,Zu,z_,U_,yp]},oo={findFiberByHostInstance:qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cb={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V_(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||Eb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Yu=cl.inject(Cb),pn=cl}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sb;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bp(e))throw Error(A(200));return wb(t,e,null,n)};xt.createRoot=function(t,e){if(!bp(t))throw Error(A(299));var n=!1,r="",i=Cw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kp(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,Qo(t.nodeType===8?t.parentNode:t),new Cp(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=V_(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return ui(t)};xt.hydrate=function(t,e,n){if(!lc(e))throw Error(A(200));return uc(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!bp(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sw(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,Qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ac(e)};xt.render=function(t,e,n){if(!lc(e))throw Error(A(200));return uc(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!lc(t))throw Error(A(40));return t._reactRootContainer?(ui(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};xt.unstable_batchedUpdates=yp;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lc(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return uc(t,e,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";function bw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bw)}catch(t){console.error(t)}}bw(),S_.exports=xt;var xw=S_.exports;const Iw=qu(xw);var lv=xw;Vd.createRoot=lv.createRoot,Vd.hydrateRoot=lv.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},we.apply(this,arguments)}var Pe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pe||(Pe={}));const uv="popstate";function bb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return sa("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ci(i)}return Ib(e,n,null,t)}function Q(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Es(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xb(){return Math.random().toString(36).substr(2,8)}function cv(t,e){return{usr:t.state,key:t.key,idx:e}}function sa(t,e,n,r){return n===void 0&&(n=null),we({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hn(e):e,{state:n,key:e&&e.key||r||xb()})}function ci(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Hn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ib(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pe.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(we({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Pe.Pop;let S=c(),y=S==null?null:S-u;u=S,l&&l({action:a,location:w.location,delta:y})}function f(S,y){a=Pe.Push;let h=sa(w.location,S,y);n&&n(h,S),u=c()+1;let m=cv(h,u),g=w.createHref(h);try{o.pushState(m,"",g)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(g)}s&&l&&l({action:a,location:w.location,delta:1})}function _(S,y){a=Pe.Replace;let h=sa(w.location,S,y);n&&n(h,S),u=c();let m=cv(h,u),g=w.createHref(h);o.replaceState(m,"",g),s&&l&&l({action:a,location:w.location,delta:0})}function v(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:ci(S);return Q(y,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,y)}let w={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(uv,d),l=S,()=>{i.removeEventListener(uv,d),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let y=v(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:_,go(S){return o.go(S)}};return w}var Le;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Le||(Le={}));const Tb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Nb(t){return t.index===!0}function zf(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(Q(i.index!==!0||!i.children,"Cannot specify children on an index route"),Q(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Nb(i)){let l=we({},i,e(i),{id:a});return r[a]=l,l}else{let l=we({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=zf(i.children,e,o,r)),l}})}function qi(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Hn(e):e,i=Ms(r.pathname||"/",n);if(i==null)return null;let s=Tw(t);Rb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=zb(s[a],Wb(i));return o}function Tw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Pn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Q(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:jb(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Nw(s.path))i(s,o,l)}),e}function Nw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Nw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Rb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Fb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pb=/^:\w+$/,Ab=3,Ob=2,Lb=1,Db=10,Mb=-2,dv=t=>t==="*";function jb(t,e){let n=t.split("/"),r=n.length;return n.some(dv)&&(r+=Mb),e&&(r+=Ob),n.filter(i=>!dv(i)).reduce((i,s)=>i+(Pb.test(s)?Ab:s===""?Lb:Db),r)}function Fb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zb(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Ub({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Pn([i,c.pathname]),pathnameBase:Gb(Pn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Pn([i,c.pathnameBase]))}return s}function Ub(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$b(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=Hb(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function $b(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Es(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Wb(t){try{return decodeURI(t)}catch(e){return Es(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hb(t,e){try{return decodeURIComponent(t)}catch(n){return Es(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ms(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Bb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Hn(t):t;return{pathname:n?n.startsWith("/")?n:Vb(n,e):e,search:qb(r),hash:Kb(i)}}function Vb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function md(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ta(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Hn(t):(i=we({},t),Q(!i.pathname||!i.pathname.includes("?"),md("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),md("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),md("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=Bb(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Pn=t=>t.join("/").replace(/\/\/+/g,"/"),Gb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Kb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class xp{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Rw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Pw=["post","put","patch","delete"],Yb=new Set(Pw),Qb=["get",...Pw],Xb=new Set(Qb),Jb=new Set([301,302,303,307,308]),Zb=new Set([307,308]),gd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ex={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ao={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Aw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tx=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function nx(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Q(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=T=>({hasErrorBoundary:x(T)})}else i=tx;let s={},o=zf(t.routes,i,void 0,s),a,l=t.basename||"/",u=we({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,_=null,v=null,w=t.hydrationData!=null,S=qi(o,t.history.location,l),y=null;if(S==null){let x=Pt(404,{pathname:t.history.location.pathname}),{matches:T,route:P}=_v(o);S=T,y={[P.id]:x}}let h=!S.some(x=>x.route.lazy)&&(!S.some(x=>x.route.loader)||t.hydrationData!=null),m,g={historyAction:t.history.action,location:t.history.location,matches:S,initialized:h,navigation:gd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||y,fetchers:new Map,blockers:new Map},E=Pe.Pop,C=!1,b,I=!1,N=!1,D=[],V=[],Z=new Map,_t=0,Ht=-1,ln=new Map,nt=new Set,wt=new Map,O=new Map,z=new Map,H=!1;function ae(){return c=t.history.listen(x=>{let{action:T,location:P,delta:F}=x;if(H){H=!1;return}Es(z.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Y=Ym({currentLocation:g.location,nextLocation:P,historyAction:T});if(Y&&F!=null){H=!0,t.history.go(F*-1),Ga(Y,{state:"blocked",location:P,proceed(){Ga(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go(F)},reset(){let q=new Map(g.blockers);q.set(Y,ao),ne({blockers:q})}});return}return Nt(T,P)}),g.initialized||Nt(Pe.Pop,g.location),m}function ie(){c&&c(),d.clear(),b&&b.abort(),g.fetchers.forEach((x,T)=>Mc(T)),g.blockers.forEach((x,T)=>Km(T))}function Yn(x){return d.add(x),()=>d.delete(x)}function ne(x){g=we({},g,x),d.forEach(T=>T(g))}function rt(x,T){var P,F;let Y=g.actionData!=null&&g.navigation.formMethod!=null&&Yt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((P=x.state)==null?void 0:P._isRedirect)!==!0,q;T.actionData?Object.keys(T.actionData).length>0?q=T.actionData:q=null:Y?q=g.actionData:q=null;let K=T.loaderData?yv(g.loaderData,T.loaderData,T.matches||[],T.errors):g.loaderData,W=g.blockers;W.size>0&&(W=new Map(W),W.forEach((fe,Qe)=>W.set(Qe,ao)));let $=C===!0||g.navigation.formMethod!=null&&Yt(g.navigation.formMethod)&&((F=x.state)==null?void 0:F._isRedirect)!==!0;a&&(o=a,a=void 0),I||E===Pe.Pop||(E===Pe.Push?t.history.push(x,x.state):E===Pe.Replace&&t.history.replace(x,x.state)),ne(we({},T,{actionData:q,loaderData:K,historyAction:E,location:x,initialized:!0,navigation:gd,revalidation:"idle",restoreScrollPosition:Xm(x,T.matches||g.matches),preventScrollReset:$,blockers:W})),E=Pe.Pop,C=!1,I=!1,N=!1,D=[],V=[]}async function it(x,T){if(typeof x=="number"){t.history.go(x);return}let P=Uf(g.location,g.matches,l,u.v7_prependBasename,x,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:F,submission:Y,error:q}=fv(u.v7_normalizeFormMethod,!1,P,T),K=g.location,W=sa(g.location,F,T&&T.state);W=we({},W,t.history.encodeLocation(W));let $=T&&T.replace!=null?T.replace:void 0,fe=Pe.Push;$===!0?fe=Pe.Replace:$===!1||Y!=null&&Yt(Y.formMethod)&&Y.formAction===g.location.pathname+g.location.search&&(fe=Pe.Replace);let Qe=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,le=Ym({currentLocation:K,nextLocation:W,historyAction:fe});if(le){Ga(le,{state:"blocked",location:W,proceed(){Ga(le,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),it(x,T)},reset(){let Ne=new Map(g.blockers);Ne.set(le,ao),ne({blockers:Ne})}});return}return await Nt(fe,W,{submission:Y,pendingError:q,preventScrollReset:Qe,replace:T&&T.replace})}function Bt(){if(Dc(),ne({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Nt(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Nt(E||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Nt(x,T,P){b&&b.abort(),b=null,E=x,I=(P&&P.startUninterruptedRevalidation)===!0,Qk(g.location,g.matches),C=(P&&P.preventScrollReset)===!0;let F=a||o,Y=P&&P.overrideNavigation,q=qi(F,T,l);if(!q){let Ne=Pt(404,{pathname:T.pathname}),{matches:Fe,route:zr}=_v(F);jc(),rt(T,{matches:Fe,loaderData:{},errors:{[zr.id]:Ne}});return}if(g.initialized&&!N&&ax(g.location,T)&&!(P&&P.submission&&Yt(P.submission.formMethod))){rt(T,{matches:q});return}b=new AbortController;let K=uo(t.history,T,b.signal,P&&P.submission),W,$;if(P&&P.pendingError)$={[Ki(q).route.id]:P.pendingError};else if(P&&P.submission&&Yt(P.submission.formMethod)){let Ne=await Ba(K,T,P.submission,q,{replace:P.replace});if(Ne.shortCircuited)return;W=Ne.pendingActionData,$=Ne.pendingActionError,Y=dl(T,P.submission),K=new Request(K.url,{signal:K.signal})}let{shortCircuited:fe,loaderData:Qe,errors:le}=await Ks(K,T,q,Y,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,W,$);fe||(b=null,rt(T,we({matches:q},W?{actionData:W}:{},{loaderData:Qe,errors:le})))}async function Ba(x,T,P,F,Y){Y===void 0&&(Y={}),Dc();let q=fx(T,P);ne({navigation:q});let K,W=Wf(F,T);if(!W.route.action&&!W.route.lazy)K={type:Le.error,error:Pt(405,{method:x.method,pathname:T.pathname,routeId:W.route.id})};else if(K=await lo("action",x,W,F,s,i,l),x.signal.aborted)return{shortCircuited:!0};if(os(K)){let $;return Y&&Y.replace!=null?$=Y.replace:$=K.location===g.location.pathname+g.location.search,await Qs(g,K,{submission:P,replace:$}),{shortCircuited:!0}}if(Lo(K)){let $=Ki(F,W.route.id);return(Y&&Y.replace)!==!0&&(E=Pe.Push),{pendingActionData:{},pendingActionError:{[$.route.id]:K.error}}}if(Qr(K))throw Pt(400,{type:"defer-action"});return{pendingActionData:{[W.route.id]:K.data}}}async function Ks(x,T,P,F,Y,q,K,W,$){let fe=F||dl(T,Y),Qe=Y||q||kv(fe),le=a||o,[Ne,Fe]=hv(t.history,g,P,Qe,T,N,D,V,wt,nt,le,l,W,$);if(jc(ue=>!(P&&P.some(Vt=>Vt.route.id===ue))||Ne&&Ne.some(Vt=>Vt.route.id===ue)),Ht=++_t,Ne.length===0&&Fe.length===0){let ue=Gm();return rt(T,we({matches:P,loaderData:{},errors:$||null},W?{actionData:W}:{},ue?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!I){Fe.forEach(Vt=>{let Xn=g.fetchers.get(Vt.key),Wc=co(void 0,Xn?Xn.data:void 0);g.fetchers.set(Vt.key,Wc)});let ue=W||g.actionData;ne(we({navigation:fe},ue?Object.keys(ue).length===0?{actionData:null}:{actionData:ue}:{},Fe.length>0?{fetchers:new Map(g.fetchers)}:{}))}Fe.forEach(ue=>{Z.has(ue.key)&&Qn(ue.key),ue.controller&&Z.set(ue.key,ue.controller)});let zr=()=>Fe.forEach(ue=>Qn(ue.key));b&&b.signal.addEventListener("abort",zr);let{results:Ur,loaderResults:Xs,fetcherResults:Fc}=await Bm(g.matches,P,Ne,Fe,x);if(x.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",zr),Fe.forEach(ue=>Z.delete(ue.key));let wn=wv(Ur);if(wn){if(wn.idx>=Ne.length){let ue=Fe[wn.idx-Ne.length].key;nt.add(ue)}return await Qs(g,wn.result,{replace:K}),{shortCircuited:!0}}let{loaderData:En,errors:qa}=vv(g,P,Ne,Xs,$,Fe,Fc,O);O.forEach((ue,Vt)=>{ue.subscribe(Xn=>{(Xn||ue.done)&&O.delete(Vt)})});let zc=Gm(),Uc=qm(Ht),$c=zc||Uc||Fe.length>0;return we({loaderData:En,errors:qa},$c?{fetchers:new Map(g.fetchers)}:{})}function Fr(x){return g.fetchers.get(x)||ex}function Lc(x,T,P,F){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Z.has(x)&&Qn(x);let Y=a||o,q=Uf(g.location,g.matches,l,u.v7_prependBasename,P,T,F==null?void 0:F.relative),K=qi(Y,q,l);if(!K){Va(x,T,Pt(404,{pathname:q}));return}let{path:W,submission:$,error:fe}=fv(u.v7_normalizeFormMethod,!0,q,F);if(fe){Va(x,T,fe);return}let Qe=Wf(K,W);if(C=(F&&F.preventScrollReset)===!0,$&&Yt($.formMethod)){Ys(x,T,W,Qe,K,$);return}wt.set(x,{routeId:T,path:W}),qk(x,T,W,Qe,K,$)}async function Ys(x,T,P,F,Y,q){if(Dc(),wt.delete(x),!F.route.action&&!F.route.lazy){let Oe=Pt(405,{method:q.formMethod,pathname:P,routeId:T});Va(x,T,Oe);return}let K=g.fetchers.get(x),W=hx(q,K);g.fetchers.set(x,W),ne({fetchers:new Map(g.fetchers)});let $=new AbortController,fe=uo(t.history,P,$.signal,q);Z.set(x,$);let Qe=_t,le=await lo("action",fe,F,Y,s,i,l);if(fe.signal.aborted){Z.get(x)===$&&Z.delete(x);return}if(os(le))if(Z.delete(x),Ht>Qe){let Oe=Ai(void 0);g.fetchers.set(x,Oe),ne({fetchers:new Map(g.fetchers)});return}else{nt.add(x);let Oe=co(q);return g.fetchers.set(x,Oe),ne({fetchers:new Map(g.fetchers)}),Qs(g,le,{submission:q,isFetchActionRedirect:!0})}if(Lo(le)){Va(x,T,le.error);return}if(Qr(le))throw Pt(400,{type:"defer-action"});let Ne=g.navigation.location||g.location,Fe=uo(t.history,Ne,$.signal),zr=a||o,Ur=g.navigation.state!=="idle"?qi(zr,g.navigation.location,l):g.matches;Q(Ur,"Didn't find any matches after fetcher action");let Xs=++_t;ln.set(x,Xs);let Fc=co(q,le.data);g.fetchers.set(x,Fc);let[wn,En]=hv(t.history,g,Ur,q,Ne,N,D,V,wt,nt,zr,l,{[F.route.id]:le.data},void 0);En.filter(Oe=>Oe.key!==x).forEach(Oe=>{let Js=Oe.key,Jm=g.fetchers.get(Js),Jk=co(void 0,Jm?Jm.data:void 0);g.fetchers.set(Js,Jk),Z.has(Js)&&Qn(Js),Oe.controller&&Z.set(Js,Oe.controller)}),ne({fetchers:new Map(g.fetchers)});let qa=()=>En.forEach(Oe=>Qn(Oe.key));$.signal.addEventListener("abort",qa);let{results:zc,loaderResults:Uc,fetcherResults:$c}=await Bm(g.matches,Ur,wn,En,Fe);if($.signal.aborted)return;$.signal.removeEventListener("abort",qa),ln.delete(x),Z.delete(x),En.forEach(Oe=>Z.delete(Oe.key));let ue=wv(zc);if(ue){if(ue.idx>=wn.length){let Oe=En[ue.idx-wn.length].key;nt.add(Oe)}return Qs(g,ue.result)}let{loaderData:Vt,errors:Xn}=vv(g,g.matches,wn,Uc,void 0,En,$c,O);if(g.fetchers.has(x)){let Oe=Ai(le.data);g.fetchers.set(x,Oe)}let Wc=qm(Xs);g.navigation.state==="loading"&&Xs>Ht?(Q(E,"Expected pending action"),b&&b.abort(),rt(g.navigation.location,{matches:Ur,loaderData:Vt,errors:Xn,fetchers:new Map(g.fetchers)})):(ne(we({errors:Xn,loaderData:yv(g.loaderData,Vt,Ur,Xn)},Wc||En.length>0?{fetchers:new Map(g.fetchers)}:{})),N=!1)}async function qk(x,T,P,F,Y,q){let K=g.fetchers.get(x),W=co(q,K?K.data:void 0);g.fetchers.set(x,W),ne({fetchers:new Map(g.fetchers)});let $=new AbortController,fe=uo(t.history,P,$.signal);Z.set(x,$);let Qe=_t,le=await lo("loader",fe,F,Y,s,i,l);if(Qr(le)&&(le=await Dw(le,fe.signal,!0)||le),Z.get(x)===$&&Z.delete(x),fe.signal.aborted)return;if(os(le))if(Ht>Qe){let Fe=Ai(void 0);g.fetchers.set(x,Fe),ne({fetchers:new Map(g.fetchers)});return}else{nt.add(x),await Qs(g,le);return}if(Lo(le)){let Fe=Ki(g.matches,T);g.fetchers.delete(x),ne({fetchers:new Map(g.fetchers),errors:{[Fe.route.id]:le.error}});return}Q(!Qr(le),"Unhandled fetcher deferred data");let Ne=Ai(le.data);g.fetchers.set(x,Ne),ne({fetchers:new Map(g.fetchers)})}async function Qs(x,T,P){let{submission:F,replace:Y,isFetchActionRedirect:q}=P===void 0?{}:P;T.revalidate&&(N=!0);let K=sa(x.location,T.location,we({_isRedirect:!0},q?{_isFetchActionRedirect:!0}:{}));if(Q(K,"Expected a location on the redirect navigation"),Aw.test(T.location)&&n){let fe=t.history.createURL(T.location),Qe=Ms(fe.pathname,l)==null;if(e.location.origin!==fe.origin||Qe){Y?e.location.replace(T.location):e.location.assign(T.location);return}}b=null;let W=Y===!0?Pe.Replace:Pe.Push,$=F||kv(x.navigation);if(Zb.has(T.status)&&$&&Yt($.formMethod))await Nt(W,K,{submission:we({},$,{formAction:T.location}),preventScrollReset:C});else if(q)await Nt(W,K,{overrideNavigation:dl(K),fetcherSubmission:$,preventScrollReset:C});else{let fe=dl(K,$);await Nt(W,K,{overrideNavigation:fe,preventScrollReset:C})}}async function Bm(x,T,P,F,Y){let q=await Promise.all([...P.map($=>lo("loader",Y,$,T,s,i,l)),...F.map($=>$.matches&&$.match&&$.controller?lo("loader",uo(t.history,$.path,$.controller.signal),$.match,$.matches,s,i,l):{type:Le.error,error:Pt(404,{pathname:$.path})})]),K=q.slice(0,P.length),W=q.slice(P.length);return await Promise.all([Ev(x,P,K,K.map(()=>Y.signal),!1,g.loaderData),Ev(x,F.map($=>$.match),W,F.map($=>$.controller?$.controller.signal:null),!0)]),{results:q,loaderResults:K,fetcherResults:W}}function Dc(){N=!0,D.push(...jc()),wt.forEach((x,T)=>{Z.has(T)&&(V.push(T),Qn(T))})}function Va(x,T,P){let F=Ki(g.matches,T);Mc(x),ne({errors:{[F.route.id]:P},fetchers:new Map(g.fetchers)})}function Mc(x){let T=g.fetchers.get(x);Z.has(x)&&!(T&&T.state==="loading"&&ln.has(x))&&Qn(x),wt.delete(x),ln.delete(x),nt.delete(x),g.fetchers.delete(x)}function Qn(x){let T=Z.get(x);Q(T,"Expected fetch controller: "+x),T.abort(),Z.delete(x)}function Vm(x){for(let T of x){let P=Fr(T),F=Ai(P.data);g.fetchers.set(T,F)}}function Gm(){let x=[],T=!1;for(let P of nt){let F=g.fetchers.get(P);Q(F,"Expected fetcher: "+P),F.state==="loading"&&(nt.delete(P),x.push(P),T=!0)}return Vm(x),T}function qm(x){let T=[];for(let[P,F]of ln)if(F<x){let Y=g.fetchers.get(P);Q(Y,"Expected fetcher: "+P),Y.state==="loading"&&(Qn(P),ln.delete(P),T.push(P))}return Vm(T),T.length>0}function Kk(x,T){let P=g.blockers.get(x)||ao;return z.get(x)!==T&&z.set(x,T),P}function Km(x){g.blockers.delete(x),z.delete(x)}function Ga(x,T){let P=g.blockers.get(x)||ao;Q(P.state==="unblocked"&&T.state==="blocked"||P.state==="blocked"&&T.state==="blocked"||P.state==="blocked"&&T.state==="proceeding"||P.state==="blocked"&&T.state==="unblocked"||P.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+T.state);let F=new Map(g.blockers);F.set(x,T),ne({blockers:F})}function Ym(x){let{currentLocation:T,nextLocation:P,historyAction:F}=x;if(z.size===0)return;z.size>1&&Es(!1,"A router only supports one blocker at a time");let Y=Array.from(z.entries()),[q,K]=Y[Y.length-1],W=g.blockers.get(q);if(!(W&&W.state==="proceeding")&&K({currentLocation:T,nextLocation:P,historyAction:F}))return q}function jc(x){let T=[];return O.forEach((P,F)=>{(!x||x(F))&&(P.cancel(),T.push(F),O.delete(F))}),T}function Yk(x,T,P){if(f=x,v=T,_=P||null,!w&&g.navigation===gd){w=!0;let F=Xm(g.location,g.matches);F!=null&&ne({restoreScrollPosition:F})}return()=>{f=null,v=null,_=null}}function Qm(x,T){return _&&_(x,T.map(F=>dx(F,g.loaderData)))||x.key}function Qk(x,T){if(f&&v){let P=Qm(x,T);f[P]=v()}}function Xm(x,T){if(f){let P=Qm(x,T),F=f[P];if(typeof F=="number")return F}return null}function Xk(x){s={},a=zf(x,i,void 0,s)}return m={get basename(){return l},get state(){return g},get routes(){return o},initialize:ae,subscribe:Yn,enableScrollRestoration:Yk,navigate:it,fetch:Lc,revalidate:Bt,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Fr,deleteFetcher:Mc,dispose:ie,getBlocker:Kk,deleteBlocker:Km,_internalFetchControllers:Z,_internalActiveDeferreds:O,_internalSetRoutes:Xk},m}function rx(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Uf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=cc(i||".",Ta(a).map(c=>c.pathnameBase),Ms(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Ip(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Pn([n,u.pathname])),ci(u)}function fv(t,e,n,r){if(!r||!rx(r))return{path:n};if(r.formMethod&&!cx(r.formMethod))return{path:n,error:Pt(405,{method:r.formMethod})};let i=()=>({path:n,error:Pt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=Lw(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Yt(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,v)=>{let[w,S]=v;return""+_+w+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Yt(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}Q(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=$f(r.formData),u=r.formData;else if(r.body instanceof FormData)l=$f(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=gv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=gv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Yt(c.formMethod))return{path:n,submission:c};let d=Hn(n);return e&&d.search&&Ip(d.search)&&l.append("index",""),d.search="?"+l,{path:ci(d),submission:c}}function ix(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function hv(t,e,n,r,i,s,o,a,l,u,c,d,f,_){let v=_?Object.values(_)[0]:f?Object.values(f)[0]:void 0,w=t.createURL(e.location),S=t.createURL(i),y=_?Object.keys(_)[0]:void 0,m=ix(n,y).filter((E,C)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(sx(e.loaderData,e.matches[C],E)||o.some(N=>N===E.route.id))return!0;let b=e.matches[C],I=E;return pv(E,we({currentUrl:w,currentParams:b.params,nextUrl:S,nextParams:I.params},r,{actionResult:v,defaultShouldRevalidate:s||w.pathname+w.search===S.pathname+S.search||w.search!==S.search||Ow(b,I)}))}),g=[];return l.forEach((E,C)=>{if(!n.some(V=>V.route.id===E.routeId))return;let b=qi(c,E.path,d);if(!b){g.push({key:C,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let I=e.fetchers.get(C),N=Wf(b,E.path),D=!1;u.has(C)?D=!1:a.includes(C)?D=!0:I&&I.state!=="idle"&&I.data===void 0?D=s:D=pv(N,we({currentUrl:w,currentParams:e.matches[e.matches.length-1].params,nextUrl:S,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),D&&g.push({key:C,routeId:E.routeId,path:E.path,matches:b,match:N,controller:new AbortController})}),[m,g]}function sx(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Ow(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function pv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function mv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Q(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Es(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Tb.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,we({},e(i),{lazy:void 0}))}async function lo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=v=>{let w,S=new Promise((y,h)=>w=h);return c=()=>w(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),S])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([d(v),mv(n.route,s,i)]))[0];else if(await mv(n.route,s,i),v=n.route[t],v)u=await d(v);else if(t==="action"){let w=new URL(e.url),S=w.pathname+w.search;throw Pt(405,{method:e.method,pathname:S,routeId:n.route.id})}else return{type:Le.data,data:void 0};else if(v)u=await d(v);else{let w=new URL(e.url),S=w.pathname+w.search;throw Pt(404,{pathname:S})}Q(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Le.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(ux(u)){let v=u.status;if(Jb.has(v)){let y=u.headers.get("Location");if(Q(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!Aw.test(y))y=Uf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,y);else if(!a.isStaticRequest){let h=new URL(e.url),m=y.startsWith("//")?new URL(h.protocol+y):new URL(y),g=Ms(m.pathname,o)!=null;m.origin===h.origin&&g&&(y=m.pathname+m.search+m.hash)}if(a.isStaticRequest)throw u.headers.set("Location",y),u;return{type:Le.redirect,status:v,location:y,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||Le.data,response:u};let w,S=u.headers.get("Content-Type");return S&&/\bapplication\/json\b/.test(S)?w=await u.json():w=await u.text(),l===Le.error?{type:l,error:new xp(v,u.statusText,w),headers:u.headers}:{type:Le.data,data:w,statusCode:u.status,headers:u.headers}}if(l===Le.error)return{type:l,error:u};if(lx(u)){var f,_;return{type:Le.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((_=u.init)==null?void 0:_.headers)&&new Headers(u.init.headers)}}return{type:Le.data,data:u}}function uo(t,e,n,r){let i=t.createURL(Lw(e)).toString(),s={signal:n};if(r&&Yt(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=$f(r.formData):s.body=r.formData}return new Request(i,s)}function $f(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function gv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function ox(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(Q(!os(c),"Cannot handle redirect results in processLoaderData"),Lo(c)){let _=Ki(t,f),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[_.route.id]==null&&(o[_.route.id]=v),s[f]=void 0,l||(l=!0,a=Rw(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Qr(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function vv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=ox(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:_}=s[c];Q(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(_&&_.signal.aborted))if(Lo(v)){let w=Ki(t.matches,f==null?void 0:f.route.id);u&&u[w.route.id]||(u=we({},u,{[w.route.id]:v.error})),t.fetchers.delete(d)}else if(os(v))Q(!1,"Unhandled fetcher revalidation redirect");else if(Qr(v))Q(!1,"Unhandled fetcher deferred data");else{let w=Ai(v.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function yv(t,e,n,r){let i=we({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ki(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function _v(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Pt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new xp(t||500,o,new Error(a),!0)}function wv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(os(n))return{result:n,idx:e}}}function Lw(t){let e=typeof t=="string"?Hn(t):t;return ci(we({},e,{hash:""}))}function ax(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Qr(t){return t.type===Le.deferred}function Lo(t){return t.type===Le.error}function os(t){return(t&&t.type)===Le.redirect}function lx(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function ux(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function cx(t){return Xb.has(t.toLowerCase())}function Yt(t){return Yb.has(t.toLowerCase())}async function Ev(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!Ow(u,l)&&(s&&s[l.route.id])!==void 0;if(Qr(a)&&(i||c)){let d=r[o];Q(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Dw(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function Dw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Le.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Le.error,error:i}}return{type:Le.data,data:t.deferredData.data}}}function Ip(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function dx(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Wf(t,e){let n=typeof e=="string"?Hn(e).search:e.search;if(t[t.length-1].route.index&&Ip(n||""))return t[t.length-1];let r=Ta(t);return r[r.length-1]}function kv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function dl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function fx(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function co(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function hx(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Ai(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vu.apply(this,arguments)}const dc=k.createContext(null),Tp=k.createContext(null),Ci=k.createContext(null),fc=k.createContext(null),Bn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Mw=k.createContext(null);function px(t,e){let{relative:n}=e===void 0?{}:e;js()||Q(!1);let{basename:r,navigator:i}=k.useContext(Ci),{hash:s,pathname:o,search:a}=Np(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Pn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function js(){return k.useContext(fc)!=null}function Vn(){return js()||Q(!1),k.useContext(fc).location}function jw(t){k.useContext(Ci).static||k.useLayoutEffect(t)}function Fs(){let{isDataRoute:t}=k.useContext(Bn);return t?Tx():mx()}function mx(){js()||Q(!1);let t=k.useContext(dc),{basename:e,navigator:n}=k.useContext(Ci),{matches:r}=k.useContext(Bn),{pathname:i}=Vn(),s=JSON.stringify(Ta(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return jw(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=cc(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Pn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const gx=k.createContext(null);function vx(t){let e=k.useContext(Bn).outlet;return e&&k.createElement(gx.Provider,{value:t},e)}function Np(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(Bn),{pathname:i}=Vn(),s=JSON.stringify(Ta(r).map(o=>o.pathnameBase));return k.useMemo(()=>cc(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function yx(t,e,n){js()||Q(!1);let{navigator:r}=k.useContext(Ci),{matches:i}=k.useContext(Bn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Vn(),u;if(e){var c;let w=typeof e=="string"?Hn(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||Q(!1),u=w}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",_=qi(t,{pathname:f}),v=Sx(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Pn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Pn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&v?k.createElement(fc.Provider,{value:{location:vu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pe.Pop}},v):v}function _x(){let t=Ix(),e=Rw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}const wx=k.createElement(_x,null);class Ex extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(Bn.Provider,{value:this.props.routeContext},k.createElement(Mw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kx(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(dc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Bn.Provider,{value:e},r)}function Sx(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Q(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||wx);let f=e.concat(s.slice(0,u+1)),_=()=>{let v;return c?v=d:l.route.Component?v=k.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,k.createElement(kx,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(Ex,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:_(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):_()},null)}var Hf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Hf||(Hf={}));var oa;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(oa||(oa={}));function Cx(t){let e=k.useContext(dc);return e||Q(!1),e}function bx(t){let e=k.useContext(Tp);return e||Q(!1),e}function xx(t){let e=k.useContext(Bn);return e||Q(!1),e}function Fw(t){let e=xx(),n=e.matches[e.matches.length-1];return n.route.id||Q(!1),n.route.id}function Ix(){var t;let e=k.useContext(Mw),n=bx(oa.UseRouteError),r=Fw(oa.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Tx(){let{router:t}=Cx(Hf.UseNavigateStable),e=Fw(oa.UseNavigateStable),n=k.useRef(!1);return jw(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,vu({fromRouteId:e},s)))},[t,e])}const Nx="startTransition",Sv=mS[Nx];function Rx(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=k.useState(n.state),{v7_startTransition:o}=r||{},a=k.useCallback(d=>{o&&Sv?Sv(()=>s(d)):s(d)},[s,o]);k.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,_)=>n.navigate(d,{state:f,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(d,f,_)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),u=n.basename||"/",c=k.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return k.createElement(k.Fragment,null,k.createElement(dc.Provider,{value:c},k.createElement(Tp.Provider,{value:i},k.createElement(Ox,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?k.createElement(Px,{routes:n.routes,state:i}):e))),null)}function Px(t){let{routes:e,state:n}=t;return yx(e,void 0,n)}function Ax(t){let{to:e,replace:n,state:r,relative:i}=t;js()||Q(!1);let{matches:s}=k.useContext(Bn),{pathname:o}=Vn(),a=Fs(),l=cc(e,Ta(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return k.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function zw(t){return vx(t.context)}function Rt(t){Q(!1)}function Ox(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Pe.Pop,navigator:s,static:o=!1}=t;js()&&Q(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Hn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:_="default"}=r,v=k.useMemo(()=>{let w=Ms(u,a);return w==null?null:{location:{pathname:w,search:c,hash:d,state:f,key:_},navigationType:i}},[a,u,c,d,f,_,i]);return v==null?null:k.createElement(Ci.Provider,{value:l},k.createElement(fc.Provider,{children:n,value:v}))}var Cv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Cv||(Cv={}));new Promise(()=>{});function Bf(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Bf(r.props.children,s));return}r.type!==Rt&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bf(r.props.children,s)),n.push(o)}),n}function Lx(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:k.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:k.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ks(){return ks=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ks.apply(this,arguments)}function Uw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Dx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Mx(t,e){return t.button===0&&(!e||e==="_self")&&!Dx(t)}const jx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Fx=["aria-current","caseSensitive","className","end","style","to","children"];function zx(t,e){return nx({basename:e==null?void 0:e.basename,future:ks({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:bb({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||Ux(),routes:t,mapRouteProperties:Lx}).initialize()}function Ux(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ks({},e,{errors:$x(e.errors)})),e}function $x(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new xp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const Wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=Uw(e,jx),{basename:f}=k.useContext(Ci),_,v=!1;if(typeof u=="string"&&Hx.test(u)&&(_=u,Wx))try{let h=new URL(window.location.href),m=u.startsWith("//")?new URL(h.protocol+u):new URL(u),g=Ms(m.pathname,f);m.origin===h.origin&&g!=null?u=g+m.search+m.hash:v=!0}catch{}let w=px(u,{relative:i}),S=Bx(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(h){r&&r(h),h.defaultPrevented||S(h)}return k.createElement("a",ks({},d,{href:_||w,onClick:v||s?r:y,ref:n,target:l}))}),Oi=k.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=Uw(e,Fx),d=Np(l,{relative:c.relative}),f=Vn(),_=k.useContext(Tp),{navigator:v}=k.useContext(Ci),w=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,S=f.pathname,y=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(S=S.toLowerCase(),y=y?y.toLowerCase():null,w=w.toLowerCase());let h=S===w||!o&&S.startsWith(w)&&S.charAt(w.length)==="/",m=y!=null&&(y===w||!o&&y.startsWith(w)&&y.charAt(w.length)==="/"),g=h?r:void 0,E;typeof s=="function"?E=s({isActive:h,isPending:m}):E=[s,h?"active":null,m?"pending":null].filter(Boolean).join(" ");let C=typeof a=="function"?a({isActive:h,isPending:m}):a;return k.createElement(Ft,ks({},c,{"aria-current":g,className:E,ref:n,style:C,to:l}),typeof u=="function"?u({isActive:h,isPending:m}):u)});var bv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(bv||(bv={}));var xv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xv||(xv={}));function Bx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Fs(),l=Vn(),u=Np(t,{relative:o});return k.useCallback(c=>{if(Mx(c,n)){c.preventDefault();let d=r!==void 0?r:ci(l)===ci(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var $w={exports:{}},Vx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Gx=Vx,qx=Gx;function Ww(){}function Hw(){}Hw.resetWarningCache=Ww;var Kx=function(){function t(r,i,s,o,a,l){if(l!==qx){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Hw,resetWarningCache:Ww};return n.PropTypes=n,n};$w.exports=Kx();var Li=$w.exports;const R=qu(Li),Wt=k.createContext({width:0,height:0,currentPage:"/",setCurrentPage:()=>{},fullscreen:!1,setFullscreen:()=>{}}),Yx="_back_1nuw4_1",fl={back:Yx},fn="/assets/symbol-defs-c3f83eaf.svg",Na=t=>{const{width:e}=k.useContext(Wt);let n=t.enableText?t.enableText:!0;return t.notLink?p.jsxs("button",{type:"button",className:t.className?`${fl.back} ${t.className}`:fl.back,onClick:t.onClick,children:[p.jsx("svg",{className:"icon icon-arrow_left",children:p.jsx("use",{xlinkHref:`${fn}#icon-arrow_left`})}),e>740&&n?p.jsx("span",{children:"Wróć"}):""]}):p.jsxs(Ft,{to:-1,className:t.className?`${fl.back} ${t.className}`:fl.back,children:[p.jsx("svg",{className:"icon icon-arrow_left",children:p.jsx("use",{xlinkHref:`${fn}#icon-arrow_left`})}),e>740&&n?p.jsx("span",{children:"Wróć"}):""]})};Na.propTypes={enableText:R.bool,notLink:R.bool,className:R.string,onClick:R.func};const Iv=[{name:"Wprowadzenie",element:"Intro",address:"/wiki"},{name:"Modele lotu w Armie 3",address:"/wiki/modele-lotu",keywords:["Arma 3","standardowy","zaawansowany"],article:{header:"Article title",content:"<p>Example article</p>"}},{name:"Sterowanie - sprzęt",element:"Gear",address:"/wiki/sprzet",keywords:["joystick","pedały","kalibracja","ustawienia","sterowniki","akcesoria","trackir","facetrack","vr","multiple monitors"],article:{header:"Sprzęt do latania",content:""}},{name:"Sterowanie - ustawienia w grze",element:"Settings",address:"/wiki/ustawienia-gry",keywords:["Arma 3","gra","czułość","martwa strefa","martwej strefy","przypisanie","controls"]},{name:"Kokpit - instrumenty",element:"Instruments",address:"/wiki/przyrzady",keywords:["prędkościomierz","wariometr","wysokoścomierz","sztuczny horyzont","żyrokompas","zakrętomierze i chyłomierze","akcelerometry","zegary","cabir air gauges","wskażnik temperatury zewnętrznej OAT","Flap Position Indicators","Kąt natarcia - AoA","Coupled Devices","akcesoria"]},{name:"Podstawy lotu",element:"Basics",address:"/wiki/podstawy-lotu"},{name:"Podstawy komunikacji",element:"Comms",address:"/wiki/podstawy-komunikacji"},{name:"Śmigłowce ze względu na przeznaczenie",element:"HeliPurpose",address:"/wiki/heli-przeznaczenie"},{name:"Śmigłowce ze względu na rozmiar",address:"/wiki/heli-rozmiar",article:{header:"Helikoptery ze względu na rozmiar",content:"<h3>Lekkie śmigłowce</h3><p>Śmigłowce lekkie służą do zwiadu lub transportu piechoty. Te helikoptery mogą unosić niewielkich rozmiarów ładunek na zawiesiu. Śmigłowce lekkie zwykle mają mniej pancerza, co nadrabiają manewrowością i niewielkimi gabarytami. Śmigłowce lekkie są idealne dla początkujących pilotów do nauki podstawowych manewrów.</p>"}},{name:"Śmigłowce - manewrowanie",element:"HeliManevouers",address:"/wiki/heli-manewry"},{name:"Samoloty ze względu na przeznaczenie",element:"PlanesPurpose",address:"/wiki/samoloty-przeznaczenie"}],Ra=k.createContext({isShown:!1,setIsShown:()=>{}}),Qx="_search_2lhum_1",Xx="_placeholder_2lhum_61",Jx="_reset_2lhum_77",Zx="_content_2lhum_91",eI="_back_2lhum_131",rr={search:Qx,"search-container":"_search-container_2lhum_22",placeholder:Xx,reset:Jx,content:Zx,back:eI,"search-placeholder":"_search-placeholder_2lhum_135"},tI="_input_1snh7_1",nI="_invalid_1snh7_9",Fl={input:tI,invalid:nI},rI=()=>{const t=Vn(),e=k.useRef(),n=k.useRef(),[r,i]=k.useState(""),[s,o]=k.useState(!0),[a,l]=k.useState(Iv),{setIsShown:u}=k.useContext(Ra),{setCurrentPage:c}=k.useContext(Wt),d=k.useCallback(()=>Iv.filter(g=>{let E=!1;return Object.values(g).forEach(C=>{E||(C.toString().toLowerCase().includes(r.toLowerCase())?E=!0:E=!1)}),E}),[r]);k.useEffect(()=>{r.trim()!==""?(o(!1),n.current.innerText="Pasujące artykuły"):(n.current.innerText="Wszystkie artykuły",o(!0)),l(d())},[r,d]),k.useEffect(()=>{e.current.focus()},[]);const f=()=>{e.current.focus()},_=g=>{i(g.target.value)},v=g=>{i(""),g.target.firstElementChild.focus()},w=g=>{g.preventDefault()},S=()=>{i(""),u(!1),c(t.pathname)},y=()=>{i(""),u(!1)},h=g=>{g.keyCode===27&&(i(""),u(!1),c(t.pathname))},m=p.jsx("nav",{className:rr.search,onKeyDown:h,children:p.jsxs("div",{className:rr["search-container"],children:[p.jsx(Na,{className:rr.back,enableText:!1,notLink:!0,onClick:S}),p.jsxs("form",{onReset:v,onSubmit:w,children:[p.jsx("input",{type:"search",ref:e,className:Fl.input,id:"search",value:r,onInput:_}),s&&p.jsxs("div",{className:rr.placeholder,onClick:f,children:[p.jsx("svg",{className:"icon icon-magnifying_glass",children:p.jsx("use",{xlinkHref:`${fn}#icon-magnifying_glass`})})," ","Przeszukaj wiki"]}),!s&&p.jsx("button",{type:"reset",className:rr.reset,children:p.jsx("svg",{className:"icon icon-circle_xmark",children:p.jsx("use",{xlinkHref:`${fn}#icon-circle_xmark`})})})]}),p.jsxs("div",{className:rr.content,children:[p.jsx("h2",{ref:n,children:"Wszystkie artykuły"}),a.map((g,E)=>p.jsx(Ft,{to:g.address,onClick:y,children:g.name},E))]})]})});return Iw.createPortal(m,document.getElementById("overlays"))},Bw=k.memo(()=>{const{setIsShown:t}=k.useContext(Ra),{setCurrentPage:e}=k.useContext(Wt),n=()=>{t(!0),e("/szukaj")};return p.jsx("button",{type:"button",onClick:n,className:rr["search-placeholder"],children:p.jsxs("div",{className:rr.placeholder,children:[p.jsx("svg",{className:"icon icon-magnifying_glass",children:p.jsx("use",{xlinkHref:`${fn}#icon-magnifying_glass`})})," ","Przeszukaj wiki"]})})});Bw.displayName="SearchPlaceholder";const iI="_menu_h9uok_1",sI="_icon_h9uok_71",oI="_highlight_h9uok_75",$r={menu:iI,icon:sI,highlight:oI};/**
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
 */const Vw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const L=function(t,e){if(!t)throw zs(e)},zs=function(t){return new Error("Firebase Database ("+Vw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Gw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(f=64)),r.push(n[c],n[d],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new lI;const f=s<<2|a>>4;if(r.push(f),u!==64){const _=a<<4&240|u>>2;if(r.push(_),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qw=function(t){const e=Gw(t);return Rp.encodeByteArray(e,!0)},yu=function(t){return qw(t).replace(/\./g,"")},_u=function(t){try{return Rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uI(t){return Kw(void 0,t)}function Kw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cI(n)||(t[n]=Kw(t[n],e[n]));return t}function cI(t){return t!=="__proto__"}/**
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
 */function dI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fI=()=>dI().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_u(t[1]);return e&&JSON.parse(e)},Pp=()=>{try{return fI()||hI()||pI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yw=t=>{var e,n;return(n=(e=Pp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mI=t=>{const e=Yw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qw=()=>{var t;return(t=Pp())===null||t===void 0?void 0:t.config},Xw=t=>{var e;return(e=Pp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Pa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yu(JSON.stringify(n)),yu(JSON.stringify(o)),a].join(".")}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function vI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zw(){return Vw.NODE_ADMIN===!0}function _I(){try{return typeof indexedDB=="object"}catch{return!1}}function wI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const EI="FirebaseError";class Mr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EI,Object.setPrototypeOf(this,Mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Aa.prototype.create)}}class Aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mr(i,a,r)}}function kI(t,e){return t.replace(SI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SI=/\{\$([^}]+)}/g;/**
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
 */function aa(t){return JSON.parse(t)}function He(t){return JSON.stringify(t)}/**
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
 */const e1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=aa(_u(s[0])||""),n=aa(_u(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},CI=function(t){const e=e1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bI=function(t){const e=e1(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Eu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tv(s)&&Tv(o)){if(!Eu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tv(t){return t!==null&&typeof t=="object"}/**
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
 */function Us(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class xI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function II(t,e){const n=new TI(t,e);return n.subscribe.bind(n)}class TI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vd),i.error===void 0&&(i.error=vd),i.complete===void 0&&(i.complete=vd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vd(){}function hc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const RI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class di{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class PI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pa;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OI(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AI(t){return t===Vr?void 0:t}function OI(t){return t.instantiationMode==="EAGER"}/**
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
 */class LI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const DI={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},MI=ce.INFO,jI={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},FI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Op{constructor(e){this.name=e,this._logLevel=MI,this._logHandler=FI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const zI=(t,e)=>e.some(n=>t instanceof n);let Nv,Rv;function UI(){return Nv||(Nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $I(){return Rv||(Rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t1=new WeakMap,Gf=new WeakMap,n1=new WeakMap,yd=new WeakMap,Lp=new WeakMap;function WI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t1.set(n,t)}).catch(()=>{}),Lp.set(e,t),e}function HI(t){if(Gf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gf.set(t,e)}let qf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BI(t){qf=t(qf)}function VI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_d(this),e,...n);return n1.set(r,e.sort?e.sort():[e]),Er(r)}:$I().includes(t)?function(...e){return t.apply(_d(this),e),Er(t1.get(this))}:function(...e){return Er(t.apply(_d(this),e))}}function GI(t){return typeof t=="function"?VI(t):(t instanceof IDBTransaction&&HI(t),zI(t,UI())?new Proxy(t,qf):t)}function Er(t){if(t instanceof IDBRequest)return WI(t);if(yd.has(t))return yd.get(t);const e=GI(t);return e!==t&&(yd.set(t,e),Lp.set(e,t)),e}const _d=t=>Lp.get(t);function qI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Er(o.result),l.oldVersion,l.newVersion,Er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const KI=["get","getKey","getAll","getAllKeys","count"],YI=["put","add","delete","clear"],wd=new Map;function Pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wd.get(e))return wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wd.set(e,s),s}BI(t=>({...t,get:(e,n,r)=>Pv(e,n)||t.get(e,n,r),has:(e,n)=>!!Pv(e,n)||t.has(e,n)}));/**
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
 */class QI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kf="@firebase/app",Av="0.9.15";/**
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
 */const fi=new Op("@firebase/app"),JI="@firebase/app-compat",ZI="@firebase/analytics-compat",eT="@firebase/analytics",tT="@firebase/app-check-compat",nT="@firebase/app-check",rT="@firebase/auth",iT="@firebase/auth-compat",sT="@firebase/database",oT="@firebase/database-compat",aT="@firebase/functions",lT="@firebase/functions-compat",uT="@firebase/installations",cT="@firebase/installations-compat",dT="@firebase/messaging",fT="@firebase/messaging-compat",hT="@firebase/performance",pT="@firebase/performance-compat",mT="@firebase/remote-config",gT="@firebase/remote-config-compat",vT="@firebase/storage",yT="@firebase/storage-compat",_T="@firebase/firestore",wT="@firebase/firestore-compat",ET="firebase",kT="10.1.0";/**
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
 */const Yf="[DEFAULT]",ST={[Kf]:"fire-core",[JI]:"fire-core-compat",[eT]:"fire-analytics",[ZI]:"fire-analytics-compat",[nT]:"fire-app-check",[tT]:"fire-app-check-compat",[rT]:"fire-auth",[iT]:"fire-auth-compat",[sT]:"fire-rtdb",[oT]:"fire-rtdb-compat",[aT]:"fire-fn",[lT]:"fire-fn-compat",[uT]:"fire-iid",[cT]:"fire-iid-compat",[dT]:"fire-fcm",[fT]:"fire-fcm-compat",[hT]:"fire-perf",[pT]:"fire-perf-compat",[mT]:"fire-rc",[gT]:"fire-rc-compat",[vT]:"fire-gcs",[yT]:"fire-gcs-compat",[_T]:"fire-fst",[wT]:"fire-fst-compat","fire-js":"fire-js",[ET]:"fire-js-all"};/**
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
 */const ku=new Map,Qf=new Map;function CT(t,e){try{t.container.addComponent(e)}catch(n){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cs(t){const e=t.name;if(Qf.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;Qf.set(e,t);for(const n of ku.values())CT(n,t);return!0}function Dp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const bT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kr=new Aa("app","Firebase",bT);/**
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
 */class xT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=kT;function r1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=Qw()),!n)throw kr.create("no-options");const s=ku.get(i);if(s){if(Eu(n,s.options)&&Eu(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new LI(i);for(const l of Qf.values())o.addComponent(l);const a=new xT(n,r,o);return ku.set(i,a),a}function i1(t=Yf){const e=ku.get(t);if(!e&&t===Yf&&Qw())return r1();if(!e)throw kr.create("no-app",{appName:t});return e}function Sr(t,e,n){var r;let i=(r=ST[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(a.join(" "));return}Cs(new di(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const IT="firebase-heartbeat-database",TT=1,la="firebase-heartbeat-store";let Ed=null;function s1(){return Ed||(Ed=qI(IT,TT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(la)}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),Ed}async function NT(t){try{return await(await s1()).transaction(la).objectStore(la).get(o1(t))}catch(e){if(e instanceof Mr)fi.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}async function Ov(t,e){try{const r=(await s1()).transaction(la,"readwrite");await r.objectStore(la).put(e,o1(t)),await r.done}catch(n){if(n instanceof Mr)fi.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fi.warn(r.message)}}}function o1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RT=1024,PT=30*24*60*60*1e3;class AT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=PT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lv(),{heartbeatsToSend:n,unsentEntries:r}=OT(this._heartbeatsCache.heartbeats),i=yu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lv(){return new Date().toISOString().substring(0,10)}function OT(t,e=RT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _I()?wI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dv(t){return yu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function DT(t){Cs(new di("platform-logger",e=>new QI(e),"PRIVATE")),Cs(new di("heartbeat",e=>new AT(e),"PRIVATE")),Sr(Kf,Av,t),Sr(Kf,Av,"esm2017"),Sr("fire-js","")}DT("");var MT="firebase",jT="10.1.0";/**
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
 */Sr(MT,jT,"app");const FT={apiKey:"AIzaSyCx6s29WHuk-RrXJPdJYIbe3Hi4q13-WLc",authDomain:"ptap-articles.firebaseapp.com",databaseURL:"https://ptap-articles-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ptap-articles",storageBucket:"ptap-articles.appspot.com",messagingSenderId:"741718300001",appId:"1:741718300001:web:6e16244aa1f3f0760ce120"},Xf=r1(FT);function Mp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function a1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zT=a1,l1=new Aa("auth","Firebase",a1());/**
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
 */const Su=new Op("@firebase/auth");function UT(t,...e){Su.logLevel<=ce.WARN&&Su.warn(`Auth (${$s}): ${t}`,...e)}function zl(t,...e){Su.logLevel<=ce.ERROR&&Su.error(`Auth (${$s}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw jp(t,...e)}function gn(t,...e){return jp(t,...e)}function u1(t,e,n){const r=Object.assign(Object.assign({},zT()),{[e]:n});return new Aa("auth","Firebase",r).create(e,{appName:t.name})}function $T(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$t(t,"argument-error"),u1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l1.create(t,...e)}function G(t,e,...n){if(!t)throw jp(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zl(e),new Error(e)}function jn(t,e){t||In(e)}/**
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
 */function Jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WT(){return Mv()==="http:"||Mv()==="https:"}function Mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WT()||vI()||"connection"in navigator)?navigator.onLine:!0}function BT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ap()||Jw()}get(){return HT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fp(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class c1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GT=new Oa(3e4,6e4);function Ws(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bi(t,e,n,r,i={}){return d1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Us(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),c1.fetch()(f1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function d1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VT),e);try{const i=new qT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw u1(t,c,u);$t(t,c)}}catch(i){if(i instanceof Mr)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function La(t,e,n,r,i={}){const s=await bi(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function f1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fp(t.config,i):`${t.config.apiScheme}://${i}`}class qT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),GT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function KT(t,e){return bi(t,"POST","/v1/accounts:delete",e)}async function YT(t,e){return bi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Do(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QT(t,e=!1){const n=ct(t),r=await n.getIdToken(e),i=zp(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Do(kd(i.auth_time)),issuedAtTime:Do(kd(i.iat)),expirationTime:Do(kd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kd(t){return Number(t)*1e3}function zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=_u(n);return i?JSON.parse(i):(zl("Failed to decode base64 JWT payload"),null)}catch(i){return zl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function XT(t){const e=zp(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mr&&JT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class h1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Do(this.lastLoginAt),this.creationTime=Do(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bs(t,YT(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nN(s.providerUserInfo):[],a=tN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new h1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function eN(t){const e=ct(t);await Cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nN(t){return t.map(e=>{var{providerId:n}=e,r=Mp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function rN(t,e){const n=await d1(t,{},async()=>{const r=Us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=f1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",c1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ua;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ua,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function Zn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new h1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QT(this,e)}reload(){return eN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bs(this,KT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:g,isAnonymous:E,providerData:C,stsTokenManager:b}=n;G(m&&b,e,"internal-error");const I=ua.fromJSON(this.name,b);G(typeof m=="string",e,"internal-error"),Zn(d,e.name),Zn(f,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof E=="boolean",e,"internal-error"),Zn(_,e.name),Zn(v,e.name),Zn(w,e.name),Zn(S,e.name),Zn(y,e.name),Zn(h,e.name);const N=new ri({uid:m,auth:e,email:f,emailVerified:g,displayName:d,isAnonymous:E,photoURL:v,phoneNumber:_,tenantId:w,stsTokenManager:I,createdAt:y,lastLoginAt:h});return C&&Array.isArray(C)&&(N.providerData=C.map(D=>Object.assign({},D))),S&&(N._redirectEventId=S),N}static async _fromIdTokenResponse(e,n,r=!1){const i=new ua;i.updateFromServerResponse(n);const s=new ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cu(s),s}}/**
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
 */const jv=new Map;function Tn(t){jn(t instanceof Function,"Expected a class definition");let e=jv.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jv.set(t,e),e)}/**
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
 */class p1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}p1.type="NONE";const Fv=p1;/**
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
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(Tn(Fv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Tn(Fv);const o=Ul(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ri._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new as(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new as(s,e,r))}}/**
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
 */function zv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_1(e))return"Blackberry";if(w1(e))return"Webos";if(Up(e))return"Safari";if((e.includes("chrome/")||g1(e))&&!e.includes("edge/"))return"Chrome";if(y1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function m1(t=tt()){return/firefox\//i.test(t)}function Up(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g1(t=tt()){return/crios\//i.test(t)}function v1(t=tt()){return/iemobile/i.test(t)}function y1(t=tt()){return/android/i.test(t)}function _1(t=tt()){return/blackberry/i.test(t)}function w1(t=tt()){return/webos/i.test(t)}function mc(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iN(t=tt()){var e;return mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sN(){return yI()&&document.documentMode===10}function E1(t=tt()){return mc(t)||y1(t)||w1(t)||_1(t)||/windows phone/i.test(t)||v1(t)}function oN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function k1(t,e=[]){let n;switch(t){case"Browser":n=zv(tt());break;case"Worker":n=`${zv(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}async function S1(t,e){return bi(t,"GET","/v2/recaptchaConfig",Ws(t,e))}function Uv(t){return t!==void 0&&t.enterprise!==void 0}class C1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function aN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function b1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aN().appendChild(r)})}function lN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uN="https://www.google.com/recaptcha/enterprise.js?render=",cN="recaptcha-enterprise",dN="NO_RECAPTCHA";class x1{constructor(e){this.type=cN,this.auth=xi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{S1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new C1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Uv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(dN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Uv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}b1(uN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function bu(t,e,n,r=!1){const i=new x1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class fN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class hN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $v(this),this.idTokenSubscription=new $v(this),this.beforeStateQueue=new fN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ct(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}async initializeRecaptchaConfig(){const e=await S1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new C1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new x1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=k1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&UT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xi(t){return ct(t)}class $v{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function pN(t,e){const n=Dp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Eu(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function mN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gN(t,e,n){const r=xi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=I1(e),{host:o,port:a}=vN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yN()}function I1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vN(t){const e=I1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wv(o)}}}function Wv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $p{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function _N(t,e){return bi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Sd(t,e){return La(t,"POST","/v1/accounts:signInWithPassword",Ws(t,e))}/**
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
 */async function wN(t,e){return La(t,"POST","/v1/accounts:signInWithEmailLink",Ws(t,e))}async function EN(t,e){return La(t,"POST","/v1/accounts:signInWithEmailLink",Ws(t,e))}/**
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
 */class ca extends $p{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ca(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ca(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await bu(e,r,"signInWithPassword");return Sd(e,i)}else return Sd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await bu(e,r,"signInWithPassword");return Sd(e,s)}else return Promise.reject(i)});case"emailLink":return wN(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return _N(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return EN(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ls(t,e){return La(t,"POST","/v1/accounts:signInWithIdp",Ws(t,e))}/**
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
 */const kN="http://localhost";class hi extends $p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:kN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Us(n)}return e}}/**
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
 */function SN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CN(t){const e=Eo(ko(t)).link,n=e?Eo(ko(e)).deep_link_id:null,r=Eo(ko(t)).deep_link_id;return(r?Eo(ko(r)).link:null)||r||n||e||t}class Wp{constructor(e){var n,r,i,s,o,a;const l=Eo(ko(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=SN((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=CN(e);try{return new Wp(n)}catch{return null}}}/**
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
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return ca._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wp.parseLink(n);return G(r,"argument-error"),ca._fromEmailAndCode(e,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Da extends Hp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class or extends Da{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class ar extends Da{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class lr extends Da{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function Cd(t,e){return La(t,"POST","/v1/accounts:signUp",Ws(t,e))}/**
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ri._fromIdTokenResponse(e,r,i),o=Hv(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hv(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xu extends Mr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xu(e,n,r,i)}}function T1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xu._fromErrorAndOperation(t,s,e,r):s})}async function bN(t,e,n=!1){const r=await bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
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
 */async function xN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await bs(t,T1(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=zp(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
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
 */async function N1(t,e,n=!1){const r="signIn",i=await T1(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function IN(t,e){return N1(xi(t),e)}async function TN(t,e,n){var r;const i=xi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await bu(i,s,"signUpPassword");o=Cd(i,u)}else o=Cd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await bu(i,s,"signUpPassword");return Cd(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await pi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function NN(t,e,n){return IN(ct(t),Hs.credential(e,n))}/**
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
 */async function RN(t,e){return bi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function PN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ct(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await bs(r,RN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function AN(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function ON(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function LN(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function DN(t){return ct(t).signOut()}const Iu="__sak";/**
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
 */class R1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Iu,"1"),this.storage.removeItem(Iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function MN(){const t=tt();return Up(t)||mc(t)}const jN=1e3,FN=10;class P1 extends R1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MN()&&oN(),this.fallbackToPolling=E1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P1.type="LOCAL";const zN=P1;/**
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
 */class A1 extends R1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A1.type="SESSION";const O1=A1;/**
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
 */function UN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await UN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
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
 */function Bp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $N{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Bp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function WN(t){vn().location.href=t}/**
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
 */function L1(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function HN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VN(){return L1()?self:null}/**
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
 */const D1="firebaseLocalStorageDb",GN=1,Tu="firebaseLocalStorage",M1="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vc(t,e){return t.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function qN(){const t=indexedDB.deleteDatabase(D1);return new Ma(t).toPromise()}function Zf(){const t=indexedDB.open(D1,GN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tu,{keyPath:M1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tu)?e(r):(r.close(),await qN(),e(await Zf()))})})}async function Bv(t,e,n){const r=vc(t,!0).put({[M1]:e,value:n});return new Ma(r).toPromise()}async function KN(t,e){const n=vc(t,!1).get(e),r=await new Ma(n).toPromise();return r===void 0?null:r.value}function Vv(t,e){const n=vc(t,!0).delete(e);return new Ma(n).toPromise()}const YN=800,QN=3;class j1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(VN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HN(),!this.activeServiceWorker)return;this.sender=new $N(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zf();return await Bv(e,Iu,"1"),await Vv(e,Iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vc(i,!1).getAll();return new Ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j1.type="LOCAL";const XN=j1;new Oa(3e4,6e4);/**
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
 */function F1(t,e){return e?Tn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vp extends $p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JN(t){return N1(t.auth,new Vp(t),t.bypassAuthState)}function ZN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),xN(n,new Vp(t),t.bypassAuthState)}async function eR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),bN(n,new Vp(t),t.bypassAuthState)}/**
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
 */class z1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JN;case"linkViaPopup":case"linkViaRedirect":return eR;case"reauthViaPopup":case"reauthViaRedirect":return ZN;default:$t(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tR=new Oa(2e3,1e4);async function nR(t,e,n){const r=xi(t);$T(t,e,Hp);const i=F1(r,n);return new Xr(r,"signInViaPopup",e,i).executeNotNull()}class Xr extends z1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Bp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tR.get())};e()}}Xr.currentPopupAction=null;/**
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
 */const rR="pendingRedirect",$l=new Map;class iR extends z1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await sR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sR(t,e){const n=lR(e),r=aR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function oR(t,e){$l.set(t._key(),e)}function aR(t){return Tn(t._redirectPersistence)}function lR(t){return Ul(rR,t.config.apiKey,t.name)}async function uR(t,e,n=!1){const r=xi(t),i=F1(r,e),o=await new iR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cR=10*60*1e3;class dR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gv(e))}saveEventToCache(e){this.cachedEventUids.add(Gv(e)),this.lastProcessedEventTime=Date.now()}}function Gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U1(t);default:return!1}}/**
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
 */async function hR(t,e={}){return bi(t,"GET","/v1/projects",e)}/**
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
 */const pR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mR=/^https?/;async function gR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hR(t);for(const n of e)try{if(vR(n))return}catch{}$t(t,"unauthorized-domain")}function vR(t){const e=Jf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mR.test(n))return!1;if(pR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const yR=new Oa(3e4,6e4);function qv(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _R(t){return new Promise((e,n)=>{var r,i,s;function o(){qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qv(),n(gn(t,"network-request-failed"))},timeout:yR.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const a=lN("iframefcb");return vn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},b1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wl=null,e})}let Wl=null;function wR(t){return Wl=Wl||_R(t),Wl}/**
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
 */const ER=new Oa(5e3,15e3),kR="__/auth/iframe",SR="emulator/auth/iframe",CR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xR(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fp(e,SR):`https://${t.config.authDomain}/${kR}`,r={apiKey:e.apiKey,appName:t.name,v:$s},i=bR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Us(r).slice(1)}`}async function IR(t){const e=await wR(t),n=vn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:xR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=vn().setTimeout(()=>{s(o)},ER.get());function l(){vn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const TR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NR=500,RR=600,PR="_blank",AR="http://localhost";class Kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OR(t,e,n,r=NR,i=RR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=tt().toLowerCase();n&&(a=g1(u)?PR:n),m1(u)&&(e=e||AR,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(iN(u)&&a!=="_self")return LR(e||"",a),new Kv(null);const d=window.open(e||"",a,c);G(d,t,"popup-blocked");try{d.focus()}catch{}return new Kv(d)}function LR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DR="__/auth/handler",MR="emulator/auth/handler",jR=encodeURIComponent("fac");async function Yv(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:i};if(e instanceof Hp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Da){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${jR}=${encodeURIComponent(l)}`:"";return`${FR(t)}?${Us(a).slice(1)}${u}`}function FR({config:t}){return t.emulator?Fp(t,MR):`https://${t.authDomain}/${DR}`}/**
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
 */const bd="webStorageSupport";class zR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O1,this._completeRedirectFn=uR,this._overrideRedirectResult=oR}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Yv(e,n,r,Jf(),i);return OR(e,o,Bp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Yv(e,n,r,Jf(),i);return WN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IR(e),r=new dR(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bd,{type:bd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bd];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return E1()||Up()||mc()}}const UR=zR;var Qv="@firebase/auth",Xv="1.1.0";/**
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
 */class $R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HR(t){Cs(new di("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:k1(t)},u=new hN(r,i,s,l);return mN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cs(new di("auth-internal",e=>{const n=xi(e.getProvider("auth").getImmediate());return(r=>new $R(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sr(Qv,Xv,WR(t)),Sr(Qv,Xv,"esm2017")}/**
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
 */const BR=5*60,VR=Xw("authIdTokenMaxAge")||BR;let Jv=null;const GR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>VR)return;const i=n==null?void 0:n.token;Jv!==i&&(Jv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qR(t=i1()){const e=Dp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pN(t,{popupRedirectResolver:UR,persistence:[XN,zN,O1]}),r=Xw("authTokenSyncURL");if(r){const s=GR(r);ON(n,s,()=>s(n.currentUser)),AN(n,o=>s(o))}const i=Yw("auth");return i&&gN(n,`http://${i}`),n}HR("Browser");const xd={user:null,isLogged:!1,isCreateSuccess:!1},Ii=()=>{const t=qR(Xf),[e,n]=k.useState(null),[r,i]=k.useState(null);return k.useEffect(()=>{LN(t,u=>{u?(i(u),n(u.uid),sessionStorage.setItem("uid",u.uid)):(i(null),n(null),sessionStorage.removeItem("uid"))})},[t]),{uid:e,currentUser:r,createUser:async(u,c,d)=>{let f=xd;return await TN(t,u,c).then(_=>{f.isCreateSuccess=!0,f.user=_.user,PN(f.user,{displayName:d})}).catch(_=>{throw new Error(_.code)}),f},loginWithEmail:async(u,c)=>{let d=xd;return await NN(t,u,c).then(f=>{d.isLogged=!0,d.user=f.user}).catch(f=>{throw new Error(f.code)}),d},loginWithGoogle:async(u="")=>{let c=xd;const d=new Cn;return u.length>=3&&d.setCustomParameters({login_hint:u}),await nR(t,d).then(f=>{c.isLogged=!0,c.user=f.user}).catch(f=>{throw new Error(f.code)}),c},logout:async()=>{DN(t).then(()=>"Nastąpiło wylogowanie").catch(u=>{throw new Error(u.code)})}}},pl=(t,e)=>{let n=t===e;return t!=="/"&&(t=t.split("/"),n=e.includes(t[1])),n},$1=k.memo(()=>{const{uid:t}=Ii(),{setIsShown:e}=k.useContext(Ra),{currentPage:n,setCurrentPage:r}=k.useContext(Wt),i=[{name:"Główna",path:"/",icon:"icon-house",type:"link"},{name:"Szukaj",path:"/szukaj",icon:"icon-magnifying_glass",type:"button"},{name:"Wiki",path:"/wiki",icon:"icon-globe",type:"link"},{name:t?"Wyloguj się":"Zapisz się",path:t?"/wylogowanie":"/rejestracja",icon:t?"icon-signout":"icon-signup",type:"link"}],s=()=>{e(!1)},o=()=>{e(!0),r("/szukaj")},a=p.jsx("nav",{className:$r.menu,children:p.jsx("ul",{children:i.map(l=>p.jsx("li",{children:l.type==="link"?p.jsxs(Oi,{to:l.path,className:pl(n,l.path)?$r.highlight:"",onClick:()=>{s()},children:[pl(n,l.path)?p.jsx("svg",{className:`icon ${$r.icon} ${l.icon}_solid`,children:p.jsx("use",{xlinkHref:`${fn}#${l.icon}_solid`})}):p.jsx("svg",{className:`icon ${$r.icon} ${l.icon}`,children:p.jsx("use",{xlinkHref:`${fn}#${l.icon}`})}),l.name]}):p.jsxs("div",{onClick:o,to:l.path,className:pl(n,l.path)?$r.highlight:"",children:[pl(n,l.path)?p.jsx("svg",{className:`icon ${$r.icon} ${l.icon}_solid`,children:p.jsx("use",{xlinkHref:`${fn}#${l.icon}_solid`})}):p.jsx("svg",{className:`icon ${$r.icon} ${l.icon}`,children:p.jsx("use",{xlinkHref:`${fn}#${l.icon}`})}),l.name]})},l.name))})});return Iw.createPortal(a,document.getElementById("overlays"))});$1.displayName="MobileMenu";const W1="/assets/logo-3e93847a.webp",KR="_nav_ohanc_1",YR={nav:KR},H1=k.memo(()=>{const{uid:t}=Ii(),{width:e}=k.useContext(Wt);let n=e>=1130?"Pilot Training Arma Project":"PTAP",r=p.jsxs(p.Fragment,{children:[p.jsxs(Ft,{to:"/",title:"Przejdź na stronę główną",children:[p.jsx("img",{src:W1,alt:"logo"}),p.jsx("h2",{children:n})]}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(Oi,{to:"/",children:"Strona główna"})}),p.jsx("li",{children:p.jsx(Oi,{to:"/wiki",children:"Wiki"})}),t&&p.jsx("li",{children:p.jsx(Oi,{to:"/console",children:"Konsola"})}),p.jsx("li",{children:t?p.jsx(Oi,{to:"/wylogowanie",children:"Wyloguj się"}):p.jsx(Oi,{to:"/rejestracja",children:"Zapisz się"})}),p.jsx("li",{children:p.jsx(Bw,{})})]})]});return p.jsx(p.Fragment,{children:e>875?p.jsx("nav",{className:YR.nav,children:r}):p.jsx($1,{})})});H1.displayName="Nav";const QR="_footer_3cly8_1",XR="_bottom_3cly8_35",Id={footer:QR,bottom:XR},jr=k.memo(()=>{const[t,e]=k.useState(0),{width:n}=k.useContext(Wt);return k.useEffect(()=>{document.querySelector("nav")&&n<=740?e(document.querySelector("nav").clientHeight):e(0)},[n]),p.jsxs("footer",{className:Id.footer,style:{marginBottom:`${t}px`},children:[p.jsx("div",{className:Id.top,children:p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(Ft,{to:"/sign-up",children:"Zapisz się do projektu"})}),p.jsx("li",{children:p.jsx(Ft,{to:"/feedback",children:"Zgłoś błąd na stronie"})}),p.jsx("li",{children:p.jsx(Ft,{to:"/console",children:"Konsola administracyjna"})})]})}),p.jsx("div",{className:Id.bottom,children:p.jsx("p",{children:"PTAP 2018-2023 © Wszelkie prawa zastrzeżone"})})]})});jr.displayName="Fotter";const JR=()=>{let t;const e=[],n={vendor:void 0,id:void 0,src:void 0,thumbnail:void 0,title:void 0,initialized:!1,y:void 0,debounce:250,lazyload:!0,autoplay:!0,initinview:!1,onLoad:v=>{},onAppend:v=>{},onThumbnailLoad:v=>{}},r={regex:{youtube_nocookie:/(?:youtube-nocookie\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=)))([a-zA-Z0-9_-]{6,11})/,youtube:/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,vimeo:/vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/},condition:{youtube:v=>v&&v[1].length==11?v[1]:!1,youtube_nocookie:v=>v&&v[1].length==11?v[1]:!1,vimeo:v=>v&&v[1].length===9||v[1].length===8?v[1]:!1},src:{youtube:v=>`https://www.youtube.com/embed/${v.id}/?autoplay=${v.autoplay?"1":"0"}&${v.query}`,youtube_nocookie:v=>`https://www.youtube-nocookie.com/embed/${v.id}/?autoplay=${v.autoplay?"1":"0"}&${v.query}`,vimeo:v=>`https://player.vimeo.com/video/${v.id}/?autoplay=${v.autoplay?"1":"0"}&${v.query}`},endpoint:v=>`https://noembed.com/embed?url=${v.src}`,response:{title:v=>v.title,thumbnail:v=>v.thumbnail_url}};function i(v,...w){if(t=Object.assign({},n,w[0]),typeof v=="string"){const S=document.querySelectorAll(v);for(let y=0;y<S.length;y++)s(S[y])}else if(typeof v.length>"u")s(v);else for(let S=0;S<v.length;S++)s(v[S]);t.lazyload&&d()}function s(v){if(!(v instanceof HTMLElement)||v.classList.contains("lazyframe--loaded"))return;const w={el:v,settings:o(v)};w.el.addEventListener("click",()=>{w.el.appendChild(w.iframe);const S=v.querySelectorAll("iframe");w.settings.onAppend.call(this,S[0])}),t.lazyload?f(w):u(w,!!w.settings.thumbnail)}function o(v){const w=Array.prototype.slice.apply(v.attributes).filter(y=>y.value!=="").reduce((y,h)=>{let m=h.name.indexOf("data-")===0?h.name.split("data-")[1]:h.name;return y[m]=h.value,y},{}),S=Object.assign({},t,w,{y:v.offsetTop,originalSrc:w.src,query:a(w.src)});if(S.vendor){const y=S.src.match(r.regex[S.vendor]);S.id=r.condition[S.vendor](y)}return S}function a(v){const w=v.split("?");return w[1]?w[1]:null}function l(v){return v.vendor?!v.title||!v.thumbnail:!1}function u(v){l(v.settings)?c(v,(w,S)=>{if(w)return;const y=S[0],h=S[1];if(h.settings.title||(h.settings.title=r.response.title(y)),!h.settings.thumbnail){const m=r.response.thumbnail(y);h.settings.thumbnail=m,v.settings.onThumbnailLoad.call(this,m)}f(h,!0)}):f(v,!0)}function c(v,w){const S=r.endpoint(v.settings),y=new XMLHttpRequest;y.open("GET",S,!0),y.onload=function(){if(y.status>=200&&y.status<400){const h=JSON.parse(y.responseText);w(null,[h,v])}else w(!0)},y.onerror=function(){w(!0)},y.send()}function d(){const v=window.innerHeight;let w=e.length;const S=(E,C)=>{E.settings.initialized=!0,E.el.classList.add("lazyframe--loaded"),w--,u(E),E.settings.initinview&&E.el.click(),E.settings.onLoad.call(this,E)};e.filter(E=>E.settings.y<v).forEach(S);const y=g(()=>{m=h<window.pageYOffset,h=window.pageYOffset,m&&e.filter(E=>E.settings.y<v+h&&E.settings.initialized===!1).forEach(S),w===0&&window.removeEventListener("scroll",y,!1)},t.debounce);let h=0,m=!1;window.addEventListener("scroll",y,!1);function g(E,C,b){let I;return function(){let N=this,D=arguments,V=function(){I=null,b||E.apply(N,D)},Z=b&&!I;clearTimeout(I),I=setTimeout(V,C),Z&&E.apply(N,D)}}}function f(v,w){if(v.iframe=_(v.settings),v.settings.thumbnail&&w&&(v.el.style.backgroundImage=`url(${v.settings.thumbnail})`),v.settings.title&&v.el.children.length===0){const S=document.createDocumentFragment(),y=document.createElement("span");y.className="lazyframe__title",y.innerHTML=v.settings.title,S.appendChild(y),v.el.appendChild(S)}t.lazyload||(v.el.classList.add("lazyframe--loaded"),v.settings.onLoad.call(this,v),e.push(v)),v.settings.initialized||e.push(v)}function _(v){const w=document.createDocumentFragment(),S=document.createElement("iframe");return v.vendor&&(v.src=r.src[v.vendor](v)),S.setAttribute("id",`lazyframe-${v.id}`),S.setAttribute("src",v.src),S.setAttribute("frameborder",0),S.setAttribute("allowfullscreen",""),v.autoplay&&(S.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),w.appendChild(S),w}return i},ZR=JR(),eh=t=>{const e=k.useCallback(()=>{},[]);return document.addEventListener("touchstart",e,{passive:!0}),ZR(".lazyframe"),p.jsxs("div",{className:t.video,children:[p.jsx("p",{children:t.header?t.header:""}),p.jsx("iframe",{className:`${t.className?t.className:""} lazyframe`,width:t.width?t.width:"560",height:t.height?t.height:"315",src:t.src?t.src:"",title:t.title?t.title:"YouTube video player",allow:t.allow?t.allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})};eh.propTypes={video:R.string.isRequired,header:R.string,className:R.string,width:R.string,height:R.string,src:R.string,title:R.string,allow:R.bool};const eP="_button_1xu07_1",tP="_highlight_1xu07_19",Nu={button:eP,"button-link":"_button-link_1xu07_2",highlight:tP},mi=({to:t,className:e,highlighted:n,onClick:r,children:i})=>(n==null&&(n=!0),p.jsx(Ft,{to:t,className:`${Nu["button-link"]} ${e||""} ${n?Nu.highlight:""}`,onClick:r||(()=>{}),children:i}));mi.propTypes={to:R.string.isRequired,className:R.string,highlighted:R.bool,onClick:R.func,children:R.any};const yn=({to:t,className:e,highlighted:n,type:r,onClick:i,children:s})=>{const o=Fs(),a=()=>{o(t,{replace:!0})};return n==null&&(n=!0),p.jsx("button",{type:r||"button",onClick:()=>{t&&a(),i&&i()},className:`${Nu.button} ${e||""} ${n?Nu.highlight:""}`,children:s})};yn.propTypes={to:R.string,className:R.string,highlighted:R.bool,type:R.string,onClick:R.func,children:R.any};const nP="/assets/autorotacja-c59c514a.webp",rP="_iframe_ywtud_20",iP="_video_ywtud_28",fo={"index-banner":"_index-banner_ywtud_1",iframe:rP,video:iP},sP=()=>{const{width:t}=k.useContext(Wt);return p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx("section",{className:`section ${fo["index-banner"]}`,children:p.jsxs("header",{children:[t<=740?p.jsx("img",{src:W1,alt:"Logo",width:"100",height:"100"}):"",p.jsx("h1",{children:"PTAP"}),p.jsx("h2",{children:"Pilot Training Arma Project"}),p.jsx("p",{children:"PTAP jest to projekt utworzony przez BowiX'a i ArrowX'a w grupie ARHD, którego celem było zapewnienie odpowiednich warunków szkoleniowych do nauki pilotażu."}),p.jsx("p",{children:"Obecnie strona służy do zapoznania z ogólnymi zagadnieniami lotnictwa w Armie 3. Na tej stronie dowiesz się jak przygotować się do lotu jak i znajdziesz pare bardziej zaawansowanych zagadnień."})]})}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{children:"Autorotacja"}),p.jsx("p",{children:"Manewr wykorzystywany do awaryjnego lądowania. Dzięki energii z powietrza, łopaty wirnika głównego pobudzane są do ruchu co pozwala na opanowanie maszyny i bezpieczne posadzenie jej na ziemię."}),p.jsxs("figure",{children:[p.jsx("img",{src:nP,alt:"Zdjęcie ukazujące przepływ powietrza podczas autorotacji",width:"332",height:"187"}),p.jsx("figcaption",{children:"Przepływ powietrza podczas autorotacji"})]})]}),p.jsxs("section",{className:"section",children:[p.jsx(eh,{video:fo.video,src:"https://www.youtube.com/embed/v8pn1f3ijLI",className:fo.iframe,header:"Manewry Little Birdem - autorotacja"}),p.jsx(eh,{video:fo.video,src:"https://www.youtube.com/embed/videoseries?list=PLsQ6ua1LSZQwRoOCiVa-0d1eL9wk0aVGj",className:fo.iframe,header:"MH-6/AH-6 Little Bird - lądowania"})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{children:"Wiki"}),p.jsx("h3",{children:"Zobacz więcej artykułów na wiki"}),p.jsx(mi,{to:"/wiki",children:"Przejdź do wiki"})]})]}),p.jsx(jr,{})]})},oP=()=>{const t=Vn(),e=/\/wiki\/.*/i.test(t.pathname);return p.jsxs(p.Fragment,{children:[e?p.jsx(Na,{}):"",p.jsx("main",{children:p.jsx("section",{className:"section",children:p.jsx(zw,{})})}),p.jsx(jr,{})]})},Zv="@firebase/database",ey="1.0.1";/**
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
 */let B1="";function aP(t){B1=t}/**
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
 */class lP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:aa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class uP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const V1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lP(e)}}catch{}return new uP},Jr=V1("localStorage"),th=V1("sessionStorage");/**
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
 */const us=new Op("@firebase/database"),cP=function(){let t=1;return function(){return t++}}(),G1=function(t){const e=RI(t),n=new xI;n.update(e);const r=n.digest();return Rp.encodeByteArray(r)},ja=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ja.apply(null,r):typeof r=="object"?e+=He(r):e+=r,e+=" "}return e};let ii=null,ty=!0;const dP=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(us.logLevel=ce.VERBOSE,ii=us.log.bind(us),e&&th.set("logging_enabled",!0)):typeof t=="function"?ii=t:(ii=null,th.remove("logging_enabled"))},Ge=function(...t){if(ty===!0&&(ty=!1,ii===null&&th.get("logging_enabled")===!0&&dP(!0)),ii){const e=ja.apply(null,t);ii(e)}},Fa=function(t){return function(...e){Ge(t,...e)}},nh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ja(...t);us.error(e)},Fn=function(...t){const e=`FIREBASE FATAL ERROR: ${ja(...t)}`;throw us.error(e),new Error(e)},at=function(...t){const e="FIREBASE WARNING: "+ja(...t);us.warn(e)},fP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xs="[MIN_NAME]",gi="[MAX_NAME]",Ti=function(t,e){if(t===e)return 0;if(t===xs||e===gi)return-1;if(e===xs||t===gi)return 1;{const n=ny(t),r=ny(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},pP=function(t,e){return t===e?0:t<e?-1:1},ho=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+He(e))},qp=function(t){if(typeof t!="object"||t===null)return He(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=He(e[r]),n+=":",n+=qp(t[e[r]]);return n+="}",n},q1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ye(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const K1=function(t){L(!Gp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},mP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const yP=new RegExp("^-?(0*)\\d{1,10}$"),_P=-2147483648,wP=2147483647,ny=function(t){if(yP.test(t)){const e=Number(t);if(e>=_P&&e<=wP)return e}return null},Bs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},EP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class kP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class SP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class cs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cs.OWNER="owner";/**
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
 */const Kp="5",Y1="v",Q1="s",X1="r",J1="f",Z1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,eE="ls",tE="p",rh="ac",nE="websocket",rE="long_polling";/**
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
 */class iE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function CP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function sE(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let r;if(e===nE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===rE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CP(t)&&(n.ns=t.namespace);const i=[];return Ye(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class bP{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return uI(this.counters_)}}/**
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
 */const Td={},Nd={};function Yp(t){const e=t.toString();return Td[e]||(Td[e]=new bP),Td[e]}function xP(t,e){const n=t.toString();return Nd[n]||(Nd[n]=e()),Nd[n]}/**
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
 */class IP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Bs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ry="start",TP="close",NP="pLPCommand",RP="pRTLPCB",oE="id",aE="pw",lE="ser",PP="cb",AP="seg",OP="ts",LP="d",DP="dframe",uE=1870,cE=30,MP=uE-cE,jP=25e3,FP=3e4;class Yi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fa(e),this.stats_=Yp(n),this.urlFn=l=>(this.appCheckToken&&(l[rh]=this.appCheckToken),sE(n,rE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new IP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FP)),hP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ry)this.id=a,this.password=l;else if(o===TP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[ry]="t",r[lE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[PP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Y1]=Kp,this.transportSessionId&&(r[Q1]=this.transportSessionId),this.lastSessionId&&(r[eE]=this.lastSessionId),this.applicationId&&(r[tE]=this.applicationId),this.appCheckToken&&(r[rh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Z1.test(location.hostname)&&(r[X1]=J1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yi.forceAllow_=!0}static forceDisallow(){Yi.forceDisallow_=!0}static isAvailable(){return Yi.forceAllow_?!0:!Yi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mP()&&!gP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=qw(n),i=q1(r,MP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[DP]="t",r[oE]=e,r[aE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cP(),window[NP+this.uniqueCallbackIdentifier]=e,window[RP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oE]=this.myID,e[aE]=this.myPW,e[lE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cE+r.length<=uE;){const o=this.pendingSegs.shift();r=r+"&"+AP+i+"="+o.seg+"&"+OP+i+"="+o.ts+"&"+LP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(jP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const zP=16384,UP=45e3;let Ru=null;typeof MozWebSocket<"u"?Ru=MozWebSocket:typeof WebSocket<"u"&&(Ru=WebSocket);class Xt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fa(this.connId),this.stats_=Yp(n),this.connURL=Xt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Y1]=Kp,typeof location<"u"&&location.hostname&&Z1.test(location.hostname)&&(o[X1]=J1),n&&(o[Q1]=n),r&&(o[eE]=r),i&&(o[rh]=i),s&&(o[tE]=s),sE(e,nE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jr.set("previous_websocket_failure",!0);try{let r;Zw(),this.mySock=new Ru(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ru!==null&&!Xt.forceDisallow_}static previouslyFailed(){return Jr.isInMemoryStorage||Jr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=aa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=q1(n,zP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(UP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xt.responsesRequiredToBeHealthy=2;Xt.healthyTimeout=3e4;/**
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
 */class da{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yi,Xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xt&&Xt.isAvailable();let r=n&&!Xt.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xt];else{const i=this.transports_=[];for(const s of da.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);da.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}da.globalTransportInitialized_=!1;/**
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
 */const $P=6e4,WP=5e3,HP=10*1024,BP=100*1024,Rd="t",iy="d",VP="s",sy="r",GP="e",oy="o",ay="a",ly="n",uy="p",qP="h";class KP{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fa("c:"+this.id+":"),this.transportManager_=new da(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>BP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rd in e){const n=e[Rd];n===ay?this.upgradeIfSecondaryHealthy_():n===sy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===oy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ho("t",e),r=ho("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:uy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ay,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ly,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ho("t",e),r=ho("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ho(Rd,e);if(iy in e){const r=e[iy];if(n===qP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ly){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VP?this.onConnectionShutdown_(r):n===sy?this.onReset_(r):n===GP?nh("Server Error: "+r):n===oy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kp!==r&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($P))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:uy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class dE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class fE{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Pu extends fE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ap()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pu}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const cy=32,dy=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new de("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tr(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function Xp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function YP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function pt(t,e){const n=X(t),r=X(e);if(n===null)return e;if(n===r)return pt(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function QP(t,e){const n=fa(t,0),r=fa(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ti(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Jp(t,e){if(Tr(t)!==Tr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Dt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tr(t)>Tr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class XP{constructor(e,n){this.errorPrefix_=n,this.parts_=fa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=pc(this.parts_[r]);pE(this)}}function JP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=pc(e),pE(t)}function ZP(t){const e=t.parts_.pop();t.byteLength_-=pc(e),t.parts_.length>0&&(t.byteLength_-=1)}function pE(t){if(t.byteLength_>dy)throw new Error(t.errorPrefix_+"has a key path longer than "+dy+" bytes ("+t.byteLength_+").");if(t.parts_.length>cy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+cy+") or object contains a cycle "+Gr(t))}function Gr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Zp extends fE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zp}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const po=1e3,e2=60*5*1e3,fy=30*1e3,t2=1.3,n2=3e4,r2="server_kill",hy=3;class An extends dE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=An.nextPersistentConnectionId_++,this.log_=Fa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=po,this.maxReconnectDelay_=e2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Zw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(He(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Pa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;An.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const r=Ss(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):nh("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=po,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=po,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>n2&&(this.reconnectDelay_=po),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*t2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+An.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new KP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{at(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(r2)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&at(d),l())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vf(this.interruptReasons_)&&(this.reconnectDelay_=po,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>qp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hy&&(this.reconnectDelay_=fy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+B1.replace(/\./g,"-")]=1,Ap()?e["framework.cordova"]=1:Jw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pu.getInstance().currentlyOnline();return Vf(this.interruptReasons_)&&e}}An.nextPersistentConnectionId_=0;An.nextConnectionId_=0;/**
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
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
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
 */class yc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new J(xs,e),i=new J(xs,n);return this.compare(r,i)!==0}minPost(){return J.MIN}}/**
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
 */let ml;class mE extends yc{static get __EMPTY_NODE(){return ml}static set __EMPTY_NODE(e){ml=e}compare(e,n){return Ti(e.name,n.name)}isDefinedOn(e){throw zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(gi,ml)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,ml)}toString(){return".key"}}const ds=new mE;/**
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
 */class gl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??mt.EMPTY_NODE,this.right=s??mt.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class i2{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new gl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new gl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new gl(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new i2;/**
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
 */function s2(t,e){return Ti(t.name,e.name)}function em(t,e){return Ti(t,e)}/**
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
 */let ih;function o2(t){ih=t}const gE=function(t){return typeof t=="number"?"number:"+K1(t):"string:"+t},vE=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else L(t===ih||t.isEmpty(),"priority of unexpected type.");L(t===ih||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let py;class ze{constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vE(this.priorityNode_)}static set __childrenNodeConstructor(e){py=e}static get __childrenNodeConstructor(){return py}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:X(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=X(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=K1(this.value_):e+=this.value_,this.lazyHash_=G1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ze.VALUE_TYPE_ORDER.indexOf(n),s=ze.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+n),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yE,_E;function a2(t){yE=t}function l2(t){_E=t}class u2 extends yc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ti(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(gi,new ze("[PRIORITY-POST]",_E))}makePost(e,n){const r=yE(e);return new J(n,new ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const Te=new u2;/**
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
 */const c2=Math.log(2);class d2{constructor(e){const n=s=>parseInt(Math.log(s)/c2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Au=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new $e(f,d.node,$e.BLACK,null,null);{const _=parseInt(c/2,10)+l,v=i(l,_),w=i(_+1,u);return d=t[_],f=n?n(d):d,new $e(f,d.node,$e.BLACK,v,w)}},s=function(l){let u=null,c=null,d=t.length;const f=function(v,w){const S=d-v,y=d;d-=v;const h=i(S+1,y),m=t[S],g=n?n(m):m;_(new $e(g,m.node,w,null,h))},_=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const w=l.nextBitIsOne(),S=Math.pow(2,l.count-(v+1));w?f(S,$e.BLACK):(f(S,$e.BLACK),f(S,$e.RED))}return c},o=new d2(t.length),a=s(o);return new mt(r||e,a)};/**
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
 */let Pd;const Pi={};class Nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Pi&&Te,"ChildrenNode.ts has not been loaded"),Pd=Pd||new Nn({".priority":Pi},{".priority":Te}),Pd}get(e){const n=Ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){L(e!==ds,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(J.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Au(r,e.getCompare()):a=Pi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Nn(c,u)}addToIndexes(e,n){const r=wu(this.indexes_,(i,s)=>{const o=Ss(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===Pi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(J.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Au(a,o.getCompare())}else return Pi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new J(e.name,a))),l.insert(e,e.node)}});return new Nn(r,this.indexSet_)}removeFromIndexes(e,n){const r=wu(this.indexes_,i=>{if(i===Pi)return i;{const s=n.get(e.name);return s?i.remove(new J(e.name,s)):i}});return new Nn(r,this.indexSet_)}}/**
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
 */let mo;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&vE(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mo||(mo=new B(new mt(em),null,Nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mo}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mo:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new J(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?mo:this.priorityNode_;return new B(i,o,s)}}updateChild(e,n){const r=X(e);if(r===null)return n;{L(X(e)!==".priority"||Tr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(pe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),r++,s&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gE(this.getPriority().val())+":"),this.forEachChild(Te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":G1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new J(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,J.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===za?-1:0}withIndex(e){if(e===ds||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ds||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Te),i=n.getIterator(Te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ds?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class f2 extends B{constructor(){super(new mt(em),B.EMPTY_NODE,Nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const za=new f2;Object.defineProperties(J,{MIN:{value:new J(xs,B.EMPTY_NODE)},MAX:{value:new J(gi,za)}});mE.__EMPTY_NODE=B.EMPTY_NODE;ze.__childrenNodeConstructor=B;o2(za);l2(za);/**
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
 */const h2=!0;function We(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ze(n,We(e))}if(!(t instanceof Array)&&h2){const n=[];let r=!1;if(Ye(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=We(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new J(o,l)))}}),n.length===0)return B.EMPTY_NODE;const s=Au(n,s2,o=>o.name,em);if(r){const o=Au(n,Te.getCompare());return new B(s,We(e),new Nn({".priority":o},{".priority":Te}))}else return new B(s,We(e),Nn.Default)}else{let n=B.EMPTY_NODE;return Ye(t,(r,i)=>{if(_n(t,r)&&r.substring(0,1)!=="."){const s=We(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(We(e))}}a2(We);/**
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
 */class p2 extends yc{constructor(e){super(),this.indexPath_=e,L(!ee(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ti(e.name,n.name):s}makePost(e,n){const r=We(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new J(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,za);return new J(gi,e)}toString(){return fa(this.indexPath_,0).join("/")}}/**
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
 */class m2 extends yc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ti(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const r=We(e);return new J(n,r)}toString(){return".value"}}const g2=new m2;/**
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
 */function wE(t){return{type:"value",snapshotNode:t}}function Is(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ha(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function pa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function v2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class tm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ha(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Is(n,r)):o.trackChildChange(pa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,s)=>{n.hasChild(i)||r.trackChildChange(ha(i,s))}),n.isLeafNode()||n.forEachChild(Te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(pa(i,s,o))}else r.trackChildChange(Is(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ma{constructor(e){this.indexedFilter_=new tm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ma.getStartPost_(e),this.endPost_=ma.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new J(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(Te,(o,a)=>{s.matches(new J(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class y2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ma(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new J(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const l=new J(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(pa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ha(n,d));const w=a.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Is(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ha(u.name,u.node)),s.trackChildChange(Is(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,B.EMPTY_NODE)):e}}/**
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
 */class nm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xs}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new nm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _2(t){return t.loadsAllData()?new tm(t.getIndex()):t.hasLimit()?new y2(t):new ma(t)}function my(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===g2?n="$value":t.index_===ds?n="$key":(L(t.index_ instanceof p2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=He(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=He(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+He(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=He(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+He(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
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
 */class Ou extends dE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Fa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ou.getListenId_(e,r),a={};this.listens_[o]=a;const l=my(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Ss(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ou.getListenId_(e,n);delete this.listens_[r]}get(e){const n=my(e._queryParams),r=e._path.toString(),i=new Pa;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Us(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=aa(a.responseText)}catch{at("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&at("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class w2{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Lu(){return{value:null,children:new Map}}function EE(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=X(e);t.children.has(r)||t.children.set(r,Lu());const i=t.children.get(r);e=pe(e),EE(i,e,n)}}function sh(t,e,n){t.value!==null?n(e,t.value):E2(t,(r,i)=>{const s=new de(e.toString()+"/"+r);sh(i,s,n)})}function E2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class k2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ye(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const vy=10*1e3,S2=30*1e3,C2=5*60*1e3;class b2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new k2(e);const r=vy+(S2-vy)*Math.random();Mo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ye(e,(i,s)=>{s>0&&_n(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*C2))}}/**
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
 */var Zt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zt||(Zt={}));function rm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function im(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Du{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Zt.ACK_USER_WRITE,this.source=rm()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new Du(se(),n,this.revert)}}else return L(X(this.path)===e,"operationForChild called for unrelated child."),new Du(pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class ga{constructor(e,n){this.source=e,this.path=n,this.type=Zt.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new ga(this.source,se()):new ga(this.source,pe(this.path))}}/**
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
 */class vi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Zt.OVERWRITE}operationForChild(e){return ee(this.path)?new vi(this.source,se(),this.snap.getImmediateChild(e)):new vi(this.source,pe(this.path),this.snap)}}/**
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
 */class Ts{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Zt.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new vi(this.source,se(),n.value):new Ts(this.source,se(),n)}else return L(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ts(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class yi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class x2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function I2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(v2(o.childName,o.snapshotNode))}),go(t,i,"child_removed",e,r,n),go(t,i,"child_added",e,r,n),go(t,i,"child_moved",s,r,n),go(t,i,"child_changed",e,r,n),go(t,i,"value",e,r,n),i}function go(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>N2(t,a,l)),o.forEach(a=>{const l=T2(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function T2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function N2(t,e,n){if(e.childName==null||n.childName==null)throw zs("Should only compare child_ events.");const r=new J(e.childName,e.snapshotNode),i=new J(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function _c(t,e){return{eventCache:t,serverCache:e}}function jo(t,e,n,r){return _c(new yi(e,n,r),t.serverCache)}function kE(t,e,n,r){return _c(t.eventCache,new yi(e,n,r))}function oh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _i(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ad;const R2=()=>(Ad||(Ad=new mt(pP)),Ad);class he{constructor(e,n=R2()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return Ye(e,(r,i)=>{n=n.set(new de(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(ee(e))return null;{const r=X(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(pe(e),n);return s!=null?{path:Ie(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=X(e),r=this.children.get(n);return r!==null?r.subtree(pe(e)):new he(null)}}set(e,n){if(ee(e))return new he(n,this.children);{const r=X(e),s=(this.children.get(r)||new he(null)).set(pe(e),n),o=this.children.insert(r,s);return new he(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=X(e),r=this.children.get(n);if(r){const i=r.remove(pe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new he(null):new he(this.value,s)}else return this}}get(e){if(ee(e))return this.value;{const n=X(e),r=this.children.get(n);return r?r.get(pe(e)):null}}setTree(e,n){if(ee(e))return n;{const r=X(e),s=(this.children.get(r)||new he(null)).setTree(pe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new he(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ee(e))return null;{const s=X(e),o=this.children.get(s);return o?o.findOnPath_(pe(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,r){if(ee(e))return this;{this.value&&r(n,this.value);const i=X(e),s=this.children.get(i);return s?s.foreachOnPath_(pe(e),Ie(n,i),r):new he(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new he(null))}}function Fo(t,e,n){if(ee(e))return new sn(new he(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=pt(i,e);return s=s.updateChild(o,n),new sn(t.writeTree_.set(i,s))}else{const i=new he(n),s=t.writeTree_.setTree(e,i);return new sn(s)}}}function ah(t,e,n){let r=t;return Ye(n,(i,s)=>{r=Fo(r,Ie(e,i),s)}),r}function yy(t,e){if(ee(e))return sn.empty();{const n=t.writeTree_.setTree(e,new he(null));return new sn(n)}}function lh(t,e){return Ni(t,e)!=null}function Ni(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(pt(n.path,e)):null}function _y(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(r,i)=>{e.push(new J(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new J(r,i.value))}),e}function Cr(t,e){if(ee(e))return t;{const n=Ni(t,e);return n!=null?new sn(new he(n)):new sn(t.writeTree_.subtree(e))}}function uh(t){return t.writeTree_.isEmpty()}function Ns(t,e){return SE(se(),t.writeTree_,e)}function SE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=SE(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
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
 */function om(t,e){return IE(e,t)}function P2(t,e,n,r,i){L(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Fo(t.visibleWrites,e,n)),t.lastWriteId=r}function A2(t,e,n,r){L(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ah(t.visibleWrites,e,n),t.lastWriteId=r}function O2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function L2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&D2(a,r.path)?i=!1:Dt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return M2(t),!0;if(r.snap)t.visibleWrites=yy(t.visibleWrites,r.path);else{const a=r.children;Ye(a,l=>{t.visibleWrites=yy(t.visibleWrites,Ie(r.path,l))})}return!0}else return!1}function D2(t,e){if(t.snap)return Dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Dt(Ie(t.path,n),e))return!0;return!1}function M2(t){t.visibleWrites=CE(t.allWrites,j2,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function j2(t){return t.visible}function CE(t,e,n){let r=sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Dt(n,o)?(a=pt(n,o),r=Fo(r,a,s.snap)):Dt(o,n)&&(a=pt(o,n),r=Fo(r,se(),s.snap.getChild(a)));else if(s.children){if(Dt(n,o))a=pt(n,o),r=ah(r,a,s.children);else if(Dt(o,n))if(a=pt(o,n),ee(a))r=ah(r,se(),s.children);else{const l=Ss(s.children,X(a));if(l){const u=l.getChild(pe(a));r=Fo(r,se(),u)}}}else throw zs("WriteRecord should have .snap or .children")}}return r}function bE(t,e,n,r,i){if(!r&&!i){const s=Ni(t.visibleWrites,e);if(s!=null)return s;{const o=Cr(t.visibleWrites,e);if(uh(o))return n;if(n==null&&!lh(o,se()))return null;{const a=n||B.EMPTY_NODE;return Ns(o,a)}}}else{const s=Cr(t.visibleWrites,e);if(!i&&uh(s))return n;if(!i&&n==null&&!lh(s,se()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Dt(u.path,e)||Dt(e,u.path))},a=CE(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Ns(a,l)}}}function F2(t,e,n){let r=B.EMPTY_NODE;const i=Ni(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Cr(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=Ns(Cr(s,new de(o)),a);r=r.updateImmediateChild(o,l)}),_y(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Cr(t.visibleWrites,e);return _y(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function z2(t,e,n,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if(lh(t.visibleWrites,s))return null;{const o=Cr(t.visibleWrites,s);return uh(o)?i.getChild(n):Ns(o,i.getChild(n))}}function U2(t,e,n,r){const i=Ie(e,n),s=Ni(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Cr(t.visibleWrites,i);return Ns(o,r.getNode().getImmediateChild(n))}else return null}function $2(t,e){return Ni(t.visibleWrites,e)}function W2(t,e,n,r,i,s,o){let a;const l=Cr(t.visibleWrites,e),u=Ni(l,se());if(u!=null)a=u;else if(n!=null)a=Ns(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=f.getNext();return c}else return[]}function H2(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function Mu(t,e,n,r){return bE(t.writeTree,t.treePath,e,n,r)}function am(t,e){return F2(t.writeTree,t.treePath,e)}function wy(t,e,n,r){return z2(t.writeTree,t.treePath,e,n,r)}function ju(t,e){return $2(t.writeTree,Ie(t.treePath,e))}function B2(t,e,n,r,i,s){return W2(t.writeTree,t.treePath,e,n,r,i,s)}function lm(t,e,n){return U2(t.writeTree,t.treePath,e,n)}function xE(t,e){return IE(Ie(t.treePath,e),t.writeTree)}function IE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class V2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,pa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ha(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Is(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,pa(r,e.snapshotNode,i.oldSnap));else throw zs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class G2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const TE=new G2;class um{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new yi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_i(this.viewCache_),s=B2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function q2(t){return{filter:t}}function K2(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Y2(t,e,n,r,i){const s=new V2;let o,a;if(n.type===Zt.OVERWRITE){const u=n;u.source.fromUser?o=ch(t,e,u.path,u.snap,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ee(u.path),o=Fu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Zt.MERGE){const u=n;u.source.fromUser?o=X2(t,e,u.path,u.children,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=dh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Zt.ACK_USER_WRITE){const u=n;u.revert?o=eA(t,e,u.path,r,i,s):o=J2(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Zt.LISTEN_COMPLETE)o=Z2(t,e,n.path,r,s);else throw zs("Unknown operation type: "+n.type);const l=s.getChanges();return Q2(e,o,l),{viewCache:o,changes:l}}function Q2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=oh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(wE(oh(e)))}}function NE(t,e,n,r,i,s){const o=e.eventCache;if(ju(r,n)!=null)return e;{let a,l;if(ee(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=_i(e),c=u instanceof B?u:B.EMPTY_NODE,d=am(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Mu(r,_i(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=X(n);if(u===".priority"){L(Tr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=wy(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=pe(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=wy(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=lm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return jo(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Fu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ee(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),_,null)}else{const _=X(n);if(!l.isCompleteForPath(n)&&Tr(n)>1)return e;const v=pe(n),S=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=c.updatePriority(l.getNode(),S):u=c.updateChild(l.getNode(),_,S,v,TE,null)}const d=kE(e,u,l.isFullyInitialized()||ee(n),c.filtersNodes()),f=new um(i,d,s);return NE(t,d,n,i,f,a)}function ch(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new um(i,e,s);if(ee(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=jo(e,u,!0,t.filter.filtersNodes());else{const d=X(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=jo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=pe(n),_=a.getNode().getImmediateChild(d);let v;if(ee(f))v=r;else{const w=c.getCompleteChild(d);w!=null?Xp(f)===".priority"&&w.getChild(hE(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=B.EMPTY_NODE}if(_.equals(v))l=e;else{const w=t.filter.updateChild(a.getNode(),d,v,f,c,o);l=jo(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ey(t,e){return t.eventCache.isCompleteForChild(e)}function X2(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ie(n,l);Ey(e,X(c))&&(a=ch(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ie(n,l);Ey(e,X(c))||(a=ch(t,a,c,u,i,s,o))}),a}function ky(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function dh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ee(n)?u=r:u=new he(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=ky(t,_,f);l=Fu(t,l,new de(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),w=ky(t,v,f);l=Fu(t,l,new de(d),w,i,s,o,a)}}),l}function J2(t,e,n,r,i,s,o){if(ju(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Fu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ee(n)){let u=new he(null);return l.getNode().forEachChild(ds,(c,d)=>{u=u.set(new de(c),d)}),dh(t,e,n,u,i,s,a,o)}else return e}else{let u=new he(null);return r.foreach((c,d)=>{const f=Ie(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),dh(t,e,n,u,i,s,a,o)}}function Z2(t,e,n,r,i){const s=e.serverCache,o=kE(e,s.getNode(),s.isFullyInitialized()||ee(n),s.isFiltered());return NE(t,o,n,r,TE,i)}function eA(t,e,n,r,i,s){let o;if(ju(r,n)!=null)return e;{const a=new um(r,e,i),l=e.eventCache.getNode();let u;if(ee(n)||X(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Mu(r,_i(e));else{const d=e.serverCache.getNode();L(d instanceof B,"serverChildren would be complete if leaf node"),c=am(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=X(n);let d=lm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,pe(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,B.EMPTY_NODE,pe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mu(r,_i(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ju(r,se())!=null,jo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class tA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new tm(r.getIndex()),s=_2(r);this.processor_=q2(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(B.EMPTY_NODE,a.getNode(),null),c=new yi(l,o.isFullyInitialized(),i.filtersNodes()),d=new yi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=_c(d,c),this.eventGenerator_=new x2(this.query_)}get query(){return this.query_}}function nA(t){return t.viewCache_.serverCache.getNode()}function rA(t,e){const n=_i(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function Sy(t){return t.eventRegistrations_.length===0}function iA(t,e){t.eventRegistrations_.push(e)}function Cy(t,e,n){const r=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function by(t,e,n,r){e.type===Zt.MERGE&&e.source.queryId!==null&&(L(_i(t.viewCache_),"We should always have a full cache before handling merges"),L(oh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Y2(t.processor_,i,e,n,r);return K2(t.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,RE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function sA(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(s,o)=>{r.push(Is(s,o))}),n.isFullyInitialized()&&r.push(wE(n.getNode())),RE(t,r,n.getNode(),e)}function RE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return I2(t.eventGenerator_,e,n,i)}/**
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
 */let zu;class oA{constructor(){this.views=new Map}}function aA(t){L(!zu,"__referenceConstructor has already been defined"),zu=t}function lA(){return L(zu,"Reference.ts has not been loaded"),zu}function uA(t){return t.views.size===0}function cm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),by(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(by(o,e,n,r));return s}}function cA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Mu(n,i?r:null),l=!1;a?l=!0:r instanceof B?(a=am(n,r),l=!1):(a=B.EMPTY_NODE,l=!1);const u=_c(new yi(a,l,!1),new yi(r,i,!1));return new tA(e,u)}return o}function dA(t,e,n,r,i,s){const o=cA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),iA(o,n),sA(o,n)}function fA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Nr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Cy(u,n,r)),Sy(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Cy(l,n,r)),Sy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Nr(t)&&s.push(new(lA())(e._repo,e._path)),{removed:s,events:o}}function PE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function fs(t,e){let n=null;for(const r of t.views.values())n=n||rA(r,e);return n}function AE(t,e){if(e._queryParams.loadsAllData())return wc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function OE(t,e){return AE(t,e)!=null}function Nr(t){return wc(t)!=null}function wc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Uu;function hA(t){L(!Uu,"__referenceConstructor has already been defined"),Uu=t}function pA(){return L(Uu,"Reference.ts has not been loaded"),Uu}let mA=1;class xy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=H2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function LE(t,e,n,r,i){return P2(t.pendingWriteTree_,e,n,r,i),i?Vs(t,new vi(rm(),e,n)):[]}function gA(t,e,n,r){A2(t.pendingWriteTree_,e,n,r);const i=he.fromObject(n);return Vs(t,new Ts(rm(),e,i))}function dr(t,e,n=!1){const r=O2(t.pendingWriteTree_,e);if(L2(t.pendingWriteTree_,e)){let s=new he(null);return r.snap!=null?s=s.set(se(),!0):Ye(r.children,o=>{s=s.set(new de(o),!0)}),Vs(t,new Du(r.path,s,n))}else return[]}function Ec(t,e,n){return Vs(t,new vi(im(),e,n))}function vA(t,e,n){const r=he.fromObject(n);return Vs(t,new Ts(im(),e,r))}function yA(t,e){return Vs(t,new ga(im(),e))}function _A(t,e,n){const r=fm(t,n);if(r){const i=hm(r),s=i.path,o=i.queryId,a=pt(s,e),l=new ga(sm(o),a);return pm(t,s,l)}else return[]}function fh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||OE(o,e))){const l=fA(o,e,n,r);uA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,_)=>Nr(_));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=kA(f);for(let v=0;v<_.length;++v){const w=_[v],S=w.query,y=jE(t,w);t.listenProvider_.startListening(zo(S),$u(t,S),y.hashFn,y.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(zo(e),null):u.forEach(f=>{const _=t.queryToTagMap.get(kc(f));t.listenProvider_.stopListening(zo(f),_)}))}SA(t,u)}return a}function wA(t,e,n,r){const i=fm(t,r);if(i!=null){const s=hm(i),o=s.path,a=s.queryId,l=pt(o,e),u=new vi(sm(a),l,n);return pm(t,o,u)}else return[]}function EA(t,e,n,r){const i=fm(t,r);if(i){const s=hm(i),o=s.path,a=s.queryId,l=pt(o,e),u=he.fromObject(n),c=new Ts(sm(a),l,u);return pm(t,o,c)}else return[]}function Iy(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=pt(f,i);s=s||fs(_,v),o=o||Nr(_)});let a=t.syncPointTree_.get(i);a?(o=o||Nr(a),s=s||fs(a,se())):(a=new oA,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=fs(v,se());w&&(s=s.updateImmediateChild(_,w))}));const u=OE(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=kc(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=CA();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const c=om(t.pendingWriteTree_,i);let d=dA(a,e,n,c,s,l);if(!u&&!o&&!r){const f=AE(a,e);d=d.concat(bA(t,e,f))}return d}function dm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=pt(o,e),u=fs(a,l);if(u)return u});return bE(i,e,s,n,!0)}function Vs(t,e){return DE(e,t.syncPointTree_,null,om(t.pendingWriteTree_,se()))}function DE(t,e,n,r){if(ee(t.path))return ME(t,e,n,r);{const i=e.get(se());n==null&&i!=null&&(n=fs(i,se()));let s=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=xE(r,o);s=s.concat(DE(a,l,u,c))}return i&&(s=s.concat(cm(i,t,r,n))),s}}function ME(t,e,n,r){const i=e.get(se());n==null&&i!=null&&(n=fs(i,se()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=xE(r,o),c=t.operationForChild(o);c&&(s=s.concat(ME(c,a,l,u)))}),i&&(s=s.concat(cm(i,t,r,n))),s}function jE(t,e){const n=e.query,r=$u(t,n);return{hashFn:()=>(nA(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?_A(t,n._path,r):yA(t,n._path);{const s=vP(i,n);return fh(t,n,null,s)}}}}function $u(t,e){const n=kc(e);return t.queryToTagMap.get(n)}function kc(t){return t._path.toString()+"$"+t._queryIdentifier}function fm(t,e){return t.tagToQueryMap.get(e)}function hm(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function pm(t,e,n){const r=t.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=om(t.pendingWriteTree_,e);return cm(r,n,i,null)}function kA(t){return t.fold((e,n,r)=>{if(n&&Nr(n))return[wc(n)];{let i=[];return n&&(i=PE(n)),Ye(r,(s,o)=>{i=i.concat(o)}),i}})}function zo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pA())(t._repo,t._path):t}function SA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=kc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function CA(){return mA++}function bA(t,e,n){const r=e._path,i=$u(t,e),s=jE(t,n),o=t.listenProvider_.startListening(zo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)L(!Nr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ee(u)&&c&&Nr(c))return[wc(c).query];{let f=[];return c&&(f=f.concat(PE(c).map(_=>_.query))),Ye(d,(_,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(zo(c),$u(t,c))}}return o}/**
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
 */class mm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new mm(n)}node(){return this.node_}}class gm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new gm(this.syncTree_,n)}node(){return dm(this.syncTree_,this.path_)}}const xA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ty=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return IA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return TA(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},IA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},TA=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},FE=function(t,e,n,r){return vm(e,new gm(n,t),r)},zE=function(t,e,n){return vm(t,new mm(e),n)};function vm(t,e,n){const r=t.getPriority().val(),i=Ty(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ty(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ze(a,We(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ze(i))),o.forEachChild(Te,(a,l)=>{const u=vm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class ym{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function _m(t,e){let n=e instanceof de?e:new de(e),r=t,i=X(n);for(;i!==null;){const s=Ss(r.node.children,i)||{children:{},childCount:0};r=new ym(i,r,s),n=pe(n),i=X(n)}return r}function Gs(t){return t.node.value}function UE(t,e){t.node.value=e,hh(t)}function $E(t){return t.node.childCount>0}function NA(t){return Gs(t)===void 0&&!$E(t)}function Sc(t,e){Ye(t.node.children,(n,r)=>{e(new ym(n,t,r))})}function WE(t,e,n,r){n&&!r&&e(t),Sc(t,i=>{WE(i,e,!0,r)}),n&&r&&e(t)}function RA(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ua(t){return new de(t.parent===null?t.name:Ua(t.parent)+"/"+t.name)}function hh(t){t.parent!==null&&PA(t.parent,t.name,t)}function PA(t,e,n){const r=NA(n),i=_n(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,hh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,hh(t))}/**
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
 */const AA=/[\[\].#$\/\u0000-\u001F\u007F]/,OA=/[\[\].#$\u0000-\u001F\u007F]/,Od=10*1024*1024,wm=function(t){return typeof t=="string"&&t.length!==0&&!AA.test(t)},HE=function(t){return typeof t=="string"&&t.length!==0&&!OA.test(t)},LA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),HE(t)},DA=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Gp(t)||t&&typeof t=="object"&&_n(t,".sv")},MA=function(t,e,n,r){r&&e===void 0||Cc(hc(t,"value"),e,n)},Cc=function(t,e,n){const r=n instanceof de?new XP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Gr(r)+" with contents = "+e.toString());if(Gp(e))throw new Error(t+"contains "+e.toString()+" "+Gr(r));if(typeof e=="string"&&e.length>Od/3&&pc(e)>Od)throw new Error(t+"contains a string greater than "+Od+" utf8 bytes "+Gr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ye(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!wm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JP(r,o),Cc(t,a,r),ZP(r)}),i&&s)throw new Error(t+' contains ".value" child '+Gr(r)+" in addition to actual children.")}},jA=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=fa(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!wm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(QP);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Dt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},FA=function(t,e,n,r){if(r&&e===void 0)return;const i=hc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ye(e,(o,a)=>{const l=new de(o);if(Cc(i,a,Ie(n,l)),Xp(l)===".priority"&&!DA(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),jA(i,s)},BE=function(t,e,n,r){if(!(r&&n===void 0)&&!HE(n))throw new Error(hc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),BE(t,e,n,r)},UA=function(t,e){if(X(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$A=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LA(n))throw new Error(hc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class WA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Jp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function VE(t,e,n){bc(t,n),GE(t,r=>Jp(r,e))}function an(t,e,n){bc(t,n),GE(t,r=>Dt(r,e)||Dt(e,r))}function GE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(HA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function HA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ii&&Ge("event: "+n.toString()),Bs(r)}}}/**
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
 */const BA="repo_interrupt",VA=25;class GA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lu(),this.transactionQueueTree_=new ym,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qA(t,e,n){if(t.stats_=Yp(t.repoInfo_),t.forceRestClient_||EP())t.server_=new Ou(t.repoInfo_,(r,i,s,o)=>{Ny(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ry(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new An(t.repoInfo_,e,(r,i,s,o)=>{Ny(t,r,i,s,o)},r=>{Ry(t,r)},r=>{YA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=xP(t.repoInfo_,()=>new b2(t.stats_,t.server_)),t.infoData_=new w2,t.infoSyncTree_=new xy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ec(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Em(t,"connected",!1),t.serverSyncTree_=new xy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);an(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function KA(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xc(t){return xA({timestamp:KA(t)})}function Ny(t,e,n,r,i){t.dataUpdateCount++;const s=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=wu(n,u=>We(u));o=EA(t.serverSyncTree_,s,l,i)}else{const l=We(n);o=wA(t.serverSyncTree_,s,l,i)}else if(r){const l=wu(n,u=>We(u));o=vA(t.serverSyncTree_,s,l)}else{const l=We(n);o=Ec(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Rs(t,s)),an(t.eventQueue_,a,o)}function Ry(t,e){Em(t,"connected",e),e===!1&&JA(t)}function YA(t,e){Ye(e,(n,r)=>{Em(t,n,r)})}function Em(t,e,n){const r=new de("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(r,i);const s=Ec(t.infoSyncTree_,r,i);an(t.eventQueue_,r,s)}function km(t){return t.nextWriteId_++}function QA(t,e,n,r,i){Ic(t,"set",{path:e.toString(),value:n,priority:r});const s=xc(t),o=We(n,r),a=dm(t.serverSyncTree_,e),l=zE(o,a,s),u=km(t),c=LE(t.serverSyncTree_,e,l,u,!0);bc(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||at("set at "+e+" failed: "+f);const w=dr(t.serverSyncTree_,u,!v);an(t.eventQueue_,e,w),ph(t,i,f,_)});const d=Cm(t,e);Rs(t,d),an(t.eventQueue_,d,[])}function XA(t,e,n,r){Ic(t,"update",{path:e.toString(),value:n});let i=!0;const s=xc(t),o={};if(Ye(n,(a,l)=>{i=!1,o[a]=FE(Ie(e,a),We(l),t.serverSyncTree_,s)}),i)Ge("update() called with empty data.  Don't do anything."),ph(t,r,"ok",void 0);else{const a=km(t),l=gA(t.serverSyncTree_,e,o,a);bc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||at("update at "+e+" failed: "+u);const f=dr(t.serverSyncTree_,a,!d),_=f.length>0?Rs(t,e):e;an(t.eventQueue_,_,f),ph(t,r,u,c)}),Ye(n,u=>{const c=Cm(t,Ie(e,u));Rs(t,c)}),an(t.eventQueue_,e,[])}}function JA(t){Ic(t,"onDisconnectEvents");const e=xc(t),n=Lu();sh(t.onDisconnect_,se(),(i,s)=>{const o=FE(i,s,t.serverSyncTree_,e);EE(n,i,o)});let r=[];sh(n,se(),(i,s)=>{r=r.concat(Ec(t.serverSyncTree_,i,s));const o=Cm(t,i);Rs(t,o)}),t.onDisconnect_=Lu(),an(t.eventQueue_,se(),r)}function ZA(t,e,n){let r;X(e._path)===".info"?r=Iy(t.infoSyncTree_,e,n):r=Iy(t.serverSyncTree_,e,n),VE(t.eventQueue_,e._path,r)}function Py(t,e,n){let r;X(e._path)===".info"?r=fh(t.infoSyncTree_,e,n):r=fh(t.serverSyncTree_,e,n),VE(t.eventQueue_,e._path,r)}function eO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BA)}function Ic(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ge(n,...e)}function ph(t,e,n,r){e&&Bs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function qE(t,e,n){return dm(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Sm(t,e=t.transactionQueueTree_){if(e||Tc(t,e),Gs(e)){const n=YE(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&tO(t,Ua(e),n)}else $E(e)&&Sc(e,n=>{Sm(t,n)})}function tO(t,e,n){const r=n.map(u=>u.currentWriteId),i=qE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];L(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=pt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ic(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(dr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Tc(t,_m(t.transactionQueueTree_,e)),Sm(t,t.transactionQueueTree_),an(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Bs(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{at("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Rs(t,e)}},o)}function Rs(t,e){const n=KE(t,e),r=Ua(n),i=YE(t,n);return nO(t,i,r),r}function nO(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=pt(n,l.path);let c=!1,d;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=VA)c=!0,d="maxretry",i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=qE(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Cc("transaction failed: Data returned ",_,l.path);let v=We(_);typeof _=="object"&&_!=null&&_n(_,".priority")||(v=v.updatePriority(f.getPriority()));const S=l.currentWriteId,y=xc(t),h=zE(v,f,y);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=km(t),o.splice(o.indexOf(S),1),i=i.concat(LE(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(dr(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0))}an(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Tc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Bs(r[a]);Sm(t,t.transactionQueueTree_)}function KE(t,e){let n,r=t.transactionQueueTree_;for(n=X(e);n!==null&&Gs(r)===void 0;)r=_m(r,n),e=pe(e),n=X(e);return r}function YE(t,e){const n=[];return QE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function QE(t,e,n){const r=Gs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Sc(e,i=>{QE(t,i,n)})}function Tc(t,e){const n=Gs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,UE(e,n.length>0?n:void 0)}Sc(e,r=>{Tc(t,r)})}function Cm(t,e){const n=Ua(KE(t,e)),r=_m(t.transactionQueueTree_,e);return RA(r,i=>{Ld(t,i)}),Ld(t,r),WE(r,i=>{Ld(t,i)}),n}function Ld(t,e){const n=Gs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?UE(e,void 0):n.length=s+1,an(t.eventQueue_,Ua(e),i);for(let o=0;o<r.length;o++)Bs(r[o])}}/**
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
 */function rO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):at(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ay=function(t,e){const n=sO(t),r=n.namespace;n.domain==="firebase.com"&&Fn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Fn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new iE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new de(n.pathString)}},sO=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=rO(t.substring(c,d)));const f=iO(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class XE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class JE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class oO{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class bm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ee(this._path)?null:Xp(this._path)}get ref(){return new Gn(this._repo,this._path)}get _queryIdentifier(){const e=gy(this._queryParams),n=qp(e);return n==="{}"?"default":n}get _queryObject(){return gy(this._queryParams)}isEqual(e){if(e=ct(e),!(e instanceof bm))return!1;const n=this._repo===e._repo,r=Jp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+YP(this._path)}}class Gn extends bm{constructor(e,n){super(e,n,new nm,!1)}get parent(){const e=hE(this._path);return e===null?null:new Gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class va{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=Wu(this.ref,e);return new va(this._node.getChild(n),r,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new va(i,Wu(this.ref,r),Te)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dd(t,e){return t=ct(t),t._checkNotDeleted("ref"),e!==void 0?Wu(t._root,e):t._root}function Wu(t,e){return t=ct(t),X(t._path)===null?zA("child","path",e,!1):BE("child","path",e,!1),new Gn(t._repo,Ie(t._path,e))}function aO(t,e){t=ct(t),UA("set",t._path),MA("set",e,t._path,!1);const n=new Pa;return QA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function lO(t,e){FA("update",e,t._path,!1);const n=new Pa;return XA(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class xm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new XE("value",this,new va(e.snapshotNode,new Gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new JE(this,e,n):null}matches(e){return e instanceof xm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Im{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new JE(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const r=Wu(new Gn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new XE(e.type,this,new va(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Im?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function uO(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Py(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new oO(n,s||void 0),a=e==="value"?new xm(o):new Im(e,o);return ZA(t._repo,t,a),()=>Py(t._repo,t,a)}function cO(t,e,n,r){return uO(t,"value",e,n,r)}aA(Gn);hA(Gn);/**
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
 */const dO="FIREBASE_DATABASE_EMULATOR_HOST",mh={};let fO=!1;function hO(t,e,n,r){t.repoInfo_=new iE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function pO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Fn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ay(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[dO]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Ay(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new cs(cs.OWNER):new SP(t.name,t.options,e);$A("Invalid Firebase Database URL",o),ee(o.path)||Fn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=gO(a,t,c,new kP(t.name,n));return new vO(d,t)}function mO(t,e){const n=mh[e];(!n||n[t.key]!==t)&&Fn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eO(t),delete n[t.key]}function gO(t,e,n,r){let i=mh[e.name];i||(i={},mh[e.name]=i);let s=i[t.toURLString()];return s&&Fn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new GA(t,fO,n,r),i[t.toURLString()]=s,s}class vO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gn(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fn("Cannot call "+e+" on a deleted database.")}}function Oy(t=i1(),e){const n=Dp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=mI("database");r&&yO(n,...r)}return n}function yO(t,e,n,r={}){t=ct(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Fn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Fn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new cs(cs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:gI(r.mockUserToken,t.app.options.projectId);s=new cs(o)}hO(i,e,n,s)}/**
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
 */function _O(t){aP($s),Cs(new di("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return pO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Sr(Zv,ey,t),Sr(Zv,ey,"esm2017")}An.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};An.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_O();const Ly=(t,e=[])=>{if(typeof t!="object")return console.error("Object nie jest obiektem! Wartość object ",t),!1;e.length>0&&e.forEach(n=>{if(!Object.hasOwn(t,n))return console.error("Obiekt nie ma właściwości ",n),!1});for(let n in t)if(t[n]==null)return console.error("Niepoprawna wartość!",t[n],"w",n),!1;return!0},Nc=()=>{const[t,e]=k.useState(null),[n,r]=k.useState({isSuccess:!1,message:""});return k.useEffect(()=>{const s=Oy(Xf),o=Dd(s,"/articles");cO(o,a=>{const l=a.val();e(l),r(u=>(u.isSuccess=!0,u.message="Udało się pobrać listę artykułów.",u))},a=>{throw new Error(a.code)})},[]),{data:t,response:n,pushData:async s=>{let o={isSuccess:!1,message:""};return new Promise((a,l)=>{if(Ly(s)){const u=Oy(Xf);let c={found:!1,article:{},key:-1};if(t.forEach((f,_)=>{if(f.address===s.address){c.article=f,c.key=_,c.found=!0;return}}),c.found){c.article.author!==s.author&&(s.author+=", ".concat(c.article.author)),lO(Dd(u,"/articles/"+c.key),s).then(()=>{o.isSuccess=!0,o.message="Zapisano zmiany w artykule.",a(o)}).catch(f=>{l(f.code)});return}let d=[...t].concat(s);aO(Dd(u,"/articles"),d).then(()=>{o.isSuccess=!0,o.message="Zapisano zmiany w artykule.",a(o)}).catch(f=>{l(f.code)})}else l("Wprowadzone dane nie są poprawne.")})},checkObject:Ly}},wO="_content_xd3f2_1",EO={content:wO},kO=()=>{const{data:t,response:e}=Nc(),[n,r]=k.useState(""),[i,s]=k.useState("");return k.useEffect(()=>{if(!e.isSuccess||!t)return;let o=t.length;r(t.slice(o-3,o).reverse().map((a,l)=>p.jsx("div",{children:p.jsx(Ft,{to:a.address,children:a.name})},l))),s(t.slice(1,o-3).map((a,l)=>p.jsx("div",{children:p.jsx(Ft,{to:a.address,children:a.name})},l)))},[t,e]),p.jsxs(Mt.Fragment,{children:[p.jsx("header",{children:p.jsx("h2",{children:"Wiki"})}),p.jsxs("div",{className:EO.content,children:[p.jsx("h3",{children:"Zobacz najnowsze artykuły"}),n,p.jsx("h3",{children:"Lista wszystkich artykułów"}),i]})]})};let SO=t=>new DOMParser().parseFromString(t,"text/html").body.childNodes,ZE=t=>t.map((e,n)=>{let r={};const{attributes:i,localName:s,childNodes:o,nodeValue:a}=e;return i&&Array.from(i).forEach(l=>{if(l.name==="style"){let u=l.nodeValue.split(";"),c={};u.forEach(d=>{let[f,_]=d.split(":");c[f]=_}),r[l.name]=c}else r[l.name]=l.nodeValue}),r.key=n,s?Mt.createElement(s,r,o&&Array.isArray(Array.from(o))?ZE(Array.from(o)):[]):a});const CO=t=>ZE(Array.from(SO(t.domString))),ek=({item:t})=>t.content&&t.name&&p.jsxs(p.Fragment,{children:[p.jsx("header",{children:p.jsx("h2",{children:t.name})}),p.jsx("div",{className:"content",children:p.jsx(CO,{domString:t.content})})]});ek.propTypes={item:R.any};var tk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="right-from-bracket",r=512,i=512,s=["sign-out-alt"],o="f2f5",a="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faRightFromBracket=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(tk);var nk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="pencil",r=512,i=512,s=[9999,61504,"pencil-alt"],o="f303",a="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faPencil=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(nk);var rk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="house",r=576,i=512,s=[127968,63498,63500,"home","home-alt","home-lg-alt"],o="f015",a="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faHouse=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(rk);var Tm={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="bars",r=448,i=512,s=["navicon"],o="f0c9",a="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faBars=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Tm);const bO="_option_1qaym_1",xO="_highlight_1qaym_62",Dy={option:bO,highlight:xO},qn=k.createContext({currentPage:"home",editorContent:"home",articleContent:"",articleAddress:"",articleName:"",toolbarButtons:{file:{main:{disabled:!1},exit:{disabled:!0},new:{disabled:!1},open:{disabled:!1},save:{disabled:!0}},edit:{copy:{disabled:!0}}},setCurrentPage:()=>{},setEditorContent:()=>{},setArticleContent:()=>{},setArticleAddress:()=>{},setArticleName:()=>{},resetArticleInfo:()=>{},disableToolbarButtons:(t,e)=>!0,enableToolbarButtons:(t,e)=>!1}),So=({className:t,onClick:e,id:n,title:r,children:i})=>{const{currentPage:s}=k.useContext(qn);return p.jsx("button",{type:"button",className:`${t||""} ${Dy.option} ${s===n?Dy.highlight:""}`,onClick:e,id:n,title:r||"",children:i})};So.propTypes={className:Li.PropTypes.string,onClick:Li.PropTypes.func,id:Li.PropTypes.string,title:Li.PropTypes.string,children:Li.PropTypes.any};function My(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?My(Object(n),!0).forEach(function(r){je(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):My(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Hu(t){"@babel/helpers - typeof";return Hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hu(t)}function IO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function TO(t,e,n){return e&&jy(t.prototype,e),n&&jy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nm(t,e){return RO(t)||AO(t,e)||ik(t,e)||LO()}function $a(t){return NO(t)||PO(t)||ik(t)||OO()}function NO(t){if(Array.isArray(t))return gh(t)}function RO(t){if(Array.isArray(t))return t}function PO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function AO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function ik(t,e){if(t){if(typeof t=="string")return gh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gh(t,e)}}function gh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function OO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fy=function(){},Rm={},sk={},ok=null,ak={mark:Fy,measure:Fy};try{typeof window<"u"&&(Rm=window),typeof document<"u"&&(sk=document),typeof MutationObserver<"u"&&(ok=MutationObserver),typeof performance<"u"&&(ak=performance)}catch{}var DO=Rm.navigator||{},zy=DO.userAgent,Uy=zy===void 0?"":zy,Rr=Rm,_e=sk,$y=ok,vl=ak;Rr.document;var Kn=!!_e.documentElement&&!!_e.head&&typeof _e.addEventListener=="function"&&typeof _e.createElement=="function",lk=~Uy.indexOf("MSIE")||~Uy.indexOf("Trident/"),yl,_l,wl,El,kl,zn="___FONT_AWESOME___",vh=16,uk="fa",ck="svg-inline--fa",wi="data-fa-i2svg",yh="data-fa-pseudo-element",MO="data-fa-pseudo-element-pending",Pm="data-prefix",Am="data-icon",Wy="fontawesome-i2svg",jO="async",FO=["HTML","HEAD","STYLE","SCRIPT"],dk=function(){try{return!0}catch{return!1}}(),ve="classic",xe="sharp",Om=[ve,xe];function Wa(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ve]}})}var ya=Wa((yl={},je(yl,ve,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),je(yl,xe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),yl)),_a=Wa((_l={},je(_l,ve,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),je(_l,xe,{solid:"fass",regular:"fasr",light:"fasl"}),_l)),wa=Wa((wl={},je(wl,ve,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),je(wl,xe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),wl)),zO=Wa((El={},je(El,ve,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),je(El,xe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),El)),UO=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,fk="fa-layers-text",$O=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,WO=Wa((kl={},je(kl,ve,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),je(kl,xe,{900:"fass",400:"fasr",300:"fasl"}),kl)),hk=[1,2,3,4,5,6,7,8,9,10],HO=hk.concat([11,12,13,14,15,16,17,18,19,20]),BO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ea=new Set;Object.keys(_a[ve]).map(Ea.add.bind(Ea));Object.keys(_a[xe]).map(Ea.add.bind(Ea));var VO=[].concat(Om,$a(Ea),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Zr.GROUP,Zr.SWAP_OPACITY,Zr.PRIMARY,Zr.SECONDARY]).concat(hk.map(function(t){return"".concat(t,"x")})).concat(HO.map(function(t){return"w-".concat(t)})),Uo=Rr.FontAwesomeConfig||{};function GO(t){var e=_e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(_e&&typeof _e.querySelector=="function"){var KO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];KO.forEach(function(t){var e=Nm(t,2),n=e[0],r=e[1],i=qO(GO(n));i!=null&&(Uo[r]=i)})}var pk={styleDefault:"solid",familyDefault:"classic",cssPrefix:uk,replacementClass:ck,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Uo.familyPrefix&&(Uo.cssPrefix=Uo.familyPrefix);var Ps=M(M({},pk),Uo);Ps.autoReplaceSvg||(Ps.observeMutations=!1);var U={};Object.keys(pk).forEach(function(t){Object.defineProperty(U,t,{enumerable:!0,set:function(n){Ps[t]=n,$o.forEach(function(r){return r(U)})},get:function(){return Ps[t]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){Ps.cssPrefix=e,$o.forEach(function(n){return n(U)})},get:function(){return Ps.cssPrefix}});Rr.FontAwesomeConfig=U;var $o=[];function YO(t){return $o.push(t),function(){$o.splice($o.indexOf(t),1)}}var er=vh,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function QO(t){if(!(!t||!Kn)){var e=_e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=_e.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return _e.head.insertBefore(e,r),t}}var XO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ka(){for(var t=12,e="";t-- >0;)e+=XO[Math.random()*62|0];return e}function qs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Lm(t){return t.classList?qs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function mk(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function JO(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(mk(t[n]),'" ')},"").trim()}function Rc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Dm(t){return t.size!==hn.size||t.x!==hn.x||t.y!==hn.y||t.rotate!==hn.rotate||t.flipX||t.flipY}function ZO(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function eL(t){var e=t.transform,n=t.width,r=n===void 0?vh:n,i=t.height,s=i===void 0?vh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&lk?l+="translate(".concat(e.x/er-r/2,"em, ").concat(e.y/er-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/er,"em), calc(-50% + ").concat(e.y/er,"em)) "):l+="translate(".concat(e.x/er,"em, ").concat(e.y/er,"em) "),l+="scale(".concat(e.size/er*(e.flipX?-1:1),", ").concat(e.size/er*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var tL=`:root, :host {
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
}`;function gk(){var t=uk,e=ck,n=U.cssPrefix,r=U.replacementClass,i=tL;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Hy=!1;function Md(){U.autoAddCss&&!Hy&&(QO(gk()),Hy=!0)}var nL={mixout:function(){return{dom:{css:gk,insertCss:Md}}},hooks:function(){return{beforeDOMElementCreation:function(){Md()},beforeI2svg:function(){Md()}}}},Un=Rr||{};Un[zn]||(Un[zn]={});Un[zn].styles||(Un[zn].styles={});Un[zn].hooks||(Un[zn].hooks={});Un[zn].shims||(Un[zn].shims=[]);var en=Un[zn],vk=[],rL=function t(){_e.removeEventListener("DOMContentLoaded",t),Bu=1,vk.map(function(e){return e()})},Bu=!1;Kn&&(Bu=(_e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_e.readyState),Bu||_e.addEventListener("DOMContentLoaded",rL));function iL(t){Kn&&(Bu?setTimeout(t,0):vk.push(t))}function Ha(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?mk(t):"<".concat(e," ").concat(JO(r),">").concat(s.map(Ha).join(""),"</").concat(e,">")}function By(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var sL=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},jd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?sL(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function oL(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function _h(t){var e=oL(t);return e.length===1?e[0].toString(16):null}function aL(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Vy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function wh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Vy(e);typeof en.hooks.addPack=="function"&&!i?en.hooks.addPack(t,Vy(e)):en.styles[t]=M(M({},en.styles[t]||{}),s),t==="fas"&&wh("fa",e)}var Sl,Cl,bl,Qi=en.styles,lL=en.shims,uL=(Sl={},je(Sl,ve,Object.values(wa[ve])),je(Sl,xe,Object.values(wa[xe])),Sl),Mm=null,yk={},_k={},wk={},Ek={},kk={},cL=(Cl={},je(Cl,ve,Object.keys(ya[ve])),je(Cl,xe,Object.keys(ya[xe])),Cl);function dL(t){return~VO.indexOf(t)}function fL(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!dL(i)?i:null}var Sk=function(){var e=function(s){return jd(Qi,function(o,a,l){return o[l]=jd(a,s,{}),o},{})};yk=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),_k=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),kk=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Qi||U.autoFetchSvg,r=jd(lL,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});wk=r.names,Ek=r.unicodes,Mm=Pc(U.styleDefault,{family:U.familyDefault})};YO(function(t){Mm=Pc(t.styleDefault,{family:U.familyDefault})});Sk();function jm(t,e){return(yk[t]||{})[e]}function hL(t,e){return(_k[t]||{})[e]}function ei(t,e){return(kk[t]||{})[e]}function Ck(t){return wk[t]||{prefix:null,iconName:null}}function pL(t){var e=Ek[t],n=jm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pr(){return Mm}var Fm=function(){return{prefix:null,iconName:null,rest:[]}};function Pc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ve:n,i=ya[r][t],s=_a[r][t]||_a[r][i],o=t in en.styles?t:null;return s||o||null}var Gy=(bl={},je(bl,ve,Object.keys(wa[ve])),je(bl,xe,Object.keys(wa[xe])),bl);function Ac(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},je(e,ve,"".concat(U.cssPrefix,"-").concat(ve)),je(e,xe,"".concat(U.cssPrefix,"-").concat(xe)),e),o=null,a=ve;(t.includes(s[ve])||t.some(function(u){return Gy[ve].includes(u)}))&&(a=ve),(t.includes(s[xe])||t.some(function(u){return Gy[xe].includes(u)}))&&(a=xe);var l=t.reduce(function(u,c){var d=fL(U.cssPrefix,c);if(Qi[c]?(c=uL[a].includes(c)?zO[a][c]:c,o=c,u.prefix=c):cL[a].indexOf(c)>-1?(o=c,u.prefix=Pc(c,{family:a})):d?u.iconName=d:c!==U.replacementClass&&c!==s[ve]&&c!==s[xe]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?Ck(u.iconName):{},_=ei(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||_||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Qi.far&&Qi.fas&&!U.autoFetchSvg&&(u.prefix="fas")}return u},Fm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===xe&&(Qi.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=ei(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Pr()||"fas"),l}var mL=function(){function t(){IO(this,t),this.definitions={}}return TO(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),wh(a,o[a]);var l=wa[ve][a];l&&wh(l,o[a]),Sk()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),qy=[],Xi={},hs={},gL=Object.keys(hs);function vL(t,e){var n=e.mixoutsTo;return qy=t,Xi={},Object.keys(hs).forEach(function(r){gL.indexOf(r)===-1&&delete hs[r]}),qy.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Hu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Xi[o]||(Xi[o]=[]),Xi[o].push(s[o])})}r.provides&&r.provides(hs)}),n}function Eh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Xi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ei(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Xi[t]||[];i.forEach(function(s){s.apply(null,n)})}function $n(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return hs[t]?hs[t].apply(null,e):void 0}function kh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Pr();if(e)return e=ei(n,e)||e,By(bk.definitions,n,e)||By(en.styles,n,e)}var bk=new mL,yL=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Ei("noAuto")},_L={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kn?(Ei("beforeI2svg",e),$n("pseudoElements2svg",e),$n("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,iL(function(){EL({autoReplaceSvgRoot:n}),Ei("watch",e)})}},wL={icon:function(e){if(e===null)return null;if(Hu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ei(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Pc(e[0]);return{prefix:r,iconName:ei(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(U.cssPrefix,"-"))>-1||e.match(UO))){var i=Ac(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Pr(),iconName:ei(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Pr();return{prefix:s,iconName:ei(s,e)||e}}}},Tt={noAuto:yL,config:U,dom:_L,parse:wL,library:bk,findIconDefinition:kh,toHtml:Ha},EL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?_e:n;(Object.keys(en.styles).length>0||U.autoFetchSvg)&&Kn&&U.autoReplaceSvg&&Tt.dom.i2svg({node:r})};function Oc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ha(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Kn){var r=_e.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function kL(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Dm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Rc(M(M({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function SL(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(U.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function zm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,_=f===void 0?!1:f,v=r.found?r:n,w=v.width,S=v.height,y=i==="fak",h=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(function(N){return d.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(d.classes).join(" "),m={children:[],attributes:M(M({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(S)})},g=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/S*16*.0625,"em")}:{};_&&(m.attributes[wi]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||ka())},children:[l]}),delete m.attributes.title);var E=M(M({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:M(M({},g),d.styles)}),C=r.found&&n.found?$n("generateAbstractMask",E)||{children:[],attributes:{}}:$n("generateAbstractIcon",E)||{children:[],attributes:{}},b=C.children,I=C.attributes;return E.children=b,E.attributes=I,a?SL(E):kL(E)}function Ky(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[wi]="");var c=M({},o.styles);Dm(i)&&(c.transform=eL({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Rc(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function CL(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Rc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fd=en.styles;function Sh(t){var e=t[0],n=t[1],r=t.slice(4),i=Nm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(Zr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Zr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Zr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var bL={found:!1,width:512,height:512};function xL(t,e){!dk&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ch(t,e){var n=e;return e==="fa"&&U.styleDefault!==null&&(e=Pr()),new Promise(function(r,i){if($n("missingIconAbstract"),n==="fa"){var s=Ck(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Fd[e]&&Fd[e][t]){var o=Fd[e][t];return r(Sh(o))}xL(t,e),r(M(M({},bL),{},{icon:U.showMissingIcons&&t?$n("missingIconAbstract")||{}:{}}))})}var Yy=function(){},bh=U.measurePerformance&&vl&&vl.mark&&vl.measure?vl:{mark:Yy,measure:Yy},Co='FA "6.4.2"',IL=function(e){return bh.mark("".concat(Co," ").concat(e," begins")),function(){return xk(e)}},xk=function(e){bh.mark("".concat(Co," ").concat(e," ends")),bh.measure("".concat(Co," ").concat(e),"".concat(Co," ").concat(e," begins"),"".concat(Co," ").concat(e," ends"))},Um={begin:IL,end:xk},Hl=function(){};function Qy(t){var e=t.getAttribute?t.getAttribute(wi):null;return typeof e=="string"}function TL(t){var e=t.getAttribute?t.getAttribute(Pm):null,n=t.getAttribute?t.getAttribute(Am):null;return e&&n}function NL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function RL(){if(U.autoReplaceSvg===!0)return Bl.replace;var t=Bl[U.autoReplaceSvg];return t||Bl.replace}function PL(t){return _e.createElementNS("http://www.w3.org/2000/svg",t)}function AL(t){return _e.createElement(t)}function Ik(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?PL:AL:n;if(typeof t=="string")return _e.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Ik(o,{ceFn:r}))}),i}function OL(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Bl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Ik(i),n)}),n.getAttribute(wi)===null&&U.keepOriginalSource){var r=_e.createComment(OL(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Lm(n).indexOf(U.replacementClass))return Bl.replace(e);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ha(a)}).join(`
`);n.setAttribute(wi,""),n.innerHTML=o}};function Xy(t){t()}function Tk(t,e){var n=typeof e=="function"?e:Hl;if(t.length===0)n();else{var r=Xy;U.mutateApproach===jO&&(r=Rr.requestAnimationFrame||Xy),r(function(){var i=RL(),s=Um.begin("mutate");t.map(i),s(),n()})}}var $m=!1;function Nk(){$m=!0}function xh(){$m=!1}var Vu=null;function Jy(t){if($y&&U.observeMutations){var e=t.treeCallback,n=e===void 0?Hl:e,r=t.nodeCallback,i=r===void 0?Hl:r,s=t.pseudoElementsCallback,o=s===void 0?Hl:s,a=t.observeMutationsRoot,l=a===void 0?_e:a;Vu=new $y(function(u){if(!$m){var c=Pr();qs(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Qy(d.addedNodes[0])&&(U.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&U.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Qy(d.target)&&~BO.indexOf(d.attributeName))if(d.attributeName==="class"&&TL(d.target)){var f=Ac(Lm(d.target)),_=f.prefix,v=f.iconName;d.target.setAttribute(Pm,_||c),v&&d.target.setAttribute(Am,v)}else NL(d.target)&&i(d.target)})}}),Kn&&Vu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function LL(){Vu&&Vu.disconnect()}function DL(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function ML(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ac(Lm(t));return i.prefix||(i.prefix=Pr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=hL(i.prefix,t.innerText)||jm(i.prefix,_h(t.innerText))),!i.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function jL(t){var e=qs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||ka()):(e["aria-hidden"]="true",e.focusable="false")),e}function FL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ML(t),r=n.iconName,i=n.prefix,s=n.rest,o=jL(t),a=Eh("parseNodeAttributes",{},t),l=e.styleParser?DL(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var zL=en.styles;function Rk(t){var e=U.autoReplaceSvg==="nest"?Zy(t,{styleParser:!1}):Zy(t);return~e.extra.classes.indexOf(fk)?$n("generateLayersText",t,e):$n("generateSvgReplacementMutation",t,e)}var Ar=new Set;Om.map(function(t){Ar.add("fa-".concat(t))});Object.keys(ya[ve]).map(Ar.add.bind(Ar));Object.keys(ya[xe]).map(Ar.add.bind(Ar));Ar=$a(Ar);function e_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kn)return Promise.resolve();var n=_e.documentElement.classList,r=function(d){return n.add("".concat(Wy,"-").concat(d))},i=function(d){return n.remove("".concat(Wy,"-").concat(d))},s=U.autoFetchSvg?Ar:Om.map(function(c){return"fa-".concat(c)}).concat(Object.keys(zL));s.includes("fa")||s.push("fa");var o=[".".concat(fk,":not([").concat(wi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(wi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=qs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Um.begin("onTree"),u=a.reduce(function(c,d){try{var f=Rk(d);f&&c.push(f)}catch(_){dk||_.name==="MissingIcon"&&console.error(_)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){Tk(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function UL(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rk(t).then(function(n){n&&Tk([n],e)})}function $L(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:kh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:kh(i||{})),t(r,M(M({},n),{},{mask:i}))}}var WL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?hn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,_=n.titleId,v=_===void 0?null:_,w=n.classes,S=w===void 0?[]:w,y=n.attributes,h=y===void 0?{}:y,m=n.styles,g=m===void 0?{}:m;if(e){var E=e.prefix,C=e.iconName,b=e.icon;return Oc(M({type:"icon"},e),function(){return Ei("beforeDOMElementCreation",{iconDefinition:e,params:n}),U.autoA11y&&(f?h["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(v||ka()):(h["aria-hidden"]="true",h.focusable="false")),zm({icons:{main:Sh(b),mask:l?Sh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:C,transform:M(M({},hn),i),symbol:o,title:f,maskId:c,titleId:v,extra:{attributes:h,styles:g,classes:S}})})}},HL={mixout:function(){return{icon:$L(WL)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=e_,n.nodeCallback=UL,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?_e:r,s=n.callback,o=s===void 0?function(){}:s;return e_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(_,v){Promise.all([Ch(i,a),c.iconName?Ch(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var S=Nm(w,2),y=S[0],h=S[1];_([n,zm({icons:{main:y,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Rc(a);l.length>0&&(i.style=l);var u;return Dm(o)&&(u=$n("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},BL={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Oc({type:"layer"},function(){Ei("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat($a(s)).join(" ")},children:o}]})}}}},VL={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Oc({type:"counter",content:n},function(){return Ei("beforeDOMElementCreation",{content:n,params:r}),CL({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(U.cssPrefix,"-layers-counter")].concat($a(a))}})})}}}},GL={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?hn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,_=f===void 0?{}:f;return Oc({type:"text",content:n},function(){return Ei("beforeDOMElementCreation",{content:n,params:r}),Ky({content:n,transform:M(M({},hn),s),title:a,extra:{attributes:d,styles:_,classes:["".concat(U.cssPrefix,"-layers-text")].concat($a(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(lk){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return U.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ky({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},qL=new RegExp('"',"ug"),t_=[1105920,1112319];function KL(t){var e=t.replace(qL,""),n=aL(e,0),r=n>=t_[0]&&n<=t_[1],i=e.length===2?e[0]===e[1]:!1;return{value:_h(i?e[0]:e),isSecondary:r||i}}function n_(t,e){var n="".concat(MO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=qs(t.children),o=s.filter(function(b){return b.getAttribute(yh)===e})[0],a=Rr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match($O),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?xe:ve,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_a[f][l[2].toLowerCase()]:WO[f][u],v=KL(d),w=v.value,S=v.isSecondary,y=l[0].startsWith("FontAwesome"),h=jm(_,w),m=h;if(y){var g=pL(w);g.iconName&&g.prefix&&(h=g.iconName,_=g.prefix)}if(h&&!S&&(!o||o.getAttribute(Pm)!==_||o.getAttribute(Am)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var E=FL(),C=E.extra;C.attributes[yh]=e,Ch(h,_).then(function(b){var I=zm(M(M({},E),{},{icons:{main:b,mask:Fm()},prefix:_,iconName:m,extra:C,watchable:!0})),N=_e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(N,t.firstChild):t.appendChild(N),N.outerHTML=I.map(function(D){return Ha(D)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function YL(t){return Promise.all([n_(t,"::before"),n_(t,"::after")])}function QL(t){return t.parentNode!==document.head&&!~FO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function r_(t){if(Kn)return new Promise(function(e,n){var r=qs(t.querySelectorAll("*")).filter(QL).map(YL),i=Um.begin("searchPseudoElements");Nk(),Promise.all(r).then(function(){i(),xh(),e()}).catch(function(){i(),xh(),n()})})}var XL={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=r_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?_e:r;U.searchPseudoElements&&r_(i)}}},i_=!1,JL={mixout:function(){return{dom:{unwatch:function(){Nk(),i_=!0}}}},hooks:function(){return{bootstrap:function(){Jy(Eh("mutationObserverCallbacks",{}))},noAuto:function(){LL()},watch:function(n){var r=n.observeMutationsRoot;i_?xh():Jy(Eh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},s_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},ZL={mixout:function(){return{parse:{transform:function(n){return s_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=s_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},_={outer:a,inner:d,path:f};return{tag:"g",attributes:M({},_.outer),children:[{tag:"g",attributes:M({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),_.path)}]}]}}}},zd={x:0,y:0,width:"100%",height:"100%"};function o_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function eD(t){return t.tag==="g"?t.children:[t]}var tD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ac(i.split(" ").map(function(o){return o.trim()})):Fm();return s.prefix||(s.prefix=Pr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,_=ZO({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:M(M({},zd),{},{fill:"white"})},w=c.children?{children:c.children.map(o_)}:{},S={tag:"g",attributes:M({},_.inner),children:[o_(M({tag:c.tag,attributes:M(M({},c.attributes),_.path)},w))]},y={tag:"g",attributes:M({},_.outer),children:[S]},h="mask-".concat(a||ka()),m="clip-".concat(a||ka()),g={tag:"mask",attributes:M(M({},zd),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:eD(f)},g]};return r.push(E,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},zd)}),{children:r,attributes:i}}}},nD={provides:function(e){var n=!1;Rr.matchMedia&&(n=Rr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},rD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},iD=[nL,HL,BL,VL,GL,XL,JL,ZL,tD,nD,rD];vL(iD,{mixoutsTo:Tt});Tt.noAuto;Tt.config;Tt.library;Tt.dom;var Ih=Tt.parse;Tt.findIconDefinition;Tt.toHtml;var sD=Tt.icon;Tt.layer;Tt.text;Tt.counter;function a_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?a_(Object(n),!0).forEach(function(r){Ji(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gu(t){"@babel/helpers - typeof";return Gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gu(t)}function Ji(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aD(t,e){if(t==null)return{};var n=oD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Th(t){return lD(t)||uD(t)||cD(t)||dD()}function lD(t){if(Array.isArray(t))return Nh(t)}function uD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cD(t,e){if(t){if(typeof t=="string")return Nh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nh(t,e)}}function Nh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,_=t.inverse,v=t.border,w=t.listItem,S=t.flip,y=t.size,h=t.rotation,m=t.pull,g=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":_,"fa-border":v,"fa-li":w,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Ji(e,"fa-".concat(y),typeof y<"u"&&y!==null),Ji(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Ji(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Ji(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(g).map(function(E){return g[E]?E:null}).filter(function(E){return E})}function hD(t){return t=t-0,t===t}function Pk(t){return hD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var pD=["style"];function mD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function gD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Pk(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[mD(i)]=s:e[i]=s,e},{})}function Ak(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ak(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=gD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Pk(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=aD(n,pD);return i.attrs.style=fr(fr({},i.attrs.style),o),t.apply(void 0,[e.tag,fr(fr({},i.attrs),a)].concat(Th(r)))}var Ok=!1;try{Ok=!0}catch{}function vD(){if(!Ok&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function l_(t){if(t&&Gu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ih.icon)return Ih.icon(t);if(t===null)return null;if(t&&Gu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ud(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ji({},t,e):{}}var St=Mt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=l_(n),c=Ud("classes",[].concat(Th(fD(t)),Th(s.split(" ")))),d=Ud("transform",typeof t.transform=="string"?Ih.transform(t.transform):t.transform),f=Ud("mask",l_(r)),_=sD(u,fr(fr(fr(fr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!_)return vD("Could not find icon",u),null;var v=_.abstract,w={ref:e};return Object.keys(t).forEach(function(S){St.defaultProps.hasOwnProperty(S)||(w[S]=t[S])}),yD(v[0],w)});St.displayName="FontAwesomeIcon";St.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};St.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var yD=Ak.bind(null,Mt.createElement);const _D="_menu_1ka1u_1",wD="_shrink_1ka1u_32",$d={menu:_D,"shrink-menu":"_shrink-menu_1ka1u_32",shrink:wD},Wm=k.forwardRef(({setIsMenuExpanded:t},e)=>{const n=Fs(),{width:r}=k.useContext(Wt),{currentPage:i,setCurrentPage:s,disableToolbarButtons:o}=k.useContext(qn),[a,l]=k.useState(!1);k.useEffect(()=>{r>740?(l(!0),t(!0)):(l(!1),t(!1))},[r,t]);const u=()=>{l(v=>!v),t(v=>!v)},c=v=>{r<=740&&(l(!1),t(!1)),i!==v.currentTarget.id&&s(v.currentTarget.id),i!=="editor"&&o("file","save","exit")},d=async()=>{await s(""),n("/",{replace:!0})},f=a?"":$d.shrink,_=a?"Zmniejsz menu":"Poszerz menu";return p.jsxs("nav",{className:`${$d.menu} ${a?"":$d["shrink-menu"]}`,ref:e,children:[p.jsxs(So,{className:`${f}`,title:_,onClick:u,children:[p.jsx(St,{icon:Tm.faBars}),a&&p.jsx("span",{children:" Menu"})]}),p.jsxs(So,{id:"home",className:f,title:"Główna",onClick:c,children:[p.jsx(St,{icon:rk.faHouse}),a&&p.jsx("span",{children:" Główna"})]}),p.jsxs(So,{id:"editor",className:f,title:"Edytor",onClick:c,children:[p.jsx(St,{icon:nk.faPencil}),a&&p.jsx("span",{children:" Edytor"})]}),p.jsxs(So,{id:"exit",className:f,title:"Wyjdź",onClick:d,children:[p.jsx(St,{icon:tk.faRightFromBracket}),a&&p.jsx("span",{children:" Wyjdź"})]})]})});Wm.displayName="Menu";Wm.propTypes={setIsMenuExpanded:R.func};const ED={file:{main:{disabled:!1},exit:{disabled:!0},new:{disabled:!1},open:{disabled:!1},save:{disabled:!0}},edit:{copy:{disabled:!0}}},kD=(t,e)=>{let n=t;return e.type==="DISABLE"&&e.newState!==null&&e.mainButton&&Array.isArray(e.subButtons)&&e.subButtons.forEach(r=>n[e.mainButton][r].disabled=e.newState),n},Lk=({children:t})=>{const e=sessionStorage.getItem("currentPage")?sessionStorage.getItem("currentPage"):"home",n=sessionStorage.getItem("editorContent")?sessionStorage.getItem("editorContent"):"home",r=sessionStorage.getItem("articleContent")?sessionStorage.getItem("articleContent"):"",i=sessionStorage.getItem("articleAddress")?sessionStorage.getItem("articleAddress"):"",s=sessionStorage.getItem("articleName")?sessionStorage.getItem("articleName"):"",[o,a]=k.useState(e),[l,u]=k.useState(n),[c,d]=k.useState(r),[f,_]=k.useState(i),[v,w]=k.useState(s),[S,y]=k.useReducer(kD,ED),h=(C,b)=>(y({type:"DISABLE",mainButton:C,subButtons:b,newState:!0}),!0),m=(C,b)=>(y({type:"DISABLE",mainButton:C,subButtons:b,newState:!1}),!1),E={currentPage:o,editorContent:l,articleContent:c,articleAddress:f,articleName:v,toolbarButtons:S,setCurrentPage:a,setEditorContent:u,setArticleContent:d,setArticleAddress:_,setArticleName:w,resetArticleInfo:()=>{d(""),_(""),w("")},disableToolbarButtons:h,enableToolbarButtons:m};return k.useEffect(()=>{o.length>0?sessionStorage.setItem("currentPage",o):sessionStorage.removeItem("currentPage")},[o]),k.useEffect(()=>{o==="editor"?(sessionStorage.setItem("editorContent",l),l!=="home"&&m("file",["exit","save"])):(sessionStorage.removeItem("editorContent"),u("home"))},[l,o]),k.useEffect(()=>{o==="editor"&&l==="edit"?(sessionStorage.setItem("articleContent",c),sessionStorage.setItem("articleAddress",f),sessionStorage.setItem("articleName",v)):(sessionStorage.removeItem("articleContent"),d(""),sessionStorage.removeItem("articleAddress"),_(""),sessionStorage.removeItem("articleName"),w(""))},[c,f,v,o,l]),p.jsx(qn.Provider,{value:E,children:t})};Lk.propTypes={children:R.any};var Dk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="angle-right",r=320,i=512,s=[8250],o="f105",a="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faAngleRight=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Dk);const SD="_main_12rp3_1",CD="_welcome_12rp3_12",bD="_card_12rp3_27",Hm={main:SD,welcome:CD,card:bD},Vl=({children:t})=>p.jsx("div",{className:Hm.card,children:t});Vl.propTypes={children:R.any};const Mk=({setMainHeader:t})=>(k.useEffect(()=>{t("Przydatne narzędzia")},[t]),p.jsxs("div",{className:Hm.welcome,children:[p.jsxs(Vl,{children:[p.jsx("h3",{children:"Najnowsze artykuły"}),p.jsx("p",{children:"Sprawdź najnowsze artykuły"}),p.jsx("p",{children:"Zarządzaj najnowszymi"})]}),p.jsxs(Vl,{children:[p.jsx("h3",{children:"Wszystkie artykuły"}),p.jsx("p",{children:"Zarządzaj listą artykułów"}),p.jsx("p",{children:"Sprawdzaj dane artykułów"})]}),p.jsxs(Vl,{children:[p.jsx("h3",{children:"Edytor"}),p.jsx("p",{children:"Twórz nowe artykuły"}),p.jsx("p",{children:"Edytuj istniejące artykuły"})]})]}));Mk.propTypes={setMainHeader:R.func};var jk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="minimize",r=512,i=512,s=["compress-arrows-alt"],o="f78c",a="M456 224H312c-13.3 0-24-10.7-24-24V56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L442.3 5.7C446 2 450.9 0 456 0s10 2 13.7 5.7l36.7 36.7C510 46 512 50.9 512 56s-2 10-5.7 13.7L433 143l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8zm0 64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-40 40 73.4 73.4c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C466 510 461.1 512 456 512s-10-2-13.7-5.7L369 433l-40 40c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V312c0-13.3 10.7-24 24-24H456zm-256 0c13.3 0 24 10.7 24 24V456c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L69.7 506.3C66 510 61.1 512 56 512s-10-2-13.7-5.7L5.7 469.7C2 466 0 461.1 0 456s2-10 5.7-13.7L79 369 39 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8H200zM56 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l40-40L5.7 69.7C2 66 0 61.1 0 56s2-10 5.7-13.7L42.3 5.7C46 2 50.9 0 56 0s10 2 13.7 5.7L143 79l40-40c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2V200c0 13.3-10.7 24-24 24H56z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faMinimize=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(jk);var Fk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="maximize",r=512,i=512,s=["expand-arrows-alt"],o="f31e",a="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faMaximize=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Fk);var Rh={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="arrow-right",r=448,i=512,s=[8594],o="f061",a="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faArrowRight=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Rh);const xD="_dropdown_75qbm_1",ID="_menu_75qbm_7",TD="_slideFromTop_75qbm_1",ND="_slideFromLeft_75qbm_1",RD="_active_75qbm_32",PD="_option_75qbm_36",Jt={dropdown:xD,menu:ID,"menu-horizontal":"_menu-horizontal_75qbm_7",slideFromTop:TD,slideFromLeft:ND,active:RD,option:PD,"option-horizontral":"_option-horizontral_75qbm_73","option-disabled":"_option-disabled_75qbm_94"},Gl=({title:t,className:e,children:n})=>{const[r,i]=k.useState(!1),s=k.useRef(null),[o,a]=k.useState(Jt.dropdown);k.useEffect(()=>{a(r?`${Jt.dropdown} ${Jt.active}`:`${Jt.dropdown}`)},[r]),k.useEffect(()=>{function c(d){s.current&&!s.current.contains(d.target)&&i(!1)}return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[i]);const l=()=>{i(!0)},u=Mt.Children.map(n,c=>Mt.isValidElement(c)?Mt.cloneElement(c,{isMenuShown:r,setIsMenuShown:i}):c);return p.jsxs("div",{className:`${o} ${e||""}`,onClick:l,ref:s,children:[p.jsx("div",{children:t}),r&&p.jsx("div",{className:Jt.menu,children:u})]})};Gl.propTypes={title:R.any,className:R.string,children:R.any};const Ph=({title:t,id:e,disabled:n,isMenuShown:r,setIsMenuShown:i,children:s})=>{const[o,a]=k.useState(!1),l=()=>{a(!0)},u=()=>{a(!1)},c=()=>{a(f=>!f)},d=Mt.Children.map(s,f=>Mt.isValidElement(f)?Mt.cloneElement(f,{isMenuShown:r,setIsMenuShown:i}):f);return p.jsxs("div",{id:e,className:`${Jt["option-horizontral"]} ${Jt.option} ${n?Jt["option-disabled"]:""}`,onTouchEnd:c,onMouseOver:l,onMouseOut:u,children:[p.jsx("div",{children:t}),o&&p.jsx("div",{className:`${Jt.menu} ${Jt["menu-horizontal"]}`,children:d})]})};Ph.propTypes={title:R.any,id:R.string,isMenuShown:R.bool,setIsMenuShown:R.func,disabled:R.bool,children:R.any};const zk=({id:t,onClick:e,disabled:n,setIsMenuShown:r,children:i})=>{const s=k.useRef(null);k.useEffect(()=>{n&&s.current.setAttribute("disabled","")},[n]);const o=l=>{r(!1),e&&e(l)},a=l=>{r(!1),e&&e(l)};return p.jsx("button",{type:"button",ref:s,id:t,className:Jt.option,onMouseUp:o,onTouchEnd:a,children:i})};zk.propTypes={id:R.string,setIsMenuShown:R.func,onClick:R.func,disabled:R.bool,children:R.any};const AD="_modal_1mfln_1",OD="_close_1mfln_46",LD="_backdrop_1mfln_50",Wd={modal:AD,close:OD,backdrop:LD},As=({title:t,setShowModal:e,children:n})=>{const r=()=>{e(!1)};return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:Wd.backdrop,onClick:r}),p.jsxs("div",{className:Wd.modal,children:[p.jsx("h2",{children:t}),n,p.jsx("div",{className:Wd.close,onClick:r,children:p.jsx("svg",{className:"icon icon-circle_xmark",children:p.jsx("use",{xlinkHref:`${fn}#icon-circle_xmark`})})})]})]})};As.propTypes={title:R.string,setShowModal:R.func,children:R.any};const tn=k.forwardRef(({type:t,placeholder:e,value:n,disabled:r,required:i,className:s,style:o,id:a,minLength:l,onInput:u,onFocus:c,onBlur:d,onChange:f,validateInput:_,setIsFormInvalid:v},w)=>{const[S,y]=k.useState(!1),h=k.useRef(w);k.useLayoutEffect(()=>{if(!S){h.current.classList.remove(Fl.invalid);return}h.current.classList.add(Fl.invalid)},[S]),k.useEffect(()=>{if(S){h.current.setCustomValidity("Poprawnie wypełnij to pole");return}h.current.setCustomValidity(""),v&&v(!1)},[S,v]);const m=C=>{y(!1),f&&f(C)},g=C=>{c&&c(C)},E=C=>{_&&y(!_(n)),d&&d(C)};return p.jsx("input",{type:t||"text",ref:h,id:a,placeholder:e,value:n,disabled:r,required:i,className:`${Fl.input} ${s||""}`,style:o||{},minLength:l||"",onChange:m,onFocus:g,onBlur:E,onInput:u||(()=>{})})});tn.displayName=tn;tn.propTypes={type:R.string,placeholder:R.string,value:R.string,disabled:R.bool,required:R.bool,className:R.string,style:R.any,id:R.string,minLength:R.number,onInput:R.func,onFocus:R.func,onBlur:R.func,onChange:R.func,validateInput:R.func,setIsFormInvalid:R.func};const DD="_toolbar_1p49v_1",MD="_form_1p49v_24",jD="_select_1p49v_40",br={toolbar:DD,"toolbar-fullscreen":"_toolbar-fullscreen_1p49v_19",form:MD,"modal-buttons":"_modal-buttons_1p49v_28","modal-button":"_modal-button_1p49v_28",select:jD},FD=t=>/\/wiki\/+[\w-]{2,}/i.test(t.trim().toLowerCase()),zD=t=>t.trim().length>=3,UD={address:null,content:null,name:null,author:null},$D={show:!1,title:"",message:""},Uk=({setShowSave:t})=>{const{currentUser:e}=Ii(),{pushData:n,checkObject:r}=Nc(),{articleContent:i,articleAddress:s,articleName:o}=k.useContext(qn),[a,l]=k.useState(s||""),[u,c]=k.useState(o||""),[d,f]=k.useState($D),[_,v]=k.useState(!1);k.useEffect(()=>{const g=C=>{f(b=>(C.show&&(b.show=C.show),C.title&&(b.title=C.title),C.message&&(b.message=C.message),b))};_&&(async()=>{let C=UD;if(C.address=a,C.name=u,C.content=i,e.displayName?C.author=e.displayName:C.author=e.email.split("@")[0],r(C))try{const b=await n(C);if(typeof b!="object")throw new Error("Wystąpił niespodziewany błąd.");if(!b.isSuccess)throw new Error(b.message);g({show:!0,title:"Zapisano zmiany",message:b.message})}catch(b){console.error(b.message),g({show:!0,title:"Wystąpił błąd",message:b.message})}v(!1)})()},[_]);const w=g=>{if(g.target.value.length<7){l("/wiki/");return}l(g.target.value)},S=g=>{c(g.target.value)},y=()=>{t(!1)},h=g=>{f(E=>(E.show=g,E)),g===!1&&y()},m=g=>{g.preventDefault(),v(!0)};return p.jsxs(p.Fragment,{children:[!d.show&&p.jsxs(As,{title:"Zapisywanie artykułu",setShowModal:t,children:[p.jsx("span",{children:"Zapisz wszystkie zmiany lub anuluj"}),p.jsxs("form",{onSubmit:m,onReset:y,className:br.form,children:[p.jsx(tn,{type:"text",id:"address",placeholder:"Adres do artykułu",value:a,minLength:7,onChange:w,validateInput:FD,required:!0}),p.jsx(tn,{type:"text",id:"name",placeholder:"Nazwa artykułu",value:u,minLength:3,onChange:S,validateInput:zD,required:!0}),p.jsxs("div",{className:br["modal-buttons"],children:[p.jsx(yn,{type:"submit",children:"Zapisz"}),p.jsx(yn,{type:"reset",highlighted:!1,children:"Anuluj"})]})]})]}),d.show&&p.jsxs(As,{title:d.title,setShowModal:h,children:[p.jsx("span",{children:d.message}),p.jsx(yn,{className:br["modal-button"],onClick:h.bind(void 0,!1),children:"Ok"})]})]})};Uk.propTypes={setShowSave:R.func};const $k=({setShowOpen:t})=>{const{data:e,response:n}=Nc(),[r,i]=k.useState(null),{editorContent:s,setArticleContent:o,setArticleAddress:a,setArticleName:l,setEditorContent:u}=k.useContext(qn),c=()=>{t(!1)},d=_=>{_.preventDefault(),n.isSuccess?e.forEach(v=>{v.address===r&&(o(v.content),a(v.address),l(v.name))}):console.error("Can't fetch article data from the database."),c(),s!=="edit"&&u("edit")},f=_=>{i(_.target.value)};return p.jsxs(As,{title:"Otwórz artykuł",setShowModal:t,children:[p.jsx("span",{children:"Edytuj istniejący artykuł"}),p.jsxs("form",{onSubmit:d,onReset:c,className:br.form,children:[p.jsxs("select",{className:br.select,name:"address",onChange:f,required:!0,defaultValue:"",children:[p.jsx("option",{value:"","aria-selected":!0,"aria-disabled":!0,disabled:!0,children:"Wybierz artykuł"}),e&&e.map((_,v)=>p.jsx("option",{value:_.address,children:_.name},v))]}),p.jsxs("div",{className:br["modal-buttons"],children:[p.jsx(yn,{type:"submit",children:"Otwórz"}),p.jsx(yn,{type:"reset",highlighted:!1,children:"Anuluj"})]})]})]})};$k.propTypes={setShowOpen:R.func};const WD="_editor_1cr3r_1",HD="_option_1cr3r_16",BD="_highlight_1cr3r_48",Zi={editor:WD,option:HD,"toolbar-fullscreen":"_toolbar-fullscreen_1cr3r_39",highlight:BD,"workspace-container":"_workspace-container_1cr3r_52"},VD=t=>{if(navigator.clipboard){navigator.clipboard.writeText(t);return}const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)},Wk=({setEditorStyles:t,setEditorContent:e})=>{const{width:n,fullscreen:r,setFullscreen:i}=k.useContext(Wt),{toolbarButtons:s,articleContent:o,resetArticleInfo:a,enableToolbarButtons:l,disableToolbarButtons:u}=k.useContext(qn),[c,d]=k.useState(!1),[f,_]=k.useState(!1),[v,w]=k.useState({}),S=()=>{r?(i(!1),w({}),t({})):(i(!0),w({borderTopLeftRadius:"unset",borderTopRightRadius:"unset"}),t({position:"fixed",inset:0,zIndex:50,borderRadius:"unset"}))},y=I=>{I.currentTarget.id==="exit"?(e("home"),u("file",["exit","save"]),u("edit",["copy"])):I.currentTarget.id==="edit"?(a(),e("edit"),l("file",["exit","save"]),l("edit",["copy"])):I.currentTarget.id==="save"?d(!0):I.currentTarget.id==="open"?_(!0):(e(I.currentTarget.id),l("file",["exit","save"]),l("edit",["copy"]))},h=()=>{VD(o)},m=I=>I.map((N,D)=>p.jsx(zk,{id:N.id,onClick:N.onClick,disabled:N.disabled,children:N.children},D)),g=[{id:"edit",onClick:y,disabled:s.file.new.disabled,children:"Nowy"},{id:"open",onClick:y,disabled:s.file.open.disabled,children:"Otwórz"},{id:"save",onClick:y,disabled:s.file.save.disabled,children:"Zapisz"},{id:"exit",onClick:y,disabled:s.file.exit.disabled,children:"Wyjdź"}],E=[{id:"copy",onClick:h,disabled:s.edit.copy.disabled,children:"Skopiuj kod"}],C=m(g),b=m(E);return p.jsxs(p.Fragment,{children:[f&&p.jsx($k,{setShowOpen:_}),c&&p.jsx(Uk,{setShowSave:d}),p.jsxs("nav",{className:br.toolbar,style:v,children:[n>800?p.jsxs(p.Fragment,{children:[p.jsx(Gl,{title:"Plik",className:Zi.option,children:C}),p.jsx(Gl,{title:"Edytuj",className:Zi.option,children:b})]}):p.jsxs(Gl,{title:p.jsx(St,{icon:Tm.faBars,className:Zi.option}),children:[p.jsx(Ph,{title:p.jsxs(p.Fragment,{children:["Plik"," ",p.jsx(St,{icon:Rh.faArrowRight})]}),children:C}),p.jsx(Ph,{title:p.jsxs(p.Fragment,{children:["Edytuj"," ",p.jsx(St,{icon:Rh.faArrowRight})]}),children:b})]}),p.jsx("button",{type:"button",className:`${br["toolbar-fullscreen"]} ${Zi.option}`,title:r?"Zamknij pełny ekran":"Pełny ekran",onClick:S,children:p.jsx(St,{icon:r?jk.faMinimize:Fk.faMaximize})})]})]})};Wk.propTypes={setEditorStyles:R.func,setEditorContent:R.func};const GD="_welcome_15ky3_1",qD="_option_15ky3_17",KD="_recent_15ky3_21",Wr={welcome:GD,option:qD,recent:KD},YD=()=>p.jsxs("div",{className:Wr.welcome,children:[p.jsxs("div",{children:[p.jsx("h3",{children:"Witaj! Zacznij edytować artykuły wybierając jedną z opcji"}),p.jsx("h4",{children:"Edytuj"}),p.jsx("button",{type:"button",className:Wr.option,children:"Nowy..."}),p.jsx("button",{type:"button",className:Wr.option,children:"Otwórz..."})]}),p.jsxs("div",{className:Wr.recent,children:[p.jsx("h4",{children:"Najnowsze"}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx("button",{type:"button",className:Wr.option,children:"Artykuł 1"})}),p.jsx("li",{children:p.jsx("button",{type:"button",className:Wr.option,children:"Artykuł 2"})}),p.jsx("li",{children:p.jsx("button",{type:"button",className:Wr.option,children:"Artykuł 3"})})]})]})]});var Hk={exports:{}};(function(t){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function h(m){return m instanceof l?new l(m.type,h(m.content),m.alias):Array.isArray(m)?m.map(h):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++s}),h.__id},clone:function h(m,g){g=g||{};var E,C;switch(a.util.type(m)){case"Object":if(C=a.util.objId(m),g[C])return g[C];E={},g[C]=E;for(var b in m)m.hasOwnProperty(b)&&(E[b]=h(m[b],g));return E;case"Array":return C=a.util.objId(m),g[C]?g[C]:(E=[],g[C]=E,m.forEach(function(I,N){E[N]=h(I,g)}),E);default:return m}},getLanguage:function(h){for(;h;){var m=i.exec(h.className);if(m)return m[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,m){h.className=h.className.replace(RegExp(i,"gi"),""),h.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(E){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(h){var m=document.getElementsByTagName("script");for(var g in m)if(m[g].src==h)return m[g]}return null}},isActive:function(h,m,g){for(var E="no-"+m;h;){var C=h.classList;if(C.contains(m))return!0;if(C.contains(E))return!1;h=h.parentElement}return!!g}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(h,m){var g=a.util.clone(a.languages[h]);for(var E in m)g[E]=m[E];return g},insertBefore:function(h,m,g,E){E=E||a.languages;var C=E[h],b={};for(var I in C)if(C.hasOwnProperty(I)){if(I==m)for(var N in g)g.hasOwnProperty(N)&&(b[N]=g[N]);g.hasOwnProperty(I)||(b[I]=C[I])}var D=E[h];return E[h]=b,a.languages.DFS(a.languages,function(V,Z){Z===D&&V!=h&&(this[V]=b)}),b},DFS:function h(m,g,E,C){C=C||{};var b=a.util.objId;for(var I in m)if(m.hasOwnProperty(I)){g.call(m,I,m[I],E||I);var N=m[I],D=a.util.type(N);D==="Object"&&!C[b(N)]?(C[b(N)]=!0,h(N,g,null,C)):D==="Array"&&!C[b(N)]&&(C[b(N)]=!0,h(N,g,I,C))}}},plugins:{},highlightAll:function(h,m){a.highlightAllUnder(document,h,m)},highlightAllUnder:function(h,m,g){var E={callback:g,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),a.hooks.run("before-all-elements-highlight",E);for(var C=0,b;b=E.elements[C++];)a.highlightElement(b,m===!0,E.callback)},highlightElement:function(h,m,g){var E=a.util.getLanguage(h),C=a.languages[E];a.util.setLanguage(h,E);var b=h.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(b,E);var I=h.textContent,N={element:h,language:E,grammar:C,code:I};function D(Z){N.highlightedCode=Z,a.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,a.hooks.run("after-highlight",N),a.hooks.run("complete",N),g&&g.call(N.element)}if(a.hooks.run("before-sanity-check",N),b=N.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!N.code){a.hooks.run("complete",N),g&&g.call(N.element);return}if(a.hooks.run("before-highlight",N),!N.grammar){D(a.util.encode(N.code));return}if(m&&r.Worker){var V=new Worker(a.filename);V.onmessage=function(Z){D(Z.data)},V.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else D(a.highlight(N.code,N.grammar,N.language))},highlight:function(h,m,g){var E={code:h,grammar:m,language:g};if(a.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=a.tokenize(E.code,E.grammar),a.hooks.run("after-tokenize",E),l.stringify(a.util.encode(E.tokens),E.language)},tokenize:function(h,m){var g=m.rest;if(g){for(var E in g)m[E]=g[E];delete m.rest}var C=new d;return f(C,C.head,h),c(h,C,m,C.head,0),v(C)},hooks:{all:{},add:function(h,m){var g=a.hooks.all;g[h]=g[h]||[],g[h].push(m)},run:function(h,m){var g=a.hooks.all[h];if(!(!g||!g.length))for(var E=0,C;C=g[E++];)C(m)}},Token:l};r.Prism=a;function l(h,m,g,E){this.type=h,this.content=m,this.alias=g,this.length=(E||"").length|0}l.stringify=function h(m,g){if(typeof m=="string")return m;if(Array.isArray(m)){var E="";return m.forEach(function(D){E+=h(D,g)}),E}var C={type:m.type,content:h(m.content,g),tag:"span",classes:["token",m.type],attributes:{},language:g},b=m.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(C.classes,b):C.classes.push(b)),a.hooks.run("wrap",C);var I="";for(var N in C.attributes)I+=" "+N+'="'+(C.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+C.tag+' class="'+C.classes.join(" ")+'"'+I+">"+C.content+"</"+C.tag+">"};function u(h,m,g,E){h.lastIndex=m;var C=h.exec(g);if(C&&E&&C[1]){var b=C[1].length;C.index+=b,C[0]=C[0].slice(b)}return C}function c(h,m,g,E,C,b){for(var I in g)if(!(!g.hasOwnProperty(I)||!g[I])){var N=g[I];N=Array.isArray(N)?N:[N];for(var D=0;D<N.length;++D){if(b&&b.cause==I+","+D)return;var V=N[D],Z=V.inside,_t=!!V.lookbehind,Ht=!!V.greedy,ln=V.alias;if(Ht&&!V.pattern.global){var nt=V.pattern.toString().match(/[imsuy]*$/)[0];V.pattern=RegExp(V.pattern.source,nt+"g")}for(var wt=V.pattern||V,O=E.next,z=C;O!==m.tail&&!(b&&z>=b.reach);z+=O.value.length,O=O.next){var H=O.value;if(m.length>h.length)return;if(!(H instanceof l)){var ae=1,ie;if(Ht){if(ie=u(wt,z,h,_t),!ie||ie.index>=h.length)break;var it=ie.index,Yn=ie.index+ie[0].length,ne=z;for(ne+=O.value.length;it>=ne;)O=O.next,ne+=O.value.length;if(ne-=O.value.length,z=ne,O.value instanceof l)continue;for(var rt=O;rt!==m.tail&&(ne<Yn||typeof rt.value=="string");rt=rt.next)ae++,ne+=rt.value.length;ae--,H=h.slice(z,ne),ie.index-=z}else if(ie=u(wt,0,H,_t),!ie)continue;var it=ie.index,Bt=ie[0],Nt=H.slice(0,it),Ba=H.slice(it+Bt.length),Ks=z+H.length;b&&Ks>b.reach&&(b.reach=Ks);var Fr=O.prev;Nt&&(Fr=f(m,Fr,Nt),z+=Nt.length),_(m,Fr,ae);var Lc=new l(I,Z?a.tokenize(Bt,Z):Bt,ln,Bt);if(O=f(m,Fr,Lc),Ba&&f(m,O,Ba),ae>1){var Ys={cause:I+","+D,reach:Ks};c(h,m,g,O.prev,z,Ys),b&&Ys.reach>b.reach&&(b.reach=Ys.reach)}}}}}}function d(){var h={value:null,prev:null,next:null},m={value:null,prev:h,next:null};h.next=m,this.head=h,this.tail=m,this.length=0}function f(h,m,g){var E=m.next,C={value:g,prev:m,next:E};return m.next=C,E.prev=C,h.length++,C}function _(h,m,g){for(var E=m.next,C=0;C<g&&E!==h.tail;C++)E=E.next;m.next=E,E.prev=m,h.length-=C}function v(h){for(var m=[],g=h.head.next;g!==h.tail;)m.push(g.value),g=g.next;return m}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(h){var m=JSON.parse(h.data),g=m.language,E=m.code,C=m.immediateClose;r.postMessage(a.highlight(E,a.languages[g],g)),C&&r.close()},!1)),a;var w=a.util.currentScript();w&&(a.filename=w.src,w.hasAttribute("data-manual")&&(a.manual=!0));function S(){a.manual||a.highlightAll()}if(!a.manual){var y=document.readyState;y==="loading"||y==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return a}(e);t.exports&&(t.exports=n),typeof Zm<"u"&&(Zm.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(w,S){return"✖ Error "+w+" while fetching file: "+S},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",u="loaded",c="failed",d="pre[data-src]:not(["+a+'="'+u+'"]):not(['+a+'="'+l+'"])';function f(w,S,y){var h=new XMLHttpRequest;h.open("GET",w,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?S(h.responseText):h.status>=400?y(i(h.status,h.statusText)):y(s))},h.send(null)}function _(w){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(S){var y=Number(S[1]),h=S[2],m=S[3];return h?m?[y,Number(m)]:[y,void 0]:[y,y]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+d}),n.hooks.add("before-sanity-check",function(w){var S=w.element;if(S.matches(d)){w.code="",S.setAttribute(a,l);var y=S.appendChild(document.createElement("CODE"));y.textContent=r;var h=S.getAttribute("data-src"),m=w.language;if(m==="none"){var g=(/\.(\w+)$/.exec(h)||[,"none"])[1];m=o[g]||g}n.util.setLanguage(y,m),n.util.setLanguage(S,m);var E=n.plugins.autoloader;E&&E.loadLanguages(m),f(h,function(C){S.setAttribute(a,u);var b=_(S.getAttribute("data-range"));if(b){var I=C.split(/\r\n?|\n/g),N=b[0],D=b[1]==null?I.length:b[1];N<0&&(N+=I.length),N=Math.max(0,Math.min(N-1,I.length)),D<0&&(D+=I.length),D=Math.max(0,Math.min(D,I.length)),C=I.slice(N,D).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(N+1))}y.textContent=C,n.highlightElement(y)},function(C){S.setAttribute(a,c),y.textContent=C})}}),n.plugins.fileHighlight={highlight:function(S){for(var y=(S||document).querySelectorAll(d),h=0,m;m=y[h++];)n.highlightElement(m)}};var v=!1;n.fileHighlight=function(){v||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),v=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Hk);var QD=Hk.exports;const u_=qu(QD);const XD="_code_wlch2_1",JD="_content_wlch2_30",Hd={code:XD,"line-numbers":"_line-numbers_wlch2_13",content:JD};String.prototype.lines=function(){return this.split(`
`)};String.prototype.lineCount=function(){return this.lines().length};const ZD=()=>{const{articleContent:t,setArticleContent:e}=k.useContext(qn),n=k.useRef(null),[r,i]=k.useState(1),s=l=>{i(l.lineCount()),l[l.length-1]==`
`&&(l+=" "),n.current.innerHTML=u_.highlight(l.replace(new RegExp("&","g"),"&").replace(new RegExp("<","g"),"<"),u_.languages.html,"html")};k.useEffect(()=>{s(t)},[t]);const o=l=>{let u=l.target.value;s(u),e(u)},a=l=>{if(l.key=="Tab"){let u=l.target.value;const c=l.target;l.preventDefault();let d=u.slice(0,c.selectionStart),f=u.slice(c.selectionEnd,c.value.length),_=c.selectionEnd+1;c.value=d+"	"+f,c.selectionStart=_,c.selectionEnd=_}};return p.jsxs("div",{className:Hd.code,children:[p.jsx("div",{className:Hd["line-numbers"],children:[...Array(r)].map((l,u)=>p.jsx("span",{},u))}),p.jsxs("div",{className:Hd.content,children:[p.jsx("textarea",{onInput:o,onKeyDown:a,spellCheck:!1,value:t}),p.jsx("pre",{children:p.jsx("code",{className:"language-html",ref:n})})]})]})},Bk=({setMainHeader:t})=>{const{editorContent:e,setEditorContent:n}=k.useContext(qn),[r,i]=k.useState({});k.useEffect(()=>{t("Edytor artykułów")},[t]);let s="";return e==="home"?s=p.jsx(YD,{}):e==="edit"?s=p.jsx(ZD,{}):s="Wystąpił błąd",p.jsxs("div",{className:Zi.editor,style:r,children:[p.jsx(Wk,{setEditorStyles:i,setEditorContent:n}),p.jsx("div",{className:Zi["workspace-container"],children:s})]})};Bk.propTypes={setMainHeader:R.func};const eM=()=>{const{currentPage:t,articleName:e}=k.useContext(qn),[n,r]=k.useState("");let i="";return t==="home"?i=p.jsx(Mk,{setMainHeader:r}):t==="editor"&&(i=p.jsx(Bk,{setMainHeader:r})),p.jsxs("main",{className:Hm.main,children:[p.jsx("header",{children:p.jsxs("h2",{children:[n,e&&" ",e&&p.jsx(St,{icon:Dk.faAngleRight}),e&&" ",e&&e]})}),p.jsx("section",{children:i})]})},tM="_console_9pz6r_1",c_={console:tM,"shrink-menu":"_shrink-menu_9pz6r_28"},nM=()=>{const t=k.useRef(null),{width:e}=k.useContext(Wt),[n,r]=k.useState({}),[i,s]=k.useState(!1);return k.useEffect(()=>{const o=t.current.clientWidth;e<=740&&!i&&r({width:o,height:"100vh"})},[e,i]),p.jsx(p.Fragment,{children:p.jsx(Lk,{children:p.jsxs("div",{className:`${i?"":c_["shrink-menu"]} ${c_.console}`,children:[e<=740&&p.jsx("div",{style:n}),p.jsx(Wm,{ref:t,setIsMenuExpanded:s}),p.jsx(eM,{})]})})})},rM=()=>p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx(Na,{}),p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 404"})}),p.jsxs("div",{children:[p.jsx("p",{children:"Nie znaleziono strony."}),p.jsx(mi,{to:"/",children:"Strona główna"})]})]})]}),p.jsx(jr,{})]}),iM=()=>p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx(Na,{}),p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 403"})}),p.jsxs("div",{children:[p.jsx("p",{children:"Nie masz dostępu do tej strony."}),p.jsx(mi,{to:"/logowanie",children:"Zaloguj się"})]})]})]}),p.jsx(jr,{})]}),sM="_container_11xnx_1",oM="_form_11xnx_7",dt={container:sM,form:oM,"modal-button":"_modal-button_11xnx_39"},d_={show:!1,title:"",message:""},aM=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,lM=t=>t.trim()!==""&&t.trim().length>=3,uM=t=>aM.test(t.toLowerCase())&&t.toLowerCase().trim().length>=3,cM=()=>{const{uid:t,loginWithEmail:e}=Ii(),[n,r]=k.useState(""),[i,s]=k.useState(""),[o,a]=k.useState(d_),[l,u]=k.useState(!0),c=h=>{r(h.target.value)},d=h=>{s(h.target.value)},f=()=>{r(""),s(""),u(!1)},_=h=>{if(h.preventDefault(),l){a({show:!0,title:"Wypełnij formularz",message:"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza."});return}f(),e(n,i).then(()=>{a({show:!0,title:"Zalogowano",message:"Logowanie zakończyło się sukcesem.",redirect:"/"})}).catch(m=>{let g={show:!0,title:"Wystąpił błąd",message:"Serwis w tej chwili jest niedostępny. Spróbuj ponownie później"};m.message==="auth/user-not-found"&&(g.message="Nie znaleziono takiego użytkownika"),m.message==="auth/wrong-password"&&(g.message="Podano błędne hasło"),a(g),console.log(m)})},v=()=>{a(d_)},w=p.jsxs("form",{onSubmit:_,className:dt.form,children:[p.jsxs("label",{children:[p.jsxs("p",{children:["E-mail ",p.jsx("span",{className:dt.asterisk,children:"*"})]}),p.jsx(tn,{type:"email",id:"email",value:n,minLength:3,onInput:c,validateInput:uM,setIsFormInvalid:u,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Hasło ",p.jsx("span",{className:dt.asterisk,children:"*"})]}),p.jsx(tn,{type:"password",id:"password",value:i,minLength:3,onInput:d,validateInput:lM,setIsFormInvalid:u,required:!0})]}),p.jsx(yn,{type:"submit",children:"Zaloguj się"}),p.jsxs("p",{children:["Nie masz jeszcze konta?"," ",p.jsx(Ft,{to:"/rejestracja",children:"Zapisz się"})]})]}),S=t?"Jesteś już zalogowany":"Zaloguj się",y=t?"Wyloguj się i zaloguj na inne konto lub przejdź na inną stronę":"Wypełnij formularz logowania";return p.jsxs(p.Fragment,{children:[p.jsxs("main",{className:dt.container,children:[p.jsxs("section",{className:"section",children:[p.jsx("h1",{children:S}),p.jsx("h2",{children:y}),t?p.jsx("div",{children:p.jsx(mi,{to:"/wylogowanie",children:"Wyloguj się"})}):w]}),o.show&&p.jsxs(As,{title:o.title,setShowModal:v,children:[p.jsx("p",{children:o.message}),o.redirect?p.jsx(mi,{to:o.redirect,className:dt["modal-button"],onClick:v,children:"Ok"}):p.jsx(yn,{className:dt["modal-button"],onClick:v,children:"Ok"})]})]}),p.jsx(jr,{})]})},f_={show:!1,title:"",message:""},dM=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,Bd=t=>t.trim()!==""&&t.trim().length>=3,fM=t=>dM.test(t.toLowerCase())&&t.toLowerCase().trim().length>=3,hM=()=>{const{createUser:t}=Ii(),e=Fs(),[n,r]=k.useState(""),[i,s]=k.useState(""),[o,a]=k.useState(""),[l,u]=k.useState(""),[c,d]=k.useState(f_),[f,_]=k.useState(!1),[v,w]=k.useState(!0);k.useEffect(()=>{if(o===l){_(!0);return}_(!1)},[o,l]);const S=b=>{r(b.target.value)},y=b=>{s(b.target.value)},h=b=>{a(b.target.value)},m=b=>{u(b.target.value)},g=()=>{r(""),s(""),a(""),u(""),w(!1),_(!0)},E=b=>{if(b.preventDefault(),!f){d({show:!0,title:"Hasła się nie zgadzają",message:"Hasła powinny być takie same w obu polach i powinny mieć co najmniej 6 znaków."});return}if(v){d({show:!0,title:"Wypełnij formularz",message:"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza."});return}g(),t(i,o,n).then(()=>{d({show:!0,title:"Zarejestrowano",message:"Za chwilę nastąpi przejście do strony głównej.",redirect:"/"}),setTimeout(()=>{e("/",{replace:!0})},5e3)}).catch(I=>{let N={show:!0,title:"Wystąpił błąd",message:"Serwis jest niedostępny. Spróbuj ponownie później"};I.message==="auth/email-already-in-use"&&(N.message="Podany e-mail jest już zajęty"),I.message==="auth/weak-password"&&(N.message="Podane hasło jest za słabe. Hasło powinno mieć co najmniej 6 znaków."),d(N),console.log(I)})},C=()=>{d(f_)};return p.jsxs(p.Fragment,{children:[p.jsxs("main",{className:dt.container,children:[p.jsxs("section",{className:"section",children:[p.jsx("h1",{children:"Zarejestruj się"}),p.jsx("h2",{children:"Wypełnij formularz rejestracyjny"}),p.jsxs("form",{onSubmit:E,className:dt.form,children:[p.jsxs("label",{children:[p.jsxs("p",{children:["Nazwa"," ",p.jsx("span",{className:dt.asterisk,children:"*"})]}),p.jsx(tn,{type:"text",id:"name",value:n,minLength:3,onInput:S,validateInput:Bd,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["E-mail"," ",p.jsx("span",{className:dt.asterisk,children:"*"})]}),p.jsx(tn,{type:"email",id:"email",value:i,minLength:3,onInput:y,validateInput:fM,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Hasło"," ",p.jsx("span",{className:dt.asterisk,children:"*"})]}),p.jsx(tn,{type:"password",id:"password",value:o,minLength:6,onInput:h,validateInput:Bd,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Powtórz Hasło"," ",p.jsx("span",{className:dt.asterisk,children:"*"})]}),p.jsx(tn,{type:"password",id:"confirmPassword",value:l,minLength:6,onInput:m,validateInput:Bd,setIsFormInvalid:w,required:!0})]}),p.jsx(yn,{type:"submit",children:"Zapisz się"}),p.jsxs("p",{children:["Masz już konto?"," ",p.jsx(Ft,{to:"/logowanie",children:"Zaloguj się"})]})]})]}),c.show&&p.jsxs(As,{title:c.title,setShowModal:C,children:[p.jsx("p",{children:c.message}),c.redirect?p.jsx(mi,{to:c.redirect,className:dt["modal-button"],onClick:C,children:"Ok"}):p.jsx(yn,{className:dt["modal-button"],onClick:C,children:"Ok"})]})]}),p.jsx(jr,{})]})},pM=()=>{const{logout:t}=Ii(),e=Fs();return k.useEffect(()=>{t(),e("/",{replace:!0})},[t,e]),p.jsxs(p.Fragment,{children:[p.jsx("main",{children:p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 404"})}),p.jsx("div",{children:p.jsx("p",{children:"Nie znaleziono strony."})})]})}),p.jsx(jr,{})]})},mM=()=>{const t=Vn(),{currentPage:e,setCurrentPage:n}=k.useContext(Wt),{isShown:r}=k.useContext(Ra);return k.useEffect(()=>{e!==t.pathname&&!r&&n(t.pathname)},[t,e,r,n]),p.jsxs(p.Fragment,{children:[e!=="/console"&&p.jsx(H1,{}),r&&p.jsx(rI,{}),p.jsx(zw,{})]})},gM=()=>{const{uid:t}=Ii(),{data:e,response:n}=Nc(),[r,i]=k.useState(!1),[s,o]=k.useState([]),[a,l]=k.useState(!0),u=k.useMemo(()=>t?!0:!!sessionStorage.getItem("uid"),[t]);k.useEffect(()=>{n.isSuccess&&i(e.length>0)},[e,n]),k.useEffect(()=>{n.isSuccess&&o(e)},[e,n]),k.useEffect(()=>{if(u){l(!0);return}l(!1)},[u]);const c=zx(Bf(p.jsxs(Rt,{path:"/",element:p.jsx(mM,{}),children:[p.jsx(Rt,{index:!0,element:p.jsx(sP,{})}),p.jsxs(Rt,{path:"wiki",element:p.jsx(oP,{}),children:[p.jsx(Rt,{index:!0,element:p.jsx(kO,{})}),r&&s&&s.map((d,f)=>p.jsx(Rt,{path:d.address,element:p.jsx(ek,{item:d})},f))]}),p.jsx(Rt,{path:"console",element:a?p.jsx(nM,{}):p.jsx(Ax,{to:"/zabroniony",replace:!0})}),p.jsx(Rt,{path:"rejestracja",element:p.jsx(hM,{})}),p.jsx(Rt,{path:"logowanie",element:p.jsx(cM,{})}),p.jsx(Rt,{path:"wylogowanie",element:p.jsx(pM,{})}),p.jsx(Rt,{path:"zabroniony",element:p.jsx(iM,{})}),p.jsx(Rt,{path:"*",element:p.jsx(rM,{})})]})));return p.jsx(Rx,{router:c})},Vk=({children:t})=>{const[e,n]=k.useState(window.innerWidth),[r,i]=k.useState(window.innerHeight),[s,o]=k.useState(document.location.pathname),[a,l]=k.useState(!1),u={width:e,height:r,currentPage:s,setCurrentPage:o,fullscreen:a,setFullscreen:l};return k.useEffect(()=>{const c=()=>{const f=document.documentElement;f.requestFullscreen?f.requestFullscreen():f.webkitRequestFullscreen?f.webkitRequestFullscreen():f.msRequestFullscreen&&f.msRequestFullscreen()},d=()=>{document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};a?c():document.fullscreenElement&&d()},[a]),k.useEffect(()=>{const c=()=>{n(window.innerWidth),i(window.innerHeight)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),p.jsx(Wt.Provider,{value:u,children:t})};Vk.propTypes={children:R.any};const Gk=({children:t})=>{const[e,n]=k.useState(),r={isShown:e,setIsShown:n};return k.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.removeAttribute("style")},[e]),p.jsx(Ra.Provider,{value:r,children:t})};Gk.propTypes={children:R.any};/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */(function(){if(typeof window<"u"&&window.addEventListener){var t=Object.create(null),e,n,r=function(){clearTimeout(n),n=setTimeout(e,100)},i=function(){},s=function(){var u;window.addEventListener("resize",r,!1),window.addEventListener("orientationchange",r,!1),window.MutationObserver?(u=new MutationObserver(r),u.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i=function(){try{u.disconnect(),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)}catch{}}):(document.documentElement.addEventListener("DOMSubtreeModified",r,!1),i=function(){document.documentElement.removeEventListener("DOMSubtreeModified",r,!1),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)})},o=function(u){function c(v){var w;return v.protocol!==void 0?w=v:(w=document.createElement("a"),w.href=v),w.protocol.replace(/:/g,"")+w.host}var d,f,_;return window.XMLHttpRequest&&(d=new XMLHttpRequest,f=c(location),_=c(u),d.withCredentials===void 0&&_!==""&&_!==f?d=XDomainRequest||void 0:d=XMLHttpRequest),d},a="http://www.w3.org/1999/xlink";e=function(){var u,c,d,f,_,v=0,w,S,y,h,m;function g(){v-=1,v===0&&(i(),s())}function E(I){return function(){t[I.base]!==!0&&(I.useEl.setAttributeNS(a,"xlink:href","#"+I.hash),I.useEl.hasAttribute("href")&&I.useEl.setAttribute("href","#"+I.hash))}}function C(I){return function(){var N=document.body,D=document.createElement("x"),V;I.onload=null,D.innerHTML=I.responseText,V=D.getElementsByTagName("svg")[0],V&&(V.setAttribute("aria-hidden","true"),V.style.position="absolute",V.style.width=0,V.style.height=0,V.style.overflow="hidden",N.insertBefore(V,N.firstChild)),g()}}function b(I){return function(){I.onerror=null,I.ontimeout=null,g()}}for(i(),h=document.getElementsByTagName("use"),_=0;_<h.length;_+=1){try{c=h[_].getBoundingClientRect()}catch{c=!1}f=h[_].getAttribute("href")||h[_].getAttributeNS(a,"href")||h[_].getAttribute("xlink:href"),f&&f.split?y=f.split("#"):y=["",""],u=y[0],d=y[1],w=c&&c.left===0&&c.right===0&&c.top===0&&c.bottom===0,c&&c.width===0&&c.height===0&&!w?(h[_].hasAttribute("href")&&h[_].setAttributeNS(a,"xlink:href",f),u.length&&(m=t[u],m!==!0&&setTimeout(E({useEl:h[_],base:u,hash:d}),0),m===void 0&&(S=o(u),S!==void 0&&(m=new S,t[u]=m,m.onload=C(m),m.onerror=b(m),m.ontimeout=b(m),m.open("GET",u),m.send(),v+=1)))):w?u.length&&t[u]&&setTimeout(E({useEl:h[_],base:u,hash:d}),0):t[u]===void 0?t[u]=!0:t[u].onload&&(t[u].abort(),delete t[u].onload,t[u]=!0)}h="",v+=1,g()};var l;l=function(){window.removeEventListener("load",l,!1),n=setTimeout(e,0)},document.readyState!=="complete"?window.addEventListener("load",l,!1):l()}})();Vd.createRoot(document.getElementById("root")).render(p.jsx(Mt.StrictMode,{children:p.jsx(Vk,{children:p.jsx(Gk,{children:p.jsx(gM,{})})})}));
