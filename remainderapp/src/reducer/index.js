import ADD_REMAINDER from '../contants';

function remainder(a) {
    return {
        type: a.type,
        id: Math.random(),
        test: 'Vagish'
    }
}

const remainders = ( state = [] , action ) => {

    let remainders = null;
    switch (action.type) {
        case 'ADD_REMAINDER':
            debugger
            remainders = [...state , remainder(action)]
            return remainders
        case 'REMOVE_REMAINDER':
            console.log('removed')
        default:
            debugger
            return state;
    }
}

export default remainders