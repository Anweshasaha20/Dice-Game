var r = Math.floor(Math.random()*6)+1;
var pic1="./images/dice"+r+".png";//to get random image.
var s = Math.floor(Math.random()*6)+1;
var pic2="./images/dice"+s+".png";
document.querySelectorAll("img")[0].setAttribute("src", pic1);
document.querySelectorAll("img")[1].setAttribute("src", pic2);
if(r>s){
    document.querySelector("h1").innerHTML="Player 1 Wins!🏆";
}
else if(s>r){
    document.querySelector("h1").innerHTML="🏆Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="🥳Draw!🥳";
}