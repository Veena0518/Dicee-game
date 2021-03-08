var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 random numbers

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1- dice6 images

var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images.dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNumber2 > randomNumber1){
 document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "It's a tie!";
}
