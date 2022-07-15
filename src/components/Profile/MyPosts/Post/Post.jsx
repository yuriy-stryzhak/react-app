import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRv6dZvShX3_LSqgdJdwYZDL6MsrHYy5tjioGjaSFan1RfjUNJVi_A4PdSC-jUs_VxfDo&usqp=CAU" alt="ava" />
            { props.message }
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;