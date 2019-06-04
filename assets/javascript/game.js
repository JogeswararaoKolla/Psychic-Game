let Psychic = [];
let i = 0,
  idx = 0;
wins = 0,
  guessLeft = 0,
  loses = 0;
let guessSoFar = [];
let computerChoice;
let gamestart = false;

//creating the letters 
function CreatePsychicGameList() {
  for (i = 65; i < 91; i++) {
    let result = String.fromCharCode(i);
    Psychic.push(result);
  }
  console.log(Psychic.length, Psychic);
}

function gameStart() {
  // Slecting the random letter
  guessLeft = 10;
  guessSoFar = [];
  document.getElementById("guessesLeft").innerText = guessLeft;
  idx = Math.trunc(Math.random() * 26);
  computerChoice = Psychic[idx];
  console.log("Computer Choice Letter " + computerChoice);
}

// main methods are being called here 
CreatePsychicGameList();
gameStart();

document.onkeyup = function (event) {
  console.log((event));
  let user_key = String.fromCharCode(event.keyCode);

  if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log("valid key entered:", event);

    if (guessLeft != 0) {
      if (computerChoice != user_key) {
        guessLeft--;
        guessSoFar.push(user_key);
        document.getElementById("guessesLeft").innerText = guessLeft;
        document.getElementById("guessesSoFar").innerText = guessSoFar.join();
      }
      else {
        wins++;
        document.getElementById("wins").innerText = wins;
        gameStart();
      }
    }
    else {
      loses++;
      document.getElementById("losses").innerText = loses;
      document.getElementById("guessesSoFar").innerText = ' ';
      gameStart();
    }

  }
  else {
    alert("Not a valid character entered!");
  }
}