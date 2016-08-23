import { connect } from 'react-redux';
import { toggleContent } from '../actions';
import MenuList from '../components/MenuList';

const mapStateToProps = (state) => {
    return {
        menus: state.menuList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMenuClick: (url) => {
            dispatch(toggleContent(url));
        }
    };
};

const VisibleMenuList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuList);

export default VisibleMenuList;