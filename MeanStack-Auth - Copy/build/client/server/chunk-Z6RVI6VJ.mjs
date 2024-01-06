import './polyfills.server.mjs';
var l=(t,s)=>o=>{let e=o.controls[t],r=o.controls[s];r.errors&&!r.errors.confirmPasswordValidator||(e.value!==r.value?r.setErrors({confirmPasswordValidator:!0}):r.setErrors(null))};export{l as a};
