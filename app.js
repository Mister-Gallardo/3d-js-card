//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container')

// Items
const title = document.querySelector(".title")
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Moving Mouse events
container.addEventListener('mousemove', (e) => {
    let xValue = (window.innerWidth / 2 - e.pageX) / 20;
    let yValue = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xValue}deg) rotateX(${yValue}deg)`
})

// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
})

// Animate Out
container.addEventListener('mouseleave', () => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotate(0deg)';
})