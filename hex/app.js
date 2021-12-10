const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

console.log(btn, color);

btn.addEventListener('click', function() {
    hexColor = '#';
    for (let index = 0; index < 6; index++) {
        hexColor += hex[getRandomNumHex()]; 
    }
    console.log('Its working');
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor  
})

function getRandomNumHex() {
    let test = Math.floor(Math.random() * hex.length)
    return test
}

