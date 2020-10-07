(this["webpackJsonpexpense-manager"]=this["webpackJsonpexpense-manager"]||[]).push([[0],{115:function(e,a,t){e.exports=t.p+"static/media/Expense_Life_Cycle.ad87b8a3.png"},120:function(e,a,t){e.exports=t(407)},124:function(e,a,t){},125:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){e.exports=t.p+"static/media/ex.761eeba1.jpg"},405:function(e,a,t){},407:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(18),l=t.n(s),o=(t(124),t(5)),i=t(6),c=t(8),m=t(7),p=(t(125),t(126),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onChangeName=function(e){n.setState({name:e.target.value})},n.onChangeEmail=function(e){n.setState({email:e.target.value})},n.onChangePassword=function(e){n.setState({password:e.target.value})},n.onChangeDesignation=function(e){n.setState({designation:e.target.value})},n.onChangeContact=function(e){n.setState({contactNumber:e.target.value})},n.onRegister=function(){"engineer"===n.state.designation?n.props.onRouteChange("employee"):n.props.onRouteChange("manager")},n.state={name:"",email:"",password:"",companyName:"",designation:"",contactNumber:"",joined:""},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{onChange:this.onChangeName,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onChangeEmail,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onChangePassword,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"CompanyName"},"CompanyName"),r.a.createElement("input",{onChange:this.onChangeCompanyName,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"comapnyName",id:"comapnyName"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"Designation"},"Designation"),r.a.createElement("input",{onChange:this.onChangeDesignation,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"designation",id:"designation"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"ContactNumber"},"ContactNumber"),r.a.createElement("input",{onChange:this.onChangeContact,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"contactNumber",id:"contactNumber"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(r.a.Component)),u=(t(127),function(e){var a=e.isSignedIn,t=e.onRouteChange,n=e.route;return"employee"===n?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 link dim black underline pa3 pointer"},"Home"),r.a.createElement("p",{onClick:function(){return t("services")},className:"f3 link dim black underline pa3 pointer"},"Services"),r.a.createElement("p",{onClick:function(){return t("aboutus")},className:"f3 link dim black underline pa3 pointer"},"AboutUs"),r.a.createElement("p",{onClick:function(){return t("expenseSlip")},className:"f3 link dim black underline pa3 pointer"},"New ExpenseSlip"),r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):"manager"===n?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 link dim black underline pa3 pointer"},"Home"),r.a.createElement("p",{onClick:function(){return t("services")},className:"f3 link dim black underline pa3 pointer"},"Services"),r.a.createElement("p",{onClick:function(){return t("aboutus")},className:"f3 link dim black underline pa3 pointer"},"AboutUs"),r.a.createElement("p",{onClick:function(){return t("expenseSlip")},className:"f3 link dim black underline pa3 pointer"},"New ExpenseSlip"),r.a.createElement("p",{onClick:function(){return t("approveSlip")},className:"f3 link dim black underline pa3 pointer"},"Approve Expense Report"),r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):a?r.a.createElement("div",null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 link dim black underline pa3 pointer"},"Home"),r.a.createElement("p",{onClick:function(){return t("services")},className:"f3 link dim black underline pa3 pointer"},"Services"),r.a.createElement("p",{onClick:function(){return t("aboutus")},className:"f3 link dim black underline pa3 pointer"},"AboutUs"),r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 link dim black underline pa3 pointer"},"Sign Out"))):r.a.createElement("div",null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 link dim black underline pa3 pointer"},"Home"),r.a.createElement("p",{onClick:function(){return t("services")},className:"f3 link dim black underline pa3 pointer"},"Services"),r.a.createElement("p",{onClick:function(){return t("aboutus")},className:"f3 link dim black underline pa3 pointer"},"AboutUs"),r.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),r.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register")))}),h=function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"h1 f4"},"Welcome to the Automated Expense Management"))},b=t(115),g=t.n(b),d=(t(128),function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"dis w-40",alt:"Expense-Life-Cycle",src:g.a}))}),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onDesignationChange=function(e){n.setState({designation:e.target.value})},n.onSubmitSignIn=function(){"engineer"===n.state.designation?n.props.onRouteChange("employee"):n.props.onRouteChange("manager")},n.state={signInEmail:"",signInPassword:"",designation:""},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=(e.onloadUser,e.onRouteChange);return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"designation"},"Designation"),r.a.createElement("input",{onChange:this.onDesignationChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"designation",id:"designation"})),r.a.createElement("label",{className:"pa0 ma0 lh-copy f6 pointer"},r.a.createElement("input",{type:"checkbox"})," Remember me")),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return a("register")},className:"f4 link dim black db pointer"},"Register"),r.a.createElement("a",{href:"#0",className:"f6 link dim black db pointer"},"Forgot your password?")))))}}]),t}(r.a.Component),f=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Automated payment services"))},v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to know details about us"))},N=(t(48),t(405),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onChangeReportName=function(e){n.setState({reportName:e.target.value})},n.onChangeContactNumber=function(e){n.setState({contactNumber:e.target.value})},n.onChangeReportAddress=function(e){n.setState({reportAddress:e.target.value})},n.onChangeTotalExpenses=function(e){n.setState({designation:e.target.value})},n.onChangeReportDate=function(e){n.setState({reportDate:e.target.value})},n.onChangeExpenseType=function(e){n.setState({expenseType:e.target.value})},n.onChangeBusinessPurpose=function(e){n.setState({businessPurpose:e.target.value})},n.onChangeCountry=function(e){n.setState({country:e.target.value})},n.onChangeMessage=function(e){n.setState({message:e.target.value})},n.onChangeImageUpload=function(e){n.setState({imageUpload:e.target.value})},n.onSubmit=function(){console.log("value "+n.state.contactNumber)},n.state={reportName:"",contactNumber:"",reportAddress:"",totalExpenses:"",reportDate:"",expenseType:"",businessPurpose:"",country:"",message:"",imageUpload:""},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"New Expense"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Report Name"),r.a.createElement("input",{onChange:this.onChangeReportName,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"number"},"Contact Number"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:this.onChangeContactNumber,type:"tel",name:"phone",pattern:"[1-9]{1}[0-9]{9}",placeholder:"1234590678"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"expense type"},"Expense Type"),r.a.createElement("select",{onChange:this.onChangeExpenseType,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"number",min:"0",name:"number",id:"Expense Type"},r.a.createElement("option",{value:" 1"},"Expense Type"),r.a.createElement("option",{value:"1"},"Airfare"),r.a.createElement("option",{value:"1"},"Hotels"),r.a.createElement("option",{value:"1"},"Restaurant"),r.a.createElement("option",{value:"1"},"Meeting with Clients"))),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"Total Expenses"},"Total Expenses"),r.a.createElement("input",{onChange:this.onChangeTotalExpenses,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"number",min:"0",name:"companyName",id:"companyName"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"bussiness purpose"},"Business Purpose"),r.a.createElement("input",{onChange:this.onChangeBusinessPurpose,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"business",id:"business purpose"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"reportDate"},"Report Date"),r.a.createElement("input",{onChange:this.onChangeReportDate,className:"b pa2 input-reset ba bg-transparent hover-white w-90",type:"date",name:"Report Date",id:"report Date"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"country"},"Country"),r.a.createElement("input",{onChange:this.onChangeCountry,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"country",id:"country"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"image Upload"},"Upload Receipt"),r.a.createElement("input",{onChange:this.onChangeImageUpload,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90",type:"file",name:"filename",id:"image Upload"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmit,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Submit"})))))}}]),t}(n.Component)),C=(n.Component,function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Automated Expense Management "),r.a.createElement("h1",null,"Submit Your Expenses to Get Reimbursement"))}}]),t}(r.a.Component)),y=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to the Automated Expense System "),r.a.createElement("h1",null,"Add Expense and Approve Expenses"))}}]),t}(r.a.Component),w=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onChangeReportName=function(e){n.setState({reportName:e.target.value})},n.onChangeContactNumber=function(e){n.setState({contactNumber:e.target.value})},n.onChangeReportAddress=function(e){n.setState({reportAddress:e.target.value})},n.onChangeTotalExpenses=function(e){n.setState({designation:e.target.value})},n.onChangeReportDate=function(e){n.setState({reportDate:e.target.value})},n.onChangeExpenseType=function(e){n.setState({expenseType:e.target.value})},n.onChangeBusinessPurpose=function(e){n.setState({businessPurpose:e.target.value})},n.onChangeCountry=function(e){n.setState({country:e.target.value})},n.onChangeMessage=function(e){n.setState({message:e.target.value})},n.onChangeImageUpload=function(e){n.setState({imageUpload:e.target.value})},n.onSubmit=function(){console.log("value "+n.state.contactNumber)},n.state={reportName:"",contactNumber:"",reportAddress:"",totalExpenses:"",reportDate:"",expenseType:"",businessPurpose:"",country:"",message:"",imageUpload:""},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Expense Report"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Report Name"),r.a.createElement("input",{onChange:this.onChangeReportName,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"number"},"Contact Number"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:this.onChangeContactNumber,type:"tel",name:"phone",pattern:"[1-9]{1}[0-9]{9}",placeholder:"1234590678"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"expense type"},"Expense Type"),r.a.createElement("select",{onChange:this.onChangeExpenseType,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"number",min:"0",name:"number",id:"Expense Type"},r.a.createElement("option",{value:" 1"},"Expense Type"),r.a.createElement("option",{value:"1"},"Airfare"),r.a.createElement("option",{value:"1"},"Hotels"),r.a.createElement("option",{value:"1"},"Restaurant"),r.a.createElement("option",{value:"1"},"Meeting with Clients"))),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"Total Expenses"},"Total Expenses"),r.a.createElement("input",{onChange:this.onChangeTotalExpenses,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"number",min:"0",name:"companyName",id:"companyName"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"bussiness purpose"},"Business Purpose"),r.a.createElement("input",{onChange:this.onChangeBusinessPurpose,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"business",id:"business purpose"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"reportDate"},"Report Date"),r.a.createElement("input",{onChange:this.onChangeReportDate,className:"b pa2 input-reset ba bg-transparent hover-white w-90",type:"date",name:"Report Date",id:"report Date"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"country"},"Country"),r.a.createElement("input",{onChange:this.onChangeCountry,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"country",id:"country"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"image Upload"},"Upload Receipt"),r.a.createElement("input",{onChange:this.onChangeImageUpload,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90",type:"file",name:"filename",id:"image Upload"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmit,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"ApproveExpense"})))))}}]),t}(n.Component),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).loadUser=function(a){e.setState({user:{name:a.name,email:a.email,company:a.company,designation:a.designation,contactNumber:a.contactNumber,joined:a.joined}})},e.onRouteChange=function(a){"signin"===a||"register"===a||"home"===a?e.setState({isSignedIn:!1}):"employee"!==a&&"manager"!==a||e.setState({isSignedIn:!0}),e.setState({route:a}),console.log("Setting the new Route value "+e.state.route),console.log("Given Route value "+a)},e.state={route:"home",isSignedIn:!1,user:{name:"",email:"",company:"",designation:"",contactNumber:"",joined:""}},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.isSignedIn;return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(u,{isSignedIn:e,onRouteChange:this.onRouteChange,route:this.state.route}),"employee"===this.state.route?r.a.createElement("div",null,r.a.createElement(C,{onRouteChange:this.onRouteChange,name:this.state.user.name})):r.a.createElement("div",null,"signin"===this.state.route?r.a.createElement(E,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement("div",null,"register"===this.state.route?r.a.createElement(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement("div",null,"services"===this.state.route?r.a.createElement(f,{onRouteChange:this.onRouteChange}):"aboutus"===this.state.route?r.a.createElement(v,{onRouteChange:this.onRouteChange}):"manager"===this.state.route?r.a.createElement(y,null):"expenseSlip"===this.state.route?r.a.createElement(N,null):"approveSlip"===this.state.route?r.a.createElement(w,null):r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(h,null)))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(406);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[120,1,2]]]);
//# sourceMappingURL=main.3bdeedaa.chunk.js.map