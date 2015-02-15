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
        imgArray[i].onmousemove = handleMouseMoved;
        imgArray[i].onmouseover = handleMouseHover;
    }
    //setTimeout(timer, 3000);
    //setInterval(timer, 3000);

    //var testImg = document.getElementById("testImg");
    //testImg.onmousemove = handleMouseMoved;
}

function timer() {
    alert("Waiting 3 seconds....");
}

function handleImage(eventObject) {
    var image = eventObject.target;
    var tmp = image.src;
    var imgLoc = image.src;
    tmp = tmp.substring(tmp.lastIndexOf("/") + 1, tmp.length - 1);
    tmp = tmp.split(".")[0];
    if (Number(tmp) < 5) {
        tmp = Number(tmp) + 4;
    } else {
        tmp = Number(tmp) - 4;
    }

    image.src = "images/" + tmp + ".png";

    setTimeout(resetImage, 3000, image, imgLoc);
}

function resetImage(image, imgLoc) {
    //var tmp = image.src;
    //tmp = tmp.substring(tmp.lastIndexOf("/") + 1, tmp.length - 1);
    //tmp = tmp.split(".")[0];
    //tmp = tmp - 4;
    //image.src = "images/" + tmp + ".png";
    image.src = imgLoc;
}


function handleMouseHover() {
    alert("Mouse hover");
}

function handleMouseMoved(eventObject) {
    var msg = document.getElementById("msg");
    var clientX = eventObject.clientX;
    var clientY = eventObject.clientY;
    var screenX = eventObject.screenX;
    var screenY = eventObject.screenY;
    var pageX = eventObject.pageX;
    var pageY = eventObject.pageY;
    var message = "Client:" + clientX + "/" + clientY;
    message = message + "<br/>" + "Screen:" + screenX + "/" + screenY;
    message = message + "<br/>" + "Page:" + pageX + "/" + pageY;
    msg.innerHTML = message;
}