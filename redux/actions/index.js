import * as types from '../actionTypes/index';

export const addTodoData = payload => {
    return ({
        type: types.ADD_TO_DO,
        payload,
      });
};

export const setEditToDoTask = payload => {
  return ({
      type: types.SET_EDIT_TASK,
      payload,
    });
};

export const editToDoTask = payload => {
  // console.warn(payload.enteredTask);
  return ({
      type: types.EDIT_TO_DO,
      payload,
    });
};

export const markToDoTaskComplete = payload => {
  // console.warn(payload.status);
  return ({
      type: types.MARK_TO_DO_DONE,
      payload,
    });
};

export const deleteToDoTask = payload => {
    // console.warn(payload);
    return ({
        type: types.DELETE_TO_DO,
        payload,
      });
};