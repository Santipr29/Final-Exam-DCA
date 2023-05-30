import { Receipe } from "./receipes";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  //screen: Screen;
  receipes: Receipe[];
};

export enum SomeActions {
  "ADD_RECEIPE" = "ADD_RECEIPE",
  "GET_RECEIPES" = "GET_RECEIPES",
  "NAVIGATE" = "NAVIGATE"
}

export interface AddReceipeAction {
  action: SomeActions.ADD_RECEIPE;
  payload: Receipe;
}

export interface GetReceipeAction {
  action: SomeActions.GET_RECEIPES;
  payload: Receipe[];
}

//export interface NavigateAction {
  //action: SomeActions.NAVIGATE;
  //payload: ;
//}

export type Actions = AddReceipeAction | GetReceipeAction;
