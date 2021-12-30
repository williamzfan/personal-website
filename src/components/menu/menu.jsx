import React from 'react'
import "./menu.scss"

export default function menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#experience">Experience</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#research">Research</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                
            </ul>
            
        </div>
    )
}
