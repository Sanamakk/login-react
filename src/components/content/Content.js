import React from 'react'
import './Content.css'
import googleIcon from './images/google.png'
import facebookIcon from './images/facebook.png'

function Content() {
  return (
    <div className='container'>
        <div className='itens'>
            <h1>Fazer login</h1>
            
            <form action='POST'>
                {/* DIV COM OS INPUTS E BOTÃO */}
                <div className='inputs'>
                    <input type='email' placeholder='Email' className='email' name='email' tabIndex='-1' />
                    <input type='password' placeholder='Senha' className='senha' name='senha' tabIndex='-1' />

                    <a className='recovery' tabIndex='-1' href="#">Esqueceu a senha?</a>

                    <button tabIndex='-1' type='submit'>Entrar</button>
                </div>
            </form>


            <p className='alternative'> Ou faça login com:</p>

            <div className='icons'>
                <img name='facebook' src={googleIcon} />
                <img name='google' src={facebookIcon} />
            </div>

            <p className='cadastro'>Não é um membro? <a href='#'>Cadastre-se</a></p>
            
        </div>
    </div>
  )
}

export default Content