/*
1. Вывести # столько раз, сколько указал пользователь.
*/

const enter = prompt('Enter number: ')
let i = 0
while (i++ < enter) {
    console.log('#')
}

/*
2. Пользователь ввел число, а на экран вывелись все числа
от введенного до 0
*/

let enter = Number(prompt('Enter number: '))
let i = 0;
while (i <= enter) {
    console.log(enter--)
}

/*3.
Запросить число и степень. Возвести число в указанную
степень и вывести результат.
*/

function pow(base, extend) {
    let result = base;
    let i = 0
    if (extend < 0) {
        result = 1 / pow(base, Math.abs(extend))
    }
    if (extend === 0) {
        return  1
    }
    while (i++ < extend - 1) {
        result *= base;
    }
    return result;
}

let base = prompt("base");
let extend = prompt("extend");
console.log(pow(base, extend))

/*
4. Запросить 2 числа и найти все общие делители.
*/

/*const num = Number(prompt('Enter a number'))
let arr = []
let i = 0;
while (num > i++) {
    if (!(num % i)) {
        arr.push(i)
    }
    console.log(arr)
}*/


/*
5. Посчитать факториал введенного пользователем числа.
*/

let n = Number(prompt('enter number'))

let factorial = 1
while (n > 1) {
    factorial *= n
    --n
}

console.log(factorial)


/*  DO WHILE.   */

/*
1. Предлагать пользователю решить пример 2 + 2 * 2 до тех
пор, пока он не решит его правильно.
*/

let decision;
do {
    decision = Number(prompt('2 + 2 * 2 = ? '))
} while (decision !== 6)
alert('Верно')


/*
2. Делить число 1000 на 2 до тех пор, пока не получится число
меньше 50. Вывести это число и сколько делений произвели.
*/

let n = 1000
let count = 0
do {
    n = n / 2
    count++
} while (n > 50)
console.log(n)
console.log(count)


/*  FOR   */

/*
Вывести все числа от 1 до 100, которые кратные указанному
пользователем числу.
*/

const num = Number(prompt('Enter a number'))

for (let i = 1; i < 101; i++) {
    if (i % num === 0) {
        console.log(i)
    }
}