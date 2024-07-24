const stateStart = document.querySelector('.card__state-start');
const stateEnd = document.querySelector('.card__state-end');


document.addEventListener('DOMContentLoaded', () => {
    const btnNumber = document.querySelectorAll('.card__state-start__btn-number');

    btnNumber.forEach((btnNumber) => {
        btnNumber.addEventListener('click', (event) => {
            event.preventDefault(); 
            showThanks();
        });
    });
    const btnSubmit = document.querySelector('.card__state-start__btn-submit');
    if (btnSubmit) {
        btnSubmit.addEventListener('click', () => {
            if (stateStart && stateEnd) {
                stateStart.style.display = 'none'; 
                stateEnd.style.display = 'block';
            }
        });
    }
});
function showThanks(){
    if (stateStart && stateEnd) {
        stateStart.style.display = 'none';
        stateEnd.style.display = 'block';
    }
}