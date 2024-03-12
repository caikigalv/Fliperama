const sections = document.querySelectorAll('.hidden');
const containerFliperArea = document.querySelector('[data-fliper-text]');


let fliperPhrases = [];

for (let i = 0; i < 160; i++) {
    fliperPhrases.push("Fliperama");
}

fliperPhrases.forEach((fliperText) => {
    const createSubtitle = document.createElement('h2');
    createSubtitle.classList.add('text_slider');
    createSubtitle.textContent = fliperText;

    containerFliperArea.append(createSubtitle);
});



const sections2 = document.querySelectorAll('.hidden');
const containerFliperArea2 = document.querySelector('[data-fliper-texts]');


let fliperPhrases2 = [];

for (let i = 0; i < 160; i++) {
    fliperPhrases.push("Fliperama");
}

fliperPhrases.forEach((fliperText) => {
    const createSubtitle = document.createElement('h2');
    createSubtitle.classList.add('text_slider');
    createSubtitle.textContent = fliperText;

    containerFliperArea2.append(createSubtitle);
});



const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))








const endBotao = document.querySelector('.end_shopping');
const backBotao3 = document.querySelector('.back_pag3');
const backBotao2 = document.querySelector('.back_pag2');
const campoBuys = document.querySelector('.pagamento');
const campoBuys2 = document.querySelector('.pagamento2');
const campoBuys3 = document.querySelector('.pagamento3');


const form = document.querySelector('form_card')
   

function radio1Click(){
    const radio1 = document.querySelector('#radio1')
     if(radio1.checked){
        return radio1
     }
}

function radio2Click(){
    const radio2 = document.querySelector('#radio2')
     if(radio2.checked){
        return radio2
     }
}


function endButton(){
    if(radio1Click()){
        campoBuys.style.display = 'none';
        campoBuys2.style.display = 'flex';
    }else if(radio2Click()){
        campoBuys.style.display = 'none';
        campoBuys3.style.display = 'flex';
    }
}

function backButton3(event){
    if(event){
        campoBuys.style.display = 'flex';
        campoBuys2.style.display = 'none';
        campoBuys3.style.display = 'none';

    }
}

function backButton2(event){
    if(event){
        campoBuys.style.display = 'flex';
        campoBuys2.style.display = 'none';
        campoBuys3.style.display = 'none';

    }
}

backBotao3.addEventListener('click', backButton3)
backBotao2.addEventListener('click', backButton2)
endBotao.addEventListener('click', endButton)
radio1.addEventListener('click', radio1Click)
radio2.addEventListener('click', radio2Click)



