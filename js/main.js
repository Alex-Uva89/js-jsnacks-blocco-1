// SNACK 1 

const resultStamp = document.querySelector('.snack');

/*const num1 = parseInt(prompt('Numero 1:'));
const num2 = parseInt(prompt('Numero 2:'));

if (num1 > num2){
    console.log('num1')
} else if (num1 < num2){
    console.log('num2')
} else {
    console.log('Sono uguali')
}*/

// SNAK 2

/*const word1 = prompt('Parola 1');
const word2 = prompt('Parola 2');

if (word1.length > word2.length){
    resultStamp.innerHTML=word1 + ' è più lunga di ' + word2;
} else if (word1.length < word2.length){
    resultStamp.innerHTML=word2 + ' è più lunga di ' + word1;

} else {
    resultStamp.innerHTML= word1 + ' e ' +  word2 + ' sono lunghe uguali'
}*/

// SNACK 3

/*const num1st = parseInt(prompt('Indicami 1° numero'));
const num2nd = parseInt(prompt('Indicami 2° numero'));
const num3th = parseInt(prompt('Indicami 3° numero'));
const num4th = parseInt(prompt('Indicami 4° numero'));
const num5th = parseInt(prompt('Indicami 5° numero'));
const num6th = parseInt(prompt('Indicami 6° numero'));
const num7th = parseInt(prompt('Indicami 7° numero'));
const num8th = parseInt(prompt('Indicami 8° numero'));
const num9th = parseInt(prompt('Indicami 9° numero'));
const num10th = parseInt(prompt('Indicami 10° numero'));

resultStamp.innerHTML=Math.floor(num10th + num1st + num2nd + num3th + num4th + num5th + num6th + num7th + num8th + num9th);*/

let calcArray = [];

for (let calc = 0; calc < 10; calc++){
    let numUser = parseInt(prompt('Indicami un numero'));
    calcArray.push(numUser);
}

let summ = 0;

for (let i = 0; i < calcArray.length; i++) {
    summ += calcArray[i];
}

resultStamp.innerHTML = summ;