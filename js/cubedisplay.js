/*-------------------------------------------------------------
|                                                              |
|                     Display Functions                        |
|                                                              |
--------------------------------------------------------------*/

let i, j;

const type = document.querySelectorAll('.MBTICube');

for(i=0; i<type.length;i++){

  const spans = type[i].getElementsByTagName("span");
  type[i].innerHTML = type[i].textContent.replace(/./g,"<span>$&</span>");

  for(j=0;j<spans.length;j++){

    spans[j].style.animationDelay = j*800+"ms";
  }
}
