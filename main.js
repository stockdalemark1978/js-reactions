var shape = document.getElementById('shape');
console.log ("test");
function shapeDisplay () {
  if (shape.style.display === "none") {
    shape.style.display = "block";
  } else {
    shape.style.display = "none";
  }
}
