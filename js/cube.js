// Possibly get Mouse Position to determine rotation?
//Ref: http://www.quirksmode.org/js/events_properties.html#position

const getMousePos = (e) => {
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
  const pY = (posY / window.innerHeight) * 100 - 50;

  /* If 1% = 3.6 degrees and 1% of 50 = .5,
  then 3.6/.5 = 7.2.
  7.2 * pX (or pY) = correct degree.*/

  /* If Rotx = 256.29, Posx= 832, Px= 35....
  Taking a break I can't do math

  im not leaving
  just taking a break from this shit

    */

  let rotX = pX * 7.2;
  let rotY = pY * 7.2;

  console.log("Rot x:" + rotX + ", y:" + rotY);
  console.log("Pos x:" + posX + ", y:" + posY);
  console.log("P x:" + pX + ", y:" + pY);


  const setSesStorgage = () => {
    sessionStorage.setItem('cX', rotX);
    sessionStorage.setItem('cY', rotY);
  }

  const rotateCube = () => {

    var newX = sessionStorage.getItem('cX');
    var newY = sessionStorage.getItem('cY');

    let newRot = `rotateY(${newX}deg) rotateX(${newY}deg)`;
    cube.style.transform = newRot;
  }

  //This is to return the corresponding angle for an x value
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
});
