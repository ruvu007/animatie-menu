//klik op animeer-knop laat vlakje animeren door class toe te voegen of weg te halen
document.querySelector('.animeer-knop').addEventListener('click', (e) => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts')
});


// na enige tijd na het laden van de pagina: start de animatie van het vlakje van zelf
setTimeout( () => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts')    
}, 2000 ) 