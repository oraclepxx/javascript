/**
 * Created by xpan on 2/7/15.
 */


window.onload = init;

function init() {
    var imgArray = document.getElementsByTagName("img");
    for(var i = 0; i < imgArray.length; i++) {
        var loc = "images/" + (i + 1) + ".png";
        imgArray[i].src = loc;
        imgArray[i].onclick = handleImage;
    }

}

function handleImage() {

}