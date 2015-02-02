/**
 * Created by xinpan on 01/21/2015.
 */


function getValue() {
    var value = document.getElementById("code_1");
    alert(value.innerHTML);
}

function changeValue() {
    var value = document.getElementById("code_1");
    value.innerHTML = "Hello JavaScript.";
}

//alert(isNaN(10));


//var a = Math.sqrt(-1);

//alert(3 + Number("abc"));

//var str = String("xyz");


//var str = "abcdefgh";
//alert(str.charAt(0));
//alert(str.charAt(100));
//alert(str[1]);
//alert(str[100]);


function validatePhoneNumber(phoneNum) {
    if (phoneNum == null || phoneNum == "") {
        return false;
    }

    if (phoneNum.length != 8) {
        return false;
    }

    var parts = phoneNum.split("-");
    if (parts.length != 2) {
        return false;
    }

    if (parts[0].length != 3 && parts[1].length != 4) {
        return false;
    }

    if (!isNaN(Number(parts[0])) && !isNaN(Number(parts[1]))) {
        return true;
    }

    return false;
}

function showValidationResult() {
    var access = document.getElementById("telNum");
    var phoneNum = access.value;
    if (validatePhoneNumber(phoneNum)) {
        alert("It's a valid number.");
    } else {
        alert("It's an invalid number.");
    }
}




