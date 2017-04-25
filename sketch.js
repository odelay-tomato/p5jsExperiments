//var txt;

function loadFile() {
  loadStrings("rainbow.txt", fileLoaded);
}

function fileLoaded(data) {
  //txt = data;
  createP(join(data, "<br />"));
}

function setup() {
  noCanvas();
  
  createFileInput();
  
  var button = select("#loadfile");
  button.mousePressed(loadFile);
  //console.log(txt);
}
