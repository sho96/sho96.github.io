const resultParagraph = document.querySelector(".result");
const minInput = document.querySelector(".min");
const maxInput = document.querySelector(".max");

const generateRandomNumber = () => {
    const minNumber = minInput["value"];
    const maxNumber = maxInput["value"];

    if (minNumber == "" || maxNumber == ""){
        resultParagraph.innerHTML = "the min and the max values aren't set."
        return;
    }

    const number = Math.round((Math.random()*(maxNumber-minNumber)))
    console.log(number);
    console.log(number+minNumber);
    resultParagraph.innerHTML = "The number is " + number;
}