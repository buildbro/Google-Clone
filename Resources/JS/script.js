
function dropMe() {
  var x = document.getElementById("myDropdown");

  (x.style.display === "none");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}