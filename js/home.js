// Get Posts
function getPosts(){
  axios.get('https://bedoom-api.herokuapp.com/posts/all')
  .then((res) => {
    console.log(res);
    // Loop for every Post
    let response = res.data
    for(let i = 0; i < response.length; i++ ){
      let post = response[i]
      creatPost(post)
    }
    if(res.status == 200){
      dropMenu()
      likeFunctionality()
    }

  })
  .catch((err) => {
    console.log(err);
  })

}
getPosts();
// document.addEventListener('click', (e) => getPosts())
