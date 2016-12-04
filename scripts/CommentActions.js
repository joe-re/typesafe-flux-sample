// @flow

import Dispatcher from './Dispatcher';

type CREATE = { type: 'create', comment: string };
type DELETE = { type: 'delete', id: number };
export type ActionTypes = CREATE | DELETE;

function dispatch(params: ActionTypes) {
  Dispatcher.dispatch(params);
}

export default {
  create(comment: string) {
    dispatch({ type: 'create', comment });
  },
  delete(id: number) {
    dispatch({ type: 'delete', id });
  }
};

