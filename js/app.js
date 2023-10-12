
// # js-palindroma

const word = prompt('Inserisci un parola').toUpperCase();
console.log(word)

let reverseWord = '';

for (let i = word.length -1; i >= 0; i--) {
    const letters = word.charAt(i);
    console.log(i, letters);

    reverseWord += letters;
}

console.log(reverseWord);

if (word === reverseWord) {
    console.log('la parola è palindroma');

} else {
    console.log('la parola non è palindroma');
}


