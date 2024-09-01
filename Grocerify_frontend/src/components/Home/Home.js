import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/sidebar'
import MainContent from '../MainContent/maincontent'
import styles from './Home.module.css'
import SignINModal from '../Modal/signInModal'

const Home = () => {


    const [ShowpopUp, setShowpopUp] = useState(false)
    // console.log(localStorage.getItem('isShowLogin'))

    const handleShowPopUp = () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 400 && scrollTop <= 600) {
            setShowpopUp(true);
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleShowPopUp);
        if (localStorage.getItem('isShowLogin') !== 'false') {

            localStorage.setItem('isShowLogin', true)
        }
    }, [])

    return (
        <>
            <div className={styles.home_main} >

                <MainContent />

            </div>
            {
                localStorage.getItem('isShowLogin') === 'true' && (
                    <>
                        {
                            ShowpopUp && (
                                <>
                                    {localStorage.getItem('GROC_USER_TOKEN') ? <> </> :

                                        <div className={styles.model_container}>
                                            <SignINModal setOpen={setShowpopUp} />

                                        </div>}
                                </>
                            )
                        }
                    </>
                )
            }


        </>
    )
}

export default Home