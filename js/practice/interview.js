"use strict";
// 1)Какое будет выведено значение: let x = 5; alert( x++ );
let x = 5;
console.log(x++);
// alert(x++); // 5 инкремент и дeкремент прежде чем увеличить или уменьшить значение, сначала возвращает исходное значение, а после увеличит или уменьшит на единицу. Если инкрeмент или дeкремент будут стоять перед х(префиксная форма), то операция сработает сразу.

// 2)Чему равно такое выражение: [ ] + false - null + true ?

console.log(typeof ([] + false)); // string
// если есть пустой массив в таких вот операциях, он будет приведен к строковому типу данных, а именно к пустой строке. Т.е этот пустой массив заменяется на пустую строку ("" + false). По правилам динамической типизации, если сложить(канкатинировать) пустую строку с каким-то другим типо данных, то получится строка "false"
console.log([] + false - null + true); // NaN так как от строки пытаемся отнять другой тип данных(нематиматические операции)

// 3)Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
let z = (y = 2);
console.log(z); //2

// 4)Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); //"12"

//5)Что выведет этот код: alert( "1"[0] )?
console.log("1"[0]); // [0]  это индекс, а так как к каждому элементу строки мы можем обратиться по индексу, то в консоле будет 1

// 6)Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined); //null

//7)Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!(1 && 2)); // true !! преводит к boolean
console.log(1 && 2); //2

// 8)Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
console.log(null || (2 && 3) || 4); //3 первым выполняется && (таб.приоритетов операторов)

// 9)a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); //false

// 10)Что выведет этот код: alert( +"Infinity"; ); ?
console.log(+"infinity"); // NaN унарный плюс приводит к числу
// alert(+"Infinity"); // Infinity

// 11)Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко"); // false (таб.юникод)

// 12)Чему равно 0 || ""|| 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || false); // 2