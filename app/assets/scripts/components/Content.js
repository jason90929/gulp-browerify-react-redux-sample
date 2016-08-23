import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const Content = ({ content }) => {
    switch (content) {
        case 'todos':
            return (
                <section className="content">
                    <AddTodo />
                    <VisibleTodoList />
                </section>
            );
        case 'others':
            return (
                <section className="content">
                    HAHAHA
                </section>
            );
        default:
            return (
                <section className="content">
                </section>
            );
    }
};

Content.propTypes = {

};

export default Content;