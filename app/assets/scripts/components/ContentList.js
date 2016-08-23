import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import Content from './Content';

const getContents = (content) => {
    switch (content) {
        case 'admin-1':
            return 'todos';
        case 'admin-2':
            return 'others';
    }
};

const mapStateToProps = (state) => {
    return {
        content: getContents(state.toggleContent)
    };
};

const ContentList = connect(
    mapStateToProps
)(Content);

export default ContentList;