import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink className={({ isActive }) => isActive ? `${s.active}` : undefined} to={`/dialogs/${props.id}`} >{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <main className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    <DialogItem name="Name 1" id="1" />
                    <DialogItem name="Name 2" id="2" />
                    <DialogItem name="Name 3" id="3" />

                </div>

                <div className={s.messages}>
                    <Message message="Hi" />
                    <Message message="How is your life?" />
                    <Message message="Can't complain" />
                </div>
            </div>

        </main>
    );
}

export default Dialogs;