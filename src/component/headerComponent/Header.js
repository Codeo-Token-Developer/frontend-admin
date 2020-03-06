import React from 'react';
import { HeaderLeft } from './header/HeaderLeft';
import { HeaderRight } from './header/HeaderRight';

const Header = () => {
        return (
            <div>
                <nav className="topbar">
                    
                    <HeaderLeft />
                    <HeaderRight />
                    <ul className="list-unstyled topbar-nav mb-0">

                    </ul>

                </nav>
            </div>
        )
}

export default Header