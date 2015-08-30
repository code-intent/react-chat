import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageBox from '../components/MessageBox';
import Threads from '../components/Threads';
import * as ThreadActions from '../actions/threads';

class Chat extends Component {
  render() {
    const { threads, dispatch } = this.props;
    const actions = bindActionCreators(ThreadActions, dispatch);

    return (
      <div id='chat-container'>
        <div id='chat-head'>
          <span id='chat-head-title'>What&#39;s happening?</span>
          <span id='chat-head-icon'><i className='fa fa-comment-o'></i></span>
        </div>
        <MessageBox addThread={actions.addThread} />
        <Threads threads={threads} addReply={actions.addReply} />
      </div>
    );
  }
}

function select(state) {
  return {
    threads: state.threads,
  };
}

export default connect(select)(Chat);
