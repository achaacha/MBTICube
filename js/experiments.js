/*----------------------------------------------------------

This is the document ready function that needs to be implemented,
make sure to alter the code when the functionality has been updated.

------------------------------------------------------------*/

ready(function(){
  let lastScrollTop = 0;

  //Set the initial state of window.p0 so that scrolling works without clicking
  window.p0 = {
    'x': 0,
    'y': 0
  };

  window.scroll(function trucenscroll(e) {
    const st = this.scrollTop();
    const sl = this.scrollLeft();

    if (st > lastScrollTop) {

      //Rotate cube

      let p1, angle, i, tmp;
      const cubeR = document.querySelector('.cube');
      const cRoDeg = window.getComputedStyle(cubeR);
      let cubeRotDeg = cRoDeg.transform;

      if (cubeRotDeg == 'matrix(1, 0, 0, 1, 0, 0)') {

        p1 = {
            'x': e.clientX - p0.x,
            'y': e.clientY - p0.y
          },
          angle = {
            'x': -p1.y * unit,
            'y': p1.x * unit
          };


        for (i = 0; i < faces.length; i++) {
          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;
        }

      } else if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)' || cubeRotDeg == 'matrix(-1, -1.22465e-16, 1.22465e-16, -1, 0, 0)') {

        p1 = {
            'x': e.clientX - p0.x,
            'y': e.clientY - p0.y
          },
          angle = {
            'x': p1.y * unit,
            'y': -p1.x * unit
          };

        for (i = 0; i < faces.length; i++) {
          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;
        }

      } else if (cubeRotDeg == 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)' ) {

        p1 = {
            'x': e.clientX - p0.x,
            'y': e.clientY - p0.y
          },
          angle = {
            'x': p1.x * unit,
            'y': p1.y * unit
          };

        for (i = 0; i < faces.length; i++) {

          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;
        }

      } else if (cubeRotDeg == 'matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)' ) {

        p1 = {
            'x': e.clientX - p0.x,
            'y': e.clientY - p0.y
          },

          angle = {
            'x': -p1.x * unit,
            'y': -p1.y * unit
          };

        for (i = 0; i < faces.length; i++) {
          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;
        }
      }

    } else if (st == lastScrollTop) {

      //do nothing
      //In IE this is an important condition because there seems
      //to be some instances where the last scrollTop is equal to the new one

    } else {

      let p1, angle, i, tmp;
      const cubeR = document.querySelector('.cube');
      const cRoDeg = window.getComputedStyle(cubeR);
      let cubeRotDeg = cRoDeg.transform;

      if (cubeRotDeg == 'matrix(1, 0, 0, 1, 0, 0)') {

        p1 = {
            'x': e.clientX - p0.x,
            'y': e.clientY - p0.y
          },
          angle = {
            'x': -p1.y * unit,
            'y': p1.x * unit
          };


        for (i = 0; i < faces.length; i++) {

          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;

        }

      } else if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)' || cubeRotDeg == 'matrix(-1, -1.22465e-16, 1.22465e-16, -1, 0, 0)' ) {

        p1 = {
            'x': e.clientX - p0.x,
            'y': e.clientY - p0.y
          },
          angle = {
            'x': p1.y * unit,
            'y': -p1.x * unit
          };


        for (i = 0; i < faces.length; i++) {
          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;
        }

      } else if (cubeRotDeg == 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)' ) {

        p1 = {
            'x': e.clientX - p0.x,
            'y': e.clientY - p0.y
          },
          angle = {
            'x': p1.x * unit,
            'y': p1.y * unit
          };


        for (i = 0; i < faces.length; i++) {
          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;
        }

      } else if (cubeRotDeg == 'matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)' ) {

        p1 = {
            'x': e.clientX - p0.x,
            'y': e.clientY - p0.y
          },
          angle = {
            'x': -p1.x * unit,
            'y': -p1.y * unit
          };

        for (i = 0; i < faces.length; i++) {
          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;
        }
      }

    }
    lastScrollTop = st;
  });
});

/*___________________________________________________________________________

This is supposed to be inside the bottom of the first mouse drag if statement

_____________________________________________________________________________*/

//face f
if (angle.x == 0 && angle.x <= 59|| angle.x == 0 && angle.x >= -59) {
  let j, h;
  for (j = 0; j < functions.length; j++){
    functions[j].classList.add('hide');
    for (h = 0; h < 4; h++){
      functions[h].classList.remove('hide');
    }
  }
} else if (angle.x <= -321 && angle.x >= -360 || angle.x >= 321 && angle.x <= 360 ){
  let j, h;
  for (j = 0; j < functions.length; j++){
    functions[j].classList.add('hide');
    for (h = 0; h < 4; h++){
      functions[h].classList.remove('hide');
    }
  }
}
//face R



//face b
if (angle.x <= -138 && angle.x >= -229 || angle.x >= 138 && angle.x <= 219) {
  let j, h;
  for (j = 0; j < functions.length; j++){
    functions[j].classList.add('hide');
    for (h = 8; h < 12; h++){
      functions[h].classList.remove('hide');
    }
  }
} else if (angle.y >= 140 && angle.y <= 230 || angle.y <= -134 && angle.y >= -225) {
  let j, h;
  for (j = 0; j < functions.length; j++){
    functions[j].classList.add('hide');
    for (h = 8; h < 12; h++){
      functions[h].classList.remove('hide');
    }
  }
}

//face L
if (angle.y >= 50 && angle.y <= 136 || angle.y <= -226 && angle.y >= -316){
  let j, h;
  for (j = 0; j < functions.length; j++){
    functions[j].classList.add('hide');
    for (h = 12; h < 16; h++){
      functions[h].classList.remove('hide');
    }
  }
}

//face T
if (angle.x <= -60 && angle.x >= -140 || angle.x >= 220 && angle.x <= 320) {
  let j, h;
  for (j = 0; j < functions.length; j++){
    functions[j].classList.add('hide');
    for (h = 16; h < 20; h++){
      functions[h].classList.remove('hide');
    }
  }
}

//face B
if (angle.x <= -230 && angle.x >= -320 || angle.x >= 40 && angle.x <= 137) {
  let j, h;
  for (j = 0; j < functions.length; j++){
    functions[j].classList.add('hide');
    for (h = 20; h < 24; h++){
      functions[h].classList.remove('hide');
    }
  }
}



/*-------------------------------------------------------------
|                                                              |
|                      Return String                           |
|                                                              |
--------------------------------------------------------------*/
function adjustRot180(str, num) {
  if (num > 0)
    return str.repeat(num);
  else
    return "";
}


 //-------------------------------------------------------------------------------
 //This was inside Mouse Down to accompany the Return String


let element, i, str, pos180x, pos180y;

let cubeRotDeg = cRoDeg.transform;

if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)' && doOnce
  || cubeRotDeg == 'matrix(-1, -1.22465e-16, 1.22465e-16, -1, 0, 0)' && doOnce) {
  doOnce = false;
  for (i = 0; i < positional.length; i++){
    pos180x = positional[i].x - 180;
    pos180y = positional[i].y - 180;

    str = 'rotateX(' + pos180x + 'deg)' + ' rotateY(' + pos180y + 'deg) ';

    console.log(adjustRot180(str, 1));
  }
}




/*-------------------------------------------------------------
|                                                              |
|                Cube Wrapper Rotations                        |
|                                                              |
--------------------------------------------------------------*/
/*-----------------
|      Right      |
-----------------*/
function fcRight() {
  let i;

  rotate = rotate + 90;
  let cubeRotDeg = cRoDeg.transform;

  if (cubeRotDeg == 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)'){
    rotate = 0;
  }

  cube.style.transform = 'rotate('+ rotate +'deg)';
}

/*-----------------
|       Left      |
-----------------*/
function fcLeft() {
  let i;

  rotate = rotate - 90;
  let cubeRotDeg = cRoDeg.transform;

  if (cubeRotDeg == 'matrix(-1.83697e-16, 1, -1, -1.83697e-16, 0, 0)'){
    rotate = 0;
  }

  cube.style.transform = 'rotate('+ rotate +'deg)';
}

/*-----------------
|       Down      |
-----------------*/
function fcDown() {
  let i;
  checking = false;

  rotate = rotate + 180;
  let cubeRotDeg = cRoDeg.transform;

  if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)'){
    rotate = 0;
  } else if (cubeRotDeg == 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)'){
    rotate = -270;
  } else if (cubeRotDeg == 'matrix(-1.83697e-16, 1, -1, -1.83697e-16, 0, 0)'){
    rotate = 270;
  }

  cube.style.transform = 'rotate('+ rotate +'deg)';
}

/*-----------------
|       Up        |
-----------------*/
function fcUp() {
  let i;

  rotate = rotate + 180;
  let cubeRotDeg = cRoDeg.transform;

  if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)'){
    rotate = 0;
  } else if (cubeRotDeg == 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)'){
    rotate = -270;
  } else if (cubeRotDeg == 'matrix(-1.83697e-16, 1, -1, -1.83697e-16, 0, 0)'){
    rotate = 270;
  }

  cube.style.transform = 'rotate('+ rotate +'deg)';
}




---------------------------------------------------------------------------------------------------------




//Rotate

function start(e) {
  let height, left, top, width, x, y, _ref;
  e.preventDefault();
  /*_ref = this.getBoundingClientRect(), top = _ref.top, left = _ref.left, height = _ref.height, width = _ref.width;
  center = {
    'x': left + (width / 2),
    'y': top + (height / 2)
  };
  x = e.clientX - center.x;
  y = e.clientY - center.y;
  startAngle = r2D * Math.atan2(y, x);
  return active = true;
}

function rotate(e) {
  let d, x, y;
  e.preventDefault();
  x = e.clientX - center.x;
  y = e.clientY - center.y;
  d = r2D * Math.atan2(y, x);
  rotation2 = d - startAngle;
  if (active) {
    return this.style.webkitTransform = "rotate(" + (angle2 + rotation2) + "deg)";
  }
}


function stop(e) {
  angle2 += rotation2;
  return active = false;
}

//inside init

//New shit

window.active = false;
window.angle2 = 0;
window.rotation2 = 0;
window.startAngle = 0;
window.center = {'x': 0, 'y': 0};


window.r2D = 180 / Math.PI;

cube.addEventListener("mousedown", start, false);
cube.addEventListener("mousemove", rotate, false);
cube.addEventListener("mouseup", stop, false);
