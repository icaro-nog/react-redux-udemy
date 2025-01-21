import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = props => {
   return (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to={'/'} >Início</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={'/param/123'} >Param #01</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={'/param/legau'} >Param #02</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={'/about'} >Sobre</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={'/naoExiste'} >Não existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
   ) 
}

export default Menu;