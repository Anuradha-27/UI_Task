// function validate() {
//     let email = document.getElementById('email').value;
//     const correctEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
//     if (!email.match(correctEmail)) {
//         emailValidate();
//         return false;
//     } else {
//         successMessage();
//     } 
// }
// function emailValidate() {
//     var x = document.getElementById("msg4");
//     x.className = "show";
//     setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
//  }
  
 function successMessage() {
    var x = document.getElementById("msg");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 6000);
} 


function sendLoginFun() {
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('psw').value;
    
    let userObj = {
              
               "email":email,
               "password":password
         }
        
   const url = "http://localhost:4000/login";
   let xhr = new XMLHttpRequest();
   xhr.responseType = "json";
   xhr.open('POST', url, true);
   xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
   xhr.send(JSON.stringify(userObj));  
   xhr.onload = function (){
       if(xhr.status===200){
        if(xhr.response.success===true){
            document.getElementById('error-message').innerHTML = "";
            location.assign("dashboard.html");
        }
         
       }
       if(xhr.status===404) {
        if(xhr.response.error===true){
            console.log("not found");
            document.getElementById('error-message').innerHTML = "Invalid email or password";

        }
       }
   }
     
}   