import nanoid from 'nanoid';

const ADD_BOARD = 'ADD_BOARD';

export const addBoard = boardName => ({
    type: ADD_BOARD,
    payload: {
        id: nanoid(),
        title: boardName,
    },
});

const INITIAL_STATE = [];

const boards = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_BOARD:
            return state.concat(action.payload);
        default:
            return state;
    }
};

export default boards;