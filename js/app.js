/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

 // add event delegation to ul tag
const allCards = document.querySelector(".deck");
let card = document.getElementsByClassName("card");
let cards = [...card];
let openCards = []; // number of open cards 
let moveCounter = 0;
let matchedCards = 0;
document.querySelector(".moves").textContent= moveCounter;



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function resetGame() {
    document.querySelector(".modal").style.display ="none";
    location.reload();
}

function initGame(){
    let shuffledCards = shuffle(cards);
    for (let i= 0; i < shuffledCards.length; i++){
       [].forEach.call(shuffledCards, function(item){
         allCards.appendChild(item);
       });
    }
 }
 

window.onload = initGame();


function counters() {
    moveCounter+=1;
    document.querySelector(".moves").textContent= moveCounter;
    if (moveCounter > 8 && moveCounter < 12){
        for( i= 0; i < 3; i++){
            if(i > 1){
                document.getElementsByClassName("fa-star")[i].style.visibility = "collapse";
            }
        }
    }
    else if (moveCounter > 13){
        for( i= 0; i < 3; i++){
            if(i > 0){
                document.getElementsByClassName("fa-star")[i].style.visibility = "collapse";
            }
        }
    }
    
}


// MINUTO 28 VIDEO
allCards.addEventListener("click",(e) => {
    if (!e.target.classList.contains('open', 'show')) {
        openCards.push(e.target);
        e.target.classList.add('open', 'show');
        if(openCards.length === 2) {
            counters();
            if(openCards[0].children[0].className === openCards[1].children[0].className) {
                matchedCards += openCards.length;
                console.log(matchedCards);
                if(matchedCards === 16) {
                    document.querySelector(".modal").style.display ="block";
                }
                openCards.forEach(card => {
                    card.classList.remove('open', 'show');
                    card.classList.add('match');
                });
                openCards = [];
            } else {
                setTimeout(() => {
                    openCards.forEach(card => {
                        card.classList.remove('open', 'show');
                    });
                    openCards = [];
                }, 600);
            }
        }
      }
});


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
