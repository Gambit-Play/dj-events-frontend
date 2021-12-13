export const API_URL =
	process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const PER_PAGE = 4;

export const toastConfig = {
	position: 'bottom-center',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	pauseOnFocusLoss: true,
	theme: 'colored',
};
