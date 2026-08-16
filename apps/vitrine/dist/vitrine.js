(()=>{var ZM=Object.create;var Eh=Object.defineProperty;var jM=Object.getOwnPropertyDescriptor;var KM=Object.getOwnPropertyNames;var JM=Object.getPrototypeOf,QM=Object.prototype.hasOwnProperty;var ve=(t,e)=>()=>(t&&(e=t(t=0)),e);var Qi=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ew=(t,e)=>{for(var n in e)Eh(t,n,{get:e[n],enumerable:!0})},tw=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of KM(e))!QM.call(t,a)&&a!==n&&Eh(t,a,{get:()=>e[a],enumerable:!(i=jM(e,a))||i.enumerable});return t};var Pi=(t,e,n)=>(n=t!=null?ZM(JM(t)):{},tw(e||!t||!t.__esModule?Eh(n,"default",{value:t,enumerable:!0}):n,t));var q0=Qi(je=>{"use strict";var Ao=Symbol.for("react.element"),nw=Symbol.for("react.portal"),iw=Symbol.for("react.fragment"),aw=Symbol.for("react.strict_mode"),rw=Symbol.for("react.profiler"),sw=Symbol.for("react.provider"),ow=Symbol.for("react.context"),lw=Symbol.for("react.forward_ref"),uw=Symbol.for("react.suspense"),cw=Symbol.for("react.memo"),dw=Symbol.for("react.lazy"),D0=Symbol.iterator;function fw(t){return t===null||typeof t!="object"?null:(t=D0&&t[D0]||t["@@iterator"],typeof t=="function"?t:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,O0={};function as(t,e,n){this.props=t,this.context=e,this.refs=O0,this.updater=n||B0}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z0(){}z0.prototype=as.prototype;function Rh(t,e,n){this.props=t,this.context=e,this.refs=O0,this.updater=n||B0}var Ph=Rh.prototype=new z0;Ph.constructor=Rh;U0(Ph,as.prototype);Ph.isPureReactComponent=!0;var F0=Array.isArray,V0=Object.prototype.hasOwnProperty,kh={current:null},H0={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var i,a={},r=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(r=""+e.key),e)V0.call(e,i)&&!H0.hasOwnProperty(i)&&(a[i]=e[i]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];a.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)a[i]===void 0&&(a[i]=o[i]);return{$$typeof:Ao,type:t,key:r,ref:s,props:a,_owner:kh.current}}function hw(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function pw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var N0=/\/+/g;function Th(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pw(""+t.key):e.toString(36)}function Zu(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ao:case nw:s=!0}}if(s)return s=t,a=a(s),t=i===""?"."+Th(s,0):i,F0(a)?(n="",t!=null&&(n=t.replace(N0,"$&/")+"/"),Zu(a,e,n,"",function(u){return u})):a!=null&&(Dh(a)&&(a=hw(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(N0,"$&/")+"/")+t)),e.push(a)),1;if(s=0,i=i===""?".":i+":",F0(t))for(var o=0;o<t.length;o++){r=t[o];var l=i+Th(r,o);s+=Zu(r,e,n,l,a)}else if(l=fw(t),typeof l=="function")for(t=l.call(t),o=0;!(r=t.next()).done;)r=r.value,l=i+Th(r,o++),s+=Zu(r,e,n,l,a);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Yu(t,e,n){if(t==null)return t;var i=[],a=0;return Zu(t,i,"","",function(r){return e.call(n,r,a++)}),i}function mw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},ju={transition:null},gw={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:ju,ReactCurrentOwner:kh};function W0(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Yu,forEach:function(t,e,n){Yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yu(t,function(){e++}),e},toArray:function(t){return Yu(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=as;je.Fragment=iw;je.Profiler=rw;je.PureComponent=Rh;je.StrictMode=aw;je.Suspense=uw;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;je.act=W0;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=U0({},t.props),a=t.key,r=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,s=kh.current),e.key!==void 0&&(a=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)V0.call(e,l)&&!H0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ao,type:t.type,key:a,ref:r,props:i,_owner:s}};je.createContext=function(t){return t={$$typeof:ow,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sw,_context:t},t.Consumer=t};je.createElement=G0;je.createFactory=function(t){var e=G0.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:lw,render:t}};je.isValidElement=Dh;je.lazy=function(t){return{$$typeof:dw,_payload:{_status:-1,_result:t},_init:mw}};je.memo=function(t,e){return{$$typeof:cw,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=ju.transition;ju.transition={};try{t()}finally{ju.transition=e}};je.unstable_act=W0;je.useCallback=function(t,e){return vn.current.useCallback(t,e)};je.useContext=function(t){return vn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};je.useEffect=function(t,e){return vn.current.useEffect(t,e)};je.useId=function(){return vn.current.useId()};je.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return vn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};je.useRef=function(t){return vn.current.useRef(t)};je.useState=function(t){return vn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return vn.current.useTransition()};je.version="18.3.1"});var Ia=Qi((hP,X0)=>{"use strict";X0.exports=q0()});var nx=Qi(xt=>{"use strict";function Uh(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,a=t[i];if(0<Ku(a,e))t[i]=e,t[n]=a,n=i;else break e}}function pi(t){return t.length===0?null:t[0]}function Qu(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,a=t.length,r=a>>>1;i<r;){var s=2*(i+1)-1,o=t[s],l=s+1,u=t[l];if(0>Ku(o,n))l<a&&0>Ku(u,o)?(t[i]=u,t[l]=n,i=l):(t[i]=o,t[s]=n,i=s);else if(l<a&&0>Ku(u,n))t[i]=u,t[l]=n,i=l;else break e}}return e}function Ku(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?($0=performance,xt.unstable_now=function(){return $0.now()}):(Fh=Date,Y0=Fh.now(),xt.unstable_now=function(){return Fh.now()-Y0});var $0,Fh,Y0,ki=[],Aa=[],xw=1,ti=null,cn=3,ec=!1,_r=!1,To=!1,K0=typeof setTimeout=="function"?setTimeout:null,J0=typeof clearTimeout=="function"?clearTimeout:null,Z0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Oh(t){for(var e=pi(Aa);e!==null;){if(e.callback===null)Qu(Aa);else if(e.startTime<=t)Qu(Aa),e.sortIndex=e.expirationTime,Uh(ki,e);else break;e=pi(Aa)}}function zh(t){if(To=!1,Oh(t),!_r)if(pi(ki)!==null)_r=!0,Hh(Vh);else{var e=pi(Aa);e!==null&&Gh(zh,e.startTime-t)}}function Vh(t,e){_r=!1,To&&(To=!1,J0(Ro),Ro=-1),ec=!0;var n=cn;try{for(Oh(e),ti=pi(ki);ti!==null&&(!(ti.expirationTime>e)||t&&!tx());){var i=ti.callback;if(typeof i=="function"){ti.callback=null,cn=ti.priorityLevel;var a=i(ti.expirationTime<=e);e=xt.unstable_now(),typeof a=="function"?ti.callback=a:ti===pi(ki)&&Qu(ki),Oh(e)}else Qu(ki);ti=pi(ki)}if(ti!==null)var r=!0;else{var s=pi(Aa);s!==null&&Gh(zh,s.startTime-e),r=!1}return r}finally{ti=null,cn=n,ec=!1}}var tc=!1,Ju=null,Ro=-1,Q0=5,ex=-1;function tx(){return!(xt.unstable_now()-ex<Q0)}function Nh(){if(Ju!==null){var t=xt.unstable_now();ex=t;var e=!0;try{e=Ju(!0,t)}finally{e?Eo():(tc=!1,Ju=null)}}else tc=!1}var Eo;typeof Z0=="function"?Eo=function(){Z0(Nh)}:typeof MessageChannel<"u"?(Bh=new MessageChannel,j0=Bh.port2,Bh.port1.onmessage=Nh,Eo=function(){j0.postMessage(null)}):Eo=function(){K0(Nh,0)};var Bh,j0;function Hh(t){Ju=t,tc||(tc=!0,Eo())}function Gh(t,e){Ro=K0(function(){t(xt.unstable_now())},e)}xt.unstable_IdlePriority=5;xt.unstable_ImmediatePriority=1;xt.unstable_LowPriority=4;xt.unstable_NormalPriority=3;xt.unstable_Profiling=null;xt.unstable_UserBlockingPriority=2;xt.unstable_cancelCallback=function(t){t.callback=null};xt.unstable_continueExecution=function(){_r||ec||(_r=!0,Hh(Vh))};xt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q0=0<t?Math.floor(1e3/t):5};xt.unstable_getCurrentPriorityLevel=function(){return cn};xt.unstable_getFirstCallbackNode=function(){return pi(ki)};xt.unstable_next=function(t){switch(cn){case 1:case 2:case 3:var e=3;break;default:e=cn}var n=cn;cn=e;try{return t()}finally{cn=n}};xt.unstable_pauseExecution=function(){};xt.unstable_requestPaint=function(){};xt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=cn;cn=t;try{return e()}finally{cn=n}};xt.unstable_scheduleCallback=function(t,e,n){var i=xt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,t={id:xw++,callback:e,priorityLevel:t,startTime:n,expirationTime:a,sortIndex:-1},n>i?(t.sortIndex=n,Uh(Aa,t),pi(ki)===null&&t===pi(Aa)&&(To?(J0(Ro),Ro=-1):To=!0,Gh(zh,n-i))):(t.sortIndex=a,Uh(ki,t),_r||ec||(_r=!0,Hh(Vh))),t};xt.unstable_shouldYield=tx;xt.unstable_wrapCallback=function(t){var e=cn;return function(){var n=cn;cn=e;try{return t.apply(this,arguments)}finally{cn=n}}}});var ax=Qi((mP,ix)=>{"use strict";ix.exports=nx()});var lS=Qi(Wn=>{"use strict";var yw=Ia(),Hn=ax();function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dy=new Set,Qo={};function Dr(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Qo[t]=e,t=0;t<e.length;t++)dy.add(e[t])}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fp=Object.prototype.hasOwnProperty,vw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rx={},sx={};function Sw(t){return fp.call(sx,t)?!0:fp.call(rx,t)?!1:vw.test(t)?sx[t]=!0:(rx[t]=!0,!1)}function _w(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mw(t,e,n,i){if(e===null||typeof e>"u"||_w(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,a,r,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=s}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var am=/[\-:]([a-z])/g;function rm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(am,rm);an[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(am,rm);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(am,rm);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function sm(t,e,n,i){var a=an.hasOwnProperty(e)?an[e]:null;(a!==null?a.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mw(e,n,a,i)&&(n=null),i||a===null?Sw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):a.mustUseProperty?t[a.propertyName]=n===null?a.type===3?!1:"":n:(e=a.attributeName,i=a.attributeNamespace,n===null?t.removeAttribute(e):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ua=yw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nc=Symbol.for("react.element"),os=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),om=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),fy=Symbol.for("react.provider"),hy=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),pp=Symbol.for("react.suspense"),mp=Symbol.for("react.suspense_list"),um=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var py=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var ox=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=ox&&t[ox]||t["@@iterator"],typeof t=="function"?t:null)}var kt=Object.assign,Wh;function zo(t){if(Wh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wh=e&&e[1]||""}return`
`+Wh+t}var qh=!1;function Xh(t,e){if(!t||qh)return"";qh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),r=i.stack.split(`
`),s=a.length-1,o=r.length-1;1<=s&&0<=o&&a[s]!==r[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==r[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==r[o]){var l=`
`+a[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{qh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function ww(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=Xh(t.type,!1),t;case 11:return t=Xh(t.type.render,!1),t;case 1:return t=Xh(t.type,!0),t;default:return""}}function gp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case os:return"Portal";case hp:return"Profiler";case om:return"StrictMode";case pp:return"Suspense";case mp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hy:return(t.displayName||"Context")+".Consumer";case fy:return(t._context.displayName||"Context")+".Provider";case lm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case um:return e=t.displayName||null,e!==null?e:gp(t.type)||"Memo";case Ta:e=t._payload,t=t._init;try{return gp(t(e))}catch{}}return null}function bw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gp(e);case 8:return e===om?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wa(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function my(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cw(t){var e=my(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ic(t){t._valueTracker||(t._valueTracker=Cw(t))}function gy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=my(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xp(t,e){var n=e.checked;return kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lx(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wa(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xy(t,e){e=e.checked,e!=null&&sm(t,"checked",e,!1)}function yp(t,e){xy(t,e);var n=Wa(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vp(t,e.type,n):e.hasOwnProperty("defaultValue")&&vp(t,e.type,Wa(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ux(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vp(t,e,n){(e!=="number"||Rc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function vs(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wa(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Sp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return kt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cx(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Vo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wa(n)}}function yy(t,e){var n=Wa(e.value),i=Wa(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function dx(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _p(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ac,Sy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,a){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,a)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ac=ac||document.createElement("div"),ac.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ac.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function el(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lw=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(t){Lw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wo[e]=Wo[t]})});function _y(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wo.hasOwnProperty(t)&&Wo[t]?(""+e).trim():e+"px"}function My(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,a=_y(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,a):t[n]=a}}var Iw=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mp(t,e){if(e){if(Iw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function wp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bp=null;function cm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cp=null,Ss=null,_s=null;function fx(t){if(t=yl(t)){if(typeof Cp!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=rd(e),Cp(t.stateNode,t.type,e))}}function wy(t){Ss?_s?_s.push(t):_s=[t]:Ss=t}function by(){if(Ss){var t=Ss,e=_s;if(_s=Ss=null,fx(t),e)for(t=0;t<e.length;t++)fx(e[t])}}function Cy(t,e){return t(e)}function Ly(){}var $h=!1;function Iy(t,e,n){if($h)return t(e,n);$h=!0;try{return Cy(t,e,n)}finally{$h=!1,(Ss!==null||_s!==null)&&(Ly(),by())}}function tl(t,e){var n=t.stateNode;if(n===null)return null;var i=rd(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Lp=!1;if(ra)try{rs={},Object.defineProperty(rs,"passive",{get:function(){Lp=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{Lp=!1}var rs;function Aw(t,e,n,i,a,r,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var qo=!1,Pc=null,kc=!1,Ip=null,Ew={onError:function(t){qo=!0,Pc=t}};function Tw(t,e,n,i,a,r,s,o,l){qo=!1,Pc=null,Aw.apply(Ew,arguments)}function Rw(t,e,n,i,a,r,s,o,l){if(Tw.apply(this,arguments),qo){if(qo){var u=Pc;qo=!1,Pc=null}else throw Error(ce(198));kc||(kc=!0,Ip=u)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ay(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hx(t){if(Fr(t)!==t)throw Error(ce(188))}function Pw(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return hx(a),t;if(r===i)return hx(a),e;r=r.sibling}throw Error(ce(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Ey(t){return t=Pw(t),t!==null?Ty(t):null}function Ty(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ty(t);if(e!==null)return e;t=t.sibling}return null}var Ry=Hn.unstable_scheduleCallback,px=Hn.unstable_cancelCallback,kw=Hn.unstable_shouldYield,Dw=Hn.unstable_requestPaint,Vt=Hn.unstable_now,Fw=Hn.unstable_getCurrentPriorityLevel,dm=Hn.unstable_ImmediatePriority,Py=Hn.unstable_UserBlockingPriority,Dc=Hn.unstable_NormalPriority,Nw=Hn.unstable_LowPriority,ky=Hn.unstable_IdlePriority,td=null,Bi=null;function Bw(t){if(Bi&&typeof Bi.onCommitFiberRoot=="function")try{Bi.onCommitFiberRoot(td,t,void 0,(t.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:zw,Uw=Math.log,Ow=Math.LN2;function zw(t){return t>>>=0,t===0?32:31-(Uw(t)/Ow|0)|0}var rc=64,sc=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,a=t.suspendedLanes,r=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~a;o!==0?i=Ho(o):(r&=s,r!==0&&(i=Ho(r)))}else s=n&~a,s!==0?i=Ho(s):r!==0&&(i=Ho(r));if(i===0)return 0;if(e!==0&&e!==i&&!(e&a)&&(a=i&-i,r=e&-e,a>=r||a===16&&(r&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-vi(e),a=1<<n,i|=t[n],e&=~a;return i}function Vw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes;0<r;){var s=31-vi(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=Vw(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}}function Ap(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dy(){var t=rc;return rc<<=1,!(rc&4194240)&&(rc=64),t}function Yh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vi(e),t[e]=n}function Gw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var a=31-vi(n),r=1<<a;e[a]=0,i[a]=-1,t[a]=-1,n&=~r}}function fm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-vi(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}var ut=0;function Fy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ny,hm,By,Uy,Oy,Ep=!1,oc=[],Na=null,Ba=null,Ua=null,nl=new Map,il=new Map,Pa=[],Ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mx(t,e){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":nl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(e.pointerId)}}function ko(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=yl(e),e!==null&&hm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function qw(t,e,n,i,a){switch(e){case"focusin":return Na=ko(Na,t,e,n,i,a),!0;case"dragenter":return Ba=ko(Ba,t,e,n,i,a),!0;case"mouseover":return Ua=ko(Ua,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return nl.set(r,ko(nl.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,il.set(r,ko(il.get(r)||null,t,e,n,i,a)),!0}return!1}function zy(t){var e=br(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ay(n),e!==null){t.blockedOn=e,Oy(t.priority,function(){By(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bp=i,n.target.dispatchEvent(i),bp=null}else return e=yl(n),e!==null&&hm(e),t.blockedOn=n,!1;e.shift()}return!0}function gx(t,e,n){_c(t)&&n.delete(e)}function Xw(){Ep=!1,Na!==null&&_c(Na)&&(Na=null),Ba!==null&&_c(Ba)&&(Ba=null),Ua!==null&&_c(Ua)&&(Ua=null),nl.forEach(gx),il.forEach(gx)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,Ep||(Ep=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,Xw)))}function al(t){function e(a){return Do(a,t)}if(0<oc.length){Do(oc[0],t);for(var n=1;n<oc.length;n++){var i=oc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Na!==null&&Do(Na,t),Ba!==null&&Do(Ba,t),Ua!==null&&Do(Ua,t),nl.forEach(e),il.forEach(e),n=0;n<Pa.length;n++)i=Pa[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pa.length&&(n=Pa[0],n.blockedOn===null);)zy(n),n.blockedOn===null&&Pa.shift()}var Ms=ua.ReactCurrentBatchConfig,Nc=!0;function $w(t,e,n,i){var a=ut,r=Ms.transition;Ms.transition=null;try{ut=1,pm(t,e,n,i)}finally{ut=a,Ms.transition=r}}function Yw(t,e,n,i){var a=ut,r=Ms.transition;Ms.transition=null;try{ut=4,pm(t,e,n,i)}finally{ut=a,Ms.transition=r}}function pm(t,e,n,i){if(Nc){var a=Tp(t,e,n,i);if(a===null)tp(t,e,i,Bc,n),mx(t,i);else if(qw(a,t,e,n,i))i.stopPropagation();else if(mx(t,i),e&4&&-1<Ww.indexOf(t)){for(;a!==null;){var r=yl(a);if(r!==null&&Ny(r),r=Tp(t,e,n,i),r===null&&tp(t,e,i,Bc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else tp(t,e,i,null,n)}}var Bc=null;function Tp(t,e,n,i){if(Bc=null,t=cm(i),t=br(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ay(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bc=t,null}function Vy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fw()){case dm:return 1;case Py:return 4;case Dc:case Nw:return 16;case ky:return 536870912;default:return 16}default:return 16}}var Da=null,mm=null,Mc=null;function Hy(){if(Mc)return Mc;var t,e=mm,n=e.length,i,a="value"in Da?Da.value:Da.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return Mc=a.slice(t,1<i?1-i:void 0)}function wc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lc(){return!0}function xx(){return!1}function Gn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?lc:xx,this.isPropagationStopped=xx,this}return kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lc)},persist:function(){},isPersistent:lc}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gm=Gn(Ps),xl=kt({},Ps,{view:0,detail:0}),Zw=Gn(xl),Zh,jh,Fo,nd=kt({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Zh=t.screenX-Fo.screenX,jh=t.screenY-Fo.screenY):jh=Zh=0,Fo=t),Zh)},movementY:function(t){return"movementY"in t?t.movementY:jh}}),yx=Gn(nd),jw=kt({},nd,{dataTransfer:0}),Kw=Gn(jw),Jw=kt({},xl,{relatedTarget:0}),Kh=Gn(Jw),Qw=kt({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),eb=Gn(Qw),tb=kt({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nb=Gn(tb),ib=kt({},Ps,{data:0}),vx=Gn(ib),ab={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ob(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sb[t])?!!e[t]:!1}function xm(){return ob}var lb=kt({},xl,{key:function(t){if(t.key){var e=ab[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xm,charCode:function(t){return t.type==="keypress"?wc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ub=Gn(lb),cb=kt({},nd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sx=Gn(cb),db=kt({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xm}),fb=Gn(db),hb=kt({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),pb=Gn(hb),mb=kt({},nd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gb=Gn(mb),xb=[9,13,27,32],ym=ra&&"CompositionEvent"in window,Xo=null;ra&&"documentMode"in document&&(Xo=document.documentMode);var yb=ra&&"TextEvent"in window&&!Xo,Gy=ra&&(!ym||Xo&&8<Xo&&11>=Xo),_x=" ",Mx=!1;function Wy(t,e){switch(t){case"keyup":return xb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function vb(t,e){switch(t){case"compositionend":return qy(e);case"keypress":return e.which!==32?null:(Mx=!0,_x);case"textInput":return t=e.data,t===_x&&Mx?null:t;default:return null}}function Sb(t,e){if(us)return t==="compositionend"||!ym&&Wy(t,e)?(t=Hy(),Mc=mm=Da=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gy&&e.locale!=="ko"?null:e.data;default:return null}}var _b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wx(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_b[t.type]:e==="textarea"}function Xy(t,e,n,i){wy(i),e=Uc(e,"onChange"),0<e.length&&(n=new gm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $o=null,rl=null;function Mb(t){iv(t,0)}function id(t){var e=fs(t);if(gy(e))return t}function wb(t,e){if(t==="change")return e}var $y=!1;ra&&(ra?(cc="oninput"in document,cc||(Jh=document.createElement("div"),Jh.setAttribute("oninput","return;"),cc=typeof Jh.oninput=="function"),uc=cc):uc=!1,$y=uc&&(!document.documentMode||9<document.documentMode));var uc,cc,Jh;function bx(){$o&&($o.detachEvent("onpropertychange",Yy),rl=$o=null)}function Yy(t){if(t.propertyName==="value"&&id(rl)){var e=[];Xy(e,rl,t,cm(t)),Iy(Mb,e)}}function bb(t,e,n){t==="focusin"?(bx(),$o=e,rl=n,$o.attachEvent("onpropertychange",Yy)):t==="focusout"&&bx()}function Cb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return id(rl)}function Lb(t,e){if(t==="click")return id(e)}function Ib(t,e){if(t==="input"||t==="change")return id(e)}function Ab(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _i=typeof Object.is=="function"?Object.is:Ab;function sl(t,e){if(_i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!fp.call(e,a)||!_i(t[a],e[a]))return!1}return!0}function Cx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lx(t,e){var n=Cx(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cx(n)}}function Zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jy(){for(var t=window,e=Rc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rc(t.document)}return e}function vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Eb(t){var e=jy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zy(n.ownerDocument.documentElement,n)){if(i!==null&&vm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var a=n.textContent.length,r=Math.min(i.start,a);i=i.end===void 0?r:Math.min(i.end,a),!t.extend&&r>i&&(a=i,i=r,r=a),a=Lx(n,r);var s=Lx(n,i);a&&s&&(t.rangeCount!==1||t.anchorNode!==a.node||t.anchorOffset!==a.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),t.removeAllRanges(),r>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Tb=ra&&"documentMode"in document&&11>=document.documentMode,cs=null,Rp=null,Yo=null,Pp=!1;function Ix(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pp||cs==null||cs!==Rc(i)||(i=cs,"selectionStart"in i&&vm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yo&&sl(Yo,i)||(Yo=i,i=Uc(Rp,"onSelect"),0<i.length&&(e=new gm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=cs)))}function dc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:dc("Animation","AnimationEnd"),animationiteration:dc("Animation","AnimationIteration"),animationstart:dc("Animation","AnimationStart"),transitionend:dc("Transition","TransitionEnd")},Qh={},Ky={};ra&&(Ky=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function ad(t){if(Qh[t])return Qh[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ky)return Qh[t]=e[n];return t}var Jy=ad("animationend"),Qy=ad("animationiteration"),ev=ad("animationstart"),tv=ad("transitionend"),nv=new Map,Ax="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xa(t,e){nv.set(t,e),Dr(e,[t])}for(fc=0;fc<Ax.length;fc++)hc=Ax[fc],Ex=hc.toLowerCase(),Tx=hc[0].toUpperCase()+hc.slice(1),Xa(Ex,"on"+Tx);var hc,Ex,Tx,fc;Xa(Jy,"onAnimationEnd");Xa(Qy,"onAnimationIteration");Xa(ev,"onAnimationStart");Xa("dblclick","onDoubleClick");Xa("focusin","onFocus");Xa("focusout","onBlur");Xa(tv,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Rx(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Rw(i,e,void 0,t),t.currentTarget=null}function iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;Rx(a,o,u),r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;Rx(a,o,u),r=l}}}if(kc)throw t=Ip,kc=!1,Ip=null,t}function _t(t,e){var n=e[Bp];n===void 0&&(n=e[Bp]=new Set);var i=t+"__bubble";n.has(i)||(av(e,t,2,!1),n.add(i))}function ep(t,e,n){var i=0;e&&(i|=4),av(n,t,i,e)}var pc="_reactListening"+Math.random().toString(36).slice(2);function ol(t){if(!t[pc]){t[pc]=!0,dy.forEach(function(n){n!=="selectionchange"&&(Rb.has(n)||ep(n,!1,t),ep(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pc]||(e[pc]=!0,ep("selectionchange",!1,e))}}function av(t,e,n,i){switch(Vy(e)){case 1:var a=$w;break;case 4:a=Yw;break;default:a=pm}n=a.bind(null,e,n,t),a=void 0,!Lp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function tp(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;s=s.return}for(;o!==null;){if(s=br(o),s===null)return;if(l=s.tag,l===5||l===6){i=r=s;continue e}o=o.parentNode}}i=i.return}Iy(function(){var u=r,d=cm(n),p=[];e:{var f=nv.get(t);if(f!==void 0){var g=gm,y=t;switch(t){case"keypress":if(wc(n)===0)break e;case"keydown":case"keyup":g=ub;break;case"focusin":y="focus",g=Kh;break;case"focusout":y="blur",g=Kh;break;case"beforeblur":case"afterblur":g=Kh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Kw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fb;break;case Jy:case Qy:case ev:g=eb;break;case tv:g=pb;break;case"scroll":g=Zw;break;case"wheel":g=gb;break;case"copy":case"cut":case"paste":g=nb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Sx}var w=(e&4)!==0,x=!w&&t==="scroll",h=w?f!==null?f+"Capture":null:f;w=[];for(var v=u,C;v!==null;){C=v;var M=C.stateNode;if(C.tag===5&&M!==null&&(C=M,h!==null&&(M=tl(v,h),M!=null&&w.push(ll(v,M,C)))),x)break;v=v.return}0<w.length&&(f=new g(f,y,null,n,d),p.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==bp&&(y=n.relatedTarget||n.fromElement)&&(br(y)||y[sa]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?br(y):null,y!==null&&(x=Fr(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=yx,M="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(w=Sx,M="onPointerLeave",h="onPointerEnter",v="pointer"),x=g==null?f:fs(g),C=y==null?f:fs(y),f=new w(M,v+"leave",g,n,d),f.target=x,f.relatedTarget=C,M=null,br(d)===u&&(w=new w(h,v+"enter",y,n,d),w.target=C,w.relatedTarget=x,M=w),x=M,g&&y)t:{for(w=g,h=y,v=0,C=w;C;C=ss(C))v++;for(C=0,M=h;M;M=ss(M))C++;for(;0<v-C;)w=ss(w),v--;for(;0<C-v;)h=ss(h),C--;for(;v--;){if(w===h||h!==null&&w===h.alternate)break t;w=ss(w),h=ss(h)}w=null}else w=null;g!==null&&Px(p,f,g,w,!1),y!==null&&x!==null&&Px(p,x,y,w,!0)}}e:{if(f=u?fs(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var b=wb;else if(wx(f))if($y)b=Ib;else{b=Cb;var I=bb}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Lb);if(b&&(b=b(t,u))){Xy(p,b,n,d);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&vp(f,"number",f.value)}switch(I=u?fs(u):window,t){case"focusin":(wx(I)||I.contentEditable==="true")&&(cs=I,Rp=u,Yo=null);break;case"focusout":Yo=Rp=cs=null;break;case"mousedown":Pp=!0;break;case"contextmenu":case"mouseup":case"dragend":Pp=!1,Ix(p,n,d);break;case"selectionchange":if(Tb)break;case"keydown":case"keyup":Ix(p,n,d)}var T;if(ym)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else us?Wy(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Gy&&n.locale!=="ko"&&(us||S!=="onCompositionStart"?S==="onCompositionEnd"&&us&&(T=Hy()):(Da=d,mm="value"in Da?Da.value:Da.textContent,us=!0)),I=Uc(u,S),0<I.length&&(S=new vx(S,t,null,n,d),p.push({event:S,listeners:I}),T?S.data=T:(T=qy(n),T!==null&&(S.data=T)))),(T=yb?vb(t,n):Sb(t,n))&&(u=Uc(u,"onBeforeInput"),0<u.length&&(d=new vx("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=T))}iv(p,e)})}function ll(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=tl(t,n),r!=null&&i.unshift(ll(t,r,a)),r=tl(t,e),r!=null&&i.push(ll(t,r,a))),t=t.return}return i}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Px(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,a?(l=tl(n,r),l!=null&&s.unshift(ll(n,l,o))):a||(l=tl(n,r),l!=null&&s.push(ll(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Pb=/\r\n?/g,kb=/\u0000|\uFFFD/g;function kx(t){return(typeof t=="string"?t:""+t).replace(Pb,`
`).replace(kb,"")}function mc(t,e,n){if(e=kx(e),kx(t)!==e&&n)throw Error(ce(425))}function Oc(){}var kp=null,Dp=null;function Fp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Np=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,Dx=typeof Promise=="function"?Promise:void 0,Fb=typeof queueMicrotask=="function"?queueMicrotask:typeof Dx<"u"?function(t){return Dx.resolve(null).then(t).catch(Nb)}:Np;function Nb(t){setTimeout(function(){throw t})}function np(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(i===0){t.removeChild(a),al(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=a}while(n);al(e)}function Oa(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fx(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Ni="__reactFiber$"+ks,ul="__reactProps$"+ks,sa="__reactContainer$"+ks,Bp="__reactEvents$"+ks,Bb="__reactListeners$"+ks,Ub="__reactHandles$"+ks;function br(t){var e=t[Ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sa]||n[Ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fx(t);t!==null;){if(n=t[Ni])return n;t=Fx(t)}return e}t=n,n=t.parentNode}return null}function yl(t){return t=t[Ni]||t[sa],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function rd(t){return t[ul]||null}var Up=[],hs=-1;function $a(t){return{current:t}}function Mt(t){0>hs||(t.current=Up[hs],Up[hs]=null,hs--)}function yt(t,e){hs++,Up[hs]=t.current,t.current=e}var qa={},pn=$a(qa),In=$a(!1),Er=qa;function Ls(t,e){var n=t.type.contextTypes;if(!n)return qa;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in n)a[r]=e[r];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=a),a}function An(t){return t=t.childContextTypes,t!=null}function zc(){Mt(In),Mt(pn)}function Nx(t,e,n){if(pn.current!==qa)throw Error(ce(168));yt(pn,e),yt(In,n)}function rv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var a in i)if(!(a in e))throw Error(ce(108,bw(t)||"Unknown",a));return kt({},n,i)}function Vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qa,Er=pn.current,yt(pn,t),yt(In,In.current),!0}function Bx(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=rv(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,Mt(In),Mt(pn),yt(pn,t)):Mt(In),yt(In,n)}var ta=null,sd=!1,ip=!1;function sv(t){ta===null?ta=[t]:ta.push(t)}function Ob(t){sd=!0,sv(t)}function Ya(){if(!ip&&ta!==null){ip=!0;var t=0,e=ut;try{var n=ta;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ta=null,sd=!1}catch(a){throw ta!==null&&(ta=ta.slice(t+1)),Ry(dm,Ya),a}finally{ut=e,ip=!1}}return null}var ps=[],ms=0,Hc=null,Gc=0,ni=[],ii=0,Tr=null,na=1,ia="";function Mr(t,e){ps[ms++]=Gc,ps[ms++]=Hc,Hc=t,Gc=e}function ov(t,e,n){ni[ii++]=na,ni[ii++]=ia,ni[ii++]=Tr,Tr=t;var i=na;t=ia;var a=32-vi(i)-1;i&=~(1<<a),n+=1;var r=32-vi(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,na=1<<32-vi(e)+a|n<<a|i,ia=r+t}else na=1<<r|n<<a|i,ia=t}function Sm(t){t.return!==null&&(Mr(t,1),ov(t,1,0))}function _m(t){for(;t===Hc;)Hc=ps[--ms],ps[ms]=null,Gc=ps[--ms],ps[ms]=null;for(;t===Tr;)Tr=ni[--ii],ni[ii]=null,ia=ni[--ii],ni[ii]=null,na=ni[--ii],ni[ii]=null}var Vn=null,zn=null,Ct=!1,yi=null;function lv(t,e){var n=ai(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ux(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vn=t,zn=Oa(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vn=t,zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:na,overflow:ia}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ai(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vn=t,zn=null,!0):!1;default:return!1}}function Op(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zp(t){if(Ct){var e=zn;if(e){var n=e;if(!Ux(t,e)){if(Op(t))throw Error(ce(418));e=Oa(n.nextSibling);var i=Vn;e&&Ux(t,e)?lv(i,n):(t.flags=t.flags&-4097|2,Ct=!1,Vn=t)}}else{if(Op(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Ct=!1,Vn=t}}}function Ox(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function gc(t){if(t!==Vn)return!1;if(!Ct)return Ox(t),Ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fp(t.type,t.memoizedProps)),e&&(e=zn)){if(Op(t))throw uv(),Error(ce(418));for(;e;)lv(t,e),e=Oa(e.nextSibling)}if(Ox(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zn=Oa(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zn=null}}else zn=Vn?Oa(t.stateNode.nextSibling):null;return!0}function uv(){for(var t=zn;t;)t=Oa(t.nextSibling)}function Is(){zn=Vn=null,Ct=!1}function Mm(t){yi===null?yi=[t]:yi.push(t)}var zb=ua.ReactCurrentBatchConfig;function No(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var a=i,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(s){var o=a.refs;s===null?delete o[r]:o[r]=s},e._stringRef=r,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function xc(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zx(t){var e=t._init;return e(t._payload)}function cv(t){function e(h,v){if(t){var C=h.deletions;C===null?(h.deletions=[v],h.flags|=16):C.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function a(h,v){return h=Ga(h,v),h.index=0,h.sibling=null,h}function r(h,v,C){return h.index=C,t?(C=h.alternate,C!==null?(C=C.index,C<v?(h.flags|=2,v):C):(h.flags|=2,v)):(h.flags|=1048576,v)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,C,M){return v===null||v.tag!==6?(v=cp(C,h.mode,M),v.return=h,v):(v=a(v,C),v.return=h,v)}function l(h,v,C,M){var b=C.type;return b===ls?d(h,v,C.props.children,M,C.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ta&&zx(b)===v.type)?(M=a(v,C.props),M.ref=No(h,v,C),M.return=h,M):(M=Tc(C.type,C.key,C.props,null,h.mode,M),M.ref=No(h,v,C),M.return=h,M)}function u(h,v,C,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=dp(C,h.mode,M),v.return=h,v):(v=a(v,C.children||[]),v.return=h,v)}function d(h,v,C,M,b){return v===null||v.tag!==7?(v=Ar(C,h.mode,M,b),v.return=h,v):(v=a(v,C),v.return=h,v)}function p(h,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=cp(""+v,h.mode,C),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nc:return C=Tc(v.type,v.key,v.props,null,h.mode,C),C.ref=No(h,null,v),C.return=h,C;case os:return v=dp(v,h.mode,C),v.return=h,v;case Ta:var M=v._init;return p(h,M(v._payload),C)}if(Vo(v)||Po(v))return v=Ar(v,h.mode,C,null),v.return=h,v;xc(h,v)}return null}function f(h,v,C,M){var b=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return b!==null?null:o(h,v,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case nc:return C.key===b?l(h,v,C,M):null;case os:return C.key===b?u(h,v,C,M):null;case Ta:return b=C._init,f(h,v,b(C._payload),M)}if(Vo(C)||Po(C))return b!==null?null:d(h,v,C,M,null);xc(h,C)}return null}function g(h,v,C,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(C)||null,o(v,h,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case nc:return h=h.get(M.key===null?C:M.key)||null,l(v,h,M,b);case os:return h=h.get(M.key===null?C:M.key)||null,u(v,h,M,b);case Ta:var I=M._init;return g(h,v,C,I(M._payload),b)}if(Vo(M)||Po(M))return h=h.get(C)||null,d(v,h,M,b,null);xc(v,M)}return null}function y(h,v,C,M){for(var b=null,I=null,T=v,S=v=0,L=null;T!==null&&S<C.length;S++){T.index>S?(L=T,T=null):L=T.sibling;var R=f(h,T,C[S],M);if(R===null){T===null&&(T=L);break}t&&T&&R.alternate===null&&e(h,T),v=r(R,v,S),I===null?b=R:I.sibling=R,I=R,T=L}if(S===C.length)return n(h,T),Ct&&Mr(h,S),b;if(T===null){for(;S<C.length;S++)T=p(h,C[S],M),T!==null&&(v=r(T,v,S),I===null?b=T:I.sibling=T,I=T);return Ct&&Mr(h,S),b}for(T=i(h,T);S<C.length;S++)L=g(T,h,S,C[S],M),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?S:L.key),v=r(L,v,S),I===null?b=L:I.sibling=L,I=L);return t&&T.forEach(function(k){return e(h,k)}),Ct&&Mr(h,S),b}function w(h,v,C,M){var b=Po(C);if(typeof b!="function")throw Error(ce(150));if(C=b.call(C),C==null)throw Error(ce(151));for(var I=b=null,T=v,S=v=0,L=null,R=C.next();T!==null&&!R.done;S++,R=C.next()){T.index>S?(L=T,T=null):L=T.sibling;var k=f(h,T,R.value,M);if(k===null){T===null&&(T=L);break}t&&T&&k.alternate===null&&e(h,T),v=r(k,v,S),I===null?b=k:I.sibling=k,I=k,T=L}if(R.done)return n(h,T),Ct&&Mr(h,S),b;if(T===null){for(;!R.done;S++,R=C.next())R=p(h,R.value,M),R!==null&&(v=r(R,v,S),I===null?b=R:I.sibling=R,I=R);return Ct&&Mr(h,S),b}for(T=i(h,T);!R.done;S++,R=C.next())R=g(T,h,S,R.value,M),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?S:R.key),v=r(R,v,S),I===null?b=R:I.sibling=R,I=R);return t&&T.forEach(function(F){return e(h,F)}),Ct&&Mr(h,S),b}function x(h,v,C,M){if(typeof C=="object"&&C!==null&&C.type===ls&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case nc:e:{for(var b=C.key,I=v;I!==null;){if(I.key===b){if(b=C.type,b===ls){if(I.tag===7){n(h,I.sibling),v=a(I,C.props.children),v.return=h,h=v;break e}}else if(I.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ta&&zx(b)===I.type){n(h,I.sibling),v=a(I,C.props),v.ref=No(h,I,C),v.return=h,h=v;break e}n(h,I);break}else e(h,I);I=I.sibling}C.type===ls?(v=Ar(C.props.children,h.mode,M,C.key),v.return=h,h=v):(M=Tc(C.type,C.key,C.props,null,h.mode,M),M.ref=No(h,v,C),M.return=h,h=M)}return s(h);case os:e:{for(I=C.key;v!==null;){if(v.key===I)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(h,v.sibling),v=a(v,C.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=dp(C,h.mode,M),v.return=h,h=v}return s(h);case Ta:return I=C._init,x(h,v,I(C._payload),M)}if(Vo(C))return y(h,v,C,M);if(Po(C))return w(h,v,C,M);xc(h,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(h,v.sibling),v=a(v,C),v.return=h,h=v):(n(h,v),v=cp(C,h.mode,M),v.return=h,h=v),s(h)):n(h,v)}return x}var As=cv(!0),dv=cv(!1),Wc=$a(null),qc=null,gs=null,wm=null;function bm(){wm=gs=qc=null}function Cm(t){var e=Wc.current;Mt(Wc),t._currentValue=e}function Vp(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){qc=t,wm=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ln=!0),t.firstContext=null)}function si(t){var e=t._currentValue;if(wm!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(qc===null)throw Error(ce(308));gs=t,qc.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var Cr=null;function Lm(t){Cr===null?Cr=[t]:Cr.push(t)}function fv(t,e,n,i){var a=e.interleaved;return a===null?(n.next=n,Lm(e)):(n.next=a.next,a.next=n),e.interleaved=n,oa(t,i)}function oa(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ra=!1;function Im(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function aa(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function za(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,oa(t,n)}return a=i.interleaved,a===null?(e.next=e,Lm(i)):(e.next=a.next,a.next=e),i.interleaved=e,oa(t,n)}function bc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fm(t,n)}}function Vx(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xc(t,e,n,i){var a=t.updateQueue;Ra=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?r=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;s=0,d=u=l=null,o=r;do{var f=o.lane,g=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,w=o;switch(f=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(g,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,p,f):y,f==null)break e;p=kt({},p,f);break e;case 2:Ra=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=a.effects,f===null?a.effects=[o]:f.push(o))}else g={eventTime:g,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=g,l=p):d=d.next=g,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;f=o,o=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(d===null&&(l=p),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=d,e=a.shared.interleaved,e!==null){a=e;do s|=a.lane,a=a.next;while(a!==e)}else r===null&&(a.shared.lanes=0);Pr|=s,t.lanes=s,t.memoizedState=p}}function Hx(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!="function")throw Error(ce(191,a));a.call(i)}}}var vl={},Ui=$a(vl),cl=$a(vl),dl=$a(vl);function Lr(t){if(t===vl)throw Error(ce(174));return t}function Am(t,e){switch(yt(dl,e),yt(cl,t),yt(Ui,vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_p(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_p(e,t)}Mt(Ui),yt(Ui,e)}function Es(){Mt(Ui),Mt(cl),Mt(dl)}function pv(t){Lr(dl.current);var e=Lr(Ui.current),n=_p(e,t.type);e!==n&&(yt(cl,t),yt(Ui,n))}function Em(t){cl.current===t&&(Mt(Ui),Mt(cl))}var Rt=$a(0);function $c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ap=[];function Tm(){for(var t=0;t<ap.length;t++)ap[t]._workInProgressVersionPrimary=null;ap.length=0}var Cc=ua.ReactCurrentDispatcher,rp=ua.ReactCurrentBatchConfig,Rr=0,Pt=null,Xt=null,Kt=null,Yc=!1,Zo=!1,fl=0,Vb=0;function dn(){throw Error(ce(321))}function Rm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_i(t[n],e[n]))return!1;return!0}function Pm(t,e,n,i,a,r){if(Rr=r,Pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cc.current=t===null||t.memoizedState===null?qb:Xb,t=n(i,a),Zo){r=0;do{if(Zo=!1,fl=0,25<=r)throw Error(ce(301));r+=1,Kt=Xt=null,e.updateQueue=null,Cc.current=$b,t=n(i,a)}while(Zo)}if(Cc.current=Zc,e=Xt!==null&&Xt.next!==null,Rr=0,Kt=Xt=Pt=null,Yc=!1,e)throw Error(ce(300));return t}function km(){var t=fl!==0;return fl=0,t}function Fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Pt.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function oi(){if(Xt===null){var t=Pt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=Kt===null?Pt.memoizedState:Kt.next;if(e!==null)Kt=e,Xt=t;else{if(t===null)throw Error(ce(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Kt===null?Pt.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function hl(t,e){return typeof e=="function"?e(t):e}function sp(t){var e=oi(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Xt,a=i.baseQueue,r=n.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}i.baseQueue=a=r,n.pending=null}if(a!==null){r=a.next,i=i.baseState;var o=s=null,l=null,u=r;do{var d=u.lane;if((Rr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,s=i):l=l.next=p,Pt.lanes|=d,Pr|=d}u=u.next}while(u!==null&&u!==r);l===null?s=i:l.next=o,_i(i,e.memoizedState)||(Ln=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){a=t;do r=a.lane,Pt.lanes|=r,Pr|=r,a=a.next;while(a!==t)}else a===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function op(t){var e=oi(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);_i(r,e.memoizedState)||(Ln=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function mv(){}function gv(t,e){var n=Pt,i=oi(),a=e(),r=!_i(i.memoizedState,a);if(r&&(i.memoizedState=a,Ln=!0),i=i.queue,Dm(vv.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,pl(9,yv.bind(null,n,i,a,e),void 0,null),Jt===null)throw Error(ce(349));Rr&30||xv(n,e,a)}return a}function xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yv(t,e,n,i){e.value=n,e.getSnapshot=i,Sv(e)&&_v(t)}function vv(t,e,n){return n(function(){Sv(e)&&_v(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_i(t,n)}catch{return!0}}function _v(t){var e=oa(t,1);e!==null&&Si(e,t,1,-1)}function Gx(t){var e=Fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:t},e.queue=t,t=t.dispatch=Wb.bind(null,Pt,t),[e.memoizedState,t]}function pl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Mv(){return oi().memoizedState}function Lc(t,e,n,i){var a=Fi();Pt.flags|=t,a.memoizedState=pl(1|e,n,void 0,i===void 0?null:i)}function od(t,e,n,i){var a=oi();i=i===void 0?null:i;var r=void 0;if(Xt!==null){var s=Xt.memoizedState;if(r=s.destroy,i!==null&&Rm(i,s.deps)){a.memoizedState=pl(e,n,r,i);return}}Pt.flags|=t,a.memoizedState=pl(1|e,n,r,i)}function Wx(t,e){return Lc(8390656,8,t,e)}function Dm(t,e){return od(2048,8,t,e)}function wv(t,e){return od(4,2,t,e)}function bv(t,e){return od(4,4,t,e)}function Cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lv(t,e,n){return n=n!=null?n.concat([t]):null,od(4,4,Cv.bind(null,e,t),n)}function Fm(){}function Iv(t,e){var n=oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Av(t,e){var n=oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ev(t,e,n){return Rr&21?(_i(n,e)||(n=Dy(),Pt.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=n)}function Hb(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=rp.transition;rp.transition={};try{t(!1),e()}finally{ut=n,rp.transition=i}}function Tv(){return oi().memoizedState}function Gb(t,e,n){var i=Ha(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rv(t))Pv(e,n);else if(n=fv(t,e,n,i),n!==null){var a=_n();Si(n,t,i,a),kv(n,e,i)}}function Wb(t,e,n){var i=Ha(t),a={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rv(t))Pv(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,_i(o,s)){var l=e.interleaved;l===null?(a.next=a,Lm(e)):(a.next=l.next,l.next=a),e.interleaved=a;return}}catch{}finally{}n=fv(t,e,a,i),n!==null&&(a=_n(),Si(n,t,i,a),kv(n,e,i))}}function Rv(t){var e=t.alternate;return t===Pt||e!==null&&e===Pt}function Pv(t,e){Zo=Yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fm(t,n)}}var Zc={readContext:si,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},qb={readContext:si,useCallback:function(t,e){return Fi().memoizedState=[t,e===void 0?null:e],t},useContext:si,useEffect:Wx,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4194308,4,Cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=Fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Gb.bind(null,Pt,t),[i.memoizedState,t]},useRef:function(t){var e=Fi();return t={current:t},e.memoizedState=t},useState:Gx,useDebugValue:Fm,useDeferredValue:function(t){return Fi().memoizedState=t},useTransition:function(){var t=Gx(!1),e=t[0];return t=Hb.bind(null,t[1]),Fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Pt,a=Fi();if(Ct){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Jt===null)throw Error(ce(349));Rr&30||xv(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,Wx(vv.bind(null,i,r,t),[t]),i.flags|=2048,pl(9,yv.bind(null,i,r,n,e),void 0,null),n},useId:function(){var t=Fi(),e=Jt.identifierPrefix;if(Ct){var n=ia,i=na;n=(i&~(1<<32-vi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xb={readContext:si,useCallback:Iv,useContext:si,useEffect:Dm,useImperativeHandle:Lv,useInsertionEffect:wv,useLayoutEffect:bv,useMemo:Av,useReducer:sp,useRef:Mv,useState:function(){return sp(hl)},useDebugValue:Fm,useDeferredValue:function(t){var e=oi();return Ev(e,Xt.memoizedState,t)},useTransition:function(){var t=sp(hl)[0],e=oi().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:gv,useId:Tv,unstable_isNewReconciler:!1},$b={readContext:si,useCallback:Iv,useContext:si,useEffect:Dm,useImperativeHandle:Lv,useInsertionEffect:wv,useLayoutEffect:bv,useMemo:Av,useReducer:op,useRef:Mv,useState:function(){return op(hl)},useDebugValue:Fm,useDeferredValue:function(t){var e=oi();return Xt===null?e.memoizedState=t:Ev(e,Xt.memoizedState,t)},useTransition:function(){var t=op(hl)[0],e=oi().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:gv,useId:Tv,unstable_isNewReconciler:!1};function gi(t,e){if(t&&t.defaultProps){e=kt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:kt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ld={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),a=Ha(t),r=aa(i,a);r.payload=e,n!=null&&(r.callback=n),e=za(t,r,a),e!==null&&(Si(e,t,a,i),bc(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),a=Ha(t),r=aa(i,a);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=za(t,r,a),e!==null&&(Si(e,t,a,i),bc(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=Ha(t),a=aa(n,i);a.tag=2,e!=null&&(a.callback=e),e=za(t,a,i),e!==null&&(Si(e,t,i,n),bc(e,t,i))}};function qx(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!sl(n,i)||!sl(a,r):!0}function Dv(t,e,n){var i=!1,a=qa,r=e.contextType;return typeof r=="object"&&r!==null?r=si(r):(a=An(e)?Er:pn.current,i=e.contextTypes,r=(i=i!=null)?Ls(t,a):qa),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ld,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=r),e}function Xx(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ld.enqueueReplaceState(e,e.state,null)}function Gp(t,e,n,i){var a=t.stateNode;a.props=n,a.state=t.memoizedState,a.refs={},Im(t);var r=e.contextType;typeof r=="object"&&r!==null?a.context=si(r):(r=An(e)?Er:pn.current,a.context=Ls(t,r)),a.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Hp(t,e,r,n),a.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&ld.enqueueReplaceState(a,a.state,null),Xc(t,n,a,i),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",i=e;do n+=ww(i),i=i.return;while(i);var a=n}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:a,digest:null}}function lp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yb=typeof WeakMap=="function"?WeakMap:Map;function Fv(t,e,n){n=aa(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kc||(Kc=!0,em=i),Wp(t,e)},n}function Nv(t,e,n){n=aa(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var a=e.value;n.payload=function(){return i(a)},n.callback=function(){Wp(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Wp(t,e),typeof i!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function $x(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Yb;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(a.add(n),t=lC.bind(null,t,e,n),e.then(t,t))}function Yx(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zx(t,e,n,i,a){return t.mode&1?(t.flags|=65536,t.lanes=a,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=aa(-1,1),e.tag=2,za(n,e,1))),n.lanes|=1),t)}var Zb=ua.ReactCurrentOwner,Ln=!1;function Sn(t,e,n,i){e.child=t===null?dv(e,null,n,i):As(e,t.child,n,i)}function jx(t,e,n,i,a){n=n.render;var r=e.ref;return ws(e,a),i=Pm(t,e,n,i,r,a),n=km(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,la(t,e,a)):(Ct&&n&&Sm(e),e.flags|=1,Sn(t,e,i,a),e.child)}function Kx(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!Gm(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,Bv(t,e,r,i,a)):(t=Tc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:sl,n(s,i)&&t.ref===e.ref)return la(t,e,a)}return e.flags|=1,t=Ga(r,i),t.ref=e.ref,t.return=e,e.child=t}function Bv(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(sl(r,i)&&t.ref===e.ref)if(Ln=!1,e.pendingProps=i=r,(t.lanes&a)!==0)t.flags&131072&&(Ln=!0);else return e.lanes=t.lanes,la(t,e,a)}return qp(t,e,n,i,a)}function Uv(t,e,n){var i=e.pendingProps,a=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(ys,On),On|=n;else{if(!(n&1073741824))return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(ys,On),On|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:n,yt(ys,On),On|=i}else r!==null?(i=r.baseLanes|n,e.memoizedState=null):i=n,yt(ys,On),On|=i;return Sn(t,e,a,n),e.child}function Ov(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qp(t,e,n,i,a){var r=An(n)?Er:pn.current;return r=Ls(e,r),ws(e,a),n=Pm(t,e,n,i,r,a),i=km(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,la(t,e,a)):(Ct&&i&&Sm(e),e.flags|=1,Sn(t,e,n,a),e.child)}function Jx(t,e,n,i,a){if(An(n)){var r=!0;Vc(e)}else r=!1;if(ws(e,a),e.stateNode===null)Ic(t,e),Dv(e,n,i),Gp(e,n,i,a),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=si(u):(u=An(n)?Er:pn.current,u=Ls(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Xx(e,s,i,u),Ra=!1;var f=e.memoizedState;s.state=f,Xc(e,i,s,a),l=e.memoizedState,o!==i||f!==l||In.current||Ra?(typeof d=="function"&&(Hp(e,n,d,i),l=e.memoizedState),(o=Ra||qx(e,n,o,i,f,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,hv(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:gi(e.type,o),s.props=u,p=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=si(l):(l=An(n)?Er:pn.current,l=Ls(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Xx(e,s,i,l),Ra=!1,f=e.memoizedState,s.state=f,Xc(e,i,s,a);var y=e.memoizedState;o!==p||f!==y||In.current||Ra?(typeof g=="function"&&(Hp(e,n,g,i),y=e.memoizedState),(u=Ra||qx(e,n,u,i,f,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Xp(t,e,n,i,r,a)}function Xp(t,e,n,i,a,r){Ov(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return a&&Bx(e,n,!1),la(t,e,r);i=e.stateNode,Zb.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=As(e,t.child,null,r),e.child=As(e,null,o,r)):Sn(t,e,o,r),e.memoizedState=i.state,a&&Bx(e,n,!0),e.child}function zv(t){var e=t.stateNode;e.pendingContext?Nx(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nx(t,e.context,!1),Am(t,e.containerInfo)}function Qx(t,e,n,i,a){return Is(),Mm(a),e.flags|=256,Sn(t,e,n,i),e.child}var $p={dehydrated:null,treeContext:null,retryLane:0};function Yp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vv(t,e,n){var i=e.pendingProps,a=Rt.current,r=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(a&2)!==0),o?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(a|=1),yt(Rt,a&1),t===null)return zp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,r?(i=e.mode,r=e.child,s={mode:"hidden",children:s},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=s):r=dd(s,i,0,null),t=Ar(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=Yp(n),e.memoizedState=$p,t):Nm(e,s));if(a=t.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return jb(t,e,s,i,o,a,n);if(r){r=i.fallback,s=e.mode,a=t.child,o=a.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==a?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ga(a,l),i.subtreeFlags=a.subtreeFlags&14680064),o!==null?r=Ga(o,r):(r=Ar(r,s,n,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,i=r,r=e.child,s=t.child.memoizedState,s=s===null?Yp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},r.memoizedState=s,r.childLanes=t.childLanes&~n,e.memoizedState=$p,i}return r=t.child,t=r.sibling,i=Ga(r,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nm(t,e){return e=dd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yc(t,e,n,i){return i!==null&&Mm(i),As(e,t.child,null,n),t=Nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jb(t,e,n,i,a,r,s){if(n)return e.flags&256?(e.flags&=-257,i=lp(Error(ce(422))),yc(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=i.fallback,a=e.mode,i=dd({mode:"visible",children:i.children},a,0,null),r=Ar(r,a,s,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,e.mode&1&&As(e,t.child,null,s),e.child.memoizedState=Yp(s),e.memoizedState=$p,r);if(!(e.mode&1))return yc(t,e,s,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var o=i.dgst;return i=o,r=Error(ce(419)),i=lp(r,i,void 0),yc(t,e,s,i)}if(o=(s&t.childLanes)!==0,Ln||o){if(i=Jt,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(i.suspendedLanes|s)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,oa(t,a),Si(i,t,a,-1))}return Hm(),i=lp(Error(ce(421))),yc(t,e,s,i)}return a.data==="$?"?(e.flags|=128,e.child=t.child,e=uC.bind(null,t),a._reactRetry=e,null):(t=r.treeContext,zn=Oa(a.nextSibling),Vn=e,Ct=!0,yi=null,t!==null&&(ni[ii++]=na,ni[ii++]=ia,ni[ii++]=Tr,na=t.id,ia=t.overflow,Tr=e),e=Nm(e,i.children),e.flags|=4096,e)}function ey(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vp(t.return,e,n)}function up(t,e,n,i,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function Hv(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;if(Sn(t,e,i.children,n),i=Rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ey(t,n,e);else if(t.tag===19)ey(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Rt,i),!(e.mode&1))e.memoizedState=null;else switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&$c(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),up(e,!1,a,n,r);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&$c(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}up(e,!0,n,null,r);break;case"together":up(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ic(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function la(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Ga(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ga(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Kb(t,e,n){switch(e.tag){case 3:zv(e),Is();break;case 5:pv(e);break;case 1:An(e.type)&&Vc(e);break;case 4:Am(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,a=e.memoizedProps.value;yt(Wc,i._currentValue),i._currentValue=a;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Rt,Rt.current&1),e.flags|=128,null):n&e.child.childLanes?Vv(t,e,n):(yt(Rt,Rt.current&1),t=la(t,e,n),t!==null?t.sibling:null);yt(Rt,Rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Hv(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),yt(Rt,Rt.current),i)break;return null;case 22:case 23:return e.lanes=0,Uv(t,e,n)}return la(t,e,n)}var Gv,Zp,Wv,qv;Gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zp=function(){};Wv=function(t,e,n,i){var a=t.memoizedProps;if(a!==i){t=e.stateNode,Lr(Ui.current);var r=null;switch(n){case"input":a=xp(t,a),i=xp(t,i),r=[];break;case"select":a=kt({},a,{value:void 0}),i=kt({},i,{value:void 0}),r=[];break;case"textarea":a=Sp(t,a),i=Sp(t,i),r=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Oc)}Mp(n,i);var s;n=null;for(u in a)if(!i.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qo.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in i){var l=i[u];if(o=a?.[u],i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(r||(r=[]),r.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(r=r||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_t("scroll",t),r||o===l||(r=[])):(r=r||[]).push(u,l))}n&&(r=r||[]).push("style",n);var u=r;(e.updateQueue=u)&&(e.flags|=4)}};qv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bo(t,e){if(!Ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function fn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jb(t,e,n){var i=e.pendingProps;switch(_m(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return An(e.type)&&zc(),fn(e),null;case 3:return i=e.stateNode,Es(),Mt(In),Mt(pn),Tm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yi!==null&&(im(yi),yi=null))),Zp(t,e),fn(e),null;case 5:Em(e);var a=Lr(dl.current);if(n=e.type,t!==null&&e.stateNode!=null)Wv(t,e,n,i,a),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return fn(e),null}if(t=Lr(Ui.current),gc(e)){i=e.stateNode,n=e.type;var r=e.memoizedProps;switch(i[Ni]=e,i[ul]=r,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(a=0;a<Go.length;a++)_t(Go[a],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":lx(i,r),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},_t("invalid",i);break;case"textarea":cx(i,r),_t("invalid",i)}Mp(n,r),a=null;for(var s in r)if(r.hasOwnProperty(s)){var o=r[s];s==="children"?typeof o=="string"?i.textContent!==o&&(r.suppressHydrationWarning!==!0&&mc(i.textContent,o,t),a=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&mc(i.textContent,o,t),a=["children",""+o]):Qo.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&_t("scroll",i)}switch(n){case"input":ic(i),ux(i,r,!0);break;case"textarea":ic(i),dx(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=Oc)}i=a,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Ni]=e,t[ul]=i,Gv(t,e,!1,!1),e.stateNode=t;e:{switch(s=wp(n,i),n){case"dialog":_t("cancel",t),_t("close",t),a=i;break;case"iframe":case"object":case"embed":_t("load",t),a=i;break;case"video":case"audio":for(a=0;a<Go.length;a++)_t(Go[a],t);a=i;break;case"source":_t("error",t),a=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),a=i;break;case"details":_t("toggle",t),a=i;break;case"input":lx(t,i),a=xp(t,i),_t("invalid",t);break;case"option":a=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},a=kt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":cx(t,i),a=Sp(t,i),_t("invalid",t);break;default:a=i}Mp(n,a),o=a;for(r in o)if(o.hasOwnProperty(r)){var l=o[r];r==="style"?My(t,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sy(t,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&el(t,l):typeof l=="number"&&el(t,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Qo.hasOwnProperty(r)?l!=null&&r==="onScroll"&&_t("scroll",t):l!=null&&sm(t,r,l,s))}switch(n){case"input":ic(t),ux(t,i,!1);break;case"textarea":ic(t),dx(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wa(i.value));break;case"select":t.multiple=!!i.multiple,r=i.value,r!=null?vs(t,!!i.multiple,r,!1):i.defaultValue!=null&&vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=Oc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(t&&e.stateNode!=null)qv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Lr(dl.current),Lr(Ui.current),gc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ni]=e,(r=i.nodeValue!==n)&&(t=Vn,t!==null))switch(t.tag){case 3:mc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mc(i.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=e,e.stateNode=i}return fn(e),null;case 13:if(Mt(Rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ct&&zn!==null&&e.mode&1&&!(e.flags&128))uv(),Is(),e.flags|=98560,r=!1;else if(r=gc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(ce(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(ce(317));r[Ni]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;fn(e),r=!1}else yi!==null&&(im(yi),yi=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Rt.current&1?$t===0&&($t=3):Hm())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return Es(),Zp(t,e),t===null&&ol(e.stateNode.containerInfo),fn(e),null;case 10:return Cm(e.type._context),fn(e),null;case 17:return An(e.type)&&zc(),fn(e),null;case 19:if(Mt(Rt),r=e.memoizedState,r===null)return fn(e),null;if(i=(e.flags&128)!==0,s=r.rendering,s===null)if(i)Bo(r,!1);else{if($t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=$c(t),s!==null){for(e.flags|=128,Bo(r,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)r=n,t=i,r.flags&=14680066,s=r.alternate,s===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=s.childLanes,r.lanes=s.lanes,r.child=s.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=s.memoizedProps,r.memoizedState=s.memoizedState,r.updateQueue=s.updateQueue,r.type=s.type,t=s.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Rt,Rt.current&1|2),e.child}t=t.sibling}r.tail!==null&&Vt()>Rs&&(e.flags|=128,i=!0,Bo(r,!1),e.lanes=4194304)}else{if(!i)if(t=$c(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!Ct)return fn(e),null}else 2*Vt()-r.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,i=!0,Bo(r,!1),e.lanes=4194304);r.isBackwards?(s.sibling=e.child,e.child=s):(n=r.last,n!==null?n.sibling=s:e.child=s,r.last=s)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Vt(),e.sibling=null,n=Rt.current,yt(Rt,i?n&1|2:n&1),e):(fn(e),null);case 22:case 23:return Vm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Qb(t,e){switch(_m(e),e.tag){case 1:return An(e.type)&&zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),Mt(In),Mt(pn),Tm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Em(e),null;case 13:if(Mt(Rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Rt),null;case 4:return Es(),null;case 10:return Cm(e.type._context),null;case 22:case 23:return Vm(),null;case 24:return null;default:return null}}var vc=!1,hn=!1,eC=typeof WeakSet=="function"?WeakSet:Set,Re=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Bt(t,e,i)}else n.current=null}function jp(t,e,n){try{n()}catch(i){Bt(t,e,i)}}var ty=!1;function tC(t,e){if(kp=Nc,t=jy(),vm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,d=0,p=t,f=null;t:for(;;){for(var g;p!==n||a!==0&&p.nodeType!==3||(o=s+a),p!==r||i!==0&&p.nodeType!==3||(l=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===n&&++u===a&&(o=s),f===r&&++d===i&&(l=s),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dp={focusedElem:t,selectionRange:n},Nc=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,x=y.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?w:gi(e.type,w),x);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(M){Bt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return y=ty,ty=!1,y}function jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var r=a.destroy;a.destroy=void 0,r!==void 0&&jp(e,n,r)}a=a.next}while(a!==i)}}function ud(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xv(t){var e=t.alternate;e!==null&&(t.alternate=null,Xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ni],delete e[ul],delete e[Bp],delete e[Bb],delete e[Ub])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $v(t){return t.tag===5||t.tag===3||t.tag===4}function ny(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oc));else if(i!==4&&(t=t.child,t!==null))for(Jp(t,e,n),t=t.sibling;t!==null;)Jp(t,e,n),t=t.sibling}function Qp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qp(t,e,n),t=t.sibling;t!==null;)Qp(t,e,n),t=t.sibling}var tn=null,xi=!1;function Ea(t,e,n){for(n=n.child;n!==null;)Yv(t,e,n),n=n.sibling}function Yv(t,e,n){if(Bi&&typeof Bi.onCommitFiberUnmount=="function")try{Bi.onCommitFiberUnmount(td,n)}catch{}switch(n.tag){case 5:hn||xs(n,e);case 6:var i=tn,a=xi;tn=null,Ea(t,e,n),tn=i,xi=a,tn!==null&&(xi?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(xi?(t=tn,n=n.stateNode,t.nodeType===8?np(t.parentNode,n):t.nodeType===1&&np(t,n),al(t)):np(tn,n.stateNode));break;case 4:i=tn,a=xi,tn=n.stateNode.containerInfo,xi=!0,Ea(t,e,n),tn=i,xi=a;break;case 0:case 11:case 14:case 15:if(!hn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var r=a,s=r.destroy;r=r.tag,s!==void 0&&(r&2||r&4)&&jp(n,e,s),a=a.next}while(a!==i)}Ea(t,e,n);break;case 1:if(!hn&&(xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Bt(n,e,o)}Ea(t,e,n);break;case 21:Ea(t,e,n);break;case 22:n.mode&1?(hn=(i=hn)||n.memoizedState!==null,Ea(t,e,n),hn=i):Ea(t,e,n);break;default:Ea(t,e,n)}}function iy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eC),e.forEach(function(i){var a=cC.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}}function mi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:tn=o.stateNode,xi=!1;break e;case 3:tn=o.stateNode.containerInfo,xi=!0;break e;case 4:tn=o.stateNode.containerInfo,xi=!0;break e}o=o.return}if(tn===null)throw Error(ce(160));Yv(r,s,a),tn=null,xi=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){Bt(a,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zv(e,t),e=e.sibling}function Zv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mi(e,t),Di(t),i&4){try{jo(3,t,t.return),ud(3,t)}catch(w){Bt(t,t.return,w)}try{jo(5,t,t.return)}catch(w){Bt(t,t.return,w)}}break;case 1:mi(e,t),Di(t),i&512&&n!==null&&xs(n,n.return);break;case 5:if(mi(e,t),Di(t),i&512&&n!==null&&xs(n,n.return),t.flags&32){var a=t.stateNode;try{el(a,"")}catch(w){Bt(t,t.return,w)}}if(i&4&&(a=t.stateNode,a!=null)){var r=t.memoizedProps,s=n!==null?n.memoizedProps:r,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&xy(a,r),wp(o,s);var u=wp(o,r);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?My(a,p):d==="dangerouslySetInnerHTML"?Sy(a,p):d==="children"?el(a,p):sm(a,d,p,u)}switch(o){case"input":yp(a,r);break;case"textarea":yy(a,r);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?vs(a,!!r.multiple,g,!1):f!==!!r.multiple&&(r.defaultValue!=null?vs(a,!!r.multiple,r.defaultValue,!0):vs(a,!!r.multiple,r.multiple?[]:"",!1))}a[ul]=r}catch(w){Bt(t,t.return,w)}}break;case 6:if(mi(e,t),Di(t),i&4){if(t.stateNode===null)throw Error(ce(162));a=t.stateNode,r=t.memoizedProps;try{a.nodeValue=r}catch(w){Bt(t,t.return,w)}}break;case 3:if(mi(e,t),Di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{al(e.containerInfo)}catch(w){Bt(t,t.return,w)}break;case 4:mi(e,t),Di(t);break;case 13:mi(e,t),Di(t),a=t.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(Om=Vt())),i&4&&iy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(hn=(u=hn)||d,mi(e,t),hn=u):mi(e,t),Di(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Re=t,d=t.child;d!==null;){for(p=Re=d;Re!==null;){switch(f=Re,g=f.child,f.tag){case 0:case 11:case 14:case 15:jo(4,f,f.return);break;case 1:xs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Bt(i,n,w)}}break;case 5:xs(f,f.return);break;case 22:if(f.memoizedState!==null){ry(p);continue}}g!==null?(g.return=f,Re=g):ry(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,u?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=_y("display",s))}catch(w){Bt(t,t.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Bt(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:mi(e,t),Di(t),i&4&&iy(t);break;case 21:break;default:mi(e,t),Di(t)}}function Di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($v(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(el(a,""),i.flags&=-33);var r=ny(t);Qp(t,r,a);break;case 3:case 4:var s=i.stateNode.containerInfo,o=ny(t);Jp(t,o,s);break;default:throw Error(ce(161))}}catch(l){Bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nC(t,e,n){Re=t,jv(t,e,n)}function jv(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var a=Re,r=a.child;if(a.tag===22&&i){var s=a.memoizedState!==null||vc;if(!s){var o=a.alternate,l=o!==null&&o.memoizedState!==null||hn;o=vc;var u=hn;if(vc=s,(hn=l)&&!u)for(Re=a;Re!==null;)s=Re,l=s.child,s.tag===22&&s.memoizedState!==null?sy(a):l!==null?(l.return=s,Re=l):sy(a);for(;r!==null;)Re=r,jv(r,e,n),r=r.sibling;Re=a,vc=o,hn=u}ay(t,e,n)}else a.subtreeFlags&8772&&r!==null?(r.return=a,Re=r):ay(t,e,n)}}function ay(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:hn||ud(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!hn)if(n===null)i.componentDidMount();else{var a=e.elementType===e.type?n.memoizedProps:gi(e.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&Hx(e,r,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hx(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&al(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}hn||e.flags&512&&Kp(e)}catch(f){Bt(e,e.return,f)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function ry(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function sy(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ud(4,e)}catch(l){Bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var a=e.return;try{i.componentDidMount()}catch(l){Bt(e,a,l)}}var r=e.return;try{Kp(e)}catch(l){Bt(e,r,l)}break;case 5:var s=e.return;try{Kp(e)}catch(l){Bt(e,s,l)}}}catch(l){Bt(e,e.return,l)}if(e===t){Re=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Re=o;break}Re=e.return}}var iC=Math.ceil,jc=ua.ReactCurrentDispatcher,Bm=ua.ReactCurrentOwner,ri=ua.ReactCurrentBatchConfig,it=0,Jt=null,Wt=null,nn=0,On=0,ys=$a(0),$t=0,ml=null,Pr=0,cd=0,Um=0,Ko=null,Cn=null,Om=0,Rs=1/0,ea=null,Kc=!1,em=null,Va=null,Sc=!1,Fa=null,Jc=0,Jo=0,tm=null,Ac=-1,Ec=0;function _n(){return it&6?Vt():Ac!==-1?Ac:Ac=Vt()}function Ha(t){return t.mode&1?it&2&&nn!==0?nn&-nn:zb.transition!==null?(Ec===0&&(Ec=Dy()),Ec):(t=ut,t!==0||(t=window.event,t=t===void 0?16:Vy(t.type)),t):1}function Si(t,e,n,i){if(50<Jo)throw Jo=0,tm=null,Error(ce(185));gl(t,n,i),(!(it&2)||t!==Jt)&&(t===Jt&&(!(it&2)&&(cd|=n),$t===4&&ka(t,nn)),En(t,i),n===1&&it===0&&!(e.mode&1)&&(Rs=Vt()+500,sd&&Ya()))}function En(t,e){var n=t.callbackNode;Hw(t,e);var i=Fc(t,t===Jt?nn:0);if(i===0)n!==null&&px(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&px(n),e===1)t.tag===0?Ob(oy.bind(null,t)):sv(oy.bind(null,t)),Fb(function(){!(it&6)&&Ya()}),n=null;else{switch(Fy(i)){case 1:n=dm;break;case 4:n=Py;break;case 16:n=Dc;break;case 536870912:n=ky;break;default:n=Dc}n=aS(n,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kv(t,e){if(Ac=-1,Ec=0,it&6)throw Error(ce(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var i=Fc(t,t===Jt?nn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Qc(t,i);else{e=i;var a=it;it|=2;var r=Qv();(Jt!==t||nn!==e)&&(ea=null,Rs=Vt()+500,Ir(t,e));do try{sC();break}catch(o){Jv(t,o)}while(!0);bm(),jc.current=r,it=a,Wt!==null?e=0:(Jt=null,nn=0,e=$t)}if(e!==0){if(e===2&&(a=Ap(t),a!==0&&(i=a,e=nm(t,a))),e===1)throw n=ml,Ir(t,0),ka(t,i),En(t,Vt()),n;if(e===6)ka(t,i);else{if(a=t.current.alternate,!(i&30)&&!aC(a)&&(e=Qc(t,i),e===2&&(r=Ap(t),r!==0&&(i=r,e=nm(t,r))),e===1))throw n=ml,Ir(t,0),ka(t,i),En(t,Vt()),n;switch(t.finishedWork=a,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:wr(t,Cn,ea);break;case 3:if(ka(t,i),(i&130023424)===i&&(e=Om+500-Vt(),10<e)){if(Fc(t,0)!==0)break;if(a=t.suspendedLanes,(a&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&a;break}t.timeoutHandle=Np(wr.bind(null,t,Cn,ea),e);break}wr(t,Cn,ea);break;case 4:if(ka(t,i),(i&4194240)===i)break;for(e=t.eventTimes,a=-1;0<i;){var s=31-vi(i);r=1<<s,s=e[s],s>a&&(a=s),i&=~r}if(i=a,i=Vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*iC(i/1960))-i,10<i){t.timeoutHandle=Np(wr.bind(null,t,Cn,ea),i);break}wr(t,Cn,ea);break;case 5:wr(t,Cn,ea);break;default:throw Error(ce(329))}}}return En(t,Vt()),t.callbackNode===n?Kv.bind(null,t):null}function nm(t,e){var n=Ko;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Qc(t,e),t!==2&&(e=Cn,Cn=n,e!==null&&im(e)),t}function im(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function aC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!_i(r(),a))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ka(t,e){for(e&=~Um,e&=~cd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vi(e),i=1<<n;t[n]=-1,e&=~i}}function oy(t){if(it&6)throw Error(ce(327));bs();var e=Fc(t,0);if(!(e&1))return En(t,Vt()),null;var n=Qc(t,e);if(t.tag!==0&&n===2){var i=Ap(t);i!==0&&(e=i,n=nm(t,i))}if(n===1)throw n=ml,Ir(t,0),ka(t,e),En(t,Vt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,Cn,ea),En(t,Vt()),null}function zm(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(Rs=Vt()+500,sd&&Ya())}}function kr(t){Fa!==null&&Fa.tag===0&&!(it&6)&&bs();var e=it;it|=1;var n=ri.transition,i=ut;try{if(ri.transition=null,ut=1,t)return t()}finally{ut=i,ri.transition=n,it=e,!(it&6)&&Ya()}}function Vm(){On=ys.current,Mt(ys)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Db(n)),Wt!==null)for(n=Wt.return;n!==null;){var i=n;switch(_m(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zc();break;case 3:Es(),Mt(In),Mt(pn),Tm();break;case 5:Em(i);break;case 4:Es();break;case 13:Mt(Rt);break;case 19:Mt(Rt);break;case 10:Cm(i.type._context);break;case 22:case 23:Vm()}n=n.return}if(Jt=t,Wt=t=Ga(t.current,null),nn=On=e,$t=0,ml=null,Um=cd=Pr=0,Cn=Ko=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var a=i.next,r=n.pending;if(r!==null){var s=r.next;r.next=a,i.next=s}n.pending=i}Cr=null}return t}function Jv(t,e){do{var n=Wt;try{if(bm(),Cc.current=Zc,Yc){for(var i=Pt.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Yc=!1}if(Rr=0,Kt=Xt=Pt=null,Zo=!1,fl=0,Bm.current=null,n===null||n.return===null){$t=1,ml=e,Wt=null;break}e:{var r=t,s=n.return,o=n,l=e;if(e=nn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Yx(s);if(g!==null){g.flags&=-257,Zx(g,s,o,r,e),g.mode&1&&$x(r,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){$x(r,u,e),Hm();break e}l=Error(ce(426))}}else if(Ct&&o.mode&1){var x=Yx(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Zx(x,s,o,r,e),Mm(Ts(l,o));break e}}r=l=Ts(l,o),$t!==4&&($t=2),Ko===null?Ko=[r]:Ko.push(r),r=s;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var h=Fv(r,l,e);Vx(r,h);break e;case 1:o=l;var v=r.type,C=r.stateNode;if(!(r.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Va===null||!Va.has(C)))){r.flags|=65536,e&=-e,r.lanes|=e;var M=Nv(r,o,e);Vx(r,M);break e}}r=r.return}while(r!==null)}tS(n)}catch(b){e=b,Wt===n&&n!==null&&(Wt=n=n.return);continue}break}while(!0)}function Qv(){var t=jc.current;return jc.current=Zc,t===null?Zc:t}function Hm(){($t===0||$t===3||$t===2)&&($t=4),Jt===null||!(Pr&268435455)&&!(cd&268435455)||ka(Jt,nn)}function Qc(t,e){var n=it;it|=2;var i=Qv();(Jt!==t||nn!==e)&&(ea=null,Ir(t,e));do try{rC();break}catch(a){Jv(t,a)}while(!0);if(bm(),it=n,jc.current=i,Wt!==null)throw Error(ce(261));return Jt=null,nn=0,$t}function rC(){for(;Wt!==null;)eS(Wt)}function sC(){for(;Wt!==null&&!kw();)eS(Wt)}function eS(t){var e=iS(t.alternate,t,On);t.memoizedProps=t.pendingProps,e===null?tS(t):Wt=e,Bm.current=null}function tS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qb(n,e),n!==null){n.flags&=32767,Wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Wt=null;return}}else if(n=Jb(n,e,On),n!==null){Wt=n;return}if(e=e.sibling,e!==null){Wt=e;return}Wt=e=t}while(e!==null);$t===0&&($t=5)}function wr(t,e,n){var i=ut,a=ri.transition;try{ri.transition=null,ut=1,oC(t,e,n,i)}finally{ri.transition=a,ut=i}return null}function oC(t,e,n,i){do bs();while(Fa!==null);if(it&6)throw Error(ce(327));n=t.finishedWork;var a=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(Gw(t,r),t===Jt&&(Wt=Jt=null,nn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sc||(Sc=!0,aS(Dc,function(){return bs(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=ri.transition,ri.transition=null;var s=ut;ut=1;var o=it;it|=4,Bm.current=null,tC(t,n),Zv(n,t),Eb(Dp),Nc=!!kp,Dp=kp=null,t.current=n,nC(n,t,a),Dw(),it=o,ut=s,ri.transition=r}else t.current=n;if(Sc&&(Sc=!1,Fa=t,Jc=a),r=t.pendingLanes,r===0&&(Va=null),Bw(n.stateNode,i),En(t,Vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)a=e[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(Kc)throw Kc=!1,t=em,em=null,t;return Jc&1&&t.tag!==0&&bs(),r=t.pendingLanes,r&1?t===tm?Jo++:(Jo=0,tm=t):Jo=0,Ya(),null}function bs(){if(Fa!==null){var t=Fy(Jc),e=ri.transition,n=ut;try{if(ri.transition=null,ut=16>t?16:t,Fa===null)var i=!1;else{if(t=Fa,Fa=null,Jc=0,it&6)throw Error(ce(331));var a=it;for(it|=4,Re=t.current;Re!==null;){var r=Re,s=r.child;if(Re.flags&16){var o=r.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Re=u;Re!==null;){var d=Re;switch(d.tag){case 0:case 11:case 15:jo(8,d,r)}var p=d.child;if(p!==null)p.return=d,Re=p;else for(;Re!==null;){d=Re;var f=d.sibling,g=d.return;if(Xv(d),d===u){Re=null;break}if(f!==null){f.return=g,Re=f;break}Re=g}}}var y=r.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}Re=r}}if(r.subtreeFlags&2064&&s!==null)s.return=r,Re=s;else e:for(;Re!==null;){if(r=Re,r.flags&2048)switch(r.tag){case 0:case 11:case 15:jo(9,r,r.return)}var h=r.sibling;if(h!==null){h.return=r.return,Re=h;break e}Re=r.return}}var v=t.current;for(Re=v;Re!==null;){s=Re;var C=s.child;if(s.subtreeFlags&2064&&C!==null)C.return=s,Re=C;else e:for(s=v;Re!==null;){if(o=Re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ud(9,o)}}catch(b){Bt(o,o.return,b)}if(o===s){Re=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Re=M;break e}Re=o.return}}if(it=a,Ya(),Bi&&typeof Bi.onPostCommitFiberRoot=="function")try{Bi.onPostCommitFiberRoot(td,t)}catch{}i=!0}return i}finally{ut=n,ri.transition=e}}return!1}function ly(t,e,n){e=Ts(n,e),e=Fv(t,e,1),t=za(t,e,1),e=_n(),t!==null&&(gl(t,1,e),En(t,e))}function Bt(t,e,n){if(t.tag===3)ly(t,t,n);else for(;e!==null;){if(e.tag===3){ly(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Va===null||!Va.has(i))){t=Ts(n,t),t=Nv(e,t,1),e=za(e,t,1),t=_n(),e!==null&&(gl(e,1,t),En(e,t));break}}e=e.return}}function lC(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,Jt===t&&(nn&n)===n&&($t===4||$t===3&&(nn&130023424)===nn&&500>Vt()-Om?Ir(t,0):Um|=n),En(t,e)}function nS(t,e){e===0&&(t.mode&1?(e=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):e=1);var n=_n();t=oa(t,e),t!==null&&(gl(t,e,n),En(t,n))}function uC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nS(t,n)}function cC(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),nS(t,n)}var iS;iS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||In.current)Ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ln=!1,Kb(t,e,n);Ln=!!(t.flags&131072)}else Ln=!1,Ct&&e.flags&1048576&&ov(e,Gc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ic(t,e),t=e.pendingProps;var a=Ls(e,pn.current);ws(e,n),a=Pm(null,e,i,t,a,n);var r=km();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(r=!0,Vc(e)):r=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Im(e),a.updater=ld,e.stateNode=a,a._reactInternals=e,Gp(e,i,t,n),e=Xp(null,e,i,!0,r,n)):(e.tag=0,Ct&&r&&Sm(e),Sn(null,e,a,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ic(t,e),t=e.pendingProps,a=i._init,i=a(i._payload),e.type=i,a=e.tag=fC(i),t=gi(i,t),a){case 0:e=qp(null,e,i,t,n);break e;case 1:e=Jx(null,e,i,t,n);break e;case 11:e=jx(null,e,i,t,n);break e;case 14:e=Kx(null,e,i,gi(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:gi(i,a),qp(t,e,i,a,n);case 1:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:gi(i,a),Jx(t,e,i,a,n);case 3:e:{if(zv(e),t===null)throw Error(ce(387));i=e.pendingProps,r=e.memoizedState,a=r.element,hv(t,e),Xc(e,i,null,n);var s=e.memoizedState;if(i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){a=Ts(Error(ce(423)),e),e=Qx(t,e,i,n,a);break e}else if(i!==a){a=Ts(Error(ce(424)),e),e=Qx(t,e,i,n,a);break e}else for(zn=Oa(e.stateNode.containerInfo.firstChild),Vn=e,Ct=!0,yi=null,n=dv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),i===a){e=la(t,e,n);break e}Sn(t,e,i,n)}e=e.child}return e;case 5:return pv(e),t===null&&zp(e),i=e.type,a=e.pendingProps,r=t!==null?t.memoizedProps:null,s=a.children,Fp(i,a)?s=null:r!==null&&Fp(i,r)&&(e.flags|=32),Ov(t,e),Sn(t,e,s,n),e.child;case 6:return t===null&&zp(e),null;case 13:return Vv(t,e,n);case 4:return Am(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Sn(t,e,i,n),e.child;case 11:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:gi(i,a),jx(t,e,i,a,n);case 7:return Sn(t,e,e.pendingProps,n),e.child;case 8:return Sn(t,e,e.pendingProps.children,n),e.child;case 12:return Sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,a=e.pendingProps,r=e.memoizedProps,s=a.value,yt(Wc,i._currentValue),i._currentValue=s,r!==null)if(_i(r.value,s)){if(r.children===a.children&&!In.current){e=la(t,e,n);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){s=r.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(r.tag===1){l=aa(-1,n&-n),l.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Vp(r.return,n,e),o.lanes|=n;break}l=l.next}}else if(r.tag===10)s=r.type===e.type?null:r.child;else if(r.tag===18){if(s=r.return,s===null)throw Error(ce(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Vp(s,n,e),s=r.sibling}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===e){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}Sn(t,e,a.children,n),e=e.child}return e;case 9:return a=e.type,i=e.pendingProps.children,ws(e,n),a=si(a),i=i(a),e.flags|=1,Sn(t,e,i,n),e.child;case 14:return i=e.type,a=gi(i,e.pendingProps),a=gi(i.type,a),Kx(t,e,i,a,n);case 15:return Bv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:gi(i,a),Ic(t,e),e.tag=1,An(i)?(t=!0,Vc(e)):t=!1,ws(e,n),Dv(e,i,a),Gp(e,i,a,n),Xp(null,e,i,!0,t,n);case 19:return Hv(t,e,n);case 22:return Uv(t,e,n)}throw Error(ce(156,e.tag))};function aS(t,e){return Ry(t,e)}function dC(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,e,n,i){return new dC(t,e,n,i)}function Gm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fC(t){if(typeof t=="function")return Gm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lm)return 11;if(t===um)return 14}return 2}function Ga(t,e){var n=t.alternate;return n===null?(n=ai(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tc(t,e,n,i,a,r){var s=2;if(i=t,typeof t=="function")Gm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ls:return Ar(n.children,a,r,e);case om:s=8,a|=8;break;case hp:return t=ai(12,n,e,a|2),t.elementType=hp,t.lanes=r,t;case pp:return t=ai(13,n,e,a),t.elementType=pp,t.lanes=r,t;case mp:return t=ai(19,n,e,a),t.elementType=mp,t.lanes=r,t;case py:return dd(n,a,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fy:s=10;break e;case hy:s=9;break e;case lm:s=11;break e;case um:s=14;break e;case Ta:s=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=ai(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function Ar(t,e,n,i){return t=ai(7,t,i,e),t.lanes=n,t}function dd(t,e,n,i){return t=ai(22,t,i,e),t.elementType=py,t.lanes=n,t.stateNode={isHidden:!1},t}function cp(t,e,n){return t=ai(6,t,null,e),t.lanes=n,t}function dp(t,e,n){return e=ai(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hC(t,e,n,i,a){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yh(0),this.expirationTimes=Yh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yh(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Wm(t,e,n,i,a,r,s,o,l){return t=new hC(t,e,n,o,l),e===1?(e=1,r===!0&&(e|=8)):e=0,r=ai(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Im(r),t}function pC(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function rS(t){if(!t)return qa;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(An(n))return rv(t,n,e)}return e}function sS(t,e,n,i,a,r,s,o,l){return t=Wm(n,i,!0,t,a,r,s,o,l),t.context=rS(null),n=t.current,i=_n(),a=Ha(n),r=aa(i,a),r.callback=e??null,za(n,r,a),t.current.lanes=a,gl(t,a,i),En(t,i),t}function fd(t,e,n,i){var a=e.current,r=_n(),s=Ha(a);return n=rS(n),e.context===null?e.context=n:e.pendingContext=n,e=aa(r,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=za(a,e,s),t!==null&&(Si(t,a,s,r),bc(t,a,s)),s}function ed(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qm(t,e){uy(t,e),(t=t.alternate)&&uy(t,e)}function mC(){return null}var oS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xm(t){this._internalRoot=t}hd.prototype.render=Xm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));fd(t,e,null,null)};hd.prototype.unmount=Xm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){fd(null,t,null,null)}),e[sa]=null}};function hd(t){this._internalRoot=t}hd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pa.length&&e!==0&&e<Pa[n].priority;n++);Pa.splice(n,0,t),n===0&&zy(t)}};function $m(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cy(){}function gC(t,e,n,i,a){if(a){if(typeof i=="function"){var r=i;i=function(){var u=ed(s);r.call(u)}}var s=sS(e,i,t,0,null,!1,!1,"",cy);return t._reactRootContainer=s,t[sa]=s.current,ol(t.nodeType===8?t.parentNode:t),kr(),s}for(;a=t.lastChild;)t.removeChild(a);if(typeof i=="function"){var o=i;i=function(){var u=ed(l);o.call(u)}}var l=Wm(t,0,!1,null,null,!1,!1,"",cy);return t._reactRootContainer=l,t[sa]=l.current,ol(t.nodeType===8?t.parentNode:t),kr(function(){fd(e,l,n,i)}),l}function md(t,e,n,i,a){var r=n._reactRootContainer;if(r){var s=r;if(typeof a=="function"){var o=a;a=function(){var l=ed(s);o.call(l)}}fd(e,s,t,a)}else s=gC(n,e,t,a,i);return ed(s)}Ny=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(fm(e,n|1),En(e,Vt()),!(it&6)&&(Rs=Vt()+500,Ya()))}break;case 13:kr(function(){var i=oa(t,1);if(i!==null){var a=_n();Si(i,t,1,a)}}),qm(t,1)}};hm=function(t){if(t.tag===13){var e=oa(t,134217728);if(e!==null){var n=_n();Si(e,t,134217728,n)}qm(t,134217728)}};By=function(t){if(t.tag===13){var e=Ha(t),n=oa(t,e);if(n!==null){var i=_n();Si(n,t,e,i)}qm(t,e)}};Uy=function(){return ut};Oy=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Cp=function(t,e,n){switch(e){case"input":if(yp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=rd(i);if(!a)throw Error(ce(90));gy(i),yp(i,a)}}}break;case"textarea":yy(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};Cy=zm;Ly=kr;var xC={usingClientEntryPoint:!1,Events:[yl,fs,rd,wy,by,zm]},Uo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yC={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ey(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||mC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Oo.isDisabled&&Oo.supportsFiber))try{td=Oo.inject(yC),Bi=Oo}catch{}var Oo;Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xC;Wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$m(e))throw Error(ce(200));return pC(t,e,null,n)};Wn.createRoot=function(t,e){if(!$m(t))throw Error(ce(299));var n=!1,i="",a=oS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Wm(t,1,!1,null,null,n,!1,i,a),t[sa]=e.current,ol(t.nodeType===8?t.parentNode:t),new Xm(e)};Wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Ey(e),t=t===null?null:t.stateNode,t};Wn.flushSync=function(t){return kr(t)};Wn.hydrate=function(t,e,n){if(!pd(e))throw Error(ce(200));return md(null,t,e,!0,n)};Wn.hydrateRoot=function(t,e,n){if(!$m(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,a=!1,r="",s=oS;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=sS(e,null,t,1,n??null,a,!1,r,s),t[sa]=e.current,ol(t),i)for(t=0;t<i.length;t++)n=i[t],a=n._getVersion,a=a(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,a]:e.mutableSourceEagerHydrationData.push(n,a);return new hd(e)};Wn.render=function(t,e,n){if(!pd(e))throw Error(ce(200));return md(null,t,e,!1,n)};Wn.unmountComponentAtNode=function(t){if(!pd(t))throw Error(ce(40));return t._reactRootContainer?(kr(function(){md(null,null,t,!1,function(){t._reactRootContainer=null,t[sa]=null})}),!0):!1};Wn.unstable_batchedUpdates=zm;Wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pd(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return md(t,e,n,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426"});var dS=Qi((xP,cS)=>{"use strict";function uS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uS)}catch(t){console.error(t)}}uS(),cS.exports=lS()});var hS=Qi(Ym=>{"use strict";var fS=dS();Ym.createRoot=fS.createRoot,Ym.hydrateRoot=fS.hydrateRoot;var yP});var mS=Qi(gd=>{"use strict";var vC=Ia(),SC=Symbol.for("react.element"),_C=Symbol.for("react.fragment"),MC=Object.prototype.hasOwnProperty,wC=vC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bC={key:!0,ref:!0,__self:!0,__source:!0};function pS(t,e,n){var i,a={},r=null,s=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)MC.call(e,i)&&!bC.hasOwnProperty(i)&&(a[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)a[i]===void 0&&(a[i]=e[i]);return{$$typeof:SC,type:t,key:r,ref:s,props:a,_owner:wC.current}}gd.Fragment=_C;gd.jsx=pS;gd.jsxs=pS});var Sl=Qi((_P,gS)=>{"use strict";gS.exports=mS()});function CC(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function LC(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function El(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function g_(){let t=El("canvas");return t.style.display="block",t}function jg(...t){let e="THREE."+t.shift();Zs?Zs("log",e,...t):console.log(e,...t)}function x_(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ve(...t){t=x_(t);let e="THREE."+t.shift();if(Zs)Zs("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ze(...t){t=x_(t);let e="THREE."+t.shift();if(Zs)Zs("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Vr(...t){let e=t.join(" ");e in xS||(xS[e]=!0,Ve(...t))}function y_(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function nu(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[t&255]+mn[t>>8&255]+mn[t>>16&255]+mn[t>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function IC(t,e){return(t%e+e)%e}function jm(t,e,n){return(1-n)*t+n*e}function _l(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function AC(){let t={enabled:!0,workingColorSpace:Il,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===lt&&(a.r=ma(a.r),a.g=ma(a.g),a.b=ma(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===lt&&(a.r=Xs(a.r),a.g=Xs(a.g),a.b=Xs(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===va?Al:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Il]:{primaries:e,whitePoint:i,transfer:Al,toXYZ:vS,fromXYZ:SS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:vS,fromXYZ:SS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),t}function ma(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function Qm(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}function ng(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function cg(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Br.fromArray(t,r);let o=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),l=e.dot(Br),u=n.dot(Br),d=i.dot(Br);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}function HC(t,e,n,i,a,r,s,o){let l;if(e.side===on?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===ga,o),l===null)return null;Rd.copy(o),Rd.applyMatrix4(t.matrixWorld);let u=n.ray.origin.distanceTo(Rd);return u<n.near||u>n.far?null:{distance:u,point:Rd.clone(),object:t}}function Pd(t,e,n,i,a,r,s,o,l,u){t.getVertexPosition(o,Id),t.getVertexPosition(l,Ad),t.getVertexPosition(u,Ed);let d=HC(t,e,n,i,Id,Ad,Ed,RS);if(d){let p=new W;tr.getBarycoord(RS,Id,Ad,Ed,p),a&&(d.uv=tr.getInterpolatedAttribute(a,o,l,u,p,new Ye)),r&&(d.uv1=tr.getInterpolatedAttribute(r,o,l,u,p,new Ye)),s&&(d.normal=tr.getInterpolatedAttribute(s,o,l,u,p,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c:u,normal:new W,materialIndex:0};tr.getNormal(Id,Ad,Ed,f.normal),d.face=f,d.barycoord=p}return d}function Xr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let a=t[n][i];if(PS(a))a.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(PS(a[0])){let r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function yn(t){let e={};for(let n=0;n<t.length;n++){let i=Xr(t[n]);for(let a in i)e[a]=i[a]}return e}function PS(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function XC(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Kg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}function Dd(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function US(t,e){return t.distance-e.distance}function Ag(t,e,n,i){let a=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(a=!1),a===!0&&i===!0){let r=t.children;for(let s=0,o=r.length;s<o;s++)Ag(r[s],e,n,!0)}}function e0(t,e,n,i){let a=iL(i);switch(n){case Xg:return t*e;case Yg:return t*e/a.components*a.byteLength;case Lf:return t*e/a.components*a.byteLength;case fr:return t*e*2/a.components*a.byteLength;case If:return t*e*2/a.components*a.byteLength;case $g:return t*e*3/a.components*a.byteLength;case ui:return t*e*4/a.components*a.byteLength;case Af:return t*e*4/a.components*a.byteLength;case jl:case Kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jl:case Ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tf:case Pf:return Math.max(t,16)*Math.max(e,8)/4;case Ef:case Rf:return Math.max(t,8)*Math.max(e,8)/2;case kf:case Df:case Nf:case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ff:case eu:case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qf:case eh:case th:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tu:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iL(t){switch(t){case kn:case Hg:return{byteLength:1,components:1};case ro:case Gg:case $i:return{byteLength:2,components:1};case bf:case Cf:return{byteLength:2,components:4};case Ei:case wf:case Ti:return{byteLength:4,components:1};case Wg:case qg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var yf,OS,Tg,zS,Xl,vf,ao,ga,on,qi,Xi,Hr,Rg,Pg,kg,VS,nr,HS,GS,WS,qS,XS,$S,YS,ZS,Ud,Od,jS,KS,JS,QS,e_,t_,n_,i_,a_,zd,Vd,Hd,Gr,Gd,Wd,qd,Xd,Dg,r_,s_,Ai,Fg,Ng,Bg,$l,Ug,Og,zg,Vg,ur,qr,Sf,_f,Yl,$s,Vi,$d,en,o_,Zl,sn,Mf,cr,kn,Hg,Gg,ro,wf,Ei,Ti,$i,bf,Cf,so,Wg,qg,Xg,$g,ui,Hi,dr,Yg,Lf,fr,If,Af,jl,Kl,Jl,Ql,Ef,Tf,Rf,Pf,kf,Df,Ff,Nf,Bf,eu,Uf,Of,zf,Vf,Hf,Gf,Wf,qf,Xf,$f,Yf,Zf,jf,Kf,Jf,Qf,eh,th,nh,ih,tu,ah,Ll,Yd,Bd,vg,Sg,_g,Mg,l_,rh,u_,va,$n,Il,Al,lt,zr,wg,c_,d_,f_,sh,h_,p_,oh,m_,bg,Zg,Ci,Ys,xS,Zs,v_,Gi,mn,Zm,Zd,Ye,Wi,W,Km,yS,He,Jm,vS,SS,Qe,Ds,jd,EC,js,TC,eg,wn,It,Kd,Zn,Tl,Jd,Lt,Fs,Mi,RC,PC,Za,xd,qn,_S,MS,xa,Ks,kC,wS,Ns,ca,yd,Ml,DC,FC,bS,CS,LS,IS,NC,Bs,tg,xn,Li,BC,Js,S_,ja,vd,Ke,gn,Rl,wi,da,ig,fa,Us,Os,AS,ag,rg,sg,og,lg,ug,tr,ir,ha,bi,Sd,zs,Vs,Hs,Ka,Ja,Nr,wl,_d,Md,Br,qt,wd,UC,Yn,Pl,kl,Ht,OC,bl,dg,Qs,zC,li,fg,Gs,Xn,Cl,Qt,jn,VC,ar,pa,hg,bd,Qa,pg,Cd,mg,Dl,Wr,ES,Ur,Ld,TS,Id,Ad,Ed,gg,Td,RS,Rd,rt,Qd,xg,GC,WC,zi,Or,qC,kd,eo,Fl,Nl,ya,ef,Bl,Rn,Ul,Ii,Ol,zl,rr,__,$C,YC,Kn,tf,Pn,nf,af,sr,rf,sf,of,lf,Jn,or,uf,cf,df,Vl,lr,ff,hf,M_,pf,to,Hl,yg,kS,DS,mf,Fd,Nd,Oi,Gl,er,FS,NS,rn,Cg,Wl,no,Lg,io,Ws,qs,gf,xf,Jg,ZC,Qg,jC,KC,JC,QC,eL,tL,nL,Ig,wt,MP,BS,ql,Eg,t0=ve(()=>{yf="185",OS=0,Tg=1,zS=2,Xl=1,vf=2,ao=3,ga=0,on=1,qi=2,Xi=0,Hr=1,Rg=2,Pg=3,kg=4,VS=5,nr=100,HS=101,GS=102,WS=103,qS=104,XS=200,$S=201,YS=202,ZS=203,Ud=204,Od=205,jS=206,KS=207,JS=208,QS=209,e_=210,t_=211,n_=212,i_=213,a_=214,zd=0,Vd=1,Hd=2,Gr=3,Gd=4,Wd=5,qd=6,Xd=7,Dg=0,r_=1,s_=2,Ai=0,Fg=1,Ng=2,Bg=3,$l=4,Ug=5,Og=6,zg=7,Vg=300,ur=301,qr=302,Sf=303,_f=304,Yl=306,$s=1e3,Vi=1001,$d=1002,en=1003,o_=1004,Zl=1005,sn=1006,Mf=1007,cr=1008,kn=1009,Hg=1010,Gg=1011,ro=1012,wf=1013,Ei=1014,Ti=1015,$i=1016,bf=1017,Cf=1018,so=1020,Wg=35902,qg=35899,Xg=1021,$g=1022,ui=1023,Hi=1026,dr=1027,Yg=1028,Lf=1029,fr=1030,If=1031,Af=1033,jl=33776,Kl=33777,Jl=33778,Ql=33779,Ef=35840,Tf=35841,Rf=35842,Pf=35843,kf=36196,Df=37492,Ff=37496,Nf=37488,Bf=37489,eu=37490,Uf=37491,Of=37808,zf=37809,Vf=37810,Hf=37811,Gf=37812,Wf=37813,qf=37814,Xf=37815,$f=37816,Yf=37817,Zf=37818,jf=37819,Kf=37820,Jf=37821,Qf=36492,eh=36494,th=36495,nh=36283,ih=36284,tu=36285,ah=36286,Ll=2300,Yd=2301,Bd=2302,vg=2303,Sg=2400,_g=2401,Mg=2402,l_=3200,rh=0,u_=1,va="",$n="srgb",Il="srgb-linear",Al="linear",lt="srgb",zr=7680,wg=519,c_=512,d_=513,f_=514,sh=515,h_=516,p_=517,oh=518,m_=519,bg=35044,Zg="300 es",Ci=2e3,Ys=2001;xS={},Zs=null;v_={[zd]:Vd,[Hd]:qd,[Gd]:Xd,[Gr]:Wd,[Vd]:zd,[qd]:Hd,[Xd]:Gd,[Wd]:Gr},Gi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let a=i[e];if(a!==void 0){let r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zm=Math.PI/180,Zd=180/Math.PI;Ye=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wi=class{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],u=i[a+1],d=i[a+2],p=i[a+3],f=r[s+0],g=r[s+1],y=r[s+2],w=r[s+3];if(p!==w||l!==f||u!==g||d!==y){let x=l*f+u*g+d*y+p*w;x<0&&(f=-f,g=-g,y=-y,w=-w,x=-x);let h=1-o;if(x<.9995){let v=Math.acos(x),C=Math.sin(v);h=Math.sin(h*v)/C,o=Math.sin(o*v)/C,l=l*h+f*o,u=u*h+g*o,d=d*h+y*o,p=p*h+w*o}else{l=l*h+f*o,u=u*h+g*o,d=d*h+y*o,p=p*h+w*o;let v=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=v,u*=v,d*=v,p*=v}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,r,s){let o=i[a],l=i[a+1],u=i[a+2],d=i[a+3],p=r[s],f=r[s+1],g=r[s+2],y=r[s+3];return e[n]=o*y+d*p+l*g-u*f,e[n+1]=l*y+d*f+u*p-o*g,e[n+2]=u*y+d*g+o*f-l*p,e[n+3]=d*y-o*p-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(a/2),p=o(r/2),f=l(i/2),g=l(a/2),y=l(r/2);switch(s){case"XYZ":this._x=f*d*p+u*g*y,this._y=u*g*p-f*d*y,this._z=u*d*y+f*g*p,this._w=u*d*p-f*g*y;break;case"YXZ":this._x=f*d*p+u*g*y,this._y=u*g*p-f*d*y,this._z=u*d*y-f*g*p,this._w=u*d*p+f*g*y;break;case"ZXY":this._x=f*d*p-u*g*y,this._y=u*g*p+f*d*y,this._z=u*d*y+f*g*p,this._w=u*d*p-f*g*y;break;case"ZYX":this._x=f*d*p-u*g*y,this._y=u*g*p+f*d*y,this._z=u*d*y-f*g*p,this._w=u*d*p+f*g*y;break;case"YZX":this._x=f*d*p+u*g*y,this._y=u*g*p+f*d*y,this._z=u*d*y-f*g*p,this._w=u*d*p-f*g*y;break;case"XZY":this._x=f*d*p-u*g*y,this._y=u*g*p-f*d*y,this._z=u*d*y+f*g*p,this._w=u*d*p+f*g*y;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],u=n[2],d=n[6],p=n[10],f=i+o+p;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-u)*g,this._z=(s-a)*g}else if(i>o&&i>p){let g=2*Math.sqrt(1+i-o-p);this._w=(d-l)/g,this._x=.25*g,this._y=(a+s)/g,this._z=(r+u)/g}else if(o>p){let g=2*Math.sqrt(1+o-i-p);this._w=(r-u)/g,this._x=(a+s)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+p-i-o);this._w=(s-a)/g,this._x=(r+u)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*o+a*u-r*l,this._y=a*d+s*l+r*o-i*u,this._z=r*d+s*u+i*l-a*o,this._w=s*d-i*o-a*l-r*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){let u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yS.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yS.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){let n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*a-o*i),d=2*(o*n-r*a),p=2*(r*i-s*n);return this.x=n+l*u+s*p-o*d,this.y=i+l*d+o*u-r*p,this.z=a+l*p+r*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Km.copy(this).projectOnVector(e),this.sub(Km)}reflect(e){return this.sub(Km.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Km=new W,yS=new Wi,He=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,a,r,s,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,u)}set(e,n,i,a,r,s,o,l,u){let d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],d=i[4],p=i[7],f=i[2],g=i[5],y=i[8],w=a[0],x=a[3],h=a[6],v=a[1],C=a[4],M=a[7],b=a[2],I=a[5],T=a[8];return r[0]=s*w+o*v+l*b,r[3]=s*x+o*C+l*I,r[6]=s*h+o*M+l*T,r[1]=u*w+d*v+p*b,r[4]=u*x+d*C+p*I,r[7]=u*h+d*M+p*T,r[2]=f*w+g*v+y*b,r[5]=f*x+g*C+y*I,r[8]=f*h+g*M+y*T,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*o*u-i*r*d+i*o*l+a*r*u-a*s*l}invert(){let e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*s-o*u,f=o*l-d*r,g=u*r-s*l,y=n*p+i*f+a*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/y;return e[0]=p*w,e[1]=(a*u-d*i)*w,e[2]=(o*i-a*s)*w,e[3]=f*w,e[4]=(d*n-a*l)*w,e[5]=(a*r-o*n)*w,e[6]=g*w,e[7]=(i*l-u*n)*w,e[8]=(s*n-i*r)*w,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){let l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-a*u,a*l,-a*(-u*s+l*o)+o+n,0,0,1),this}scale(e,n){return Vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jm.makeScale(e,n)),this}rotate(e){return Vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jm.makeRotation(-e)),this}translate(e,n){return Vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jm.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jm=new He,vS=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),SS=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe=AC();jd=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=El("canvas")),Ds.width=e.width,Ds.height=e.height;let a=Ds.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=El("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ma(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ma(n[i]/255)*255):n[i]=ma(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},EC=0,js=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EC++}),this.uuid=nu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Qm(a[s].image)):r.push(Qm(a[s]))}else r=Qm(a);i.url=r}return n||(e.images[this.uuid]=i),i}};TC=0,eg=new W,wn=class t extends Gi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Vi,a=Vi,r=sn,s=cr,o=ui,l=kn,u=t.DEFAULT_ANISOTROPY,d=va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TC++}),this.uuid=nu(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eg).x}get height(){return this.source.getSize(eg).y}get depth(){return this.source.getSize(eg).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Vg;wn.DEFAULT_ANISOTROPY=1;It=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r,l=e.elements,u=l[0],d=l[4],p=l[8],f=l[1],g=l[5],y=l[9],w=l[2],x=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-w)<.01&&Math.abs(y-x)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+w)<.1&&Math.abs(y+x)<.1&&Math.abs(u+g+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let C=(u+1)/2,M=(g+1)/2,b=(h+1)/2,I=(d+f)/4,T=(p+w)/4,S=(y+x)/4;return C>M&&C>b?C<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(C),a=I/i,r=T/i):M>b?M<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(M),i=I/a,r=S/a):b<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(b),i=T/r,a=S/r),this.set(i,a,r,n),this}let v=Math.sqrt((x-y)*(x-y)+(p-w)*(p-w)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(x-y)/v,this.y=(p-w)/v,this.z=(f-d)/v,this.w=Math.acos((u+g+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kd=class extends Gi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n),this.textures=[];let a={width:e,height:n,depth:i.depth},r=new wn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},e.textures[n].image);this.textures[n].source=new js(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Kd{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Tl=class extends wn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=en,this.minFilter=en,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jd=class extends wn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=en,this.minFilter=en,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lt=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,a,r,s,o,l,u,d,p,f,g,y,w,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,u,d,p,f,g,y,w,x)}set(e,n,i,a,r,s,o,l,u,d,p,f,g,y,w,x){let h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=a,h[1]=r,h[5]=s,h[9]=o,h[13]=l,h[2]=u,h[6]=d,h[10]=p,h[14]=f,h[3]=g,h[7]=y,h[11]=w,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,a=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),s=1/Fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),u=Math.sin(a),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=s*d,g=s*p,y=o*d,w=o*p;n[0]=l*d,n[4]=-l*p,n[8]=u,n[1]=g+y*u,n[5]=f-w*u,n[9]=-o*l,n[2]=w-f*u,n[6]=y+g*u,n[10]=s*l}else if(e.order==="YXZ"){let f=l*d,g=l*p,y=u*d,w=u*p;n[0]=f+w*o,n[4]=y*o-g,n[8]=s*u,n[1]=s*p,n[5]=s*d,n[9]=-o,n[2]=g*o-y,n[6]=w+f*o,n[10]=s*l}else if(e.order==="ZXY"){let f=l*d,g=l*p,y=u*d,w=u*p;n[0]=f-w*o,n[4]=-s*p,n[8]=y+g*o,n[1]=g+y*o,n[5]=s*d,n[9]=w-f*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){let f=s*d,g=s*p,y=o*d,w=o*p;n[0]=l*d,n[4]=y*u-g,n[8]=f*u+w,n[1]=l*p,n[5]=w*u+f,n[9]=g*u-y,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){let f=s*l,g=s*u,y=o*l,w=o*u;n[0]=l*d,n[4]=w-f*p,n[8]=y*p+g,n[1]=p,n[5]=s*d,n[9]=-o*d,n[2]=-u*d,n[6]=g*p+y,n[10]=f-w*p}else if(e.order==="XZY"){let f=s*l,g=s*u,y=o*l,w=o*u;n[0]=l*d,n[4]=-p,n[8]=u*d,n[1]=f*p+w,n[5]=s*d,n[9]=g*p-y,n[2]=y*p-g,n[6]=o*d,n[10]=w*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RC,e,PC)}lookAt(e,n,i){let a=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Za.crossVectors(i,qn),Za.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Za.crossVectors(i,qn)),Za.normalize(),xd.crossVectors(qn,Za),a[0]=Za.x,a[4]=xd.x,a[8]=qn.x,a[1]=Za.y,a[5]=xd.y,a[9]=qn.y,a[2]=Za.z,a[6]=xd.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],d=i[1],p=i[5],f=i[9],g=i[13],y=i[2],w=i[6],x=i[10],h=i[14],v=i[3],C=i[7],M=i[11],b=i[15],I=a[0],T=a[4],S=a[8],L=a[12],R=a[1],k=a[5],F=a[9],z=a[13],H=a[2],B=a[6],K=a[10],Z=a[14],U=a[3],Q=a[7],de=a[11],ue=a[15];return r[0]=s*I+o*R+l*H+u*U,r[4]=s*T+o*k+l*B+u*Q,r[8]=s*S+o*F+l*K+u*de,r[12]=s*L+o*z+l*Z+u*ue,r[1]=d*I+p*R+f*H+g*U,r[5]=d*T+p*k+f*B+g*Q,r[9]=d*S+p*F+f*K+g*de,r[13]=d*L+p*z+f*Z+g*ue,r[2]=y*I+w*R+x*H+h*U,r[6]=y*T+w*k+x*B+h*Q,r[10]=y*S+w*F+x*K+h*de,r[14]=y*L+w*z+x*Z+h*ue,r[3]=v*I+C*R+M*H+b*U,r[7]=v*T+C*k+M*B+b*Q,r[11]=v*S+C*F+M*K+b*de,r[15]=v*L+C*z+M*Z+b*ue,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],f=e[10],g=e[14],y=e[3],w=e[7],x=e[11],h=e[15],v=l*g-u*f,C=o*g-u*p,M=o*f-l*p,b=s*g-u*d,I=s*f-l*d,T=s*p-o*d;return n*(w*v-x*C+h*M)-i*(y*v-x*b+h*I)+a*(y*C-w*b+h*T)-r*(y*M-w*I+x*T)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return n*(s*d-o*u)-i*(r*d-o*l)+a*(r*u-s*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],f=e[10],g=e[11],y=e[12],w=e[13],x=e[14],h=e[15],v=n*o-i*s,C=n*l-a*s,M=n*u-r*s,b=i*l-a*o,I=i*u-r*o,T=a*u-r*l,S=d*w-p*y,L=d*x-f*y,R=d*h-g*y,k=p*x-f*w,F=p*h-g*w,z=f*h-g*x,H=v*z-C*F+M*k+b*R-I*L+T*S;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/H;return e[0]=(o*z-l*F+u*k)*B,e[1]=(a*F-i*z-r*k)*B,e[2]=(w*T-x*I+h*b)*B,e[3]=(f*I-p*T-g*b)*B,e[4]=(l*R-s*z-u*L)*B,e[5]=(n*z-a*R+r*L)*B,e[6]=(x*M-y*T-h*C)*B,e[7]=(d*T-f*M+g*C)*B,e[8]=(s*F-o*R+u*S)*B,e[9]=(i*R-n*F-r*S)*B,e[10]=(y*I-w*M+h*v)*B,e[11]=(p*M-d*I-g*v)*B,e[12]=(o*L-s*k-l*S)*B,e[13]=(n*k-i*L+a*S)*B,e[14]=(w*C-y*b-x*v)*B,e[15]=(d*b-p*C+f*v)*B,this}scale(e){let n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,u=r*s,d=r*o;return this.set(u*s+i,u*o-a*l,u*l+a*o,0,u*o+a*l,d*o+i,d*l-a*s,0,u*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){let a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,u=r+r,d=s+s,p=o+o,f=r*u,g=r*d,y=r*p,w=s*d,x=s*p,h=o*p,v=l*u,C=l*d,M=l*p,b=i.x,I=i.y,T=i.z;return a[0]=(1-(w+h))*b,a[1]=(g+M)*b,a[2]=(y-C)*b,a[3]=0,a[4]=(g-M)*I,a[5]=(1-(f+h))*I,a[6]=(x+v)*I,a[7]=0,a[8]=(y+C)*T,a[9]=(x-v)*T,a[10]=(1-(f+w))*T,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=Fs.set(a[0],a[1],a[2]).length(),o=Fs.set(a[4],a[5],a[6]).length(),l=Fs.set(a[8],a[9],a[10]).length();r<0&&(s=-s),Mi.copy(this);let u=1/s,d=1/o,p=1/l;return Mi.elements[0]*=u,Mi.elements[1]*=u,Mi.elements[2]*=u,Mi.elements[4]*=d,Mi.elements[5]*=d,Mi.elements[6]*=d,Mi.elements[8]*=p,Mi.elements[9]*=p,Mi.elements[10]*=p,n.setFromRotationMatrix(Mi),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=Ci,l=!1){let u=this.elements,d=2*r/(n-e),p=2*r/(i-a),f=(n+e)/(n-e),g=(i+a)/(i-a),y,w;if(l)y=r/(s-r),w=s*r/(s-r);else if(o===Ci)y=-(s+r)/(s-r),w=-2*s*r/(s-r);else if(o===Ys)y=-s/(s-r),w=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=w,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Ci,l=!1){let u=this.elements,d=2/(n-e),p=2/(i-a),f=-(n+e)/(n-e),g=-(i+a)/(i-a),y,w;if(l)y=1/(s-r),w=s/(s-r);else if(o===Ci)y=-2/(s-r),w=-(s+r)/(s-r);else if(o===Ys)y=-1/(s-r),w=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=y,u[14]=w,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Fs=new W,Mi=new Lt,RC=new W(0,0,0),PC=new W(1,1,1),Za=new W,xd=new W,qn=new W,_S=new Lt,MS=new Wi,xa=class t{constructor(e=0,n=0,i=0,a=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],u=a[5],d=a[9],p=a[2],f=a[6],g=a[10];switch(n){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _S.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_S,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return MS.setFromEuler(this),this.setFromQuaternion(MS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xa.DEFAULT_ORDER="XYZ";Ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kC=0,wS=new W,Ns=new Wi,ca=new Lt,yd=new W,Ml=new W,DC=new W,FC=new Wi,bS=new W(1,0,0),CS=new W(0,1,0),LS=new W(0,0,1),IS={type:"added"},NC={type:"removed"},Bs={type:"childadded",child:null},tg={type:"childremoved",child:null},xn=class t extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kC++}),this.uuid=nu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new W,n=new xa,i=new Wi,a=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Lt},normalMatrix:{value:new He}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(bS,e)}rotateY(e){return this.rotateOnAxis(CS,e)}rotateZ(e){return this.rotateOnAxis(LS,e)}translateOnAxis(e,n){return wS.copy(e).applyQuaternion(this.quaternion),this.position.add(wS.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bS,e)}translateY(e){return this.translateOnAxis(CS,e)}translateZ(e){return this.translateOnAxis(LS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yd.copy(e):yd.set(e,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Ml,yd,this.up):ca.lookAt(yd,Ml,this.up),this.quaternion.setFromRotationMatrix(ca),a&&(ca.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(ca),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(IS),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NC),tg.child=e,this.dispatchEvent(tg),tg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(IS),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,DC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,FC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let p=l[u];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){let o=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),p=s(e.shapes),f=s(e.skeletons),g=s(e.animations),y=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=a,i;function s(o){let l=[];for(let u in o){let d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}};xn.DEFAULT_UP=new W(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Li=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},BC={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(let w of e.hand.values()){let x=n.getJointPose(w,i),h=this._getHandJoint(u,w);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}let d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),g=.02,y=.005;u.inputState.pinching&&f>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BC)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},vd={h:0,s:0,l:0};Ke=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Qe.workingColorSpace){if(e=IC(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=ng(s,r,e+1/3),this.g=ng(s,r,e),this.b=ng(s,r,e-1/3)}return Qe.colorSpaceToWorking(this,a),this}setStyle(e,n=$n){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){let i=S_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Qe.workingToColorSpace(gn.copy(this),e),Math.round(et(gn.r*255,0,255))*65536+Math.round(et(gn.g*255,0,255))*256+Math.round(et(gn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(gn.copy(this),n);let i=gn.r,a=gn.g,r=gn.b,s=Math.max(i,a,r),o=Math.min(i,a,r),l,u,d=(o+s)/2;if(o===s)l=0,u=0;else{let p=s-o;switch(u=d<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=$n){Qe.workingToColorSpace(gn.copy(this),e);let n=gn.r,i=gn.g,a=gn.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+n,ja.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ja),e.getHSL(vd);let i=jm(ja.h,vd.h,n),a=jm(ja.s,vd.s,n),r=jm(ja.l,vd.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Ke;Ke.NAMES=S_;Rl=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},wi=new W,da=new W,ig=new W,fa=new W,Us=new W,Os=new W,AS=new W,ag=new W,rg=new W,sg=new W,og=new It,lg=new It,ug=new It,tr=class t{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),wi.subVectors(e,n),a.cross(wi);let r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){wi.subVectors(a,n),da.subVectors(i,n),ig.subVectors(e,n);let s=wi.dot(wi),o=wi.dot(da),l=wi.dot(ig),u=da.dot(da),d=da.dot(ig),p=s*u-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,g=(u*l-o*d)*f,y=(s*d-o*l)*f;return r.set(1-g-y,y,g)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,fa)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fa.x),l.addScaledVector(s,fa.y),l.addScaledVector(o,fa.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return og.setScalar(0),lg.setScalar(0),ug.setScalar(0),og.fromBufferAttribute(e,n),lg.fromBufferAttribute(e,i),ug.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(og,r.x),s.addScaledVector(lg,r.y),s.addScaledVector(ug,r.z),s}static isFrontFacing(e,n,i,a){return wi.subVectors(i,n),da.subVectors(e,n),wi.cross(da).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),da.subVectors(this.a,this.b),wi.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,a=this.b,r=this.c,s,o;Us.subVectors(a,i),Os.subVectors(r,i),ag.subVectors(e,i);let l=Us.dot(ag),u=Os.dot(ag);if(l<=0&&u<=0)return n.copy(i);rg.subVectors(e,a);let d=Us.dot(rg),p=Os.dot(rg);if(d>=0&&p<=d)return n.copy(a);let f=l*p-d*u;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Us,s);sg.subVectors(e,r);let g=Us.dot(sg),y=Os.dot(sg);if(y>=0&&g<=y)return n.copy(r);let w=g*u-l*y;if(w<=0&&u>=0&&y<=0)return o=u/(u-y),n.copy(i).addScaledVector(Os,o);let x=d*y-g*p;if(x<=0&&p-d>=0&&g-y>=0)return AS.subVectors(r,a),o=(p-d)/(p-d+(g-y)),n.copy(a).addScaledVector(AS,o);let h=1/(x+w+f);return s=w*h,o=f*h,n.copy(i).addScaledVector(Us,s).addScaledVector(Os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ir=class{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,bi):bi.fromBufferAttribute(r,s),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sd.copy(i.boundingBox)),Sd.applyMatrix4(e.matrixWorld),this.union(Sd)}let a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),_d.subVectors(this.max,wl),zs.subVectors(e.a,wl),Vs.subVectors(e.b,wl),Hs.subVectors(e.c,wl),Ka.subVectors(Vs,zs),Ja.subVectors(Hs,Vs),Nr.subVectors(zs,Hs);let n=[0,-Ka.z,Ka.y,0,-Ja.z,Ja.y,0,-Nr.z,Nr.y,Ka.z,0,-Ka.x,Ja.z,0,-Ja.x,Nr.z,0,-Nr.x,-Ka.y,Ka.x,0,-Ja.y,Ja.x,0,-Nr.y,Nr.x,0];return!cg(n,zs,Vs,Hs,_d)||(n=[1,0,0,0,1,0,0,0,1],!cg(n,zs,Vs,Hs,_d))?!1:(Md.crossVectors(Ka,Ja),n=[Md.x,Md.y,Md.z],cg(n,zs,Vs,Hs,_d))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ha=[new W,new W,new W,new W,new W,new W,new W,new W],bi=new W,Sd=new ir,zs=new W,Vs=new W,Hs=new W,Ka=new W,Ja=new W,Nr=new W,wl=new W,_d=new W,Md=new W,Br=new W;qt=new W,wd=new Ye,UC=0,Yn=class extends Gi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bg,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wd.fromBufferAttribute(this,n),wd.applyMatrix3(e),this.setXY(n,wd.x,wd.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_l(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_l(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_l(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_l(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_l(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),a=Tn(a,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},Pl=class extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}},kl=class extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}},Ht=class extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}},OC=new ir,bl=new W,dg=new W,Qs=class{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):OC.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);let n=bl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(bl,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(dg)),this.expandByPoint(bl.copy(e.center).sub(dg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zC=0,li=new Lt,fg=new xn,Gs=new W,Xn=new ir,Cl=new ir,Qt=new W,jn=class t extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zC++}),this.uuid=nu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CC(e)?kl:Pl)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,n,i){return li.makeTranslation(e,n,i),this.applyMatrix4(li),this}scale(e,n,i){return li.makeScale(e,n,i),this.applyMatrix4(li),this}lookAt(e){return fg.lookAt(e),fg.updateMatrix(),this.applyMatrix4(fg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,r=e.length;a<r;a++){let s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ht(i,3))}else{let i=Math.min(e.length,n.count);for(let a=0;a<i;a++){let r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){let r=n[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){let o=n[r];Cl.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Xn.min,Cl.min),Xn.expandByPoint(Qt),Qt.addVectors(Xn.max,Cl.max),Xn.expandByPoint(Qt)):(Xn.expandByPoint(Cl.min),Xn.expandByPoint(Cl.max))}Xn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Qt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Qt));if(n)for(let r=0,s=n.length;r<s;r++){let o=n[r],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Qt.fromBufferAttribute(o,u),l&&(Gs.fromBufferAttribute(e,u),Qt.add(Gs)),a=Math.max(a,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,r=n.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new W,l[S]=new W;let u=new W,d=new W,p=new W,f=new Ye,g=new Ye,y=new Ye,w=new W,x=new W;function h(S,L,R){u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,L),p.fromBufferAttribute(i,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,L),y.fromBufferAttribute(r,R),d.sub(u),p.sub(u),g.sub(f),y.sub(f);let k=1/(g.x*y.y-y.x*g.y);isFinite(k)&&(w.copy(d).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(k),x.copy(p).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(k),o[S].add(w),o[L].add(w),o[R].add(w),l[S].add(x),l[L].add(x),l[R].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,L=v.length;S<L;++S){let R=v[S],k=R.start,F=R.count;for(let z=k,H=k+F;z<H;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let C=new W,M=new W,b=new W,I=new W;function T(S){b.fromBufferAttribute(a,S),I.copy(b);let L=o[S];C.copy(L),C.sub(b.multiplyScalar(b.dot(L))).normalize(),M.crossVectors(I,L);let k=M.dot(l[S])<0?-1:1;s.setXYZW(S,C.x,C.y,C.z,k)}for(let S=0,L=v.length;S<L;++S){let R=v[S],k=R.start,F=R.count;for(let z=k,H=k+F;z<H;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);let a=new W,r=new W,s=new W,o=new W,l=new W,u=new W,d=new W,p=new W;if(e)for(let f=0,g=e.count;f<g;f+=3){let y=e.getX(f+0),w=e.getX(f+1),x=e.getX(f+2);a.fromBufferAttribute(n,y),r.fromBufferAttribute(n,w),s.fromBufferAttribute(n,x),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),u.fromBufferAttribute(i,x),o.add(d),l.add(d),u.add(d),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){let u=o.array,d=o.itemSize,p=o.normalized,f=new u.constructor(l.length*d),g=0,y=0;for(let w=0,x=l.length;w<x;w++){o.isInterleavedBufferAttribute?g=l[w]*o.data.stride+o.offset:g=l[w]*d;for(let h=0;h<d;h++)f[y++]=u[g++]}return new Yn(f,d,p)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],u=e(l,i);n.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let l=[],u=r[o];for(let d=0,p=u.length;d<p;d++){let f=u[d],g=e(f,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let u=i[l];e.data.attributes[l]=u.toJSON(e.data)}let a={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],d=[];for(let p=0,f=u.length;p<f;p++){let g=u[p];d.push(g.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let a=e.attributes;for(let u in a){let d=a[u];this.setAttribute(u,d.clone(n))}let r=e.morphAttributes;for(let u in r){let d=[],p=r[u];for(let f=0,g=p.length;f<g;f++)d.push(p[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let u=0,d=s.length;u<d;u++){let p=s[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},VC=0,ar=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=nu(),this.name="",this.type="Material",this.blending=Hr,this.side=ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Od,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==ga&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ud&&(i.blendSrc=this.blendSrc),this.blendDst!==Od&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(n){let r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pa=new W,hg=new W,bd=new W,Qa=new W,pg=new W,Cd=new W,mg=new W,Dl=class{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=pa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pa.copy(this.origin).addScaledVector(this.direction,n),pa.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){hg.copy(e).add(n).multiplyScalar(.5),bd.copy(n).sub(e).normalize(),Qa.copy(this.origin).sub(hg);let r=e.distanceTo(n)*.5,s=-this.direction.dot(bd),o=Qa.dot(this.direction),l=-Qa.dot(bd),u=Qa.lengthSq(),d=Math.abs(1-s*s),p,f,g,y;if(d>0)if(p=s*l-o,f=s*o-l,y=r*d,p>=0)if(f>=-y)if(f<=y){let w=1/d;p*=w,f*=w,g=p*(p+s*f+2*o)+f*(s*p+f+2*l)+u}else f=r,p=Math.max(0,-(s*f+o)),g=-p*p+f*(f+2*l)+u;else f=-r,p=Math.max(0,-(s*f+o)),g=-p*p+f*(f+2*l)+u;else f<=-y?(p=Math.max(0,-(-s*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),g=-p*p+f*(f+2*l)+u):f<=y?(p=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+u):(p=Math.max(0,-(s*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),g=-p*p+f*(f+2*l)+u);else f=s>0?-r:r,p=Math.max(0,-(s*f+o)),g=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(hg).addScaledVector(bd,f),g}intersectSphere(e,n){pa.subVectors(e.center,this.origin);let i=pa.dot(this.direction),a=pa.dot(pa)-i*i,r=e.radius*e.radius;if(a>r)return null;let s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l,u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,a=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,a=(e.min.x-f.x)*u),d>=0?(r=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,pa)!==null}intersectTriangle(e,n,i,a,r){pg.subVectors(n,e),Cd.subVectors(i,e),mg.crossVectors(pg,Cd);let s=this.direction.dot(mg),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Qa.subVectors(this.origin,e);let l=o*this.direction.dot(Cd.crossVectors(Qa,Cd));if(l<0)return null;let u=o*this.direction.dot(pg.cross(Qa));if(u<0||l+u>s)return null;let d=-o*Qa.dot(mg);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wr=class extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=Dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ES=new Lt,Ur=new Dl,Ld=new Qs,TS=new W,Id=new W,Ad=new W,Ed=new W,gg=new W,Td=new W,RS=new W,Rd=new W,rt=class extends xn{constructor(e=new jn,n=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);let o=this.morphTargetInfluences;if(r&&o){Td.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let d=o[l],p=r[l];d!==0&&(gg.fromBufferAttribute(p,e),s?Td.addScaledVector(gg,d):Td.addScaledVector(gg.sub(n),d))}n.add(Td)}return n}raycast(e,n){let i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ld.copy(i.boundingSphere),Ld.applyMatrix4(r),Ur.copy(e.ray).recast(e.near),!(Ld.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Ld,TS)===null||Ur.origin.distanceToSquared(TS)>(e.far-e.near)**2))&&(ES.copy(r).invert(),Ur.copy(e.ray).applyMatrix4(ES),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,i){let a,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,f=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(s))for(let y=0,w=f.length;y<w;y++){let x=f[y],h=s[x.materialIndex],v=Math.max(x.start,g.start),C=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let M=v,b=C;M<b;M+=3){let I=o.getX(M),T=o.getX(M+1),S=o.getX(M+2);a=Pd(this,h,e,i,u,d,p,I,T,S),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{let y=Math.max(0,g.start),w=Math.min(o.count,g.start+g.count);for(let x=y,h=w;x<h;x+=3){let v=o.getX(x),C=o.getX(x+1),M=o.getX(x+2);a=Pd(this,s,e,i,u,d,p,v,C,M),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,w=f.length;y<w;y++){let x=f[y],h=s[x.materialIndex],v=Math.max(x.start,g.start),C=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let M=v,b=C;M<b;M+=3){let I=M,T=M+1,S=M+2;a=Pd(this,h,e,i,u,d,p,I,T,S),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{let y=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let x=y,h=w;x<h;x+=3){let v=x,C=x+1,M=x+2;a=Pd(this,s,e,i,u,d,p,v,C,M),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}};Qd=class extends wn{constructor(e=null,n=1,i=1,a,r,s,o,l,u=en,d=en,p,f){super(null,s,o,l,u,d,a,r,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xg=new W,GC=new W,WC=new He,zi=class{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let a=xg.subVectors(i,n).cross(GC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let a=e.delta(xg),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||WC.getNormalMatrix(e),a=this.coplanarPoint(xg).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Or=new Qs,qC=new Ye(.5,.5),kd=new W,eo=class{constructor(e=new zi,n=new zi,i=new zi,a=new zi,r=new zi,s=new zi){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci,i=!1){let a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],u=r[3],d=r[4],p=r[5],f=r[6],g=r[7],y=r[8],w=r[9],x=r[10],h=r[11],v=r[12],C=r[13],M=r[14],b=r[15];if(a[0].setComponents(u-s,g-d,h-y,b-v).normalize(),a[1].setComponents(u+s,g+d,h+y,b+v).normalize(),a[2].setComponents(u+o,g+p,h+w,b+C).normalize(),a[3].setComponents(u-o,g-p,h-w,b-C).normalize(),i)a[4].setComponents(l,f,x,M).normalize(),a[5].setComponents(u-l,g-f,h-x,b-M).normalize();else if(a[4].setComponents(u-l,g-f,h-x,b-M).normalize(),n===Ci)a[5].setComponents(u+l,g+f,h+x,b+M).normalize();else if(n===Ys)a[5].setComponents(l,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);let n=qC.distanceTo(e.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){let n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(kd.x=a.normal.x>0?e.max.x:e.min.x,kd.y=a.normal.y>0?e.max.y:e.min.y,kd.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(kd)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fl=class extends wn{constructor(e=[],n=ur,i,a,r,s,o,l,u,d){super(e,n,i,a,r,s,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nl=class extends wn{constructor(e,n,i,a,r,s,o,l,u){super(e,n,i,a,r,s,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},ya=class extends wn{constructor(e,n,i=Ei,a,r,s,o=en,l=en,u,d=Hi,p=1){if(d!==Hi&&d!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:n,depth:p};super(f,a,r,s,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ef=class extends ya{constructor(e,n=Ei,i=ur,a,r,s=en,o=en,l,u=Hi){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,a,r,s,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bl=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rn=class t extends jn{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};let o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);let l=[],u=[],d=[],p=[],f=0,g=0;y("z","y","x",-1,-1,i,n,e,s,r,0),y("z","y","x",1,-1,i,n,-e,s,r,1),y("x","z","y",1,1,e,i,n,a,s,2),y("x","z","y",1,-1,e,i,-n,a,s,3),y("x","y","z",1,-1,e,n,i,a,r,4),y("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(p,2));function y(w,x,h,v,C,M,b,I,T,S,L){let R=M/T,k=b/S,F=M/2,z=b/2,H=I/2,B=T+1,K=S+1,Z=0,U=0,Q=new W;for(let de=0;de<K;de++){let ue=de*k-z;for(let Me=0;Me<B;Me++){let Pe=Me*R-F;Q[w]=Pe*v,Q[x]=ue*C,Q[h]=H,u.push(Q.x,Q.y,Q.z),Q[w]=0,Q[x]=0,Q[h]=I>0?1:-1,d.push(Q.x,Q.y,Q.z),p.push(Me/T),p.push(1-de/S),Z+=1}}for(let de=0;de<S;de++)for(let ue=0;ue<T;ue++){let Me=f+ue+B*de,Pe=f+ue+B*(de+1),Ze=f+(ue+1)+B*(de+1),We=f+(ue+1)+B*de;l.push(Me,Pe,We),l.push(Pe,Ze,We),U+=6}o.addGroup(g,U,L),g+=U,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ul=class t extends jn{constructor(e=1,n=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:a},n=Math.max(3,n);let r=[],s=[],o=[],l=[],u=new W,d=new Ye;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=n;p++,f+=3){let g=i+p/n*a;u.x=e*Math.cos(g),u.y=e*Math.sin(g),s.push(u.x,u.y,u.z),o.push(0,0,1),d.x=(s[f]/e+1)/2,d.y=(s[f+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=n;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ii=class t extends jn{constructor(e=1,n=1,i=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};let u=this;a=Math.floor(a),r=Math.floor(r);let d=[],p=[],f=[],g=[],y=0,w=[],x=i/2,h=0;v(),s===!1&&(e>0&&C(!0),n>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(g,2));function v(){let M=new W,b=new W,I=0,T=(n-e)/i;for(let S=0;S<=r;S++){let L=[],R=S/r,k=R*(n-e)+e;for(let F=0;F<=a;F++){let z=F/a,H=z*l+o,B=Math.sin(H),K=Math.cos(H);b.x=k*B,b.y=-R*i+x,b.z=k*K,p.push(b.x,b.y,b.z),M.set(B,T,K).normalize(),f.push(M.x,M.y,M.z),g.push(z,1-R),L.push(y++)}w.push(L)}for(let S=0;S<a;S++)for(let L=0;L<r;L++){let R=w[L][S],k=w[L+1][S],F=w[L+1][S+1],z=w[L][S+1];(e>0||L!==0)&&(d.push(R,k,z),I+=3),(n>0||L!==r-1)&&(d.push(k,F,z),I+=3)}u.addGroup(h,I,0),h+=I}function C(M){let b=y,I=new Ye,T=new W,S=0,L=M===!0?e:n,R=M===!0?1:-1;for(let F=1;F<=a;F++)p.push(0,x*R,0),f.push(0,R,0),g.push(.5,.5),y++;let k=y;for(let F=0;F<=a;F++){let H=F/a*l+o,B=Math.cos(H),K=Math.sin(H);T.x=L*K,T.y=x*R,T.z=L*B,p.push(T.x,T.y,T.z),f.push(0,R,0),I.x=B*.5+.5,I.y=K*.5*R+.5,g.push(I.x,I.y),y++}for(let F=0;F<a;F++){let z=b+F,H=k+F;M===!0?d.push(H,H+1,z):d.push(H+1,H,z),S+=3}u.addGroup(h,S,M===!0?1:2),h+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ol=class t extends Ii{constructor(e=1,n=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,n,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zl=class t extends jn{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};let r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),u=o+1,d=l+1,p=e/o,f=n/l,g=[],y=[],w=[],x=[];for(let h=0;h<d;h++){let v=h*f-s;for(let C=0;C<u;C++){let M=C*p-r;y.push(M,-v,0),w.push(0,0,1),x.push(C/o),x.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){let C=v+u*h,M=v+u*(h+1),b=v+1+u*(h+1),I=v+1+u*h;g.push(C,M,I),g.push(M,b,I)}this.setIndex(g),this.setAttribute("position",new Ht(y,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},rr=class t extends jn{constructor(e=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(s+o,Math.PI),u=0,d=[],p=new W,f=new W,g=[],y=[],w=[],x=[];for(let h=0;h<=i;h++){let v=[],C=h/i,M=s+C*o,b=e*Math.cos(M),I=Math.sqrt(e*e-b*b),T=0;h===0&&s===0?T=.5/n:h===i&&l===Math.PI&&(T=-.5/n);for(let S=0;S<=n;S++){let L=S/n,R=a+L*r;p.x=-I*Math.cos(R),p.y=b,p.z=I*Math.sin(R),y.push(p.x,p.y,p.z),f.copy(p).normalize(),w.push(f.x,f.y,f.z),x.push(L+T,1-C),v.push(u++)}d.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){let C=d[h][v+1],M=d[h][v],b=d[h+1][v],I=d[h+1][v+1];(h!==0||s>0)&&g.push(C,M,I),(h!==i-1||l<Math.PI)&&g.push(M,b,I)}this.setIndex(g),this.setAttribute("position",new Ht(y,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};__={clone:Xr,merge:yn},$C=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$C,this.fragmentShader=YC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=XC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(a.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(a.value);break;case"v3":this.uniforms[i].value=new W().fromArray(a.value);break;case"v4":this.uniforms[i].value=new It().fromArray(a.value);break;case"m3":this.uniforms[i].value=new He().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Lt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},tf=class extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pn=class extends ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nf=class extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},af=class extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};sr=class{constructor(e,n,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],r=n[i-1];e:{t:{let s;n:{i:if(!(e<a)){for(let o=i+2;;){if(a===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=a,a=n[++i],e<a)break t}s=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=r,r=n[--i-1],e>=r)break t}s=i,i=0;break n}break e}for(;i<s;){let o=i+s>>>1;e<n[o]?s=o:i=o+1}if(a=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,a)}return this.interpolate_(i,r,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=e*a;for(let s=0;s!==a;++s)n[s]=i[r+s];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rf=class extends sr{constructor(e,n,i,a){super(e,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sg,endingEnd:Sg}}intervalChanged_(e,n,i){let a=this.parameterPositions,r=e-2,s=e+1,o=a[r],l=a[s];if(o===void 0)switch(this.getSettings_().endingStart){case _g:r=e,o=2*n-i;break;case Mg:r=a.length-2,o=n+a[r]-a[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _g:s=e,l=2*i-n;break;case Mg:s=1,l=i+a[1]-a[0];break;default:s=e-1,l=n}let u=(i-n)*.5,d=this.valueSize;this._weightPrev=u/(n-o),this._weightNext=u/(l-i),this._offsetPrev=r*d,this._offsetNext=s*d}interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,g=this._weightNext,y=(i-n)/(a-n),w=y*y,x=w*y,h=-f*x+2*f*w-f*y,v=(1+f)*x+(-1.5-2*f)*w+(-.5+f)*y+1,C=(-1-g)*x+(1.5+g)*w+.5*y,M=g*x-g*w;for(let b=0;b!==o;++b)r[b]=h*s[d+b]+v*s[u+b]+C*s[l+b]+M*s[p+b];return r}},sf=class extends sr{constructor(e,n,i,a){super(e,n,i,a)}interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=(i-n)/(a-n),p=1-d;for(let f=0;f!==o;++f)r[f]=s[u+f]*p+s[l+f]*d;return r}},of=class extends sr{constructor(e,n,i,a){super(e,n,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}},lf=class extends sr{interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let y=(i-n)/(a-n),w=1-y;for(let x=0;x!==o;++x)r[x]=s[u+x]*w+s[l+x]*y;return r}let f=o*2,g=e-1;for(let y=0;y!==o;++y){let w=s[u+y],x=s[l+y],h=g*f+y*2,v=p[h],C=p[h+1],M=e*f+y*2,b=d[M],I=d[M+1],T=(i-n)/(a-n),S,L,R,k,F;for(let z=0;z<8;z++){S=T*T,L=S*T,R=1-T,k=R*R,F=k*R;let B=F*n+3*k*T*v+3*R*S*b+L*a-i;if(Math.abs(B)<1e-10)break;let K=3*k*(v-n)+6*R*T*(b-v)+3*S*(a-b);if(Math.abs(K)<1e-10)break;T=T-B/K,T=Math.max(0,Math.min(1,T))}r[y]=F*w+3*k*T*C+3*R*S*I+L*x}return r}},Jn=class{constructor(e,n,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dd(n,this.TimeBufferType),this.values=Dd(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Dd(e.times,Array),values:Dd(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new lf(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Ll:n=this.InterpolantFactoryMethodDiscrete;break;case Yd:n=this.InterpolantFactoryMethodLinear;break;case Bd:n=this.InterpolantFactoryMethodSmooth;break;case vg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ll;case this.InterpolantFactoryMethodLinear:return Yd;case this.InterpolantFactoryMethodSmooth:return Bd;case this.InterpolantFactoryMethodBezier:return vg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=e}return this}trim(e,n){let i=this.times,a=i.length,r=0,s=a-1;for(;r!==a&&i[r]<e;)++r;for(;s!==-1&&i[s]>n;)--s;if(++s,r!==0||s!==a){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,a=this.values,r=i.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){ze("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(a!==void 0&&LC(a))for(let o=0,l=a.length;o!==l;++o){let u=a[o];if(isNaN(u)){ze("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Bd,r=e.length-1,s=1;for(let o=1;o<r;++o){let l=!1,u=e[o],d=e[o+1];if(u!==d&&(o!==1||u!==e[0]))if(a)l=!0;else{let p=o*i,f=p-i,g=p+i;for(let y=0;y!==i;++y){let w=n[p+y];if(w!==n[f+y]||w!==n[g+y]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let p=o*i,f=s*i;for(let g=0;g!==i;++g)n[f+g]=n[p+g]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,l=s*i,u=0;u!==i;++u)n[l+u]=n[o+u];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=n.slice(0,s*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,e,n);return a.createInterpolant=this.createInterpolant,a}};Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Yd;or=class extends Jn{constructor(e,n,i){super(e,n,i)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Ll;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;uf=class extends Jn{constructor(e,n,i,a){super(e,n,i,a)}};uf.prototype.ValueTypeName="color";cf=class extends Jn{constructor(e,n,i,a){super(e,n,i,a)}};cf.prototype.ValueTypeName="number";df=class extends sr{constructor(e,n,i,a){super(e,n,i,a)}interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),u=e*o;for(let d=u+o;u!==d;u+=4)Wi.slerpFlat(r,0,s,u-o,s,u,l);return r}},Vl=class extends Jn{constructor(e,n,i,a){super(e,n,i,a)}InterpolantFactoryMethodLinear(e){return new df(this.times,this.values,this.getValueSize(),e)}};Vl.prototype.ValueTypeName="quaternion";Vl.prototype.InterpolantFactoryMethodSmooth=void 0;lr=class extends Jn{constructor(e,n,i){super(e,n,i)}};lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Ll;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;ff=class extends Jn{constructor(e,n,i,a){super(e,n,i,a)}};ff.prototype.ValueTypeName="vector";hf=class{constructor(e,n,i){let a=this,r=!1,s=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&a.onStart!==void 0&&a.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,a.onProgress!==void 0&&a.onProgress(d,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){let p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,f=u.length;p<f;p+=2){let g=u[p],y=u[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},M_=new hf,pf=class{constructor(e){this.manager=e!==void 0?e:M_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(a,r){i.load(e,a,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pf.DEFAULT_MATERIAL_NAME="__DEFAULT";to=class extends xn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Hl=class extends to{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},yg=new Lt,kS=new W,DS=new W,mf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;kS.setFromMatrixPosition(e.matrixWorld),n.position.copy(kS),DS.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(DS),n.updateMatrixWorld(),yg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yg,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ys||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fd=new W,Nd=new Wi,Oi=new W,Gl=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fd,Nd,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fd,Nd,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Fd,Nd,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fd,Nd,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},er=new W,FS=new Ye,NS=new Ye,rn=class extends Gl{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Zm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,n){return this.getViewBounds(e,FS,NS),n.subVectors(NS,FS)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Zm*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,u=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/u,a*=s.width/l,i*=s.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Cg=class extends mf{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Wl=class extends to{constructor(e,n,i=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Cg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},no=class extends Gl{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Lg=class extends mf{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},io=class extends to{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Lg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},Ws=-90,qs=1,gf=class extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new rn(Ws,qs,e,n);a.layers=this.layers,this.add(a);let r=new rn(Ws,qs,e,n);r.layers=this.layers,this.add(r);let s=new rn(Ws,qs,e,n);s.layers=this.layers,this.add(s);let o=new rn(Ws,qs,e,n);o.layers=this.layers,this.add(o);let l=new rn(Ws,qs,e,n);l.layers=this.layers,this.add(l);let u=new rn(Ws,qs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(let u of n)this.remove(u);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,u,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,f,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},xf=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Jg="\\[\\]\\.:\\/",ZC=new RegExp("["+Jg+"]","g"),Qg="[^"+Jg+"]",jC="[^"+Jg.replace("\\.","")+"]",KC=/((?:WC+[\/:])*)/.source.replace("WC",Qg),JC=/(WCOD+)?/.source.replace("WCOD",jC),QC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qg),eL=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qg),tL=new RegExp("^"+KC+JC+QC+eL+"$"),nL=["material","materials","bones","map"],Ig=class{constructor(e,n,i){let a=i||wt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,a)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,r=i.length;a!==r;++a)i[a].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},wt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ZC,"")}static parseTrackName(e){let n=tL.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let r=i.nodeName.substring(a+1);nL.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)e[n++]=i[a]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let s=e[a];if(s===void 0){let u=n.nodeName;ze("PropertyBinding: Trying to update property for track: "+u+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Ig;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];MP=new Float32Array(1),BS=new Lt,ql=class{constructor(e,n,i=0,a=1/0){this.ray=new Dl(e,n),this.near=i,this.far=a,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ze("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return BS.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(BS),this}intersectObject(e,n=!0,i=[]){return Ag(e,this,i,n),i.sort(US),i}intersectObjects(e,n=!0,i=[]){for(let a=0,r=e.length;a<r;a++)Ag(e[a],this,i,n);return i.sort(US),i}};Eg=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=a,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yf}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yf)});function q_(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function aL(t){let e=new WeakMap;function n(o,l){let u=o.array,d=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){let d=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,d);else{p.sort((g,y)=>g.start-y.start);let f=0;for(let g=1;g<p.length;g++){let y=p[f],w=p[g];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++f,p[f]=w)}p.length=f+1;for(let g=0,y=p.length;g<y;g++){let w=p[g];t.bufferSubData(u,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:a,remove:r,update:s}}function z2(t,e,n,i,a,r){let s=new Ke(0),o=a===!0?0:1,l,u,d=null,p=0,f=null;function g(v){let C=v.isScene===!0?v.background:null;if(C&&C.isTexture){let M=v.backgroundBlurriness>0;C=e.get(C,M)}return C}function y(v){let C=!1,M=g(v);M===null?x(s,o):M&&M.isColor&&(x(M,1),C=!0);let b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function w(v,C){let M=g(C);M&&(M.isCubeTexture||M.mapping===Yl)?(u===void 0&&(u=new rt(new Rn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Xr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,I,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(O2.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(X_),u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==lt,(d!==M||p!==M.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,p=M.version,f=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new rt(new zl(2,2),new Kn({name:"BackgroundMaterial",uniforms:Xr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=M,p=M.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function x(v,C){v.getRGB(lh,Kg(t)),n.buffers.color.setClear(lh.r,lh.g,lh.b,C,r)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(v,C=1){s.set(v),o=C,x(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,x(s,o)},render:y,addToRenderList:w,dispose:h}}function V2(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=f(null),r=a,s=!1;function o(k,F,z,H,B){let K=!1,Z=p(k,H,z,F);r!==Z&&(r=Z,u(r.object)),K=g(k,H,z,B),K&&y(k,H,z,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,M(k,F,z,H),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function u(k){return t.bindVertexArray(k)}function d(k){return t.deleteVertexArray(k)}function p(k,F,z,H){let B=H.wireframe===!0,K=i[F.id];K===void 0&&(K={},i[F.id]=K);let Z=k.isInstancedMesh===!0?k.id:0,U=K[Z];U===void 0&&(U={},K[Z]=U);let Q=U[z.id];Q===void 0&&(Q={},U[z.id]=Q);let de=Q[B];return de===void 0&&(de=f(l()),Q[B]=de),de}function f(k){let F=[],z=[],H=[];for(let B=0;B<n;B++)F[B]=0,z[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:H,object:k,attributes:{},index:null}}function g(k,F,z,H){let B=r.attributes,K=F.attributes,Z=0,U=z.getAttributes();for(let Q in U)if(U[Q].location>=0){let ue=B[Q],Me=K[Q];if(Me===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(Me=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(Me=k.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;Z++}return r.attributesNum!==Z||r.index!==H}function y(k,F,z,H){let B={},K=F.attributes,Z=0,U=z.getAttributes();for(let Q in U)if(U[Q].location>=0){let ue=K[Q];ue===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor));let Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),B[Q]=Me,Z++}r.attributes=B,r.attributesNum=Z,r.index=H}function w(){let k=r.newAttributes;for(let F=0,z=k.length;F<z;F++)k[F]=0}function x(k){h(k,0)}function h(k,F){let z=r.newAttributes,H=r.enabledAttributes,B=r.attributeDivisors;z[k]=1,H[k]===0&&(t.enableVertexAttribArray(k),H[k]=1),B[k]!==F&&(t.vertexAttribDivisor(k,F),B[k]=F)}function v(){let k=r.newAttributes,F=r.enabledAttributes;for(let z=0,H=F.length;z<H;z++)F[z]!==k[z]&&(t.disableVertexAttribArray(z),F[z]=0)}function C(k,F,z,H,B,K,Z){Z===!0?t.vertexAttribIPointer(k,F,z,B,K):t.vertexAttribPointer(k,F,z,H,B,K)}function M(k,F,z,H){w();let B=H.attributes,K=z.getAttributes(),Z=F.defaultAttributeValues;for(let U in K){let Q=K[U];if(Q.location>=0){let de=B[U];if(de===void 0&&(U==="instanceMatrix"&&k.instanceMatrix&&(de=k.instanceMatrix),U==="instanceColor"&&k.instanceColor&&(de=k.instanceColor)),de!==void 0){let ue=de.normalized,Me=de.itemSize,Pe=e.get(de);if(Pe===void 0)continue;let Ze=Pe.buffer,We=Pe.type,ie=Pe.bytesPerElement,E=We===t.INT||We===t.UNSIGNED_INT||de.gpuType===wf;if(de.isInterleavedBufferAttribute){let q=de.data,Le=q.stride,Oe=de.offset;if(q.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Q.locationSize;Fe++)h(Q.location+Fe,q.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Fe=0;Fe<Q.locationSize;Fe++)x(Q.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Fe=0;Fe<Q.locationSize;Fe++)C(Q.location+Fe,Me/Q.locationSize,We,ue,Le*ie,(Oe+Me/Q.locationSize*Fe)*ie,E)}else{if(de.isInstancedBufferAttribute){for(let q=0;q<Q.locationSize;q++)h(Q.location+q,de.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let q=0;q<Q.locationSize;q++)x(Q.location+q);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let q=0;q<Q.locationSize;q++)C(Q.location+q,Me/Q.locationSize,We,ue,Me*ie,Me/Q.locationSize*q*ie,E)}}else if(Z!==void 0){let ue=Z[U];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(Q.location,ue);break;case 3:t.vertexAttrib3fv(Q.location,ue);break;case 4:t.vertexAttrib4fv(Q.location,ue);break;default:t.vertexAttrib1fv(Q.location,ue)}}}}v()}function b(){L();for(let k in i){let F=i[k];for(let z in F){let H=F[z];for(let B in H){let K=H[B];for(let Z in K)d(K[Z].object),delete K[Z];delete H[B]}}delete i[k]}}function I(k){if(i[k.id]===void 0)return;let F=i[k.id];for(let z in F){let H=F[z];for(let B in H){let K=H[B];for(let Z in K)d(K[Z].object),delete K[Z];delete H[B]}}delete i[k.id]}function T(k){for(let F in i){let z=i[F];for(let H in z){let B=z[H];if(B[k.id]===void 0)continue;let K=B[k.id];for(let Z in K)d(K[Z].object),delete K[Z];delete B[k.id]}}}function S(k){for(let F in i){let z=i[F],H=k.isInstancedMesh===!0?k.id:0,B=z[H];if(B!==void 0){for(let K in B){let Z=B[K];for(let U in Z)d(Z[U].object),delete Z[U];delete B[K]}delete z[H],Object.keys(z).length===0&&delete i[F]}}}function L(){R(),s=!0,r!==a&&(r=a,u(r.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfObject:S,releaseStatesOfProgram:T,initAttributes:w,enableAttribute:x,disableUnusedAttributes:v}}function H2(t,e,n){let i;function a(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function s(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];n.update(f,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function G2(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(T){return!(T!==ui&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let S=T===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==kn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ti&&!S)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp",d=l(u);d!==u&&(Ve("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),C=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),I=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:v,maxVaryings:C,maxFragmentUniforms:M,maxSamples:b,samples:I}}function W2(t){let e=this,n=null,i=0,a=!1,r=!1,s=new zi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let g=p.length!==0||f||i!==0||a;return a=f,i=p.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,g){let y=p.clippingPlanes,w=p.clipIntersection,x=p.clipShadows,h=t.get(p);if(!a||y===null||y.length===0||r&&!x)r?d(null):u();else{let v=r?0:i,C=v*4,M=h.clippingState||null;l.value=M,M=d(y,f,C,g);for(let b=0;b!==C;++b)M[b]=n[b];h.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,g,y){let w=p!==null?p.length:0,x=null;if(w!==0){if(x=l.value,y!==!0||x===null){let h=g+w*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<h)&&(x=new Float32Array(h));for(let C=0,M=g;C!==w;++C,M+=4)s.copy(p[C]).applyMatrix4(v,o),s.normal.toArray(x,M),x[M+3]=s.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function $2(t){let e=[],n=[],i=[],a=t,r=t-hr+1+w_.length;for(let s=0;s<r;s++){let o=Math.pow(2,a);e.push(o);let l=1/o;s>t-hr?l=w_[s-t+hr-1]:s===0&&(l=0),n.push(l);let u=1/(o-2),d=-u,p=1+u,f=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,y=6,w=3,x=2,h=1,v=new Float32Array(w*y*g),C=new Float32Array(x*y*g),M=new Float32Array(h*y*g);for(let I=0;I<g;I++){let T=I%3*2/3-1,S=I>2?0:-1,L=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];v.set(L,w*y*I),C.set(f,x*y*I);let R=[I,I,I,I,I,I];M.set(R,h*y*I)}let b=new jn;b.setAttribute("position",new Yn(v,w)),b.setAttribute("uv",new Yn(C,x)),b.setAttribute("faceIndex",new Yn(M,h)),i.push(new rt(b,null)),a>hr&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function C_(t,e,n){let i=new Zn(t,e,n);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oo(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function Y2(t,e,n){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Z2(t,e,n){let i=new Float32Array($r),a=new W(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function L_(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function I_(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function hh(){return`

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
	`}function j2(t){let e=new WeakMap,n=new WeakMap,i=null;function a(f,g=!1){return f==null?null:g?s(f):r(f)}function r(f){if(f&&f.isTexture){let g=f.mapping;if(g===Sf||g===_f)if(e.has(f)){let y=e.get(f).texture;return o(y,f.mapping)}else{let y=f.image;if(y&&y.height>0){let w=new dh(y.height);return w.fromEquirectangularTexture(t,f),e.set(f,w),f.addEventListener("dispose",u),o(w.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let g=f.mapping,y=g===Sf||g===_f,w=g===ur||g===qr;if(y||w){let x=n.get(f),h=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new ch(t)),x=y?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{let v=f.image;return y&&v&&v.height>0||w&&v&&l(v)?(i===null&&(i=new ch(t)),x=y?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",d),x.texture):null}}}return f}function o(f,g){return g===Sf?f.mapping=ur:g===_f&&(f.mapping=qr),f}function l(f){let g=0,y=6;for(let w=0;w<y;w++)f[w]!==void 0&&g++;return g===y}function u(f){let g=f.target;g.removeEventListener("dispose",u);let y=e.get(g);y!==void 0&&(e.delete(g),y.dispose())}function d(f){let g=f.target;g.removeEventListener("dispose",d);let y=n.get(g);y!==void 0&&(n.delete(g),y.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function K2(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Vr("WebGLRenderer: "+i+" extension not supported."),a}}}function J2(t,e,n,i){let a={},r=new WeakMap;function s(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",s),delete a[f.id];let g=r.get(f);g&&(e.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(p){let f=p.attributes;for(let g in f)e.update(f[g],t.ARRAY_BUFFER)}function u(p){let f=[],g=p.index,y=p.attributes.position,w=0;if(y===void 0)return;if(g!==null){let v=g.array;w=g.version;for(let C=0,M=v.length;C<M;C+=3){let b=v[C+0],I=v[C+1],T=v[C+2];f.push(b,I,I,T,T,b)}}else{let v=y.array;w=y.version;for(let C=0,M=v.length/3-1;C<M;C+=3){let b=C+0,I=C+1,T=C+2;f.push(b,I,I,T,T,b)}}let x=new(y.count>=65535?kl:Pl)(f,1);x.version=w;let h=r.get(p);h&&e.remove(h),r.set(p,x)}function d(p){let f=r.get(p);if(f){let g=p.index;g!==null&&f.version<g.version&&u(p)}else u(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Q2(t,e,n){let i;function a(p){i=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,f){t.drawElements(i,f,r,p*s),n.update(f,i,1)}function u(p,f,g){g!==0&&(t.drawElementsInstanced(i,f,r,p*s,g),n.update(f,i,g))}function d(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,p,0,g);let w=0;for(let x=0;x<g;x++)w+=f[x];n.update(w,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function eA(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function tA(t,e,n){let i=new WeakMap,a=new It;function r(s,o,l){let u=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,f=i.get(o);if(f===void 0||f.count!==p){let L=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],C=0;g===!0&&(C=1),y===!0&&(C=2),w===!0&&(C=3);let M=o.attributes.position.count*C,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let I=new Float32Array(M*b*4*p),T=new Tl(I,M,b,p);T.type=Ti,T.needsUpdate=!0;let S=C*4;for(let R=0;R<p;R++){let k=x[R],F=h[R],z=v[R],H=M*b*4*R;for(let B=0;B<k.count;B++){let K=B*S;g===!0&&(a.fromBufferAttribute(k,B),I[H+K+0]=a.x,I[H+K+1]=a.y,I[H+K+2]=a.z,I[H+K+3]=0),y===!0&&(a.fromBufferAttribute(F,B),I[H+K+4]=a.x,I[H+K+5]=a.y,I[H+K+6]=a.z,I[H+K+7]=0),w===!0&&(a.fromBufferAttribute(z,B),I[H+K+8]=a.x,I[H+K+9]=a.y,I[H+K+10]=a.z,I[H+K+11]=z.itemSize===4?a.w:1)}}f={count:p,texture:T,size:new Ye(M,b)},i.set(o,f),o.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let w=0;w<u.length;w++)g+=u[w];let y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function nA(t,e,n,i,a){let r=new WeakMap;function s(u){let d=a.render.frame,p=u.geometry,f=e.get(u,p);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let g=u.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return f}function o(){r=new WeakMap}function l(u){let d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:o}}function aA(t,e,n,i,a,r){let s=new Zn(e,n,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,depthTexture:a?new ya(e,n):void 0}),o=new Zn(e,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new jn;l.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ht([0,2,0,0,2,0],2));let u=new tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new rt(l,u),p=new no(-1,1,1,-1,0,1),f=null,g=null,y=!1,w,x=null,h=[],v=!1;this.setSize=function(C,M){s.setSize(C,M),o.setSize(C,M);for(let b=0;b<h.length;b++){let I=h[b];I.setSize&&I.setSize(C,M)}},this.setEffects=function(C){h=C,v=h.length>0&&h[0].isRenderPass===!0;let M=s.width,b=s.height;for(let I=0;I<h.length;I++){let T=h[I];T.setSize&&T.setSize(M,b)}},this.begin=function(C,M){if(y||C.toneMapping===Ai&&h.length===0)return!1;if(x=M,M!==null){let b=M.width,I=M.height;(s.width!==b||s.height!==I)&&this.setSize(b,I)}return v===!1&&C.setRenderTarget(s),w=C.toneMapping,C.toneMapping=Ai,!0},this.hasRenderPass=function(){return v},this.end=function(C,M){C.toneMapping=w,y=!0;let b=s,I=o;for(let T=0;T<h.length;T++){let S=h[T];if(S.enabled!==!1&&(S.render(C,I,b,M),S.needsSwap!==!1)){let L=b;b=I,I=L}}if(f!==C.outputColorSpace||g!==C.toneMapping){f=C.outputColorSpace,g=C.toneMapping,u.defines={},Qe.getTransfer(f)===lt&&(u.defines.SRGB_TRANSFER="");let T=iA[g];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,C.setRenderTarget(x),C.render(d,p),x=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),l.dispose(),u.dispose()}}function uo(t,e,n){let i=t[0];if(i<=0||i>0)return t;let a=e*n,r=A_[a];if(r===void 0&&(r=new Float32Array(a),A_[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ph(t,e){let n=E_[e];n===void 0&&(n=new Int32Array(e),E_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),Zt(n,e)}}function oA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),Zt(n,e)}}function lA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),Zt(n,e)}}function uA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;P_.set(i),t.uniformMatrix2fv(this.addr,!1,P_),Zt(n,i)}}function cA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;R_.set(i),t.uniformMatrix3fv(this.addr,!1,R_),Zt(n,i)}}function dA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;T_.set(i),t.uniformMatrix4fv(this.addr,!1,T_),Zt(n,i)}}function fA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),Zt(n,e)}}function pA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),Zt(n,e)}}function mA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),Zt(n,e)}}function gA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),Zt(n,e)}}function yA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),Zt(n,e)}}function vA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),Zt(n,e)}}function SA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(l0.compareFunction=n.isReversedDepthBuffer()?oh:sh,r=l0):r=$_,n.setTexture2D(e||r,a)}function _A(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||Z_,a)}function MA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||j_,a)}function wA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||Y_,a)}function bA(t){switch(t){case 5126:return rA;case 35664:return sA;case 35665:return oA;case 35666:return lA;case 35674:return uA;case 35675:return cA;case 35676:return dA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return xA;case 36295:return yA;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return wA}}function CA(t,e){t.uniform1fv(this.addr,e)}function LA(t,e){let n=uo(e,this.size,2);t.uniform2fv(this.addr,n)}function IA(t,e){let n=uo(e,this.size,3);t.uniform3fv(this.addr,n)}function AA(t,e){let n=uo(e,this.size,4);t.uniform4fv(this.addr,n)}function EA(t,e){let n=uo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function TA(t,e){let n=uo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function RA(t,e){let n=uo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PA(t,e){t.uniform1iv(this.addr,e)}function kA(t,e){t.uniform2iv(this.addr,e)}function DA(t,e){t.uniform3iv(this.addr,e)}function FA(t,e){t.uniform4iv(this.addr,e)}function NA(t,e){t.uniform1uiv(this.addr,e)}function BA(t,e){t.uniform2uiv(this.addr,e)}function UA(t,e){t.uniform3uiv(this.addr,e)}function OA(t,e){t.uniform4uiv(this.addr,e)}function zA(t,e,n){let i=this.cache,a=e.length,r=ph(n,a);Yt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=l0:s=$_;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function VA(t,e,n){let i=this.cache,a=e.length,r=ph(n,a);Yt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||Z_,r[s])}function HA(t,e,n){let i=this.cache,a=e.length,r=ph(n,a);Yt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||j_,r[s])}function GA(t,e,n){let i=this.cache,a=e.length,r=ph(n,a);Yt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||Y_,r[s])}function WA(t){switch(t){case 5126:return CA;case 35664:return LA;case 35665:return IA;case 35666:return AA;case 35674:return EA;case 35675:return TA;case 35676:return RA;case 5124:case 35670:return PA;case 35667:case 35671:return kA;case 35668:case 35672:return DA;case 35669:case 35673:return FA;case 5125:return NA;case 36294:return BA;case 36295:return UA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return GA}}function k_(t,e){t.seq.push(e),t.map[e.id]=e}function qA(t,e,n){let i=t.name,a=i.length;for(s0.lastIndex=0;;){let r=s0.exec(i),s=s0.lastIndex,o=r[1],l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===a){k_(n,u===void 0?new u0(o,t,e):new c0(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new d0(o),k_(n,p)),n=p}}}function D_(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}function YA(t,e){let n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){let o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function ZA(t){Qe._getMatrix(F_,Qe.workingColorSpace,t);let e=`mat3( ${F_.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Al:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function N_(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+YA(t.getShaderSource(e),o)}else return r}function jA(t,e){let n=ZA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function JA(t,e){let n=KA[e];return n===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function QA(){Qe.getLuminanceCoefficients(uh);let t=uh.x.toFixed(4),e=uh.y.toFixed(4),n=uh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ru).join(`
`)}function tE(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nE(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let r=t.getActiveAttrib(e,a),s=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function ru(t){return t!==""}function B_(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function f0(t){return t.replace(iE,rE)}function rE(t,e){let n=qe[e];if(n===void 0){let i=aE.get(e);if(i!==void 0)n=qe[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return f0(n)}function O_(t){return t.replace(sE,oE)}function oE(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function z_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function uE(t){return lE[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function dE(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":cE[t.envMapMode]||"ENVMAP_TYPE_CUBE"}function hE(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":fE[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function mE(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":pE[t.combine]||"ENVMAP_BLENDING_NONE"}function gE(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xE(t,e,n,i){let a=t.getContext(),r=n.defines,s=n.vertexShader,o=n.fragmentShader,l=uE(n),u=dE(n),d=hE(n),p=mE(n),f=gE(n),g=eE(n),y=tE(r),w=a.createProgram(),x,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ru).join(`
`),x.length>0&&(x+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ru).join(`
`),h.length>0&&(h+=`
`)):(x=[z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ru).join(`
`),h=[z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ai?"#define TONE_MAPPING":"",n.toneMapping!==Ai?qe.tonemapping_pars_fragment:"",n.toneMapping!==Ai?JA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,jA("linearToOutputTexel",n.outputColorSpace),QA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ru).join(`
`)),s=f0(s),s=B_(s,n),s=U_(s,n),o=f0(o),o=B_(o,n),o=U_(o,n),s=O_(s),o=O_(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",n.glslVersion===Zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let C=v+x+s,M=v+h+o,b=D_(a,a.VERTEX_SHADER,C),I=D_(a,a.FRAGMENT_SHADER,M);a.attachShader(w,b),a.attachShader(w,I),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function T(k){if(t.debug.checkShaderErrors){let F=a.getProgramInfoLog(w)||"",z=a.getShaderInfoLog(b)||"",H=a.getShaderInfoLog(I)||"",B=F.trim(),K=z.trim(),Z=H.trim(),U=!0,Q=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,w,b,I);else{let de=N_(a,b,"vertex"),ue=N_(a,I,"fragment");ze("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+B+`
`+de+`
`+ue)}else B!==""?Ve("WebGLProgram: Program Info Log:",B):(K===""||Z==="")&&(Q=!1);Q&&(k.diagnostics={runnable:U,programLog:B,vertexShader:{log:K,prefix:x},fragmentShader:{log:Z,prefix:h}})}a.deleteShader(b),a.deleteShader(I),S=new lo(a,w),L=nE(a,w)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let L;this.getAttributes=function(){return L===void 0&&T(this),L};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,XA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$A++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=b,this.fragmentShader=I,this}function vE(t){return t===fr||t===eu||t===tu}function SE(t,e,n,i,a,r){let s=new Ks,o=new h0,l=new Set,u=[],d=new Map,p=i.logarithmicDepthBuffer,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function w(S,L,R,k,F,z){let H=k.fog,B=F.geometry,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,Z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,U=e.get(S.envMap||K,Z),Q=U&&U.mapping===Yl?U.image.height:null,de=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ve("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ue=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Me=ue!==void 0?ue.length:0,Pe=0;B.morphAttributes.position!==void 0&&(Pe=1),B.morphAttributes.normal!==void 0&&(Pe=2),B.morphAttributes.color!==void 0&&(Pe=3);let Ze,We,ie,E;if(de){let Ie=Zi[de];Ze=Ie.vertexShader,We=Ie.fragmentShader}else{Ze=S.vertexShader,We=S.fragmentShader;let Ie=o.getVertexShaderStage(S),mt=o.getFragmentShaderStage(S);o.update(S,Ie,mt),ie=Ie.id,E=mt.id}let q=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,pt=!!S.map,Xe=!!S.matcap,st=!!U,tt=!!S.aoMap,Je=!!S.lightMap,vt=!!S.bumpMap&&S.wireframe===!1,Et=!!S.normalMap,Ut=!!S.displacementMap,Gt=!!S.emissiveMap,St=!!S.metalnessMap,Tt=!!S.roughnessMap,N=S.anisotropy>0,ln=S.clearcoat>0,at=S.dispersion>0,P=S.iridescence>0,_=S.sheen>0,O=S.transmission>0,$=N&&!!S.anisotropyMap,te=ln&&!!S.clearcoatMap,fe=ln&&!!S.clearcoatNormalMap,he=ln&&!!S.clearcoatRoughnessMap,ne=P&&!!S.iridescenceMap,ae=P&&!!S.iridescenceThicknessMap,ge=_&&!!S.sheenColorMap,ke=_&&!!S.sheenRoughnessMap,Se=!!S.specularMap,xe=!!S.specularColorMap,Ne=!!S.specularIntensityMap,G=O&&!!S.transmissionMap,me=O&&!!S.thicknessMap,D=!!S.gradientMap,oe=!!S.alphaMap,J=S.alphaTest>0,pe=!!S.alphaHash,ye=!!S.extensions,se=Ai;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(se=t.toneMapping);let _e={shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:We,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:E,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,outputColorSpace:q===null?t.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:pt,matcap:Xe,envMap:st,envMapMode:st&&U.mapping,envMapCubeUVHeight:Q,aoMap:tt,lightMap:Je,bumpMap:vt,normalMap:Et,displacementMap:Ut,emissiveMap:Gt,normalMapObjectSpace:Et&&S.normalMapType===u_,normalMapTangentSpace:Et&&S.normalMapType===rh,packedNormalMap:Et&&S.normalMapType===rh&&vE(S.normalMap.format),metalnessMap:St,roughnessMap:Tt,anisotropy:N,anisotropyMap:$,clearcoat:ln,clearcoatMap:te,clearcoatNormalMap:fe,clearcoatRoughnessMap:he,dispersion:at,iridescence:P,iridescenceMap:ne,iridescenceThicknessMap:ae,sheen:_,sheenColorMap:ge,sheenRoughnessMap:ke,specularMap:Se,specularColorMap:xe,specularIntensityMap:Ne,transmission:O,transmissionMap:G,thicknessMap:me,gradientMap:D,opaque:S.transparent===!1&&S.blending===Hr&&S.alphaToCoverage===!1,alphaMap:oe,alphaTest:J,alphaHash:pe,combine:S.combine,mapUv:pt&&y(S.map.channel),aoMapUv:tt&&y(S.aoMap.channel),lightMapUv:Je&&y(S.lightMap.channel),bumpMapUv:vt&&y(S.bumpMap.channel),normalMapUv:Et&&y(S.normalMap.channel),displacementMapUv:Ut&&y(S.displacementMap.channel),emissiveMapUv:Gt&&y(S.emissiveMap.channel),metalnessMapUv:St&&y(S.metalnessMap.channel),roughnessMapUv:Tt&&y(S.roughnessMap.channel),anisotropyMapUv:$&&y(S.anisotropyMap.channel),clearcoatMapUv:te&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&y(S.sheenRoughnessMap.channel),specularMapUv:Se&&y(S.specularMap.channel),specularColorMapUv:xe&&y(S.specularColorMap.channel),specularIntensityMapUv:Ne&&y(S.specularIntensityMap.channel),transmissionMapUv:G&&y(S.transmissionMap.channel),thicknessMapUv:me&&y(S.thicknessMap.channel),alphaMapUv:oe&&y(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Et||N),vertexNormals:!!B.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(pt||oe),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||B.attributes.normal===void 0&&Et===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Le,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Pe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:pt&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:Gt&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qi,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ye&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&S.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function x(S){let L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)L.push(R),L.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(h(L,S),v(L,S),L.push(t.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function h(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.numLightProbes),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function v(S,L){s.disableAll(),L.instancing&&s.enable(0),L.instancingColor&&s.enable(1),L.instancingMorph&&s.enable(2),L.matcap&&s.enable(3),L.envMap&&s.enable(4),L.normalMapObjectSpace&&s.enable(5),L.normalMapTangentSpace&&s.enable(6),L.clearcoat&&s.enable(7),L.iridescence&&s.enable(8),L.alphaTest&&s.enable(9),L.vertexColors&&s.enable(10),L.vertexAlphas&&s.enable(11),L.vertexUv1s&&s.enable(12),L.vertexUv2s&&s.enable(13),L.vertexUv3s&&s.enable(14),L.vertexTangents&&s.enable(15),L.anisotropy&&s.enable(16),L.alphaHash&&s.enable(17),L.batching&&s.enable(18),L.dispersion&&s.enable(19),L.batchingColor&&s.enable(20),L.gradientMap&&s.enable(21),L.packedNormalMap&&s.enable(22),L.vertexNormals&&s.enable(23),S.push(s.mask),s.disableAll(),L.fog&&s.enable(0),L.useFog&&s.enable(1),L.flatShading&&s.enable(2),L.logarithmicDepthBuffer&&s.enable(3),L.reversedDepthBuffer&&s.enable(4),L.skinning&&s.enable(5),L.morphTargets&&s.enable(6),L.morphNormals&&s.enable(7),L.morphColors&&s.enable(8),L.premultipliedAlpha&&s.enable(9),L.shadowMapEnabled&&s.enable(10),L.doubleSided&&s.enable(11),L.flipSided&&s.enable(12),L.useDepthPacking&&s.enable(13),L.dithering&&s.enable(14),L.transmission&&s.enable(15),L.sheen&&s.enable(16),L.opaque&&s.enable(17),L.pointsUvs&&s.enable(18),L.decodeVideoTexture&&s.enable(19),L.decodeVideoTextureEmissive&&s.enable(20),L.alphaToCoverage&&s.enable(21),L.numLightProbeGrids>0&&s.enable(22),L.hasPositionAttribute&&s.enable(23),S.push(s.mask)}function C(S){let L=g[S.type],R;if(L){let k=Zi[L];R=__.clone(k.uniforms)}else R=S.uniforms;return R}function M(S,L){let R=d.get(L);return R!==void 0?++R.usedTimes:(R=new xE(t,L,S,a),u.push(R),d.set(L,R)),R}function b(S){if(--S.usedTimes===0){let L=u.indexOf(S);u[L]=u[u.length-1],u.pop(),d.delete(S.cacheKey),S.destroy()}}function I(S){o.remove(S)}function T(){o.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:C,acquireProgram:M,releaseProgram:b,releaseShaderCache:I,programs:u,dispose:T}}function _E(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function ME(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function V_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function H_(){let t=[],e=0,n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function o(f,g,y,w,x,h){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:g,material:y,materialVariant:s(f),groupOrder:w,renderOrder:f.renderOrder,z:x,group:h},t[e]=v):(v.id=f.id,v.object=f,v.geometry=g,v.material=y,v.materialVariant=s(f),v.groupOrder=w,v.renderOrder=f.renderOrder,v.z=x,v.group=h),e++,v}function l(f,g,y,w,x,h){let v=o(f,g,y,w,x,h);y.transmission>0?i.push(v):y.transparent===!0?a.push(v):n.push(v)}function u(f,g,y,w,x,h){let v=o(f,g,y,w,x,h);y.transmission>0?i.unshift(v):y.transparent===!0?a.unshift(v):n.unshift(v)}function d(f,g,y){n.length>1&&n.sort(f||ME),i.length>1&&i.sort(g||V_),a.length>1&&a.sort(g||V_),y&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let f=e,g=t.length;f<g;f++){let y=t[f];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:u,finish:p,sort:d}}function wE(){let t=new WeakMap;function e(i,a){let r=t.get(i),s;return r===void 0?(s=new H_,t.set(i,[s])):a>=r.length?(s=new H_,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function bE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Ke};break;case"SpotLight":n={position:new W,direction:new W,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function CE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}function IE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function AE(t){let e=new bE,n=CE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);let a=new W,r=new Lt,s=new Lt;function o(u){let d=0,p=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let g=0,y=0,w=0,x=0,h=0,v=0,C=0,M=0,b=0,I=0,T=0;u.sort(IE);for(let L=0,R=u.length;L<R;L++){let k=u[L],F=k.color,z=k.intensity,H=k.distance,B=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===fr?B=k.shadow.map.texture:B=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)d+=F.r*z,p+=F.g*z,f+=F.b*z;else if(k.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(k.sh.coefficients[K],z);T++}else if(k.isDirectionalLight){let K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let Z=k.shadow,U=n.get(k);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=k.shadow.matrix,v++}i.directional[g]=K,g++}else if(k.isSpotLight){let K=e.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy(F).multiplyScalar(z),K.distance=H,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,i.spot[w]=K;let Z=k.shadow;if(k.map&&(i.spotLightMap[b]=k.map,b++,Z.updateMatrices(k),k.castShadow&&I++),i.spotLightMatrix[w]=Z.matrix,k.castShadow){let U=n.get(k);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,i.spotShadow[w]=U,i.spotShadowMap[w]=B,M++}w++}else if(k.isRectAreaLight){let K=e.get(k);K.color.copy(F).multiplyScalar(z),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),i.rectArea[x]=K,x++}else if(k.isPointLight){let K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){let Z=k.shadow,U=n.get(k);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,U.shadowCameraNear=Z.camera.near,U.shadowCameraFar=Z.camera.far,i.pointShadow[y]=U,i.pointShadowMap[y]=B,i.pointShadowMatrix[y]=k.shadow.matrix,C++}i.point[y]=K,y++}else if(k.isHemisphereLight){let K=e.get(k);K.skyColor.copy(k.color).multiplyScalar(z),K.groundColor.copy(k.groundColor).multiplyScalar(z),i.hemi[h]=K,h++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;let S=i.hash;(S.directionalLength!==g||S.pointLength!==y||S.spotLength!==w||S.rectAreaLength!==x||S.hemiLength!==h||S.numDirectionalShadows!==v||S.numPointShadows!==C||S.numSpotShadows!==M||S.numSpotMaps!==b||S.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=w,i.rectArea.length=x,i.point.length=y,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=T,S.directionalLength=g,S.pointLength=y,S.spotLength=w,S.rectAreaLength=x,S.hemiLength=h,S.numDirectionalShadows=v,S.numPointShadows=C,S.numSpotShadows=M,S.numSpotMaps=b,S.numLightProbes=T,i.version=LE++)}function l(u,d){let p=0,f=0,g=0,y=0,w=0,x=d.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){let C=u[h];if(C.isDirectionalLight){let M=i.directional[p];M.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(x),p++}else if(C.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(x),g++}else if(C.isRectAreaLight){let M=i.rectArea[y];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(x),s.identity(),r.copy(C.matrixWorld),r.premultiply(x),s.extractRotation(r),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),y++}else if(C.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(x),f++}else if(C.isHemisphereLight){let M=i.hemi[w];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(x),w++}}}return{setup:o,setupView:l,state:i}}function G_(t){let e=new AE(t),n=[],i=[],a=[];function r(f){p.camera=f,n.length=0,i.length=0,a.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function l(f){a.push(f)}function u(){e.setup(n)}function d(f){e.setupView(n,f)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function EE(t){let e=new WeakMap;function n(a,r=0){let s=e.get(a),o;return s===void 0?(o=new G_(t),e.set(a,[o])):r>=s.length?(o=new G_(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}function DE(t,e,n){let i=new eo,a=new Ye,r=new Ye,s=new It,o=new nf,l=new af,u={},d=n.maxTextureSize,p={[ga]:on,[on]:ga,[qi]:qi},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:TE,fragmentShader:RE}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let y=new jn;y.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new rt(y,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let h=this.type;this.render=function(I,T,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;this.type===vf&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xl);let L=t.getRenderTarget(),R=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Xi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=h!==this.type;z&&T.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(B=>B.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,B=I.length;H<B;H++){let K=I[H],Z=K.shadow;if(Z===void 0){Ve("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;a.copy(Z.mapSize);let U=Z.getFrameExtents();a.multiply(U),r.copy(Z.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/U.x),a.x=r.x*U.x,Z.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/U.y),a.y=r.y*U.y,Z.mapSize.y=r.y));let Q=t.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=Q,Z.map===null||z===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ao){if(K.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Zn(a.x,a.y,{format:fr,type:$i,minFilter:sn,magFilter:sn,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new ya(a.x,a.y,Ti),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=Hi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=en,Z.map.depthTexture.magFilter=en}else K.isPointLight?(Z.map=new dh(a.x),Z.map.depthTexture=new ef(a.x,Ei)):(Z.map=new Zn(a.x,a.y),Z.map.depthTexture=new ya(a.x,a.y,Ei)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=Hi,this.type===Xl?(Z.map.depthTexture.compareFunction=Q?oh:sh,Z.map.depthTexture.minFilter=sn,Z.map.depthTexture.magFilter=sn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=en,Z.map.depthTexture.magFilter=en);Z.camera.updateProjectionMatrix()}let de=Z.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<de;ue++){if(Z.map.isWebGLCubeRenderTarget)t.setRenderTarget(Z.map,ue),t.clear();else{ue===0&&(t.setRenderTarget(Z.map),t.clear());let Me=Z.getViewport(ue);s.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),F.viewport(s)}if(K.isPointLight){let Me=Z.camera,Pe=Z.matrix,Ze=K.distance||Me.far;Ze!==Me.far&&(Me.far=Ze,Me.updateProjectionMatrix()),au.setFromMatrixPosition(K.matrixWorld),Me.position.copy(au),o0.copy(Me.position),o0.add(PE[ue]),Me.up.copy(kE[ue]),Me.lookAt(o0),Me.updateMatrixWorld(),Pe.makeTranslation(-au.x,-au.y,-au.z),W_.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(W_,Me.coordinateSystem,Me.reversedDepth)}else Z.updateMatrices(K);i=Z.getFrustum(),M(T,S,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ao&&v(Z,S),Z.needsUpdate=!1}h=this.type,x.needsUpdate=!1,t.setRenderTarget(L,R,k)};function v(I,T){let S=e.update(w);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zn(a.x,a.y,{format:fr,type:$i})),f.uniforms.shadow_pass.value=I.map.depthTexture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(T,null,S,f,w,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(T,null,S,g,w,null)}function C(I,T,S,L){let R=null,k=S.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)R=k;else if(R=S.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=R.uuid,z=T.uuid,H=u[F];H===void 0&&(H={},u[F]=H);let B=H[z];B===void 0&&(B=R.clone(),H[z]=B,T.addEventListener("dispose",b)),R=B}if(R.visible=T.visible,R.wireframe=T.wireframe,L===ao?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:p[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=t.properties.get(R);F.light=S}return R}function M(I,T,S,L,R){if(I.visible===!1)return;if(I.layers.test(T.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===ao)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,I.matrixWorld);let z=e.update(I),H=I.material;if(Array.isArray(H)){let B=z.groups;for(let K=0,Z=B.length;K<Z;K++){let U=B[K],Q=H[U.materialIndex];if(Q&&Q.visible){let de=C(I,Q,L,R);I.onBeforeShadow(t,I,T,S,z,de,U),t.renderBufferDirect(S,null,z,de,I,U),I.onAfterShadow(t,I,T,S,z,de,U)}}}else if(H.visible){let B=C(I,H,L,R);I.onBeforeShadow(t,I,T,S,z,B,null),t.renderBufferDirect(S,null,z,B,I,null),I.onAfterShadow(t,I,T,S,z,B,null)}}let F=I.children;for(let z=0,H=F.length;z<H;z++)M(F[z],T,S,L,R)}function b(I){I.target.removeEventListener("dispose",b);for(let S in u){let L=u[S],R=I.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function FE(t,e){function n(){let D=!1,oe=new It,J=null,pe=new It(0,0,0,0);return{setMask:function(ye){J!==ye&&!D&&(t.colorMask(ye,ye,ye,ye),J=ye)},setLocked:function(ye){D=ye},setClear:function(ye,se,_e,Ie,mt){mt===!0&&(ye*=Ie,se*=Ie,_e*=Ie),oe.set(ye,se,_e,Ie),pe.equals(oe)===!1&&(t.clearColor(ye,se,_e,Ie),pe.copy(oe))},reset:function(){D=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,oe=!1,J=null,pe=null,ye=null;return{setReversed:function(se){if(oe!==se){let _e=e.get("EXT_clip_control");se?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),oe=se;let Ie=ye;ye=null,this.setClear(Ie)}},getReversed:function(){return oe},setTest:function(se){se?q(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(se){J!==se&&!D&&(t.depthMask(se),J=se)},setFunc:function(se){if(oe&&(se=v_[se]),pe!==se){switch(se){case zd:t.depthFunc(t.NEVER);break;case Vd:t.depthFunc(t.ALWAYS);break;case Hd:t.depthFunc(t.LESS);break;case Gr:t.depthFunc(t.LEQUAL);break;case Gd:t.depthFunc(t.EQUAL);break;case Wd:t.depthFunc(t.GEQUAL);break;case qd:t.depthFunc(t.GREATER);break;case Xd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=se}},setLocked:function(se){D=se},setClear:function(se){ye!==se&&(ye=se,oe&&(se=1-se),t.clearDepth(se))},reset:function(){D=!1,J=null,pe=null,ye=null,oe=!1}}}function a(){let D=!1,oe=null,J=null,pe=null,ye=null,se=null,_e=null,Ie=null,mt=null;return{setTest:function(ot){D||(ot?q(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!D&&(t.stencilMask(ot),oe=ot)},setFunc:function(ot,Nn,Bn){(J!==ot||pe!==Nn||ye!==Bn)&&(t.stencilFunc(ot,Nn,Bn),J=ot,pe=Nn,ye=Bn)},setOp:function(ot,Nn,Bn){(se!==ot||_e!==Nn||Ie!==Bn)&&(t.stencilOp(ot,Nn,Bn),se=ot,_e=Nn,Ie=Bn)},setLocked:function(ot){D=ot},setClear:function(ot){mt!==ot&&(t.clearStencil(ot),mt=ot)},reset:function(){D=!1,oe=null,J=null,pe=null,ye=null,se=null,_e=null,Ie=null,mt=null}}}let r=new n,s=new i,o=new a,l=new WeakMap,u=new WeakMap,d={},p={},f={},g=new WeakMap,y=[],w=null,x=!1,h=null,v=null,C=null,M=null,b=null,I=null,T=null,S=new Ke(0,0,0),L=0,R=!1,k=null,F=null,z=null,H=null,B=null,K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,U=0,Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=U>=1):Q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=U>=2);let de=null,ue={},Me=t.getParameter(t.SCISSOR_BOX),Pe=t.getParameter(t.VIEWPORT),Ze=new It().fromArray(Me),We=new It().fromArray(Pe);function ie(D,oe,J,pe){let ye=new Uint8Array(4),se=t.createTexture();t.bindTexture(D,se),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<J;_e++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(oe+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return se}let E={};E[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),E[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),E[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),q(t.DEPTH_TEST),s.setFunc(Gr),vt(!1),Et(Tg),q(t.CULL_FACE),tt(Xi);function q(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function Le(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Oe(D,oe){return f[D]!==oe?(t.bindFramebuffer(D,oe),f[D]=oe,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=oe),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Fe(D,oe){let J=y,pe=!1;if(D){J=g.get(oe),J===void 0&&(J=[],g.set(oe,J));let ye=D.textures;if(J.length!==ye.length||J[0]!==t.COLOR_ATTACHMENT0){for(let se=0,_e=ye.length;se<_e;se++)J[se]=t.COLOR_ATTACHMENT0+se;J.length=ye.length,pe=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,pe=!0);pe&&t.drawBuffers(J)}function pt(D){return w!==D?(t.useProgram(D),w=D,!0):!1}let Xe={[nr]:t.FUNC_ADD,[HS]:t.FUNC_SUBTRACT,[GS]:t.FUNC_REVERSE_SUBTRACT};Xe[WS]=t.MIN,Xe[qS]=t.MAX;let st={[XS]:t.ZERO,[$S]:t.ONE,[YS]:t.SRC_COLOR,[Ud]:t.SRC_ALPHA,[e_]:t.SRC_ALPHA_SATURATE,[JS]:t.DST_COLOR,[jS]:t.DST_ALPHA,[ZS]:t.ONE_MINUS_SRC_COLOR,[Od]:t.ONE_MINUS_SRC_ALPHA,[QS]:t.ONE_MINUS_DST_COLOR,[KS]:t.ONE_MINUS_DST_ALPHA,[t_]:t.CONSTANT_COLOR,[n_]:t.ONE_MINUS_CONSTANT_COLOR,[i_]:t.CONSTANT_ALPHA,[a_]:t.ONE_MINUS_CONSTANT_ALPHA};function tt(D,oe,J,pe,ye,se,_e,Ie,mt,ot){if(D===Xi){x===!0&&(Le(t.BLEND),x=!1);return}if(x===!1&&(q(t.BLEND),x=!0),D!==VS){if(D!==h||ot!==R){if((v!==nr||b!==nr)&&(t.blendEquation(t.FUNC_ADD),v=nr,b=nr),ot)switch(D){case Hr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rg:t.blendFunc(t.ONE,t.ONE);break;case Pg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ze("WebGLState: Invalid blending: ",D);break}else switch(D){case Hr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Pg:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kg:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",D);break}C=null,M=null,I=null,T=null,S.set(0,0,0),L=0,h=D,R=ot}return}ye=ye||oe,se=se||J,_e=_e||pe,(oe!==v||ye!==b)&&(t.blendEquationSeparate(Xe[oe],Xe[ye]),v=oe,b=ye),(J!==C||pe!==M||se!==I||_e!==T)&&(t.blendFuncSeparate(st[J],st[pe],st[se],st[_e]),C=J,M=pe,I=se,T=_e),(Ie.equals(S)===!1||mt!==L)&&(t.blendColor(Ie.r,Ie.g,Ie.b,mt),S.copy(Ie),L=mt),h=D,R=!1}function Je(D,oe){D.side===qi?Le(t.CULL_FACE):q(t.CULL_FACE);let J=D.side===on;oe&&(J=!J),vt(J),D.blending===Hr&&D.transparent===!1?tt(Xi):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);let pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function vt(D){k!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),k=D)}function Et(D){D!==OS?(q(t.CULL_FACE),D!==F&&(D===Tg?t.cullFace(t.BACK):D===zS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),F=D}function Ut(D){D!==z&&(Z&&t.lineWidth(D),z=D)}function Gt(D,oe,J){D?(q(t.POLYGON_OFFSET_FILL),(H!==oe||B!==J)&&(H=oe,B=J,s.getReversed()&&(oe=-oe),t.polygonOffset(oe,J))):Le(t.POLYGON_OFFSET_FILL)}function St(D){D?q(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function Tt(D){D===void 0&&(D=t.TEXTURE0+K-1),de!==D&&(t.activeTexture(D),de=D)}function N(D,oe,J){J===void 0&&(de===null?J=t.TEXTURE0+K-1:J=de);let pe=ue[J];pe===void 0&&(pe={type:void 0,texture:void 0},ue[J]=pe),(pe.type!==D||pe.texture!==oe)&&(de!==J&&(t.activeTexture(J),de=J),t.bindTexture(D,oe||E[D]),pe.type=D,pe.texture=oe)}function ln(){let D=ue[de];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function at(){try{t.compressedTexImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function _(){try{t.texSubImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function O(){try{t.texSubImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function fe(){try{t.texStorage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function he(){try{t.texStorage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function ne(){try{t.texImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function ae(){try{t.texImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function ge(D){return p[D]!==void 0?p[D]:t.getParameter(D)}function ke(D,oe){p[D]!==oe&&(t.pixelStorei(D,oe),p[D]=oe)}function Se(D){Ze.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function xe(D){We.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),We.copy(D))}function Ne(D,oe){let J=u.get(oe);J===void 0&&(J=new WeakMap,u.set(oe,J));let pe=J.get(D);pe===void 0&&(pe=t.getUniformBlockIndex(oe,D.name),J.set(D,pe))}function G(D,oe){let pe=u.get(oe).get(D);l.get(oe)!==pe&&(t.uniformBlockBinding(oe,pe,D.__bindingPointIndex),l.set(oe,pe))}function me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},de=null,ue={},f={},g=new WeakMap,y=[],w=null,x=!1,h=null,v=null,C=null,M=null,b=null,I=null,T=null,S=new Ke(0,0,0),L=0,R=!1,k=null,F=null,z=null,H=null,B=null,Ze.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:q,disable:Le,bindFramebuffer:Oe,drawBuffers:Fe,useProgram:pt,setBlending:tt,setMaterial:Je,setFlipSided:vt,setCullFace:Et,setLineWidth:Ut,setPolygonOffset:Gt,setScissorTest:St,activeTexture:Tt,bindTexture:N,unbindTexture:ln,compressedTexImage2D:at,compressedTexImage3D:P,texImage2D:ne,texImage3D:ae,pixelStorei:ke,getParameter:ge,updateUBOMapping:Ne,uniformBlockBinding:G,texStorage2D:fe,texStorage3D:he,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:$,compressedTexSubImage3D:te,scissor:Se,viewport:xe,reset:me}}function NE(t,e,n,i,a,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ye,d=new WeakMap,p=new Set,f,g=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,_){return y?new OffscreenCanvas(P,_):El("canvas")}function x(P,_,O){let $=1,te=at(P);if((te.width>O||te.height>O)&&($=O/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let fe=Math.floor($*te.width),he=Math.floor($*te.height);f===void 0&&(f=w(fe,he));let ne=_?w(fe,he):f;return ne.width=fe,ne.height=he,ne.getContext("2d").drawImage(P,0,0,fe,he),Ve("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+fe+"x"+he+")."),ne}else return"data"in P&&Ve("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function h(P){return P.generateMipmaps}function v(P){t.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(P,_,O,$,te,fe=!1){if(P!==null){if(t[P]!==void 0)return t[P];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he;$&&(he=e.get("EXT_texture_norm16"),he||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=_;if(_===t.RED&&(O===t.FLOAT&&(ne=t.R32F),O===t.HALF_FLOAT&&(ne=t.R16F),O===t.UNSIGNED_BYTE&&(ne=t.R8),O===t.UNSIGNED_SHORT&&he&&(ne=he.R16_EXT),O===t.SHORT&&he&&(ne=he.R16_SNORM_EXT)),_===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(ne=t.R8UI),O===t.UNSIGNED_SHORT&&(ne=t.R16UI),O===t.UNSIGNED_INT&&(ne=t.R32UI),O===t.BYTE&&(ne=t.R8I),O===t.SHORT&&(ne=t.R16I),O===t.INT&&(ne=t.R32I)),_===t.RG&&(O===t.FLOAT&&(ne=t.RG32F),O===t.HALF_FLOAT&&(ne=t.RG16F),O===t.UNSIGNED_BYTE&&(ne=t.RG8),O===t.UNSIGNED_SHORT&&he&&(ne=he.RG16_EXT),O===t.SHORT&&he&&(ne=he.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(ne=t.RG8UI),O===t.UNSIGNED_SHORT&&(ne=t.RG16UI),O===t.UNSIGNED_INT&&(ne=t.RG32UI),O===t.BYTE&&(ne=t.RG8I),O===t.SHORT&&(ne=t.RG16I),O===t.INT&&(ne=t.RG32I)),_===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),O===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),O===t.UNSIGNED_INT&&(ne=t.RGB32UI),O===t.BYTE&&(ne=t.RGB8I),O===t.SHORT&&(ne=t.RGB16I),O===t.INT&&(ne=t.RGB32I)),_===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),O===t.UNSIGNED_INT&&(ne=t.RGBA32UI),O===t.BYTE&&(ne=t.RGBA8I),O===t.SHORT&&(ne=t.RGBA16I),O===t.INT&&(ne=t.RGBA32I)),_===t.RGB&&(O===t.UNSIGNED_SHORT&&he&&(ne=he.RGB16_EXT),O===t.SHORT&&he&&(ne=he.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(ne=t.R11F_G11F_B10F)),_===t.RGBA){let ae=fe?Al:Qe.getTransfer(te);O===t.FLOAT&&(ne=t.RGBA32F),O===t.HALF_FLOAT&&(ne=t.RGBA16F),O===t.UNSIGNED_BYTE&&(ne=ae===lt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&he&&(ne=he.RGBA16_EXT),O===t.SHORT&&he&&(ne=he.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(P,_){let O;return P?_===null||_===Ei||_===so?O=t.DEPTH24_STENCIL8:_===Ti?O=t.DEPTH32F_STENCIL8:_===ro&&(O=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ei||_===so?O=t.DEPTH_COMPONENT24:_===Ti?O=t.DEPTH_COMPONENT32F:_===ro&&(O=t.DEPTH_COMPONENT16),O}function I(P,_){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function T(P){let _=P.target;_.removeEventListener("dispose",T),L(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&p.delete(_)}function S(P){let _=P.target;_.removeEventListener("dispose",S),k(_)}function L(P){let _=i.get(P);if(_.__webglInit===void 0)return;let O=P.source,$=g.get(O);if($){let te=$[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(P),Object.keys($).length===0&&g.delete(O)}i.remove(P)}function R(P){let _=i.get(P);t.deleteTexture(_.__webglTexture);let O=P.source,$=g.get(O);delete $[_.__cacheKey],s.memory.textures--}function k(P){let _=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let te=0;te<_.__webglFramebuffer[$].length;te++)t.deleteFramebuffer(_.__webglFramebuffer[$][te]);else t.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)t.deleteFramebuffer(_.__webglFramebuffer[$]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=P.textures;for(let $=0,te=O.length;$<te;$++){let fe=i.get(O[$]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),s.memory.textures--),i.remove(O[$])}i.remove(P)}let F=0;function z(){F=0}function H(){return F}function B(P){F=P}function K(){let P=F;return P>=a.maxTextures&&Ve("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),F+=1,P}function Z(P){let _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function U(P,_){let O=i.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){let $=P.image;if($===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(O,P,_);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+_)}function Q(P,_){let O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Le(O,P,_);return}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+_)}function de(P,_){let O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Le(O,P,_);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+_)}function ue(P,_){let O=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&O.__version!==P.version){Oe(O,P,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+_)}let Me={[$s]:t.REPEAT,[Vi]:t.CLAMP_TO_EDGE,[$d]:t.MIRRORED_REPEAT},Pe={[en]:t.NEAREST,[o_]:t.NEAREST_MIPMAP_NEAREST,[Zl]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Mf]:t.LINEAR_MIPMAP_NEAREST,[cr]:t.LINEAR_MIPMAP_LINEAR},Ze={[c_]:t.NEVER,[m_]:t.ALWAYS,[d_]:t.LESS,[sh]:t.LEQUAL,[f_]:t.EQUAL,[oh]:t.GEQUAL,[h_]:t.GREATER,[p_]:t.NOTEQUAL};function We(P,_){if(_.type===Ti&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===Mf||_.magFilter===Zl||_.magFilter===cr||_.minFilter===sn||_.minFilter===Mf||_.minFilter===Zl||_.minFilter===cr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,Me[_.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Me[_.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Me[_.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Pe[_.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Pe[_.minFilter]),_.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Ze[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==Zl&&_.minFilter!==cr||_.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ie(P,_){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",T));let $=_.source,te=g.get($);te===void 0&&(te={},g.set($,te));let fe=Z(_);if(fe!==P.__cacheKey){te[fe]===void 0&&(te[fe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,O=!0),te[fe].usedTimes++;let he=te[P.__cacheKey];he!==void 0&&(te[P.__cacheKey].usedTimes--,he.usedTimes===0&&R(_)),P.__cacheKey=fe,P.__webglTexture=te[fe].texture}return O}function E(P,_,O){return Math.floor(Math.floor(P/O)/_)}function q(P,_,O,$){let fe=P.updateRanges;if(fe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,O,$,_.data);else{fe.sort((ke,Se)=>ke.start-Se.start);let he=0;for(let ke=1;ke<fe.length;ke++){let Se=fe[he],xe=fe[ke],Ne=Se.start+Se.count,G=E(xe.start,_.width,4),me=E(Se.start,_.width,4);xe.start<=Ne+1&&G===me&&E(xe.start+xe.count-1,_.width,4)===G?Se.count=Math.max(Se.count,xe.start+xe.count-Se.start):(++he,fe[he]=xe)}fe.length=he+1;let ne=n.getParameter(t.UNPACK_ROW_LENGTH),ae=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let ke=0,Se=fe.length;ke<Se;ke++){let xe=fe[ke],Ne=Math.floor(xe.start/4),G=Math.ceil(xe.count/4),me=Ne%_.width,D=Math.floor(Ne/_.width),oe=G,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,me,D,oe,J,O,$,_.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ne),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function Le(P,_,O){let $=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=t.TEXTURE_3D);let te=ie(P,_),fe=_.source;n.bindTexture($,P.__webglTexture,t.TEXTURE0+O);let he=i.get(fe);if(fe.version!==he.__version||te===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let J=Qe.getPrimaries(Qe.workingColorSpace),pe=_.colorSpace===va?null:Qe.getPrimaries(_.colorSpace),ye=_.colorSpace===va||J===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ae=x(_.image,!1,a.maxTextureSize);ae=ln(_,ae);let ge=r.convert(_.format,_.colorSpace),ke=r.convert(_.type),Se=M(_.internalFormat,ge,ke,_.normalized,_.colorSpace,_.isVideoTexture);We($,_);let xe,Ne=_.mipmaps,G=_.isVideoTexture!==!0,me=he.__version===void 0||te===!0,D=fe.dataReady,oe=I(_,ae);if(_.isDepthTexture)Se=b(_.format===dr,_.type),me&&(G?n.texStorage2D(t.TEXTURE_2D,1,Se,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Se,ae.width,ae.height,0,ge,ke,null));else if(_.isDataTexture)if(Ne.length>0){G&&me&&n.texStorage2D(t.TEXTURE_2D,oe,Se,Ne[0].width,Ne[0].height);for(let J=0,pe=Ne.length;J<pe;J++)xe=Ne[J],G?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,ge,ke,xe.data):n.texImage2D(t.TEXTURE_2D,J,Se,xe.width,xe.height,0,ge,ke,xe.data);_.generateMipmaps=!1}else G?(me&&n.texStorage2D(t.TEXTURE_2D,oe,Se,ae.width,ae.height),D&&q(_,ae,ge,ke)):n.texImage2D(t.TEXTURE_2D,0,Se,ae.width,ae.height,0,ge,ke,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){G&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Se,Ne[0].width,Ne[0].height,ae.depth);for(let J=0,pe=Ne.length;J<pe;J++)if(xe=Ne[J],_.format!==ui)if(ge!==null)if(G){if(D)if(_.layerUpdates.size>0){let ye=e0(xe.width,xe.height,_.format,_.type);for(let se of _.layerUpdates){let _e=xe.data.subarray(se*ye/xe.data.BYTES_PER_ELEMENT,(se+1)*ye/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,se,xe.width,xe.height,1,ge,_e)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,ae.depth,ge,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Se,xe.width,xe.height,ae.depth,0,xe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,ae.depth,ge,ke,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Se,xe.width,xe.height,ae.depth,0,ge,ke,xe.data)}else{G&&me&&n.texStorage2D(t.TEXTURE_2D,oe,Se,Ne[0].width,Ne[0].height);for(let J=0,pe=Ne.length;J<pe;J++)xe=Ne[J],_.format!==ui?ge!==null?G?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,ge,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Se,xe.width,xe.height,0,xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,ge,ke,xe.data):n.texImage2D(t.TEXTURE_2D,J,Se,xe.width,xe.height,0,ge,ke,xe.data)}else if(_.isDataArrayTexture)if(G){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Se,ae.width,ae.height,ae.depth),D)if(_.layerUpdates.size>0){let J=e0(ae.width,ae.height,_.format,_.type);for(let pe of _.layerUpdates){let ye=ae.data.subarray(pe*J/ae.data.BYTES_PER_ELEMENT,(pe+1)*J/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,ae.width,ae.height,1,ge,ke,ye)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,ke,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,ae.width,ae.height,ae.depth,0,ge,ke,ae.data);else if(_.isData3DTexture)G?(me&&n.texStorage3D(t.TEXTURE_3D,oe,Se,ae.width,ae.height,ae.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,ke,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Se,ae.width,ae.height,ae.depth,0,ge,ke,ae.data);else if(_.isFramebufferTexture){if(me)if(G)n.texStorage2D(t.TEXTURE_2D,oe,Se,ae.width,ae.height);else{let J=ae.width,pe=ae.height;for(let ye=0;ye<oe;ye++)n.texImage2D(t.TEXTURE_2D,ye,Se,J,pe,0,ge,ke,null),J>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ae.parentNode!==J){J.appendChild(ae),p.add(_),J.onpaint=pe=>{let ye=pe.changedElements;for(let se of p)ye.includes(se.image)&&(se.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ae);else{let ye=t.RGBA,se=t.RGBA,_e=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,se,_e,ae)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(G&&me){let J=at(Ne[0]);n.texStorage2D(t.TEXTURE_2D,oe,Se,J.width,J.height)}for(let J=0,pe=Ne.length;J<pe;J++)xe=Ne[J],G?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ge,ke,xe):n.texImage2D(t.TEXTURE_2D,J,Se,ge,ke,xe);_.generateMipmaps=!1}else if(G){if(me){let J=at(ae);n.texStorage2D(t.TEXTURE_2D,oe,Se,J.width,J.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,ke,ae)}else n.texImage2D(t.TEXTURE_2D,0,Se,ge,ke,ae);h(_)&&v($),he.__version=fe.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Oe(P,_,O){if(_.image.length!==6)return;let $=ie(P,_),te=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+O);let fe=i.get(te);if(te.version!==fe.__version||$===!0){n.activeTexture(t.TEXTURE0+O);let he=Qe.getPrimaries(Qe.workingColorSpace),ne=_.colorSpace===va?null:Qe.getPrimaries(_.colorSpace),ae=_.colorSpace===va||he===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let ge=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!ge&&!ke?Se[se]=x(_.image[se],!0,a.maxCubemapSize):Se[se]=ke?_.image[se].image:_.image[se],Se[se]=ln(_,Se[se]);let xe=Se[0],Ne=r.convert(_.format,_.colorSpace),G=r.convert(_.type),me=M(_.internalFormat,Ne,G,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,oe=fe.__version===void 0||$===!0,J=te.dataReady,pe=I(_,xe);We(t.TEXTURE_CUBE_MAP,_);let ye;if(ge){D&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,me,xe.width,xe.height);for(let se=0;se<6;se++){ye=Se[se].mipmaps;for(let _e=0;_e<ye.length;_e++){let Ie=ye[_e];_.format!==ui?Ne!==null?D?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Ie.width,Ie.height,Ne,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,me,Ie.width,Ie.height,0,Ie.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Ie.width,Ie.height,Ne,G,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,me,Ie.width,Ie.height,0,Ne,G,Ie.data)}}}else{if(ye=_.mipmaps,D&&oe){ye.length>0&&pe++;let se=at(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,me,se.width,se.height)}for(let se=0;se<6;se++)if(ke){D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,Ne,G,Se[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,Se[se].width,Se[se].height,0,Ne,G,Se[se].data);for(let _e=0;_e<ye.length;_e++){let mt=ye[_e].image[se].image;D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,mt.width,mt.height,Ne,G,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,me,mt.width,mt.height,0,Ne,G,mt.data)}}else{D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne,G,Se[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,Ne,G,Se[se]);for(let _e=0;_e<ye.length;_e++){let Ie=ye[_e];D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,Ne,G,Ie.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,me,Ne,G,Ie.image[se])}}}h(_)&&v(t.TEXTURE_CUBE_MAP),fe.__version=te.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Fe(P,_,O,$,te,fe){let he=r.convert(O.format,O.colorSpace),ne=r.convert(O.type),ae=M(O.internalFormat,he,ne,O.normalized,O.colorSpace),ge=i.get(_),ke=i.get(O);if(ke.__renderTarget=_,!ge.__hasExternalTextures){let Se=Math.max(1,_.width>>fe),xe=Math.max(1,_.height>>fe);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,fe,ae,Se,xe,_.depth,0,he,ne,null):n.texImage2D(te,fe,ae,Se,xe,0,he,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Tt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,te,ke.__webglTexture,0,St(_)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,te,ke.__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(P,_,O){if(t.bindRenderbuffer(t.RENDERBUFFER,P),_.depthBuffer){let $=_.depthTexture,te=$&&$.isDepthTexture?$.type:null,fe=b(_.stencilBuffer,te),he=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Tt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(_),fe,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(_),fe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,fe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,P)}else{let $=_.textures;for(let te=0;te<$.length;te++){let fe=$[te],he=r.convert(fe.format,fe.colorSpace),ne=r.convert(fe.type),ae=M(fe.internalFormat,he,ne,fe.normalized,fe.colorSpace);Tt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(_),ae,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(_),ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ae,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(P,_,O){let $=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(_.depthTexture);if(te.__renderTarget=_,(!te.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(te.__webglInit===void 0&&(te.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),We(t.TEXTURE_CUBE_MAP,_.depthTexture);let ge=r.convert(_.depthTexture.format),ke=r.convert(_.depthTexture.type),Se;_.depthTexture.format===Hi?Se=t.DEPTH_COMPONENT24:_.depthTexture.format===dr&&(Se=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Se,_.width,_.height,0,ge,ke,null)}}else U(_.depthTexture,0);let fe=te.__webglTexture,he=St(_),ne=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,ae=_.depthTexture.format===dr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hi)Tt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,ne,fe,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ae,ne,fe,0);else if(_.depthTexture.format===dr)Tt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,ne,fe,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ae,ne,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(P){let _=i.get(P),O=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){let te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=$}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let $=0;$<6;$++)Xe(_.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?Xe(_.__webglFramebuffer[0],P,0):Xe(_.__webglFramebuffer,P,0)}else if(O){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=t.createRenderbuffer(),pt(_.__webglDepthbuffer[$],P,!1);else{let te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,fe)}}else{let $=P.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),pt(_.__webglDepthbuffer,P,!1);else{let te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,fe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(P,_,O){let $=i.get(P);_!==void 0&&Fe($.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&st(P)}function Je(P){let _=P.texture,O=i.get(P),$=i.get(_);P.addEventListener("dispose",S);let te=P.textures,fe=P.isWebGLCubeRenderTarget===!0,he=te.length>1;if(he||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=_.version,s.memory.textures++),fe){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let ae=0;ae<_.mipmaps.length;ae++)O.__webglFramebuffer[ne][ae]=t.createFramebuffer()}else O.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)O.__webglFramebuffer[ne]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(he)for(let ne=0,ae=te.length;ne<ae;ne++){let ge=i.get(te[ne]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),s.memory.textures++)}if(P.samples>0&&Tt(P)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let ae=te[ne];O.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);let ge=r.convert(ae.format,ae.colorSpace),ke=r.convert(ae.type),Se=M(ae.internalFormat,ge,ke,ae.normalized,ae.colorSpace,P.isXRRenderTarget===!0),xe=St(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,Se,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),pt(O.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),We(t.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Fe(O.__webglFramebuffer[ne][ae],P,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae);else Fe(O.__webglFramebuffer[ne],P,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);h(_)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let ne=0,ae=te.length;ne<ae;ne++){let ge=te[ne],ke=i.get(ge),Se=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,ke.__webglTexture),We(Se,ge),Fe(O.__webglFramebuffer,P,ge,t.COLOR_ATTACHMENT0+ne,Se,0),h(ge)&&v(Se)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,$.__webglTexture),We(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Fe(O.__webglFramebuffer[ae],P,_,t.COLOR_ATTACHMENT0,ne,ae);else Fe(O.__webglFramebuffer,P,_,t.COLOR_ATTACHMENT0,ne,0);h(_)&&v(ne),n.unbindTexture()}P.depthBuffer&&st(P)}function vt(P){let _=P.textures;for(let O=0,$=_.length;O<$;O++){let te=_[O];if(h(te)){let fe=C(P),he=i.get(te).__webglTexture;n.bindTexture(fe,he),v(fe),n.unbindTexture()}}}let Et=[],Ut=[];function Gt(P){if(P.samples>0){if(Tt(P)===!1){let _=P.textures,O=P.width,$=P.height,te=t.COLOR_BUFFER_BIT,fe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(P),ne=_.length>1;if(ne)for(let ge=0;ge<_.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let ae=P.texture.mipmaps;ae&&ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);let ke=i.get(_[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,O,$,0,0,O,$,te,t.NEAREST),l===!0&&(Et.length=0,Ut.length=0,Et.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Et.push(fe),Ut.push(fe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let ge=0;ge<_.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);let ke=i.get(_[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let _=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function St(P){return Math.min(a.maxSamples,P.samples)}function Tt(P){let _=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(P){let _=s.render.frame;d.get(P)!==_&&(d.set(P,_),P.update())}function ln(P,_){let O=P.colorSpace,$=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==Il&&O!==va&&(Qe.getTransfer(O)===lt?($!==ui||te!==kn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",O)),_}function at(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.getTextureUnits=H,this.setTextureUnits=B,this.setTexture2D=U,this.setTexture2DArray=Q,this.setTexture3D=de,this.setTextureCube=ue,this.rebindTextures=tt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function BE(t,e){function n(i,a=va){let r,s=Qe.getTransfer(a);if(i===kn)return t.UNSIGNED_BYTE;if(i===bf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===qg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hg)return t.BYTE;if(i===Gg)return t.SHORT;if(i===ro)return t.UNSIGNED_SHORT;if(i===wf)return t.INT;if(i===Ei)return t.UNSIGNED_INT;if(i===Ti)return t.FLOAT;if(i===$i)return t.HALF_FLOAT;if(i===Xg)return t.ALPHA;if(i===$g)return t.RGB;if(i===ui)return t.RGBA;if(i===Hi)return t.DEPTH_COMPONENT;if(i===dr)return t.DEPTH_STENCIL;if(i===Yg)return t.RED;if(i===Lf)return t.RED_INTEGER;if(i===fr)return t.RG;if(i===If)return t.RG_INTEGER;if(i===Af)return t.RGBA_INTEGER;if(i===jl||i===Kl||i===Jl||i===Ql)if(s===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ef||i===Tf||i===Rf||i===Pf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ef)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kf||i===Df||i===Ff||i===Nf||i===Bf||i===eu||i===Uf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kf||i===Df)return s===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ff)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nf)return r.COMPRESSED_R11_EAC;if(i===Bf)return r.COMPRESSED_SIGNED_R11_EAC;if(i===eu)return r.COMPRESSED_RG11_EAC;if(i===Uf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Of||i===zf||i===Vf||i===Hf||i===Gf||i===Wf||i===qf||i===Xf||i===$f||i===Yf||i===Zf||i===jf||i===Kf||i===Jf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Of)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$f)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jf)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qf||i===eh||i===th)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qf)return s===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nh||i===ih||i===tu||i===ah)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}function VE(t,e){function n(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,Kg(t)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function a(x,h,v,C,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(x,h):h.isMeshLambertMaterial?(r(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(x,h),p(x,h)):h.isMeshPhongMaterial?(r(x,h),d(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(x,h),f(x,h),h.isMeshPhysicalMaterial&&g(x,h,M)):h.isMeshMatcapMaterial?(r(x,h),y(x,h)):h.isMeshDepthMaterial?r(x,h):h.isMeshDistanceMaterial?(r(x,h),w(x,h)):h.isMeshNormalMaterial?r(x,h):h.isLineBasicMaterial?(s(x,h),h.isLineDashedMaterial&&o(x,h)):h.isPointsMaterial?l(x,h,v,C):h.isSpriteMaterial?u(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,n(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===on&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,n(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===on&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,n(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,n(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);let v=e.get(h),C=v.envMap,M=v.envMapRotation;C&&(x.envMap.value=C,x.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(K_),x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,x.aoMapTransform))}function s(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform))}function o(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function l(x,h,v,C){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*v,x.scale.value=C*.5,h.map&&(x.map.value=h.map,n(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function u(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function d(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function p(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function f(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function g(x,h,v){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===on&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,h){h.matcap&&(x.matcap.value=h.matcap)}function w(x,h){let v=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function HE(t,e,n,i){let a={},r={},s=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let I=b.program;i.uniformBlockBinding(M,I)}function u(M,b){let I=a[M.id];I===void 0&&(x(M),I=d(M),a[M.id]=I,M.addEventListener("dispose",v));let T=b.program;i.updateUBOMapping(M,T);let S=e.render.frame;r[M.id]!==S&&(f(M),r[M.id]=S)}function d(M){let b=p();M.__bindingPointIndex=b;let I=t.createBuffer(),T=M.__size,S=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,I),t.bufferData(t.UNIFORM_BUFFER,T,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,I),I}function p(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let b=a[M.id],I=M.uniforms,T=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let S=0,L=I.length;S<L;S++){let R=I[S];if(Array.isArray(R))for(let k=0,F=R.length;k<F;k++)g(R[k],S,k,T);else g(R,S,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(M,b,I,T){if(w(M,b,I,T)===!0){let S=M.__offset,L=M.value;if(Array.isArray(L)){let R=0;for(let k=0;k<L.length;k++){let F=L[k],z=h(F);y(F,M.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(L,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,M.__data)}}function y(M,b,I){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,I)}function w(M,b,I,T){let S=M.value,L=b+"_"+I;if(T[L]===void 0)return typeof S=="number"||typeof S=="boolean"?T[L]=S:ArrayBuffer.isView(S)?T[L]=S.slice():T[L]=S.clone(),!0;{let R=T[L];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return T[L]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function x(M){let b=M.uniforms,I=0,T=16;for(let L=0,R=b.length;L<R;L++){let k=Array.isArray(b[L])?b[L]:[b[L]];for(let F=0,z=k.length;F<z;F++){let H=k[F],B=Array.isArray(H.value)?H.value:[H.value];for(let K=0,Z=B.length;K<Z;K++){let U=B[K],Q=h(U),de=I%T,ue=de%Q.boundary,Me=de+ue;I+=ue,Me!==0&&T-Me<Q.storage&&(I+=T-Me),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=I,I+=Q.storage}}}let S=I%T;return S>0&&(I+=T-S),M.__size=I,M.__cache={},this}function h(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",M),b}function v(M){let b=M.target;b.removeEventListener("dispose",v);let I=s.indexOf(b.__bindingPointIndex);s.splice(I,1),t.deleteBuffer(a[b.id]),delete a[b.id],delete r[b.id]}function C(){for(let M in a)t.deleteBuffer(a[M]);s=[],a={},r={}}return{bind:l,update:u,dispose:C}}function WE(){return Yi===null&&(Yi=new Qd(GE,16,16,fr,$i),Yi.name="DFG_LUT",Yi.minFilter=sn,Yi.magFilter=sn,Yi.wrapS=Vi,Yi.wrapT=Vi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var rL,sL,oL,lL,uL,cL,dL,fL,hL,pL,mL,gL,xL,yL,vL,SL,_L,ML,wL,bL,CL,LL,IL,AL,EL,TL,RL,PL,kL,DL,FL,NL,BL,UL,OL,zL,VL,HL,GL,WL,qL,XL,$L,YL,ZL,jL,KL,JL,QL,eI,tI,nI,iI,aI,rI,sI,oI,lI,uI,cI,dI,fI,hI,pI,mI,gI,xI,yI,vI,SI,_I,MI,wI,bI,CI,LI,II,AI,EI,TI,RI,PI,kI,DI,FI,NI,BI,UI,OI,zI,VI,HI,GI,WI,qI,XI,$I,YI,ZI,jI,KI,JI,QI,e2,t2,n2,i2,a2,r2,s2,o2,l2,u2,c2,d2,f2,h2,p2,m2,g2,x2,y2,v2,S2,_2,M2,w2,b2,C2,L2,I2,A2,E2,T2,R2,P2,k2,D2,F2,N2,B2,U2,qe,we,Zi,lh,O2,X_,hr,w_,$r,q2,iu,b_,n0,i0,a0,r0,X2,ch,dh,iA,$_,l0,Y_,Z_,j_,A_,E_,T_,R_,P_,u0,c0,d0,s0,lo,XA,$A,F_,KA,uh,iE,aE,sE,lE,cE,fE,pE,yE,h0,p0,LE,TE,RE,PE,kE,W_,au,o0,UE,OE,m0,g0,zE,K_,GE,Yi,fh,J_=ve(()=>{t0();t0();rL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sL=`#ifdef USE_ALPHAHASH
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
#endif`,oL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dL=`#ifdef USE_AOMAP
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
#endif`,fL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hL=`#ifdef USE_BATCHING
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
#endif`,pL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yL=`#ifdef USE_IRIDESCENCE
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
#endif`,vL=`#ifdef USE_BUMPMAP
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
#endif`,SL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_L=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ML=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,AL=`#define PI 3.141592653589793
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
} // validated`,EL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TL=`vec3 transformedNormal = objectNormal;
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
#endif`,RL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FL="gl_FragColor = linearToOutputTexel( gl_FragColor );",NL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BL=`#ifdef USE_ENVMAP
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
#endif`,UL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OL=`#ifdef USE_ENVMAP
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
#endif`,zL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VL=`#ifdef USE_ENVMAP
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
#endif`,HL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XL=`#ifdef USE_GRADIENTMAP
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
}`,$L=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jL=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,KL=`#ifdef USE_ENVMAP
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
#endif`,JL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nI=`PhysicalMaterial material;
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
#endif`,iI=`uniform sampler2D dfgLUT;
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
}`,aI=`
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
#endif`,rI=`#if defined( RE_IndirectDiffuse )
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
#endif`,sI=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oI=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mI=`#if defined( USE_POINTS_UV )
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
#endif`,gI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_I=`#ifdef USE_MORPHTARGETS
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
#endif`,MI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bI=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,II=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,AI=`#ifdef USE_NORMALMAP
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
#endif`,EI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DI=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WI=`float getShadowMask() {
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
}`,qI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XI=`#ifdef USE_SKINNING
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
#endif`,$I=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YI=`#ifdef USE_SKINNING
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
#endif`,ZI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JI=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QI=`#ifdef USE_TRANSMISSION
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
#endif`,e2=`#ifdef USE_TRANSMISSION
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
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s2=`uniform sampler2D t2D;
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
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`#include <common>
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
}`,f2=`#if DEPTH_PACKING == 3200
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
}`,h2=`#define DISTANCE
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
}`,p2=`#define DISTANCE
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
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`uniform float scale;
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
}`,y2=`uniform vec3 diffuse;
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
}`,v2=`#include <common>
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
}`,S2=`uniform vec3 diffuse;
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
}`,_2=`#define LAMBERT
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
}`,M2=`#define LAMBERT
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
}`,w2=`#define MATCAP
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
}`,b2=`#define MATCAP
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
}`,C2=`#define NORMAL
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
}`,L2=`#define NORMAL
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
}`,I2=`#define PHONG
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
}`,A2=`#define PHONG
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
}`,E2=`#define STANDARD
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
}`,T2=`#define STANDARD
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
}`,R2=`#define TOON
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
}`,P2=`#define TOON
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
}`,k2=`uniform float size;
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
}`,D2=`uniform vec3 diffuse;
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
}`,F2=`#include <common>
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
}`,N2=`uniform vec3 color;
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
}`,B2=`uniform float rotation;
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
}`,U2=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:rL,alphahash_pars_fragment:sL,alphamap_fragment:oL,alphamap_pars_fragment:lL,alphatest_fragment:uL,alphatest_pars_fragment:cL,aomap_fragment:dL,aomap_pars_fragment:fL,batching_pars_vertex:hL,batching_vertex:pL,begin_vertex:mL,beginnormal_vertex:gL,bsdfs:xL,iridescence_fragment:yL,bumpmap_pars_fragment:vL,clipping_planes_fragment:SL,clipping_planes_pars_fragment:_L,clipping_planes_pars_vertex:ML,clipping_planes_vertex:wL,color_fragment:bL,color_pars_fragment:CL,color_pars_vertex:LL,color_vertex:IL,common:AL,cube_uv_reflection_fragment:EL,defaultnormal_vertex:TL,displacementmap_pars_vertex:RL,displacementmap_vertex:PL,emissivemap_fragment:kL,emissivemap_pars_fragment:DL,colorspace_fragment:FL,colorspace_pars_fragment:NL,envmap_fragment:BL,envmap_common_pars_fragment:UL,envmap_pars_fragment:OL,envmap_pars_vertex:zL,envmap_physical_pars_fragment:KL,envmap_vertex:VL,fog_vertex:HL,fog_pars_vertex:GL,fog_fragment:WL,fog_pars_fragment:qL,gradientmap_pars_fragment:XL,lightmap_pars_fragment:$L,lights_lambert_fragment:YL,lights_lambert_pars_fragment:ZL,lights_pars_begin:jL,lights_toon_fragment:JL,lights_toon_pars_fragment:QL,lights_phong_fragment:eI,lights_phong_pars_fragment:tI,lights_physical_fragment:nI,lights_physical_pars_fragment:iI,lights_fragment_begin:aI,lights_fragment_maps:rI,lights_fragment_end:sI,lightprobes_pars_fragment:oI,logdepthbuf_fragment:lI,logdepthbuf_pars_fragment:uI,logdepthbuf_pars_vertex:cI,logdepthbuf_vertex:dI,map_fragment:fI,map_pars_fragment:hI,map_particle_fragment:pI,map_particle_pars_fragment:mI,metalnessmap_fragment:gI,metalnessmap_pars_fragment:xI,morphinstance_vertex:yI,morphcolor_vertex:vI,morphnormal_vertex:SI,morphtarget_pars_vertex:_I,morphtarget_vertex:MI,normal_fragment_begin:wI,normal_fragment_maps:bI,normal_pars_fragment:CI,normal_pars_vertex:LI,normal_vertex:II,normalmap_pars_fragment:AI,clearcoat_normal_fragment_begin:EI,clearcoat_normal_fragment_maps:TI,clearcoat_pars_fragment:RI,iridescence_pars_fragment:PI,opaque_fragment:kI,packing:DI,premultiplied_alpha_fragment:FI,project_vertex:NI,dithering_fragment:BI,dithering_pars_fragment:UI,roughnessmap_fragment:OI,roughnessmap_pars_fragment:zI,shadowmap_pars_fragment:VI,shadowmap_pars_vertex:HI,shadowmap_vertex:GI,shadowmask_pars_fragment:WI,skinbase_vertex:qI,skinning_pars_vertex:XI,skinning_vertex:$I,skinnormal_vertex:YI,specularmap_fragment:ZI,specularmap_pars_fragment:jI,tonemapping_fragment:KI,tonemapping_pars_fragment:JI,transmission_fragment:QI,transmission_pars_fragment:e2,uv_pars_fragment:t2,uv_pars_vertex:n2,uv_vertex:i2,worldpos_vertex:a2,background_vert:r2,background_frag:s2,backgroundCube_vert:o2,backgroundCube_frag:l2,cube_vert:u2,cube_frag:c2,depth_vert:d2,depth_frag:f2,distance_vert:h2,distance_frag:p2,equirect_vert:m2,equirect_frag:g2,linedashed_vert:x2,linedashed_frag:y2,meshbasic_vert:v2,meshbasic_frag:S2,meshlambert_vert:_2,meshlambert_frag:M2,meshmatcap_vert:w2,meshmatcap_frag:b2,meshnormal_vert:C2,meshnormal_frag:L2,meshphong_vert:I2,meshphong_frag:A2,meshphysical_vert:E2,meshphysical_frag:T2,meshtoon_vert:R2,meshtoon_frag:P2,points_vert:k2,points_frag:D2,shadow_vert:F2,shadow_frag:N2,sprite_vert:B2,sprite_frag:U2},we={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Zi={basic:{uniforms:yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:yn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:yn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ke(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:yn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:yn([we.points,we.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:yn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:yn([we.common,we.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:yn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:yn([we.sprite,we.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:yn([we.common,we.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:yn([we.lights,we.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Zi.physical={uniforms:yn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};lh={r:0,b:0,g:0},O2=new Lt,X_=new He;X_.set(-1,0,0,0,1,0,0,0,1);hr=4,w_=[.125,.215,.35,.446,.526,.582],$r=20,q2=256,iu=new no,b_=new Ke,n0=null,i0=0,a0=0,r0=!1,X2=new W,ch=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){let{size:s=256,position:o=X2}=r;n0=this._renderer.getRenderTarget(),i0=this._renderer.getActiveCubeFace(),a0=this._renderer.getActiveMipmapLevel(),r0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(n0,i0,a0),this._renderer.xr.enabled=r0,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ur||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),n0=this._renderer.getRenderTarget(),i0=this._renderer.getActiveCubeFace(),a0=this._renderer.getActiveMipmapLevel(),r0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:$i,format:ui,colorSpace:Il,depthBuffer:!1},a=C_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(e,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$2(r)),this._blurMaterial=Z2(r,e,n),this._ggxMaterial=Y2(r,e,n)}return a}_compileMaterial(e){let n=new rt(new jn,e);this._renderer.compile(n,iu)}_sceneToCubeUV(e,n,i,a,r){let l=new rn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,g=p.toneMapping;p.getClearColor(b_),p.toneMapping=Ai,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new Rn,new Wr({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,x=w.material,h=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,h=!0):(x.color.copy(b_),h=!0);for(let C=0;C<6;C++){let M=C%3;M===0?(l.up.set(0,u[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[C],r.y,r.z)):M===1?(l.up.set(0,0,u[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[C],r.z)):(l.up.set(0,u[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[C]));let b=this._cubeSize;oo(a,M*b,C>2?b:0,b,b),p.setRenderTarget(a),h&&p.render(w,l),p.render(e,l)}p.toneMapping=g,p.autoClear=f,e.background=v}_textureToCubeUV(e,n){let i=this._renderer,a=e.mapping===ur||e.mapping===qr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=I_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());let r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;oo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,iu)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){let a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;let l=s.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-d*d),f=0+u*1.25,g=p*f,{_lodMax:y}=this,w=this._sizeLods[i],x=3*w*(i>y-hr?i-y+hr:0),h=4*(this._cubeSize-w);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=y-n,oo(r,x,h,3*w,2*w),a.setRenderTarget(r),a.render(o,iu),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=y-i,oo(e,x,h,3*w,2*w),a.setRenderTarget(e),a.render(o,iu)}_blur(e,n,i,a,r){let s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){let l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");let d=3,p=this._lodMeshes[a];p.material=u;let f=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*$r-1),w=r/y,x=isFinite(r)?1+Math.floor(d*w):$r;x>$r&&Ve(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${$r}`);let h=[],v=0;for(let T=0;T<$r;++T){let S=T/w,L=Math.exp(-S*S/2);h.push(L),T===0?v+=L:T<x&&(v+=2*L)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=h,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:C}=this;f.dTheta.value=y,f.mipInt.value=C-i;let M=this._sizeLods[a],b=3*M*(a>C-hr?a-C+hr:0),I=4*(this._cubeSize-M);oo(n,b,I,3*M,2*M),l.setRenderTarget(n),l.render(p,iu)}};dh=class extends Zn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Fl(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Rn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Xi});r.uniforms.tEquirect.value=n;let s=new rt(a,r),o=n.minFilter;return n.minFilter===cr&&(n.minFilter=sn),new gf(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}};iA={[Fg]:"LINEAR_TONE_MAPPING",[Ng]:"REINHARD_TONE_MAPPING",[Bg]:"CINEON_TONE_MAPPING",[$l]:"ACES_FILMIC_TONE_MAPPING",[Og]:"AGX_TONE_MAPPING",[zg]:"NEUTRAL_TONE_MAPPING",[Ug]:"CUSTOM_TONE_MAPPING"};$_=new wn,l0=new ya(1,1),Y_=new Tl,Z_=new Jd,j_=new Fl,A_=[],E_=[],T_=new Float32Array(16),R_=new Float32Array(9),P_=new Float32Array(4);u0=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bA(n.type)}},c0=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WA(n.type)}},d0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let a=this.seq;for(let r=0,s=a.length;r!==s;++r){let o=a[r];o.setValue(e,n[o.id],i)}}},s0=/(\w+)(\])?(\[|\.)?/g;lo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);qA(o,l,this)}let a=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){let r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){let a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){let i=[];for(let a=0,r=e.length;a!==r;++a){let s=e[a];s.id in n&&i.push(s)}return i}};XA=37297,$A=0;F_=new He;KA={[Fg]:"Linear",[Ng]:"Reinhard",[Bg]:"Cineon",[$l]:"ACESFilmic",[Og]:"AgX",[zg]:"Neutral",[Ug]:"Custom"};uh=new W;iE=/^[ \t]*#include +<([\w\d./]+)>/gm;aE=new Map;sE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;lE={[Xl]:"SHADOWMAP_TYPE_PCF",[ao]:"SHADOWMAP_TYPE_VSM"};cE={[ur]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[Yl]:"ENVMAP_TYPE_CUBE_UV"};fE={[qr]:"ENVMAP_MODE_REFRACTION"};pE={[Dg]:"ENVMAP_BLENDING_MULTIPLY",[r_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};yE=0,h0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new p0(e),n.set(e,i)),i}},p0=class{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}};LE=0;TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
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
}`,PE=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],kE=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],W_=new Lt,au=new W,o0=new W;UE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OE=`
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

}`,m0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Bl(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Kn({vertexShader:UE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rt(new zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},g0=class extends Gi{constructor(e,n){super();let i=this,a=null,r=1,s=null,o="local-floor",l=1,u=null,d=null,p=null,f=null,g=null,y=null,w=typeof XRWebGLBinding<"u",x=new m0,h={},v=n.getContextAttributes(),C=null,M=null,b=[],I=[],T=new Ye,S=null,L=new rn;L.viewport=new It;let R=new rn;R.viewport=new It;let k=[L,R],F=new xf,z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let E=b[ie];return E===void 0&&(E=new Js,b[ie]=E),E.getTargetRaySpace()},this.getControllerGrip=function(ie){let E=b[ie];return E===void 0&&(E=new Js,b[ie]=E),E.getGripSpace()},this.getHand=function(ie){let E=b[ie];return E===void 0&&(E=new Js,b[ie]=E),E.getHandSpace()};function B(ie){let E=I.indexOf(ie.inputSource);if(E===-1)return;let q=b[E];q!==void 0&&(q.update(ie.inputSource,ie.frame,u||s),q.dispatchEvent({type:ie.type,data:ie.inputSource}))}function K(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",K),a.removeEventListener("inputsourceschange",Z);for(let ie=0;ie<b.length;ie++){let E=I[ie];E!==null&&(I[ie]=null,b[ie].disconnect(E))}z=null,H=null,x.reset();for(let ie in h)delete h[ie];e.setRenderTarget(C),g=null,f=null,p=null,a=null,M=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(ie){u=ie},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(C=e.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",K),a.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,Le=null,Oe=null;v.depth&&(Oe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=v.stencil?dr:Hi,Le=v.stencil?so:Ei);let Fe={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(Fe),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Zn(f.textureWidth,f.textureHeight,{format:ui,type:kn,depthTexture:new ya(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(a,n,q),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Zn(g.framebufferWidth,g.framebufferHeight,{format:ui,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await a.requestReferenceSpace(o),We.setContext(a),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(ie){for(let E=0;E<ie.removed.length;E++){let q=ie.removed[E],Le=I.indexOf(q);Le>=0&&(I[Le]=null,b[Le].disconnect(q))}for(let E=0;E<ie.added.length;E++){let q=ie.added[E],Le=I.indexOf(q);if(Le===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=I.length){I.push(q),Le=Fe;break}else if(I[Fe]===null){I[Fe]=q,Le=Fe;break}if(Le===-1)break}let Oe=b[Le];Oe&&Oe.connect(q)}}let U=new W,Q=new W;function de(ie,E,q){U.setFromMatrixPosition(E.matrixWorld),Q.setFromMatrixPosition(q.matrixWorld);let Le=U.distanceTo(Q),Oe=E.projectionMatrix.elements,Fe=q.projectionMatrix.elements,pt=Oe[14]/(Oe[10]-1),Xe=Oe[14]/(Oe[10]+1),st=(Oe[9]+1)/Oe[5],tt=(Oe[9]-1)/Oe[5],Je=(Oe[8]-1)/Oe[0],vt=(Fe[8]+1)/Fe[0],Et=pt*Je,Ut=pt*vt,Gt=Le/(-Je+vt),St=Gt*-Je;if(E.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(St),ie.translateZ(Gt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Oe[10]===-1)ie.projectionMatrix.copy(E.projectionMatrix),ie.projectionMatrixInverse.copy(E.projectionMatrixInverse);else{let Tt=pt+Gt,N=Xe+Gt,ln=Et-St,at=Ut+(Le-St),P=st*Xe/N*Tt,_=tt*Xe/N*Tt;ie.projectionMatrix.makePerspective(ln,at,P,_,Tt,N),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ue(ie,E){E===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(E.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let E=ie.near,q=ie.far;x.texture!==null&&(x.depthNear>0&&(E=x.depthNear),x.depthFar>0&&(q=x.depthFar)),F.near=R.near=L.near=E,F.far=R.far=L.far=q,(z!==F.near||H!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,H=F.far),F.layers.mask=ie.layers.mask|6,L.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;let Le=ie.parent,Oe=F.cameras;ue(F,Le);for(let Fe=0;Fe<Oe.length;Fe++)ue(Oe[Fe],Le);Oe.length===2?de(F,L,R):F.projectionMatrix.copy(L.projectionMatrix),Me(ie,F,Le)};function Me(ie,E,q){q===null?ie.matrix.copy(E.matrixWorld):(ie.matrix.copy(q.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(E.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(E.projectionMatrix),ie.projectionMatrixInverse.copy(E.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Zd*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(ie){return h[ie]};let Pe=null;function Ze(ie,E){if(d=E.getViewerPose(u||s),y=E,d!==null){let q=d.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let Le=!1;q.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let Xe=0;Xe<q.length;Xe++){let st=q[Xe],tt=null;if(g!==null)tt=g.getViewport(st);else{let vt=p.getViewSubImage(f,st);tt=vt.viewport,Xe===0&&(e.setRenderTargetTextures(M,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(M))}let Je=k[Xe];Je===void 0&&(Je=new rn,Je.layers.enable(Xe),Je.viewport=new It,k[Xe]=Je),Je.matrix.fromArray(st.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(st.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(tt.x,tt.y,tt.width,tt.height),Xe===0&&(F.matrix.copy(Je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Je)}let Oe=a.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){p=i.getBinding();let Xe=p.getDepthInformation(q[0]);Xe&&Xe.isValid&&Xe.texture&&x.init(Xe,a.renderState)}if(Oe&&Oe.includes("camera-access")&&w){e.state.unbindTexture(),p=i.getBinding();for(let Xe=0;Xe<q.length;Xe++){let st=q[Xe].camera;if(st){let tt=h[st];tt||(tt=new Bl,h[st]=tt);let Je=p.getCameraImage(st);tt.sourceTexture=Je}}}}for(let q=0;q<b.length;q++){let Le=I[q],Oe=b[q];Le!==null&&Oe!==void 0&&Oe.update(Le,E,u||s)}Pe&&Pe(ie,E),E.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:E}),y=null}let We=new q_;We.setAnimationLoop(Ze),this.setAnimationLoop=function(ie){Pe=ie},this.dispose=function(){}}},zE=new Lt,K_=new He;K_.set(-1,0,0,0,1,0,0,0,1);GE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;fh=class{constructor(e={}){let{canvas:n=g_(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:g=kn}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=s;let w=g,x=new Set([Af,If,Lf]),h=new Set([kn,Ei,ro,so,bf,Cf]),v=new Uint32Array(4),C=new Int32Array(4),M=new W,b=null,I=null,T=[],S=[],L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,k=!1,F=null,z=null,H=null,B=null;this._outputColorSpace=$n;let K=0,Z=0,U=null,Q=-1,de=null,ue=new It,Me=new It,Pe=null,Ze=new Ke(0),We=0,ie=n.width,E=n.height,q=1,Le=null,Oe=null,Fe=new It(0,0,ie,E),pt=new It(0,0,ie,E),Xe=!1,st=new eo,tt=!1,Je=!1,vt=new Lt,Et=new W,Ut=new It,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function Tt(){return U===null?q:1}let N=i;function ln(A,V){return n.getContext(A,V)}try{let A={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yf}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",Nn,!1),N===null){let V="webgl2";if(N=ln(V,A),N===null)throw ln(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw ze("WebGLRenderer: "+A.message),A}let at,P,_,O,$,te,fe,he,ne,ae,ge,ke,Se,xe,Ne,G,me,D,oe,J,pe,ye,se;function _e(){at=new K2(N),at.init(),pe=new BE(N,at),P=new G2(N,at,e,pe),_=new FE(N,at),P.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),z=N.createFramebuffer(),H=N.createFramebuffer(),B=N.createFramebuffer(),O=new eA(N),$=new _E,te=new NE(N,at,_,$,P,pe,O),fe=new j2(R),he=new aL(N),ye=new V2(N,he),ne=new J2(N,he,O,ye),ae=new nA(N,ne,he,ye,O),D=new tA(N,P,te),Ne=new W2($),ge=new SE(R,fe,at,P,ye,Ne),ke=new VE(R,$),Se=new wE,xe=new EE(at),me=new z2(R,fe,_,ae,y,l),G=new DE(R,ae,P),se=new HE(N,O,P,_),oe=new H2(N,at,O),J=new Q2(N,at,O),O.programs=ge.programs,R.capabilities=P,R.extensions=at,R.properties=$,R.renderLists=Se,R.shadowMap=G,R.state=_,R.info=O}_e(),w!==kn&&(L=new aA(w,n.width,n.height,o,a,r));let Ie=new g0(R,N);this.xr=Ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(ie,E,!1))},this.getSize=function(A){return A.set(ie,E)},this.setSize=function(A,V,j=!0){if(Ie.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,E=V,n.width=Math.floor(A*q),n.height=Math.floor(V*q),j===!0&&(n.style.width=A+"px",n.style.height=V+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(ie*q,E*q).floor()},this.setDrawingBufferSize=function(A,V,j){ie=A,E=V,q=j,n.width=Math.floor(A*j),n.height=Math.floor(V*j),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(w===kn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ue)},this.getViewport=function(A){return A.copy(Fe)},this.setViewport=function(A,V,j,X){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,V,j,X),_.viewport(ue.copy(Fe).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(pt)},this.setScissor=function(A,V,j,X){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,V,j,X),_.scissor(Me.copy(pt).multiplyScalar(q).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(A){_.setScissorTest(Xe=A)},this.setOpaqueSort=function(A){Le=A},this.setTransparentSort=function(A){Oe=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,j=!0){let X=0;if(A){let Y=!1;if(U!==null){let Ce=U.texture.format;Y=x.has(Ce)}if(Y){let Ce=U.texture.type,Te=h.has(Ce),be=me.getClearColor(),De=me.getClearAlpha(),Be=be.r,Ge=be.g,$e=be.b;Te?(v[0]=Be,v[1]=Ge,v[2]=$e,v[3]=De,N.clearBufferuiv(N.COLOR,0,v)):(C[0]=Be,C[1]=Ge,C[2]=$e,C[3]=De,N.clearBufferiv(N.COLOR,0,C))}else X|=N.COLOR_BUFFER_BIT}V&&(X|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",Nn,!1),me.dispose(),Se.dispose(),xe.dispose(),$.dispose(),fe.dispose(),ae.dispose(),ye.dispose(),se.dispose(),ge.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",L0),Ie.removeEventListener("sessionend",I0),Sr.stop()};function mt(A){A.preventDefault(),jg("WebGLRenderer: Context Lost."),k=!0}function ot(){jg("WebGLRenderer: Context Restored."),k=!1;let A=O.autoReset,V=G.enabled,j=G.autoUpdate,X=G.needsUpdate,Y=G.type;_e(),O.autoReset=A,G.enabled=V,G.autoUpdate=j,G.needsUpdate=X,G.type=Y}function Nn(A){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bn(A){let V=A.target;V.removeEventListener("dispose",Bn),Wu(V)}function Wu(A){qu(A),$.remove(A)}function qu(A){let V=$.get(A).programs;V!==void 0&&(V.forEach(function(j){ge.releaseProgram(j)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,j,X,Y,Ce){V===null&&(V=Gt);let Te=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,be=XM(A,V,j,X,Y);_.setMaterial(X,Te);let De=j.index,Be=1;if(X.wireframe===!0){if(De=ne.getWireframeAttribute(j),De===void 0)return;Be=2}let Ge=j.drawRange,$e=j.attributes.position,Ue=Ge.start*Be,dt=(Ge.start+Ge.count)*Be;Ce!==null&&(Ue=Math.max(Ue,Ce.start*Be),dt=Math.min(dt,(Ce.start+Ce.count)*Be)),De!==null?(Ue=Math.max(Ue,0),dt=Math.min(dt,De.count)):$e!=null&&(Ue=Math.max(Ue,0),dt=Math.min(dt,$e.count));let Ot=dt-Ue;if(Ot<0||Ot===1/0)return;ye.setup(Y,X,be,j,De);let Nt,ft=oe;if(De!==null&&(Nt=he.get(De),ft=J,ft.setIndex(Nt)),Y.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*Tt()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(Y.isLine){let un=X.linewidth;un===void 0&&(un=1),_.setLineWidth(un*Tt()),Y.isLineSegments?ft.setMode(N.LINES):Y.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else Y.isPoints?ft.setMode(N.POINTS):Y.isSprite&&ft.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(at.get("WEBGL_multi_draw"))ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let un=Y._multiDrawStarts,Ae=Y._multiDrawCounts,Un=Y._multiDrawCount,nt=De?he.get(De).bytesPerElement:1,ei=$.get(X).currentProgram.getUniforms();for(let Ri=0;Ri<Un;Ri++)ei.setValue(N,"_gl_DrawID",Ri),ft.render(un[Ri]/nt,Ae[Ri])}else if(Y.isInstancedMesh)ft.renderInstances(Ue,Ot,Y.count);else if(j.isInstancedBufferGeometry){let un=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ae=Math.min(j.instanceCount,un);ft.renderInstances(Ue,Ot,Ae)}else ft.render(Ue,Ot)};function vr(A,V,j){A.transparent===!0&&A.side===qi&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,$u(A,V,j),A.side=ga,A.needsUpdate=!0,$u(A,V,j),A.side=qi):$u(A,V,j)}this.compile=function(A,V,j=null){j===null&&(j=A),I=xe.get(j),I.init(V),S.push(I),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(I.pushLight(Y),Y.castShadow&&I.pushShadow(Y))}),A!==j&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(I.pushLight(Y),Y.castShadow&&I.pushShadow(Y))}),I.setupLights();let X=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Te=0;Te<Ce.length;Te++){let be=Ce[Te];vr(be,j,Y),X.add(be)}else vr(Ce,j,Y),X.add(Ce)}),I=S.pop(),X},this.compileAsync=function(A,V,j=null){let X=this.compile(A,V,j);return new Promise(Y=>{function Ce(){if(X.forEach(function(Te){$.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){Y(A);return}setTimeout(Ce,10)}at.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ts=null;function WM(A){ts&&ts(A)}function L0(){Sr.stop()}function I0(){Sr.start()}let Sr=new q_;Sr.setAnimationLoop(WM),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(A){ts=A,Ie.setAnimationLoop(A),A===null?Sr.stop():Sr.start()},Ie.addEventListener("sessionstart",L0),Ie.addEventListener("sessionend",I0),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;F!==null&&F.renderStart(A,V);let j=Ie.enabled===!0&&Ie.isPresenting===!0,X=L!==null&&(U===null||j)&&L.begin(R,U);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(V),V=Ie.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,V,U),I=xe.get(A,S.length),I.init(V),I.state.textureUnits=te.getTextureUnits(),S.push(I),vt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),st.setFromProjectionMatrix(vt,Ci,V.reversedDepth),Je=this.localClippingEnabled,tt=Ne.init(this.clippingPlanes,Je),b=Se.get(A,T.length),b.init(),T.push(b),Ie.enabled===!0&&Ie.isPresenting===!0){let Te=R.xr.getDepthSensingMesh();Te!==null&&Ah(Te,V,-1/0,R.sortObjects)}Ah(A,V,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(Le,Oe,V.reversedDepth),St=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,St&&me.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Ne.beginShadows();let Y=I.state.shadowsArray;if(G.render(Y,A,V),tt===!0&&Ne.endShadows(),(X&&L.hasRenderPass())===!1){let Te=b.opaque,be=b.transmissive;if(I.setupLights(),V.isArrayCamera){let De=V.cameras;if(be.length>0)for(let Be=0,Ge=De.length;Be<Ge;Be++){let $e=De[Be];E0(Te,be,A,$e)}St&&me.render(A);for(let Be=0,Ge=De.length;Be<Ge;Be++){let $e=De[Be];A0(b,A,$e,$e.viewport)}}else be.length>0&&E0(Te,be,A,V),St&&me.render(A),A0(b,A,V)}U!==null&&Z===0&&(te.updateMultisampleRenderTarget(U),te.updateRenderTargetMipmap(U)),X&&L.end(R),A.isScene===!0&&A.onAfterRender(R,A,V),ye.resetDefaultState(),Q=-1,de=null,S.pop(),S.length>0?(I=S[S.length-1],te.setTextureUnits(I.state.textureUnits),tt===!0&&Ne.setGlobalState(R.clippingPlanes,I.state.camera)):I=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,F!==null&&F.renderEnd()};function Ah(A,V,j,X){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)I.pushLightProbeGrid(A);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||st.intersectsSprite(A)){X&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(vt);let Te=ae.update(A),be=A.material;be.visible&&b.push(A,Te,be,j,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||st.intersectsObject(A))){let Te=ae.update(A),be=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ut.copy(Te.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(vt)),Array.isArray(be)){let De=Te.groups;for(let Be=0,Ge=De.length;Be<Ge;Be++){let $e=De[Be],Ue=be[$e.materialIndex];Ue&&Ue.visible&&b.push(A,Te,Ue,j,Ut.z,$e)}}else be.visible&&b.push(A,Te,be,j,Ut.z,null)}}let Ce=A.children;for(let Te=0,be=Ce.length;Te<be;Te++)Ah(Ce[Te],V,j,X)}function A0(A,V,j,X){let{opaque:Y,transmissive:Ce,transparent:Te}=A;I.setupLightsView(j),tt===!0&&Ne.setGlobalState(R.clippingPlanes,j),X&&_.viewport(ue.copy(X)),Y.length>0&&Xu(Y,V,j),Ce.length>0&&Xu(Ce,V,j),Te.length>0&&Xu(Te,V,j),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function E0(A,V,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[X.id]===void 0){let Ue=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[X.id]=new Zn(1,1,{generateMipmaps:!0,type:Ue?$i:kn,minFilter:cr,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let Ce=I.state.transmissionRenderTarget[X.id],Te=X.viewport||ue;Ce.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);let be=R.getRenderTarget(),De=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(Ce),R.getClearColor(Ze),We=R.getClearAlpha(),We<1&&R.setClearColor(16777215,.5),R.clear(),St&&me.render(j);let Ge=R.toneMapping;R.toneMapping=Ai;let $e=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),I.setupLightsView(X),tt===!0&&Ne.setGlobalState(R.clippingPlanes,X),Xu(A,j,X),te.updateMultisampleRenderTarget(Ce),te.updateRenderTargetMipmap(Ce),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let dt=0,Ot=V.length;dt<Ot;dt++){let Nt=V[dt],{object:ft,geometry:un,material:Ae,group:Un}=Nt;if(Ae.side===qi&&ft.layers.test(X.layers)){let nt=Ae.side;Ae.side=on,Ae.needsUpdate=!0,T0(ft,j,X,un,Ae,Un),Ae.side=nt,Ae.needsUpdate=!0,Ue=!0}}Ue===!0&&(te.updateMultisampleRenderTarget(Ce),te.updateRenderTargetMipmap(Ce))}R.setRenderTarget(be,De,Be),R.setClearColor(Ze,We),$e!==void 0&&(X.viewport=$e),R.toneMapping=Ge}function Xu(A,V,j){let X=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Ce=A.length;Y<Ce;Y++){let Te=A[Y],{object:be,geometry:De,group:Be}=Te,Ge=Te.material;Ge.allowOverride===!0&&X!==null&&(Ge=X),be.layers.test(j.layers)&&T0(be,V,j,De,Ge,Be)}}function T0(A,V,j,X,Y,Ce){A.onBeforeRender(R,V,j,X,Y,Ce),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(R,V,j,X,A,Ce),Y.transparent===!0&&Y.side===qi&&Y.forceSinglePass===!1?(Y.side=on,Y.needsUpdate=!0,R.renderBufferDirect(j,V,X,Y,A,Ce),Y.side=ga,Y.needsUpdate=!0,R.renderBufferDirect(j,V,X,Y,A,Ce),Y.side=qi):R.renderBufferDirect(j,V,X,Y,A,Ce),A.onAfterRender(R,V,j,X,Y,Ce)}function $u(A,V,j){V.isScene!==!0&&(V=Gt);let X=$.get(A),Y=I.state.lights,Ce=I.state.shadowsArray,Te=Y.state.version,be=ge.getParameters(A,Y.state,Ce,V,j,I.state.lightProbeGridArray),De=ge.getProgramCacheKey(be),Be=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,X.fog=V.fog;let Ge=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=fe.get(A.envMap||X.environment,Ge),X.envMapRotation=X.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Bn),Be=new Map,X.programs=Be);let $e=Be.get(De);if($e!==void 0){if(X.currentProgram===$e&&X.lightsStateVersion===Te)return P0(A,be),$e}else be.uniforms=ge.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,j,be),A.onBeforeCompile(be,R),$e=ge.acquireProgram(be,De),Be.set(De,$e),X.uniforms=be.uniforms;let Ue=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=Ne.uniform),P0(A,be),X.needsLights=YM(A),X.lightsStateVersion=Te,X.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=I.state.lightProbeGridArray.length>0,X.currentProgram=$e,X.uniformsList=null,$e}function R0(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=lo.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function P0(A,V){let j=$.get(A);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function qM(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;M.setFromMatrixPosition(V.matrixWorld);for(let j=0,X=A.length;j<X;j++){let Y=A[j];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function XM(A,V,j,X,Y){V.isScene!==!0&&(V=Gt),te.resetTextureUnits();let Ce=V.fog,Te=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?V.environment:null,be=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Qe.workingColorSpace,De=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Be=fe.get(X.envMap||Te,De),Ge=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$e=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!j.morphAttributes.position,dt=!!j.morphAttributes.normal,Ot=!!j.morphAttributes.color,Nt=Ai;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Nt=R.toneMapping);let ft=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,un=ft!==void 0?ft.length:0,Ae=$.get(X),Un=I.state.lights;if(tt===!0&&(Je===!0||A!==de)){let gt=A===de&&X.id===Q;Ne.setState(X,A,gt)}let nt=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Un.state.version||Ae.outputColorSpace!==be||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==Be||X.fog===!0&&Ae.fog!==Ce||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ne.numPlanes||Ae.numIntersection!==Ne.numIntersection)||Ae.vertexAlphas!==Ge||Ae.vertexTangents!==$e||Ae.morphTargets!==Ue||Ae.morphNormals!==dt||Ae.morphColors!==Ot||Ae.toneMapping!==Nt||Ae.morphTargetsCount!==un||!!Ae.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ae.__version=X.version);let ei=Ae.currentProgram;nt===!0&&(ei=$u(X,V,Y),F&&X.isNodeMaterial&&F.onUpdateProgram(X,ei,Ae));let Ri=!1,ba=!1,ns=!1,ht=ei.getUniforms(),zt=Ae.uniforms;if(_.useProgram(ei.program)&&(Ri=!0,ba=!0,ns=!0),X.id!==Q&&(Q=X.id,ba=!0),Ae.needsLights){let gt=qM(I.state.lightProbeGridArray,Y);Ae.lightProbeGrid!==gt&&(Ae.lightProbeGrid=gt,ba=!0)}if(Ri||de!==A){_.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ht.setValue(N,"projectionMatrix",A.projectionMatrix),ht.setValue(N,"viewMatrix",A.matrixWorldInverse);let La=ht.map.cameraPosition;La!==void 0&&La.setValue(N,Et.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&ht.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ht.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),de!==A&&(de=A,ba=!0,ns=!0)}if(Ae.needsLights&&(Un.state.directionalShadowMap.length>0&&ht.setValue(N,"directionalShadowMap",Un.state.directionalShadowMap,te),Un.state.spotShadowMap.length>0&&ht.setValue(N,"spotShadowMap",Un.state.spotShadowMap,te),Un.state.pointShadowMap.length>0&&ht.setValue(N,"pointShadowMap",Un.state.pointShadowMap,te)),Y.isSkinnedMesh){ht.setOptional(N,Y,"bindMatrix"),ht.setOptional(N,Y,"bindMatrixInverse");let gt=Y.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ht.setValue(N,"boneTexture",gt.boneTexture,te))}Y.isBatchedMesh&&(ht.setOptional(N,Y,"batchingTexture"),ht.setValue(N,"batchingTexture",Y._matricesTexture,te),ht.setOptional(N,Y,"batchingIdTexture"),ht.setValue(N,"batchingIdTexture",Y._indirectTexture,te),ht.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ht.setValue(N,"batchingColorTexture",Y._colorsTexture,te));let Ca=j.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0)&&D.update(Y,j,ei),(ba||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,ht.setValue(N,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&V.environment!==null&&(zt.envMapIntensity.value=V.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=WE()),ba){if(ht.setValue(N,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&$M(zt,ns),Ce&&X.fog===!0&&ke.refreshFogUniforms(zt,Ce),ke.refreshMaterialUniforms(zt,X,q,E,I.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){let gt=Ae.lightProbeGrid;zt.probesSH.value=gt.texture,zt.probesMin.value.copy(gt.boundingBox.min),zt.probesMax.value.copy(gt.boundingBox.max),zt.probesResolution.value.copy(gt.resolution)}lo.upload(N,R0(Ae),zt,te)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(lo.upload(N,R0(Ae),zt,te),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ht.setValue(N,"center",Y.center),ht.setValue(N,"modelViewMatrix",Y.modelViewMatrix),ht.setValue(N,"normalMatrix",Y.normalMatrix),ht.setValue(N,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let gt=X.uniformsGroups;for(let La=0,is=gt.length;La<is;La++){let k0=gt[La];se.update(k0,ei),se.bind(k0,ei)}}return ei}function $M(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function YM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,V,j){let X=$.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=V,$.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:j,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let j=$.get(A);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,j=0){U=A,K=V,Z=j;let X=null,Y=!1,Ce=!1;if(A){let be=$.get(A);if(be.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,be.__webglFramebuffer),ue.copy(A.viewport),Me.copy(A.scissor),Pe=A.scissorTest,_.viewport(ue),_.scissor(Me),_.setScissorTest(Pe),Q=-1;return}else if(be.__webglFramebuffer===void 0)te.setupRenderTarget(A);else if(be.__hasExternalTextures)te.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ge=A.depthTexture;if(be.__boundDepthTexture!==Ge){if(Ge!==null&&$.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(A)}}let De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ce=!0);let Be=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?X=Be[V][j]:X=Be[V],Y=!0):A.samples>0&&te.useMultisampledRTT(A)===!1?X=$.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[j]:X=Be,ue.copy(A.viewport),Me.copy(A.scissor),Pe=A.scissorTest}else ue.copy(Fe).multiplyScalar(q).floor(),Me.copy(pt).multiplyScalar(q).floor(),Pe=Xe;if(j!==0&&(X=z),_.bindFramebuffer(N.FRAMEBUFFER,X)&&_.drawBuffers(A,X),_.viewport(ue),_.scissor(Me),_.setScissorTest(Pe),Y){let be=$.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,be.__webglTexture,j)}else if(Ce){let be=V;for(let De=0;De<A.textures.length;De++){let Be=$.get(A.textures[De]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+De,Be.__webglTexture,j,be)}}else if(A!==null&&j!==0){let be=$.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,be.__webglTexture,j)}Q=-1},this.readRenderTargetPixels=function(A,V,j,X,Y,Ce,Te,be=0){if(!(A&&A.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){_.bindFramebuffer(N.FRAMEBUFFER,De);try{let Be=A.textures[be],Ge=Be.format,$e=Be.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+be),!P.textureFormatReadable(Ge)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable($e)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-X&&j>=0&&j<=A.height-Y&&N.readPixels(V,j,X,Y,pe.convert(Ge),pe.convert($e),Ce)}finally{let Be=U!==null?$.get(U).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,V,j,X,Y,Ce,Te,be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De)if(V>=0&&V<=A.width-X&&j>=0&&j<=A.height-Y){_.bindFramebuffer(N.FRAMEBUFFER,De);let Be=A.textures[be],Ge=Be.format,$e=Be.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+be),!P.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ue=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ue),N.bufferData(N.PIXEL_PACK_BUFFER,Ce.byteLength,N.STREAM_READ),N.readPixels(V,j,X,Y,pe.convert(Ge),pe.convert($e),0);let dt=U!==null?$.get(U).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,dt);let Ot=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await y_(N,Ot,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ue),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ce),N.deleteBuffer(Ue),N.deleteSync(Ot),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,j=0){let X=Math.pow(2,-j),Y=Math.floor(A.image.width*X),Ce=Math.floor(A.image.height*X),Te=V!==null?V.x:0,be=V!==null?V.y:0;te.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Te,be,Y,Ce),_.unbindTexture()},this.copyTextureToTexture=function(A,V,j=null,X=null,Y=0,Ce=0){let Te,be,De,Be,Ge,$e,Ue,dt,Ot,Nt=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(j!==null)Te=j.max.x-j.min.x,be=j.max.y-j.min.y,De=j.isBox3?j.max.z-j.min.z:1,Be=j.min.x,Ge=j.min.y,$e=j.isBox3?j.min.z:0;else{let zt=Math.pow(2,-Y);Te=Math.floor(Nt.width*zt),be=Math.floor(Nt.height*zt),A.isDataArrayTexture?De=Nt.depth:A.isData3DTexture?De=Math.floor(Nt.depth*zt):De=1,Be=0,Ge=0,$e=0}X!==null?(Ue=X.x,dt=X.y,Ot=X.z):(Ue=0,dt=0,Ot=0);let ft=pe.convert(V.format),un=pe.convert(V.type),Ae;V.isData3DTexture?(te.setTexture3D(V,0),Ae=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(te.setTexture2DArray(V,0),Ae=N.TEXTURE_2D_ARRAY):(te.setTexture2D(V,0),Ae=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let Un=_.getParameter(N.UNPACK_ROW_LENGTH),nt=_.getParameter(N.UNPACK_IMAGE_HEIGHT),ei=_.getParameter(N.UNPACK_SKIP_PIXELS),Ri=_.getParameter(N.UNPACK_SKIP_ROWS),ba=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Nt.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Nt.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ge),_.pixelStorei(N.UNPACK_SKIP_IMAGES,$e);let ns=A.isDataArrayTexture||A.isData3DTexture,ht=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let zt=$.get(A),Ca=$.get(V),gt=$.get(zt.__renderTarget),La=$.get(Ca.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,gt.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,La.__webglFramebuffer);for(let is=0;is<De;is++)ns&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(A).__webglTexture,Y,$e+is),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(V).__webglTexture,Ce,Ot+is)),N.blitFramebuffer(Be,Ge,Te,be,Ue,dt,Te,be,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||$.has(A)){let zt=$.get(A),Ca=$.get(V);_.bindFramebuffer(N.READ_FRAMEBUFFER,H),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let gt=0;gt<De;gt++)ns?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.__webglTexture,Y,$e+gt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zt.__webglTexture,Y),ht?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ca.__webglTexture,Ce,Ot+gt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ca.__webglTexture,Ce),Y!==0?N.blitFramebuffer(Be,Ge,Te,be,Ue,dt,Te,be,N.COLOR_BUFFER_BIT,N.NEAREST):ht?N.copyTexSubImage3D(Ae,Ce,Ue,dt,Ot+gt,Be,Ge,Te,be):N.copyTexSubImage2D(Ae,Ce,Ue,dt,Be,Ge,Te,be);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ht?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ae,Ce,Ue,dt,Ot,Te,be,De,ft,un,Nt.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Ae,Ce,Ue,dt,Ot,Te,be,De,ft,Nt.data):N.texSubImage3D(Ae,Ce,Ue,dt,Ot,Te,be,De,ft,un,Nt):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ce,Ue,dt,Te,be,ft,un,Nt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ce,Ue,dt,Nt.width,Nt.height,ft,Nt.data):N.texSubImage2D(N.TEXTURE_2D,Ce,Ue,dt,Te,be,ft,un,Nt);_.pixelStorei(N.UNPACK_ROW_LENGTH,Un),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt),_.pixelStorei(N.UNPACK_SKIP_PIXELS,ei),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ri),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ba),Ce===0&&V.generateMipmaps&&N.generateMipmap(Ae),_.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&te.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?te.setTextureCube(A,0):A.isData3DTexture?te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?te.setTexture2DArray(A,0):te.setTexture2D(A,0),_.unbindTexture()},this.resetState=function(){K=0,Z=0,U=null,_.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}});var mh,y0=ve(()=>{mh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim()});var Q_,e1=ve(()=>{Q_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()});var t1,n1=ve(()=>{t1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase())});var v0,i1=ve(()=>{n1();v0=t=>{let e=t1(t);return e.charAt(0).toUpperCase()+e.slice(1)}});var gh,a1=ve(()=>{gh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}});var r1,s1=ve(()=>{r1=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1}});var co,qE,o1,l1=ve(()=>{"use strict";"use client";co=Pi(Ia(),1);qE=(0,co.createContext)({}),o1=()=>(0,co.useContext)(qE)});var su,u1,c1=ve(()=>{"use strict";"use client";su=Pi(Ia(),1);a1();s1();y0();l1();u1=(0,su.forwardRef)(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:a="",children:r,iconNode:s,...o},l)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:p=!1,color:f="currentColor",className:g=""}=o1()??{},y=i??p?Number(n??d)*24/Number(e??u):n??d;return(0,su.createElement)("svg",{ref:l,...gh,width:e??u??gh.width,height:e??u??gh.height,stroke:t??f,strokeWidth:y,className:mh("lucide",g,a),...!r&&!r1(o)&&{"aria-hidden":"true"},...o},[...s.map(([w,x])=>(0,su.createElement)(w,x)),...Array.isArray(r)?r:[r]])})});var xh,ee,Ee=ve(()=>{xh=Pi(Ia(),1);y0();e1();i1();c1();ee=(t,e)=>{let n=(0,xh.forwardRef)(({className:i,...a},r)=>(0,xh.createElement)(u1,{ref:r,iconNode:e,className:mh(`lucide-${Q_(v0(t))}`,`lucide-${t}`,i),...a}));return n.displayName=v0(t),n}});var XE,ou,d1=ve(()=>{Ee();XE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ou=ee("award",XE)});var $E,lu,f1=ve(()=>{Ee();$E=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],lu=ee("bath",$E)});var YE,fo,h1=ve(()=>{Ee();YE=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],fo=ee("bed-double",YE)});var ZE,uu,p1=ve(()=>{Ee();ZE=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],uu=ee("bell",ZE)});var jE,cu,m1=ve(()=>{Ee();jE=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],cu=ee("bike",jE)});var KE,ho,g1=ve(()=>{Ee();KE=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ho=ee("box",KE)});var JE,du,x1=ve(()=>{Ee();JE=[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]],du=ee("brush",JE)});var QE,Sa,y1=ve(()=>{Ee();QE=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Sa=ee("building-2",QE)});var eT,fu,v1=ve(()=>{Ee();eT=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],fu=ee("calculator",eT)});var tT,po,S1=ve(()=>{Ee();tT=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],po=ee("calendar-check",tT)});var nT,hu,_1=ve(()=>{Ee();nT=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],hu=ee("car",nT)});var iT,mo,M1=ve(()=>{Ee();iT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],mo=ee("check",iT)});var aT,go,w1=ve(()=>{Ee();aT=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],go=ee("chevron-right",aT)});var rT,pu,b1=ve(()=>{Ee();rT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],pu=ee("clock",rT)});var sT,mu,C1=ve(()=>{Ee();sT=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],mu=ee("coffee",sT)});var oT,gu,L1=ve(()=>{Ee();oT=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]],gu=ee("cross",oT)});var lT,Yr,I1=ve(()=>{Ee();lT=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Yr=ee("dollar-sign",lT)});var uT,xu,A1=ve(()=>{Ee();uT=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],xu=ee("droplets",uT)});var cT,yu,E1=ve(()=>{Ee();cT=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],yu=ee("dumbbell",cT)});var dT,xo,T1=ve(()=>{Ee();dT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],xo=ee("eye",dT)});var fT,ci,R1=ve(()=>{Ee();fT=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ci=ee("file-text",fT)});var hT,vu,P1=ve(()=>{Ee();hT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],vu=ee("film",hT)});var pT,Su,k1=ve(()=>{Ee();pT=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],Su=ee("footprints",pT)});var mT,_u,D1=ve(()=>{Ee();mT=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]],_u=ee("git-compare",mT)});var gT,Mu,F1=ve(()=>{Ee();gT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Mu=ee("globe",gT)});var xT,yo,N1=ve(()=>{Ee();xT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],yo=ee("heart",xT)});var yT,di,B1=ve(()=>{Ee();yT=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],di=ee("house",yT)});var vT,vo,U1=ve(()=>{Ee();vT=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",key:"yxxwt6"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],vo=ee("landmark",vT)});var ST,wu,O1=ve(()=>{Ee();ST=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],wu=ee("languages",ST)});var _T,So,z1=ve(()=>{Ee();_T=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],So=ee("list",_T)});var MT,bu,V1=ve(()=>{Ee();MT=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],bu=ee("mail",MT)});var wT,_o,H1=ve(()=>{Ee();wT=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],_o=ee("map-pin",wT)});var bT,Cu,G1=ve(()=>{Ee();bT=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Cu=ee("map",bT)});var CT,Lu,W1=ve(()=>{Ee();CT=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Lu=ee("message-circle",CT)});var LT,Zr,q1=ve(()=>{Ee();LT=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Zr=ee("message-square",LT)});var IT,Iu,X1=ve(()=>{Ee();IT=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Iu=ee("moon",IT)});var AT,Au,$1=ve(()=>{Ee();AT=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],Au=ee("mountain",AT)});var ET,Eu,Y1=ve(()=>{Ee();ET=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Eu=ee("navigation",ET)});var TT,Mo,Z1=ve(()=>{Ee();TT=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Mo=ee("palette",TT)});var RT,Tu,j1=ve(()=>{Ee();RT=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Tu=ee("pause",RT)});var PT,Ru,K1=ve(()=>{Ee();PT=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ru=ee("phone",PT)});var kT,Pu,J1=ve(()=>{Ee();kT=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Pu=ee("play",kT)});var DT,ku,Q1=ve(()=>{Ee();DT=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],ku=ee("route",DT)});var FT,pr,eM=ve(()=>{Ee();FT=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],pr=ee("send",FT)});var NT,Dn,tM=ve(()=>{Ee();NT=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Dn=ee("shield-check",NT)});var BT,wo,nM=ve(()=>{Ee();BT=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],wo=ee("shopping-bag",BT)});var UT,bo,iM=ve(()=>{Ee();UT=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],bo=ee("shopping-cart",UT)});var OT,jr,aM=ve(()=>{Ee();OT=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]],jr=ee("sofa",OT)});var zT,Qn,rM=ve(()=>{Ee();zT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Qn=ee("sparkles",zT)});var VT,Co,sM=ve(()=>{Ee();VT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Co=ee("star",VT)});var HT,Du,oM=ve(()=>{Ee();HT=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Du=ee("sun",HT)});var GT,Fu,lM=ve(()=>{Ee();GT=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Fu=ee("thermometer",GT)});var WT,Nu,uM=ve(()=>{Ee();WT=[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}],["path",{d:"M17 14V2",key:"8ymqnk"}]],Nu=ee("thumbs-down",WT)});var qT,Kr,cM=ve(()=>{Ee();qT=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]],Kr=ee("train-front",qT)});var XT,Jr,dM=ve(()=>{Ee();XT=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],Jr=ee("trees",XT)});var $T,Bu,fM=ve(()=>{Ee();$T=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Bu=ee("trending-down",$T)});var YT,Uu,hM=ve(()=>{Ee();YT=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Uu=ee("trending-up",YT)});var ZT,_a,pM=ve(()=>{Ee();ZT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_a=ee("triangle-alert",ZT)});var jT,Ou,mM=ve(()=>{Ee();jT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ou=ee("user",jT)});var KT,zu,gM=ve(()=>{Ee();KT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],zu=ee("users",KT)});var JT,ji,xM=ve(()=>{Ee();JT=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],ji=ee("utensils-crossed",JT)});var QT,Vu,yM=ve(()=>{Ee();QT=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Vu=ee("volume-2",QT)});var eR,Ma,vM=ve(()=>{Ee();eR=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Ma=ee("wand-sparkles",eR)});var tR,mr,SM=ve(()=>{Ee();tR=[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],mr=ee("waves-horizontal",tR)});var nR,Hu,_M=ve(()=>{Ee();nR=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],Hu=ee("wind",nR)});var iR,wa,MM=ve(()=>{Ee();iR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],wa=ee("x",iR)});var wM=ve(()=>{"use strict";B1();rM();pM();xM();vM();SM();d1();f1();h1();p1();m1();g1();x1();y1();v1();S1();_1();M1();w1();b1();C1();L1();I1();A1();E1();T1();R1();P1();k1();D1();F1();N1();U1();O1();z1();V1();H1();G1();W1();q1();X1();$1();Y1();Z1();j1();K1();J1();Q1();eM();tM();nM();iM();aM();sM();oM();uM();lM();cM();dM();fM();hM();mM();gM();yM();_M();MM();});var NM={};ew(NM,{default:()=>ZR});function b0(t,e,n){let i=e/100;if(i<=0)return t/(n*12);let a=Math.pow(1+i/2,2/12)-1,r=n*12;return t*a/(1-Math.pow(1+a,-r))}function aR(t){return t>=20?0:t>=15?.028:t>=10?.031:.04}function rR(t,e){let n=wh[e]||wh.longueuil,i=0,a=0;for(let[r,s]of n.brackets){let o=Math.min(t,r);if(o>a&&(i+=(o-a)*s),a=r,t<=r)break}return Math.round(i)}function kM(t,e,n=6,i=.028){let a=new Date().getFullYear(),r=[];for(let s=0;s<=n;s++){let o=a+s,l=t*Math.pow(1+i-.006,s),u=t*Math.pow(1+i,s),d=t*Math.pow(1+i+.006,s);for(let p of e){let f=Math.max(0,Math.min(1,(o-(p.year-2))/2));l+=t*(p.lo/100)*f,u+=t*((p.lo+p.hi)/2/100)*f,d+=t*(p.hi/100)*f}r.push({yr:o,low:Math.round(l),mid:Math.round(u),high:Math.round(d)})}return r}function sR(t){return!t||!t.ficheRooms||t.ficheRooms.length<3?t:(_0[t.id]||(_0[t.id]={...t,plan:DM(t.ficheRooms)}),_0[t.id])}function LM(){let e=Date.now(),n=(i,a,r,s,o,l)=>({id:`${i}-${s}-${o}`,pid:i,pname:a,lid:r,type:s,ts:e-o*36e5,meta:l||null});return[n("p_eric","\xC9ric Bouchard","28374619","visit",52),n("p_eric","\xC9ric Bouchard","28374619","visit",29),n("p_eric","\xC9ric Bouchard","28374619","visit",5),n("p_eric","\xC9ric Bouchard","28374619","tour_view",29),n("p_eric","\xC9ric Bouchard","28374619","calc_use",28),n("p_eric","\xC9ric Bouchard","28374619","forecast_view",28),n("p_eric","\xC9ric Bouchard","28374619","chat_topic",27,{topic:"financement"}),n("p_eric","\xC9ric Bouchard","28374619","broker_message",4,{text:"Est-ce que le vendeur serait ouvert \xE0 une prise de possession en juillet?"}),n("p_nadia","Nadia Kaci","19052833","visit",70),n("p_nadia","Nadia Kaci","19052833","visit",20),n("p_nadia","Nadia Kaci","19052833","tour_view",20),n("p_nadia","Nadia Kaci","19052833","commute_calc",19),n("p_nadia","Nadia Kaci","19052833","calc_use",19),n("p_nadia","Nadia Kaci","19052833","reaction_interested",18),n("p_simon","Simon Lavall\xE9e","28374619","visit",90),n("p_simon","Simon Lavall\xE9e","28374619","reaction_pass",89,{reasons:["prix"]})]}function oR(t,e){let n={centris:t.id,adresse:`${t.addr}, ${t.area}`,type:t.typeFr,prix:t.price,evaluation_municipale:t.evalMun,superficie_pi2:t.sqft,annee:t.year,chambres:t.beds,sdb:t.baths,stationnement:t.parkFr,taxes_municipales_an:t.taxesMun,taxes_scolaires_an:t.taxesScol,frais_copro_mois:t.condoFees,chauffage:gr[t.heating].fr,inclusions:t.inclFr},i=t.dv.map(a=>`[DV ${a.s}] ${a.qFr} : ${a.aFr}`).join(`
`);return`Tu es l\u2019assistant de propri\xE9t\xE9 de ${At.name}, ${At.title_fr} (${At.agency}), pour UNE seule inscription.

FICHE (source: fiche descriptive Centris) :
${JSON.stringify(n,null,1)}

D\xC9CLARATIONS DU VENDEUR (source: formulaire DV, extraits) :
${i}

R\xC8GLES STRICTES :
1. R\xE9ponds UNIQUEMENT \xE0 partir des donn\xE9es ci-dessus. Cite ta source (\xAB Selon la fiche\u2026 \xBB ou \xAB Selon la d\xE9claration du vendeur, section D7\u2026 \xBB).
2. Si l\u2019information n\u2019est pas dans les donn\xE9es : dis-le, ne devine JAMAIS, mets "escalate": true (transmis \xE0 ${At.name}).
3. INTERDIT : conseil sur le prix d\u2019offre ou la n\xE9gociation, conseil juridique/fiscal/hypoth\xE9caire personnalis\xE9, toute caract\xE9risation des r\xE9sidents du quartier. Redirige vers ${At.name}.
4. R\xE9ponds dans la langue du dernier message (d\xE9faut : ${e==="fr"?"fran\xE7ais":"anglais"}). Maximum 110 mots. Ton chaleureux et pr\xE9cis.
5. R\xE9ponds SEULEMENT avec un objet JSON valide, sans backticks :
{"reply": "\u2026", "escalate": true|false, "topics": ["\u2026"]}
"topics" : 1 \xE0 3 parmi : financement, taxes, copropriete, chauffage, renovations, inclusions, stationnement, quartier, visite, juridique, autre.`}async function lR(t,e,n,i){let a=n.slice(-12).map(u=>({role:u.role,content:u.text})).concat([{role:"user",content:i}]),l=((await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1e3,system:oR(t,e),messages:a})})).json()).content||[]).filter(u=>u.type==="text").map(u=>u.text).join(`
`).replace(/```json|```/g,"").trim();try{let u=JSON.parse(l);return{reply:u.reply||l,escalate:!!u.escalate,topics:Array.isArray(u.topics)&&u.topics.length?u.topics:["autre"]}}catch{return{reply:l||"\u2026",escalate:!1,topics:["autre"]}}}async function uR(t,e){let n=`Recherche des nouvelles R\xC9CENTES (transport, zonage, grands projets, construction, risques) susceptibles d\u2019influencer la valeur immobili\xE8re pr\xE8s de \xAB ${t.addr}, ${t.area} \xBB (Qu\xE9bec).
R\xE9sume 2 \xE0 4 facteurs concrets. Pour chacun estime un impact prudent sur les prix locaux, en pourcentage (n\xE9gatif possible).
R\xE9ponds SEULEMENT avec un objet JSON valide, sans backticks :
{"drivers":[{"kind":"transit|zoning|commercial|risk","label_fr":"\u2026","label_en":"\u2026","dist":"~x km|\u2014","year":2029,"lo":2,"hi":5,"src":"source"}],"note_fr":"mise en garde br\xE8ve","note_en":"brief caveat"}`,s=((await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1200,messages:[{role:"user",content:n}],tools:[{type:"web_search_20250305",name:"web_search"}]})})).json()).content||[]).filter(d=>d.type==="text").map(d=>d.text).join(`
`).replace(/```json|```/g,"").trim(),o=s.match(/\{[\s\S]*\}/),l=JSON.parse(o?o[0]:s);return{drivers:(l.drivers||[]).slice(0,4).map(d=>({kind:["transit","zoning","commercial","risk"].includes(d.kind)?d.kind:"commercial",fr:d.label_fr||d.label_en||"Facteur",en:d.label_en||d.label_fr||"Factor",dist:d.dist||"\u2014",year:Number(d.year)||new Date().getFullYear()+3,lo:Number(d.lo)||0,hi:Number(d.hi)||0,srcFr:d.src||"Actualit\xE9",srcEn:d.src||"News",live:!0})),noteFr:l.note_fr||"",noteEn:l.note_en||""}}function dR({rows:t,lang:e,height:n=150}){let a=n,r=44,s=8,o=10,l=22,u=t.flatMap(h=>[h.low,h.high]),d=Math.min(...u)*.995,p=Math.max(...u)*1.005,f=h=>r+h/(t.length-1)*(320-r-s),g=h=>o+(1-(h-d)/(p-d||1))*(a-o-l),y=h=>t.map((v,C)=>`${f(C)},${g(v[h])}`).join(" "),w=t.map((h,v)=>`${f(v)},${g(h.high)}`).concat(t.slice().reverse().map((h,v)=>`${f(t.length-1-v)},${g(h.low)}`)).join(" "),x=[d,(d+p)/2,p];return(0,c.jsxs)("svg",{viewBox:`0 0 320 ${a}`,width:"100%",height:a,role:"img","aria-label":"Projection de prix",children:[x.map((h,v)=>(0,c.jsxs)("g",{children:[(0,c.jsx)("line",{x1:r,x2:320-s,y1:g(h),y2:g(h),stroke:m.line,strokeWidth:"1"}),(0,c.jsx)("text",{x:r-6,y:g(h)+3,textAnchor:"end",style:{fontFamily:le.mono,fontSize:8.5,fill:m.sub},children:Mh(h,e)})]},v)),(0,c.jsx)("polygon",{points:w,fill:m.metro,opacity:"0.10"}),(0,c.jsx)("polyline",{points:y("high"),fill:"none",stroke:m.metro,strokeWidth:"1",opacity:"0.4",strokeDasharray:"3 3"}),(0,c.jsx)("polyline",{points:y("low"),fill:"none",stroke:m.metro,strokeWidth:"1",opacity:"0.4",strokeDasharray:"3 3"}),(0,c.jsx)("polyline",{points:y("mid"),fill:"none",stroke:m.metro,strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"}),t.map((h,v)=>v%1===0?(0,c.jsx)("text",{x:f(v),y:a-6,textAnchor:"middle",style:{fontFamily:le.mono,fontSize:8.5,fill:m.sub},children:`\u2019${String(h.yr).slice(2)}`},v):null)]})}function fR({hours:t,series:e,lang:n,height:i=140}){let r=i,s=26,o=6,l=8,u=20,d=e.flatMap(w=>w.values),p=Math.max(...d)*1.1,f=(320-s-o)/t.length,g=Math.min(9,(f-4)/e.length),y=w=>l+(1-w/p)*(r-l-u);return(0,c.jsxs)("svg",{viewBox:`0 0 320 ${r}`,width:"100%",height:r,role:"img","aria-label":"Temps de trajet",children:[[0,p/2,p].map((w,x)=>(0,c.jsxs)("g",{children:[(0,c.jsx)("line",{x1:s,x2:320-o,y1:y(w),y2:y(w),stroke:m.line}),(0,c.jsx)("text",{x:s-4,y:y(w)+3,textAnchor:"end",style:{fontFamily:le.mono,fontSize:8,fill:m.sub},children:Math.round(w)})]},x)),t.map((w,x)=>(0,c.jsxs)("g",{children:[e.map((h,v)=>{let C=s+x*f+(f-g*e.length)/2+v*g,M=y(h.values[x]);return(0,c.jsx)("rect",{x:C,y:M,width:g-1.5,height:r-u-M,rx:"1.5",fill:h.color},v)}),(0,c.jsxs)("text",{x:s+x*f+f/2,y:r-6,textAnchor:"middle",style:{fontFamily:le.mono,fontSize:8,fill:m.sub},children:[w,"h"]})]},x))]})}function Ih(t,e,n=256,i=256,a=[1,1]){if(w0[t])return w0[t];let r=document.createElement("canvas");r.width=n,r.height=i,e(r.getContext("2d"),n,i);let s=new Nl(r);return s.wrapS=s.wrapT=$s,s.repeat.set(a[0],a[1]),w0[t]=s,s}function hR(){return Ih("plank",(t,e,n)=>{t.fillStyle="#f2ede4",t.fillRect(0,0,e,n);for(let i=0;i<n;i+=32){let a=226+Math.floor(Math.random()*20);t.fillStyle=`rgb(${a},${a-7},${a-16})`,t.fillRect(0,i,e,30),t.fillStyle="rgba(120,100,78,.38)",t.fillRect(0,i+30,e,2);for(let r=Math.random()*70;r<e;r+=90+Math.random()*70)t.fillRect(r,i,2,30)}},256,256,[2,2])}function pR(){return Ih("deck",(t,e,n)=>{t.fillStyle="#d9d2c2",t.fillRect(0,0,e,n);for(let i=0;i<n;i+=42){let a=196+Math.floor(Math.random()*18);t.fillStyle=`rgb(${a},${a-10},${a-24})`,t.fillRect(0,i,e,38),t.fillStyle="rgba(90,74,56,.4)",t.fillRect(0,i+38,e,4)}},256,256,[1.6,1.6])}function mR(){return Ih("grass",(t,e,n)=>{t.fillStyle="#b8d3ac",t.fillRect(0,0,e,n);for(let i=0;i<900;i++){let a=["#a7c79a","#c2dcb5","#9dbf8f","#b0cda2"];t.fillStyle=a[i%4],t.fillRect(Math.random()*e,Math.random()*n,2,2+Math.random()*2)}},256,256,[16,16])}function IM(t){return Ih("sky-"+t,(e,n,i)=>{let a=e.createLinearGradient(0,0,0,i);if(t==="dusk"?(a.addColorStop(0,"#141d3f"),a.addColorStop(.55,"#3a3a63"),a.addColorStop(.82,"#b65a33"),a.addColorStop(1,"#e8925a")):(a.addColorStop(0,"#9cc4ea"),a.addColorStop(.6,"#cfe3f5"),a.addColorStop(1,"#eef6fc")),e.fillStyle=a,e.fillRect(0,0,n,i),t==="dusk"){e.fillStyle="rgba(255,255,255,.85)";for(let r=0;r<60;r++)e.fillRect(Math.random()*n,Math.random()*i*.5,1.4,1.4);e.fillStyle="#f4ead2",e.beginPath(),e.arc(n*.78,i*.2,13,0,7),e.fill()}else{let r=e.createRadialGradient(n*.78,i*.22,4,n*.78,i*.22,60);r.addColorStop(0,"rgba(255,246,214,.95)"),r.addColorStop(1,"rgba(255,246,214,0)"),e.fillStyle=r,e.fillRect(0,0,n,i)}},512,256)}function gR(t,e,n){let i=new Li,a=(o,l={})=>new Pn({color:o,roughness:.82,metalness:.03,...l}),r=(o,l,u,d,p=0,f=0,g=0,y="wood",w)=>{let x=new rt(new Rn(o,l,u),a(d,w));return x.position.set(p,f+l/2,g),x.castShadow=!0,x.userData={role:y,base:d},i.add(x),x},s=(o,l,u,d,p=0,f=0,g=0,y="wood",w)=>{let x=new rt(new Ii(o,l,u,20),a(d,w));return x.position.set(p,f+u/2,g),x.castShadow=!0,x.userData={role:y,base:d},i.add(x),x};switch(t){case"sofa":r(2,.42,.85,"#8FA0BC",0,0,-n/2+.62,"fabric"),r(2,.52,.2,"#7C8DAA",0,.42,-n/2+.3,"fabric"),r(.22,.5,.85,"#7C8DAA",-1,.1,-n/2+.62,"fabric"),r(.22,.5,.85,"#7C8DAA",1,.1,-n/2+.62,"fabric"),r(.5,.12,.4,"#EAEFF6",-.4,.44,-n/2+.58,"accent"),r(.5,.12,.4,"#DCE4F0",.42,.44,-n/2+.58,"accent");break;case"coffee":r(.95,.06,.52,"#B79B77",0,.26,-.1,"wood"),[[-.4,-.2],[.4,-.2],[-.4,.2],[.4,.2]].forEach(([o,l])=>r(.05,.26,.05,"#8C7454",o,0,l-.1,"wood")),r(.3,.03,.2,"#C8D4E4",.1,.32,-.1,"accent");break;case"rug":r(2.5,.02,1.6,"#C7BEA8",0,0,0,"fabric"),r(2.2,.021,1.3,"#D6CDb8".replace("b","B"),0,.002,0,"fabric");break;case"tv":r(1.25,.42,.34,"#9A9FA8",0,0,n/2-.36,"wood"),r(1.35,.78,.06,"#14171C",0,.55,n/2-.3,"screen",{roughness:.35});break;case"plant":s(.15,.11,.28,"#B0714F",e/2-.45,0,n/2-.45,"wood"),s(.02,.02,.35,"#5E7A52",e/2-.45,.28,n/2-.45,"leaf"),["#4F8A5B","#5E9A68","#447D50"].forEach((o,l)=>{let u=new rt(new rr(.16-l*.02,12,10),a(o));u.position.set(e/2-.45+(l-1)*.09,.72+l*.1,n/2-.45+(l-1)*.05),u.castShadow=!0,u.userData={role:"leaf",base:o},i.add(u)});break;case"art":r(.95,.7,.05,"#FFFFFF",-.6,1.05,-n/2+.1,"accent"),r(.82,.57,.055,"#7FA0CE",-.6,1.115,-n/2+.1,"art");break;case"counter":r(e-1,.52,.55,"#D8CBB0",0,0,n/2-.4,"wood"),r(e-1,.07,.62,"#B9A886",0,.52,n/2-.4,"accent"),r(.5,.4,.5,"#C9CFD8",-e/4,.6,n/2-.4,"metal",{metalness:.4,roughness:.45});break;case"island":r(1.45,.55,.72,"#C9B79A",0,0,0,"wood"),r(1.55,.06,.82,"#EDE7DA",0,.55,0,"accent");break;case"stool":s(.17,.15,.1,"#C9B79A",-.4,.5,.62,"wood"),s(.03,.03,.5,"#8C7454",-.4,0,.62,"wood"),s(.17,.15,.1,"#C9B79A",.4,.5,.62,"wood"),s(.03,.03,.5,"#8C7454",.4,0,.62,"wood");break;case"bed":r(1.6,.32,2,"#9AA6BC",0,.12,0,"fabric"),r(1.66,.14,2.06,"#C8B79A",0,0,0,"wood"),r(1.6,.6,.14,"#7E8AA2",0,.3,-.98,"wood"),r(.62,.15,.42,"#EAEFF6",-.42,.44,-.68,"accent"),r(.62,.15,.42,"#EAEFF6",.42,.44,-.68,"accent"),r(1.6,.06,.8,"#B9C6D8",0,.44,.55,"fabric");break;case"bedS":r(1.1,.3,1.9,"#A6A0BC",0,.1,0,"fabric"),r(1.16,.12,1.96,"#C8B79A",0,0,0,"wood"),r(1.1,.52,.13,"#8B85A6",0,.28,-.92,"wood"),r(.55,.14,.38,"#EFF2F8",0,.4,-.62,"accent");break;case"night":r(.45,.42,.4,"#B7A98C",0,0,0,"wood"),s(.09,.11,.06,"#E8DFC8",0,.42,0,"accent"),s(.015,.015,.16,"#8C7454",0,.48,0,"wood"),s(.11,.13,.14,"#F2E9D2",0,.62,0,"lamp",{emissive:"#f5e6bd",emissiveIntensity:.15});break;case"tub":r(1.5,.5,.72,"#E7EFEA",0,0,0,"fixture",{roughness:.35}),r(1.3,.05,.52,"#CFE0EA",0,.42,0,"fixture",{roughness:.2});break;case"vanity":r(.82,.55,.46,"#CBD6D0",0,0,0,"wood"),r(.86,.05,.5,"#EDF2F0",0,.55,0,"fixture");break;case"mirror":r(.62,.82,.04,"#DCE9F2",.7,1,-n/2+.09,"fixture",{roughness:.15,metalness:.25});break;case"table":r(1.5,.07,.92,"#B79B77",0,.62,0,"wood"),[[-.66,-.4],[.66,-.4],[-.66,.4],[.66,.4]].forEach(([o,l])=>r(.07,.62,.07,"#8C7454",o,0,l,"wood")),r(.34,.05,.34,"#DCE4F0",0,.69,0,"accent");break;case"chair":r(.45,.45,.45,"#9BB0A2",-.5,0,0,"fabric"),r(.45,.42,.1,"#89A092",-.5,.45,-.18,"fabric");break;case"chair2":r(.45,.45,.45,"#9BB0A2",.5,0,0,"fabric"),r(.45,.42,.1,"#89A092",.5,.45,-.18,"fabric");break;case"car":r(1.7,.55,3.7,"#7E8794",0,.18,0,"metal",{metalness:.5,roughness:.4}),r(1.5,.5,1.9,"#99A2AF",0,.7,-.2,"metal",{metalness:.5,roughness:.35}),[[-.78,1.2],[.78,1.2],[-.78,-1.2],[.78,-1.2]].forEach(([o,l])=>{let u=new rt(new Ii(.26,.26,.16,16),a("#23262B",{roughness:.9}));u.rotation.z=Math.PI/2,u.position.set(o,.26,l),u.userData={role:"metal",base:"#23262B"},i.add(u)});break;case"pool":{let o=new rt(new Ii(1.45,1.45,.55,26),a("#B9C2CC"));o.position.y=.275,o.userData={role:"metal",base:"#B9C2CC"},i.add(o);let l=new rt(new Ii(1.36,1.36,.08,26),a("#5FA9C9",{roughness:.15,metalness:.1}));l.position.y=.54,l.userData={role:"water",base:"#5FA9C9"},i.add(l);break}case"shed":r(1.6,1.3,1.4,"#B7A98C",e/2-1.2,0,-n/2+1,"wood"),r(1.8,.28,1.6,"#8C7454",e/2-1.2,1.3,-n/2+1,"wood");break;default:break}return i.userData={shopKey:t},i}function vh(t,e){let n=yr[e]||yr.classique;t.scene.traverse(i=>{if(!i.isMesh||!i.userData||!i.userData.role)return;let a=i.userData.role;if(a==="floor"||a==="leaf"||a==="water"||a==="screen"||a==="lamp"||a==="trunk")return;let r=e==="classique"?i.userData.base:n[a]||(a==="art"?n.accent:null)||i.userData.base;i.material&&i.material.color&&i.material.color.set(r)}),t.wallMat&&t.wallMat.color.set(e==="classique"?"#F1F3F7":n.wall)}function xR(t){let e=new Li,n=(r,s={})=>new Pn({color:r,roughness:.95,...s}),i=new rt(new Ii(.1,.16,1,8),n("#7a5c40"));i.position.y=.5,i.castShadow=!0,i.userData={role:"trunk",base:"#7a5c40"},e.add(i);let a=[];return t==="spruce"?["#2F6B4F","#38795A","#2A5E45"].forEach((r,s)=>{let o=new rt(new Ol(.9-s*.22,1.1,10),n(r));o.position.y=1.2+s*.7,o.castShadow=!0,o.userData={role:"leaf",base:r},e.add(o),a.push(o)}):[[0,1.5,0,.72],[-.4,1.25,.15,.5],[.42,1.3,-.1,.52]].forEach(([r,s,o,l],u)=>{let d=["#6FA36B","#7FB279","#639661"][u],p=new rt(new rr(l,12,10),n(d));p.position.set(r,s,o),p.castShadow=!0,p.userData={role:"leaf",base:d},e.add(p),a.push(p)}),e.userData.leaves=a,e}function yR({listing:t,lang:e,onEvent:n,theme:i="classique",onThemeChange:a,onDesigner:r}){let s=(0,re.useRef)(null),o=(0,re.useRef)({}),[l,u]=(0,re.useState)(0),[d,p]=(0,re.useState)("orbit"),[f,g]=(0,re.useState)("day"),[y,w]=(0,re.useState)(!S0),[x,h]=(0,re.useState)(!0),[v,C]=(0,re.useState)(!1),[M,b]=(0,re.useState)(null),[I,T]=(0,re.useState)(!1),[S,L]=(0,re.useState)(null),[R,k]=(0,re.useState)(null),[F,z]=(0,re.useState)(50),H=(U,Q)=>e==="fr"?U:Q,B=M?M.plan:t.plan;(0,re.useEffect)(()=>{let U=s.current;if(!U)return;let Q=U.clientWidth,de=360,ue=new Rl,Me=new rn(60,Q/de,.1,260),Pe=new fh({antialias:!0,preserveDrawingBuffer:!0});Pe.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Pe.setSize(Q,de),Pe.shadowMap.enabled=!0,Pe.shadowMap.type=vf,Pe.outputEncoding=void 0,Pe.toneMapping=$l,Pe.toneMappingExposure=1.06,U.appendChild(Pe.domElement),Pe.domElement.className="tour-canvas",Pe.domElement.style.borderRadius="12px",Pe.domElement.style.cursor="grab";let Ze=1/0,We=-1/0,ie=1/0,E=-1/0;B.forEach(G=>{Ze=Math.min(Ze,G.x),We=Math.max(We,G.x+G.w),ie=Math.min(ie,G.z),E=Math.max(E,G.z+G.d)});let q=(Ze+We)/2,Le=(ie+E)/2,Oe=We-Ze,Fe=E-ie,pt=Math.sqrt(Oe*Oe+Fe*Fe),Xe=G=>G-q,st=G=>G-Le,tt=new rt(new rr(110,24,16),new Wr({map:IM("day"),side:on}));ue.add(tt);let Je=new Pn({map:mR(),color:"#ffffff",roughness:1}),vt=new rt(new Ul(70,48),Je);vt.rotation.x=-Math.PI/2,vt.position.y=-.02,vt.receiveShadow=!0,ue.add(vt);let Et=new rt(new Rn(Oe+1.6,.08,Fe+1.6),new Pn({color:"#D8DCE2",roughness:.95}));Et.position.y=-.04,Et.receiveShadow=!0,ue.add(Et);let Ut=[],Gt=[],St=[],Tt=new Pn({color:"#F1F3F7",roughness:.95}),N=hR(),ln=pR();B.forEach(G=>{let me=Xe(G.x+G.w/2),D=st(G.z+G.d/2),oe=new Pn({map:G.open?ln:N,color:G.col,roughness:.9}),J=new rt(new Rn(G.w,.07,G.d),oe);if(J.position.set(me,.035,D),J.receiveShadow=!0,J.userData={role:"floor",base:G.col},ue.add(J),G.open){let ye=new Pn({color:"#C4CCD8"});for(let _e=0;_e<=4;_e++){let Ie=new rt(new Rn(.06,.7,.06),ye);Ie.position.set(me-G.w/2+_e/4*G.w,.35,D+G.d/2),ue.add(Ie)}let se=new rt(new Rn(G.w+.06,.05,.06),ye);se.position.set(me,.72,D+G.d/2),ue.add(se)}else{let _e=(Nn,Bn,Wu,qu)=>{let vr=new rt(new Rn(Nn,1.32,Bn),Tt);vr.position.set(Wu,.66,qu),vr.castShadow=!0,vr.receiveShadow=!0,ue.add(vr);let ts=new rt(new Rn(Nn+.02,.045,Bn+.02),new Pn({color:"#D7DCE4",roughness:.9}));ts.position.set(Wu,1.34,qu),ue.add(ts)};_e(G.w,.09,me,D-G.d/2),_e(G.w,.09,me,D+G.d/2),_e(.09,G.d,me-G.w/2,D),_e(.09,G.d,me+G.w/2,D);let Ie=new rt(new Ii(.015,.015,.8,6),new Pn({color:"#3a3f48"}));Ie.position.set(me,2.15,D),ue.add(Ie);let mt=new rt(new rr(.09,12,10),new Pn({color:"#f7ecd4",emissive:"#ffd9a0",emissiveIntensity:.12}));mt.position.set(me,1.72,D),ue.add(mt),St.push(mt);let ot=new Wl("#ffd9a0",0,7,2);ot.position.set(me,1.7,D),ue.add(ot),Gt.push(ot)}let pe=new Li;(G.furn||[]).forEach(ye=>pe.add(gR(ye,G.w,G.d))),pe.position.set(me,.07,D),ue.add(pe),Ut.push(pe)});let at=[],P=Math.max(Oe,Fe)/2+3.2;for(let G=0;G<7;G++){let me=G/7*Math.PI*2+.35,D=xR(G%3===0?"leafy":"spruce"),oe=P+G%2*1.6;D.position.set(Math.cos(me)*oe,0,Math.sin(me)*oe);let J=.85+G%3*.2;D.scale.set(J,J,J),ue.add(D),at.push(D)}let _=new Hl("#ffffff","#7d8695",.85);ue.add(_);let O=new io("#fff2dc",1);O.position.set(9,15,7),O.castShadow=!0,O.shadow.mapSize.set(2048,2048),O.shadow.bias=-4e-4,O.shadow.camera.near=1,O.shadow.camera.far=70,O.shadow.camera.left=-22,O.shadow.camera.right=22,O.shadow.camera.top=22,O.shadow.camera.bottom=-22,ue.add(O);let $=new io("#dfe9f5",.25);$.position.set(-8,6,-6),ue.add($);let te=B.map(G=>new W(Xe(G.x+G.w/2),1.45,st(G.z+G.d/2))),fe=new W(pt*.9+2,pt*.55+1.5,pt*.9+2);Me.position.copy(fe),o.current={scene:ue,camera:Me,renderer:Pe,waypoints:te,camPos:fe,hemi:_,sun:O,fill:$,sky:tt,groundMat:Je,furnGroups:Ut,roomLights:Gt,bulbs:St,trees:at,wallMat:Tt,diag:pt,yaw:.8,pitch:-.1,targetIdx:0,mode:"orbit",autoplay:!S0,dragging:!1,moved:0,downT:0,lastX:0,lastY:0,frames:0,raf:0,mount:U};let he=Pe.domElement,ne=new ql,ae=new Ye,ge=G=>{let me=G.touches?G.touches[0]:G;o.current.dragging=!0,o.current.moved=0,o.current.downT=Date.now(),o.current.lastX=me.clientX,o.current.lastY=me.clientY,he.style.cursor="grabbing"},ke=G=>{if(!o.current.dragging)return;let me=G.touches?G.touches[0]:G,D=me.clientX-o.current.lastX,oe=me.clientY-o.current.lastY;o.current.moved+=Math.abs(D)+Math.abs(oe),o.current.moved>6&&o.current.autoplay&&(o.current.autoplay=!1,w(!1)),o.current.yaw-=D*.005,o.current.pitch=Math.max(-.65,Math.min(.4,o.current.pitch-oe*.005)),o.current.lastX=me.clientX,o.current.lastY=me.clientY},Se=G=>{let me=o.current,D=me.dragging&&me.moved<7&&Date.now()-me.downT<500;if(me.dragging=!1,he.style.cursor="grab",!D)return;let oe=he.getBoundingClientRect(),J=G.changedTouches?G.changedTouches[0].clientX:G.clientX,pe=G.changedTouches?G.changedTouches[0].clientY:G.clientY;if(J<oe.left||J>oe.right||pe<oe.top||pe>oe.bottom)return;ae.set((J-oe.left)/oe.width*2-1,-((pe-oe.top)/oe.height)*2+1),ne.setFromCamera(ae,me.camera);let ye=ne.intersectObjects(me.scene.children,!0);for(let se of ye){let _e=se.object;for(;_e&&!(_e.userData&&_e.userData.shopKey);)_e=_e.parent;if(_e&&Ki[_e.userData.shopKey]){L(_e.userData.shopKey),n&&n("shop_item",{item:_e.userData.shopKey});return}}L(null)};he.addEventListener("pointerdown",ge),window.addEventListener("pointermove",ke),window.addEventListener("pointerup",Se);let xe=()=>{let G=o.current;if(G.frames++,!S0&&G.frames%2===0&&G.trees.forEach((me,D)=>{me.rotation.z=Math.sin(G.frames*.008+D*1.7)*.016}),G.mode==="orbit"){G.autoplay&&!G.dragging&&(G.yaw+=.0032);let me=Math.max(.22,Math.min(1.05,.5-G.pitch)),D=G.diag*.92+2.2,oe=new W(Math.sin(G.yaw)*D,G.diag*me+1.2,Math.cos(G.yaw)*D);G.camPos.lerp(oe,.06),G.camera.position.copy(G.camPos),G.camera.lookAt(0,.5,0)}else{G.autoplay&&!G.dragging&&(G.yaw+=.0018,G.frames%300===0&&(G.targetIdx=(G.targetIdx+1)%G.waypoints.length,u(G.targetIdx)));let me=G.waypoints[G.targetIdx];G.camPos.lerp(me,.03);let D=Math.sin(G.yaw)*Math.cos(G.pitch),oe=Math.sin(G.pitch),J=Math.cos(G.yaw)*Math.cos(G.pitch);G.camera.position.copy(G.camPos),G.camera.lookAt(G.camPos.x+D,G.camPos.y+oe,G.camPos.z+J)}G.renderer.render(G.scene,G.camera),G.raf=requestAnimationFrame(xe)};xe(),C(!0);let Ne=new ResizeObserver(()=>{let G=U.clientWidth;Pe.setSize(G,de),Me.aspect=G/de,Me.updateProjectionMatrix()});return Ne.observe(U),()=>{cancelAnimationFrame(o.current.raf),Ne.disconnect(),he.removeEventListener("pointerdown",ge),window.removeEventListener("pointermove",ke),window.removeEventListener("pointerup",Se),ue.traverse(G=>{if(G.geometry&&G.geometry.dispose(),G.material){let me=G.material;(Array.isArray(me)?me:[me]).forEach(D=>D.dispose())}}),Pe.dispose(),he.parentNode&&he.parentNode.removeChild(he)}},[t.id,M]),(0,re.useEffect)(()=>{o.current.waypoints&&(o.current.targetIdx=l)},[l]),(0,re.useEffect)(()=>{o.current.autoplay=y},[y]),(0,re.useEffect)(()=>{o.current.mode=d},[d]),(0,re.useEffect)(()=>{let U=o.current;if(!U.sun||!v)return;let Q=f==="dusk";U.sky.material.map=IM(Q?"dusk":"day"),U.sky.material.needsUpdate=!0,U.hemi.intensity=Q?.35:.85,U.hemi.color.set(Q?"#c9d2ef":"#ffffff"),U.sun.color.set(Q?"#ff9a5a":"#fff2dc"),U.sun.intensity=Q?.5:1,U.sun.position.set(Q?-11:9,Q?4.5:15,Q?5:7),U.fill.intensity=Q?.12:.25,U.groundMat.color.set(Q?"#8ba081":"#ffffff"),U.roomLights.forEach(de=>de.intensity=Q?.55:0),U.bulbs.forEach(de=>de.material.emissiveIntensity=Q?1.5:.12)},[f,v]),(0,re.useEffect)(()=>{o.current.furnGroups&&o.current.furnGroups.forEach(U=>U.visible=x)},[x,v]),(0,re.useEffect)(()=>{let U=o.current;!U.scene||!v||vh(U,i)},[i,v,M]);function K(){let U=o.current;if(!U.renderer)return;let Q=i==="classique"?"tranquille":i;vh(U,"classique"),U.renderer.render(U.scene,U.camera);let de=U.renderer.domElement.toDataURL("image/jpeg",.85);vh(U,Q),U.renderer.render(U.scene,U.camera);let ue=U.renderer.domElement.toDataURL("image/jpeg",.85);vh(U,i),k({before:de,after:ue,afterKey:Q}),z(50),n&&n("restage_compare",{theme:Q})}let Z=({active:U,onClick:Q,icon:de,label:ue})=>(0,c.jsxs)("button",{onClick:Q,className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1",style:{background:U?m.metro:m.paper,color:U?"#fff":m.ink,border:`1px solid ${U?m.metro:m.line}`,fontSize:12,fontWeight:600},children:[(0,c.jsx)(de,{size:13})," ",ue]});return(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:ho,title:H("Visite 3D","3D tour"),note:H("glissez pour regarder \xB7 touchez les meubles","drag to look \xB7 tap furnishings")}),(0,c.jsxs)("div",{className:"relative rounded-xl overflow-hidden",style:{background:"#cfe0f2"},children:[(0,c.jsx)("div",{ref:s,style:{width:"100%",height:360},onPointerDown:()=>n&&n("tour_view")}),(0,c.jsx)("div",{className:"absolute top-2 left-2",children:(0,c.jsx)(_h,{text:M?H(`3D g\xE9n\xE9r\xE9e de la fiche n\xBA ${M.no} \u2014 indicative`,`3D generated from sheet n\xBA ${M.no} \u2014 indicative`):H("Reconstitution 3D par IA \u2014 indicative","AI 3D reconstruction \u2014 indicative")})}),(0,c.jsx)("button",{onClick:()=>w(U=>!U),"aria-label":y?"Pause":"Play",className:"absolute bottom-2 right-2 rounded-full p-2",style:{background:"rgba(17,27,46,.7)",color:"#fff"},children:y?(0,c.jsx)(Tu,{size:15}):(0,c.jsx)(Pu,{size:15})}),S&&Ki[S]&&(0,c.jsxs)("div",{className:"absolute left-2 right-2 bottom-2 rounded-xl p-3 fade-up",style:{background:"rgba(255,255,255,.97)",border:`1px solid ${m.line}`,boxShadow:"0 8px 24px rgba(17,27,46,.18)"},children:[(0,c.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5",style:{fontSize:13,fontWeight:800,color:m.ink},children:[(0,c.jsx)(wo,{size:14,style:{color:m.metro}})," ",e==="fr"?Ki[S].fr:Ki[S].en]}),(0,c.jsx)("button",{onClick:()=>L(null),"aria-label":H("Fermer","Close"),style:{color:m.sub},children:(0,c.jsx)(wa,{size:15})})]}),(0,c.jsx)("div",{style:{fontFamily:le.mono,fontSize:12,color:m.ink,marginTop:2},children:Ki[S].price}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-1.5",children:[Ki[S].stores.map(U=>(0,c.jsx)(bn,{tone:"blue",children:U},U)),(0,c.jsx)(bn,{tone:"amber",children:H("liens partenaires \u2014 d\xE9mo","partner links \u2014 demo")})]}),(0,c.jsx)("button",{onClick:()=>{L(null),r&&r()},className:"mt-2 w-full rounded-lg py-2",style:{background:m.ink,color:"#fff",fontSize:12.5,fontWeight:700},children:H("Confier \xE7a \xE0 un\xB7e designer","Hand this to a designer")})]})]}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-2.5",children:[(0,c.jsx)(Z,{active:d==="orbit",onClick:()=>p("orbit"),icon:ho,label:H("Maquette","Dollhouse")}),(0,c.jsx)(Z,{active:d==="walk",onClick:()=>p("walk"),icon:xo,label:H("Int\xE9rieur","Interior")}),(0,c.jsx)(Z,{active:f==="day",onClick:()=>g("day"),icon:Du,label:H("Jour","Day")}),(0,c.jsx)(Z,{active:f==="dusk",onClick:()=>g("dusk"),icon:Iu,label:H("Cr\xE9puscule","Dusk")}),(0,c.jsx)(Z,{active:x,onClick:()=>h(U=>!U),icon:jr,label:x?H("Meubl\xE9","Furnished"):H("Vide","Empty")})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:B.map((U,Q)=>(0,c.jsx)("button",{onClick:()=>{p("walk"),u(Q),w(!1),n&&n("tour_room",{room:U.key})},className:"rounded-full px-2.5 py-1",style:{background:d==="walk"&&l===Q?m.metroSoft:m.snow,color:d==="walk"&&l===Q?m.metro:m.sub,border:`1px solid ${d==="walk"&&l===Q?"#C9D9F2":m.line}`,fontSize:11.5,fontWeight:600},children:e==="fr"?U.fr:U.en},U.key))}),(0,c.jsxs)("div",{className:"flex flex-wrap items-center gap-1.5 mt-2",children:[(0,c.jsx)(Mo,{size:14,style:{color:m.sub}}),Object.entries(yr).map(([U,Q])=>(0,c.jsxs)("button",{onClick:()=>a&&a(U),className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:i===U?m.ink:m.paper,color:i===U?"#fff":m.ink,border:`1px solid ${i===U?m.ink:m.line}`,fontSize:11.5,fontWeight:700},children:[(0,c.jsx)("span",{style:{width:9,height:9,borderRadius:999,background:Q.dot,border:"1px solid rgba(0,0,0,.12)"}})," ",e==="fr"?Q.fr:Q.en]},U))]}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:[(0,c.jsxs)("button",{onClick:K,className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:m.ink,color:"#fff",fontSize:11.5,fontWeight:700},children:[(0,c.jsx)(xo,{size:13})," ",H("Avant / Apr\xE8s IA","AI Before / After")]}),(0,c.jsxs)("button",{onClick:()=>T(!0),className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:m.metroSoft,color:m.metro,border:"1px solid #C9D9F2",fontSize:11.5,fontWeight:700},children:[(0,c.jsx)(Ma,{size:13})," ",H("G\xE9n\xE9rer depuis une fiche Centris","Generate from a Centris sheet")]}),M&&(0,c.jsxs)("button",{onClick:()=>{b(null),u(0)},className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1",style:{background:m.spruceSoft,color:m.spruce,border:"1px solid #C4E0D2",fontSize:11.5,fontWeight:700},children:[H(`Plan de la fiche n\xBA ${M.no}`,`Sheet n\xBA ${M.no} plan`)," ",(0,c.jsx)(wa,{size:12})]})]}),(0,c.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:m.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),H("Mod\xE8le 3D, mise en sc\xE8ne et ameublement virtuel g\xE9n\xE9r\xE9s par IA \xE0 partir du plan et des photos \u2014 dimensions approximatives, \xE0 titre indicatif. \xAB Jour/cr\xE9puscule \xBB simule l\u2019ensoleillement.","3D model, staging and virtual furnishing are AI-generated from the floor plan and photos \u2014 approximate dimensions, indicative only. \u201CDay/dusk\u201D simulates natural light.")]}),I&&(0,c.jsx)(Ch,{onClose:()=>T(!1),label:H("G\xE9n\xE9rer depuis la fiche","Generate from the sheet"),children:(0,c.jsx)(QR,{lang:e,defaultNo:"14106527",onGenerate:(U,Q)=>{b({no:U,plan:DM(Q)}),u(0),T(!1),n&&n("plan_generate",{centris:U,rooms:Q.length})}})}),R&&(0,c.jsxs)(Ch,{onClose:()=>k(null),label:H("Avant / Apr\xE8s","Before / After"),children:[(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:700,fontSize:19,color:m.ink},children:H("Restylage virtuel \u2014 avant / apr\xE8s","Virtual restyle \u2014 before / after")}),(0,c.jsx)("div",{style:{fontSize:11.5,color:m.sub,margin:"4px 0 10px"},children:H("Glissez le curseur pour comparer.","Drag the slider to compare.")}),(0,c.jsxs)("div",{className:"relative rounded-xl overflow-hidden",style:{border:`1px solid ${m.line}`},children:[(0,c.jsx)("img",{src:R.after,alt:H("Apr\xE8s","After"),style:{width:"100%",display:"block"}}),(0,c.jsx)("div",{className:"absolute inset-0 overflow-hidden",style:{width:`${F}%`},children:(0,c.jsx)("img",{src:R.before,alt:H("Avant","Before"),style:{width:`${1e4/Math.max(F,1)}%`,maxWidth:"none",display:"block"}})}),(0,c.jsx)("div",{className:"absolute top-0 bottom-0",style:{left:`${F}%`,width:2,background:"#fff",boxShadow:"0 0 6px rgba(0,0,0,.4)"}}),(0,c.jsx)("div",{className:"absolute top-2 left-2",children:(0,c.jsx)(_h,{text:H("Original \u2014 reconstitution 3D","Original \u2014 3D reconstruction")})}),(0,c.jsx)("div",{className:"absolute top-2 right-2",children:(0,c.jsx)(_h,{text:`${H("Ameublement virtuel","Virtually staged")} \xB7 ${e==="fr"?yr[R.afterKey].fr:yr[R.afterKey].en} \u2014 IA`})})]}),(0,c.jsx)("input",{type:"range",min:0,max:100,value:F,onChange:U=>z(Number(U.target.value)),className:"w-full mt-2"}),(0,c.jsxs)("div",{className:"mt-1 flex items-start gap-1.5",style:{fontSize:10.5,color:m.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),H("Ameublement virtuel : visuel modifi\xE9 par IA et identifi\xE9 comme tel. Les \xE9l\xE9ments permanents (murs, planchers, structure) ne sont pas modifi\xE9s et l\u2019original demeure accessible.","Virtual staging: AI-modified visual, labelled as such. Permanent elements (walls, floors, structure) are unchanged and the original remains accessible.")]})]})]})}function vR({l:t,lang:e,log:n,refEl:i}){let a=(S,L)=>e==="fr"?S:L,[r,s]=(0,re.useState)(20),[o,l]=(0,re.useState)(4.39),[u,d]=(0,re.useState)(25),p=(0,re.useRef)(new Set),f=S=>{p.current.size||n("calc_use"),p.current.has(S)||(p.current.add(S),n("calc_adjust",{field:S}))},g=Math.round(r/100*t.price),y=t.price-g,w=Math.round(y*aR(r)),x=y+w,h=Math.round(b0(x,o,u)),v=Math.round((t.taxesMun+t.taxesScol)/12),C=Math.round(t.sqft*gr[t.heating].perSqft/12),M=h+v+t.condoFees+C+t.insuranceEst,b=rR(t.price,t.muni),I=g+b+1500+650,T=[{v:h,color:m.metro,label:a("Hypoth\xE8que","Mortgage")},{v,color:m.ink,label:a("Taxes","Taxes")},{v:t.condoFees,color:m.ochre,label:a("Copropri\xE9t\xE9","Condo")},{v:C,color:m.spruce,label:a("\xC9nergie*","Energy*")},{v:t.insuranceEst,color:"#9AA6B8",label:a("Assurance*","Insurance*")}];return(0,c.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:fu,title:a("Co\xFBt mensuel r\xE9el","True monthly cost"),note:a("ajustez les hypoth\xE8ses","adjust assumptions")}),(0,c.jsxs)("div",{className:"flex items-end gap-2 mb-2",children:[(0,c.jsx)("div",{style:{fontFamily:le.mono,fontWeight:600,fontSize:34,color:m.ink,lineHeight:1},children:ct(M,e)}),(0,c.jsx)("div",{style:{fontSize:13,color:m.sub,paddingBottom:3},children:a("/ mois, tout compris","/ month, all-in")})]}),(0,c.jsx)("div",{className:"flex w-full rounded-full overflow-hidden",style:{height:14,background:m.snow,border:`1px solid ${m.line}`},children:T.filter(S=>S.v>0).map((S,L)=>(0,c.jsx)("div",{style:{width:`${S.v/M*100}%`,background:S.color},title:S.label},L))}),(0,c.jsx)("div",{className:"flex flex-wrap gap-x-4 gap-y-1 mt-2",children:T.filter(S=>S.v>0).map((S,L)=>(0,c.jsxs)("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:12,color:m.sub},children:[(0,c.jsx)("span",{style:{width:9,height:9,borderRadius:3,background:S.color}})," ",S.label," ",(0,c.jsx)("b",{style:{fontFamily:le.mono,color:m.ink},children:ct(S.v,e)})]},L))}),(0,c.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4",children:[(0,c.jsx)(es,{label:a("Mise de fonds","Down payment"),val:r,set:s,min:5,max:35,step:1,suffix:" %",field:"down",mark:f}),(0,c.jsx)(es,{label:a("Taux (5 ans fixe)","Rate (5-yr fixed)"),val:o,set:l,min:2.5,max:7,step:.05,suffix:" %",field:"rate",mark:f}),(0,c.jsx)(es,{label:a("Amortissement","Amortization"),val:u,set:d,min:15,max:30,step:5,suffix:a(" ans"," yrs"),field:"amort",mark:f})]}),w>0&&(0,c.jsxs)("div",{className:"mt-2",style:{fontSize:12,color:m.sub},children:[a("Prime SCHL ajout\xE9e :","CMHC premium added:")," ",(0,c.jsx)("b",{style:{fontFamily:le.mono,color:m.ink},children:ct(w,e)})]}),(0,c.jsxs)("div",{className:"mt-4 rounded-xl p-3",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-1.5 mb-1",style:{fontSize:13,fontWeight:700,color:m.ink},children:[(0,c.jsx)(vo,{size:14,style:{color:m.metro}})," ",a("Liquidit\xE9s \xE0 l\u2019achat","Cash at purchase")]}),(0,c.jsxs)("div",{className:"grid grid-cols-2 gap-x-3",style:{fontSize:12.5,color:m.sub},children:[(0,c.jsx)("span",{children:a("Mise de fonds","Down payment")}),(0,c.jsx)("span",{className:"text-right",style:{fontFamily:le.mono,color:m.ink},children:ct(g,e)}),(0,c.jsx)("span",{children:a("\xAB Taxe de bienvenue \xBB","Welcome tax")}),(0,c.jsx)("span",{className:"text-right",style:{fontFamily:le.mono,color:m.ink},children:ct(b,e)}),(0,c.jsx)("span",{children:a("Notaire + inspection (est.)","Notary + inspection (est.)")}),(0,c.jsx)("span",{className:"text-right",style:{fontFamily:le.mono,color:m.ink},children:ct(2150,e)}),(0,c.jsx)("span",{style:{fontWeight:700,color:m.ink},children:a("Total","Total")}),(0,c.jsx)("span",{className:"text-right",style:{fontFamily:le.mono,fontWeight:700,color:m.metro},children:ct(I,e)})]}),(0,c.jsxs)("div",{className:"mt-1.5",style:{fontSize:10.5,color:m.sub,fontFamily:le.mono},children:[e==="fr"?wh[t.muni].labelFr:wh[t.muni].labelEn," \xB7 *",a("estimations \u2014 ","estimates \u2014 "),e==="fr"?gr[t.heating].fr:gr[t.heating].en]})]})]})}function _R({l:t,lang:e,log:n,refEl:i}){let a=(v,C)=>e==="fr"?v:C,[r,s]=(0,re.useState)([]),[o,l]=(0,re.useState)(""),[u,d]=(0,re.useState)(!1),[p,f]=(0,re.useState)(!1);(0,re.useEffect)(()=>{n("forecast_view")},[]);let g=(0,re.useMemo)(()=>[...t.forecast.drivers,...r],[t,r]),y=(0,re.useMemo)(()=>kM(t.price,g,6,t.forecast.organic),[t,g]),w=y[y.length-1],x=Math.round((w.mid-t.price)/t.price*100);async function h(){d(!0),f(!1);try{let v=await uR(t,e);s(v.drivers),l(e==="fr"?v.noteFr:v.noteEn),n("forecast_refresh")}catch{f(!0)}finally{d(!1)}}return(0,c.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:Uu,title:a("Pr\xE9vision de valeur","Value forecast"),note:a("mod\xE8le \u2014 non garanti","model \u2014 not guaranteed")}),(0,c.jsxs)("div",{className:"flex items-end justify-between gap-2 mb-1",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontFamily:le.mono,fontWeight:600,fontSize:26,color:m.ink},children:ct(w.mid,e)}),(0,c.jsxs)("div",{style:{fontSize:12,color:m.sub},children:[a(`sc\xE9nario m\xE9dian ${w.yr}`,`median scenario ${w.yr}`)," \xB7 ",(0,c.jsxs)("b",{style:{color:x>=0?m.spruce:m.danger},children:[x>=0?"+":"",x,"%"]})]})]}),(0,c.jsxs)(bn,{tone:"blue",children:[ct(y[y.length-1].low,e)," \u2013 ",ct(y[y.length-1].high,e)]})]}),(0,c.jsx)(dR,{rows:y,lang:e}),(0,c.jsxs)("div",{className:"mt-3 space-y-2",children:[(0,c.jsx)("div",{style:{fontSize:11.5,fontWeight:700,color:m.sub,textTransform:"uppercase",letterSpacing:".06em"},children:a("Facteurs pris en compte","Drivers considered")}),g.map((v,C)=>{let M=SR[v.kind]||Sa,b=v.hi<=0;return(0,c.jsxs)("div",{className:"flex items-start gap-2.5 rounded-xl p-2.5",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsx)(M,{size:15,style:{color:b?m.danger:m.metro,marginTop:2,flexShrink:0}}),(0,c.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,c.jsxs)("div",{style:{fontSize:13,fontWeight:700,color:m.ink},children:[e==="fr"?v.fr:v.en," ",v.live&&(0,c.jsx)(bn,{tone:"green",children:a("actualit\xE9","live")})]}),(0,c.jsxs)("div",{style:{fontSize:11.5,color:m.sub},children:[v.dist!=="\u2014"?`${v.dist} \xB7 `:"",a("\xE9ch\xE9ance","by")," ",v.year," \xB7 ",e==="fr"?v.srcFr:v.srcEn]})]}),(0,c.jsxs)("span",{style:{fontFamily:le.mono,fontSize:12,fontWeight:600,color:b?m.danger:m.spruce,whiteSpace:"nowrap"},children:[v.lo>=0?"+":"",v.lo,"\u2026",v.hi>=0?"+":"",v.hi,"%"]})]},C)})]}),(0,c.jsxs)("button",{onClick:h,disabled:u,className:"mt-3 w-full rounded-xl py-2.5 flex items-center justify-center gap-2",style:{background:u?m.line:m.ink,color:"#fff",fontWeight:700,fontSize:13.5},children:[u?(0,c.jsx)(Qn,{size:15}):(0,c.jsx)(Eu,{size:15})," ",u?a("Recherche dans l\u2019actualit\xE9\u2026","Searching the news\u2026"):a("Actualiser depuis l\u2019actualit\xE9","Refresh from the news")]}),p&&(0,c.jsx)("div",{className:"mt-2",style:{fontSize:12,color:m.danger},children:a("La recherche n\u2019a pas abouti. R\xE9essayez.","The search didn\u2019t complete. Try again.")}),o&&(0,c.jsx)("div",{className:"mt-2",style:{fontSize:12,color:m.sub,fontStyle:"italic"},children:o}),(0,c.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:m.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),a("Projection illustrative fond\xE9e sur une croissance historique et des projets annonc\xE9s. Ce n\u2019est pas un avis d\u2019\xE9valuation ni une garantie de rendement.","Illustrative projection based on historical growth and announced projects. Not an appraisal or a guarantee of return.")]})]})}function bR({l:t,lang:e,log:n,refEl:i}){let a=(r,s)=>e==="fr"?r:s;return(0,re.useEffect)(()=>{n("risk_view")},[]),(0,c.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:Dn,title:a("Couche de risques","Risk layer"),note:a("\xE0 v\xE9rifier \xE0 l\u2019adresse","verify at address")}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:t.risks.map((r,s)=>{let o=MR[r.kind],l=wR[r.level],u=o.icon;return(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[(0,c.jsxs)("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:13,fontWeight:700,color:m.ink},children:[(0,c.jsx)(u,{size:14,style:{color:m.metro}})," ",e==="fr"?o.fr:o.en]}),(0,c.jsx)(bn,{tone:l.tone,children:e==="fr"?l.fr:l.en})]}),(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,lineHeight:1.4},children:e==="fr"?r.fr:r.en})]},s)})}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:m.sub,fontFamily:le.mono},children:a("D\xE9mo \u2014 production : zones inondables (CMM/Ville), potentiel radon (SPLQ), registres pyrite/sols contamin\xE9s.","Demo \u2014 production: flood maps (CMM/City), radon potential, pyrite/contaminated-soil registries.")})]})}function IR({l:t,lang:e,log:n,refEl:i}){let a=(y,w)=>e==="fr"?y:w,[r,s]=(0,re.useState)("weekday"),[o,l]=(0,re.useState)(t.commute.dest),[u,d]=(0,re.useState)(1);(0,re.useEffect)(()=>{n("amenity_view")},[]);let p=t.commute[r],f=[{name:a("Auto","Car"),color:m.metro,values:p.car.map(y=>Math.round(y*u))},{name:a("Transport","Transit"),color:m.spruce,values:p.transit.map(y=>Math.round(y*u))},{name:a("V\xE9lo","Bike"),color:m.ochre,values:p.bike.map(y=>Math.round(y*u))}],g=Math.max(...f[0].values);return(0,c.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:_o,title:a("Commodit\xE9s & trajets","Amenities & commute"),note:a("donn\xE9es d\xE9mo","sample data")}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4",children:t.amenities.map(y=>{let w=CR[y.type],x=w.icon;return(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-1.5 mb-1.5",style:{fontSize:12.5,fontWeight:700,color:m.ink},children:[(0,c.jsx)(x,{size:14,style:{color:m.metro}})," ",e==="fr"?w.fr:w.en]}),(0,c.jsx)("div",{className:"space-y-1",children:y.items.map(([h,v],C)=>(0,c.jsxs)("div",{className:"flex items-center justify-between",style:{fontSize:12,color:m.sub},children:[(0,c.jsx)("span",{className:"truncate",style:{color:m.ink},children:h}),(0,c.jsxs)("span",{style:{fontFamily:le.mono,whiteSpace:"nowrap",marginLeft:8},children:[v<1e3?`${v} m`:`${(v/1e3).toFixed(1)} km`," \xB7 ",LR(v)," ",a("min","min")]})]},C))})]},y.type)})}),(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-1.5 mb-2",style:{fontSize:13,fontWeight:700,color:m.ink},children:[(0,c.jsx)(ku,{size:15,style:{color:m.metro}})," ",a("Temps de trajet vers","Commute time to")," ",o]}),(0,c.jsxs)("div",{className:"flex gap-2 mb-2",children:[(0,c.jsx)("input",{type:"text",value:o,onChange:y=>l(y.target.value),placeholder:a("Destination\u2026","Destination\u2026"),className:"flex-1 rounded-lg px-2.5 py-1.5",style:{border:`1.5px solid ${m.line}`,fontSize:13,background:m.paper,color:m.ink}}),(0,c.jsx)("button",{onClick:()=>{d(.85+Math.random()*.5),n("commute_calc",{dest:o})},className:"rounded-lg px-3",style:{background:m.metro,color:"#fff",fontSize:12.5,fontWeight:700},children:a("Estimer","Estimate")})]}),(0,c.jsx)("div",{className:"flex gap-1.5 mb-2",children:[["weekday",a("Semaine","Weekday")],["weekend",a("Fin de semaine","Weekend")]].map(([y,w])=>(0,c.jsx)("button",{onClick:()=>s(y),className:"rounded-full px-3 py-1",style:{background:r===y?m.metroSoft:m.paper,color:r===y?m.metro:m.sub,border:`1px solid ${r===y?"#C9D9F2":m.line}`,fontSize:12,fontWeight:600},children:w},y))}),(0,c.jsx)(fR,{hours:t.commute.hours,series:f,lang:e}),(0,c.jsx)("div",{className:"flex flex-wrap gap-x-3 gap-y-1 mt-1",children:f.map((y,w)=>(0,c.jsxs)("span",{className:"inline-flex items-center gap-1",style:{fontSize:11,color:m.sub},children:[(0,c.jsx)("span",{style:{width:8,height:8,borderRadius:2,background:y.color}})," ",y.name]},w))}),(0,c.jsxs)("div",{className:"mt-1.5",style:{fontSize:11.5,color:m.sub},children:[a("Pointe auto :","Car peak:")," ",(0,c.jsxs)("b",{style:{fontFamily:le.mono,color:m.ink},children:[g," min"]})," \xB7 ",a("estimations, non rout\xE9es en temps r\xE9el","estimates, not real-time routed")]})]})]})}function AR({l:t,lang:e,refEl:n}){let i=(d,p)=>e==="fr"?d:p,a=t.hood,r=a.demo,s=({icon:d,label:p,v:f})=>(0,c.jsxs)("div",{className:"flex-1 rounded-xl p-3 text-center",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsx)(d,{size:16,style:{color:m.metro,margin:"0 auto 4px"}}),(0,c.jsx)("div",{style:{fontFamily:le.mono,fontWeight:600,fontSize:22,color:m.ink},children:f}),(0,c.jsx)("div",{style:{fontSize:11,color:m.sub},children:p})]}),o=r.incomeBands.map(([d,p],f)=>({label:d,pct:p,color:["#C9D8EE","#7FA0CE","#3D6DB4","#1C4A8F"][f]})),l=r.ageBands.map(([d,p],f)=>({label:d,pct:p,color:["#E4F1EA","#A9D3BD","#5FA987","#2F7D5C","#1E5740"][f]})),u=r.langs.map(([d,p],f)=>({label:d,pct:p,color:["#1656B4","#E8A33D","#9AA6B8"][f]}));return(0,c.jsxs)("section",{ref:n,className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:zu,title:i("Le quartier, en chiffres","The neighbourhood, in numbers"),note:i("donn\xE9es d\xE9mo","sample data")}),(0,c.jsxs)("div",{className:"flex gap-2 mb-3",children:[(0,c.jsx)(s,{icon:Su,label:"Walk Score",v:a.walk}),(0,c.jsx)(s,{icon:Kr,label:i("Transit","Transit"),v:a.transit}),(0,c.jsx)(s,{icon:cu,label:i("V\xE9lo","Bike"),v:a.bike})]}),(0,c.jsxs)("div",{className:"space-y-1.5 mb-4",style:{fontSize:13.5,color:m.ink},children:[(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(Kr,{size:14,style:{color:m.sub}}),e==="fr"?a.metroFr:a.metroEn,a.bixi>0&&(0,c.jsxs)(bn,{tone:"blue",children:[a.bixi," BIXI"]})]}),(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(Sa,{size:14,style:{color:m.sub}}),e==="fr"?a.schoolsFr:a.schoolsEn]})]}),(0,c.jsxs)("div",{className:"space-y-3",children:[(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between mb-1.5",children:[(0,c.jsxs)("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:12.5,fontWeight:700,color:m.ink},children:[(0,c.jsx)(Yr,{size:13,style:{color:m.metro}})," ",i("Revenu des m\xE9nages","Household income")]}),(0,c.jsxs)("span",{style:{fontFamily:le.mono,fontSize:12,color:m.ink},children:[i("m\xE9dian","median")," ",ct(r.incomeMed,e)]})]}),(0,c.jsx)(M0,{segments:o})]}),(0,c.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsx)("div",{className:"mb-1.5",style:{fontSize:12.5,fontWeight:700,color:m.ink},children:i("\xC2ge","Age")}),(0,c.jsx)(M0,{segments:l})]}),(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5 mb-1.5",style:{fontSize:12.5,fontWeight:700,color:m.ink},children:[(0,c.jsx)(wu,{size:13,style:{color:m.metro}})," ",i("Langues parl\xE9es","Languages spoken")]}),(0,c.jsx)(M0,{segments:u})]})]}),(0,c.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsx)("div",{style:{fontSize:12.5,fontWeight:700,color:m.ink},children:i("M\xE9nages","Households")}),(0,c.jsxs)("div",{className:"mt-1",style:{fontSize:12.5,color:m.sub},children:[i("Familles","Families")," ",(0,c.jsxs)("b",{style:{fontFamily:le.mono,color:m.ink},children:[r.fam,"%"]})," \xB7 ",i("Locataires","Renters")," ",(0,c.jsxs)("b",{style:{fontFamily:le.mono,color:m.ink},children:[r.rent,"%"]})]})]}),(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between",children:[(0,c.jsx)("span",{style:{fontSize:12.5,fontWeight:700,color:m.ink},children:i("Criminalit\xE9","Crime")}),(0,c.jsxs)("span",{className:"inline-flex items-center gap-1",style:{fontSize:12,color:m.spruce,fontWeight:700},children:[(0,c.jsx)(Bu,{size:12})," ",a.crimeDelta,"%"]})]}),(0,c.jsx)(cR,{data:a.crime,color:m.spruce,w:110,h:30}),(0,c.jsx)("div",{className:"space-y-0.5",children:a.incidents.map(([d,p,f],g)=>(0,c.jsxs)("div",{className:"flex items-center justify-between",style:{fontSize:11,color:m.sub},children:[(0,c.jsx)("span",{children:e==="fr"?d:p}),(0,c.jsxs)("span",{style:{fontFamily:le.mono,color:f<=0?m.spruce:m.danger},children:[f>0?"+":"",f,"%"]})]},g))})]})]})]}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:m.sub,fontFamily:le.mono},children:i("D\xE9mo \u2014 production : StatCan (recensement), donn\xE9es ouvertes SPVM/SPAL, Walk Score API.","Demo \u2014 production: StatCan (census), SPVM/SPAL open data, Walk Score API.")})]})}function ER({l:t,lang:e}){let n=(o,l)=>e==="fr"?o:l;if(!t.fund)return null;let i=t.fund,a=Math.round(i.balance/i.units),r=a>=12e3?"strong":a>=7e3?"adequate":"thin",s={strong:{tone:"green",fr:"Solide",en:"Strong"},adequate:{tone:"amber",fr:"Correct",en:"Adequate"},thin:{tone:"red",fr:"Mince",en:"Thin"}}[r];return(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:vo,title:n("Sant\xE9 du fonds de pr\xE9voyance","Contingency fund health"),note:n("indicatif","indicative")}),(0,c.jsxs)("div",{className:"flex items-end justify-between",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontFamily:le.mono,fontWeight:600,fontSize:26,color:m.ink},children:ct(i.balance,e)}),(0,c.jsxs)("div",{style:{fontSize:12,color:m.sub},children:[ct(a,e)," ",n("par unit\xE9","per unit")," \xB7 ",i.units," ",n("unit\xE9s","units")," \xB7 ",n("\xE9tude","study")," ",i.studyYear]})]}),(0,c.jsx)(bn,{tone:s.tone,children:e==="fr"?s.fr:s.en})]}),(0,c.jsx)("div",{className:"mt-2 rounded-xl p-2.5",style:{background:i.special?m.dangerSoft:m.spruceSoft,border:`1px solid ${i.special?"#E7C3B4":"#C4E0D2"}`,fontSize:12.5,color:m.ink},children:i.special?n("\u26A0 Cotisation sp\xE9ciale vot\xE9e ou annonc\xE9e \u2014 \xE0 examiner.","\u26A0 Special assessment voted or announced \u2014 review needed."):n("\u2713 Aucune cotisation sp\xE9ciale vot\xE9e ni annonc\xE9e (selon DV D14).","\u2713 No special assessment voted or announced (per DV D14).")}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:m.sub},children:n("Rep\xE8re indicatif seulement \u2014 l\u2019ad\xE9quation r\xE9elle d\xE9pend de l\u2019\xE9tude du fonds et de l\u2019\xE9tat de l\u2019immeuble. Faites examiner les documents de copropri\xE9t\xE9.","Indicative benchmark only \u2014 true adequacy depends on the fund study and building condition. Have the co-ownership documents reviewed.")})]})}function TR({l:t,lang:e}){let n=(r,s)=>e==="fr"?r:s,i=(r,s)=>Math.round(r/s),a=i(t.price,t.sqft);return(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:ci,title:n("Ventes comparables","Comparable sales"),note:n("style Registre foncier","land-registry style")}),(0,c.jsxs)("div",{style:{fontSize:12.5,color:m.sub,marginBottom:8},children:[n("Demand\xE9 :","Asking:")," ",(0,c.jsx)("b",{style:{fontFamily:le.mono,color:m.ink},children:ct(t.price,e)})," \xB7 ",(0,c.jsxs)("b",{style:{fontFamily:le.mono,color:m.ink},children:[ct(a,e),"/pi\xB2"]})]}),(0,c.jsx)("div",{className:"space-y-1.5",children:t.soldComps.map(([r,s,o,l],u)=>(0,c.jsxs)("div",{className:"flex items-center justify-between rounded-lg px-3 py-2",style:{background:m.snow,border:`1px solid ${m.line}`,fontSize:12.5},children:[(0,c.jsx)("span",{className:"truncate",style:{color:m.ink},children:r}),(0,c.jsxs)("span",{className:"flex items-center gap-2 flex-shrink-0",style:{marginLeft:8},children:[(0,c.jsx)("span",{style:{fontFamily:le.mono,color:m.ink},children:ct(s,e)}),(0,c.jsxs)("span",{style:{fontFamily:le.mono,color:m.sub},children:[ct(i(s,l),e),"/pi\xB2"]}),(0,c.jsx)("span",{style:{fontFamily:le.mono,fontSize:11,color:m.sub},children:o})]})]},u))}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:m.sub,fontFamily:le.mono},children:n("D\xE9mo \u2014 production : Registre foncier du Qu\xE9bec / JLR. Ne constitue pas une AMC.","Demo \u2014 production: Qu\xE9bec land registry / JLR. Not a CMA.")})]})}function RR({l:t,lang:e,log:n,chat:i,setChat:a,refEl:r}){let s=(x,h)=>e==="fr"?x:h,[o,l]=(0,re.useState)(""),[u,d]=(0,re.useState)(!1),[p,f]=(0,re.useState)(!1),g=(0,re.useRef)(null);(0,re.useEffect)(()=>{let x=g.current;x&&(x.scrollTop=x.scrollHeight)},[i,u]);let y=e==="fr"?["Le toit a quel \xE2ge ?","Des d\xE9g\xE2ts d\u2019eau d\xE9clar\xE9s ?","Frais de condo et taxes ?","Puis-je visiter samedi ?"]:["How old is the roof?","Any declared water damage?","Condo fees and taxes?","Can I visit Saturday?"];async function w(x){let h=(x??o).trim();if(!h||u)return;f(!1),l("");let v=[...i,{role:"user",text:h}];a(v),n("chat_message",{q:h.slice(0,80)}),d(!0);try{let{reply:C,escalate:M,topics:b}=await lR(t,e,i,h);b.forEach(T=>n("chat_topic",{topic:T}));let I=[{role:"assistant",text:C}];M&&(n("chat_escalation",{q:h.slice(0,80)}),I.push({role:"note",text:s(`\u2192 Transmis \xE0 ${At.name} \u2014 r\xE9ponse \xE0 suivre.`,`\u2192 Sent to ${At.name} \u2014 answer to follow.`)})),a([...v,...I])}catch{f(!0),a(v)}finally{d(!1)}}return(0,c.jsxs)("section",{ref:r,className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:Lu,title:s("Questions sur la propri\xE9t\xE9","Questions about the property"),note:s("r\xE9ponses tir\xE9es des documents","answers from the documents")}),(0,c.jsxs)("div",{ref:g,className:"rounded-xl p-3 mb-3 overflow-y-auto",style:{background:m.snow,border:`1px solid ${m.line}`,height:240},children:[i.length===0&&(0,c.jsxs)("div",{style:{fontSize:13,color:m.sub},children:[(0,c.jsx)(Qn,{size:14,style:{display:"inline",color:m.ochre,marginRight:4}}),s("Je r\xE9ponds \xE0 partir de la fiche et des d\xE9clarations du vendeur \u2014 et je cite ma source. Ce que je ne sais pas, je le transmets \xE0 ","I answer from the listing sheet and seller\u2019s declarations \u2014 with sources. What I don\u2019t know, I flag to "),At.name,"."]}),i.map((x,h)=>x.role==="note"?(0,c.jsx)("div",{className:"my-2 text-center",style:{fontSize:11.5,color:m.metro,fontFamily:le.mono},children:x.text},h):(0,c.jsx)("div",{className:`flex ${x.role==="user"?"justify-end":"justify-start"} my-1.5`,children:(0,c.jsx)("div",{className:"max-w-[85%] rounded-2xl px-3 py-2",style:{background:x.role==="user"?m.metro:m.paper,color:x.role==="user"?"#fff":m.ink,border:x.role==="user"?"none":`1px solid ${m.line}`,fontSize:13.5,lineHeight:1.45},children:x.text})},h)),u&&(0,c.jsx)("div",{style:{fontSize:12.5,color:m.sub,fontFamily:le.mono},className:"my-1.5",children:s("consulte les documents\u2026","checking the documents\u2026")}),p&&(0,c.jsx)("div",{style:{fontSize:12.5,color:m.danger},className:"my-1.5",children:s("Le service ne r\xE9pond pas. R\xE9essayez.","The service didn\u2019t respond. Try again.")})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-2.5",children:y.map(x=>(0,c.jsx)("button",{onClick:()=>w(x),className:"rounded-full px-2.5 py-1",style:{background:m.metroSoft,color:m.metro,fontSize:12,fontWeight:600,border:"1px solid #C9D9F2"},children:x},x))}),(0,c.jsxs)("div",{className:"flex gap-2",children:[(0,c.jsx)("input",{value:o,onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&w()},placeholder:s("Posez votre question\u2026","Ask your question\u2026"),className:"flex-1 rounded-xl px-3 py-2.5",style:{border:`1.5px solid ${m.line}`,fontSize:14,background:m.paper,color:m.ink}}),(0,c.jsx)("button",{onClick:()=>w(),disabled:u,"aria-label":s("Envoyer","Send"),className:"rounded-xl px-3.5",style:{background:m.metro,color:"#fff",opacity:u?.6:1},children:(0,c.jsx)(pr,{size:17})})]}),(0,c.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:m.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),s("Assistant IA. Ne fournit pas de conseils juridiques, fiscaux ou sur le prix d\u2019offre. Les renseignements ne remplacent pas la v\xE9rification diligente.","AI assistant. Does not provide legal, tax, or offer-price advice. Information does not replace due diligence.")]})]})}function PR({l:t,lang:e,log:n,dm:i,setDm:a,refEl:r}){let s=(p,f)=>e==="fr"?p:f,[o,l]=(0,re.useState)(""),u=(0,re.useRef)(null);(0,re.useEffect)(()=>{let p=u.current;p&&(p.scrollTop=p.scrollHeight)},[i]);function d(){let p=o.trim();if(!p)return;l("");let f={who:"prospect",text:p,ts:Date.now()},g=[...i,f,{who:"receipt",text:s("Remis \xE0 Julie Fortin","Delivered to Julie Fortin"),ts:Date.now()}];a(g),n("broker_message",{text:p.slice(0,120)}),i.some(y=>y.who==="broker")||setTimeout(()=>a(y=>[...y,{who:"broker",sim:!0,ts:Date.now(),text:s("Bonjour! Merci pour votre message, je regarde \xE7a et je vous reviens rapidement. Souhaitez-vous que je vous propose des plages de visite?","Hi! Thanks for your message \u2014 I\u2019ll look into it and get back to you shortly. Would you like me to suggest a few showing times?")}]),1600)}return(0,c.jsxs)("section",{ref:r,className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:Zr,title:s("\xC9crire \xE0 la courti\xE8re","Message the broker"),note:s("ligne directe","direct line")}),(0,c.jsxs)("div",{className:"flex items-center gap-2 mb-3 rounded-xl p-2.5",style:{background:m.metroSoft,border:"1px solid #C9D9F2"},children:[(0,c.jsx)("div",{className:"rounded-full flex items-center justify-center",style:{width:34,height:34,background:m.metro,color:"#fff",fontWeight:700,fontFamily:le.disp},children:"JF"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:13.5,fontWeight:700,color:m.ink},children:At.name}),(0,c.jsxs)("div",{style:{fontSize:11.5,color:m.sub},children:[e==="fr"?At.title_fr:At.title_en," \xB7 ",At.agency]})]})]}),(0,c.jsxs)("div",{ref:u,className:"rounded-xl p-3 mb-3 overflow-y-auto",style:{background:m.snow,border:`1px solid ${m.line}`,height:200},children:[i.length===0&&(0,c.jsx)("div",{style:{fontSize:13,color:m.sub},children:s("Une question pr\xE9cise, une contre-proposition, une disponibilit\xE9? \xC9crivez directement \xE0 Julie \u2014 c\u2019est une ligne priv\xE9e, distincte de l\u2019assistant.","A specific question, a counter-proposal, your availability? Message Julie directly \u2014 this is a private line, separate from the assistant.")}),i.map((p,f)=>p.who==="receipt"?(0,c.jsxs)("div",{className:"text-right my-1",style:{fontSize:10.5,color:m.sub,fontFamily:le.mono},children:["\u2713 ",p.text]},f):(0,c.jsx)("div",{className:`flex ${p.who==="prospect"?"justify-end":"justify-start"} my-1.5`,children:(0,c.jsxs)("div",{className:"max-w-[85%] rounded-2xl px-3 py-2",style:{background:p.who==="prospect"?m.ink:m.paper,color:p.who==="prospect"?"#fff":m.ink,border:p.who==="prospect"?"none":`1px solid ${m.line}`,fontSize:13.5,lineHeight:1.45},children:[p.text,p.sim&&(0,c.jsx)("div",{style:{fontSize:9.5,color:m.sub,fontFamily:le.mono,marginTop:3},children:s("r\xE9ponse simul\xE9e (d\xE9mo)","simulated reply (demo)")})]})},f))]}),(0,c.jsxs)("div",{className:"flex gap-2",children:[(0,c.jsx)("input",{value:o,onChange:p=>l(p.target.value),onKeyDown:p=>{p.key==="Enter"&&d()},placeholder:s("Votre message \xE0 Julie\u2026","Your message to Julie\u2026"),className:"flex-1 rounded-xl px-3 py-2.5",style:{border:`1.5px solid ${m.line}`,fontSize:14,background:m.paper,color:m.ink}}),(0,c.jsx)("button",{onClick:d,"aria-label":s("Envoyer","Send"),className:"rounded-xl px-3.5",style:{background:m.ink,color:"#fff"},children:(0,c.jsx)(pr,{size:17})})]})]})}function kR({l:t,lang:e,log:n,onClose:i}){let a=(w,x)=>e==="fr"?w:x,[r,s]=(0,re.useState)(null),[o,l]=(0,re.useState)(null),[u,d]=(0,re.useState)(!1),p=Number(bh("visit_slot_days",5))||5,f=(0,re.useMemo)(()=>Array.from({length:p},(w,x)=>new Date(Date.now()+x*864e5).toLocaleDateString(e==="fr"?"fr-CA":"en-CA",{weekday:"short",day:"numeric",month:"short"})),[e,p]),g=bh("visit_slot_times",["10:00","11:30","13:00","15:30","17:00","18:30"]),y=({v:w,cur:x,set:h})=>(0,c.jsx)("button",{onClick:()=>h(w),className:"rounded-lg px-2.5 py-1.5",style:{border:`1.5px solid ${x===w?m.metro:m.line}`,background:x===w?m.metroSoft:m.paper,color:x===w?m.metro:m.ink,fontSize:13,fontWeight:600},children:w});return(0,c.jsx)(Ch,{onClose:i,label:a("Planifier une visite","Book a showing"),children:u?(0,c.jsxs)("div",{className:"text-center pb-4",children:[(0,c.jsx)(po,{size:34,style:{color:m.spruce,margin:"0 auto 8px"}}),(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:700,fontSize:19,color:m.ink},children:a("Demande envoy\xE9e","Request sent")}),(0,c.jsxs)("div",{style:{fontSize:13.5,color:m.sub,marginTop:4},children:[At.name," ",a("vous confirme sous 2 h ouvrables \u2014","will confirm within 2 business hours \u2014")," ",r," \xB7 ",o]})]}):(0,c.jsxs)("div",{className:"pb-2",children:[(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:700,fontSize:19,color:m.ink},children:a("Planifier une visite","Book a showing")}),(0,c.jsx)("div",{style:{fontSize:12.5,color:m.sub,marginBottom:12},children:t.addr}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-3",children:f.map(w=>(0,c.jsx)(y,{v:w,cur:r,set:s},w))}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:g.map(w=>(0,c.jsx)(y,{v:w,cur:o,set:l},w))}),(0,c.jsx)("button",{disabled:!r||!o,onClick:()=>{n("booking_request",{when:`${r} ${o}`}),typeof window<"u"&&window.__VITRINE_BOOK__&&window.__VITRINE_BOOK__(`${r} ${o}`,t.id,t.addr),d(!0)},className:"w-full rounded-xl py-3",style:{background:!r||!o?m.line:m.metro,color:"#fff",fontWeight:700,fontSize:15},children:a("Demander cette plage","Request this slot")})]})})}function DR({lang:t,log:e,onClose:n,onDone:i}){let a=(u,d)=>t==="fr"?u:d,r=[["prix",a("Prix trop \xE9lev\xE9","Price too high")],["emplacement",a("Emplacement","Location")],["travaux",a("Trop de r\xE9novations","Too many renovations")],["taille",a("Taille","Size")],["stationnement",a("Stationnement","Parking")],["autre",a("Autre","Other")]],[s,o]=(0,re.useState)([]),l=u=>o(d=>d.includes(u)?d.filter(p=>p!==u):[...d,u]);return(0,c.jsxs)(Ch,{onClose:n,label:a("Pas pour moi","Not for me"),children:[(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:700,fontSize:19,color:m.ink},children:a("Qu\u2019est-ce qui n\u2019allait pas ?","What didn\u2019t work?")}),(0,c.jsx)("div",{style:{fontSize:12.5,color:m.sub,marginBottom:12},children:a("Vos prochaines alertes s\u2019ajusteront.","Your next alerts will adjust.")}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:r.map(([u,d])=>(0,c.jsx)("button",{onClick:()=>l(u),className:"rounded-full px-3 py-1.5",style:{border:`1.5px solid ${s.includes(u)?m.metro:m.line}`,background:s.includes(u)?m.metroSoft:m.paper,color:s.includes(u)?m.metro:m.ink,fontSize:13,fontWeight:600},children:d},u))}),(0,c.jsx)("button",{onClick:()=>{e("reaction_pass",{reasons:s}),i()},className:"w-full rounded-xl py-3",style:{background:m.ink,color:"#fff",fontWeight:700,fontSize:15},children:a("Envoyer","Send")})]})}function FR({lang:t,onEvent:e}){let n=(s,o)=>t==="fr"?s:o;(0,re.useEffect)(()=>{e&&e("compare_view")},[]);let i=s=>Math.round(b0(s.price*.8,4.39,25)+(s.taxesMun+s.taxesScol)/12+s.condoFees+s.sqft*gr[s.heating].perSqft/12+s.insuranceEst),a=s=>{let o=kM(s.price,s.forecast.drivers,6,s.forecast.organic);return Math.round((o[o.length-1].mid-s.price)/s.price*100)},r=[[n("Prix","Price"),s=>ct(s.price,t)],[n("Prix / pi\xB2","Price / sqft"),s=>ct(Math.round(s.price/s.sqft),t)],[n("Co\xFBt mensuel est.","Est. monthly cost"),s=>ct(i(s),t)],[n("Superficie","Area"),s=>`${PM(s.sqft,t)} pi\xB2`],[n("Ch. / sdb","Beds / baths"),s=>`${s.beds} / ${s.baths}`],[n("Taxes / an","Taxes / yr"),s=>ct(s.taxesMun+s.taxesScol,t)],[n("Copropri\xE9t\xE9 / mois","Condo / mo"),s=>s.condoFees?ct(s.condoFees,t):"\u2014"],["Walk / Transit / "+n("V\xE9lo","Bike"),s=>`${s.hood.walk} / ${s.hood.transit} / ${s.hood.bike}`],[n("Pr\xE9vision m\xE9diane 6 ans","6-yr median forecast"),s=>{let o=a(s);return(o>=0?"+":"")+o+"%"}],[n("Criminalit\xE9 (tendance)","Crime (trend)"),s=>`${s.hood.crimeDelta}%`]];return(0,c.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,c.jsx)(Io,{children:n("Comparaison","Comparison")}),(0,c.jsx)("h1",{style:{fontFamily:le.disp,fontWeight:800,fontSize:26,color:m.ink,margin:"4px 0 14px"},children:n("C\xF4te \xE0 c\xF4te","Side by side")}),(0,c.jsxs)("div",{className:"grid grid-cols-3 gap-0 rounded-2xl overflow-hidden",style:{border:`1px solid ${m.line}`},children:[(0,c.jsx)("div",{style:{background:m.snow}}),Ji.map(s=>(0,c.jsxs)("div",{className:"p-3",style:{background:m.ink,color:"#fff"},children:[(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:700,fontSize:14,lineHeight:1.15},children:s.addr}),(0,c.jsx)("div",{style:{fontSize:11,color:"#9FB2D6"},children:s.area.split(",")[0]})]},s.id)),r.map(([s,o],l)=>(0,c.jsxs)(re.default.Fragment,{children:[(0,c.jsx)("div",{className:"p-2.5",style:{background:l%2?m.paper:m.snow,fontSize:11.5,fontWeight:600,color:m.sub,borderTop:`1px solid ${m.line}`},children:s}),Ji.map(u=>(0,c.jsx)("div",{className:"p-2.5",style:{background:l%2?m.paper:m.snow,fontFamily:le.mono,fontSize:12.5,color:m.ink,borderTop:`1px solid ${m.line}`,borderLeft:`1px solid ${m.line}`},children:o(u)},u.id))]},l))]}),(0,c.jsx)("div",{className:"mt-3",style:{fontSize:10.5,color:m.sub,fontFamily:le.mono},children:n("Co\xFBts et pr\xE9visions = estimations du mod\xE8le, non garanties.","Costs and forecasts = model estimates, not guaranteed.")})]})}function NR({addr:t,lang:e}){let[n,i]=(0,re.useState)(void 0);if((0,re.useEffect)(()=>{let s=!0;return i(void 0),fetch(`/api/geo?q=${encodeURIComponent(t)}`).then(o=>o.ok?o.json():null).then(o=>{s&&i(o&&o.found?{lat:o.lat,lon:o.lon}:null)}).catch(()=>{s&&i(null)}),()=>{s=!1}},[t]),n===null)return null;if(n===void 0)return(0,c.jsx)("div",{style:{fontSize:11,color:m.sub,fontFamily:le.mono,marginTop:8},children:e==="fr"?"carte r\xE9elle\u2026":"loading map\u2026"});let a=.004,r=`${n.lon-a},${n.lat-a},${n.lon+a},${n.lat+a}`;return(0,c.jsxs)("div",{className:"mt-2.5 rounded-xl overflow-hidden",style:{border:`1px solid ${m.line}`},children:[(0,c.jsx)("iframe",{title:e==="fr"?"Carte du secteur":"Area map",width:"100%",height:"200",loading:"lazy",style:{border:0,display:"block"},src:`https://www.openstreetmap.org/export/embed.html?bbox=${r}&layer=mapnik&marker=${n.lat},${n.lon}`}),(0,c.jsx)("div",{style:{fontSize:10,color:m.sub,fontFamily:le.mono,padding:"3px 8px"},children:"\xA9 OpenStreetMap"})]})}function BR({lang:t,log:e}){let n=(o,l)=>t==="fr"?o:l,[i,a]=(0,re.useState)({});(0,re.useEffect)(()=>{(async()=>a(await Dt.get(Ft.checklist,{})||{}))()},[]);let r=o=>{let l={...i,[o]:!i[o]};a(l),Dt.set(Ft.checklist,l),e("checklist_update",{kind:"offer_checklist",done:Object.values(l).filter(Boolean).length,total:Sh.length})},s=Object.values(i).filter(Boolean).length;return(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:ci,title:n("Pr\xEAt\xB7e pour une offre ?","Ready to make an offer?"),note:`${s}/${Sh.length}`}),(0,c.jsx)("div",{className:"rounded-full overflow-hidden mb-3",style:{height:8,background:m.snow,border:`1px solid ${m.line}`},children:(0,c.jsx)("div",{className:"seg-grow",style:{width:`${s/Sh.length*100}%`,height:"100%",background:m.spruce}})}),(0,c.jsx)("div",{className:"space-y-1.5",children:Sh.map(([o,l,u])=>(0,c.jsxs)("label",{className:"flex items-start gap-2.5",style:{cursor:"pointer",fontSize:13.5,color:i[o]?m.sub:m.ink},children:[(0,c.jsx)("input",{type:"checkbox",checked:!!i[o],onChange:()=>r(o),style:{marginTop:3,accentColor:m.spruce}}),(0,c.jsx)("span",{style:{textDecoration:i[o]?"line-through":"none"},children:t==="fr"?l:u})]},o))}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:m.sub},children:n("Votre progression est visible par votre courti\xE8re \u2014 elle saura quand vous \xEAtes pr\xEAt\xB7e \xE0 d\xE9poser.","Your progress is visible to your broker \u2014 she'll know when you're ready to submit.")})]})}function UR({lang:t,log:e}){let n=(o,l)=>t==="fr"?o:l,i=bh("mortgage_partner_name",n("partenaire hypoth\xE9caire","mortgage partner")),a=bh("mortgage_partner_url",""),[r,s]=(0,re.useState)(!1);return(0,c.jsxs)("section",{className:"rounded-2xl p-4 flex items-center gap-3 flex-wrap",style:{background:m.spruceSoft,border:"1px solid #C4E0D2"},children:[(0,c.jsx)(Yr,{size:20,style:{color:m.spruce,flexShrink:0}}),(0,c.jsxs)("div",{className:"flex-1 min-w-[180px]",children:[(0,c.jsx)("div",{style:{fontWeight:700,fontSize:14,color:m.ink},children:n("Pr\xEAt\xB7e \xE0 parler financement ?","Ready to talk financing?")}),(0,c.jsx)("div",{style:{fontSize:12,color:m.sub},children:n(`Votre courti\xE8re vous met en contact \u2014 ${i}.`,`Your broker connects you \u2014 ${i}.`)})]}),(0,c.jsx)("button",{onClick:()=>{r||(e("mortgage_click",{partner:i}),s(!0),a&&window.open(a,"_blank","noopener"))},style:{background:r?m.line:m.spruce,color:"#fff",fontWeight:700,fontSize:13,borderRadius:12,padding:"10px 14px",cursor:r?"default":"pointer"},children:r?n("Demande not\xE9e \u2713","Request noted \u2713"):n("Oui, je veux en parler","Yes, let's talk")})]})}function OR({lang:t,log:e,myNotes:n,setNote:i,refEl:a}){let r=(p,f)=>t==="fr"?p:f,[s,o]=(0,re.useState)(""),l=()=>{let p=s.trim();p&&(i([...n,{id:`n-${Date.now()}`,txt:p,ts:Date.now()}]),o(""),e("note_saved",{chars:p.length}))},u=p=>i(n.filter(f=>f.id!==p)),d=p=>new Date(p).toLocaleString(t==="fr"?"fr-CA":"en-CA",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return(0,c.jsxs)("section",{ref:a,className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:ci,title:r("Mes notes","My notes"),note:r("priv\xE9es \u2014 enregistr\xE9es dans votre portail","private \u2014 saved to your portal")}),(0,c.jsx)("textarea",{value:s,onChange:p=>o(p.target.value),rows:3,placeholder:r("Vos impressions sur cette propri\xE9t\xE9 \u2014 questions pour la visite, points \xE0 v\xE9rifier\u2026","Your impressions of this property \u2014 questions for the visit, things to double-check\u2026"),className:"w-full rounded-lg px-2.5 py-2",style:{border:`1.5px solid ${m.line}`,fontFamily:le.body,fontSize:13.5,color:m.ink,resize:"vertical"}}),(0,c.jsxs)("button",{onClick:l,disabled:!s.trim(),className:"mt-2 rounded-xl px-4 py-2 inline-flex items-center gap-1.5",style:{background:s.trim()?m.metro:m.line,color:"#fff",fontWeight:700,fontSize:13},children:[(0,c.jsx)(pr,{size:13})," ",r("Enregistrer la note","Save note")]}),n.length>0&&(0,c.jsx)("div",{className:"mt-3 space-y-2",children:n.slice().reverse().map(p=>(0,c.jsxs)("div",{className:"rounded-xl p-3 flex items-start gap-2",style:{background:m.snow,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,c.jsx)("div",{style:{fontSize:13.5,color:m.ink,lineHeight:1.5,whiteSpace:"pre-wrap"},children:p.txt}),(0,c.jsx)("div",{style:{fontFamily:le.mono,fontSize:10.5,color:m.sub,marginTop:4},children:d(p.ts)})]}),(0,c.jsx)("button",{onClick:()=>u(p.id),"aria-label":r("Supprimer la note","Delete note"),className:"p-1 rounded-md",style:{color:m.sub},children:(0,c.jsx)(wa,{size:14})})]},p.id))}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:m.sub},children:r("Vos notes vous suivent d\u2019un appareil \xE0 l\u2019autre. Leur contenu reste priv\xE9 \u2014 seul le fait que vous prenez des notes est visible par votre courti\xE8re.","Your notes follow you across devices. Their content stays private \u2014 your broker only sees that you are taking notes.")})]})}function zR({l:t,lang:e,log:n,reaction:i,setReaction:a,chat:r,setChat:s,dm:o,setDm:l,myNotes:u,setNote:d,onCompare:p,onBack:f}){let g=(k,F)=>e==="fr"?k:F,[y,w]=(0,re.useState)(!1),[x,h]=(0,re.useState)(!1),[v,C]=(0,re.useState)(null),[M,b]=(0,re.useState)("classique"),I={tour:(0,re.useRef)(null),design:(0,re.useRef)(null),cout:(0,re.useRef)(null),prev:(0,re.useRef)(null),quartier:(0,re.useRef)(null),commodites:(0,re.useRef)(null),risques:(0,re.useRef)(null),notes:(0,re.useRef)(null),questions:(0,re.useRef)(null),messages:(0,re.useRef)(null)},T=k=>{C(k),setTimeout(()=>C(null),2400)},S=k=>{n("section_view",{s:k}),I[k].current?.scrollIntoView({behavior:"smooth",block:"start"})},L=(0,re.useMemo)(()=>Math.round(b0(t.price*.8,4.39,25)+(t.taxesMun+t.taxesScol)/12+t.condoFees+t.sqft*gr[t.heating].perSqft/12+t.insuranceEst),[t]),R=[["tour","3D"],["design","Design"],["cout",g("Co\xFBt","Cost")],["prev",g("Pr\xE9vision","Forecast")],["quartier",g("Quartier","Area")],["commodites",g("Commodit\xE9s","Amenities")],["risques",g("Risques","Risks")],["notes",g("Notes","Notes")],["questions","Questions"],["messages","Messages"]];return(0,c.jsxs)("div",{className:"max-w-6xl mx-auto px-3 sm:px-4 pb-28",children:[(0,c.jsxs)("div",{className:"pt-5 pb-4 fade-up",children:[(0,c.jsxs)("button",{onClick:f,className:"inline-flex items-center gap-1 mb-2.5 rounded-full px-2.5 py-1",style:{background:m.paper,border:`1px solid ${m.line}`,fontSize:11.5,fontWeight:700,color:m.sub},children:["\u2190 ",g("Inscriptions","Listings")]}),(0,c.jsxs)("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[(0,c.jsxs)(Io,{children:["Centris n\xBA ",t.id," \xB7 ",t.area]}),(0,c.jsxs)("span",{className:"inline-flex gap-1.5",children:[t.centrisUrl&&(0,c.jsx)("a",{href:t.centrisUrl,target:"_blank",rel:"noreferrer",onClick:()=>n("centris_click",{url:t.centrisUrl}),className:"inline-flex items-center gap-1 rounded-full px-3 py-1",style:{background:m.metro,color:"#fff",fontSize:11.5,fontWeight:700},children:g("Voir sur Centris \u2197","View on Centris \u2197")}),(0,c.jsxs)("button",{onClick:p,className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1",style:{background:m.paper,border:`1px solid ${m.line}`,fontSize:11.5,fontWeight:700,color:m.metro},children:[(0,c.jsx)(_u,{size:12})," ",g("Comparer","Compare")]})]})]}),(0,c.jsx)("h1",{style:{fontFamily:le.disp,fontWeight:800,fontSize:"clamp(26px,6vw,36px)",color:m.ink,lineHeight:1.08,margin:"6px 0 4px"},children:t.addr}),(0,c.jsxs)("div",{className:"flex flex-wrap items-baseline gap-x-3 gap-y-1",children:[(0,c.jsx)("span",{style:{fontFamily:le.mono,fontWeight:600,fontSize:22,color:m.metro},children:ct(t.price,e)}),(0,c.jsxs)("span",{style:{fontSize:12.5,color:m.sub},children:[g("\xC9val. municipale","Municipal eval.")," ",ct(t.evalMun,e)]})]}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-2.5",children:[(0,c.jsx)(bn,{tone:"blue",children:e==="fr"?t.typeFr:t.typeEn}),(0,c.jsxs)(bn,{children:[t.beds," ",g("ch.","bd")," \xB7 ",t.baths," ",g("sdb","ba")]}),(!t.isLive||t.sqftReal)&&(0,c.jsxs)(bn,{children:[PM(t.sqft,e)," pi\xB2"]}),(!t.isLive||t.yearReal)&&(0,c.jsx)(bn,{children:t.year})]}),t.isLive&&!t.enriched&&(0,c.jsxs)("div",{className:"mt-3 rounded-xl p-3 flex items-start gap-2",style:{background:m.ochreSoft,border:"1px solid #EBD3A0",fontSize:12,color:m.ink,lineHeight:1.5},children:[(0,c.jsx)(_a,{size:14,style:{color:"#8A5A12",marginTop:2,flexShrink:0}}),g("Fiche en cours d'enrichissement \u2014 prix, adresse et pi\xE8ces proviennent de votre alerte Centris; les analyses ci-dessous (co\xFBts, quartier, pr\xE9visions) sont des estimations g\xE9n\xE9riques. La fiche Centris officielle fait foi.","Sheet being enriched \u2014 price, address and rooms come from your Centris alert; the analyses below (costs, neighbourhood, forecast) are generic estimates. The official Centris sheet is authoritative.")]}),(0,c.jsx)("button",{onClick:()=>S("cout"),className:"mt-4 w-full text-left rounded-2xl p-4",style:{background:m.ink,color:"#fff"},children:(0,c.jsxs)("div",{className:"flex items-center justify-between",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontFamily:le.mono,fontSize:10.5,letterSpacing:".12em",textTransform:"uppercase",color:"#9FB2D6"},children:g("Co\xFBt mensuel r\xE9el \u2014 estim\xE9","True monthly cost \u2014 estimated")}),(0,c.jsxs)("div",{style:{fontFamily:le.mono,fontWeight:600,fontSize:30,lineHeight:1.15},children:[ct(L,e),(0,c.jsxs)("span",{style:{fontSize:14,color:"#9FB2D6"},children:[" /",g("mois","mo")]})]}),(0,c.jsx)("div",{style:{fontSize:11.5,color:"#9FB2D6"},children:g("hypoth\xE8que + taxes + copro + \xE9nergie + assurance","mortgage + taxes + condo + energy + insurance")})]}),(0,c.jsx)(go,{size:22,style:{color:m.ochre}})]})})]}),(0,c.jsxs)("div",{className:"flex gap-2 overflow-x-auto pb-2 -mx-3 px-3",children:[xr("listing_photos")&&(t.photos||[]).slice(0,6).map((k,F)=>(0,c.jsx)("img",{src:k,alt:`${t.addr} \u2014 photo ${F+1}`,className:"flex-shrink-0 rounded-xl",style:{width:F===0?210:150,height:120,objectFit:"cover"}},k)),t.rooms.map((k,F)=>{let z=k.icon;return(0,c.jsxs)("div",{className:"flex-shrink-0 rounded-xl relative overflow-hidden",style:{width:F===0?210:150,height:120,background:`linear-gradient(150deg, ${k.g[0]}, ${k.g[1]})`},children:[(0,c.jsx)(z,{size:26,style:{color:"rgba(255,255,255,.85)",position:"absolute",top:10,left:10}}),(0,c.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 px-2.5 py-1.5",style:{background:"linear-gradient(transparent, rgba(17,27,46,.72))"},children:[(0,c.jsx)("div",{style:{color:"#fff",fontSize:12.5,fontWeight:700},children:e==="fr"?k.fr:k.en}),(0,c.jsx)("div",{style:{color:"rgba(255,255,255,.75)",fontSize:10.5,fontFamily:le.mono},children:k.d})]})]},F)})]}),(0,c.jsx)("div",{className:"sticky top-0 z-30 -mx-3 px-3 py-2",style:{background:"rgba(246,248,250,.94)",backdropFilter:"blur(6px)",borderBottom:`1px solid ${m.line}`},children:(0,c.jsx)("div",{className:"flex gap-1.5 overflow-x-auto",children:R.map(([k,F])=>(0,c.jsx)("button",{onClick:()=>S(k),className:"rounded-full px-3 py-1.5 flex-shrink-0",style:{background:m.paper,border:`1px solid ${m.line}`,fontSize:12.5,fontWeight:700,color:m.ink},children:F},k))})}),(0,c.jsxs)("div",{className:"mt-4 grid gap-4 lg:grid-cols-2 lg:items-start",children:[(0,c.jsx)("div",{ref:I.tour,className:"lg:col-span-2",children:(0,c.jsx)(yR,{listing:t,lang:e,onEvent:n,theme:M,onThemeChange:k=>{b(k),n("theme_change",{theme:k})},onDesigner:()=>I.design.current?.scrollIntoView({behavior:"smooth",block:"start"})})}),(0,c.jsx)("div",{className:"lg:col-span-2",children:(0,c.jsx)(tP,{lang:e,log:n,theme:M,setTheme:b,refEl:I.design})}),t.remarks&&(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5 lg:col-span-2",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:ci,title:g("Description de la fiche","Listing description"),note:g("texte du courtier inscripteur","listing broker's text")}),(0,c.jsx)("p",{style:{fontSize:13.5,color:m.ink,lineHeight:1.65,margin:0,whiteSpace:"pre-wrap"},children:t.remarks}),t.addendum&&(0,c.jsx)("p",{style:{fontSize:13,color:m.sub,lineHeight:1.6,margin:"10px 0 0",whiteSpace:"pre-wrap"},children:t.addendum})]}),(t.inclusions||t.exclusions)&&(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5 lg:col-span-2",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:mo,title:g("Inclusions et exclusions","Inclusions & exclusions"),note:g("selon la fiche","per the listing")}),t.inclusions&&(0,c.jsxs)("p",{style:{fontSize:13,color:m.ink,lineHeight:1.6,margin:0},children:[(0,c.jsx)("b",{style:{color:m.spruce},children:g("Inclus : ","Included: ")}),t.inclusions]}),t.exclusions&&(0,c.jsxs)("p",{style:{fontSize:13,color:m.ink,lineHeight:1.6,margin:t.inclusions?"8px 0 0":0},children:[(0,c.jsx)("b",{style:{color:"#B4552D"},children:g("Exclus : ","Excluded: ")}),t.exclusions]}),t.agency&&(0,c.jsxs)("p",{style:{fontFamily:le.mono,fontSize:10.5,color:m.sub,margin:"10px 0 0"},children:[g("Source : ","Source: "),t.agency,t.dateSent?` \xB7 ${g("re\xE7ue le","sent")} ${t.dateSent}`:""]})]}),(0,c.jsx)(vR,{l:t,lang:e,log:n,refEl:I.cout}),xr("mortgage_handoff")&&(0,c.jsx)(UR,{lang:e,log:n}),(0,c.jsx)(_R,{l:t,lang:e,log:n,refEl:I.prev}),(0,c.jsx)(AR,{l:t,lang:e,refEl:I.quartier}),(0,c.jsx)(IR,{l:t,lang:e,log:n,refEl:I.commodites}),(0,c.jsx)(bR,{l:t,lang:e,log:n,refEl:I.risques}),!t.isLive&&t.fund&&(0,c.jsx)(ER,{l:t,lang:e}),!t.isLive&&(0,c.jsx)(TR,{l:t,lang:e}),!t.isLive&&(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:ci,title:g("D\xE9clarations du vendeur","Seller\u2019s declarations"),note:g("extraits v\xE9rifiables","verifiable extracts")}),(0,c.jsx)("div",{className:"space-y-2.5",children:t.dv.map(k=>(0,c.jsxs)("div",{className:"flex gap-2.5",children:[(0,c.jsx)("span",{style:{fontFamily:le.mono,fontSize:11,fontWeight:600,color:m.metro,background:m.metroSoft,borderRadius:6,padding:"2px 6px",height:"fit-content"},children:k.s}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:13,fontWeight:700,color:m.ink},children:e==="fr"?k.qFr:k.qEn}),(0,c.jsx)("div",{style:{fontSize:13,color:m.sub,lineHeight:1.45},children:e==="fr"?k.aFr:k.aEn})]})]},k.s))}),(0,c.jsxs)("div",{className:"mt-3",style:{fontSize:12.5,color:m.ink},children:[(0,c.jsx)("b",{children:g("Inclusions :","Inclusions:")})," ",e==="fr"?t.inclFr:t.inclEn," \xB7 ",(0,c.jsx)("b",{children:g("Stationnement :","Parking:")})," ",e==="fr"?t.parkFr:t.parkEn]})]}),(0,c.jsx)(OR,{lang:e,log:n,myNotes:u,setNote:d,refEl:I.notes}),xr("offer_checklist")&&(0,c.jsx)(BR,{lang:e,log:n}),(0,c.jsx)(RR,{l:t,lang:e,log:n,chat:r,setChat:s,refEl:I.questions}),(0,c.jsx)(PR,{l:t,lang:e,log:n,dm:o,setDm:l,refEl:I.messages})]}),(0,c.jsx)("div",{className:"fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2",style:{background:"linear-gradient(transparent, rgba(246,248,250,.96) 34%)"},children:(0,c.jsxs)("div",{className:"max-w-2xl mx-auto flex gap-2",children:[(0,c.jsxs)("button",{onClick:()=>{i!=="interested"&&(n("reaction_interested"),a("interested"),T(g("Not\xE9 \u2014 Julie le sait.","Noted \u2014 Julie knows.")))},className:"flex-1 rounded-xl py-3 flex items-center justify-center gap-1.5",style:{background:i==="interested"?m.spruce:m.paper,color:i==="interested"?"#fff":m.ink,border:`1.5px solid ${i==="interested"?m.spruce:m.line}`,fontWeight:700,fontSize:14},children:[(0,c.jsx)(yo,{size:16})," ",g("Int\xE9ress\xE9\xB7e","Interested")]}),(0,c.jsxs)("button",{onClick:()=>h(!0),className:"rounded-xl px-4 flex items-center justify-center gap-1.5",style:{background:i==="pass"?m.ink:m.paper,color:i==="pass"?"#fff":m.sub,border:`1.5px solid ${m.line}`,fontWeight:700,fontSize:14},children:[(0,c.jsx)(Nu,{size:15})," ",g("Pas pour moi","Not for me")]}),(0,c.jsxs)("button",{onClick:()=>w(!0),className:"flex-1 rounded-xl py-3 flex items-center justify-center gap-1.5",style:{background:m.metro,color:"#fff",fontWeight:700,fontSize:14},children:[(0,c.jsx)(po,{size:16})," ",g("Visiter","Visit")]})]})}),v&&(0,c.jsx)("div",{className:"fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full px-4 py-2 fade-up",style:{background:m.ink,color:"#fff",fontSize:13,fontWeight:600},children:v}),y&&(0,c.jsx)(kR,{l:t,lang:e,log:n,onClose:()=>w(!1)}),x&&(0,c.jsx)(DR,{lang:e,log:n,onClose:()=>h(!1),onDone:()=>{a("pass"),h(!1),T(g("Merci \u2014 alertes ajust\xE9es.","Thanks \u2014 alerts adjusted."))}})]})}function AM({n:t,size:e=13}){return(0,c.jsx)("span",{className:"inline-flex items-center gap-0.5","aria-label":`${t}/5`,children:[1,2,3,4,5].map(n=>(0,c.jsx)(Co,{size:e,strokeWidth:2,fill:n<=t?m.ochre:"none",color:n<=t?m.ochre:m.line},n))})}function HR({lang:t}){let e=(i,a)=>t==="fr"?i:a,n=VR;return(0,c.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pb-16",children:[(0,c.jsx)("div",{className:"pt-5 fade-up",children:(0,c.jsx)(Io,{children:e("Votre courti\xE8re","Your broker")})}),(0,c.jsxs)("div",{className:"mt-3 rounded-2xl p-4 sm:p-5 fade-up",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-3.5",children:[(0,c.jsx)("span",{style:{width:60,height:60,borderRadius:999,background:m.metroSoft,color:m.metro,display:"grid",placeItems:"center",fontFamily:le.disp,fontWeight:800,fontSize:22,flexShrink:0},children:n.initials}),(0,c.jsxs)("div",{className:"min-w-0",children:[(0,c.jsxs)("div",{className:"flex items-center gap-1.5 flex-wrap",children:[(0,c.jsx)("span",{style:{fontFamily:le.disp,fontWeight:800,fontSize:20,color:m.ink},children:n.name}),(0,c.jsxs)(bn,{tone:"green",children:[(0,c.jsx)(Dn,{size:11})," ",e("V\xE9rifi\xE9e OACIQ","OACIQ-licensed")]})]}),(0,c.jsx)("div",{style:{fontSize:13,color:m.sub,marginTop:2},children:t==="fr"?n.title_fr:n.title_en}),(0,c.jsxs)("div",{style:{fontSize:12.5,color:m.sub,fontFamily:le.mono},children:[n.agency," \xB7 ",t==="fr"?n.areas_fr:n.areas_en]})]})]}),(0,c.jsx)("div",{className:"grid grid-cols-3 gap-2 mt-4",children:[{icon:Co,v:n.rating.toFixed(1),l:e(`${n.reviewCount} avis`,`${n.reviewCount} reviews`),c:"#8A5A12",bg:m.ochreSoft},{icon:ou,v:`${n.years}`,l:e("ans d\u2019exp\xE9rience","years experience"),c:m.metro,bg:m.metroSoft},{icon:di,v:`${n.deals}+`,l:e("transactions","closings"),c:m.spruce,bg:m.spruceSoft}].map((i,a)=>(0,c.jsxs)("div",{className:"rounded-xl p-2.5 text-center",style:{background:i.bg,border:`1px solid ${m.line}`},children:[(0,c.jsx)(i.icon,{size:15,style:{color:i.c,margin:"0 auto"}}),(0,c.jsx)("div",{style:{fontFamily:le.mono,fontWeight:600,fontSize:20,color:m.ink,lineHeight:1.1,marginTop:3},children:i.v}),(0,c.jsx)("div",{style:{fontSize:10.5,color:m.sub,fontWeight:600},children:i.l})]},a))}),(0,c.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2 mt-4",children:[(0,c.jsxs)("a",{href:`tel:${n.phone.replace(/\s/g,"")}`,className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5",style:{background:m.metro,color:"#fff",fontWeight:700,fontSize:13.5},children:[(0,c.jsx)(Ru,{size:15})," ",n.phone]}),(0,c.jsxs)("a",{href:`mailto:${n.email}`,className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5",style:{background:m.paper,color:m.metro,border:`1px solid ${m.line}`,fontWeight:700,fontSize:13.5},children:[(0,c.jsx)(bu,{size:15})," ",e("\xC9crire un courriel","Send an email")]})]})]}),(0,c.jsxs)("div",{className:"mt-5 rounded-2xl p-4 sm:p-5 fade-up",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:Qn,title:e("Son histoire","Her story"),note:e("\xE0 propos","about")}),(0,c.jsx)("p",{style:{fontSize:14,color:m.ink,lineHeight:1.6,margin:0},children:t==="fr"?n.story.fr:n.story.en})]}),(0,c.jsxs)("div",{className:"mt-5",children:[(0,c.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,c.jsx)(bt,{icon:Zr,title:e("Avis clients","Client reviews"),note:e("v\xE9rifi\xE9s","verified")}),(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5 shrink-0",style:{fontSize:12.5,color:m.sub},children:[(0,c.jsx)(AM,{n:Math.round(n.rating)})," ",(0,c.jsxs)("span",{style:{fontFamily:le.mono},children:[n.rating.toFixed(1),"/5"]})]})]}),(0,c.jsx)("div",{className:"space-y-2.5",children:n.reviews.map((i,a)=>(0,c.jsxs)("div",{className:"rounded-2xl p-3.5 fade-up",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:800,fontSize:14.5,color:m.ink},children:i.name}),(0,c.jsx)(AM,{n:i.rating})]}),(0,c.jsx)("div",{style:{fontSize:11.5,color:m.sub,marginTop:1},children:t==="fr"?i.area_fr:i.area_en}),(0,c.jsxs)("p",{style:{fontSize:13.5,color:m.ink,lineHeight:1.5,margin:"8px 0 0"},children:["\xAB ",t==="fr"?i.fr:i.en," \xBB"]})]},a))}),(0,c.jsxs)("div",{className:"flex items-start gap-1.5 px-1 mt-3",style:{fontSize:10.5,color:m.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),e("Profil et avis fournis \xE0 titre de d\xE9monstration \u2014 \xE0 remplacer par le profil r\xE9el du courtier et ses avis v\xE9rifi\xE9s.","Profile and reviews shown for demonstration \u2014 replace with the broker\u2019s real profile and verified reviews.")]})]})]})}function GR({lang:t}){let e=(r,s)=>t==="fr"?r:s,[n,i]=(0,re.useState)(typeof localStorage<"u"&&localStorage.getItem("vitrine2_who")||"");return(0,c.jsxs)("button",{onClick:()=>{let r=window.prompt(e("Qui explore pr\xE9sentement ? (pr\xE9nom)","Who's browsing right now? (first name)"),n||"");r!=null&&typeof localStorage<"u"&&(localStorage.setItem("vitrine2_who",r.trim()),i(r.trim()))},title:e("Mode co-acheteur \u2014 identifier qui navigue","Co-buyer mode \u2014 say who's browsing"),className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1.5",style:{background:m.paper,border:`1px solid ${m.line}`,fontSize:12,fontWeight:700,color:n?m.metro:m.sub},children:["\u{1F464} ",n||e("Qui ?","Who?")]})}function XR(t){return t?t<1024?`${t} o`:t<1024*1024?`${Math.round(t/1024)} ko`:`${(t/(1024*1024)).toFixed(1)} Mo`:""}function $R({lang:t,log:e}){let n=(b,I)=>t==="fr"?b:I,i=typeof window<"u"&&window.__VITRINE_TOKEN__||"",[a,r]=(0,re.useState)([]),[s,o]=(0,re.useState)([]),[l,u]=(0,re.useState)(""),[d,p]=(0,re.useState)(""),[f,g]=(0,re.useState)(""),[y,w]=(0,re.useState)(!1),x=(0,re.useRef)(null);async function h(){if(!i){w(!0);return}try{let b=await fetch(`/api/vitrine/vault/${i}`);if(b.ok){let I=await b.json();r(I.documents||[]),o(I.notes||[])}}catch{}w(!0)}(0,re.useEffect)(()=>{h()},[]);async function v(b){if(!(!b||!i)){if(b.size>qR){g(n("Fichier trop lourd (max 8 Mo).","File too large (max 8 MB)."));return}g(""),p("up");try{let I=await new Promise((S,L)=>{let R=new FileReader;R.onload=()=>S(String(R.result).split(",")[1]||""),R.onerror=L,R.readAsDataURL(b)}),T=await fetch(`/api/vitrine/vault/${i}/documents`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:b.name,content_b64:I})});if(T.ok)e("document_upload",{name:b.name}),await h();else{let S=await T.json().catch(()=>({}));g(S.detail||n("Envoi impossible.","Upload failed."))}}catch{g(n("Envoi impossible.","Upload failed."))}p(""),x.current&&(x.current.value="")}}async function C(b){if(i){p(`del${b}`);try{await fetch(`/api/vitrine/vault/${i}/documents/${b}`,{method:"DELETE"}),await h()}catch{}p("")}}async function M(){let b=l.trim();if(!(!b||!i)){p("note");try{(await fetch(`/api/vitrine/vault/${i}/notes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:b})})).ok&&(u(""),e("vault_note",{chars:b.length}),await h())}catch{}p("")}}return y?(0,c.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,c.jsx)(Io,{children:n("Documents & \xE9changes","Documents & messages")}),(0,c.jsx)("h1",{style:{fontFamily:le.disp,fontWeight:800,fontSize:26,color:m.ink,margin:"4px 0 4px"},children:n("Mon dossier","My file")}),(0,c.jsx)("div",{style:{fontSize:12.5,color:m.sub,marginBottom:14},children:n(`D\xE9posez vos documents ici plut\xF4t que par courriel \u2014 ${At.name} les voit imm\xE9diatement, et tout reste au m\xEAme endroit.`,`Drop your documents here instead of emailing them \u2014 ${At.name} sees them immediately, and everything stays in one place.`)}),!i&&(0,c.jsx)("div",{className:"rounded-2xl p-4 mb-3",style:{background:m.ochreSoft,border:`1px solid ${m.line}`,fontSize:12.5,color:m.ink},children:n("Aper\xE7u de d\xE9monstration \u2014 le d\xE9p\xF4t de documents s'active dans votre portail personnel.","Demo preview \u2014 document upload is active in your own portal.")}),(0,c.jsxs)("section",{className:"rounded-2xl p-4 mb-3",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:ci,title:n("Documents","Documents"),note:a.length?`${a.length}`:n("aucun","none")}),a.length===0&&(0,c.jsx)("div",{style:{fontSize:12.5,color:m.sub,padding:"6px 0 10px"},children:n("Preuve de pr\xE9qualification, relev\xE9s, pi\xE8ce d'identit\xE9, promesse d'achat\u2026","Pre-approval letter, statements, ID, promise to purchase\u2026")}),a.map(b=>(0,c.jsxs)("div",{className:"flex items-center gap-2 py-2",style:{borderBottom:`1px solid ${m.line}`},children:[(0,c.jsx)(ci,{size:15,style:{color:b.uploaded_by==="broker"?m.metro:m.spruce,flexShrink:0}}),(0,c.jsxs)("div",{style:{minWidth:0,flex:1},children:[(0,c.jsx)("a",{href:i?`/api/vitrine/vault/${i}/documents/${b.id}`:"#",style:{fontSize:13,fontWeight:700,color:m.ink,textDecoration:"none",display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:b.name}),(0,c.jsxs)("div",{style:{fontFamily:le.mono,fontSize:10.5,color:m.sub},children:[b.uploaded_by==="broker"?n(`de ${At.name}`,`from ${At.name}`):n("d\xE9pos\xE9 par vous","uploaded by you"),b.size_bytes?` \xB7 ${XR(b.size_bytes)}`:""," \xB7 ",String(b.created_at).slice(0,10)]})]}),b.uploaded_by==="client"&&(0,c.jsx)("button",{onClick:()=>C(b.id),disabled:d===`del${b.id}`,style:{background:"transparent",border:0,color:m.sub,padding:4},"aria-label":n("Retirer","Remove"),children:(0,c.jsx)(wa,{size:14})})]},b.id)),(0,c.jsx)("input",{ref:x,type:"file",accept:WR,style:{display:"none"},onChange:b=>v(b.target.files&&b.target.files[0])}),(0,c.jsx)("button",{onClick:()=>x.current&&x.current.click(),disabled:!i||d==="up",className:"rounded-xl px-3 py-2 mt-3 w-full",style:{background:i?m.ink:m.line,color:"#fff",border:0,fontWeight:700,fontSize:13},children:d==="up"?n("Envoi\u2026","Uploading\u2026"):n("\uFF0B Ajouter un document","\uFF0B Add a document")}),f&&(0,c.jsx)("div",{style:{fontSize:12,color:m.danger,marginTop:8},children:f}),(0,c.jsx)("div",{style:{fontSize:11,color:m.sub,marginTop:8},children:n("PDF, images, Word, Excel \u2014 8 Mo maximum par fichier.","PDF, images, Word, Excel \u2014 8 MB max per file.")})]}),(0,c.jsxs)("section",{className:"rounded-2xl p-4",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:Zr,title:n("Notes et questions","Notes and questions"),note:n(`avec ${At.name}`,`with ${At.name}`)}),(0,c.jsxs)("div",{className:"space-y-2 mb-3",children:[s.length===0&&(0,c.jsx)("div",{style:{fontSize:12.5,color:m.sub},children:n("\xC9crivez ici ce que vous voulez lui transmettre \u2014 elle r\xE9pond au m\xEAme endroit.","Write whatever you want to pass along \u2014 she answers in the same place.")}),s.map(b=>(0,c.jsxs)("div",{className:"rounded-xl px-3 py-2",style:{background:b.author==="client"?m.metroSoft:m.snow,border:`1px solid ${m.line}`,marginLeft:b.author==="client"?24:0,marginRight:b.author==="client"?0:24},children:[(0,c.jsxs)("div",{style:{fontFamily:le.mono,fontSize:10.5,color:m.sub,marginBottom:2},children:[b.author==="client"?n("Vous","You"):At.name," \xB7 ",String(b.created_at).slice(0,16).replace("T"," ")]}),(0,c.jsx)("div",{style:{fontSize:13,color:m.ink,whiteSpace:"pre-wrap"},children:b.body})]},b.id))]}),(0,c.jsx)("textarea",{value:l,onChange:b=>u(b.target.value),rows:3,placeholder:n("Votre message\u2026","Your message\u2026"),disabled:!i,style:{width:"100%",borderRadius:12,border:`1px solid ${m.line}`,padding:"10px 12px",fontSize:13,fontFamily:le.body,resize:"vertical"}}),(0,c.jsxs)("button",{onClick:M,disabled:!i||!l.trim()||d==="note",className:"rounded-xl px-3 py-2 mt-2 inline-flex items-center gap-1.5",style:{background:l.trim()&&i?m.metro:m.line,color:"#fff",border:0,fontWeight:700,fontSize:13},children:[(0,c.jsx)(pr,{size:13})," ",d==="note"?n("Envoi\u2026","Sending\u2026"):n("Envoyer","Send")]})]})]}):null}function YR(){let[t,e]=(0,re.useState)("fr"),[n,i]=(0,re.useState)("listings"),[a,r]=(0,re.useState)(Ji[0].id),[s,o]=(0,re.useState)([]),[l,u]=(0,re.useState)({}),[d,p]=(0,re.useState)({}),[f,g]=(0,re.useState)({}),[y,w]=(0,re.useState)({}),[x,h]=(0,re.useState)(!1),v=(z,H)=>t==="fr"?z:H;(0,re.useEffect)(()=>{(async()=>{let z=await Dt.get(Ft.events,null);(!z||!Array.isArray(z)||z.length===0)&&(z=LM(),await Dt.set(Ft.events,z)),o(z),u(await Dt.get(Ft.reactions,{})||{}),p(await Dt.get(Ft.chats,{})||{}),g(await Dt.get(Ft.dms,{})||{}),w(await Dt.get(Ft.notes,{})||{}),h(!0)})()},[]);let C=sR(Ji.find(z=>z.id===a)||Ji[0]);function M(z,H,B){let K=H||null;if(xr("co_buyer")&&typeof localStorage<"u"){let U=localStorage.getItem("vitrine2_who")||"";U&&(K={...K||{},who:U})}let Z={id:`${Lo.id}-${z}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,pid:Lo.id,pname:Lo.name,lid:B||a,type:z,ts:Date.now(),meta:K};o(U=>{let Q=[...U,Z];return Dt.set(Ft.events,Q),Q})}function b(z){r(z),i("prospect"),I();let H={id:`${Lo.id}-visit-${Date.now()}`,pid:Lo.id,pname:Lo.name,lid:z,type:"visit",ts:Date.now(),meta:null};o(B=>{let K=[...B,H];return Dt.set(Ft.events,K),K})}(0,re.useEffect)(()=>{if(!x||typeof window>"u"||!window.__VITRINE_OPEN__)return;let z=window.__VITRINE_OPEN__;delete window.__VITRINE_OPEN__,Ji.some(H=>String(H.id)===String(z))&&b(z)},[x]);function I(){if(typeof window>"u")return;let z=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body&&(document.body.scrollTop=0)};z(),window.requestAnimationFrame&&window.requestAnimationFrame(z)}(0,re.useEffect)(()=>{I()},[n,a]);let T=z=>u(H=>{let B={...H,[a]:z};return Dt.set(Ft.reactions,B),B}),S=z=>p(H=>{let B={...H,[a]:z};return Dt.set(Ft.chats,B),B}),L=z=>g(H=>{let B={...H,[a]:z};return Dt.set(Ft.dms,B),B}),R=z=>w(H=>{let B={...H,[a]:z};return Dt.set(Ft.notes,B),B});async function k(){let z=LM();await Dt.set(Ft.events,z),await Dt.del(Ft.reactions),await Dt.del(Ft.chats),await Dt.del(Ft.dms),o(z),u({}),p({}),g({}),i("broker")}if(!x)return(0,c.jsxs)("div",{style:{background:m.snow,minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:le.body},children:[(0,c.jsx)("style",{children:bM}),(0,c.jsxs)("div",{style:{textAlign:"center",color:m.sub},children:[(0,c.jsx)(Sa,{size:26,style:{color:m.metro,margin:"0 auto 8px"}}),(0,c.jsx)("div",{style:{fontFamily:le.mono,fontSize:12.5},children:"Vitrine\u2026"})]})]});let F=[["listings",So,v("Inscriptions","Listings")],["alerts",uu,v("Alertes","Alerts")],...xr("client_documents")?[["vault",ci,v("Dossier","My file")]]:[],["broker",Ou,v("Votre courti\xE8re","Your broker")]];return(0,c.jsxs)("div",{style:{background:m.snow,minHeight:"100vh",fontFamily:le.body,color:m.ink},children:[(0,c.jsx)("style",{children:bM}),(0,c.jsx)("header",{className:"sticky top-0 z-40",style:{background:"rgba(246,248,250,.86)",backdropFilter:"blur(10px)",borderBottom:`1px solid ${m.line}`},children:(0,c.jsxs)("div",{className:"max-w-6xl mx-auto px-3 sm:px-4",children:[(0,c.jsxs)("div",{className:"flex items-center justify-between py-2.5",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)("span",{style:{width:28,height:28,borderRadius:8,background:m.ink,color:"#fff",display:"grid",placeItems:"center",fontFamily:le.disp,fontWeight:800,fontSize:15},children:"V"}),(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:800,fontSize:17,color:m.ink,letterSpacing:"-.01em"},children:"Vitrine"})]}),(0,c.jsxs)("span",{className:"inline-flex gap-1.5",children:[xr("co_buyer")&&(0,c.jsx)(GR,{lang:t}),(0,c.jsxs)("button",{onClick:()=>e(z=>z==="fr"?"en":"fr"),className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5",style:{background:m.paper,border:`1px solid ${m.line}`,fontSize:12,fontWeight:700,color:m.ink},children:[(0,c.jsx)(Mu,{size:13})," ",t==="fr"?"FR":"EN"]})]})]}),(0,c.jsx)("div",{className:"flex gap-1 pb-2",children:F.map(([z,H,B])=>(0,c.jsxs)("button",{onClick:()=>i(z),className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg py-2",style:{background:n===z?m.ink:m.paper,color:n===z?"#fff":m.sub,border:`1px solid ${n===z?m.ink:m.line}`,fontWeight:700,fontSize:12.5},children:[(0,c.jsx)(H,{size:14})," ",B]},z))})]})}),(0,c.jsxs)("main",{children:[n==="listings"&&(0,c.jsx)(sP,{lang:t,onOpen:b,log:M}),n==="prospect"&&(0,c.jsx)(zR,{l:C,lang:t,log:M,reaction:l[a],setReaction:T,chat:d[a]||[],setChat:S,dm:f[a]||[],setDm:L,myNotes:y[a]||[],setNote:R,onCompare:()=>i("compare"),onBack:()=>i("listings")},a),n==="alerts"&&(0,c.jsx)(nP,{lang:t,log:M}),n==="vault"&&(0,c.jsx)($R,{lang:t,log:M}),n==="broker"&&(0,c.jsx)(HR,{lang:t}),n==="compare"&&(0,c.jsx)(FR,{lang:t,onEvent:M})]}),n!=="prospect"&&(0,c.jsx)("footer",{className:"max-w-2xl mx-auto px-4 py-6",style:{borderTop:`1px solid ${m.line}`,marginTop:8},children:(0,c.jsxs)("div",{className:"flex items-start gap-2",style:{fontSize:10.5,color:m.sub,lineHeight:1.55},children:[(0,c.jsx)(Dn,{size:13,style:{marginTop:1,flexShrink:0,color:m.sub}}),(0,c.jsx)("div",{children:v("D\xE9mo Vitrine \u2014 donn\xE9es d\u2019inscription fictives. Visites 3D reconstitu\xE9es et g\xE9n\xE9r\xE9es par IA (illustratives). Pr\xE9visions de prix illustratives, non une \xE9valuation agr\xE9\xE9e. Estimations de trajet non rout\xE9es en temps r\xE9el. Ameublement virtuel identifi\xE9 comme tel. L\u2019assistant IA ne donne pas de conseils juridiques, fiscaux ou sur le prix d\u2019offre. Conforme par conception : LCAP, Loi 25, Loi 96, conditions Centris, OACIQ.","Vitrine demo \u2014 fictional listing data. 3D tours are AI-generated reconstructions (illustrative). Price forecasts are illustrative, not a certified appraisal. Commute estimates are not real-time routed. Virtual staging is labelled as such. The AI assistant does not give legal, tax, or offer-price advice. Compliant by design: CASL, Law 25, Bill 96, Centris terms, OACIQ.")})]})})]})}function KR(t){let e=[];for(let n of(t||"").split(`
`)){let i=n.trim();if(!i)continue;let a=i.match(/^(.+?)\s+(\d+(?:[.,]\d+)?)\s*[x×]\s*(\d+(?:[.,]\d+)?)/i);if(!a)continue;let r=parseFloat(a[2].replace(",",".")),s=parseFloat(a[3].replace(",","."));r>.5&&s>.5&&r<30&&s<30&&e.push({name:a[1].trim(),w:r,d:s})}return e}function DM(t){let e=t.reduce((o,l)=>o+l.w*l.d,0),n=Math.max(Math.max(...t.map(o=>o.w))+.2,Math.sqrt(e)*1.35),i=[],a=0,r=0,s=0;return t.forEach((o,l)=>{a>0&&a+o.w>n&&(a=0,r+=s+.2,s=0);let u=(JR.find(([d])=>d.test(o.name))||[null,{col:"#E3E6EC",furn:[]}])[1];i.push({key:`r${l}`,fr:o.name,en:o.name,x:a,z:r,w:o.w,d:o.d,col:u.col,furn:u.furn||[],open:!!u.open}),a+=o.w+.2,s=Math.max(s,o.d)}),i}function QR({lang:t,defaultNo:e,onGenerate:n}){let i=(d,p)=>t==="fr"?d:p,[a,r]=(0,re.useState)(e),[s,o]=(0,re.useState)(jR),[l,u]=(0,re.useState)(!1);return(0,c.jsxs)("div",{className:"pb-2",children:[(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:700,fontSize:19,color:m.ink},children:i("Fiche Centris \u2192 plan 3D","Centris sheet \u2192 3D plan")}),(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,margin:"4px 0 10px",lineHeight:1.5},children:i("En production, le n\xBA Centris r\xE9cup\xE8re la fiche via le canal du courtier et les dimensions des pi\xE8ces sont extraites automatiquement (voir la spec d\u2019ingestion). Ici, collez le tableau des pi\xE8ces \u2014 nom + dimensions en m\xE8tres.","In production, the Centris n\xBA pulls the sheet through the broker\u2019s channel and room dimensions are extracted automatically (see the ingestion spec). Here, paste the room table \u2014 name + dimensions in metres.")}),(0,c.jsx)("label",{style:{fontSize:12,color:m.sub},children:i("N\xBA Centris","Centris n\xBA")}),(0,c.jsx)("input",{value:a,onChange:d=>r(d.target.value),className:"w-full rounded-lg px-2.5 py-2 mb-2",style:{border:`1.5px solid ${m.line}`,fontFamily:le.mono,fontSize:14,color:m.ink}}),(0,c.jsx)("label",{style:{fontSize:12,color:m.sub},children:i("Pi\xE8ces (une par ligne)","Rooms (one per line)")}),(0,c.jsx)("textarea",{value:s,onChange:d=>o(d.target.value),rows:7,className:"w-full rounded-lg px-2.5 py-2",style:{border:`1.5px solid ${m.line}`,fontFamily:le.mono,fontSize:12.5,color:m.ink,resize:"vertical"}}),l&&(0,c.jsx)("div",{style:{fontSize:12,color:m.danger,marginTop:4},children:i("Aucune pi\xE8ce reconnue \u2014 format attendu : \xAB Salon 4,9 x 3,7 \xBB.","No rooms recognized \u2014 expected format: \u201CLiving 4.9 x 3.7\u201D.")}),(0,c.jsxs)("button",{onClick:()=>{let d=KR(s);if(!d.length){u(!0);return}n((a||"").trim()||"\u2014",d)},className:"mt-3 w-full rounded-xl py-3 inline-flex items-center justify-center gap-2",style:{background:m.metro,color:"#fff",fontWeight:700,fontSize:14.5},children:[(0,c.jsx)(Ma,{size:16})," ",i("G\xE9n\xE9rer le plan 3D","Generate the 3D plan")]})]})}function tP({lang:t,log:e,theme:n,setTheme:i,refEl:a}){let r=(u,d)=>t==="fr"?u:d,[s,o]=(0,re.useState)({}),l=["sofa","table","coffee","rug"];return(0,c.jsxs)("section",{ref:a,className:"rounded-2xl p-4 sm:p-5",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:du,title:r("Designers & ambiances","Designers & moods"),note:r("r\xE9seau partenaire \u2014 d\xE9mo","partner network \u2014 demo")}),(0,c.jsx)("div",{style:{fontSize:12.5,color:m.sub,marginBottom:10},children:r("Pr\xE9visualisez le style d\u2019un\xB7e designer directement dans la visite 3D, puis r\xE9servez une consultation.","Preview a designer\u2019s style right in the 3D tour, then book a consultation.")}),(0,c.jsx)("div",{className:"space-y-2.5",children:eP.map(u=>{let d=yr[u.style],p=n===u.style;return(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:m.snow,border:`1px solid ${p?"#C9D9F2":m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,c.jsx)("span",{style:{width:38,height:38,borderRadius:12,background:d.dot,color:"#fff",display:"grid",placeItems:"center",fontFamily:le.disp,fontWeight:800,fontSize:14},children:u.name.split(" ").map(f=>f[0]).join("").slice(0,2)}),(0,c.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,c.jsx)("div",{style:{fontSize:14,fontWeight:800,color:m.ink},children:u.name}),(0,c.jsxs)("div",{style:{fontSize:11.5,color:m.sub},children:[t==="fr"?u.cityFr:u.cityEn," \xB7 ",u.rate]})]}),(0,c.jsx)(bn,{tone:"blue",children:t==="fr"?d.fr:d.en})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:(t==="fr"?u.tagsFr:u.tagsEn).map(f=>(0,c.jsx)(bn,{children:f},f))}),(0,c.jsxs)("div",{className:"flex gap-2 mt-2.5",children:[(0,c.jsxs)("button",{onClick:()=>{i(u.style),e("theme_change",{theme:u.style,via:u.id})},className:"flex-1 rounded-lg py-2 inline-flex items-center justify-center gap-1.5",style:{background:p?m.metro:m.paper,color:p?"#fff":m.metro,border:`1.5px solid ${p?m.metro:"#C9D9F2"}`,fontSize:12.5,fontWeight:700},children:[(0,c.jsx)(Mo,{size:13})," ",p?r("Ambiance appliqu\xE9e \u2713","Mood applied \u2713"):r("Pr\xE9visualiser en 3D","Preview in 3D")]}),(0,c.jsx)("button",{onClick:()=>{s[u.id]||(o(f=>({...f,[u.id]:!0})),e("designer_request",{designer:u.id}))},className:"flex-1 rounded-lg py-2",style:{background:s[u.id]?m.spruceSoft:m.ink,color:s[u.id]?m.spruce:"#fff",fontSize:12.5,fontWeight:700},children:s[u.id]?r("Demande envoy\xE9e \u2713","Request sent \u2713"):r("Consultation 30 min","30-min consult")})]})]},u.id)})}),(0,c.jsxs)("div",{className:"mt-3 rounded-xl p-3",style:{background:m.ochreSoft,border:"1px solid #EBD3A0"},children:[(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5 mb-1.5",style:{fontSize:12.5,fontWeight:800,color:m.ink},children:[(0,c.jsx)(wo,{size:14,style:{color:"#8A5A12"}})," ",r("Magasiner l\u2019ambiance","Shop the mood")," \u2014 ",t==="fr"?yr[n].fr:yr[n].en]}),(0,c.jsx)("div",{className:"space-y-1",children:l.map(u=>(0,c.jsxs)("button",{onClick:()=>e("shop_item",{item:u,via:"design_section"}),className:"w-full flex items-center justify-between rounded-lg px-2.5 py-1.5",style:{background:m.paper,border:`1px solid ${m.line}`,fontSize:12},children:[(0,c.jsx)("span",{style:{color:m.ink,fontWeight:600},children:t==="fr"?Ki[u].fr:Ki[u].en}),(0,c.jsxs)("span",{style:{fontFamily:le.mono,color:m.sub},children:[Ki[u].price," \xB7 ",Ki[u].stores[0]]})]},u))})]}),(0,c.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:m.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),r("Liens marchands = partenaires (commission possible), identifi\xE9s comme tels et distincts du courtage immobilier. Vos coordonn\xE9es ne sont partag\xE9es \xE0 un\xB7e designer qu\u2019apr\xE8s votre confirmation (Loi 25).","Merchant links are partner links (commission possible), labelled as such and separate from the brokerage. Your contact info is shared with a designer only after you confirm (Law 25).")]})]})}function nP({lang:t,log:e}){let n=(L,R)=>t==="fr"?L:R,[i,a]=(0,re.useState)(Lh),[r,s]=(0,re.useState)(null),[o,l]=(0,re.useState)(!1),[u,d]=(0,re.useState)(null),[p,f]=(0,re.useState)(!1);(0,re.useEffect)(()=>{(async()=>{let L=await Dt.get(Ft.prefs,null);L&&L.p&&(a(FM(L.p)),s(L.status||null)),l(!0)})()},[]),(0,re.useEffect)(()=>{(async()=>{try{let L=window.__VITRINE_TOKEN__||"";if(!L)return;let R=await fetch(`/api/vitrine/criteria-schema/${L}?lang=${t}`);R.ok&&d(await R.json())}catch{}})()},[t]);let g=L=>a(R=>({...R,...L})),y=(L,R,k)=>g({[L]:{...i[L]||{},[R]:k}}),w=(L,R)=>g({[L]:(i[L]||[]).includes(R)?i[L].filter(k=>k!==R):[...i[L]||[],R]}),x=(L,R)=>g({[L]:R}),h=L=>(u&&u.fields.find(R=>R.key===L)||{}).options||[],v=L=>(u&&u.fields.find(R=>R.key===L)||{}).label||L,C=({k:L,all:R})=>(0,c.jsxs)("span",{className:"inline-flex gap-1",style:{marginLeft:"auto"},children:[(0,c.jsxs)("button",{onClick:()=>x(L,[...R]),disabled:i[L].length===R.length,style:{background:"transparent",border:0,fontSize:11,fontWeight:700,color:i[L].length===R.length?m.line:m.metro},children:["\u2713 ",n("Tout","All")]}),(0,c.jsxs)("button",{onClick:()=>x(L,[]),disabled:i[L].length===0,style:{background:"transparent",border:0,fontSize:11,fontWeight:700,color:i[L].length===0?m.line:m.sub},children:["\u2715 ",n("Aucun","None")]})]}),M=Ji.filter(L=>{let R=(!i.price.min||L.price>=i.price.min)&&(!i.price.max||L.price<=i.price.max),k=L.beds>=i.beds,F=L.baths>=i.baths,z=!i.pool.length||/piscine/i.test(L.inclFr),H=!i.fireplace.length||/foyer|poêle/i.test(L.inclFr),B=i.areas.length===0||i.areas.some(K=>L.area.includes(K));return R&&k&&F&&z&&H&&B}).length;async function b(){s("vitrine"),await Dt.set(Ft.prefs,{p:i,status:"vitrine"}),e("criteria_update",{summary:`${Mh(i.price.min,t)}\u2013${Mh(i.price.max,t)} \xB7 ${i.beds}+ ch \xB7 ${i.areas.length} secteurs`}),setTimeout(async()=>{s("sent"),await Dt.set(Ft.prefs,{p:i,status:"sent"})},600),setTimeout(async()=>{s("synced"),await Dt.set(Ft.prefs,{p:i,status:"synced"})},3200)}let I=({on:L,onClick:R,children:k})=>(0,c.jsx)("button",{onClick:R,className:"rounded-full px-3 py-1.5",style:{background:L?m.metroSoft:m.paper,color:L?m.metro:m.sub,border:`1.5px solid ${L?"#C9D9F2":m.line}`,fontSize:12.5,fontWeight:700},children:k}),T=[{fr:"Appliqu\xE9 \xE0 vos alertes Vitrine",en:"Applied to your Vitrine alerts",sfr:"imm\xE9diat",sen:"instant"},{fr:`Transmis \xE0 ${At.name}`,en:`Sent to ${At.name}`,sfr:"mise \xE0 jour de la recherche Matrix \u2014 1 clic de son c\xF4t\xE9",sen:"Matrix search update \u2014 1 click on her side"},{fr:"Confirm\xE9 c\xF4t\xE9 Centris par la courti\xE8re",en:"Confirmed on Centris by the broker",sfr:"simul\xE9 pour la d\xE9mo",sen:"simulated for the demo"}],S={vitrine:0,sent:1,synced:2}[r]??-1;return o?(0,c.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,c.jsx)(Io,{children:n("Crit\xE8res de recherche","Search criteria")}),(0,c.jsx)("h1",{style:{fontFamily:le.disp,fontWeight:800,fontSize:26,color:m.ink,margin:"4px 0 4px"},children:n("Mes alertes","My alerts")}),(0,c.jsx)("div",{style:{fontSize:12.5,color:m.sub,marginBottom:14},children:n("Ajustez ici \u2014 vos prochains microsites suivront imm\xE9diatement. Julie met la recherche Centris \xE0 niveau de son c\xF4t\xE9.","Adjust here \u2014 your next microsites follow instantly. Julie brings the Centris search up to date on her side.")}),(0,c.jsxs)("div",{className:"space-y-3",children:[(0,c.jsxs)("section",{className:"rounded-2xl p-4",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:Yr,title:n("Prix","Price"),note:`${ct(i.price.min,t)} \u2013 ${ct(i.price.max,t)}`}),(0,c.jsx)(es,{label:n("Minimum","Minimum"),val:i.price.min,set:L=>y("price","min",Math.min(L,i.price.max-25e3)),min:1e5,max:875e3,step:25e3,suffix:" $",field:"pmin"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)(es,{label:n("Maximum","Maximum"),val:i.price.max,set:L=>y("price","max",Math.max(L,i.price.min+25e3)),min:125e3,max:9e5,step:25e3,suffix:" $",field:"pmax"})})]}),(0,c.jsxs)("section",{className:"rounded-2xl p-4",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:di,title:n("La propri\xE9t\xE9","The property"),note:n("m\xEAmes champs que l\u2019alerte Matrix","same fields as the Matrix alert")}),(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,marginBottom:4},children:n("Chambres (min)","Bedrooms (min)")}),(0,c.jsx)("div",{className:"flex gap-1.5 mb-3",children:[1,2,3,4].map(L=>(0,c.jsxs)(I,{on:i.beds===L,onClick:()=>g({beds:L}),children:[L,"+"]},L))}),(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,marginBottom:4},children:n("Salles de bain (min)","Bathrooms (min)")}),(0,c.jsx)("div",{className:"flex gap-1.5 mb-3",children:[1,1.5,2].map(L=>(0,c.jsxs)(I,{on:i.baths===L,onClick:()=>g({baths:L}),children:[L,"+"]},L))}),(0,c.jsx)("div",{className:"mb-3",children:(0,c.jsx)(es,{label:n("Terrain (min, pi\xB2)","Lot area (min, sq ft)"),val:i.lot.min,set:L=>y("lot","min",L),min:0,max:3e4,step:2500,suffix:" pi\xB2",field:"lot"})}),(0,c.jsx)("div",{className:"mb-3",children:(0,c.jsx)(es,{label:n("Superficie habitable (min, pi\xB2)","Living area (min, sq ft)"),val:i.living.min,set:L=>y("living","min",L),min:0,max:4e3,step:250,suffix:" pi\xB2",field:"living"})}),(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,marginBottom:4},children:n("Ann\xE9e de construction (\xE0 partir de)","Year built (from)")}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-3",children:[0,1960,1980,2e3,2015].map(L=>(0,c.jsx)(I,{on:(i.year.min||0)===L,onClick:()=>y("year","min",L),children:L===0?n("Toutes","Any"):`${L}+`},L))}),h("property_types").length>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"flex items-center",style:{fontSize:12,color:m.sub,marginBottom:4},children:[v("property_types"),(0,c.jsx)(C,{k:"property_types",all:h("property_types").map(L=>L.value)})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5",children:h("property_types").map(L=>(0,c.jsx)(I,{on:i.property_types.includes(L.value),onClick:()=>w("property_types",L.value),children:L.label},L.value))})]})]}),u&&(0,c.jsxs)("section",{className:"rounded-2xl p-4",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)("button",{onClick:()=>f(L=>!L),className:"w-full text-left",children:(0,c.jsx)(bt,{icon:Qn,title:n("Plus de crit\xE8res","More criteria"),note:p?n("masquer","hide"):n("piscine, vue, sous-sol, commodit\xE9s\u2026","pool, view, basement, amenities\u2026")})}),p&&["pool","water","view","basement","fireplace","amenities"].map(L=>{let R=h(L);return R.length?(0,c.jsxs)("div",{className:"mt-3",children:[(0,c.jsxs)("div",{className:"flex items-center",style:{fontSize:12,color:m.sub,marginBottom:4},children:[v(L),(0,c.jsx)(C,{k:L,all:R.map(k=>k.value)})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5",children:R.map(k=>(0,c.jsx)(I,{on:(i[L]||[]).includes(k.value),onClick:()=>w(L,k.value),children:k.label},k.value))})]},L):null})]}),(0,c.jsxs)("section",{className:"rounded-2xl p-4",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)(bt,{icon:_o,title:n("Secteurs","Areas"),note:`${i.areas.length} ${n("choisis","selected")}`}),(0,c.jsx)(C,{k:"areas",all:EM})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5",children:EM.map(L=>(0,c.jsx)(I,{on:i.areas.includes(L),onClick:()=>w("areas",L),children:L},L))})]}),(0,c.jsxs)("div",{className:"rounded-2xl p-4",style:{background:m.ink},children:[(0,c.jsx)("div",{style:{color:"#9FB2D6",fontFamily:le.mono,fontSize:10.5,textTransform:"uppercase",letterSpacing:".12em"},children:n("Aper\xE7u imm\xE9diat","Instant preview")}),(0,c.jsx)("div",{style:{color:"#fff",fontSize:14,marginTop:2},children:n(`${M} des ${Ji.length} inscriptions d\xE9mo correspondent \xE0 ces crit\xE8res.`,`${M} of ${Ji.length} demo listings match these criteria.`)}),(0,c.jsx)("button",{onClick:b,className:"mt-3 w-full rounded-xl py-3",style:{background:m.ochre,color:m.ink,fontWeight:800,fontSize:14.5},children:r?n("Mettre \xE0 jour mes crit\xE8res","Update my criteria"):n("Enregistrer mes crit\xE8res","Save my criteria")})]}),r&&(0,c.jsxs)("section",{className:"rounded-2xl p-4 fade-up",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)(bt,{icon:Dn,title:n("Synchronisation","Sync"),note:n("en direct","live")}),(0,c.jsx)("div",{className:"space-y-2.5",children:T.map((L,R)=>{let k=S>=R;return(0,c.jsxs)("div",{className:"flex items-start gap-2.5",children:[(0,c.jsx)("span",{style:{width:22,height:22,borderRadius:999,display:"grid",placeItems:"center",background:k?m.spruceSoft:m.snow,color:k?m.spruce:m.sub,border:`1px solid ${k?"#C4E0D2":m.line}`,flexShrink:0},children:k?(0,c.jsx)(mo,{size:13}):(0,c.jsx)(pu,{size:12})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:13,fontWeight:700,color:k?m.ink:m.sub},children:t==="fr"?L.fr:L.en}),(0,c.jsx)("div",{style:{fontSize:11,color:m.sub},children:t==="fr"?L.sfr:L.sen})]})]},R)})})]}),(0,c.jsx)("div",{className:"rounded-xl p-3",style:{background:m.metroSoft,border:"1px solid #C9D9F2",fontSize:11.5,color:m.ink,lineHeight:1.55},children:n("Pourquoi deux \xE9tapes ? D\xE8s l\u2019enregistrement, vos crit\xE8res sont appliqu\xE9s \xE0 votre Vitrine : les inscriptions correspondantes du flux licenci\xE9 s\u2019ajoutent tout de suite, sans attendre. En parall\xE8le, Centris/Matrix n\u2019offre pas d\u2019API publique d\u2019\xE9criture des recherches sauvegard\xE9es \u2014 seul le compte Matrix de la courti\xE8re peut modifier la recherche automatique, d\u2019o\xF9 la t\xE2che \xAB 1 clic \xBB cr\xE9\xE9e pour Julie. Chaque changement de crit\xE8res est aussi un signal d\u2019intention visible \xE0 son tableau de bord.","Why two steps? The moment you save, your criteria are applied to your Vitrine: matching listings from the licensed feed are added right away, no waiting. Separately, Centris/Matrix has no public write API for saved searches \u2014 only the broker\u2019s Matrix account can edit the auto-search, hence the one-click task created for Julie. Each criteria change is also an intent signal on her dashboard.")})]})]}):null}function RM(t,e){if(Array.isArray(e)&&e.length===2)return e;let n=0,i=String(t);for(let a=0;a<i.length;a++)n=n*31+i.charCodeAt(a)>>>0;return[16+n%68,16+Math.floor(n/68)%64]}function rP(t){let e=Ji.map(i=>{let a=iP[i.id]||{},r=i.baths%1?1:0;return{id:i.id,addr:i.addr,area:i.area,typeStr:[t==="fr"?i.typeFr:i.typeEn,i.year||null].filter(Boolean).join(" \u2014 "),price:i.price,beds:i.beds,bathsStr:i.baths?`${Math.floor(i.baths)}+${r}`:"",heatStr:t==="fr"?gr[i.heating].fr:gr[i.heating].en,baths:i.baths,year:i.year,sqft:i.sqft,rooms:a.rooms,lot:a.lot,garage:/garage/i.test(i.parkFr),fire:!!a.fire,pool:/piscine/i.test(i.inclFr),badge:a.badge,dateSent:a.dateSent,g:i.accent,xy:RM(i.id,a.xy),full:!0,condo:i.condoFees>0,video:TM[i.id]||null,centrisUrl:i.centrisUrl||"",photos:xr("listing_photos")&&i.photos||[],stub:!!i.stub,live:!!i.live,inclusions:i.inclusions||"",exclusions:i.exclusions||"",addendum:i.addendum||"",agency:i.agency||"",liveDateSent:i.live?i.dateSent||"":a.dateSent||"",styleStr:i.styleStr||"",propertyUse:i.propertyUse||"",heatingStr2:i.heatingStr||"",waterAccess:i.waterAccess||"",fireplaceStr:i.fireplaceStr||"",remarks:i.remarks||""}}),n=aP.map(i=>({...i,xy:RM(i.id,i.xy),typeStr:t==="fr"?i.typeFr:i.typeEn,heatStr:t==="fr"?i.heatFr:i.heatEn,full:!1,condo:!1,video:TM[i.id]||null}));return[...n.slice(0,1),...e,...n.slice(1)]}function sP({lang:t,onOpen:e,log:n}){let i=(E,q)=>t==="fr"?E:q,[a,r]=(0,re.useState)("list"),[s,o]=(0,re.useState)(null),l=(0,re.useMemo)(()=>rP(t),[t]),u=(0,re.useMemo)(()=>[...new Set(l.map(E=>E.area))].filter(Boolean),[l]),[d,p]=(0,re.useState)([]),f=E=>p(q=>q.includes(E)?q.filter(Le=>Le!==E):[...q,E]),[g,y]=(0,re.useState)("date"),[w,x]=(0,re.useState)("all"),[h,v]=(0,re.useState)(""),C=E=>(E||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),M={price:{min:0,max:0},beds:0,baths:0,year:{min:0},living:{min:0},lot:{min:0},must:[]},[b,I]=(0,re.useState)(M),[T,S]=(0,re.useState)(!1),[L,R]=(0,re.useState)(!1),k=E=>{I(q=>({...q,...E})),R(!1)},F=(E,q,Le)=>k({[E]:{...b[E]||{},[q]:Le}}),z=E=>k({must:b.must.includes(E)?b.must.filter(q=>q!==E):[...b.must,E]}),H=[["pool",i("Piscine","Pool"),E=>E.pool||/piscine|pool/i.test(E.inclusions)],["fire",i("Foyer","Fireplace"),E=>E.fire||!!C(E.fireplaceStr)||/foyer|poêle|fireplace/i.test(E.inclusions)],["water",i("Bord de l'eau","Waterfront"),E=>!!C(E.waterAccess)||/bord de l|riverain|waterfront|lac |rivi/i.test(`${E.remarks} ${E.addendum}`)],["garage",i("Garage","Garage"),E=>E.garage||/garage/i.test(`${E.inclusions} ${E.remarks}`)]];async function B(){let E=await Dt.get(Ft.prefs,null),q=E&&E.p?FM(E.p):Lh,Le=[];(q.pool||[]).length&&Le.push("pool"),(q.fireplace||[]).length&&Le.push("fire"),(q.water||[]).length&&Le.push("water"),(q.amenities||[]).some(Oe=>/garage/i.test(Oe))&&Le.push("garage"),I({price:{min:q.price.min||0,max:q.price.max||0},beds:q.beds||0,baths:q.baths||0,year:{min:q.year&&q.year.min||0},living:{min:q.living&&q.living.min||0},lot:{min:q.lot&&q.lot.min||0},must:Le}),(q.areas||[]).length&&p(u.filter(Oe=>!q.areas.some(Fe=>Oe.includes(Fe)||Fe.includes(Oe)))),R(!0),S(!0),n("filter_from_criteria",{musts:Le.length})}let K=E=>b.price.min&&E.price&&E.price<b.price.min||b.price.max&&E.price&&E.price>b.price.max||b.beds&&E.beds&&E.beds<b.beds||b.baths&&E.baths&&E.baths<b.baths||b.year.min&&E.year&&E.year<b.year.min||b.living.min&&E.sqft&&E.sqft<b.living.min||b.lot.min&&E.lot&&E.lot<b.lot.min?!1:H.every(([q,,Le])=>!b.must.includes(q)||Le(E)),Z=!!(b.price.min||b.price.max||b.beds||b.baths||b.year.min||b.living.min||b.lot.min||b.must.length),U=E=>{let q=C(`${E.styleStr} ${E.typeStr} ${E.propertyUse}`);return/commercial|industri|business/.test(q)?"commercial":/plex|revenu|revenue|logement/.test(q)?"plex":/condo|copropri|apartment|appartement|divise/.test(q)?"condo":/terrain|land|lot vacant/.test(q)?"land":E.condo?"condo":"single"},Q=[["all",i("Tous","All")],["single",i("Unifamiliale","Single-Family")],["condo",i("Copropri\xE9t\xE9","Condo")],["plex",i("Plex / Revenus","Plex / Revenue")],["commercial",i("Commercial","Commercial")],["land",i("Terrain","Land/Lot")]],de=[["date",i("Re\xE7ue (r\xE9cent)","Date Sent (new)")],["price_asc",i("Prix \u2191","Price \u2191")],["price_desc",i("Prix \u2193","Price \u2193")],["muni",i("Municipalit\xE9","Municipality")]],ue=C(h.trim()),Me=l.filter(E=>!d.includes(E.area)).filter(E=>w==="all"||U(E)===w).filter(K).filter(E=>!ue||C([E.addr,E.area,E.inclusions,E.exclusions,E.addendum,E.remarks,E.styleStr,E.agency].join(" ")).includes(ue)).sort((E,q)=>g==="price_asc"?(E.price||9e9)-(q.price||9e9):g==="price_desc"?(q.price||0)-(E.price||0):g==="muni"?(E.area||"").localeCompare(q.area||""):(q.liveDateSent||"").localeCompare(E.liveDateSent||"")),Pe=Me.find(E=>E.id===s)||null,Ze=({label:E,value:q})=>(0,c.jsxs)("div",{className:"flex items-start justify-between gap-3",style:{fontSize:12.5,padding:"3px 0"},children:[(0,c.jsx)("span",{style:{fontWeight:700,color:m.ink},children:E}),(0,c.jsx)("span",{className:"text-right",style:{color:m.sub},children:q})]}),We=E=>E?i("Oui","Yes"):i("Non","No"),ie=({r:E,small:q})=>E.full?(0,c.jsxs)("div",{className:"flex gap-2",children:[(0,c.jsxs)("button",{onClick:()=>e(E.id),className:`flex-1 rounded-xl ${q?"py-2":"py-2.5"} inline-flex items-center justify-center gap-1.5`,style:{background:m.metro,color:"#fff",fontWeight:800,fontSize:q?12.5:13.5},children:[i("Ouvrir le microsite","Open the microsite")," ",(0,c.jsx)(go,{size:14})]}),E.centrisUrl&&(0,c.jsx)("a",{href:E.centrisUrl,target:"_blank",rel:"noreferrer",onClick:()=>n&&n("centris_click",{url:E.centrisUrl},E.id),className:`rounded-xl px-3 ${q?"py-2":"py-2.5"} inline-flex items-center justify-center`,style:{background:m.paper,border:`1.5px solid ${m.line}`,color:m.metro,fontWeight:800,fontSize:q?12.5:13.5,whiteSpace:"nowrap"},children:"Centris \u2197"})]}):(0,c.jsx)("div",{className:`w-full rounded-xl ${q?"py-2":"py-2.5"} text-center`,style:{background:m.snow,border:`1.5px dashed ${m.line}`,color:m.sub,fontWeight:700,fontSize:q?11.5:12.5},children:i("Fiche compl\xE8te \u2014 bient\xF4t \xB7 tir\xE9e de votre alerte Matrix","Full sheet \u2014 soon \xB7 from your Matrix alert")});return(0,c.jsxs)("div",{className:"max-w-6xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,c.jsxs)("div",{className:"flex items-end justify-between gap-3",children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)(Io,{children:[i("Vos alertes","Your alerts")," \xB7 ",At.name]}),(0,c.jsx)("h1",{style:{fontFamily:le.disp,fontWeight:800,fontSize:26,color:m.ink,margin:"4px 0 2px"},children:i("Inscriptions","Listings")}),(0,c.jsxs)("div",{style:{fontSize:12,color:m.sub},children:[Me.length,d.length?` / ${l.length}`:""," ",i("inscriptions \xB7 m\xEAmes donn\xE9es que l\u2019alerte Matrix, meilleure surface","listings \xB7 same data as the Matrix alert, better surface")]})]}),(0,c.jsx)("div",{className:"flex gap-1 p-1 rounded-xl shrink-0",style:{background:m.paper,border:`1px solid ${m.line}`},children:[["list",So,i("Liste","List")],["map",Cu,i("Carte","Map")]].map(([E,q,Le])=>(0,c.jsxs)("button",{onClick:()=>r(E),className:"inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5",style:{background:a===E?m.ink:"transparent",color:a===E?"#fff":m.sub,fontWeight:700,fontSize:12},children:[(0,c.jsx)(q,{size:13})," ",Le]},E))})]}),(0,c.jsxs)("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:[(0,c.jsx)("span",{style:{fontFamily:le.mono,fontSize:10,letterSpacing:".1em",textTransform:"uppercase",color:m.sub,marginRight:2},children:i("Secteurs","Areas")}),u.map(E=>{let q=!d.includes(E);return(0,c.jsx)("button",{onClick:()=>f(E),"aria-pressed":q,className:"rounded-full px-3 py-1.5",style:{background:q?m.metroSoft:m.paper,color:q?m.metro:m.sub,border:`1.5px solid ${q?"#C9D9F2":m.line}`,fontSize:12,fontWeight:700},children:E},E)}),(0,c.jsxs)("span",{className:"inline-flex gap-1",style:{marginLeft:4},children:[(0,c.jsxs)("button",{onClick:()=>p([]),disabled:!d.length,className:"rounded-full px-2.5 py-1.5",style:{background:m.paper,border:`1px solid ${m.line}`,fontSize:11.5,fontWeight:700,color:d.length?m.metro:m.line},children:["\u2713 ",i("Tout s\xE9lectionner","Select all")]}),(0,c.jsxs)("button",{onClick:()=>p(u),disabled:d.length===u.length,className:"rounded-full px-2.5 py-1.5",style:{background:m.paper,border:`1px solid ${m.line}`,fontSize:11.5,fontWeight:700,color:d.length===u.length?m.line:m.sub},children:["\u2715 ",i("Tout d\xE9s\xE9lectionner","Deselect all")]})]})]}),(0,c.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-1.5",children:[(0,c.jsx)("span",{style:{fontFamily:le.mono,fontSize:10.5,color:m.sub,textTransform:"uppercase",letterSpacing:".1em"},children:i("Cat\xE9gorie","Category")}),Q.map(([E,q])=>(0,c.jsx)("button",{onClick:()=>x(E),className:"rounded-full px-3 py-1.5",style:{background:w===E?m.metroSoft:m.paper,color:w===E?m.metro:m.sub,border:`1.5px solid ${w===E?"#C9D9F2":m.line}`,fontSize:12,fontWeight:700},children:q},E))]}),(0,c.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-1.5",children:[(0,c.jsx)("span",{style:{fontFamily:le.mono,fontSize:10.5,color:m.sub,textTransform:"uppercase",letterSpacing:".1em"},children:i("Trier","Sort")}),de.map(([E,q])=>(0,c.jsx)("button",{onClick:()=>y(E),className:"rounded-full px-3 py-1.5",style:{background:g===E?m.metroSoft:m.paper,color:g===E?m.metro:m.sub,border:`1.5px solid ${g===E?"#C9D9F2":m.line}`,fontSize:12,fontWeight:700},children:q},E)),(0,c.jsx)("input",{value:h,onChange:E=>v(E.target.value),placeholder:i("Filtrer : piscine, foyer, cul-de-sac\u2026","Filter: pool, fireplace, cul-de-sac\u2026"),className:"rounded-full px-3 py-1.5",style:{border:`1.5px solid ${m.line}`,background:m.paper,fontSize:12.5,minWidth:210,color:m.ink}}),h&&(0,c.jsx)("button",{onClick:()=>v(""),style:{background:"transparent",border:0,fontSize:12,fontWeight:700,color:m.sub},children:"\u2715"})]}),(0,c.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-1.5",children:[(0,c.jsxs)("button",{onClick:()=>S(E=>!E),className:"rounded-full px-3 py-1.5 inline-flex items-center gap-1.5",style:{background:Z?m.metroSoft:m.paper,color:Z?m.metro:m.sub,border:`1.5px solid ${Z?"#C9D9F2":m.line}`,fontSize:12,fontWeight:700},children:[(0,c.jsx)(Qn,{size:12})," ",i("Crit\xE8res","Criteria"),Z?" \u25CF":""]}),(0,c.jsx)("button",{onClick:B,className:"rounded-full px-3 py-1.5",style:{background:L?m.metro:m.paper,color:L?"#fff":m.metro,border:`1.5px solid ${L?m.metro:"#C9D9F2"}`,fontSize:12,fontWeight:700},children:i("\u21A7 Utiliser mes crit\xE8res d'alerte","\u21A7 Use my alert criteria")}),Z&&(0,c.jsxs)("button",{onClick:()=>{I(M),R(!1),p([])},style:{background:"transparent",border:0,fontSize:12,fontWeight:700,color:m.sub},children:["\u2715 ",i("R\xE9initialiser","Reset")]})]}),T&&(0,c.jsxs)("section",{className:"mt-2 rounded-2xl p-4",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsx)("div",{style:{fontSize:11.5,color:m.sub,marginBottom:10},children:i("M\xEAmes champs que vos alertes. Une inscription dont le fait est inconnu reste affich\xE9e \u2014 un filtre ne cache jamais ce qu'on ignore.","Same fields as your alerts. A listing whose fact is unknown stays visible \u2014 a filter never hides what we don't know.")}),(0,c.jsxs)("div",{className:"grid gap-3 sm:grid-cols-2",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,marginBottom:4},children:i("Prix","Price")}),(0,c.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,c.jsx)("input",{type:"number",step:"25000",value:b.price.min||"",onChange:E=>F("price","min",+E.target.value||0),placeholder:i("min","min"),style:{width:"48%",borderRadius:10,border:`1px solid ${m.line}`,padding:"6px 8px",fontSize:12.5}}),(0,c.jsx)("span",{style:{color:m.sub},children:"\u2013"}),(0,c.jsx)("input",{type:"number",step:"25000",value:b.price.max||"",onChange:E=>F("price","max",+E.target.value||0),placeholder:i("max","max"),style:{width:"48%",borderRadius:10,border:`1px solid ${m.line}`,padding:"6px 8px",fontSize:12.5}})]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,marginBottom:4},children:i("Ann\xE9e de construction (\xE0 partir de)","Year built (from)")}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5",children:[0,1960,1980,2e3,2015].map(E=>(0,c.jsx)("button",{onClick:()=>F("year","min",E),className:"rounded-full px-2.5 py-1",style:{background:(b.year.min||0)===E?m.metroSoft:m.paper,color:(b.year.min||0)===E?m.metro:m.sub,border:`1.5px solid ${(b.year.min||0)===E?"#C9D9F2":m.line}`,fontSize:12,fontWeight:700},children:E===0?i("Toutes","Any"):`${E}+`},E))})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,marginBottom:4},children:i("Chambres (min)","Bedrooms (min)")}),(0,c.jsx)("div",{className:"flex gap-1.5",children:[0,1,2,3,4].map(E=>(0,c.jsx)("button",{onClick:()=>k({beds:E}),className:"rounded-full px-2.5 py-1",style:{background:b.beds===E?m.metroSoft:m.paper,color:b.beds===E?m.metro:m.sub,border:`1.5px solid ${b.beds===E?"#C9D9F2":m.line}`,fontSize:12,fontWeight:700},children:E===0?i("Toutes","Any"):`${E}+`},E))})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,marginBottom:4},children:i("Salles de bain (min)","Bathrooms (min)")}),(0,c.jsx)("div",{className:"flex gap-1.5",children:[0,1,2,3].map(E=>(0,c.jsx)("button",{onClick:()=>k({baths:E}),className:"rounded-full px-2.5 py-1",style:{background:b.baths===E?m.metroSoft:m.paper,color:b.baths===E?m.metro:m.sub,border:`1.5px solid ${b.baths===E?"#C9D9F2":m.line}`,fontSize:12,fontWeight:700},children:E===0?i("Toutes","Any"):`${E}+`},E))})]})]}),(0,c.jsxs)("div",{className:"mt-3",children:[(0,c.jsx)("div",{style:{fontSize:12,color:m.sub,marginBottom:4},children:i("Doit avoir","Must have")}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5",children:H.map(([E,q])=>(0,c.jsx)("button",{onClick:()=>z(E),className:"rounded-full px-3 py-1.5",style:{background:b.must.includes(E)?m.metroSoft:m.paper,color:b.must.includes(E)?m.metro:m.sub,border:`1.5px solid ${b.must.includes(E)?"#C9D9F2":m.line}`,fontSize:12,fontWeight:700},children:q},E))})]}),(0,c.jsxs)("div",{className:"mt-3",style:{fontFamily:le.mono,fontSize:11,color:m.sub},children:[Me.length," / ",l.length," ",i("inscriptions","listings")]})]}),Me.length===0&&(0,c.jsx)("div",{className:"mt-6 rounded-2xl p-6 text-center",style:{background:m.paper,border:`1.5px dashed ${m.line}`,color:m.sub,fontSize:13},children:i("Aucune inscription ne passe ces filtres \u2014 \xE9largissez la cat\xE9gorie, le texte ou les secteurs.","No listing matches these filters \u2014 widen the category, text or areas.")}),a==="list"&&(0,c.jsx)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 items-start",children:Me.map(E=>(0,c.jsxs)("div",{className:"rounded-2xl overflow-hidden fade-up",style:{background:m.paper,border:`1px solid ${m.line}`},children:[E.photos&&E.photos.length?(0,c.jsxs)("div",{className:"relative",style:{background:"#0B0F17"},children:[(0,c.jsx)("img",{src:E.photos[0],alt:E.addr,style:{width:"100%",display:"block",height:170,objectFit:"cover"}}),E.photos.length>1&&(0,c.jsxs)("span",{className:"absolute",style:{bottom:10,left:12,background:"rgba(17,27,46,.72)",color:"#fff",borderRadius:999,padding:"3px 9px",fontSize:11,fontWeight:700},children:["\u{1F4F7} ",E.photos.length]}),E.badge&&(0,c.jsx)("span",{className:"absolute",style:{top:12,right:12,background:Fn[E.badge].bg,color:Fn[E.badge].fg,borderRadius:999,padding:"4px 10px",fontSize:11,fontWeight:800},children:t==="fr"?Fn[E.badge].fr:Fn[E.badge].en}),(0,c.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 px-3.5 py-2",style:{background:"linear-gradient(transparent, rgba(17,27,46,.72))"},children:[(0,c.jsx)("div",{style:{color:"#fff",fontFamily:le.disp,fontWeight:800,fontSize:17,lineHeight:1.1},children:E.addr}),(0,c.jsx)("div",{style:{color:"rgba(255,255,255,.85)",fontSize:11.5},children:E.area})]})]}):E.video?(0,c.jsxs)("div",{className:"relative",style:{background:"#0B0F17"},children:[(0,c.jsx)("video",{src:E.video,controls:!0,playsInline:!0,muted:!0,loop:!0,preload:"metadata",style:{width:"100%",display:"block",maxHeight:260}}),(0,c.jsx)("div",{className:"absolute top-2 left-2",style:{pointerEvents:"none"},children:(0,c.jsx)(_h,{text:t==="fr"?"Vid\xE9o g\xE9n\xE9r\xE9e par IA \u2014 indicative":"AI-generated video \u2014 indicative"})}),E.badge&&(0,c.jsx)("span",{className:"absolute",style:{top:12,right:12,background:Fn[E.badge].bg,color:Fn[E.badge].fg,borderRadius:999,padding:"4px 10px",fontSize:11,fontWeight:800,pointerEvents:"none"},children:t==="fr"?Fn[E.badge].fr:Fn[E.badge].en})]}):(0,c.jsxs)("div",{className:"relative",style:{height:130,background:`linear-gradient(140deg, ${E.g[0]}, ${E.g[1]})`},children:[E.condo?(0,c.jsx)(Sa,{size:34,style:{color:"rgba(255,255,255,.9)",position:"absolute",top:14,left:14}}):(0,c.jsx)(di,{size:34,style:{color:"rgba(255,255,255,.9)",position:"absolute",top:14,left:14}}),E.badge&&(0,c.jsx)("span",{className:"absolute",style:{top:12,right:12,background:Fn[E.badge].bg,color:Fn[E.badge].fg,borderRadius:999,padding:"4px 10px",fontSize:11,fontWeight:800},children:t==="fr"?Fn[E.badge].fr:Fn[E.badge].en}),(0,c.jsx)(yo,{size:18,style:{color:"rgba(255,255,255,.85)",position:"absolute",bottom:12,right:14}}),(0,c.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 px-3.5 py-2",style:{background:"linear-gradient(transparent, rgba(17,27,46,.65))"},children:[(0,c.jsx)("div",{style:{color:"#fff",fontFamily:le.disp,fontWeight:800,fontSize:17,lineHeight:1.1},children:E.addr}),(0,c.jsx)("div",{style:{color:"rgba(255,255,255,.85)",fontSize:11.5},children:E.area})]})]}),(0,c.jsx)("div",{className:"p-3.5",children:E.stub?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:700,fontSize:15,color:m.ink},children:i("D\xE9tails \xE0 venir","Details coming")}),(0,c.jsx)("div",{className:"mt-1.5 rounded-xl px-3 py-2",style:{background:m.snow,border:`1px solid ${m.line}`,fontSize:12,color:m.sub,lineHeight:1.5},children:i("Cette inscription vient d\u2019\xEAtre rep\xE9r\xE9e pour vous. Les d\xE9tails (prix, pi\xE8ces, photos) s\u2019ajoutent d\xE8s que la fiche compl\xE8te est re\xE7ue.","This listing was just spotted for you. The details (price, rooms, photos) appear as soon as the full sheet comes in.")}),(0,c.jsxs)("div",{className:"mt-2 flex items-center justify-between",style:{fontFamily:le.mono,fontSize:10.5,color:m.sub},children:[(0,c.jsxs)("span",{children:["Centris n\xBA ",E.id]}),(0,c.jsxs)("span",{children:[i("Re\xE7ue le","Sent")," ",E.liveDateSent||E.dateSent]})]})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"flex items-baseline justify-between gap-2",children:[E.price>0?(0,c.jsx)("div",{style:{fontFamily:le.mono,fontWeight:600,fontSize:22,color:m.metro},children:ct(E.price,t)}):(0,c.jsx)("div",{style:{fontFamily:le.disp,fontWeight:700,fontSize:15,color:m.sub},children:i("Prix \xE0 confirmer","Price to confirm")}),(0,c.jsx)("div",{style:{fontSize:11.5,color:m.sub},children:E.typeStr})]}),(0,c.jsxs)("div",{className:"mt-2 rounded-xl px-3 py-1.5",style:{background:m.snow,border:`1px solid ${m.line}`},children:[E.rooms&&(0,c.jsx)(Ze,{label:i("Pi\xE8ces","Rooms"),value:E.rooms}),E.lot&&(0,c.jsx)(Ze,{label:i("Terrain","Lot Area"),value:E.lot}),E.beds>0&&(0,c.jsx)(Ze,{label:i("Chambres","Bedrooms"),value:`${E.beds}+0`}),E.bathsStr&&(0,c.jsx)(Ze,{label:i("SDB + salle d\u2019eau","Bath + PR"),value:E.bathsStr}),!E.live&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Ze,{label:i("Type de b\xE2timent","Building Type"),value:i("D\xE9tach\xE9","Detached")}),(0,c.jsx)(Ze,{label:i("\xC9nergie/Chauffage","Energy/Heating"),value:E.heatStr}),(0,c.jsx)(Ze,{label:"Garage",value:We(E.garage)}),(0,c.jsx)(Ze,{label:i("Foyer-po\xEAle","Fireplace-Stove"),value:We(E.fire)}),(0,c.jsx)(Ze,{label:i("Piscine","Pool"),value:We(E.pool)})]})]}),(0,c.jsxs)("div",{className:"mt-2 flex items-center justify-between",style:{fontFamily:le.mono,fontSize:10.5,color:m.sub},children:[(0,c.jsxs)("span",{children:["Centris n\xBA ",E.id]}),(0,c.jsxs)("span",{children:[i("Re\xE7ue le","Sent")," ",E.liveDateSent||E.dateSent]})]}),E.price>0&&(0,c.jsx)("div",{className:"mt-2.5",children:(0,c.jsx)(ie,{r:E})})]})})]},E.id))}),a==="map"&&(0,c.jsxs)("div",{className:"mt-4",children:[(0,c.jsx)("div",{className:"rounded-2xl overflow-hidden",style:{border:`1px solid ${m.line}`,background:"#E8F1E4"},children:(0,c.jsxs)("svg",{viewBox:"0 0 100 92",width:"100%",style:{display:"block"},role:"img","aria-label":i("Carte des inscriptions","Listings map"),children:[(0,c.jsx)("rect",{width:"100",height:"92",fill:"#E8F1E4"}),(0,c.jsx)("path",{d:"M0 0 L100 0 L100 26 C80 34 66 30 52 40 C38 50 24 44 10 52 L0 56 Z",fill:"#DCEBD0"}),[[16,10],[30,8],[40,16],[22,24],[52,22]].map(([E,q],Le)=>(0,c.jsx)("ellipse",{cx:E,cy:q,rx:3.4,ry:1.7,fill:"#B9D8EF"},Le)),(0,c.jsx)("path",{d:"M100 50 L70 62 L38 80 L26 92 L46 92 L76 72 L100 60 Z",fill:"#A9CFEA"}),(0,c.jsx)("ellipse",{cx:"60",cy:"70",rx:"9",ry:"4.2",fill:"#D6E4CE"}),(0,c.jsx)("polyline",{points:"30,4 40,26 52,52 60,90",fill:"none",stroke:"#C6CEDA",strokeWidth:"1.4"}),(0,c.jsx)("polyline",{points:"6,66 40,62 62,64 96,58",fill:"none",stroke:"#CBD3DE",strokeWidth:"1.1"}),(0,c.jsx)("polyline",{points:"24,18 36,30 48,40",fill:"none",stroke:"#D2D9E2",strokeWidth:"0.9"}),[["Mont-Tremblant",18,14.5],["Sainte-Ad\xE8le",47,39.5],["Montr\xE9al",57,69],["Longueuil",76,82.5]].map(([E,q,Le])=>(0,c.jsx)("text",{x:q,y:Le,style:{font:`600 3.1px ${le.body}`,fill:"#5A6577"},children:E},E)),Me.map(E=>{let q=s===E.id;return(0,c.jsxs)("g",{transform:`translate(${E.xy[0]}, ${E.xy[1]})`,onClick:()=>o(E.id),style:{cursor:"pointer"},children:[q&&(0,c.jsx)("circle",{cy:"-5.4",r:"4.6",fill:"none",stroke:E.g[0],strokeWidth:"0.7",opacity:"0.7"}),(0,c.jsx)("rect",{x:"-9.5",y:"-16.5",width:"19",height:"5.4",rx:"2.7",fill:"#111B2E"}),(0,c.jsx)("text",{x:"0",y:"-12.6",textAnchor:"middle",style:{font:`600 3px ${le.mono}`,fill:"#fff"},children:Mh(E.price,t)}),(0,c.jsx)("path",{d:"M0 0 C -3.4 -4.6 -3.4 -8.4 0 -8.4 C 3.4 -8.4 3.4 -4.6 0 0 Z",fill:E.g[0],stroke:"#fff",strokeWidth:"0.6"}),(0,c.jsx)("circle",{cy:"-5.6",r:"1.5",fill:"#fff"})]},E.id)})]})}),Pe?(0,c.jsxs)("div",{className:"mt-3 rounded-2xl p-3.5 fade-up",style:{background:m.paper,border:`1px solid ${m.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,c.jsxs)("div",{className:"min-w-0",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,c.jsx)("span",{style:{fontFamily:le.disp,fontWeight:800,fontSize:15,color:m.ink},children:Pe.addr}),Pe.badge&&(0,c.jsx)(bn,{tone:Pe.badge==="new"?"green":"amber",children:t==="fr"?Fn[Pe.badge].fr:Fn[Pe.badge].en})]}),(0,c.jsxs)("div",{style:{fontSize:11.5,color:m.sub},children:[Pe.area," \xB7 ",Pe.beds," ",i("ch.","bd")," \xB7 ",Pe.bathsStr," ",i("sdb","ba")," \xB7 Centris ",Pe.id]})]}),(0,c.jsx)("div",{style:{fontFamily:le.mono,fontWeight:600,fontSize:18,color:m.metro,whiteSpace:"nowrap"},children:ct(Pe.price,t)})]}),xr("real_map")&&(0,c.jsx)(NR,{addr:`${Pe.addr}, ${Pe.area}`,lang:t}),(0,c.jsx)("div",{className:"mt-2.5",children:(0,c.jsx)(ie,{r:Pe,small:!0})})]}):(0,c.jsx)("div",{className:"mt-3 text-center",style:{fontSize:12,color:m.sub},children:i("Touchez une \xE9pingle pour voir l\u2019inscription.","Tap a pin to see the listing.")}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:m.sub,fontFamily:le.mono,textAlign:"center"},children:i("Carte stylis\xE9e (d\xE9mo) \u2014 production : tuiles cartographiques + g\xE9ocodage des adresses.","Stylized map (demo) \u2014 production: map tiles + address geocoding.")})]})]})}var re,c,m,le,bM,S0,ct,PM,Mh,wh,gr,CM,Ji,_0,Qr,xr,bh,At,Lo,yh,Dt,Ft,Io,bt,bn,cR,M0,es,Ch,_h,w0,SR,MR,wR,CR,LR,Sh,VR,WR,qR,ZR,yr,Ki,jR,JR,eP,EM,Lh,FM,iP,aP,TM,Fn,BM=ve(()=>{re=Pi(Ia());J_();wM();c=Pi(Sl()),m={ink:"#111B2E",snow:"#F6F8FA",paper:"#FFFFFF",metro:"#1656B4",metroSoft:"#E8EEF9",ochre:"#E8A33D",ochreSoft:"#FBF1DD",spruce:"#2F7D5C",spruceSoft:"#E4F1EA",line:"#DCE2EA",sub:"#5A6577",danger:"#B4552E",dangerSoft:"#F6E3DA"},le={disp:"'Bricolage Grotesque', 'Public Sans', sans-serif",body:"'Public Sans', system-ui, -apple-system, sans-serif",mono:"'Spline Sans Mono', 'SF Mono', monospace"},bM=`
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Public+Sans:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500;600&display=swap');
* { box-sizing: border-box; }
button { cursor: pointer; font-family: inherit; }
button:focus-visible, input:focus-visible, textarea:focus-visible { outline: 2px solid ${m.metro}; outline-offset: 2px; }
input[type=range] { accent-color: ${m.metro}; }
input[type=text], input[type=search] { font-family: inherit; }
::-webkit-scrollbar { height: 6px; width: 8px; }
::-webkit-scrollbar-thumb { background: ${m.line}; border-radius: 4px; }
.tour-canvas { touch-action: none; }
@media (prefers-reduced-motion: no-preference) {
  .seg-grow { transition: width .8s cubic-bezier(.2,.8,.2,1); }
  .fade-up { animation: fadeUp .5s ease both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(6px);} to { opacity:1; transform:none; } }
}`,S0=typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,ct=(t,e,n=0)=>new Intl.NumberFormat(e==="fr"?"fr-CA":"en-CA",{style:"currency",currency:"CAD",minimumFractionDigits:n,maximumFractionDigits:n}).format(t),PM=(t,e)=>new Intl.NumberFormat(e==="fr"?"fr-CA":"en-CA").format(t),Mh=(t,e)=>e==="fr"?`${Math.round(t/1e3)} k$`:`$${Math.round(t/1e3)}k`;wh={montreal:{labelFr:"Bar\xE8me Montr\xE9al (2025 \u2014 index\xE9)",labelEn:"Montr\xE9al scale (2025 \u2014 indexed)",brackets:[[61500,.005],[307800,.01],[552300,.015],[1104700,.02],[2136500,.025],[3113e3,.035],[1/0,.04]]},longueuil:{labelFr:"Bar\xE8me provincial (+ majorations municipales)",labelEn:"Provincial scale (+ municipal add-ons)",brackets:[[61500,.005],[307800,.01],[1/0,.015]]}};gr={electric:{fr:"Plinthes \xE9lectriques",en:"Electric baseboards",perSqft:1.35},gas:{fr:"Gaz naturel (\xC9nergir) + Hydro",en:"Natural gas (\xC9nergir) + Hydro",perSqft:1.1},heatpump:{fr:"Thermopompe",en:"Heat pump",perSqft:.85}};CM=[{id:"28374619",addr:"4517, rue de Br\xE9beuf",area:"Le Plateau-Mont-Royal, Montr\xE9al",muni:"montreal",typeFr:"Condo divise \u2014 2 chambres",typeEn:"Divided condo \u2014 2 bedrooms",price:549e3,evalMun:471200,sqft:1042,year:1912,beds:2,baths:1,parkFr:"Rue (vignette SRRR)",parkEn:"Street (permit)",taxesMun:3124,taxesScol:389,condoFees:285,heating:"electric",insuranceEst:38,inclFr:"Luminaires, stores, lave-vaisselle Bosch (2022)",inclEn:"Light fixtures, blinds, Bosch dishwasher (2022)",accent:["#31456B","#5F7BA6"],rooms:[{icon:di,fr:"Fa\xE7ade 1912",en:"1912 fa\xE7ade",d:"Brique + corniche",g:["#31456B","#5F7BA6"]},{icon:jr,fr:"Salon double",en:"Double living room",d:"5,8 \xD7 3,4 m",g:["#C7D5EA","#8FA8CC"]},{icon:ji,fr:"Cuisine",en:"Kitchen",d:"R\xE9nov\xE9e 2022",g:["#E9E2D2","#C9BB9B"]},{icon:fo,fr:"Chambre principale",en:"Primary bedroom",d:"4,1 \xD7 3,6 m",g:["#D7DEE9","#A9B7CD"]},{icon:lu,fr:"Salle de bain",en:"Bathroom",d:"Douche + bain",g:["#DCE9E4","#A9C8BB"]},{icon:Jr,fr:"Balcon arri\xE8re",en:"Back balcony",d:"Sud-ouest",g:["#CFE2D6","#8FB8A0"]}],plan:[{key:"salon",fr:"Salon",en:"Living room",x:0,z:0,w:5,d:4,col:"#C9D8EE",furn:["sofa","coffee","rug","tv","plant","art"]},{key:"cuisine",fr:"Cuisine",en:"Kitchen",x:5.2,z:0,w:3.4,d:4,col:"#EDE6D6",furn:["counter","island","stool"]},{key:"chP",fr:"Chambre principale",en:"Primary bedroom",x:0,z:4.2,w:4,d:3.6,col:"#DCE2EE",furn:["bed","night","plant"]},{key:"ch2",fr:"Chambre 2",en:"Bedroom 2",x:4.2,z:4.2,w:3,d:3.6,col:"#E6E1EE",furn:["bedS","night"]},{key:"sdb",fr:"Salle de bain",en:"Bathroom",x:7.4,z:4.2,w:2.4,d:2.4,col:"#DCEAE4",furn:["tub","vanity","mirror"]},{key:"balcon",fr:"Balcon",en:"Balcony",x:0,z:8,w:5,d:1.6,col:"#CFE2D6",furn:["chair","chair2"],open:!0}],dv:[{s:"D2",qFr:"Ann\xE9e / conversion",qEn:"Year / conversion",aFr:"Immeuble 1912, converti en copropri\xE9t\xE9 divise en 2004.",aEn:"1912 building, converted to divided co-ownership in 2004."},{s:"D5",qFr:"Infiltrations d\u2019eau",qEn:"Water infiltration",aFr:"Infiltration mineure au rangement du sous-sol en 2019, r\xE9par\xE9e (Bisson Expert). Aucune r\xE9currence depuis.",aEn:"Minor infiltration in basement storage (2019), repaired (Bisson Expert). No recurrence since."},{s:"D7",qFr:"Toiture",qEn:"Roof",aFr:"Membrane \xE9lastom\xE8re refaite en 2021 \u2014 garantie 10 ans transf\xE9rable.",aEn:"Elastomeric membrane redone in 2021 \u2014 10-year transferable warranty."},{s:"D11",qFr:"Plomberie / chauffe-eau",qEn:"Plumbing / water heater",aFr:"Entr\xE9e d\u2019eau en cuivre. Chauffe-eau remplac\xE9 en 2023.",aEn:"Copper water entry. Water heater replaced in 2023."},{s:"D14",qFr:"Copropri\xE9t\xE9",qEn:"Co-ownership",aFr:"Fonds de pr\xE9voyance : 148 000 $ (\xE9tude 2024). Aucune cotisation sp\xE9ciale vot\xE9e ni annonc\xE9e.",aEn:"Contingency fund: $148,000 (2024 study). No special assessment voted or announced."}],fund:{balance:148e3,units:12,studyYear:2024,special:!1},hood:{walk:94,transit:82,bike:96,metroFr:"M\xE9tro Mont-Royal \u2014 450 m",metroEn:"Mont-Royal metro \u2014 450 m",bixi:3,demo:{incomeMed:68400,incomeBands:[["<40k",22],["40\u201380k",38],["80\u2013120k",24],[">120k",16]],ageBands:[["0\u201314",12],["15\u201329",27],["30\u201344",33],["45\u201364",20],["65+",8]],fam:31,rent:64,langs:[["Fran\xE7ais",71],["Anglais",13],["Autres",16]]},crime:[100,96,91,94,87,82],crimeDelta:-12,incidents:[["Introduction par effraction","Break-in",-18],["M\xE9fait","Mischief",-7],["Vol de v\xE9hicule","Vehicle theft",4]],schoolsFr:"\xC9cole Paul-Bruch\xE9si (600 m) \xB7 CPE : attente \u2248 14 mois",schoolsEn:"Paul-Bruch\xE9si school (600 m) \xB7 CPE wait \u2248 14 months"},forecast:{organic:.03,drivers:[{kind:"transit",fr:"Prolongement REM de l\u2019Est \u2014 station projet\xE9e",en:"REM de l\u2019Est extension \u2014 planned station",dist:"1.2 km",year:2030,lo:4,hi:9,srcFr:"Actualit\xE9 \u2014 annonce gouvernementale",srcEn:"News \u2014 government announcement"},{kind:"zoning",fr:"Requalification de l\u2019ancien site industriel De Lorimier",en:"De Lorimier industrial site rezoning",dist:"800 m",year:2028,lo:2,hi:5,srcFr:"Ville \u2014 avis de changement de zonage",srcEn:"City \u2014 rezoning notice"},{kind:"commercial",fr:"Nouvelle art\xE8re commerciale \u2014 projet BIA Mont-Royal",en:"New commercial corridor \u2014 Mont-Royal BIA project",dist:"300 m",year:2027,lo:1,hi:3,srcFr:"SDC Mont-Royal",srcEn:"Mont-Royal merchants\u2019 assoc."}]},risks:[{kind:"flood",level:"none",fr:"Hors zone inondable (0-20 ans et 20-100 ans).",en:"Outside flood zones (0\u201320 yr and 20\u2013100 yr)."},{kind:"radon",level:"low",fr:"Potentiel radon faible (secteur cartographi\xE9 SPLQ).",en:"Low radon potential (mapped sector)."},{kind:"pyrite",level:"low",fr:"Risque pyrite faible \u2014 dalle d\u2019origine, aucun soul\xE8vement d\xE9clar\xE9.",en:"Low pyrite risk \u2014 original slab, no heaving declared."},{kind:"oil",level:"none",fr:"Aucun r\xE9servoir d\u2019huile actuel ou pass\xE9 d\xE9clar\xE9.",en:"No current or former oil tank declared."},{kind:"heat",level:"moderate",fr:"\xCElot de chaleur mod\xE9r\xE9 \u2014 faible canop\xE9e sur la rue.",en:"Moderate heat island \u2014 low street tree canopy."},{kind:"noise",level:"low",fr:"Bruit faible \u2014 rue r\xE9sidentielle, loin des grands axes.",en:"Low noise \u2014 residential street, away from arteries."}],amenities:[{type:"resto",items:[["L\u2019Express",210],["Au Pied de Cochon",350],["Pizzeria Napoletana",480]]},{type:"cafe",items:[["Caf\xE9 Olimpico",260],["Larue & Fils",190]]},{type:"cinema",items:[["Cin\xE9ma du Parc",900],["Cin\xE9ma Beaubien",1400]]},{type:"grocery",items:[["Provigo",300],["March\xE9 Jean-Talon",1600]]},{type:"park",items:[["Parc La Fontaine",550],["Parc Baldwin",700]]},{type:"gym",items:[["Nautilus Plus",620]]},{type:"pharma",items:[["Jean Coutu",280]]}],commute:{dest:"Centre-ville (Ville-Marie)",hours:[6,7,8,9,12,15,17,18,20],weekday:{car:[14,22,31,26,18,19,33,30,15],transit:[24,26,28,27,24,24,29,28,25],bike:[19,19,20,19,19,19,20,20,19]},weekend:{car:[13,14,16,18,20,21,19,17,14],transit:[26,26,27,27,28,28,27,27,28],bike:[19,19,19,19,20,20,19,19,19]}},soldComps:[["4490, rue de Br\xE9beuf",529e3,"2025-03",1005],["1233, rue Gilford",562e3,"2025-01",1080],["4602, rue Fabre",505e3,"2024-11",970]]},{id:"19052833",addr:"1183, rue Saint-Charles O.",area:"Vieux-Longueuil, Longueuil",muni:"longueuil",typeFr:"Cottage \u2014 3 chambres",typeEn:"Cottage \u2014 3 bedrooms",price:615e3,evalMun:522300,sqft:1610,year:1958,beds:3,baths:1.5,parkFr:"All\xE9e double + garage",parkEn:"Double driveway + garage",taxesMun:4188,taxesScol:512,condoFees:0,heating:"gas",insuranceEst:92,inclFr:"Cabanon, piscine hors terre (2020), thermopompe murale",inclEn:"Shed, above-ground pool (2020), wall heat pump",accent:["#7A5A3F","#B08A63"],rooms:[{icon:di,fr:"Fa\xE7ade 1958",en:"1958 fa\xE7ade",d:"Terrain 5 200 pi\xB2",g:["#7A5A3F","#B08A63"]},{icon:jr,fr:"Salon",en:"Living room",d:"Foyer au bois",g:["#E4D9C6","#C2AE8C"]},{icon:ji,fr:"Cuisine",en:"Kitchen",d:"Armoires 2016",g:["#DDE5E9","#AABDC7"]},{icon:fo,fr:"3 chambres",en:"3 bedrooms",d:"\xC9tage",g:["#D8DEE9","#A9B4CC"]},{icon:Jr,fr:"Cour arri\xE8re",en:"Backyard",d:"Piscine + cabanon",g:["#CFE2D0","#8FB894"]},{icon:hu,fr:"Garage",en:"Garage",d:"Attach\xE9",g:["#D5D8DE","#9BA3B0"]}],plan:[{key:"salon",fr:"Salon",en:"Living room",x:0,z:0,w:5,d:4.2,col:"#EADFCB",furn:["sofa","coffee","rug","tv","plant","art"]},{key:"cuisine",fr:"Cuisine",en:"Kitchen",x:5.2,z:0,w:4,d:4.2,col:"#DDE5E9",furn:["counter","island","stool"]},{key:"salle",fr:"Salle \xE0 manger",en:"Dining",x:5.2,z:4.4,w:4,d:3.2,col:"#E8E2D6",furn:["table","art"]},{key:"chP",fr:"Chambre principale",en:"Primary bedroom",x:0,z:4.4,w:4.2,d:3.6,col:"#DCE2EE",furn:["bed","night","plant"]},{key:"ch2",fr:"Chambre 2",en:"Bedroom 2",x:0,z:8.2,w:3,d:3,col:"#E6E1EE",furn:["bedS","night"]},{key:"ch3",fr:"Chambre 3",en:"Bedroom 3",x:3.2,z:8.2,w:3,d:3,col:"#E1E8EE",furn:["bedS"]},{key:"garage",fr:"Garage",en:"Garage",x:9.4,z:0,w:3.2,d:5.8,col:"#DADEE4",furn:["car"]},{key:"cour",fr:"Cour",en:"Yard",x:6.4,z:8,w:6,d:3.4,col:"#CFE2D0",furn:["pool","shed"],open:!0}],dv:[{s:"D5",qFr:"Infiltrations d\u2019eau",qEn:"Water infiltration",aFr:"Aucune infiltration d\xE9clar\xE9e par le vendeur.",aEn:"No infiltration declared by the seller."},{s:"D7",qFr:"Toiture",qEn:"Roof",aFr:"Bardeaux d\u2019asphalte remplac\xE9s en 2017.",aEn:"Asphalt shingles replaced in 2017."},{s:"D10",qFr:"R\xE9servoir d\u2019huile",qEn:"Oil tank",aFr:"Ancien r\xE9servoir retir\xE9 en 2009 \u2014 attestation de retrait disponible.",aEn:"Former tank removed in 2009 \u2014 removal attestation on file."},{s:"D12",qFr:"Piscine",qEn:"Pool",aFr:"Hors terre, install\xE9e en 2020, conforme au r\xE8glement municipal.",aEn:"Above-ground, installed 2020, compliant with municipal bylaw."},{s:"D16",qFr:"Certificat de localisation",qEn:"Certificate of location",aFr:"Dat\xE9 de 2022 \u2014 conforme, aucune servitude particuli\xE8re.",aEn:"Dated 2022 \u2014 compliant, no unusual servitude."}],fund:null,hood:{walk:71,transit:58,bike:74,metroFr:"REM Panama \u2014 2,1 km",metroEn:"Panama REM station \u2014 2.1 km",bixi:0,demo:{incomeMed:81200,incomeBands:[["<40k",14],["40\u201380k",34],["80\u2013120k",31],[">120k",21]],ageBands:[["0\u201314",18],["15\u201329",18],["30\u201344",24],["45\u201364",26],["65+",14]],fam:52,rent:31,langs:[["Fran\xE7ais",88],["Anglais",6],["Autres",6]]},crime:[100,97,95,90,88,84],crimeDelta:-16,incidents:[["Introduction par effraction","Break-in",-22],["M\xE9fait","Mischief",-11],["Vol de v\xE9hicule","Vehicle theft",-3]],schoolsFr:"\xC9cole Saint-Jude (400 m) \xB7 CPE : attente \u2248 9 mois",schoolsEn:"Saint-Jude school (400 m) \xB7 CPE wait \u2248 9 months"},forecast:{organic:.026,drivers:[{kind:"transit",fr:"REM \u2014 station Panama en service, prolongement projet\xE9",en:"REM \u2014 Panama station in service, extension planned",dist:"2.1 km",year:2027,lo:3,hi:7,srcFr:"ARTM / actualit\xE9",srcEn:"ARTM / news"},{kind:"commercial",fr:"Red\xE9veloppement du secteur Roland-Therrien",en:"Roland-Therrien sector redevelopment",dist:"1.4 km",year:2029,lo:2,hi:4,srcFr:"Ville de Longueuil \u2014 PPU",srcEn:"City of Longueuil \u2014 special plan"},{kind:"risk",fr:"Hausse des primes d\u2019assurance (secteur riverain \xE9largi)",en:"Insurance premium rise (expanded riverine zone)",dist:"\u2014",year:2026,lo:-2,hi:0,srcFr:"Actualit\xE9 \u2014 r\xE9vision cartographie",srcEn:"News \u2014 mapping revision"}]},risks:[{kind:"flood",level:"moderate",fr:"Proximit\xE9 du fleuve \u2014 v\xE9rifier la cote de crue 20-100 ans \xE0 l\u2019adresse exacte.",en:"River proximity \u2014 verify 20\u2013100 yr flood line at the exact address."},{kind:"radon",level:"moderate",fr:"Potentiel radon mod\xE9r\xE9 \u2014 test recommand\xE9 (sous-sol habit\xE9).",en:"Moderate radon potential \u2014 testing recommended (finished basement)."},{kind:"pyrite",level:"low",fr:"Risque pyrite faible pour le secteur.",en:"Low pyrite risk for the sector."},{kind:"oil",level:"low",fr:"Ancien r\xE9servoir retir\xE9 en 2009 (attestation) \u2014 sol non test\xE9.",en:"Former tank removed 2009 (attestation) \u2014 soil not tested."},{kind:"heat",level:"low",fr:"Faible \xEElot de chaleur \u2014 bonne canop\xE9e r\xE9sidentielle.",en:"Low heat island \u2014 good residential canopy."},{kind:"noise",level:"low",fr:"Bruit faible \u2014 quartier r\xE9sidentiel \xE9tabli.",en:"Low noise \u2014 established residential area."}],amenities:[{type:"resto",items:[["Lou Nissart",400],["Le Fin Gourmet",650]]},{type:"cafe",items:[["Caf\xE9 Bloom",350],["Presse Caf\xE9",500]]},{type:"cinema",items:[["Cineplex Longueuil",2600]]},{type:"grocery",items:[["IGA",450],["Metro",900]]},{type:"park",items:[["Parc Saint-Mark",300],["Parc de la Cit\xE9",2100]]},{type:"gym",items:[["\xC9conofitness",800]]},{type:"pharma",items:[["Pharmaprix",550]]}],commute:{dest:"Centre-ville de Montr\xE9al",hours:[6,7,8,9,12,15,17,18,20],weekday:{car:[22,31,44,38,26,27,46,41,23],transit:[38,40,43,42,39,39,45,43,40],bike:[46,46,47,46,46,46,47,47,46]},weekend:{car:[20,21,24,27,30,31,28,25,21],transit:[42,42,43,43,44,44,43,43,44],bike:[46,46,46,46,47,47,46,46,46]}},soldComps:[["1211, rue Sainte-H\xE9l\xE8ne",592e3,"2025-02",1540],["905, rue Grant",638e3,"2024-12",1720],["1450, rue Bourget",575e3,"2024-10",1490]]}],Ji=typeof window<"u"&&window.__VITRINE_MERGE__?window.__VITRINE_MERGE__(CM):CM,_0={};Qr=typeof window<"u"&&window.__VITRINE_FEATURES__||null,xr=t=>Qr&&Qr.features?!!Qr.features[t]:!0,bh=(t,e)=>Qr&&Qr.settings&&Qr.settings[t]!=null?Qr.settings[t]:e,At={name:"Julie Fortin",title_fr:"Courti\xE8re immobili\xE8re r\xE9sidentielle",title_en:"Residential real estate broker",agency:"RE/MAX du Cartier"},Lo={id:"p_live",name:"Marie-Claude Tremblay"};yh={},Dt={async get(t,e){if(t in yh)return yh[t];try{let n=await window.storage.get(t);return n?JSON.parse(n.value):e}catch{return e}},async set(t,e){yh[t]=e;try{await window.storage.set(t,JSON.stringify(e))}catch{}},async del(t){delete yh[t];try{await window.storage.delete(t)}catch{}}},Ft={events:"vitrine2_events",reactions:"vitrine2_reactions",chats:"vitrine2_chats",dms:"vitrine2_dms",prefs:"vitrine2_prefs",notes:"vitrine2_notes",checklist:"vitrine2_checklist"};Io=({children:t})=>(0,c.jsx)("div",{style:{fontFamily:le.mono,fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:m.sub},children:t}),bt=({icon:t,title:e,note:n})=>(0,c.jsxs)("div",{className:"flex items-baseline gap-2 mb-3",children:[(0,c.jsx)(t,{size:17,style:{color:m.metro,transform:"translateY(2px)"}}),(0,c.jsx)("h2",{style:{fontFamily:le.disp,fontWeight:700,fontSize:20,color:m.ink,margin:0},children:e}),n&&(0,c.jsx)("span",{style:{fontFamily:le.mono,fontSize:10.5,color:m.sub},children:n})]}),bn=({children:t,tone:e="neutral"})=>{let n={neutral:{bg:m.snow,fg:m.sub,bd:m.line},hot:{bg:"#FBEAD9",fg:"#8A4B12",bd:"#F0CFA6"},blue:{bg:m.metroSoft,fg:m.metro,bd:"#C9D9F2"},green:{bg:m.spruceSoft,fg:m.spruce,bd:"#C4E0D2"},amber:{bg:m.ochreSoft,fg:"#8A5A12",bd:"#EBD3A0"},red:{bg:m.dangerSoft,fg:m.danger,bd:"#E7C3B4"}}[e];return(0,c.jsx)("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full",style:{background:n.bg,color:n.fg,border:`1px solid ${n.bd}`,fontSize:11.5,fontWeight:600},children:t})},cR=({data:t,color:e,w:n=120,h:i=34})=>{let a=Math.min(...t),r=Math.max(...t),s=t.map((o,l)=>`${l/(t.length-1)*(n-4)+2},${i-3-(o-a)/(r-a||1)*(i-8)}`).join(" ");return(0,c.jsx)("svg",{width:n,height:i,"aria-hidden":"true",children:(0,c.jsx)("polyline",{points:s,fill:"none",stroke:e,strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})};M0=({segments:t})=>(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"flex w-full rounded-full overflow-hidden",style:{height:12,border:`1px solid ${m.line}`},children:t.map((e,n)=>(0,c.jsx)("div",{style:{width:`${e.pct}%`,background:e.color},title:`${e.label} ${e.pct}%`},n))}),(0,c.jsx)("div",{className:"flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5",children:t.map((e,n)=>(0,c.jsxs)("span",{className:"inline-flex items-center gap-1",style:{fontSize:11,color:m.sub},children:[(0,c.jsx)("span",{style:{width:8,height:8,borderRadius:2,background:e.color}})," ",e.label," ",(0,c.jsxs)("b",{style:{fontFamily:le.mono,color:m.ink},children:[e.pct,"%"]})]},n))})]}),es=({label:t,val:e,set:n,min:i,max:a,step:r,suffix:s,field:o,mark:l})=>(0,c.jsxs)("label",{className:"block",children:[(0,c.jsxs)("div",{className:"flex justify-between",style:{fontSize:12.5,color:m.sub,marginBottom:2},children:[(0,c.jsx)("span",{children:t}),(0,c.jsxs)("span",{style:{fontFamily:le.mono,color:m.ink,fontWeight:600},children:[e,s]})]}),(0,c.jsx)("input",{type:"range",min:i,max:a,step:r,value:e,className:"w-full",onChange:u=>{n(Number(u.target.value)),l&&l(o)}})]}),Ch=({onClose:t,children:e,label:n})=>(0,c.jsx)("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center",style:{background:"rgba(17,27,46,.55)"},role:"dialog","aria-label":n,children:(0,c.jsxs)("div",{className:"w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-5 fade-up",style:{background:m.paper,maxHeight:"88vh",overflowY:"auto"},children:[(0,c.jsx)("div",{className:"flex justify-end",children:(0,c.jsx)("button",{onClick:t,"aria-label":"Fermer",className:"p-1 rounded-md",style:{color:m.sub},children:(0,c.jsx)(wa,{size:18})})}),e]})}),_h=({text:t})=>(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:"rgba(17,27,46,.72)",color:"#fff",fontSize:10.5,fontWeight:600,backdropFilter:"blur(4px)"},children:[(0,c.jsx)(Qn,{size:11,style:{color:m.ochre}})," ",t]}),w0={};SR={transit:Kr,zoning:Sa,commercial:bo,risk:_a};MR={flood:{icon:mr,fr:"Inondation",en:"Flood"},radon:{icon:Hu,fr:"Radon",en:"Radon"},pyrite:{icon:Au,fr:"Pyrite",en:"Pyrite"},oil:{icon:xu,fr:"R\xE9servoir d\u2019huile",en:"Oil tank"},heat:{icon:Fu,fr:"\xCElot de chaleur",en:"Heat island"},noise:{icon:Vu,fr:"Bruit",en:"Noise"}},wR={none:{tone:"green",fr:"Aucun",en:"None"},low:{tone:"green",fr:"Faible",en:"Low"},moderate:{tone:"amber",fr:"Mod\xE9r\xE9",en:"Moderate"},elevated:{tone:"red",fr:"\xC9lev\xE9",en:"Elevated"}};CR={resto:{icon:ji,fr:"Restaurants",en:"Restaurants"},cafe:{icon:mu,fr:"Caf\xE9s",en:"Caf\xE9s"},cinema:{icon:vu,fr:"Cin\xE9mas",en:"Cinemas"},grocery:{icon:bo,fr:"\xC9picerie",en:"Groceries"},park:{icon:Jr,fr:"Parcs",en:"Parks"},gym:{icon:yu,fr:"Gyms",en:"Gyms"},pharma:{icon:gu,fr:"Pharmacie",en:"Pharmacy"}},LR=t=>Math.max(1,Math.round(t/80));Sh=[["preapprobation","Pr\xE9approbation hypoth\xE9caire obtenue","Mortgage pre-approval in hand"],["mise_de_fonds","Preuve de mise de fonds pr\xEAte","Proof of down payment ready"],["identite","Pi\xE8ces d'identit\xE9 valides","Valid ID documents"],["inspecteur","Inspecteur en b\xE2timent choisi","Building inspector chosen"],["notaire","Notaire choisi","Notary chosen"],["assurance","Soumission d'assurance habitation demand\xE9e","Home insurance quote requested"],["certificat","Certificat de localisation \xE0 r\xE9viser avec la courti\xE8re","Certificate of location to review with the broker"]];VR={...At,initials:"JF",phone:"514 555-0142",email:"julie.fortin@remaxducartier.ca",years:12,deals:180,rating:4.9,reviewCount:87,areas_fr:"Rosemont \xB7 Ahuntsic \xB7 Villeray",areas_en:"Rosemont \xB7 Ahuntsic \xB7 Villeray",story:{fr:"Julie accompagne acheteurs et vendeurs sur l\u2019\xEEle de Montr\xE9al depuis plus de dix ans. Ancienne conseill\xE8re en am\xE9nagement, elle lit un quartier autant qu\u2019une fiche : \xE9coles, transport, projets \xE0 venir. Sa promesse est simple \u2014 des r\xE9ponses franches, des chiffres v\xE9rifiables, et jamais de pression. Chaque Vitrine que vous recevez est pr\xE9par\xE9e \xE0 la main, \xE0 partir de ce qu\u2019elle sait vraiment de la propri\xE9t\xE9 et du secteur.",en:"Julie has guided buyers and sellers across the island of Montr\xE9al for over a decade. A former urban-planning advisor, she reads a neighbourhood as closely as a listing sheet: schools, transit, what\u2019s being built next. Her promise is simple \u2014 straight answers, numbers you can check, and never any pressure. Every Vitrine you receive is prepared by hand, from what she genuinely knows about the property and the area."},reviews:[{name:"Marc & Sophie L.",area_fr:"Acheteurs \u2014 Rosemont",area_en:"Buyers \u2014 Rosemont",rating:5,fr:"Julie a rep\xE9r\xE9 un probl\xE8me de drainage que deux autres courtiers avaient manqu\xE9. Honn\xEAte jusqu\u2019au bout.",en:"Julie caught a drainage issue two other agents had missed. Honest to the end."},{name:"Am\xE9lie D.",area_fr:"Vendeuse \u2014 Villeray",area_en:"Seller \u2014 Villeray",rating:5,fr:"Vendu en neuf jours, au-dessus du prix demand\xE9, sans jamais me sentir bouscul\xE9e. Ses donn\xE9es de quartier ont fait la diff\xE9rence.",en:"Sold in nine days, over asking, and never once felt rushed. Her neighbourhood data made the difference."},{name:"Karim B.",area_fr:"Acheteur \u2014 Ahuntsic",area_en:"Buyer \u2014 Ahuntsic",rating:4,fr:"Patiente avec un premier acheteur nerveux. Elle a expliqu\xE9 chaque chiffre, taxe de bienvenue incluse.",en:"Patient with a nervous first-time buyer. She walked me through every number, welcome tax included."}]};WR=".pdf,.jpg,.jpeg,.png,.heic,.webp,.doc,.docx,.xls,.xlsx,.txt,.csv",qR=8*1024*1024;ZR=YR,yr={classique:{fr:"Classique",en:"Classic",wall:"#EEF1F6",dot:"#8FA0BC"},tranquille:{fr:"Tranquille",en:"Tranquil",wall:"#F1EFE6",dot:"#B9C6B4",fabric:"#B9C6B4",wood:"#B8A98F",metal:"#8E9AA0",accent:"#EAE3D2",fixture:"#EDF2EE"},moderne:{fr:"Moderne",en:"Modern",wall:"#E9EBEF",dot:"#3C4048",fabric:"#5C6470",wood:"#3C4048",metal:"#20242B",accent:"#D9DDE3",fixture:"#F2F4F6"},scandinave:{fr:"Scandinave",en:"Scandi",wall:"#F7F6F2",dot:"#E4D5BC",fabric:"#D8E0E8",wood:"#E4D5BC",metal:"#B9C2CC",accent:"#FFFFFF",fixture:"#F6F8F9"}},Ki={sofa:{fr:"Sofa 3 places",en:"3-seat sofa",price:"899 \u2013 2 399 $",stores:["Structube","EQ3","Article"]},coffee:{fr:"Table basse",en:"Coffee table",price:"199 \u2013 699 $",stores:["Structube","IKEA"]},rug:{fr:"Tapis",en:"Area rug",price:"149 \u2013 899 $",stores:["EQ3","HomeSense"]},counter:{fr:"Cuisine sur mesure",en:"Custom kitchen",price:"Sur devis",stores:["\xC9b\xE9niste local","Cuisines Action"]},island:{fr:"\xCElot de cuisine",en:"Kitchen island",price:"Sur devis",stores:["\xC9b\xE9niste local","IKEA"]},bed:{fr:"Lit grand format + t\xEAte de lit",en:"Queen bed + headboard",price:"649 \u2013 1 899 $",stores:["Structube","Mobilia","IKEA"]},bedS:{fr:"Lit simple / double",en:"Twin / double bed",price:"449 \u2013 1 199 $",stores:["Structube","IKEA"]},night:{fr:"Table de chevet",en:"Nightstand",price:"129 \u2013 399 $",stores:["IKEA","Structube"]},tub:{fr:"Bain & robinetterie",en:"Tub & fixtures",price:"Sur devis",stores:["Bain D\xE9p\xF4t","Plombier partenaire"]},vanity:{fr:"Meuble-lavabo",en:"Vanity",price:"399 \u2013 1 299 $",stores:["Rona","Bain D\xE9p\xF4t"]},table:{fr:"Table \xE0 manger",en:"Dining table",price:"499 \u2013 1 599 $",stores:["Article","Maison Corbeil"]},chair:{fr:"Chaises d\u2019ext\xE9rieur",en:"Outdoor chairs",price:"89 \u2013 349 $ / ch.",stores:["Canadian Tire","IKEA"]},chair2:{fr:"Chaises d\u2019ext\xE9rieur",en:"Outdoor chairs",price:"89 \u2013 349 $ / ch.",stores:["Canadian Tire","IKEA"]},pool:{fr:"Piscine hors terre",en:"Above-ground pool",price:"3 500 \u2013 9 000 $",stores:["Tr\xE9vi","Club Piscine"]},shed:{fr:"Cabanon",en:"Shed",price:"1 200 \u2013 4 500 $",stores:["Rona","Home Depot"]},tv:{fr:"T\xE9l\xE9viseur + meuble",en:"TV + media unit",price:"649 \u2013 1 999 $",stores:["Best Buy","Structube"]},plant:{fr:"Plante d\u2019int\xE9rieur + pot",en:"Indoor plant + pot",price:"39 \u2013 149 $",stores:["Folia Design","IKEA"]},art:{fr:"\u0152uvre encadr\xE9e",en:"Framed art",price:"89 \u2013 450 $",stores:["Artiste local","Simons Maison"]},stool:{fr:"Tabourets d\u2019\xEElot (\xD72)",en:"Island stools (\xD72)",price:"158 \u2013 498 $",stores:["Structube","EQ3"]},mirror:{fr:"Miroir de salle de bain",en:"Bathroom mirror",price:"99 \u2013 349 $",stores:["Rona","Bain D\xE9p\xF4t"]}},jR=`Salon 4,9 x 3,7
Cuisine 3,4 x 3,0
Chambre principale 3,6 x 3,3
Chambre 2,9 x 2,6
Salle de bain 2,4 x 1,5
V\xE9randa 3,0 x 2,4`;JR=[[/salon|s[ée]jour|living/i,{col:"#C9D8EE",furn:["sofa","coffee","rug","tv","plant","art"]}],[/cuisine|kitchen/i,{col:"#EDE6D6",furn:["counter","island","stool"]}],[/manger|dinette|dining/i,{col:"#E8E2D6",furn:["table","art"]}],[/principale|ma[îi]tres|primary|master/i,{col:"#DCE2EE",furn:["bed","night","plant"]}],[/chambre|bedroom|\bch\b/i,{col:"#E6E1EE",furn:["bedS","night"]}],[/bain|sdb|salle d.eau|bath/i,{col:"#DCEAE4",furn:["tub","vanity","mirror"]}],[/garage/i,{col:"#DADEE4",furn:["car"]}],[/cour|terrain|balcon|patio|v[ée]randa|yard|deck/i,{col:"#CFE2D6",furn:["chair","chair2"],open:!0}]];eP=[{id:"camille",name:"Camille B\xE9rub\xE9",cityFr:"Mile End, Montr\xE9al",cityEn:"Mile End, Montreal",style:"tranquille",tagsFr:["Ambiance tranquille","Mat\xE9riaux naturels","Petits espaces"],tagsEn:["Tranquil mood","Natural materials","Small spaces"],rate:"95 $/h"},{id:"marco",name:"Marc-Olivier Tessier",cityFr:"Griffintown, Montr\xE9al",cityEn:"Griffintown, Montreal",style:"moderne",tagsFr:["Moderne \xE9pur\xE9","R\xE9nos condo","\xC9clairage"],tagsEn:["Clean modern","Condo renos","Lighting"],rate:"120 $/h"},{id:"noor",name:"Noor Haddad",cityFr:"Vieux-Longueuil",cityEn:"Old Longueuil",style:"scandinave",tagsFr:["Scandinave chaleureux","Familles","Budget malin"],tagsEn:["Warm Scandi","Families","Smart budgets"],rate:"85 $/h"}];EM=["Le Plateau-Mont-Royal","Vieux-Longueuil","Mont-Tremblant","Sainte-Agathe-des-Monts","Sainte-Ad\xE8le","Sainte-Marguerite\u2013Lac-Masson","Saint-Sauveur","Val-David"],Lh={price:{min:25e4,max:65e4},beds:2,baths:1,lot:{min:0,max:0},year:{min:0,max:0},living:{min:0,max:0},property_types:[],areas:["Le Plateau-Mont-Royal","Vieux-Longueuil"],pool:[],water:[],view:[],basement:[],amenities:[],fireplace:[]},FM=t=>{if(!t||t.price&&!("pmin"in t))return{...Lh,...t||{}};let e={...Lh};("pmin"in t||"pmax"in t)&&(e.price={min:+t.pmin||0,max:+t.pmax||0}),t.beds&&(e.beds=+t.beds),t.baths&&(e.baths=+t.baths),t.lot&&(e.lot={min:+t.lot||0,max:0}),Array.isArray(t.areas)&&(e.areas=t.areas);let n=t.must||{};return n.piscine&&(e.pool=["above_ground","heated","indoor","inground"]),n.foyer&&(e.fireplace=["gas_fireplace","wood_fireplace","wood_stove","pellet_fireplace"]),n.garage&&(e.amenities=["garage_opener"]),e};iP={28374619:{badge:"new",dateSent:"2026-07-05",rooms:7,lot:null,fire:!1,xy:[63,70]},19052833:{badge:null,dateSent:"2026-07-03",rooms:9,lot:"5 200 pi\xB2",fire:!0,xy:[72,78]}},aP=[{id:"14106527",addr:"3, rue des Geais-Bleus",area:"Mont-Tremblant (Saint-Jovite)",typeFr:"Maison mobile \u2014 1990",typeEn:"Mobile home \u2014 1990",price:124900,beds:2,bathsStr:"1+0",heatFr:"\xC9lectricit\xE9",heatEn:"Electricity",rooms:6,lot:null,garage:!1,fire:!1,pool:!0,badge:"new",dateSent:"2026-07-06",g:["#5E7F5A","#8FAE7E"],xy:[24,18]},{id:"25995203",addr:"122-126, ch. Gu\xE9nette",area:"Sainte-Marguerite-du-Lac-Masson",typeFr:"\xC0 \xE9tages \u2014 1945",typeEn:"Two or more storey \u2014 1945",price:399e3,beds:4,bathsStr:"2+1",heatFr:"\xC9lectricit\xE9",heatEn:"Electricity",rooms:13,lot:"27 630 pi\xB2 / 2 567 m\xB2",garage:!1,fire:!0,pool:!0,badge:"price",dateSent:"2026-07-04",g:["#3E5E52","#7FA08F"],xy:[45,30]}],TM={25995203:"https://d8j0ntlcm91z4.cloudfront.net/user_3GGcnlb30w4rwInWPmkZocDwJ0x/hf_20260709_132918_005475da-f23e-4a96-b425-8ef81c306833.mp4"};Fn={new:{fr:"Nouvelle inscription",en:"New Listing",bg:"#2F7D5C",fg:"#fff"},price:{fr:"Nouveau prix",en:"New Price",bg:"#E8A33D",fg:"#3A2A08"}}});var aO=Pi(Ia()),zM=Pi(hS()),GM=Pi(Sl()),fi=window.fetch.bind(window),hi="",jt=(()=>{let t=window.location.pathname.match(/\/portail\/([\w-]+)/),e=t&&t[1]||new URLSearchParams(window.location.search).get("t")||"";return e==="demo"?"":e})();window.__VITRINE_TOKEN__=jt;var VM=Date.now(),oP="vitrine2_events",UM=new Set,C0={visit:"listing.viewed",tour_view:"tour3d.viewed",tour_room:"tour3d.viewed",reaction_interested:"listing.favorited",booking_request:"visit.requested",broker_message:"message.sent",chat_escalation:"message.sent",chat_message:"message.sent",calc_use:"calculator.used",calc_adjust:"calculator.used",commute_calc:"calculator.used",section_view:"section.viewed",forecast_view:"section.viewed",risk_view:"section.viewed",amenity_view:"section.viewed",criteria_update:"criteria.updated",note_saved:"note.added",centris_click:"centris.clicked",mortgage_click:"mortgage.interest",checklist_update:"criteria.updated"},Gu={},OM=new Set;function lP(t){return{type:C0[t.type],event_id:t.id,listing_id:t.lid||"",vitrine_type:t.type,...Gu[t.lid]?{address:Gu[t.lid]}:{},...t.meta||{}}}async function uP(t){if(!jt||!Array.isArray(t))return;let e=t.filter(n=>n&&n.ts>VM&&!UM.has(n.id)&&C0[n.type]).filter(n=>{if(C0[n.type]!=="section.viewed")return!0;let i=`${n.lid}-${n.meta&&n.meta.s||n.type}`;return OM.has(i)?!1:(OM.add(i),!0)});if(e.length){e.forEach(n=>UM.add(n.id)),e.filter(n=>n.type==="visit").forEach(n=>HM.switchTo(n.lid));try{await fi(`${hi}/api/webhooks/vitrine`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_token:jt,events:e.map(lP)})})}catch(n){console.warn("radar-bridge: webhook",n)}}}var HM=(()=>{let t=null,e=0,n=0,i=0,a=()=>Date.now(),r=()=>document.visibilityState==="visible"&&t,s=()=>{e&&(n+=a()-e,e=0)},o=()=>{r()&&!e&&(e=a())};function l(u){s();let d=Math.round(n/1e3);if(t&&d>=30){let p=JSON.stringify({client_token:jt,events:[{type:"listing.dwell",event_id:`dwell-${t}-${VM}`,listing_id:t,seconds:d,scroll_depth:Math.round(i*100)/100,...Gu[t]?{address:Gu[t]}:{}}]});u&&navigator.sendBeacon?navigator.sendBeacon(`${hi}/api/webhooks/vitrine`,new Blob([p],{type:"application/json"})):fi(`${hi}/api/webhooks/vitrine`,{method:"POST",headers:{"Content-Type":"application/json"},body:p}).catch(()=>{})}n=0,i=0}return{switchTo(u){!jt||u===t||(l(!1),t=u,e=a(),o())},init(){jt&&(document.addEventListener("visibilitychange",()=>document.visibilityState==="visible"?o():s()),window.addEventListener("scroll",()=>{let u=document.documentElement,d=u.scrollHeight-u.clientHeight;d>0&&(i=Math.max(i,(u.scrollTop||window.scrollY)/d))},{passive:!0}),window.addEventListener("pagehide",()=>l(!0)))}}})();jt&&(window.storage={async get(t){let e=await fi(`${hi}/api/vitrine/storage/${jt}/${encodeURIComponent(t)}`);if(!e.ok)throw new Error("kv miss");return e.json()},async set(t,e){if(t===oP)try{uP(JSON.parse(e))}catch{}let n=await fi(`${hi}/api/vitrine/storage/${jt}/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:e})});if(!n.ok)throw new Error("kv set failed");return n.json()},async delete(t){let e=await fi(`${hi}/api/vitrine/storage/${jt}/${encodeURIComponent(t)}`,{method:"DELETE"});if(!e.ok)throw new Error("kv del failed");return e.json()}});window.fetch=(t,e={})=>{let n=typeof t=="string"?t:t.url;if(n&&n.startsWith("https://api.anthropic.com/v1/messages")){let i={};try{i=JSON.parse(e.body||"{}")}catch{}return fi(`${hi}/api/vitrine/ai`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:jt,payload:i})})}return fi(t,e)};function cP(t,e){return n=>t.length?t.map((i,a)=>{let r=n[a%n.length],s=i.price&&r.price?i.price/r.price:1,o=i.details||{},l=o.rooms||[],u=!i.price&&!i.address&&!o.year;return{...r,stub:u,live:!0,photos:e&&e[i.centris_no]||[],id:i.centris_no,addr:i.address||`Inscription Centris ${i.centris_no}`,area:i.area||"",price:i.price||0,evalMun:i.price?Math.round(i.price*.86):0,beds:i.beds||0,baths:i.baths||0,typeFr:i.prop_type||"",typeEn:i.prop_type||"",sqft:o.living_sqft||0,year:o.year||0,taxesMun:o.taxes_mun||0,taxesScol:o.taxes_school||0,remarks:o.remarks||"",inclusions:o.inclusions||"",exclusions:o.exclusions||"",addendum:o.addendum||"",agency:o.agency||"",dateSent:o.date_sent||(i.received_at||"").slice(0,10),styleStr:o.style||"",propertyUse:o.property_use||"",heatingStr:o.heating||"",waterAccess:o.water_access||"",fireplaceStr:o.fireplace||"",parkingStr:o.parking||"",zoning:o.zoning||"",ficheRooms:l.map(d=>({name:d.name,w:Math.round(d.w_ft*.3048*10)/10,d:Math.round(d.d_ft*.3048*10)/10})),sqftReal:!!o.living_sqft,yearReal:!!o.year,enriched:!!(o.year||o.living_sqft||l.length),centrisUrl:i.url||"",isLive:!0}}):n}(async()=>{if(jt){let e=null;try{let r=await fi(`${hi}/api/vitrine/features/${jt}`);r.ok&&(e=await r.json(),window.__VITRINE_FEATURES__=e)}catch(r){console.warn("radar-bridge: features",r)}let n=0;try{let r=await fi(`${hi}/api/vitrine/listings/${jt}`);if(r.ok){let s=await r.json();Array.isArray(s)&&(n=s.length,s.forEach(o=>{o.address&&(Gu[o.centris_no]=o.address)})),window.__VITRINE_MERGE__=cP(Array.isArray(s)?s:[],e&&e.photos)}}catch(r){console.warn("radar-bridge: listings",r)}if(window.__VITRINE_BOOK__=e&&e.features&&e.features.visit_scheduler_live?(r,s,o)=>fi(`${hi}/api/vitrine/book/${jt}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slot:r,listing_id:s||"",address:o||""})}).catch(()=>{}):null,e&&e.features&&e.features.portal_pwa){let r=document.createElement("link");r.rel="manifest",r.href=`/portail-manifest.webmanifest?t=${encodeURIComponent(jt)}`,document.head.appendChild(r),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js"),"Notification"in window&&Notification.permission==="default"&&setTimeout(()=>Notification.requestPermission(),4e3),setInterval(async()=>{try{let s=await fi(`${hi}/api/vitrine/listings/${jt}`);if(!s.ok)return;let o=await s.json();Array.isArray(o)&&o.length>n&&("Notification"in window&&Notification.permission==="granted"&&new Notification("Vitrine",{body:`${o.length-n} nouvelle(s) inscription(s) dans votre portail`}),n=o.length)}catch{}},5*60*1e3)}HM.init();let i=new URLSearchParams(window.location.search).get("listing");i&&(window.__VITRINE_OPEN__=i);let a=new Date().toISOString().slice(0,10);fi(`${hi}/api/webhooks/vitrine`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_token:jt,events:[{type:"portal.session_started",event_id:`sess-${jt}-${a}`}]})}).catch(()=>{})}let{default:t}=await Promise.resolve().then(()=>(BM(),NM));(0,zM.createRoot)(document.getElementById("root")).render((0,GM.jsx)(t,{}))})();})();
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
