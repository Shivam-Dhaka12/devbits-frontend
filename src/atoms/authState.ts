import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'recoil-auth',
	storage: sessionStorage,
});

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
	effects_UNSTABLE: [persistAtom],
});
