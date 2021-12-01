// import React, {useState} from 'react';
// import styles from './taskform.scss'
//
// export function TaskForm(value: string, setValue: React.Dispatch<React.SetStateAction<string[]>>, tasks: string[], setTasks) {
//
//     const clickHandler = (ev: any) => {
//         ev.preventDefault();
//         if (!value) return;
//         const newTasks = [...tasks, value]
//         setTasks(newTasks);
//         setValue('');
//     }
//     return (
//         <form className={styles.taskform}>
//             <input className={styles.input}
//                    type="text"
//                    placeholder={'Название задачи'}
//                    value={value}
//                    onChange={(ev) => setValue(ev.target.value)}/>
//             <button className={styles.button} onClick={clickHandler}>Добавить</button>
//         </form>
//     )
// }