# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The game starts with a delegation of events to each card of the board. Once the player starts playing, we control time using a flag and set it to true so that time starts only once (controlTime).

Once this is done, the first step is to add styles to each open letter (open, show) and have control of the open letters by storing them in an auxiliary array (openCards).

When we detect that there are two open cards, called to an auxiliary method (counters ()) that deals with keeping track of how many open we have at each moment of the game and we also use it to manage the star counter.

The next step is to verify if the pair matches the previous one selected and if so we add them to another auxiliary array (matchedCards) that in this case will help us control all our matched cards.

As final steps, we check if the user has won the game, and we do it by checking if the matchedCards arrray is equal to 16 (which is the maximum number of cards in the game) and from there we build a modal which we will form with the result of the final stars, the time and the number of movements that the user has needed to finish the game. We also give the user the possibility to start the game again through a button that receives the click event and this calls the resetGame () function that executes the location.reload ().



## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
