const getContent = (url) => {
    switch (url) {
        case 'admin-1':
            return 'aaaaa1';
        case 'admin-2':
            return 'aaaaa2';
    }
};

const toggleContent = (state = '', action) => {
    switch (action.type) {
        case 'TOGGLE_CONTENT':
            return getContent(action.url);
        default:
            return state;
    }
};

export default toggleContent;