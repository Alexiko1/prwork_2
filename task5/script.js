let idfrom = document.querySelector('#idfrom');
let textInput = document.querySelector('#input');
let text = document.querySelector('#duplicateField');
let buttonEvent = document.querySelector('#submit');

//buttonEvent.addEventListener('click',(event) => {
//  buttonEvent.style.background = 'blue'
//})

buttonEvent.onmouseover = function() {
  buttonEvent.style.background= "#FFE4C4";
};
buttonEvent.onmouseleave = function() {
  buttonEvent.style.background= "#efefef";
};

textInput.addEventListener('keypress', (event) => {
  text = document.querySelector('#duplicateField');
  text.textContent = text.textContent + event.key;
  console.log(text.textContent);
});

idfrom.addEventListener('click',(event) => {
  console.clear();
  console.log(text.textContent);
  text.textContent = '';
  event.preventDefault();
  idfrom.reset();
  
})

