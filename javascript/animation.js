function open_menu() {
    menu = document.getElementById("links-navbar-responsive")
    menu.style.display = "flex"
}

function close_menu() {
    menu = document.getElementById("links-navbar-responsive")
    menu.style.display = "none"
}

links = document.getElementsByClassName("link-menu")

for (let i = 0; i < links.length; i++) {
    if (links[i].innerHTML != "Financement") {
        links[i].addEventListener("click", close_menu)
    }
}

function go_to_homepage() {
    window.location.href = "index.html"
}

function video_link() {
    window.open("https://www.youtube.com/watch?v=TdLnMhSGXZU", "_blank")
}

const scroll_progress = document.getElementById('progress-bar')
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener('scroll', () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    scroll_progress.style.width = `${(scrollTop / height) * 100}%`
})
