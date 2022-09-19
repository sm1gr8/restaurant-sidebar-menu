import React from 'react'

const Navbar = ({ filterItem, catList }) => {
    const toggle = () => {
        ('toggel-menu').toggle();
    }
    return (
        <>
            <nav className="navbar">
                <button onclick={() => toggle()}>Try it</button>

                <div className="side-menu toggel-menu">
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