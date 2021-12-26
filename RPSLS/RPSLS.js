let tie = new Audio('./static/Sound/tie.mp3');
let lose = new Audio('./static/Sound/lose.mp3');
let won = new Audio('./static/Sound/won.mp3');

let Win = 0;
let Lose = 0;
let Tie = 0;

function choice (yourChoice){

    document.getElementById('box3').innerHTML = "";

    var myChoice = yourChoice.id;
    var botChoice = ['rock', 'paper', 'scissor', 'lizard', 'spock'][Math.floor(Math.random() * 5)];
    // Math ~ CAPITAL 'M'

    var imgDB = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissor' : document.getElementById('scissor').src,
        'lizard' : document.getElementById('lizard').src,
        'spock' : document.getElementById('spock').src,
    }

    // Creating Div for Result images
    var mydiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var msgdiv = document.createElement('div');

    mydiv.innerHTML = "<img src='"+imgDB[myChoice]+"' style = 'box-shadow: 0rem 0rem 1.5rem .5rem blue; border-radius: 50%; margin-top:2rem' >";
    document.getElementById('box3').appendChild(mydiv);

    if(myChoice === botChoice){
        msgdiv.innerHTML = "<h2>You Tied</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Tied!";
        document.querySelector('#result').style.color = 'orange';
        tie.play();
        Tie++;
    }
    else if(myChoice == "rock" && botChoice == "scissor"){
        msgdiv.innerHTML = "<h2>Rock Smashes Scissor</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else if(myChoice == "rock" && botChoice == "lizard"){
        msgdiv.innerHTML = "<h2>Rock Crushes Lizard</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else if(myChoice == "scissor" && botChoice == "paper"){
        msgdiv.innerHTML = "<h2>Scissor Cuts Paper</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else if(myChoice == "scissor" && botChoice == "lizard"){
        msgdiv.innerHTML = "<h2>Scissor Decapitates Lizard</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else if(myChoice == "paper" && botChoice == "rock"){
        msgdiv.innerHTML = "<h2>Paper Cover Rock</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else if(myChoice == "paper" && botChoice == "spock"){
        msgdiv.innerHTML = "<h2>Paper Disprove Spock</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else if(myChoice == "lizard" && botChoice == "spock"){
        msgdiv.innerHTML = "<h2>Lizard Poisons Spock</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else if(myChoice == "lizard" && botChoice == "paper"){
        msgdiv.innerHTML = "<h2>Lizard Eats Paper</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else if(myChoice == "spock" && botChoice == "scissor"){
        msgdiv.innerHTML = "<h2>Spock Smashes Lizard</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else if(myChoice == "spock" && botChoice == "rock"){
        msgdiv.innerHTML = "<h2>Spock Vaporizes Rock</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Won!";
        document.querySelector('#result').style.color = 'green';
        won.play();
        Win++;
    }
    else{
        msgdiv.innerHTML = "<h2>You Lost</h2>";
        document.getElementById('box3').appendChild(msgdiv);
        document.querySelector('#result').textContent = "You Lose!";
        document.querySelector('#result').style.color = 'red';
        lose.play();
        Lose++
    }
    
    botdiv.innerHTML = "<img src='"+imgDB[botChoice]+"'style = 'box-shadow: 0rem 0rem 1.5rem .5rem red; border-radius: 50%; margin-top:20px'>";
    document.getElementById('box3').appendChild(botdiv);

    document.getElementById('head').style.borderTop = 'black solid 2px';

    document.querySelector('#wins').textContent = Win;
    document.querySelector('#losses').textContent = Lose;
    document.querySelector('#draws').textContent = Tie;
}