(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,a,t){e.exports=t(70)},70:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(16),o=t.n(r),l=t(10),i=t(11),c=t(14),m=t(12),p=t(15),u=t(13),d=t(9),h=(t(40),t(5)),g=t(18),v=t.n(g),b=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={username:"",password:""},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"onChangeValue",value:function(e){var a=e.target,t=a.name,n=a.value;n&&("username"===t?this.setState({username:n}):this.setState({password:n}))}},{key:"login",value:function(){var e=this.state,a=e.username,t=e.password;if(a&&t){v.a.post("http://localhost:8080/api/login",{username:a,password:t},{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then(function(e){e.data&&e.data.status?h.b.success("Login successful!"):h.b.error("Username or password is wrong!")},function(e){Object(h.b)("Server Error!")}),console.log(a,t)}else console.log("not login!")}},{key:"render",value:function(){return s.a.createElement("div",{className:"limiter"},s.a.createElement("div",{className:"container-login100"},s.a.createElement("div",{className:"wrap-login100 p-t-30 p-b-50"},s.a.createElement("span",{className:"login100-form-title p-b-41"},"Account Login"),s.a.createElement("div",{className:"login100-form validate-form p-b-33 p-t-5"},s.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Enter username"},s.a.createElement("input",{className:"input100",type:"text",onChange:this.onChangeValue.bind(this),name:"username",placeholder:"User name"}),s.a.createElement("span",{className:"focus-input100","data-placeholder":"\ue82a"})),s.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Enter password"},s.a.createElement("input",{className:"input100",type:"password",onChange:this.onChangeValue.bind(this),name:"pass",placeholder:"Password"}),s.a.createElement("span",{className:"focus-input100","data-placeholder":"\ue80f"})),s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(u.b,{to:"/register"},"Go to Register")),s.a.createElement("div",{className:"container-login100-form-btn m-t-32"},s.a.createElement("button",{className:"login100-form-btn",onClick:this.login.bind(this)},"Login"))))))}}]),a}(n.Component),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={username:"",password:"",repass:"",toLogin:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"onChangeValue",value:function(e){var a=e.target,t=a.name,n=a.value;n&&("username"===t?this.setState({username:n}):"password"===t?this.setState({password:n}):this.setState({repass:n}))}},{key:"login",value:function(){var e=this,a=this.state,t=a.username,n=a.password,s=a.repass;if(t&&n&&s)if(s===n){v.a.post("http://localhost:8080/api/users",{username:t,password:n},{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then(function(a){a.data&&a.data.status?(h.b.success("New Account created!"),e.gotoLogin()):h.b.error("Account already existed!")},function(e){h.b.error("server error!")})}else h.b.error("repass doesn't match password!");else h.b.error("all fields cannot be null!")}},{key:"gotoLogin",value:function(){this.setState({toLogin:!0})}},{key:"render",value:function(){return this.state.toLogin?s.a.createElement(d.a,{to:"/"}):s.a.createElement("div",{className:"limiter"},s.a.createElement("div",{className:"container-login100"},s.a.createElement("div",{className:"wrap-login100 p-t-30 p-b-50"},s.a.createElement("span",{className:"login100-form-title p-b-41"},"Create account"),s.a.createElement("div",{className:"login100-form validate-form p-b-33 p-t-5"},s.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Enter username"},s.a.createElement("input",{className:"input100",type:"text",onChange:this.onChangeValue.bind(this),name:"username",placeholder:"User name"}),s.a.createElement("span",{className:"focus-input100","data-placeholder":"\ue82a"})),s.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Enter password"},s.a.createElement("input",{className:"input100",type:"password",onChange:this.onChangeValue.bind(this),name:"password",placeholder:"Password"}),s.a.createElement("span",{className:"focus-input100","data-placeholder":"\ue80f"})),s.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Re-Enter password"},s.a.createElement("input",{className:"input100",type:"password",onChange:this.onChangeValue.bind(this),name:"repass",placeholder:"Password"}),s.a.createElement("span",{className:"focus-input100","data-placeholder":"\ue80f"})),s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(u.b,{to:"/"},"Back to Login")),s.a.createElement("div",{className:"container-login100-form-btn m-t-32"},s.a.createElement("button",{className:"login100-form-btn",onClick:this.login.bind(this)},"Login"))))))}}]),a}(n.Component),w=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,null,s.a.createElement(d.d,null,s.a.createElement(d.b,{exact:!0,path:"/",component:b}),s.a.createElement(d.b,{exact:!0,path:"/register",component:E}))),s.a.createElement(h.a,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.755045fe.chunk.js.map