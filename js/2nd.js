
function hideelementid (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    
}
function setelementId (elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getARandomAlphabet(){
    // get a alphabet array

    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetarr = alphabetstring.split('');
    // get a random index 0-25
    const randomalphabet = Math.random()*25;
    const randomnumber = Math.round(randomalphabet);
    const alphabet = alphabetarr[randomnumber];
    return alphabet;

}
function setbrColor (elementId){
    const setbg = document.getElementById(elementId);
    setbg.classList.add('bg-orange-400');
}
function removebrColor (elementId){
    const setbg = document.getElementById(elementId);
    setbg.classList.remove('bg-orange-400');
}
function setTextElementById (elementId,value){
    const element = document.getElementById (elementId);
    element.innerText = value;
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function getelementText (elementId){
    const element = document.getElementById(elementId);
     const text = element.innerText;
     return text;
}