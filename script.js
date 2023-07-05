const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const remained = document.querySelector('.remained');
const percentage = document.querySelector('.percentage');

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        hightlightCups(idx)
    })
})

function hightlightCups(idx) {

    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup () {
    const fullCups = document.querySelectorAll('.cup-small.full').length;

    const totalCUps = smallCups.length;

    if (fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCUps * 330}px`
        percentage.innerText = `${fullCups / totalCUps * 100}%`
    }


    if (fullCups === totalCUps){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else{
        remained.style.visibility = 'visible';
        liters.innerText = `${2-(250 * fullCups / 1000)}L`
    }
}

