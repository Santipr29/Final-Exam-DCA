import { Actions, AppState, SomeActions } from "../types/store"

const reducer = (Actions:Actions, state:AppState) =>{
    const{action, payload} = Actions

    switch (Actions) {
        case AddReceipeAction:
            state.receipes = [...state.receipes, payload]
            
            break;

        case AddReceipeAction:
            
            break;
    
        default:state
            break;
    }
}