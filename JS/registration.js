function validate() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const password = document.getElementById("pwd").value;
    const confirmPassword = document.getElementById("confPwd").value;
    const email = document.getElementById("eml").value;
    const correctEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    const correctName = /^[A-Za-z]+$/;
    const correctPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/;

    if (firstName === "" ||email ==="" || password === "" || confirmPassword === "" ) {
      // window.confirm("Field should not be empty");
      emptyFieldMessage();
    }
    if (firstName.match(correctName)) {
      // true;
      document.getElementById("massage").innerHTML = "";

  }
   else {
      document.getElementById("massage").innerHTML = " only alphabets are allowed";
      return false;
  }
  if (email.match(correctEmail))
      true;
  else {
      emailValidate();
      return false;
  }

  if (password.match(correctPassword))
      true;
      //       document.getElementById("massage1").innerHTML = "";

  else {
      //       document.getElementById("massage1").innerHTML = "Minimum 4 characters, at least one letter, one number and one special character:";
      passwordValidate();
      return false;
  }

  if (password != confirmPassword) {
      // window.alert("Passwords do not match.");
      // return false;
      passwordMessage();

  } else {
    sendFun();
    successMessage();
  }
}



function successMessage() {
    var x = document.getElementById("msg");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function emptyFieldMessage() {
   var x = document.getElementById("msg1");
   x.className = "show";
   setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function passwordMessage() {
   var x = document.getElementById("msg2");
   x.className = "show";
   setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function  passwordValidate() {
   var x = document.getElementById("msg3");
   x.className = "show";
   setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function emailValidate() {
   var x = document.getElementById("msg4");
   x.className = "show";
   setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function sendFun() {
 let firstName = document.getElementById('fname').value;
 let lastName = document.getElementById('lname').value;
 let email = document.getElementById('eml').value;
 let password = document.getElementById('pwd').value;

 let userObj = {
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "password":password
            
            // "email":email
        }
const url = "http://localhost:4000/users";
let xhr = new XMLHttpRequest();
xhr.response = "json";
xhr.open('POST', url, true)
xhr.onload = ()=>{
    if(xhr.status===200){
      console.log(xhr.response);
      location.assign("login.html");
    } else {
        console.log("data not send")
    }
}
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
xhr.send(JSON.stringify(userObj));    

}

