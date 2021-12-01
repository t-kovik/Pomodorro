import React, {ChangeEvent, useState} from 'react';
import styles from './taskitemcontent.scss'
import {useDispatch, useSelector} from "react-redux";
import {EditTaskAction, ITask, RootState, UpdateTaskAction} from "../../../../store/reducer";

interface IProps {
    content: string,
    index: number,
    id: string
}

export function TaskItemContent(props: IProps) {
    const [value, setValue] = useState(props.content);
    const dispatch = useDispatch();

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setValue(ev.target.value);

    }
    const tasks = useSelector<RootState, Array<ITask>>(state => state.tasks);
    return (
        <div>
            { tasks[props.index].isEditting ?
                <div>
                    <input className={styles.input} type='text' value={value} onChange={handleChange} />
                    <button className={styles.button} onClick={() => {
                        dispatch(UpdateTaskAction(props.id, value))
                        dispatch(EditTaskAction(props.id))
                    }}>Готово</button>
                </div>
                :  <span>{props.content}</span>}
        </div>
        )

}