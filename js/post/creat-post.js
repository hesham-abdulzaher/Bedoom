
// Creat post function
function creatPost(data){
  let postsHome = document.querySelector('.posts-home')
  // Creat Post Section
  let postSection = document.createElement('section')
  postSection.classList.add('post-section')
  postsHome.prepend(postSection)


  // Creat User Information
  let userInfo = document.createElement('div')
  userInfo.classList.add('user-info')
  postSection.appendChild(userInfo)
  // Creat His Children (authorImg, authorName, dateofPost)
  let authorImg = document.createElement('img') // author Img
  authorImg.setAttribute('src', './img/user.svg')
  userInfo.appendChild(authorImg)

  let fromData = document.createElement('div') // author Img
  userInfo.appendChild(fromData)

  let authorName = document.createElement('div') // author Name
  authorName.classList.add('author-name')
  authorName.innerHTML = data.author.name
  fromData.appendChild(authorName)

  let datePost = document.createElement('div') // Date of Post
  datePost.classList.add('date-post')
  datePost.innerHTML = data.created_at
  fromData.appendChild(datePost)
  // End Part #1 from post


  // Part #2
  let postDescription = document.createElement('div') // Description post
  postDescription.classList.add('post-description')
  postDescription.innerHTML = data.body
  postSection.appendChild(postDescription)


  // Part #3
  let settings = document.createElement('div') // Settings Post
  settings.classList.add('settings')
  userInfo.appendChild(settings)
  // Creat His Children (dots, dropmenu)
  // Creat Dots
  let dots = document.createElement('div')
  dots.classList.add('dots')
  settings.appendChild(dots)
  // His Children
  function creatSpans(){
    let span = document.createElement('span')
    dots.appendChild(span)
  }
  creatSpans()
  creatSpans()
  creatSpans()

  // Creat dropmenu
  let dropmenu = document.createElement('div')
  dropmenu.classList.add('dropmenu')
  dots.appendChild(dropmenu)

  // His Children
  let editBtn = document.createElement('div')
  editBtn.classList.add('editBtn')
  editBtn.innerHTML = '<div>Edit <i class="ion-edit"></i></div>'
  dropmenu.appendChild(editBtn)

  let deleteBtn = document.createElement('div')
  deleteBtn.classList.add('deleteBtn')
  deleteBtn.innerHTML = '<div>Delete <i class="ion-android-delete"></i></div>'
  deleteBtn.setAttribute('data-id', data._id)
  dropmenu.appendChild(deleteBtn)


  // Part #4
  // Creat Like and comment buttons
  let likeBtn = document.createElement('div')
  likeBtn.classList.add('like-btn')
  likeBtn.innerHTML = '<div><i class="ion-android-favorite"></i> Like</div>'
  likeBtn.setAttribute('data-user-id', data.author._id)
  likeBtn.setAttribute('data-post-id', data._id)
  postSection.appendChild(likeBtn)


}
