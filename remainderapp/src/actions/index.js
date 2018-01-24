import ADD_REMAINDER from '../contants';

export function addremainder(text) {
    let add_remainder = {
        type: 'ADD_REMAINDER',
        text
    }
    debugger;
    return add_remainder
}
export function removeReminder(text) {
    let remove_remainder = {
        type: 'remove_REMAINDER',
        text
    }
    console.log('Action', remove_remainder);
    return remove_remainder
}