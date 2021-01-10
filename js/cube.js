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



init();

/*-------------------------------------------------------------
|                                                              |
|                       On Mouse Move                          |
|                                                              |
--------------------------------------------------------------*/

function onMouseMove(e) {
  let p1, angle, i, tmp;
  const cubeR = document.querySelector('.cube');
  const cRoDeg = window.getComputedStyle(cubeR);
  let cubeRotDeg = cRoDeg.transform;

  if (!dragging) return;

  for (i = 0; i < faces.length; i++) {
    faces[i].classList.remove("trans");
    faces[i].classList.add("backgroundH");
  }

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

  } else if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)'|| cubeRotDeg == 'matrix(-1, -1.22465e-16, 1.22465e-16, -1, 0, 0)' ) {

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

  } else if (cubeRotDeg == 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)' || cubeRotDeg == 'matrix(-1.83697e-16, 1, -1, -1.83697e-16, 0, 0)' ) {

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

  } else if (cubeRotDeg == 'matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)' || cubeRotDeg == 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)' ) {

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


/*-------------------------------------------------------------
|                                                              |
|                       On Mouse Down                          |
|                                                              |
--------------------------------------------------------------*/


function onMouseDown(e) {
  let element;

  onMouseUp(); // disable if dragging
  element = e.target;
  //if (! element.classList.contains('face')) return false;

  e.preventDefault();

  window.p0 = {

    'x': e.clientX,
    'y': e.clientY

  };

  dragging = true;
  return false;
}

/*-------------------------------------------------------------
|                                                              |
|                       On Mouse Up                            |
|                                                              |
--------------------------------------------------------------*/

function onMouseUp(e) {
  let i, tmp, style;

  if (!dragging) return;
  dragging = false;

  //Save the state of the style of the cube faces.
  //This ensures that if users switches to dragging,
  //then there will be no jumps because all of the transforms will still be correctly applied.

  for (i = 0; i < faces.length; i++) {

    style = faces[i].style;
    tmp = style.transform || style['-webkit-transform'];
    styles[i] = tmp.replace('perspective(32em) ', '');
  }

  //Reset the window.p0 variable back for scrolling to work
  window.p0 = {

    'x': 0,
    'y': 0

  };
}

/*-------------------------------------------------------------
|                                                              |
|                      Create Cube                             |
|                                                              |
--------------------------------------------------------------*/


function initializeCube() {
  let i, tmp;

  for (i = 0; i < faces.length; i++) {
    if (i < 4) tmp = 'rotateY(' + i * 90 + 'deg)';
    if (i >= 4) tmp = 'rotateX(' + Math.pow(-1, i) * 90 + 'deg)';
    tmp += ' translateZ(' + side / 2 + 'px)';

    faces[i].style.transform = 'rotateX(-13.5deg) rotateY(-20.25deg)'+ p + tmp;
    faces[i].style['-webkit-transform'] ='rotateX(-13.5deg) rotateY(-20.25deg)'+ p + tmp;
    styles.push(tmp);
  }
}


/*-------------------------------------------------------------
|                                                              |
|                         Notice                               |
|                                                              |
--------------------------------------------------------------*/

const notice = document.querySelector('.notice');

const collapse = function() {

  const swA = document.querySelector('.spinwrap');
  const swCS = window.getComputedStyle(swA);
  let sw = swCS.animation;
  const cube = document.querySelector('.cube');

  if (sw == "30s linear 0s infinite normal none running spin") {
    swA.style.animation = "15s linear 0s infinite normal none running tossing";
    cube.style.margin = "-25px -50px";
    cube.style.cursor = "move";
    p = 'perspective(32em)';

    let i, tmp;

    for (i = 0; i < faces.length; i++) {

      tmp = 'rotateX(0deg) rotateY(0deg)' + styles[i];
      faces[i].style.transform = p + tmp;
      faces[i].style['-webkit-transform'] = p + tmp;
    }
  } else {
    //do nothing
  }

  window.addEventListener('mousedown', onMouseDown, false);
  window.addEventListener('mousemove', onMouseMove, false);
  window.addEventListener('mouseup', onMouseUp, false);
  notice.style.display = "none";
}

notice.addEventListener('click', collapse);

/*-------------------------------------------------------------
|                                                              |
|                          init                                |
|                                                              |
--------------------------------------------------------------*/


function init() {

  window.faces = document.querySelectorAll('.face');
  window.styles = new Array();
  window.style = getComputedStyle(faces[0]);
  window.factor = 3;
  window.side = parseInt(style.width.split('px')[0], 10);
  window.max_amount = factor * side;
  window.unit = 360 / max_amount;
  window.dragging = false;
  window.scrolling = false;
  window.p = 'perspective(0em)';

  initializeCube();
}
