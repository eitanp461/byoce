(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a(263)},124:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),i=(a(124),a(295)),c=a(296),s=a(266),m=Object(n.createContext)({send:null}),u=function(e){var t;window.addEventListener("message",function(a){console.log("handling message from host ",a),"__hello"===a.type?(console.log("recieved target from host: ",a.domain),t=a.domain):(console.log("delegating to messageHandler"),e(a))},!1);return{send:function(e){t?(console.log("sending message to parent: ",e),window.parent.postMessage(JSON.stringify({data:e}),t)):console.log("target is not defined yet")}}},d=a(298),g=a(287),h=a(288),f=function(){return r.a.createElement(d.a,{position:"static",color:"default"},r.a.createElement(g.a,null,r.a.createElement(h.a,{variant:"h6",color:"inherit"},"Cloudinary Video Producer")))},p=a(289),E=a(290),v=a(291),w=a(292),b=a(293),x=a(106),y=a.n(x),X=[{img:"https://eitanpeer-res.cloudinary.com/sample",title:"Image1",author:"author11"},{img:"https://eitanpeer-res.cloudinary.com/abcdeee",title:"Image2",author:"author22"},{img:"https://eitanpeer-res.cloudinary.com/rhpim0vkntffyvw6ltaf",title:"Image3",author:"author33"}],O=Object(p.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.primary.light},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}});var N=function(){var e=O();return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,{className:e.gridList,cols:2.5,spacing:3},X.map(function(t){return r.a.createElement(v.a,{key:t.img},r.a.createElement("img",{src:t.img,alt:t.title}),r.a.createElement(w.a,{title:t.title,classes:{root:e.titleBar,title:e.title},actionIcon:r.a.createElement(b.a,null,r.a.createElement(y.a,{className:e.title}))}))})))},j=a(72),k=Object(s.a)({fullWidth:{width:"100%"}}),C=function(e){e.startOffset,e.endOffset;var t=k();return r.a.createElement(j.CloudinaryContext,{cloudName:"demo"},r.a.createElement("div",null,r.a.createElement(j.Video,{publicId:"dog",controls:!0,className:t.fullWidth})))},H=a(107),I=a(108),W=a(110),B=a(109),S=a(111),G=a(4),J=a(294),L=function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(W.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).state={value:50},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(S.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{id:"label"},"Slider label"),r.a.createElement(J.a,{className:e.slider,value:t,"aria-labelledby":"label",onChange:this.handleChange}))}}]),t}(r.a.Component),P=Object(G.a)({root:{width:300},slider:{padding:"22px 0px"}})(L),V=Object(s.a)({maxHeight:{maxHeight:"100%"},fullHeight:{height:"100%"},flex:{flex:1}}),_=function(){var e=V();return r.a.createElement(i.a,{container:!0,wrap:"nowrap",direction:"column",className:e.fullHeight},r.a.createElement(i.a,{container:!0,alignItems:"center",className:e.fullHeight},r.a.createElement(c.a,{flex:1,border:1,alignSelf:"stretch"},r.a.createElement(P,null)),r.a.createElement(c.a,{flex:1,border:1},r.a.createElement(C,{className:e.maxHeight}))),r.a.createElement(N,null))},A=(a(262),Object(s.a)({fullHeight:{height:"100%"},flexGrow:{flex:1}}));var M=function(){var e=A(),t=u(function(){return console.log("XXXXXXXXXXXXXXXX")}).send;return r.a.createElement(c.a,{height:"100%"},r.a.createElement(m.Provider,{value:{send:t}},r.a.createElement(i.a,{wrap:"nowrap",direction:"column",container:!0,className:(e.flexGrow,e.fullHeight)},r.a.createElement(i.a,{item:!0},r.a.createElement(f,null)),r.a.createElement(i.a,{item:!0,className:e.flexGrow},r.a.createElement(_,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[119,1,2]]]);
//# sourceMappingURL=main.84344c93.chunk.js.map