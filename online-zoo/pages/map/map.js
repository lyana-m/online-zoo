const theme = window.localStorage.getItem('data-theme');
if (theme) {
  document.documentElement.setAttribute('data-theme', theme);
}