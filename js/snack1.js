/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal
*/

// 1 creo array di oggetti
const bikeBrand = [
    { brand: 'Merida', peso: 6.73 },
    { brand: 'Trek', peso: 12.89 },
    { brand: 'Specialized', peso: 9.98 },
    { brand: 'Cannondale', peso: 10 },
    { brand: 'Kona', peso: 16.35 },
    { brand: 'Scott', peso: 3.44 },
    { brand: 'Santa Cruz', peso: 11.11 },
    { brand: 'Marin', peso: 15.16 },
    { brand: 'GT', peso: 10.18 },
    { brand: 'Giant', peso: 6.70 },
];

console.table(bikeBrand);


// 2 stampo in console bici che pesa di meno
let minWeight = 0;

for (let i = 0; i < bikeBrand.length; i++) {
    if (bikeBrand[i].peso < bikeBrand[minWeight].peso) {
        minWeight = i;
    }
};

console.log('Il brand con la bici più leggera è: ' + bikeBrand[minWeight].brand + ' dal peso di ' + bikeBrand[minWeight].peso)
