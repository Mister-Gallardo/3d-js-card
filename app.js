//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container')

// Items
const title = document.querySelector(".title h1")
const sneaker = document.querySelector(".sneaker-img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const circle = document.querySelector(".circle");

// Moving Mouse events
container.addEventListener('mousemove', (e) => {
    let xValue = (window.innerWidth / 2 - e.pageX) / 20;
    let yValue = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xValue}deg) rotateX(${yValue}deg)`
})

// Animate In
container.addEventListener('mouseenter', () => {
    card.style.transition = 'none';

    // Pop-up effect
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";

    // Rotation on
    circle.style.cssText += 'animation: rotate 3s ease infinite;'
})

// Animate Out
container.addEventListener('mouseleave', () => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotate(0deg)';

    // Pop-out effect
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";

    // Rotation off
    setTimeout(() => {
        circle.style.cssText += 'animation: none;'
    }, 200)
})