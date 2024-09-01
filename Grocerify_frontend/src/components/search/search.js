import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Api/api';
import { useSearchParams } from 'react-router-dom';
import Cards from '../Cards/cards';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchOutputData, setSearchOutputData] = useState();
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSearchChange = (e) => {
        console.log(e.target.value)
        setSearchInput(e.target.value)



    }


    const fetchSearchData = async (q) => {
        try {
            if (q?.length >= 2) {
                console.log(q)
                const res = await axios.get(`${BASE_URL}api/products?search=` + q);
                console.log(res.data);
                setSearchOutputData(res.data)

            }
        } catch (error) {
            console.log(error)



        }
    }

    useEffect(() => {

        setSearchInput(searchParams.get('q'))
        fetchSearchData(searchParams.get('q'))

    }, [searchParams.get('q')]);

    return (
        <div className='grid grid-cols-5 p-[2rem] w-full justify-center'>
            {searchOutputData?.length > 0 ? <> {
                searchOutputData?.map((val, ind) => {
                    return (
                        <>
                            <Cards value={val} />
                        </>
                    )
                })
            }
            </> : <div className='h-[80vh] w-[90vw] flex flex-col items-center justify-center gap-5'>
                <h2 className='text-4xl'>No Result Found</h2>
                <img src="/assets/Images/Search.png" alt="search not found" className='w-auto h-[50vh]' />
            </div>
            }
        </div>
    )
}

export default Search