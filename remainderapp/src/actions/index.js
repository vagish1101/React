import ADD_REMAINDER from '../contants';

export function remainder(text) {
    let add_remainder = {
        type: 'ADD_REMAINDER',
        text
    }
    console.log('Action', add_remainder);
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