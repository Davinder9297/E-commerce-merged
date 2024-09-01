export function formatDate(dateString) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
    return formattedDate;
}
export function validateEmail(email) {
    // Regular expression pattern for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern and return true or false
    return emailPattern.test(email);
}

export const cropString = (str, num) => {
    // console.log(str);
    var newstr;
    if (str.length > num) {
        if (window.innerWidth > 700) {
            newstr = str.slice(0, num + 10);
        } else {
            newstr = str.slice(0, num + 5);
        }
        console.log(newstr);
        const result = newstr.concat("...");

        return result;
    } else return str;
};

export function getDateAfterFiveDays() {
    const daysToAdd = 5;
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + daysToAdd);

    // Get day and month names
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Get day, month, and year
    const day = futureDate.getDate();
    const month = months[futureDate.getMonth()];
    const year = futureDate.getFullYear();

    // Format the date as "dd mmm"
    const formattedDate = `${day} ${month}`;

    return formattedDate;
}

export function isShopOpen(fromTime, toTime) {
    // Convert time strings to Date objects
    const now = new Date();
    const from = new Date();
    const to = new Date();

    // Set hours and minutes for fromTime
    const fromParts = fromTime.split(":");
    from.setHours(parseInt(fromParts[0]), parseInt(fromParts[1]), 0, 0);

    // Set hours and minutes for toTime
    const toParts = toTime.split(":");
    to.setHours(parseInt(toParts[0]), parseInt(toParts[1]), 0, 0);

    // Check if current time is within the time slot
    if (now >= from && now <= to) {
        return true;
    } else {
        // console.error("The shop is closed. Current time is not within the specified time slot.");
        return false;
    }
}


