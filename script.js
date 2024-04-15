const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const thousand = [{id: 1,letter: "M"},{id: 2,letter: "MM"},{id: 3,letter: "MMM"}];
const hundred = [{id: 1,letter: "C"},{id: 2,letter: "CC"},{id: 3,letter: "CCC"},{id: 4,letter: "CD"},{id: 5,letter: "D"},{id: 6,letter: "DC"},{id: 7,letter: "DCC"},{id: 8,letter: "DCCC"},{id: 9,letter: "CM"}];
const tenth = [{id: 1,letter: "X"},{id: 2,letter: "XX"},{id: 3,letter: "XXX"},{id: 4,letter: "XL"},{id: 5,letter: "L"},{id: 6,letter: "LX"},{id: 7,letter: "LXX"},{id: 8,letter: "LXXX"},{id: 9,letter: "XC"}];
const unity = [{id: 1,letter: "I"},{id: 2,letter: "II"},{id: 3,letter: "III"},{id: 4,letter: "IV"},{id: 5,letter: "V"},{id: 6,letter: "VI"},{id: 7,letter: "VII"},{id: 8,letter: "VIII"},{id: 9,letter: "IX"}];

const changeNumber = parseInt(number.value);
let thousands = Math.trunc(changeNumber/1000) % 10;

const displayOutput = () => {
    output.classList.remove('hidden');
    output.innerHTML = `
    <p>${checkInput()}</p>
    `;
};

const checkInput = () => {
    return (!number.value)?"Please enter a valid number":checkNegativeNumber();
};

const checkNegativeNumber = () => {
    const changeNumber = parseInt(number.value);
    return (changeNumber <= 0)?"Please enter a valid numberPlease enter a number greater than or equal to 1":convertToRoman();
};

function convertToRoman() {
    const changeNumber = parseInt(number.value);
    let thousands = Math.trunc(changeNumber/1000) % 10;
    let hundreds = Math.trunc(changeNumber/100) % 10;
    let tenths = Math.trunc(changeNumber/10) % 10;
    let unitys = Math.trunc(changeNumber/1) % 10;
    let romNumber = "";

    if(thousands >= 4){
        return "Please enter a number less than or equal to 3999";
    }else{
        thousand.forEach((obj) =>{(obj.id === thousands)? romNumber=obj.letter:""});
        hundred.forEach((obj) =>{(obj.id === hundreds)? romNumber+=obj.letter:""});
        tenth.forEach((obj) =>{(obj.id === tenths)? romNumber+=obj.letter:""});
        unity.forEach((obj) =>{(obj.id === unitys)? romNumber+=obj.letter:""});
        return romNumber;
    }
}

convertBtn.addEventListener('click', displayOutput)

number.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        displayOutput();
    }
});