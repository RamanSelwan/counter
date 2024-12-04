let count = 0; 


const value = document.querySelector('#counter-value');


const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');


decreaseBtn.addEventListener('click', function() {
    count--; 
    updateCounter(); 
});

resetBtn.addEventListener('click', function() {
    count = 0; 
    updateCounter(); 
});

increaseBtn.addEventListener('click', function() {
    count++; 
    updateCounter(); 
});


function updateCounter() {
    value.textContent = count; 
    if (count > 0) {
        value.style.color = 'green'; 
    } else if (count < 0) {
        value.style.color = 'red'; 
    } else {
        value.style.color = 'black'; 
    }
  
}
