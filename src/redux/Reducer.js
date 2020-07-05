import { ADD_USER, REMOVE_USER } from "./ActionTypes";

const initialSate = {
    users: [] //list of friends
}

export default function rootReducer(state = initialSate, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
            break;
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.name != action.payload)
            }

        default:
            return state;
            break;
    }

}