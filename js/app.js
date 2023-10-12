
// // # js-palindroma

// - chiedere al utente una parola
const userWord = prompt('Inserisci un parola').toUpperCase();
console.log(userWord)

function reverseWord(word) {

    let reversedWord = '';

    for (let i = word.length -1; i >= 0; i--) {
        const letters = word.charAt(i);
        console.log(i, letters);
        reversedWord += letters;
    }

    return reversedWord;
}

const miaParola = reverseWord(userWord)
console.log(miaParola)
    
if (userWord === miaParola) {
    console.log('la parola è palindroma');

} else {
    console.log('la parola non è palindroma');
}


// # js- pari o dispari

function generatorIntNum (){
    // - creare una variabile e generare un numero random da 1 / 5
    const genIntNum = Math.floor(Math.random() * (5) + 1);
    return genIntNum;
}

// - creare una variabile ed assegnare prompt applicano parseInt 
const userNumber = parseInt(prompt('Scegli un numero tra 1 a 5'));
console.log(userNumber)

// - SE il numero è ( > 5 || < 1) dare alert
if (userNumber > 5 || userNumber < 1 ) {
    alert('scegli un numero tra 1 a 5')
}

let pcNum = generatorIntNum();
console.log('numero scelto dal pc ' + pcNum);

const plusNum = pcNum + userNumber;
console.log('somma totale ' + plusNum)

if (plusNum % 2 === 0) {
    console.log('il numero è pari')

} else {
    console.log('il numero è dispari')
}
