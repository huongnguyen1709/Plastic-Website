import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-wrap">
                <a href="#" className="brand-logo logo">Logo</a>
                <ul class="right">
                    <li><a href="#" className=" navbar__item">Sản Phẩm</a></li>
                    <li><a href="#" className=" navbar__item">Liên Hệ</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;