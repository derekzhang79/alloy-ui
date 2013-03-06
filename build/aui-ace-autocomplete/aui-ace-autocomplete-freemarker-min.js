AUI.add("aui-ace-autocomplete-freemarker",function(l){var d=l.Lang,r=l.Array,p=l.Object,h=["flush","recover","fallback","local","break","lt","case","global","if","compress","escape","assign","elseif","noescape","setting","list","else","switch","include","recurse","rt","ftl","macro","stop","nt","visit","attempt","nested","import","default","return","t","function"],i=l.AceEditor.AutoCompleteBase,a=0,e=1,s=/<#[\w.]*>?$/,k=/\$\{[\w., ()"]*\}?$/,b=-1,q=0,c="all",n=".",m="",f="responseData",j="variables",g="aui-ace-autocomplete-freemarker";var o=l.Component.create({NAME:g,NS:g,ATTRS:{host:{validator:d.isObject},variables:{validator:d.isObject}},EXTENDS:l.Base,prototype:{initializer:function(u){var t=this;t._tstree=new l.TernarySearchTree();},getMatch:function(w){var u=this;var v;var t;if((t=w.lastIndexOf("<"))>=0){w=w.substring(t);if(s.test(w)){v={content:w.substring(2),start:t,type:a};}}else{if((t=w.lastIndexOf("$"))>=0){w=w.substring(t);if(k.test(w)){v={content:w.substring(2),start:t,type:e};}}}return v;},getResults:function(u,A,z){var B=this;var v=B._tstree;var y=u.type;if(y===a){var x=h;var w=u.content;if(w.length){if(B._lastTSTLoad!==a){B._addDirectives();}x=v.prefixSearch(w,true);}A(x);}else{if(y===e){var t=B._getVariableMatches(u.content);A(t);}}},getSuggestion:function(x,y){var u=this;var t=y||m;if(y){var w=u.get("host").get("fillMode");var z=x.type;var A;var v;if(w===i.FILL_MODE_INSERT){if(z===a){if(x.content&&y.indexOf(x.content)===0){t=y.substring(x.content.length);}}else{if(z===e){A=x.content.split(n);v=A[A.length-1];if(v&&y.indexOf(v)===0){t=y.substring(v.length);}}}}else{if(z===e){A=x.content.split(n);A[A.length-1]=y;t=A.join(n);}}}return t;},_addData:function(v){var t=this;var u=t._tstree;u.empty();r.each(v,function(x,w){u.add(x);});},_addDirectives:function(){var t=this;t._addData(h);t._lastTSTLoad=a;},_getVariableMatches:function(y){var A=this;var B=y.split(n);var t=A.get(j);var z=B[B.length-1];B.length-=1;var u;if(B.length>0){for(var v=0;v<B.length;v++){u=B[v];if(d.isObject(t)){t=t[u];}}}var w=[];if(d.isObject(t)){r.each(p.keys(t),function(D,C){w.push(D);});if(z){var x=A._tstree;x.empty();r.each(w,function(D,C){x.add(D);});w=x.prefixSearch(z,true);A._lastTSTLoad=e;}}return w;}}});o.DIRECTIVES=h;l.AceEditor.AutoCompleteFreemarker=o;},"@VERSION@",{requires:["aui-ace-autocomplete-base","aui-search-ternary-search-tree"]});