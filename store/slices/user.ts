import { create } from 'zustand';

type User = {
    userId: number | null;
    email: string;
    nickname: string;
    profileImage: string;
};

type UserStore = {
    user: User;
    setUserInfo: (user: User) => void;
    clearUserInfo: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
    user: {
        userId: null,
        email: '',
        nickname: '',
        profileImage: '',
    },
    setUserInfo: (user) => set({ user }),
    clearUserInfo: () =>
        set({
            user: {
                userId: null,
                email: '',
                nickname: '',
                profileImage: '',
            },
        }),
}));