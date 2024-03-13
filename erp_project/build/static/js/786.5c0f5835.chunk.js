"use strict";(self.webpackChunkNK=self.webpackChunkNK||[]).push([[786],{62854:(e,t,r)=>{r.d(t,{A:()=>h});var a=r(98587),o=r(58168),n=r(9950),s=r(60533),i=r(74061),c=r(74719),l=r(59254),d=r(65471),p=r(44414);const u=(0,d.A)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=r(1817),v=r(24763);const A=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],g=(0,c.h)("MuiAvatar"),f=(0,l.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,o.A)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,o.A)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]}})),b=(0,l.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,l.Ay)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const h=n.forwardRef((function(e,t){const r=g({props:e,name:"MuiAvatar"}),{alt:c,children:l,className:d,component:u="div",slots:h={},slotProps:x={},imgProps:w,sizes:k,src:S,srcSet:C,variant:M="circular"}=r,I=(0,a.A)(r,A);let P=null;const O=function(e){let{crossOrigin:t,referrerPolicy:r,src:a,srcSet:o}=e;const[s,i]=n.useState(!1);return n.useEffect((()=>{if(!a&&!o)return;i(!1);let e=!0;const n=new Image;return n.onload=()=>{e&&i("loaded")},n.onerror=()=>{e&&i("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=a,o&&(n.srcset=o),()=>{e=!1}}),[t,r,a,o]),s}((0,o.A)({},w,{src:S,srcSet:C})),R=S||C,N=R&&"error"!==O,F=(0,o.A)({},r,{colorDefault:!N,component:u,variant:M}),D=(e=>{const{classes:t,variant:r,colorDefault:a}=e,o={root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,i.A)(o,m.k,t)})(F),[j,T]=(0,v.A)("img",{className:D.img,elementType:b,externalForwardedProps:{slots:h,slotProps:{img:(0,o.A)({},w,x.img)}},additionalProps:{alt:c,src:S,srcSet:C,sizes:k},ownerState:F});return P=N?(0,p.jsx)(j,(0,o.A)({},T)):l||0===l?l:R&&c?c[0]:(0,p.jsx)(y,{ownerState:F,className:D.fallback}),(0,p.jsx)(f,(0,o.A)({as:u,ownerState:F,className:(0,s.A)(D.root,d),ref:t},I,{children:P}))}))},1817:(e,t,r)=>{r.d(t,{A:()=>s,k:()=>n});var a=r(80863),o=r(68483);function n(e){return(0,o.Ay)("MuiAvatar",e)}const s=(0,a.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},40777:(e,t,r)=>{r.d(t,{A:()=>s,K:()=>n});var a=r(80863),o=r(68483);function n(e){return(0,o.Ay)("MuiDivider",e)}const s=(0,a.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},92455:(e,t,r)=>{r.d(t,{A:()=>s,f:()=>n});var a=r(80863),o=r(68483);function n(e){return(0,o.Ay)("MuiListItemIcon",e)}const s=(0,a.A)("MuiListItemIcon",["root","alignItemsFlexStart"])},88543:(e,t,r)=>{r.d(t,{A:()=>s,b:()=>n});var a=r(80863),o=r(68483);function n(e){return(0,o.Ay)("MuiListItemText",e)}const s=(0,a.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},27987:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(98587),o=r(58168),n=r(9950),s=r(60533),i=r(74061),c=r(99269),l=r(59254),d=r(48283),p=r(13372),u=r(70590),m=r(79044),v=r(31506),A=r(40777),g=r(92455),f=r(88543),b=r(72359),y=r(44414);const h=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],x=(0,l.Ay)(u.A,{shouldForwardProp:e=>(0,l.ep)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:r}=e;return(0,o.A)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(b.A.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(b.A.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(b.A.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(b.A.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(b.A.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(A.A.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(A.A.inset)]:{marginLeft:52},["& .".concat(f.A.root)]:{marginTop:0,marginBottom:0},["& .".concat(f.A.inset)]:{paddingLeft:36},["& .".concat(g.A.root)]:{minWidth:36}},!r.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},r.dense&&(0,o.A)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(g.A.root," svg")]:{fontSize:"1.25rem"}}))})),w=n.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:l="li",dense:u=!1,divider:A=!1,disableGutters:g=!1,focusVisibleClassName:f,role:w="menuitem",tabIndex:k,className:S}=r,C=(0,a.A)(r,h),M=n.useContext(p.A),I=n.useMemo((()=>({dense:u||M.dense||!1,disableGutters:g})),[M.dense,u,g]),P=n.useRef(null);(0,m.A)((()=>{c&&P.current&&P.current.focus()}),[c]);const O=(0,o.A)({},r,{dense:I.dense,divider:A,disableGutters:g}),R=(e=>{const{disabled:t,dense:r,divider:a,disableGutters:n,selected:s,classes:c}=e,l={root:["root",r&&"dense",t&&"disabled",!n&&"gutters",a&&"divider",s&&"selected"]},d=(0,i.A)(l,b.Z,c);return(0,o.A)({},c,d)})(r),N=(0,v.A)(P,t);let F;return r.disabled||(F=void 0!==k?k:-1),(0,y.jsx)(p.A.Provider,{value:I,children:(0,y.jsx)(x,(0,o.A)({ref:N,role:w,tabIndex:F,component:l,focusVisibleClassName:(0,s.A)(R.focusVisible,f),className:(0,s.A)(R.root,S)},C,{ownerState:O,classes:R}))})}))},72359:(e,t,r)=>{r.d(t,{A:()=>s,Z:()=>n});var a=r(80863),o=r(68483);function n(e){return(0,o.Ay)("MuiMenuItem",e)}const s=(0,a.A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"])},24763:(e,t,r)=>{r.d(t,{A:()=>u});var a=r(58168),o=r(98587),n=r(44093),s=r(34364),i=r(48407),c=r(51407);const l=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],p=["component"];function u(e,t){const{className:r,elementType:u,ownerState:m,externalForwardedProps:v,getSlotOwnerState:A,internalForwardedProps:g}=t,f=(0,o.A)(t,l),{component:b,slots:y={[e]:void 0},slotProps:h={[e]:void 0}}=v,x=(0,o.A)(v,d),w=y[e]||u,k=(0,s.Y)(h[e],m),S=(0,i.p)((0,a.A)({className:r},f,{externalForwardedProps:"root"===e?x:void 0,externalSlotProps:k})),{props:{component:C},internalRef:M}=S,I=(0,o.A)(S.props,p),P=(0,n.A)(M,null==k?void 0:k.ref,t.ref),O=A?A(I):{},R=(0,a.A)({},m,O),N="root"===e?C||b:C,F=(0,c.X)(w,(0,a.A)({},"root"===e&&!b&&!y[e]&&g,"root"!==e&&!y[e]&&g,I,N&&{as:N},{ref:P}),R);return Object.keys(O).forEach((e=>{delete F[e]})),[w,F]}},74719:(e,t,r)=>{r.d(t,{h:()=>o});var a=r(48283);function o(e){return a.A}}}]);