import * as types from '../constants/ActionTypes';

export function addThread(text) {
  return { type: types.ADD_THREAD, text };
}

export function addReply(index, text) {
  return { type: types.ADD_REPLY, index: index, text: text };
}
