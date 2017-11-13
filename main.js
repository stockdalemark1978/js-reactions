var startTime = new Date().getTime();
var shape = document.getElementById('shape');

function makeShapeReappear () {
  shape.style.display = "block";
  startTime = new Date().getTime();
}

setTimeout(makeShapeReappear (), 3000
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
