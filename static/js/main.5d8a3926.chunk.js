(this["webpackJsonpit-kamasutra"]=this["webpackJsonpit-kamasutra"]||[]).push([[1],{100:function(e,t,n){"use strict";n(0);var r=n(147),a=n.n(r),s=n(198),c=n(361),i=n(3);t.a=function(e){var t=e.comment,n=e.size;return Object(i.jsxs)("div",{className:a.a.usersLoader,children:[Object(i.jsx)(s.a,{justify:"center",align:"center",children:Object(i.jsx)(c.a,{size:n})}),Object(i.jsx)(s.a,{justify:"center",align:"center",children:Object(i.jsx)("span",{children:t})})]})}},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"e",(function(){return m}));var r=n(8),a=n(49),s=n(50),c=n(52),i=n(51),u=n(0),o=n(144),l=n(368),d=n(369),j=n(143),b=n(3),f=o.a.TextArea,p=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.input,n=e.meta,a=n.visited,s=n.error;return Object(b.jsxs)("div",{children:[Object(b.jsx)(o.a,Object(r.a)(Object(r.a)({},t),{},{placeholder:"input your email",size:"large",bordered:!(a&&s),style:{width:350,borderRadius:a&&s&&"3px",border:a&&s&&"4px solid red"}})),a&&s&&Object(b.jsx)("p",{style:{color:"red"},children:s})]})}}]),n}(u.Component),O=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.input,n=e.meta,a=n.visited,s=n.error;return Object(b.jsxs)("div",{children:[Object(b.jsx)(o.a.Password,Object(r.a)(Object(r.a)({},t),{},{placeholder:"input password",size:"large",bordered:!(a&&s),style:{width:350,borderRadius:a&&s&&"3px",border:a&&s&&"4px solid red"},iconRender:function(e){return e?Object(b.jsx)(d.a,{}):Object(b.jsx)(j.a,{})}})),a&&s&&Object(b.jsx)("p",{style:{color:"red"},children:s})]})}}]),n}(u.Component),h=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.input.onChange;return Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{onChange:e,children:"Remember Me"})})}}]),n}(u.Component),g=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.input,n=e.meta,a=n.visited,s=n.error;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,Object(r.a)(Object(r.a)({},t),{},{placeholder:"enter your new message",bordered:!(a&&s),style:{border:a&&s&&"4px solid red"},showCount:!0,maxLength:1e3})),a&&s&&Object(b.jsx)("p",{style:{color:"red"},children:s})]})}}]),n}(u.Component),m=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.input,n=e.meta,a=n.error,s=n.visited;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,Object(r.a)(Object(r.a)({},t),{},{bordered:!(s&&a),style:{border:s&&a&&"4px solid red"},placeholder:"enter your new post",showCount:!0,maxLength:1e3})),s&&a&&Object(b.jsx)("p",{style:{color:"red"},children:a})]})}}]),n}(u.Component)},115:function(e,t,n){e.exports={header:"Header_header__2bluT",title:"Header_title__1d8BZ",loginBlock:"Header_loginBlock__21Esu"}},147:function(e,t,n){e.exports={users:"Users_users__oAaMh",usersLoader:"Users_usersLoader__1kOOz",title:"Users_title__1beAH",pagination:"Users_pagination__3zrO9"}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return m}));var r=n(20),a=n.n(r),s=n(31),c=n(8),i=n(33),u="ADD_POST",o="DELETE_POST",l="SET_USER_PROFILE",d="SET_STATUS",j="TOGGLE_IS_FETCHING_STATUS",b={posts:[{id:1,message:"Great! Samurai 2.0!",likes:24},{id:2,message:"I love it!!!",likes:45},{id:3,message:"This tutorial is awesome!",likes:452}],profile:null,isStatusFetching:!1,status:""},f=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},O=function(e){return{type:j,isStatusFetching:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getUserProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r().profilePage.isStatusFetching||n(O(!0)),t.next=4,i.b.getStatus(e);case 4:return s=t.sent,n(p(s.data)),t.next=8,n(O(!1));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r().profilePage.isStatusFetching||n(O(!0)),t.next=4,i.b.updateStatus(e);case 4:return 0===t.sent.data.resultCode&&n(p(e)),t.next=8,n(O(!1));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:e.posts.length+1,message:t.newPostText,likes:1};return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.concat(n)});case o:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case j:return Object(c.a)(Object(c.a)({},e),{},{isStatusFetching:t.isStatusFetching});case l:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}}},186:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(204),a=n(8),s="SEND_MESSAGE",c={dialogs:[{id:1,name:"Sergey"},{id:2,name:"Olesia"},{id:3,name:"Sofiya"},{id:4,name:"Aleks"},{id:5,name:"Sveta"},{id:6,name:"Roman"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your life going"},{id:3,message:"Great! Never been better!"},{id:4,message:"That's so cool!"},{id:5,message:"Really!?"},{id:6,message:"Of course!"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.messages.length+1,message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},190:function(e,t,n){"use strict";n.d(t,"e",(function(){return k})),n.d(t,"d",(function(){return T})),n.d(t,"a",(function(){return P})),n.d(t,"c",(function(){return U})),n.d(t,"f",(function(){return A}));var r=n(20),a=n.n(r),s=n(31),c=n(8),i=n(33),u=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(s(n,!0)),e.next=3,c(n);case 3:0===e.sent.resultCode&&(t(r(n)),t(s(0,!1)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a,s){return e.apply(this,arguments)}}(),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),r):e}))},l="FOLLOW",d="UNFOLLOW",j="SET_USERS",b="SET_FRIENDS",f="SET_CURRENT_PAGE",p="SET_TOTAL_USERS_COUNT",O="TOGGLE_IS_FETCHING",h="FOLLOWING_IN_PROGRESS",g="TOGGLE_FRIENDS_FILTER",m={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:{userId:0,inProgress:!1},friendsOnly:!1},v=function(e){return{type:l,userId:e}},x=function(e){return{type:d,userId:e}},y=function(e){return{type:j,users:e}},_=function(e){return{type:g,status:e}},w=function(e){return{type:b,friends:e}},S=function(e){return{type:f,currentPage:e}},N=function(e){return{type:p,usersCount:e}},E=function(e){return{type:O,isFetching:e}},I=function(e,t){return{type:h,followingInProgress:{userId:e,toggleMode:t}}},k=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r,s){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s().usersPage.friendsOnly&&r(_(!1)),r(E(!0)),n.next=5,i.c.getUsers(e,t);case 5:c=n.sent,r(E(!1)),r(y(c.items)),r(N(c.totalCount));case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},T=function(e,t,n){return function(){var r=Object(s.a)(a.a.mark((function r(s,c){var u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c().usersPage.friendsOnly||s(_(!0)),s(E(!0)),r.next=5,i.c.getFriends(e,t,n);case 5:u=r.sent,s(E(!1)),s(w(u.items)),s(N(u.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},P=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r,s){var c,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(S(e)),r(E(!0)),s().usersPage.friendsOnly){n.next=11;break}return n.next=6,i.c.getUsers(e,t);case 6:c=n.sent,r(E(!1)),r(y(c.items)),n.next=16;break;case 11:return n.next=13,i.c.getFriends(e,t,!0);case 13:u=n.sent,r(E(!1)),r(w(u.items));case 16:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.c.followUser.bind(e),t.next=3,u(n,e,v,I,r);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.c.unfollowUser.bind(e),t.next=3,u(n,e,x,I,r);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case d:return Object(c.a)(Object(c.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case j:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case b:return Object(c.a)(Object(c.a)({},e),{},{users:t.friends});case f:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case g:return Object(c.a)(Object(c.a)({},e),{},{friendsOnly:t.status});case p:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.usersCount});case O:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case h:return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:Object(c.a)(Object(c.a)({},e.followingInProgress),{},{userId:t.followingInProgress.userId,toggleMode:t.followingInProgress.toggleMode})});default:return e}}},237:function(e,t,n){},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(199),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"e225716d-224e-40c8-9200-e6ce59052ef6"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2?arguments[2]:void 0;return a.get("users?page=".concat(e,"&count=").concat(t,"&friend=").concat(n)).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getUserProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me/")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},366:function(e,t,n){"use strict";n.r(t);var r=n(36),a=n.n(r),s=n(49),c=n(50),i=n(52),u=n(51),o=n(0),l=n.n(o),d=(n(237),n(238),n(42)),j=n.n(d),b=n(57),f=n(26),p=n(373),O=n(374),h=n(376),g=n(377),m=n(378),v=n(379),x=n(380),y=n(381),_=n(382),w=n(3),S=[{id:0,path:"/profile",tabName:"Profile",icon:Object(w.jsx)(h.a,{})},{id:1,path:"/dialogs",tabName:"Messages",icon:Object(w.jsx)(g.a,{})},{id:2,path:"/news",tabName:"News",icon:Object(w.jsx)(m.a,{})},{id:3,path:"/music",tabName:"Music",icon:Object(w.jsx)(v.a,{})},{id:4,path:"/settings",tabName:"Settings",icon:Object(w.jsx)(x.a,{})},{id:5,path:"/users",tabName:"Users",icon:Object(w.jsx)(y.a,{})},{id:6,path:"/login",tabName:"Login",icon:Object(w.jsx)(_.a,{})}],N=Object(f.f)((function(e){var t,n=e.location.pathname.split("/");return t=n[0]||n[1]?S.find((function(e){return e.path==="/"+n[1]})).id.toString():"0",Object(w.jsxs)("div",{children:[Object(w.jsx)(p.a,{className:j.a.navbar,defaultSelectedKeys:["1"],selectedKeys:[t],children:S.map((function(e,t){return Object(w.jsx)(p.a.Item,{className:j.a.item,icon:e.icon,children:Object(w.jsx)(b.c,{to:e.path,activeClassName:j.a.active,children:e.tabName})},t)}))}),Object(w.jsxs)("div",{className:j.a.friends,children:[Object(w.jsx)("h2",{children:"Friends"}),Object(w.jsxs)("div",{className:j.a.avatars,children:[Object(w.jsx)("div",{className:j.a.avatar,children:Object(w.jsx)(O.a,{size:64,icon:Object(w.jsx)(h.a,{})})}),Object(w.jsx)("div",{className:j.a.avatar,children:Object(w.jsx)(O.a,{size:64,icon:Object(w.jsx)(h.a,{})})}),Object(w.jsx)("div",{className:j.a.avatar,children:Object(w.jsx)(O.a,{size:64,icon:Object(w.jsx)(h.a,{})})}),Object(w.jsx)("div",{className:j.a.avatar,children:Object(w.jsx)(O.a,{size:64,icon:Object(w.jsx)(h.a,{})})}),Object(w.jsx)("div",{className:j.a.avatar,children:Object(w.jsx)(O.a,{size:64,icon:Object(w.jsx)(h.a,{})})}),Object(w.jsx)("div",{className:j.a.avatar,children:Object(w.jsx)(O.a,{size:64,icon:Object(w.jsx)(h.a,{})})})]})]})]})}));var E=function(e){return Object(w.jsx)("div",{children:"News"})};var I=function(e){return Object(w.jsx)("div",{children:"Music"})},k=n(8),T=n(43),P=n(115),U=n.n(P),A=n(375),C=n(198),L=n(203),F=function(e){return Object(w.jsxs)("header",{className:U.a.header,children:[Object(w.jsx)("img",{alt:"eagle",src:"https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg"}),Object(w.jsx)(A.b,{children:Object(w.jsx)(C.a,{align:"center",children:Object(w.jsx)("h1",{className:U.a.title,children:"It-Kamasutra"})})}),Object(w.jsx)("div",{className:U.a.loginBlock,children:Object(w.jsx)(A.b,{size:"small",children:Object(w.jsxs)(C.a,{children:[e.isAuth&&Object(w.jsx)(O.a,{size:35,style:{backgroundColor:"#87d068"},icon:Object(w.jsx)(h.a,{})}),e.isAuth&&Object(w.jsx)("h2",{children:e.login}),e.isAuth?Object(w.jsx)(L.a,{onClick:e.logoutUser,children:"Logout"}):Object(w.jsx)(b.c,{to:"/login",children:Object(w.jsx)(L.a,{children:"Login"})})]})})})]})},z=n(20),M=n.n(z),R=n(31),G=n(33),D=n(81),H="SET_USER_AUTH",B={id:null,email:null,login:null,isAuth:!1},q=function(e,t,n,r){return{type:H,payload:{id:e,email:t,login:n,isAuth:r}}},Y=function(){return function(){var e=Object(R.a)(M.a.mark((function e(t){var n,r,a,s,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(q(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(k.a)(Object(k.a)({},e),t.payload);default:return e}},W=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(w.jsx)(F,Object(k.a)(Object(k.a)({},this.props),{},{isAuth:this.props.isAuth,login:this.props.login,logoutUser:this.props.logoutUser}))}}]),n}(o.Component),Z=Object(f.f)(Object(T.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutUser:function(){return function(){var e=Object(R.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.logout();case 2:0===e.sent.data.resultCode&&t(q(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(W)),J=n(25),X=n(372),Q=n(79),V=n.n(Q),$=n(187),ee=n(103),te=n(66),ne=Object(te.e)(2),re=Object(te.c)(30),ae=Object(te.f)(2),se=Object(te.d)(30),ce=function(e){var t=e.handleSubmit,n=e.error;return Object(w.jsx)(C.a,{justify:"center",children:Object(w.jsx)("form",{onSubmit:t,children:Object(w.jsxs)(A.b,{direction:"vertical",children:[Object(w.jsx)("div",{className:V.a.formItem,children:Object(w.jsx)($.a,{id:"email",validate:[te.g,se,ae,te.a],name:"email",component:ee.b})}),Object(w.jsx)("div",{className:V.a.formItem,children:Object(w.jsx)($.a,{id:"password",validate:[te.g,re,ne],name:"password",component:ee.d})}),Object(w.jsx)("div",{className:V.a.formItem,children:Object(w.jsx)($.a,{id:"checkbox",name:"rememberMe",component:ee.c})}),n&&Object(w.jsx)("div",{className:V.a.formSummaryError,children:n}),Object(w.jsx)("div",{className:V.a.formItem,children:Object(w.jsx)(L.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})},ie=n(188),ue=Object(ie.a)({form:"login"})(ce),oe=function(e){return e.isAuth?Object(w.jsx)(f.a,{to:"/profile"}):Object(w.jsxs)("div",{children:[e.isAuth?Object(w.jsx)(X.a,{message:"You are logged in",type:"success"}):Object(w.jsx)(X.a,{message:"You are not logged in",type:"warning"}),Object(w.jsx)(C.a,{justify:"center",children:Object(w.jsx)("h1",{children:"LOGIN"})}),Object(w.jsx)(ue,{onSubmit:function(t){var n=t.email,r=t.password,a=t.rememberMe;e.login(n,r,a)}})]})},le=Object(J.d)(Object(T.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(R.a)(M.a.mark((function r(a){var s,c;return M.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,G.a.login(e,t,n);case 3:0===(s=r.sent).data.resultCode?a(Y()):(c=s.data.messages.length>0?s.data.messages[0]:"Something went wrong...",a(Object(D.a)("login",{_error:c}))),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log("Error!");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}}))(oe),de="SET_INIT_SUCCESS",je={initialized:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(k.a)(Object(k.a)({},e),{},{initialized:!0});default:return e}},fe=n(100),pe=n(148),Oe=n(186),he={},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he;return e},me=n(190),ve=n(191),xe=n(202),ye=Object(J.c)({profilePage:pe.b,dialogsPage:Oe.a,usersPage:me.b,sidebar:ge,auth:K,app:be,form:ve.a.plugin({message:function(e,t){switch(t.type){case"SEND_MESSAGE":return;default:return e}},post:function(e,t){switch(t.type){case"ADD_POST":return;default:return e}},login:function(e,t){switch(t.type){case"SET_USER_AUTH":return;default:return e}}})}),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,we=Object(J.e)(ye,_e(Object(J.a)(xe.a)));window.store=we;var Se=we,Ne=function(e){return function(t){return Object(w.jsx)(l.a.Suspense,{fallback:Object(w.jsx)(fe.a,{comment:"Please, wait. Loading...",size:"large"}),children:Object(w.jsx)(e,Object(k.a)({},t))})}},Ee=l.a.lazy((function(){return n.e(5).then(n.bind(null,403))})),Ie=l.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,401))})),ke=l.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,402))})),Te=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){return this.props.authReady?Object(w.jsx)(b.b,{children:Object(w.jsxs)("div",{className:"app-wrapper",children:[Object(w.jsx)(Z,{}),Object(w.jsx)(N,{}),Object(w.jsxs)("div",{className:"app-wrapper-content",children:[Object(w.jsx)(f.b,{path:"/profile/:userId?",render:Ne(Ie)}),Object(w.jsx)(f.b,{path:"/dialogs",render:Ne(Ee)}),Object(w.jsx)(f.b,{path:"/users",render:Ne(ke)}),Object(w.jsx)(f.b,{path:"/news",component:function(){return Object(w.jsx)(E,{})}}),Object(w.jsx)(f.b,{path:"/music",component:function(){return Object(w.jsx)(I,{})}}),Object(w.jsx)(f.b,{path:"/login",component:function(){return Object(w.jsx)(le,{})}})]})]})}):Object(w.jsx)(fe.a,{size:"large",comment:"App is loading... Please, wait"})}}]),n}(o.Component),Pe=Object(J.d)(f.f,Object(T.b)((function(e){return{authReady:e.app.initialized}}),{initApp:function(){return function(e){e(Y()).then((function(){return e({type:de})}))}}}))(Te),Ue=function(){return Object(w.jsx)(b.a,{children:Object(w.jsx)(T.a,{store:Se,children:Object(w.jsx)(Pe,{})})})};a.a.render(Object(w.jsx)(Ue,{}),document.getElementById("root"))},42:function(e,t,n){e.exports={navbar:"Navbar_navbar__3THes",item:"Navbar_item__14V1o",active:"Navbar_active__s5QnI",friends:"Navbar_friends__gydXJ",avatars:"Navbar_avatars__1lMNW",avatar:"Navbar_avatar__2SzD5"}},66:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return o}));var r=function(e){if(!e)return"Field is required!"},a=function(e){return function(t){if(t&&t.length>e)return"Must less or equal 30 symbols"}},s=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},c=function(e){return function(t){if(t&&t.length<e)return"Min length of ".concat(e," symbols required")}},i=function(e){return function(t){if(t&&t.length>e)return"Max length of ".concat(e," symbols required")}},u=function(e){return function(t){if(t&&t.length<e)return"Min length of ".concat(e," symbols required")}},o=function(e){return function(t){if(t&&t.length>e)return"Max length of ".concat(e," symbols required")}}},79:function(e,t,n){e.exports={formItem:"Login_formItem__rYzYh",formSummaryError:"Login_formSummaryError__3QLvn"}}},[[366,2,3]]]);
//# sourceMappingURL=main.5d8a3926.chunk.js.map