init();

/*-------------------------------------------------------------
|                                                              |
|                       On Mouse Move                          |
|                                                              |
--------------------------------------------------------------*/

function onMouseMove(e) {
  let i, tmp, p1;
  let cubeRotDeg = cRoDeg.transform;

  if (!dragging) return;

  for (i = 0; i < faces.length; i++) {
    faces[i].classList.remove("trans");
    faces[i].classList.add("backgroundH");
  }

  if (cubeRotDeg == 'matrix(1, 0, 0, 1, 0, 0)') {

    p1 = {'x': e.clientX - p0.x, 'y': e.clientY - p0.y },
    angle = {'x': -p1.y * unit + angle1.x, 'y':  p1.x * unit + angle1.y },
    absoluteR = {'x': angle.x, 'y': angle.y };

    if (angle.x < 0) absoluteR.x = angle.x + 360;
    if (angle.y < 0) absoluteR.y = angle.y + 360;


    if (angle.x <= -360 || angle.x >= 360) {
      angle1.x = null;
      p0.y = e.clientY;
    } else if (angle.y <= -360 || angle.y >= 360) {
      angle1.y = null;
      p0.x = e.clientX;
    }

    for (i = 0; i < faces.length; i++) {
      tmp = 'rotateX(' + absoluteR.x + 'deg)' + ' rotateY(' + absoluteR.y + 'deg)' + styles[i];
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

  //Saving angle to stack later
  angle1 = {
      'x': angle.x,
      'y': angle.y
    };

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
function collapse() {
  const swA = document.querySelector('.spinwrap');
  const swCS = window.getComputedStyle(swA);
  let sw = swCS.animation;

  if (sw == "30s linear 0s infinite normal none running spin") {
    swA.style.animation = "15s linear 0s infinite normal none running tossing";
    cube.style.margin = "-25px -50px";
    cube.style.cursor = "move";
    p = 'perspective(32em)';

    let i, tmp, j, h;

    for (i = 0; i < faces.length; i++) {

      tmp = '' + styles[i];
      faces[i].style.transform = p + tmp;
      faces[i].style['-webkit-transform'] = p + tmp;
    }

    for (j = 0; j < functions.length; j++){
      functions[j].classList.add('hide');

      for (h = 0; h < 4; h++){
        functions[h].classList.remove('hide');
      }
    }
  } else {
    //do nothing
  }

  window.addEventListener('mousedown', onMouseDown, false);
  window.addEventListener('mousemove', onMouseMove, false);
  window.addEventListener('mouseup', onMouseUp, false);
  notice.style.display = "none";
}

/*-------------------------------------------------------------
|                                                              |
|                          init                                |
|                                                              |
--------------------------------------------------------------*/


function init() {

  window.faces = document.querySelectorAll('.face');
  window.functions = document.querySelectorAll('.face .functions')
  window.cube = document.querySelector('.cube');
  window.notice = document.querySelector('.notice');

  window.savedx = new Array();
  window.savedy = new Array();
  window.styles = new Array();

  window.cRoDeg = getComputedStyle(cube);
  window.style = getComputedStyle(faces[0]);

  window.factor = 3;
  window.side = parseInt(style.width.split('px')[0], 10);
  window.max_amount = factor * side;
  window.unit = 360 / max_amount;

  window.dragging = false;
  window.scrolling = false;

  window.p = 'perspective(0em)';
  window.angle = {'x': 0,'y': 0};
  window.angle1 = {'x': null, 'y': null};
  window.absoluteR = {'x': null, 'y': null};

  initializeCube();
  notice.addEventListener('click', collapse, false);
}
