// @flow

import { ReduceStore } from 'flux/utils';
import type { ActionTypes } from './CommentActions';
import Dispatcher from './Dispatcher';

export type Comment = {id: number, comment: string };
export type State = Comment[];

let count = 0; // 今回はサーバ通信しないため、ここでIDを降る

class CommentStore extends ReduceStore<State> {
  getInitialState(): State {
    return [];
  }

  reduce(state: State, action: ActionTypes): State {
    switch (action.type) {
    case 'create':
      return state.concat({ id: ++count, comment: action.comment });
    case 'delete':
      const deleteId = action.id;
      return state.filter((v) => v.id !== deleteId);
    default:
      return state;
    }
  }
}

const instance = new CommentStore(Dispatcher);

export default instance;
