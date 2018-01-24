import ADD_REMAINDER from '../contants';

function remainder(a) {
    return {
        text: a.text,
        id: Math.random()
    }
}

const remainders = ( state = [] , action ) => {
    let reminders = null;
    switch (action.type) {
        case 'ADD_REMAINDER':
            debugger
            reminders = [...state , remainder(action)]
            return reminders
        case 'REMOVE_REMAINDER':
            console.log('removed')
        default:
            debugger
            return state;
    }
}

export default remainders