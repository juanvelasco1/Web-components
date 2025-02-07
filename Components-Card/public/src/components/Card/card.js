class Card extends HTMLElement {
    static get observedAttributes() {
        return [ 'name', 'city', 'textbutton'];
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            this.name = newValue 
            this.render();
        }
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Card/card.css">
    <div class="app">
        <div class="item-card">
            
            <h1>${this.name}</h1>
            <p>${this.city}</p>
            <button>${this.textbutton}</button>
        </div>
    </div>
        `;
    }
}

customElements.define('item-card', Card);
export default Card;