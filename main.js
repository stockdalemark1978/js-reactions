var startTime = new Date().getTime();
var shape = document.getElementById('shape');

function makeShapeReappear () {
  changePosition();
  getRandomColor();
  shape.style.display = "block";
  startTime = new Date().getTime();

}

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function appearAfterDelay() {
  setTimeout(makeShapeReappear, getRandomInt(1000, 4000)
  );
}

appearAfterDelay();


function changePosition() {
  var randomNum = Math.random() * 500;

  shape.style.left = randomNum + "px";
  shape.style.top = randomNum + "px";
  shape.style.height = randomNum + "px";
  shape.style.width = randomNum + "px";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  shape.style.backgroundColor = color;
  // return color;


}



function shapeDisplay () {

  var endTime = new Date().getTime();

  var timeMeasure = document.getElementById('timeMeasure');


  if (shape.style.display === "none") {
    shape.style.display = "block";
  } else {
    shape.style.display = "none";
  }

  var timeTaken = (endTime - startTime) / 1000 + " seconds";
  console.log (timeTaken);
  timeMeasure.innerHTML = timeTaken;
  appearAfterDelay();

}
