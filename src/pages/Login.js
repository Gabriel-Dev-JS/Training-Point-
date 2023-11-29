import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/login.module.css'
import { api } from '../services/api'

const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate();
    
    const enviar = async (e) =>{
        e.preventDefault()
        try{
            const response = await api.post(`/login`, 
                { email, senha }, 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            const idUsuario = response.data.id
            localStorage.setItem("usuario", idUsuario);

            navigate("/Superiores")
        } catch (error) {
            console.log(error.response.data.error)
        }

    }
    return( 
        <div className={styles.pai}>
            <div className={styles.filho}>
                <h1 style={{letterSpacing:7, fontSize:50}}>LOGIN</h1>
            <form onSubmit={enviar} className={styles.formulario}>
                <input type="text" name='email' id='email' className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='EMAIL...'/><br />
                <input type="password" name='senha' id='senha' className={styles.input} value={senha} onChange={(e) => setSenha(e.target.value)} required placeholder='SENHA...  '/><br />
                <input className={styles.botao} type='submit'/>
            </form>
            {email || senha == null ? <Link style={{textDecoration:"none",color:"red"}} to="/Cadastro">Faça seu cadastro aqui!</Link> : ""}
            </div>
        </div>
    )
}

export default Login