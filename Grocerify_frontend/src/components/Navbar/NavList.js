import React, { useState } from 'react'
import styles from './Navlist.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as HamBurger } from '../../Assets/Icons/hamburger.svg'
import Sidebar from '../Sidebar/sidebar'
import { useLocation } from 'react-router-dom'

const NavList = () => {
    const location = useLocation();
    console.log(location.pathname)
    const [isOpenSidebar, setisOpenSidebar] = useState(false)
    return (
        <>
            <div className={styles.nav_list_main}>

                <ul className={styles.nav_list}>
                    {location.pathname.includes('store') ? <></> : <li onClick={() => setisOpenSidebar(true)}>   <HamBurger /> <p>All</p> </li>}
                    <Link to={'/products?category=Electronics'}> <li>Electronics</li></Link>
                    <Link to={'/products?category=Grocery'}> <li>Groceries</li></Link>
                    <Link to={'/products?category=Health and Beauty'}> <li>Health & Beauty</li></Link>
                    <Link to={'/products?category=dairy'}> <li>Dairy</li> </Link>
                    <Link to={'/products?category=frozen'}>  <li>Frozen</li></Link>
                    <Link to={'/products?category=poultary'}>  <li>Poultary</li></Link>
                    <Link to={'/stores'}>  <li>Stores</li></Link>
                </ul>

            </div>
            {
                isOpenSidebar &&
                <div className={styles.sidebar_container}>
                    <div className={styles.top_div} onClick={() => setisOpenSidebar(false)}></div>
                    <div style={{ display: "flex" }}>
                        <div className={styles.main_sidebar}> <Sidebar category={""} close={setisOpenSidebar} />
                        </div>
                        <div className={styles.overlay} onClick={() => setisOpenSidebar(false)}></div>
                    </div>
                </div>
            }
        </>
    )
}

export default NavList