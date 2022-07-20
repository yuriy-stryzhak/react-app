import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/jcr%3Acontent/main-pars/image/compositing_1408x792.jpg" alt="main-img" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </>
    );
}

export default ProfileInfo;