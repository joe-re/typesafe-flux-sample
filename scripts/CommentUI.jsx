// @flow

import React from 'react';
import type { Comment } from './CommentStore';

function CommentLine(props: { comment: Comment, onDelete: (id: number) => void }) {
  return (
    <li>
      {props.comment.comment}
      <button onClick={() => props.onDelete(props.comment.id)}>delete</button>
    </li>
  );
}

type Props = {
  onCreate: (comment: string) => void,
  onDelete: (id: number) => void,
  comments: Comment[]
};
export default class CommentUI extends React.Component {
  props: Props;
  state: { input: string };
  constructor(props: Props) {
    super(props);
    this.state = { input: '' };
  }

  handleChangeInput(e: SyntheticEvent) {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      this.setState({ input: target.value });
    }
  }

  render() {
    const lines = this.props.comments.map(v => <CommentLine comment={v} onDelete={this.props.onDelete} />);
    return (
      <div className="comment-ui">
        <input value={this.state.input} onChange={this.handleChangeInput.bind(this)}/>
        <button
          onClick={() => {
            this.props.onCreate(this.state.input);
            this.setState({ input: '' });
          }}>create</button>
        <ul>{lines}</ul>
      </div>
    );
  }
}
