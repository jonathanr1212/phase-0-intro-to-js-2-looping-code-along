// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}
*/
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts)
*/
function writeCards (array, event) {
    let cards = []
    for (let j = 0; j < array.length; j++ ){
        cards.push(`Thank you, ${array[j]}, for the wonderful ${event} gift!`)
    }
    return cards;
}

function countDown (number) {
    while (number > 0) {
        console.log(number);
        number -= 1
    }
    console.log(number);
}
