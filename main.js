const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

const playButton = document.querySelector('#play');

const imgRock = document.querySelector('#rock');
const imgPaper = document.querySelector('#paper');
const imgScissors = document.querySelector('#scissors');
const imgUt = document.querySelector('#ut');

const imgRockCpu = document.querySelector('#rockCPU');
const imgPaperCpu = document.querySelector('#paperCPU');
const imgScissorsCpu = document.querySelector('#scissorsCPU');
const imgCt = document.querySelector('#ct');

let round = document.querySelector('.round');
let winCounter = document.querySelector('#userWins');
let tiesCounter = document.querySelector('#ties');
let cpuCounter = document.querySelector('#cpuWins');
let textResult = document.querySelector('.textResult');
const emptyText = () => textResult.textContent = '';

const updateRound = () => {
    counter += 1; 
    round.textContent = `Round ${counter}`
};


let cpuWins = 0;
let ties = 0;
let userWins = 0;
let counter = 1;

//Results 

let caseWin = () => {
 userWins += 1;
 winCounter.textContent = userWins; 
 textResult.textContent = 'You won';  
}

let caseTie = () => {
    ties += 1;
    tiesCounter.textContent = ties;
    textResult.textContent = "It's a tie";
}

let caseLose = () => {
    cpuWins += 1;
    cpuCounter.textContent = cpuWins;
    textResult.textContent = 'You lost';
}

//Possible outcomes

let playRound = (userSelection,cpuSelection) => {

    if(userSelection == 'rock' && cpuSelection == 'rock'){
        caseTie();
    } else if(userSelection == 'rock' && cpuSelection == 'paper'){
        caseLose();
    } else if(userSelection == 'rock' && cpuSelection == 'scissors'){
        caseWin();
    } else if(userSelection == 'paper' && cpuSelection == 'rock'){
        caseWin();
    } else if(userSelection == 'paper' && cpuSelection == 'paper'){
        caseTie();
    } else if(userSelection == 'paper' && cpuSelection == 'scissors'){
        caseLose();
    } else if(userSelection == 'scissors' && cpuSelection == 'rock'){
        caseLose();
    } else if(userSelection == 'scissors' && cpuSelection == 'paper'){
        caseWin();
    } else if(userSelection == 'scissors' && cpuSelection == 'scissors'){
        caseTie();
    } else {
        return console.error('Todo se derrumbó xd');
        
    }


};

emptyText();

round.textContent = `Round ${counter}`


let playerChoice = "";


//CPU Imgaes toggling

const toggleRockCPU = () => {
    imgRockCpu.style.display = 'block';
    imgPaperCpu.style.display = 'none';
    imgScissorsCpu.style.display = 'none';
    imgCt.style.display = 'none';
}

const togglePaperCPU = () => {
    imgRockCpu.style.display = 'none';
    imgPaperCpu.style.display = 'block';
    imgScissorsCpu.style.display = 'none';
    imgCt.style.display = 'none';
}

const toggleScissorsCPU = () => {
    imgRockCpu.style.display = 'none';
    imgPaperCpu.style.display = 'none';
    imgScissorsCpu.style.display = 'block';
    imgCt.style.display = 'none';
}

const toggleBlanckCPU = () => {
    imgRockCpu.style.display = 'none';
    imgPaperCpu.style.display = 'none';
    imgScissorsCpu.style.display = 'none';
    imgCt.style.display = 'block';
}


const toggleCPUImages = (cpuPlay) => {
    if(cpuPlay == 'rock'){
        toggleRockCPU();
    } else if(cpuPlay == 'paper'){
        togglePaperCPU();
    } else if(cpuPlay == 'scissors'){
        toggleScissorsCPU();
    } else {
        return;
    }
};

//User Images toggling
const toggleRock = () => {
    imgRock.style.display = 'block';
    imgPaper.style.display = 'none';
    imgScissors.style.display = 'none';
    imgUt.style.display = 'none';
};

const togglePaper = () => {
    imgRock.style.display = 'none';
    imgPaper.style.display = 'block';
    imgScissors.style.display = 'none';
    imgUt.style.display = 'none';
};

const toggleScissors = () => {
    imgRock.style.display = 'none';
    imgPaper.style.display = 'none';
    imgScissors.style.display = 'block';
    imgUt.style.display = 'none';
};

const toggleUserImages = (playerChoice) => {
    if(playerChoice == 'rock'){
        toggleRock();
    }  else if(playerChoice == 'paper'){
        togglePaper();
    } else if(playerChoice == 'scissors'){
        toggleScissors();
    } else {return};
}

//Set User Choice
const setChoice = (e) => {
    playerChoice = e.target.getAttribute('data-choice');

    toggleUserImages(playerChoice);  
}

//Button functions

btnRock.addEventListener('click', function(e){
    setChoice(e);
    toggleBlanckCPU();
    emptyText();
});

btnPaper.addEventListener('click', function(e){
    setChoice(e);
    toggleBlanckCPU();
    emptyText();
});

btnScissors.addEventListener('click', function(e){
    setChoice(e);
    toggleBlanckCPU();
    emptyText();
});

playButton.addEventListener('click', cpuChoice = () => {
    if(!playerChoice){
        alert('No seas perr@, escogé algo -_-') 
        return;
    }
    let cpuOptions = ['rock', 'paper', 'scissors'];
    let cpuPlay = cpuOptions[Math.floor(Math.random()*cpuOptions.length)]
    toggleCPUImages(cpuPlay);
    updateRound();
    playRound(playerChoice,cpuPlay);
});










