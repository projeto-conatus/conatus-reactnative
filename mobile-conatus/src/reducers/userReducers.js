export const initialState = {
    avatar: '',
};

export const useReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            return {...state, avatar: action.payload.avatar};
            break;
            default:
                return state;
    }
}