import React, {ChangeEvent, useState} from 'react';
import styles from './tasksboard.scss'
import {TasksList} from "./TasksList";
import {TaskItem} from "./TaskItem";
import {InstructionList} from "./InstructionList";
import {useDispatch, useSelector} from "react-redux";
import {AddTask, ITask, RootState} from "../../store/reducer";

export function TasksBoard() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector<RootState, Array<ITask>>(state => state.tasks);

    const clickHandler = (ev: any) => {
        ev.preventDefault();
        if (!value) return;
        dispatch(AddTask({name: value}))
        setValue('');
    }

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setValue(ev.target.value);
    }

    let initialValue = 0;

    return (
        <div className={styles.tasksboard}>
            <InstructionList/>
            <form className={styles.taskform}>
                <input className={styles.input}
                       type="text"
                       placeholder={'Название задачи'}
                       value={value}
                       onChange={handleChange}/>
                <button className={styles.button} onClick={clickHandler}>Добавить</button>
            </form>

            <TasksList>
                {tasks.map((item, index) => (
                        <TaskItem id={item.id} key={index} i={index} content={item.name}/>
                    )
                )}
            </TasksList>
            <div className={styles.duration}>{tasks.reduce((accum, currentValue) => accum + currentValue.duration, initialValue)} мин.</div>
        </div>
    )
}