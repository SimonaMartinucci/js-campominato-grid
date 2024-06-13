// Utente clicca su un bottone che genererà una griglia di gioco quadrata.

// richiamo container dentro il quale genererò la griglia
const container = document.querySelector(".container");

// richiamo il bottone da cliccare
const button = document.querySelector(".btn");

console.log(container, button);

// creo evento al click
button.addEventListener("click",
    function() {

        // richiamo funzione per creare i box con classe
        for(i = 1; i <= 100; i++) {
            let box = createClassElement("div", "box");
            let content = i;
            // metto i numeri all'interno dei box
            box.append(content);
            // li metto nel container
            container.append(box);
        }
    }  
)






// Quando l’utente clicca su ogni cella
// la cella cliccata si colora di azzurro
// emetto un messaggio in console con il numero della cella cliccata