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


/*________________________________________________________________________________________

This is supposed to be attached at the end of the if statement in the mouse drag function

_________________________________________________________________________________________*/

else if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)'|| cubeRotDeg == 'matrix(-1, -1.22465e-16, 1.22465e-16, -1, 0, 0)' ) {

  p1 = {
      'x': e.clientX - p0.x,
      'y': e.clientY - p0.y
    },
    angle = {
      'x': p1.y * unit + angle1.x,
      'y': -p1.x * unit + angle1.y
    };

  if (angle.x <= -360 || angle.x >= 360) {
    angle1.x = null;
    p0.y = e.clientY;
  } else if (angle.y <= -360 || angle.y >= 360) {
    angle1.y = null;
    p0.x = e.clientX;
  }

  for (i = 0; i < faces.length; i++) {
    tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
    faces[i].style.transform = p + tmp;
    faces[i].style['-webkit-transform'] = p + tmp;
  }

} else if (cubeRotDeg == 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)' || cubeRotDeg == 'matrix(-1.83697e-16, 1, -1, -1.83697e-16, 0, 0)' ) {

  p1 = {
      'x': e.clientX - p0.x,
      'y': e.clientY - p0.y
  },
  angle = {
      'x': p1.x * unit + angle1.x,
      'y': p1.y * unit + angle1.y
    };

  if (angle.x <= -360 || angle.x >= 360) {
    angle1.x = null;
    p0.x = e.clientX;
  } else if (angle.y <= -360 || angle.y >= 360) {
    angle1.y = null;
    p0.y = e.clientY;
  }

  for (i = 0; i < faces.length; i++) {
    tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY('+ angle.y + 'deg)' + styles[i];
    faces[i].style.transform = p + tmp;
    faces[i].style['-webkit-transform'] = p + tmp;
  }

} else if (cubeRotDeg == 'matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)' || cubeRotDeg == 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)' ) {

  p1 = {
      'x': e.clientX - p0.x,
      'y': e.clientY - p0.y
    },
    angle = {
      'x': -p1.x * unit + angle1.x,
      'y': -p1.y * unit + angle1.y
    };

  if (angle.x <= -360 || angle.x >= 360) {
    angle1.x = null;
    p0.x = e.clientX;
  } else if (angle.y <= -360 || angle.y >= 360) {
    angle1.y = null;
    p0.y = e.clientY;
  }

  for (i = 0; i < faces.length; i++) {
    tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
    faces[i].style.transform = p + tmp;
    faces[i].style['-webkit-transform'] = p + tmp;
  }
}


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
