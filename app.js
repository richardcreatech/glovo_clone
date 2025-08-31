const food_images = document.querySelectorAll('img')


food_images.forEach(i => {
    i.draggable = ''
    console.log(i.draggable);
})

const second_page = document.getElementById('second_page');
const first_page = document.getElementById('first_page');
const header_2 = document.getElementById('header-2');

header_2.style.opacity = '0';
header_2.style.display = 'flex';
header_2.style.boxShadow = '0rem 2rem 2rem grey';

second_page.addEventListener('pointerenter', function () {
    header_2.style.animation = '0.5s fadeIn linear ';

    header_2.style.opacity = '1';
    // alert('Hi im 2 page')
    // second_page.addEventListener('c', () => {
    // })

})

first_page.addEventListener('pointerenter', function () {
    header_2.style.animation = '0.5s fadeIn linear reverse ';

    header_2.style.opacity = '0';
    // alert('Hi im 2 page')
    // second_page.addEventListener('c', () => {
    // })

})






