function $_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var W_={exports:{}},dc={},H_={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),Dk=Symbol.for("react.portal"),Mk=Symbol.for("react.fragment"),jk=Symbol.for("react.strict_mode"),Fk=Symbol.for("react.profiler"),zk=Symbol.for("react.provider"),Uk=Symbol.for("react.context"),$k=Symbol.for("react.forward_ref"),Wk=Symbol.for("react.suspense"),Hk=Symbol.for("react.memo"),Bk=Symbol.for("react.lazy"),_g=Symbol.iterator;function Vk(t){return t===null||typeof t!="object"?null:(t=_g&&t[_g]||t["@@iterator"],typeof t=="function"?t:null)}var B_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V_=Object.assign,G_={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=G_,this.updater=n||B_}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Y_(){}Y_.prototype=Ys.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=G_,this.updater=n||B_}var Yh=Gh.prototype=new Y_;Yh.constructor=Gh;V_(Yh,Ys.prototype);Yh.isPureReactComponent=!0;var wg=Array.isArray,q_=Object.prototype.hasOwnProperty,qh={current:null},K_={key:!0,ref:!0,__self:!0,__source:!0};function Q_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)q_.call(e,r)&&!K_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Aa,type:t,key:s,ref:o,props:i,_owner:qh.current}}function Gk(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function Yk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Eg=/\/+/g;function id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yk(""+t.key):e.toString(36)}function zl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Aa:case Dk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+id(o,0):r,wg(i)?(n="",t!=null&&(n=t.replace(Eg,"$&/")+"/"),zl(i,e,n,"",function(u){return u})):i!=null&&(Kh(i)&&(i=Gk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Eg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",wg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+id(s,a);o+=zl(s,e,n,l,i)}else if(l=Vk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+id(s,a++),o+=zl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return zl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Ul={transition:null},Kk={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:qh};function X_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Kh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ys;ie.Fragment=Mk;ie.Profiler=Fk;ie.PureComponent=Gh;ie.StrictMode=jk;ie.Suspense=Wk;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kk;ie.act=X_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=V_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)q_.call(e,l)&&!K_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Aa,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:Uk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zk,_context:t},t.Consumer=t};ie.createElement=Q_;ie.createFactory=function(t){var e=Q_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:$k,render:t}};ie.isValidElement=Kh;ie.lazy=function(t){return{$$typeof:Bk,_payload:{_status:-1,_result:t},_init:qk}};ie.memo=function(t,e){return{$$typeof:Hk,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};ie.unstable_act=X_;ie.useCallback=function(t,e){return _t.current.useCallback(t,e)};ie.useContext=function(t){return _t.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ie.useEffect=function(t,e){return _t.current.useEffect(t,e)};ie.useId=function(){return _t.current.useId()};ie.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return _t.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ie.useRef=function(t){return _t.current.useRef(t)};ie.useState=function(t){return _t.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return _t.current.useTransition()};ie.version="18.3.1";H_.exports=ie;var S=H_.exports;const Gt=cc(S),Qk=$_({__proto__:null,default:Gt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xk=S,Jk=Symbol.for("react.element"),Zk=Symbol.for("react.fragment"),eC=Object.prototype.hasOwnProperty,tC=Xk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nC={key:!0,ref:!0,__self:!0,__source:!0};function J_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eC.call(e,r)&&!nC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Jk,type:t,key:s,ref:o,props:i,_owner:tC.current}}dc.Fragment=Zk;dc.jsx=J_;dc.jsxs=J_;W_.exports=dc;var p=W_.exports,af={},Z_={exports:{}},jt={},ew={exports:{}},tw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,H){var V=D.length;D.push(H);e:for(;0<V;){var se=V-1>>>1,ne=D[se];if(0<i(ne,H))D[se]=H,D[V]=ne,V=se;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],V=D.pop();if(V!==H){D[0]=V;e:for(var se=0,ne=D.length,Ut=ne>>>1;se<Ut;){var ye=2*(se+1)-1,tt=D[ye],$e=ye+1,Jt=D[$e];if(0>i(tt,V))$e<ne&&0>i(Jt,tt)?(D[se]=Jt,D[$e]=V,se=$e):(D[se]=tt,D[ye]=V,se=ye);else if($e<ne&&0>i(Jt,V))D[se]=Jt,D[$e]=V,se=$e;else break e}}return H}function i(D,H){var V=D.sortIndex-H.sortIndex;return V!==0?V:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,y=!1,g=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=D)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function E(D){if(w=!1,m(D),!g)if(n(l)!==null)g=!0,_n(k);else{var H=n(u);H!==null&&ge(E,H.startTime-D)}}function k(D,H){g=!1,w&&(w=!1,v(N),N=-1),y=!0;var V=f;try{for(m(H),c=n(l);c!==null&&(!(c.expirationTime>H)||D&&!j());){var se=c.callback;if(typeof se=="function"){c.callback=null,f=c.priorityLevel;var ne=se(c.expirationTime<=H);H=t.unstable_now(),typeof ne=="function"?c.callback=ne:c===n(l)&&r(l),m(H)}else r(l);c=n(l)}if(c!==null)var Ut=!0;else{var ye=n(u);ye!==null&&ge(E,ye.startTime-H),Ut=!1}return Ut}finally{c=null,f=V,y=!1}}var _=!1,x=null,N=-1,T=5,O=-1;function j(){return!(t.unstable_now()-O<T)}function ae(){if(x!==null){var D=t.unstable_now();O=D;var H=!0;try{H=x(!0,D)}finally{H?de():(_=!1,x=null)}}else _=!1}var de;if(typeof h=="function")de=function(){h(ae)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,yn=Pe.port2;Pe.port1.onmessage=ae,de=function(){yn.postMessage(null)}}else de=function(){C(ae,0)};function _n(D){x=D,_||(_=!0,de())}function ge(D,H){N=C(function(){D(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,_n(k))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var V=f;f=H;try{return D()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=f;f=D;try{return H()}finally{f=V}},t.unstable_scheduleCallback=function(D,H,V){var se=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?se+V:se):V=se,D){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=V+ne,D={id:d++,callback:H,priorityLevel:D,startTime:V,expirationTime:ne,sortIndex:-1},V>se?(D.sortIndex=V,e(u,D),n(l)===null&&D===n(u)&&(w?(v(N),N=-1):w=!0,ge(E,V-se))):(D.sortIndex=ne,e(l,D),g||y||(g=!0,_n(k))),D},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(D){var H=f;return function(){var V=f;f=H;try{return D.apply(this,arguments)}finally{f=V}}}})(tw);ew.exports=tw;var rC=ew.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iC=S,Mt=rC;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nw=new Set,Jo={};function Hi(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(Jo[t]=e,t=0;t<e.length;t++)nw.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=Object.prototype.hasOwnProperty,sC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sg={},kg={};function oC(t){return lf.call(kg,t)?!0:lf.call(Sg,t)?!1:sC.test(t)?kg[t]=!0:(Sg[t]=!0,!1)}function aC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lC(t,e,n,r){if(e===null||typeof e>"u"||aC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Xh);at[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Xh);at[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Xh);at[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jh(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lC(e,n,i,r)&&(n=null),r||i===null?oC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ir=iC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),uf=Symbol.for("react.profiler"),rw=Symbol.for("react.provider"),iw=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),sw=Symbol.for("react.offscreen"),Cg=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=Cg&&t[Cg]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,sd;function bo(t){if(sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sd=e&&e[1]||""}return`
`+sd+t}var od=!1;function ad(t,e){if(!t||od)return"";od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function uC(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=ad(t.type,!1),t;case 11:return t=ad(t.type.render,!1),t;case 1:return t=ad(t.type,!0),t;default:return""}}function ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case uf:return"Profiler";case Zh:return"StrictMode";case cf:return"Suspense";case df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iw:return(t.displayName||"Context")+".Consumer";case rw:return(t._context.displayName||"Context")+".Provider";case ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tp:return e=t.displayName||null,e!==null?e:ff(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return ff(t(e))}catch{}}return null}function cC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ff(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ow(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dC(t){var e=ow(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=dC(t))}function aw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ow(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hf(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lw(t,e){e=e.checked,e!=null&&Jh(t,"checked",e,!1)}function pf(t,e){lw(t,e);var n=Wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&mf(t,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mf(t,e,n){(e!=="number"||lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(xo(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wr(n)}}function uw(t,e){var n=Wr(e.value),r=Wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,dw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fC=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){fC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function fw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function hw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hC=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yf(t,e){if(e){if(hC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function _f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wf=null;function np(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ef=null,ys=null,_s=null;function Pg(t){if(t=Da(t)){if(typeof Ef!="function")throw Error(L(280));var e=t.stateNode;e&&(e=gc(e),Ef(t.stateNode,t.type,e))}}function pw(t){ys?_s?_s.push(t):_s=[t]:ys=t}function mw(){if(ys){var t=ys,e=_s;if(_s=ys=null,Pg(t),e)for(t=0;t<e.length;t++)Pg(e[t])}}function gw(t,e){return t(e)}function vw(){}var ld=!1;function yw(t,e,n){if(ld)return t(e,n);ld=!0;try{return gw(t,e,n)}finally{ld=!1,(ys!==null||_s!==null)&&(vw(),mw())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=gc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Sf=!1;if(qn)try{var co={};Object.defineProperty(co,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Sf=!1}function pC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Do=!1,uu=null,cu=!1,kf=null,mC={onError:function(t){Do=!0,uu=t}};function gC(t,e,n,r,i,s,o,a,l){Do=!1,uu=null,pC.apply(mC,arguments)}function vC(t,e,n,r,i,s,o,a,l){if(gC.apply(this,arguments),Do){if(Do){var u=uu;Do=!1,uu=null}else throw Error(L(198));cu||(cu=!0,kf=u)}}function Bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _w(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ng(t){if(Bi(t)!==t)throw Error(L(188))}function yC(t){var e=t.alternate;if(!e){if(e=Bi(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ng(i),t;if(s===r)return Ng(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function ww(t){return t=yC(t),t!==null?Ew(t):null}function Ew(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ew(t);if(e!==null)return e;t=t.sibling}return null}var Sw=Mt.unstable_scheduleCallback,Rg=Mt.unstable_cancelCallback,_C=Mt.unstable_shouldYield,wC=Mt.unstable_requestPaint,Ue=Mt.unstable_now,EC=Mt.unstable_getCurrentPriorityLevel,rp=Mt.unstable_ImmediatePriority,kw=Mt.unstable_UserBlockingPriority,du=Mt.unstable_NormalPriority,SC=Mt.unstable_LowPriority,Cw=Mt.unstable_IdlePriority,fc=null,Tn=null;function kC(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(fc,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:xC,CC=Math.log,bC=Math.LN2;function xC(t){return t>>>=0,t===0?32:31-(CC(t)/bC|0)|0}var fl=64,hl=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Io(a):(s&=o,s!==0&&(r=Io(s)))}else o=n&~i,o!==0?r=Io(o):s!==0&&(r=Io(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),i=1<<n,r|=t[n],e&=~i;return r}function IC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=IC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bw(){var t=fl;return fl<<=1,!(fl&4194240)&&(fl=64),t}function ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function PC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ip(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function xw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Iw,sp,Tw,Pw,Nw,bf=!1,pl=[],Nr=null,Rr=null,Ar=null,ta=new Map,na=new Map,Sr=[],NC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ag(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function fo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Da(e),e!==null&&sp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RC(t,e,n,r,i){switch(e){case"focusin":return Nr=fo(Nr,t,e,n,r,i),!0;case"dragenter":return Rr=fo(Rr,t,e,n,r,i),!0;case"mouseover":return Ar=fo(Ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ta.set(s,fo(ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,na.set(s,fo(na.get(s)||null,t,e,n,r,i)),!0}return!1}function Rw(t){var e=pi(t.target);if(e!==null){var n=Bi(e);if(n!==null){if(e=n.tag,e===13){if(e=_w(n),e!==null){t.blockedOn=e,Nw(t.priority,function(){Tw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wf=r,n.target.dispatchEvent(r),wf=null}else return e=Da(n),e!==null&&sp(e),t.blockedOn=n,!1;e.shift()}return!0}function Og(t,e,n){$l(t)&&n.delete(e)}function AC(){bf=!1,Nr!==null&&$l(Nr)&&(Nr=null),Rr!==null&&$l(Rr)&&(Rr=null),Ar!==null&&$l(Ar)&&(Ar=null),ta.forEach(Og),na.forEach(Og)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,bf||(bf=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,AC)))}function ra(t){function e(i){return ho(i,t)}if(0<pl.length){ho(pl[0],t);for(var n=1;n<pl.length;n++){var r=pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nr!==null&&ho(Nr,t),Rr!==null&&ho(Rr,t),Ar!==null&&ho(Ar,t),ta.forEach(e),na.forEach(e),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)Rw(n),n.blockedOn===null&&Sr.shift()}var ws=ir.ReactCurrentBatchConfig,hu=!0;function OC(t,e,n,r){var i=fe,s=ws.transition;ws.transition=null;try{fe=1,op(t,e,n,r)}finally{fe=i,ws.transition=s}}function LC(t,e,n,r){var i=fe,s=ws.transition;ws.transition=null;try{fe=4,op(t,e,n,r)}finally{fe=i,ws.transition=s}}function op(t,e,n,r){if(hu){var i=xf(t,e,n,r);if(i===null)_d(t,e,r,pu,n),Ag(t,r);else if(RC(i,t,e,n,r))r.stopPropagation();else if(Ag(t,r),e&4&&-1<NC.indexOf(t)){for(;i!==null;){var s=Da(i);if(s!==null&&Iw(s),s=xf(t,e,n,r),s===null&&_d(t,e,r,pu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _d(t,e,r,null,n)}}var pu=null;function xf(t,e,n,r){if(pu=null,t=np(r),t=pi(t),t!==null)if(e=Bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_w(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pu=t,null}function Aw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(EC()){case rp:return 1;case kw:return 4;case du:case SC:return 16;case Cw:return 536870912;default:return 16}default:return 16}}var Ir=null,ap=null,Wl=null;function Ow(){if(Wl)return Wl;var t,e=ap,n=e.length,r,i="value"in Ir?Ir.value:Ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Wl=i.slice(t,1<r?1-r:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Lg(){return!1}function Ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:Lg,this.isPropagationStopped=Lg,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lp=Ft(qs),La=Oe({},qs,{view:0,detail:0}),DC=Ft(La),cd,dd,po,hc=Oe({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(cd=t.screenX-po.screenX,dd=t.screenY-po.screenY):dd=cd=0,po=t),cd)},movementY:function(t){return"movementY"in t?t.movementY:dd}}),Dg=Ft(hc),MC=Oe({},hc,{dataTransfer:0}),jC=Ft(MC),FC=Oe({},La,{relatedTarget:0}),fd=Ft(FC),zC=Oe({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),UC=Ft(zC),$C=Oe({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WC=Ft($C),HC=Oe({},qs,{data:0}),Mg=Ft(HC),BC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GC[t])?!!e[t]:!1}function up(){return YC}var qC=Oe({},La,{key:function(t){if(t.key){var e=BC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KC=Ft(qC),QC=Oe({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jg=Ft(QC),XC=Oe({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),JC=Ft(XC),ZC=Oe({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),eb=Ft(ZC),tb=Oe({},hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nb=Ft(tb),rb=[9,13,27,32],cp=qn&&"CompositionEvent"in window,Mo=null;qn&&"documentMode"in document&&(Mo=document.documentMode);var ib=qn&&"TextEvent"in window&&!Mo,Lw=qn&&(!cp||Mo&&8<Mo&&11>=Mo),Fg=" ",zg=!1;function Dw(t,e){switch(t){case"keyup":return rb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function sb(t,e){switch(t){case"compositionend":return Mw(e);case"keypress":return e.which!==32?null:(zg=!0,Fg);case"textInput":return t=e.data,t===Fg&&zg?null:t;default:return null}}function ob(t,e){if(rs)return t==="compositionend"||!cp&&Dw(t,e)?(t=Ow(),Wl=ap=Ir=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lw&&e.locale!=="ko"?null:e.data;default:return null}}var ab={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ab[t.type]:e==="textarea"}function jw(t,e,n,r){pw(r),e=mu(e,"onChange"),0<e.length&&(n=new lp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,ia=null;function lb(t){qw(t,0)}function pc(t){var e=os(t);if(aw(e))return t}function ub(t,e){if(t==="change")return e}var Fw=!1;if(qn){var hd;if(qn){var pd="oninput"in document;if(!pd){var $g=document.createElement("div");$g.setAttribute("oninput","return;"),pd=typeof $g.oninput=="function"}hd=pd}else hd=!1;Fw=hd&&(!document.documentMode||9<document.documentMode)}function Wg(){jo&&(jo.detachEvent("onpropertychange",zw),ia=jo=null)}function zw(t){if(t.propertyName==="value"&&pc(ia)){var e=[];jw(e,ia,t,np(t)),yw(lb,e)}}function cb(t,e,n){t==="focusin"?(Wg(),jo=e,ia=n,jo.attachEvent("onpropertychange",zw)):t==="focusout"&&Wg()}function db(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(ia)}function fb(t,e){if(t==="click")return pc(e)}function hb(t,e){if(t==="input"||t==="change")return pc(e)}function pb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:pb;function sa(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lf.call(e,i)||!mn(t[i],e[i]))return!1}return!0}function Hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bg(t,e){var n=Hg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hg(n)}}function Uw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $w(){for(var t=window,e=lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lu(t.document)}return e}function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mb(t){var e=$w(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uw(n.ownerDocument.documentElement,n)){if(r!==null&&dp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bg(n,s);var o=Bg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gb=qn&&"documentMode"in document&&11>=document.documentMode,is=null,If=null,Fo=null,Tf=!1;function Vg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tf||is==null||is!==lu(r)||(r=is,"selectionStart"in r&&dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&sa(Fo,r)||(Fo=r,r=mu(If,"onSelect"),0<r.length&&(e=new lp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=is)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},md={},Ww={};qn&&(Ww=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function mc(t){if(md[t])return md[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ww)return md[t]=e[n];return t}var Hw=mc("animationend"),Bw=mc("animationiteration"),Vw=mc("animationstart"),Gw=mc("transitionend"),Yw=new Map,Gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){Yw.set(t,e),Hi(e,[t])}for(var gd=0;gd<Gg.length;gd++){var vd=Gg[gd],vb=vd.toLowerCase(),yb=vd[0].toUpperCase()+vd.slice(1);Qr(vb,"on"+yb)}Qr(Hw,"onAnimationEnd");Qr(Bw,"onAnimationIteration");Qr(Vw,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(Gw,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_b=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Yg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vC(r,e,void 0,t),t.currentTarget=null}function qw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yg(i,a,u),s=l}}}if(cu)throw t=kf,cu=!1,kf=null,t}function Ce(t,e){var n=e[Of];n===void 0&&(n=e[Of]=new Set);var r=t+"__bubble";n.has(r)||(Kw(e,t,2,!1),n.add(r))}function yd(t,e,n){var r=0;e&&(r|=4),Kw(n,t,r,e)}var vl="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[vl]){t[vl]=!0,nw.forEach(function(n){n!=="selectionchange"&&(_b.has(n)||yd(n,!1,t),yd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vl]||(e[vl]=!0,yd("selectionchange",!1,e))}}function Kw(t,e,n,r){switch(Aw(e)){case 1:var i=OC;break;case 4:i=LC;break;default:i=op}n=i.bind(null,e,n,t),i=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _d(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}yw(function(){var u=s,d=np(n),c=[];e:{var f=Yw.get(t);if(f!==void 0){var y=lp,g=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":y=KC;break;case"focusin":g="focus",y=fd;break;case"focusout":g="blur",y=fd;break;case"beforeblur":case"afterblur":y=fd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=jC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=JC;break;case Hw:case Bw:case Vw:y=UC;break;case Gw:y=eb;break;case"scroll":y=DC;break;case"wheel":y=nb;break;case"copy":case"cut":case"paste":y=WC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=jg}var w=(e&4)!==0,C=!w&&t==="scroll",v=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,m;h!==null;){m=h;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,v!==null&&(E=ea(h,v),E!=null&&w.push(aa(h,E,m)))),C)break;h=h.return}0<w.length&&(f=new y(f,g,null,n,d),c.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==wf&&(g=n.relatedTarget||n.fromElement)&&(pi(g)||g[Kn]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?pi(g):null,g!==null&&(C=Bi(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(w=Dg,E="onMouseLeave",v="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=jg,E="onPointerLeave",v="onPointerEnter",h="pointer"),C=y==null?f:os(y),m=g==null?f:os(g),f=new w(E,h+"leave",y,n,d),f.target=C,f.relatedTarget=m,E=null,pi(d)===u&&(w=new w(v,h+"enter",g,n,d),w.target=m,w.relatedTarget=C,E=w),C=E,y&&g)t:{for(w=y,v=g,h=0,m=w;m;m=Xi(m))h++;for(m=0,E=v;E;E=Xi(E))m++;for(;0<h-m;)w=Xi(w),h--;for(;0<m-h;)v=Xi(v),m--;for(;h--;){if(w===v||v!==null&&w===v.alternate)break t;w=Xi(w),v=Xi(v)}w=null}else w=null;y!==null&&qg(c,f,y,w,!1),g!==null&&C!==null&&qg(c,C,g,w,!0)}}e:{if(f=u?os(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var k=ub;else if(Ug(f))if(Fw)k=hb;else{k=db;var _=cb}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=fb);if(k&&(k=k(t,u))){jw(c,k,n,d);break e}_&&_(t,f,u),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&mf(f,"number",f.value)}switch(_=u?os(u):window,t){case"focusin":(Ug(_)||_.contentEditable==="true")&&(is=_,If=u,Fo=null);break;case"focusout":Fo=If=is=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,Vg(c,n,d);break;case"selectionchange":if(gb)break;case"keydown":case"keyup":Vg(c,n,d)}var x;if(cp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else rs?Dw(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Lw&&n.locale!=="ko"&&(rs||N!=="onCompositionStart"?N==="onCompositionEnd"&&rs&&(x=Ow()):(Ir=d,ap="value"in Ir?Ir.value:Ir.textContent,rs=!0)),_=mu(u,N),0<_.length&&(N=new Mg(N,t,null,n,d),c.push({event:N,listeners:_}),x?N.data=x:(x=Mw(n),x!==null&&(N.data=x)))),(x=ib?sb(t,n):ob(t,n))&&(u=mu(u,"onBeforeInput"),0<u.length&&(d=new Mg("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=x))}qw(c,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ea(t,n),s!=null&&r.unshift(aa(t,s,i)),s=ea(t,e),s!=null&&r.push(aa(t,s,i))),t=t.return}return r}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ea(n,s),l!=null&&o.unshift(aa(n,l,a))):i||(l=ea(n,s),l!=null&&o.push(aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wb=/\r\n?/g,Eb=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(wb,`
`).replace(Eb,"")}function yl(t,e,n){if(e=Kg(e),Kg(t)!==e&&n)throw Error(L(425))}function gu(){}var Pf=null,Nf=null;function Rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,Sb=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,kb=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(t){return Qg.resolve(null).then(t).catch(Cb)}:Af;function Cb(t){setTimeout(function(){throw t})}function wd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ra(e)}function Or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),bn="__reactFiber$"+Ks,la="__reactProps$"+Ks,Kn="__reactContainer$"+Ks,Of="__reactEvents$"+Ks,bb="__reactListeners$"+Ks,xb="__reactHandles$"+Ks;function pi(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kn]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xg(t);t!==null;){if(n=t[bn])return n;t=Xg(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[bn]||t[Kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function gc(t){return t[la]||null}var Lf=[],as=-1;function Xr(t){return{current:t}}function xe(t){0>as||(t.current=Lf[as],Lf[as]=null,as--)}function ke(t,e){as++,Lf[as]=t.current,t.current=e}var Hr={},ft=Xr(Hr),xt=Xr(!1),bi=Hr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return Hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function vu(){xe(xt),xe(ft)}function Jg(t,e,n){if(ft.current!==Hr)throw Error(L(168));ke(ft,e),ke(xt,n)}function Qw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,cC(t)||"Unknown",i));return Oe({},n,r)}function yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,bi=ft.current,ke(ft,t),ke(xt,xt.current),!0}function Zg(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Qw(t,e,bi),r.__reactInternalMemoizedMergedChildContext=t,xe(xt),xe(ft),ke(ft,t)):xe(xt),ke(xt,n)}var Mn=null,vc=!1,Ed=!1;function Xw(t){Mn===null?Mn=[t]:Mn.push(t)}function Ib(t){vc=!0,Xw(t)}function Jr(){if(!Ed&&Mn!==null){Ed=!0;var t=0,e=fe;try{var n=Mn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mn=null,vc=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(t+1)),Sw(rp,Jr),i}finally{fe=e,Ed=!1}}return null}var ls=[],us=0,_u=null,wu=0,$t=[],Wt=0,xi=null,Fn=1,zn="";function ai(t,e){ls[us++]=wu,ls[us++]=_u,_u=t,wu=e}function Jw(t,e,n){$t[Wt++]=Fn,$t[Wt++]=zn,$t[Wt++]=xi,xi=t;var r=Fn;t=zn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-dn(e)+i|n<<i|r,zn=s+t}else Fn=1<<s|n<<i|r,zn=t}function fp(t){t.return!==null&&(ai(t,1),Jw(t,1,0))}function hp(t){for(;t===_u;)_u=ls[--us],ls[us]=null,wu=ls[--us],ls[us]=null;for(;t===xi;)xi=$t[--Wt],$t[Wt]=null,zn=$t[--Wt],$t[Wt]=null,Fn=$t[--Wt],$t[Wt]=null}var Dt=null,Ot=null,Te=!1,rn=null;function Zw(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ev(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Ot=Or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xi!==null?{id:Fn,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Ot=null,!0):!1;default:return!1}}function Df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mf(t){if(Te){var e=Ot;if(e){var n=e;if(!ev(t,e)){if(Df(t))throw Error(L(418));e=Or(n.nextSibling);var r=Dt;e&&ev(t,e)?Zw(r,n):(t.flags=t.flags&-4097|2,Te=!1,Dt=t)}}else{if(Df(t))throw Error(L(418));t.flags=t.flags&-4097|2,Te=!1,Dt=t}}}function tv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function _l(t){if(t!==Dt)return!1;if(!Te)return tv(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rf(t.type,t.memoizedProps)),e&&(e=Ot)){if(Df(t))throw e0(),Error(L(418));for(;e;)Zw(t,e),e=Or(e.nextSibling)}if(tv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=Or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Dt?Or(t.stateNode.nextSibling):null;return!0}function e0(){for(var t=Ot;t;)t=Or(t.nextSibling)}function As(){Ot=Dt=null,Te=!1}function pp(t){rn===null?rn=[t]:rn.push(t)}var Tb=ir.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nv(t){var e=t._init;return e(t._payload)}function t0(t){function e(v,h){if(t){var m=v.deletions;m===null?(v.deletions=[h],v.flags|=16):m.push(h)}}function n(v,h){if(!t)return null;for(;h!==null;)e(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=jr(v,h),v.index=0,v.sibling=null,v}function s(v,h,m){return v.index=m,t?(m=v.alternate,m!==null?(m=m.index,m<h?(v.flags|=2,h):m):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,h,m,E){return h===null||h.tag!==6?(h=Td(m,v.mode,E),h.return=v,h):(h=i(h,m),h.return=v,h)}function l(v,h,m,E){var k=m.type;return k===ns?d(v,h,m.props.children,E,m.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_r&&nv(k)===h.type)?(E=i(h,m.props),E.ref=mo(v,h,m),E.return=v,E):(E=Ql(m.type,m.key,m.props,null,v.mode,E),E.ref=mo(v,h,m),E.return=v,E)}function u(v,h,m,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Pd(m,v.mode,E),h.return=v,h):(h=i(h,m.children||[]),h.return=v,h)}function d(v,h,m,E,k){return h===null||h.tag!==7?(h=Ci(m,v.mode,E,k),h.return=v,h):(h=i(h,m),h.return=v,h)}function c(v,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Td(""+h,v.mode,m),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ul:return m=Ql(h.type,h.key,h.props,null,v.mode,m),m.ref=mo(v,null,h),m.return=v,m;case ts:return h=Pd(h,v.mode,m),h.return=v,h;case _r:var E=h._init;return c(v,E(h._payload),m)}if(xo(h)||uo(h))return h=Ci(h,v.mode,m,null),h.return=v,h;wl(v,h)}return null}function f(v,h,m,E){var k=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(v,h,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ul:return m.key===k?l(v,h,m,E):null;case ts:return m.key===k?u(v,h,m,E):null;case _r:return k=m._init,f(v,h,k(m._payload),E)}if(xo(m)||uo(m))return k!==null?null:d(v,h,m,E,null);wl(v,m)}return null}function y(v,h,m,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(m)||null,a(h,v,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ul:return v=v.get(E.key===null?m:E.key)||null,l(h,v,E,k);case ts:return v=v.get(E.key===null?m:E.key)||null,u(h,v,E,k);case _r:var _=E._init;return y(v,h,m,_(E._payload),k)}if(xo(E)||uo(E))return v=v.get(m)||null,d(h,v,E,k,null);wl(h,E)}return null}function g(v,h,m,E){for(var k=null,_=null,x=h,N=h=0,T=null;x!==null&&N<m.length;N++){x.index>N?(T=x,x=null):T=x.sibling;var O=f(v,x,m[N],E);if(O===null){x===null&&(x=T);break}t&&x&&O.alternate===null&&e(v,x),h=s(O,h,N),_===null?k=O:_.sibling=O,_=O,x=T}if(N===m.length)return n(v,x),Te&&ai(v,N),k;if(x===null){for(;N<m.length;N++)x=c(v,m[N],E),x!==null&&(h=s(x,h,N),_===null?k=x:_.sibling=x,_=x);return Te&&ai(v,N),k}for(x=r(v,x);N<m.length;N++)T=y(x,v,N,m[N],E),T!==null&&(t&&T.alternate!==null&&x.delete(T.key===null?N:T.key),h=s(T,h,N),_===null?k=T:_.sibling=T,_=T);return t&&x.forEach(function(j){return e(v,j)}),Te&&ai(v,N),k}function w(v,h,m,E){var k=uo(m);if(typeof k!="function")throw Error(L(150));if(m=k.call(m),m==null)throw Error(L(151));for(var _=k=null,x=h,N=h=0,T=null,O=m.next();x!==null&&!O.done;N++,O=m.next()){x.index>N?(T=x,x=null):T=x.sibling;var j=f(v,x,O.value,E);if(j===null){x===null&&(x=T);break}t&&x&&j.alternate===null&&e(v,x),h=s(j,h,N),_===null?k=j:_.sibling=j,_=j,x=T}if(O.done)return n(v,x),Te&&ai(v,N),k;if(x===null){for(;!O.done;N++,O=m.next())O=c(v,O.value,E),O!==null&&(h=s(O,h,N),_===null?k=O:_.sibling=O,_=O);return Te&&ai(v,N),k}for(x=r(v,x);!O.done;N++,O=m.next())O=y(x,v,N,O.value,E),O!==null&&(t&&O.alternate!==null&&x.delete(O.key===null?N:O.key),h=s(O,h,N),_===null?k=O:_.sibling=O,_=O);return t&&x.forEach(function(ae){return e(v,ae)}),Te&&ai(v,N),k}function C(v,h,m,E){if(typeof m=="object"&&m!==null&&m.type===ns&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ul:e:{for(var k=m.key,_=h;_!==null;){if(_.key===k){if(k=m.type,k===ns){if(_.tag===7){n(v,_.sibling),h=i(_,m.props.children),h.return=v,v=h;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_r&&nv(k)===_.type){n(v,_.sibling),h=i(_,m.props),h.ref=mo(v,_,m),h.return=v,v=h;break e}n(v,_);break}else e(v,_);_=_.sibling}m.type===ns?(h=Ci(m.props.children,v.mode,E,m.key),h.return=v,v=h):(E=Ql(m.type,m.key,m.props,null,v.mode,E),E.ref=mo(v,h,m),E.return=v,v=E)}return o(v);case ts:e:{for(_=m.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(v,h.sibling),h=i(h,m.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else e(v,h);h=h.sibling}h=Pd(m,v.mode,E),h.return=v,v=h}return o(v);case _r:return _=m._init,C(v,h,_(m._payload),E)}if(xo(m))return g(v,h,m,E);if(uo(m))return w(v,h,m,E);wl(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,m),h.return=v,v=h):(n(v,h),h=Td(m,v.mode,E),h.return=v,v=h),o(v)):n(v,h)}return C}var Os=t0(!0),n0=t0(!1),Eu=Xr(null),Su=null,cs=null,mp=null;function gp(){mp=cs=Su=null}function vp(t){var e=Eu.current;xe(Eu),t._currentValue=e}function jf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){Su=t,mp=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(mp!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(Su===null)throw Error(L(308));cs=t,Su.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var mi=null;function yp(t){mi===null?mi=[t]:mi.push(t)}function r0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qn(t,r)}function Qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function _p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qn(t,n)}return i=r.interleaved,i===null?(e.next=e,yp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qn(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ip(t,n)}}function rv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ku(t,e,n,r){var i=t.updateQueue;wr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,w=a;switch(f=e,y=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){c=g.call(y,c,f);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,f=typeof g=="function"?g.call(y,c,f):g,f==null)break e;c=Oe({},c,f);break e;case 2:wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=c):d=d.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ti|=o,t.lanes=o,t.memoizedState=c}}function iv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Ma={},Pn=Xr(Ma),ua=Xr(Ma),ca=Xr(Ma);function gi(t){if(t===Ma)throw Error(L(174));return t}function wp(t,e){switch(ke(ca,e),ke(ua,t),ke(Pn,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}xe(Pn),ke(Pn,e)}function Ls(){xe(Pn),xe(ua),xe(ca)}function s0(t){gi(ca.current);var e=gi(Pn.current),n=vf(e,t.type);e!==n&&(ke(ua,t),ke(Pn,n))}function Ep(t){ua.current===t&&(xe(Pn),xe(ua))}var Re=Xr(0);function Cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sd=[];function Sp(){for(var t=0;t<Sd.length;t++)Sd[t]._workInProgressVersionPrimary=null;Sd.length=0}var Vl=ir.ReactCurrentDispatcher,kd=ir.ReactCurrentBatchConfig,Ii=0,Ae=null,Be=null,Ke=null,bu=!1,zo=!1,da=0,Pb=0;function ut(){throw Error(L(321))}function kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function Cp(t,e,n,r,i,s){if(Ii=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?Ob:Lb,t=n(r,i),zo){s=0;do{if(zo=!1,da=0,25<=s)throw Error(L(301));s+=1,Ke=Be=null,e.updateQueue=null,Vl.current=Db,t=n(r,i)}while(zo)}if(Vl.current=xu,e=Be!==null&&Be.next!==null,Ii=0,Ke=Be=Ae=null,bu=!1,e)throw Error(L(300));return t}function bp(){var t=da!==0;return da=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ae.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Kt(){if(Be===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ke===null?Ae.memoizedState:Ke.next;if(e!==null)Ke=e,Be=t;else{if(t===null)throw Error(L(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ke===null?Ae.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function fa(t,e){return typeof e=="function"?e(t):e}function Cd(t){var e=Kt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Ii&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,Ae.lanes|=d,Ti|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,mn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,Ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bd(t){var e=Kt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mn(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function o0(){}function a0(t,e){var n=Ae,r=Kt(),i=e(),s=!mn(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,xp(c0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,ha(9,u0.bind(null,n,r,i,e),void 0,null),et===null)throw Error(L(349));Ii&30||l0(n,e,i)}return i}function l0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,r){e.value=n,e.getSnapshot=r,d0(e)&&f0(t)}function c0(t,e,n){return n(function(){d0(e)&&f0(t)})}function d0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function f0(t){var e=Qn(t,1);e!==null&&fn(e,t,1,-1)}function sv(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=Ab.bind(null,Ae,t),[e.memoizedState,t]}function ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function h0(){return Kt().memoizedState}function Gl(t,e,n,r){var i=kn();Ae.flags|=t,i.memoizedState=ha(1|e,n,void 0,r===void 0?null:r)}function yc(t,e,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&kp(r,o.deps)){i.memoizedState=ha(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=ha(1|e,n,s,r)}function ov(t,e){return Gl(8390656,8,t,e)}function xp(t,e){return yc(2048,8,t,e)}function p0(t,e){return yc(4,2,t,e)}function m0(t,e){return yc(4,4,t,e)}function g0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v0(t,e,n){return n=n!=null?n.concat([t]):null,yc(4,4,g0.bind(null,e,t),n)}function Ip(){}function y0(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _0(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function w0(t,e,n){return Ii&21?(mn(n,e)||(n=bw(),Ae.lanes|=n,Ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function Nb(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=kd.transition;kd.transition={};try{t(!1),e()}finally{fe=n,kd.transition=r}}function E0(){return Kt().memoizedState}function Rb(t,e,n){var r=Mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S0(t))k0(e,n);else if(n=r0(t,e,n,r),n!==null){var i=vt();fn(n,t,r,i),C0(n,e,r)}}function Ab(t,e,n){var r=Mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S0(t))k0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,mn(a,o)){var l=e.interleaved;l===null?(i.next=i,yp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=r0(t,e,i,r),n!==null&&(i=vt(),fn(n,t,r,i),C0(n,e,r))}}function S0(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function k0(t,e){zo=bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ip(t,n)}}var xu={readContext:qt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},Ob={readContext:qt,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:ov,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,g0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Rb.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:sv,useDebugValue:Ip,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=sv(!1),e=t[0];return t=Nb.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=kn();if(Te){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),et===null)throw Error(L(349));Ii&30||l0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ov(c0.bind(null,r,s,t),[t]),r.flags|=2048,ha(9,u0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=et.identifierPrefix;if(Te){var n=zn,r=Fn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Pb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lb={readContext:qt,useCallback:y0,useContext:qt,useEffect:xp,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:_0,useReducer:Cd,useRef:h0,useState:function(){return Cd(fa)},useDebugValue:Ip,useDeferredValue:function(t){var e=Kt();return w0(e,Be.memoizedState,t)},useTransition:function(){var t=Cd(fa)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:E0,unstable_isNewReconciler:!1},Db={readContext:qt,useCallback:y0,useContext:qt,useEffect:xp,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:_0,useReducer:bd,useRef:h0,useState:function(){return bd(fa)},useDebugValue:Ip,useDeferredValue:function(t){var e=Kt();return Be===null?e.memoizedState=t:w0(e,Be.memoizedState,t)},useTransition:function(){var t=bd(fa)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:E0,unstable_isNewReconciler:!1};function en(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ff(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?Bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Mr(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(fn(e,t,i,r),Bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Mr(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(fn(e,t,i,r),Bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=Mr(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(fn(e,t,r,n),Bl(e,t,r))}};function av(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,s):!0}function b0(t,e,n){var r=!1,i=Hr,s=e.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=It(e)?bi:ft.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):Hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function lv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function zf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_p(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=It(e)?bi:ft.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ff(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_c.enqueueReplaceState(i,i.state,null),ku(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",r=e;do n+=uC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mb=typeof WeakMap=="function"?WeakMap:Map;function x0(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tu||(Tu=!0,Qf=r),Uf(t,e)},n}function I0(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uf(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function uv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Mb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Qb.bind(null,t,e,n),e.then(t,t))}function cv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var jb=ir.ReactCurrentOwner,kt=!1;function gt(t,e,n,r){e.child=t===null?n0(e,null,n,r):Os(e,t.child,n,r)}function fv(t,e,n,r,i){n=n.render;var s=e.ref;return Es(e,i),r=Cp(t,e,n,r,s,i),n=bp(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Te&&n&&fp(e),e.flags|=1,gt(t,e,r,i),e.child)}function hv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T0(t,e,s,r,i)):(t=Ql(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return Xn(t,e,i)}return e.flags|=1,t=jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function T0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sa(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Xn(t,e,i)}return $f(t,e,n,r,i)}function P0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(fs,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(fs,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(fs,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(fs,Rt),Rt|=r;return gt(t,e,i,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $f(t,e,n,r,i){var s=It(n)?bi:ft.current;return s=Rs(e,s),Es(e,i),n=Cp(t,e,n,r,s,i),r=bp(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Te&&r&&fp(e),e.flags|=1,gt(t,e,n,i),e.child)}function pv(t,e,n,r,i){if(It(n)){var s=!0;yu(e)}else s=!1;if(Es(e,i),e.stateNode===null)Yl(t,e),b0(e,n,r),zf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=qt(u):(u=It(n)?bi:ft.current,u=Rs(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&lv(e,o,r,u),wr=!1;var f=e.memoizedState;o.state=f,ku(e,r,o,i),l=e.memoizedState,a!==r||f!==l||xt.current||wr?(typeof d=="function"&&(Ff(e,n,d,r),l=e.memoizedState),(a=wr||av(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,i0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:en(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qt(l):(l=It(n)?bi:ft.current,l=Rs(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&lv(e,o,r,l),wr=!1,f=e.memoizedState,o.state=f,ku(e,r,o,i);var g=e.memoizedState;a!==c||f!==g||xt.current||wr?(typeof y=="function"&&(Ff(e,n,y,r),g=e.memoizedState),(u=wr||av(e,n,u,r,f,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Wf(t,e,n,r,s,i)}function Wf(t,e,n,r,i,s){N0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zg(e,n,!1),Xn(t,e,s);r=e.stateNode,jb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&Zg(e,n,!0),e.child}function R0(t){var e=t.stateNode;e.pendingContext?Jg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jg(t,e.context,!1),wp(t,e.containerInfo)}function mv(t,e,n,r,i){return As(),pp(i),e.flags|=256,gt(t,e,n,r),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function A0(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Re,i&1),t===null)return Mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sc(o,r,0,null),t=Ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bf(n),e.memoizedState=Hf,t):Tp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Fb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=jr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=Ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,r}return s=t.child,t=s.sibling,r=jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tp(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,r){return r!==null&&pp(r),Os(e,t.child,null,n),t=Tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xd(Error(L(422))),El(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sc({mode:"visible",children:r.children},i,0,null),s=Ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=Bf(o),e.memoizedState=Hf,s);if(!(e.mode&1))return El(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(L(419)),r=xd(s,r,void 0),El(t,e,o,r)}if(a=(o&t.childLanes)!==0,kt||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qn(t,i),fn(r,t,i,-1))}return Lp(),r=xd(Error(L(421))),El(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Xb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=Or(i.nextSibling),Dt=e,Te=!0,rn=null,t!==null&&($t[Wt++]=Fn,$t[Wt++]=zn,$t[Wt++]=xi,Fn=t.id,zn=t.overflow,xi=e),e=Tp(e,r.children),e.flags|=4096,e)}function gv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jf(t.return,e,n)}function Id(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function O0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gv(t,n,e);else if(t.tag===19)gv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Id(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Id(e,!0,n,null,s);break;case"together":Id(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zb(t,e,n){switch(e.tag){case 3:R0(e),As();break;case 5:s0(e);break;case 1:It(e.type)&&yu(e);break;case 4:wp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(Eu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?A0(t,e,n):(ke(Re,Re.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);ke(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return O0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,P0(t,e,n)}return Xn(t,e,n)}var L0,Vf,D0,M0;L0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vf=function(){};D0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gi(Pn.current);var s=null;switch(n){case"input":i=hf(t,i),r=hf(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=gf(t,i),r=gf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gu)}yf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};M0=function(t,e,n,r){n!==r&&(e.flags|=4)};function go(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ub(t,e,n){var r=e.pendingProps;switch(hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return It(e.type)&&vu(),ct(e),null;case 3:return r=e.stateNode,Ls(),xe(xt),xe(ft),Sp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(Zf(rn),rn=null))),Vf(t,e),ct(e),null;case 5:Ep(e);var i=gi(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)D0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return ct(e),null}if(t=gi(Pn.current),_l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bn]=e,r[la]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<To.length;i++)Ce(To[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":bg(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":Ig(r,s),Ce("invalid",r)}yf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":cl(r),xg(r,s,!0);break;case"textarea":cl(r),Tg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[la]=r,L0(t,e,!1,!1),e.stateNode=t;e:{switch(o=_f(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<To.length;i++)Ce(To[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":bg(t,r),i=hf(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":Ig(t,r),i=gf(t,r),Ce("invalid",t);break;default:i=r}yf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zo(t,l):typeof l=="number"&&Zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ce("scroll",t):l!=null&&Jh(t,s,l,o))}switch(n){case"input":cl(t),xg(t,r,!1);break;case"textarea":cl(t),Tg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vs(t,!!r.multiple,s,!1):r.defaultValue!=null&&vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)M0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=gi(ca.current),gi(Pn.current),_l(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(s=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return ct(e),null;case 13:if(xe(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Ot!==null&&e.mode&1&&!(e.flags&128))e0(),As(),e.flags|=98560,s=!1;else if(s=_l(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[bn]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else rn!==null&&(Zf(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Ve===0&&(Ve=3):Lp())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return Ls(),Vf(t,e),t===null&&oa(e.stateNode.containerInfo),ct(e),null;case 10:return vp(e.type._context),ct(e),null;case 17:return It(e.type)&&vu(),ct(e),null;case 19:if(xe(Re),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)go(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cu(t),o!==null){for(e.flags|=128,go(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Ms&&(e.flags|=128,r=!0,go(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return ct(e),null}else 2*Ue()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,r=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Re.current,ke(Re,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return Op(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function $b(t,e){switch(hp(e),e.tag){case 1:return It(e.type)&&vu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),xe(xt),xe(ft),Sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ep(e),null;case 13:if(xe(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Re),null;case 4:return Ls(),null;case 10:return vp(e.type._context),null;case 22:case 23:return Op(),null;case 24:return null;default:return null}}var Sl=!1,dt=!1,Wb=typeof WeakSet=="function"?WeakSet:Set,$=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Gf(t,e,n){try{n()}catch(r){De(t,e,r)}}var vv=!1;function Hb(t,e){if(Pf=hu,t=$w(),dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(y=c.firstChild)!==null;)f=c,c=y;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(y=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},hu=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,C=g.memoizedState,v=e.stateNode,h=v.getSnapshotBeforeUpdate(e.elementType===e.type?w:en(e.type,w),C);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(E){De(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return g=vv,vv=!1,g}function Uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gf(e,n,s)}i=i.next}while(i!==r)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j0(t){var e=t.alternate;e!==null&&(t.alternate=null,j0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[la],delete e[Of],delete e[bb],delete e[xb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F0(t){return t.tag===5||t.tag===3||t.tag===4}function yv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gu));else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}function Kf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}var it=null,tn=!1;function mr(t,e,n){for(n=n.child;n!==null;)z0(t,e,n),n=n.sibling}function z0(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:dt||ds(n,e);case 6:var r=it,i=tn;it=null,mr(t,e,n),it=r,tn=i,it!==null&&(tn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(tn?(t=it,n=n.stateNode,t.nodeType===8?wd(t.parentNode,n):t.nodeType===1&&wd(t,n),ra(t)):wd(it,n.stateNode));break;case 4:r=it,i=tn,it=n.stateNode.containerInfo,tn=!0,mr(t,e,n),it=r,tn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gf(n,e,o),i=i.next}while(i!==r)}mr(t,e,n);break;case 1:if(!dt&&(ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){De(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,mr(t,e,n),dt=r):mr(t,e,n);break;default:mr(t,e,n)}}function _v(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wb),e.forEach(function(r){var i=Jb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,tn=!1;break e;case 3:it=a.stateNode.containerInfo,tn=!0;break e;case 4:it=a.stateNode.containerInfo,tn=!0;break e}a=a.return}if(it===null)throw Error(L(160));z0(s,o,i),it=null,tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){De(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,t),e=e.sibling}function U0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zt(e,t),Sn(t),r&4){try{Uo(3,t,t.return),wc(3,t)}catch(w){De(t,t.return,w)}try{Uo(5,t,t.return)}catch(w){De(t,t.return,w)}}break;case 1:Zt(e,t),Sn(t),r&512&&n!==null&&ds(n,n.return);break;case 5:if(Zt(e,t),Sn(t),r&512&&n!==null&&ds(n,n.return),t.flags&32){var i=t.stateNode;try{Zo(i,"")}catch(w){De(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lw(i,s),_f(a,o);var u=_f(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?hw(i,c):d==="dangerouslySetInnerHTML"?dw(i,c):d==="children"?Zo(i,c):Jh(i,d,c,u)}switch(a){case"input":pf(i,s);break;case"textarea":uw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?vs(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?vs(i,!!s.multiple,s.defaultValue,!0):vs(i,!!s.multiple,s.multiple?[]:"",!1))}i[la]=s}catch(w){De(t,t.return,w)}}break;case 6:if(Zt(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){De(t,t.return,w)}}break;case 3:if(Zt(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(w){De(t,t.return,w)}break;case 4:Zt(e,t),Sn(t);break;case 13:Zt(e,t),Sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rp=Ue())),r&4&&_v(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||d,Zt(e,t),dt=u):Zt(e,t),Sn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(c=$=d;$!==null;){switch(f=$,y=f.child,f.tag){case 0:case 11:case 14:case 15:Uo(4,f,f.return);break;case 1:ds(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(w){De(r,n,w)}}break;case 5:ds(f,f.return);break;case 22:if(f.memoizedState!==null){Ev(c);continue}}y!==null?(y.return=f,$=y):Ev(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fw("display",o))}catch(w){De(t,t.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){De(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Zt(e,t),Sn(t),r&4&&_v(t);break;case 21:break;default:Zt(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F0(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var s=yv(t);Kf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=yv(t);qf(t,a,o);break;default:throw Error(L(161))}}catch(l){De(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bb(t,e,n){$=t,$0(t)}function $0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=Sl;var u=dt;if(Sl=o,(dt=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Sv(i):l!==null?(l.return=o,$=l):Sv(i);for(;s!==null;)$=s,$0(s),s=s.sibling;$=i,Sl=a,dt=u}wv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):wv(t)}}function wv(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:en(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&iv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}iv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ra(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}dt||e.flags&512&&Yf(e)}catch(f){De(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Ev(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Sv(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(l){De(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){De(e,i,l)}}var s=e.return;try{Yf(e)}catch(l){De(e,s,l)}break;case 5:var o=e.return;try{Yf(e)}catch(l){De(e,o,l)}}}catch(l){De(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var Vb=Math.ceil,Iu=ir.ReactCurrentDispatcher,Pp=ir.ReactCurrentOwner,Yt=ir.ReactCurrentBatchConfig,oe=0,et=null,He=null,ot=0,Rt=0,fs=Xr(0),Ve=0,pa=null,Ti=0,Ec=0,Np=0,$o=null,Et=null,Rp=0,Ms=1/0,Dn=null,Tu=!1,Qf=null,Dr=null,kl=!1,Tr=null,Pu=0,Wo=0,Xf=null,ql=-1,Kl=0;function vt(){return oe&6?Ue():ql!==-1?ql:ql=Ue()}function Mr(t){return t.mode&1?oe&2&&ot!==0?ot&-ot:Tb.transition!==null?(Kl===0&&(Kl=bw()),Kl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Aw(t.type)),t):1}function fn(t,e,n,r){if(50<Wo)throw Wo=0,Xf=null,Error(L(185));Oa(t,n,r),(!(oe&2)||t!==et)&&(t===et&&(!(oe&2)&&(Ec|=n),Ve===4&&kr(t,ot)),Tt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ms=Ue()+500,vc&&Jr()))}function Tt(t,e){var n=t.callbackNode;TC(t,e);var r=fu(t,t===et?ot:0);if(r===0)n!==null&&Rg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rg(n),e===1)t.tag===0?Ib(kv.bind(null,t)):Xw(kv.bind(null,t)),kb(function(){!(oe&6)&&Jr()}),n=null;else{switch(xw(r)){case 1:n=rp;break;case 4:n=kw;break;case 16:n=du;break;case 536870912:n=Cw;break;default:n=du}n=K0(n,W0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W0(t,e){if(ql=-1,Kl=0,oe&6)throw Error(L(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var r=fu(t,t===et?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nu(t,r);else{e=r;var i=oe;oe|=2;var s=B0();(et!==t||ot!==e)&&(Dn=null,Ms=Ue()+500,ki(t,e));do try{qb();break}catch(a){H0(t,a)}while(!0);gp(),Iu.current=s,oe=i,He!==null?e=0:(et=null,ot=0,e=Ve)}if(e!==0){if(e===2&&(i=Cf(t),i!==0&&(r=i,e=Jf(t,i))),e===1)throw n=pa,ki(t,0),kr(t,r),Tt(t,Ue()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Gb(i)&&(e=Nu(t,r),e===2&&(s=Cf(t),s!==0&&(r=s,e=Jf(t,s))),e===1))throw n=pa,ki(t,0),kr(t,r),Tt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:li(t,Et,Dn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=Rp+500-Ue(),10<e)){if(fu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Af(li.bind(null,t,Et,Dn),e);break}li(t,Et,Dn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vb(r/1960))-r,10<r){t.timeoutHandle=Af(li.bind(null,t,Et,Dn),r);break}li(t,Et,Dn);break;case 5:li(t,Et,Dn);break;default:throw Error(L(329))}}}return Tt(t,Ue()),t.callbackNode===n?W0.bind(null,t):null}function Jf(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(ki(t,e).flags|=256),t=Nu(t,e),t!==2&&(e=Et,Et=n,e!==null&&Zf(e)),t}function Zf(t){Et===null?Et=t:Et.push.apply(Et,t)}function Gb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~Np,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function kv(t){if(oe&6)throw Error(L(327));Ss();var e=fu(t,0);if(!(e&1))return Tt(t,Ue()),null;var n=Nu(t,e);if(t.tag!==0&&n===2){var r=Cf(t);r!==0&&(e=r,n=Jf(t,r))}if(n===1)throw n=pa,ki(t,0),kr(t,e),Tt(t,Ue()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,Et,Dn),Tt(t,Ue()),null}function Ap(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ms=Ue()+500,vc&&Jr())}}function Pi(t){Tr!==null&&Tr.tag===0&&!(oe&6)&&Ss();var e=oe;oe|=1;var n=Yt.transition,r=fe;try{if(Yt.transition=null,fe=1,t)return t()}finally{fe=r,Yt.transition=n,oe=e,!(oe&6)&&Jr()}}function Op(){Rt=fs.current,xe(fs)}function ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sb(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vu();break;case 3:Ls(),xe(xt),xe(ft),Sp();break;case 5:Ep(r);break;case 4:Ls();break;case 13:xe(Re);break;case 19:xe(Re);break;case 10:vp(r.type._context);break;case 22:case 23:Op()}n=n.return}if(et=t,He=t=jr(t.current,null),ot=Rt=e,Ve=0,pa=null,Np=Ec=Ti=0,Et=$o=null,mi!==null){for(e=0;e<mi.length;e++)if(n=mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mi=null}return t}function H0(t,e){do{var n=He;try{if(gp(),Vl.current=xu,bu){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bu=!1}if(Ii=0,Ke=Be=Ae=null,zo=!1,da=0,Pp.current=null,n===null||n.return===null){Ve=1,pa=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=cv(o);if(y!==null){y.flags&=-257,dv(y,o,a,s,e),y.mode&1&&uv(s,u,e),e=y,l=u;var g=e.updateQueue;if(g===null){var w=new Set;w.add(l),e.updateQueue=w}else g.add(l);break e}else{if(!(e&1)){uv(s,u,e),Lp();break e}l=Error(L(426))}}else if(Te&&a.mode&1){var C=cv(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),dv(C,o,a,s,e),pp(Ds(l,a));break e}}s=l=Ds(l,a),Ve!==4&&(Ve=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=x0(s,l,e);rv(s,v);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dr===null||!Dr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=I0(s,a,e);rv(s,E);break e}}s=s.return}while(s!==null)}G0(n)}catch(k){e=k,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function B0(){var t=Iu.current;return Iu.current=xu,t===null?xu:t}function Lp(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),et===null||!(Ti&268435455)&&!(Ec&268435455)||kr(et,ot)}function Nu(t,e){var n=oe;oe|=2;var r=B0();(et!==t||ot!==e)&&(Dn=null,ki(t,e));do try{Yb();break}catch(i){H0(t,i)}while(!0);if(gp(),oe=n,Iu.current=r,He!==null)throw Error(L(261));return et=null,ot=0,Ve}function Yb(){for(;He!==null;)V0(He)}function qb(){for(;He!==null&&!_C();)V0(He)}function V0(t){var e=q0(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?G0(t):He=e,Pp.current=null}function G0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$b(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,He=null;return}}else if(n=Ub(n,e,Rt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ve===0&&(Ve=5)}function li(t,e,n){var r=fe,i=Yt.transition;try{Yt.transition=null,fe=1,Kb(t,e,n,r)}finally{Yt.transition=i,fe=r}return null}function Kb(t,e,n,r){do Ss();while(Tr!==null);if(oe&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PC(t,s),t===et&&(He=et=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,K0(du,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=fe;fe=1;var a=oe;oe|=4,Pp.current=null,Hb(t,n),U0(n,t),mb(Nf),hu=!!Pf,Nf=Pf=null,t.current=n,Bb(n),wC(),oe=a,fe=o,Yt.transition=s}else t.current=n;if(kl&&(kl=!1,Tr=t,Pu=i),s=t.pendingLanes,s===0&&(Dr=null),kC(n.stateNode),Tt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tu)throw Tu=!1,t=Qf,Qf=null,t;return Pu&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===Xf?Wo++:(Wo=0,Xf=t):Wo=0,Jr(),null}function Ss(){if(Tr!==null){var t=xw(Pu),e=Yt.transition,n=fe;try{if(Yt.transition=null,fe=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,Pu=0,oe&6)throw Error(L(331));var i=oe;for(oe|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:Uo(8,d,s)}var c=d.child;if(c!==null)c.return=d,$=c;else for(;$!==null;){d=$;var f=d.sibling,y=d.return;if(j0(d),d===u){$=null;break}if(f!==null){f.return=y,$=f;break}$=y}}}var g=s.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}var h=t.current;for($=h;$!==null;){o=$;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,$=m;else e:for(o=h;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(k){De(a,a.return,k)}if(a===o){$=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,$=E;break e}$=a.return}}if(oe=i,Jr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(fc,t)}catch{}r=!0}return r}finally{fe=n,Yt.transition=e}}return!1}function Cv(t,e,n){e=Ds(n,e),e=x0(t,e,1),t=Lr(t,e,1),e=vt(),t!==null&&(Oa(t,1,e),Tt(t,e))}function De(t,e,n){if(t.tag===3)Cv(t,t,n);else for(;e!==null;){if(e.tag===3){Cv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Ds(n,t),t=I0(e,t,1),e=Lr(e,t,1),t=vt(),e!==null&&(Oa(e,1,t),Tt(e,t));break}}e=e.return}}function Qb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ot&n)===n&&(Ve===4||Ve===3&&(ot&130023424)===ot&&500>Ue()-Rp?ki(t,0):Np|=n),Tt(t,e)}function Y0(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=vt();t=Qn(t,e),t!==null&&(Oa(t,e,n),Tt(t,n))}function Xb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y0(t,n)}function Jb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),Y0(t,n)}var q0;q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,zb(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Te&&e.flags&1048576&&Jw(e,wu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yl(t,e),t=e.pendingProps;var i=Rs(e,ft.current);Es(e,n),i=Cp(null,e,r,t,i,n);var s=bp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,yu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_p(e),i.updater=_c,e.stateNode=i,i._reactInternals=e,zf(e,r,t,n),e=Wf(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&fp(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ex(r),t=en(r,t),i){case 0:e=$f(null,e,r,t,n);break e;case 1:e=pv(null,e,r,t,n);break e;case 11:e=fv(null,e,r,t,n);break e;case 14:e=hv(null,e,r,en(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),$f(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),pv(t,e,r,i,n);case 3:e:{if(R0(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,i0(t,e),ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ds(Error(L(423)),e),e=mv(t,e,r,n,i);break e}else if(r!==i){i=Ds(Error(L(424)),e),e=mv(t,e,r,n,i);break e}else for(Ot=Or(e.stateNode.containerInfo.firstChild),Dt=e,Te=!0,rn=null,n=n0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),r===i){e=Xn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return s0(e),t===null&&Mf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rf(r,i)?o=null:s!==null&&Rf(r,s)&&(e.flags|=32),N0(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Mf(e),null;case 13:return A0(t,e,n);case 4:return wp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Os(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),fv(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(Eu,r._currentValue),r._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===i.children&&!xt.current){e=Xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Es(e,n),i=qt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=en(r,e.pendingProps),i=en(r.type,i),hv(t,e,r,i,n);case 15:return T0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),Yl(t,e),e.tag=1,It(r)?(t=!0,yu(e)):t=!1,Es(e,n),b0(e,r,i),zf(e,r,i,n),Wf(null,e,r,!0,t,n);case 19:return O0(t,e,n);case 22:return P0(t,e,n)}throw Error(L(156,e.tag))};function K0(t,e){return Sw(t,e)}function Zb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new Zb(t,e,n,r)}function Dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ex(t){if(typeof t=="function")return Dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ep)return 11;if(t===tp)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return Ci(n.children,i,s,e);case Zh:o=8,i|=8;break;case uf:return t=Ht(12,n,e,i|2),t.elementType=uf,t.lanes=s,t;case cf:return t=Ht(13,n,e,i),t.elementType=cf,t.lanes=s,t;case df:return t=Ht(19,n,e,i),t.elementType=df,t.lanes=s,t;case sw:return Sc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rw:o=10;break e;case iw:o=9;break e;case ep:o=11;break e;case tp:o=14;break e;case _r:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ci(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function Sc(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=sw,t.lanes=n,t.stateNode={isHidden:!1},t}function Td(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Pd(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ud(0),this.expirationTimes=ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ud(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mp(t,e,n,r,i,s,o,a,l){return t=new tx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_p(s),t}function nx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Q0(t){if(!t)return Hr;t=t._reactInternals;e:{if(Bi(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(It(n))return Qw(t,n,e)}return e}function X0(t,e,n,r,i,s,o,a,l){return t=Mp(n,r,!0,t,i,s,o,a,l),t.context=Q0(null),n=t.current,r=vt(),i=Mr(n),s=Bn(r,i),s.callback=e??null,Lr(n,s,i),t.current.lanes=i,Oa(t,i,r),Tt(t,r),t}function kc(t,e,n,r){var i=e.current,s=vt(),o=Mr(i);return n=Q0(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,o),t!==null&&(fn(t,i,o,s),Bl(t,i,o)),o}function Ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jp(t,e){bv(t,e),(t=t.alternate)&&bv(t,e)}function rx(){return null}var J0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fp(t){this._internalRoot=t}Cc.prototype.render=Fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));kc(t,e,null,null)};Cc.prototype.unmount=Fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pi(function(){kc(null,t,null,null)}),e[Kn]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&Rw(t)}};function zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xv(){}function ix(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ru(o);s.call(u)}}var o=X0(e,r,t,0,null,!1,!1,"",xv);return t._reactRootContainer=o,t[Kn]=o.current,oa(t.nodeType===8?t.parentNode:t),Pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ru(l);a.call(u)}}var l=Mp(t,0,!1,null,null,!1,!1,"",xv);return t._reactRootContainer=l,t[Kn]=l.current,oa(t.nodeType===8?t.parentNode:t),Pi(function(){kc(e,l,n,r)}),l}function xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ru(o);a.call(l)}}kc(e,o,t,i)}else o=ix(n,e,t,i,r);return Ru(o)}Iw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(ip(e,n|1),Tt(e,Ue()),!(oe&6)&&(Ms=Ue()+500,Jr()))}break;case 13:Pi(function(){var r=Qn(t,1);if(r!==null){var i=vt();fn(r,t,1,i)}}),jp(t,1)}};sp=function(t){if(t.tag===13){var e=Qn(t,134217728);if(e!==null){var n=vt();fn(e,t,134217728,n)}jp(t,134217728)}};Tw=function(t){if(t.tag===13){var e=Mr(t),n=Qn(t,e);if(n!==null){var r=vt();fn(n,t,e,r)}jp(t,e)}};Pw=function(){return fe};Nw=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ef=function(t,e,n){switch(e){case"input":if(pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gc(r);if(!i)throw Error(L(90));aw(r),pf(r,i)}}}break;case"textarea":uw(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};gw=Ap;vw=Pi;var sx={usingClientEntryPoint:!1,Events:[Da,os,gc,pw,mw,Ap]},vo={findFiberByHostInstance:pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ox={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ww(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{fc=Cl.inject(ox),Tn=Cl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(e))throw Error(L(200));return nx(t,e,null,n)};jt.createRoot=function(t,e){if(!zp(t))throw Error(L(299));var n=!1,r="",i=J0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mp(t,1,!1,null,null,n,!1,r,i),t[Kn]=e.current,oa(t.nodeType===8?t.parentNode:t),new Fp(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=ww(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return Pi(t)};jt.hydrate=function(t,e,n){if(!bc(e))throw Error(L(200));return xc(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!zp(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=J0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=X0(e,null,t,1,n??null,i,!1,s,o),t[Kn]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cc(e)};jt.render=function(t,e,n){if(!bc(e))throw Error(L(200));return xc(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!bc(t))throw Error(L(40));return t._reactRootContainer?(Pi(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Kn]=null})}),!0):!1};jt.unstable_batchedUpdates=Ap;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bc(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return xc(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(t){console.error(t)}}Z0(),Z_.exports=jt;var Up=Z_.exports;const $p=cc(Up),ax=$_({__proto__:null,default:$p},[Up]);var Iv=Up;af.createRoot=Iv.createRoot,af.hydrateRoot=Iv.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ne(){return Ne=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ne.apply(this,arguments)}var ze;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ze||(ze={}));const Tv="popstate";function lx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ma("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ni(i)}return cx(e,n,null,t)}function X(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function js(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ux(){return Math.random().toString(36).substr(2,8)}function Pv(t,e){return{usr:t.state,key:t.key,idx:e}}function ma(t,e,n,r){return n===void 0&&(n=null),Ne({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?sr(e):e,{state:n,key:e&&e.key||r||ux()})}function Ni(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function sr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ze.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Ne({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=ze.Pop;let C=d(),v=C==null?null:C-u;u=C,l&&l({action:a,location:w.location,delta:v})}function f(C,v){a=ze.Push;let h=ma(w.location,C,v);u=d()+1;let m=Pv(h,u),E=w.createHref(h);try{o.pushState(m,"",E)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function y(C,v){a=ze.Replace;let h=ma(w.location,C,v);u=d();let m=Pv(h,u),E=w.createHref(h);o.replaceState(m,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function g(C){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof C=="string"?C:Ni(C);return h=h.replace(/ $/,"%20"),X(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let w={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Tv,c),l=C,()=>{i.removeEventListener(Tv,c),l=null}},createHref(C){return e(i,C)},createURL:g,encodeLocation(C){let v=g(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:y,go(C){return o.go(C)}};return w}var Ee;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ee||(Ee={}));const dx=new Set(["lazy","caseSensitive","path","id","index","children"]);function fx(t){return t.index===!0}function ga(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],a=typeof i.id=="string"?i.id:o.join("-");if(X(i.index!==!0||!i.children,"Cannot specify children on an index route"),X(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),fx(i)){let l=Ne({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ne({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=ga(i.children,e,o,r)),l}})}function fi(t,e,n){return n===void 0&&(n="/"),Xl(t,e,n,!1)}function Xl(t,e,n,r){let i=typeof e=="string"?sr(e):e,s=Jn(i.pathname||"/",n);if(s==null)return null;let o=e1(t);px(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=bx(s);a=kx(o[l],u,r)}return a}function hx(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function e1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(X(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Vn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(X(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),e1(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ex(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of t1(s.path))i(s,o,l)}),e}function t1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=t1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function px(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Sx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mx=/^:[\w-]+$/,gx=3,vx=2,yx=1,_x=10,wx=-2,Nv=t=>t==="*";function Ex(t,e){let n=t.split("/"),r=n.length;return n.some(Nv)&&(r+=wx),e&&(r+=vx),n.filter(i=>!Nv(i)).reduce((i,s)=>i+(mx.test(s)?gx:s===""?yx:_x),r)}function Sx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kx(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=Au({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Au({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Vn([s,c.pathname]),pathnameBase:Tx(Vn([s,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(s=Vn([s,c.pathnameBase]))}return o}function Au(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Cx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:y}=d;if(f==="*"){let w=a[c]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const g=a[c];return y&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Cx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),js(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return js(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?sr(t):t;return{pathname:n?n.startsWith("/")?n:Ix(n,e):e,search:Px(r),hash:Nx(i)}}function Ix(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ic(t,e){let n=n1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Tc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=sr(t):(i=Ne({},t),X(!i.pathname||!i.pathname.includes("?"),Nd("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),Nd("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),Nd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=xx(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Vn=t=>t.join("/").replace(/\/\/+/g,"/"),Tx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Px=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Nx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Wp{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Pc(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const r1=["post","put","patch","delete"],Rx=new Set(r1),Ax=["get",...r1],Ox=new Set(Ax),Lx=new Set([301,302,303,307,308]),Dx=new Set([307,308]),Rd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Mx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Hp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jx=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),i1="remix-router-transitions";function Fx(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;X(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let b=t.detectErrorBoundary;i=I=>({hasErrorBoundary:b(I)})}else i=jx;let s={},o=ga(t.routes,i,void 0,s),a,l=t.basename||"/",u=t.unstable_dataStrategy||Hx,d=t.unstable_patchRoutesOnMiss,c=Ne({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),f=null,y=new Set,g=null,w=null,C=null,v=t.hydrationData!=null,h=fi(o,t.history.location,l),m=null;if(h==null&&!d){let b=mt(404,{pathname:t.history.location.pathname}),{matches:I,route:P}=Uv(o);h=I,m={[P.id]:b}}h&&d&&rd(h,o,t.history.location.pathname).active&&(h=null);let E;if(!h)E=!1,h=[];else if(h.some(b=>b.route.lazy))E=!1;else if(!h.some(b=>b.route.loader))E=!0;else if(c.v7_partialHydration){let b=t.hydrationData?t.hydrationData.loaderData:null,I=t.hydrationData?t.hydrationData.errors:null,P=R=>R.route.loader?typeof R.route.loader=="function"&&R.route.loader.hydrate===!0?!1:b&&b[R.route.id]!==void 0||I&&I[R.route.id]!==void 0:!0;if(I){let R=h.findIndex(z=>I[z.route.id]!==void 0);E=h.slice(0,R+1).every(P)}else E=h.every(P)}else E=t.hydrationData!=null;let k,_={historyAction:t.history.action,location:t.history.location,matches:h,initialized:E,navigation:Rd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},x=ze.Pop,N=!1,T,O=!1,j=new Map,ae=null,de=!1,Pe=!1,yn=[],_n=[],ge=new Map,D=0,H=-1,V=new Map,se=new Set,ne=new Map,Ut=new Map,ye=new Set,tt=new Map,$e=new Map,Jt=new Map,ri=!1;function el(){if(f=t.history.listen(b=>{let{action:I,location:P,delta:R}=b;if(ri){ri=!1;return}js($e.size===0||R!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=pg({currentLocation:_.location,nextLocation:P,historyAction:I});if(z&&R!=null){ri=!0,t.history.go(R*-1),nl(z,{state:"blocked",location:P,proceed(){nl(z,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go(R)},reset(){let B=new Map(_.blockers);B.set(z,yo),nt({blockers:B})}});return}return ii(I,P)}),n){nI(e,j);let b=()=>rI(e,j);e.addEventListener("pagehide",b),ae=()=>e.removeEventListener("pagehide",b)}return _.initialized||ii(ze.Pop,_.location,{initialHydration:!0}),k}function so(){f&&f(),ae&&ae(),y.clear(),T&&T.abort(),_.fetchers.forEach((b,I)=>tl(I)),_.blockers.forEach((b,I)=>hg(I))}function Yi(b){return y.add(b),()=>y.delete(b)}function nt(b,I){I===void 0&&(I={}),_=Ne({},_,b);let P=[],R=[];c.v7_fetcherPersist&&_.fetchers.forEach((z,B)=>{z.state==="idle"&&(ye.has(B)?R.push(B):P.push(B))}),[...y].forEach(z=>z(_,{deletedFetchers:R,unstable_viewTransitionOpts:I.viewTransitionOpts,unstable_flushSync:I.flushSync===!0})),c.v7_fetcherPersist&&(P.forEach(z=>_.fetchers.delete(z)),R.forEach(z=>tl(z)))}function wn(b,I,P){var R,z;let{flushSync:B}=P===void 0?{}:P,q=_.actionData!=null&&_.navigation.formMethod!=null&&nn(_.navigation.formMethod)&&_.navigation.state==="loading"&&((R=b.state)==null?void 0:R._isRedirect)!==!0,F;I.actionData?Object.keys(I.actionData).length>0?F=I.actionData:F=null:q?F=_.actionData:F=null;let J=I.loaderData?Fv(_.loaderData,I.loaderData,I.matches||[],I.errors):_.loaderData,G=_.blockers;G.size>0&&(G=new Map(G),G.forEach((le,ve)=>G.set(ve,yo)));let Y=N===!0||_.navigation.formMethod!=null&&nn(_.navigation.formMethod)&&((z=b.state)==null?void 0:z._isRedirect)!==!0;a&&(o=a,a=void 0),de||x===ze.Pop||(x===ze.Push?t.history.push(b,b.state):x===ze.Replace&&t.history.replace(b,b.state));let he;if(x===ze.Pop){let le=j.get(_.location.pathname);le&&le.has(b.pathname)?he={currentLocation:_.location,nextLocation:b}:j.has(b.pathname)&&(he={currentLocation:b,nextLocation:_.location})}else if(O){let le=j.get(_.location.pathname);le?le.add(b.pathname):(le=new Set([b.pathname]),j.set(_.location.pathname,le)),he={currentLocation:_.location,nextLocation:b}}nt(Ne({},I,{actionData:F,loaderData:J,historyAction:x,location:b,initialized:!0,navigation:Rd,revalidation:"idle",restoreScrollPosition:gg(b,I.matches||_.matches),preventScrollReset:Y,blockers:G}),{viewTransitionOpts:he,flushSync:B===!0}),x=ze.Pop,N=!1,O=!1,de=!1,Pe=!1,yn=[],_n=[]}async function og(b,I){if(typeof b=="number"){t.history.go(b);return}let P=eh(_.location,_.matches,l,c.v7_prependBasename,b,c.v7_relativeSplatPath,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:R,submission:z,error:B}=Rv(c.v7_normalizeFormMethod,!1,P,I),q=_.location,F=ma(_.location,R,I&&I.state);F=Ne({},F,t.history.encodeLocation(F));let J=I&&I.replace!=null?I.replace:void 0,G=ze.Push;J===!0?G=ze.Replace:J===!1||z!=null&&nn(z.formMethod)&&z.formAction===_.location.pathname+_.location.search&&(G=ze.Replace);let Y=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,he=(I&&I.unstable_flushSync)===!0,le=pg({currentLocation:q,nextLocation:F,historyAction:G});if(le){nl(le,{state:"blocked",location:F,proceed(){nl(le,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),og(b,I)},reset(){let ve=new Map(_.blockers);ve.set(le,yo),nt({blockers:ve})}});return}return await ii(G,F,{submission:z,pendingError:B,preventScrollReset:Y,replace:I&&I.replace,enableViewTransition:I&&I.unstable_viewTransition,flushSync:he})}function Ek(){if(ed(),nt({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){ii(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}ii(x||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function ii(b,I,P){T&&T.abort(),T=null,x=b,de=(P&&P.startUninterruptedRevalidation)===!0,Rk(_.location,_.matches),N=(P&&P.preventScrollReset)===!0,O=(P&&P.enableViewTransition)===!0;let R=a||o,z=P&&P.overrideNavigation,B=fi(R,I,l),q=(P&&P.flushSync)===!0,F=rd(B,R,I.pathname);if(F.active&&F.matches&&(B=F.matches),!B){let{error:ce,notFoundMatches:rt,route:We}=td(I.pathname);wn(I,{matches:rt,loaderData:{},errors:{[We.id]:ce}},{flushSync:q});return}if(_.initialized&&!Pe&&Kx(_.location,I)&&!(P&&P.submission&&nn(P.submission.formMethod))){wn(I,{matches:B},{flushSync:q});return}T=new AbortController;let J=Ji(t.history,I,T.signal,P&&P.submission),G;if(P&&P.pendingError)G=[Ho(B).route.id,{type:Ee.error,error:P.pendingError}];else if(P&&P.submission&&nn(P.submission.formMethod)){let ce=await Sk(J,I,P.submission,B,F.active,{replace:P.replace,flushSync:q});if(ce.shortCircuited)return;if(ce.pendingActionResult){let[rt,We]=ce.pendingActionResult;if(At(We)&&Pc(We.error)&&We.error.status===404){T=null,wn(I,{matches:ce.matches,loaderData:{},errors:{[rt]:We.error}});return}}B=ce.matches||B,G=ce.pendingActionResult,z=Ad(I,P.submission),q=!1,F.active=!1,J=Ji(t.history,J.url,J.signal)}let{shortCircuited:Y,matches:he,loaderData:le,errors:ve}=await kk(J,I,B,F.active,z,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,P&&P.initialHydration===!0,q,G);Y||(T=null,wn(I,Ne({matches:he||B},zv(G),{loaderData:le,errors:ve})))}async function Sk(b,I,P,R,z,B){B===void 0&&(B={}),ed();let q=eI(I,P);if(nt({navigation:q},{flushSync:B.flushSync===!0}),z){let G=await il(R,I.pathname,b.signal);if(G.type==="aborted")return{shortCircuited:!0};if(G.type==="error"){let{error:Y,notFoundMatches:he,route:le}=rl(I.pathname,G);return{matches:he,pendingActionResult:[le.id,{type:Ee.error,error:Y}]}}else if(G.matches)R=G.matches;else{let{notFoundMatches:Y,error:he,route:le}=td(I.pathname);return{matches:Y,pendingActionResult:[le.id,{type:Ee.error,error:he}]}}}let F,J=Po(R,I);if(!J.route.action&&!J.route.lazy)F={type:Ee.error,error:mt(405,{method:b.method,pathname:I.pathname,routeId:J.route.id})};else if(F=(await ao("action",b,[J],R))[0],b.signal.aborted)return{shortCircuited:!0};if(yi(F)){let G;return B&&B.replace!=null?G=B.replace:G=Dv(F.response.headers.get("Location"),new URL(b.url),l)===_.location.pathname+_.location.search,await oo(b,F,{submission:P,replace:G}),{shortCircuited:!0}}if(vi(F))throw mt(400,{type:"defer-action"});if(At(F)){let G=Ho(R,J.route.id);return(B&&B.replace)!==!0&&(x=ze.Push),{matches:R,pendingActionResult:[G.route.id,F]}}return{matches:R,pendingActionResult:[J.route.id,F]}}async function kk(b,I,P,R,z,B,q,F,J,G,Y){let he=z||Ad(I,B),le=B||q||Hv(he),ve=!de&&(!c.v7_partialHydration||!J);if(R){if(ve){let Le=ag(Y);nt(Ne({navigation:he},Le!==void 0?{actionData:Le}:{}),{flushSync:G})}let Z=await il(P,I.pathname,b.signal);if(Z.type==="aborted")return{shortCircuited:!0};if(Z.type==="error"){let{error:Le,notFoundMatches:Nt,route:_e}=rl(I.pathname,Z);return{matches:Nt,loaderData:{},errors:{[_e.id]:Le}}}else if(Z.matches)P=Z.matches;else{let{error:Le,notFoundMatches:Nt,route:_e}=td(I.pathname);return{matches:Nt,loaderData:{},errors:{[_e.id]:Le}}}}let ce=a||o,[rt,We]=Av(t.history,_,P,le,I,c.v7_partialHydration&&J===!0,c.unstable_skipActionErrorRevalidation,Pe,yn,_n,ye,ne,se,ce,l,Y);if(nd(Z=>!(P&&P.some(Le=>Le.route.id===Z))||rt&&rt.some(Le=>Le.route.id===Z)),H=++D,rt.length===0&&We.length===0){let Z=dg();return wn(I,Ne({matches:P,loaderData:{},errors:Y&&At(Y[1])?{[Y[0]]:Y[1].error}:null},zv(Y),Z?{fetchers:new Map(_.fetchers)}:{}),{flushSync:G}),{shortCircuited:!0}}if(ve){let Z={};if(!R){Z.navigation=he;let Le=ag(Y);Le!==void 0&&(Z.actionData=Le)}We.length>0&&(Z.fetchers=Ck(We)),nt(Z,{flushSync:G})}We.forEach(Z=>{ge.has(Z.key)&&hr(Z.key),Z.controller&&ge.set(Z.key,Z.controller)});let lo=()=>We.forEach(Z=>hr(Z.key));T&&T.signal.addEventListener("abort",lo);let{loaderResults:pr,fetcherResults:qi}=await lg(_.matches,P,rt,We,b);if(b.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",lo),We.forEach(Z=>ge.delete(Z.key));let Ki=$v([...pr,...qi]);if(Ki){if(Ki.idx>=rt.length){let Z=We[Ki.idx-rt.length].key;se.add(Z)}return await oo(b,Ki.result,{replace:F}),{shortCircuited:!0}}let{loaderData:Qi,errors:En}=jv(_,P,rt,pr,Y,We,qi,tt);tt.forEach((Z,Le)=>{Z.subscribe(Nt=>{(Nt||Z.done)&&tt.delete(Le)})}),c.v7_partialHydration&&J&&_.errors&&Object.entries(_.errors).filter(Z=>{let[Le]=Z;return!rt.some(Nt=>Nt.route.id===Le)}).forEach(Z=>{let[Le,Nt]=Z;En=Object.assign(En||{},{[Le]:Nt})});let sl=dg(),ol=fg(H),al=sl||ol||We.length>0;return Ne({matches:P,loaderData:Qi,errors:En},al?{fetchers:new Map(_.fetchers)}:{})}function ag(b){if(b&&!At(b[1]))return{[b[0]]:b[1].data};if(_.actionData)return Object.keys(_.actionData).length===0?null:_.actionData}function Ck(b){return b.forEach(I=>{let P=_.fetchers.get(I.key),R=_o(void 0,P?P.data:void 0);_.fetchers.set(I.key,R)}),new Map(_.fetchers)}function bk(b,I,P,R){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ge.has(b)&&hr(b);let z=(R&&R.unstable_flushSync)===!0,B=a||o,q=eh(_.location,_.matches,l,c.v7_prependBasename,P,c.v7_relativeSplatPath,I,R==null?void 0:R.relative),F=fi(B,q,l),J=rd(F,B,q);if(J.active&&J.matches&&(F=J.matches),!F){On(b,I,mt(404,{pathname:q}),{flushSync:z});return}let{path:G,submission:Y,error:he}=Rv(c.v7_normalizeFormMethod,!0,q,R);if(he){On(b,I,he,{flushSync:z});return}let le=Po(F,G);if(N=(R&&R.preventScrollReset)===!0,Y&&nn(Y.formMethod)){xk(b,I,G,le,F,J.active,z,Y);return}ne.set(b,{routeId:I,path:G}),Ik(b,I,G,le,F,J.active,z,Y)}async function xk(b,I,P,R,z,B,q,F){ed(),ne.delete(b);function J(_e){if(!_e.route.action&&!_e.route.lazy){let Ln=mt(405,{method:F.formMethod,pathname:P,routeId:I});return On(b,I,Ln,{flushSync:q}),!0}return!1}if(!B&&J(R))return;let G=_.fetchers.get(b);fr(b,tI(F,G),{flushSync:q});let Y=new AbortController,he=Ji(t.history,P,Y.signal,F);if(B){let _e=await il(z,P,he.signal);if(_e.type==="aborted")return;if(_e.type==="error"){let{error:Ln}=rl(P,_e);On(b,I,Ln,{flushSync:q});return}else if(_e.matches){if(z=_e.matches,R=Po(z,P),J(R))return}else{On(b,I,mt(404,{pathname:P}),{flushSync:q});return}}ge.set(b,Y);let le=D,ce=(await ao("action",he,[R],z))[0];if(he.signal.aborted){ge.get(b)===Y&&ge.delete(b);return}if(c.v7_fetcherPersist&&ye.has(b)){if(yi(ce)||At(ce)){fr(b,yr(void 0));return}}else{if(yi(ce))if(ge.delete(b),H>le){fr(b,yr(void 0));return}else return se.add(b),fr(b,_o(F)),oo(he,ce,{fetcherSubmission:F});if(At(ce)){On(b,I,ce.error);return}}if(vi(ce))throw mt(400,{type:"defer-action"});let rt=_.navigation.location||_.location,We=Ji(t.history,rt,Y.signal),lo=a||o,pr=_.navigation.state!=="idle"?fi(lo,_.navigation.location,l):_.matches;X(pr,"Didn't find any matches after fetcher action");let qi=++D;V.set(b,qi);let Ki=_o(F,ce.data);_.fetchers.set(b,Ki);let[Qi,En]=Av(t.history,_,pr,F,rt,!1,c.unstable_skipActionErrorRevalidation,Pe,yn,_n,ye,ne,se,lo,l,[R.route.id,ce]);En.filter(_e=>_e.key!==b).forEach(_e=>{let Ln=_e.key,vg=_.fetchers.get(Ln),Lk=_o(void 0,vg?vg.data:void 0);_.fetchers.set(Ln,Lk),ge.has(Ln)&&hr(Ln),_e.controller&&ge.set(Ln,_e.controller)}),nt({fetchers:new Map(_.fetchers)});let sl=()=>En.forEach(_e=>hr(_e.key));Y.signal.addEventListener("abort",sl);let{loaderResults:ol,fetcherResults:al}=await lg(_.matches,pr,Qi,En,We);if(Y.signal.aborted)return;Y.signal.removeEventListener("abort",sl),V.delete(b),ge.delete(b),En.forEach(_e=>ge.delete(_e.key));let Z=$v([...ol,...al]);if(Z){if(Z.idx>=Qi.length){let _e=En[Z.idx-Qi.length].key;se.add(_e)}return oo(We,Z.result)}let{loaderData:Le,errors:Nt}=jv(_,_.matches,Qi,ol,void 0,En,al,tt);if(_.fetchers.has(b)){let _e=yr(ce.data);_.fetchers.set(b,_e)}fg(qi),_.navigation.state==="loading"&&qi>H?(X(x,"Expected pending action"),T&&T.abort(),wn(_.navigation.location,{matches:pr,loaderData:Le,errors:Nt,fetchers:new Map(_.fetchers)})):(nt({errors:Nt,loaderData:Fv(_.loaderData,Le,pr,Nt),fetchers:new Map(_.fetchers)}),Pe=!1)}async function Ik(b,I,P,R,z,B,q,F){let J=_.fetchers.get(b);fr(b,_o(F,J?J.data:void 0),{flushSync:q});let G=new AbortController,Y=Ji(t.history,P,G.signal);if(B){let ce=await il(z,P,Y.signal);if(ce.type==="aborted")return;if(ce.type==="error"){let{error:rt}=rl(P,ce);On(b,I,rt,{flushSync:q});return}else if(ce.matches)z=ce.matches,R=Po(z,P);else{On(b,I,mt(404,{pathname:P}),{flushSync:q});return}}ge.set(b,G);let he=D,ve=(await ao("loader",Y,[R],z))[0];if(vi(ve)&&(ve=await u1(ve,Y.signal,!0)||ve),ge.get(b)===G&&ge.delete(b),!Y.signal.aborted){if(ye.has(b)){fr(b,yr(void 0));return}if(yi(ve))if(H>he){fr(b,yr(void 0));return}else{se.add(b),await oo(Y,ve);return}if(At(ve)){On(b,I,ve.error);return}X(!vi(ve),"Unhandled fetcher deferred data"),fr(b,yr(ve.data))}}async function oo(b,I,P){let{submission:R,fetcherSubmission:z,replace:B}=P===void 0?{}:P;I.response.headers.has("X-Remix-Revalidate")&&(Pe=!0);let q=I.response.headers.get("Location");X(q,"Expected a Location header on the redirect Response"),q=Dv(q,new URL(b.url),l);let F=ma(_.location,q,{_isRedirect:!0});if(n){let ve=!1;if(I.response.headers.has("X-Remix-Reload-Document"))ve=!0;else if(Hp.test(q)){const ce=t.history.createURL(q);ve=ce.origin!==e.location.origin||Jn(ce.pathname,l)==null}if(ve){B?e.location.replace(q):e.location.assign(q);return}}T=null;let J=B===!0?ze.Replace:ze.Push,{formMethod:G,formAction:Y,formEncType:he}=_.navigation;!R&&!z&&G&&Y&&he&&(R=Hv(_.navigation));let le=R||z;if(Dx.has(I.response.status)&&le&&nn(le.formMethod))await ii(J,F,{submission:Ne({},le,{formAction:q}),preventScrollReset:N});else{let ve=Ad(F,R);await ii(J,F,{overrideNavigation:ve,fetcherSubmission:z,preventScrollReset:N})}}async function ao(b,I,P,R){try{let z=await Bx(u,b,I,P,R,s,i);return await Promise.all(z.map((B,q)=>{if(Xx(B)){let F=B.result;return{type:Ee.redirect,response:Yx(F,I,P[q].route.id,R,l,c.v7_relativeSplatPath)}}return Gx(B)}))}catch(z){return P.map(()=>({type:Ee.error,error:z}))}}async function lg(b,I,P,R,z){let[B,...q]=await Promise.all([P.length?ao("loader",z,P,I):[],...R.map(F=>{if(F.matches&&F.match&&F.controller){let J=Ji(t.history,F.path,F.controller.signal);return ao("loader",J,[F.match],F.matches).then(G=>G[0])}else return Promise.resolve({type:Ee.error,error:mt(404,{pathname:F.path})})})]);return await Promise.all([Wv(b,P,B,B.map(()=>z.signal),!1,_.loaderData),Wv(b,R.map(F=>F.match),q,R.map(F=>F.controller?F.controller.signal:null),!0)]),{loaderResults:B,fetcherResults:q}}function ed(){Pe=!0,yn.push(...nd()),ne.forEach((b,I)=>{ge.has(I)&&(_n.push(I),hr(I))})}function fr(b,I,P){P===void 0&&(P={}),_.fetchers.set(b,I),nt({fetchers:new Map(_.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function On(b,I,P,R){R===void 0&&(R={});let z=Ho(_.matches,I);tl(b),nt({errors:{[z.route.id]:P},fetchers:new Map(_.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function ug(b){return c.v7_fetcherPersist&&(Ut.set(b,(Ut.get(b)||0)+1),ye.has(b)&&ye.delete(b)),_.fetchers.get(b)||Mx}function tl(b){let I=_.fetchers.get(b);ge.has(b)&&!(I&&I.state==="loading"&&V.has(b))&&hr(b),ne.delete(b),V.delete(b),se.delete(b),ye.delete(b),_.fetchers.delete(b)}function Tk(b){if(c.v7_fetcherPersist){let I=(Ut.get(b)||0)-1;I<=0?(Ut.delete(b),ye.add(b)):Ut.set(b,I)}else tl(b);nt({fetchers:new Map(_.fetchers)})}function hr(b){let I=ge.get(b);X(I,"Expected fetch controller: "+b),I.abort(),ge.delete(b)}function cg(b){for(let I of b){let P=ug(I),R=yr(P.data);_.fetchers.set(I,R)}}function dg(){let b=[],I=!1;for(let P of se){let R=_.fetchers.get(P);X(R,"Expected fetcher: "+P),R.state==="loading"&&(se.delete(P),b.push(P),I=!0)}return cg(b),I}function fg(b){let I=[];for(let[P,R]of V)if(R<b){let z=_.fetchers.get(P);X(z,"Expected fetcher: "+P),z.state==="loading"&&(hr(P),V.delete(P),I.push(P))}return cg(I),I.length>0}function Pk(b,I){let P=_.blockers.get(b)||yo;return $e.get(b)!==I&&$e.set(b,I),P}function hg(b){_.blockers.delete(b),$e.delete(b)}function nl(b,I){let P=_.blockers.get(b)||yo;X(P.state==="unblocked"&&I.state==="blocked"||P.state==="blocked"&&I.state==="blocked"||P.state==="blocked"&&I.state==="proceeding"||P.state==="blocked"&&I.state==="unblocked"||P.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+I.state);let R=new Map(_.blockers);R.set(b,I),nt({blockers:R})}function pg(b){let{currentLocation:I,nextLocation:P,historyAction:R}=b;if($e.size===0)return;$e.size>1&&js(!1,"A router only supports one blocker at a time");let z=Array.from($e.entries()),[B,q]=z[z.length-1],F=_.blockers.get(B);if(!(F&&F.state==="proceeding")&&q({currentLocation:I,nextLocation:P,historyAction:R}))return B}function td(b){let I=mt(404,{pathname:b}),P=a||o,{matches:R,route:z}=Uv(P);return nd(),{notFoundMatches:R,route:z,error:I}}function rl(b,I){let P=I.partialMatches,R=P[P.length-1].route,z=mt(400,{type:"route-discovery",routeId:R.id,pathname:b,message:I.error!=null&&"message"in I.error?I.error:String(I.error)});return{notFoundMatches:P,route:R,error:z}}function nd(b){let I=[];return tt.forEach((P,R)=>{(!b||b(R))&&(P.cancel(),I.push(R),tt.delete(R))}),I}function Nk(b,I,P){if(g=b,C=I,w=P||null,!v&&_.navigation===Rd){v=!0;let R=gg(_.location,_.matches);R!=null&&nt({restoreScrollPosition:R})}return()=>{g=null,C=null,w=null}}function mg(b,I){return w&&w(b,I.map(R=>hx(R,_.loaderData)))||b.key}function Rk(b,I){if(g&&C){let P=mg(b,I);g[P]=C()}}function gg(b,I){if(g){let P=mg(b,I),R=g[P];if(typeof R=="number")return R}return null}function rd(b,I,P){if(d)if(b){let R=b[b.length-1].route;if(R.path&&(R.path==="*"||R.path.endsWith("/*")))return{active:!0,matches:Xl(I,P,l,!0)}}else return{active:!0,matches:Xl(I,P,l,!0)||[]};return{active:!1,matches:null}}async function il(b,I,P){let R=b,z=R.length>0?R[R.length-1].route:null;for(;;){let B=a==null,q=a||o;try{await Wx(d,I,R,q,s,i,Jt,P)}catch(Y){return{type:"error",error:Y,partialMatches:R}}finally{B&&(o=[...o])}if(P.aborted)return{type:"aborted"};let F=fi(q,I,l),J=!1;if(F){let Y=F[F.length-1].route;if(Y.index)return{type:"success",matches:F};if(Y.path&&Y.path.length>0)if(Y.path==="*")J=!0;else return{type:"success",matches:F}}let G=Xl(q,I,l,!0);if(!G||R.map(Y=>Y.route.id).join("-")===G.map(Y=>Y.route.id).join("-"))return{type:"success",matches:J?F:null};if(R=G,z=R[R.length-1].route,z.path==="*")return{type:"success",matches:R}}}function Ak(b){s={},a=ga(b,i,void 0,s)}function Ok(b,I){let P=a==null;o1(b,I,a||o,s,i),P&&(o=[...o],nt({}))}return k={get basename(){return l},get future(){return c},get state(){return _},get routes(){return o},get window(){return e},initialize:el,subscribe:Yi,enableScrollRestoration:Nk,navigate:og,fetch:bk,revalidate:Ek,createHref:b=>t.history.createHref(b),encodeLocation:b=>t.history.encodeLocation(b),getFetcher:ug,deleteFetcher:Tk,dispose:so,getBlocker:Pk,deleteBlocker:hg,patchRoutes:Ok,_internalFetchControllers:ge,_internalActiveDeferreds:tt,_internalSetRoutes:Ak},k}function zx(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function eh(t,e,n,r,i,s,o,a){let l,u;if(o){l=[];for(let c of e)if(l.push(c),c.route.id===o){u=c;break}}else l=e,u=e[e.length-1];let d=Tc(i||".",Ic(l,s),Jn(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Bp(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Vn([n,d.pathname])),Ni(d)}function Rv(t,e,n,r){if(!r||!zx(r))return{path:n};if(r.formMethod&&!Zx(r.formMethod))return{path:n,error:mt(405,{method:r.formMethod})};let i=()=>({path:n,error:mt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=a1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!nn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,g)=>{let[w,C]=g;return""+y+w+"="+C+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!nn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}X(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=th(r.formData),u=r.formData;else if(r.body instanceof FormData)l=th(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Mv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Mv(l)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(nn(d.formMethod))return{path:n,submission:d};let c=sr(n);return e&&c.search&&Bp(c.search)&&l.append("index",""),c.search="?"+l,{path:Ni(c),submission:d}}function Ux(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Av(t,e,n,r,i,s,o,a,l,u,d,c,f,y,g,w){let C=w?At(w[1])?w[1].error:w[1].data:void 0,v=t.createURL(e.location),h=t.createURL(i),m=w&&At(w[1])?w[0]:void 0,E=m?Ux(n,m):n,k=w?w[1].statusCode:void 0,_=o&&k&&k>=400,x=E.filter((T,O)=>{let{route:j}=T;if(j.lazy)return!0;if(j.loader==null)return!1;if(s)return typeof j.loader!="function"||j.loader.hydrate?!0:e.loaderData[j.id]===void 0&&(!e.errors||e.errors[j.id]===void 0);if($x(e.loaderData,e.matches[O],T)||l.some(Pe=>Pe===T.route.id))return!0;let ae=e.matches[O],de=T;return Ov(T,Ne({currentUrl:v,currentParams:ae.params,nextUrl:h,nextParams:de.params},r,{actionResult:C,unstable_actionStatus:k,defaultShouldRevalidate:_?!1:a||v.pathname+v.search===h.pathname+h.search||v.search!==h.search||s1(ae,de)}))}),N=[];return c.forEach((T,O)=>{if(s||!n.some(yn=>yn.route.id===T.routeId)||d.has(O))return;let j=fi(y,T.path,g);if(!j){N.push({key:O,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let ae=e.fetchers.get(O),de=Po(j,T.path),Pe=!1;f.has(O)?Pe=!1:u.includes(O)?Pe=!0:ae&&ae.state!=="idle"&&ae.data===void 0?Pe=a:Pe=Ov(de,Ne({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:C,unstable_actionStatus:k,defaultShouldRevalidate:_?!1:a})),Pe&&N.push({key:O,routeId:T.routeId,path:T.path,matches:j,match:de,controller:new AbortController})}),[x,N]}function $x(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function s1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Ov(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Wx(t,e,n,r,i,s,o,a){let l=[e,...n.map(u=>u.route.id)].join("-");try{let u=o.get(l);u||(u=t({path:e,matches:n,patch:(d,c)=>{a.aborted||o1(d,c,r,i,s)}}),o.set(l,u)),u&&Qx(u)&&await u}finally{o.delete(l)}}function o1(t,e,n,r,i){if(t){var s;let o=r[t];X(o,"No route found to patch children into: routeId = "+t);let a=ga(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...a):o.children=a}else{let o=ga(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function Lv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];X(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";js(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!dx.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ne({},e(i),{lazy:void 0}))}function Hx(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function Bx(t,e,n,r,i,s,o,a){let l=r.reduce((c,f)=>c.add(f.route.id),new Set),u=new Set,d=await t({matches:i.map(c=>{let f=l.has(c.route.id);return Ne({},c,{shouldLoad:f,resolve:g=>(u.add(c.route.id),f?Vx(e,n,c,s,o,g,a):Promise.resolve({type:Ee.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(c=>X(u.has(c.route.id),'`match.resolve()` was not called for route id "'+c.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((c,f)=>l.has(i[f].route.id))}async function Vx(t,e,n,r,i,s,o){let a,l,u=d=>{let c,f=new Promise((w,C)=>c=C);l=()=>c(),e.signal.addEventListener("abort",l);let y=w=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...w!==void 0?[w]:[]),g;return s?g=s(w=>y(w)):g=(async()=>{try{return{type:"data",result:await y()}}catch(w){return{type:"error",result:w}}})(),Promise.race([g,f])};try{let d=n.route[t];if(n.route.lazy)if(d){let c,[f]=await Promise.all([u(d).catch(y=>{c=y}),Lv(n.route,i,r)]);if(c!==void 0)throw c;a=f}else if(await Lv(n.route,i,r),d=n.route[t],d)a=await u(d);else if(t==="action"){let c=new URL(e.url),f=c.pathname+c.search;throw mt(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:Ee.data,result:void 0};else if(d)a=await u(d);else{let c=new URL(e.url),f=c.pathname+c.search;throw mt(404,{pathname:f})}X(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Ee.error,result:d}}finally{l&&e.signal.removeEventListener("abort",l)}return a}async function Gx(t){let{result:e,type:n,status:r}=t;if(l1(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:Ee.error,error:a}}return n===Ee.error?{type:Ee.error,error:new Wp(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:Ee.data,data:o,statusCode:e.status,headers:e.headers}}if(n===Ee.error)return{type:Ee.error,error:e,statusCode:Pc(e)?e.status:r};if(Jx(e)){var i,s;return{type:Ee.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:Ee.data,data:e,statusCode:r}}function Yx(t,e,n,r,i,s){let o=t.headers.get("Location");if(X(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Hp.test(o)){let a=r.slice(0,r.findIndex(l=>l.route.id===n)+1);o=eh(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function Dv(t,e,n){if(Hp.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Jn(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Ji(t,e,n,r){let i=t.createURL(a1(e)).toString(),s={signal:n};if(r&&nn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=th(r.formData):s.body=r.formData}return new Request(i,s)}function th(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Mv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function qx(t,e,n,r,i,s){let o={},a=null,l,u=!1,d={},c=r&&At(r[1])?r[1].error:void 0;return n.forEach((f,y)=>{let g=e[y].route.id;if(X(!yi(f),"Cannot handle redirect results in processLoaderData"),At(f)){let w=f.error;c!==void 0&&(w=c,c=void 0),a=a||{};{let C=Ho(t,g);a[C.route.id]==null&&(a[C.route.id]=w)}o[g]=void 0,u||(u=!0,l=Pc(f.error)?f.error.status:500),f.headers&&(d[g]=f.headers)}else vi(f)?(i.set(g,f.deferredData),o[g]=f.deferredData.data,f.statusCode!=null&&f.statusCode!==200&&!u&&(l=f.statusCode),f.headers&&(d[g]=f.headers)):(o[g]=f.data,f.statusCode&&f.statusCode!==200&&!u&&(l=f.statusCode),f.headers&&(d[g]=f.headers))}),c!==void 0&&r&&(a={[r[0]]:c},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:d}}function jv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=qx(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:c,match:f,controller:y}=s[d];X(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let g=o[d];if(!(y&&y.signal.aborted))if(At(g)){let w=Ho(t.matches,f==null?void 0:f.route.id);u&&u[w.route.id]||(u=Ne({},u,{[w.route.id]:g.error})),t.fetchers.delete(c)}else if(yi(g))X(!1,"Unhandled fetcher revalidation redirect");else if(vi(g))X(!1,"Unhandled fetcher deferred data");else{let w=yr(g.data);t.fetchers.set(c,w)}}return{loaderData:l,errors:u}}function Fv(t,e,n,r){let i=Ne({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function zv(t){return t?At(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Ho(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Uv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function mt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,a="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(a="Bad Request",s==="route-discovery"?l='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+o):i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):t===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(a="Not Found",l='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Wp(t||500,a,new Error(l),!0)}function $v(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(yi(n))return{result:n,idx:e}}}function a1(t){let e=typeof t=="string"?sr(t):t;return Ni(Ne({},e,{hash:""}))}function Kx(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Qx(t){return typeof t=="object"&&t!=null&&"then"in t}function Xx(t){return l1(t.result)&&Lx.has(t.result.status)}function vi(t){return t.type===Ee.deferred}function At(t){return t.type===Ee.error}function yi(t){return(t&&t.type)===Ee.redirect}function Jx(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function l1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Zx(t){return Ox.has(t.toLowerCase())}function nn(t){return Rx.has(t.toLowerCase())}async function Wv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(c=>c.route.id===l.route.id),d=u!=null&&!s1(u,l)&&(s&&s[l.route.id])!==void 0;if(vi(a)&&(i||d)){let c=r[o];X(c,"Expected an AbortSignal for revalidating fetcher deferred result"),await u1(a,c,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function u1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ee.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ee.error,error:i}}return{type:Ee.data,data:t.deferredData.data}}}function Bp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Po(t,e){let n=typeof e=="string"?sr(e).search:e.search;if(t[t.length-1].route.index&&Bp(n||""))return t[t.length-1];let r=n1(t);return r[r.length-1]}function Hv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Ad(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function eI(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function _o(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function tI(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function yr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function nI(t,e){try{let n=t.sessionStorage.getItem(i1);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function rI(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(i1,JSON.stringify(n))}catch(r){js(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}const ja=S.createContext(null),Vp=S.createContext(null),or=S.createContext(null),Nc=S.createContext(null),ar=S.createContext({outlet:null,matches:[],isDataRoute:!1}),c1=S.createContext(null);function iI(t,e){let{relative:n}=e===void 0?{}:e;Qs()||X(!1);let{basename:r,navigator:i}=S.useContext(or),{hash:s,pathname:o,search:a}=Rc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Vn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Qs(){return S.useContext(Nc)!=null}function Rn(){return Qs()||X(!1),S.useContext(Nc).location}function d1(t){S.useContext(or).static||S.useLayoutEffect(t)}function Fa(){let{isDataRoute:t}=S.useContext(ar);return t?yI():sI()}function sI(){Qs()||X(!1);let t=S.useContext(ja),{basename:e,future:n,navigator:r}=S.useContext(or),{matches:i}=S.useContext(ar),{pathname:s}=Rn(),o=JSON.stringify(Ic(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return d1(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Tc(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Vn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const oI=S.createContext(null);function aI(t){let e=S.useContext(ar).outlet;return e&&S.createElement(oI.Provider,{value:t},e)}function Rc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(or),{matches:i}=S.useContext(ar),{pathname:s}=Rn(),o=JSON.stringify(Ic(i,r.v7_relativeSplatPath));return S.useMemo(()=>Tc(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function lI(t,e){return f1(t,e)}function f1(t,e,n,r){Qs()||X(!1);let{navigator:i}=S.useContext(or),{matches:s}=S.useContext(ar),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Rn(),d;if(e){var c;let C=typeof e=="string"?sr(e):e;l==="/"||(c=C.pathname)!=null&&c.startsWith(l)||X(!1),d=C}else d=u;let f=d.pathname||"/",y=f;if(l!=="/"){let C=l.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(C.length).join("/")}let g=fi(t,{pathname:y}),w=hI(g&&g.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Vn([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:Vn([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&w?S.createElement(Nc.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ze.Pop}},w):w}function uI(){let t=vI(),e=Pc(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const cI=S.createElement(uI,null);class dI extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(ar.Provider,{value:this.props.routeContext},S.createElement(c1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fI(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(ja);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(ar.Provider,{value:e},r)}function hI(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||X(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:y}=n,g=c.route.loader&&f[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let y,g=!1,w=null,C=null;n&&(y=a&&c.route.id?a[c.route.id]:void 0,w=c.route.errorElement||cI,l&&(u<0&&f===0?(g=!0,C=null):u===f&&(g=!0,C=c.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,f+1)),h=()=>{let m;return y?m=w:g?m=C:c.route.Component?m=S.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,S.createElement(fI,{match:c,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?S.createElement(dI,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var h1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(h1||{}),Ou=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ou||{});function pI(t){let e=S.useContext(ja);return e||X(!1),e}function mI(t){let e=S.useContext(Vp);return e||X(!1),e}function gI(t){let e=S.useContext(ar);return e||X(!1),e}function p1(t){let e=gI(),n=e.matches[e.matches.length-1];return n.route.id||X(!1),n.route.id}function vI(){var t;let e=S.useContext(c1),n=mI(Ou.UseRouteError),r=p1(Ou.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function yI(){let{router:t}=pI(h1.UseNavigateStable),e=p1(Ou.UseNavigateStable),n=S.useRef(!1);return d1(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,va({fromRouteId:e},s)))},[t,e])}function _I(t){let{to:e,replace:n,state:r,relative:i}=t;Qs()||X(!1);let{future:s,static:o}=S.useContext(or),{matches:a}=S.useContext(ar),{pathname:l}=Rn(),u=Fa(),d=Tc(e,Ic(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function m1(t){return aI(t.context)}function Ye(t){X(!1)}function wI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ze.Pop,navigator:s,static:o=!1,future:a}=t;Qs()&&X(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:va({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=sr(r));let{pathname:d="/",search:c="",hash:f="",state:y=null,key:g="default"}=r,w=S.useMemo(()=>{let C=Jn(d,l);return C==null?null:{location:{pathname:C,search:c,hash:f,state:y,key:g},navigationType:i}},[l,d,c,f,y,g,i]);return w==null?null:S.createElement(or.Provider,{value:u},S.createElement(Nc.Provider,{children:n,value:w}))}function EI(t){let{children:e,location:n}=t;return lI(Lu(e),n)}new Promise(()=>{});function Lu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Lu(r.props.children,s));return}r.type!==Ye&&X(!1),!r.props.index||!r.props.children||X(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Lu(r.props.children,s)),n.push(o)}),n}function SI(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:S.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:S.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:S.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fs.apply(this,arguments)}function g1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function CI(t,e){return t.button===0&&(!e||e==="_self")&&!kI(t)}const bI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xI=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],II="6";try{window.__reactRouterVersion=II}catch{}function TI(t,e){return Fx({basename:void 0,future:Fs({},void 0,{v7_prependBasename:!0}),history:lx({window:void 0}),hydrationData:PI(),routes:t,mapRouteProperties:SI,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function PI(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Fs({},e,{errors:NI(e.errors)})),e}function NI(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Wp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const v1=S.createContext({isTransitioning:!1}),RI=S.createContext(new Map),AI="startTransition",Bv=Qk[AI],OI="flushSync",Vv=ax[OI];function LI(t){Bv?Bv(t):t()}function wo(t){Vv?Vv(t):t()}let DI=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function MI(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=S.useState(n.state),[o,a]=S.useState(),[l,u]=S.useState({isTransitioning:!1}),[d,c]=S.useState(),[f,y]=S.useState(),[g,w]=S.useState(),C=S.useRef(new Map),{v7_startTransition:v}=r||{},h=S.useCallback(x=>{v?LI(x):x()},[v]),m=S.useCallback((x,N)=>{let{deletedFetchers:T,unstable_flushSync:O,unstable_viewTransitionOpts:j}=N;T.forEach(de=>C.current.delete(de)),x.fetchers.forEach((de,Pe)=>{de.data!==void 0&&C.current.set(Pe,de.data)});let ae=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!j||ae){O?wo(()=>s(x)):h(()=>s(x));return}if(O){wo(()=>{f&&(d&&d.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:j.currentLocation,nextLocation:j.nextLocation})});let de=n.window.document.startViewTransition(()=>{wo(()=>s(x))});de.finished.finally(()=>{wo(()=>{c(void 0),y(void 0),a(void 0),u({isTransitioning:!1})})}),wo(()=>y(de));return}f?(d&&d.resolve(),f.skipTransition(),w({state:x,currentLocation:j.currentLocation,nextLocation:j.nextLocation})):(a(x),u({isTransitioning:!0,flushSync:!1,currentLocation:j.currentLocation,nextLocation:j.nextLocation}))},[n.window,f,d,C,h]);S.useLayoutEffect(()=>n.subscribe(m),[n,m]),S.useEffect(()=>{l.isTransitioning&&!l.flushSync&&c(new DI)},[l]),S.useEffect(()=>{if(d&&o&&n.window){let x=o,N=d.promise,T=n.window.document.startViewTransition(async()=>{h(()=>s(x)),await N});T.finished.finally(()=>{c(void 0),y(void 0),a(void 0),u({isTransitioning:!1})}),y(T)}},[h,o,d,n.window]),S.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,f,i.location,o]),S.useEffect(()=>{!l.isTransitioning&&g&&(a(g.state),u({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),w(void 0))},[l.isTransitioning,g]),S.useEffect(()=>{},[]);let E=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:x=>n.navigate(x),push:(x,N,T)=>n.navigate(x,{state:N,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(x,N,T)=>n.navigate(x,{replace:!0,state:N,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[n]),k=n.basename||"/",_=S.useMemo(()=>({router:n,navigator:E,static:!1,basename:k}),[n,E,k]);return S.createElement(S.Fragment,null,S.createElement(ja.Provider,{value:_},S.createElement(Vp.Provider,{value:i},S.createElement(RI.Provider,{value:C.current},S.createElement(v1.Provider,{value:l},S.createElement(wI,{basename:k,location:i.location,navigationType:i.historyAction,navigator:E,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?S.createElement(jI,{routes:n.routes,future:n.future,state:i}):e))))),null)}function jI(t){let{routes:e,future:n,state:r}=t;return f1(e,void 0,r,n)}const FI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pt=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=g1(e,bI),{basename:y}=S.useContext(or),g,w=!1;if(typeof u=="string"&&zI.test(u)&&(g=u,FI))try{let m=new URL(window.location.href),E=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Jn(E.pathname,y);E.origin===m.origin&&k!=null?u=k+E.search+E.hash:w=!0}catch{}let C=iI(u,{relative:i}),v=$I(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function h(m){r&&r(m),m.defaultPrevented||v(m)}return S.createElement("a",Fs({},f,{href:g||C,onClick:w||s?r:h,ref:n,target:l}))}),hi=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=g1(e,xI),f=Rc(l,{relative:c.relative}),y=Rn(),g=S.useContext(Vp),{navigator:w,basename:C}=S.useContext(or),v=g!=null&&WI(f)&&u===!0,h=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,m=y.pathname,E=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(m=m.toLowerCase(),E=E?E.toLowerCase():null,h=h.toLowerCase()),E&&C&&(E=Jn(E,C)||E);const k=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let _=m===h||!o&&m.startsWith(h)&&m.charAt(k)==="/",x=E!=null&&(E===h||!o&&E.startsWith(h)&&E.charAt(h.length)==="/"),N={isActive:_,isPending:x,isTransitioning:v},T=_?r:void 0,O;typeof s=="function"?O=s(N):O=[s,_?"active":null,x?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let j=typeof a=="function"?a(N):a;return S.createElement(Pt,Fs({},c,{"aria-current":T,className:O,ref:n,style:j,to:l,unstable_viewTransition:u}),typeof d=="function"?d(N):d)});var nh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(nh||(nh={}));var Gv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Gv||(Gv={}));function UI(t){let e=S.useContext(ja);return e||X(!1),e}function $I(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Fa(),u=Rn(),d=Rc(t,{relative:o});return S.useCallback(c=>{if(CI(c,n)){c.preventDefault();let f=r!==void 0?r:Ni(u)===Ni(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function WI(t,e){e===void 0&&(e={});let n=S.useContext(v1);n==null&&X(!1);let{basename:r}=UI(nh.useViewTransitionState),i=Rc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Jn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Jn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Au(i.pathname,o)!=null||Au(i.pathname,s)!=null}var y1={exports:{}},HI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",BI=HI,VI=BI;function _1(){}function w1(){}w1.resetWarningCache=_1;var GI=function(){function t(r,i,s,o,a,l){if(l!==VI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:w1,resetWarningCache:_1};return n.PropTypes=n,n};y1.exports=GI();var ui=y1.exports;const A=cc(ui),Xt=S.createContext({width:0,height:0,currentPage:"/",setCurrentPage:()=>{},fullscreen:!1,setFullscreen:()=>{}}),YI="_back_nyl46_1",bl={back:YI},xn="/assets/symbol-defs-DY2LbohP.svg",za=t=>{const{width:e}=S.useContext(Xt);let n=t.enableText?t.enableText:!0;return t.notLink?p.jsxs("button",{type:"button",className:t.className?`${bl.back} ${t.className}`:bl.back,onClick:t.onClick,children:[p.jsx("svg",{className:"icon icon-arrow_left",children:p.jsx("use",{xlinkHref:`${xn}#icon-arrow_left`})}),e>740&&n?p.jsx("span",{children:t.text?t.text:"Wróć"}):""]}):p.jsxs(Pt,{to:t.to?t.to:-1,className:t.className?`${bl.back} ${t.className}`:bl.back,children:[p.jsx("svg",{className:"icon icon-arrow_left",children:p.jsx("use",{xlinkHref:`${xn}#icon-arrow_left`})}),e>740&&n?p.jsx("span",{children:t.text?t.text:"Wróć"}):""]})};za.propTypes={to:A.string,text:A.string,enableText:A.bool,notLink:A.bool,className:A.string,onClick:A.func};const Yv=[{name:"Wprowadzenie",element:"Intro",address:"/wiki"},{name:"Modele lotu w Armie 3",address:"/wiki/modele-lotu",keywords:["Arma 3","standardowy","zaawansowany"],article:{header:"Article title",content:"<p>Example article</p>"}},{name:"Sterowanie - sprzęt",element:"Gear",address:"/wiki/sprzet",keywords:["joystick","pedały","kalibracja","ustawienia","sterowniki","akcesoria","trackir","facetrack","vr","multiple monitors"],article:{header:"Sprzęt do latania",content:""}},{name:"Sterowanie - ustawienia w grze",element:"Settings",address:"/wiki/ustawienia-gry",keywords:["Arma 3","gra","czułość","martwa strefa","martwej strefy","przypisanie","controls"]},{name:"Kokpit - instrumenty",element:"Instruments",address:"/wiki/przyrzady",keywords:["prędkościomierz","wariometr","wysokoścomierz","sztuczny horyzont","żyrokompas","zakrętomierze i chyłomierze","akcelerometry","zegary","cabir air gauges","wskażnik temperatury zewnętrznej OAT","Flap Position Indicators","Kąt natarcia - AoA","Coupled Devices","akcesoria"]},{name:"Podstawy lotu",element:"Basics",address:"/wiki/podstawy-lotu"},{name:"Podstawy komunikacji",element:"Comms",address:"/wiki/podstawy-komunikacji"},{name:"Śmigłowce ze względu na przeznaczenie",element:"HeliPurpose",address:"/wiki/heli-przeznaczenie"},{name:"Śmigłowce ze względu na rozmiar",address:"/wiki/heli-rozmiar",article:{header:"Helikoptery ze względu na rozmiar",content:"<h3>Lekkie śmigłowce</h3><p>Śmigłowce lekkie służą do zwiadu lub transportu piechoty. Te helikoptery mogą unosić niewielkich rozmiarów ładunek na zawiesiu. Śmigłowce lekkie zwykle mają mniej pancerza, co nadrabiają manewrowością i niewielkimi gabarytami. Śmigłowce lekkie są idealne dla początkujących pilotów do nauki podstawowych manewrów.</p>"}},{name:"Śmigłowce - manewrowanie",element:"HeliManevouers",address:"/wiki/heli-manewry"},{name:"Samoloty ze względu na przeznaczenie",element:"PlanesPurpose",address:"/wiki/samoloty-przeznaczenie"}],Ua=S.createContext({isShown:!1,setIsShown:()=>{}}),qI="_search_1qkkm_1",KI="_placeholder_1qkkm_119",QI="_reset_1qkkm_151",XI="_content_1qkkm_181",JI="_back_1qkkm_261",Er={search:qI,"search-container":"_search-container_1qkkm_43",placeholder:KI,reset:QI,content:XI,back:JI,"search-placeholder":"_search-placeholder_1qkkm_269"},ZI="_input_9pq5w_1",eT="_invalid_9pq5w_17",Jl={input:ZI,invalid:eT},tT=()=>{const t=Rn(),e=S.useRef(),n=S.useRef(),[r,i]=S.useState(""),[s,o]=S.useState(!0),[a,l]=S.useState(Yv),{setIsShown:u}=S.useContext(Ua),{setCurrentPage:d}=S.useContext(Xt),c=S.useCallback(()=>Yv.filter(E=>{let k=!1;return Object.values(E).forEach(_=>{k||(_.toString().toLowerCase().includes(r.toLowerCase())?k=!0:k=!1)}),k}),[r]);S.useEffect(()=>{r.trim()!==""?(o(!1),n.current.innerText="Pasujące artykuły"):(n.current.innerText="Wszystkie artykuły",o(!0)),l(c())},[r,c]),S.useEffect(()=>{e.current.focus()},[]);const f=()=>{e.current.focus()},y=E=>{i(E.target.value)},g=E=>{i(""),E.target.firstElementChild.focus()},w=E=>{E.preventDefault()},C=()=>{i(""),u(!1),d(t.pathname)},v=()=>{i(""),u(!1)},h=E=>{E.keyCode===27&&(i(""),u(!1),d(t.pathname))},m=p.jsx("nav",{className:Er.search,onKeyDown:h,children:p.jsxs("div",{className:Er["search-container"],children:[p.jsx(za,{className:Er.back,enableText:!1,notLink:!0,onClick:C}),p.jsxs("form",{onReset:g,onSubmit:w,children:[p.jsx("input",{type:"search",ref:e,className:Jl.input,id:"search",value:r,onInput:y}),s&&p.jsxs("div",{className:Er.placeholder,onClick:f,children:[p.jsx("svg",{className:"icon icon-magnifying_glass",children:p.jsx("use",{xlinkHref:`${xn}#icon-magnifying_glass`})})," ",p.jsx("span",{children:"Przeszukaj wiki"})]}),!s&&p.jsx("button",{type:"reset",className:Er.reset,children:p.jsx("svg",{className:"icon icon-circle_xmark",children:p.jsx("use",{xlinkHref:`${xn}#icon-circle_xmark`})})})]}),p.jsxs("div",{className:Er.content,children:[p.jsx("h2",{ref:n,children:"Wszystkie artykuły"}),a.map((E,k)=>p.jsx(Pt,{to:E.address,onClick:v,children:E.name},k))]})]})});return $p.createPortal(m,document.getElementById("overlays"))},E1=S.memo(()=>{const{setIsShown:t}=S.useContext(Ua),{setCurrentPage:e}=S.useContext(Xt),n=()=>{t(!0),e("/szukaj")};return p.jsx("button",{type:"button",onClick:n,className:Er["search-placeholder"],children:p.jsxs("div",{className:Er.placeholder,children:[p.jsx("svg",{className:"icon icon-magnifying_glass",children:p.jsx("use",{xlinkHref:`${xn}#icon-magnifying_glass`})})," ",p.jsx("span",{children:"Przeszukaj wiki"})]})})});E1.displayName="SearchPlaceholder";const nT="_menu_1u0wf_1",rT="_icon_1u0wf_127",iT="_highlight_1u0wf_135",si={menu:nT,icon:rT,highlight:iT};var qv={};/**
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
 */const S1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const M=function(t,e){if(!t)throw Xs(e)},Xs=function(t){return new Error("Firebase Database ("+S1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const k1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[d],n[c],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new oT;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),c!==64){const g=u<<6&192|c;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C1=function(t){const e=k1(t);return Gp.encodeByteArray(e,!0)},Du=function(t){return C1(t).replace(/\./g,"")},Mu=function(t){try{return Gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aT(t){return b1(void 0,t)}function b1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lT(n)||(t[n]=b1(t[n],e[n]));return t}function lT(t){return t!=="__proto__"}/**
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
 */function uT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cT=()=>uT().__FIREBASE_DEFAULTS__,dT=()=>{if(typeof process>"u"||typeof qv>"u")return;const t=qv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mu(t[1]);return e&&JSON.parse(e)},Yp=()=>{try{return cT()||dT()||fT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x1=t=>{var e,n;return(n=(e=Yp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hT=t=>{const e=x1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},I1=()=>{var t;return(t=Yp())===null||t===void 0?void 0:t.config},T1=t=>{var e;return(e=Yp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Du(JSON.stringify(n)),Du(JSON.stringify(o)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function mT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function P1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gT(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function N1(){return S1.NODE_ADMIN===!0}function vT(){try{return typeof indexedDB=="object"}catch{return!1}}function yT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const _T="FirebaseError";class Zr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_T,Object.setPrototypeOf(this,Zr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zr(i,a,r)}}function wT(t,e){return t.replace(ET,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ET=/\{\$([^}]+)}/g;/**
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
 */function ya(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
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
 */const R1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ya(Mu(s[0])||""),n=ya(Mu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ST=function(t){const e=R1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kT=function(t){const e=R1(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function An(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function rh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ju(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Fu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kv(s)&&Kv(o)){if(!Fu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kv(t){return t!==null&&typeof t=="object"}/**
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
 */function Js(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function No(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class CT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function bT(t,e){const n=new xT(t,e);return n.subscribe.bind(n)}class xT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Od),i.error===void 0&&(i.error=Od),i.complete===void 0&&(i.complete=Od);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Od(){}function Ac(t,e){return`${t} failed: ${e} argument `}/**
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
 */const TT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,M(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class Ri{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ci="[DEFAULT]";/**
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
 */class PT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $a;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RT(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NT(t){return t===ci?void 0:t}function RT(t){return t.instantiationMode==="EAGER"}/**
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
 */class AT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const OT={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},LT=pe.INFO,DT={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},MT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kp{constructor(e){this.name=e,this._logLevel=LT,this._logHandler=MT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const jT=(t,e)=>e.some(n=>t instanceof n);let Qv,Xv;function FT(){return Qv||(Qv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zT(){return Xv||(Xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const A1=new WeakMap,ih=new WeakMap,O1=new WeakMap,Ld=new WeakMap,Qp=new WeakMap;function UT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&A1.set(n,t)}).catch(()=>{}),Qp.set(e,t),e}function $T(t){if(ih.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ih.set(t,e)}let sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WT(t){sh=t(sh)}function HT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dd(this),e,...n);return O1.set(r,e.sort?e.sort():[e]),Fr(r)}:zT().includes(t)?function(...e){return t.apply(Dd(this),e),Fr(A1.get(this))}:function(...e){return Fr(t.apply(Dd(this),e))}}function BT(t){return typeof t=="function"?HT(t):(t instanceof IDBTransaction&&$T(t),jT(t,FT())?new Proxy(t,sh):t)}function Fr(t){if(t instanceof IDBRequest)return UT(t);if(Ld.has(t))return Ld.get(t);const e=BT(t);return e!==t&&(Ld.set(t,e),Qp.set(e,t)),e}const Dd=t=>Qp.get(t);function VT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fr(o.result),l.oldVersion,l.newVersion,Fr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const GT=["get","getKey","getAll","getAllKeys","count"],YT=["put","add","delete","clear"],Md=new Map;function Jv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Md.get(e))return Md.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Md.set(e,s),s}WT(t=>({...t,get:(e,n,r)=>Jv(e,n)||t.get(e,n,r),has:(e,n)=>!!Jv(e,n)||t.has(e,n)}));/**
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
 */class qT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oh="@firebase/app",Zv="0.10.6";/**
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
 */const Ai=new Kp("@firebase/app"),QT="@firebase/app-compat",XT="@firebase/analytics-compat",JT="@firebase/analytics",ZT="@firebase/app-check-compat",eP="@firebase/app-check",tP="@firebase/auth",nP="@firebase/auth-compat",rP="@firebase/database",iP="@firebase/database-compat",sP="@firebase/functions",oP="@firebase/functions-compat",aP="@firebase/installations",lP="@firebase/installations-compat",uP="@firebase/messaging",cP="@firebase/messaging-compat",dP="@firebase/performance",fP="@firebase/performance-compat",hP="@firebase/remote-config",pP="@firebase/remote-config-compat",mP="@firebase/storage",gP="@firebase/storage-compat",vP="@firebase/firestore",yP="@firebase/vertexai-preview",_P="@firebase/firestore-compat",wP="firebase",EP="10.12.3";/**
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
 */const ah="[DEFAULT]",SP={[oh]:"fire-core",[QT]:"fire-core-compat",[JT]:"fire-analytics",[XT]:"fire-analytics-compat",[eP]:"fire-app-check",[ZT]:"fire-app-check-compat",[tP]:"fire-auth",[nP]:"fire-auth-compat",[rP]:"fire-rtdb",[iP]:"fire-rtdb-compat",[sP]:"fire-fn",[oP]:"fire-fn-compat",[aP]:"fire-iid",[lP]:"fire-iid-compat",[uP]:"fire-fcm",[cP]:"fire-fcm-compat",[dP]:"fire-perf",[fP]:"fire-perf-compat",[hP]:"fire-rc",[pP]:"fire-rc-compat",[mP]:"fire-gcs",[gP]:"fire-gcs-compat",[vP]:"fire-fst",[_P]:"fire-fst-compat",[yP]:"fire-vertex","fire-js":"fire-js",[wP]:"fire-js-all"};/**
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
 */const zu=new Map,kP=new Map,lh=new Map;function ey(t,e){try{t.container.addComponent(e)}catch(n){Ai.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(lh.has(e))return Ai.debug(`There were multiple attempts to register component ${e}.`),!1;lh.set(e,t);for(const n of zu.values())ey(n,t);for(const n of kP.values())ey(n,t);return!0}function Xp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
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
 */const CP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new Wa("app","Firebase",CP);/**
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
 */class bP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=EP;function L1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ah,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zr.create("bad-app-name",{appName:String(i)});if(n||(n=I1()),!n)throw zr.create("no-options");const s=zu.get(i);if(s){if(Fu(n,s.options)&&Fu(r,s.config))return s;throw zr.create("duplicate-app",{appName:i})}const o=new AT(i);for(const l of lh.values())o.addComponent(l);const a=new bP(n,r,o);return zu.set(i,a),a}function D1(t=ah){const e=zu.get(t);if(!e&&t===ah&&I1())return L1();if(!e)throw zr.create("no-app",{appName:t});return e}function Ur(t,e,n){var r;let i=(r=SP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ai.warn(a.join(" "));return}Us(new Ri(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xP="firebase-heartbeat-database",IP=1,_a="firebase-heartbeat-store";let jd=null;function M1(){return jd||(jd=VT(xP,IP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_a)}catch(n){console.warn(n)}}}}).catch(t=>{throw zr.create("idb-open",{originalErrorMessage:t.message})})),jd}async function TP(t){try{const n=(await M1()).transaction(_a),r=await n.objectStore(_a).get(j1(t));return await n.done,r}catch(e){if(e instanceof Zr)Ai.warn(e.message);else{const n=zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ai.warn(n.message)}}}async function ty(t,e){try{const r=(await M1()).transaction(_a,"readwrite");await r.objectStore(_a).put(e,j1(t)),await r.done}catch(n){if(n instanceof Zr)Ai.warn(n.message);else{const r=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ai.warn(r.message)}}}function j1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PP=1024,NP=30*24*60*60*1e3;class RP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ny();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=NP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ny(),{heartbeatsToSend:r,unsentEntries:i}=AP(this._heartbeatsCache.heartbeats),s=Du(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ny(){return new Date().toISOString().substring(0,10)}function AP(t,e=PP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ry(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ry(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vT()?yT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ty(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ty(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ry(t){return Du(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function LP(t){Us(new Ri("platform-logger",e=>new qT(e),"PRIVATE")),Us(new Ri("heartbeat",e=>new RP(e),"PRIVATE")),Ur(oh,Zv,t),Ur(oh,Zv,"esm2017"),Ur("fire-js","")}LP("");var DP="firebase",MP="10.12.3";/**
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
 */Ur(DP,MP,"app");const jP={apiKey:"AIzaSyCx6s29WHuk-RrXJPdJYIbe3Hi4q13-WLc",authDomain:"ptap-articles.firebaseapp.com",databaseURL:"https://ptap-articles-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ptap-articles",storageBucket:"ptap-articles.appspot.com",messagingSenderId:"741718300001",appId:"1:741718300001:web:6e16244aa1f3f0760ce120"},uh=L1(jP);function Jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function F1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FP=F1,z1=new Wa("auth","Firebase",F1());/**
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
 */const Uu=new Kp("@firebase/auth");function zP(t,...e){Uu.logLevel<=pe.WARN&&Uu.warn(`Auth (${Zs}): ${t}`,...e)}function Zl(t,...e){Uu.logLevel<=pe.ERROR&&Uu.error(`Auth (${Zs}): ${t}`,...e)}/**
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
 */function Qt(t,...e){throw em(t,...e)}function hn(t,...e){return em(t,...e)}function Zp(t,e,n){const r=Object.assign(Object.assign({},FP()),{[e]:n});return new Wa("auth","Firebase",r).create(e,{appName:t.name})}function Gn(t){return Zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function UP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qt(t,"argument-error"),Zp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function em(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return z1.create(t,...e)}function K(t,e,...n){if(!t)throw em(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function Zn(t,e){t||Un(e)}/**
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
 */function ch(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $P(){return iy()==="http:"||iy()==="https:"}function iy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($P()||mT()||"connection"in navigator)?navigator.onLine:!0}function HP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=qp()||P1()}get(){return WP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tm(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class U1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VP=new Ha(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vn(t,e,n,r,i={}){return $1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Js(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),U1.fetch()(W1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function $1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BP),e);try{const i=new YP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xl(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zp(t,d,u);Qt(t,d)}}catch(i){if(i instanceof Zr)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function Ba(t,e,n,r,i={}){const s=await vn(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function W1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tm(t.config,i):`${t.config.apiScheme}://${i}`}function GP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),VP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}function sy(t){return t!==void 0&&t.enterprise!==void 0}class qP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function KP(t,e){return vn(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
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
 */async function QP(t,e){return vn(t,"POST","/v1/accounts:delete",e)}async function H1(t,e){return vn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XP(t,e=!1){const n=pt(t),r=await n.getIdToken(e),i=nm(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bo(Fd(i.auth_time)),issuedAtTime:Bo(Fd(i.iat)),expirationTime:Bo(Fd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fd(t){return Number(t)*1e3}function nm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mu(n);return i?JSON.parse(i):(Zl("Failed to decode base64 JWT payload"),null)}catch(i){return Zl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function oy(t){const e=nm(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zr&&JP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bo(this.lastLoginAt),this.creationTime=Bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $u(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Oi(t,H1(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?B1(s.providerUserInfo):[],a=tN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dh(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function eN(t){const e=pt(t);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function B1(t){return t.map(e=>{var{providerId:n}=e,r=Jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nN(t,e){const n=await $1(t,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=W1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",U1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rN(t,e){return vn(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
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
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=oy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ks;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function gr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XP(this,e)}reload(){return eN(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await Oi(this,QP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:E,isAnonymous:k,providerData:_,stsTokenManager:x}=n;K(m&&x,e,"internal-error");const N=ks.fromJSON(this.name,x);K(typeof m=="string",e,"internal-error"),gr(c,e.name),gr(f,e.name),K(typeof E=="boolean",e,"internal-error"),K(typeof k=="boolean",e,"internal-error"),gr(y,e.name),gr(g,e.name),gr(w,e.name),gr(C,e.name),gr(v,e.name),gr(h,e.name);const T=new $n({uid:m,auth:e,email:f,emailVerified:E,displayName:c,isAnonymous:k,photoURL:g,phoneNumber:y,tenantId:w,stsTokenManager:N,createdAt:v,lastLoginAt:h});return _&&Array.isArray(_)&&(T.providerData=_.map(O=>Object.assign({},O))),C&&(T._redirectEventId=C),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new ks;i.updateFromServerResponse(n);const s=new $n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $u(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?B1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ks;a.updateFromIdToken(r);const l=new $n({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const ay=new Map;function Wn(t){Zn(t instanceof Function,"Expected a class definition");let e=ay.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ay.set(t,e),e)}/**
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
 */class V1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}V1.type="NONE";const ly=V1;/**
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
 */function eu(t,e,n){return`firebase:${t}:${e}:${n}`}class Cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=eu(this.userKey,i.apiKey,s),this.fullPersistenceKey=eu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cs(Wn(ly),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wn(ly);const o=eu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=$n._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Cs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Cs(s,e,r))}}/**
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
 */function uy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q1(e))return"Blackberry";if(X1(e))return"Webos";if(rm(e))return"Safari";if((e.includes("chrome/")||Y1(e))&&!e.includes("edge/"))return"Chrome";if(K1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G1(t=ht()){return/firefox\//i.test(t)}function rm(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y1(t=ht()){return/crios\//i.test(t)}function q1(t=ht()){return/iemobile/i.test(t)}function K1(t=ht()){return/android/i.test(t)}function Q1(t=ht()){return/blackberry/i.test(t)}function X1(t=ht()){return/webos/i.test(t)}function Lc(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iN(t=ht()){var e;return Lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sN(){return gT()&&document.documentMode===10}function J1(t=ht()){return Lc(t)||K1(t)||X1(t)||Q1(t)||/windows phone/i.test(t)||q1(t)}function oN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Z1(t,e=[]){let n;switch(t){case"Browser":n=uy(ht());break;case"Worker":n=`${uy(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}/**
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
 */class aN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lN(t,e={}){return vn(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
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
 */const uN=6;class cN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class dN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cy(this),this.idTokenSubscription=new cy(this),this.beforeStateQueue=new aN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=z1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await H1(this,{idToken:e}),r=await $n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(Gn(this));const n=e?pt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lN(this),n=new cN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ur(t){return pt(t)}class cy{constructor(e){this.auth=e,this.observer=null,this.addObserver=bT(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fN(t){Dc=t}function eE(t){return Dc.loadJS(t)}function hN(){return Dc.recaptchaEnterpriseScript}function pN(){return Dc.gapiScript}function mN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gN="recaptcha-enterprise",vN="NO_RECAPTCHA";class yN{constructor(e){this.type=gN,this.auth=ur(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{KP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new qP(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;sy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(vN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&sy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hN();l.length!==0&&(l+=a),eE(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function dy(t,e,n,r=!1){const i=new yN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await dy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await dy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function _N(t,e){const n=Xp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fu(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function wN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EN(t,e,n){const r=ur(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=tE(e),{host:o,port:a}=SN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),kN()}function tE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SN(t){const e=tE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fy(o)}}}function fy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class im{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function CN(t,e){return vn(t,"POST","/v1/accounts:update",e)}async function bN(t,e){return vn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function xN(t,e){return Ba(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}async function IN(t,e){return vn(t,"POST","/v1/accounts:sendOobCode",lr(t,e))}async function TN(t,e){return IN(t,e)}/**
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
 */async function PN(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function NN(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
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
 */class wa extends im{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(e,n,"signInWithPassword",xN);case"emailLink":return PN(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(e,r,"signUpPassword",bN);case"emailLink":return NN(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bs(t,e){return Ba(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
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
 */const RN="http://localhost";class Li extends im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:RN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Js(n)}return e}}/**
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
 */function AN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ON(t){const e=No(Ro(t)).link,n=e?No(Ro(e)).deep_link_id:null,r=No(Ro(t)).deep_link_id;return(r?No(Ro(r)).link:null)||r||n||e||t}class sm{constructor(e){var n,r,i,s,o,a;const l=No(Ro(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=AN((i=l.mode)!==null&&i!==void 0?i:null);K(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ON(e);try{return new sm(n)}catch{return null}}}/**
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
 */class eo{constructor(){this.providerId=eo.PROVIDER_ID}static credential(e,n){return wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sm.parseLink(n);return K(r,"argument-error"),wa._fromEmailAndCode(e,r.code,r.tenantId)}}eo.PROVIDER_ID="password";eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class om{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Va extends om{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cr extends Va{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
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
 */class jn extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
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
 */class br extends Va{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.GITHUB_SIGN_IN_METHOD="github.com";br.PROVIDER_ID="github.com";/**
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
 */class xr extends Va{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
 */async function LN(t,e){return Ba(t,"POST","/v1/accounts:signUp",lr(t,e))}/**
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
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $n._fromIdTokenResponse(e,r,i),o=hy(r);return new Di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hy(r);return new Di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Hu extends Zr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hu(e,n,r,i)}}function nE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(t,s,e,r):s})}async function DN(t,e,n=!1){const r=await Oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Di._forOperation(t,"link",r)}/**
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
 */async function MN(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(Gn(r));const i="reauthenticate";try{const s=await Oi(t,nE(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=nm(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),Di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
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
 */async function rE(t,e,n=!1){if(an(t.app))return Promise.reject(Gn(t));const r="signIn",i=await nE(t,r,e),s=await Di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jN(t,e){return rE(ur(t),e)}/**
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
 */async function iE(t){const e=ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FN(t,e,n){const r=ur(t);await Wu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",TN)}async function zN(t,e,n){if(an(t.app))return Promise.reject(Gn(t));const r=ur(t),o=await Wu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&iE(t),l}),a=await Di._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function UN(t,e,n){return an(t.app)?Promise.reject(Gn(t)):jN(pt(t),eo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(t),r})}/**
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
 */async function $N(t,e){return vn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function WN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=pt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Oi(r,$N(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HN(t,e){return BN(pt(t),null,e)}async function BN(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.password=n);const o=await Oi(t,CN(r,s));await t._updateTokensIfNecessary(o,!0)}function VN(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function GN(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function YN(t,e,n,r){return pt(t).onAuthStateChanged(e,n,r)}function qN(t){return pt(t).signOut()}const Bu="__sak";/**
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
 */class sE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function KN(){const t=ht();return rm(t)||Lc(t)}const QN=1e3,XN=10;class oE extends sE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KN()&&oN(),this.fallbackToPolling=J1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oE.type="LOCAL";const JN=oE;/**
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
 */class aE extends sE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aE.type="SESSION";const lE=aE;/**
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
 */function ZN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ZN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
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
 */function am(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=am("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function tR(t){Nn().location.href=t}/**
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
 */function uE(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function nR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iR(){return uE()?self:null}/**
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
 */const cE="firebaseLocalStorageDb",sR=1,Vu="firebaseLocalStorage",dE="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jc(t,e){return t.transaction([Vu],e?"readwrite":"readonly").objectStore(Vu)}function oR(){const t=indexedDB.deleteDatabase(cE);return new Ga(t).toPromise()}function fh(){const t=indexedDB.open(cE,sR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vu,{keyPath:dE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vu)?e(r):(r.close(),await oR(),e(await fh()))})})}async function py(t,e,n){const r=jc(t,!0).put({[dE]:e,value:n});return new Ga(r).toPromise()}async function aR(t,e){const n=jc(t,!1).get(e),r=await new Ga(n).toPromise();return r===void 0?null:r.value}function my(t,e){const n=jc(t,!0).delete(e);return new Ga(n).toPromise()}const lR=800,uR=3;class fE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nR(),!this.activeServiceWorker)return;this.sender=new eR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fh();return await py(e,Bu,"1"),await my(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>py(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>my(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jc(i,!1).getAll();return new Ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fE.type="LOCAL";const cR=fE;new Ha(3e4,6e4);/**
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
 */function hE(t,e){return e?Wn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lm extends im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dR(t){return rE(t.auth,new lm(t),t.bypassAuthState)}function fR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),MN(n,new lm(t),t.bypassAuthState)}async function hR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),DN(n,new lm(t),t.bypassAuthState)}/**
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
 */class pE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dR;case"linkViaPopup":case"linkViaRedirect":return hR;case"reauthViaPopup":case"reauthViaRedirect":return fR;default:Qt(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pR=new Ha(2e3,1e4);async function mR(t,e,n){if(an(t.app))return Promise.reject(hn(t,"operation-not-supported-in-this-environment"));const r=ur(t);UP(t,e,om);const i=hE(r,n);return new _i(r,"signInViaPopup",e,i).executeNotNull()}class _i extends pE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pR.get())};e()}}_i.currentPopupAction=null;/**
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
 */const gR="pendingRedirect",tu=new Map;class vR extends pE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tu.get(this.auth._key());if(!e){try{const r=await yR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tu.set(this.auth._key(),e)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yR(t,e){const n=ER(e),r=wR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _R(t,e){tu.set(t._key(),e)}function wR(t){return Wn(t._redirectPersistence)}function ER(t){return eu(gR,t.config.apiKey,t.name)}async function SR(t,e,n=!1){if(an(t.app))return Promise.reject(Gn(t));const r=ur(t),i=hE(r,e),o=await new vR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const kR=10*60*1e3;class CR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kR&&this.cachedEventUids.clear(),this.cachedEventUids.has(gy(e))}saveEventToCache(e){this.cachedEventUids.add(gy(e)),this.lastProcessedEventTime=Date.now()}}function gy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mE(t);default:return!1}}/**
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
 */async function xR(t,e={}){return vn(t,"GET","/v1/projects",e)}/**
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
 */const IR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TR=/^https?/;async function PR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xR(t);for(const n of e)try{if(NR(n))return}catch{}Qt(t,"unauthorized-domain")}function NR(t){const e=ch(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TR.test(n))return!1;if(IR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RR=new Ha(3e4,6e4);function vy(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AR(t){return new Promise((e,n)=>{var r,i,s;function o(){vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vy(),n(hn(t,"network-request-failed"))},timeout:RR.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=mN("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},eE(`${pN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw nu=null,e})}let nu=null;function OR(t){return nu=nu||AR(t),nu}/**
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
 */const LR=new Ha(5e3,15e3),DR="__/auth/iframe",MR="emulator/auth/iframe",jR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tm(e,MR):`https://${t.config.authDomain}/${DR}`,r={apiKey:e.apiKey,appName:t.name,v:Zs},i=FR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Js(r).slice(1)}`}async function UR(t){const e=await OR(t),n=Nn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:zR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},LR.get());function l(){Nn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const $R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WR=500,HR=600,BR="_blank",VR="http://localhost";class yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GR(t,e,n,r=WR,i=HR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$R),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ht().toLowerCase();n&&(a=Y1(u)?BR:n),G1(u)&&(e=e||VR,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[y,g])=>`${f}${y}=${g},`,"");if(iN(u)&&a!=="_self")return YR(e||"",a),new yy(null);const c=window.open(e||"",a,d);K(c,t,"popup-blocked");try{c.focus()}catch{}return new yy(c)}function YR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qR="__/auth/handler",KR="emulator/auth/handler",QR=encodeURIComponent("fac");async function _y(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zs,eventId:i};if(e instanceof om){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Va){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${QR}=${encodeURIComponent(l)}`:"";return`${XR(t)}?${Js(a).slice(1)}${u}`}function XR({config:t}){return t.emulator?tm(t,KR):`https://${t.authDomain}/${qR}`}/**
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
 */const zd="webStorageSupport";class JR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lE,this._completeRedirectFn=SR,this._overrideRedirectResult=_R}async _openPopup(e,n,r,i){var s;Zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _y(e,n,r,ch(),i);return GR(e,o,am())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _y(e,n,r,ch(),i);return tR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UR(e),r=new CR(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zd,{type:zd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zd];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J1()||rm()||Lc()}}const ZR=JR;var wy="@firebase/auth",Ey="1.7.5";/**
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
 */class eA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nA(t){Us(new Ri("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z1(t)},u=new dN(r,i,s,l);return wN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Us(new Ri("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(r=>new eA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(wy,Ey,tA(t)),Ur(wy,Ey,"esm2017")}/**
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
 */const rA=5*60,iA=T1("authIdTokenMaxAge")||rA;let Sy=null;const sA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iA)return;const i=n==null?void 0:n.token;Sy!==i&&(Sy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ud(t=D1()){const e=Xp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_N(t,{popupRedirectResolver:ZR,persistence:[cR,JN,lE]}),r=T1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sA(s.toString());GN(n,o,()=>o(n.currentUser)),VN(n,a=>o(a))}}const i=x1("auth");return i&&EN(n,`http://${i}`),n}function oA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nA("Browser");const $d={user:null,isLogged:!1,isCreateSuccess:!1},ei=()=>{const t=Ud(uh),[e,n]=S.useState(null),[r,i]=S.useState(null);return S.useEffect(()=>{YN(t,c=>{c?(i(c),n(c.uid),sessionStorage.setItem("uid",c.uid)):(i(null),n(null),sessionStorage.removeItem("uid"))})},[t]),{uid:e,currentUser:r,createUser:async(c,f,y)=>{let g=$d;return await zN(t,c,f).then(w=>{g.isCreateSuccess=!0,g.user=w.user,WN(g.user,{displayName:y})}).catch(w=>{throw new Error(w.code)}),g},loginWithEmail:async(c,f)=>{let y=$d;return await UN(t,c,f).then(g=>{y.isLogged=!0,y.user=g.user}).catch(g=>{throw new Error(g.code)}),y},loginWithGoogle:async(c="")=>{let f=$d;const y=new jn;return c.length>=3&&y.setCustomParameters({login_hint:c}),await mR(t,y).then(g=>{f.isLogged=!0,f.user=g.user}).catch(g=>{throw new Error(g.code)}),f},updateUserPassword:c=>{const y=Ud().currentUser;HN(y,c).then(()=>"Hasło zostało zmienione").catch(g=>{throw new Error(g.code)})},sendResetEmail:async c=>{const f=Ud();await FN(f,c).then(()=>"E-mail z linkiem do resetowania hasła został wysłany").catch(y=>{throw new Error(y.code)})},logout:async()=>{qN(t).then(()=>"Nastąpiło wylogowanie").catch(c=>{throw new Error(c.code)})}}},Il=(t,e)=>{let n=t===e;return t!=="/"&&(t=t.split("/"),n=e.includes(t[1])),n},gE=S.memo(()=>{const{uid:t}=ei(),{setIsShown:e}=S.useContext(Ua),{currentPage:n,setCurrentPage:r}=S.useContext(Xt),i=[{name:"Główna",path:"/",icon:"icon-house",type:"link"},{name:"Szukaj",path:"/szukaj",icon:"icon-magnifying_glass",type:"button"},{name:"Wiki",path:"/wiki",icon:"icon-globe",type:"link"},{name:t?"Wyloguj się":"Zaloguj się",path:t?"/wylogowanie":"/logowanie",icon:t?"icon-signout":"icon-signup",type:"link"}],s=()=>{e(!1)},o=()=>{e(!0),r("/szukaj")},a=p.jsx("nav",{className:si.menu,children:p.jsx("ul",{children:i.map(l=>p.jsx("li",{children:l.type==="link"?p.jsxs(hi,{to:l.path,className:Il(n,l.path)?si.highlight:"",onClick:()=>{s()},children:[Il(n,l.path)?p.jsx("svg",{className:`icon ${si.icon} ${l.icon}_solid`,children:p.jsx("use",{xlinkHref:`${xn}#${l.icon}_solid`})}):p.jsx("svg",{className:`icon ${si.icon} ${l.icon}`,children:p.jsx("use",{xlinkHref:`${xn}#${l.icon}`})}),l.name]}):p.jsxs("div",{onClick:o,to:l.path,className:Il(n,l.path)?si.highlight:"",children:[Il(n,l.path)?p.jsx("svg",{className:`icon ${si.icon} ${l.icon}_solid`,children:p.jsx("use",{xlinkHref:`${xn}#${l.icon}_solid`})}):p.jsx("svg",{className:`icon ${si.icon} ${l.icon}`,children:p.jsx("use",{xlinkHref:`${xn}#${l.icon}`})}),l.name]})},l.name))})});return $p.createPortal(a,document.getElementById("overlays"))});gE.displayName="MobileMenu";const vE="/assets/logo-BeJc1Uop.webp",aA="_nav_hydld_1",lA={nav:aA},yE=S.memo(()=>{const{uid:t}=ei(),{width:e}=S.useContext(Xt);let n=e>1044?"PTAP":"",r=p.jsxs(p.Fragment,{children:[p.jsxs(Pt,{to:"/",title:"Przejdź na stronę główną",children:[p.jsx("img",{src:vE,width:"80",height:"80",alt:"logo"}),p.jsx("h2",{children:n})]}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(hi,{to:"/",children:"Strona główna"})}),p.jsx("li",{children:p.jsx(hi,{to:"/wiki",children:"Wiki"})}),t&&p.jsx("li",{children:p.jsx(hi,{to:"/console",children:"Konsola"})}),p.jsx("li",{children:t?p.jsx(hi,{to:"/wylogowanie",children:"Wyloguj się"}):p.jsx(hi,{to:"/logowanie",children:"Zaloguj się"})}),p.jsx("li",{children:p.jsx(E1,{})})]})]});return p.jsx(p.Fragment,{children:e>875?p.jsx("nav",{className:lA.nav,children:r}):p.jsx(gE,{})})});yE.displayName="Nav";const uA="_footer_2dfaa_1",cA="_bottom_2dfaa_69",Wd={footer:uA,bottom:cA},cr=S.memo(()=>{const[t,e]=S.useState(0),{width:n}=S.useContext(Xt);return S.useEffect(()=>{document.querySelector("nav")&&n<=740?e(document.querySelector("nav").clientHeight):e(0)},[n]),p.jsxs("footer",{className:Wd.footer,style:{marginBottom:`${t}px`},children:[p.jsx("div",{className:Wd.top,children:p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(Pt,{to:"/sign-up",children:"Zapisz się do projektu"})}),p.jsx("li",{children:p.jsx(Pt,{to:"/feedback",children:"Zgłoś błąd na stronie"})}),p.jsx("li",{children:p.jsx(Pt,{to:"/console",children:"Edytor artykułów"})})]})}),p.jsx("div",{className:Wd.bottom,children:p.jsx("p",{children:"PTAP 2024 © Wszelkie prawa zastrzeżone"})})]})});cr.displayName="Footer";const dA=()=>{let t;const e=[],n={vendor:void 0,id:void 0,src:void 0,thumbnail:void 0,title:void 0,initialized:!1,y:void 0,debounce:250,lazyload:!0,autoplay:!0,initinview:!1,onLoad:g=>{},onAppend:g=>{},onThumbnailLoad:g=>{}},r={regex:{youtube_nocookie:/(?:youtube-nocookie\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=)))([a-zA-Z0-9_-]{6,11})/,youtube:/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,vimeo:/vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/},condition:{youtube:g=>g&&g[1].length==11?g[1]:!1,youtube_nocookie:g=>g&&g[1].length==11?g[1]:!1,vimeo:g=>g&&g[1].length===9||g[1].length===8?g[1]:!1},src:{youtube:g=>`https://www.youtube.com/embed/${g.id}/?autoplay=${g.autoplay?"1":"0"}&${g.query}`,youtube_nocookie:g=>`https://www.youtube-nocookie.com/embed/${g.id}/?autoplay=${g.autoplay?"1":"0"}&${g.query}`,vimeo:g=>`https://player.vimeo.com/video/${g.id}/?autoplay=${g.autoplay?"1":"0"}&${g.query}`},endpoint:g=>`https://noembed.com/embed?url=${g.src}`,response:{title:g=>g.title,thumbnail:g=>g.thumbnail_url}};function i(g,...w){if(t=Object.assign({},n,w[0]),typeof g=="string"){const C=document.querySelectorAll(g);for(let v=0;v<C.length;v++)s(C[v])}else if(typeof g.length>"u")s(g);else for(let C=0;C<g.length;C++)s(g[C]);t.lazyload&&c()}function s(g){if(!(g instanceof HTMLElement)||g.classList.contains("lazyframe--loaded"))return;const w={el:g,settings:o(g)};w.el.addEventListener("click",()=>{w.el.appendChild(w.iframe);const C=g.querySelectorAll("iframe");w.settings.onAppend.call(this,C[0])}),t.lazyload?f(w):u(w,!!w.settings.thumbnail)}function o(g){const w=Array.prototype.slice.apply(g.attributes).filter(v=>v.value!=="").reduce((v,h)=>{let m=h.name.indexOf("data-")===0?h.name.split("data-")[1]:h.name;return v[m]=h.value,v},{}),C=Object.assign({},t,w,{y:g.offsetTop,originalSrc:w.src,query:a(w.src)});if(C.vendor){const v=C.src.match(r.regex[C.vendor]);C.id=r.condition[C.vendor](v)}return C}function a(g){const w=g.split("?");return w[1]?w[1]:null}function l(g){return g.vendor?!g.title||!g.thumbnail:!1}function u(g){l(g.settings)?d(g,(w,C)=>{if(w)return;const v=C[0],h=C[1];if(h.settings.title||(h.settings.title=r.response.title(v)),!h.settings.thumbnail){const m=r.response.thumbnail(v);h.settings.thumbnail=m,g.settings.onThumbnailLoad.call(this,m)}f(h,!0)}):f(g,!0)}function d(g,w){const C=r.endpoint(g.settings),v=new XMLHttpRequest;v.open("GET",C,!0),v.onload=function(){if(v.status>=200&&v.status<400){const h=JSON.parse(v.responseText);w(null,[h,g])}else w(!0)},v.onerror=function(){w(!0)},v.send()}function c(){const g=window.innerHeight;let w=e.length;const C=(k,_)=>{k.settings.initialized=!0,k.el.classList.add("lazyframe--loaded"),w--,u(k),k.settings.initinview&&k.el.click(),k.settings.onLoad.call(this,k)};e.filter(k=>k.settings.y<g).forEach(C);const v=E(()=>{m=h<window.pageYOffset,h=window.pageYOffset,m&&e.filter(k=>k.settings.y<g+h&&k.settings.initialized===!1).forEach(C),w===0&&window.removeEventListener("scroll",v,!1)},t.debounce);let h=0,m=!1;window.addEventListener("scroll",v,!1);function E(k,_,x){let N;return function(){let T=this,O=arguments,j=function(){N=null,k.apply(T,O)};clearTimeout(N),N=setTimeout(j,_)}}}function f(g,w){if(g.iframe=y(g.settings),g.settings.thumbnail&&w&&(g.el.style.backgroundImage=`url(${g.settings.thumbnail})`),g.settings.title&&g.el.children.length===0){const C=document.createDocumentFragment(),v=document.createElement("span");v.className="lazyframe__title",v.innerHTML=g.settings.title,C.appendChild(v),g.el.appendChild(C)}t.lazyload||(g.el.classList.add("lazyframe--loaded"),g.settings.onLoad.call(this,g),e.push(g)),g.settings.initialized||e.push(g)}function y(g){const w=document.createDocumentFragment(),C=document.createElement("iframe");return g.vendor&&(g.src=r.src[g.vendor](g)),C.setAttribute("id",`lazyframe-${g.id}`),C.setAttribute("src",g.src),C.setAttribute("frameborder",0),C.setAttribute("allowfullscreen",""),g.autoplay&&(C.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),w.appendChild(C),w}return i},fA=dA(),hh=t=>{const e=S.useCallback(()=>{},[]);return document.addEventListener("touchstart",e,{passive:!0}),fA(".lazyframe"),p.jsxs("div",{className:t.video,children:[p.jsx("p",{children:t.header?t.header:""}),p.jsx("iframe",{className:`${t.className?t.className:""} lazyframe`,width:t.width?t.width:"560",height:t.height?t.height:"315",src:t.src?t.src:"",title:t.title?t.title:"YouTube video player",allow:t.allow?t.allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})};hh.propTypes={video:A.string.isRequired,header:A.string,className:A.string,width:A.string,height:A.string,src:A.string,title:A.string,allow:A.bool};const hA="_button_1n3hg_1",pA="_highlight_1n3hg_37",Gu={button:hA,"button-link":"_button-link_1n3hg_3",highlight:pA},Br=({to:t,className:e,highlighted:n,onClick:r,children:i})=>(n==null&&(n=!0),p.jsx(Pt,{to:t,className:`${Gu["button-link"]} ${e||""} ${n?Gu.highlight:""}`,onClick:r||(()=>{}),children:i}));Br.propTypes={to:A.string.isRequired,className:A.string,highlighted:A.bool,onClick:A.func,children:A.any};const Lt=({to:t,className:e,highlighted:n,type:r,onClick:i,children:s})=>{const o=Fa(),a=()=>{o(t,{replace:!0})};return n==null&&(n=!0),p.jsx("button",{type:r||"button",onClick:()=>{t&&a(),i&&i()},className:`${Gu.button} ${e||""} ${n?Gu.highlight:""}`,children:s})};Lt.propTypes={to:A.string,className:A.string,highlighted:A.bool,type:A.string,onClick:A.func,children:A.any};const mA="/assets/autorotacja-DGXODhjE.webp",gA="_iframe_7jhsd_85",vA="_video_7jhsd_101",yA="_figure_7jhsd_207",Zi={"index-banner":"_index-banner_7jhsd_1",iframe:gA,video:vA,figure:yA},_A=()=>{const{width:t}=S.useContext(Xt);return p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx("section",{className:`section ${Zi["index-banner"]}`,children:p.jsxs("header",{children:[t<=740?p.jsx("img",{src:vE,alt:"Logo",width:"100",height:"100"}):"",p.jsx("h1",{children:"PTAP"}),p.jsx("h2",{children:"Pilot Training Arma Project"}),p.jsx("p",{children:"Projekt mający na celu nauczenie graczy Arma 3 podstaw latania śmigłowcami. Na stronie zapoznasz się z podstawowymi manewrami, które pozwolą Ci na bezpieczne lądowanie i startowanie. Poradniki dotyczące sprzętu jak i bardziej szczegółowe opisy są dostępne w sekcji Wiki."})]})}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{children:"Autorotacja"}),p.jsx("p",{children:"Manewr wykorzystywany do awaryjnego lądowania. Dzięki energii z powietrza, łopaty wirnika głównego pobudzane są do ruchu co pozwala na opanowanie maszyny i bezpieczne posadzenie jej na ziemię."}),p.jsxs("figure",{className:Zi.figure,children:[p.jsx("img",{src:mA,alt:"Zdjęcie ukazujące przepływ powietrza podczas autorotacji",width:"332",height:"187"}),p.jsx("figcaption",{children:"Przepływ powietrza podczas autorotacji"})]})]}),p.jsxs("section",{className:"section",children:[p.jsx(hh,{video:Zi.video,src:"https://www.youtube.com/embed/v8pn1f3ijLI",className:Zi.iframe,header:"Autorotacja little birdem"}),p.jsx(hh,{video:Zi.video,src:"https://www.youtube.com/embed/videoseries?list=PLsQ6ua1LSZQwRoOCiVa-0d1eL9wk0aVGj",className:Zi.iframe,header:"Manewry little birdem"})]}),p.jsxs("section",{className:"section",children:[p.jsx("h2",{children:"Wiki"}),p.jsx("h3",{children:"Zobacz więcej artykułów na wiki"}),p.jsx(Br,{to:"/wiki",children:"Przejdź do wiki"})]})]}),p.jsx(cr,{})]})},wA=()=>{const t=Rn(),e=/\/wiki\/.*/i.test(t.pathname);return p.jsxs(p.Fragment,{children:[e?p.jsx(za,{}):"",p.jsx("main",{children:p.jsx("section",{className:"section",children:p.jsx(m1,{})})}),p.jsx(cr,{})]})};var ky={};const Cy="@firebase/database",by="1.0.6";/**
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
 */let _E="";function EA(t){_E=t}/**
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
 */class SA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ya(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return An(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const wE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SA(e)}}catch{}return new kA},wi=wE("localStorage"),CA=wE("sessionStorage");/**
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
 */const xs=new Kp("@firebase/database"),bA=function(){let t=1;return function(){return t++}}(),EE=function(t){const e=TT(t),n=new CT;n.update(e);const r=n.digest();return Gp.encodeByteArray(r)},Ya=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ya.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let Vo=null,xy=!0;const xA=function(t,e){M(!e,"Can't turn on custom loggers persistently."),xs.logLevel=pe.VERBOSE,Vo=xs.log.bind(xs)},st=function(...t){if(xy===!0&&(xy=!1,Vo===null&&CA.get("logging_enabled")===!0&&xA()),Vo){const e=Ya.apply(null,t);Vo(e)}},qa=function(t){return function(...e){st(t,...e)}},ph=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ya(...t);xs.error(e)},er=function(...t){const e=`FIREBASE FATAL ERROR: ${Ya(...t)}`;throw xs.error(e),new Error(e)},yt=function(...t){const e="FIREBASE WARNING: "+Ya(...t);xs.warn(e)},IA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},um=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$s="[MIN_NAME]",Mi="[MAX_NAME]",Vi=function(t,e){if(t===e)return 0;if(t===$s||e===Mi)return-1;if(e===$s||t===Mi)return 1;{const n=Iy(t),r=Iy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},PA=function(t,e){return t===e?0:t<e?-1:1},Eo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},cm=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ze(e[r]),n+=":",n+=cm(t[e[r]]);return n+="}",n},SE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kE=function(t){M(!um(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},NA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function AA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const OA=new RegExp("^-?(0*)\\d{1,10}$"),LA=-2147483648,DA=2147483647,Iy=function(t){if(OA.test(t)){const e=Number(t);if(e>=LA&&e<=DA)return e}return null},to=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},MA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Go=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class jA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class FA{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(st("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class ru{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ru.OWNER="owner";/**
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
 */const dm="5",CE="v",bE="s",xE="r",IE="f",TE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,PE="ls",NE="p",mh="ac",RE="websocket",AE="long_polling";/**
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
 */class OE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function LE(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let r;if(e===RE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===AE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zA(t)&&(n.ns=t.namespace);const i=[];return lt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class UA{constructor(){this.counters_={}}incrementCounter(e,n=1){An(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aT(this.counters_)}}/**
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
 */const Hd={},Bd={};function fm(t){const e=t.toString();return Hd[e]||(Hd[e]=new UA),Hd[e]}function $A(t,e){const n=t.toString();return Bd[n]||(Bd[n]=e()),Bd[n]}/**
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
 */class WA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&to(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ty="start",HA="close",BA="pLPCommand",VA="pRTLPCB",DE="id",ME="pw",jE="ser",GA="cb",YA="seg",qA="ts",KA="d",QA="dframe",FE=1870,zE=30,XA=FE-zE,JA=25e3,ZA=3e4;class hs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qa(e),this.stats_=fm(n),this.urlFn=l=>(this.appCheckToken&&(l[mh]=this.appCheckToken),LE(n,AE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZA)),TA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hm((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ty)this.id=a,this.password=l;else if(o===HA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ty]="t",r[jE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[GA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[CE]=dm,this.transportSessionId&&(r[bE]=this.transportSessionId),this.lastSessionId&&(r[PE]=this.lastSessionId),this.applicationId&&(r[NE]=this.applicationId),this.appCheckToken&&(r[mh]=this.appCheckToken),typeof location<"u"&&location.hostname&&TE.test(location.hostname)&&(r[xE]=IE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hs.forceAllow_=!0}static forceDisallow(){hs.forceDisallow_=!0}static isAvailable(){return hs.forceAllow_?!0:!hs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!NA()&&!RA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=C1(n),i=SE(r,XA);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[QA]="t",r[DE]=e,r[ME]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bA(),window[BA+this.uniqueCallbackIdentifier]=e,window[VA+this.uniqueCallbackIdentifier]=n,this.myIFrame=hm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){st("frame writing exception"),a.stack&&st(a.stack),st(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||st("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[DE]=this.myID,e[ME]=this.myPW,e[jE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zE+r.length<=FE;){const o=this.pendingSegs.shift();r=r+"&"+YA+i+"="+o.seg+"&"+qA+i+"="+o.ts+"&"+KA+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(JA)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{st("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const e2=16384,t2=45e3;let Yu=null;typeof MozWebSocket<"u"?Yu=MozWebSocket:typeof WebSocket<"u"&&(Yu=WebSocket);class sn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qa(this.connId),this.stats_=fm(n),this.connURL=sn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[CE]=dm,typeof location<"u"&&location.hostname&&TE.test(location.hostname)&&(o[xE]=IE),n&&(o[bE]=n),r&&(o[PE]=r),i&&(o[mh]=i),s&&(o[NE]=s),LE(e,RE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wi.set("previous_websocket_failure",!0);try{let r;N1(),this.mySock=new Yu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Yu!==null&&!sn.forceDisallow_}static previouslyFailed(){return wi.isInMemoryStorage||wi.get("previous_websocket_failure")===!0}markConnectionHealthy(){wi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ya(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=SE(n,e2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(t2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sn.responsesRequiredToBeHealthy=2;sn.healthyTimeout=3e4;/**
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
 */class Ea{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hs,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=sn&&sn.isAvailable();let r=n&&!sn.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[sn];else{const i=this.transports_=[];for(const s of Ea.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ea.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ea.globalTransportInitialized_=!1;/**
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
 */const n2=6e4,r2=5e3,i2=10*1024,s2=100*1024,Vd="t",Py="d",o2="s",Ny="r",a2="e",Ry="o",Ay="a",Oy="n",Ly="p",l2="h";class u2{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qa("c:"+this.id+":"),this.transportManager_=new Ea(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Go(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>s2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>i2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vd in e){const n=e[Vd];n===Ay?this.upgradeIfSecondaryHealthy_():n===Ny?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ry&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Eo("t",e),r=Eo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ly,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ay,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Oy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Eo("t",e),r=Eo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Eo(Vd,e);if(Py in e){const r=e[Py];if(n===l2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Oy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===o2?this.onConnectionShutdown_(r):n===Ny?this.onReset_(r):n===a2?ph("Server Error: "+r):n===Ry?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ph("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dm!==r&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Go(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(n2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Go(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(r2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ly,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class UE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $E{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class qu extends $E{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qu}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Dy=32,My=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new me("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vr(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function pm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function c2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Sa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function WE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function je(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof me)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new me(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function Ct(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return Ct(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function d2(t,e){const n=Sa(t,0),r=Sa(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Vi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function mm(t,e){if(Vr(t)!==Vr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Bt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Vr(t)>Vr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class f2{constructor(e,n){this.errorPrefix_=n,this.parts_=Sa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Oc(this.parts_[r]);HE(this)}}function h2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oc(e),HE(t)}function p2(t){const e=t.parts_.pop();t.byteLength_-=Oc(e),t.parts_.length>0&&(t.byteLength_-=1)}function HE(t){if(t.byteLength_>My)throw new Error(t.errorPrefix_+"has a key path longer than "+My+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dy+") or object contains a cycle "+di(t))}function di(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class gm extends $E{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new gm}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const So=1e3,m2=60*5*1e3,jy=30*1e3,g2=1.3,v2=3e4,y2="server_kill",Fy=3;class Yn extends UE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yn.nextPersistentConnectionId_++,this.log_=qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=So,this.maxReconnectDelay_=m2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!N1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ze(s)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new $a,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Yn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&An(e,"w")){const r=zs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ST(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ph("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=So,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=So,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>v2&&(this.reconnectDelay_=So),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*g2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?st("getToken() completed but was canceled"):(st("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new u2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{yt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(y2)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&yt(c),l())}}}interrupt(e){st("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){st("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rh(this.interruptReasons_)&&(this.reconnectDelay_=So,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>cm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new me(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){st("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fy&&(this.reconnectDelay_=jy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){st("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_E.replace(/\./g,"-")]=1,qp()?e["framework.cordova"]=1:P1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qu.getInstance().currentlyOnline();return rh(this.interruptReasons_)&&e}}Yn.nextPersistentConnectionId_=0;Yn.nextConnectionId_=0;/**
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
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
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
 */class Fc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te($s,e),i=new te($s,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
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
 */let Tl;class BE extends Fc{static get __EMPTY_NODE(){return Tl}static set __EMPTY_NODE(e){Tl=e}compare(e,n){return Vi(e.name,n.name)}isDefinedOn(e){throw Xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Mi,Tl)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Tl)}toString(){return".key"}}const Is=new BE;/**
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
 */class Pl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??bt.EMPTY_NODE,this.right=s??bt.EMPTY_NODE}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class _2{copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,n=bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pl(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new _2;/**
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
 */function w2(t,e){return Vi(t.name,e.name)}function vm(t,e){return Vi(t,e)}/**
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
 */let gh;function E2(t){gh=t}const VE=function(t){return typeof t=="number"?"number:"+kE(t):"string:"+t},GE=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&An(e,".sv"),"Priority must be a string or number.")}else M(t===gh||t.isEmpty(),"priority of unexpected type.");M(t===gh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let zy;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GE(this.priorityNode_)}static set __childrenNodeConstructor(e){zy=e}static get __childrenNodeConstructor(){return zy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ee(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(M(r!==".priority"||Vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kE(this.value_):e+=this.value_,this.lazyHash_=EE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(r);return M(i>=0,"Unknown leaf type: "+n),M(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let YE,qE;function S2(t){YE=t}function k2(t){qE=t}class C2 extends Fc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Vi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Mi,new qe("[PRIORITY-POST]",qE))}makePost(e,n){const r=YE(e);return new te(n,new qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new C2;/**
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
 */const b2=Math.log(2);class x2{constructor(e){const n=s=>parseInt(Math.log(s)/b2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ku=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new Qe(f,c.node,Qe.BLACK,null,null);{const y=parseInt(d/2,10)+l,g=i(l,y),w=i(y+1,u);return c=t[y],f=n?n(c):c,new Qe(f,c.node,Qe.BLACK,g,w)}},s=function(l){let u=null,d=null,c=t.length;const f=function(g,w){const C=c-g,v=c;c-=g;const h=i(C+1,v),m=t[C],E=n?n(m):m;y(new Qe(E,m.node,w,null,h))},y=function(g){u?(u.left=g,u=g):(d=g,u=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),C=Math.pow(2,l.count-(g+1));w?f(C,Qe.BLACK):(f(C,Qe.BLACK),f(C,Qe.RED))}return d},o=new x2(t.length),a=s(o);return new bt(r||e,a)};/**
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
 */let Gd;const es={};class Hn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(es&&Fe,"ChildrenNode.ts has not been loaded"),Gd=Gd||new Hn({".priority":es},{".priority":Fe}),Gd}get(e){const n=zs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bt?n:null}hasIndex(e){return An(this.indexSet_,e.toString())}addIndex(e,n){M(e!==Is,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ku(r,e.getCompare()):a=es;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Hn(d,u)}addToIndexes(e,n){const r=ju(this.indexes_,(i,s)=>{const o=zs(this.indexSet_,s);if(M(o,"Missing index implementation for "+s),i===es)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(te.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ku(a,o.getCompare())}else return es;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new te(e.name,a))),l.insert(e,e.node)}});return new Hn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ju(this.indexes_,i=>{if(i===es)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Hn(r,this.indexSet_)}}/**
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
 */let ko;class Q{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&GE(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ko||(ko=new Q(new bt(vm),null,Hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ko}updatePriority(e){return this.children_.isEmpty()?this:new Q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ko:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ko:this.priorityNode_;return new Q(i,o,s)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{M(ee(e)!==".priority"||Vr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Fe,(o,a)=>{n[o]=a.val(e),r++,s&&Q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VE(this.getPriority().val())+":"),this.forEachChild(Fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":EE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ka?-1:0}withIndex(e){if(e===Is||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Is||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Fe),i=n.getIterator(Fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Is?null:this.indexMap_.get(e.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class I2 extends Q{constructor(){super(new bt(vm),Q.EMPTY_NODE,Hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}}const Ka=new I2;Object.defineProperties(te,{MIN:{value:new te($s,Q.EMPTY_NODE)},MAX:{value:new te(Mi,Ka)}});BE.__EMPTY_NODE=Q.EMPTY_NODE;qe.__childrenNodeConstructor=Q;E2(Ka);k2(Ka);/**
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
 */const T2=!0;function Je(t,e=null){if(t===null)return Q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,Je(e))}if(!(t instanceof Array)&&T2){const n=[];let r=!1;if(lt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Je(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new te(o,l)))}}),n.length===0)return Q.EMPTY_NODE;const s=Ku(n,w2,o=>o.name,vm);if(r){const o=Ku(n,Fe.getCompare());return new Q(s,Je(e),new Hn({".priority":o},{".priority":Fe}))}else return new Q(s,Je(e),Hn.Default)}else{let n=Q.EMPTY_NODE;return lt(t,(r,i)=>{if(An(t,r)&&r.substring(0,1)!=="."){const s=Je(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Je(e))}}S2(Je);/**
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
 */class P2 extends Fc{constructor(e){super(),this.indexPath_=e,M(!re(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Vi(e.name,n.name):s}makePost(e,n){const r=Je(e),i=Q.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=Q.EMPTY_NODE.updateChild(this.indexPath_,Ka);return new te(Mi,e)}toString(){return Sa(this.indexPath_,0).join("/")}}/**
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
 */class N2 extends Fc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=Je(e);return new te(n,r)}toString(){return".value"}}const R2=new N2;/**
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
 */function KE(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ka(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ca(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function A2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ym{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ka(n,a)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,r)):o.trackChildChange(Ca(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(ka(i,s))}),n.isLeafNode()||n.forEachChild(Fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ca(i,s,o))}else r.trackChildChange(Ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ba{constructor(e){this.indexedFilter_=new ym(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ba.getStartPost_(e),this.endPost_=ba.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new te(n,r))||(r=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Q.EMPTY_NODE);const s=this;return n.forEachChild(Fe,(o,a)=>{s.matches(new te(o,a))||(i=i.updateImmediateChild(o,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class O2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ba(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new te(n,r))||(r=Q.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Q.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Q.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,y)=>c(y,f)}else o=this.index_.getCompare();const a=e;M(a.numChildren()===this.limit_,"");const l=new te(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,l);if(d&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(Ca(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ka(n,c));const w=a.updateImmediateChild(n,Q.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ws(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ka(u.name,u.node)),s.trackChildChange(Ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,Q.EMPTY_NODE)):e}}/**
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
 */class _m{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$s}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new _m;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function L2(t){return t.loadsAllData()?new ym(t.getIndex()):t.hasLimit()?new O2(t):new ba(t)}function Uy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Fe?n="$priority":t.index_===R2?n="$value":t.index_===Is?n="$key":(M(t.index_ instanceof P2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ze(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ze(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $y(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
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
 */class Qu extends UE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Qu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Uy(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),zs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Qu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Uy(e._queryParams),r=e._path.toString(),i=new $a;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Js(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ya(a.responseText)}catch{yt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&yt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class D2{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Xu(){return{value:null,children:new Map}}function QE(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,Xu());const i=t.children.get(r);e=Se(e),QE(i,e,n)}}function vh(t,e,n){t.value!==null?n(e,t.value):M2(t,(r,i)=>{const s=new me(e.toString()+"/"+r);vh(i,s,n)})}function M2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class j2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&lt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Wy=10*1e3,F2=30*1e3,z2=5*60*1e3;class U2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new j2(e);const r=Wy+(F2-Wy)*Math.random();Go(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;lt(e,(i,s)=>{s>0&&An(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Go(this.reportStats_.bind(this),Math.floor(Math.random()*2*z2))}}/**
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
 */var ln;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ln||(ln={}));function wm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Em(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ju{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ln.ACK_USER_WRITE,this.source=wm()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new Ju(ue(),n,this.revert)}}else return M(ee(this.path)===e,"operationForChild called for unrelated child."),new Ju(Se(this.path),this.affectedTree,this.revert)}}/**
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
 */class xa{constructor(e,n){this.source=e,this.path=n,this.type=ln.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new xa(this.source,ue()):new xa(this.source,Se(this.path))}}/**
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
 */class ji{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ln.OVERWRITE}operationForChild(e){return re(this.path)?new ji(this.source,ue(),this.snap.getImmediateChild(e)):new ji(this.source,Se(this.path),this.snap)}}/**
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
 */class Hs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ln.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new ji(this.source,ue(),n.value):new Hs(this.source,ue(),n)}else return M(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hs(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class $2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function W2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(A2(o.childName,o.snapshotNode))}),Co(t,i,"child_removed",e,r,n),Co(t,i,"child_added",e,r,n),Co(t,i,"child_moved",s,r,n),Co(t,i,"child_changed",e,r,n),Co(t,i,"value",e,r,n),i}function Co(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>B2(t,a,l)),o.forEach(a=>{const l=H2(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function H2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function B2(t,e,n){if(e.childName==null||n.childName==null)throw Xs("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function zc(t,e){return{eventCache:t,serverCache:e}}function Yo(t,e,n,r){return zc(new Fi(e,n,r),t.serverCache)}function XE(t,e,n,r){return zc(t.eventCache,new Fi(e,n,r))}function yh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yd;const V2=()=>(Yd||(Yd=new bt(PA)),Yd);class we{constructor(e,n=V2()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return lt(e,(r,i)=>{n=n.set(new me(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(re(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Se(e),n);return s!=null?{path:je(new me(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new we(null)}}set(e,n){if(re(e))return new we(n,this.children);{const r=ee(e),s=(this.children.get(r)||new we(null)).set(Se(e),n),o=this.children.insert(r,s);return new we(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(Se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new we(null):new we(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(re(e))return n;{const r=ee(e),s=(this.children.get(r)||new we(null)).setTree(Se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new we(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(je(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(Se(e),je(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(Se(e),je(n,i),r):new we(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(je(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class pn{constructor(e){this.writeTree_=e}static empty(){return new pn(new we(null))}}function qo(t,e,n){if(re(e))return new pn(new we(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ct(i,e);return s=s.updateChild(o,n),new pn(t.writeTree_.set(i,s))}else{const i=new we(n),s=t.writeTree_.setTree(e,i);return new pn(s)}}}function _h(t,e,n){let r=t;return lt(n,(i,s)=>{r=qo(r,je(e,i),s)}),r}function Hy(t,e){if(re(e))return pn.empty();{const n=t.writeTree_.setTree(e,new we(null));return new pn(n)}}function wh(t,e){return Gi(t,e)!=null}function Gi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ct(n.path,e)):null}function By(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function $r(t,e){if(re(e))return t;{const n=Gi(t,e);return n!=null?new pn(new we(n)):new pn(t.writeTree_.subtree(e))}}function Eh(t){return t.writeTree_.isEmpty()}function Bs(t,e){return JE(ue(),t.writeTree_,e)}function JE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(M(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=JE(je(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(je(t,".priority"),r)),n}}/**
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
 */function km(t,e){return nS(e,t)}function G2(t,e,n,r,i){M(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=qo(t.visibleWrites,e,n)),t.lastWriteId=r}function Y2(t,e,n,r){M(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=_h(t.visibleWrites,e,n),t.lastWriteId=r}function q2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function K2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Q2(a,r.path)?i=!1:Bt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return X2(t),!0;if(r.snap)t.visibleWrites=Hy(t.visibleWrites,r.path);else{const a=r.children;lt(a,l=>{t.visibleWrites=Hy(t.visibleWrites,je(r.path,l))})}return!0}else return!1}function Q2(t,e){if(t.snap)return Bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Bt(je(t.path,n),e))return!0;return!1}function X2(t){t.visibleWrites=ZE(t.allWrites,J2,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function J2(t){return t.visible}function ZE(t,e,n){let r=pn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Bt(n,o)?(a=Ct(n,o),r=qo(r,a,s.snap)):Bt(o,n)&&(a=Ct(o,n),r=qo(r,ue(),s.snap.getChild(a)));else if(s.children){if(Bt(n,o))a=Ct(n,o),r=_h(r,a,s.children);else if(Bt(o,n))if(a=Ct(o,n),re(a))r=_h(r,ue(),s.children);else{const l=zs(s.children,ee(a));if(l){const u=l.getChild(Se(a));r=qo(r,ue(),u)}}}else throw Xs("WriteRecord should have .snap or .children")}}return r}function eS(t,e,n,r,i){if(!r&&!i){const s=Gi(t.visibleWrites,e);if(s!=null)return s;{const o=$r(t.visibleWrites,e);if(Eh(o))return n;if(n==null&&!wh(o,ue()))return null;{const a=n||Q.EMPTY_NODE;return Bs(o,a)}}}else{const s=$r(t.visibleWrites,e);if(!i&&Eh(s))return n;if(!i&&n==null&&!wh(s,ue()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Bt(u.path,e)||Bt(e,u.path))},a=ZE(t.allWrites,o,e),l=n||Q.EMPTY_NODE;return Bs(a,l)}}}function Z2(t,e,n){let r=Q.EMPTY_NODE;const i=Gi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=$r(t.visibleWrites,e);return n.forEachChild(Fe,(o,a)=>{const l=Bs($r(s,new me(o)),a);r=r.updateImmediateChild(o,l)}),By(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=$r(t.visibleWrites,e);return By(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function eO(t,e,n,r,i){M(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=je(e,n);if(wh(t.visibleWrites,s))return null;{const o=$r(t.visibleWrites,s);return Eh(o)?i.getChild(n):Bs(o,i.getChild(n))}}function tO(t,e,n,r){const i=je(e,n),s=Gi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=$r(t.visibleWrites,i);return Bs(o,r.getNode().getImmediateChild(n))}else return null}function nO(t,e){return Gi(t.visibleWrites,e)}function rO(t,e,n,r,i,s,o){let a;const l=$r(t.visibleWrites,e),u=Gi(l,ue());if(u!=null)a=u;else if(n!=null)a=Bs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=f.getNext();for(;y&&d.length<i;)c(y,r)!==0&&d.push(y),y=f.getNext();return d}else return[]}function iO(){return{visibleWrites:pn.empty(),allWrites:[],lastWriteId:-1}}function Zu(t,e,n,r){return eS(t.writeTree,t.treePath,e,n,r)}function Cm(t,e){return Z2(t.writeTree,t.treePath,e)}function Vy(t,e,n,r){return eO(t.writeTree,t.treePath,e,n,r)}function ec(t,e){return nO(t.writeTree,je(t.treePath,e))}function sO(t,e,n,r,i,s){return rO(t.writeTree,t.treePath,e,n,r,i,s)}function bm(t,e,n){return tO(t.writeTree,t.treePath,e,n)}function tS(t,e){return nS(je(t.treePath,e),t.writeTree)}function nS(t,e){return{treePath:t,writeTree:e}}/**
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
 */class oO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ca(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ka(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ca(r,e.snapshotNode,i.oldSnap));else throw Xs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class aO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const rS=new aO;class xm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zi(this.viewCache_),s=sO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function lO(t){return{filter:t}}function uO(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cO(t,e,n,r,i){const s=new oO;let o,a;if(n.type===ln.OVERWRITE){const u=n;u.source.fromUser?o=Sh(t,e,u.path,u.snap,r,i,s):(M(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!re(u.path),o=tc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===ln.MERGE){const u=n;u.source.fromUser?o=fO(t,e,u.path,u.children,r,i,s):(M(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=kh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===ln.ACK_USER_WRITE){const u=n;u.revert?o=mO(t,e,u.path,r,i,s):o=hO(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ln.LISTEN_COMPLETE)o=pO(t,e,n.path,r,s);else throw Xs("Unknown operation type: "+n.type);const l=s.getChanges();return dO(e,o,l),{viewCache:o,changes:l}}function dO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(KE(yh(e)))}}function iS(t,e,n,r,i,s){const o=e.eventCache;if(ec(r,n)!=null)return e;{let a,l;if(re(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=zi(e),d=u instanceof Q?u:Q.EMPTY_NODE,c=Cm(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Zu(r,zi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ee(n);if(u===".priority"){M(Vr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=Vy(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=Se(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Vy(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=bm(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Yo(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function tc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(re(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),y,null)}else{const y=ee(n);if(!l.isCompleteForPath(n)&&Vr(n)>1)return e;const g=Se(n),C=l.getNode().getImmediateChild(y).updateChild(g,r);y===".priority"?u=d.updatePriority(l.getNode(),C):u=d.updateChild(l.getNode(),y,C,g,rS,null)}const c=XE(e,u,l.isFullyInitialized()||re(n),d.filtersNodes()),f=new xm(i,c,s);return iS(t,c,n,i,f,a)}function Sh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new xm(i,e,s);if(re(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Yo(e,u,!0,t.filter.filtersNodes());else{const c=ee(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Yo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Se(n),y=a.getNode().getImmediateChild(c);let g;if(re(f))g=r;else{const w=d.getCompleteChild(c);w!=null?pm(f)===".priority"&&w.getChild(WE(f)).isEmpty()?g=w:g=w.updateChild(f,r):g=Q.EMPTY_NODE}if(y.equals(g))l=e;else{const w=t.filter.updateChild(a.getNode(),c,g,f,d,o);l=Yo(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Gy(t,e){return t.eventCache.isCompleteForChild(e)}function fO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=je(n,l);Gy(e,ee(d))&&(a=Sh(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=je(n,l);Gy(e,ee(d))||(a=Sh(t,a,d,u,i,s,o))}),a}function Yy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function kh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;re(n)?u=r:u=new we(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const y=e.serverCache.getNode().getImmediateChild(c),g=Yy(t,y,f);l=tc(t,l,new me(c),g,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const y=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!y){const g=e.serverCache.getNode().getImmediateChild(c),w=Yy(t,g,f);l=tc(t,l,new me(c),w,i,s,o,a)}}),l}function hO(t,e,n,r,i,s,o){if(ec(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return tc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(re(n)){let u=new we(null);return l.getNode().forEachChild(Is,(d,c)=>{u=u.set(new me(d),c)}),kh(t,e,n,u,i,s,a,o)}else return e}else{let u=new we(null);return r.foreach((d,c)=>{const f=je(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),kh(t,e,n,u,i,s,a,o)}}function pO(t,e,n,r,i){const s=e.serverCache,o=XE(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return iS(t,o,n,r,rS,i)}function mO(t,e,n,r,i,s){let o;if(ec(r,n)!=null)return e;{const a=new xm(r,e,i),l=e.eventCache.getNode();let u;if(re(n)||ee(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Zu(r,zi(e));else{const c=e.serverCache.getNode();M(c instanceof Q,"serverChildren would be complete if leaf node"),d=Cm(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=ee(n);let c=bm(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,Se(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,Q.EMPTY_NODE,Se(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zu(r,zi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ec(r,ue())!=null,Yo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class gO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ym(r.getIndex()),s=L2(r);this.processor_=lO(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Q.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(Q.EMPTY_NODE,a.getNode(),null),d=new Fi(l,o.isFullyInitialized(),i.filtersNodes()),c=new Fi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zc(c,d),this.eventGenerator_=new $2(this.query_)}get query(){return this.query_}}function vO(t){return t.viewCache_.serverCache.getNode()}function yO(t,e){const n=zi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function qy(t){return t.eventRegistrations_.length===0}function _O(t,e){t.eventRegistrations_.push(e)}function Ky(t,e,n){const r=[];if(n){M(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Qy(t,e,n,r){e.type===ln.MERGE&&e.source.queryId!==null&&(M(zi(t.viewCache_),"We should always have a full cache before handling merges"),M(yh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=cO(t.processor_,i,e,n,r);return uO(t.processor_,s.viewCache),M(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,sS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function wO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(s,o)=>{r.push(Ws(s,o))}),n.isFullyInitialized()&&r.push(KE(n.getNode())),sS(t,r,n.getNode(),e)}function sS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return W2(t.eventGenerator_,e,n,i)}/**
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
 */let nc;class EO{constructor(){this.views=new Map}}function SO(t){M(!nc,"__referenceConstructor has already been defined"),nc=t}function kO(){return M(nc,"Reference.ts has not been loaded"),nc}function CO(t){return t.views.size===0}function Im(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return M(s!=null,"SyncTree gave us an op for an invalid query."),Qy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Qy(o,e,n,r));return s}}function bO(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Zu(n,i?r:null),l=!1;a?l=!0:r instanceof Q?(a=Cm(n,r),l=!1):(a=Q.EMPTY_NODE,l=!1);const u=zc(new Fi(a,l,!1),new Fi(r,i,!1));return new gO(e,u)}return o}function xO(t,e,n,r,i,s){const o=bO(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),_O(o,n),wO(o,n)}function IO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Gr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Ky(u,n,r)),qy(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Ky(l,n,r)),qy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Gr(t)&&s.push(new(kO())(e._repo,e._path)),{removed:s,events:o}}function oS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ts(t,e){let n=null;for(const r of t.views.values())n=n||yO(r,e);return n}function aS(t,e){if(e._queryParams.loadsAllData())return Uc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function lS(t,e){return aS(t,e)!=null}function Gr(t){return Uc(t)!=null}function Uc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let rc;function TO(t){M(!rc,"__referenceConstructor has already been defined"),rc=t}function PO(){return M(rc,"Reference.ts has not been loaded"),rc}let NO=1;class Xy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=iO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uS(t,e,n,r,i){return G2(t.pendingWriteTree_,e,n,r,i),i?no(t,new ji(wm(),e,n)):[]}function RO(t,e,n,r){Y2(t.pendingWriteTree_,e,n,r);const i=we.fromObject(n);return no(t,new Hs(wm(),e,i))}function Pr(t,e,n=!1){const r=q2(t.pendingWriteTree_,e);if(K2(t.pendingWriteTree_,e)){let s=new we(null);return r.snap!=null?s=s.set(ue(),!0):lt(r.children,o=>{s=s.set(new me(o),!0)}),no(t,new Ju(r.path,s,n))}else return[]}function $c(t,e,n){return no(t,new ji(Em(),e,n))}function AO(t,e,n){const r=we.fromObject(n);return no(t,new Hs(Em(),e,r))}function OO(t,e){return no(t,new xa(Em(),e))}function LO(t,e,n){const r=Pm(t,n);if(r){const i=Nm(r),s=i.path,o=i.queryId,a=Ct(s,e),l=new xa(Sm(o),a);return Rm(t,s,l)}else return[]}function Ch(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||lS(o,e))){const l=IO(o,e,n,r);CO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,y)=>Gr(y));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const y=jO(f);for(let g=0;g<y.length;++g){const w=y[g],C=w.query,v=fS(t,w);t.listenProvider_.startListening(Ko(C),ic(t,C),v.hashFn,v.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ko(e),null):u.forEach(f=>{const y=t.queryToTagMap.get(Wc(f));t.listenProvider_.stopListening(Ko(f),y)}))}FO(t,u)}return a}function DO(t,e,n,r){const i=Pm(t,r);if(i!=null){const s=Nm(i),o=s.path,a=s.queryId,l=Ct(o,e),u=new ji(Sm(a),l,n);return Rm(t,o,u)}else return[]}function MO(t,e,n,r){const i=Pm(t,r);if(i){const s=Nm(i),o=s.path,a=s.queryId,l=Ct(o,e),u=we.fromObject(n),d=new Hs(Sm(a),l,u);return Rm(t,o,d)}else return[]}function Jy(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,y)=>{const g=Ct(f,i);s=s||Ts(y,g),o=o||Gr(y)});let a=t.syncPointTree_.get(i);a?(o=o||Gr(a),s=s||Ts(a,ue())):(a=new EO,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=Q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,g)=>{const w=Ts(g,ue());w&&(s=s.updateImmediateChild(y,w))}));const u=lS(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Wc(e);M(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=zO();t.queryToTagMap.set(f,y),t.tagToQueryMap.set(y,f)}const d=km(t.pendingWriteTree_,i);let c=xO(a,e,n,d,s,l);if(!u&&!o&&!r){const f=aS(a,e);c=c.concat(UO(t,e,f))}return c}function Tm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ct(o,e),u=Ts(a,l);if(u)return u});return eS(i,e,s,n,!0)}function no(t,e){return cS(e,t.syncPointTree_,null,km(t.pendingWriteTree_,ue()))}function cS(t,e,n,r){if(re(t.path))return dS(t,e,n,r);{const i=e.get(ue());n==null&&i!=null&&(n=Ts(i,ue()));let s=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=tS(r,o);s=s.concat(cS(a,l,u,d))}return i&&(s=s.concat(Im(i,t,r,n))),s}}function dS(t,e,n,r){const i=e.get(ue());n==null&&i!=null&&(n=Ts(i,ue()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=tS(r,o),d=t.operationForChild(o);d&&(s=s.concat(dS(d,a,l,u)))}),i&&(s=s.concat(Im(i,t,r,n))),s}function fS(t,e){const n=e.query,r=ic(t,n);return{hashFn:()=>(vO(e)||Q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?LO(t,n._path,r):OO(t,n._path);{const s=AA(i,n);return Ch(t,n,null,s)}}}}function ic(t,e){const n=Wc(e);return t.queryToTagMap.get(n)}function Wc(t){return t._path.toString()+"$"+t._queryIdentifier}function Pm(t,e){return t.tagToQueryMap.get(e)}function Nm(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function Rm(t,e,n){const r=t.syncPointTree_.get(e);M(r,"Missing sync point for query tag that we're tracking");const i=km(t.pendingWriteTree_,e);return Im(r,n,i,null)}function jO(t){return t.fold((e,n,r)=>{if(n&&Gr(n))return[Uc(n)];{let i=[];return n&&(i=oS(n)),lt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ko(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PO())(t._repo,t._path):t}function FO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Wc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function zO(){return NO++}function UO(t,e,n){const r=e._path,i=ic(t,e),s=fS(t,n),o=t.listenProvider_.startListening(Ko(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)M(!Gr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!re(u)&&d&&Gr(d))return[Uc(d).query];{let f=[];return d&&(f=f.concat(oS(d).map(y=>y.query))),lt(c,(y,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Ko(d),ic(t,d))}}return o}/**
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
 */class Am{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Am(n)}node(){return this.node_}}class Om{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new Om(this.syncTree_,n)}node(){return Tm(this.syncTree_,this.path_)}}const $O=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Zy=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HO(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},HO=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&M(!1,"Unexpected increment value: "+r);const i=e.node();if(M(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},hS=function(t,e,n,r){return Lm(e,new Om(n,t),r)},pS=function(t,e,n){return Lm(t,new Am(e),n)};function Lm(t,e,n){const r=t.getPriority().val(),i=Zy(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Zy(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,Je(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new qe(i))),o.forEachChild(Fe,(a,l)=>{const u=Lm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Dm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Mm(t,e){let n=e instanceof me?e:new me(e),r=t,i=ee(n);for(;i!==null;){const s=zs(r.node.children,i)||{children:{},childCount:0};r=new Dm(i,r,s),n=Se(n),i=ee(n)}return r}function ro(t){return t.node.value}function mS(t,e){t.node.value=e,bh(t)}function gS(t){return t.node.childCount>0}function BO(t){return ro(t)===void 0&&!gS(t)}function Hc(t,e){lt(t.node.children,(n,r)=>{e(new Dm(n,t,r))})}function vS(t,e,n,r){n&&!r&&e(t),Hc(t,i=>{vS(i,e,!0,r)}),n&&r&&e(t)}function VO(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Qa(t){return new me(t.parent===null?t.name:Qa(t.parent)+"/"+t.name)}function bh(t){t.parent!==null&&GO(t.parent,t.name,t)}function GO(t,e,n){const r=BO(n),i=An(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,bh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,bh(t))}/**
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
 */const YO=/[\[\].#$\/\u0000-\u001F\u007F]/,qO=/[\[\].#$\u0000-\u001F\u007F]/,qd=10*1024*1024,jm=function(t){return typeof t=="string"&&t.length!==0&&!YO.test(t)},yS=function(t){return typeof t=="string"&&t.length!==0&&!qO.test(t)},KO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yS(t)},QO=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!um(t)||t&&typeof t=="object"&&An(t,".sv")},XO=function(t,e,n,r){Bc(Ac(t,"value"),e,n)},Bc=function(t,e,n){const r=n instanceof me?new f2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+di(r));if(typeof e=="function")throw new Error(t+"contains a function "+di(r)+" with contents = "+e.toString());if(um(e))throw new Error(t+"contains "+e.toString()+" "+di(r));if(typeof e=="string"&&e.length>qd/3&&Oc(e)>qd)throw new Error(t+"contains a string greater than "+qd+" utf8 bytes "+di(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(lt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!jm(o)))throw new Error(t+" contains an invalid key ("+o+") "+di(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);h2(r,o),Bc(t,a,r),p2(r)}),i&&s)throw new Error(t+' contains ".value" child '+di(r)+" in addition to actual children.")}},JO=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Sa(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!jm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(d2);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Bt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ZO=function(t,e,n,r){const i=Ac(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];lt(e,(o,a)=>{const l=new me(o);if(Bc(i,a,je(n,l)),pm(l)===".priority"&&!QO(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),JO(i,s)},_S=function(t,e,n,r){if(!yS(n))throw new Error(Ac(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_S(t,e,n)},tL=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},nL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!KO(n))throw new Error(Ac(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class rL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!mm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function wS(t,e,n){Vc(t,n),ES(t,r=>mm(r,e))}function gn(t,e,n){Vc(t,n),ES(t,r=>Bt(r,e)||Bt(e,r))}function ES(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(iL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function iL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Vo&&st("event: "+n.toString()),to(r)}}}/**
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
 */const sL="repo_interrupt",oL=25;class aL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xu(),this.transactionQueueTree_=new Dm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lL(t,e,n){if(t.stats_=fm(t.repoInfo_),t.forceRestClient_||MA())t.server_=new Qu(t.repoInfo_,(r,i,s,o)=>{e_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>t_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yn(t.repoInfo_,e,(r,i,s,o)=>{e_(t,r,i,s,o)},r=>{t_(t,r)},r=>{cL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=$A(t.repoInfo_,()=>new U2(t.stats_,t.server_)),t.infoData_=new D2,t.infoSyncTree_=new Xy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=$c(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fm(t,"connected",!1),t.serverSyncTree_=new Xy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);gn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function uL(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gc(t){return $O({timestamp:uL(t)})}function e_(t,e,n,r,i){t.dataUpdateCount++;const s=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ju(n,u=>Je(u));o=MO(t.serverSyncTree_,s,l,i)}else{const l=Je(n);o=DO(t.serverSyncTree_,s,l,i)}else if(r){const l=ju(n,u=>Je(u));o=AO(t.serverSyncTree_,s,l)}else{const l=Je(n);o=$c(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Vs(t,s)),gn(t.eventQueue_,a,o)}function t_(t,e){Fm(t,"connected",e),e===!1&&hL(t)}function cL(t,e){lt(e,(n,r)=>{Fm(t,n,r)})}function Fm(t,e,n){const r=new me("/.info/"+e),i=Je(n);t.infoData_.updateSnapshot(r,i);const s=$c(t.infoSyncTree_,r,i);gn(t.eventQueue_,r,s)}function zm(t){return t.nextWriteId_++}function dL(t,e,n,r,i){Yc(t,"set",{path:e.toString(),value:n,priority:r});const s=Gc(t),o=Je(n,r),a=Tm(t.serverSyncTree_,e),l=pS(o,a,s),u=zm(t),d=uS(t.serverSyncTree_,e,l,u,!0);Vc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,y)=>{const g=f==="ok";g||yt("set at "+e+" failed: "+f);const w=Pr(t.serverSyncTree_,u,!g);gn(t.eventQueue_,e,w),xh(t,i,f,y)});const c=$m(t,e);Vs(t,c),gn(t.eventQueue_,c,[])}function fL(t,e,n,r){Yc(t,"update",{path:e.toString(),value:n});let i=!0;const s=Gc(t),o={};if(lt(n,(a,l)=>{i=!1,o[a]=hS(je(e,a),Je(l),t.serverSyncTree_,s)}),i)st("update() called with empty data.  Don't do anything."),xh(t,r,"ok",void 0);else{const a=zm(t),l=RO(t.serverSyncTree_,e,o,a);Vc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||yt("update at "+e+" failed: "+u);const f=Pr(t.serverSyncTree_,a,!c),y=f.length>0?Vs(t,e):e;gn(t.eventQueue_,y,f),xh(t,r,u,d)}),lt(n,u=>{const d=$m(t,je(e,u));Vs(t,d)}),gn(t.eventQueue_,e,[])}}function hL(t){Yc(t,"onDisconnectEvents");const e=Gc(t),n=Xu();vh(t.onDisconnect_,ue(),(i,s)=>{const o=hS(i,s,t.serverSyncTree_,e);QE(n,i,o)});let r=[];vh(n,ue(),(i,s)=>{r=r.concat($c(t.serverSyncTree_,i,s));const o=$m(t,i);Vs(t,o)}),t.onDisconnect_=Xu(),gn(t.eventQueue_,ue(),r)}function pL(t,e,n){let r;ee(e._path)===".info"?r=Jy(t.infoSyncTree_,e,n):r=Jy(t.serverSyncTree_,e,n),wS(t.eventQueue_,e._path,r)}function n_(t,e,n){let r;ee(e._path)===".info"?r=Ch(t.infoSyncTree_,e,n):r=Ch(t.serverSyncTree_,e,n),wS(t.eventQueue_,e._path,r)}function mL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sL)}function Yc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),st(n,...e)}function xh(t,e,n,r){e&&to(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function SS(t,e,n){return Tm(t.serverSyncTree_,e,n)||Q.EMPTY_NODE}function Um(t,e=t.transactionQueueTree_){if(e||qc(t,e),ro(e)){const n=CS(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gL(t,Qa(e),n)}else gS(e)&&Hc(e,n=>{Um(t,n)})}function gL(t,e,n){const r=n.map(u=>u.currentWriteId),i=SS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];M(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ct(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Yc(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Pr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();qc(t,Mm(t.transactionQueueTree_,e)),Um(t,t.transactionQueueTree_),gn(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)to(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{yt("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Vs(t,e)}},o)}function Vs(t,e){const n=kS(t,e),r=Qa(n),i=CS(t,n);return vL(t,i,r),r}function vL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ct(n,l.path);let d=!1,c;if(M(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Pr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=oL)d=!0,c="maxretry",i=i.concat(Pr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=SS(t,l.path,o);l.currentInputSnapshot=f;const y=e[a].update(f.val());if(y!==void 0){Bc("transaction failed: Data returned ",y,l.path);let g=Je(y);typeof y=="object"&&y!=null&&An(y,".priority")||(g=g.updatePriority(f.getPriority()));const C=l.currentWriteId,v=Gc(t),h=pS(g,f,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=zm(t),o.splice(o.indexOf(C),1),i=i.concat(uS(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Pr(t.serverSyncTree_,C,!0))}else d=!0,c="nodata",i=i.concat(Pr(t.serverSyncTree_,l.currentWriteId,!0))}gn(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}qc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)to(r[a]);Um(t,t.transactionQueueTree_)}function kS(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&ro(r)===void 0;)r=Mm(r,n),e=Se(e),n=ee(e);return r}function CS(t,e){const n=[];return bS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function bS(t,e,n){const r=ro(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Hc(e,i=>{bS(t,i,n)})}function qc(t,e){const n=ro(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,mS(e,n.length>0?n:void 0)}Hc(e,r=>{qc(t,r)})}function $m(t,e){const n=Qa(kS(t,e)),r=Mm(t.transactionQueueTree_,e);return VO(r,i=>{Kd(t,i)}),Kd(t,r),vS(r,i=>{Kd(t,i)}),n}function Kd(t,e){const n=ro(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Pr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?mS(e,void 0):n.length=s+1,gn(t.eventQueue_,Qa(e),i);for(let o=0;o<r.length;o++)to(r[o])}}/**
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
 */function yL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _L(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const r_=function(t,e){const n=wL(t),r=n.namespace;n.domain==="firebase.com"&&er(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&er("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||IA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new me(n.pathString)}},wL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=yL(t.substring(d,c)));const f=_L(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class EL{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class SL{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class kL{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Wm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:pm(this._path)}get ref(){return new ti(this._repo,this._path)}get _queryIdentifier(){const e=$y(this._queryParams),n=cm(e);return n==="{}"?"default":n}get _queryObject(){return $y(this._queryParams)}isEqual(e){if(e=pt(e),!(e instanceof Wm))return!1;const n=this._repo===e._repo,r=mm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+c2(this._path)}}class ti extends Wm{constructor(e,n){super(e,n,new _m,!1)}get parent(){const e=WE(this._path);return e===null?null:new ti(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class sc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),r=Ih(this.ref,e);return new sc(this._node.getChild(n),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new sc(i,Ih(this.ref,r),Fe)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qd(t,e){return t=pt(t),t._checkNotDeleted("ref"),e!==void 0?Ih(t._root,e):t._root}function Ih(t,e){return t=pt(t),ee(t._path)===null?eL("child","path",e):_S("child","path",e),new ti(t._repo,je(t._path,e))}function CL(t,e){t=pt(t),tL("set",t._path),XO("set",e,t._path);const n=new $a;return dL(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bL(t,e){ZO("update",e,t._path);const n=new $a;return fL(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Hm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new EL("value",this,new sc(e.snapshotNode,new ti(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SL(this,e,n):null}matches(e){return e instanceof Hm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function xL(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(d,c)=>{n_(t._repo,t,a),l(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new kL(n,s||void 0),a=new Hm(o);return pL(t._repo,t,a),()=>n_(t._repo,t,a)}function IL(t,e,n,r){return xL(t,"value",e,n,r)}SO(ti);TO(ti);/**
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
 */const TL="FIREBASE_DATABASE_EMULATOR_HOST",Th={};let PL=!1;function NL(t,e,n,r){t.repoInfo_=new OE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function RL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||er("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),st("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=r_(s,i),a=o.repoInfo,l;typeof process<"u"&&ky&&(l=ky[TL]),l?(s=`http://${l}?ns=${a.namespace}`,o=r_(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new FA(t.name,t.options,e);nL("Invalid Firebase Database URL",o),re(o.path)||er("Database URL must point to the root of a Firebase Database (not including a child path).");const d=OL(a,t,u,new jA(t.name,n));return new LL(d,t)}function AL(t,e){const n=Th[e];(!n||n[t.key]!==t)&&er(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mL(t),delete n[t.key]}function OL(t,e,n,r){let i=Th[e.name];i||(i={},Th[e.name]=i);let s=i[t.toURLString()];return s&&er("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new aL(t,PL,n,r),i[t.toURLString()]=s,s}class LL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ti(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&er("Cannot call "+e+" on a deleted database.")}}function i_(t=D1(),e){const n=Xp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=hT("database");r&&DL(n,...r)}return n}function DL(t,e,n,r={}){t=pt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&er("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&er('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ru(ru.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:pT(r.mockUserToken,t.app.options.projectId);s=new ru(o)}NL(i,e,n,s)}/**
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
 */function ML(t){EA(Zs),Us(new Ri("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return RL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ur(Cy,by,t),Ur(Cy,by,"esm2017")}Yn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ML();const s_=(t,e=[])=>{if(typeof t!="object")return console.error("Object nie jest obiektem! Wartość object ",t),!1;e.length>0&&e.forEach(n=>{if(!Object.hasOwn(t,n))return console.error("Obiekt nie ma właściwości ",n),!1});for(let n in t)if(t[n]==null)return console.error("Niepoprawna wartość!",t[n],"w",n),!1;return!0},Kc=()=>{const[t,e]=S.useState(null),[n,r]=S.useState({isSuccess:!1,message:""});return S.useEffect(()=>{const s=i_(uh),o=Qd(s,"/articles");IL(o,a=>{const l=a.val();e(l),r(u=>(u.isSuccess=!0,u.message="Udało się pobrać listę artykułów.",u))},a=>{throw new Error(a.code)})},[]),{data:t,response:n,pushData:async(s,o)=>{let a={isSuccess:!1,message:""};return new Promise((l,u)=>{if(s_(s)){const d=i_(uh);let c={found:!1,article:{},key:-1};if(t.forEach((y,g)=>{if(y.address===s.address){c.article=y,c.key=g,c.found=!0;return}}),!o&&c.found)return l({...a,...c});if(o){c.article.author!==s.author&&(s.author+=", ".concat(c.article.author)),bL(Qd(d,"/articles/"+c.key),s).then(()=>{a.isSuccess=!0,a.message="Zapisano zmiany w artykule.",l(a)}).catch(y=>{u(y.code)});return}let f=[...t].concat(s);CL(Qd(d,"/articles"),f).then(()=>{a.isSuccess=!0,a.message="Zapisano zmiany w artykule.",l(a)}).catch(y=>{u(y.code)})}else u("Wprowadzone dane nie są poprawne.")})},checkObject:s_}},jL="_content_wfe2l_1",FL={content:jL},zL=()=>{const{data:t,response:e}=Kc(),[n,r]=S.useState(""),[i,s]=S.useState("");return S.useEffect(()=>{if(!e.isSuccess||!t)return;let o=t.length;r(t.slice(o-3,o).reverse().map((a,l)=>p.jsx("div",{children:p.jsx(Pt,{to:a.address,children:a.name})},l))),s(t.slice(1,o-3).map((a,l)=>p.jsx("div",{children:p.jsx(Pt,{to:a.address,children:a.name})},l)))},[t,e]),p.jsxs(Gt.Fragment,{children:[p.jsx("header",{children:p.jsx("h2",{children:"Wiki"})}),p.jsxs("div",{className:FL.content,children:[p.jsx("h3",{children:"Zobacz najnowsze artykuły"}),n,p.jsx("h3",{children:"Lista wszystkich artykułów"}),i]})]})};let UL=t=>new DOMParser().parseFromString(t,"text/html").body.childNodes,xS=t=>t.map((e,n)=>{let r={};const{attributes:i,localName:s,childNodes:o,nodeValue:a}=e;return i&&Array.from(i).forEach(l=>{if(l.name==="style"){let u=l.nodeValue.split(";"),d={};u.forEach(c=>{let[f,y]=c.split(":");d[f]=y}),r[l.name]=d}else r[l.name]=l.nodeValue}),r.key=n,s?Gt.createElement(s,r,o&&Array.isArray(Array.from(o))?xS(Array.from(o)):[]):a});const $L=t=>xS(Array.from(UL(t.domString))),IS=({item:t})=>t.content&&t.name&&p.jsxs(p.Fragment,{children:[p.jsx("header",{children:p.jsx("h2",{children:t.name})}),p.jsx("div",{className:"content",children:p.jsx($L,{domString:t.content})})]});IS.propTypes={item:A.any};var TS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="right-from-bracket",r=512,i=512,s=["sign-out-alt"],o="f2f5",a="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faRightFromBracket=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(TS);var PS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="pencil",r=512,i=512,s=[9999,61504,"pencil-alt"],o="f303",a="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faPencil=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(PS);var NS={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="house",r=576,i=512,s=[127968,63498,63500,"home","home-alt","home-lg-alt"],o="f015",a="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faHouse=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(NS);var Bm={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="bars",r=448,i=512,s=["navicon"],o="f0c9",a="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faBars=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Bm);const WL="_option_1o9n8_1",o_={option:WL},Ao=({className:t,onClick:e,to:n,replace:r,title:i,children:s})=>n?p.jsx(hi,{to:n,replace:r||!1,className:`${t||""} ${o_.option}`,onClick:e,title:i||"",children:s}):p.jsx("button",{type:"button",className:`${t||""} ${o_.option}`,onClick:e,title:i||"",children:s});Ao.propTypes={className:ui.PropTypes.string,onClick:ui.PropTypes.func,to:ui.PropTypes.string,replace:ui.PropTypes.bool,title:ui.PropTypes.string,children:ui.PropTypes.any};const ni=S.createContext({editorContent:"home",articleContent:"",articleAddress:"",articleName:"",toolbarButtons:{file:{main:{disabled:!1},exit:{disabled:!0},new:{disabled:!1},open:{disabled:!1},save:{disabled:!0}},edit:{newLine:{disabled:!0},copy:{disabled:!0},cleanCode:{disabled:!0}}},setEditorContent:()=>{},setArticleContent:()=>{},setArticleAddress:()=>{},setArticleName:()=>{},resetArticleInfo:()=>{},disableToolbarButtons:(t,e)=>!0,enableToolbarButtons:(t,e)=>!1});function a_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?a_(Object(n),!0).forEach(function(r){Ge(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oc(t){"@babel/helpers - typeof";return oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oc(t)}function HL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function BL(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function VL(t,e,n){return e&&BL(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vm(t,e){return YL(t)||KL(t,e)||RS(t,e)||XL()}function Xa(t){return GL(t)||qL(t)||RS(t)||QL()}function GL(t){if(Array.isArray(t))return Ph(t)}function YL(t){if(Array.isArray(t))return t}function qL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function KL(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function RS(t,e){if(t){if(typeof t=="string")return Ph(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ph(t,e)}}function Ph(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function QL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l_=function(){},Gm={},AS={},OS=null,LS={mark:l_,measure:l_};try{typeof window<"u"&&(Gm=window),typeof document<"u"&&(AS=document),typeof MutationObserver<"u"&&(OS=MutationObserver),typeof performance<"u"&&(LS=performance)}catch{}var JL=Gm.navigator||{},u_=JL.userAgent,c_=u_===void 0?"":u_,Yr=Gm,Ie=AS,d_=OS,Nl=LS;Yr.document;var dr=!!Ie.documentElement&&!!Ie.head&&typeof Ie.addEventListener=="function"&&typeof Ie.createElement=="function",DS=~c_.indexOf("MSIE")||~c_.indexOf("Trident/"),Rl,Al,Ol,Ll,Dl,tr="___FONT_AWESOME___",Nh=16,MS="fa",jS="svg-inline--fa",Ui="data-fa-i2svg",Rh="data-fa-pseudo-element",ZL="data-fa-pseudo-element-pending",Ym="data-prefix",qm="data-icon",f_="fontawesome-i2svg",eD="async",tD=["HTML","HEAD","STYLE","SCRIPT"],FS=function(){try{return!0}catch{return!1}}(),be="classic",Me="sharp",Km=[be,Me];function Ja(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[be]}})}var Ia=Ja((Rl={},Ge(Rl,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ge(Rl,Me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Rl)),Ta=Ja((Al={},Ge(Al,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ge(Al,Me,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Al)),Pa=Ja((Ol={},Ge(Ol,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ge(Ol,Me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ol)),nD=Ja((Ll={},Ge(Ll,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ge(Ll,Me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ll)),rD=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,zS="fa-layers-text",iD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sD=Ja((Dl={},Ge(Dl,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ge(Dl,Me,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Dl)),US=[1,2,3,4,5,6,7,8,9,10],oD=US.concat([11,12,13,14,15,16,17,18,19,20]),aD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ei={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Na=new Set;Object.keys(Ta[be]).map(Na.add.bind(Na));Object.keys(Ta[Me]).map(Na.add.bind(Na));var lD=[].concat(Km,Xa(Na),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ei.GROUP,Ei.SWAP_OPACITY,Ei.PRIMARY,Ei.SECONDARY]).concat(US.map(function(t){return"".concat(t,"x")})).concat(oD.map(function(t){return"w-".concat(t)})),Qo=Yr.FontAwesomeConfig||{};function uD(t){var e=Ie.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function cD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ie&&typeof Ie.querySelector=="function"){var dD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dD.forEach(function(t){var e=Vm(t,2),n=e[0],r=e[1],i=cD(uD(n));i!=null&&(Qo[r]=i)})}var $S={styleDefault:"solid",familyDefault:"classic",cssPrefix:MS,replacementClass:jS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qo.familyPrefix&&(Qo.cssPrefix=Qo.familyPrefix);var Gs=U(U({},$S),Qo);Gs.autoReplaceSvg||(Gs.observeMutations=!1);var W={};Object.keys($S).forEach(function(t){Object.defineProperty(W,t,{enumerable:!0,set:function(n){Gs[t]=n,Xo.forEach(function(r){return r(W)})},get:function(){return Gs[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){Gs.cssPrefix=e,Xo.forEach(function(n){return n(W)})},get:function(){return Gs.cssPrefix}});Yr.FontAwesomeConfig=W;var Xo=[];function fD(t){return Xo.push(t),function(){Xo.splice(Xo.indexOf(t),1)}}var vr=Nh,In={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hD(t){if(!(!t||!dr)){var e=Ie.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ie.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ie.head.insertBefore(e,r),t}}var pD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ra(){for(var t=12,e="";t-- >0;)e+=pD[Math.random()*62|0];return e}function io(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Qm(t){return t.classList?io(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function WS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mD(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(WS(t[n]),'" ')},"").trim()}function Qc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Xm(t){return t.size!==In.size||t.x!==In.x||t.y!==In.y||t.rotate!==In.rotate||t.flipX||t.flipY}function gD(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function vD(t){var e=t.transform,n=t.width,r=n===void 0?Nh:n,i=t.height,s=i===void 0?Nh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&DS?l+="translate(".concat(e.x/vr-r/2,"em, ").concat(e.y/vr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/vr,"em), calc(-50% + ").concat(e.y/vr,"em)) "):l+="translate(".concat(e.x/vr,"em, ").concat(e.y/vr,"em) "),l+="scale(".concat(e.size/vr*(e.flipX?-1:1),", ").concat(e.size/vr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var yD=`:root, :host {
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
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function HS(){var t=MS,e=jS,n=W.cssPrefix,r=W.replacementClass,i=yD;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var h_=!1;function Xd(){W.autoAddCss&&!h_&&(hD(HS()),h_=!0)}var _D={mixout:function(){return{dom:{css:HS,insertCss:Xd}}},hooks:function(){return{beforeDOMElementCreation:function(){Xd()},beforeI2svg:function(){Xd()}}}},nr=Yr||{};nr[tr]||(nr[tr]={});nr[tr].styles||(nr[tr].styles={});nr[tr].hooks||(nr[tr].hooks={});nr[tr].shims||(nr[tr].shims=[]);var un=nr[tr],BS=[],wD=function t(){Ie.removeEventListener("DOMContentLoaded",t),ac=1,BS.map(function(e){return e()})},ac=!1;dr&&(ac=(Ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ie.readyState),ac||Ie.addEventListener("DOMContentLoaded",wD));function ED(t){dr&&(ac?setTimeout(t,0):BS.push(t))}function Za(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?WS(t):"<".concat(e," ").concat(mD(r),">").concat(s.map(Za).join(""),"</").concat(e,">")}function p_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Jd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,u,d;for(r===void 0?(l=1,d=e[s[0]]):(l=0,d=r);l<o;l++)u=s[l],d=a(d,e[u],u,e);return d};function SD(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ah(t){var e=SD(t);return e.length===1?e[0].toString(16):null}function kD(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function m_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Oh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=m_(e);typeof un.hooks.addPack=="function"&&!i?un.hooks.addPack(t,m_(e)):un.styles[t]=U(U({},un.styles[t]||{}),s),t==="fas"&&Oh("fa",e)}var Ml,jl,Fl,ps=un.styles,CD=un.shims,bD=(Ml={},Ge(Ml,be,Object.values(Pa[be])),Ge(Ml,Me,Object.values(Pa[Me])),Ml),Jm=null,VS={},GS={},YS={},qS={},KS={},xD=(jl={},Ge(jl,be,Object.keys(Ia[be])),Ge(jl,Me,Object.keys(Ia[Me])),jl);function ID(t){return~lD.indexOf(t)}function TD(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!ID(i)?i:null}var QS=function(){var e=function(s){return Jd(ps,function(o,a,l){return o[l]=Jd(a,s,{}),o},{})};VS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),GS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),KS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ps||W.autoFetchSvg,r=Jd(CD,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});YS=r.names,qS=r.unicodes,Jm=Xc(W.styleDefault,{family:W.familyDefault})};fD(function(t){Jm=Xc(t.styleDefault,{family:W.familyDefault})});QS();function Zm(t,e){return(VS[t]||{})[e]}function PD(t,e){return(GS[t]||{})[e]}function Si(t,e){return(KS[t]||{})[e]}function XS(t){return YS[t]||{prefix:null,iconName:null}}function ND(t){var e=qS[t],n=Zm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qr(){return Jm}var eg=function(){return{prefix:null,iconName:null,rest:[]}};function Xc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?be:n,i=Ia[r][t],s=Ta[r][t]||Ta[r][i],o=t in un.styles?t:null;return s||o||null}var g_=(Fl={},Ge(Fl,be,Object.keys(Pa[be])),Ge(Fl,Me,Object.keys(Pa[Me])),Fl);function Jc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ge(e,be,"".concat(W.cssPrefix,"-").concat(be)),Ge(e,Me,"".concat(W.cssPrefix,"-").concat(Me)),e),o=null,a=be;(t.includes(s[be])||t.some(function(u){return g_[be].includes(u)}))&&(a=be),(t.includes(s[Me])||t.some(function(u){return g_[Me].includes(u)}))&&(a=Me);var l=t.reduce(function(u,d){var c=TD(W.cssPrefix,d);if(ps[d]?(d=bD[a].includes(d)?nD[a][d]:d,o=d,u.prefix=d):xD[a].indexOf(d)>-1?(o=d,u.prefix=Xc(d,{family:a})):c?u.iconName=c:d!==W.replacementClass&&d!==s[be]&&d!==s[Me]&&u.rest.push(d),!i&&u.prefix&&u.iconName){var f=o==="fa"?XS(u.iconName):{},y=Si(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||y||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ps.far&&ps.fas&&!W.autoFetchSvg&&(u.prefix="fas")}return u},eg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Me&&(ps.fass||W.autoFetchSvg)&&(l.prefix="fass",l.iconName=Si(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=qr()||"fas"),l}var RD=function(){function t(){HL(this,t),this.definitions={}}return VL(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=U(U({},n.definitions[a]||{}),o[a]),Oh(a,o[a]);var l=Pa[be][a];l&&Oh(l,o[a]),QS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[a]||(n[a]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(n[a][c]=u)}),n[a][l]=u}),n}}]),t}(),v_=[],ms={},Ps={},AD=Object.keys(Ps);function OD(t,e){var n=e.mixoutsTo;return v_=t,ms={},Object.keys(Ps).forEach(function(r){AD.indexOf(r)===-1&&delete Ps[r]}),v_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),oc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ms[o]||(ms[o]=[]),ms[o].push(s[o])})}r.provides&&r.provides(Ps)}),n}function Lh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ms[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function $i(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ms[t]||[];i.forEach(function(s){s.apply(null,n)})}function rr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ps[t]?Ps[t].apply(null,e):void 0}function Dh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||qr();if(e)return e=Si(n,e)||e,p_(JS.definitions,n,e)||p_(un.styles,n,e)}var JS=new RD,LD=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,$i("noAuto")},DD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dr?($i("beforeI2svg",e),rr("pseudoElements2svg",e),rr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,ED(function(){jD({autoReplaceSvgRoot:n}),$i("watch",e)})}},MD={icon:function(e){if(e===null)return null;if(oc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Si(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Xc(e[0]);return{prefix:r,iconName:Si(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(W.cssPrefix,"-"))>-1||e.match(rD))){var i=Jc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||qr(),iconName:Si(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=qr();return{prefix:s,iconName:Si(s,e)||e}}}},zt={noAuto:LD,config:W,dom:DD,parse:MD,library:JS,findIconDefinition:Dh,toHtml:Za},jD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ie:n;(Object.keys(un.styles).length>0||W.autoFetchSvg)&&dr&&W.autoReplaceSvg&&zt.dom.i2svg({node:r})};function Zc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Za(r)})}}),Object.defineProperty(t,"node",{get:function(){if(dr){var r=Ie.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function FD(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Xm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Qc(U(U({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function zD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:o}),children:r}]}]}function tg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,d=t.titleId,c=t.extra,f=t.watchable,y=f===void 0?!1:f,g=r.found?r:n,w=g.width,C=g.height,v=i==="fak",h=[W.replacementClass,s?"".concat(W.cssPrefix,"-").concat(s):""].filter(function(T){return c.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(c.classes).join(" "),m={children:[],attributes:U(U({},c.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(C)})},E=v&&!~c.classes.indexOf("fa-fw")?{width:"".concat(w/C*16*.0625,"em")}:{};y&&(m.attributes[Ui]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(d||Ra())},children:[l]}),delete m.attributes.title);var k=U(U({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:U(U({},E),c.styles)}),_=r.found&&n.found?rr("generateAbstractMask",k)||{children:[],attributes:{}}:rr("generateAbstractIcon",k)||{children:[],attributes:{}},x=_.children,N=_.attributes;return k.children=x,k.attributes=N,a?zD(k):FD(k)}function y_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=U(U(U({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Ui]="");var d=U({},o.styles);Xm(i)&&(d.transform=vD({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var c=Qc(d);c.length>0&&(u.style=c);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function UD(t){var e=t.content,n=t.title,r=t.extra,i=U(U(U({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Qc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zd=un.styles;function Mh(t){var e=t[0],n=t[1],r=t.slice(4),i=Vm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(Ei.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Ei.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Ei.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var $D={found:!1,width:512,height:512};function WD(t,e){!FS&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function jh(t,e){var n=e;return e==="fa"&&W.styleDefault!==null&&(e=qr()),new Promise(function(r,i){if(rr("missingIconAbstract"),n==="fa"){var s=XS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Zd[e]&&Zd[e][t]){var o=Zd[e][t];return r(Mh(o))}WD(t,e),r(U(U({},$D),{},{icon:W.showMissingIcons&&t?rr("missingIconAbstract")||{}:{}}))})}var __=function(){},Fh=W.measurePerformance&&Nl&&Nl.mark&&Nl.measure?Nl:{mark:__,measure:__},Oo='FA "6.5.2"',HD=function(e){return Fh.mark("".concat(Oo," ").concat(e," begins")),function(){return ZS(e)}},ZS=function(e){Fh.mark("".concat(Oo," ").concat(e," ends")),Fh.measure("".concat(Oo," ").concat(e),"".concat(Oo," ").concat(e," begins"),"".concat(Oo," ").concat(e," ends"))},ng={begin:HD,end:ZS},iu=function(){};function w_(t){var e=t.getAttribute?t.getAttribute(Ui):null;return typeof e=="string"}function BD(t){var e=t.getAttribute?t.getAttribute(Ym):null,n=t.getAttribute?t.getAttribute(qm):null;return e&&n}function VD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function GD(){if(W.autoReplaceSvg===!0)return su.replace;var t=su[W.autoReplaceSvg];return t||su.replace}function YD(t){return Ie.createElementNS("http://www.w3.org/2000/svg",t)}function qD(t){return Ie.createElement(t)}function ek(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?YD:qD:n;if(typeof t=="string")return Ie.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(ek(o,{ceFn:r}))}),i}function KD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var su={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(ek(i),n)}),n.getAttribute(Ui)===null&&W.keepOriginalSource){var r=Ie.createComment(KD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Qm(n).indexOf(W.replacementClass))return su.replace(e);var i=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===W.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Za(a)}).join(`
`);n.setAttribute(Ui,""),n.innerHTML=o}};function E_(t){t()}function tk(t,e){var n=typeof e=="function"?e:iu;if(t.length===0)n();else{var r=E_;W.mutateApproach===eD&&(r=Yr.requestAnimationFrame||E_),r(function(){var i=GD(),s=ng.begin("mutate");t.map(i),s(),n()})}}var rg=!1;function nk(){rg=!0}function zh(){rg=!1}var lc=null;function S_(t){if(d_&&W.observeMutations){var e=t.treeCallback,n=e===void 0?iu:e,r=t.nodeCallback,i=r===void 0?iu:r,s=t.pseudoElementsCallback,o=s===void 0?iu:s,a=t.observeMutationsRoot,l=a===void 0?Ie:a;lc=new d_(function(u){if(!rg){var d=qr();io(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!w_(c.addedNodes[0])&&(W.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&W.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&w_(c.target)&&~aD.indexOf(c.attributeName))if(c.attributeName==="class"&&BD(c.target)){var f=Jc(Qm(c.target)),y=f.prefix,g=f.iconName;c.target.setAttribute(Ym,y||d),g&&c.target.setAttribute(qm,g)}else VD(c.target)&&i(c.target)})}}),dr&&lc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function QD(){lc&&lc.disconnect()}function XD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function JD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Jc(Qm(t));return i.prefix||(i.prefix=qr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=PD(i.prefix,t.innerText)||Zm(i.prefix,Ah(t.innerText))),!i.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function ZD(t){var e=io(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return W.autoA11y&&(n?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||Ra()):(e["aria-hidden"]="true",e.focusable="false")),e}function eM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:In,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=JD(t),r=n.iconName,i=n.prefix,s=n.rest,o=ZD(t),a=Lh("parseNodeAttributes",{},t),l=e.styleParser?XD(t):[];return U({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:In,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var tM=un.styles;function rk(t){var e=W.autoReplaceSvg==="nest"?k_(t,{styleParser:!1}):k_(t);return~e.extra.classes.indexOf(zS)?rr("generateLayersText",t,e):rr("generateSvgReplacementMutation",t,e)}var Kr=new Set;Km.map(function(t){Kr.add("fa-".concat(t))});Object.keys(Ia[be]).map(Kr.add.bind(Kr));Object.keys(Ia[Me]).map(Kr.add.bind(Kr));Kr=Xa(Kr);function C_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dr)return Promise.resolve();var n=Ie.documentElement.classList,r=function(c){return n.add("".concat(f_,"-").concat(c))},i=function(c){return n.remove("".concat(f_,"-").concat(c))},s=W.autoFetchSvg?Kr:Km.map(function(d){return"fa-".concat(d)}).concat(Object.keys(tM));s.includes("fa")||s.push("fa");var o=[".".concat(zS,":not([").concat(Ui,"])")].concat(s.map(function(d){return".".concat(d,":not([").concat(Ui,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=io(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ng.begin("onTree"),u=a.reduce(function(d,c){try{var f=rk(c);f&&d.push(f)}catch(y){FS||y.name==="MissingIcon"&&console.error(y)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(f){tk(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(f){l(),c(f)})})}function nM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rk(t).then(function(n){n&&tk([n],e)})}function rM(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Dh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Dh(i||{})),t(r,U(U({},n),{},{mask:i}))}}var iM=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?In:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,d=u===void 0?null:u,c=n.title,f=c===void 0?null:c,y=n.titleId,g=y===void 0?null:y,w=n.classes,C=w===void 0?[]:w,v=n.attributes,h=v===void 0?{}:v,m=n.styles,E=m===void 0?{}:m;if(e){var k=e.prefix,_=e.iconName,x=e.icon;return Zc(U({type:"icon"},e),function(){return $i("beforeDOMElementCreation",{iconDefinition:e,params:n}),W.autoA11y&&(f?h["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(g||Ra()):(h["aria-hidden"]="true",h.focusable="false")),tg({icons:{main:Mh(x),mask:l?Mh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:_,transform:U(U({},In),i),symbol:o,title:f,maskId:d,titleId:g,extra:{attributes:h,styles:E,classes:C}})})}},sM={mixout:function(){return{icon:rM(iM)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=C_,n.nodeCallback=nM,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ie:r,s=n.callback,o=s===void 0?function(){}:s;return C_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,d=r.mask,c=r.maskId,f=r.extra;return new Promise(function(y,g){Promise.all([jh(i,a),d.iconName?jh(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var C=Vm(w,2),v=C[0],h=C[1];y([n,tg({icons:{main:v,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:c,title:s,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Qc(a);l.length>0&&(i.style=l);var u;return Xm(o)&&(u=rr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},oM={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Zc({type:"layer"},function(){$i("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(Xa(s)).join(" ")},children:o}]})}}}},aM={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,c=d===void 0?{}:d;return Zc({type:"counter",content:n},function(){return $i("beforeDOMElementCreation",{content:n,params:r}),UD({content:n.toString(),title:s,extra:{attributes:u,styles:c,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(Xa(a))}})})}}}},lM={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?In:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,c=d===void 0?{}:d,f=r.styles,y=f===void 0?{}:f;return Zc({type:"text",content:n},function(){return $i("beforeDOMElementCreation",{content:n,params:r}),y_({content:n,transform:U(U({},In),s),title:a,extra:{attributes:c,styles:y,classes:["".concat(W.cssPrefix,"-layers-text")].concat(Xa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(DS){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();a=d.width/u,l=d.height/u}return W.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,y_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},uM=new RegExp('"',"ug"),b_=[1105920,1112319];function cM(t){var e=t.replace(uM,""),n=kD(e,0),r=n>=b_[0]&&n<=b_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ah(i?e[0]:e),isSecondary:r||i}}function x_(t,e){var n="".concat(ZL).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=io(t.children),o=s.filter(function(x){return x.getAttribute(Rh)===e})[0],a=Yr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(iD),u=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var c=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Me:be,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ta[f][l[2].toLowerCase()]:sD[f][u],g=cM(c),w=g.value,C=g.isSecondary,v=l[0].startsWith("FontAwesome"),h=Zm(y,w),m=h;if(v){var E=ND(w);E.iconName&&E.prefix&&(h=E.iconName,y=E.prefix)}if(h&&!C&&(!o||o.getAttribute(Ym)!==y||o.getAttribute(qm)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var k=eM(),_=k.extra;_.attributes[Rh]=e,jh(h,y).then(function(x){var N=tg(U(U({},k),{},{icons:{main:x,mask:eg()},prefix:y,iconName:m,extra:_,watchable:!0})),T=Ie.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=N.map(function(O){return Za(O)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function dM(t){return Promise.all([x_(t,"::before"),x_(t,"::after")])}function fM(t){return t.parentNode!==document.head&&!~tD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function I_(t){if(dr)return new Promise(function(e,n){var r=io(t.querySelectorAll("*")).filter(fM).map(dM),i=ng.begin("searchPseudoElements");nk(),Promise.all(r).then(function(){i(),zh(),e()}).catch(function(){i(),zh(),n()})})}var hM={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=I_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ie:r;W.searchPseudoElements&&I_(i)}}},T_=!1,pM={mixout:function(){return{dom:{unwatch:function(){nk(),T_=!0}}}},hooks:function(){return{bootstrap:function(){S_(Lh("mutationObserverCallbacks",{}))},noAuto:function(){QD()},watch:function(n){var r=n.observeMutationsRoot;T_?zh():S_(Lh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},P_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},mM={mixout:function(){return{parse:{transform:function(n){return P_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=P_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},f={transform:"translate(".concat(o/2*-1," -256)")},y={outer:a,inner:c,path:f};return{tag:"g",attributes:U({},y.outer),children:[{tag:"g",attributes:U({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:U(U({},r.icon.attributes),y.path)}]}]}}}},ef={x:0,y:0,width:"100%",height:"100%"};function N_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function gM(t){return t.tag==="g"?t.children:[t]}var vM={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Jc(i.split(" ").map(function(o){return o.trim()})):eg();return s.prefix||(s.prefix=qr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,d=s.icon,c=o.width,f=o.icon,y=gD({transform:l,containerWidth:c,iconWidth:u}),g={tag:"rect",attributes:U(U({},ef),{},{fill:"white"})},w=d.children?{children:d.children.map(N_)}:{},C={tag:"g",attributes:U({},y.inner),children:[N_(U({tag:d.tag,attributes:U(U({},d.attributes),y.path)},w))]},v={tag:"g",attributes:U({},y.outer),children:[C]},h="mask-".concat(a||Ra()),m="clip-".concat(a||Ra()),E={tag:"mask",attributes:U(U({},ef),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:gM(f)},E]};return r.push(k,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},ef)}),{children:r,attributes:i}}}},yM={provides:function(e){var n=!1;Yr.matchMedia&&(n=Yr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:U(U({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=U(U({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:U(U({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:U(U({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:U(U({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:U(U({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:U(U({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_M={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},wM=[_D,sM,oM,aM,lM,hM,pM,mM,vM,yM,_M];OD(wM,{mixoutsTo:zt});zt.noAuto;zt.config;zt.library;zt.dom;var Uh=zt.parse;zt.findIconDefinition;zt.toHtml;var EM=zt.icon;zt.layer;zt.text;zt.counter;function R_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Cn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R_(Object(n),!0).forEach(function(r){gs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uc(t){"@babel/helpers - typeof";return uc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uc(t)}function gs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function SM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kM(t,e){if(t==null)return{};var n=SM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function $h(t){return CM(t)||bM(t)||xM(t)||IM()}function CM(t){if(Array.isArray(t))return Wh(t)}function bM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xM(t,e){if(t){if(typeof t=="string")return Wh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wh(t,e)}}function Wh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function IM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TM(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,d=t.spinReverse,c=t.pulse,f=t.fixedWidth,y=t.inverse,g=t.border,w=t.listItem,C=t.flip,v=t.size,h=t.rotation,m=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":f,"fa-inverse":y,"fa-border":g,"fa-li":w,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},gs(e,"fa-".concat(v),typeof v<"u"&&v!==null),gs(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),gs(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),gs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(k){return E[k]?k:null}).filter(function(k){return k})}function PM(t){return t=t-0,t===t}function ik(t){return PM(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var NM=["style"];function RM(t){return t.charAt(0).toUpperCase()+t.slice(1)}function AM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=ik(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[RM(i)]=s:e[i]=s,e},{})}function sk(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return sk(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.attrs.className=d,delete e.attributes.class;break;case"style":l.attrs.style=AM(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[ik(u)]=d}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=kM(n,NM);return i.attrs.style=Cn(Cn({},i.attrs.style),o),t.apply(void 0,[e.tag,Cn(Cn({},i.attrs),a)].concat($h(r)))}var ok=!1;try{ok=!0}catch{}function OM(){if(!ok&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function A_(t){if(t&&uc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Uh.icon)return Uh.icon(t);if(t===null)return null;if(t&&uc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function tf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?gs({},t,e):{}}var O_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},cn=Gt.forwardRef(function(t,e){var n=Cn(Cn({},O_),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,d=A_(r),c=tf("classes",[].concat($h(TM(n)),$h((o||"").split(" ")))),f=tf("transform",typeof n.transform=="string"?Uh.transform(n.transform):n.transform),y=tf("mask",A_(i)),g=EM(d,Cn(Cn(Cn(Cn({},c),f),y),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!g)return OM("Could not find icon",d),null;var w=g.abstract,C={ref:e};return Object.keys(n).forEach(function(v){O_.hasOwnProperty(v)||(C[v]=n[v])}),LM(w[0],C)});cn.displayName="FontAwesomeIcon";cn.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};var LM=sk.bind(null,Gt.createElement);const DM="_menu_18jmf_1",MM="_shrink_18jmf_63",nf={menu:DM,"shrink-menu":"_shrink-menu_18jmf_63",shrink:MM},ig=S.forwardRef(({setIsMenuExpanded:t},e)=>{const{width:n}=S.useContext(Xt),{disableToolbarButtons:r}=S.useContext(ni),[i,s]=S.useState(!1);S.useEffect(()=>{n>740?(s(!0),t(!0)):(s(!1),t(!1))},[n,t]);const o=()=>{s(d=>!d),t(d=>!d)},a=()=>{n<=740&&(s(!1),t(!1)),location.pathname.includes("/editor")||r("file","save","exit")},l=i?"":nf.shrink,u=i?"Zmniejsz menu":"Poszerz menu";return p.jsxs("nav",{className:`${nf.menu} ${i?"":nf["shrink-menu"]}`,ref:e,children:[p.jsxs(Ao,{className:`${l}`,title:u,onClick:o,children:[p.jsx(cn,{icon:Bm.faBars}),i&&p.jsx("span",{children:" Menu"})]}),p.jsxs(Ao,{to:"home",className:l,title:"Główna",onClick:a,children:[p.jsx(cn,{icon:NS.faHouse}),i&&p.jsx("span",{children:" Główna"})]}),p.jsxs(Ao,{to:"editor",className:l,title:"Edytor",onClick:a,children:[p.jsx(cn,{icon:PS.faPencil}),i&&p.jsx("span",{children:" Edytor"})]}),p.jsxs(Ao,{to:"/",replace:!0,className:l,title:"Wyjdź",onClick:a,children:[p.jsx(cn,{icon:TS.faRightFromBracket}),i&&p.jsx("span",{children:" Wyjdź"})]})]})});ig.displayName="Menu";ig.propTypes={setIsMenuExpanded:A.func};var ak={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="angle-right",r=320,i=512,s=[8250],o="f105",a="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faAngleRight=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(ak);const jM="_main_fjt9m_1",FM="_welcome_fjt9m_47",zM="_card_fjt9m_77",sg={main:jM,welcome:FM,card:zM},ou=({to:t,children:e})=>p.jsx(Pt,{to:t,className:sg.card,children:e});ou.propTypes={to:A.string,children:A.any};const Hh=({setMainHeader:t})=>(S.useEffect(()=>{t("Przydatne narzędzia")},[t]),p.jsxs("div",{className:sg.welcome,children:[p.jsxs(ou,{to:"/console/new",children:[p.jsx("h3",{children:"Najnowsze artykuły"}),p.jsx("p",{children:"Sprawdź najnowsze artykuły"}),p.jsx("p",{children:"Zarządzaj najnowszymi"})]}),p.jsxs(ou,{to:"/console/all",children:[p.jsx("h3",{children:"Wszystkie artykuły"}),p.jsx("p",{children:"Zarządzaj listą artykułów"}),p.jsx("p",{children:"Sprawdzaj dane artykułów"})]}),p.jsxs(ou,{to:"/console/editor",children:[p.jsx("h3",{children:"Edytor"}),p.jsx("p",{children:"Twórz nowe artykuły"}),p.jsx("p",{children:"Edytuj istniejące artykuły"})]})]}));Hh.propTypes={setMainHeader:A.func};const lk=({setMainHeader:t})=>(S.useEffect(()=>{t("Nowe artykuły")},[t]),p.jsxs("div",{children:[p.jsx("p",{children:"Zmień kolejność artykułów"}),p.jsx("p",{children:"Zmień liczbę nowych artykyłów"}),p.jsx("p",{children:"Zarządzaj artykułami"})]}));lk.propTypes={setMainHeader:A.func};const uk=({setMainHeader:t})=>(S.useEffect(()=>{t("Wszystkie artykuły")},[t]),p.jsx("div",{children:"Lista wszystkich artykuły"}));uk.propTypes={setMainHeader:A.func};var ck={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="minimize",r=512,i=512,s=["compress-arrows-alt"],o="f78c",a="M456 224H312c-13.3 0-24-10.7-24-24V56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L442.3 5.7C446 2 450.9 0 456 0s10 2 13.7 5.7l36.7 36.7C510 46 512 50.9 512 56s-2 10-5.7 13.7L433 143l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8zm0 64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-40 40 73.4 73.4c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C466 510 461.1 512 456 512s-10-2-13.7-5.7L369 433l-40 40c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V312c0-13.3 10.7-24 24-24H456zm-256 0c13.3 0 24 10.7 24 24V456c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L69.7 506.3C66 510 61.1 512 56 512s-10-2-13.7-5.7L5.7 469.7C2 466 0 461.1 0 456s2-10 5.7-13.7L79 369 39 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8H200zM56 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l40-40L5.7 69.7C2 66 0 61.1 0 56s2-10 5.7-13.7L42.3 5.7C46 2 50.9 0 56 0s10 2 13.7 5.7L143 79l40-40c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2V200c0 13.3-10.7 24-24 24H56z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faMinimize=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(ck);var dk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="maximize",r=512,i=512,s=["expand-arrows-alt"],o="f31e",a="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faMaximize=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(dk);var Bh={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="arrow-right",r=448,i=512,s=[8594],o="f061",a="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faArrowRight=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(Bh);const UM="_dropdown_iota5_1",$M="_menu_iota5_13",WM="_slideFromTop_iota5_1",HM="_slideFromLeft_iota5_1",BM="_active_iota5_63",VM="_option_iota5_71",on={dropdown:UM,menu:$M,"menu-horizontal":"_menu-horizontal_iota5_13",slideFromTop:WM,slideFromLeft:HM,active:BM,option:VM,"option-horizontral":"_option-horizontral_iota5_145","option-disabled":"_option-disabled_iota5_187"},au=({title:t,className:e,children:n})=>{const[r,i]=S.useState(!1),s=S.useRef(null),[o,a]=S.useState(on.dropdown);S.useEffect(()=>{a(r?`${on.dropdown} ${on.active}`:`${on.dropdown}`)},[r]),S.useEffect(()=>{function d(c){s.current&&!s.current.contains(c.target)&&i(!1)}return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[i]);const l=()=>{i(!0)},u=Gt.Children.map(n,d=>Gt.isValidElement(d)?Gt.cloneElement(d,{isMenuShown:r,setIsMenuShown:i}):d);return p.jsxs("div",{className:`${o} ${e||""}`,onClick:l,ref:s,children:[p.jsx("div",{children:t}),r&&p.jsx("div",{className:on.menu,children:u})]})};au.propTypes={title:A.any,className:A.string,children:A.any};const Vh=({title:t,id:e,disabled:n,isMenuShown:r,setIsMenuShown:i,children:s})=>{const[o,a]=S.useState(!1),l=()=>{a(!0)},u=()=>{a(!1)},d=()=>{a(f=>!f)},c=Gt.Children.map(s,f=>Gt.isValidElement(f)?Gt.cloneElement(f,{isMenuShown:r,setIsMenuShown:i}):f);return p.jsxs("div",{id:e,className:`${on["option-horizontral"]} ${on.option} ${n?on["option-disabled"]:""}`,onTouchEnd:d,onMouseOver:l,onMouseOut:u,children:[p.jsx("div",{children:t}),o&&p.jsx("div",{className:`${on.menu} ${on["menu-horizontal"]}`,children:c})]})};Vh.propTypes={title:A.any,id:A.string,isMenuShown:A.bool,setIsMenuShown:A.func,disabled:A.bool,children:A.any};const fk=({id:t,onClick:e,disabled:n,setIsMenuShown:r,children:i})=>{const s=S.useRef(null);S.useEffect(()=>{n&&s.current.setAttribute("disabled","")},[n]);const o=l=>{r(!1),e&&e(l)},a=l=>{r(!1),e&&e(l)};return p.jsx("button",{type:"button",ref:s,id:t,className:on.option,onMouseUp:o,onTouchEnd:a,children:i})};fk.propTypes={id:A.string,setIsMenuShown:A.func,onClick:A.func,disabled:A.bool,children:A.any};const GM="_modal_60ted_1",YM="_close_60ted_91",qM="_backdrop_60ted_99",rf={modal:GM,close:YM,backdrop:qM},Wi=({title:t,setShowModal:e,children:n})=>{const r=()=>{e(!1)};return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:rf.backdrop,onClick:r}),p.jsxs("div",{className:rf.modal,children:[p.jsx("h2",{children:t}),n,p.jsx("div",{className:rf.close,onClick:r,children:p.jsx("svg",{className:"icon icon-circle_xmark",children:p.jsx("use",{xlinkHref:`${xn}#icon-circle_xmark`})})})]})]})};Wi.propTypes={title:A.string,setShowModal:A.func,children:A.any};const Vt=S.forwardRef(({type:t,placeholder:e,value:n,disabled:r,required:i,className:s,style:o,id:a,minLength:l,onInput:u,onFocus:d,onBlur:c,onChange:f,validateInput:y,setIsFormInvalid:g},w)=>{const[C,v]=S.useState(!1),h=S.useRef(w);S.useLayoutEffect(()=>{if(!C){h.current.classList.remove(Jl.invalid);return}h.current.classList.add(Jl.invalid)},[C]),S.useEffect(()=>{if(C){h.current.setCustomValidity("Poprawnie wypełnij to pole");return}h.current.setCustomValidity(""),g&&g(!1)},[C,g]);const m=_=>{v(!1),f&&f(_)},E=_=>{d&&d(_)},k=_=>{y&&v(!y(n)),c&&c(_)};return p.jsx("input",{type:t||"text",ref:h,id:a,placeholder:e,value:n,disabled:r,required:i,className:`${Jl.input} ${s||""}`,style:o||{},minLength:l||"",onChange:m,onFocus:E,onBlur:k,onInput:u||(()=>{})})});Vt.displayName=Vt;Vt.propTypes={type:A.string,placeholder:A.string,value:A.string,disabled:A.bool,required:A.bool,className:A.string,style:A.any,id:A.string,minLength:A.number,onInput:A.func,onFocus:A.func,onBlur:A.func,onChange:A.func,validateInput:A.func,setIsFormInvalid:A.func};const KM="_toolbar_1hbz0_1",QM="_form_1hbz0_47",XM="_select_1hbz0_73",JM="_option_1hbz0_119",ZM="_highlight_1hbz0_183",St={toolbar:KM,"toolbar-fullscreen":"_toolbar-fullscreen_1hbz0_37",form:QM,"modal-buttons":"_modal-buttons_1hbz0_55",select:XM,option:JM,highlight:ZM},ej=t=>/\/wiki\/+[\w-]{2,}/i.test(t.trim().toLowerCase()),tj=t=>t.trim().length>=3,nj={address:null,content:null,name:null,author:null},L_={show:!1,title:"",message:""},hk=({setShowSave:t})=>{const{currentUser:e}=ei(),{pushData:n,checkObject:r}=Kc(),{articleContent:i,articleAddress:s,articleName:o}=S.useContext(ni),[a,l]=S.useState(s||""),[u,d]=S.useState(o||""),[c,f]=S.useState(L_),[y,g]=S.useState(!1),[w,C]=S.useState(!1),v=x=>{f({...L_,...x})};S.useEffect(()=>{y&&(async(N=!1)=>{let T=nj;if(T.address=a,T.name=u,T.content=i,e.displayName?T.author=e.displayName:T.author=e.email.split("@")[0],r(T))try{let O=await n(T,N);if(!r(O))throw new Error("Wystąpił niespodziewany błąd.");if(O.found)v({show:!0,cancel:!0,title:"Potwierdź nadpisanie",message:"Artykuł pod tym adresem już istnieje. Czy na pewno chcesz zapisać zmiany?"});else{if(!O.isSuccess)throw new Error(O.message);v({show:!0,title:"Zapisano zmiany",message:O.message})}}catch(O){console.error(O.message),v({show:!0,title:"Wystąpił błąd",message:O.message})}g(!1)})(w)},[y,w]);const h=x=>{if(x.target.value.length<7){l("/wiki/");return}l(x.target.value)},m=x=>{d(x.target.value)},E=()=>{v({show:!1}),t(!1)},k=x=>{x?(C(!0),g(!0)):(v({show:!1}),t(!1))},_=x=>{x.preventDefault(),g(!0)};return p.jsxs(p.Fragment,{children:[!c.show&&p.jsxs(Wi,{title:"Zapisywanie artykułu",setShowModal:t,children:[p.jsx("span",{children:"Zapisz wszystkie zmiany lub anuluj"}),p.jsxs("form",{onSubmit:_,onReset:E,className:St.form,children:[p.jsx(Vt,{type:"text",id:"address",placeholder:"Adres do artykułu",value:a,minLength:7,onChange:h,validateInput:ej,required:!0}),p.jsx(Vt,{type:"text",id:"name",placeholder:"Nazwa artykułu",value:u,minLength:3,onChange:m,validateInput:tj,required:!0}),p.jsxs("div",{className:St["modal-buttons"],children:[p.jsx(Lt,{type:"submit",children:"Zapisz"}),p.jsx(Lt,{type:"reset",highlighted:!1,children:"Anuluj"})]})]})]}),c.show&&p.jsxs(Wi,{title:c.title,setShowModal:E,children:[p.jsx("span",{children:c.message}),p.jsxs("div",{className:St["modal-buttons"],children:[p.jsx(Lt,{className:St["modal-button"],onClick:k.bind(void 0,!!c.cancel),children:c.cancel?"Zapisz":"Ok"}),c.cancel&&p.jsx(Lt,{className:St["modal-button"],highlighted:!1,onClick:E,children:"Anuluj"})]})]})]})};hk.propTypes={setShowSave:A.func};const pk=({setShowOpen:t})=>{const{data:e,response:n}=Kc(),[r,i]=S.useState(null),{editorContent:s,setArticleContent:o,setArticleAddress:a,setArticleName:l,setEditorContent:u}=S.useContext(ni),d=()=>{t(!1)},c=y=>{y.preventDefault(),n.isSuccess?e.forEach(g=>{g.address===r&&(o(g.content),a(g.address),l(g.name))}):console.error("Can't fetch article data from the database."),d(),s!=="edit"&&u("edit")},f=y=>{i(y.target.value)};return p.jsxs(Wi,{title:"Otwórz artykuł",setShowModal:t,children:[p.jsx("span",{children:"Edytuj istniejący artykuł"}),p.jsxs("form",{onSubmit:c,onReset:d,className:St.form,children:[p.jsxs("select",{className:St.select,name:"address",onChange:f,required:!0,defaultValue:"",children:[p.jsx("option",{value:"","aria-selected":!0,"aria-disabled":!0,disabled:!0,children:"Wybierz artykuł"}),e&&e.map((y,g)=>p.jsx("option",{value:y.address,children:y.name},g))]}),p.jsxs("div",{className:St["modal-buttons"],children:[p.jsx(Lt,{type:"submit",children:"Otwórz"}),p.jsx(Lt,{type:"reset",highlighted:!1,children:"Anuluj"})]})]})]})};pk.propTypes={setShowOpen:A.func};const rj=t=>{if(navigator.clipboard){navigator.clipboard.writeText(t);return}const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)},mk=({setEditorStyles:t,setEditorContent:e})=>{const{width:n,fullscreen:r,setFullscreen:i}=S.useContext(Xt),{toolbarButtons:s,articleContent:o,resetArticleInfo:a,enableToolbarButtons:l,disableToolbarButtons:u,setArticleContent:d}=S.useContext(ni),[c,f]=S.useState(!1),[y,g]=S.useState(!1),[w,C]=S.useState({}),v=()=>{r?(i(!1),C({}),t({})):(i(!0),C({borderTopLeftRadius:"unset",borderTopRightRadius:"unset"}),t({position:"fixed",inset:0,zIndex:50,borderRadius:"unset"}))},h=j=>{j.currentTarget.id==="exit"?(e("home"),u("file",["exit","save"]),u("edit",["copy","newLine","cleanCode"])):j.currentTarget.id==="edit"?(a(),e("edit"),l("file",["exit","save"]),l("edit",["copy","newLine","cleanCode"])):j.currentTarget.id==="save"?f(!0):j.currentTarget.id==="open"?g(!0):(e(j.currentTarget.id),l("file",["exit","save"]),l("edit",["copy","newLine","cleanCode"]))},m=()=>{d(j=>(j+="<br/>",console.log(j),j))},E=()=>{rj(o)},k=()=>{d(""),u("edit",["copy","cleanCode"])},_=j=>j.map((ae,de)=>p.jsx(fk,{id:ae.id,onClick:ae.onClick,disabled:ae.disabled,children:ae.children},de)),x=[{id:"edit",onClick:h,disabled:s.file.new.disabled,children:"Nowy"},{id:"open",onClick:h,disabled:s.file.open.disabled,children:"Otwórz"},{id:"save",onClick:h,disabled:s.file.save.disabled,children:"Zapisz"},{id:"exit",onClick:h,disabled:s.file.exit.disabled,children:"Wyjdź"}],N=[{id:"newLine",onClick:m,disabled:s.edit.newLine.disabled,children:"Wstaw nową linię"},{id:"copy",onClick:E,disabled:s.edit.copy.disabled,children:"Skopiuj kod"},{id:"cleanCode",onClick:k,disabled:s.edit.cleanCode.disabled,children:"Wyczyść zawartość"}],T=_(x),O=_(N);return p.jsxs(p.Fragment,{children:[y&&p.jsx(pk,{setShowOpen:g}),c&&p.jsx(hk,{setShowSave:f}),p.jsxs("nav",{className:St.toolbar,style:w,children:[n>800?p.jsxs(p.Fragment,{children:[p.jsx(au,{title:"Plik",className:St.option,children:T}),p.jsx(au,{title:"Edytuj",className:St.option,children:O})]}):p.jsxs(au,{title:p.jsx(cn,{icon:Bm.faBars,className:St.option}),children:[p.jsx(Vh,{title:p.jsxs(p.Fragment,{children:["Plik"," ",p.jsx(cn,{icon:Bh.faArrowRight})]}),children:T}),p.jsx(Vh,{title:p.jsxs(p.Fragment,{children:["Edytuj"," ",p.jsx(cn,{icon:Bh.faArrowRight})]}),children:O})]}),p.jsx("button",{type:"button",className:`${St["toolbar-fullscreen"]} ${St.option}`,title:r?"Zamknij pełny ekran":"Pełny ekran",onClick:v,children:p.jsx(cn,{icon:r?ck.faMinimize:dk.faMaximize})})]})]})};mk.propTypes={setEditorStyles:A.func,setEditorContent:A.func};const ij="_welcome_1jqsi_1",sj="_option_1jqsi_33",oj="_recent_1jqsi_41",oi={welcome:ij,option:sj,recent:oj},aj=()=>p.jsxs("div",{className:oi.welcome,children:[p.jsxs("div",{children:[p.jsx("h3",{children:"Witaj! Zacznij edytować artykuły wybierając jedną z opcji"}),p.jsx("h4",{children:"Edytuj"}),p.jsx("button",{type:"button",className:oi.option,children:"Nowy..."}),p.jsx("button",{type:"button",className:oi.option,children:"Otwórz..."})]}),p.jsxs("div",{className:oi.recent,children:[p.jsx("h4",{children:"Najnowsze"}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx("button",{type:"button",className:oi.option,children:"Artykuł 1"})}),p.jsx("li",{children:p.jsx("button",{type:"button",className:oi.option,children:"Artykuł 2"})}),p.jsx("li",{children:p.jsx("button",{type:"button",className:oi.option,children:"Artykuł 3"})})]})]})]});var gk={exports:{}};(function(t){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function h(m){return m instanceof l?new l(m.type,h(m.content),m.alias):Array.isArray(m)?m.map(h):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++s}),h.__id},clone:function h(m,E){E=E||{};var k,_;switch(a.util.type(m)){case"Object":if(_=a.util.objId(m),E[_])return E[_];k={},E[_]=k;for(var x in m)m.hasOwnProperty(x)&&(k[x]=h(m[x],E));return k;case"Array":return _=a.util.objId(m),E[_]?E[_]:(k=[],E[_]=k,m.forEach(function(N,T){k[T]=h(N,E)}),k);default:return m}},getLanguage:function(h){for(;h;){var m=i.exec(h.className);if(m)return m[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,m){h.className=h.className.replace(RegExp(i,"gi"),""),h.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(k){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(h){var m=document.getElementsByTagName("script");for(var E in m)if(m[E].src==h)return m[E]}return null}},isActive:function(h,m,E){for(var k="no-"+m;h;){var _=h.classList;if(_.contains(m))return!0;if(_.contains(k))return!1;h=h.parentElement}return!!E}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(h,m){var E=a.util.clone(a.languages[h]);for(var k in m)E[k]=m[k];return E},insertBefore:function(h,m,E,k){k=k||a.languages;var _=k[h],x={};for(var N in _)if(_.hasOwnProperty(N)){if(N==m)for(var T in E)E.hasOwnProperty(T)&&(x[T]=E[T]);E.hasOwnProperty(N)||(x[N]=_[N])}var O=k[h];return k[h]=x,a.languages.DFS(a.languages,function(j,ae){ae===O&&j!=h&&(this[j]=x)}),x},DFS:function h(m,E,k,_){_=_||{};var x=a.util.objId;for(var N in m)if(m.hasOwnProperty(N)){E.call(m,N,m[N],k||N);var T=m[N],O=a.util.type(T);O==="Object"&&!_[x(T)]?(_[x(T)]=!0,h(T,E,null,_)):O==="Array"&&!_[x(T)]&&(_[x(T)]=!0,h(T,E,N,_))}}},plugins:{},highlightAll:function(h,m){a.highlightAllUnder(document,h,m)},highlightAllUnder:function(h,m,E){var k={callback:E,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),a.hooks.run("before-all-elements-highlight",k);for(var _=0,x;x=k.elements[_++];)a.highlightElement(x,m===!0,k.callback)},highlightElement:function(h,m,E){var k=a.util.getLanguage(h),_=a.languages[k];a.util.setLanguage(h,k);var x=h.parentElement;x&&x.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(x,k);var N=h.textContent,T={element:h,language:k,grammar:_,code:N};function O(ae){T.highlightedCode=ae,a.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,a.hooks.run("after-highlight",T),a.hooks.run("complete",T),E&&E.call(T.element)}if(a.hooks.run("before-sanity-check",T),x=T.element.parentElement,x&&x.nodeName.toLowerCase()==="pre"&&!x.hasAttribute("tabindex")&&x.setAttribute("tabindex","0"),!T.code){a.hooks.run("complete",T),E&&E.call(T.element);return}if(a.hooks.run("before-highlight",T),!T.grammar){O(a.util.encode(T.code));return}if(m&&r.Worker){var j=new Worker(a.filename);j.onmessage=function(ae){O(ae.data)},j.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))}else O(a.highlight(T.code,T.grammar,T.language))},highlight:function(h,m,E){var k={code:h,grammar:m,language:E};if(a.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=a.tokenize(k.code,k.grammar),a.hooks.run("after-tokenize",k),l.stringify(a.util.encode(k.tokens),k.language)},tokenize:function(h,m){var E=m.rest;if(E){for(var k in E)m[k]=E[k];delete m.rest}var _=new c;return f(_,_.head,h),d(h,_,m,_.head,0),g(_)},hooks:{all:{},add:function(h,m){var E=a.hooks.all;E[h]=E[h]||[],E[h].push(m)},run:function(h,m){var E=a.hooks.all[h];if(!(!E||!E.length))for(var k=0,_;_=E[k++];)_(m)}},Token:l};r.Prism=a;function l(h,m,E,k){this.type=h,this.content=m,this.alias=E,this.length=(k||"").length|0}l.stringify=function h(m,E){if(typeof m=="string")return m;if(Array.isArray(m)){var k="";return m.forEach(function(O){k+=h(O,E)}),k}var _={type:m.type,content:h(m.content,E),tag:"span",classes:["token",m.type],attributes:{},language:E},x=m.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(_.classes,x):_.classes.push(x)),a.hooks.run("wrap",_);var N="";for(var T in _.attributes)N+=" "+T+'="'+(_.attributes[T]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+N+">"+_.content+"</"+_.tag+">"};function u(h,m,E,k){h.lastIndex=m;var _=h.exec(E);if(_&&k&&_[1]){var x=_[1].length;_.index+=x,_[0]=_[0].slice(x)}return _}function d(h,m,E,k,_,x){for(var N in E)if(!(!E.hasOwnProperty(N)||!E[N])){var T=E[N];T=Array.isArray(T)?T:[T];for(var O=0;O<T.length;++O){if(x&&x.cause==N+","+O)return;var j=T[O],ae=j.inside,de=!!j.lookbehind,Pe=!!j.greedy,yn=j.alias;if(Pe&&!j.pattern.global){var _n=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,_n+"g")}for(var ge=j.pattern||j,D=k.next,H=_;D!==m.tail&&!(x&&H>=x.reach);H+=D.value.length,D=D.next){var V=D.value;if(m.length>h.length)return;if(!(V instanceof l)){var se=1,ne;if(Pe){if(ne=u(ge,H,h,de),!ne||ne.index>=h.length)break;var $e=ne.index,Ut=ne.index+ne[0].length,ye=H;for(ye+=D.value.length;$e>=ye;)D=D.next,ye+=D.value.length;if(ye-=D.value.length,H=ye,D.value instanceof l)continue;for(var tt=D;tt!==m.tail&&(ye<Ut||typeof tt.value=="string");tt=tt.next)se++,ye+=tt.value.length;se--,V=h.slice(H,ye),ne.index-=H}else if(ne=u(ge,0,V,de),!ne)continue;var $e=ne.index,Jt=ne[0],ri=V.slice(0,$e),el=V.slice($e+Jt.length),so=H+V.length;x&&so>x.reach&&(x.reach=so);var Yi=D.prev;ri&&(Yi=f(m,Yi,ri),H+=ri.length),y(m,Yi,se);var nt=new l(N,ae?a.tokenize(Jt,ae):Jt,yn,Jt);if(D=f(m,Yi,nt),el&&f(m,D,el),se>1){var wn={cause:N+","+O,reach:so};d(h,m,E,D.prev,H,wn),x&&wn.reach>x.reach&&(x.reach=wn.reach)}}}}}}function c(){var h={value:null,prev:null,next:null},m={value:null,prev:h,next:null};h.next=m,this.head=h,this.tail=m,this.length=0}function f(h,m,E){var k=m.next,_={value:E,prev:m,next:k};return m.next=_,k.prev=_,h.length++,_}function y(h,m,E){for(var k=m.next,_=0;_<E&&k!==h.tail;_++)k=k.next;m.next=k,k.prev=m,h.length-=_}function g(h){for(var m=[],E=h.head.next;E!==h.tail;)m.push(E.value),E=E.next;return m}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(h){var m=JSON.parse(h.data),E=m.language,k=m.code,_=m.immediateClose;r.postMessage(a.highlight(k,a.languages[E],E)),_&&r.close()},!1)),a;var w=a.util.currentScript();w&&(a.filename=w.src,w.hasAttribute("data-manual")&&(a.manual=!0));function C(){a.manual||a.highlightAll()}if(!a.manual){var v=document.readyState;v==="loading"||v==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",C):window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,16)}return a}(e);t.exports&&(t.exports=n),typeof yg<"u"&&(yg.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(w,C){return"✖ Error "+w+" while fetching file: "+C},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",u="loaded",d="failed",c="pre[data-src]:not(["+a+'="'+u+'"]):not(['+a+'="'+l+'"])';function f(w,C,v){var h=new XMLHttpRequest;h.open("GET",w,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?C(h.responseText):h.status>=400?v(i(h.status,h.statusText)):v(s))},h.send(null)}function y(w){var C=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(C){var v=Number(C[1]),h=C[2],m=C[3];return h?m?[v,Number(m)]:[v,void 0]:[v,v]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+c}),n.hooks.add("before-sanity-check",function(w){var C=w.element;if(C.matches(c)){w.code="",C.setAttribute(a,l);var v=C.appendChild(document.createElement("CODE"));v.textContent=r;var h=C.getAttribute("data-src"),m=w.language;if(m==="none"){var E=(/\.(\w+)$/.exec(h)||[,"none"])[1];m=o[E]||E}n.util.setLanguage(v,m),n.util.setLanguage(C,m);var k=n.plugins.autoloader;k&&k.loadLanguages(m),f(h,function(_){C.setAttribute(a,u);var x=y(C.getAttribute("data-range"));if(x){var N=_.split(/\r\n?|\n/g),T=x[0],O=x[1]==null?N.length:x[1];T<0&&(T+=N.length),T=Math.max(0,Math.min(T-1,N.length)),O<0&&(O+=N.length),O=Math.max(0,Math.min(O,N.length)),_=N.slice(T,O).join(`
`),C.hasAttribute("data-start")||C.setAttribute("data-start",String(T+1))}v.textContent=_,n.highlightElement(v)},function(_){C.setAttribute(a,d),v.textContent=_})}}),n.plugins.fileHighlight={highlight:function(C){for(var v=(C||document).querySelectorAll(c),h=0,m;m=v[h++];)n.highlightElement(m)}};var g=!1;n.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(gk);var lj=gk.exports;const D_=cc(lj),uj="_code_1ghgu_1",cj="_content_1ghgu_59",sf={code:uj,"line-numbers":"_line-numbers_1ghgu_25",content:cj};String.prototype.lines=function(){return this.split(`
`)};String.prototype.lineCount=function(){return this.lines().length};const dj=()=>{const{articleContent:t,setArticleContent:e,enableToolbarButtons:n,disableToolbarButtons:r}=S.useContext(ni),i=S.useRef(null),[s,o]=S.useState(1),a=S.useCallback(d=>{o(d.lineCount()),d.length>0?n("edit",["copy","cleanCode"]):r("edit",["copy","cleanCode"]),d[d.length-1]==`
`&&(d+=" "),i.current.innerHTML=D_.highlight(d.replace(new RegExp("&","g"),"&").replace(new RegExp("<","g"),"<"),D_.languages.html,"html")},[r,n]);S.useEffect(()=>{a(t)},[t,a]);const l=d=>{let c=d.target.value;a(c),e(c)},u=d=>{if(d.key=="Tab"){let c=d.target.value;const f=d.target;d.preventDefault();let y=c.slice(0,f.selectionStart),g=c.slice(f.selectionEnd,f.value.length),w=f.selectionEnd+1;f.value=y+"	"+g,f.selectionStart=w,f.selectionEnd=w}};return p.jsxs("div",{className:sf.code,children:[p.jsx("div",{className:sf["line-numbers"],children:[...Array(s)].map((d,c)=>p.jsx("span",{},c))}),p.jsxs("div",{className:sf.content,children:[p.jsx("textarea",{onInput:l,onKeyDown:u,spellCheck:!1,value:t}),p.jsx("pre",{children:p.jsx("code",{className:"language-html",ref:i})})]})]})},fj="_editor_27boe_1",M_={editor:fj,"workspace-container":"_workspace-container_27boe_31"},vk=({setMainHeader:t})=>{const{editorContent:e,setEditorContent:n}=S.useContext(ni),[r,i]=S.useState({});S.useEffect(()=>{t("Edytor artykułów")},[t]);let s="";return e==="home"?s=p.jsx(aj,{}):e==="edit"?s=p.jsx(dj,{}):s="Wystąpił błąd",p.jsxs("div",{className:M_.editor,style:r,children:[p.jsx(mk,{setEditorStyles:i,setEditorContent:n}),p.jsx("div",{className:M_["workspace-container"],children:s})]})};vk.propTypes={setMainHeader:A.func};const hj=()=>{const{articleName:t}=S.useContext(ni),[e,n]=S.useState("");return p.jsxs("main",{className:sg.main,children:[p.jsx("header",{children:p.jsxs("h2",{children:[e,t&&" ",t&&p.jsx(cn,{icon:ak.faAngleRight}),t&&" ",t&&t]})}),p.jsx("section",{children:p.jsxs(EI,{children:[p.jsx(Ye,{path:"/home",element:p.jsx(Hh,{setMainHeader:n})}),p.jsx(Ye,{path:"/new",element:p.jsx(lk,{setMainHeader:n})}),p.jsx(Ye,{path:"/all",element:p.jsx(uk,{setMainHeader:n})}),p.jsx(Ye,{path:"/editor",element:p.jsx(vk,{setMainHeader:n})}),p.jsx(Ye,{path:"*",element:p.jsx(Hh,{setMainHeader:n})})]})})]})},pj={file:{main:{disabled:!1},exit:{disabled:!0},new:{disabled:!1},open:{disabled:!1},save:{disabled:!0}},edit:{newLine:{disabled:!0},copy:{disabled:!0},cleanCode:{disabled:!0}}},mj=(t,e)=>{let n=t;return e.type==="DISABLE"&&e.mainButton&&Array.isArray(e.subButtons)&&e.subButtons.forEach(r=>n[e.mainButton][r].disabled=!0),e.type==="ENABLE"&&e.mainButton&&Array.isArray(e.subButtons)&&e.subButtons.forEach(r=>n[e.mainButton][r].disabled=!1),n},yk=({children:t})=>{const e=Rn(),n=sessionStorage.getItem("editorContent")?sessionStorage.getItem("editorContent"):"home",r=sessionStorage.getItem("articleContent")?sessionStorage.getItem("articleContent"):"",i=sessionStorage.getItem("articleAddress")?sessionStorage.getItem("articleAddress"):"",s=sessionStorage.getItem("articleName")?sessionStorage.getItem("articleName"):"",[o,a]=S.useState(n),[l,u]=S.useState(r),[d,c]=S.useState(i),[f,y]=S.useState(s),[g,w]=S.useReducer(mj,pj),C=(E,k)=>{w({type:"DISABLE",mainButton:E,subButtons:k})},v=(E,k)=>{w({type:"ENABLE",mainButton:E,subButtons:k})},m={editorContent:o,articleContent:l,articleAddress:d,articleName:f,toolbarButtons:g,setEditorContent:a,setArticleContent:u,setArticleAddress:c,setArticleName:y,resetArticleInfo:()=>{u(""),c(""),y("")},disableToolbarButtons:C,enableToolbarButtons:v};return S.useEffect(()=>{e.pathname.includes("/editor")&&o==="edit"?(sessionStorage.setItem("editorContent",o),v("file",["exit","save"]),v("edit",["newLine"])):(C("file",["exit","save"]),C("edit",["newLine"]),sessionStorage.removeItem("editorContent"),a("home"))},[o,e.pathname]),S.useEffect(()=>{e.pathname.includes("/editor")&&o==="edit"?(sessionStorage.setItem("articleContent",l),sessionStorage.setItem("articleAddress",d),sessionStorage.setItem("articleName",f)):(sessionStorage.removeItem("articleContent"),u(""),sessionStorage.removeItem("articleAddress"),c(""),sessionStorage.removeItem("articleName"),y(""))},[l,d,f,o,e.pathname]),p.jsx(ni.Provider,{value:m,children:t})};yk.propTypes={children:A.any};const gj="_editor_1jf8s_1",j_={editor:gj,"shrink-menu":"_shrink-menu_1jf8s_55"},vj=()=>{const t=S.useRef(null),{width:e}=S.useContext(Xt),[n,r]=S.useState({}),[i,s]=S.useState(!1);return S.useEffect(()=>{const o=t.current.clientWidth;e<=740&&!i&&r({width:o,height:"100vh"})},[e,i]),p.jsx(p.Fragment,{children:p.jsx(yk,{children:p.jsxs("div",{className:`${i?"":j_["shrink-menu"]} ${j_.editor}`,children:[e<=740&&p.jsx("div",{style:n}),p.jsx(ig,{ref:t,setIsMenuExpanded:s}),p.jsx(hj,{})]})})})},yj=()=>p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx(za,{}),p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 404"})}),p.jsxs("div",{children:[p.jsx("p",{children:"Nie znaleziono strony."}),p.jsx(Br,{to:"/",children:"Strona główna"})]})]})]}),p.jsx(cr,{})]}),_j=()=>p.jsxs(p.Fragment,{children:[p.jsxs("main",{children:[p.jsx(za,{to:"/",text:"Wróć na stronę główną"}),p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 403"})}),p.jsxs("div",{children:[p.jsx("p",{children:"Nie masz dostępu do tej strony."}),p.jsx(Br,{to:"/logowanie",children:"Zaloguj się"})]})]})]}),p.jsx(cr,{})]}),wj="_container_17hnl_1",Ej="_form_17hnl_13",Xe={container:wj,form:Ej,"modal-button":"_modal-button_17hnl_77"},F_={show:!1,title:"",message:""},Sj=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,kj=t=>t.trim()!==""&&t.trim().length>=3,Cj=t=>Sj.test(t.toLowerCase())&&t.toLowerCase().trim().length>=3,bj=()=>{const{uid:t,loginWithEmail:e}=ei(),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(F_),[l,u]=S.useState(!0),d=h=>{r(h.target.value)},c=h=>{s(h.target.value)},f=()=>{r(""),s(""),u(!1)},y=h=>{if(h.preventDefault(),l){a({show:!0,title:"Wypełnij formularz",message:"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza."});return}f(),e(n,i).then(()=>{a({show:!0,title:"Zalogowano",message:"Logowanie zakończyło się sukcesem.",redirect:"/"})}).catch(m=>{let E={show:!0,title:"Wystąpił błąd",message:"Serwis w tej chwili jest niedostępny. Spróbuj ponownie później"};m.message==="auth/invalid-credential"&&(E.message="Podano błędny e-mail lub hasło"),a(E),console.log(m)})},g=()=>{a(F_)},w=p.jsxs("form",{onSubmit:y,className:Xe.form,children:[p.jsxs("label",{children:[p.jsxs("p",{children:["E-mail ",p.jsx("span",{className:Xe.asterisk,children:"*"})]}),p.jsx(Vt,{type:"email",id:"email",value:n,minLength:3,onInput:d,validateInput:Cj,setIsFormInvalid:u,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Hasło ",p.jsx("span",{className:Xe.asterisk,children:"*"})]}),p.jsx(Vt,{type:"password",id:"password",value:i,minLength:3,onInput:c,validateInput:kj,setIsFormInvalid:u,required:!0})]}),p.jsx(Lt,{type:"submit",children:"Zaloguj się"}),p.jsx("p",{children:p.jsx(Pt,{to:"/resetowanie-hasla",children:"Resetuj hasło"})}),p.jsxs("p",{children:["Nie masz jeszcze konta?"," ",p.jsx(Pt,{to:"/rejestracja",children:"Zapisz się"})]})]}),C=t?"Jesteś już zalogowany":"Zaloguj się",v=t?"Wyloguj się i zaloguj na inne konto lub przejdź na inną stronę":"Wypełnij formularz logowania";return p.jsxs(p.Fragment,{children:[p.jsxs("main",{className:Xe.container,children:[p.jsxs("section",{className:"section",children:[p.jsx("h1",{children:C}),p.jsx("h2",{children:v}),t?p.jsx("div",{children:p.jsx(Br,{to:"/wylogowanie",children:"Wyloguj się"})}):w]}),o.show&&p.jsxs(Wi,{title:o.title,setShowModal:g,children:[p.jsx("p",{children:o.message}),o.redirect?p.jsx(Br,{to:o.redirect,className:Xe["modal-button"],onClick:g,children:"Ok"}):p.jsx(Lt,{className:Xe["modal-button"],onClick:g,children:"Ok"})]})]}),p.jsx(cr,{})]})},z_={show:!1,title:"",message:""},xj=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,of=t=>t.trim()!==""&&t.trim().length>=3,Ij=t=>xj.test(t.toLowerCase())&&t.toLowerCase().trim().length>=3,Tj=()=>{const{createUser:t}=ei(),e=Fa(),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(""),[d,c]=S.useState(z_),[f,y]=S.useState(!1),[g,w]=S.useState(!0);S.useEffect(()=>{if(o===l){y(!0);return}y(!1)},[o,l]);const C=x=>{r(x.target.value)},v=x=>{s(x.target.value)},h=x=>{a(x.target.value)},m=x=>{u(x.target.value)},E=()=>{r(""),s(""),a(""),u(""),w(!1),y(!0)},k=x=>{if(x.preventDefault(),!f){c({show:!0,title:"Hasła się nie zgadzają",message:"Hasła powinny być takie same w obu polach i powinny mieć co najmniej 6 znaków."});return}if(g){c({show:!0,title:"Wypełnij formularz",message:"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza."});return}E(),t(i,o,n).then(()=>{c({show:!0,title:"Zarejestrowano",message:"Za chwilę nastąpi przejście do strony głównej.",redirect:"/"}),setTimeout(()=>{e("/",{replace:!0})},5e3)}).catch(N=>{let T={show:!0,title:"Wystąpił błąd",message:"Serwis jest niedostępny. Spróbuj ponownie później"};N.message==="auth/email-already-in-use"&&(T.message="Podany e-mail jest już zajęty"),N.message==="auth/weak-password"&&(T.message="Podane hasło jest za słabe. Hasło powinno mieć co najmniej 6 znaków."),c(T),console.log(N)})},_=()=>{c(z_)};return p.jsxs(p.Fragment,{children:[p.jsxs("main",{className:Xe.container,children:[p.jsxs("section",{className:"section",children:[p.jsx("h1",{children:"Zarejestruj się"}),p.jsx("h2",{children:"Wypełnij formularz rejestracyjny"}),p.jsxs("form",{onSubmit:k,className:Xe.form,children:[p.jsxs("label",{children:[p.jsxs("p",{children:["Nazwa"," ",p.jsx("span",{className:Xe.asterisk,children:"*"})]}),p.jsx(Vt,{type:"text",id:"name",value:n,minLength:3,onInput:C,validateInput:of,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["E-mail"," ",p.jsx("span",{className:Xe.asterisk,children:"*"})]}),p.jsx(Vt,{type:"email",id:"email",value:i,minLength:3,onInput:v,validateInput:Ij,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Hasło"," ",p.jsx("span",{className:Xe.asterisk,children:"*"})]}),p.jsx(Vt,{type:"password",id:"password",value:o,minLength:6,onInput:h,validateInput:of,setIsFormInvalid:w,required:!0})]}),p.jsxs("label",{children:[p.jsxs("p",{children:["Powtórz Hasło"," ",p.jsx("span",{className:Xe.asterisk,children:"*"})]}),p.jsx(Vt,{type:"password",id:"confirmPassword",value:l,minLength:6,onInput:m,validateInput:of,setIsFormInvalid:w,required:!0})]}),p.jsx(Lt,{type:"submit",children:"Zapisz się"}),p.jsxs("p",{children:["Masz już konto?"," ",p.jsx(Pt,{to:"/logowanie",children:"Zaloguj się"})]})]})]}),d.show&&p.jsxs(Wi,{title:d.title,setShowModal:_,children:[p.jsx("p",{children:d.message}),d.redirect?p.jsx(Br,{to:d.redirect,className:Xe["modal-button"],onClick:_,children:"Ok"}):p.jsx(Lt,{className:Xe["modal-button"],onClick:_,children:"Ok"})]})]}),p.jsx(cr,{})]})},Pj=()=>{const{logout:t}=ei(),e=Fa();return S.useEffect(()=>{t(),e("/",{replace:!0})},[t,e]),p.jsxs(p.Fragment,{children:[p.jsx("main",{children:p.jsxs("section",{className:"section",children:[p.jsx("header",{children:p.jsx("h2",{children:"Błąd 404"})}),p.jsx("div",{children:p.jsx("p",{children:"Nie znaleziono strony."})})]})}),p.jsx(cr,{})]})},Nj=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,Rj=t=>Nj.test(t.toLowerCase())&&t.toLowerCase().trim().length>=3,U_={show:!1,title:"",message:""},Aj=()=>{const[t,e]=S.useState(""),{sendResetEmail:n}=ei(),[r,i]=S.useState(!0),[s,o]=S.useState(U_),a=c=>{e(c.target.value)},l=()=>{e(""),i(!1)},u=c=>{if(c.preventDefault(),r){o({show:!0,title:"Wypełnij formularz",message:"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza."});return}l(),n(t).then(()=>{o({show:!0,title:"Wysłano link resetujący hasło",message:"Sprawdź swoją skrzynkę e-mailową",redirect:"/"})}).catch(f=>{o({show:!0,title:"Wystąpił błąd",message:"Serwis w tej chwili jest niedostępny. Spróbuj ponownie później"}),console.log(f)})},d=()=>{o(U_)};return p.jsxs(p.Fragment,{children:[p.jsx("main",{children:p.jsxs("section",{className:"section",children:[p.jsx("h1",{children:"Zresetuj hasło"}),p.jsx("h2",{children:"Podaj adres e-mail"}),p.jsxs("form",{onSubmit:u,className:Xe.form,children:[p.jsxs("label",{children:[p.jsxs("p",{children:["E-mail ",p.jsx("span",{className:Xe.asterisk,children:"*"})]}),p.jsx(Vt,{type:"email",id:"email",minLength:3,value:t,onInput:a,validateInput:Rj,setIsFormInvalid:i,required:!0})]}),p.jsx(Lt,{type:"submit",children:"Wyślij link"})]})]})}),s.show&&p.jsxs(Wi,{title:s.title,setShowModal:d,children:[p.jsx("p",{children:s.message}),s.redirect?p.jsx(Br,{to:s.redirect,className:Xe["modal-button"],onClick:d,children:"Ok"}):p.jsx(Lt,{className:Xe["modal-button"],onClick:d,children:"Ok"})]}),p.jsx(cr,{})]})},Oj=()=>{const t=Rn(),{currentPage:e,setCurrentPage:n}=S.useContext(Xt),{isShown:r}=S.useContext(Ua);return S.useEffect(()=>{e!==t.pathname&&!r&&n(t.pathname)},[t,e,r,n]),p.jsxs(p.Fragment,{children:[!e.includes("/editor")&&p.jsx(yE,{}),r&&p.jsx(tT,{}),p.jsx(m1,{})]})},Lj=()=>{const{uid:t}=ei(),{data:e,response:n}=Kc(),[r,i]=S.useState(!1),[s,o]=S.useState([]),[a,l]=S.useState(!0),u=S.useMemo(()=>t?!0:!!sessionStorage.getItem("uid"),[t]);S.useEffect(()=>{n.isSuccess&&i(e.length>0)},[e,n]),S.useEffect(()=>{n.isSuccess&&o(e)},[e,n]),S.useEffect(()=>{if(u){l(!0);return}l(!1)},[u]);const d=TI(Lu(p.jsxs(Ye,{path:"/",element:p.jsx(Oj,{}),children:[p.jsx(Ye,{index:!0,element:p.jsx(_A,{})}),p.jsxs(Ye,{path:"wiki",element:p.jsx(wA,{}),children:[p.jsx(Ye,{index:!0,element:p.jsx(zL,{})}),r&&s&&s.map((c,f)=>p.jsx(Ye,{path:c.address,element:p.jsx(IS,{item:c})},f))]}),p.jsx(Ye,{path:"console/*",element:a?p.jsx(vj,{}):p.jsx(_I,{to:"/zabroniony",replace:!0})}),p.jsx(Ye,{path:"rejestracja",element:p.jsx(Tj,{})}),p.jsx(Ye,{path:"resetowanie-hasla",element:p.jsx(Aj,{})}),p.jsx(Ye,{path:"logowanie",element:p.jsx(bj,{})}),p.jsx(Ye,{path:"wylogowanie",element:p.jsx(Pj,{})}),p.jsx(Ye,{path:"zabroniony",element:p.jsx(_j,{})}),p.jsx(Ye,{path:"*",element:p.jsx(yj,{})})]})));return p.jsx(MI,{router:d})},_k=({children:t})=>{const[e,n]=S.useState(window.innerWidth),[r,i]=S.useState(window.innerHeight),[s,o]=S.useState(document.location.pathname),[a,l]=S.useState(!1),u={width:e,height:r,currentPage:s,setCurrentPage:o,fullscreen:a,setFullscreen:l};return S.useEffect(()=>{const d=()=>{const f=document.documentElement;f.requestFullscreen?f.requestFullscreen():f.webkitRequestFullscreen?f.webkitRequestFullscreen():f.msRequestFullscreen&&f.msRequestFullscreen()},c=()=>{document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};a?d():document.fullscreenElement&&c()},[a]),S.useEffect(()=>{const d=()=>{n(window.innerWidth),i(window.innerHeight)};return window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]),p.jsx(Xt.Provider,{value:u,children:t})};_k.propTypes={children:A.any};const wk=({children:t})=>{const[e,n]=S.useState(),r={isShown:e,setIsShown:n};return S.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.removeAttribute("style")},[e]),p.jsx(Ua.Provider,{value:r,children:t})};wk.propTypes={children:A.any};/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */(function(){if(typeof window<"u"&&window.addEventListener){var t=Object.create(null),e,n,r=function(){clearTimeout(n),n=setTimeout(e,100)},i=function(){},s=function(){var u;window.addEventListener("resize",r,!1),window.addEventListener("orientationchange",r,!1),window.MutationObserver?(u=new MutationObserver(r),u.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i=function(){try{u.disconnect(),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)}catch{}}):(document.documentElement.addEventListener("DOMSubtreeModified",r,!1),i=function(){document.documentElement.removeEventListener("DOMSubtreeModified",r,!1),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)})},o=function(u){function d(g){var w;return g.protocol!==void 0?w=g:(w=document.createElement("a"),w.href=g),w.protocol.replace(/:/g,"")+w.host}var c,f,y;return window.XMLHttpRequest&&(c=new XMLHttpRequest,f=d(location),y=d(u),c.withCredentials===void 0&&y!==""&&y!==f?c=XDomainRequest||void 0:c=XMLHttpRequest),c},a="http://www.w3.org/1999/xlink";e=function(){var u,d,c,f,y,g=0,w,C,v,h,m;function E(){g-=1,g===0&&(i(),s())}function k(N){return function(){t[N.base]!==!0&&(N.useEl.setAttributeNS(a,"xlink:href","#"+N.hash),N.useEl.hasAttribute("href")&&N.useEl.setAttribute("href","#"+N.hash))}}function _(N){return function(){var T=document.body,O=document.createElement("x"),j;N.onload=null,O.innerHTML=N.responseText,j=O.getElementsByTagName("svg")[0],j&&(j.setAttribute("aria-hidden","true"),j.style.position="absolute",j.style.width=0,j.style.height=0,j.style.overflow="hidden",T.insertBefore(j,T.firstChild)),E()}}function x(N){return function(){N.onerror=null,N.ontimeout=null,E()}}for(i(),h=document.getElementsByTagName("use"),y=0;y<h.length;y+=1){try{d=h[y].getBoundingClientRect()}catch{d=!1}f=h[y].getAttribute("href")||h[y].getAttributeNS(a,"href")||h[y].getAttribute("xlink:href"),f&&f.split?v=f.split("#"):v=["",""],u=v[0],c=v[1],w=d&&d.left===0&&d.right===0&&d.top===0&&d.bottom===0,d&&d.width===0&&d.height===0&&!w?(h[y].hasAttribute("href")&&h[y].setAttributeNS(a,"xlink:href",f),u.length&&(m=t[u],m!==!0&&setTimeout(k({useEl:h[y],base:u,hash:c}),0),m===void 0&&(C=o(u),C!==void 0&&(m=new C,t[u]=m,m.onload=_(m),m.onerror=x(m),m.ontimeout=x(m),m.open("GET",u),m.send(),g+=1)))):w?u.length&&t[u]&&setTimeout(k({useEl:h[y],base:u,hash:c}),0):t[u]===void 0?t[u]=!0:t[u].onload&&(t[u].abort(),delete t[u].onload,t[u]=!0)}h="",g+=1,E()};var l;l=function(){window.removeEventListener("load",l,!1),n=setTimeout(e,0)},document.readyState!=="complete"?window.addEventListener("load",l,!1):l()}})();af.createRoot(document.getElementById("root")).render(p.jsx(Gt.StrictMode,{children:p.jsx(_k,{children:p.jsx(wk,{children:p.jsx(Lj,{})})})}));
