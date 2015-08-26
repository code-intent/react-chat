import * as types from '../constants/ActionTypes';

export function addThread(text) {
  return { type: types.ADD_THREAD, text };
}

export function addReply(threadId, text) {
  return { type: types.ADD_REPLY, threadId: threadId, text: text }
}
