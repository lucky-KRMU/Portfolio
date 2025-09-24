let bg_up = document.querySelector('.bg-up');
let bg_down = document.querySelector('.bg-down')
let dark = true;
let themeBTN = document.getElementById('themeBTN');
function changeTheme() {
    if (dark) {
        bg_up.style.cssText = "background-color: var(--bgUpLgh);";
        bg_down.style.cssText = "background-color: var(--bgDownLgh);";
        dark = !dark;
        themeBTN.innerHTML = '&#9788;';
    } else {
        bg_up.style.cssText = "background-color: var(--bgUpDrk);";
        bg_down.style.cssText = "background-color: var(--bgDownDrk;";
        dark = !dark;
        themeBTN.innerHTML = '&#9728;';
    }
}

function contactMe() {
    alert("Email: 2501730142@krmu.edu.in");
}