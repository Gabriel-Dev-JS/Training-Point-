import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Interface from '../components/Interface'
import { api } from '../services/api'

import '../styles/page.css'

const Superiores = () => {
    const idUsuario = localStorage.getItem("usuario");
  
    const [exercicio, setExercicio] = useState("")
    const [serie, setSerie] = useState("")
    const [repeticao, setRepeticao] = useState("")
    const [treino, setTreino] = useState([])  

  const enviar = async (e) =>{  
    e.preventDefault()
    
    try{
      await api.post('/exercicios',{exercicio, serie, repeticao, tipo:"SUPERIORES", idUsuario},{
        headers: {
          'Content-Type': 'application/json'
        },
      })

      const treinar = [...treino,{
        exercicio,
        repeticao,
        serie,
        tipo: "SUPERIORES",
        finalizada: false
      }]

      setTreino(treinar)
    }catch(err){
      alert(err.response.data.error)
    }

    setExercicio("")
    setRepeticao("")
    setSerie("")
}

const listar = async () => {
  try{
    const chamada = await api.get(`/usuarios/${idUsuario}/exercicios/SUPERIORES`,{
      headers: {
        'Content-Type': 'application/json'
    },
    })

    setTreino(chamada.data.exercicios)
  }catch(err){
    alert(err.response.data.error)
  }
}

useEffect(() => {
  listar()
}, [])

const remover = async (id) =>{
  try{
    await api.delete(`/usuarios/${idUsuario}/exercicios/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      },
    })
    
    const treinar = [...treino]
    const filtro = treinar.filter((deletar) => deletar.idExercicio !== id)
    setTreino(filtro)
  }catch(err){
    alert(err.response.data.error)
  }
}


    return(
    <div className="pai">
      <div className="cabeçalho">
          <h1 style={{marginLeft:45}}>TRAINING POINT</h1>
          <div className='links'>
              <h1 ><Link style={{color:"#1c1c1c"}} to='/Superiores'>SUPERIORES</Link> </h1>
              <h1 ><Link style={{textDecoration:"none", color:"#1c1c1c"}} to='/Inferiores'>INFERIORES</Link> </h1>
              <h1 ><Link style={{textDecoration:"none", color:"#1c1c1c"}} to='/Sobre'>SOBRE</Link> </h1>
          </div>
      </div>
      <div className="filho">
          <div style={{textAlign:"center"}}><h1>SUPERIOR</h1></div>
            {treino.map((tr)=>(
              <Interface key={tr.idExercicio} tr={tr} remover={remover} />
            ))}     
      </div>                                                                                                
      <div className='formulario'>
          <form  onSubmit={enviar}>
              <input className="input" type='text' placeholder='exercicio' value={exercicio} onChange={(e) => setExercicio(e.target.value)}/>
              <input className="input" type='text'placeholder='serie' value={serie} onChange={(e) => setSerie(e.target.value)}/>
              <input className="input" type='text' placeholder='repetição' value={repeticao} onChange={(e) => setRepeticao(e.target.value)}/>
              <input type='submit' className='botao'/>
          </form>
        </div>
        
    </div>
    )
}

export default Superiores