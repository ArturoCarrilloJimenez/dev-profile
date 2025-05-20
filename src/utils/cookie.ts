export const getLocalStorageConsent = () => {
	return localStorage.getItem('cookie_consent');
};

export const setLocalStorageConsent = (value: 'accept' | 'deny' | null) => {
	if (value === null) {
		return;
	}
	localStorage.setItem('cookie_consent', value);
};
