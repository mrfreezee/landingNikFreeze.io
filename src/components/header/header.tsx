import { Burger } from '../burger/burger'
import { ThemeBtns } from '../themeBtns/themeBtns'
import './header.css'

export const Header = () =>{
    return(
        <header className='header'>
            <div className="header-container">
                
                <div className="nav-menu-wrapper">
                    <ul className="nav-menu">
                        <li className="nav-menu-item"></li>
                        <li className="nav-menu-item"></li>
                        <li className="nav-menu-item"></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}