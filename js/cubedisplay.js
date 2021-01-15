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
  let i;
  if(!doOnce) {
    notice.classList.add('hide');
    document.querySelector('.left').classList.remove('hide');
    doOnce = true;
  }

  if (doOnce) {
    document.querySelector('.left').classList.remove('hide');
    for (i = 0; i < faces.length; i++) {
      faces[i].removeEventListener("mousedown", start, false);
      window.removeEventListener("mousemove", rotateZ, false);
      window.removeEventListener("mouseup", stop, false);
    }
    document.querySelector('.right').classList.add('hide');
  }

  cube.addEventListener('mousedown', onMouseDown, false);
  document.body.addEventListener('mousemove', onMouseMove, false);
  document.body.addEventListener('mouseup', onMouseUp, false);
}








function fcRight() {
  let i;
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
  for (i = 0; i < faces.length; i++) {
    faces[i].addEventListener('mousedown', start, false);
    window.addEventListener('mousemove', rotateZ, false);
    window.addEventListener('mouseup', stop, false);
  }
}
