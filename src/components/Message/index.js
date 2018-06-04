import React from 'react';
import PropTypes from 'prop-types';
import types from '../../utils/types';

const Message = (props) => {
  const { username, message } = props;
  const type = (message.username === username) ? 'message sender' : 'message recipient';

  return (
    <li className={type}>
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  );
};

Message.propTypes = {
  username: PropTypes.string.isRequired,
  message: types.message.isRequired,
};

export default Message;
