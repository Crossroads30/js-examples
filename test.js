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
//const fs = require('fs');
//const path = require('path');

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

//Модуль os (operating system) предоставляет данные об операционной системе пользователя
//const os = require('os');
//// Платформа
//console.log(os.platform());

//// Архитектура
//console.log(os.arch());

//// Информация о CPU
//console.log(os.cpus());

//// Общий объём памяти
//console.log(os.totalmem());

//// Объём свободной памяти
//console.log(os.freemem());

//// Корневая директория
//console.log(os.homedir());

//// Время работы системы
//console.log(os.uptime());

//// Символ окончания строки в данной системе
//console.log(os.EOL);

//В Node.js для работы с сервером и протоколом HTTP используется модуль http
//const http = require('http');

//const PORT = 3000;

//const requestHandler = (request, response) => {
//    const { method, url } = request;
//    const heading = `<h1 style="color: red">${url} page</h1>`;
//    const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
//    console.log(`Получен ${method}-запрос на ${url}`);
//    response.write(heading);
//    response.end(content);
//};

//const server = http.createServer(requestHandler);

//server.listen(PORT, 'localhost', () => {
//    console.log(`Сервер запущен на порту ${PORT}`);
//});

//Установка модулей через npm.
