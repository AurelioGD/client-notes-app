import './CompleteNav.css'
import menuIcon from '../../svg/menu-icon.svg'
import closeIcon from '../../svg/close-icon.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const CompleteNav = ({handlerLogOut}) => {
    const [showMenu,setShowMenu]=useState(false);
    let navClass= showMenu?'header__menu header__menu--show':'header__menu';

    
    return (
        <header className="header">
            <div className="header__logo">
                <h1 className="header__title">NotesApp</h1>
            </div>
            <nav className={navClass}>
                <div className="header__close-icon">
                    <img src={closeIcon} alt="close-icon" onClick={()=>setShowMenu(!showMenu)}/>
                </div>
                <Link to="/all-notes">All Notes</Link>
                <Link to="/favorite-notes">Favorite Notes</Link>
                <Link to="/new-note">New Note</Link>
                <a className="header__logout" href="home" onClick={handlerLogOut} >Log out</a>
            </nav>
            <div className="header__menu-icon">
                <img src={menuIcon} onClick={()=>setShowMenu(!showMenu)} alt="menu-icon" />
            </div>
        </header>
    )
}

export default CompleteNav;
