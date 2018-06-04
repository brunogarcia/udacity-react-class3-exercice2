import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ChatHeader = (props) => {
  const { username } = props;

  return (
    <Fragment>
      <h2>Super Awesome ChatHeader</h2>
      <div className="name sender">{username}</div>
    </Fragment>
  );
};

ChatHeader.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ChatHeader;
