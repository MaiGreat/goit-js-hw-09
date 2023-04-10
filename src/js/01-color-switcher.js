
const buttonElStart = document.querySelector('button[data-start]');
const buttonElStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');



buttonElStart.addEventListener('click', onChangeColor);
buttonElStop.addEventListener('click', offChangeColor);

buttonElStop.setAttribute('disabled', true);

function onChangeColor() {
        // buttonElStart.setAttribute('disabled', true);
        // buttonElStop.removeAttribute('disabled')

    changeButtonsAttribute()
    timerId = setInterval(() => {
    const changeColor = getRandomHexColor();
    
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    };
        bodyEl.style.backgroundColor = changeColor;
  }, 1000);
}

function offChangeColor() {
    // buttonElStart.removeAttribute('disabled');
    // buttonElStop.setAttribute('disabled', true);
    changeButtonsAttribute();
    bodyEl.style.backgroundColor = '#fafafa';
    clearInterval(timerId);
}

function changeButtonsAttribute() {
    buttonElStart.toggleAttribute('disabled');
    buttonElStop.toggleAttribute('disabled');
}