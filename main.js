var startTime = new Date().getTime();
var shape = document.getElementById('shape');

function makeShapeReappear () {
  shape.style.display = "block";
  startTime = new Date().getTime();
}

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

setTimeout(makeShapeReappear, getRandomInt(1000, 10000)
);



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

}
