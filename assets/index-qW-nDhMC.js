function k_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C_={exports:{}},Ju={},b_={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),yk=Symbol.for("react.portal"),_k=Symbol.for("react.fragment"),wk=Symbol.for("react.strict_mode"),Ek=Symbol.for("react.profiler"),Sk=Symbol.for("react.provider"),kk=Symbol.for("react.context"),Ck=Symbol.for("react.forward_ref"),bk=Symbol.for("react.suspense"),xk=Symbol.for("react.memo"),Ik=Symbol.for("react.lazy"),sg=Symbol.iterator;function Tk(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var x_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I_=Object.assign,T_={};function Us(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||x_}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N_(){}N_.prototype=Us.prototype;function Mh(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||x_}var jh=Mh.prototype=new N_;jh.constructor=Mh;I_(jh,Us.prototype);jh.isPureReactComponent=!0;var og=Array.isArray,P_=Object.prototype.hasOwnProperty,Fh={current:null},R_={key:!0,ref:!0,__self:!0,__source:!0};function A_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)P_.call(e,r)&&!R_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xa,type:t,key:s,ref:o,props:i,_owner:Fh.current}}function Nk(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function Pk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ag=/\/+/g;function Gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Pk(""+t.key):e.toString(36)}function Pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xa:case yk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gc(o,0):r,og(i)?(n="",t!=null&&(n=t.replace(ag,"$&/")+"/"),Pl(i,e,n,"",function(u){return u})):i!=null&&(zh(i)&&(i=Nk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ag,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",og(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gc(s,a);o+=Pl(s,e,n,l,i)}else if(l=Tk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gc(s,a++),o+=Pl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Za(t,e,n){if(t==null)return t;var r=[],i=0;return Pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Rk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Rl={transition:null},Ak={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:Fh};re.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Us;re.Fragment=_k;re.Profiler=Ek;re.PureComponent=Mh;re.StrictMode=wk;re.Suspense=bk;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ak;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=I_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)P_.call(e,l)&&!R_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xa,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:kk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sk,_context:t},t.Consumer=t};re.createElement=A_;re.createFactory=function(t){var e=A_.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:Ck,render:t}};re.isValidElement=zh;re.lazy=function(t){return{$$typeof:Ik,_payload:{_status:-1,_result:t},_init:Rk}};re.memo=function(t,e){return{$$typeof:xk,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return ht.current.useCallback(t,e)};re.useContext=function(t){return ht.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};re.useEffect=function(t,e){return ht.current.useEffect(t,e)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return ht.current.useMemo(t,e)};re.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};re.useRef=function(t){return ht.current.useRef(t)};re.useState=function(t){return ht.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.2.0";b_.exports=re;var k=b_.exports;const Wt=Xu(k),Ok=k_({__proto__:null,default:Wt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lk=k,Dk=Symbol.for("react.element"),Mk=Symbol.for("react.fragment"),jk=Object.prototype.hasOwnProperty,Fk=Lk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zk={key:!0,ref:!0,__self:!0,__source:!0};function O_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jk.call(e,r)&&!zk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Dk,type:t,key:s,ref:o,props:i,_owner:Fk.current}}Ju.Fragment=Mk;Ju.jsx=O_;Ju.jsxs=O_;C_.exports=Ju;var p=C_.exports,qd={},L_={exports:{}},At={},D_={exports:{}},M_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var B=L.length;L.push(W);e:for(;0<B;){var ne=B-1>>>1,ee=L[ne];if(0<i(ee,W))L[ne]=W,L[B]=ee,B=ne;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],B=L.pop();if(B!==W){L[0]=B;e:for(var ne=0,ee=L.length,Dt=ee>>>1;ne<Dt;){var he=2*(ne+1)-1,Qe=L[he],Me=he+1,bt=L[Me];if(0>i(Qe,B))Me<ee&&0>i(bt,Qe)?(L[ne]=bt,L[Me]=B,ne=Me):(L[ne]=Qe,L[he]=B,ne=he);else if(Me<ee&&0>i(bt,B))L[ne]=bt,L[Me]=B,ne=Me;else break e}}return W}function i(L,W){var B=L.sortIndex-W.sortIndex;return B!==0?B:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,y=!1,g=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=L)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(L){if(w=!1,m(L),!g)if(n(l)!==null)g=!0,dn(C);else{var W=n(u);W!==null&&de(E,W.startTime-L)}}function C(L,W){g=!1,w&&(w=!1,v(I),I=-1),y=!0;var B=f;try{for(m(W),d=n(l);d!==null&&(!(d.expirationTime>W)||L&&!j());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var ee=ne(d.expirationTime<=W);W=t.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(l)&&r(l),m(W)}else r(l);d=n(l)}if(d!==null)var Dt=!0;else{var he=n(u);he!==null&&de(E,he.startTime-W),Dt=!1}return Dt}finally{d=null,f=B,y=!1}}var _=!1,b=null,I=-1,T=5,A=-1;function j(){return!(t.unstable_now()-A<T)}function ie(){if(b!==null){var L=t.unstable_now();A=L;var W=!0;try{W=b(!0,L)}finally{W?ye():(_=!1,b=null)}}else _=!1}var ye;if(typeof h=="function")ye=function(){h(ie)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,Jn=ut.port2;ut.port1.onmessage=ie,ye=function(){Jn.postMessage(null)}}else ye=function(){S(ie,0)};function dn(L){b=L,_||(_=!0,ye())}function de(L,W){I=S(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,dn(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var B=f;f=W;try{return L()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=f;f=L;try{return W()}finally{f=B}},t.unstable_scheduleCallback=function(L,W,B){var ne=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ne+B:ne):B=ne,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=B+ee,L={id:c++,callback:W,priorityLevel:L,startTime:B,expirationTime:ee,sortIndex:-1},B>ne?(L.sortIndex=B,e(u,L),n(l)===null&&L===n(u)&&(w?(v(I),I=-1):w=!0,de(E,B-ne))):(L.sortIndex=ee,e(l,L),g||y||(g=!0,dn(C))),L},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(L){var W=f;return function(){var B=f;f=W;try{return L.apply(this,arguments)}finally{f=B}}}})(M_);D_.exports=M_;var Uk=D_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=k,Rt=Uk;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F_=new Set,Vo={};function Oi(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(Vo[t]=e,t=0;t<e.length;t++)F_.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,$k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lg={},ug={};function Wk(t){return Kd.call(ug,t)?!0:Kd.call(lg,t)?!1:$k.test(t)?ug[t]=!0:(lg[t]=!0,!1)}function Hk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bk(t,e,n,r){if(e===null||typeof e>"u"||Hk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function $h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uh,$h);nt[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uh,$h);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uh,$h);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bk(e,n,i,r)&&(n=null),r||i===null?Wk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Vi=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),z_=Symbol.for("react.provider"),U_=Symbol.for("react.context"),Bh=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),Vh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),$_=Symbol.for("react.offscreen"),cg=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=cg&&t[cg]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,qc;function wo(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Kc=!1;function Yc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function Vk(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=Yc(t.type,!1),t;case 11:return t=Yc(t.type.render,!1),t;case 1:return t=Yc(t.type,!0),t;default:return""}}function Jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gi:return"Fragment";case Vi:return"Portal";case Yd:return"Profiler";case Hh:return"StrictMode";case Qd:return"Suspense";case Xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U_:return(t.displayName||"Context")+".Consumer";case z_:return(t._context.displayName||"Context")+".Provider";case Bh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vh:return e=t.displayName||null,e!==null?e:Jd(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Jd(t(e))}catch{}}return null}function Gk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qk(t){var e=W_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=qk(t))}function H_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zd(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B_(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function ef(t,e){B_(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function us(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Eo(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function V_(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,q_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kk=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(t){Kk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),To[e]=To[t]})});function K_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||To.hasOwnProperty(t)&&To[t]?(""+e).trim():e+"px"}function Y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=K_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Yk=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(t,e){if(e){if(Yk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function Gh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lf=null,cs=null,ds=null;function mg(t){if(t=Na(t)){if(typeof lf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=rc(e),lf(t.stateNode,t.type,e))}}function Q_(t){cs?ds?ds.push(t):ds=[t]:cs=t}function X_(){if(cs){var t=cs,e=ds;if(ds=cs=null,mg(t),e)for(t=0;t<e.length;t++)mg(e[t])}}function J_(t,e){return t(e)}function Z_(){}var Qc=!1;function ew(t,e,n){if(Qc)return t(e,n);Qc=!0;try{return J_(t,e,n)}finally{Qc=!1,(cs!==null||ds!==null)&&(Z_(),X_())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var r=rc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var uf=!1;if(Dn)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){uf=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{uf=!1}function Qk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var No=!1,Jl=null,Zl=!1,cf=null,Xk={onError:function(t){No=!0,Jl=t}};function Jk(t,e,n,r,i,s,o,a,l){No=!1,Jl=null,Qk.apply(Xk,arguments)}function Zk(t,e,n,r,i,s,o,a,l){if(Jk.apply(this,arguments),No){if(No){var u=Jl;No=!1,Jl=null}else throw Error(O(198));Zl||(Zl=!0,cf=u)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gg(t){if(Li(t)!==t)throw Error(O(188))}function eC(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gg(i),t;if(s===r)return gg(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function nw(t){return t=eC(t),t!==null?rw(t):null}function rw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rw(t);if(e!==null)return e;t=t.sibling}return null}var iw=Rt.unstable_scheduleCallback,vg=Rt.unstable_cancelCallback,tC=Rt.unstable_shouldYield,nC=Rt.unstable_requestPaint,De=Rt.unstable_now,rC=Rt.unstable_getCurrentPriorityLevel,qh=Rt.unstable_ImmediatePriority,sw=Rt.unstable_UserBlockingPriority,eu=Rt.unstable_NormalPriority,iC=Rt.unstable_LowPriority,ow=Rt.unstable_IdlePriority,Zu=null,yn=null;function sC(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Zu,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:lC,oC=Math.log,aC=Math.LN2;function lC(t){return t>>>=0,t===0?32:31-(oC(t)/aC|0)|0}var rl=64,il=4194304;function So(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=So(a):(s&=o,s!==0&&(r=So(s)))}else o=n&~i,o!==0?r=So(o):s!==0&&(r=So(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function uC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=uC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function aw(){var t=rl;return rl<<=1,!(rl&4194240)&&(rl=64),t}function Xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function dC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function lw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uw,Yh,cw,dw,fw,ff=!1,sl=[],yr=null,_r=null,wr=null,Ko=new Map,Yo=new Map,ur=[],fC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Na(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hC(t,e,n,r,i){switch(e){case"focusin":return yr=io(yr,t,e,n,r,i),!0;case"dragenter":return _r=io(_r,t,e,n,r,i),!0;case"mouseover":return wr=io(wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ko.set(s,io(Ko.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Yo.set(s,io(Yo.get(s)||null,t,e,n,r,i)),!0}return!1}function hw(t){var e=ni(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=tw(n),e!==null){t.blockedOn=e,fw(t.priority,function(){cw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);af=r,n.target.dispatchEvent(r),af=null}else return e=Na(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function _g(t,e,n){Al(t)&&n.delete(e)}function pC(){ff=!1,yr!==null&&Al(yr)&&(yr=null),_r!==null&&Al(_r)&&(_r=null),wr!==null&&Al(wr)&&(wr=null),Ko.forEach(_g),Yo.forEach(_g)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,ff||(ff=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,pC)))}function Qo(t){function e(i){return so(i,t)}if(0<sl.length){so(sl[0],t);for(var n=1;n<sl.length;n++){var r=sl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&so(yr,t),_r!==null&&so(_r,t),wr!==null&&so(wr,t),Ko.forEach(e),Yo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)hw(n),n.blockedOn===null&&ur.shift()}var fs=Vn.ReactCurrentBatchConfig,nu=!0;function mC(t,e,n,r){var i=le,s=fs.transition;fs.transition=null;try{le=1,Qh(t,e,n,r)}finally{le=i,fs.transition=s}}function gC(t,e,n,r){var i=le,s=fs.transition;fs.transition=null;try{le=4,Qh(t,e,n,r)}finally{le=i,fs.transition=s}}function Qh(t,e,n,r){if(nu){var i=hf(t,e,n,r);if(i===null)ad(t,e,r,ru,n),yg(t,r);else if(hC(i,t,e,n,r))r.stopPropagation();else if(yg(t,r),e&4&&-1<fC.indexOf(t)){for(;i!==null;){var s=Na(i);if(s!==null&&uw(s),s=hf(t,e,n,r),s===null&&ad(t,e,r,ru,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ad(t,e,r,null,n)}}var ru=null;function hf(t,e,n,r){if(ru=null,t=Gh(r),t=ni(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function pw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rC()){case qh:return 1;case sw:return 4;case eu:case iC:return 16;case ow:return 536870912;default:return 16}default:return 16}}var pr=null,Xh=null,Ol=null;function mw(){if(Ol)return Ol;var t,e=Xh,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ol=i.slice(t,1<r?1-r:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function wg(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:wg,this.isPropagationStopped=wg,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=Ot($s),Ta=Ie({},$s,{view:0,detail:0}),vC=Ot(Ta),Jc,Zc,oo,ec=Ie({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(Jc=t.screenX-oo.screenX,Zc=t.screenY-oo.screenY):Zc=Jc=0,oo=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),Eg=Ot(ec),yC=Ie({},ec,{dataTransfer:0}),_C=Ot(yC),wC=Ie({},Ta,{relatedTarget:0}),ed=Ot(wC),EC=Ie({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),SC=Ot(EC),kC=Ie({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CC=Ot(kC),bC=Ie({},$s,{data:0}),Sg=Ot(bC),xC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TC[t])?!!e[t]:!1}function Zh(){return NC}var PC=Ie({},Ta,{key:function(t){if(t.key){var e=xC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zh,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RC=Ot(PC),AC=Ie({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kg=Ot(AC),OC=Ie({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zh}),LC=Ot(OC),DC=Ie({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),MC=Ot(DC),jC=Ie({},ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FC=Ot(jC),zC=[9,13,27,32],ep=Dn&&"CompositionEvent"in window,Po=null;Dn&&"documentMode"in document&&(Po=document.documentMode);var UC=Dn&&"TextEvent"in window&&!Po,gw=Dn&&(!ep||Po&&8<Po&&11>=Po),Cg=" ",bg=!1;function vw(t,e){switch(t){case"keyup":return zC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function $C(t,e){switch(t){case"compositionend":return yw(e);case"keypress":return e.which!==32?null:(bg=!0,Cg);case"textInput":return t=e.data,t===Cg&&bg?null:t;default:return null}}function WC(t,e){if(qi)return t==="compositionend"||!ep&&vw(t,e)?(t=mw(),Ol=Xh=pr=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gw&&e.locale!=="ko"?null:e.data;default:return null}}var HC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HC[t.type]:e==="textarea"}function _w(t,e,n,r){Q_(r),e=iu(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ro=null,Xo=null;function BC(t){Pw(t,0)}function tc(t){var e=Qi(t);if(H_(e))return t}function VC(t,e){if(t==="change")return e}var ww=!1;if(Dn){var td;if(Dn){var nd="oninput"in document;if(!nd){var Ig=document.createElement("div");Ig.setAttribute("oninput","return;"),nd=typeof Ig.oninput=="function"}td=nd}else td=!1;ww=td&&(!document.documentMode||9<document.documentMode)}function Tg(){Ro&&(Ro.detachEvent("onpropertychange",Ew),Xo=Ro=null)}function Ew(t){if(t.propertyName==="value"&&tc(Xo)){var e=[];_w(e,Xo,t,Gh(t)),ew(BC,e)}}function GC(t,e,n){t==="focusin"?(Tg(),Ro=e,Xo=n,Ro.attachEvent("onpropertychange",Ew)):t==="focusout"&&Tg()}function qC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(Xo)}function KC(t,e){if(t==="click")return tc(e)}function YC(t,e){if(t==="input"||t==="change")return tc(e)}function QC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:QC;function Jo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kd.call(e,i)||!un(t[i],e[i]))return!1}return!0}function Ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pg(t,e){var n=Ng(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ng(n)}}function Sw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kw(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XC(t){var e=kw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sw(n.ownerDocument.documentElement,n)){if(r!==null&&tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pg(n,s);var o=Pg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JC=Dn&&"documentMode"in document&&11>=document.documentMode,Ki=null,pf=null,Ao=null,mf=!1;function Rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||Ki==null||Ki!==Xl(r)||(r=Ki,"selectionStart"in r&&tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&Jo(Ao,r)||(Ao=r,r=iu(pf,"onSelect"),0<r.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ki)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yi={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},rd={},Cw={};Dn&&(Cw=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function nc(t){if(rd[t])return rd[t];if(!Yi[t])return t;var e=Yi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cw)return rd[t]=e[n];return t}var bw=nc("animationend"),xw=nc("animationiteration"),Iw=nc("animationstart"),Tw=nc("transitionend"),Nw=new Map,Ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Nw.set(t,e),Oi(e,[t])}for(var id=0;id<Ag.length;id++){var sd=Ag[id],ZC=sd.toLowerCase(),eb=sd[0].toUpperCase()+sd.slice(1);jr(ZC,"on"+eb)}jr(bw,"onAnimationEnd");jr(xw,"onAnimationIteration");jr(Iw,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Tw,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Og(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Zk(r,e,void 0,t),t.currentTarget=null}function Pw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Og(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Og(i,a,u),s=l}}}if(Zl)throw t=cf,Zl=!1,cf=null,t}function _e(t,e){var n=e[wf];n===void 0&&(n=e[wf]=new Set);var r=t+"__bubble";n.has(r)||(Rw(e,t,2,!1),n.add(r))}function od(t,e,n){var r=0;e&&(r|=4),Rw(n,t,r,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[ll]){t[ll]=!0,F_.forEach(function(n){n!=="selectionchange"&&(tb.has(n)||od(n,!1,t),od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,od("selectionchange",!1,e))}}function Rw(t,e,n,r){switch(pw(e)){case 1:var i=mC;break;case 4:i=gC;break;default:i=Qh}n=i.bind(null,e,n,t),i=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ad(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ni(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ew(function(){var u=s,c=Gh(n),d=[];e:{var f=Nw.get(t);if(f!==void 0){var y=Jh,g=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":y=RC;break;case"focusin":g="focus",y=ed;break;case"focusout":g="blur",y=ed;break;case"beforeblur":case"afterblur":y=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_C;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=LC;break;case bw:case xw:case Iw:y=SC;break;case Tw:y=MC;break;case"scroll":y=vC;break;case"wheel":y=FC;break;case"copy":case"cut":case"paste":y=CC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=kg}var w=(e&4)!==0,S=!w&&t==="scroll",v=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,m;h!==null;){m=h;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,v!==null&&(E=qo(h,v),E!=null&&w.push(ea(h,E,m)))),S)break;h=h.return}0<w.length&&(f=new y(f,g,null,n,c),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==af&&(g=n.relatedTarget||n.fromElement)&&(ni(g)||g[Mn]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?ni(g):null,g!==null&&(S=Li(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(w=Eg,E="onMouseLeave",v="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=kg,E="onPointerLeave",v="onPointerEnter",h="pointer"),S=y==null?f:Qi(y),m=g==null?f:Qi(g),f=new w(E,h+"leave",y,n,c),f.target=S,f.relatedTarget=m,E=null,ni(c)===u&&(w=new w(v,h+"enter",g,n,c),w.target=m,w.relatedTarget=S,E=w),S=E,y&&g)t:{for(w=y,v=g,h=0,m=w;m;m=Wi(m))h++;for(m=0,E=v;E;E=Wi(E))m++;for(;0<h-m;)w=Wi(w),h--;for(;0<m-h;)v=Wi(v),m--;for(;h--;){if(w===v||v!==null&&w===v.alternate)break t;w=Wi(w),v=Wi(v)}w=null}else w=null;y!==null&&Lg(d,f,y,w,!1),g!==null&&S!==null&&Lg(d,S,g,w,!0)}}e:{if(f=u?Qi(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=VC;else if(xg(f))if(ww)C=YC;else{C=qC;var _=GC}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=KC);if(C&&(C=C(t,u))){_w(d,C,n,c);break e}_&&_(t,f,u),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&tf(f,"number",f.value)}switch(_=u?Qi(u):window,t){case"focusin":(xg(_)||_.contentEditable==="true")&&(Ki=_,pf=u,Ao=null);break;case"focusout":Ao=pf=Ki=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,Rg(d,n,c);break;case"selectionchange":if(JC)break;case"keydown":case"keyup":Rg(d,n,c)}var b;if(ep)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else qi?vw(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(gw&&n.locale!=="ko"&&(qi||I!=="onCompositionStart"?I==="onCompositionEnd"&&qi&&(b=mw()):(pr=c,Xh="value"in pr?pr.value:pr.textContent,qi=!0)),_=iu(u,I),0<_.length&&(I=new Sg(I,t,null,n,c),d.push({event:I,listeners:_}),b?I.data=b:(b=yw(n),b!==null&&(I.data=b)))),(b=UC?$C(t,n):WC(t,n))&&(u=iu(u,"onBeforeInput"),0<u.length&&(c=new Sg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}Pw(d,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qo(t,n),s!=null&&r.unshift(ea(t,s,i)),s=qo(t,e),s!=null&&r.push(ea(t,s,i))),t=t.return}return r}function Wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=qo(n,s),l!=null&&o.unshift(ea(n,l,a))):i||(l=qo(n,s),l!=null&&o.push(ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nb=/\r\n?/g,rb=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(nb,`
`).replace(rb,"")}function ul(t,e,n){if(e=Dg(e),Dg(t)!==e&&n)throw Error(O(425))}function su(){}var gf=null,vf=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,ib=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,sb=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(t){return Mg.resolve(null).then(t).catch(ob)}:_f;function ob(t){setTimeout(function(){throw t})}function ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qo(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),mn="__reactFiber$"+Ws,ta="__reactProps$"+Ws,Mn="__reactContainer$"+Ws,wf="__reactEvents$"+Ws,ab="__reactListeners$"+Ws,lb="__reactHandles$"+Ws;function ni(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jg(t);t!==null;){if(n=t[mn])return n;t=jg(t)}return e}t=n,n=t.parentNode}return null}function Na(t){return t=t[mn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function rc(t){return t[ta]||null}var Ef=[],Xi=-1;function Fr(t){return{current:t}}function Ee(t){0>Xi||(t.current=Ef[Xi],Ef[Xi]=null,Xi--)}function ve(t,e){Xi++,Ef[Xi]=t.current,t.current=e}var Rr={},at=Fr(Rr),St=Fr(!1),mi=Rr;function ks(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function ou(){Ee(St),Ee(at)}function Fg(t,e,n){if(at.current!==Rr)throw Error(O(168));ve(at,e),ve(St,n)}function Aw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,Gk(t)||"Unknown",i));return Ie({},n,r)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,mi=at.current,ve(at,t),ve(St,St.current),!0}function zg(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=Aw(t,e,mi),r.__reactInternalMemoizedMergedChildContext=t,Ee(St),Ee(at),ve(at,t)):Ee(St),ve(St,n)}var bn=null,ic=!1,ud=!1;function Ow(t){bn===null?bn=[t]:bn.push(t)}function ub(t){ic=!0,Ow(t)}function zr(){if(!ud&&bn!==null){ud=!0;var t=0,e=le;try{var n=bn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,ic=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),iw(qh,zr),i}finally{le=e,ud=!1}}return null}var Ji=[],Zi=0,lu=null,uu=0,Ft=[],zt=0,gi=null,In=1,Tn="";function Qr(t,e){Ji[Zi++]=uu,Ji[Zi++]=lu,lu=t,uu=e}function Lw(t,e,n){Ft[zt++]=In,Ft[zt++]=Tn,Ft[zt++]=gi,gi=t;var r=In;t=Tn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-on(e)+i|n<<i|r,Tn=s+t}else In=1<<s|n<<i|r,Tn=t}function np(t){t.return!==null&&(Qr(t,1),Lw(t,1,0))}function rp(t){for(;t===lu;)lu=Ji[--Zi],Ji[Zi]=null,uu=Ji[--Zi],Ji[Zi]=null;for(;t===gi;)gi=Ft[--zt],Ft[zt]=null,Tn=Ft[--zt],Ft[zt]=null,In=Ft[--zt],Ft[zt]=null}var Nt=null,It=null,Ce=!1,Jt=null;function Dw(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,It=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gi!==null?{id:In,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,It=null,!0):!1;default:return!1}}function Sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kf(t){if(Ce){var e=It;if(e){var n=e;if(!Ug(t,e)){if(Sf(t))throw Error(O(418));e=Er(n.nextSibling);var r=Nt;e&&Ug(t,e)?Dw(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Nt=t)}}else{if(Sf(t))throw Error(O(418));t.flags=t.flags&-4097|2,Ce=!1,Nt=t}}}function $g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function cl(t){if(t!==Nt)return!1;if(!Ce)return $g(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=It)){if(Sf(t))throw Mw(),Error(O(418));for(;e;)Dw(t,e),e=Er(e.nextSibling)}if($g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=Nt?Er(t.stateNode.nextSibling):null;return!0}function Mw(){for(var t=It;t;)t=Er(t.nextSibling)}function Cs(){It=Nt=null,Ce=!1}function ip(t){Jt===null?Jt=[t]:Jt.push(t)}var cb=Vn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var cu=Fr(null),du=null,es=null,sp=null;function op(){sp=es=du=null}function ap(t){var e=cu.current;Ee(cu),t._currentValue=e}function Cf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){du=t,sp=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(sp!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(du===null)throw Error(O(308));es=t,du.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ri=null;function lp(t){ri===null?ri=[t]:ri.push(t)}function jw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lp(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,lp(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}function Wg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,w=a;switch(f=e,y=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){d=g.call(y,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,f=typeof g=="function"?g.call(y,d,f):g,f==null)break e;d=Ie({},d,f);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yi|=o,t.lanes=o,t.memoizedState=d}}function Hg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var zw=new j_.Component().refs;function bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sc={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=Cr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(an(e,t,i,r),Dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=Cr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(an(e,t,i,r),Dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=Cr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sr(t,i,r),e!==null&&(an(e,t,r,n),Dl(e,t,r))}};function Bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,r)||!Jo(i,s):!0}function Uw(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=kt(e)?mi:at.current,r=e.contextTypes,s=(r=r!=null)?ks(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function xf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=zw,up(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=kt(e)?mi:at.current,i.context=ks(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&sc.enqueueReplaceState(i,i.state,null),fu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===zw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function dl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gg(t){var e=t._init;return e(t._payload)}function $w(t){function e(v,h){if(t){var m=v.deletions;m===null?(v.deletions=[h],v.flags|=16):m.push(h)}}function n(v,h){if(!t)return null;for(;h!==null;)e(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=br(v,h),v.index=0,v.sibling=null,v}function s(v,h,m){return v.index=m,t?(m=v.alternate,m!==null?(m=m.index,m<h?(v.flags|=2,h):m):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,h,m,E){return h===null||h.tag!==6?(h=gd(m,v.mode,E),h.return=v,h):(h=i(h,m),h.return=v,h)}function l(v,h,m,E){var C=m.type;return C===Gi?c(v,h,m.props.children,E,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&Gg(C)===h.type)?(E=i(h,m.props),E.ref=ao(v,h,m),E.return=v,E):(E=$l(m.type,m.key,m.props,null,v.mode,E),E.ref=ao(v,h,m),E.return=v,E)}function u(v,h,m,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=vd(m,v.mode,E),h.return=v,h):(h=i(h,m.children||[]),h.return=v,h)}function c(v,h,m,E,C){return h===null||h.tag!==7?(h=fi(m,v.mode,E,C),h.return=v,h):(h=i(h,m),h.return=v,h)}function d(v,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=gd(""+h,v.mode,m),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case el:return m=$l(h.type,h.key,h.props,null,v.mode,m),m.ref=ao(v,null,h),m.return=v,m;case Vi:return h=vd(h,v.mode,m),h.return=v,h;case or:var E=h._init;return d(v,E(h._payload),m)}if(Eo(h)||no(h))return h=fi(h,v.mode,m,null),h.return=v,h;dl(v,h)}return null}function f(v,h,m,E){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(v,h,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case el:return m.key===C?l(v,h,m,E):null;case Vi:return m.key===C?u(v,h,m,E):null;case or:return C=m._init,f(v,h,C(m._payload),E)}if(Eo(m)||no(m))return C!==null?null:c(v,h,m,E,null);dl(v,m)}return null}function y(v,h,m,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(m)||null,a(h,v,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case el:return v=v.get(E.key===null?m:E.key)||null,l(h,v,E,C);case Vi:return v=v.get(E.key===null?m:E.key)||null,u(h,v,E,C);case or:var _=E._init;return y(v,h,m,_(E._payload),C)}if(Eo(E)||no(E))return v=v.get(m)||null,c(h,v,E,C,null);dl(h,E)}return null}function g(v,h,m,E){for(var C=null,_=null,b=h,I=h=0,T=null;b!==null&&I<m.length;I++){b.index>I?(T=b,b=null):T=b.sibling;var A=f(v,b,m[I],E);if(A===null){b===null&&(b=T);break}t&&b&&A.alternate===null&&e(v,b),h=s(A,h,I),_===null?C=A:_.sibling=A,_=A,b=T}if(I===m.length)return n(v,b),Ce&&Qr(v,I),C;if(b===null){for(;I<m.length;I++)b=d(v,m[I],E),b!==null&&(h=s(b,h,I),_===null?C=b:_.sibling=b,_=b);return Ce&&Qr(v,I),C}for(b=r(v,b);I<m.length;I++)T=y(b,v,I,m[I],E),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?I:T.key),h=s(T,h,I),_===null?C=T:_.sibling=T,_=T);return t&&b.forEach(function(j){return e(v,j)}),Ce&&Qr(v,I),C}function w(v,h,m,E){var C=no(m);if(typeof C!="function")throw Error(O(150));if(m=C.call(m),m==null)throw Error(O(151));for(var _=C=null,b=h,I=h=0,T=null,A=m.next();b!==null&&!A.done;I++,A=m.next()){b.index>I?(T=b,b=null):T=b.sibling;var j=f(v,b,A.value,E);if(j===null){b===null&&(b=T);break}t&&b&&j.alternate===null&&e(v,b),h=s(j,h,I),_===null?C=j:_.sibling=j,_=j,b=T}if(A.done)return n(v,b),Ce&&Qr(v,I),C;if(b===null){for(;!A.done;I++,A=m.next())A=d(v,A.value,E),A!==null&&(h=s(A,h,I),_===null?C=A:_.sibling=A,_=A);return Ce&&Qr(v,I),C}for(b=r(v,b);!A.done;I++,A=m.next())A=y(b,v,I,A.value,E),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?I:A.key),h=s(A,h,I),_===null?C=A:_.sibling=A,_=A);return t&&b.forEach(function(ie){return e(v,ie)}),Ce&&Qr(v,I),C}function S(v,h,m,E){if(typeof m=="object"&&m!==null&&m.type===Gi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case el:e:{for(var C=m.key,_=h;_!==null;){if(_.key===C){if(C=m.type,C===Gi){if(_.tag===7){n(v,_.sibling),h=i(_,m.props.children),h.return=v,v=h;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&Gg(C)===_.type){n(v,_.sibling),h=i(_,m.props),h.ref=ao(v,_,m),h.return=v,v=h;break e}n(v,_);break}else e(v,_);_=_.sibling}m.type===Gi?(h=fi(m.props.children,v.mode,E,m.key),h.return=v,v=h):(E=$l(m.type,m.key,m.props,null,v.mode,E),E.ref=ao(v,h,m),E.return=v,v=E)}return o(v);case Vi:e:{for(_=m.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(v,h.sibling),h=i(h,m.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else e(v,h);h=h.sibling}h=vd(m,v.mode,E),h.return=v,v=h}return o(v);case or:return _=m._init,S(v,h,_(m._payload),E)}if(Eo(m))return g(v,h,m,E);if(no(m))return w(v,h,m,E);dl(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,m),h.return=v,v=h):(n(v,h),h=gd(m,v.mode,E),h.return=v,v=h),o(v)):n(v,h)}return S}var bs=$w(!0),Ww=$w(!1),Pa={},_n=Fr(Pa),na=Fr(Pa),ra=Fr(Pa);function ii(t){if(t===Pa)throw Error(O(174));return t}function cp(t,e){switch(ve(ra,e),ve(na,t),ve(_n,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}Ee(_n),ve(_n,e)}function xs(){Ee(_n),Ee(na),Ee(ra)}function Hw(t){ii(ra.current);var e=ii(_n.current),n=rf(e,t.type);e!==n&&(ve(na,t),ve(_n,n))}function dp(t){na.current===t&&(Ee(_n),Ee(na))}var be=Fr(0);function hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cd=[];function fp(){for(var t=0;t<cd.length;t++)cd[t]._workInProgressVersionPrimary=null;cd.length=0}var Ml=Vn.ReactCurrentDispatcher,dd=Vn.ReactCurrentBatchConfig,vi=0,xe=null,Fe=null,Ve=null,pu=!1,Oo=!1,ia=0,db=0;function it(){throw Error(O(321))}function hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function pp(t,e,n,r,i,s){if(vi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?mb:gb,t=n(r,i),Oo){s=0;do{if(Oo=!1,ia=0,25<=s)throw Error(O(301));s+=1,Ve=Fe=null,e.updateQueue=null,Ml.current=vb,t=n(r,i)}while(Oo)}if(Ml.current=mu,e=Fe!==null&&Fe.next!==null,vi=0,Ve=Fe=xe=null,pu=!1,e)throw Error(O(300));return t}function mp(){var t=ia!==0;return ia=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?xe.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Vt(){if(Fe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=Ve===null?xe.memoizedState:Ve.next;if(e!==null)Ve=e,Fe=t;else{if(t===null)throw Error(O(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ve===null?xe.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function sa(t,e){return typeof e=="function"?e(t):e}function fd(t){var e=Vt(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,xe.lanes|=c,yi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=Vt(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Bw(){}function Vw(t,e){var n=xe,r=Vt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,gp(Kw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,oa(9,qw.bind(null,n,r,i,e),void 0,null),Ye===null)throw Error(O(349));vi&30||Gw(n,e,i)}return i}function Gw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qw(t,e,n,r){e.value=n,e.getSnapshot=r,Yw(e)&&Qw(t)}function Kw(t,e,n){return n(function(){Yw(e)&&Qw(t)})}function Yw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function Qw(t){var e=jn(t,1);e!==null&&an(e,t,1,-1)}function qg(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e.queue=t,t=t.dispatch=pb.bind(null,xe,t),[e.memoizedState,t]}function oa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xw(){return Vt().memoizedState}function jl(t,e,n,r){var i=pn();xe.flags|=t,i.memoizedState=oa(1|e,n,void 0,r===void 0?null:r)}function oc(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&hp(r,o.deps)){i.memoizedState=oa(e,n,s,r);return}}xe.flags|=t,i.memoizedState=oa(1|e,n,s,r)}function Kg(t,e){return jl(8390656,8,t,e)}function gp(t,e){return oc(2048,8,t,e)}function Jw(t,e){return oc(4,2,t,e)}function Zw(t,e){return oc(4,4,t,e)}function e0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t0(t,e,n){return n=n!=null?n.concat([t]):null,oc(4,4,e0.bind(null,e,t),n)}function vp(){}function n0(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r0(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i0(t,e,n){return vi&21?(un(n,e)||(n=aw(),xe.lanes|=n,yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function fb(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=dd.transition;dd.transition={};try{t(!1),e()}finally{le=n,dd.transition=r}}function s0(){return Vt().memoizedState}function hb(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o0(t))a0(e,n);else if(n=jw(t,e,n,r),n!==null){var i=dt();an(n,t,r,i),l0(n,e,r)}}function pb(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o0(t))a0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,lp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=jw(t,e,i,r),n!==null&&(i=dt(),an(n,t,r,i),l0(n,e,r))}}function o0(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function a0(t,e){Oo=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}var mu={readContext:Bt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},mb={readContext:Bt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jl(4194308,4,e0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return jl(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hb.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:qg,useDebugValue:vp,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=qg(!1),e=t[0];return t=fb.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=pn();if(Ce){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),Ye===null)throw Error(O(349));vi&30||Gw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kg(Kw.bind(null,r,s,t),[t]),r.flags|=2048,oa(9,qw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=Ye.identifierPrefix;if(Ce){var n=Tn,r=In;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=db++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gb={readContext:Bt,useCallback:n0,useContext:Bt,useEffect:gp,useImperativeHandle:t0,useInsertionEffect:Jw,useLayoutEffect:Zw,useMemo:r0,useReducer:fd,useRef:Xw,useState:function(){return fd(sa)},useDebugValue:vp,useDeferredValue:function(t){var e=Vt();return i0(e,Fe.memoizedState,t)},useTransition:function(){var t=fd(sa)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Bw,useSyncExternalStore:Vw,useId:s0,unstable_isNewReconciler:!1},vb={readContext:Bt,useCallback:n0,useContext:Bt,useEffect:gp,useImperativeHandle:t0,useInsertionEffect:Jw,useLayoutEffect:Zw,useMemo:r0,useReducer:hd,useRef:Xw,useState:function(){return hd(sa)},useDebugValue:vp,useDeferredValue:function(t){var e=Vt();return Fe===null?e.memoizedState=t:i0(e,Fe.memoizedState,t)},useTransition:function(){var t=hd(sa)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Bw,useSyncExternalStore:Vw,useId:s0,unstable_isNewReconciler:!1};function Is(t,e){try{var n="",r=e;do n+=Vk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function If(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yb=typeof WeakMap=="function"?WeakMap:Map;function u0(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vu||(vu=!0,jf=r),If(t,e)},n}function c0(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){If(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){If(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ab.bind(null,t,e,n),e.then(t,t))}function Qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var _b=Vn.ReactCurrentOwner,_t=!1;function ct(t,e,n,r){e.child=t===null?Ww(e,null,n,r):bs(e,t.child,n,r)}function Jg(t,e,n,r,i){n=n.render;var s=e.ref;return hs(e,i),r=pp(t,e,n,r,s,i),n=mp(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ce&&n&&np(e),e.flags|=1,ct(t,e,r,i),e.child)}function Zg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d0(t,e,s,r,i)):(t=$l(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function d0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Jo(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return Tf(t,e,n,r,i)}function f0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ns,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(ns,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(ns,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(ns,xt),xt|=r;return ct(t,e,i,n),e.child}function h0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tf(t,e,n,r,i){var s=kt(n)?mi:at.current;return s=ks(e,s),hs(e,i),n=pp(t,e,n,r,s,i),r=mp(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ce&&r&&np(e),e.flags|=1,ct(t,e,n,i),e.child)}function ev(t,e,n,r,i){if(kt(n)){var s=!0;au(e)}else s=!1;if(hs(e,i),e.stateNode===null)Fl(t,e),Uw(e,n,r),xf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=kt(n)?mi:at.current,u=ks(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vg(e,o,r,u),ar=!1;var f=e.memoizedState;o.state=f,fu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||St.current||ar?(typeof c=="function"&&(bf(e,n,c,r),l=e.memoizedState),(a=ar||Bg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=kt(n)?mi:at.current,l=ks(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Vg(e,o,r,l),ar=!1,f=e.memoizedState,o.state=f,fu(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||St.current||ar?(typeof y=="function"&&(bf(e,n,y,r),g=e.memoizedState),(u=ar||Bg(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Nf(t,e,n,r,s,i)}function Nf(t,e,n,r,i,s){h0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zg(e,n,!1),Fn(t,e,s);r=e.stateNode,_b.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):ct(t,e,a,s),e.memoizedState=r.state,i&&zg(e,n,!0),e.child}function p0(t){var e=t.stateNode;e.pendingContext?Fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fg(t,e.context,!1),cp(t,e.containerInfo)}function tv(t,e,n,r,i){return Cs(),ip(i),e.flags|=256,ct(t,e,n,r),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function Rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function m0(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(be,i&1),t===null)return kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uc(o,r,0,null),t=fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rf(n),e.memoizedState=Pf,t):yp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=br(a,s):(s=fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pf,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yp(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fl(t,e,n,r){return r!==null&&ip(r),bs(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pd(Error(O(422))),fl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=uc({mode:"visible",children:r.children},i,0,null),s=fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=Rf(o),e.memoizedState=Pf,s);if(!(e.mode&1))return fl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=pd(s,r,void 0),fl(t,e,o,r)}if(a=(o&t.childLanes)!==0,_t||a){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),an(r,t,i,-1))}return Cp(),r=pd(Error(O(421))),fl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ob.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=Er(i.nextSibling),Nt=e,Ce=!0,Jt=null,t!==null&&(Ft[zt++]=In,Ft[zt++]=Tn,Ft[zt++]=gi,In=t.id,Tn=t.overflow,gi=e),e=yp(e,r.children),e.flags|=4096,e)}function nv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cf(t.return,e,n)}function md(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function g0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nv(t,n,e);else if(t.tag===19)nv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),md(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}md(e,!0,n,null,s);break;case"together":md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Eb(t,e,n){switch(e.tag){case 3:p0(e),Cs();break;case 5:Hw(e);break;case 1:kt(e.type)&&au(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(cu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?m0(t,e,n):(ve(be,be.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);ve(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return g0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,f0(t,e,n)}return Fn(t,e,n)}var v0,Af,y0,_0;v0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};y0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ii(_n.current);var s=null;switch(n){case"input":i=Zd(t,i),r=Zd(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=nf(t,i),r=nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=su)}sf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_0=function(t,e,n,r){n!==r&&(e.flags|=4)};function lo(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Sb(t,e,n){var r=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return kt(e.type)&&ou(),st(e),null;case 3:return r=e.stateNode,xs(),Ee(St),Ee(at),fp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(Uf(Jt),Jt=null))),Af(t,e),st(e),null;case 5:dp(e);var i=ii(ra.current);if(n=e.type,t!==null&&e.stateNode!=null)y0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return st(e),null}if(t=ii(_n.current),cl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[ta]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<ko.length;i++)_e(ko[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":dg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":hg(r,s),_e("invalid",r)}sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ul(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ul(r.textContent,a,t),i=["children",""+a]):Vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":tl(r),fg(r,s,!0);break;case"textarea":tl(r),pg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=su)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[ta]=r,v0(t,e,!1,!1),e.stateNode=t;e:{switch(o=of(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<ko.length;i++)_e(ko[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":dg(t,r),i=Zd(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),_e("invalid",t);break;case"textarea":hg(t,r),i=nf(t,r),_e("invalid",t);break;default:i=r}sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Y_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&q_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Go(t,l):typeof l=="number"&&Go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Wh(t,s,l,o))}switch(n){case"input":tl(t),fg(t,r,!1);break;case"textarea":tl(t),pg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?us(t,!!r.multiple,s,!1):r.defaultValue!=null&&us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)_0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=ii(ra.current),ii(_n.current),cl(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return st(e),null;case 13:if(Ee(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&It!==null&&e.mode&1&&!(e.flags&128))Mw(),Cs(),e.flags|=98560,s=!1;else if(s=cl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[mn]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Jt!==null&&(Uf(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?ze===0&&(ze=3):Cp())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return xs(),Af(t,e),t===null&&Zo(e.stateNode.containerInfo),st(e),null;case 10:return ap(e.type._context),st(e),null;case 17:return kt(e.type)&&ou(),st(e),null;case 19:if(Ee(be),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)lo(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hu(t),o!==null){for(e.flags|=128,lo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Ts&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304)}else{if(!r)if(t=hu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return st(e),null}else 2*De()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=be.current,ve(be,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return kp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function kb(t,e){switch(rp(e),e.tag){case 1:return kt(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),Ee(St),Ee(at),fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(Ee(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(be),null;case 4:return xs(),null;case 10:return ap(e.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var hl=!1,ot=!1,Cb=typeof WeakSet=="function"?WeakSet:Set,z=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Of(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var rv=!1;function bb(t,e){if(gf=nu,t=kw(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vf={focusedElem:t,selectionRange:n},nu=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,S=g.memoizedState,v=e.stateNode,h=v.getSnapshotBeforeUpdate(e.elementType===e.type?w:Yt(e.type,w),S);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(E){Ne(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return g=rv,rv=!1,g}function Lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Of(e,n,s)}i=i.next}while(i!==r)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[ta],delete e[wf],delete e[ab],delete e[lb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E0(t){return t.tag===5||t.tag===3||t.tag===4}function iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(r!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}function Mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}var Je=null,Qt=!1;function nr(t,e,n){for(n=n.child;n!==null;)S0(t,e,n),n=n.sibling}function S0(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Zu,n)}catch{}switch(n.tag){case 5:ot||ts(n,e);case 6:var r=Je,i=Qt;Je=null,nr(t,e,n),Je=r,Qt=i,Je!==null&&(Qt?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Qt?(t=Je,n=n.stateNode,t.nodeType===8?ld(t.parentNode,n):t.nodeType===1&&ld(t,n),Qo(t)):ld(Je,n.stateNode));break;case 4:r=Je,i=Qt,Je=n.stateNode.containerInfo,Qt=!0,nr(t,e,n),Je=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Of(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!ot&&(ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,nr(t,e,n),ot=r):nr(t,e,n);break;default:nr(t,e,n)}}function sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Cb),e.forEach(function(r){var i=Lb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,Qt=!1;break e;case 3:Je=a.stateNode.containerInfo,Qt=!0;break e;case 4:Je=a.stateNode.containerInfo,Qt=!0;break e}a=a.return}if(Je===null)throw Error(O(160));S0(s,o,i),Je=null,Qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k0(e,t),e=e.sibling}function k0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),hn(t),r&4){try{Lo(3,t,t.return),ac(3,t)}catch(w){Ne(t,t.return,w)}try{Lo(5,t,t.return)}catch(w){Ne(t,t.return,w)}}break;case 1:Kt(e,t),hn(t),r&512&&n!==null&&ts(n,n.return);break;case 5:if(Kt(e,t),hn(t),r&512&&n!==null&&ts(n,n.return),t.flags&32){var i=t.stateNode;try{Go(i,"")}catch(w){Ne(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&B_(i,s),of(a,o);var u=of(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Y_(i,d):c==="dangerouslySetInnerHTML"?q_(i,d):c==="children"?Go(i,d):Wh(i,c,d,u)}switch(a){case"input":ef(i,s);break;case"textarea":V_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?us(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?us(i,!!s.multiple,s.defaultValue,!0):us(i,!!s.multiple,s.multiple?[]:"",!1))}i[ta]=s}catch(w){Ne(t,t.return,w)}}break;case 6:if(Kt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ne(t,t.return,w)}}break;case 3:if(Kt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(w){Ne(t,t.return,w)}break;case 4:Kt(e,t),hn(t);break;case 13:Kt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ep=De())),r&4&&sv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(u=ot)||c,Kt(e,t),ot=u):Kt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(z=t,c=t.child;c!==null;){for(d=z=c;z!==null;){switch(f=z,y=f.child,f.tag){case 0:case 11:case 14:case 15:Lo(4,f,f.return);break;case 1:ts(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(w){Ne(r,n,w)}}break;case 5:ts(f,f.return);break;case 22:if(f.memoizedState!==null){av(d);continue}}y!==null?(y.return=f,z=y):av(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=K_("display",o))}catch(w){Ne(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Ne(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(e,t),hn(t),r&4&&sv(t);break;case 21:break;default:Kt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E0(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Go(i,""),r.flags&=-33);var s=iv(t);Mf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=iv(t);Df(t,a,o);break;default:throw Error(O(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xb(t,e,n){z=t,C0(t)}function C0(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ot;a=hl;var u=ot;if(hl=o,(ot=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?lv(i):l!==null?(l.return=o,z=l):lv(i);for(;s!==null;)z=s,C0(s),s=s.sibling;z=i,hl=a,ot=u}ov(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):ov(t)}}function ov(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||ac(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Qo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}ot||e.flags&512&&Lf(e)}catch(f){Ne(e,e.return,f)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function av(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function lv(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ac(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{Lf(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{Lf(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var Ib=Math.ceil,gu=Vn.ReactCurrentDispatcher,_p=Vn.ReactCurrentOwner,Ht=Vn.ReactCurrentBatchConfig,oe=0,Ye=null,je=null,tt=0,xt=0,ns=Fr(0),ze=0,aa=null,yi=0,lc=0,wp=0,Do=null,vt=null,Ep=0,Ts=1/0,Cn=null,vu=!1,jf=null,kr=null,pl=!1,mr=null,yu=0,Mo=0,Ff=null,zl=-1,Ul=0;function dt(){return oe&6?De():zl!==-1?zl:zl=De()}function Cr(t){return t.mode&1?oe&2&&tt!==0?tt&-tt:cb.transition!==null?(Ul===0&&(Ul=aw()),Ul):(t=le,t!==0||(t=window.event,t=t===void 0?16:pw(t.type)),t):1}function an(t,e,n,r){if(50<Mo)throw Mo=0,Ff=null,Error(O(185));Ia(t,n,r),(!(oe&2)||t!==Ye)&&(t===Ye&&(!(oe&2)&&(lc|=n),ze===4&&cr(t,tt)),Ct(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ts=De()+500,ic&&zr()))}function Ct(t,e){var n=t.callbackNode;cC(t,e);var r=tu(t,t===Ye?tt:0);if(r===0)n!==null&&vg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vg(n),e===1)t.tag===0?ub(uv.bind(null,t)):Ow(uv.bind(null,t)),sb(function(){!(oe&6)&&zr()}),n=null;else{switch(lw(r)){case 1:n=qh;break;case 4:n=sw;break;case 16:n=eu;break;case 536870912:n=ow;break;default:n=eu}n=A0(n,b0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b0(t,e){if(zl=-1,Ul=0,oe&6)throw Error(O(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var r=tu(t,t===Ye?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_u(t,r);else{e=r;var i=oe;oe|=2;var s=I0();(Ye!==t||tt!==e)&&(Cn=null,Ts=De()+500,di(t,e));do try{Pb();break}catch(a){x0(t,a)}while(!0);op(),gu.current=s,oe=i,je!==null?e=0:(Ye=null,tt=0,e=ze)}if(e!==0){if(e===2&&(i=df(t),i!==0&&(r=i,e=zf(t,i))),e===1)throw n=aa,di(t,0),cr(t,r),Ct(t,De()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Tb(i)&&(e=_u(t,r),e===2&&(s=df(t),s!==0&&(r=s,e=zf(t,s))),e===1))throw n=aa,di(t,0),cr(t,r),Ct(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:Xr(t,vt,Cn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=Ep+500-De(),10<e)){if(tu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_f(Xr.bind(null,t,vt,Cn),e);break}Xr(t,vt,Cn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ib(r/1960))-r,10<r){t.timeoutHandle=_f(Xr.bind(null,t,vt,Cn),r);break}Xr(t,vt,Cn);break;case 5:Xr(t,vt,Cn);break;default:throw Error(O(329))}}}return Ct(t,De()),t.callbackNode===n?b0.bind(null,t):null}function zf(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=_u(t,e),t!==2&&(e=vt,vt=n,e!==null&&Uf(e)),t}function Uf(t){vt===null?vt=t:vt.push.apply(vt,t)}function Tb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~wp,e&=~lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function uv(t){if(oe&6)throw Error(O(327));ps();var e=tu(t,0);if(!(e&1))return Ct(t,De()),null;var n=_u(t,e);if(t.tag!==0&&n===2){var r=df(t);r!==0&&(e=r,n=zf(t,r))}if(n===1)throw n=aa,di(t,0),cr(t,e),Ct(t,De()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,vt,Cn),Ct(t,De()),null}function Sp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ts=De()+500,ic&&zr())}}function _i(t){mr!==null&&mr.tag===0&&!(oe&6)&&ps();var e=oe;oe|=1;var n=Ht.transition,r=le;try{if(Ht.transition=null,le=1,t)return t()}finally{le=r,Ht.transition=n,oe=e,!(oe&6)&&zr()}}function kp(){xt=ns.current,Ee(ns)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ib(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ou();break;case 3:xs(),Ee(St),Ee(at),fp();break;case 5:dp(r);break;case 4:xs();break;case 13:Ee(be);break;case 19:Ee(be);break;case 10:ap(r.type._context);break;case 22:case 23:kp()}n=n.return}if(Ye=t,je=t=br(t.current,null),tt=xt=e,ze=0,aa=null,wp=lc=yi=0,vt=Do=null,ri!==null){for(e=0;e<ri.length;e++)if(n=ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ri=null}return t}function x0(t,e){do{var n=je;try{if(op(),Ml.current=mu,pu){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pu=!1}if(vi=0,Ve=Fe=xe=null,Oo=!1,ia=0,_p.current=null,n===null||n.return===null){ze=1,aa=e,je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Qg(o);if(y!==null){y.flags&=-257,Xg(y,o,a,s,e),y.mode&1&&Yg(s,u,e),e=y,l=u;var g=e.updateQueue;if(g===null){var w=new Set;w.add(l),e.updateQueue=w}else g.add(l);break e}else{if(!(e&1)){Yg(s,u,e),Cp();break e}l=Error(O(426))}}else if(Ce&&a.mode&1){var S=Qg(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Xg(S,o,a,s,e),ip(Is(l,a));break e}}s=l=Is(l,a),ze!==4&&(ze=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=u0(s,l,e);Wg(s,v);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kr===null||!kr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=c0(s,a,e);Wg(s,E);break e}}s=s.return}while(s!==null)}N0(n)}catch(C){e=C,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function I0(){var t=gu.current;return gu.current=mu,t===null?mu:t}function Cp(){(ze===0||ze===3||ze===2)&&(ze=4),Ye===null||!(yi&268435455)&&!(lc&268435455)||cr(Ye,tt)}function _u(t,e){var n=oe;oe|=2;var r=I0();(Ye!==t||tt!==e)&&(Cn=null,di(t,e));do try{Nb();break}catch(i){x0(t,i)}while(!0);if(op(),oe=n,gu.current=r,je!==null)throw Error(O(261));return Ye=null,tt=0,ze}function Nb(){for(;je!==null;)T0(je)}function Pb(){for(;je!==null&&!tC();)T0(je)}function T0(t){var e=R0(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?N0(t):je=e,_p.current=null}function N0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kb(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,je=null;return}}else if(n=Sb(n,e,xt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);ze===0&&(ze=5)}function Xr(t,e,n){var r=le,i=Ht.transition;try{Ht.transition=null,le=1,Rb(t,e,n,r)}finally{Ht.transition=i,le=r}return null}function Rb(t,e,n,r){do ps();while(mr!==null);if(oe&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dC(t,s),t===Ye&&(je=Ye=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,A0(eu,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=le;le=1;var a=oe;oe|=4,_p.current=null,bb(t,n),k0(n,t),XC(vf),nu=!!gf,vf=gf=null,t.current=n,xb(n),nC(),oe=a,le=o,Ht.transition=s}else t.current=n;if(pl&&(pl=!1,mr=t,yu=i),s=t.pendingLanes,s===0&&(kr=null),sC(n.stateNode),Ct(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vu)throw vu=!1,t=jf,jf=null,t;return yu&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===Ff?Mo++:(Mo=0,Ff=t):Mo=0,zr(),null}function ps(){if(mr!==null){var t=lw(yu),e=Ht.transition,n=le;try{if(Ht.transition=null,le=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,yu=0,oe&6)throw Error(O(331));var i=oe;for(oe|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Lo(8,c,s)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var f=c.sibling,y=c.return;if(w0(c),c===u){z=null;break}if(f!==null){f.return=y,z=f;break}z=y}}}var g=s.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}var h=t.current;for(z=h;z!==null;){o=z;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,z=m;else e:for(o=h;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ac(9,a)}}catch(C){Ne(a,a.return,C)}if(a===o){z=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,z=E;break e}z=a.return}}if(oe=i,zr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Zu,t)}catch{}r=!0}return r}finally{le=n,Ht.transition=e}}return!1}function cv(t,e,n){e=Is(n,e),e=u0(t,e,1),t=Sr(t,e,1),e=dt(),t!==null&&(Ia(t,1,e),Ct(t,e))}function Ne(t,e,n){if(t.tag===3)cv(t,t,n);else for(;e!==null;){if(e.tag===3){cv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=Is(n,t),t=c0(e,t,1),e=Sr(e,t,1),t=dt(),e!==null&&(Ia(e,1,t),Ct(e,t));break}}e=e.return}}function Ab(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(tt&n)===n&&(ze===4||ze===3&&(tt&130023424)===tt&&500>De()-Ep?di(t,0):wp|=n),Ct(t,e)}function P0(t,e){e===0&&(t.mode&1?(e=il,il<<=1,!(il&130023424)&&(il=4194304)):e=1);var n=dt();t=jn(t,e),t!==null&&(Ia(t,e,n),Ct(t,n))}function Ob(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),P0(t,n)}function Lb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),P0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,Eb(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Ce&&e.flags&1048576&&Lw(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fl(t,e),t=e.pendingProps;var i=ks(e,at.current);hs(e,n),i=pp(null,e,r,t,i,n);var s=mp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,au(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,up(e),i.updater=sc,e.stateNode=i,i._reactInternals=e,xf(e,r,t,n),e=Nf(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&np(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Mb(r),t=Yt(r,t),i){case 0:e=Tf(null,e,r,t,n);break e;case 1:e=ev(null,e,r,t,n);break e;case 11:e=Jg(null,e,r,t,n);break e;case 14:e=Zg(null,e,r,Yt(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Tf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),ev(t,e,r,i,n);case 3:e:{if(p0(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fw(t,e),fu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Is(Error(O(423)),e),e=tv(t,e,r,n,i);break e}else if(r!==i){i=Is(Error(O(424)),e),e=tv(t,e,r,n,i);break e}else for(It=Er(e.stateNode.containerInfo.firstChild),Nt=e,Ce=!0,Jt=null,n=Ww(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),r===i){e=Fn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return Hw(e),t===null&&kf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,yf(r,i)?o=null:s!==null&&yf(r,s)&&(e.flags|=32),h0(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&kf(e),null;case 13:return m0(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Jg(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(cu,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!St.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=An(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hs(e,n),i=Bt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Zg(t,e,r,i,n);case 15:return d0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Fl(t,e),e.tag=1,kt(r)?(t=!0,au(e)):t=!1,hs(e,n),Uw(e,r,i),xf(e,r,i,n),Nf(null,e,r,!0,t,n);case 19:return g0(t,e,n);case 22:return f0(t,e,n)}throw Error(O(156,e.tag))};function A0(t,e){return iw(t,e)}function Db(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new Db(t,e,n,r)}function bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mb(t){if(typeof t=="function")return bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bh)return 11;if(t===Vh)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gi:return fi(n.children,i,s,e);case Hh:o=8,i|=8;break;case Yd:return t=Ut(12,n,e,i|2),t.elementType=Yd,t.lanes=s,t;case Qd:return t=Ut(13,n,e,i),t.elementType=Qd,t.lanes=s,t;case Xd:return t=Ut(19,n,e,i),t.elementType=Xd,t.lanes=s,t;case $_:return uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z_:o=10;break e;case U_:o=9;break e;case Bh:o=11;break e;case Vh:o=14;break e;case or:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fi(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function uc(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=$_,t.lanes=n,t.stateNode={isHidden:!1},t}function gd(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function vd(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xp(t,e,n,r,i,s,o,a,l){return t=new jb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(s),t}function Fb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O0(t){if(!t)return Rr;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(kt(n))return Aw(t,n,e)}return e}function L0(t,e,n,r,i,s,o,a,l){return t=xp(n,r,!0,t,i,s,o,a,l),t.context=O0(null),n=t.current,r=dt(),i=Cr(n),s=An(r,i),s.callback=e??null,Sr(n,s,i),t.current.lanes=i,Ia(t,i,r),Ct(t,r),t}function cc(t,e,n,r){var i=e.current,s=dt(),o=Cr(i);return n=O0(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sr(i,e,o),t!==null&&(an(t,i,o,s),Dl(t,i,o)),o}function wu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ip(t,e){dv(t,e),(t=t.alternate)&&dv(t,e)}function zb(){return null}var D0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tp(t){this._internalRoot=t}dc.prototype.render=Tp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));cc(t,e,null,null)};dc.prototype.unmount=Tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_i(function(){cc(null,t,null,null)}),e[Mn]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var e=dw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&hw(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fv(){}function Ub(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wu(o);s.call(u)}}var o=L0(e,r,t,0,null,!1,!1,"",fv);return t._reactRootContainer=o,t[Mn]=o.current,Zo(t.nodeType===8?t.parentNode:t),_i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=wu(l);a.call(u)}}var l=xp(t,0,!1,null,null,!1,!1,"",fv);return t._reactRootContainer=l,t[Mn]=l.current,Zo(t.nodeType===8?t.parentNode:t),_i(function(){cc(e,l,n,r)}),l}function hc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=wu(o);a.call(l)}}cc(e,o,t,i)}else o=Ub(n,e,t,i,r);return wu(o)}uw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=So(e.pendingLanes);n!==0&&(Kh(e,n|1),Ct(e,De()),!(oe&6)&&(Ts=De()+500,zr()))}break;case 13:_i(function(){var r=jn(t,1);if(r!==null){var i=dt();an(r,t,1,i)}}),Ip(t,1)}};Yh=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=dt();an(e,t,134217728,n)}Ip(t,134217728)}};cw=function(t){if(t.tag===13){var e=Cr(t),n=jn(t,e);if(n!==null){var r=dt();an(n,t,e,r)}Ip(t,e)}};dw=function(){return le};fw=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};lf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rc(r);if(!i)throw Error(O(90));H_(r),ef(r,i)}}}break;case"textarea":V_(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};J_=Sp;Z_=_i;var $b={usingClientEntryPoint:!1,Events:[Na,Qi,rc,Q_,X_,Sp]},uo={findFiberByHostInstance:ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wb={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nw(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||zb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{Zu=ml.inject(Wb),yn=ml}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$b;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(O(200));return Fb(t,e,null,n)};At.createRoot=function(t,e){if(!Np(t))throw Error(O(299));var n=!1,r="",i=D0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xp(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,Zo(t.nodeType===8?t.parentNode:t),new Tp(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=nw(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return _i(t)};At.hydrate=function(t,e,n){if(!fc(e))throw Error(O(200));return hc(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Np(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=D0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L0(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,Zo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new dc(e)};At.render=function(t,e,n){if(!fc(e))throw Error(O(200));return hc(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!fc(t))throw Error(O(40));return t._reactRootContainer?(_i(function(){hc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};At.unstable_batchedUpdates=Sp;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fc(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return hc(t,e,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function M0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M0)}catch(t){console.error(t)}}M0(),L_.exports=At;var Pp=L_.exports;const Rp=Xu(Pp),Hb=k_({__proto__:null,default:Rp},[Pp]);var hv=Pp;qd.createRoot=hv.createRoot,qd.hydrateRoot=hv.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pe(){return Pe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pe.apply(this,arguments)}var Le;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Le||(Le={}));const pv="popstate";function Bb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return la("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ei(i)}return Gb(e,n,null,t)}function Y(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vb(){return Math.random().toString(36).substr(2,8)}function mv(t,e){return{usr:t.state,key:t.key,idx:e}}function la(t,e,n,r){return n===void 0&&(n=null),Pe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gn(e):e,{state:n,key:e&&e.key||r||Vb()})}function Ei(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Gb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Le.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Pe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Le.Pop;let S=c(),v=S==null?null:S-u;u=S,l&&l({action:a,location:w.location,delta:v})}function f(S,v){a=Le.Push;let h=la(w.location,S,v);n&&n(h,S),u=c()+1;let m=mv(h,u),E=w.createHref(h);try{o.pushState(m,"",E)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function y(S,v){a=Le.Replace;let h=la(w.location,S,v);n&&n(h,S),u=c();let m=mv(h,u),E=w.createHref(h);o.replaceState(m,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function g(S){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:Ei(S);return Y(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let w={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(pv,d),l=S,()=>{i.removeEventListener(pv,d),l=null}},createHref(S){return e(i,S)},createURL:g,encodeLocation(S){let v=g(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:y,go(S){return o.go(S)}};return w}var Te;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Te||(Te={}));const qb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Kb(t){return t.index===!0}function $f(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(Y(i.index!==!0||!i.children,"Cannot specify children on an index route"),Y(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Kb(i)){let l=Pe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Pe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=$f(i.children,e,o,r)),l}})}function rs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gn(e):e,i=zn(r.pathname||"/",n);if(i==null)return null;let s=j0(t);Qb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=sx(s[a],ax(i));return o}function Yb(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function j0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=On([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Y(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),j0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:rx(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of F0(s.path))i(s,o,l)}),e}function F0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=F0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Qb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ix(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xb=/^:[\w-]+$/,Jb=3,Zb=2,ex=1,tx=10,nx=-2,gv=t=>t==="*";function rx(t,e){let n=t.split("/"),r=n.length;return n.some(gv)&&(r+=nx),e&&(r+=Zb),n.filter(i=>!gv(i)).reduce((i,s)=>i+(Xb.test(s)?Jb:s===""?ex:tx),r)}function ix(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function sx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Wf({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:On([i,c.pathname]),pathnameBase:dx(On([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=On([i,c.pathnameBase]))}return s}function Wf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ox(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:y}=c;if(f==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const g=a[d];return y&&!g?u[f]=void 0:u[f]=lx(g||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ox(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ax(t){try{return decodeURI(t)}catch(e){return wi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lx(t,e){try{return decodeURIComponent(t)}catch(n){return wi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function zn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ux(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gn(t):t;return{pathname:n?n.startsWith("/")?n:cx(n,e):e,search:fx(r),hash:hx(i)}}function cx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pc(t,e){let n=z0(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gn(t):(i=Pe({},t),Y(!i.pathname||!i.pathname.includes("?"),yd("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),yd("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),yd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=ux(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const On=t=>t.join("/").replace(/\/\/+/g,"/"),dx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Ap{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function U0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $0=["post","put","patch","delete"],px=new Set($0),mx=["get",...$0],gx=new Set(mx),vx=new Set([301,302,303,307,308]),yx=new Set([307,308]),_d={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_x={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},co={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},W0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wx=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),H0="remix-router-transitions";function Ex(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Y(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=N=>({hasErrorBoundary:x(N)})}else i=wx;let s={},o=$f(t.routes,i,void 0,s),a,l=t.basename||"/",u=Pe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,d=new Set,f=null,y=null,g=null,w=t.hydrationData!=null,S=rs(o,t.history.location,l),v=null;if(S==null){let x=jt(404,{pathname:t.history.location.pathname}),{matches:N,route:P}=Cv(o);S=N,v={[P.id]:x}}let h,m=S.some(x=>x.route.lazy),E=S.some(x=>x.route.loader);if(m)h=!1;else if(!E)h=!0;else if(u.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,N=t.hydrationData?t.hydrationData.errors:null;h=S.every(P=>P.route.loader&&P.route.loader.hydrate!==!0&&(x&&x[P.route.id]!==void 0||N&&N[P.route.id]!==void 0))}else h=t.hydrationData!=null;let C,_={historyAction:t.history.action,location:t.history.location,matches:S,initialized:h,navigation:_d,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},b=Le.Pop,I=!1,T,A=!1,j=new Map,ie=null,ye=!1,ut=!1,Jn=[],dn=[],de=new Map,L=0,W=-1,B=new Map,ne=new Set,ee=new Map,Dt=new Map,he=new Set,Qe=new Map,Me=new Map,bt=!1;function Js(){if(c=t.history.listen(x=>{let{action:N,location:P,delta:M}=x;if(bt){bt=!1;return}wi(Me.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let $=tg({currentLocation:_.location,nextLocation:P,historyAction:N});if($&&M!=null){bt=!0,t.history.go(M*-1),Qa($,{state:"blocked",location:P,proceed(){Qa($,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go(M)},reset(){let X=new Map(_.blockers);X.set($,co),$e({blockers:X})}});return}return Gr(N,P)}),n){Ax(e,j);let x=()=>Ox(e,j);e.addEventListener("pagehide",x),ie=()=>e.removeEventListener("pagehide",x)}return _.initialized||Gr(Le.Pop,_.location,{initialHydration:!0}),C}function Ka(){c&&c(),ie&&ie(),d.clear(),T&&T.abort(),_.fetchers.forEach((x,N)=>Ya(N)),_.blockers.forEach((x,N)=>eg(N))}function Zs(x){return d.add(x),()=>d.delete(x)}function $e(x,N){N===void 0&&(N={}),_=Pe({},_,x);let P=[],M=[];u.v7_fetcherPersist&&_.fetchers.forEach(($,X)=>{$.state==="idle"&&(he.has(X)?M.push(X):P.push(X))}),[...d].forEach($=>$(_,{deletedFetchers:M,unstable_viewTransitionOpts:N.viewTransitionOpts,unstable_flushSync:N.flushSync===!0})),u.v7_fetcherPersist&&(P.forEach($=>_.fetchers.delete($)),M.forEach($=>Ya($)))}function Vr(x,N,P){var M,$;let{flushSync:X}=P===void 0?{}:P,q=_.actionData!=null&&_.navigation.formMethod!=null&&Xt(_.navigation.formMethod)&&_.navigation.state==="loading"&&((M=x.state)==null?void 0:M._isRedirect)!==!0,V;N.actionData?Object.keys(N.actionData).length>0?V=N.actionData:V=null:q?V=_.actionData:V=null;let H=N.loaderData?kv(_.loaderData,N.loaderData,N.matches||[],N.errors):_.loaderData,se=_.blockers;se.size>0&&(se=new Map(se),se.forEach((pe,Xe)=>se.set(Xe,co)));let We=I===!0||_.navigation.formMethod!=null&&Xt(_.navigation.formMethod)&&(($=x.state)==null?void 0:$._isRedirect)!==!0;a&&(o=a,a=void 0),ye||b===Le.Pop||(b===Le.Push?t.history.push(x,x.state):b===Le.Replace&&t.history.replace(x,x.state));let Q;if(b===Le.Pop){let pe=j.get(_.location.pathname);pe&&pe.has(x.pathname)?Q={currentLocation:_.location,nextLocation:x}:j.has(x.pathname)&&(Q={currentLocation:x,nextLocation:_.location})}else if(A){let pe=j.get(_.location.pathname);pe?pe.add(x.pathname):(pe=new Set([x.pathname]),j.set(_.location.pathname,pe)),Q={currentLocation:_.location,nextLocation:x}}$e(Pe({},N,{actionData:V,loaderData:H,historyAction:b,location:x,initialized:!0,navigation:_d,revalidation:"idle",restoreScrollPosition:rg(x,N.matches||_.matches),preventScrollReset:We,blockers:se}),{viewTransitionOpts:Q,flushSync:X===!0}),b=Le.Pop,I=!1,A=!1,ye=!1,ut=!1,Jn=[],dn=[]}async function Fi(x,N){if(typeof x=="number"){t.history.go(x);return}let P=Hf(_.location,_.matches,l,u.v7_prependBasename,x,u.v7_relativeSplatPath,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:M,submission:$,error:X}=vv(u.v7_normalizeFormMethod,!1,P,N),q=_.location,V=la(_.location,M,N&&N.state);V=Pe({},V,t.history.encodeLocation(V));let H=N&&N.replace!=null?N.replace:void 0,se=Le.Push;H===!0?se=Le.Replace:H===!1||$!=null&&Xt($.formMethod)&&$.formAction===_.location.pathname+_.location.search&&(se=Le.Replace);let We=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,Q=(N&&N.unstable_flushSync)===!0,pe=tg({currentLocation:q,nextLocation:V,historyAction:se});if(pe){Qa(pe,{state:"blocked",location:V,proceed(){Qa(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),Fi(x,N)},reset(){let Xe=new Map(_.blockers);Xe.set(pe,co),$e({blockers:Xe})}});return}return await Gr(se,V,{submission:$,pendingError:X,preventScrollReset:We,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition,flushSync:Q})}function ok(){if(Uc(),$e({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){Gr(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}Gr(b||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function Gr(x,N,P){T&&T.abort(),T=null,b=x,ye=(P&&P.startUninterruptedRevalidation)===!0,mk(_.location,_.matches),I=(P&&P.preventScrollReset)===!0,A=(P&&P.enableViewTransition)===!0;let M=a||o,$=P&&P.overrideNavigation,X=rs(M,N,l),q=(P&&P.flushSync)===!0;if(!X){let Xe=jt(404,{pathname:N.pathname}),{matches:Mt,route:He}=Cv(M);$c(),Vr(N,{matches:Mt,loaderData:{},errors:{[He.id]:Xe}},{flushSync:q});return}if(_.initialized&&!ut&&xx(_.location,N)&&!(P&&P.submission&&Xt(P.submission.formMethod))){Vr(N,{matches:X},{flushSync:q});return}T=new AbortController;let V=ho(t.history,N,T.signal,P&&P.submission),H,se;if(P&&P.pendingError)se={[jo(X).route.id]:P.pendingError};else if(P&&P.submission&&Xt(P.submission.formMethod)){let Xe=await ak(V,N,P.submission,X,{replace:P.replace,flushSync:q});if(Xe.shortCircuited)return;H=Xe.pendingActionData,se=Xe.pendingActionError,$=wd(N,P.submission),q=!1,V=new Request(V.url,{signal:V.signal})}let{shortCircuited:We,loaderData:Q,errors:pe}=await lk(V,N,X,$,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,P&&P.initialHydration===!0,q,H,se);We||(T=null,Vr(N,Pe({matches:X},H?{actionData:H}:{},{loaderData:Q,errors:pe})))}async function ak(x,N,P,M,$){$===void 0&&($={}),Uc();let X=Px(N,P);$e({navigation:X},{flushSync:$.flushSync===!0});let q,V=Vf(M,N);if(!V.route.action&&!V.route.lazy)q={type:Te.error,error:jt(405,{method:x.method,pathname:N.pathname,routeId:V.route.id})};else if(q=await fo("action",x,V,M,s,i,l,u.v7_relativeSplatPath),x.signal.aborted)return{shortCircuited:!0};if(oi(q)){let H;return $&&$.replace!=null?H=$.replace:H=q.location===_.location.pathname+_.location.search,await eo(_,q,{submission:P,replace:H}),{shortCircuited:!0}}if(is(q)){let H=jo(M,V.route.id);return($&&$.replace)!==!0&&(b=Le.Push),{pendingActionData:{},pendingActionError:{[H.route.id]:q.error}}}if(si(q))throw jt(400,{type:"defer-action"});return{pendingActionData:{[V.route.id]:q.data}}}async function lk(x,N,P,M,$,X,q,V,H,se,We){let Q=M||wd(N,$),pe=$||X||Iv(Q),Xe=a||o,[Mt,He]=yv(t.history,_,P,pe,N,u.v7_partialHydration&&V===!0,ut,Jn,dn,he,ee,ne,Xe,l,se,We);if($c(fe=>!(P&&P.some(ke=>ke.route.id===fe))||Mt&&Mt.some(ke=>ke.route.id===fe)),W=++L,Mt.length===0&&He.length===0){let fe=Jm();return Vr(N,Pe({matches:P,loaderData:{},errors:We||null},se?{actionData:se}:{},fe?{fetchers:new Map(_.fetchers)}:{}),{flushSync:H}),{shortCircuited:!0}}if(!ye&&(!u.v7_partialHydration||!V)){He.forEach(ke=>{let fn=_.fetchers.get(ke.key),Ja=po(void 0,fn?fn.data:void 0);_.fetchers.set(ke.key,Ja)});let fe=se||_.actionData;$e(Pe({navigation:Q},fe?Object.keys(fe).length===0?{actionData:null}:{actionData:fe}:{},He.length>0?{fetchers:new Map(_.fetchers)}:{}),{flushSync:H})}He.forEach(fe=>{de.has(fe.key)&&er(fe.key),fe.controller&&de.set(fe.key,fe.controller)});let zi=()=>He.forEach(fe=>er(fe.key));T&&T.signal.addEventListener("abort",zi);let{results:Wc,loaderResults:Ui,fetcherResults:tr}=await Ym(_.matches,P,Mt,He,x);if(x.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",zi),He.forEach(fe=>de.delete(fe.key));let qr=bv(Wc);if(qr){if(qr.idx>=Mt.length){let fe=He[qr.idx-Mt.length].key;ne.add(fe)}return await eo(_,qr.result,{replace:q}),{shortCircuited:!0}}let{loaderData:Hc,errors:Bc}=Sv(_,P,Mt,Ui,We,He,tr,Qe);Qe.forEach((fe,ke)=>{fe.subscribe(fn=>{(fn||fe.done)&&Qe.delete(ke)})});let Vc=Jm(),$i=Zm(W),Xa=Vc||$i||He.length>0;return Pe({loaderData:Hc,errors:Bc},Xa?{fetchers:new Map(_.fetchers)}:{})}function uk(x,N,P,M){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");de.has(x)&&er(x);let $=(M&&M.unstable_flushSync)===!0,X=a||o,q=Hf(_.location,_.matches,l,u.v7_prependBasename,P,u.v7_relativeSplatPath,N,M==null?void 0:M.relative),V=rs(X,q,l);if(!V){to(x,N,jt(404,{pathname:q}),{flushSync:$});return}let{path:H,submission:se,error:We}=vv(u.v7_normalizeFormMethod,!0,q,M);if(We){to(x,N,We,{flushSync:$});return}let Q=Vf(V,H);if(I=(M&&M.preventScrollReset)===!0,se&&Xt(se.formMethod)){ck(x,N,H,Q,V,$,se);return}ee.set(x,{routeId:N,path:H}),dk(x,N,H,Q,V,$,se)}async function ck(x,N,P,M,$,X,q){if(Uc(),ee.delete(x),!M.route.action&&!M.route.lazy){let ke=jt(405,{method:q.formMethod,pathname:P,routeId:N});to(x,N,ke,{flushSync:X});return}let V=_.fetchers.get(x);Zn(x,Rx(q,V),{flushSync:X});let H=new AbortController,se=ho(t.history,P,H.signal,q);de.set(x,H);let We=L,Q=await fo("action",se,M,$,s,i,l,u.v7_relativeSplatPath);if(se.signal.aborted){de.get(x)===H&&de.delete(x);return}if(u.v7_fetcherPersist&&he.has(x)){if(oi(Q)||is(Q)){Zn(x,sr(void 0));return}}else{if(oi(Q))if(de.delete(x),W>We){Zn(x,sr(void 0));return}else return ne.add(x),Zn(x,po(q)),eo(_,Q,{fetcherSubmission:q});if(is(Q)){to(x,N,Q.error);return}}if(si(Q))throw jt(400,{type:"defer-action"});let pe=_.navigation.location||_.location,Xe=ho(t.history,pe,H.signal),Mt=a||o,He=_.navigation.state!=="idle"?rs(Mt,_.navigation.location,l):_.matches;Y(He,"Didn't find any matches after fetcher action");let zi=++L;B.set(x,zi);let Wc=po(q,Q.data);_.fetchers.set(x,Wc);let[Ui,tr]=yv(t.history,_,He,q,pe,!1,ut,Jn,dn,he,ee,ne,Mt,l,{[M.route.id]:Q.data},void 0);tr.filter(ke=>ke.key!==x).forEach(ke=>{let fn=ke.key,Ja=_.fetchers.get(fn),vk=po(void 0,Ja?Ja.data:void 0);_.fetchers.set(fn,vk),de.has(fn)&&er(fn),ke.controller&&de.set(fn,ke.controller)}),$e({fetchers:new Map(_.fetchers)});let qr=()=>tr.forEach(ke=>er(ke.key));H.signal.addEventListener("abort",qr);let{results:Hc,loaderResults:Bc,fetcherResults:Vc}=await Ym(_.matches,He,Ui,tr,Xe);if(H.signal.aborted)return;H.signal.removeEventListener("abort",qr),B.delete(x),de.delete(x),tr.forEach(ke=>de.delete(ke.key));let $i=bv(Hc);if($i){if($i.idx>=Ui.length){let ke=tr[$i.idx-Ui.length].key;ne.add(ke)}return eo(_,$i.result)}let{loaderData:Xa,errors:fe}=Sv(_,_.matches,Ui,Bc,void 0,tr,Vc,Qe);if(_.fetchers.has(x)){let ke=sr(Q.data);_.fetchers.set(x,ke)}Zm(zi),_.navigation.state==="loading"&&zi>W?(Y(b,"Expected pending action"),T&&T.abort(),Vr(_.navigation.location,{matches:He,loaderData:Xa,errors:fe,fetchers:new Map(_.fetchers)})):($e({errors:fe,loaderData:kv(_.loaderData,Xa,He,fe),fetchers:new Map(_.fetchers)}),ut=!1)}async function dk(x,N,P,M,$,X,q){let V=_.fetchers.get(x);Zn(x,po(q,V?V.data:void 0),{flushSync:X});let H=new AbortController,se=ho(t.history,P,H.signal);de.set(x,H);let We=L,Q=await fo("loader",se,M,$,s,i,l,u.v7_relativeSplatPath);if(si(Q)&&(Q=await G0(Q,se.signal,!0)||Q),de.get(x)===H&&de.delete(x),!se.signal.aborted){if(he.has(x)){Zn(x,sr(void 0));return}if(oi(Q))if(W>We){Zn(x,sr(void 0));return}else{ne.add(x),await eo(_,Q);return}if(is(Q)){to(x,N,Q.error);return}Y(!si(Q),"Unhandled fetcher deferred data"),Zn(x,sr(Q.data))}}async function eo(x,N,P){let{submission:M,fetcherSubmission:$,replace:X}=P===void 0?{}:P;N.revalidate&&(ut=!0);let q=la(x.location,N.location,{_isRedirect:!0});if(Y(q,"Expected a location on the redirect navigation"),n){let pe=!1;if(N.reloadDocument)pe=!0;else if(W0.test(N.location)){const Xe=t.history.createURL(N.location);pe=Xe.origin!==e.location.origin||zn(Xe.pathname,l)==null}if(pe){X?e.location.replace(N.location):e.location.assign(N.location);return}}T=null;let V=X===!0?Le.Replace:Le.Push,{formMethod:H,formAction:se,formEncType:We}=x.navigation;!M&&!$&&H&&se&&We&&(M=Iv(x.navigation));let Q=M||$;if(yx.has(N.status)&&Q&&Xt(Q.formMethod))await Gr(V,q,{submission:Pe({},Q,{formAction:N.location}),preventScrollReset:I});else{let pe=wd(q,M);await Gr(V,q,{overrideNavigation:pe,fetcherSubmission:$,preventScrollReset:I})}}async function Ym(x,N,P,M,$){let X=await Promise.all([...P.map(H=>fo("loader",$,H,N,s,i,l,u.v7_relativeSplatPath)),...M.map(H=>H.matches&&H.match&&H.controller?fo("loader",ho(t.history,H.path,H.controller.signal),H.match,H.matches,s,i,l,u.v7_relativeSplatPath):{type:Te.error,error:jt(404,{pathname:H.path})})]),q=X.slice(0,P.length),V=X.slice(P.length);return await Promise.all([xv(x,P,q,q.map(()=>$.signal),!1,_.loaderData),xv(x,M.map(H=>H.match),V,M.map(H=>H.controller?H.controller.signal:null),!0)]),{results:X,loaderResults:q,fetcherResults:V}}function Uc(){ut=!0,Jn.push(...$c()),ee.forEach((x,N)=>{de.has(N)&&(dn.push(N),er(N))})}function Zn(x,N,P){P===void 0&&(P={}),_.fetchers.set(x,N),$e({fetchers:new Map(_.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function to(x,N,P,M){M===void 0&&(M={});let $=jo(_.matches,N);Ya(x),$e({errors:{[$.route.id]:P},fetchers:new Map(_.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Qm(x){return u.v7_fetcherPersist&&(Dt.set(x,(Dt.get(x)||0)+1),he.has(x)&&he.delete(x)),_.fetchers.get(x)||_x}function Ya(x){let N=_.fetchers.get(x);de.has(x)&&!(N&&N.state==="loading"&&B.has(x))&&er(x),ee.delete(x),B.delete(x),ne.delete(x),he.delete(x),_.fetchers.delete(x)}function fk(x){if(u.v7_fetcherPersist){let N=(Dt.get(x)||0)-1;N<=0?(Dt.delete(x),he.add(x)):Dt.set(x,N)}else Ya(x);$e({fetchers:new Map(_.fetchers)})}function er(x){let N=de.get(x);Y(N,"Expected fetch controller: "+x),N.abort(),de.delete(x)}function Xm(x){for(let N of x){let P=Qm(N),M=sr(P.data);_.fetchers.set(N,M)}}function Jm(){let x=[],N=!1;for(let P of ne){let M=_.fetchers.get(P);Y(M,"Expected fetcher: "+P),M.state==="loading"&&(ne.delete(P),x.push(P),N=!0)}return Xm(x),N}function Zm(x){let N=[];for(let[P,M]of B)if(M<x){let $=_.fetchers.get(P);Y($,"Expected fetcher: "+P),$.state==="loading"&&(er(P),B.delete(P),N.push(P))}return Xm(N),N.length>0}function hk(x,N){let P=_.blockers.get(x)||co;return Me.get(x)!==N&&Me.set(x,N),P}function eg(x){_.blockers.delete(x),Me.delete(x)}function Qa(x,N){let P=_.blockers.get(x)||co;Y(P.state==="unblocked"&&N.state==="blocked"||P.state==="blocked"&&N.state==="blocked"||P.state==="blocked"&&N.state==="proceeding"||P.state==="blocked"&&N.state==="unblocked"||P.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+N.state);let M=new Map(_.blockers);M.set(x,N),$e({blockers:M})}function tg(x){let{currentLocation:N,nextLocation:P,historyAction:M}=x;if(Me.size===0)return;Me.size>1&&wi(!1,"A router only supports one blocker at a time");let $=Array.from(Me.entries()),[X,q]=$[$.length-1],V=_.blockers.get(X);if(!(V&&V.state==="proceeding")&&q({currentLocation:N,nextLocation:P,historyAction:M}))return X}function $c(x){let N=[];return Qe.forEach((P,M)=>{(!x||x(M))&&(P.cancel(),N.push(M),Qe.delete(M))}),N}function pk(x,N,P){if(f=x,g=N,y=P||null,!w&&_.navigation===_d){w=!0;let M=rg(_.location,_.matches);M!=null&&$e({restoreScrollPosition:M})}return()=>{f=null,g=null,y=null}}function ng(x,N){return y&&y(x,N.map(M=>Yb(M,_.loaderData)))||x.key}function mk(x,N){if(f&&g){let P=ng(x,N);f[P]=g()}}function rg(x,N){if(f){let P=ng(x,N),M=f[P];if(typeof M=="number")return M}return null}function gk(x){s={},a=$f(x,i,void 0,s)}return C={get basename(){return l},get future(){return u},get state(){return _},get routes(){return o},get window(){return e},initialize:Js,subscribe:Zs,enableScrollRestoration:pk,navigate:Fi,fetch:uk,revalidate:ok,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Qm,deleteFetcher:fk,dispose:Ka,getBlocker:hk,deleteBlocker:eg,_internalFetchControllers:de,_internalActiveDeferreds:Qe,_internalSetRoutes:gk},C}function Sx(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Hf(t,e,n,r,i,s,o,a){let l,u;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){u=d;break}}else l=e,u=e[e.length-1];let c=mc(i||".",pc(l,s),zn(t.pathname,n)||t.pathname,a==="path");return i==null&&(c.search=t.search,c.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Op(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:On([n,c.pathname])),Ei(c)}function vv(t,e,n,r){if(!r||!Sx(r))return{path:n};if(r.formMethod&&!Nx(r.formMethod))return{path:n,error:jt(405,{method:r.formMethod})};let i=()=>({path:n,error:jt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=V0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Xt(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,g)=>{let[w,S]=g;return""+y+w+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Xt(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}Y(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Bf(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Bf(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Ev(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Ev(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Xt(c.formMethod))return{path:n,submission:c};let d=Gn(n);return e&&d.search&&Op(d.search)&&l.append("index",""),d.search="?"+l,{path:Ei(d),submission:c}}function kx(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function yv(t,e,n,r,i,s,o,a,l,u,c,d,f,y,g,w){let S=w?Object.values(w)[0]:g?Object.values(g)[0]:void 0,v=t.createURL(e.location),h=t.createURL(i),m=w?Object.keys(w)[0]:void 0,C=kx(n,m).filter((b,I)=>{let{route:T}=b;if(T.lazy)return!0;if(T.loader==null)return!1;if(s)return T.loader.hydrate?!0:e.loaderData[T.id]===void 0&&(!e.errors||e.errors[T.id]===void 0);if(Cx(e.loaderData,e.matches[I],b)||a.some(ie=>ie===b.route.id))return!0;let A=e.matches[I],j=b;return _v(b,Pe({currentUrl:v,currentParams:A.params,nextUrl:h,nextParams:j.params},r,{actionResult:S,defaultShouldRevalidate:o||v.pathname+v.search===h.pathname+h.search||v.search!==h.search||B0(A,j)}))}),_=[];return c.forEach((b,I)=>{if(s||!n.some(ye=>ye.route.id===b.routeId)||u.has(I))return;let T=rs(f,b.path,y);if(!T){_.push({key:I,routeId:b.routeId,path:b.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(I),j=Vf(T,b.path),ie=!1;d.has(I)?ie=!1:l.includes(I)?ie=!0:A&&A.state!=="idle"&&A.data===void 0?ie=o:ie=_v(j,Pe({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:S,defaultShouldRevalidate:o})),ie&&_.push({key:I,routeId:b.routeId,path:b.path,matches:T,match:j,controller:new AbortController})}),[C,_]}function Cx(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function B0(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function _v(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function wv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Y(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";wi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!qb.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Pe({},e(i),{lazy:void 0}))}async function fo(t,e,n,r,i,s,o,a,l){l===void 0&&(l={});let u,c,d,f=w=>{let S,v=new Promise((h,m)=>S=m);return d=()=>S(),e.signal.addEventListener("abort",d),Promise.race([w({request:e,params:n.params,context:l.requestContext}),v])};try{let w=n.route[t];if(n.route.lazy)if(w){let S,v=await Promise.all([f(w).catch(h=>{S=h}),wv(n.route,s,i)]);if(S)throw S;c=v[0]}else if(await wv(n.route,s,i),w=n.route[t],w)c=await f(w);else if(t==="action"){let S=new URL(e.url),v=S.pathname+S.search;throw jt(405,{method:e.method,pathname:v,routeId:n.route.id})}else return{type:Te.data,data:void 0};else if(w)c=await f(w);else{let S=new URL(e.url),v=S.pathname+S.search;throw jt(404,{pathname:v})}Y(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(w){u=Te.error,c=w}finally{d&&e.signal.removeEventListener("abort",d)}if(Tx(c)){let w=c.status;if(vx.has(w)){let v=c.headers.get("Location");if(Y(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!W0.test(v))v=Hf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,v,a);else if(!l.isStaticRequest){let h=new URL(e.url),m=v.startsWith("//")?new URL(h.protocol+v):new URL(v),E=zn(m.pathname,o)!=null;m.origin===h.origin&&E&&(v=m.pathname+m.search+m.hash)}if(l.isStaticRequest)throw c.headers.set("Location",v),c;return{type:Te.redirect,status:w,location:v,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===Te.error?Te.error:Te.data,response:c};let S;try{let v=c.headers.get("Content-Type");v&&/\bapplication\/json\b/.test(v)?c.body==null?S=null:S=await c.json():S=await c.text()}catch(v){return{type:Te.error,error:v}}return u===Te.error?{type:u,error:new Ap(w,c.statusText,S),headers:c.headers}:{type:Te.data,data:S,statusCode:c.status,headers:c.headers}}if(u===Te.error)return{type:u,error:c};if(Ix(c)){var y,g;return{type:Te.deferred,deferredData:c,statusCode:(y=c.init)==null?void 0:y.status,headers:((g=c.init)==null?void 0:g.headers)&&new Headers(c.init.headers)}}return{type:Te.data,data:c}}function ho(t,e,n,r){let i=t.createURL(V0(e)).toString(),s={signal:n};if(r&&Xt(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Bf(r.formData):s.body=r.formData}return new Request(i,s)}function Bf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Ev(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function bx(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(Y(!oi(c),"Cannot handle redirect results in processLoaderData"),is(c)){let y=jo(t,f),g=c.error;r&&(g=Object.values(r)[0],r=void 0),o=o||{},o[y.route.id]==null&&(o[y.route.id]=g),s[f]=void 0,l||(l=!0,a=U0(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else si(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Sv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=bx(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:y}=s[c];Y(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let g=o[c];if(!(y&&y.signal.aborted))if(is(g)){let w=jo(t.matches,f==null?void 0:f.route.id);u&&u[w.route.id]||(u=Pe({},u,{[w.route.id]:g.error})),t.fetchers.delete(d)}else if(oi(g))Y(!1,"Unhandled fetcher revalidation redirect");else if(si(g))Y(!1,"Unhandled fetcher deferred data");else{let w=sr(g.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function kv(t,e,n,r){let i=Pe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function jo(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Cv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function jt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Ap(t||500,o,new Error(a),!0)}function bv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(oi(n))return{result:n,idx:e}}}function V0(t){let e=typeof t=="string"?Gn(t):t;return Ei(Pe({},e,{hash:""}))}function xx(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function si(t){return t.type===Te.deferred}function is(t){return t.type===Te.error}function oi(t){return(t&&t.type)===Te.redirect}function Ix(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function Tx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Nx(t){return gx.has(t.toLowerCase())}function Xt(t){return px.has(t.toLowerCase())}async function xv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!B0(u,l)&&(s&&s[l.route.id])!==void 0;if(si(a)&&(i||c)){let d=r[o];Y(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await G0(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function G0(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Te.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Te.error,error:i}}return{type:Te.data,data:t.deferredData.data}}}function Op(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Vf(t,e){let n=typeof e=="string"?Gn(e).search:e.search;if(t[t.length-1].route.index&&Op(n||""))return t[t.length-1];let r=z0(t);return r[r.length-1]}function Iv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function wd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Px(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function po(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Rx(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function sr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Ax(t,e){try{let n=t.sessionStorage.getItem(H0);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function Ox(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(H0,JSON.stringify(n))}catch(r){wi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ua.apply(this,arguments)}const Ra=k.createContext(null),Lp=k.createContext(null),qn=k.createContext(null),gc=k.createContext(null),Kn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),q0=k.createContext(null);function Lx(t,e){let{relative:n}=e===void 0?{}:e;Hs()||Y(!1);let{basename:r,navigator:i}=k.useContext(qn),{hash:s,pathname:o,search:a}=vc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:On([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Hs(){return k.useContext(gc)!=null}function Sn(){return Hs()||Y(!1),k.useContext(gc).location}function K0(t){k.useContext(qn).static||k.useLayoutEffect(t)}function Aa(){let{isDataRoute:t}=k.useContext(Kn);return t?Kx():Dx()}function Dx(){Hs()||Y(!1);let t=k.useContext(Ra),{basename:e,future:n,navigator:r}=k.useContext(qn),{matches:i}=k.useContext(Kn),{pathname:s}=Sn(),o=JSON.stringify(pc(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return K0(()=>{a.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=mc(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:On([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const Mx=k.createContext(null);function jx(t){let e=k.useContext(Kn).outlet;return e&&k.createElement(Mx.Provider,{value:t},e)}function vc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=k.useContext(qn),{matches:i}=k.useContext(Kn),{pathname:s}=Sn(),o=JSON.stringify(pc(i,r.v7_relativeSplatPath));return k.useMemo(()=>mc(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Fx(t,e){return Y0(t,e)}function Y0(t,e,n,r){Hs()||Y(!1);let{navigator:i}=k.useContext(qn),{matches:s}=k.useContext(Kn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Sn(),c;if(e){var d;let S=typeof e=="string"?Gn(e):e;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||Y(!1),c=S}else c=u;let f=c.pathname||"/",y=l==="/"?f:f.slice(l.length)||"/",g=rs(t,{pathname:y}),w=Hx(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:On([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:On([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&w?k.createElement(gc.Provider,{value:{location:ua({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Le.Pop}},w):w}function zx(){let t=qx(),e=U0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const Ux=k.createElement(zx,null);class $x extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(Kn.Provider,{value:this.props.routeContext},k.createElement(q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wx(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Ra);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Kn.Provider,{value:e},r)}function Hx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||Y(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:y}=n,g=d.route.loader&&f[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let y,g=!1,w=null,S=null;n&&(y=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||Ux,l&&(u<0&&f===0?(Yx("route-fallback",!1),g=!0,S=null):u===f&&(g=!0,S=d.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,f+1)),h=()=>{let m;return y?m=w:g?m=S:d.route.Component?m=k.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=c,k.createElement(Wx,{match:d,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?k.createElement($x,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var Q0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Q0||{}),Eu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Eu||{});function Bx(t){let e=k.useContext(Ra);return e||Y(!1),e}function Vx(t){let e=k.useContext(Lp);return e||Y(!1),e}function Gx(t){let e=k.useContext(Kn);return e||Y(!1),e}function X0(t){let e=Gx(),n=e.matches[e.matches.length-1];return n.route.id||Y(!1),n.route.id}function qx(){var t;let e=k.useContext(q0),n=Vx(Eu.UseRouteError),r=X0(Eu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Kx(){let{router:t}=Bx(Q0.UseNavigateStable),e=X0(Eu.UseNavigateStable),n=k.useRef(!1);return K0(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ua({fromRouteId:e},s)))},[t,e])}const Tv={};function Yx(t,e,n){!e&&!Tv[t]&&(Tv[t]=!0)}function Qx(t){let{to:e,replace:n,state:r,relative:i}=t;Hs()||Y(!1);let{future:s,static:o}=k.useContext(qn),{matches:a}=k.useContext(Kn),{pathname:l}=Sn(),u=Aa(),c=mc(e,pc(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return k.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function J0(t){return jx(t.context)}function Ze(t){Y(!1)}function Xx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Le.Pop,navigator:s,static:o=!1,future:a}=t;Hs()&&Y(!1);let l=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:ua({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Gn(r));let{pathname:c="/",search:d="",hash:f="",state:y=null,key:g="default"}=r,w=k.useMemo(()=>{let S=zn(c,l);return S==null?null:{location:{pathname:S,search:d,hash:f,state:y,key:g},navigationType:i}},[l,c,d,f,y,g,i]);return w==null?null:k.createElement(qn.Provider,{value:u},k.createElement(gc.Provider,{children:n,value:w}))}function Jx(t){let{children:e,location:n}=t;return Fx(Su(e),n)}new Promise(()=>{});function Su(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Su(r.props.children,s));return}r.type!==Ze&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Su(r.props.children,s)),n.push(o)}),n}function Zx(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:k.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:k.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:k.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ns.apply(this,arguments)}function Z0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tI(t,e){return t.button===0&&(!e||e==="_self")&&!eI(t)}const nI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],rI=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],iI="6";try{window.__reactRouterVersion=iI}catch{}function sI(t,e){return Ex({basename:e==null?void 0:e.basename,future:Ns({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Bb({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||oI(),routes:t,mapRouteProperties:Zx,window:e==null?void 0:e.window}).initialize()}function oI(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Ns({},e,{errors:aI(e.errors)})),e}function aI(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Ap(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const e1=k.createContext({isTransitioning:!1}),lI=k.createContext(new Map),uI="startTransition",Nv=Ok[uI],cI="flushSync",Pv=Hb[cI];function dI(t){Nv?Nv(t):t()}function mo(t){Pv?Pv(t):t()}let fI=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function hI(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=k.useState(n.state),[o,a]=k.useState(),[l,u]=k.useState({isTransitioning:!1}),[c,d]=k.useState(),[f,y]=k.useState(),[g,w]=k.useState(),S=k.useRef(new Map),{v7_startTransition:v}=r||{},h=k.useCallback(b=>{v?dI(b):b()},[v]),m=k.useCallback((b,I)=>{let{deletedFetchers:T,unstable_flushSync:A,unstable_viewTransitionOpts:j}=I;T.forEach(ye=>S.current.delete(ye)),b.fetchers.forEach((ye,ut)=>{ye.data!==void 0&&S.current.set(ut,ye.data)});let ie=n.window==null||typeof n.window.document.startViewTransition!="function";if(!j||ie){A?mo(()=>s(b)):h(()=>s(b));return}if(A){mo(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:j.currentLocation,nextLocation:j.nextLocation})});let ye=n.window.document.startViewTransition(()=>{mo(()=>s(b))});ye.finished.finally(()=>{mo(()=>{d(void 0),y(void 0),a(void 0),u({isTransitioning:!1})})}),mo(()=>y(ye));return}f?(c&&c.resolve(),f.skipTransition(),w({state:b,currentLocation:j.currentLocation,nextLocation:j.nextLocation})):(a(b),u({isTransitioning:!0,flushSync:!1,currentLocation:j.currentLocation,nextLocation:j.nextLocation}))},[n.window,f,c,S,h]);k.useLayoutEffect(()=>n.subscribe(m),[n,m]),k.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new fI)},[l]),k.useEffect(()=>{if(c&&o&&n.window){let b=o,I=c.promise,T=n.window.document.startViewTransition(async()=>{h(()=>s(b)),await I});T.finished.finally(()=>{d(void 0),y(void 0),a(void 0),u({isTransitioning:!1})}),y(T)}},[h,o,c,n.window]),k.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),k.useEffect(()=>{!l.isTransitioning&&g&&(a(g.state),u({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),w(void 0))},[l.isTransitioning,g]),k.useEffect(()=>{},[]);let E=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,I,T)=>n.navigate(b,{state:I,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(b,I,T)=>n.navigate(b,{replace:!0,state:I,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[n]),C=n.basename||"/",_=k.useMemo(()=>({router:n,navigator:E,static:!1,basename:C}),[n,E,C]);return k.createElement(k.Fragment,null,k.createElement(Ra.Provider,{value:_},k.createElement(Lp.Provider,{value:i},k.createElement(lI.Provider,{value:S.current},k.createElement(e1.Provider,{value:l},k.createElement(Xx,{basename:C,location:i.location,navigationType:i.historyAction,navigator:E,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?k.createElement(pI,{routes:n.routes,future:n.future,state:i}):e))))),null)}function pI(t){let{routes:e,future:n,state:r}=t;return Y0(e,void 0,r,n)}const mI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pt=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=Z0(e,nI),{basename:y}=k.useContext(qn),g,w=!1;if(typeof u=="string"&&gI.test(u)&&(g=u,mI))try{let m=new URL(window.location.href),E=u.startsWith("//")?new URL(m.protocol+u):new URL(u),C=zn(E.pathname,y);E.origin===m.origin&&C!=null?u=C+E.search+E.hash:w=!0}catch{}let S=Lx(u,{relative:i}),v=yI(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(m){r&&r(m),m.defaultPrevented||v(m)}return k.createElement("a",Ns({},f,{href:g||S,onClick:w||s?r:h,ref:n,target:l}))}),ti=k.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=Z0(e,rI),f=vc(l,{relative:d.relative}),y=Sn(),g=k.useContext(Lp),{navigator:w,basename:S}=k.useContext(qn),v=g!=null&&_I(f)&&u===!0,h=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,m=y.pathname,E=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(m=m.toLowerCase(),E=E?E.toLowerCase():null,h=h.toLowerCase()),E&&S&&(E=zn(E,S)||E);const C=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let _=m===h||!o&&m.startsWith(h)&&m.charAt(C)==="/",b=E!=null&&(E===h||!o&&E.startsWith(h)&&E.charAt(h.length)==="/"),I={isActive:_,isPending:b,isTransitioning:v},T=_?r:void 0,A;typeof s=="function"?A=s(I):A=[s,_?"active":null,b?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let j=typeof a=="function"?a(I):a;return k.createElement(Pt,Ns({},d,{"aria-current":T,className:A,ref:n,style:j,to:l,unstable_viewTransition:u}),typeof c=="function"?c(I):c)});var Gf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gf||(Gf={}));var Rv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rv||(Rv={}));function vI(t){let e=k.useContext(Ra);return e||Y(!1),e}function yI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Aa(),u=Sn(),c=vc(t,{relative:o});return k.useCallback(d=>{if(tI(d,n)){d.preventDefault();let f=r!==void 0?r:Ei(u)===Ei(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function _I(t,e){e===void 0&&(e={});let n=k.useContext(e1);n==null&&Y(!1);let{basename:r}=vI(Gf.useViewTransitionState),i=vc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=zn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=zn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Wf(i.pathname,o)!=null||Wf(i.pathname,s)!=null}var t1={exports:{}},wI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",EI=wI,SI=EI;function n1(){}function r1(){}r1.resetWarningCache=n1;var kI=function(){function t(r,i,s,o,a,l){if(l!==SI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r1,resetWarningCache:n1};return n.PropTypes=n,n};t1.exports=kI();var Jr=t1.exports;const R=Xu(Jr),qt=k.createContext({width:0,height:0,currentPage:"/",setCurrentPage:()=>{},fullscreen:!1,setFullscreen:()=>{}}),CI="_back_nyl46_1",gl={back:CI},gn="/assets/symbol-defs-2Ni26IT3.svg",Oa=t=>{const{width:e}=k.useContext(qt);let n=t.enableText?t.enableText:!0;return t.notLink?p.jsxs("button",{type:"button",className:t.className?`${gl.back} ${t.className}`:gl.back,onClick:t.onClick,children:[p.jsx("svg",{className:"icon icon-arrow_left",children:p.jsx("use",{xlinkHref:`${gn}#icon-arrow_left`})}),e>740&&n?p.jsx("span",{children:t.text?t.text:"Wróć"}):""]}):p.jsxs(Pt,{to:t.to?t.to:-1,className:t.className?`${gl.back} ${t.className}`:gl.back,children:[p.jsx("svg",{className:"icon icon-arrow_left",children:p.jsx("use",{xlinkHref:`${gn}#icon-arrow_left`})}),e>740&&n?p.jsx("span",{children:t.text?t.text:"Wróć"}):""]})};Oa.propTypes={to:R.string,text:R.string,enableText:R.bool,notLink:R.bool,className:R.string,onClick:R.func};const Av=[{name:"Wprowadzenie",element:"Intro",address:"/wiki"},{name:"Modele lotu w Armie 3",address:"/wiki/modele-lotu",keywords:["Arma 3","standardowy","zaawansowany"],article:{header:"Article title",content:"<p>Example article</p>"}},{name:"Sterowanie - sprzęt",element:"Gear",address:"/wiki/sprzet",keywords:["joystick","pedały","kalibracja","ustawienia","sterowniki","akcesoria","trackir","facetrack","vr","multiple monitors"],article:{header:"Sprzęt do latania",content:""}},{name:"Sterowanie - ustawienia w grze",element:"Settings",address:"/wiki/ustawienia-gry",keywords:["Arma 3","gra","czułość","martwa strefa","martwej strefy","przypisanie","controls"]},{name:"Kokpit - instrumenty",element:"Instruments",address:"/wiki/przyrzady",keywords:["prędkościomierz","wariometr","wysokoścomierz","sztuczny horyzont","żyrokompas","zakrętomierze i chyłomierze","akcelerometry","zegary","cabir air gauges","wskażnik temperatury zewnętrznej OAT","Flap Position Indicators","Kąt natarcia - AoA","Coupled Devices","akcesoria"]},{name:"Podstawy lotu",element:"Basics",address:"/wiki/podstawy-lotu"},{name:"Podstawy komunikacji",element:"Comms",address:"/wiki/podstawy-komunikacji"},{name:"Śmigłowce ze względu na przeznaczenie",element:"HeliPurpose",address:"/wiki/heli-przeznaczenie"},{name:"Śmigłowce ze względu na rozmiar",address:"/wiki/heli-rozmiar",article:{header:"Helikoptery ze względu na rozmiar",content:"<h3>Lekkie śmigłowce</h3><p>Śmigłowce lekkie służą do zwiadu lub transportu piechoty. Te helikoptery mogą unosić niewielkich rozmiarów ładunek na zawiesiu. Śmigłowce lekkie zwykle mają mniej pancerza, co nadrabiają manewrowością i niewielkimi gabarytami. Śmigłowce lekkie są idealne dla początkujących pilotów do nauki podstawowych manewrów.</p>"}},{name:"Śmigłowce - manewrowanie",element:"HeliManevouers",address:"/wiki/heli-manewry"},{name:"Samoloty ze względu na przeznaczenie",element:"PlanesPurpose",address:"/wiki/samoloty-przeznaczenie"}],La=k.createContext({isShown:!1,setIsShown:()=>{}}),bI="_search_126j5_1",xI="_placeholder_126j5_119",II="_reset_126j5_151",TI="_content_126j5_181",NI="_back_126j5_261",lr={search:bI,"search-container":"_search-container_126j5_43",placeholder:xI,reset:II,content:TI,back:NI,"search-placeholder":"_search-placeholder_126j5_269"},PI="_input_9pq5w_1",RI="_invalid_9pq5w_17",Wl={input:PI,invalid:RI},AI=()=>{const t=Sn(),e=k.useRef(),n=k.useRef(),[r,i]=k.useState(""),[s,o]=k.useState(!0),[a,l]=k.useState(Av),{setIsShown:u}=k.useContext(La),{setCurrentPage:c}=k.useContext(qt),d=k.useCallback(()=>Av.filter(E=>{let C=!1;return Object.values(E).forEach(_=>{C||(_.toString().toLowerCase().includes(r.toLowerCase())?C=!0:C=!1)}),C}),[r]);k.useEffect(()=>{r.trim()!==""?(o(!1),n.current.innerText="Pasujące artykuły"):(n.current.innerText="Wszystkie artykuły",o(!0)),l(d())},[r,d]),k.useEffect(()=>{e.current.focus()},[]);const f=()=>{e.current.focus()},y=E=>{i(E.target.value)},g=E=>{i(""),E.target.firstElementChild.focus()},w=E=>{E.preventDefault()},S=()=>{i(""),u(!1),c(t.pathname)},v=()=>{i(""),u(!1)},h=E=>{E.keyCode===27&&(i(""),u(!1),c(t.pathname))},m=p.jsx("nav",{className:lr.search,onKeyDown:h,children:p.jsxs("div",{className:lr["search-container"],children:[p.jsx(Oa,{className:lr.back,enableText:!1,notLink:!0,onClick:S}),p.jsxs("form",{onReset:g,onSubmit:w,children:[p.jsx("input",{type:"search",ref:e,className:Wl.input,id:"search",value:r,onInput:y}),s&&p.jsxs("div",{className:lr.placeholder,onClick:f,children:[p.jsx("svg",{className:"icon icon-magnifying_glass",children:p.jsx("use",{xlinkHref:`${gn}#icon-magnifying_glass`})})," ","Przeszukaj wiki"]}),!s&&p.jsx("button",{type:"reset",className:lr.reset,children:p.jsx("svg",{className:"icon icon-circle_xmark",children:p.jsx("use",{xlinkHref:`${gn}#icon-circle_xmark`})})})]}),p.jsxs("div",{className:lr.content,children:[p.jsx("h2",{ref:n,children:"Wszystkie artykuły"}),a.map((E,C)=>p.jsx(Pt,{to:E.address,onClick:v,children:E.name},C))]})]})});return Rp.createPortal(m,document.getElementById("overlays"))},i1=k.memo(()=>{const{setIsShown:t}=k.useContext(La),{setCurrentPage:e}=k.useContext(qt),n=()=>{t(!0),e("/szukaj")};return p.jsx("button",{type:"button",onClick:n,className:lr["search-placeholder"],children:p.jsxs("div",{className:lr.placeholder,children:[p.jsx("svg",{className:"icon icon-magnifying_glass",children:p.jsx("use",{xlinkHref:`${gn}#icon-magnifying_glass`})})," ","Przeszukaj wiki"]})})});i1.displayName="SearchPlaceholder";const OI="_menu_1u0wf_1",LI="_icon_1u0wf_127",DI="_highlight_1u0wf_135",Kr={menu:OI,icon:LI,highlight:DI};var Ov={};/**
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
 */const s1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(t,e){if(!t)throw Bs(e)},Bs=function(t){return new Error("Firebase Database ("+s1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const o1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[c],n[d],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new jI;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a1=function(t){const e=o1(t);return Dp.encodeByteArray(e,!0)},ku=function(t){return a1(t).replace(/\./g,"")},Cu=function(t){try{return Dp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FI(t){return l1(void 0,t)}function l1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!zI(n)||(t[n]=l1(t[n],e[n]));return t}function zI(t){return t!=="__proto__"}/**
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
 */function UI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $I=()=>UI().__FIREBASE_DEFAULTS__,WI=()=>{if(typeof process>"u"||typeof Ov>"u")return;const t=Ov.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cu(t[1]);return e&&JSON.parse(e)},Mp=()=>{try{return $I()||WI()||HI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},u1=t=>{var e,n;return(n=(e=Mp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BI=t=>{const e=u1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},c1=()=>{var t;return(t=Mp())===null||t===void 0?void 0:t.config},d1=t=>{var e;return(e=Mp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Da{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function VI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ku(JSON.stringify(n)),ku(JSON.stringify(o)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function GI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qI(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function h1(){return s1.NODE_ADMIN===!0}function KI(){try{return typeof indexedDB=="object"}catch{return!1}}function YI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const QI="FirebaseError";class Ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QI,Object.setPrototypeOf(this,Ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ma.prototype.create)}}class Ma{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?XI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ur(i,a,r)}}function XI(t,e){return t.replace(JI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const JI=/\{\$([^}]+)}/g;/**
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
 */function ca(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
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
 */const p1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ca(Cu(s[0])||""),n=ca(Cu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ZI=function(t){const e=p1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},eT=function(t){const e=p1(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ps(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function xu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lv(s)&&Lv(o)){if(!xu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lv(t){return t!==null&&typeof t=="object"}/**
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
 */function Vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class tT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function nT(t,e){const n=new rT(t,e);return n.subscribe.bind(n)}class rT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ed),i.error===void 0&&(i.error=Ed),i.complete===void 0&&(i.complete=Ed);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ed(){}function yc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const sT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_c=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class Si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class oT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Da;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lT(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aT(t){return t===Zr?void 0:t}function lT(t){return t.instantiationMode==="EAGER"}/**
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
 */class uT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const cT={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},dT=ue.INFO,fT={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},hT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fp{constructor(e){this.name=e,this._logLevel=dT,this._logHandler=hT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const pT=(t,e)=>e.some(n=>t instanceof n);let Dv,Mv;function mT(){return Dv||(Dv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gT(){return Mv||(Mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m1=new WeakMap,Kf=new WeakMap,g1=new WeakMap,Sd=new WeakMap,zp=new WeakMap;function vT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m1.set(n,t)}).catch(()=>{}),zp.set(e,t),e}function yT(t){if(Kf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kf.set(t,e)}let Yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _T(t){Yf=t(Yf)}function wT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kd(this),e,...n);return g1.set(r,e.sort?e.sort():[e]),xr(r)}:gT().includes(t)?function(...e){return t.apply(kd(this),e),xr(m1.get(this))}:function(...e){return xr(t.apply(kd(this),e))}}function ET(t){return typeof t=="function"?wT(t):(t instanceof IDBTransaction&&yT(t),pT(t,mT())?new Proxy(t,Yf):t)}function xr(t){if(t instanceof IDBRequest)return vT(t);if(Sd.has(t))return Sd.get(t);const e=ET(t);return e!==t&&(Sd.set(t,e),zp.set(e,t)),e}const kd=t=>zp.get(t);function ST(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const kT=["get","getKey","getAll","getAllKeys","count"],CT=["put","add","delete","clear"],Cd=new Map;function jv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cd.get(e))return Cd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cd.set(e,s),s}_T(t=>({...t,get:(e,n,r)=>jv(e,n)||t.get(e,n,r),has:(e,n)=>!!jv(e,n)||t.has(e,n)}));/**
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
 */class bT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qf="@firebase/app",Fv="0.9.27";/**
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
 */const ki=new Fp("@firebase/app"),IT="@firebase/app-compat",TT="@firebase/analytics-compat",NT="@firebase/analytics",PT="@firebase/app-check-compat",RT="@firebase/app-check",AT="@firebase/auth",OT="@firebase/auth-compat",LT="@firebase/database",DT="@firebase/database-compat",MT="@firebase/functions",jT="@firebase/functions-compat",FT="@firebase/installations",zT="@firebase/installations-compat",UT="@firebase/messaging",$T="@firebase/messaging-compat",WT="@firebase/performance",HT="@firebase/performance-compat",BT="@firebase/remote-config",VT="@firebase/remote-config-compat",GT="@firebase/storage",qT="@firebase/storage-compat",KT="@firebase/firestore",YT="@firebase/firestore-compat",QT="firebase",XT="10.8.0";/**
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
 */const Xf="[DEFAULT]",JT={[Qf]:"fire-core",[IT]:"fire-core-compat",[NT]:"fire-analytics",[TT]:"fire-analytics-compat",[RT]:"fire-app-check",[PT]:"fire-app-check-compat",[AT]:"fire-auth",[OT]:"fire-auth-compat",[LT]:"fire-rtdb",[DT]:"fire-rtdb-compat",[MT]:"fire-fn",[jT]:"fire-fn-compat",[FT]:"fire-iid",[zT]:"fire-iid-compat",[UT]:"fire-fcm",[$T]:"fire-fcm-compat",[WT]:"fire-perf",[HT]:"fire-perf-compat",[BT]:"fire-rc",[VT]:"fire-rc-compat",[GT]:"fire-gcs",[qT]:"fire-gcs-compat",[KT]:"fire-fst",[YT]:"fire-fst-compat","fire-js":"fire-js",[QT]:"fire-js-all"};/**
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
 */const Iu=new Map,Jf=new Map;function ZT(t,e){try{t.container.addComponent(e)}catch(n){ki.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(Jf.has(e))return ki.debug(`There were multiple attempts to register component ${e}.`),!1;Jf.set(e,t);for(const n of Iu.values())ZT(n,t);return!0}function Up(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const eN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ir=new Ma("app","Firebase",eN);/**
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
 */class tN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=XT;function v1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=c1()),!n)throw Ir.create("no-options");const s=Iu.get(i);if(s){if(xu(n,s.options)&&xu(r,s.config))return s;throw Ir.create("duplicate-app",{appName:i})}const o=new uT(i);for(const l of Jf.values())o.addComponent(l);const a=new tN(n,r,o);return Iu.set(i,a),a}function y1(t=Xf){const e=Iu.get(t);if(!e&&t===Xf&&c1())return v1();if(!e)throw Ir.create("no-app",{appName:t});return e}function Tr(t,e,n){var r;let i=(r=JT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ki.warn(a.join(" "));return}Rs(new Si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nN="firebase-heartbeat-database",rN=1,da="firebase-heartbeat-store";let bd=null;function _1(){return bd||(bd=ST(nN,rN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(da)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),bd}async function iN(t){try{const n=(await _1()).transaction(da),r=await n.objectStore(da).get(w1(t));return await n.done,r}catch(e){if(e instanceof Ur)ki.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ki.warn(n.message)}}}async function zv(t,e){try{const r=(await _1()).transaction(da,"readwrite");await r.objectStore(da).put(e,w1(t)),await r.done}catch(n){if(n instanceof Ur)ki.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ki.warn(r.message)}}}function w1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sN=1024,oN=30*24*60*60*1e3;class aN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=oN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uv(),{heartbeatsToSend:r,unsentEntries:i}=lN(this._heartbeatsCache.heartbeats),s=ku(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Uv(){return new Date().toISOString().substring(0,10)}function lN(t,e=sN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$v(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$v(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KI()?YI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $v(t){return ku(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cN(t){Rs(new Si("platform-logger",e=>new bT(e),"PRIVATE")),Rs(new Si("heartbeat",e=>new aN(e),"PRIVATE")),Tr(Qf,Fv,t),Tr(Qf,Fv,"esm2017"),Tr("fire-js","")}cN("");var dN="firebase",fN="10.8.0";/**
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
 */Tr(dN,fN,"app");const hN={apiKey:"AIzaSyCx6s29WHuk-RrXJPdJYIbe3Hi4q13-WLc",authDomain:"ptap-articles.firebaseapp.com",databaseURL:"https://ptap-articles-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ptap-articles",storageBucket:"ptap-articles.appspot.com",messagingSenderId:"741718300001",appId:"1:741718300001:web:6e16244aa1f3f0760ce120"},Zf=v1(hN);function $p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function E1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pN=E1,S1=new Ma("auth","Firebase",E1());/**
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
 */const Tu=new Fp("@firebase/auth");function mN(t,...e){Tu.logLevel<=ue.WARN&&Tu.warn(`Auth (${Gs}): ${t}`,...e)}function Hl(t,...e){Tu.logLevel<=ue.ERROR&&Tu.error(`Auth (${Gs}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw Wp(t,...e)}function wn(t,...e){return Wp(t,...e)}function k1(t,e,n){const r=Object.assign(Object.assign({},pN()),{[e]:n});return new Ma("auth","Firebase",r).create(e,{appName:t.name})}function gN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gt(t,"argument-error"),k1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return S1.create(t,...e)}function K(t,e,...n){if(!t)throw Wp(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hl(e),new Error(e)}function Un(t,e){t||Nn(e)}/**
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
 */function eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vN(){return Wv()==="http:"||Wv()==="https:"}function Wv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vN()||GI()||"connection"in navigator)?navigator.onLine:!0}function _N(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=jp()||f1()}get(){return yN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hp(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class C1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const EN=new ja(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yn(t,e,n,r,i={}){return b1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),C1.fetch()(x1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function b1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wN),e);try{const i=new kN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw k1(t,c,u);Gt(t,c)}}catch(i){if(i instanceof Ur)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function Fa(t,e,n,r,i={}){const s=await Yn(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function x1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hp(t.config,i):`${t.config.apiScheme}://${i}`}function SN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),EN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}function Hv(t){return t!==void 0&&t.enterprise!==void 0}class CN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bN(t,e){return Yn(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
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
 */async function xN(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function IN(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TN(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=Bp(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fo(xd(i.auth_time)),issuedAtTime:Fo(xd(i.iat)),expirationTime:Fo(xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xd(t){return Number(t)*1e3}function Bp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cu(n);return i?JSON.parse(i):(Hl("Failed to decode base64 JWT payload"),null)}catch(i){return Hl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function NN(t){const e=Bp(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function As(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ur&&PN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class RN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class I1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await As(t,IN(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?LN(s.providerUserInfo):[],a=ON(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new I1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function AN(t){const e=mt(t);await Nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ON(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function LN(t){return t.map(e=>{var{providerId:n}=e,r=$p(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function DN(t,e){const n=await b1(t,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=x1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MN(t,e){return Yn(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
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
 */class fa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fa;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fa,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function rr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new I1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await As(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TN(this,e)}reload(){return AN(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await As(this,xN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:C,providerData:_,stsTokenManager:b}=n;K(m&&b,e,"internal-error");const I=fa.fromJSON(this.name,b);K(typeof m=="string",e,"internal-error"),rr(d,e.name),rr(f,e.name),K(typeof E=="boolean",e,"internal-error"),K(typeof C=="boolean",e,"internal-error"),rr(y,e.name),rr(g,e.name),rr(w,e.name),rr(S,e.name),rr(v,e.name),rr(h,e.name);const T=new hi({uid:m,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:C,photoURL:g,phoneNumber:y,tenantId:w,stsTokenManager:I,createdAt:v,lastLoginAt:h});return _&&Array.isArray(_)&&(T.providerData=_.map(A=>Object.assign({},A))),S&&(T._redirectEventId=S),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new fa;i.updateFromServerResponse(n);const s=new hi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nu(s),s}}/**
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
 */const Bv=new Map;function Pn(t){Un(t instanceof Function,"Expected a class definition");let e=Bv.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bv.set(t,e),e)}/**
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
 */class T1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}T1.type="NONE";const Vv=T1;/**
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
 */function Bl(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(Pn(Vv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pn(Vv);const o=Bl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=hi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ms(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ms(s,e,r))}}/**
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
 */function Gv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(R1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O1(e))return"Blackberry";if(L1(e))return"Webos";if(Vp(e))return"Safari";if((e.includes("chrome/")||P1(e))&&!e.includes("edge/"))return"Chrome";if(A1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function N1(t=lt()){return/firefox\//i.test(t)}function Vp(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P1(t=lt()){return/crios\//i.test(t)}function R1(t=lt()){return/iemobile/i.test(t)}function A1(t=lt()){return/android/i.test(t)}function O1(t=lt()){return/blackberry/i.test(t)}function L1(t=lt()){return/webos/i.test(t)}function wc(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jN(t=lt()){var e;return wc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FN(){return qI()&&document.documentMode===10}function D1(t=lt()){return wc(t)||A1(t)||L1(t)||O1(t)||/windows phone/i.test(t)||R1(t)}function zN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function M1(t,e=[]){let n;switch(t){case"Browser":n=Gv(lt());break;case"Worker":n=`${Gv(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${r}`}/**
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
 */class UN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(t,e={}){return Yn(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=6;class HN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class BN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qv(this),this.idTokenSubscription=new qv(this),this.beforeStateQueue=new UN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $N(this),n=new HN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ma("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wr(t){return mt(t)}class qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=nT(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VN(t){Ec=t}function j1(t){return Ec.loadJS(t)}function GN(){return Ec.recaptchaEnterpriseScript}function qN(){return Ec.gapiScript}function KN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const YN="recaptcha-enterprise",QN="NO_RECAPTCHA";class XN{constructor(e){this.type=YN,this.auth=Wr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{bN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new CN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Hv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(QN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Hv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=GN();l.length!==0&&(l+=a),j1(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Kv(t,e,n,r=!1){const i=new XN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function th(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Kv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function JN(t,e){const n=Up(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xu(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function ZN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eP(t,e,n){const r=Wr(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=F1(e),{host:o,port:a}=tP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nP()}function F1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tP(t){const e=F1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yv(o)}}}function Yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function rP(t,e){return Yn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function iP(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
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
 */async function sP(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function oP(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
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
 */class ha extends Gp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ha(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ha(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return th(e,n,"signInWithPassword",iP);case"emailLink":return sP(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return th(e,r,"signUpPassword",rP);case"emailLink":return oP(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gs(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
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
 */const aP="http://localhost";class Ci extends Gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$p(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:aP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vs(n)}return e}}/**
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
 */function lP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uP(t){const e=Co(bo(t)).link,n=e?Co(bo(e)).deep_link_id:null,r=Co(bo(t)).deep_link_id;return(r?Co(bo(r)).link:null)||r||n||e||t}class qp{constructor(e){var n,r,i,s,o,a;const l=Co(bo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=lP((i=l.mode)!==null&&i!==void 0?i:null);K(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uP(e);try{return new qp(n)}catch{return null}}}/**
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
 */class qs{constructor(){this.providerId=qs.PROVIDER_ID}static credential(e,n){return ha._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qp.parseLink(n);return K(r,"argument-error"),ha._fromEmailAndCode(e,r.code,r.tenantId)}}qs.PROVIDER_ID="password";qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class za extends Kp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dr extends za{constructor(){super("facebook.com")}static credential(e){return Ci._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
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
 */class xn extends za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ci._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class fr extends za{constructor(){super("github.com")}static credential(e){return Ci._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class hr extends za{constructor(){super("twitter.com")}static credential(e,n){return Ci._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function cP(t,e){return Fa(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
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
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hi._fromIdTokenResponse(e,r,i),o=Qv(r);return new bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qv(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pu extends Ur{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Pu(e,n,r,i)}}function z1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pu._fromErrorAndOperation(t,s,e,r):s})}async function dP(t,e,n=!1){const r=await As(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
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
 */async function fP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await As(t,z1(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Bp(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
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
 */async function U1(t,e,n=!1){const r="signIn",i=await z1(t,r,e),s=await bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function hP(t,e){return U1(Wr(t),e)}/**
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
 */async function $1(t){const e=Wr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pP(t,e,n){const r=Wr(t),o=await th(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$1(t),l}),a=await bi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function mP(t,e,n){return hP(mt(t),qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$1(t),r})}/**
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
 */async function gP(t,e){return Yn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function vP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=mt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await As(r,gP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function yP(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function _P(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function wP(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}function EP(t){return mt(t).signOut()}const Ru="__sak";/**
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
 */class W1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ru,"1"),this.storage.removeItem(Ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function SP(){const t=lt();return Vp(t)||wc(t)}const kP=1e3,CP=10;class H1 extends W1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SP()&&zN(),this.fallbackToPolling=D1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}H1.type="LOCAL";const bP=H1;/**
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
 */class B1 extends W1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}B1.type="SESSION";const V1=B1;/**
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
 */function xP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await xP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
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
 */function Yp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Yp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function TP(t){En().location.href=t}/**
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
 */function G1(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function NP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RP(){return G1()?self:null}/**
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
 */const q1="firebaseLocalStorageDb",AP=1,Au="firebaseLocalStorage",K1="fbase_key";class Ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Au],e?"readwrite":"readonly").objectStore(Au)}function OP(){const t=indexedDB.deleteDatabase(q1);return new Ua(t).toPromise()}function nh(){const t=indexedDB.open(q1,AP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Au,{keyPath:K1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Au)?e(r):(r.close(),await OP(),e(await nh()))})})}async function Xv(t,e,n){const r=kc(t,!0).put({[K1]:e,value:n});return new Ua(r).toPromise()}async function LP(t,e){const n=kc(t,!1).get(e),r=await new Ua(n).toPromise();return r===void 0?null:r.value}function Jv(t,e){const n=kc(t,!0).delete(e);return new Ua(n).toPromise()}const DP=800,MP=3;class Y1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(RP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NP(),!this.activeServiceWorker)return;this.sender=new IP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nh();return await Xv(e,Ru,"1"),await Jv(e,Ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kc(i,!1).getAll();return new Ua(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y1.type="LOCAL";const jP=Y1;new ja(3e4,6e4);/**
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
 */function Q1(t,e){return e?Pn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qp extends Gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FP(t){return U1(t.auth,new Qp(t),t.bypassAuthState)}function zP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),fP(n,new Qp(t),t.bypassAuthState)}async function UP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),dP(n,new Qp(t),t.bypassAuthState)}/**
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
 */class X1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FP;case"linkViaPopup":case"linkViaRedirect":return UP;case"reauthViaPopup":case"reauthViaRedirect":return zP;default:Gt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $P=new ja(2e3,1e4);async function WP(t,e,n){const r=Wr(t);gN(t,e,Kp);const i=Q1(r,n);return new ai(r,"signInViaPopup",e,i).executeNotNull()}class ai extends X1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Yp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$P.get())};e()}}ai.currentPopupAction=null;/**
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
 */const HP="pendingRedirect",Vl=new Map;class BP extends X1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await VP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VP(t,e){const n=KP(e),r=qP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GP(t,e){Vl.set(t._key(),e)}function qP(t){return Pn(t._redirectPersistence)}function KP(t){return Bl(HP,t.config.apiKey,t.name)}async function YP(t,e,n=!1){const r=Wr(t),i=Q1(r,e),o=await new BP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const QP=10*60*1e3;class XP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!J1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zv(e))}saveEventToCache(e){this.cachedEventUids.add(Zv(e)),this.lastProcessedEventTime=Date.now()}}function Zv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J1(t);default:return!1}}/**
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
 */async function ZP(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
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
 */const eR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tR=/^https?/;async function nR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZP(t);for(const n of e)try{if(rR(n))return}catch{}Gt(t,"unauthorized-domain")}function rR(t){const e=eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tR.test(n))return!1;if(eR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iR=new ja(3e4,6e4);function ey(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sR(t){return new Promise((e,n)=>{var r,i,s;function o(){ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ey(),n(wn(t,"network-request-failed"))},timeout:iR.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const a=KN("iframefcb");return En()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},j1(`${qN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gl=null,e})}let Gl=null;function oR(t){return Gl=Gl||sR(t),Gl}/**
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
 */const aR=new ja(5e3,15e3),lR="__/auth/iframe",uR="emulator/auth/iframe",cR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hp(e,uR):`https://${t.config.authDomain}/${lR}`,r={apiKey:e.apiKey,appName:t.name,v:Gs},i=dR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vs(r).slice(1)}`}async function hR(t){const e=await oR(t),n=En().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:fR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=En().setTimeout(()=>{s(o)},aR.get());function l(){En().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const pR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mR=500,gR=600,vR="_blank",yR="http://localhost";class ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _R(t,e,n,r=mR,i=gR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=lt().toLowerCase();n&&(a=P1(u)?vR:n),N1(u)&&(e=e||yR,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[y,g])=>`${f}${y}=${g},`,"");if(jN(u)&&a!=="_self")return wR(e||"",a),new ty(null);const d=window.open(e||"",a,c);K(d,t,"popup-blocked");try{d.focus()}catch{}return new ty(d)}function wR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ER="__/auth/handler",SR="emulator/auth/handler",kR=encodeURIComponent("fac");async function ny(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gs,eventId:i};if(e instanceof Kp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof za){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${kR}=${encodeURIComponent(l)}`:"";return`${CR(t)}?${Vs(a).slice(1)}${u}`}function CR({config:t}){return t.emulator?Hp(t,SR):`https://${t.authDomain}/${ER}`}/**
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
 */const Id="webStorageSupport";class bR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=V1,this._completeRedirectFn=YP,this._overrideRedirectResult=GP}async _openPopup(e,n,r,i){var s;Un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ny(e,n,r,eh(),i);return _R(e,o,Yp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ny(e,n,r,eh(),i);return TP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hR(e),r=new XP(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Id,{type:Id},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Id];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return D1()||Vp()||wc()}}const xR=bR;var ry="@firebase/auth",iy="1.6.0";/**
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
 */class IR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NR(t){Rs(new Si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M1(t)},u=new BN(r,i,s,l);return ZN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rs(new Si("auth-internal",e=>{const n=Wr(e.getProvider("auth").getImmediate());return(r=>new IR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(ry,iy,TR(t)),Tr(ry,iy,"esm2017")}/**
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
 */const PR=5*60,RR=d1("authIdTokenMaxAge")||PR;let sy=null;const AR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RR)return;const i=n==null?void 0:n.token;sy!==i&&(sy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OR(t=y1()){const e=Up(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JN(t,{popupRedirectResolver:xR,persistence:[jP,bP,V1]}),r=d1("authTokenSyncURL");if(r){const s=AR(r);_P(n,s,()=>s(n.currentUser)),yP(n,o=>s(o))}const i=u1("auth");return i&&eP(n,`http://${i}`),n}function LR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NR("Browser");const Td={user:null,isLogged:!1,isCreateSuccess:!1},Di=()=>{const t=OR(Zf),[e,n]=k.useState(null),[r,i]=k.useState(null);return k.useEffect(()=>{wP(t,u=>{u?(i(u),n(u.uid),sessionStorage.setItem("uid",u.uid)):(i(null),n(null),sessionStorage.removeItem("uid"))})},[t]),{uid:e,currentUser:r,createUser:async(u,c,d)=>{let f=Td;return await pP(t,u,c).then(y=>{f.isCreateSuccess=!0,f.user=y.user,vP(f.user,{displayName:d})}).catch(y=>{throw new Error(y.code)}),f},loginWithEmail:async(u,c)=>{let d=Td;return await mP(t,u,c).then(f=>{d.isLogged=!0,d.user=f.user}).catch(f=>{throw new Error(f.code)}),d},loginWithGoogle:async(u="")=>{let c=Td;const d=new xn;return u.length>=3&&d.setCustomParameters({login_hint:u}),await WP(t,d).then(f=>{c.isLogged=!0,c.user=f.user}).catch(f=>{throw new Error(f.code)}),c},logout:async()=>{EP(t).then(()=>"Nastąpiło wylogowanie").catch(u=>{throw new Error(u.code)})}}},yl=(t,e)=>{let n=t===e;return t!=="/"&&(t=t.split("/"),n=e.includes(t[1])),n},Z1=k.memo(()=>{const{uid:t}=Di(),{setIsShown:e}=k.useContext(La),{currentPage:n,setCurrentPage:r}=k.useContext(qt),i=[{name:"Główna",path:"/",icon:"icon-house",type:"link"},{name:"Szukaj",path:"/szukaj",icon:"icon-magnifying_glass",type:"button"},{name:"Wiki",path:"/wiki",icon:"icon-globe",type:"link"},{name:t?"Wyloguj się":"Zapisz się",path:t?"/wylogowanie":"/rejestracja",icon:t?"icon-signout":"icon-signup",type:"link"}],s=()=>{e(!1)},o=()=>{e(!0),r("/szukaj")},a=p.jsx("nav",{className:Kr.menu,children:p.jsx("ul",{children:i.map(l=>p.jsx("li",{children:l.type==="link"?p.jsxs(ti,{to:l.path,className:yl(n,l.path)?Kr.highlight:"",onClick:()=>{s()},children:[yl(n,l.path)?p.jsx("svg",{className:`icon ${Kr.icon} ${l.icon}_solid`,children:p.jsx("use",{xlinkHref:`${gn}#${l.icon}_solid`})}):p.jsx("svg",{className:`icon ${Kr.icon} ${l.icon}`,children:p.jsx("use",{xlinkHref:`${gn}#${l.icon}`})}),l.name]}):p.jsxs("div",{onClick:o,to:l.path,className:yl(n,l.path)?Kr.highlight:"",children:[yl(n,l.path)?p.jsx("svg",{className:`icon ${Kr.icon} ${l.icon}_solid`,children:p.jsx("use",{xlinkHref:`${gn}#${l.icon}_solid`})}):p.jsx("svg",{className:`icon ${Kr.icon} ${l.icon}`,children:p.jsx("use",{xlinkHref:`${gn}#${l.icon}`})}),l.name]})},l.name))})});return Rp.createPortal(a,document.getElementById("overlays"))});Z1.displayName="MobileMenu";const eE="/assets/logo-XiXNVKKa.webp",DR="_nav_nui6g_1",MR={nav:DR},tE=k.memo(()=>{const{uid:t}=Di(),{width:e}=k.useContext(qt);let n=e>1044?"PTAP":"",r=p.jsxs(p.Fragment,{children:[p.jsxs(Pt,{to:"/",title:"Przejdź na stronę główną",children:[p.jsx("img",{src:eE,width:"50",height:"50",alt:"logo"}),p.jsx("h2",{children:n})]}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(ti,{to:"/",children:"Strona główna"})}),p.jsx("li",{children:p.jsx(ti,{to:"/wiki",children:"Wiki"})}),t&&p.jsx("li",{children:p.jsx(ti,{to:"/editor",children:"Konsola"})}),p.jsx("li",{children:t?p.jsx(ti,{to:"/wylogowanie",children:"Wyloguj się"}):p.jsx(ti,{to:"/rejestracja",children:"Zapisz się"})}),p.jsx("li",{children:p.jsx(i1,{})})]})]});return p.jsx(p.Fragment,{children:e>875?p.jsx("nav",{className:MR.nav,children:r}):p.jsx(Z1,{})})});tE.displayName="Nav";const jR="_footer_2dfaa_1",FR="_bottom_2dfaa_69",Nd={footer:jR,bottom:FR},Hr=k.memo(()=>{const[t,e]=k.useState(0),{width:n}=k.useContext(qt);return k.useEffect(()=>{document.querySelector("nav")&&n<=740?e(document.querySelector("nav").clientHeight):e(0)},[n]),p.jsxs("footer",{className:Nd.footer,style:{marginBottom:`${t}px`},children:[p.jsx("div",{className:Nd.top,children:p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(Pt,{to:"/sign-up",children:"Zapisz się do projektu"})}),p.jsx("li",{children:p.jsx(Pt,{to:"/feedback",children:"Zgłoś błąd na stronie"})}),p.jsx("li",{children:p.jsx(Pt,{to:"/editor",children:"Edytor artykułów"})})]})}),p.jsx("div",{className:Nd.bottom,children:p.jsx("p",{children:"PTAP 2024 © Wszelkie prawa zastrzeżone"})})]})});Hr.displayName="Fotter";const zR=()=>{let t;const e=[],n={vendor:void 0,id:void 0,src:void 0,thumbnail:void 0,title:void 0,initialized:!1,y:void 0,debounce:250,lazyload:!0,autoplay:!0,initinview:!1,onLoad:g=>{},onAppend:g=>{},onThumbnailLoad:g=>{}},r={regex:{youtube_nocookie:/(?:youtube-nocookie\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=)))([a-zA-Z0-9_-]{6,11})/,youtube:/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,vimeo:/vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/},condition:{youtube:g=>g&&g[1].length==11?g[1]:!1,youtube_nocookie:g=>g&&g[1].length==11?g[1]:!1,vimeo:g=>g&&g[1].length===9||g[1].length===8?g[1]:!1},src:{youtube:g=>`https://www.youtube.com/embed/${g.id}/?autoplay=${g.autoplay?"1":"0"}&${g.query}`,youtube_nocookie:g=>`https://www.youtube-nocookie.com/embed/${g.id}/?autoplay=${g.autoplay?"1":"0"}&${g.query}`,vimeo:g=>`https://player.vimeo.com/video/${g.id}/?autoplay=${g.autoplay?"1":"0"}&${g.query}`},endpoint:g=>`https://noembed.com/embed?url=${g.src}`,response:{title:g=>g.title,thumbnail:g=>g.thumbnail_url}};function i(g,...w){if(t=Object.assign({},n,w[0]),typeof g=="string"){const S=document.querySelectorAll(g);for(let v=0;v<S.length;v++)s(S[v])}else if(typeof g.length>"u")s(g);else for(let S=0;S<g.length;S++)s(g[S]);t.lazyload&&d()}function s(g){if(!(g instanceof HTMLElement)||g.classList.contains("lazyframe--loaded"))return;const w={el:g,settings:o(g)};w.el.addEventListener("click",()=>{w.el.appendChild(w.iframe);const S=g.querySelectorAll("iframe");w.settings.onAppend.call(this,S[0])}),t.lazyload?f(w):u(w,!!w.settings.thumbnail)}function o(g){const w=Array.prototype.slice.apply(g.attributes).filter(v=>v.value!=="").reduce((v,h)=>{let m=h.name.indexOf("data-")===0?h.name.split("data-")[1]:h.name;return v[m]=h.value,v},{}),S=Object.assign({},t,w,{y:g.offsetTop,originalSrc:w.src,query:a(w.src)});if(S.vendor){const v=S.src.match(r.regex[S.vendor]);S.id=r.condition[S.vendor](v)}return S}function a(g){const w=g.split("?");return w[1]?w[1]:null}function l(g){return g.vendor?!g.title||!g.thumbnail:!1}function u(g){l(g.settings)?c(g,(w,S)=>{if(w)return;const v=S[0],h=S[1];if(h.settings.title||(h.settings.title=r.response.title(v)),!h.settings.thumbnail){const m=r.response.thumbnail(v);h.settings.thumbnail=m,g.settings.onThumbnailLoad.call(this,m)}f(h,!0)}):f(g,!0)}function c(g,w){const S=r.endpoint(g.settings),v=new XMLHttpRequest;v.open("GET",S,!0),v.onload=function(){if(v.status>=200&&v.status<400){const h=JSON.parse(v.responseText);w(null,[h,g])}else w(!0)},v.onerror=function(){w(!0)},v.send()}function d(){const g=window.innerHeight;let w=e.length;const S=(C,_)=>{C.settings.initialized=!0,C.el.classList.add("lazyframe--loaded"),w--,u(C),C.settings.initinview&&C.el.click(),C.settings.onLoad.call(this,C)};e.filter(C=>C.settings.y<g).forEach(S);const v=E(()=>{m=h<window.pageYOffset,h=window.pageYOffset,m&&e.filter(C=>C.settings.y<g+h&&C.settings.initialized===!1).forEach(S),w===0&&window.removeEventListener("scroll",v,!1)},t.debounce);let h=0,m=!1;window.addEventListener("scroll",v,!1);function E(C,_,b){let I;return function(){let T=this,A=arguments,j=function(){I=null,b||C.apply(T,A)},ie=b&&!I;clearTimeout(I),I=setTimeout(j,_),ie&&C.apply(T,A)}}}function f(g,w){if(g.iframe=y(g.settings),g.settings.thumbnail&&w&&(g.el.style.backgroundImage=`url(${g.settings.thumbnail})`),g.settings.title&&g.el.children.length===0){const S=document.createDocumentFragment(),v=document.createElement("span");v.className="lazyframe__title",v.innerHTML=g.settings.title,S.appendChild(v),g.el.appendChild(S)}t.lazyload||(g.el.classList.add("lazyframe--loaded"),g.settings.onLoad.call(this,g),e.push(g)),g.settings.initialized||e.push(g)}function y(g){const w=document.createDocumentFragment(),S=document.createElement("iframe");return g.vendor&&(g.src=r.src[g.vendor](g)),S.setAttribute("id",`lazyframe-${g.id}`),S.setAttribute("src",g.src),S.setAttribute("frameborder",0),S.setAttribute("allowfullscreen",""),g.autoplay&&(S.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),w.appendChild(S),w}return i},UR=zR(),rh=t=>{const e=k.useCallback(()=>{},[]);return document.addEventListener("touchstart",e,{passive:!0}),UR(".lazyframe"),p.jsxs("div",{className:t.video,children:[p.jsx("p",{children:t.header?t.header:""}),p.jsx("iframe",{className:`${t.className?t.className:""} lazyframe`,width:t.width?t.width:"560",height:t.height?t.height:"315",src:t.src?t.src:"",title:t.title?t.title:"YouTube video player",allow:t.allow?t.allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})};rh.propTypes={video:R.string.isRequired,header:R.string,className:R.string,width:R.string,height:R.string,src:R.string,title:R.string,allow:R.bool};const $R="_button_1n3hg_1",WR="_highlight_1n3hg_37",Ou={button:$R,"button-link":"_button-link_1n3hg_3",highlight:WR},xi=({to:t,className:e,highlighted:n,onClick:r,children:i})=>(n==null&&(n=!0),p.jsx(Pt,{to:t,className:`${Ou["button-link"]} ${e||""} ${n?Ou.highlight:""}`,onClick:r||(()=>{}),children:i}));xi.propTypes={to:R.string.isRequired,className:R.string,highlighted:R.bool,onClick:R.func,children:R.any};const tn=({to:t,className:e,highlighted:n,type:r,onClick:i,children:s})=>{const o=Aa(),a=()=>{o(t,{replace:!0})};return n==null&&(n=!0),p.jsx("button",{type:r||"button",onClick:()=>{t&&a(),i&&i()},className:`${Ou.button} ${e||""} ${n?Ou.highlight:""}`,children:s})};tn.propTypes={to:R.string,className:R.string,highlighted:R.bool,type:R.string,onClick:R.func,children:R.any};const HR="/assets/autorotacja-xlzg4YxB.webp",BR="_iframe_1077n_85",VR="_video_1077n_101",GR="_figure_1077n_207",Hi={"index-banner":"_index-banner_1077n_1",iframe:BR,video:VR,figure:GR},qR=()=>{const{width:t}=k.useContext(qt);return p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx("section",{className:`section ${Hi["index-banner"]}`,children:p.jsxs("header",{children:[t<=740?p.jsx("img",{src:eE,alt:"Logo",width:"100",height:"100"}):"",p.jsx("h1",{children:"PTAP"}),p.jsx("h2",{children:"Pilot Training Arma Project"}),p.jsx("p",{children:"Projekt mający na celu nauczenie graczy Arma 3 podstaw latania śmigłowcami. Na stronie zapoznasz się z podstawowymi manewrami, które pozwolą Ci na bezpieczne lądowanie i startowanie. Poradniki dotyczące sprzętu jak i bardziej szczegółowe opisy są dostępne w sekcji Wiki."})]})}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{children:"Autorotacja"}),p.jsx("p",{children:"Manewr wykorzystywany do awaryjnego lądowania. Dzięki energii z powietrza, łopaty wirnika głównego pobudzane są do ruchu co pozwala na opanowanie maszyny i bezpieczne posadzenie jej na ziemię."}),p.jsxs("figure",{className:Hi.figure,children:[p.jsx("img",{src:HR,alt:"Zdjęcie ukazujące przepływ powietrza podczas autorotacji",width:"332",height:"187"}),p.jsx("figcaption",{children:"Przepływ powietrza podczas autorotacji"})]})]}),p.jsxs("section",{className:"section",children:[p.jsx(rh,{video:Hi.video,src:"https://www.youtube.com/embed/v8pn1f3ijLI",className:Hi.iframe,header:"Autorotacja little birdem"}),p.jsx(rh,{video:Hi.video,src:"https://www.youtube.com/embed/videoseries?list=PLsQ6ua1LSZQwRoOCiVa-0d1eL9wk0aVGj",className:Hi.iframe,header:"Manewry little birdem"})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{children:"Wiki"}),p.jsx("h3",{children:"Zobacz więcej artykułów na wiki"}),p.jsx(xi,{to:"/wiki",children:"Przejdź do wiki"})]})]}),p.jsx(Hr,{})]})},KR=()=>{const t=Sn(),e=/\/wiki\/.*/i.test(t.pathname);return p.jsxs(p.Fragment,{children:[e?p.jsx(Oa,{}):"",p.jsx("main",{children:p.jsx("section",{className:"section",children:p.jsx(J0,{})})}),p.jsx(Hr,{})]})};var oy={};const ay="@firebase/database",ly="1.0.3";/**
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
 */let nE="";function YR(t){nE=t}/**
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
 */class QR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ca(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class XR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const rE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QR(e)}}catch{}return new XR},li=rE("localStorage"),ih=rE("sessionStorage");/**
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
 */const vs=new Fp("@firebase/database"),JR=function(){let t=1;return function(){return t++}}(),iE=function(t){const e=sT(t),n=new tT;n.update(e);const r=n.digest();return Dp.encodeByteArray(r)},$a=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=$a.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let pi=null,uy=!0;const ZR=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(vs.logLevel=ue.VERBOSE,pi=vs.log.bind(vs),e&&ih.set("logging_enabled",!0)):typeof t=="function"?pi=t:(pi=null,ih.remove("logging_enabled"))},et=function(...t){if(uy===!0&&(uy=!1,pi===null&&ih.get("logging_enabled")===!0&&ZR(!0)),pi){const e=$a.apply(null,t);pi(e)}},Wa=function(t){return function(...e){et(t,...e)}},sh=function(...t){const e="FIREBASE INTERNAL ERROR: "+$a(...t);vs.error(e)},$n=function(...t){const e=`FIREBASE FATAL ERROR: ${$a(...t)}`;throw vs.error(e),new Error(e)},ft=function(...t){const e="FIREBASE WARNING: "+$a(...t);vs.warn(e)},eA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ft("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Os="[MIN_NAME]",Ii="[MAX_NAME]",Mi=function(t,e){if(t===e)return 0;if(t===Os||e===Ii)return-1;if(e===Os||t===Ii)return 1;{const n=cy(t),r=cy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nA=function(t,e){return t===e?0:t<e?-1:1},go=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},Jp=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=Jp(t[e[r]]);return n+="}",n},sE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const oE=function(t){D(!Xp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},rA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const oA=new RegExp("^-?(0*)\\d{1,10}$"),aA=-2147483648,lA=2147483647,cy=function(t){if(oA.test(t)){const e=Number(t);if(e>=aA&&e<=lA)return e}return null},Ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ft("Exception was thrown by user callback.",n),e},Math.floor(0))}},uA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class cA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ft(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class dA{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ft(e)}}class ys{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ys.OWNER="owner";/**
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
 */const Zp="5",aE="v",lE="s",uE="r",cE="f",dE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fE="ls",hE="p",oh="ac",pE="websocket",mE="long_polling";/**
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
 */class gE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=li.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&li.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vE(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===pE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fA(t)&&(n.ns=t.namespace);const i=[];return rt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class hA{constructor(){this.counters_={}}incrementCounter(e,n=1){kn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FI(this.counters_)}}/**
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
 */const Pd={},Rd={};function em(t){const e=t.toString();return Pd[e]||(Pd[e]=new hA),Pd[e]}function pA(t,e){const n=t.toString();return Rd[n]||(Rd[n]=e()),Rd[n]}/**
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
 */class mA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ks(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const dy="start",gA="close",vA="pLPCommand",yA="pRTLPCB",yE="id",_E="pw",wE="ser",_A="cb",wA="seg",EA="ts",SA="d",kA="dframe",EE=1870,SE=30,CA=EE-SE,bA=25e3,xA=3e4;class ss{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wa(e),this.stats_=em(n),this.urlFn=l=>(this.appCheckToken&&(l[oh]=this.appCheckToken),vE(n,mE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xA)),tA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tm((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dy)this.id=a,this.password=l;else if(o===gA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[dy]="t",r[wE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[_A]=this.scriptTagHolder.uniqueCallbackIdentifier),r[aE]=Zp,this.transportSessionId&&(r[lE]=this.transportSessionId),this.lastSessionId&&(r[fE]=this.lastSessionId),this.applicationId&&(r[hE]=this.applicationId),this.appCheckToken&&(r[oh]=this.appCheckToken),typeof location<"u"&&location.hostname&&dE.test(location.hostname)&&(r[uE]=cE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ss.forceAllow_=!0}static forceDisallow(){ss.forceDisallow_=!0}static isAvailable(){return ss.forceAllow_?!0:!ss.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rA()&&!iA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=a1(n),i=sE(r,CA);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[kA]="t",r[yE]=e,r[_E]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=JR(),window[vA+this.uniqueCallbackIdentifier]=e,window[yA+this.uniqueCallbackIdentifier]=n,this.myIFrame=tm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){et("frame writing exception"),a.stack&&et(a.stack),et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yE]=this.myID,e[_E]=this.myPW,e[wE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+SE+r.length<=EE;){const o=this.pendingSegs.shift();r=r+"&"+wA+i+"="+o.seg+"&"+EA+i+"="+o.ts+"&"+SA+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(bA)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const IA=16384,TA=45e3;let Lu=null;typeof MozWebSocket<"u"?Lu=MozWebSocket:typeof WebSocket<"u"&&(Lu=WebSocket);class Zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wa(this.connId),this.stats_=em(n),this.connURL=Zt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[aE]=Zp,typeof location<"u"&&location.hostname&&dE.test(location.hostname)&&(o[uE]=cE),n&&(o[lE]=n),r&&(o[fE]=r),i&&(o[oh]=i),s&&(o[hE]=s),vE(e,pE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,li.set("previous_websocket_failure",!0);try{let r;h1(),this.mySock=new Lu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Lu!==null&&!Zt.forceDisallow_}static previouslyFailed(){return li.isInMemoryStorage||li.get("previous_websocket_failure")===!0}markConnectionHealthy(){li.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ca(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sE(n,IA);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(TA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
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
 */class pa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ss,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let r=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||ft("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const i=this.transports_=[];for(const s of pa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);pa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pa.globalTransportInitialized_=!1;/**
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
 */const NA=6e4,PA=5e3,RA=10*1024,AA=100*1024,Ad="t",fy="d",OA="s",hy="r",LA="e",py="o",my="a",gy="n",vy="p",DA="h";class MA{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wa("c:"+this.id+":"),this.transportManager_=new pa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=zo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ad in e){const n=e[Ad];n===my?this.upgradeIfSecondaryHealthy_():n===hy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===py&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=go("t",e),r=go("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:my,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=go("t",e),r=go("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=go(Ad,e);if(fy in e){const r=e[fy];if(n===DA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===gy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===OA?this.onConnectionShutdown_(r):n===hy?this.onReset_(r):n===LA?sh("Server Error: "+r):n===py?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zp!==r&&ft("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),zo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(NA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(li.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class kE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class CE{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Du extends CE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Du}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yy=32,_y=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new ce("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ar(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function nm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ma(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function bE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function Ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ce(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function wt(t,e){const n=J(t),r=J(e);if(n===null)return e;if(n===r)return wt(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function FA(t,e){const n=ma(t,0),r=ma(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Mi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function rm(t,e){if(Ar(t)!==Ar(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function $t(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ar(t)>Ar(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class zA{constructor(e,n){this.errorPrefix_=n,this.parts_=ma(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_c(this.parts_[r]);xE(this)}}function UA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_c(e),xE(t)}function $A(t){const e=t.parts_.pop();t.byteLength_-=_c(e),t.parts_.length>0&&(t.byteLength_-=1)}function xE(t){if(t.byteLength_>_y)throw new Error(t.errorPrefix_+"has a key path longer than "+_y+" bytes ("+t.byteLength_+").");if(t.parts_.length>yy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yy+") or object contains a cycle "+ei(t))}function ei(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class im extends CE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new im}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const vo=1e3,WA=60*5*1e3,wy=30*1e3,HA=1.3,BA=3e4,VA="server_kill",Ey=3;class Ln extends kE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ln.nextPersistentConnectionId_++,this.log_=Wa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vo,this.maxReconnectDelay_=WA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!h1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");im.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Du.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ke(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Da,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Ln.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kn(e,"w")){const r=Ps(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ft(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||eT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ZI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sh("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BA&&(this.reconnectDelay_=vo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ln.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new MA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{ft(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(VA)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ft(d),l())}}}interrupt(e){et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qf(this.interruptReasons_)&&(this.reconnectDelay_=vo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Jp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ey&&(this.reconnectDelay_=wy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ey&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nE.replace(/\./g,"-")]=1,jp()?e["framework.cordova"]=1:f1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Du.getInstance().currentlyOnline();return qf(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0;Ln.nextConnectionId_=0;/**
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
 */class Cc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Z(Os,e),i=new Z(Os,n);return this.compare(r,i)!==0}minPost(){return Z.MIN}}/**
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
 */let _l;class IE extends Cc{static get __EMPTY_NODE(){return _l}static set __EMPTY_NODE(e){_l=e}compare(e,n){return Mi(e.name,n.name)}isDefinedOn(e){throw Bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(Ii,_l)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,_l)}toString(){return".key"}}const _s=new IE;/**
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
 */class wl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Et.EMPTY_NODE,this.right=s??Et.EMPTY_NODE}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Et.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class GA{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Et{constructor(e,n=Et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wl(this.root_,null,this.comparator_,!0,e)}}Et.EMPTY_NODE=new GA;/**
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
 */function qA(t,e){return Mi(t.name,e.name)}function sm(t,e){return Mi(t,e)}/**
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
 */let ah;function KA(t){ah=t}const TE=function(t){return typeof t=="number"?"number:"+oE(t):"string:"+t},NE=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kn(e,".sv"),"Priority must be a string or number.")}else D(t===ah||t.isEmpty(),"priority of unexpected type.");D(t===ah||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sy;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),NE(this.priorityNode_)}static set __childrenNodeConstructor(e){Sy=e}static get __childrenNodeConstructor(){return Sy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:J(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=J(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Ar(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+TE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=oE(this.value_):e+=this.value_,this.lazyHash_=iE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(r);return D(i>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let PE,RE;function YA(t){PE=t}function QA(t){RE=t}class XA extends Cc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Mi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(Ii,new Be("[PRIORITY-POST]",RE))}makePost(e,n){const r=PE(e);return new Z(n,new Be("[PRIORITY-POST]",r))}toString(){return".priority"}}const Oe=new XA;/**
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
 */const JA=Math.log(2);class ZA{constructor(e){const n=s=>parseInt(Math.log(s)/JA,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Ge(f,d.node,Ge.BLACK,null,null);{const y=parseInt(c/2,10)+l,g=i(l,y),w=i(y+1,u);return d=t[y],f=n?n(d):d,new Ge(f,d.node,Ge.BLACK,g,w)}},s=function(l){let u=null,c=null,d=t.length;const f=function(g,w){const S=d-g,v=d;d-=g;const h=i(S+1,v),m=t[S],E=n?n(m):m;y(new Ge(E,m.node,w,null,h))},y=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),S=Math.pow(2,l.count-(g+1));w?f(S,Ge.BLACK):(f(S,Ge.BLACK),f(S,Ge.RED))}return c},o=new ZA(t.length),a=s(o);return new Et(r||e,a)};/**
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
 */let Od;const Bi={};class Rn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(Bi&&Oe,"ChildrenNode.ts has not been loaded"),Od=Od||new Rn({".priority":Bi},{".priority":Oe}),Od}get(e){const n=Ps(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Et?n:null}hasIndex(e){return kn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==_s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Mu(r,e.getCompare()):a=Bi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Rn(c,u)}addToIndexes(e,n){const r=bu(this.indexes_,(i,s)=>{const o=Ps(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),i===Bi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Mu(a,o.getCompare())}else return Bi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new Rn(r,this.indexSet_)}removeFromIndexes(e,n){const r=bu(this.indexes_,i=>{if(i===Bi)return i;{const s=n.get(e.name);return s?i.remove(new Z(e.name,s)):i}});return new Rn(r,this.indexSet_)}}/**
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
 */let yo;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&NE(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yo||(yo=new G(new Et(sm),null,Rn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yo}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yo:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?yo:this.priorityNode_;return new G(i,o,s)}}updateChild(e,n){const r=J(e);if(r===null)return n;{D(J(e)!==".priority"||Ar(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ge(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Oe,(o,a)=>{n[o]=a.val(e),r++,s&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+TE(this.getPriority().val())+":"),this.forEachChild(Oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":iE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ha?-1:0}withIndex(e){if(e===_s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Oe),i=n.getIterator(Oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_s?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class e2 extends G{constructor(){super(new Et(sm),G.EMPTY_NODE,Rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Ha=new e2;Object.defineProperties(Z,{MIN:{value:new Z(Os,G.EMPTY_NODE)},MAX:{value:new Z(Ii,Ha)}});IE.__EMPTY_NODE=G.EMPTY_NODE;Be.__childrenNodeConstructor=G;KA(Ha);QA(Ha);/**
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
 */const t2=!0;function qe(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,qe(e))}if(!(t instanceof Array)&&t2){const n=[];let r=!1;if(rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=qe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return G.EMPTY_NODE;const s=Mu(n,qA,o=>o.name,sm);if(r){const o=Mu(n,Oe.getCompare());return new G(s,qe(e),new Rn({".priority":o},{".priority":Oe}))}else return new G(s,qe(e),Rn.Default)}else{let n=G.EMPTY_NODE;return rt(t,(r,i)=>{if(kn(t,r)&&r.substring(0,1)!=="."){const s=qe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(qe(e))}}YA(qe);/**
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
 */class n2 extends Cc{constructor(e){super(),this.indexPath_=e,D(!te(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Mi(e.name,n.name):s}makePost(e,n){const r=qe(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new Z(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Ha);return new Z(Ii,e)}toString(){return ma(this.indexPath_,0).join("/")}}/**
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
 */class r2 extends Cc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Mi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const r=qe(e);return new Z(n,r)}toString(){return".value"}}const i2=new r2;/**
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
 */function AE(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ga(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function va(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function s2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class om{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ga(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,r)):o.trackChildChange(va(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(ga(i,s))}),n.isLeafNode()||n.forEachChild(Oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(va(i,s,o))}else r.trackChildChange(Ls(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ya{constructor(e){this.indexedFilter_=new om(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ya.getStartPost_(e),this.endPost_=ya.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Z(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const s=this;return n.forEachChild(Oe,(o,a)=>{s.matches(new Z(o,a))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class o2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ya(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Z(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,y)=>d(y,f)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new Z(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,l);if(c&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(va(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ga(n,d));const w=a.updateImmediateChild(n,G.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ls(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ga(u.name,u.node)),s.trackChildChange(Ls(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,G.EMPTY_NODE)):e}}/**
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
 */class am{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Os}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ii}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new am;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function a2(t){return t.loadsAllData()?new om(t.getIndex()):t.hasLimit()?new o2(t):new ya(t)}function ky(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===i2?n="$value":t.index_===_s?n="$key":(D(t.index_ instanceof n2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
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
 */class ju extends kE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Wa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ju.getListenId_(e,r),a={};this.listens_[o]=a;const l=ky(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Ps(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=ju.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ky(e._queryParams),r=e._path.toString(),i=new Da;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ca(a.responseText)}catch{ft("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ft("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class l2{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Fu(){return{value:null,children:new Map}}function OE(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=J(e);t.children.has(r)||t.children.set(r,Fu());const i=t.children.get(r);e=ge(e),OE(i,e,n)}}function lh(t,e,n){t.value!==null?n(e,t.value):u2(t,(r,i)=>{const s=new ce(e.toString()+"/"+r);lh(i,s,n)})}function u2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class c2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const by=10*1e3,d2=30*1e3,f2=5*60*1e3;class h2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new c2(e);const r=by+(d2-by)*Math.random();zo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;rt(e,(i,s)=>{s>0&&kn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),zo(this.reportStats_.bind(this),Math.floor(Math.random()*2*f2))}}/**
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
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function lm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function um(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class zu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=lm()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new zu(ae(),n,this.revert)}}else return D(J(this.path)===e,"operationForChild called for unrelated child."),new zu(ge(this.path),this.affectedTree,this.revert)}}/**
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
 */class _a{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new _a(this.source,ae()):new _a(this.source,ge(this.path))}}/**
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
 */class Ti{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(e){return te(this.path)?new Ti(this.source,ae(),this.snap.getImmediateChild(e)):new Ti(this.source,ge(this.path),this.snap)}}/**
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
 */class Ds{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Ti(this.source,ae(),n.value):new Ds(this.source,ae(),n)}else return D(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ds(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ni{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class p2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function m2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(s2(o.childName,o.snapshotNode))}),_o(t,i,"child_removed",e,r,n),_o(t,i,"child_added",e,r,n),_o(t,i,"child_moved",s,r,n),_o(t,i,"child_changed",e,r,n),_o(t,i,"value",e,r,n),i}function _o(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>v2(t,a,l)),o.forEach(a=>{const l=g2(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function g2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function v2(t,e,n){if(e.childName==null||n.childName==null)throw Bs("Should only compare child_ events.");const r=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function bc(t,e){return{eventCache:t,serverCache:e}}function Uo(t,e,n,r){return bc(new Ni(e,n,r),t.serverCache)}function LE(t,e,n,r){return bc(t.eventCache,new Ni(e,n,r))}function uh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ld;const y2=()=>(Ld||(Ld=new Et(nA)),Ld);class me{constructor(e,n=y2()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return rt(e,(r,i)=>{n=n.set(new ce(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(te(e))return null;{const r=J(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ge(e),n);return s!=null?{path:Ae(new ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=J(e),r=this.children.get(n);return r!==null?r.subtree(ge(e)):new me(null)}}set(e,n){if(te(e))return new me(n,this.children);{const r=J(e),s=(this.children.get(r)||new me(null)).set(ge(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=J(e),r=this.children.get(n);if(r){const i=r.remove(ge(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(te(e))return this.value;{const n=J(e),r=this.children.get(n);return r?r.get(ge(e)):null}}setTree(e,n){if(te(e))return n;{const r=J(e),s=(this.children.get(r)||new me(null)).setTree(ge(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(te(e))return null;{const s=J(e),o=this.children.get(s);return o?o.findOnPath_(ge(e),Ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,r){if(te(e))return this;{this.value&&r(n,this.value);const i=J(e),s=this.children.get(i);return s?s.foreachOnPath_(ge(e),Ae(n,i),r):new me(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ln{constructor(e){this.writeTree_=e}static empty(){return new ln(new me(null))}}function $o(t,e,n){if(te(e))return new ln(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=wt(i,e);return s=s.updateChild(o,n),new ln(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new ln(s)}}}function ch(t,e,n){let r=t;return rt(n,(i,s)=>{r=$o(r,Ae(e,i),s)}),r}function xy(t,e){if(te(e))return ln.empty();{const n=t.writeTree_.setTree(e,new me(null));return new ln(n)}}function dh(t,e){return ji(t,e)!=null}function ji(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(wt(n.path,e)):null}function Iy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(r,i)=>{e.push(new Z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Z(r,i.value))}),e}function Nr(t,e){if(te(e))return t;{const n=ji(t,e);return n!=null?new ln(new me(n)):new ln(t.writeTree_.subtree(e))}}function fh(t){return t.writeTree_.isEmpty()}function Ms(t,e){return DE(ae(),t.writeTree_,e)}function DE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=DE(Ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ae(t,".priority"),r)),n}}/**
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
 */function dm(t,e){return zE(e,t)}function _2(t,e,n,r,i){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=$o(t.visibleWrites,e,n)),t.lastWriteId=r}function w2(t,e,n,r){D(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ch(t.visibleWrites,e,n),t.lastWriteId=r}function E2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function S2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&k2(a,r.path)?i=!1:$t(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return C2(t),!0;if(r.snap)t.visibleWrites=xy(t.visibleWrites,r.path);else{const a=r.children;rt(a,l=>{t.visibleWrites=xy(t.visibleWrites,Ae(r.path,l))})}return!0}else return!1}function k2(t,e){if(t.snap)return $t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$t(Ae(t.path,n),e))return!0;return!1}function C2(t){t.visibleWrites=ME(t.allWrites,b2,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function b2(t){return t.visible}function ME(t,e,n){let r=ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)$t(n,o)?(a=wt(n,o),r=$o(r,a,s.snap)):$t(o,n)&&(a=wt(o,n),r=$o(r,ae(),s.snap.getChild(a)));else if(s.children){if($t(n,o))a=wt(n,o),r=ch(r,a,s.children);else if($t(o,n))if(a=wt(o,n),te(a))r=ch(r,ae(),s.children);else{const l=Ps(s.children,J(a));if(l){const u=l.getChild(ge(a));r=$o(r,ae(),u)}}}else throw Bs("WriteRecord should have .snap or .children")}}return r}function jE(t,e,n,r,i){if(!r&&!i){const s=ji(t.visibleWrites,e);if(s!=null)return s;{const o=Nr(t.visibleWrites,e);if(fh(o))return n;if(n==null&&!dh(o,ae()))return null;{const a=n||G.EMPTY_NODE;return Ms(o,a)}}}else{const s=Nr(t.visibleWrites,e);if(!i&&fh(s))return n;if(!i&&n==null&&!dh(s,ae()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&($t(u.path,e)||$t(e,u.path))},a=ME(t.allWrites,o,e),l=n||G.EMPTY_NODE;return Ms(a,l)}}}function x2(t,e,n){let r=G.EMPTY_NODE;const i=ji(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Nr(t.visibleWrites,e);return n.forEachChild(Oe,(o,a)=>{const l=Ms(Nr(s,new ce(o)),a);r=r.updateImmediateChild(o,l)}),Iy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Nr(t.visibleWrites,e);return Iy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function I2(t,e,n,r,i){D(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ae(e,n);if(dh(t.visibleWrites,s))return null;{const o=Nr(t.visibleWrites,s);return fh(o)?i.getChild(n):Ms(o,i.getChild(n))}}function T2(t,e,n,r){const i=Ae(e,n),s=ji(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Nr(t.visibleWrites,i);return Ms(o,r.getNode().getImmediateChild(n))}else return null}function N2(t,e){return ji(t.visibleWrites,e)}function P2(t,e,n,r,i,s,o){let a;const l=Nr(t.visibleWrites,e),u=ji(l,ae());if(u!=null)a=u;else if(n!=null)a=Ms(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=f.getNext();for(;y&&c.length<i;)d(y,r)!==0&&c.push(y),y=f.getNext();return c}else return[]}function R2(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function Uu(t,e,n,r){return jE(t.writeTree,t.treePath,e,n,r)}function fm(t,e){return x2(t.writeTree,t.treePath,e)}function Ty(t,e,n,r){return I2(t.writeTree,t.treePath,e,n,r)}function $u(t,e){return N2(t.writeTree,Ae(t.treePath,e))}function A2(t,e,n,r,i,s){return P2(t.writeTree,t.treePath,e,n,r,i,s)}function hm(t,e,n){return T2(t.writeTree,t.treePath,e,n)}function FE(t,e){return zE(Ae(t.treePath,e),t.writeTree)}function zE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class O2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,va(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ga(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ls(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,va(r,e.snapshotNode,i.oldSnap));else throw Bs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class L2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const UE=new L2;class pm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ni(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pi(this.viewCache_),s=A2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function D2(t){return{filter:t}}function M2(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function j2(t,e,n,r,i){const s=new O2;let o,a;if(n.type===nn.OVERWRITE){const u=n;u.source.fromUser?o=hh(t,e,u.path,u.snap,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!te(u.path),o=Wu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===nn.MERGE){const u=n;u.source.fromUser?o=z2(t,e,u.path,u.children,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ph(t,e,u.path,u.children,r,i,a,s))}else if(n.type===nn.ACK_USER_WRITE){const u=n;u.revert?o=W2(t,e,u.path,r,i,s):o=U2(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=$2(t,e,n.path,r,s);else throw Bs("Unknown operation type: "+n.type);const l=s.getChanges();return F2(e,o,l),{viewCache:o,changes:l}}function F2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=uh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(AE(uh(e)))}}function $E(t,e,n,r,i,s){const o=e.eventCache;if($u(r,n)!=null)return e;{let a,l;if(te(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Pi(e),c=u instanceof G?u:G.EMPTY_NODE,d=fm(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Uu(r,Pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=J(n);if(u===".priority"){D(Ar(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Ty(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ge(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Ty(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=hm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Uo(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function Wu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(te(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),y,null)}else{const y=J(n);if(!l.isCompleteForPath(n)&&Ar(n)>1)return e;const g=ge(n),S=l.getNode().getImmediateChild(y).updateChild(g,r);y===".priority"?u=c.updatePriority(l.getNode(),S):u=c.updateChild(l.getNode(),y,S,g,UE,null)}const d=LE(e,u,l.isFullyInitialized()||te(n),c.filtersNodes()),f=new pm(i,d,s);return $E(t,d,n,i,f,a)}function hh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new pm(i,e,s);if(te(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Uo(e,u,!0,t.filter.filtersNodes());else{const d=J(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Uo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ge(n),y=a.getNode().getImmediateChild(d);let g;if(te(f))g=r;else{const w=c.getCompleteChild(d);w!=null?nm(f)===".priority"&&w.getChild(bE(f)).isEmpty()?g=w:g=w.updateChild(f,r):g=G.EMPTY_NODE}if(y.equals(g))l=e;else{const w=t.filter.updateChild(a.getNode(),d,g,f,c,o);l=Uo(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ny(t,e){return t.eventCache.isCompleteForChild(e)}function z2(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ae(n,l);Ny(e,J(c))&&(a=hh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ae(n,l);Ny(e,J(c))||(a=hh(t,a,c,u,i,s,o))}),a}function Py(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ph(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;te(n)?u=r:u=new me(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const y=e.serverCache.getNode().getImmediateChild(d),g=Py(t,y,f);l=Wu(t,l,new ce(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const y=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!y){const g=e.serverCache.getNode().getImmediateChild(d),w=Py(t,g,f);l=Wu(t,l,new ce(d),w,i,s,o,a)}}),l}function U2(t,e,n,r,i,s,o){if($u(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(te(n)){let u=new me(null);return l.getNode().forEachChild(_s,(c,d)=>{u=u.set(new ce(c),d)}),ph(t,e,n,u,i,s,a,o)}else return e}else{let u=new me(null);return r.foreach((c,d)=>{const f=Ae(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),ph(t,e,n,u,i,s,a,o)}}function $2(t,e,n,r,i){const s=e.serverCache,o=LE(e,s.getNode(),s.isFullyInitialized()||te(n),s.isFiltered());return $E(t,o,n,r,UE,i)}function W2(t,e,n,r,i,s){let o;if($u(r,n)!=null)return e;{const a=new pm(r,e,i),l=e.eventCache.getNode();let u;if(te(n)||J(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Uu(r,Pi(e));else{const d=e.serverCache.getNode();D(d instanceof G,"serverChildren would be complete if leaf node"),c=fm(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=J(n);let d=hm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ge(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,G.EMPTY_NODE,ge(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Uu(r,Pi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||$u(r,ae())!=null,Uo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class H2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new om(r.getIndex()),s=a2(r);this.processor_=D2(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(G.EMPTY_NODE,a.getNode(),null),c=new Ni(l,o.isFullyInitialized(),i.filtersNodes()),d=new Ni(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=bc(d,c),this.eventGenerator_=new p2(this.query_)}get query(){return this.query_}}function B2(t){return t.viewCache_.serverCache.getNode()}function V2(t,e){const n=Pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function Ry(t){return t.eventRegistrations_.length===0}function G2(t,e){t.eventRegistrations_.push(e)}function Ay(t,e,n){const r=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Oy(t,e,n,r){e.type===nn.MERGE&&e.source.queryId!==null&&(D(Pi(t.viewCache_),"We should always have a full cache before handling merges"),D(uh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=j2(t.processor_,i,e,n,r);return M2(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,WE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function q2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(s,o)=>{r.push(Ls(s,o))}),n.isFullyInitialized()&&r.push(AE(n.getNode())),WE(t,r,n.getNode(),e)}function WE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return m2(t.eventGenerator_,e,n,i)}/**
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
 */let Hu;class K2{constructor(){this.views=new Map}}function Y2(t){D(!Hu,"__referenceConstructor has already been defined"),Hu=t}function Q2(){return D(Hu,"Reference.ts has not been loaded"),Hu}function X2(t){return t.views.size===0}function mm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return D(s!=null,"SyncTree gave us an op for an invalid query."),Oy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Oy(o,e,n,r));return s}}function J2(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Uu(n,i?r:null),l=!1;a?l=!0:r instanceof G?(a=fm(n,r),l=!1):(a=G.EMPTY_NODE,l=!1);const u=bc(new Ni(a,l,!1),new Ni(r,i,!1));return new H2(e,u)}return o}function Z2(t,e,n,r,i,s){const o=J2(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),G2(o,n),q2(o,n)}function eO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Or(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Ay(u,n,r)),Ry(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Ay(l,n,r)),Ry(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Or(t)&&s.push(new(Q2())(e._repo,e._path)),{removed:s,events:o}}function HE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ws(t,e){let n=null;for(const r of t.views.values())n=n||V2(r,e);return n}function BE(t,e){if(e._queryParams.loadsAllData())return xc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function VE(t,e){return BE(t,e)!=null}function Or(t){return xc(t)!=null}function xc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Bu;function tO(t){D(!Bu,"__referenceConstructor has already been defined"),Bu=t}function nO(){return D(Bu,"Reference.ts has not been loaded"),Bu}let rO=1;class Ly{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=R2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function GE(t,e,n,r,i){return _2(t.pendingWriteTree_,e,n,r,i),i?Ys(t,new Ti(lm(),e,n)):[]}function iO(t,e,n,r){w2(t.pendingWriteTree_,e,n,r);const i=me.fromObject(n);return Ys(t,new Ds(lm(),e,i))}function gr(t,e,n=!1){const r=E2(t.pendingWriteTree_,e);if(S2(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(ae(),!0):rt(r.children,o=>{s=s.set(new ce(o),!0)}),Ys(t,new zu(r.path,s,n))}else return[]}function Ic(t,e,n){return Ys(t,new Ti(um(),e,n))}function sO(t,e,n){const r=me.fromObject(n);return Ys(t,new Ds(um(),e,r))}function oO(t,e){return Ys(t,new _a(um(),e))}function aO(t,e,n){const r=vm(t,n);if(r){const i=ym(r),s=i.path,o=i.queryId,a=wt(s,e),l=new _a(cm(o),a);return _m(t,s,l)}else return[]}function mh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||VE(o,e))){const l=eO(o,e,n,r);X2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,y)=>Or(y));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const y=cO(f);for(let g=0;g<y.length;++g){const w=y[g],S=w.query,v=YE(t,w);t.listenProvider_.startListening(Wo(S),Vu(t,S),v.hashFn,v.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Wo(e),null):u.forEach(f=>{const y=t.queryToTagMap.get(Tc(f));t.listenProvider_.stopListening(Wo(f),y)}))}dO(t,u)}return a}function lO(t,e,n,r){const i=vm(t,r);if(i!=null){const s=ym(i),o=s.path,a=s.queryId,l=wt(o,e),u=new Ti(cm(a),l,n);return _m(t,o,u)}else return[]}function uO(t,e,n,r){const i=vm(t,r);if(i){const s=ym(i),o=s.path,a=s.queryId,l=wt(o,e),u=me.fromObject(n),c=new Ds(cm(a),l,u);return _m(t,o,c)}else return[]}function Dy(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,y)=>{const g=wt(f,i);s=s||ws(y,g),o=o||Or(y)});let a=t.syncPointTree_.get(i);a?(o=o||Or(a),s=s||ws(a,ae())):(a=new K2,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,g)=>{const w=ws(g,ae());w&&(s=s.updateImmediateChild(y,w))}));const u=VE(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Tc(e);D(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=fO();t.queryToTagMap.set(f,y),t.tagToQueryMap.set(y,f)}const c=dm(t.pendingWriteTree_,i);let d=Z2(a,e,n,c,s,l);if(!u&&!o&&!r){const f=BE(a,e);d=d.concat(hO(t,e,f))}return d}function gm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=wt(o,e),u=ws(a,l);if(u)return u});return jE(i,e,s,n,!0)}function Ys(t,e){return qE(e,t.syncPointTree_,null,dm(t.pendingWriteTree_,ae()))}function qE(t,e,n,r){if(te(t.path))return KE(t,e,n,r);{const i=e.get(ae());n==null&&i!=null&&(n=ws(i,ae()));let s=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=FE(r,o);s=s.concat(qE(a,l,u,c))}return i&&(s=s.concat(mm(i,t,r,n))),s}}function KE(t,e,n,r){const i=e.get(ae());n==null&&i!=null&&(n=ws(i,ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=FE(r,o),c=t.operationForChild(o);c&&(s=s.concat(KE(c,a,l,u)))}),i&&(s=s.concat(mm(i,t,r,n))),s}function YE(t,e){const n=e.query,r=Vu(t,n);return{hashFn:()=>(B2(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?aO(t,n._path,r):oO(t,n._path);{const s=sA(i,n);return mh(t,n,null,s)}}}}function Vu(t,e){const n=Tc(e);return t.queryToTagMap.get(n)}function Tc(t){return t._path.toString()+"$"+t._queryIdentifier}function vm(t,e){return t.tagToQueryMap.get(e)}function ym(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function _m(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const i=dm(t.pendingWriteTree_,e);return mm(r,n,i,null)}function cO(t){return t.fold((e,n,r)=>{if(n&&Or(n))return[xc(n)];{let i=[];return n&&(i=HE(n)),rt(r,(s,o)=>{i=i.concat(o)}),i}})}function Wo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nO())(t._repo,t._path):t}function dO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Tc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function fO(){return rO++}function hO(t,e,n){const r=e._path,i=Vu(t,e),s=YE(t,n),o=t.listenProvider_.startListening(Wo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)D(!Or(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!te(u)&&c&&Or(c))return[xc(c).query];{let f=[];return c&&(f=f.concat(HE(c).map(y=>y.query))),rt(d,(y,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Wo(c),Vu(t,c))}}return o}/**
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
 */class wm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wm(n)}node(){return this.node_}}class Em{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ae(this.path_,e);return new Em(this.syncTree_,n)}node(){return gm(this.syncTree_,this.path_)}}const pO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},My=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gO(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},gO=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},QE=function(t,e,n,r){return Sm(e,new Em(n,t),r)},XE=function(t,e,n){return Sm(t,new wm(e),n)};function Sm(t,e,n){const r=t.getPriority().val(),i=My(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=My(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,qe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Be(i))),o.forEachChild(Oe,(a,l)=>{const u=Sm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class km{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Cm(t,e){let n=e instanceof ce?e:new ce(e),r=t,i=J(n);for(;i!==null;){const s=Ps(r.node.children,i)||{children:{},childCount:0};r=new km(i,r,s),n=ge(n),i=J(n)}return r}function Qs(t){return t.node.value}function JE(t,e){t.node.value=e,gh(t)}function ZE(t){return t.node.childCount>0}function vO(t){return Qs(t)===void 0&&!ZE(t)}function Nc(t,e){rt(t.node.children,(n,r)=>{e(new km(n,t,r))})}function eS(t,e,n,r){n&&!r&&e(t),Nc(t,i=>{eS(i,e,!0,r)}),n&&r&&e(t)}function yO(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ba(t){return new ce(t.parent===null?t.name:Ba(t.parent)+"/"+t.name)}function gh(t){t.parent!==null&&_O(t.parent,t.name,t)}function _O(t,e,n){const r=vO(n),i=kn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,gh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gh(t))}/**
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
 */const wO=/[\[\].#$\/\u0000-\u001F\u007F]/,EO=/[\[\].#$\u0000-\u001F\u007F]/,Dd=10*1024*1024,bm=function(t){return typeof t=="string"&&t.length!==0&&!wO.test(t)},tS=function(t){return typeof t=="string"&&t.length!==0&&!EO.test(t)},SO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tS(t)},kO=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Xp(t)||t&&typeof t=="object"&&kn(t,".sv")},CO=function(t,e,n,r){r&&e===void 0||Pc(yc(t,"value"),e,n)},Pc=function(t,e,n){const r=n instanceof ce?new zA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ei(r));if(typeof e=="function")throw new Error(t+"contains a function "+ei(r)+" with contents = "+e.toString());if(Xp(e))throw new Error(t+"contains "+e.toString()+" "+ei(r));if(typeof e=="string"&&e.length>Dd/3&&_c(e)>Dd)throw new Error(t+"contains a string greater than "+Dd+" utf8 bytes "+ei(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(rt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!bm(o)))throw new Error(t+" contains an invalid key ("+o+") "+ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);UA(r,o),Pc(t,a,r),$A(r)}),i&&s)throw new Error(t+' contains ".value" child '+ei(r)+" in addition to actual children.")}},bO=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ma(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!bm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(FA);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&$t(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},xO=function(t,e,n,r){if(r&&e===void 0)return;const i=yc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];rt(e,(o,a)=>{const l=new ce(o);if(Pc(i,a,Ae(n,l)),nm(l)===".priority"&&!kO(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),bO(i,s)},nS=function(t,e,n,r){if(!(r&&n===void 0)&&!tS(n))throw new Error(yc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nS(t,e,n,r)},TO=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},NO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!SO(n))throw new Error(yc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class PO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function rS(t,e,n){Rc(t,n),iS(t,r=>rm(r,e))}function cn(t,e,n){Rc(t,n),iS(t,r=>$t(r,e)||$t(e,r))}function iS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(RO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();pi&&et("event: "+n.toString()),Ks(r)}}}/**
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
 */const AO="repo_interrupt",OO=25;class LO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new PO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fu(),this.transactionQueueTree_=new km,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DO(t,e,n){if(t.stats_=em(t.repoInfo_),t.forceRestClient_||uA())t.server_=new ju(t.repoInfo_,(r,i,s,o)=>{jy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ln(t.repoInfo_,e,(r,i,s,o)=>{jy(t,r,i,s,o)},r=>{Fy(t,r)},r=>{jO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pA(t.repoInfo_,()=>new h2(t.stats_,t.server_)),t.infoData_=new l2,t.infoSyncTree_=new Ly({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ic(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),xm(t,"connected",!1),t.serverSyncTree_=new Ly({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);cn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function MO(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ac(t){return pO({timestamp:MO(t)})}function jy(t,e,n,r,i){t.dataUpdateCount++;const s=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=bu(n,u=>qe(u));o=uO(t.serverSyncTree_,s,l,i)}else{const l=qe(n);o=lO(t.serverSyncTree_,s,l,i)}else if(r){const l=bu(n,u=>qe(u));o=sO(t.serverSyncTree_,s,l)}else{const l=qe(n);o=Ic(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=js(t,s)),cn(t.eventQueue_,a,o)}function Fy(t,e){xm(t,"connected",e),e===!1&&UO(t)}function jO(t,e){rt(e,(n,r)=>{xm(t,n,r)})}function xm(t,e,n){const r=new ce("/.info/"+e),i=qe(n);t.infoData_.updateSnapshot(r,i);const s=Ic(t.infoSyncTree_,r,i);cn(t.eventQueue_,r,s)}function Im(t){return t.nextWriteId_++}function FO(t,e,n,r,i){Oc(t,"set",{path:e.toString(),value:n,priority:r});const s=Ac(t),o=qe(n,r),a=gm(t.serverSyncTree_,e),l=XE(o,a,s),u=Im(t),c=GE(t.serverSyncTree_,e,l,u,!0);Rc(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,y)=>{const g=f==="ok";g||ft("set at "+e+" failed: "+f);const w=gr(t.serverSyncTree_,u,!g);cn(t.eventQueue_,e,w),vh(t,i,f,y)});const d=Nm(t,e);js(t,d),cn(t.eventQueue_,d,[])}function zO(t,e,n,r){Oc(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ac(t),o={};if(rt(n,(a,l)=>{i=!1,o[a]=QE(Ae(e,a),qe(l),t.serverSyncTree_,s)}),i)et("update() called with empty data.  Don't do anything."),vh(t,r,"ok",void 0);else{const a=Im(t),l=iO(t.serverSyncTree_,e,o,a);Rc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||ft("update at "+e+" failed: "+u);const f=gr(t.serverSyncTree_,a,!d),y=f.length>0?js(t,e):e;cn(t.eventQueue_,y,f),vh(t,r,u,c)}),rt(n,u=>{const c=Nm(t,Ae(e,u));js(t,c)}),cn(t.eventQueue_,e,[])}}function UO(t){Oc(t,"onDisconnectEvents");const e=Ac(t),n=Fu();lh(t.onDisconnect_,ae(),(i,s)=>{const o=QE(i,s,t.serverSyncTree_,e);OE(n,i,o)});let r=[];lh(n,ae(),(i,s)=>{r=r.concat(Ic(t.serverSyncTree_,i,s));const o=Nm(t,i);js(t,o)}),t.onDisconnect_=Fu(),cn(t.eventQueue_,ae(),r)}function $O(t,e,n){let r;J(e._path)===".info"?r=Dy(t.infoSyncTree_,e,n):r=Dy(t.serverSyncTree_,e,n),rS(t.eventQueue_,e._path,r)}function zy(t,e,n){let r;J(e._path)===".info"?r=mh(t.infoSyncTree_,e,n):r=mh(t.serverSyncTree_,e,n),rS(t.eventQueue_,e._path,r)}function WO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AO)}function Oc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),et(n,...e)}function vh(t,e,n,r){e&&Ks(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function sS(t,e,n){return gm(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function Tm(t,e=t.transactionQueueTree_){if(e||Lc(t,e),Qs(e)){const n=aS(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&HO(t,Ba(e),n)}else ZE(e)&&Nc(e,n=>{Tm(t,n)})}function HO(t,e,n){const r=n.map(u=>u.currentWriteId),i=sS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];D(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=wt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Oc(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(gr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Lc(t,Cm(t.transactionQueueTree_,e)),Tm(t,t.transactionQueueTree_),cn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Ks(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ft("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}js(t,e)}},o)}function js(t,e){const n=oS(t,e),r=Ba(n),i=aS(t,n);return BO(t,i,r),r}function BO(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=wt(n,l.path);let c=!1,d;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(gr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=OO)c=!0,d="maxretry",i=i.concat(gr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=sS(t,l.path,o);l.currentInputSnapshot=f;const y=e[a].update(f.val());if(y!==void 0){Pc("transaction failed: Data returned ",y,l.path);let g=qe(y);typeof y=="object"&&y!=null&&kn(y,".priority")||(g=g.updatePriority(f.getPriority()));const S=l.currentWriteId,v=Ac(t),h=XE(g,f,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=Im(t),o.splice(o.indexOf(S),1),i=i.concat(GE(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(gr(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(gr(t.serverSyncTree_,l.currentWriteId,!0))}cn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Lc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ks(r[a]);Tm(t,t.transactionQueueTree_)}function oS(t,e){let n,r=t.transactionQueueTree_;for(n=J(e);n!==null&&Qs(r)===void 0;)r=Cm(r,n),e=ge(e),n=J(e);return r}function aS(t,e){const n=[];return lS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function lS(t,e,n){const r=Qs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Nc(e,i=>{lS(t,i,n)})}function Lc(t,e){const n=Qs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,JE(e,n.length>0?n:void 0)}Nc(e,r=>{Lc(t,r)})}function Nm(t,e){const n=Ba(oS(t,e)),r=Cm(t.transactionQueueTree_,e);return yO(r,i=>{Md(t,i)}),Md(t,r),eS(r,i=>{Md(t,i)}),n}function Md(t,e){const n=Qs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?JE(e,void 0):n.length=s+1,cn(t.eventQueue_,Ba(e),i);for(let o=0;o<r.length;o++)Ks(r[o])}}/**
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
 */function VO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function GO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ft(`Invalid query segment '${n}' in query '${t}'`)}return e}const Uy=function(t,e){const n=qO(t),r=n.namespace;n.domain==="firebase.com"&&$n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&$n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ce(n.pathString)}},qO=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=VO(t.substring(c,d)));const f=GO(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class uS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class cS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class KO{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return te(this._path)?null:nm(this._path)}get ref(){return new Qn(this._repo,this._path)}get _queryIdentifier(){const e=Cy(this._queryParams),n=Jp(e);return n==="{}"?"default":n}get _queryObject(){return Cy(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Pm))return!1;const n=this._repo===e._repo,r=rm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jA(this._path)}}class Qn extends Pm{constructor(e,n){super(e,n,new am,!1)}get parent(){const e=bE(this._path);return e===null?null:new Qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class wa{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),r=Gu(this.ref,e);return new wa(this._node.getChild(n),r,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new wa(i,Gu(this.ref,r),Oe)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jd(t,e){return t=mt(t),t._checkNotDeleted("ref"),e!==void 0?Gu(t._root,e):t._root}function Gu(t,e){return t=mt(t),J(t._path)===null?IO("child","path",e,!1):nS("child","path",e,!1),new Qn(t._repo,Ae(t._path,e))}function YO(t,e){t=mt(t),TO("set",t._path),CO("set",e,t._path,!1);const n=new Da;return FO(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function QO(t,e){xO("update",e,t._path,!1);const n=new Da;return zO(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Rm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new uS("value",this,new wa(e.snapshotNode,new Qn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cS(this,e,n):null}matches(e){return e instanceof Rm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Am{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cS(this,e,n):null}createEvent(e,n){D(e.childName!=null,"Child events should have a childName.");const r=Gu(new Qn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new uS(e.type,this,new wa(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Am?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function XO(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{zy(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new KO(n,s||void 0),a=e==="value"?new Rm(o):new Am(e,o);return $O(t._repo,t,a),()=>zy(t._repo,t,a)}function JO(t,e,n,r){return XO(t,"value",e,n,r)}Y2(Qn);tO(Qn);/**
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
 */const ZO="FIREBASE_DATABASE_EMULATOR_HOST",yh={};let eL=!1;function tL(t,e,n,r){t.repoInfo_=new gE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function nL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||$n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Uy(s,i),a=o.repoInfo,l,u;typeof process<"u"&&oy&&(u=oy[ZO]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Uy(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ys(ys.OWNER):new dA(t.name,t.options,e);NO("Invalid Firebase Database URL",o),te(o.path)||$n("Database URL must point to the root of a Firebase Database (not including a child path).");const d=iL(a,t,c,new cA(t.name,n));return new sL(d,t)}function rL(t,e){const n=yh[e];(!n||n[t.key]!==t)&&$n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),WO(t),delete n[t.key]}function iL(t,e,n,r){let i=yh[e.name];i||(i={},yh[e.name]=i);let s=i[t.toURLString()];return s&&$n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new LO(t,eL,n,r),i[t.toURLString()]=s,s}class sL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qn(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$n("Cannot call "+e+" on a deleted database.")}}function $y(t=y1(),e){const n=Up(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=BI("database");r&&oL(n,...r)}return n}function oL(t,e,n,r={}){t=mt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$n("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&$n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ys(ys.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:VI(r.mockUserToken,t.app.options.projectId);s=new ys(o)}tL(i,e,n,s)}/**
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
 */function aL(t){YR(Gs),Rs(new Si("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return nL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Tr(ay,ly,t),Tr(ay,ly,"esm2017")}Ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};aL();const Wy=(t,e=[])=>{if(typeof t!="object")return console.error("Object nie jest obiektem! Wartość object ",t),!1;e.length>0&&e.forEach(n=>{if(!Object.hasOwn(t,n))return console.error("Obiekt nie ma właściwości ",n),!1});for(let n in t)if(t[n]==null)return console.error("Niepoprawna wartość!",t[n],"w",n),!1;return!0},Dc=()=>{const[t,e]=k.useState(null),[n,r]=k.useState({isSuccess:!1,message:""});return k.useEffect(()=>{const s=$y(Zf),o=jd(s,"/articles");JO(o,a=>{const l=a.val();e(l),r(u=>(u.isSuccess=!0,u.message="Udało się pobrać listę artykułów.",u))},a=>{throw new Error(a.code)})},[]),{data:t,response:n,pushData:async(s,o)=>{let a={isSuccess:!1,message:""};return new Promise((l,u)=>{if(Wy(s)){const c=$y(Zf);let d={found:!1,article:{},key:-1};if(t.forEach((y,g)=>{if(y.address===s.address){d.article=y,d.key=g,d.found=!0;return}}),!o&&d.found)return l({...a,...d});if(o){d.article.author!==s.author&&(s.author+=", ".concat(d.article.author)),QO(jd(c,"/articles/"+d.key),s).then(()=>{a.isSuccess=!0,a.message="Zapisano zmiany w artykule.",l(a)}).catch(y=>{u(y.code)});return}let f=[...t].concat(s);YO(jd(c,"/articles"),f).then(()=>{a.isSuccess=!0,a.message="Zapisano zmiany w artykule.",l(a)}).catch(y=>{u(y.code)})}else u("Wprowadzone dane nie są poprawne.")})},checkObject:Wy}},lL="_content_wfe2l_1",uL={content:lL},cL=()=>{const{data:t,response:e}=Dc(),[n,r]=k.useState(""),[i,s]=k.useState("");return k.useEffect(()=>{if(!e.isSuccess||!t)return;let o=t.length;r(t.slice(o-3,o).reverse().map((a,l)=>p.jsx("div",{children:p.jsx(Pt,{to:a.address,children:a.name})},l))),s(t.slice(1,o-3).map((a,l)=>p.jsx("div",{children:p.jsx(Pt,{to:a.address,children:a.name})},l)))},[t,e]),p.jsxs(Wt.Fragment,{children:[p.jsx("header",{children:p.jsx("h2",{children:"Wiki"})}),p.jsxs("div",{className:uL.content,children:[p.jsx("h3",{children:"Zobacz najnowsze artykuły"}),n,p.jsx("h3",{children:"Lista wszystkich artykułów"}),i]})]})};let dL=t=>new DOMParser().parseFromString(t,"text/html").body.childNodes,dS=t=>t.map((e,n)=>{let r={};const{attributes:i,localName:s,childNodes:o,nodeValue:a}=e;return i&&Array.from(i).forEach(l=>{if(l.name==="style"){let u=l.nodeValue.split(";"),c={};u.forEach(d=>{let[f,y]=d.split(":");c[f]=y}),r[l.name]=c}else r[l.name]=l.nodeValue}),r.key=n,s?Wt.createElement(s,r,o&&Array.isArray(Array.from(o))?dS(Array.from(o)):[]):a});const fL=t=>dS(Array.from(dL(t.domString))),fS=({item:t})=>t.content&&t.name&&p.jsxs(p.Fragment,{children:[p.jsx("header",{children:p.jsx("h2",{children:t.name})}),p.jsx("div",{className:"content",children:p.jsx(fL,{domString:t.content})})]});fS.propTypes={item:R.any};var hS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="right-from-bracket",r=512,i=512,s=["sign-out-alt"],o="f2f5",a="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faRightFromBracket=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(hS);var pS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="pencil",r=512,i=512,s=[9999,61504,"pencil-alt"],o="f303",a="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faPencil=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(pS);var mS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="house",r=576,i=512,s=[127968,63498,63500,"home","home-alt","home-lg-alt"],o="f015",a="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faHouse=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(mS);var Om={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="bars",r=448,i=512,s=["navicon"],o="f0c9",a="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faBars=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Om);const hL="_option_175ji_1",Hy={option:hL},xo=({className:t,onClick:e,to:n,replace:r,title:i,children:s})=>n?p.jsx(ti,{to:n,replace:r||!1,className:`${t||""} ${Hy.option}`,onClick:e,title:i||"",children:s}):p.jsx("button",{type:"button",className:`${t||""} ${Hy.option}`,onClick:e,title:i||"",children:s});xo.propTypes={className:Jr.PropTypes.string,onClick:Jr.PropTypes.func,to:Jr.PropTypes.string,replace:Jr.PropTypes.bool,title:Jr.PropTypes.string,children:Jr.PropTypes.any};const Br=k.createContext({editorContent:"home",articleContent:"",articleAddress:"",articleName:"",toolbarButtons:{file:{main:{disabled:!1},exit:{disabled:!0},new:{disabled:!1},open:{disabled:!1},save:{disabled:!0}},edit:{newLine:{disabled:!0},copy:{disabled:!0},cleanCode:{disabled:!0}}},setEditorContent:()=>{},setArticleContent:()=>{},setArticleAddress:()=>{},setArticleName:()=>{},resetArticleInfo:()=>{},disableToolbarButtons:(t,e)=>!0,enableToolbarButtons:(t,e)=>!1});function By(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?By(Object(n),!0).forEach(function(r){Ue(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):By(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qu(t){"@babel/helpers - typeof";return qu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qu(t)}function pL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Vy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function mL(t,e,n){return e&&Vy(t.prototype,e),n&&Vy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ue(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Lm(t,e){return vL(t)||_L(t,e)||gS(t,e)||EL()}function Va(t){return gL(t)||yL(t)||gS(t)||wL()}function gL(t){if(Array.isArray(t))return _h(t)}function vL(t){if(Array.isArray(t))return t}function yL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _L(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function gS(t,e){if(t){if(typeof t=="string")return _h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _h(t,e)}}function _h(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function wL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Gy=function(){},Dm={},vS={},yS=null,_S={mark:Gy,measure:Gy};try{typeof window<"u"&&(Dm=window),typeof document<"u"&&(vS=document),typeof MutationObserver<"u"&&(yS=MutationObserver),typeof performance<"u"&&(_S=performance)}catch{}var SL=Dm.navigator||{},qy=SL.userAgent,Ky=qy===void 0?"":qy,Lr=Dm,Se=vS,Yy=yS,El=_S;Lr.document;var Xn=!!Se.documentElement&&!!Se.head&&typeof Se.addEventListener=="function"&&typeof Se.createElement=="function",wS=~Ky.indexOf("MSIE")||~Ky.indexOf("Trident/"),Sl,kl,Cl,bl,xl,Wn="___FONT_AWESOME___",wh=16,ES="fa",SS="svg-inline--fa",Ri="data-fa-i2svg",Eh="data-fa-pseudo-element",kL="data-fa-pseudo-element-pending",Mm="data-prefix",jm="data-icon",Qy="fontawesome-i2svg",CL="async",bL=["HTML","HEAD","STYLE","SCRIPT"],kS=function(){try{return!0}catch{return!1}}(),we="classic",Re="sharp",Fm=[we,Re];function Ga(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[we]}})}var Ea=Ga((Sl={},Ue(Sl,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ue(Sl,Re,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Sl)),Sa=Ga((kl={},Ue(kl,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ue(kl,Re,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),kl)),ka=Ga((Cl={},Ue(Cl,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ue(Cl,Re,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Cl)),xL=Ga((bl={},Ue(bl,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ue(bl,Re,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),bl)),IL=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,CS="fa-layers-text",TL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,NL=Ga((xl={},Ue(xl,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ue(xl,Re,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xl)),bS=[1,2,3,4,5,6,7,8,9,10],PL=bS.concat([11,12,13,14,15,16,17,18,19,20]),RL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ui={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ca=new Set;Object.keys(Sa[we]).map(Ca.add.bind(Ca));Object.keys(Sa[Re]).map(Ca.add.bind(Ca));var AL=[].concat(Fm,Va(Ca),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ui.GROUP,ui.SWAP_OPACITY,ui.PRIMARY,ui.SECONDARY]).concat(bS.map(function(t){return"".concat(t,"x")})).concat(PL.map(function(t){return"w-".concat(t)})),Ho=Lr.FontAwesomeConfig||{};function OL(t){var e=Se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function LL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Se&&typeof Se.querySelector=="function"){var DL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DL.forEach(function(t){var e=Lm(t,2),n=e[0],r=e[1],i=LL(OL(n));i!=null&&(Ho[r]=i)})}var xS={styleDefault:"solid",familyDefault:"classic",cssPrefix:ES,replacementClass:SS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ho.familyPrefix&&(Ho.cssPrefix=Ho.familyPrefix);var Fs=F(F({},xS),Ho);Fs.autoReplaceSvg||(Fs.observeMutations=!1);var U={};Object.keys(xS).forEach(function(t){Object.defineProperty(U,t,{enumerable:!0,set:function(n){Fs[t]=n,Bo.forEach(function(r){return r(U)})},get:function(){return Fs[t]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){Fs.cssPrefix=e,Bo.forEach(function(n){return n(U)})},get:function(){return Fs.cssPrefix}});Lr.FontAwesomeConfig=U;var Bo=[];function ML(t){return Bo.push(t),function(){Bo.splice(Bo.indexOf(t),1)}}var ir=wh,vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jL(t){if(!(!t||!Xn)){var e=Se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Se.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Se.head.insertBefore(e,r),t}}var FL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ba(){for(var t=12,e="";t-- >0;)e+=FL[Math.random()*62|0];return e}function Xs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zm(t){return t.classList?Xs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function IS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zL(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(IS(t[n]),'" ')},"").trim()}function Mc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Um(t){return t.size!==vn.size||t.x!==vn.x||t.y!==vn.y||t.rotate!==vn.rotate||t.flipX||t.flipY}function UL(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function $L(t){var e=t.transform,n=t.width,r=n===void 0?wh:n,i=t.height,s=i===void 0?wh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&wS?l+="translate(".concat(e.x/ir-r/2,"em, ").concat(e.y/ir-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ir,"em), calc(-50% + ").concat(e.y/ir,"em)) "):l+="translate(".concat(e.x/ir,"em, ").concat(e.y/ir,"em) "),l+="scale(".concat(e.size/ir*(e.flipX?-1:1),", ").concat(e.size/ir*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var WL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
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
}`;function TS(){var t=ES,e=SS,n=U.cssPrefix,r=U.replacementClass,i=WL;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Xy=!1;function Fd(){U.autoAddCss&&!Xy&&(jL(TS()),Xy=!0)}var HL={mixout:function(){return{dom:{css:TS,insertCss:Fd}}},hooks:function(){return{beforeDOMElementCreation:function(){Fd()},beforeI2svg:function(){Fd()}}}},Hn=Lr||{};Hn[Wn]||(Hn[Wn]={});Hn[Wn].styles||(Hn[Wn].styles={});Hn[Wn].hooks||(Hn[Wn].hooks={});Hn[Wn].shims||(Hn[Wn].shims=[]);var rn=Hn[Wn],NS=[],BL=function t(){Se.removeEventListener("DOMContentLoaded",t),Ku=1,NS.map(function(e){return e()})},Ku=!1;Xn&&(Ku=(Se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Se.readyState),Ku||Se.addEventListener("DOMContentLoaded",BL));function VL(t){Xn&&(Ku?setTimeout(t,0):NS.push(t))}function qa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?IS(t):"<".concat(e," ").concat(zL(r),">").concat(s.map(qa).join(""),"</").concat(e,">")}function Jy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var GL=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},zd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?GL(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function qL(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Sh(t){var e=qL(t);return e.length===1?e[0].toString(16):null}function KL(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Zy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function kh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Zy(e);typeof rn.hooks.addPack=="function"&&!i?rn.hooks.addPack(t,Zy(e)):rn.styles[t]=F(F({},rn.styles[t]||{}),s),t==="fas"&&kh("fa",e)}var Il,Tl,Nl,os=rn.styles,YL=rn.shims,QL=(Il={},Ue(Il,we,Object.values(ka[we])),Ue(Il,Re,Object.values(ka[Re])),Il),$m=null,PS={},RS={},AS={},OS={},LS={},XL=(Tl={},Ue(Tl,we,Object.keys(Ea[we])),Ue(Tl,Re,Object.keys(Ea[Re])),Tl);function JL(t){return~AL.indexOf(t)}function ZL(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!JL(i)?i:null}var DS=function(){var e=function(s){return zd(os,function(o,a,l){return o[l]=zd(a,s,{}),o},{})};PS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),RS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),LS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in os||U.autoFetchSvg,r=zd(YL,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});AS=r.names,OS=r.unicodes,$m=jc(U.styleDefault,{family:U.familyDefault})};ML(function(t){$m=jc(t.styleDefault,{family:U.familyDefault})});DS();function Wm(t,e){return(PS[t]||{})[e]}function eD(t,e){return(RS[t]||{})[e]}function ci(t,e){return(LS[t]||{})[e]}function MS(t){return AS[t]||{prefix:null,iconName:null}}function tD(t){var e=OS[t],n=Wm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return $m}var Hm=function(){return{prefix:null,iconName:null,rest:[]}};function jc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?we:n,i=Ea[r][t],s=Sa[r][t]||Sa[r][i],o=t in rn.styles?t:null;return s||o||null}var e_=(Nl={},Ue(Nl,we,Object.keys(ka[we])),Ue(Nl,Re,Object.keys(ka[Re])),Nl);function Fc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ue(e,we,"".concat(U.cssPrefix,"-").concat(we)),Ue(e,Re,"".concat(U.cssPrefix,"-").concat(Re)),e),o=null,a=we;(t.includes(s[we])||t.some(function(u){return e_[we].includes(u)}))&&(a=we),(t.includes(s[Re])||t.some(function(u){return e_[Re].includes(u)}))&&(a=Re);var l=t.reduce(function(u,c){var d=ZL(U.cssPrefix,c);if(os[c]?(c=QL[a].includes(c)?xL[a][c]:c,o=c,u.prefix=c):XL[a].indexOf(c)>-1?(o=c,u.prefix=jc(c,{family:a})):d?u.iconName=d:c!==U.replacementClass&&c!==s[we]&&c!==s[Re]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?MS(u.iconName):{},y=ci(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||y||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!os.far&&os.fas&&!U.autoFetchSvg&&(u.prefix="fas")}return u},Hm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Re&&(os.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=ci(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Dr()||"fas"),l}var nD=function(){function t(){pL(this,t),this.definitions={}}return mL(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=F(F({},n.definitions[a]||{}),o[a]),kh(a,o[a]);var l=ka[we][a];l&&kh(l,o[a]),DS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),t_=[],as={},Es={},rD=Object.keys(Es);function iD(t,e){var n=e.mixoutsTo;return t_=t,as={},Object.keys(Es).forEach(function(r){rD.indexOf(r)===-1&&delete Es[r]}),t_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),qu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){as[o]||(as[o]=[]),as[o].push(s[o])})}r.provides&&r.provides(Es)}),n}function Ch(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=as[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ai(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=as[t]||[];i.forEach(function(s){s.apply(null,n)})}function Bn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Es[t]?Es[t].apply(null,e):void 0}function bh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Dr();if(e)return e=ci(n,e)||e,Jy(jS.definitions,n,e)||Jy(rn.styles,n,e)}var jS=new nD,sD=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Ai("noAuto")},oD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xn?(Ai("beforeI2svg",e),Bn("pseudoElements2svg",e),Bn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,VL(function(){lD({autoReplaceSvgRoot:n}),Ai("watch",e)})}},aD={icon:function(e){if(e===null)return null;if(qu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ci(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=jc(e[0]);return{prefix:r,iconName:ci(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(U.cssPrefix,"-"))>-1||e.match(IL))){var i=Fc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Dr(),iconName:ci(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Dr();return{prefix:s,iconName:ci(s,e)||e}}}},Lt={noAuto:sD,config:U,dom:oD,parse:aD,library:jS,findIconDefinition:bh,toHtml:qa},lD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Se:n;(Object.keys(rn.styles).length>0||U.autoFetchSvg)&&Xn&&U.autoReplaceSvg&&Lt.dom.i2svg({node:r})};function zc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return qa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Xn){var r=Se.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function uD(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Um(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Mc(F(F({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function cD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(U.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:F(F({},i),{},{id:o}),children:r}]}]}function Bm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,y=f===void 0?!1:f,g=r.found?r:n,w=g.width,S=g.height,v=i==="fak",h=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(function(T){return d.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(d.classes).join(" "),m={children:[],attributes:F(F({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(S)})},E=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/S*16*.0625,"em")}:{};y&&(m.attributes[Ri]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||ba())},children:[l]}),delete m.attributes.title);var C=F(F({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:F(F({},E),d.styles)}),_=r.found&&n.found?Bn("generateAbstractMask",C)||{children:[],attributes:{}}:Bn("generateAbstractIcon",C)||{children:[],attributes:{}},b=_.children,I=_.attributes;return C.children=b,C.attributes=I,a?cD(C):uD(C)}function n_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=F(F(F({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Ri]="");var c=F({},o.styles);Um(i)&&(c.transform=$L({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Mc(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function dD(t){var e=t.content,n=t.title,r=t.extra,i=F(F(F({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Mc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ud=rn.styles;function xh(t){var e=t[0],n=t[1],r=t.slice(4),i=Lm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(ui.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(ui.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(ui.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var fD={found:!1,width:512,height:512};function hD(t,e){!kS&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ih(t,e){var n=e;return e==="fa"&&U.styleDefault!==null&&(e=Dr()),new Promise(function(r,i){if(Bn("missingIconAbstract"),n==="fa"){var s=MS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ud[e]&&Ud[e][t]){var o=Ud[e][t];return r(xh(o))}hD(t,e),r(F(F({},fD),{},{icon:U.showMissingIcons&&t?Bn("missingIconAbstract")||{}:{}}))})}var r_=function(){},Th=U.measurePerformance&&El&&El.mark&&El.measure?El:{mark:r_,measure:r_},Io='FA "6.5.1"',pD=function(e){return Th.mark("".concat(Io," ").concat(e," begins")),function(){return FS(e)}},FS=function(e){Th.mark("".concat(Io," ").concat(e," ends")),Th.measure("".concat(Io," ").concat(e),"".concat(Io," ").concat(e," begins"),"".concat(Io," ").concat(e," ends"))},Vm={begin:pD,end:FS},ql=function(){};function i_(t){var e=t.getAttribute?t.getAttribute(Ri):null;return typeof e=="string"}function mD(t){var e=t.getAttribute?t.getAttribute(Mm):null,n=t.getAttribute?t.getAttribute(jm):null;return e&&n}function gD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function vD(){if(U.autoReplaceSvg===!0)return Kl.replace;var t=Kl[U.autoReplaceSvg];return t||Kl.replace}function yD(t){return Se.createElementNS("http://www.w3.org/2000/svg",t)}function _D(t){return Se.createElement(t)}function zS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?yD:_D:n;if(typeof t=="string")return Se.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(zS(o,{ceFn:r}))}),i}function wD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Kl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(zS(i),n)}),n.getAttribute(Ri)===null&&U.keepOriginalSource){var r=Se.createComment(wD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~zm(n).indexOf(U.replacementClass))return Kl.replace(e);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return qa(a)}).join(`
`);n.setAttribute(Ri,""),n.innerHTML=o}};function s_(t){t()}function US(t,e){var n=typeof e=="function"?e:ql;if(t.length===0)n();else{var r=s_;U.mutateApproach===CL&&(r=Lr.requestAnimationFrame||s_),r(function(){var i=vD(),s=Vm.begin("mutate");t.map(i),s(),n()})}}var Gm=!1;function $S(){Gm=!0}function Nh(){Gm=!1}var Yu=null;function o_(t){if(Yy&&U.observeMutations){var e=t.treeCallback,n=e===void 0?ql:e,r=t.nodeCallback,i=r===void 0?ql:r,s=t.pseudoElementsCallback,o=s===void 0?ql:s,a=t.observeMutationsRoot,l=a===void 0?Se:a;Yu=new Yy(function(u){if(!Gm){var c=Dr();Xs(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!i_(d.addedNodes[0])&&(U.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&U.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&i_(d.target)&&~RL.indexOf(d.attributeName))if(d.attributeName==="class"&&mD(d.target)){var f=Fc(zm(d.target)),y=f.prefix,g=f.iconName;d.target.setAttribute(Mm,y||c),g&&d.target.setAttribute(jm,g)}else gD(d.target)&&i(d.target)})}}),Xn&&Yu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ED(){Yu&&Yu.disconnect()}function SD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function kD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Fc(zm(t));return i.prefix||(i.prefix=Dr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=eD(i.prefix,t.innerText)||Wm(i.prefix,Sh(t.innerText))),!i.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function CD(t){var e=Xs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||ba()):(e["aria-hidden"]="true",e.focusable="false")),e}function bD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function a_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=kD(t),r=n.iconName,i=n.prefix,s=n.rest,o=CD(t),a=Ch("parseNodeAttributes",{},t),l=e.styleParser?SD(t):[];return F({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var xD=rn.styles;function WS(t){var e=U.autoReplaceSvg==="nest"?a_(t,{styleParser:!1}):a_(t);return~e.extra.classes.indexOf(CS)?Bn("generateLayersText",t,e):Bn("generateSvgReplacementMutation",t,e)}var Mr=new Set;Fm.map(function(t){Mr.add("fa-".concat(t))});Object.keys(Ea[we]).map(Mr.add.bind(Mr));Object.keys(Ea[Re]).map(Mr.add.bind(Mr));Mr=Va(Mr);function l_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xn)return Promise.resolve();var n=Se.documentElement.classList,r=function(d){return n.add("".concat(Qy,"-").concat(d))},i=function(d){return n.remove("".concat(Qy,"-").concat(d))},s=U.autoFetchSvg?Mr:Fm.map(function(c){return"fa-".concat(c)}).concat(Object.keys(xD));s.includes("fa")||s.push("fa");var o=[".".concat(CS,":not([").concat(Ri,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Ri,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Xs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Vm.begin("onTree"),u=a.reduce(function(c,d){try{var f=WS(d);f&&c.push(f)}catch(y){kS||y.name==="MissingIcon"&&console.error(y)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){US(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function ID(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;WS(t).then(function(n){n&&US([n],e)})}function TD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:bh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:bh(i||{})),t(r,F(F({},n),{},{mask:i}))}}var ND=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?vn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,y=n.titleId,g=y===void 0?null:y,w=n.classes,S=w===void 0?[]:w,v=n.attributes,h=v===void 0?{}:v,m=n.styles,E=m===void 0?{}:m;if(e){var C=e.prefix,_=e.iconName,b=e.icon;return zc(F({type:"icon"},e),function(){return Ai("beforeDOMElementCreation",{iconDefinition:e,params:n}),U.autoA11y&&(f?h["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(g||ba()):(h["aria-hidden"]="true",h.focusable="false")),Bm({icons:{main:xh(b),mask:l?xh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:_,transform:F(F({},vn),i),symbol:o,title:f,maskId:c,titleId:g,extra:{attributes:h,styles:E,classes:S}})})}},PD={mixout:function(){return{icon:TD(ND)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=l_,n.nodeCallback=ID,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Se:r,s=n.callback,o=s===void 0?function(){}:s;return l_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(y,g){Promise.all([Ih(i,a),c.iconName?Ih(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var S=Lm(w,2),v=S[0],h=S[1];y([n,Bm({icons:{main:v,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Mc(a);l.length>0&&(i.style=l);var u;return Um(o)&&(u=Bn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},RD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return zc({type:"layer"},function(){Ai("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(Va(s)).join(" ")},children:o}]})}}}},AD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return zc({type:"counter",content:n},function(){return Ai("beforeDOMElementCreation",{content:n,params:r}),dD({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(Va(a))}})})}}}},OD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?vn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,y=f===void 0?{}:f;return zc({type:"text",content:n},function(){return Ai("beforeDOMElementCreation",{content:n,params:r}),n_({content:n,transform:F(F({},vn),s),title:a,extra:{attributes:d,styles:y,classes:["".concat(U.cssPrefix,"-layers-text")].concat(Va(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(wS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return U.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,n_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},LD=new RegExp('"',"ug"),u_=[1105920,1112319];function DD(t){var e=t.replace(LD,""),n=KL(e,0),r=n>=u_[0]&&n<=u_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Sh(i?e[0]:e),isSecondary:r||i}}function c_(t,e){var n="".concat(kL).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Xs(t.children),o=s.filter(function(b){return b.getAttribute(Eh)===e})[0],a=Lr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(TL),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Re:we,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sa[f][l[2].toLowerCase()]:NL[f][u],g=DD(d),w=g.value,S=g.isSecondary,v=l[0].startsWith("FontAwesome"),h=Wm(y,w),m=h;if(v){var E=tD(w);E.iconName&&E.prefix&&(h=E.iconName,y=E.prefix)}if(h&&!S&&(!o||o.getAttribute(Mm)!==y||o.getAttribute(jm)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var C=bD(),_=C.extra;_.attributes[Eh]=e,Ih(h,y).then(function(b){var I=Bm(F(F({},C),{},{icons:{main:b,mask:Hm()},prefix:y,iconName:m,extra:_,watchable:!0})),T=Se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=I.map(function(A){return qa(A)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function MD(t){return Promise.all([c_(t,"::before"),c_(t,"::after")])}function jD(t){return t.parentNode!==document.head&&!~bL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Eh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function d_(t){if(Xn)return new Promise(function(e,n){var r=Xs(t.querySelectorAll("*")).filter(jD).map(MD),i=Vm.begin("searchPseudoElements");$S(),Promise.all(r).then(function(){i(),Nh(),e()}).catch(function(){i(),Nh(),n()})})}var FD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=d_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Se:r;U.searchPseudoElements&&d_(i)}}},f_=!1,zD={mixout:function(){return{dom:{unwatch:function(){$S(),f_=!0}}}},hooks:function(){return{bootstrap:function(){o_(Ch("mutationObserverCallbacks",{}))},noAuto:function(){ED()},watch:function(n){var r=n.observeMutationsRoot;f_?Nh():o_(Ch("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},h_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},UD={mixout:function(){return{parse:{transform:function(n){return h_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=h_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},y={outer:a,inner:d,path:f};return{tag:"g",attributes:F({},y.outer),children:[{tag:"g",attributes:F({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:F(F({},r.icon.attributes),y.path)}]}]}}}},$d={x:0,y:0,width:"100%",height:"100%"};function p_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $D(t){return t.tag==="g"?t.children:[t]}var WD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Fc(i.split(" ").map(function(o){return o.trim()})):Hm();return s.prefix||(s.prefix=Dr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,y=UL({transform:l,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:F(F({},$d),{},{fill:"white"})},w=c.children?{children:c.children.map(p_)}:{},S={tag:"g",attributes:F({},y.inner),children:[p_(F({tag:c.tag,attributes:F(F({},c.attributes),y.path)},w))]},v={tag:"g",attributes:F({},y.outer),children:[S]},h="mask-".concat(a||ba()),m="clip-".concat(a||ba()),E={tag:"mask",attributes:F(F({},$d),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:$D(f)},E]};return r.push(C,{tag:"rect",attributes:F({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},$d)}),{children:r,attributes:i}}}},HD={provides:function(e){var n=!1;Lr.matchMedia&&(n=Lr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:F(F({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=F(F({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:F(F({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:F(F({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:F(F({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:F(F({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:F(F({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:F(F({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:F(F({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},BD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},VD=[HL,PD,RD,AD,OD,FD,zD,UD,WD,HD,BD];iD(VD,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;var Ph=Lt.parse;Lt.findIconDefinition;Lt.toHtml;var GD=Lt.icon;Lt.layer;Lt.text;Lt.counter;function m_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function vr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?m_(Object(n),!0).forEach(function(r){ls(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Qu(t){"@babel/helpers - typeof";return Qu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qu(t)}function ls(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function KD(t,e){if(t==null)return{};var n=qD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Rh(t){return YD(t)||QD(t)||XD(t)||JD()}function YD(t){if(Array.isArray(t))return Ah(t)}function QD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function XD(t,e){if(t){if(typeof t=="string")return Ah(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ah(t,e)}}function Ah(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function JD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,y=t.inverse,g=t.border,w=t.listItem,S=t.flip,v=t.size,h=t.rotation,m=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":y,"fa-border":g,"fa-li":w,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},ls(e,"fa-".concat(v),typeof v<"u"&&v!==null),ls(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ls(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),ls(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(C){return E[C]?C:null}).filter(function(C){return C})}function eM(t){return t=t-0,t===t}function HS(t){return eM(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var tM=["style"];function nM(t){return t.charAt(0).toUpperCase()+t.slice(1)}function rM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=HS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[nM(i)]=s:e[i]=s,e},{})}function BS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return BS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=rM(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[HS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=KD(n,tM);return i.attrs.style=vr(vr({},i.attrs.style),o),t.apply(void 0,[e.tag,vr(vr({},i.attrs),a)].concat(Rh(r)))}var VS=!1;try{VS=!0}catch{}function iM(){if(!VS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function g_(t){if(t&&Qu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ph.icon)return Ph.icon(t);if(t===null)return null;if(t&&Qu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Wd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ls({},t,e):{}}var Tt=Wt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=g_(n),c=Wd("classes",[].concat(Rh(ZD(t)),Rh(s.split(" ")))),d=Wd("transform",typeof t.transform=="string"?Ph.transform(t.transform):t.transform),f=Wd("mask",g_(r)),y=GD(u,vr(vr(vr(vr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!y)return iM("Could not find icon",u),null;var g=y.abstract,w={ref:e};return Object.keys(t).forEach(function(S){Tt.defaultProps.hasOwnProperty(S)||(w[S]=t[S])}),sM(g[0],w)});Tt.displayName="FontAwesomeIcon";Tt.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};Tt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var sM=BS.bind(null,Wt.createElement);const oM="_menu_18jmf_1",aM="_shrink_18jmf_63",Hd={menu:oM,"shrink-menu":"_shrink-menu_18jmf_63",shrink:aM},qm=k.forwardRef(({setIsMenuExpanded:t},e)=>{const{width:n}=k.useContext(qt),{disableToolbarButtons:r}=k.useContext(Br),[i,s]=k.useState(!1);k.useEffect(()=>{n>740?(s(!0),t(!0)):(s(!1),t(!1))},[n,t]);const o=()=>{s(c=>!c),t(c=>!c)},a=()=>{n<=740&&(s(!1),t(!1)),location.pathname.includes("/editor")||r("file","save","exit")},l=i?"":Hd.shrink,u=i?"Zmniejsz menu":"Poszerz menu";return p.jsxs("nav",{className:`${Hd.menu} ${i?"":Hd["shrink-menu"]}`,ref:e,children:[p.jsxs(xo,{className:`${l}`,title:u,onClick:o,children:[p.jsx(Tt,{icon:Om.faBars}),i&&p.jsx("span",{children:" Menu"})]}),p.jsxs(xo,{to:"home",className:l,title:"Główna",onClick:a,children:[p.jsx(Tt,{icon:mS.faHouse}),i&&p.jsx("span",{children:" Główna"})]}),p.jsxs(xo,{to:"editor",className:l,title:"Edytor",onClick:a,children:[p.jsx(Tt,{icon:pS.faPencil}),i&&p.jsx("span",{children:" Edytor"})]}),p.jsxs(xo,{to:"/",replace:!0,className:l,title:"Wyjdź",onClick:a,children:[p.jsx(Tt,{icon:hS.faRightFromBracket}),i&&p.jsx("span",{children:" Wyjdź"})]})]})});qm.displayName="Menu";qm.propTypes={setIsMenuExpanded:R.func};var GS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="angle-right",r=320,i=512,s=[8250],o="f105",a="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faAngleRight=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(GS);const lM="_main_fjt9m_1",uM="_welcome_fjt9m_47",cM="_card_fjt9m_77",Km={main:lM,welcome:uM,card:cM},Yl=({to:t,children:e})=>p.jsx(Pt,{to:t,className:Km.card,children:e});Yl.propTypes={to:R.string,children:R.any};const Oh=({setMainHeader:t})=>(k.useEffect(()=>{t("Przydatne narzędzia")},[t]),p.jsxs("div",{className:Km.welcome,children:[p.jsxs(Yl,{to:"/console/new",children:[p.jsx("h3",{children:"Najnowsze artykuły"}),p.jsx("p",{children:"Sprawdź najnowsze artykuły"}),p.jsx("p",{children:"Zarządzaj najnowszymi"})]}),p.jsxs(Yl,{to:"/console/all",children:[p.jsx("h3",{children:"Wszystkie artykuły"}),p.jsx("p",{children:"Zarządzaj listą artykułów"}),p.jsx("p",{children:"Sprawdzaj dane artykułów"})]}),p.jsxs(Yl,{to:"/console/editor",children:[p.jsx("h3",{children:"Edytor"}),p.jsx("p",{children:"Twórz nowe artykuły"}),p.jsx("p",{children:"Edytuj istniejące artykuły"})]})]}));Oh.propTypes={setMainHeader:R.func};const qS=({setMainHeader:t})=>(k.useEffect(()=>{t("Nowe artykuły")},[t]),p.jsxs("div",{children:[p.jsx("p",{children:"Zmień kolejność artykułów"}),p.jsx("p",{children:"Zmień liczbę nowych artykyłów"}),p.jsx("p",{children:"Zarządzaj artykułami"})]}));qS.propTypes={setMainHeader:R.func};const KS=({setMainHeader:t})=>(k.useEffect(()=>{t("Wszystkie artykuły")},[t]),p.jsx("div",{children:"Lista wszystkich artykuły"}));KS.propTypes={setMainHeader:R.func};var YS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="minimize",r=512,i=512,s=["compress-arrows-alt"],o="f78c",a="M456 224H312c-13.3 0-24-10.7-24-24V56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L442.3 5.7C446 2 450.9 0 456 0s10 2 13.7 5.7l36.7 36.7C510 46 512 50.9 512 56s-2 10-5.7 13.7L433 143l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8zm0 64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-40 40 73.4 73.4c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C466 510 461.1 512 456 512s-10-2-13.7-5.7L369 433l-40 40c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V312c0-13.3 10.7-24 24-24H456zm-256 0c13.3 0 24 10.7 24 24V456c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L69.7 506.3C66 510 61.1 512 56 512s-10-2-13.7-5.7L5.7 469.7C2 466 0 461.1 0 456s2-10 5.7-13.7L79 369 39 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8H200zM56 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l40-40L5.7 69.7C2 66 0 61.1 0 56s2-10 5.7-13.7L42.3 5.7C46 2 50.9 0 56 0s10 2 13.7 5.7L143 79l40-40c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2V200c0 13.3-10.7 24-24 24H56z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faMinimize=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(YS);var QS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="maximize",r=512,i=512,s=["expand-arrows-alt"],o="f31e",a="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faMaximize=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(QS);var Lh={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="arrow-right",r=448,i=512,s=[8594],o="f061",a="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faArrowRight=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Lh);const dM="_dropdown_iota5_1",fM="_menu_iota5_13",hM="_slideFromTop_iota5_1",pM="_slideFromLeft_iota5_1",mM="_active_iota5_63",gM="_option_iota5_71",en={dropdown:dM,menu:fM,"menu-horizontal":"_menu-horizontal_iota5_13",slideFromTop:hM,slideFromLeft:pM,active:mM,option:gM,"option-horizontral":"_option-horizontral_iota5_145","option-disabled":"_option-disabled_iota5_187"},Ql=({title:t,className:e,children:n})=>{const[r,i]=k.useState(!1),s=k.useRef(null),[o,a]=k.useState(en.dropdown);k.useEffect(()=>{a(r?`${en.dropdown} ${en.active}`:`${en.dropdown}`)},[r]),k.useEffect(()=>{function c(d){s.current&&!s.current.contains(d.target)&&i(!1)}return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[i]);const l=()=>{i(!0)},u=Wt.Children.map(n,c=>Wt.isValidElement(c)?Wt.cloneElement(c,{isMenuShown:r,setIsMenuShown:i}):c);return p.jsxs("div",{className:`${o} ${e||""}`,onClick:l,ref:s,children:[p.jsx("div",{children:t}),r&&p.jsx("div",{className:en.menu,children:u})]})};Ql.propTypes={title:R.any,className:R.string,children:R.any};const Dh=({title:t,id:e,disabled:n,isMenuShown:r,setIsMenuShown:i,children:s})=>{const[o,a]=k.useState(!1),l=()=>{a(!0)},u=()=>{a(!1)},c=()=>{a(f=>!f)},d=Wt.Children.map(s,f=>Wt.isValidElement(f)?Wt.cloneElement(f,{isMenuShown:r,setIsMenuShown:i}):f);return p.jsxs("div",{id:e,className:`${en["option-horizontral"]} ${en.option} ${n?en["option-disabled"]:""}`,onTouchEnd:c,onMouseOver:l,onMouseOut:u,children:[p.jsx("div",{children:t}),o&&p.jsx("div",{className:`${en.menu} ${en["menu-horizontal"]}`,children:d})]})};Dh.propTypes={title:R.any,id:R.string,isMenuShown:R.bool,setIsMenuShown:R.func,disabled:R.bool,children:R.any};const XS=({id:t,onClick:e,disabled:n,setIsMenuShown:r,children:i})=>{const s=k.useRef(null);k.useEffect(()=>{n&&s.current.setAttribute("disabled","")},[n]);const o=l=>{r(!1),e&&e(l)},a=l=>{r(!1),e&&e(l)};return p.jsx("button",{type:"button",ref:s,id:t,className:en.option,onMouseUp:o,onTouchEnd:a,children:i})};XS.propTypes={id:R.string,setIsMenuShown:R.func,onClick:R.func,disabled:R.bool,children:R.any};const vM="_modal_1ri9x_1",yM="_close_1ri9x_91",_M="_backdrop_1ri9x_99",Bd={modal:vM,close:yM,backdrop:_M},zs=({title:t,setShowModal:e,children:n})=>{const r=()=>{e(!1)};return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:Bd.backdrop,onClick:r}),p.jsxs("div",{className:Bd.modal,children:[p.jsx("h2",{children:t}),n,p.jsx("div",{className:Bd.close,onClick:r,children:p.jsx("svg",{className:"icon icon-circle_xmark",children:p.jsx("use",{xlinkHref:`${gn}#icon-circle_xmark`})})})]})]})};zs.propTypes={title:R.string,setShowModal:R.func,children:R.any};const sn=k.forwardRef(({type:t,placeholder:e,value:n,disabled:r,required:i,className:s,style:o,id:a,minLength:l,onInput:u,onFocus:c,onBlur:d,onChange:f,validateInput:y,setIsFormInvalid:g},w)=>{const[S,v]=k.useState(!1),h=k.useRef(w);k.useLayoutEffect(()=>{if(!S){h.current.classList.remove(Wl.invalid);return}h.current.classList.add(Wl.invalid)},[S]),k.useEffect(()=>{if(S){h.current.setCustomValidity("Poprawnie wypełnij to pole");return}h.current.setCustomValidity(""),g&&g(!1)},[S,g]);const m=_=>{v(!1),f&&f(_)},E=_=>{c&&c(_)},C=_=>{y&&v(!y(n)),d&&d(_)};return p.jsx("input",{type:t||"text",ref:h,id:a,placeholder:e,value:n,disabled:r,required:i,className:`${Wl.input} ${s||""}`,style:o||{},minLength:l||"",onChange:m,onFocus:E,onBlur:C,onInput:u||(()=>{})})});sn.displayName=sn;sn.propTypes={type:R.string,placeholder:R.string,value:R.string,disabled:R.bool,required:R.bool,className:R.string,style:R.any,id:R.string,minLength:R.number,onInput:R.func,onFocus:R.func,onBlur:R.func,onChange:R.func,validateInput:R.func,setIsFormInvalid:R.func};const wM="_toolbar_tff17_1",EM="_form_tff17_47",SM="_select_tff17_81",kM="_option_tff17_127",CM="_highlight_tff17_191",yt={toolbar:wM,"toolbar-fullscreen":"_toolbar-fullscreen_tff17_37",form:EM,"modal-buttons":"_modal-buttons_tff17_55","modal-button":"_modal-button_tff17_55",select:SM,option:kM,highlight:CM},bM=t=>/\/wiki\/+[\w-]{2,}/i.test(t.trim().toLowerCase()),xM=t=>t.trim().length>=3,IM={address:null,content:null,name:null,author:null},v_={show:!1,title:"",message:""},JS=({setShowSave:t})=>{const{currentUser:e}=Di(),{pushData:n,checkObject:r}=Dc(),{articleContent:i,articleAddress:s,articleName:o}=k.useContext(Br),[a,l]=k.useState(s||""),[u,c]=k.useState(o||""),[d,f]=k.useState(v_),[y,g]=k.useState(!1),[w,S]=k.useState(!1),v=b=>{f({...v_,...b})};k.useEffect(()=>{y&&(async(I=!1)=>{let T=IM;if(T.address=a,T.name=u,T.content=i,e.displayName?T.author=e.displayName:T.author=e.email.split("@")[0],r(T))try{let A=await n(T,I);if(!r(A))throw new Error("Wystąpił niespodziewany błąd.");if(A.found)v({show:!0,cancel:!0,title:"Potwierdź nadpisanie",message:"Artykuł pod tym adresem już istnieje. Czy na pewno chcesz zapisać zmiany?"});else{if(!A.isSuccess)throw new Error(A.message);v({show:!0,title:"Zapisano zmiany",message:A.message})}}catch(A){console.error(A.message),v({show:!0,title:"Wystąpił błąd",message:A.message})}g(!1)})(w)},[y,w]);const h=b=>{if(b.target.value.length<7){l("/wiki/");return}l(b.target.value)},m=b=>{c(b.target.value)},E=()=>{v({show:!1}),t(!1)},C=b=>{b?(S(!0),g(!0)):(v({show:!1}),t(!1))},_=b=>{b.preventDefault(),g(!0)};return p.jsxs(p.Fragment,{children:[!d.show&&p.jsxs(zs,{title:"Zapisywanie artykułu",setShowModal:t,children:[p.jsx("span",{children:"Zapisz wszystkie zmiany lub anuluj"}),p.jsxs("form",{onSubmit:_,onReset:E,className:yt.form,children:[p.jsx(sn,{type:"text",id:"address",placeholder:"Adres do artykułu",value:a,minLength:7,onChange:h,validateInput:bM,required:!0}),p.jsx(sn,{type:"text",id:"name",placeholder:"Nazwa artykułu",value:u,minLength:3,onChange:m,validateInput:xM,required:!0}),p.jsxs("div",{className:yt["modal-buttons"],children:[p.jsx(tn,{type:"submit",children:"Zapisz"}),p.jsx(tn,{type:"reset",highlighted:!1,children:"Anuluj"})]})]})]}),d.show&&p.jsxs(zs,{title:d.title,setShowModal:E,children:[p.jsx("span",{children:d.message}),p.jsxs("div",{className:yt["modal-buttons"],children:[p.jsx(tn,{className:yt["modal-button"],onClick:C.bind(void 0,!!d.cancel),children:d.cancel?"Zapisz":"Ok"}),d.cancel&&p.jsx(tn,{className:yt["modal-button"],highlighted:!1,onClick:E,children:"Anuluj"})]})]})]})};JS.propTypes={setShowSave:R.func};const ZS=({setShowOpen:t})=>{const{data:e,response:n}=Dc(),[r,i]=k.useState(null),{editorContent:s,setArticleContent:o,setArticleAddress:a,setArticleName:l,setEditorContent:u}=k.useContext(Br),c=()=>{t(!1)},d=y=>{y.preventDefault(),n.isSuccess?e.forEach(g=>{g.address===r&&(o(g.content),a(g.address),l(g.name))}):console.error("Can't fetch article data from the database."),c(),s!=="edit"&&u("edit")},f=y=>{i(y.target.value)};return p.jsxs(zs,{title:"Otwórz artykuł",setShowModal:t,children:[p.jsx("span",{children:"Edytuj istniejący artykuł"}),p.jsxs("form",{onSubmit:d,onReset:c,className:yt.form,children:[p.jsxs("select",{className:yt.select,name:"address",onChange:f,required:!0,defaultValue:"",children:[p.jsx("option",{value:"","aria-selected":!0,"aria-disabled":!0,disabled:!0,children:"Wybierz artykuł"}),e&&e.map((y,g)=>p.jsx("option",{value:y.address,children:y.name},g))]}),p.jsxs("div",{className:yt["modal-buttons"],children:[p.jsx(tn,{type:"submit",children:"Otwórz"}),p.jsx(tn,{type:"reset",highlighted:!1,children:"Anuluj"})]})]})]})};ZS.propTypes={setShowOpen:R.func};const TM=t=>{if(navigator.clipboard){navigator.clipboard.writeText(t);return}const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)},ek=({setEditorStyles:t,setEditorContent:e})=>{const{width:n,fullscreen:r,setFullscreen:i}=k.useContext(qt),{toolbarButtons:s,articleContent:o,resetArticleInfo:a,enableToolbarButtons:l,disableToolbarButtons:u,setArticleContent:c}=k.useContext(Br),[d,f]=k.useState(!1),[y,g]=k.useState(!1),[w,S]=k.useState({}),v=()=>{r?(i(!1),S({}),t({})):(i(!0),S({borderTopLeftRadius:"unset",borderTopRightRadius:"unset"}),t({position:"fixed",inset:0,zIndex:50,borderRadius:"unset"}))},h=j=>{j.currentTarget.id==="exit"?(e("home"),u("file",["exit","save"]),u("edit",["copy","newLine","cleanCode"])):j.currentTarget.id==="edit"?(a(),e("edit"),l("file",["exit","save"]),l("edit",["copy","newLine","cleanCode"])):j.currentTarget.id==="save"?f(!0):j.currentTarget.id==="open"?g(!0):(e(j.currentTarget.id),l("file",["exit","save"]),l("edit",["copy","newLine","cleanCode"]))},m=()=>{c(j=>(j+="<br/>",console.log(j),j))},E=()=>{TM(o)},C=()=>{c(""),u("edit",["copy","cleanCode"])},_=j=>j.map((ie,ye)=>p.jsx(XS,{id:ie.id,onClick:ie.onClick,disabled:ie.disabled,children:ie.children},ye)),b=[{id:"edit",onClick:h,disabled:s.file.new.disabled,children:"Nowy"},{id:"open",onClick:h,disabled:s.file.open.disabled,children:"Otwórz"},{id:"save",onClick:h,disabled:s.file.save.disabled,children:"Zapisz"},{id:"exit",onClick:h,disabled:s.file.exit.disabled,children:"Wyjdź"}],I=[{id:"newLine",onClick:m,disabled:s.edit.newLine.disabled,children:"Wstaw nową linię"},{id:"copy",onClick:E,disabled:s.edit.copy.disabled,children:"Skopiuj kod"},{id:"cleanCode",onClick:C,disabled:s.edit.cleanCode.disabled,children:"Wyczyść zawartość"}],T=_(b),A=_(I);return p.jsxs(p.Fragment,{children:[y&&p.jsx(ZS,{setShowOpen:g}),d&&p.jsx(JS,{setShowSave:f}),p.jsxs("nav",{className:yt.toolbar,style:w,children:[n>800?p.jsxs(p.Fragment,{children:[p.jsx(Ql,{title:"Plik",className:yt.option,children:T}),p.jsx(Ql,{title:"Edytuj",className:yt.option,children:A})]}):p.jsxs(Ql,{title:p.jsx(Tt,{icon:Om.faBars,className:yt.option}),children:[p.jsx(Dh,{title:p.jsxs(p.Fragment,{children:["Plik"," ",p.jsx(Tt,{icon:Lh.faArrowRight})]}),children:T}),p.jsx(Dh,{title:p.jsxs(p.Fragment,{children:["Edytuj"," ",p.jsx(Tt,{icon:Lh.faArrowRight})]}),children:A})]}),p.jsx("button",{type:"button",className:`${yt["toolbar-fullscreen"]} ${yt.option}`,title:r?"Zamknij pełny ekran":"Pełny ekran",onClick:v,children:p.jsx(Tt,{icon:r?YS.faMinimize:QS.faMaximize})})]})]})};ek.propTypes={setEditorStyles:R.func,setEditorContent:R.func};const NM="_welcome_1jqsi_1",PM="_option_1jqsi_33",RM="_recent_1jqsi_41",Yr={welcome:NM,option:PM,recent:RM},AM=()=>p.jsxs("div",{className:Yr.welcome,children:[p.jsxs("div",{children:[p.jsx("h3",{children:"Witaj! Zacznij edytować artykuły wybierając jedną z opcji"}),p.jsx("h4",{children:"Edytuj"}),p.jsx("button",{type:"button",className:Yr.option,children:"Nowy..."}),p.jsx("button",{type:"button",className:Yr.option,children:"Otwórz..."})]}),p.jsxs("div",{className:Yr.recent,children:[p.jsx("h4",{children:"Najnowsze"}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx("button",{type:"button",className:Yr.option,children:"Artykuł 1"})}),p.jsx("li",{children:p.jsx("button",{type:"button",className:Yr.option,children:"Artykuł 2"})}),p.jsx("li",{children:p.jsx("button",{type:"button",className:Yr.option,children:"Artykuł 3"})})]})]})]});var tk={exports:{}};(function(t){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function h(m){return m instanceof l?new l(m.type,h(m.content),m.alias):Array.isArray(m)?m.map(h):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++s}),h.__id},clone:function h(m,E){E=E||{};var C,_;switch(a.util.type(m)){case"Object":if(_=a.util.objId(m),E[_])return E[_];C={},E[_]=C;for(var b in m)m.hasOwnProperty(b)&&(C[b]=h(m[b],E));return C;case"Array":return _=a.util.objId(m),E[_]?E[_]:(C=[],E[_]=C,m.forEach(function(I,T){C[T]=h(I,E)}),C);default:return m}},getLanguage:function(h){for(;h;){var m=i.exec(h.className);if(m)return m[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,m){h.className=h.className.replace(RegExp(i,"gi"),""),h.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(h){var m=document.getElementsByTagName("script");for(var E in m)if(m[E].src==h)return m[E]}return null}},isActive:function(h,m,E){for(var C="no-"+m;h;){var _=h.classList;if(_.contains(m))return!0;if(_.contains(C))return!1;h=h.parentElement}return!!E}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(h,m){var E=a.util.clone(a.languages[h]);for(var C in m)E[C]=m[C];return E},insertBefore:function(h,m,E,C){C=C||a.languages;var _=C[h],b={};for(var I in _)if(_.hasOwnProperty(I)){if(I==m)for(var T in E)E.hasOwnProperty(T)&&(b[T]=E[T]);E.hasOwnProperty(I)||(b[I]=_[I])}var A=C[h];return C[h]=b,a.languages.DFS(a.languages,function(j,ie){ie===A&&j!=h&&(this[j]=b)}),b},DFS:function h(m,E,C,_){_=_||{};var b=a.util.objId;for(var I in m)if(m.hasOwnProperty(I)){E.call(m,I,m[I],C||I);var T=m[I],A=a.util.type(T);A==="Object"&&!_[b(T)]?(_[b(T)]=!0,h(T,E,null,_)):A==="Array"&&!_[b(T)]&&(_[b(T)]=!0,h(T,E,I,_))}}},plugins:{},highlightAll:function(h,m){a.highlightAllUnder(document,h,m)},highlightAllUnder:function(h,m,E){var C={callback:E,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),a.hooks.run("before-all-elements-highlight",C);for(var _=0,b;b=C.elements[_++];)a.highlightElement(b,m===!0,C.callback)},highlightElement:function(h,m,E){var C=a.util.getLanguage(h),_=a.languages[C];a.util.setLanguage(h,C);var b=h.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(b,C);var I=h.textContent,T={element:h,language:C,grammar:_,code:I};function A(ie){T.highlightedCode=ie,a.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,a.hooks.run("after-highlight",T),a.hooks.run("complete",T),E&&E.call(T.element)}if(a.hooks.run("before-sanity-check",T),b=T.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!T.code){a.hooks.run("complete",T),E&&E.call(T.element);return}if(a.hooks.run("before-highlight",T),!T.grammar){A(a.util.encode(T.code));return}if(m&&r.Worker){var j=new Worker(a.filename);j.onmessage=function(ie){A(ie.data)},j.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))}else A(a.highlight(T.code,T.grammar,T.language))},highlight:function(h,m,E){var C={code:h,grammar:m,language:E};if(a.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=a.tokenize(C.code,C.grammar),a.hooks.run("after-tokenize",C),l.stringify(a.util.encode(C.tokens),C.language)},tokenize:function(h,m){var E=m.rest;if(E){for(var C in E)m[C]=E[C];delete m.rest}var _=new d;return f(_,_.head,h),c(h,_,m,_.head,0),g(_)},hooks:{all:{},add:function(h,m){var E=a.hooks.all;E[h]=E[h]||[],E[h].push(m)},run:function(h,m){var E=a.hooks.all[h];if(!(!E||!E.length))for(var C=0,_;_=E[C++];)_(m)}},Token:l};r.Prism=a;function l(h,m,E,C){this.type=h,this.content=m,this.alias=E,this.length=(C||"").length|0}l.stringify=function h(m,E){if(typeof m=="string")return m;if(Array.isArray(m)){var C="";return m.forEach(function(A){C+=h(A,E)}),C}var _={type:m.type,content:h(m.content,E),tag:"span",classes:["token",m.type],attributes:{},language:E},b=m.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(_.classes,b):_.classes.push(b)),a.hooks.run("wrap",_);var I="";for(var T in _.attributes)I+=" "+T+'="'+(_.attributes[T]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+I+">"+_.content+"</"+_.tag+">"};function u(h,m,E,C){h.lastIndex=m;var _=h.exec(E);if(_&&C&&_[1]){var b=_[1].length;_.index+=b,_[0]=_[0].slice(b)}return _}function c(h,m,E,C,_,b){for(var I in E)if(!(!E.hasOwnProperty(I)||!E[I])){var T=E[I];T=Array.isArray(T)?T:[T];for(var A=0;A<T.length;++A){if(b&&b.cause==I+","+A)return;var j=T[A],ie=j.inside,ye=!!j.lookbehind,ut=!!j.greedy,Jn=j.alias;if(ut&&!j.pattern.global){var dn=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,dn+"g")}for(var de=j.pattern||j,L=C.next,W=_;L!==m.tail&&!(b&&W>=b.reach);W+=L.value.length,L=L.next){var B=L.value;if(m.length>h.length)return;if(!(B instanceof l)){var ne=1,ee;if(ut){if(ee=u(de,W,h,ye),!ee||ee.index>=h.length)break;var Me=ee.index,Dt=ee.index+ee[0].length,he=W;for(he+=L.value.length;Me>=he;)L=L.next,he+=L.value.length;if(he-=L.value.length,W=he,L.value instanceof l)continue;for(var Qe=L;Qe!==m.tail&&(he<Dt||typeof Qe.value=="string");Qe=Qe.next)ne++,he+=Qe.value.length;ne--,B=h.slice(W,he),ee.index-=W}else if(ee=u(de,0,B,ye),!ee)continue;var Me=ee.index,bt=ee[0],Js=B.slice(0,Me),Ka=B.slice(Me+bt.length),Zs=W+B.length;b&&Zs>b.reach&&(b.reach=Zs);var $e=L.prev;Js&&($e=f(m,$e,Js),W+=Js.length),y(m,$e,ne);var Vr=new l(I,ie?a.tokenize(bt,ie):bt,Jn,bt);if(L=f(m,$e,Vr),Ka&&f(m,L,Ka),ne>1){var Fi={cause:I+","+A,reach:Zs};c(h,m,E,L.prev,W,Fi),b&&Fi.reach>b.reach&&(b.reach=Fi.reach)}}}}}}function d(){var h={value:null,prev:null,next:null},m={value:null,prev:h,next:null};h.next=m,this.head=h,this.tail=m,this.length=0}function f(h,m,E){var C=m.next,_={value:E,prev:m,next:C};return m.next=_,C.prev=_,h.length++,_}function y(h,m,E){for(var C=m.next,_=0;_<E&&C!==h.tail;_++)C=C.next;m.next=C,C.prev=m,h.length-=_}function g(h){for(var m=[],E=h.head.next;E!==h.tail;)m.push(E.value),E=E.next;return m}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(h){var m=JSON.parse(h.data),E=m.language,C=m.code,_=m.immediateClose;r.postMessage(a.highlight(C,a.languages[E],E)),_&&r.close()},!1)),a;var w=a.util.currentScript();w&&(a.filename=w.src,w.hasAttribute("data-manual")&&(a.manual=!0));function S(){a.manual||a.highlightAll()}if(!a.manual){var v=document.readyState;v==="loading"||v==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return a}(e);t.exports&&(t.exports=n),typeof ig<"u"&&(ig.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(w,S){return"✖ Error "+w+" while fetching file: "+S},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",u="loaded",c="failed",d="pre[data-src]:not(["+a+'="'+u+'"]):not(['+a+'="'+l+'"])';function f(w,S,v){var h=new XMLHttpRequest;h.open("GET",w,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?S(h.responseText):h.status>=400?v(i(h.status,h.statusText)):v(s))},h.send(null)}function y(w){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(S){var v=Number(S[1]),h=S[2],m=S[3];return h?m?[v,Number(m)]:[v,void 0]:[v,v]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+d}),n.hooks.add("before-sanity-check",function(w){var S=w.element;if(S.matches(d)){w.code="",S.setAttribute(a,l);var v=S.appendChild(document.createElement("CODE"));v.textContent=r;var h=S.getAttribute("data-src"),m=w.language;if(m==="none"){var E=(/\.(\w+)$/.exec(h)||[,"none"])[1];m=o[E]||E}n.util.setLanguage(v,m),n.util.setLanguage(S,m);var C=n.plugins.autoloader;C&&C.loadLanguages(m),f(h,function(_){S.setAttribute(a,u);var b=y(S.getAttribute("data-range"));if(b){var I=_.split(/\r\n?|\n/g),T=b[0],A=b[1]==null?I.length:b[1];T<0&&(T+=I.length),T=Math.max(0,Math.min(T-1,I.length)),A<0&&(A+=I.length),A=Math.max(0,Math.min(A,I.length)),_=I.slice(T,A).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(T+1))}v.textContent=_,n.highlightElement(v)},function(_){S.setAttribute(a,c),v.textContent=_})}}),n.plugins.fileHighlight={highlight:function(S){for(var v=(S||document).querySelectorAll(d),h=0,m;m=v[h++];)n.highlightElement(m)}};var g=!1;n.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(tk);var OM=tk.exports;const y_=Xu(OM),LM="_code_1ghgu_1",DM="_content_1ghgu_59",Vd={code:LM,"line-numbers":"_line-numbers_1ghgu_25",content:DM};String.prototype.lines=function(){return this.split(`
`)};String.prototype.lineCount=function(){return this.lines().length};const MM=()=>{const{articleContent:t,setArticleContent:e,enableToolbarButtons:n,disableToolbarButtons:r}=k.useContext(Br),i=k.useRef(null),[s,o]=k.useState(1),a=k.useCallback(c=>{o(c.lineCount()),c.length>0?n("edit",["copy","cleanCode"]):r("edit",["copy","cleanCode"]),c[c.length-1]==`
`&&(c+=" "),i.current.innerHTML=y_.highlight(c.replace(new RegExp("&","g"),"&").replace(new RegExp("<","g"),"<"),y_.languages.html,"html")},[r,n]);k.useEffect(()=>{a(t)},[t,a]);const l=c=>{let d=c.target.value;a(d),e(d)},u=c=>{if(c.key=="Tab"){let d=c.target.value;const f=c.target;c.preventDefault();let y=d.slice(0,f.selectionStart),g=d.slice(f.selectionEnd,f.value.length),w=f.selectionEnd+1;f.value=y+"	"+g,f.selectionStart=w,f.selectionEnd=w}};return p.jsxs("div",{className:Vd.code,children:[p.jsx("div",{className:Vd["line-numbers"],children:[...Array(s)].map((c,d)=>p.jsx("span",{},d))}),p.jsxs("div",{className:Vd.content,children:[p.jsx("textarea",{onInput:l,onKeyDown:u,spellCheck:!1,value:t}),p.jsx("pre",{children:p.jsx("code",{className:"language-html",ref:i})})]})]})},jM="_editor_27boe_1",__={editor:jM,"workspace-container":"_workspace-container_27boe_31"},nk=({setMainHeader:t})=>{const{editorContent:e,setEditorContent:n}=k.useContext(Br),[r,i]=k.useState({});k.useEffect(()=>{t("Edytor artykułów")},[t]);let s="";return e==="home"?s=p.jsx(AM,{}):e==="edit"?s=p.jsx(MM,{}):s="Wystąpił błąd",p.jsxs("div",{className:__.editor,style:r,children:[p.jsx(ek,{setEditorStyles:i,setEditorContent:n}),p.jsx("div",{className:__["workspace-container"],children:s})]})};nk.propTypes={setMainHeader:R.func};const FM=()=>{const{articleName:t}=k.useContext(Br),[e,n]=k.useState("");return p.jsxs("main",{className:Km.main,children:[p.jsx("header",{children:p.jsxs("h2",{children:[e,t&&" ",t&&p.jsx(Tt,{icon:GS.faAngleRight}),t&&" ",t&&t]})}),p.jsx("section",{children:p.jsxs(Jx,{children:[p.jsx(Ze,{path:"/home",element:p.jsx(Oh,{setMainHeader:n})}),p.jsx(Ze,{path:"/new",element:p.jsx(qS,{setMainHeader:n})}),p.jsx(Ze,{path:"/all",element:p.jsx(KS,{setMainHeader:n})}),p.jsx(Ze,{path:"/editor",element:p.jsx(nk,{setMainHeader:n})}),p.jsx(Ze,{path:"*",element:p.jsx(Oh,{setMainHeader:n})})]})})]})},zM={file:{main:{disabled:!1},exit:{disabled:!0},new:{disabled:!1},open:{disabled:!1},save:{disabled:!0}},edit:{newLine:{disabled:!0},copy:{disabled:!0},cleanCode:{disabled:!0}}},UM=(t,e)=>{let n=t;return e.type==="DISABLE"&&e.mainButton&&Array.isArray(e.subButtons)&&e.subButtons.forEach(r=>n[e.mainButton][r].disabled=!0),e.type==="ENABLE"&&e.mainButton&&Array.isArray(e.subButtons)&&e.subButtons.forEach(r=>n[e.mainButton][r].disabled=!1),n},rk=({children:t})=>{const e=Sn(),n=sessionStorage.getItem("editorContent")?sessionStorage.getItem("editorContent"):"home",r=sessionStorage.getItem("articleContent")?sessionStorage.getItem("articleContent"):"",i=sessionStorage.getItem("articleAddress")?sessionStorage.getItem("articleAddress"):"",s=sessionStorage.getItem("articleName")?sessionStorage.getItem("articleName"):"",[o,a]=k.useState(n),[l,u]=k.useState(r),[c,d]=k.useState(i),[f,y]=k.useState(s),[g,w]=k.useReducer(UM,zM),S=(E,C)=>{w({type:"DISABLE",mainButton:E,subButtons:C})},v=(E,C)=>{w({type:"ENABLE",mainButton:E,subButtons:C})},m={editorContent:o,articleContent:l,articleAddress:c,articleName:f,toolbarButtons:g,setEditorContent:a,setArticleContent:u,setArticleAddress:d,setArticleName:y,resetArticleInfo:()=>{u(""),d(""),y("")},disableToolbarButtons:S,enableToolbarButtons:v};return k.useEffect(()=>{e.pathname.includes("/editor")&&o==="edit"?(sessionStorage.setItem("editorContent",o),v("file",["exit","save"]),v("edit",["newLine"])):(S("file",["exit","save"]),S("edit",["newLine"]),sessionStorage.removeItem("editorContent"),a("home"))},[o,e.pathname]),k.useEffect(()=>{e.pathname.includes("/editor")&&o==="edit"?(sessionStorage.setItem("articleContent",l),sessionStorage.setItem("articleAddress",c),sessionStorage.setItem("articleName",f)):(sessionStorage.removeItem("articleContent"),u(""),sessionStorage.removeItem("articleAddress"),d(""),sessionStorage.removeItem("articleName"),y(""))},[l,c,f,o,e.pathname]),p.jsx(Br.Provider,{value:m,children:t})};rk.propTypes={children:R.any};const $M="_editor_1jf8s_1",w_={editor:$M,"shrink-menu":"_shrink-menu_1jf8s_55"},WM=()=>{const t=k.useRef(null),{width:e}=k.useContext(qt),[n,r]=k.useState({}),[i,s]=k.useState(!1);return k.useEffect(()=>{const o=t.current.clientWidth;e<=740&&!i&&r({width:o,height:"100vh"})},[e,i]),p.jsx(p.Fragment,{children:p.jsx(rk,{children:p.jsxs("div",{className:`${i?"":w_["shrink-menu"]} ${w_.editor}`,children:[e<=740&&p.jsx("div",{style:n}),p.jsx(qm,{ref:t,setIsMenuExpanded:s}),p.jsx(FM,{})]})})})},HM=()=>p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx(Oa,{}),p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 404"})}),p.jsxs("div",{children:[p.jsx("p",{children:"Nie znaleziono strony."}),p.jsx(xi,{to:"/",children:"Strona główna"})]})]})]}),p.jsx(Hr,{})]}),BM=()=>p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx(Oa,{to:"/",text:"Wróć na stronę główną"}),p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 403"})}),p.jsxs("div",{children:[p.jsx("p",{children:"Nie masz dostępu do tej strony."}),p.jsx(xi,{to:"/logowanie",children:"Zaloguj się"})]})]})]}),p.jsx(Hr,{})]}),VM="_container_15ojo_1",GM="_form_15ojo_13",gt={container:VM,form:GM,"modal-button":"_modal-button_15ojo_77"},E_={show:!1,title:"",message:""},qM=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,KM=t=>t.trim()!==""&&t.trim().length>=3,YM=t=>qM.test(t.toLowerCase())&&t.toLowerCase().trim().length>=3,QM=()=>{const{uid:t,loginWithEmail:e}=Di(),[n,r]=k.useState(""),[i,s]=k.useState(""),[o,a]=k.useState(E_),[l,u]=k.useState(!0),c=h=>{r(h.target.value)},d=h=>{s(h.target.value)},f=()=>{r(""),s(""),u(!1)},y=h=>{if(h.preventDefault(),l){a({show:!0,title:"Wypełnij formularz",message:"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza."});return}f(),e(n,i).then(()=>{a({show:!0,title:"Zalogowano",message:"Logowanie zakończyło się sukcesem.",redirect:"/"})}).catch(m=>{let E={show:!0,title:"Wystąpił błąd",message:"Serwis w tej chwili jest niedostępny. Spróbuj ponownie później"};m.message==="auth/user-not-found"&&(E.message="Nie znaleziono takiego użytkownika"),m.message==="auth/wrong-password"&&(E.message="Podano błędne hasło"),a(E),console.log(m)})},g=()=>{a(E_)},w=p.jsxs("form",{onSubmit:y,className:gt.form,children:[p.jsxs("label",{children:[p.jsxs("p",{children:["E-mail ",p.jsx("span",{className:gt.asterisk,children:"*"})]}),p.jsx(sn,{type:"email",id:"email",value:n,minLength:3,onInput:c,validateInput:YM,setIsFormInvalid:u,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Hasło ",p.jsx("span",{className:gt.asterisk,children:"*"})]}),p.jsx(sn,{type:"password",id:"password",value:i,minLength:3,onInput:d,validateInput:KM,setIsFormInvalid:u,required:!0})]}),p.jsx(tn,{type:"submit",children:"Zaloguj się"}),p.jsxs("p",{children:["Nie masz jeszcze konta?"," ",p.jsx(Pt,{to:"/rejestracja",children:"Zapisz się"})]})]}),S=t?"Jesteś już zalogowany":"Zaloguj się",v=t?"Wyloguj się i zaloguj na inne konto lub przejdź na inną stronę":"Wypełnij formularz logowania";return p.jsxs(p.Fragment,{children:[p.jsxs("main",{className:gt.container,children:[p.jsxs("section",{className:"section",children:[p.jsx("h1",{children:S}),p.jsx("h2",{children:v}),t?p.jsx("div",{children:p.jsx(xi,{to:"/wylogowanie",children:"Wyloguj się"})}):w]}),o.show&&p.jsxs(zs,{title:o.title,setShowModal:g,children:[p.jsx("p",{children:o.message}),o.redirect?p.jsx(xi,{to:o.redirect,className:gt["modal-button"],onClick:g,children:"Ok"}):p.jsx(tn,{className:gt["modal-button"],onClick:g,children:"Ok"})]})]}),p.jsx(Hr,{})]})},S_={show:!1,title:"",message:""},XM=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,Gd=t=>t.trim()!==""&&t.trim().length>=3,JM=t=>XM.test(t.toLowerCase())&&t.toLowerCase().trim().length>=3,ZM=()=>{const{createUser:t}=Di(),e=Aa(),[n,r]=k.useState(""),[i,s]=k.useState(""),[o,a]=k.useState(""),[l,u]=k.useState(""),[c,d]=k.useState(S_),[f,y]=k.useState(!1),[g,w]=k.useState(!0);k.useEffect(()=>{if(o===l){y(!0);return}y(!1)},[o,l]);const S=b=>{r(b.target.value)},v=b=>{s(b.target.value)},h=b=>{a(b.target.value)},m=b=>{u(b.target.value)},E=()=>{r(""),s(""),a(""),u(""),w(!1),y(!0)},C=b=>{if(b.preventDefault(),!f){d({show:!0,title:"Hasła się nie zgadzają",message:"Hasła powinny być takie same w obu polach i powinny mieć co najmniej 6 znaków."});return}if(g){d({show:!0,title:"Wypełnij formularz",message:"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza."});return}E(),t(i,o,n).then(()=>{d({show:!0,title:"Zarejestrowano",message:"Za chwilę nastąpi przejście do strony głównej.",redirect:"/"}),setTimeout(()=>{e("/",{replace:!0})},5e3)}).catch(I=>{let T={show:!0,title:"Wystąpił błąd",message:"Serwis jest niedostępny. Spróbuj ponownie później"};I.message==="auth/email-already-in-use"&&(T.message="Podany e-mail jest już zajęty"),I.message==="auth/weak-password"&&(T.message="Podane hasło jest za słabe. Hasło powinno mieć co najmniej 6 znaków."),d(T),console.log(I)})},_=()=>{d(S_)};return p.jsxs(p.Fragment,{children:[p.jsxs("main",{className:gt.container,children:[p.jsxs("section",{className:"section",children:[p.jsx("h1",{children:"Zarejestruj się"}),p.jsx("h2",{children:"Wypełnij formularz rejestracyjny"}),p.jsxs("form",{onSubmit:C,className:gt.form,children:[p.jsxs("label",{children:[p.jsxs("p",{children:["Nazwa"," ",p.jsx("span",{className:gt.asterisk,children:"*"})]}),p.jsx(sn,{type:"text",id:"name",value:n,minLength:3,onInput:S,validateInput:Gd,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["E-mail"," ",p.jsx("span",{className:gt.asterisk,children:"*"})]}),p.jsx(sn,{type:"email",id:"email",value:i,minLength:3,onInput:v,validateInput:JM,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Hasło"," ",p.jsx("span",{className:gt.asterisk,children:"*"})]}),p.jsx(sn,{type:"password",id:"password",value:o,minLength:6,onInput:h,validateInput:Gd,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Powtórz Hasło"," ",p.jsx("span",{className:gt.asterisk,children:"*"})]}),p.jsx(sn,{type:"password",id:"confirmPassword",value:l,minLength:6,onInput:m,validateInput:Gd,setIsFormInvalid:w,required:!0})]}),p.jsx(tn,{type:"submit",children:"Zapisz się"}),p.jsxs("p",{children:["Masz już konto?"," ",p.jsx(Pt,{to:"/logowanie",children:"Zaloguj się"})]})]})]}),c.show&&p.jsxs(zs,{title:c.title,setShowModal:_,children:[p.jsx("p",{children:c.message}),c.redirect?p.jsx(xi,{to:c.redirect,className:gt["modal-button"],onClick:_,children:"Ok"}):p.jsx(tn,{className:gt["modal-button"],onClick:_,children:"Ok"})]})]}),p.jsx(Hr,{})]})},ej=()=>{const{logout:t}=Di(),e=Aa();return k.useEffect(()=>{t(),e("/",{replace:!0})},[t,e]),p.jsxs(p.Fragment,{children:[p.jsx("main",{children:p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 404"})}),p.jsx("div",{children:p.jsx("p",{children:"Nie znaleziono strony."})})]})}),p.jsx(Hr,{})]})},tj=()=>{const t=Sn(),{currentPage:e,setCurrentPage:n}=k.useContext(qt),{isShown:r}=k.useContext(La);return k.useEffect(()=>{e!==t.pathname&&!r&&n(t.pathname)},[t,e,r,n]),p.jsxs(p.Fragment,{children:[!e.includes("/editor")&&p.jsx(tE,{}),r&&p.jsx(AI,{}),p.jsx(J0,{})]})},nj=()=>{const{uid:t}=Di(),{data:e,response:n}=Dc(),[r,i]=k.useState(!1),[s,o]=k.useState([]),[a,l]=k.useState(!0),u=k.useMemo(()=>t?!0:!!sessionStorage.getItem("uid"),[t]);k.useEffect(()=>{n.isSuccess&&i(e.length>0)},[e,n]),k.useEffect(()=>{n.isSuccess&&o(e)},[e,n]),k.useEffect(()=>{if(u){l(!0);return}l(!1)},[u]);const c=sI(Su(p.jsxs(Ze,{path:"/",element:p.jsx(tj,{}),children:[p.jsx(Ze,{index:!0,element:p.jsx(qR,{})}),p.jsxs(Ze,{path:"wiki",element:p.jsx(KR,{}),children:[p.jsx(Ze,{index:!0,element:p.jsx(cL,{})}),r&&s&&s.map((d,f)=>p.jsx(Ze,{path:d.address,element:p.jsx(fS,{item:d})},f))]}),p.jsx(Ze,{path:"editor/*",element:a?p.jsx(WM,{}):p.jsx(Qx,{to:"/zabroniony",replace:!0})}),p.jsx(Ze,{path:"rejestracja",element:p.jsx(ZM,{})}),p.jsx(Ze,{path:"logowanie",element:p.jsx(QM,{})}),p.jsx(Ze,{path:"wylogowanie",element:p.jsx(ej,{})}),p.jsx(Ze,{path:"zabroniony",element:p.jsx(BM,{})}),p.jsx(Ze,{path:"*",element:p.jsx(HM,{})})]})));return p.jsx(hI,{router:c})},ik=({children:t})=>{const[e,n]=k.useState(window.innerWidth),[r,i]=k.useState(window.innerHeight),[s,o]=k.useState(document.location.pathname),[a,l]=k.useState(!1),u={width:e,height:r,currentPage:s,setCurrentPage:o,fullscreen:a,setFullscreen:l};return k.useEffect(()=>{const c=()=>{const f=document.documentElement;f.requestFullscreen?f.requestFullscreen():f.webkitRequestFullscreen?f.webkitRequestFullscreen():f.msRequestFullscreen&&f.msRequestFullscreen()},d=()=>{document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};a?c():document.fullscreenElement&&d()},[a]),k.useEffect(()=>{const c=()=>{n(window.innerWidth),i(window.innerHeight)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),p.jsx(qt.Provider,{value:u,children:t})};ik.propTypes={children:R.any};const sk=({children:t})=>{const[e,n]=k.useState(),r={isShown:e,setIsShown:n};return k.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.removeAttribute("style")},[e]),p.jsx(La.Provider,{value:r,children:t})};sk.propTypes={children:R.any};/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */(function(){if(typeof window<"u"&&window.addEventListener){var t=Object.create(null),e,n,r=function(){clearTimeout(n),n=setTimeout(e,100)},i=function(){},s=function(){var u;window.addEventListener("resize",r,!1),window.addEventListener("orientationchange",r,!1),window.MutationObserver?(u=new MutationObserver(r),u.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i=function(){try{u.disconnect(),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)}catch{}}):(document.documentElement.addEventListener("DOMSubtreeModified",r,!1),i=function(){document.documentElement.removeEventListener("DOMSubtreeModified",r,!1),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)})},o=function(u){function c(g){var w;return g.protocol!==void 0?w=g:(w=document.createElement("a"),w.href=g),w.protocol.replace(/:/g,"")+w.host}var d,f,y;return window.XMLHttpRequest&&(d=new XMLHttpRequest,f=c(location),y=c(u),d.withCredentials===void 0&&y!==""&&y!==f?d=XDomainRequest||void 0:d=XMLHttpRequest),d},a="http://www.w3.org/1999/xlink";e=function(){var u,c,d,f,y,g=0,w,S,v,h,m;function E(){g-=1,g===0&&(i(),s())}function C(I){return function(){t[I.base]!==!0&&(I.useEl.setAttributeNS(a,"xlink:href","#"+I.hash),I.useEl.hasAttribute("href")&&I.useEl.setAttribute("href","#"+I.hash))}}function _(I){return function(){var T=document.body,A=document.createElement("x"),j;I.onload=null,A.innerHTML=I.responseText,j=A.getElementsByTagName("svg")[0],j&&(j.setAttribute("aria-hidden","true"),j.style.position="absolute",j.style.width=0,j.style.height=0,j.style.overflow="hidden",T.insertBefore(j,T.firstChild)),E()}}function b(I){return function(){I.onerror=null,I.ontimeout=null,E()}}for(i(),h=document.getElementsByTagName("use"),y=0;y<h.length;y+=1){try{c=h[y].getBoundingClientRect()}catch{c=!1}f=h[y].getAttribute("href")||h[y].getAttributeNS(a,"href")||h[y].getAttribute("xlink:href"),f&&f.split?v=f.split("#"):v=["",""],u=v[0],d=v[1],w=c&&c.left===0&&c.right===0&&c.top===0&&c.bottom===0,c&&c.width===0&&c.height===0&&!w?(h[y].hasAttribute("href")&&h[y].setAttributeNS(a,"xlink:href",f),u.length&&(m=t[u],m!==!0&&setTimeout(C({useEl:h[y],base:u,hash:d}),0),m===void 0&&(S=o(u),S!==void 0&&(m=new S,t[u]=m,m.onload=_(m),m.onerror=b(m),m.ontimeout=b(m),m.open("GET",u),m.send(),g+=1)))):w?u.length&&t[u]&&setTimeout(C({useEl:h[y],base:u,hash:d}),0):t[u]===void 0?t[u]=!0:t[u].onload&&(t[u].abort(),delete t[u].onload,t[u]=!0)}h="",g+=1,E()};var l;l=function(){window.removeEventListener("load",l,!1),n=setTimeout(e,0)},document.readyState!=="complete"?window.addEventListener("load",l,!1):l()}})();qd.createRoot(document.getElementById("root")).render(p.jsx(Wt.StrictMode,{children:p.jsx(ik,{children:p.jsx(sk,{children:p.jsx(nj,{})})})}));
