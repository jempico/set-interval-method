const redSquare_div = document.getElementById("animate");
const pixels = document.getElementById("pixels");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");

/*function changeText() {
    text.innerHTML = "Hello";
}*/

function myMove(){
    let count = 50;
    var id = setInterval(frame, 50);

    function frame() {
        if (count == 400) {
            clearInterval(id);
        } else if (count == 200) {
            redSquare_div.innerHTML = "Hang on, almost done";
            count++
        } else {
            /*changeText();*/
            count++
            redSquare_div.style.width = count + 'px';
            redSquare_div.style.height = count + 'px';
            pixels.innerHTML = "Square Dimensions = " + count + "x" + count;
        }
    }
}


myButton.onclick = myMove;

