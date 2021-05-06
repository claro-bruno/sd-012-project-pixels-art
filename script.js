var title = document.querySelector('.pixel')


title.addEventListener('mouseover', function() {
    this.style.backgroundColor = "black"
})
title.addEventListener('mouseout', function() {
    this.style.backgroundColor = "white"
})
