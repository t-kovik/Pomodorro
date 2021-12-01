import React, {useEffect, useState} from 'react';
import styles from './tomato.scss'
import {useSelector} from "react-redux";
import {ITask, RootState} from "../../store/reducer";

export function Tomato() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(7);
    const [isActive, setIsActive] = useState(false);
    const [buttonStart, setButtonStart] = useState('Старт');
    const [buttonStop, setButtonStop] = useState('Стоп');
    const [isBreak, setIsBreak] = useState(false);
    let [taskId, setTaskId] = useState(0);
    const tasks = useSelector<RootState, Array<ITask>>(state => state.tasks);

    const settingTimer = (sec = 7, min = 0) => {
        setIsActive(!isActive);
        setIsBreak(!isBreak);
        setSeconds(sec);
        setMinutes(min);
        setButtonStart('Старт');
        setButtonStop('Стоп');
    }


    const toggle = () => {
        setIsActive(!isActive);
        if (!isActive) {
            setButtonStart('Пауза');
            setButtonStop('Стоп');
        } else if (isActive && !isBreak) {
            setButtonStart('Продолжить');
            setButtonStop('Сделано');
        } else {
            setButtonStart('Продолжить');
            setButtonStop('Пропустить');
        }
    }
    let interval: any = null;

    const reset = () => {
        clearInterval(interval);
        if (isActive) {
            setIsActive(!isActive);
        }
        setSeconds(7);
        setMinutes(0);
        setButtonStart('Старт');
        setButtonStop('Стоп');
    }

    useEffect(() => {
        if (isActive) {
            interval = setInterval(() => {
                clearInterval(interval);
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else if (isActive && isBreak) {
                        settingTimer();
                        setTaskId(++taskId);
                    } else {
                        settingTimer(5);
                        if (minutes === 0 && seconds === 0 && !isActive) {
                            setIsBreak(!isBreak);
                            setSeconds(7);
                            setMinutes(0);
                        }
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000)
        }

    }, [isActive, isBreak, seconds, taskId])

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div>
            {
                tasks.length !== 0 && (
                    <div className={styles.tomato}>
                        <div className={isActive ? `${styles.tomatoheader} active` : styles.tomatoheader}>
                            <div className={styles.description}>{tasks[taskId].name}</div>
                            <div className={styles.name}>{!isBreak ? `Помидор ${taskId + 1}` : `Перерыв ${taskId + 1}`}</div>
                        </div>
                        <div className={styles.tomatotimer}>
                            <div className={styles.timer}>{timerMinutes}:{timerSeconds}</div>
                            {!isBreak ?
                            <div className={styles.task}><span
                                className={styles.textGray}>
                                {`Задача ${taskId + 1}`}</span> - {tasks[taskId].name}</div> : <div className={styles.break}>ПЕРЕРЫВ</div>}
                            <div className={styles.buttons}>
                                <button className={styles.start}
                                        onClick={toggle}>{buttonStart}</button>
                                <button className={styles.stop}
                                        onClick={reset}>{buttonStop}</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}