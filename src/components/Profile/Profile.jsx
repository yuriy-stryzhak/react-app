import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <main>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/jcr%3Acontent/main-pars/image/compositing_1408x792.jpg" alt="main-img" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </main>
    );
}

export default Profile;