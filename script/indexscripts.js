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
        document.getElementById("maininfo").style.display = "none";
        document.getElementById("skillinfo").style.display = "flex";
        document.getElementById("active").style.boxShadow = "inset 0px 0px 10px rgba(0,0,0,0.5)";
        document.getElementById("nonactive").style.boxShadow = "2px 0px 0px 0px black";
        document.getElementById("activehr").style.display = "none";
        document.getElementById("nonactivehr").style.display = "block";
    }
    function InfoSwap() {
        document.getElementById("skillinfo").style.display = "none";
        document.getElementById("maininfo").style.display = "flex";
        document.getElementById("nonactive").style.boxShadow = "inset 0px 0px 10px rgba(0,0,0,0.5)";
        document.getElementById("active").style.boxShadow = "2px 0px 0px 0px black";
        document.getElementById("activehr").style.display = "block";
        document.getElementById("nonactivehr").style.display = "none";
    }
function Info(x) {
    document.getElementsByClassName('infowin')[0].style.display = "flex";
    document.getElementsByClassName('center')[0].style.display = "flex";
    var classArray = x.split(" ");
    document.getElementsByClassName(classArray[0])[1].style.display="flex" // function takes in the a tag and finds the next object with the same first class name
 }
    function hideinfo() {

        document.getElementsByClassName("infowin")[0].style.display = "none";
        document.getElementsByClassName('center')[0].style.display = "none";
        var leng = document.getElementsByClassName('innerinfo').length; // function looks for all innerinfo divs and sets their display to none
        for (i = 0; i < leng; i++) {
            document.getElementsByClassName('innerinfo')[i].style.display = "none";
        }

    }