import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatHeader from '../ChatHeader';
import MessageList from '../MessageList';
import MessageSender from '../MessageSender';
import types from '../../utils/types';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(text) {
    const { username, onSubmit } = this.props;
    onSubmit({ username, text });
  }

  render() {
    const { username, messages } = this.props;

    return (
      <div className="chat-window">
        <ChatHeader username={username} />
        <MessageList username={username} messages={messages} />
        <MessageSender onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(types.message).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Chat;
