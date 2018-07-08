function GetBG() {
    var x = Math.floor((Math.random() * 10) + 1);
    var vid = document.getElementById("bgvid");
    if (x < 4) {
        vid.src = "images/waves.mp4";
    }
    else if (x < 8) {
        vid.src = "images/waves2.mp4";
    }
    else {
        vid.src = "images/waves3.mp4";
    }
}

function Info(x) {
    
    

}
function hideinfo() {

    var x = document.getElementsByClassName("infowin")[0].style.display="none";

}