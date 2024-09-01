import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { BASE_URl } from '../Apis/api';
import { Globalinfo } from '../components/Layout';

export default function Login() {

    const { handleLogin } = useContext(Globalinfo);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URl}/loginAdminWithEmail`, { email, password });
            console.log(response.data);

            const { token } = response?.data;
            // console.log(token)
            localStorage.setItem('adminDetail', token);
            localStorage.setItem('adminEmail', response?.data?.email);
            handleLogin(response?.data)

        } catch (err) {
            setError(err.response.data.message);
            navigate('/');
        }
    };
    return (
        // https://img.freepik.com/free-photo/colorful-shopping-bags_23-2147652050.jpg?t=st=1714566354~exp=1714569954~hmac=1a9bcd7f78d78531748c654a94d89ff704edc4e1363d6958ea5551d8e07c638d&w=1380
        <div className='grid items-center h-screen w-[100vw] bg-no-repeat bg-[url(https://medo-b2b.net/wp-content/uploads/2021/01/%D8%B5%D9%88%D8%B1-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9-%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9.jpeg)] bg-cover bg-center'>
            <div className="flex flex-col  px-6 lg:px-8  shadow-md  w-[850px] rounded-lg p-4 mx-[10rem] ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">

                    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Welcome to Admin Login
                    </h2>
                </div>
                <div className='flex justify-center items-center gap-3 '>
                <div className='flex-1'>
                    <img src='https://swiftlab.ru/wp-content/uploads/2020/06/core-1a.png' alt='login side'/>
                </div>

                <div className="flex-1 mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6" action="/dashboard" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="email"
                                    type="text"
                                    autoComplete="username"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full pl-2 rounded-md border-none  py-2 text-gray-700 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6 "
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to="#" className="font-semibold text-white hover:text-indigo-900">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-2 rounded-md  border-none py-2 
                                    text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md border shadow-indigo-500/40  border-indigo-500/10 px-3 py-1.5 text-sm font-semibold leading-6  shadow-md text-white hover:bg-indigo-600 focus-visible:outline 
                                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                </div>
            </div>
        </div>
    )
}