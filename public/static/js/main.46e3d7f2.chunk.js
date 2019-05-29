(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/logo.d61330fa.png"},27:function(e,t,n){e.exports=n.p+"static/media/shop.0996054b.svg"},28:function(e,t,n){e.exports=n(56)},33:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),s=n.n(i),l=n(59),c=n(2),o=n(3),u=n(5),m=n(4),h=n(6),p=n(61),d=(n(33),n(15)),g=n.n(d),b=new(function(){function e(){Object(c.a)(this,e),this.auth=g.a.create({baseURL:"https://statuss.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"signup",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/signup",{username:t,password:n}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/login",{username:t,password:n}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),f=r.a.createContext(),v=f.Consumer,E=f.Provider,j=function(e){return function(t){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(v,null,function(n){return r.a.createElement(e,Object.assign({login:n.login,signup:n.signup,user:n.user,logout:n.logout,isLoggedin:n.isLoggedin},t.props))})}}]),n}(a.Component)},C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0},n.signup=function(e){var t=e.username,a=e.password,r=e.company;b.signup({username:t,password:a,company:r}).then(function(e){n.setState({isLoggedin:!0,user:e})}).catch(function(e){var t=e.response.data;n.setState({message:t.statusMessage})})},n.login=function(e){var t=e.username,a=e.password;b.login({username:t,password:a}).then(function(e){n.setState({isLoggedin:!0,user:e})}).catch(function(){})},n.logout=function(){b.logout().then(function(){n.setState({isLoggedin:!1,user:null})}).catch(function(){})},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.me().then(function(t){e.setState({isLoggedin:!0,user:t,isLoading:!1})}).catch(function(){e.setState({isLoggedin:!1,user:null,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isLoggedin,a=e.user;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(E,{value:{isLoggedin:n,user:a,login:this.login,logout:this.logout,signup:this.signup}},this.props.children)}}]),t}(a.Component),O=n(18),y=n(60),k=n(58);var S=j(function(e){var t=e.component,n=e.isLoggedin,a=Object(O.a)(e,["component","isLoggedin"]);return r.a.createElement(y.a,Object.assign({},a,{render:function(e){return n?r.a.createElement(k.a,{to:"/private"}):r.a.createElement(t,e)}}))});var w=j(function(e){var t=e.component,n=e.isLoggedin,a=Object(O.a)(e,["component","isLoggedin"]);return r.a.createElement(y.a,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(k.a,{to:"/login"})}}))}),N=n(57),L=n(27),F=n.n(L),D=j(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",null,r.a.createElement("div",{className:"pageTitle"},r.a.createElement("h1",null,e.username)),r.a.createElement("img",{src:F.a,className:"profileimage",alt:"Logo"}),r.a.createElement("form",null,r.a.createElement(N.a,{className:"home button",to:"/usersettings"}," Settings "),r.a.createElement(N.a,{className:"home button",to:"/clients"}," Clients "),r.a.createElement(N.a,{className:"home button",to:"/clients/:id/jobs/:jobId"}," Current Jobs ")))}}]),t}(a.Component)),J=n(8),x=n(13),A=n.n(x),T=j(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",company:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password,i=t.company;n.props.signup({username:a,password:r,company:i})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,a=e.company;return r.a.createElement("div",{className:"signup"},r.a.createElement(N.a,{to:"/"},r.a.createElement("img",{src:A.a,className:"logo",alt:"Logo"})),r.a.createElement("h1",null," status "),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"Company",placeholder:"Company",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:t,onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:n,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Signup"})),r.a.createElement("p",null," Already have an account? ",r.a.createElement(N.a,{to:"/login"}," Login")))}}]),t}(a.Component)),P=j(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.login({username:a,password:r})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",{className:"signup"},r.a.createElement(N.a,{to:"/"},r.a.createElement("img",{src:A.a,className:"logo",alt:"Logo"})),r.a.createElement("h1",null," status "),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:t,onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:n,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})),r.a.createElement("p",null," Don't have an account? ",r.a.createElement(N.a,{to:"/signup"}," Signup ")," "))}}]),t}(a.Component)),B=j(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"signup"},r.a.createElement("img",{src:A.a,className:"logo",alt:"Logo"}),r.a.createElement("h1",null," status "),r.a.createElement("h3",null,"Keeping shops and customers",r.a.createElement("br",null)," in touch"),r.a.createElement("form",null,r.a.createElement(N.a,{className:"home button",to:"/login"}," Login "),r.a.createElement(N.a,{className:"home button",to:"/signup"}," Signup "),r.a.createElement(N.a,{className:"home button",to:"/trackstatus"}," Track status ")))}}]),t}(a.Component)),I=new(function(){function e(){Object(c.a)(this,e),this.job=g.a.create({baseURL:"https://statuss.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"addJob",value:function(e,t,n,a,r){return this.job.post("/api/jobs",{title:e,description:t,progress:n,price:a,clientID:r})}},{key:"getJob",value:function(e,t){return this.job.get("/api/clients/".concat(e,"/jobs/").concat(t))}},{key:"getJobByKeycode",value:function(e){return this.job.get("/api/jobs/".concat(e))}}]),e}()),M=j(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={keycode:"",job:null},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state.keycode;n.props.history.push("/jobs/".concat(t))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.keycode;return r.a.createElement("div",{className:"signup"},r.a.createElement(N.a,{to:"/"},r.a.createElement("img",{src:A.a,className:"logo",alt:"Logo"})),r.a.createElement("h1",null,"Status"),r.a.createElement("h2",null,"Track progress status"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"keycode",placeholder:"Enter keycode",value:e,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Track"})))}}]),t}(a.Component)),U=j(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.login({username:a,password:r})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",{className:"signup"},r.a.createElement("h1",null," statuss "),r.a.createElement("h3",null,"User Settings"),r.a.createElement("button",{className:"button",onClick:this.props.logout}," Logout "),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:t,onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:n,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Edit Profile"}),r.a.createElement(N.a,{to:"/private"}," ",r.a.createElement("button",{className:"button"},"Back")," ")))}}]),t}(a.Component)),_=new(function(){function e(){Object(c.a)(this,e),this.client=g.a.create({baseURL:"https://statuss.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"addClient",value:function(e,t){return this.client.post("/api/clients",{firstname:e,lastname:t})}},{key:"removeClient",value:function(e){return this.client.delete("/api/clients/".concat(e))}},{key:"getClient",value:function(e){return this.client.get("/api/clients/".concat(e))}},{key:"getClients",value:function(){return this.client.get("/api/clients")}},{key:"editClient",value:function(e,t,n){return this.client.put("/api/clients/".concat(e),{firstname:t,lastname:n})}}]),e}()),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.firstname,r=t.lastname;_.addClient(a,r).then(function(){n.props.getData(),n.setState({firstname:"",lastname:""})}).catch(function(e){return console.log(e)})},n.toggleForm=function(){return n.setState({isShowing:!n.state.isShowing})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n.state={firstname:"",lastname:"",isShowing:!1},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:"buttonMini",onClick:this.toggleForm}," Add Client "),this.state.isShowing?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Enter Client Information"),r.a.createElement("input",{type:"text",name:"firstname",placeholder:"First name",value:this.state.firstname,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"text",name:"lastname",placeholder:"Last name",value:this.state.lastname,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",className:"button",value:"Submit"}))):null)}}]),t}(a.Component),K=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={listOfClients:[]},n.getAllClients=function(){_.getClients().then(function(e){n.setState({listOfClients:e.data})}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getAllClients()}},{key:"render",value:function(){var e=this.state.listOfClients;return r.a.createElement("div",null,"         ",r.a.createElement(G,{getData:this.getAllClients}),r.a.createElement("div",{className:"client"},e.map(function(e){return r.a.createElement("div",{key:e._id,className:"clientCard"},r.a.createElement(N.a,{to:"/clients/".concat(e._id)},r.a.createElement("h3",null,e.firstname," ",e.lastname," "),r.a.createElement("p",null)))})))}}]),t}(a.Component),R=j(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",null,r.a.createElement("div",{className:"pageTitle"},r.a.createElement("h1",null," ",e.username)),r.a.createElement("h2",null,"Your Clients"),r.a.createElement(K,null),r.a.createElement(N.a,{to:"/private"}," ",r.a.createElement("button",{className:"button"},"Back")," "))}}]),t}(a.Component)),Y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=20*this.props.getProgress+"%",n={width:t};switch(this.props.getProgress){case 0:e="Item received, pending turn";break;case 1:e="Repair mode-On. Let's go!";break;case 2:case 3:e="Hang tight, magic in progress";break;case 4:e="Final touches";break;case 5:e="Hurray! Your item is ready!";break;default:e="Pending status confirmation"}return r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"progress","data-label":"".concat(t," completed")},r.a.createElement("span",{className:"value",style:n})),r.a.createElement("h3",null,e))}}]),t}(a.Component),H=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n.getTheJob=function(){var e=n.props.match.params.keycode;console.log(e),I.getJobByKeycode(e).then(function(e){var t=e.data;console.log(t),n.setState(t)}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTheJob()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jobtitle"},r.a.createElement("h2",null,"JOB DETAILS"),r.a.createElement("h3",null,this.state.title),r.a.createElement("p",null,this.state.description)),r.a.createElement(Y,{getProgress:this.state.progress}),r.a.createElement("div",{className:"priceCard"},r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Price"),r.a.createElement("h4",null,this.state.price," \u20ac")),r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Paid"),r.a.createElement("h4",null,this.state.amountpaid," \u20ac")),r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Balance"),r.a.createElement("h4",null,this.state.price-this.state.amountpaid," \u20ac"))),r.a.createElement("button",{className:"button",onClick:this.props.history.goBack},"Go Back"))}}]),t}(a.Component),q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.firstname,r=t.lastname,i=n.props.theClient._id;_.editClient(i,a,r).then(function(){n.props.getTheClient(),n.props.history.push("/clients")}).catch(function(e){return console.log(e)})},n.toggleForm=function(){return n.setState({isShowing:!n.state.isShowing})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n.deleteClient=function(){var e=n.props.match.params.id;_.removeClient(e).then(function(){return n.props.history.push("/clients")}).catch(function(e){return console.log(e)})},n.state={firstname:n.props.theClient.firstname,lastname:n.props.theClient.lastname,isShowing:!1},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:"buttonMini",onClick:this.toggleForm},"  Edit Client "),this.state.isShowing?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"firstname",placeholder:"First name",value:this.state.firstname,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"lastname",placeholder:"Last name",value:this.state.lastname,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement("button",{className:"button",onClick:function(){return e.deleteClient()}}," Delete client "))):null)}}]),t}(a.Component),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.title,r=t.description,i=t.progress,s=t.price,l=n.props.clientID;I.addJob(a,r,i,s,l).then(function(){n.props.getTheClient(),n.setState({title:"",description:"",progress:"",price:""})}).catch(function(e){return console.log(e)})},n.toggleForm=function(){return n.setState({isShowing:!n.state.isShowing})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n.state={title:"",description:"",progress:"",price:"",isShowing:!1},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:"buttonMini",onClick:this.toggleForm}," Add job "),this.state.isShowing?r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{name:"description",placeholder:"Description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{name:"price",placeholder:"Price",value:this.state.price,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"range",min:"0",max:"5",step:"1",name:"progress",value:this.state.progress,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("button",{className:"button",onClick:this.handleFormSubmit},"Submit"))):null)}}]),t}(a.Component),Q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).renderEditForm=function(){return n.state.firstname||n.state.lastname?r.a.createElement(q,Object.assign({theClient:n.state,getTheClient:n.getSingleClient},n.props)):r.a.createElement("p",null,"LOADING")},n.renderAddJobForm=function(){return n.state.firstname||n.state.lastname?r.a.createElement(z,{clientID:n.state._id,getTheClient:n.getSingleClient}):r.a.createElement("p",null,"LOADING")},n.getSingleClient=function(){var e=n.props.match.params.id;_.getClient(e).then(function(e){var t=e.data;n.setState(t)}).catch(function(e){return console.log(e)})},n.state={firstname:"",lastname:"",jobs:[]},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getSingleClient()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.firstname," ",this.state.lastname),this.renderEditForm(),"   ",this.renderAddJobForm(),0===this.state.jobs.length?r.a.createElement("h2",null,"NO JOBS TO DISPLAY"):this.state.jobs.map(function(t){return r.a.createElement(N.a,{className:"jobCard",key:t._id,to:"/clients/".concat(e.state._id,"/jobs/").concat(t._id)},r.a.createElement("h2",null,t.title))}),r.a.createElement(N.a,{to:"/clients"}," ",r.a.createElement("button",{className:"button"},"Back")," "))}}]),t}(a.Component),V=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.title,r=t.description,i=t.progress,s=t.price,l=t.amountpaid,c=n.props.theJob._id;I.editClient(c,a,r,i,s,l).then(function(){n.props.getTheClient(),n.props.history.push("/clients")}).catch(function(e){return console.log(e)})},n.toggleForm=function(){return n.setState({isShowing:!n.state.isShowing})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n.deleteClient=function(){var e=n.props.match.params.id;I.removeClient(e).then(function(){return n.props.history.push("/clients")}).catch(function(e){return console.log(e)})},n.state={title:n.props.theJob.title,description:n.props.theJob.description,progress:n.props.thejob.progress,price:n.props.theJob.price,amountpaid:n.props.theJob.amountpaid},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:"buttonMini",onClick:this.toggleForm},"Edit Job"),this.state.isShowing?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("input",{name:"price",placeholder:"Price",value:this.state.price,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{name:"amountpaid",placeholder:"Paid",value:this.state.amountpaid,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"range",min:"0",max:"5",step:"1",name:"progress",value:this.state.progress,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Update"}),r.a.createElement("button",{className:"button",onClick:function(){return e.deleteClient()}}," Delete client "))):null)}}]),t}(a.Component),W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={},n.renderEditForm=function(){return n.state.title||n.state.description?r.a.createElement(V,Object.assign({theJob:n.state,getTheJob:n.getSingleJob},n.props)):r.a.createElement("p",null,"LOADING")},n.getTheJob=function(){var e=n.props.match.params,t=e.id,a=e.jobId;I.getJob(t,a).then(function(e){var t=e.data;n.setState(t)}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTheJob()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jobtitle"},r.a.createElement("h2",null,"JOB DETAILS"),r.a.createElement("h3",null,this.state.title),r.a.createElement("p",null,this.state.description)),r.a.createElement(Y,{getProgress:this.state.progress}),r.a.createElement("div",{className:"priceCard"},r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Price"),r.a.createElement("h4",null,this.state.price," \u20ac")),r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Paid"),r.a.createElement("h4",null,this.state.amountpaid," \u20ac")),r.a.createElement("div",{className:"price"},r.a.createElement("h5",null,"Balance"),r.a.createElement("h4",null,this.state.price-this.state.amountpaid," \u20ac"))),r.a.createElement("div",{className:"keycodeCard"},r.a.createElement("h5",null,"Keycode"),r.a.createElement("div",{className:"keycode"},r.a.createElement("h6",null,this.state.keycode))),r.a.createElement("button",{className:"button",onClick:this.props.history.goBack},"Go Back"))}}]),t}(a.Component),X=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement("div",{className:"container"},r.a.createElement(p.a,null,r.a.createElement(S,{exact:!0,path:"/",component:B}),r.a.createElement(S,{path:"/signup",component:T}),r.a.createElement(S,{path:"/login",component:P}),r.a.createElement(S,{path:"/Trackstatus",component:M}),r.a.createElement(S,{exact:!0,path:"/jobs/:keycode",component:H}),r.a.createElement(w,{path:"/private",component:D}),r.a.createElement(w,{path:"/usersettings",component:U}),r.a.createElement(w,{exact:!0,path:"/clients",component:R}),r.a.createElement(w,{exact:!0,path:"/clients/:id",component:Q}),r.a.createElement(w,{exact:!0,path:"/clients/:id/jobs/:jobId",component:W}))))}}]),t}(a.Component);s.a.render(r.a.createElement(l.a,null,r.a.createElement(X,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.46e3d7f2.chunk.js.map