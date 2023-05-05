
const counter = document.querySelector('#counter')

const btnPlus = document.querySelector('.plus')

btnPlus.addEventListener('click', function () {
    if (counter.value < 10) {
        counter.value = +counter.value + 1;
    } else {
        counter.value = 10;
    }
})

const btnminus = document.querySelector('.minus')

btnminus.addEventListener ('click', function () {
    if (counter.value > 0) {
        counter.value = +counter.value - 1;
    } else {
        counter.value = 0;
    }
})


// ДЗ: Сделать инпут расчет плюс 10 и минус 10 //



const counterhome = document.querySelector('#counterhome')

const minusten = document.querySelector('.minusten')

minusten.addEventListener('click', function () {
    if (counterhome.value > 0) {
        counterhome.value = +counterhome.value - 10;
    } else {
        counterhome.value = 0;
    }
})

const plusten = document.querySelector('.plusten')

plusten.addEventListener('click', function () {
    if (counterhome.value < 100) {
        counterhome.value = +counterhome.value + 10;
    } else {
        counterhome.value = 100;
    }
})


// ищем блоки 

const firstBlock = document.querySelector('.first-block')
const firstButton = document.querySelector('#first-button')

firstButton.addEventListener('click', () => {
    firstBlock.classList.toggle('hidden')
})





let array = [1, 2, 3]

const arrayBox = document.querySelector('.array__box')

let sum = 1;
for (let i = 0; i < 3; i++ ) {
    sum = sum * array[i]
    // console.log(sum)
}

// сделать цикл для расчета данных из массива arr1

let arr1 = [22, 33, 44, 55, 66, 77]

let sum1 = 0;

for (let i = 0; i < arr1.length; i++) {
    sum1 = sum1 + arr1[i]
    // console.log(sum1)
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 6, 5, 4, 2, 3, 4, 67, 88, 990]

for(let i = 0; i < arr2.length; i++) {

    // console.log(arr2[i])
}


let arr3 = [1, 2, 3, 4, 5, 6, 7, 8]

arr3 = arr3.sort()
console.log(arr3)

function unique(arr3) {
    let arr31 = Array.from(new Set(arr3));
    if (arr31.length == arr3.length) {
        console.log(true)
    } else {
        console.log(false)
    }
}

unique(arr3)

let word = ['r', 'o', 'a', 'd', 12, 33]
let word1 =''
for(let i = 0; i < word.length; i++) {
    word1 = word1 + word[i] 
    if (i >= word.length - 1) {
        console.log(word1)
    }
}

// alert('привет')

for (let i = 0; i < 10; i++) {
    console.log(i + 1)
}

