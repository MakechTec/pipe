(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Action:()=>o,Pipe:()=>i});class o{action=()=>{};args=[];constructor(t=(()=>{}),...e){this.action=t,this.args=e}}class i{actions=[];mutable=null;constructor(t=null,e=[]){this.mutable=t,this.actions=e}addAction(t,...e){return this.actions.push(new o(t,...e)),this}setActions(t){this.actions=t}execActions(){let t=this.mutable;return this.actions.forEach((e=>{t=e.action(t,...e.args)})),t}}exports.Action=e.Action,exports.Pipe=e.Pipe,Object.defineProperty(exports,"__esModule",{value:!0})})();