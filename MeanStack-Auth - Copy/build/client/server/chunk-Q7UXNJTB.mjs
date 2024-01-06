import './polyfills.server.mjs';
import{c as x}from"./chunk-DO3CJIVN.mjs";import{e as c,g,j as h,k as v,l as C}from"./chunk-25XTGQYN.mjs";import{n as s,w as u}from"./chunk-ABW4DCAM.mjs";import{Ia as r,Ja as t,Ka as l,Na as i,Ra as a,U as p,hb as f}from"./chunk-O6CDM36O.mjs";var S=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-header"]],standalone:!0,features:[a],decls:22,vars:0,consts:[[1,"w-full","flex","justify-between","items-center","p-5","bg-indigo-500","shadow-lg"],[1,"logo"],[1,"text-gray-200","text-4xl","flex","justify-start","items"],[1,"search","relative"],[1,"absolute","mt-1.5","mx-3"],["aria-hidden","true",1,"fa","fa-search","font-light"],["type","text","placeholder","Search Book",1,"w-96","p-2","pl-9","rounded","rounded-r-none","text-gray-600"],[1,"bg-slate-400","p-2","rounded-r","text-white","outline-none","outline-0"],[1,"nav-items"],["routerLink","/login",1,"text-xl","cursor-pointer","text-gray-200","font-bold","m-3","hover:underline","hover:text-indigo-200"],["routerLink","/register",1,"text-xl","cursor-pointer","text-gray-200","font-bold","m-3","hover:underline","hover:text-indigo-200"],[1,"text-xl","cursor-pointer","text-gray-200","font-bold","m-3","hover:underline","hover:text-indigo-200"]],template:function(n,d){n&1&&(r(0,"nav",0)(1,"div",1)(2,"span",2),i(3,"BookMYBook"),t()(),r(4,"div",3)(5,"span",4),l(6,"i",5),t(),l(7,"input",6),r(8,"button",7),i(9,"Search"),t()(),r(10,"div",8)(11,"span",9),i(12,"Login"),t(),r(13,"span",10),i(14,"Register"),t(),r(15,"span",11),i(16,"Cart"),t(),r(17,"span",11),i(18,"Welcome User"),t(),r(19,"span",9),i(20,"Logout"),t(),i(21," \xA0\xA0\xA0"),t()())},dependencies:[s,C,h]});let o=e;return o})();var b=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-footer"]],standalone:!0,features:[a],decls:3,vars:0,consts:[[1,"w-full","fixed","bottom-0","bg-gray-500"],[1,"text-white","h-7","flex","mt-4","justify-center","items-center"]],template:function(n,d){n&1&&(r(0,"footer",0)(1,"span",1),i(2," MEAN STACK"),t()())}});let o=e;return o})();var w=(()=>{let e=class e{constructor(){this.title="client"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[a],decls:3,vars:0,template:function(n,d){n&1&&l(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[s,g,S,b]});let o=e;return o})();var E=[{path:"login",loadComponent:()=>import("./chunk-XEETFUOD.mjs")},{path:"register",loadComponent:()=>import("./chunk-S7JVRTTZ.mjs")},{path:"home",loadComponent:()=>import("./chunk-POKGAQUO.mjs")},{path:"forget-password",loadComponent:()=>import("./chunk-DGA7JN36.mjs")},{path:"reset/:token",loadComponent:()=>import("./chunk-VKVAKBBH.mjs")}];var M={providers:[v(E),u()]};var k={providers:[x()]},A=f(M,k);var F=()=>c(w,A),Z=F;export{Z as a};