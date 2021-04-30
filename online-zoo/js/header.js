
//burger
document.querySelector('.header__menu').addEventListener('click', function(){
  document.querySelector('.header__menu span').classList.toggle('active');
});

//themes
const theme = window.localStorage.getItem('data-theme');
const checkbox = document.querySelector('.switch__input');

if (theme) {
  document.documentElement.setAttribute('data-theme', theme);
}
if (theme === 'dark') {
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {  
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('data-theme', 'dark');
  } else {    
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('data-theme', 'light');
  }
});