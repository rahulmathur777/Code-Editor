//dark_mode_func.js

let dark_btn=document.getElementById("dark-theme-btn");
let light_btn=document.getElementById("light-theme-btn");
//callbackfunction:

function cb_dark(){
    let body=document.querySelector("body");
    body.classList.toggle('target');
    // target.style.backgroundColor= 'black';
    // target.style.color = 'white';
}

// function cb_light(){
//     let target=document.querySelector("body")
    
//     target.style.backgroundColor= 'white';
//     target.style.color = 'black';
// }


//add the event listener to button with the callback:

dark_btn.addEventListener("click", cb_dark);//only give the definition, otherwise the function will be called and the vslue will be returned
// light_btn.addEventListener("click", cb_light);//only give the definition, otherwise the function will be called and the vslue will be returned
// clear_btn.addEventListener("click", cb_clearI(a,b));//this calls the function kuchu puchu