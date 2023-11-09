function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img de profile
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de Kassio Matos, sorrindo, usando camisa regata, com barba e fundo branco"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de Kassio Matos, usando camisa preta, com barba e fundo branco"
    )
  }
}
