let btnEl = document.getElementById('btn');
let textEl = document.querySelectorAll(`.input`);
let errorTextEl = document.querySelectorAll('.error');

btnEl.addEventListener('click', () => {
    for (let i = 0; i < textEl.length; i++) {

        if(textEl[i].value === ''){
            textEl[i].value = '!';
        textEl[i].style = `border : 3px solid red;
                            color : red;
                            font-size : 1.1em;
                            text-align : right`
        errorTextEl[i].style = `display : block`;   
        } 
        
    }
    
})

