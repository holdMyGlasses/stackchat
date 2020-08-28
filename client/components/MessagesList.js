import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import { connect } from 'react-redux'

export default class MessagesList extends Component {

  constructor () {
    super();
    this.state = { messages: [] };
  }



  render () {

    const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
    const messages = this.state.messages;//messages that are here
    const filteredMessages = messages.filter(message => message.channelId === channelId);

    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry />
      </div>
    );
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