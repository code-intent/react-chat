import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageBox from '../components/MessageBox';
import Threads from '../components/Threads'
import * as ThreadActions from '../actions/threads';

class Chat extends Component {
  render() {
    const { threads, dispatch } = this.props;
    const actions = bindActionCreators(ThreadActions, dispatch);

    return (
      <div id="chat-container">
        <div id="chat-head">
          <h2>Chat</h2>
        </div>
        <MessageBox addThread={actions.addThread} />
        <Threads threads={threads} actions={actions} />
      </div>
    );
  }
}

function select(state) {
  return {
    threads: state.threads
  };
}

export default connect(select)(Chat);
