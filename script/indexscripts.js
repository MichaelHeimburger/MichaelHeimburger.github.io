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

function InfoSTK() {
    document.getElementsByClassName('infowin')[0].style.display = "flex";
    document.getElementsByClassName('center')[0].style.display = "flex";
    document.getElementsByClassName('stkmktinfo')[0].style.display = "block";
}
function InfoVPS() {
    document.getElementsByClassName('infowin')[0].style.display = "flex";
    document.getElementsByClassName('center')[0].style.display = "flex";
    document.getElementsByClassName('Virtualpetinfo')[0].style.display = "block";
}
function hideinfo() {

    document.getElementsByClassName("infowin")[0].style.display="none";
    document.getElementsByClassName('center')[0].style.display = "none";
    document.getElementsByClassName('stkmktinfo')[0].style.display = "none";
    document.getElementsByClassName('Virtualpetinfo')[0].style.display = "none";
    document.getElementsByClassName('tucanyvillainfo')[0].style.display = "none";
    document.getElementsByClassName('michaelsoftinfo')[0].style.display = "none";

}
function InfoTUS() {
    document.getElementsByClassName('infowin')[0].style.display = "flex";
    document.getElementsByClassName('center')[0].style.display = "flex";
    document.getElementsByClassName('tucanyvillainfo')[0].style.display = "block";
}
function InfoMSO() {
    document.getElementsByClassName('infowin')[0].style.display = "flex";
    document.getElementsByClassName('center')[0].style.display = "flex";
    document.getElementsByClassName('michaelsoftinfo')[0].style.display = "block";
}