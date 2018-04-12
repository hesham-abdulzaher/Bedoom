const newPostBtn = document.getElementById('new-post')
const newTextarea = document.querySelector('textarea')

newPostBtn.addEventListener('click', (e) => {
  let textarea = document.querySelector('textarea')
  if(textarea.value.length > 0){
    axios.post('https://bedoom-api.herokuapp.com/posts/new', {
      body: textarea.value,
      author: localStorage.getItem('id')
    },{
      headers: {'Authorization': localStorage.getItem('token')}
    })
    .then((response) => {
      console.log(response);
      if(response.data.success === true){
        textarea.value = ''
        newPost(response.data)
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
})

// Set Placeholder
let nameInLocalStorage = localStorage.getItem('name')
newTextarea.setAttribute('placeholder', `What's on your mind, ${nameInLocalStorage}?`)


function newPost(data){
  creatPost(data.post)
  openDropMenu()
}
