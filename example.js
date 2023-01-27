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
const minSum = (num) => {
  num = [5,4,2,3]
  let num1 = Math.min(...num)
  let num2 = Math.max(...num)
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
return num2
} 
   console.log(minSum())
  // for ( i = 1; i < num.length; i++) {
  //  if (num[i] > max) {
  //      max = num[i];
  //  } else if ( num[i]< min) {
  //    min = num[i]
  //  }
   