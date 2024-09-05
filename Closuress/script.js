const name1 = document.getElementById("name");
const button = document.getElementById("button");

function fontSize(size){
    function sizer(){
        name1.style.fontSize = `${size}px`;
        alert("Size is going to be increased");
    }
    return sizer;
}

const size80 = fontSize(80);

button.addEventListener('click',size80 );



