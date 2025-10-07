function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const url_img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    url_img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    url_img.setAttribute("src", "./assets/avatar.png");
  }
}
