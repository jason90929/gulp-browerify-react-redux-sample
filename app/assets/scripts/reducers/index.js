import { combineReducers } from 'redux';
import todos from './todos';
import userRole from './userRole';
import visibilityFilter from './visibilityFilter';
import menuList from './menuList';
import toggleContent from './toggleContent';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    userRole,
    menuList,
    toggleContent
});

export default todoApp;