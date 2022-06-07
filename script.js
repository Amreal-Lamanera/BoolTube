var controlNav = false;
var video = location.search.slice(1).split("=")[1];

function Nav() {
    if (controlNav == true) {
        document.getElementById("myNav").style.width = "0";
        document.getElementById("myContainer").style.left = "4vw";
        document.getElementById("myContainer").style.width = "calc(100% - 4vw)";
        controlNav = false;
    } else {
        document.getElementById("myNav").style.width = "8vw";
        document.getElementById("myContainer").style.left = "8vw";
        document.getElementById("myContainer").style.width = "calc(100% - 8vw)";
        controlNav = true;
    }
  }

function chooseVideo(video) {
    if(video == null) {
        document.getElementById("descVid").innerHTML = "ERROR 104 - PAGE NOT FOUND";
    }
    if(video == 0) {
        document.getElementById("loadVideo").src = "https://www.youtube.com/embed/oJR2q6Hc4NQ";
        document.getElementById("descVid").innerHTML = "Ti Accompagno al Lavoro - Episodio 1";
    }
    if(video == 1) {
        document.getElementById("loadVideo").src = "https://www.youtube.com/embed/gYuvF0hlWg4";
        document.getElementById("descVid").innerHTML = "Ti Accompagno al Lavoro - Episodio 2";
    }
    if(video == 2) {
        document.getElementById("loadVideo").src = "https://www.youtube.com/embed/lbnuQSCRpxg";
        document.getElementById("descVid").innerHTML = "Ti Accompagno al Lavoro - Episodio 3";
    }
    if(video == 3) {
        document.getElementById("loadVideo").src = "https://www.youtube.com/embed/CHjF_F7ZKnw";
        document.getElementById("descVid").innerHTML = "Ti Accompagno al Lavoro - Episodio 4";
    }
    if(video == 4) {
        document.getElementById("loadVideo").src = "https://www.youtube.com/embed/45JfVlC76jk";
        document.getElementById("descVid").innerHTML = "Ti Accompagno al Lavoro - Episodio 5";
    }
    if(video == 5) {
        document.getElementById("loadVideo").src = "https://www.youtube.com/embed/KHZoqiQzbxw";
        document.getElementById("descVid").innerHTML = "Ti Accompagno al Lavoro - Episodio 6";
    }
    if(video == 6) {
        document.getElementById("loadVideo").src = "https://www.youtube.com/embed/WD_QuxbDSU8";
        document.getElementById("descVid").innerHTML = "Ti Accompagno al Lavoro - Episodio 7";
    }
    if(video == 7) {
        document.getElementById("loadVideo").src = "https://www.youtube.com/embed/-Oplz2Xn1mg";
        document.getElementById("descVid").innerHTML = "Ti Accompagno al Lavoro - Episodio 8";
    }
}
