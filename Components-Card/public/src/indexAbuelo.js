import Card from './src/components/Card/card.js'; 
import { candidato } from './data.js'; 


function renderCards() {
    const container = document.createElement('div'); 
    document.body.appendChild(container); 

    candidato.forEach(candidato => {
        const card = document.createElement('item-card'); 

        
        card.setAttribute('name', candidato.name);
        card.setAttribute('name', `city: ${candidato.city}`);
        card.setAttribute('textbutton', 'Ver más');

        container.appendChild(card); 
    });
}

renderCards();