import { useLocalStorage } from 'react-use';

const useGlobalContextProvider = () => {
    const [token, setToken, clearToken] = useLocalStorage('token');
    const [user, setUser, clearUser] = useLocalStorage('user');
    const [contacts, setContacts] = useLocalStorage([]);

    return {
        token,
        setToken,
        clearToken,
        user,
        setUser,
        clearUser,
        contacts,
        setContacts
    };
}

export default useGlobalContextProvider;
