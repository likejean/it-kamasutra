(this["webpackJsonpit-kamasutra"]=this["webpackJsonpit-kamasutra"]||[]).push([[5],{383:function(e,t,s){"use strict";var a=s(8),i=s(49),n=s(50),c=s(52),r=s(51),o=s(0),j=s.n(o),d=s(26),l=s(43),u=s(3),b=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){var t=function(t){Object(c.a)(o,t);var s=Object(r.a)(o);function o(){return Object(i.a)(this,o),s.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(a.a)({},this.props)):Object(u.jsx)(d.a,{to:"/login"})}}]),o}(j.a.Component);return Object(l.b)(b)(t)}},385:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1kKcW",dialogItems:"Dialogs_dialogItems__3kBUx",active:"Dialogs_active__5CEoM",dialog:"Dialogs_dialog__1QFZr",message:"Dialogs_message__23ICW"}},403:function(e,t,s){"use strict";s.r(t);var a=s(186),i=s(8),n=(s(0),s(385)),c=s.n(n),r=s(376),o=s(57),j=s(3);var d=function(e){var t=e.id,s=e.name,a="/dialogs/"+t;return Object(j.jsxs)("div",{className:c.a.dialog,children:[Object(j.jsx)(r.a,{}),Object(j.jsx)(o.b,{to:a,children:Object(j.jsx)("span",{children:s})})]})};var l=function(e){var t=e.message;return Object(j.jsx)("div",{className:c.a.message,children:t})},u=s(375),b=s(203),m=s(79),g=s.n(m),O=s(187),h=s(103),f=s(66),v=Object(f.b)(30),x=function(e){return Object(j.jsx)("form",{onSubmit:e.handleSubmit,children:Object(j.jsxs)(u.b,{direction:"vertical",children:[Object(j.jsx)("div",{className:g.a.formItem,children:Object(j.jsx)(O.a,{validate:[f.g,v],id:"newMessageBody",name:"newMessageBody",component:h.a})}),Object(j.jsx)("div",{className:g.a.formItem,children:Object(j.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})},p=s(188),_=Object(p.a)({form:"message"})(x),k=function(e){return Object(j.jsxs)("div",{className:c.a.dialogs,children:[Object(j.jsx)("div",{className:c.a.dialogItems,children:e.dialogs.map((function(e){return Object(j.jsx)(d,Object(i.a)({},e),e.id)}))}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:e.messages.map((function(e){return Object(j.jsx)(l,Object(i.a)({},e),e.id)}))}),Object(j.jsx)(_,{onSubmit:function(t){var s=t.newMessageBody;return e.onSendMessageClick(s)}})]})]})},y=s(43),I=s(383),M=s(25),N=function(e){return e.dialogsPage.dialogs},S=function(e){return e.dialogsPage.messages};t.default=Object(M.d)(Object(y.b)((function(e){return{dialogs:N(e),messages:S(e)}}),{onSendMessageClick:a.b}),I.a)(k)}}]);
//# sourceMappingURL=5.73ea595f.chunk.js.map