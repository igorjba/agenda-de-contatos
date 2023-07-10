import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import SignOutIcon from '../../assets/sign-out-icon.svg';
import useGlobalContext from '../../hooks/useGlobalContext';
import './styles.css';

function Header() {
    const navigate = useNavigate();
    const { clearToken, clearUser, setContacts } = useGlobalContext();

    const handleLogout = () => {
        clearToken();
        clearUser();
        setContacts([]);
        navigate('/');
    }

    return (
        <header className='container-header'>
            <div></div>
            <img src={Logo} alt="Logo" className='logo' />
            <img
                src={SignOutIcon}
                alt="Sign out"
                className='sign-out'
                onClick={handleLogout}
            />
        </header>
    )
}

export default Header