import { dispatch } from "../../store";
import { Receipe } from "../../types/receipes";
import styles from "./form.css"

const Receipe: Receipe = {
    name:"",
    ingredients:"",
    instruccions:"",
    img:"",
}

export default class form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)

        const container = this.ownerDocument.createElement('section');

        const tittle = this.ownerDocument.createElement("h2")
        tittle.innerText = "Crea tu receta"
        container.appendChild(tittle)

        const name = this.ownerDocument.createElement('input');
        name.placeholder = "Nombre de la receta"
        name.addEventListener("change",(e:any)=>{
            Receipe.name = e.target.value
        })
        container.appendChild(name)

        const ingredients = this.ownerDocument.createElement('input');
        ingredients.placeholder = "Ingredientes"
        name.addEventListener("change",(e:any)=>{
            Receipe.ingredients = e.target.value
        })
        container.appendChild(ingredients)

        const instruccions = this.ownerDocument.createElement('input');
        instruccions.placeholder = "Instrucciones"
        name.addEventListener("change",(e:any)=>{
            Receipe.instruccions = e.target.value
        })
        container.appendChild(instruccions)

        const img = this.ownerDocument.createElement('input');
        img.placeholder = "Link de la imagen"
        name.addEventListener("change",(e:any)=>{
            Receipe.img = e.target.value
        })
        container.appendChild(img)

        const sendbtn = this.ownerDocument.createElement('button');
        sendbtn.innerText = "Publicar"
        //sendbtn.addEventListener("click", 
        //dispatch())
        container.appendChild(sendbtn)

        this.shadowRoot?.appendChild(container)
    }
}

customElements.define('app-form', form)