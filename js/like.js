function likeFunctionality(){
  let likeBtn = document.querySelectorAll('.like-btn')
  for(let i = 0; i < likeBtn.length; i++){
    litenToLike(likeBtn[i])
  }

  function litenToLike(likeBtn){
    likeBtn.addEventListener('click', (e) =>{
      likeBtn.classList.toggle('active')
      let postId = likeBtn.getAttribute('data-post-id')
      let userId = likeBtn.getAttribute('data-user-id')
      axios.post('https://bedoom-api.herokuapp.com/posts/like', {
        "post_id": postId,
        "user_id": userId
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

    })
  }
}
