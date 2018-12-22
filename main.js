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



let playerChoice = "";


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
    
});

btnPaper.addEventListener('click', function(e){
    setChoice(e);
});

btnScissors.addEventListener('click', function(e){
    setChoice(e);
});








