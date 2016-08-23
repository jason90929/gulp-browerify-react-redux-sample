import React from 'react';
import Header from './Header';
import VisibleMenuList from '../containers/VisibleMenuList';
import Content from './Content';

const App = () => (
    <div>
        <Header />
        <VisibleMenuList />
        <Content />
    </div>
);

export default App;