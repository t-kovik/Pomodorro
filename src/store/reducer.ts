import {ActionCreator, Reducer} from "redux";
import { v4 as uuidv4 } from 'uuid';
import {makeLogger} from "ts-loader/dist/logger";

export interface ITask {
    id: string;
    name: string;
    isEditting: boolean,
    duration: number
}

export type RootState = {
    tasks: Array<ITask>
}


const initialState: RootState = {
    tasks: [
        {
            id: uuidv4(),
            name: 'Сверстать сайт',
            isEditting: false,
            duration: 25
        },
        {
            id: uuidv4(),
            name: 'Сделать анимацию',
            isEditting: false,
            duration: 50
        },
    ]
}

export const ADD_TASK = 'ADD_TASK';
export type AddTaskAction = {
    type: typeof ADD_TASK;
    data: ITask,
}
export const AddTask: ActionCreator<AddTaskAction> = (data) => ({
    type: ADD_TASK,
    data,
})

export const DELETE_TASK = 'DELETE_TASK';
export type DeleteTaskAction = {
    type: typeof DELETE_TASK;
    id: ITask['id'],
}
export const DeleteTaskAction: ActionCreator<DeleteTaskAction> = (id) => ({
    type: DELETE_TASK,
    id,
})

export const EDIT_TASK = 'EDIT_TASK';
export type EditTaskAction = {
    type: typeof EDIT_TASK;
    id: ITask['id']
}
export const EditTaskAction: ActionCreator<EditTaskAction> = (id) => ({
    type: EDIT_TASK,
    id
})

export const UPDATE_TASK = 'UPDATE_TASK';
export type UpdateTaskAction = {
    type: typeof UPDATE_TASK;
    id: ITask['id'],
    name: ITask['name']
}
export const UpdateTaskAction: ActionCreator<UpdateTaskAction> = (id, name) => ({
    type: UPDATE_TASK,
    id,
    name
})

export const ADD_DURATION = 'ADD_DURATION';
export type AddDurationAction = {
    type: typeof ADD_DURATION;
    id: ITask['id'],
    duration: ITask['duration']
}
export const AddDurationAction: ActionCreator<AddDurationAction> = (id, duration) => ({
    type: ADD_DURATION,
    id,
    duration
})

type MyAction = AddTaskAction | DeleteTaskAction | EditTaskAction | UpdateTaskAction | AddDurationAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {id: uuidv4(), name: action.data.name, isEditting: false, duration: 25}]
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(item => item.id !== action.id)],
            }

        case EDIT_TASK:
            return {
                tasks: state.tasks.map(task => task.id === action.id ? { ...task, isEditting: !task.isEditting } : task)
            }

        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.id ? { ...task, name: action.name } : task)
            }

        case ADD_DURATION:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.id ? { ...task, duration: task.duration + action.duration } : task)
            }

        default:
            return state;
    }
}