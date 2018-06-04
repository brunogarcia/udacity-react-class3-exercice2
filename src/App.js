import React, { Component } from 'react';
import randomID from 'random-id';
import Header from './components/Header';
import Chat from './components/Chat';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { username: 'Amy' },
        { username: 'John' },
      ],
      messages: [
        { username: 'Amy', text: 'Hi, Jon!' },
        { username: 'Amy', text: 'How are you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' },
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(message) {
    this.setState(currentState => ({
      users: [...currentState.users],
      messages: [...currentState.messages, message],
    }));
  }

  render() {
    const { users, messages } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          {users.map(user => (
            <Chat
              key={randomID()}
              username={user.username}
              messages={messages}
              onSubmit={this.handleSubmit}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
