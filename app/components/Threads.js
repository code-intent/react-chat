import React, { Component } from 'react';

export default class Threads extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showReplyBox(index) {
    let elem = React.findDOMNode(this.refs["reply-holder-" + index]);
    if(elem.className === "hidden") {
      elem.className = ""; // show
    } else {
      elem.className = "hidden"; // hide
    }
  }
  handleKeyPress(e) {
    if(e.keyCode == 13) {
      let id = e.target.id;
      let elem = React.findDOMNode(this.refs["reply-" + id]);
      let text = elem.innerHTML;
      this.props.addReply(id, text);
      let parent = React.findDOMNode(this.refs["reply-holder-" + id]);
      parent.className = "hidden";
      elem.innerHTML = "";
    }
  }
  render() {
    console.log("RENDER threads");
    const replyHolder = "reply-holder-";
    const reply = "reply-";
    return (
      <div id="threads">
        {this.props.threads.map((thread, index) =>
          <div className="chat-thread-container">
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
              <span className="chat-thread-reply" onClick={() => this.showReplyBox(index)}></span>
            </div>
            <div className="hidden" ref={replyHolder+index}>
              <div className="message"
                id={index}
                ref={reply+index}
                onKeyDown={this.handleKeyPress.bind(this)}
                contentEditable="true"
                placeholder="create reply, hit enter to submit"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
