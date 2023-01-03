document.addEventListener('DOMContentLoaded', function(){
    let allButtons = document.querySelectorAll('a');
    allButtons.forEach((button, index) => {
        if(index === allButtons.length - 1) {
            button.addEventListener('click', function(){
                allButtons.forEach((button, index) => {
                    if(index != 0) {
                        button.classList.remove('clicked');
                    }
                });
            })
        } else {
            button.addEventListener('click', function(){
                button.classList.add('clicked');
            })
        }
    });
})