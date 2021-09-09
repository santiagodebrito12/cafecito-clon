import React, { useContext } from 'react'
import ThemeContext from '../../Context/ThemeContext/ThemeContext'
import './ThemeIcon.css'

const ThemeIcon = () => {
    
    const {isDark}=useContext(ThemeContext);
    
    return (
        <div className="contenedor-theme-icon d-flex">
            <i className={isDark ? "far fa-sun theme-icon" : "far fa-sun  theme-icon active"}></i>
            <p className="barra-separacion">/</p>
            <i className= {isDark ? "far fa-moon theme-icon active" : "far fa-moon theme-icon "}></i>
            
        </div>
    )
}

export default ThemeIcon;
