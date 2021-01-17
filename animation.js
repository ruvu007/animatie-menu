//klik op animeer-knop laat vlakje animeren door class toe te voegen of weg te halen
document.querySelector('.animeer-knop').addEventListener('click', (e) => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts')
});


// na enige tijd na het laden van de pagina: start de animatie van het vlakje van zelf
setTimeout( () => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts')    
}, 2000 );

// een klik op nav__knop laat de nav__link (alle) na elkaar naar binnen schuiven
// door ze de class nav__link--schuif-in te geven
const menuKnop = document.querySelector('.nav__knop');
const navItems = document.querySelectorAll('.nav__link');
menuKnop.addEventListener('click', () => {
    navItems.forEach( (item,index) => {
        setTimeout( () => {
            item.classList.toggle('nav__link--schuif-in');
        }, 100 * index);
    })
}); 

document.querySelector('.fa-bars').classList.toggle('verberg');
    document.querySelector('.fa-times').classList.toggle('verberg');