import './burger.css'
import { useState } from 'react'

type Props = {
    onToggle: (isOpen: boolean) => void;
}

export const Burger = ({ onToggle }: Props) =>{

    const [isOpen, setIsOpen] = useState(true)

    const toggleBurger = () => {
        setIsOpen(!isOpen);
        onToggle(!isOpen);
    }

    return(
        <div className={!isOpen ? 'burger active' : 'burger'} onClick={toggleBurger}>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
        </div>
    )
}