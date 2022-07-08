
// login
let signIn = $('#sign-in-page')
let signUp = $('#sign-up-page')
function registerPgee() {
    signUp.removeClass('none')
    signIn.addClass('none')

}

function backToLogin() {
    signUp.addClass('none')
    signIn.removeClass('none')
}
function registerPateint() {
    signUp.addClass('none')
    signIn.removeClass('none')
}

// forget password
function forgetPassword(){
    window.open('forgot-password.html', "_self")
}

function backToLoginPage(){
    window.open('login.html', "_self")
}
// end login


function loginToDashbord() {
    window.open("dashboard.html", "_self");
}

function registerAsPatient() {
    window.open("register-as-patient.html", "_self");
}
function RegisterAsAgent() {
    window.open("register-as-agent.html", "_self");
}

//password fild eye
const eyePass = document.getElementById('eye-password')
const inputPass = document.getElementById('input-pass')
if(eyePass){
   eyePass.addEventListener('click', function(){
    const type = inputPass.getAttribute('type') === 'password' ? 'text' : 'password'
    inputPass.setAttribute('type', type)
})
      
}






  

