import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'

document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('cat');
  const inputUrl = document.getElementById('inputUrl');
  const inputWidth = document.getElementById('szelesseg');
  const inputBorderWidth = document.getElementById('keret');
  const inputBorderColor = document.getElementById('borderColor');
  const applyButton = document.getElementById('gomb');

  inputUrl.addEventListener('input', (event) => {
    const url = event.target.value;
    img.src = url;
  });

  inputWidth.addEventListener('input', (event) => {
    const width = event.target.value;
    img.style.width = width + 'px';
  });

  inputBorderWidth.addEventListener('input', (event) => {
    const borderWidth = event.target.value;
    img.style.borderWidth = borderWidth + 'px';
  });

  inputBorderColor.addEventListener('input', (event) => {
    const borderColor = event.target.value;
    img.style.borderColor = borderColor;
  });

  applyButton.addEventListener('click', () => {
    img.style.borderStyle = 'solid';
  });

  document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
});