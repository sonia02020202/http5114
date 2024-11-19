var current = 0;
var total = 4;


function next() {
// current = current + 1;
// current += 1;
current++;
// if the current variable is greater than the number of the slides, reset to zero
if(current >= total) {
    current = 0;
}
//create a reference to all the slides divs
var slides = document.getElementsByClassName("slide");
for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slides[current].style.display = "block"

console.log("next");
console.log(current);

}

// to go back to previous

function previous() {
current--;

if(current <0) {
    current = total -1;
}

var slides = document.getElementsByClassName("slide");
for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slides[current].style.display = "block"

console.log("previous");
console.log(current);

}