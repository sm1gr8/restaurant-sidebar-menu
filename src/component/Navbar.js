import React, { useState } from 'react'

const Navbar = ({ filterItem, catList }) => {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>

            <button className={`toggle-btn ${isActive ? "" : "on"}`} onClick={handleToggle}>
                <div className="toggle-brd one"></div>
                <div className="toggle-brd two"></div>
                <div className="toggle-brd three"></div>
            </button>

            <nav className="navbar">
                <div className={`side-menu ${isActive ? "" : "menu-toggle-active"}`}>
                    <ul>
                        {
                            catList.map((curElem) => {
                                return (
                                    <li key={curElem}><button onClick={() => filterItem(curElem)} className="menu-item">{curElem}</button></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar