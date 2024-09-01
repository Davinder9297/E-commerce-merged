
export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


export const getCategoryBanner = (cat) => {
    if (cat == 'Grocery') {
        return ['/assets/Images/15.png', '/assets/Images/9.png', '/assets/Images/3.png'];
    }
    if (cat == 'Electronics') {
        return ['/assets/Images/1.png', '/assets/Images/13.png', '/assets/Images/7.png'];
    }
    if (cat == 'Health and Beauty') {
        return ['/assets/Images/2.png', '/assets/Images/8.png', '/assets/Images/14.png'];
    }
    if (cat == 'dairy') {
        return ['/assets/Images/4.png', '/assets/Images/11.png', '/assets/Images/16.png'];
    }
    if (cat == 'frozen') {
        return ['/assets/Images/5.png', '/assets/Images/10.png', '/assets/Images/17.png'];
    }
    if (cat == 'poultary') {
        return ['/assets/Images/6.png', '/assets/Images/12.png', '/assets/Images/18.png'];
    }

}
