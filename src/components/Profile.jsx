import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/jcr%3Acontent/main-pars/image/compositing_1408x792.jpg" alt="main-img" />
            </div>
        </main>
    );
}

export default Profile;