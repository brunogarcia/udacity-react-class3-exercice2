import React from 'react';
import PropTypes from 'prop-types';
import randomID from 'random-id';
import Message from '../Message';
import types from '../../utils/types';

const MessageList = (props) => {
  const { username, messages } = props;

  return (
    <ul className="message-list">
      {messages.map(message => (
        <Message key={randomID()} message={message} username={username} />
      ))}
    </ul>
  );
};

MessageList.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(types.message).isRequired,
};

export default MessageList;
