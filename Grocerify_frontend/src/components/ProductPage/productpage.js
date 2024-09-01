import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/sidebar'
import styles from './productPage.module.css'
import Products from '../Products/products';
import { TopRatedProducts } from '../../Data/db';
import { ReactComponent as Dropdown } from '../../Assets/Icons/dropdown.svg'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Heroimage from '../../Assets/Images/electronics.jpg'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { BASE_URL } from '../../Api/api';
import { getCategoryBanner } from '../../helpers';

const ProductPage = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categoryData, setCategoryData] = useState();
    const navigate = useNavigate()


    const checkForQuery = () => {

        let query_string = ``;
        let temp = {};

        // console.log(searchParams);
        console.log([...searchParams.keys()]);
        if ([...searchParams.keys()].length) {
            [...searchParams.keys()].forEach((val) => {


                (query_string += `&${String(val)}=${searchParams.get(val)}`)

            });

        } else {

            console.log("we don't have a query");
        }

        // console.log("final value of object is ::: ", query_string);
        return query_string;
    };


    useEffect(() => {
        // console.log(searchParams.get('category'))
        const query = checkForQuery()
        // console.log(query)

    }, [])

    const fetchData = async () => {
        try {
            const res = await fetch(`${BASE_URL}api/products?${checkForQuery()}`);
            const response = await res.json();
            // console.log(response);
            setCategoryData(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
        // window.location.reload()
    }, [searchParams.get('category')])

    return (
        <div className={styles.product_container}>

            <span style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
                <div className={styles.hero_image}>
                    <Splide style={{ height: "100%" }}
                        options={{
                            type: "loop",
                            perPage: 1,
                            pagination: false,
                            perMove: 1,
                            wheel: false,
                            arrows: false,
                            autoplay: true,
                            interval: 3000,
                            speed: 2000,
                            delay: 3,
                            pauseOnHover: true,
                            drag: false,

                        }}>
                        <SplideSlide >
                            <img src={getCategoryBanner(searchParams.get('category'))[0]} alt="banner  not found" onClick={() => navigate('/store/65d87ed34331e28142b6190d')} />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={getCategoryBanner(searchParams.get('category'))[1]} alt="banner  not found" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={getCategoryBanner(searchParams.get('category'))[2]} alt="banner  not found" />
                        </SplideSlide>

                    </Splide>
                </div>
                <div className={`${styles.newProducts_main} ${styles.products_main}`}>
                    <div className={`${styles.newProducts_top} ${styles.products_top}`}>
                        <h1>New Products</h1>

                    </div>
                    <Products data={categoryData} />

                </div>
            </span>
        </div>
    )
}

export default ProductPage