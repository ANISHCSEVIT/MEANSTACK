import{a as u,c,e as x,f as h,g}from"./chunk-QIQWE7K2.js";import{l as s,r as f}from"./chunk-6ZQXSXXF.js";import{Ga as r,Ha as o,Ia as l,La as i,Pa as p,W as a}from"./chunk-JKSXHEAT.js";var v=[{path:"login",loadComponent:()=>import("./chunk-NV7I3BJS.js")},{path:"register",loadComponent:()=>import("./chunk-2BQ2NOOV.js")},{path:"home",loadComponent:()=>import("./chunk-ROY7G46Y.js")},{path:"forget-password",loadComponent:()=>import("./chunk-CT3NPPLJ.js")},{path:"reset/:token",loadComponent:()=>import("./chunk-T6ZFII2B.js")}];var C={providers:[h(v),f()]};var S=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["app-header"]],standalone:!0,features:[p],decls:22,vars:0,consts:[[1,"w-full","flex","justify-between","items-center","p-5","bg-indigo-500","shadow-lg"],[1,"logo"],[1,"text-gray-200","text-4xl","flex","justify-start","items"],[1,"search","relative"],[1,"absolute","mt-1.5","mx-3"],["aria-hidden","true",1,"fa","fa-search","font-light"],["type","text","placeholder","Search Book",1,"w-96","p-2","pl-9","rounded","rounded-r-none","text-gray-600"],[1,"bg-slate-400","p-2","rounded-r","text-white","outline-none","outline-0"],[1,"nav-items"],["routerLink","/login",1,"text-xl","cursor-pointer","text-gray-200","font-bold","m-3","hover:underline","hover:text-indigo-200"],["routerLink","/register",1,"text-xl","cursor-pointer","text-gray-200","font-bold","m-3","hover:underline","hover:text-indigo-200"],[1,"text-xl","cursor-pointer","text-gray-200","font-bold","m-3","hover:underline","hover:text-indigo-200"]],template:function(n,d){n&1&&(r(0,"nav",0)(1,"div",1)(2,"span",2),i(3,"BookMYBook"),o()(),r(4,"div",3)(5,"span",4),l(6,"i",5),o(),l(7,"input",6),r(8,"button",7),i(9,"Search"),o()(),r(10,"div",8)(11,"span",9),i(12,"Login"),o(),r(13,"span",10),i(14,"Register"),o(),r(15,"span",11),i(16,"Cart"),o(),r(17,"span",11),i(18,"Welcome User"),o(),r(19,"span",9),i(20,"Logout"),o(),i(21," \xA0\xA0\xA0"),o()())},dependencies:[s,g,x]});let t=e;return t})();var b=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["app-footer"]],standalone:!0,features:[p],decls:3,vars:0,consts:[[1,"w-full","fixed","bottom-0","bg-gray-500"],[1,"text-white","h-7","flex","mt-4","justify-center","items-center"]],template:function(n,d){n&1&&(r(0,"footer",0)(1,"span",1),i(2," MEAN STACK"),o()())}});let t=e;return t})();var w=(()=>{let e=class e{constructor(){this.title="client"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:3,vars:0,template:function(n,d){n&1&&l(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[s,c,S,b]});let t=e;return t})();u(w,C).catch(t=>console.error(t));
