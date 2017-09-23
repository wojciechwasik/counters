export const CLICK_BOARD = 'CLICK_BOARD';
export const CLEAR_BOARD = 'CLEAR_BOARD';

export function clickBoard(index) {
  return {
    type: CLICK_BOARD,
    index
  };
}

export function clearBoard() {
  return {
    type: CLEAR_BOARD
  };
}
