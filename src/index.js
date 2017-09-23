import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { updateBoard } from './reducers';
import BoardContainer from './Board';

import './index.css';

const store = createStore(updateBoard);

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <BoardContainer />
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
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
