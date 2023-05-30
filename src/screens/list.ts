import "../components/export"
// import { dispatch } from "../store";

export default class listScreen extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        this.render()
    }

    render() {
        const tittle = this.ownerDocument.createElement('h1');
        tittle.innerText = "Delicias Sabrosas"
        this.shadowRoot?.appendChild(tittle);

        const list = this.ownerDocument.createElement("app-receipeslist");
        this.shadowRoot?.appendChild(list);
    }
}

customElements.define('list-screen', listScreen)