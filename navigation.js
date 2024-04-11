

function openMenu(){

let menu  = document.getElementById("js-web")

     menu.style.display = "flex"


}


function closeSlide(){

    let closeMenu = document.getElementById("js-web")

      closeMenu.style.display = "none"
}

let homePage = "./"

function timeout() {

  addEventListener("click", () => {

    document.getElementById("webLogo").innerText = `${homePage}`
  })
}

setTimeout(timeout, 5)