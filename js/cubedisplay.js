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
  rotate = rotate + 90;

  const cube = document.querySelector('.cube');
  let cubeRotDeg = window.getComputedStyle(cube).transform;

  if (cubeRotDeg == 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)'){
    rotate = 0;
  }

  cube.style.transform = 'rotate('+ rotate +'deg)';

  const roDeg = window.getComputedStyle(cube);
  let ubeRotDeg = roDeg.transform;
  console.log(ubeRotDeg);
}

function fcLeft() {
  rotate = rotate - 90;

  const cube = document.querySelector('.cube');
  let cubeRotDeg = window.getComputedStyle(cube).transform;

  if (cubeRotDeg == 'matrix(-1.83697e-16, 1, -1, -1.83697e-16, 0, 0)'){
    rotate = 0;
  }

  cube.style.transform = 'rotate('+ rotate +'deg)';

  const roDeg = window.getComputedStyle(cube);
  let ubeRotDeg = roDeg.transform;
  console.log(ubeRotDeg);
}

function fcDown() {
  rotate = rotate + 180;

  const cube = document.querySelector('.cube');
  let cubeRotDeg = window.getComputedStyle(cube).transform;

  if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)'){
    rotate = 0;
  } else if (cubeRotDeg == 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)'){
    rotate = -270;
  } else if (cubeRotDeg == 'matrix(-1.83697e-16, 1, -1, -1.83697e-16, 0, 0)'){
    rotate = 270;
  }

  cube.style.transform = 'rotate('+ rotate +'deg)';

  const roDeg = window.getComputedStyle(cube);
  let ubeRotDeg = roDeg.transform;
  console.log(ubeRotDeg);
}

function fcUp() {
  rotate = rotate + 180;

  const cube = document.querySelector('.cube');
  let cubeRotDeg = window.getComputedStyle(cube).transform;

  if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)'){
    rotate = 0;
  } else if (cubeRotDeg == 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)'){
    rotate = -270;
  } else if (cubeRotDeg == 'matrix(-1.83697e-16, 1, -1, -1.83697e-16, 0, 0)'){
    rotate = 270;
  }

  cube.style.transform = 'rotate('+ rotate +'deg)';

  const roDeg = window.getComputedStyle(cube);
  let ubeRotDeg = roDeg.transform;
  console.log(ubeRotDeg);
}

/*
  Left movements: rotate Y 90 degrees
  Right movements: rotate Y -90 degrees
  Top movements: rotate X -90
  Bottom movesments: rotate X 90
*/
