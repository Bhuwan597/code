var searchBtn = document.querySelector('.searchBtn');
var closeBtn = document.querySelector('.closeBtn');

let header = document.querySelector('header');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');

let searchBox = document.querySelector(".searchBox");

searchBtn.addEventListener('click',function(){
    searchBtn.classList.add('hide')
    searchBox.classList.add('active');
    closeBtn.classList.add('active')
    searchBtn.classList.add('active')
    menuToggle.classList.add('hide')
    header.classList.add('open');
})

closeBtn.addEventListener('click', function(){
    searchBtn.classList.remove('hide')
    searchBox.classList.remove('active');
    menuToggle.classList.remove('hide')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    header.classList.remove('open');
})

menuToggle.addEventListener('click',function() {
    header.classList.toggle('open');
    searchBox.classList.remove('active')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('remove')
})