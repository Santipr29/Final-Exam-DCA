import { appState } from ".";
import { Receipe } from "../types/receipes";
import { Actions, SomeActions } from "../types/store";

export const AddReceipe = async (receipe: Receipe): Promise<Actions> =>{


   return SomeActions.ADD_RECEIPE
    
}