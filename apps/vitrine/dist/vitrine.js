(()=>{var HM=Object.create;var Ch=Object.defineProperty;var GM=Object.getOwnPropertyDescriptor;var WM=Object.getOwnPropertyNames;var qM=Object.getPrototypeOf,XM=Object.prototype.hasOwnProperty;var ve=(t,e)=>()=>(t&&(e=t(t=0)),e);var Ki=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),$M=(t,e)=>{for(var n in e)Ch(t,n,{get:e[n],enumerable:!0})},YM=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of WM(e))!XM.call(t,a)&&a!==n&&Ch(t,a,{get:()=>e[a],enumerable:!(i=GM(e,a))||i.enumerable});return t};var Ai=(t,e,n)=>(n=t!=null?HM(qM(t)):{},YM(e||!t||!t.__esModule?Ch(n,"default",{value:t,enumerable:!0}):n,t));var O0=Ki(Ye=>{"use strict";var Co=Symbol.for("react.element"),ZM=Symbol.for("react.portal"),KM=Symbol.for("react.fragment"),jM=Symbol.for("react.strict_mode"),JM=Symbol.for("react.profiler"),QM=Symbol.for("react.provider"),ew=Symbol.for("react.context"),tw=Symbol.for("react.forward_ref"),nw=Symbol.for("react.suspense"),iw=Symbol.for("react.memo"),aw=Symbol.for("react.lazy"),A0=Symbol.iterator;function rw(t){return t===null||typeof t!="object"?null:(t=A0&&t[A0]||t["@@iterator"],typeof t=="function"?t:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P0=Object.assign,k0={};function Qr(t,e,n){this.props=t,this.context=e,this.refs=k0,this.updater=n||R0}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D0(){}D0.prototype=Qr.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=k0,this.updater=n||R0}var Ih=Lh.prototype=new D0;Ih.constructor=Lh;P0(Ih,Qr.prototype);Ih.isPureReactComponent=!0;var E0=Array.isArray,F0=Object.prototype.hasOwnProperty,Ah={current:null},N0={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var i,a={},r=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(r=""+e.key),e)F0.call(e,i)&&!N0.hasOwnProperty(i)&&(a[i]=e[i]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];a.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)a[i]===void 0&&(a[i]=o[i]);return{$$typeof:Co,type:t,key:r,ref:s,props:a,_owner:Ah.current}}function sw(t,e){return{$$typeof:Co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Co}function ow(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var T0=/\/+/g;function bh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ow(""+t.key):e.toString(36)}function $u(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Co:case ZM:s=!0}}if(s)return s=t,a=a(s),t=i===""?"."+bh(s,0):i,E0(a)?(n="",t!=null&&(n=t.replace(T0,"$&/")+"/"),$u(a,e,n,"",function(u){return u})):a!=null&&(Eh(a)&&(a=sw(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(T0,"$&/")+"/")+t)),e.push(a)),1;if(s=0,i=i===""?".":i+":",E0(t))for(var o=0;o<t.length;o++){r=t[o];var l=i+bh(r,o);s+=$u(r,e,n,l,a)}else if(l=rw(t),typeof l=="function")for(t=l.call(t),o=0;!(r=t.next()).done;)r=r.value,l=i+bh(r,o++),s+=$u(r,e,n,l,a);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Xu(t,e,n){if(t==null)return t;var i=[],a=0;return $u(t,i,"","",function(r){return e.call(n,r,a++)}),i}function lw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},Yu={transition:null},uw={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Yu,ReactCurrentOwner:Ah};function U0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Xu,forEach:function(t,e,n){Xu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xu(t,function(){e++}),e},toArray:function(t){return Xu(t,function(e){return e})||[]},only:function(t){if(!Eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Qr;Ye.Fragment=KM;Ye.Profiler=JM;Ye.PureComponent=Lh;Ye.StrictMode=jM;Ye.Suspense=nw;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uw;Ye.act=U0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=P0({},t.props),a=t.key,r=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,s=Ah.current),e.key!==void 0&&(a=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)F0.call(e,l)&&!N0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Co,type:t.type,key:a,ref:r,props:i,_owner:s}};Ye.createContext=function(t){return t={$$typeof:ew,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QM,_context:t},t.Consumer=t};Ye.createElement=B0;Ye.createFactory=function(t){var e=B0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:tw,render:t}};Ye.isValidElement=Eh;Ye.lazy=function(t){return{$$typeof:aw,_payload:{_status:-1,_result:t},_init:lw}};Ye.memo=function(t,e){return{$$typeof:iw,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Yu.transition;Yu.transition={};try{t()}finally{Yu.transition=e}};Ye.unstable_act=U0;Ye.useCallback=function(t,e){return yn.current.useCallback(t,e)};Ye.useContext=function(t){return yn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return yn.current.useEffect(t,e)};Ye.useId=function(){return yn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return yn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};Ye.useRef=function(t){return yn.current.useRef(t)};Ye.useState=function(t){return yn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return yn.current.useTransition()};Ye.version="18.3.1"});var Ca=Ki((JR,z0)=>{"use strict";z0.exports=O0()});var K0=Ki(xt=>{"use strict";function kh(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,a=t[i];if(0<Zu(a,e))t[i]=e,t[n]=a,n=i;else break e}}function ui(t){return t.length===0?null:t[0]}function ju(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,a=t.length,r=a>>>1;i<r;){var s=2*(i+1)-1,o=t[s],l=s+1,u=t[l];if(0>Zu(o,n))l<a&&0>Zu(u,o)?(t[i]=u,t[l]=n,i=l):(t[i]=o,t[s]=n,i=s);else if(l<a&&0>Zu(u,n))t[i]=u,t[l]=n,i=l;else break e}}return e}function Zu(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(V0=performance,xt.unstable_now=function(){return V0.now()}):(Th=Date,H0=Th.now(),xt.unstable_now=function(){return Th.now()-H0});var V0,Th,H0,Ei=[],ba=[],cw=1,Qn=null,un=3,Ju=!1,yr=!1,Lo=!1,q0=typeof setTimeout=="function"?setTimeout:null,X0=typeof clearTimeout=="function"?clearTimeout:null,G0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Dh(t){for(var e=ui(ba);e!==null;){if(e.callback===null)ju(ba);else if(e.startTime<=t)ju(ba),e.sortIndex=e.expirationTime,kh(Ei,e);else break;e=ui(ba)}}function Fh(t){if(Lo=!1,Dh(t),!yr)if(ui(Ei)!==null)yr=!0,Bh(Nh);else{var e=ui(ba);e!==null&&Uh(Fh,e.startTime-t)}}function Nh(t,e){yr=!1,Lo&&(Lo=!1,X0(Io),Io=-1),Ju=!0;var n=un;try{for(Dh(e),Qn=ui(Ei);Qn!==null&&(!(Qn.expirationTime>e)||t&&!Z0());){var i=Qn.callback;if(typeof i=="function"){Qn.callback=null,un=Qn.priorityLevel;var a=i(Qn.expirationTime<=e);e=xt.unstable_now(),typeof a=="function"?Qn.callback=a:Qn===ui(Ei)&&ju(Ei),Dh(e)}else ju(Ei);Qn=ui(Ei)}if(Qn!==null)var r=!0;else{var s=ui(ba);s!==null&&Uh(Fh,s.startTime-e),r=!1}return r}finally{Qn=null,un=n,Ju=!1}}var Qu=!1,Ku=null,Io=-1,$0=5,Y0=-1;function Z0(){return!(xt.unstable_now()-Y0<$0)}function Rh(){if(Ku!==null){var t=xt.unstable_now();Y0=t;var e=!0;try{e=Ku(!0,t)}finally{e?bo():(Qu=!1,Ku=null)}}else Qu=!1}var bo;typeof G0=="function"?bo=function(){G0(Rh)}:typeof MessageChannel<"u"?(Ph=new MessageChannel,W0=Ph.port2,Ph.port1.onmessage=Rh,bo=function(){W0.postMessage(null)}):bo=function(){q0(Rh,0)};var Ph,W0;function Bh(t){Ku=t,Qu||(Qu=!0,bo())}function Uh(t,e){Io=q0(function(){t(xt.unstable_now())},e)}xt.unstable_IdlePriority=5;xt.unstable_ImmediatePriority=1;xt.unstable_LowPriority=4;xt.unstable_NormalPriority=3;xt.unstable_Profiling=null;xt.unstable_UserBlockingPriority=2;xt.unstable_cancelCallback=function(t){t.callback=null};xt.unstable_continueExecution=function(){yr||Ju||(yr=!0,Bh(Nh))};xt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$0=0<t?Math.floor(1e3/t):5};xt.unstable_getCurrentPriorityLevel=function(){return un};xt.unstable_getFirstCallbackNode=function(){return ui(Ei)};xt.unstable_next=function(t){switch(un){case 1:case 2:case 3:var e=3;break;default:e=un}var n=un;un=e;try{return t()}finally{un=n}};xt.unstable_pauseExecution=function(){};xt.unstable_requestPaint=function(){};xt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=un;un=t;try{return e()}finally{un=n}};xt.unstable_scheduleCallback=function(t,e,n){var i=xt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,t={id:cw++,callback:e,priorityLevel:t,startTime:n,expirationTime:a,sortIndex:-1},n>i?(t.sortIndex=n,kh(ba,t),ui(Ei)===null&&t===ui(ba)&&(Lo?(X0(Io),Io=-1):Lo=!0,Uh(Fh,n-i))):(t.sortIndex=a,kh(Ei,t),yr||Ju||(yr=!0,Bh(Nh))),t};xt.unstable_shouldYield=Z0;xt.unstable_wrapCallback=function(t){var e=un;return function(){var n=un;un=e;try{return t.apply(this,arguments)}finally{un=n}}}});var J0=Ki((eP,j0)=>{"use strict";j0.exports=K0()});var n_=Ki(Gn=>{"use strict";var dw=Ca(),Vn=J0();function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ry=new Set,Zo={};function Rr(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(Zo[t]=e,t=0;t<e.length;t++)ry.add(e[t])}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=Object.prototype.hasOwnProperty,fw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q0={},ex={};function hw(t){return op.call(ex,t)?!0:op.call(Q0,t)?!1:fw.test(t)?ex[t]=!0:(Q0[t]=!0,!1)}function pw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mw(t,e,n,i){if(e===null||typeof e>"u"||pw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(t,e,n,i,a,r,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=s}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new Sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new Sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new Sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new Sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new Sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new Sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new Sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new Sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new Sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qp=/[\-:]([a-z])/g;function em(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qp,em);tn[e]=new Sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qp,em);tn[e]=new Sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qp,em);tn[e]=new Sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function tm(t,e,n,i){var a=tn.hasOwnProperty(e)?tn[e]:null;(a!==null?a.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mw(e,n,a,i)&&(n=null),i||a===null?hw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):a.mustUseProperty?t[a.propertyName]=n===null?a.type===3?!1:"":n:(e=a.attributeName,i=a.attributeNamespace,n===null?t.removeAttribute(e):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var sa=dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ec=Symbol.for("react.element"),ns=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),lp=Symbol.for("react.profiler"),sy=Symbol.for("react.provider"),oy=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),up=Symbol.for("react.suspense"),cp=Symbol.for("react.suspense_list"),am=Symbol.for("react.memo"),Ia=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var ly=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var tx=Symbol.iterator;function Ao(t){return t===null||typeof t!="object"?null:(t=tx&&t[tx]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Oh;function No(t){if(Oh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oh=e&&e[1]||""}return`
`+Oh+t}var zh=!1;function Vh(t,e){if(!t||zh)return"";zh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),r=i.stack.split(`
`),s=a.length-1,o=r.length-1;1<=s&&0<=o&&a[s]!==r[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==r[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==r[o]){var l=`
`+a[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{zh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function gw(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=Vh(t.type,!1),t;case 11:return t=Vh(t.type.render,!1),t;case 1:return t=Vh(t.type,!0),t;default:return""}}function dp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case ns:return"Portal";case lp:return"Profiler";case nm:return"StrictMode";case up:return"Suspense";case cp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case oy:return(t.displayName||"Context")+".Consumer";case sy:return(t._context.displayName||"Context")+".Provider";case im:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case am:return e=t.displayName||null,e!==null?e:dp(t.type)||"Memo";case Ia:e=t._payload,t=t._init;try{return dp(t(e))}catch{}}return null}function xw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dp(e);case 8:return e===nm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Va(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yw(t){var e=uy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tc(t){t._valueTracker||(t._valueTracker=yw(t))}function cy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=uy(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ec(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fp(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nx(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Va(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dy(t,e){e=e.checked,e!=null&&tm(t,"checked",e,!1)}function hp(t,e){dy(t,e);var n=Va(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pp(t,e.type,n):e.hasOwnProperty("defaultValue")&&pp(t,e.type,Va(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ix(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pp(t,e,n){(e!=="number"||Ec(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Va(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function mp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ax(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Bo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Va(n)}}function fy(t,e){var n=Va(e.value),i=Va(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rx(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nc,py=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,a){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,a)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nc=nc||document.createElement("div"),nc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vw=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){vw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function my(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function gy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,a=my(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,a):t[n]=a}}var _w=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xp(t,e){if(e){if(_w[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function yp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=null;function rm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _p=null,ms=null,gs=null;function sx(t){if(t=pl(t)){if(typeof _p!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=id(e),_p(t.stateNode,t.type,e))}}function xy(t){ms?gs?gs.push(t):gs=[t]:ms=t}function yy(){if(ms){var t=ms,e=gs;if(gs=ms=null,sx(t),e)for(t=0;t<e.length;t++)sx(e[t])}}function vy(t,e){return t(e)}function _y(){}var Hh=!1;function Sy(t,e,n){if(Hh)return t(e,n);Hh=!0;try{return vy(t,e,n)}finally{Hh=!1,(ms!==null||gs!==null)&&(_y(),yy())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var i=id(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Sp=!1;if(na)try{es={},Object.defineProperty(es,"passive",{get:function(){Sp=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Sp=!1}var es;function Sw(t,e,n,i,a,r,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Vo=!1,Tc=null,Rc=!1,Mp=null,Mw={onError:function(t){Vo=!0,Tc=t}};function ww(t,e,n,i,a,r,s,o,l){Vo=!1,Tc=null,Sw.apply(Mw,arguments)}function Cw(t,e,n,i,a,r,s,o,l){if(ww.apply(this,arguments),Vo){if(Vo){var u=Tc;Vo=!1,Tc=null}else throw Error(oe(198));Rc||(Rc=!0,Mp=u)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function My(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ox(t){if(Pr(t)!==t)throw Error(oe(188))}function bw(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return ox(a),t;if(r===i)return ox(a),e;r=r.sibling}throw Error(oe(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function wy(t){return t=bw(t),t!==null?Cy(t):null}function Cy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cy(t);if(e!==null)return e;t=t.sibling}return null}var by=Vn.unstable_scheduleCallback,lx=Vn.unstable_cancelCallback,Lw=Vn.unstable_shouldYield,Iw=Vn.unstable_requestPaint,Bt=Vn.unstable_now,Aw=Vn.unstable_getCurrentPriorityLevel,sm=Vn.unstable_ImmediatePriority,Ly=Vn.unstable_UserBlockingPriority,Pc=Vn.unstable_NormalPriority,Ew=Vn.unstable_LowPriority,Iy=Vn.unstable_IdlePriority,Qc=null,ki=null;function Tw(t){if(ki&&typeof ki.onCommitFiberRoot=="function")try{ki.onCommitFiberRoot(Qc,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:kw,Rw=Math.log,Pw=Math.LN2;function kw(t){return t>>>=0,t===0?32:31-(Rw(t)/Pw|0)|0}var ic=64,ac=4194304;function Uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,a=t.suspendedLanes,r=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~a;o!==0?i=Uo(o):(r&=s,r!==0&&(i=Uo(r)))}else s=n&~a,s!==0?i=Uo(s):r!==0&&(i=Uo(r));if(i===0)return 0;if(e!==0&&e!==i&&!(e&a)&&(a=i&-i,r=e&-e,a>=r||a===16&&(r&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-pi(e),a=1<<n,i|=t[n],e&=~a;return i}function Dw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes;0<r;){var s=31-pi(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=Dw(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}}function wp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ay(){var t=ic;return ic<<=1,!(ic&4194240)&&(ic=64),t}function Gh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function Nw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var a=31-pi(n),r=1<<a;e[a]=0,i[a]=-1,t[a]=-1,n&=~r}}function om(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-pi(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}var lt=0;function Ey(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ty,lm,Ry,Py,ky,Cp=!1,rc=[],ka=null,Da=null,Fa=null,Jo=new Map,Qo=new Map,Ea=[],Bw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ux(t,e){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function Eo(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=pl(e),e!==null&&lm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Uw(t,e,n,i,a){switch(e){case"focusin":return ka=Eo(ka,t,e,n,i,a),!0;case"dragenter":return Da=Eo(Da,t,e,n,i,a),!0;case"mouseover":return Fa=Eo(Fa,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return Jo.set(r,Eo(Jo.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Qo.set(r,Eo(Qo.get(r)||null,t,e,n,i,a)),!0}return!1}function Dy(t){var e=Sr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=My(n),e!==null){t.blockedOn=e,ky(t.priority,function(){Ry(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);vp=i,n.target.dispatchEvent(i),vp=null}else return e=pl(n),e!==null&&lm(e),t.blockedOn=n,!1;e.shift()}return!0}function cx(t,e,n){vc(t)&&n.delete(e)}function Ow(){Cp=!1,ka!==null&&vc(ka)&&(ka=null),Da!==null&&vc(Da)&&(Da=null),Fa!==null&&vc(Fa)&&(Fa=null),Jo.forEach(cx),Qo.forEach(cx)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,Cp||(Cp=!0,Vn.unstable_scheduleCallback(Vn.unstable_NormalPriority,Ow)))}function el(t){function e(a){return To(a,t)}if(0<rc.length){To(rc[0],t);for(var n=1;n<rc.length;n++){var i=rc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ka!==null&&To(ka,t),Da!==null&&To(Da,t),Fa!==null&&To(Fa,t),Jo.forEach(e),Qo.forEach(e),n=0;n<Ea.length;n++)i=Ea[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ea.length&&(n=Ea[0],n.blockedOn===null);)Dy(n),n.blockedOn===null&&Ea.shift()}var xs=sa.ReactCurrentBatchConfig,Dc=!0;function zw(t,e,n,i){var a=lt,r=xs.transition;xs.transition=null;try{lt=1,um(t,e,n,i)}finally{lt=a,xs.transition=r}}function Vw(t,e,n,i){var a=lt,r=xs.transition;xs.transition=null;try{lt=4,um(t,e,n,i)}finally{lt=a,xs.transition=r}}function um(t,e,n,i){if(Dc){var a=bp(t,e,n,i);if(a===null)Kh(t,e,i,Fc,n),ux(t,i);else if(Uw(a,t,e,n,i))i.stopPropagation();else if(ux(t,i),e&4&&-1<Bw.indexOf(t)){for(;a!==null;){var r=pl(a);if(r!==null&&Ty(r),r=bp(t,e,n,i),r===null&&Kh(t,e,i,Fc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Kh(t,e,i,null,n)}}var Fc=null;function bp(t,e,n,i){if(Fc=null,t=rm(i),t=Sr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=My(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fc=t,null}function Fy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Aw()){case sm:return 1;case Ly:return 4;case Pc:case Ew:return 16;case Iy:return 536870912;default:return 16}default:return 16}}var Ra=null,cm=null,_c=null;function Ny(){if(_c)return _c;var t,e=cm,n=e.length,i,a="value"in Ra?Ra.value:Ra.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return _c=a.slice(t,1<i?1-i:void 0)}function Sc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sc(){return!0}function dx(){return!1}function Hn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?sc:dx,this.isPropagationStopped=dx,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dm=Hn(Is),hl=Rt({},Is,{view:0,detail:0}),Hw=Hn(hl),Wh,qh,Ro,ed=Rt({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Wh=t.screenX-Ro.screenX,qh=t.screenY-Ro.screenY):qh=Wh=0,Ro=t),Wh)},movementY:function(t){return"movementY"in t?t.movementY:qh}}),fx=Hn(ed),Gw=Rt({},ed,{dataTransfer:0}),Ww=Hn(Gw),qw=Rt({},hl,{relatedTarget:0}),Xh=Hn(qw),Xw=Rt({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),$w=Hn(Xw),Yw=Rt({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zw=Hn(Yw),Kw=Rt({},Is,{data:0}),hx=Hn(Kw),jw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qw[t])?!!e[t]:!1}function fm(){return eC}var tC=Rt({},hl,{key:function(t){if(t.key){var e=jw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fm,charCode:function(t){return t.type==="keypress"?Sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nC=Hn(tC),iC=Rt({},ed,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),px=Hn(iC),aC=Rt({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fm}),rC=Hn(aC),sC=Rt({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),oC=Hn(sC),lC=Rt({},ed,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uC=Hn(lC),cC=[9,13,27,32],hm=na&&"CompositionEvent"in window,Ho=null;na&&"documentMode"in document&&(Ho=document.documentMode);var dC=na&&"TextEvent"in window&&!Ho,By=na&&(!hm||Ho&&8<Ho&&11>=Ho),mx=" ",gx=!1;function Uy(t,e){switch(t){case"keyup":return cC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function fC(t,e){switch(t){case"compositionend":return Oy(e);case"keypress":return e.which!==32?null:(gx=!0,mx);case"textInput":return t=e.data,t===mx&&gx?null:t;default:return null}}function hC(t,e){if(as)return t==="compositionend"||!hm&&Uy(t,e)?(t=Ny(),_c=cm=Ra=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return By&&e.locale!=="ko"?null:e.data;default:return null}}var pC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xx(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pC[t.type]:e==="textarea"}function zy(t,e,n,i){xy(i),e=Nc(e,"onChange"),0<e.length&&(n=new dm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Go=null,tl=null;function mC(t){jy(t,0)}function td(t){var e=os(t);if(cy(e))return t}function gC(t,e){if(t==="change")return e}var Vy=!1;na&&(na?(lc="oninput"in document,lc||($h=document.createElement("div"),$h.setAttribute("oninput","return;"),lc=typeof $h.oninput=="function"),oc=lc):oc=!1,Vy=oc&&(!document.documentMode||9<document.documentMode));var oc,lc,$h;function yx(){Go&&(Go.detachEvent("onpropertychange",Hy),tl=Go=null)}function Hy(t){if(t.propertyName==="value"&&td(tl)){var e=[];zy(e,tl,t,rm(t)),Sy(mC,e)}}function xC(t,e,n){t==="focusin"?(yx(),Go=e,tl=n,Go.attachEvent("onpropertychange",Hy)):t==="focusout"&&yx()}function yC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return td(tl)}function vC(t,e){if(t==="click")return td(e)}function _C(t,e){if(t==="input"||t==="change")return td(e)}function SC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:SC;function nl(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!op.call(e,a)||!gi(t[a],e[a]))return!1}return!0}function vx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _x(t,e){var n=vx(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vx(n)}}function Gy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wy(){for(var t=window,e=Ec();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ec(t.document)}return e}function pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MC(t){var e=Wy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gy(n.ownerDocument.documentElement,n)){if(i!==null&&pm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var a=n.textContent.length,r=Math.min(i.start,a);i=i.end===void 0?r:Math.min(i.end,a),!t.extend&&r>i&&(a=i,i=r,r=a),a=_x(n,r);var s=_x(n,i);a&&s&&(t.rangeCount!==1||t.anchorNode!==a.node||t.anchorOffset!==a.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),t.removeAllRanges(),r>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wC=na&&"documentMode"in document&&11>=document.documentMode,rs=null,Lp=null,Wo=null,Ip=!1;function Sx(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ip||rs==null||rs!==Ec(i)||(i=rs,"selectionStart"in i&&pm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&nl(Wo,i)||(Wo=i,i=Nc(Lp,"onSelect"),0<i.length&&(e=new dm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function uc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:uc("Animation","AnimationEnd"),animationiteration:uc("Animation","AnimationIteration"),animationstart:uc("Animation","AnimationStart"),transitionend:uc("Transition","TransitionEnd")},Yh={},qy={};na&&(qy=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function nd(t){if(Yh[t])return Yh[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qy)return Yh[t]=e[n];return t}var Xy=nd("animationend"),$y=nd("animationiteration"),Yy=nd("animationstart"),Zy=nd("transitionend"),Ky=new Map,Mx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ga(t,e){Ky.set(t,e),Rr(e,[t])}for(cc=0;cc<Mx.length;cc++)dc=Mx[cc],wx=dc.toLowerCase(),Cx=dc[0].toUpperCase()+dc.slice(1),Ga(wx,"on"+Cx);var dc,wx,Cx,cc;Ga(Xy,"onAnimationEnd");Ga($y,"onAnimationIteration");Ga(Yy,"onAnimationStart");Ga("dblclick","onDoubleClick");Ga("focusin","onFocus");Ga("focusout","onBlur");Ga(Zy,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function bx(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cw(i,e,void 0,t),t.currentTarget=null}function jy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;bx(a,o,u),r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;bx(a,o,u),r=l}}}if(Rc)throw t=Mp,Rc=!1,Mp=null,t}function St(t,e){var n=e[Pp];n===void 0&&(n=e[Pp]=new Set);var i=t+"__bubble";n.has(i)||(Jy(e,t,2,!1),n.add(i))}function Zh(t,e,n){var i=0;e&&(i|=4),Jy(n,t,i,e)}var fc="_reactListening"+Math.random().toString(36).slice(2);function il(t){if(!t[fc]){t[fc]=!0,ry.forEach(function(n){n!=="selectionchange"&&(CC.has(n)||Zh(n,!1,t),Zh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fc]||(e[fc]=!0,Zh("selectionchange",!1,e))}}function Jy(t,e,n,i){switch(Fy(e)){case 1:var a=zw;break;case 4:a=Vw;break;default:a=um}n=a.bind(null,e,n,t),a=void 0,!Sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Kh(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;s=s.return}for(;o!==null;){if(s=Sr(o),s===null)return;if(l=s.tag,l===5||l===6){i=r=s;continue e}o=o.parentNode}}i=i.return}Sy(function(){var u=r,f=rm(n),p=[];e:{var d=Ky.get(t);if(d!==void 0){var g=dm,x=t;switch(t){case"keypress":if(Sc(n)===0)break e;case"keydown":case"keyup":g=nC;break;case"focusin":x="focus",g=Xh;break;case"focusout":x="blur",g=Xh;break;case"beforeblur":case"afterblur":g=Xh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=fx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ww;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=rC;break;case Xy:case $y:case Yy:g=$w;break;case Zy:g=oC;break;case"scroll":g=Hw;break;case"wheel":g=uC;break;case"copy":case"cut":case"paste":g=Zw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=px}var C=(e&4)!==0,y=!C&&t==="scroll",c=C?d!==null?d+"Capture":null:d;C=[];for(var m=u,w;m!==null;){w=m;var M=w.stateNode;if(w.tag===5&&M!==null&&(w=M,c!==null&&(M=jo(m,c),M!=null&&C.push(al(m,M,w)))),y)break;m=m.return}0<C.length&&(d=new g(d,x,null,n,f),p.push({event:d,listeners:C}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==vp&&(x=n.relatedTarget||n.fromElement)&&(Sr(x)||x[ia]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Sr(x):null,x!==null&&(y=Pr(x),x!==y||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(C=fx,M="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(C=px,M="onPointerLeave",c="onPointerEnter",m="pointer"),y=g==null?d:os(g),w=x==null?d:os(x),d=new C(M,m+"leave",g,n,f),d.target=y,d.relatedTarget=w,M=null,Sr(f)===u&&(C=new C(c,m+"enter",x,n,f),C.target=w,C.relatedTarget=y,M=C),y=M,g&&x)t:{for(C=g,c=x,m=0,w=C;w;w=ts(w))m++;for(w=0,M=c;M;M=ts(M))w++;for(;0<m-w;)C=ts(C),m--;for(;0<w-m;)c=ts(c),w--;for(;m--;){if(C===c||c!==null&&C===c.alternate)break t;C=ts(C),c=ts(c)}C=null}else C=null;g!==null&&Lx(p,d,g,C,!1),x!==null&&y!==null&&Lx(p,y,x,C,!0)}}e:{if(d=u?os(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=gC;else if(xx(d))if(Vy)I=_C;else{I=yC;var L=xC}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=vC);if(I&&(I=I(t,u))){zy(p,I,n,f);break e}L&&L(t,d,u),t==="focusout"&&(L=d._wrapperState)&&L.controlled&&d.type==="number"&&pp(d,"number",d.value)}switch(L=u?os(u):window,t){case"focusin":(xx(L)||L.contentEditable==="true")&&(rs=L,Lp=u,Wo=null);break;case"focusout":Wo=Lp=rs=null;break;case"mousedown":Ip=!0;break;case"contextmenu":case"mouseup":case"dragend":Ip=!1,Sx(p,n,f);break;case"selectionchange":if(wC)break;case"keydown":case"keyup":Sx(p,n,f)}var E;if(hm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else as?Uy(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(By&&n.locale!=="ko"&&(as||_!=="onCompositionStart"?_==="onCompositionEnd"&&as&&(E=Ny()):(Ra=f,cm="value"in Ra?Ra.value:Ra.textContent,as=!0)),L=Nc(u,_),0<L.length&&(_=new hx(_,t,null,n,f),p.push({event:_,listeners:L}),E?_.data=E:(E=Oy(n),E!==null&&(_.data=E)))),(E=dC?fC(t,n):hC(t,n))&&(u=Nc(u,"onBeforeInput"),0<u.length&&(f=new hx("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=E))}jy(p,e)})}function al(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=jo(t,n),r!=null&&i.unshift(al(t,r,a)),r=jo(t,e),r!=null&&i.push(al(t,r,a))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lx(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,a?(l=jo(n,r),l!=null&&s.unshift(al(n,l,o))):a||(l=jo(n,r),l!=null&&s.push(al(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var bC=/\r\n?/g,LC=/\u0000|\uFFFD/g;function Ix(t){return(typeof t=="string"?t:""+t).replace(bC,`
`).replace(LC,"")}function hc(t,e,n){if(e=Ix(e),Ix(t)!==e&&n)throw Error(oe(425))}function Bc(){}var Ap=null,Ep=null;function Tp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rp=typeof setTimeout=="function"?setTimeout:void 0,IC=typeof clearTimeout=="function"?clearTimeout:void 0,Ax=typeof Promise=="function"?Promise:void 0,AC=typeof queueMicrotask=="function"?queueMicrotask:typeof Ax<"u"?function(t){return Ax.resolve(null).then(t).catch(EC)}:Rp;function EC(t){setTimeout(function(){throw t})}function jh(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(i===0){t.removeChild(a),el(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=a}while(n);el(e)}function Na(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ex(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),Pi="__reactFiber$"+As,rl="__reactProps$"+As,ia="__reactContainer$"+As,Pp="__reactEvents$"+As,TC="__reactListeners$"+As,RC="__reactHandles$"+As;function Sr(t){var e=t[Pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ia]||n[Pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ex(t);t!==null;){if(n=t[Pi])return n;t=Ex(t)}return e}t=n,n=t.parentNode}return null}function pl(t){return t=t[Pi]||t[ia],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function id(t){return t[rl]||null}var kp=[],ls=-1;function Wa(t){return{current:t}}function Mt(t){0>ls||(t.current=kp[ls],kp[ls]=null,ls--)}function yt(t,e){ls++,kp[ls]=t.current,t.current=e}var Ha={},hn=Wa(Ha),Ln=Wa(!1),Lr=Ha;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Ha;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in n)a[r]=e[r];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=a),a}function In(t){return t=t.childContextTypes,t!=null}function Uc(){Mt(Ln),Mt(hn)}function Tx(t,e,n){if(hn.current!==Ha)throw Error(oe(168));yt(hn,e),yt(Ln,n)}function Qy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var a in i)if(!(a in e))throw Error(oe(108,xw(t)||"Unknown",a));return Rt({},n,i)}function Oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ha,Lr=hn.current,yt(hn,t),yt(Ln,Ln.current),!0}function Rx(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Qy(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,Mt(Ln),Mt(hn),yt(hn,t)):Mt(Ln),yt(Ln,n)}var Ji=null,ad=!1,Jh=!1;function ev(t){Ji===null?Ji=[t]:Ji.push(t)}function PC(t){ad=!0,ev(t)}function qa(){if(!Jh&&Ji!==null){Jh=!0;var t=0,e=lt;try{var n=Ji;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ji=null,ad=!1}catch(a){throw Ji!==null&&(Ji=Ji.slice(t+1)),by(sm,qa),a}finally{lt=e,Jh=!1}}return null}var us=[],cs=0,zc=null,Vc=0,ei=[],ti=0,Ir=null,Qi=1,ea="";function vr(t,e){us[cs++]=Vc,us[cs++]=zc,zc=t,Vc=e}function tv(t,e,n){ei[ti++]=Qi,ei[ti++]=ea,ei[ti++]=Ir,Ir=t;var i=Qi;t=ea;var a=32-pi(i)-1;i&=~(1<<a),n+=1;var r=32-pi(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Qi=1<<32-pi(e)+a|n<<a|i,ea=r+t}else Qi=1<<r|n<<a|i,ea=t}function mm(t){t.return!==null&&(vr(t,1),tv(t,1,0))}function gm(t){for(;t===zc;)zc=us[--cs],us[cs]=null,Vc=us[--cs],us[cs]=null;for(;t===Ir;)Ir=ei[--ti],ei[ti]=null,ea=ei[--ti],ei[ti]=null,Qi=ei[--ti],ei[ti]=null}var zn=null,On=null,Ct=!1,hi=null;function nv(t,e){var n=ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Px(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zn=t,On=Na(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zn=t,On=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:Qi,overflow:ea}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zn=t,On=null,!0):!1;default:return!1}}function Dp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fp(t){if(Ct){var e=On;if(e){var n=e;if(!Px(t,e)){if(Dp(t))throw Error(oe(418));e=Na(n.nextSibling);var i=zn;e&&Px(t,e)?nv(i,n):(t.flags=t.flags&-4097|2,Ct=!1,zn=t)}}else{if(Dp(t))throw Error(oe(418));t.flags=t.flags&-4097|2,Ct=!1,zn=t}}}function kx(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function pc(t){if(t!==zn)return!1;if(!Ct)return kx(t),Ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tp(t.type,t.memoizedProps)),e&&(e=On)){if(Dp(t))throw iv(),Error(oe(418));for(;e;)nv(t,e),e=Na(e.nextSibling)}if(kx(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){On=Na(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}On=null}}else On=zn?Na(t.stateNode.nextSibling):null;return!0}function iv(){for(var t=On;t;)t=Na(t.nextSibling)}function Ms(){On=zn=null,Ct=!1}function xm(t){hi===null?hi=[t]:hi.push(t)}var kC=sa.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var a=i,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(s){var o=a.refs;s===null?delete o[r]:o[r]=s},e._stringRef=r,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function mc(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dx(t){var e=t._init;return e(t._payload)}function av(t){function e(c,m){if(t){var w=c.deletions;w===null?(c.deletions=[m],c.flags|=16):w.push(m)}}function n(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function a(c,m){return c=za(c,m),c.index=0,c.sibling=null,c}function r(c,m,w){return c.index=w,t?(w=c.alternate,w!==null?(w=w.index,w<m?(c.flags|=2,m):w):(c.flags|=2,m)):(c.flags|=1048576,m)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,m,w,M){return m===null||m.tag!==6?(m=rp(w,c.mode,M),m.return=c,m):(m=a(m,w),m.return=c,m)}function l(c,m,w,M){var I=w.type;return I===is?f(c,m,w.props.children,M,w.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ia&&Dx(I)===m.type)?(M=a(m,w.props),M.ref=Po(c,m,w),M.return=c,M):(M=Ac(w.type,w.key,w.props,null,c.mode,M),M.ref=Po(c,m,w),M.return=c,M)}function u(c,m,w,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=sp(w,c.mode,M),m.return=c,m):(m=a(m,w.children||[]),m.return=c,m)}function f(c,m,w,M,I){return m===null||m.tag!==7?(m=br(w,c.mode,M,I),m.return=c,m):(m=a(m,w),m.return=c,m)}function p(c,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=rp(""+m,c.mode,w),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ec:return w=Ac(m.type,m.key,m.props,null,c.mode,w),w.ref=Po(c,null,m),w.return=c,w;case ns:return m=sp(m,c.mode,w),m.return=c,m;case Ia:var M=m._init;return p(c,M(m._payload),w)}if(Bo(m)||Ao(m))return m=br(m,c.mode,w,null),m.return=c,m;mc(c,m)}return null}function d(c,m,w,M){var I=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return I!==null?null:o(c,m,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ec:return w.key===I?l(c,m,w,M):null;case ns:return w.key===I?u(c,m,w,M):null;case Ia:return I=w._init,d(c,m,I(w._payload),M)}if(Bo(w)||Ao(w))return I!==null?null:f(c,m,w,M,null);mc(c,w)}return null}function g(c,m,w,M,I){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(w)||null,o(m,c,""+M,I);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ec:return c=c.get(M.key===null?w:M.key)||null,l(m,c,M,I);case ns:return c=c.get(M.key===null?w:M.key)||null,u(m,c,M,I);case Ia:var L=M._init;return g(c,m,w,L(M._payload),I)}if(Bo(M)||Ao(M))return c=c.get(w)||null,f(m,c,M,I,null);mc(m,M)}return null}function x(c,m,w,M){for(var I=null,L=null,E=m,_=m=0,A=null;E!==null&&_<w.length;_++){E.index>_?(A=E,E=null):A=E.sibling;var R=d(c,E,w[_],M);if(R===null){E===null&&(E=A);break}t&&E&&R.alternate===null&&e(c,E),m=r(R,m,_),L===null?I=R:L.sibling=R,L=R,E=A}if(_===w.length)return n(c,E),Ct&&vr(c,_),I;if(E===null){for(;_<w.length;_++)E=p(c,w[_],M),E!==null&&(m=r(E,m,_),L===null?I=E:L.sibling=E,L=E);return Ct&&vr(c,_),I}for(E=i(c,E);_<w.length;_++)A=g(E,c,_,w[_],M),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?_:A.key),m=r(A,m,_),L===null?I=A:L.sibling=A,L=A);return t&&E.forEach(function(P){return e(c,P)}),Ct&&vr(c,_),I}function C(c,m,w,M){var I=Ao(w);if(typeof I!="function")throw Error(oe(150));if(w=I.call(w),w==null)throw Error(oe(151));for(var L=I=null,E=m,_=m=0,A=null,R=w.next();E!==null&&!R.done;_++,R=w.next()){E.index>_?(A=E,E=null):A=E.sibling;var P=d(c,E,R.value,M);if(P===null){E===null&&(E=A);break}t&&E&&P.alternate===null&&e(c,E),m=r(P,m,_),L===null?I=P:L.sibling=P,L=P,E=A}if(R.done)return n(c,E),Ct&&vr(c,_),I;if(E===null){for(;!R.done;_++,R=w.next())R=p(c,R.value,M),R!==null&&(m=r(R,m,_),L===null?I=R:L.sibling=R,L=R);return Ct&&vr(c,_),I}for(E=i(c,E);!R.done;_++,R=w.next())R=g(E,c,_,R.value,M),R!==null&&(t&&R.alternate!==null&&E.delete(R.key===null?_:R.key),m=r(R,m,_),L===null?I=R:L.sibling=R,L=R);return t&&E.forEach(function(k){return e(c,k)}),Ct&&vr(c,_),I}function y(c,m,w,M){if(typeof w=="object"&&w!==null&&w.type===is&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case ec:e:{for(var I=w.key,L=m;L!==null;){if(L.key===I){if(I=w.type,I===is){if(L.tag===7){n(c,L.sibling),m=a(L,w.props.children),m.return=c,c=m;break e}}else if(L.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ia&&Dx(I)===L.type){n(c,L.sibling),m=a(L,w.props),m.ref=Po(c,L,w),m.return=c,c=m;break e}n(c,L);break}else e(c,L);L=L.sibling}w.type===is?(m=br(w.props.children,c.mode,M,w.key),m.return=c,c=m):(M=Ac(w.type,w.key,w.props,null,c.mode,M),M.ref=Po(c,m,w),M.return=c,c=M)}return s(c);case ns:e:{for(L=w.key;m!==null;){if(m.key===L)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(c,m.sibling),m=a(m,w.children||[]),m.return=c,c=m;break e}else{n(c,m);break}else e(c,m);m=m.sibling}m=sp(w,c.mode,M),m.return=c,c=m}return s(c);case Ia:return L=w._init,y(c,m,L(w._payload),M)}if(Bo(w))return x(c,m,w,M);if(Ao(w))return C(c,m,w,M);mc(c,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(c,m.sibling),m=a(m,w),m.return=c,c=m):(n(c,m),m=rp(w,c.mode,M),m.return=c,c=m),s(c)):n(c,m)}return y}var ws=av(!0),rv=av(!1),Hc=Wa(null),Gc=null,ds=null,ym=null;function vm(){ym=ds=Gc=null}function _m(t){var e=Hc.current;Mt(Hc),t._currentValue=e}function Np(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Gc=t,ym=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bn=!0),t.firstContext=null)}function ai(t){var e=t._currentValue;if(ym!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Gc===null)throw Error(oe(308));ds=t,Gc.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var Mr=null;function Sm(t){Mr===null?Mr=[t]:Mr.push(t)}function sv(t,e,n,i){var a=e.interleaved;return a===null?(n.next=n,Sm(e)):(n.next=a.next,a.next=n),e.interleaved=n,aa(t,i)}function aa(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Aa=!1;function Mm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ov(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ta(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,aa(t,n)}return a=i.interleaved,a===null?(e.next=e,Sm(i)):(e.next=a.next,a.next=e),i.interleaved=e,aa(t,n)}function Mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,om(t,n)}}function Fx(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wc(t,e,n,i){var a=t.updateQueue;Aa=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?r=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;s=0,f=u=l=null,o=r;do{var d=o.lane,g=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,C=o;switch(d=e,g=n,C.tag){case 1:if(x=C.payload,typeof x=="function"){p=x.call(g,p,d);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,d=typeof x=="function"?x.call(g,p,d):x,d==null)break e;p=Rt({},p,d);break e;case 2:Aa=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=a.effects,d===null?a.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,l=p):f=f.next=g,s|=d;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);if(f===null&&(l=p),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=f,e=a.shared.interleaved,e!==null){a=e;do s|=a.lane,a=a.next;while(a!==e)}else r===null&&(a.shared.lanes=0);Er|=s,t.lanes=s,t.memoizedState=p}}function Nx(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!="function")throw Error(oe(191,a));a.call(i)}}}var ml={},Di=Wa(ml),sl=Wa(ml),ol=Wa(ml);function wr(t){if(t===ml)throw Error(oe(174));return t}function wm(t,e){switch(yt(ol,e),yt(sl,t),yt(Di,ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gp(e,t)}Mt(Di),yt(Di,e)}function Cs(){Mt(Di),Mt(sl),Mt(ol)}function lv(t){wr(ol.current);var e=wr(Di.current),n=gp(e,t.type);e!==n&&(yt(sl,t),yt(Di,n))}function Cm(t){sl.current===t&&(Mt(Di),Mt(sl))}var Et=Wa(0);function qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qh=[];function bm(){for(var t=0;t<Qh.length;t++)Qh[t]._workInProgressVersionPrimary=null;Qh.length=0}var wc=sa.ReactCurrentDispatcher,ep=sa.ReactCurrentBatchConfig,Ar=0,Tt=null,Wt=null,Zt=null,Xc=!1,qo=!1,ll=0,DC=0;function cn(){throw Error(oe(321))}function Lm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function Im(t,e,n,i,a,r){if(Ar=r,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wc.current=t===null||t.memoizedState===null?UC:OC,t=n(i,a),qo){r=0;do{if(qo=!1,ll=0,25<=r)throw Error(oe(301));r+=1,Zt=Wt=null,e.updateQueue=null,wc.current=zC,t=n(i,a)}while(qo)}if(wc.current=$c,e=Wt!==null&&Wt.next!==null,Ar=0,Zt=Wt=Tt=null,Xc=!1,e)throw Error(oe(300));return t}function Am(){var t=ll!==0;return ll=0,t}function Ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Tt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function ri(){if(Wt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=Zt===null?Tt.memoizedState:Zt.next;if(e!==null)Zt=e,Wt=t;else{if(t===null)throw Error(oe(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Zt===null?Tt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function ul(t,e){return typeof e=="function"?e(t):e}function tp(t){var e=ri(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Wt,a=i.baseQueue,r=n.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}i.baseQueue=a=r,n.pending=null}if(a!==null){r=a.next,i=i.baseState;var o=s=null,l=null,u=r;do{var f=u.lane;if((Ar&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,s=i):l=l.next=p,Tt.lanes|=f,Er|=f}u=u.next}while(u!==null&&u!==r);l===null?s=i:l.next=o,gi(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){a=t;do r=a.lane,Tt.lanes|=r,Er|=r,a=a.next;while(a!==t)}else a===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function np(t){var e=ri(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);gi(r,e.memoizedState)||(bn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function uv(){}function cv(t,e){var n=Tt,i=ri(),a=e(),r=!gi(i.memoizedState,a);if(r&&(i.memoizedState=a,bn=!0),i=i.queue,Em(hv.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,cl(9,fv.bind(null,n,i,a,e),void 0,null),Kt===null)throw Error(oe(349));Ar&30||dv(n,e,a)}return a}function dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fv(t,e,n,i){e.value=n,e.getSnapshot=i,pv(e)&&mv(t)}function hv(t,e,n){return n(function(){pv(e)&&mv(t)})}function pv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function mv(t){var e=aa(t,1);e!==null&&mi(e,t,1,-1)}function Bx(t){var e=Ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:t},e.queue=t,t=t.dispatch=BC.bind(null,Tt,t),[e.memoizedState,t]}function cl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gv(){return ri().memoizedState}function Cc(t,e,n,i){var a=Ri();Tt.flags|=t,a.memoizedState=cl(1|e,n,void 0,i===void 0?null:i)}function rd(t,e,n,i){var a=ri();i=i===void 0?null:i;var r=void 0;if(Wt!==null){var s=Wt.memoizedState;if(r=s.destroy,i!==null&&Lm(i,s.deps)){a.memoizedState=cl(e,n,r,i);return}}Tt.flags|=t,a.memoizedState=cl(1|e,n,r,i)}function Ux(t,e){return Cc(8390656,8,t,e)}function Em(t,e){return rd(2048,8,t,e)}function xv(t,e){return rd(4,2,t,e)}function yv(t,e){return rd(4,4,t,e)}function vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _v(t,e,n){return n=n!=null?n.concat([t]):null,rd(4,4,vv.bind(null,e,t),n)}function Tm(){}function Sv(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Mv(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function wv(t,e,n){return Ar&21?(gi(n,e)||(n=Ay(),Tt.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=n)}function FC(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=ep.transition;ep.transition={};try{t(!1),e()}finally{lt=n,ep.transition=i}}function Cv(){return ri().memoizedState}function NC(t,e,n){var i=Oa(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},bv(t))Lv(e,n);else if(n=sv(t,e,n,i),n!==null){var a=_n();mi(n,t,i,a),Iv(n,e,i)}}function BC(t,e,n){var i=Oa(t),a={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(bv(t))Lv(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,gi(o,s)){var l=e.interleaved;l===null?(a.next=a,Sm(e)):(a.next=l.next,l.next=a),e.interleaved=a;return}}catch{}finally{}n=sv(t,e,a,i),n!==null&&(a=_n(),mi(n,t,i,a),Iv(n,e,i))}}function bv(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function Lv(t,e){qo=Xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,om(t,n)}}var $c={readContext:ai,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},UC={readContext:ai,useCallback:function(t,e){return Ri().memoizedState=[t,e===void 0?null:e],t},useContext:ai,useEffect:Ux,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4194308,4,vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cc(4,2,t,e)},useMemo:function(t,e){var n=Ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=NC.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=Ri();return t={current:t},e.memoizedState=t},useState:Bx,useDebugValue:Tm,useDeferredValue:function(t){return Ri().memoizedState=t},useTransition:function(){var t=Bx(!1),e=t[0];return t=FC.bind(null,t[1]),Ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,a=Ri();if(Ct){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Kt===null)throw Error(oe(349));Ar&30||dv(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,Ux(hv.bind(null,i,r,t),[t]),i.flags|=2048,cl(9,fv.bind(null,i,r,n,e),void 0,null),n},useId:function(){var t=Ri(),e=Kt.identifierPrefix;if(Ct){var n=ea,i=Qi;n=(i&~(1<<32-pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ll++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OC={readContext:ai,useCallback:Sv,useContext:ai,useEffect:Em,useImperativeHandle:_v,useInsertionEffect:xv,useLayoutEffect:yv,useMemo:Mv,useReducer:tp,useRef:gv,useState:function(){return tp(ul)},useDebugValue:Tm,useDeferredValue:function(t){var e=ri();return wv(e,Wt.memoizedState,t)},useTransition:function(){var t=tp(ul)[0],e=ri().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:cv,useId:Cv,unstable_isNewReconciler:!1},zC={readContext:ai,useCallback:Sv,useContext:ai,useEffect:Em,useImperativeHandle:_v,useInsertionEffect:xv,useLayoutEffect:yv,useMemo:Mv,useReducer:np,useRef:gv,useState:function(){return np(ul)},useDebugValue:Tm,useDeferredValue:function(t){var e=ri();return Wt===null?e.memoizedState=t:wv(e,Wt.memoizedState,t)},useTransition:function(){var t=np(ul)[0],e=ri().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:cv,useId:Cv,unstable_isNewReconciler:!1};function di(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sd={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),a=Oa(t),r=ta(i,a);r.payload=e,n!=null&&(r.callback=n),e=Ba(t,r,a),e!==null&&(mi(e,t,a,i),Mc(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),a=Oa(t),r=ta(i,a);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Ba(t,r,a),e!==null&&(mi(e,t,a,i),Mc(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=Oa(t),a=ta(n,i);a.tag=2,e!=null&&(a.callback=e),e=Ba(t,a,i),e!==null&&(mi(e,t,i,n),Mc(e,t,i))}};function Ox(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!nl(n,i)||!nl(a,r):!0}function Av(t,e,n){var i=!1,a=Ha,r=e.contextType;return typeof r=="object"&&r!==null?r=ai(r):(a=In(e)?Lr:hn.current,i=e.contextTypes,r=(i=i!=null)?Ss(t,a):Ha),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sd,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=r),e}function zx(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sd.enqueueReplaceState(e,e.state,null)}function Up(t,e,n,i){var a=t.stateNode;a.props=n,a.state=t.memoizedState,a.refs={},Mm(t);var r=e.contextType;typeof r=="object"&&r!==null?a.context=ai(r):(r=In(e)?Lr:hn.current,a.context=Ss(t,r)),a.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Bp(t,e,r,n),a.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&sd.enqueueReplaceState(a,a.state,null),Wc(t,n,a,i),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=gw(i),i=i.return;while(i);var a=n}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:a,digest:null}}function ip(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Op(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VC=typeof WeakMap=="function"?WeakMap:Map;function Ev(t,e,n){n=ta(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zc||(Zc=!0,Zp=i),Op(t,e)},n}function Tv(t,e,n){n=ta(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var a=e.value;n.payload=function(){return i(a)},n.callback=function(){Op(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Op(t,e),typeof i!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Vx(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new VC;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(a.add(n),t=tb.bind(null,t,e,n),e.then(t,t))}function Hx(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gx(t,e,n,i,a){return t.mode&1?(t.flags|=65536,t.lanes=a,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ta(-1,1),e.tag=2,Ba(n,e,1))),n.lanes|=1),t)}var HC=sa.ReactCurrentOwner,bn=!1;function vn(t,e,n,i){e.child=t===null?rv(e,null,n,i):ws(e,t.child,n,i)}function Wx(t,e,n,i,a){n=n.render;var r=e.ref;return ys(e,a),i=Im(t,e,n,i,r,a),n=Am(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,ra(t,e,a)):(Ct&&n&&mm(e),e.flags|=1,vn(t,e,i,a),e.child)}function qx(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!Um(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,Rv(t,e,r,i,a)):(t=Ac(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(s,i)&&t.ref===e.ref)return ra(t,e,a)}return e.flags|=1,t=za(r,i),t.ref=e.ref,t.return=e,e.child=t}function Rv(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(nl(r,i)&&t.ref===e.ref)if(bn=!1,e.pendingProps=i=r,(t.lanes&a)!==0)t.flags&131072&&(bn=!0);else return e.lanes=t.lanes,ra(t,e,a)}return zp(t,e,n,i,a)}function Pv(t,e,n){var i=e.pendingProps,a=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(hs,Un),Un|=n;else{if(!(n&1073741824))return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(hs,Un),Un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:n,yt(hs,Un),Un|=i}else r!==null?(i=r.baseLanes|n,e.memoizedState=null):i=n,yt(hs,Un),Un|=i;return vn(t,e,a,n),e.child}function kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zp(t,e,n,i,a){var r=In(n)?Lr:hn.current;return r=Ss(e,r),ys(e,a),n=Im(t,e,n,i,r,a),i=Am(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,ra(t,e,a)):(Ct&&i&&mm(e),e.flags|=1,vn(t,e,n,a),e.child)}function Xx(t,e,n,i,a){if(In(n)){var r=!0;Oc(e)}else r=!1;if(ys(e,a),e.stateNode===null)bc(t,e),Av(e,n,i),Up(e,n,i,a),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ai(u):(u=In(n)?Lr:hn.current,u=Ss(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&zx(e,s,i,u),Aa=!1;var d=e.memoizedState;s.state=d,Wc(e,i,s,a),l=e.memoizedState,o!==i||d!==l||Ln.current||Aa?(typeof f=="function"&&(Bp(e,n,f,i),l=e.memoizedState),(o=Aa||Ox(e,n,o,i,d,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,ov(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:di(e.type,o),s.props=u,p=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=In(n)?Lr:hn.current,l=Ss(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||d!==l)&&zx(e,s,i,l),Aa=!1,d=e.memoizedState,s.state=d,Wc(e,i,s,a);var x=e.memoizedState;o!==p||d!==x||Ln.current||Aa?(typeof g=="function"&&(Bp(e,n,g,i),x=e.memoizedState),(u=Aa||Ox(e,n,u,i,d,x,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Vp(t,e,n,i,r,a)}function Vp(t,e,n,i,a,r){kv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return a&&Rx(e,n,!1),ra(t,e,r);i=e.stateNode,HC.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=ws(e,t.child,null,r),e.child=ws(e,null,o,r)):vn(t,e,o,r),e.memoizedState=i.state,a&&Rx(e,n,!0),e.child}function Dv(t){var e=t.stateNode;e.pendingContext?Tx(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tx(t,e.context,!1),wm(t,e.containerInfo)}function $x(t,e,n,i,a){return Ms(),xm(a),e.flags|=256,vn(t,e,n,i),e.child}var Hp={dehydrated:null,treeContext:null,retryLane:0};function Gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fv(t,e,n){var i=e.pendingProps,a=Et.current,r=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(a&2)!==0),o?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(a|=1),yt(Et,a&1),t===null)return Fp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,r?(i=e.mode,r=e.child,s={mode:"hidden",children:s},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=s):r=ud(s,i,0,null),t=br(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=Gp(n),e.memoizedState=Hp,t):Rm(e,s));if(a=t.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return GC(t,e,s,i,o,a,n);if(r){r=i.fallback,s=e.mode,a=t.child,o=a.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==a?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=za(a,l),i.subtreeFlags=a.subtreeFlags&14680064),o!==null?r=za(o,r):(r=br(r,s,n,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,i=r,r=e.child,s=t.child.memoizedState,s=s===null?Gp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},r.memoizedState=s,r.childLanes=t.childLanes&~n,e.memoizedState=Hp,i}return r=t.child,t=r.sibling,i=za(r,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rm(t,e){return e=ud({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gc(t,e,n,i){return i!==null&&xm(i),ws(e,t.child,null,n),t=Rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GC(t,e,n,i,a,r,s){if(n)return e.flags&256?(e.flags&=-257,i=ip(Error(oe(422))),gc(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=i.fallback,a=e.mode,i=ud({mode:"visible",children:i.children},a,0,null),r=br(r,a,s,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,e.mode&1&&ws(e,t.child,null,s),e.child.memoizedState=Gp(s),e.memoizedState=Hp,r);if(!(e.mode&1))return gc(t,e,s,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var o=i.dgst;return i=o,r=Error(oe(419)),i=ip(r,i,void 0),gc(t,e,s,i)}if(o=(s&t.childLanes)!==0,bn||o){if(i=Kt,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(i.suspendedLanes|s)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,aa(t,a),mi(i,t,a,-1))}return Bm(),i=ip(Error(oe(421))),gc(t,e,s,i)}return a.data==="$?"?(e.flags|=128,e.child=t.child,e=nb.bind(null,t),a._reactRetry=e,null):(t=r.treeContext,On=Na(a.nextSibling),zn=e,Ct=!0,hi=null,t!==null&&(ei[ti++]=Qi,ei[ti++]=ea,ei[ti++]=Ir,Qi=t.id,ea=t.overflow,Ir=e),e=Rm(e,i.children),e.flags|=4096,e)}function Yx(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Np(t.return,e,n)}function ap(t,e,n,i,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function Nv(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;if(vn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yx(t,n,e);else if(t.tag===19)Yx(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&qc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),ap(e,!1,a,n,r);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&qc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}ap(e,!0,n,null,r);break;case"together":ap(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ra(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=za(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=za(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WC(t,e,n){switch(e.tag){case 3:Dv(e),Ms();break;case 5:lv(e);break;case 1:In(e.type)&&Oc(e);break;case 4:wm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,a=e.memoizedProps.value;yt(Hc,i._currentValue),i._currentValue=a;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?Fv(t,e,n):(yt(Et,Et.current&1),t=ra(t,e,n),t!==null?t.sibling:null);yt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Nv(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),yt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Pv(t,e,n)}return ra(t,e,n)}var Bv,Wp,Uv,Ov;Bv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wp=function(){};Uv=function(t,e,n,i){var a=t.memoizedProps;if(a!==i){t=e.stateNode,wr(Di.current);var r=null;switch(n){case"input":a=fp(t,a),i=fp(t,i),r=[];break;case"select":a=Rt({},a,{value:void 0}),i=Rt({},i,{value:void 0}),r=[];break;case"textarea":a=mp(t,a),i=mp(t,i),r=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bc)}xp(n,i);var s;n=null;for(u in a)if(!i.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zo.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in i){var l=i[u];if(o=a?.[u],i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(r||(r=[]),r.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(r=r||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&St("scroll",t),r||o===l||(r=[])):(r=r||[]).push(u,l))}n&&(r=r||[]).push("style",n);var u=r;(e.updateQueue=u)&&(e.flags|=4)}};Ov=function(t,e,n,i){n!==i&&(e.flags|=4)};function ko(t,e){if(!Ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function dn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qC(t,e,n){var i=e.pendingProps;switch(gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(e),null;case 1:return In(e.type)&&Uc(),dn(e),null;case 3:return i=e.stateNode,Cs(),Mt(Ln),Mt(hn),bm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hi!==null&&(Jp(hi),hi=null))),Wp(t,e),dn(e),null;case 5:Cm(e);var a=wr(ol.current);if(n=e.type,t!==null&&e.stateNode!=null)Uv(t,e,n,i,a),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return dn(e),null}if(t=wr(Di.current),pc(e)){i=e.stateNode,n=e.type;var r=e.memoizedProps;switch(i[Pi]=e,i[rl]=r,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(a=0;a<Oo.length;a++)St(Oo[a],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":nx(i,r),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},St("invalid",i);break;case"textarea":ax(i,r),St("invalid",i)}xp(n,r),a=null;for(var s in r)if(r.hasOwnProperty(s)){var o=r[s];s==="children"?typeof o=="string"?i.textContent!==o&&(r.suppressHydrationWarning!==!0&&hc(i.textContent,o,t),a=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&hc(i.textContent,o,t),a=["children",""+o]):Zo.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&St("scroll",i)}switch(n){case"input":tc(i),ix(i,r,!0);break;case"textarea":tc(i),rx(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=Bc)}i=a,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Pi]=e,t[rl]=i,Bv(t,e,!1,!1),e.stateNode=t;e:{switch(s=yp(n,i),n){case"dialog":St("cancel",t),St("close",t),a=i;break;case"iframe":case"object":case"embed":St("load",t),a=i;break;case"video":case"audio":for(a=0;a<Oo.length;a++)St(Oo[a],t);a=i;break;case"source":St("error",t),a=i;break;case"img":case"image":case"link":St("error",t),St("load",t),a=i;break;case"details":St("toggle",t),a=i;break;case"input":nx(t,i),a=fp(t,i),St("invalid",t);break;case"option":a=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},a=Rt({},i,{value:void 0}),St("invalid",t);break;case"textarea":ax(t,i),a=mp(t,i),St("invalid",t);break;default:a=i}xp(n,a),o=a;for(r in o)if(o.hasOwnProperty(r)){var l=o[r];r==="style"?gy(t,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&py(t,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ko(t,l):typeof l=="number"&&Ko(t,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Zo.hasOwnProperty(r)?l!=null&&r==="onScroll"&&St("scroll",t):l!=null&&tm(t,r,l,s))}switch(n){case"input":tc(t),ix(t,i,!1);break;case"textarea":tc(t),rx(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Va(i.value));break;case"select":t.multiple=!!i.multiple,r=i.value,r!=null?ps(t,!!i.multiple,r,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=Bc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dn(e),null;case 6:if(t&&e.stateNode!=null)Ov(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=wr(ol.current),wr(Di.current),pc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Pi]=e,(r=i.nodeValue!==n)&&(t=zn,t!==null))switch(t.tag){case 3:hc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hc(i.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Pi]=e,e.stateNode=i}return dn(e),null;case 13:if(Mt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ct&&On!==null&&e.mode&1&&!(e.flags&128))iv(),Ms(),e.flags|=98560,r=!1;else if(r=pc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(oe(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(oe(317));r[Pi]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dn(e),r=!1}else hi!==null&&(Jp(hi),hi=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?qt===0&&(qt=3):Bm())),e.updateQueue!==null&&(e.flags|=4),dn(e),null);case 4:return Cs(),Wp(t,e),t===null&&il(e.stateNode.containerInfo),dn(e),null;case 10:return _m(e.type._context),dn(e),null;case 17:return In(e.type)&&Uc(),dn(e),null;case 19:if(Mt(Et),r=e.memoizedState,r===null)return dn(e),null;if(i=(e.flags&128)!==0,s=r.rendering,s===null)if(i)ko(r,!1);else{if(qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=qc(t),s!==null){for(e.flags|=128,ko(r,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)r=n,t=i,r.flags&=14680066,s=r.alternate,s===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=s.childLanes,r.lanes=s.lanes,r.child=s.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=s.memoizedProps,r.memoizedState=s.memoizedState,r.updateQueue=s.updateQueue,r.type=s.type,t=s.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Et,Et.current&1|2),e.child}t=t.sibling}r.tail!==null&&Bt()>Ls&&(e.flags|=128,i=!0,ko(r,!1),e.lanes=4194304)}else{if(!i)if(t=qc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!Ct)return dn(e),null}else 2*Bt()-r.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,i=!0,ko(r,!1),e.lanes=4194304);r.isBackwards?(s.sibling=e.child,e.child=s):(n=r.last,n!==null?n.sibling=s:e.child=s,r.last=s)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Bt(),e.sibling=null,n=Et.current,yt(Et,i?n&1|2:n&1),e):(dn(e),null);case 22:case 23:return Nm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Un&1073741824&&(dn(e),e.subtreeFlags&6&&(e.flags|=8192)):dn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function XC(t,e){switch(gm(e),e.tag){case 1:return In(e.type)&&Uc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),Mt(Ln),Mt(hn),bm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cm(e),null;case 13:if(Mt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Et),null;case 4:return Cs(),null;case 10:return _m(e.type._context),null;case 22:case 23:return Nm(),null;case 24:return null;default:return null}}var xc=!1,fn=!1,$C=typeof WeakSet=="function"?WeakSet:Set,Te=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){kt(t,e,i)}else n.current=null}function qp(t,e,n){try{n()}catch(i){kt(t,e,i)}}var Zx=!1;function YC(t,e){if(Ap=Dc,t=Wy(),pm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,f=0,p=t,d=null;t:for(;;){for(var g;p!==n||a!==0&&p.nodeType!==3||(o=s+a),p!==r||i!==0&&p.nodeType!==3||(l=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)d=p,p=g;for(;;){if(p===t)break t;if(d===n&&++u===a&&(o=s),d===r&&++f===i&&(l=s),(g=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ep={focusedElem:t,selectionRange:n},Dc=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,y=x.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?C:di(e.type,C),y);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(M){kt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return x=Zx,Zx=!1,x}function Xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var r=a.destroy;a.destroy=void 0,r!==void 0&&qp(e,n,r)}a=a.next}while(a!==i)}}function od(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zv(t){var e=t.alternate;e!==null&&(t.alternate=null,zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pi],delete e[rl],delete e[Pp],delete e[TC],delete e[RC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vv(t){return t.tag===5||t.tag===3||t.tag===4}function Kx(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $p(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bc));else if(i!==4&&(t=t.child,t!==null))for($p(t,e,n),t=t.sibling;t!==null;)$p(t,e,n),t=t.sibling}function Yp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yp(t,e,n),t=t.sibling;t!==null;)Yp(t,e,n),t=t.sibling}var Qt=null,fi=!1;function La(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(ki&&typeof ki.onCommitFiberUnmount=="function")try{ki.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:fn||fs(n,e);case 6:var i=Qt,a=fi;Qt=null,La(t,e,n),Qt=i,fi=a,Qt!==null&&(fi?(t=Qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(fi?(t=Qt,n=n.stateNode,t.nodeType===8?jh(t.parentNode,n):t.nodeType===1&&jh(t,n),el(t)):jh(Qt,n.stateNode));break;case 4:i=Qt,a=fi,Qt=n.stateNode.containerInfo,fi=!0,La(t,e,n),Qt=i,fi=a;break;case 0:case 11:case 14:case 15:if(!fn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var r=a,s=r.destroy;r=r.tag,s!==void 0&&(r&2||r&4)&&qp(n,e,s),a=a.next}while(a!==i)}La(t,e,n);break;case 1:if(!fn&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){kt(n,e,o)}La(t,e,n);break;case 21:La(t,e,n);break;case 22:n.mode&1?(fn=(i=fn)||n.memoizedState!==null,La(t,e,n),fn=i):La(t,e,n);break;default:La(t,e,n)}}function jx(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $C),e.forEach(function(i){var a=ib.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}}function ci(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Qt=o.stateNode,fi=!1;break e;case 3:Qt=o.stateNode.containerInfo,fi=!0;break e;case 4:Qt=o.stateNode.containerInfo,fi=!0;break e}o=o.return}if(Qt===null)throw Error(oe(160));Hv(r,s,a),Qt=null,fi=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){kt(a,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(e,t),Ti(t),i&4){try{Xo(3,t,t.return),od(3,t)}catch(C){kt(t,t.return,C)}try{Xo(5,t,t.return)}catch(C){kt(t,t.return,C)}}break;case 1:ci(e,t),Ti(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(ci(e,t),Ti(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var a=t.stateNode;try{Ko(a,"")}catch(C){kt(t,t.return,C)}}if(i&4&&(a=t.stateNode,a!=null)){var r=t.memoizedProps,s=n!==null?n.memoizedProps:r,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&dy(a,r),yp(o,s);var u=yp(o,r);for(s=0;s<l.length;s+=2){var f=l[s],p=l[s+1];f==="style"?gy(a,p):f==="dangerouslySetInnerHTML"?py(a,p):f==="children"?Ko(a,p):tm(a,f,p,u)}switch(o){case"input":hp(a,r);break;case"textarea":fy(a,r);break;case"select":var d=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?ps(a,!!r.multiple,g,!1):d!==!!r.multiple&&(r.defaultValue!=null?ps(a,!!r.multiple,r.defaultValue,!0):ps(a,!!r.multiple,r.multiple?[]:"",!1))}a[rl]=r}catch(C){kt(t,t.return,C)}}break;case 6:if(ci(e,t),Ti(t),i&4){if(t.stateNode===null)throw Error(oe(162));a=t.stateNode,r=t.memoizedProps;try{a.nodeValue=r}catch(C){kt(t,t.return,C)}}break;case 3:if(ci(e,t),Ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(C){kt(t,t.return,C)}break;case 4:ci(e,t),Ti(t);break;case 13:ci(e,t),Ti(t),a=t.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(Dm=Bt())),i&4&&jx(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(fn=(u=fn)||f,ci(e,t),fn=u):ci(e,t),Ti(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Te=t,f=t.child;f!==null;){for(p=Te=f;Te!==null;){switch(d=Te,g=d.child,d.tag){case 0:case 11:case 14:case 15:Xo(4,d,d.return);break;case 1:fs(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(C){kt(i,n,C)}}break;case 5:fs(d,d.return);break;case 22:if(d.memoizedState!==null){Qx(p);continue}}g!==null?(g.return=d,Te=g):Qx(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,u?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=my("display",s))}catch(C){kt(t,t.return,C)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(C){kt(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ci(e,t),Ti(t),i&4&&jx(t);break;case 21:break;default:ci(e,t),Ti(t)}}function Ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vv(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ko(a,""),i.flags&=-33);var r=Kx(t);Yp(t,r,a);break;case 3:case 4:var s=i.stateNode.containerInfo,o=Kx(t);$p(t,o,s);break;default:throw Error(oe(161))}}catch(l){kt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZC(t,e,n){Te=t,Wv(t,e,n)}function Wv(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var a=Te,r=a.child;if(a.tag===22&&i){var s=a.memoizedState!==null||xc;if(!s){var o=a.alternate,l=o!==null&&o.memoizedState!==null||fn;o=xc;var u=fn;if(xc=s,(fn=l)&&!u)for(Te=a;Te!==null;)s=Te,l=s.child,s.tag===22&&s.memoizedState!==null?ey(a):l!==null?(l.return=s,Te=l):ey(a);for(;r!==null;)Te=r,Wv(r,e,n),r=r.sibling;Te=a,xc=o,fn=u}Jx(t,e,n)}else a.subtreeFlags&8772&&r!==null?(r.return=a,Te=r):Jx(t,e,n)}}function Jx(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:fn||od(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!fn)if(n===null)i.componentDidMount();else{var a=e.elementType===e.type?n.memoizedProps:di(e.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&Nx(e,r,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nx(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&el(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}fn||e.flags&512&&Xp(e)}catch(d){kt(e,e.return,d)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Qx(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function ey(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{od(4,e)}catch(l){kt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var a=e.return;try{i.componentDidMount()}catch(l){kt(e,a,l)}}var r=e.return;try{Xp(e)}catch(l){kt(e,r,l)}break;case 5:var s=e.return;try{Xp(e)}catch(l){kt(e,s,l)}}}catch(l){kt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var KC=Math.ceil,Yc=sa.ReactCurrentDispatcher,Pm=sa.ReactCurrentOwner,ii=sa.ReactCurrentBatchConfig,nt=0,Kt=null,zt=null,en=0,Un=0,hs=Wa(0),qt=0,dl=null,Er=0,ld=0,km=0,$o=null,Cn=null,Dm=0,Ls=1/0,ji=null,Zc=!1,Zp=null,Ua=null,yc=!1,Pa=null,Kc=0,Yo=0,Kp=null,Lc=-1,Ic=0;function _n(){return nt&6?Bt():Lc!==-1?Lc:Lc=Bt()}function Oa(t){return t.mode&1?nt&2&&en!==0?en&-en:kC.transition!==null?(Ic===0&&(Ic=Ay()),Ic):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Fy(t.type)),t):1}function mi(t,e,n,i){if(50<Yo)throw Yo=0,Kp=null,Error(oe(185));fl(t,n,i),(!(nt&2)||t!==Kt)&&(t===Kt&&(!(nt&2)&&(ld|=n),qt===4&&Ta(t,en)),An(t,i),n===1&&nt===0&&!(e.mode&1)&&(Ls=Bt()+500,ad&&qa()))}function An(t,e){var n=t.callbackNode;Fw(t,e);var i=kc(t,t===Kt?en:0);if(i===0)n!==null&&lx(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lx(n),e===1)t.tag===0?PC(ty.bind(null,t)):ev(ty.bind(null,t)),AC(function(){!(nt&6)&&qa()}),n=null;else{switch(Ey(i)){case 1:n=sm;break;case 4:n=Ly;break;case 16:n=Pc;break;case 536870912:n=Iy;break;default:n=Pc}n=Jv(n,qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qv(t,e){if(Lc=-1,Ic=0,nt&6)throw Error(oe(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=kc(t,t===Kt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=jc(t,i);else{e=i;var a=nt;nt|=2;var r=$v();(Kt!==t||en!==e)&&(ji=null,Ls=Bt()+500,Cr(t,e));do try{QC();break}catch(o){Xv(t,o)}while(!0);vm(),Yc.current=r,nt=a,zt!==null?e=0:(Kt=null,en=0,e=qt)}if(e!==0){if(e===2&&(a=wp(t),a!==0&&(i=a,e=jp(t,a))),e===1)throw n=dl,Cr(t,0),Ta(t,i),An(t,Bt()),n;if(e===6)Ta(t,i);else{if(a=t.current.alternate,!(i&30)&&!jC(a)&&(e=jc(t,i),e===2&&(r=wp(t),r!==0&&(i=r,e=jp(t,r))),e===1))throw n=dl,Cr(t,0),Ta(t,i),An(t,Bt()),n;switch(t.finishedWork=a,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:_r(t,Cn,ji);break;case 3:if(Ta(t,i),(i&130023424)===i&&(e=Dm+500-Bt(),10<e)){if(kc(t,0)!==0)break;if(a=t.suspendedLanes,(a&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&a;break}t.timeoutHandle=Rp(_r.bind(null,t,Cn,ji),e);break}_r(t,Cn,ji);break;case 4:if(Ta(t,i),(i&4194240)===i)break;for(e=t.eventTimes,a=-1;0<i;){var s=31-pi(i);r=1<<s,s=e[s],s>a&&(a=s),i&=~r}if(i=a,i=Bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*KC(i/1960))-i,10<i){t.timeoutHandle=Rp(_r.bind(null,t,Cn,ji),i);break}_r(t,Cn,ji);break;case 5:_r(t,Cn,ji);break;default:throw Error(oe(329))}}}return An(t,Bt()),t.callbackNode===n?qv.bind(null,t):null}function jp(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=jc(t,e),t!==2&&(e=Cn,Cn=n,e!==null&&Jp(e)),t}function Jp(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function jC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!gi(r(),a))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ta(t,e){for(e&=~km,e&=~ld,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),i=1<<n;t[n]=-1,e&=~i}}function ty(t){if(nt&6)throw Error(oe(327));vs();var e=kc(t,0);if(!(e&1))return An(t,Bt()),null;var n=jc(t,e);if(t.tag!==0&&n===2){var i=wp(t);i!==0&&(e=i,n=jp(t,i))}if(n===1)throw n=dl,Cr(t,0),Ta(t,e),An(t,Bt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,Cn,ji),An(t,Bt()),null}function Fm(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Ls=Bt()+500,ad&&qa())}}function Tr(t){Pa!==null&&Pa.tag===0&&!(nt&6)&&vs();var e=nt;nt|=1;var n=ii.transition,i=lt;try{if(ii.transition=null,lt=1,t)return t()}finally{lt=i,ii.transition=n,nt=e,!(nt&6)&&qa()}}function Nm(){Un=hs.current,Mt(hs)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IC(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(gm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uc();break;case 3:Cs(),Mt(Ln),Mt(hn),bm();break;case 5:Cm(i);break;case 4:Cs();break;case 13:Mt(Et);break;case 19:Mt(Et);break;case 10:_m(i.type._context);break;case 22:case 23:Nm()}n=n.return}if(Kt=t,zt=t=za(t.current,null),en=Un=e,qt=0,dl=null,km=ld=Er=0,Cn=$o=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var a=i.next,r=n.pending;if(r!==null){var s=r.next;r.next=a,i.next=s}n.pending=i}Mr=null}return t}function Xv(t,e){do{var n=zt;try{if(vm(),wc.current=$c,Xc){for(var i=Tt.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Xc=!1}if(Ar=0,Zt=Wt=Tt=null,qo=!1,ll=0,Pm.current=null,n===null||n.return===null){qt=1,dl=e,zt=null;break}e:{var r=t,s=n.return,o=n,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Hx(s);if(g!==null){g.flags&=-257,Gx(g,s,o,r,e),g.mode&1&&Vx(r,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var C=new Set;C.add(l),e.updateQueue=C}else x.add(l);break e}else{if(!(e&1)){Vx(r,u,e),Bm();break e}l=Error(oe(426))}}else if(Ct&&o.mode&1){var y=Hx(s);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Gx(y,s,o,r,e),xm(bs(l,o));break e}}r=l=bs(l,o),qt!==4&&(qt=2),$o===null?$o=[r]:$o.push(r),r=s;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var c=Ev(r,l,e);Fx(r,c);break e;case 1:o=l;var m=r.type,w=r.stateNode;if(!(r.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ua===null||!Ua.has(w)))){r.flags|=65536,e&=-e,r.lanes|=e;var M=Tv(r,o,e);Fx(r,M);break e}}r=r.return}while(r!==null)}Zv(n)}catch(I){e=I,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function $v(){var t=Yc.current;return Yc.current=$c,t===null?$c:t}function Bm(){(qt===0||qt===3||qt===2)&&(qt=4),Kt===null||!(Er&268435455)&&!(ld&268435455)||Ta(Kt,en)}function jc(t,e){var n=nt;nt|=2;var i=$v();(Kt!==t||en!==e)&&(ji=null,Cr(t,e));do try{JC();break}catch(a){Xv(t,a)}while(!0);if(vm(),nt=n,Yc.current=i,zt!==null)throw Error(oe(261));return Kt=null,en=0,qt}function JC(){for(;zt!==null;)Yv(zt)}function QC(){for(;zt!==null&&!Lw();)Yv(zt)}function Yv(t){var e=jv(t.alternate,t,Un);t.memoizedProps=t.pendingProps,e===null?Zv(t):zt=e,Pm.current=null}function Zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XC(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,zt=null;return}}else if(n=qC(n,e,Un),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);qt===0&&(qt=5)}function _r(t,e,n){var i=lt,a=ii.transition;try{ii.transition=null,lt=1,eb(t,e,n,i)}finally{ii.transition=a,lt=i}return null}function eb(t,e,n,i){do vs();while(Pa!==null);if(nt&6)throw Error(oe(327));n=t.finishedWork;var a=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(Nw(t,r),t===Kt&&(zt=Kt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yc||(yc=!0,Jv(Pc,function(){return vs(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=ii.transition,ii.transition=null;var s=lt;lt=1;var o=nt;nt|=4,Pm.current=null,YC(t,n),Gv(n,t),MC(Ep),Dc=!!Ap,Ep=Ap=null,t.current=n,ZC(n,t,a),Iw(),nt=o,lt=s,ii.transition=r}else t.current=n;if(yc&&(yc=!1,Pa=t,Kc=a),r=t.pendingLanes,r===0&&(Ua=null),Tw(n.stateNode,i),An(t,Bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)a=e[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(Zc)throw Zc=!1,t=Zp,Zp=null,t;return Kc&1&&t.tag!==0&&vs(),r=t.pendingLanes,r&1?t===Kp?Yo++:(Yo=0,Kp=t):Yo=0,qa(),null}function vs(){if(Pa!==null){var t=Ey(Kc),e=ii.transition,n=lt;try{if(ii.transition=null,lt=16>t?16:t,Pa===null)var i=!1;else{if(t=Pa,Pa=null,Kc=0,nt&6)throw Error(oe(331));var a=nt;for(nt|=4,Te=t.current;Te!==null;){var r=Te,s=r.child;if(Te.flags&16){var o=r.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Te=u;Te!==null;){var f=Te;switch(f.tag){case 0:case 11:case 15:Xo(8,f,r)}var p=f.child;if(p!==null)p.return=f,Te=p;else for(;Te!==null;){f=Te;var d=f.sibling,g=f.return;if(zv(f),f===u){Te=null;break}if(d!==null){d.return=g,Te=d;break}Te=g}}}var x=r.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var y=C.sibling;C.sibling=null,C=y}while(C!==null)}}Te=r}}if(r.subtreeFlags&2064&&s!==null)s.return=r,Te=s;else e:for(;Te!==null;){if(r=Te,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Xo(9,r,r.return)}var c=r.sibling;if(c!==null){c.return=r.return,Te=c;break e}Te=r.return}}var m=t.current;for(Te=m;Te!==null;){s=Te;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,Te=w;else e:for(s=m;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:od(9,o)}}catch(I){kt(o,o.return,I)}if(o===s){Te=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Te=M;break e}Te=o.return}}if(nt=a,qa(),ki&&typeof ki.onPostCommitFiberRoot=="function")try{ki.onPostCommitFiberRoot(Qc,t)}catch{}i=!0}return i}finally{lt=n,ii.transition=e}}return!1}function ny(t,e,n){e=bs(n,e),e=Ev(t,e,1),t=Ba(t,e,1),e=_n(),t!==null&&(fl(t,1,e),An(t,e))}function kt(t,e,n){if(t.tag===3)ny(t,t,n);else for(;e!==null;){if(e.tag===3){ny(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ua===null||!Ua.has(i))){t=bs(n,t),t=Tv(e,t,1),e=Ba(e,t,1),t=_n(),e!==null&&(fl(e,1,t),An(e,t));break}}e=e.return}}function tb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(en&n)===n&&(qt===4||qt===3&&(en&130023424)===en&&500>Bt()-Dm?Cr(t,0):km|=n),An(t,e)}function Kv(t,e){e===0&&(t.mode&1?(e=ac,ac<<=1,!(ac&130023424)&&(ac=4194304)):e=1);var n=_n();t=aa(t,e),t!==null&&(fl(t,e,n),An(t,n))}function nb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kv(t,n)}function ib(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Kv(t,n)}var jv;jv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ln.current)bn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bn=!1,WC(t,e,n);bn=!!(t.flags&131072)}else bn=!1,Ct&&e.flags&1048576&&tv(e,Vc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bc(t,e),t=e.pendingProps;var a=Ss(e,hn.current);ys(e,n),a=Im(null,e,i,t,a,n);var r=Am();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,In(i)?(r=!0,Oc(e)):r=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Mm(e),a.updater=sd,e.stateNode=a,a._reactInternals=e,Up(e,i,t,n),e=Vp(null,e,i,!0,r,n)):(e.tag=0,Ct&&r&&mm(e),vn(null,e,a,n),e=e.child),e;case 16:i=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,a=i._init,i=a(i._payload),e.type=i,a=e.tag=rb(i),t=di(i,t),a){case 0:e=zp(null,e,i,t,n);break e;case 1:e=Xx(null,e,i,t,n);break e;case 11:e=Wx(null,e,i,t,n);break e;case 14:e=qx(null,e,i,di(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:di(i,a),zp(t,e,i,a,n);case 1:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:di(i,a),Xx(t,e,i,a,n);case 3:e:{if(Dv(e),t===null)throw Error(oe(387));i=e.pendingProps,r=e.memoizedState,a=r.element,ov(t,e),Wc(e,i,null,n);var s=e.memoizedState;if(i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){a=bs(Error(oe(423)),e),e=$x(t,e,i,n,a);break e}else if(i!==a){a=bs(Error(oe(424)),e),e=$x(t,e,i,n,a);break e}else for(On=Na(e.stateNode.containerInfo.firstChild),zn=e,Ct=!0,hi=null,n=rv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===a){e=ra(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return lv(e),t===null&&Fp(e),i=e.type,a=e.pendingProps,r=t!==null?t.memoizedProps:null,s=a.children,Tp(i,a)?s=null:r!==null&&Tp(i,r)&&(e.flags|=32),kv(t,e),vn(t,e,s,n),e.child;case 6:return t===null&&Fp(e),null;case 13:return Fv(t,e,n);case 4:return wm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:di(i,a),Wx(t,e,i,a,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,a=e.pendingProps,r=e.memoizedProps,s=a.value,yt(Hc,i._currentValue),i._currentValue=s,r!==null)if(gi(r.value,s)){if(r.children===a.children&&!Ln.current){e=ra(t,e,n);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){s=r.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(r.tag===1){l=ta(-1,n&-n),l.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Np(r.return,n,e),o.lanes|=n;break}l=l.next}}else if(r.tag===10)s=r.type===e.type?null:r.child;else if(r.tag===18){if(s=r.return,s===null)throw Error(oe(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Np(s,n,e),s=r.sibling}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===e){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}vn(t,e,a.children,n),e=e.child}return e;case 9:return a=e.type,i=e.pendingProps.children,ys(e,n),a=ai(a),i=i(a),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,a=di(i,e.pendingProps),a=di(i.type,a),qx(t,e,i,a,n);case 15:return Rv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:di(i,a),bc(t,e),e.tag=1,In(i)?(t=!0,Oc(e)):t=!1,ys(e,n),Av(e,i,a),Up(e,i,a,n),Vp(null,e,i,!0,t,n);case 19:return Nv(t,e,n);case 22:return Pv(t,e,n)}throw Error(oe(156,e.tag))};function Jv(t,e){return by(t,e)}function ab(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,e,n,i){return new ab(t,e,n,i)}function Um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rb(t){if(typeof t=="function")return Um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===im)return 11;if(t===am)return 14}return 2}function za(t,e){var n=t.alternate;return n===null?(n=ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ac(t,e,n,i,a,r){var s=2;if(i=t,typeof t=="function")Um(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case is:return br(n.children,a,r,e);case nm:s=8,a|=8;break;case lp:return t=ni(12,n,e,a|2),t.elementType=lp,t.lanes=r,t;case up:return t=ni(13,n,e,a),t.elementType=up,t.lanes=r,t;case cp:return t=ni(19,n,e,a),t.elementType=cp,t.lanes=r,t;case ly:return ud(n,a,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sy:s=10;break e;case oy:s=9;break e;case im:s=11;break e;case am:s=14;break e;case Ia:s=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=ni(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function br(t,e,n,i){return t=ni(7,t,i,e),t.lanes=n,t}function ud(t,e,n,i){return t=ni(22,t,i,e),t.elementType=ly,t.lanes=n,t.stateNode={isHidden:!1},t}function rp(t,e,n){return t=ni(6,t,null,e),t.lanes=n,t}function sp(t,e,n){return e=ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sb(t,e,n,i,a){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gh(0),this.expirationTimes=Gh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gh(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Om(t,e,n,i,a,r,s,o,l){return t=new sb(t,e,n,o,l),e===1?(e=1,r===!0&&(e|=8)):e=0,r=ni(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mm(r),t}function ob(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qv(t){if(!t)return Ha;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(In(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(In(n))return Qy(t,n,e)}return e}function e_(t,e,n,i,a,r,s,o,l){return t=Om(n,i,!0,t,a,r,s,o,l),t.context=Qv(null),n=t.current,i=_n(),a=Oa(n),r=ta(i,a),r.callback=e??null,Ba(n,r,a),t.current.lanes=a,fl(t,a,i),An(t,i),t}function cd(t,e,n,i){var a=e.current,r=_n(),s=Oa(a);return n=Qv(n),e.context===null?e.context=n:e.pendingContext=n,e=ta(r,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ba(a,e,s),t!==null&&(mi(t,a,s,r),Mc(t,a,s)),s}function Jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zm(t,e){iy(t,e),(t=t.alternate)&&iy(t,e)}function lb(){return null}var t_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vm(t){this._internalRoot=t}dd.prototype.render=Vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));cd(t,e,null,null)};dd.prototype.unmount=Vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){cd(null,t,null,null)}),e[ia]=null}};function dd(t){this._internalRoot=t}dd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Py();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ea.length&&e!==0&&e<Ea[n].priority;n++);Ea.splice(n,0,t),n===0&&Dy(t)}};function Hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ay(){}function ub(t,e,n,i,a){if(a){if(typeof i=="function"){var r=i;i=function(){var u=Jc(s);r.call(u)}}var s=e_(e,i,t,0,null,!1,!1,"",ay);return t._reactRootContainer=s,t[ia]=s.current,il(t.nodeType===8?t.parentNode:t),Tr(),s}for(;a=t.lastChild;)t.removeChild(a);if(typeof i=="function"){var o=i;i=function(){var u=Jc(l);o.call(u)}}var l=Om(t,0,!1,null,null,!1,!1,"",ay);return t._reactRootContainer=l,t[ia]=l.current,il(t.nodeType===8?t.parentNode:t),Tr(function(){cd(e,l,n,i)}),l}function hd(t,e,n,i,a){var r=n._reactRootContainer;if(r){var s=r;if(typeof a=="function"){var o=a;a=function(){var l=Jc(s);o.call(l)}}cd(e,s,t,a)}else s=ub(n,e,t,a,i);return Jc(s)}Ty=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Uo(e.pendingLanes);n!==0&&(om(e,n|1),An(e,Bt()),!(nt&6)&&(Ls=Bt()+500,qa()))}break;case 13:Tr(function(){var i=aa(t,1);if(i!==null){var a=_n();mi(i,t,1,a)}}),zm(t,1)}};lm=function(t){if(t.tag===13){var e=aa(t,134217728);if(e!==null){var n=_n();mi(e,t,134217728,n)}zm(t,134217728)}};Ry=function(t){if(t.tag===13){var e=Oa(t),n=aa(t,e);if(n!==null){var i=_n();mi(n,t,e,i)}zm(t,e)}};Py=function(){return lt};ky=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};_p=function(t,e,n){switch(e){case"input":if(hp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=id(i);if(!a)throw Error(oe(90));cy(i),hp(i,a)}}}break;case"textarea":fy(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};vy=Fm;_y=Tr;var cb={usingClientEntryPoint:!1,Events:[pl,os,id,xy,yy,Fm]},Do={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},db={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sa.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wy(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||lb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Fo.isDisabled&&Fo.supportsFiber))try{Qc=Fo.inject(db),ki=Fo}catch{}var Fo;Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cb;Gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hm(e))throw Error(oe(200));return ob(t,e,null,n)};Gn.createRoot=function(t,e){if(!Hm(t))throw Error(oe(299));var n=!1,i="",a=t_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Om(t,1,!1,null,null,n,!1,i,a),t[ia]=e.current,il(t.nodeType===8?t.parentNode:t),new Vm(e)};Gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=wy(e),t=t===null?null:t.stateNode,t};Gn.flushSync=function(t){return Tr(t)};Gn.hydrate=function(t,e,n){if(!fd(e))throw Error(oe(200));return hd(null,t,e,!0,n)};Gn.hydrateRoot=function(t,e,n){if(!Hm(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,a=!1,r="",s=t_;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=e_(e,null,t,1,n??null,a,!1,r,s),t[ia]=e.current,il(t),i)for(t=0;t<i.length;t++)n=i[t],a=n._getVersion,a=a(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,a]:e.mutableSourceEagerHydrationData.push(n,a);return new dd(e)};Gn.render=function(t,e,n){if(!fd(e))throw Error(oe(200));return hd(null,t,e,!1,n)};Gn.unmountComponentAtNode=function(t){if(!fd(t))throw Error(oe(40));return t._reactRootContainer?(Tr(function(){hd(null,null,t,!1,function(){t._reactRootContainer=null,t[ia]=null})}),!0):!1};Gn.unstable_batchedUpdates=Fm;Gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fd(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return hd(t,e,n,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426"});var r_=Ki((nP,a_)=>{"use strict";function i_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i_)}catch(t){console.error(t)}}i_(),a_.exports=n_()});var o_=Ki(Gm=>{"use strict";var s_=r_();Gm.createRoot=s_.createRoot,Gm.hydrateRoot=s_.hydrateRoot;var iP});var u_=Ki(pd=>{"use strict";var fb=Ca(),hb=Symbol.for("react.element"),pb=Symbol.for("react.fragment"),mb=Object.prototype.hasOwnProperty,gb=fb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xb={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var i,a={},r=null,s=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)mb.call(e,i)&&!xb.hasOwnProperty(i)&&(a[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)a[i]===void 0&&(a[i]=e[i]);return{$$typeof:hb,type:t,key:r,ref:s,props:a,_owner:gb.current}}pd.Fragment=pb;pd.jsx=l_;pd.jsxs=l_});var gl=Ki((sP,c_)=>{"use strict";c_.exports=u_()});function yb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vb(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cS(){let t=bl("canvas");return t.style.display="block",t}function qg(...t){let e="THREE."+t.shift();Ws?Ws("log",e,...t):console.log(e,...t)}function dS(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=dS(t);let e="THREE."+t.shift();if(Ws)Ws("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Be(...t){t=dS(t);let e="THREE."+t.shift();if(Ws)Ws("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ur(...t){let e=t.join(" ");e in d_||(d_[e]=!0,Ue(...t))}function fS(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function Jl(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[t&255]+pn[t>>8&255]+pn[t>>16&255]+pn[t>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function _b(t,e){return(t%e+e)%e}function qm(t,e,n){return(1-n)*t+n*e}function xl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sb(){let t={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ot&&(a.r=fa(a.r),a.g=fa(a.g),a.b=fa(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ot&&(a.r=Vs(a.r),a.g=Vs(a.g),a.b=Vs(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ga?Cl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wl]:{primaries:e,whitePoint:i,transfer:Cl,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),t}function fa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function Ym(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}function jm(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function rg(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Dr.fromArray(t,r);let o=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),l=e.dot(Dr),u=n.dot(Dr),f=i.dot(Dr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}function Fb(t,e,n,i,a,r,s,o){let l;if(e.side===rn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===ha,o),l===null)return null;Ed.copy(o),Ed.applyMatrix4(t.matrixWorld);let u=n.ray.origin.distanceTo(Ed);return u<n.near||u>n.far?null:{distance:u,point:Ed.clone(),object:t}}function Td(t,e,n,i,a,r,s,o,l,u){t.getVertexPosition(o,bd),t.getVertexPosition(l,Ld),t.getVertexPosition(u,Id);let f=Fb(t,e,n,i,bd,Ld,Id,b_);if(f){let p=new H;Ja.getBarycoord(b_,bd,Ld,Id,p),a&&(f.uv=Ja.getInterpolatedAttribute(a,o,l,u,p,new $e)),r&&(f.uv1=Ja.getInterpolatedAttribute(r,o,l,u,p,new $e)),s&&(f.normal=Ja.getInterpolatedAttribute(s,o,l,u,p,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let d={a:o,b:l,c:u,normal:new H,materialIndex:0};Ja.getNormal(bd,Ld,Id,d.normal),f.face=d,f.barycoord=p}return f}function Gr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let a=t[n][i];if(L_(a))a.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(L_(a[0])){let r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function xn(t){let e={};for(let n=0;n<t.length;n++){let i=Gr(t[n]);for(let a in i)e[a]=i[a]}return e}function L_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ob(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Xg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}function Pd(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function P_(t,e){return t.distance-e.distance}function wg(t,e,n,i){let a=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(a=!1),a===!0&&i===!0){let r=t.children;for(let s=0,o=r.length;s<o;s++)wg(r[s],e,n,!0)}}function Zg(t,e,n,i){let a=Kb(i);switch(n){case Vg:return t*e;case Gg:return t*e/a.components*a.byteLength;case Cf:return t*e/a.components*a.byteLength;case ur:return t*e*2/a.components*a.byteLength;case bf:return t*e*2/a.components*a.byteLength;case Hg:return t*e*3/a.components*a.byteLength;case oi:return t*e*4/a.components*a.byteLength;case Lf:return t*e*4/a.components*a.byteLength;case Xl:case $l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yl:case Zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Af:case Tf:return Math.max(t,16)*Math.max(e,8)/4;case If:case Ef:return Math.max(t,8)*Math.max(e,8)/2;case Rf:case Pf:case Df:case Ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kf:case Kl:case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case qf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case jf:case Jf:case Qf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jl:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Kb(t){switch(t){case Pn:case Bg:return{byteLength:1,components:1};case eo:case Ug:case Gi:return{byteLength:2,components:1};case Mf:case wf:return{byteLength:2,components:4};case Ci:case Sf:case bi:return{byteLength:4,components:1};case Og:case zg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var gf,k_,bg,D_,Hl,xf,Qs,ha,rn,Vi,Hi,Or,Lg,Ig,Ag,F_,Qa,N_,B_,U_,O_,z_,V_,H_,G_,Nd,Bd,W_,q_,X_,$_,Y_,Z_,K_,j_,J_,Ud,Od,zd,zr,Vd,Hd,Gd,Wd,Eg,Q_,eS,wi,Tg,Rg,Pg,Gl,kg,Dg,Fg,Ng,sr,Hr,yf,vf,Wl,Hs,Bi,qd,Jt,tS,ql,an,_f,or,Pn,Bg,Ug,eo,Sf,Ci,bi,Gi,Mf,wf,to,Og,zg,Vg,Hg,oi,Ui,lr,Gg,Cf,ur,bf,Lf,Xl,$l,Yl,Zl,If,Af,Ef,Tf,Rf,Pf,kf,Df,Ff,Kl,Nf,Bf,Uf,Of,zf,Vf,Hf,Gf,Wf,qf,Xf,$f,Yf,Zf,Kf,jf,Jf,Qf,eh,th,jl,nh,Ml,Xd,Fd,pg,mg,gg,xg,nS,ih,iS,ga,Xn,wl,Cl,ot,Br,yg,aS,rS,sS,ah,oS,lS,rh,uS,vg,Wg,_i,Gs,d_,Ws,hS,Oi,pn,Wm,$d,$e,zi,H,Xm,f_,He,$m,h_,p_,Je,Es,Yd,Mb,qs,wb,Zm,Mn,Lt,Zd,Yn,Ll,Kd,bt,Ts,xi,Cb,bb,Xa,md,Wn,m_,g_,pa,Xs,Lb,x_,Rs,oa,gd,yl,Ib,Ab,y_,v_,__,S_,Eb,Ps,Km,gn,Si,Tb,$s,pS,$a,xd,Ze,mn,Il,yi,la,Jm,ua,ks,Ds,M_,Qm,eg,tg,ng,ig,ag,Ja,er,ca,vi,yd,Fs,Ns,Bs,Ya,Za,kr,vl,vd,_d,Dr,Vt,Sd,Rb,$n,Al,El,Ut,Pb,_l,sg,Ys,kb,si,og,Us,qn,Sl,jt,Zn,Db,tr,da,lg,Md,Ka,ug,wd,cg,Tl,Vr,w_,Fr,Cd,C_,bd,Ld,Id,dg,Ad,b_,Ed,at,jd,fg,Nb,Bb,Ni,Nr,Ub,Rd,Zs,Rl,Pl,ma,Jd,kl,Tn,Dl,Mi,Fl,Nl,nr,mS,zb,Vb,Kn,Qd,Rn,ef,tf,ir,nf,af,rf,sf,jn,ar,of,lf,uf,Bl,rr,cf,df,gS,ff,Ks,Ul,hg,I_,A_,hf,kd,Dd,Fi,Ol,ja,E_,T_,nn,_g,zl,js,Sg,Js,Os,zs,pf,mf,$g,Hb,Yg,Gb,Wb,qb,Xb,$b,Yb,Zb,Mg,wt,oP,R_,Vl,Cg,Kg=ve(()=>{gf="185",k_=0,bg=1,D_=2,Hl=1,xf=2,Qs=3,ha=0,rn=1,Vi=2,Hi=0,Or=1,Lg=2,Ig=3,Ag=4,F_=5,Qa=100,N_=101,B_=102,U_=103,O_=104,z_=200,V_=201,H_=202,G_=203,Nd=204,Bd=205,W_=206,q_=207,X_=208,$_=209,Y_=210,Z_=211,K_=212,j_=213,J_=214,Ud=0,Od=1,zd=2,zr=3,Vd=4,Hd=5,Gd=6,Wd=7,Eg=0,Q_=1,eS=2,wi=0,Tg=1,Rg=2,Pg=3,Gl=4,kg=5,Dg=6,Fg=7,Ng=300,sr=301,Hr=302,yf=303,vf=304,Wl=306,Hs=1e3,Bi=1001,qd=1002,Jt=1003,tS=1004,ql=1005,an=1006,_f=1007,or=1008,Pn=1009,Bg=1010,Ug=1011,eo=1012,Sf=1013,Ci=1014,bi=1015,Gi=1016,Mf=1017,wf=1018,to=1020,Og=35902,zg=35899,Vg=1021,Hg=1022,oi=1023,Ui=1026,lr=1027,Gg=1028,Cf=1029,ur=1030,bf=1031,Lf=1033,Xl=33776,$l=33777,Yl=33778,Zl=33779,If=35840,Af=35841,Ef=35842,Tf=35843,Rf=36196,Pf=37492,kf=37496,Df=37488,Ff=37489,Kl=37490,Nf=37491,Bf=37808,Uf=37809,Of=37810,zf=37811,Vf=37812,Hf=37813,Gf=37814,Wf=37815,qf=37816,Xf=37817,$f=37818,Yf=37819,Zf=37820,Kf=37821,jf=36492,Jf=36494,Qf=36495,eh=36283,th=36284,jl=36285,nh=36286,Ml=2300,Xd=2301,Fd=2302,pg=2303,mg=2400,gg=2401,xg=2402,nS=3200,ih=0,iS=1,ga="",Xn="srgb",wl="srgb-linear",Cl="linear",ot="srgb",Br=7680,yg=519,aS=512,rS=513,sS=514,ah=515,oS=516,lS=517,rh=518,uS=519,vg=35044,Wg="300 es",_i=2e3,Gs=2001;d_={},Ws=null;hS={[Ud]:Od,[zd]:Gd,[Vd]:Wd,[zr]:Hd,[Od]:Ud,[Gd]:zd,[Wd]:Vd,[Hd]:zr},Oi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let a=i[e];if(a!==void 0){let r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wm=Math.PI/180,$d=180/Math.PI;$e=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zi=class{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],u=i[a+1],f=i[a+2],p=i[a+3],d=r[s+0],g=r[s+1],x=r[s+2],C=r[s+3];if(p!==C||l!==d||u!==g||f!==x){let y=l*d+u*g+f*x+p*C;y<0&&(d=-d,g=-g,x=-x,C=-C,y=-y);let c=1-o;if(y<.9995){let m=Math.acos(y),w=Math.sin(m);c=Math.sin(c*m)/w,o=Math.sin(o*m)/w,l=l*c+d*o,u=u*c+g*o,f=f*c+x*o,p=p*c+C*o}else{l=l*c+d*o,u=u*c+g*o,f=f*c+x*o,p=p*c+C*o;let m=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=m,u*=m,f*=m,p*=m}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,r,s){let o=i[a],l=i[a+1],u=i[a+2],f=i[a+3],p=r[s],d=r[s+1],g=r[s+2],x=r[s+3];return e[n]=o*x+f*p+l*g-u*d,e[n+1]=l*x+f*d+u*p-o*g,e[n+2]=u*x+f*g+o*d-l*p,e[n+3]=f*x-o*p-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(a/2),p=o(r/2),d=l(i/2),g=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=d*f*p+u*g*x,this._y=u*g*p-d*f*x,this._z=u*f*x+d*g*p,this._w=u*f*p-d*g*x;break;case"YXZ":this._x=d*f*p+u*g*x,this._y=u*g*p-d*f*x,this._z=u*f*x-d*g*p,this._w=u*f*p+d*g*x;break;case"ZXY":this._x=d*f*p-u*g*x,this._y=u*g*p+d*f*x,this._z=u*f*x+d*g*p,this._w=u*f*p-d*g*x;break;case"ZYX":this._x=d*f*p-u*g*x,this._y=u*g*p+d*f*x,this._z=u*f*x-d*g*p,this._w=u*f*p+d*g*x;break;case"YZX":this._x=d*f*p+u*g*x,this._y=u*g*p+d*f*x,this._z=u*f*x-d*g*p,this._w=u*f*p-d*g*x;break;case"XZY":this._x=d*f*p-u*g*x,this._y=u*g*p-d*f*x,this._z=u*f*x+d*g*p,this._w=u*f*p+d*g*x;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],u=n[2],f=n[6],p=n[10],d=i+o+p;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(r-u)*g,this._z=(s-a)*g}else if(i>o&&i>p){let g=2*Math.sqrt(1+i-o-p);this._w=(f-l)/g,this._x=.25*g,this._y=(a+s)/g,this._z=(r+u)/g}else if(o>p){let g=2*Math.sqrt(1+o-i-p);this._w=(r-u)/g,this._x=(a+s)/g,this._y=.25*g,this._z=(l+f)/g}else{let g=2*Math.sqrt(1+p-i-o);this._w=(s-a)/g,this._x=(r+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*o+a*u-r*l,this._y=a*f+s*l+r*o-i*u,this._z=r*f+s*u+i*l-a*o,this._w=s*f-i*o-a*l-r*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){let u=Math.acos(o),f=Math.sin(u);l=Math.sin(l*u)/f,n=Math.sin(n*u)/f,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(f_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(f_.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){let n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*a-o*i),f=2*(o*n-r*a),p=2*(r*i-s*n);return this.x=n+l*u+s*p-o*f,this.y=i+l*f+o*u-r*p,this.z=a+l*p+r*f-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xm.copy(this).projectOnVector(e),this.sub(Xm)}reflect(e){return this.sub(Xm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xm=new H,f_=new zi,He=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,a,r,s,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,u)}set(e,n,i,a,r,s,o,l,u){let f=this.elements;return f[0]=e,f[1]=a,f[2]=o,f[3]=n,f[4]=r,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],f=i[4],p=i[7],d=i[2],g=i[5],x=i[8],C=a[0],y=a[3],c=a[6],m=a[1],w=a[4],M=a[7],I=a[2],L=a[5],E=a[8];return r[0]=s*C+o*m+l*I,r[3]=s*y+o*w+l*L,r[6]=s*c+o*M+l*E,r[1]=u*C+f*m+p*I,r[4]=u*y+f*w+p*L,r[7]=u*c+f*M+p*E,r[2]=d*C+g*m+x*I,r[5]=d*y+g*w+x*L,r[8]=d*c+g*M+x*E,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*o*u-i*r*f+i*o*l+a*r*u-a*s*l}invert(){let e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=f*s-o*u,d=o*l-f*r,g=u*r-s*l,x=n*p+i*d+a*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/x;return e[0]=p*C,e[1]=(a*u-f*i)*C,e[2]=(o*i-a*s)*C,e[3]=d*C,e[4]=(f*n-a*l)*C,e[5]=(a*r-o*n)*C,e[6]=g*C,e[7]=(i*l-u*n)*C,e[8]=(s*n-i*r)*C,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){let l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-a*u,a*l,-a*(-u*s+l*o)+o+n,0,0,1),this}scale(e,n){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($m.makeScale(e,n)),this}rotate(e){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($m.makeRotation(-e)),this}translate(e,n){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($m.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$m=new He,h_=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je=Sb();Yd=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=bl("canvas")),Es.width=e.width,Es.height=e.height;let a=Es.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=bl("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=fa(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fa(n[i]/255)*255):n[i]=fa(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mb=0,qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Jl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Ym(a[s].image)):r.push(Ym(a[s]))}else r=Ym(a);i.url=r}return n||(e.images[this.uuid]=i),i}};wb=0,Zm=new H,Mn=class t extends Oi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Bi,a=Bi,r=an,s=or,o=oi,l=Pn,u=t.DEFAULT_ANISOTROPY,f=ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Jl(),this.name="",this.source=new qs(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zm).x}get height(){return this.source.getSize(Zm).y}get depth(){return this.source.getSize(Zm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Ng;Mn.DEFAULT_ANISOTROPY=1;Lt=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r,l=e.elements,u=l[0],f=l[4],p=l[8],d=l[1],g=l[5],x=l[9],C=l[2],y=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(p-C)<.01&&Math.abs(x-y)<.01){if(Math.abs(f+d)<.1&&Math.abs(p+C)<.1&&Math.abs(x+y)<.1&&Math.abs(u+g+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let w=(u+1)/2,M=(g+1)/2,I=(c+1)/2,L=(f+d)/4,E=(p+C)/4,_=(x+y)/4;return w>M&&w>I?w<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(w),a=L/i,r=E/i):M>I?M<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(M),i=L/a,r=_/a):I<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(I),i=E/r,a=_/r),this.set(i,a,r,n),this}let m=Math.sqrt((y-x)*(y-x)+(p-C)*(p-C)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(y-x)/m,this.y=(p-C)/m,this.z=(d-f)/m,this.w=Math.acos((u+g+c-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zd=class extends Oi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n),this.textures=[];let a={width:e,height:n,depth:i.depth},r=new Mn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},e.textures[n].image);this.textures[n].source=new qs(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends Zd{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Ll=class extends Mn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Kd=class extends Mn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bt=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,a,r,s,o,l,u,f,p,d,g,x,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,u,f,p,d,g,x,C,y)}set(e,n,i,a,r,s,o,l,u,f,p,d,g,x,C,y){let c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=a,c[1]=r,c[5]=s,c[9]=o,c[13]=l,c[2]=u,c[6]=f,c[10]=p,c[14]=d,c[3]=g,c[7]=x,c[11]=C,c[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),s=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),u=Math.sin(a),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=s*f,g=s*p,x=o*f,C=o*p;n[0]=l*f,n[4]=-l*p,n[8]=u,n[1]=g+x*u,n[5]=d-C*u,n[9]=-o*l,n[2]=C-d*u,n[6]=x+g*u,n[10]=s*l}else if(e.order==="YXZ"){let d=l*f,g=l*p,x=u*f,C=u*p;n[0]=d+C*o,n[4]=x*o-g,n[8]=s*u,n[1]=s*p,n[5]=s*f,n[9]=-o,n[2]=g*o-x,n[6]=C+d*o,n[10]=s*l}else if(e.order==="ZXY"){let d=l*f,g=l*p,x=u*f,C=u*p;n[0]=d-C*o,n[4]=-s*p,n[8]=x+g*o,n[1]=g+x*o,n[5]=s*f,n[9]=C-d*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){let d=s*f,g=s*p,x=o*f,C=o*p;n[0]=l*f,n[4]=x*u-g,n[8]=d*u+C,n[1]=l*p,n[5]=C*u+d,n[9]=g*u-x,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){let d=s*l,g=s*u,x=o*l,C=o*u;n[0]=l*f,n[4]=C-d*p,n[8]=x*p+g,n[1]=p,n[5]=s*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*p+x,n[10]=d-C*p}else if(e.order==="XZY"){let d=s*l,g=s*u,x=o*l,C=o*u;n[0]=l*f,n[4]=-p,n[8]=u*f,n[1]=d*p+C,n[5]=s*f,n[9]=g*p-x,n[2]=x*p-g,n[6]=o*f,n[10]=C*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cb,e,bb)}lookAt(e,n,i){let a=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Xa.crossVectors(i,Wn),Xa.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Xa.crossVectors(i,Wn)),Xa.normalize(),md.crossVectors(Wn,Xa),a[0]=Xa.x,a[4]=md.x,a[8]=Wn.x,a[1]=Xa.y,a[5]=md.y,a[9]=Wn.y,a[2]=Xa.z,a[6]=md.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],f=i[1],p=i[5],d=i[9],g=i[13],x=i[2],C=i[6],y=i[10],c=i[14],m=i[3],w=i[7],M=i[11],I=i[15],L=a[0],E=a[4],_=a[8],A=a[12],R=a[1],P=a[5],k=a[9],X=a[13],O=a[2],V=a[6],Z=a[10],Y=a[14],U=a[3],ee=a[7],ce=a[11],se=a[15];return r[0]=s*L+o*R+l*O+u*U,r[4]=s*E+o*P+l*V+u*ee,r[8]=s*_+o*k+l*Z+u*ce,r[12]=s*A+o*X+l*Y+u*se,r[1]=f*L+p*R+d*O+g*U,r[5]=f*E+p*P+d*V+g*ee,r[9]=f*_+p*k+d*Z+g*ce,r[13]=f*A+p*X+d*Y+g*se,r[2]=x*L+C*R+y*O+c*U,r[6]=x*E+C*P+y*V+c*ee,r[10]=x*_+C*k+y*Z+c*ce,r[14]=x*A+C*X+y*Y+c*se,r[3]=m*L+w*R+M*O+I*U,r[7]=m*E+w*P+M*V+I*ee,r[11]=m*_+w*k+M*Z+I*ce,r[15]=m*A+w*X+M*Y+I*se,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],u=e[13],f=e[2],p=e[6],d=e[10],g=e[14],x=e[3],C=e[7],y=e[11],c=e[15],m=l*g-u*d,w=o*g-u*p,M=o*d-l*p,I=s*g-u*f,L=s*d-l*f,E=s*p-o*f;return n*(C*m-y*w+c*M)-i*(x*m-y*I+c*L)+a*(x*w-C*I+c*E)-r*(x*M-C*L+y*E)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],u=e[6],f=e[10];return n*(s*f-o*u)-i*(r*f-o*l)+a*(r*u-s*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=e[9],d=e[10],g=e[11],x=e[12],C=e[13],y=e[14],c=e[15],m=n*o-i*s,w=n*l-a*s,M=n*u-r*s,I=i*l-a*o,L=i*u-r*o,E=a*u-r*l,_=f*C-p*x,A=f*y-d*x,R=f*c-g*x,P=p*y-d*C,k=p*c-g*C,X=d*c-g*y,O=m*X-w*k+M*P+I*R-L*A+E*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/O;return e[0]=(o*X-l*k+u*P)*V,e[1]=(a*k-i*X-r*P)*V,e[2]=(C*E-y*L+c*I)*V,e[3]=(d*L-p*E-g*I)*V,e[4]=(l*R-s*X-u*A)*V,e[5]=(n*X-a*R+r*A)*V,e[6]=(y*M-x*E-c*w)*V,e[7]=(f*E-d*M+g*w)*V,e[8]=(s*k-o*R+u*_)*V,e[9]=(i*R-n*k-r*_)*V,e[10]=(x*L-C*M+c*m)*V,e[11]=(p*M-f*L-g*m)*V,e[12]=(o*A-s*P-l*_)*V,e[13]=(n*P-i*A+a*_)*V,e[14]=(C*w-x*I-y*m)*V,e[15]=(f*I-p*w+d*m)*V,this}scale(e){let n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,u=r*s,f=r*o;return this.set(u*s+i,u*o-a*l,u*l+a*o,0,u*o+a*l,f*o+i,f*l-a*s,0,u*l-a*o,f*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){let a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,u=r+r,f=s+s,p=o+o,d=r*u,g=r*f,x=r*p,C=s*f,y=s*p,c=o*p,m=l*u,w=l*f,M=l*p,I=i.x,L=i.y,E=i.z;return a[0]=(1-(C+c))*I,a[1]=(g+M)*I,a[2]=(x-w)*I,a[3]=0,a[4]=(g-M)*L,a[5]=(1-(d+c))*L,a[6]=(y+m)*L,a[7]=0,a[8]=(x+w)*E,a[9]=(y-m)*E,a[10]=(1-(d+C))*E,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=Ts.set(a[0],a[1],a[2]).length(),o=Ts.set(a[4],a[5],a[6]).length(),l=Ts.set(a[8],a[9],a[10]).length();r<0&&(s=-s),xi.copy(this);let u=1/s,f=1/o,p=1/l;return xi.elements[0]*=u,xi.elements[1]*=u,xi.elements[2]*=u,xi.elements[4]*=f,xi.elements[5]*=f,xi.elements[6]*=f,xi.elements[8]*=p,xi.elements[9]*=p,xi.elements[10]*=p,n.setFromRotationMatrix(xi),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=_i,l=!1){let u=this.elements,f=2*r/(n-e),p=2*r/(i-a),d=(n+e)/(n-e),g=(i+a)/(i-a),x,C;if(l)x=r/(s-r),C=s*r/(s-r);else if(o===_i)x=-(s+r)/(s-r),C=-2*s*r/(s-r);else if(o===Gs)x=-s/(s-r),C=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=p,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=C,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=_i,l=!1){let u=this.elements,f=2/(n-e),p=2/(i-a),d=-(n+e)/(n-e),g=-(i+a)/(i-a),x,C;if(l)x=1/(s-r),C=s/(s-r);else if(o===_i)x=-2/(s-r),C=-(s+r)/(s-r);else if(o===Gs)x=-1/(s-r),C=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=p,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=x,u[14]=C,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Ts=new H,xi=new bt,Cb=new H(0,0,0),bb=new H(1,1,1),Xa=new H,md=new H,Wn=new H,m_=new bt,g_=new zi,pa=class t{constructor(e=0,n=0,i=0,a=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],u=a[5],f=a[9],p=a[2],d=a[6],g=a[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pa.DEFAULT_ORDER="XYZ";Xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lb=0,x_=new H,Rs=new zi,oa=new bt,gd=new H,yl=new H,Ib=new H,Ab=new zi,y_=new H(1,0,0),v_=new H(0,1,0),__=new H(0,0,1),S_={type:"added"},Eb={type:"removed"},Ps={type:"childadded",child:null},Km={type:"childremoved",child:null},gn=class t extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new H,n=new pa,i=new zi,a=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new bt},normalMatrix:{value:new He}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(y_,e)}rotateY(e){return this.rotateOnAxis(v_,e)}rotateZ(e){return this.rotateOnAxis(__,e)}translateOnAxis(e,n){return x_.copy(e).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(y_,e)}translateY(e){return this.translateOnAxis(v_,e)}translateZ(e){return this.translateOnAxis(__,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gd.copy(e):gd.set(e,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(yl,gd,this.up):oa.lookAt(gd,yl,this.up),this.quaternion.setFromRotationMatrix(oa),a&&(oa.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(oa),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Eb),Km.child=e,this.dispatchEvent(Km),Km.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,Ib),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,Ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let p=l[u];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){let o=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),p=s(e.shapes),d=s(e.skeletons),g=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){let l=[];for(let u in o){let f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}};gn.DEFAULT_UP=new H(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Si=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tb={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(let C of e.hand.values()){let y=n.getJointPose(C,i),c=this._getHandJoint(u,C);y!==null&&(c.matrix.fromArray(y.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=y.radius),c.visible=y!==null}let f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=f.position.distanceTo(p.position),g=.02,x=.005;u.inputState.pinching&&d>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},pS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},xd={h:0,s:0,l:0};Ze=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Je.workingColorSpace){if(e=_b(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=jm(s,r,e+1/3),this.g=jm(s,r,e),this.b=jm(s,r,e-1/3)}return Je.colorSpaceToWorking(this,a),this}setStyle(e,n=Xn){function i(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){let i=pS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Je.workingToColorSpace(mn.copy(this),e),Math.round(Qe(mn.r*255,0,255))*65536+Math.round(Qe(mn.g*255,0,255))*256+Math.round(Qe(mn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(mn.copy(this),n);let i=mn.r,a=mn.g,r=mn.b,s=Math.max(i,a,r),o=Math.min(i,a,r),l,u,f=(o+s)/2;if(o===s)l=0,u=0;else{let p=s-o;switch(u=f<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Xn){Je.workingToColorSpace(mn.copy(this),e);let n=mn.r,i=mn.g,a=mn.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL($a),this.setHSL($a.h+e,$a.s+n,$a.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($a),e.getHSL(xd);let i=qm($a.h,xd.h,n),a=qm($a.s,xd.s,n),r=qm($a.l,xd.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Ze;Ze.NAMES=pS;Il=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},yi=new H,la=new H,Jm=new H,ua=new H,ks=new H,Ds=new H,M_=new H,Qm=new H,eg=new H,tg=new H,ng=new Lt,ig=new Lt,ag=new Lt,Ja=class t{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),yi.subVectors(e,n),a.cross(yi);let r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){yi.subVectors(a,n),la.subVectors(i,n),Jm.subVectors(e,n);let s=yi.dot(yi),o=yi.dot(la),l=yi.dot(Jm),u=la.dot(la),f=la.dot(Jm),p=s*u-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,g=(u*l-o*f)*d,x=(s*f-o*l)*d;return r.set(1-g-x,x,g)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,ua)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ua.x),l.addScaledVector(s,ua.y),l.addScaledVector(o,ua.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return ng.setScalar(0),ig.setScalar(0),ag.setScalar(0),ng.fromBufferAttribute(e,n),ig.fromBufferAttribute(e,i),ag.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(ng,r.x),s.addScaledVector(ig,r.y),s.addScaledVector(ag,r.z),s}static isFrontFacing(e,n,i,a){return yi.subVectors(i,n),la.subVectors(e,n),yi.cross(la).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),la.subVectors(this.a,this.b),yi.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,a=this.b,r=this.c,s,o;ks.subVectors(a,i),Ds.subVectors(r,i),Qm.subVectors(e,i);let l=ks.dot(Qm),u=Ds.dot(Qm);if(l<=0&&u<=0)return n.copy(i);eg.subVectors(e,a);let f=ks.dot(eg),p=Ds.dot(eg);if(f>=0&&p<=f)return n.copy(a);let d=l*p-f*u;if(d<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(ks,s);tg.subVectors(e,r);let g=ks.dot(tg),x=Ds.dot(tg);if(x>=0&&g<=x)return n.copy(r);let C=g*u-l*x;if(C<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(Ds,o);let y=f*x-g*p;if(y<=0&&p-f>=0&&g-x>=0)return M_.subVectors(r,a),o=(p-f)/(p-f+(g-x)),n.copy(a).addScaledVector(M_,o);let c=1/(y+C+d);return s=C*c,o=d*c,n.copy(i).addScaledVector(ks,s).addScaledVector(Ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,vi):vi.fromBufferAttribute(r,s),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yd.copy(i.boundingBox)),yd.applyMatrix4(e.matrixWorld),this.union(yd)}let a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),vd.subVectors(this.max,vl),Fs.subVectors(e.a,vl),Ns.subVectors(e.b,vl),Bs.subVectors(e.c,vl),Ya.subVectors(Ns,Fs),Za.subVectors(Bs,Ns),kr.subVectors(Fs,Bs);let n=[0,-Ya.z,Ya.y,0,-Za.z,Za.y,0,-kr.z,kr.y,Ya.z,0,-Ya.x,Za.z,0,-Za.x,kr.z,0,-kr.x,-Ya.y,Ya.x,0,-Za.y,Za.x,0,-kr.y,kr.x,0];return!rg(n,Fs,Ns,Bs,vd)||(n=[1,0,0,0,1,0,0,0,1],!rg(n,Fs,Ns,Bs,vd))?!1:(_d.crossVectors(Ya,Za),n=[_d.x,_d.y,_d.z],rg(n,Fs,Ns,Bs,vd))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ca=[new H,new H,new H,new H,new H,new H,new H,new H],vi=new H,yd=new er,Fs=new H,Ns=new H,Bs=new H,Ya=new H,Za=new H,kr=new H,vl=new H,vd=new H,_d=new H,Dr=new H;Vt=new H,Sd=new $e,Rb=0,$n=class extends Oi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vg,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sd.fromBufferAttribute(this,n),Sd.applyMatrix3(e),this.setXY(n,Sd.x,Sd.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xl(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xl(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xl(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xl(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),a=En(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),a=En(a,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},Al=class extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}},El=class extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}},Ut=class extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}},Pb=new er,_l=new H,sg=new H,Ys=class{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Pb.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_l.subVectors(e,this.center);let n=_l.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(_l,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_l.copy(e.center).add(sg)),this.expandByPoint(_l.copy(e.center).sub(sg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kb=0,si=new bt,og=new gn,Us=new H,qn=new er,Sl=new er,jt=new H,Zn=class t extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Jl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yb(e)?El:Al)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,n,i){return si.makeTranslation(e,n,i),this.applyMatrix4(si),this}scale(e,n,i){return si.makeScale(e,n,i),this.applyMatrix4(si),this}lookAt(e){return og.lookAt(e),og.updateMatrix(),this.applyMatrix4(og.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,r=e.length;a<r;a++){let s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ut(i,3))}else{let i=Math.min(e.length,n.count);for(let a=0;a<i;a++){let r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){let r=n[i];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){let o=n[r];Sl.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(qn.min,Sl.min),qn.expandByPoint(jt),jt.addVectors(qn.max,Sl.max),qn.expandByPoint(jt)):(qn.expandByPoint(Sl.min),qn.expandByPoint(Sl.max))}qn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)jt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(jt));if(n)for(let r=0,s=n.length;r<s;r++){let o=n[r],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)jt.fromBufferAttribute(o,u),l&&(Us.fromBufferAttribute(e,u),jt.add(Us)),a=Math.max(a,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,r=n.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new $n(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new H,l[_]=new H;let u=new H,f=new H,p=new H,d=new $e,g=new $e,x=new $e,C=new H,y=new H;function c(_,A,R){u.fromBufferAttribute(i,_),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),d.fromBufferAttribute(r,_),g.fromBufferAttribute(r,A),x.fromBufferAttribute(r,R),f.sub(u),p.sub(u),g.sub(d),x.sub(d);let P=1/(g.x*x.y-x.x*g.y);isFinite(P)&&(C.copy(f).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(P),y.copy(p).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(P),o[_].add(C),o[A].add(C),o[R].add(C),l[_].add(y),l[A].add(y),l[R].add(y))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let _=0,A=m.length;_<A;++_){let R=m[_],P=R.start,k=R.count;for(let X=P,O=P+k;X<O;X+=3)c(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let w=new H,M=new H,I=new H,L=new H;function E(_){I.fromBufferAttribute(a,_),L.copy(I);let A=o[_];w.copy(A),w.sub(I.multiplyScalar(I.dot(A))).normalize(),M.crossVectors(L,A);let P=M.dot(l[_])<0?-1:1;s.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,A=m.length;_<A;++_){let R=m[_],P=R.start,k=R.count;for(let X=P,O=P+k;X<O;X+=3)E(e.getX(X+0)),E(e.getX(X+1)),E(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);let a=new H,r=new H,s=new H,o=new H,l=new H,u=new H,f=new H,p=new H;if(e)for(let d=0,g=e.count;d<g;d+=3){let x=e.getX(d+0),C=e.getX(d+1),y=e.getX(d+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,C),s.fromBufferAttribute(n,y),f.subVectors(s,r),p.subVectors(a,r),f.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,y),o.add(f),l.add(f),u.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(C,l.x,l.y,l.z),i.setXYZ(y,u.x,u.y,u.z)}else for(let d=0,g=n.count;d<g;d+=3)a.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),f.subVectors(s,r),p.subVectors(a,r),f.cross(p),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let u=o.array,f=o.itemSize,p=o.normalized,d=new u.constructor(l.length*f),g=0,x=0;for(let C=0,y=l.length;C<y;C++){o.isInterleavedBufferAttribute?g=l[C]*o.data.stride+o.offset:g=l[C]*f;for(let c=0;c<f;c++)d[x++]=u[g++]}return new $n(d,f,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],u=e(l,i);n.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let l=[],u=r[o];for(let f=0,p=u.length;f<p;f++){let d=u[f],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let u=i[l];e.data.attributes[l]=u.toJSON(e.data)}let a={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],f=[];for(let p=0,d=u.length;p<d;p++){let g=u[p];f.push(g.toJSON(e.data))}f.length>0&&(a[l]=f,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let a=e.attributes;for(let u in a){let f=a[u];this.setAttribute(u,f.clone(n))}let r=e.morphAttributes;for(let u in r){let f=[],p=r[u];for(let d=0,g=p.length;d<g;d++)f.push(p[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let u=0,f=s.length;u<f;u++){let p=s[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Db=0,tr=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Jl(),this.name="",this.type="Material",this.blending=Or,this.side=ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Bd,this.blendEquation=Qa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==ha&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nd&&(i.blendSrc=this.blendSrc),this.blendDst!==Bd&&(i.blendDst=this.blendDst),this.blendEquation!==Qa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(n){let r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},da=new H,lg=new H,Md=new H,Ka=new H,ug=new H,wd=new H,cg=new H,Tl=class{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,n),da.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){lg.copy(e).add(n).multiplyScalar(.5),Md.copy(n).sub(e).normalize(),Ka.copy(this.origin).sub(lg);let r=e.distanceTo(n)*.5,s=-this.direction.dot(Md),o=Ka.dot(this.direction),l=-Ka.dot(Md),u=Ka.lengthSq(),f=Math.abs(1-s*s),p,d,g,x;if(f>0)if(p=s*l-o,d=s*o-l,x=r*f,p>=0)if(d>=-x)if(d<=x){let C=1/f;p*=C,d*=C,g=p*(p+s*d+2*o)+d*(s*p+d+2*l)+u}else d=r,p=Math.max(0,-(s*d+o)),g=-p*p+d*(d+2*l)+u;else d=-r,p=Math.max(0,-(s*d+o)),g=-p*p+d*(d+2*l)+u;else d<=-x?(p=Math.max(0,-(-s*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),g=-p*p+d*(d+2*l)+u):d<=x?(p=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+u):(p=Math.max(0,-(s*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),g=-p*p+d*(d+2*l)+u);else d=s>0?-r:r,p=Math.max(0,-(s*d+o)),g=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(lg).addScaledVector(Md,d),g}intersectSphere(e,n){da.subVectors(e.center,this.origin);let i=da.dot(this.direction),a=da.dot(da)-i*i,r=e.radius*e.radius;if(a>r)return null;let s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l,u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,a=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,a=(e.min.x-d.x)*u),f>=0?(r=(e.min.y-d.y)*f,s=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,s=(e.min.y-d.y)*f),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,n,i,a,r){ug.subVectors(n,e),wd.subVectors(i,e),cg.crossVectors(ug,wd);let s=this.direction.dot(cg),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ka.subVectors(this.origin,e);let l=o*this.direction.dot(wd.crossVectors(Ka,wd));if(l<0)return null;let u=o*this.direction.dot(ug.cross(Ka));if(u<0||l+u>s)return null;let f=-o*Ka.dot(cg);return f<0?null:this.at(f/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vr=class extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=Eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},w_=new bt,Fr=new Tl,Cd=new Ys,C_=new H,bd=new H,Ld=new H,Id=new H,dg=new H,Ad=new H,b_=new H,Ed=new H,at=class extends gn{constructor(e=new Zn,n=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);let o=this.morphTargetInfluences;if(r&&o){Ad.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let f=o[l],p=r[l];f!==0&&(dg.fromBufferAttribute(p,e),s?Ad.addScaledVector(dg,f):Ad.addScaledVector(dg.sub(n),f))}n.add(Ad)}return n}raycast(e,n){let i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cd.copy(i.boundingSphere),Cd.applyMatrix4(r),Fr.copy(e.ray).recast(e.near),!(Cd.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Cd,C_)===null||Fr.origin.distanceToSquared(C_)>(e.far-e.near)**2))&&(w_.copy(r).invert(),Fr.copy(e.ray).applyMatrix4(w_),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let a,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,C=d.length;x<C;x++){let y=d[x],c=s[y.materialIndex],m=Math.max(y.start,g.start),w=Math.min(o.count,Math.min(y.start+y.count,g.start+g.count));for(let M=m,I=w;M<I;M+=3){let L=o.getX(M),E=o.getX(M+1),_=o.getX(M+2);a=Td(this,c,e,i,u,f,p,L,E,_),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{let x=Math.max(0,g.start),C=Math.min(o.count,g.start+g.count);for(let y=x,c=C;y<c;y+=3){let m=o.getX(y),w=o.getX(y+1),M=o.getX(y+2);a=Td(this,s,e,i,u,f,p,m,w,M),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,C=d.length;x<C;x++){let y=d[x],c=s[y.materialIndex],m=Math.max(y.start,g.start),w=Math.min(l.count,Math.min(y.start+y.count,g.start+g.count));for(let M=m,I=w;M<I;M+=3){let L=M,E=M+1,_=M+2;a=Td(this,c,e,i,u,f,p,L,E,_),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{let x=Math.max(0,g.start),C=Math.min(l.count,g.start+g.count);for(let y=x,c=C;y<c;y+=3){let m=y,w=y+1,M=y+2;a=Td(this,s,e,i,u,f,p,m,w,M),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}};jd=class extends Mn{constructor(e=null,n=1,i=1,a,r,s,o,l,u=Jt,f=Jt,p,d){super(null,s,o,l,u,f,a,r,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fg=new H,Nb=new H,Bb=new He,Ni=class{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let a=fg.subVectors(i,n).cross(Nb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let a=e.delta(fg),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Bb.getNormalMatrix(e),a=this.coplanarPoint(fg).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nr=new Ys,Ub=new $e(.5,.5),Rd=new H,Zs=class{constructor(e=new Ni,n=new Ni,i=new Ni,a=new Ni,r=new Ni,s=new Ni){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){let a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],u=r[3],f=r[4],p=r[5],d=r[6],g=r[7],x=r[8],C=r[9],y=r[10],c=r[11],m=r[12],w=r[13],M=r[14],I=r[15];if(a[0].setComponents(u-s,g-f,c-x,I-m).normalize(),a[1].setComponents(u+s,g+f,c+x,I+m).normalize(),a[2].setComponents(u+o,g+p,c+C,I+w).normalize(),a[3].setComponents(u-o,g-p,c-C,I-w).normalize(),i)a[4].setComponents(l,d,y,M).normalize(),a[5].setComponents(u-l,g-d,c-y,I-M).normalize();else if(a[4].setComponents(u-l,g-d,c-y,I-M).normalize(),n===_i)a[5].setComponents(u+l,g+d,c+y,I+M).normalize();else if(n===Gs)a[5].setComponents(l,d,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);let n=Ub.distanceTo(e.center);return Nr.radius=.7071067811865476+n,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){let n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(Rd.x=a.normal.x>0?e.max.x:e.min.x,Rd.y=a.normal.y>0?e.max.y:e.min.y,Rd.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rd)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Rl=class extends Mn{constructor(e=[],n=sr,i,a,r,s,o,l,u,f){super(e,n,i,a,r,s,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pl=class extends Mn{constructor(e,n,i,a,r,s,o,l,u){super(e,n,i,a,r,s,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},ma=class extends Mn{constructor(e,n,i=Ci,a,r,s,o=Jt,l=Jt,u,f=Ui,p=1){if(f!==Ui&&f!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:n,depth:p};super(d,a,r,s,o,l,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Jd=class extends ma{constructor(e,n=Ci,i=sr,a,r,s=Jt,o=Jt,l,u=Ui){let f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,a,r,s,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},kl=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Tn=class t extends Zn{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};let o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);let l=[],u=[],f=[],p=[],d=0,g=0;x("z","y","x",-1,-1,i,n,e,s,r,0),x("z","y","x",1,-1,i,n,-e,s,r,1),x("x","z","y",1,1,e,i,n,a,s,2),x("x","z","y",1,-1,e,i,-n,a,s,3),x("x","y","z",1,-1,e,n,i,a,r,4),x("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(f,3)),this.setAttribute("uv",new Ut(p,2));function x(C,y,c,m,w,M,I,L,E,_,A){let R=M/E,P=I/_,k=M/2,X=I/2,O=L/2,V=E+1,Z=_+1,Y=0,U=0,ee=new H;for(let ce=0;ce<Z;ce++){let se=ce*P-X;for(let be=0;be<V;be++){let ze=be*R-k;ee[C]=ze*m,ee[y]=se*w,ee[c]=O,u.push(ee.x,ee.y,ee.z),ee[C]=0,ee[y]=0,ee[c]=L>0?1:-1,f.push(ee.x,ee.y,ee.z),p.push(be/E),p.push(1-ce/_),Y+=1}}for(let ce=0;ce<_;ce++)for(let se=0;se<E;se++){let be=d+se+V*ce,ze=d+se+V*(ce+1),dt=d+(se+1)+V*(ce+1),Ke=d+(se+1)+V*ce;l.push(be,ze,Ke),l.push(ze,dt,Ke),U+=6}o.addGroup(g,U,A),g+=U,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Dl=class t extends Zn{constructor(e=1,n=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:a},n=Math.max(3,n);let r=[],s=[],o=[],l=[],u=new H,f=new $e;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=n;p++,d+=3){let g=i+p/n*a;u.x=e*Math.cos(g),u.y=e*Math.sin(g),s.push(u.x,u.y,u.z),o.push(0,0,1),f.x=(s[d]/e+1)/2,f.y=(s[d+1]/e+1)/2,l.push(f.x,f.y)}for(let p=1;p<=n;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Ut(s,3)),this.setAttribute("normal",new Ut(o,3)),this.setAttribute("uv",new Ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mi=class t extends Zn{constructor(e=1,n=1,i=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};let u=this;a=Math.floor(a),r=Math.floor(r);let f=[],p=[],d=[],g=[],x=0,C=[],y=i/2,c=0;m(),s===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(g,2));function m(){let M=new H,I=new H,L=0,E=(n-e)/i;for(let _=0;_<=r;_++){let A=[],R=_/r,P=R*(n-e)+e;for(let k=0;k<=a;k++){let X=k/a,O=X*l+o,V=Math.sin(O),Z=Math.cos(O);I.x=P*V,I.y=-R*i+y,I.z=P*Z,p.push(I.x,I.y,I.z),M.set(V,E,Z).normalize(),d.push(M.x,M.y,M.z),g.push(X,1-R),A.push(x++)}C.push(A)}for(let _=0;_<a;_++)for(let A=0;A<r;A++){let R=C[A][_],P=C[A+1][_],k=C[A+1][_+1],X=C[A][_+1];(e>0||A!==0)&&(f.push(R,P,X),L+=3),(n>0||A!==r-1)&&(f.push(P,k,X),L+=3)}u.addGroup(c,L,0),c+=L}function w(M){let I=x,L=new $e,E=new H,_=0,A=M===!0?e:n,R=M===!0?1:-1;for(let k=1;k<=a;k++)p.push(0,y*R,0),d.push(0,R,0),g.push(.5,.5),x++;let P=x;for(let k=0;k<=a;k++){let O=k/a*l+o,V=Math.cos(O),Z=Math.sin(O);E.x=A*Z,E.y=y*R,E.z=A*V,p.push(E.x,E.y,E.z),d.push(0,R,0),L.x=V*.5+.5,L.y=Z*.5*R+.5,g.push(L.x,L.y),x++}for(let k=0;k<a;k++){let X=I+k,O=P+k;M===!0?f.push(O,O+1,X):f.push(O+1,O,X),_+=3}u.addGroup(c,_,M===!0?1:2),c+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fl=class t extends Mi{constructor(e=1,n=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,n,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nl=class t extends Zn{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};let r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),u=o+1,f=l+1,p=e/o,d=n/l,g=[],x=[],C=[],y=[];for(let c=0;c<f;c++){let m=c*d-s;for(let w=0;w<u;w++){let M=w*p-r;x.push(M,-m,0),C.push(0,0,1),y.push(w/o),y.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<o;m++){let w=m+u*c,M=m+u*(c+1),I=m+1+u*(c+1),L=m+1+u*c;g.push(w,M,L),g.push(M,I,L)}this.setIndex(g),this.setAttribute("position",new Ut(x,3)),this.setAttribute("normal",new Ut(C,3)),this.setAttribute("uv",new Ut(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},nr=class t extends Zn{constructor(e=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(s+o,Math.PI),u=0,f=[],p=new H,d=new H,g=[],x=[],C=[],y=[];for(let c=0;c<=i;c++){let m=[],w=c/i,M=s+w*o,I=e*Math.cos(M),L=Math.sqrt(e*e-I*I),E=0;c===0&&s===0?E=.5/n:c===i&&l===Math.PI&&(E=-.5/n);for(let _=0;_<=n;_++){let A=_/n,R=a+A*r;p.x=-L*Math.cos(R),p.y=I,p.z=L*Math.sin(R),x.push(p.x,p.y,p.z),d.copy(p).normalize(),C.push(d.x,d.y,d.z),y.push(A+E,1-w),m.push(u++)}f.push(m)}for(let c=0;c<i;c++)for(let m=0;m<n;m++){let w=f[c][m+1],M=f[c][m],I=f[c+1][m],L=f[c+1][m+1];(c!==0||s>0)&&g.push(w,M,L),(c!==i-1||l<Math.PI)&&g.push(M,I,L)}this.setIndex(g),this.setAttribute("position",new Ut(x,3)),this.setAttribute("normal",new Ut(C,3)),this.setAttribute("uv",new Ut(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};mS={clone:Gr,merge:xn},zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zb,this.fragmentShader=Vb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=Ob(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(a.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(a.value);break;case"v3":this.uniforms[i].value=new H().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new He().fromArray(a.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qd=class extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rn=class extends tr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ef=class extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tf=class extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ir=class{constructor(e,n,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],r=n[i-1];e:{t:{let s;n:{i:if(!(e<a)){for(let o=i+2;;){if(a===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=a,a=n[++i],e<a)break t}s=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=r,r=n[--i-1],e>=r)break t}s=i,i=0;break n}break e}for(;i<s;){let o=i+s>>>1;e<n[o]?s=o:i=o+1}if(a=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,a)}return this.interpolate_(i,r,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=e*a;for(let s=0;s!==a;++s)n[s]=i[r+s];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nf=class extends ir{constructor(e,n,i,a){super(e,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mg,endingEnd:mg}}intervalChanged_(e,n,i){let a=this.parameterPositions,r=e-2,s=e+1,o=a[r],l=a[s];if(o===void 0)switch(this.getSettings_().endingStart){case gg:r=e,o=2*n-i;break;case xg:r=a.length-2,o=n+a[r]-a[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gg:s=e,l=2*i-n;break;case xg:s=1,l=i+a[1]-a[0];break;default:s=e-1,l=n}let u=(i-n)*.5,f=this.valueSize;this._weightPrev=u/(n-o),this._weightNext=u/(l-i),this._offsetPrev=r*f,this._offsetNext=s*f}interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,g=this._weightNext,x=(i-n)/(a-n),C=x*x,y=C*x,c=-d*y+2*d*C-d*x,m=(1+d)*y+(-1.5-2*d)*C+(-.5+d)*x+1,w=(-1-g)*y+(1.5+g)*C+.5*x,M=g*y-g*C;for(let I=0;I!==o;++I)r[I]=c*s[f+I]+m*s[u+I]+w*s[l+I]+M*s[p+I];return r}},af=class extends ir{constructor(e,n,i,a){super(e,n,i,a)}interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=(i-n)/(a-n),p=1-f;for(let d=0;d!==o;++d)r[d]=s[u+d]*p+s[l+d]*f;return r}},rf=class extends ir{constructor(e,n,i,a){super(e,n,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}},sf=class extends ir{interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let x=(i-n)/(a-n),C=1-x;for(let y=0;y!==o;++y)r[y]=s[u+y]*C+s[l+y]*x;return r}let d=o*2,g=e-1;for(let x=0;x!==o;++x){let C=s[u+x],y=s[l+x],c=g*d+x*2,m=p[c],w=p[c+1],M=e*d+x*2,I=f[M],L=f[M+1],E=(i-n)/(a-n),_,A,R,P,k;for(let X=0;X<8;X++){_=E*E,A=_*E,R=1-E,P=R*R,k=P*R;let V=k*n+3*P*E*m+3*R*_*I+A*a-i;if(Math.abs(V)<1e-10)break;let Z=3*P*(m-n)+6*R*E*(I-m)+3*_*(a-I);if(Math.abs(Z)<1e-10)break;E=E-V/Z,E=Math.max(0,Math.min(1,E))}r[x]=k*C+3*P*E*w+3*R*_*L+A*y}return r}},jn=class{constructor(e,n,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pd(n,this.TimeBufferType),this.values=Pd(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Pd(e.times,Array),values:Pd(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new af(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new sf(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Ml:n=this.InterpolantFactoryMethodDiscrete;break;case Xd:n=this.InterpolantFactoryMethodLinear;break;case Fd:n=this.InterpolantFactoryMethodSmooth;break;case pg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ue("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ml;case this.InterpolantFactoryMethodLinear:return Xd;case this.InterpolantFactoryMethodSmooth:return Fd;case this.InterpolantFactoryMethodBezier:return pg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=e}return this}trim(e,n){let i=this.times,a=i.length,r=0,s=a-1;for(;r!==a&&i[r]<e;)++r;for(;s!==-1&&i[s]>n;)--s;if(++s,r!==0||s!==a){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,a=this.values,r=i.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){Be("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(a!==void 0&&vb(a))for(let o=0,l=a.length;o!==l;++o){let u=a[o];if(isNaN(u)){Be("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Fd,r=e.length-1,s=1;for(let o=1;o<r;++o){let l=!1,u=e[o],f=e[o+1];if(u!==f&&(o!==1||u!==e[0]))if(a)l=!0;else{let p=o*i,d=p-i,g=p+i;for(let x=0;x!==i;++x){let C=n[p+x];if(C!==n[d+x]||C!==n[g+x]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let p=o*i,d=s*i;for(let g=0;g!==i;++g)n[d+g]=n[p+g]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,l=s*i,u=0;u!==i;++u)n[l+u]=n[o+u];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=n.slice(0,s*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,e,n);return a.createInterpolant=this.createInterpolant,a}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Xd;ar=class extends jn{constructor(e,n,i){super(e,n,i)}};ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Ml;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;of=class extends jn{constructor(e,n,i,a){super(e,n,i,a)}};of.prototype.ValueTypeName="color";lf=class extends jn{constructor(e,n,i,a){super(e,n,i,a)}};lf.prototype.ValueTypeName="number";uf=class extends ir{constructor(e,n,i,a){super(e,n,i,a)}interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),u=e*o;for(let f=u+o;u!==f;u+=4)zi.slerpFlat(r,0,s,u-o,s,u,l);return r}},Bl=class extends jn{constructor(e,n,i,a){super(e,n,i,a)}InterpolantFactoryMethodLinear(e){return new uf(this.times,this.values,this.getValueSize(),e)}};Bl.prototype.ValueTypeName="quaternion";Bl.prototype.InterpolantFactoryMethodSmooth=void 0;rr=class extends jn{constructor(e,n,i){super(e,n,i)}};rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Ml;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;cf=class extends jn{constructor(e,n,i,a){super(e,n,i,a)}};cf.prototype.ValueTypeName="vector";df=class{constructor(e,n,i){let a=this,r=!1,s=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,r===!1&&a.onStart!==void 0&&a.onStart(f,s,o),r=!0},this.itemEnd=function(f){s++,a.onProgress!==void 0&&a.onProgress(f,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(f){a.onError!==void 0&&a.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){let p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,d=u.length;p<d;p+=2){let g=u[p],x=u[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gS=new df,ff=class{constructor(e){this.manager=e!==void 0?e:gS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(a,r){i.load(e,a,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ff.DEFAULT_MATERIAL_NAME="__DEFAULT";Ks=class extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Ul=class extends Ks{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},hg=new bt,I_=new H,A_=new H,hf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;I_.setFromMatrixPosition(e.matrixWorld),n.position.copy(I_),A_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(A_),n.updateMatrixWorld(),hg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hg,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Gs||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kd=new H,Dd=new zi,Fi=new H,Ol=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kd,Dd,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kd,Dd,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(kd,Dd,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kd,Dd,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ja=new H,E_=new $e,T_=new $e,nn=class extends Ol{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=$d*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $d*2*Math.atan(Math.tan(Wm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ja.x,ja.y).multiplyScalar(-e/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-e/ja.z)}getViewSize(e,n){return this.getViewBounds(e,E_,T_),n.subVectors(T_,E_)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Wm*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,u=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/u,a*=s.width/l,i*=s.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},_g=class extends hf{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},zl=class extends Ks{constructor(e,n,i=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new _g}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},js=class extends Ol{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Sg=class extends hf{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends Ks{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Sg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},Os=-90,zs=1,pf=class extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new nn(Os,zs,e,n);a.layers=this.layers,this.add(a);let r=new nn(Os,zs,e,n);r.layers=this.layers,this.add(r);let s=new nn(Os,zs,e,n);s.layers=this.layers,this.add(s);let o=new nn(Os,zs,e,n);o.layers=this.layers,this.add(o);let l=new nn(Os,zs,e,n);l.layers=this.layers,this.add(l);let u=new nn(Os,zs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(let u of n)this.remove(u);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,u,f]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=C,e.setRenderTarget(i,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,d,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},mf=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},$g="\\[\\]\\.:\\/",Hb=new RegExp("["+$g+"]","g"),Yg="[^"+$g+"]",Gb="[^"+$g.replace("\\.","")+"]",Wb=/((?:WC+[\/:])*)/.source.replace("WC",Yg),qb=/(WCOD+)?/.source.replace("WCOD",Gb),Xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yg),$b=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yg),Yb=new RegExp("^"+Wb+qb+Xb+$b+"$"),Zb=["material","materials","bones","map"],Mg=class{constructor(e,n,i){let a=i||wt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,a)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,r=i.length;a!==r;++a)i[a].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},wt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hb,"")}static parseTrackName(e){let n=Yb.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let r=i.nodeName.substring(a+1);Zb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)e[n++]=i[a]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let s=e[a];if(s===void 0){let u=n.nodeName;Be("PropertyBinding: Trying to update property for track: "+u+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Mg;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];oP=new Float32Array(1),R_=new bt,Vl=class{constructor(e,n,i=0,a=1/0){this.ray=new Tl(e,n),this.near=i,this.far=a,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Be("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return R_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R_),this}intersectObject(e,n=!0,i=[]){return wg(e,this,i,n),i.sort(P_),i}intersectObjects(e,n=!0,i=[]){for(let a=0,r=e.length;a<r;a++)wg(e[a],this,i,n);return i.sort(P_),i}};Cg=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=a,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gf}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gf)});function OS(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function jb(t){let e=new WeakMap;function n(o,l){let u=o.array,f=o.usage,p=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){let f=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,f);else{p.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<p.length;g++){let x=p[d],C=p[g];C.start<=x.start+x.count+1?x.count=Math.max(x.count,C.start+C.count-x.start):(++d,p[d]=C)}p.length=d+1;for(let g=0,x=p.length;g<x;g++){let C=p[g];t.bufferSubData(u,C.start*f.BYTES_PER_ELEMENT,f,C.start,C.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:a,remove:r,update:s}}function k2(t,e,n,i,a,r){let s=new Ze(0),o=a===!0?0:1,l,u,f=null,p=0,d=null;function g(m){let w=m.isScene===!0?m.background:null;if(w&&w.isTexture){let M=m.backgroundBlurriness>0;w=e.get(w,M)}return w}function x(m){let w=!1,M=g(m);M===null?y(s,o):M&&M.isColor&&(y(M,1),w=!0);let I=t.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function C(m,w){let M=g(w);M&&(M.isCubeTexture||M.mapping===Wl)?(u===void 0&&(u=new at(new Tn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Gr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P2.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(zS),u.material.toneMapped=Je.getTransfer(M.colorSpace)!==ot,(f!==M||p!==M.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,p=M.version,d=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new at(new Nl(2,2),new Kn({name:"BackgroundMaterial",uniforms:Gr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Je.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,p=M.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,w){m.getRGB(sh,Xg(t)),n.buffers.color.setClear(sh.r,sh.g,sh.b,w,r)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(m,w=1){s.set(m),o=w,y(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,y(s,o)},render:x,addToRenderList:C,dispose:c}}function D2(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=d(null),r=a,s=!1;function o(P,k,X,O,V){let Z=!1,Y=p(P,O,X,k);r!==Y&&(r=Y,u(r.object)),Z=g(P,O,X,V),Z&&x(P,O,X,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,M(P,k,X,O),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function p(P,k,X,O){let V=O.wireframe===!0,Z=i[k.id];Z===void 0&&(Z={},i[k.id]=Z);let Y=P.isInstancedMesh===!0?P.id:0,U=Z[Y];U===void 0&&(U={},Z[Y]=U);let ee=U[X.id];ee===void 0&&(ee={},U[X.id]=ee);let ce=ee[V];return ce===void 0&&(ce=d(l()),ee[V]=ce),ce}function d(P){let k=[],X=[],O=[];for(let V=0;V<n;V++)k[V]=0,X[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:O,object:P,attributes:{},index:null}}function g(P,k,X,O){let V=r.attributes,Z=k.attributes,Y=0,U=X.getAttributes();for(let ee in U)if(U[ee].location>=0){let se=V[ee],be=Z[ee];if(be===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),se===void 0||se.attribute!==be||be&&se.data!==be.data)return!0;Y++}return r.attributesNum!==Y||r.index!==O}function x(P,k,X,O){let V={},Z=k.attributes,Y=0,U=X.getAttributes();for(let ee in U)if(U[ee].location>=0){let se=Z[ee];se===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));let be={};be.attribute=se,se&&se.data&&(be.data=se.data),V[ee]=be,Y++}r.attributes=V,r.attributesNum=Y,r.index=O}function C(){let P=r.newAttributes;for(let k=0,X=P.length;k<X;k++)P[k]=0}function y(P){c(P,0)}function c(P,k){let X=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;X[P]=1,O[P]===0&&(t.enableVertexAttribArray(P),O[P]=1),V[P]!==k&&(t.vertexAttribDivisor(P,k),V[P]=k)}function m(){let P=r.newAttributes,k=r.enabledAttributes;for(let X=0,O=k.length;X<O;X++)k[X]!==P[X]&&(t.disableVertexAttribArray(X),k[X]=0)}function w(P,k,X,O,V,Z,Y){Y===!0?t.vertexAttribIPointer(P,k,X,V,Z):t.vertexAttribPointer(P,k,X,O,V,Z)}function M(P,k,X,O){C();let V=O.attributes,Z=X.getAttributes(),Y=k.defaultAttributeValues;for(let U in Z){let ee=Z[U];if(ee.location>=0){let ce=V[U];if(ce===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),ce!==void 0){let se=ce.normalized,be=ce.itemSize,ze=e.get(ce);if(ze===void 0)continue;let dt=ze.buffer,Ke=ze.type,te=ze.bytesPerElement,pe=Ke===t.INT||Ke===t.UNSIGNED_INT||ce.gpuType===Sf;if(ce.isInterleavedBufferAttribute){let le=ce.data,Oe=le.stride,Ve=ce.offset;if(le.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ee.locationSize;Ne++)c(ee.location+Ne,le.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<ee.locationSize;Ne++)y(ee.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Ne=0;Ne<ee.locationSize;Ne++)w(ee.location+Ne,be/ee.locationSize,Ke,se,Oe*te,(Ve+be/ee.locationSize*Ne)*te,pe)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<ee.locationSize;le++)c(ee.location+le,ce.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<ee.locationSize;le++)y(ee.location+le);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let le=0;le<ee.locationSize;le++)w(ee.location+le,be/ee.locationSize,Ke,se,be*te,be/ee.locationSize*le*te,pe)}}else if(Y!==void 0){let se=Y[U];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(ee.location,se);break;case 3:t.vertexAttrib3fv(ee.location,se);break;case 4:t.vertexAttrib4fv(ee.location,se);break;default:t.vertexAttrib1fv(ee.location,se)}}}}m()}function I(){A();for(let P in i){let k=i[P];for(let X in k){let O=k[X];for(let V in O){let Z=O[V];for(let Y in Z)f(Z[Y].object),delete Z[Y];delete O[V]}}delete i[P]}}function L(P){if(i[P.id]===void 0)return;let k=i[P.id];for(let X in k){let O=k[X];for(let V in O){let Z=O[V];for(let Y in Z)f(Z[Y].object),delete Z[Y];delete O[V]}}delete i[P.id]}function E(P){for(let k in i){let X=i[k];for(let O in X){let V=X[O];if(V[P.id]===void 0)continue;let Z=V[P.id];for(let Y in Z)f(Z[Y].object),delete Z[Y];delete V[P.id]}}}function _(P){for(let k in i){let X=i[k],O=P.isInstancedMesh===!0?P.id:0,V=X[O];if(V!==void 0){for(let Z in V){let Y=V[Z];for(let U in Y)f(Y[U].object),delete Y[U];delete V[Z]}delete X[O],Object.keys(X).length===0&&delete i[k]}}}function A(){R(),s=!0,r!==a&&(r=a,u(r.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:C,enableAttribute:y,disableUnusedAttributes:m}}function F2(t,e,n){let i;function a(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function s(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];n.update(d,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function N2(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(E){return!(E!==oi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let _=E===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Pn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==bi&&!_)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp",f=l(u);f!==u&&(Ue("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=t.getParameter(t.MAX_SAMPLES),L=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:C,maxCubemapSize:y,maxAttributes:c,maxVertexUniforms:m,maxVaryings:w,maxFragmentUniforms:M,maxSamples:I,samples:L}}function B2(t){let e=this,n=null,i=0,a=!1,r=!1,s=new Ni,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let g=p.length!==0||d||i!==0||a;return a=d,i=p.length,g},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){n=f(p,d,0)},this.setState=function(p,d,g){let x=p.clippingPlanes,C=p.clipIntersection,y=p.clipShadows,c=t.get(p);if(!a||x===null||x.length===0||r&&!y)r?f(null):u();else{let m=r?0:i,w=m*4,M=c.clippingState||null;l.value=M,M=f(x,d,w,g);for(let I=0;I!==w;++I)M[I]=n[I];c.clippingState=M,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,d,g,x){let C=p!==null?p.length:0,y=null;if(C!==0){if(y=l.value,x!==!0||y===null){let c=g+C*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(y===null||y.length<c)&&(y=new Float32Array(c));for(let w=0,M=g;w!==C;++w,M+=4)s.copy(p[w]).applyMatrix4(m,o),s.normal.toArray(y,M),y[M+3]=s.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function z2(t){let e=[],n=[],i=[],a=t,r=t-cr+1+xS.length;for(let s=0;s<r;s++){let o=Math.pow(2,a);e.push(o);let l=1/o;s>t-cr?l=xS[s-t+cr-1]:s===0&&(l=0),n.push(l);let u=1/(o-2),f=-u,p=1+u,d=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,x=6,C=3,y=2,c=1,m=new Float32Array(C*x*g),w=new Float32Array(y*x*g),M=new Float32Array(c*x*g);for(let L=0;L<g;L++){let E=L%3*2/3-1,_=L>2?0:-1,A=[E,_,0,E+2/3,_,0,E+2/3,_+1,0,E,_,0,E+2/3,_+1,0,E,_+1,0];m.set(A,C*x*L),w.set(d,y*x*L);let R=[L,L,L,L,L,L];M.set(R,c*x*L)}let I=new Zn;I.setAttribute("position",new $n(m,C)),I.setAttribute("uv",new $n(w,y)),I.setAttribute("faceIndex",new $n(M,c)),i.push(new at(I,null)),a>cr&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function vS(t,e,n){let i=new Yn(t,e,n);return i.texture.mapping=Wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function no(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function V2(t,e,n){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function H2(t,e,n){let i=new Float32Array(Wr),a=new H(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function _S(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function SS(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function G2(t){let e=new WeakMap,n=new WeakMap,i=null;function a(d,g=!1){return d==null?null:g?s(d):r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===yf||g===vf)if(e.has(d)){let x=e.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let C=new uh(x.height);return C.fromEquirectangularTexture(t,d),e.set(d,C),d.addEventListener("dispose",u),o(C.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let g=d.mapping,x=g===yf||g===vf,C=g===sr||g===Hr;if(x||C){let y=n.get(d),c=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==c)return i===null&&(i=new lh(t)),y=x?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,n.set(d,y),y.texture;if(y!==void 0)return y.texture;{let m=d.image;return x&&m&&m.height>0||C&&m&&l(m)?(i===null&&(i=new lh(t)),y=x?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,n.set(d,y),d.addEventListener("dispose",f),y.texture):null}}}return d}function o(d,g){return g===yf?d.mapping=sr:g===vf&&(d.mapping=Hr),d}function l(d){let g=0,x=6;for(let C=0;C<x;C++)d[C]!==void 0&&g++;return g===x}function u(d){let g=d.target;g.removeEventListener("dispose",u);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function f(d){let g=d.target;g.removeEventListener("dispose",f);let x=n.get(g);x!==void 0&&(n.delete(g),x.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function W2(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Ur("WebGLRenderer: "+i+" extension not supported."),a}}}function q2(t,e,n,i){let a={},r=new WeakMap;function s(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",s),delete a[d.id];let g=r.get(d);g&&(e.remove(g),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,n.memory.geometries++),d}function l(p){let d=p.attributes;for(let g in d)e.update(d[g],t.ARRAY_BUFFER)}function u(p){let d=[],g=p.index,x=p.attributes.position,C=0;if(x===void 0)return;if(g!==null){let m=g.array;C=g.version;for(let w=0,M=m.length;w<M;w+=3){let I=m[w+0],L=m[w+1],E=m[w+2];d.push(I,L,L,E,E,I)}}else{let m=x.array;C=x.version;for(let w=0,M=m.length/3-1;w<M;w+=3){let I=w+0,L=w+1,E=w+2;d.push(I,L,L,E,E,I)}}let y=new(x.count>=65535?El:Al)(d,1);y.version=C;let c=r.get(p);c&&e.remove(c),r.set(p,y)}function f(p){let d=r.get(p);if(d){let g=p.index;g!==null&&d.version<g.version&&u(p)}else u(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function X2(t,e,n){let i;function a(p){i=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,d){t.drawElements(i,d,r,p*s),n.update(d,i,1)}function u(p,d,g){g!==0&&(t.drawElementsInstanced(i,d,r,p*s,g),n.update(d,i,g))}function f(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,g);let C=0;for(let y=0;y<g;y++)C+=d[y];n.update(C,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function $2(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function Y2(t,e,n){let i=new WeakMap,a=new Lt;function r(s,o,l){let u=s.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,d=i.get(o);if(d===void 0||d.count!==p){let A=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,C=o.morphAttributes.color!==void 0,y=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],w=0;g===!0&&(w=1),x===!0&&(w=2),C===!0&&(w=3);let M=o.attributes.position.count*w,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let L=new Float32Array(M*I*4*p),E=new Ll(L,M,I,p);E.type=bi,E.needsUpdate=!0;let _=w*4;for(let R=0;R<p;R++){let P=y[R],k=c[R],X=m[R],O=M*I*4*R;for(let V=0;V<P.count;V++){let Z=V*_;g===!0&&(a.fromBufferAttribute(P,V),L[O+Z+0]=a.x,L[O+Z+1]=a.y,L[O+Z+2]=a.z,L[O+Z+3]=0),x===!0&&(a.fromBufferAttribute(k,V),L[O+Z+4]=a.x,L[O+Z+5]=a.y,L[O+Z+6]=a.z,L[O+Z+7]=0),C===!0&&(a.fromBufferAttribute(X,V),L[O+Z+8]=a.x,L[O+Z+9]=a.y,L[O+Z+10]=a.z,L[O+Z+11]=X.itemSize===4?a.w:1)}}d={count:p,texture:E,size:new $e(M,I)},i.set(o,d),o.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let C=0;C<u.length;C++)g+=u[C];let x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function Z2(t,e,n,i,a){let r=new WeakMap;function s(u){let f=a.render.frame,p=u.geometry,d=e.get(u,p);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){let g=u.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return d}function o(){r=new WeakMap}function l(u){let f=u.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:s,dispose:o}}function j2(t,e,n,i,a,r){let s=new Yn(e,n,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,depthTexture:a?new ma(e,n):void 0}),o=new Yn(e,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),l=new Zn;l.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ut([0,2,0,0,2,0],2));let u=new Qd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new at(l,u),p=new js(-1,1,1,-1,0,1),d=null,g=null,x=!1,C,y=null,c=[],m=!1;this.setSize=function(w,M){s.setSize(w,M),o.setSize(w,M);for(let I=0;I<c.length;I++){let L=c[I];L.setSize&&L.setSize(w,M)}},this.setEffects=function(w){c=w,m=c.length>0&&c[0].isRenderPass===!0;let M=s.width,I=s.height;for(let L=0;L<c.length;L++){let E=c[L];E.setSize&&E.setSize(M,I)}},this.begin=function(w,M){if(x||w.toneMapping===wi&&c.length===0)return!1;if(y=M,M!==null){let I=M.width,L=M.height;(s.width!==I||s.height!==L)&&this.setSize(I,L)}return m===!1&&w.setRenderTarget(s),C=w.toneMapping,w.toneMapping=wi,!0},this.hasRenderPass=function(){return m},this.end=function(w,M){w.toneMapping=C,x=!0;let I=s,L=o;for(let E=0;E<c.length;E++){let _=c[E];if(_.enabled!==!1&&(_.render(w,L,I,M),_.needsSwap!==!1)){let A=I;I=L,L=A}}if(d!==w.outputColorSpace||g!==w.toneMapping){d=w.outputColorSpace,g=w.toneMapping,u.defines={},Je.getTransfer(d)===ot&&(u.defines.SRGB_TRANSFER="");let E=K2[g];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=I.texture,w.setRenderTarget(y),w.render(f,p),y=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),l.dispose(),u.dispose()}}function ao(t,e,n){let i=t[0];if(i<=0||i>0)return t;let a=e*n,r=MS[a];if(r===void 0&&(r=new Float32Array(a),MS[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fh(t,e){let n=wS[e];n===void 0&&(n=new Int32Array(e),wS[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function J2(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Q2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function eA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function tA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function nA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;LS.set(i),t.uniformMatrix2fv(this.addr,!1,LS),$t(n,i)}}function iA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;bS.set(i),t.uniformMatrix3fv(this.addr,!1,bS),$t(n,i)}}function aA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;CS.set(i),t.uniformMatrix4fv(this.addr,!1,CS),$t(n,i)}}function rA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function oA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function lA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function uA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function dA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function fA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function hA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(i0.compareFunction=n.isReversedDepthBuffer()?rh:ah,r=i0):r=VS,n.setTexture2D(e||r,a)}function pA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||GS,a)}function mA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||WS,a)}function gA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||HS,a)}function xA(t){switch(t){case 5126:return J2;case 35664:return Q2;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return aA;case 5124:case 35670:return rA;case 35667:case 35671:return sA;case 35668:case 35672:return oA;case 35669:case 35673:return lA;case 5125:return uA;case 36294:return cA;case 36295:return dA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}function yA(t,e){t.uniform1fv(this.addr,e)}function vA(t,e){let n=ao(e,this.size,2);t.uniform2fv(this.addr,n)}function _A(t,e){let n=ao(e,this.size,3);t.uniform3fv(this.addr,n)}function SA(t,e){let n=ao(e,this.size,4);t.uniform4fv(this.addr,n)}function MA(t,e){let n=ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function wA(t,e){let n=ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function CA(t,e){let n=ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bA(t,e){t.uniform1iv(this.addr,e)}function LA(t,e){t.uniform2iv(this.addr,e)}function IA(t,e){t.uniform3iv(this.addr,e)}function AA(t,e){t.uniform4iv(this.addr,e)}function EA(t,e){t.uniform1uiv(this.addr,e)}function TA(t,e){t.uniform2uiv(this.addr,e)}function RA(t,e){t.uniform3uiv(this.addr,e)}function PA(t,e){t.uniform4uiv(this.addr,e)}function kA(t,e,n){let i=this.cache,a=e.length,r=fh(n,a);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=i0:s=VS;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function DA(t,e,n){let i=this.cache,a=e.length,r=fh(n,a);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||GS,r[s])}function FA(t,e,n){let i=this.cache,a=e.length,r=fh(n,a);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||WS,r[s])}function NA(t,e,n){let i=this.cache,a=e.length,r=fh(n,a);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||HS,r[s])}function BA(t){switch(t){case 5126:return yA;case 35664:return vA;case 35665:return _A;case 35666:return SA;case 35674:return MA;case 35675:return wA;case 35676:return CA;case 5124:case 35670:return bA;case 35667:case 35671:return LA;case 35668:case 35672:return IA;case 35669:case 35673:return AA;case 5125:return EA;case 36294:return TA;case 36295:return RA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return NA}}function IS(t,e){t.seq.push(e),t.map[e.id]=e}function UA(t,e,n){let i=t.name,a=i.length;for(t0.lastIndex=0;;){let r=t0.exec(i),s=t0.lastIndex,o=r[1],l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===a){IS(n,u===void 0?new a0(o,t,e):new r0(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new s0(o),IS(n,p)),n=p}}}function AS(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}function VA(t,e){let n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){let o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function HA(t){Je._getMatrix(ES,Je.workingColorSpace,t);let e=`mat3( ${ES.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Cl:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function TS(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+VA(t.getShaderSource(e),o)}else return r}function GA(t,e){let n=HA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function qA(t,e){let n=WA[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function XA(){Je.getLuminanceCoefficients(oh);let t=oh.x.toFixed(4),e=oh.y.toFixed(4),n=oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $A(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tu).join(`
`)}function YA(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZA(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let r=t.getActiveAttrib(e,a),s=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function tu(t){return t!==""}function RS(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function PS(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function o0(t){return t.replace(KA,JA)}function JA(t,e){let n=We[e];if(n===void 0){let i=jA.get(e);if(i!==void 0)n=We[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return o0(n)}function kS(t){return t.replace(QA,eE)}function eE(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function DS(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nE(t){return tE[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function aE(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":iE[t.envMapMode]||"ENVMAP_TYPE_CUBE"}function sE(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":rE[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function lE(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":oE[t.combine]||"ENVMAP_BLENDING_NONE"}function uE(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cE(t,e,n,i){let a=t.getContext(),r=n.defines,s=n.vertexShader,o=n.fragmentShader,l=nE(n),u=aE(n),f=sE(n),p=lE(n),d=uE(n),g=$A(n),x=YA(r),C=a.createProgram(),y,c,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(tu).join(`
`),y.length>0&&(y+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(tu).join(`
`),c.length>0&&(c+=`
`)):(y=[DS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tu).join(`
`),c=[DS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?We.tonemapping_pars_fragment:"",n.toneMapping!==wi?qA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,GA("linearToOutputTexel",n.outputColorSpace),XA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(tu).join(`
`)),s=o0(s),s=RS(s,n),s=PS(s,n),o=o0(o),o=RS(o,n),o=PS(o,n),s=kS(s),o=kS(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,c=["#define varying in",n.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);let w=m+y+s,M=m+c+o,I=AS(a,a.VERTEX_SHADER,w),L=AS(a,a.FRAGMENT_SHADER,M);a.attachShader(C,I),a.attachShader(C,L),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function E(P){if(t.debug.checkShaderErrors){let k=a.getProgramInfoLog(C)||"",X=a.getShaderInfoLog(I)||"",O=a.getShaderInfoLog(L)||"",V=k.trim(),Z=X.trim(),Y=O.trim(),U=!0,ee=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,C,I,L);else{let ce=TS(a,I,"vertex"),se=TS(a,L,"fragment");Be("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ce+`
`+se)}else V!==""?Ue("WebGLProgram: Program Info Log:",V):(Z===""||Y==="")&&(ee=!1);ee&&(P.diagnostics={runnable:U,programLog:V,vertexShader:{log:Z,prefix:y},fragmentShader:{log:Y,prefix:c}})}a.deleteShader(I),a.deleteShader(L),_=new io(a,C),A=ZA(a,C)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(C,OA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=L,this}function fE(t){return t===ur||t===Kl||t===jl}function hE(t,e,n,i,a,r){let s=new Xs,o=new l0,l=new Set,u=[],f=new Map,p=i.logarithmicDepthBuffer,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function C(_,A,R,P,k,X){let O=P.fog,V=k.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||Z,Y),ee=U&&U.mapping===Wl?U.image.height:null,ce=g[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,be=se!==void 0?se.length:0,ze=0;V.morphAttributes.position!==void 0&&(ze=1),V.morphAttributes.normal!==void 0&&(ze=2),V.morphAttributes.color!==void 0&&(ze=3);let dt,Ke,te,pe;if(ce){let Le=qi[ce];dt=Le.vertexShader,Ke=Le.fragmentShader}else{dt=_.vertexShader,Ke=_.fragmentShader;let Le=o.getVertexShaderStage(_),mt=o.getFragmentShaderStage(_);o.update(_,Le,mt),te=Le.id,pe=mt.id}let le=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),Ve=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,pt=!!_.map,qe=!!_.matcap,rt=!!U,et=!!_.aoMap,je=!!_.lightMap,vt=!!_.bumpMap&&_.wireframe===!1,It=!!_.normalMap,Dt=!!_.displacementMap,Ot=!!_.emissiveMap,_t=!!_.metalnessMap,At=!!_.roughnessMap,F=_.anisotropy>0,on=_.clearcoat>0,it=_.dispersion>0,T=_.iridescence>0,S=_.sheen>0,N=_.transmission>0,W=F&&!!_.anisotropyMap,J=on&&!!_.clearcoatMap,ue=on&&!!_.clearcoatNormalMap,de=on&&!!_.clearcoatRoughnessMap,Q=T&&!!_.iridescenceMap,ne=T&&!!_.iridescenceThicknessMap,ge=S&&!!_.sheenColorMap,Re=S&&!!_.sheenRoughnessMap,_e=!!_.specularMap,xe=!!_.specularColorMap,ke=!!_.specularIntensityMap,z=N&&!!_.transmissionMap,me=N&&!!_.thicknessMap,D=!!_.gradientMap,ae=!!_.alphaMap,K=_.alphaTest>0,fe=!!_.alphaHash,ye=!!_.extensions,ie=wi;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ie=t.toneMapping);let Se={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:dt,fragmentShader:Ke,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&k.instanceColor!==null,instancingMorph:Ve&&k.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pt,matcap:qe,envMap:rt,envMapMode:rt&&U.mapping,envMapCubeUVHeight:ee,aoMap:et,lightMap:je,bumpMap:vt,normalMap:It,displacementMap:Dt,emissiveMap:Ot,normalMapObjectSpace:It&&_.normalMapType===iS,normalMapTangentSpace:It&&_.normalMapType===ih,packedNormalMap:It&&_.normalMapType===ih&&fE(_.normalMap.format),metalnessMap:_t,roughnessMap:At,anisotropy:F,anisotropyMap:W,clearcoat:on,clearcoatMap:J,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,dispersion:it,iridescence:T,iridescenceMap:Q,iridescenceThicknessMap:ne,sheen:S,sheenColorMap:ge,sheenRoughnessMap:Re,specularMap:_e,specularColorMap:xe,specularIntensityMap:ke,transmission:N,transmissionMap:z,thicknessMap:me,gradientMap:D,opaque:_.transparent===!1&&_.blending===Or&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:K,alphaHash:fe,combine:_.combine,mapUv:pt&&x(_.map.channel),aoMapUv:et&&x(_.aoMap.channel),lightMapUv:je&&x(_.lightMap.channel),bumpMapUv:vt&&x(_.bumpMap.channel),normalMapUv:It&&x(_.normalMap.channel),displacementMapUv:Dt&&x(_.displacementMap.channel),emissiveMapUv:Ot&&x(_.emissiveMap.channel),metalnessMapUv:_t&&x(_.metalnessMap.channel),roughnessMapUv:At&&x(_.roughnessMap.channel),anisotropyMapUv:W&&x(_.anisotropyMap.channel),clearcoatMapUv:J&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(_.sheenRoughnessMap.channel),specularMapUv:_e&&x(_.specularMap.channel),specularColorMapUv:xe&&x(_.specularColorMap.channel),specularIntensityMapUv:ke&&x(_.specularIntensityMap.channel),transmissionMapUv:z&&x(_.transmissionMap.channel),thicknessMapUv:me&&x(_.thicknessMap.channel),alphaMapUv:ae&&x(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(It||F),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(pt||ae),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&It===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Oe,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ze,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:pt&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vi,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&_.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function y(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)A.push(R),A.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(c(A,_),m(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function c(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function m(_,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function w(_){let A=g[_.type],R;if(A){let P=qi[A];R=mS.clone(P.uniforms)}else R=_.uniforms;return R}function M(_,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new cE(t,A,_,a),u.push(R),f.set(A,R)),R}function I(_){if(--_.usedTimes===0){let A=u.indexOf(_);u[A]=u[u.length-1],u.pop(),f.delete(_.cacheKey),_.destroy()}}function L(_){o.remove(_)}function E(){o.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:w,acquireProgram:M,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:E}}function pE(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function mE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function FS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function NS(){let t=[],e=0,n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,x,C,y,c){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:g,material:x,materialVariant:s(d),groupOrder:C,renderOrder:d.renderOrder,z:y,group:c},t[e]=m):(m.id=d.id,m.object=d,m.geometry=g,m.material=x,m.materialVariant=s(d),m.groupOrder=C,m.renderOrder=d.renderOrder,m.z=y,m.group=c),e++,m}function l(d,g,x,C,y,c){let m=o(d,g,x,C,y,c);x.transmission>0?i.push(m):x.transparent===!0?a.push(m):n.push(m)}function u(d,g,x,C,y,c){let m=o(d,g,x,C,y,c);x.transmission>0?i.unshift(m):x.transparent===!0?a.unshift(m):n.unshift(m)}function f(d,g,x){n.length>1&&n.sort(d||mE),i.length>1&&i.sort(g||FS),a.length>1&&a.sort(g||FS),x&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let d=e,g=t.length;d<g;d++){let x=t[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:u,finish:p,sort:f}}function gE(){let t=new WeakMap;function e(i,a){let r=t.get(i),s;return r===void 0?(s=new NS,t.set(i,[s])):a>=r.length?(s=new NS,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function xE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Ze};break;case"SpotLight":n={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function yE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}function _E(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SE(t){let e=new xE,n=yE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);let a=new H,r=new bt,s=new bt;function o(u){let f=0,p=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let g=0,x=0,C=0,y=0,c=0,m=0,w=0,M=0,I=0,L=0,E=0;u.sort(_E);for(let A=0,R=u.length;A<R;A++){let P=u[A],k=P.color,X=P.intensity,O=P.distance,V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ur?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=k.r*X,p+=k.g*X,d+=k.b*X;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],X);E++}else if(P.isDirectionalLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,U=n.get(P);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=P.shadow.matrix,m++}i.directional[g]=Z,g++}else if(P.isSpotLight){let Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(k).multiplyScalar(X),Z.distance=O,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[C]=Z;let Y=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,Y.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[C]=Y.matrix,P.castShadow){let U=n.get(P);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.spotShadow[C]=U,i.spotShadowMap[C]=V,M++}C++}else if(P.isRectAreaLight){let Z=e.get(P);Z.color.copy(k).multiplyScalar(X),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=Z,y++}else if(P.isPointLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let Y=P.shadow,U=n.get(P);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=V,i.pointShadowMatrix[x]=P.shadow.matrix,w++}i.point[x]=Z,x++}else if(P.isHemisphereLight){let Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(X),Z.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[c]=Z,c++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=d;let _=i.hash;(_.directionalLength!==g||_.pointLength!==x||_.spotLength!==C||_.rectAreaLength!==y||_.hemiLength!==c||_.numDirectionalShadows!==m||_.numPointShadows!==w||_.numSpotShadows!==M||_.numSpotMaps!==I||_.numLightProbes!==E)&&(i.directional.length=g,i.spot.length=C,i.rectArea.length=y,i.point.length=x,i.hemi.length=c,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=E,_.directionalLength=g,_.pointLength=x,_.spotLength=C,_.rectAreaLength=y,_.hemiLength=c,_.numDirectionalShadows=m,_.numPointShadows=w,_.numSpotShadows=M,_.numSpotMaps=I,_.numLightProbes=E,i.version=vE++)}function l(u,f){let p=0,d=0,g=0,x=0,C=0,y=f.matrixWorldInverse;for(let c=0,m=u.length;c<m;c++){let w=u[c];if(w.isDirectionalLight){let M=i.directional[p];M.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(y),p++}else if(w.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(y),M.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(y),g++}else if(w.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(y),s.identity(),r.copy(w.matrixWorld),r.premultiply(y),s.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),x++}else if(w.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(y),d++}else if(w.isHemisphereLight){let M=i.hemi[C];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(y),C++}}}return{setup:o,setupView:l,state:i}}function BS(t){let e=new SE(t),n=[],i=[],a=[];function r(d){p.camera=d,n.length=0,i.length=0,a.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function l(d){a.push(d)}function u(){e.setup(n)}function f(d){e.setupView(n,d)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:f,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function ME(t){let e=new WeakMap;function n(a,r=0){let s=e.get(a),o;return s===void 0?(o=new BS(t),e.set(a,[o])):r>=s.length?(o=new BS(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}function IE(t,e,n){let i=new Zs,a=new $e,r=new $e,s=new Lt,o=new ef,l=new tf,u={},f=n.maxTextureSize,p={[ha]:rn,[rn]:ha,[Vi]:Vi},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:wE,fragmentShader:CE}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let x=new Zn;x.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new at(x,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let c=this.type;this.render=function(L,E,_){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===xf&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hl);let A=t.getRenderTarget(),R=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Hi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=c!==this.type;X&&E.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(V=>V.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,V=L.length;O<V;O++){let Z=L[O],Y=Z.shadow;if(Y===void 0){Ue("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);let U=Y.getFrameExtents();a.multiply(U),r.copy(Y.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(r.x=Math.floor(f/U.x),a.x=r.x*U.x,Y.mapSize.x=r.x),a.y>f&&(r.y=Math.floor(f/U.y),a.y=r.y*U.y,Y.mapSize.y=r.y));let ee=t.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=ee,Y.map===null||X===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Qs){if(Z.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Yn(a.x,a.y,{format:ur,type:Gi,minFilter:an,magFilter:an,generateMipmaps:!1}),Y.map.texture.name=Z.name+".shadowMap",Y.map.depthTexture=new ma(a.x,a.y,bi),Y.map.depthTexture.name=Z.name+".shadowMapDepth",Y.map.depthTexture.format=Ui,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Jt,Y.map.depthTexture.magFilter=Jt}else Z.isPointLight?(Y.map=new uh(a.x),Y.map.depthTexture=new Jd(a.x,Ci)):(Y.map=new Yn(a.x,a.y),Y.map.depthTexture=new ma(a.x,a.y,Ci)),Y.map.depthTexture.name=Z.name+".shadowMap",Y.map.depthTexture.format=Ui,this.type===Hl?(Y.map.depthTexture.compareFunction=ee?rh:ah,Y.map.depthTexture.minFilter=an,Y.map.depthTexture.magFilter=an):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Jt,Y.map.depthTexture.magFilter=Jt);Y.camera.updateProjectionMatrix()}let ce=Y.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ce;se++){if(Y.map.isWebGLCubeRenderTarget)t.setRenderTarget(Y.map,se),t.clear();else{se===0&&(t.setRenderTarget(Y.map),t.clear());let be=Y.getViewport(se);s.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),k.viewport(s)}if(Z.isPointLight){let be=Y.camera,ze=Y.matrix,dt=Z.distance||be.far;dt!==be.far&&(be.far=dt,be.updateProjectionMatrix()),eu.setFromMatrixPosition(Z.matrixWorld),be.position.copy(eu),n0.copy(be.position),n0.add(bE[se]),be.up.copy(LE[se]),be.lookAt(n0),be.updateMatrixWorld(),ze.makeTranslation(-eu.x,-eu.y,-eu.z),US.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(US,be.coordinateSystem,be.reversedDepth)}else Y.updateMatrices(Z);i=Y.getFrustum(),M(E,_,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Qs&&m(Y,_),Y.needsUpdate=!1}c=this.type,y.needsUpdate=!1,t.setRenderTarget(A,R,P)};function m(L,E){let _=e.update(C);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yn(a.x,a.y,{format:ur,type:Gi})),d.uniforms.shadow_pass.value=L.map.depthTexture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(E,null,_,d,C,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(E,null,_,g,C,null)}function w(L,E,_,A){let R=null,P=_.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?l:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let k=R.uuid,X=E.uuid,O=u[k];O===void 0&&(O={},u[k]=O);let V=O[X];V===void 0&&(V=R.clone(),O[X]=V,E.addEventListener("dispose",I)),R=V}if(R.visible=E.visible,R.wireframe=E.wireframe,A===Qs?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:p[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let k=t.properties.get(R);k.light=_}return R}function M(L,E,_,A,R){if(L.visible===!1)return;if(L.layers.test(E.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Qs)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,L.matrixWorld);let X=e.update(L),O=L.material;if(Array.isArray(O)){let V=X.groups;for(let Z=0,Y=V.length;Z<Y;Z++){let U=V[Z],ee=O[U.materialIndex];if(ee&&ee.visible){let ce=w(L,ee,A,R);L.onBeforeShadow(t,L,E,_,X,ce,U),t.renderBufferDirect(_,null,X,ce,L,U),L.onAfterShadow(t,L,E,_,X,ce,U)}}}else if(O.visible){let V=w(L,O,A,R);L.onBeforeShadow(t,L,E,_,X,V,null),t.renderBufferDirect(_,null,X,V,L,null),L.onAfterShadow(t,L,E,_,X,V,null)}}let k=L.children;for(let X=0,O=k.length;X<O;X++)M(k[X],E,_,A,R)}function I(L){L.target.removeEventListener("dispose",I);for(let _ in u){let A=u[_],R=L.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function AE(t,e){function n(){let D=!1,ae=new Lt,K=null,fe=new Lt(0,0,0,0);return{setMask:function(ye){K!==ye&&!D&&(t.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){D=ye},setClear:function(ye,ie,Se,Le,mt){mt===!0&&(ye*=Le,ie*=Le,Se*=Le),ae.set(ye,ie,Se,Le),fe.equals(ae)===!1&&(t.clearColor(ye,ie,Se,Le),fe.copy(ae))},reset:function(){D=!1,K=null,fe.set(-1,0,0,0)}}}function i(){let D=!1,ae=!1,K=null,fe=null,ye=null;return{setReversed:function(ie){if(ae!==ie){let Se=e.get("EXT_clip_control");ie?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ae=ie;let Le=ye;ye=null,this.setClear(Le)}},getReversed:function(){return ae},setTest:function(ie){ie?le(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(ie){K!==ie&&!D&&(t.depthMask(ie),K=ie)},setFunc:function(ie){if(ae&&(ie=hS[ie]),fe!==ie){switch(ie){case Ud:t.depthFunc(t.NEVER);break;case Od:t.depthFunc(t.ALWAYS);break;case zd:t.depthFunc(t.LESS);break;case zr:t.depthFunc(t.LEQUAL);break;case Vd:t.depthFunc(t.EQUAL);break;case Hd:t.depthFunc(t.GEQUAL);break;case Gd:t.depthFunc(t.GREATER);break;case Wd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ie}},setLocked:function(ie){D=ie},setClear:function(ie){ye!==ie&&(ye=ie,ae&&(ie=1-ie),t.clearDepth(ie))},reset:function(){D=!1,K=null,fe=null,ye=null,ae=!1}}}function a(){let D=!1,ae=null,K=null,fe=null,ye=null,ie=null,Se=null,Le=null,mt=null;return{setTest:function(st){D||(st?le(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(st){ae!==st&&!D&&(t.stencilMask(st),ae=st)},setFunc:function(st,Fn,Nn){(K!==st||fe!==Fn||ye!==Nn)&&(t.stencilFunc(st,Fn,Nn),K=st,fe=Fn,ye=Nn)},setOp:function(st,Fn,Nn){(ie!==st||Se!==Fn||Le!==Nn)&&(t.stencilOp(st,Fn,Nn),ie=st,Se=Fn,Le=Nn)},setLocked:function(st){D=st},setClear:function(st){mt!==st&&(t.clearStencil(st),mt=st)},reset:function(){D=!1,ae=null,K=null,fe=null,ye=null,ie=null,Se=null,Le=null,mt=null}}}let r=new n,s=new i,o=new a,l=new WeakMap,u=new WeakMap,f={},p={},d={},g=new WeakMap,x=[],C=null,y=!1,c=null,m=null,w=null,M=null,I=null,L=null,E=null,_=new Ze(0,0,0),A=0,R=!1,P=null,k=null,X=null,O=null,V=null,Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,U=0,ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Y=U>=1):ee.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Y=U>=2);let ce=null,se={},be=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),dt=new Lt().fromArray(be),Ke=new Lt().fromArray(ze);function te(D,ae,K,fe){let ye=new Uint8Array(4),ie=t.createTexture();t.bindTexture(D,ie),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<K;Se++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(ae+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return ie}let pe={};pe[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(zr),vt(!1),It(bg),le(t.CULL_FACE),et(Hi);function le(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function Oe(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function Ve(D,ae){return d[D]!==ae?(t.bindFramebuffer(D,ae),d[D]=ae,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ae),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ne(D,ae){let K=x,fe=!1;if(D){K=g.get(ae),K===void 0&&(K=[],g.set(ae,K));let ye=D.textures;if(K.length!==ye.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Se=ye.length;ie<Se;ie++)K[ie]=t.COLOR_ATTACHMENT0+ie;K.length=ye.length,fe=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,fe=!0);fe&&t.drawBuffers(K)}function pt(D){return C!==D?(t.useProgram(D),C=D,!0):!1}let qe={[Qa]:t.FUNC_ADD,[N_]:t.FUNC_SUBTRACT,[B_]:t.FUNC_REVERSE_SUBTRACT};qe[U_]=t.MIN,qe[O_]=t.MAX;let rt={[z_]:t.ZERO,[V_]:t.ONE,[H_]:t.SRC_COLOR,[Nd]:t.SRC_ALPHA,[Y_]:t.SRC_ALPHA_SATURATE,[X_]:t.DST_COLOR,[W_]:t.DST_ALPHA,[G_]:t.ONE_MINUS_SRC_COLOR,[Bd]:t.ONE_MINUS_SRC_ALPHA,[$_]:t.ONE_MINUS_DST_COLOR,[q_]:t.ONE_MINUS_DST_ALPHA,[Z_]:t.CONSTANT_COLOR,[K_]:t.ONE_MINUS_CONSTANT_COLOR,[j_]:t.CONSTANT_ALPHA,[J_]:t.ONE_MINUS_CONSTANT_ALPHA};function et(D,ae,K,fe,ye,ie,Se,Le,mt,st){if(D===Hi){y===!0&&(Oe(t.BLEND),y=!1);return}if(y===!1&&(le(t.BLEND),y=!0),D!==F_){if(D!==c||st!==R){if((m!==Qa||I!==Qa)&&(t.blendEquation(t.FUNC_ADD),m=Qa,I=Qa),st)switch(D){case Or:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.ONE,t.ONE);break;case Ig:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ag:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Be("WebGLState: Invalid blending: ",D);break}else switch(D){case Or:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ig:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ag:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",D);break}w=null,M=null,L=null,E=null,_.set(0,0,0),A=0,c=D,R=st}return}ye=ye||ae,ie=ie||K,Se=Se||fe,(ae!==m||ye!==I)&&(t.blendEquationSeparate(qe[ae],qe[ye]),m=ae,I=ye),(K!==w||fe!==M||ie!==L||Se!==E)&&(t.blendFuncSeparate(rt[K],rt[fe],rt[ie],rt[Se]),w=K,M=fe,L=ie,E=Se),(Le.equals(_)===!1||mt!==A)&&(t.blendColor(Le.r,Le.g,Le.b,mt),_.copy(Le),A=mt),c=D,R=!1}function je(D,ae){D.side===Vi?Oe(t.CULL_FACE):le(t.CULL_FACE);let K=D.side===rn;ae&&(K=!K),vt(K),D.blending===Or&&D.transparent===!1?et(Hi):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);let fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function vt(D){P!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),P=D)}function It(D){D!==k_?(le(t.CULL_FACE),D!==k&&(D===bg?t.cullFace(t.BACK):D===D_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),k=D}function Dt(D){D!==X&&(Y&&t.lineWidth(D),X=D)}function Ot(D,ae,K){D?(le(t.POLYGON_OFFSET_FILL),(O!==ae||V!==K)&&(O=ae,V=K,s.getReversed()&&(ae=-ae),t.polygonOffset(ae,K))):Oe(t.POLYGON_OFFSET_FILL)}function _t(D){D?le(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function At(D){D===void 0&&(D=t.TEXTURE0+Z-1),ce!==D&&(t.activeTexture(D),ce=D)}function F(D,ae,K){K===void 0&&(ce===null?K=t.TEXTURE0+Z-1:K=ce);let fe=se[K];fe===void 0&&(fe={type:void 0,texture:void 0},se[K]=fe),(fe.type!==D||fe.texture!==ae)&&(ce!==K&&(t.activeTexture(K),ce=K),t.bindTexture(D,ae||pe[D]),fe.type=D,fe.texture=ae)}function on(){let D=se[ce];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function it(){try{t.compressedTexImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function S(){try{t.texSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function N(){try{t.texSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function ue(){try{t.texStorage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function de(){try{t.texStorage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function Q(){try{t.texImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function ne(){try{t.texImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function ge(D){return p[D]!==void 0?p[D]:t.getParameter(D)}function Re(D,ae){p[D]!==ae&&(t.pixelStorei(D,ae),p[D]=ae)}function _e(D){dt.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),dt.copy(D))}function xe(D){Ke.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ke.copy(D))}function ke(D,ae){let K=u.get(ae);K===void 0&&(K=new WeakMap,u.set(ae,K));let fe=K.get(D);fe===void 0&&(fe=t.getUniformBlockIndex(ae,D.name),K.set(D,fe))}function z(D,ae){let fe=u.get(ae).get(D);l.get(ae)!==fe&&(t.uniformBlockBinding(ae,fe,D.__bindingPointIndex),l.set(ae,fe))}function me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},ce=null,se={},d={},g=new WeakMap,x=[],C=null,y=!1,c=null,m=null,w=null,M=null,I=null,L=null,E=null,_=new Ze(0,0,0),A=0,R=!1,P=null,k=null,X=null,O=null,V=null,dt.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:Oe,bindFramebuffer:Ve,drawBuffers:Ne,useProgram:pt,setBlending:et,setMaterial:je,setFlipSided:vt,setCullFace:It,setLineWidth:Dt,setPolygonOffset:Ot,setScissorTest:_t,activeTexture:At,bindTexture:F,unbindTexture:on,compressedTexImage2D:it,compressedTexImage3D:T,texImage2D:Q,texImage3D:ne,pixelStorei:Re,getParameter:ge,updateUBOMapping:ke,uniformBlockBinding:z,texStorage2D:ue,texStorage3D:de,texSubImage2D:S,texSubImage3D:N,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:_e,viewport:xe,reset:me}}function EE(t,e,n,i,a,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,f=new WeakMap,p=new Set,d,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(T,S){return x?new OffscreenCanvas(T,S):bl("canvas")}function y(T,S,N){let W=1,J=it(T);if((J.width>N||J.height>N)&&(W=N/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ue=Math.floor(W*J.width),de=Math.floor(W*J.height);d===void 0&&(d=C(ue,de));let Q=S?C(ue,de):d;return Q.width=ue,Q.height=de,Q.getContext("2d").drawImage(T,0,0,ue,de),Ue("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+de+")."),Q}else return"data"in T&&Ue("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function c(T){return T.generateMipmaps}function m(T){t.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(T,S,N,W,J,ue=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de;W&&(de=e.get("EXT_texture_norm16"),de||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=S;if(S===t.RED&&(N===t.FLOAT&&(Q=t.R32F),N===t.HALF_FLOAT&&(Q=t.R16F),N===t.UNSIGNED_BYTE&&(Q=t.R8),N===t.UNSIGNED_SHORT&&de&&(Q=de.R16_EXT),N===t.SHORT&&de&&(Q=de.R16_SNORM_EXT)),S===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.R8UI),N===t.UNSIGNED_SHORT&&(Q=t.R16UI),N===t.UNSIGNED_INT&&(Q=t.R32UI),N===t.BYTE&&(Q=t.R8I),N===t.SHORT&&(Q=t.R16I),N===t.INT&&(Q=t.R32I)),S===t.RG&&(N===t.FLOAT&&(Q=t.RG32F),N===t.HALF_FLOAT&&(Q=t.RG16F),N===t.UNSIGNED_BYTE&&(Q=t.RG8),N===t.UNSIGNED_SHORT&&de&&(Q=de.RG16_EXT),N===t.SHORT&&de&&(Q=de.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.RG8UI),N===t.UNSIGNED_SHORT&&(Q=t.RG16UI),N===t.UNSIGNED_INT&&(Q=t.RG32UI),N===t.BYTE&&(Q=t.RG8I),N===t.SHORT&&(Q=t.RG16I),N===t.INT&&(Q=t.RG32I)),S===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),N===t.UNSIGNED_INT&&(Q=t.RGB32UI),N===t.BYTE&&(Q=t.RGB8I),N===t.SHORT&&(Q=t.RGB16I),N===t.INT&&(Q=t.RGB32I)),S===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),N===t.UNSIGNED_INT&&(Q=t.RGBA32UI),N===t.BYTE&&(Q=t.RGBA8I),N===t.SHORT&&(Q=t.RGBA16I),N===t.INT&&(Q=t.RGBA32I)),S===t.RGB&&(N===t.UNSIGNED_SHORT&&de&&(Q=de.RGB16_EXT),N===t.SHORT&&de&&(Q=de.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),S===t.RGBA){let ne=ue?Cl:Je.getTransfer(J);N===t.FLOAT&&(Q=t.RGBA32F),N===t.HALF_FLOAT&&(Q=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Q=ne===ot?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&de&&(Q=de.RGBA16_EXT),N===t.SHORT&&de&&(Q=de.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function I(T,S){let N;return T?S===null||S===Ci||S===to?N=t.DEPTH24_STENCIL8:S===bi?N=t.DEPTH32F_STENCIL8:S===eo&&(N=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ci||S===to?N=t.DEPTH_COMPONENT24:S===bi?N=t.DEPTH_COMPONENT32F:S===eo&&(N=t.DEPTH_COMPONENT16),N}function L(T,S){return c(T)===!0||T.isFramebufferTexture&&T.minFilter!==Jt&&T.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function E(T){let S=T.target;S.removeEventListener("dispose",E),A(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&p.delete(S)}function _(T){let S=T.target;S.removeEventListener("dispose",_),P(S)}function A(T){let S=i.get(T);if(S.__webglInit===void 0)return;let N=T.source,W=g.get(N);if(W){let J=W[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(T),Object.keys(W).length===0&&g.delete(N)}i.remove(T)}function R(T){let S=i.get(T);t.deleteTexture(S.__webglTexture);let N=T.source,W=g.get(N);delete W[S.__cacheKey],s.memory.textures--}function P(T){let S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let J=0;J<S.__webglFramebuffer[W].length;J++)t.deleteFramebuffer(S.__webglFramebuffer[W][J]);else t.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)t.deleteFramebuffer(S.__webglFramebuffer[W]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let N=T.textures;for(let W=0,J=N.length;W<J;W++){let ue=i.get(N[W]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),s.memory.textures--),i.remove(N[W])}i.remove(T)}let k=0;function X(){k=0}function O(){return k}function V(T){k=T}function Z(){let T=k;return T>=a.maxTextures&&Ue("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),k+=1,T}function Y(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function U(T,S){let N=i.get(T);if(T.isVideoTexture&&F(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){let W=T.image;if(W===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(N,T,S);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+S)}function ee(T,S){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Oe(N,T,S);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+S)}function ce(T,S){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Oe(N,T,S);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+S)}function se(T,S){let N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Ve(N,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+S)}let be={[Hs]:t.REPEAT,[Bi]:t.CLAMP_TO_EDGE,[qd]:t.MIRRORED_REPEAT},ze={[Jt]:t.NEAREST,[tS]:t.NEAREST_MIPMAP_NEAREST,[ql]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[_f]:t.LINEAR_MIPMAP_NEAREST,[or]:t.LINEAR_MIPMAP_LINEAR},dt={[aS]:t.NEVER,[uS]:t.ALWAYS,[rS]:t.LESS,[ah]:t.LEQUAL,[sS]:t.EQUAL,[rh]:t.GEQUAL,[oS]:t.GREATER,[lS]:t.NOTEQUAL};function Ke(T,S){if(S.type===bi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===_f||S.magFilter===ql||S.magFilter===or||S.minFilter===an||S.minFilter===_f||S.minFilter===ql||S.minFilter===or)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,be[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,be[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,be[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ze[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ze[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,dt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jt||S.minFilter!==ql&&S.minFilter!==or||S.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function te(T,S){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",E));let W=S.source,J=g.get(W);J===void 0&&(J={},g.set(W,J));let ue=Y(S);if(ue!==T.__cacheKey){J[ue]===void 0&&(J[ue]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,N=!0),J[ue].usedTimes++;let de=J[T.__cacheKey];de!==void 0&&(J[T.__cacheKey].usedTimes--,de.usedTimes===0&&R(S)),T.__cacheKey=ue,T.__webglTexture=J[ue].texture}return N}function pe(T,S,N){return Math.floor(Math.floor(T/N)/S)}function le(T,S,N,W){let ue=T.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,N,W,S.data);else{ue.sort((Re,_e)=>Re.start-_e.start);let de=0;for(let Re=1;Re<ue.length;Re++){let _e=ue[de],xe=ue[Re],ke=_e.start+_e.count,z=pe(xe.start,S.width,4),me=pe(_e.start,S.width,4);xe.start<=ke+1&&z===me&&pe(xe.start+xe.count-1,S.width,4)===z?_e.count=Math.max(_e.count,xe.start+xe.count-_e.start):(++de,ue[de]=xe)}ue.length=de+1;let Q=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Re=0,_e=ue.length;Re<_e;Re++){let xe=ue[Re],ke=Math.floor(xe.start/4),z=Math.ceil(xe.count/4),me=ke%S.width,D=Math.floor(ke/S.width),ae=z,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,me,D,ae,K,N,W,S.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function Oe(T,S,N){let W=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=t.TEXTURE_3D);let J=te(T,S),ue=S.source;n.bindTexture(W,T.__webglTexture,t.TEXTURE0+N);let de=i.get(ue);if(ue.version!==de.__version||J===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let K=Je.getPrimaries(Je.workingColorSpace),fe=S.colorSpace===ga?null:Je.getPrimaries(S.colorSpace),ye=S.colorSpace===ga||K===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let ne=y(S.image,!1,a.maxTextureSize);ne=on(S,ne);let ge=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),_e=M(S.internalFormat,ge,Re,S.normalized,S.colorSpace,S.isVideoTexture);Ke(W,S);let xe,ke=S.mipmaps,z=S.isVideoTexture!==!0,me=de.__version===void 0||J===!0,D=ue.dataReady,ae=L(S,ne);if(S.isDepthTexture)_e=I(S.format===lr,S.type),me&&(z?n.texStorage2D(t.TEXTURE_2D,1,_e,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,_e,ne.width,ne.height,0,ge,Re,null));else if(S.isDataTexture)if(ke.length>0){z&&me&&n.texStorage2D(t.TEXTURE_2D,ae,_e,ke[0].width,ke[0].height);for(let K=0,fe=ke.length;K<fe;K++)xe=ke[K],z?D&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,xe.width,xe.height,ge,Re,xe.data):n.texImage2D(t.TEXTURE_2D,K,_e,xe.width,xe.height,0,ge,Re,xe.data);S.generateMipmaps=!1}else z?(me&&n.texStorage2D(t.TEXTURE_2D,ae,_e,ne.width,ne.height),D&&le(S,ne,ge,Re)):n.texImage2D(t.TEXTURE_2D,0,_e,ne.width,ne.height,0,ge,Re,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,_e,ke[0].width,ke[0].height,ne.depth);for(let K=0,fe=ke.length;K<fe;K++)if(xe=ke[K],S.format!==oi)if(ge!==null)if(z){if(D)if(S.layerUpdates.size>0){let ye=Zg(xe.width,xe.height,S.format,S.type);for(let ie of S.layerUpdates){let Se=xe.data.subarray(ie*ye/xe.data.BYTES_PER_ELEMENT,(ie+1)*ye/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,ie,xe.width,xe.height,1,ge,Se)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,ne.depth,ge,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,_e,xe.width,xe.height,ne.depth,0,xe.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,ne.depth,ge,Re,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,_e,xe.width,xe.height,ne.depth,0,ge,Re,xe.data)}else{z&&me&&n.texStorage2D(t.TEXTURE_2D,ae,_e,ke[0].width,ke[0].height);for(let K=0,fe=ke.length;K<fe;K++)xe=ke[K],S.format!==oi?ge!==null?z?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,xe.width,xe.height,ge,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,K,_e,xe.width,xe.height,0,xe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?D&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,xe.width,xe.height,ge,Re,xe.data):n.texImage2D(t.TEXTURE_2D,K,_e,xe.width,xe.height,0,ge,Re,xe.data)}else if(S.isDataArrayTexture)if(z){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,_e,ne.width,ne.height,ne.depth),D)if(S.layerUpdates.size>0){let K=Zg(ne.width,ne.height,S.format,S.type);for(let fe of S.layerUpdates){let ye=ne.data.subarray(fe*K/ne.data.BYTES_PER_ELEMENT,(fe+1)*K/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,ne.width,ne.height,1,ge,Re,ye)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(S.isData3DTexture)z?(me&&n.texStorage3D(t.TEXTURE_3D,ae,_e,ne.width,ne.height,ne.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)):n.texImage3D(t.TEXTURE_3D,0,_e,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(S.isFramebufferTexture){if(me)if(z)n.texStorage2D(t.TEXTURE_2D,ae,_e,ne.width,ne.height);else{let K=ne.width,fe=ne.height;for(let ye=0;ye<ae;ye++)n.texImage2D(t.TEXTURE_2D,ye,_e,K,fe,0,ge,Re,null),K>>=1,fe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){let K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),ne.parentNode!==K){K.appendChild(ne),p.add(S),K.onpaint=fe=>{let ye=fe.changedElements;for(let ie of p)ye.includes(ie.image)&&(ie.needsUpdate=!0)},K.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{let ye=t.RGBA,ie=t.RGBA,Se=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,ie,Se,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ke.length>0){if(z&&me){let K=it(ke[0]);n.texStorage2D(t.TEXTURE_2D,ae,_e,K.width,K.height)}for(let K=0,fe=ke.length;K<fe;K++)xe=ke[K],z?D&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ge,Re,xe):n.texImage2D(t.TEXTURE_2D,K,_e,ge,Re,xe);S.generateMipmaps=!1}else if(z){if(me){let K=it(ne);n.texStorage2D(t.TEXTURE_2D,ae,_e,K.width,K.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Re,ne)}else n.texImage2D(t.TEXTURE_2D,0,_e,ge,Re,ne);c(S)&&m(W),de.__version=ue.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ve(T,S,N){if(S.image.length!==6)return;let W=te(T,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+N);let ue=i.get(J);if(J.version!==ue.__version||W===!0){n.activeTexture(t.TEXTURE0+N);let de=Je.getPrimaries(Je.workingColorSpace),Q=S.colorSpace===ga?null:Je.getPrimaries(S.colorSpace),ne=S.colorSpace===ga||de===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ge=S.isCompressedTexture||S.image[0].isCompressedTexture,Re=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!ge&&!Re?_e[ie]=y(S.image[ie],!0,a.maxCubemapSize):_e[ie]=Re?S.image[ie].image:S.image[ie],_e[ie]=on(S,_e[ie]);let xe=_e[0],ke=r.convert(S.format,S.colorSpace),z=r.convert(S.type),me=M(S.internalFormat,ke,z,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,ae=ue.__version===void 0||W===!0,K=J.dataReady,fe=L(S,xe);Ke(t.TEXTURE_CUBE_MAP,S);let ye;if(ge){D&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,me,xe.width,xe.height);for(let ie=0;ie<6;ie++){ye=_e[ie].mipmaps;for(let Se=0;Se<ye.length;Se++){let Le=ye[Se];S.format!==oi?ke!==null?D?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,Le.width,Le.height,ke,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,me,Le.width,Le.height,0,Le.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,Le.width,Le.height,ke,z,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,me,Le.width,Le.height,0,ke,z,Le.data)}}}else{if(ye=S.mipmaps,D&&ae){ye.length>0&&fe++;let ie=it(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,me,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,ke,z,_e[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,me,_e[ie].width,_e[ie].height,0,ke,z,_e[ie].data);for(let Se=0;Se<ye.length;Se++){let mt=ye[Se].image[ie].image;D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,mt.width,mt.height,ke,z,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,me,mt.width,mt.height,0,ke,z,mt.data)}}else{D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ke,z,_e[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,me,ke,z,_e[ie]);for(let Se=0;Se<ye.length;Se++){let Le=ye[Se];D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,ke,z,Le.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,me,ke,z,Le.image[ie])}}}c(S)&&m(t.TEXTURE_CUBE_MAP),ue.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ne(T,S,N,W,J,ue){let de=r.convert(N.format,N.colorSpace),Q=r.convert(N.type),ne=M(N.internalFormat,de,Q,N.normalized,N.colorSpace),ge=i.get(S),Re=i.get(N);if(Re.__renderTarget=S,!ge.__hasExternalTextures){let _e=Math.max(1,S.width>>ue),xe=Math.max(1,S.height>>ue);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ue,ne,_e,xe,S.depth,0,de,Q,null):n.texImage2D(J,ue,ne,_e,xe,0,de,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),At(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,J,Re.__webglTexture,0,_t(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,J,Re.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(T,S,N){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){let W=S.depthTexture,J=W&&W.isDepthTexture?W.type:null,ue=I(S.stencilBuffer,J),de=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;At(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(S),ue,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(S),ue,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ue,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,T)}else{let W=S.textures;for(let J=0;J<W.length;J++){let ue=W[J],de=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),ne=M(ue.internalFormat,de,Q,ue.normalized,ue.colorSpace);At(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(S),ne,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(S),ne,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(T,S,N){let W=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ke(t.TEXTURE_CUBE_MAP,S.depthTexture);let ge=r.convert(S.depthTexture.format),Re=r.convert(S.depthTexture.type),_e;S.depthTexture.format===Ui?_e=t.DEPTH_COMPONENT24:S.depthTexture.format===lr&&(_e=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,_e,S.width,S.height,0,ge,Re,null)}}else U(S.depthTexture,0);let ue=J.__webglTexture,de=_t(S),Q=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,ne=S.depthTexture.format===lr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ui)At(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Q,ue,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ne,Q,ue,0);else if(S.depthTexture.format===lr)At(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Q,ue,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ne,Q,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(T){let S=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=W}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(N)for(let W=0;W<6;W++)qe(S.__webglFramebuffer[W],T,W);else{let W=T.texture.mipmaps;W&&W.length>0?qe(S.__webglFramebuffer[0],T,0):qe(S.__webglFramebuffer,T,0)}else if(N){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=t.createRenderbuffer(),pt(S.__webglDepthbuffer[W],T,!1);else{let J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),pt(S.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(T,S,N){let W=i.get(T);S!==void 0&&Ne(W.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&rt(T)}function je(T){let S=T.texture,N=i.get(T),W=i.get(S);T.addEventListener("dispose",_);let J=T.textures,ue=T.isWebGLCubeRenderTarget===!0,de=J.length>1;if(de||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=S.version,s.memory.textures++),ue){N.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[Q]=[];for(let ne=0;ne<S.mipmaps.length;ne++)N.__webglFramebuffer[Q][ne]=t.createFramebuffer()}else N.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)N.__webglFramebuffer[Q]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(de)for(let Q=0,ne=J.length;Q<ne;Q++){let ge=i.get(J[Q]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),s.memory.textures++)}if(T.samples>0&&At(T)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let ne=J[Q];N.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[Q]);let ge=r.convert(ne.format,ne.colorSpace),Re=r.convert(ne.type),_e=M(ne.internalFormat,ge,Re,ne.normalized,ne.colorSpace,T.isXRRenderTarget===!0),xe=_t(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,_e,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,N.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),pt(N.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ke(t.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Ne(N.__webglFramebuffer[Q][ne],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Ne(N.__webglFramebuffer[Q],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);c(S)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let Q=0,ne=J.length;Q<ne;Q++){let ge=J[Q],Re=i.get(ge),_e=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_e=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,Re.__webglTexture),Ke(_e,ge),Ne(N.__webglFramebuffer,T,ge,t.COLOR_ATTACHMENT0+Q,_e,0),c(ge)&&m(_e)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,W.__webglTexture),Ke(Q,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Ne(N.__webglFramebuffer[ne],T,S,t.COLOR_ATTACHMENT0,Q,ne);else Ne(N.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,Q,0);c(S)&&m(Q),n.unbindTexture()}T.depthBuffer&&rt(T)}function vt(T){let S=T.textures;for(let N=0,W=S.length;N<W;N++){let J=S[N];if(c(J)){let ue=w(T),de=i.get(J).__webglTexture;n.bindTexture(ue,de),m(ue),n.unbindTexture()}}}let It=[],Dt=[];function Ot(T){if(T.samples>0){if(At(T)===!1){let S=T.textures,N=T.width,W=T.height,J=t.COLOR_BUFFER_BIT,ue=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(T),Q=S.length>1;if(Q)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let ne=T.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);let Re=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,N,W,0,0,N,W,J,t.NEAREST),l===!0&&(It.length=0,Dt.length=0,It.push(t.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(It.push(ue),Dt.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);let Re=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function _t(T){return Math.min(a.maxSamples,T.samples)}function At(T){let S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(T){let S=s.render.frame;f.get(T)!==S&&(f.set(T,S),T.update())}function on(T,S){let N=T.colorSpace,W=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==wl&&N!==ga&&(Je.getTransfer(N)===ot?(W!==oi||J!==Pn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",N)),S}function it(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=X,this.getTextureUnits=O,this.setTextureUnits=V,this.setTexture2D=U,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=se,this.rebindTextures=et,this.setupRenderTarget=je,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function TE(t,e){function n(i,a=ga){let r,s=Je.getTransfer(a);if(i===Pn)return t.UNSIGNED_BYTE;if(i===Mf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Og)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===zg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bg)return t.BYTE;if(i===Ug)return t.SHORT;if(i===eo)return t.UNSIGNED_SHORT;if(i===Sf)return t.INT;if(i===Ci)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===Gi)return t.HALF_FLOAT;if(i===Vg)return t.ALPHA;if(i===Hg)return t.RGB;if(i===oi)return t.RGBA;if(i===Ui)return t.DEPTH_COMPONENT;if(i===lr)return t.DEPTH_STENCIL;if(i===Gg)return t.RED;if(i===Cf)return t.RED_INTEGER;if(i===ur)return t.RG;if(i===bf)return t.RG_INTEGER;if(i===Lf)return t.RGBA_INTEGER;if(i===Xl||i===$l||i===Yl||i===Zl)if(s===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$l)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===If||i===Af||i===Ef||i===Tf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===If)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Af)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ef)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rf||i===Pf||i===kf||i===Df||i===Ff||i===Kl||i===Nf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rf||i===Pf)return s===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Df)return r.COMPRESSED_R11_EAC;if(i===Ff)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Kl)return r.COMPRESSED_RG11_EAC;if(i===Nf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bf||i===Uf||i===Of||i===zf||i===Vf||i===Hf||i===Gf||i===Wf||i===qf||i===Xf||i===$f||i===Yf||i===Zf||i===Kf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Of)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$f)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jf||i===Jf||i===Qf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jf)return s===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eh||i===th||i===jl||i===nh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===eh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}function DE(t,e){function n(y,c){y.matrixAutoUpdate===!0&&y.updateMatrix(),c.value.copy(y.matrix)}function i(y,c){c.color.getRGB(y.fogColor.value,Xg(t)),c.isFog?(y.fogNear.value=c.near,y.fogFar.value=c.far):c.isFogExp2&&(y.fogDensity.value=c.density)}function a(y,c,m,w,M){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?r(y,c):c.isMeshLambertMaterial?(r(y,c),c.envMap&&(y.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(r(y,c),p(y,c)):c.isMeshPhongMaterial?(r(y,c),f(y,c),c.envMap&&(y.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(r(y,c),d(y,c),c.isMeshPhysicalMaterial&&g(y,c,M)):c.isMeshMatcapMaterial?(r(y,c),x(y,c)):c.isMeshDepthMaterial?r(y,c):c.isMeshDistanceMaterial?(r(y,c),C(y,c)):c.isMeshNormalMaterial?r(y,c):c.isLineBasicMaterial?(s(y,c),c.isLineDashedMaterial&&o(y,c)):c.isPointsMaterial?l(y,c,m,w):c.isSpriteMaterial?u(y,c):c.isShadowMaterial?(y.color.value.copy(c.color),y.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(y,c){y.opacity.value=c.opacity,c.color&&y.diffuse.value.copy(c.color),c.emissive&&y.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(y.map.value=c.map,n(c.map,y.mapTransform)),c.alphaMap&&(y.alphaMap.value=c.alphaMap,n(c.alphaMap,y.alphaMapTransform)),c.bumpMap&&(y.bumpMap.value=c.bumpMap,n(c.bumpMap,y.bumpMapTransform),y.bumpScale.value=c.bumpScale,c.side===rn&&(y.bumpScale.value*=-1)),c.normalMap&&(y.normalMap.value=c.normalMap,n(c.normalMap,y.normalMapTransform),y.normalScale.value.copy(c.normalScale),c.side===rn&&y.normalScale.value.negate()),c.displacementMap&&(y.displacementMap.value=c.displacementMap,n(c.displacementMap,y.displacementMapTransform),y.displacementScale.value=c.displacementScale,y.displacementBias.value=c.displacementBias),c.emissiveMap&&(y.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,y.emissiveMapTransform)),c.specularMap&&(y.specularMap.value=c.specularMap,n(c.specularMap,y.specularMapTransform)),c.alphaTest>0&&(y.alphaTest.value=c.alphaTest);let m=e.get(c),w=m.envMap,M=m.envMapRotation;w&&(y.envMap.value=w,y.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qS),y.reflectivity.value=c.reflectivity,y.ior.value=c.ior,y.refractionRatio.value=c.refractionRatio),c.lightMap&&(y.lightMap.value=c.lightMap,y.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,y.lightMapTransform)),c.aoMap&&(y.aoMap.value=c.aoMap,y.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,y.aoMapTransform))}function s(y,c){y.diffuse.value.copy(c.color),y.opacity.value=c.opacity,c.map&&(y.map.value=c.map,n(c.map,y.mapTransform))}function o(y,c){y.dashSize.value=c.dashSize,y.totalSize.value=c.dashSize+c.gapSize,y.scale.value=c.scale}function l(y,c,m,w){y.diffuse.value.copy(c.color),y.opacity.value=c.opacity,y.size.value=c.size*m,y.scale.value=w*.5,c.map&&(y.map.value=c.map,n(c.map,y.uvTransform)),c.alphaMap&&(y.alphaMap.value=c.alphaMap,n(c.alphaMap,y.alphaMapTransform)),c.alphaTest>0&&(y.alphaTest.value=c.alphaTest)}function u(y,c){y.diffuse.value.copy(c.color),y.opacity.value=c.opacity,y.rotation.value=c.rotation,c.map&&(y.map.value=c.map,n(c.map,y.mapTransform)),c.alphaMap&&(y.alphaMap.value=c.alphaMap,n(c.alphaMap,y.alphaMapTransform)),c.alphaTest>0&&(y.alphaTest.value=c.alphaTest)}function f(y,c){y.specular.value.copy(c.specular),y.shininess.value=Math.max(c.shininess,1e-4)}function p(y,c){c.gradientMap&&(y.gradientMap.value=c.gradientMap)}function d(y,c){y.metalness.value=c.metalness,c.metalnessMap&&(y.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,y.metalnessMapTransform)),y.roughness.value=c.roughness,c.roughnessMap&&(y.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,y.roughnessMapTransform)),c.envMap&&(y.envMapIntensity.value=c.envMapIntensity)}function g(y,c,m){y.ior.value=c.ior,c.sheen>0&&(y.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),y.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(y.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,y.sheenColorMapTransform)),c.sheenRoughnessMap&&(y.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,y.sheenRoughnessMapTransform))),c.clearcoat>0&&(y.clearcoat.value=c.clearcoat,y.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(y.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,y.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(y.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===rn&&y.clearcoatNormalScale.value.negate())),c.dispersion>0&&(y.dispersion.value=c.dispersion),c.iridescence>0&&(y.iridescence.value=c.iridescence,y.iridescenceIOR.value=c.iridescenceIOR,y.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(y.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,y.iridescenceMapTransform)),c.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),c.transmission>0&&(y.transmission.value=c.transmission,y.transmissionSamplerMap.value=m.texture,y.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(y.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,y.transmissionMapTransform)),y.thickness.value=c.thickness,c.thicknessMap&&(y.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=c.attenuationDistance,y.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(y.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(y.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=c.specularIntensity,y.specularColor.value.copy(c.specularColor),c.specularColorMap&&(y.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,y.specularColorMapTransform)),c.specularIntensityMap&&(y.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,c){c.matcap&&(y.matcap.value=c.matcap)}function C(y,c){let m=e.get(c).light;y.referencePosition.value.setFromMatrixPosition(m.matrixWorld),y.nearDistance.value=m.shadow.camera.near,y.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function FE(t,e,n,i){let a={},r={},s=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,I){let L=I.program;i.uniformBlockBinding(M,L)}function u(M,I){let L=a[M.id];L===void 0&&(y(M),L=f(M),a[M.id]=L,M.addEventListener("dispose",m));let E=I.program;i.updateUBOMapping(M,E);let _=e.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function f(M){let I=p();M.__bindingPointIndex=I;let L=t.createBuffer(),E=M.__size,_=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,L),t.bufferData(t.UNIFORM_BUFFER,E,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,I,L),L}function p(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let I=a[M.id],L=M.uniforms,E=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,I);for(let _=0,A=L.length;_<A;_++){let R=L[_];if(Array.isArray(R))for(let P=0,k=R.length;P<k;P++)g(R[P],_,P,E);else g(R,_,0,E)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(M,I,L,E){if(C(M,I,L,E)===!0){let _=M.__offset,A=M.value;if(Array.isArray(A)){let R=0;for(let P=0;P<A.length;P++){let k=A[P],X=c(k);x(k,M.__data,R),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(R+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,M.__data)}}function x(M,I,L){typeof M=="number"||typeof M=="boolean"?I[0]=M:M.isMatrix3?(I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0):ArrayBuffer.isView(M)?I.set(new M.constructor(M.buffer,M.byteOffset,I.length)):M.toArray(I,L)}function C(M,I,L,E){let _=M.value,A=I+"_"+L;if(E[A]===void 0)return typeof _=="number"||typeof _=="boolean"?E[A]=_:ArrayBuffer.isView(_)?E[A]=_.slice():E[A]=_.clone(),!0;{let R=E[A];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return E[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function y(M){let I=M.uniforms,L=0,E=16;for(let A=0,R=I.length;A<R;A++){let P=Array.isArray(I[A])?I[A]:[I[A]];for(let k=0,X=P.length;k<X;k++){let O=P[k],V=Array.isArray(O.value)?O.value:[O.value];for(let Z=0,Y=V.length;Z<Y;Z++){let U=V[Z],ee=c(U),ce=L%E,se=ce%ee.boundary,be=ce+se;L+=se,be!==0&&E-be<ee.storage&&(L+=E-be),O.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=L,L+=ee.storage}}}let _=L%E;return _>0&&(L+=E-_),M.__size=L,M.__cache={},this}function c(M){let I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(I.boundary=16,I.storage=M.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",M),I}function m(M){let I=M.target;I.removeEventListener("dispose",m);let L=s.indexOf(I.__bindingPointIndex);s.splice(L,1),t.deleteBuffer(a[I.id]),delete a[I.id],delete r[I.id]}function w(){for(let M in a)t.deleteBuffer(a[M]);s=[],a={},r={}}return{bind:l,update:u,dispose:w}}function BE(){return Wi===null&&(Wi=new jd(NE,16,16,ur,Gi),Wi.name="DFG_LUT",Wi.minFilter=an,Wi.magFilter=an,Wi.wrapS=Bi,Wi.wrapT=Bi,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Jb,Qb,eL,tL,nL,iL,aL,rL,sL,oL,lL,uL,cL,dL,fL,hL,pL,mL,gL,xL,yL,vL,_L,SL,ML,wL,CL,bL,LL,IL,AL,EL,TL,RL,PL,kL,DL,FL,NL,BL,UL,OL,zL,VL,HL,GL,WL,qL,XL,$L,YL,ZL,KL,jL,JL,QL,eI,tI,nI,iI,aI,rI,sI,oI,lI,uI,cI,dI,fI,hI,pI,mI,gI,xI,yI,vI,_I,SI,MI,wI,CI,bI,LI,II,AI,EI,TI,RI,PI,kI,DI,FI,NI,BI,UI,OI,zI,VI,HI,GI,WI,qI,XI,$I,YI,ZI,KI,jI,JI,QI,e2,t2,n2,i2,a2,r2,s2,o2,l2,u2,c2,d2,f2,h2,p2,m2,g2,x2,y2,v2,_2,S2,M2,w2,C2,b2,L2,I2,A2,E2,T2,R2,We,Me,qi,sh,P2,zS,cr,xS,Wr,U2,Ql,yS,jg,Jg,Qg,e0,O2,lh,uh,K2,VS,i0,HS,GS,WS,MS,wS,CS,bS,LS,a0,r0,s0,t0,io,OA,zA,ES,WA,oh,KA,jA,QA,tE,iE,rE,oE,dE,l0,u0,vE,wE,CE,bE,LE,US,eu,n0,RE,PE,c0,d0,kE,qS,NE,Wi,ch,XS=ve(()=>{Kg();Kg();Jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,oL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_L=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,SL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ML=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,CL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AL="gl_FragColor = linearToOutputTexel( gl_FragColor );",EL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,RL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,WL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$L=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KL=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eI=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xI=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_I=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,SI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,II=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$I=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,JI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Jb,alphahash_pars_fragment:Qb,alphamap_fragment:eL,alphamap_pars_fragment:tL,alphatest_fragment:nL,alphatest_pars_fragment:iL,aomap_fragment:aL,aomap_pars_fragment:rL,batching_pars_vertex:sL,batching_vertex:oL,begin_vertex:lL,beginnormal_vertex:uL,bsdfs:cL,iridescence_fragment:dL,bumpmap_pars_fragment:fL,clipping_planes_fragment:hL,clipping_planes_pars_fragment:pL,clipping_planes_pars_vertex:mL,clipping_planes_vertex:gL,color_fragment:xL,color_pars_fragment:yL,color_pars_vertex:vL,color_vertex:_L,common:SL,cube_uv_reflection_fragment:ML,defaultnormal_vertex:wL,displacementmap_pars_vertex:CL,displacementmap_vertex:bL,emissivemap_fragment:LL,emissivemap_pars_fragment:IL,colorspace_fragment:AL,colorspace_pars_fragment:EL,envmap_fragment:TL,envmap_common_pars_fragment:RL,envmap_pars_fragment:PL,envmap_pars_vertex:kL,envmap_physical_pars_fragment:WL,envmap_vertex:DL,fog_vertex:FL,fog_pars_vertex:NL,fog_fragment:BL,fog_pars_fragment:UL,gradientmap_pars_fragment:OL,lightmap_pars_fragment:zL,lights_lambert_fragment:VL,lights_lambert_pars_fragment:HL,lights_pars_begin:GL,lights_toon_fragment:qL,lights_toon_pars_fragment:XL,lights_phong_fragment:$L,lights_phong_pars_fragment:YL,lights_physical_fragment:ZL,lights_physical_pars_fragment:KL,lights_fragment_begin:jL,lights_fragment_maps:JL,lights_fragment_end:QL,lightprobes_pars_fragment:eI,logdepthbuf_fragment:tI,logdepthbuf_pars_fragment:nI,logdepthbuf_pars_vertex:iI,logdepthbuf_vertex:aI,map_fragment:rI,map_pars_fragment:sI,map_particle_fragment:oI,map_particle_pars_fragment:lI,metalnessmap_fragment:uI,metalnessmap_pars_fragment:cI,morphinstance_vertex:dI,morphcolor_vertex:fI,morphnormal_vertex:hI,morphtarget_pars_vertex:pI,morphtarget_vertex:mI,normal_fragment_begin:gI,normal_fragment_maps:xI,normal_pars_fragment:yI,normal_pars_vertex:vI,normal_vertex:_I,normalmap_pars_fragment:SI,clearcoat_normal_fragment_begin:MI,clearcoat_normal_fragment_maps:wI,clearcoat_pars_fragment:CI,iridescence_pars_fragment:bI,opaque_fragment:LI,packing:II,premultiplied_alpha_fragment:AI,project_vertex:EI,dithering_fragment:TI,dithering_pars_fragment:RI,roughnessmap_fragment:PI,roughnessmap_pars_fragment:kI,shadowmap_pars_fragment:DI,shadowmap_pars_vertex:FI,shadowmap_vertex:NI,shadowmask_pars_fragment:BI,skinbase_vertex:UI,skinning_pars_vertex:OI,skinning_vertex:zI,skinnormal_vertex:VI,specularmap_fragment:HI,specularmap_pars_fragment:GI,tonemapping_fragment:WI,tonemapping_pars_fragment:qI,transmission_fragment:XI,transmission_pars_fragment:$I,uv_pars_fragment:YI,uv_pars_vertex:ZI,uv_vertex:KI,worldpos_vertex:jI,background_vert:JI,background_frag:QI,backgroundCube_vert:e2,backgroundCube_frag:t2,cube_vert:n2,cube_frag:i2,depth_vert:a2,depth_frag:r2,distance_vert:s2,distance_frag:o2,equirect_vert:l2,equirect_frag:u2,linedashed_vert:c2,linedashed_frag:d2,meshbasic_vert:f2,meshbasic_frag:h2,meshlambert_vert:p2,meshlambert_frag:m2,meshmatcap_vert:g2,meshmatcap_frag:x2,meshnormal_vert:y2,meshnormal_frag:v2,meshphong_vert:_2,meshphong_frag:S2,meshphysical_vert:M2,meshphysical_frag:w2,meshtoon_vert:C2,meshtoon_frag:b2,points_vert:L2,points_frag:I2,shadow_vert:A2,shadow_frag:E2,sprite_vert:T2,sprite_frag:R2},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},qi={basic:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:xn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:xn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:xn([Me.points,Me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:xn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:xn([Me.common,Me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:xn([Me.sprite,Me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:xn([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:xn([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};qi.physical={uniforms:xn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};sh={r:0,b:0,g:0},P2=new bt,zS=new He;zS.set(-1,0,0,0,1,0,0,0,1);cr=4,xS=[.125,.215,.35,.446,.526,.582],Wr=20,U2=256,Ql=new js,yS=new Ze,jg=null,Jg=0,Qg=0,e0=!1,O2=new H,lh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){let{size:s=256,position:o=O2}=r;jg=this._renderer.getRenderTarget(),Jg=this._renderer.getActiveCubeFace(),Qg=this._renderer.getActiveMipmapLevel(),e0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=SS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_S(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jg,Jg,Qg),this._renderer.xr.enabled=e0,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===sr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jg=this._renderer.getRenderTarget(),Jg=this._renderer.getActiveCubeFace(),Qg=this._renderer.getActiveMipmapLevel(),e0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Gi,format:oi,colorSpace:wl,depthBuffer:!1},a=vS(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vS(e,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z2(r)),this._blurMaterial=H2(r,e,n),this._ggxMaterial=V2(r,e,n)}return a}_compileMaterial(e){let n=new at(new Zn,e);this._renderer.compile(n,Ql)}_sceneToCubeUV(e,n,i,a,r){let l=new nn(90,1,n,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,g=p.toneMapping;p.getClearColor(yS),p.toneMapping=wi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new Tn,new Vr({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let C=this._backgroundBox,y=C.material,c=!1,m=e.background;m?m.isColor&&(y.color.copy(m),e.background=null,c=!0):(y.color.copy(yS),c=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(l.up.set(0,u[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[w],r.y,r.z)):M===1?(l.up.set(0,0,u[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[w],r.z)):(l.up.set(0,u[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[w]));let I=this._cubeSize;no(a,M*I,w>2?I:0,I,I),p.setRenderTarget(a),c&&p.render(C,l),p.render(e,l)}p.toneMapping=g,p.autoClear=d,e.background=m}_textureToCubeUV(e,n){let i=this._renderer,a=e.mapping===sr||e.mapping===Hr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=SS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_S());let r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;no(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Ql)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){let a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;let l=s.uniforms,u=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-f*f),d=0+u*1.25,g=p*d,{_lodMax:x}=this,C=this._sizeLods[i],y=3*C*(i>x-cr?i-x+cr:0),c=4*(this._cubeSize-C);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=x-n,no(r,y,c,3*C,2*C),a.setRenderTarget(r),a.render(o,Ql),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,no(e,y,c,3*C,2*C),a.setRenderTarget(e),a.render(o,Ql)}_blur(e,n,i,a,r){let s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){let l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");let f=3,p=this._lodMeshes[a];p.material=u;let d=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Wr-1),C=r/x,y=isFinite(r)?1+Math.floor(f*C):Wr;y>Wr&&Ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wr}`);let c=[],m=0;for(let E=0;E<Wr;++E){let _=E/C,A=Math.exp(-_*_/2);c.push(A),E===0?m+=A:E<y&&(m+=2*A)}for(let E=0;E<c.length;E++)c[E]=c[E]/m;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=c,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:w}=this;d.dTheta.value=x,d.mipInt.value=w-i;let M=this._sizeLods[a],I=3*M*(a>w-cr?a-w+cr:0),L=4*(this._cubeSize-M);no(n,I,L,3*M,2*M),l.setRenderTarget(n),l.render(p,Ql)}};uh=class extends Yn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Rl(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Tn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Hi});r.uniforms.tEquirect.value=n;let s=new at(a,r),o=n.minFilter;return n.minFilter===or&&(n.minFilter=an),new pf(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}};K2={[Tg]:"LINEAR_TONE_MAPPING",[Rg]:"REINHARD_TONE_MAPPING",[Pg]:"CINEON_TONE_MAPPING",[Gl]:"ACES_FILMIC_TONE_MAPPING",[Dg]:"AGX_TONE_MAPPING",[Fg]:"NEUTRAL_TONE_MAPPING",[kg]:"CUSTOM_TONE_MAPPING"};VS=new Mn,i0=new ma(1,1),HS=new Ll,GS=new Kd,WS=new Rl,MS=[],wS=[],CS=new Float32Array(16),bS=new Float32Array(9),LS=new Float32Array(4);a0=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xA(n.type)}},r0=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BA(n.type)}},s0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let a=this.seq;for(let r=0,s=a.length;r!==s;++r){let o=a[r];o.setValue(e,n[o.id],i)}}},t0=/(\w+)(\])?(\[|\.)?/g;io=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);UA(o,l,this)}let a=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){let r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){let a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){let i=[];for(let a=0,r=e.length;a!==r;++a){let s=e[a];s.id in n&&i.push(s)}return i}};OA=37297,zA=0;ES=new He;WA={[Tg]:"Linear",[Rg]:"Reinhard",[Pg]:"Cineon",[Gl]:"ACESFilmic",[Dg]:"AgX",[Fg]:"Neutral",[kg]:"Custom"};oh=new H;KA=/^[ \t]*#include +<([\w\d./]+)>/gm;jA=new Map;QA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;tE={[Hl]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};iE={[sr]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[Wl]:"ENVMAP_TYPE_CUBE_UV"};rE={[Hr]:"ENVMAP_MODE_REFRACTION"};oE={[Eg]:"ENVMAP_BLENDING_MULTIPLY",[Q_]:"ENVMAP_BLENDING_MIX",[eS]:"ENVMAP_BLENDING_ADD"};dE=0,l0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new u0(e),n.set(e,i)),i}},u0=class{constructor(e){this.id=dE++,this.code=e,this.usedTimes=0}};vE=0;wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bE=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],LE=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],US=new bt,eu=new H,n0=new H;RE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,c0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new kl(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Kn({vertexShader:RE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new at(new Nl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},d0=class extends Oi{constructor(e,n){super();let i=this,a=null,r=1,s=null,o="local-floor",l=1,u=null,f=null,p=null,d=null,g=null,x=null,C=typeof XRWebGLBinding<"u",y=new c0,c={},m=n.getContextAttributes(),w=null,M=null,I=[],L=[],E=new $e,_=null,A=new nn;A.viewport=new Lt;let R=new nn;R.viewport=new Lt;let P=[A,R],k=new mf,X=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=I[te];return pe===void 0&&(pe=new $s,I[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=I[te];return pe===void 0&&(pe=new $s,I[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=I[te];return pe===void 0&&(pe=new $s,I[te]=pe),pe.getHandSpace()};function V(te){let pe=L.indexOf(te.inputSource);if(pe===-1)return;let le=I[pe];le!==void 0&&(le.update(te.inputSource,te.frame,u||s),le.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",Y);for(let te=0;te<I.length;te++){let pe=L[te];pe!==null&&(L[te]=null,I[te].disconnect(pe))}X=null,O=null,y.reset();for(let te in c)delete c[te];e.setRenderTarget(w),g=null,d=null,p=null,a=null,M=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(w=e.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(E),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Oe=null,Ve=null;m.depth&&(Ve=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=m.stencil?lr:Ui,Oe=m.stencil?to:Ci);let Ne={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Ne),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Yn(d.textureWidth,d.textureHeight,{format:oi,type:Pn,depthTexture:new ma(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(a,n,le),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Yn(g.framebufferWidth,g.framebufferHeight,{format:oi,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await a.requestReferenceSpace(o),Ke.setContext(a),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(te){for(let pe=0;pe<te.removed.length;pe++){let le=te.removed[pe],Oe=L.indexOf(le);Oe>=0&&(L[Oe]=null,I[Oe].disconnect(le))}for(let pe=0;pe<te.added.length;pe++){let le=te.added[pe],Oe=L.indexOf(le);if(Oe===-1){for(let Ne=0;Ne<I.length;Ne++)if(Ne>=L.length){L.push(le),Oe=Ne;break}else if(L[Ne]===null){L[Ne]=le,Oe=Ne;break}if(Oe===-1)break}let Ve=I[Oe];Ve&&Ve.connect(le)}}let U=new H,ee=new H;function ce(te,pe,le){U.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(le.matrixWorld);let Oe=U.distanceTo(ee),Ve=pe.projectionMatrix.elements,Ne=le.projectionMatrix.elements,pt=Ve[14]/(Ve[10]-1),qe=Ve[14]/(Ve[10]+1),rt=(Ve[9]+1)/Ve[5],et=(Ve[9]-1)/Ve[5],je=(Ve[8]-1)/Ve[0],vt=(Ne[8]+1)/Ne[0],It=pt*je,Dt=pt*vt,Ot=Oe/(-je+vt),_t=Ot*-je;if(pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(_t),te.translateZ(Ot),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ve[10]===-1)te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let At=pt+Ot,F=qe+Ot,on=It-_t,it=Dt+(Oe-_t),T=rt*qe/F*At,S=et*qe/F*At;te.projectionMatrix.makePerspective(on,it,T,S,At,F),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function se(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let pe=te.near,le=te.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(le=y.depthFar)),k.near=R.near=A.near=pe,k.far=R.far=A.far=le,(X!==k.near||O!==k.far)&&(a.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,O=k.far),k.layers.mask=te.layers.mask|6,A.layers.mask=k.layers.mask&-5,R.layers.mask=k.layers.mask&-3;let Oe=te.parent,Ve=k.cameras;se(k,Oe);for(let Ne=0;Ne<Ve.length;Ne++)se(Ve[Ne],Oe);Ve.length===2?ce(k,A,R):k.projectionMatrix.copy(A.projectionMatrix),be(te,k,Oe)};function be(te,pe,le){le===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(le.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=$d*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(k)},this.getCameraTexture=function(te){return c[te]};let ze=null;function dt(te,pe){if(f=pe.getViewerPose(u||s),x=pe,f!==null){let le=f.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let Oe=!1;le.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let qe=0;qe<le.length;qe++){let rt=le[qe],et=null;if(g!==null)et=g.getViewport(rt);else{let vt=p.getViewSubImage(d,rt);et=vt.viewport,qe===0&&(e.setRenderTargetTextures(M,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(M))}let je=P[qe];je===void 0&&(je=new nn,je.layers.enable(qe),je.viewport=new Lt,P[qe]=je),je.matrix.fromArray(rt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(rt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(et.x,et.y,et.width,et.height),qe===0&&(k.matrix.copy(je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(je)}let Ve=a.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){p=i.getBinding();let qe=p.getDepthInformation(le[0]);qe&&qe.isValid&&qe.texture&&y.init(qe,a.renderState)}if(Ve&&Ve.includes("camera-access")&&C){e.state.unbindTexture(),p=i.getBinding();for(let qe=0;qe<le.length;qe++){let rt=le[qe].camera;if(rt){let et=c[rt];et||(et=new kl,c[rt]=et);let je=p.getCameraImage(rt);et.sourceTexture=je}}}}for(let le=0;le<I.length;le++){let Oe=L[le],Ve=I[le];Oe!==null&&Ve!==void 0&&Ve.update(Oe,pe,u||s)}ze&&ze(te,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),x=null}let Ke=new OS;Ke.setAnimationLoop(dt),this.setAnimationLoop=function(te){ze=te},this.dispose=function(){}}},kE=new bt,qS=new He;qS.set(-1,0,0,0,1,0,0,0,1);NE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;ch=class{constructor(e={}){let{canvas:n=cS(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Pn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=s;let C=g,y=new Set([Lf,bf,Cf]),c=new Set([Pn,Ci,eo,to,Mf,wf]),m=new Uint32Array(4),w=new Int32Array(4),M=new H,I=null,L=null,E=[],_=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,k=null,X=null,O=null,V=null;this._outputColorSpace=Xn;let Z=0,Y=0,U=null,ee=-1,ce=null,se=new Lt,be=new Lt,ze=null,dt=new Ze(0),Ke=0,te=n.width,pe=n.height,le=1,Oe=null,Ve=null,Ne=new Lt(0,0,te,pe),pt=new Lt(0,0,te,pe),qe=!1,rt=new Zs,et=!1,je=!1,vt=new bt,It=new H,Dt=new Lt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function At(){return U===null?le:1}let F=i;function on(b,B){return n.getContext(b,B)}try{let b={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gf}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",st,!1),n.addEventListener("webglcontextcreationerror",Fn,!1),F===null){let B="webgl2";if(F=on(B,b),F===null)throw on(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Be("WebGLRenderer: "+b.message),b}let it,T,S,N,W,J,ue,de,Q,ne,ge,Re,_e,xe,ke,z,me,D,ae,K,fe,ye,ie;function Se(){it=new W2(F),it.init(),fe=new TE(F,it),T=new N2(F,it,e,fe),S=new AE(F,it),T.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),X=F.createFramebuffer(),O=F.createFramebuffer(),V=F.createFramebuffer(),N=new $2(F),W=new pE,J=new EE(F,it,S,W,T,fe,N),ue=new G2(R),de=new jb(F),ye=new D2(F,de),Q=new q2(F,de,N,ye),ne=new Z2(F,Q,de,ye,N),D=new Y2(F,T,J),ke=new B2(W),ge=new hE(R,ue,it,T,ye,ke),Re=new DE(R,W),_e=new gE,xe=new ME(it),me=new k2(R,ue,S,ne,x,l),z=new IE(R,ne,T),ie=new FE(F,N,T,S),ae=new F2(F,it,N),K=new X2(F,it,N),N.programs=ge.programs,R.capabilities=T,R.extensions=it,R.properties=W,R.renderLists=_e,R.shadowMap=z,R.state=S,R.info=N}Se(),C!==Pn&&(A=new j2(C,n.width,n.height,o,a,r));let Le=new d0(R,F);this.xr=Le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(b){b!==void 0&&(le=b,this.setSize(te,pe,!1))},this.getSize=function(b){return b.set(te,pe)},this.setSize=function(b,B,$=!0){if(Le.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,pe=B,n.width=Math.floor(b*le),n.height=Math.floor(B*le),$===!0&&(n.style.width=b+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(te*le,pe*le).floor()},this.setDrawingBufferSize=function(b,B,$){te=b,pe=B,le=$,n.width=Math.floor(b*$),n.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(C===Pn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(se)},this.getViewport=function(b){return b.copy(Ne)},this.setViewport=function(b,B,$,G){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,B,$,G),S.viewport(se.copy(Ne).multiplyScalar(le).round())},this.getScissor=function(b){return b.copy(pt)},this.setScissor=function(b,B,$,G){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,B,$,G),S.scissor(be.copy(pt).multiplyScalar(le).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(b){S.setScissorTest(qe=b)},this.setOpaqueSort=function(b){Oe=b},this.setTransparentSort=function(b){Ve=b},this.getClearColor=function(b){return b.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,$=!0){let G=0;if(b){let q=!1;if(U!==null){let Ce=U.texture.format;q=y.has(Ce)}if(q){let Ce=U.texture.type,Ee=c.has(Ce),we=me.getClearColor(),Pe=me.getClearAlpha(),De=we.r,Ge=we.g,Xe=we.b;Ee?(m[0]=De,m[1]=Ge,m[2]=Xe,m[3]=Pe,F.clearBufferuiv(F.COLOR,0,m)):(w[0]=De,w[1]=Ge,w[2]=Xe,w[3]=Pe,F.clearBufferiv(F.COLOR,0,w))}else G|=F.COLOR_BUFFER_BIT}B&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",st,!1),n.removeEventListener("webglcontextcreationerror",Fn,!1),me.dispose(),_e.dispose(),xe.dispose(),W.dispose(),ue.dispose(),ne.dispose(),ye.dispose(),ie.dispose(),ge.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",_0),Le.removeEventListener("sessionend",S0),xr.stop()};function mt(b){b.preventDefault(),qg("WebGLRenderer: Context Lost."),P=!0}function st(){qg("WebGLRenderer: Context Restored."),P=!1;let b=N.autoReset,B=z.enabled,$=z.autoUpdate,G=z.needsUpdate,q=z.type;Se(),N.autoReset=b,z.enabled=B,z.autoUpdate=$,z.needsUpdate=G,z.type=q}function Fn(b){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nn(b){let B=b.target;B.removeEventListener("dispose",Nn),Hu(B)}function Hu(b){Gu(b),W.remove(b)}function Gu(b){let B=W.get(b).programs;B!==void 0&&(B.forEach(function($){ge.releaseProgram($)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,G,q,Ce){B===null&&(B=Ot);let Ee=q.isMesh&&q.matrixWorld.determinantAffine()<0,we=OM(b,B,$,G,q);S.setMaterial(G,Ee);let Pe=$.index,De=1;if(G.wireframe===!0){if(Pe=Q.getWireframeAttribute($),Pe===void 0)return;De=2}let Ge=$.drawRange,Xe=$.attributes.position,Fe=Ge.start*De,ct=(Ge.start+Ge.count)*De;Ce!==null&&(Fe=Math.max(Fe,Ce.start*De),ct=Math.min(ct,(Ce.start+Ce.count)*De)),Pe!==null?(Fe=Math.max(Fe,0),ct=Math.min(ct,Pe.count)):Xe!=null&&(Fe=Math.max(Fe,0),ct=Math.min(ct,Xe.count));let Ft=ct-Fe;if(Ft<0||Ft===1/0)return;ye.setup(q,G,we,$,Pe);let Pt,ft=ae;if(Pe!==null&&(Pt=de.get(Pe),ft=K,ft.setIndex(Pt)),q.isMesh)G.wireframe===!0?(S.setLineWidth(G.wireframeLinewidth*At()),ft.setMode(F.LINES)):ft.setMode(F.TRIANGLES);else if(q.isLine){let ln=G.linewidth;ln===void 0&&(ln=1),S.setLineWidth(ln*At()),q.isLineSegments?ft.setMode(F.LINES):q.isLineLoop?ft.setMode(F.LINE_LOOP):ft.setMode(F.LINE_STRIP)}else q.isPoints?ft.setMode(F.POINTS):q.isSprite&&ft.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let ln=q._multiDrawStarts,Ie=q._multiDrawCounts,Bn=q._multiDrawCount,tt=Pe?de.get(Pe).bytesPerElement:1,Jn=W.get(G).currentProgram.getUniforms();for(let Ii=0;Ii<Bn;Ii++)Jn.setValue(F,"_gl_DrawID",Ii),ft.render(ln[Ii]/tt,Ie[Ii])}else if(q.isInstancedMesh)ft.renderInstances(Fe,Ft,q.count);else if($.isInstancedBufferGeometry){let ln=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ie=Math.min($.instanceCount,ln);ft.renderInstances(Fe,Ft,Ie)}else ft.render(Fe,Ft)};function gr(b,B,$){b.transparent===!0&&b.side===Vi&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,qu(b,B,$),b.side=ha,b.needsUpdate=!0,qu(b,B,$),b.side=Vi):qu(b,B,$)}this.compile=function(b,B,$=null){$===null&&($=b),L=xe.get($),L.init(B),_.push(L),$.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(L.pushLight(q),q.castShadow&&L.pushShadow(q))}),b!==$&&b.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(L.pushLight(q),q.castShadow&&L.pushShadow(q))}),L.setupLights();let G=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ce=q.material;if(Ce)if(Array.isArray(Ce))for(let Ee=0;Ee<Ce.length;Ee++){let we=Ce[Ee];gr(we,$,q),G.add(we)}else gr(Ce,$,q),G.add(Ce)}),L=_.pop(),G},this.compileAsync=function(b,B,$=null){let G=this.compile(b,B,$);return new Promise(q=>{function Ce(){if(G.forEach(function(Ee){W.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){q(b);return}setTimeout(Ce,10)}it.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Kr=null;function BM(b){Kr&&Kr(b)}function _0(){xr.stop()}function S0(){xr.start()}let xr=new OS;xr.setAnimationLoop(BM),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(b){Kr=b,Le.setAnimationLoop(b),b===null?xr.stop():xr.start()},Le.addEventListener("sessionstart",_0),Le.addEventListener("sessionend",S0),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(b,B);let $=Le.enabled===!0&&Le.isPresenting===!0,G=A!==null&&(U===null||$)&&A.begin(R,U);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(B),B=Le.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,B,U),L=xe.get(b,_.length),L.init(B),L.state.textureUnits=J.getTextureUnits(),_.push(L),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),rt.setFromProjectionMatrix(vt,_i,B.reversedDepth),je=this.localClippingEnabled,et=ke.init(this.clippingPlanes,je),I=_e.get(b,E.length),I.init(),E.push(I),Le.enabled===!0&&Le.isPresenting===!0){let Ee=R.xr.getDepthSensingMesh();Ee!==null&&wh(Ee,B,-1/0,R.sortObjects)}wh(b,B,0,R.sortObjects),I.finish(),R.sortObjects===!0&&I.sort(Oe,Ve,B.reversedDepth),_t=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,_t&&me.addToRenderList(I,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&ke.beginShadows();let q=L.state.shadowsArray;if(z.render(q,b,B),et===!0&&ke.endShadows(),(G&&A.hasRenderPass())===!1){let Ee=I.opaque,we=I.transmissive;if(L.setupLights(),B.isArrayCamera){let Pe=B.cameras;if(we.length>0)for(let De=0,Ge=Pe.length;De<Ge;De++){let Xe=Pe[De];w0(Ee,we,b,Xe)}_t&&me.render(b);for(let De=0,Ge=Pe.length;De<Ge;De++){let Xe=Pe[De];M0(I,b,Xe,Xe.viewport)}}else we.length>0&&w0(Ee,we,b,B),_t&&me.render(b),M0(I,b,B)}U!==null&&Y===0&&(J.updateMultisampleRenderTarget(U),J.updateRenderTargetMipmap(U)),G&&A.end(R),b.isScene===!0&&b.onAfterRender(R,b,B),ye.resetDefaultState(),ee=-1,ce=null,_.pop(),_.length>0?(L=_[_.length-1],J.setTextureUnits(L.state.textureUnits),et===!0&&ke.setGlobalState(R.clippingPlanes,L.state.camera)):L=null,E.pop(),E.length>0?I=E[E.length-1]:I=null,k!==null&&k.renderEnd()};function wh(b,B,$,G){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)L.pushLightProbeGrid(b);else if(b.isLight)L.pushLight(b),b.castShadow&&L.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||rt.intersectsSprite(b)){G&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(vt);let Ee=ne.update(b),we=b.material;we.visible&&I.push(b,Ee,we,$,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||rt.intersectsObject(b))){let Ee=ne.update(b),we=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Dt.copy(Ee.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(vt)),Array.isArray(we)){let Pe=Ee.groups;for(let De=0,Ge=Pe.length;De<Ge;De++){let Xe=Pe[De],Fe=we[Xe.materialIndex];Fe&&Fe.visible&&I.push(b,Ee,Fe,$,Dt.z,Xe)}}else we.visible&&I.push(b,Ee,we,$,Dt.z,null)}}let Ce=b.children;for(let Ee=0,we=Ce.length;Ee<we;Ee++)wh(Ce[Ee],B,$,G)}function M0(b,B,$,G){let{opaque:q,transmissive:Ce,transparent:Ee}=b;L.setupLightsView($),et===!0&&ke.setGlobalState(R.clippingPlanes,$),G&&S.viewport(se.copy(G)),q.length>0&&Wu(q,B,$),Ce.length>0&&Wu(Ce,B,$),Ee.length>0&&Wu(Ee,B,$),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function w0(b,B,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[G.id]===void 0){let Fe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[G.id]=new Yn(1,1,{generateMipmaps:!0,type:Fe?Gi:Pn,minFilter:or,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let Ce=L.state.transmissionRenderTarget[G.id],Ee=G.viewport||se;Ce.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);let we=R.getRenderTarget(),Pe=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(Ce),R.getClearColor(dt),Ke=R.getClearAlpha(),Ke<1&&R.setClearColor(16777215,.5),R.clear(),_t&&me.render($);let Ge=R.toneMapping;R.toneMapping=wi;let Xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),L.setupLightsView(G),et===!0&&ke.setGlobalState(R.clippingPlanes,G),Wu(b,$,G),J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce),it.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ct=0,Ft=B.length;ct<Ft;ct++){let Pt=B[ct],{object:ft,geometry:ln,material:Ie,group:Bn}=Pt;if(Ie.side===Vi&&ft.layers.test(G.layers)){let tt=Ie.side;Ie.side=rn,Ie.needsUpdate=!0,C0(ft,$,G,ln,Ie,Bn),Ie.side=tt,Ie.needsUpdate=!0,Fe=!0}}Fe===!0&&(J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce))}R.setRenderTarget(we,Pe,De),R.setClearColor(dt,Ke),Xe!==void 0&&(G.viewport=Xe),R.toneMapping=Ge}function Wu(b,B,$){let G=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Ce=b.length;q<Ce;q++){let Ee=b[q],{object:we,geometry:Pe,group:De}=Ee,Ge=Ee.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),we.layers.test($.layers)&&C0(we,B,$,Pe,Ge,De)}}function C0(b,B,$,G,q,Ce){b.onBeforeRender(R,B,$,G,q,Ce),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(R,B,$,G,b,Ce),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=rn,q.needsUpdate=!0,R.renderBufferDirect($,B,G,q,b,Ce),q.side=ha,q.needsUpdate=!0,R.renderBufferDirect($,B,G,q,b,Ce),q.side=Vi):R.renderBufferDirect($,B,G,q,b,Ce),b.onAfterRender(R,B,$,G,q,Ce)}function qu(b,B,$){B.isScene!==!0&&(B=Ot);let G=W.get(b),q=L.state.lights,Ce=L.state.shadowsArray,Ee=q.state.version,we=ge.getParameters(b,q.state,Ce,B,$,L.state.lightProbeGridArray),Pe=ge.getProgramCacheKey(we),De=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;let Ge=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=ue.get(b.envMap||G.environment,Ge),G.envMapRotation=G.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",Nn),De=new Map,G.programs=De);let Xe=De.get(Pe);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===Ee)return L0(b,we),Xe}else we.uniforms=ge.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,$,we),b.onBeforeCompile(we,R),Xe=ge.acquireProgram(we,Pe),De.set(Pe,Xe),G.uniforms=we.uniforms;let Fe=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=ke.uniform),L0(b,we),G.needsLights=VM(b),G.lightsStateVersion=Ee,G.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),G.lightProbeGrid=L.state.lightProbeGridArray.length>0,G.currentProgram=Xe,G.uniformsList=null,Xe}function b0(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=io.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function L0(b,B){let $=W.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function UM(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let $=0,G=b.length;$<G;$++){let q=b[$];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function OM(b,B,$,G,q){B.isScene!==!0&&(B=Ot),J.resetTextureUnits();let Ce=B.fog,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,we=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Je.workingColorSpace,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=ue.get(G.envMap||Ee,Pe),Ge=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Ft=!!$.morphAttributes.color,Pt=wi;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pt=R.toneMapping);let ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ln=ft!==void 0?ft.length:0,Ie=W.get(G),Bn=L.state.lights;if(et===!0&&(je===!0||b!==ce)){let gt=b===ce&&G.id===ee;ke.setState(G,b,gt)}let tt=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Bn.state.version||Ie.outputColorSpace!==we||q.isBatchedMesh&&Ie.batching===!1||!q.isBatchedMesh&&Ie.batching===!0||q.isBatchedMesh&&Ie.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ie.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ie.instancing===!1||!q.isInstancedMesh&&Ie.instancing===!0||q.isSkinnedMesh&&Ie.skinning===!1||!q.isSkinnedMesh&&Ie.skinning===!0||q.isInstancedMesh&&Ie.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ie.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ie.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ie.instancingMorph===!1&&q.morphTexture!==null||Ie.envMap!==De||G.fog===!0&&Ie.fog!==Ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ke.numPlanes||Ie.numIntersection!==ke.numIntersection)||Ie.vertexAlphas!==Ge||Ie.vertexTangents!==Xe||Ie.morphTargets!==Fe||Ie.morphNormals!==ct||Ie.morphColors!==Ft||Ie.toneMapping!==Pt||Ie.morphTargetsCount!==ln||!!Ie.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Ie.__version=G.version);let Jn=Ie.currentProgram;tt===!0&&(Jn=qu(G,B,q),k&&G.isNodeMaterial&&k.onUpdateProgram(G,Jn,Ie));let Ii=!1,Sa=!1,jr=!1,ht=Jn.getUniforms(),Nt=Ie.uniforms;if(S.useProgram(Jn.program)&&(Ii=!0,Sa=!0,jr=!0),G.id!==ee&&(ee=G.id,Sa=!0),Ie.needsLights){let gt=UM(L.state.lightProbeGridArray,q);Ie.lightProbeGrid!==gt&&(Ie.lightProbeGrid=gt,Sa=!0)}if(Ii||ce!==b){S.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(F,"projectionMatrix",b.projectionMatrix),ht.setValue(F,"viewMatrix",b.matrixWorldInverse);let wa=ht.map.cameraPosition;wa!==void 0&&wa.setValue(F,It.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&ht.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),ce!==b&&(ce=b,Sa=!0,jr=!0)}if(Ie.needsLights&&(Bn.state.directionalShadowMap.length>0&&ht.setValue(F,"directionalShadowMap",Bn.state.directionalShadowMap,J),Bn.state.spotShadowMap.length>0&&ht.setValue(F,"spotShadowMap",Bn.state.spotShadowMap,J),Bn.state.pointShadowMap.length>0&&ht.setValue(F,"pointShadowMap",Bn.state.pointShadowMap,J)),q.isSkinnedMesh){ht.setOptional(F,q,"bindMatrix"),ht.setOptional(F,q,"bindMatrixInverse");let gt=q.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ht.setValue(F,"boneTexture",gt.boneTexture,J))}q.isBatchedMesh&&(ht.setOptional(F,q,"batchingTexture"),ht.setValue(F,"batchingTexture",q._matricesTexture,J),ht.setOptional(F,q,"batchingIdTexture"),ht.setValue(F,"batchingIdTexture",q._indirectTexture,J),ht.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&ht.setValue(F,"batchingColorTexture",q._colorsTexture,J));let Ma=$.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0)&&D.update(q,$,Jn),(Sa||Ie.receiveShadow!==q.receiveShadow)&&(Ie.receiveShadow=q.receiveShadow,ht.setValue(F,"receiveShadow",q.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(Nt.envMapIntensity.value=B.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=BE()),Sa){if(ht.setValue(F,"toneMappingExposure",R.toneMappingExposure),Ie.needsLights&&zM(Nt,jr),Ce&&G.fog===!0&&Re.refreshFogUniforms(Nt,Ce),Re.refreshMaterialUniforms(Nt,G,le,pe,L.state.transmissionRenderTarget[b.id]),Ie.needsLights&&Ie.lightProbeGrid){let gt=Ie.lightProbeGrid;Nt.probesSH.value=gt.texture,Nt.probesMin.value.copy(gt.boundingBox.min),Nt.probesMax.value.copy(gt.boundingBox.max),Nt.probesResolution.value.copy(gt.resolution)}io.upload(F,b0(Ie),Nt,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(io.upload(F,b0(Ie),Nt,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(F,"center",q.center),ht.setValue(F,"modelViewMatrix",q.modelViewMatrix),ht.setValue(F,"normalMatrix",q.normalMatrix),ht.setValue(F,"modelMatrix",q.matrixWorld),G.uniformsGroups!==void 0){let gt=G.uniformsGroups;for(let wa=0,Jr=gt.length;wa<Jr;wa++){let I0=gt[wa];ie.update(I0,Jn),ie.bind(I0,Jn)}}return Jn}function zM(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function VM(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,B,$){let G=W.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=B,W.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let $=W.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,$=0){U=b,Z=B,Y=$;let G=null,q=!1,Ce=!1;if(b){let we=W.get(b);if(we.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(F.FRAMEBUFFER,we.__webglFramebuffer),se.copy(b.viewport),be.copy(b.scissor),ze=b.scissorTest,S.viewport(se),S.scissor(be),S.setScissorTest(ze),ee=-1;return}else if(we.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(we.__hasExternalTextures)J.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ge=b.depthTexture;if(we.__boundDepthTexture!==Ge){if(Ge!==null&&W.has(Ge)&&(b.width!==Ge.image.width||b.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ce=!0);let De=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[B])?G=De[B][$]:G=De[B],q=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?G=W.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[$]:G=De,se.copy(b.viewport),be.copy(b.scissor),ze=b.scissorTest}else se.copy(Ne).multiplyScalar(le).floor(),be.copy(pt).multiplyScalar(le).floor(),ze=qe;if($!==0&&(G=X),S.bindFramebuffer(F.FRAMEBUFFER,G)&&S.drawBuffers(b,G),S.viewport(se),S.scissor(be),S.setScissorTest(ze),q){let we=W.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,$)}else if(Ce){let we=B;for(let Pe=0;Pe<b.textures.length;Pe++){let De=W.get(b.textures[Pe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pe,De.__webglTexture,$,we)}}else if(b!==null&&$!==0){let we=W.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,we.__webglTexture,$)}ee=-1},this.readRenderTargetPixels=function(b,B,$,G,q,Ce,Ee,we=0){if(!(b&&b.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){S.bindFramebuffer(F.FRAMEBUFFER,Pe);try{let De=b.textures[we],Ge=De.format,Xe=De.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),!T.textureFormatReadable(Ge)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Xe)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-G&&$>=0&&$<=b.height-q&&F.readPixels(B,$,G,q,fe.convert(Ge),fe.convert(Xe),Ce)}finally{let De=U!==null?W.get(U).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,B,$,G,q,Ce,Ee,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe)if(B>=0&&B<=b.width-G&&$>=0&&$<=b.height-q){S.bindFramebuffer(F.FRAMEBUFFER,Pe);let De=b.textures[we],Ge=De.format,Xe=De.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),!T.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Fe),F.bufferData(F.PIXEL_PACK_BUFFER,Ce.byteLength,F.STREAM_READ),F.readPixels(B,$,G,q,fe.convert(Ge),fe.convert(Xe),0);let ct=U!==null?W.get(U).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,ct);let Ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fS(F,Ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ce),F.deleteBuffer(Fe),F.deleteSync(Ft),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,$=0){let G=Math.pow(2,-$),q=Math.floor(b.image.width*G),Ce=Math.floor(b.image.height*G),Ee=B!==null?B.x:0,we=B!==null?B.y:0;J.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ee,we,q,Ce),S.unbindTexture()},this.copyTextureToTexture=function(b,B,$=null,G=null,q=0,Ce=0){let Ee,we,Pe,De,Ge,Xe,Fe,ct,Ft,Pt=b.isCompressedTexture?b.mipmaps[Ce]:b.image;if($!==null)Ee=$.max.x-$.min.x,we=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,De=$.min.x,Ge=$.min.y,Xe=$.isBox3?$.min.z:0;else{let Nt=Math.pow(2,-q);Ee=Math.floor(Pt.width*Nt),we=Math.floor(Pt.height*Nt),b.isDataArrayTexture?Pe=Pt.depth:b.isData3DTexture?Pe=Math.floor(Pt.depth*Nt):Pe=1,De=0,Ge=0,Xe=0}G!==null?(Fe=G.x,ct=G.y,Ft=G.z):(Fe=0,ct=0,Ft=0);let ft=fe.convert(B.format),ln=fe.convert(B.type),Ie;B.isData3DTexture?(J.setTexture3D(B,0),Ie=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(J.setTexture2DArray(B,0),Ie=F.TEXTURE_2D_ARRAY):(J.setTexture2D(B,0),Ie=F.TEXTURE_2D),S.activeTexture(F.TEXTURE0),S.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let Bn=S.getParameter(F.UNPACK_ROW_LENGTH),tt=S.getParameter(F.UNPACK_IMAGE_HEIGHT),Jn=S.getParameter(F.UNPACK_SKIP_PIXELS),Ii=S.getParameter(F.UNPACK_SKIP_ROWS),Sa=S.getParameter(F.UNPACK_SKIP_IMAGES);S.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),S.pixelStorei(F.UNPACK_SKIP_PIXELS,De),S.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);let jr=b.isDataArrayTexture||b.isData3DTexture,ht=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Nt=W.get(b),Ma=W.get(B),gt=W.get(Nt.__renderTarget),wa=W.get(Ma.__renderTarget);S.bindFramebuffer(F.READ_FRAMEBUFFER,gt.__webglFramebuffer),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,wa.__webglFramebuffer);for(let Jr=0;Jr<Pe;Jr++)jr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(b).__webglTexture,q,Xe+Jr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(B).__webglTexture,Ce,Ft+Jr)),F.blitFramebuffer(De,Ge,Ee,we,Fe,ct,Ee,we,F.DEPTH_BUFFER_BIT,F.NEAREST);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||W.has(b)){let Nt=W.get(b),Ma=W.get(B);S.bindFramebuffer(F.READ_FRAMEBUFFER,O),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let gt=0;gt<Pe;gt++)jr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,q,Xe+gt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,q),ht?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ma.__webglTexture,Ce,Ft+gt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ma.__webglTexture,Ce),q!==0?F.blitFramebuffer(De,Ge,Ee,we,Fe,ct,Ee,we,F.COLOR_BUFFER_BIT,F.NEAREST):ht?F.copyTexSubImage3D(Ie,Ce,Fe,ct,Ft+gt,De,Ge,Ee,we):F.copyTexSubImage2D(Ie,Ce,Fe,ct,De,Ge,Ee,we);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ht?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Ie,Ce,Fe,ct,Ft,Ee,we,Pe,ft,ln,Pt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,Ce,Fe,ct,Ft,Ee,we,Pe,ft,Pt.data):F.texSubImage3D(Ie,Ce,Fe,ct,Ft,Ee,we,Pe,ft,ln,Pt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ce,Fe,ct,Ee,we,ft,ln,Pt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ce,Fe,ct,Pt.width,Pt.height,ft,Pt.data):F.texSubImage2D(F.TEXTURE_2D,Ce,Fe,ct,Ee,we,ft,ln,Pt);S.pixelStorei(F.UNPACK_ROW_LENGTH,Bn),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Jn),S.pixelStorei(F.UNPACK_SKIP_ROWS,Ii),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Sa),Ce===0&&B.generateMipmaps&&F.generateMipmap(Ie),S.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),S.unbindTexture()},this.resetState=function(){Z=0,Y=0,U=null,S.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}});var hh,h0=ve(()=>{hh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim()});var $S,YS=ve(()=>{$S=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()});var ZS,KS=ve(()=>{ZS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase())});var p0,jS=ve(()=>{KS();p0=t=>{let e=ZS(t);return e.charAt(0).toUpperCase()+e.slice(1)}});var ph,JS=ve(()=>{ph={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}});var QS,e1=ve(()=>{QS=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1}});var ro,UE,t1,n1=ve(()=>{"use strict";"use client";ro=Ai(Ca(),1);UE=(0,ro.createContext)({}),t1=()=>(0,ro.useContext)(UE)});var nu,i1,a1=ve(()=>{"use strict";"use client";nu=Ai(Ca(),1);JS();e1();h0();n1();i1=(0,nu.forwardRef)(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:a="",children:r,iconNode:s,...o},l)=>{let{size:u=24,strokeWidth:f=2,absoluteStrokeWidth:p=!1,color:d="currentColor",className:g=""}=t1()??{},x=i??p?Number(n??f)*24/Number(e??u):n??f;return(0,nu.createElement)("svg",{ref:l,...ph,width:e??u??ph.width,height:e??u??ph.height,stroke:t??d,strokeWidth:x,className:hh("lucide",g,a),...!r&&!QS(o)&&{"aria-hidden":"true"},...o},[...s.map(([C,y])=>(0,nu.createElement)(C,y)),...Array.isArray(r)?r:[r]])})});var mh,j,Ae=ve(()=>{mh=Ai(Ca(),1);h0();YS();jS();a1();j=(t,e)=>{let n=(0,mh.forwardRef)(({className:i,...a},r)=>(0,mh.createElement)(i1,{ref:r,iconNode:e,className:hh(`lucide-${$S(p0(t))}`,`lucide-${t}`,i),...a}));return n.displayName=p0(t),n}});var OE,iu,r1=ve(()=>{Ae();OE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],iu=j("award",OE)});var zE,au,s1=ve(()=>{Ae();zE=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],au=j("bath",zE)});var VE,so,o1=ve(()=>{Ae();VE=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],so=j("bed-double",VE)});var HE,ru,l1=ve(()=>{Ae();HE=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ru=j("bell",HE)});var GE,su,u1=ve(()=>{Ae();GE=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],su=j("bike",GE)});var WE,oo,c1=ve(()=>{Ae();WE=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],oo=j("box",WE)});var qE,ou,d1=ve(()=>{Ae();qE=[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]],ou=j("brush",qE)});var XE,xa,f1=ve(()=>{Ae();XE=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],xa=j("building-2",XE)});var $E,lu,h1=ve(()=>{Ae();$E=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],lu=j("calculator",$E)});var YE,lo,p1=ve(()=>{Ae();YE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],lo=j("calendar-check",YE)});var ZE,uu,m1=ve(()=>{Ae();ZE=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],uu=j("car",ZE)});var KE,cu,g1=ve(()=>{Ae();KE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],cu=j("check",KE)});var jE,uo,x1=ve(()=>{Ae();jE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],uo=j("chevron-right",jE)});var JE,du,y1=ve(()=>{Ae();JE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],du=j("clock",JE)});var QE,fu,v1=ve(()=>{Ae();QE=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],fu=j("coffee",QE)});var eT,hu,_1=ve(()=>{Ae();eT=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]],hu=j("cross",eT)});var tT,co,S1=ve(()=>{Ae();tT=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],co=j("dollar-sign",tT)});var nT,pu,M1=ve(()=>{Ae();nT=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],pu=j("droplets",nT)});var iT,mu,w1=ve(()=>{Ae();iT=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],mu=j("dumbbell",iT)});var aT,fo,C1=ve(()=>{Ae();aT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],fo=j("eye",aT)});var rT,qr,b1=ve(()=>{Ae();rT=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],qr=j("file-text",rT)});var sT,gu,L1=ve(()=>{Ae();sT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],gu=j("film",sT)});var oT,xu,I1=ve(()=>{Ae();oT=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],xu=j("footprints",oT)});var lT,yu,A1=ve(()=>{Ae();lT=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]],yu=j("git-compare",lT)});var uT,vu,E1=ve(()=>{Ae();uT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],vu=j("globe",uT)});var cT,ho,T1=ve(()=>{Ae();cT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ho=j("heart",cT)});var dT,li,R1=ve(()=>{Ae();dT=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],li=j("house",dT)});var fT,po,P1=ve(()=>{Ae();fT=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",key:"yxxwt6"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],po=j("landmark",fT)});var hT,_u,k1=ve(()=>{Ae();hT=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],_u=j("languages",hT)});var pT,mo,D1=ve(()=>{Ae();pT=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],mo=j("list",pT)});var mT,Su,F1=ve(()=>{Ae();mT=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Su=j("mail",mT)});var gT,go,N1=ve(()=>{Ae();gT=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],go=j("map-pin",gT)});var xT,Mu,B1=ve(()=>{Ae();xT=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Mu=j("map",xT)});var yT,wu,U1=ve(()=>{Ae();yT=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],wu=j("message-circle",yT)});var vT,xo,O1=ve(()=>{Ae();vT=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],xo=j("message-square",vT)});var _T,Cu,z1=ve(()=>{Ae();_T=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Cu=j("moon",_T)});var ST,bu,V1=ve(()=>{Ae();ST=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],bu=j("mountain",ST)});var MT,Lu,H1=ve(()=>{Ae();MT=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Lu=j("navigation",MT)});var wT,yo,G1=ve(()=>{Ae();wT=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],yo=j("palette",wT)});var CT,Iu,W1=ve(()=>{Ae();CT=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Iu=j("pause",CT)});var bT,Au,q1=ve(()=>{Ae();bT=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Au=j("phone",bT)});var LT,Eu,X1=ve(()=>{Ae();LT=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Eu=j("play",LT)});var IT,Tu,$1=ve(()=>{Ae();IT=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],Tu=j("route",IT)});var AT,Xr,Y1=ve(()=>{Ae();AT=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Xr=j("send",AT)});var ET,kn,Z1=ve(()=>{Ae();ET=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],kn=j("shield-check",ET)});var TT,vo,K1=ve(()=>{Ae();TT=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],vo=j("shopping-bag",TT)});var RT,_o,j1=ve(()=>{Ae();RT=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],_o=j("shopping-cart",RT)});var PT,$r,J1=ve(()=>{Ae();PT=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]],$r=j("sofa",PT)});var kT,Li,Q1=ve(()=>{Ae();kT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Li=j("sparkles",kT)});var DT,So,eM=ve(()=>{Ae();DT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],So=j("star",DT)});var FT,Ru,tM=ve(()=>{Ae();FT=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Ru=j("sun",FT)});var NT,Pu,nM=ve(()=>{Ae();NT=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Pu=j("thermometer",NT)});var BT,ku,iM=ve(()=>{Ae();BT=[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}],["path",{d:"M17 14V2",key:"8ymqnk"}]],ku=j("thumbs-down",BT)});var UT,Yr,aM=ve(()=>{Ae();UT=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]],Yr=j("train-front",UT)});var OT,Zr,rM=ve(()=>{Ae();OT=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],Zr=j("trees",OT)});var zT,Du,sM=ve(()=>{Ae();zT=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Du=j("trending-down",zT)});var VT,Fu,oM=ve(()=>{Ae();VT=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Fu=j("trending-up",VT)});var HT,dr,lM=ve(()=>{Ae();HT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],dr=j("triangle-alert",HT)});var GT,Nu,uM=ve(()=>{Ae();GT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Nu=j("user",GT)});var WT,Bu,cM=ve(()=>{Ae();WT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Bu=j("users",WT)});var qT,Xi,dM=ve(()=>{Ae();qT=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],Xi=j("utensils-crossed",qT)});var XT,Uu,fM=ve(()=>{Ae();XT=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Uu=j("volume-2",XT)});var $T,ya,hM=ve(()=>{Ae();$T=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],ya=j("wand-sparkles",$T)});var YT,fr,pM=ve(()=>{Ae();YT=[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],fr=j("waves-horizontal",YT)});var ZT,Ou,mM=ve(()=>{Ae();ZT=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],Ou=j("wind",ZT)});var KT,hr,gM=ve(()=>{Ae();KT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],hr=j("x",KT)});var xM=ve(()=>{"use strict";R1();Q1();lM();dM();hM();pM();r1();s1();o1();l1();u1();c1();d1();f1();h1();p1();m1();g1();x1();y1();v1();_1();S1();M1();w1();C1();b1();L1();I1();A1();E1();T1();P1();k1();D1();F1();N1();B1();U1();O1();z1();V1();H1();G1();W1();q1();X1();$1();Y1();Z1();K1();j1();J1();eM();tM();iM();nM();aM();rM();sM();oM();uM();cM();fM();mM();gM();});var EM={};$M(EM,{default:()=>kR});function y0(t,e,n){let i=e/100;if(i<=0)return t/(n*12);let a=Math.pow(1+i/2,2/12)-1,r=n*12;return t*a/(1-Math.pow(1+a,-r))}function jT(t){return t>=20?0:t>=15?.028:t>=10?.031:.04}function JT(t,e){let n=_h[e]||_h.longueuil,i=0,a=0;for(let[r,s]of n.brackets){let o=Math.min(t,r);if(o>a&&(i+=(o-a)*s),a=r,t<=r)break}return Math.round(i)}function AM(t,e,n=6,i=.028){let a=new Date().getFullYear(),r=[];for(let s=0;s<=n;s++){let o=a+s,l=t*Math.pow(1+i-.006,s),u=t*Math.pow(1+i,s),f=t*Math.pow(1+i+.006,s);for(let p of e){let d=Math.max(0,Math.min(1,(o-(p.year-2))/2));l+=t*(p.lo/100)*d,u+=t*((p.lo+p.hi)/2/100)*d,f+=t*(p.hi/100)*d}r.push({yr:o,low:Math.round(l),mid:Math.round(u),high:Math.round(f)})}return r}function _M(){let e=Date.now(),n=(i,a,r,s,o,l)=>({id:`${i}-${s}-${o}`,pid:i,pname:a,lid:r,type:s,ts:e-o*36e5,meta:l||null});return[n("p_eric","\xC9ric Bouchard","28374619","visit",52),n("p_eric","\xC9ric Bouchard","28374619","visit",29),n("p_eric","\xC9ric Bouchard","28374619","visit",5),n("p_eric","\xC9ric Bouchard","28374619","tour_view",29),n("p_eric","\xC9ric Bouchard","28374619","calc_use",28),n("p_eric","\xC9ric Bouchard","28374619","forecast_view",28),n("p_eric","\xC9ric Bouchard","28374619","chat_topic",27,{topic:"financement"}),n("p_eric","\xC9ric Bouchard","28374619","broker_message",4,{text:"Est-ce que le vendeur serait ouvert \xE0 une prise de possession en juillet?"}),n("p_nadia","Nadia Kaci","19052833","visit",70),n("p_nadia","Nadia Kaci","19052833","visit",20),n("p_nadia","Nadia Kaci","19052833","tour_view",20),n("p_nadia","Nadia Kaci","19052833","commute_calc",19),n("p_nadia","Nadia Kaci","19052833","calc_use",19),n("p_nadia","Nadia Kaci","19052833","reaction_interested",18),n("p_simon","Simon Lavall\xE9e","28374619","visit",90),n("p_simon","Simon Lavall\xE9e","28374619","reaction_pass",89,{reasons:["prix"]})]}function QT(t,e){let n={centris:t.id,adresse:`${t.addr}, ${t.area}`,type:t.typeFr,prix:t.price,evaluation_municipale:t.evalMun,superficie_pi2:t.sqft,annee:t.year,chambres:t.beds,sdb:t.baths,stationnement:t.parkFr,taxes_municipales_an:t.taxesMun,taxes_scolaires_an:t.taxesScol,frais_copro_mois:t.condoFees,chauffage:pr[t.heating].fr,inclusions:t.inclFr},i=t.dv.map(a=>`[DV ${a.s}] ${a.qFr} : ${a.aFr}`).join(`
`);return`Tu es l\u2019assistant de propri\xE9t\xE9 de ${sn.name}, ${sn.title_fr} (${sn.agency}), pour UNE seule inscription.

FICHE (source: fiche descriptive Centris) :
${JSON.stringify(n,null,1)}

D\xC9CLARATIONS DU VENDEUR (source: formulaire DV, extraits) :
${i}

R\xC8GLES STRICTES :
1. R\xE9ponds UNIQUEMENT \xE0 partir des donn\xE9es ci-dessus. Cite ta source (\xAB Selon la fiche\u2026 \xBB ou \xAB Selon la d\xE9claration du vendeur, section D7\u2026 \xBB).
2. Si l\u2019information n\u2019est pas dans les donn\xE9es : dis-le, ne devine JAMAIS, mets "escalate": true (transmis \xE0 ${sn.name}).
3. INTERDIT : conseil sur le prix d\u2019offre ou la n\xE9gociation, conseil juridique/fiscal/hypoth\xE9caire personnalis\xE9, toute caract\xE9risation des r\xE9sidents du quartier. Redirige vers ${sn.name}.
4. R\xE9ponds dans la langue du dernier message (d\xE9faut : ${e==="fr"?"fran\xE7ais":"anglais"}). Maximum 110 mots. Ton chaleureux et pr\xE9cis.
5. R\xE9ponds SEULEMENT avec un objet JSON valide, sans backticks :
{"reply": "\u2026", "escalate": true|false, "topics": ["\u2026"]}
"topics" : 1 \xE0 3 parmi : financement, taxes, copropriete, chauffage, renovations, inclusions, stationnement, quartier, visite, juridique, autre.`}async function eR(t,e,n,i){let a=n.slice(-12).map(u=>({role:u.role,content:u.text})).concat([{role:"user",content:i}]),l=((await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1e3,system:QT(t,e),messages:a})})).json()).content||[]).filter(u=>u.type==="text").map(u=>u.text).join(`
`).replace(/```json|```/g,"").trim();try{let u=JSON.parse(l);return{reply:u.reply||l,escalate:!!u.escalate,topics:Array.isArray(u.topics)&&u.topics.length?u.topics:["autre"]}}catch{return{reply:l||"\u2026",escalate:!1,topics:["autre"]}}}async function tR(t,e){let n=`Recherche des nouvelles R\xC9CENTES (transport, zonage, grands projets, construction, risques) susceptibles d\u2019influencer la valeur immobili\xE8re pr\xE8s de \xAB ${t.addr}, ${t.area} \xBB (Qu\xE9bec).
R\xE9sume 2 \xE0 4 facteurs concrets. Pour chacun estime un impact prudent sur les prix locaux, en pourcentage (n\xE9gatif possible).
R\xE9ponds SEULEMENT avec un objet JSON valide, sans backticks :
{"drivers":[{"kind":"transit|zoning|commercial|risk","label_fr":"\u2026","label_en":"\u2026","dist":"~x km|\u2014","year":2029,"lo":2,"hi":5,"src":"source"}],"note_fr":"mise en garde br\xE8ve","note_en":"brief caveat"}`,s=((await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1200,messages:[{role:"user",content:n}],tools:[{type:"web_search_20250305",name:"web_search"}]})})).json()).content||[]).filter(f=>f.type==="text").map(f=>f.text).join(`
`).replace(/```json|```/g,"").trim(),o=s.match(/\{[\s\S]*\}/),l=JSON.parse(o?o[0]:s);return{drivers:(l.drivers||[]).slice(0,4).map(f=>({kind:["transit","zoning","commercial","risk"].includes(f.kind)?f.kind:"commercial",fr:f.label_fr||f.label_en||"Facteur",en:f.label_en||f.label_fr||"Factor",dist:f.dist||"\u2014",year:Number(f.year)||new Date().getFullYear()+3,lo:Number(f.lo)||0,hi:Number(f.hi)||0,srcFr:f.src||"Actualit\xE9",srcEn:f.src||"News",live:!0})),noteFr:l.note_fr||"",noteEn:l.note_en||""}}function iR({rows:t,lang:e,height:n=150}){let a=n,r=44,s=8,o=10,l=22,u=t.flatMap(c=>[c.low,c.high]),f=Math.min(...u)*.995,p=Math.max(...u)*1.005,d=c=>r+c/(t.length-1)*(320-r-s),g=c=>o+(1-(c-f)/(p-f||1))*(a-o-l),x=c=>t.map((m,w)=>`${d(w)},${g(m[c])}`).join(" "),C=t.map((c,m)=>`${d(m)},${g(c.high)}`).concat(t.slice().reverse().map((c,m)=>`${d(t.length-1-m)},${g(c.low)}`)).join(" "),y=[f,(f+p)/2,p];return(0,h.jsxs)("svg",{viewBox:`0 0 320 ${a}`,width:"100%",height:a,role:"img","aria-label":"Projection de prix",children:[y.map((c,m)=>(0,h.jsxs)("g",{children:[(0,h.jsx)("line",{x1:r,x2:320-s,y1:g(c),y2:g(c),stroke:v.line,strokeWidth:"1"}),(0,h.jsx)("text",{x:r-6,y:g(c)+3,textAnchor:"end",style:{fontFamily:he.mono,fontSize:8.5,fill:v.sub},children:vh(c,e)})]},m)),(0,h.jsx)("polygon",{points:C,fill:v.metro,opacity:"0.10"}),(0,h.jsx)("polyline",{points:x("high"),fill:"none",stroke:v.metro,strokeWidth:"1",opacity:"0.4",strokeDasharray:"3 3"}),(0,h.jsx)("polyline",{points:x("low"),fill:"none",stroke:v.metro,strokeWidth:"1",opacity:"0.4",strokeDasharray:"3 3"}),(0,h.jsx)("polyline",{points:x("mid"),fill:"none",stroke:v.metro,strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"}),t.map((c,m)=>m%1===0?(0,h.jsx)("text",{x:d(m),y:a-6,textAnchor:"middle",style:{fontFamily:he.mono,fontSize:8.5,fill:v.sub},children:`\u2019${String(c.yr).slice(2)}`},m):null)]})}function aR({hours:t,series:e,lang:n,height:i=140}){let r=i,s=26,o=6,l=8,u=20,f=e.flatMap(C=>C.values),p=Math.max(...f)*1.1,d=(320-s-o)/t.length,g=Math.min(9,(d-4)/e.length),x=C=>l+(1-C/p)*(r-l-u);return(0,h.jsxs)("svg",{viewBox:`0 0 320 ${r}`,width:"100%",height:r,role:"img","aria-label":"Temps de trajet",children:[[0,p/2,p].map((C,y)=>(0,h.jsxs)("g",{children:[(0,h.jsx)("line",{x1:s,x2:320-o,y1:x(C),y2:x(C),stroke:v.line}),(0,h.jsx)("text",{x:s-4,y:x(C)+3,textAnchor:"end",style:{fontFamily:he.mono,fontSize:8,fill:v.sub},children:Math.round(C)})]},y)),t.map((C,y)=>(0,h.jsxs)("g",{children:[e.map((c,m)=>{let w=s+y*d+(d-g*e.length)/2+m*g,M=x(c.values[y]);return(0,h.jsx)("rect",{x:w,y:M,width:g-1.5,height:r-u-M,rx:"1.5",fill:c.color},m)}),(0,h.jsxs)("text",{x:s+y*d+d/2,y:r-6,textAnchor:"middle",style:{fontFamily:he.mono,fontSize:8,fill:v.sub},children:[C,"h"]})]},y))]})}function Mh(t,e,n=256,i=256,a=[1,1]){if(x0[t])return x0[t];let r=document.createElement("canvas");r.width=n,r.height=i,e(r.getContext("2d"),n,i);let s=new Pl(r);return s.wrapS=s.wrapT=Hs,s.repeat.set(a[0],a[1]),x0[t]=s,s}function rR(){return Mh("plank",(t,e,n)=>{t.fillStyle="#f2ede4",t.fillRect(0,0,e,n);for(let i=0;i<n;i+=32){let a=226+Math.floor(Math.random()*20);t.fillStyle=`rgb(${a},${a-7},${a-16})`,t.fillRect(0,i,e,30),t.fillStyle="rgba(120,100,78,.38)",t.fillRect(0,i+30,e,2);for(let r=Math.random()*70;r<e;r+=90+Math.random()*70)t.fillRect(r,i,2,30)}},256,256,[2,2])}function sR(){return Mh("deck",(t,e,n)=>{t.fillStyle="#d9d2c2",t.fillRect(0,0,e,n);for(let i=0;i<n;i+=42){let a=196+Math.floor(Math.random()*18);t.fillStyle=`rgb(${a},${a-10},${a-24})`,t.fillRect(0,i,e,38),t.fillStyle="rgba(90,74,56,.4)",t.fillRect(0,i+38,e,4)}},256,256,[1.6,1.6])}function oR(){return Mh("grass",(t,e,n)=>{t.fillStyle="#b8d3ac",t.fillRect(0,0,e,n);for(let i=0;i<900;i++){let a=["#a7c79a","#c2dcb5","#9dbf8f","#b0cda2"];t.fillStyle=a[i%4],t.fillRect(Math.random()*e,Math.random()*n,2,2+Math.random()*2)}},256,256,[16,16])}function SM(t){return Mh("sky-"+t,(e,n,i)=>{let a=e.createLinearGradient(0,0,0,i);if(t==="dusk"?(a.addColorStop(0,"#141d3f"),a.addColorStop(.55,"#3a3a63"),a.addColorStop(.82,"#b65a33"),a.addColorStop(1,"#e8925a")):(a.addColorStop(0,"#9cc4ea"),a.addColorStop(.6,"#cfe3f5"),a.addColorStop(1,"#eef6fc")),e.fillStyle=a,e.fillRect(0,0,n,i),t==="dusk"){e.fillStyle="rgba(255,255,255,.85)";for(let r=0;r<60;r++)e.fillRect(Math.random()*n,Math.random()*i*.5,1.4,1.4);e.fillStyle="#f4ead2",e.beginPath(),e.arc(n*.78,i*.2,13,0,7),e.fill()}else{let r=e.createRadialGradient(n*.78,i*.22,4,n*.78,i*.22,60);r.addColorStop(0,"rgba(255,246,214,.95)"),r.addColorStop(1,"rgba(255,246,214,0)"),e.fillStyle=r,e.fillRect(0,0,n,i)}},512,256)}function lR(t,e,n){let i=new Si,a=(o,l={})=>new Rn({color:o,roughness:.82,metalness:.03,...l}),r=(o,l,u,f,p=0,d=0,g=0,x="wood",C)=>{let y=new at(new Tn(o,l,u),a(f,C));return y.position.set(p,d+l/2,g),y.castShadow=!0,y.userData={role:x,base:f},i.add(y),y},s=(o,l,u,f,p=0,d=0,g=0,x="wood",C)=>{let y=new at(new Mi(o,l,u,20),a(f,C));return y.position.set(p,d+u/2,g),y.castShadow=!0,y.userData={role:x,base:f},i.add(y),y};switch(t){case"sofa":r(2,.42,.85,"#8FA0BC",0,0,-n/2+.62,"fabric"),r(2,.52,.2,"#7C8DAA",0,.42,-n/2+.3,"fabric"),r(.22,.5,.85,"#7C8DAA",-1,.1,-n/2+.62,"fabric"),r(.22,.5,.85,"#7C8DAA",1,.1,-n/2+.62,"fabric"),r(.5,.12,.4,"#EAEFF6",-.4,.44,-n/2+.58,"accent"),r(.5,.12,.4,"#DCE4F0",.42,.44,-n/2+.58,"accent");break;case"coffee":r(.95,.06,.52,"#B79B77",0,.26,-.1,"wood"),[[-.4,-.2],[.4,-.2],[-.4,.2],[.4,.2]].forEach(([o,l])=>r(.05,.26,.05,"#8C7454",o,0,l-.1,"wood")),r(.3,.03,.2,"#C8D4E4",.1,.32,-.1,"accent");break;case"rug":r(2.5,.02,1.6,"#C7BEA8",0,0,0,"fabric"),r(2.2,.021,1.3,"#D6CDb8".replace("b","B"),0,.002,0,"fabric");break;case"tv":r(1.25,.42,.34,"#9A9FA8",0,0,n/2-.36,"wood"),r(1.35,.78,.06,"#14171C",0,.55,n/2-.3,"screen",{roughness:.35});break;case"plant":s(.15,.11,.28,"#B0714F",e/2-.45,0,n/2-.45,"wood"),s(.02,.02,.35,"#5E7A52",e/2-.45,.28,n/2-.45,"leaf"),["#4F8A5B","#5E9A68","#447D50"].forEach((o,l)=>{let u=new at(new nr(.16-l*.02,12,10),a(o));u.position.set(e/2-.45+(l-1)*.09,.72+l*.1,n/2-.45+(l-1)*.05),u.castShadow=!0,u.userData={role:"leaf",base:o},i.add(u)});break;case"art":r(.95,.7,.05,"#FFFFFF",-.6,1.05,-n/2+.1,"accent"),r(.82,.57,.055,"#7FA0CE",-.6,1.115,-n/2+.1,"art");break;case"counter":r(e-1,.52,.55,"#D8CBB0",0,0,n/2-.4,"wood"),r(e-1,.07,.62,"#B9A886",0,.52,n/2-.4,"accent"),r(.5,.4,.5,"#C9CFD8",-e/4,.6,n/2-.4,"metal",{metalness:.4,roughness:.45});break;case"island":r(1.45,.55,.72,"#C9B79A",0,0,0,"wood"),r(1.55,.06,.82,"#EDE7DA",0,.55,0,"accent");break;case"stool":s(.17,.15,.1,"#C9B79A",-.4,.5,.62,"wood"),s(.03,.03,.5,"#8C7454",-.4,0,.62,"wood"),s(.17,.15,.1,"#C9B79A",.4,.5,.62,"wood"),s(.03,.03,.5,"#8C7454",.4,0,.62,"wood");break;case"bed":r(1.6,.32,2,"#9AA6BC",0,.12,0,"fabric"),r(1.66,.14,2.06,"#C8B79A",0,0,0,"wood"),r(1.6,.6,.14,"#7E8AA2",0,.3,-.98,"wood"),r(.62,.15,.42,"#EAEFF6",-.42,.44,-.68,"accent"),r(.62,.15,.42,"#EAEFF6",.42,.44,-.68,"accent"),r(1.6,.06,.8,"#B9C6D8",0,.44,.55,"fabric");break;case"bedS":r(1.1,.3,1.9,"#A6A0BC",0,.1,0,"fabric"),r(1.16,.12,1.96,"#C8B79A",0,0,0,"wood"),r(1.1,.52,.13,"#8B85A6",0,.28,-.92,"wood"),r(.55,.14,.38,"#EFF2F8",0,.4,-.62,"accent");break;case"night":r(.45,.42,.4,"#B7A98C",0,0,0,"wood"),s(.09,.11,.06,"#E8DFC8",0,.42,0,"accent"),s(.015,.015,.16,"#8C7454",0,.48,0,"wood"),s(.11,.13,.14,"#F2E9D2",0,.62,0,"lamp",{emissive:"#f5e6bd",emissiveIntensity:.15});break;case"tub":r(1.5,.5,.72,"#E7EFEA",0,0,0,"fixture",{roughness:.35}),r(1.3,.05,.52,"#CFE0EA",0,.42,0,"fixture",{roughness:.2});break;case"vanity":r(.82,.55,.46,"#CBD6D0",0,0,0,"wood"),r(.86,.05,.5,"#EDF2F0",0,.55,0,"fixture");break;case"mirror":r(.62,.82,.04,"#DCE9F2",.7,1,-n/2+.09,"fixture",{roughness:.15,metalness:.25});break;case"table":r(1.5,.07,.92,"#B79B77",0,.62,0,"wood"),[[-.66,-.4],[.66,-.4],[-.66,.4],[.66,.4]].forEach(([o,l])=>r(.07,.62,.07,"#8C7454",o,0,l,"wood")),r(.34,.05,.34,"#DCE4F0",0,.69,0,"accent");break;case"chair":r(.45,.45,.45,"#9BB0A2",-.5,0,0,"fabric"),r(.45,.42,.1,"#89A092",-.5,.45,-.18,"fabric");break;case"chair2":r(.45,.45,.45,"#9BB0A2",.5,0,0,"fabric"),r(.45,.42,.1,"#89A092",.5,.45,-.18,"fabric");break;case"car":r(1.7,.55,3.7,"#7E8794",0,.18,0,"metal",{metalness:.5,roughness:.4}),r(1.5,.5,1.9,"#99A2AF",0,.7,-.2,"metal",{metalness:.5,roughness:.35}),[[-.78,1.2],[.78,1.2],[-.78,-1.2],[.78,-1.2]].forEach(([o,l])=>{let u=new at(new Mi(.26,.26,.16,16),a("#23262B",{roughness:.9}));u.rotation.z=Math.PI/2,u.position.set(o,.26,l),u.userData={role:"metal",base:"#23262B"},i.add(u)});break;case"pool":{let o=new at(new Mi(1.45,1.45,.55,26),a("#B9C2CC"));o.position.y=.275,o.userData={role:"metal",base:"#B9C2CC"},i.add(o);let l=new at(new Mi(1.36,1.36,.08,26),a("#5FA9C9",{roughness:.15,metalness:.1}));l.position.y=.54,l.userData={role:"water",base:"#5FA9C9"},i.add(l);break}case"shed":r(1.6,1.3,1.4,"#B7A98C",e/2-1.2,0,-n/2+1,"wood"),r(1.8,.28,1.6,"#8C7454",e/2-1.2,1.3,-n/2+1,"wood");break;default:break}return i.userData={shopKey:t},i}function xh(t,e){let n=mr[e]||mr.classique;t.scene.traverse(i=>{if(!i.isMesh||!i.userData||!i.userData.role)return;let a=i.userData.role;if(a==="floor"||a==="leaf"||a==="water"||a==="screen"||a==="lamp"||a==="trunk")return;let r=e==="classique"?i.userData.base:n[a]||(a==="art"?n.accent:null)||i.userData.base;i.material&&i.material.color&&i.material.color.set(r)}),t.wallMat&&t.wallMat.color.set(e==="classique"?"#F1F3F7":n.wall)}function uR(t){let e=new Si,n=(r,s={})=>new Rn({color:r,roughness:.95,...s}),i=new at(new Mi(.1,.16,1,8),n("#7a5c40"));i.position.y=.5,i.castShadow=!0,i.userData={role:"trunk",base:"#7a5c40"},e.add(i);let a=[];return t==="spruce"?["#2F6B4F","#38795A","#2A5E45"].forEach((r,s)=>{let o=new at(new Fl(.9-s*.22,1.1,10),n(r));o.position.y=1.2+s*.7,o.castShadow=!0,o.userData={role:"leaf",base:r},e.add(o),a.push(o)}):[[0,1.5,0,.72],[-.4,1.25,.15,.5],[.42,1.3,-.1,.52]].forEach(([r,s,o,l],u)=>{let f=["#6FA36B","#7FB279","#639661"][u],p=new at(new nr(l,12,10),n(f));p.position.set(r,s,o),p.castShadow=!0,p.userData={role:"leaf",base:f},e.add(p),a.push(p)}),e.userData.leaves=a,e}function cR({listing:t,lang:e,onEvent:n,theme:i="classique",onThemeChange:a,onDesigner:r}){let s=(0,re.useRef)(null),o=(0,re.useRef)({}),[l,u]=(0,re.useState)(0),[f,p]=(0,re.useState)("orbit"),[d,g]=(0,re.useState)("day"),[x,C]=(0,re.useState)(!m0),[y,c]=(0,re.useState)(!0),[m,w]=(0,re.useState)(!1),[M,I]=(0,re.useState)(null),[L,E]=(0,re.useState)(!1),[_,A]=(0,re.useState)(null),[R,P]=(0,re.useState)(null),[k,X]=(0,re.useState)(50),O=(U,ee)=>e==="fr"?U:ee,V=M?M.plan:t.plan;(0,re.useEffect)(()=>{let U=s.current;if(!U)return;let ee=U.clientWidth,ce=360,se=new Il,be=new nn(60,ee/ce,.1,260),ze=new ch({antialias:!0,preserveDrawingBuffer:!0});ze.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),ze.setSize(ee,ce),ze.shadowMap.enabled=!0,ze.shadowMap.type=xf,ze.outputEncoding=void 0,ze.toneMapping=Gl,ze.toneMappingExposure=1.06,U.appendChild(ze.domElement),ze.domElement.className="tour-canvas",ze.domElement.style.borderRadius="12px",ze.domElement.style.cursor="grab";let dt=1/0,Ke=-1/0,te=1/0,pe=-1/0;V.forEach(z=>{dt=Math.min(dt,z.x),Ke=Math.max(Ke,z.x+z.w),te=Math.min(te,z.z),pe=Math.max(pe,z.z+z.d)});let le=(dt+Ke)/2,Oe=(te+pe)/2,Ve=Ke-dt,Ne=pe-te,pt=Math.sqrt(Ve*Ve+Ne*Ne),qe=z=>z-le,rt=z=>z-Oe,et=new at(new nr(110,24,16),new Vr({map:SM("day"),side:rn}));se.add(et);let je=new Rn({map:oR(),color:"#ffffff",roughness:1}),vt=new at(new Dl(70,48),je);vt.rotation.x=-Math.PI/2,vt.position.y=-.02,vt.receiveShadow=!0,se.add(vt);let It=new at(new Tn(Ve+1.6,.08,Ne+1.6),new Rn({color:"#D8DCE2",roughness:.95}));It.position.y=-.04,It.receiveShadow=!0,se.add(It);let Dt=[],Ot=[],_t=[],At=new Rn({color:"#F1F3F7",roughness:.95}),F=rR(),on=sR();V.forEach(z=>{let me=qe(z.x+z.w/2),D=rt(z.z+z.d/2),ae=new Rn({map:z.open?on:F,color:z.col,roughness:.9}),K=new at(new Tn(z.w,.07,z.d),ae);if(K.position.set(me,.035,D),K.receiveShadow=!0,K.userData={role:"floor",base:z.col},se.add(K),z.open){let ye=new Rn({color:"#C4CCD8"});for(let Se=0;Se<=4;Se++){let Le=new at(new Tn(.06,.7,.06),ye);Le.position.set(me-z.w/2+Se/4*z.w,.35,D+z.d/2),se.add(Le)}let ie=new at(new Tn(z.w+.06,.05,.06),ye);ie.position.set(me,.72,D+z.d/2),se.add(ie)}else{let Se=(Fn,Nn,Hu,Gu)=>{let gr=new at(new Tn(Fn,1.32,Nn),At);gr.position.set(Hu,.66,Gu),gr.castShadow=!0,gr.receiveShadow=!0,se.add(gr);let Kr=new at(new Tn(Fn+.02,.045,Nn+.02),new Rn({color:"#D7DCE4",roughness:.9}));Kr.position.set(Hu,1.34,Gu),se.add(Kr)};Se(z.w,.09,me,D-z.d/2),Se(z.w,.09,me,D+z.d/2),Se(.09,z.d,me-z.w/2,D),Se(.09,z.d,me+z.w/2,D);let Le=new at(new Mi(.015,.015,.8,6),new Rn({color:"#3a3f48"}));Le.position.set(me,2.15,D),se.add(Le);let mt=new at(new nr(.09,12,10),new Rn({color:"#f7ecd4",emissive:"#ffd9a0",emissiveIntensity:.12}));mt.position.set(me,1.72,D),se.add(mt),_t.push(mt);let st=new zl("#ffd9a0",0,7,2);st.position.set(me,1.7,D),se.add(st),Ot.push(st)}let fe=new Si;(z.furn||[]).forEach(ye=>fe.add(lR(ye,z.w,z.d))),fe.position.set(me,.07,D),se.add(fe),Dt.push(fe)});let it=[],T=Math.max(Ve,Ne)/2+3.2;for(let z=0;z<7;z++){let me=z/7*Math.PI*2+.35,D=uR(z%3===0?"leafy":"spruce"),ae=T+z%2*1.6;D.position.set(Math.cos(me)*ae,0,Math.sin(me)*ae);let K=.85+z%3*.2;D.scale.set(K,K,K),se.add(D),it.push(D)}let S=new Ul("#ffffff","#7d8695",.85);se.add(S);let N=new Js("#fff2dc",1);N.position.set(9,15,7),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),N.shadow.bias=-4e-4,N.shadow.camera.near=1,N.shadow.camera.far=70,N.shadow.camera.left=-22,N.shadow.camera.right=22,N.shadow.camera.top=22,N.shadow.camera.bottom=-22,se.add(N);let W=new Js("#dfe9f5",.25);W.position.set(-8,6,-6),se.add(W);let J=V.map(z=>new H(qe(z.x+z.w/2),1.45,rt(z.z+z.d/2))),ue=new H(pt*.9+2,pt*.55+1.5,pt*.9+2);be.position.copy(ue),o.current={scene:se,camera:be,renderer:ze,waypoints:J,camPos:ue,hemi:S,sun:N,fill:W,sky:et,groundMat:je,furnGroups:Dt,roomLights:Ot,bulbs:_t,trees:it,wallMat:At,diag:pt,yaw:.8,pitch:-.1,targetIdx:0,mode:"orbit",autoplay:!m0,dragging:!1,moved:0,downT:0,lastX:0,lastY:0,frames:0,raf:0,mount:U};let de=ze.domElement,Q=new Vl,ne=new $e,ge=z=>{let me=z.touches?z.touches[0]:z;o.current.dragging=!0,o.current.moved=0,o.current.downT=Date.now(),o.current.lastX=me.clientX,o.current.lastY=me.clientY,de.style.cursor="grabbing"},Re=z=>{if(!o.current.dragging)return;let me=z.touches?z.touches[0]:z,D=me.clientX-o.current.lastX,ae=me.clientY-o.current.lastY;o.current.moved+=Math.abs(D)+Math.abs(ae),o.current.moved>6&&o.current.autoplay&&(o.current.autoplay=!1,C(!1)),o.current.yaw-=D*.005,o.current.pitch=Math.max(-.65,Math.min(.4,o.current.pitch-ae*.005)),o.current.lastX=me.clientX,o.current.lastY=me.clientY},_e=z=>{let me=o.current,D=me.dragging&&me.moved<7&&Date.now()-me.downT<500;if(me.dragging=!1,de.style.cursor="grab",!D)return;let ae=de.getBoundingClientRect(),K=z.changedTouches?z.changedTouches[0].clientX:z.clientX,fe=z.changedTouches?z.changedTouches[0].clientY:z.clientY;if(K<ae.left||K>ae.right||fe<ae.top||fe>ae.bottom)return;ne.set((K-ae.left)/ae.width*2-1,-((fe-ae.top)/ae.height)*2+1),Q.setFromCamera(ne,me.camera);let ye=Q.intersectObjects(me.scene.children,!0);for(let ie of ye){let Se=ie.object;for(;Se&&!(Se.userData&&Se.userData.shopKey);)Se=Se.parent;if(Se&&Yi[Se.userData.shopKey]){A(Se.userData.shopKey),n&&n("shop_item",{item:Se.userData.shopKey});return}}A(null)};de.addEventListener("pointerdown",ge),window.addEventListener("pointermove",Re),window.addEventListener("pointerup",_e);let xe=()=>{let z=o.current;if(z.frames++,!m0&&z.frames%2===0&&z.trees.forEach((me,D)=>{me.rotation.z=Math.sin(z.frames*.008+D*1.7)*.016}),z.mode==="orbit"){z.autoplay&&!z.dragging&&(z.yaw+=.0032);let me=Math.max(.22,Math.min(1.05,.5-z.pitch)),D=z.diag*.92+2.2,ae=new H(Math.sin(z.yaw)*D,z.diag*me+1.2,Math.cos(z.yaw)*D);z.camPos.lerp(ae,.06),z.camera.position.copy(z.camPos),z.camera.lookAt(0,.5,0)}else{z.autoplay&&!z.dragging&&(z.yaw+=.0018,z.frames%300===0&&(z.targetIdx=(z.targetIdx+1)%z.waypoints.length,u(z.targetIdx)));let me=z.waypoints[z.targetIdx];z.camPos.lerp(me,.03);let D=Math.sin(z.yaw)*Math.cos(z.pitch),ae=Math.sin(z.pitch),K=Math.cos(z.yaw)*Math.cos(z.pitch);z.camera.position.copy(z.camPos),z.camera.lookAt(z.camPos.x+D,z.camPos.y+ae,z.camPos.z+K)}z.renderer.render(z.scene,z.camera),z.raf=requestAnimationFrame(xe)};xe(),w(!0);let ke=new ResizeObserver(()=>{let z=U.clientWidth;ze.setSize(z,ce),be.aspect=z/ce,be.updateProjectionMatrix()});return ke.observe(U),()=>{cancelAnimationFrame(o.current.raf),ke.disconnect(),de.removeEventListener("pointerdown",ge),window.removeEventListener("pointermove",Re),window.removeEventListener("pointerup",_e),se.traverse(z=>{if(z.geometry&&z.geometry.dispose(),z.material){let me=z.material;(Array.isArray(me)?me:[me]).forEach(D=>D.dispose())}}),ze.dispose(),de.parentNode&&de.parentNode.removeChild(de)}},[t.id,M]),(0,re.useEffect)(()=>{o.current.waypoints&&(o.current.targetIdx=l)},[l]),(0,re.useEffect)(()=>{o.current.autoplay=x},[x]),(0,re.useEffect)(()=>{o.current.mode=f},[f]),(0,re.useEffect)(()=>{let U=o.current;if(!U.sun||!m)return;let ee=d==="dusk";U.sky.material.map=SM(ee?"dusk":"day"),U.sky.material.needsUpdate=!0,U.hemi.intensity=ee?.35:.85,U.hemi.color.set(ee?"#c9d2ef":"#ffffff"),U.sun.color.set(ee?"#ff9a5a":"#fff2dc"),U.sun.intensity=ee?.5:1,U.sun.position.set(ee?-11:9,ee?4.5:15,ee?5:7),U.fill.intensity=ee?.12:.25,U.groundMat.color.set(ee?"#8ba081":"#ffffff"),U.roomLights.forEach(ce=>ce.intensity=ee?.55:0),U.bulbs.forEach(ce=>ce.material.emissiveIntensity=ee?1.5:.12)},[d,m]),(0,re.useEffect)(()=>{o.current.furnGroups&&o.current.furnGroups.forEach(U=>U.visible=y)},[y,m]),(0,re.useEffect)(()=>{let U=o.current;!U.scene||!m||xh(U,i)},[i,m,M]);function Z(){let U=o.current;if(!U.renderer)return;let ee=i==="classique"?"tranquille":i;xh(U,"classique"),U.renderer.render(U.scene,U.camera);let ce=U.renderer.domElement.toDataURL("image/jpeg",.85);xh(U,ee),U.renderer.render(U.scene,U.camera);let se=U.renderer.domElement.toDataURL("image/jpeg",.85);xh(U,i),P({before:ce,after:se,afterKey:ee}),X(50),n&&n("restage_compare",{theme:ee})}let Y=({active:U,onClick:ee,icon:ce,label:se})=>(0,h.jsxs)("button",{onClick:ee,className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1",style:{background:U?v.metro:v.paper,color:U?"#fff":v.ink,border:`1px solid ${U?v.metro:v.line}`,fontSize:12,fontWeight:600},children:[(0,h.jsx)(ce,{size:13})," ",se]});return(0,h.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:oo,title:O("Visite 3D","3D tour"),note:O("glissez pour regarder \xB7 touchez les meubles","drag to look \xB7 tap furnishings")}),(0,h.jsxs)("div",{className:"relative rounded-xl overflow-hidden",style:{background:"#cfe0f2"},children:[(0,h.jsx)("div",{ref:s,style:{width:"100%",height:360},onPointerDown:()=>n&&n("tour_view")}),(0,h.jsx)("div",{className:"absolute top-2 left-2",children:(0,h.jsx)(yh,{text:M?O(`3D g\xE9n\xE9r\xE9e de la fiche n\xBA ${M.no} \u2014 indicative`,`3D generated from sheet n\xBA ${M.no} \u2014 indicative`):O("Reconstitution 3D par IA \u2014 indicative","AI 3D reconstruction \u2014 indicative")})}),(0,h.jsx)("button",{onClick:()=>C(U=>!U),"aria-label":x?"Pause":"Play",className:"absolute bottom-2 right-2 rounded-full p-2",style:{background:"rgba(17,27,46,.7)",color:"#fff"},children:x?(0,h.jsx)(Iu,{size:15}):(0,h.jsx)(Eu,{size:15})}),_&&Yi[_]&&(0,h.jsxs)("div",{className:"absolute left-2 right-2 bottom-2 rounded-xl p-3 fade-up",style:{background:"rgba(255,255,255,.97)",border:`1px solid ${v.line}`,boxShadow:"0 8px 24px rgba(17,27,46,.18)"},children:[(0,h.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,h.jsxs)("div",{className:"inline-flex items-center gap-1.5",style:{fontSize:13,fontWeight:800,color:v.ink},children:[(0,h.jsx)(vo,{size:14,style:{color:v.metro}})," ",e==="fr"?Yi[_].fr:Yi[_].en]}),(0,h.jsx)("button",{onClick:()=>A(null),"aria-label":O("Fermer","Close"),style:{color:v.sub},children:(0,h.jsx)(hr,{size:15})})]}),(0,h.jsx)("div",{style:{fontFamily:he.mono,fontSize:12,color:v.ink,marginTop:2},children:Yi[_].price}),(0,h.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-1.5",children:[Yi[_].stores.map(U=>(0,h.jsx)(wn,{tone:"blue",children:U},U)),(0,h.jsx)(wn,{tone:"amber",children:O("liens partenaires \u2014 d\xE9mo","partner links \u2014 demo")})]}),(0,h.jsx)("button",{onClick:()=>{A(null),r&&r()},className:"mt-2 w-full rounded-lg py-2",style:{background:v.ink,color:"#fff",fontSize:12.5,fontWeight:700},children:O("Confier \xE7a \xE0 un\xB7e designer","Hand this to a designer")})]})]}),(0,h.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-2.5",children:[(0,h.jsx)(Y,{active:f==="orbit",onClick:()=>p("orbit"),icon:oo,label:O("Maquette","Dollhouse")}),(0,h.jsx)(Y,{active:f==="walk",onClick:()=>p("walk"),icon:fo,label:O("Int\xE9rieur","Interior")}),(0,h.jsx)(Y,{active:d==="day",onClick:()=>g("day"),icon:Ru,label:O("Jour","Day")}),(0,h.jsx)(Y,{active:d==="dusk",onClick:()=>g("dusk"),icon:Cu,label:O("Cr\xE9puscule","Dusk")}),(0,h.jsx)(Y,{active:y,onClick:()=>c(U=>!U),icon:$r,label:y?O("Meubl\xE9","Furnished"):O("Vide","Empty")})]}),(0,h.jsx)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:V.map((U,ee)=>(0,h.jsx)("button",{onClick:()=>{p("walk"),u(ee),C(!1),n&&n("tour_room",{room:U.key})},className:"rounded-full px-2.5 py-1",style:{background:f==="walk"&&l===ee?v.metroSoft:v.snow,color:f==="walk"&&l===ee?v.metro:v.sub,border:`1px solid ${f==="walk"&&l===ee?"#C9D9F2":v.line}`,fontSize:11.5,fontWeight:600},children:e==="fr"?U.fr:U.en},U.key))}),(0,h.jsxs)("div",{className:"flex flex-wrap items-center gap-1.5 mt-2",children:[(0,h.jsx)(yo,{size:14,style:{color:v.sub}}),Object.entries(mr).map(([U,ee])=>(0,h.jsxs)("button",{onClick:()=>a&&a(U),className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:i===U?v.ink:v.paper,color:i===U?"#fff":v.ink,border:`1px solid ${i===U?v.ink:v.line}`,fontSize:11.5,fontWeight:700},children:[(0,h.jsx)("span",{style:{width:9,height:9,borderRadius:999,background:ee.dot,border:"1px solid rgba(0,0,0,.12)"}})," ",e==="fr"?ee.fr:ee.en]},U))]}),(0,h.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:[(0,h.jsxs)("button",{onClick:Z,className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:v.ink,color:"#fff",fontSize:11.5,fontWeight:700},children:[(0,h.jsx)(fo,{size:13})," ",O("Avant / Apr\xE8s IA","AI Before / After")]}),(0,h.jsxs)("button",{onClick:()=>E(!0),className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:v.metroSoft,color:v.metro,border:"1px solid #C9D9F2",fontSize:11.5,fontWeight:700},children:[(0,h.jsx)(ya,{size:13})," ",O("G\xE9n\xE9rer depuis une fiche Centris","Generate from a Centris sheet")]}),M&&(0,h.jsxs)("button",{onClick:()=>{I(null),u(0)},className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1",style:{background:v.spruceSoft,color:v.spruce,border:"1px solid #C4E0D2",fontSize:11.5,fontWeight:700},children:[O(`Plan de la fiche n\xBA ${M.no}`,`Sheet n\xBA ${M.no} plan`)," ",(0,h.jsx)(hr,{size:12})]})]}),(0,h.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:v.sub},children:[(0,h.jsx)(kn,{size:12,style:{marginTop:1,flexShrink:0}}),O("Mod\xE8le 3D, mise en sc\xE8ne et ameublement virtuel g\xE9n\xE9r\xE9s par IA \xE0 partir du plan et des photos \u2014 dimensions approximatives, \xE0 titre indicatif. \xAB Jour/cr\xE9puscule \xBB simule l\u2019ensoleillement.","3D model, staging and virtual furnishing are AI-generated from the floor plan and photos \u2014 approximate dimensions, indicative only. \u201CDay/dusk\u201D simulates natural light.")]}),L&&(0,h.jsx)(Sh,{onClose:()=>E(!1),label:O("G\xE9n\xE9rer depuis la fiche","Generate from the sheet"),children:(0,h.jsx)(UR,{lang:e,defaultNo:"14106527",onGenerate:(U,ee)=>{I({no:U,plan:BR(ee)}),u(0),E(!1),n&&n("plan_generate",{centris:U,rooms:ee.length})}})}),R&&(0,h.jsxs)(Sh,{onClose:()=>P(null),label:O("Avant / Apr\xE8s","Before / After"),children:[(0,h.jsx)("div",{style:{fontFamily:he.disp,fontWeight:700,fontSize:19,color:v.ink},children:O("Restylage virtuel \u2014 avant / apr\xE8s","Virtual restyle \u2014 before / after")}),(0,h.jsx)("div",{style:{fontSize:11.5,color:v.sub,margin:"4px 0 10px"},children:O("Glissez le curseur pour comparer.","Drag the slider to compare.")}),(0,h.jsxs)("div",{className:"relative rounded-xl overflow-hidden",style:{border:`1px solid ${v.line}`},children:[(0,h.jsx)("img",{src:R.after,alt:O("Apr\xE8s","After"),style:{width:"100%",display:"block"}}),(0,h.jsx)("div",{className:"absolute inset-0 overflow-hidden",style:{width:`${k}%`},children:(0,h.jsx)("img",{src:R.before,alt:O("Avant","Before"),style:{width:`${1e4/Math.max(k,1)}%`,maxWidth:"none",display:"block"}})}),(0,h.jsx)("div",{className:"absolute top-0 bottom-0",style:{left:`${k}%`,width:2,background:"#fff",boxShadow:"0 0 6px rgba(0,0,0,.4)"}}),(0,h.jsx)("div",{className:"absolute top-2 left-2",children:(0,h.jsx)(yh,{text:O("Original \u2014 reconstitution 3D","Original \u2014 3D reconstruction")})}),(0,h.jsx)("div",{className:"absolute top-2 right-2",children:(0,h.jsx)(yh,{text:`${O("Ameublement virtuel","Virtually staged")} \xB7 ${e==="fr"?mr[R.afterKey].fr:mr[R.afterKey].en} \u2014 IA`})})]}),(0,h.jsx)("input",{type:"range",min:0,max:100,value:k,onChange:U=>X(Number(U.target.value)),className:"w-full mt-2"}),(0,h.jsxs)("div",{className:"mt-1 flex items-start gap-1.5",style:{fontSize:10.5,color:v.sub},children:[(0,h.jsx)(kn,{size:12,style:{marginTop:1,flexShrink:0}}),O("Ameublement virtuel : visuel modifi\xE9 par IA et identifi\xE9 comme tel. Les \xE9l\xE9ments permanents (murs, planchers, structure) ne sont pas modifi\xE9s et l\u2019original demeure accessible.","Virtual staging: AI-modified visual, labelled as such. Permanent elements (walls, floors, structure) are unchanged and the original remains accessible.")]})]})]})}function dR({l:t,lang:e,log:n,refEl:i}){let a=(_,A)=>e==="fr"?_:A,[r,s]=(0,re.useState)(20),[o,l]=(0,re.useState)(4.39),[u,f]=(0,re.useState)(25),p=(0,re.useRef)(new Set),d=_=>{p.current.size||n("calc_use"),p.current.has(_)||(p.current.add(_),n("calc_adjust",{field:_}))},g=Math.round(r/100*t.price),x=t.price-g,C=Math.round(x*jT(r)),y=x+C,c=Math.round(y0(y,o,u)),m=Math.round((t.taxesMun+t.taxesScol)/12),w=Math.round(t.sqft*pr[t.heating].perSqft/12),M=c+m+t.condoFees+w+t.insuranceEst,I=JT(t.price,t.muni),L=g+I+1500+650,E=[{v:c,color:v.metro,label:a("Hypoth\xE8que","Mortgage")},{v:m,color:v.ink,label:a("Taxes","Taxes")},{v:t.condoFees,color:v.ochre,label:a("Copropri\xE9t\xE9","Condo")},{v:w,color:v.spruce,label:a("\xC9nergie*","Energy*")},{v:t.insuranceEst,color:"#9AA6B8",label:a("Assurance*","Insurance*")}];return(0,h.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:lu,title:a("Co\xFBt mensuel r\xE9el","True monthly cost"),note:a("ajustez les hypoth\xE8ses","adjust assumptions")}),(0,h.jsxs)("div",{className:"flex items-end gap-2 mb-2",children:[(0,h.jsx)("div",{style:{fontFamily:he.mono,fontWeight:600,fontSize:34,color:v.ink,lineHeight:1},children:ut(M,e)}),(0,h.jsx)("div",{style:{fontSize:13,color:v.sub,paddingBottom:3},children:a("/ mois, tout compris","/ month, all-in")})]}),(0,h.jsx)("div",{className:"flex w-full rounded-full overflow-hidden",style:{height:14,background:v.snow,border:`1px solid ${v.line}`},children:E.filter(_=>_.v>0).map((_,A)=>(0,h.jsx)("div",{style:{width:`${_.v/M*100}%`,background:_.color},title:_.label},A))}),(0,h.jsx)("div",{className:"flex flex-wrap gap-x-4 gap-y-1 mt-2",children:E.filter(_=>_.v>0).map((_,A)=>(0,h.jsxs)("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:12,color:v.sub},children:[(0,h.jsx)("span",{style:{width:9,height:9,borderRadius:3,background:_.color}})," ",_.label," ",(0,h.jsx)("b",{style:{fontFamily:he.mono,color:v.ink},children:ut(_.v,e)})]},A))}),(0,h.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4",children:[(0,h.jsx)(wo,{label:a("Mise de fonds","Down payment"),val:r,set:s,min:5,max:35,step:1,suffix:" %",field:"down",mark:d}),(0,h.jsx)(wo,{label:a("Taux (5 ans fixe)","Rate (5-yr fixed)"),val:o,set:l,min:2.5,max:7,step:.05,suffix:" %",field:"rate",mark:d}),(0,h.jsx)(wo,{label:a("Amortissement","Amortization"),val:u,set:f,min:15,max:30,step:5,suffix:a(" ans"," yrs"),field:"amort",mark:d})]}),C>0&&(0,h.jsxs)("div",{className:"mt-2",style:{fontSize:12,color:v.sub},children:[a("Prime SCHL ajout\xE9e :","CMHC premium added:")," ",(0,h.jsx)("b",{style:{fontFamily:he.mono,color:v.ink},children:ut(C,e)})]}),(0,h.jsxs)("div",{className:"mt-4 rounded-xl p-3",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center gap-1.5 mb-1",style:{fontSize:13,fontWeight:700,color:v.ink},children:[(0,h.jsx)(po,{size:14,style:{color:v.metro}})," ",a("Liquidit\xE9s \xE0 l\u2019achat","Cash at purchase")]}),(0,h.jsxs)("div",{className:"grid grid-cols-2 gap-x-3",style:{fontSize:12.5,color:v.sub},children:[(0,h.jsx)("span",{children:a("Mise de fonds","Down payment")}),(0,h.jsx)("span",{className:"text-right",style:{fontFamily:he.mono,color:v.ink},children:ut(g,e)}),(0,h.jsx)("span",{children:a("\xAB Taxe de bienvenue \xBB","Welcome tax")}),(0,h.jsx)("span",{className:"text-right",style:{fontFamily:he.mono,color:v.ink},children:ut(I,e)}),(0,h.jsx)("span",{children:a("Notaire + inspection (est.)","Notary + inspection (est.)")}),(0,h.jsx)("span",{className:"text-right",style:{fontFamily:he.mono,color:v.ink},children:ut(2150,e)}),(0,h.jsx)("span",{style:{fontWeight:700,color:v.ink},children:a("Total","Total")}),(0,h.jsx)("span",{className:"text-right",style:{fontFamily:he.mono,fontWeight:700,color:v.metro},children:ut(L,e)})]}),(0,h.jsxs)("div",{className:"mt-1.5",style:{fontSize:10.5,color:v.sub,fontFamily:he.mono},children:[e==="fr"?_h[t.muni].labelFr:_h[t.muni].labelEn," \xB7 *",a("estimations \u2014 ","estimates \u2014 "),e==="fr"?pr[t.heating].fr:pr[t.heating].en]})]})]})}function hR({l:t,lang:e,log:n,refEl:i}){let a=(m,w)=>e==="fr"?m:w,[r,s]=(0,re.useState)([]),[o,l]=(0,re.useState)(""),[u,f]=(0,re.useState)(!1),[p,d]=(0,re.useState)(!1);(0,re.useEffect)(()=>{n("forecast_view")},[]);let g=(0,re.useMemo)(()=>[...t.forecast.drivers,...r],[t,r]),x=(0,re.useMemo)(()=>AM(t.price,g,6,t.forecast.organic),[t,g]),C=x[x.length-1],y=Math.round((C.mid-t.price)/t.price*100);async function c(){f(!0),d(!1);try{let m=await tR(t,e);s(m.drivers),l(e==="fr"?m.noteFr:m.noteEn),n("forecast_refresh")}catch{d(!0)}finally{f(!1)}}return(0,h.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:Fu,title:a("Pr\xE9vision de valeur","Value forecast"),note:a("mod\xE8le \u2014 non garanti","model \u2014 not guaranteed")}),(0,h.jsxs)("div",{className:"flex items-end justify-between gap-2 mb-1",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{fontFamily:he.mono,fontWeight:600,fontSize:26,color:v.ink},children:ut(C.mid,e)}),(0,h.jsxs)("div",{style:{fontSize:12,color:v.sub},children:[a(`sc\xE9nario m\xE9dian ${C.yr}`,`median scenario ${C.yr}`)," \xB7 ",(0,h.jsxs)("b",{style:{color:y>=0?v.spruce:v.danger},children:[y>=0?"+":"",y,"%"]})]})]}),(0,h.jsxs)(wn,{tone:"blue",children:[ut(x[x.length-1].low,e)," \u2013 ",ut(x[x.length-1].high,e)]})]}),(0,h.jsx)(iR,{rows:x,lang:e}),(0,h.jsxs)("div",{className:"mt-3 space-y-2",children:[(0,h.jsx)("div",{style:{fontSize:11.5,fontWeight:700,color:v.sub,textTransform:"uppercase",letterSpacing:".06em"},children:a("Facteurs pris en compte","Drivers considered")}),g.map((m,w)=>{let M=fR[m.kind]||xa,I=m.hi<=0;return(0,h.jsxs)("div",{className:"flex items-start gap-2.5 rounded-xl p-2.5",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsx)(M,{size:15,style:{color:I?v.danger:v.metro,marginTop:2,flexShrink:0}}),(0,h.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,h.jsxs)("div",{style:{fontSize:13,fontWeight:700,color:v.ink},children:[e==="fr"?m.fr:m.en," ",m.live&&(0,h.jsx)(wn,{tone:"green",children:a("actualit\xE9","live")})]}),(0,h.jsxs)("div",{style:{fontSize:11.5,color:v.sub},children:[m.dist!=="\u2014"?`${m.dist} \xB7 `:"",a("\xE9ch\xE9ance","by")," ",m.year," \xB7 ",e==="fr"?m.srcFr:m.srcEn]})]}),(0,h.jsxs)("span",{style:{fontFamily:he.mono,fontSize:12,fontWeight:600,color:I?v.danger:v.spruce,whiteSpace:"nowrap"},children:[m.lo>=0?"+":"",m.lo,"\u2026",m.hi>=0?"+":"",m.hi,"%"]})]},w)})]}),(0,h.jsxs)("button",{onClick:c,disabled:u,className:"mt-3 w-full rounded-xl py-2.5 flex items-center justify-center gap-2",style:{background:u?v.line:v.ink,color:"#fff",fontWeight:700,fontSize:13.5},children:[u?(0,h.jsx)(Li,{size:15}):(0,h.jsx)(Lu,{size:15})," ",u?a("Recherche dans l\u2019actualit\xE9\u2026","Searching the news\u2026"):a("Actualiser depuis l\u2019actualit\xE9","Refresh from the news")]}),p&&(0,h.jsx)("div",{className:"mt-2",style:{fontSize:12,color:v.danger},children:a("La recherche n\u2019a pas abouti. R\xE9essayez.","The search didn\u2019t complete. Try again.")}),o&&(0,h.jsx)("div",{className:"mt-2",style:{fontSize:12,color:v.sub,fontStyle:"italic"},children:o}),(0,h.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:v.sub},children:[(0,h.jsx)(kn,{size:12,style:{marginTop:1,flexShrink:0}}),a("Projection illustrative fond\xE9e sur une croissance historique et des projets annonc\xE9s. Ce n\u2019est pas un avis d\u2019\xE9valuation ni une garantie de rendement.","Illustrative projection based on historical growth and announced projects. Not an appraisal or a guarantee of return.")]})]})}function gR({l:t,lang:e,log:n,refEl:i}){let a=(r,s)=>e==="fr"?r:s;return(0,re.useEffect)(()=>{n("risk_view")},[]),(0,h.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:kn,title:a("Couche de risques","Risk layer"),note:a("\xE0 v\xE9rifier \xE0 l\u2019adresse","verify at address")}),(0,h.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:t.risks.map((r,s)=>{let o=pR[r.kind],l=mR[r.level],u=o.icon;return(0,h.jsxs)("div",{className:"rounded-xl p-3",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[(0,h.jsxs)("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:13,fontWeight:700,color:v.ink},children:[(0,h.jsx)(u,{size:14,style:{color:v.metro}})," ",e==="fr"?o.fr:o.en]}),(0,h.jsx)(wn,{tone:l.tone,children:e==="fr"?l.fr:l.en})]}),(0,h.jsx)("div",{style:{fontSize:12,color:v.sub,lineHeight:1.4},children:e==="fr"?r.fr:r.en})]},s)})}),(0,h.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:v.sub,fontFamily:he.mono},children:a("D\xE9mo \u2014 production : zones inondables (CMM/Ville), potentiel radon (SPLQ), registres pyrite/sols contamin\xE9s.","Demo \u2014 production: flood maps (CMM/City), radon potential, pyrite/contaminated-soil registries.")})]})}function vR({l:t,lang:e,log:n,refEl:i}){let a=(x,C)=>e==="fr"?x:C,[r,s]=(0,re.useState)("weekday"),[o,l]=(0,re.useState)(t.commute.dest),[u,f]=(0,re.useState)(1);(0,re.useEffect)(()=>{n("amenity_view")},[]);let p=t.commute[r],d=[{name:a("Auto","Car"),color:v.metro,values:p.car.map(x=>Math.round(x*u))},{name:a("Transport","Transit"),color:v.spruce,values:p.transit.map(x=>Math.round(x*u))},{name:a("V\xE9lo","Bike"),color:v.ochre,values:p.bike.map(x=>Math.round(x*u))}],g=Math.max(...d[0].values);return(0,h.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:go,title:a("Commodit\xE9s & trajets","Amenities & commute"),note:a("donn\xE9es d\xE9mo","sample data")}),(0,h.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4",children:t.amenities.map(x=>{let C=xR[x.type],y=C.icon;return(0,h.jsxs)("div",{className:"rounded-xl p-3",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center gap-1.5 mb-1.5",style:{fontSize:12.5,fontWeight:700,color:v.ink},children:[(0,h.jsx)(y,{size:14,style:{color:v.metro}})," ",e==="fr"?C.fr:C.en]}),(0,h.jsx)("div",{className:"space-y-1",children:x.items.map(([c,m],w)=>(0,h.jsxs)("div",{className:"flex items-center justify-between",style:{fontSize:12,color:v.sub},children:[(0,h.jsx)("span",{className:"truncate",style:{color:v.ink},children:c}),(0,h.jsxs)("span",{style:{fontFamily:he.mono,whiteSpace:"nowrap",marginLeft:8},children:[m<1e3?`${m} m`:`${(m/1e3).toFixed(1)} km`," \xB7 ",yR(m)," ",a("min","min")]})]},w))})]},x.type)})}),(0,h.jsxs)("div",{className:"rounded-xl p-3",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center gap-1.5 mb-2",style:{fontSize:13,fontWeight:700,color:v.ink},children:[(0,h.jsx)(Tu,{size:15,style:{color:v.metro}})," ",a("Temps de trajet vers","Commute time to")," ",o]}),(0,h.jsxs)("div",{className:"flex gap-2 mb-2",children:[(0,h.jsx)("input",{type:"text",value:o,onChange:x=>l(x.target.value),placeholder:a("Destination\u2026","Destination\u2026"),className:"flex-1 rounded-lg px-2.5 py-1.5",style:{border:`1.5px solid ${v.line}`,fontSize:13,background:v.paper,color:v.ink}}),(0,h.jsx)("button",{onClick:()=>{f(.85+Math.random()*.5),n("commute_calc",{dest:o})},className:"rounded-lg px-3",style:{background:v.metro,color:"#fff",fontSize:12.5,fontWeight:700},children:a("Estimer","Estimate")})]}),(0,h.jsx)("div",{className:"flex gap-1.5 mb-2",children:[["weekday",a("Semaine","Weekday")],["weekend",a("Fin de semaine","Weekend")]].map(([x,C])=>(0,h.jsx)("button",{onClick:()=>s(x),className:"rounded-full px-3 py-1",style:{background:r===x?v.metroSoft:v.paper,color:r===x?v.metro:v.sub,border:`1px solid ${r===x?"#C9D9F2":v.line}`,fontSize:12,fontWeight:600},children:C},x))}),(0,h.jsx)(aR,{hours:t.commute.hours,series:d,lang:e}),(0,h.jsx)("div",{className:"flex flex-wrap gap-x-3 gap-y-1 mt-1",children:d.map((x,C)=>(0,h.jsxs)("span",{className:"inline-flex items-center gap-1",style:{fontSize:11,color:v.sub},children:[(0,h.jsx)("span",{style:{width:8,height:8,borderRadius:2,background:x.color}})," ",x.name]},C))}),(0,h.jsxs)("div",{className:"mt-1.5",style:{fontSize:11.5,color:v.sub},children:[a("Pointe auto :","Car peak:")," ",(0,h.jsxs)("b",{style:{fontFamily:he.mono,color:v.ink},children:[g," min"]})," \xB7 ",a("estimations, non rout\xE9es en temps r\xE9el","estimates, not real-time routed")]})]})]})}function _R({l:t,lang:e,refEl:n}){let i=(f,p)=>e==="fr"?f:p,a=t.hood,r=a.demo,s=({icon:f,label:p,v:d})=>(0,h.jsxs)("div",{className:"flex-1 rounded-xl p-3 text-center",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsx)(f,{size:16,style:{color:v.metro,margin:"0 auto 4px"}}),(0,h.jsx)("div",{style:{fontFamily:he.mono,fontWeight:600,fontSize:22,color:v.ink},children:d}),(0,h.jsx)("div",{style:{fontSize:11,color:v.sub},children:p})]}),o=r.incomeBands.map(([f,p],d)=>({label:f,pct:p,color:["#C9D8EE","#7FA0CE","#3D6DB4","#1C4A8F"][d]})),l=r.ageBands.map(([f,p],d)=>({label:f,pct:p,color:["#E4F1EA","#A9D3BD","#5FA987","#2F7D5C","#1E5740"][d]})),u=r.langs.map(([f,p],d)=>({label:f,pct:p,color:["#1656B4","#E8A33D","#9AA6B8"][d]}));return(0,h.jsxs)("section",{ref:n,className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:Bu,title:i("Le quartier, en chiffres","The neighbourhood, in numbers"),note:i("donn\xE9es d\xE9mo","sample data")}),(0,h.jsxs)("div",{className:"flex gap-2 mb-3",children:[(0,h.jsx)(s,{icon:xu,label:"Walk Score",v:a.walk}),(0,h.jsx)(s,{icon:Yr,label:i("Transit","Transit"),v:a.transit}),(0,h.jsx)(s,{icon:su,label:i("V\xE9lo","Bike"),v:a.bike})]}),(0,h.jsxs)("div",{className:"space-y-1.5 mb-4",style:{fontSize:13.5,color:v.ink},children:[(0,h.jsxs)("div",{className:"flex items-center gap-2",children:[(0,h.jsx)(Yr,{size:14,style:{color:v.sub}}),e==="fr"?a.metroFr:a.metroEn,a.bixi>0&&(0,h.jsxs)(wn,{tone:"blue",children:[a.bixi," BIXI"]})]}),(0,h.jsxs)("div",{className:"flex items-center gap-2",children:[(0,h.jsx)(xa,{size:14,style:{color:v.sub}}),e==="fr"?a.schoolsFr:a.schoolsEn]})]}),(0,h.jsxs)("div",{className:"space-y-3",children:[(0,h.jsxs)("div",{className:"rounded-xl p-3",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center justify-between mb-1.5",children:[(0,h.jsxs)("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:12.5,fontWeight:700,color:v.ink},children:[(0,h.jsx)(co,{size:13,style:{color:v.metro}})," ",i("Revenu des m\xE9nages","Household income")]}),(0,h.jsxs)("span",{style:{fontFamily:he.mono,fontSize:12,color:v.ink},children:[i("m\xE9dian","median")," ",ut(r.incomeMed,e)]})]}),(0,h.jsx)(g0,{segments:o})]}),(0,h.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[(0,h.jsxs)("div",{className:"rounded-xl p-3",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsx)("div",{className:"mb-1.5",style:{fontSize:12.5,fontWeight:700,color:v.ink},children:i("\xC2ge","Age")}),(0,h.jsx)(g0,{segments:l})]}),(0,h.jsxs)("div",{className:"rounded-xl p-3",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"inline-flex items-center gap-1.5 mb-1.5",style:{fontSize:12.5,fontWeight:700,color:v.ink},children:[(0,h.jsx)(_u,{size:13,style:{color:v.metro}})," ",i("Langues parl\xE9es","Languages spoken")]}),(0,h.jsx)(g0,{segments:u})]})]}),(0,h.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,h.jsxs)("div",{className:"rounded-xl p-3",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsx)("div",{style:{fontSize:12.5,fontWeight:700,color:v.ink},children:i("M\xE9nages","Households")}),(0,h.jsxs)("div",{className:"mt-1",style:{fontSize:12.5,color:v.sub},children:[i("Familles","Families")," ",(0,h.jsxs)("b",{style:{fontFamily:he.mono,color:v.ink},children:[r.fam,"%"]})," \xB7 ",i("Locataires","Renters")," ",(0,h.jsxs)("b",{style:{fontFamily:he.mono,color:v.ink},children:[r.rent,"%"]})]})]}),(0,h.jsxs)("div",{className:"rounded-xl p-3",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center justify-between",children:[(0,h.jsx)("span",{style:{fontSize:12.5,fontWeight:700,color:v.ink},children:i("Criminalit\xE9","Crime")}),(0,h.jsxs)("span",{className:"inline-flex items-center gap-1",style:{fontSize:12,color:v.spruce,fontWeight:700},children:[(0,h.jsx)(Du,{size:12})," ",a.crimeDelta,"%"]})]}),(0,h.jsx)(nR,{data:a.crime,color:v.spruce,w:110,h:30}),(0,h.jsx)("div",{className:"space-y-0.5",children:a.incidents.map(([f,p,d],g)=>(0,h.jsxs)("div",{className:"flex items-center justify-between",style:{fontSize:11,color:v.sub},children:[(0,h.jsx)("span",{children:e==="fr"?f:p}),(0,h.jsxs)("span",{style:{fontFamily:he.mono,color:d<=0?v.spruce:v.danger},children:[d>0?"+":"",d,"%"]})]},g))})]})]})]}),(0,h.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:v.sub,fontFamily:he.mono},children:i("D\xE9mo \u2014 production : StatCan (recensement), donn\xE9es ouvertes SPVM/SPAL, Walk Score API.","Demo \u2014 production: StatCan (census), SPVM/SPAL open data, Walk Score API.")})]})}function SR({l:t,lang:e}){let n=(o,l)=>e==="fr"?o:l;if(!t.fund)return null;let i=t.fund,a=Math.round(i.balance/i.units),r=a>=12e3?"strong":a>=7e3?"adequate":"thin",s={strong:{tone:"green",fr:"Solide",en:"Strong"},adequate:{tone:"amber",fr:"Correct",en:"Adequate"},thin:{tone:"red",fr:"Mince",en:"Thin"}}[r];return(0,h.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:po,title:n("Sant\xE9 du fonds de pr\xE9voyance","Contingency fund health"),note:n("indicatif","indicative")}),(0,h.jsxs)("div",{className:"flex items-end justify-between",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{fontFamily:he.mono,fontWeight:600,fontSize:26,color:v.ink},children:ut(i.balance,e)}),(0,h.jsxs)("div",{style:{fontSize:12,color:v.sub},children:[ut(a,e)," ",n("par unit\xE9","per unit")," \xB7 ",i.units," ",n("unit\xE9s","units")," \xB7 ",n("\xE9tude","study")," ",i.studyYear]})]}),(0,h.jsx)(wn,{tone:s.tone,children:e==="fr"?s.fr:s.en})]}),(0,h.jsx)("div",{className:"mt-2 rounded-xl p-2.5",style:{background:i.special?v.dangerSoft:v.spruceSoft,border:`1px solid ${i.special?"#E7C3B4":"#C4E0D2"}`,fontSize:12.5,color:v.ink},children:i.special?n("\u26A0 Cotisation sp\xE9ciale vot\xE9e ou annonc\xE9e \u2014 \xE0 examiner.","\u26A0 Special assessment voted or announced \u2014 review needed."):n("\u2713 Aucune cotisation sp\xE9ciale vot\xE9e ni annonc\xE9e (selon DV D14).","\u2713 No special assessment voted or announced (per DV D14).")}),(0,h.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:v.sub},children:n("Rep\xE8re indicatif seulement \u2014 l\u2019ad\xE9quation r\xE9elle d\xE9pend de l\u2019\xE9tude du fonds et de l\u2019\xE9tat de l\u2019immeuble. Faites examiner les documents de copropri\xE9t\xE9.","Indicative benchmark only \u2014 true adequacy depends on the fund study and building condition. Have the co-ownership documents reviewed.")})]})}function MR({l:t,lang:e}){let n=(r,s)=>e==="fr"?r:s,i=(r,s)=>Math.round(r/s),a=i(t.price,t.sqft);return(0,h.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:qr,title:n("Ventes comparables","Comparable sales"),note:n("style Registre foncier","land-registry style")}),(0,h.jsxs)("div",{style:{fontSize:12.5,color:v.sub,marginBottom:8},children:[n("Demand\xE9 :","Asking:")," ",(0,h.jsx)("b",{style:{fontFamily:he.mono,color:v.ink},children:ut(t.price,e)})," \xB7 ",(0,h.jsxs)("b",{style:{fontFamily:he.mono,color:v.ink},children:[ut(a,e),"/pi\xB2"]})]}),(0,h.jsx)("div",{className:"space-y-1.5",children:t.soldComps.map(([r,s,o,l],u)=>(0,h.jsxs)("div",{className:"flex items-center justify-between rounded-lg px-3 py-2",style:{background:v.snow,border:`1px solid ${v.line}`,fontSize:12.5},children:[(0,h.jsx)("span",{className:"truncate",style:{color:v.ink},children:r}),(0,h.jsxs)("span",{className:"flex items-center gap-2 flex-shrink-0",style:{marginLeft:8},children:[(0,h.jsx)("span",{style:{fontFamily:he.mono,color:v.ink},children:ut(s,e)}),(0,h.jsxs)("span",{style:{fontFamily:he.mono,color:v.sub},children:[ut(i(s,l),e),"/pi\xB2"]}),(0,h.jsx)("span",{style:{fontFamily:he.mono,fontSize:11,color:v.sub},children:o})]})]},u))}),(0,h.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:v.sub,fontFamily:he.mono},children:n("D\xE9mo \u2014 production : Registre foncier du Qu\xE9bec / JLR. Ne constitue pas une AMC.","Demo \u2014 production: Qu\xE9bec land registry / JLR. Not a CMA.")})]})}function wR({l:t,lang:e,log:n,chat:i,setChat:a,refEl:r}){let s=(y,c)=>e==="fr"?y:c,[o,l]=(0,re.useState)(""),[u,f]=(0,re.useState)(!1),[p,d]=(0,re.useState)(!1),g=(0,re.useRef)(null);(0,re.useEffect)(()=>{g.current?.scrollIntoView({block:"nearest"})},[i,u]);let x=e==="fr"?["Le toit a quel \xE2ge ?","Des d\xE9g\xE2ts d\u2019eau d\xE9clar\xE9s ?","Frais de condo et taxes ?","Puis-je visiter samedi ?"]:["How old is the roof?","Any declared water damage?","Condo fees and taxes?","Can I visit Saturday?"];async function C(y){let c=(y??o).trim();if(!c||u)return;d(!1),l("");let m=[...i,{role:"user",text:c}];a(m),n("chat_message",{q:c.slice(0,80)}),f(!0);try{let{reply:w,escalate:M,topics:I}=await eR(t,e,i,c);I.forEach(E=>n("chat_topic",{topic:E}));let L=[{role:"assistant",text:w}];M&&(n("chat_escalation",{q:c.slice(0,80)}),L.push({role:"note",text:s(`\u2192 Transmis \xE0 ${sn.name} \u2014 r\xE9ponse \xE0 suivre.`,`\u2192 Sent to ${sn.name} \u2014 answer to follow.`)})),a([...m,...L])}catch{d(!0),a(m)}finally{f(!1)}}return(0,h.jsxs)("section",{ref:r,className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:wu,title:s("Questions sur la propri\xE9t\xE9","Questions about the property"),note:s("r\xE9ponses tir\xE9es des documents","answers from the documents")}),(0,h.jsxs)("div",{className:"rounded-xl p-3 mb-3 overflow-y-auto",style:{background:v.snow,border:`1px solid ${v.line}`,height:240},children:[i.length===0&&(0,h.jsxs)("div",{style:{fontSize:13,color:v.sub},children:[(0,h.jsx)(Li,{size:14,style:{display:"inline",color:v.ochre,marginRight:4}}),s("Je r\xE9ponds \xE0 partir de la fiche et des d\xE9clarations du vendeur \u2014 et je cite ma source. Ce que je ne sais pas, je le transmets \xE0 ","I answer from the listing sheet and seller\u2019s declarations \u2014 with sources. What I don\u2019t know, I flag to "),sn.name,"."]}),i.map((y,c)=>y.role==="note"?(0,h.jsx)("div",{className:"my-2 text-center",style:{fontSize:11.5,color:v.metro,fontFamily:he.mono},children:y.text},c):(0,h.jsx)("div",{className:`flex ${y.role==="user"?"justify-end":"justify-start"} my-1.5`,children:(0,h.jsx)("div",{className:"max-w-[85%] rounded-2xl px-3 py-2",style:{background:y.role==="user"?v.metro:v.paper,color:y.role==="user"?"#fff":v.ink,border:y.role==="user"?"none":`1px solid ${v.line}`,fontSize:13.5,lineHeight:1.45},children:y.text})},c)),u&&(0,h.jsx)("div",{style:{fontSize:12.5,color:v.sub,fontFamily:he.mono},className:"my-1.5",children:s("consulte les documents\u2026","checking the documents\u2026")}),p&&(0,h.jsx)("div",{style:{fontSize:12.5,color:v.danger},className:"my-1.5",children:s("Le service ne r\xE9pond pas. R\xE9essayez.","The service didn\u2019t respond. Try again.")}),(0,h.jsx)("div",{ref:g})]}),(0,h.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-2.5",children:x.map(y=>(0,h.jsx)("button",{onClick:()=>C(y),className:"rounded-full px-2.5 py-1",style:{background:v.metroSoft,color:v.metro,fontSize:12,fontWeight:600,border:"1px solid #C9D9F2"},children:y},y))}),(0,h.jsxs)("div",{className:"flex gap-2",children:[(0,h.jsx)("input",{value:o,onChange:y=>l(y.target.value),onKeyDown:y=>{y.key==="Enter"&&C()},placeholder:s("Posez votre question\u2026","Ask your question\u2026"),className:"flex-1 rounded-xl px-3 py-2.5",style:{border:`1.5px solid ${v.line}`,fontSize:14,background:v.paper,color:v.ink}}),(0,h.jsx)("button",{onClick:()=>C(),disabled:u,"aria-label":s("Envoyer","Send"),className:"rounded-xl px-3.5",style:{background:v.metro,color:"#fff",opacity:u?.6:1},children:(0,h.jsx)(Xr,{size:17})})]}),(0,h.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:v.sub},children:[(0,h.jsx)(kn,{size:12,style:{marginTop:1,flexShrink:0}}),s("Assistant IA. Ne fournit pas de conseils juridiques, fiscaux ou sur le prix d\u2019offre. Les renseignements ne remplacent pas la v\xE9rification diligente.","AI assistant. Does not provide legal, tax, or offer-price advice. Information does not replace due diligence.")]})]})}function CR({l:t,lang:e,log:n,dm:i,setDm:a,refEl:r}){let s=(p,d)=>e==="fr"?p:d,[o,l]=(0,re.useState)(""),u=(0,re.useRef)(null);(0,re.useEffect)(()=>{u.current?.scrollIntoView({block:"nearest"})},[i]);function f(){let p=o.trim();if(!p)return;l("");let d={who:"prospect",text:p,ts:Date.now()},g=[...i,d,{who:"receipt",text:s("Remis \xE0 Julie Fortin","Delivered to Julie Fortin"),ts:Date.now()}];a(g),n("broker_message",{text:p.slice(0,120)}),i.some(x=>x.who==="broker")||setTimeout(()=>a(x=>[...x,{who:"broker",sim:!0,ts:Date.now(),text:s("Bonjour! Merci pour votre message, je regarde \xE7a et je vous reviens rapidement. Souhaitez-vous que je vous propose des plages de visite?","Hi! Thanks for your message \u2014 I\u2019ll look into it and get back to you shortly. Would you like me to suggest a few showing times?")}]),1600)}return(0,h.jsxs)("section",{ref:r,className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:xo,title:s("\xC9crire \xE0 la courti\xE8re","Message the broker"),note:s("ligne directe","direct line")}),(0,h.jsxs)("div",{className:"flex items-center gap-2 mb-3 rounded-xl p-2.5",style:{background:v.metroSoft,border:"1px solid #C9D9F2"},children:[(0,h.jsx)("div",{className:"rounded-full flex items-center justify-center",style:{width:34,height:34,background:v.metro,color:"#fff",fontWeight:700,fontFamily:he.disp},children:"JF"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{fontSize:13.5,fontWeight:700,color:v.ink},children:sn.name}),(0,h.jsxs)("div",{style:{fontSize:11.5,color:v.sub},children:[e==="fr"?sn.title_fr:sn.title_en," \xB7 ",sn.agency]})]})]}),(0,h.jsxs)("div",{className:"rounded-xl p-3 mb-3 overflow-y-auto",style:{background:v.snow,border:`1px solid ${v.line}`,height:200},children:[i.length===0&&(0,h.jsx)("div",{style:{fontSize:13,color:v.sub},children:s("Une question pr\xE9cise, une contre-proposition, une disponibilit\xE9? \xC9crivez directement \xE0 Julie \u2014 c\u2019est une ligne priv\xE9e, distincte de l\u2019assistant.","A specific question, a counter-proposal, your availability? Message Julie directly \u2014 this is a private line, separate from the assistant.")}),i.map((p,d)=>p.who==="receipt"?(0,h.jsxs)("div",{className:"text-right my-1",style:{fontSize:10.5,color:v.sub,fontFamily:he.mono},children:["\u2713 ",p.text]},d):(0,h.jsx)("div",{className:`flex ${p.who==="prospect"?"justify-end":"justify-start"} my-1.5`,children:(0,h.jsxs)("div",{className:"max-w-[85%] rounded-2xl px-3 py-2",style:{background:p.who==="prospect"?v.ink:v.paper,color:p.who==="prospect"?"#fff":v.ink,border:p.who==="prospect"?"none":`1px solid ${v.line}`,fontSize:13.5,lineHeight:1.45},children:[p.text,p.sim&&(0,h.jsx)("div",{style:{fontSize:9.5,color:v.sub,fontFamily:he.mono,marginTop:3},children:s("r\xE9ponse simul\xE9e (d\xE9mo)","simulated reply (demo)")})]})},d)),(0,h.jsx)("div",{ref:u})]}),(0,h.jsxs)("div",{className:"flex gap-2",children:[(0,h.jsx)("input",{value:o,onChange:p=>l(p.target.value),onKeyDown:p=>{p.key==="Enter"&&f()},placeholder:s("Votre message \xE0 Julie\u2026","Your message to Julie\u2026"),className:"flex-1 rounded-xl px-3 py-2.5",style:{border:`1.5px solid ${v.line}`,fontSize:14,background:v.paper,color:v.ink}}),(0,h.jsx)("button",{onClick:f,"aria-label":s("Envoyer","Send"),className:"rounded-xl px-3.5",style:{background:v.ink,color:"#fff"},children:(0,h.jsx)(Xr,{size:17})})]})]})}function bR({l:t,lang:e,log:n,onClose:i}){let a=(x,C)=>e==="fr"?x:C,[r,s]=(0,re.useState)(null),[o,l]=(0,re.useState)(null),[u,f]=(0,re.useState)(!1),p=(0,re.useMemo)(()=>Array.from({length:5},(x,C)=>new Date(Date.now()+C*864e5).toLocaleDateString(e==="fr"?"fr-CA":"en-CA",{weekday:"short",day:"numeric",month:"short"})),[e]),d=["10:00","11:30","13:00","15:30","17:00","18:30"],g=({v:x,cur:C,set:y})=>(0,h.jsx)("button",{onClick:()=>y(x),className:"rounded-lg px-2.5 py-1.5",style:{border:`1.5px solid ${C===x?v.metro:v.line}`,background:C===x?v.metroSoft:v.paper,color:C===x?v.metro:v.ink,fontSize:13,fontWeight:600},children:x});return(0,h.jsx)(Sh,{onClose:i,label:a("Planifier une visite","Book a showing"),children:u?(0,h.jsxs)("div",{className:"text-center pb-4",children:[(0,h.jsx)(lo,{size:34,style:{color:v.spruce,margin:"0 auto 8px"}}),(0,h.jsx)("div",{style:{fontFamily:he.disp,fontWeight:700,fontSize:19,color:v.ink},children:a("Demande envoy\xE9e","Request sent")}),(0,h.jsxs)("div",{style:{fontSize:13.5,color:v.sub,marginTop:4},children:[sn.name," ",a("vous confirme sous 2 h ouvrables \u2014","will confirm within 2 business hours \u2014")," ",r," \xB7 ",o]})]}):(0,h.jsxs)("div",{className:"pb-2",children:[(0,h.jsx)("div",{style:{fontFamily:he.disp,fontWeight:700,fontSize:19,color:v.ink},children:a("Planifier une visite","Book a showing")}),(0,h.jsx)("div",{style:{fontSize:12.5,color:v.sub,marginBottom:12},children:t.addr}),(0,h.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-3",children:p.map(x=>(0,h.jsx)(g,{v:x,cur:r,set:s},x))}),(0,h.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:d.map(x=>(0,h.jsx)(g,{v:x,cur:o,set:l},x))}),(0,h.jsx)("button",{disabled:!r||!o,onClick:()=>{n("booking_request",{when:`${r} ${o}`}),f(!0)},className:"w-full rounded-xl py-3",style:{background:!r||!o?v.line:v.metro,color:"#fff",fontWeight:700,fontSize:15},children:a("Demander cette plage","Request this slot")})]})})}function LR({lang:t,log:e,onClose:n,onDone:i}){let a=(u,f)=>t==="fr"?u:f,r=[["prix",a("Prix trop \xE9lev\xE9","Price too high")],["emplacement",a("Emplacement","Location")],["travaux",a("Trop de r\xE9novations","Too many renovations")],["taille",a("Taille","Size")],["stationnement",a("Stationnement","Parking")],["autre",a("Autre","Other")]],[s,o]=(0,re.useState)([]),l=u=>o(f=>f.includes(u)?f.filter(p=>p!==u):[...f,u]);return(0,h.jsxs)(Sh,{onClose:n,label:a("Pas pour moi","Not for me"),children:[(0,h.jsx)("div",{style:{fontFamily:he.disp,fontWeight:700,fontSize:19,color:v.ink},children:a("Qu\u2019est-ce qui n\u2019allait pas ?","What didn\u2019t work?")}),(0,h.jsx)("div",{style:{fontSize:12.5,color:v.sub,marginBottom:12},children:a("Vos prochaines alertes s\u2019ajusteront.","Your next alerts will adjust.")}),(0,h.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:r.map(([u,f])=>(0,h.jsx)("button",{onClick:()=>l(u),className:"rounded-full px-3 py-1.5",style:{border:`1.5px solid ${s.includes(u)?v.metro:v.line}`,background:s.includes(u)?v.metroSoft:v.paper,color:s.includes(u)?v.metro:v.ink,fontSize:13,fontWeight:600},children:f},u))}),(0,h.jsx)("button",{onClick:()=>{e("reaction_pass",{reasons:s}),i()},className:"w-full rounded-xl py-3",style:{background:v.ink,color:"#fff",fontWeight:700,fontSize:15},children:a("Envoyer","Send")})]})}function IR({lang:t,onEvent:e}){let n=(s,o)=>t==="fr"?s:o;(0,re.useEffect)(()=>{e&&e("compare_view")},[]);let i=s=>Math.round(y0(s.price*.8,4.39,25)+(s.taxesMun+s.taxesScol)/12+s.condoFees+s.sqft*pr[s.heating].perSqft/12+s.insuranceEst),a=s=>{let o=AM(s.price,s.forecast.drivers,6,s.forecast.organic);return Math.round((o[o.length-1].mid-s.price)/s.price*100)},r=[[n("Prix","Price"),s=>ut(s.price,t)],[n("Prix / pi\xB2","Price / sqft"),s=>ut(Math.round(s.price/s.sqft),t)],[n("Co\xFBt mensuel est.","Est. monthly cost"),s=>ut(i(s),t)],[n("Superficie","Area"),s=>`${IM(s.sqft,t)} pi\xB2`],[n("Ch. / sdb","Beds / baths"),s=>`${s.beds} / ${s.baths}`],[n("Taxes / an","Taxes / yr"),s=>ut(s.taxesMun+s.taxesScol,t)],[n("Copropri\xE9t\xE9 / mois","Condo / mo"),s=>s.condoFees?ut(s.condoFees,t):"\u2014"],["Walk / Transit / "+n("V\xE9lo","Bike"),s=>`${s.hood.walk} / ${s.hood.transit} / ${s.hood.bike}`],[n("Pr\xE9vision m\xE9diane 6 ans","6-yr median forecast"),s=>{let o=a(s);return(o>=0?"+":"")+o+"%"}],[n("Criminalit\xE9 (tendance)","Crime (trend)"),s=>`${s.hood.crimeDelta}%`]];return(0,h.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,h.jsx)(zu,{children:n("Comparaison","Comparison")}),(0,h.jsx)("h1",{style:{fontFamily:he.disp,fontWeight:800,fontSize:26,color:v.ink,margin:"4px 0 14px"},children:n("C\xF4te \xE0 c\xF4te","Side by side")}),(0,h.jsxs)("div",{className:"grid grid-cols-3 gap-0 rounded-2xl overflow-hidden",style:{border:`1px solid ${v.line}`},children:[(0,h.jsx)("div",{style:{background:v.snow}}),Zi.map(s=>(0,h.jsxs)("div",{className:"p-3",style:{background:v.ink,color:"#fff"},children:[(0,h.jsx)("div",{style:{fontFamily:he.disp,fontWeight:700,fontSize:14,lineHeight:1.15},children:s.addr}),(0,h.jsx)("div",{style:{fontSize:11,color:"#9FB2D6"},children:s.area.split(",")[0]})]},s.id)),r.map(([s,o],l)=>(0,h.jsxs)(re.default.Fragment,{children:[(0,h.jsx)("div",{className:"p-2.5",style:{background:l%2?v.paper:v.snow,fontSize:11.5,fontWeight:600,color:v.sub,borderTop:`1px solid ${v.line}`},children:s}),Zi.map(u=>(0,h.jsx)("div",{className:"p-2.5",style:{background:l%2?v.paper:v.snow,fontFamily:he.mono,fontSize:12.5,color:v.ink,borderTop:`1px solid ${v.line}`,borderLeft:`1px solid ${v.line}`},children:o(u)},u.id))]},l))]}),(0,h.jsx)("div",{className:"mt-3",style:{fontSize:10.5,color:v.sub,fontFamily:he.mono},children:n("Co\xFBts et pr\xE9visions = estimations du mod\xE8le, non garanties.","Costs and forecasts = model estimates, not guaranteed.")})]})}function AR({lang:t,log:e,myNotes:n,setNote:i,refEl:a}){let r=(p,d)=>t==="fr"?p:d,[s,o]=(0,re.useState)(""),l=()=>{let p=s.trim();p&&(i([...n,{id:`n-${Date.now()}`,txt:p,ts:Date.now()}]),o(""),e("note_saved",{chars:p.length}))},u=p=>i(n.filter(d=>d.id!==p)),f=p=>new Date(p).toLocaleString(t==="fr"?"fr-CA":"en-CA",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return(0,h.jsxs)("section",{ref:a,className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:qr,title:r("Mes notes","My notes"),note:r("priv\xE9es \u2014 enregistr\xE9es dans votre portail","private \u2014 saved to your portal")}),(0,h.jsx)("textarea",{value:s,onChange:p=>o(p.target.value),rows:3,placeholder:r("Vos impressions sur cette propri\xE9t\xE9 \u2014 questions pour la visite, points \xE0 v\xE9rifier\u2026","Your impressions of this property \u2014 questions for the visit, things to double-check\u2026"),className:"w-full rounded-lg px-2.5 py-2",style:{border:`1.5px solid ${v.line}`,fontFamily:he.body,fontSize:13.5,color:v.ink,resize:"vertical"}}),(0,h.jsxs)("button",{onClick:l,disabled:!s.trim(),className:"mt-2 rounded-xl px-4 py-2 inline-flex items-center gap-1.5",style:{background:s.trim()?v.metro:v.line,color:"#fff",fontWeight:700,fontSize:13},children:[(0,h.jsx)(Xr,{size:13})," ",r("Enregistrer la note","Save note")]}),n.length>0&&(0,h.jsx)("div",{className:"mt-3 space-y-2",children:n.slice().reverse().map(p=>(0,h.jsxs)("div",{className:"rounded-xl p-3 flex items-start gap-2",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,h.jsx)("div",{style:{fontSize:13.5,color:v.ink,lineHeight:1.5,whiteSpace:"pre-wrap"},children:p.txt}),(0,h.jsx)("div",{style:{fontFamily:he.mono,fontSize:10.5,color:v.sub,marginTop:4},children:f(p.ts)})]}),(0,h.jsx)("button",{onClick:()=>u(p.id),"aria-label":r("Supprimer la note","Delete note"),className:"p-1 rounded-md",style:{color:v.sub},children:(0,h.jsx)(hr,{size:14})})]},p.id))}),(0,h.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:v.sub},children:r("Vos notes vous suivent d\u2019un appareil \xE0 l\u2019autre. Leur contenu reste priv\xE9 \u2014 seul le fait que vous prenez des notes est visible par votre courti\xE8re.","Your notes follow you across devices. Their content stays private \u2014 your broker only sees that you are taking notes.")})]})}function ER({l:t,lang:e,log:n,reaction:i,setReaction:a,chat:r,setChat:s,dm:o,setDm:l,myNotes:u,setNote:f,onCompare:p,onBack:d}){let g=(P,k)=>e==="fr"?P:k,[x,C]=(0,re.useState)(!1),[y,c]=(0,re.useState)(!1),[m,w]=(0,re.useState)(null),[M,I]=(0,re.useState)("classique"),L={tour:(0,re.useRef)(null),design:(0,re.useRef)(null),cout:(0,re.useRef)(null),prev:(0,re.useRef)(null),quartier:(0,re.useRef)(null),commodites:(0,re.useRef)(null),risques:(0,re.useRef)(null),notes:(0,re.useRef)(null),questions:(0,re.useRef)(null),messages:(0,re.useRef)(null)},E=P=>{w(P),setTimeout(()=>w(null),2400)},_=P=>{n("section_view",{s:P}),L[P].current?.scrollIntoView({behavior:"smooth",block:"start"})},A=(0,re.useMemo)(()=>Math.round(y0(t.price*.8,4.39,25)+(t.taxesMun+t.taxesScol)/12+t.condoFees+t.sqft*pr[t.heating].perSqft/12+t.insuranceEst),[t]),R=[["tour","3D"],["design","Design"],["cout",g("Co\xFBt","Cost")],["prev",g("Pr\xE9vision","Forecast")],["quartier",g("Quartier","Area")],["commodites",g("Commodit\xE9s","Amenities")],["risques",g("Risques","Risks")],["notes",g("Notes","Notes")],["questions","Questions"],["messages","Messages"]];return(0,h.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pb-28",children:[(0,h.jsxs)("div",{className:"pt-5 pb-4 fade-up",children:[(0,h.jsxs)("button",{onClick:d,className:"inline-flex items-center gap-1 mb-2.5 rounded-full px-2.5 py-1",style:{background:v.paper,border:`1px solid ${v.line}`,fontSize:11.5,fontWeight:700,color:v.sub},children:["\u2190 ",g("Inscriptions","Listings")]}),(0,h.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,h.jsxs)(zu,{children:["Centris n\xBA ",t.id," \xB7 ",t.area,t.centrisUrl&&(0,h.jsx)("a",{href:t.centrisUrl,target:"_blank",rel:"noreferrer",style:{color:v.metro,marginLeft:8,fontWeight:700},children:"Voir sur Centris \u2197"})]}),(0,h.jsxs)("button",{onClick:p,className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1",style:{background:v.paper,border:`1px solid ${v.line}`,fontSize:11.5,fontWeight:700,color:v.metro},children:[(0,h.jsx)(yu,{size:12})," ",g("Comparer","Compare")]})]}),(0,h.jsx)("h1",{style:{fontFamily:he.disp,fontWeight:800,fontSize:"clamp(26px,6vw,36px)",color:v.ink,lineHeight:1.08,margin:"6px 0 4px"},children:t.addr}),(0,h.jsxs)("div",{className:"flex flex-wrap items-baseline gap-x-3 gap-y-1",children:[(0,h.jsx)("span",{style:{fontFamily:he.mono,fontWeight:600,fontSize:22,color:v.metro},children:ut(t.price,e)}),(0,h.jsxs)("span",{style:{fontSize:12.5,color:v.sub},children:[g("\xC9val. municipale","Municipal eval.")," ",ut(t.evalMun,e)]})]}),(0,h.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-2.5",children:[(0,h.jsx)(wn,{tone:"blue",children:e==="fr"?t.typeFr:t.typeEn}),(0,h.jsxs)(wn,{children:[t.beds," ",g("ch.","bd")," \xB7 ",t.baths," ",g("sdb","ba")]}),(0,h.jsxs)(wn,{children:[IM(t.sqft,e)," pi\xB2"]}),(0,h.jsx)(wn,{children:t.year})]}),(0,h.jsx)("button",{onClick:()=>_("cout"),className:"mt-4 w-full text-left rounded-2xl p-4",style:{background:v.ink,color:"#fff"},children:(0,h.jsxs)("div",{className:"flex items-center justify-between",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{fontFamily:he.mono,fontSize:10.5,letterSpacing:".12em",textTransform:"uppercase",color:"#9FB2D6"},children:g("Co\xFBt mensuel r\xE9el \u2014 estim\xE9","True monthly cost \u2014 estimated")}),(0,h.jsxs)("div",{style:{fontFamily:he.mono,fontWeight:600,fontSize:30,lineHeight:1.15},children:[ut(A,e),(0,h.jsxs)("span",{style:{fontSize:14,color:"#9FB2D6"},children:[" /",g("mois","mo")]})]}),(0,h.jsx)("div",{style:{fontSize:11.5,color:"#9FB2D6"},children:g("hypoth\xE8que + taxes + copro + \xE9nergie + assurance","mortgage + taxes + condo + energy + insurance")})]}),(0,h.jsx)(uo,{size:22,style:{color:v.ochre}})]})})]}),(0,h.jsx)("div",{className:"flex gap-2 overflow-x-auto pb-2 -mx-3 px-3",children:t.rooms.map((P,k)=>{let X=P.icon;return(0,h.jsxs)("div",{className:"flex-shrink-0 rounded-xl relative overflow-hidden",style:{width:k===0?210:150,height:120,background:`linear-gradient(150deg, ${P.g[0]}, ${P.g[1]})`},children:[(0,h.jsx)(X,{size:26,style:{color:"rgba(255,255,255,.85)",position:"absolute",top:10,left:10}}),(0,h.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 px-2.5 py-1.5",style:{background:"linear-gradient(transparent, rgba(17,27,46,.72))"},children:[(0,h.jsx)("div",{style:{color:"#fff",fontSize:12.5,fontWeight:700},children:e==="fr"?P.fr:P.en}),(0,h.jsx)("div",{style:{color:"rgba(255,255,255,.75)",fontSize:10.5,fontFamily:he.mono},children:P.d})]})]},k)})}),(0,h.jsx)("div",{className:"sticky top-0 z-30 -mx-3 px-3 py-2",style:{background:"rgba(246,248,250,.94)",backdropFilter:"blur(6px)",borderBottom:`1px solid ${v.line}`},children:(0,h.jsx)("div",{className:"flex gap-1.5 overflow-x-auto",children:R.map(([P,k])=>(0,h.jsx)("button",{onClick:()=>_(P),className:"rounded-full px-3 py-1.5 flex-shrink-0",style:{background:v.paper,border:`1px solid ${v.line}`,fontSize:12.5,fontWeight:700,color:v.ink},children:k},P))})}),(0,h.jsxs)("div",{className:"space-y-4 mt-4",children:[(0,h.jsx)("div",{ref:L.tour,children:(0,h.jsx)(cR,{listing:t,lang:e,onEvent:n,theme:M,onThemeChange:P=>{I(P),n("theme_change",{theme:P})},onDesigner:()=>L.design.current?.scrollIntoView({behavior:"smooth",block:"start"})})}),(0,h.jsx)(zR,{lang:e,log:n,theme:M,setTheme:I,refEl:L.design}),(0,h.jsx)(dR,{l:t,lang:e,log:n,refEl:L.cout}),(0,h.jsx)(hR,{l:t,lang:e,log:n,refEl:L.prev}),(0,h.jsx)(_R,{l:t,lang:e,refEl:L.quartier}),(0,h.jsx)(vR,{l:t,lang:e,log:n,refEl:L.commodites}),(0,h.jsx)(gR,{l:t,lang:e,log:n,refEl:L.risques}),t.fund&&(0,h.jsx)(SR,{l:t,lang:e}),(0,h.jsx)(MR,{l:t,lang:e}),(0,h.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:qr,title:g("D\xE9clarations du vendeur","Seller\u2019s declarations"),note:g("extraits v\xE9rifiables","verifiable extracts")}),(0,h.jsx)("div",{className:"space-y-2.5",children:t.dv.map(P=>(0,h.jsxs)("div",{className:"flex gap-2.5",children:[(0,h.jsx)("span",{style:{fontFamily:he.mono,fontSize:11,fontWeight:600,color:v.metro,background:v.metroSoft,borderRadius:6,padding:"2px 6px",height:"fit-content"},children:P.s}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{fontSize:13,fontWeight:700,color:v.ink},children:e==="fr"?P.qFr:P.qEn}),(0,h.jsx)("div",{style:{fontSize:13,color:v.sub,lineHeight:1.45},children:e==="fr"?P.aFr:P.aEn})]})]},P.s))}),(0,h.jsxs)("div",{className:"mt-3",style:{fontSize:12.5,color:v.ink},children:[(0,h.jsx)("b",{children:g("Inclusions :","Inclusions:")})," ",e==="fr"?t.inclFr:t.inclEn," \xB7 ",(0,h.jsx)("b",{children:g("Stationnement :","Parking:")})," ",e==="fr"?t.parkFr:t.parkEn]})]}),(0,h.jsx)(AR,{lang:e,log:n,myNotes:u,setNote:f,refEl:L.notes}),(0,h.jsx)(wR,{l:t,lang:e,log:n,chat:r,setChat:s,refEl:L.questions}),(0,h.jsx)(CR,{l:t,lang:e,log:n,dm:o,setDm:l,refEl:L.messages})]}),(0,h.jsx)("div",{className:"fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2",style:{background:"linear-gradient(transparent, rgba(246,248,250,.96) 34%)"},children:(0,h.jsxs)("div",{className:"max-w-2xl mx-auto flex gap-2",children:[(0,h.jsxs)("button",{onClick:()=>{i!=="interested"&&(n("reaction_interested"),a("interested"),E(g("Not\xE9 \u2014 Julie le sait.","Noted \u2014 Julie knows.")))},className:"flex-1 rounded-xl py-3 flex items-center justify-center gap-1.5",style:{background:i==="interested"?v.spruce:v.paper,color:i==="interested"?"#fff":v.ink,border:`1.5px solid ${i==="interested"?v.spruce:v.line}`,fontWeight:700,fontSize:14},children:[(0,h.jsx)(ho,{size:16})," ",g("Int\xE9ress\xE9\xB7e","Interested")]}),(0,h.jsxs)("button",{onClick:()=>c(!0),className:"rounded-xl px-4 flex items-center justify-center gap-1.5",style:{background:i==="pass"?v.ink:v.paper,color:i==="pass"?"#fff":v.sub,border:`1.5px solid ${v.line}`,fontWeight:700,fontSize:14},children:[(0,h.jsx)(ku,{size:15})," ",g("Pas pour moi","Not for me")]}),(0,h.jsxs)("button",{onClick:()=>C(!0),className:"flex-1 rounded-xl py-3 flex items-center justify-center gap-1.5",style:{background:v.metro,color:"#fff",fontWeight:700,fontSize:14},children:[(0,h.jsx)(lo,{size:16})," ",g("Visiter","Visit")]})]})}),m&&(0,h.jsx)("div",{className:"fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full px-4 py-2 fade-up",style:{background:v.ink,color:"#fff",fontSize:13,fontWeight:600},children:m}),x&&(0,h.jsx)(bR,{l:t,lang:e,log:n,onClose:()=>C(!1)}),y&&(0,h.jsx)(LR,{lang:e,log:n,onClose:()=>c(!1),onDone:()=>{a("pass"),c(!1),E(g("Merci \u2014 alertes ajust\xE9es.","Thanks \u2014 alerts adjusted."))}})]})}function MM({n:t,size:e=13}){return(0,h.jsx)("span",{className:"inline-flex items-center gap-0.5","aria-label":`${t}/5`,children:[1,2,3,4,5].map(n=>(0,h.jsx)(So,{size:e,strokeWidth:2,fill:n<=t?v.ochre:"none",color:n<=t?v.ochre:v.line},n))})}function RR({lang:t}){let e=(i,a)=>t==="fr"?i:a,n=TR;return(0,h.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pb-16",children:[(0,h.jsx)("div",{className:"pt-5 fade-up",children:(0,h.jsx)(zu,{children:e("Votre courti\xE8re","Your broker")})}),(0,h.jsxs)("div",{className:"mt-3 rounded-2xl p-4 sm:p-5 fade-up",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center gap-3.5",children:[(0,h.jsx)("span",{style:{width:60,height:60,borderRadius:999,background:v.metroSoft,color:v.metro,display:"grid",placeItems:"center",fontFamily:he.disp,fontWeight:800,fontSize:22,flexShrink:0},children:n.initials}),(0,h.jsxs)("div",{className:"min-w-0",children:[(0,h.jsxs)("div",{className:"flex items-center gap-1.5 flex-wrap",children:[(0,h.jsx)("span",{style:{fontFamily:he.disp,fontWeight:800,fontSize:20,color:v.ink},children:n.name}),(0,h.jsxs)(wn,{tone:"green",children:[(0,h.jsx)(kn,{size:11})," ",e("V\xE9rifi\xE9e OACIQ","OACIQ-licensed")]})]}),(0,h.jsx)("div",{style:{fontSize:13,color:v.sub,marginTop:2},children:t==="fr"?n.title_fr:n.title_en}),(0,h.jsxs)("div",{style:{fontSize:12.5,color:v.sub,fontFamily:he.mono},children:[n.agency," \xB7 ",t==="fr"?n.areas_fr:n.areas_en]})]})]}),(0,h.jsx)("div",{className:"grid grid-cols-3 gap-2 mt-4",children:[{icon:So,v:n.rating.toFixed(1),l:e(`${n.reviewCount} avis`,`${n.reviewCount} reviews`),c:"#8A5A12",bg:v.ochreSoft},{icon:iu,v:`${n.years}`,l:e("ans d\u2019exp\xE9rience","years experience"),c:v.metro,bg:v.metroSoft},{icon:li,v:`${n.deals}+`,l:e("transactions","closings"),c:v.spruce,bg:v.spruceSoft}].map((i,a)=>(0,h.jsxs)("div",{className:"rounded-xl p-2.5 text-center",style:{background:i.bg,border:`1px solid ${v.line}`},children:[(0,h.jsx)(i.icon,{size:15,style:{color:i.c,margin:"0 auto"}}),(0,h.jsx)("div",{style:{fontFamily:he.mono,fontWeight:600,fontSize:20,color:v.ink,lineHeight:1.1,marginTop:3},children:i.v}),(0,h.jsx)("div",{style:{fontSize:10.5,color:v.sub,fontWeight:600},children:i.l})]},a))}),(0,h.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2 mt-4",children:[(0,h.jsxs)("a",{href:`tel:${n.phone.replace(/\s/g,"")}`,className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5",style:{background:v.metro,color:"#fff",fontWeight:700,fontSize:13.5},children:[(0,h.jsx)(Au,{size:15})," ",n.phone]}),(0,h.jsxs)("a",{href:`mailto:${n.email}`,className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5",style:{background:v.paper,color:v.metro,border:`1px solid ${v.line}`,fontWeight:700,fontSize:13.5},children:[(0,h.jsx)(Su,{size:15})," ",e("\xC9crire un courriel","Send an email")]})]})]}),(0,h.jsxs)("div",{className:"mt-5 rounded-2xl p-4 sm:p-5 fade-up",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:Li,title:e("Son histoire","Her story"),note:e("\xE0 propos","about")}),(0,h.jsx)("p",{style:{fontSize:14,color:v.ink,lineHeight:1.6,margin:0},children:t==="fr"?n.story.fr:n.story.en})]}),(0,h.jsxs)("div",{className:"mt-5",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,h.jsx)(Yt,{icon:xo,title:e("Avis clients","Client reviews"),note:e("v\xE9rifi\xE9s","verified")}),(0,h.jsxs)("div",{className:"inline-flex items-center gap-1.5 shrink-0",style:{fontSize:12.5,color:v.sub},children:[(0,h.jsx)(MM,{n:Math.round(n.rating)})," ",(0,h.jsxs)("span",{style:{fontFamily:he.mono},children:[n.rating.toFixed(1),"/5"]})]})]}),(0,h.jsx)("div",{className:"space-y-2.5",children:n.reviews.map((i,a)=>(0,h.jsxs)("div",{className:"rounded-2xl p-3.5 fade-up",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,h.jsx)("div",{style:{fontFamily:he.disp,fontWeight:800,fontSize:14.5,color:v.ink},children:i.name}),(0,h.jsx)(MM,{n:i.rating})]}),(0,h.jsx)("div",{style:{fontSize:11.5,color:v.sub,marginTop:1},children:t==="fr"?i.area_fr:i.area_en}),(0,h.jsxs)("p",{style:{fontSize:13.5,color:v.ink,lineHeight:1.5,margin:"8px 0 0"},children:["\xAB ",t==="fr"?i.fr:i.en," \xBB"]})]},a))}),(0,h.jsxs)("div",{className:"flex items-start gap-1.5 px-1 mt-3",style:{fontSize:10.5,color:v.sub},children:[(0,h.jsx)(kn,{size:12,style:{marginTop:1,flexShrink:0}}),e("Profil et avis fournis \xE0 titre de d\xE9monstration \u2014 \xE0 remplacer par le profil r\xE9el du courtier et ses avis v\xE9rifi\xE9s.","Profile and reviews shown for demonstration \u2014 replace with the broker\u2019s real profile and verified reviews.")]})]})]})}function PR(){let[t,e]=(0,re.useState)("fr"),[n,i]=(0,re.useState)("listings"),[a,r]=(0,re.useState)(Zi[0].id),[s,o]=(0,re.useState)([]),[l,u]=(0,re.useState)({}),[f,p]=(0,re.useState)({}),[d,g]=(0,re.useState)({}),[x,C]=(0,re.useState)({}),[y,c]=(0,re.useState)(!1),m=(k,X)=>t==="fr"?k:X;(0,re.useEffect)(()=>{(async()=>{let k=await Ht.get(Gt.events,null);(!k||!Array.isArray(k)||k.length===0)&&(k=_M(),await Ht.set(Gt.events,k)),o(k),u(await Ht.get(Gt.reactions,{})||{}),p(await Ht.get(Gt.chats,{})||{}),g(await Ht.get(Gt.dms,{})||{}),C(await Ht.get(Gt.notes,{})||{}),c(!0)})()},[]);let w=Zi.find(k=>k.id===a)||Zi[0];function M(k,X){let O={id:`${Mo.id}-${k}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,pid:Mo.id,pname:Mo.name,lid:a,type:k,ts:Date.now(),meta:X||null};o(V=>{let Z=[...V,O];return Ht.set(Gt.events,Z),Z})}function I(k){r(k),i("prospect");let X={id:`${Mo.id}-visit-${Date.now()}`,pid:Mo.id,pname:Mo.name,lid:k,type:"visit",ts:Date.now(),meta:null};o(O=>{let V=[...O,X];return Ht.set(Gt.events,V),V})}(0,re.useEffect)(()=>{if(!y||typeof window>"u"||!window.__VITRINE_OPEN__)return;let k=window.__VITRINE_OPEN__;delete window.__VITRINE_OPEN__,Zi.some(X=>String(X.id)===String(k))&&I(k)},[y]),(0,re.useEffect)(()=>{typeof window<"u"&&window.scrollTo(0,0)},[n,a]);let L=k=>u(X=>{let O={...X,[a]:k};return Ht.set(Gt.reactions,O),O}),E=k=>p(X=>{let O={...X,[a]:k};return Ht.set(Gt.chats,O),O}),_=k=>g(X=>{let O={...X,[a]:k};return Ht.set(Gt.dms,O),O}),A=k=>C(X=>{let O={...X,[a]:k};return Ht.set(Gt.notes,O),O});async function R(){let k=_M();await Ht.set(Gt.events,k),await Ht.del(Gt.reactions),await Ht.del(Gt.chats),await Ht.del(Gt.dms),o(k),u({}),p({}),g({}),i("broker")}if(!y)return(0,h.jsxs)("div",{style:{background:v.snow,minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:he.body},children:[(0,h.jsx)("style",{children:yM}),(0,h.jsxs)("div",{style:{textAlign:"center",color:v.sub},children:[(0,h.jsx)(xa,{size:26,style:{color:v.metro,margin:"0 auto 8px"}}),(0,h.jsx)("div",{style:{fontFamily:he.mono,fontSize:12.5},children:"Vitrine\u2026"})]})]});let P=[["listings",mo,m("Inscriptions","Listings")],["alerts",ru,m("Alertes","Alerts")],["broker",Nu,m("Votre courti\xE8re","Your broker")]];return(0,h.jsxs)("div",{style:{background:v.snow,minHeight:"100vh",fontFamily:he.body,color:v.ink},children:[(0,h.jsx)("style",{children:yM}),(0,h.jsx)("header",{className:"sticky top-0 z-40",style:{background:"rgba(246,248,250,.86)",backdropFilter:"blur(10px)",borderBottom:`1px solid ${v.line}`},children:(0,h.jsxs)("div",{className:"max-w-6xl mx-auto px-3 sm:px-4",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between py-2.5",children:[(0,h.jsxs)("div",{className:"flex items-center gap-2",children:[(0,h.jsx)("span",{style:{width:28,height:28,borderRadius:8,background:v.ink,color:"#fff",display:"grid",placeItems:"center",fontFamily:he.disp,fontWeight:800,fontSize:15},children:"V"}),(0,h.jsx)("div",{style:{fontFamily:he.disp,fontWeight:800,fontSize:17,color:v.ink,letterSpacing:"-.01em"},children:"Vitrine"})]}),(0,h.jsxs)("button",{onClick:()=>e(k=>k==="fr"?"en":"fr"),className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5",style:{background:v.paper,border:`1px solid ${v.line}`,fontSize:12,fontWeight:700,color:v.ink},children:[(0,h.jsx)(vu,{size:13})," ",t==="fr"?"FR":"EN"]})]}),(0,h.jsx)("div",{className:"flex gap-1 pb-2",children:P.map(([k,X,O])=>(0,h.jsxs)("button",{onClick:()=>i(k),className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg py-2",style:{background:n===k?v.ink:v.paper,color:n===k?"#fff":v.sub,border:`1px solid ${n===k?v.ink:v.line}`,fontWeight:700,fontSize:12.5},children:[(0,h.jsx)(X,{size:14})," ",O]},k))})]})}),(0,h.jsxs)("main",{children:[n==="listings"&&(0,h.jsx)(qR,{lang:t,onOpen:I}),n==="prospect"&&(0,h.jsx)(ER,{l:w,lang:t,log:M,reaction:l[a],setReaction:L,chat:f[a]||[],setChat:E,dm:d[a]||[],setDm:_,myNotes:x[a]||[],setNote:A,onCompare:()=>i("compare"),onBack:()=>i("listings")},a),n==="alerts"&&(0,h.jsx)(VR,{lang:t,log:M}),n==="broker"&&(0,h.jsx)(RR,{lang:t}),n==="compare"&&(0,h.jsx)(IR,{lang:t,onEvent:M})]}),n!=="prospect"&&(0,h.jsx)("footer",{className:"max-w-2xl mx-auto px-4 py-6",style:{borderTop:`1px solid ${v.line}`,marginTop:8},children:(0,h.jsxs)("div",{className:"flex items-start gap-2",style:{fontSize:10.5,color:v.sub,lineHeight:1.55},children:[(0,h.jsx)(kn,{size:13,style:{marginTop:1,flexShrink:0,color:v.sub}}),(0,h.jsx)("div",{children:m("D\xE9mo Vitrine \u2014 donn\xE9es d\u2019inscription fictives. Visites 3D reconstitu\xE9es et g\xE9n\xE9r\xE9es par IA (illustratives). Pr\xE9visions de prix illustratives, non une \xE9valuation agr\xE9\xE9e. Estimations de trajet non rout\xE9es en temps r\xE9el. Ameublement virtuel identifi\xE9 comme tel. L\u2019assistant IA ne donne pas de conseils juridiques, fiscaux ou sur le prix d\u2019offre. Conforme par conception : LCAP, Loi 25, Loi 96, conditions Centris, OACIQ.","Vitrine demo \u2014 fictional listing data. 3D tours are AI-generated reconstructions (illustrative). Price forecasts are illustrative, not a certified appraisal. Commute estimates are not real-time routed. Virtual staging is labelled as such. The AI assistant does not give legal, tax, or offer-price advice. Compliant by design: CASL, Law 25, Bill 96, Centris terms, OACIQ.")})]})})]})}function FR(t){let e=[];for(let n of(t||"").split(`
`)){let i=n.trim();if(!i)continue;let a=i.match(/^(.+?)\s+(\d+(?:[.,]\d+)?)\s*[x×]\s*(\d+(?:[.,]\d+)?)/i);if(!a)continue;let r=parseFloat(a[2].replace(",",".")),s=parseFloat(a[3].replace(",","."));r>.5&&s>.5&&r<30&&s<30&&e.push({name:a[1].trim(),w:r,d:s})}return e}function BR(t){let e=t.reduce((o,l)=>o+l.w*l.d,0),n=Math.max(Math.max(...t.map(o=>o.w))+.2,Math.sqrt(e)*1.35),i=[],a=0,r=0,s=0;return t.forEach((o,l)=>{a>0&&a+o.w>n&&(a=0,r+=s+.2,s=0);let u=(NR.find(([f])=>f.test(o.name))||[null,{col:"#E3E6EC",furn:[]}])[1];i.push({key:`r${l}`,fr:o.name,en:o.name,x:a,z:r,w:o.w,d:o.d,col:u.col,furn:u.furn||[],open:!!u.open}),a+=o.w+.2,s=Math.max(s,o.d)}),i}function UR({lang:t,defaultNo:e,onGenerate:n}){let i=(f,p)=>t==="fr"?f:p,[a,r]=(0,re.useState)(e),[s,o]=(0,re.useState)(DR),[l,u]=(0,re.useState)(!1);return(0,h.jsxs)("div",{className:"pb-2",children:[(0,h.jsx)("div",{style:{fontFamily:he.disp,fontWeight:700,fontSize:19,color:v.ink},children:i("Fiche Centris \u2192 plan 3D","Centris sheet \u2192 3D plan")}),(0,h.jsx)("div",{style:{fontSize:12,color:v.sub,margin:"4px 0 10px",lineHeight:1.5},children:i("En production, le n\xBA Centris r\xE9cup\xE8re la fiche via le canal du courtier et les dimensions des pi\xE8ces sont extraites automatiquement (voir la spec d\u2019ingestion). Ici, collez le tableau des pi\xE8ces \u2014 nom + dimensions en m\xE8tres.","In production, the Centris n\xBA pulls the sheet through the broker\u2019s channel and room dimensions are extracted automatically (see the ingestion spec). Here, paste the room table \u2014 name + dimensions in metres.")}),(0,h.jsx)("label",{style:{fontSize:12,color:v.sub},children:i("N\xBA Centris","Centris n\xBA")}),(0,h.jsx)("input",{value:a,onChange:f=>r(f.target.value),className:"w-full rounded-lg px-2.5 py-2 mb-2",style:{border:`1.5px solid ${v.line}`,fontFamily:he.mono,fontSize:14,color:v.ink}}),(0,h.jsx)("label",{style:{fontSize:12,color:v.sub},children:i("Pi\xE8ces (une par ligne)","Rooms (one per line)")}),(0,h.jsx)("textarea",{value:s,onChange:f=>o(f.target.value),rows:7,className:"w-full rounded-lg px-2.5 py-2",style:{border:`1.5px solid ${v.line}`,fontFamily:he.mono,fontSize:12.5,color:v.ink,resize:"vertical"}}),l&&(0,h.jsx)("div",{style:{fontSize:12,color:v.danger,marginTop:4},children:i("Aucune pi\xE8ce reconnue \u2014 format attendu : \xAB Salon 4,9 x 3,7 \xBB.","No rooms recognized \u2014 expected format: \u201CLiving 4.9 x 3.7\u201D.")}),(0,h.jsxs)("button",{onClick:()=>{let f=FR(s);if(!f.length){u(!0);return}n((a||"").trim()||"\u2014",f)},className:"mt-3 w-full rounded-xl py-3 inline-flex items-center justify-center gap-2",style:{background:v.metro,color:"#fff",fontWeight:700,fontSize:14.5},children:[(0,h.jsx)(ya,{size:16})," ",i("G\xE9n\xE9rer le plan 3D","Generate the 3D plan")]})]})}function zR({lang:t,log:e,theme:n,setTheme:i,refEl:a}){let r=(u,f)=>t==="fr"?u:f,[s,o]=(0,re.useState)({}),l=["sofa","table","coffee","rug"];return(0,h.jsxs)("section",{ref:a,className:"rounded-2xl p-4 sm:p-5",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:ou,title:r("Designers & ambiances","Designers & moods"),note:r("r\xE9seau partenaire \u2014 d\xE9mo","partner network \u2014 demo")}),(0,h.jsx)("div",{style:{fontSize:12.5,color:v.sub,marginBottom:10},children:r("Pr\xE9visualisez le style d\u2019un\xB7e designer directement dans la visite 3D, puis r\xE9servez une consultation.","Preview a designer\u2019s style right in the 3D tour, then book a consultation.")}),(0,h.jsx)("div",{className:"space-y-2.5",children:OR.map(u=>{let f=mr[u.style],p=n===u.style;return(0,h.jsxs)("div",{className:"rounded-xl p-3",style:{background:v.snow,border:`1px solid ${p?"#C9D9F2":v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,h.jsx)("span",{style:{width:38,height:38,borderRadius:12,background:f.dot,color:"#fff",display:"grid",placeItems:"center",fontFamily:he.disp,fontWeight:800,fontSize:14},children:u.name.split(" ").map(d=>d[0]).join("").slice(0,2)}),(0,h.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,h.jsx)("div",{style:{fontSize:14,fontWeight:800,color:v.ink},children:u.name}),(0,h.jsxs)("div",{style:{fontSize:11.5,color:v.sub},children:[t==="fr"?u.cityFr:u.cityEn," \xB7 ",u.rate]})]}),(0,h.jsx)(wn,{tone:"blue",children:t==="fr"?f.fr:f.en})]}),(0,h.jsx)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:(t==="fr"?u.tagsFr:u.tagsEn).map(d=>(0,h.jsx)(wn,{children:d},d))}),(0,h.jsxs)("div",{className:"flex gap-2 mt-2.5",children:[(0,h.jsxs)("button",{onClick:()=>{i(u.style),e("theme_change",{theme:u.style,via:u.id})},className:"flex-1 rounded-lg py-2 inline-flex items-center justify-center gap-1.5",style:{background:p?v.metro:v.paper,color:p?"#fff":v.metro,border:`1.5px solid ${p?v.metro:"#C9D9F2"}`,fontSize:12.5,fontWeight:700},children:[(0,h.jsx)(yo,{size:13})," ",p?r("Ambiance appliqu\xE9e \u2713","Mood applied \u2713"):r("Pr\xE9visualiser en 3D","Preview in 3D")]}),(0,h.jsx)("button",{onClick:()=>{s[u.id]||(o(d=>({...d,[u.id]:!0})),e("designer_request",{designer:u.id}))},className:"flex-1 rounded-lg py-2",style:{background:s[u.id]?v.spruceSoft:v.ink,color:s[u.id]?v.spruce:"#fff",fontSize:12.5,fontWeight:700},children:s[u.id]?r("Demande envoy\xE9e \u2713","Request sent \u2713"):r("Consultation 30 min","30-min consult")})]})]},u.id)})}),(0,h.jsxs)("div",{className:"mt-3 rounded-xl p-3",style:{background:v.ochreSoft,border:"1px solid #EBD3A0"},children:[(0,h.jsxs)("div",{className:"inline-flex items-center gap-1.5 mb-1.5",style:{fontSize:12.5,fontWeight:800,color:v.ink},children:[(0,h.jsx)(vo,{size:14,style:{color:"#8A5A12"}})," ",r("Magasiner l\u2019ambiance","Shop the mood")," \u2014 ",t==="fr"?mr[n].fr:mr[n].en]}),(0,h.jsx)("div",{className:"space-y-1",children:l.map(u=>(0,h.jsxs)("button",{onClick:()=>e("shop_item",{item:u,via:"design_section"}),className:"w-full flex items-center justify-between rounded-lg px-2.5 py-1.5",style:{background:v.paper,border:`1px solid ${v.line}`,fontSize:12},children:[(0,h.jsx)("span",{style:{color:v.ink,fontWeight:600},children:t==="fr"?Yi[u].fr:Yi[u].en}),(0,h.jsxs)("span",{style:{fontFamily:he.mono,color:v.sub},children:[Yi[u].price," \xB7 ",Yi[u].stores[0]]})]},u))})]}),(0,h.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:v.sub},children:[(0,h.jsx)(kn,{size:12,style:{marginTop:1,flexShrink:0}}),r("Liens marchands = partenaires (commission possible), identifi\xE9s comme tels et distincts du courtage immobilier. Vos coordonn\xE9es ne sont partag\xE9es \xE0 un\xB7e designer qu\u2019apr\xE8s votre confirmation (Loi 25).","Merchant links are partner links (commission possible), labelled as such and separate from the brokerage. Your contact info is shared with a designer only after you confirm (Law 25).")]})]})}function VR({lang:t,log:e}){let n=(m,w)=>t==="fr"?m:w,[i,a]=(0,re.useState)(bM),[r,s]=(0,re.useState)(null),[o,l]=(0,re.useState)(!1);(0,re.useEffect)(()=>{(async()=>{let m=await Ht.get(Gt.prefs,null);m&&m.p&&(a({...bM,...m.p}),s(m.status||null)),l(!0)})()},[]);let u=m=>a(w=>({...w,...m})),f=(m,w)=>u({[m]:i[m].includes(w)?i[m].filter(M=>M!==w):[...i[m],w]}),p=(m,w)=>u({[m]:w}),d=({k:m,all:w})=>(0,h.jsxs)("span",{className:"inline-flex gap-1",style:{marginLeft:"auto"},children:[(0,h.jsxs)("button",{onClick:()=>p(m,[...w]),disabled:i[m].length===w.length,style:{background:"transparent",border:0,fontSize:11,fontWeight:700,color:i[m].length===w.length?v.line:v.metro},children:["\u2713 ",n("Tout","All")]}),(0,h.jsxs)("button",{onClick:()=>p(m,[]),disabled:i[m].length===0,style:{background:"transparent",border:0,fontSize:11,fontWeight:700,color:i[m].length===0?v.line:v.sub},children:["\u2715 ",n("Aucun","None")]})]}),g=Zi.filter(m=>{let w=i.types.includes(m.condoFees>0?"condo":"detache"),M=m.price>=i.pmin&&m.price<=i.pmax,I=m.beds>=i.beds,L=m.baths>=i.baths,E=!i.must.piscine||/piscine/i.test(m.inclFr),_=!i.must.garage||/garage/i.test(m.parkFr),A=i.areas.length===0||i.areas.some(R=>m.area.includes(R));return w&&M&&I&&L&&E&&_&&A}).length;async function x(){s("vitrine"),await Ht.set(Gt.prefs,{p:i,status:"vitrine"}),e("criteria_update",{summary:`${vh(i.pmin,t)}\u2013${vh(i.pmax,t)} \xB7 ${i.beds}+ ch \xB7 ${i.areas.length} secteurs`}),setTimeout(async()=>{s("sent"),await Ht.set(Gt.prefs,{p:i,status:"sent"})},600),setTimeout(async()=>{s("synced"),await Ht.set(Gt.prefs,{p:i,status:"synced"})},3200)}let C=({on:m,onClick:w,children:M})=>(0,h.jsx)("button",{onClick:w,className:"rounded-full px-3 py-1.5",style:{background:m?v.metroSoft:v.paper,color:m?v.metro:v.sub,border:`1.5px solid ${m?"#C9D9F2":v.line}`,fontSize:12.5,fontWeight:700},children:M}),y=[{fr:"Appliqu\xE9 \xE0 vos alertes Vitrine",en:"Applied to your Vitrine alerts",sfr:"imm\xE9diat",sen:"instant"},{fr:`Transmis \xE0 ${sn.name}`,en:`Sent to ${sn.name}`,sfr:"mise \xE0 jour de la recherche Matrix \u2014 1 clic de son c\xF4t\xE9",sen:"Matrix search update \u2014 1 click on her side"},{fr:"Confirm\xE9 c\xF4t\xE9 Centris par la courti\xE8re",en:"Confirmed on Centris by the broker",sfr:"simul\xE9 pour la d\xE9mo",sen:"simulated for the demo"}],c={vitrine:0,sent:1,synced:2}[r]??-1;return o?(0,h.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,h.jsx)(zu,{children:n("Crit\xE8res de recherche","Search criteria")}),(0,h.jsx)("h1",{style:{fontFamily:he.disp,fontWeight:800,fontSize:26,color:v.ink,margin:"4px 0 4px"},children:n("Mes alertes","My alerts")}),(0,h.jsx)("div",{style:{fontSize:12.5,color:v.sub,marginBottom:14},children:n("Ajustez ici \u2014 vos prochains microsites suivront imm\xE9diatement. Julie met la recherche Centris \xE0 niveau de son c\xF4t\xE9.","Adjust here \u2014 your next microsites follow instantly. Julie brings the Centris search up to date on her side.")}),(0,h.jsxs)("div",{className:"space-y-3",children:[(0,h.jsxs)("section",{className:"rounded-2xl p-4",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:co,title:n("Prix","Price"),note:`${ut(i.pmin,t)} \u2013 ${ut(i.pmax,t)}`}),(0,h.jsx)(wo,{label:n("Minimum","Minimum"),val:i.pmin,set:m=>u({pmin:Math.min(m,i.pmax-25e3)}),min:1e5,max:875e3,step:25e3,suffix:" $",field:"pmin"}),(0,h.jsx)("div",{className:"mt-2",children:(0,h.jsx)(wo,{label:n("Maximum","Maximum"),val:i.pmax,set:m=>u({pmax:Math.max(m,i.pmin+25e3)}),min:125e3,max:9e5,step:25e3,suffix:" $",field:"pmax"})})]}),(0,h.jsxs)("section",{className:"rounded-2xl p-4",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:li,title:n("La propri\xE9t\xE9","The property"),note:n("m\xEAmes champs que l\u2019alerte Matrix","same fields as the Matrix alert")}),(0,h.jsx)("div",{style:{fontSize:12,color:v.sub,marginBottom:4},children:n("Chambres (min)","Bedrooms (min)")}),(0,h.jsx)("div",{className:"flex gap-1.5 mb-3",children:[1,2,3,4].map(m=>(0,h.jsxs)(C,{on:i.beds===m,onClick:()=>u({beds:m}),children:[m,"+"]},m))}),(0,h.jsx)("div",{style:{fontSize:12,color:v.sub,marginBottom:4},children:n("Salles de bain (min)","Bathrooms (min)")}),(0,h.jsx)("div",{className:"flex gap-1.5 mb-3",children:[1,1.5,2].map(m=>(0,h.jsxs)(C,{on:i.baths===m,onClick:()=>u({baths:m}),children:[m,"+"]},m))}),(0,h.jsx)("div",{className:"mb-3",children:(0,h.jsx)(wo,{label:n("Terrain (min, pi\xB2)","Lot area (min, sq ft)"),val:i.lot,set:m=>u({lot:m}),min:0,max:3e4,step:2500,suffix:" pi\xB2",field:"lot"})}),(0,h.jsxs)("div",{className:"flex items-center",style:{fontSize:12,color:v.sub,marginBottom:4},children:[n("Types de b\xE2timent","Building types"),(0,h.jsx)(d,{k:"types",all:CM.map(([m])=>m)})]}),(0,h.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-3",children:CM.map(([m,w,M])=>(0,h.jsx)(C,{on:i.types.includes(m),onClick:()=>f("types",m),children:t==="fr"?w:M},m))}),(0,h.jsx)("div",{style:{fontSize:12,color:v.sub,marginBottom:4},children:n("Indispensables","Must-haves")}),(0,h.jsx)("div",{className:"flex flex-wrap gap-1.5",children:[["piscine",n("Piscine","Pool")],["garage","Garage"],["foyer",n("Foyer-po\xEAle","Fireplace-stove")]].map(([m,w])=>(0,h.jsx)(C,{on:i.must[m],onClick:()=>u({must:{...i.must,[m]:!i.must[m]}}),children:w},m))})]}),(0,h.jsxs)("section",{className:"rounded-2xl p-4",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center",children:[(0,h.jsx)(Yt,{icon:go,title:n("Secteurs","Areas"),note:`${i.areas.length} ${n("choisis","selected")}`}),(0,h.jsx)(d,{k:"areas",all:wM})]}),(0,h.jsx)("div",{className:"flex flex-wrap gap-1.5",children:wM.map(m=>(0,h.jsx)(C,{on:i.areas.includes(m),onClick:()=>f("areas",m),children:m},m))})]}),(0,h.jsxs)("div",{className:"rounded-2xl p-4",style:{background:v.ink},children:[(0,h.jsx)("div",{style:{color:"#9FB2D6",fontFamily:he.mono,fontSize:10.5,textTransform:"uppercase",letterSpacing:".12em"},children:n("Aper\xE7u imm\xE9diat","Instant preview")}),(0,h.jsx)("div",{style:{color:"#fff",fontSize:14,marginTop:2},children:n(`${g} des ${Zi.length} inscriptions d\xE9mo correspondent \xE0 ces crit\xE8res.`,`${g} of ${Zi.length} demo listings match these criteria.`)}),(0,h.jsx)("button",{onClick:x,className:"mt-3 w-full rounded-xl py-3",style:{background:v.ochre,color:v.ink,fontWeight:800,fontSize:14.5},children:r?n("Mettre \xE0 jour mes crit\xE8res","Update my criteria"):n("Enregistrer mes crit\xE8res","Save my criteria")})]}),r&&(0,h.jsxs)("section",{className:"rounded-2xl p-4 fade-up",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsx)(Yt,{icon:kn,title:n("Synchronisation","Sync"),note:n("en direct","live")}),(0,h.jsx)("div",{className:"space-y-2.5",children:y.map((m,w)=>{let M=c>=w;return(0,h.jsxs)("div",{className:"flex items-start gap-2.5",children:[(0,h.jsx)("span",{style:{width:22,height:22,borderRadius:999,display:"grid",placeItems:"center",background:M?v.spruceSoft:v.snow,color:M?v.spruce:v.sub,border:`1px solid ${M?"#C4E0D2":v.line}`,flexShrink:0},children:M?(0,h.jsx)(cu,{size:13}):(0,h.jsx)(du,{size:12})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{fontSize:13,fontWeight:700,color:M?v.ink:v.sub},children:t==="fr"?m.fr:m.en}),(0,h.jsx)("div",{style:{fontSize:11,color:v.sub},children:t==="fr"?m.sfr:m.sen})]})]},w)})})]}),(0,h.jsx)("div",{className:"rounded-xl p-3",style:{background:v.metroSoft,border:"1px solid #C9D9F2",fontSize:11.5,color:v.ink,lineHeight:1.55},children:n("Pourquoi deux \xE9tapes ? Centris/Matrix n\u2019offre pas d\u2019API publique d\u2019\xE9criture des recherches sauvegard\xE9es \u2014 seul le compte Matrix de la courti\xE8re peut modifier la recherche automatique. Vitrine applique donc vos crit\xE8res imm\xE9diatement \xE0 ses propres alertes et cr\xE9e une t\xE2che \xAB 1 clic \xBB pour Julie. Chaque changement de crit\xE8res est aussi un signal d\u2019intention visible \xE0 son tableau de bord.","Why two steps? Centris/Matrix has no public write API for saved searches \u2014 only the broker\u2019s Matrix account can edit the auto-search. So Vitrine applies your criteria to its own alerts instantly and creates a one-click task for Julie. Each criteria change is also an intent signal on her dashboard.")})]})]}):null}function WR(t){let e=Zi.map(i=>{let a=HR[i.id]||{},r=i.baths%1?1:0;return{id:i.id,addr:i.addr,area:i.area,typeStr:(t==="fr"?i.typeFr:i.typeEn)+` \u2014 ${i.year}`,price:i.price,beds:i.beds,bathsStr:`${Math.floor(i.baths)}+${r}`,heatStr:t==="fr"?pr[i.heating].fr:pr[i.heating].en,rooms:a.rooms,lot:a.lot,garage:/garage/i.test(i.parkFr),fire:!!a.fire,pool:/piscine/i.test(i.inclFr),badge:a.badge,dateSent:a.dateSent,g:i.accent,xy:a.xy,full:!0,condo:i.condoFees>0,video:LM[i.id]||null}}),n=GR.map(i=>({...i,typeStr:t==="fr"?i.typeFr:i.typeEn,heatStr:t==="fr"?i.heatFr:i.heatEn,full:!1,condo:!1,video:LM[i.id]||null}));return[...n.slice(0,1),...e,...n.slice(1)]}function qR({lang:t,onOpen:e}){let n=(c,m)=>t==="fr"?c:m,[i,a]=(0,re.useState)("list"),[r,s]=(0,re.useState)(null),o=(0,re.useMemo)(()=>WR(t),[t]),l=(0,re.useMemo)(()=>[...new Set(o.map(c=>c.area))],[o]),[u,f]=(0,re.useState)([]),p=c=>f(m=>m.includes(c)?m.filter(w=>w!==c):[...m,c]),d=o.filter(c=>!u.includes(c.area)),g=d.find(c=>c.id===r)||null,x=({label:c,value:m})=>(0,h.jsxs)("div",{className:"flex items-start justify-between gap-3",style:{fontSize:12.5,padding:"3px 0"},children:[(0,h.jsx)("span",{style:{fontWeight:700,color:v.ink},children:c}),(0,h.jsx)("span",{className:"text-right",style:{color:v.sub},children:m})]}),C=c=>c?n("Oui","Yes"):n("Non","No"),y=({r:c,small:m})=>c.full?(0,h.jsxs)("button",{onClick:()=>e(c.id),className:`w-full rounded-xl ${m?"py-2":"py-2.5"} inline-flex items-center justify-center gap-1.5`,style:{background:v.metro,color:"#fff",fontWeight:800,fontSize:m?12.5:13.5},children:[n("Ouvrir le microsite","Open the microsite")," ",(0,h.jsx)(uo,{size:14})]}):(0,h.jsx)("div",{className:`w-full rounded-xl ${m?"py-2":"py-2.5"} text-center`,style:{background:v.snow,border:`1.5px dashed ${v.line}`,color:v.sub,fontWeight:700,fontSize:m?11.5:12.5},children:n("Fiche compl\xE8te \u2014 bient\xF4t \xB7 tir\xE9e de votre alerte Matrix","Full sheet \u2014 soon \xB7 from your Matrix alert")});return(0,h.jsxs)("div",{className:"max-w-6xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,h.jsxs)("div",{className:"flex items-end justify-between gap-3",children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)(zu,{children:[n("Vos alertes","Your alerts")," \xB7 ",sn.name]}),(0,h.jsx)("h1",{style:{fontFamily:he.disp,fontWeight:800,fontSize:26,color:v.ink,margin:"4px 0 2px"},children:n("Inscriptions","Listings")}),(0,h.jsxs)("div",{style:{fontSize:12,color:v.sub},children:[d.length,u.length?` / ${o.length}`:""," ",n("inscriptions \xB7 m\xEAmes donn\xE9es que l\u2019alerte Matrix, meilleure surface","listings \xB7 same data as the Matrix alert, better surface")]})]}),(0,h.jsx)("div",{className:"flex gap-1 p-1 rounded-xl shrink-0",style:{background:v.paper,border:`1px solid ${v.line}`},children:[["list",mo,n("Liste","List")],["map",Mu,n("Carte","Map")]].map(([c,m,w])=>(0,h.jsxs)("button",{onClick:()=>a(c),className:"inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5",style:{background:i===c?v.ink:"transparent",color:i===c?"#fff":v.sub,fontWeight:700,fontSize:12},children:[(0,h.jsx)(m,{size:13})," ",w]},c))})]}),(0,h.jsxs)("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:[(0,h.jsx)("span",{style:{fontFamily:he.mono,fontSize:10,letterSpacing:".1em",textTransform:"uppercase",color:v.sub,marginRight:2},children:n("Secteurs","Areas")}),l.map(c=>{let m=!u.includes(c);return(0,h.jsx)("button",{onClick:()=>p(c),"aria-pressed":m,className:"rounded-full px-3 py-1.5",style:{background:m?v.metroSoft:v.paper,color:m?v.metro:v.sub,border:`1.5px solid ${m?"#C9D9F2":v.line}`,fontSize:12,fontWeight:700},children:c},c)}),(0,h.jsxs)("span",{className:"inline-flex gap-1",style:{marginLeft:4},children:[(0,h.jsxs)("button",{onClick:()=>f([]),disabled:!u.length,className:"rounded-full px-2.5 py-1.5",style:{background:v.paper,border:`1px solid ${v.line}`,fontSize:11.5,fontWeight:700,color:u.length?v.metro:v.line},children:["\u2713 ",n("Tout s\xE9lectionner","Select all")]}),(0,h.jsxs)("button",{onClick:()=>f(l),disabled:u.length===l.length,className:"rounded-full px-2.5 py-1.5",style:{background:v.paper,border:`1px solid ${v.line}`,fontSize:11.5,fontWeight:700,color:u.length===l.length?v.line:v.sub},children:["\u2715 ",n("Tout d\xE9s\xE9lectionner","Deselect all")]})]})]}),d.length===0&&(0,h.jsx)("div",{className:"mt-6 rounded-2xl p-6 text-center",style:{background:v.paper,border:`1.5px dashed ${v.line}`,color:v.sub,fontSize:13},children:n("Aucun secteur s\xE9lectionn\xE9 \u2014 r\xE9activez un filtre pour voir les inscriptions.","No area selected \u2014 turn a filter back on to see the listings.")}),i==="list"&&(0,h.jsx)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 items-start",children:d.map(c=>(0,h.jsxs)("div",{className:"rounded-2xl overflow-hidden fade-up",style:{background:v.paper,border:`1px solid ${v.line}`},children:[c.video?(0,h.jsxs)("div",{className:"relative",style:{background:"#0B0F17"},children:[(0,h.jsx)("video",{src:c.video,controls:!0,playsInline:!0,muted:!0,loop:!0,preload:"metadata",style:{width:"100%",display:"block",maxHeight:260}}),(0,h.jsx)("div",{className:"absolute top-2 left-2",style:{pointerEvents:"none"},children:(0,h.jsx)(yh,{text:t==="fr"?"Vid\xE9o g\xE9n\xE9r\xE9e par IA \u2014 indicative":"AI-generated video \u2014 indicative"})}),c.badge&&(0,h.jsx)("span",{className:"absolute",style:{top:12,right:12,background:$i[c.badge].bg,color:$i[c.badge].fg,borderRadius:999,padding:"4px 10px",fontSize:11,fontWeight:800,pointerEvents:"none"},children:t==="fr"?$i[c.badge].fr:$i[c.badge].en})]}):(0,h.jsxs)("div",{className:"relative",style:{height:130,background:`linear-gradient(140deg, ${c.g[0]}, ${c.g[1]})`},children:[c.condo?(0,h.jsx)(xa,{size:34,style:{color:"rgba(255,255,255,.9)",position:"absolute",top:14,left:14}}):(0,h.jsx)(li,{size:34,style:{color:"rgba(255,255,255,.9)",position:"absolute",top:14,left:14}}),c.badge&&(0,h.jsx)("span",{className:"absolute",style:{top:12,right:12,background:$i[c.badge].bg,color:$i[c.badge].fg,borderRadius:999,padding:"4px 10px",fontSize:11,fontWeight:800},children:t==="fr"?$i[c.badge].fr:$i[c.badge].en}),(0,h.jsx)(ho,{size:18,style:{color:"rgba(255,255,255,.85)",position:"absolute",bottom:12,right:14}}),(0,h.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 px-3.5 py-2",style:{background:"linear-gradient(transparent, rgba(17,27,46,.65))"},children:[(0,h.jsx)("div",{style:{color:"#fff",fontFamily:he.disp,fontWeight:800,fontSize:17,lineHeight:1.1},children:c.addr}),(0,h.jsx)("div",{style:{color:"rgba(255,255,255,.85)",fontSize:11.5},children:c.area})]})]}),(0,h.jsxs)("div",{className:"p-3.5",children:[(0,h.jsxs)("div",{className:"flex items-baseline justify-between gap-2",children:[(0,h.jsx)("div",{style:{fontFamily:he.mono,fontWeight:600,fontSize:22,color:v.metro},children:ut(c.price,t)}),(0,h.jsx)("div",{style:{fontSize:11.5,color:v.sub},children:c.typeStr})]}),(0,h.jsxs)("div",{className:"mt-2 rounded-xl px-3 py-1.5",style:{background:v.snow,border:`1px solid ${v.line}`},children:[(0,h.jsx)(x,{label:n("Type de b\xE2timent","Building Type"),value:n("D\xE9tach\xE9","Detached")}),(0,h.jsx)(x,{label:n("Pi\xE8ces","Rooms"),value:c.rooms}),c.lot&&(0,h.jsx)(x,{label:n("Terrain","Lot Area"),value:c.lot}),(0,h.jsx)(x,{label:n("Chambres","Bedrooms"),value:`${c.beds}+0`}),(0,h.jsx)(x,{label:n("\xC9nergie/Chauffage","Energy/Heating"),value:c.heatStr}),(0,h.jsx)(x,{label:n("SDB + salle d\u2019eau","Bath + PR"),value:c.bathsStr}),(0,h.jsx)(x,{label:"Garage",value:C(c.garage)}),(0,h.jsx)(x,{label:n("Foyer-po\xEAle","Fireplace-Stove"),value:C(c.fire)}),(0,h.jsx)(x,{label:n("Piscine","Pool"),value:C(c.pool)})]}),(0,h.jsxs)("div",{className:"mt-2 flex items-center justify-between",style:{fontFamily:he.mono,fontSize:10.5,color:v.sub},children:[(0,h.jsxs)("span",{children:["Centris n\xBA ",c.id]}),(0,h.jsxs)("span",{children:[n("Re\xE7ue le","Sent")," ",c.dateSent]})]}),(0,h.jsx)("div",{className:"mt-2.5",children:(0,h.jsx)(y,{r:c})})]})]},c.id))}),i==="map"&&(0,h.jsxs)("div",{className:"mt-4",children:[(0,h.jsx)("div",{className:"rounded-2xl overflow-hidden",style:{border:`1px solid ${v.line}`,background:"#E8F1E4"},children:(0,h.jsxs)("svg",{viewBox:"0 0 100 92",width:"100%",style:{display:"block"},role:"img","aria-label":n("Carte des inscriptions","Listings map"),children:[(0,h.jsx)("rect",{width:"100",height:"92",fill:"#E8F1E4"}),(0,h.jsx)("path",{d:"M0 0 L100 0 L100 26 C80 34 66 30 52 40 C38 50 24 44 10 52 L0 56 Z",fill:"#DCEBD0"}),[[16,10],[30,8],[40,16],[22,24],[52,22]].map(([c,m],w)=>(0,h.jsx)("ellipse",{cx:c,cy:m,rx:3.4,ry:1.7,fill:"#B9D8EF"},w)),(0,h.jsx)("path",{d:"M100 50 L70 62 L38 80 L26 92 L46 92 L76 72 L100 60 Z",fill:"#A9CFEA"}),(0,h.jsx)("ellipse",{cx:"60",cy:"70",rx:"9",ry:"4.2",fill:"#D6E4CE"}),(0,h.jsx)("polyline",{points:"30,4 40,26 52,52 60,90",fill:"none",stroke:"#C6CEDA",strokeWidth:"1.4"}),(0,h.jsx)("polyline",{points:"6,66 40,62 62,64 96,58",fill:"none",stroke:"#CBD3DE",strokeWidth:"1.1"}),(0,h.jsx)("polyline",{points:"24,18 36,30 48,40",fill:"none",stroke:"#D2D9E2",strokeWidth:"0.9"}),[["Mont-Tremblant",18,14.5],["Sainte-Ad\xE8le",47,39.5],["Montr\xE9al",57,69],["Longueuil",76,82.5]].map(([c,m,w])=>(0,h.jsx)("text",{x:m,y:w,style:{font:`600 3.1px ${he.body}`,fill:"#5A6577"},children:c},c)),d.map(c=>{let m=r===c.id;return(0,h.jsxs)("g",{transform:`translate(${c.xy[0]}, ${c.xy[1]})`,onClick:()=>s(c.id),style:{cursor:"pointer"},children:[m&&(0,h.jsx)("circle",{cy:"-5.4",r:"4.6",fill:"none",stroke:c.g[0],strokeWidth:"0.7",opacity:"0.7"}),(0,h.jsx)("rect",{x:"-9.5",y:"-16.5",width:"19",height:"5.4",rx:"2.7",fill:"#111B2E"}),(0,h.jsx)("text",{x:"0",y:"-12.6",textAnchor:"middle",style:{font:`600 3px ${he.mono}`,fill:"#fff"},children:vh(c.price,t)}),(0,h.jsx)("path",{d:"M0 0 C -3.4 -4.6 -3.4 -8.4 0 -8.4 C 3.4 -8.4 3.4 -4.6 0 0 Z",fill:c.g[0],stroke:"#fff",strokeWidth:"0.6"}),(0,h.jsx)("circle",{cy:"-5.6",r:"1.5",fill:"#fff"})]},c.id)})]})}),g?(0,h.jsxs)("div",{className:"mt-3 rounded-2xl p-3.5 fade-up",style:{background:v.paper,border:`1px solid ${v.line}`},children:[(0,h.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,h.jsxs)("div",{className:"min-w-0",children:[(0,h.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,h.jsx)("span",{style:{fontFamily:he.disp,fontWeight:800,fontSize:15,color:v.ink},children:g.addr}),g.badge&&(0,h.jsx)(wn,{tone:g.badge==="new"?"green":"amber",children:t==="fr"?$i[g.badge].fr:$i[g.badge].en})]}),(0,h.jsxs)("div",{style:{fontSize:11.5,color:v.sub},children:[g.area," \xB7 ",g.beds," ",n("ch.","bd")," \xB7 ",g.bathsStr," ",n("sdb","ba")," \xB7 Centris ",g.id]})]}),(0,h.jsx)("div",{style:{fontFamily:he.mono,fontWeight:600,fontSize:18,color:v.metro,whiteSpace:"nowrap"},children:ut(g.price,t)})]}),(0,h.jsx)("div",{className:"mt-2.5",children:(0,h.jsx)(y,{r:g,small:!0})})]}):(0,h.jsx)("div",{className:"mt-3 text-center",style:{fontSize:12,color:v.sub},children:n("Touchez une \xE9pingle pour voir l\u2019inscription.","Tap a pin to see the listing.")}),(0,h.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:v.sub,fontFamily:he.mono,textAlign:"center"},children:n("Carte stylis\xE9e (d\xE9mo) \u2014 production : tuiles cartographiques + g\xE9ocodage des adresses.","Stylized map (demo) \u2014 production: map tiles + address geocoding.")})]})]})}var re,h,v,he,yM,m0,ut,IM,vh,_h,pr,vM,Zi,sn,Mo,gh,Ht,Gt,zu,Yt,wn,nR,g0,wo,Sh,yh,x0,fR,pR,mR,xR,yR,TR,kR,mr,Yi,DR,NR,OR,wM,CM,bM,HR,GR,LM,$i,TM=ve(()=>{re=Ai(Ca());XS();xM();h=Ai(gl()),v={ink:"#111B2E",snow:"#F6F8FA",paper:"#FFFFFF",metro:"#1656B4",metroSoft:"#E8EEF9",ochre:"#E8A33D",ochreSoft:"#FBF1DD",spruce:"#2F7D5C",spruceSoft:"#E4F1EA",line:"#DCE2EA",sub:"#5A6577",danger:"#B4552E",dangerSoft:"#F6E3DA"},he={disp:"'Bricolage Grotesque', 'Public Sans', sans-serif",body:"'Public Sans', system-ui, -apple-system, sans-serif",mono:"'Spline Sans Mono', 'SF Mono', monospace"},yM=`
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Public+Sans:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500;600&display=swap');
* { box-sizing: border-box; }
button { cursor: pointer; font-family: inherit; }
button:focus-visible, input:focus-visible, textarea:focus-visible { outline: 2px solid ${v.metro}; outline-offset: 2px; }
input[type=range] { accent-color: ${v.metro}; }
input[type=text], input[type=search] { font-family: inherit; }
::-webkit-scrollbar { height: 6px; width: 8px; }
::-webkit-scrollbar-thumb { background: ${v.line}; border-radius: 4px; }
.tour-canvas { touch-action: none; }
@media (prefers-reduced-motion: no-preference) {
  .seg-grow { transition: width .8s cubic-bezier(.2,.8,.2,1); }
  .fade-up { animation: fadeUp .5s ease both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(6px);} to { opacity:1; transform:none; } }
}`,m0=typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,ut=(t,e,n=0)=>new Intl.NumberFormat(e==="fr"?"fr-CA":"en-CA",{style:"currency",currency:"CAD",minimumFractionDigits:n,maximumFractionDigits:n}).format(t),IM=(t,e)=>new Intl.NumberFormat(e==="fr"?"fr-CA":"en-CA").format(t),vh=(t,e)=>e==="fr"?`${Math.round(t/1e3)} k$`:`$${Math.round(t/1e3)}k`;_h={montreal:{labelFr:"Bar\xE8me Montr\xE9al (2025 \u2014 index\xE9)",labelEn:"Montr\xE9al scale (2025 \u2014 indexed)",brackets:[[61500,.005],[307800,.01],[552300,.015],[1104700,.02],[2136500,.025],[3113e3,.035],[1/0,.04]]},longueuil:{labelFr:"Bar\xE8me provincial (+ majorations municipales)",labelEn:"Provincial scale (+ municipal add-ons)",brackets:[[61500,.005],[307800,.01],[1/0,.015]]}};pr={electric:{fr:"Plinthes \xE9lectriques",en:"Electric baseboards",perSqft:1.35},gas:{fr:"Gaz naturel (\xC9nergir) + Hydro",en:"Natural gas (\xC9nergir) + Hydro",perSqft:1.1},heatpump:{fr:"Thermopompe",en:"Heat pump",perSqft:.85}};vM=[{id:"28374619",addr:"4517, rue de Br\xE9beuf",area:"Le Plateau-Mont-Royal, Montr\xE9al",muni:"montreal",typeFr:"Condo divise \u2014 2 chambres",typeEn:"Divided condo \u2014 2 bedrooms",price:549e3,evalMun:471200,sqft:1042,year:1912,beds:2,baths:1,parkFr:"Rue (vignette SRRR)",parkEn:"Street (permit)",taxesMun:3124,taxesScol:389,condoFees:285,heating:"electric",insuranceEst:38,inclFr:"Luminaires, stores, lave-vaisselle Bosch (2022)",inclEn:"Light fixtures, blinds, Bosch dishwasher (2022)",accent:["#31456B","#5F7BA6"],rooms:[{icon:li,fr:"Fa\xE7ade 1912",en:"1912 fa\xE7ade",d:"Brique + corniche",g:["#31456B","#5F7BA6"]},{icon:$r,fr:"Salon double",en:"Double living room",d:"5,8 \xD7 3,4 m",g:["#C7D5EA","#8FA8CC"]},{icon:Xi,fr:"Cuisine",en:"Kitchen",d:"R\xE9nov\xE9e 2022",g:["#E9E2D2","#C9BB9B"]},{icon:so,fr:"Chambre principale",en:"Primary bedroom",d:"4,1 \xD7 3,6 m",g:["#D7DEE9","#A9B7CD"]},{icon:au,fr:"Salle de bain",en:"Bathroom",d:"Douche + bain",g:["#DCE9E4","#A9C8BB"]},{icon:Zr,fr:"Balcon arri\xE8re",en:"Back balcony",d:"Sud-ouest",g:["#CFE2D6","#8FB8A0"]}],plan:[{key:"salon",fr:"Salon",en:"Living room",x:0,z:0,w:5,d:4,col:"#C9D8EE",furn:["sofa","coffee","rug","tv","plant","art"]},{key:"cuisine",fr:"Cuisine",en:"Kitchen",x:5.2,z:0,w:3.4,d:4,col:"#EDE6D6",furn:["counter","island","stool"]},{key:"chP",fr:"Chambre principale",en:"Primary bedroom",x:0,z:4.2,w:4,d:3.6,col:"#DCE2EE",furn:["bed","night","plant"]},{key:"ch2",fr:"Chambre 2",en:"Bedroom 2",x:4.2,z:4.2,w:3,d:3.6,col:"#E6E1EE",furn:["bedS","night"]},{key:"sdb",fr:"Salle de bain",en:"Bathroom",x:7.4,z:4.2,w:2.4,d:2.4,col:"#DCEAE4",furn:["tub","vanity","mirror"]},{key:"balcon",fr:"Balcon",en:"Balcony",x:0,z:8,w:5,d:1.6,col:"#CFE2D6",furn:["chair","chair2"],open:!0}],dv:[{s:"D2",qFr:"Ann\xE9e / conversion",qEn:"Year / conversion",aFr:"Immeuble 1912, converti en copropri\xE9t\xE9 divise en 2004.",aEn:"1912 building, converted to divided co-ownership in 2004."},{s:"D5",qFr:"Infiltrations d\u2019eau",qEn:"Water infiltration",aFr:"Infiltration mineure au rangement du sous-sol en 2019, r\xE9par\xE9e (Bisson Expert). Aucune r\xE9currence depuis.",aEn:"Minor infiltration in basement storage (2019), repaired (Bisson Expert). No recurrence since."},{s:"D7",qFr:"Toiture",qEn:"Roof",aFr:"Membrane \xE9lastom\xE8re refaite en 2021 \u2014 garantie 10 ans transf\xE9rable.",aEn:"Elastomeric membrane redone in 2021 \u2014 10-year transferable warranty."},{s:"D11",qFr:"Plomberie / chauffe-eau",qEn:"Plumbing / water heater",aFr:"Entr\xE9e d\u2019eau en cuivre. Chauffe-eau remplac\xE9 en 2023.",aEn:"Copper water entry. Water heater replaced in 2023."},{s:"D14",qFr:"Copropri\xE9t\xE9",qEn:"Co-ownership",aFr:"Fonds de pr\xE9voyance : 148 000 $ (\xE9tude 2024). Aucune cotisation sp\xE9ciale vot\xE9e ni annonc\xE9e.",aEn:"Contingency fund: $148,000 (2024 study). No special assessment voted or announced."}],fund:{balance:148e3,units:12,studyYear:2024,special:!1},hood:{walk:94,transit:82,bike:96,metroFr:"M\xE9tro Mont-Royal \u2014 450 m",metroEn:"Mont-Royal metro \u2014 450 m",bixi:3,demo:{incomeMed:68400,incomeBands:[["<40k",22],["40\u201380k",38],["80\u2013120k",24],[">120k",16]],ageBands:[["0\u201314",12],["15\u201329",27],["30\u201344",33],["45\u201364",20],["65+",8]],fam:31,rent:64,langs:[["Fran\xE7ais",71],["Anglais",13],["Autres",16]]},crime:[100,96,91,94,87,82],crimeDelta:-12,incidents:[["Introduction par effraction","Break-in",-18],["M\xE9fait","Mischief",-7],["Vol de v\xE9hicule","Vehicle theft",4]],schoolsFr:"\xC9cole Paul-Bruch\xE9si (600 m) \xB7 CPE : attente \u2248 14 mois",schoolsEn:"Paul-Bruch\xE9si school (600 m) \xB7 CPE wait \u2248 14 months"},forecast:{organic:.03,drivers:[{kind:"transit",fr:"Prolongement REM de l\u2019Est \u2014 station projet\xE9e",en:"REM de l\u2019Est extension \u2014 planned station",dist:"1.2 km",year:2030,lo:4,hi:9,srcFr:"Actualit\xE9 \u2014 annonce gouvernementale",srcEn:"News \u2014 government announcement"},{kind:"zoning",fr:"Requalification de l\u2019ancien site industriel De Lorimier",en:"De Lorimier industrial site rezoning",dist:"800 m",year:2028,lo:2,hi:5,srcFr:"Ville \u2014 avis de changement de zonage",srcEn:"City \u2014 rezoning notice"},{kind:"commercial",fr:"Nouvelle art\xE8re commerciale \u2014 projet BIA Mont-Royal",en:"New commercial corridor \u2014 Mont-Royal BIA project",dist:"300 m",year:2027,lo:1,hi:3,srcFr:"SDC Mont-Royal",srcEn:"Mont-Royal merchants\u2019 assoc."}]},risks:[{kind:"flood",level:"none",fr:"Hors zone inondable (0-20 ans et 20-100 ans).",en:"Outside flood zones (0\u201320 yr and 20\u2013100 yr)."},{kind:"radon",level:"low",fr:"Potentiel radon faible (secteur cartographi\xE9 SPLQ).",en:"Low radon potential (mapped sector)."},{kind:"pyrite",level:"low",fr:"Risque pyrite faible \u2014 dalle d\u2019origine, aucun soul\xE8vement d\xE9clar\xE9.",en:"Low pyrite risk \u2014 original slab, no heaving declared."},{kind:"oil",level:"none",fr:"Aucun r\xE9servoir d\u2019huile actuel ou pass\xE9 d\xE9clar\xE9.",en:"No current or former oil tank declared."},{kind:"heat",level:"moderate",fr:"\xCElot de chaleur mod\xE9r\xE9 \u2014 faible canop\xE9e sur la rue.",en:"Moderate heat island \u2014 low street tree canopy."},{kind:"noise",level:"low",fr:"Bruit faible \u2014 rue r\xE9sidentielle, loin des grands axes.",en:"Low noise \u2014 residential street, away from arteries."}],amenities:[{type:"resto",items:[["L\u2019Express",210],["Au Pied de Cochon",350],["Pizzeria Napoletana",480]]},{type:"cafe",items:[["Caf\xE9 Olimpico",260],["Larue & Fils",190]]},{type:"cinema",items:[["Cin\xE9ma du Parc",900],["Cin\xE9ma Beaubien",1400]]},{type:"grocery",items:[["Provigo",300],["March\xE9 Jean-Talon",1600]]},{type:"park",items:[["Parc La Fontaine",550],["Parc Baldwin",700]]},{type:"gym",items:[["Nautilus Plus",620]]},{type:"pharma",items:[["Jean Coutu",280]]}],commute:{dest:"Centre-ville (Ville-Marie)",hours:[6,7,8,9,12,15,17,18,20],weekday:{car:[14,22,31,26,18,19,33,30,15],transit:[24,26,28,27,24,24,29,28,25],bike:[19,19,20,19,19,19,20,20,19]},weekend:{car:[13,14,16,18,20,21,19,17,14],transit:[26,26,27,27,28,28,27,27,28],bike:[19,19,19,19,20,20,19,19,19]}},soldComps:[["4490, rue de Br\xE9beuf",529e3,"2025-03",1005],["1233, rue Gilford",562e3,"2025-01",1080],["4602, rue Fabre",505e3,"2024-11",970]]},{id:"19052833",addr:"1183, rue Saint-Charles O.",area:"Vieux-Longueuil, Longueuil",muni:"longueuil",typeFr:"Cottage \u2014 3 chambres",typeEn:"Cottage \u2014 3 bedrooms",price:615e3,evalMun:522300,sqft:1610,year:1958,beds:3,baths:1.5,parkFr:"All\xE9e double + garage",parkEn:"Double driveway + garage",taxesMun:4188,taxesScol:512,condoFees:0,heating:"gas",insuranceEst:92,inclFr:"Cabanon, piscine hors terre (2020), thermopompe murale",inclEn:"Shed, above-ground pool (2020), wall heat pump",accent:["#7A5A3F","#B08A63"],rooms:[{icon:li,fr:"Fa\xE7ade 1958",en:"1958 fa\xE7ade",d:"Terrain 5 200 pi\xB2",g:["#7A5A3F","#B08A63"]},{icon:$r,fr:"Salon",en:"Living room",d:"Foyer au bois",g:["#E4D9C6","#C2AE8C"]},{icon:Xi,fr:"Cuisine",en:"Kitchen",d:"Armoires 2016",g:["#DDE5E9","#AABDC7"]},{icon:so,fr:"3 chambres",en:"3 bedrooms",d:"\xC9tage",g:["#D8DEE9","#A9B4CC"]},{icon:Zr,fr:"Cour arri\xE8re",en:"Backyard",d:"Piscine + cabanon",g:["#CFE2D0","#8FB894"]},{icon:uu,fr:"Garage",en:"Garage",d:"Attach\xE9",g:["#D5D8DE","#9BA3B0"]}],plan:[{key:"salon",fr:"Salon",en:"Living room",x:0,z:0,w:5,d:4.2,col:"#EADFCB",furn:["sofa","coffee","rug","tv","plant","art"]},{key:"cuisine",fr:"Cuisine",en:"Kitchen",x:5.2,z:0,w:4,d:4.2,col:"#DDE5E9",furn:["counter","island","stool"]},{key:"salle",fr:"Salle \xE0 manger",en:"Dining",x:5.2,z:4.4,w:4,d:3.2,col:"#E8E2D6",furn:["table","art"]},{key:"chP",fr:"Chambre principale",en:"Primary bedroom",x:0,z:4.4,w:4.2,d:3.6,col:"#DCE2EE",furn:["bed","night","plant"]},{key:"ch2",fr:"Chambre 2",en:"Bedroom 2",x:0,z:8.2,w:3,d:3,col:"#E6E1EE",furn:["bedS","night"]},{key:"ch3",fr:"Chambre 3",en:"Bedroom 3",x:3.2,z:8.2,w:3,d:3,col:"#E1E8EE",furn:["bedS"]},{key:"garage",fr:"Garage",en:"Garage",x:9.4,z:0,w:3.2,d:5.8,col:"#DADEE4",furn:["car"]},{key:"cour",fr:"Cour",en:"Yard",x:6.4,z:8,w:6,d:3.4,col:"#CFE2D0",furn:["pool","shed"],open:!0}],dv:[{s:"D5",qFr:"Infiltrations d\u2019eau",qEn:"Water infiltration",aFr:"Aucune infiltration d\xE9clar\xE9e par le vendeur.",aEn:"No infiltration declared by the seller."},{s:"D7",qFr:"Toiture",qEn:"Roof",aFr:"Bardeaux d\u2019asphalte remplac\xE9s en 2017.",aEn:"Asphalt shingles replaced in 2017."},{s:"D10",qFr:"R\xE9servoir d\u2019huile",qEn:"Oil tank",aFr:"Ancien r\xE9servoir retir\xE9 en 2009 \u2014 attestation de retrait disponible.",aEn:"Former tank removed in 2009 \u2014 removal attestation on file."},{s:"D12",qFr:"Piscine",qEn:"Pool",aFr:"Hors terre, install\xE9e en 2020, conforme au r\xE8glement municipal.",aEn:"Above-ground, installed 2020, compliant with municipal bylaw."},{s:"D16",qFr:"Certificat de localisation",qEn:"Certificate of location",aFr:"Dat\xE9 de 2022 \u2014 conforme, aucune servitude particuli\xE8re.",aEn:"Dated 2022 \u2014 compliant, no unusual servitude."}],fund:null,hood:{walk:71,transit:58,bike:74,metroFr:"REM Panama \u2014 2,1 km",metroEn:"Panama REM station \u2014 2.1 km",bixi:0,demo:{incomeMed:81200,incomeBands:[["<40k",14],["40\u201380k",34],["80\u2013120k",31],[">120k",21]],ageBands:[["0\u201314",18],["15\u201329",18],["30\u201344",24],["45\u201364",26],["65+",14]],fam:52,rent:31,langs:[["Fran\xE7ais",88],["Anglais",6],["Autres",6]]},crime:[100,97,95,90,88,84],crimeDelta:-16,incidents:[["Introduction par effraction","Break-in",-22],["M\xE9fait","Mischief",-11],["Vol de v\xE9hicule","Vehicle theft",-3]],schoolsFr:"\xC9cole Saint-Jude (400 m) \xB7 CPE : attente \u2248 9 mois",schoolsEn:"Saint-Jude school (400 m) \xB7 CPE wait \u2248 9 months"},forecast:{organic:.026,drivers:[{kind:"transit",fr:"REM \u2014 station Panama en service, prolongement projet\xE9",en:"REM \u2014 Panama station in service, extension planned",dist:"2.1 km",year:2027,lo:3,hi:7,srcFr:"ARTM / actualit\xE9",srcEn:"ARTM / news"},{kind:"commercial",fr:"Red\xE9veloppement du secteur Roland-Therrien",en:"Roland-Therrien sector redevelopment",dist:"1.4 km",year:2029,lo:2,hi:4,srcFr:"Ville de Longueuil \u2014 PPU",srcEn:"City of Longueuil \u2014 special plan"},{kind:"risk",fr:"Hausse des primes d\u2019assurance (secteur riverain \xE9largi)",en:"Insurance premium rise (expanded riverine zone)",dist:"\u2014",year:2026,lo:-2,hi:0,srcFr:"Actualit\xE9 \u2014 r\xE9vision cartographie",srcEn:"News \u2014 mapping revision"}]},risks:[{kind:"flood",level:"moderate",fr:"Proximit\xE9 du fleuve \u2014 v\xE9rifier la cote de crue 20-100 ans \xE0 l\u2019adresse exacte.",en:"River proximity \u2014 verify 20\u2013100 yr flood line at the exact address."},{kind:"radon",level:"moderate",fr:"Potentiel radon mod\xE9r\xE9 \u2014 test recommand\xE9 (sous-sol habit\xE9).",en:"Moderate radon potential \u2014 testing recommended (finished basement)."},{kind:"pyrite",level:"low",fr:"Risque pyrite faible pour le secteur.",en:"Low pyrite risk for the sector."},{kind:"oil",level:"low",fr:"Ancien r\xE9servoir retir\xE9 en 2009 (attestation) \u2014 sol non test\xE9.",en:"Former tank removed 2009 (attestation) \u2014 soil not tested."},{kind:"heat",level:"low",fr:"Faible \xEElot de chaleur \u2014 bonne canop\xE9e r\xE9sidentielle.",en:"Low heat island \u2014 good residential canopy."},{kind:"noise",level:"low",fr:"Bruit faible \u2014 quartier r\xE9sidentiel \xE9tabli.",en:"Low noise \u2014 established residential area."}],amenities:[{type:"resto",items:[["Lou Nissart",400],["Le Fin Gourmet",650]]},{type:"cafe",items:[["Caf\xE9 Bloom",350],["Presse Caf\xE9",500]]},{type:"cinema",items:[["Cineplex Longueuil",2600]]},{type:"grocery",items:[["IGA",450],["Metro",900]]},{type:"park",items:[["Parc Saint-Mark",300],["Parc de la Cit\xE9",2100]]},{type:"gym",items:[["\xC9conofitness",800]]},{type:"pharma",items:[["Pharmaprix",550]]}],commute:{dest:"Centre-ville de Montr\xE9al",hours:[6,7,8,9,12,15,17,18,20],weekday:{car:[22,31,44,38,26,27,46,41,23],transit:[38,40,43,42,39,39,45,43,40],bike:[46,46,47,46,46,46,47,47,46]},weekend:{car:[20,21,24,27,30,31,28,25,21],transit:[42,42,43,43,44,44,43,43,44],bike:[46,46,46,46,47,47,46,46,46]}},soldComps:[["1211, rue Sainte-H\xE9l\xE8ne",592e3,"2025-02",1540],["905, rue Grant",638e3,"2024-12",1720],["1450, rue Bourget",575e3,"2024-10",1490]]}],Zi=typeof window<"u"&&window.__VITRINE_MERGE__?window.__VITRINE_MERGE__(vM):vM,sn={name:"Julie Fortin",title_fr:"Courti\xE8re immobili\xE8re r\xE9sidentielle",title_en:"Residential real estate broker",agency:"RE/MAX du Cartier"},Mo={id:"p_live",name:"Marie-Claude Tremblay"};gh={},Ht={async get(t,e){if(t in gh)return gh[t];try{let n=await window.storage.get(t);return n?JSON.parse(n.value):e}catch{return e}},async set(t,e){gh[t]=e;try{await window.storage.set(t,JSON.stringify(e))}catch{}},async del(t){delete gh[t];try{await window.storage.delete(t)}catch{}}},Gt={events:"vitrine2_events",reactions:"vitrine2_reactions",chats:"vitrine2_chats",dms:"vitrine2_dms",prefs:"vitrine2_prefs",notes:"vitrine2_notes"};zu=({children:t})=>(0,h.jsx)("div",{style:{fontFamily:he.mono,fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:v.sub},children:t}),Yt=({icon:t,title:e,note:n})=>(0,h.jsxs)("div",{className:"flex items-baseline gap-2 mb-3",children:[(0,h.jsx)(t,{size:17,style:{color:v.metro,transform:"translateY(2px)"}}),(0,h.jsx)("h2",{style:{fontFamily:he.disp,fontWeight:700,fontSize:20,color:v.ink,margin:0},children:e}),n&&(0,h.jsx)("span",{style:{fontFamily:he.mono,fontSize:10.5,color:v.sub},children:n})]}),wn=({children:t,tone:e="neutral"})=>{let n={neutral:{bg:v.snow,fg:v.sub,bd:v.line},hot:{bg:"#FBEAD9",fg:"#8A4B12",bd:"#F0CFA6"},blue:{bg:v.metroSoft,fg:v.metro,bd:"#C9D9F2"},green:{bg:v.spruceSoft,fg:v.spruce,bd:"#C4E0D2"},amber:{bg:v.ochreSoft,fg:"#8A5A12",bd:"#EBD3A0"},red:{bg:v.dangerSoft,fg:v.danger,bd:"#E7C3B4"}}[e];return(0,h.jsx)("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full",style:{background:n.bg,color:n.fg,border:`1px solid ${n.bd}`,fontSize:11.5,fontWeight:600},children:t})},nR=({data:t,color:e,w:n=120,h:i=34})=>{let a=Math.min(...t),r=Math.max(...t),s=t.map((o,l)=>`${l/(t.length-1)*(n-4)+2},${i-3-(o-a)/(r-a||1)*(i-8)}`).join(" ");return(0,h.jsx)("svg",{width:n,height:i,"aria-hidden":"true",children:(0,h.jsx)("polyline",{points:s,fill:"none",stroke:e,strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})};g0=({segments:t})=>(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"flex w-full rounded-full overflow-hidden",style:{height:12,border:`1px solid ${v.line}`},children:t.map((e,n)=>(0,h.jsx)("div",{style:{width:`${e.pct}%`,background:e.color},title:`${e.label} ${e.pct}%`},n))}),(0,h.jsx)("div",{className:"flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5",children:t.map((e,n)=>(0,h.jsxs)("span",{className:"inline-flex items-center gap-1",style:{fontSize:11,color:v.sub},children:[(0,h.jsx)("span",{style:{width:8,height:8,borderRadius:2,background:e.color}})," ",e.label," ",(0,h.jsxs)("b",{style:{fontFamily:he.mono,color:v.ink},children:[e.pct,"%"]})]},n))})]}),wo=({label:t,val:e,set:n,min:i,max:a,step:r,suffix:s,field:o,mark:l})=>(0,h.jsxs)("label",{className:"block",children:[(0,h.jsxs)("div",{className:"flex justify-between",style:{fontSize:12.5,color:v.sub,marginBottom:2},children:[(0,h.jsx)("span",{children:t}),(0,h.jsxs)("span",{style:{fontFamily:he.mono,color:v.ink,fontWeight:600},children:[e,s]})]}),(0,h.jsx)("input",{type:"range",min:i,max:a,step:r,value:e,className:"w-full",onChange:u=>{n(Number(u.target.value)),l&&l(o)}})]}),Sh=({onClose:t,children:e,label:n})=>(0,h.jsx)("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center",style:{background:"rgba(17,27,46,.55)"},role:"dialog","aria-label":n,children:(0,h.jsxs)("div",{className:"w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-5 fade-up",style:{background:v.paper,maxHeight:"88vh",overflowY:"auto"},children:[(0,h.jsx)("div",{className:"flex justify-end",children:(0,h.jsx)("button",{onClick:t,"aria-label":"Fermer",className:"p-1 rounded-md",style:{color:v.sub},children:(0,h.jsx)(hr,{size:18})})}),e]})}),yh=({text:t})=>(0,h.jsxs)("div",{className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:"rgba(17,27,46,.72)",color:"#fff",fontSize:10.5,fontWeight:600,backdropFilter:"blur(4px)"},children:[(0,h.jsx)(Li,{size:11,style:{color:v.ochre}})," ",t]}),x0={};fR={transit:Yr,zoning:xa,commercial:_o,risk:dr};pR={flood:{icon:fr,fr:"Inondation",en:"Flood"},radon:{icon:Ou,fr:"Radon",en:"Radon"},pyrite:{icon:bu,fr:"Pyrite",en:"Pyrite"},oil:{icon:pu,fr:"R\xE9servoir d\u2019huile",en:"Oil tank"},heat:{icon:Pu,fr:"\xCElot de chaleur",en:"Heat island"},noise:{icon:Uu,fr:"Bruit",en:"Noise"}},mR={none:{tone:"green",fr:"Aucun",en:"None"},low:{tone:"green",fr:"Faible",en:"Low"},moderate:{tone:"amber",fr:"Mod\xE9r\xE9",en:"Moderate"},elevated:{tone:"red",fr:"\xC9lev\xE9",en:"Elevated"}};xR={resto:{icon:Xi,fr:"Restaurants",en:"Restaurants"},cafe:{icon:fu,fr:"Caf\xE9s",en:"Caf\xE9s"},cinema:{icon:gu,fr:"Cin\xE9mas",en:"Cinemas"},grocery:{icon:_o,fr:"\xC9picerie",en:"Groceries"},park:{icon:Zr,fr:"Parcs",en:"Parks"},gym:{icon:mu,fr:"Gyms",en:"Gyms"},pharma:{icon:hu,fr:"Pharmacie",en:"Pharmacy"}},yR=t=>Math.max(1,Math.round(t/80));TR={...sn,initials:"JF",phone:"514 555-0142",email:"julie.fortin@remaxducartier.ca",years:12,deals:180,rating:4.9,reviewCount:87,areas_fr:"Rosemont \xB7 Ahuntsic \xB7 Villeray",areas_en:"Rosemont \xB7 Ahuntsic \xB7 Villeray",story:{fr:"Julie accompagne acheteurs et vendeurs sur l\u2019\xEEle de Montr\xE9al depuis plus de dix ans. Ancienne conseill\xE8re en am\xE9nagement, elle lit un quartier autant qu\u2019une fiche : \xE9coles, transport, projets \xE0 venir. Sa promesse est simple \u2014 des r\xE9ponses franches, des chiffres v\xE9rifiables, et jamais de pression. Chaque Vitrine que vous recevez est pr\xE9par\xE9e \xE0 la main, \xE0 partir de ce qu\u2019elle sait vraiment de la propri\xE9t\xE9 et du secteur.",en:"Julie has guided buyers and sellers across the island of Montr\xE9al for over a decade. A former urban-planning advisor, she reads a neighbourhood as closely as a listing sheet: schools, transit, what\u2019s being built next. Her promise is simple \u2014 straight answers, numbers you can check, and never any pressure. Every Vitrine you receive is prepared by hand, from what she genuinely knows about the property and the area."},reviews:[{name:"Marc & Sophie L.",area_fr:"Acheteurs \u2014 Rosemont",area_en:"Buyers \u2014 Rosemont",rating:5,fr:"Julie a rep\xE9r\xE9 un probl\xE8me de drainage que deux autres courtiers avaient manqu\xE9. Honn\xEAte jusqu\u2019au bout.",en:"Julie caught a drainage issue two other agents had missed. Honest to the end."},{name:"Am\xE9lie D.",area_fr:"Vendeuse \u2014 Villeray",area_en:"Seller \u2014 Villeray",rating:5,fr:"Vendu en neuf jours, au-dessus du prix demand\xE9, sans jamais me sentir bouscul\xE9e. Ses donn\xE9es de quartier ont fait la diff\xE9rence.",en:"Sold in nine days, over asking, and never once felt rushed. Her neighbourhood data made the difference."},{name:"Karim B.",area_fr:"Acheteur \u2014 Ahuntsic",area_en:"Buyer \u2014 Ahuntsic",rating:4,fr:"Patiente avec un premier acheteur nerveux. Elle a expliqu\xE9 chaque chiffre, taxe de bienvenue incluse.",en:"Patient with a nervous first-time buyer. She walked me through every number, welcome tax included."}]};kR=PR,mr={classique:{fr:"Classique",en:"Classic",wall:"#EEF1F6",dot:"#8FA0BC"},tranquille:{fr:"Tranquille",en:"Tranquil",wall:"#F1EFE6",dot:"#B9C6B4",fabric:"#B9C6B4",wood:"#B8A98F",metal:"#8E9AA0",accent:"#EAE3D2",fixture:"#EDF2EE"},moderne:{fr:"Moderne",en:"Modern",wall:"#E9EBEF",dot:"#3C4048",fabric:"#5C6470",wood:"#3C4048",metal:"#20242B",accent:"#D9DDE3",fixture:"#F2F4F6"},scandinave:{fr:"Scandinave",en:"Scandi",wall:"#F7F6F2",dot:"#E4D5BC",fabric:"#D8E0E8",wood:"#E4D5BC",metal:"#B9C2CC",accent:"#FFFFFF",fixture:"#F6F8F9"}},Yi={sofa:{fr:"Sofa 3 places",en:"3-seat sofa",price:"899 \u2013 2 399 $",stores:["Structube","EQ3","Article"]},coffee:{fr:"Table basse",en:"Coffee table",price:"199 \u2013 699 $",stores:["Structube","IKEA"]},rug:{fr:"Tapis",en:"Area rug",price:"149 \u2013 899 $",stores:["EQ3","HomeSense"]},counter:{fr:"Cuisine sur mesure",en:"Custom kitchen",price:"Sur devis",stores:["\xC9b\xE9niste local","Cuisines Action"]},island:{fr:"\xCElot de cuisine",en:"Kitchen island",price:"Sur devis",stores:["\xC9b\xE9niste local","IKEA"]},bed:{fr:"Lit grand format + t\xEAte de lit",en:"Queen bed + headboard",price:"649 \u2013 1 899 $",stores:["Structube","Mobilia","IKEA"]},bedS:{fr:"Lit simple / double",en:"Twin / double bed",price:"449 \u2013 1 199 $",stores:["Structube","IKEA"]},night:{fr:"Table de chevet",en:"Nightstand",price:"129 \u2013 399 $",stores:["IKEA","Structube"]},tub:{fr:"Bain & robinetterie",en:"Tub & fixtures",price:"Sur devis",stores:["Bain D\xE9p\xF4t","Plombier partenaire"]},vanity:{fr:"Meuble-lavabo",en:"Vanity",price:"399 \u2013 1 299 $",stores:["Rona","Bain D\xE9p\xF4t"]},table:{fr:"Table \xE0 manger",en:"Dining table",price:"499 \u2013 1 599 $",stores:["Article","Maison Corbeil"]},chair:{fr:"Chaises d\u2019ext\xE9rieur",en:"Outdoor chairs",price:"89 \u2013 349 $ / ch.",stores:["Canadian Tire","IKEA"]},chair2:{fr:"Chaises d\u2019ext\xE9rieur",en:"Outdoor chairs",price:"89 \u2013 349 $ / ch.",stores:["Canadian Tire","IKEA"]},pool:{fr:"Piscine hors terre",en:"Above-ground pool",price:"3 500 \u2013 9 000 $",stores:["Tr\xE9vi","Club Piscine"]},shed:{fr:"Cabanon",en:"Shed",price:"1 200 \u2013 4 500 $",stores:["Rona","Home Depot"]},tv:{fr:"T\xE9l\xE9viseur + meuble",en:"TV + media unit",price:"649 \u2013 1 999 $",stores:["Best Buy","Structube"]},plant:{fr:"Plante d\u2019int\xE9rieur + pot",en:"Indoor plant + pot",price:"39 \u2013 149 $",stores:["Folia Design","IKEA"]},art:{fr:"\u0152uvre encadr\xE9e",en:"Framed art",price:"89 \u2013 450 $",stores:["Artiste local","Simons Maison"]},stool:{fr:"Tabourets d\u2019\xEElot (\xD72)",en:"Island stools (\xD72)",price:"158 \u2013 498 $",stores:["Structube","EQ3"]},mirror:{fr:"Miroir de salle de bain",en:"Bathroom mirror",price:"99 \u2013 349 $",stores:["Rona","Bain D\xE9p\xF4t"]}},DR=`Salon 4,9 x 3,7
Cuisine 3,4 x 3,0
Chambre principale 3,6 x 3,3
Chambre 2,9 x 2,6
Salle de bain 2,4 x 1,5
V\xE9randa 3,0 x 2,4`;NR=[[/salon|s[ée]jour|living/i,{col:"#C9D8EE",furn:["sofa","coffee","rug","tv","plant","art"]}],[/cuisine|kitchen/i,{col:"#EDE6D6",furn:["counter","island","stool"]}],[/manger|dinette|dining/i,{col:"#E8E2D6",furn:["table","art"]}],[/principale|ma[îi]tres|primary|master/i,{col:"#DCE2EE",furn:["bed","night","plant"]}],[/chambre|bedroom|\bch\b/i,{col:"#E6E1EE",furn:["bedS","night"]}],[/bain|sdb|salle d.eau|bath/i,{col:"#DCEAE4",furn:["tub","vanity","mirror"]}],[/garage/i,{col:"#DADEE4",furn:["car"]}],[/cour|terrain|balcon|patio|v[ée]randa|yard|deck/i,{col:"#CFE2D6",furn:["chair","chair2"],open:!0}]];OR=[{id:"camille",name:"Camille B\xE9rub\xE9",cityFr:"Mile End, Montr\xE9al",cityEn:"Mile End, Montreal",style:"tranquille",tagsFr:["Ambiance tranquille","Mat\xE9riaux naturels","Petits espaces"],tagsEn:["Tranquil mood","Natural materials","Small spaces"],rate:"95 $/h"},{id:"marco",name:"Marc-Olivier Tessier",cityFr:"Griffintown, Montr\xE9al",cityEn:"Griffintown, Montreal",style:"moderne",tagsFr:["Moderne \xE9pur\xE9","R\xE9nos condo","\xC9clairage"],tagsEn:["Clean modern","Condo renos","Lighting"],rate:"120 $/h"},{id:"noor",name:"Noor Haddad",cityFr:"Vieux-Longueuil",cityEn:"Old Longueuil",style:"scandinave",tagsFr:["Scandinave chaleureux","Familles","Budget malin"],tagsEn:["Warm Scandi","Families","Smart budgets"],rate:"85 $/h"}];wM=["Le Plateau-Mont-Royal","Vieux-Longueuil","Mont-Tremblant","Sainte-Agathe-des-Monts","Sainte-Ad\xE8le","Sainte-Marguerite\u2013Lac-Masson","Saint-Sauveur","Val-David"],CM=[["detache","D\xE9tach\xE9","Detached"],["condo","Condo","Condo"],["plex","Plex","Plex"],["mobile","Maison mobile","Mobile home"]],bM={pmin:25e4,pmax:65e4,beds:2,baths:1,lot:0,types:["detache","condo"],must:{piscine:!1,garage:!1,foyer:!1},areas:["Le Plateau-Mont-Royal","Vieux-Longueuil"]};HR={28374619:{badge:"new",dateSent:"2026-07-05",rooms:7,lot:null,fire:!1,xy:[63,70]},19052833:{badge:null,dateSent:"2026-07-03",rooms:9,lot:"5 200 pi\xB2",fire:!0,xy:[72,78]}},GR=[{id:"14106527",addr:"3, rue des Geais-Bleus",area:"Mont-Tremblant (Saint-Jovite)",typeFr:"Maison mobile \u2014 1990",typeEn:"Mobile home \u2014 1990",price:124900,beds:2,bathsStr:"1+0",heatFr:"\xC9lectricit\xE9",heatEn:"Electricity",rooms:6,lot:null,garage:!1,fire:!1,pool:!0,badge:"new",dateSent:"2026-07-06",g:["#5E7F5A","#8FAE7E"],xy:[24,18]},{id:"25995203",addr:"122-126, ch. Gu\xE9nette",area:"Sainte-Marguerite-du-Lac-Masson",typeFr:"\xC0 \xE9tages \u2014 1945",typeEn:"Two or more storey \u2014 1945",price:399e3,beds:4,bathsStr:"2+1",heatFr:"\xC9lectricit\xE9",heatEn:"Electricity",rooms:13,lot:"27 630 pi\xB2 / 2 567 m\xB2",garage:!1,fire:!0,pool:!0,badge:"price",dateSent:"2026-07-04",g:["#3E5E52","#7FA08F"],xy:[45,30]}],LM={25995203:"https://d8j0ntlcm91z4.cloudfront.net/user_3GGcnlb30w4rwInWPmkZocDwJ0x/hf_20260709_132918_005475da-f23e-4a96-b425-8ef81c306833.mp4"};$i={new:{fr:"Nouvelle inscription",en:"New Listing",bg:"#2F7D5C",fg:"#fff"},price:{fr:"Nouveau prix",en:"New Price",bg:"#E8A33D",fg:"#3A2A08"}}});var GU=Ai(Ca()),kM=Ai(o_()),NM=Ai(gl()),va=window.fetch.bind(window),_a="",Dn=(()=>{let t=window.location.pathname.match(/\/portail\/([\w-]+)/),e=t&&t[1]||new URLSearchParams(window.location.search).get("t")||"";return e==="demo"?"":e})(),DM=Date.now(),XR="vitrine2_events",RM=new Set,v0={visit:"listing.viewed",tour_view:"tour3d.viewed",tour_room:"tour3d.viewed",reaction_interested:"listing.favorited",booking_request:"visit.requested",broker_message:"message.sent",chat_escalation:"message.sent",chat_message:"message.sent",calc_use:"calculator.used",calc_adjust:"calculator.used",commute_calc:"calculator.used",section_view:"section.viewed",forecast_view:"section.viewed",risk_view:"section.viewed",amenity_view:"section.viewed",criteria_update:"criteria.updated",note_saved:"note.added"},Vu={},PM=new Set;function $R(t){return{type:v0[t.type],event_id:t.id,listing_id:t.lid||"",vitrine_type:t.type,...Vu[t.lid]?{address:Vu[t.lid]}:{},...t.meta||{}}}async function YR(t){if(!Dn||!Array.isArray(t))return;let e=t.filter(n=>n&&n.ts>DM&&!RM.has(n.id)&&v0[n.type]).filter(n=>{if(v0[n.type]!=="section.viewed")return!0;let i=`${n.lid}-${n.meta&&n.meta.s||n.type}`;return PM.has(i)?!1:(PM.add(i),!0)});if(e.length){e.forEach(n=>RM.add(n.id)),e.filter(n=>n.type==="visit").forEach(n=>FM.switchTo(n.lid));try{await va(`${_a}/api/webhooks/vitrine`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_token:Dn,events:e.map($R)})})}catch(n){console.warn("radar-bridge: webhook",n)}}}var FM=(()=>{let t=null,e=0,n=0,i=0,a=()=>Date.now(),r=()=>document.visibilityState==="visible"&&t,s=()=>{e&&(n+=a()-e,e=0)},o=()=>{r()&&!e&&(e=a())};function l(u){s();let f=Math.round(n/1e3);if(t&&f>=30){let p=JSON.stringify({client_token:Dn,events:[{type:"listing.dwell",event_id:`dwell-${t}-${DM}`,listing_id:t,seconds:f,scroll_depth:Math.round(i*100)/100,...Vu[t]?{address:Vu[t]}:{}}]});u&&navigator.sendBeacon?navigator.sendBeacon(`${_a}/api/webhooks/vitrine`,new Blob([p],{type:"application/json"})):va(`${_a}/api/webhooks/vitrine`,{method:"POST",headers:{"Content-Type":"application/json"},body:p}).catch(()=>{})}n=0,i=0}return{switchTo(u){!Dn||u===t||(l(!1),t=u,e=a(),o())},init(){Dn&&(document.addEventListener("visibilitychange",()=>document.visibilityState==="visible"?o():s()),window.addEventListener("scroll",()=>{let u=document.documentElement,f=u.scrollHeight-u.clientHeight;f>0&&(i=Math.max(i,(u.scrollTop||window.scrollY)/f))},{passive:!0}),window.addEventListener("pagehide",()=>l(!0)))}}})();Dn&&(window.storage={async get(t){let e=await va(`${_a}/api/vitrine/storage/${Dn}/${encodeURIComponent(t)}`);if(!e.ok)throw new Error("kv miss");return e.json()},async set(t,e){if(t===XR)try{YR(JSON.parse(e))}catch{}let n=await va(`${_a}/api/vitrine/storage/${Dn}/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:e})});if(!n.ok)throw new Error("kv set failed");return n.json()},async delete(t){let e=await va(`${_a}/api/vitrine/storage/${Dn}/${encodeURIComponent(t)}`,{method:"DELETE"});if(!e.ok)throw new Error("kv del failed");return e.json()}});window.fetch=(t,e={})=>{let n=typeof t=="string"?t:t.url;if(n&&n.startsWith("https://api.anthropic.com/v1/messages")){let i={};try{i=JSON.parse(e.body||"{}")}catch{}return va(`${_a}/api/vitrine/ai`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:Dn,payload:i})})}return va(t,e)};function ZR(t){return e=>t.length?t.map((n,i)=>{let a=e[i%e.length],r=n.price&&a.price?n.price/a.price:1;return{...a,id:n.centris_no,addr:n.address||`Inscription Centris ${n.centris_no}`,area:n.area||a.area,price:n.price||a.price,evalMun:n.price?Math.round(n.price*.86):a.evalMun,beds:n.beds||a.beds,baths:n.baths||a.baths,typeFr:n.prop_type||a.typeFr,typeEn:n.prop_type||a.typeEn,taxesMun:Math.round((a.taxesMun||3e3)*r),centrisUrl:n.url||"",isLive:!0}}):e}(async()=>{if(Dn){try{let i=await va(`${_a}/api/vitrine/listings/${Dn}`);if(i.ok){let a=await i.json();Array.isArray(a)&&a.forEach(r=>{r.address&&(Vu[r.centris_no]=r.address)}),window.__VITRINE_MERGE__=ZR(Array.isArray(a)?a:[])}}catch(i){console.warn("radar-bridge: listings",i)}FM.init();let e=new URLSearchParams(window.location.search).get("listing");e&&(window.__VITRINE_OPEN__=e);let n=new Date().toISOString().slice(0,10);va(`${_a}/api/webhooks/vitrine`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_token:Dn,events:[{type:"portal.session_started",event_id:`sess-${Dn}-${n}`}]})}).catch(()=>{})}let{default:t}=await Promise.resolve().then(()=>(TM(),EM));(0,kM.createRoot)(document.getElementById("root")).render((0,NM.jsx)(t,{}))})();})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/context.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/award.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/bath.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/bed-double.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/bell.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/bike.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/box.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/brush.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/building-2.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/calculator.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/calendar-check.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/car.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/clock.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/coffee.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/cross.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/dollar-sign.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/droplets.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/dumbbell.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/eye.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/file-text.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/film.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/footprints.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/git-compare.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/globe.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/heart.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/house.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/landmark.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/languages.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/list.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/mail.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/map-pin.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/map.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/message-circle.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/message-square.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/moon.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/mountain.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/navigation.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/palette.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/pause.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/phone.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/play.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/route.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/send.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/shield-check.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/shopping-bag.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/shopping-cart.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sofa.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sparkles.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/star.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sun.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/thermometer.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/thumbs-down.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/train-front.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trees.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trending-down.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trending-up.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/triangle-alert.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/user.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/users.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/utensils-crossed.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/volume-2.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/wand-sparkles.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/waves-horizontal.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/wind.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.24.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
