(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{36:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(0),o=a(6),r=a.n(o),s=a(7),i=a(43),u=a(18),l=a(8),b=a(19),d=a(20),m=a(23),j=a(21),h=a(5),p=a(44),O={addContact:Object(h.b)("contact/add",(function(t){return{payload:{contact:{text:t,id:Object(p.a)()}}}})),removeContact:Object(h.b)("contact/remove"),changeFilter:Object(h.b)("contact/changeFilter")},f=a(9),x=a.n(f),C=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(b.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(l.a)({},n,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(u.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("form",{className:x.a.TaskEditor,onSubmit:this.handleSubmit,children:[Object(n.jsxs)("label",{className:x.a.TaskEditor_label,children:["Name",Object(n.jsx)("input",{className:x.a.TaskEditor_input,type:"text",name:"name",placeholder:"Your name",autoComplete:"off",autoFocus:"on",value:this.state.name,onChange:this.handleChange})]}),Object(n.jsxs)("label",{className:x.a.TaskEditor_label,children:["Number",Object(n.jsx)("input",{className:x.a.TaskEditor_input,type:"text",name:"number",placeholder:"Your number",autoComplete:"off",value:this.state.number,onChange:this.handleChange})]}),Object(n.jsx)("button",{className:x.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}}]),a}(c.Component),v={onAddContact:O.addContact},_=Object(s.b)(null,v)(C),k=a(45),N=(a(36),{onRemoveContact:O.removeContact}),g=Object(s.b)((function(t){var e=t.contact,a=e.contactsItems,n=e.filter.toLowerCase();return{contacts:a.filter((function(t){return t.text.name.toLowerCase().includes(n)}))}}),N)((function(t){var e=t.contacts,a=t.onRemoveContact;return Object(n.jsx)(k.a,{component:"ul",className:"TaskList",children:e.map((function(t){var e=t.id,c=t.text;return Object(n.jsx)(i.a,{timeout:250,classNames:"ContactListAppear",children:Object(n.jsxs)("li",{className:"TaskList_item",children:[c.name,": ",c.number,Object(n.jsx)("button",{className:"TaskList_button",type:"button",name:"delete",onClick:function(){return a(e)},children:"x"})]})},e)}))})})),E=(a(37),{onChangeFilter:O.changeFilter}),T=Object(s.b)((function(t){return{value:t.contact.filter}}),E)((function(t){var e=t.value,a=t.onChangeFilter;return Object(n.jsxs)("div",{className:"Filter",children:[Object(n.jsx)("h2",{className:"FilterName",children:"Find contacts by name"}),Object(n.jsx)("input",{className:"FilterInput",type:"text",placeholder:"Enter name",value:e,onChange:function(t){return a(t.target.value)}})]})}));a(38);var F=function(){return Object(n.jsx)("h1",{className:"HeaderName",children:"Phonebook"})},y=a.p+"static/media/logo.6ce24c58.svg";a(39);var A=function(){return Object(n.jsx)("img",{src:y,className:"App-logo",alt:"logo"})};a(40);var w,L=function(){return Object(n.jsxs)("div",{className:"Wrapper",children:[Object(n.jsx)(i.a,{in:!0,appear:!0,timeout:500,classNames:"HeaderAppear",unmountOnExit:!0,children:function(t){return Object(n.jsxs)("div",{className:"Header",children:[Object(n.jsx)(F,{}),Object(n.jsx)(i.a,{in:"entered"===t,timeout:500,classNames:"LogoAppear",unmountOnExit:!0,children:Object(n.jsx)(A,{})})]})}}),Object(n.jsx)(_,{}),Object(n.jsx)(T,{}),Object(n.jsx)("h2",{className:"ContactsName",children:"Contacts"}),Object(n.jsx)(g,{})]})},S=a(22),I=a(4),H=Object(h.c)([],(w={},Object(l.a)(w,O.addContact,(function(t,e){return[].concat(Object(S.a)(t),[e.payload.contact])})),Object(l.a)(w,O.removeContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),w)),q=Object(h.c)("",Object(l.a)({},O.changeFilter,(function(t,e){return e.payload}))),J=Object(I.c)({contactsItems:H,filter:q}),R=Object(h.a)({reducer:{contact:J}});r.a.render(Object(n.jsx)(s.a,{store:R,children:Object(n.jsx)(L,{})}),document.querySelector("#root"))},9:function(t,e,a){t.exports={TaskEditor:"ContactForm_TaskEditor__26-i2",TaskEditor_label:"ContactForm_TaskEditor_label__2kaG_",TaskEditor_input:"ContactForm_TaskEditor_input__3iSFO",TaskEditorinput:"ContactForm_TaskEditorinput__22gbe",TaskEditor_button:"ContactForm_TaskEditor_button__36UqI"}}},[[41,1,2]]]);
//# sourceMappingURL=main.2010473c.chunk.js.map