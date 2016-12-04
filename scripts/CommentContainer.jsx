// @flow
import React from 'react';
import { Container } from 'flux/utils';
import CommentActions from './CommentActions';
import CommentStore from './CommentStore';
import CommentUI from './CommentUI.jsx';
import type { Comment } from './CommentStore';

type State = { comments: Comment[] };
class CommentContainer extends React.Component {
  state: State;
  static getStores() {
    return [ CommentStore ];
  }

  static calculateState(_prevState: State): State {
    const comments = CommentStore.getState();
    return { comments };
  }

  constructor(props: any) {
    super(props);
    this.state = { comments: [] };
  }

  handleCreateComment(comment: string) {
    CommentActions.create(comment);
  }

  handleDeleteComment(id: number) {
    CommentActions.delete(id);
  }

  render() {
    return (
      <CommentUI
        comments={this.state.comments}
        onCreate={this.handleCreateComment.bind(this)}
        onDelete={this.handleDeleteComment.bind(this)}
      />
    );
  }
}

export default Container.create(CommentContainer);
