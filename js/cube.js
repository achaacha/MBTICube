// START OF UNSURE PART

$('document').ready(function() {
  var lastScrollTop = 0;
  //Set the initial state of window.p0 so that scrolling works without clicking
  window.p0 = {
    'x': 0,
    'y': 0
  };
  $(window).scroll(function trucenscroll(event) {
    var st = $(this).scrollTop();
    var sl = $(this).scrollLeft();
    if (st > lastScrollTop) {

      //Le cube tourne
      var p1, angle, i, tmp;

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
        //Save the state of the style of the cube faces. This ensures that if you switch to dragging, then there will be no jumps because all of the transforms will still be correctly applied.
        style = faces[i].style;
        var tmpStyle = style.transform || style['-webkit-transform'];
        styles[i] = tmpStyle.replace('perspective(32em) ', '');
      }
    } else if (st == lastScrollTop) {
      //do nothing
      //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
    } else {
      var p1, angle, i, tmp;
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
        //Save the state of the style of the cube faces. This ensures that if you switch to dragging, then there will be no jumps because all of the transforms will still be correctly applied.
        style = faces[i].style;
        var tmpStyle = style.transform || style['-webkit-transform'];
        styles[i] = tmpStyle.replace('perspective(32em) ', '');
      }
    }
    lastScrollTop = st;
  });
});


// END OF UNSURE PART

init();
//===========================================================
//			onMouseMove
//===========================================================
function onMouseMove(e) {
  var p1, angle, i, tmp;

  if (!dragging) return;

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
}
//===========================================================
//			onMouseDown
//===========================================================
function onMouseDown(e) {
  var element;

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
//===========================================================
//			onMouseUp
//===========================================================
function onMouseUp(e) {
  var i, tmp, style;

  if (!dragging) return;
  dragging = false;

  //Save the state of the style of the cube faces. This ensures that if you switch to dragging, then there will be no jumps because all of the transforms will still be correctly applied.
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
//=====================================================================
//			initializeCube
//=====================================================================
function initializeCube() {
  var i, tmp;

  for (i = 0; i < faces.length; i++) {
    if (i < 4) tmp = 'rotateY(' + i * 90 + 'deg)';
    if (i >= 4) tmp = 'rotateX(' + Math.pow(-1, i) * 90 + 'deg)';
    tmp += ' translateZ(' + side / 2 + 'px)';

    faces[i].style.transform = p + tmp;
    faces[i].style['-webkit-transform'] = p + tmp;
    styles.push(tmp);
  }
}
//=====================================================================
//			init
//=====================================================================
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



// Possibly get Mouse Position to determine rotation?
//Ref: http://www.quirksmode.org/js/events_properties.html#position

/*const getMousePos = (e) => {
  let posX = 0;
  let posY = 0;

  if (!e) var e = window.event;
  if (e.pageX || e.pageY) {
    posX = e.pageX;
    posY = e.pageY;
  } else if (e.clientX || e.clientY) {
    posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  const cube = document.querySelector('.cube');

  //Splits mousePos based on xy axis: -50 -> 50
  const pX = (posX / window.innerWidth) * 100 - 50;
  const pY1 = (posY / window.innerHeight) * 100 - 50;

  const pY = pY1 * -1;

  If 1% = 3.6 degrees and 1% of 50 = .5,
  then 3.6/.5 = 7.2.
  7.2 * pX (or pY) = correct degree.
  If Rotx = 256.29, Posx= 832, Px= 35....


  Cube is rotating when loading into the session
  When mouse is clicked
  Cube reposition itself to 0degs on both x and y axis
  Have Sessionstorage record mouse drag based on an If Else statement

  IE: If mouse goes +(2,2) points from original point on the grid
  (where the mouse down position first started at),
  then rotate cube x degrees based on direction and degree calculation.
  Else if Cube goes -(-2,-2) points from original point,
  rotate cube in opposite direction based on direction and degree calculation.
  Else if Cube goes (+2.-2)...... so on so forth

  Have session data store information in CSS transformation properties
  One to record new degree thats applied to the transformation*/

  /*let rotX = pX * 7.2;
  let rotY = pY * 7.2;

  /*console.log("Rot x:" + rotX + ", y:" + rotY);
  console.log("Pos x:" + posX + ", y:" + posY);
  console.log("P x:" + pX + ", y:" + pY);

  var rX = sessionStorage.getItem('recordX');
  var rY = sessionStorage.getItem('recordY');

  const saveDegreeDrag = () => {
    sessionStorage.setItem('recordX', rotX);
    sessionStorage.setItem('recordY', rotY);
  }

  const rotateCube = () => {

    /*if (rotX > 0 && rotY > 0) {
      rotX = 0;
      rotY = 0;

      let mathX = rX + rotX;
      let mathY = rY + rotY;

      let newRot = `rotateY(${mathX}deg) rotateX(${mathY}deg)`;
      let difX = rX - rotX

      if (pX > 0 && pY > 0) {

        let newRot = `rotateY(${rotX}deg) rotateX(${rotY}deg)`;
        cube.style.transform = newRot;
      }

      /*console.log("Session Stored X:" + rX + ", And Y:" + rY);
      console.log("Difference for X only:" + difX);
      saveDegreeDrag();
    //}
  }


  rotateCube();


  window.addEventListener('mouseup', e => {
    isDragging = false;

    if (isDragging === false) {
      window.removeEventListener('mousemove', getMousePos);
    }

  });
} //End getMousePos

let isDragging = false;

window.addEventListener('mousedown', e => {
  isDragging = true;

  if (isDragging === true) {
    window.addEventListener('mousemove', getMousePos);
  }
});

window.addEventListener('mousemove', e => {

  if (isDragging === true) {
    window.addEventListener('mousemove', getMousePos);
  }
  isDragging = false;
});*/
