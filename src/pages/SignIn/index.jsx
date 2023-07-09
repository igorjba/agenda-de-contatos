import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundSignIn from '../../assets/background-sign-in.png';
import useGlobalContext from '../../hooks/useGlobalContext';
import api from '../../services/api';
import './styles.css';


function SignIn() {
  const navigate = useNavigate()
  const { token, setToken, setUser } = useGlobalContext();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignIn = async (e) => {
    e.preventDefault()

    try {
      if (!email || !password) {
        alert('Preencha todos os campos')
        return
      }

      const response = await api.post('/login', {
        email,
        senha: password
      })

      const { token, usuario } = response.data
      navigate('/main')

      setToken(token)
      setUser(usuario)

    } catch (error) {
      alert(error.response.data)
    }
  }

  return (
    <div className='container-sign-in'>
      <img src={BackgroundSignIn} alt="background" />

      <div className='right-sign-in'>
        <span>Bem vindo</span>
        <h1>Faça o login com sua conta</h1>
        <form onSubmit={handleSignIn}>
          <input
            placeholder='E-mail'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder='Senha'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='btn-green'
            onClick={handleSignIn}
          >
            Login
          </button>
        </form>
        <span>Não tem cadastro?
          <Link to="/sign-up">Clique aqui! </Link>
        </span>
      </div>
    </div>
  )
}

export default SignIn
