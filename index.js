let arrow_up1 = document.querySelector('.uparrow1');
let holder2 = document.querySelector('.holder2');
let arrow_up2 = document.querySelector('.uparrow2');
let holder1 = document.querySelector('.holder1');
let f_item = document.querySelector('.dropitem');
let drop1 = document.getElementById('drop1');
let company = document.getElementById('company');
let cancel = document.getElementById('cancel');
let menu = document.querySelector('.menu');
let nav = document.querySelector('.navigation');
let overlay = document.querySelector('.overlay');

drop1.addEventListener('click', (e) => {
        
    arrow_up1.classList.toggle('spin')
    console.log(arrow_up1);
    holder1.classList.toggle('show_holder');
    drop1.classList.toggle('big');

});
company.addEventListener('click', (e) => {
    arrow_up2.classList.toggle('spin')
    console.log(arrow_up2);
    holder2.classList.toggle('show_holder1');
    company.classList.toggle('big');  
});
menu.addEventListener('click', () => {
nav.classList.add('show');
overlay.classList.add('overshow');
});
cancel.addEventListener('click', () => {
    nav.classList.remove('show');
    overlay.classList.remove('overshow');
    })
