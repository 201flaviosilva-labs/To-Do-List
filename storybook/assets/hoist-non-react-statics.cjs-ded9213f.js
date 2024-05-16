import{g as X}from"./_commonjsHelpers-725317a4.js";var Y={exports:{}},r={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=Symbol.for("react.element"),I=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),a=Symbol.for("react.context"),Z=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function f(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case C:switch(e=e.type,e){case i:case p:case y:case $:case S:return e;default:switch(e=e&&e.$$typeof,e){case Z:case a:case m:case b:case d:case l:return e;default:return n}}case I:return n}}}r.ContextConsumer=a;r.ContextProvider=l;r.Element=C;r.ForwardRef=m;r.Fragment=i;r.Lazy=b;r.Memo=d;r.Portal=I;r.Profiler=p;r.StrictMode=y;r.Suspense=$;r.SuspenseList=S;r.isAsyncMode=function(){return!1};r.isConcurrentMode=function(){return!1};r.isContextConsumer=function(e){return f(e)===a};r.isContextProvider=function(e){return f(e)===l};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===C};r.isForwardRef=function(e){return f(e)===m};r.isFragment=function(e){return f(e)===i};r.isLazy=function(e){return f(e)===b};r.isMemo=function(e){return f(e)===d};r.isPortal=function(e){return f(e)===I};r.isProfiler=function(e){return f(e)===p};r.isStrictMode=function(e){return f(e)===y};r.isSuspense=function(e){return f(e)===$};r.isSuspenseList=function(e){return f(e)===S};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===i||e===p||e===y||e===$||e===S||e===k||typeof e=="object"&&e!==null&&(e.$$typeof===b||e.$$typeof===d||e.$$typeof===l||e.$$typeof===a||e.$$typeof===m||e.$$typeof===B||e.getModuleId!==void 0)};r.typeOf=f;Y.exports=r;var Se=Y.exports,G={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,A=o?Symbol.for("react.element"):60103,R=o?Symbol.for("react.portal"):60106,v=o?Symbol.for("react.fragment"):60107,P=o?Symbol.for("react.strict_mode"):60108,x=o?Symbol.for("react.profiler"):60114,g=o?Symbol.for("react.provider"):60109,w=o?Symbol.for("react.context"):60110,N=o?Symbol.for("react.async_mode"):60111,T=o?Symbol.for("react.concurrent_mode"):60111,_=o?Symbol.for("react.forward_ref"):60112,M=o?Symbol.for("react.suspense"):60113,ee=o?Symbol.for("react.suspense_list"):60120,O=o?Symbol.for("react.memo"):60115,j=o?Symbol.for("react.lazy"):60116,re=o?Symbol.for("react.block"):60121,te=o?Symbol.for("react.fundamental"):60117,oe=o?Symbol.for("react.responder"):60118,ne=o?Symbol.for("react.scope"):60119;function c(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case A:switch(e=e.type,e){case N:case T:case v:case x:case P:case M:return e;default:switch(e=e&&e.$$typeof,e){case w:case _:case j:case O:case g:return e;default:return n}}case R:return n}}}function H(e){return c(e)===T}t.AsyncMode=N;t.ConcurrentMode=T;t.ContextConsumer=w;t.ContextProvider=g;t.Element=A;t.ForwardRef=_;t.Fragment=v;t.Lazy=j;t.Memo=O;t.Portal=R;t.Profiler=x;t.StrictMode=P;t.Suspense=M;t.isAsyncMode=function(e){return H(e)||c(e)===N};t.isConcurrentMode=H;t.isContextConsumer=function(e){return c(e)===w};t.isContextProvider=function(e){return c(e)===g};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===A};t.isForwardRef=function(e){return c(e)===_};t.isFragment=function(e){return c(e)===v};t.isLazy=function(e){return c(e)===j};t.isMemo=function(e){return c(e)===O};t.isPortal=function(e){return c(e)===R};t.isProfiler=function(e){return c(e)===x};t.isStrictMode=function(e){return c(e)===P};t.isSuspense=function(e){return c(e)===M};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===v||e===T||e===x||e===P||e===M||e===ee||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===O||e.$$typeof===g||e.$$typeof===w||e.$$typeof===_||e.$$typeof===te||e.$$typeof===oe||e.$$typeof===ne||e.$$typeof===re)};t.typeOf=c;G.exports=t;var ce=G.exports,z=ce,fe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},se={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ue={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},J={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},D={};D[z.ForwardRef]=ue;D[z.Memo]=J;function V(e){return z.isMemo(e)?J:D[e.$$typeof]||fe}var ie=Object.defineProperty,ye=Object.getOwnPropertyNames,W=Object.getOwnPropertySymbols,pe=Object.getOwnPropertyDescriptor,le=Object.getPrototypeOf,K=Object.prototype;function Q(e,n,h){if(typeof n!="string"){if(K){var E=le(n);E&&E!==K&&Q(e,E,h)}var u=ye(n);W&&(u=u.concat(W(n)));for(var L=V(e),q=V(n),F=0;F<u.length;++F){var s=u[F];if(!se[s]&&!(h&&h[s])&&!(q&&q[s])&&!(L&&L[s])){var U=pe(n,s);try{ie(e,s,U)}catch{}}}}return e}var ae=Q;const de=X(ae);export{de as h,Se as r};
