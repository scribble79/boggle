$(initialize);

var board = [
    ["I","L","A","W"], 
    ["B","N","G","E"], 
    ["I","U","A","O"], 
    ["A","S","R","L"] 
  ];  
var horizontal = [ 
    ["I","L","A","W"], 
    ["B","N","G","E"], 
    ["I","U","A","O"], 
    ["A","S","R","L"] 
    ];
var vertical =  [ 
    ["I","B","I","A"]
    ["L","N","U","S"]
    ["A","G","A","R"]
    ["W","E","O","L"]
    ];
var diagonal = [ 
    ["I","N","A","L"]
    ["W","G","U","A"]
    ["A","E"]
    ["L","G","O"]
    ["B","U","R"]
    ["I","S"]
    ["L","B"]
    ["A","N","I"]
    ["E","A","S"]
    ["O","R"]
    ];               
  
function initialize() {
  $("button").each(function(index) {
    $(this).on("click", function() {
      play(this.id);
    });
  });
}

function play(choice) {
  userChoice = choice;
  botsPlay();
  evaluate();
  updateScoreBoard();
  updateStatus();
}

function botsPlay() {
  var index = Math.floor(Math.random() * choices.length);
  botChoice = choices[index];
}

function updateScoreBoard() {
  $('#humanScore').text(userScore);
  $('#computerScore').text(botScore);
}

function updateStatus() {
  $('#status').text('You played ' + userChoice + ', bot played ' + botChoice);
}

function evaluate() {
  switch (userChoice) {
    case "rock":
    if (botChoice == "paper") { botScore++; } 
    if (botChoice == "scissors") { userScore++; }
    break;

    case "paper":
    if (botChoice == "rock") { userScore++; } 
    if (botChoice == "scissors") { botScore++; }
    break;

    case "scissors":
    if (botChoice == "paper") { userScore++; } 
    if (botChoice == "rock") { botScore++; }
    break;
  }
}

function sayHello(name) {
  console.log("Hi there," + name);
}
sayHello("Andy"); //Hi there, Andy
sayHello("Jay");//Hi there, Jay