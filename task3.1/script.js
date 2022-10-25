 trafficLightEl1 = document.querySelector('#trafficLight1');
 trafficLightEl2 = document.querySelector('#trafficLight2');
 trafficLightEl3 = document.querySelector('#trafficLight3');


function makeGreen() {
    trafficLightEl3.style.background = ('black');
    trafficLightEl1.style.background = ('green');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
}

trafficLight.addEventListener('click', makeGreen); 
