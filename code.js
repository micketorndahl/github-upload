let sum = 0;
let dealerSum = 0;



function addNewRandomCard() {
    // let randomIndex = Math.floor(Math.random() * cards.length-1); // 0 cards.length - 1
    let randomNum = Math.random(); // 0.0 0.1434...... -> 0.99999....
    let randomNum2 = randomNum * cards.length-1 // 0.0 -> 0.9999 * 64 (0.1 * 64 = 6.4)
    let randomNum3 = Math.floor(randomNum2); // 6.4 -> 6




    let card = cards[randomNum3]; 
    return card;
}

// DRY - Do not repeat yourself.
function createCard(div){
    const cardObject = addNewRandomCard(); // Nytt random kort
    const cardImage = document.createElement('img');
    cardImage.src = `images/${cardObject.file}`;
    cardImage.width = '200';
    cardImage.height = '290';
    document.querySelector(div).appendChild(cardImage);
    return cardObject;
}


document.querySelector('#takeCard').addEventListener('click', () => {


const card = createCard('.cards');
sum += card.num; 
console.log(sum);


if(sum > 21){
document.querySelector('.info').textContent = "Över 21 du förlorade!"
}



})

document.querySelector('#stop').addEventListener('click', () => {
    document.querySelector('.info').textContent = `Du stannade på ${sum}`;
    debugger;


    while(dealerSum < 17) {
        const card = createCard('.dealerCards');
        dealerSum += card.num; 
}

// Uppgift: skriv ut i info-div vem som vann.
if(dealerSum > 21){
    document.querySelector('info').textContent = "Dealern fick över 21. Du vann!"
} else if(dealerSum >= sum){
    document.querySelector('info').textContent = "Dealern hade mer eller lika många poäng. Du förlorade!"
} else {
    document.querySelector('info').textContent = "Du fick bäst poäng. Du vann!"
}


})

