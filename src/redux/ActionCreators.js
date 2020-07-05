import { ADD_USER, REMOVE_USER } from "./ActionTypes";

export function ADDUSER(payload) {
    return {
        type: ADD_USER,
        payload
    }
}

export function REMOVEUSER(payload) {
    return {
        type: REMOVE_USER ,
        payload
    }
}