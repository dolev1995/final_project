export default (state = false, action) => {
    switch (action.type) {
            case 'USER_RECEIVED':
                    return action.payload;               
            default:
                    return state;
    }
}