const log = (content) => console.log(content)

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

let playerChoice = "";


const setChoice = (e) => {
    playerChoice = e.target.getAttribute('data-choice');
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






