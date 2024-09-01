import React from 'react';

const Background = ({ children, height, width }) => {
    const backgroundStyle = {
        backgroundColor: '#fff', 
        height: height || 'auto', 
        width: width || '100%', 
    };

    return <div style={backgroundStyle}>{children}</div>;
};

export default Background;
