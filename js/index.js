// !html element
var LoginEmail = $("#signInEmail");
var loginpassword = $("#signInPass");

var singUpName = $("#singUpName")[0];
var singUpEmail = $("#singUpEmail")[0];
var singUpPassword = $("#singUpPassword")[0];
var singUpRePassword= $("#singUpRePassword")[0];

var btnSignUp = $("#btnSignUp");
var btnSignIn = $("#btnSignIn");


// ^Variable
var users;
if (localStorage.getItem("Users") != null) {
  users = JSON.parse(localStorage.getItem("Users"));
} else {
  users = [];
}

// to say welcome in home page
var uName = "";
if ((uName = localStorage.getItem("seesionUser"))) {
  $("#welcomeUser").html(`Welcome ${uName}`);
}

// &Function

// --------for sign UP--------

function signUP() {
  // document.getElementById("signUpMess").innerHTML =``;
  if (isSignUpEmpty() == true) {
    $("#signUpMess").html('<span class="p-2 text-danger">All inputs is required</span>');
    return false;
  }


  if (isSignUpEmailExit() == true) {
    $("#signUpMess").html('<span class="p-2 text-danger">Email Exist</span>');
    return;
  }

  $('.loading').addClass('d-flex')
  if (
    validateInput(singUpName) &&
    validateInput(singUpEmail) &&
    validateInput(singUpPassword)&&
    validateInput(singUpRePassword)
  ) {
    var user = {
      name: singUpName.value,
      email: singUpEmail.value,
      password: singUpPassword.value,
    };
    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
   
    $("#signUpMess").html('<span class="p-2 text-success">Add Success</span>');
    setTimeout(()=>{
      $('.loading').removeClass('d-flex').addClass('d-none')
      window.location.href='../index.html'
    },1000)


    clearForm();
  } 
}

function isSignUpEmpty(){
  if (singUpName.value == "" || singUpEmail.value == ""|| singUpPassword.value == "" ||singUpRePassword.value==""){
    return true;
  }
}

function isSignUpEmailExit() {
  var email = singUpEmail.value;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      return true;
    }
  }
}




// -------for Login---------- 
function signIN() {
  var email = LoginEmail.val();
  var password = loginpassword.val();

  if (isloginEmpty() == true) {
   $("#wrong").html('<span class="p-2 text-danger">All inputs is required</span>');
    return false;
  }

  if (isLoginEmailExit(email)) {
    
    $("#emailExit").html("Email not Exist You must sign up first");
    document.getElementById("emailExit").classList.replace("d-none", "d-block");
    LoginEmail.addClass("is-invalid");
    return false;
  }

  $('.loading').addClass('d-flex')

  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase().includes(email.toLowerCase()) && password == users[i].password) {
      localStorage.setItem("seesionUser", users[i].name);
        setTimeout(()=>{
        $('.loading').removeClass('d-flex').addClass('d-none')
        window.location.href='./pages/home.html' 
       },1000)
      return true;
    }
  }
  $('.loading').removeClass('d-flex').addClass('d-none')

 $("#wrong").html( '<span class="p-2 text-danger">incorrect email or password</span>')
   ;
}

function isloginEmpty() {
  if (LoginEmail.val() == "" || loginpassword.val()== "") {
    return true;
  }
}

function isLoginEmailExit(email) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() == email.toLowerCase()) {
      return false;
    }
  }
  return true;
}

// --------Validation---------
function validateInput(element) {
  // password must begain with capital litter and contain number
  console.log(element)
  var regix = {
    signInEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    signInPass: /^(?=.*?[a-z])?(?=.*?[A-Z])(?=.*?[0-9]).{5,}$/,
    singUpName:
      /^([a-zA-Z]{1,10})?(\s{1,})?([a-zA-Z]{1,10})?(\s{1,})?([a-z]{1,10})?$/,
    singUpEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    singUpPassword: /^(?=.*?[a-z])?(?=.*?[A-Z])(?=.*?[0-9]).{5,}$/,
  };

  if(element.id=='singUpRePassword'){
    if($('#singUpPassword').val()==element.value)
        {
          isValid(element)     
             return true;

        }else{
          isInValid(element)
            return false;

        } 
    return
}
  
  if (regix[element.id].test(element.value) == true) {
    isValid(element)
    return true;
  } else {
    isInValid(element)
    return false;
  }
}

function isValid(element){
  element.classList.add("is-valid");
  element.classList.remove("is-invalid");
  element.nextElementSibling.classList.replace("d-block", "d-none");
  element.nextElementSibling.nextElementSibling.classList.replace(  "d-block","d-none");
  return true;
}
function isInValid(element){
  element.classList.add("is-invalid");
  element.classList.remove("is-valid");
  element.nextElementSibling.classList.replace("d-none", "d-block");
  return false;
}
// --------clear Form---------
function clearForm() {
  singUpName.value="" 
  singUpName.classList.remove("is-valid");
  singUpEmail.value="" 
  singUpEmail.classList.remove("is-valid");
  singUpPassword.value="" 
  singUpPassword.classList.remove("is-valid");
}

function logout() {
  localStorage.removeItem('seesionUser');
}

