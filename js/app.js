let djins = document.querySelector('.djins')
let bru = document.querySelector('.bru')
let shtan = document.querySelector('.shtan')
let cp_sh = document.querySelector('.cp-sh')
let page_2 = document.querySelector('.page_2')
let page_3 = document.querySelector('.page_3')
let page_4 = document.querySelector('.page_4')
let page_5 = document.querySelector('.page_5')

djins.classList.add('active')
page_2.style.display = 'block'
page_3.style.display = 'none'
page_4.style.display = 'none'
page_5.style.display = 'none'


djins.addEventListener('click', () => {
    djins.classList.add('active')
    djins.style.color = 'red'
    bru.classList.remove('active')
    cp_sh.classList.remove('active')
    shtan.classList.remove('active')
    page_2.style.display = 'block'
    page_3.style.display = 'none'
    page_4.style.display = 'none'
    page_5.style.display = 'none'
})

bru.addEventListener('click', () => {
    djins.classList.remove('active')
    bru.classList.add('active')
    cp_sh.classList.remove('active')
    shtan.classList.remove('active')
    page_2.style.display = 'none'
    page_3.style.display = 'block'
    page_4.style.display = 'none'
    page_5.style.display = 'none'
})

shtan.addEventListener('click', () => {
    djins.classList.remove('active')
    bru.classList.remove('active')
    cp_sh.classList.remove('active')
    shtan.classList.add('active')
    page_2.style.display = 'none'
    page_3.style.display = 'none'
    page_4.style.display = 'block'
    page_5.style.display = 'none'
})

cp_sh.addEventListener('click', () => {
    djins.classList.remove('active')
    bru.classList.remove('active')
    cp_sh.classList.add('active')
    shtan.classList.remove('active')
    page_2.style.display = 'none'
    page_3.style.display = 'none'
    page_4.style.display = 'none'
    page_5.style.display = 'block'
})
