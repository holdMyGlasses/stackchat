import {createStore} from 'redux';
import {thunkMiddleware, applyMiddleware} from 'redux-thunk'
import { connect } from 'react-redux'

const initialState = {
    messages: []
}


// action type
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
//action creator
export const gotMessagesFromServer = (messages) => 
    ({
        type: GOT_MESSAGES_FROM_SERVER,
        messages
    })


const fetchMessages = (dispatch) => {
    
    return async (dispatch) =>{
        const response = await axios.get('/api/messages');
        const messages = response.data;
        const action = gotMessagesFromServer(messages)
        dispatch(action)
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialMessages: () => dispatch(fetchMessages())
    }
    
}
const reducer = (state = initialState, inputAction) => {
    switch(inputAction.type){
        case GOT_MESSAGES_FROM_SERVER:
            return {...state, messages: inputAction.messages}
        
        default: return state
    }
}



const store = createStore(reducer);
export default store;
