import React, { Component } from 'react';

export default class MessageBox extends Component {
  handleKeyPress(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      let elem = React.findDOMNode(this.refs['message-text']);
      let text = elem.value;
      this.props.addThread(text);
      elem.value = '';
    }
  }

  render() {
    return (
      <div id='message-box'>
        <textarea className='message'
          ref='message-text'
          onKeyDown={this.handleKeyPress.bind(this)}
          placeholder='create message, hit enter to submit'></textarea>
      </div>
    );
  }
}
