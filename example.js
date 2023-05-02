//Function Declaration
//greet('Лена')
/*function greet(name) {
   console.log('Привет - ', name)
}
//function Expression
const greet2 = function greet2(name) {
   console.log('hello - ', name)
}*/
//greet2('Helen')

/*let counter = 0
const interval = setInterval(function() {
   if (counter === 10){
      clearInterval(interval)
   } else {
   console.log(++counter)
   }
}, 1000)*/

//Cтрелочная функция
/*function greet(name) {
   console.log('Привет - ', name)
}
//тоже самое:
const arrow = (name) => {
   console.log('Hello -', name)
}
arrow('James')
//тоже самое и это:
const arrow2 = name => console.log('Hello -', name)
arrow2('Jacob')


const pow2 = num => {
   return num ** 2
}
console.log(pow2(5))
//тоже самое:
const pow_2 = num =>  num ** 2
console.log(pow_2(5))
*/

//параметры по умолчанию
/*const sum = (a , b) => a + b
console.log(sum(30,2))

const sum1 = (a , b = 2) => a + b
console.log(sum1(30,))

const sum2 = (a = 30, b = a * 2) => a + b
console.log(sum2())
*/
//сумма всех чисел
/*function sumAll_(...all) {
   console.log(all)
}
sumAll_(1,2,3,4,5)
console.log(sumAll)*/


/*function sumAll(...all) {
   let result = 0
   for (let num of all) {
      result += num
   }
   return result
}
const res = sumAll(1,2,3,4,5)
console.log(res)*/

//замыкание
/*function createMember(name) {
   return function(lastName) {
      console.log(name + lastName)
   }
}
const logWithLastName = createMember('James')
console.log(logWithLastName('Zabolotnyi'))
console.log(logWithLastName('Goldshtein'))*/
//----------------------------------------

// Массивы(array)--------------------------------
/*const cars = ['mazda','bmw','ford','nissan']
console.log(cars)*/
//Function
/*function adItemToEnd() {

}
//Method
/*cars.push('Porshe')
console.log(cars)*/

/*cars.unshift('Mersedes')
console.log(cars)*/

/*cars.shift()
console.log(cars)*/

/*const firstItem = cars.shift()
console.log(firstItem)
console.log(cars)*/

/*const lastItem = cars.pop()
console.log(lastItem)
console.log(cars)*/

/*cars.reverse()
console.log(cars)*/

//Задача
/*const text = 'Привет, мы изучаем javascript'
const reverseText = text.split('').reverse().join('')
console.log(reverseText)*/

/*const cars = ['mazda','bmw','ford','nissan']
const index = cars.indexOf('bmw')
cars[index] = 'porshe'
console.log(cars)*/

/*const people = [
{name: 'James', budjet: 4000},
{name: 'Elena', budjet: 3000},
{name: 'Elena', budjet: 2000}
]*/
/*const index = people.findIndex(function(person) {
return person.budjet === 3000
})
console.log(people[index])*/

//можно без индекса:

/*const person = people.find(function(person) {
   return person.budjet === 3000
   })
   console.log(person)*/

//это более замороченный способ:
/*let findedPerson
for (const person of people) {
   if (person.budjet === 3000) {
      findedPerson = person
   }
}
console.log(findedPerson)*/

//лучше сделать тоже самое с помощью стрелочной функции
/*const person = people.find((person) => {
   return person.budjet === 3000
})
console.log(person)*/

//а лучше еще упростить в одну строчку(лямбда функция):
/*const person = people.find(person => person.budjet === 3000)
   
console.log(person)*/

//поиск элемента в массиве( метод includes):
/*const cars = ['mazda','bmw','ford','nissan']
console.log(cars.includes('mazda'))*/

//метод 'map' всегда возвращает новый массив:
/*const cars = ['mazda','bmw','ford','nissan']
const upperCaseCars = cars.map(car =>{
   return car.toUpperCase()
})
console.log(upperCaseCars)
console.log(cars)*/

//возведем квждый элемент в квадрат:
/*const pow2Fib = fib.map(num => num ** 2)
const fib = [1,1,2,3,5,8,13]
console.log(pow2Fib)*/

//можно и так:
/*const fib = [1,1,2,3,5,8,13]
const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)
console.log(pow2Fib)*/

//можнотак же добавить несколько функций(sqrt квадратный корень)
/*const fib = [1,1,2,3,5,8,13]
const pow2 = num => num ** 2
const sqrt = num => Math.sqrt(num)

const pow2Fib = fib.map(pow2).map(sqrt)
console.log(pow2Fib)*/

//или не создавая отдельной функции, а передать её как референс:
/*const fib = [1,1,2,3,5,8,13]
const pow2 = num => num ** 2

const pow2Fib = fib.map(pow2).map(Math.sqrt)
console.log(pow2Fib)*/

//метод фильтрование
/*const fib = [1,1,2,3,5,8,13]
const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num => {
   return num > 20 //убрать всё что меньше 20
})
console.log(pow2Fib)
console.log(filteredNumbers)*/

//или сокращенно:
/*const fib = [1,1,2,3,5,8,13]
const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num => num > 20)
console.log(filteredNumbers)*/

// метод 'reduse' позволяет объединять все значения массива в одно значение
// задача просуммировать бюджет всех людей у которого он выше 2000
// chaining - это вызов несколько методов подрят
// 'acc'- метод аккумулятор который суммирует
/*const people = [
   {name: 'James', budget: 4000},
   {name: 'Elena', budget: 3000},
   {name: 'Julia', budget: 2000}
]
const allBudget = people
.filter(person => person.budget > 2000)

.reduce((acc, person) => {
   acc += person.budget
   return acc
}, 0)
console.log(allBudget)*/
//--------------------------------
//Объекты-------------------------

// const person = {
//    name: 'james',
//    age: 28,
//    isProgrammer: true,
//    languages: ['ru','en','de'],
//    'complex key': 'Complex Value',
//    ['key_' + (1 +3)]: 'Cmputed Key',
//    greet() {
//       console.log('greet from person')
//    }
// }

// console.log(person.name)
// const ageKey = 'age'
// console.log(person['agekey'])
// console.log(person['complex key'])
// console.log(person)
// person.greet()
// person.age++
// person.languages.push('fr')
// console.log(person)
// delete person['key_4']

// const name = person.name
// const age = person.age
// const languages = person.languages
//тоже самое можно записать в одну строку:
// const {name: newName = 'Jim', age: personAge = 10, languages} = person 
// console.log(newName, personAge, languages)

// итерация по ключам:
// const keys = Object.keys(person)
// keys.forEach((key) => {
//   console.log('key:', key)
//   console.log('value:', person[key])
// })
// в более правильном виде:
// Object.keys(person).forEach((key) => {
//    console.log('key:', key)
//    console.log('value:', person[key])
// } )
//-----------------------------------
// Event loop/ Асинхронность
// const timeout = setTimeout(() => {
//    console.log('since 3 sec')
// }, 3000)
// clearTimeout(timeout)

// const interval = setInterval(() => {
//    console.log('since 3 sec')
// }, 2000)
// clearInterval(interval)

// const dalay = (callback, wait = 1000) => {
//    setTimeout(callback, wait)
// }
// dalay(() => {
//    console.log('After 2 seconds')
// }, 2000)

//Промисы
// const delay = (wait = 1000) => {
//    const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//          // resolve()
//          reject('что-то пошло не так. Повторите попытку')
//       }, wait)
//    })
//    return promise
// }

// dalay(1000)
// .then(() => {
//    console.log('after 2 seconds')
// })
// .catch( err => console.error('Error:', err))
// .finally(() => console.log('finally'))

// const getData = () => new Promise(resolve => resolve([
//    1,1,2,3,5,8,13,21
// ]))
// async function asyncExample() {
//    try {
//       await delay(2000)
//       const data = await getData()
//       console.log('Data', data)
//    } catch (e) {
//       console.log(e)
//    } finally {
//       console.log('Finally')
//    }
// }
// asyncExample() 
//--------------------------------
//--------------------------------

//---------Взаимодействие с HTML-----------
//const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')[0]
//const heading2 = document.querySelector('h2')
// const heading2 = document.querySelector('.h2-class')
//const heading2 = document.querySelector('#h2')
//const heading3 = heading2.nextElementSibling
//const h2List = document.querySelectorAll('h2')

// const heading3 = h2List[h2List.length - 1]


// setTimeout(() =>{
//    addStyleTo(heading, 'Let it be')
// },1500)

// setTimeout(() =>{
//    addStyleTo(heading2, 'Today', 'green')
// },3500)

// const link = heading3.querySelector('a')
// link.addEventListener('click',(event) => {
//    event.preventDefault()
//    console.log('Click on click', event.target.getAttribute('href'))
//    const url = event.target.getAttribute('href')
//    window.location = url
// })  

// setTimeout(() =>{
//    addStyleTo(link, 'Forever!', 'black', '2rem')
// },5000)

/* можно передать ссылку в элемент этими способами:
setTimeout(() =>{
   addStyleTo(heading3.querySelector('a') или heading3.children[0], 'Forever!', 'black', '2rem')
},5000) */

// function addStyleTo(node, text, color = 'red', fontSize) {
//    node.style.color = color
//    node.textContent = text
//    node.style.textAlign = 'center'
//    node.style.backgroundColor = 'yellow'
//    node.style.padding = '2rem'
//    node.style.width = '100%'
//    node.style.display = 'block'
//    if (fontSize){//falsy: '', undefined, null, 0, false
//       node.style.fontSize = fontSize
//    }
// }
//https://developer.mozilla.org/en-US/docs/Web/Events
// heading.onclick = () => {
//    if (heading.style.color === 'red') {
//       heading.style.color = '#000'
//       heading.style.backgroundColor = '#fff'
//    } else {
//       heading.style.color = 'red'
//       heading.style.backgroundColor = 'yellow'
//    }
// }

// heading3.addEventListener('dblclick', () => {
//    if (heading3.style.color === 'black') {
//       heading3.style.color = '#000'
//       heading3.style.backgroundColor = '#fff'
//    } else {
//       heading3.style.color = 'black'
//       heading3.style.backgroundColor = 'yellow'
//    }
// })
//____________________________________________________
//___________________________________________________
// const max = (a, b) => (a > b ? a : b)
// console.log(max(2,5))
// console.log(max(5,2))
//------------------------------------------
// const showGreeting = () => {
//    const text = 'Hello, Hexlet!';
//    console.log(text);
// }
// showGreeting();
// const printMotto = () => {
//    const text = 'Winter is coming'
//    console.log(text)
// }
// printMotto()
//---или так:
// function printMotto() {
//    console.log('Winter is coming')
// }
// printMotto()
//-------------------
// const greeting = () => {
//    return 'Hello, Hexlet!';
//  };
//  console.log(greeting())
//---------------------------
// function sayHurrayThreeTimes(str = 'hurray!') {
//    return console.log(`${str}${str}${str}`) 
// }
// sayHurrayThreeTimes()
//-----------------------

// const truncate = ( text, length ) => {
//    text = 'welcome'
//    length = 3
//    return text.slice(0,length)+'...'
//или:const result = `${text.slice(0, length)}...`;
//    return result;
// };
// truncate()
//или так:
//truncate = (text,length) =>  `${text.slice(0, length)}...`
//console.log(truncate('приветик',4))
//-------------------------
// getHiddenCard = (numbner,hidden = 4) => {
//    result = `${'*'.repeat(hidden)}${numbner.slice(12)}`
//    return console.log(result)
// }
// getHiddenCard('2034399002125581')
//сощкращенная форма записи функций: 
// getHiddenCard = (numbner,hidden = 4) => 
//    `${'*'.repeat(hidden)}${numbner.slice(12)}`
// console.log(getHiddenCard('2034399002125581'))

// capitalize = (name) =>
// `${name[0].toUpperCase()}${name.slice(1)}`
// console.log(capitalize('welcome'))
//---функции предикаты:
// const isPensioner = (age) =>
// age >= 60
// console.log(isPensioner(40));
//-------------------------
// const isMister = (type) => type === 'Mister'
// console.log(isMister('Mister'))
//-------------------------
// const isInternationalPhone = (phoneNumber) => {
//    if ( phoneNumber[0] === '+' && phoneNumber.substr(1,3) === '375'){
//    return 'Your phonenumber is correct'
//    }
//    else {
//       return 'incorrect phone number!!!' 
//    } 
// }
// console.log(isInternationalPhone('+3355637523'))
//--------------------------------------
// const isLeapYear = (year) => 
// year % 400 === 0 || ( year % 4 === 0 && year % 100 !== 0 )
// console.log(isLeapYear(2017))
//------------------------
// const isPalindrome = (word) => {
//    const lowerWord = word.toLowerCase()
//    const result = lowerWord.split('').reverse().join('')
//    return  result === lowerWord
// }
// const isNotPalindrome = (word) => !isPalindrome(word)
// console.log(isPalindrome('Калаш'))
// console.log(isNotPalindrome('Шалаш'))
//------или так:
//const isPalindrome = (word) => word.split('').reverse().join('').toLowerCase() === word.toLowerCase() 
//------------------------
//0, '', undefined, NaN, null приводятся к false. 
//Эти значения называют falsy.
//Всё остальное приводится к true
//------------------------
// function getLetter(word,position) {
//    return word[position -1] || ''
// } 
// console.log(getLetter('hexlet', 6))
//------------------------
// guessNumber = (number) => (number === 42)? 'You win!': 'Try again!'
//    console.log(guessNumber(42))
//---тоже самое что и это:  
// function guessNumber(number){
//    if (number === 42){
//       return 'You win!'
//    }
//    else {
//       return 'Try again!'
//    }
// }
// console.log(guessNumber(42))
//-------------------------------
// normalizeUrl = (addres) => (addres.startsWith('https://'))? addres: `https://${addres}`
// console.log(normalizeUrl("google.com"))
//-------тоже самое что и это:
// normalizeUrl = (addres) => {
//    if (addres.startsWith('https://') ) {
// return addres
//    }
//    else {
//       return `https://${addres}`
//    }
// }
// console.log(normalizeUrl('https://ai.fi'))
//-----------------------------------

// const whoIsThisHouseToStarks = (family) => {
//    let familyStatus 
//    if (family === 'Karstark'|| family === 'Tally'){
//       familyStatus = 'friend'
//    } else if (family === 'Lannister'|| family === 'Frey') {
//       familyStatus = 'enemy'
//    } else if (family === '') {
//          familyStatus = 'undefined'
//    } 
//    else {
//       familyStatus = 'nutral'
//    }
// return `Family is ${familyStatus}`
// }
// console.log(whoIsThisHouseToStarks('Tally'))
//тоже самое:
// whoIsThisHouseToStarks = (family) => 
// (family === 'Karstark'|| family ==='Tally')? 'friend': 
// (family === 'Lannister' || family === 'Frey') ? 'enemy' : 'neutral'
//---------------------------------------
// const convertText = (text) => {
//    if (text === '') {
//    return ''
//    }
//    const reversable = text[0] !== text[0].toUpperCase()
//    return reversable ? text.split('').reverse().join('') : text
// }
// console.log(convertText('Hello'))
// convertText = (text) => 
// (text === '')? '':
// (text[0] === text[0].toUpperCase())? text : text.split('').reverse().join('')
// console.log(convertText('Hello'))
//---------------------------------------
// getNumberExplanation = (number) => {
//    switch(number) {
//    case 666: 
//       return 'devil number'
//    case 42:
//       return'answer for everything'
//    case 7: 
//       return'prime number'
//    default: 
//       return null
//    }
// }
// console.log(getNumberExplanation(7))
//-----------------------------------
//------------циклы-------------------
// выводит от 1 до заданного числа:
// const printNumbers = (lastNumber) => {
// let i = 1 // i - это счётчик
//    while (i <= lastNumber) {
// console.log(i)
//    i = i + 1
//    }
//    console.log('finished!')
// }
// printNumbers(3)
//---------------------------------
//выводит от заданного числа до 1:
// const printNumbers = (initialNumber) => {
//    let i = initialNumber
//       while (i >= 1){
//    console.log(i)
//       i = i - 1
//    }
//    console.log('finished!')
// }
// printNumbers(6)
//--------------------------------
// Реализуем функцию, которая складывает числа в указанном диапазоне, включая границы. Диапазоном в данном случае называется ряд чисел от какого-то начала до определенного конца. Например, диапазон [1, 10] включает в себя все целые числа от 1 до 10.
// const sumNumbersFromRange = (start, finish) => {
//    // Технически можно менять start
//    // Но входные аргументы нужно оставлять в исходном значении
//    // Это сделает код проще для анализа
//    let i = start;
//    let sum = 0; // Инициализация суммы
//    while (i <= finish) { // Двигаемся до конца диапазона
//      sum = sum + i; // Считаем сумму для каждого числа
//      i = i + 1; // Переходим к следующему числу в диапазоне
//    }
//    // Возвращаем получившийся результат
//    return console.log(sum)
// }
// sumNumbersFromRange(5,9)
//--------------------------------
//тоже самое , но с умножением:
// multiplyNumbersFromRange = (start,finish) => {
//    let i = start
//    let sum = 1
//    while (i <= finish){
//       sum = sum * i
//       i = i + 1
//    }
//    return console.log(sum)
// }
// multiplyNumbersFromRange(2,4)
//---------------------------------
//функция, которая объединяет все числа из диапазона в строку:
// joinNumbersFromRange = (start,finish) =>{
//    let i = start
//    let result = ''
//    while (i <= finish ){
//       result = `${result}${i}`
//       i = i + 1
//    }
//    return console.log(result)
// }
// joinNumbersFromRange(2,10)
//--------------------------------
// const printNameBySymbol = (name) => {
//    let i = 0;
//    // Такая проверка будет выполняться до конца строки
//    // включая последний символ. Его индекс `length - 1`.
//    while (i < name.length) {
//      // Обращаемся к символу по индексу
//       console.log(name[i]);
//       i = i + 1;
//    }
// }
//тоже самое, только наоборот:
// const printReversedWordBySymbol = (name) => {
//    let i = name.length -1
//       while (i >= 0) {
//       console.log(name[i])
//       i--
//    }
// }
// printReversedWordBySymbol('Hexlet')
//------------------------------
//-----функция, которая считает, сколько раз входит буква в предложение. 
//-----Пример её работы:
// const countChars = (str, char) => {
//    let i = 0
//    let count = 0
//    while (i < str.length) {
//       if (str[i].toLowerCase() === char.toLowerCase()) {
//        // Считаем только подходящие символы
//          count = count + 1
//       }
//      // Счетчик увеличивается в любом случае
//       i = i + 1
//    }
//    return console.log(count)
// }
// countChars('Я помню чудное мгновенье','я')
//-------------------------------
//Есть одна задача, крайне популярная среди людей, 
//проводящих собеседования, это переворот строки
//Пример работы этой функции:
// const reverse = (str) => {
//    let i = 0
//    // Нейтральный элемент для строк это пустая строка
//    let result = ''
//    while (i < str.length) {
//      // Соединяем в обратном порядке
//       result = `${str[i]}${result}`
//      // То же самое через конкатенацию
//      // result = str[i] + result;
//       i = i + 1
//    }
//    return console.log(result)
// }
// reverse('Bran') 
//  // Проверка нейтрального элемента
// reverse('') 
//--------------------------

// function even(number) {
//    if(number % 2 == 0)return 'Even'
//    else return 'Odd'
// }
// console.log(even(5))

// const even = (number) => {
//    number = number.toString()
//    let i = 0
//    let result = ''
//    while (i < number.length) {
//       if (i % 2 !== 0) {
//          result = `${result}${number[i]}`
//       }
//       i = i + 1
//    }
//    return result
// }
// console.log(even(123456789))
//------------------------------
//функция filterString(), принимающая на вход строку и символ, 
//и возвращающую новую строку, в которой удален переданный символ во всех его позициях. 
//Регистр символов важен.
// const filterString = (str,symbol) => {
//    let i = 0
//    let result = ''
//    while ( i < str.length ) {
//       const strSymbol = str[i]
// if (strSymbol !== symbol){
//    result = `${result}${strSymbol}`
// }
// i += 1
//    }
//    return result
// }
// console.log(filterString('Я помню чудное мгновенье','Я'))
//------------------------
// Напишите функцию makeItFunny(), 
// которая принимает на вход строку и возвращает её копию, 
// у которой каждый n-ный элемент переведен в верхний регистр. 
// n – задается на входе в функцию.

// Для определения каждого n-ного элемента понадобится остаток от деления %. 
// Подумайте, как его можно использовать.
//----решение:
// const makeItFunny = (str,n) => {
//    let i = 0
//    let result = ''
//    while (i < str.length) {
//       const element = str[i]
//       if ((i + 1) % n === 0){
//          result = `${result}${element.toUpperCase()}`
//       } else {
//          result = `${result}${element}`
//       }
//       i++
//    }
//    return result
// }
// console.log(makeItFunny('Я помню чудное мгновенье',3))
//---------------------
//алгоритм проверки простоты числа. 
// Будем делить искомое число x на все числа из диапазона от двух до x - 1 
// и смотреть остаток от деления. Если в этом диапазоне не найден делитель, 
// который делит число x без остатка, значит перед нами простое число.
// const isPrime = (number) => {
//    if (number < 2) {
//    return false;
//    }
//    let divider = 2;
//    while (divider <= number / 2) {
//    if (number % divider === 0) {
//       return false;
//    }
//    divider += 1;
//    }
//    return true;
// }
//----------------------------------
//Реализуйте функцию hasChar(), которая проверяет (с учётом регистра), 
// содержит ли строка указанную букву. Функция принимает два параметра:
// Строка
// Буква для поиска
//решение:
// const hasChar = (str, char) => {
//    let i = 0
//    while (i < str.length) {
//       if (str[i] === char) {
//       return true
//    }
//       i += 1
//    }
//    return false
// }
// console.log(hasChar('Hexlet', 'e'))
//Посмотрим реализацию переворота строки через цикл for:
// const reverseString = (str) => {
//    let result = ''
//    for (let i = 0; i < str.length; i += 1) {
//       result = `${str[i]}${result}`
//    }
//    return result
// }
//программа, которая бы шифровала сообщения по следующему алгоритму. 
//Она берёт текст и переставляет в нем каждые два подряд идущих символа.
// encrypt = (text) => { 
//    let result = ''
//    for (let i = 0; i < text.length; i += 2) {
//       const nextSymbol = text[i + 1] || ''
//       result = `${result}${nextSymbol}${text[i]}`
//    }
//    return result
// }
// console.log(encrypt('Изучение программирования — интересный и захватывающий процеcc'))
//----------------------------
//function isEmpty(obj) {
//  let schedule = {};
//  schedule = obj;
//  for (let key in obj){
//    return false
//  }
//  return true
//}
//console.log(isEmpty())
//-------------------------------
//let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130
//}

//let sum = 0
//for (let key in salaries) {
// sum = sum + salaries[key]
//}

//console.log(sum)
//----------------------------------
//let menu = {
//  width: 200,
//  height: 300,
//  title: "My menu"
//};

//function multiplyNumeric (obj) {
//  let res = 0
//    for(let key in obj){
//      if (typeof obj[key] == 'number') {
//       res = obj[key] * 2;
//    }
//    return res
//  }
//}

//console.log(multiplyNumeric(menu))
//----------------------------------
//let calculator = {
//  sum() {
//    return this.a + this.b;
//  },

//  mul() {
//    return this.a * this.b;
//  },

//  read() {
//    this.a = +prompt('a?', 0);
//    this.b = +prompt('b?', 0);
//  }
//};
//-----------------------
//let ladder = {
//  step: 0,
//  up() {
//    this.step++;
//    return this;
//  },
//  down() {
//    this.step--;
//    return this;
//  },
//  showStep: function() { // показывает текущую ступеньку
//    alert( this.step );
//    return this;
//  }
//};
//console.log(ladder.up().up().down().showStep().down().showStep());
//==============================================================
//==============№13=========================
/**Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2. */
//function isPowerOfTwo(n){
//  let res =[]
//  for (let i = 0; i < 20; i++){
//    res.push(i)
//  }
// let num = res.map((el)=> 2** el)
// return num.includes(n)
//  }
//  console.log(isPowerOfTwo(102))
// more
//function isPowerOfTwo(n){
//  let i = 0;
//  while(2**i < n){i++}
//    return (2**i == n) ? true : false;
//  }
//  console.log(isPowerOfTwo(1024))
//more
//  function isPowerOfTwo(n){
//    return Number.isInteger(Math.log2(n));

//}
//====================================
//=============№14=====================
// function sentence(List) {
//  List.sort((a,b) => Object.keys(a)[0] - Object.keys(b)[0])
//  return List.map(el => (Object.values(el)[0])).join(' ')
//}
//console.log(sentence([
//  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
// ]))
//====================================
//===========№15======================
//const minSum = (num) => {
//  num = [5,4,2,3]
//  let num1 = Math.min(...num)
//  let num2 = Math.max(...num)
//  let max = num[0];
//  let min = num[0]
//  let resArr = []
//  for ( i = 1; i < num.length; i++) {
//    if (num[i] > max) {
//        max = num[i];
//    } else if ( num[i]< min) {
//      min = num[i]
//    }
//} return resArr.push(num[i])
//return num2
//} 
//   console.log(minSum())
// for ( i = 1; i < num.length; i++) {
//  if (num[i] > max) {
//      max = num[i];
//  } else if ( num[i]< min) {
//    min = num[i]
//  }
//function strCount(obj){
//  count = 0
//   obj =  Object.values(obj).flat()
//    console.log(obj)
//  for ( i = 0; i < obj.length; i++ ) {
//    if ( typeof obj[i] == 'string'){
//      count++
//    } 
//  } return count
//}
//console.log(strCount(obj = {
//  first: "1",
//  second: "2",
//  third: false,
//  fourth: ["anytime",2,3,4],
//  fifth:  null
//  }))
//=======================================
/**Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
first: "1",
second: "2",
third: false,
fourth: ["anytime",2,3,4],
fifth:  null
})
//returns 3 */
//solution without recursion( not correct in some tests )
//  function strCount(obj){
//    let count = 0; 

//    if ( typeof obj === 'object' && !Array.isArray(obj) ){ 
//     obj = Object.values(obj).flat();
//    for ( i = 0; i < obj.length; i++ ) {
//      if ( typeof obj[i] == 'string'){
//        count++
//      };
//    } return count
//  };
//    if ( Array.isArray(obj) ) {
//    obj = obj.flat()
//   console.log(obj)
//    for ( i = 0; i < obj.length; i++ ) {
//      if ( typeof obj[i] == 'string'){
//        count++
//      }; 
//    } return count
//  };  
//};   
//  console.log(strCount(
//    {
//        first: "1",
//        second: "2",
//        third: false,
//        fourth: ["anytime",2,3,4],
//        fifth:  null
//        }
//));
// wright solution with recursion!
//function strCount(obj){
//  let count = 0;

//  for(let key in obj){
//    if ( typeof obj[key] === 'object'){
//        count+=strCount(obj[key])
//    };
//      if ( typeof obj[key] === 'string'){
//         count++
//      };
//    } return count;
// };
//  console.log(strCount(
//    {
//        first: "1",
//        second: "2",
//        third: false,
//        fourth: ["anytime",2,3,4],
//        fifth:  null
//        }
//));
//==========================================================
//const set1 = new Set;
//while (set1.size < 15 ) {
//  set1.add(Math.random() * 15 | 0);
//}
//const arr1 = [...set1].toString().split(',').map(el=>{
//  return 'B'+ el
//})
//  return arr1
//}     
//console.log(getCard())
//const set1 = [];
//for (let i = 0; i <5; i++ ){  
//    min = Math.ceil(1);
//    max = Math.floor(15);
//    set1.push(Math.floor(Math.random() * (max - min)) + min);
//   }
//     const arr1 = [...set1].toString().split(',').map(el=>{
//  return 'B'+ el;
//})
//  // let bingo = Object.keys(card) + Object.values(card)
//  let newBingo = JSON.stringify(card).toString().replace(/[{}":]/g,'').split(',')
//  console.log(typeof newBingo)
//  return newBingo
// }
//======================================================================
//=========================6 kyu toWeirdCase============================
/** Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
 * and returns the same string with all even indexed characters in each word upper cased, 
 * and all odd indexed characters in each word lower cased. The indexing just explained is zero based, 
 * so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').*/
//----------solutions:

//function toWeirdCase(string){
//  let str = string.toLowerCase().split('')
//  count = 0
//  for ( let i = 0; i < str.length; i++) {
//    if ( str[i] === ' '){
//        count = 0
//      continue
//    }
//     else if ( count % 2 == 0){
//      str[i] = str[i].toUpperCase()
//    } 
//    count++
//  } 
//  return str.join('')
//}
//console.log(toWeirdCase('This is a test'))
////------- one more:
//function toWeirdCase(string){
//  return string.split(' ').map(function(word){
//    return word.split('').map(function(letter, index){
//      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
//    }).join('');
//  }).join(' ');
//}
////one more:
//function toWeirdCase(string){
//  return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
//}
//=====================================================================
//=================6 kyu Who likes it?=================================
/**You probably know the "like" system from Facebook and other pages. 
 * People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

 */
//--------- my solution:----------------------------------------
//function likes(name) {
//  name = ["Alex", "Jacob", "Mark", "Max","Max", "John", "Mark"]
//  let res
//  let count = 0
//  if( name == -[]){
//  return res = "no one likes this"
//  } 
//    else if( name.length === 1){
//      return res = `${name} likes this`
//    } 
//      if( name.length === 2){
//        return res = `${name[0]} and ${name[1]} like this`
//      } 
//        else if( name.length === 3){
//          return res = `${name[0]}, ${name[1]} and ${name[2]} like this`
//        } 
//          else if( name.length > 3){
//              return res = `${name[0]}, ${name[1]} and ${name.length-2} others like this`
//          }
//        return res
//      }  
//        console.log(likes())
//======================================================================================
//================5 kyu RGB To Hex Conversion===========================================
/**The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
 * Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
 */
//------------solution:-----------------------
//function rgb(r, g, b){
//  let res;
//  if (r > 255 ){
//      r = 255;
//  } else if (g > 255) {
//      g = 255;
//  } else if (b > 255) {
//      b = 255;
//  };
//  if (r <= 0 && g <= 0) {
//      res = '0000' + b.toString(16)
//  } else if (r <= 0 && b <= 0) {
//      res = '00' + g.toString(16) + '00'
//  } else if (g <= 0 && b <= 0) {
//      res =  r.toString(16) + '0000'
//  } else if (r <= 0 ) {
//      res = '00' + g.toString(16) + b.toString(16)
//  } else if (g <= 0 ) {
//      res = r.toString(16) + '00' + b.toString(16)
//  } else if (b <= 0 ) {
//      res = r.toString(16) + g.toString(16) + '00'
//  } else {
//      res = r.toString(16)+ g.toString(16)+ b.toString(16) 
//  }; 
//  if (r <= 0 && g <= 0 && b <= 0) {
//      res = '000000'   
//  };
//    return res.toUpperCase()
//};
//console.log(rgb(133,166,336))

//function rgb(r, g, b){
//  let res = r + g + b 
//  r = r.toString(16)
//  g = g.toString(16)
//  b = b.toString(16)
//  let newR = '0' + r.toString(16)
//  let newG = '0' + g.toString(16)
//  let newB = '0' + b.toString(16)
//  if (r > 255 ){
//      r = 255;
//  } else if (g > 255) {
//      g = 255;
//  } else if (b > 255) {
//      b = 255;
//  } ;
//   if (r <= 0 || r < 100) {
//    res =  newR + g + b
//  } 
//   if (g <= 0 || g < 100) {
//    g = r + newG + b 
//  }
//   if (b <= 0 || b < 100) {
//    b = r + g + newB
//  } else return res.toUpperCase()



// 85A6FF }; 

//console.log(rgb(133,166,336))

//function rgb(r, g, b){


//  let res
//  if ( r <= 0 || r <100){
//    r = '0'+r.toString(16) 
//  }
//    else if (g <= 0) {
//      g = 0
//    }
//      else if (b <= 0) {
//        b = 0
//      } 
//         if (r == 0 && g == 0 && b == 0) {
//          res = '000000' 
//        }
//          else {

//          } 
//          res = r.toString(16) + g.toString(16) + b.toString(16)
//            return res.toUpperCase()

//}
//console.log(rgb(6,255,255))

//=========   Задания Momentum  =========================================

//============= №1. Дата и время: =======================================

//===========Планирование: setTimeout и setInterval====================

//function printNumbers(from, to) {
//  let current = from;

//  let timerId = setInterval(function() {
//    console.log(current);
//    if (current == to) {
//      clearInterval(timerId);
//    }
//    current++;
//  }, 1000);
//}
//console.log(printNumbers(0,10))
//---------------
//Используем рекурсивный setTimeout:
//function printNumbers(from, to) {
//  let current = from;

//  setTimeout(function go() {
//    console.log(current);
//    if (current < to) {
//      setTimeout(go, 1000);
//    }
//    current++;
//  }, 1000);
//}
//console.log(printNumbers(0,10))

//function printNumbers(from, to) {
//  let current = from;

//  function go() {
//    console.log(current);
//    if (current == to) {
//      clearInterval(timerId);
//    }
//    current++;
//  }
//  go();
//  let timerId = setInterval(go, 1000);
//}
//printNumbers(1, 10);
//======= Set time & date =============================

//функция для показа даты:

//function showTime() {
//  const currentTime = date.toLocaleTimeString();
//  return currentTime
//}
//console.log(showTime());

//функция для показа времени: 

//function showTime() {
//  const date = new Date();
//  const currentTime = date.toLocaleTimeString();
//}
//console.log(showTime())

//функция для показа времени с ежесекундным обновлением:

//  function showTime(){
//  const date = new Date();
//  const currentTime = date.toLocaleTimeString();
//  setTimeout(showTime, 1000);
//  console.log(currentTime); 
//  return currentTime;
//}
//showTime();

//или:

//function showTime() {
//  const date = new Date();
//  const currentTime = date.toLocaleTimeString();
//  setTimeout(function(){
//   console.log(currentTime)   
//  },1000);
// setTimeout(showTime, 1000)
//}
//console.log(showTime())

//скрипт для показа времени и даты:
//переменные:
//let date = new Date();
//const options = {month: 'long', day: 'numeric'};
//const currentDate = date.toLocaleDateString('ru-RU', options);
//const currentTime = date.toLocaleTimeString();
//let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//let currentDay = days[date.getDay()];
//const hours = date.getHours();
//const timeOfDay = getTimeOfDay();
//const greetingText = `Good ${timeOfDay}`;
//Общая функция для ежесекундного обновления даты времени и приветствия:
//function showTime() {
//  setTimeout(function(){
//   console.log(currentTime) 
//   console.log(showDate())
//   console.log(showGreeting())
//  },1000);
// setTimeout(showTime, 1000)
//}
//console.log(showTime())
////функция даты:
//function showDate(){
// return currentDay + ' ' + currentDate
//}
////Функция приветствие: 
//function getTimeOfDay() {
//  if ( hours > 6 && hours < 12 ) {
//    return 'morning'
//  } else if ( hours > 12 && hours < 18 ) {
//    return 'day'
//  } else if ( hours > 18 && hours < 24 ) {
//    return 'evening'
//  } else 
//  return 'night' 
//}
//function showGreeting(){
//  return greetingText
//}
//----local storage-------------
//=================== Human Readable Number ==========================
//--------------------long solution:---------------------------------------------
//function toReadable (number) {
//  let numberArr = number.toString().split('');
//  let number100_999 = number.toString().split('');
//  let cutNum = number100_999.splice(1,2).join('').split('');
//  console.log(number100_999);
//  console.log(cutNum);
//  let arr =[];
//  const number0_19 = ['zero','one','two','three','four',
//  'five','six','seven','eght','nine','ten','eleven','twelve',
//  'thirteen','fourteen','fifteen','sixteen','seventeen','eghteen','nineteen',];
//  const number20 = 'twenty';
//  const number30 = 'thirty';
//  const number40 = 'fourty';
//  const number50 = 'fifty';
//  const number60 = 'sixty';
//  const number70 = 'seventy';
//  const number80 = 'eghty';
//  const number90 = 'ninety';
//  const number100 = 'one hundred';
//  const number200 = 'two hundred';
//  const number300 = 'three hundred';
//  const number400 = 'four hundred';
//  const number500 = 'five hundred';
//  const number600 = 'six hundred';
//  const number700 = 'seven hundred';
//  const number800 = 'eght hundred';
//  const number900 = 'nine hundred';

//  if ( number >= 0 && number < 20 ) {
//        number0_19.forEach( (e,i) => {
//        if( number === i ){
//           arr.push(e) 
//      }; 
//    });
//  }; 
//  if ( number > 19 && number < 30 ) {
//        number0_19.forEach( (e,i) => {
//        if ( numberArr[1] == i && numberArr[1] !== '0' ){
//           arr.push(number20 + ' ' + e) 
//           } else if ( numberArr[1] == i && numberArr[1] == '0' ){
//              return arr.push( number20 )
//      };
//    });
//  }; 
//  if ( number > 29 && number < 40 ) {
//     number0_19.forEach( (e,i) => {
//     if ( numberArr[1] == i && numberArr[1] !== '0' ){
//        arr.push(number30 + ' ' + e) 
//        } else if ( numberArr[1] == i && numberArr[1] == '0' ){
//           arr.push( number30 )
//      };
//    });
//  };
//  if ( number > 39 && number < 50 ) {
//     number0_19.forEach( (e,i) => {
//     if ( numberArr[1] == i && numberArr[1] !== '0' ){
//        arr.push(number40 + ' ' + e) 
//        } else if ( numberArr[1] == i && numberArr[1] == '0' ){
//           arr.push( number40 )
//      };
//    });
//  }; 
//  if ( number > 49 && number < 60 ) {
//     number0_19.forEach( (e,i) => {
//     if ( numberArr[1] == i && numberArr[1] !== '0' ){
//        arr.push(number50 + ' ' + e) 
//        } else if ( numberArr[1] == i && numberArr[1] == '0' ){
//           arr.push( number50 )
//      };
//    });
//  }; 
//  if ( number > 59 && number < 70 ) {
//     number0_19.forEach( (e,i) => {
//     if ( numberArr[1] == i && numberArr[1] !== '0' ){
//        arr.push(number60 + ' ' + e) 
//        } else if ( numberArr[1] == i && numberArr[1] == '0' ){
//           arr.push( number60 )
//      };
//    });
//  }; 
//  if ( number > 69 && number < 80 ) {
//     number0_19.forEach( (e,i) => {
//     if ( numberArr[1] == i && numberArr[1] !== '0' ){
//        arr.push(number70 + ' ' + e) 
//        } else if ( numberArr[1] == i && numberArr[1] == '0' ){
//           arr.push( number70 )
//      };
//    });
//  }; 
//  if ( number > 79 && number < 90 ) {
//     number0_19.forEach( (e,i) => {
//     if ( numberArr[1] == i && numberArr[1] !== '0' ){
//        arr.push(number80 + ' ' + e) 
//        } else if ( numberArr[1] == i && numberArr[1] == '0' ){
//           arr.push( number80 )
//      };
//    });
//  }; 
//  if ( number > 89 && number < 100 ) {
//     number0_19.forEach( (e,i) => {
//     if ( numberArr[1] == i && numberArr[1] !== '0' ){
//        arr.push(number90 + ' ' + e) 
//        } else if ( numberArr[1] == i && numberArr[1] == '0' ){
//           arr.push( number90 )
//      };
//    });
//  };
//  if ( number > 99 && number < 200 ) {
//     number0_19.forEach( (e,i) => {
//      if ( cutNum[0] == 0 && cutNum[1] == i ) {
//        arr.push( number100 +  ' ' + number0_19[0+i] )
//      } else if ( cutNum[0] == 1 && cutNum[1] == i ) {
//        arr.push( number100 +  ' ' + number0_19[10+i] )
//      } else if ( cutNum[0] == 2 && cutNum[1] == i  ) {
//        arr.push( number100 + ' ' + number20 + ' ' + e) 
//      } else if ( cutNum[0] == 3 && cutNum[1] == i  ) {
//        arr.push( number100 + ' ' + number30 + ' ' + e) 
//      } else if ( cutNum[0] == 4 && cutNum[1] == i  ) {
//        arr.push( number100 + ' ' + number40 + ' ' + e) 
//      } else if ( cutNum[0] == 5 && cutNum[1] == i  ) {
//        arr.push( number100 + ' ' + number50 + ' ' + e) 
//      } else if ( cutNum[0] == 6 && cutNum[1] == i  ) {
//        arr.push( number100 + ' ' + number60 + ' ' + e) 
//      } else if ( cutNum[0] == 7 && cutNum[1] == i  ) {
//        arr.push( number100 + ' ' + number70 + ' ' + e) 
//      } else if ( cutNum[0] == 8 && cutNum[1] == i  ) {
//        arr.push( number100 + ' ' + number80 + ' ' + e) 
//      } else if ( cutNum[0] == 9 && cutNum[1] == i  ) {
//        arr.push( number100 + ' ' + number90 + ' ' + e) 
//      };
//    });
//  };
//  if ( number > 199 && number < 300 ) {
//    number0_19.forEach( (e,i) => {
//     if ( cutNum[0] == 0 && cutNum[1] == i ) {
//       arr.push( number200 +  ' ' + number0_19[0+i] )
//     } else if ( cutNum[0] == 1 && cutNum[1] == i ) {
//       arr.push( number200 +  ' ' + number0_19[10+i] )
//     } else if ( cutNum[0] == 2 && cutNum[1] == i  ) {
//       arr.push( number200 + ' ' + number20 + ' ' + e) 
//     } else if ( cutNum[0] == 3 && cutNum[1] == i  ) {
//       arr.push( number200 + ' ' + number30 + ' ' + e) 
//     } else if ( cutNum[0] == 4 && cutNum[1] == i  ) {
//       arr.push( number200 + ' ' + number40 + ' ' + e) 
//     } else if ( cutNum[0] == 5 && cutNum[1] == i  ) {
//       arr.push( number200 + ' ' + number50 + ' ' + e) 
//     } else if ( cutNum[0] == 6 && cutNum[1] == i  ) {
//       arr.push( number200 + ' ' + number60 + ' ' + e) 
//     } else if ( cutNum[0] == 7 && cutNum[1] == i  ) {
//       arr.push( number200 + ' ' + number70 + ' ' + e) 
//     } else if ( cutNum[0] == 8 && cutNum[1] == i  ) {
//       arr.push( number200 + ' ' + number80 + ' ' + e) 
//     } else if ( cutNum[0] == 9 && cutNum[1] == i  ) {
//       arr.push( number200 + ' ' + number90 + ' ' + e) 
//     };
//   });
// };
// if ( number > 299 && number < 400 ) {
//  number0_19.forEach( (e,i) => {
//   if ( cutNum[0] == 0 && cutNum[1] == i ) {
//     arr.push( number300 +  ' ' + number0_19[0+i] )
//   } else if ( cutNum[0] == 1 && cutNum[1] == i ) {
//     arr.push( number300 +  ' ' + number0_19[10+i] )
//   } else if ( cutNum[0] == 2 && cutNum[1] == i  ) {
//     arr.push( number300 + ' ' + number20 + ' ' + e) 
//   } else if ( cutNum[0] == 3 && cutNum[1] == i  ) {
//     arr.push( number300 + ' ' + number30 + ' ' + e) 
//   } else if ( cutNum[0] == 4 && cutNum[1] == i  ) {
//     arr.push( number300 + ' ' + number40 + ' ' + e) 
//   } else if ( cutNum[0] == 5 && cutNum[1] == i  ) {
//     arr.push( number300 + ' ' + number50 + ' ' + e) 
//   } else if ( cutNum[0] == 6 && cutNum[1] == i  ) {
//     arr.push( number300 + ' ' + number60 + ' ' + e) 
//   } else if ( cutNum[0] == 7 && cutNum[1] == i  ) {
//     arr.push( number300 + ' ' + number70 + ' ' + e) 
//   } else if ( cutNum[0] == 8 && cutNum[1] == i  ) {
//     arr.push( number300 + ' ' + number80 + ' ' + e) 
//   } else if ( cutNum[0] == 9 && cutNum[1] == i  ) {
//     arr.push( number300 + ' ' + number90 + ' ' + e) 
//   };
// });
//};
//if ( number > 399 && number < 500 ) {
//  number0_19.forEach( (e,i) => {
//   if ( cutNum[0] == 0 && cutNum[1] == i ) {
//     arr.push( number400 +  ' ' + number0_19[0+i] )
//   } else if ( cutNum[0] == 1 && cutNum[1] == i ) {
//     arr.push( number400 +  ' ' + number0_19[10+i] )
//   } else if ( cutNum[0] == 2 && cutNum[1] == i  ) {
//     arr.push( number400 + ' ' + number20 + ' ' + e) 
//   } else if ( cutNum[0] == 3 && cutNum[1] == i  ) {
//     arr.push( number400 + ' ' + number30 + ' ' + e) 
//   } else if ( cutNum[0] == 4 && cutNum[1] == i  ) {
//     arr.push( number400 + ' ' + number40 + ' ' + e) 
//   } else if ( cutNum[0] == 5 && cutNum[1] == i  ) {
//     arr.push( number400 + ' ' + number50 + ' ' + e) 
//   } else if ( cutNum[0] == 6 && cutNum[1] == i  ) {
//     arr.push( number400 + ' ' + number60 + ' ' + e) 
//   } else if ( cutNum[0] == 7 && cutNum[1] == i  ) {
//     arr.push( number400 + ' ' + number70 + ' ' + e) 
//   } else if ( cutNum[0] == 8 && cutNum[1] == i  ) {
//     arr.push( number400 + ' ' + number80 + ' ' + e) 
//   } else if ( cutNum[0] == 9 && cutNum[1] == i  ) {
//     arr.push( number400 + ' ' + number90 + ' ' + e) 
//   };
// });
//};
//if ( number > 499 && number < 600 ) {
//  number0_19.forEach( (e,i) => {
//   if ( cutNum[0] == 0 && cutNum[1] == i ) {
//     arr.push( number500 +  ' ' + number0_19[0+i] )
//   } else if ( cutNum[0] == 1 && cutNum[1] == i ) {
//     arr.push( number500 +  ' ' + number0_19[10+i] )
//   } else if ( cutNum[0] == 2 && cutNum[1] == i  ) {
//     arr.push( number500 + ' ' + number20 + ' ' + e) 
//   } else if ( cutNum[0] == 3 && cutNum[1] == i  ) {
//     arr.push( number500 + ' ' + number30 + ' ' + e) 
//   } else if ( cutNum[0] == 4 && cutNum[1] == i  ) {
//     arr.push( number500 + ' ' + number40 + ' ' + e) 
//   } else if ( cutNum[0] == 5 && cutNum[1] == i  ) {
//     arr.push( number500 + ' ' + number50 + ' ' + e) 
//   } else if ( cutNum[0] == 6 && cutNum[1] == i  ) {
//     arr.push( number500 + ' ' + number60 + ' ' + e) 
//   } else if ( cutNum[0] == 7 && cutNum[1] == i  ) {
//     arr.push( number500 + ' ' + number70 + ' ' + e) 
//   } else if ( cutNum[0] == 8 && cutNum[1] == i  ) {
//     arr.push( number500 + ' ' + number80 + ' ' + e) 
//   } else if ( cutNum[0] == 9 && cutNum[1] == i  ) {
//     arr.push( number500 + ' ' + number90 + ' ' + e) 
//   };
// });
//};
//if ( number > 599 && number < 700 ) {
//  number0_19.forEach( (e,i) => {
//   if ( cutNum[0] == 0 && cutNum[1] == i ) {
//     arr.push( number600 +  ' ' + number0_19[0+i] )
//   } else if ( cutNum[0] == 1 && cutNum[1] == i ) {
//     arr.push( number600 +  ' ' + number0_19[10+i] )
//   } else if ( cutNum[0] == 2 && cutNum[1] == i  ) {
//     arr.push( number600 + ' ' + number20 + ' ' + e) 
//   } else if ( cutNum[0] == 3 && cutNum[1] == i  ) {
//     arr.push( number600 + ' ' + number30 + ' ' + e) 
//   } else if ( cutNum[0] == 4 && cutNum[1] == i  ) {
//     arr.push( number600 + ' ' + number40 + ' ' + e) 
//   } else if ( cutNum[0] == 5 && cutNum[1] == i  ) {
//     arr.push( number600 + ' ' + number50 + ' ' + e) 
//   } else if ( cutNum[0] == 6 && cutNum[1] == i  ) {
//     arr.push( number600 + ' ' + number60 + ' ' + e) 
//   } else if ( cutNum[0] == 7 && cutNum[1] == i  ) {
//     arr.push( number600 + ' ' + number70 + ' ' + e) 
//   } else if ( cutNum[0] == 8 && cutNum[1] == i  ) {
//     arr.push( number600 + ' ' + number80 + ' ' + e) 
//   } else if ( cutNum[0] == 9 && cutNum[1] == i  ) {
//     arr.push( number600 + ' ' + number90 + ' ' + e) 
//   };
// });
//};
//if ( number > 699 && number < 800 ) {
//  number0_19.forEach( (e,i) => {
//   if ( cutNum[0] == 0 && cutNum[1] == i ) {
//     arr.push( number700 +  ' ' + number0_19[0+i] )
//   } else if ( cutNum[0] == 1 && cutNum[1] == i ) {
//     arr.push( number700 +  ' ' + number0_19[10+i] )
//   } else if ( cutNum[0] == 2 && cutNum[1] == i  ) {
//     arr.push( number700 + ' ' + number20 + ' ' + e) 
//   } else if ( cutNum[0] == 3 && cutNum[1] == i  ) {
//     arr.push( number700 + ' ' + number30 + ' ' + e) 
//   } else if ( cutNum[0] == 4 && cutNum[1] == i  ) {
//     arr.push( number700 + ' ' + number40 + ' ' + e) 
//   } else if ( cutNum[0] == 5 && cutNum[1] == i  ) {
//     arr.push( number700 + ' ' + number50 + ' ' + e) 
//   } else if ( cutNum[0] == 6 && cutNum[1] == i  ) {
//     arr.push( number700 + ' ' + number60 + ' ' + e) 
//   } else if ( cutNum[0] == 7 && cutNum[1] == i  ) {
//     arr.push( number700 + ' ' + number70 + ' ' + e) 
//   } else if ( cutNum[0] == 8 && cutNum[1] == i  ) {
//     arr.push( number700 + ' ' + number80 + ' ' + e) 
//   } else if ( cutNum[0] == 9 && cutNum[1] == i  ) {
//     arr.push( number700 + ' ' + number90 + ' ' + e) 
//   };
// });
//};
//if ( number > 799 && number < 900 ) {
//  number0_19.forEach( (e,i) => {
//   if ( cutNum[0] == 0 && cutNum[1] == i ) {
//     arr.push( number800 +  ' ' + number0_19[0+i] )
//   } else if ( cutNum[0] == 1 && cutNum[1] == i ) {
//     arr.push( number800 +  ' ' + number0_19[10+i] )
//   } else if ( cutNum[0] == 2 && cutNum[1] == i  ) {
//     arr.push( number800 + ' ' + number20 + ' ' + e) 
//   } else if ( cutNum[0] == 3 && cutNum[1] == i  ) {
//     arr.push( number800 + ' ' + number30 + ' ' + e) 
//   } else if ( cutNum[0] == 4 && cutNum[1] == i  ) {
//     arr.push( number800 + ' ' + number40 + ' ' + e) 
//   } else if ( cutNum[0] == 5 && cutNum[1] == i  ) {
//     arr.push( number800 + ' ' + number50 + ' ' + e) 
//   } else if ( cutNum[0] == 6 && cutNum[1] == i  ) {
//     arr.push( number800 + ' ' + number60 + ' ' + e) 
//   } else if ( cutNum[0] == 7 && cutNum[1] == i  ) {
//     arr.push( number800 + ' ' + number70 + ' ' + e) 
//   } else if ( cutNum[0] == 8 && cutNum[1] == i  ) {
//     arr.push( number800 + ' ' + number80 + ' ' + e) 
//   } else if ( cutNum[0] == 9 && cutNum[1] == i  ) {
//     arr.push( number800 + ' ' + number90 + ' ' + e) 
//   };
// });
//};
//if ( number > 899 && number < 1000 ) {
//  number0_19.forEach( (e,i) => {
//   if ( cutNum[0] == 0 && cutNum[1] == i ) {
//     arr.push( number900 +  ' ' + number0_19[0+i] )
//   } else if ( cutNum[0] == 1 && cutNum[1] == i ) {
//     arr.push( number900 +  ' ' + number0_19[10+i] )
//   } else if ( cutNum[0] == 2 && cutNum[1] == i  ) {
//     arr.push( number900 + ' ' + number20 + ' ' + e) 
//   } else if ( cutNum[0] == 3 && cutNum[1] == i  ) {
//     arr.push( number900 + ' ' + number30 + ' ' + e) 
//   } else if ( cutNum[0] == 4 && cutNum[1] == i  ) {
//     arr.push( number900 + ' ' + number40 + ' ' + e) 
//   } else if ( cutNum[0] == 5 && cutNum[1] == i  ) {
//     arr.push( number900 + ' ' + number50 + ' ' + e) 
//   } else if ( cutNum[0] == 6 && cutNum[1] == i  ) {
//     arr.push( number900 + ' ' + number60 + ' ' + e) 
//   } else if ( cutNum[0] == 7 && cutNum[1] == i  ) {
//     arr.push( number900 + ' ' + number70 + ' ' + e) 
//   } else if ( cutNum[0] == 8 && cutNum[1] == i  ) {
//     arr.push( number900 + ' ' + number80 + ' ' + e) 
//   } else if ( cutNum[0] == 9 && cutNum[1] == i  ) {
//     arr.push( number900 + ' ' + number90 + ' ' + e) 
//   };
// });
//};
//return arr.join('');
//}
//console.log(toReadable(989));
//------------- short solution :--------------------------------------
// function toReadable (number) {
//  if (!number) { return undefined } else {number}
//  const numberArr = number.toString().split('');
//  const arr =[];
//  const number0_19 = [
//  'zero','one','two','three','four',
//  'five','six','seven','eght','nine',
//  'ten','eleven','twelve','thirteen',
//  'fourteen','fifteen','sixteen',
//  'seventeen','eghteen','nineteen'
//  ];
//  const number10_19 = [
//  'ten','eleven','twelve','thirteen',
//  'fourteen','fifteen','sixteen',
//  'seventeen','eghteen','nineteen'
//  ]
//  const number20_90 = [
//  '','','twenty','thirty','fourty',
//  'fifty','sixty','seventy','eghty','ninety'
//  ];
//  const number100_900 = [
//  '','one hundred','two hundred','three hundred',
//  'four hundred','five hundred','six hundred',
//  'seven hundred','eght hundred','nine hundred'
//  ];
//  if (numberArr.length < 3 && number < 20) { 
//    number0_19.forEach((el,i)=>{
//      if ( i == number ) arr.push(el);    
//    });
//  } else if ( numberArr.length < 3 && number > 19 && number < 100 ) {
//    number20_90.forEach((el,i) => {
//      if ( i == numberArr[0] ) {
//        arr.push(el + ' ');
//          number0_19.forEach((el,i) => {
//            if ( i == numberArr[1] && i !== 0){
//              arr.push(el);
//            };
//          });
//        };
//      });
//    } else if ( number > 109 && number < 120 ) {
//      number100_900.forEach((el,i) => {
//        if ( i == numberArr[0] ) {
//          arr.push(el + ' ');
//           number10_19.forEach((el,i)=>{
//            if ( i == numberArr[2] ) {
//              arr.push(el);
//             };
//           });
//         };
//       });
//     } else if ( number > 99 && number < 110 || number > 119 ) {
//      number100_900.forEach((el,i) => {
//        if ( i == numberArr[0] ) {
//          arr.push(el + ' ');
//            number20_90.forEach((el,i) => {
//              if ( i == numberArr[1] ) {
//                arr.push(el);
//                  number0_19.forEach((el,i) => {
//                    if ( i == numberArr[2] && i !== 0 ) {
//                  arr.push(' ' + el);
//                };
//              });
//            };
//          });
//        };
//      });
//    };
//    return arr.join('');
//  };
// console.log(toReadable(999));

//function fakeBin(x){
//   x = x.split('')
//  x.forEach(el => {
//    if(el<5){
//      return 0
//    } else el = 1
//    return el
//  });
//  return x
//}
//const disemvowel = str =>
//  str.replaceAll(/[eouai]/gi, '' )
//console.log(disemvowel('red'))

//var re = /(\w+)\s(\w+)/;
//var str = 'John Smith';
//var newstr = str.replace(re, '$2, $1');
//console.log(newstr);
//function isIsogram(str){
//  str = str.toLowerCase().split('')
//  console.log(str)
//  let Isogram = new Set(str)
// return (str.length === Isogram.size)
//}
//console.log(isIsogram("moOse"))


//function calculate(x, y) {
//  x = (2,3)
//  y = (3,5)
//  const calc=(...x)=>(...y)=> {
//    return [].concat(x,y).reduce((a,b)=> a + b ,0)
//  }
//}
//console.log(calculate())
/* stack.push(1); // adds the element to the stack
* stack.peek(); // returns the peek, but doesn't delete it, returns 1
* stack.pop(); // returns the top element from stack and deletes it, returns 1
* stack.pop(); // undefined
*
*/
//============================================
//=============class Stack=========================

//class Stack {
//  constructor() {
//    this.items = [];
//  }
//  push(element) {
//    // push element into the items
//    this.items.push(element);
//  }
//  pop() {
//    // return top most element in the stack
//    // and removes it from the stack
//    // Underflow if stack is empty
//    if (this.items.length == 0)
//      return "Underflow";
//    return this.items.pop();
//  }
//  peek() {
//    // return the top most element from the stack
//    // but does'nt delete it.
//    return this.items[this.items.length - 1];
//  }
//  isEmpty() {
//    // return true if stack is empty
//    return this.items.length == 0;
//  }
//  printStack() {
//    var str = "";
//    for (var i = 0; i < this.items.length; i++)
//      str += this.items[i] + " ";
//    return str;
//  }
//}
//let stack = new Stack
//console.log(stack.isEmpty());

//// returns Underflow
//console.log(stack.pop());


//// Adding element to the stack
//stack.push(10);
//stack.push(20);
//stack.push(30);

//// Printing the stack element
//// prints [10, 20, 30]
//console.log(stack.printStack());

//// returns 30
//console.log(stack.peek());

//// returns 30 and remove it from stack
//console.log(stack.pop());

//// returns [10, 20]
//console.log(stack.printStack());
////============================================
////==============class Queue=========================

////class Node {
////  constructor(value) {
////    this.value = value;
////    this.next = null;
////  }
////}
//class Queue1 {
//  constructor() {
//    this.head = null;
//    this.tail = null;
//    this.length = 0;
//  }

//  enqueue(value) {
//    const node = new Node(value); // creates the node using class Node

//    if (this.head) { // if the first Node exitsts
//      this.tail.next = node; // inserts the created node after the tail of our Queue
//      this.tail = node; // now the created node is the last node
//    } else { // if there are no nodes in the Queue
//      this.head = node; // the created node is a head 
//      this.tail = node // also the created node is a tail in Queue because it is single.
//    }

//    this.length++; // increases the length of Queue by 1
//  }
//  dequeue() {
//    const current = this.head; // saves the link to the head which we need to remove
//    this.head = this.head.next; // moves the head link to the second Node in the Queue
//    this.length--; // decreaments the length of our Queue

//    return current.value; // returns the removed Node's value
//  }
//  print() {
//    let current = this.head; // saves a link to the head of the queue

//    while (current) { // goes through each Node of the Queue
//      console.log(current.value); // prints the value of the Node in console
//      current = current.next; // moves link to the next node after head
//    }
//  }
//  isEmpty() {
//    return this.length === 0;
//  }
//  getHead() {
//    return this.head.value;
//  }
//  getLength() {
//    return this.length;
//  }
//}
////----------second variant--------------
//class Queue2 {
//  constructor() {
//    this.elements = {};
//    this.head = 0;
//    this.tail = 0;
//  }
//  enqueue(element) {
//    this.elements[this.tail] = element;
//    this.tail++;
//  }
//  dequeue() {
//    const item = this.elements[this.head];
//    delete this.elements[this.head];
//    this.head++;
//    return item;
//  }
//  peek() {
//    return this.elements[this.head];
//  }
//  get length() {
//    return this.tail - this.head;
//  }
//  get isEmpty() {
//    return this.length === 0;
//  }
//}

//let q = new Queue2();
//for (let i = 1; i <= 7; i++) {
//  q.enqueue(i);
//}
//// get the current item at the front of the queue
//console.log(q.peek()); // 1

//// get the current length of queue
//console.log(q.length); // 7

//// dequeue all elements
//while (!q.isEmpty) {
//  console.log(q.dequeue());
//}
////========================================
////===========class BinarySearchTree=======
//// Node class
//class Node {
//  constructor(data) {
//    this.data = data;
//    this.left = null;
//    this.right = null;
//  }
//}
//// Binary Search tree class
//class BinarySearchTree {
//  constructor() {
//    // root of a binary search tree
//    this.root = null;
//  }

//  // function to be implemented
//  // insert(data)
//  // remove(data)


//  // Helper function
//  // findMinNode()
//  // getRootNode()
//  // inorder(node)
//  // preorder(node)              
//  // postorder(node)
//  // search(node, data)
//}
//// helper method which creates a new node to
//// be inserted and calls insertNode
//insert(data)
//{
//  // Creating a node and initialising
//  // with data
//  var newNode = new Node(data);

//  // root is null then node will
//  // be added to the tree and made root.
//  if (this.root === null)
//    this.root = newNode;
//  else

//    // find the correct position in the
//    // tree and add the node
//    this.insertNode(this.root, newNode);
//}

//// Method to insert a node in a tree
//// it moves over the tree to find the location
//// to insert a node with a given data
//insertNode(node, newNode)
//{
//  // if the data is less than the node
//  // data move left of the tree
//  if (newNode.data < node.data) {
//    // if left is null insert node here
//    if (node.left === null)
//      node.left = newNode;
//    else

//      // if left is not null recur until
//      // null is found
//      this.insertNode(node.left, newNode);
//  }

//  // if the data is more than the node
//  // data move right of the tree
//  else {
//    // if right is null insert node here
//    if (node.right === null)
//      node.right = newNode;
//    else

//      // if right is not null recur until
//      // null is found
//      this.insertNode(node.right, newNode);
//  }
//}
//// helper method that calls the
//// removeNode with a given data
//remove(data)
//{
//  // root is re-initialized with
//  // root of a modified tree.
//  this.root = this.removeNode(this.root, data);
//}

//// Method to remove node with a
//// given data
//// it recur over the tree to find the
//// data and removes it
//removeNode(node, key)
//{

//  // if the root is null then tree is
//  // empty
//  if (node === null) 
//    return null;

//  // if data to be delete is less than
//  // roots data then move to left subtree
//  else if (key < node.data) {
//    node.left = this.removeNode(node.left, key);
//    return node;
//  }

//  // if data to be delete is greater than
//  // roots data then move to right subtree
//  else if (key > node.data) {
//    node.right = this.removeNode(node.right, key);
//    return node;
//  }

//  // if data is similar to the root's data
//  // then delete this node
//  else {
//    // deleting node with no children
//    if (node.left === null && node.right === null) {
//      node = null;
//      return node;
//    }

//    // deleting node with one children
//    if (node.left === null) {
//      node = node.right;
//      return node;
//    }

//    else if (node.right === null) {
//      node = node.left;
//      return node;
//    }

//    // Deleting node with two children
//    // minimum node of the right subtree
//    // is stored in aux
//    var aux = this.findMinNode(node.right);
//    node.data = aux.data;

//    node.right = this.removeNode(node.right, aux.data);
//    return node;
//  }

//}
//// Performs inorder traversal of a tree
//inorder(node)
//{
//  if (node !== null) {
//    this.inorder(node.left);
//    console.log(node.data);
//    this.inorder(node.right);
//  }
//}
//// Performs preorder traversal of a tree   
//preorder(node)
//{
//  if (node !== null) {
//    console.log(node.data);
//    this.preorder(node.left);
//    this.preorder(node.right);
//  }
//}
//// Performs postorder traversal of a tree
//postorder(node)
//{
//  if (node !== null) {
//    this.postorder(node.left);
//    this.postorder(node.right);
//    console.log(node.data);
//  }
//}
////  finds the minimum node in tree
//// searching starts from given node
//findMinNode(node)
//{
//  // if left of a node is null
//  // then it must be minimum node
//  if (node.left === null)
//    return node;
//  else
//    return this.findMinNode(node.left);
//}
//// returns root of the tree
//getRootNode()
//{
//  return this.root;
//}
//// search for a node with given data
//search(node, data)
//{
//  // if trees is empty return null
//  if (node === null)
//    return null;

//  // if data is less than node's data
//  // move left
//  else if (data < node.data)
//    return this.search(node.left, data);

//  // if data is more than node's data
//  // move right
//  else if (data > node.data)
//    return this.search(node.right, data);

//  // if data is equal to the node data
//  // return node
//  else
//    return node;
//}
//// create an object for the BinarySearchTree
//var BST = new BinarySearchTree();

//// Inserting nodes to the BinarySearchTree
//BST.insert(15);
//BST.insert(25);
//BST.insert(10);
//BST.insert(7);
//BST.insert(22);
//BST.insert(17);
//BST.insert(13);
//BST.insert(5);
//BST.insert(9);
//BST.insert(27);

////		 15
////		 / \
////	 10 25
////	 / \ / \
////	 7 13 22 27
////	 / \ /
//// 5 9 17

//var root = BST.getRootNode();

//// prints 5 7 9 10 13 15 17 22 25 27
//BST.inorder(root);

//// Removing node with no children
//BST.remove(5);


////		 15
////		 / \
////	 10 25
////	 / \ / \
////	 7 13 22 27
////	 \ /
////	 9 17


//var root = BST.getRootNode();

//// prints 7 9 10 13 15 17 22 25 27
//BST.inorder(root);

//// Removing node with one child
//BST.remove(7);

////		 15
////		 / \
////	 10 25
////	 / \ / \
////	 9 13 22 27
////		 /
////		 17


//var root = BST.getRootNode();

//// prints 9 10 13 15 17 22 25 27
//BST.inorder(root);

//// Removing node with two children
//BST.remove(15);

////		 17
////		 / \
////	 10 25
////	 / \ / \
////	 9 13 22 27

//var root = BST.getRootNode();
//console.log("inorder traversal");

//// prints 9 10 13 17 22 25 27
//BST.inorder(root);

//console.log("postorder traversal");
//BST.postorder(root);
//console.log("preorder traversal");
//BST.preorder(root);
////======================================
////==========function removeKFromList(/* l, k */)=========
//function ListNode(x) {
//  this.value = x;
//  this.next = null
//}

//function removeKFromList(l, k) {
//  // create node
//  let node = new ListNode();
//  // assign node.next to the beginning of the given linked list.
//  node.next = l;

//  // start iterating through the linked list
//  let current = node;
//  // while there is still a node
//  while(current.next) {
//      // if the value of the node equals to given K
//      if (current.next.value === k) {
//          // remove it from the list by hopping from the one node to the next node
//          current.next = current.next.next
//      } else {
//          // move from one node to the next.
//          current = current.next;
//      }
//  }
//  //return the linked list
//  return node.next;
//}

//// All changes are in the part below:

//function arrayToList(arr) {
//  return arr.reduceRight((next, val) => 
//      Object.assign(new ListNode(val), { next })
//  , null);
//}

//function listToArray(list) {
//  const arr = [];
//  for (let node = list; node; node = node.next) {
//      arr.push(node.value);
//  }
//  return arr;
//}
//=====================================================
//выделение элементов таблицы красным цветом:

//const list = arrayToList([3, 1, 2, 3, 4, 5]);
//const shorter = removeKFromList(list, 3);
//const result = listToArray(shorter);
//console.log(result);
// 1. Таблица с `id="age-table"`.
//let table = document.getElementById('age-table')

//// 2. Все label в этой таблице
//table.getElementsByTagName('label')
//// или
//document.querySelectorAll('#age-table label')

//// 3. Первый td в этой таблице
//table.rows[0].cells[0]
//// или
//table.getElementsByTagName('td')[0]
//// или
//table.querySelector('td')

//// 4. Форма с name="search"
//// предполагаем, что есть только один элемент с таким name в документе
//let form = document.getElementsByName('search')[0]
//// или, именно форма:
//document.querySelector('form[name="search"]')

//// 5. Первый input в этой форме
//form.getElementsByTagName('input')[0]
//// или
//form.querySelector('input')

//// 6. Последний input в этой форме
//let inputs = form.querySelectorAll('input') // найти все input
//inputs[inputs.length-1] // взять последний
//=============================================================================
//=====================создания элементов на странице==========================
//Создание элемента
//DOM-узел можно создать двумя методами:
//document.createElement(tag)
//Создаёт новый элемент с заданным тегом:
//----let div = document.createElement('div');

//document.createTextNode(text):
//Создаёт новый текстовый узел с заданным текстом:
//-----let textNode = document.createTextNode('А вот и я');

//let div = document.createElement('div');
//div.className = "alert";
//div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
////Методы вставки
//Чтобы наш div появился, нам нужно вставить его где-нибудь в document. Например, в document.body.

//Для этого есть метод append, в нашем случае: document.body.append(div).
//document.body.prepend(div);

//Вот методы для различных вариантов вставки:

//node.append(...nodes or strings) – добавляет узлы или строки в конец node,
//node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
//node.before(...nodes or strings) –- вставляет узлы или строки до node,
//node.after(...nodes or strings) –- вставляет узлы или строки после node,
//node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.
//------------------------------------------------------------------
//insertAdjacentHTML/Text/Element
//С этим может помочь другой, довольно универсальный метод: elem.insertAdjacentHTML(where, html).

//Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. Значение должно быть одним из следующих:

//"beforebegin" – вставить html непосредственно перед elem,
//"afterbegin" – вставить html в начало elem,
//"beforeend" – вставить html в конец elem,
//"afterend" – вставить html непосредственно после elem.
//Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».
//div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
//  div.insertAdjacentHTML('afterend', '<p>Пока</p>');

//Так что, вот альтернативный вариант показа сообщения:
//document.body.insertAdjacentHTML("afterbegin", `<div class="alert">
//    <strong>Всем привет!</strong> Вы прочитали важное сообщение.
//  </div>`);

//  Удаление узлов--------------------------------
//Для удаления узла есть методы node.remove().

//Например, сделаем так, чтобы наше сообщение удалялось через секунду:
//let div = document.createElement('div');
//  div.className = "alert";
//  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

//  document.body.append(div);
//  setTimeout(() => div.remove(), 1000);

//Клонирование узлов: cloneNode-------------------------
//Как вставить ещё одно подобное сообщение?

//Мы могли бы создать функцию и поместить код туда. Альтернатива – клонировать существующий div и изменить текст внутри него (при необходимости).

//Иногда, когда у нас есть большой элемент, это может быть быстрее и проще.

//Вызов elem.cloneNode(true) создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами. Если мы вызовем elem.cloneNode(false), тогда клон будет без дочерних элементов.
//Пример копирования сообщения:
//let div2 = div.cloneNode(true); // клонировать сообщение
//div2.querySelector('strong').innerHTML = 'Всем пока!'; // изменить клонированный элемент

//div.after(div2); // показать клонированный элемент после существующего div

//DocumentFragment----------------------------------------------------------------
//DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов.

//Мы можем добавить к нему другие узлы, но когда мы вставляем его куда-то, он «исчезает», вместо него вставляется его содержимое.

//Например, getListContent ниже генерирует фрагмент с элементами <li>, которые позже вставляются в <ul>:
{/*<ul id="ul"></ul>

<script>
function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)
</script>*/}

//Обратите внимание, что на последней строке с (*) мы добавляем DocumentFragment, но он «исчезает», поэтому структура будет:

//<ul>
//  <li>1</li>
//  <li>2</li>
//  <li>3</li>
//</ul>
//DocumentFragment редко используется. Зачем добавлять элементы в специальный вид узла, если вместо этого мы можем вернуть массив узлов? Переписанный пример:

{/*<ul id="ul"></ul>

<script>
function getListContent() {
  let result = [];

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    result.push(li);
  }

  return result;
}

ul.append(...getListContent()); // append + оператор "..." = друзья!
</script>*/}

//-------------------------Итого-----------------------------------
//Методы для создания узлов:

//document.createElement(tag) – создаёт элемент с заданным тегом,
//document.createTextNode(value) – создаёт текстовый узел (редко используется),
//elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.
//Вставка и удаление:

//node.append(...nodes or strings) – вставляет в node в конец,
//node.prepend(...nodes or strings) – вставляет в node в начало,
//node.before(...nodes or strings) – вставляет прямо перед node,
//node.after(...nodes or strings) – вставляет сразу после node,
//node.replaceWith(...nodes or strings) – заменяет node.
//node.remove() – удаляет node.
//Устаревшие методы:

//parent.appendChild(node)
//parent.insertBefore(node, nextSibling)
//parent.removeChild(node)
//parent.replaceChild(newElem, node)
//Все эти методы возвращают node.

//Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:

//"beforebegin" – вставляет html прямо перед elem,
//"afterbegin" – вставляет html в elem в начало,
//"beforeend" – вставляет html в elem в конец,
//"afterend" – вставляет html сразу после elem.
//Также существуют похожие методы elem.insertAdjacentText и elem.insertAdjacentElement, они вставляют текстовые строки и элементы, но они редко используются.

//Чтобы добавить HTML на страницу до завершения её загрузки:

//document.write(html)
//После загрузки страницы такой вызов затирает документ. В основном встречается в старых скриптах.

//Задачи:
//Очистите элемент
//важность: 5
//Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

//<ol id="elem">
//  <li>Привет</li>
//  <li>Мир</li>
//</ol>

//<script>
//  function clear(elem) { /* ваш код */ }

//  clear(elem); // очищает список
//</script>

//Сначала давайте посмотрим, как не надо это делать:

//function clear(elem) {
//  for (let i=0; i < elem.childNodes.length; i++) {
//      elem.childNodes[i].remove();
//  }
//}
//Это не будет работать, потому что вызов remove() сдвигает коллекцию elem.childNodes, поэтому элементы начинаются каждый раз с индекса 0. А i увеличивается, и некоторые элементы будут пропущены.

//Цикл for..of делает то же самое.

//Правильным вариантом может быть:

//function clear(elem) {
//  while (elem.firstChild) {
//    elem.firstChild.remove();
//  }
//}
//А также есть более простой способ сделать то же самое:

//function clear(elem) {
//  elem.innerHTML = '';
//}