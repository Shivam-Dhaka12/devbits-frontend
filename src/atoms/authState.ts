import { atom } from 'recoil';

type authAtom = {
	isLoggedIn: boolean;
	userId: string | null;
	username: string | null;
};
export const authState = atom<authAtom>({
	key: 'auth',
	default: {
		isLoggedIn: false,
		userId: null,
		username: null,
	},
});
