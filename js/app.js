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
document.querySelector(".moves").textContent= moveCounter

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

window.onload = initGame();

function initGame(){
   let shuffledCards = shuffle(cards);
   for (let i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
        allCards.appendChild(item);
      });
   }
}


// MINUTO 28 VIDEO
allCards.addEventListener("click",(e) => {
    if (!e.target.classList.contains('open', 'show')) {
        openCards.push(e.target);
        e.target.classList.add('open', 'show');
        console.log(`Open Cards: ${openCards.length}`);

        // check if they match

        // if card don't match go away
        if(openCards.length === 2) {
            // count number of movements
            moveCounter+=1;
            document.querySelector(".moves").textContent= moveCounter;
            if(Array.prototype.slice.call( openCards[0].children )[0].className ===
            Array.prototype.slice.call( openCards[1].children )[0].className) {
                openCards[0].classList.add("match");
                openCards[1].classList.add("match");
                openCards[0].classList.remove("show", "open");
                openCards[1].classList.remove("show", "open");
                openCards = [];
            }
            setTimeout(() => {
                openCards.forEach(card => {
                    card.classList.remove('open', 'show');
                });
                openCards = [];
            }, 600);

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
