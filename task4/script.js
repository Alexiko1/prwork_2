document.querySelector('#textField').addEventListener('click',
    function(event) {
        this.textContent = prompt('Введите в поле ввода', 'Поле ввода');
        event.preventDefault();
    });
    