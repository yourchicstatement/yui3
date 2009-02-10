YUI.add("node-base",function(C){var B="ownerDocument",H="tagName",E="nodeName",J="nodeType",A=C.Selector,M={},D={},L=[].slice;var K=function(O){var N=null;if(O){N=(typeof O==="string")?function(P){return C.Selector.test(P,O);}:function(P){return O(C.get(P));};}return N;};var I=function(N){var O=C.config.doc;if(N){if(N[J]){if(N[J]===9){O=N;}else{O=N[B];}}else{if(G[N._yuid]){O=G[N._yuid]()[0];}}}return O;};var F=function(N){if(N&&!N[J]&&N._yuid){N=G[N._yuid]()[0];}return N||null;};var G=function(){this.init.apply(this,arguments);};G.PLUGINS=[];G.plug=function(O,N){G.PLUGINS.push({fn:O,cfg:N});};G._deepGet=function(P,Q){var O=P.length,N;if(O>0){for(N=0;Q!==undefined&&N<O;++N){Q=Q[P[N]];}}return Q;};G._deepSet=function(Q,S,P){var O=Q.length-1,N,R;if(O>=0){R=S;for(N=0;R!==undefined&&N<O;++N){R=R[Q[N]];}if(R!==undefined&&R[Q[N]]!==undefined){R[Q[N]]=P;}}};G.scrubVal=function(Q,O,P){if(Q!==undefined){if(typeof Q==="object"||typeof Q==="function"){if(Q!==null&&(J in Q||Q.item||(Q[0]&&Q[0][J])||Q.document)){if(O&&D&&D[O._yuid]&&!O.contains(Q)){Q=null;}else{if(Q[J]||Q.document){Q=G.get(Q);}else{Q=G.all(Q);}}}else{P=(P===undefined)?4:P;if(P>0){for(var N in Q){if(Q.hasOwnProperty&&Q.hasOwnProperty(N)){Q[N]=G.scrubVal(Q[N],O,--P);}}}}}}else{Q=O;}return Q;};G.setters={};G.getters={"text":function(N){return C.DOM.getText(N);},"options":function(N){return(N)?N.getElementsByTagName("option"):[];},"children":function(Q){var P=Q.children;if(P===undefined){var R=Q.childNodes;P=[];for(var O=0,N=R.length;O<N;++O){if(R[O][H]){P[P.length]=R[O];}}}return P;}};G.methods=function(N,O){if(typeof N=="string"){G.prototype[N]=function(){var S=L.call(arguments,0),P=this,T=(M[this._yuid])?false:true,R=(T)?[]:null,U;var Q=function(V){S[0]=V;U=G.scrubVal(O.apply(P,S),P);if(T){R[R.length]=U;}else{R=U;}};S.unshift("");G[P._yuid](Q);return R;};}else{C.each(N,function(Q,P){G.methods(P,Q);});}};G.getDOMNode=F;G.wrapDOMMethod=function(N){return function(){return C.DOM[N].apply(C.DOM,arguments);};};G.addDOMMethods=function(N){var O={};C.each(N,function(P,Q){O[P]=C.Node.wrapDOMMethod(P);});C.Node.methods(O);};G.prototype={init:function(O,T,N,Q){var P;T=I(T);this.getId=function(){return P;};var R=function(V,U){if(V){U=U||0;for(var W;W=O[U++];){V(W);}}return O;};P=C.guid();if(O){if(O[J]||O.document){O=[O];}}else{O=[];}if(!Q&&O.length){try{if(O[0].uniqueID){P=O[0].uniqueID;}O[0]._yuid=P;}catch(S){}}this._yuid=P;G[P]=R;if(!Q){M[P]=this;}this._initPlugins();},_initPlugins:function(N){if(C.Node.PLUGINS){this.plug(C.Node.PLUGINS);}},filter:function(N){return G.scrubVal(A.filter(G[this._yuid](),N),this);},each:function(O,N){N=N||this;G[this._yuid](function(P){O.call(N,G.get(P));});},size:function(){return G[this._yuid]().length;},item:function(N){var O=G[this._yuid]()[N];return G.get(O);},attach:function(Q,P,N){var O=L.call(arguments,0);O.splice(2,0,G[this._yuid]());return C.Event.attach.apply(C.Event,O);},on:function(P,O,N){return this.attach.apply(this,arguments);},detach:function(P,O){var N=L.call(arguments,0);N.splice(2,0,G[this._yuid]());return C.Event.detach.apply(C.Event,N);},create:function(N){return C.Node.create(N);},plug:function(Q,O){if(Q){if(typeof Q==="string"&&C.plugin){this._plug(C.plugin[Q],O);}else{if(Q.fn){this.plug(Q.fn,Q.cfg);}else{if(C.Lang.isFunction(Q)){this._plug(Q,O);}else{for(var P=0,N=Q.length;P<N;++P){this.plug(Q[P]);}}}}}return this;},_plug:function(P,N){if(P&&P.NS){var O=P.NS;if(P.ALLOW_LISTS===true||G[this._yuid]().length===1){N=N||{};N.owner=this;this[O]=new P(N);}else{this[O]=null;}}},toString:function(){var Q=this._yuid+": ",P=this._yuid+": not bound to any nodes",N=G[this._yuid]()||{};if(N){var O=N[0];Q+=O[E];if(O.id){Q+="#"+O.id;}if(O.className){Q+="."+O.className.replace(" ",".");}if(N.length>1){Q+="...["+N.length+" items]";}}return Q||P;}};G.methods({addEventListener:function(){return C.Event.nativeAdd.apply(C.Event,arguments);},removeEventListener:function(){return C.Event.nativeRemove.apply(C.Event,arguments);},set:function(N,P,O){if(P.indexOf(".")<0){if(P in G.setters){G.setters[P](this,P,O);}else{if(N[P]!==undefined){N[P]=O;}else{}}}else{G._deepSet(P.split("."),N,O);}},get:function(N,P){var O=null;if(P){if(P.indexOf(".")<0){if(P in G.getters){O=G.getters[P].call(this,N,P);}else{O=N[P];}if(O===undefined){O=null;}}else{O=G._deepGet(P.split("."),N);}}return O;},invoke:function(Q,U,O,N,T,S,R){var P;if(O){O=(O[J])?O:F(O);if(N){N=(N[J])?N:F(N);}}P=Q[U](O,N,T,S,R);return P;},hasMethod:function(N,O){return !!N[O];},query:function(P,N){var O=A.query(N,P,true);if(!O){O=null;}return O;},queryAll:function(P,N){var O=A.query(N,P);if(!O.length){O=null;}return O;},test:function(O,N){return A.test(O,N);},compareTo:function(O,N){N=F(N)||O;return O===N;},ancestor:function(O,N){return C.DOM.elementByAxis(O,"parentNode",K(N));},previous:function(P,O,N){return C.DOM.elementByAxis(P,"previousSibling",K(O),N);},next:function(P,O,N){return C.DOM.elementByAxis(P,"nextSibling",K(O),N);},contains:function(N,O){return C.DOM.contains(N,F(O));},inDoc:function(N,O){O=(O)?I(O):N.ownerDocument;if(O.documentElement){return C.DOM.contains(O.documentElement,N);}},getById:function(O,P){var N=O[B].getElementById(P);if(!N||!C.DOM.contains(O,N)){N=null;}return N;}});G.create=function(N){return G.get(C.DOM.create(N));};G.getById=function(O,N){N=(N&&N[J])?N:C.config.doc;return G.get(N.getElementById(O));};G.get=function(Q,R,O,P){var N;if(Q&&Q instanceof G){return Q;}else{if(typeof Q==="string"){Q=G._getByString(Q,R,P);}}if(Q){if(!P){if(Q._yuid){if(!Q.uniqueID||(Q.uniqueID===Q._yuid)){N=M[Q._yuid];}}}if(!N){N=new G(Q,R,O,P);}if(N&&O&&!P){D[N._yuid]=true;}}return(N&&N.size())?N:null;};G._getByString=function(Q,P,N){var O;if(/^win(?:dow)?/.test(Q)){O=C.config.win;}else{if(/^doc(?:ument)?/.test(Q)){O=C.config.doc;}else{O=A.query(Q,P,!N);}}return O;};G.all=function(O,P,N){return G.get.call(G,O,P,N,true);};C.Array.each(["replaceChild","appendChild","insertBefore","removeChild","hasChildNodes","cloneNode","getAttribute","setAttribute","hasAttribute","removeAttribute","scrollIntoView","getElementsByTagName","focus","blur","submit","reset","select"],function(N){G.prototype[N]=function(R,P,O){var Q=this.invoke(N,R,P,O);
return Q;};});if(!document.documentElement.hasAttribute){G.methods({"hasAttribute":function(O,N){return !!O.getAttribute(N);}});}C.Node=G;C.all=C.Node.all;C.get=C.Node.get;C.Node.addDOMMethods(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);},"@VERSION@",{requires:["dom-base","selector"]});