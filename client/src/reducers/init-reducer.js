export default (state = false, action) => {
    switch (action.type) {
        case 'INIT_RECEIVED':
        case 'INIT_ERR':
            return action.payload     
        default:
            return state
    }
}