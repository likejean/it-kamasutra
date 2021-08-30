import profileReducer, {addPostCreator, deletePostCreator} from "./profileReducer";

it('length of posts be incremented', () => {
    let action = addPostCreator("bible.com")
    const state = {
        posts: [
            {id: 1, message: 'Great! Samurai 2.0!', likes: 24},
            {id: 2, message: 'I love it!!!', likes: 45},
            {id: 3, message: 'This tutorial is awesome!', likes: 452}
        ]
    };
    // 2.action
    let newState = profileReducer(state, action);

    // 3.expectation
    expect(newState.posts.length).toBe(4);

});


it('message of new post should bible.com', () => {
    let action = addPostCreator("bible.com")
    const state = {
        posts: [
            {id: 1, message: 'Great! Samurai 2.0!', likes: 24},
            {id: 2, message: 'I love it!!!', likes: 45},
            {id: 3, message: 'This tutorial is awesome!', likes: 452}
        ]
    };
    // 2.action
    let newState = profileReducer(state, action);

    // 3.expectation

    expect(newState.posts[3].message).toBe('bible.com');
});

it('length of messages should be decremented by deletion', () => {
    let action = deletePostCreator(2)
    const state = {
        posts: [
            {id: 1, message: 'Great! Samurai 2.0!', likes: 24},
            {id: 2, message: 'I love it!!!', likes: 45},
            {id: 3, message: 'This tutorial is awesome!', likes: 452}
        ]
    };
    // 2.action
    let newState = profileReducer(state, action);

    // 3.expectation

    expect(newState.posts.length).toBe(2);
});



