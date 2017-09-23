import { CLICK_BOARD, CLEAR_BOARD } from './actions.es6';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function* toggle(squares, index, player) {
  for (let i = 0; i < squares.length; i++) {
    yield (i === index ? player : squares[i]);
  }
}

const INITIAL_STATE = {
  squares: Array(9).fill(null),
  player: 'X',
  winner: null
};

export function updateBoard(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CLICK_BOARD:
      if (state.winner || state.squares[action.index])
        return state;
      const squares = [ ...toggle(state.squares, action.index, state.player) ];
      return {
        squares,
        player: state.player === 'X' ? 'O' : 'X',
        winner: calculateWinner(squares)
      };

    case CLEAR_BOARD:
      return INITIAL_STATE;

    default:
      return state;
  }
}
