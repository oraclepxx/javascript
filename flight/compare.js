/**
 * Created by xpan on 2/21/15.
 */


window.onload = init;

var numArr = [10, 82, 32, 66, 91, 24, 17, 55];

function init() {
    sort(numArr);
}


function compare(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 == num2) {
        return 0;
    } else {
        return -1;
    }
}

function sort(numArr) {
    numArr.sort(compare);
    alert(numArr);
}

