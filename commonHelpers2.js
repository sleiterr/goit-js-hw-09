import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},o=document.querySelector(".feedback-form"),s=o.querySelector('input[name="email"]'),m=o.querySelector('textarea[name="message"]'),l=()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.email=t.email,e.message=t.message,s.value=e.email,m.value=e.message}},n=()=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))},i=a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),s.value="",m.value="",e.email="",e.message=""};o.addEventListener("input",a=>{const{name:t,value:r}=a.target;e[t]=r,n()});o.addEventListener("submit",i);window.addEventListener("load",l);
//# sourceMappingURL=commonHelpers2.js.map