/* ACTIVIDAD N°3 */

elemento = document.getElementById("ele1");

function pintar(colour='green') {
    elemento.style.backgroundColor = colour;
}

elemento.addEventListener("click", function() {
    pintar('yellow');
});

/* ACTIVIDAD N°4 */

let color = 'white';

document.addEventListener('keydown', function(event) {    
    if (event.key == 'a') {
        color = 'red';
    } else if (event.key == 's') {
        color = 'blue';
    } else if (event.key == 'd') {
        color = 'purple';
    }
})

document.addEventListener('click', function(event) {
    if (event.target.id != "ele1") {
        let currentDiv = document.querySelector("#" + event.target.id)
        currentDiv.style.backgroundColor = color;
    }    
})