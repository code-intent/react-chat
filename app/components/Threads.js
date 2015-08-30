import React, { Component } from 'react';

export default class Threads extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showReplyBox(index) {
    const elem = React.findDOMNode(this.refs['reply-holder-' + index]);
    if (elem.className === 'hidden') {
      elem.className = '';
    } else {
      elem.className = 'hidden';
    }
  }

  handleKeyPress(e) {
    if (e.keyCode == 13) {
      const index = e.target.id;
      const elem = React.findDOMNode(this.refs['reply-' + index]);
      const parent = React.findDOMNode(this.refs['reply-holder-' + index]);
      const text = elem.value;
      this.props.addReply(index, text);
      parent.className = 'hidden';
      elem.value = '';
    }
  }

  render() {
    const {threads} = this.props;
    return (
      <div id='threads'>
        {threads.map((t, ti) =>
          <div key={ti} className='chat-thread-container'>
            <div className='chat-thread'>
              {t.map((m, mi) =>
                <div key={mi} className='chat-message'>
                  <div className='chat-message-avatar'>
                    <img src={m.user.avatar}/>
                  </div>
                  <div className='chat-message-content'>
                    <p className='chat-message-username'><small>{m.user.name}</small></p>
                    <p className='chat-message-text'>{m.text}</p>
                  </div>
                </div>
              )}
              <span className='chat-thread-reply' onClick={this.showReplyBox.bind(this, ti)}></span>
            </div>
            <div className='hidden' ref={'reply-holder-' + ti}>
              <textarea className='message'
                ref={'reply-' + ti}
                id={ti}
                onKeyDown={this.handleKeyPress.bind(this)}
                placeholder='create reply, hit enter to submit'></textarea>
            </div>
          </div>
        )}
      </div>
    );
  }
}
