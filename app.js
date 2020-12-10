const redSquare_div = document.getElementById("animate");
const pixels = document.getElementById("pixels");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");

function myMove(){
    let count = 50;
    //We use setInterval method to call the frame() function every 50ms.
    setInterval(frame, 50);

    function frame() {
        if (count == 400) {
            clearInterval(id);
        } else if (count == 200) {
            redSquare_div.innerHTML = "Hang on, almost done";
            count++
        } else {
            count++
            redSquare_div.style.width = count + 'px';
            redSquare_div.style.height = count + 'px';
            pixels.innerHTML = "Square Dimensions = " + count + "x" + count;
        }
    }
}


myButton.onclick = myMove;

