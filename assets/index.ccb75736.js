import{S as s,i as e,s as t,e as a,a as l,b as c,c as r,d as i,f as n,g as o,h,j as f,k as u,l as v,m as g,n as d,t as p,o as m,p as E,q as b,r as w,u as $,v as S,w as I,x as j,y as x,z as O,A as R,B as k,C as B,D as A,E as C,F as M,G as y,H as L,I as N,J as D,K as P,L as U,M as V,N as T}from"./vendor.81ca5bf2.js";!function(s=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(t){const a=new URL(s,location),l=s=>{URL.revokeObjectURL(s.src),s.remove()};self[e]=s=>new Promise(((t,c)=>{const r=new URL(s,a);if(self[e].moduleMap[r])return t(self[e].moduleMap[r]);const i=new Blob([`import * as m from '${r}';`,`${e}.moduleMap['${r}']=m;`],{type:"text/javascript"}),n=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){c(new Error(`Failed to import: ${s}`)),l(n)},onload(){t(self[e].moduleMap[r]),l(n)}});document.head.appendChild(n)})),self[e].moduleMap={}}}("/bit-patterns/assets/");function W(s,e,t){const a=s.slice();return a[6]=e[t],a[8]=t,a}function F(s){let e,t,p,m,E,b,w;return{c(){e=a("div"),t=l("svg"),p=c(),this.h()},l(s){e=r(s,"DIV",{class:!0});var a=i(e);t=r(a,"svg",{class:!0,viewBox:!0,height:!0},1),i(t).forEach(n),p=o(a),a.forEach(n),this.h()},h(){h(t,"class","rough-rect svelte-k7ijek"),h(t,"viewBox","0 0 16 16"),h(t,"height","16"),h(e,"class","bit svelte-k7ijek")},m(a,l){f(a,e,l),u(e,t),u(e,p),E=!0,b||(w=v(s[2].call(null,t,s[6].bv)),b=!0)},p(e,t){s=e},i(s){E||(g((()=>{m||(m=d(e,$,{duration:500},!0)),m.run(1)})),E=!0)},o(s){m||(m=d(e,$,{duration:500},!1)),m.run(0),E=!1},d(s){s&&n(e),s&&m&&m.end(),b=!1,w()}}}function G(s){let e,t,l=s[1],c=[];for(let a=0;a<l.length;a+=1)c[a]=F(W(s,l,a));const o=s=>E(c[s],1,1,(()=>{c[s]=null}));return{c(){e=a("section");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){e=r(s,"SECTION",{class:!0,id:!0});var t=i(e);for(let e=0;e<c.length;e+=1)c[e].l(t);t.forEach(n),this.h()},h(){h(e,"class","bit-single svelte-k7ijek"),h(e,"id",s[0])},m(s,a){f(s,e,a);for(let t=0;t<c.length;t+=1)c[t].m(e,null);t=!0},p(s,[a]){if(2&a){let t;for(l=s[1],t=0;t<l.length;t+=1){const r=W(s,l,t);c[t]?(c[t].p(r,a),p(c[t],1)):(c[t]=F(r),c[t].c(),p(c[t],1),c[t].m(e,null))}for(m(),t=l.length;t<c.length;t+=1)o(t);b()}(!t||1&a)&&h(e,"id",s[0])},i(s){if(!t){for(let s=0;s<l.length;s+=1)p(c[s]);t=!0}},o(s){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)E(c[e]);t=!1},d(s){s&&n(e),w(c,s)}}}function H(s,e,t){let a,{bits:l=[]}=e,{bitSignature:c}=e,r=l.map((s=>({bv:s,id:parseInt(`${c}${l.indexOf(s)}`)})));return s.$$set=s=>{"bits"in s&&t(3,l=s.bits),"bitSignature"in s&&t(0,c=s.bitSignature)},[c,r,function(s,e){a=S.svg(s);const t=a.rectangle(0,0,16,16,{fill:!0===e?"tomato":"",stroke:"tomato",roughness:1,hachureGap:4,fillWeight:1.5});s.appendChild(t)},l]}class _ extends s{constructor(s){super(),e(this,s,H,G,t,{bits:3,bitSignature:0})}}function q(s,e,t){const a=s.slice();return a[8]=e[t],a}function K(s,e){let t,l,v,g,d,m=T;return l=new _({props:{bits:e[8],bitSignature:X(e[8])}}),{key:s,first:null,c(){t=a("div"),I(l.$$.fragment),v=c(),this.h()},l(s){t=r(s,"DIV",{class:!0});var e=i(t);j(l.$$.fragment,e),v=o(e),e.forEach(n),this.h()},h(){h(t,"class","svelte-15i63ac"),this.first=t},m(s,e){f(s,t,e),x(l,t,null),u(t,v),d=!0},p(s,t){e=s;const a={};4&t&&(a.bits=e[8]),4&t&&(a.bitSignature=X(e[8])),l.$set(a)},r(){g=t.getBoundingClientRect()},f(){O(t),m()},a(){m(),m=R(t,g,P,{})},i(s){d||(p(l.$$.fragment,s),d=!0)},o(s){E(l.$$.fragment,s),d=!1},d(s){s&&n(t),k(l)}}}function z(s){let e,t,g,d,w,$,S,I,j,x,O,R,k,P,V,T,W,F,G,H,_,z,J,Q,Y,Z,ss,es,ts,as,ls,cs,rs,is,ns,os,hs,fs,us,vs,gs,ds,ps,ms,Es,bs,ws,$s,Ss=s[2].length+"",Is=[],js=new Map,xs=s[2];const Os=s=>X(s[8]);for(let a=0;a<xs.length;a+=1){let e=q(s,xs,a),t=Os(e);js.set(t,Is[a]=K(t,e))}return{c(){e=a("link"),t=c(),g=a("main"),d=a("section"),w=a("h1"),$=B("Bits: "),S=a("span"),I=B(s[0]),j=c(),x=a("h1"),O=B("Combinations: "),R=a("span"),k=B(Ss),P=c(),V=a("wired-slider"),T=c(),W=a("section"),F=a("div"),G=a("span"),H=B("On:"),_=c(),z=l("svg"),J=c(),Q=a("div"),Y=a("span"),Z=B("Off:"),ss=c(),es=l("svg"),ts=c(),as=a("footer"),ls=a("p"),cs=B("Made with "),rs=a("a"),is=B("Svelte"),ns=B(", a "),os=a("a"),hs=B("Rough"),fs=B(", "),us=a("a"),vs=B("Wired"),gs=B(", and "),ds=a("a"),ps=B("Vite"),ms=c(),Es=a("article");for(let s=0;s<Is.length;s+=1)Is[s].c();this.h()},l(a){const l=A('[data-svelte="svelte-qtp51s"]',document.head);e=r(l,"LINK",{href:!0,rel:!0,class:!0}),l.forEach(n),t=o(a),g=r(a,"MAIN",{class:!0});var c=i(g);d=r(c,"SECTION",{class:!0});var h=i(d);w=r(h,"H1",{class:!0});var f=i(w);$=C(f,"Bits: "),S=r(f,"SPAN",{class:!0});var u=i(S);I=C(u,s[0]),u.forEach(n),f.forEach(n),j=o(h),x=r(h,"H1",{class:!0});var v=i(x);O=C(v,"Combinations: "),R=r(v,"SPAN",{class:!0});var p=i(R);k=C(p,Ss),p.forEach(n),v.forEach(n),P=o(h),V=r(h,"WIRED-SLIDER",{min:!0,max:!0,value:!0,class:!0}),i(V).forEach(n),T=o(h),W=r(h,"SECTION",{class:!0});var m=i(W);F=r(m,"DIV",{class:!0});var E=i(F);G=r(E,"SPAN",{class:!0});var b=i(G);H=C(b,"On:"),b.forEach(n),_=o(E),z=r(E,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1),i(z).forEach(n),E.forEach(n),J=o(m),Q=r(m,"DIV",{class:!0});var B=i(Q);Y=r(B,"SPAN",{class:!0});var M=i(Y);Z=C(M,"Off:"),M.forEach(n),ss=o(B),es=r(B,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1),i(es).forEach(n),B.forEach(n),m.forEach(n),ts=o(h),as=r(h,"FOOTER",{class:!0});var y=i(as);ls=r(y,"P",{class:!0});var L=i(ls);cs=C(L,"Made with "),rs=r(L,"A",{href:!0,class:!0});var N=i(rs);is=C(N,"Svelte"),N.forEach(n),ns=C(L,", a "),os=r(L,"A",{href:!0,class:!0});var D=i(os);hs=C(D,"Rough"),D.forEach(n),fs=C(L,", "),us=r(L,"A",{href:!0,class:!0});var U=i(us);vs=C(U,"Wired"),U.forEach(n),gs=C(L,", and "),ds=r(L,"A",{href:!0,class:!0});var q=i(ds);ps=C(q,"Vite"),q.forEach(n),L.forEach(n),y.forEach(n),h.forEach(n),ms=o(c),Es=r(c,"ARTICLE",{class:!0});var K=i(Es);for(let s=0;s<Is.length;s+=1)Is[s].l(K);K.forEach(n),c.forEach(n),this.h()},h(){h(e,"href","https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap"),h(e,"rel","stylesheet"),h(e,"class","svelte-15i63ac"),h(S,"class","highlight svelte-15i63ac"),h(w,"class","svelte-15i63ac"),h(R,"class","highlight svelte-15i63ac"),h(x,"class","svelte-15i63ac"),M(V,"min","1"),M(V,"max","8"),M(V,"value","1"),M(V,"class","svelte-15i63ac"),h(G,"class","label svelte-15i63ac"),h(z,"viewBox","0 0 16 16"),h(z,"width","16"),h(z,"height","28"),h(z,"class","svelte-15i63ac"),h(F,"class","legend-item svelte-15i63ac"),h(Y,"class","label svelte-15i63ac"),h(es,"viewBox","0 0 16 16"),h(es,"width","16"),h(es,"height","28"),h(es,"class","svelte-15i63ac"),h(Q,"class","legend-item svelte-15i63ac"),h(W,"class","sidebar-legend svelte-15i63ac"),h(rs,"href","http://svelte.dev"),h(rs,"class","svelte-15i63ac"),h(os,"href","http://https://roughjs.com/"),h(os,"class","svelte-15i63ac"),h(us,"href","http://https://wiredjs.com/"),h(us,"class","svelte-15i63ac"),h(ds,"href","https://vitejs.dev/"),h(ds,"class","svelte-15i63ac"),h(ls,"class","svelte-15i63ac"),h(as,"class","svelte-15i63ac"),h(d,"class","control svelte-15i63ac"),h(Es,"class","bit-list svelte-15i63ac"),h(g,"class","svelte-15i63ac")},m(a,l){u(document.head,e),f(a,t,l),f(a,g,l),u(g,d),u(d,w),u(w,$),u(w,S),u(S,I),u(d,j),u(d,x),u(x,O),u(x,R),u(R,k),u(d,P),u(d,V),s[5](V),u(d,T),u(d,W),u(W,F),u(F,G),u(G,H),u(F,_),u(F,z),u(W,J),u(W,Q),u(Q,Y),u(Y,Z),u(Q,ss),u(Q,es),u(d,ts),u(d,as),u(as,ls),u(ls,cs),u(ls,rs),u(rs,is),u(ls,ns),u(ls,os),u(os,hs),u(ls,fs),u(ls,us),u(us,vs),u(ls,gs),u(ls,ds),u(ds,ps),u(g,ms),u(g,Es);for(let s=0;s<Is.length;s+=1)Is[s].m(Es,null);bs=!0,ws||($s=[y(V,"change",s[4]),v(s[3].call(null,z,!0)),v(s[3].call(null,es,!1))],ws=!0)},p(s,[e]){if((!bs||1&e)&&L(I,s[0]),(!bs||4&e)&&Ss!==(Ss=s[2].length+"")&&L(k,Ss),4&e){xs=s[2],m();for(let s=0;s<Is.length;s+=1)Is[s].r();Is=N(Is,e,Os,1,s,xs,js,Es,U,K,null,q);for(let s=0;s<Is.length;s+=1)Is[s].a();b()}},i(s){if(!bs){for(let s=0;s<xs.length;s+=1)p(Is[s]);bs=!0}},o(s){for(let e=0;e<Is.length;e+=1)E(Is[e]);bs=!1},d(a){n(e),a&&n(t),a&&n(g),s[5](null);for(let s=0;s<Is.length;s+=1)Is[s].d();ws=!1,D($s)}}}function J(s){let e=[];for(let a=0;a<Math.pow(2,s);a++){var t=[];for(let e=0;e<s;e++)a>>e&1?t.push(!0):t.push(!1);e.push(t)}return e=e.sort(((s,e)=>Q(s,!1)===Q(e,!1)?0:Q(s,!1)<Q(e,!1)?1:-1)),e}function Q(s,e){let t=0;return s.forEach((s=>s===e&&t++)),t}function X(s){let e="";return s.forEach((s=>{e+=!0===s?"1":"0"})),e}function Y(s,e,t){let a,l,c,r;return s.$$.update=()=>{1&s.$$.dirty&&t(2,l=J(a))},t(0,a=1),[a,r,l,function(s,e){c=S.svg(s);const t=c.rectangle(0,0,16,16,{fill:!0===e?"tomato":"",stroke:"tomato",roughness:1,hachureGap:4,fillWeight:1.5});s.appendChild(t)},function(){t(0,a=r.value),t(2,l=[...J(a)])},function(s){V[s?"unshift":"push"]((()=>{r=s,t(1,r)}))}]}new class extends s{constructor(s){super(),e(this,s,Y,z,t,{})}}({target:document.body});
