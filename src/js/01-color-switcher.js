
const findButtonElStart = document.querySelector('button[data-start]');
const findButtonElStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');



findButtonElStart.addEventListener('click', onChangeColor);
findButtonElStop.addEventListener('click', offChangeColor);

findButtonElStop.setAttribute('disabled', true);

function onChangeColor(evt) {
        findButtonElStart.setAttribute('disabled', true);
        findButtonElStop.removeAttribute('disabled')

    timerId = setInterval(() => {
    const changeColor = getRandomHexColor();
    
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    };
        bodyEl.style.backgroundColor = changeColor;
  }, 1000);
}

function offChangeColor(evt) {
    findButtonElStart.removeAttribute('disabled');
    findButtonElStop.setAttribute('disabled', true);
    
    bodyEl.style.backgroundColor = '#fafafa';
    clearInterval(timerId);
}

