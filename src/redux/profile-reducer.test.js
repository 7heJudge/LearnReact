import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how r u?', likeCounts: 4},
        {id: 2, message: "It's my first post", likeCounts: 41},
    ]
};

it('reducer should be increment count of the posts', () => {
    const action = addPostActionCreator("React...");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);

})

it('text new post should be React...', () => {
    const action = addPostActionCreator("React...");

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("React...");

})