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

div1 = document.getElementById("div_1");
div2 = document.getElementById("div_2");
div3 = document.getElementById("div_3");
div4 = document.getElementById("div_4");

div1.addEventListener("click", function() {
    div1.style.backgroundColor = color;
})

div2.addEventListener("click", function() {
    div2.style.backgroundColor = color;
})

div3.addEventListener("click", function() {
    div3.style.backgroundColor = color;
})

div4.addEventListener("click", function() {
    div4.style.backgroundColor = color;
})