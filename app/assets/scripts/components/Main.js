import React from 'react';
import Aside from './Aside';
import ContentList from '../containers/ContentList';

const App = () => (
    <main className="main">
        <Aside />
        <ContentList />
    </main>
);

export default App;