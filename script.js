const resultParagraph = document.querySelector(".result");
const minInput = document.querySelector(".min");
const maxInput = document.querySelector(".max");

const generateRandomNumber = () => {
    const minNumber = parseInt(minInput["value"]);
    const maxNumber = parseInt(maxInput["value"]);

    if (minNumber == NaN || maxNumber == NaN){
        resultParagraph.innerHTML = "the min and the max values aren't set."
        return;
    }

    const number = Math.round((Math.random()*(maxNumber-minNumber))+minNumber);
    console.log(number);
    console.log(number+minNumber);
    resultParagraph.innerHTML = "The number is " + number;
}
