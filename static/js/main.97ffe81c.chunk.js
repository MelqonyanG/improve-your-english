(this["webpackJsonpimprove-your-english"]=this["webpackJsonpimprove-your-english"]||[]).push([[0],{80:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(14),i=a(2),s=a(66),u=a(131),d=a(156),m=a(149),h=a(147),p=a(92),g=a(148),f=a(4),w=a(145),v=a(144),b=a(67),E=a(154),x=a(54),y=a.n(x),k=a(65),C=a.n(k),O=a(151),j=a(155),S=a(146),I=a(143),B=a(18),W=a(35),P=a(21),A=a(42),M=a(43),N=a(51),T=a(133),_=a(135),D=a(139),H=a(138),L=a(136),R=a(153),F=a(137);var q=Object(u.a)({root:{width:"100%"},tableWrapper:{maxHeight:407,overflow:"auto"}});function G(e){var t=q(),a=r.a.useState(0),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.a.useState(10),s=Object(c.a)(i,2),u=s[0],d=s[1],m=e.words,h=e.direction,p=function(e,t,a,n){for(var r=[],o=0;o<e.length;o+=1){var l=t?e[o][0]:e[o][1],c=t?e[o][1]:e[o][0],i="".concat(c," * ").concat(l),s=a.includes(i)?"wrong":n.includes(i)?"correct":"not practiced";r.push({arm:l,eng:c,correctness:s})}return r}(m,h,e.wrong,e.correct),g=function(e){return e?[{id:"arm",label:"Armenian",minWidth:200},{id:"eng",label:"English",minWidth:200},{id:"correctness",label:"Correctness",minWidth:200}]:[{id:"eng",label:"English",minWidth:200},{id:"arm",label:"Armenian",minWidth:200},{id:"wrocorrectnessng",label:"Correctness",minWidth:200}]}(h),f=u-Math.min(u,p.length-o*u);return r.a.createElement(T.a,{className:t.root},r.a.createElement("div",{className:t.tableWrapper},r.a.createElement(_.a,{stickyHeader:!0},r.a.createElement(L.a,null,r.a.createElement(F.a,null,g.map((function(e){return r.a.createElement(H.a,{key:e.label,align:e.align,style:{minWidth:e.minWidth}},r.a.createElement("b",null,e.label))})))),r.a.createElement(D.a,null,p.slice(o*u,o*u+u).map((function(e,t){return r.a.createElement(F.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t},g.map((function(t){var a=e[t.id];return r.a.createElement(H.a,{key:"cell".concat(t.label),align:t.align},t.format&&"number"===typeof a?t.format(a):a)})))})),f>0&&r.a.createElement(F.a,{style:{height:53*f}},r.a.createElement(H.a,{colSpan:6}))))),r.a.createElement(R.a,{rowsPerPageOptions:[10,25,100],component:"div",count:p.length,rowsPerPage:u,page:o,backIconButtonProps:{"aria-label":"previous page"},nextIconButtonProps:{"aria-label":"next page"},onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){d(+e.target.value),l(0)}}))}var U=a(62),z=a.n(U),K=a(63),V=a.n(K),J=a(64),X=a.n(J),$=a(152),Q=Object(f.a)({root:{"& label.Mui-focused":{color:"#8ED0B1"},"& .MuiInput-underline:after":{borderBottomColor:"#8ED0B1"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#8ED0B1"},"&:hover fieldset":{borderColor:"#8ED0B1"},"&.Mui-focused fieldset":{borderColor:"#8ED0B1"}}}})($.a),Y=function(e){function t(e){var a;return Object(W.a)(this,t),(a=Object(A.a)(this,Object(M.a)(t).call(this,e))).handleChange=function(e){"Enter"!==e.key&&(document.getElementById("answer").style.color="black",a.setState({answer:e.target.value}))},a.hint=function(){for(var e=a.state,t=e.rightAnswer,n=e.answered,r="",o=0;o<t.length;o+=1)if(!n.includes(t[o])){r=t[o];break}a.setState({answer:r})},a.changeIndex=function(){var e=a.props.words,t=parseInt(document.getElementById("newIndex").value,10)-1;t>e.length||a.setState({editIndex:!1,index:t,answer:"",answered:[],rightAnswer:e[t][1].split(" | ")})},a.handleKeyPress=function(e){if("Enter"===e.key){var t=a.state,n=t.rightAnswer,r=t.answer,o=t.answered,l=t.index,c=a.props,i=c.words,s=c.addWord,u=c.direction,d=i[l][0];if(n.includes(r)&&!o.includes(r)){o.push(r);var m=!1;if(n.length<=o.length){var h=l<i.length-1?l+1:0;a.setState({index:h,answer:"",answered:[],rightAnswer:i[h][1].split(" | ")}),m=!0}else a.setState({answered:o,answer:""});s("".concat(u?r:d," * ").concat(u?d:r),m)}else if(n.includes(r)&&o.includes(r))document.getElementById("answer").style.color="orange";else{document.getElementById("answer").style.color="red";for(var p=n.filter((function(e){return!o.includes(e)})),g=0;g<p.length;g+=1){s("".concat(u?p[g]:d," * ").concat(u?d:p[g]),!1)}}}},a.state={index:0,answer:"",rightAnswer:e.words[0][1].split(" | "),answered:[],helperText:"",editIndex:!1},a}return Object(N.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.words,o=t.direction,l=this.state,c=l.index,i=l.answer,s=l.rightAnswer,u=l.answered,d=l.helperText,m=l.editIndex;return r.a.createElement("div",null,r.a.createElement(T.a,{className:a.root},0===n.length?r.a.createElement(p.a,{variant:"h5",component:"h3"},"No matching words."):r.a.createElement("div",null,r.a.createElement(v.a,{variant:"text",size:"large",className:a.button,endIcon:m?r.a.createElement(z.a,{onClick:function(){e.setState({editIndex:!1})}}):r.a.createElement(V.a,{onClick:function(){e.setState({editIndex:!0})}})},m?r.a.createElement($.a,{id:"newIndex",label:"Max 15",defaultValue:c+1,className:a.textField,variant:"outlined",style:{width:"70px"}}):"".concat(c+1,"."),m&&r.a.createElement(X.a,{onClick:this.changeIndex})),r.a.createElement(w.a,{container:!0,spacing:2},r.a.createElement(w.a,{item:!0,xs:5},r.a.createElement(p.a,{variant:"h4",component:"h3",align:"right"},n[c][0])),r.a.createElement(w.a,{item:!0,xs:7},r.a.createElement(p.a,{variant:"h6",component:"h3",align:"left"},"| ".concat(u.join(" | "))))),r.a.createElement(Q,{id:"answer",label:"".concat(o?"English":"Armenian"," ").concat(u.length+1," - ").concat(s.length),className:a.textField,value:i,onChange:this.handleChange,onKeyPress:this.handleKeyPress,margin:"normal",variant:"outlined",autoComplete:"off",autoFocus:!0,helperText:d}),r.a.createElement("br",null),r.a.createElement(v.a,{color:"primary",size:"small",className:a.button,onClick:this.hint},"Hint"))))}}]),t}(r.a.Component),Z=Object(f.a)({root:{textAlign:"center"},textField:{width:"50%"},button:{marginLeft:"48%"}})(Y);var ee=function(e){function t(e){var a;return Object(W.a)(this,t),(a=Object(A.a)(this,Object(M.a)(t).call(this,e))).addWord=function(e,t){var n=a.state,r=n.wrong,o=n.correct;t?(a.setState({update:!0}),o.includes(e)||(o.push(e),a.setState({correct:o})),r.includes(e)&&(r.pop(r.indexOf(e)),a.setState({wrong:r}))):(a.setState({update:!1}),r.includes(e)||(r.push(e),a.setState({wrong:r})),o.includes(e)&&(o.pop(o.indexOf(e)),a.setState({correct:o})))},a.state={all:[],wrong:[],correct:[],update:!0},a}return Object(N.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.level,a=new XMLHttpRequest;a.open("GET","https://melqonyang.github.io/improve-your-english/words/".concat(t,".txt"),!0),a.send(null),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status&&1!==a.getResponseHeader("Content-Type").indexOf("text")){var t=a.responseText.split("\n");e.setState({all:t}),document.getElementById("wordsCount").innerHTML="(".concat(t.length-1," words)")}}}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;if(this.setState({update:!0}),this.props.level!==e.level){var a=e.level,n=new XMLHttpRequest;n.open("GET","https://melqonyang.github.io/improve-your-english/words/".concat(a,".txt"),!0),n.send(null),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status&&1!==n.getResponseHeader("Content-Type").indexOf("text")){var e=n.responseText.split("\n");t.setState({all:e}),document.getElementById("wordsCount").innerHTML="(".concat(e.length," words)")}}}}},{key:"shouldComponentUpdate",value:function(e,t){return!(!t.update&&"show"!==e.mode)}},{key:"render",value:function(){var e=this.props,t=e.mode,a=e.direction,n=e.count,o=e.order,l=this.state[n],c=this.state,i=c.correct,s=c.wrong;return l=function(e,t){for(var a=[],n=0;n<e.length;n+=1)if(e[n].trim().length>0){var r=e[n].split("*")[1].trim(),o=e[n].split("*")[0].trim();if(t){for(var l=o,c=0;c<e.length;c+=1)e[c].trim().length>0&&r===e[c].split("*")[1].trim()&&!l.includes(e[c].split("*")[0].trim())&&(l="".concat(l," | ").concat(e[c].split("*")[0].trim()));a.push([r,l])}else{for(var i=r,s=0;s<e.length;s+=1)e[s].trim().length>0&&o===e[s].split("*")[0].trim()&&!i.includes(e[s].split("*")[1].trim())&&(i="".concat(i," | ").concat(e[s].split("*")[1].trim()));a.push([o,i])}}for(var u=[],d=[],m=0;m<a.length;m+=1)d.includes(a[m][0])||(d.push(a[m][0]),u.push(a[m]));return u}(l,a),l=function(e,t){if("alphabetical"===t)e.sort((function(e,t){return e[0].toLowerCase()>t[0].toLowerCase()?1:t[0].toLowerCase()>e[0].toLowerCase()?-1:0}));else if("random"===t)for(var a,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),a=e[r-=1],e[r]=e[n],e[n]=a;return e}(Object(B.a)(l),o),r.a.createElement("div",null,"show"===t?r.a.createElement(G,{words:l,direction:a,correct:i,wrong:s}):r.a.createElement(Z,{words:l,direction:a,addWord:this.addWord}))}}]),t}(r.a.Component);var te=Object(f.a)({root:{color:"#8ED0B1","&$checked":{color:"#8ED0B1"}},checked:{}})((function(e){return r.a.createElement(O.a,Object.assign({color:"default"},e))})),ae=Object(u.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},menu:{backgroundImage:"linear-gradient(#1f4037, #99f2c8)",color:"white"},button:{margin:e.spacing(1),backgroundImage:"linear-gradient(#1f4037, #99f2c8)",color:"white"}}})),ne=["show all words","show only wrong words","show only correct words","practice all words","practice only wrong words","practice only correct words"];function re(e){var t=ae(),a=e.level,o=Object(n.useState)(!0),l=Object(c.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)("show"),d=Object(c.a)(u,2),m=d[0],h=d[1],g=Object(n.useState)("all"),f=Object(c.a)(g,2),x=f[0],k=f[1],O=Object(n.useState)("random"),B=Object(c.a)(O,2),W=B[0],P=B[1],A=r.a.useState(null),M=Object(c.a)(A,2),N=M[0],T=M[1],_=r.a.useState(null),D=Object(c.a)(_,2),H=D[0],L=D[1],R=function(e,t){e.stopPropagation(),"show"===t?T(e.currentTarget):L(e.currentTarget)},F=function(e){"show"===e?T(null):L(null)},q=function(e){switch(e<3?(h("show"),F("show")):(h("practice"),F("practice")),e){case 0:case 3:k("all");break;case 1:case 4:k("wrong");break;case 2:case 5:k("correct")}};return r.a.createElement("div",{className:t.root},r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"h3",component:"h3",gutterBottom:!0,align:"center"},function(e){var t=e.split("_");return t[0].toUpperCase()+(t[1]?" ".concat(t[1]):"")}(a)," ",r.a.createElement("span",{id:"wordsCount",style:{fontSize:15}}),r.a.createElement(v.a,{variant:"contained",className:t.button,onClick:function(){s(!i)}},i?"Arm":"Eng"," ",r.a.createElement(C.a,null)," ",i?"Eng":"Arm"))),r.a.createElement(w.a,{item:!0,xs:"show"===m?8:4},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,className:t.menu,onClick:function(){return h("show")},endIcon:r.a.createElement(y.a,{onClick:function(e){R(e,"show")}}),style:{height:"show"===m?"70px":"50px",marginTop:"show"===m?"0px":"10px"}},"show"===m?"Show ".concat(x," in ").concat(W," order"):"Show"),r.a.createElement(b.a,{id:"simple-menu",anchorEl:N,keepMounted:!0,open:Boolean(N),onClose:function(){return F("show")}},ne.map((function(e,t){return"show"===e.split(" ")[0]?r.a.createElement(E.a,{key:e,onClick:function(){return q(t)}},e):null})))),r.a.createElement(w.a,{item:!0,xs:"show"===m?4:8},r.a.createElement(v.a,{variant:"contained",onClick:function(){return h("practice")},fullWidth:!0,className:t.menu,endIcon:r.a.createElement(y.a,{onClick:function(e){R(e,"practice")}}),style:{height:"show"===m?"50px":"70px",marginTop:"show"===m?"10px":"0px"}},"practice"===m?"Practice ".concat(x," in ").concat(W," order"):"Practice"),r.a.createElement(b.a,{id:"simple-menu",anchorEl:H,keepMounted:!0,open:Boolean(H),onClose:function(){return F("practice")}},ne.map((function(e,t){return"practice"===e.split(" ")[0]?r.a.createElement(E.a,{key:e,onClick:function(){return q(t)}},e):null})))),r.a.createElement(w.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(I.a,null,r.a.createElement(j.a,{"aria-label":"position",name:"position",value:W,onChange:function(e){P(e.target.value)},row:!0},r.a.createElement(S.a,{value:"random",control:r.a.createElement(te,null),label:"Random order",labelPlacement:"start"}),r.a.createElement(S.a,{value:"alphabetical",control:r.a.createElement(te,null),label:"Alphabetical order",labelPlacement:"start"}),r.a.createElement(S.a,{value:"your",control:r.a.createElement(te,null),label:"My order",labelPlacement:"start"})))),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(ee,{level:a,mode:m,direction:i,count:x,order:W}))))}var oe=Object(s.a)({typography:{useNextVariants:!0},palette:{primary:{main:"#8ED0B1"},secondary:{main:"#030303"},contrastThreshold:3,tonalOffset:.2}}),le=["level_1","level_2","level_3","level_4","level_5","level_6","phrases","irregular_verbs","another","all"];function ce(e){var t=e.split("_");return t[0].toUpperCase()+(t[1]?" ".concat(t[1]):"")}function ie(e){var t=e.children,a=e.value,n=e.index,o=Object(i.a)(e,["children","value","index"]);return r.a.createElement(p.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel-".concat(n),"aria-labelledby":"vertical-tab-".concat(n)},o),r.a.createElement(g.a,{p:3},t))}var se=Object(u.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex",height:224},tabs:{borderRight:"1px solid ".concat(e.palette.divider),backgroundImage:"linear-gradient(#1f4037, #99f2c8)",color:"white",height:"100vh",minWidth:"17%"}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){var e=se(),t=r.a.useState(0),a=Object(c.a)(t,2),n=a[0],o=a[1];return r.a.createElement(d.a,{theme:oe},r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{orientation:"vertical",variant:"scrollable",value:n,onChange:function(e,t){o(t)},"aria-label":"Vertical tabs example",className:e.tabs},le.map((function(e,t){return r.a.createElement(h.a,Object.assign({key:e,label:ce(e)},function(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}(t)))}))),r.a.createElement(ie,{value:n,index:n},r.a.createElement(re,{level:le[n]}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[80,1,2]]]);
//# sourceMappingURL=main.97ffe81c.chunk.js.map