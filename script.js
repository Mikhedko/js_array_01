// Задание 2
// Создать еще один массив из 5 случайных чисел и написать
// следующие функции.
// 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов
// без повторений.
// 2
// Практическое задание №2
// 2. Функция принимает 2 массива и возвращает новый массив,
// 	в котором собраны общие элементы (то есть элементы,
// 	которые встречаются и в первом и во втором массивах)
// без повторений.
// 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива,
// 	которых нет во втором массиве.

let firstArray = [2, 4, 6, 8, 10];
let secondArray = [8, 10, 12, 14, 16];

function createNewArray(arr1, arr2){
    let newArr = arr1.concat(arr2);
    let NewArrUnique = [...new Set(newArr)]
    console.log(NewArrUnique);
}

createNewArray(firstArray, secondArray);


function createNewArraySame(arr1, arr2){
    let newArr = [];
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr2[j] == arr1[i]){
                newArr.push(arr1[i]);
            }
        }
    }
    console.log(newArr);
} 

createNewArraySame(firstArray,secondArray);

function createNewArrayNotSame(arr1, arr2){
    let obj1={}, obj2={}, newArr=[], key;
    for (var i=0; i < arr1.length; i++) { 
        obj1[arr1[i]] = true; 
    }
    console.log(obj1)
    for (var i=0; i < arr2.length; i++) { 
        obj2[arr2[i]] = true; 
    }
    console.log(obj2)
    for (key in obj1) { 
        if (!(key in obj2)) { 
            newArr.push(key); 
        }
    }
    console.log(newArr);
}

console.log( createNewArrayNotSame(firstArray, secondArray));
