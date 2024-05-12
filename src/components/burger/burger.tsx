import './burger.css'
import { useState } from 'react'

export const Burger = () =>{

    const [isOpen, setIsOpen] = useState(true)

    const toggleBurger = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className={isOpen ? 'burger active' : 'burger'} onClick={toggleBurger}>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
        </div>
    )
}