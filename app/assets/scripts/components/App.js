import React from 'react';
import Header from './Header';
import VisibleMenuList from '../containers/VisibleMenuList';
import ContentList from './ContentList';

const App = () => (
    <div>
        <Header />
        <VisibleMenuList />
        <ContentList />
    </div>
);

export default App;