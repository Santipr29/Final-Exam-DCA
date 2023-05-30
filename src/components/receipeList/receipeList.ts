import { addObserver, appState } from "../../store";
import styles from "./receipeList.css"

export default class receipesList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML="";

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)

        const container = this.ownerDocument.createElement('section');

        //appState.something.forEach((e) => {
            const card = this.ownerDocument.createElement('section');

            const name = this.ownerDocument.createElement('h3');
            //name.innerText = e.name
            card.appendChild(name)

            const ingredients = this.ownerDocument.createElement('p');
            //ingredients.innerText = e.ingredients
            card.appendChild(ingredients)

            const instruccions = this.ownerDocument.createElement('p');
            //instruccions.innerText = e.instruccions
            card.appendChild(instruccions)

            const img = this.ownerDocument.createElement('img');
            //img.src = e.img
            card.appendChild(img)

            container.appendChild(card)
        //});

        this.shadowRoot?.appendChild(container)
    }
}

customElements.define('app-receipeslist', receipesList)