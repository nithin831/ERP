"use strict";(self.webpackChunkNK=self.webpackChunkNK||[]).push([[746],{3580:(e,t,i)=>{i.d(t,{A:()=>n});i(9950);var a=i(72772),l=i(44414);const n=e=>{let{title:t,description:i,children:n}=e;return(0,l.jsxs)("div",{children:[(0,l.jsxs)(a.m,{children:[(0,l.jsx)("title",{children:t}),(0,l.jsx)("meta",{name:"description",content:i})]}),n]})}},89928:(e,t,i)=>{i.d(t,{A:()=>d});i(9950);var a=i(2683),l=i(62633),n=i(87233),r=i(12257),s=i(52346),c=i(44414);const d=e=>{let{title:t,subtitle:i,children:d,action:o,footer:h,cardheading:x,headtitle:u,headsubtitle:j,middlecontent:p}=e;return(0,c.jsxs)(a.A,{sx:{padding:0},elevation:9,variant:void 0,children:[x?(0,c.jsxs)(l.A,{children:[(0,c.jsx)(n.A,{variant:"h5",children:u}),(0,c.jsx)(n.A,{variant:"subtitle2",color:"textSecondary",children:j})]}):(0,c.jsxs)(l.A,{sx:{p:"30px"},children:[t?(0,c.jsxs)(r.A,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",mb:3,children:[(0,c.jsxs)(s.A,{children:[t?(0,c.jsx)(n.A,{variant:"h5",children:t}):"",i?(0,c.jsx)(n.A,{variant:"subtitle2",color:"textSecondary",children:i}):""]}),o]}):null,d]}),p,h]})}},1746:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var a=i(9950),l=i(4139),n=i(3580),r=i(89928),s=i(55956),c=i.n(s),d=i(44414);const o=[{id:1,title:"Vivo v21e",category:"Phone",date:"March 14, 2024",price:27580,available:20},{id:2,title:"FireBolt Watch",category:"Watch",date:"March 14, 2024",price:3500,available:10},{id:3,title:"Red Jacket",category:"Dress",date:"March 14, 2024",price:1250,available:15},{id:4,title:"Vikas Chair",category:"Furniture",date:"March 14, 2024",price:3200,available:30}],h=()=>{const[e,t]=(0,a.useState)(o);return(0,d.jsx)(c(),{title:"Products",options:{actionsColumnIndex:-1,addRowPosition:"first"},data:e,columns:[{title:"ID",field:"id"},{title:"Name",field:"title"},{title:"Category",field:"category"},{title:"Price",field:"price"},{title:"Available",field:"available"},{title:"Date",field:"date"}],editable:{onRowAdd:i=>new Promise(((a,l)=>{const n=[...e,i];setTimeout((()=>{t(n),a()}),2e3)})),onRowDelete:i=>new Promise(((a,l)=>{const n=i.tableData.id,r=[...e];r.splice(n,1),setTimeout((()=>{t(r),a()}),2e3)})),onRowUpdate:(i,a)=>new Promise(((l,n)=>{const r=a.tableData.id,s=[...e];s[r]=i,setTimeout((()=>{t(s),l()}),2e3)}))}})},x=()=>(0,d.jsx)(n.A,{title:"Product",description:"this is Product",children:(0,d.jsx)(l.Ay,{container:!0,spacing:3,children:(0,d.jsx)(l.Ay,{item:!0,sm:12,children:(0,d.jsx)(r.A,{title:"Products",children:(0,d.jsx)(l.Ay,{container:!0,spacing:3,children:(0,d.jsx)(l.Ay,{item:!0,xs:12,children:(0,d.jsx)(h,{})})})})})})})}}]);