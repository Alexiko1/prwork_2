document.querySelector('#theme_toggle').addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle('dark_theme');
    event.target.textContent = document.body.classList.contains('dark_theme') ? 'Светлая тема' : 'Темная тема' ;
  
    console.log('Количество замены цвета фона')
  });