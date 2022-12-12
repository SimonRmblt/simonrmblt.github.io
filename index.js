function redirect(link) {
    window.location.href = link
}

function clear_opacity(id1, id2) {
    element1 = document.getElementById(id1)
    element1.style.opacity = 0.7;
    
    element2 = document.getElementById(id2)
    element2.style.padding = "16% 0 0 0"
}

function opacity(id1, id2) {
    element1 = document.getElementById(id1)
    element1.style.opacity = 0.5;

    element2 = document.getElementById(id2)
    element2.style.padding = "18% 0 0 0"
}
