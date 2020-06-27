"use strict";
console.log();
var kinder = 3;
//*EVENT LISTENER*//
// tslint:disable-next-line: typedef
window.addEventListener("load", function () {
    // tslint:disable-next-line: typedef
    document.querySelectorAll(".delete")[0].addEventListener("click", function () { removeElement(0); });
    // tslint:disable-next-line: typedef
    document.querySelectorAll(".delete")[1].addEventListener("click", function () { removeElement(1); });
    // tslint:disable-next-line: typedef
    document.querySelectorAll(".delete")[2].addEventListener("click", function () { removeElement(2); });
    // tslint:disable-next-line: typedef
    icon.addEventListener("click", function () { removeElement(kinder); });
});
//*TEXT: Wie viele Aufgaben habe ich noch zu erledigen?*//
function counter() {
    console.log("Meine Aufgaben" + kinder);
    document.getElementById("count").innerText = "Es gibt" + kinder + "Aufgaben zu erledigen!";
}
//*LISTENELEMENT / LÖSCHEN / CHECK*// 
function addElement() {
    var li = document.createElement("li");
    document.getElementById("LIST").appendChild(li);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    var inputValue = document.getElementById("myInput").Value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    var icon = document.createElement("i");
    icon.className = "fas fa-trash-alt delete";
    // tslint:disable-next-line: typedef
    li.appendChild(icon);
    kinder++;
    counter();
}
function removeElement(feld) {
    // tslint:disable-next-line: typedef
    var LI = document.getElementById("LIST");
    if (LI.hasChildNodes()) {
        LI.removeChild(LI.childNodes[feld]);
    }
    kinder--;
    counter();
}
//# sourceMappingURL=scriptapp.js.map