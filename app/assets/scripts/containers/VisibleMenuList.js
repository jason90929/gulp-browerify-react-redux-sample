import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import MenuList from '../components/MenuList';

const mapStateToProps = (state) => {
    return {
        menus: state.menuList
    };
};

const VisibleMenuList = connect(
    mapStateToProps
)(MenuList);

export default VisibleMenuList;