/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


// Creare un array di oggetti di squadre di calcio.
const teams = [
    { squadra: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { squadra: 'Napoli', puntiFatti: 0, falliSubiti: 0 },
    { squadra: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { squadra: 'Atalanta', puntiFatti: 0, falliSubiti: 0 },
    { squadra: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { squadra: 'ROma', puntiFatti: 0, falliSubiti: 0 },
    { squadra: 'Fiorentina', puntiFatti: 0, falliSubiti: 0 },
    { squadra: 'Lazio', puntiFatti: 0, falliSubiti: 0 },
    { squadra: 'Verona', puntiFatti: 0, falliSubiti: 0 },
    { squadra: 'Torino', puntiFatti: 0, falliSubiti: 0 },
];

console.table(teams);


// Generare numeri random e inserire al posto degli 0 nelle proprietà:
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const puntiFatti = '';
const falliSubiti = '';

for (let i = 0; i < teams.length; i++) {
    let squadra = teams[i];
    squadra.puntiFatti = getRandomNumber(1, 150);
    squadra.falliSubiti = getRandomNumber(1, 75);
}


// Array i cui elementi contengono solo nomi e falli 
const teamFalli = [];

for (let i = 0; i < teams.length; i++) {
    let Team = teams[i];
    const { squadra, falliSubiti } = Team;
    teamFalli.push({ squadra, falliSubiti });
};

// Risultato sul console log

console.table(teamFalli);