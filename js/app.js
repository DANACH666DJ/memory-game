const allCards = document.querySelector(".deck");
let card = document.getElementsByClassName("card");
let cards = [...card];
let openCards = [];
let moveCounter = 0; 
let matchedCards = 0;
document.querySelector(".moves").textContent= moveCounter;


// Shuffle all cards
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


// game counter
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

// Listening event for each card
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