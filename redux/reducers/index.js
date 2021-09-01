import {
    ADD_TO_DO,
    EDIT_TO_DO,
    DELETE_TO_DO,
    SET_EDIT_TASK
} from '../actionTypes/index';
import uuid from 'react-uuid';

const initialState = {
    loading:false,
    todo:[],
    editTaskId: ""
};

const differentOperationsTODOReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return {
                ...state,
                todo: [...state.todo, {id: uuid(), taskName:action.payload, completed: false}]
            };
        case SET_EDIT_TASK:
            return {
                ...state,
                todo: state.todo,
                editTaskId: action.payload
            }; 
        case EDIT_TO_DO:
            console.log("Here");
            return {
                ...state,
                todo: state.todo.map( (item) => {
                                                    if(item.id === action.payload.id){
                                                        item.taskName = action.payload.enteredTask;
                                                    }
                                                    return item;
                                                }),
                editTaskId: "",
            };
        case DELETE_TO_DO:
            return {
                ...state,
                todo: state.todo.filter( (task) => {
                            return task.id !== action.payload;
                        })
            };
        default:
            return state;
    }
}
export default differentOperationsTODOReducer;