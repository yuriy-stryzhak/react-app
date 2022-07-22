import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
        {id: 3, name: 'Name 3'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your life?'},
        {id: 3, message: 'Can\'t complain'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} key={m.id} />);



    return (
        <main className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    { dialogsElements }

                </div>

                <div className={s.messages}>
                    
                    { messagesElements }

                </div>
            </div>

        </main>
    );
}

export default Dialogs;