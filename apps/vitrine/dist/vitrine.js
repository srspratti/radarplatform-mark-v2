(()=>{var XM=Object.create;var Ih=Object.defineProperty;var $M=Object.getOwnPropertyDescriptor;var YM=Object.getOwnPropertyNames;var ZM=Object.getPrototypeOf,KM=Object.prototype.hasOwnProperty;var ve=(t,e,n)=>()=>{if(n)throw n[0];try{return t&&(e=t(t=0)),e}catch(i){throw n=[i],i}};var Ji=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}},jM=(t,e)=>{for(var n in e)Ih(t,n,{get:e[n],enumerable:!0})},JM=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of YM(e))!KM.call(t,a)&&a!==n&&Ih(t,a,{get:()=>e[a],enumerable:!(i=$M(e,a))||i.enumerable});return t};var Ri=(t,e,n)=>(n=t!=null?XM(ZM(t)):{},JM(e||!t||!t.__esModule?Ih(n,"default",{value:t,enumerable:!0}):n,t));var H0=Ji(Ye=>{"use strict";var Lo=Symbol.for("react.element"),QM=Symbol.for("react.portal"),ew=Symbol.for("react.fragment"),tw=Symbol.for("react.strict_mode"),nw=Symbol.for("react.profiler"),iw=Symbol.for("react.provider"),aw=Symbol.for("react.context"),rw=Symbol.for("react.forward_ref"),sw=Symbol.for("react.suspense"),ow=Symbol.for("react.memo"),lw=Symbol.for("react.lazy"),R0=Symbol.iterator;function uw(t){return t===null||typeof t!="object"?null:(t=R0&&t[R0]||t["@@iterator"],typeof t=="function"?t:null)}var D0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F0=Object.assign,N0={};function ns(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||D0}ns.prototype.isReactComponent={};ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B0(){}B0.prototype=ns.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||D0}var Th=Eh.prototype=new B0;Th.constructor=Eh;F0(Th,ns.prototype);Th.isPureReactComponent=!0;var P0=Array.isArray,U0=Object.prototype.hasOwnProperty,Rh={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function z0(t,e,n){var i,a={},r=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(r=""+e.key),e)U0.call(e,i)&&!O0.hasOwnProperty(i)&&(a[i]=e[i]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];a.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)a[i]===void 0&&(a[i]=o[i]);return{$$typeof:Lo,type:t,key:r,ref:s,props:a,_owner:Rh.current}}function cw(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function dw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var k0=/\/+/g;function Ah(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dw(""+t.key):e.toString(36)}function Zu(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Lo:case QM:s=!0}}if(s)return s=t,a=a(s),t=i===""?"."+Ah(s,0):i,P0(a)?(n="",t!=null&&(n=t.replace(k0,"$&/")+"/"),Zu(a,e,n,"",function(u){return u})):a!=null&&(Ph(a)&&(a=cw(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(k0,"$&/")+"/")+t)),e.push(a)),1;if(s=0,i=i===""?".":i+":",P0(t))for(var o=0;o<t.length;o++){r=t[o];var l=i+Ah(r,o);s+=Zu(r,e,n,l,a)}else if(l=uw(t),typeof l=="function")for(t=l.call(t),o=0;!(r=t.next()).done;)r=r.value,l=i+Ah(r,o++),s+=Zu(r,e,n,l,a);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Yu(t,e,n){if(t==null)return t;var i=[],a=0;return Zu(t,i,"","",function(r){return e.call(n,r,a++)}),i}function fw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},Ku={transition:null},hw={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Ku,ReactCurrentOwner:Rh};function V0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Yu,forEach:function(t,e,n){Yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yu(t,function(){e++}),e},toArray:function(t){return Yu(t,function(e){return e})||[]},only:function(t){if(!Ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=ns;Ye.Fragment=ew;Ye.Profiler=nw;Ye.PureComponent=Eh;Ye.StrictMode=tw;Ye.Suspense=sw;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hw;Ye.act=V0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=F0({},t.props),a=t.key,r=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,s=Rh.current),e.key!==void 0&&(a=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)U0.call(e,l)&&!O0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Lo,type:t.type,key:a,ref:r,props:i,_owner:s}};Ye.createContext=function(t){return t={$$typeof:aw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iw,_context:t},t.Consumer=t};Ye.createElement=z0;Ye.createFactory=function(t){var e=z0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:rw,render:t}};Ye.isValidElement=Ph;Ye.lazy=function(t){return{$$typeof:lw,_payload:{_status:-1,_result:t},_init:fw}};Ye.memo=function(t,e){return{$$typeof:ow,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Ku.transition;Ku.transition={};try{t()}finally{Ku.transition=e}};Ye.unstable_act=V0;Ye.useCallback=function(t,e){return vn.current.useCallback(t,e)};Ye.useContext=function(t){return vn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return vn.current.useEffect(t,e)};Ye.useId=function(){return vn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return vn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};Ye.useRef=function(t){return vn.current.useRef(t)};Ye.useState=function(t){return vn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return vn.current.useTransition()};Ye.version="18.3.1"});var Ca=Ji((oP,G0)=>{"use strict";G0.exports=H0()});var Q0=Ji(xt=>{"use strict";function Nh(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,a=t[i];if(0<ju(a,e))t[i]=e,t[n]=a,n=i;else break e}}function fi(t){return t.length===0?null:t[0]}function Qu(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,a=t.length,r=a>>>1;i<r;){var s=2*(i+1)-1,o=t[s],l=s+1,u=t[l];if(0>ju(o,n))l<a&&0>ju(u,o)?(t[i]=u,t[l]=n,i=l):(t[i]=o,t[s]=n,i=s);else if(l<a&&0>ju(u,n))t[i]=u,t[l]=n,i=l;else break e}}return e}function ju(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(W0=performance,xt.unstable_now=function(){return W0.now()}):(kh=Date,q0=kh.now(),xt.unstable_now=function(){return kh.now()-q0});var W0,kh,q0,Pi=[],ba=[],pw=1,ei=null,cn=3,ec=!1,vr=!1,Ao=!1,Y0=typeof setTimeout=="function"?setTimeout:null,Z0=typeof clearTimeout=="function"?clearTimeout:null,X0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Bh(t){for(var e=fi(ba);e!==null;){if(e.callback===null)Qu(ba);else if(e.startTime<=t)Qu(ba),e.sortIndex=e.expirationTime,Nh(Pi,e);else break;e=fi(ba)}}function Uh(t){if(Ao=!1,Bh(t),!vr)if(fi(Pi)!==null)vr=!0,zh(Oh);else{var e=fi(ba);e!==null&&Vh(Uh,e.startTime-t)}}function Oh(t,e){vr=!1,Ao&&(Ao=!1,Z0(Eo),Eo=-1),ec=!0;var n=cn;try{for(Bh(e),ei=fi(Pi);ei!==null&&(!(ei.expirationTime>e)||t&&!J0());){var i=ei.callback;if(typeof i=="function"){ei.callback=null,cn=ei.priorityLevel;var a=i(ei.expirationTime<=e);e=xt.unstable_now(),typeof a=="function"?ei.callback=a:ei===fi(Pi)&&Qu(Pi),Bh(e)}else Qu(Pi);ei=fi(Pi)}if(ei!==null)var r=!0;else{var s=fi(ba);s!==null&&Vh(Uh,s.startTime-e),r=!1}return r}finally{ei=null,cn=n,ec=!1}}var tc=!1,Ju=null,Eo=-1,K0=5,j0=-1;function J0(){return!(xt.unstable_now()-j0<K0)}function Dh(){if(Ju!==null){var t=xt.unstable_now();j0=t;var e=!0;try{e=Ju(!0,t)}finally{e?Io():(tc=!1,Ju=null)}}else tc=!1}var Io;typeof X0=="function"?Io=function(){X0(Dh)}:typeof MessageChannel<"u"?(Fh=new MessageChannel,$0=Fh.port2,Fh.port1.onmessage=Dh,Io=function(){$0.postMessage(null)}):Io=function(){Y0(Dh,0)};var Fh,$0;function zh(t){Ju=t,tc||(tc=!0,Io())}function Vh(t,e){Eo=Y0(function(){t(xt.unstable_now())},e)}xt.unstable_IdlePriority=5;xt.unstable_ImmediatePriority=1;xt.unstable_LowPriority=4;xt.unstable_NormalPriority=3;xt.unstable_Profiling=null;xt.unstable_UserBlockingPriority=2;xt.unstable_cancelCallback=function(t){t.callback=null};xt.unstable_continueExecution=function(){vr||ec||(vr=!0,zh(Oh))};xt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K0=0<t?Math.floor(1e3/t):5};xt.unstable_getCurrentPriorityLevel=function(){return cn};xt.unstable_getFirstCallbackNode=function(){return fi(Pi)};xt.unstable_next=function(t){switch(cn){case 1:case 2:case 3:var e=3;break;default:e=cn}var n=cn;cn=e;try{return t()}finally{cn=n}};xt.unstable_pauseExecution=function(){};xt.unstable_requestPaint=function(){};xt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=cn;cn=t;try{return e()}finally{cn=n}};xt.unstable_scheduleCallback=function(t,e,n){var i=xt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,t={id:pw++,callback:e,priorityLevel:t,startTime:n,expirationTime:a,sortIndex:-1},n>i?(t.sortIndex=n,Nh(ba,t),fi(Pi)===null&&t===fi(ba)&&(Ao?(Z0(Eo),Eo=-1):Ao=!0,Vh(Uh,n-i))):(t.sortIndex=a,Nh(Pi,t),vr||ec||(vr=!0,zh(Oh))),t};xt.unstable_shouldYield=J0;xt.unstable_wrapCallback=function(t){var e=cn;return function(){var n=cn;cn=e;try{return t.apply(this,arguments)}finally{cn=n}}}});var tx=Ji((uP,ex)=>{"use strict";ex.exports=Q0()});var r_=Ji(Wn=>{"use strict";var mw=Ca(),Hn=tx();function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ly=new Set,jo={};function Pr(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(jo[t]=e,t=0;t<e.length;t++)ly.add(e[t])}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cp=Object.prototype.hasOwnProperty,gw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nx={},ix={};function xw(t){return cp.call(ix,t)?!0:cp.call(nx,t)?!1:gw.test(t)?ix[t]=!0:(nx[t]=!0,!1)}function yw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vw(t,e,n,i){if(e===null||typeof e>"u"||yw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,a,r,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=s}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var nm=/[\-:]([a-z])/g;function im(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nm,im);nn[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nm,im);nn[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nm,im);nn[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function am(t,e,n,i){var a=nn.hasOwnProperty(e)?nn[e]:null;(a!==null?a.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vw(e,n,a,i)&&(n=null),i||a===null?xw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):a.mustUseProperty?t[a.propertyName]=n===null?a.type===3?!1:"":n:(e=a.attributeName,i=a.attributeNamespace,n===null?t.removeAttribute(e):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var la=mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nc=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),rm=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),fp=Symbol.for("react.suspense"),hp=Symbol.for("react.suspense_list"),om=Symbol.for("react.memo"),Ia=Symbol.for("react.lazy"),dy=Symbol.for("react.offscreen"),ax=Symbol.iterator;function To(t){return t===null||typeof t!="object"?null:(t=ax&&t[ax]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Hh;function Uo(t){if(Hh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hh=e&&e[1]||""}return`
`+Hh+t}var Gh=!1;function Wh(t,e){if(!t||Gh)return"";Gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),r=i.stack.split(`
`),s=a.length-1,o=r.length-1;1<=s&&0<=o&&a[s]!==r[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==r[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==r[o]){var l=`
`+a[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Uo(t):""}function _w(t){switch(t.tag){case 5:return Uo(t.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return t=Wh(t.type,!1),t;case 11:return t=Wh(t.type.render,!1),t;case 1:return t=Wh(t.type,!0),t;default:return""}}function pp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case dp:return"Profiler";case rm:return"StrictMode";case fp:return"Suspense";case hp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cy:return(t.displayName||"Context")+".Consumer";case uy:return(t._context.displayName||"Context")+".Provider";case sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case om:return e=t.displayName||null,e!==null?e:pp(t.type)||"Memo";case Ia:e=t._payload,t=t._init;try{return pp(t(e))}catch{}}return null}function Sw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pp(e);case 8:return e===rm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Va(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mw(t){var e=fy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ic(t){t._valueTracker||(t._valueTracker=Mw(t))}function hy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fy(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mp(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rx(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Va(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function py(t,e){e=e.checked,e!=null&&am(t,"checked",e,!1)}function gp(t,e){py(t,e);var n=Va(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xp(t,e.type,n):e.hasOwnProperty("defaultValue")&&xp(t,e.type,Va(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sx(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xp(t,e,n){(e!=="number"||Rc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Va(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function yp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ox(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Oo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Va(n)}}function my(t,e){var n=Va(e.value),i=Va(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lx(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ac,xy=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,a){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,a)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ac=ac||document.createElement("div"),ac.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ac.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ww=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){ww.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function yy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function vy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,a=yy(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,a):t[n]=a}}var Cw=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _p(t,e){if(e){if(Cw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Sp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mp=null;function lm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wp=null,ys=null,vs=null;function ux(t){if(t=gl(t)){if(typeof wp!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=rd(e),wp(t.stateNode,t.type,e))}}function _y(t){ys?vs?vs.push(t):vs=[t]:ys=t}function Sy(){if(ys){var t=ys,e=vs;if(vs=ys=null,ux(t),e)for(t=0;t<e.length;t++)ux(e[t])}}function My(t,e){return t(e)}function wy(){}var qh=!1;function Cy(t,e,n){if(qh)return t(e,n);qh=!0;try{return My(t,e,n)}finally{qh=!1,(ys!==null||vs!==null)&&(wy(),Sy())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var i=rd(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Cp=!1;if(aa)try{is={},Object.defineProperty(is,"passive",{get:function(){Cp=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{Cp=!1}var is;function bw(t,e,n,i,a,r,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Go=!1,Pc=null,kc=!1,bp=null,Lw={onError:function(t){Go=!0,Pc=t}};function Iw(t,e,n,i,a,r,s,o,l){Go=!1,Pc=null,bw.apply(Lw,arguments)}function Aw(t,e,n,i,a,r,s,o,l){if(Iw.apply(this,arguments),Go){if(Go){var u=Pc;Go=!1,Pc=null}else throw Error(oe(198));kc||(kc=!0,bp=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function by(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cx(t){if(kr(t)!==t)throw Error(oe(188))}function Ew(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return cx(a),t;if(r===i)return cx(a),e;r=r.sibling}throw Error(oe(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Ly(t){return t=Ew(t),t!==null?Iy(t):null}function Iy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Iy(t);if(e!==null)return e;t=t.sibling}return null}var Ay=Hn.unstable_scheduleCallback,dx=Hn.unstable_cancelCallback,Tw=Hn.unstable_shouldYield,Rw=Hn.unstable_requestPaint,Ot=Hn.unstable_now,Pw=Hn.unstable_getCurrentPriorityLevel,um=Hn.unstable_ImmediatePriority,Ey=Hn.unstable_UserBlockingPriority,Dc=Hn.unstable_NormalPriority,kw=Hn.unstable_LowPriority,Ty=Hn.unstable_IdlePriority,td=null,Ni=null;function Dw(t){if(Ni&&typeof Ni.onCommitFiberRoot=="function")try{Ni.onCommitFiberRoot(td,t,void 0,(t.current.flags&128)===128)}catch{}}var xi=Math.clz32?Math.clz32:Bw,Fw=Math.log,Nw=Math.LN2;function Bw(t){return t>>>=0,t===0?32:31-(Fw(t)/Nw|0)|0}var rc=64,sc=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,a=t.suspendedLanes,r=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~a;o!==0?i=zo(o):(r&=s,r!==0&&(i=zo(r)))}else s=n&~a,s!==0?i=zo(s):r!==0&&(i=zo(r));if(i===0)return 0;if(e!==0&&e!==i&&(e&a)===0&&(a=i&-i,r=e&-e,a>=r||a===16&&(r&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-xi(e),a=1<<n,i|=t[n],e&=~a;return i}function Uw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ow(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes;0<r;){var s=31-xi(r),o=1<<s,l=a[s];l===-1?((o&n)===0||(o&i)!==0)&&(a[s]=Uw(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}}function Lp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ry(){var t=rc;return rc<<=1,(rc&4194240)===0&&(rc=64),t}function Xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xi(e),t[e]=n}function zw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var a=31-xi(n),r=1<<a;e[a]=0,i[a]=-1,t[a]=-1,n&=~r}}function cm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-xi(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}var lt=0;function Py(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ky,dm,Dy,Fy,Ny,Ip=!1,oc=[],ka=null,Da=null,Fa=null,el=new Map,tl=new Map,Ea=[],Vw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fx(t,e){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":el.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(e.pointerId)}}function Ro(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=gl(e),e!==null&&dm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Hw(t,e,n,i,a){switch(e){case"focusin":return ka=Ro(ka,t,e,n,i,a),!0;case"dragenter":return Da=Ro(Da,t,e,n,i,a),!0;case"mouseover":return Fa=Ro(Fa,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return el.set(r,Ro(el.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,tl.set(r,Ro(tl.get(r)||null,t,e,n,i,a)),!0}return!1}function By(t){var e=Mr(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=by(n),e!==null){t.blockedOn=e,Ny(t.priority,function(){Dy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ap(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mp=i,n.target.dispatchEvent(i),Mp=null}else return e=gl(n),e!==null&&dm(e),t.blockedOn=n,!1;e.shift()}return!0}function hx(t,e,n){Sc(t)&&n.delete(e)}function Gw(){Ip=!1,ka!==null&&Sc(ka)&&(ka=null),Da!==null&&Sc(Da)&&(Da=null),Fa!==null&&Sc(Fa)&&(Fa=null),el.forEach(hx),tl.forEach(hx)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,Ip||(Ip=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,Gw)))}function nl(t){function e(a){return Po(a,t)}if(0<oc.length){Po(oc[0],t);for(var n=1;n<oc.length;n++){var i=oc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ka!==null&&Po(ka,t),Da!==null&&Po(Da,t),Fa!==null&&Po(Fa,t),el.forEach(e),tl.forEach(e),n=0;n<Ea.length;n++)i=Ea[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ea.length&&(n=Ea[0],n.blockedOn===null);)By(n),n.blockedOn===null&&Ea.shift()}var _s=la.ReactCurrentBatchConfig,Nc=!0;function Ww(t,e,n,i){var a=lt,r=_s.transition;_s.transition=null;try{lt=1,fm(t,e,n,i)}finally{lt=a,_s.transition=r}}function qw(t,e,n,i){var a=lt,r=_s.transition;_s.transition=null;try{lt=4,fm(t,e,n,i)}finally{lt=a,_s.transition=r}}function fm(t,e,n,i){if(Nc){var a=Ap(t,e,n,i);if(a===null)Qh(t,e,i,Bc,n),fx(t,i);else if(Hw(a,t,e,n,i))i.stopPropagation();else if(fx(t,i),e&4&&-1<Vw.indexOf(t)){for(;a!==null;){var r=gl(a);if(r!==null&&ky(r),r=Ap(t,e,n,i),r===null&&Qh(t,e,i,Bc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Qh(t,e,i,null,n)}}var Bc=null;function Ap(t,e,n,i){if(Bc=null,t=lm(i),t=Mr(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=by(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bc=t,null}function Uy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pw()){case um:return 1;case Ey:return 4;case Dc:case kw:return 16;case Ty:return 536870912;default:return 16}default:return 16}}var Ra=null,hm=null,Mc=null;function Oy(){if(Mc)return Mc;var t,e=hm,n=e.length,i,a="value"in Ra?Ra.value:Ra.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return Mc=a.slice(t,1<i?1-i:void 0)}function wc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lc(){return!0}function px(){return!1}function Gn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?lc:px,this.isPropagationStopped=px,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lc)},persist:function(){},isPersistent:lc}),e}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pm=Gn(Ts),ml=Rt({},Ts,{view:0,detail:0}),Xw=Gn(ml),$h,Yh,ko,nd=Rt({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ko&&(ko&&t.type==="mousemove"?($h=t.screenX-ko.screenX,Yh=t.screenY-ko.screenY):Yh=$h=0,ko=t),$h)},movementY:function(t){return"movementY"in t?t.movementY:Yh}}),mx=Gn(nd),$w=Rt({},nd,{dataTransfer:0}),Yw=Gn($w),Zw=Rt({},ml,{relatedTarget:0}),Zh=Gn(Zw),Kw=Rt({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),jw=Gn(Kw),Jw=Rt({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qw=Gn(Jw),eC=Rt({},Ts,{data:0}),gx=Gn(eC),tC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iC[t])?!!e[t]:!1}function mm(){return aC}var rC=Rt({},ml,{key:function(t){if(t.key){var e=tC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mm,charCode:function(t){return t.type==="keypress"?wc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sC=Gn(rC),oC=Rt({},nd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xx=Gn(oC),lC=Rt({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mm}),uC=Gn(lC),cC=Rt({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),dC=Gn(cC),fC=Rt({},nd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hC=Gn(fC),pC=[9,13,27,32],gm=aa&&"CompositionEvent"in window,Wo=null;aa&&"documentMode"in document&&(Wo=document.documentMode);var mC=aa&&"TextEvent"in window&&!Wo,zy=aa&&(!gm||Wo&&8<Wo&&11>=Wo),yx=" ",vx=!1;function Vy(t,e){switch(t){case"keyup":return pC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function gC(t,e){switch(t){case"compositionend":return Hy(e);case"keypress":return e.which!==32?null:(vx=!0,yx);case"textInput":return t=e.data,t===yx&&vx?null:t;default:return null}}function xC(t,e){if(os)return t==="compositionend"||!gm&&Vy(t,e)?(t=Oy(),Mc=hm=Ra=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zy&&e.locale!=="ko"?null:e.data;default:return null}}var yC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _x(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yC[t.type]:e==="textarea"}function Gy(t,e,n,i){_y(i),e=Uc(e,"onChange"),0<e.length&&(n=new pm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,il=null;function vC(t){ev(t,0)}function id(t){var e=cs(t);if(hy(e))return t}function _C(t,e){if(t==="change")return e}var Wy=!1;aa&&(aa?(cc="oninput"in document,cc||(Kh=document.createElement("div"),Kh.setAttribute("oninput","return;"),cc=typeof Kh.oninput=="function"),uc=cc):uc=!1,Wy=uc&&(!document.documentMode||9<document.documentMode));var uc,cc,Kh;function Sx(){qo&&(qo.detachEvent("onpropertychange",qy),il=qo=null)}function qy(t){if(t.propertyName==="value"&&id(il)){var e=[];Gy(e,il,t,lm(t)),Cy(vC,e)}}function SC(t,e,n){t==="focusin"?(Sx(),qo=e,il=n,qo.attachEvent("onpropertychange",qy)):t==="focusout"&&Sx()}function MC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return id(il)}function wC(t,e){if(t==="click")return id(e)}function CC(t,e){if(t==="input"||t==="change")return id(e)}function bC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:bC;function al(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!cp.call(e,a)||!vi(t[a],e[a]))return!1}return!0}function Mx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wx(t,e){var n=Mx(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mx(n)}}function Xy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $y(){for(var t=window,e=Rc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rc(t.document)}return e}function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LC(t){var e=$y(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xy(n.ownerDocument.documentElement,n)){if(i!==null&&xm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var a=n.textContent.length,r=Math.min(i.start,a);i=i.end===void 0?r:Math.min(i.end,a),!t.extend&&r>i&&(a=i,i=r,r=a),a=wx(n,r);var s=wx(n,i);a&&s&&(t.rangeCount!==1||t.anchorNode!==a.node||t.anchorOffset!==a.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),t.removeAllRanges(),r>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var IC=aa&&"documentMode"in document&&11>=document.documentMode,ls=null,Ep=null,Xo=null,Tp=!1;function Cx(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tp||ls==null||ls!==Rc(i)||(i=ls,"selectionStart"in i&&xm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xo&&al(Xo,i)||(Xo=i,i=Uc(Ep,"onSelect"),0<i.length&&(e=new pm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function dc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:dc("Animation","AnimationEnd"),animationiteration:dc("Animation","AnimationIteration"),animationstart:dc("Animation","AnimationStart"),transitionend:dc("Transition","TransitionEnd")},jh={},Yy={};aa&&(Yy=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function ad(t){if(jh[t])return jh[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yy)return jh[t]=e[n];return t}var Zy=ad("animationend"),Ky=ad("animationiteration"),jy=ad("animationstart"),Jy=ad("transitionend"),Qy=new Map,bx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ga(t,e){Qy.set(t,e),Pr(e,[t])}for(fc=0;fc<bx.length;fc++)hc=bx[fc],Lx=hc.toLowerCase(),Ix=hc[0].toUpperCase()+hc.slice(1),Ga(Lx,"on"+Ix);var hc,Lx,Ix,fc;Ga(Zy,"onAnimationEnd");Ga(Ky,"onAnimationIteration");Ga(jy,"onAnimationStart");Ga("dblclick","onDoubleClick");Ga("focusin","onFocus");Ga("focusout","onBlur");Ga(Jy,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Ax(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Aw(i,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;Ax(a,o,u),r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;Ax(a,o,u),r=l}}}if(kc)throw t=bp,kc=!1,bp=null,t}function St(t,e){var n=e[Fp];n===void 0&&(n=e[Fp]=new Set);var i=t+"__bubble";n.has(i)||(tv(e,t,2,!1),n.add(i))}function Jh(t,e,n){var i=0;e&&(i|=4),tv(n,t,i,e)}var pc="_reactListening"+Math.random().toString(36).slice(2);function rl(t){if(!t[pc]){t[pc]=!0,ly.forEach(function(n){n!=="selectionchange"&&(AC.has(n)||Jh(n,!1,t),Jh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pc]||(e[pc]=!0,Jh("selectionchange",!1,e))}}function tv(t,e,n,i){switch(Uy(e)){case 1:var a=Ww;break;case 4:a=qw;break;default:a=fm}n=a.bind(null,e,n,t),a=void 0,!Cp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Qh(t,e,n,i,a){var r=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;s=s.return}for(;o!==null;){if(s=Mr(o),s===null)return;if(l=s.tag,l===5||l===6){i=r=s;continue e}o=o.parentNode}}i=i.return}Cy(function(){var u=r,d=lm(n),p=[];e:{var f=Qy.get(t);if(f!==void 0){var g=pm,v=t;switch(t){case"keypress":if(wc(n)===0)break e;case"keydown":case"keyup":g=sC;break;case"focusin":v="focus",g=Zh;break;case"focusout":v="blur",g=Zh;break;case"beforeblur":case"afterblur":g=Zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Yw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=uC;break;case Zy:case Ky:case jy:g=jw;break;case Jy:g=dC;break;case"scroll":g=Xw;break;case"wheel":g=hC;break;case"copy":case"cut":case"paste":g=Qw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xx}var C=(e&4)!==0,x=!C&&t==="scroll",h=C?f!==null?f+"Capture":null:f;C=[];for(var m=u,S;m!==null;){S=m;var M=S.stateNode;if(S.tag===5&&M!==null&&(S=M,h!==null&&(M=Qo(m,h),M!=null&&C.push(sl(m,M,S)))),x)break;m=m.return}0<C.length&&(f=new g(f,v,null,n,d),p.push({event:f,listeners:C}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Mp&&(v=n.relatedTarget||n.fromElement)&&(Mr(v)||v[ra]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Mr(v):null,v!==null&&(x=kr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(C=mx,M="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(C=xx,M="onPointerLeave",h="onPointerEnter",m="pointer"),x=g==null?f:cs(g),S=v==null?f:cs(v),f=new C(M,m+"leave",g,n,d),f.target=x,f.relatedTarget=S,M=null,Mr(d)===u&&(C=new C(h,m+"enter",v,n,d),C.target=S,C.relatedTarget=x,M=C),x=M,g&&v)t:{for(C=g,h=v,m=0,S=C;S;S=as(S))m++;for(S=0,M=h;M;M=as(M))S++;for(;0<m-S;)C=as(C),m--;for(;0<S-m;)h=as(h),S--;for(;m--;){if(C===h||h!==null&&C===h.alternate)break t;C=as(C),h=as(h)}C=null}else C=null;g!==null&&Ex(p,f,g,C,!1),v!==null&&x!==null&&Ex(p,x,v,C,!0)}}e:{if(f=u?cs(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var I=_C;else if(_x(f))if(Wy)I=CC;else{I=MC;var L=SC}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=wC);if(I&&(I=I(t,u))){Gy(p,I,n,d);break e}L&&L(t,f,u),t==="focusout"&&(L=f._wrapperState)&&L.controlled&&f.type==="number"&&xp(f,"number",f.value)}switch(L=u?cs(u):window,t){case"focusin":(_x(L)||L.contentEditable==="true")&&(ls=L,Ep=u,Xo=null);break;case"focusout":Xo=Ep=ls=null;break;case"mousedown":Tp=!0;break;case"contextmenu":case"mouseup":case"dragend":Tp=!1,Cx(p,n,d);break;case"selectionchange":if(IC)break;case"keydown":case"keyup":Cx(p,n,d)}var E;if(gm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else os?Vy(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(zy&&n.locale!=="ko"&&(os||_!=="onCompositionStart"?_==="onCompositionEnd"&&os&&(E=Oy()):(Ra=d,hm="value"in Ra?Ra.value:Ra.textContent,os=!0)),L=Uc(u,_),0<L.length&&(_=new gx(_,t,null,n,d),p.push({event:_,listeners:L}),E?_.data=E:(E=Hy(n),E!==null&&(_.data=E)))),(E=mC?gC(t,n):xC(t,n))&&(u=Uc(u,"onBeforeInput"),0<u.length&&(d=new gx("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=E))}ev(p,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=Qo(t,n),r!=null&&i.unshift(sl(t,r,a)),r=Qo(t,e),r!=null&&i.push(sl(t,r,a))),t=t.return}return i}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ex(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,a?(l=Qo(n,r),l!=null&&s.unshift(sl(n,l,o))):a||(l=Qo(n,r),l!=null&&s.push(sl(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var EC=/\r\n?/g,TC=/\u0000|\uFFFD/g;function Tx(t){return(typeof t=="string"?t:""+t).replace(EC,`
`).replace(TC,"")}function mc(t,e,n){if(e=Tx(e),Tx(t)!==e&&n)throw Error(oe(425))}function Oc(){}var Rp=null,Pp=null;function kp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dp=typeof setTimeout=="function"?setTimeout:void 0,RC=typeof clearTimeout=="function"?clearTimeout:void 0,Rx=typeof Promise=="function"?Promise:void 0,PC=typeof queueMicrotask=="function"?queueMicrotask:typeof Rx<"u"?function(t){return Rx.resolve(null).then(t).catch(kC)}:Dp;function kC(t){setTimeout(function(){throw t})}function ep(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(i===0){t.removeChild(a),nl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=a}while(n);nl(e)}function Na(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Px(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Fi="__reactFiber$"+Rs,ol="__reactProps$"+Rs,ra="__reactContainer$"+Rs,Fp="__reactEvents$"+Rs,DC="__reactListeners$"+Rs,FC="__reactHandles$"+Rs;function Mr(t){var e=t[Fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ra]||n[Fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Px(t);t!==null;){if(n=t[Fi])return n;t=Px(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[Fi]||t[ra],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function rd(t){return t[ol]||null}var Np=[],ds=-1;function Wa(t){return{current:t}}function Mt(t){0>ds||(t.current=Np[ds],Np[ds]=null,ds--)}function yt(t,e){ds++,Np[ds]=t.current,t.current=e}var Ha={},pn=Wa(Ha),In=Wa(!1),Ir=Ha;function Cs(t,e){var n=t.type.contextTypes;if(!n)return Ha;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in n)a[r]=e[r];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=a),a}function An(t){return t=t.childContextTypes,t!=null}function zc(){Mt(In),Mt(pn)}function kx(t,e,n){if(pn.current!==Ha)throw Error(oe(168));yt(pn,e),yt(In,n)}function nv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var a in i)if(!(a in e))throw Error(oe(108,Sw(t)||"Unknown",a));return Rt({},n,i)}function Vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ha,Ir=pn.current,yt(pn,t),yt(In,In.current),!0}function Dx(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=nv(t,e,Ir),i.__reactInternalMemoizedMergedChildContext=t,Mt(In),Mt(pn),yt(pn,t)):Mt(In),yt(In,n)}var ea=null,sd=!1,tp=!1;function iv(t){ea===null?ea=[t]:ea.push(t)}function NC(t){sd=!0,iv(t)}function qa(){if(!tp&&ea!==null){tp=!0;var t=0,e=lt;try{var n=ea;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ea=null,sd=!1}catch(a){throw ea!==null&&(ea=ea.slice(t+1)),Ay(um,qa),a}finally{lt=e,tp=!1}}return null}var fs=[],hs=0,Hc=null,Gc=0,ti=[],ni=0,Ar=null,ta=1,na="";function _r(t,e){fs[hs++]=Gc,fs[hs++]=Hc,Hc=t,Gc=e}function av(t,e,n){ti[ni++]=ta,ti[ni++]=na,ti[ni++]=Ar,Ar=t;var i=ta;t=na;var a=32-xi(i)-1;i&=~(1<<a),n+=1;var r=32-xi(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,ta=1<<32-xi(e)+a|n<<a|i,na=r+t}else ta=1<<r|n<<a|i,na=t}function ym(t){t.return!==null&&(_r(t,1),av(t,1,0))}function vm(t){for(;t===Hc;)Hc=fs[--hs],fs[hs]=null,Gc=fs[--hs],fs[hs]=null;for(;t===Ar;)Ar=ti[--ni],ti[ni]=null,na=ti[--ni],ti[ni]=null,ta=ti[--ni],ti[ni]=null}var Vn=null,zn=null,Ct=!1,gi=null;function rv(t,e){var n=ii(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fx(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vn=t,zn=Na(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vn=t,zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:ta,overflow:na}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ii(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vn=t,zn=null,!0):!1;default:return!1}}function Bp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Up(t){if(Ct){var e=zn;if(e){var n=e;if(!Fx(t,e)){if(Bp(t))throw Error(oe(418));e=Na(n.nextSibling);var i=Vn;e&&Fx(t,e)?rv(i,n):(t.flags=t.flags&-4097|2,Ct=!1,Vn=t)}}else{if(Bp(t))throw Error(oe(418));t.flags=t.flags&-4097|2,Ct=!1,Vn=t}}}function Nx(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function gc(t){if(t!==Vn)return!1;if(!Ct)return Nx(t),Ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kp(t.type,t.memoizedProps)),e&&(e=zn)){if(Bp(t))throw sv(),Error(oe(418));for(;e;)rv(t,e),e=Na(e.nextSibling)}if(Nx(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zn=Na(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zn=null}}else zn=Vn?Na(t.stateNode.nextSibling):null;return!0}function sv(){for(var t=zn;t;)t=Na(t.nextSibling)}function bs(){zn=Vn=null,Ct=!1}function _m(t){gi===null?gi=[t]:gi.push(t)}var BC=la.ReactCurrentBatchConfig;function Do(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var a=i,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(s){var o=a.refs;s===null?delete o[r]:o[r]=s},e._stringRef=r,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function xc(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bx(t){var e=t._init;return e(t._payload)}function ov(t){function e(h,m){if(t){var S=h.deletions;S===null?(h.deletions=[m],h.flags|=16):S.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function a(h,m){return h=za(h,m),h.index=0,h.sibling=null,h}function r(h,m,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<m?(h.flags|=2,m):S):(h.flags|=2,m)):(h.flags|=1048576,m)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,m,S,M){return m===null||m.tag!==6?(m=lp(S,h.mode,M),m.return=h,m):(m=a(m,S),m.return=h,m)}function l(h,m,S,M){var I=S.type;return I===ss?d(h,m,S.props.children,M,S.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ia&&Bx(I)===m.type)?(M=a(m,S.props),M.ref=Do(h,m,S),M.return=h,M):(M=Tc(S.type,S.key,S.props,null,h.mode,M),M.ref=Do(h,m,S),M.return=h,M)}function u(h,m,S,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=up(S,h.mode,M),m.return=h,m):(m=a(m,S.children||[]),m.return=h,m)}function d(h,m,S,M,I){return m===null||m.tag!==7?(m=Lr(S,h.mode,M,I),m.return=h,m):(m=a(m,S),m.return=h,m)}function p(h,m,S){if(typeof m=="string"&&m!==""||typeof m=="number")return m=lp(""+m,h.mode,S),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case nc:return S=Tc(m.type,m.key,m.props,null,h.mode,S),S.ref=Do(h,null,m),S.return=h,S;case rs:return m=up(m,h.mode,S),m.return=h,m;case Ia:var M=m._init;return p(h,M(m._payload),S)}if(Oo(m)||To(m))return m=Lr(m,h.mode,S,null),m.return=h,m;xc(h,m)}return null}function f(h,m,S,M){var I=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return I!==null?null:o(h,m,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nc:return S.key===I?l(h,m,S,M):null;case rs:return S.key===I?u(h,m,S,M):null;case Ia:return I=S._init,f(h,m,I(S._payload),M)}if(Oo(S)||To(S))return I!==null?null:d(h,m,S,M,null);xc(h,S)}return null}function g(h,m,S,M,I){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(S)||null,o(m,h,""+M,I);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case nc:return h=h.get(M.key===null?S:M.key)||null,l(m,h,M,I);case rs:return h=h.get(M.key===null?S:M.key)||null,u(m,h,M,I);case Ia:var L=M._init;return g(h,m,S,L(M._payload),I)}if(Oo(M)||To(M))return h=h.get(S)||null,d(m,h,M,I,null);xc(m,M)}return null}function v(h,m,S,M){for(var I=null,L=null,E=m,_=m=0,A=null;E!==null&&_<S.length;_++){E.index>_?(A=E,E=null):A=E.sibling;var P=f(h,E,S[_],M);if(P===null){E===null&&(E=A);break}t&&E&&P.alternate===null&&e(h,E),m=r(P,m,_),L===null?I=P:L.sibling=P,L=P,E=A}if(_===S.length)return n(h,E),Ct&&_r(h,_),I;if(E===null){for(;_<S.length;_++)E=p(h,S[_],M),E!==null&&(m=r(E,m,_),L===null?I=E:L.sibling=E,L=E);return Ct&&_r(h,_),I}for(E=i(h,E);_<S.length;_++)A=g(E,h,_,S[_],M),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?_:A.key),m=r(A,m,_),L===null?I=A:L.sibling=A,L=A);return t&&E.forEach(function(R){return e(h,R)}),Ct&&_r(h,_),I}function C(h,m,S,M){var I=To(S);if(typeof I!="function")throw Error(oe(150));if(S=I.call(S),S==null)throw Error(oe(151));for(var L=I=null,E=m,_=m=0,A=null,P=S.next();E!==null&&!P.done;_++,P=S.next()){E.index>_?(A=E,E=null):A=E.sibling;var R=f(h,E,P.value,M);if(R===null){E===null&&(E=A);break}t&&E&&R.alternate===null&&e(h,E),m=r(R,m,_),L===null?I=R:L.sibling=R,L=R,E=A}if(P.done)return n(h,E),Ct&&_r(h,_),I;if(E===null){for(;!P.done;_++,P=S.next())P=p(h,P.value,M),P!==null&&(m=r(P,m,_),L===null?I=P:L.sibling=P,L=P);return Ct&&_r(h,_),I}for(E=i(h,E);!P.done;_++,P=S.next())P=g(E,h,_,P.value,M),P!==null&&(t&&P.alternate!==null&&E.delete(P.key===null?_:P.key),m=r(P,m,_),L===null?I=P:L.sibling=P,L=P);return t&&E.forEach(function(D){return e(h,D)}),Ct&&_r(h,_),I}function x(h,m,S,M){if(typeof S=="object"&&S!==null&&S.type===ss&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case nc:e:{for(var I=S.key,L=m;L!==null;){if(L.key===I){if(I=S.type,I===ss){if(L.tag===7){n(h,L.sibling),m=a(L,S.props.children),m.return=h,h=m;break e}}else if(L.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ia&&Bx(I)===L.type){n(h,L.sibling),m=a(L,S.props),m.ref=Do(h,L,S),m.return=h,h=m;break e}n(h,L);break}else e(h,L);L=L.sibling}S.type===ss?(m=Lr(S.props.children,h.mode,M,S.key),m.return=h,h=m):(M=Tc(S.type,S.key,S.props,null,h.mode,M),M.ref=Do(h,m,S),M.return=h,h=M)}return s(h);case rs:e:{for(L=S.key;m!==null;){if(m.key===L)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(h,m.sibling),m=a(m,S.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=up(S,h.mode,M),m.return=h,h=m}return s(h);case Ia:return L=S._init,x(h,m,L(S._payload),M)}if(Oo(S))return v(h,m,S,M);if(To(S))return C(h,m,S,M);xc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,m!==null&&m.tag===6?(n(h,m.sibling),m=a(m,S),m.return=h,h=m):(n(h,m),m=lp(S,h.mode,M),m.return=h,h=m),s(h)):n(h,m)}return x}var Ls=ov(!0),lv=ov(!1),Wc=Wa(null),qc=null,ps=null,Sm=null;function Mm(){Sm=ps=qc=null}function wm(t){var e=Wc.current;Mt(Wc),t._currentValue=e}function Op(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){qc=t,Sm=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ln=!0),t.firstContext=null)}function ri(t){var e=t._currentValue;if(Sm!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(qc===null)throw Error(oe(308));ps=t,qc.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var wr=null;function Cm(t){wr===null?wr=[t]:wr.push(t)}function uv(t,e,n,i){var a=e.interleaved;return a===null?(n.next=n,Cm(e)):(n.next=a.next,a.next=n),e.interleaved=n,sa(t,i)}function sa(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Aa=!1;function bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ia(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(nt&2)!==0){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,sa(t,n)}return a=i.interleaved,a===null?(e.next=e,Cm(i)):(e.next=a.next,a.next=e),i.interleaved=e,sa(t,n)}function Cc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cm(t,n)}}function Ux(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xc(t,e,n,i){var a=t.updateQueue;Aa=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?r=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;s=0,d=u=l=null,o=r;do{var f=o.lane,g=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,C=o;switch(f=e,g=n,C.tag){case 1:if(v=C.payload,typeof v=="function"){p=v.call(g,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=C.payload,f=typeof v=="function"?v.call(g,p,f):v,f==null)break e;p=Rt({},p,f);break e;case 2:Aa=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=a.effects,f===null?a.effects=[o]:f.push(o))}else g={eventTime:g,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=g,l=p):d=d.next=g,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;f=o,o=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(d===null&&(l=p),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=d,e=a.shared.interleaved,e!==null){a=e;do s|=a.lane,a=a.next;while(a!==e)}else r===null&&(a.shared.lanes=0);Tr|=s,t.lanes=s,t.memoizedState=p}}function Ox(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!="function")throw Error(oe(191,a));a.call(i)}}}var xl={},Bi=Wa(xl),ll=Wa(xl),ul=Wa(xl);function Cr(t){if(t===xl)throw Error(oe(174));return t}function Lm(t,e){switch(yt(ul,e),yt(ll,t),yt(Bi,xl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vp(e,t)}Mt(Bi),yt(Bi,e)}function Is(){Mt(Bi),Mt(ll),Mt(ul)}function dv(t){Cr(ul.current);var e=Cr(Bi.current),n=vp(e,t.type);e!==n&&(yt(ll,t),yt(Bi,n))}function Im(t){ll.current===t&&(Mt(Bi),Mt(ll))}var Et=Wa(0);function $c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var np=[];function Am(){for(var t=0;t<np.length;t++)np[t]._workInProgressVersionPrimary=null;np.length=0}var bc=la.ReactCurrentDispatcher,ip=la.ReactCurrentBatchConfig,Er=0,Tt=null,qt=null,Zt=null,Yc=!1,$o=!1,cl=0,UC=0;function dn(){throw Error(oe(321))}function Em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function Tm(t,e,n,i,a,r){if(Er=r,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bc.current=t===null||t.memoizedState===null?HC:GC,t=n(i,a),$o){r=0;do{if($o=!1,cl=0,25<=r)throw Error(oe(301));r+=1,Zt=qt=null,e.updateQueue=null,bc.current=WC,t=n(i,a)}while($o)}if(bc.current=Zc,e=qt!==null&&qt.next!==null,Er=0,Zt=qt=Tt=null,Yc=!1,e)throw Error(oe(300));return t}function Rm(){var t=cl!==0;return cl=0,t}function Di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Tt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function si(){if(qt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var e=Zt===null?Tt.memoizedState:Zt.next;if(e!==null)Zt=e,qt=t;else{if(t===null)throw Error(oe(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Zt===null?Tt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function dl(t,e){return typeof e=="function"?e(t):e}function ap(t){var e=si(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=qt,a=i.baseQueue,r=n.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}i.baseQueue=a=r,n.pending=null}if(a!==null){r=a.next,i=i.baseState;var o=s=null,l=null,u=r;do{var d=u.lane;if((Er&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,s=i):l=l.next=p,Tt.lanes|=d,Tr|=d}u=u.next}while(u!==null&&u!==r);l===null?s=i:l.next=o,vi(i,e.memoizedState)||(Ln=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){a=t;do r=a.lane,Tt.lanes|=r,Tr|=r,a=a.next;while(a!==t)}else a===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rp(t){var e=si(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);vi(r,e.memoizedState)||(Ln=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function fv(){}function hv(t,e){var n=Tt,i=si(),a=e(),r=!vi(i.memoizedState,a);if(r&&(i.memoizedState=a,Ln=!0),i=i.queue,Pm(gv.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,fl(9,mv.bind(null,n,i,a,e),void 0,null),Kt===null)throw Error(oe(349));(Er&30)!==0||pv(n,e,a)}return a}function pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mv(t,e,n,i){e.value=n,e.getSnapshot=i,xv(e)&&yv(t)}function gv(t,e,n){return n(function(){xv(e)&&yv(t)})}function xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function yv(t){var e=sa(t,1);e!==null&&yi(e,t,1,-1)}function zx(t){var e=Di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:t},e.queue=t,t=t.dispatch=VC.bind(null,Tt,t),[e.memoizedState,t]}function fl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function vv(){return si().memoizedState}function Lc(t,e,n,i){var a=Di();Tt.flags|=t,a.memoizedState=fl(1|e,n,void 0,i===void 0?null:i)}function od(t,e,n,i){var a=si();i=i===void 0?null:i;var r=void 0;if(qt!==null){var s=qt.memoizedState;if(r=s.destroy,i!==null&&Em(i,s.deps)){a.memoizedState=fl(e,n,r,i);return}}Tt.flags|=t,a.memoizedState=fl(1|e,n,r,i)}function Vx(t,e){return Lc(8390656,8,t,e)}function Pm(t,e){return od(2048,8,t,e)}function _v(t,e){return od(4,2,t,e)}function Sv(t,e){return od(4,4,t,e)}function Mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wv(t,e,n){return n=n!=null?n.concat([t]):null,od(4,4,Mv.bind(null,e,t),n)}function km(){}function Cv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Em(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function bv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Em(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Lv(t,e,n){return(Er&21)===0?(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=n):(vi(n,e)||(n=Ry(),Tt.lanes|=n,Tr|=n,t.baseState=!0),e)}function OC(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=ip.transition;ip.transition={};try{t(!1),e()}finally{lt=n,ip.transition=i}}function Iv(){return si().memoizedState}function zC(t,e,n){var i=Oa(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Av(t))Ev(e,n);else if(n=uv(t,e,n,i),n!==null){var a=Sn();yi(n,t,i,a),Tv(n,e,i)}}function VC(t,e,n){var i=Oa(t),a={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(t))Ev(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,vi(o,s)){var l=e.interleaved;l===null?(a.next=a,Cm(e)):(a.next=l.next,l.next=a),e.interleaved=a;return}}catch{}n=uv(t,e,a,i),n!==null&&(a=Sn(),yi(n,t,i,a),Tv(n,e,i))}}function Av(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function Ev(t,e){$o=Yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tv(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cm(t,n)}}var Zc={readContext:ri,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},HC={readContext:ri,useCallback:function(t,e){return Di().memoizedState=[t,e===void 0?null:e],t},useContext:ri,useEffect:Vx,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4194308,4,Mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=Di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zC.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=Di();return t={current:t},e.memoizedState=t},useState:zx,useDebugValue:km,useDeferredValue:function(t){return Di().memoizedState=t},useTransition:function(){var t=zx(!1),e=t[0];return t=OC.bind(null,t[1]),Di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,a=Di();if(Ct){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Kt===null)throw Error(oe(349));(Er&30)!==0||pv(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,Vx(gv.bind(null,i,r,t),[t]),i.flags|=2048,fl(9,mv.bind(null,i,r,n,e),void 0,null),n},useId:function(){var t=Di(),e=Kt.identifierPrefix;if(Ct){var n=na,i=ta;n=(i&~(1<<32-xi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=cl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=UC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GC={readContext:ri,useCallback:Cv,useContext:ri,useEffect:Pm,useImperativeHandle:wv,useInsertionEffect:_v,useLayoutEffect:Sv,useMemo:bv,useReducer:ap,useRef:vv,useState:function(){return ap(dl)},useDebugValue:km,useDeferredValue:function(t){var e=si();return Lv(e,qt.memoizedState,t)},useTransition:function(){var t=ap(dl)[0],e=si().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:hv,useId:Iv,unstable_isNewReconciler:!1},WC={readContext:ri,useCallback:Cv,useContext:ri,useEffect:Pm,useImperativeHandle:wv,useInsertionEffect:_v,useLayoutEffect:Sv,useMemo:bv,useReducer:rp,useRef:vv,useState:function(){return rp(dl)},useDebugValue:km,useDeferredValue:function(t){var e=si();return qt===null?e.memoizedState=t:Lv(e,qt.memoizedState,t)},useTransition:function(){var t=rp(dl)[0],e=si().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:hv,useId:Iv,unstable_isNewReconciler:!1};function pi(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ld={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Sn(),a=Oa(t),r=ia(i,a);r.payload=e,n!=null&&(r.callback=n),e=Ba(t,r,a),e!==null&&(yi(e,t,a,i),Cc(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Sn(),a=Oa(t),r=ia(i,a);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Ba(t,r,a),e!==null&&(yi(e,t,a,i),Cc(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Sn(),i=Oa(t),a=ia(n,i);a.tag=2,e!=null&&(a.callback=e),e=Ba(t,a,i),e!==null&&(yi(e,t,i,n),Cc(e,t,i))}};function Hx(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!al(n,i)||!al(a,r):!0}function Rv(t,e,n){var i=!1,a=Ha,r=e.contextType;return typeof r=="object"&&r!==null?r=ri(r):(a=An(e)?Ir:pn.current,i=e.contextTypes,r=(i=i!=null)?Cs(t,a):Ha),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ld,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=r),e}function Gx(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ld.enqueueReplaceState(e,e.state,null)}function Vp(t,e,n,i){var a=t.stateNode;a.props=n,a.state=t.memoizedState,a.refs={},bm(t);var r=e.contextType;typeof r=="object"&&r!==null?a.context=ri(r):(r=An(e)?Ir:pn.current,a.context=Cs(t,r)),a.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(zp(t,e,r,n),a.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&ld.enqueueReplaceState(a,a.state,null),Xc(t,n,a,i),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=_w(i),i=i.return;while(i);var a=n}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:a,digest:null}}function sp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qC=typeof WeakMap=="function"?WeakMap:Map;function Pv(t,e,n){n=ia(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jc||(jc=!0,Jp=i),Hp(t,e)},n}function kv(t,e,n){n=ia(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var a=e.value;n.payload=function(){return i(a)},n.callback=function(){Hp(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Hp(t,e),typeof i!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Wx(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qC;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(a.add(n),t=rb.bind(null,t,e,n),e.then(t,t))}function qx(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xx(t,e,n,i,a){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ia(-1,1),e.tag=2,Ba(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=a,t)}var XC=la.ReactCurrentOwner,Ln=!1;function _n(t,e,n,i){e.child=t===null?lv(e,null,n,i):Ls(e,t.child,n,i)}function $x(t,e,n,i,a){n=n.render;var r=e.ref;return Ss(e,a),i=Tm(t,e,n,i,r,a),n=Rm(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,oa(t,e,a)):(Ct&&n&&ym(e),e.flags|=1,_n(t,e,i,a),e.child)}function Yx(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!Vm(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,Dv(t,e,r,i,a)):(t=Tc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,(t.lanes&a)===0){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(s,i)&&t.ref===e.ref)return oa(t,e,a)}return e.flags|=1,t=za(r,i),t.ref=e.ref,t.return=e,e.child=t}function Dv(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(al(r,i)&&t.ref===e.ref)if(Ln=!1,e.pendingProps=i=r,(t.lanes&a)!==0)(t.flags&131072)!==0&&(Ln=!0);else return e.lanes=t.lanes,oa(t,e,a)}return Gp(t,e,n,i,a)}function Fv(t,e,n){var i=e.pendingProps,a=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(gs,On),On|=n;else{if((n&1073741824)===0)return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(gs,On),On|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:n,yt(gs,On),On|=i}else r!==null?(i=r.baseLanes|n,e.memoizedState=null):i=n,yt(gs,On),On|=i;return _n(t,e,a,n),e.child}function Nv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gp(t,e,n,i,a){var r=An(n)?Ir:pn.current;return r=Cs(e,r),Ss(e,a),n=Tm(t,e,n,i,r,a),i=Rm(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,oa(t,e,a)):(Ct&&i&&ym(e),e.flags|=1,_n(t,e,n,a),e.child)}function Zx(t,e,n,i,a){if(An(n)){var r=!0;Vc(e)}else r=!1;if(Ss(e,a),e.stateNode===null)Ic(t,e),Rv(e,n,i),Vp(e,n,i,a),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ri(u):(u=An(n)?Ir:pn.current,u=Cs(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Gx(e,s,i,u),Aa=!1;var f=e.memoizedState;s.state=f,Xc(e,i,s,a),l=e.memoizedState,o!==i||f!==l||In.current||Aa?(typeof d=="function"&&(zp(e,n,d,i),l=e.memoizedState),(o=Aa||Hx(e,n,o,i,f,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,cv(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:pi(e.type,o),s.props=u,p=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=An(n)?Ir:pn.current,l=Cs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Gx(e,s,i,l),Aa=!1,f=e.memoizedState,s.state=f,Xc(e,i,s,a);var v=e.memoizedState;o!==p||f!==v||In.current||Aa?(typeof g=="function"&&(zp(e,n,g,i),v=e.memoizedState),(u=Aa||Hx(e,n,u,i,f,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),s.props=i,s.state=v,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Wp(t,e,n,i,r,a)}function Wp(t,e,n,i,a,r){Nv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return a&&Dx(e,n,!1),oa(t,e,r);i=e.stateNode,XC.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ls(e,t.child,null,r),e.child=Ls(e,null,o,r)):_n(t,e,o,r),e.memoizedState=i.state,a&&Dx(e,n,!0),e.child}function Bv(t){var e=t.stateNode;e.pendingContext?kx(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kx(t,e.context,!1),Lm(t,e.containerInfo)}function Kx(t,e,n,i,a){return bs(),_m(a),e.flags|=256,_n(t,e,n,i),e.child}var qp={dehydrated:null,treeContext:null,retryLane:0};function Xp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uv(t,e,n){var i=e.pendingProps,a=Et.current,r=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(a&2)!==0),o?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(a|=1),yt(Et,a&1),t===null)return Up(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=i.children,t=i.fallback,r?(i=e.mode,r=e.child,s={mode:"hidden",children:s},(i&1)===0&&r!==null?(r.childLanes=0,r.pendingProps=s):r=dd(s,i,0,null),t=Lr(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=Xp(n),e.memoizedState=qp,t):Dm(e,s));if(a=t.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return $C(t,e,s,i,o,a,n);if(r){r=i.fallback,s=e.mode,a=t.child,o=a.sibling;var l={mode:"hidden",children:i.children};return(s&1)===0&&e.child!==a?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=za(a,l),i.subtreeFlags=a.subtreeFlags&14680064),o!==null?r=za(o,r):(r=Lr(r,s,n,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,i=r,r=e.child,s=t.child.memoizedState,s=s===null?Xp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},r.memoizedState=s,r.childLanes=t.childLanes&~n,e.memoizedState=qp,i}return r=t.child,t=r.sibling,i=za(r,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dm(t,e){return e=dd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yc(t,e,n,i){return i!==null&&_m(i),Ls(e,t.child,null,n),t=Dm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $C(t,e,n,i,a,r,s){if(n)return e.flags&256?(e.flags&=-257,i=sp(Error(oe(422))),yc(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=i.fallback,a=e.mode,i=dd({mode:"visible",children:i.children},a,0,null),r=Lr(r,a,s,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,(e.mode&1)!==0&&Ls(e,t.child,null,s),e.child.memoizedState=Xp(s),e.memoizedState=qp,r);if((e.mode&1)===0)return yc(t,e,s,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var o=i.dgst;return i=o,r=Error(oe(419)),i=sp(r,i,void 0),yc(t,e,s,i)}if(o=(s&t.childLanes)!==0,Ln||o){if(i=Kt,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))!==0?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,sa(t,a),yi(i,t,a,-1))}return zm(),i=sp(Error(oe(421))),yc(t,e,s,i)}return a.data==="$?"?(e.flags|=128,e.child=t.child,e=sb.bind(null,t),a._reactRetry=e,null):(t=r.treeContext,zn=Na(a.nextSibling),Vn=e,Ct=!0,gi=null,t!==null&&(ti[ni++]=ta,ti[ni++]=na,ti[ni++]=Ar,ta=t.id,na=t.overflow,Ar=e),e=Dm(e,i.children),e.flags|=4096,e)}function jx(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Op(t.return,e,n)}function op(t,e,n,i,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function Ov(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;if(_n(t,e,i.children,n),i=Et.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jx(t,n,e);else if(t.tag===19)jx(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Et,i),(e.mode&1)===0)e.memoizedState=null;else switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&$c(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),op(e,!1,a,n,r);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&$c(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}op(e,!0,n,null,r);break;case"together":op(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ic(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function oa(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=za(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=za(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YC(t,e,n){switch(e.tag){case 3:Bv(e),bs();break;case 5:dv(e);break;case 1:An(e.type)&&Vc(e);break;case 4:Lm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,a=e.memoizedProps.value;yt(Wc,i._currentValue),i._currentValue=a;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Et,Et.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Uv(t,e,n):(yt(Et,Et.current&1),t=oa(t,e,n),t!==null?t.sibling:null);yt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Ov(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),yt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return oa(t,e,n)}var zv,$p,Vv,Hv;zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$p=function(){};Vv=function(t,e,n,i){var a=t.memoizedProps;if(a!==i){t=e.stateNode,Cr(Bi.current);var r=null;switch(n){case"input":a=mp(t,a),i=mp(t,i),r=[];break;case"select":a=Rt({},a,{value:void 0}),i=Rt({},i,{value:void 0}),r=[];break;case"textarea":a=yp(t,a),i=yp(t,i),r=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Oc)}_p(n,i);var s;n=null;for(u in a)if(!i.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in i){var l=i[u];if(o=a?.[u],i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(r||(r=[]),r.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(r=r||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&St("scroll",t),r||o===l||(r=[])):(r=r||[]).push(u,l))}n&&(r=r||[]).push("style",n);var u=r;(e.updateQueue=u)&&(e.flags|=4)}};Hv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Fo(t,e){if(!Ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function fn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ZC(t,e,n){var i=e.pendingProps;switch(vm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return An(e.type)&&zc(),fn(e),null;case 3:return i=e.stateNode,Is(),Mt(In),Mt(pn),Am(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,gi!==null&&(tm(gi),gi=null))),$p(t,e),fn(e),null;case 5:Im(e);var a=Cr(ul.current);if(n=e.type,t!==null&&e.stateNode!=null)Vv(t,e,n,i,a),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return fn(e),null}if(t=Cr(Bi.current),gc(e)){i=e.stateNode,n=e.type;var r=e.memoizedProps;switch(i[Fi]=e,i[ol]=r,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(a=0;a<Vo.length;a++)St(Vo[a],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":rx(i,r),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},St("invalid",i);break;case"textarea":ox(i,r),St("invalid",i)}_p(n,r),a=null;for(var s in r)if(r.hasOwnProperty(s)){var o=r[s];s==="children"?typeof o=="string"?i.textContent!==o&&(r.suppressHydrationWarning!==!0&&mc(i.textContent,o,t),a=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&mc(i.textContent,o,t),a=["children",""+o]):jo.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&St("scroll",i)}switch(n){case"input":ic(i),sx(i,r,!0);break;case"textarea":ic(i),lx(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=Oc)}i=a,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Fi]=e,t[ol]=i,zv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Sp(n,i),n){case"dialog":St("cancel",t),St("close",t),a=i;break;case"iframe":case"object":case"embed":St("load",t),a=i;break;case"video":case"audio":for(a=0;a<Vo.length;a++)St(Vo[a],t);a=i;break;case"source":St("error",t),a=i;break;case"img":case"image":case"link":St("error",t),St("load",t),a=i;break;case"details":St("toggle",t),a=i;break;case"input":rx(t,i),a=mp(t,i),St("invalid",t);break;case"option":a=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},a=Rt({},i,{value:void 0}),St("invalid",t);break;case"textarea":ox(t,i),a=yp(t,i),St("invalid",t);break;default:a=i}_p(n,a),o=a;for(r in o)if(o.hasOwnProperty(r)){var l=o[r];r==="style"?vy(t,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xy(t,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jo(t,l):typeof l=="number"&&Jo(t,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(jo.hasOwnProperty(r)?l!=null&&r==="onScroll"&&St("scroll",t):l!=null&&am(t,r,l,s))}switch(n){case"input":ic(t),sx(t,i,!1);break;case"textarea":ic(t),lx(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Va(i.value));break;case"select":t.multiple=!!i.multiple,r=i.value,r!=null?xs(t,!!i.multiple,r,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=Oc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(t&&e.stateNode!=null)Hv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Cr(ul.current),Cr(Bi.current),gc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Fi]=e,(r=i.nodeValue!==n)&&(t=Vn,t!==null))switch(t.tag){case 3:mc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mc(i.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Fi]=e,e.stateNode=i}return fn(e),null;case 13:if(Mt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ct&&zn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)sv(),bs(),e.flags|=98560,r=!1;else if(r=gc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(oe(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(oe(317));r[Fi]=e}else bs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fn(e),r=!1}else gi!==null&&(tm(gi),gi=null),r=!0;if(!r)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Et.current&1)!==0?Xt===0&&(Xt=3):zm())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return Is(),$p(t,e),t===null&&rl(e.stateNode.containerInfo),fn(e),null;case 10:return wm(e.type._context),fn(e),null;case 17:return An(e.type)&&zc(),fn(e),null;case 19:if(Mt(Et),r=e.memoizedState,r===null)return fn(e),null;if(i=(e.flags&128)!==0,s=r.rendering,s===null)if(i)Fo(r,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=$c(t),s!==null){for(e.flags|=128,Fo(r,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)r=n,t=i,r.flags&=14680066,s=r.alternate,s===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=s.childLanes,r.lanes=s.lanes,r.child=s.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=s.memoizedProps,r.memoizedState=s.memoizedState,r.updateQueue=s.updateQueue,r.type=s.type,t=s.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Et,Et.current&1|2),e.child}t=t.sibling}r.tail!==null&&Ot()>Es&&(e.flags|=128,i=!0,Fo(r,!1),e.lanes=4194304)}else{if(!i)if(t=$c(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!Ct)return fn(e),null}else 2*Ot()-r.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,i=!0,Fo(r,!1),e.lanes=4194304);r.isBackwards?(s.sibling=e.child,e.child=s):(n=r.last,n!==null?n.sibling=s:e.child=s,r.last=s)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ot(),e.sibling=null,n=Et.current,yt(Et,i?n&1|2:n&1),e):(fn(e),null);case 22:case 23:return Om(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(On&1073741824)!==0&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function KC(t,e){switch(vm(e),e.tag){case 1:return An(e.type)&&zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),Mt(In),Mt(pn),Am(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Im(e),null;case 13:if(Mt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Et),null;case 4:return Is(),null;case 10:return wm(e.type._context),null;case 22:case 23:return Om(),null;case 24:return null;default:return null}}var vc=!1,hn=!1,jC=typeof WeakSet=="function"?WeakSet:Set,Te=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){kt(t,e,i)}else n.current=null}function Yp(t,e,n){try{n()}catch(i){kt(t,e,i)}}var Jx=!1;function JC(t,e){if(Rp=Nc,t=$y(),xm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,d=0,p=t,f=null;t:for(;;){for(var g;p!==n||a!==0&&p.nodeType!==3||(o=s+a),p!==r||i!==0&&p.nodeType!==3||(l=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===n&&++u===a&&(o=s),f===r&&++d===i&&(l=s),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pp={focusedElem:t,selectionRange:n},Nc=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var C=v.memoizedProps,x=v.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?C:pi(e.type,C),x);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(M){kt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return v=Jx,Jx=!1,v}function Yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var r=a.destroy;a.destroy=void 0,r!==void 0&&Yp(e,n,r)}a=a.next}while(a!==i)}}function ud(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Zp(t){var e=t.ref;if(e!==null){var n=t.stateNode;t.tag,t=n,typeof e=="function"?e(t):e.current=t}}function Gv(t){var e=t.alternate;e!==null&&(t.alternate=null,Gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fi],delete e[ol],delete e[Fp],delete e[DC],delete e[FC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wv(t){return t.tag===5||t.tag===3||t.tag===4}function Qx(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oc));else if(i!==4&&(t=t.child,t!==null))for(Kp(t,e,n),t=t.sibling;t!==null;)Kp(t,e,n),t=t.sibling}function jp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jp(t,e,n),t=t.sibling;t!==null;)jp(t,e,n),t=t.sibling}var en=null,mi=!1;function La(t,e,n){for(n=n.child;n!==null;)qv(t,e,n),n=n.sibling}function qv(t,e,n){if(Ni&&typeof Ni.onCommitFiberUnmount=="function")try{Ni.onCommitFiberUnmount(td,n)}catch{}switch(n.tag){case 5:hn||ms(n,e);case 6:var i=en,a=mi;en=null,La(t,e,n),en=i,mi=a,en!==null&&(mi?(t=en,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(mi?(t=en,n=n.stateNode,t.nodeType===8?ep(t.parentNode,n):t.nodeType===1&&ep(t,n),nl(t)):ep(en,n.stateNode));break;case 4:i=en,a=mi,en=n.stateNode.containerInfo,mi=!0,La(t,e,n),en=i,mi=a;break;case 0:case 11:case 14:case 15:if(!hn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var r=a,s=r.destroy;r=r.tag,s!==void 0&&((r&2)!==0||(r&4)!==0)&&Yp(n,e,s),a=a.next}while(a!==i)}La(t,e,n);break;case 1:if(!hn&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){kt(n,e,o)}La(t,e,n);break;case 21:La(t,e,n);break;case 22:n.mode&1?(hn=(i=hn)||n.memoizedState!==null,La(t,e,n),hn=i):La(t,e,n);break;default:La(t,e,n)}}function ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jC),e.forEach(function(i){var a=ob.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}}function hi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:en=o.stateNode,mi=!1;break e;case 3:en=o.stateNode.containerInfo,mi=!0;break e;case 4:en=o.stateNode.containerInfo,mi=!0;break e}o=o.return}if(en===null)throw Error(oe(160));qv(r,s,a),en=null,mi=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){kt(a,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xv(e,t),e=e.sibling}function Xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hi(e,t),ki(t),i&4){try{Yo(3,t,t.return),ud(3,t)}catch(C){kt(t,t.return,C)}try{Yo(5,t,t.return)}catch(C){kt(t,t.return,C)}}break;case 1:hi(e,t),ki(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(hi(e,t),ki(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var a=t.stateNode;try{Jo(a,"")}catch(C){kt(t,t.return,C)}}if(i&4&&(a=t.stateNode,a!=null)){var r=t.memoizedProps,s=n!==null?n.memoizedProps:r,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&py(a,r),Sp(o,s);var u=Sp(o,r);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?vy(a,p):d==="dangerouslySetInnerHTML"?xy(a,p):d==="children"?Jo(a,p):am(a,d,p,u)}switch(o){case"input":gp(a,r);break;case"textarea":my(a,r);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?xs(a,!!r.multiple,g,!1):f!==!!r.multiple&&(r.defaultValue!=null?xs(a,!!r.multiple,r.defaultValue,!0):xs(a,!!r.multiple,r.multiple?[]:"",!1))}a[ol]=r}catch(C){kt(t,t.return,C)}}break;case 6:if(hi(e,t),ki(t),i&4){if(t.stateNode===null)throw Error(oe(162));a=t.stateNode,r=t.memoizedProps;try{a.nodeValue=r}catch(C){kt(t,t.return,C)}}break;case 3:if(hi(e,t),ki(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{nl(e.containerInfo)}catch(C){kt(t,t.return,C)}break;case 4:hi(e,t),ki(t);break;case 13:hi(e,t),ki(t),a=t.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(Bm=Ot())),i&4&&ey(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(hn=(u=hn)||d,hi(e,t),hn=u):hi(e,t),ki(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(Te=t,d=t.child;d!==null;){for(p=Te=d;Te!==null;){switch(f=Te,g=f.child,f.tag){case 0:case 11:case 14:case 15:Yo(4,f,f.return);break;case 1:ms(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(C){kt(i,n,C)}}break;case 5:ms(f,f.return);break;case 22:if(f.memoizedState!==null){ny(p);continue}}g!==null?(g.return=f,Te=g):ny(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,u?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=yy("display",s))}catch(C){kt(t,t.return,C)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(C){kt(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hi(e,t),ki(t),i&4&&ey(t);break;case 21:break;default:hi(e,t),ki(t)}}function ki(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wv(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Jo(a,""),i.flags&=-33);var r=Qx(t);jp(t,r,a);break;case 3:case 4:var s=i.stateNode.containerInfo,o=Qx(t);Kp(t,o,s);break;default:throw Error(oe(161))}}catch(l){kt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QC(t,e,n){Te=t,$v(t,e,n)}function $v(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var a=Te,r=a.child;if(a.tag===22&&i){var s=a.memoizedState!==null||vc;if(!s){var o=a.alternate,l=o!==null&&o.memoizedState!==null||hn;o=vc;var u=hn;if(vc=s,(hn=l)&&!u)for(Te=a;Te!==null;)s=Te,l=s.child,s.tag===22&&s.memoizedState!==null?iy(a):l!==null?(l.return=s,Te=l):iy(a);for(;r!==null;)Te=r,$v(r,e,n),r=r.sibling;Te=a,vc=o,hn=u}ty(t,e,n)}else(a.subtreeFlags&8772)!==0&&r!==null?(r.return=a,Te=r):ty(t,e,n)}}function ty(t){for(;Te!==null;){var e=Te;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:hn||ud(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!hn)if(n===null)i.componentDidMount();else{var a=e.elementType===e.type?n.memoizedProps:pi(e.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&Ox(e,r,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ox(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&nl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}hn||e.flags&512&&Zp(e)}catch(f){kt(e,e.return,f)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function ny(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function iy(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ud(4,e)}catch(l){kt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var a=e.return;try{i.componentDidMount()}catch(l){kt(e,a,l)}}var r=e.return;try{Zp(e)}catch(l){kt(e,r,l)}break;case 5:var s=e.return;try{Zp(e)}catch(l){kt(e,s,l)}}}catch(l){kt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var eb=Math.ceil,Kc=la.ReactCurrentDispatcher,Fm=la.ReactCurrentOwner,ai=la.ReactCurrentBatchConfig,nt=0,Kt=null,Ht=null,tn=0,On=0,gs=Wa(0),Xt=0,hl=null,Tr=0,cd=0,Nm=0,Zo=null,bn=null,Bm=0,Es=1/0,Qi=null,jc=!1,Jp=null,Ua=null,_c=!1,Pa=null,Jc=0,Ko=0,Qp=null,Ac=-1,Ec=0;function Sn(){return(nt&6)!==0?Ot():Ac!==-1?Ac:Ac=Ot()}function Oa(t){return(t.mode&1)===0?1:(nt&2)!==0&&tn!==0?tn&-tn:BC.transition!==null?(Ec===0&&(Ec=Ry()),Ec):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Uy(t.type)),t)}function yi(t,e,n,i){if(50<Ko)throw Ko=0,Qp=null,Error(oe(185));pl(t,n,i),((nt&2)===0||t!==Kt)&&(t===Kt&&((nt&2)===0&&(cd|=n),Xt===4&&Ta(t,tn)),En(t,i),n===1&&nt===0&&(e.mode&1)===0&&(Es=Ot()+500,sd&&qa()))}function En(t,e){var n=t.callbackNode;Ow(t,e);var i=Fc(t,t===Kt?tn:0);if(i===0)n!==null&&dx(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&dx(n),e===1)t.tag===0?NC(ay.bind(null,t)):iv(ay.bind(null,t)),PC(function(){(nt&6)===0&&qa()}),n=null;else{switch(Py(i)){case 1:n=um;break;case 4:n=Ey;break;case 16:n=Dc;break;case 536870912:n=Ty;break;default:n=Dc}n=t_(n,Yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yv(t,e){if(Ac=-1,Ec=0,(nt&6)!==0)throw Error(oe(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=Fc(t,t===Kt?tn:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Qc(t,i);else{e=i;var a=nt;nt|=2;var r=Kv();(Kt!==t||tn!==e)&&(Qi=null,Es=Ot()+500,br(t,e));do try{ib();break}catch(o){Zv(t,o)}while(!0);Mm(),Kc.current=r,nt=a,Ht!==null?e=0:(Kt=null,tn=0,e=Xt)}if(e!==0){if(e===2&&(a=Lp(t),a!==0&&(i=a,e=em(t,a))),e===1)throw n=hl,br(t,0),Ta(t,i),En(t,Ot()),n;if(e===6)Ta(t,i);else{if(a=t.current.alternate,(i&30)===0&&!tb(a)&&(e=Qc(t,i),e===2&&(r=Lp(t),r!==0&&(i=r,e=em(t,r))),e===1))throw n=hl,br(t,0),Ta(t,i),En(t,Ot()),n;switch(t.finishedWork=a,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Sr(t,bn,Qi);break;case 3:if(Ta(t,i),(i&130023424)===i&&(e=Bm+500-Ot(),10<e)){if(Fc(t,0)!==0)break;if(a=t.suspendedLanes,(a&i)!==i){Sn(),t.pingedLanes|=t.suspendedLanes&a;break}t.timeoutHandle=Dp(Sr.bind(null,t,bn,Qi),e);break}Sr(t,bn,Qi);break;case 4:if(Ta(t,i),(i&4194240)===i)break;for(e=t.eventTimes,a=-1;0<i;){var s=31-xi(i);r=1<<s,s=e[s],s>a&&(a=s),i&=~r}if(i=a,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eb(i/1960))-i,10<i){t.timeoutHandle=Dp(Sr.bind(null,t,bn,Qi),i);break}Sr(t,bn,Qi);break;case 5:Sr(t,bn,Qi);break;default:throw Error(oe(329))}}}return En(t,Ot()),t.callbackNode===n?Yv.bind(null,t):null}function em(t,e){var n=Zo;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Qc(t,e),t!==2&&(e=bn,bn=n,e!==null&&tm(e)),t}function tm(t){bn===null?bn=t:bn.push.apply(bn,t)}function tb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!vi(r(),a))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ta(t,e){for(e&=~Nm,e&=~cd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xi(e),i=1<<n;t[n]=-1,e&=~i}}function ay(t){if((nt&6)!==0)throw Error(oe(327));Ms();var e=Fc(t,0);if((e&1)===0)return En(t,Ot()),null;var n=Qc(t,e);if(t.tag!==0&&n===2){var i=Lp(t);i!==0&&(e=i,n=em(t,i))}if(n===1)throw n=hl,br(t,0),Ta(t,e),En(t,Ot()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,bn,Qi),En(t,Ot()),null}function Um(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Es=Ot()+500,sd&&qa())}}function Rr(t){Pa!==null&&Pa.tag===0&&(nt&6)===0&&Ms();var e=nt;nt|=1;var n=ai.transition,i=lt;try{if(ai.transition=null,lt=1,t)return t()}finally{lt=i,ai.transition=n,nt=e,(nt&6)===0&&qa()}}function Om(){On=gs.current,Mt(gs)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RC(n)),Ht!==null)for(n=Ht.return;n!==null;){var i=n;switch(vm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zc();break;case 3:Is(),Mt(In),Mt(pn),Am();break;case 5:Im(i);break;case 4:Is();break;case 13:Mt(Et);break;case 19:Mt(Et);break;case 10:wm(i.type._context);break;case 22:case 23:Om()}n=n.return}if(Kt=t,Ht=t=za(t.current,null),tn=On=e,Xt=0,hl=null,Nm=cd=Tr=0,bn=Zo=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var a=i.next,r=n.pending;if(r!==null){var s=r.next;r.next=a,i.next=s}n.pending=i}wr=null}return t}function Zv(t,e){do{var n=Ht;try{if(Mm(),bc.current=Zc,Yc){for(var i=Tt.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Yc=!1}if(Er=0,Zt=qt=Tt=null,$o=!1,cl=0,Fm.current=null,n===null||n.return===null){Xt=1,hl=e,Ht=null;break}e:{var r=t,s=n.return,o=n,l=e;if(e=tn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=qx(s);if(g!==null){g.flags&=-257,Xx(g,s,o,r,e),g.mode&1&&Wx(r,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var C=new Set;C.add(l),e.updateQueue=C}else v.add(l);break e}else{if((e&1)===0){Wx(r,u,e),zm();break e}l=Error(oe(426))}}else if(Ct&&o.mode&1){var x=qx(s);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),Xx(x,s,o,r,e),_m(As(l,o));break e}}r=l=As(l,o),Xt!==4&&(Xt=2),Zo===null?Zo=[r]:Zo.push(r),r=s;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var h=Pv(r,l,e);Ux(r,h);break e;case 1:o=l;var m=r.type,S=r.stateNode;if((r.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Ua===null||!Ua.has(S)))){r.flags|=65536,e&=-e,r.lanes|=e;var M=kv(r,o,e);Ux(r,M);break e}}r=r.return}while(r!==null)}Jv(n)}catch(I){e=I,Ht===n&&n!==null&&(Ht=n=n.return);continue}break}while(!0)}function Kv(){var t=Kc.current;return Kc.current=Zc,t===null?Zc:t}function zm(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Kt===null||(Tr&268435455)===0&&(cd&268435455)===0||Ta(Kt,tn)}function Qc(t,e){var n=nt;nt|=2;var i=Kv();(Kt!==t||tn!==e)&&(Qi=null,br(t,e));do try{nb();break}catch(a){Zv(t,a)}while(!0);if(Mm(),nt=n,Kc.current=i,Ht!==null)throw Error(oe(261));return Kt=null,tn=0,Xt}function nb(){for(;Ht!==null;)jv(Ht)}function ib(){for(;Ht!==null&&!Tw();)jv(Ht)}function jv(t){var e=e_(t.alternate,t,On);t.memoizedProps=t.pendingProps,e===null?Jv(t):Ht=e,Fm.current=null}function Jv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=ZC(n,e,On),n!==null){Ht=n;return}}else{if(n=KC(n,e),n!==null){n.flags&=32767,Ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,Ht=null;return}}if(e=e.sibling,e!==null){Ht=e;return}Ht=e=t}while(e!==null);Xt===0&&(Xt=5)}function Sr(t,e,n){var i=lt,a=ai.transition;try{ai.transition=null,lt=1,ab(t,e,n,i)}finally{ai.transition=a,lt=i}return null}function ab(t,e,n,i){do Ms();while(Pa!==null);if((nt&6)!==0)throw Error(oe(327));n=t.finishedWork;var a=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(zw(t,r),t===Kt&&(Ht=Kt=null,tn=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||_c||(_c=!0,t_(Dc,function(){return Ms(),null})),r=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||r){r=ai.transition,ai.transition=null;var s=lt;lt=1;var o=nt;nt|=4,Fm.current=null,JC(t,n),Xv(n,t),LC(Pp),Nc=!!Rp,Pp=Rp=null,t.current=n,QC(n,t,a),Rw(),nt=o,lt=s,ai.transition=r}else t.current=n;if(_c&&(_c=!1,Pa=t,Jc=a),r=t.pendingLanes,r===0&&(Ua=null),Dw(n.stateNode,i),En(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)a=e[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(jc)throw jc=!1,t=Jp,Jp=null,t;return(Jc&1)!==0&&t.tag!==0&&Ms(),r=t.pendingLanes,(r&1)!==0?t===Qp?Ko++:(Ko=0,Qp=t):Ko=0,qa(),null}function Ms(){if(Pa!==null){var t=Py(Jc),e=ai.transition,n=lt;try{if(ai.transition=null,lt=16>t?16:t,Pa===null)var i=!1;else{if(t=Pa,Pa=null,Jc=0,(nt&6)!==0)throw Error(oe(331));var a=nt;for(nt|=4,Te=t.current;Te!==null;){var r=Te,s=r.child;if((Te.flags&16)!==0){var o=r.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Te=u;Te!==null;){var d=Te;switch(d.tag){case 0:case 11:case 15:Yo(8,d,r)}var p=d.child;if(p!==null)p.return=d,Te=p;else for(;Te!==null;){d=Te;var f=d.sibling,g=d.return;if(Gv(d),d===u){Te=null;break}if(f!==null){f.return=g,Te=f;break}Te=g}}}var v=r.alternate;if(v!==null){var C=v.child;if(C!==null){v.child=null;do{var x=C.sibling;C.sibling=null,C=x}while(C!==null)}}Te=r}}if((r.subtreeFlags&2064)!==0&&s!==null)s.return=r,Te=s;else e:for(;Te!==null;){if(r=Te,(r.flags&2048)!==0)switch(r.tag){case 0:case 11:case 15:Yo(9,r,r.return)}var h=r.sibling;if(h!==null){h.return=r.return,Te=h;break e}Te=r.return}}var m=t.current;for(Te=m;Te!==null;){s=Te;var S=s.child;if((s.subtreeFlags&2064)!==0&&S!==null)S.return=s,Te=S;else e:for(s=m;Te!==null;){if(o=Te,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:ud(9,o)}}catch(I){kt(o,o.return,I)}if(o===s){Te=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Te=M;break e}Te=o.return}}if(nt=a,qa(),Ni&&typeof Ni.onPostCommitFiberRoot=="function")try{Ni.onPostCommitFiberRoot(td,t)}catch{}i=!0}return i}finally{lt=n,ai.transition=e}}return!1}function ry(t,e,n){e=As(n,e),e=Pv(t,e,1),t=Ba(t,e,1),e=Sn(),t!==null&&(pl(t,1,e),En(t,e))}function kt(t,e,n){if(t.tag===3)ry(t,t,n);else for(;e!==null;){if(e.tag===3){ry(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ua===null||!Ua.has(i))){t=As(n,t),t=kv(e,t,1),e=Ba(e,t,1),t=Sn(),e!==null&&(pl(e,1,t),En(e,t));break}}e=e.return}}function rb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Sn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(tn&n)===n&&(Xt===4||Xt===3&&(tn&130023424)===tn&&500>Ot()-Bm?br(t,0):Nm|=n),En(t,e)}function Qv(t,e){e===0&&((t.mode&1)===0?e=1:(e=sc,sc<<=1,(sc&130023424)===0&&(sc=4194304)));var n=Sn();t=sa(t,e),t!==null&&(pl(t,e,n),En(t,n))}function sb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qv(t,n)}function ob(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Qv(t,n)}var e_;e_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||In.current)Ln=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ln=!1,YC(t,e,n);Ln=(t.flags&131072)!==0}else Ln=!1,Ct&&(e.flags&1048576)!==0&&av(e,Gc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ic(t,e),t=e.pendingProps;var a=Cs(e,pn.current);Ss(e,n),a=Tm(null,e,i,t,a,n);var r=Rm();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(r=!0,Vc(e)):r=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,bm(e),a.updater=ld,e.stateNode=a,a._reactInternals=e,Vp(e,i,t,n),e=Wp(null,e,i,!0,r,n)):(e.tag=0,Ct&&r&&ym(e),_n(null,e,a,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ic(t,e),t=e.pendingProps,a=i._init,i=a(i._payload),e.type=i,a=e.tag=ub(i),t=pi(i,t),a){case 0:e=Gp(null,e,i,t,n);break e;case 1:e=Zx(null,e,i,t,n);break e;case 11:e=$x(null,e,i,t,n);break e;case 14:e=Yx(null,e,i,pi(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:pi(i,a),Gp(t,e,i,a,n);case 1:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:pi(i,a),Zx(t,e,i,a,n);case 3:e:{if(Bv(e),t===null)throw Error(oe(387));i=e.pendingProps,r=e.memoizedState,a=r.element,cv(t,e),Xc(e,i,null,n);var s=e.memoizedState;if(i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){a=As(Error(oe(423)),e),e=Kx(t,e,i,n,a);break e}else if(i!==a){a=As(Error(oe(424)),e),e=Kx(t,e,i,n,a);break e}else for(zn=Na(e.stateNode.containerInfo.firstChild),Vn=e,Ct=!0,gi=null,n=lv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===a){e=oa(t,e,n);break e}_n(t,e,i,n)}e=e.child}return e;case 5:return dv(e),t===null&&Up(e),i=e.type,a=e.pendingProps,r=t!==null?t.memoizedProps:null,s=a.children,kp(i,a)?s=null:r!==null&&kp(i,r)&&(e.flags|=32),Nv(t,e),_n(t,e,s,n),e.child;case 6:return t===null&&Up(e),null;case 13:return Uv(t,e,n);case 4:return Lm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ls(e,null,i,n):_n(t,e,i,n),e.child;case 11:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:pi(i,a),$x(t,e,i,a,n);case 7:return _n(t,e,e.pendingProps,n),e.child;case 8:return _n(t,e,e.pendingProps.children,n),e.child;case 12:return _n(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,a=e.pendingProps,r=e.memoizedProps,s=a.value,yt(Wc,i._currentValue),i._currentValue=s,r!==null)if(vi(r.value,s)){if(r.children===a.children&&!In.current){e=oa(t,e,n);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){s=r.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(r.tag===1){l=ia(-1,n&-n),l.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Op(r.return,n,e),o.lanes|=n;break}l=l.next}}else if(r.tag===10)s=r.type===e.type?null:r.child;else if(r.tag===18){if(s=r.return,s===null)throw Error(oe(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Op(s,n,e),s=r.sibling}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===e){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}_n(t,e,a.children,n),e=e.child}return e;case 9:return a=e.type,i=e.pendingProps.children,Ss(e,n),a=ri(a),i=i(a),e.flags|=1,_n(t,e,i,n),e.child;case 14:return i=e.type,a=pi(i,e.pendingProps),a=pi(i.type,a),Yx(t,e,i,a,n);case 15:return Dv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:pi(i,a),Ic(t,e),e.tag=1,An(i)?(t=!0,Vc(e)):t=!1,Ss(e,n),Rv(e,i,a),Vp(e,i,a,n),Wp(null,e,i,!0,t,n);case 19:return Ov(t,e,n);case 22:return Fv(t,e,n)}throw Error(oe(156,e.tag))};function t_(t,e){return Ay(t,e)}function lb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,e,n,i){return new lb(t,e,n,i)}function Vm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ub(t){if(typeof t=="function")return Vm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sm)return 11;if(t===om)return 14}return 2}function za(t,e){var n=t.alternate;return n===null?(n=ii(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tc(t,e,n,i,a,r){var s=2;if(i=t,typeof t=="function")Vm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ss:return Lr(n.children,a,r,e);case rm:s=8,a|=8;break;case dp:return t=ii(12,n,e,a|2),t.elementType=dp,t.lanes=r,t;case fp:return t=ii(13,n,e,a),t.elementType=fp,t.lanes=r,t;case hp:return t=ii(19,n,e,a),t.elementType=hp,t.lanes=r,t;case dy:return dd(n,a,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uy:s=10;break e;case cy:s=9;break e;case sm:s=11;break e;case om:s=14;break e;case Ia:s=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=ii(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function Lr(t,e,n,i){return t=ii(7,t,i,e),t.lanes=n,t}function dd(t,e,n,i){return t=ii(22,t,i,e),t.elementType=dy,t.lanes=n,t.stateNode={isHidden:!1},t}function lp(t,e,n){return t=ii(6,t,null,e),t.lanes=n,t}function up(t,e,n){return e=ii(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cb(t,e,n,i,a){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Hm(t,e,n,i,a,r,s,o,l){return t=new cb(t,e,n,o,l),e===1?(e=1,r===!0&&(e|=8)):e=0,r=ii(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bm(r),t}function db(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function n_(t){if(!t)return Ha;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(An(n))return nv(t,n,e)}return e}function i_(t,e,n,i,a,r,s,o,l){return t=Hm(n,i,!0,t,a,r,s,o,l),t.context=n_(null),n=t.current,i=Sn(),a=Oa(n),r=ia(i,a),r.callback=e??null,Ba(n,r,a),t.current.lanes=a,pl(t,a,i),En(t,i),t}function fd(t,e,n,i){var a=e.current,r=Sn(),s=Oa(a);return n=n_(n),e.context===null?e.context=n:e.pendingContext=n,e=ia(r,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ba(a,e,s),t!==null&&(yi(t,a,s,r),Cc(t,a,s)),s}function ed(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function sy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gm(t,e){sy(t,e),(t=t.alternate)&&sy(t,e)}function fb(){return null}var a_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wm(t){this._internalRoot=t}hd.prototype.render=Wm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));fd(t,e,null,null)};hd.prototype.unmount=Wm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){fd(null,t,null,null)}),e[ra]=null}};function hd(t){this._internalRoot=t}hd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ea.length&&e!==0&&e<Ea[n].priority;n++);Ea.splice(n,0,t),n===0&&By(t)}};function qm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oy(){}function hb(t,e,n,i,a){if(a){if(typeof i=="function"){var r=i;i=function(){var u=ed(s);r.call(u)}}var s=i_(e,i,t,0,null,!1,!1,"",oy);return t._reactRootContainer=s,t[ra]=s.current,rl(t.nodeType===8?t.parentNode:t),Rr(),s}for(;a=t.lastChild;)t.removeChild(a);if(typeof i=="function"){var o=i;i=function(){var u=ed(l);o.call(u)}}var l=Hm(t,0,!1,null,null,!1,!1,"",oy);return t._reactRootContainer=l,t[ra]=l.current,rl(t.nodeType===8?t.parentNode:t),Rr(function(){fd(e,l,n,i)}),l}function md(t,e,n,i,a){var r=n._reactRootContainer;if(r){var s=r;if(typeof a=="function"){var o=a;a=function(){var l=ed(s);o.call(l)}}fd(e,s,t,a)}else s=hb(n,e,t,a,i);return ed(s)}ky=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(cm(e,n|1),En(e,Ot()),(nt&6)===0&&(Es=Ot()+500,qa()))}break;case 13:Rr(function(){var i=sa(t,1);if(i!==null){var a=Sn();yi(i,t,1,a)}}),Gm(t,1)}};dm=function(t){if(t.tag===13){var e=sa(t,134217728);if(e!==null){var n=Sn();yi(e,t,134217728,n)}Gm(t,134217728)}};Dy=function(t){if(t.tag===13){var e=Oa(t),n=sa(t,e);if(n!==null){var i=Sn();yi(n,t,e,i)}Gm(t,e)}};Fy=function(){return lt};Ny=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};wp=function(t,e,n){switch(e){case"input":if(gp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=rd(i);if(!a)throw Error(oe(90));hy(i),gp(i,a)}}}break;case"textarea":my(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};My=Um;wy=Rr;var pb={usingClientEntryPoint:!1,Events:[gl,cs,rd,_y,Sy,Um]},No={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mb={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:la.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ly(t),t===null?null:t.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||fb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Bo.isDisabled&&Bo.supportsFiber))try{td=Bo.inject(mb),Ni=Bo}catch{}var Bo;Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pb;Wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qm(e))throw Error(oe(200));return db(t,e,null,n)};Wn.createRoot=function(t,e){if(!qm(t))throw Error(oe(299));var n=!1,i="",a=a_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Hm(t,1,!1,null,null,n,!1,i,a),t[ra]=e.current,rl(t.nodeType===8?t.parentNode:t),new Wm(e)};Wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Ly(e),t=t===null?null:t.stateNode,t};Wn.flushSync=function(t){return Rr(t)};Wn.hydrate=function(t,e,n){if(!pd(e))throw Error(oe(200));return md(null,t,e,!0,n)};Wn.hydrateRoot=function(t,e,n){if(!qm(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,a=!1,r="",s=a_;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=i_(e,null,t,1,n??null,a,!1,r,s),t[ra]=e.current,rl(t),i)for(t=0;t<i.length;t++)n=i[t],a=n._getVersion,a=a(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,a]:e.mutableSourceEagerHydrationData.push(n,a);return new hd(e)};Wn.render=function(t,e,n){if(!pd(e))throw Error(oe(200));return md(null,t,e,!1,n)};Wn.unmountComponentAtNode=function(t){if(!pd(t))throw Error(oe(40));return t._reactRootContainer?(Rr(function(){md(null,null,t,!1,function(){t._reactRootContainer=null,t[ra]=null})}),!0):!1};Wn.unstable_batchedUpdates=Um;Wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pd(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return md(t,e,n,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426"});var l_=Ji((dP,o_)=>{"use strict";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),o_.exports=r_()});var c_=Ji(Xm=>{"use strict";var u_=l_();Xm.createRoot=u_.createRoot,Xm.hydrateRoot=u_.hydrateRoot;var fP});var f_=Ji(gd=>{"use strict";var gb=Ca(),xb=Symbol.for("react.element"),yb=Symbol.for("react.fragment"),vb=Object.prototype.hasOwnProperty,_b=gb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sb={key:!0,ref:!0,__self:!0,__source:!0};function d_(t,e,n){var i,a={},r=null,s=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)vb.call(e,i)&&!Sb.hasOwnProperty(i)&&(a[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)a[i]===void 0&&(a[i]=e[i]);return{$$typeof:xb,type:t,key:r,ref:s,props:a,_owner:_b.current}}gd.Fragment=yb;gd.jsx=d_;gd.jsxs=d_});var yl=Ji((mP,h_)=>{"use strict";h_.exports=f_()});function Mb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wb(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hS(){let t=Il("canvas");return t.style.display="block",t}function Yg(...t){let e="THREE."+t.shift();$s?$s("log",e,...t):console.log(e,...t)}function pS(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=pS(t);let e="THREE."+t.shift();if($s)$s("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Be(...t){t=pS(t);let e="THREE."+t.shift();if($s)$s("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Or(...t){let e=t.join(" ");e in p_||(p_[e]=!0,Ue(...t))}function mS(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function eu(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[t&255]+mn[t>>8&255]+mn[t>>16&255]+mn[t>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function Cb(t,e){return(t%e+e)%e}function Ym(t,e,n){return(1-n)*t+n*e}function vl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bb(){let t={enabled:!0,workingColorSpace:bl,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ot&&(a.r=pa(a.r),a.g=pa(a.g),a.b=pa(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ot&&(a.r=Ws(a.r),a.g=Ws(a.g),a.b=Ws(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ya?Ll:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[bl]:{primaries:e,whitePoint:i,transfer:Ll,toXYZ:g_,fromXYZ:x_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:g_,fromXYZ:x_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),t}function pa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function jm(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Kd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}function eg(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function lg(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Fr.fromArray(t,r);let o=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),l=e.dot(Fr),u=n.dot(Fr),d=i.dot(Fr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}function Ob(t,e,n,i,a,r,s,o){let l;if(e.side===sn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===ma,o),l===null)return null;Rd.copy(o),Rd.applyMatrix4(t.matrixWorld);let u=n.ray.origin.distanceTo(Rd);return u<n.near||u>n.far?null:{distance:u,point:Rd.clone(),object:t}}function Pd(t,e,n,i,a,r,s,o,l,u){t.getVertexPosition(o,Id),t.getVertexPosition(l,Ad),t.getVertexPosition(u,Ed);let d=Ob(t,e,n,i,Id,Ad,Ed,A_);if(d){let p=new G;Ja.getBarycoord(A_,Id,Ad,Ed,p),a&&(d.uv=Ja.getInterpolatedAttribute(a,o,l,u,p,new $e)),r&&(d.uv1=Ja.getInterpolatedAttribute(r,o,l,u,p,new $e)),s&&(d.normal=Ja.getInterpolatedAttribute(s,o,l,u,p,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c:u,normal:new G,materialIndex:0};Ja.getNormal(Id,Ad,Ed,f.normal),d.face=f,d.barycoord=p}return d}function Wr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let a=t[n][i];if(E_(a))a.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(E_(a[0])){let r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function yn(t){let e={};for(let n=0;n<t.length;n++){let i=Wr(t[n]);for(let a in i)e[a]=i[a]}return e}function E_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Gb(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}function Dd(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function F_(t,e){return t.distance-e.distance}function Lg(t,e,n,i){let a=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(a=!1),a===!0&&i===!0){let r=t.children;for(let s=0,o=r.length;s<o;s++)Lg(r[s],e,n,!0)}}function Jg(t,e,n,i){let a=eL(i);switch(n){case Wg:return t*e;case Xg:return t*e/a.components*a.byteLength;case bf:return t*e/a.components*a.byteLength;case ur:return t*e*2/a.components*a.byteLength;case Lf:return t*e*2/a.components*a.byteLength;case qg:return t*e*3/a.components*a.byteLength;case li:return t*e*4/a.components*a.byteLength;case If:return t*e*4/a.components*a.byteLength;case Yl:case Zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:case Rf:return Math.max(t,16)*Math.max(e,8)/4;case Af:case Tf:return Math.max(t,8)*Math.max(e,8)/2;case Pf:case kf:case Ff:case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Df:case Jl:case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jf:case Qf:case eh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case th:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ql:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eL(t){switch(t){case kn:case zg:return{byteLength:1,components:1};case io:case Vg:case Xi:return{byteLength:2,components:1};case wf:case Cf:return{byteLength:2,components:4};case Ii:case Mf:case Ai:return{byteLength:4,components:1};case Hg:case Gg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var N_,Ag,B_,Wl,yf,no,ma,sn,Wi,qi,zr,Eg,Tg,Rg,U_,Qa,O_,z_,V_,H_,G_,W_,q_,X_,Ud,Od,$_,Y_,Z_,K_,j_,J_,Q_,eS,tS,zd,Vd,Hd,Vr,Gd,Wd,qd,Xd,Pg,nS,iS,Li,kg,Dg,Fg,ql,Ng,Bg,Ug,Og,sr,Gr,vf,_f,Xl,qs,zi,$d,Jt,aS,$l,rn,Sf,or,kn,zg,Vg,io,Mf,Ii,Ai,Xi,wf,Cf,ao,Hg,Gg,Wg,qg,li,Vi,lr,Xg,bf,ur,Lf,If,Yl,Zl,Kl,jl,Af,Ef,Tf,Rf,Pf,kf,Df,Ff,Nf,Jl,Bf,Uf,Of,zf,Vf,Hf,Gf,Wf,qf,Xf,$f,Yf,Zf,Kf,jf,Jf,Qf,eh,th,nh,Ql,ih,Cl,Yd,Bd,xg,yg,vg,_g,rS,ah,sS,ya,$n,bl,Ll,ot,Ur,Sg,oS,lS,uS,rh,cS,dS,sh,fS,Mg,$g,wi,Xs,p_,$s,gS,Hi,mn,$m,Zd,$e,Gi,G,Zm,m_,He,Km,g_,x_,Je,Ps,Kd,Lb,Ys,Ib,Jm,wn,Lt,jd,Zn,Al,Jd,bt,ks,_i,Ab,Eb,Xa,xd,qn,y_,v_,ga,Zs,Tb,__,Ds,ua,yd,_l,Rb,Pb,S_,M_,w_,C_,kb,Fs,Qm,xn,Ci,Db,Ks,xS,$a,vd,Ze,gn,El,Si,ca,tg,da,Ns,Bs,b_,ng,ig,ag,rg,sg,og,Ja,er,fa,Mi,_d,Us,Os,zs,Ya,Za,Dr,Sl,Sd,Md,Fr,Gt,wd,Fb,Yn,Tl,Rl,zt,Nb,Ml,ug,js,Bb,oi,cg,Vs,Xn,wl,jt,Kn,Ub,tr,ha,dg,Cd,Ka,fg,bd,hg,Pl,Hr,L_,Nr,Ld,I_,Id,Ad,Ed,pg,Td,A_,Rd,at,Qd,mg,zb,Vb,Oi,Br,Hb,kd,Js,kl,Dl,xa,ef,Fl,Rn,Nl,bi,Bl,Ul,nr,yS,Wb,qb,jn,tf,Pn,nf,af,ir,rf,sf,of,lf,Jn,ar,uf,cf,df,Ol,rr,ff,hf,vS,pf,Qs,zl,gg,T_,R_,mf,Fd,Nd,Ui,Vl,ja,P_,k_,an,wg,Hl,eo,Cg,to,Hs,Gs,gf,xf,Kg,Xb,jg,$b,Yb,Zb,Kb,jb,Jb,Qb,bg,wt,gP,D_,Gl,Ig,Qg=ve(()=>{N_=0,Ag=1,B_=2,Wl=1,yf=2,no=3,ma=0,sn=1,Wi=2,qi=0,zr=1,Eg=2,Tg=3,Rg=4,U_=5,Qa=100,O_=101,z_=102,V_=103,H_=104,G_=200,W_=201,q_=202,X_=203,Ud=204,Od=205,$_=206,Y_=207,Z_=208,K_=209,j_=210,J_=211,Q_=212,eS=213,tS=214,zd=0,Vd=1,Hd=2,Vr=3,Gd=4,Wd=5,qd=6,Xd=7,Pg=0,nS=1,iS=2,Li=0,kg=1,Dg=2,Fg=3,ql=4,Ng=5,Bg=6,Ug=7,Og=300,sr=301,Gr=302,vf=303,_f=304,Xl=306,qs=1e3,zi=1001,$d=1002,Jt=1003,aS=1004,$l=1005,rn=1006,Sf=1007,or=1008,kn=1009,zg=1010,Vg=1011,io=1012,Mf=1013,Ii=1014,Ai=1015,Xi=1016,wf=1017,Cf=1018,ao=1020,Hg=35902,Gg=35899,Wg=1021,qg=1022,li=1023,Vi=1026,lr=1027,Xg=1028,bf=1029,ur=1030,Lf=1031,If=1033,Yl=33776,Zl=33777,Kl=33778,jl=33779,Af=35840,Ef=35841,Tf=35842,Rf=35843,Pf=36196,kf=37492,Df=37496,Ff=37488,Nf=37489,Jl=37490,Bf=37491,Uf=37808,Of=37809,zf=37810,Vf=37811,Hf=37812,Gf=37813,Wf=37814,qf=37815,Xf=37816,$f=37817,Yf=37818,Zf=37819,Kf=37820,jf=37821,Jf=36492,Qf=36494,eh=36495,th=36283,nh=36284,Ql=36285,ih=36286,Cl=2300,Yd=2301,Bd=2302,xg=2303,yg=2400,vg=2401,_g=2402,rS=3200,ah=0,sS=1,ya="",$n="srgb",bl="srgb-linear",Ll="linear",ot="srgb",Ur=7680,Sg=519,oS=512,lS=513,uS=514,rh=515,cS=516,dS=517,sh=518,fS=519,Mg=35044,$g="300 es",wi=2e3,Xs=2001;p_={},$s=null;gS={[zd]:Vd,[Hd]:qd,[Gd]:Xd,[Vr]:Wd,[Vd]:zd,[qd]:Hd,[Xd]:Gd,[Wd]:Vr},Hi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let a=i[e];if(a!==void 0){let r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$m=Math.PI/180,Zd=180/Math.PI;$e=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gi=class{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],u=i[a+1],d=i[a+2],p=i[a+3],f=r[s+0],g=r[s+1],v=r[s+2],C=r[s+3];if(p!==C||l!==f||u!==g||d!==v){let x=l*f+u*g+d*v+p*C;x<0&&(f=-f,g=-g,v=-v,C=-C,x=-x);let h=1-o;if(x<.9995){let m=Math.acos(x),S=Math.sin(m);h=Math.sin(h*m)/S,o=Math.sin(o*m)/S,l=l*h+f*o,u=u*h+g*o,d=d*h+v*o,p=p*h+C*o}else{l=l*h+f*o,u=u*h+g*o,d=d*h+v*o,p=p*h+C*o;let m=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=m,u*=m,d*=m,p*=m}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,r,s){let o=i[a],l=i[a+1],u=i[a+2],d=i[a+3],p=r[s],f=r[s+1],g=r[s+2],v=r[s+3];return e[n]=o*v+d*p+l*g-u*f,e[n+1]=l*v+d*f+u*p-o*g,e[n+2]=u*v+d*g+o*f-l*p,e[n+3]=d*v-o*p-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(a/2),p=o(r/2),f=l(i/2),g=l(a/2),v=l(r/2);switch(s){case"XYZ":this._x=f*d*p+u*g*v,this._y=u*g*p-f*d*v,this._z=u*d*v+f*g*p,this._w=u*d*p-f*g*v;break;case"YXZ":this._x=f*d*p+u*g*v,this._y=u*g*p-f*d*v,this._z=u*d*v-f*g*p,this._w=u*d*p+f*g*v;break;case"ZXY":this._x=f*d*p-u*g*v,this._y=u*g*p+f*d*v,this._z=u*d*v+f*g*p,this._w=u*d*p-f*g*v;break;case"ZYX":this._x=f*d*p-u*g*v,this._y=u*g*p+f*d*v,this._z=u*d*v-f*g*p,this._w=u*d*p+f*g*v;break;case"YZX":this._x=f*d*p+u*g*v,this._y=u*g*p+f*d*v,this._z=u*d*v-f*g*p,this._w=u*d*p-f*g*v;break;case"XZY":this._x=f*d*p-u*g*v,this._y=u*g*p-f*d*v,this._z=u*d*v+f*g*p,this._w=u*d*p+f*g*v;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],u=n[2],d=n[6],p=n[10],f=i+o+p;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-u)*g,this._z=(s-a)*g}else if(i>o&&i>p){let g=2*Math.sqrt(1+i-o-p);this._w=(d-l)/g,this._x=.25*g,this._y=(a+s)/g,this._z=(r+u)/g}else if(o>p){let g=2*Math.sqrt(1+o-i-p);this._w=(r-u)/g,this._x=(a+s)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+p-i-o);this._w=(s-a)/g,this._x=(r+u)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*o+a*u-r*l,this._y=a*d+s*l+r*o-i*u,this._z=r*d+s*u+i*l-a*o,this._w=s*d-i*o-a*l-r*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){let u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(m_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(m_.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){let n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*a-o*i),d=2*(o*n-r*a),p=2*(r*i-s*n);return this.x=n+l*u+s*p-o*d,this.y=i+l*d+o*u-r*p,this.z=a+l*p+r*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zm.copy(this).projectOnVector(e),this.sub(Zm)}reflect(e){return this.sub(Zm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zm=new G,m_=new Gi,He=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,a,r,s,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,u)}set(e,n,i,a,r,s,o,l,u){let d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],d=i[4],p=i[7],f=i[2],g=i[5],v=i[8],C=a[0],x=a[3],h=a[6],m=a[1],S=a[4],M=a[7],I=a[2],L=a[5],E=a[8];return r[0]=s*C+o*m+l*I,r[3]=s*x+o*S+l*L,r[6]=s*h+o*M+l*E,r[1]=u*C+d*m+p*I,r[4]=u*x+d*S+p*L,r[7]=u*h+d*M+p*E,r[2]=f*C+g*m+v*I,r[5]=f*x+g*S+v*L,r[8]=f*h+g*M+v*E,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*o*u-i*r*d+i*o*l+a*r*u-a*s*l}invert(){let e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*s-o*u,f=o*l-d*r,g=u*r-s*l,v=n*p+i*f+a*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/v;return e[0]=p*C,e[1]=(a*u-d*i)*C,e[2]=(o*i-a*s)*C,e[3]=f*C,e[4]=(d*n-a*l)*C,e[5]=(a*r-o*n)*C,e[6]=g*C,e[7]=(i*l-u*n)*C,e[8]=(s*n-i*r)*C,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){let l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-a*u,a*l,-a*(-u*s+l*o)+o+n,0,0,1),this}scale(e,n){return Or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Km.makeScale(e,n)),this}rotate(e){return Or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Km.makeRotation(-e)),this}translate(e,n){return Or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Km.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Km=new He,g_=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x_=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je=bb();Kd=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=Il("canvas")),Ps.width=e.width,Ps.height=e.height;let a=Ps.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Il("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=pa(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pa(n[i]/255)*255):n[i]=pa(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lb=0,Ys=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=eu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(jm(a[s].image)):r.push(jm(a[s]))}else r=jm(a);i.url=r}return n||(e.images[this.uuid]=i),i}};Ib=0,Jm=new G,wn=class t extends Hi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=zi,a=zi,r=rn,s=or,o=li,l=kn,u=t.DEFAULT_ANISOTROPY,d=ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=eu(),this.name="",this.source=new Ys(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jm).x}get height(){return this.source.getSize(Jm).y}get depth(){return this.source.getSize(Jm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Og;wn.DEFAULT_ANISOTROPY=1;Lt=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r,l=e.elements,u=l[0],d=l[4],p=l[8],f=l[1],g=l[5],v=l[9],C=l[2],x=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-C)<.01&&Math.abs(v-x)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+C)<.1&&Math.abs(v+x)<.1&&Math.abs(u+g+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(u+1)/2,M=(g+1)/2,I=(h+1)/2,L=(d+f)/4,E=(p+C)/4,_=(v+x)/4;return S>M&&S>I?S<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(S),a=L/i,r=E/i):M>I?M<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(M),i=L/a,r=_/a):I<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(I),i=E/r,a=_/r),this.set(i,a,r,n),this}let m=Math.sqrt((x-v)*(x-v)+(p-C)*(p-C)+(f-d)*(f-d));return Math.abs(m)<.001&&(m=1),this.x=(x-v)/m,this.y=(p-C)/m,this.z=(f-d)/m,this.w=Math.acos((u+g+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jd=class extends Hi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n),this.textures=[];let a={width:e,height:n,depth:i.depth},r=new wn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},e.textures[n].image);this.textures[n].source=new Ys(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends jd{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Al=class extends wn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jd=class extends wn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bt=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,a,r,s,o,l,u,d,p,f,g,v,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,u,d,p,f,g,v,C,x)}set(e,n,i,a,r,s,o,l,u,d,p,f,g,v,C,x){let h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=a,h[1]=r,h[5]=s,h[9]=o,h[13]=l,h[2]=u,h[6]=d,h[10]=p,h[14]=f,h[3]=g,h[7]=v,h[11]=C,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),s=1/ks.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),u=Math.sin(a),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=s*d,g=s*p,v=o*d,C=o*p;n[0]=l*d,n[4]=-l*p,n[8]=u,n[1]=g+v*u,n[5]=f-C*u,n[9]=-o*l,n[2]=C-f*u,n[6]=v+g*u,n[10]=s*l}else if(e.order==="YXZ"){let f=l*d,g=l*p,v=u*d,C=u*p;n[0]=f+C*o,n[4]=v*o-g,n[8]=s*u,n[1]=s*p,n[5]=s*d,n[9]=-o,n[2]=g*o-v,n[6]=C+f*o,n[10]=s*l}else if(e.order==="ZXY"){let f=l*d,g=l*p,v=u*d,C=u*p;n[0]=f-C*o,n[4]=-s*p,n[8]=v+g*o,n[1]=g+v*o,n[5]=s*d,n[9]=C-f*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){let f=s*d,g=s*p,v=o*d,C=o*p;n[0]=l*d,n[4]=v*u-g,n[8]=f*u+C,n[1]=l*p,n[5]=C*u+f,n[9]=g*u-v,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){let f=s*l,g=s*u,v=o*l,C=o*u;n[0]=l*d,n[4]=C-f*p,n[8]=v*p+g,n[1]=p,n[5]=s*d,n[9]=-o*d,n[2]=-u*d,n[6]=g*p+v,n[10]=f-C*p}else if(e.order==="XZY"){let f=s*l,g=s*u,v=o*l,C=o*u;n[0]=l*d,n[4]=-p,n[8]=u*d,n[1]=f*p+C,n[5]=s*d,n[9]=g*p-v,n[2]=v*p-g,n[6]=o*d,n[10]=C*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ab,e,Eb)}lookAt(e,n,i){let a=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Xa.crossVectors(i,qn),Xa.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Xa.crossVectors(i,qn)),Xa.normalize(),xd.crossVectors(qn,Xa),a[0]=Xa.x,a[4]=xd.x,a[8]=qn.x,a[1]=Xa.y,a[5]=xd.y,a[9]=qn.y,a[2]=Xa.z,a[6]=xd.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],d=i[1],p=i[5],f=i[9],g=i[13],v=i[2],C=i[6],x=i[10],h=i[14],m=i[3],S=i[7],M=i[11],I=i[15],L=a[0],E=a[4],_=a[8],A=a[12],P=a[1],R=a[5],D=a[9],z=a[13],V=a[2],O=a[6],Z=a[10],Y=a[14],U=a[3],Q=a[7],de=a[11],se=a[15];return r[0]=s*L+o*P+l*V+u*U,r[4]=s*E+o*R+l*O+u*Q,r[8]=s*_+o*D+l*Z+u*de,r[12]=s*A+o*z+l*Y+u*se,r[1]=d*L+p*P+f*V+g*U,r[5]=d*E+p*R+f*O+g*Q,r[9]=d*_+p*D+f*Z+g*de,r[13]=d*A+p*z+f*Y+g*se,r[2]=v*L+C*P+x*V+h*U,r[6]=v*E+C*R+x*O+h*Q,r[10]=v*_+C*D+x*Z+h*de,r[14]=v*A+C*z+x*Y+h*se,r[3]=m*L+S*P+M*V+I*U,r[7]=m*E+S*R+M*O+I*Q,r[11]=m*_+S*D+M*Z+I*de,r[15]=m*A+S*z+M*Y+I*se,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],f=e[10],g=e[14],v=e[3],C=e[7],x=e[11],h=e[15],m=l*g-u*f,S=o*g-u*p,M=o*f-l*p,I=s*g-u*d,L=s*f-l*d,E=s*p-o*d;return n*(C*m-x*S+h*M)-i*(v*m-x*I+h*L)+a*(v*S-C*I+h*E)-r*(v*M-C*L+x*E)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return n*(s*d-o*u)-i*(r*d-o*l)+a*(r*u-s*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],f=e[10],g=e[11],v=e[12],C=e[13],x=e[14],h=e[15],m=n*o-i*s,S=n*l-a*s,M=n*u-r*s,I=i*l-a*o,L=i*u-r*o,E=a*u-r*l,_=d*C-p*v,A=d*x-f*v,P=d*h-g*v,R=p*x-f*C,D=p*h-g*C,z=f*h-g*x,V=m*z-S*D+M*R+I*P-L*A+E*_;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/V;return e[0]=(o*z-l*D+u*R)*O,e[1]=(a*D-i*z-r*R)*O,e[2]=(C*E-x*L+h*I)*O,e[3]=(f*L-p*E-g*I)*O,e[4]=(l*P-s*z-u*A)*O,e[5]=(n*z-a*P+r*A)*O,e[6]=(x*M-v*E-h*S)*O,e[7]=(d*E-f*M+g*S)*O,e[8]=(s*D-o*P+u*_)*O,e[9]=(i*P-n*D-r*_)*O,e[10]=(v*L-C*M+h*m)*O,e[11]=(p*M-d*L-g*m)*O,e[12]=(o*A-s*R-l*_)*O,e[13]=(n*R-i*A+a*_)*O,e[14]=(C*S-v*I-x*m)*O,e[15]=(d*I-p*S+f*m)*O,this}scale(e){let n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,u=r*s,d=r*o;return this.set(u*s+i,u*o-a*l,u*l+a*o,0,u*o+a*l,d*o+i,d*l-a*s,0,u*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){let a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,u=r+r,d=s+s,p=o+o,f=r*u,g=r*d,v=r*p,C=s*d,x=s*p,h=o*p,m=l*u,S=l*d,M=l*p,I=i.x,L=i.y,E=i.z;return a[0]=(1-(C+h))*I,a[1]=(g+M)*I,a[2]=(v-S)*I,a[3]=0,a[4]=(g-M)*L,a[5]=(1-(f+h))*L,a[6]=(x+m)*L,a[7]=0,a[8]=(v+S)*E,a[9]=(x-m)*E,a[10]=(1-(f+C))*E,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=ks.set(a[0],a[1],a[2]).length(),o=ks.set(a[4],a[5],a[6]).length(),l=ks.set(a[8],a[9],a[10]).length();r<0&&(s=-s),_i.copy(this);let u=1/s,d=1/o,p=1/l;return _i.elements[0]*=u,_i.elements[1]*=u,_i.elements[2]*=u,_i.elements[4]*=d,_i.elements[5]*=d,_i.elements[6]*=d,_i.elements[8]*=p,_i.elements[9]*=p,_i.elements[10]*=p,n.setFromRotationMatrix(_i),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=wi,l=!1){let u=this.elements,d=2*r/(n-e),p=2*r/(i-a),f=(n+e)/(n-e),g=(i+a)/(i-a),v,C;if(l)v=r/(s-r),C=s*r/(s-r);else if(o===wi)v=-(s+r)/(s-r),C=-2*s*r/(s-r);else if(o===Xs)v=-s/(s-r),C=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=C,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=wi,l=!1){let u=this.elements,d=2/(n-e),p=2/(i-a),f=-(n+e)/(n-e),g=-(i+a)/(i-a),v,C;if(l)v=1/(s-r),C=s/(s-r);else if(o===wi)v=-2/(s-r),C=-(s+r)/(s-r);else if(o===Xs)v=-1/(s-r),C=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=v,u[14]=C,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},ks=new G,_i=new bt,Ab=new G(0,0,0),Eb=new G(1,1,1),Xa=new G,xd=new G,qn=new G,y_=new bt,v_=new Gi,ga=class t{constructor(e=0,n=0,i=0,a=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],u=a[5],d=a[9],p=a[2],f=a[6],g=a[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return v_.setFromEuler(this),this.setFromQuaternion(v_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ga.DEFAULT_ORDER="XYZ";Zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tb=0,__=new G,Ds=new Gi,ua=new bt,yd=new G,_l=new G,Rb=new G,Pb=new Gi,S_=new G(1,0,0),M_=new G(0,1,0),w_=new G(0,0,1),C_={type:"added"},kb={type:"removed"},Fs={type:"childadded",child:null},Qm={type:"childremoved",child:null},xn=class t extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=eu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new G,n=new ga,i=new Gi,a=new G(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new bt},normalMatrix:{value:new He}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(S_,e)}rotateY(e){return this.rotateOnAxis(M_,e)}rotateZ(e){return this.rotateOnAxis(w_,e)}translateOnAxis(e,n){return __.copy(e).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(S_,e)}translateY(e){return this.translateOnAxis(M_,e)}translateZ(e){return this.translateOnAxis(w_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yd.copy(e):yd.set(e,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(_l,yd,this.up):ua.lookAt(yd,_l,this.up),this.quaternion.setFromRotationMatrix(ua),a&&(ua.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(ua),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kb),Qm.child=e,this.dispatchEvent(Qm),Qm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,Rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,Pb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let p=l[u];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){let o=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),p=s(e.shapes),f=s(e.skeletons),g=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){let l=[];for(let u in o){let d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}};xn.DEFAULT_UP=new G(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ci=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Db={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(let C of e.hand.values()){let x=n.getJointPose(C,i),h=this._getHandJoint(u,C);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}let d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),g=.02,v=.005;u.inputState.pinching&&f>g+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Db)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Ci;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},xS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},vd={h:0,s:0,l:0};Ze=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Je.workingColorSpace){if(e=Cb(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=eg(s,r,e+1/3),this.g=eg(s,r,e),this.b=eg(s,r,e-1/3)}return Je.colorSpaceToWorking(this,a),this}setStyle(e,n=$n){function i(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){let i=xS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Je.workingToColorSpace(gn.copy(this),e),Math.round(Qe(gn.r*255,0,255))*65536+Math.round(Qe(gn.g*255,0,255))*256+Math.round(Qe(gn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(gn.copy(this),n);let i=gn.r,a=gn.g,r=gn.b,s=Math.max(i,a,r),o=Math.min(i,a,r),l,u,d=(o+s)/2;if(o===s)l=0,u=0;else{let p=s-o;switch(u=d<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=$n){Je.workingToColorSpace(gn.copy(this),e);let n=gn.r,i=gn.g,a=gn.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL($a),this.setHSL($a.h+e,$a.s+n,$a.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($a),e.getHSL(vd);let i=Ym($a.h,vd.h,n),a=Ym($a.s,vd.s,n),r=Ym($a.l,vd.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Ze;Ze.NAMES=xS;El=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ga,this.environmentIntensity=1,this.environmentRotation=new ga,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Si=new G,ca=new G,tg=new G,da=new G,Ns=new G,Bs=new G,b_=new G,ng=new G,ig=new G,ag=new G,rg=new Lt,sg=new Lt,og=new Lt,Ja=class t{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),Si.subVectors(e,n),a.cross(Si);let r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){Si.subVectors(a,n),ca.subVectors(i,n),tg.subVectors(e,n);let s=Si.dot(Si),o=Si.dot(ca),l=Si.dot(tg),u=ca.dot(ca),d=ca.dot(tg),p=s*u-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,g=(u*l-o*d)*f,v=(s*d-o*l)*f;return r.set(1-g-v,v,g)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,da)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,da.x),l.addScaledVector(s,da.y),l.addScaledVector(o,da.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return rg.setScalar(0),sg.setScalar(0),og.setScalar(0),rg.fromBufferAttribute(e,n),sg.fromBufferAttribute(e,i),og.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(rg,r.x),s.addScaledVector(sg,r.y),s.addScaledVector(og,r.z),s}static isFrontFacing(e,n,i,a){return Si.subVectors(i,n),ca.subVectors(e,n),Si.cross(ca).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Si.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,a=this.b,r=this.c,s,o;Ns.subVectors(a,i),Bs.subVectors(r,i),ng.subVectors(e,i);let l=Ns.dot(ng),u=Bs.dot(ng);if(l<=0&&u<=0)return n.copy(i);ig.subVectors(e,a);let d=Ns.dot(ig),p=Bs.dot(ig);if(d>=0&&p<=d)return n.copy(a);let f=l*p-d*u;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Ns,s);ag.subVectors(e,r);let g=Ns.dot(ag),v=Bs.dot(ag);if(v>=0&&g<=v)return n.copy(r);let C=g*u-l*v;if(C<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(Bs,o);let x=d*v-g*p;if(x<=0&&p-d>=0&&g-v>=0)return b_.subVectors(r,a),o=(p-d)/(p-d+(g-v)),n.copy(a).addScaledVector(b_,o);let h=1/(x+C+f);return s=C*h,o=f*h,n.copy(i).addScaledVector(Ns,s).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Mi):Mi.fromBufferAttribute(r,s),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_d.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_d.copy(i.boundingBox)),_d.applyMatrix4(e.matrixWorld),this.union(_d)}let a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),Sd.subVectors(this.max,Sl),Us.subVectors(e.a,Sl),Os.subVectors(e.b,Sl),zs.subVectors(e.c,Sl),Ya.subVectors(Os,Us),Za.subVectors(zs,Os),Dr.subVectors(Us,zs);let n=[0,-Ya.z,Ya.y,0,-Za.z,Za.y,0,-Dr.z,Dr.y,Ya.z,0,-Ya.x,Za.z,0,-Za.x,Dr.z,0,-Dr.x,-Ya.y,Ya.x,0,-Za.y,Za.x,0,-Dr.y,Dr.x,0];return!lg(n,Us,Os,zs,Sd)||(n=[1,0,0,0,1,0,0,0,1],!lg(n,Us,Os,zs,Sd))?!1:(Md.crossVectors(Ya,Za),n=[Md.x,Md.y,Md.z],lg(n,Us,Os,zs,Sd))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fa=[new G,new G,new G,new G,new G,new G,new G,new G],Mi=new G,_d=new er,Us=new G,Os=new G,zs=new G,Ya=new G,Za=new G,Dr=new G,Sl=new G,Sd=new G,Md=new G,Fr=new G;Gt=new G,wd=new $e,Fb=0,Yn=class extends Hi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mg,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wd.fromBufferAttribute(this,n),wd.applyMatrix3(e),this.setXY(n,wd.x,wd.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vl(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vl(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vl(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vl(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),a=Tn(a,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},Tl=class extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}},Rl=class extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}},zt=class extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}},Nb=new er,Ml=new G,ug=new G,js=class{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Nb.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ml.subVectors(e,this.center);let n=Ml.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ml,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ug.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ml.copy(e.center).add(ug)),this.expandByPoint(Ml.copy(e.center).sub(ug))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bb=0,oi=new bt,cg=new xn,Vs=new G,Xn=new er,wl=new er,jt=new G,Kn=class t extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=eu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mb(e)?Rl:Tl)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,n,i){return oi.makeTranslation(e,n,i),this.applyMatrix4(oi),this}scale(e,n,i){return oi.makeScale(e,n,i),this.applyMatrix4(oi),this}lookAt(e){return cg.lookAt(e),cg.updateMatrix(),this.applyMatrix4(cg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,r=e.length;a<r;a++){let s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new zt(i,3))}else{let i=Math.min(e.length,n.count);for(let a=0;a<i;a++){let r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){let r=n[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){let o=n[r];wl.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Xn.min,wl.min),Xn.expandByPoint(jt),jt.addVectors(Xn.max,wl.max),Xn.expandByPoint(jt)):(Xn.expandByPoint(wl.min),Xn.expandByPoint(wl.max))}Xn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)jt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(jt));if(n)for(let r=0,s=n.length;r<s;r++){let o=n[r],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)jt.fromBufferAttribute(o,u),l&&(Vs.fromBufferAttribute(e,u),jt.add(Vs)),a=Math.max(a,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,r=n.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new G,l[_]=new G;let u=new G,d=new G,p=new G,f=new $e,g=new $e,v=new $e,C=new G,x=new G;function h(_,A,P){u.fromBufferAttribute(i,_),d.fromBufferAttribute(i,A),p.fromBufferAttribute(i,P),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,A),v.fromBufferAttribute(r,P),d.sub(u),p.sub(u),g.sub(f),v.sub(f);let R=1/(g.x*v.y-v.x*g.y);isFinite(R)&&(C.copy(d).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(R),x.copy(p).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(R),o[_].add(C),o[A].add(C),o[P].add(C),l[_].add(x),l[A].add(x),l[P].add(x))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let _=0,A=m.length;_<A;++_){let P=m[_],R=P.start,D=P.count;for(let z=R,V=R+D;z<V;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let S=new G,M=new G,I=new G,L=new G;function E(_){I.fromBufferAttribute(a,_),L.copy(I);let A=o[_];S.copy(A),S.sub(I.multiplyScalar(I.dot(A))).normalize(),M.crossVectors(L,A);let R=M.dot(l[_])<0?-1:1;s.setXYZW(_,S.x,S.y,S.z,R)}for(let _=0,A=m.length;_<A;++_){let P=m[_],R=P.start,D=P.count;for(let z=R,V=R+D;z<V;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);let a=new G,r=new G,s=new G,o=new G,l=new G,u=new G,d=new G,p=new G;if(e)for(let f=0,g=e.count;f<g;f+=3){let v=e.getX(f+0),C=e.getX(f+1),x=e.getX(f+2);a.fromBufferAttribute(n,v),r.fromBufferAttribute(n,C),s.fromBufferAttribute(n,x),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,x),o.add(d),l.add(d),u.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(C,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let u=o.array,d=o.itemSize,p=o.normalized,f=new u.constructor(l.length*d),g=0,v=0;for(let C=0,x=l.length;C<x;C++){o.isInterleavedBufferAttribute?g=l[C]*o.data.stride+o.offset:g=l[C]*d;for(let h=0;h<d;h++)f[v++]=u[g++]}return new Yn(f,d,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],u=e(l,i);n.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let l=[],u=r[o];for(let d=0,p=u.length;d<p;d++){let f=u[d],g=e(f,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let u=i[l];e.data.attributes[l]=u.toJSON(e.data)}let a={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],d=[];for(let p=0,f=u.length;p<f;p++){let g=u[p];d.push(g.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let a=e.attributes;for(let u in a){let d=a[u];this.setAttribute(u,d.clone(n))}let r=e.morphAttributes;for(let u in r){let d=[],p=r[u];for(let f=0,g=p.length;f<g;f++)d.push(p[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let u=0,d=s.length;u<d;u++){let p=s[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ub=0,tr=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=eu(),this.name="",this.type="Material",this.blending=zr,this.side=ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Od,this.blendEquation=Qa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==ma&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ud&&(i.blendSrc=this.blendSrc),this.blendDst!==Od&&(i.blendDst=this.blendDst),this.blendEquation!==Qa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(n){let r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ha=new G,dg=new G,Cd=new G,Ka=new G,fg=new G,bd=new G,hg=new G,Pl=class{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=ha.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,n),ha.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){dg.copy(e).add(n).multiplyScalar(.5),Cd.copy(n).sub(e).normalize(),Ka.copy(this.origin).sub(dg);let r=e.distanceTo(n)*.5,s=-this.direction.dot(Cd),o=Ka.dot(this.direction),l=-Ka.dot(Cd),u=Ka.lengthSq(),d=Math.abs(1-s*s),p,f,g,v;if(d>0)if(p=s*l-o,f=s*o-l,v=r*d,p>=0)if(f>=-v)if(f<=v){let C=1/d;p*=C,f*=C,g=p*(p+s*f+2*o)+f*(s*p+f+2*l)+u}else f=r,p=Math.max(0,-(s*f+o)),g=-p*p+f*(f+2*l)+u;else f=-r,p=Math.max(0,-(s*f+o)),g=-p*p+f*(f+2*l)+u;else f<=-v?(p=Math.max(0,-(-s*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),g=-p*p+f*(f+2*l)+u):f<=v?(p=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+u):(p=Math.max(0,-(s*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),g=-p*p+f*(f+2*l)+u);else f=s>0?-r:r,p=Math.max(0,-(s*f+o)),g=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(dg).addScaledVector(Cd,f),g}intersectSphere(e,n){ha.subVectors(e.center,this.origin);let i=ha.dot(this.direction),a=ha.dot(ha)-i*i,r=e.radius*e.radius;if(a>r)return null;let s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l,u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,a=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,a=(e.min.x-f.x)*u),d>=0?(r=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,n,i,a,r){fg.subVectors(n,e),bd.subVectors(i,e),hg.crossVectors(fg,bd);let s=this.direction.dot(hg),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ka.subVectors(this.origin,e);let l=o*this.direction.dot(bd.crossVectors(Ka,bd));if(l<0)return null;let u=o*this.direction.dot(fg.cross(Ka));if(u<0||l+u>s)return null;let d=-o*Ka.dot(hg);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hr=class extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ga,this.combine=Pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},L_=new bt,Nr=new Pl,Ld=new js,I_=new G,Id=new G,Ad=new G,Ed=new G,pg=new G,Td=new G,A_=new G,Rd=new G,at=class extends xn{constructor(e=new Kn,n=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);let o=this.morphTargetInfluences;if(r&&o){Td.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let d=o[l],p=r[l];d!==0&&(pg.fromBufferAttribute(p,e),s?Td.addScaledVector(pg,d):Td.addScaledVector(pg.sub(n),d))}n.add(Td)}return n}raycast(e,n){let i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ld.copy(i.boundingSphere),Ld.applyMatrix4(r),Nr.copy(e.ray).recast(e.near),!(Ld.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Ld,I_)===null||Nr.origin.distanceToSquared(I_)>(e.far-e.near)**2))&&(L_.copy(r).invert(),Nr.copy(e.ray).applyMatrix4(L_),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let a,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,f=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,C=f.length;v<C;v++){let x=f[v],h=s[x.materialIndex],m=Math.max(x.start,g.start),S=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let M=m,I=S;M<I;M+=3){let L=o.getX(M),E=o.getX(M+1),_=o.getX(M+2);a=Pd(this,h,e,i,u,d,p,L,E,_),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{let v=Math.max(0,g.start),C=Math.min(o.count,g.start+g.count);for(let x=v,h=C;x<h;x+=3){let m=o.getX(x),S=o.getX(x+1),M=o.getX(x+2);a=Pd(this,s,e,i,u,d,p,m,S,M),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,C=f.length;v<C;v++){let x=f[v],h=s[x.materialIndex],m=Math.max(x.start,g.start),S=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let M=m,I=S;M<I;M+=3){let L=M,E=M+1,_=M+2;a=Pd(this,h,e,i,u,d,p,L,E,_),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{let v=Math.max(0,g.start),C=Math.min(l.count,g.start+g.count);for(let x=v,h=C;x<h;x+=3){let m=x,S=x+1,M=x+2;a=Pd(this,s,e,i,u,d,p,m,S,M),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}};Qd=class extends wn{constructor(e=null,n=1,i=1,a,r,s,o,l,u=Jt,d=Jt,p,f){super(null,s,o,l,u,d,a,r,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mg=new G,zb=new G,Vb=new He,Oi=class{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let a=mg.subVectors(i,n).cross(zb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let a=e.delta(mg),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Vb.getNormalMatrix(e),a=this.coplanarPoint(mg).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Br=new js,Hb=new $e(.5,.5),kd=new G,Js=class{constructor(e=new Oi,n=new Oi,i=new Oi,a=new Oi,r=new Oi,s=new Oi){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi,i=!1){let a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],u=r[3],d=r[4],p=r[5],f=r[6],g=r[7],v=r[8],C=r[9],x=r[10],h=r[11],m=r[12],S=r[13],M=r[14],I=r[15];if(a[0].setComponents(u-s,g-d,h-v,I-m).normalize(),a[1].setComponents(u+s,g+d,h+v,I+m).normalize(),a[2].setComponents(u+o,g+p,h+C,I+S).normalize(),a[3].setComponents(u-o,g-p,h-C,I-S).normalize(),i)a[4].setComponents(l,f,x,M).normalize(),a[5].setComponents(u-l,g-f,h-x,I-M).normalize();else if(a[4].setComponents(u-l,g-f,h-x,I-M).normalize(),n===wi)a[5].setComponents(u+l,g+f,h+x,I+M).normalize();else if(n===Xs)a[5].setComponents(l,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);let n=Hb.distanceTo(e.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){let n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(kd.x=a.normal.x>0?e.max.x:e.min.x,kd.y=a.normal.y>0?e.max.y:e.min.y,kd.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(kd)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kl=class extends wn{constructor(e=[],n=sr,i,a,r,s,o,l,u,d){super(e,n,i,a,r,s,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dl=class extends wn{constructor(e,n,i,a,r,s,o,l,u){super(e,n,i,a,r,s,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},xa=class extends wn{constructor(e,n,i=Ii,a,r,s,o=Jt,l=Jt,u,d=Vi,p=1){if(d!==Vi&&d!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:n,depth:p};super(f,a,r,s,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ef=class extends xa{constructor(e,n=Ii,i=sr,a,r,s=Jt,o=Jt,l,u=Vi){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,a,r,s,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fl=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rn=class t extends Kn{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};let o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);let l=[],u=[],d=[],p=[],f=0,g=0;v("z","y","x",-1,-1,i,n,e,s,r,0),v("z","y","x",1,-1,i,n,-e,s,r,1),v("x","z","y",1,1,e,i,n,a,s,2),v("x","z","y",1,-1,e,i,-n,a,s,3),v("x","y","z",1,-1,e,n,i,a,r,4),v("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(p,2));function v(C,x,h,m,S,M,I,L,E,_,A){let P=M/E,R=I/_,D=M/2,z=I/2,V=L/2,O=E+1,Z=_+1,Y=0,U=0,Q=new G;for(let de=0;de<Z;de++){let se=de*R-z;for(let be=0;be<O;be++){let ze=be*P-D;Q[C]=ze*m,Q[x]=se*S,Q[h]=V,u.push(Q.x,Q.y,Q.z),Q[C]=0,Q[x]=0,Q[h]=L>0?1:-1,d.push(Q.x,Q.y,Q.z),p.push(be/E),p.push(1-de/_),Y+=1}}for(let de=0;de<_;de++)for(let se=0;se<E;se++){let be=f+se+O*de,ze=f+se+O*(de+1),dt=f+(se+1)+O*(de+1),Ke=f+(se+1)+O*de;l.push(be,ze,Ke),l.push(ze,dt,Ke),U+=6}o.addGroup(g,U,A),g+=U,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Nl=class t extends Kn{constructor(e=1,n=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:a},n=Math.max(3,n);let r=[],s=[],o=[],l=[],u=new G,d=new $e;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=n;p++,f+=3){let g=i+p/n*a;u.x=e*Math.cos(g),u.y=e*Math.sin(g),s.push(u.x,u.y,u.z),o.push(0,0,1),d.x=(s[f]/e+1)/2,d.y=(s[f+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=n;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(o,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},bi=class t extends Kn{constructor(e=1,n=1,i=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};let u=this;a=Math.floor(a),r=Math.floor(r);let d=[],p=[],f=[],g=[],v=0,C=[],x=i/2,h=0;m(),s===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(g,2));function m(){let M=new G,I=new G,L=0,E=(n-e)/i;for(let _=0;_<=r;_++){let A=[],P=_/r,R=P*(n-e)+e;for(let D=0;D<=a;D++){let z=D/a,V=z*l+o,O=Math.sin(V),Z=Math.cos(V);I.x=R*O,I.y=-P*i+x,I.z=R*Z,p.push(I.x,I.y,I.z),M.set(O,E,Z).normalize(),f.push(M.x,M.y,M.z),g.push(z,1-P),A.push(v++)}C.push(A)}for(let _=0;_<a;_++)for(let A=0;A<r;A++){let P=C[A][_],R=C[A+1][_],D=C[A+1][_+1],z=C[A][_+1];(e>0||A!==0)&&(d.push(P,R,z),L+=3),(n>0||A!==r-1)&&(d.push(R,D,z),L+=3)}u.addGroup(h,L,0),h+=L}function S(M){let I=v,L=new $e,E=new G,_=0,A=M===!0?e:n,P=M===!0?1:-1;for(let D=1;D<=a;D++)p.push(0,x*P,0),f.push(0,P,0),g.push(.5,.5),v++;let R=v;for(let D=0;D<=a;D++){let V=D/a*l+o,O=Math.cos(V),Z=Math.sin(V);E.x=A*Z,E.y=x*P,E.z=A*O,p.push(E.x,E.y,E.z),f.push(0,P,0),L.x=O*.5+.5,L.y=Z*.5*P+.5,g.push(L.x,L.y),v++}for(let D=0;D<a;D++){let z=I+D,V=R+D;M===!0?d.push(V,V+1,z):d.push(V+1,V,z),_+=3}u.addGroup(h,_,M===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bl=class t extends bi{constructor(e=1,n=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,n,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ul=class t extends Kn{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};let r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),u=o+1,d=l+1,p=e/o,f=n/l,g=[],v=[],C=[],x=[];for(let h=0;h<d;h++){let m=h*f-s;for(let S=0;S<u;S++){let M=S*p-r;v.push(M,-m,0),C.push(0,0,1),x.push(S/o),x.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let S=m+u*h,M=m+u*(h+1),I=m+1+u*(h+1),L=m+1+u*h;g.push(S,M,L),g.push(M,I,L)}this.setIndex(g),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(C,3)),this.setAttribute("uv",new zt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},nr=class t extends Kn{constructor(e=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(s+o,Math.PI),u=0,d=[],p=new G,f=new G,g=[],v=[],C=[],x=[];for(let h=0;h<=i;h++){let m=[],S=h/i,M=s+S*o,I=e*Math.cos(M),L=Math.sqrt(e*e-I*I),E=0;h===0&&s===0?E=.5/n:h===i&&l===Math.PI&&(E=-.5/n);for(let _=0;_<=n;_++){let A=_/n,P=a+A*r;p.x=-L*Math.cos(P),p.y=I,p.z=L*Math.sin(P),v.push(p.x,p.y,p.z),f.copy(p).normalize(),C.push(f.x,f.y,f.z),x.push(A+E,1-S),m.push(u++)}d.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){let S=d[h][m+1],M=d[h][m],I=d[h+1][m],L=d[h+1][m+1];(h!==0||s>0)&&g.push(S,M,L),(h!==i-1||l<Math.PI)&&g.push(M,I,L)}this.setIndex(g),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(C,3)),this.setAttribute("uv",new zt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};yS={clone:Wr,merge:yn},Wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(a.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(a.value);break;case"v3":this.uniforms[i].value=new G().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new He().fromArray(a.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},tf=class extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pn=class extends tr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ga,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nf=class extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},af=class extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ir=class{constructor(e,n,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],r=n[i-1];e:{t:{let s;n:{i:if(!(e<a)){for(let o=i+2;;){if(a===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=a,a=n[++i],e<a)break t}s=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=r,r=n[--i-1],e>=r)break t}s=i,i=0;break n}break e}for(;i<s;){let o=i+s>>>1;e<n[o]?s=o:i=o+1}if(a=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,a)}return this.interpolate_(i,r,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=e*a;for(let s=0;s!==a;++s)n[s]=i[r+s];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rf=class extends ir{constructor(e,n,i,a){super(e,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yg,endingEnd:yg}}intervalChanged_(e,n,i){let a=this.parameterPositions,r=e-2,s=e+1,o=a[r],l=a[s];if(o===void 0)switch(this.getSettings_().endingStart){case vg:r=e,o=2*n-i;break;case _g:r=a.length-2,o=n+a[r]-a[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vg:s=e,l=2*i-n;break;case _g:s=1,l=i+a[1]-a[0];break;default:s=e-1,l=n}let u=(i-n)*.5,d=this.valueSize;this._weightPrev=u/(n-o),this._weightNext=u/(l-i),this._offsetPrev=r*d,this._offsetNext=s*d}interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,g=this._weightNext,v=(i-n)/(a-n),C=v*v,x=C*v,h=-f*x+2*f*C-f*v,m=(1+f)*x+(-1.5-2*f)*C+(-.5+f)*v+1,S=(-1-g)*x+(1.5+g)*C+.5*v,M=g*x-g*C;for(let I=0;I!==o;++I)r[I]=h*s[d+I]+m*s[u+I]+S*s[l+I]+M*s[p+I];return r}},sf=class extends ir{constructor(e,n,i,a){super(e,n,i,a)}interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=(i-n)/(a-n),p=1-d;for(let f=0;f!==o;++f)r[f]=s[u+f]*p+s[l+f]*d;return r}},of=class extends ir{constructor(e,n,i,a){super(e,n,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}},lf=class extends ir{interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let v=(i-n)/(a-n),C=1-v;for(let x=0;x!==o;++x)r[x]=s[u+x]*C+s[l+x]*v;return r}let f=o*2,g=e-1;for(let v=0;v!==o;++v){let C=s[u+v],x=s[l+v],h=g*f+v*2,m=p[h],S=p[h+1],M=e*f+v*2,I=d[M],L=d[M+1],E=(i-n)/(a-n),_,A,P,R,D;for(let z=0;z<8;z++){_=E*E,A=_*E,P=1-E,R=P*P,D=R*P;let O=D*n+3*R*E*m+3*P*_*I+A*a-i;if(Math.abs(O)<1e-10)break;let Z=3*R*(m-n)+6*P*E*(I-m)+3*_*(a-I);if(Math.abs(Z)<1e-10)break;E=E-O/Z,E=Math.max(0,Math.min(1,E))}r[v]=D*C+3*R*E*S+3*P*_*L+A*x}return r}},Jn=class{constructor(e,n,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dd(n,this.TimeBufferType),this.values=Dd(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Dd(e.times,Array),values:Dd(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new lf(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Cl:n=this.InterpolantFactoryMethodDiscrete;break;case Yd:n=this.InterpolantFactoryMethodLinear;break;case Bd:n=this.InterpolantFactoryMethodSmooth;break;case xg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ue("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cl;case this.InterpolantFactoryMethodLinear:return Yd;case this.InterpolantFactoryMethodSmooth:return Bd;case this.InterpolantFactoryMethodBezier:return xg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=e}return this}trim(e,n){let i=this.times,a=i.length,r=0,s=a-1;for(;r!==a&&i[r]<e;)++r;for(;s!==-1&&i[s]>n;)--s;if(++s,r!==0||s!==a){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,a=this.values,r=i.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){Be("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(a!==void 0&&wb(a))for(let o=0,l=a.length;o!==l;++o){let u=a[o];if(isNaN(u)){Be("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Bd,r=e.length-1,s=1;for(let o=1;o<r;++o){let l=!1,u=e[o],d=e[o+1];if(u!==d&&(o!==1||u!==e[0]))if(a)l=!0;else{let p=o*i,f=p-i,g=p+i;for(let v=0;v!==i;++v){let C=n[p+v];if(C!==n[f+v]||C!==n[g+v]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let p=o*i,f=s*i;for(let g=0;g!==i;++g)n[f+g]=n[p+g]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,l=s*i,u=0;u!==i;++u)n[l+u]=n[o+u];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=n.slice(0,s*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,e,n);return a.createInterpolant=this.createInterpolant,a}};Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Yd;ar=class extends Jn{constructor(e,n,i){super(e,n,i)}};ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Cl;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;uf=class extends Jn{constructor(e,n,i,a){super(e,n,i,a)}};uf.prototype.ValueTypeName="color";cf=class extends Jn{constructor(e,n,i,a){super(e,n,i,a)}};cf.prototype.ValueTypeName="number";df=class extends ir{constructor(e,n,i,a){super(e,n,i,a)}interpolate_(e,n,i,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),u=e*o;for(let d=u+o;u!==d;u+=4)Gi.slerpFlat(r,0,s,u-o,s,u,l);return r}},Ol=class extends Jn{constructor(e,n,i,a){super(e,n,i,a)}InterpolantFactoryMethodLinear(e){return new df(this.times,this.values,this.getValueSize(),e)}};Ol.prototype.ValueTypeName="quaternion";Ol.prototype.InterpolantFactoryMethodSmooth=void 0;rr=class extends Jn{constructor(e,n,i){super(e,n,i)}};rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Cl;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;ff=class extends Jn{constructor(e,n,i,a){super(e,n,i,a)}};ff.prototype.ValueTypeName="vector";hf=class{constructor(e,n,i){let a=this,r=!1,s=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&a.onStart!==void 0&&a.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,a.onProgress!==void 0&&a.onProgress(d,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){let p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,f=u.length;p<f;p+=2){let g=u[p],v=u[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vS=new hf,pf=class{constructor(e){this.manager=e!==void 0?e:vS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(a,r){i.load(e,a,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pf.DEFAULT_MATERIAL_NAME="__DEFAULT";Qs=class extends xn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},zl=class extends Qs{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},gg=new bt,T_=new G,R_=new G,mf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;T_.setFromMatrixPosition(e.matrixWorld),n.position.copy(T_),R_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(R_),n.updateMatrixWorld(),gg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gg,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Xs||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fd=new G,Nd=new Gi,Ui=new G,Vl=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fd,Nd,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fd,Nd,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Fd,Nd,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fd,Nd,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ja=new G,P_=new $e,k_=new $e,an=class extends Vl{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($m*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan($m*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ja.x,ja.y).multiplyScalar(-e/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-e/ja.z)}getViewSize(e,n){return this.getViewBounds(e,P_,k_),n.subVectors(k_,P_)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan($m*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,u=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/u,a*=s.width/l,i*=s.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},wg=class extends mf{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},Hl=class extends Qs{constructor(e,n,i=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new wg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},eo=class extends Vl{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Cg=class extends mf{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends Qs{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Cg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},Hs=-90,Gs=1,gf=class extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new an(Hs,Gs,e,n);a.layers=this.layers,this.add(a);let r=new an(Hs,Gs,e,n);r.layers=this.layers,this.add(r);let s=new an(Hs,Gs,e,n);s.layers=this.layers,this.add(s);let o=new an(Hs,Gs,e,n);o.layers=this.layers,this.add(o);let l=new an(Hs,Gs,e,n);l.layers=this.layers,this.add(l);let u=new an(Hs,Gs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(let u of n)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,u,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=C,e.setRenderTarget(i,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,f,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},xf=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Kg="\\[\\]\\.:\\/",Xb=new RegExp("["+Kg+"]","g"),jg="[^"+Kg+"]",$b="[^"+Kg.replace("\\.","")+"]",Yb=/((?:WC+[\/:])*)/.source.replace("WC",jg),Zb=/(WCOD+)?/.source.replace("WCOD",$b),Kb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jg),jb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jg),Jb=new RegExp("^"+Yb+Zb+Kb+jb+"$"),Qb=["material","materials","bones","map"],bg=class{constructor(e,n,i){let a=i||wt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,a)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,r=i.length;a!==r;++a)i[a].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},wt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xb,"")}static parseTrackName(e){let n=Jb.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let r=i.nodeName.substring(a+1);Qb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)e[n++]=i[a]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let s=e[a];if(s===void 0){let u=n.nodeName;Be("PropertyBinding: Trying to update property for track: "+u+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=bg;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];gP=new Float32Array(1),D_=new bt,Gl=class{constructor(e,n,i=0,a=1/0){this.ray=new Pl(e,n),this.near=i,this.far=a,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Be("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return D_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D_),this}intersectObject(e,n=!0,i=[]){return Lg(e,this,i,n),i.sort(F_),i}intersectObjects(e,n=!0,i=[]){for(let a=0,r=e.length;a<r;a++)Lg(e[a],this,i,n);return i.sort(F_),i}};Ig=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=a,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185")});function HS(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function nL(t){let e=new WeakMap;function n(o,l){let u=o.array,d=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){let d=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,d);else{p.sort((g,v)=>g.start-v.start);let f=0;for(let g=1;g<p.length;g++){let v=p[f],C=p[g];C.start<=v.start+v.count+1?v.count=Math.max(v.count,C.start+C.count-v.start):(++f,p[f]=C)}p.length=f+1;for(let g=0,v=p.length;g<v;g++){let C=p[g];t.bufferSubData(u,C.start*d.BYTES_PER_ELEMENT,d,C.start,C.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:a,remove:r,update:s}}function U2(t,e,n,i,a,r){let s=new Ze(0),o=a===!0?0:1,l,u,d=null,p=0,f=null;function g(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){let M=m.backgroundBlurriness>0;S=e.get(S,M)}return S}function v(m){let S=!1,M=g(m);M===null?x(s,o):M&&M.isColor&&(x(M,1),S=!0);let I=t.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function C(m,S){let M=g(S);M&&(M.isCubeTexture||M.mapping===Xl)?(u===void 0&&(u=new at(new Rn(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Wr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(B2.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(GS),u.material.toneMapped=Je.getTransfer(M.colorSpace)!==ot,(d!==M||p!==M.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,p=M.version,f=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new at(new Ul(2,2),new jn({name:"BackgroundMaterial",uniforms:Wr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Je.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=M,p=M.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,S){m.getRGB(oh,Zg(t)),n.buffers.color.setClear(oh.r,oh.g,oh.b,S,r)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(m,S=1){s.set(m),o=S,x(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,x(s,o)},render:v,addToRenderList:C,dispose:h}}function O2(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=f(null),r=a,s=!1;function o(R,D,z,V,O){let Z=!1,Y=p(R,V,z,D);r!==Y&&(r=Y,u(r.object)),Z=g(R,V,z,O),Z&&v(R,V,z,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,M(R,D,z,V),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function u(R){return t.bindVertexArray(R)}function d(R){return t.deleteVertexArray(R)}function p(R,D,z,V){let O=V.wireframe===!0,Z=i[D.id];Z===void 0&&(Z={},i[D.id]=Z);let Y=R.isInstancedMesh===!0?R.id:0,U=Z[Y];U===void 0&&(U={},Z[Y]=U);let Q=U[z.id];Q===void 0&&(Q={},U[z.id]=Q);let de=Q[O];return de===void 0&&(de=f(l()),Q[O]=de),de}function f(R){let D=[],z=[],V=[];for(let O=0;O<n;O++)D[O]=0,z[O]=0,V[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:V,object:R,attributes:{},index:null}}function g(R,D,z,V){let O=r.attributes,Z=D.attributes,Y=0,U=z.getAttributes();for(let Q in U)if(U[Q].location>=0){let se=O[Q],be=Z[Q];if(be===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),se===void 0||se.attribute!==be||be&&se.data!==be.data)return!0;Y++}return r.attributesNum!==Y||r.index!==V}function v(R,D,z,V){let O={},Z=D.attributes,Y=0,U=z.getAttributes();for(let Q in U)if(U[Q].location>=0){let se=Z[Q];se===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));let be={};be.attribute=se,se&&se.data&&(be.data=se.data),O[Q]=be,Y++}r.attributes=O,r.attributesNum=Y,r.index=V}function C(){let R=r.newAttributes;for(let D=0,z=R.length;D<z;D++)R[D]=0}function x(R){h(R,0)}function h(R,D){let z=r.newAttributes,V=r.enabledAttributes,O=r.attributeDivisors;z[R]=1,V[R]===0&&(t.enableVertexAttribArray(R),V[R]=1),O[R]!==D&&(t.vertexAttribDivisor(R,D),O[R]=D)}function m(){let R=r.newAttributes,D=r.enabledAttributes;for(let z=0,V=D.length;z<V;z++)D[z]!==R[z]&&(t.disableVertexAttribArray(z),D[z]=0)}function S(R,D,z,V,O,Z,Y){Y===!0?t.vertexAttribIPointer(R,D,z,O,Z):t.vertexAttribPointer(R,D,z,V,O,Z)}function M(R,D,z,V){C();let O=V.attributes,Z=z.getAttributes(),Y=D.defaultAttributeValues;for(let U in Z){let Q=Z[U];if(Q.location>=0){let de=O[U];if(de===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){let se=de.normalized,be=de.itemSize,ze=e.get(de);if(ze===void 0)continue;let dt=ze.buffer,Ke=ze.type,te=ze.bytesPerElement,pe=Ke===t.INT||Ke===t.UNSIGNED_INT||de.gpuType===Mf;if(de.isInterleavedBufferAttribute){let le=de.data,Oe=le.stride,Ve=de.offset;if(le.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Q.locationSize;Ne++)h(Q.location+Ne,le.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<Q.locationSize;Ne++)x(Q.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Ne=0;Ne<Q.locationSize;Ne++)S(Q.location+Ne,be/Q.locationSize,Ke,se,Oe*te,(Ve+be/Q.locationSize*Ne)*te,pe)}else{if(de.isInstancedBufferAttribute){for(let le=0;le<Q.locationSize;le++)h(Q.location+le,de.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let le=0;le<Q.locationSize;le++)x(Q.location+le);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let le=0;le<Q.locationSize;le++)S(Q.location+le,be/Q.locationSize,Ke,se,be*te,be/Q.locationSize*le*te,pe)}}else if(Y!==void 0){let se=Y[U];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(Q.location,se);break;case 3:t.vertexAttrib3fv(Q.location,se);break;case 4:t.vertexAttrib4fv(Q.location,se);break;default:t.vertexAttrib1fv(Q.location,se)}}}}m()}function I(){A();for(let R in i){let D=i[R];for(let z in D){let V=D[z];for(let O in V){let Z=V[O];for(let Y in Z)d(Z[Y].object),delete Z[Y];delete V[O]}}delete i[R]}}function L(R){if(i[R.id]===void 0)return;let D=i[R.id];for(let z in D){let V=D[z];for(let O in V){let Z=V[O];for(let Y in Z)d(Z[Y].object),delete Z[Y];delete V[O]}}delete i[R.id]}function E(R){for(let D in i){let z=i[D];for(let V in z){let O=z[V];if(O[R.id]===void 0)continue;let Z=O[R.id];for(let Y in Z)d(Z[Y].object),delete Z[Y];delete O[R.id]}}}function _(R){for(let D in i){let z=i[D],V=R.isInstancedMesh===!0?R.id:0,O=z[V];if(O!==void 0){for(let Z in O){let Y=O[Z];for(let U in Y)d(Y[U].object),delete Y[U];delete O[Z]}delete z[V],Object.keys(z).length===0&&delete i[D]}}}function A(){P(),s=!0,r!==a&&(r=a,u(r.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:C,enableAttribute:x,disableUnusedAttributes:m}}function z2(t,e,n){let i;function a(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function s(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];n.update(f,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function V2(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(E){return!(E!==li&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let _=E===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==kn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ai&&!_)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp",d=l(u);d!==u&&(Ue("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=t.getParameter(t.MAX_SAMPLES),L=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:v,maxTextureSize:C,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:M,maxSamples:I,samples:L}}function H2(t){let e=this,n=null,i=0,a=!1,r=!1,s=new Oi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let g=p.length!==0||f||i!==0||a;return a=f,i=p.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,g){let v=p.clippingPlanes,C=p.clipIntersection,x=p.clipShadows,h=t.get(p);if(!a||v===null||v.length===0||r&&!x)r?d(null):u();else{let m=r?0:i,S=m*4,M=h.clippingState||null;l.value=M,M=d(v,f,S,g);for(let I=0;I!==S;++I)M[I]=n[I];h.clippingState=M,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,g,v){let C=p!==null?p.length:0,x=null;if(C!==0){if(x=l.value,v!==!0||x===null){let h=g+C*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<h)&&(x=new Float32Array(h));for(let S=0,M=g;S!==C;++S,M+=4)s.copy(p[S]).applyMatrix4(m,o),s.normal.toArray(x,M),x[M+3]=s.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}function q2(t){let e=[],n=[],i=[],a=t,r=t-cr+1+_S.length;for(let s=0;s<r;s++){let o=Math.pow(2,a);e.push(o);let l=1/o;s>t-cr?l=_S[s-t+cr-1]:s===0&&(l=0),n.push(l);let u=1/(o-2),d=-u,p=1+u,f=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,v=6,C=3,x=2,h=1,m=new Float32Array(C*v*g),S=new Float32Array(x*v*g),M=new Float32Array(h*v*g);for(let L=0;L<g;L++){let E=L%3*2/3-1,_=L>2?0:-1,A=[E,_,0,E+2/3,_,0,E+2/3,_+1,0,E,_,0,E+2/3,_+1,0,E,_+1,0];m.set(A,C*v*L),S.set(f,x*v*L);let P=[L,L,L,L,L,L];M.set(P,h*v*L)}let I=new Kn;I.setAttribute("position",new Yn(m,C)),I.setAttribute("uv",new Yn(S,x)),I.setAttribute("faceIndex",new Yn(M,h)),i.push(new at(I,null)),a>cr&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function MS(t,e,n){let i=new Zn(t,e,n);return i.texture.mapping=Xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function X2(t,e,n){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function $2(t,e,n){let i=new Float32Array(qr),a=new G(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function wS(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function CS(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function Y2(t){let e=new WeakMap,n=new WeakMap,i=null;function a(f,g=!1){return f==null?null:g?s(f):r(f)}function r(f){if(f&&f.isTexture){let g=f.mapping;if(g===vf||g===_f)if(e.has(f)){let v=e.get(f).texture;return o(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let C=new ch(v.height);return C.fromEquirectangularTexture(t,f),e.set(f,C),f.addEventListener("dispose",u),o(C.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let g=f.mapping,v=g===vf||g===_f,C=g===sr||g===Gr;if(v||C){let x=n.get(f),h=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new uh(t)),x=v?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{let m=f.image;return v&&m&&m.height>0||C&&m&&l(m)?(i===null&&(i=new uh(t)),x=v?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",d),x.texture):null}}}return f}function o(f,g){return g===vf?f.mapping=sr:g===_f&&(f.mapping=Gr),f}function l(f){let g=0,v=6;for(let C=0;C<v;C++)f[C]!==void 0&&g++;return g===v}function u(f){let g=f.target;g.removeEventListener("dispose",u);let v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function d(f){let g=f.target;g.removeEventListener("dispose",d);let v=n.get(g);v!==void 0&&(n.delete(g),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function Z2(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Or("WebGLRenderer: "+i+" extension not supported."),a}}}function K2(t,e,n,i){let a={},r=new WeakMap;function s(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",s),delete a[f.id];let g=r.get(f);g&&(e.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(p){let f=p.attributes;for(let g in f)e.update(f[g],t.ARRAY_BUFFER)}function u(p){let f=[],g=p.index,v=p.attributes.position,C=0;if(v===void 0)return;if(g!==null){let m=g.array;C=g.version;for(let S=0,M=m.length;S<M;S+=3){let I=m[S+0],L=m[S+1],E=m[S+2];f.push(I,L,L,E,E,I)}}else{let m=v.array;C=v.version;for(let S=0,M=m.length/3-1;S<M;S+=3){let I=S+0,L=S+1,E=S+2;f.push(I,L,L,E,E,I)}}let x=new(v.count>=65535?Rl:Tl)(f,1);x.version=C;let h=r.get(p);h&&e.remove(h),r.set(p,x)}function d(p){let f=r.get(p);if(f){let g=p.index;g!==null&&f.version<g.version&&u(p)}else u(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function j2(t,e,n){let i;function a(p){i=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,f){t.drawElements(i,f,r,p*s),n.update(f,i,1)}function u(p,f,g){g!==0&&(t.drawElementsInstanced(i,f,r,p*s,g),n.update(f,i,g))}function d(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,p,0,g);let C=0;for(let x=0;x<g;x++)C+=f[x];n.update(C,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function J2(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function Q2(t,e,n){let i=new WeakMap,a=new Lt;function r(s,o,l){let u=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,f=i.get(o);if(f===void 0||f.count!==p){let A=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,C=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],S=0;g===!0&&(S=1),v===!0&&(S=2),C===!0&&(S=3);let M=o.attributes.position.count*S,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let L=new Float32Array(M*I*4*p),E=new Al(L,M,I,p);E.type=Ai,E.needsUpdate=!0;let _=S*4;for(let P=0;P<p;P++){let R=x[P],D=h[P],z=m[P],V=M*I*4*P;for(let O=0;O<R.count;O++){let Z=O*_;g===!0&&(a.fromBufferAttribute(R,O),L[V+Z+0]=a.x,L[V+Z+1]=a.y,L[V+Z+2]=a.z,L[V+Z+3]=0),v===!0&&(a.fromBufferAttribute(D,O),L[V+Z+4]=a.x,L[V+Z+5]=a.y,L[V+Z+6]=a.z,L[V+Z+7]=0),C===!0&&(a.fromBufferAttribute(z,O),L[V+Z+8]=a.x,L[V+Z+9]=a.y,L[V+Z+10]=a.z,L[V+Z+11]=z.itemSize===4?a.w:1)}}f={count:p,texture:E,size:new $e(M,I)},i.set(o,f),o.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let C=0;C<u.length;C++)g+=u[C];let v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function eA(t,e,n,i,a){let r=new WeakMap;function s(u){let d=a.render.frame,p=u.geometry,f=e.get(u,p);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let g=u.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return f}function o(){r=new WeakMap}function l(u){let d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:o}}function nA(t,e,n,i,a,r){let s=new Zn(e,n,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,depthTexture:a?new xa(e,n):void 0}),o=new Zn(e,n,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),l=new Kn;l.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new zt([0,2,0,0,2,0],2));let u=new tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new at(l,u),p=new eo(-1,1,1,-1,0,1),f=null,g=null,v=!1,C,x=null,h=[],m=!1;this.setSize=function(S,M){s.setSize(S,M),o.setSize(S,M);for(let I=0;I<h.length;I++){let L=h[I];L.setSize&&L.setSize(S,M)}},this.setEffects=function(S){h=S,m=h.length>0&&h[0].isRenderPass===!0;let M=s.width,I=s.height;for(let L=0;L<h.length;L++){let E=h[L];E.setSize&&E.setSize(M,I)}},this.begin=function(S,M){if(v||S.toneMapping===Li&&h.length===0)return!1;if(x=M,M!==null){let I=M.width,L=M.height;(s.width!==I||s.height!==L)&&this.setSize(I,L)}return m===!1&&S.setRenderTarget(s),C=S.toneMapping,S.toneMapping=Li,!0},this.hasRenderPass=function(){return m},this.end=function(S,M){S.toneMapping=C,v=!0;let I=s,L=o;for(let E=0;E<h.length;E++){let _=h[E];if(_.enabled!==!1&&(_.render(S,L,I,M),_.needsSwap!==!1)){let A=I;I=L,L=A}}if(f!==S.outputColorSpace||g!==S.toneMapping){f=S.outputColorSpace,g=S.toneMapping,u.defines={},Je.getTransfer(f)===ot&&(u.defines.SRGB_TRANSFER="");let E=tA[g];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=I.texture,S.setRenderTarget(x),S.render(d,p),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),l.dispose(),u.dispose()}}function oo(t,e,n){let i=t[0];if(i<=0||i>0)return t;let a=e*n,r=bS[a];if(r===void 0&&(r=new Float32Array(a),bS[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hh(t,e){let n=LS[e];n===void 0&&(n=new Int32Array(e),LS[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function rA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function sA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function oA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if($t(n,i))return;ES.set(i),t.uniformMatrix2fv(this.addr,!1,ES),Yt(n,i)}}function lA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if($t(n,i))return;AS.set(i),t.uniformMatrix3fv(this.addr,!1,AS),Yt(n,i)}}function uA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if($t(n,i))return;IS.set(i),t.uniformMatrix4fv(this.addr,!1,IS),Yt(n,i)}}function cA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function fA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function hA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function pA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function gA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function xA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function yA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(s0.compareFunction=n.isReversedDepthBuffer()?sh:rh,r=s0):r=WS,n.setTexture2D(e||r,a)}function vA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||XS,a)}function _A(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||$S,a)}function SA(t,e,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||qS,a)}function MA(t){switch(t){case 5126:return iA;case 35664:return aA;case 35665:return rA;case 35666:return sA;case 35674:return oA;case 35675:return lA;case 35676:return uA;case 5124:case 35670:return cA;case 35667:case 35671:return dA;case 35668:case 35672:return fA;case 35669:case 35673:return hA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return SA}}function wA(t,e){t.uniform1fv(this.addr,e)}function CA(t,e){let n=oo(e,this.size,2);t.uniform2fv(this.addr,n)}function bA(t,e){let n=oo(e,this.size,3);t.uniform3fv(this.addr,n)}function LA(t,e){let n=oo(e,this.size,4);t.uniform4fv(this.addr,n)}function IA(t,e){let n=oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function AA(t,e){let n=oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function EA(t,e){let n=oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TA(t,e){t.uniform1iv(this.addr,e)}function RA(t,e){t.uniform2iv(this.addr,e)}function PA(t,e){t.uniform3iv(this.addr,e)}function kA(t,e){t.uniform4iv(this.addr,e)}function DA(t,e){t.uniform1uiv(this.addr,e)}function FA(t,e){t.uniform2uiv(this.addr,e)}function NA(t,e){t.uniform3uiv(this.addr,e)}function BA(t,e){t.uniform4uiv(this.addr,e)}function UA(t,e,n){let i=this.cache,a=e.length,r=hh(n,a);$t(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=s0:s=WS;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function OA(t,e,n){let i=this.cache,a=e.length,r=hh(n,a);$t(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||XS,r[s])}function zA(t,e,n){let i=this.cache,a=e.length,r=hh(n,a);$t(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||$S,r[s])}function VA(t,e,n){let i=this.cache,a=e.length,r=hh(n,a);$t(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||qS,r[s])}function HA(t){switch(t){case 5126:return wA;case 35664:return CA;case 35665:return bA;case 35666:return LA;case 35674:return IA;case 35675:return AA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return RA;case 35668:case 35672:return PA;case 35669:case 35673:return kA;case 5125:return DA;case 36294:return FA;case 36295:return NA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return VA}}function TS(t,e){t.seq.push(e),t.map[e.id]=e}function GA(t,e,n){let i=t.name,a=i.length;for(a0.lastIndex=0;;){let r=a0.exec(i),s=a0.lastIndex,o=r[1],l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===a){TS(n,u===void 0?new o0(o,t,e):new l0(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new u0(o),TS(n,p)),n=p}}}function RS(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}function XA(t,e){let n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){let o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function $A(t){Je._getMatrix(PS,Je.workingColorSpace,t);let e=`mat3( ${PS.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Ll:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function kS(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+XA(t.getShaderSource(e),o)}else return r}function YA(t,e){let n=$A(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function KA(t,e){let n=ZA[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function jA(){Je.getLuminanceCoefficients(lh);let t=lh.x.toFixed(4),e=lh.y.toFixed(4),n=lh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(iu).join(`
`)}function QA(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function eE(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let r=t.getActiveAttrib(e,a),s=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function iu(t){return t!==""}function DS(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function FS(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function c0(t){return t.replace(tE,iE)}function iE(t,e){let n=We[e];if(n===void 0){let i=nE.get(e);if(i!==void 0)n=We[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return c0(n)}function NS(t){return t.replace(aE,rE)}function rE(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function BS(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function oE(t){return sE[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function uE(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":lE[t.envMapMode]||"ENVMAP_TYPE_CUBE"}function dE(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":cE[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function hE(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":fE[t.combine]||"ENVMAP_BLENDING_NONE"}function pE(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function mE(t,e,n,i){let a=t.getContext(),r=n.defines,s=n.vertexShader,o=n.fragmentShader,l=oE(n),u=uE(n),d=dE(n),p=hE(n),f=pE(n),g=JA(n),v=QA(r),C=a.createProgram(),x,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(iu).join(`
`),x.length>0&&(x+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(iu).join(`
`),h.length>0&&(h+=`
`)):(x=[BS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(iu).join(`
`),h=[BS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?We.tonemapping_pars_fragment:"",n.toneMapping!==Li?KA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,YA("linearToOutputTexel",n.outputColorSpace),jA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(iu).join(`
`)),s=c0(s),s=DS(s,n),s=FS(s,n),o=c0(o),o=DS(o,n),o=FS(o,n),s=NS(s),o=NS(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",n.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=m+x+s,M=m+h+o,I=RS(a,a.VERTEX_SHADER,S),L=RS(a,a.FRAGMENT_SHADER,M);a.attachShader(C,I),a.attachShader(C,L),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function E(R){if(t.debug.checkShaderErrors){let D=a.getProgramInfoLog(C)||"",z=a.getShaderInfoLog(I)||"",V=a.getShaderInfoLog(L)||"",O=D.trim(),Z=z.trim(),Y=V.trim(),U=!0,Q=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,C,I,L);else{let de=kS(a,I,"vertex"),se=kS(a,L,"fragment");Be("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+de+`
`+se)}else O!==""?Ue("WebGLProgram: Program Info Log:",O):(Z===""||Y==="")&&(Q=!1);Q&&(R.diagnostics={runnable:U,programLog:O,vertexShader:{log:Z,prefix:x},fragmentShader:{log:Y,prefix:h}})}a.deleteShader(I),a.deleteShader(L),_=new so(a,C),A=eE(a,C)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=a.getProgramParameter(C,WA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=L,this}function xE(t){return t===ur||t===Jl||t===Ql}function yE(t,e,n,i,a,r){let s=new Zs,o=new d0,l=new Set,u=[],d=new Map,p=i.logarithmicDepthBuffer,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function C(_,A,P,R,D,z){let V=R.fog,O=D.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||Z,Y),Q=U&&U.mapping===Xl?U.image.height:null,de=g[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,be=se!==void 0?se.length:0,ze=0;O.morphAttributes.position!==void 0&&(ze=1),O.morphAttributes.normal!==void 0&&(ze=2),O.morphAttributes.color!==void 0&&(ze=3);let dt,Ke,te,pe;if(de){let Le=Yi[de];dt=Le.vertexShader,Ke=Le.fragmentShader}else{dt=_.vertexShader,Ke=_.fragmentShader;let Le=o.getVertexShaderStage(_),mt=o.getFragmentShaderStage(_);o.update(_,Le,mt),te=Le.id,pe=mt.id}let le=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),Ve=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,pt=!!_.map,qe=!!_.matcap,rt=!!U,et=!!_.aoMap,je=!!_.lightMap,vt=!!_.bumpMap&&_.wireframe===!1,It=!!_.normalMap,Nt=!!_.displacementMap,Vt=!!_.emissiveMap,_t=!!_.metalnessMap,At=!!_.roughnessMap,F=_.anisotropy>0,ln=_.clearcoat>0,it=_.dispersion>0,T=_.iridescence>0,w=_.sheen>0,N=_.transmission>0,q=F&&!!_.anisotropyMap,J=ln&&!!_.clearcoatMap,ue=ln&&!!_.clearcoatNormalMap,fe=ln&&!!_.clearcoatRoughnessMap,ee=T&&!!_.iridescenceMap,ne=T&&!!_.iridescenceThicknessMap,ge=w&&!!_.sheenColorMap,Re=w&&!!_.sheenRoughnessMap,_e=!!_.specularMap,xe=!!_.specularColorMap,ke=!!_.specularIntensityMap,H=N&&!!_.transmissionMap,me=N&&!!_.thicknessMap,k=!!_.gradientMap,re=!!_.alphaMap,K=_.alphaTest>0,he=!!_.alphaHash,ye=!!_.extensions,ie=Li;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ie=t.toneMapping);let Se={shaderID:de,shaderType:_.type,shaderName:_.name,vertexShader:dt,fragmentShader:Ke,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&D.instanceColor!==null,instancingMorph:Ve&&D.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pt,matcap:qe,envMap:rt,envMapMode:rt&&U.mapping,envMapCubeUVHeight:Q,aoMap:et,lightMap:je,bumpMap:vt,normalMap:It,displacementMap:Nt,emissiveMap:Vt,normalMapObjectSpace:It&&_.normalMapType===sS,normalMapTangentSpace:It&&_.normalMapType===ah,packedNormalMap:It&&_.normalMapType===ah&&xE(_.normalMap.format),metalnessMap:_t,roughnessMap:At,anisotropy:F,anisotropyMap:q,clearcoat:ln,clearcoatMap:J,clearcoatNormalMap:ue,clearcoatRoughnessMap:fe,dispersion:it,iridescence:T,iridescenceMap:ee,iridescenceThicknessMap:ne,sheen:w,sheenColorMap:ge,sheenRoughnessMap:Re,specularMap:_e,specularColorMap:xe,specularIntensityMap:ke,transmission:N,transmissionMap:H,thicknessMap:me,gradientMap:k,opaque:_.transparent===!1&&_.blending===zr&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:K,alphaHash:he,combine:_.combine,mapUv:pt&&v(_.map.channel),aoMapUv:et&&v(_.aoMap.channel),lightMapUv:je&&v(_.lightMap.channel),bumpMapUv:vt&&v(_.bumpMap.channel),normalMapUv:It&&v(_.normalMap.channel),displacementMapUv:Nt&&v(_.displacementMap.channel),emissiveMapUv:Vt&&v(_.emissiveMap.channel),metalnessMapUv:_t&&v(_.metalnessMap.channel),roughnessMapUv:At&&v(_.roughnessMap.channel),anisotropyMapUv:q&&v(_.anisotropyMap.channel),clearcoatMapUv:J&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(_.sheenRoughnessMap.channel),specularMapUv:_e&&v(_.specularMap.channel),specularColorMapUv:xe&&v(_.specularColorMap.channel),specularIntensityMapUv:ke&&v(_.specularIntensityMap.channel),transmissionMapUv:H&&v(_.transmissionMap.channel),thicknessMapUv:me&&v(_.thicknessMap.channel),alphaMapUv:re&&v(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(It||F),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(pt||re),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&It===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Oe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ze,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:pt&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:Vt&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Wi,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&_.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function x(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(h(A,_),m(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function h(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function m(_,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function S(_){let A=g[_.type],P;if(A){let R=Yi[A];P=yS.clone(R.uniforms)}else P=_.uniforms;return P}function M(_,A){let P=d.get(A);return P!==void 0?++P.usedTimes:(P=new mE(t,A,_,a),u.push(P),d.set(A,P)),P}function I(_){if(--_.usedTimes===0){let A=u.indexOf(_);u[A]=u[u.length-1],u.pop(),d.delete(_.cacheKey),_.destroy()}}function L(_){o.remove(_)}function E(){o.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:S,acquireProgram:M,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:E}}function vE(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function _E(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function US(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function OS(){let t=[],e=0,n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function o(f,g,v,C,x,h){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:g,material:v,materialVariant:s(f),groupOrder:C,renderOrder:f.renderOrder,z:x,group:h},t[e]=m):(m.id=f.id,m.object=f,m.geometry=g,m.material=v,m.materialVariant=s(f),m.groupOrder=C,m.renderOrder=f.renderOrder,m.z=x,m.group=h),e++,m}function l(f,g,v,C,x,h){let m=o(f,g,v,C,x,h);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):n.push(m)}function u(f,g,v,C,x,h){let m=o(f,g,v,C,x,h);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function d(f,g,v){n.length>1&&n.sort(f||_E),i.length>1&&i.sort(g||US),a.length>1&&a.sort(g||US),v&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let f=e,g=t.length;f<g;f++){let v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:u,finish:p,sort:d}}function SE(){let t=new WeakMap;function e(i,a){let r=t.get(i),s;return r===void 0?(s=new OS,t.set(i,[s])):a>=r.length?(s=new OS,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function ME(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new Ze};break;case"SpotLight":n={position:new G,direction:new G,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function wE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}function bE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LE(t){let e=new ME,n=wE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);let a=new G,r=new bt,s=new bt;function o(u){let d=0,p=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let g=0,v=0,C=0,x=0,h=0,m=0,S=0,M=0,I=0,L=0,E=0;u.sort(bE);for(let A=0,P=u.length;A<P;A++){let R=u[A],D=R.color,z=R.intensity,V=R.distance,O=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ur?O=R.shadow.map.texture:O=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=D.r*z,p+=D.g*z,f+=D.b*z;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(R.sh.coefficients[Z],z);E++}else if(R.isDirectionalLight){let Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,U=n.get(R);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=O,i.directionalShadowMatrix[g]=R.shadow.matrix,m++}i.directional[g]=Z,g++}else if(R.isSpotLight){let Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(D).multiplyScalar(z),Z.distance=V,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,i.spot[C]=Z;let Y=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,Y.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[C]=Y.matrix,R.castShadow){let U=n.get(R);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.spotShadow[C]=U,i.spotShadowMap[C]=O,M++}C++}else if(R.isRectAreaLight){let Z=e.get(R);Z.color.copy(D).multiplyScalar(z),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=Z,x++}else if(R.isPointLight){let Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){let Y=R.shadow,U=n.get(R);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=O,i.pointShadowMatrix[v]=R.shadow.matrix,S++}i.point[v]=Z,v++}else if(R.isHemisphereLight){let Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar(z),Z.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[h]=Z,h++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;let _=i.hash;(_.directionalLength!==g||_.pointLength!==v||_.spotLength!==C||_.rectAreaLength!==x||_.hemiLength!==h||_.numDirectionalShadows!==m||_.numPointShadows!==S||_.numSpotShadows!==M||_.numSpotMaps!==I||_.numLightProbes!==E)&&(i.directional.length=g,i.spot.length=C,i.rectArea.length=x,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=E,_.directionalLength=g,_.pointLength=v,_.spotLength=C,_.rectAreaLength=x,_.hemiLength=h,_.numDirectionalShadows=m,_.numPointShadows=S,_.numSpotShadows=M,_.numSpotMaps=I,_.numLightProbes=E,i.version=CE++)}function l(u,d){let p=0,f=0,g=0,v=0,C=0,x=d.matrixWorldInverse;for(let h=0,m=u.length;h<m;h++){let S=u[h];if(S.isDirectionalLight){let M=i.directional[p];M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(x),p++}else if(S.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(x),g++}else if(S.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(x),s.identity(),r.copy(S.matrixWorld),r.premultiply(x),s.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(x),f++}else if(S.isHemisphereLight){let M=i.hemi[C];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(x),C++}}}return{setup:o,setupView:l,state:i}}function zS(t){let e=new LE(t),n=[],i=[],a=[];function r(f){p.camera=f,n.length=0,i.length=0,a.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function l(f){a.push(f)}function u(){e.setup(n)}function d(f){e.setupView(n,f)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function IE(t){let e=new WeakMap;function n(a,r=0){let s=e.get(a),o;return s===void 0?(o=new zS(t),e.set(a,[o])):r>=s.length?(o=new zS(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}function PE(t,e,n){let i=new Js,a=new $e,r=new $e,s=new Lt,o=new nf,l=new af,u={},d=n.maxTextureSize,p={[ma]:sn,[sn]:ma,[Wi]:Wi},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:AE,fragmentShader:EE}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let v=new Kn;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new at(v,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let h=this.type;this.render=function(L,E,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===yf&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wl);let A=t.getRenderTarget(),P=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),D=t.state;D.setBlending(qi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=h!==this.type;z&&E.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(O=>O.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,O=L.length;V<O;V++){let Z=L[V],Y=Z.shadow;if(Y===void 0){Ue("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);let U=Y.getFrameExtents();a.multiply(U),r.copy(Y.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/U.x),a.x=r.x*U.x,Y.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/U.y),a.y=r.y*U.y,Y.mapSize.y=r.y));let Q=t.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Q,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===no){if(Z.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Zn(a.x,a.y,{format:ur,type:Xi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),Y.map.texture.name=Z.name+".shadowMap",Y.map.depthTexture=new xa(a.x,a.y,Ai),Y.map.depthTexture.name=Z.name+".shadowMapDepth",Y.map.depthTexture.format=Vi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Jt,Y.map.depthTexture.magFilter=Jt}else Z.isPointLight?(Y.map=new ch(a.x),Y.map.depthTexture=new ef(a.x,Ii)):(Y.map=new Zn(a.x,a.y),Y.map.depthTexture=new xa(a.x,a.y,Ii)),Y.map.depthTexture.name=Z.name+".shadowMap",Y.map.depthTexture.format=Vi,this.type===Wl?(Y.map.depthTexture.compareFunction=Q?sh:rh,Y.map.depthTexture.minFilter=rn,Y.map.depthTexture.magFilter=rn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Jt,Y.map.depthTexture.magFilter=Jt);Y.camera.updateProjectionMatrix()}let de=Y.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<de;se++){if(Y.map.isWebGLCubeRenderTarget)t.setRenderTarget(Y.map,se),t.clear();else{se===0&&(t.setRenderTarget(Y.map),t.clear());let be=Y.getViewport(se);s.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),D.viewport(s)}if(Z.isPointLight){let be=Y.camera,ze=Y.matrix,dt=Z.distance||be.far;dt!==be.far&&(be.far=dt,be.updateProjectionMatrix()),nu.setFromMatrixPosition(Z.matrixWorld),be.position.copy(nu),r0.copy(be.position),r0.add(TE[se]),be.up.copy(RE[se]),be.lookAt(r0),be.updateMatrixWorld(),ze.makeTranslation(-nu.x,-nu.y,-nu.z),VS.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(VS,be.coordinateSystem,be.reversedDepth)}else Y.updateMatrices(Z);i=Y.getFrustum(),M(E,_,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===no&&m(Y,_),Y.needsUpdate=!1}h=this.type,x.needsUpdate=!1,t.setRenderTarget(A,P,R)};function m(L,E){let _=e.update(C);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Zn(a.x,a.y,{format:ur,type:Xi})),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(E,null,_,f,C,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(E,null,_,g,C,null)}function S(L,E,_,A){let P=null,R=_.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)P=R;else if(P=_.isPointLight===!0?l:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=P.uuid,z=E.uuid,V=u[D];V===void 0&&(V={},u[D]=V);let O=V[z];O===void 0&&(O=P.clone(),V[z]=O,E.addEventListener("dispose",I)),P=O}if(P.visible=E.visible,P.wireframe=E.wireframe,A===no?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:p[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=t.properties.get(P);D.light=_}return P}function M(L,E,_,A,P){if(L.visible===!1)return;if(L.layers.test(E.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&P===no)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,L.matrixWorld);let z=e.update(L),V=L.material;if(Array.isArray(V)){let O=z.groups;for(let Z=0,Y=O.length;Z<Y;Z++){let U=O[Z],Q=V[U.materialIndex];if(Q&&Q.visible){let de=S(L,Q,A,P);L.onBeforeShadow(t,L,E,_,z,de,U),t.renderBufferDirect(_,null,z,de,L,U),L.onAfterShadow(t,L,E,_,z,de,U)}}}else if(V.visible){let O=S(L,V,A,P);L.onBeforeShadow(t,L,E,_,z,O,null),t.renderBufferDirect(_,null,z,O,L,null),L.onAfterShadow(t,L,E,_,z,O,null)}}let D=L.children;for(let z=0,V=D.length;z<V;z++)M(D[z],E,_,A,P)}function I(L){L.target.removeEventListener("dispose",I);for(let _ in u){let A=u[_],P=L.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function kE(t,e){function n(){let k=!1,re=new Lt,K=null,he=new Lt(0,0,0,0);return{setMask:function(ye){K!==ye&&!k&&(t.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){k=ye},setClear:function(ye,ie,Se,Le,mt){mt===!0&&(ye*=Le,ie*=Le,Se*=Le),re.set(ye,ie,Se,Le),he.equals(re)===!1&&(t.clearColor(ye,ie,Se,Le),he.copy(re))},reset:function(){k=!1,K=null,he.set(-1,0,0,0)}}}function i(){let k=!1,re=!1,K=null,he=null,ye=null;return{setReversed:function(ie){if(re!==ie){let Se=e.get("EXT_clip_control");ie?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),re=ie;let Le=ye;ye=null,this.setClear(Le)}},getReversed:function(){return re},setTest:function(ie){ie?le(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(ie){K!==ie&&!k&&(t.depthMask(ie),K=ie)},setFunc:function(ie){if(re&&(ie=gS[ie]),he!==ie){switch(ie){case zd:t.depthFunc(t.NEVER);break;case Vd:t.depthFunc(t.ALWAYS);break;case Hd:t.depthFunc(t.LESS);break;case Vr:t.depthFunc(t.LEQUAL);break;case Gd:t.depthFunc(t.EQUAL);break;case Wd:t.depthFunc(t.GEQUAL);break;case qd:t.depthFunc(t.GREATER);break;case Xd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ie}},setLocked:function(ie){k=ie},setClear:function(ie){ye!==ie&&(ye=ie,re&&(ie=1-ie),t.clearDepth(ie))},reset:function(){k=!1,K=null,he=null,ye=null,re=!1}}}function a(){let k=!1,re=null,K=null,he=null,ye=null,ie=null,Se=null,Le=null,mt=null;return{setTest:function(st){k||(st?le(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(st){re!==st&&!k&&(t.stencilMask(st),re=st)},setFunc:function(st,Nn,Bn){(K!==st||he!==Nn||ye!==Bn)&&(t.stencilFunc(st,Nn,Bn),K=st,he=Nn,ye=Bn)},setOp:function(st,Nn,Bn){(ie!==st||Se!==Nn||Le!==Bn)&&(t.stencilOp(st,Nn,Bn),ie=st,Se=Nn,Le=Bn)},setLocked:function(st){k=st},setClear:function(st){mt!==st&&(t.clearStencil(st),mt=st)},reset:function(){k=!1,re=null,K=null,he=null,ye=null,ie=null,Se=null,Le=null,mt=null}}}let r=new n,s=new i,o=new a,l=new WeakMap,u=new WeakMap,d={},p={},f={},g=new WeakMap,v=[],C=null,x=!1,h=null,m=null,S=null,M=null,I=null,L=null,E=null,_=new Ze(0,0,0),A=0,P=!1,R=null,D=null,z=null,V=null,O=null,Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,U=0,Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=U>=1):Q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=U>=2);let de=null,se={},be=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),dt=new Lt().fromArray(be),Ke=new Lt().fromArray(ze);function te(k,re,K,he){let ye=new Uint8Array(4),ie=t.createTexture();t.bindTexture(k,ie),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<K;Se++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(re+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return ie}let pe={};pe[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(Vr),vt(!1),It(Ag),le(t.CULL_FACE),et(qi);function le(k){d[k]!==!0&&(t.enable(k),d[k]=!0)}function Oe(k){d[k]!==!1&&(t.disable(k),d[k]=!1)}function Ve(k,re){return f[k]!==re?(t.bindFramebuffer(k,re),f[k]=re,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=re),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Ne(k,re){let K=v,he=!1;if(k){K=g.get(re),K===void 0&&(K=[],g.set(re,K));let ye=k.textures;if(K.length!==ye.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Se=ye.length;ie<Se;ie++)K[ie]=t.COLOR_ATTACHMENT0+ie;K.length=ye.length,he=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,he=!0);he&&t.drawBuffers(K)}function pt(k){return C!==k?(t.useProgram(k),C=k,!0):!1}let qe={[Qa]:t.FUNC_ADD,[O_]:t.FUNC_SUBTRACT,[z_]:t.FUNC_REVERSE_SUBTRACT};qe[V_]=t.MIN,qe[H_]=t.MAX;let rt={[G_]:t.ZERO,[W_]:t.ONE,[q_]:t.SRC_COLOR,[Ud]:t.SRC_ALPHA,[j_]:t.SRC_ALPHA_SATURATE,[Z_]:t.DST_COLOR,[$_]:t.DST_ALPHA,[X_]:t.ONE_MINUS_SRC_COLOR,[Od]:t.ONE_MINUS_SRC_ALPHA,[K_]:t.ONE_MINUS_DST_COLOR,[Y_]:t.ONE_MINUS_DST_ALPHA,[J_]:t.CONSTANT_COLOR,[Q_]:t.ONE_MINUS_CONSTANT_COLOR,[eS]:t.CONSTANT_ALPHA,[tS]:t.ONE_MINUS_CONSTANT_ALPHA};function et(k,re,K,he,ye,ie,Se,Le,mt,st){if(k===qi){x===!0&&(Oe(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),k!==U_){if(k!==h||st!==P){if((m!==Qa||I!==Qa)&&(t.blendEquation(t.FUNC_ADD),m=Qa,I=Qa),st)switch(k){case zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Eg:t.blendFunc(t.ONE,t.ONE);break;case Tg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Be("WebGLState: Invalid blending: ",k);break}else switch(k){case zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Eg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Tg:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rg:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",k);break}S=null,M=null,L=null,E=null,_.set(0,0,0),A=0,h=k,P=st}return}ye=ye||re,ie=ie||K,Se=Se||he,(re!==m||ye!==I)&&(t.blendEquationSeparate(qe[re],qe[ye]),m=re,I=ye),(K!==S||he!==M||ie!==L||Se!==E)&&(t.blendFuncSeparate(rt[K],rt[he],rt[ie],rt[Se]),S=K,M=he,L=ie,E=Se),(Le.equals(_)===!1||mt!==A)&&(t.blendColor(Le.r,Le.g,Le.b,mt),_.copy(Le),A=mt),h=k,P=!1}function je(k,re){k.side===Wi?Oe(t.CULL_FACE):le(t.CULL_FACE);let K=k.side===sn;re&&(K=!K),vt(K),k.blending===zr&&k.transparent===!1?et(qi):et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);let he=k.stencilWrite;o.setTest(he),he&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Vt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function vt(k){R!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),R=k)}function It(k){k!==N_?(le(t.CULL_FACE),k!==D&&(k===Ag?t.cullFace(t.BACK):k===B_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),D=k}function Nt(k){k!==z&&(Y&&t.lineWidth(k),z=k)}function Vt(k,re,K){k?(le(t.POLYGON_OFFSET_FILL),(V!==re||O!==K)&&(V=re,O=K,s.getReversed()&&(re=-re),t.polygonOffset(re,K))):Oe(t.POLYGON_OFFSET_FILL)}function _t(k){k?le(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function At(k){k===void 0&&(k=t.TEXTURE0+Z-1),de!==k&&(t.activeTexture(k),de=k)}function F(k,re,K){K===void 0&&(de===null?K=t.TEXTURE0+Z-1:K=de);let he=se[K];he===void 0&&(he={type:void 0,texture:void 0},se[K]=he),(he.type!==k||he.texture!==re)&&(de!==K&&(t.activeTexture(K),de=K),t.bindTexture(k,re||pe[k]),he.type=k,he.texture=re)}function ln(){let k=se[de];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function it(){try{t.compressedTexImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function w(){try{t.texSubImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function N(){try{t.texSubImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function ue(){try{t.texStorage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function fe(){try{t.texStorage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function ee(){try{t.texImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function ne(){try{t.texImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function ge(k){return p[k]!==void 0?p[k]:t.getParameter(k)}function Re(k,re){p[k]!==re&&(t.pixelStorei(k,re),p[k]=re)}function _e(k){dt.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),dt.copy(k))}function xe(k){Ke.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Ke.copy(k))}function ke(k,re){let K=u.get(re);K===void 0&&(K=new WeakMap,u.set(re,K));let he=K.get(k);he===void 0&&(he=t.getUniformBlockIndex(re,k.name),K.set(k,he))}function H(k,re){let he=u.get(re).get(k);l.get(re)!==he&&(t.uniformBlockBinding(re,he,k.__bindingPointIndex),l.set(re,he))}function me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},de=null,se={},f={},g=new WeakMap,v=[],C=null,x=!1,h=null,m=null,S=null,M=null,I=null,L=null,E=null,_=new Ze(0,0,0),A=0,P=!1,R=null,D=null,z=null,V=null,O=null,dt.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:Oe,bindFramebuffer:Ve,drawBuffers:Ne,useProgram:pt,setBlending:et,setMaterial:je,setFlipSided:vt,setCullFace:It,setLineWidth:Nt,setPolygonOffset:Vt,setScissorTest:_t,activeTexture:At,bindTexture:F,unbindTexture:ln,compressedTexImage2D:it,compressedTexImage3D:T,texImage2D:ee,texImage3D:ne,pixelStorei:Re,getParameter:ge,updateUBOMapping:ke,uniformBlockBinding:H,texStorage2D:ue,texStorage3D:fe,texSubImage2D:w,texSubImage3D:N,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:_e,viewport:xe,reset:me}}function DE(t,e,n,i,a,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,d=new WeakMap,p=new Set,f,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(T,w){return v?new OffscreenCanvas(T,w):Il("canvas")}function x(T,w,N){let q=1,J=it(T);if((J.width>N||J.height>N)&&(q=N/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ue=Math.floor(q*J.width),fe=Math.floor(q*J.height);f===void 0&&(f=C(ue,fe));let ee=w?C(ue,fe):f;return ee.width=ue,ee.height=fe,ee.getContext("2d").drawImage(T,0,0,ue,fe),Ue("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+fe+")."),ee}else return"data"in T&&Ue("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function h(T){return T.generateMipmaps}function m(T){t.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(T,w,N,q,J,ue=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===t.RED&&(N===t.FLOAT&&(ee=t.R32F),N===t.HALF_FLOAT&&(ee=t.R16F),N===t.UNSIGNED_BYTE&&(ee=t.R8),N===t.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),N===t.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),w===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(ee=t.R8UI),N===t.UNSIGNED_SHORT&&(ee=t.R16UI),N===t.UNSIGNED_INT&&(ee=t.R32UI),N===t.BYTE&&(ee=t.R8I),N===t.SHORT&&(ee=t.R16I),N===t.INT&&(ee=t.R32I)),w===t.RG&&(N===t.FLOAT&&(ee=t.RG32F),N===t.HALF_FLOAT&&(ee=t.RG16F),N===t.UNSIGNED_BYTE&&(ee=t.RG8),N===t.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),N===t.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),w===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(ee=t.RG8UI),N===t.UNSIGNED_SHORT&&(ee=t.RG16UI),N===t.UNSIGNED_INT&&(ee=t.RG32UI),N===t.BYTE&&(ee=t.RG8I),N===t.SHORT&&(ee=t.RG16I),N===t.INT&&(ee=t.RG32I)),w===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),N===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),N===t.UNSIGNED_INT&&(ee=t.RGB32UI),N===t.BYTE&&(ee=t.RGB8I),N===t.SHORT&&(ee=t.RGB16I),N===t.INT&&(ee=t.RGB32I)),w===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),N===t.UNSIGNED_INT&&(ee=t.RGBA32UI),N===t.BYTE&&(ee=t.RGBA8I),N===t.SHORT&&(ee=t.RGBA16I),N===t.INT&&(ee=t.RGBA32I)),w===t.RGB&&(N===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),N===t.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),w===t.RGBA){let ne=ue?Ll:Je.getTransfer(J);N===t.FLOAT&&(ee=t.RGBA32F),N===t.HALF_FLOAT&&(ee=t.RGBA16F),N===t.UNSIGNED_BYTE&&(ee=ne===ot?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),N===t.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function I(T,w){let N;return T?w===null||w===Ii||w===ao?N=t.DEPTH24_STENCIL8:w===Ai?N=t.DEPTH32F_STENCIL8:w===io&&(N=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ii||w===ao?N=t.DEPTH_COMPONENT24:w===Ai?N=t.DEPTH_COMPONENT32F:w===io&&(N=t.DEPTH_COMPONENT16),N}function L(T,w){return h(T)===!0||T.isFramebufferTexture&&T.minFilter!==Jt&&T.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function E(T){let w=T.target;w.removeEventListener("dispose",E),A(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&p.delete(w)}function _(T){let w=T.target;w.removeEventListener("dispose",_),R(w)}function A(T){let w=i.get(T);if(w.__webglInit===void 0)return;let N=T.source,q=g.get(N);if(q){let J=q[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(T),Object.keys(q).length===0&&g.delete(N)}i.remove(T)}function P(T){let w=i.get(T);t.deleteTexture(w.__webglTexture);let N=T.source,q=g.get(N);delete q[w.__cacheKey],s.memory.textures--}function R(T){let w=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(w.__webglFramebuffer[q]))for(let J=0;J<w.__webglFramebuffer[q].length;J++)t.deleteFramebuffer(w.__webglFramebuffer[q][J]);else t.deleteFramebuffer(w.__webglFramebuffer[q]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[q])}else{if(Array.isArray(w.__webglFramebuffer))for(let q=0;q<w.__webglFramebuffer.length;q++)t.deleteFramebuffer(w.__webglFramebuffer[q]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let q=0;q<w.__webglColorRenderbuffer.length;q++)w.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[q]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let N=T.textures;for(let q=0,J=N.length;q<J;q++){let ue=i.get(N[q]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),s.memory.textures--),i.remove(N[q])}i.remove(T)}let D=0;function z(){D=0}function V(){return D}function O(T){D=T}function Z(){let T=D;return T>=a.maxTextures&&Ue("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),D+=1,T}function Y(T){let w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function U(T,w){let N=i.get(T);if(T.isVideoTexture&&F(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){let q=T.image;if(q===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(N,T,w);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+w)}function Q(T,w){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Oe(N,T,w);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+w)}function de(T,w){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Oe(N,T,w);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+w)}function se(T,w){let N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Ve(N,T,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+w)}let be={[qs]:t.REPEAT,[zi]:t.CLAMP_TO_EDGE,[$d]:t.MIRRORED_REPEAT},ze={[Jt]:t.NEAREST,[aS]:t.NEAREST_MIPMAP_NEAREST,[$l]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Sf]:t.LINEAR_MIPMAP_NEAREST,[or]:t.LINEAR_MIPMAP_LINEAR},dt={[oS]:t.NEVER,[fS]:t.ALWAYS,[lS]:t.LESS,[rh]:t.LEQUAL,[uS]:t.EQUAL,[sh]:t.GEQUAL,[cS]:t.GREATER,[dS]:t.NOTEQUAL};function Ke(T,w){if(w.type===Ai&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===rn||w.magFilter===Sf||w.magFilter===$l||w.magFilter===or||w.minFilter===rn||w.minFilter===Sf||w.minFilter===$l||w.minFilter===or)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,be[w.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,be[w.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,be[w.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ze[w.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ze[w.minFilter]),w.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,dt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==$l&&w.minFilter!==or||w.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function te(T,w){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",E));let q=w.source,J=g.get(q);J===void 0&&(J={},g.set(q,J));let ue=Y(w);if(ue!==T.__cacheKey){J[ue]===void 0&&(J[ue]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,N=!0),J[ue].usedTimes++;let fe=J[T.__cacheKey];fe!==void 0&&(J[T.__cacheKey].usedTimes--,fe.usedTimes===0&&P(w)),T.__cacheKey=ue,T.__webglTexture=J[ue].texture}return N}function pe(T,w,N){return Math.floor(Math.floor(T/N)/w)}function le(T,w,N,q){let ue=T.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,N,q,w.data);else{ue.sort((Re,_e)=>Re.start-_e.start);let fe=0;for(let Re=1;Re<ue.length;Re++){let _e=ue[fe],xe=ue[Re],ke=_e.start+_e.count,H=pe(xe.start,w.width,4),me=pe(_e.start,w.width,4);xe.start<=ke+1&&H===me&&pe(xe.start+xe.count-1,w.width,4)===H?_e.count=Math.max(_e.count,xe.start+xe.count-_e.start):(++fe,ue[fe]=xe)}ue.length=fe+1;let ee=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let Re=0,_e=ue.length;Re<_e;Re++){let xe=ue[Re],ke=Math.floor(xe.start/4),H=Math.ceil(xe.count/4),me=ke%w.width,k=Math.floor(ke/w.width),re=H,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,me,k,re,K,N,q,w.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function Oe(T,w,N){let q=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(q=t.TEXTURE_3D);let J=te(T,w),ue=w.source;n.bindTexture(q,T.__webglTexture,t.TEXTURE0+N);let fe=i.get(ue);if(ue.version!==fe.__version||J===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let K=Je.getPrimaries(Je.workingColorSpace),he=w.colorSpace===ya?null:Je.getPrimaries(w.colorSpace),ye=w.colorSpace===ya||K===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment);let ne=x(w.image,!1,a.maxTextureSize);ne=ln(w,ne);let ge=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),_e=M(w.internalFormat,ge,Re,w.normalized,w.colorSpace,w.isVideoTexture);Ke(q,w);let xe,ke=w.mipmaps,H=w.isVideoTexture!==!0,me=fe.__version===void 0||J===!0,k=ue.dataReady,re=L(w,ne);if(w.isDepthTexture)_e=I(w.format===lr,w.type),me&&(H?n.texStorage2D(t.TEXTURE_2D,1,_e,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,_e,ne.width,ne.height,0,ge,Re,null));else if(w.isDataTexture)if(ke.length>0){H&&me&&n.texStorage2D(t.TEXTURE_2D,re,_e,ke[0].width,ke[0].height);for(let K=0,he=ke.length;K<he;K++)xe=ke[K],H?k&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,xe.width,xe.height,ge,Re,xe.data):n.texImage2D(t.TEXTURE_2D,K,_e,xe.width,xe.height,0,ge,Re,xe.data);w.generateMipmaps=!1}else H?(me&&n.texStorage2D(t.TEXTURE_2D,re,_e,ne.width,ne.height),k&&le(w,ne,ge,Re)):n.texImage2D(t.TEXTURE_2D,0,_e,ne.width,ne.height,0,ge,Re,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){H&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,_e,ke[0].width,ke[0].height,ne.depth);for(let K=0,he=ke.length;K<he;K++)if(xe=ke[K],w.format!==li)if(ge!==null)if(H){if(k)if(w.layerUpdates.size>0){let ye=Jg(xe.width,xe.height,w.format,w.type);for(let ie of w.layerUpdates){let Se=xe.data.subarray(ie*ye/xe.data.BYTES_PER_ELEMENT,(ie+1)*ye/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,ie,xe.width,xe.height,1,ge,Se)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,ne.depth,ge,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,_e,xe.width,xe.height,ne.depth,0,xe.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,ne.depth,ge,Re,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,_e,xe.width,xe.height,ne.depth,0,ge,Re,xe.data)}else{H&&me&&n.texStorage2D(t.TEXTURE_2D,re,_e,ke[0].width,ke[0].height);for(let K=0,he=ke.length;K<he;K++)xe=ke[K],w.format!==li?ge!==null?H?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,xe.width,xe.height,ge,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,K,_e,xe.width,xe.height,0,xe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?k&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,xe.width,xe.height,ge,Re,xe.data):n.texImage2D(t.TEXTURE_2D,K,_e,xe.width,xe.height,0,ge,Re,xe.data)}else if(w.isDataArrayTexture)if(H){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,_e,ne.width,ne.height,ne.depth),k)if(w.layerUpdates.size>0){let K=Jg(ne.width,ne.height,w.format,w.type);for(let he of w.layerUpdates){let ye=ne.data.subarray(he*K/ne.data.BYTES_PER_ELEMENT,(he+1)*K/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ne.width,ne.height,1,ge,Re,ye)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(w.isData3DTexture)H?(me&&n.texStorage3D(t.TEXTURE_3D,re,_e,ne.width,ne.height,ne.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)):n.texImage3D(t.TEXTURE_3D,0,_e,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(w.isFramebufferTexture){if(me)if(H)n.texStorage2D(t.TEXTURE_2D,re,_e,ne.width,ne.height);else{let K=ne.width,he=ne.height;for(let ye=0;ye<re;ye++)n.texImage2D(t.TEXTURE_2D,ye,_e,K,he,0,ge,Re,null),K>>=1,he>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in t){let K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),ne.parentNode!==K){K.appendChild(ne),p.add(w),K.onpaint=he=>{let ye=he.changedElements;for(let ie of p)ye.includes(ie.image)&&(ie.needsUpdate=!0)},K.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{let ye=t.RGBA,ie=t.RGBA,Se=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,ie,Se,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ke.length>0){if(H&&me){let K=it(ke[0]);n.texStorage2D(t.TEXTURE_2D,re,_e,K.width,K.height)}for(let K=0,he=ke.length;K<he;K++)xe=ke[K],H?k&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ge,Re,xe):n.texImage2D(t.TEXTURE_2D,K,_e,ge,Re,xe);w.generateMipmaps=!1}else if(H){if(me){let K=it(ne);n.texStorage2D(t.TEXTURE_2D,re,_e,K.width,K.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Re,ne)}else n.texImage2D(t.TEXTURE_2D,0,_e,ge,Re,ne);h(w)&&m(q),fe.__version=ue.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Ve(T,w,N){if(w.image.length!==6)return;let q=te(T,w),J=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+N);let ue=i.get(J);if(J.version!==ue.__version||q===!0){n.activeTexture(t.TEXTURE0+N);let fe=Je.getPrimaries(Je.workingColorSpace),ee=w.colorSpace===ya?null:Je.getPrimaries(w.colorSpace),ne=w.colorSpace===ya||fe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ge=w.isCompressedTexture||w.image[0].isCompressedTexture,Re=w.image[0]&&w.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!ge&&!Re?_e[ie]=x(w.image[ie],!0,a.maxCubemapSize):_e[ie]=Re?w.image[ie].image:w.image[ie],_e[ie]=ln(w,_e[ie]);let xe=_e[0],ke=r.convert(w.format,w.colorSpace),H=r.convert(w.type),me=M(w.internalFormat,ke,H,w.normalized,w.colorSpace),k=w.isVideoTexture!==!0,re=ue.__version===void 0||q===!0,K=J.dataReady,he=L(w,xe);Ke(t.TEXTURE_CUBE_MAP,w);let ye;if(ge){k&&re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,me,xe.width,xe.height);for(let ie=0;ie<6;ie++){ye=_e[ie].mipmaps;for(let Se=0;Se<ye.length;Se++){let Le=ye[Se];w.format!==li?ke!==null?k?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,Le.width,Le.height,ke,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,me,Le.width,Le.height,0,Le.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,Le.width,Le.height,ke,H,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,me,Le.width,Le.height,0,ke,H,Le.data)}}}else{if(ye=w.mipmaps,k&&re){ye.length>0&&he++;let ie=it(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,me,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){k?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,ke,H,_e[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,me,_e[ie].width,_e[ie].height,0,ke,H,_e[ie].data);for(let Se=0;Se<ye.length;Se++){let mt=ye[Se].image[ie].image;k?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,mt.width,mt.height,ke,H,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,me,mt.width,mt.height,0,ke,H,mt.data)}}else{k?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ke,H,_e[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,me,ke,H,_e[ie]);for(let Se=0;Se<ye.length;Se++){let Le=ye[Se];k?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,ke,H,Le.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,me,ke,H,Le.image[ie])}}}h(w)&&m(t.TEXTURE_CUBE_MAP),ue.__version=J.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Ne(T,w,N,q,J,ue){let fe=r.convert(N.format,N.colorSpace),ee=r.convert(N.type),ne=M(N.internalFormat,fe,ee,N.normalized,N.colorSpace),ge=i.get(w),Re=i.get(N);if(Re.__renderTarget=w,!ge.__hasExternalTextures){let _e=Math.max(1,w.width>>ue),xe=Math.max(1,w.height>>ue);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ue,ne,_e,xe,w.depth,0,fe,ee,null):n.texImage2D(J,ue,ne,_e,xe,0,fe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),At(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,J,Re.__webglTexture,0,_t(w)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,J,Re.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(T,w,N){if(t.bindRenderbuffer(t.RENDERBUFFER,T),w.depthBuffer){let q=w.depthTexture,J=q&&q.isDepthTexture?q.type:null,ue=I(w.stencilBuffer,J),fe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;At(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(w),ue,w.width,w.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(w),ue,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ue,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,T)}else{let q=w.textures;for(let J=0;J<q.length;J++){let ue=q[J],fe=r.convert(ue.format,ue.colorSpace),ee=r.convert(ue.type),ne=M(ue.internalFormat,fe,ee,ue.normalized,ue.colorSpace);At(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(w),ne,w.width,w.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(w),ne,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ne,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(T,w,N){let q=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(w.depthTexture);if(J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ke(t.TEXTURE_CUBE_MAP,w.depthTexture);let ge=r.convert(w.depthTexture.format),Re=r.convert(w.depthTexture.type),_e;w.depthTexture.format===Vi?_e=t.DEPTH_COMPONENT24:w.depthTexture.format===lr&&(_e=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,_e,w.width,w.height,0,ge,Re,null)}}else U(w.depthTexture,0);let ue=J.__webglTexture,fe=_t(w),ee=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,ne=w.depthTexture.format===lr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===Vi)At(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,ue,0);else if(w.depthTexture.format===lr)At(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(T){let w=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),q){let J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=q}if(T.depthTexture&&!w.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)qe(w.__webglFramebuffer[q],T,q);else{let q=T.texture.mipmaps;q&&q.length>0?qe(w.__webglFramebuffer[0],T,0):qe(w.__webglFramebuffer,T,0)}else if(N){w.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[q]),w.__webglDepthbuffer[q]===void 0)w.__webglDepthbuffer[q]=t.createRenderbuffer(),pt(w.__webglDepthbuffer[q],T,!1);else{let J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),pt(w.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(T,w,N){let q=i.get(T);w!==void 0&&Ne(q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&rt(T)}function je(T){let w=T.texture,N=i.get(T),q=i.get(w);T.addEventListener("dispose",_);let J=T.textures,ue=T.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=w.version,s.memory.textures++),ue){N.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer[ee]=[];for(let ne=0;ne<w.mipmaps.length;ne++)N.__webglFramebuffer[ee][ne]=t.createFramebuffer()}else N.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)N.__webglFramebuffer[ee]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ee=0,ne=J.length;ee<ne;ee++){let ge=i.get(J[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),s.memory.textures++)}if(T.samples>0&&At(T)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){let ne=J[ee];N.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ee]);let ge=r.convert(ne.format,ne.colorSpace),Re=r.convert(ne.type),_e=M(ne.internalFormat,ge,Re,ne.normalized,ne.colorSpace,T.isXRRenderTarget===!0),xe=_t(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,_e,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,N.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),pt(N.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ke(t.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)Ne(N.__webglFramebuffer[ee][ne],T,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else Ne(N.__webglFramebuffer[ee],T,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);h(w)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ee=0,ne=J.length;ee<ne;ee++){let ge=J[ee],Re=i.get(ge),_e=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_e=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,Re.__webglTexture),Ke(_e,ge),Ne(N.__webglFramebuffer,T,ge,t.COLOR_ATTACHMENT0+ee,_e,0),h(ge)&&m(_e)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,q.__webglTexture),Ke(ee,w),w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)Ne(N.__webglFramebuffer[ne],T,w,t.COLOR_ATTACHMENT0,ee,ne);else Ne(N.__webglFramebuffer,T,w,t.COLOR_ATTACHMENT0,ee,0);h(w)&&m(ee),n.unbindTexture()}T.depthBuffer&&rt(T)}function vt(T){let w=T.textures;for(let N=0,q=w.length;N<q;N++){let J=w[N];if(h(J)){let ue=S(T),fe=i.get(J).__webglTexture;n.bindTexture(ue,fe),m(ue),n.unbindTexture()}}}let It=[],Nt=[];function Vt(T){if(T.samples>0){if(At(T)===!1){let w=T.textures,N=T.width,q=T.height,J=t.COLOR_BUFFER_BIT,ue=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(T),ee=w.length>1;if(ee)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ne=T.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let Re=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,N,q,0,0,N,q,J,t.NEAREST),l===!0&&(It.length=0,Nt.length=0,It.push(t.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(It.push(ue),Nt.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Nt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let Re=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let w=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function _t(T){return Math.min(a.maxSamples,T.samples)}function At(T){let w=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function F(T){let w=s.render.frame;d.get(T)!==w&&(d.set(T,w),T.update())}function ln(T,w){let N=T.colorSpace,q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==bl&&N!==ya&&(Je.getTransfer(N)===ot?(q!==li||J!==kn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",N)),w}function it(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=z,this.getTextureUnits=V,this.setTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=Q,this.setTexture3D=de,this.setTextureCube=se,this.rebindTextures=et,this.setupRenderTarget=je,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function FE(t,e){function n(i,a=ya){let r,s=Je.getTransfer(a);if(i===kn)return t.UNSIGNED_BYTE;if(i===wf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Gg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===zg)return t.BYTE;if(i===Vg)return t.SHORT;if(i===io)return t.UNSIGNED_SHORT;if(i===Mf)return t.INT;if(i===Ii)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===Xi)return t.HALF_FLOAT;if(i===Wg)return t.ALPHA;if(i===qg)return t.RGB;if(i===li)return t.RGBA;if(i===Vi)return t.DEPTH_COMPONENT;if(i===lr)return t.DEPTH_STENCIL;if(i===Xg)return t.RED;if(i===bf)return t.RED_INTEGER;if(i===ur)return t.RG;if(i===Lf)return t.RG_INTEGER;if(i===If)return t.RGBA_INTEGER;if(i===Yl||i===Zl||i===Kl||i===jl)if(s===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Af||i===Ef||i===Tf||i===Rf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Af)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ef)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pf||i===kf||i===Df||i===Ff||i===Nf||i===Jl||i===Bf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pf||i===kf)return s===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Df)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ff)return r.COMPRESSED_R11_EAC;if(i===Nf)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Jl)return r.COMPRESSED_RG11_EAC;if(i===Bf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uf||i===Of||i===zf||i===Vf||i===Hf||i===Gf||i===Wf||i===qf||i===Xf||i===$f||i===Yf||i===Zf||i===Kf||i===jf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Of)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$f)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jf)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jf||i===Qf||i===eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jf)return s===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===th||i===nh||i===Ql||i===ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===th)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ao?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}function OE(t,e){function n(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,Zg(t)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function a(x,h,m,S,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(x,h):h.isMeshLambertMaterial?(r(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(x,h),p(x,h)):h.isMeshPhongMaterial?(r(x,h),d(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(x,h),f(x,h),h.isMeshPhysicalMaterial&&g(x,h,M)):h.isMeshMatcapMaterial?(r(x,h),v(x,h)):h.isMeshDepthMaterial?r(x,h):h.isMeshDistanceMaterial?(r(x,h),C(x,h)):h.isMeshNormalMaterial?r(x,h):h.isLineBasicMaterial?(s(x,h),h.isLineDashedMaterial&&o(x,h)):h.isPointsMaterial?l(x,h,m,S):h.isSpriteMaterial?u(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,n(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===sn&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,n(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===sn&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,n(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,n(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);let m=e.get(h),S=m.envMap,M=m.envMapRotation;S&&(x.envMap.value=S,x.envMapRotation.value.setFromMatrix4(UE.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(YS),x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,x.aoMapTransform))}function s(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform))}function o(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function l(x,h,m,S){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*m,x.scale.value=S*.5,h.map&&(x.map.value=h.map,n(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function u(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function d(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function p(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function f(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function g(x,h,m){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===sn&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=m.texture,x.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,h){h.matcap&&(x.matcap.value=h.matcap)}function C(x,h){let m=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(m.matrixWorld),x.nearDistance.value=m.shadow.camera.near,x.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function zE(t,e,n,i){let a={},r={},s=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,I){let L=I.program;i.uniformBlockBinding(M,L)}function u(M,I){let L=a[M.id];L===void 0&&(x(M),L=d(M),a[M.id]=L,M.addEventListener("dispose",m));let E=I.program;i.updateUBOMapping(M,E);let _=e.render.frame;r[M.id]!==_&&(f(M),r[M.id]=_)}function d(M){let I=p();M.__bindingPointIndex=I;let L=t.createBuffer(),E=M.__size,_=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,L),t.bufferData(t.UNIFORM_BUFFER,E,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,I,L),L}function p(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let I=a[M.id],L=M.uniforms,E=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,I);for(let _=0,A=L.length;_<A;_++){let P=L[_];if(Array.isArray(P))for(let R=0,D=P.length;R<D;R++)g(P[R],_,R,E);else g(P,_,0,E)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(M,I,L,E){if(C(M,I,L,E)===!0){let _=M.__offset,A=M.value;if(Array.isArray(A)){let P=0;for(let R=0;R<A.length;R++){let D=A[R],z=h(D);v(D,M.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,M.__data)}}function v(M,I,L){typeof M=="number"||typeof M=="boolean"?I[0]=M:M.isMatrix3?(I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0):ArrayBuffer.isView(M)?I.set(new M.constructor(M.buffer,M.byteOffset,I.length)):M.toArray(I,L)}function C(M,I,L,E){let _=M.value,A=I+"_"+L;if(E[A]===void 0)return typeof _=="number"||typeof _=="boolean"?E[A]=_:ArrayBuffer.isView(_)?E[A]=_.slice():E[A]=_.clone(),!0;{let P=E[A];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return E[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function x(M){let I=M.uniforms,L=0,E=16;for(let A=0,P=I.length;A<P;A++){let R=Array.isArray(I[A])?I[A]:[I[A]];for(let D=0,z=R.length;D<z;D++){let V=R[D],O=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,Y=O.length;Z<Y;Z++){let U=O[Z],Q=h(U),de=L%E,se=de%Q.boundary,be=de+se;L+=se,be!==0&&E-be<Q.storage&&(L+=E-be),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=L,L+=Q.storage}}}let _=L%E;return _>0&&(L+=E-_),M.__size=L,M.__cache={},this}function h(M){let I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(I.boundary=16,I.storage=M.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",M),I}function m(M){let I=M.target;I.removeEventListener("dispose",m);let L=s.indexOf(I.__bindingPointIndex);s.splice(L,1),t.deleteBuffer(a[I.id]),delete a[I.id],delete r[I.id]}function S(){for(let M in a)t.deleteBuffer(a[M]);s=[],a={},r={}}return{bind:l,update:u,dispose:S}}function HE(){return $i===null&&($i=new Qd(VE,16,16,ur,Xi),$i.name="DFG_LUT",$i.minFilter=rn,$i.magFilter=rn,$i.wrapS=zi,$i.wrapT=zi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var iL,aL,rL,sL,oL,lL,uL,cL,dL,fL,hL,pL,mL,gL,xL,yL,vL,_L,SL,ML,wL,CL,bL,LL,IL,AL,EL,TL,RL,PL,kL,DL,FL,NL,BL,UL,OL,zL,VL,HL,GL,WL,qL,XL,$L,YL,ZL,KL,jL,JL,QL,eI,tI,nI,iI,aI,rI,sI,oI,lI,uI,cI,dI,fI,hI,pI,mI,gI,xI,yI,vI,_I,SI,MI,wI,CI,bI,LI,II,AI,EI,TI,RI,PI,kI,DI,FI,NI,BI,UI,OI,zI,VI,HI,GI,WI,qI,XI,$I,YI,ZI,KI,jI,JI,QI,e2,t2,n2,i2,a2,r2,s2,o2,l2,u2,c2,d2,f2,h2,p2,m2,g2,x2,y2,v2,_2,S2,M2,w2,C2,b2,L2,I2,A2,E2,T2,R2,P2,k2,D2,F2,N2,We,Me,Yi,oh,B2,GS,cr,_S,qr,G2,tu,SS,e0,t0,n0,i0,W2,uh,ch,tA,WS,s0,qS,XS,$S,bS,LS,IS,AS,ES,o0,l0,u0,a0,so,WA,qA,PS,ZA,lh,tE,nE,aE,sE,lE,cE,fE,gE,d0,f0,CE,AE,EE,TE,RE,VS,nu,r0,NE,BE,h0,p0,UE,YS,VE,$i,dh,ZS=ve(()=>{Qg();Qg();iL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aL=`#ifdef USE_ALPHAHASH
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
#endif`,rL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uL=`#ifdef USE_AOMAP
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
#endif`,cL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dL=`#ifdef USE_BATCHING
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
#endif`,fL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gL=`#ifdef USE_IRIDESCENCE
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
#endif`,xL=`#ifdef USE_BUMPMAP
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
#endif`,yL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_L=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ML=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,LL=`#define PI 3.141592653589793
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
} // validated`,IL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AL=`vec3 transformedNormal = objectNormal;
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
#endif`,EL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kL="gl_FragColor = linearToOutputTexel( gl_FragColor );",DL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FL=`#ifdef USE_ENVMAP
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
#endif`,NL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BL=`#ifdef USE_ENVMAP
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
#endif`,UL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OL=`#ifdef USE_ENVMAP
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
#endif`,zL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WL=`#ifdef USE_GRADIENTMAP
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
}`,qL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$L=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YL=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ZL=`#ifdef USE_ENVMAP
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
#endif`,KL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eI=`PhysicalMaterial material;
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
#endif`,tI=`uniform sampler2D dfgLUT;
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
}`,nI=`
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
#endif`,iI=`#if defined( RE_IndirectDiffuse )
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
#endif`,aI=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rI=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hI=`#if defined( USE_POINTS_UV )
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
#endif`,pI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vI=`#ifdef USE_MORPHTARGETS
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
#endif`,_I=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,MI=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,LI=`#ifdef USE_NORMALMAP
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
#endif`,II=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PI=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HI=`float getShadowMask() {
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
}`,GI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WI=`#ifdef USE_SKINNING
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
#endif`,qI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XI=`#ifdef USE_SKINNING
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
#endif`,$I=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KI=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jI=`#ifdef USE_TRANSMISSION
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
#endif`,JI=`#ifdef USE_TRANSMISSION
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
#endif`,QI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a2=`uniform sampler2D t2D;
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`#include <common>
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
}`,c2=`#if DEPTH_PACKING == 3200
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
}`,d2=`#define DISTANCE
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
}`,f2=`#define DISTANCE
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
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`uniform float scale;
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
}`,g2=`uniform vec3 diffuse;
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
}`,x2=`#include <common>
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
}`,y2=`uniform vec3 diffuse;
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
}`,v2=`#define LAMBERT
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
}`,_2=`#define LAMBERT
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
}`,S2=`#define MATCAP
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
}`,M2=`#define MATCAP
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
}`,w2=`#define NORMAL
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
}`,C2=`#define NORMAL
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
}`,b2=`#define PHONG
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
}`,L2=`#define PHONG
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
}`,I2=`#define STANDARD
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
}`,A2=`#define STANDARD
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
}`,E2=`#define TOON
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
}`,T2=`#define TOON
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
}`,R2=`uniform float size;
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
}`,P2=`uniform vec3 diffuse;
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
}`,k2=`#include <common>
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
}`,D2=`uniform vec3 color;
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
}`,F2=`uniform float rotation;
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
}`,N2=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:iL,alphahash_pars_fragment:aL,alphamap_fragment:rL,alphamap_pars_fragment:sL,alphatest_fragment:oL,alphatest_pars_fragment:lL,aomap_fragment:uL,aomap_pars_fragment:cL,batching_pars_vertex:dL,batching_vertex:fL,begin_vertex:hL,beginnormal_vertex:pL,bsdfs:mL,iridescence_fragment:gL,bumpmap_pars_fragment:xL,clipping_planes_fragment:yL,clipping_planes_pars_fragment:vL,clipping_planes_pars_vertex:_L,clipping_planes_vertex:SL,color_fragment:ML,color_pars_fragment:wL,color_pars_vertex:CL,color_vertex:bL,common:LL,cube_uv_reflection_fragment:IL,defaultnormal_vertex:AL,displacementmap_pars_vertex:EL,displacementmap_vertex:TL,emissivemap_fragment:RL,emissivemap_pars_fragment:PL,colorspace_fragment:kL,colorspace_pars_fragment:DL,envmap_fragment:FL,envmap_common_pars_fragment:NL,envmap_pars_fragment:BL,envmap_pars_vertex:UL,envmap_physical_pars_fragment:ZL,envmap_vertex:OL,fog_vertex:zL,fog_pars_vertex:VL,fog_fragment:HL,fog_pars_fragment:GL,gradientmap_pars_fragment:WL,lightmap_pars_fragment:qL,lights_lambert_fragment:XL,lights_lambert_pars_fragment:$L,lights_pars_begin:YL,lights_toon_fragment:KL,lights_toon_pars_fragment:jL,lights_phong_fragment:JL,lights_phong_pars_fragment:QL,lights_physical_fragment:eI,lights_physical_pars_fragment:tI,lights_fragment_begin:nI,lights_fragment_maps:iI,lights_fragment_end:aI,lightprobes_pars_fragment:rI,logdepthbuf_fragment:sI,logdepthbuf_pars_fragment:oI,logdepthbuf_pars_vertex:lI,logdepthbuf_vertex:uI,map_fragment:cI,map_pars_fragment:dI,map_particle_fragment:fI,map_particle_pars_fragment:hI,metalnessmap_fragment:pI,metalnessmap_pars_fragment:mI,morphinstance_vertex:gI,morphcolor_vertex:xI,morphnormal_vertex:yI,morphtarget_pars_vertex:vI,morphtarget_vertex:_I,normal_fragment_begin:SI,normal_fragment_maps:MI,normal_pars_fragment:wI,normal_pars_vertex:CI,normal_vertex:bI,normalmap_pars_fragment:LI,clearcoat_normal_fragment_begin:II,clearcoat_normal_fragment_maps:AI,clearcoat_pars_fragment:EI,iridescence_pars_fragment:TI,opaque_fragment:RI,packing:PI,premultiplied_alpha_fragment:kI,project_vertex:DI,dithering_fragment:FI,dithering_pars_fragment:NI,roughnessmap_fragment:BI,roughnessmap_pars_fragment:UI,shadowmap_pars_fragment:OI,shadowmap_pars_vertex:zI,shadowmap_vertex:VI,shadowmask_pars_fragment:HI,skinbase_vertex:GI,skinning_pars_vertex:WI,skinning_vertex:qI,skinnormal_vertex:XI,specularmap_fragment:$I,specularmap_pars_fragment:YI,tonemapping_fragment:ZI,tonemapping_pars_fragment:KI,transmission_fragment:jI,transmission_pars_fragment:JI,uv_pars_fragment:QI,uv_pars_vertex:e2,uv_vertex:t2,worldpos_vertex:n2,background_vert:i2,background_frag:a2,backgroundCube_vert:r2,backgroundCube_frag:s2,cube_vert:o2,cube_frag:l2,depth_vert:u2,depth_frag:c2,distance_vert:d2,distance_frag:f2,equirect_vert:h2,equirect_frag:p2,linedashed_vert:m2,linedashed_frag:g2,meshbasic_vert:x2,meshbasic_frag:y2,meshlambert_vert:v2,meshlambert_frag:_2,meshmatcap_vert:S2,meshmatcap_frag:M2,meshnormal_vert:w2,meshnormal_frag:C2,meshphong_vert:b2,meshphong_frag:L2,meshphysical_vert:I2,meshphysical_frag:A2,meshtoon_vert:E2,meshtoon_frag:T2,points_vert:R2,points_frag:P2,shadow_vert:k2,shadow_frag:D2,sprite_vert:F2,sprite_frag:N2},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Yi={basic:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:yn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:yn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:yn([Me.points,Me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:yn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:yn([Me.common,Me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:yn([Me.sprite,Me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:yn([Me.common,Me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:yn([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Yi.physical={uniforms:yn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};oh={r:0,b:0,g:0},B2=new bt,GS=new He;GS.set(-1,0,0,0,1,0,0,0,1);cr=4,_S=[.125,.215,.35,.446,.526,.582],qr=20,G2=256,tu=new eo,SS=new Ze,e0=null,t0=0,n0=0,i0=!1,W2=new G,uh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){let{size:s=256,position:o=W2}=r;e0=this._renderer.getRenderTarget(),t0=this._renderer.getActiveCubeFace(),n0=this._renderer.getActiveMipmapLevel(),i0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=CS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(e0,t0,n0),this._renderer.xr.enabled=i0,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===sr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),e0=this._renderer.getRenderTarget(),t0=this._renderer.getActiveCubeFace(),n0=this._renderer.getActiveMipmapLevel(),i0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Xi,format:li,colorSpace:bl,depthBuffer:!1},a=MS(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=MS(e,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=q2(r)),this._blurMaterial=$2(r,e,n),this._ggxMaterial=X2(r,e,n)}return a}_compileMaterial(e){let n=new at(new Kn,e);this._renderer.compile(n,tu)}_sceneToCubeUV(e,n,i,a,r){let l=new an(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,g=p.toneMapping;p.getClearColor(SS),p.toneMapping=Li,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new Rn,new Hr({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let C=this._backgroundBox,x=C.material,h=!1,m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,h=!0):(x.color.copy(SS),h=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(l.up.set(0,u[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[S],r.y,r.z)):M===1?(l.up.set(0,0,u[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[S],r.z)):(l.up.set(0,u[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[S]));let I=this._cubeSize;ro(a,M*I,S>2?I:0,I,I),p.setRenderTarget(a),h&&p.render(C,l),p.render(e,l)}p.toneMapping=g,p.autoClear=f,e.background=m}_textureToCubeUV(e,n){let i=this._renderer,a=e.mapping===sr||e.mapping===Gr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=CS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wS());let r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ro(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,tu)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){let a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;let l=s.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-d*d),f=0+u*1.25,g=p*f,{_lodMax:v}=this,C=this._sizeLods[i],x=3*C*(i>v-cr?i-v+cr:0),h=4*(this._cubeSize-C);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=v-n,ro(r,x,h,3*C,2*C),a.setRenderTarget(r),a.render(o,tu),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,ro(e,x,h,3*C,2*C),a.setRenderTarget(e),a.render(o,tu)}_blur(e,n,i,a,r){let s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){let l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");let d=3,p=this._lodMeshes[a];p.material=u;let f=u.uniforms,g=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*qr-1),C=r/v,x=isFinite(r)?1+Math.floor(d*C):qr;x>qr&&Ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${qr}`);let h=[],m=0;for(let E=0;E<qr;++E){let _=E/C,A=Math.exp(-_*_/2);h.push(A),E===0?m+=A:E<x&&(m+=2*A)}for(let E=0;E<h.length;E++)h[E]=h[E]/m;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=h,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-i;let M=this._sizeLods[a],I=3*M*(a>S-cr?a-S+cr:0),L=4*(this._cubeSize-M);ro(n,I,L,3*M,2*M),l.setRenderTarget(n),l.render(p,tu)}};ch=class extends Zn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new kl(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Rn(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:qi});r.uniforms.tEquirect.value=n;let s=new at(a,r),o=n.minFilter;return n.minFilter===or&&(n.minFilter=rn),new gf(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}};tA={[kg]:"LINEAR_TONE_MAPPING",[Dg]:"REINHARD_TONE_MAPPING",[Fg]:"CINEON_TONE_MAPPING",[ql]:"ACES_FILMIC_TONE_MAPPING",[Bg]:"AGX_TONE_MAPPING",[Ug]:"NEUTRAL_TONE_MAPPING",[Ng]:"CUSTOM_TONE_MAPPING"};WS=new wn,s0=new xa(1,1),qS=new Al,XS=new Jd,$S=new kl,bS=[],LS=[],IS=new Float32Array(16),AS=new Float32Array(9),ES=new Float32Array(4);o0=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MA(n.type)}},l0=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HA(n.type)}},u0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let a=this.seq;for(let r=0,s=a.length;r!==s;++r){let o=a[r];o.setValue(e,n[o.id],i)}}},a0=/(\w+)(\])?(\[|\.)?/g;so=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);GA(o,l,this)}let a=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){let r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){let a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){let i=[];for(let a=0,r=e.length;a!==r;++a){let s=e[a];s.id in n&&i.push(s)}return i}};WA=37297,qA=0;PS=new He;ZA={[kg]:"Linear",[Dg]:"Reinhard",[Fg]:"Cineon",[ql]:"ACESFilmic",[Bg]:"AgX",[Ug]:"Neutral",[Ng]:"Custom"};lh=new G;tE=/^[ \t]*#include +<([\w\d./]+)>/gm;nE=new Map;aE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;sE={[Wl]:"SHADOWMAP_TYPE_PCF",[no]:"SHADOWMAP_TYPE_VSM"};lE={[sr]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[Xl]:"ENVMAP_TYPE_CUBE_UV"};cE={[Gr]:"ENVMAP_MODE_REFRACTION"};fE={[Pg]:"ENVMAP_BLENDING_MULTIPLY",[nS]:"ENVMAP_BLENDING_MIX",[iS]:"ENVMAP_BLENDING_ADD"};gE=0,d0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new f0(e),n.set(e,i)),i}},f0=class{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}};CE=0;AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
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
}`,TE=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],RE=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],VS=new bt,nu=new G,r0=new G;NE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BE=`
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

}`,h0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Fl(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new jn({vertexShader:NE,fragmentShader:BE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new at(new Ul(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},p0=class extends Hi{constructor(e,n){super();let i=this,a=null,r=1,s=null,o="local-floor",l=1,u=null,d=null,p=null,f=null,g=null,v=null,C=typeof XRWebGLBinding<"u",x=new h0,h={},m=n.getContextAttributes(),S=null,M=null,I=[],L=[],E=new $e,_=null,A=new an;A.viewport=new Lt;let P=new an;P.viewport=new Lt;let R=[A,P],D=new xf,z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=I[te];return pe===void 0&&(pe=new Ks,I[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=I[te];return pe===void 0&&(pe=new Ks,I[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=I[te];return pe===void 0&&(pe=new Ks,I[te]=pe),pe.getHandSpace()};function O(te){let pe=L.indexOf(te.inputSource);if(pe===-1)return;let le=I[pe];le!==void 0&&(le.update(te.inputSource,te.frame,u||s),le.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){a.removeEventListener("select",O),a.removeEventListener("selectstart",O),a.removeEventListener("selectend",O),a.removeEventListener("squeeze",O),a.removeEventListener("squeezestart",O),a.removeEventListener("squeezeend",O),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",Y);for(let te=0;te<I.length;te++){let pe=L[te];pe!==null&&(L[te]=null,I[te].disconnect(pe))}z=null,V=null,x.reset();for(let te in h)delete h[te];e.setRenderTarget(S),g=null,f=null,p=null,a=null,M=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(S=e.getRenderTarget(),a.addEventListener("select",O),a.addEventListener("selectstart",O),a.addEventListener("selectend",O),a.addEventListener("squeeze",O),a.addEventListener("squeezestart",O),a.addEventListener("squeezeend",O),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(E),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Oe=null,Ve=null;m.depth&&(Ve=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=m.stencil?lr:Vi,Oe=m.stencil?ao:Ii);let Ne={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(Ne),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Zn(f.textureWidth,f.textureHeight,{format:li,type:kn,depthTexture:new xa(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(a,n,le),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Zn(g.framebufferWidth,g.framebufferHeight,{format:li,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await a.requestReferenceSpace(o),Ke.setContext(a),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(te){for(let pe=0;pe<te.removed.length;pe++){let le=te.removed[pe],Oe=L.indexOf(le);Oe>=0&&(L[Oe]=null,I[Oe].disconnect(le))}for(let pe=0;pe<te.added.length;pe++){let le=te.added[pe],Oe=L.indexOf(le);if(Oe===-1){for(let Ne=0;Ne<I.length;Ne++)if(Ne>=L.length){L.push(le),Oe=Ne;break}else if(L[Ne]===null){L[Ne]=le,Oe=Ne;break}if(Oe===-1)break}let Ve=I[Oe];Ve&&Ve.connect(le)}}let U=new G,Q=new G;function de(te,pe,le){U.setFromMatrixPosition(pe.matrixWorld),Q.setFromMatrixPosition(le.matrixWorld);let Oe=U.distanceTo(Q),Ve=pe.projectionMatrix.elements,Ne=le.projectionMatrix.elements,pt=Ve[14]/(Ve[10]-1),qe=Ve[14]/(Ve[10]+1),rt=(Ve[9]+1)/Ve[5],et=(Ve[9]-1)/Ve[5],je=(Ve[8]-1)/Ve[0],vt=(Ne[8]+1)/Ne[0],It=pt*je,Nt=pt*vt,Vt=Oe/(-je+vt),_t=Vt*-je;if(pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(_t),te.translateZ(Vt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ve[10]===-1)te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let At=pt+Vt,F=qe+Vt,ln=It-_t,it=Nt+(Oe-_t),T=rt*qe/F*At,w=et*qe/F*At;te.projectionMatrix.makePerspective(ln,it,T,w,At,F),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function se(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let pe=te.near,le=te.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(le=x.depthFar)),D.near=P.near=A.near=pe,D.far=P.far=A.far=le,(z!==D.near||V!==D.far)&&(a.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,V=D.far),D.layers.mask=te.layers.mask|6,A.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Oe=te.parent,Ve=D.cameras;se(D,Oe);for(let Ne=0;Ne<Ve.length;Ne++)se(Ve[Ne],Oe);Ve.length===2?de(D,A,P):D.projectionMatrix.copy(A.projectionMatrix),be(te,D,Oe)};function be(te,pe,le){le===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(le.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Zd*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function(te){return h[te]};let ze=null;function dt(te,pe){if(d=pe.getViewerPose(u||s),v=pe,d!==null){let le=d.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let Oe=!1;le.length!==D.cameras.length&&(D.cameras.length=0,Oe=!0);for(let qe=0;qe<le.length;qe++){let rt=le[qe],et=null;if(g!==null)et=g.getViewport(rt);else{let vt=p.getViewSubImage(f,rt);et=vt.viewport,qe===0&&(e.setRenderTargetTextures(M,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(M))}let je=R[qe];je===void 0&&(je=new an,je.layers.enable(qe),je.viewport=new Lt,R[qe]=je),je.matrix.fromArray(rt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(rt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(et.x,et.y,et.width,et.height),qe===0&&(D.matrix.copy(je.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Oe===!0&&D.cameras.push(je)}let Ve=a.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){p=i.getBinding();let qe=p.getDepthInformation(le[0]);qe&&qe.isValid&&qe.texture&&x.init(qe,a.renderState)}if(Ve&&Ve.includes("camera-access")&&C){e.state.unbindTexture(),p=i.getBinding();for(let qe=0;qe<le.length;qe++){let rt=le[qe].camera;if(rt){let et=h[rt];et||(et=new Fl,h[rt]=et);let je=p.getCameraImage(rt);et.sourceTexture=je}}}}for(let le=0;le<I.length;le++){let Oe=L[le],Ve=I[le];Oe!==null&&Ve!==void 0&&Ve.update(Oe,pe,u||s)}ze&&ze(te,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),v=null}let Ke=new HS;Ke.setAnimationLoop(dt),this.setAnimationLoop=function(te){ze=te},this.dispose=function(){}}},UE=new bt,YS=new He;YS.set(-1,0,0,0,1,0,0,0,1);VE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;dh=class{constructor(e={}){let{canvas:n=hS(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:g=kn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;let C=g,x=new Set([If,Lf,bf]),h=new Set([kn,Ii,io,ao,wf,Cf]),m=new Uint32Array(4),S=new Int32Array(4),M=new G,I=null,L=null,E=[],_=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,D=null,z=null,V=null,O=null;this._outputColorSpace=$n;let Z=0,Y=0,U=null,Q=-1,de=null,se=new Lt,be=new Lt,ze=null,dt=new Ze(0),Ke=0,te=n.width,pe=n.height,le=1,Oe=null,Ve=null,Ne=new Lt(0,0,te,pe),pt=new Lt(0,0,te,pe),qe=!1,rt=new Js,et=!1,je=!1,vt=new bt,It=new G,Nt=new Lt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function At(){return U===null?le:1}let F=i;function ln(b,B){return n.getContext(b,B)}try{let b={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",st,!1),n.addEventListener("webglcontextcreationerror",Nn,!1),F===null){let B="webgl2";if(F=ln(B,b),F===null)throw ln(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Be("WebGLRenderer: "+b.message),b}let it,T,w,N,q,J,ue,fe,ee,ne,ge,Re,_e,xe,ke,H,me,k,re,K,he,ye,ie;function Se(){it=new Z2(F),it.init(),he=new FE(F,it),T=new V2(F,it,e,he),w=new kE(F,it),T.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),z=F.createFramebuffer(),V=F.createFramebuffer(),O=F.createFramebuffer(),N=new J2(F),q=new vE,J=new DE(F,it,w,q,T,he,N),ue=new Y2(P),fe=new nL(F),ye=new O2(F,fe),ee=new K2(F,fe,N,ye),ne=new eA(F,ee,fe,ye,N),k=new Q2(F,T,J),ke=new H2(q),ge=new yE(P,ue,it,T,ye,ke),Re=new OE(P,q),_e=new SE,xe=new IE(it),me=new U2(P,ue,w,ne,v,l),H=new PE(P,ne,T),ie=new zE(F,N,T,w),re=new z2(F,it,N),K=new j2(F,it,N),N.programs=ge.programs,P.capabilities=T,P.extensions=it,P.properties=q,P.renderLists=_e,P.shadowMap=H,P.state=w,P.info=N}Se(),C!==kn&&(A=new nA(C,n.width,n.height,o,a,r));let Le=new p0(P,F);this.xr=Le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(b){b!==void 0&&(le=b,this.setSize(te,pe,!1))},this.getSize=function(b){return b.set(te,pe)},this.setSize=function(b,B,$=!0){if(Le.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,pe=B,n.width=Math.floor(b*le),n.height=Math.floor(B*le),$===!0&&(n.style.width=b+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(te*le,pe*le).floor()},this.setDrawingBufferSize=function(b,B,$){te=b,pe=B,le=$,n.width=Math.floor(b*$),n.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(C===kn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(se)},this.getViewport=function(b){return b.copy(Ne)},this.setViewport=function(b,B,$,W){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,B,$,W),w.viewport(se.copy(Ne).multiplyScalar(le).round())},this.getScissor=function(b){return b.copy(pt)},this.setScissor=function(b,B,$,W){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,B,$,W),w.scissor(be.copy(pt).multiplyScalar(le).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(b){w.setScissorTest(qe=b)},this.setOpaqueSort=function(b){Oe=b},this.setTransparentSort=function(b){Ve=b},this.getClearColor=function(b){return b.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,$=!0){let W=0;if(b){let X=!1;if(U!==null){let Ce=U.texture.format;X=x.has(Ce)}if(X){let Ce=U.texture.type,Ee=h.has(Ce),we=me.getClearColor(),Pe=me.getClearAlpha(),De=we.r,Ge=we.g,Xe=we.b;Ee?(m[0]=De,m[1]=Ge,m[2]=Xe,m[3]=Pe,F.clearBufferuiv(F.COLOR,0,m)):(S[0]=De,S[1]=Ge,S[2]=Xe,S[3]=Pe,F.clearBufferiv(F.COLOR,0,S))}else W|=F.COLOR_BUFFER_BIT}B&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",st,!1),n.removeEventListener("webglcontextcreationerror",Nn,!1),me.dispose(),_e.dispose(),xe.dispose(),q.dispose(),ue.dispose(),ne.dispose(),ye.dispose(),ie.dispose(),ge.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",w0),Le.removeEventListener("sessionend",C0),yr.stop()};function mt(b){b.preventDefault(),Yg("WebGLRenderer: Context Lost."),R=!0}function st(){Yg("WebGLRenderer: Context Restored."),R=!1;let b=N.autoReset,B=H.enabled,$=H.autoUpdate,W=H.needsUpdate,X=H.type;Se(),N.autoReset=b,H.enabled=B,H.autoUpdate=$,H.needsUpdate=W,H.type=X}function Nn(b){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Bn(b){let B=b.target;B.removeEventListener("dispose",Bn),Wu(B)}function Wu(b){qu(b),q.remove(b)}function qu(b){let B=q.get(b).programs;B!==void 0&&(B.forEach(function($){ge.releaseProgram($)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,W,X,Ce){B===null&&(B=Vt);let Ee=X.isMesh&&X.matrixWorld.determinantAffine()<0,we=GM(b,B,$,W,X);w.setMaterial(W,Ee);let Pe=$.index,De=1;if(W.wireframe===!0){if(Pe=ee.getWireframeAttribute($),Pe===void 0)return;De=2}let Ge=$.drawRange,Xe=$.attributes.position,Fe=Ge.start*De,ct=(Ge.start+Ge.count)*De;Ce!==null&&(Fe=Math.max(Fe,Ce.start*De),ct=Math.min(ct,(Ce.start+Ce.count)*De)),Pe!==null?(Fe=Math.max(Fe,0),ct=Math.min(ct,Pe.count)):Xe!=null&&(Fe=Math.max(Fe,0),ct=Math.min(ct,Xe.count));let Bt=ct-Fe;if(Bt<0||Bt===1/0)return;ye.setup(X,W,we,$,Pe);let Pt,ft=re;if(Pe!==null&&(Pt=fe.get(Pe),ft=K,ft.setIndex(Pt)),X.isMesh)W.wireframe===!0?(w.setLineWidth(W.wireframeLinewidth*At()),ft.setMode(F.LINES)):ft.setMode(F.TRIANGLES);else if(X.isLine){let un=W.linewidth;un===void 0&&(un=1),w.setLineWidth(un*At()),X.isLineSegments?ft.setMode(F.LINES):X.isLineLoop?ft.setMode(F.LINE_LOOP):ft.setMode(F.LINE_STRIP)}else X.isPoints?ft.setMode(F.POINTS):X.isSprite&&ft.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let un=X._multiDrawStarts,Ie=X._multiDrawCounts,Un=X._multiDrawCount,tt=Pe?fe.get(Pe).bytesPerElement:1,Qn=q.get(W).currentProgram.getUniforms();for(let Ti=0;Ti<Un;Ti++)Qn.setValue(F,"_gl_DrawID",Ti),ft.render(un[Ti]/tt,Ie[Ti])}else if(X.isInstancedMesh)ft.renderInstances(Fe,Bt,X.count);else if($.isInstancedBufferGeometry){let un=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ie=Math.min($.instanceCount,un);ft.renderInstances(Fe,Bt,Ie)}else ft.render(Fe,Bt)};function xr(b,B,$){b.transparent===!0&&b.side===Wi&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,$u(b,B,$),b.side=ma,b.needsUpdate=!0,$u(b,B,$),b.side=Wi):$u(b,B,$)}this.compile=function(b,B,$=null){$===null&&($=b),L=xe.get($),L.init(B),_.push(L),$.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(L.pushLight(X),X.castShadow&&L.pushShadow(X))}),b!==$&&b.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(L.pushLight(X),X.castShadow&&L.pushShadow(X))}),L.setupLights();let W=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ce=X.material;if(Ce)if(Array.isArray(Ce))for(let Ee=0;Ee<Ce.length;Ee++){let we=Ce[Ee];xr(we,$,X),W.add(we)}else xr(Ce,$,X),W.add(Ce)}),L=_.pop(),W},this.compileAsync=function(b,B,$=null){let W=this.compile(b,B,$);return new Promise(X=>{function Ce(){if(W.forEach(function(Ee){q.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){X(b);return}setTimeout(Ce,10)}it.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Qr=null;function VM(b){Qr&&Qr(b)}function w0(){yr.stop()}function C0(){yr.start()}let yr=new HS;yr.setAnimationLoop(VM),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(b){Qr=b,Le.setAnimationLoop(b),b===null?yr.stop():yr.start()},Le.addEventListener("sessionstart",w0),Le.addEventListener("sessionend",C0),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(b,B);let $=Le.enabled===!0&&Le.isPresenting===!0,W=A!==null&&(U===null||$)&&A.begin(P,U);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(B),B=Le.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,B,U),L=xe.get(b,_.length),L.init(B),L.state.textureUnits=J.getTextureUnits(),_.push(L),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),rt.setFromProjectionMatrix(vt,wi,B.reversedDepth),je=this.localClippingEnabled,et=ke.init(this.clippingPlanes,je),I=_e.get(b,E.length),I.init(),E.push(I),Le.enabled===!0&&Le.isPresenting===!0){let Ee=P.xr.getDepthSensingMesh();Ee!==null&&Lh(Ee,B,-1/0,P.sortObjects)}Lh(b,B,0,P.sortObjects),I.finish(),P.sortObjects===!0&&I.sort(Oe,Ve,B.reversedDepth),_t=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,_t&&me.addToRenderList(I,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&ke.beginShadows();let X=L.state.shadowsArray;if(H.render(X,b,B),et===!0&&ke.endShadows(),(W&&A.hasRenderPass())===!1){let Ee=I.opaque,we=I.transmissive;if(L.setupLights(),B.isArrayCamera){let Pe=B.cameras;if(we.length>0)for(let De=0,Ge=Pe.length;De<Ge;De++){let Xe=Pe[De];L0(Ee,we,b,Xe)}_t&&me.render(b);for(let De=0,Ge=Pe.length;De<Ge;De++){let Xe=Pe[De];b0(I,b,Xe,Xe.viewport)}}else we.length>0&&L0(Ee,we,b,B),_t&&me.render(b),b0(I,b,B)}U!==null&&Y===0&&(J.updateMultisampleRenderTarget(U),J.updateRenderTargetMipmap(U)),W&&A.end(P),b.isScene===!0&&b.onAfterRender(P,b,B),ye.resetDefaultState(),Q=-1,de=null,_.pop(),_.length>0?(L=_[_.length-1],J.setTextureUnits(L.state.textureUnits),et===!0&&ke.setGlobalState(P.clippingPlanes,L.state.camera)):L=null,E.pop(),E.length>0?I=E[E.length-1]:I=null,D!==null&&D.renderEnd()};function Lh(b,B,$,W){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)L.pushLightProbeGrid(b);else if(b.isLight)L.pushLight(b),b.castShadow&&L.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||rt.intersectsSprite(b)){W&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(vt);let Ee=ne.update(b),we=b.material;we.visible&&I.push(b,Ee,we,$,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||rt.intersectsObject(b))){let Ee=ne.update(b),we=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Nt.copy(Ee.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(vt)),Array.isArray(we)){let Pe=Ee.groups;for(let De=0,Ge=Pe.length;De<Ge;De++){let Xe=Pe[De],Fe=we[Xe.materialIndex];Fe&&Fe.visible&&I.push(b,Ee,Fe,$,Nt.z,Xe)}}else we.visible&&I.push(b,Ee,we,$,Nt.z,null)}}let Ce=b.children;for(let Ee=0,we=Ce.length;Ee<we;Ee++)Lh(Ce[Ee],B,$,W)}function b0(b,B,$,W){let{opaque:X,transmissive:Ce,transparent:Ee}=b;L.setupLightsView($),et===!0&&ke.setGlobalState(P.clippingPlanes,$),W&&w.viewport(se.copy(W)),X.length>0&&Xu(X,B,$),Ce.length>0&&Xu(Ce,B,$),Ee.length>0&&Xu(Ee,B,$),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function L0(b,B,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[W.id]===void 0){let Fe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[W.id]=new Zn(1,1,{generateMipmaps:!0,type:Fe?Xi:kn,minFilter:or,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let Ce=L.state.transmissionRenderTarget[W.id],Ee=W.viewport||se;Ce.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);let we=P.getRenderTarget(),Pe=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(Ce),P.getClearColor(dt),Ke=P.getClearAlpha(),Ke<1&&P.setClearColor(16777215,.5),P.clear(),_t&&me.render($);let Ge=P.toneMapping;P.toneMapping=Li;let Xe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),L.setupLightsView(W),et===!0&&ke.setGlobalState(P.clippingPlanes,W),Xu(b,$,W),J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce),it.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ct=0,Bt=B.length;ct<Bt;ct++){let Pt=B[ct],{object:ft,geometry:un,material:Ie,group:Un}=Pt;if(Ie.side===Wi&&ft.layers.test(W.layers)){let tt=Ie.side;Ie.side=sn,Ie.needsUpdate=!0,I0(ft,$,W,un,Ie,Un),Ie.side=tt,Ie.needsUpdate=!0,Fe=!0}}Fe===!0&&(J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce))}P.setRenderTarget(we,Pe,De),P.setClearColor(dt,Ke),Xe!==void 0&&(W.viewport=Xe),P.toneMapping=Ge}function Xu(b,B,$){let W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Ce=b.length;X<Ce;X++){let Ee=b[X],{object:we,geometry:Pe,group:De}=Ee,Ge=Ee.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),we.layers.test($.layers)&&I0(we,B,$,Pe,Ge,De)}}function I0(b,B,$,W,X,Ce){b.onBeforeRender(P,B,$,W,X,Ce),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(P,B,$,W,b,Ce),X.transparent===!0&&X.side===Wi&&X.forceSinglePass===!1?(X.side=sn,X.needsUpdate=!0,P.renderBufferDirect($,B,W,X,b,Ce),X.side=ma,X.needsUpdate=!0,P.renderBufferDirect($,B,W,X,b,Ce),X.side=Wi):P.renderBufferDirect($,B,W,X,b,Ce),b.onAfterRender(P,B,$,W,X,Ce)}function $u(b,B,$){B.isScene!==!0&&(B=Vt);let W=q.get(b),X=L.state.lights,Ce=L.state.shadowsArray,Ee=X.state.version,we=ge.getParameters(b,X.state,Ce,B,$,L.state.lightProbeGridArray),Pe=ge.getProgramCacheKey(we),De=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let Ge=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=ue.get(b.envMap||W.environment,Ge),W.envMapRotation=W.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",Bn),De=new Map,W.programs=De);let Xe=De.get(Pe);if(Xe!==void 0){if(W.currentProgram===Xe&&W.lightsStateVersion===Ee)return E0(b,we),Xe}else we.uniforms=ge.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,$,we),b.onBeforeCompile(we,P),Xe=ge.acquireProgram(we,Pe),De.set(Pe,Xe),W.uniforms=we.uniforms;let Fe=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=ke.uniform),E0(b,we),W.needsLights=qM(b),W.lightsStateVersion=Ee,W.needsLights&&(Fe.ambientLightColor.value=X.state.ambient,Fe.lightProbe.value=X.state.probe,Fe.directionalLights.value=X.state.directional,Fe.directionalLightShadows.value=X.state.directionalShadow,Fe.spotLights.value=X.state.spot,Fe.spotLightShadows.value=X.state.spotShadow,Fe.rectAreaLights.value=X.state.rectArea,Fe.ltc_1.value=X.state.rectAreaLTC1,Fe.ltc_2.value=X.state.rectAreaLTC2,Fe.pointLights.value=X.state.point,Fe.pointLightShadows.value=X.state.pointShadow,Fe.hemisphereLights.value=X.state.hemi,Fe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Fe.spotLightMatrix.value=X.state.spotLightMatrix,Fe.spotLightMap.value=X.state.spotLightMap,Fe.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=L.state.lightProbeGridArray.length>0,W.currentProgram=Xe,W.uniformsList=null,Xe}function A0(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=so.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function E0(b,B){let $=q.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function HM(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let $=0,W=b.length;$<W;$++){let X=b[$];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function GM(b,B,$,W,X){B.isScene!==!0&&(B=Vt),J.resetTextureUnits();let Ce=B.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,we=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Je.workingColorSpace,Pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,De=ue.get(W.envMap||Ee,Pe),Ge=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Bt=!!$.morphAttributes.color,Pt=Li;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pt=P.toneMapping);let ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,un=ft!==void 0?ft.length:0,Ie=q.get(W),Un=L.state.lights;if(et===!0&&(je===!0||b!==de)){let gt=b===de&&W.id===Q;ke.setState(W,b,gt)}let tt=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Un.state.version||Ie.outputColorSpace!==we||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==De||W.fog===!0&&Ie.fog!==Ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ke.numPlanes||Ie.numIntersection!==ke.numIntersection)||Ie.vertexAlphas!==Ge||Ie.vertexTangents!==Xe||Ie.morphTargets!==Fe||Ie.morphNormals!==ct||Ie.morphColors!==Bt||Ie.toneMapping!==Pt||Ie.morphTargetsCount!==un||!!Ie.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Ie.__version=W.version);let Qn=Ie.currentProgram;tt===!0&&(Qn=$u(W,B,X),D&&W.isNodeMaterial&&D.onUpdateProgram(W,Qn,Ie));let Ti=!1,Sa=!1,es=!1,ht=Qn.getUniforms(),Ut=Ie.uniforms;if(w.useProgram(Qn.program)&&(Ti=!0,Sa=!0,es=!0),W.id!==Q&&(Q=W.id,Sa=!0),Ie.needsLights){let gt=HM(L.state.lightProbeGridArray,X);Ie.lightProbeGrid!==gt&&(Ie.lightProbeGrid=gt,Sa=!0)}if(Ti||de!==b){w.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(F,"projectionMatrix",b.projectionMatrix),ht.setValue(F,"viewMatrix",b.matrixWorldInverse);let wa=ht.map.cameraPosition;wa!==void 0&&wa.setValue(F,It.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&ht.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ht.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),de!==b&&(de=b,Sa=!0,es=!0)}if(Ie.needsLights&&(Un.state.directionalShadowMap.length>0&&ht.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,J),Un.state.spotShadowMap.length>0&&ht.setValue(F,"spotShadowMap",Un.state.spotShadowMap,J),Un.state.pointShadowMap.length>0&&ht.setValue(F,"pointShadowMap",Un.state.pointShadowMap,J)),X.isSkinnedMesh){ht.setOptional(F,X,"bindMatrix"),ht.setOptional(F,X,"bindMatrixInverse");let gt=X.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ht.setValue(F,"boneTexture",gt.boneTexture,J))}X.isBatchedMesh&&(ht.setOptional(F,X,"batchingTexture"),ht.setValue(F,"batchingTexture",X._matricesTexture,J),ht.setOptional(F,X,"batchingIdTexture"),ht.setValue(F,"batchingIdTexture",X._indirectTexture,J),ht.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ht.setValue(F,"batchingColorTexture",X._colorsTexture,J));let Ma=$.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0)&&k.update(X,$,Qn),(Sa||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,ht.setValue(F,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Ut.envMapIntensity.value=B.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=HE()),Sa){if(ht.setValue(F,"toneMappingExposure",P.toneMappingExposure),Ie.needsLights&&WM(Ut,es),Ce&&W.fog===!0&&Re.refreshFogUniforms(Ut,Ce),Re.refreshMaterialUniforms(Ut,W,le,pe,L.state.transmissionRenderTarget[b.id]),Ie.needsLights&&Ie.lightProbeGrid){let gt=Ie.lightProbeGrid;Ut.probesSH.value=gt.texture,Ut.probesMin.value.copy(gt.boundingBox.min),Ut.probesMax.value.copy(gt.boundingBox.max),Ut.probesResolution.value.copy(gt.resolution)}so.upload(F,A0(Ie),Ut,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(so.upload(F,A0(Ie),Ut,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ht.setValue(F,"center",X.center),ht.setValue(F,"modelViewMatrix",X.modelViewMatrix),ht.setValue(F,"normalMatrix",X.normalMatrix),ht.setValue(F,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let gt=W.uniformsGroups;for(let wa=0,ts=gt.length;wa<ts;wa++){let T0=gt[wa];ie.update(T0,Qn),ie.bind(T0,Qn)}}return Qn}function WM(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function qM(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,B,$){let W=q.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=B,q.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let $=q.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,$=0){U=b,Z=B,Y=$;let W=null,X=!1,Ce=!1;if(b){let we=q.get(b);if(we.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(F.FRAMEBUFFER,we.__webglFramebuffer),se.copy(b.viewport),be.copy(b.scissor),ze=b.scissorTest,w.viewport(se),w.scissor(be),w.setScissorTest(ze),Q=-1;return}else if(we.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(we.__hasExternalTextures)J.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ge=b.depthTexture;if(we.__boundDepthTexture!==Ge){if(Ge!==null&&q.has(Ge)&&(b.width!==Ge.image.width||b.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ce=!0);let De=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[B])?W=De[B][$]:W=De[B],X=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?W=q.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[$]:W=De,se.copy(b.viewport),be.copy(b.scissor),ze=b.scissorTest}else se.copy(Ne).multiplyScalar(le).floor(),be.copy(pt).multiplyScalar(le).floor(),ze=qe;if($!==0&&(W=z),w.bindFramebuffer(F.FRAMEBUFFER,W)&&w.drawBuffers(b,W),w.viewport(se),w.scissor(be),w.setScissorTest(ze),X){let we=q.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,$)}else if(Ce){let we=B;for(let Pe=0;Pe<b.textures.length;Pe++){let De=q.get(b.textures[Pe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pe,De.__webglTexture,$,we)}}else if(b!==null&&$!==0){let we=q.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,we.__webglTexture,$)}Q=-1},this.readRenderTargetPixels=function(b,B,$,W,X,Ce,Ee,we=0){if(!(b&&b.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){w.bindFramebuffer(F.FRAMEBUFFER,Pe);try{let De=b.textures[we],Ge=De.format,Xe=De.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),!T.textureFormatReadable(Ge)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Xe)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-W&&$>=0&&$<=b.height-X&&F.readPixels(B,$,W,X,he.convert(Ge),he.convert(Xe),Ce)}finally{let De=U!==null?q.get(U).__webglFramebuffer:null;w.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,B,$,W,X,Ce,Ee,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe)if(B>=0&&B<=b.width-W&&$>=0&&$<=b.height-X){w.bindFramebuffer(F.FRAMEBUFFER,Pe);let De=b.textures[we],Ge=De.format,Xe=De.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),!T.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Fe),F.bufferData(F.PIXEL_PACK_BUFFER,Ce.byteLength,F.STREAM_READ),F.readPixels(B,$,W,X,he.convert(Ge),he.convert(Xe),0);let ct=U!==null?q.get(U).__webglFramebuffer:null;w.bindFramebuffer(F.FRAMEBUFFER,ct);let Bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await mS(F,Bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ce),F.deleteBuffer(Fe),F.deleteSync(Bt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,$=0){let W=Math.pow(2,-$),X=Math.floor(b.image.width*W),Ce=Math.floor(b.image.height*W),Ee=B!==null?B.x:0,we=B!==null?B.y:0;J.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ee,we,X,Ce),w.unbindTexture()},this.copyTextureToTexture=function(b,B,$=null,W=null,X=0,Ce=0){let Ee,we,Pe,De,Ge,Xe,Fe,ct,Bt,Pt=b.isCompressedTexture?b.mipmaps[Ce]:b.image;if($!==null)Ee=$.max.x-$.min.x,we=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,De=$.min.x,Ge=$.min.y,Xe=$.isBox3?$.min.z:0;else{let Ut=Math.pow(2,-X);Ee=Math.floor(Pt.width*Ut),we=Math.floor(Pt.height*Ut),b.isDataArrayTexture?Pe=Pt.depth:b.isData3DTexture?Pe=Math.floor(Pt.depth*Ut):Pe=1,De=0,Ge=0,Xe=0}W!==null?(Fe=W.x,ct=W.y,Bt=W.z):(Fe=0,ct=0,Bt=0);let ft=he.convert(B.format),un=he.convert(B.type),Ie;B.isData3DTexture?(J.setTexture3D(B,0),Ie=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(J.setTexture2DArray(B,0),Ie=F.TEXTURE_2D_ARRAY):(J.setTexture2D(B,0),Ie=F.TEXTURE_2D),w.activeTexture(F.TEXTURE0),w.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let Un=w.getParameter(F.UNPACK_ROW_LENGTH),tt=w.getParameter(F.UNPACK_IMAGE_HEIGHT),Qn=w.getParameter(F.UNPACK_SKIP_PIXELS),Ti=w.getParameter(F.UNPACK_SKIP_ROWS),Sa=w.getParameter(F.UNPACK_SKIP_IMAGES);w.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),w.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),w.pixelStorei(F.UNPACK_SKIP_PIXELS,De),w.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),w.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);let es=b.isDataArrayTexture||b.isData3DTexture,ht=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Ut=q.get(b),Ma=q.get(B),gt=q.get(Ut.__renderTarget),wa=q.get(Ma.__renderTarget);w.bindFramebuffer(F.READ_FRAMEBUFFER,gt.__webglFramebuffer),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,wa.__webglFramebuffer);for(let ts=0;ts<Pe;ts++)es&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(b).__webglTexture,X,Xe+ts),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(B).__webglTexture,Ce,Bt+ts)),F.blitFramebuffer(De,Ge,Ee,we,Fe,ct,Ee,we,F.DEPTH_BUFFER_BIT,F.NEAREST);w.bindFramebuffer(F.READ_FRAMEBUFFER,null),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||q.has(b)){let Ut=q.get(b),Ma=q.get(B);w.bindFramebuffer(F.READ_FRAMEBUFFER,V),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let gt=0;gt<Pe;gt++)es?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,X,Xe+gt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ut.__webglTexture,X),ht?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ma.__webglTexture,Ce,Bt+gt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ma.__webglTexture,Ce),X!==0?F.blitFramebuffer(De,Ge,Ee,we,Fe,ct,Ee,we,F.COLOR_BUFFER_BIT,F.NEAREST):ht?F.copyTexSubImage3D(Ie,Ce,Fe,ct,Bt+gt,De,Ge,Ee,we):F.copyTexSubImage2D(Ie,Ce,Fe,ct,De,Ge,Ee,we);w.bindFramebuffer(F.READ_FRAMEBUFFER,null),w.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ht?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Ie,Ce,Fe,ct,Bt,Ee,we,Pe,ft,un,Pt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,Ce,Fe,ct,Bt,Ee,we,Pe,ft,Pt.data):F.texSubImage3D(Ie,Ce,Fe,ct,Bt,Ee,we,Pe,ft,un,Pt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ce,Fe,ct,Ee,we,ft,un,Pt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ce,Fe,ct,Pt.width,Pt.height,ft,Pt.data):F.texSubImage2D(F.TEXTURE_2D,Ce,Fe,ct,Ee,we,ft,un,Pt);w.pixelStorei(F.UNPACK_ROW_LENGTH,Un),w.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt),w.pixelStorei(F.UNPACK_SKIP_PIXELS,Qn),w.pixelStorei(F.UNPACK_SKIP_ROWS,Ti),w.pixelStorei(F.UNPACK_SKIP_IMAGES,Sa),Ce===0&&B.generateMipmaps&&F.generateMipmap(Ie),w.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),w.unbindTexture()},this.resetState=function(){Z=0,Y=0,U=null,w.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}});var ph,g0=ve(()=>{ph=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim()});var KS,jS=ve(()=>{KS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()});var JS,QS=ve(()=>{JS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase())});var x0,e1=ve(()=>{QS();x0=t=>{let e=JS(t);return e.charAt(0).toUpperCase()+e.slice(1)}});var mh,t1=ve(()=>{mh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}});var n1,i1=ve(()=>{n1=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1}});var lo,GE,a1,r1=ve(()=>{"use strict";"use client";lo=Ri(Ca(),1);GE=(0,lo.createContext)({}),a1=()=>(0,lo.useContext)(GE)});var au,s1,o1=ve(()=>{"use strict";"use client";au=Ri(Ca(),1);t1();i1();g0();r1();s1=(0,au.forwardRef)(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:a="",children:r,iconNode:s,...o},l)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:p=!1,color:f="currentColor",className:g=""}=a1()??{},v=i??p?Number(n??d)*24/Number(e??u):n??d;return(0,au.createElement)("svg",{ref:l,...mh,width:e??u??mh.width,height:e??u??mh.height,stroke:t??f,strokeWidth:v,className:ph("lucide",g,a),...!r&&!n1(o)&&{"aria-hidden":"true"},...o},[...s.map(([C,x])=>(0,au.createElement)(C,x)),...Array.isArray(r)?r:[r]])})});var gh,j,Ae=ve(()=>{gh=Ri(Ca(),1);g0();jS();e1();o1();j=(t,e)=>{let n=(0,gh.forwardRef)(({className:i,...a},r)=>(0,gh.createElement)(s1,{ref:r,iconNode:e,className:ph(`lucide-${KS(x0(t))}`,`lucide-${t}`,i),...a}));return n.displayName=x0(t),n}});var WE,ru,l1=ve(()=>{Ae();WE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ru=j("award",WE)});var qE,su,u1=ve(()=>{Ae();qE=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],su=j("bath",qE)});var XE,uo,c1=ve(()=>{Ae();XE=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],uo=j("bed-double",XE)});var $E,ou,d1=ve(()=>{Ae();$E=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ou=j("bell",$E)});var YE,lu,f1=ve(()=>{Ae();YE=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],lu=j("bike",YE)});var ZE,co,h1=ve(()=>{Ae();ZE=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],co=j("box",ZE)});var KE,uu,p1=ve(()=>{Ae();KE=[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]],uu=j("brush",KE)});var jE,va,m1=ve(()=>{Ae();jE=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],va=j("building-2",jE)});var JE,cu,g1=ve(()=>{Ae();JE=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],cu=j("calculator",JE)});var QE,fo,x1=ve(()=>{Ae();QE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],fo=j("calendar-check",QE)});var eT,du,y1=ve(()=>{Ae();eT=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],du=j("car",eT)});var tT,fu,v1=ve(()=>{Ae();tT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],fu=j("check",tT)});var nT,ho,_1=ve(()=>{Ae();nT=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ho=j("chevron-right",nT)});var iT,hu,S1=ve(()=>{Ae();iT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],hu=j("clock",iT)});var aT,pu,M1=ve(()=>{Ae();aT=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],pu=j("coffee",aT)});var rT,mu,w1=ve(()=>{Ae();rT=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]],mu=j("cross",rT)});var sT,Xr,C1=ve(()=>{Ae();sT=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Xr=j("dollar-sign",sT)});var oT,gu,b1=ve(()=>{Ae();oT=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],gu=j("droplets",oT)});var lT,xu,L1=ve(()=>{Ae();lT=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],xu=j("dumbbell",lT)});var uT,po,I1=ve(()=>{Ae();uT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],po=j("eye",uT)});var cT,dr,A1=ve(()=>{Ae();cT=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],dr=j("file-text",cT)});var dT,yu,E1=ve(()=>{Ae();dT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],yu=j("film",dT)});var fT,vu,T1=ve(()=>{Ae();fT=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],vu=j("footprints",fT)});var hT,_u,R1=ve(()=>{Ae();hT=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]],_u=j("git-compare",hT)});var pT,Su,P1=ve(()=>{Ae();pT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Su=j("globe",pT)});var mT,mo,k1=ve(()=>{Ae();mT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],mo=j("heart",mT)});var gT,ui,D1=ve(()=>{Ae();gT=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ui=j("house",gT)});var xT,go,F1=ve(()=>{Ae();xT=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",key:"yxxwt6"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],go=j("landmark",xT)});var yT,Mu,N1=ve(()=>{Ae();yT=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Mu=j("languages",yT)});var vT,xo,B1=ve(()=>{Ae();vT=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],xo=j("list",vT)});var _T,wu,U1=ve(()=>{Ae();_T=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wu=j("mail",_T)});var ST,yo,O1=ve(()=>{Ae();ST=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],yo=j("map-pin",ST)});var MT,Cu,z1=ve(()=>{Ae();MT=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Cu=j("map",MT)});var wT,bu,V1=ve(()=>{Ae();wT=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],bu=j("message-circle",wT)});var CT,vo,H1=ve(()=>{Ae();CT=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],vo=j("message-square",CT)});var bT,Lu,G1=ve(()=>{Ae();bT=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Lu=j("moon",bT)});var LT,Iu,W1=ve(()=>{Ae();LT=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],Iu=j("mountain",LT)});var IT,Au,q1=ve(()=>{Ae();IT=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Au=j("navigation",IT)});var AT,_o,X1=ve(()=>{Ae();AT=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],_o=j("palette",AT)});var ET,Eu,$1=ve(()=>{Ae();ET=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Eu=j("pause",ET)});var TT,Tu,Y1=ve(()=>{Ae();TT=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Tu=j("phone",TT)});var RT,Ru,Z1=ve(()=>{Ae();RT=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ru=j("play",RT)});var PT,Pu,K1=ve(()=>{Ae();PT=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],Pu=j("route",PT)});var kT,$r,j1=ve(()=>{Ae();kT=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],$r=j("send",kT)});var DT,Dn,J1=ve(()=>{Ae();DT=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Dn=j("shield-check",DT)});var FT,So,Q1=ve(()=>{Ae();FT=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],So=j("shopping-bag",FT)});var NT,Mo,eM=ve(()=>{Ae();NT=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Mo=j("shopping-cart",NT)});var BT,Yr,tM=ve(()=>{Ae();BT=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]],Yr=j("sofa",BT)});var UT,Ei,nM=ve(()=>{Ae();UT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ei=j("sparkles",UT)});var OT,wo,iM=ve(()=>{Ae();OT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],wo=j("star",OT)});var zT,ku,aM=ve(()=>{Ae();zT=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ku=j("sun",zT)});var VT,Du,rM=ve(()=>{Ae();VT=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Du=j("thermometer",VT)});var HT,Fu,sM=ve(()=>{Ae();HT=[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}],["path",{d:"M17 14V2",key:"8ymqnk"}]],Fu=j("thumbs-down",HT)});var GT,Zr,oM=ve(()=>{Ae();GT=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]],Zr=j("train-front",GT)});var WT,Kr,lM=ve(()=>{Ae();WT=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],Kr=j("trees",WT)});var qT,Nu,uM=ve(()=>{Ae();qT=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Nu=j("trending-down",qT)});var XT,Bu,cM=ve(()=>{Ae();XT=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Bu=j("trending-up",XT)});var $T,fr,dM=ve(()=>{Ae();$T=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],fr=j("triangle-alert",$T)});var YT,Uu,fM=ve(()=>{Ae();YT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Uu=j("user",YT)});var ZT,Ou,hM=ve(()=>{Ae();ZT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ou=j("users",ZT)});var KT,Zi,pM=ve(()=>{Ae();KT=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],Zi=j("utensils-crossed",KT)});var jT,zu,mM=ve(()=>{Ae();jT=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],zu=j("volume-2",jT)});var JT,_a,gM=ve(()=>{Ae();JT=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],_a=j("wand-sparkles",JT)});var QT,hr,xM=ve(()=>{Ae();QT=[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],hr=j("waves-horizontal",QT)});var eR,Vu,yM=ve(()=>{Ae();eR=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],Vu=j("wind",eR)});var tR,pr,vM=ve(()=>{Ae();tR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pr=j("x",tR)});var _M=ve(()=>{"use strict";D1();nM();dM();pM();gM();xM();l1();u1();c1();d1();f1();h1();p1();m1();g1();x1();y1();v1();_1();S1();M1();w1();C1();b1();L1();I1();A1();E1();T1();R1();P1();k1();F1();N1();B1();U1();O1();z1();V1();H1();G1();W1();q1();X1();$1();Y1();Z1();K1();j1();J1();Q1();eM();tM();iM();aM();rM();sM();oM();uM();lM();cM();fM();hM();mM();yM();vM();});var kM={};jM(kM,{default:()=>HR});function S0(t,e,n){let i=e/100;if(i<=0)return t/(n*12);let a=Math.pow(1+i/2,2/12)-1,r=n*12;return t*a/(1-Math.pow(1+a,-r))}function nR(t){return t>=20?0:t>=15?.028:t>=10?.031:.04}function iR(t,e){let n=Mh[e]||Mh.longueuil,i=0,a=0;for(let[r,s]of n.brackets){let o=Math.min(t,r);if(o>a&&(i+=(o-a)*s),a=r,t<=r)break}return Math.round(i)}function PM(t,e,n=6,i=.028){let a=new Date().getFullYear(),r=[];for(let s=0;s<=n;s++){let o=a+s,l=t*Math.pow(1+i-.006,s),u=t*Math.pow(1+i,s),d=t*Math.pow(1+i+.006,s);for(let p of e){let f=Math.max(0,Math.min(1,(o-(p.year-2))/2));l+=t*(p.lo/100)*f,u+=t*((p.lo+p.hi)/2/100)*f,d+=t*(p.hi/100)*f}r.push({yr:o,low:Math.round(l),mid:Math.round(u),high:Math.round(d)})}return r}function wM(){let e=Date.now(),n=(i,a,r,s,o,l)=>({id:`${i}-${s}-${o}`,pid:i,pname:a,lid:r,type:s,ts:e-o*36e5,meta:l||null});return[n("p_eric","\xC9ric Bouchard","28374619","visit",52),n("p_eric","\xC9ric Bouchard","28374619","visit",29),n("p_eric","\xC9ric Bouchard","28374619","visit",5),n("p_eric","\xC9ric Bouchard","28374619","tour_view",29),n("p_eric","\xC9ric Bouchard","28374619","calc_use",28),n("p_eric","\xC9ric Bouchard","28374619","forecast_view",28),n("p_eric","\xC9ric Bouchard","28374619","chat_topic",27,{topic:"financement"}),n("p_eric","\xC9ric Bouchard","28374619","broker_message",4,{text:"Est-ce que le vendeur serait ouvert \xE0 une prise de possession en juillet?"}),n("p_nadia","Nadia Kaci","19052833","visit",70),n("p_nadia","Nadia Kaci","19052833","visit",20),n("p_nadia","Nadia Kaci","19052833","tour_view",20),n("p_nadia","Nadia Kaci","19052833","commute_calc",19),n("p_nadia","Nadia Kaci","19052833","calc_use",19),n("p_nadia","Nadia Kaci","19052833","reaction_interested",18),n("p_simon","Simon Lavall\xE9e","28374619","visit",90),n("p_simon","Simon Lavall\xE9e","28374619","reaction_pass",89,{reasons:["prix"]})]}function aR(t,e){let n={centris:t.id,adresse:`${t.addr}, ${t.area}`,type:t.typeFr,prix:t.price,evaluation_municipale:t.evalMun,superficie_pi2:t.sqft,annee:t.year,chambres:t.beds,sdb:t.baths,stationnement:t.parkFr,taxes_municipales_an:t.taxesMun,taxes_scolaires_an:t.taxesScol,frais_copro_mois:t.condoFees,chauffage:mr[t.heating].fr,inclusions:t.inclFr},i=t.dv.map(a=>`[DV ${a.s}] ${a.qFr} : ${a.aFr}`).join(`
`);return`Tu es l\u2019assistant de propri\xE9t\xE9 de ${on.name}, ${on.title_fr} (${on.agency}), pour UNE seule inscription.

FICHE (source: fiche descriptive Centris) :
${JSON.stringify(n,null,1)}

D\xC9CLARATIONS DU VENDEUR (source: formulaire DV, extraits) :
${i}

R\xC8GLES STRICTES :
1. R\xE9ponds UNIQUEMENT \xE0 partir des donn\xE9es ci-dessus. Cite ta source (\xAB Selon la fiche\u2026 \xBB ou \xAB Selon la d\xE9claration du vendeur, section D7\u2026 \xBB).
2. Si l\u2019information n\u2019est pas dans les donn\xE9es : dis-le, ne devine JAMAIS, mets "escalate": true (transmis \xE0 ${on.name}).
3. INTERDIT : conseil sur le prix d\u2019offre ou la n\xE9gociation, conseil juridique/fiscal/hypoth\xE9caire personnalis\xE9, toute caract\xE9risation des r\xE9sidents du quartier. Redirige vers ${on.name}.
4. R\xE9ponds dans la langue du dernier message (d\xE9faut : ${e==="fr"?"fran\xE7ais":"anglais"}). Maximum 110 mots. Ton chaleureux et pr\xE9cis.
5. R\xE9ponds SEULEMENT avec un objet JSON valide, sans backticks :
{"reply": "\u2026", "escalate": true|false, "topics": ["\u2026"]}
"topics" : 1 \xE0 3 parmi : financement, taxes, copropriete, chauffage, renovations, inclusions, stationnement, quartier, visite, juridique, autre.`}async function rR(t,e,n,i){let a=n.slice(-12).map(u=>({role:u.role,content:u.text})).concat([{role:"user",content:i}]),l=((await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1e3,system:aR(t,e),messages:a})})).json()).content||[]).filter(u=>u.type==="text").map(u=>u.text).join(`
`).replace(/```json|```/g,"").trim();try{let u=JSON.parse(l);return{reply:u.reply||l,escalate:!!u.escalate,topics:Array.isArray(u.topics)&&u.topics.length?u.topics:["autre"]}}catch{return{reply:l||"\u2026",escalate:!1,topics:["autre"]}}}async function sR(t,e){let n=`Recherche des nouvelles R\xC9CENTES (transport, zonage, grands projets, construction, risques) susceptibles d\u2019influencer la valeur immobili\xE8re pr\xE8s de \xAB ${t.addr}, ${t.area} \xBB (Qu\xE9bec).
R\xE9sume 2 \xE0 4 facteurs concrets. Pour chacun estime un impact prudent sur les prix locaux, en pourcentage (n\xE9gatif possible).
R\xE9ponds SEULEMENT avec un objet JSON valide, sans backticks :
{"drivers":[{"kind":"transit|zoning|commercial|risk","label_fr":"\u2026","label_en":"\u2026","dist":"~x km|\u2014","year":2029,"lo":2,"hi":5,"src":"source"}],"note_fr":"mise en garde br\xE8ve","note_en":"brief caveat"}`,s=((await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1200,messages:[{role:"user",content:n}],tools:[{type:"web_search_20250305",name:"web_search"}]})})).json()).content||[]).filter(d=>d.type==="text").map(d=>d.text).join(`
`).replace(/```json|```/g,"").trim(),o=s.match(/\{[\s\S]*\}/),l=JSON.parse(o?o[0]:s);return{drivers:(l.drivers||[]).slice(0,4).map(d=>({kind:["transit","zoning","commercial","risk"].includes(d.kind)?d.kind:"commercial",fr:d.label_fr||d.label_en||"Facteur",en:d.label_en||d.label_fr||"Factor",dist:d.dist||"\u2014",year:Number(d.year)||new Date().getFullYear()+3,lo:Number(d.lo)||0,hi:Number(d.hi)||0,srcFr:d.src||"Actualit\xE9",srcEn:d.src||"News",live:!0})),noteFr:l.note_fr||"",noteEn:l.note_en||""}}function lR({rows:t,lang:e,height:n=150}){let a=n,r=44,s=8,o=10,l=22,u=t.flatMap(h=>[h.low,h.high]),d=Math.min(...u)*.995,p=Math.max(...u)*1.005,f=h=>r+h/(t.length-1)*(320-r-s),g=h=>o+(1-(h-d)/(p-d||1))*(a-o-l),v=h=>t.map((m,S)=>`${f(S)},${g(m[h])}`).join(" "),C=t.map((h,m)=>`${f(m)},${g(h.high)}`).concat(t.slice().reverse().map((h,m)=>`${f(t.length-1-m)},${g(h.low)}`)).join(" "),x=[d,(d+p)/2,p];return(0,c.jsxs)("svg",{viewBox:`0 0 320 ${a}`,width:"100%",height:a,role:"img","aria-label":"Projection de prix",children:[x.map((h,m)=>(0,c.jsxs)("g",{children:[(0,c.jsx)("line",{x1:r,x2:320-s,y1:g(h),y2:g(h),stroke:y.line,strokeWidth:"1"}),(0,c.jsx)("text",{x:r-6,y:g(h)+3,textAnchor:"end",style:{fontFamily:ce.mono,fontSize:8.5,fill:y.sub},children:Sh(h,e)})]},m)),(0,c.jsx)("polygon",{points:C,fill:y.metro,opacity:"0.10"}),(0,c.jsx)("polyline",{points:v("high"),fill:"none",stroke:y.metro,strokeWidth:"1",opacity:"0.4",strokeDasharray:"3 3"}),(0,c.jsx)("polyline",{points:v("low"),fill:"none",stroke:y.metro,strokeWidth:"1",opacity:"0.4",strokeDasharray:"3 3"}),(0,c.jsx)("polyline",{points:v("mid"),fill:"none",stroke:y.metro,strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"}),t.map((h,m)=>m%1===0?(0,c.jsx)("text",{x:f(m),y:a-6,textAnchor:"middle",style:{fontFamily:ce.mono,fontSize:8.5,fill:y.sub},children:`\u2019${String(h.yr).slice(2)}`},m):null)]})}function uR({hours:t,series:e,lang:n,height:i=140}){let r=i,s=26,o=6,l=8,u=20,d=e.flatMap(C=>C.values),p=Math.max(...d)*1.1,f=(320-s-o)/t.length,g=Math.min(9,(f-4)/e.length),v=C=>l+(1-C/p)*(r-l-u);return(0,c.jsxs)("svg",{viewBox:`0 0 320 ${r}`,width:"100%",height:r,role:"img","aria-label":"Temps de trajet",children:[[0,p/2,p].map((C,x)=>(0,c.jsxs)("g",{children:[(0,c.jsx)("line",{x1:s,x2:320-o,y1:v(C),y2:v(C),stroke:y.line}),(0,c.jsx)("text",{x:s-4,y:v(C)+3,textAnchor:"end",style:{fontFamily:ce.mono,fontSize:8,fill:y.sub},children:Math.round(C)})]},x)),t.map((C,x)=>(0,c.jsxs)("g",{children:[e.map((h,m)=>{let S=s+x*f+(f-g*e.length)/2+m*g,M=v(h.values[x]);return(0,c.jsx)("rect",{x:S,y:M,width:g-1.5,height:r-u-M,rx:"1.5",fill:h.color},m)}),(0,c.jsxs)("text",{x:s+x*f+f/2,y:r-6,textAnchor:"middle",style:{fontFamily:ce.mono,fontSize:8,fill:y.sub},children:[C,"h"]})]},x))]})}function bh(t,e,n=256,i=256,a=[1,1]){if(_0[t])return _0[t];let r=document.createElement("canvas");r.width=n,r.height=i,e(r.getContext("2d"),n,i);let s=new Dl(r);return s.wrapS=s.wrapT=qs,s.repeat.set(a[0],a[1]),_0[t]=s,s}function cR(){return bh("plank",(t,e,n)=>{t.fillStyle="#f2ede4",t.fillRect(0,0,e,n);for(let i=0;i<n;i+=32){let a=226+Math.floor(Math.random()*20);t.fillStyle=`rgb(${a},${a-7},${a-16})`,t.fillRect(0,i,e,30),t.fillStyle="rgba(120,100,78,.38)",t.fillRect(0,i+30,e,2);for(let r=Math.random()*70;r<e;r+=90+Math.random()*70)t.fillRect(r,i,2,30)}},256,256,[2,2])}function dR(){return bh("deck",(t,e,n)=>{t.fillStyle="#d9d2c2",t.fillRect(0,0,e,n);for(let i=0;i<n;i+=42){let a=196+Math.floor(Math.random()*18);t.fillStyle=`rgb(${a},${a-10},${a-24})`,t.fillRect(0,i,e,38),t.fillStyle="rgba(90,74,56,.4)",t.fillRect(0,i+38,e,4)}},256,256,[1.6,1.6])}function fR(){return bh("grass",(t,e,n)=>{t.fillStyle="#b8d3ac",t.fillRect(0,0,e,n);for(let i=0;i<900;i++){let a=["#a7c79a","#c2dcb5","#9dbf8f","#b0cda2"];t.fillStyle=a[i%4],t.fillRect(Math.random()*e,Math.random()*n,2,2+Math.random()*2)}},256,256,[16,16])}function CM(t){return bh("sky-"+t,(e,n,i)=>{let a=e.createLinearGradient(0,0,0,i);if(t==="dusk"?(a.addColorStop(0,"#141d3f"),a.addColorStop(.55,"#3a3a63"),a.addColorStop(.82,"#b65a33"),a.addColorStop(1,"#e8925a")):(a.addColorStop(0,"#9cc4ea"),a.addColorStop(.6,"#cfe3f5"),a.addColorStop(1,"#eef6fc")),e.fillStyle=a,e.fillRect(0,0,n,i),t==="dusk"){e.fillStyle="rgba(255,255,255,.85)";for(let r=0;r<60;r++)e.fillRect(Math.random()*n,Math.random()*i*.5,1.4,1.4);e.fillStyle="#f4ead2",e.beginPath(),e.arc(n*.78,i*.2,13,0,7),e.fill()}else{let r=e.createRadialGradient(n*.78,i*.22,4,n*.78,i*.22,60);r.addColorStop(0,"rgba(255,246,214,.95)"),r.addColorStop(1,"rgba(255,246,214,0)"),e.fillStyle=r,e.fillRect(0,0,n,i)}},512,256)}function hR(t,e,n){let i=new Ci,a=(o,l={})=>new Pn({color:o,roughness:.82,metalness:.03,...l}),r=(o,l,u,d,p=0,f=0,g=0,v="wood",C)=>{let x=new at(new Rn(o,l,u),a(d,C));return x.position.set(p,f+l/2,g),x.castShadow=!0,x.userData={role:v,base:d},i.add(x),x},s=(o,l,u,d,p=0,f=0,g=0,v="wood",C)=>{let x=new at(new bi(o,l,u,20),a(d,C));return x.position.set(p,f+u/2,g),x.castShadow=!0,x.userData={role:v,base:d},i.add(x),x};switch(t){case"sofa":r(2,.42,.85,"#8FA0BC",0,0,-n/2+.62,"fabric"),r(2,.52,.2,"#7C8DAA",0,.42,-n/2+.3,"fabric"),r(.22,.5,.85,"#7C8DAA",-1,.1,-n/2+.62,"fabric"),r(.22,.5,.85,"#7C8DAA",1,.1,-n/2+.62,"fabric"),r(.5,.12,.4,"#EAEFF6",-.4,.44,-n/2+.58,"accent"),r(.5,.12,.4,"#DCE4F0",.42,.44,-n/2+.58,"accent");break;case"coffee":r(.95,.06,.52,"#B79B77",0,.26,-.1,"wood"),[[-.4,-.2],[.4,-.2],[-.4,.2],[.4,.2]].forEach(([o,l])=>r(.05,.26,.05,"#8C7454",o,0,l-.1,"wood")),r(.3,.03,.2,"#C8D4E4",.1,.32,-.1,"accent");break;case"rug":r(2.5,.02,1.6,"#C7BEA8",0,0,0,"fabric"),r(2.2,.021,1.3,"#D6CDb8".replace("b","B"),0,.002,0,"fabric");break;case"tv":r(1.25,.42,.34,"#9A9FA8",0,0,n/2-.36,"wood"),r(1.35,.78,.06,"#14171C",0,.55,n/2-.3,"screen",{roughness:.35});break;case"plant":s(.15,.11,.28,"#B0714F",e/2-.45,0,n/2-.45,"wood"),s(.02,.02,.35,"#5E7A52",e/2-.45,.28,n/2-.45,"leaf"),["#4F8A5B","#5E9A68","#447D50"].forEach((o,l)=>{let u=new at(new nr(.16-l*.02,12,10),a(o));u.position.set(e/2-.45+(l-1)*.09,.72+l*.1,n/2-.45+(l-1)*.05),u.castShadow=!0,u.userData={role:"leaf",base:o},i.add(u)});break;case"art":r(.95,.7,.05,"#FFFFFF",-.6,1.05,-n/2+.1,"accent"),r(.82,.57,.055,"#7FA0CE",-.6,1.115,-n/2+.1,"art");break;case"counter":r(e-1,.52,.55,"#D8CBB0",0,0,n/2-.4,"wood"),r(e-1,.07,.62,"#B9A886",0,.52,n/2-.4,"accent"),r(.5,.4,.5,"#C9CFD8",-e/4,.6,n/2-.4,"metal",{metalness:.4,roughness:.45});break;case"island":r(1.45,.55,.72,"#C9B79A",0,0,0,"wood"),r(1.55,.06,.82,"#EDE7DA",0,.55,0,"accent");break;case"stool":s(.17,.15,.1,"#C9B79A",-.4,.5,.62,"wood"),s(.03,.03,.5,"#8C7454",-.4,0,.62,"wood"),s(.17,.15,.1,"#C9B79A",.4,.5,.62,"wood"),s(.03,.03,.5,"#8C7454",.4,0,.62,"wood");break;case"bed":r(1.6,.32,2,"#9AA6BC",0,.12,0,"fabric"),r(1.66,.14,2.06,"#C8B79A",0,0,0,"wood"),r(1.6,.6,.14,"#7E8AA2",0,.3,-.98,"wood"),r(.62,.15,.42,"#EAEFF6",-.42,.44,-.68,"accent"),r(.62,.15,.42,"#EAEFF6",.42,.44,-.68,"accent"),r(1.6,.06,.8,"#B9C6D8",0,.44,.55,"fabric");break;case"bedS":r(1.1,.3,1.9,"#A6A0BC",0,.1,0,"fabric"),r(1.16,.12,1.96,"#C8B79A",0,0,0,"wood"),r(1.1,.52,.13,"#8B85A6",0,.28,-.92,"wood"),r(.55,.14,.38,"#EFF2F8",0,.4,-.62,"accent");break;case"night":r(.45,.42,.4,"#B7A98C",0,0,0,"wood"),s(.09,.11,.06,"#E8DFC8",0,.42,0,"accent"),s(.015,.015,.16,"#8C7454",0,.48,0,"wood"),s(.11,.13,.14,"#F2E9D2",0,.62,0,"lamp",{emissive:"#f5e6bd",emissiveIntensity:.15});break;case"tub":r(1.5,.5,.72,"#E7EFEA",0,0,0,"fixture",{roughness:.35}),r(1.3,.05,.52,"#CFE0EA",0,.42,0,"fixture",{roughness:.2});break;case"vanity":r(.82,.55,.46,"#CBD6D0",0,0,0,"wood"),r(.86,.05,.5,"#EDF2F0",0,.55,0,"fixture");break;case"mirror":r(.62,.82,.04,"#DCE9F2",.7,1,-n/2+.09,"fixture",{roughness:.15,metalness:.25});break;case"table":r(1.5,.07,.92,"#B79B77",0,.62,0,"wood"),[[-.66,-.4],[.66,-.4],[-.66,.4],[.66,.4]].forEach(([o,l])=>r(.07,.62,.07,"#8C7454",o,0,l,"wood")),r(.34,.05,.34,"#DCE4F0",0,.69,0,"accent");break;case"chair":r(.45,.45,.45,"#9BB0A2",-.5,0,0,"fabric"),r(.45,.42,.1,"#89A092",-.5,.45,-.18,"fabric");break;case"chair2":r(.45,.45,.45,"#9BB0A2",.5,0,0,"fabric"),r(.45,.42,.1,"#89A092",.5,.45,-.18,"fabric");break;case"car":r(1.7,.55,3.7,"#7E8794",0,.18,0,"metal",{metalness:.5,roughness:.4}),r(1.5,.5,1.9,"#99A2AF",0,.7,-.2,"metal",{metalness:.5,roughness:.35}),[[-.78,1.2],[.78,1.2],[-.78,-1.2],[.78,-1.2]].forEach(([o,l])=>{let u=new at(new bi(.26,.26,.16,16),a("#23262B",{roughness:.9}));u.rotation.z=Math.PI/2,u.position.set(o,.26,l),u.userData={role:"metal",base:"#23262B"},i.add(u)});break;case"pool":{let o=new at(new bi(1.45,1.45,.55,26),a("#B9C2CC"));o.position.y=.275,o.userData={role:"metal",base:"#B9C2CC"},i.add(o);let l=new at(new bi(1.36,1.36,.08,26),a("#5FA9C9",{roughness:.15,metalness:.1}));l.position.y=.54,l.userData={role:"water",base:"#5FA9C9"},i.add(l);break}case"shed":r(1.6,1.3,1.4,"#B7A98C",e/2-1.2,0,-n/2+1,"wood"),r(1.8,.28,1.6,"#8C7454",e/2-1.2,1.3,-n/2+1,"wood");break;default:break}return i.userData={shopKey:t},i}function yh(t,e){let n=gr[e]||gr.classique;t.scene.traverse(i=>{if(!i.isMesh||!i.userData||!i.userData.role)return;let a=i.userData.role;if(a==="floor"||a==="leaf"||a==="water"||a==="screen"||a==="lamp"||a==="trunk")return;let r=e==="classique"?i.userData.base:n[a]||(a==="art"?n.accent:null)||i.userData.base;i.material&&i.material.color&&i.material.color.set(r)}),t.wallMat&&t.wallMat.color.set(e==="classique"?"#F1F3F7":n.wall)}function pR(t){let e=new Ci,n=(r,s={})=>new Pn({color:r,roughness:.95,...s}),i=new at(new bi(.1,.16,1,8),n("#7a5c40"));i.position.y=.5,i.castShadow=!0,i.userData={role:"trunk",base:"#7a5c40"},e.add(i);let a=[];return t==="spruce"?["#2F6B4F","#38795A","#2A5E45"].forEach((r,s)=>{let o=new at(new Bl(.9-s*.22,1.1,10),n(r));o.position.y=1.2+s*.7,o.castShadow=!0,o.userData={role:"leaf",base:r},e.add(o),a.push(o)}):[[0,1.5,0,.72],[-.4,1.25,.15,.5],[.42,1.3,-.1,.52]].forEach(([r,s,o,l],u)=>{let d=["#6FA36B","#7FB279","#639661"][u],p=new at(new nr(l,12,10),n(d));p.position.set(r,s,o),p.castShadow=!0,p.userData={role:"leaf",base:d},e.add(p),a.push(p)}),e.userData.leaves=a,e}function mR({listing:t,lang:e,onEvent:n,theme:i="classique",onThemeChange:a,onDesigner:r}){let s=(0,ae.useRef)(null),o=(0,ae.useRef)({}),[l,u]=(0,ae.useState)(0),[d,p]=(0,ae.useState)("orbit"),[f,g]=(0,ae.useState)("day"),[v,C]=(0,ae.useState)(!y0),[x,h]=(0,ae.useState)(!0),[m,S]=(0,ae.useState)(!1),[M,I]=(0,ae.useState)(null),[L,E]=(0,ae.useState)(!1),[_,A]=(0,ae.useState)(null),[P,R]=(0,ae.useState)(null),[D,z]=(0,ae.useState)(50),V=(U,Q)=>e==="fr"?U:Q,O=M?M.plan:t.plan;(0,ae.useEffect)(()=>{let U=s.current;if(!U)return;let Q=U.clientWidth,de=360,se=new El,be=new an(60,Q/de,.1,260),ze=new dh({antialias:!0,preserveDrawingBuffer:!0});ze.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),ze.setSize(Q,de),ze.shadowMap.enabled=!0,ze.shadowMap.type=yf,ze.outputEncoding=void 0,ze.toneMapping=ql,ze.toneMappingExposure=1.06,U.appendChild(ze.domElement),ze.domElement.className="tour-canvas",ze.domElement.style.borderRadius="12px",ze.domElement.style.cursor="grab";let dt=1/0,Ke=-1/0,te=1/0,pe=-1/0;O.forEach(H=>{dt=Math.min(dt,H.x),Ke=Math.max(Ke,H.x+H.w),te=Math.min(te,H.z),pe=Math.max(pe,H.z+H.d)});let le=(dt+Ke)/2,Oe=(te+pe)/2,Ve=Ke-dt,Ne=pe-te,pt=Math.sqrt(Ve*Ve+Ne*Ne),qe=H=>H-le,rt=H=>H-Oe,et=new at(new nr(110,24,16),new Hr({map:CM("day"),side:sn}));se.add(et);let je=new Pn({map:fR(),color:"#ffffff",roughness:1}),vt=new at(new Nl(70,48),je);vt.rotation.x=-Math.PI/2,vt.position.y=-.02,vt.receiveShadow=!0,se.add(vt);let It=new at(new Rn(Ve+1.6,.08,Ne+1.6),new Pn({color:"#D8DCE2",roughness:.95}));It.position.y=-.04,It.receiveShadow=!0,se.add(It);let Nt=[],Vt=[],_t=[],At=new Pn({color:"#F1F3F7",roughness:.95}),F=cR(),ln=dR();O.forEach(H=>{let me=qe(H.x+H.w/2),k=rt(H.z+H.d/2),re=new Pn({map:H.open?ln:F,color:H.col,roughness:.9}),K=new at(new Rn(H.w,.07,H.d),re);if(K.position.set(me,.035,k),K.receiveShadow=!0,K.userData={role:"floor",base:H.col},se.add(K),H.open){let ye=new Pn({color:"#C4CCD8"});for(let Se=0;Se<=4;Se++){let Le=new at(new Rn(.06,.7,.06),ye);Le.position.set(me-H.w/2+Se/4*H.w,.35,k+H.d/2),se.add(Le)}let ie=new at(new Rn(H.w+.06,.05,.06),ye);ie.position.set(me,.72,k+H.d/2),se.add(ie)}else{let Se=(Nn,Bn,Wu,qu)=>{let xr=new at(new Rn(Nn,1.32,Bn),At);xr.position.set(Wu,.66,qu),xr.castShadow=!0,xr.receiveShadow=!0,se.add(xr);let Qr=new at(new Rn(Nn+.02,.045,Bn+.02),new Pn({color:"#D7DCE4",roughness:.9}));Qr.position.set(Wu,1.34,qu),se.add(Qr)};Se(H.w,.09,me,k-H.d/2),Se(H.w,.09,me,k+H.d/2),Se(.09,H.d,me-H.w/2,k),Se(.09,H.d,me+H.w/2,k);let Le=new at(new bi(.015,.015,.8,6),new Pn({color:"#3a3f48"}));Le.position.set(me,2.15,k),se.add(Le);let mt=new at(new nr(.09,12,10),new Pn({color:"#f7ecd4",emissive:"#ffd9a0",emissiveIntensity:.12}));mt.position.set(me,1.72,k),se.add(mt),_t.push(mt);let st=new Hl("#ffd9a0",0,7,2);st.position.set(me,1.7,k),se.add(st),Vt.push(st)}let he=new Ci;(H.furn||[]).forEach(ye=>he.add(hR(ye,H.w,H.d))),he.position.set(me,.07,k),se.add(he),Nt.push(he)});let it=[],T=Math.max(Ve,Ne)/2+3.2;for(let H=0;H<7;H++){let me=H/7*Math.PI*2+.35,k=pR(H%3===0?"leafy":"spruce"),re=T+H%2*1.6;k.position.set(Math.cos(me)*re,0,Math.sin(me)*re);let K=.85+H%3*.2;k.scale.set(K,K,K),se.add(k),it.push(k)}let w=new zl("#ffffff","#7d8695",.85);se.add(w);let N=new to("#fff2dc",1);N.position.set(9,15,7),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),N.shadow.bias=-4e-4,N.shadow.camera.near=1,N.shadow.camera.far=70,N.shadow.camera.left=-22,N.shadow.camera.right=22,N.shadow.camera.top=22,N.shadow.camera.bottom=-22,se.add(N);let q=new to("#dfe9f5",.25);q.position.set(-8,6,-6),se.add(q);let J=O.map(H=>new G(qe(H.x+H.w/2),1.45,rt(H.z+H.d/2))),ue=new G(pt*.9+2,pt*.55+1.5,pt*.9+2);be.position.copy(ue),o.current={scene:se,camera:be,renderer:ze,waypoints:J,camPos:ue,hemi:w,sun:N,fill:q,sky:et,groundMat:je,furnGroups:Nt,roomLights:Vt,bulbs:_t,trees:it,wallMat:At,diag:pt,yaw:.8,pitch:-.1,targetIdx:0,mode:"orbit",autoplay:!y0,dragging:!1,moved:0,downT:0,lastX:0,lastY:0,frames:0,raf:0,mount:U};let fe=ze.domElement,ee=new Gl,ne=new $e,ge=H=>{let me=H.touches?H.touches[0]:H;o.current.dragging=!0,o.current.moved=0,o.current.downT=Date.now(),o.current.lastX=me.clientX,o.current.lastY=me.clientY,fe.style.cursor="grabbing"},Re=H=>{if(!o.current.dragging)return;let me=H.touches?H.touches[0]:H,k=me.clientX-o.current.lastX,re=me.clientY-o.current.lastY;o.current.moved+=Math.abs(k)+Math.abs(re),o.current.moved>6&&o.current.autoplay&&(o.current.autoplay=!1,C(!1)),o.current.yaw-=k*.005,o.current.pitch=Math.max(-.65,Math.min(.4,o.current.pitch-re*.005)),o.current.lastX=me.clientX,o.current.lastY=me.clientY},_e=H=>{let me=o.current,k=me.dragging&&me.moved<7&&Date.now()-me.downT<500;if(me.dragging=!1,fe.style.cursor="grab",!k)return;let re=fe.getBoundingClientRect(),K=H.changedTouches?H.changedTouches[0].clientX:H.clientX,he=H.changedTouches?H.changedTouches[0].clientY:H.clientY;if(K<re.left||K>re.right||he<re.top||he>re.bottom)return;ne.set((K-re.left)/re.width*2-1,-((he-re.top)/re.height)*2+1),ee.setFromCamera(ne,me.camera);let ye=ee.intersectObjects(me.scene.children,!0);for(let ie of ye){let Se=ie.object;for(;Se&&!(Se.userData&&Se.userData.shopKey);)Se=Se.parent;if(Se&&Ki[Se.userData.shopKey]){A(Se.userData.shopKey),n&&n("shop_item",{item:Se.userData.shopKey});return}}A(null)};fe.addEventListener("pointerdown",ge),window.addEventListener("pointermove",Re),window.addEventListener("pointerup",_e);let xe=()=>{let H=o.current;if(H.frames++,!y0&&H.frames%2===0&&H.trees.forEach((me,k)=>{me.rotation.z=Math.sin(H.frames*.008+k*1.7)*.016}),H.mode==="orbit"){H.autoplay&&!H.dragging&&(H.yaw+=.0032);let me=Math.max(.22,Math.min(1.05,.5-H.pitch)),k=H.diag*.92+2.2,re=new G(Math.sin(H.yaw)*k,H.diag*me+1.2,Math.cos(H.yaw)*k);H.camPos.lerp(re,.06),H.camera.position.copy(H.camPos),H.camera.lookAt(0,.5,0)}else{H.autoplay&&!H.dragging&&(H.yaw+=.0018,H.frames%300===0&&(H.targetIdx=(H.targetIdx+1)%H.waypoints.length,u(H.targetIdx)));let me=H.waypoints[H.targetIdx];H.camPos.lerp(me,.03);let k=Math.sin(H.yaw)*Math.cos(H.pitch),re=Math.sin(H.pitch),K=Math.cos(H.yaw)*Math.cos(H.pitch);H.camera.position.copy(H.camPos),H.camera.lookAt(H.camPos.x+k,H.camPos.y+re,H.camPos.z+K)}H.renderer.render(H.scene,H.camera),H.raf=requestAnimationFrame(xe)};xe(),S(!0);let ke=new ResizeObserver(()=>{let H=U.clientWidth;ze.setSize(H,de),be.aspect=H/de,be.updateProjectionMatrix()});return ke.observe(U),()=>{cancelAnimationFrame(o.current.raf),ke.disconnect(),fe.removeEventListener("pointerdown",ge),window.removeEventListener("pointermove",Re),window.removeEventListener("pointerup",_e),se.traverse(H=>{if(H.geometry&&H.geometry.dispose(),H.material){let me=H.material;(Array.isArray(me)?me:[me]).forEach(k=>k.dispose())}}),ze.dispose(),fe.parentNode&&fe.parentNode.removeChild(fe)}},[t.id,M]),(0,ae.useEffect)(()=>{o.current.waypoints&&(o.current.targetIdx=l)},[l]),(0,ae.useEffect)(()=>{o.current.autoplay=v},[v]),(0,ae.useEffect)(()=>{o.current.mode=d},[d]),(0,ae.useEffect)(()=>{let U=o.current;if(!U.sun||!m)return;let Q=f==="dusk";U.sky.material.map=CM(Q?"dusk":"day"),U.sky.material.needsUpdate=!0,U.hemi.intensity=Q?.35:.85,U.hemi.color.set(Q?"#c9d2ef":"#ffffff"),U.sun.color.set(Q?"#ff9a5a":"#fff2dc"),U.sun.intensity=Q?.5:1,U.sun.position.set(Q?-11:9,Q?4.5:15,Q?5:7),U.fill.intensity=Q?.12:.25,U.groundMat.color.set(Q?"#8ba081":"#ffffff"),U.roomLights.forEach(de=>de.intensity=Q?.55:0),U.bulbs.forEach(de=>de.material.emissiveIntensity=Q?1.5:.12)},[f,m]),(0,ae.useEffect)(()=>{o.current.furnGroups&&o.current.furnGroups.forEach(U=>U.visible=x)},[x,m]),(0,ae.useEffect)(()=>{let U=o.current;!U.scene||!m||yh(U,i)},[i,m,M]);function Z(){let U=o.current;if(!U.renderer)return;let Q=i==="classique"?"tranquille":i;yh(U,"classique"),U.renderer.render(U.scene,U.camera);let de=U.renderer.domElement.toDataURL("image/jpeg",.85);yh(U,Q),U.renderer.render(U.scene,U.camera);let se=U.renderer.domElement.toDataURL("image/jpeg",.85);yh(U,i),R({before:de,after:se,afterKey:Q}),z(50),n&&n("restage_compare",{theme:Q})}let Y=({active:U,onClick:Q,icon:de,label:se})=>(0,c.jsxs)("button",{onClick:Q,className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1",style:{background:U?y.metro:y.paper,color:U?"#fff":y.ink,border:`1px solid ${U?y.metro:y.line}`,fontSize:12,fontWeight:600},children:[(0,c.jsx)(de,{size:13})," ",se]});return(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:co,title:V("Visite 3D","3D tour"),note:V("glissez pour regarder \xB7 touchez les meubles","drag to look \xB7 tap furnishings")}),(0,c.jsxs)("div",{className:"relative rounded-xl overflow-hidden",style:{background:"#cfe0f2"},children:[(0,c.jsx)("div",{ref:s,style:{width:"100%",height:360},onPointerDown:()=>n&&n("tour_view")}),(0,c.jsx)("div",{className:"absolute top-2 left-2",children:(0,c.jsx)(_h,{text:M?V(`3D g\xE9n\xE9r\xE9e de la fiche n\xBA ${M.no} \u2014 indicative`,`3D generated from sheet n\xBA ${M.no} \u2014 indicative`):V("Reconstitution 3D par IA \u2014 indicative","AI 3D reconstruction \u2014 indicative")})}),(0,c.jsx)("button",{onClick:()=>C(U=>!U),"aria-label":v?"Pause":"Play",className:"absolute bottom-2 right-2 rounded-full p-2",style:{background:"rgba(17,27,46,.7)",color:"#fff"},children:v?(0,c.jsx)(Eu,{size:15}):(0,c.jsx)(Ru,{size:15})}),_&&Ki[_]&&(0,c.jsxs)("div",{className:"absolute left-2 right-2 bottom-2 rounded-xl p-3 fade-up",style:{background:"rgba(255,255,255,.97)",border:`1px solid ${y.line}`,boxShadow:"0 8px 24px rgba(17,27,46,.18)"},children:[(0,c.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5",style:{fontSize:13,fontWeight:800,color:y.ink},children:[(0,c.jsx)(So,{size:14,style:{color:y.metro}})," ",e==="fr"?Ki[_].fr:Ki[_].en]}),(0,c.jsx)("button",{onClick:()=>A(null),"aria-label":V("Fermer","Close"),style:{color:y.sub},children:(0,c.jsx)(pr,{size:15})})]}),(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontSize:12,color:y.ink,marginTop:2},children:Ki[_].price}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-1.5",children:[Ki[_].stores.map(U=>(0,c.jsx)(Cn,{tone:"blue",children:U},U)),(0,c.jsx)(Cn,{tone:"amber",children:V("liens partenaires \u2014 d\xE9mo","partner links \u2014 demo")})]}),(0,c.jsx)("button",{onClick:()=>{A(null),r&&r()},className:"mt-2 w-full rounded-lg py-2",style:{background:y.ink,color:"#fff",fontSize:12.5,fontWeight:700},children:V("Confier \xE7a \xE0 un\xB7e designer","Hand this to a designer")})]})]}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-2.5",children:[(0,c.jsx)(Y,{active:d==="orbit",onClick:()=>p("orbit"),icon:co,label:V("Maquette","Dollhouse")}),(0,c.jsx)(Y,{active:d==="walk",onClick:()=>p("walk"),icon:po,label:V("Int\xE9rieur","Interior")}),(0,c.jsx)(Y,{active:f==="day",onClick:()=>g("day"),icon:ku,label:V("Jour","Day")}),(0,c.jsx)(Y,{active:f==="dusk",onClick:()=>g("dusk"),icon:Lu,label:V("Cr\xE9puscule","Dusk")}),(0,c.jsx)(Y,{active:x,onClick:()=>h(U=>!U),icon:Yr,label:x?V("Meubl\xE9","Furnished"):V("Vide","Empty")})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:O.map((U,Q)=>(0,c.jsx)("button",{onClick:()=>{p("walk"),u(Q),C(!1),n&&n("tour_room",{room:U.key})},className:"rounded-full px-2.5 py-1",style:{background:d==="walk"&&l===Q?y.metroSoft:y.snow,color:d==="walk"&&l===Q?y.metro:y.sub,border:`1px solid ${d==="walk"&&l===Q?"#C9D9F2":y.line}`,fontSize:11.5,fontWeight:600},children:e==="fr"?U.fr:U.en},U.key))}),(0,c.jsxs)("div",{className:"flex flex-wrap items-center gap-1.5 mt-2",children:[(0,c.jsx)(_o,{size:14,style:{color:y.sub}}),Object.entries(gr).map(([U,Q])=>(0,c.jsxs)("button",{onClick:()=>a&&a(U),className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:i===U?y.ink:y.paper,color:i===U?"#fff":y.ink,border:`1px solid ${i===U?y.ink:y.line}`,fontSize:11.5,fontWeight:700},children:[(0,c.jsx)("span",{style:{width:9,height:9,borderRadius:999,background:Q.dot,border:"1px solid rgba(0,0,0,.12)"}})," ",e==="fr"?Q.fr:Q.en]},U))]}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:[(0,c.jsxs)("button",{onClick:Z,className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:y.ink,color:"#fff",fontSize:11.5,fontWeight:700},children:[(0,c.jsx)(po,{size:13})," ",V("Avant / Apr\xE8s IA","AI Before / After")]}),(0,c.jsxs)("button",{onClick:()=>E(!0),className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:y.metroSoft,color:y.metro,border:"1px solid #C9D9F2",fontSize:11.5,fontWeight:700},children:[(0,c.jsx)(_a,{size:13})," ",V("G\xE9n\xE9rer depuis une fiche Centris","Generate from a Centris sheet")]}),M&&(0,c.jsxs)("button",{onClick:()=>{I(null),u(0)},className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1",style:{background:y.spruceSoft,color:y.spruce,border:"1px solid #C4E0D2",fontSize:11.5,fontWeight:700},children:[V(`Plan de la fiche n\xBA ${M.no}`,`Sheet n\xBA ${M.no} plan`)," ",(0,c.jsx)(pr,{size:12})]})]}),(0,c.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:y.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),V("Mod\xE8le 3D, mise en sc\xE8ne et ameublement virtuel g\xE9n\xE9r\xE9s par IA \xE0 partir du plan et des photos \u2014 dimensions approximatives, \xE0 titre indicatif. \xAB Jour/cr\xE9puscule \xBB simule l\u2019ensoleillement.","3D model, staging and virtual furnishing are AI-generated from the floor plan and photos \u2014 approximate dimensions, indicative only. \u201CDay/dusk\u201D simulates natural light.")]}),L&&(0,c.jsx)(Ch,{onClose:()=>E(!1),label:V("G\xE9n\xE9rer depuis la fiche","Generate from the sheet"),children:(0,c.jsx)($R,{lang:e,defaultNo:"14106527",onGenerate:(U,Q)=>{I({no:U,plan:XR(Q)}),u(0),E(!1),n&&n("plan_generate",{centris:U,rooms:Q.length})}})}),P&&(0,c.jsxs)(Ch,{onClose:()=>R(null),label:V("Avant / Apr\xE8s","Before / After"),children:[(0,c.jsx)("div",{style:{fontFamily:ce.disp,fontWeight:700,fontSize:19,color:y.ink},children:V("Restylage virtuel \u2014 avant / apr\xE8s","Virtual restyle \u2014 before / after")}),(0,c.jsx)("div",{style:{fontSize:11.5,color:y.sub,margin:"4px 0 10px"},children:V("Glissez le curseur pour comparer.","Drag the slider to compare.")}),(0,c.jsxs)("div",{className:"relative rounded-xl overflow-hidden",style:{border:`1px solid ${y.line}`},children:[(0,c.jsx)("img",{src:P.after,alt:V("Apr\xE8s","After"),style:{width:"100%",display:"block"}}),(0,c.jsx)("div",{className:"absolute inset-0 overflow-hidden",style:{width:`${D}%`},children:(0,c.jsx)("img",{src:P.before,alt:V("Avant","Before"),style:{width:`${1e4/Math.max(D,1)}%`,maxWidth:"none",display:"block"}})}),(0,c.jsx)("div",{className:"absolute top-0 bottom-0",style:{left:`${D}%`,width:2,background:"#fff",boxShadow:"0 0 6px rgba(0,0,0,.4)"}}),(0,c.jsx)("div",{className:"absolute top-2 left-2",children:(0,c.jsx)(_h,{text:V("Original \u2014 reconstitution 3D","Original \u2014 3D reconstruction")})}),(0,c.jsx)("div",{className:"absolute top-2 right-2",children:(0,c.jsx)(_h,{text:`${V("Ameublement virtuel","Virtually staged")} \xB7 ${e==="fr"?gr[P.afterKey].fr:gr[P.afterKey].en} \u2014 IA`})})]}),(0,c.jsx)("input",{type:"range",min:0,max:100,value:D,onChange:U=>z(Number(U.target.value)),className:"w-full mt-2"}),(0,c.jsxs)("div",{className:"mt-1 flex items-start gap-1.5",style:{fontSize:10.5,color:y.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),V("Ameublement virtuel : visuel modifi\xE9 par IA et identifi\xE9 comme tel. Les \xE9l\xE9ments permanents (murs, planchers, structure) ne sont pas modifi\xE9s et l\u2019original demeure accessible.","Virtual staging: AI-modified visual, labelled as such. Permanent elements (walls, floors, structure) are unchanged and the original remains accessible.")]})]})]})}function gR({l:t,lang:e,log:n,refEl:i}){let a=(_,A)=>e==="fr"?_:A,[r,s]=(0,ae.useState)(20),[o,l]=(0,ae.useState)(4.39),[u,d]=(0,ae.useState)(25),p=(0,ae.useRef)(new Set),f=_=>{p.current.size||n("calc_use"),p.current.has(_)||(p.current.add(_),n("calc_adjust",{field:_}))},g=Math.round(r/100*t.price),v=t.price-g,C=Math.round(v*nR(r)),x=v+C,h=Math.round(S0(x,o,u)),m=Math.round((t.taxesMun+t.taxesScol)/12),S=Math.round(t.sqft*mr[t.heating].perSqft/12),M=h+m+t.condoFees+S+t.insuranceEst,I=iR(t.price,t.muni),L=g+I+1500+650,E=[{v:h,color:y.metro,label:a("Hypoth\xE8que","Mortgage")},{v:m,color:y.ink,label:a("Taxes","Taxes")},{v:t.condoFees,color:y.ochre,label:a("Copropri\xE9t\xE9","Condo")},{v:S,color:y.spruce,label:a("\xC9nergie*","Energy*")},{v:t.insuranceEst,color:"#9AA6B8",label:a("Assurance*","Insurance*")}];return(0,c.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:cu,title:a("Co\xFBt mensuel r\xE9el","True monthly cost"),note:a("ajustez les hypoth\xE8ses","adjust assumptions")}),(0,c.jsxs)("div",{className:"flex items-end gap-2 mb-2",children:[(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontWeight:600,fontSize:34,color:y.ink,lineHeight:1},children:ut(M,e)}),(0,c.jsx)("div",{style:{fontSize:13,color:y.sub,paddingBottom:3},children:a("/ mois, tout compris","/ month, all-in")})]}),(0,c.jsx)("div",{className:"flex w-full rounded-full overflow-hidden",style:{height:14,background:y.snow,border:`1px solid ${y.line}`},children:E.filter(_=>_.v>0).map((_,A)=>(0,c.jsx)("div",{style:{width:`${_.v/M*100}%`,background:_.color},title:_.label},A))}),(0,c.jsx)("div",{className:"flex flex-wrap gap-x-4 gap-y-1 mt-2",children:E.filter(_=>_.v>0).map((_,A)=>(0,c.jsxs)("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:12,color:y.sub},children:[(0,c.jsx)("span",{style:{width:9,height:9,borderRadius:3,background:_.color}})," ",_.label," ",(0,c.jsx)("b",{style:{fontFamily:ce.mono,color:y.ink},children:ut(_.v,e)})]},A))}),(0,c.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4",children:[(0,c.jsx)(bo,{label:a("Mise de fonds","Down payment"),val:r,set:s,min:5,max:35,step:1,suffix:" %",field:"down",mark:f}),(0,c.jsx)(bo,{label:a("Taux (5 ans fixe)","Rate (5-yr fixed)"),val:o,set:l,min:2.5,max:7,step:.05,suffix:" %",field:"rate",mark:f}),(0,c.jsx)(bo,{label:a("Amortissement","Amortization"),val:u,set:d,min:15,max:30,step:5,suffix:a(" ans"," yrs"),field:"amort",mark:f})]}),C>0&&(0,c.jsxs)("div",{className:"mt-2",style:{fontSize:12,color:y.sub},children:[a("Prime SCHL ajout\xE9e :","CMHC premium added:")," ",(0,c.jsx)("b",{style:{fontFamily:ce.mono,color:y.ink},children:ut(C,e)})]}),(0,c.jsxs)("div",{className:"mt-4 rounded-xl p-3",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-1.5 mb-1",style:{fontSize:13,fontWeight:700,color:y.ink},children:[(0,c.jsx)(go,{size:14,style:{color:y.metro}})," ",a("Liquidit\xE9s \xE0 l\u2019achat","Cash at purchase")]}),(0,c.jsxs)("div",{className:"grid grid-cols-2 gap-x-3",style:{fontSize:12.5,color:y.sub},children:[(0,c.jsx)("span",{children:a("Mise de fonds","Down payment")}),(0,c.jsx)("span",{className:"text-right",style:{fontFamily:ce.mono,color:y.ink},children:ut(g,e)}),(0,c.jsx)("span",{children:a("\xAB Taxe de bienvenue \xBB","Welcome tax")}),(0,c.jsx)("span",{className:"text-right",style:{fontFamily:ce.mono,color:y.ink},children:ut(I,e)}),(0,c.jsx)("span",{children:a("Notaire + inspection (est.)","Notary + inspection (est.)")}),(0,c.jsx)("span",{className:"text-right",style:{fontFamily:ce.mono,color:y.ink},children:ut(2150,e)}),(0,c.jsx)("span",{style:{fontWeight:700,color:y.ink},children:a("Total","Total")}),(0,c.jsx)("span",{className:"text-right",style:{fontFamily:ce.mono,fontWeight:700,color:y.metro},children:ut(L,e)})]}),(0,c.jsxs)("div",{className:"mt-1.5",style:{fontSize:10.5,color:y.sub,fontFamily:ce.mono},children:[e==="fr"?Mh[t.muni].labelFr:Mh[t.muni].labelEn," \xB7 *",a("estimations \u2014 ","estimates \u2014 "),e==="fr"?mr[t.heating].fr:mr[t.heating].en]})]})]})}function yR({l:t,lang:e,log:n,refEl:i}){let a=(m,S)=>e==="fr"?m:S,[r,s]=(0,ae.useState)([]),[o,l]=(0,ae.useState)(""),[u,d]=(0,ae.useState)(!1),[p,f]=(0,ae.useState)(!1);(0,ae.useEffect)(()=>{n("forecast_view")},[]);let g=(0,ae.useMemo)(()=>[...t.forecast.drivers,...r],[t,r]),v=(0,ae.useMemo)(()=>PM(t.price,g,6,t.forecast.organic),[t,g]),C=v[v.length-1],x=Math.round((C.mid-t.price)/t.price*100);async function h(){d(!0),f(!1);try{let m=await sR(t,e);s(m.drivers),l(e==="fr"?m.noteFr:m.noteEn),n("forecast_refresh")}catch{f(!0)}finally{d(!1)}}return(0,c.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:Bu,title:a("Pr\xE9vision de valeur","Value forecast"),note:a("mod\xE8le \u2014 non garanti","model \u2014 not guaranteed")}),(0,c.jsxs)("div",{className:"flex items-end justify-between gap-2 mb-1",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontWeight:600,fontSize:26,color:y.ink},children:ut(C.mid,e)}),(0,c.jsxs)("div",{style:{fontSize:12,color:y.sub},children:[a(`sc\xE9nario m\xE9dian ${C.yr}`,`median scenario ${C.yr}`)," \xB7 ",(0,c.jsxs)("b",{style:{color:x>=0?y.spruce:y.danger},children:[x>=0?"+":"",x,"%"]})]})]}),(0,c.jsxs)(Cn,{tone:"blue",children:[ut(v[v.length-1].low,e)," \u2013 ",ut(v[v.length-1].high,e)]})]}),(0,c.jsx)(lR,{rows:v,lang:e}),(0,c.jsxs)("div",{className:"mt-3 space-y-2",children:[(0,c.jsx)("div",{style:{fontSize:11.5,fontWeight:700,color:y.sub,textTransform:"uppercase",letterSpacing:".06em"},children:a("Facteurs pris en compte","Drivers considered")}),g.map((m,S)=>{let M=xR[m.kind]||va,I=m.hi<=0;return(0,c.jsxs)("div",{className:"flex items-start gap-2.5 rounded-xl p-2.5",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsx)(M,{size:15,style:{color:I?y.danger:y.metro,marginTop:2,flexShrink:0}}),(0,c.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,c.jsxs)("div",{style:{fontSize:13,fontWeight:700,color:y.ink},children:[e==="fr"?m.fr:m.en," ",m.live&&(0,c.jsx)(Cn,{tone:"green",children:a("actualit\xE9","live")})]}),(0,c.jsxs)("div",{style:{fontSize:11.5,color:y.sub},children:[m.dist!=="\u2014"?`${m.dist} \xB7 `:"",a("\xE9ch\xE9ance","by")," ",m.year," \xB7 ",e==="fr"?m.srcFr:m.srcEn]})]}),(0,c.jsxs)("span",{style:{fontFamily:ce.mono,fontSize:12,fontWeight:600,color:I?y.danger:y.spruce,whiteSpace:"nowrap"},children:[m.lo>=0?"+":"",m.lo,"\u2026",m.hi>=0?"+":"",m.hi,"%"]})]},S)})]}),(0,c.jsxs)("button",{onClick:h,disabled:u,className:"mt-3 w-full rounded-xl py-2.5 flex items-center justify-center gap-2",style:{background:u?y.line:y.ink,color:"#fff",fontWeight:700,fontSize:13.5},children:[u?(0,c.jsx)(Ei,{size:15}):(0,c.jsx)(Au,{size:15})," ",u?a("Recherche dans l\u2019actualit\xE9\u2026","Searching the news\u2026"):a("Actualiser depuis l\u2019actualit\xE9","Refresh from the news")]}),p&&(0,c.jsx)("div",{className:"mt-2",style:{fontSize:12,color:y.danger},children:a("La recherche n\u2019a pas abouti. R\xE9essayez.","The search didn\u2019t complete. Try again.")}),o&&(0,c.jsx)("div",{className:"mt-2",style:{fontSize:12,color:y.sub,fontStyle:"italic"},children:o}),(0,c.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:y.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),a("Projection illustrative fond\xE9e sur une croissance historique et des projets annonc\xE9s. Ce n\u2019est pas un avis d\u2019\xE9valuation ni une garantie de rendement.","Illustrative projection based on historical growth and announced projects. Not an appraisal or a guarantee of return.")]})]})}function SR({l:t,lang:e,log:n,refEl:i}){let a=(r,s)=>e==="fr"?r:s;return(0,ae.useEffect)(()=>{n("risk_view")},[]),(0,c.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:Dn,title:a("Couche de risques","Risk layer"),note:a("\xE0 v\xE9rifier \xE0 l\u2019adresse","verify at address")}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:t.risks.map((r,s)=>{let o=vR[r.kind],l=_R[r.level],u=o.icon;return(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[(0,c.jsxs)("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:13,fontWeight:700,color:y.ink},children:[(0,c.jsx)(u,{size:14,style:{color:y.metro}})," ",e==="fr"?o.fr:o.en]}),(0,c.jsx)(Cn,{tone:l.tone,children:e==="fr"?l.fr:l.en})]}),(0,c.jsx)("div",{style:{fontSize:12,color:y.sub,lineHeight:1.4},children:e==="fr"?r.fr:r.en})]},s)})}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:y.sub,fontFamily:ce.mono},children:a("D\xE9mo \u2014 production : zones inondables (CMM/Ville), potentiel radon (SPLQ), registres pyrite/sols contamin\xE9s.","Demo \u2014 production: flood maps (CMM/City), radon potential, pyrite/contaminated-soil registries.")})]})}function CR({l:t,lang:e,log:n,refEl:i}){let a=(v,C)=>e==="fr"?v:C,[r,s]=(0,ae.useState)("weekday"),[o,l]=(0,ae.useState)(t.commute.dest),[u,d]=(0,ae.useState)(1);(0,ae.useEffect)(()=>{n("amenity_view")},[]);let p=t.commute[r],f=[{name:a("Auto","Car"),color:y.metro,values:p.car.map(v=>Math.round(v*u))},{name:a("Transport","Transit"),color:y.spruce,values:p.transit.map(v=>Math.round(v*u))},{name:a("V\xE9lo","Bike"),color:y.ochre,values:p.bike.map(v=>Math.round(v*u))}],g=Math.max(...f[0].values);return(0,c.jsxs)("section",{ref:i,className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:yo,title:a("Commodit\xE9s & trajets","Amenities & commute"),note:a("donn\xE9es d\xE9mo","sample data")}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4",children:t.amenities.map(v=>{let C=MR[v.type],x=C.icon;return(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-1.5 mb-1.5",style:{fontSize:12.5,fontWeight:700,color:y.ink},children:[(0,c.jsx)(x,{size:14,style:{color:y.metro}})," ",e==="fr"?C.fr:C.en]}),(0,c.jsx)("div",{className:"space-y-1",children:v.items.map(([h,m],S)=>(0,c.jsxs)("div",{className:"flex items-center justify-between",style:{fontSize:12,color:y.sub},children:[(0,c.jsx)("span",{className:"truncate",style:{color:y.ink},children:h}),(0,c.jsxs)("span",{style:{fontFamily:ce.mono,whiteSpace:"nowrap",marginLeft:8},children:[m<1e3?`${m} m`:`${(m/1e3).toFixed(1)} km`," \xB7 ",wR(m)," ",a("min","min")]})]},S))})]},v.type)})}),(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-1.5 mb-2",style:{fontSize:13,fontWeight:700,color:y.ink},children:[(0,c.jsx)(Pu,{size:15,style:{color:y.metro}})," ",a("Temps de trajet vers","Commute time to")," ",o]}),(0,c.jsxs)("div",{className:"flex gap-2 mb-2",children:[(0,c.jsx)("input",{type:"text",value:o,onChange:v=>l(v.target.value),placeholder:a("Destination\u2026","Destination\u2026"),className:"flex-1 rounded-lg px-2.5 py-1.5",style:{border:`1.5px solid ${y.line}`,fontSize:13,background:y.paper,color:y.ink}}),(0,c.jsx)("button",{onClick:()=>{d(.85+Math.random()*.5),n("commute_calc",{dest:o})},className:"rounded-lg px-3",style:{background:y.metro,color:"#fff",fontSize:12.5,fontWeight:700},children:a("Estimer","Estimate")})]}),(0,c.jsx)("div",{className:"flex gap-1.5 mb-2",children:[["weekday",a("Semaine","Weekday")],["weekend",a("Fin de semaine","Weekend")]].map(([v,C])=>(0,c.jsx)("button",{onClick:()=>s(v),className:"rounded-full px-3 py-1",style:{background:r===v?y.metroSoft:y.paper,color:r===v?y.metro:y.sub,border:`1px solid ${r===v?"#C9D9F2":y.line}`,fontSize:12,fontWeight:600},children:C},v))}),(0,c.jsx)(uR,{hours:t.commute.hours,series:f,lang:e}),(0,c.jsx)("div",{className:"flex flex-wrap gap-x-3 gap-y-1 mt-1",children:f.map((v,C)=>(0,c.jsxs)("span",{className:"inline-flex items-center gap-1",style:{fontSize:11,color:y.sub},children:[(0,c.jsx)("span",{style:{width:8,height:8,borderRadius:2,background:v.color}})," ",v.name]},C))}),(0,c.jsxs)("div",{className:"mt-1.5",style:{fontSize:11.5,color:y.sub},children:[a("Pointe auto :","Car peak:")," ",(0,c.jsxs)("b",{style:{fontFamily:ce.mono,color:y.ink},children:[g," min"]})," \xB7 ",a("estimations, non rout\xE9es en temps r\xE9el","estimates, not real-time routed")]})]})]})}function bR({l:t,lang:e,refEl:n}){let i=(d,p)=>e==="fr"?d:p,a=t.hood,r=a.demo,s=({icon:d,label:p,v:f})=>(0,c.jsxs)("div",{className:"flex-1 rounded-xl p-3 text-center",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsx)(d,{size:16,style:{color:y.metro,margin:"0 auto 4px"}}),(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontWeight:600,fontSize:22,color:y.ink},children:f}),(0,c.jsx)("div",{style:{fontSize:11,color:y.sub},children:p})]}),o=r.incomeBands.map(([d,p],f)=>({label:d,pct:p,color:["#C9D8EE","#7FA0CE","#3D6DB4","#1C4A8F"][f]})),l=r.ageBands.map(([d,p],f)=>({label:d,pct:p,color:["#E4F1EA","#A9D3BD","#5FA987","#2F7D5C","#1E5740"][f]})),u=r.langs.map(([d,p],f)=>({label:d,pct:p,color:["#1656B4","#E8A33D","#9AA6B8"][f]}));return(0,c.jsxs)("section",{ref:n,className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:Ou,title:i("Le quartier, en chiffres","The neighbourhood, in numbers"),note:i("donn\xE9es d\xE9mo","sample data")}),(0,c.jsxs)("div",{className:"flex gap-2 mb-3",children:[(0,c.jsx)(s,{icon:vu,label:"Walk Score",v:a.walk}),(0,c.jsx)(s,{icon:Zr,label:i("Transit","Transit"),v:a.transit}),(0,c.jsx)(s,{icon:lu,label:i("V\xE9lo","Bike"),v:a.bike})]}),(0,c.jsxs)("div",{className:"space-y-1.5 mb-4",style:{fontSize:13.5,color:y.ink},children:[(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(Zr,{size:14,style:{color:y.sub}}),e==="fr"?a.metroFr:a.metroEn,a.bixi>0&&(0,c.jsxs)(Cn,{tone:"blue",children:[a.bixi," BIXI"]})]}),(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(va,{size:14,style:{color:y.sub}}),e==="fr"?a.schoolsFr:a.schoolsEn]})]}),(0,c.jsxs)("div",{className:"space-y-3",children:[(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between mb-1.5",children:[(0,c.jsxs)("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:12.5,fontWeight:700,color:y.ink},children:[(0,c.jsx)(Xr,{size:13,style:{color:y.metro}})," ",i("Revenu des m\xE9nages","Household income")]}),(0,c.jsxs)("span",{style:{fontFamily:ce.mono,fontSize:12,color:y.ink},children:[i("m\xE9dian","median")," ",ut(r.incomeMed,e)]})]}),(0,c.jsx)(v0,{segments:o})]}),(0,c.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsx)("div",{className:"mb-1.5",style:{fontSize:12.5,fontWeight:700,color:y.ink},children:i("\xC2ge","Age")}),(0,c.jsx)(v0,{segments:l})]}),(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5 mb-1.5",style:{fontSize:12.5,fontWeight:700,color:y.ink},children:[(0,c.jsx)(Mu,{size:13,style:{color:y.metro}})," ",i("Langues parl\xE9es","Languages spoken")]}),(0,c.jsx)(v0,{segments:u})]})]}),(0,c.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsx)("div",{style:{fontSize:12.5,fontWeight:700,color:y.ink},children:i("M\xE9nages","Households")}),(0,c.jsxs)("div",{className:"mt-1",style:{fontSize:12.5,color:y.sub},children:[i("Familles","Families")," ",(0,c.jsxs)("b",{style:{fontFamily:ce.mono,color:y.ink},children:[r.fam,"%"]})," \xB7 ",i("Locataires","Renters")," ",(0,c.jsxs)("b",{style:{fontFamily:ce.mono,color:y.ink},children:[r.rent,"%"]})]})]}),(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between",children:[(0,c.jsx)("span",{style:{fontSize:12.5,fontWeight:700,color:y.ink},children:i("Criminalit\xE9","Crime")}),(0,c.jsxs)("span",{className:"inline-flex items-center gap-1",style:{fontSize:12,color:y.spruce,fontWeight:700},children:[(0,c.jsx)(Nu,{size:12})," ",a.crimeDelta,"%"]})]}),(0,c.jsx)(oR,{data:a.crime,color:y.spruce,w:110,h:30}),(0,c.jsx)("div",{className:"space-y-0.5",children:a.incidents.map(([d,p,f],g)=>(0,c.jsxs)("div",{className:"flex items-center justify-between",style:{fontSize:11,color:y.sub},children:[(0,c.jsx)("span",{children:e==="fr"?d:p}),(0,c.jsxs)("span",{style:{fontFamily:ce.mono,color:f<=0?y.spruce:y.danger},children:[f>0?"+":"",f,"%"]})]},g))})]})]})]}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:y.sub,fontFamily:ce.mono},children:i("D\xE9mo \u2014 production : StatCan (recensement), donn\xE9es ouvertes SPVM/SPAL, Walk Score API.","Demo \u2014 production: StatCan (census), SPVM/SPAL open data, Walk Score API.")})]})}function LR({l:t,lang:e}){let n=(o,l)=>e==="fr"?o:l;if(!t.fund)return null;let i=t.fund,a=Math.round(i.balance/i.units),r=a>=12e3?"strong":a>=7e3?"adequate":"thin",s={strong:{tone:"green",fr:"Solide",en:"Strong"},adequate:{tone:"amber",fr:"Correct",en:"Adequate"},thin:{tone:"red",fr:"Mince",en:"Thin"}}[r];return(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:go,title:n("Sant\xE9 du fonds de pr\xE9voyance","Contingency fund health"),note:n("indicatif","indicative")}),(0,c.jsxs)("div",{className:"flex items-end justify-between",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontWeight:600,fontSize:26,color:y.ink},children:ut(i.balance,e)}),(0,c.jsxs)("div",{style:{fontSize:12,color:y.sub},children:[ut(a,e)," ",n("par unit\xE9","per unit")," \xB7 ",i.units," ",n("unit\xE9s","units")," \xB7 ",n("\xE9tude","study")," ",i.studyYear]})]}),(0,c.jsx)(Cn,{tone:s.tone,children:e==="fr"?s.fr:s.en})]}),(0,c.jsx)("div",{className:"mt-2 rounded-xl p-2.5",style:{background:i.special?y.dangerSoft:y.spruceSoft,border:`1px solid ${i.special?"#E7C3B4":"#C4E0D2"}`,fontSize:12.5,color:y.ink},children:i.special?n("\u26A0 Cotisation sp\xE9ciale vot\xE9e ou annonc\xE9e \u2014 \xE0 examiner.","\u26A0 Special assessment voted or announced \u2014 review needed."):n("\u2713 Aucune cotisation sp\xE9ciale vot\xE9e ni annonc\xE9e (selon DV D14).","\u2713 No special assessment voted or announced (per DV D14).")}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:y.sub},children:n("Rep\xE8re indicatif seulement \u2014 l\u2019ad\xE9quation r\xE9elle d\xE9pend de l\u2019\xE9tude du fonds et de l\u2019\xE9tat de l\u2019immeuble. Faites examiner les documents de copropri\xE9t\xE9.","Indicative benchmark only \u2014 true adequacy depends on the fund study and building condition. Have the co-ownership documents reviewed.")})]})}function IR({l:t,lang:e}){let n=(r,s)=>e==="fr"?r:s,i=(r,s)=>Math.round(r/s),a=i(t.price,t.sqft);return(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:dr,title:n("Ventes comparables","Comparable sales"),note:n("style Registre foncier","land-registry style")}),(0,c.jsxs)("div",{style:{fontSize:12.5,color:y.sub,marginBottom:8},children:[n("Demand\xE9 :","Asking:")," ",(0,c.jsx)("b",{style:{fontFamily:ce.mono,color:y.ink},children:ut(t.price,e)})," \xB7 ",(0,c.jsxs)("b",{style:{fontFamily:ce.mono,color:y.ink},children:[ut(a,e),"/pi\xB2"]})]}),(0,c.jsx)("div",{className:"space-y-1.5",children:t.soldComps.map(([r,s,o,l],u)=>(0,c.jsxs)("div",{className:"flex items-center justify-between rounded-lg px-3 py-2",style:{background:y.snow,border:`1px solid ${y.line}`,fontSize:12.5},children:[(0,c.jsx)("span",{className:"truncate",style:{color:y.ink},children:r}),(0,c.jsxs)("span",{className:"flex items-center gap-2 flex-shrink-0",style:{marginLeft:8},children:[(0,c.jsx)("span",{style:{fontFamily:ce.mono,color:y.ink},children:ut(s,e)}),(0,c.jsxs)("span",{style:{fontFamily:ce.mono,color:y.sub},children:[ut(i(s,l),e),"/pi\xB2"]}),(0,c.jsx)("span",{style:{fontFamily:ce.mono,fontSize:11,color:y.sub},children:o})]})]},u))}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:y.sub,fontFamily:ce.mono},children:n("D\xE9mo \u2014 production : Registre foncier du Qu\xE9bec / JLR. Ne constitue pas une AMC.","Demo \u2014 production: Qu\xE9bec land registry / JLR. Not a CMA.")})]})}function AR({l:t,lang:e,log:n,chat:i,setChat:a,refEl:r}){let s=(x,h)=>e==="fr"?x:h,[o,l]=(0,ae.useState)(""),[u,d]=(0,ae.useState)(!1),[p,f]=(0,ae.useState)(!1),g=(0,ae.useRef)(null);(0,ae.useEffect)(()=>{let x=g.current;x&&(x.scrollTop=x.scrollHeight)},[i,u]);let v=e==="fr"?["Le toit a quel \xE2ge ?","Des d\xE9g\xE2ts d\u2019eau d\xE9clar\xE9s ?","Frais de condo et taxes ?","Puis-je visiter samedi ?"]:["How old is the roof?","Any declared water damage?","Condo fees and taxes?","Can I visit Saturday?"];async function C(x){let h=(x??o).trim();if(!h||u)return;f(!1),l("");let m=[...i,{role:"user",text:h}];a(m),n("chat_message",{q:h.slice(0,80)}),d(!0);try{let{reply:S,escalate:M,topics:I}=await rR(t,e,i,h);I.forEach(E=>n("chat_topic",{topic:E}));let L=[{role:"assistant",text:S}];M&&(n("chat_escalation",{q:h.slice(0,80)}),L.push({role:"note",text:s(`\u2192 Transmis \xE0 ${on.name} \u2014 r\xE9ponse \xE0 suivre.`,`\u2192 Sent to ${on.name} \u2014 answer to follow.`)})),a([...m,...L])}catch{f(!0),a(m)}finally{d(!1)}}return(0,c.jsxs)("section",{ref:r,className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:bu,title:s("Questions sur la propri\xE9t\xE9","Questions about the property"),note:s("r\xE9ponses tir\xE9es des documents","answers from the documents")}),(0,c.jsxs)("div",{ref:g,className:"rounded-xl p-3 mb-3 overflow-y-auto",style:{background:y.snow,border:`1px solid ${y.line}`,height:240},children:[i.length===0&&(0,c.jsxs)("div",{style:{fontSize:13,color:y.sub},children:[(0,c.jsx)(Ei,{size:14,style:{display:"inline",color:y.ochre,marginRight:4}}),s("Je r\xE9ponds \xE0 partir de la fiche et des d\xE9clarations du vendeur \u2014 et je cite ma source. Ce que je ne sais pas, je le transmets \xE0 ","I answer from the listing sheet and seller\u2019s declarations \u2014 with sources. What I don\u2019t know, I flag to "),on.name,"."]}),i.map((x,h)=>x.role==="note"?(0,c.jsx)("div",{className:"my-2 text-center",style:{fontSize:11.5,color:y.metro,fontFamily:ce.mono},children:x.text},h):(0,c.jsx)("div",{className:`flex ${x.role==="user"?"justify-end":"justify-start"} my-1.5`,children:(0,c.jsx)("div",{className:"max-w-[85%] rounded-2xl px-3 py-2",style:{background:x.role==="user"?y.metro:y.paper,color:x.role==="user"?"#fff":y.ink,border:x.role==="user"?"none":`1px solid ${y.line}`,fontSize:13.5,lineHeight:1.45},children:x.text})},h)),u&&(0,c.jsx)("div",{style:{fontSize:12.5,color:y.sub,fontFamily:ce.mono},className:"my-1.5",children:s("consulte les documents\u2026","checking the documents\u2026")}),p&&(0,c.jsx)("div",{style:{fontSize:12.5,color:y.danger},className:"my-1.5",children:s("Le service ne r\xE9pond pas. R\xE9essayez.","The service didn\u2019t respond. Try again.")})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-2.5",children:v.map(x=>(0,c.jsx)("button",{onClick:()=>C(x),className:"rounded-full px-2.5 py-1",style:{background:y.metroSoft,color:y.metro,fontSize:12,fontWeight:600,border:"1px solid #C9D9F2"},children:x},x))}),(0,c.jsxs)("div",{className:"flex gap-2",children:[(0,c.jsx)("input",{value:o,onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&C()},placeholder:s("Posez votre question\u2026","Ask your question\u2026"),className:"flex-1 rounded-xl px-3 py-2.5",style:{border:`1.5px solid ${y.line}`,fontSize:14,background:y.paper,color:y.ink}}),(0,c.jsx)("button",{onClick:()=>C(),disabled:u,"aria-label":s("Envoyer","Send"),className:"rounded-xl px-3.5",style:{background:y.metro,color:"#fff",opacity:u?.6:1},children:(0,c.jsx)($r,{size:17})})]}),(0,c.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:y.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),s("Assistant IA. Ne fournit pas de conseils juridiques, fiscaux ou sur le prix d\u2019offre. Les renseignements ne remplacent pas la v\xE9rification diligente.","AI assistant. Does not provide legal, tax, or offer-price advice. Information does not replace due diligence.")]})]})}function ER({l:t,lang:e,log:n,dm:i,setDm:a,refEl:r}){let s=(p,f)=>e==="fr"?p:f,[o,l]=(0,ae.useState)(""),u=(0,ae.useRef)(null);(0,ae.useEffect)(()=>{let p=u.current;p&&(p.scrollTop=p.scrollHeight)},[i]);function d(){let p=o.trim();if(!p)return;l("");let f={who:"prospect",text:p,ts:Date.now()},g=[...i,f,{who:"receipt",text:s("Remis \xE0 Julie Fortin","Delivered to Julie Fortin"),ts:Date.now()}];a(g),n("broker_message",{text:p.slice(0,120)}),i.some(v=>v.who==="broker")||setTimeout(()=>a(v=>[...v,{who:"broker",sim:!0,ts:Date.now(),text:s("Bonjour! Merci pour votre message, je regarde \xE7a et je vous reviens rapidement. Souhaitez-vous que je vous propose des plages de visite?","Hi! Thanks for your message \u2014 I\u2019ll look into it and get back to you shortly. Would you like me to suggest a few showing times?")}]),1600)}return(0,c.jsxs)("section",{ref:r,className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:vo,title:s("\xC9crire \xE0 la courti\xE8re","Message the broker"),note:s("ligne directe","direct line")}),(0,c.jsxs)("div",{className:"flex items-center gap-2 mb-3 rounded-xl p-2.5",style:{background:y.metroSoft,border:"1px solid #C9D9F2"},children:[(0,c.jsx)("div",{className:"rounded-full flex items-center justify-center",style:{width:34,height:34,background:y.metro,color:"#fff",fontWeight:700,fontFamily:ce.disp},children:"JF"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:13.5,fontWeight:700,color:y.ink},children:on.name}),(0,c.jsxs)("div",{style:{fontSize:11.5,color:y.sub},children:[e==="fr"?on.title_fr:on.title_en," \xB7 ",on.agency]})]})]}),(0,c.jsxs)("div",{ref:u,className:"rounded-xl p-3 mb-3 overflow-y-auto",style:{background:y.snow,border:`1px solid ${y.line}`,height:200},children:[i.length===0&&(0,c.jsx)("div",{style:{fontSize:13,color:y.sub},children:s("Une question pr\xE9cise, une contre-proposition, une disponibilit\xE9? \xC9crivez directement \xE0 Julie \u2014 c\u2019est une ligne priv\xE9e, distincte de l\u2019assistant.","A specific question, a counter-proposal, your availability? Message Julie directly \u2014 this is a private line, separate from the assistant.")}),i.map((p,f)=>p.who==="receipt"?(0,c.jsxs)("div",{className:"text-right my-1",style:{fontSize:10.5,color:y.sub,fontFamily:ce.mono},children:["\u2713 ",p.text]},f):(0,c.jsx)("div",{className:`flex ${p.who==="prospect"?"justify-end":"justify-start"} my-1.5`,children:(0,c.jsxs)("div",{className:"max-w-[85%] rounded-2xl px-3 py-2",style:{background:p.who==="prospect"?y.ink:y.paper,color:p.who==="prospect"?"#fff":y.ink,border:p.who==="prospect"?"none":`1px solid ${y.line}`,fontSize:13.5,lineHeight:1.45},children:[p.text,p.sim&&(0,c.jsx)("div",{style:{fontSize:9.5,color:y.sub,fontFamily:ce.mono,marginTop:3},children:s("r\xE9ponse simul\xE9e (d\xE9mo)","simulated reply (demo)")})]})},f))]}),(0,c.jsxs)("div",{className:"flex gap-2",children:[(0,c.jsx)("input",{value:o,onChange:p=>l(p.target.value),onKeyDown:p=>{p.key==="Enter"&&d()},placeholder:s("Votre message \xE0 Julie\u2026","Your message to Julie\u2026"),className:"flex-1 rounded-xl px-3 py-2.5",style:{border:`1.5px solid ${y.line}`,fontSize:14,background:y.paper,color:y.ink}}),(0,c.jsx)("button",{onClick:d,"aria-label":s("Envoyer","Send"),className:"rounded-xl px-3.5",style:{background:y.ink,color:"#fff"},children:(0,c.jsx)($r,{size:17})})]})]})}function TR({l:t,lang:e,log:n,onClose:i}){let a=(C,x)=>e==="fr"?C:x,[r,s]=(0,ae.useState)(null),[o,l]=(0,ae.useState)(null),[u,d]=(0,ae.useState)(!1),p=Number(wh("visit_slot_days",5))||5,f=(0,ae.useMemo)(()=>Array.from({length:p},(C,x)=>new Date(Date.now()+x*864e5).toLocaleDateString(e==="fr"?"fr-CA":"en-CA",{weekday:"short",day:"numeric",month:"short"})),[e,p]),g=wh("visit_slot_times",["10:00","11:30","13:00","15:30","17:00","18:30"]),v=({v:C,cur:x,set:h})=>(0,c.jsx)("button",{onClick:()=>h(C),className:"rounded-lg px-2.5 py-1.5",style:{border:`1.5px solid ${x===C?y.metro:y.line}`,background:x===C?y.metroSoft:y.paper,color:x===C?y.metro:y.ink,fontSize:13,fontWeight:600},children:C});return(0,c.jsx)(Ch,{onClose:i,label:a("Planifier une visite","Book a showing"),children:u?(0,c.jsxs)("div",{className:"text-center pb-4",children:[(0,c.jsx)(fo,{size:34,style:{color:y.spruce,margin:"0 auto 8px"}}),(0,c.jsx)("div",{style:{fontFamily:ce.disp,fontWeight:700,fontSize:19,color:y.ink},children:a("Demande envoy\xE9e","Request sent")}),(0,c.jsxs)("div",{style:{fontSize:13.5,color:y.sub,marginTop:4},children:[on.name," ",a("vous confirme sous 2 h ouvrables \u2014","will confirm within 2 business hours \u2014")," ",r," \xB7 ",o]})]}):(0,c.jsxs)("div",{className:"pb-2",children:[(0,c.jsx)("div",{style:{fontFamily:ce.disp,fontWeight:700,fontSize:19,color:y.ink},children:a("Planifier une visite","Book a showing")}),(0,c.jsx)("div",{style:{fontSize:12.5,color:y.sub,marginBottom:12},children:t.addr}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-3",children:f.map(C=>(0,c.jsx)(v,{v:C,cur:r,set:s},C))}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:g.map(C=>(0,c.jsx)(v,{v:C,cur:o,set:l},C))}),(0,c.jsx)("button",{disabled:!r||!o,onClick:()=>{n("booking_request",{when:`${r} ${o}`}),typeof window<"u"&&window.__VITRINE_BOOK__&&window.__VITRINE_BOOK__(`${r} ${o}`,t.id,t.addr),d(!0)},className:"w-full rounded-xl py-3",style:{background:!r||!o?y.line:y.metro,color:"#fff",fontWeight:700,fontSize:15},children:a("Demander cette plage","Request this slot")})]})})}function RR({lang:t,log:e,onClose:n,onDone:i}){let a=(u,d)=>t==="fr"?u:d,r=[["prix",a("Prix trop \xE9lev\xE9","Price too high")],["emplacement",a("Emplacement","Location")],["travaux",a("Trop de r\xE9novations","Too many renovations")],["taille",a("Taille","Size")],["stationnement",a("Stationnement","Parking")],["autre",a("Autre","Other")]],[s,o]=(0,ae.useState)([]),l=u=>o(d=>d.includes(u)?d.filter(p=>p!==u):[...d,u]);return(0,c.jsxs)(Ch,{onClose:n,label:a("Pas pour moi","Not for me"),children:[(0,c.jsx)("div",{style:{fontFamily:ce.disp,fontWeight:700,fontSize:19,color:y.ink},children:a("Qu\u2019est-ce qui n\u2019allait pas ?","What didn\u2019t work?")}),(0,c.jsx)("div",{style:{fontSize:12.5,color:y.sub,marginBottom:12},children:a("Vos prochaines alertes s\u2019ajusteront.","Your next alerts will adjust.")}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:r.map(([u,d])=>(0,c.jsx)("button",{onClick:()=>l(u),className:"rounded-full px-3 py-1.5",style:{border:`1.5px solid ${s.includes(u)?y.metro:y.line}`,background:s.includes(u)?y.metroSoft:y.paper,color:s.includes(u)?y.metro:y.ink,fontSize:13,fontWeight:600},children:d},u))}),(0,c.jsx)("button",{onClick:()=>{e("reaction_pass",{reasons:s}),i()},className:"w-full rounded-xl py-3",style:{background:y.ink,color:"#fff",fontWeight:700,fontSize:15},children:a("Envoyer","Send")})]})}function PR({lang:t,onEvent:e}){let n=(s,o)=>t==="fr"?s:o;(0,ae.useEffect)(()=>{e&&e("compare_view")},[]);let i=s=>Math.round(S0(s.price*.8,4.39,25)+(s.taxesMun+s.taxesScol)/12+s.condoFees+s.sqft*mr[s.heating].perSqft/12+s.insuranceEst),a=s=>{let o=PM(s.price,s.forecast.drivers,6,s.forecast.organic);return Math.round((o[o.length-1].mid-s.price)/s.price*100)},r=[[n("Prix","Price"),s=>ut(s.price,t)],[n("Prix / pi\xB2","Price / sqft"),s=>ut(Math.round(s.price/s.sqft),t)],[n("Co\xFBt mensuel est.","Est. monthly cost"),s=>ut(i(s),t)],[n("Superficie","Area"),s=>`${RM(s.sqft,t)} pi\xB2`],[n("Ch. / sdb","Beds / baths"),s=>`${s.beds} / ${s.baths}`],[n("Taxes / an","Taxes / yr"),s=>ut(s.taxesMun+s.taxesScol,t)],[n("Copropri\xE9t\xE9 / mois","Condo / mo"),s=>s.condoFees?ut(s.condoFees,t):"\u2014"],["Walk / Transit / "+n("V\xE9lo","Bike"),s=>`${s.hood.walk} / ${s.hood.transit} / ${s.hood.bike}`],[n("Pr\xE9vision m\xE9diane 6 ans","6-yr median forecast"),s=>{let o=a(s);return(o>=0?"+":"")+o+"%"}],[n("Criminalit\xE9 (tendance)","Crime (trend)"),s=>`${s.hood.crimeDelta}%`]];return(0,c.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,c.jsx)(Hu,{children:n("Comparaison","Comparison")}),(0,c.jsx)("h1",{style:{fontFamily:ce.disp,fontWeight:800,fontSize:26,color:y.ink,margin:"4px 0 14px"},children:n("C\xF4te \xE0 c\xF4te","Side by side")}),(0,c.jsxs)("div",{className:"grid grid-cols-3 gap-0 rounded-2xl overflow-hidden",style:{border:`1px solid ${y.line}`},children:[(0,c.jsx)("div",{style:{background:y.snow}}),ji.map(s=>(0,c.jsxs)("div",{className:"p-3",style:{background:y.ink,color:"#fff"},children:[(0,c.jsx)("div",{style:{fontFamily:ce.disp,fontWeight:700,fontSize:14,lineHeight:1.15},children:s.addr}),(0,c.jsx)("div",{style:{fontSize:11,color:"#9FB2D6"},children:s.area.split(",")[0]})]},s.id)),r.map(([s,o],l)=>(0,c.jsxs)(ae.default.Fragment,{children:[(0,c.jsx)("div",{className:"p-2.5",style:{background:l%2?y.paper:y.snow,fontSize:11.5,fontWeight:600,color:y.sub,borderTop:`1px solid ${y.line}`},children:s}),ji.map(u=>(0,c.jsx)("div",{className:"p-2.5",style:{background:l%2?y.paper:y.snow,fontFamily:ce.mono,fontSize:12.5,color:y.ink,borderTop:`1px solid ${y.line}`,borderLeft:`1px solid ${y.line}`},children:o(u)},u.id))]},l))]}),(0,c.jsx)("div",{className:"mt-3",style:{fontSize:10.5,color:y.sub,fontFamily:ce.mono},children:n("Co\xFBts et pr\xE9visions = estimations du mod\xE8le, non garanties.","Costs and forecasts = model estimates, not guaranteed.")})]})}function kR({addr:t,lang:e}){let[n,i]=(0,ae.useState)(void 0);if((0,ae.useEffect)(()=>{let s=!0;return i(void 0),fetch(`/api/geo?q=${encodeURIComponent(t)}`).then(o=>o.ok?o.json():null).then(o=>{s&&i(o&&o.found?{lat:o.lat,lon:o.lon}:null)}).catch(()=>{s&&i(null)}),()=>{s=!1}},[t]),n===null)return null;if(n===void 0)return(0,c.jsx)("div",{style:{fontSize:11,color:y.sub,fontFamily:ce.mono,marginTop:8},children:e==="fr"?"carte r\xE9elle\u2026":"loading map\u2026"});let a=.004,r=`${n.lon-a},${n.lat-a},${n.lon+a},${n.lat+a}`;return(0,c.jsxs)("div",{className:"mt-2.5 rounded-xl overflow-hidden",style:{border:`1px solid ${y.line}`},children:[(0,c.jsx)("iframe",{title:e==="fr"?"Carte du secteur":"Area map",width:"100%",height:"200",loading:"lazy",style:{border:0,display:"block"},src:`https://www.openstreetmap.org/export/embed.html?bbox=${r}&layer=mapnik&marker=${n.lat},${n.lon}`}),(0,c.jsx)("div",{style:{fontSize:10,color:y.sub,fontFamily:ce.mono,padding:"3px 8px"},children:"\xA9 OpenStreetMap"})]})}function DR({lang:t,log:e}){let n=(o,l)=>t==="fr"?o:l,[i,a]=(0,ae.useState)({});(0,ae.useEffect)(()=>{(async()=>a(await Dt.get(Ft.checklist,{})||{}))()},[]);let r=o=>{let l={...i,[o]:!i[o]};a(l),Dt.set(Ft.checklist,l),e("checklist_update",{kind:"offer_checklist",done:Object.values(l).filter(Boolean).length,total:vh.length})},s=Object.values(i).filter(Boolean).length;return(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:dr,title:n("Pr\xEAt\xB7e pour une offre ?","Ready to make an offer?"),note:`${s}/${vh.length}`}),(0,c.jsx)("div",{className:"rounded-full overflow-hidden mb-3",style:{height:8,background:y.snow,border:`1px solid ${y.line}`},children:(0,c.jsx)("div",{className:"seg-grow",style:{width:`${s/vh.length*100}%`,height:"100%",background:y.spruce}})}),(0,c.jsx)("div",{className:"space-y-1.5",children:vh.map(([o,l,u])=>(0,c.jsxs)("label",{className:"flex items-start gap-2.5",style:{cursor:"pointer",fontSize:13.5,color:i[o]?y.sub:y.ink},children:[(0,c.jsx)("input",{type:"checkbox",checked:!!i[o],onChange:()=>r(o),style:{marginTop:3,accentColor:y.spruce}}),(0,c.jsx)("span",{style:{textDecoration:i[o]?"line-through":"none"},children:t==="fr"?l:u})]},o))}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:y.sub},children:n("Votre progression est visible par votre courti\xE8re \u2014 elle saura quand vous \xEAtes pr\xEAt\xB7e \xE0 d\xE9poser.","Your progress is visible to your broker \u2014 she'll know when you're ready to submit.")})]})}function FR({lang:t,log:e}){let n=(o,l)=>t==="fr"?o:l,i=wh("mortgage_partner_name",n("partenaire hypoth\xE9caire","mortgage partner")),a=wh("mortgage_partner_url",""),[r,s]=(0,ae.useState)(!1);return(0,c.jsxs)("section",{className:"rounded-2xl p-4 flex items-center gap-3 flex-wrap",style:{background:y.spruceSoft,border:"1px solid #C4E0D2"},children:[(0,c.jsx)(Xr,{size:20,style:{color:y.spruce,flexShrink:0}}),(0,c.jsxs)("div",{className:"flex-1 min-w-[180px]",children:[(0,c.jsx)("div",{style:{fontWeight:700,fontSize:14,color:y.ink},children:n("Pr\xEAt\xB7e \xE0 parler financement ?","Ready to talk financing?")}),(0,c.jsx)("div",{style:{fontSize:12,color:y.sub},children:n(`Votre courti\xE8re vous met en contact \u2014 ${i}.`,`Your broker connects you \u2014 ${i}.`)})]}),(0,c.jsx)("button",{onClick:()=>{r||(e("mortgage_click",{partner:i}),s(!0),a&&window.open(a,"_blank","noopener"))},style:{background:r?y.line:y.spruce,color:"#fff",fontWeight:700,fontSize:13,borderRadius:12,padding:"10px 14px",cursor:r?"default":"pointer"},children:r?n("Demande not\xE9e \u2713","Request noted \u2713"):n("Oui, je veux en parler","Yes, let's talk")})]})}function NR({lang:t,log:e,myNotes:n,setNote:i,refEl:a}){let r=(p,f)=>t==="fr"?p:f,[s,o]=(0,ae.useState)(""),l=()=>{let p=s.trim();p&&(i([...n,{id:`n-${Date.now()}`,txt:p,ts:Date.now()}]),o(""),e("note_saved",{chars:p.length}))},u=p=>i(n.filter(f=>f.id!==p)),d=p=>new Date(p).toLocaleString(t==="fr"?"fr-CA":"en-CA",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return(0,c.jsxs)("section",{ref:a,className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:dr,title:r("Mes notes","My notes"),note:r("priv\xE9es \u2014 enregistr\xE9es dans votre portail","private \u2014 saved to your portal")}),(0,c.jsx)("textarea",{value:s,onChange:p=>o(p.target.value),rows:3,placeholder:r("Vos impressions sur cette propri\xE9t\xE9 \u2014 questions pour la visite, points \xE0 v\xE9rifier\u2026","Your impressions of this property \u2014 questions for the visit, things to double-check\u2026"),className:"w-full rounded-lg px-2.5 py-2",style:{border:`1.5px solid ${y.line}`,fontFamily:ce.body,fontSize:13.5,color:y.ink,resize:"vertical"}}),(0,c.jsxs)("button",{onClick:l,disabled:!s.trim(),className:"mt-2 rounded-xl px-4 py-2 inline-flex items-center gap-1.5",style:{background:s.trim()?y.metro:y.line,color:"#fff",fontWeight:700,fontSize:13},children:[(0,c.jsx)($r,{size:13})," ",r("Enregistrer la note","Save note")]}),n.length>0&&(0,c.jsx)("div",{className:"mt-3 space-y-2",children:n.slice().reverse().map(p=>(0,c.jsxs)("div",{className:"rounded-xl p-3 flex items-start gap-2",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,c.jsx)("div",{style:{fontSize:13.5,color:y.ink,lineHeight:1.5,whiteSpace:"pre-wrap"},children:p.txt}),(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontSize:10.5,color:y.sub,marginTop:4},children:d(p.ts)})]}),(0,c.jsx)("button",{onClick:()=>u(p.id),"aria-label":r("Supprimer la note","Delete note"),className:"p-1 rounded-md",style:{color:y.sub},children:(0,c.jsx)(pr,{size:14})})]},p.id))}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:y.sub},children:r("Vos notes vous suivent d\u2019un appareil \xE0 l\u2019autre. Leur contenu reste priv\xE9 \u2014 seul le fait que vous prenez des notes est visible par votre courti\xE8re.","Your notes follow you across devices. Their content stays private \u2014 your broker only sees that you are taking notes.")})]})}function BR({l:t,lang:e,log:n,reaction:i,setReaction:a,chat:r,setChat:s,dm:o,setDm:l,myNotes:u,setNote:d,onCompare:p,onBack:f}){let g=(R,D)=>e==="fr"?R:D,[v,C]=(0,ae.useState)(!1),[x,h]=(0,ae.useState)(!1),[m,S]=(0,ae.useState)(null),[M,I]=(0,ae.useState)("classique"),L={tour:(0,ae.useRef)(null),design:(0,ae.useRef)(null),cout:(0,ae.useRef)(null),prev:(0,ae.useRef)(null),quartier:(0,ae.useRef)(null),commodites:(0,ae.useRef)(null),risques:(0,ae.useRef)(null),notes:(0,ae.useRef)(null),questions:(0,ae.useRef)(null),messages:(0,ae.useRef)(null)},E=R=>{S(R),setTimeout(()=>S(null),2400)},_=R=>{n("section_view",{s:R}),L[R].current?.scrollIntoView({behavior:"smooth",block:"start"})},A=(0,ae.useMemo)(()=>Math.round(S0(t.price*.8,4.39,25)+(t.taxesMun+t.taxesScol)/12+t.condoFees+t.sqft*mr[t.heating].perSqft/12+t.insuranceEst),[t]),P=[["tour","3D"],["design","Design"],["cout",g("Co\xFBt","Cost")],["prev",g("Pr\xE9vision","Forecast")],["quartier",g("Quartier","Area")],["commodites",g("Commodit\xE9s","Amenities")],["risques",g("Risques","Risks")],["notes",g("Notes","Notes")],["questions","Questions"],["messages","Messages"]];return(0,c.jsxs)("div",{className:"max-w-6xl mx-auto px-3 sm:px-4 pb-28",children:[(0,c.jsxs)("div",{className:"pt-5 pb-4 fade-up",children:[(0,c.jsxs)("button",{onClick:f,className:"inline-flex items-center gap-1 mb-2.5 rounded-full px-2.5 py-1",style:{background:y.paper,border:`1px solid ${y.line}`,fontSize:11.5,fontWeight:700,color:y.sub},children:["\u2190 ",g("Inscriptions","Listings")]}),(0,c.jsxs)("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[(0,c.jsxs)(Hu,{children:["Centris n\xBA ",t.id," \xB7 ",t.area]}),(0,c.jsxs)("span",{className:"inline-flex gap-1.5",children:[t.centrisUrl&&(0,c.jsx)("a",{href:t.centrisUrl,target:"_blank",rel:"noreferrer",onClick:()=>n("centris_click",{url:t.centrisUrl}),className:"inline-flex items-center gap-1 rounded-full px-3 py-1",style:{background:y.metro,color:"#fff",fontSize:11.5,fontWeight:700},children:g("Voir sur Centris \u2197","View on Centris \u2197")}),(0,c.jsxs)("button",{onClick:p,className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1",style:{background:y.paper,border:`1px solid ${y.line}`,fontSize:11.5,fontWeight:700,color:y.metro},children:[(0,c.jsx)(_u,{size:12})," ",g("Comparer","Compare")]})]})]}),(0,c.jsx)("h1",{style:{fontFamily:ce.disp,fontWeight:800,fontSize:"clamp(26px,6vw,36px)",color:y.ink,lineHeight:1.08,margin:"6px 0 4px"},children:t.addr}),(0,c.jsxs)("div",{className:"flex flex-wrap items-baseline gap-x-3 gap-y-1",children:[(0,c.jsx)("span",{style:{fontFamily:ce.mono,fontWeight:600,fontSize:22,color:y.metro},children:ut(t.price,e)}),(0,c.jsxs)("span",{style:{fontSize:12.5,color:y.sub},children:[g("\xC9val. municipale","Municipal eval.")," ",ut(t.evalMun,e)]})]}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-1.5 mt-2.5",children:[(0,c.jsx)(Cn,{tone:"blue",children:e==="fr"?t.typeFr:t.typeEn}),(0,c.jsxs)(Cn,{children:[t.beds," ",g("ch.","bd")," \xB7 ",t.baths," ",g("sdb","ba")]}),(0,c.jsxs)(Cn,{children:[RM(t.sqft,e)," pi\xB2"]}),(0,c.jsx)(Cn,{children:t.year})]}),(0,c.jsx)("button",{onClick:()=>_("cout"),className:"mt-4 w-full text-left rounded-2xl p-4",style:{background:y.ink,color:"#fff"},children:(0,c.jsxs)("div",{className:"flex items-center justify-between",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontSize:10.5,letterSpacing:".12em",textTransform:"uppercase",color:"#9FB2D6"},children:g("Co\xFBt mensuel r\xE9el \u2014 estim\xE9","True monthly cost \u2014 estimated")}),(0,c.jsxs)("div",{style:{fontFamily:ce.mono,fontWeight:600,fontSize:30,lineHeight:1.15},children:[ut(A,e),(0,c.jsxs)("span",{style:{fontSize:14,color:"#9FB2D6"},children:[" /",g("mois","mo")]})]}),(0,c.jsx)("div",{style:{fontSize:11.5,color:"#9FB2D6"},children:g("hypoth\xE8que + taxes + copro + \xE9nergie + assurance","mortgage + taxes + condo + energy + insurance")})]}),(0,c.jsx)(ho,{size:22,style:{color:y.ochre}})]})})]}),(0,c.jsxs)("div",{className:"flex gap-2 overflow-x-auto pb-2 -mx-3 px-3",children:[Jr("listing_photos")&&(t.photos||[]).slice(0,6).map((R,D)=>(0,c.jsx)("img",{src:R,alt:`${t.addr} \u2014 photo ${D+1}`,className:"flex-shrink-0 rounded-xl",style:{width:D===0?210:150,height:120,objectFit:"cover"}},R)),t.rooms.map((R,D)=>{let z=R.icon;return(0,c.jsxs)("div",{className:"flex-shrink-0 rounded-xl relative overflow-hidden",style:{width:D===0?210:150,height:120,background:`linear-gradient(150deg, ${R.g[0]}, ${R.g[1]})`},children:[(0,c.jsx)(z,{size:26,style:{color:"rgba(255,255,255,.85)",position:"absolute",top:10,left:10}}),(0,c.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 px-2.5 py-1.5",style:{background:"linear-gradient(transparent, rgba(17,27,46,.72))"},children:[(0,c.jsx)("div",{style:{color:"#fff",fontSize:12.5,fontWeight:700},children:e==="fr"?R.fr:R.en}),(0,c.jsx)("div",{style:{color:"rgba(255,255,255,.75)",fontSize:10.5,fontFamily:ce.mono},children:R.d})]})]},D)})]}),(0,c.jsx)("div",{className:"sticky top-0 z-30 -mx-3 px-3 py-2",style:{background:"rgba(246,248,250,.94)",backdropFilter:"blur(6px)",borderBottom:`1px solid ${y.line}`},children:(0,c.jsx)("div",{className:"flex gap-1.5 overflow-x-auto",children:P.map(([R,D])=>(0,c.jsx)("button",{onClick:()=>_(R),className:"rounded-full px-3 py-1.5 flex-shrink-0",style:{background:y.paper,border:`1px solid ${y.line}`,fontSize:12.5,fontWeight:700,color:y.ink},children:D},R))})}),(0,c.jsxs)("div",{className:"mt-4 grid gap-4 lg:grid-cols-2 lg:items-start",children:[(0,c.jsx)("div",{ref:L.tour,className:"lg:col-span-2",children:(0,c.jsx)(mR,{listing:t,lang:e,onEvent:n,theme:M,onThemeChange:R=>{I(R),n("theme_change",{theme:R})},onDesigner:()=>L.design.current?.scrollIntoView({behavior:"smooth",block:"start"})})}),(0,c.jsx)("div",{className:"lg:col-span-2",children:(0,c.jsx)(ZR,{lang:e,log:n,theme:M,setTheme:I,refEl:L.design})}),(0,c.jsx)(gR,{l:t,lang:e,log:n,refEl:L.cout}),Jr("mortgage_handoff")&&(0,c.jsx)(FR,{lang:e,log:n}),(0,c.jsx)(yR,{l:t,lang:e,log:n,refEl:L.prev}),(0,c.jsx)(bR,{l:t,lang:e,refEl:L.quartier}),(0,c.jsx)(CR,{l:t,lang:e,log:n,refEl:L.commodites}),(0,c.jsx)(SR,{l:t,lang:e,log:n,refEl:L.risques}),t.fund&&(0,c.jsx)(LR,{l:t,lang:e}),(0,c.jsx)(IR,{l:t,lang:e}),(0,c.jsxs)("section",{className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:dr,title:g("D\xE9clarations du vendeur","Seller\u2019s declarations"),note:g("extraits v\xE9rifiables","verifiable extracts")}),(0,c.jsx)("div",{className:"space-y-2.5",children:t.dv.map(R=>(0,c.jsxs)("div",{className:"flex gap-2.5",children:[(0,c.jsx)("span",{style:{fontFamily:ce.mono,fontSize:11,fontWeight:600,color:y.metro,background:y.metroSoft,borderRadius:6,padding:"2px 6px",height:"fit-content"},children:R.s}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:13,fontWeight:700,color:y.ink},children:e==="fr"?R.qFr:R.qEn}),(0,c.jsx)("div",{style:{fontSize:13,color:y.sub,lineHeight:1.45},children:e==="fr"?R.aFr:R.aEn})]})]},R.s))}),(0,c.jsxs)("div",{className:"mt-3",style:{fontSize:12.5,color:y.ink},children:[(0,c.jsx)("b",{children:g("Inclusions :","Inclusions:")})," ",e==="fr"?t.inclFr:t.inclEn," \xB7 ",(0,c.jsx)("b",{children:g("Stationnement :","Parking:")})," ",e==="fr"?t.parkFr:t.parkEn]})]}),(0,c.jsx)(NR,{lang:e,log:n,myNotes:u,setNote:d,refEl:L.notes}),Jr("offer_checklist")&&(0,c.jsx)(DR,{lang:e,log:n}),(0,c.jsx)(AR,{l:t,lang:e,log:n,chat:r,setChat:s,refEl:L.questions}),(0,c.jsx)(ER,{l:t,lang:e,log:n,dm:o,setDm:l,refEl:L.messages})]}),(0,c.jsx)("div",{className:"fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2",style:{background:"linear-gradient(transparent, rgba(246,248,250,.96) 34%)"},children:(0,c.jsxs)("div",{className:"max-w-2xl mx-auto flex gap-2",children:[(0,c.jsxs)("button",{onClick:()=>{i!=="interested"&&(n("reaction_interested"),a("interested"),E(g("Not\xE9 \u2014 Julie le sait.","Noted \u2014 Julie knows.")))},className:"flex-1 rounded-xl py-3 flex items-center justify-center gap-1.5",style:{background:i==="interested"?y.spruce:y.paper,color:i==="interested"?"#fff":y.ink,border:`1.5px solid ${i==="interested"?y.spruce:y.line}`,fontWeight:700,fontSize:14},children:[(0,c.jsx)(mo,{size:16})," ",g("Int\xE9ress\xE9\xB7e","Interested")]}),(0,c.jsxs)("button",{onClick:()=>h(!0),className:"rounded-xl px-4 flex items-center justify-center gap-1.5",style:{background:i==="pass"?y.ink:y.paper,color:i==="pass"?"#fff":y.sub,border:`1.5px solid ${y.line}`,fontWeight:700,fontSize:14},children:[(0,c.jsx)(Fu,{size:15})," ",g("Pas pour moi","Not for me")]}),(0,c.jsxs)("button",{onClick:()=>C(!0),className:"flex-1 rounded-xl py-3 flex items-center justify-center gap-1.5",style:{background:y.metro,color:"#fff",fontWeight:700,fontSize:14},children:[(0,c.jsx)(fo,{size:16})," ",g("Visiter","Visit")]})]})}),m&&(0,c.jsx)("div",{className:"fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full px-4 py-2 fade-up",style:{background:y.ink,color:"#fff",fontSize:13,fontWeight:600},children:m}),v&&(0,c.jsx)(TR,{l:t,lang:e,log:n,onClose:()=>C(!1)}),x&&(0,c.jsx)(RR,{lang:e,log:n,onClose:()=>h(!1),onDone:()=>{a("pass"),h(!1),E(g("Merci \u2014 alertes ajust\xE9es.","Thanks \u2014 alerts adjusted."))}})]})}function bM({n:t,size:e=13}){return(0,c.jsx)("span",{className:"inline-flex items-center gap-0.5","aria-label":`${t}/5`,children:[1,2,3,4,5].map(n=>(0,c.jsx)(wo,{size:e,strokeWidth:2,fill:n<=t?y.ochre:"none",color:n<=t?y.ochre:y.line},n))})}function OR({lang:t}){let e=(i,a)=>t==="fr"?i:a,n=UR;return(0,c.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pb-16",children:[(0,c.jsx)("div",{className:"pt-5 fade-up",children:(0,c.jsx)(Hu,{children:e("Votre courti\xE8re","Your broker")})}),(0,c.jsxs)("div",{className:"mt-3 rounded-2xl p-4 sm:p-5 fade-up",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-3.5",children:[(0,c.jsx)("span",{style:{width:60,height:60,borderRadius:999,background:y.metroSoft,color:y.metro,display:"grid",placeItems:"center",fontFamily:ce.disp,fontWeight:800,fontSize:22,flexShrink:0},children:n.initials}),(0,c.jsxs)("div",{className:"min-w-0",children:[(0,c.jsxs)("div",{className:"flex items-center gap-1.5 flex-wrap",children:[(0,c.jsx)("span",{style:{fontFamily:ce.disp,fontWeight:800,fontSize:20,color:y.ink},children:n.name}),(0,c.jsxs)(Cn,{tone:"green",children:[(0,c.jsx)(Dn,{size:11})," ",e("V\xE9rifi\xE9e OACIQ","OACIQ-licensed")]})]}),(0,c.jsx)("div",{style:{fontSize:13,color:y.sub,marginTop:2},children:t==="fr"?n.title_fr:n.title_en}),(0,c.jsxs)("div",{style:{fontSize:12.5,color:y.sub,fontFamily:ce.mono},children:[n.agency," \xB7 ",t==="fr"?n.areas_fr:n.areas_en]})]})]}),(0,c.jsx)("div",{className:"grid grid-cols-3 gap-2 mt-4",children:[{icon:wo,v:n.rating.toFixed(1),l:e(`${n.reviewCount} avis`,`${n.reviewCount} reviews`),c:"#8A5A12",bg:y.ochreSoft},{icon:ru,v:`${n.years}`,l:e("ans d\u2019exp\xE9rience","years experience"),c:y.metro,bg:y.metroSoft},{icon:ui,v:`${n.deals}+`,l:e("transactions","closings"),c:y.spruce,bg:y.spruceSoft}].map((i,a)=>(0,c.jsxs)("div",{className:"rounded-xl p-2.5 text-center",style:{background:i.bg,border:`1px solid ${y.line}`},children:[(0,c.jsx)(i.icon,{size:15,style:{color:i.c,margin:"0 auto"}}),(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontWeight:600,fontSize:20,color:y.ink,lineHeight:1.1,marginTop:3},children:i.v}),(0,c.jsx)("div",{style:{fontSize:10.5,color:y.sub,fontWeight:600},children:i.l})]},a))}),(0,c.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2 mt-4",children:[(0,c.jsxs)("a",{href:`tel:${n.phone.replace(/\s/g,"")}`,className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5",style:{background:y.metro,color:"#fff",fontWeight:700,fontSize:13.5},children:[(0,c.jsx)(Tu,{size:15})," ",n.phone]}),(0,c.jsxs)("a",{href:`mailto:${n.email}`,className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5",style:{background:y.paper,color:y.metro,border:`1px solid ${y.line}`,fontWeight:700,fontSize:13.5},children:[(0,c.jsx)(wu,{size:15})," ",e("\xC9crire un courriel","Send an email")]})]})]}),(0,c.jsxs)("div",{className:"mt-5 rounded-2xl p-4 sm:p-5 fade-up",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:Ei,title:e("Son histoire","Her story"),note:e("\xE0 propos","about")}),(0,c.jsx)("p",{style:{fontSize:14,color:y.ink,lineHeight:1.6,margin:0},children:t==="fr"?n.story.fr:n.story.en})]}),(0,c.jsxs)("div",{className:"mt-5",children:[(0,c.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,c.jsx)(Wt,{icon:vo,title:e("Avis clients","Client reviews"),note:e("v\xE9rifi\xE9s","verified")}),(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5 shrink-0",style:{fontSize:12.5,color:y.sub},children:[(0,c.jsx)(bM,{n:Math.round(n.rating)})," ",(0,c.jsxs)("span",{style:{fontFamily:ce.mono},children:[n.rating.toFixed(1),"/5"]})]})]}),(0,c.jsx)("div",{className:"space-y-2.5",children:n.reviews.map((i,a)=>(0,c.jsxs)("div",{className:"rounded-2xl p-3.5 fade-up",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,c.jsx)("div",{style:{fontFamily:ce.disp,fontWeight:800,fontSize:14.5,color:y.ink},children:i.name}),(0,c.jsx)(bM,{n:i.rating})]}),(0,c.jsx)("div",{style:{fontSize:11.5,color:y.sub,marginTop:1},children:t==="fr"?i.area_fr:i.area_en}),(0,c.jsxs)("p",{style:{fontSize:13.5,color:y.ink,lineHeight:1.5,margin:"8px 0 0"},children:["\xAB ",t==="fr"?i.fr:i.en," \xBB"]})]},a))}),(0,c.jsxs)("div",{className:"flex items-start gap-1.5 px-1 mt-3",style:{fontSize:10.5,color:y.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),e("Profil et avis fournis \xE0 titre de d\xE9monstration \u2014 \xE0 remplacer par le profil r\xE9el du courtier et ses avis v\xE9rifi\xE9s.","Profile and reviews shown for demonstration \u2014 replace with the broker\u2019s real profile and verified reviews.")]})]})]})}function zR({lang:t}){let e=(r,s)=>t==="fr"?r:s,[n,i]=(0,ae.useState)(typeof localStorage<"u"&&localStorage.getItem("vitrine2_who")||"");return(0,c.jsxs)("button",{onClick:()=>{let r=window.prompt(e("Qui explore pr\xE9sentement ? (pr\xE9nom)","Who's browsing right now? (first name)"),n||"");r!=null&&typeof localStorage<"u"&&(localStorage.setItem("vitrine2_who",r.trim()),i(r.trim()))},title:e("Mode co-acheteur \u2014 identifier qui navigue","Co-buyer mode \u2014 say who's browsing"),className:"inline-flex items-center gap-1 rounded-full px-2.5 py-1.5",style:{background:y.paper,border:`1px solid ${y.line}`,fontSize:12,fontWeight:700,color:n?y.metro:y.sub},children:["\u{1F464} ",n||e("Qui ?","Who?")]})}function VR(){let[t,e]=(0,ae.useState)("fr"),[n,i]=(0,ae.useState)("listings"),[a,r]=(0,ae.useState)(ji[0].id),[s,o]=(0,ae.useState)([]),[l,u]=(0,ae.useState)({}),[d,p]=(0,ae.useState)({}),[f,g]=(0,ae.useState)({}),[v,C]=(0,ae.useState)({}),[x,h]=(0,ae.useState)(!1),m=(z,V)=>t==="fr"?z:V;(0,ae.useEffect)(()=>{(async()=>{let z=await Dt.get(Ft.events,null);(!z||!Array.isArray(z)||z.length===0)&&(z=wM(),await Dt.set(Ft.events,z)),o(z),u(await Dt.get(Ft.reactions,{})||{}),p(await Dt.get(Ft.chats,{})||{}),g(await Dt.get(Ft.dms,{})||{}),C(await Dt.get(Ft.notes,{})||{}),h(!0)})()},[]);let S=ji.find(z=>z.id===a)||ji[0];function M(z,V,O){let Z=V||null;if(Jr("co_buyer")&&typeof localStorage<"u"){let U=localStorage.getItem("vitrine2_who")||"";U&&(Z={...Z||{},who:U})}let Y={id:`${Co.id}-${z}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,pid:Co.id,pname:Co.name,lid:O||a,type:z,ts:Date.now(),meta:Z};o(U=>{let Q=[...U,Y];return Dt.set(Ft.events,Q),Q})}function I(z){r(z),i("prospect"),L();let V={id:`${Co.id}-visit-${Date.now()}`,pid:Co.id,pname:Co.name,lid:z,type:"visit",ts:Date.now(),meta:null};o(O=>{let Z=[...O,V];return Dt.set(Ft.events,Z),Z})}(0,ae.useEffect)(()=>{if(!x||typeof window>"u"||!window.__VITRINE_OPEN__)return;let z=window.__VITRINE_OPEN__;delete window.__VITRINE_OPEN__,ji.some(V=>String(V.id)===String(z))&&I(z)},[x]);function L(){if(typeof window>"u")return;let z=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body&&(document.body.scrollTop=0)};z(),window.requestAnimationFrame&&window.requestAnimationFrame(z)}(0,ae.useEffect)(()=>{L()},[n,a]);let E=z=>u(V=>{let O={...V,[a]:z};return Dt.set(Ft.reactions,O),O}),_=z=>p(V=>{let O={...V,[a]:z};return Dt.set(Ft.chats,O),O}),A=z=>g(V=>{let O={...V,[a]:z};return Dt.set(Ft.dms,O),O}),P=z=>C(V=>{let O={...V,[a]:z};return Dt.set(Ft.notes,O),O});async function R(){let z=wM();await Dt.set(Ft.events,z),await Dt.del(Ft.reactions),await Dt.del(Ft.chats),await Dt.del(Ft.dms),o(z),u({}),p({}),g({}),i("broker")}if(!x)return(0,c.jsxs)("div",{style:{background:y.snow,minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:ce.body},children:[(0,c.jsx)("style",{children:SM}),(0,c.jsxs)("div",{style:{textAlign:"center",color:y.sub},children:[(0,c.jsx)(va,{size:26,style:{color:y.metro,margin:"0 auto 8px"}}),(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontSize:12.5},children:"Vitrine\u2026"})]})]});let D=[["listings",xo,m("Inscriptions","Listings")],["alerts",ou,m("Alertes","Alerts")],["broker",Uu,m("Votre courti\xE8re","Your broker")]];return(0,c.jsxs)("div",{style:{background:y.snow,minHeight:"100vh",fontFamily:ce.body,color:y.ink},children:[(0,c.jsx)("style",{children:SM}),(0,c.jsx)("header",{className:"sticky top-0 z-40",style:{background:"rgba(246,248,250,.86)",backdropFilter:"blur(10px)",borderBottom:`1px solid ${y.line}`},children:(0,c.jsxs)("div",{className:"max-w-6xl mx-auto px-3 sm:px-4",children:[(0,c.jsxs)("div",{className:"flex items-center justify-between py-2.5",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)("span",{style:{width:28,height:28,borderRadius:8,background:y.ink,color:"#fff",display:"grid",placeItems:"center",fontFamily:ce.disp,fontWeight:800,fontSize:15},children:"V"}),(0,c.jsx)("div",{style:{fontFamily:ce.disp,fontWeight:800,fontSize:17,color:y.ink,letterSpacing:"-.01em"},children:"Vitrine"})]}),(0,c.jsxs)("span",{className:"inline-flex gap-1.5",children:[Jr("co_buyer")&&(0,c.jsx)(zR,{lang:t}),(0,c.jsxs)("button",{onClick:()=>e(z=>z==="fr"?"en":"fr"),className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5",style:{background:y.paper,border:`1px solid ${y.line}`,fontSize:12,fontWeight:700,color:y.ink},children:[(0,c.jsx)(Su,{size:13})," ",t==="fr"?"FR":"EN"]})]})]}),(0,c.jsx)("div",{className:"flex gap-1 pb-2",children:D.map(([z,V,O])=>(0,c.jsxs)("button",{onClick:()=>i(z),className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg py-2",style:{background:n===z?y.ink:y.paper,color:n===z?"#fff":y.sub,border:`1px solid ${n===z?y.ink:y.line}`,fontWeight:700,fontSize:12.5},children:[(0,c.jsx)(V,{size:14})," ",O]},z))})]})}),(0,c.jsxs)("main",{children:[n==="listings"&&(0,c.jsx)(eP,{lang:t,onOpen:I,log:M}),n==="prospect"&&(0,c.jsx)(BR,{l:S,lang:t,log:M,reaction:l[a],setReaction:E,chat:d[a]||[],setChat:_,dm:f[a]||[],setDm:A,myNotes:v[a]||[],setNote:P,onCompare:()=>i("compare"),onBack:()=>i("listings")},a),n==="alerts"&&(0,c.jsx)(KR,{lang:t,log:M}),n==="broker"&&(0,c.jsx)(OR,{lang:t}),n==="compare"&&(0,c.jsx)(PR,{lang:t,onEvent:M})]}),n!=="prospect"&&(0,c.jsx)("footer",{className:"max-w-2xl mx-auto px-4 py-6",style:{borderTop:`1px solid ${y.line}`,marginTop:8},children:(0,c.jsxs)("div",{className:"flex items-start gap-2",style:{fontSize:10.5,color:y.sub,lineHeight:1.55},children:[(0,c.jsx)(Dn,{size:13,style:{marginTop:1,flexShrink:0,color:y.sub}}),(0,c.jsx)("div",{children:m("D\xE9mo Vitrine \u2014 donn\xE9es d\u2019inscription fictives. Visites 3D reconstitu\xE9es et g\xE9n\xE9r\xE9es par IA (illustratives). Pr\xE9visions de prix illustratives, non une \xE9valuation agr\xE9\xE9e. Estimations de trajet non rout\xE9es en temps r\xE9el. Ameublement virtuel identifi\xE9 comme tel. L\u2019assistant IA ne donne pas de conseils juridiques, fiscaux ou sur le prix d\u2019offre. Conforme par conception : LCAP, Loi 25, Loi 96, conditions Centris, OACIQ.","Vitrine demo \u2014 fictional listing data. 3D tours are AI-generated reconstructions (illustrative). Price forecasts are illustrative, not a certified appraisal. Commute estimates are not real-time routed. Virtual staging is labelled as such. The AI assistant does not give legal, tax, or offer-price advice. Compliant by design: CASL, Law 25, Bill 96, Centris terms, OACIQ.")})]})})]})}function WR(t){let e=[];for(let n of(t||"").split(`
`)){let i=n.trim();if(!i)continue;let a=i.match(/^(.+?)\s+(\d+(?:[.,]\d+)?)\s*[x×]\s*(\d+(?:[.,]\d+)?)/i);if(!a)continue;let r=parseFloat(a[2].replace(",",".")),s=parseFloat(a[3].replace(",","."));r>.5&&s>.5&&r<30&&s<30&&e.push({name:a[1].trim(),w:r,d:s})}return e}function XR(t){let e=t.reduce((o,l)=>o+l.w*l.d,0),n=Math.max(Math.max(...t.map(o=>o.w))+.2,Math.sqrt(e)*1.35),i=[],a=0,r=0,s=0;return t.forEach((o,l)=>{a>0&&a+o.w>n&&(a=0,r+=s+.2,s=0);let u=(qR.find(([d])=>d.test(o.name))||[null,{col:"#E3E6EC",furn:[]}])[1];i.push({key:`r${l}`,fr:o.name,en:o.name,x:a,z:r,w:o.w,d:o.d,col:u.col,furn:u.furn||[],open:!!u.open}),a+=o.w+.2,s=Math.max(s,o.d)}),i}function $R({lang:t,defaultNo:e,onGenerate:n}){let i=(d,p)=>t==="fr"?d:p,[a,r]=(0,ae.useState)(e),[s,o]=(0,ae.useState)(GR),[l,u]=(0,ae.useState)(!1);return(0,c.jsxs)("div",{className:"pb-2",children:[(0,c.jsx)("div",{style:{fontFamily:ce.disp,fontWeight:700,fontSize:19,color:y.ink},children:i("Fiche Centris \u2192 plan 3D","Centris sheet \u2192 3D plan")}),(0,c.jsx)("div",{style:{fontSize:12,color:y.sub,margin:"4px 0 10px",lineHeight:1.5},children:i("En production, le n\xBA Centris r\xE9cup\xE8re la fiche via le canal du courtier et les dimensions des pi\xE8ces sont extraites automatiquement (voir la spec d\u2019ingestion). Ici, collez le tableau des pi\xE8ces \u2014 nom + dimensions en m\xE8tres.","In production, the Centris n\xBA pulls the sheet through the broker\u2019s channel and room dimensions are extracted automatically (see the ingestion spec). Here, paste the room table \u2014 name + dimensions in metres.")}),(0,c.jsx)("label",{style:{fontSize:12,color:y.sub},children:i("N\xBA Centris","Centris n\xBA")}),(0,c.jsx)("input",{value:a,onChange:d=>r(d.target.value),className:"w-full rounded-lg px-2.5 py-2 mb-2",style:{border:`1.5px solid ${y.line}`,fontFamily:ce.mono,fontSize:14,color:y.ink}}),(0,c.jsx)("label",{style:{fontSize:12,color:y.sub},children:i("Pi\xE8ces (une par ligne)","Rooms (one per line)")}),(0,c.jsx)("textarea",{value:s,onChange:d=>o(d.target.value),rows:7,className:"w-full rounded-lg px-2.5 py-2",style:{border:`1.5px solid ${y.line}`,fontFamily:ce.mono,fontSize:12.5,color:y.ink,resize:"vertical"}}),l&&(0,c.jsx)("div",{style:{fontSize:12,color:y.danger,marginTop:4},children:i("Aucune pi\xE8ce reconnue \u2014 format attendu : \xAB Salon 4,9 x 3,7 \xBB.","No rooms recognized \u2014 expected format: \u201CLiving 4.9 x 3.7\u201D.")}),(0,c.jsxs)("button",{onClick:()=>{let d=WR(s);if(!d.length){u(!0);return}n((a||"").trim()||"\u2014",d)},className:"mt-3 w-full rounded-xl py-3 inline-flex items-center justify-center gap-2",style:{background:y.metro,color:"#fff",fontWeight:700,fontSize:14.5},children:[(0,c.jsx)(_a,{size:16})," ",i("G\xE9n\xE9rer le plan 3D","Generate the 3D plan")]})]})}function ZR({lang:t,log:e,theme:n,setTheme:i,refEl:a}){let r=(u,d)=>t==="fr"?u:d,[s,o]=(0,ae.useState)({}),l=["sofa","table","coffee","rug"];return(0,c.jsxs)("section",{ref:a,className:"rounded-2xl p-4 sm:p-5",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:uu,title:r("Designers & ambiances","Designers & moods"),note:r("r\xE9seau partenaire \u2014 d\xE9mo","partner network \u2014 demo")}),(0,c.jsx)("div",{style:{fontSize:12.5,color:y.sub,marginBottom:10},children:r("Pr\xE9visualisez le style d\u2019un\xB7e designer directement dans la visite 3D, puis r\xE9servez une consultation.","Preview a designer\u2019s style right in the 3D tour, then book a consultation.")}),(0,c.jsx)("div",{className:"space-y-2.5",children:YR.map(u=>{let d=gr[u.style],p=n===u.style;return(0,c.jsxs)("div",{className:"rounded-xl p-3",style:{background:y.snow,border:`1px solid ${p?"#C9D9F2":y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,c.jsx)("span",{style:{width:38,height:38,borderRadius:12,background:d.dot,color:"#fff",display:"grid",placeItems:"center",fontFamily:ce.disp,fontWeight:800,fontSize:14},children:u.name.split(" ").map(f=>f[0]).join("").slice(0,2)}),(0,c.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,c.jsx)("div",{style:{fontSize:14,fontWeight:800,color:y.ink},children:u.name}),(0,c.jsxs)("div",{style:{fontSize:11.5,color:y.sub},children:[t==="fr"?u.cityFr:u.cityEn," \xB7 ",u.rate]})]}),(0,c.jsx)(Cn,{tone:"blue",children:t==="fr"?d.fr:d.en})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:(t==="fr"?u.tagsFr:u.tagsEn).map(f=>(0,c.jsx)(Cn,{children:f},f))}),(0,c.jsxs)("div",{className:"flex gap-2 mt-2.5",children:[(0,c.jsxs)("button",{onClick:()=>{i(u.style),e("theme_change",{theme:u.style,via:u.id})},className:"flex-1 rounded-lg py-2 inline-flex items-center justify-center gap-1.5",style:{background:p?y.metro:y.paper,color:p?"#fff":y.metro,border:`1.5px solid ${p?y.metro:"#C9D9F2"}`,fontSize:12.5,fontWeight:700},children:[(0,c.jsx)(_o,{size:13})," ",p?r("Ambiance appliqu\xE9e \u2713","Mood applied \u2713"):r("Pr\xE9visualiser en 3D","Preview in 3D")]}),(0,c.jsx)("button",{onClick:()=>{s[u.id]||(o(f=>({...f,[u.id]:!0})),e("designer_request",{designer:u.id}))},className:"flex-1 rounded-lg py-2",style:{background:s[u.id]?y.spruceSoft:y.ink,color:s[u.id]?y.spruce:"#fff",fontSize:12.5,fontWeight:700},children:s[u.id]?r("Demande envoy\xE9e \u2713","Request sent \u2713"):r("Consultation 30 min","30-min consult")})]})]},u.id)})}),(0,c.jsxs)("div",{className:"mt-3 rounded-xl p-3",style:{background:y.ochreSoft,border:"1px solid #EBD3A0"},children:[(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5 mb-1.5",style:{fontSize:12.5,fontWeight:800,color:y.ink},children:[(0,c.jsx)(So,{size:14,style:{color:"#8A5A12"}})," ",r("Magasiner l\u2019ambiance","Shop the mood")," \u2014 ",t==="fr"?gr[n].fr:gr[n].en]}),(0,c.jsx)("div",{className:"space-y-1",children:l.map(u=>(0,c.jsxs)("button",{onClick:()=>e("shop_item",{item:u,via:"design_section"}),className:"w-full flex items-center justify-between rounded-lg px-2.5 py-1.5",style:{background:y.paper,border:`1px solid ${y.line}`,fontSize:12},children:[(0,c.jsx)("span",{style:{color:y.ink,fontWeight:600},children:t==="fr"?Ki[u].fr:Ki[u].en}),(0,c.jsxs)("span",{style:{fontFamily:ce.mono,color:y.sub},children:[Ki[u].price," \xB7 ",Ki[u].stores[0]]})]},u))})]}),(0,c.jsxs)("div",{className:"mt-2 flex items-start gap-1.5",style:{fontSize:10.5,color:y.sub},children:[(0,c.jsx)(Dn,{size:12,style:{marginTop:1,flexShrink:0}}),r("Liens marchands = partenaires (commission possible), identifi\xE9s comme tels et distincts du courtage immobilier. Vos coordonn\xE9es ne sont partag\xE9es \xE0 un\xB7e designer qu\u2019apr\xE8s votre confirmation (Loi 25).","Merchant links are partner links (commission possible), labelled as such and separate from the brokerage. Your contact info is shared with a designer only after you confirm (Law 25).")]})]})}function KR({lang:t,log:e}){let n=(m,S)=>t==="fr"?m:S,[i,a]=(0,ae.useState)(AM),[r,s]=(0,ae.useState)(null),[o,l]=(0,ae.useState)(!1);(0,ae.useEffect)(()=>{(async()=>{let m=await Dt.get(Ft.prefs,null);m&&m.p&&(a({...AM,...m.p}),s(m.status||null)),l(!0)})()},[]);let u=m=>a(S=>({...S,...m})),d=(m,S)=>u({[m]:i[m].includes(S)?i[m].filter(M=>M!==S):[...i[m],S]}),p=(m,S)=>u({[m]:S}),f=({k:m,all:S})=>(0,c.jsxs)("span",{className:"inline-flex gap-1",style:{marginLeft:"auto"},children:[(0,c.jsxs)("button",{onClick:()=>p(m,[...S]),disabled:i[m].length===S.length,style:{background:"transparent",border:0,fontSize:11,fontWeight:700,color:i[m].length===S.length?y.line:y.metro},children:["\u2713 ",n("Tout","All")]}),(0,c.jsxs)("button",{onClick:()=>p(m,[]),disabled:i[m].length===0,style:{background:"transparent",border:0,fontSize:11,fontWeight:700,color:i[m].length===0?y.line:y.sub},children:["\u2715 ",n("Aucun","None")]})]}),g=ji.filter(m=>{let S=i.types.includes(m.condoFees>0?"condo":"detache"),M=m.price>=i.pmin&&m.price<=i.pmax,I=m.beds>=i.beds,L=m.baths>=i.baths,E=!i.must.piscine||/piscine/i.test(m.inclFr),_=!i.must.garage||/garage/i.test(m.parkFr),A=i.areas.length===0||i.areas.some(P=>m.area.includes(P));return S&&M&&I&&L&&E&&_&&A}).length;async function v(){s("vitrine"),await Dt.set(Ft.prefs,{p:i,status:"vitrine"}),e("criteria_update",{summary:`${Sh(i.pmin,t)}\u2013${Sh(i.pmax,t)} \xB7 ${i.beds}+ ch \xB7 ${i.areas.length} secteurs`}),setTimeout(async()=>{s("sent"),await Dt.set(Ft.prefs,{p:i,status:"sent"})},600),setTimeout(async()=>{s("synced"),await Dt.set(Ft.prefs,{p:i,status:"synced"})},3200)}let C=({on:m,onClick:S,children:M})=>(0,c.jsx)("button",{onClick:S,className:"rounded-full px-3 py-1.5",style:{background:m?y.metroSoft:y.paper,color:m?y.metro:y.sub,border:`1.5px solid ${m?"#C9D9F2":y.line}`,fontSize:12.5,fontWeight:700},children:M}),x=[{fr:"Appliqu\xE9 \xE0 vos alertes Vitrine",en:"Applied to your Vitrine alerts",sfr:"imm\xE9diat",sen:"instant"},{fr:`Transmis \xE0 ${on.name}`,en:`Sent to ${on.name}`,sfr:"mise \xE0 jour de la recherche Matrix \u2014 1 clic de son c\xF4t\xE9",sen:"Matrix search update \u2014 1 click on her side"},{fr:"Confirm\xE9 c\xF4t\xE9 Centris par la courti\xE8re",en:"Confirmed on Centris by the broker",sfr:"simul\xE9 pour la d\xE9mo",sen:"simulated for the demo"}],h={vitrine:0,sent:1,synced:2}[r]??-1;return o?(0,c.jsxs)("div",{className:"max-w-2xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,c.jsx)(Hu,{children:n("Crit\xE8res de recherche","Search criteria")}),(0,c.jsx)("h1",{style:{fontFamily:ce.disp,fontWeight:800,fontSize:26,color:y.ink,margin:"4px 0 4px"},children:n("Mes alertes","My alerts")}),(0,c.jsx)("div",{style:{fontSize:12.5,color:y.sub,marginBottom:14},children:n("Ajustez ici \u2014 vos prochains microsites suivront imm\xE9diatement. Julie met la recherche Centris \xE0 niveau de son c\xF4t\xE9.","Adjust here \u2014 your next microsites follow instantly. Julie brings the Centris search up to date on her side.")}),(0,c.jsxs)("div",{className:"space-y-3",children:[(0,c.jsxs)("section",{className:"rounded-2xl p-4",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:Xr,title:n("Prix","Price"),note:`${ut(i.pmin,t)} \u2013 ${ut(i.pmax,t)}`}),(0,c.jsx)(bo,{label:n("Minimum","Minimum"),val:i.pmin,set:m=>u({pmin:Math.min(m,i.pmax-25e3)}),min:1e5,max:875e3,step:25e3,suffix:" $",field:"pmin"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)(bo,{label:n("Maximum","Maximum"),val:i.pmax,set:m=>u({pmax:Math.max(m,i.pmin+25e3)}),min:125e3,max:9e5,step:25e3,suffix:" $",field:"pmax"})})]}),(0,c.jsxs)("section",{className:"rounded-2xl p-4",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:ui,title:n("La propri\xE9t\xE9","The property"),note:n("m\xEAmes champs que l\u2019alerte Matrix","same fields as the Matrix alert")}),(0,c.jsx)("div",{style:{fontSize:12,color:y.sub,marginBottom:4},children:n("Chambres (min)","Bedrooms (min)")}),(0,c.jsx)("div",{className:"flex gap-1.5 mb-3",children:[1,2,3,4].map(m=>(0,c.jsxs)(C,{on:i.beds===m,onClick:()=>u({beds:m}),children:[m,"+"]},m))}),(0,c.jsx)("div",{style:{fontSize:12,color:y.sub,marginBottom:4},children:n("Salles de bain (min)","Bathrooms (min)")}),(0,c.jsx)("div",{className:"flex gap-1.5 mb-3",children:[1,1.5,2].map(m=>(0,c.jsxs)(C,{on:i.baths===m,onClick:()=>u({baths:m}),children:[m,"+"]},m))}),(0,c.jsx)("div",{className:"mb-3",children:(0,c.jsx)(bo,{label:n("Terrain (min, pi\xB2)","Lot area (min, sq ft)"),val:i.lot,set:m=>u({lot:m}),min:0,max:3e4,step:2500,suffix:" pi\xB2",field:"lot"})}),(0,c.jsxs)("div",{className:"flex items-center",style:{fontSize:12,color:y.sub,marginBottom:4},children:[n("Types de b\xE2timent","Building types"),(0,c.jsx)(f,{k:"types",all:IM.map(([m])=>m)})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-3",children:IM.map(([m,S,M])=>(0,c.jsx)(C,{on:i.types.includes(m),onClick:()=>d("types",m),children:t==="fr"?S:M},m))}),(0,c.jsx)("div",{style:{fontSize:12,color:y.sub,marginBottom:4},children:n("Indispensables","Must-haves")}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5",children:[["piscine",n("Piscine","Pool")],["garage","Garage"],["foyer",n("Foyer-po\xEAle","Fireplace-stove")]].map(([m,S])=>(0,c.jsx)(C,{on:i.must[m],onClick:()=>u({must:{...i.must,[m]:!i.must[m]}}),children:S},m))})]}),(0,c.jsxs)("section",{className:"rounded-2xl p-4",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)(Wt,{icon:yo,title:n("Secteurs","Areas"),note:`${i.areas.length} ${n("choisis","selected")}`}),(0,c.jsx)(f,{k:"areas",all:LM})]}),(0,c.jsx)("div",{className:"flex flex-wrap gap-1.5",children:LM.map(m=>(0,c.jsx)(C,{on:i.areas.includes(m),onClick:()=>d("areas",m),children:m},m))})]}),(0,c.jsxs)("div",{className:"rounded-2xl p-4",style:{background:y.ink},children:[(0,c.jsx)("div",{style:{color:"#9FB2D6",fontFamily:ce.mono,fontSize:10.5,textTransform:"uppercase",letterSpacing:".12em"},children:n("Aper\xE7u imm\xE9diat","Instant preview")}),(0,c.jsx)("div",{style:{color:"#fff",fontSize:14,marginTop:2},children:n(`${g} des ${ji.length} inscriptions d\xE9mo correspondent \xE0 ces crit\xE8res.`,`${g} of ${ji.length} demo listings match these criteria.`)}),(0,c.jsx)("button",{onClick:v,className:"mt-3 w-full rounded-xl py-3",style:{background:y.ochre,color:y.ink,fontWeight:800,fontSize:14.5},children:r?n("Mettre \xE0 jour mes crit\xE8res","Update my criteria"):n("Enregistrer mes crit\xE8res","Save my criteria")})]}),r&&(0,c.jsxs)("section",{className:"rounded-2xl p-4 fade-up",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsx)(Wt,{icon:Dn,title:n("Synchronisation","Sync"),note:n("en direct","live")}),(0,c.jsx)("div",{className:"space-y-2.5",children:x.map((m,S)=>{let M=h>=S;return(0,c.jsxs)("div",{className:"flex items-start gap-2.5",children:[(0,c.jsx)("span",{style:{width:22,height:22,borderRadius:999,display:"grid",placeItems:"center",background:M?y.spruceSoft:y.snow,color:M?y.spruce:y.sub,border:`1px solid ${M?"#C4E0D2":y.line}`,flexShrink:0},children:M?(0,c.jsx)(fu,{size:13}):(0,c.jsx)(hu,{size:12})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{fontSize:13,fontWeight:700,color:M?y.ink:y.sub},children:t==="fr"?m.fr:m.en}),(0,c.jsx)("div",{style:{fontSize:11,color:y.sub},children:t==="fr"?m.sfr:m.sen})]})]},S)})})]}),(0,c.jsx)("div",{className:"rounded-xl p-3",style:{background:y.metroSoft,border:"1px solid #C9D9F2",fontSize:11.5,color:y.ink,lineHeight:1.55},children:n("Pourquoi deux \xE9tapes ? Centris/Matrix n\u2019offre pas d\u2019API publique d\u2019\xE9criture des recherches sauvegard\xE9es \u2014 seul le compte Matrix de la courti\xE8re peut modifier la recherche automatique. Vitrine applique donc vos crit\xE8res imm\xE9diatement \xE0 ses propres alertes et cr\xE9e une t\xE2che \xAB 1 clic \xBB pour Julie. Chaque changement de crit\xE8res est aussi un signal d\u2019intention visible \xE0 son tableau de bord.","Why two steps? Centris/Matrix has no public write API for saved searches \u2014 only the broker\u2019s Matrix account can edit the auto-search. So Vitrine applies your criteria to its own alerts instantly and creates a one-click task for Julie. Each criteria change is also an intent signal on her dashboard.")})]})]}):null}function TM(t,e){if(Array.isArray(e)&&e.length===2)return e;let n=0,i=String(t);for(let a=0;a<i.length;a++)n=n*31+i.charCodeAt(a)>>>0;return[16+n%68,16+Math.floor(n/68)%64]}function QR(t){let e=ji.map(i=>{let a=jR[i.id]||{},r=i.baths%1?1:0;return{id:i.id,addr:i.addr,area:i.area,typeStr:(t==="fr"?i.typeFr:i.typeEn)+` \u2014 ${i.year}`,price:i.price,beds:i.beds,bathsStr:`${Math.floor(i.baths)}+${r}`,heatStr:t==="fr"?mr[i.heating].fr:mr[i.heating].en,rooms:a.rooms,lot:a.lot,garage:/garage/i.test(i.parkFr),fire:!!a.fire,pool:/piscine/i.test(i.inclFr),badge:a.badge,dateSent:a.dateSent,g:i.accent,xy:TM(i.id,a.xy),full:!0,condo:i.condoFees>0,video:EM[i.id]||null,centrisUrl:i.centrisUrl||"",photos:Jr("listing_photos")&&i.photos||[]}}),n=JR.map(i=>({...i,xy:TM(i.id,i.xy),typeStr:t==="fr"?i.typeFr:i.typeEn,heatStr:t==="fr"?i.heatFr:i.heatEn,full:!1,condo:!1,video:EM[i.id]||null}));return[...n.slice(0,1),...e,...n.slice(1)]}function eP({lang:t,onOpen:e,log:n}){let i=(m,S)=>t==="fr"?m:S,[a,r]=(0,ae.useState)("list"),[s,o]=(0,ae.useState)(null),l=(0,ae.useMemo)(()=>QR(t),[t]),u=(0,ae.useMemo)(()=>[...new Set(l.map(m=>m.area))],[l]),[d,p]=(0,ae.useState)([]),f=m=>p(S=>S.includes(m)?S.filter(M=>M!==m):[...S,m]),g=l.filter(m=>!d.includes(m.area)),v=g.find(m=>m.id===s)||null,C=({label:m,value:S})=>(0,c.jsxs)("div",{className:"flex items-start justify-between gap-3",style:{fontSize:12.5,padding:"3px 0"},children:[(0,c.jsx)("span",{style:{fontWeight:700,color:y.ink},children:m}),(0,c.jsx)("span",{className:"text-right",style:{color:y.sub},children:S})]}),x=m=>m?i("Oui","Yes"):i("Non","No"),h=({r:m,small:S})=>m.full?(0,c.jsxs)("div",{className:"flex gap-2",children:[(0,c.jsxs)("button",{onClick:()=>e(m.id),className:`flex-1 rounded-xl ${S?"py-2":"py-2.5"} inline-flex items-center justify-center gap-1.5`,style:{background:y.metro,color:"#fff",fontWeight:800,fontSize:S?12.5:13.5},children:[i("Ouvrir le microsite","Open the microsite")," ",(0,c.jsx)(ho,{size:14})]}),m.centrisUrl&&(0,c.jsx)("a",{href:m.centrisUrl,target:"_blank",rel:"noreferrer",onClick:()=>n&&n("centris_click",{url:m.centrisUrl},m.id),className:`rounded-xl px-3 ${S?"py-2":"py-2.5"} inline-flex items-center justify-center`,style:{background:y.paper,border:`1.5px solid ${y.line}`,color:y.metro,fontWeight:800,fontSize:S?12.5:13.5,whiteSpace:"nowrap"},children:"Centris \u2197"})]}):(0,c.jsx)("div",{className:`w-full rounded-xl ${S?"py-2":"py-2.5"} text-center`,style:{background:y.snow,border:`1.5px dashed ${y.line}`,color:y.sub,fontWeight:700,fontSize:S?11.5:12.5},children:i("Fiche compl\xE8te \u2014 bient\xF4t \xB7 tir\xE9e de votre alerte Matrix","Full sheet \u2014 soon \xB7 from your Matrix alert")});return(0,c.jsxs)("div",{className:"max-w-6xl mx-auto px-3 sm:px-4 pt-5 pb-16",children:[(0,c.jsxs)("div",{className:"flex items-end justify-between gap-3",children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)(Hu,{children:[i("Vos alertes","Your alerts")," \xB7 ",on.name]}),(0,c.jsx)("h1",{style:{fontFamily:ce.disp,fontWeight:800,fontSize:26,color:y.ink,margin:"4px 0 2px"},children:i("Inscriptions","Listings")}),(0,c.jsxs)("div",{style:{fontSize:12,color:y.sub},children:[g.length,d.length?` / ${l.length}`:""," ",i("inscriptions \xB7 m\xEAmes donn\xE9es que l\u2019alerte Matrix, meilleure surface","listings \xB7 same data as the Matrix alert, better surface")]})]}),(0,c.jsx)("div",{className:"flex gap-1 p-1 rounded-xl shrink-0",style:{background:y.paper,border:`1px solid ${y.line}`},children:[["list",xo,i("Liste","List")],["map",Cu,i("Carte","Map")]].map(([m,S,M])=>(0,c.jsxs)("button",{onClick:()=>r(m),className:"inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5",style:{background:a===m?y.ink:"transparent",color:a===m?"#fff":y.sub,fontWeight:700,fontSize:12},children:[(0,c.jsx)(S,{size:13})," ",M]},m))})]}),(0,c.jsxs)("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:[(0,c.jsx)("span",{style:{fontFamily:ce.mono,fontSize:10,letterSpacing:".1em",textTransform:"uppercase",color:y.sub,marginRight:2},children:i("Secteurs","Areas")}),u.map(m=>{let S=!d.includes(m);return(0,c.jsx)("button",{onClick:()=>f(m),"aria-pressed":S,className:"rounded-full px-3 py-1.5",style:{background:S?y.metroSoft:y.paper,color:S?y.metro:y.sub,border:`1.5px solid ${S?"#C9D9F2":y.line}`,fontSize:12,fontWeight:700},children:m},m)}),(0,c.jsxs)("span",{className:"inline-flex gap-1",style:{marginLeft:4},children:[(0,c.jsxs)("button",{onClick:()=>p([]),disabled:!d.length,className:"rounded-full px-2.5 py-1.5",style:{background:y.paper,border:`1px solid ${y.line}`,fontSize:11.5,fontWeight:700,color:d.length?y.metro:y.line},children:["\u2713 ",i("Tout s\xE9lectionner","Select all")]}),(0,c.jsxs)("button",{onClick:()=>p(u),disabled:d.length===u.length,className:"rounded-full px-2.5 py-1.5",style:{background:y.paper,border:`1px solid ${y.line}`,fontSize:11.5,fontWeight:700,color:d.length===u.length?y.line:y.sub},children:["\u2715 ",i("Tout d\xE9s\xE9lectionner","Deselect all")]})]})]}),g.length===0&&(0,c.jsx)("div",{className:"mt-6 rounded-2xl p-6 text-center",style:{background:y.paper,border:`1.5px dashed ${y.line}`,color:y.sub,fontSize:13},children:i("Aucun secteur s\xE9lectionn\xE9 \u2014 r\xE9activez un filtre pour voir les inscriptions.","No area selected \u2014 turn a filter back on to see the listings.")}),a==="list"&&(0,c.jsx)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 items-start",children:g.map(m=>(0,c.jsxs)("div",{className:"rounded-2xl overflow-hidden fade-up",style:{background:y.paper,border:`1px solid ${y.line}`},children:[m.photos&&m.photos.length?(0,c.jsxs)("div",{className:"relative",style:{background:"#0B0F17"},children:[(0,c.jsx)("img",{src:m.photos[0],alt:m.addr,style:{width:"100%",display:"block",height:170,objectFit:"cover"}}),m.photos.length>1&&(0,c.jsxs)("span",{className:"absolute",style:{bottom:10,left:12,background:"rgba(17,27,46,.72)",color:"#fff",borderRadius:999,padding:"3px 9px",fontSize:11,fontWeight:700},children:["\u{1F4F7} ",m.photos.length]}),m.badge&&(0,c.jsx)("span",{className:"absolute",style:{top:12,right:12,background:Fn[m.badge].bg,color:Fn[m.badge].fg,borderRadius:999,padding:"4px 10px",fontSize:11,fontWeight:800},children:t==="fr"?Fn[m.badge].fr:Fn[m.badge].en}),(0,c.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 px-3.5 py-2",style:{background:"linear-gradient(transparent, rgba(17,27,46,.72))"},children:[(0,c.jsx)("div",{style:{color:"#fff",fontFamily:ce.disp,fontWeight:800,fontSize:17,lineHeight:1.1},children:m.addr}),(0,c.jsx)("div",{style:{color:"rgba(255,255,255,.85)",fontSize:11.5},children:m.area})]})]}):m.video?(0,c.jsxs)("div",{className:"relative",style:{background:"#0B0F17"},children:[(0,c.jsx)("video",{src:m.video,controls:!0,playsInline:!0,muted:!0,loop:!0,preload:"metadata",style:{width:"100%",display:"block",maxHeight:260}}),(0,c.jsx)("div",{className:"absolute top-2 left-2",style:{pointerEvents:"none"},children:(0,c.jsx)(_h,{text:t==="fr"?"Vid\xE9o g\xE9n\xE9r\xE9e par IA \u2014 indicative":"AI-generated video \u2014 indicative"})}),m.badge&&(0,c.jsx)("span",{className:"absolute",style:{top:12,right:12,background:Fn[m.badge].bg,color:Fn[m.badge].fg,borderRadius:999,padding:"4px 10px",fontSize:11,fontWeight:800,pointerEvents:"none"},children:t==="fr"?Fn[m.badge].fr:Fn[m.badge].en})]}):(0,c.jsxs)("div",{className:"relative",style:{height:130,background:`linear-gradient(140deg, ${m.g[0]}, ${m.g[1]})`},children:[m.condo?(0,c.jsx)(va,{size:34,style:{color:"rgba(255,255,255,.9)",position:"absolute",top:14,left:14}}):(0,c.jsx)(ui,{size:34,style:{color:"rgba(255,255,255,.9)",position:"absolute",top:14,left:14}}),m.badge&&(0,c.jsx)("span",{className:"absolute",style:{top:12,right:12,background:Fn[m.badge].bg,color:Fn[m.badge].fg,borderRadius:999,padding:"4px 10px",fontSize:11,fontWeight:800},children:t==="fr"?Fn[m.badge].fr:Fn[m.badge].en}),(0,c.jsx)(mo,{size:18,style:{color:"rgba(255,255,255,.85)",position:"absolute",bottom:12,right:14}}),(0,c.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 px-3.5 py-2",style:{background:"linear-gradient(transparent, rgba(17,27,46,.65))"},children:[(0,c.jsx)("div",{style:{color:"#fff",fontFamily:ce.disp,fontWeight:800,fontSize:17,lineHeight:1.1},children:m.addr}),(0,c.jsx)("div",{style:{color:"rgba(255,255,255,.85)",fontSize:11.5},children:m.area})]})]}),(0,c.jsxs)("div",{className:"p-3.5",children:[(0,c.jsxs)("div",{className:"flex items-baseline justify-between gap-2",children:[(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontWeight:600,fontSize:22,color:y.metro},children:ut(m.price,t)}),(0,c.jsx)("div",{style:{fontSize:11.5,color:y.sub},children:m.typeStr})]}),(0,c.jsxs)("div",{className:"mt-2 rounded-xl px-3 py-1.5",style:{background:y.snow,border:`1px solid ${y.line}`},children:[(0,c.jsx)(C,{label:i("Type de b\xE2timent","Building Type"),value:i("D\xE9tach\xE9","Detached")}),(0,c.jsx)(C,{label:i("Pi\xE8ces","Rooms"),value:m.rooms}),m.lot&&(0,c.jsx)(C,{label:i("Terrain","Lot Area"),value:m.lot}),(0,c.jsx)(C,{label:i("Chambres","Bedrooms"),value:`${m.beds}+0`}),(0,c.jsx)(C,{label:i("\xC9nergie/Chauffage","Energy/Heating"),value:m.heatStr}),(0,c.jsx)(C,{label:i("SDB + salle d\u2019eau","Bath + PR"),value:m.bathsStr}),(0,c.jsx)(C,{label:"Garage",value:x(m.garage)}),(0,c.jsx)(C,{label:i("Foyer-po\xEAle","Fireplace-Stove"),value:x(m.fire)}),(0,c.jsx)(C,{label:i("Piscine","Pool"),value:x(m.pool)})]}),(0,c.jsxs)("div",{className:"mt-2 flex items-center justify-between",style:{fontFamily:ce.mono,fontSize:10.5,color:y.sub},children:[(0,c.jsxs)("span",{children:["Centris n\xBA ",m.id]}),(0,c.jsxs)("span",{children:[i("Re\xE7ue le","Sent")," ",m.dateSent]})]}),(0,c.jsx)("div",{className:"mt-2.5",children:(0,c.jsx)(h,{r:m})})]})]},m.id))}),a==="map"&&(0,c.jsxs)("div",{className:"mt-4",children:[(0,c.jsx)("div",{className:"rounded-2xl overflow-hidden",style:{border:`1px solid ${y.line}`,background:"#E8F1E4"},children:(0,c.jsxs)("svg",{viewBox:"0 0 100 92",width:"100%",style:{display:"block"},role:"img","aria-label":i("Carte des inscriptions","Listings map"),children:[(0,c.jsx)("rect",{width:"100",height:"92",fill:"#E8F1E4"}),(0,c.jsx)("path",{d:"M0 0 L100 0 L100 26 C80 34 66 30 52 40 C38 50 24 44 10 52 L0 56 Z",fill:"#DCEBD0"}),[[16,10],[30,8],[40,16],[22,24],[52,22]].map(([m,S],M)=>(0,c.jsx)("ellipse",{cx:m,cy:S,rx:3.4,ry:1.7,fill:"#B9D8EF"},M)),(0,c.jsx)("path",{d:"M100 50 L70 62 L38 80 L26 92 L46 92 L76 72 L100 60 Z",fill:"#A9CFEA"}),(0,c.jsx)("ellipse",{cx:"60",cy:"70",rx:"9",ry:"4.2",fill:"#D6E4CE"}),(0,c.jsx)("polyline",{points:"30,4 40,26 52,52 60,90",fill:"none",stroke:"#C6CEDA",strokeWidth:"1.4"}),(0,c.jsx)("polyline",{points:"6,66 40,62 62,64 96,58",fill:"none",stroke:"#CBD3DE",strokeWidth:"1.1"}),(0,c.jsx)("polyline",{points:"24,18 36,30 48,40",fill:"none",stroke:"#D2D9E2",strokeWidth:"0.9"}),[["Mont-Tremblant",18,14.5],["Sainte-Ad\xE8le",47,39.5],["Montr\xE9al",57,69],["Longueuil",76,82.5]].map(([m,S,M])=>(0,c.jsx)("text",{x:S,y:M,style:{font:`600 3.1px ${ce.body}`,fill:"#5A6577"},children:m},m)),g.map(m=>{let S=s===m.id;return(0,c.jsxs)("g",{transform:`translate(${m.xy[0]}, ${m.xy[1]})`,onClick:()=>o(m.id),style:{cursor:"pointer"},children:[S&&(0,c.jsx)("circle",{cy:"-5.4",r:"4.6",fill:"none",stroke:m.g[0],strokeWidth:"0.7",opacity:"0.7"}),(0,c.jsx)("rect",{x:"-9.5",y:"-16.5",width:"19",height:"5.4",rx:"2.7",fill:"#111B2E"}),(0,c.jsx)("text",{x:"0",y:"-12.6",textAnchor:"middle",style:{font:`600 3px ${ce.mono}`,fill:"#fff"},children:Sh(m.price,t)}),(0,c.jsx)("path",{d:"M0 0 C -3.4 -4.6 -3.4 -8.4 0 -8.4 C 3.4 -8.4 3.4 -4.6 0 0 Z",fill:m.g[0],stroke:"#fff",strokeWidth:"0.6"}),(0,c.jsx)("circle",{cy:"-5.6",r:"1.5",fill:"#fff"})]},m.id)})]})}),v?(0,c.jsxs)("div",{className:"mt-3 rounded-2xl p-3.5 fade-up",style:{background:y.paper,border:`1px solid ${y.line}`},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,c.jsxs)("div",{className:"min-w-0",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,c.jsx)("span",{style:{fontFamily:ce.disp,fontWeight:800,fontSize:15,color:y.ink},children:v.addr}),v.badge&&(0,c.jsx)(Cn,{tone:v.badge==="new"?"green":"amber",children:t==="fr"?Fn[v.badge].fr:Fn[v.badge].en})]}),(0,c.jsxs)("div",{style:{fontSize:11.5,color:y.sub},children:[v.area," \xB7 ",v.beds," ",i("ch.","bd")," \xB7 ",v.bathsStr," ",i("sdb","ba")," \xB7 Centris ",v.id]})]}),(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontWeight:600,fontSize:18,color:y.metro,whiteSpace:"nowrap"},children:ut(v.price,t)})]}),Jr("real_map")&&(0,c.jsx)(kR,{addr:`${v.addr}, ${v.area}`,lang:t}),(0,c.jsx)("div",{className:"mt-2.5",children:(0,c.jsx)(h,{r:v,small:!0})})]}):(0,c.jsx)("div",{className:"mt-3 text-center",style:{fontSize:12,color:y.sub},children:i("Touchez une \xE9pingle pour voir l\u2019inscription.","Tap a pin to see the listing.")}),(0,c.jsx)("div",{className:"mt-2",style:{fontSize:10.5,color:y.sub,fontFamily:ce.mono,textAlign:"center"},children:i("Carte stylis\xE9e (d\xE9mo) \u2014 production : tuiles cartographiques + g\xE9ocodage des adresses.","Stylized map (demo) \u2014 production: map tiles + address geocoding.")})]})]})}var ae,c,y,ce,SM,y0,ut,RM,Sh,Mh,mr,MM,ji,jr,Jr,wh,on,Co,xh,Dt,Ft,Hu,Wt,Cn,oR,v0,bo,Ch,_h,_0,xR,vR,_R,MR,wR,vh,UR,HR,gr,Ki,GR,qR,YR,LM,IM,AM,jR,JR,EM,Fn,DM=ve(()=>{ae=Ri(Ca());ZS();_M();c=Ri(yl()),y={ink:"#111B2E",snow:"#F6F8FA",paper:"#FFFFFF",metro:"#1656B4",metroSoft:"#E8EEF9",ochre:"#E8A33D",ochreSoft:"#FBF1DD",spruce:"#2F7D5C",spruceSoft:"#E4F1EA",line:"#DCE2EA",sub:"#5A6577",danger:"#B4552E",dangerSoft:"#F6E3DA"},ce={disp:"'Bricolage Grotesque', 'Public Sans', sans-serif",body:"'Public Sans', system-ui, -apple-system, sans-serif",mono:"'Spline Sans Mono', 'SF Mono', monospace"},SM=`
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Public+Sans:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500;600&display=swap');
* { box-sizing: border-box; }
button { cursor: pointer; font-family: inherit; }
button:focus-visible, input:focus-visible, textarea:focus-visible { outline: 2px solid ${y.metro}; outline-offset: 2px; }
input[type=range] { accent-color: ${y.metro}; }
input[type=text], input[type=search] { font-family: inherit; }
::-webkit-scrollbar { height: 6px; width: 8px; }
::-webkit-scrollbar-thumb { background: ${y.line}; border-radius: 4px; }
.tour-canvas { touch-action: none; }
@media (prefers-reduced-motion: no-preference) {
  .seg-grow { transition: width .8s cubic-bezier(.2,.8,.2,1); }
  .fade-up { animation: fadeUp .5s ease both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(6px);} to { opacity:1; transform:none; } }
}`,y0=typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,ut=(t,e,n=0)=>new Intl.NumberFormat(e==="fr"?"fr-CA":"en-CA",{style:"currency",currency:"CAD",minimumFractionDigits:n,maximumFractionDigits:n}).format(t),RM=(t,e)=>new Intl.NumberFormat(e==="fr"?"fr-CA":"en-CA").format(t),Sh=(t,e)=>e==="fr"?`${Math.round(t/1e3)} k$`:`$${Math.round(t/1e3)}k`;Mh={montreal:{labelFr:"Bar\xE8me Montr\xE9al (2025 \u2014 index\xE9)",labelEn:"Montr\xE9al scale (2025 \u2014 indexed)",brackets:[[61500,.005],[307800,.01],[552300,.015],[1104700,.02],[2136500,.025],[3113e3,.035],[1/0,.04]]},longueuil:{labelFr:"Bar\xE8me provincial (+ majorations municipales)",labelEn:"Provincial scale (+ municipal add-ons)",brackets:[[61500,.005],[307800,.01],[1/0,.015]]}};mr={electric:{fr:"Plinthes \xE9lectriques",en:"Electric baseboards",perSqft:1.35},gas:{fr:"Gaz naturel (\xC9nergir) + Hydro",en:"Natural gas (\xC9nergir) + Hydro",perSqft:1.1},heatpump:{fr:"Thermopompe",en:"Heat pump",perSqft:.85}};MM=[{id:"28374619",addr:"4517, rue de Br\xE9beuf",area:"Le Plateau-Mont-Royal, Montr\xE9al",muni:"montreal",typeFr:"Condo divise \u2014 2 chambres",typeEn:"Divided condo \u2014 2 bedrooms",price:549e3,evalMun:471200,sqft:1042,year:1912,beds:2,baths:1,parkFr:"Rue (vignette SRRR)",parkEn:"Street (permit)",taxesMun:3124,taxesScol:389,condoFees:285,heating:"electric",insuranceEst:38,inclFr:"Luminaires, stores, lave-vaisselle Bosch (2022)",inclEn:"Light fixtures, blinds, Bosch dishwasher (2022)",accent:["#31456B","#5F7BA6"],rooms:[{icon:ui,fr:"Fa\xE7ade 1912",en:"1912 fa\xE7ade",d:"Brique + corniche",g:["#31456B","#5F7BA6"]},{icon:Yr,fr:"Salon double",en:"Double living room",d:"5,8 \xD7 3,4 m",g:["#C7D5EA","#8FA8CC"]},{icon:Zi,fr:"Cuisine",en:"Kitchen",d:"R\xE9nov\xE9e 2022",g:["#E9E2D2","#C9BB9B"]},{icon:uo,fr:"Chambre principale",en:"Primary bedroom",d:"4,1 \xD7 3,6 m",g:["#D7DEE9","#A9B7CD"]},{icon:su,fr:"Salle de bain",en:"Bathroom",d:"Douche + bain",g:["#DCE9E4","#A9C8BB"]},{icon:Kr,fr:"Balcon arri\xE8re",en:"Back balcony",d:"Sud-ouest",g:["#CFE2D6","#8FB8A0"]}],plan:[{key:"salon",fr:"Salon",en:"Living room",x:0,z:0,w:5,d:4,col:"#C9D8EE",furn:["sofa","coffee","rug","tv","plant","art"]},{key:"cuisine",fr:"Cuisine",en:"Kitchen",x:5.2,z:0,w:3.4,d:4,col:"#EDE6D6",furn:["counter","island","stool"]},{key:"chP",fr:"Chambre principale",en:"Primary bedroom",x:0,z:4.2,w:4,d:3.6,col:"#DCE2EE",furn:["bed","night","plant"]},{key:"ch2",fr:"Chambre 2",en:"Bedroom 2",x:4.2,z:4.2,w:3,d:3.6,col:"#E6E1EE",furn:["bedS","night"]},{key:"sdb",fr:"Salle de bain",en:"Bathroom",x:7.4,z:4.2,w:2.4,d:2.4,col:"#DCEAE4",furn:["tub","vanity","mirror"]},{key:"balcon",fr:"Balcon",en:"Balcony",x:0,z:8,w:5,d:1.6,col:"#CFE2D6",furn:["chair","chair2"],open:!0}],dv:[{s:"D2",qFr:"Ann\xE9e / conversion",qEn:"Year / conversion",aFr:"Immeuble 1912, converti en copropri\xE9t\xE9 divise en 2004.",aEn:"1912 building, converted to divided co-ownership in 2004."},{s:"D5",qFr:"Infiltrations d\u2019eau",qEn:"Water infiltration",aFr:"Infiltration mineure au rangement du sous-sol en 2019, r\xE9par\xE9e (Bisson Expert). Aucune r\xE9currence depuis.",aEn:"Minor infiltration in basement storage (2019), repaired (Bisson Expert). No recurrence since."},{s:"D7",qFr:"Toiture",qEn:"Roof",aFr:"Membrane \xE9lastom\xE8re refaite en 2021 \u2014 garantie 10 ans transf\xE9rable.",aEn:"Elastomeric membrane redone in 2021 \u2014 10-year transferable warranty."},{s:"D11",qFr:"Plomberie / chauffe-eau",qEn:"Plumbing / water heater",aFr:"Entr\xE9e d\u2019eau en cuivre. Chauffe-eau remplac\xE9 en 2023.",aEn:"Copper water entry. Water heater replaced in 2023."},{s:"D14",qFr:"Copropri\xE9t\xE9",qEn:"Co-ownership",aFr:"Fonds de pr\xE9voyance : 148 000 $ (\xE9tude 2024). Aucune cotisation sp\xE9ciale vot\xE9e ni annonc\xE9e.",aEn:"Contingency fund: $148,000 (2024 study). No special assessment voted or announced."}],fund:{balance:148e3,units:12,studyYear:2024,special:!1},hood:{walk:94,transit:82,bike:96,metroFr:"M\xE9tro Mont-Royal \u2014 450 m",metroEn:"Mont-Royal metro \u2014 450 m",bixi:3,demo:{incomeMed:68400,incomeBands:[["<40k",22],["40\u201380k",38],["80\u2013120k",24],[">120k",16]],ageBands:[["0\u201314",12],["15\u201329",27],["30\u201344",33],["45\u201364",20],["65+",8]],fam:31,rent:64,langs:[["Fran\xE7ais",71],["Anglais",13],["Autres",16]]},crime:[100,96,91,94,87,82],crimeDelta:-12,incidents:[["Introduction par effraction","Break-in",-18],["M\xE9fait","Mischief",-7],["Vol de v\xE9hicule","Vehicle theft",4]],schoolsFr:"\xC9cole Paul-Bruch\xE9si (600 m) \xB7 CPE : attente \u2248 14 mois",schoolsEn:"Paul-Bruch\xE9si school (600 m) \xB7 CPE wait \u2248 14 months"},forecast:{organic:.03,drivers:[{kind:"transit",fr:"Prolongement REM de l\u2019Est \u2014 station projet\xE9e",en:"REM de l\u2019Est extension \u2014 planned station",dist:"1.2 km",year:2030,lo:4,hi:9,srcFr:"Actualit\xE9 \u2014 annonce gouvernementale",srcEn:"News \u2014 government announcement"},{kind:"zoning",fr:"Requalification de l\u2019ancien site industriel De Lorimier",en:"De Lorimier industrial site rezoning",dist:"800 m",year:2028,lo:2,hi:5,srcFr:"Ville \u2014 avis de changement de zonage",srcEn:"City \u2014 rezoning notice"},{kind:"commercial",fr:"Nouvelle art\xE8re commerciale \u2014 projet BIA Mont-Royal",en:"New commercial corridor \u2014 Mont-Royal BIA project",dist:"300 m",year:2027,lo:1,hi:3,srcFr:"SDC Mont-Royal",srcEn:"Mont-Royal merchants\u2019 assoc."}]},risks:[{kind:"flood",level:"none",fr:"Hors zone inondable (0-20 ans et 20-100 ans).",en:"Outside flood zones (0\u201320 yr and 20\u2013100 yr)."},{kind:"radon",level:"low",fr:"Potentiel radon faible (secteur cartographi\xE9 SPLQ).",en:"Low radon potential (mapped sector)."},{kind:"pyrite",level:"low",fr:"Risque pyrite faible \u2014 dalle d\u2019origine, aucun soul\xE8vement d\xE9clar\xE9.",en:"Low pyrite risk \u2014 original slab, no heaving declared."},{kind:"oil",level:"none",fr:"Aucun r\xE9servoir d\u2019huile actuel ou pass\xE9 d\xE9clar\xE9.",en:"No current or former oil tank declared."},{kind:"heat",level:"moderate",fr:"\xCElot de chaleur mod\xE9r\xE9 \u2014 faible canop\xE9e sur la rue.",en:"Moderate heat island \u2014 low street tree canopy."},{kind:"noise",level:"low",fr:"Bruit faible \u2014 rue r\xE9sidentielle, loin des grands axes.",en:"Low noise \u2014 residential street, away from arteries."}],amenities:[{type:"resto",items:[["L\u2019Express",210],["Au Pied de Cochon",350],["Pizzeria Napoletana",480]]},{type:"cafe",items:[["Caf\xE9 Olimpico",260],["Larue & Fils",190]]},{type:"cinema",items:[["Cin\xE9ma du Parc",900],["Cin\xE9ma Beaubien",1400]]},{type:"grocery",items:[["Provigo",300],["March\xE9 Jean-Talon",1600]]},{type:"park",items:[["Parc La Fontaine",550],["Parc Baldwin",700]]},{type:"gym",items:[["Nautilus Plus",620]]},{type:"pharma",items:[["Jean Coutu",280]]}],commute:{dest:"Centre-ville (Ville-Marie)",hours:[6,7,8,9,12,15,17,18,20],weekday:{car:[14,22,31,26,18,19,33,30,15],transit:[24,26,28,27,24,24,29,28,25],bike:[19,19,20,19,19,19,20,20,19]},weekend:{car:[13,14,16,18,20,21,19,17,14],transit:[26,26,27,27,28,28,27,27,28],bike:[19,19,19,19,20,20,19,19,19]}},soldComps:[["4490, rue de Br\xE9beuf",529e3,"2025-03",1005],["1233, rue Gilford",562e3,"2025-01",1080],["4602, rue Fabre",505e3,"2024-11",970]]},{id:"19052833",addr:"1183, rue Saint-Charles O.",area:"Vieux-Longueuil, Longueuil",muni:"longueuil",typeFr:"Cottage \u2014 3 chambres",typeEn:"Cottage \u2014 3 bedrooms",price:615e3,evalMun:522300,sqft:1610,year:1958,beds:3,baths:1.5,parkFr:"All\xE9e double + garage",parkEn:"Double driveway + garage",taxesMun:4188,taxesScol:512,condoFees:0,heating:"gas",insuranceEst:92,inclFr:"Cabanon, piscine hors terre (2020), thermopompe murale",inclEn:"Shed, above-ground pool (2020), wall heat pump",accent:["#7A5A3F","#B08A63"],rooms:[{icon:ui,fr:"Fa\xE7ade 1958",en:"1958 fa\xE7ade",d:"Terrain 5 200 pi\xB2",g:["#7A5A3F","#B08A63"]},{icon:Yr,fr:"Salon",en:"Living room",d:"Foyer au bois",g:["#E4D9C6","#C2AE8C"]},{icon:Zi,fr:"Cuisine",en:"Kitchen",d:"Armoires 2016",g:["#DDE5E9","#AABDC7"]},{icon:uo,fr:"3 chambres",en:"3 bedrooms",d:"\xC9tage",g:["#D8DEE9","#A9B4CC"]},{icon:Kr,fr:"Cour arri\xE8re",en:"Backyard",d:"Piscine + cabanon",g:["#CFE2D0","#8FB894"]},{icon:du,fr:"Garage",en:"Garage",d:"Attach\xE9",g:["#D5D8DE","#9BA3B0"]}],plan:[{key:"salon",fr:"Salon",en:"Living room",x:0,z:0,w:5,d:4.2,col:"#EADFCB",furn:["sofa","coffee","rug","tv","plant","art"]},{key:"cuisine",fr:"Cuisine",en:"Kitchen",x:5.2,z:0,w:4,d:4.2,col:"#DDE5E9",furn:["counter","island","stool"]},{key:"salle",fr:"Salle \xE0 manger",en:"Dining",x:5.2,z:4.4,w:4,d:3.2,col:"#E8E2D6",furn:["table","art"]},{key:"chP",fr:"Chambre principale",en:"Primary bedroom",x:0,z:4.4,w:4.2,d:3.6,col:"#DCE2EE",furn:["bed","night","plant"]},{key:"ch2",fr:"Chambre 2",en:"Bedroom 2",x:0,z:8.2,w:3,d:3,col:"#E6E1EE",furn:["bedS","night"]},{key:"ch3",fr:"Chambre 3",en:"Bedroom 3",x:3.2,z:8.2,w:3,d:3,col:"#E1E8EE",furn:["bedS"]},{key:"garage",fr:"Garage",en:"Garage",x:9.4,z:0,w:3.2,d:5.8,col:"#DADEE4",furn:["car"]},{key:"cour",fr:"Cour",en:"Yard",x:6.4,z:8,w:6,d:3.4,col:"#CFE2D0",furn:["pool","shed"],open:!0}],dv:[{s:"D5",qFr:"Infiltrations d\u2019eau",qEn:"Water infiltration",aFr:"Aucune infiltration d\xE9clar\xE9e par le vendeur.",aEn:"No infiltration declared by the seller."},{s:"D7",qFr:"Toiture",qEn:"Roof",aFr:"Bardeaux d\u2019asphalte remplac\xE9s en 2017.",aEn:"Asphalt shingles replaced in 2017."},{s:"D10",qFr:"R\xE9servoir d\u2019huile",qEn:"Oil tank",aFr:"Ancien r\xE9servoir retir\xE9 en 2009 \u2014 attestation de retrait disponible.",aEn:"Former tank removed in 2009 \u2014 removal attestation on file."},{s:"D12",qFr:"Piscine",qEn:"Pool",aFr:"Hors terre, install\xE9e en 2020, conforme au r\xE8glement municipal.",aEn:"Above-ground, installed 2020, compliant with municipal bylaw."},{s:"D16",qFr:"Certificat de localisation",qEn:"Certificate of location",aFr:"Dat\xE9 de 2022 \u2014 conforme, aucune servitude particuli\xE8re.",aEn:"Dated 2022 \u2014 compliant, no unusual servitude."}],fund:null,hood:{walk:71,transit:58,bike:74,metroFr:"REM Panama \u2014 2,1 km",metroEn:"Panama REM station \u2014 2.1 km",bixi:0,demo:{incomeMed:81200,incomeBands:[["<40k",14],["40\u201380k",34],["80\u2013120k",31],[">120k",21]],ageBands:[["0\u201314",18],["15\u201329",18],["30\u201344",24],["45\u201364",26],["65+",14]],fam:52,rent:31,langs:[["Fran\xE7ais",88],["Anglais",6],["Autres",6]]},crime:[100,97,95,90,88,84],crimeDelta:-16,incidents:[["Introduction par effraction","Break-in",-22],["M\xE9fait","Mischief",-11],["Vol de v\xE9hicule","Vehicle theft",-3]],schoolsFr:"\xC9cole Saint-Jude (400 m) \xB7 CPE : attente \u2248 9 mois",schoolsEn:"Saint-Jude school (400 m) \xB7 CPE wait \u2248 9 months"},forecast:{organic:.026,drivers:[{kind:"transit",fr:"REM \u2014 station Panama en service, prolongement projet\xE9",en:"REM \u2014 Panama station in service, extension planned",dist:"2.1 km",year:2027,lo:3,hi:7,srcFr:"ARTM / actualit\xE9",srcEn:"ARTM / news"},{kind:"commercial",fr:"Red\xE9veloppement du secteur Roland-Therrien",en:"Roland-Therrien sector redevelopment",dist:"1.4 km",year:2029,lo:2,hi:4,srcFr:"Ville de Longueuil \u2014 PPU",srcEn:"City of Longueuil \u2014 special plan"},{kind:"risk",fr:"Hausse des primes d\u2019assurance (secteur riverain \xE9largi)",en:"Insurance premium rise (expanded riverine zone)",dist:"\u2014",year:2026,lo:-2,hi:0,srcFr:"Actualit\xE9 \u2014 r\xE9vision cartographie",srcEn:"News \u2014 mapping revision"}]},risks:[{kind:"flood",level:"moderate",fr:"Proximit\xE9 du fleuve \u2014 v\xE9rifier la cote de crue 20-100 ans \xE0 l\u2019adresse exacte.",en:"River proximity \u2014 verify 20\u2013100 yr flood line at the exact address."},{kind:"radon",level:"moderate",fr:"Potentiel radon mod\xE9r\xE9 \u2014 test recommand\xE9 (sous-sol habit\xE9).",en:"Moderate radon potential \u2014 testing recommended (finished basement)."},{kind:"pyrite",level:"low",fr:"Risque pyrite faible pour le secteur.",en:"Low pyrite risk for the sector."},{kind:"oil",level:"low",fr:"Ancien r\xE9servoir retir\xE9 en 2009 (attestation) \u2014 sol non test\xE9.",en:"Former tank removed 2009 (attestation) \u2014 soil not tested."},{kind:"heat",level:"low",fr:"Faible \xEElot de chaleur \u2014 bonne canop\xE9e r\xE9sidentielle.",en:"Low heat island \u2014 good residential canopy."},{kind:"noise",level:"low",fr:"Bruit faible \u2014 quartier r\xE9sidentiel \xE9tabli.",en:"Low noise \u2014 established residential area."}],amenities:[{type:"resto",items:[["Lou Nissart",400],["Le Fin Gourmet",650]]},{type:"cafe",items:[["Caf\xE9 Bloom",350],["Presse Caf\xE9",500]]},{type:"cinema",items:[["Cineplex Longueuil",2600]]},{type:"grocery",items:[["IGA",450],["Metro",900]]},{type:"park",items:[["Parc Saint-Mark",300],["Parc de la Cit\xE9",2100]]},{type:"gym",items:[["\xC9conofitness",800]]},{type:"pharma",items:[["Pharmaprix",550]]}],commute:{dest:"Centre-ville de Montr\xE9al",hours:[6,7,8,9,12,15,17,18,20],weekday:{car:[22,31,44,38,26,27,46,41,23],transit:[38,40,43,42,39,39,45,43,40],bike:[46,46,47,46,46,46,47,47,46]},weekend:{car:[20,21,24,27,30,31,28,25,21],transit:[42,42,43,43,44,44,43,43,44],bike:[46,46,46,46,47,47,46,46,46]}},soldComps:[["1211, rue Sainte-H\xE9l\xE8ne",592e3,"2025-02",1540],["905, rue Grant",638e3,"2024-12",1720],["1450, rue Bourget",575e3,"2024-10",1490]]}],ji=typeof window<"u"&&window.__VITRINE_MERGE__?window.__VITRINE_MERGE__(MM):MM,jr=typeof window<"u"&&window.__VITRINE_FEATURES__||null,Jr=t=>jr&&jr.features?!!jr.features[t]:!0,wh=(t,e)=>jr&&jr.settings&&jr.settings[t]!=null?jr.settings[t]:e,on={name:"Julie Fortin",title_fr:"Courti\xE8re immobili\xE8re r\xE9sidentielle",title_en:"Residential real estate broker",agency:"RE/MAX du Cartier"},Co={id:"p_live",name:"Marie-Claude Tremblay"};xh={},Dt={async get(t,e){if(t in xh)return xh[t];try{let n=await window.storage.get(t);return n?JSON.parse(n.value):e}catch{return e}},async set(t,e){xh[t]=e;try{await window.storage.set(t,JSON.stringify(e))}catch{}},async del(t){delete xh[t];try{await window.storage.delete(t)}catch{}}},Ft={events:"vitrine2_events",reactions:"vitrine2_reactions",chats:"vitrine2_chats",dms:"vitrine2_dms",prefs:"vitrine2_prefs",notes:"vitrine2_notes",checklist:"vitrine2_checklist"};Hu=({children:t})=>(0,c.jsx)("div",{style:{fontFamily:ce.mono,fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:y.sub},children:t}),Wt=({icon:t,title:e,note:n})=>(0,c.jsxs)("div",{className:"flex items-baseline gap-2 mb-3",children:[(0,c.jsx)(t,{size:17,style:{color:y.metro,transform:"translateY(2px)"}}),(0,c.jsx)("h2",{style:{fontFamily:ce.disp,fontWeight:700,fontSize:20,color:y.ink,margin:0},children:e}),n&&(0,c.jsx)("span",{style:{fontFamily:ce.mono,fontSize:10.5,color:y.sub},children:n})]}),Cn=({children:t,tone:e="neutral"})=>{let n={neutral:{bg:y.snow,fg:y.sub,bd:y.line},hot:{bg:"#FBEAD9",fg:"#8A4B12",bd:"#F0CFA6"},blue:{bg:y.metroSoft,fg:y.metro,bd:"#C9D9F2"},green:{bg:y.spruceSoft,fg:y.spruce,bd:"#C4E0D2"},amber:{bg:y.ochreSoft,fg:"#8A5A12",bd:"#EBD3A0"},red:{bg:y.dangerSoft,fg:y.danger,bd:"#E7C3B4"}}[e];return(0,c.jsx)("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full",style:{background:n.bg,color:n.fg,border:`1px solid ${n.bd}`,fontSize:11.5,fontWeight:600},children:t})},oR=({data:t,color:e,w:n=120,h:i=34})=>{let a=Math.min(...t),r=Math.max(...t),s=t.map((o,l)=>`${l/(t.length-1)*(n-4)+2},${i-3-(o-a)/(r-a||1)*(i-8)}`).join(" ");return(0,c.jsx)("svg",{width:n,height:i,"aria-hidden":"true",children:(0,c.jsx)("polyline",{points:s,fill:"none",stroke:e,strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})};v0=({segments:t})=>(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"flex w-full rounded-full overflow-hidden",style:{height:12,border:`1px solid ${y.line}`},children:t.map((e,n)=>(0,c.jsx)("div",{style:{width:`${e.pct}%`,background:e.color},title:`${e.label} ${e.pct}%`},n))}),(0,c.jsx)("div",{className:"flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5",children:t.map((e,n)=>(0,c.jsxs)("span",{className:"inline-flex items-center gap-1",style:{fontSize:11,color:y.sub},children:[(0,c.jsx)("span",{style:{width:8,height:8,borderRadius:2,background:e.color}})," ",e.label," ",(0,c.jsxs)("b",{style:{fontFamily:ce.mono,color:y.ink},children:[e.pct,"%"]})]},n))})]}),bo=({label:t,val:e,set:n,min:i,max:a,step:r,suffix:s,field:o,mark:l})=>(0,c.jsxs)("label",{className:"block",children:[(0,c.jsxs)("div",{className:"flex justify-between",style:{fontSize:12.5,color:y.sub,marginBottom:2},children:[(0,c.jsx)("span",{children:t}),(0,c.jsxs)("span",{style:{fontFamily:ce.mono,color:y.ink,fontWeight:600},children:[e,s]})]}),(0,c.jsx)("input",{type:"range",min:i,max:a,step:r,value:e,className:"w-full",onChange:u=>{n(Number(u.target.value)),l&&l(o)}})]}),Ch=({onClose:t,children:e,label:n})=>(0,c.jsx)("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center",style:{background:"rgba(17,27,46,.55)"},role:"dialog","aria-label":n,children:(0,c.jsxs)("div",{className:"w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-5 fade-up",style:{background:y.paper,maxHeight:"88vh",overflowY:"auto"},children:[(0,c.jsx)("div",{className:"flex justify-end",children:(0,c.jsx)("button",{onClick:t,"aria-label":"Fermer",className:"p-1 rounded-md",style:{color:y.sub},children:(0,c.jsx)(pr,{size:18})})}),e]})}),_h=({text:t})=>(0,c.jsxs)("div",{className:"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",style:{background:"rgba(17,27,46,.72)",color:"#fff",fontSize:10.5,fontWeight:600,backdropFilter:"blur(4px)"},children:[(0,c.jsx)(Ei,{size:11,style:{color:y.ochre}})," ",t]}),_0={};xR={transit:Zr,zoning:va,commercial:Mo,risk:fr};vR={flood:{icon:hr,fr:"Inondation",en:"Flood"},radon:{icon:Vu,fr:"Radon",en:"Radon"},pyrite:{icon:Iu,fr:"Pyrite",en:"Pyrite"},oil:{icon:gu,fr:"R\xE9servoir d\u2019huile",en:"Oil tank"},heat:{icon:Du,fr:"\xCElot de chaleur",en:"Heat island"},noise:{icon:zu,fr:"Bruit",en:"Noise"}},_R={none:{tone:"green",fr:"Aucun",en:"None"},low:{tone:"green",fr:"Faible",en:"Low"},moderate:{tone:"amber",fr:"Mod\xE9r\xE9",en:"Moderate"},elevated:{tone:"red",fr:"\xC9lev\xE9",en:"Elevated"}};MR={resto:{icon:Zi,fr:"Restaurants",en:"Restaurants"},cafe:{icon:pu,fr:"Caf\xE9s",en:"Caf\xE9s"},cinema:{icon:yu,fr:"Cin\xE9mas",en:"Cinemas"},grocery:{icon:Mo,fr:"\xC9picerie",en:"Groceries"},park:{icon:Kr,fr:"Parcs",en:"Parks"},gym:{icon:xu,fr:"Gyms",en:"Gyms"},pharma:{icon:mu,fr:"Pharmacie",en:"Pharmacy"}},wR=t=>Math.max(1,Math.round(t/80));vh=[["preapprobation","Pr\xE9approbation hypoth\xE9caire obtenue","Mortgage pre-approval in hand"],["mise_de_fonds","Preuve de mise de fonds pr\xEAte","Proof of down payment ready"],["identite","Pi\xE8ces d'identit\xE9 valides","Valid ID documents"],["inspecteur","Inspecteur en b\xE2timent choisi","Building inspector chosen"],["notaire","Notaire choisi","Notary chosen"],["assurance","Soumission d'assurance habitation demand\xE9e","Home insurance quote requested"],["certificat","Certificat de localisation \xE0 r\xE9viser avec la courti\xE8re","Certificate of location to review with the broker"]];UR={...on,initials:"JF",phone:"514 555-0142",email:"julie.fortin@remaxducartier.ca",years:12,deals:180,rating:4.9,reviewCount:87,areas_fr:"Rosemont \xB7 Ahuntsic \xB7 Villeray",areas_en:"Rosemont \xB7 Ahuntsic \xB7 Villeray",story:{fr:"Julie accompagne acheteurs et vendeurs sur l\u2019\xEEle de Montr\xE9al depuis plus de dix ans. Ancienne conseill\xE8re en am\xE9nagement, elle lit un quartier autant qu\u2019une fiche : \xE9coles, transport, projets \xE0 venir. Sa promesse est simple \u2014 des r\xE9ponses franches, des chiffres v\xE9rifiables, et jamais de pression. Chaque Vitrine que vous recevez est pr\xE9par\xE9e \xE0 la main, \xE0 partir de ce qu\u2019elle sait vraiment de la propri\xE9t\xE9 et du secteur.",en:"Julie has guided buyers and sellers across the island of Montr\xE9al for over a decade. A former urban-planning advisor, she reads a neighbourhood as closely as a listing sheet: schools, transit, what\u2019s being built next. Her promise is simple \u2014 straight answers, numbers you can check, and never any pressure. Every Vitrine you receive is prepared by hand, from what she genuinely knows about the property and the area."},reviews:[{name:"Marc & Sophie L.",area_fr:"Acheteurs \u2014 Rosemont",area_en:"Buyers \u2014 Rosemont",rating:5,fr:"Julie a rep\xE9r\xE9 un probl\xE8me de drainage que deux autres courtiers avaient manqu\xE9. Honn\xEAte jusqu\u2019au bout.",en:"Julie caught a drainage issue two other agents had missed. Honest to the end."},{name:"Am\xE9lie D.",area_fr:"Vendeuse \u2014 Villeray",area_en:"Seller \u2014 Villeray",rating:5,fr:"Vendu en neuf jours, au-dessus du prix demand\xE9, sans jamais me sentir bouscul\xE9e. Ses donn\xE9es de quartier ont fait la diff\xE9rence.",en:"Sold in nine days, over asking, and never once felt rushed. Her neighbourhood data made the difference."},{name:"Karim B.",area_fr:"Acheteur \u2014 Ahuntsic",area_en:"Buyer \u2014 Ahuntsic",rating:4,fr:"Patiente avec un premier acheteur nerveux. Elle a expliqu\xE9 chaque chiffre, taxe de bienvenue incluse.",en:"Patient with a nervous first-time buyer. She walked me through every number, welcome tax included."}]};HR=VR,gr={classique:{fr:"Classique",en:"Classic",wall:"#EEF1F6",dot:"#8FA0BC"},tranquille:{fr:"Tranquille",en:"Tranquil",wall:"#F1EFE6",dot:"#B9C6B4",fabric:"#B9C6B4",wood:"#B8A98F",metal:"#8E9AA0",accent:"#EAE3D2",fixture:"#EDF2EE"},moderne:{fr:"Moderne",en:"Modern",wall:"#E9EBEF",dot:"#3C4048",fabric:"#5C6470",wood:"#3C4048",metal:"#20242B",accent:"#D9DDE3",fixture:"#F2F4F6"},scandinave:{fr:"Scandinave",en:"Scandi",wall:"#F7F6F2",dot:"#E4D5BC",fabric:"#D8E0E8",wood:"#E4D5BC",metal:"#B9C2CC",accent:"#FFFFFF",fixture:"#F6F8F9"}},Ki={sofa:{fr:"Sofa 3 places",en:"3-seat sofa",price:"899 \u2013 2 399 $",stores:["Structube","EQ3","Article"]},coffee:{fr:"Table basse",en:"Coffee table",price:"199 \u2013 699 $",stores:["Structube","IKEA"]},rug:{fr:"Tapis",en:"Area rug",price:"149 \u2013 899 $",stores:["EQ3","HomeSense"]},counter:{fr:"Cuisine sur mesure",en:"Custom kitchen",price:"Sur devis",stores:["\xC9b\xE9niste local","Cuisines Action"]},island:{fr:"\xCElot de cuisine",en:"Kitchen island",price:"Sur devis",stores:["\xC9b\xE9niste local","IKEA"]},bed:{fr:"Lit grand format + t\xEAte de lit",en:"Queen bed + headboard",price:"649 \u2013 1 899 $",stores:["Structube","Mobilia","IKEA"]},bedS:{fr:"Lit simple / double",en:"Twin / double bed",price:"449 \u2013 1 199 $",stores:["Structube","IKEA"]},night:{fr:"Table de chevet",en:"Nightstand",price:"129 \u2013 399 $",stores:["IKEA","Structube"]},tub:{fr:"Bain & robinetterie",en:"Tub & fixtures",price:"Sur devis",stores:["Bain D\xE9p\xF4t","Plombier partenaire"]},vanity:{fr:"Meuble-lavabo",en:"Vanity",price:"399 \u2013 1 299 $",stores:["Rona","Bain D\xE9p\xF4t"]},table:{fr:"Table \xE0 manger",en:"Dining table",price:"499 \u2013 1 599 $",stores:["Article","Maison Corbeil"]},chair:{fr:"Chaises d\u2019ext\xE9rieur",en:"Outdoor chairs",price:"89 \u2013 349 $ / ch.",stores:["Canadian Tire","IKEA"]},chair2:{fr:"Chaises d\u2019ext\xE9rieur",en:"Outdoor chairs",price:"89 \u2013 349 $ / ch.",stores:["Canadian Tire","IKEA"]},pool:{fr:"Piscine hors terre",en:"Above-ground pool",price:"3 500 \u2013 9 000 $",stores:["Tr\xE9vi","Club Piscine"]},shed:{fr:"Cabanon",en:"Shed",price:"1 200 \u2013 4 500 $",stores:["Rona","Home Depot"]},tv:{fr:"T\xE9l\xE9viseur + meuble",en:"TV + media unit",price:"649 \u2013 1 999 $",stores:["Best Buy","Structube"]},plant:{fr:"Plante d\u2019int\xE9rieur + pot",en:"Indoor plant + pot",price:"39 \u2013 149 $",stores:["Folia Design","IKEA"]},art:{fr:"\u0152uvre encadr\xE9e",en:"Framed art",price:"89 \u2013 450 $",stores:["Artiste local","Simons Maison"]},stool:{fr:"Tabourets d\u2019\xEElot (\xD72)",en:"Island stools (\xD72)",price:"158 \u2013 498 $",stores:["Structube","EQ3"]},mirror:{fr:"Miroir de salle de bain",en:"Bathroom mirror",price:"99 \u2013 349 $",stores:["Rona","Bain D\xE9p\xF4t"]}},GR=`Salon 4,9 x 3,7
Cuisine 3,4 x 3,0
Chambre principale 3,6 x 3,3
Chambre 2,9 x 2,6
Salle de bain 2,4 x 1,5
V\xE9randa 3,0 x 2,4`;qR=[[/salon|s[ée]jour|living/i,{col:"#C9D8EE",furn:["sofa","coffee","rug","tv","plant","art"]}],[/cuisine|kitchen/i,{col:"#EDE6D6",furn:["counter","island","stool"]}],[/manger|dinette|dining/i,{col:"#E8E2D6",furn:["table","art"]}],[/principale|ma[îi]tres|primary|master/i,{col:"#DCE2EE",furn:["bed","night","plant"]}],[/chambre|bedroom|\bch\b/i,{col:"#E6E1EE",furn:["bedS","night"]}],[/bain|sdb|salle d.eau|bath/i,{col:"#DCEAE4",furn:["tub","vanity","mirror"]}],[/garage/i,{col:"#DADEE4",furn:["car"]}],[/cour|terrain|balcon|patio|v[ée]randa|yard|deck/i,{col:"#CFE2D6",furn:["chair","chair2"],open:!0}]];YR=[{id:"camille",name:"Camille B\xE9rub\xE9",cityFr:"Mile End, Montr\xE9al",cityEn:"Mile End, Montreal",style:"tranquille",tagsFr:["Ambiance tranquille","Mat\xE9riaux naturels","Petits espaces"],tagsEn:["Tranquil mood","Natural materials","Small spaces"],rate:"95 $/h"},{id:"marco",name:"Marc-Olivier Tessier",cityFr:"Griffintown, Montr\xE9al",cityEn:"Griffintown, Montreal",style:"moderne",tagsFr:["Moderne \xE9pur\xE9","R\xE9nos condo","\xC9clairage"],tagsEn:["Clean modern","Condo renos","Lighting"],rate:"120 $/h"},{id:"noor",name:"Noor Haddad",cityFr:"Vieux-Longueuil",cityEn:"Old Longueuil",style:"scandinave",tagsFr:["Scandinave chaleureux","Familles","Budget malin"],tagsEn:["Warm Scandi","Families","Smart budgets"],rate:"85 $/h"}];LM=["Le Plateau-Mont-Royal","Vieux-Longueuil","Mont-Tremblant","Sainte-Agathe-des-Monts","Sainte-Ad\xE8le","Sainte-Marguerite\u2013Lac-Masson","Saint-Sauveur","Val-David"],IM=[["detache","D\xE9tach\xE9","Detached"],["condo","Condo","Condo"],["plex","Plex","Plex"],["mobile","Maison mobile","Mobile home"]],AM={pmin:25e4,pmax:65e4,beds:2,baths:1,lot:0,types:["detache","condo"],must:{piscine:!1,garage:!1,foyer:!1},areas:["Le Plateau-Mont-Royal","Vieux-Longueuil"]};jR={28374619:{badge:"new",dateSent:"2026-07-05",rooms:7,lot:null,fire:!1,xy:[63,70]},19052833:{badge:null,dateSent:"2026-07-03",rooms:9,lot:"5 200 pi\xB2",fire:!0,xy:[72,78]}},JR=[{id:"14106527",addr:"3, rue des Geais-Bleus",area:"Mont-Tremblant (Saint-Jovite)",typeFr:"Maison mobile \u2014 1990",typeEn:"Mobile home \u2014 1990",price:124900,beds:2,bathsStr:"1+0",heatFr:"\xC9lectricit\xE9",heatEn:"Electricity",rooms:6,lot:null,garage:!1,fire:!1,pool:!0,badge:"new",dateSent:"2026-07-06",g:["#5E7F5A","#8FAE7E"],xy:[24,18]},{id:"25995203",addr:"122-126, ch. Gu\xE9nette",area:"Sainte-Marguerite-du-Lac-Masson",typeFr:"\xC0 \xE9tages \u2014 1945",typeEn:"Two or more storey \u2014 1945",price:399e3,beds:4,bathsStr:"2+1",heatFr:"\xC9lectricit\xE9",heatEn:"Electricity",rooms:13,lot:"27 630 pi\xB2 / 2 567 m\xB2",garage:!1,fire:!0,pool:!0,badge:"price",dateSent:"2026-07-04",g:["#3E5E52","#7FA08F"],xy:[45,30]}],EM={25995203:"https://d8j0ntlcm91z4.cloudfront.net/user_3GGcnlb30w4rwInWPmkZocDwJ0x/hf_20260709_132918_005475da-f23e-4a96-b425-8ef81c306833.mp4"};Fn={new:{fr:"Nouvelle inscription",en:"New Listing",bg:"#2F7D5C",fg:"#fff"},price:{fr:"Nouveau prix",en:"New Price",bg:"#E8A33D",fg:"#3A2A08"}}});var JU=Ri(Ca()),BM=Ri(c_()),zM=Ri(yl()),ci=window.fetch.bind(window),di="",Qt=(()=>{let t=window.location.pathname.match(/\/portail\/([\w-]+)/),e=t&&t[1]||new URLSearchParams(window.location.search).get("t")||"";return e==="demo"?"":e})(),UM=Date.now(),tP="vitrine2_events",FM=new Set,M0={visit:"listing.viewed",tour_view:"tour3d.viewed",tour_room:"tour3d.viewed",reaction_interested:"listing.favorited",booking_request:"visit.requested",broker_message:"message.sent",chat_escalation:"message.sent",chat_message:"message.sent",calc_use:"calculator.used",calc_adjust:"calculator.used",commute_calc:"calculator.used",section_view:"section.viewed",forecast_view:"section.viewed",risk_view:"section.viewed",amenity_view:"section.viewed",criteria_update:"criteria.updated",note_saved:"note.added",centris_click:"centris.clicked",mortgage_click:"mortgage.interest",checklist_update:"criteria.updated"},Gu={},NM=new Set;function nP(t){return{type:M0[t.type],event_id:t.id,listing_id:t.lid||"",vitrine_type:t.type,...Gu[t.lid]?{address:Gu[t.lid]}:{},...t.meta||{}}}async function iP(t){if(!Qt||!Array.isArray(t))return;let e=t.filter(n=>n&&n.ts>UM&&!FM.has(n.id)&&M0[n.type]).filter(n=>{if(M0[n.type]!=="section.viewed")return!0;let i=`${n.lid}-${n.meta&&n.meta.s||n.type}`;return NM.has(i)?!1:(NM.add(i),!0)});if(e.length){e.forEach(n=>FM.add(n.id)),e.filter(n=>n.type==="visit").forEach(n=>OM.switchTo(n.lid));try{await ci(`${di}/api/webhooks/vitrine`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_token:Qt,events:e.map(nP)})})}catch(n){console.warn("radar-bridge: webhook",n)}}}var OM=(()=>{let t=null,e=0,n=0,i=0,a=()=>Date.now(),r=()=>document.visibilityState==="visible"&&t,s=()=>{e&&(n+=a()-e,e=0)},o=()=>{r()&&!e&&(e=a())};function l(u){s();let d=Math.round(n/1e3);if(t&&d>=30){let p=JSON.stringify({client_token:Qt,events:[{type:"listing.dwell",event_id:`dwell-${t}-${UM}`,listing_id:t,seconds:d,scroll_depth:Math.round(i*100)/100,...Gu[t]?{address:Gu[t]}:{}}]});u&&navigator.sendBeacon?navigator.sendBeacon(`${di}/api/webhooks/vitrine`,new Blob([p],{type:"application/json"})):ci(`${di}/api/webhooks/vitrine`,{method:"POST",headers:{"Content-Type":"application/json"},body:p}).catch(()=>{})}n=0,i=0}return{switchTo(u){!Qt||u===t||(l(!1),t=u,e=a(),o())},init(){Qt&&(document.addEventListener("visibilitychange",()=>document.visibilityState==="visible"?o():s()),window.addEventListener("scroll",()=>{let u=document.documentElement,d=u.scrollHeight-u.clientHeight;d>0&&(i=Math.max(i,(u.scrollTop||window.scrollY)/d))},{passive:!0}),window.addEventListener("pagehide",()=>l(!0)))}}})();Qt&&(window.storage={async get(t){let e=await ci(`${di}/api/vitrine/storage/${Qt}/${encodeURIComponent(t)}`);if(!e.ok)throw new Error("kv miss");return e.json()},async set(t,e){if(t===tP)try{iP(JSON.parse(e))}catch{}let n=await ci(`${di}/api/vitrine/storage/${Qt}/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:e})});if(!n.ok)throw new Error("kv set failed");return n.json()},async delete(t){let e=await ci(`${di}/api/vitrine/storage/${Qt}/${encodeURIComponent(t)}`,{method:"DELETE"});if(!e.ok)throw new Error("kv del failed");return e.json()}});window.fetch=(t,e={})=>{let n=typeof t=="string"?t:t.url;if(n&&n.startsWith("https://api.anthropic.com/v1/messages")){let i={};try{i=JSON.parse(e.body||"{}")}catch{}return ci(`${di}/api/vitrine/ai`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:Qt,payload:i})})}return ci(t,e)};function aP(t,e){return n=>t.length?t.map((i,a)=>{let r=n[a%n.length],s=i.price&&r.price?i.price/r.price:1;return{...r,photos:e&&e[i.centris_no]||[],id:i.centris_no,addr:i.address||`Inscription Centris ${i.centris_no}`,area:i.area||r.area,price:i.price||r.price,evalMun:i.price?Math.round(i.price*.86):r.evalMun,beds:i.beds||r.beds,baths:i.baths||r.baths,typeFr:i.prop_type||r.typeFr,typeEn:i.prop_type||r.typeEn,taxesMun:Math.round((r.taxesMun||3e3)*s),centrisUrl:i.url||"",isLive:!0}}):n}(async()=>{if(Qt){let e=null;try{let r=await ci(`${di}/api/vitrine/features/${Qt}`);r.ok&&(e=await r.json(),window.__VITRINE_FEATURES__=e)}catch(r){console.warn("radar-bridge: features",r)}let n=0;try{let r=await ci(`${di}/api/vitrine/listings/${Qt}`);if(r.ok){let s=await r.json();Array.isArray(s)&&(n=s.length,s.forEach(o=>{o.address&&(Gu[o.centris_no]=o.address)})),window.__VITRINE_MERGE__=aP(Array.isArray(s)?s:[],e&&e.photos)}}catch(r){console.warn("radar-bridge: listings",r)}if(window.__VITRINE_BOOK__=e&&e.features&&e.features.visit_scheduler_live?(r,s,o)=>ci(`${di}/api/vitrine/book/${Qt}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slot:r,listing_id:s||"",address:o||""})}).catch(()=>{}):null,e&&e.features&&e.features.portal_pwa){let r=document.createElement("link");r.rel="manifest",r.href=`/portail-manifest.webmanifest?t=${encodeURIComponent(Qt)}`,document.head.appendChild(r),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js"),"Notification"in window&&Notification.permission==="default"&&setTimeout(()=>Notification.requestPermission(),4e3),setInterval(async()=>{try{let s=await ci(`${di}/api/vitrine/listings/${Qt}`);if(!s.ok)return;let o=await s.json();Array.isArray(o)&&o.length>n&&("Notification"in window&&Notification.permission==="granted"&&new Notification("Vitrine",{body:`${o.length-n} nouvelle(s) inscription(s) dans votre portail`}),n=o.length)}catch{}},300*1e3)}OM.init();let i=new URLSearchParams(window.location.search).get("listing");i&&(window.__VITRINE_OPEN__=i);let a=new Date().toISOString().slice(0,10);ci(`${di}/api/webhooks/vitrine`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_token:Qt,events:[{type:"portal.session_started",event_id:`sess-${Qt}-${a}`}]})}).catch(()=>{})}let{default:t}=await Promise.resolve().then(()=>(DM(),kM));(0,BM.createRoot)(document.getElementById("root")).render((0,zM.jsx)(t,{}))})();})();
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
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/award.mjs:
lucide-react/dist/esm/icons/bath.mjs:
lucide-react/dist/esm/icons/bed-double.mjs:
lucide-react/dist/esm/icons/bell.mjs:
lucide-react/dist/esm/icons/bike.mjs:
lucide-react/dist/esm/icons/box.mjs:
lucide-react/dist/esm/icons/brush.mjs:
lucide-react/dist/esm/icons/building-2.mjs:
lucide-react/dist/esm/icons/calculator.mjs:
lucide-react/dist/esm/icons/calendar-check.mjs:
lucide-react/dist/esm/icons/car.mjs:
lucide-react/dist/esm/icons/check.mjs:
lucide-react/dist/esm/icons/chevron-right.mjs:
lucide-react/dist/esm/icons/clock.mjs:
lucide-react/dist/esm/icons/coffee.mjs:
lucide-react/dist/esm/icons/cross.mjs:
lucide-react/dist/esm/icons/dollar-sign.mjs:
lucide-react/dist/esm/icons/droplets.mjs:
lucide-react/dist/esm/icons/dumbbell.mjs:
lucide-react/dist/esm/icons/eye.mjs:
lucide-react/dist/esm/icons/file-text.mjs:
lucide-react/dist/esm/icons/film.mjs:
lucide-react/dist/esm/icons/footprints.mjs:
lucide-react/dist/esm/icons/git-compare.mjs:
lucide-react/dist/esm/icons/globe.mjs:
lucide-react/dist/esm/icons/heart.mjs:
lucide-react/dist/esm/icons/house.mjs:
lucide-react/dist/esm/icons/landmark.mjs:
lucide-react/dist/esm/icons/languages.mjs:
lucide-react/dist/esm/icons/list.mjs:
lucide-react/dist/esm/icons/mail.mjs:
lucide-react/dist/esm/icons/map-pin.mjs:
lucide-react/dist/esm/icons/map.mjs:
lucide-react/dist/esm/icons/message-circle.mjs:
lucide-react/dist/esm/icons/message-square.mjs:
lucide-react/dist/esm/icons/moon.mjs:
lucide-react/dist/esm/icons/mountain.mjs:
lucide-react/dist/esm/icons/navigation.mjs:
lucide-react/dist/esm/icons/palette.mjs:
lucide-react/dist/esm/icons/pause.mjs:
lucide-react/dist/esm/icons/phone.mjs:
lucide-react/dist/esm/icons/play.mjs:
lucide-react/dist/esm/icons/route.mjs:
lucide-react/dist/esm/icons/send.mjs:
lucide-react/dist/esm/icons/shield-check.mjs:
lucide-react/dist/esm/icons/shopping-bag.mjs:
lucide-react/dist/esm/icons/shopping-cart.mjs:
lucide-react/dist/esm/icons/sofa.mjs:
lucide-react/dist/esm/icons/sparkles.mjs:
lucide-react/dist/esm/icons/star.mjs:
lucide-react/dist/esm/icons/sun.mjs:
lucide-react/dist/esm/icons/thermometer.mjs:
lucide-react/dist/esm/icons/thumbs-down.mjs:
lucide-react/dist/esm/icons/train-front.mjs:
lucide-react/dist/esm/icons/trees.mjs:
lucide-react/dist/esm/icons/trending-down.mjs:
lucide-react/dist/esm/icons/trending-up.mjs:
lucide-react/dist/esm/icons/triangle-alert.mjs:
lucide-react/dist/esm/icons/user.mjs:
lucide-react/dist/esm/icons/users.mjs:
lucide-react/dist/esm/icons/utensils-crossed.mjs:
lucide-react/dist/esm/icons/volume-2.mjs:
lucide-react/dist/esm/icons/wand-sparkles.mjs:
lucide-react/dist/esm/icons/waves-horizontal.mjs:
lucide-react/dist/esm/icons/wind.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.25.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
