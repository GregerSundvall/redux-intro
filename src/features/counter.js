


import { createAction, createReducer } from "@reduxjs/toolkit";

//Filen innehåller actions och reducers


const increase = createAction("increase counter");
const decrease = createAction("decrease counter");

//samla alla actions i ett object
const actions = {increase, decrease};

//ursprungsvärde, kan även vara tex ett objekt
const initialState = 10;


const reducer = createReducer(initialState, {
    [increase] : (state, action) => state + 1,
    [decrease] : (state, action) => state - 1
})

//createReducer skapar ungefär detta:
// (state, action) => {
//     switch(action.type) {
//         case "increase counter" :
//             return state + 1;
//         case "decrease counter" :
//             return state - 1;
//         default:
//             return state;
//     }
// }

export {actions, reducer};