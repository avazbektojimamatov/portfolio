const menuBar = document.querySelector('.menu-bar'),
        navBar = document.querySelector('.nav-bar');

menuBar.addEventListener('click', () =>{
    if(navBar.style.display != 'none'){
        navBar.style.display = 'none';
    }else{
        navBar.style.display = 'block';
    }
})