import React, { useState } from 'react'
import './style.css'
import Menu from './MenuApi'
import CardMenu from './CardMenu'
import Navbar from './Navbar'

const getCatList = ['All', ...new Set(
    Menu.map((curElem) => {
        return curElem.category
    })
),
];

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [catList, setCatList] = useState(getCatList);

    const filterItem = (category) => {

        if (category === 'All') {
            setMenuData(Menu)
            return
        }

        const catList = Menu.filter((curElem) => {
            return curElem.category === category
        });
        setMenuData(catList);
    }

    return (
        <>
            <div className="container">

                <div className="sidebar">
                    <Navbar filterItem={filterItem} catList={catList} />
                </div>

                <div className="body-content">
                    <CardMenu menuData={menuData} />
                </div>
            </div>
        </>
    )
}

export default Restaurant