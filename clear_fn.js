//clear_func.js
// import updatedoc from './input.js';
// import {ed_arr} from './input.js';
let clear_btn=document.getElementById("clear-btn");
//callbackfunction:

function cb_clear(){
    alert("do you want to clear the code?")
    for (let i = 0; i < 3; i++) {
        //editor se htana
        console.log("hey");
        
        ed_arr[i].setValue(""); 
        //localstorage se htana
        localStorage.setItem(lcl_Strg_keys[i],"");
        jsEditor.setValue("");
    }
    updatedoc();
}


//add the event listener to button with the callback:

clear_btn.addEventListener("click", cb_clear);//only give the definition, otherwise the function will be called and the vslue will be returned
// clear_btn.addEventListener("click", cb_clearI(a,b));//this calls the function kuchu puchu