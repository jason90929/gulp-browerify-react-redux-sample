import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoFilter from './TodoFilter';

import About from './About';

const getContent = (content) => {
    switch (content) {
        case 'INDEX':
            return (
                <div>
                    <AddTodo />
                    <VisibleTodoList />
                    <TodoFilter />
                </div>
            );
        case 'ABOUT':
            return (
                <About />
            );
        case 'CONTACT':
            return (
                'Contact'
            );
        case 'PORTFOLIO':
            return (
                'Portfolio'
            );
        default:
            return (
                ''
            );
    }
};

const Content = ({ content }) => {
    return (
        <section className="content">
            {getContent(content)}
        </section>
    );
};

export default Content;