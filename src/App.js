import React from 'react';
import './sass/main.scss'

import Header from './components/MainPage/Header/Header';
import NewProducts from './components/MainPage/NewProducts';
import Review from './components/MainPage/Review';
import Contact from './components/MainPage/Contact';
import Footer from './components/MainPage/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <NewProducts />
            <Review />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
