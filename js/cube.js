init();


/*-------------------------------------------------------------
|                                                              |
|                       Face 4x4x4                             |
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


  p1 = {'x': e.clientX - p0.x, 'y': e.clientY - p0.y };

  if (rotation >= 320 || rotation <= 40) {

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

  }

  if ( rotation <= 319 && rotation >= 220 ) { //rotate left

    angle = {'x': -p1.x * unit + angle1.x,'y': -p1.y * unit + angle1.y},
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

  }

  if (rotation <= 219 && rotation >= 140) { //upside down

    angle = {'x': p1.y * unit + angle1.x,'y': -p1.x * unit + angle1.y},
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

  }

  if (rotation <= 139 && rotation >= 41) { //rotate right

    angle = {'x': p1.x * unit + angle1.x, 'y': p1.y * unit + angle1.y},
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

  }

  for (i = 0; i < faces.length; i++) {
    tmp = 'rotate(' + rotation + 'deg)' + 'rotateX(' + absoluteR.x + 'deg)' + ' rotateY(' + absoluteR.y + 'deg)' + styles[i];

    faces[i].style.transform = p + tmp;
    faces[i].style['-webkit-transform'] = p + tmp;
  }

}

function onMouseDown(e) {
  let element;

  onMouseUp(); //disable if dragging
  element = e.target;
  e.preventDefault();

  window.p0 = {
    'x': e.clientX,
    'y': e.clientY
  };

  dragging = true;
  return false;
}


function onMouseUp(e) {
  let i;

  if (!dragging) return;
  dragging = false;

  angle1 = {'x': angle.x, 'y': angle.y};

  if (absoluteR.x >= 40 && absoluteR.x <= 150 || absoluteR.x >= 230 && absoluteR.x <= 310) {
    for (i = 0; i < faces.length; i++){
      styles[i] = 'rotateX(' + absoluteR.x + 'deg)' + ' rotateY(' + absoluteR.y + 'deg) ' + styles[i];
    }
    angle1 = {'x': 0, 'y': 0};
  }
}








/*----------------------------------------------------------------------------------------------------------
|                                                                                                           |
|                Face Rotation Z Calculations                                                               |
|                                                                                                           |
-----------------------------------------------------------------------------------------------------------*/

function start(e) {
  let height, left, top, width, x, y, _ref;
  e.preventDefault();
  _ref = this.getBoundingClientRect(), top = _ref.top, left = _ref.left, height = _ref.height, width = _ref.width;
  center = {
    'x': left + (width / 2),
    'y': top + (height / 2)
  };
  x = e.clientX - center.x;
  y = e.clientY - center.y;
  startAngle = r2D * Math.atan2(y, x);

  active = true;
  return false;
}

function rotateZ(e) {
  let d, x, y;

  if (!active) return;

  for (i = 0; i < faces.length; i++) {
    faces[i].classList.remove("trans");
    faces[i].classList.add("backgroundH");
  }

  e.preventDefault();
  x = e.clientX - center.x;
  y = e.clientY - center.y;
  d = r2D * Math.atan2(y, x);
  rotation = d - startAngle + zangle;

  if (rotation < 0) rotation = rotation + 360;
  if (rotation <= -360 || rotation >= 360) {
    rotation = rotation - 360;
  }

  for (i = 0; i < faces.length; i++) {
    faces[i].style.transform = p + 'rotate(' + rotation + 'deg) ' + 'rotateX(' + absoluteR.x + 'deg)' + ' rotateY(' + absoluteR.y + 'deg) ' + styles[i];
  }

  if (absoluteR.x >= 40 && absoluteR.x <= 150 || absoluteR.x >= 230 && absoluteR.x <= 310) {
    for (i = 0; i < faces.length; i++){
      faces[i].style.transform = p + 'rotate(' + rotation + 'deg) ' + styles[i];
    }
  }
}


function stop() {

  zangle = rotation;

  if (!active) return;
  active = false;
}


/*-------------------------------------------------------------
|                                                              |
|                      Create Cube                             |
|                                                              |
--------------------------------------------------------------*/


function initializeCube() {
  let i, tmp, calY, calX;

  for (i = 0; i < faces.length; i++) {
    calY = i * 90; //if (i < 4)
    calX = Math.pow(-1, i) * 90; //if (i >= 4)

    if (i < 4) tmp = 'rotateY(' + calY + 'deg)';
    if (i >= 4) tmp = 'rotateX(' + calX + 'deg)';
    tmp += ' translateZ(' + side / 2 + 'px)';

    faces[i].style.transform = 'rotateX(-13.5deg) rotateY(-20.25deg)'+ p + tmp;
    faces[i].style['-webkit-transform'] ='rotateX(-13.5deg) rotateY(-20.25deg)'+ p + tmp;
    styles.push(tmp);
    buStyles.push(tmp);
  }
}


/*-------------------------------------------------------------
|                                                              |
|                     Cube Transition                          |
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

      tmp = 'rotate(' + rotation + 'deg) ' + styles[i];
      faces[i].style.transform = p + tmp;
      faces[i].style['-webkit-transform'] = p + tmp;
    }

    for (j = 0; j < functions.length; j++){
      functions[j].classList.add('hide');

      for (h = 0; h < 4; h++){
        functions[h].classList.remove('hide');
      }
    }
  }

  bleft.removeEventListener('click', collapse, false);
  bright.removeEventListener('click', collapse, false);
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
  window.notice = document.querySelector('.og');
  window.bleft = document.querySelector('.bleft');
  window.bright = document.querySelector('.bright');

  window.buStyles = new Array();
  window.positional = new Array();
  window.styles = new Array();

  window.cRoDeg = getComputedStyle(cube);
  window.style = getComputedStyle(faces[0]);
  window.factor = 3;
  window.side = parseInt(style.width.split('px')[0], 10);
  window.max_amount = factor * side;
  window.unit = 360 / max_amount;
  window.rotate = 0;
  window.dragging = false;
  window.doOnce = false;
  window.checking = false;
  window.p = 'perspective(0em)';
  window.angle = {'x': 0,'y': 0};
  window.angle1 = {'x': null, 'y': null};
  window.absoluteR = {'x': 0, 'y': 0};

  //New shit

  window.active = false;
  window.zangle = 0;
  window.rotation = 0;
  window.startAngle = 0;
  window.center = {'x': 0, 'y': 0};
  window.absoluteZ = 0;
  window.zangle1 = null;


  window.r2D = 180 / Math.PI;
  //End of new shit
  initializeCube();
  bleft.addEventListener('click', collapse, false);
  bright.addEventListener('click', collapse, false);
}
