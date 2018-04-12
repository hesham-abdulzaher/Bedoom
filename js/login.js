let loginBtn = document.getElementById('login')

loginBtn.addEventListener('click', (e) => {
  let userName = document.getElementById('username')
  let password = document.getElementById('password')
  showLoading()

  axios.post('https://bedoom-api.herokuapp.com/users/login', {
    username: username.value,
    password: password.value
  })
  .then(function(response){
    console.log(response);
    if(response.data.success == true){
      console.log(response.data);
      let token = response.data.token
      let id = response.data.user.id
      let name = response.data.user.name
      let username = response.data.user.username
      let phone = response.data.user.phone
      let email = response.data.user.email
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("username", username);
      localStorage.setItem("name", name);
      localStorage.setItem("phone", phone);
      localStorage.setItem("email", email);
      setTimeout(function(){
        location.replace('home.php')
      }, 1000)
    }else{
      console.error('SomeThing is wrong');
      let parentInp = document.getElementById('password').parentNode
      let textInsideIt = 'One of these inputs is invalid'
      let inputs = document.querySelectorAll('input')
      for(let i = 0; i < inputs.length; i++){
        inputs[i].classList.add('err-border')
        console.log(inputs[i]);
      }
      hideLoading()
      creatErrDom(parentInp, textInsideIt)
    }
  })
  .catch(function(error){
    console.log(error);
  })
})
