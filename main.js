var startTime = new Date().getTime();


function shapeDisplay () {
  var shape = document.getElementById('shape');

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
