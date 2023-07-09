import { useLocalStorage } from 'react-use';

const useGlobalContextProvider = () => {
    const [token, setToken, clearToken] = useLocalStorage('token');
    const [user, setUser, clearUser] = useLocalStorage('user');

    return {
        token,
        setToken,
        clearToken,
        user,
        setUser,
        clearUser
    };
}

export default useGlobalContextProvider;
