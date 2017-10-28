
console.log ("test");
function shapeDisplay () {
  var shape = document.getElementById('shape');
  console.log ("function ran");
  if (shape.style.display === "none") {
    shape.style.display = "block";
  } else {
    shape.style.display = "none";
  }
}
