// const getContent = (url) => {
//     switch (url) {
//         case 'admin-1':
//             return 'admin-1';
//         case 'admin-2':
//             return 'admin-2';
//     }
// };

const getContent = (state = '', action) => {
    switch (action.type) {
        case 'GET_CONTENT':
            // return getContent(action.url);
            return 'admin-1';
        default:
            return state;
    }
};

export default getContent;