const checkUserData = (user) => {
    switch (user.username) {
        case 'Jason':
            return 'ADMIN';
        case 'Steve':
            return 'USER';
        default:
            return 'GUEST';
    }
};

const userRole = (state = 'GUEST', action) => {
    switch (action.type) {
        case 'GET_ROLE':
            return checkUserData(action.user);
        default:
            return state;
    }
};

export default userRole;