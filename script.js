function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("dark")) {
    img.setAttribute("src", "./assets/Avatar1.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}

// ou pode colocar apenas a funcao do toggle
// html.classlist.toggle("dark")
