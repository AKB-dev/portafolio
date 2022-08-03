const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('menu');


function toggleBtn() {
    navList.classList.toggle('show')
}

menuBtn.addEventListener('click', toggleBtn)