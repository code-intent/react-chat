import React, { Component } from 'react';

export default class Threads extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="threads">
        {this.props.threads.map(thread =>
          <div className="chat-thread">
            {thread.messages.map(message =>
              <div className="chat-message">
                <div className="chat-message-avatar">
                  <img src={message.user.avatar}/>
                </div>
                <div className="chat-message-content">
                  <p className="chat-message-username"><small>{message.user.name}</small></p>
                  <p className="chat-message-text">{message.text}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
