/**
 * Created by xinpan on 01/21/2015.
 */


//function helloworld() {
//    alert("hello world!");
//}
//
//helloworld();


//
//var arr = [];
//
//arr.push("AAA");
//arr.push("BBB");
//arr.push("CCC");


//var arr = new Array(3);
//arr.push("XXX");
//arr.push("YYY");
//arr.push("ZZZ");
//arr.push("WWWW");
//arr.push("TTTT");
//arr[0] = "AAAA";
//arr[1] = "BBBB";
//arr[2] = "CCCC";
//arr[3] = "ZZZZ";

//var str = arr.length;
//
//for(var index = 0; index < arr.length; index++) {
//    str = str + "/" + arr[index];
//}

//alert(str);


var golf = {
    make: "Volkswagen",
    model: "GTI",
    year: "2012",
    color: "White",
    VIN: "123456789ABC",
    engineOn: false,
    fuel: 0,

    showGolf: function () {
        alert(this.make + "/" + this.model + "/" + this.year);
    },

    start: function () {
        if (this.fuel > 0) {
            this.engineOn = true;
            alert("Engine On.")
            return true;
        } else {
            alert("Fuel empty, refill it.");
            return false;
        }

    },

    stop: function () {
        this.engineOn = false;
        alert("Engine Off");
    },

    go: function () {
        if (this.engineOn) {
            this.fuel = this.fuel - 1;
            alert("Let's go.")
        } else {
            alert("Start the engine first.");
        }
    },

    refill: function (galon) {
        this.fuel = this.fuel + galon;
        alert("Refill " + galon + " galons.");
    }

}


golf.horn = function () {
    if (this.engineOn) {
        alert("Di............");
    }
}

//alert(golf.color);

if(golf.start()) {
    golf.horn();
    golf.go();
    golf.stop();
} else {
    golf.refill(10);
}





//golf.start();
//golf.horn();
//golf.go();
//golf.stop();

//for (var prop in golf) {
//    console.log(prop + ": " + golf[prop]);
//}


//golf.doorNum = 2;
//golf.year = true;
//console.log(golf);

//function changeColor(golf) {
//    golf.color = "Black";
//}

//changeColor(golf);

//console.log(golf);

//golf.showGolf();








