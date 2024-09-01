import React, { useState, useEffect } from 'react'
import '@splidejs/react-splide/css';
import styles from './sidebar.module.css'
import { ReactComponent as Hotdeals } from '../../Assets/Icons/hotdeals.svg'
import { colorCombo } from '../../Data/db';
import { ReactComponent as Sort } from '../../Assets/Icons/soryBy.svg'
import { ReactComponent as Dropdown } from '../../Assets/Icons/dropdown.svg'
import { ReactComponent as List } from '../../Assets/Icons/list.svg'
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import productimg from '../../Assets/Images/product.png'
import tv from '../../Assets/Images/products/tv.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../Api/api';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

const Sidebar = ({ category, close }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState([1, 2, 3, 4, 5, 6]);
    // console.log(category.category)
    const [searchParams, setSearchParams] = useSearchParams();
    const [subCategory, setSubCategory] = useState([]);
    const [Category, setCategory] = useState({
        "Electronics": ["Phones", "Gaming", "Laptops"],
        "Grocery": ["Packaged Food", "Snacks & Beverages"],
        "Health and Beauty": ["Face Makeup", "Nails"],
        "dairy": ["Engergy drink"],
        "frozen": [],
        "poultary": [],



    })
    const [activeCategory, setActiveCategory] = useState(null);
    const handleCategoryClick = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };


    const fetchSubCategory = async () => {

        try {
            if (searchParams.get('category')) {
                const res = await axios.get(`${BASE_URL}api/categories/${searchParams.get('category')}`)
                console.log(res.data.subcategories);
                setSubCategory(res.data.subcategories);

            }
        } catch (error) {
            console.log(error)
            setSubCategory([])
        }

    }

    useEffect(() => {
        fetchSubCategory();
    }, [searchParams.get('category')])


    console.log(subCategory)


    return (
        <div className={styles.main_sidebar} >
            <div className={styles.categories_main}>
                <span className={styles.heading}
                // onClick={() => { isDropdownOpen === 1 ? setIsDropdownOpen(null) : setIsDropdownOpen(1) }}
                >
                    <span className='flex justify-between'>

                        <IoMdArrowBack onClick={() => close(false)} size={22} />
                        <h3 style={{ textTransform: "capitalize" }}>{'Categories'}</h3>
                    </span>


                </span>

                <div className={styles.side_filter}>
                    {Object.entries(Category).map(([title, values]) => (
                        <div key={title} className={styles.category}>
                            <span className='flex justify-between gap-2'>
                                <a href={`/products?category=${title}`} onClick={() => close(false)} >
                                    {title}
                                </a>
                                <IoMdArrowDropdown onClick={() => handleCategoryClick(title)} size={24} color={"grey"} />
                            </span>

                            {activeCategory === title && (
                                <ul className="values">
                                    {values.map((value, index) => (
                                        <Link to={`/products?category=${title}&subCategory=${value}`}> <li key={index} onClick={() => close(false)} >{value}</li></Link>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* {isDropdownOpen.includes(1) &&
                    <>
                       
                        {searchParams.get('category') == null ?
                            <ul key={1}>
                                
                                <a href={'/products?category=Electronics'}> <li>Electronics</li></a>
                                <a href={'/products?category=Grocery'}> <li>Groceries</li></a>
                                <a href={'/products?category=Health and Beauty'}> <li>Health & Beauty</li></a>
                                <a href={'/products?category=dairy'}> <li>Dairy</li> </a>
                                <a href={'/products?category=frozen'}>  <li>Frozen</li></a>
                                <a href={'/products?category=poultary'}>  <li>Poultary</li></a>
                            </ul> :
                            <>

                                <ul key={1}>
                                   
                                    <a href={'/products?category=Electronics'}> <li>Electronics</li></a>
                                    <a href={'/products?category=Grocery'}> <li>Groceries</li></a>
                                    <a href={'/products?category=Health and Beauty'}> <li>Health & Beauty</li></a>
                                    <a href={'/products?category=dairy'}> <li>Dairy</li> </a>
                                    <a href={'/products?category=frozen'}>  <li>Frozen</li></a>
                                    <a href={'/products?category=poultary'}>  <li>Poultary</li></a>
                                </ul>
                                <ul>

                                    {
                                        subCategory.map((val, ind) => {
                                            return (
                                                <>
                                                    {console.log(searchParams.get('subcategory') === val?.Subcategory_Name)}
                                                    <a href={`/products?category=${searchParams.get('category')}&subcategory=` + val?.Subcategory_Name}  > <li style={searchParams.get('subcategory') === val?.Subcategory_Name ? { backgroundColor: "white" } : {}} >{val?.Subcategory_Name}</li></a>
                                                </>

                                            )
                                        })
                                    }
                                </ul>


                            </>


                        }
                    </>
                } */}

            </div>

            {/* <div className={styles.sortBy_main}>
                <span className={styles.heading} onClick={() => { isDropdownOpen === 2 ? setIsDropdownOpen(null) : setIsDropdownOpen(2) }}>
                    <span>

                        <Sort />
                        <h3>Sort By</h3>
                    </span>
                    <Dropdown />

                </span>
                {isDropdownOpen.includes(2) && <ul key={2}>
                    <li>
                        <input type="radio" name="popularity" id="1" />
                        <p>Popularity</p></li>
                    <li>
                        <input type="radio" name="highToLow" id="2" />
                        <p>Price: Low to High</p></li>
                    <li>
                        <input type="radio" name="lowToHigh" id="3" />
                        <p>Price: High to Low</p></li>
                    <li>
                        <input type="radio" name="discount" id="4" />
                        <p>Discount</p></li>
                    <li>
                        <input type="radio" name="relevence" id="5" />
                        <p>Relevence</p></li>


                </ul>}
            </div> */}
            {/* <div className={styles.sortBy_main}>
                <span className={styles.heading} onClick={() => { isDropdownOpen === 3 ? setIsDropdownOpen(null) : setIsDropdownOpen(3) }}>
                    <span>

                        <Sort />
                        <h3>Sort By Distance</h3>
                    </span>
                    <Dropdown />

                </span>
                {isDropdownOpen.includes(3) && <ul key={3}>
                    <li>
                        <input type="radio" name="popularity" id="1" />
                        <p>Under 1 KM</p></li>
                    <li>
                        <input type="radio" name="highToLow" id="2" />
                        <p>Between 1 - 2 KM</p></li>
                    <li>
                        <input type="radio" name="lowToHigh" id="3" />
                        <p>Between 2 - 3 KM</p></li>
                    <li>
                        <input type="radio" name="discount" id="4" />
                        <p>Under 5 KM</p></li>



                </ul>}
            </div> */}
            {/* <div className={styles.sortBy_main}>
                <span className={styles.heading} onClick={() => { isDropdownOpen === 3 ? setIsDropdownOpen(null) : setIsDropdownOpen(3) }}>
                    <span>

                        <Sort />
                        <h3>Sort By Ratings</h3>
                    </span>
                    <Dropdown />

                </span>
                {isDropdownOpen.includes(4) && <ul key={4}>
                    <li>
                        <input type="radio" name="popularity" id="1" />
                        <p>Under 1 KM</p></li>
                    <li>
                        <input type="radio" name="highToLow" id="2" />
                        <p>Between 1 - 2 KM</p></li>
                    <li>
                        <input type="radio" name="lowToHigh" id="3" />
                        <p>Between 2 - 3 KM</p></li>
                    <li>
                        <input type="radio" name="discount" id="4" />
                        <p>Under 5 KM</p></li>



                </ul>}
            </div> */}
        </div>
    )
}

export default Sidebar