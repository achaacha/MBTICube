/*-------------------------------------------------------------
|                                                              |
|                     Display Functions                        |
|                                                              |
--------------------------------------------------------------*/
window.onload = fadeInText();
function fadeInText() {
  const type = document.querySelectorAll('.axis');
  let i, j;

  for(i=0; i<type.length;i++){
    const spans = type[i].getElementsByTagName("span");
    type[i].innerHTML = type[i].textContent.replace(/./g,"<span>$&</span>");

    for(j=0;j<spans.length;j++){
      spans[j].style.animationDelay = j*800+"ms";
    }
  }
}


/*-------------------------------------------------------------
|                                                              |
|                     Notice                                   |
|                                                              |
--------------------------------------------------------------*/

function fcLeft() {
  if(!doOnce) {
    notice.classList.add('hide');
    document.querySelector('.left').classList.remove('hide');
    doOnce = true;
  }

  if (doOnce) {
    document.querySelector('.left').classList.remove('hide');
    faces[0].removeEventListener("mousedown", start, false);
    window.removeEventListener("mousemove", rotate2, false);
    window.removeEventListener("mouseup", stop, false);
    document.querySelector('.right').classList.add('hide');
  }

  cube.addEventListener('mousedown', onMouseDown, false);
  document.body.addEventListener('mousemove', onMouseMove, false);
  document.body.addEventListener('mouseup', onMouseUp, false);
}








function fcRight() {

  if(!doOnce) {
    notice.classList.add('hide');
    document.querySelector('.right').classList.remove('hide');
    doOnce = true;
  }

  if(doOnce) {
    document.querySelector('.right').classList.remove('hide');
    cube.removeEventListener('mousedown', onMouseDown, false);
    document.body.removeEventListener('mousemove', onMouseMove, false);
    document.body.removeEventListener('mouseup', onMouseUp, false);
    document.querySelector('.left').classList.add('hide');
  }

  faces[0].addEventListener('mousedown', start, false);
  window.addEventListener('mousemove', rotate2, false);
  return window.addEventListener('mouseup', stop, false);
}
