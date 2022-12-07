var randomnumber = Math.floor(Math.random() * 6 ) + 1 ;
var take = document.querySelectorAll("img")[0];
var change = "Images/dice" + randomnumber + ".png";
take.setAttribute("src",change);

var randomnumber2 = Math.floor(Math.random() * 6 ) + 1 ;
var take2 = document.querySelectorAll("img")[1];
var change2 = "Images/dice" + randomnumber2 + ".png";
take2.setAttribute("src",change2);

if(randomnumber > randomnumber2)
{
  document.querySelectorAll("h3")[0].innerHTML = "Player 1 wins";
}
else if(randomnumber2 > randomnumber)
{
  document.querySelectorAll("h3")[1].innerHTML = "Player 2 wins";
}
else
{
  document.querySelectorAll("h3")[0].innerHTML = "draw";
  document.querySelectorAll("h3")[1].innerHTML = "draw";

}
