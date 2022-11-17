
let hexRange = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let hexSpan = document.getElementById('hexString');


let body = document.getElementsByTagName('body')[0];

document.getElementById('button').addEventListener('click', generateHex);



function generateHex() {

    let hexString = '#';
    
    for (i=0; i < 6; i++) {
        const randomNr = Math.floor(Math.random() * hexRange.length);
        let singleValue = hexRange[randomNr];
        hexString += singleValue;
    }
    hexSpan.innerText = hexString;

    body.style.backgroundColor = hexString;
}