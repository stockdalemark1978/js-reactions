var startTime = new Date().getTime();


function shapeDisplay () {
  var shape = document.getElementById('shape');

  var endTime = new Date().getTime();

  if (shape.style.display === "none") {
    shape.style.display = "block";
  } else {
    shape.style.display = "none";
  }

  var timeTaken = endTime - startTime;
  console.log (timeTaken);
}
