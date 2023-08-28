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



//PRACA DOMOWA IV

const injectContent = document.querySelector('.article__paragraph--js');
console.log(injectContent);
injectContent.innerHTML = 'JE-JE-JE-JESTEM WSZCZYKNIENTY DŻEJESEM';



//FUNKCJE

/*function calculate(myNumber) {
    myNumber = myNumber+3;
    console.log(myNumber);
    return myNumber;
}

calculate(1);
const result = calculate(1);
console.log(result);*/

//funkcja strzałkowa "Fat arrow" =>

const calculateFat = (myFatNumber) => {
    myFatNumber = myFatNumber+8;
    console.log(myFatNumber);
    return myFatNumber;
}

calculateFat(1);
const resultFat = calculateFat(1);
console.log(resultFat); // tę funkcję można skrócić jeszcze bardziej - poniżej

const fatCalculate = myFatNumber => (myFatNumber+8)
console.log(fatCalculate(9));



//OBIEKTY
 const deathStar = {
    diameter : 1200,
    fire : (target) => {
        console.log(`${target} destroyed 🔥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 2354,
    commander: {
        name: 'Darth Vader'
    },
 }

 console.log(deathStar.name)
 deathStar.fire('Alderaan')
 deathStar.fire('Scarif')

 console.log(`Gwiazda Śmierci ma średnicę ${deathStar['diameter']} metrów.`)
 console.log(`pojazd zarejestrowany jest na ${deathStar.commander.name}`)