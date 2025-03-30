
var ran1 = Math.random();
ran1 = Math.floor(ran1 * 6) + 1;


var ran2 = Math.random();
ran2 = Math.floor(ran2 * 6) + 1;

var img1 = `./images/dice${ran1}.png`;
var img2 = `./images/dice${ran2}.png`;


document.querySelectorAll("img")[0].setAttribute("src" , img1);
document.querySelectorAll("img")[1].setAttribute("src" , img2);

if(ran1 > ran2)
    document.getElementById("res").textContent = "Player 1 Wins!";
else if(ran2 > ran1)
    document.getElementById("res").textContent = "Player 2 Wins!";
else
document.getElementById("res").textContent = "Draw!";

console.log(ran1);
