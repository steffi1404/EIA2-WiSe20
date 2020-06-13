"use strict";
//*TEIL1---------------------------------------------------------------------------------------------------------------------------------------*//
window.addEventListener("load", function () {
    //*SOUNDS--------------------------------------------------------------------------------------------------------------------------------------*//
    var sound0 = new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/A.mp3");
    var sound1 = new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/C.mp3");
    var sound2 = new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/F.mp3");
    var sound3 = new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/G.mp3");
    var sound4 = new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/hihat.mp3");
    var sound5 = new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/kick.mp3");
    var sound6 = new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/laugh-1.mp3");
    var sound7 = new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/laugh-2.mp3");
    var sound8 = new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/snare.mp3");
    //*GESAMT--------------------------------------------------------------------------------------------------------------------------------------*//
    // tslint:disable-next-line: typedef
    var sound = [sound0, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8];
    //*ZENTRALE FUNKTION---------------------------------------------------------------------------------------------------------------------------*//
    // tslint:disable-next-line: typedef
    function playSample(sound) {
        sound.play();
    }
    //*TEIL2--------------------------------------------------------------------------------------------------------------------------------------*//
    // tslint:disable-next-line: typedef
    var beat = [sound5, sound8, sound4];
    // tslint:disable-next-line: typedef
    function play1() {
        beat[0].play();
    }
    // tslint:disable-next-line: typedef
    function play2() {
        beat[1].play();
    }
    // tslint:disable-next-line: typedef
    function play3() {
        beat[2].play();
    }
    // tslint:disable-next-line: typedef
    function play() {
        setTimeout(function () { play1(); }, 1);
        setTimeout(function () { play2(); }, 500);
        setTimeout(function () { play3(); }, 1000);
    }
    //*EVENT LISTENER------------------------------------------------------------------------------------------------------------------------------*//
    document.querySelector("#b1").addEventListener("click", function () { playSample(sound[0]); }); /*A*/
    document.querySelector("#b2").addEventListener("click", function () { playSample(sound[1]); }); /*C*/
    document.querySelector("#b3").addEventListener("click", function () { playSample(sound[2]); }); /*F*/
    document.querySelector("#b4").addEventListener("click", function () { playSample(sound[3]); }); /*G*/
    document.querySelector("#b5").addEventListener("click", function () { playSample(sound[4]); }); /*hihat*/
    document.querySelector("#b6").addEventListener("click", function () { playSample(sound[5]); }); /*kick*/
    document.querySelector("#b7").addEventListener("click", function () { playSample(sound[6]); }); /*laugh1*/
    document.querySelector("#b8").addEventListener("click", function () { playSample(sound[7]); }); /*laugh2*/
    document.querySelector("#b9").addEventListener("click", function () { playSample(sound[8]); }); /*snare*/
    document.querySelector("#play").addEventListener("click", play);
});
//# sourceMappingURL=script7.js.map