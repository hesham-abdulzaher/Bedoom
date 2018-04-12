// Validate all the length of inputs
let validateLength = document.querySelectorAll('input[data-min-length]')
for(let i = 0; i < validateLength.length; i++){
  let el = validateLength[i]
  let targetLength = parseInt(el.getAttribute('data-min-length'))
  el.addEventListener('focusout', (e) => {
    let parentInp = e.target.parentNode
    let textInsideIt = 'Please use between 6 and 30 characters'
    if(e.target.value.length < targetLength){
      deleteAllErrMsg(parentInp)
      creatErrDom(parentInp, textInsideIt)
      el.classList.remove('valid')
      el.style.border = '1px solid #e74c3c'
    }else{
      el.style.border = '1px solid #d9d9d9'
      deleteAllErrMsg(parentInp)
      el.classList.add('valid')
    }
  })
}


// data-should validation
let allShould = document.querySelectorAll('input[data-should]')
for(let i = 0; i < allShould.length; i++){
  let el = allShould[i];
  let type = el.getAttribute('data-should')
  el.addEventListener('focusout', (e) => {
    let msg = validateByType(type, e.target.value);
    let parentInp = e.target.parentNode
    if(msg == null){
      let textInsideIt = 'You should type a valid phone'
      deleteAllErrMsg(parentInp)
      creatErrDom(parentInp, textInsideIt)
      el.style.border = '1px solid #e74c3c'
    }else if (msg == false) {
      let textInsideIt = 'You should type a valid email'
      deleteAllErrMsg(parentInp)
      creatErrDom(parentInp, textInsideIt)
      el.classList.remove('valid')
      el.style.border = '1px solid #e74c3c'
    }else{
      el.style.border = '1px solid #d9d9d9'
      deleteAllErrMsg(parentInp)
      el.classList.add('valid')
    }
  })
}

// data-should-match => Confirm Password
let confirmPassword = document.querySelector('input[data-should-match]')
let dataShouldMatch = confirmPassword.getAttribute('data-should-match')
let passwordInp = document.getElementById('reg-pass')
confirmPassword.addEventListener('focusout', (e) => {

  let textInsideIt = 'These password don\'t match'
  let parentInp = e.target.parentNode

  if(confirmPassword.value !== passwordInp.value){
    deleteAllErrMsg(parentInp)
    creatErrDom(parentInp, textInsideIt)
    confirmPassword.classList.remove('valid')
    confirmPassword.style.border = '1px solid #e74c3c'
  }else{
    confirmPassword.style.border = '1px solid #d9d9d9'
    deleteAllErrMsg(parentInp)
    confirmPassword.classList.add('valid')
  }
})


// Validate Email
function validateEmail(email){
  var syntax = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var testEmail = syntax.test(email)
  if(testEmail == false){
    return false;
  }else{
    return true;
  }
}
// Validate Phone number
function validatePhone(phoneNumber){
  if(isNaN(phoneNumber) || phoneNumber.length !== 11){
    return false
  }else{
    return true
  }
}


function validateByType(type, text){
  if(type === 'email'){
    return validateEmail(text);
  }
  if(type === 'phone'){
    return validatePhone(text);
  }

  return null;
}


// When Clicked on submitBtn
let submitBtn = document.getElementById('reg-submit-btn')
submitBtn.addEventListener('click', (e) => {
  let inputs = document.querySelectorAll('input')
  let validInputs = document.getElementsByClassName('valid')
  if(inputs.length == validInputs.length){
    postRegister()
  }
})


// Post Registration
function postRegister(){

  let nameValue = document.getElementById('reg-name')
  let fullNameValue = document.getElementById('reg-fullname')
  let passValue = document.getElementById('reg-pass')
  let emailValue = document.getElementById('reg-email')
  let phoneValue = document.getElementById('reg-phone')
  showLoading()

  axios.post('https://bedoom-api.herokuapp.com/users/register', {
      name: nameValue,
      username: fullNameValue,
      password: passValue,
      email: emailValue,
      phone: phoneValue,
    })
    .then(function (response) {
      console.log(response);
      if(response.data.success == true){
        setTimeout(function(){
          location.replace('home.php')
        }, 1000)
      }else{
        console.error('SomeThing is wrong');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
