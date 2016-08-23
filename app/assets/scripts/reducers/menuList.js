const adminMenu = [
    {
        url: 'admin-1',
        text: '管理者的選單1'
    },
    {
        url: 'admin-2',
        text: '管理者的選單2'
    }
];

const userMenu = [
    {
        url: 'user-1',
        text: '使用者的選單1'
    },
    {
        url: 'user-2',
        text: '使用者的選單2'
    }
];

const guestMenu = [
    {
        url: 'guest-1',
        text: '訪客的選單1'
    },
    {
        url: 'guest-2',
        text: '訪客的選單2'
    }
];

const menus = (role = 'GUEST') => {
    switch (role) {
        case 'ADMIN':
            return adminMenu;
        case 'USER':
            return userMenu;
        case 'GUEST':
        default:
            return guestMenu;
    }
};

const menuList = (state = [], action) => {
    switch (action.type) {
        case 'GET_MENU_LIST':
            return menus(action.role);
        default:
            return state;
    }
};

export default menuList;