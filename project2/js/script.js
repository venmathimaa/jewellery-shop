
function showMessage() {

  let popup = document.getElementById("popup");

  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);

}

