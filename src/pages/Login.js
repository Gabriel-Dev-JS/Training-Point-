import {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/login.module.css'

const Login = () => {
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")

    const enviar = (e) =>{
        e.preventDefault()
        console.log(nome)
        console.log(senha)
        setNome("")
        setSenha("")
    }
    return( 
        <div className={styles.pai}>
            <div className={styles.filho}>
                <h1 style={{letterSpacing:7, fontSize:50}}>LOGIN</h1>
            <form onSubmit={enviar} className={styles.formulario}>
                <input type="text" name='nome' id='nome' className={styles.input} value={nome} onChange={(e) => setNome(e.target.value)} placeholder='NOME...'/><br />
                <input type="text" name='senha' id='senha' className={styles.input} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='SENHA...  '/><br />
                <input className={styles.botao} type='submit'/>
            </form>
            {nome || senha == null ? <Link style={{textDecoration:"none",color:"red"}} to="/Cadastro">Faça seu cadastro aqui!</Link> : ""}
            </div>
        </div>
    )
}

export default Login