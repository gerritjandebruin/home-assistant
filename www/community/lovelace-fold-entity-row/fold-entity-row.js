function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",i))(e)})(t):t;var l;const a=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:d};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=c){var s,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:h.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),l=t.converter,a=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:h.fromAttribute;this._$Ei=r,this[r]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var p;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:u}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.0.1");const v=globalThis.trustedTypes,g=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,f="?"+m,$=`<${f}>`,_=document,y=(t="")=>_.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,H=/"/g,T=/^(?:script|style|textarea)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),P=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),k=new WeakMap,R=_.createTreeWalker(_,129,null,!1),O=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=b;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,a=r.exec(i),null!==a);)d=r.lastIndex,r===b?"!--"===a[1]?r=E:void 0!==a[1]?r=S:void 0!==a[2]?(T.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=C):void 0!==a[3]&&(r=C):r===C?">"===a[0]?(r=null!=o?o:b,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?C:'"'===a[3]?H:x):r===H||r===x?r=C:r===E||r===S?r=b:(r=C,o=void 0);const c=r===C&&t[e+1].startsWith("/>")?" ":"";n+=r===b?i+$:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+m+c):i+m+(-2===h?(s.push(void 0),e):c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==g?g.createHTML(l):l,s]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=O(t,e);if(this.el=M.createElement(a,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=R.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?j:"?"===e[1]?q:"@"===e[1]?B:z})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(m),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],y()),R.nextNode(),l.push({type:2,index:++o});s.append(t[e],y())}}}else if(8===s.nodeType)if(s.data===f)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)l.push({type:7,index:o}),t+=m.length-1}o++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){var o,n,r,l;if(e===P)return e;let a=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=L(t,a._$AS(t,e.values),a,s)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);R.currentNode=o;let n=R.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new I(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new W(n,this,t)),this.v.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=R.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,s){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),A(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==P&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==N&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=M.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new D(o,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=k.get(t.strings);return void 0===e&&k.set(t.strings,e=new M(t)),e}M(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new I(this.A(y()),this.A(y()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class z{constructor(t,e,i,s,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=L(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=L(this,s[i+r],e,r),l===P&&(l=this._$AH[r]),n||(n=!A(l)||l!==this._$AH[r]),l===N?t=N:t!==N&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.k(t)}k(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class j extends z{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===N?void 0:t}}class q extends z{constructor(){super(...arguments),this.type=4}k(t){t&&t!==N?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class B extends z{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:N)===P)return;const s=this._$AH,o=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==N&&(s===N||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const V=window.litHtmlPolyfillSupport;var K,F;null==V||V(M,I),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.0.1");class J extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new I(e.insertBefore(y(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return P}}J.finalized=!0,J._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:J});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:J}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.0.1");const Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function G(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}function Q(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}})({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}var X="2.1.0";async function tt(t,e,i=!1){let s=t;"string"==typeof e&&(e=e.split(/(\$| )/)),""===e[e.length-1]&&e.pop();for(const[t,o]of e.entries())if(o.trim().length){if(!s)return null;s.localName&&s.localName.includes("-")&&await customElements.whenDefined(s.localName),s.updateComplete&&await s.updateComplete,s="$"===o?i&&t==e.length-1?[s.shadowRoot]:s.shadowRoot:i&&t==e.length-1?s.querySelectorAll(o):s.querySelector(o)}return s}const et={open:!1,padding:24,group_config:{},tap_unfold:void 0};function it(t){if(void 0!==t)return"string"==typeof t?{entity:t}:t}async function st(t,e=0){return 100!=e&&(!!t&&("hui-entities-card"===t.localName||"hui-picture-elements-card"===t.localName?t:(t.updateComplete&&await t.updateComplete,t.parentElement?st(t.parentElement,e+1):t.parentNode?st(t.parentNode,e+1):!!t.host&&st(t.host,e+1))))}const ot=(t,e)=>{const i=document.body.querySelector("action-handler");i&&i.bind(t,e)},nt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{update(t,[e]){return ot(t.element,e),P}render(t){}});class rt extends J{constructor(){super(...arguments),this.entitiesWarning=!1,this._toggleCooldown=!1}setConfig(t){var e,i,s,o;this._config=t=Object.assign({},et,t),this.open=null!==(i=null!==(e=this.open)&&void 0!==e?e:this._config.open)&&void 0!==i&&i;let n=it(t.entity||t.head);if(!n)throw new Error("No fold head specified");void 0===this._config.clickable&&void 0===n.entity&&void 0===n.tap_action&&(this._config.clickable=!0);let r=t.entities||t.items;if(n.entity&&void 0===r&&(r=null===(o=null===(s=(document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0).states[n.entity])||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.entity_id),void 0===r)throw new Error("No entities specified.");if(!r||!Array.isArray(r))throw new Error("Entities must be a list.");(async()=>{this.head=await this._createRow(n,!0),this._config.clickable&&(ot(this.head,{}),this.head.addEventListener("action",(t=>this.toggle(t)),{capture:!0}),this.head.tabIndex=0,this.head.setAttribute("role","switch"),this.head.ariaLabel=this.open?"Toggle fold closed":"Toggle fold open"),this.rows=await Promise.all(r.map((async t=>this._createRow(it(t)))))})()}async _createRow(t,e=!1){var i,s,o,n;const r=await window.loadCardHelpers(),l=await st(this),a=null!==(o=null!==(i=this._config.state_color)&&void 0!==i?i:null===(s=null==l?void 0:l._config)||void 0===s?void 0:s.state_color)&&void 0!==o?o:null===(n=null==l?void 0:l.config)||void 0===n?void 0:n.state_color;t=Object.assign(Object.assign({state_color:a},e?{}:this._config.group_config),t);const h=r.createRowElement(t);return this.applyStyle(h,t,e),this._hass&&(h.hass=this._hass),h}async applyStyle(t,e,i=!1){if(i)if("hui-section-row"===t.localName){this.classList.add("section-head"),t.style.minHeight="53px";const e=await async function(t,e,i=!1,s=1e4){return Promise.race([tt(t,e,i),new Promise(((t,e)=>setTimeout((()=>e(new Error("timeout"))),s)))]).catch((t=>{if(!t.message||"timeout"!==t.message)throw t;return null}))}(t,"$.divider");e&&(e.style.marginRight="-40px")}else this.classList.remove("section-head");await customElements.whenDefined("card-mod"),customElements.get("card-mod").applyToElement(t,"row",e.card_mod?e.card_mod.style:e.style,{config:e})}async snapHeight(t){this.itemsContainer.style.transition="none",getComputedStyle(this.itemsContainer).transition,this.itemsContainer.style.maxHeight=`${t}px`,getComputedStyle(this.itemsContainer).maxHeight,this.itemsContainer.style.transition=null}async flowHeight(t){if(this._config.no_animation)return this.snapHeight(t);this.itemsContainer.style.maxHeight=`${t}px`,this.requestUpdate(),await this.updateComplete}async toggle(t){t&&t.stopPropagation(),this._toggleCooldown||(this._toggleCooldown=!0,setTimeout((()=>this._toggleCooldown=!1),250),this.itemsContainer.classList.add("clip"),this.open?(await this.snapHeight(this.measureContainer.scrollHeight),this.open=!1,await this.flowHeight(0)):(await this.flowHeight(this.measureContainer.scrollHeight),this.open=!0,setTimeout((()=>this.snapHeight(1e6)),250),setTimeout((()=>this.itemsContainer.classList.remove("clip")),250)),this._config.clickable&&(this.head.ariaLabel=this.open?"Toggle fold closed":"Toggle fold open",this.head.ariaChecked=this.open?"true":"false"))}set hass(t){var e;this._hass=t,null===(e=this.rows)||void 0===e||e.forEach((e=>e.hass=t)),this.head&&(this.head.hass=t)}async updated(t){super.updated(t),t.has("open")&&this._cardMod&&this._cardMod.forEach((t=>t.refresh()))}firstUpdated(){this._config.open?this.itemsContainer.style.maxHeight="1000000px":(this.itemsContainer.style.maxHeight="0px",this.itemsContainer.classList.add("clip"))}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._config.open?this.itemsContainer.style.maxHeight="1000000px":(this.itemsContainer.style.maxHeight="0px",this.itemsContainer.classList.add("clip"))})),window.setTimeout((()=>{this.isConnected&&!this.entitiesWarning&&st(this).then((t=>{t||!0===this._config.mute||(this.entitiesWarning=!0,console.group("%cYou are doing it wrong!","color: red; font-weight: bold"),console.info("Fold-entity-row should only EVER be used INSIDE an ENTITIES CARD."),console.info("See https://github.com/thomasloven/lovelace-fold-entity-row/issues/146"),console.info(this),console.groupEnd())}))}),1e3)}_customEvent(t){t.detail.fold_row&&this.toggle(t)}render(){var t;return U`
      <div id="head" @ll-custom=${this._customEvent} ?open=${this.open}>
        ${this.head}
        <ha-icon
          icon=${this.open?"mdi:chevron-up":"mdi:chevron-down"}
          @action=${this.toggle}
          .actionHandler=${nt({})}
          role="${this._config.clickable?"":"switch"}"
          tabindex="${this._config.clickable?"-1":"0"}"
          aria-checked=${this.open?"true":"false"}
          aria-label="${this._config.clickable?"":this.open?"Toggle fold closed":"Toggle fold open"}"
        ></ha-icon>
      </div>

      <div
        id="items"
        ?open=${this.open}
        aria-hidden="${String(!this.open)}"
        aria-expanded="${String(this.open)}"
        style=${`padding-left: ${this._config.padding}px;`}
        class=${this._config.no_animation?"notransition":""}
      >
        <div id="measure">
          ${null===(t=this.rows)||void 0===t?void 0:t.map((t=>U`<div>${t}</div>`))}
        </div>
      </div>
    `}static get styles(){return n`
      #head {
        display: flex;
        align-items: center;
        --toggle-icon-width: 32px;
        margin-right: -8px;
      }
      #head :not(ha-icon) {
        flex-grow: 1;
        max-width: calc(100% - var(--toggle-icon-width));
      }
      ha-icon {
        width: var(--toggle-icon-width);
        cursor: pointer;
        border-radius: 50%;
        background-size: cover;
        --mdc-icon-size: var(--toggle-icon-width);
      }
      ha-icon:focus {
        outline: none;
        background: var(--divider-color);
      }
      :host(.section-head) ha-icon {
        margin-top: 16px;
      }

      #head :not(ha-icon):focus-visible {
        outline: none;
        background: var(--divider-color);
        border-radius: 24px;
        background-size: cover;
      }
      #head :not(ha-icon):focus {
        outline: none;
      }

      #items {
        padding: 0;
        margin: 0;
        transition: max-height ${200}ms ease-in-out;
        height: 100%;
      }
      #items.clip {
        overflow: hidden;
      }
      #items.notransition {
        transition: none;
      }

      #measure > * {
        margin: 8px 0;
      }
      #measure > *:first-child {
        margin-top: 0;
      }
      #measure > *:last-child {
        margin-bottom: 0;
      }
    `}}t([G()],rt.prototype,"open",void 0),t([G()],rt.prototype,"head",void 0),t([G()],rt.prototype,"rows",void 0),t([G()],rt.prototype,"entitiesWarning",void 0),t([Q("#items")],rt.prototype,"itemsContainer",void 0),t([Q("#measure")],rt.prototype,"measureContainer",void 0),customElements.get("fold-entity-row")||(customElements.define("fold-entity-row",rt),console.info(`%cFOLD-ENTITY-ROW ${X} IS INSTALLED`,"color: green; font-weight: bold",""));export{st as findParentCard};
