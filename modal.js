// находим блоки
let modalFirst = document.querySelector('.modal-first')
let modalClose = document.querySelector('.modal-close')
const secondButton = document.querySelector('#second-button')


modalClose.addEventListener('click', () => {
    modalFirst.classList.add('hidden')
})

secondButton.addEventListener('click', () => {
    modalFirst.classList.remove('hidden')
})

let modalSecond = document.querySelector('.modal-second')
let modalSecondClose = document.querySelector('.modal-second-close')
const secondOpen = document.querySelector('#second-open')

secondOpen.addEventListener('click', () => {
    modalSecond.classList.remove('hidden')
})

modalSecondClose.addEventListener('click', () => {
    modalSecond.classList.add('hidden')
})


//================================


const btnFirst = document.querySelector('#btn-first')
let accContent = document.querySelector('.acc-content')

btnFirst.addEventListener('click', () => {
    accContent.classList.toggle('hidden')
})

const btnsecond = document.querySelector('#btn-second')
let secondContent = document.querySelector('.second-content')

btnsecond.addEventListener('click', () => {
    secondContent.classList.remove('hidden')
})

const btnThird = document.querySelector('#btn-third')
const btnThirdAdd = document.querySelector('#btn-third-add')
let thirdContent = document.querySelector('.third-content')

btnThird.addEventListener('click', () => {
    thirdContent.classList.add('hidden') 
})


btnThirdAdd.addEventListener('click', () => {
thirdContent.classList.remove('hidden')
})



const btnOpen = document.querySelector('#btn-open')
let fifthContent = document.querySelector('.fifth-content')

btnOpen.addEventListener('click', () => {
    fifthContent.classList.toggle('hidden')
    fourthContent.classList.remove('hidden')
})


const btnclose = document.querySelector('#btn-close')
let fourthContent = document.querySelector('.fourth-content')

btnclose.addEventListener('click', () => {
    fourthContent.classList.toggle('hidden')
    fifthContent.classList.remove('hidden')
})


//======================================================

const btnKatalog = document.querySelector('#btn-katalog')
let buttonKatalog = document.querySelector('.button-katalog')

btnKatalog.addEventListener('click', () => {
    buttonKatalog.classList.toggle('hidden')
})

//==========================================================

const openFirst = document.querySelector('#open-first')
let firstOpen = document.querySelector('.first-open')

openFirst.addEventListener('click', () => {
    firstOpen.classList.toggle('first-open')
    if (firstOpen.classList.contains('first-open')) {
        openFirst.textContent = 'Oткрыть'
    } else {
        openFirst.textContent = 'Закрыть'
    }
})






const openSecond = document.querySelector('#open-second')
let secondOpenp = document.querySelector('.second-openp')

openSecond.addEventListener('click', () => {
    secondOpenp.classList.toggle('second-openp')

    if (secondOpenp.classList.contains ('second-openp')) {
        openSecond.textContent = 'otkrit'
    } else {
        openSecond.textContent = 'zakrit'
    }

})


// const openThird = document.querySelector('#open-third')
// let thirdOpen = document.querySelector('.third-open')

// openThird.addEventListener('click', () => {
//     thirdOpen.classList.toggle('third-open')
// })

// const oneButton = document.querySelector('#one')
// const oneText = document.querySelector('#one ~ p');

// console.log(oneButton)
// console.log(oneText)

// oneButton.addEventListener('click', () => {
//     oneText.classList.toggle('hide')
// })


// const newAccordeon = document.querySelector('#new-accordeon')
// const li = document.querySelectorAll('#new-accordeon li')

// console.log(li)

// for (let i = 0; i < li.length; i++) {
//     li[i].children[0].addEventListener('click', () => {
//         li[i].children[1].classList.toggle('hide')
//     })
// }


// const color = document.querySelector('#color')
// const blue = document.querySelectorAll('.blue')

//  for (let i = 0; i < blue.length; i++) {
//      li[i].children[0].addEventListener('click', () => {
//                blue.classList.toggle('blue')
//      })
//  }


 const color = document.querySelector('#color')
 const blue = document.querySelectorAll('.blue2')
 console.log(blue)
 
//  for (let i = 0; i < blue.length; i++) {
//      blue[i].children[0].addEventListener('click', () => {
//         blue[i].classList.toggle('green2') 
//     })
//  }

blue.forEach(item => item.children[0].addEventListener('click', () => {
    item.classList.toggle('green2')
}))

blue.forEach(item => console.log(item.children[0]))

let array5 = [1000, 1200, 3000, 4000, 5000, 2100, 2500, 1000, 500, 3900]

array5.forEach(cost => {
    if (cost > 2000) {
        cost = cost * 0.8
    }
    console.log(cost)
})

console.log(array5[array5.length -2])

let client1 = {
    'name': 'Ruslan',
    'date': '2023-03-22',
    'time': '20:00',
    'phone': '8-999-888-77-66'
}

blue[0].children[1].textContent = client1.name
blue[0].children[2].textContent = client1.date
blue[0].children[3].textContent = client1.time
blue[0].children[4].textContent = client1.phone


let food = [
    {
        'id': 0,
        'title': 'nutella',
        'price': 1500,
        'weight': 1000,
    },
    
    {
        'id': 1,
        'title': 'nutella1',
        'price': 1500,
        'weight': 1000,
    },
    {
        'id': 2,
        'title': 'nutella11',
        'price': 1500,
        'weight': 1000,
    },
    {
        'id': 3,
        'title': 'nutella111',
        'price': 1500,
        'weight': 1000,
    },
    {
        'id': 4,
        'title': 'nutella1112',
        'price': 1500,
        'weight': 1000,
    },
]

    blue[1].children[1].textContent = food[0].id
    blue[1].children[2].textContent = food[1].title
    blue[1].children[3].textContent = food[3].price
    blue[1].children[3].textContent = food[4].weight

    blue[2].children[1].textContent = food[0].id
    blue[2].children[2].textContent = food[1].title
    blue[2].children[3].textContent = food[3].price
    blue[2].children[3].textContent = food[4].weight

    blue[3].children[1].textContent = food[0].id
    blue[3].children[2].textContent = food[1].title
    blue[3].children[3].textContent = food[3].price
    blue[3].children[3].textContent = food[4].weight

    blue[4].children[1].textContent = food[0].id
    blue[4].children[2].textContent = food[1].title
    blue[4].children[3].textContent = food[3].price
    blue[4].children[3].textContent = food[4].weight

    blue[5].children[1].textContent = food[0].id
    blue[5].children[2].textContent = food[1].title
    blue[5].children[3].textContent = food[3].price
    blue[5].children[3].textContent = food[4].weight




    const choocolate = document.querySelector('#choocolate')
    const milka = document.querySelectorAll('.milka')

    console.log(choocolate)

    milka.forEach(item => item.children[0].addEventListener('click', () => {
    item.children[1].classList.toggle('yellow')
    item.children[2].classList.toggle('yellow')
    item.children[3].classList.toggle('yellow')
    })) 

    // milka.forEach(elem => console.log(elem.children[1]))
    // milka.forEach(elem => console.log(elem.children[2]))

    milka[0].children[0].addEventListener('click', () => {
        milka[0].children[1].classList.toggle('hidden')
        milka[0].children[2].classList.toggle('hidden')
        milka[0].children[3].classList.toggle('hidden')
    })
    milka[1].children[0].addEventListener('click', () => {
        milka[1].children[1].classList.toggle('hidden')
        milka[1].children[2].classList.toggle('hidden')
        milka[1].children[3].classList.toggle('hidden')
    })
    milka[2].children[0].addEventListener('click', () => {
        milka[2].children[1].classList.toggle('hidden')
        milka[2].children[2].classList.toggle('hidden')
        milka[2].children[3].classList.toggle('hidden')
    })