import React from 'react';
import {Icon} from "../../../Icon";
import styles from './taskmenulist.scss'
import {TaskMenuItem} from "./TaskMenuItem";
import {useDispatch} from "react-redux";
import {DeleteTaskAction, EditTaskAction, AddDurationAction} from "../../../../store/reducer";

interface IProps {
    id: string,
    i: number
}

export function TaskMenuList(props: IProps) {
    const dispatch = useDispatch();
    return (
      <ul className={styles.menu}>
          <TaskMenuItem icon={'plus'} text={'Увеличить'} onClick={() => {dispatch(AddDurationAction(props.id, 25))}}/>
          <TaskMenuItem icon={'minus'} text={'Уменьшить'} onClick={() => {dispatch(AddDurationAction(props.id, -25))}}/>
          <TaskMenuItem icon={'edit'} text={'Редактировать'}  onClick={() => {dispatch(EditTaskAction(props.id))}}/>
          <TaskMenuItem icon={'remove'} text={'Удалить'} onClick={() => {dispatch(DeleteTaskAction(props.id))}}/>
      </ul>
    )
}