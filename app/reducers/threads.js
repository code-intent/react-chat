import { ADD_THREAD, ADD_REPLY } from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.List([
  {
    id: 0,
    messages: Immutable.List([
      {id: 1, user: {id: 1, name: "Master Yoda", avatar: "./app/images/yoda.png"}, text: "Premonitions, premonitions. These visions you have..."},
      {id: 2, user: {id: 2, name: "Anakin Skywalker", avatar: "./app/images/anakin.png"}, text: "They are of pain, suffering. Death."},
      {id: 3, user: {id: 1, name: "Master Yoda", avatar: "./app/images/yoda.png"}, text: "Yourself you speak of, or someone you know? "}
    ])
  },
  {
    id: 1,
    messages: Immutable.List([
      {id: 1, user: {id: 2, name: "Anakin Skywalker", avatar: "./app/images/anakin.png"}, text: "The traitors have been taken care of, Lord Sidious."},
      {id: 2, user: {id: 3, name: "Darth Sidious", avatar: "./app/images/sidious.png"}, text: "Good... Good... you have done well, my apprentice. Now Lord Vader, go and bring peace to the Empire."}
    ])
  }
]);

export default function threads(state = initialState, action) {
  switch (action.type) {
  case ADD_THREAD:
    let thread = {
      id: state.reduce((maxId, thread) => Math.max(thread.id, maxId), -1) + 1,
      messages: Immutable.List([{id: 1, user: {id: 1, name: "Master Yoda", avatar: "./app/images/yoda.png"}, text: action.text }])
    }
    return state.unshift(thread);

  case ADD_REPLY:
    let message = {id: length, user: {id: 1, name: "Master Yoda", avatar: "./app/images/yoda.png"}, text: action.text};
    return state.set(action.threadId, {id: action.threadId, messages: state.get(action.threadId).messages.push(message)});
  default:
    return state;
  }
}
