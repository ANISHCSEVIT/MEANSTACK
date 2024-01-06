import{a as q}from"./chunk-7YJJMY5Q.js";import{b as F,d as y}from"./chunk-QIQWE7K2.js";import{a as P,b as p,c as S,d as C,e as x,f as _,g as E,h as R,i as k,j as N}from"./chunk-QB5HFY4N.js";import{k as g,l as b}from"./chunk-6ZQXSXXF.js";import{Ca as d,Da as w,Fa as c,Ga as o,Ha as i,Ia as u,Ka as h,La as a,Pa as v,U as l,W as f,sa as n}from"./chunk-JKSXHEAT.js";function I(e,t){e&1&&(o(0,"span",9),a(1,"*Password is required"),i())}function D(e,t){e&1&&(o(0,"span",9),a(1,"*Confirm Password is required"),i())}function M(e,t){e&1&&(o(0,"span",9),a(1,"*Password Didn't Match"),i())}var K=(()=>{let t=class t{constructor(){this.fb=l(R),this.activatedRoute=l(F),this.router=l(y),this.authService=l(N)}ngOnInit(){this.resetForm=this.fb.group({password:["",p.compose([p.required])],confirmPassword:["",p.required]},{validator:q("password","confirmPassword")}),this.activatedRoute.params.subscribe(m=>{this.token=m.token,console.log(this.token)})}reset(){let m={token:this.token,password:this.resetForm.value.password};this.authService.resetPasswordService(m).subscribe({next:s=>{alert(s.message),this.resetForm.reset(),this.router.navigate(["login"])},error:s=>{alert(s.error.message)}})}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=f({type:t,selectors:[["app-reset"]],standalone:!0,features:[v],decls:16,vars:7,consts:[[1,"lg:w-3/12","mt-10","p-10","shadow-lg","mx-auto"],[1,"text-3xl","text-center","font-semibold","py-5"],[1,"flex","flex-col",3,"formGroup"],[1,"mb-4"],[1,"flex","flex-col","mt-4","mb-1"],["formControlName","password","type","password","placeholder","Password",1,"p-2","border","border-gray-300","rounded"],["class"," text-red-500",4,"ngIf"],["formControlName","confirmPassword","type","password","placeholder","Confirm Password",1,"p-2","border","border-gray-300","rounded"],[1,"bg-indigo-500","w-1/4","mr-3","p-2","rounded-md","text-gray-50",3,"disabled","click"],[1,"text-red-500"]],template:function(s,r){s&1&&(o(0,"div",0)(1,"h3",1),a(2,"Reset Your Password"),i(),o(3,"form",2)(4,"span",3),a(5," Your password must atleast 7 Charcters long."),i(),o(6,"div",4),u(7,"input",5),c(8,I,2,0,"span",6),i(),o(9,"div",4),u(10,"input",7),c(11,D,2,0,"span",6)(12,M,2,0,"span",6),i(),o(13,"div")(14,"button",8),h("click",function(){return r.reset()}),a(15,"Submit"),i()()()()),s&2&&(n(3),d("formGroup",r.resetForm),n(5),d("ngIf",r.resetForm.hasError("required","password")&&r.resetForm.controls.password.dirty),n(3),d("ngIf",r.resetForm.hasError("required","confirmPassword")&&r.resetForm.controls.confirmPassword.dirty),n(1),d("ngIf",r.resetForm.hasError("confirmPasswordValidator","confirmPassword")),n(2),w("disabled",r.resetForm.invalid),d("disabled",r.resetForm.invalid))},dependencies:[b,g,k,x,P,S,C,_,E]});let e=t;return e})();export{K as default};
