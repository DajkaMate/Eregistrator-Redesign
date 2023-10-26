function showpassword() {
  var input = document.getElementById("myInput");
  var visibleicon = document.getElementsByClassName("visible")[0];
  var hiddenicon = document.getElementsByClassName("hidden")[0];

  if (input.type === "password") {
      input.type = "text";
      visibleicon.style.display = "none";
      hiddenicon.style.display = "block";
  } else {
      input.type = "password";
      visibleicon.style.display = "block";
      hiddenicon.style.display = "none";
  }
}
