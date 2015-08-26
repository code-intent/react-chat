import React, { Component } from 'react';

export default class MessageBox extends Component {
  handleKeyPress(e) {
    if(e.keyCode == 13) {
      let elem = React.findDOMNode(this.refs["message-text"]);
      let text = elem.innerHTML;
      this.props.addThread(text);
      elem.innerHTML = "";
    }
  }
  render() {
    return (
      <div id="message-box">
        <div className="message" contentEditable="true"
          ref="message-text"
          onKeyDown={this.handleKeyPress.bind(this)}
          placeholder="create message, hit enter to submit"></div>
      </div>
    );
  }
}
