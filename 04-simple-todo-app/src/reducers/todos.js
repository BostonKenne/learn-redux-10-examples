import { ADD_TODO } from "../constants/action-types"
// import store from "../store";
const initialState= [{id: 0, text: "0 - Wake up", completed: false}]

const todos = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
        console.log("add todo processings")
        console.log(action)
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
        default:
        return state
    }
}

export default todos;