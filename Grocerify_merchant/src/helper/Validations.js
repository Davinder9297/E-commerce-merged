export function validateEmail(email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
}

export function validateMobile(mobile) {
	return String(mobile)
		.match(
			/^[1-9]{1}[0-9]{9}$/
		)
}

export function formatDate(dateString) {
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.getMonth() + 1; // Months are zero indexed, so add 1
	const year = date.getFullYear() % 100; // Get last two digits of the year

	// Ensure single digit day and month are prefixed with '0'
	const formattedDay = day < 10 ? '0' + day : day;
	const formattedMonth = month < 10 ? '0' + month : month;

	return `${formattedDay}-${formattedMonth}-${year}`;
}