/**
 * Created by xpan on 1/14/15.
 */

var view = {

    displayMessage: function (msg) {
        var res = document.getElementById("messageArea");
        res.innerHTML = msg;
    },

    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
        this.displayMessage("HIT!")
    },

    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
        this.displayMessage("MISS!")
    }

}


var model = {

    boardSize: 7,
    shipNum: 3,
    shipLen: 3,
    sunk: 0,
    ships: [
        {locations: ["00", "01", "02"], hits: ["", "", ""]},
        {locations: ["22", "32", "42"], hits: ["", "", ""]},
        {locations: ["61", "62", "63"], hits: ["", "", ""]}
    ],

    setShips: function (total) {

    },

    fire: function (location) {
        for (var i = 0; i < this.shipNum; i++) {
            var ship = this.ships[i];
            var loc = ship.locations;
            var index = loc.indexOf(location);
            if (index >= 0) {
                ship.hits[index] = "hit";
                if (this.isSunk(ship)) {
                    this.sunk++;
                }
                return true;
            }
        }

        return false;
    },

    isSunk: function (ship) {
        for (var i = 0; i < this.shipLen; i++) {
            if (ship.hits[i] != "hit") {
                return false;
            }
        }

        return true;
    }

}


var controller = {

    guesses: 0,

    processGuess: function (input) {
        var result = this.parseGuess(input);
        if (result) {
            this.guesses++;
            var hit = model.fire(result);
            //if (hit && model.sunk == model.shipNum) {
            //    view.displayMessage("You win!");
            //}
            if (hit) {
                if (model.sunk == model.shipNum) {
                    view.displayMessage("You Win !!!")
                } else {
                    view.displayHit(result);
                }
            } else {
                if (model.sunk == model.shipNum) {
                    view.displayMessage("You Lose !!!")
                } else {
                    view.displayMiss(result);
                }
            }

        }
    },


    parseGuess: function (input) {
        var res = "";

        if (input.length != 2) {
            return null;
        }

        if (!((input[0] >= "A" && input[0] <= "G") && (input[1] >= 0 && input[1] <= 6))) {
            return null;
        }

        var resA = 'A'.charCodeAt('A');
        res = input[0].charCodeAt('A') - resA;
        res = res + input[1];

        return res;

    }


};


function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guessInputValue = guessInput.value;

    controller.processGuess(guessInputValue);

}


window.onload = init();
//view.displayHit(controller.parseGuess("A1"));
//view.displayHit(controller.parseGuess("A2"));
//view.displayHit(controller.parseGuess("A3"));
//view.displayMessage(controller.parseGuess("C3"));
//alert('B'.charCodeAt('A'));
