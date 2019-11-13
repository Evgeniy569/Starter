console.log(`Hello world`);

let variable;

// строка: "Строка", `Строка`, "", ``
// число: -1, 0, 1, 1.01, NaN, Infinity, -Infinity
// логическое значение: true, false
// специальное значение: null, undefined

// массив: [], ["Строка", 156, false], [[123], [67]]
// объект: {}, {a: "Строка", b: 156, c: false}
// {a: {}, b: [[], 65] }, [{a: [] }]

function increment(arg) {
return arg +1;
}

variable = increment(10);

console.log(variable);

function condition(str) {
    if(str === "test") {
        console.log("I want to eat");
    } else {
        console.log("Mistake");
    }
}

condition("test");
condition();

let list = ["Кристина", "Женя", "Миша", "Юля", "Диана"];
let busya = {
color: "black", 
playful: true,
legs: 4,

meow: function(){
    console.log("MEOW!!!");
}
};

console.log(list[0]);
console.log(list[4]);

console.log(busya.legs);
busya.meow();

function traverseList(){
    console.log("--------------------------start---------------------------");
    for(let index = 0; index < list.length; index += 1 ) {
        console.log(list[index]);
    }
    console.log("--------------------------end------------------------------");
}

traverseList();

// Логические операторы
// равно ===
// не равно !==
// меньше <, меньше или равно <=
// больше >, больше или равно >=
// и && (true && true === true; true && false === false) - оба значения true
// или || (true || false === true; false || false === false) - хотя бы 1 значение true
// ПРИВЕДЕНИЕ ТИПОВ К ЛОГИЧЕСКОМУ
// "" === false
// "t" === true
// 0 === false
// 165 === true
// null || undefined === false
// [] || {} || function() {} === true

if ("word" || 165 || [] || {} || function() {}) {
    console.log("yeah, word is truthy");
}

if("" || 0 || null || undefined | false) {
    console.log ("Я невыполнимый :(");
}

console.log ("Кристина хочет закончить"[9]);

