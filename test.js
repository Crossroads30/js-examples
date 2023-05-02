//console.log(process.argv);
//console.log(process.argv.slice(2));
//const flagIndex = process.argv.indexOf('-m');
//if (flagIndex !== -1) {
//  const message = process.argv[flagIndex + 1];
//  console.log(message);
//};

//function getValue(flag) {
//  const flagIndex = process.argv.indexOf(flag);
//  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
//}
//const message = getValue('-m');
//console.log(message);

//const { stdout, stdin, exit } = process;
//const flag = process.argv[2];
//const allowedFlags = ['-m', '-s'];
//if (!allowedFlags.includes(flag)) {
//    stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
//    exit();
//}
//stdout.write('Введите, пожалуйста, два числа\n');
//stdin.on('data', data => {
//    const numString = data.toString();
//    const numStringsArray = numString.split(' ');
//    const hasIncorrectLength = numStringsArray.length !== 2;
//    const hasIncorrectValues = numStringsArray.some(numStr => Number.isNaN(+numStr));
//    if (hasIncorrectLength || hasIncorrectValues) {
//        stdout.write('Нужно ввести 2 числа, разделенных пробелом');
//        exit();
//    }
//    const [firstNum, secondNum] = numStringsArray.map(numStr => +numStr);
//    if (flag === '-s') {
//        const sum = firstNum + secondNum;
//        stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
//    } else {
//        const mult = firstNum * secondNum;
//        stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
//    }
//    exit();
//});

//console.log(__dirname);
//console.log(__filename);
const { stdout } = process;
const flag = process.argv[2];

if (flag === '-d') {
    stdout.write(__dirname);
} else if (flag === '-f') {
    stdout.write(__filename);
} else {
    stdout.write('Пожалуйста, запустите программу с флагом -d или -f');
};

//const path = require('path');
//const fs = require('fs');
//const os = require('os');
//npm install <имя модуля> 