const adminMenu = [
    {
        url: undefined,
        text: '管理者的選單1'
    },
    {
        url: undefined,
        text: '管理者的選單2'
    }
];

const userMenu = [
    {
        url: undefined,
        text: '使用者的選單1'
    },
    {
        url: undefined,
        text: '使用者的選單2'
    }
];

const guestMenu = [
    {
        url: undefined,
        text: '訪客的選單1'
    },
    {
        url: undefined,
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

const menuList = (state = 'GUEST', action) => {
    switch (action.type) {
        case 'GET_MENU_LIST':
            return menus(action.role);
        default:
            return menus();
    }
};

export default menuList;