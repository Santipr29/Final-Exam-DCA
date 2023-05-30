import "../components/export"

export default class createScreen extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        console.log('hola')
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const tittle = this.ownerDocument.createElement('h1');
        tittle.innerText = "Delicias Sabrosas"
        this.shadowRoot?.appendChild(tittle);

        const form = this.ownerDocument.createElement("app-form");
        this.shadowRoot?.appendChild(form);
    }
}

customElements.define('create-screen', createScreen)