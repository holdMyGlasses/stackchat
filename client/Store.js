import {createStore} from 'redux';
import {thunkMiddleware, applyMiddleware} from 'redux-thunk'

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';

const initialState = {
    messages: []
}
const reducer = (state = initialState, inputAction) => {
    switch(inputAction.type){
        case GOT_MESSAGES_FROM_SERVER:
            return {...state, messages: inputAction.messages}
        
        default: return state
    }
}

export const gotMessagesFromServer = (messages => {
    return{
        type: GOT_MESSAGES_FROM_SERVER,
        messages
    }
})

const store = createStore(reducer);
export default store;
