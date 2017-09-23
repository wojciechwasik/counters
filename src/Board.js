import React from 'react';
import { connect } from 'react-redux';

import { clickBoard, clearBoard } from './actions';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]} onClick={() => this.props.onSquareClick(i)} />
    );
  }

  render() {
    let status;
    if (this.props.winner) {
      status = 'Winner: ' + this.props.winner;
    } else {
      status = 'Next player: ' + this.props.player;
    }

    let sampleList = [1, 2, 3, 4, 5].map(i => <li key={i}>{i}</li>);

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <ul>{sampleList}</ul>
      </div>
    );
  }
}

const BoardContainer = connect(
  state => {
    return { ...state };
  },
  dispatch => {
    return {
      onSquareClick: index => dispatch(clickBoard(index))
    };
  }
)(Board);

export default BoardContainer;
