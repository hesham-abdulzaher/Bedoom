function showLoading(){
  let overlay = document.querySelector('.overlay')
  overlay.style.display = 'block'
}

document.addEventListener('load', hideLoading())
function hideLoading(){
  let overlay = document.querySelector('.overlay')
  overlay.style.display = 'none'
}


// Creat Span.errMsg ==>? When user type less than 6 Characters
function creatErrDom(parentInp, textInsideIt){
  var errMsg = document.createElement('span'); // Section baba
  errMsg.classList.add('errMsg');
  errMsg.innerHTML = textInsideIt
  parentInp.appendChild(errMsg);
  return true;
}

// Delete All span.errMsg ==>? when user type more than 6 Characters
function deleteAllErrMsg(parentInp){
  let errMsg = parentInp.querySelectorAll('.errMsg')
  for(let i = 0; i < errMsg.length; i++){
    errMsg[i].remove()
  }
}


// Set top value for home sections
function setTopValue(){
  let container = document.querySelector('.container')
  let aboutMe = document.querySelector('.about-me')
  let dataTop = container.getAttribute('data-top')
  aboutMe.style.top = dataTop + 'px'
  container.style.marginTop = dataTop + 'px'
}
setTopValue();


function dropMenu(){
  let dots = document.querySelectorAll('.dots')
  for(let i = 0; i < dots.length; i++){
    let dropMenu = document.getElementsByClassName('dropmenu')
    listenToDots(dots[i], dropMenu[i])
  }
  function listenToDots(dots, dropMenu){
    dots.addEventListener('click', (e) => {
      dropMenu.classList.toggle('open')
      // closeDropMenu(dropMenu)
    })
  }
  // Close dropMenu if i click anywhere outside it
  // function closeDropMenu(dropMenu){
  //     if(dropMenu.classList == 'dropmenu open'){
  //       document.addEventListener('click', (e) =>{
  //         if(e.target !== dropMenu || dropMenu.contains(e.target)){
  //           console.log(e.target);
  //           console.log('h');
  //         }
  //       })
  //     }else{
  //       console.log('m');
  //     }
  // }

}






/////////
