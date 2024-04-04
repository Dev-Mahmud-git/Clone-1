

const DropDown = document.querySelector('.drpdn');

const WinLogo = document.querySelector('.winlogo');

WinLogo.addEventListener('click' , () => {

    DropDown.classList.toggle('active');

})

document.addEventListener('keydown' , function(event) {

    if(event.keyCode === 91 ){
        event.preventDefault();
        event.stopPropagation();
        WinLogo.click();
    }

})