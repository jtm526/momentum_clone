const images = ["mountains.jpg", "sunset.jpg", "waterfall.jpg", "white_tree.jpg", "audi.jpg"];

const randomImage = images[Math.floor(Math.random()*images.length)];
const currentBgImage = document.createElement("img");
currentBgImage.src = `${randomImage}`;

document.body.appendChild(currentBgImage);
