//all
const logo = document.querySelector('#logo').addEventListener('click', () => {
    window.location.href = "index.html";
})


//mobile
const hamburgerMenu = document.querySelector('.hamburger');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
})

//tablet
const menuLinks = [...document.querySelectorAll('.menu-link')];
const getActive = (e) => {
    const linkClasses = e.target.classList;
    menuLinks.forEach(menuLink => {
        menuLink.classList.remove('actived');
    })
    linkClasses.add('actived');
}

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', getActive);
})



