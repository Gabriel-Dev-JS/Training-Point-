import {useState} from 'react'
import styles from '../styles/cadastro.module.css'
import { Link } from 'react-router-dom'

const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const enviar = (e) =>{
        e.preventDefault()
        console.log(nome)
        console.log(email)
        console.log(senha)
        setNome("")
        setEmail("")
        setSenha("")
    }
    return(
        <div className={styles.pai}>
        <div className={styles.filho}>
            <h1 style={{letterSpacing:7, fontSize:50}}>CADASTRO</h1>
        <form onSubmit={enviar} className={styles.formulario}>
            <input type="text" name='nome' id='nome' className={styles.input} value={nome} onChange={(e) => setNome(e.target.value)} placeholder='NOME...'/><br />
            <input type="text" name='email' id='email' className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL...'/><br />
            <input type="text" name='senha' id='senha' className={styles.input} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='SENHA...  '/><br />
            <input  className={styles.botao} type='submit'/>
        </form>
        <Link style={{textDecoration:"none",color:"green"}} to="/">Já sou cadastrado</Link>
        </div>
        
    </div>
    )
}

export default Cadastro