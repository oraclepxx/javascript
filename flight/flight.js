/**
 * Created by xpan on 2/14/15.
 */

window.onload = init;

function init() {

    alert("abc" == "zyx");
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

var passengers = [{name: "Joe Doloop", paid: true},
    {name: "Sue Green", paid: true},
    {name: "Gino Han", paid: false},
    {name: "Zion Kan", paid: true}];

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
