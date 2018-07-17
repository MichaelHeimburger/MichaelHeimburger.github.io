function GetBG() {
    var x = Math.floor((Math.random() * 10) + 1);
    var vid = document.getElementById("bgvid");
    if (x < 4) {
        vid.src = "images/waves.mp4";
    }
    else if (x < 8) {
        vid.src = "images/waves3.mp4";
    }
    else {
        vid.src = "images/bluewater.mp4";
    }
}

    function SkillsSwap() {
        alert('t');
        document.getElementById("maininfo").style.display = "none";
        document.getElementById("skillinfo").style.display = "flex";
        //document.getElementById("active").style.zIndex = "-1";
        //document.getElementById("nonactive").style.zIndex = "1";
    }
    function InfoSwap() {
        alert('t');
        document.getElementById("skillinfo").style.display = "none";
        document.getElementById("maininfo").style.display = "flex";
        //document.getElementById("active").style.zIndex = "1";
        //document.getElementById("nonactive").style.zIndex = "-1";
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

        document.getElementsByClassName("infowin")[0].style.display = "none";
        document.getElementsByClassName('center')[0].style.display = "none";
        document.getElementsByClassName('stkmktinfo')[0].style.display = "none";
        document.getElementsByClassName('Virtualpetinfo')[0].style.display = "none";
        document.getElementsByClassName('tucanyvillainfo')[0].style.display = "none";
        document.getElementsByClassName('michaelsoftinfo')[0].style.display = "none";
        document.getElementsByClassName('citymvcinfo')[0].style.display = "none";

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
function InfoCTY() {
    document.getElementsByClassName('infowin')[0].style.display = "flex";
    document.getElementsByClassName('center')[0].style.display = "flex";
    document.getElementsByClassName('citymvcinfo')[0].style.display = "block";
}
