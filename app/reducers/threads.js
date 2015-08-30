import { ADD_THREAD, ADD_REPLY } from '../constants/ActionTypes';
import { List } from 'immutable';

const initialState = List([
    List([
      {user: {name: 'Master Yoda', avatar: './app/images/yoda.png'}, text: 'Premonitions, premonitions. These visions you have...'},
      {user: {name: 'Anakin Skywalker', avatar: './app/images/anakin.png'}, text: 'They are of pain, suffering. Death.'},
      {user: {name: 'Master Yoda', avatar: './app/images/yoda.png'}, text: 'Yourself you speak of, or someone you know? '},
    ]),
    List([
      {user: {name: 'Anakin Skywalker', avatar: './app/images/anakin.png'}, text: 'The traitors have been taken care of, Lord Sidious.'},
      {user: {name: 'Darth Sidious', avatar: './app/images/sidious.png'}, text: 'Good... Good... you have done well, my apprentice. Now Lord Vader, go and bring peace to the Empire.'},
    ]),
]);

export default function threads(state = initialState, action) {
  switch (action.type) {
  case ADD_THREAD:
    let thread = List([
        {user: {name: 'Master Yoda', avatar: './app/images/yoda.png'}, text: action.text },
    ]);
    return state.unshift(thread);

  case ADD_REPLY:
    let message = {user: {name: 'Master Yoda', avatar: './app/images/yoda.png'}, text: action.text};
    let messages = state.get(action.index).push(message);
    return state.set(action.index, messages);
  default:
    return state;
  }
}
