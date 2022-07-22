import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <main>
            <ProfileInfo />
            
            <MyPosts state={props.state} />
        </main>
    );
}

export default Profile;