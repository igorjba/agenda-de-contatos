import './styles.css';
import SignOutIcon from '../../assets/sign-out-icon.svg';
import Logo from '../../assets/logo.svg';

function Header() {
    return (
        <header className='container-header'>
            <div></div>
            <img src={Logo} alt="Logo" className='logo' />
            <img src={SignOutIcon} alt="Sign out" className='sign-out' />
        </header>
    )
}

export default Header