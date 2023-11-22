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

## Snack 2

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

- creo un array di squadre ciascuna con nome, punti e falli subiti(inizializzati a 0)
- uso un ciclo forEach sull'array e per ogni squadra considero le proprietà points e foulsDrawn e assegno un valore random tramite la funzione randomNum
- per creare un nuovo array i cui elementi contengono solo nomi e falli subiti utilizzo il metodo map sull'array di squadre e passo come funzione a map la destrutturazione che separa foulsDrawn dalle altre proprietà tramite ...rest
