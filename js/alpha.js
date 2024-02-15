// 1st way
// function play (){
//     // step-1:hide the home screen.to hide the screen add the class hidden to the home section.
//     const homesection = document.getElementById('home');
//     homesection.classList.add('hidden');

//     // playgroun section display
//     const playgroun = document.getElementById('playground');
//     playgroun.classList.remove('hidden');
    
// }
function continueGame (){
    const alphabet =  getARandomAlphabet();
    console.log(alphabet);
    const carrrentalp=document.getElementById('carent-alphamet');
    carrrentalp.innerText= alphabet;
    setbrColor(alphabet);
}


function play (){
    hideelementid('home');
    setelementId('playground'); 
    continueGame();

}