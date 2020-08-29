export const initialState = {
    term:null,
};

// it will change the term in intial state when ever an event occure
export const actionTypes = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM",
};

//state-> state of the datalayer
//action->  is what ever we are dispatching into data layer or context API
const reducer = (state,action) => {
    console.log(action);
    switch (action.type){
        case actionTypes.SET_SEARCH_TERM:
        return{
            ...state,
            term: action.term,
        };

        default:return state;
    }
};

export default reducer;
