import {useState} from 'react'
import styles from '../styles/cadastro.module.css'
import { Link, json } from 'react-router-dom'
import { api } from '../services/api'

const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const enviar = async (e) =>{
        e.preventDefault()
        try{
            const response = await api.post(`/cadastro`, 
                { nome, email, senha }, 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(response.status)
        }catch{
            console.log('Erro ao cadastrar')
        }
        setNome("")
        setEmail("")
        setSenha("")
    }

    return(
        <div className={styles.pai}>
        <div className={styles.filho}>
            <h1 style={{letterSpacing:7, fontSize:50}}>CADASTRO</h1>
        <form onSubmit={enviar} className={styles.formulario}>
            <input type="text" name='nome' id='nome' className={styles.input} value={nome} required onChange={(e) => setNome(e.target.value)} placeholder='NOME...'/><br />
            <input type="text" name='email' id='email' className={styles.input} value={email} required onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL...'/><br />
            <input type="text" name='senha' id='senha' className={styles.input} value={senha} required onChange={(e) => setSenha(e.target.value)} placeholder='SENHA...  '/><br />
            <input  className={styles.botao} type='submit'/>
        </form>
        <Link style={{textDecoration:"none",color:"green"}} to="/">Já sou cadastrado</Link>
        </div>
        
    </div>
    )
}

export default Cadastro