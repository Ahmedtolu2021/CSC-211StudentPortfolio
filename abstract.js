const nav = document.getElementById('help2');
const Minnav = document.getElementById('minnav');
const close = document.getElementById('close');

nav.addEventListener('click', () =>{
    Minnav.style.display = 'block'
});
close.addEventListener('click', () =>{
    Minnav.style.display= 'none'
});



