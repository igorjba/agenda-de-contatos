import './styles.css';
import BackgroundSignIn from '../../assets/background-sign-in.png';

function SignIn() {
  return (
    <div className='container-sign-in'>
      <img src={BackgroundSignIn} alt="background" />

      <div className='right-sign-in'>
      </div>
    </div>
  )
}

export default SignIn
