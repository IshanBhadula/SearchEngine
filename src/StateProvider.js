import React, {createContext, useContext, useReducer} from "react";

//Preparing the data layer
export const StateContext = createContext(); 

//A higher order component , here childern is App
// initail State is what app looked like in the beginning
//reducer is which listen to the changes 

export const StateProvider = ({reducer ,initialState ,children
}) =>(
<StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
</StateContext.Provider>
);

// this is a hook which allows us to pull info from data layer
export const useStateValue = () => useContext(StateContext);