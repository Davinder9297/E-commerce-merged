import React, { createContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Login from '../pages/Login';
import { useNavigate } from 'react-router-dom';

export const Globalinfo = createContext();

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const [adminDetail, setAdminDetails] = useState(() => {
        // Initialize adminDetail from localStorage if available
        const savedAdminDetail = localStorage.getItem('adminDetail');
        return savedAdminDetail ? savedAdminDetail : null;
    });

    // useEffect(() => {
    //     // Save adminDetail to localStorage whenever it changes
    //     localStorage.setItem('adminDetail', JSON.stringify(adminDetail));
    // }, [adminDetail]);

    const handleLogin = (value) => {
        setAdminDetails(value);
        navigate('/dashboard');
    };

    const handleLogout = () => {
        // Clear adminDetail from localStorage and set to null
        localStorage.removeItem('adminDetail');
        setAdminDetails(null);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <>
            <Globalinfo.Provider value={{ adminDetail, handleLogin }}>
                {!localStorage.getItem('adminDetail') ? (
                    <Login />
                ) : (
                    <div className='flex'>
                        <Sidebar />
                        <div className='grow'>
                            <Navbar handleLogout={handleLogout} />
                            <div className='m-5'>{children}</div>
                        </div>
                    </div>
                )}
            </Globalinfo.Provider>
        </>
    );
};

export default Layout;
