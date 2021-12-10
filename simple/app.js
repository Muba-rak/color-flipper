const colors = ['aliceblue', 'bisque', 'burlywood', 'skyblue'];
console.log(colors);

const color = document.querySelector('.color')
console.log(color);
const btn = document.getElementById('btn')
console.log(btn);

btn.addEventListener('click', function(){
    const render = getRandomNum()
    console.log('Working');
    document.body.style.backgroundColor = colors[render];
    color.textContent = colors[render]
})

function getRandomNum(){
    let test = Math.floor(Math.random() * colors.length)
    return test
}

// const header = document.getElementsByClassName('nav-links')
// header.addEventListener('click', function(){
    
// })
