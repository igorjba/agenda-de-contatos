import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import SignOutIcon from '../../assets/sign-out-icon.svg';
import './styles.css';
import useGlobalContext from '../../hooks/useGlobalContext';

function Header() {
    const navigate = useNavigate();
    const { clearToken, clearUser } = useGlobalContext();

    const handleLogout = () => {
        navigate('/');
        clearToken();
        clearUser();
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