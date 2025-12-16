const getComputerChoice = () => {
    const val = Math.floor(Math.random()*10);
    let returnValue ;
    if (val >= 0 && val <= 3){
        returnValue = "Rock!"
    }else if (val > 3 && val < 7){
        returnValue = "Paper!"
    }else{
        returnValue = "Scissors!"
    }
    console.log(returnValue);
}

getComputerChoice();