// Import stylesheets
import './style.css';

function clock() {
  const clockNode = document.querySelector('#app');
  setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    clockNode.innerHTML = tick;
  }, 1000);
}
clock();
