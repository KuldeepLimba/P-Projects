// Typing Effect
const text = "Anushka, I Love You Forever ❤️";
let index = 0;

function typeEffect(){
    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

// Floating Roses Generator
function createRose(){
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.innerHTML = "🌹";
    rose.style.left = Math.random()*100 + "vw";
    rose.style.animationDuration = (5 + Math.random()*5) + "s";
    document.body.appendChild(rose);

    setTimeout(()=>{
        rose.remove();
    },8000);
}

setInterval(createRose, 500);

// Surprise Hearts
function showLove(){
    for(let i=0;i<20;i++){
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = Math.random()*100 + "vh";
        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },1000);
    }
}