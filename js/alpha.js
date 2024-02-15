// 1st way
// function play (){
//     // step-1:hide the home screen.to hide the screen add the class hidden to the home section.
//     const homesection = document.getElementById('home');
//     homesection.classList.add('hidden');

//     // playgroun section display
//     const playgroun = document.getElementById('playground');
//     playgroun.classList.remove('hidden');
    
// }
function habdleKeyboardPress (event){
    const keypress = event.key;
    // console.log( 'player press',keypress);
    // if player press Esc button then game over
    if(keypress==='Escape'){
        gameover();
    }


    const currentalphabatElement = document.getElementById('carent-alphamet');
    const currentAlphabat = currentalphabatElement.innerText;
    const expectedAlphabet = currentAlphabat.toLowerCase();
    console.log('expected',expectedAlphabet);
    if(keypress===expectedAlphabet){
        console.log('you got point');
        removebrColor(expectedAlphabet);
        // score
        const currentscoreElement = document.getElementById('score');
        const currentscore = currentscoreElement.innerText;
        const currentS = parseInt(currentscore);
        const finalscore = currentS +1;
        currentscoreElement.innerText= finalscore;
        // console.log(finalscore);
        continueGame();
    }
    else{
        console.log('you dont get any poin');
        const currentLifeElement = document.getElementById('life');
        const currentlifetext = currentLifeElement.innerText;
        const currentlife = parseInt(currentlifetext);
        const newlife = currentlife-1;
        currentLifeElement.innerText = newlife;
        if(newlife===0){
            gameover();

        }

    }
}
document.addEventListener('keyup', habdleKeyboardPress);



function continueGame (){
    const alphabet =  getARandomAlphabet();
    console.log(alphabet);
    const carrrentalp=document.getElementById('carent-alphamet');
    carrrentalp.innerText= alphabet;
    setbrColor(alphabet);
}


function play (){
    hideelementid('home');
    hideelementid('final-score');
    setelementId('playground'); 
    setTextElementById ('life',5);
    setTextElementById('score',0);
    continueGame();

}
function gameover(){
    hideelementid('playground');
    setelementId('final-score');
    // final-score
    const lastScore= getTextElementValueById('score');
    setTextElementById('point',lastScore);
    const currentAlphabet =  getelementText('carent-alphamet');
    removebrColor(currentAlphabet);

}
// function playAgain(){
//     hideelementid('final-score');
//     setelementId('playground');
// }