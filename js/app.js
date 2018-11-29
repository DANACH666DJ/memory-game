const allCards = document.querySelector(".deck");
let card = document.getElementsByClassName("card");
let cards = [...card];
let openCards = [];
let moveCounter = 0; 
let matchedCards = 0;
let second = 0, minute = 0, hour=0;
let timer = document.querySelector(".timer");
let interval, controlTime;
document.querySelector(".moves").textContent= moveCounter;


// Shuffle all cards
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

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


 function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+" mins "+second+" secs";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
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
    if (!controlTime){
        controlTime = true;
        startTimer();
    }
    
    if (!e.target.classList.contains('open', 'show')) {
        openCards.push(e.target);
        e.target.classList.add('open', 'show');
        if(openCards.length === 2) {
            counters();
            if(openCards[0].children[0].className === openCards[1].children[0].className) {
                matchedCards += openCards.length;
                if(matchedCards === 16) {
                    document.querySelectorAll(".fa-star").forEach(star => {
                        if(star.style.visibility === 'collapse'){
                            console.log("Tenemos uno invisble");
                        } else {
                            let li = document.createElement("li");
                            let i = document.createElement("i");
                            i.className = "fa fa-star";
                            li.appendChild(i);
                            let ul = document.querySelector(".starsD");
                            ul.appendChild(li);
                        }
                    });
                    document.querySelector(".movesD").textContent= moveCounter;
                    document.querySelector(".timerD").textContent = minute+" mins "+second+" secs";
                    timer.textContent = "0 mins 0 secs";
                    clearInterval(interval);
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
                }, 400);
            }
        }
    }
});