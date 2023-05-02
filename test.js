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
//const { stdout } = process;
//const flag = process.argv[2];

//if (flag === '-d') {
//    stdout.write(__dirname);
//} else if (flag === '-f') {
//    stdout.write(__filename);
//} else {
//    stdout.write('Пожалуйста, запустите программу с флагом -d или -f');
//};

//const path = require('path');
//const fs = require('fs');
//const os = require('os');
//npm install <имя модуля>;
//npm uninstall <имя модуля>;

//const path = require('path');
//console.log(path.basename(__filename)) // index.js - имя файла на Windows, полный путь к файлу на POSIX-системах
//console.log(path.dirname(__filename)) // C:\Users\Admin\Desktop\nodejs-basic - название папки
//console.log(path.extname(__filename)) // .js - расширение файла
//console.log(path.parse(__filename)); // возвращает объект в котором указывается корень диска, имя папки, имя файла, расширение файла, имя файла без расширения

//const fs = require('fs');
//Создадим папку. Для этого есть два метода:

//асинхронный fs.mkdir
//синхронный fs.mkdirSync

//Создадим папку notes в текущей директории:
const fs = require('fs');
const path = require('path');

//fs.mkdir(path.join(__dirname, 'notes'), err => {
//    if (err) throw err;
//    console.log('Папка была создана');
//});

//Создадим файл mynotes.txt, содержащий текст Hello world внутри папки notes:
//fs.writeFile(
//    path.join(__dirname, 'notes', 'mynotes.txt'),
//    'Hello world',
//    (err) => {
//        if (err) throw err;
//        console.log('Файл был создан');
//    }
//);

//Дополним файл, записав в него ещё какую-то информацию
//fs.appendFile(
//  path.join(__dirname, 'notes', 'mynotes.txt'),
//  ' From append file',
//  err => {
//      if (err) throw err;
//      console.log('Файл был изменен');
//  }
//);
//Прочитаем информацию из файла
//fs.readFile(
//  path.join(__dirname, 'notes', 'mynotes.txt'),
//  'utf-8',
//  (err, data) => {
//      if (err) throw err;
//      console.log(data);
//  }
//);

//Переименуем файл
//fs.rename(
//  path.join(__dirname, 'notes', 'mynotes.txt'),
//  path.join(__dirname, 'notes', 'notes.txt'),
//  err => {
//      if (err) throw err;
//      console.log('Файл переименован');
//  }
//);