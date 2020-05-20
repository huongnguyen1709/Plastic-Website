import React from 'react'
import NavBar from './NavBar/NavBar'
import chaivuong320 from '../../../Assets/imgs/background/chai-vuong-320ml.jpg'
import chaivuonglun300 from '../../../Assets/imgs/background/chai-vuông-lùn-300ml.jpg'
import tron250 from '../../../Assets/imgs/background/tròn-250m.jpg'

const Header = () => {
    return (
        <section className="section-header">
            <NavBar />
            <h1 className="heading-1">Tran Truc</h1>
            <figure className="gallery__item--1">
                <img src={chaivuong320} alt="chai vuông 320ml" className="gallery__img" />
            </figure>
            <figure className="gallery__item--2">
                <img src={chaivuonglun300} alt="chai vuông lùn 300ml" className="gallery__img" />
            </figure>
            <figure className="gallery__item--3">
                <img src={tron250} alt="tròn 250ml" className="gallery__img" />
            </figure>
        </section>
    );
}

export default Header;