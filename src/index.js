import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { updateBoard } from './reducers';
import BoardContainer from './Board';
import RedditFormContainer from './RedditForm';

import './index.css';

const store = createStore(updateBoard, applyMiddleware(logger));

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
    <div>
      <Game />
      <RedditFormContainer formId="reddit" />
    </div>
  </Provider>,
  document.getElementById('root')
);
