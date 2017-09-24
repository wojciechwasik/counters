export const CLICK_BOARD = 'CLICK_BOARD';
export const CLEAR_BOARD = 'CLEAR_BOARD';
export const FIELD_CHANGE = 'FIELD_CHANGE';
export const FORM_SUBMIT = 'FORM_SUBMIT';

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

export function fieldChange(formId, fieldId, value) {
  return {
    type: FIELD_CHANGE,
    formId,
    fieldId,
    value
  };
}

export function formSubmit(formId) {
  return {
    type: FORM_SUBMIT,
    formId
  };
}
