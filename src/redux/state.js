
let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15 },
            {id: 2, message: 'It\'s my first post', likesCount: 32 },
        ],
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Name 1'},
            {id: 2, name: 'Name 2'},
            {id: 3, name: 'Name 3'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your life?'},
            {id: 3, message: 'Can\'t complain'}
        ]
    },

    
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;