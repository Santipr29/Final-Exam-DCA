import "./screens/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const createScreen = this.ownerDocument.createElement('create-screen');
        this.shadowRoot?.appendChild(createScreen);

        const listScreen = this.ownerDocument.createElement('list-screen');
        this.shadowRoot?.appendChild(listScreen);
    }
}

customElements.define('app-container', AppContainer)