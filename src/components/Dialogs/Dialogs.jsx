import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} key={m.id} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (

        <main className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    { dialogsElements }

                </div>

                <div className={s.messages}>
                    
                    { messagesElements }

                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={ addMessage }>Add message</button>

                </div>
            </div>

        </main>
    );
}

export default Dialogs;