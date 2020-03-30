function menuFunction() {
    let click = document.getElementById("nav-links");
    if (click.style.display === "block") {
      click.style.display = "none";
    } else {
      click.style.display = "block";
    }
  }