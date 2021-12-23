const dice = document.querySelector('.dice');
const p1Score = document.querySelector('.score1');
const p2Score = document.querySelector('.score2');
const startBtn = document.querySelector('startbtn');
const exitBtn = document.querySelector('exitbtn');
const p1Btn = document.querySelector('.p1 button');
const p2Btn = document.querySelector('.p2 button');
const message = document.querySelector('.message');
const welPage = document.querySelector('.welcome');
const gamePage = document.querySelector('.game');
const hmoeDice = document.querySelector('.welcome img');
const tScore1 = document.querySelector('.tScore1');
const tScore2 = document.querySelector('.tScore2');
const tsm = document.querySelector('.tsm');
const p1NameDiv = document.querySelector('.p1 .label');
const name = document.querySelector('#name');



//Pre-set all variables
let player1Score = 0;
let player2Score = 0;
let p1Turn = false;
let p2Turn = false;
let ts1 = 0;
let ts2 = 0;
let turn = 0;
let p1Name;
p1NameDiv.innerText = 'Player1 Score';


//Login function
login = () =>{
  p1Name = name.value;
  if(p1Name == "" ){
    alert('Please enter your player name');
  }else{
  startGame();
  }
}

//start new game function
newGame = () =>{
  if(confirm('Are you sure you want to end this game and start a new one?')){
    startGame();
  }
}

//Start Game function
startGame = () => {
  welPage.style.visibility = 'hidden';
  welPage.style.position = 'absolute';
  gamePage.style.visibility = 'visible';
  gamePage.style.position = 'fixed';
  
  //Reset all vaariables
  p1Score.innerText = 0;
  p2Score.innerText = 0;
  player1Score = 0;
  Player2Score = 0;
  dice.innerText = 0;
  ts1 = 0;
  ts2 = 0;
  turn = 0;
  tScore1.innerText = 0;
  tScore2.innerText = 0;
  p1NameDiv.innerText = p1Name + ' Score';

  
  
  let x = Math.floor(Math.random()*2)+1;
  if(x == 1){
    setPlayer1Turn();
    }else{
    setPlayer2Turn();
    }
}

//Set player1 turn
setPlayer1Turn = () =>{
  p1Turn = true;
    p2Turn = false;
    p1Btn.style.backgroundColor = 'green';
    p1Btn.innerText = 'Roll';
    p1Btn.disabled = false;
    p2Btn.style.backgroundColor = 'red';
    p2Btn.innerText = 'Wiat';
    p2Btn.disabled = true;
    message.innerText = "Player1 turn to play";
}

//Set Player2 turn
setPlayer2Turn = () =>{
    p2Turn = true;
    p1Turn = false;
    p2Btn.style.backgroundColor = 'green';
    p2Btn.innerText = 'Roll';
    p2Btn.disabled = false;
    p1Btn.style.backgroundColor = 'red';
    p1Btn.innerText = 'Wait';
    p1Btn.disabled = true;
    message.innerText = "Player2 turn to play"

}


//Increase player score
turnState = () =>{
  if(turn == 2){
    if(ts1 < ts2){
      tsm.innerText = p1Name + ', you win!';
      player1Score++;
      p1Score.innerText = player1Score;
        turn = 0;
    }
    else if(ts1 > ts2){
      tsm.innerText = 'Player2 wins';
      player2Score++;
      p2Score.innerText = player2Score;
      turn = 0;
    }
    else{
      tsm.innerText = 'Its a draw';
      turn = 0;
    }
  }
};




//Roll dice and swap function
rollSwap = () => {
  if(p1Turn){
    diceRoll();
    setPlayer2Turn();
  }
  else{
    diceRoll()
    setPlayer1Turn();
  }
}


//Dice roll function
diceRoll = () =>{
  let xand;
  
  let sOut = setTimeout(function(){
    clearInterval(sIn);
    dice.classList.remove('shake');
    if(p1Turn){
    ts1 = xand;
    tScore1.innerText = xand;
    turn++;
    turnState();
    }
    else{
      ts2 = xand;
      tScore2.innerText = xand;
      turn++;
      turnState();
    }
  }, 1000);
  
  
  let sIn = setInterval(function(){
    let rand = Math.floor(
      Math.random()*6)+1;
      dice.classList.add('shake');
      dice.innerText = rand;
      xand = rand;
  } ,100);

  
}


//Exit to home page from game
back = () =>{
  if(confirm('Are you sure you want to end this game and exit to home page?')){
    gamePage.style.visibility = 'hidden';
    gamePage.style.position = 'absolute';
    welPage.style.visibility = 'visible';
    welPage.style.position = 'fixed';
  }
}

//Exit app function
exitApp = () =>{
  if(confirm('Do you really want to close this game?')){
    window.exit();
    
  }
}


//Celebrate winner 
winner = (pscore, pname) =>{
  if(pscore == 6){
    alert('GAME OVER : ' + pname + ' wins. Start a New Game or Exit');
    p1Btn.disabled = true;
    p2Btn.disabled = true;
    p1Btn.style.backgroundColor = 'floralwhite';
    p2Btn.style.backgroundColor = 'floralwhite';

  }
}
