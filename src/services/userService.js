export const userService = {
    getUser,
}

function getUser() {
    return {
        name: 'Gilad Sterman',
        balance: 100,
        transactions: []
    }
}