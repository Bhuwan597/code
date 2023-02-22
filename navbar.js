let closeBtn = document.querySelector(".close-btn")
let menu = document.querySelector(".menu")

let navigations = document.querySelector('.navigations')

let searchForm = document.querySelector(".search-form")
let searchBtn = document.querySelector(".search-btn")
let closeSearchBtn = document.querySelector(".close-search-btn")




menu.onclick = function(){
    navigations.classList.add('active')
    menu.classList.add('hide')
}
closeBtn.onclick = function(){
    navigations.classList.remove('active')
    menu.classList.remove('hide')
}
searchBtn.onclick = function(){
    searchForm.classList.add('active')
}
closeSearchBtn.onclick = function(){
    searchForm.classList.remove('active')
}