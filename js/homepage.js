'use strict';

var loginInfo = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

var registerBtn = document.getElementById('register');
var cancelBtn = document.getElementById('cancel');
var submitBtn = document.getElementById('submit');
var button2switch=document.getElementById('button2switch');

function helloUser() {
  var LS = localStorage.getItem('userLogin');
  if (LS && LS.length) {
    loginInfo = JSON.parse(LS);
  }
  if (loginInfo.firstName !== '') {
    registerBtn.className = 'hidden';
    var hello = document.createElement('p');
    hello.className = 'registeredUser';
    hello.textContent = 'Hello ' + loginInfo.firstName;
    console.log(hello);
    var header = document.getElementById('header-nav');
    header.appendChild(hello);
    
    button2switch.textContent='Resume your resume';
  }
}

helloUser();

var form = document.getElementById('registerForm');
var welcome = document.getElementById('welcome');
//opens register form
function unhide(event) {
  if (form.className === 'hidden') {
    form.className = 'unhidden';
  }
  welcome.style.visibility='hidden';
  //set invisible
}

function hide(event) {
  form.className = 'hidden';
  welcome.style.visibility='visible';
  //set background visible
}

//save to local storage function
function saveToLS() {
  var savedUserLogin = JSON.stringify(loginInfo);
  localStorage.setItem('userLogin', savedUserLogin);
}

//on a submit event, passes values to our object and stores them in local storage
function handleRegisterSubmit(event) {
  event.preventDefault();
  loginInfo.firstName = event.target.firstName.value;
  loginInfo.lastName = event.target.lastName.value;
  loginInfo.email = event.target.email.value;
  loginInfo.password = event.target.password.value;

  saveToLS();
  event.target.firstName.value = '';
  event.target.lastName.value = '';
  event.target.email.value = '';
  event.target.password.value = '';
  helloUser();
  window.location.href = 'generator.html';
  
}

var submitForm = document.getElementById('registerForm');


registerBtn.addEventListener('click', unhide);
submitForm.addEventListener('submit', handleRegisterSubmit);
cancelBtn.addEventListener('click', hide);
submitBtn.addEventListener('click', hide);