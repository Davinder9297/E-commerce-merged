import React, { useState, useEffect, useContext } from 'react'
// import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ReactComponent as Loc } from '../../Assets/Icons/loc.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cart.svg'
import { ReactComponent as Wishlist } from '../../Assets/Icons/wishlist_green.svg'
import { ReactComponent as User } from '../../Assets/Icons/user.svg'
import { ReactComponent as Account } from '../../Assets/Icons/account.svg'
import { ReactComponent as Search } from '../../Assets/Icons/search.svg'
import logoimg from '../../Assets/Images/logo.png';
import { Link, Router } from 'react-router-dom'
import { Globalinfo } from '../../App'
import axios from 'axios'
import { BASE_URL } from '../../Api/api'
import { cropString } from '../../helpers/helper_function'
import BottomNav from '../BottomNav/bottomnav'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [location, setLocation] = useState("");
    const [token, settoken] = useState('')
    const [searchInput, setSearchInput] = useState('');
    const [searchOutputData, setSearchOutputData] = useState();
    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)
    // console.log(userDetail)



    const getLocationAddress = async (lati, longi) => {
        // console.log(lati, longi);
        try {
            const res = await fetch(
                `https://geocode.maps.co/reverse?lat=${lati}&lon=${longi}&api_key=65bb467db90ab669670150tzu3dcab7`
            );
            const response = await res.json();
            // console.log(response);
            setLocation(response.address.village);
        } catch (error) {
            // console.log(error);
        }
    };

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    function success(pos) {
        var crd = pos.coords;

        getLocationAddress(crd.latitude, crd.longitude);
    }

    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    // console.log(result);
                    if (result.state === "granted") {
                        //If granted then you can directly call your function here
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "prompt") {
                        //If prompt then the user will be asked to give permission
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                    }
                });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        handleLocation();
    }, []);

    const handleSearchChange = (e) => {
        console.log(e.target.value)
        setSearchInput(e.target.value)



    }


    const fetchSearchData = async () => {
        try {
            if (searchInput?.length >= 2) {
                console.log(searchInput)
                const res = await axios.get(`${BASE_URL}api/products?search=` + searchInput);
                console.log(res.data);
                setSearchOutputData(res.data)

            }
        } catch (error) {
            console.log(error)



        }
    }

    useEffect(() => {
        fetchSearchData()

    }, [searchInput]);


    const handelSearchClicked = (event) => {
        if (event.key === 'Enter') {

            // Update URL with search query and redirect
            navigate(`/search?q=${searchInput}`);
            setSearchInput('')
        }

    }


    return (
        <div className={`${styles.nav_main}`}>
            <div className={styles.nav_row}>
                <div className={styles.logo_container}>

                    <a href="/">
                        <img src={logoimg} alt="Logo not found" />
                    </a>
                </div>
                <div className={styles.search}>

                    <div className={styles.search_icon}>
                        <Search />
                    </div>
                    <input type="text" name="search" id="" placeholder='search here ....' onChange={handleSearchChange} onKeyDown={handelSearchClicked} />
                    {searchInput.length > 2 && <div className={styles.search_data}>
                        <>
                            {

                                searchOutputData?.map((val, ind) => {
                                    return (
                                        <>
                                            <a href={`/product/${val.slug}`}> <p>{cropString(val.products_title, 27)}</p></a>
                                        </>
                                    )
                                })
                            }
                        </>
                    </div>}
                </div>
              
                {userDetail?._id && window.innerWidth > 800 && <div className='text-white'>
                    Hello ,  {userDetail.firstName}
                </div>}
                <div className={styles.icons}>
                    <Link to={'/wishlist'}>  <span>
                        <Wishlist />
                        <span className='relative right-2 bottom-2 text-[#58B310] text-sm'>{wishListData?.length}</span>

                    </span> </Link>

                    <Link to={'/cart'}>
                        <span className='flex'>
                            <Cart />
                            <span className='relative right-2 bottom-2 text-[#58B310] text-sm'>{cartData?.length}</span>
                        </span> </Link>
                    {userDetail?._id ? < Link to="/account" style={{ cursor: "pointer" }}>  <span>
                        <Account />


                    </span> </Link> : < Link to="/login" style={{ cursor: "pointer" }}>  <span>
                        <User />
                        <h5>Sign In</h5>

                    </span> </Link>}
                </div>
            </div>
            {window.innerWidth < 600 && (
                <div className={styles.bottomnav}>
                    {" "}
                    <BottomNav />
                </div>
            )}
        </div >
    )
}

export default Navbar