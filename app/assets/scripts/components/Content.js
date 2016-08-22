import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const Content = () => (
    <section className="content">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </section>
);

export default Content;