const log = (content) => console.log(content)

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

const playButton = document.querySelector('#play');

const imgRock = document.querySelector('#rock');
const imgPaper = document.querySelector('#paper');
const imgScissors = document.querySelector('#scissors');
const imgUt = document.querySelector('#ut');




let playerChoice = "";

let getcpuChoice = () => {
    const cpuOptions = ['rock','paper','scissors'];
    let cpuChoice = cpuOptions[Math.floor(Math.random()*cpuOptions.length)];
    return cpuChoice;
}

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

const toggleImages = (playerChoice) => {
    if(playerChoice == 'rock'){
        toggleRock();
    }  else if(playerChoice == 'paper'){
        togglePaper();
    } else if(playerChoice == 'scissors'){
        toggleScissors();
    } else {return};
}




const setChoice = (e) => {
    playerChoice = e.target.getAttribute('data-choice');

    toggleImages(playerChoice);

    log(playerChoice);
}



btnRock.addEventListener('click', function(e){
    setChoice(e);
});

btnPaper.addEventListener('click', function(e){
    setChoice(e);
});

btnScissors.addEventListener('click', function(e){
    setChoice(e);
});


playButton.addEventListener('click', function(e){
    
    log(getcpuChoice());
});





