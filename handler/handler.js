/**
 * Created by xpan on 2/7/15.
 */


window.onload = init;

function init() {
    var imgArray = document.getElementsByTagName("img");
    for (var i = 0; i < imgArray.length; i++) {
        var loc = "images/" + (i + 1) + ".png";
        imgArray[i].src = loc;
        imgArray[i].onclick = handleImage;
    }

}

function handleImage(eventObject) {
    var image = eventObject.target;
    var tmp = image.src;
    tmp = tmp.substring(tmp.lastIndexOf("/") + 1, tmp.length - 1);
    tmp = tmp.split(".")[0];
    if (Number(tmp) < 5) {
        tmp = Number(tmp) + 4;
    } else {
        tmp = Number(tmp) - 4;
    }

    image.src = "images/" + tmp + ".png";
}