(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/logo.46315217.png"},27:function(e,t,a){e.exports=a.p+"static/media/shop.0996054b.svg"},28:function(e,t,a){e.exports=a(56)},33:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),i=a.n(s),l=a(59),c=a(2),o=a(3),u=a(5),m=a(4),h=a(6),p=a(61),d=(a(33),a(15)),g=a.n(d),b=new(function(){function e(){Object(c.a)(this,e),this.auth=g.a.create({baseURL:"https://statuss.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.company;return this.auth.post("/auth/signup",{username:t,password:a,company:n}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),f=r.a.createContext(),E=f.Consumer,v=f.Provider,j=function(e){return function(t){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(E,null,function(a){return r.a.createElement(e,Object.assign({login:a.login,signup:a.signup,user:a.user,logout:a.logout,isLoggedin:a.isLoggedin},t.props))})}}]),a}(n.Component)},C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0},a.signup=function(e){var t=e.username,n=e.password,r=e.company;b.signup({username:t,password:n,company:r}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(e){var t=e.response.data;a.setState({message:t.statusMessage})})},a.login=function(e){var t=e.username,n=e.password;b.login({username:t,password:n}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(){})},a.logout=function(){b.logout().then(function(){a.setState({isLoggedin:!1,user:null})}).catch(function(){})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.me().then(function(t){e.setState({isLoggedin:!0,user:t,isLoading:!1})}).catch(function(){e.setState({isLoggedin:!1,user:null,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(v,{value:{isLoggedin:a,user:n,login:this.login,logout:this.logout,signup:this.signup}},this.props.children)}}]),t}(n.Component),O=a(18),y=a(60),N=a(58);var k=j(function(e){var t=e.component,a=e.isLoggedin,n=Object(O.a)(e,["component","isLoggedin"]);return r.a.createElement(y.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(N.a,{to:"/private"}):r.a.createElement(t,e)}}))});var S=j(function(e){var t=e.component,a=e.isLoggedin,n=Object(O.a)(e,["component","isLoggedin"]);return r.a.createElement(y.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(N.a,{to:"/login"})}}))}),w=a(57),L=a(27),P=a.n(L),J=j(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(w.a,{className:"navItem",to:"/private"}," ",r.a.createElement("i",{className:"icon far fa-user"})," "),r.a.createElement(w.a,{className:"navItem",to:"/clients"}," ",r.a.createElement("i",{className:"icon far fa-address-book"})," "),r.a.createElement(w.a,{className:"navItem",to:"/clients"}," ",r.a.createElement("i",{className:"icon fas fa-list-ul"})," "),r.a.createElement(w.a,{className:"navItem",to:"/clients"}," ",r.a.createElement("i",{className:"icon far fa-comments"})))}}]),t}(n.Component)),F=j(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"clientPage"},r.a.createElement("div",{className:"pageTitle"},r.a.createElement("h1",null,e.username),r.a.createElement("div",{className:"profileStats"},r.a.createElement("div",{className:"stats"},r.a.createElement("h4",null," ",e.clients.length," "),r.a.createElement("h5",null,"  Clients ")),r.a.createElement("div",{className:"stats"},r.a.createElement("h4",null," ",e.clients.length," "),r.a.createElement("h5",null,"  Jobs ")),r.a.createElement("div",{className:"stats"},r.a.createElement("h4",null," ",e.clients.length," "),r.a.createElement("h5",null,"  Messages ")))),r.a.createElement("img",{src:P.a,className:"profileimage",alt:"Logo"}),r.a.createElement("form",null,r.a.createElement(w.a,{className:"home button",to:"/usersettings"}," Settings "),r.a.createElement(w.a,{className:"home button",to:"/clients/:id/jobs/:jobId"}," Current Jobs ")),r.a.createElement(J,null))}}]),t}(n.Component)),D=a(8),x=a(13),T=a.n(x),A=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",company:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,s=t.company;a.props.signup({username:n,password:r,company:s})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.company;return r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"blob"}),r.a.createElement(w.a,{to:"/"},r.a.createElement("img",{src:T.a,className:"logo",alt:"Logo"})),r.a.createElement("h1",null," status "),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"inputContainer"},r.a.createElement("i",{className:"fas fa-building"}),r.a.createElement("input",{className:"input-field",type:"text",name:"Company",placeholder:"Company",value:n,onChange:this.handleChange})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("i",{className:"fas fa-user"}),r.a.createElement("input",{className:"input-field",type:"text",name:"username",placeholder:"Username",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("i",{className:"fas fa-lock"}),r.a.createElement("input",{className:"input-field",type:"password",name:"password",placeholder:"Password",value:a,onChange:this.handleChange})),r.a.createElement("input",{className:"button",type:"submit",value:"Signup"})),r.a.createElement("p",null," Already have an account? ",r.a.createElement(w.a,{to:"/login"}," Login")))}}]),t}(n.Component)),I=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"blob"}),r.a.createElement(w.a,{to:"/"},r.a.createElement("img",{src:T.a,className:"logo",alt:"Logo"})),r.a.createElement("h1",null," status "),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"inputContainer"},r.a.createElement("i",{className:"fas fa-user"}),r.a.createElement("input",{className:"input-field",type:"text",name:"username",placeholder:"Username",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("i",{className:"fas fa-lock"}),r.a.createElement("input",{className:"input-field",type:"password",name:"password",placeholder:"Password",value:a,onChange:this.handleChange})),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})),r.a.createElement("p",null," Don't have an account? ",r.a.createElement(w.a,{to:"/signup"}," Signup ")," "))}}]),t}(n.Component)),B=j(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"blob"}),r.a.createElement("img",{src:T.a,className:"logo",alt:"Logo"}),r.a.createElement("h1",null," status "),r.a.createElement("h3",null,"Keeping shops & customers",r.a.createElement("br",null)," in touch"),r.a.createElement("form",null,r.a.createElement(w.a,{className:"home button",to:"/login"}," Login "),r.a.createElement(w.a,{className:"home button",to:"/signup"}," Signup "),r.a.createElement(w.a,{className:"home button",to:"/trackstatus"}," Track status ")))}}]),t}(n.Component)),M=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={keycode:"",job:null},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.keycode;a.props.history.push("/jobs/".concat(t))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.keycode;return r.a.createElement("div",{className:"signup"},r.a.createElement(w.a,{to:"/"},r.a.createElement("img",{src:T.a,className:"logo",alt:"Logo"})),r.a.createElement("h1",null,"Status"),r.a.createElement("h2",null,"Track progress status"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{className:"input",type:"text",name:"keycode",placeholder:"Enter keycode",value:e,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Track"})))}}]),t}(n.Component)),_=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:a.props.username,password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"signup"},r.a.createElement("h1",null," statuss "),r.a.createElement("h3",null,"User Settings"),r.a.createElement("button",{className:"button",onClick:this.props.logout}," Logout "),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{className:"input",type:"text",name:"username",placeholder:"Username",value:t,onChange:this.handleChange}),r.a.createElement("input",{className:"input",type:"password",name:"password",placeholder:"Password",value:a,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Edit Profile"}),r.a.createElement(w.a,{to:"/private"}," ",r.a.createElement("button",{className:"button"},"Back")," ")))}}]),t}(n.Component)),U=new(function(){function e(){Object(c.a)(this,e),this.client=g.a.create({baseURL:"https://statuss.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"addClient",value:function(e,t,a,n,r){return this.client.post("/api/clients",{firstname:e,lastname:t,phonenumber:a,email:n,userID:r})}},{key:"removeClient",value:function(e){return this.client.delete("/api/clients/".concat(e))}},{key:"getClient",value:function(e){return this.client.get("/api/client/".concat(e))}},{key:"getClients",value:function(e){return this.client.get("/api/clients/".concat(e))}},{key:"editClient",value:function(e,t,a,n,r){return this.client.put("/api/clients/".concat(e),{firstname:t,lastname:a,phonenumber:n,email:r})}}]),e}()),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.firstname,r=t.lastname,s=t.phonenumber,i=t.email,l=a.props.user._id;U.addClient(n,r,s,i,l).then(function(){a.props.getData(),a.setState({firstname:"",lastname:"",phonenumber:"",email:"",isShowing:!1})}).catch(function(e){return console.log(e)})},a.toggleForm=function(){return a.setState({isShowing:!a.state.isShowing})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a.state={firstname:"",lastname:"",phonenumber:"",email:"",isShowing:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:"buttonMini",onClick:this.toggleForm}," Add Client "),this.state.isShowing?r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",null,"Enter Client Information"),r.a.createElement("input",{className:"input",type:"text",name:"firstname",placeholder:"First name",value:this.state.firstname,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"input",type:"text",name:"lastname",placeholder:"Last name",value:this.state.lastname,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"input",type:"text",name:"phonenumber",placeholder:"Phone number",value:this.state.phonenumber,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"input",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"button",type:"submit",value:"Submit",onClick:this.handleFormSubmit}))):null)}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={listOfClients:[],user:a.props.user},a.getAllClients=function(){var e=a.state.user._id;U.getClients(e).then(function(e){return a.setState({listOfClients:e.data})}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getAllClients()}},{key:"render",value:function(){var e=this.state.listOfClients;return r.a.createElement("div",{className:"container"},"         ",r.a.createElement(G,{getData:this.getAllClients,user:this.props.user}),r.a.createElement("div",{className:"client"},e.map(function(e){return r.a.createElement(w.a,{key:e._id,className:"clientCard",to:"/clients/".concat(e._id)},r.a.createElement("div",null,r.a.createElement("h3",{className:"clientName"}," ",e.firstname," ",e.lastname," "),r.a.createElement("p",{className:"phonenumber"},e.phonenumber)))})))}}]),t}(n.Component),H=j(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"clientPage"},r.a.createElement("div",{className:"pageTitle"},r.a.createElement("h1",null," ",e.username," "),r.a.createElement("h2",null,"Your Clients")),r.a.createElement(R,{user:e}),r.a.createElement(J,null))}}]),t}(n.Component)),K=new(function(){function e(){Object(c.a)(this,e),this.job=g.a.create({baseURL:"https://statuss.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"addJob",value:function(e,t,a,n,r){return this.job.post("/api/jobs",{title:e,description:t,progress:a,price:n,clientID:r})}},{key:"getJob",value:function(e,t){return this.job.get("/api/clients/".concat(e,"/jobs/").concat(t))}},{key:"getJobByKeycode",value:function(e){return this.job.get("/api/jobs/".concat(e))}},{key:"editJob",value:function(e,t,a,n,r){return this.client.put("/api/jobs/".concat(e),{title:t,description:a,progress:n,price:r})}}]),e}()),Y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=20*this.props.getProgress+"%",a={width:t};switch(this.props.getProgress){case 0:e="Item received, pending turn";break;case 1:e="Repair mode-On. Let's go!";break;case 2:case 3:e="Hang tight, magic in progress";break;case 4:e="Final touches";break;case 5:e="Hurray! Your item is ready!";break;default:e="Pending status confirmation"}return r.a.createElement("div",{className:"flex-container"},r.a.createElement("p",{className:"progressTitle"},"Progress status "),r.a.createElement("div",{className:"progress","data-label":"".concat(t," completed")},r.a.createElement("span",{className:"value",style:a})),r.a.createElement("h3",null,e))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.getTheJob=function(){var e=a.props.match.params.keycode;K.getJobByKeycode(e).then(function(e){var t=e.data;a.setState(t)}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTheJob()}},{key:"render",value:function(){return r.a.createElement("div",{className:"clientPage"},r.a.createElement("div",{className:"jobtitle"},r.a.createElement("h2",null,"JOB DETAILS"),r.a.createElement("h3",null,this.state.title),r.a.createElement("p",null,this.state.description)),r.a.createElement(Y,{getProgress:this.state.progress}),r.a.createElement("div",{className:"priceCard"},r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Price"),r.a.createElement("h4",null,this.state.price," \u20ac")),r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Paid"),r.a.createElement("h4",null,this.state.amountpaid," \u20ac")),r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Balance"),r.a.createElement("h4",null,this.state.price-this.state.amountpaid," \u20ac"))),r.a.createElement("button",{className:"button",onClick:this.props.history.goBack},"Go Back"))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.firstname,r=t.lastname,s=t.phonenumber,i=t.email,l=a.props.theClient._id;U.editClient(l,n,r,s,i).then(function(){a.props.getTheClient(),a.props.history.push("/clients")}).catch(function(e){return console.log(e)})},a.toggleForm=function(){return a.setState({isShowing:!a.state.isShowing})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a.deleteClient=function(){var e=a.props.match.params.id;U.removeClient(e).then(function(){return a.props.history.push("/clients")}).catch(function(e){return console.log(e)})},a.state={firstname:a.props.theClient.firstname,lastname:a.props.theClient.lastname,phonenumber:a.props.theClient.phonenumber,email:a.props.theClient.email,isShowing:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:"buttonMini",onClick:this.toggleForm},"  Edit Client "),this.state.isShowing?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{className:"input",type:"text",name:"firstname",placeholder:"First name",value:this.state.firstname,onChange:this.handleChange}),r.a.createElement("input",{className:"input",type:"text",name:"lastname",placeholder:"Last name",value:this.state.lastname,onChange:this.handleChange}),r.a.createElement("input",{className:"input",type:"text",name:"phonenumber",placeholder:"Phone number",value:this.state.phonenumber,onChange:this.handleChange}),r.a.createElement("input",{className:"input",type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Submit"}),r.a.createElement("button",{className:"button",onClick:function(){return e.deleteClient()}}," Delete client "))):null)}}]),t}(n.Component),Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onChangeProgress=function(e){a.props.changeProgress(e.target.value)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t={width:20*this.props.progress+"%"};switch(Number(this.props.progress)){case 0:e="Item received, pending turn";break;case 1:e="Repair mode-On. Let's go!";break;case 2:case 3:e="Hang tight, magic in progress";break;case 4:e="Final touches";break;case 5:e="Hurray! Your item is ready!";break;default:e="Pending status confirmation"}return r.a.createElement("div",{className:"flex-container-slider"},r.a.createElement("input",{className:"input",type:"range",min:"0",max:"5",step:"1",name:"progress",value:this.props.progress,onChange:this.onChangeProgress}),r.a.createElement("span",{className:"value",style:t}),r.a.createElement("h3",null,e))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.description,s=t.progress,i=t.price,l=a.props.clientID;K.addJob(n,r,s,i,l).then(function(){a.props.getTheClient(),a.setState({title:"",description:"",progress:"",price:"",isShowing:!1})}).catch(function(e){return console.log(e)})},a.toggleForm=function(){return a.setState({isShowing:!a.state.isShowing})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a.onChangeProgress=function(e){a.setState({progress:e})},a.state={title:"",description:"",progress:"",price:"",isShowing:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:"buttonMini",onClick:this.toggleForm}," Add job "),this.state.isShowing?r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{className:"input",type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"input",name:"description",placeholder:"Description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"input",name:"price",placeholder:"Price",value:this.state.price,onChange:function(t){return e.handleChange(t)}}),r.a.createElement(Q,{progress:this.state.progress,onChange:function(t){return e.handleChange(t)},changeProgress:this.onChangeProgress}),r.a.createElement("button",{className:"button",onClick:this.handleFormSubmit},"Submit"))):null)}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).renderEditForm=function(){return a.state.firstname||a.state.lastname?r.a.createElement(z,Object.assign({theClient:a.state,getTheClient:a.getSingleClient},a.props)):r.a.createElement("p",null,"LOADING")},a.renderAddJobForm=function(){return a.state.firstname||a.state.lastname?r.a.createElement(V,{clientID:a.state._id,getTheClient:a.getSingleClient}):r.a.createElement("p",null,"LOADING")},a.getSingleClient=function(){var e=a.props.match.params.id;U.getClient(e).then(function(e){var t=e.data;a.setState(t)}).catch(function(e){return console.log(e)})},a.state={firstname:"",lastname:"",jobs:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getSingleClient()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"clientPage"},r.a.createElement("div",{className:"pageTitle"},r.a.createElement("h1",{className:"contactinfoTitle"}," ",this.state.firstname," ",this.state.lastname," "),r.a.createElement("p",{className:"contactinfo"}," ",this.state.phonenumber," "),r.a.createElement("p",{className:"contactinfo"}," ",this.state.email," ")),r.a.createElement("div",{className:"container"},this.renderEditForm(),this.renderAddJobForm(),0===this.state.jobs.length?r.a.createElement("h2",null,"NO JOBS TO DISPLAY"):this.state.jobs.map(function(t){return r.a.createElement(w.a,{className:"jobCard",key:t._id,to:"/clients/".concat(e.state._id,"/jobs/").concat(t._id)},r.a.createElement("h2",null,t.title))})),r.a.createElement(J,null))}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.description,s=t.progress,i=t.price,l=t.amountpaid,c=a.props.theJob._id;K.editJob(c,n,r,s,i,l).then(function(){a.props.getTheJob(),a.props.history.push("/jobs")}).catch(function(e){return console.log(e)})},a.toggleForm=function(){return a.setState({isShowing:!a.state.isShowing})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a.deleteJob=function(){var e=a.props.match.params.id;K.removeJob(e).then(function(){return a.props.history.push("/jobs")}).catch(function(e){return console.log(e)})},a.state={title:a.props.theJob.title,description:a.props.theJob.description,progress:a.props.thejob.progress,price:a.props.theJob.price,amountpaid:a.props.theJob.amountpaid},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:"buttonMini",onClick:this.toggleForm},"Edit Job"),this.state.isShowing?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("input",{name:"price",placeholder:"Price",value:this.state.price,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{name:"amountpaid",placeholder:"Paid",value:this.state.amountpaid,onChange:function(t){return e.handleChange(t)}}),r.a.createElement(Q,{progress:this.state.progress,onChange:function(t){return e.handleChange(t)},changeProgress:this.onChangeProgress}),r.a.createElement("input",{type:"submit",value:"Update"}),r.a.createElement("button",{className:"button",onClick:function(){return e.deleteJob()}}," Delete Job "))):null)}}]),t}(n.Component),Z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={},a.renderEditForm=function(){return a.state.title||a.state.description?r.a.createElement(X,Object.assign({theJob:a.state,getTheJob:a.getTheJob},a.props)):r.a.createElement("p",null,"LOADING")},a.getTheJob=function(){var e=a.props.match.params,t=e.id,n=e.jobId;K.getJob(t,n).then(function(e){var t=e.data;a.setState(t)}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTheJob()}},{key:"render",value:function(){return r.a.createElement("div",{className:"clientPage"},r.a.createElement("div",{className:"pageTitle"},r.a.createElement("h1",{className:"contactinfo"},this.state.title),r.a.createElement("p",{className:"contactinfo"},this.state.description)),r.a.createElement("div",{className:"container"},r.a.createElement(Y,{getProgress:this.state.progress}),r.a.createElement("div",{className:"priceCard"},r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Price"),r.a.createElement("h4",null,this.state.price," \u20ac")),r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Paid"),r.a.createElement("h4",null,this.state.amountpaid," \u20ac")),r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Balance"),r.a.createElement("h4",null,this.state.price-this.state.amountpaid," \u20ac"))),r.a.createElement("div",{className:"keycodeCard"},r.a.createElement("h5",null,"Keycode"),r.a.createElement("div",{className:"keycode"},r.a.createElement("h6",null,this.state.keycode))),r.a.createElement("button",{className:"button",onClick:this.props.history.goBack},"Go Back")),r.a.createElement(J,null))}}]),t}(n.Component),$=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(k,{exact:!0,path:"/",component:B}),r.a.createElement(k,{path:"/signup",component:A}),r.a.createElement(k,{path:"/login",component:I}),r.a.createElement(k,{path:"/Trackstatus",component:M}),r.a.createElement(k,{exact:!0,path:"/jobs/:keycode",component:q}),r.a.createElement(S,{path:"/private",component:F}),r.a.createElement(S,{path:"/usersettings",component:_}),r.a.createElement(S,{exact:!0,path:"/clients",component:H}),r.a.createElement(S,{exact:!0,path:"/clients/:id",component:W}),r.a.createElement(S,{exact:!0,path:"/clients/:id/jobs/:jobId",component:Z}))))}}]),t}(n.Component);i.a.render(r.a.createElement(l.a,null,r.a.createElement($,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2291d022.chunk.js.map