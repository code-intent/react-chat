import React, { Component } from 'react';

export default class MessageBox extends Component {
  render() {
    return (
      <div id="message-box">
        <div contentEditable="true" placeholder="create message"></div>
      </div>
    );
  }
}
