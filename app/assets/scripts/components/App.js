import React from 'react';
import Header from './Header';
import Aside from './Aside';
import ContentList from '../containers/ContentList';
import Footer from './Footer';

const App = () => (
    <div>
        <Header />
        <Aside />
        <ContentList />
        <Footer />
    </div>
);

export default App;