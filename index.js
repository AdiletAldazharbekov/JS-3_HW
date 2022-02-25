// // Домашняя работа 
 
// // Оператор сравнения 
// // 1#
// // Каким будет результат этих выражений?

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // false -----------Ошибка, надо уточнить почему
// undefined == null // true
// undefined === null // false
// null == "\n0\n" //false
// null === +"\n0\n" //false



// 2#
// Следующая функция возвращает true, если параметр age больше 18
// В ином случае она задаёт вопрос confirm и возвращает его результат.
function checkAge(age) {
  if (age > 18) {

    return true
  
   } else {
     return confirm('Родители разрешили?')
   }
 }
 
 


 
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// Сделайте два варианта функции checkAge:

// 1 Используя оператор ?
function checkAge1(age) {
     return (age > 18)? true: confirm("Родители разрешили")
 }
 
 // 2 Используя оператор | |
 function checkAge2(age) {
  return (age > 18) || confirm("Родители разрешили")
}

 checkAge2(19)
 checkAge2(18)

// 3#
// toFixed
// Почему 6.35.toFixed(1) == 6.3?
// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.
// Например:
// alert( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?
// alert( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35?

// Ответ:
 console.log(6.35.toFixed(1))
 console.log(1.35.toFixed(1))
 console.log((6.35+0.01).toFixed(1))
//  или лучше использовать round()
console.log(Math.round(6.35*10)/10)

 
// Math
//  1 .Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число
console.log("Максимальное число массива.")
console.log(Math.max(4, -2, 5, 19, -130, 0, 10))
console.log("Минимальное число массива.")
console.log(Math.min(4, -2, 5, 19, -130, 0, 10))



// 2. Выведите на экран случайное целое число от 1 до 100.
console.log("случайное целое число от 1 до 100.")
console.log(Math.ceil( Math.random()*100))


// 3.Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). 
console.log("10 случайных чисел для массива. через - for")
let arr1=[]
let i=0
let n=10
for (i=0; i<n; i++){
arr1[i]=(Math.ceil(Math.random()*100)*(i+1))
console.log(arr1[i])
}

console.log("10 случайных чисел для массива. через - while")
i=0
while(i<n) {
arr1[i]=(Math.ceil(Math.random()*10)+arr1[i])
console.log(arr1[i])
i++;
}

console.log("10 случайных чисел для массива. через - do-while")
i=0
do {
arr1[i]=(Math.ceil(Math.random()*10)-arr1[i])
console.log(arr1[i])
i++;
}while(i<n)



// toString
// 1.Создайте массив с числовыми значениями   
const arr3 = [ 1,2,3,4,5]
// Преобразуйте числовые значения в строку  и выведите в console.log
console.log("Преобразовал числовые значения массива в строку")
for (let i=0; i<arr3.length;i++){
  let a=arr3[i].toString()
  console.log(typeof a, a)
}

// 2. Если вы напишите в console.log (+true) что покажет консоль
// Число 1
console.log(+true) 
// 3.Если вы напишите в console.log (+false) что покажет консоль 
// Число 0
console.log(+false)