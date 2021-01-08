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

      p1 = {
          'x': sl - p0.x,
          'y': st - p0.y
        },
        angle = {
          'x': -p1.y * unit,
          'y': p1.x * unit
        };

      for (i = 0; i < faces.length; i++) {
        tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
        faces[i].style.transform = p + tmp;
        faces[i].style['-webkit-transform'] = p + tmp;

        //Save the state of the style of the cube faces.
        //This ensures that if the user switches
        //to dragging, then there will be no jumps because all of the transforms will still be correctly applied.

        style = faces[i].style;
        const tmpStyle = style.transform || style['-webkit-transform'];
        styles[i] = tmpStyle.replace('perspective(32em) ', '');
      }


    } else if (st == lastScrollTop) {

      //do nothing
      //In IE this is an important condition because there seems
      //to be some instances where the last scrollTop is equal to the new one

    } else {

      let p1, angle, i, tmp;
      p1 = {
          'x': sl - p0.x,
          'y': st - p0.y
        },
        angle = {
          'x': -p1.y * unit,
          'y': p1.x * unit
        };

      for (i = 0; i < faces.length; i++) {

        tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
        faces[i].style.transform = p + tmp;
        faces[i].style['-webkit-transform'] = p + tmp;

        //Save the state of the style of the cube faces.
        //This ensures that if the user switches
        //to dragging, then there will be no jumps because all of the transforms will still be correctly applied.

        style = faces[i].style;
        const tmpStyle = style.transform || style['-webkit-transform'];
        styles[i] = tmpStyle.replace('perspective(32em) ', '');

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
  } else if (cubeRotDeg == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)' ) {
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

  const teR = document.querySelector('.b');
  const teD = window.getComputedStyle(teR);
  let teRD = teD.transform;

  console.log(teRD);
}

/*-------------------------------------------------------------
|                                                              |
|                      Create Cube                            |
|                                                              |
--------------------------------------------------------------*/


function initializeCube() {
  let i, tmp;

  for (i = 0; i < faces.length; i++) {
    if (i < 4) tmp = 'rotateY(' + i * 90 + 'deg)';
    if (i >= 4) tmp = 'rotateX(' + Math.pow(-1, i) * 90 + 'deg)';
    tmp += ' translateZ(' + side / 2 + 'px)';

    faces[i].style.transform = p + tmp;
    faces[i].style['-webkit-transform'] = p + tmp;
    styles.push(tmp);
  }
}


/*-------------------------------------------------------------
|                                                              |
|                          init                                |
|                                                              |
--------------------------------------------------------------*/


function init() {
  window.addEventListener('mousedown', onMouseDown, false);
  window.addEventListener('mouseup', onMouseUp, false);
  window.addEventListener('mousemove', onMouseMove, false);

  window.faces = document.querySelectorAll('.face');
  window.styles = new Array();
  window.style = getComputedStyle(faces[0]);
  window.factor = 3;
  window.side = parseInt(style.width.split('px')[0], 10);
  window.max_amount = factor * side;
  window.unit = 360 / max_amount;
  window.dragging = false;
  window.scrolling = false;
  window.p = 'perspective(32em)';

  initializeCube();
}
