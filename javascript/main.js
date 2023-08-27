//alert('alert z pliku main.js');

/*alert('alert z pliku main.js');
console.log('console log test');*/

const name = "Tadeusz";
const age = "57";

console.log('Cześć!');

console.log(`nazywam się ${name} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js');
console.log('header');

//header.innerHTML = `nazywam się ${name} i mam ${age} lat`;


console.log(header.style); //wyświetla style (listę wszystkich właściwości) danego elementu w konsoli;

header.style.color='red'; //modyfikuje kolor header-a w DOM;

console.log(header.style.color); //wyświetla kolor danego elementu



//praca domowa IV

const injectContent = document.querySelector('.article__paragraph--js');
console.log(injectContent);
injectContent.innerHTML = 'JE-JE-JE-JESTEM WSZCZYKNIENTY DŻEJESEM';