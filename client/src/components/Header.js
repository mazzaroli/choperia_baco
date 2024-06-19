// Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/menu">Menú</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    {/* Otros enlaces según necesidad */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
