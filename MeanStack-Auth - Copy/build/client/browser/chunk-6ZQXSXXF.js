import{C as ue,Ea as pe,I as ce,L as de,N as $,O as g,P as j,Qa as me,S as p,Sa as ye,T as h,U as m,X as U,Y as le,ca as he,e as re,ea as fe,fa as ge,k as se,ka as z,l as x,p as b,ta as V,w as oe,wa as De,y as ae}from"./chunk-JKSXHEAT.js";var G=null;function H(){return G}function en(n){G||(G=n)}var Ee=class{},v=new p("DocumentToken"),K=(()=>{let e=class e{historyGo(t){throw new Error("Not implemented")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=g({token:e,factory:()=>(()=>m(ze))(),providedIn:"platform"});let n=e;return n})(),tn=new p("Location Initialized"),ze=(()=>{let e=class e extends K{constructor(){super(),this._doc=m(v),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return H().getBaseHref(this._doc)}onPopState(t){let i=H().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=H().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,s){this._history.pushState(t,i,s)}replaceState(t,i,s){this._history.replaceState(t,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=g({token:e,factory:()=>(()=>new e)(),providedIn:"platform"});let n=e;return n})();function Z(n,e){if(n.length==0)return e;if(e.length==0)return n;let r=0;return n.endsWith("/")&&r++,e.startsWith("/")&&r++,r==2?n+e.substring(1):r==1?n+e:n+"/"+e}function Ce(n){let e=n.match(/#|\?|$/),r=e&&e.index||n.length,t=r-(n[r-1]==="/"?1:0);return n.slice(0,t)+n.slice(r)}function E(n){return n&&n[0]!=="?"?"?"+n:n}var _=(()=>{let e=class e{historyGo(t){throw new Error("Not implemented")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=g({token:e,factory:()=>(()=>m(Ve))(),providedIn:"root"});let n=e;return n})(),Ae=new p("appBaseHref"),Ve=(()=>{let e=class e extends _{constructor(t,i){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??m(v).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Z(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+E(this._platformLocation.search),s=this._platformLocation.hash;return s&&t?`${i}${s}`:i}pushState(t,i,s,a){let o=this.prepareExternalUrl(s+E(a));this._platformLocation.pushState(t,i,o)}replaceState(t,i,s,a){let o=this.prepareExternalUrl(s+E(a));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(i){return new(i||e)(h(K),h(Ae,8))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),nn=(()=>{let e=class e extends _{constructor(t,i){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash;return i==null&&(i="#"),i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=Z(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,s,a){let o=this.prepareExternalUrl(s+E(a));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,i,o)}replaceState(t,i,s,a){let o=this.prepareExternalUrl(s+E(a));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(i){return new(i||e)(h(K),h(Ae,8))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let n=e;return n})(),He=(()=>{let e=class e{constructor(t){this._subject=new De,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=We(Ce(we(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+E(i))}normalize(t){return e.stripTrailingSlash(Ye(this._basePath,we(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",s=null){this._locationStrategy.pushState(s,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+E(i)),s)}replaceState(t,i="",s=null){this._locationStrategy.replaceState(s,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+E(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(s=>s(t,i))}subscribe(t,i,s){return this._subject.subscribe({next:t,error:i,complete:s})}};e.normalizeQueryParams=E,e.joinWithSlash=Z,e.stripTrailingSlash=Ce,e.\u0275fac=function(i){return new(i||e)(h(_))},e.\u0275prov=g({token:e,factory:()=>Ge(),providedIn:"root"});let n=e;return n})();function Ge(){return new He(h(_))}function Ye(n,e){if(!n||!e.startsWith(n))return e;let r=e.substring(n.length);return r===""||["/",";","?","#"].includes(r[0])?r:e}function we(n){return n.replace(/\/index.html$/,"")}function We(n){if(new RegExp("^(https?:)?//").test(n)){let[,r]=n.split(/\/\/[^\/]+/);return r}return n}function Se(n,e){e=encodeURIComponent(e);for(let r of n.split(";")){let t=r.indexOf("="),[i,s]=t==-1?[r,""]:[r.slice(0,t),r.slice(t+1)];if(i.trim()===e)return decodeURIComponent(s)}return null}var rn=(()=>{let e=class e{constructor(t,i){this._viewContainer=t,this._context=new Y,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Fe("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Fe("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,i){return!0}};e.\u0275fac=function(i){return new(i||e)(V(pe),V(me))},e.\u0275dir=le({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let n=e;return n})(),Y=class{constructor(){this.$implicit=null,this.ngIf=null}};function Fe(n,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${de(e)}'.`)}var sn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=U({type:e}),e.\u0275inj=j({});let n=e;return n})(),on="browser",Ke="server";function an(n){return n===Ke}var un=(()=>{let e=class e{};e.\u0275prov=g({token:e,providedIn:"root",factory:()=>new W(h(v),window)});let n=e;return n})(),W=class{constructor(e,r){this.document=e,this.window=r,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(e){this.supportsScrolling()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(!this.supportsScrolling())return;let r=Ze(this.document,e);r&&(this.scrollToElement(r),r.focus())}setHistoryScrollRestoration(e){this.supportsScrolling()&&(this.window.history.scrollRestoration=e)}scrollToElement(e){let r=e.getBoundingClientRect(),t=r.left+this.window.pageXOffset,i=r.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(t-s[0],i-s[1])}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}};function Ze(n,e){let r=n.getElementById(e)||n.getElementsByName(e)[0];if(r)return r;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),i=t.currentNode;for(;i;){let s=i.shadowRoot;if(s){let a=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(a)return a}i=t.nextNode()}}return null}var R=class{};var I=class{},L=class{},w=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(r=>{let t=r.indexOf(":");if(t>0){let i=r.slice(0,t),s=i.toLowerCase(),a=r.slice(t+1).trim();this.maybeSetNormalizedName(i,s),this.headers.has(s)?this.headers.get(s).push(a):this.headers.set(s,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((r,t)=>{this.setHeaderEntries(t,r)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([r,t])=>{this.setHeaderEntries(r,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let r=this.headers.get(e.toLowerCase());return r&&r.length>0?r[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,r){return this.clone({name:e,value:r,op:"a"})}set(e,r){return this.clone({name:e,value:r,op:"s"})}delete(e,r){return this.clone({name:e,value:r,op:"d"})}maybeSetNormalizedName(e,r){this.normalizedNames.has(r)||this.normalizedNames.set(r,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(r=>{this.headers.set(r,e.headers.get(r)),this.normalizedNames.set(r,e.normalizedNames.get(r))})}clone(e){let r=new n;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([e]),r}applyUpdate(e){let r=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,r);let i=(e.op==="a"?this.headers.get(r):void 0)||[];i.push(...t),this.headers.set(r,i);break;case"d":let s=e.value;if(!s)this.headers.delete(r),this.normalizedNames.delete(r);else{let a=this.headers.get(r);if(!a)return;a=a.filter(o=>s.indexOf(o)===-1),a.length===0?(this.headers.delete(r),this.normalizedNames.delete(r)):this.headers.set(r,a)}break}}setHeaderEntries(e,r){let t=(Array.isArray(r)?r:[r]).map(s=>s.toString()),i=e.toLowerCase();this.headers.set(i,t),this.maybeSetNormalizedName(e,i)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(r=>e(this.normalizedNames.get(r),this.headers.get(r)))}};var J=class{encodeKey(e){return be(e)}encodeValue(e){return be(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Je(n,e){let r=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let s=i.indexOf("="),[a,o]=s==-1?[e.decodeKey(i),""]:[e.decodeKey(i.slice(0,s)),e.decodeValue(i.slice(s+1))],l=r.get(a)||[];l.push(o),r.set(a,l)}),r}var qe=/%(\d[a-f0-9])/gi,Qe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function be(n){return encodeURIComponent(n).replace(qe,(e,r)=>Qe[r]??e)}function O(n){return`${n}`}var C=class n{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new J,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Je(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(r=>{let t=e.fromObject[r],i=Array.isArray(t)?t.map(O):[O(t)];this.map.set(r,i)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let r=this.map.get(e);return r?r[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,r){return this.clone({param:e,value:r,op:"a"})}appendAll(e){let r=[];return Object.keys(e).forEach(t=>{let i=e[t];Array.isArray(i)?i.forEach(s=>{r.push({param:t,value:s,op:"a"})}):r.push({param:t,value:i,op:"a"})}),this.clone(r)}set(e,r){return this.clone({param:e,value:r,op:"s"})}delete(e,r){return this.clone({param:e,value:r,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let r=this.encoder.encodeKey(e);return this.map.get(e).map(t=>r+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let r=new n({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat(e),r}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let r=(e.op==="a"?this.map.get(e.param):void 0)||[];r.push(O(e.value)),this.map.set(e.param,r);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],i=t.indexOf(O(e.value));i!==-1&&t.splice(i,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var q=class{constructor(){this.map=new Map}set(e,r){return this.map.set(e,r),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function et(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ve(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Te(n){return typeof Blob<"u"&&n instanceof Blob}function Ie(n){return typeof FormData<"u"&&n instanceof FormData}function tt(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var T=class n{constructor(e,r,t,i){this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let s;if(et(this.method)||i?(this.body=t!==void 0?t:null,s=i):s=t,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers||(this.headers=new w),this.context||(this.context=new q),!this.params)this.params=new C,this.urlWithParams=r;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=r;else{let o=r.indexOf("?"),l=o===-1?"?":o<r.length-1?"&":"";this.urlWithParams=r+l+a}}}serializeBody(){return this.body===null?null:ve(this.body)||Te(this.body)||Ie(this.body)||tt(this.body)||typeof this.body=="string"?this.body:this.body instanceof C?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ie(this.body)?null:Te(this.body)?this.body.type||null:ve(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof C?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let r=e.method||this.method,t=e.url||this.url,i=e.responseType||this.responseType,s=e.body!==void 0?e.body:this.body,a=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,o=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,l=e.headers||this.headers,u=e.params||this.params,y=e.context??this.context;return e.setHeaders!==void 0&&(l=Object.keys(e.setHeaders).reduce((F,D)=>F.set(D,e.setHeaders[D]),l)),e.setParams&&(u=Object.keys(e.setParams).reduce((F,D)=>F.set(D,e.setParams[D]),u)),new n(r,t,s,{params:u,headers:l,context:y,reportProgress:o,responseType:i,withCredentials:a})}},S=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(S||{}),M=class{constructor(e,r=200,t="OK"){this.headers=e.headers||new w,this.status=e.status!==void 0?e.status:r,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},Q=class n extends M{constructor(e={}){super(e),this.type=S.ResponseHeader}clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},P=class n extends M{constructor(e={}){super(e),this.type=S.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},B=class extends M{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}};function X(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var nt=(()=>{let e=class e{constructor(t){this.handler=t}request(t,i,s={}){let a;if(t instanceof T)a=t;else{let u;s.headers instanceof w?u=s.headers:u=new w(s.headers);let y;s.params&&(s.params instanceof C?y=s.params:y=new C({fromObject:s.params})),a=new T(t,i,s.body!==void 0?s.body:null,{headers:u,context:s.context,params:y,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=x(a).pipe(ae(u=>this.handler.handle(u)));if(t instanceof T||s.observe==="events")return o;let l=o.pipe(oe(u=>u instanceof P));switch(s.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(b(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return l.pipe(b(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return l.pipe(b(u=>{if(u.body!==null&&typeof u.body!="string")throw new Error("Response is not a string.");return u.body}));case"json":default:return l.pipe(b(u=>u.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new C().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,s={}){return this.request("PATCH",t,X(s,i))}post(t,i,s={}){return this.request("POST",t,X(s,i))}put(t,i,s={}){return this.request("PUT",t,X(s,i))}};e.\u0275fac=function(i){return new(i||e)(h(I))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let n=e;return n})();function it(n,e){return e(n)}function rt(n,e,r){return(t,i)=>ge(r,()=>e(t,s=>n(s,i)))}var _e=new p(""),st=new p(""),ot=new p("");var Me=(()=>{let e=class e extends I{constructor(t,i){super(),this.backend=t,this.injector=i,this.chain=null,this.pendingTasks=m(ye);let s=m(ot,{optional:!0});this.backend=s??t}handle(t){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(_e),...this.injector.get(st,[])]));this.chain=s.reduceRight((a,o)=>rt(a,o,this.injector),it)}let i=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe(ue(()=>this.pendingTasks.remove(i)))}};e.\u0275fac=function(i){return new(i||e)(h(L),h(fe))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let n=e;return n})();var at=/^\)\]\}',?\n/;function ut(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var Re=(()=>{let e=class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new $(-2800,!1);let i=this.xhrFactory;return(i.\u0275loadImpl?se(i.\u0275loadImpl()):x(null)).pipe(ce(()=>new re(a=>{let o=i.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((c,d)=>o.setRequestHeader(c,d.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let c=t.detectContentTypeHeader();c!==null&&o.setRequestHeader("Content-Type",c)}if(t.responseType){let c=t.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let l=t.serializeBody(),u=null,y=()=>{if(u!==null)return u;let c=o.statusText||"OK",d=new w(o.getAllResponseHeaders()),A=ut(o)||t.url;return u=new Q({headers:d,status:o.status,statusText:c,url:A}),u},F=()=>{let{headers:c,status:d,statusText:A,url:ie}=y(),f=null;d!==204&&(f=typeof o.response>"u"?o.responseText:o.response),d===0&&(d=f?200:0);let N=d>=200&&d<300;if(t.responseType==="json"&&typeof f=="string"){let Le=f;f=f.replace(at,"");try{f=f!==""?JSON.parse(f):null}catch(Pe){f=Le,N&&(N=!1,f={error:Pe,text:f})}}N?(a.next(new P({body:f,headers:c,status:d,statusText:A,url:ie||void 0})),a.complete()):a.error(new B({error:f,headers:c,status:d,statusText:A,url:ie||void 0}))},D=c=>{let{url:d}=y(),A=new B({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});a.error(A)},ee=!1,te=c=>{ee||(a.next(y()),ee=!0);let d={type:S.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),t.responseType==="text"&&o.responseText&&(d.partialText=o.responseText),a.next(d)},ne=c=>{let d={type:S.UploadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),a.next(d)};return o.addEventListener("load",F),o.addEventListener("error",D),o.addEventListener("timeout",D),o.addEventListener("abort",D),t.reportProgress&&(o.addEventListener("progress",te),l!==null&&o.upload&&o.upload.addEventListener("progress",ne)),o.send(l),a.next({type:S.Sent}),()=>{o.removeEventListener("error",D),o.removeEventListener("abort",D),o.removeEventListener("load",F),o.removeEventListener("timeout",D),t.reportProgress&&(o.removeEventListener("progress",te),l!==null&&o.upload&&o.upload.removeEventListener("progress",ne)),o.readyState!==o.DONE&&o.abort()}})))}};e.\u0275fac=function(i){return new(i||e)(h(R))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let n=e;return n})(),Oe=new p("XSRF_ENABLED"),ct="XSRF-TOKEN",dt=new p("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>ct}),lt="X-XSRF-TOKEN",ht=new p("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>lt}),k=class{},ft=(()=>{let e=class e{constructor(t,i,s){this.doc=t,this.platform=i,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Se(t,this.cookieName),this.lastCookieString=t),this.lastToken}};e.\u0275fac=function(i){return new(i||e)(h(v),h(z),h(dt))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let n=e;return n})();function gt(n,e){let r=n.url.toLowerCase();if(!m(Oe)||n.method==="GET"||n.method==="HEAD"||r.startsWith("http://")||r.startsWith("https://"))return e(n);let t=m(k).getToken(),i=m(ht);return t!=null&&!n.headers.has(i)&&(n=n.clone({headers:n.headers.set(i,t)})),e(n)}function In(...n){let e=[nt,Re,Me,{provide:I,useExisting:Me},{provide:L,useExisting:Re},{provide:_e,useValue:gt,multi:!0},{provide:Oe,useValue:!0},{provide:k,useClass:ft}];for(let r of n)e.push(...r.\u0275providers);return he(e)}export{H as a,en as b,Ee as c,v as d,tn as e,_ as f,Ve as g,nn as h,He as i,Se as j,rn as k,sn as l,on as m,an as n,un as o,R as p,nt as q,In as r};