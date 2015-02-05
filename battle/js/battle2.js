/**
 * Created by xpan on 2/3/15.
 */

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
    },

    displayReset: function () {
        var tds = document.getElementsByTagName("td");
        for (var i = 0; i < tds.length; i++) {
            var cell = tds[i];
            cell.removeAttribute("class");
        }
        this.displayMessage(null);
    }


}


var model = {

    boardSize: 7,
    shipNum: 3,
    shipLen: 3,
    sunk: 0,
    ships: [],

    resetShips: function (total) {
        for (var i = 0; i < total; i++) {
            var ship = this.createShip();
            this.ships.push(ship);
        }
    },

    createShipLoc: function () {
        var randomX = Math.floor(Math.random() * 6);
        var randomY = Math.floor(Math.random() * 6);
        var loc = String(randomX) + String(randomY);
        return loc;
    },

    createShip: function () {
        var shipLoc = this.createShipLoc();
        while (!this.canShip(shipLoc, this.ships)) {
            shipLoc = this.createShipLoc();
        }
        return {location: shipLoc, hit: ""};
    },

    canShip: function (loc, ships) {
        for (var i = 0; i < ships.length; i++) {
            var temp = ships[i].location;
            if (loc == temp) {
                return false;
            }
        }
        return true;
    },

    fire: function (location) {
        for (var i = 0; i < this.shipNum; i++) {
            var ship = this.ships[i];
            var loc = ship.location;
            if (loc == location) {
                ship.hit = "hit";
                return true;
            }
        }

        return false;
    },

    initModel: function () {
        this.boardSize = 7;
        this.shipNum = 3;
        this.shipLen = 3;
        this.sunk = 0;
        this.ships = [];

        this.resetShips(this.shipNum);
    }


}


var controller = {

    guesses: 0,
    maxGuess: 7,

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
                if (this.guesses == this.maxGuess) {
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
    reset();

    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    var resetButton = document.getElementById("resetButton");
    resetButton.onclick = reset;

    var guessInput = document.getElementById("guessInput");
    guessInput.onkeydown = handleKeyDown;
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guessInputValue = guessInput.value;
    guessInput.value = "";
    controller.processGuess(guessInputValue);

}

function reset() {
    model.initModel();
    view.displayReset();
}

function handleKeyDown(e) {
    var fire = document.getElementById("fireButton");
    if (e.keyCode == 13) {
        fire.click();
    }
}

window.onload = init();


