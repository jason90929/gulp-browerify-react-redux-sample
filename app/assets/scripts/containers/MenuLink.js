import { connect } from 'react-redux';
import { getContent } from '../actions';
import Menu from '../components/Menu';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(getContent(ownProps.filter))
        }
    };
};

const MenuLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuLink;