import { Link, NavLink } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css"

const Navbar = () => {
    const ref = useRef()
    const [menuOpen, setMenuOpen] = useState(false)

    const menuMobile = () => {
        setMenuOpen(!menuOpen) 
    }

    const clickLogo = () => {
        setMenuOpen()
    }

    useEffect(() => {
        const clickFora = e => {
             // Se o menu estiver aberto e o alvo clicado não estiver dentro do menu,
      // então fecha o menu
          if (menuOpen && ref.current && !ref.current.contains(e.target)) {
            setMenuOpen(false)
          }
        }
    
        document.addEventListener("mousedown", clickFora)
    
        return () => {
          // Limpa o ouvinte de eventos
          document.removeEventListener("mousedown", clickFora)
        }
      }, [menuOpen])

    
  return (
    <nav ref={ref}>
        <Link to="/" className="title" onClick={clickLogo}>Logo</Link>
        <ul className={menuOpen ? "open" : ""}>
            <li onClick={menuMobile}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={menuMobile}>
                <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={menuMobile}>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li onClick={menuMobile}>
                <NavLink to="contacts">Contacts</NavLink>
            </li>
        </ul>
        <button className="menu-mobile-icon" onClick={menuMobile}>
            {menuOpen ? (
                <FaTimes className="close"/>
            ) : (
                <FaBars/>
            )}
        </button>
    </nav>
  )
}

export default Navbar
