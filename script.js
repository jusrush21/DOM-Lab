window.addEventListener('DOMContentLoaded', (event) => {
    let div = document.getElementById("header-container");
    let header = document.createElement("h1");
    let headerText = document.createTextNode("This is h1");
    header.appendChild(headerText);
    document.body.appendChild(header);
    let header2 = document.createElement("h2");
    let headerText2 = document.createTextNode("This is h2");
    header2.appendChild(headerText2);
    document.body.appendChild(header2);
    let header3 = document.createElement("h3");
    let headerText3 = document.createTextNode("This is h3");
    header3.appendChild(headerText3);
    document.body.appendChild(header3);
    let header4 = document.createElement("h4");
    let headerText4 = document.createTextNode("This is h4");
    header4.appendChild(headerText4);
    document.body.appendChild(header4);
    let header5 = document.createElement("h5");
    let headerText5 = document.createTextNode("This is h5");
    header5.appendChild(headerText5);
    document.body.appendChild(header5);
    let header6 = document.createElement("h6");
    let headerText6 = document.createTextNode("This is h6");
    header6.appendChild(headerText6);
    document.body.appendChild(header6);
    
});
    
let button = document.querySelector("button") //selects the first button it sees

button.addEventListener("dblclick", function(event) { //anytime the button is double clicked, an event happens
    pickColor()
    });

function pickColor() {
    let colors = ["red", "blue", "green", "yellow", "orange", "purple", "magenta", "lime-green"]
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("button")
    console.log("picked random color");
}