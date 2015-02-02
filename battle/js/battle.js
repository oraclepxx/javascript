/**
 * Created by xpan on 1/14/15.
 */

var ship_loc;
var guess;
var hits = 0;
var guessCache = [];
var guesses = 4;
var create = false;

while (!create) {
    var random = Math.floor(Math.random() * 10);
    if (!(random >= 0 && random <= 4)) {
        continue;
    } else {
        ship_loc = random;
        create = true;
    }
}


while (hits < 3 && guesses > 0) {
    guess = prompt("Guess where's the ship?");
    guesses--;

    if (guess == null) {
        break;
    }

    if (guess < 0 || guess > 6) {
        alert("The number must be between 0 - 6");
        continue;
    }

    if (guessCache.indexOf(guess) >= 0) {
        alert("The location you have guessed.");
        continue;
    }

    if (guess == ship_loc || guess == ship_loc + 1 || guess == ship_loc + 2) {
        guessCache[hits] = guess;

        hits = hits + 1;
        if (hits == 3) {
            alert("Ship has gone. You win!");
        } else {
            alert("You hit the ship !!! Go on");
        }

    } else {
        alert("Missed, move on! You have [" + guesses + "] times left");
        continue;
    }
}

if (guesses == 0) {
    alert("Times up, you failed.")
}


