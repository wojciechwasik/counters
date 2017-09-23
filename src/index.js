import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { clickBoard, clearBoard } from './actions';
import { updateBoard } from './reducers';

import './index.css';

const store = createStore(updateBoard);

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  unsubscribe = null;

  constructor(props) {
    super(props);
    console.log('setting initial state');
    this.state = store.getState();
  }

  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]} onClick={() => store.dispatch(clickBoard(i))} />
    );
  }

  componentDidMount() {
    console.log('subscribing to store updates');
    this.unsubscribe = store.subscribe(() => this.updateState());
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      console.log('unsubscribing from store');
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  updateState() {
    this.setState(store.getState());
  }

  render() {
    if (!this.state) {
      console.log('skipping render');
      return null;
    }

    let status;
    if (this.state.winner) {
      status = 'Winner: ' + this.state.winner;
    } else {
      status = 'Next player: ' + this.state.player;
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
