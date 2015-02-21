/**
 * Created by xpan on 2/14/15.
 */

window.onload = init;

function init() {

    //var allPaid = processPassengers(passengers, checkNoFly);
    //if (allPaid) {
    //    alert("All passengers have paid.")
    //} else {
    //    var list = getUnpaidPassengers(passengers);
    //    var names = "";
    //    for (var i = 0; i < list.length; i++) {
    //        names = names + "/" + list[i].name;
    //    }
    //    alert(names + " didn't pay");
    //}
    //
    //order(passengers);
    processPassenagers(passengers, printPassenager);
    
}

function processPassengers(passengers, check) {
    for (var i = 0; i < passengers.length; i++) {
        var passenger = passengers[i];
        if (!check(passenger, "hello")) {
            return false;
        }
    }
    return true;
}

var passengers = [{name: "Joe Doloop", paid: true, ticket: "firstclass"},
    {name: "Sue Green", paid: true, ticket: "coach"},
    {name: "Gino Han", paid: false, ticket: "business"},
    {name: "Zion Kan", paid: true, ticket: "coach"}];

function checkNoFly(passenger, inputName) {
    return passenger.name == inputName;
}

function checkPaid(passenger) {
    return passenger.paid;
}

function getUnpaidPassengers(passengers) {
    var list = [];
    for (var i = 0; i < passengers.length; i++) {
        if (!passengers[i].paid) {
            list.push(passengers[i]);
        }
    }
    return list;
}

function createDrinkOrder(passenager) {
    var orderFun;
    if (passenager.ticket == "firstclass") {
        orderFun = function () {
            alert("Wine");
        };
    } else if (passenager.ticket == "business") {
        orderFun = function () {
            alert("Beer");
        };
    } else {
        orderFun = function () {
            alert("Cola or water");
        };
    }

    return orderFun;
}

function createFoodOrder(passenager) {
    var orderFun;
    if (passenager.ticket == "firstclass") {
        orderFun = function () {
            alert("Chicken or pasta");
        };
    } else if (passenager.ticket == "business") {
        orderFun = function () {
            alert("Snack box");
        };
    } else {
        orderFun = function () {
            alert("Peanut");
        };
    }

    return orderFun;
}

function orderDrink(passenagers) {
    for (var i = 0; i < passenagers.length; i++) {
        var orderDrink = createDrinkOrder(passenagers[i]);
        orderDrink();
    }

}

function orderFood(passenagers) {
    for (var i = 0; i < passenagers.length; i++) {
        var orderFood = createFoodOrder(passenagers[i]);
        orderFood();
    }
}

function printPassenager(passenager) {
    var name = passenager.name;
    if (passenager.paid) {
        name = name + " paid";
    } else {
        name = name + " unpaid"
    }
    alert(name);
}

function processPassenagers(passenagers, printPassenager) {
    for (var i = 0; i < passenagers.length; i++) {
        printPassenager(passenagers[i]);
    }
}
