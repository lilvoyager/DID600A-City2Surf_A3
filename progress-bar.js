// Inspired from solution posted on https://stackoverflow.com/questions/42398910/css-animations-to-toggle-when-in-viewport-with-vanilla-js
let triggered = false;
window.addEventListener("scroll", onScroll);

function onScroll() {
    if (!triggered) {
        const progressBar = document.getElementById('progress-bar');
        let top = progressBar.offsetTop;
        let height = progressBar.offsetHeight;
        let bottom = top + height;
    
        let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
        let IsBeforeTop = bottom < window.pageYOffset;
    
        if (!IsOverBottom && !IsBeforeTop) {
            triggered = true;
            progressBar.innerHTML += '<div class="fundraise_counter__fill"></div>';
        }    
    }
}

