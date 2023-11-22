## Snack 1

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

- creo un array di oggetti bici ciascuno con proprietà name e weight
- inizializzo una variabile lowerWeight che conterrà il peso minore con il peso della prima bici
- inizializzo una variabile indexLighterBike che conterrà l'indice della bici col peso minore con 0
- creo una variabile che conterrà il nome della bici con peso minore
- uso un ciclo for che parte da 1 perché non ho bisogno di controllare il primo elemento che ho assunto in partenza essere la bici più leggera
  - per ogni iterazione utilizzo la destrutturazione per salvare nome e peso della bici
  - se il peso della bici è minore di lowerWeight
    - lowerWeight diventa il nuovo peso
    - indexLighterBike diventa l'indice attuale di iterazione
    - il nome della bici più leggera diventa quello della bici in questione
- dopo il ciclo scrivo sull'html il risultato con un template literal
