/*-------------------------------------------------------------
|                                                              |
|                     Display Functions                        |
|                                                              |
--------------------------------------------------------------*/
window.onload = fadeInText();

function fadeInText() {

  const type = document.querySelectorAll('.axis');
  let i, j; //loop variables

  for(i=0; i<type.length;i++){

    const spans = type[i].getElementsByTagName("span");
    type[i].innerHTML = type[i].textContent.replace(/./g,"<span>$&</span>");

    for(j=0;j<spans.length;j++){

      spans[j].style.animationDelay = j*800+"ms";
    }
  }
}

let rotate = 0;

function fcRight() {
  const cube = document.querySelector('.cube');
  rotate = rotate + 90;
  cube.style.transform = 'rotate('+ rotate +'deg)';

  const cRoDeg = window.getComputedStyle(cube);
  let cubeRotDeg = cRoDeg.transform;
  console.log(cubeRotDeg);
}

function fcLeft() {
  rotate = rotate - 90;
  const cube = document.querySelector('.cube');
  cube.style.transform = 'rotate('+ rotate +'deg)';

  const cRoDeg = window.getComputedStyle(cube);
  let cubeRotDeg = cRoDeg.transform;
  console.log(cubeRotDeg);
}

function fcDown() {
  rotate = rotate - 180;
  const cube = document.querySelector('.cube');
  cube.style.transform = 'rotate('+ rotate +'deg)';

  const cRoDeg = window.getComputedStyle(cube);
  let cubeRotDeg = cRoDeg.transform;
  console.log(cubeRotDeg);
}

function fcUp() {
  rotate = rotate + 180;
  const cube = document.querySelector('.cube');
  cube.style.transform = 'rotate('+ rotate +'deg)';

  const cRoDeg = window.getComputedStyle(cube);
  let cubeRotDeg = cRoDeg.transform;
  console.log(cubeRotDeg);
}

/*
  Left movements: rotate Y 90 degrees
  Right movements: rotate Y -90 degrees
  Top movements: rotate X -90
  Bottom movesments: rotate X 90
*/
