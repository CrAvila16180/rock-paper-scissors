const log = (content) => console.log(content)

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
let counter = 1;
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
}








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

    log(playerChoice);
}

//Button functions

btnRock.addEventListener('click', function(e){
    setChoice(e);
    toggleBlanckCPU();
    
});

btnPaper.addEventListener('click', function(e){
    setChoice(e);
    toggleBlanckCPU();
});

btnScissors.addEventListener('click', function(e){
    setChoice(e);
    toggleBlanckCPU();
});

playButton.addEventListener('click', cpuChoice = () => {
    let cpuOptions = ['rock', 'paper', 'scissors'];
    let cpuPlay = cpuOptions[Math.floor(Math.random()*cpuOptions.length)]
    log(cpuPlay);

    toggleCPUImages(cpuPlay);
    counter += 1; 
    round.textContent = `Round ${counter}`
    log(round);

});










