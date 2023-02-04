function runEffect1() {
  $('#effect1').css({ 'visibility': 'visible' });
  $('#effect1').effect( "slide", { direction: "left" }, 1000, runEffect2);
};

function runEffect2() {
  $('#effect2').css({ 'visibility': 'visible' });
  $('#effect2').effect( "slide", { direction: "left" }, 1000, runEffect3);
};

function runEffect3() {
  $('#effect3').css({ 'visibility': 'visible' });
  $('#effect3').effect("slide", { direction: "right" }, 1000, runEffect4);
};

function runEffect4() {
  $('#effect4').css({ 'visibility': 'visible' });
  $('#effect4').effect("slide", { direction: "right" }, 1000, runEffect5);
};

function runEffect5() {
  $('#effect5').css({ 'visibility': 'visible' });
  $('#effect5').effect("slide", { direction: "right" }, 1000, runEffect6);
};

function runEffect6() {
  $('#effect6').css({ 'visibility': 'visible' });
  $('#effect6').effect("slide", { direction: "left" }, 1000, hideAgain);
};

function hideAgain() {
  $('#effect1').css({ 'visibility': 'hidden' });
  $('#effect2').css({ 'visibility': 'hidden' });
  $('#effect3').css({ 'visibility': 'hidden' });
  $('#effect4').css({ 'visibility': 'hidden' });
  $('#effect5').css({ 'visibility': 'hidden' });
  $('#effect6').css({ 'visibility': 'hidden' });
  runEffect1('#effect1');
};

$(document).ready(function(){
  runEffect1('#effect1');
  //setTimeout(runEffect1('#effect2'), 3000);
});
