const sections = document.querySelectorAll('.hidden');
const containerFliperArea = document.querySelector('[data-fliper-text]');
const containerGameArea = document.querySelector('[data-game-text]');

let fliperPhrases = [];
let gamePhrases = [];

// Loop para adicionar 25 palavras "Fliperama" ao array
for (let i = 0; i < 160; i++) {
   fliperPhrases.push("Fliperama");
}

// Loop para adicionar 25 palavras "jogos" ao array
for (let i = 0; i < 160; i++) {
   gamePhrases.push("Jogos");
}

fliperPhrases.forEach((fliperText) => {
   const createSubtitle = document.createElement('h2');
   createSubtitle.classList.add('text_slider');
   createSubtitle.textContent = fliperText;

   containerFliperArea.append(createSubtitle);
});

gamePhrases.forEach((gameText) => {
   const createSubtitle = document.createElement('h2');
   createSubtitle.classList.add('text_slider');
   createSubtitle.textContent = gameText;

   containerGameArea.append(createSubtitle);
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




const buy1 = document.querySelector('#buy1');
const buy2 = document.querySelector('#buy2');
const buy3 = document.querySelector('#buy3');
const buy4 = document.querySelector('#buy4');


function buyPrice1() {
   let preco = '2.695,00';
   return preco;
}
function buyPrice2() {
   let preco2 = '2.750,00';
   return preco2;
}
function buyPrice3() {
   let preco3 = '2.700,00';
   return preco3;
}
function buyPrice4() {
   let preco4 = '3.000,00';
   return preco4;
}



buy1.addEventListener('click', buyPrice1)
buy2.addEventListener('click', buyPrice2)
buy3.addEventListener('click', buyPrice3)
buy4.addEventListener('click', buyPrice4)





const buttonMenu = document.querySelector('.logo_menu');
const buttonMenu2 = document.querySelector('.logo_menu2');
const menu = document.querySelector('.menu')

buttonMenu.addEventListener('click', menuAnimation)
buttonMenu2.addEventListener('click', menuAnimation2)

function menuAnimation() {
   if(menu.style.display = 'none') {
      menu.style.display = 'flex'
      buttonMenu2.style.display = 'flex'
      buttonMenu.style.display = 'none';
   }
}

function menuAnimation2(){
   if(menu.style.display = 'flex'){
      menu.style.display = 'none'
      buttonMenu2.style.display = 'none'
      buttonMenu.style.display = 'flex';
   }
}
