import * as types from '../constants/ActionTypes';

export function addThread(text) {
  return { type: types.ADD_THREAD, text };
}

export function deleteThread(id) {
  return { type: types.DELETE_THREAD, id };
}

export function editMessage(id, text) {
  return { type: types.EDIT_MESSAGE, id, text };
}
