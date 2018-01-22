const intialState = {
    angular: 0,
    react: 0,
    vuejs: 0
}

export default (state = intialState, action) => {
    switch (action.type) {
        case 'VOTE_REACT':
            console.log(state);
            return Object.assign({}, state, {
                react: state.react + 1
            })
        case 'VOTE_ANGULAR':
            debugger;
            console.log(state);
            return Object.assign({}, state, {
                angular: state.angular + 1
            })
        case 'VOTE_VUE':
            console.log(state);
            return Object.assign({}, state, {
                vuejs: state.vuejs + 1
            })
        default:
            debugger
            return state
    }
}