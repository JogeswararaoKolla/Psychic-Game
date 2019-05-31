let Psychic = [];
let i = 0,
    idx=0;
    wins = 0,
    guessLeft=0,
    loses = 0;
let guessSoFar = [];
let computerChoice;
let gamestart=false;

  CreatePsychicGameList();

  gameStart();

  function gameStart(){
// Slecting the random letter
  guessLeft=10;
  guessSoFar = [];
  document.getElementById("guessesLeft").innerText=guessLeft; 
  idx=Math.trunc(Math.random()*26);
  console.log("Random index selected " + idx);
  computerChoice=Psychic[idx];
  console.log("Computer Choice Letter " + computerChoice);
  }


document.onkeyup=function(event){
  console.log(String.fromCharCode(event.keyCode));
  let user_key=String.fromCharCode(event.keyCode);
     

  if(guessLeft!=0)
  {
    if(computerChoice!=user_key)
  {   guessLeft--;
     guessSoFar.push(user_key);
     console.log("Guesses Left: " + guessLeft);
     document.getElementById("guessesLeft").innerText=guessLeft; 
     console.log(guessSoFar.join());
     document.getElementById("guessesSoFar").innerText=guessSoFar.join();
  }
  else 
  {    wins++;
      console.log("Hey Match the Letters");
      document.getElementById("wins").innerText=wins;
      gameStart();
  }
}
else 
{    loses++;
console.log("Hey Game Over Guess left zero");
document.getElementById("losses").innerText=loses;
document.getElementById("guessesSoFar").innerText=' ';
console.log("New game gettig started:");
gameStart();
}

}

//creating the letters 
function CreatePsychicGameList() {
    for (i = 65; i < 91; i++) {
        let result = String.fromCharCode(i);
        Psychic.push(result);
    }
   console.log(Psychic.length,Psychic);
}



