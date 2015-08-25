import { ADD_THREAD, DELETE_THREAD, EDIT_MESSAGE } from '../constants/ActionTypes';

const initialState = [
  {id: 1, messages: [
    {id: 1, user: {id: 1, name: "Master Yoda", avatar: ""}, text: "Premonitions, premonitions. These visions you have..."},
    {id: 2, user: {id: 2, name: "Anakin Skywalker", avatar: ""}, text: "They are of pain, suffering. Death."},
    {id: 3, user: {id: 1, name: "Master Yoda", avatar: ""}, text: "Yourself you speak of, or someone you know? "},
  ]},
  {id: 2, messages: [
    {id: 1, user: {id: 2, name: "Anakin Skywalker", avatar: ""}, text: "The traitors have been taken care of, Lord Sidious."},
    {id: 2, user: {id: 3, name: "Darth Sidious", avatar: ""}, text: "Good... Good... you have done well, my apprentice. Now Lord Vader, go and bring peace to the Empire."}
  ]}
];

export default function threads(state = initialState, action) {
  switch (action.type) {
  case ADD_THREAD:
    return [{
      id: state.reduce((maxId, thread) => Math.max(thread.id, maxId), -1) + 1,
      completed: false,
      text: action.text
    }, ...state];

  case DELETE_THREAD:
    return state.filter(thread =>
      thread.id !== thread.id
    );

  case EDIT_MESSAGE:
    return state;

  default:
    return state;
  }
}
