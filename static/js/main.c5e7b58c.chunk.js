(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{10:function(e,t,a){e.exports={imgGrid:"ImageLayout_imgGrid__CTAEi",imgWrap:"ImageLayout_imgWrap__3fJhO"}},17:function(e,t,a){e.exports={progressBar:"progressBar_progressBar__3n-sl"}},18:function(e,t,a){e.exports={backdrop:"ModalWindow_backdrop__xtyMn"}},19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=(a(24),a(3)),o=a(2),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement(o.a.h1,{initial:{x:"-100vw"},animate:{x:0},transition:{delay:1,duration:1}},"InstaGram gallery"),r.a.createElement(o.a.h2,{initial:{x:"100vw"},animate:{x:0},transition:{delay:2,duration:2}},"Nick Khoroshkov ",r.a.createElement("strong",null,"Photography")),r.a.createElement("p",null,"Simple instagram look photo gallery"))},u=function(e){var t=e.errorText;return r.a.createElement("div",{className:"erorrMessage"},r.a.createElement("p",null,t))},m=function(e){var t=e.fileName;return r.a.createElement("div",{className:"output"},r.a.createElement("p",null,t))},p=a(9),d=a.n(p),f=a(16),g=a(5);a(32),a(26);g.initializeApp({apiKey:"AIzaSyAcZ53tZlEw4L5gMRW-_VQXsAL8B51Y4-E",authDomain:"instagram-photogallery.firebaseapp.com",databaseURL:"https://instagram-photogallery.firebaseio.com",projectId:"instagram-photogallery",storageBucket:"instagram-photogallery.appspot.com",messagingSenderId:"673344297014",appId:"1:673344297014:web:f8ec795574cb39cb6ca097"});var v=g.storage(),E=g.firestore(),y=g.firestore.FieldValue.serverTimestamp,b=function(e){var t=Object(n.useState)(0),a=Object(c.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(null),o=Object(c.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(null),p=Object(c.a)(m,2),g=p[0],b=p[1];return Object(n.useEffect)((function(){var t=v.ref(e.name),a=E.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;l(t)}),(function(e){u(e)}),Object(f.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=y(),a.add({url:n,createdAt:r}),b(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:g,error:s}},h=a(17),_=a.n(h),j=function(e){var t=e.file,a=e.setFile,l=b(t),i=l.url,c=l.progress;return Object(n.useEffect)((function(){i&&a(null)}),[i,a]),r.a.createElement(o.a.div,{className:_.a.progressBar,initial:{width:0},animate:{width:c+"%"}})},O=a(7),w=a.n(O),k=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(null),s=Object(c.a)(i,2),p=s[0],d=s[1],f=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement(o.a.div,{className:w.a.parent,whileHover:{scale:1.1}},r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&f.includes(t.type)?(l(t),d(" ")):(l(null),d("Please select an image file (.jpeg or .png format only)"))}}),r.a.createElement(o.a.div,{layout:!0,className:w.a.child}))),r.a.createElement("div",{className:w.a.output},p&&r.a.createElement(u,{errorText:p}),a&&r.a.createElement(m,{fileName:a.name}),a&&r.a.createElement(j,{file:a,setFile:l})))},S=a(11),x=function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){var t=E.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(S.a)(Object(S.a)({},e.data()),{},{id:e.id}))})),l(t)}));return function(){return t()}}),[e]),{docs:r}},I=a(10),N=a.n(I),B=function(e){var t=e.setSelectedImg,a=x("images").docs;return console.log(a),r.a.createElement("div",{className:N.a.imgGrid},a&&a.map((function(e){return r.a.createElement(o.a.div,{layout:!0,initial:{y:"100vw"},animate:{y:0},transition:{delay:2,duration:2},className:N.a.imgWrap,key:e.id,onClick:function(){return t(e.url)}},r.a.createElement(o.a.img,{src:e.url,alt:"",initial:{opacity:0},animate:{opacity:1},whileHover:{opacity:1,scale:1.1}}))})))},L=a(18),A=a.n(L),F=function(e){var t=e.selectedImg,a=e.setSelectedImg,l=function e(t){27===t.keyCode&&(t.preventDefault(),a(null),window.removeEventListener("keyup",e,!1))};return Object(n.useEffect)((function(){window.addEventListener("keyup",l,!1)})),r.a.createElement(o.a.div,{className:A.a.backdrop,onClick:function(e){e.target.classList.contains("ModalWindow_backdrop__xtyMn")&&(console.log("click"),a(null))},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(o.a.img,{src:t,alt:"",initial:{y:"-100vh"},animate:{y:0}}))};var M=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(k,null),r.a.createElement(B,{setSelectedImg:l}),a&&r.a.createElement(F,{selectedImg:a,setSelectedImg:l}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))},7:function(e,t,a){e.exports={output:"uploadForm_output__24SuZ",error:"uploadForm_error__1vBLy",parent:"uploadForm_parent__qKAeF",child:"uploadForm_child__2TZyR"}}},[[19,1,2]]]);
//# sourceMappingURL=main.c5e7b58c.chunk.js.map