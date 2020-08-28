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


const fetchMessages = (dispatch) => {

    return async (dispatch) =>{
        const response = await axios.get('/api/messages');
        const messages = response.data;
        const action = gotMessagesFromServer(messages)
        dispatch(action)
    }
}



const store = createStore(reducer);
export default store;
