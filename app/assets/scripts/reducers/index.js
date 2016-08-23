import { combineReducers } from 'redux';
import todos from './todos';
import userRole from './userRole';
import visibilityFilter from './visibilityFilter';
// import menuList from './menuList';
import getContent from './getContent';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    userRole,
    // menuList,
    getContent
});

export default todoApp;