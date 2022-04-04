

document.getElementById("date").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("date1").innerHTML = Date();
}

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert ("Thanks for clicking my button!");
}
