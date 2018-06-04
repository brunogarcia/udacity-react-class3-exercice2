import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MIN_LENGTH_FOR_MESSAGE = 1;

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messsage: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { messsage } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();
    onSubmit(messsage);
  }

  handleChange(e) {
    const messsage = e.target.value;
    this.setState({
      messsage,
    });
  }

  isDisabled() {
    const { messsage } = this.state;
    return messsage.length < MIN_LENGTH_FOR_MESSAGE;
  }

  render() {
    const { messsage } = this.state;

    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={messsage}
          onChange={this.handleChange}
          placeholder="Enter your message..."
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={this.isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    );
  }
}

SendMessage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SendMessage;
