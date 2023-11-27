import {useState} from 'react'
import { Link } from 'react-router-dom'
import Interface from '../components/Interface'
import '../styles/page.css'

const Inferiores = () => {

    const [exercicio, setExercicio] = useState("")
    const [serie, setSerie] = useState("")
    const [repeticao, setRepeticao] = useState("")
    const [treino, setTreino] = useState([
    {
      id:1,
      exercicio:exercicio,
      repeticao:repeticao,
      serie:serie,
      finalizada:false
    }
  ])  

  const enviar = (e) =>{  
    e.preventDefault()
    const treinar = [...treino,{
      id: Math.ceil(Math.random() * 100),
      exercicio,
      repeticao,
      serie,
      finalizada: false
    }]
    setTreino(treinar)
    setExercicio("")
    setRepeticao("")
    setSerie("")
}

const remover = (id) =>{
  const treinar = [...treino]
  const filtro = treinar.filter((deletar) => deletar.id !== id ? deletar : null)
  setTreino(filtro)
}

const finalizar = (id) =>{
  const treinar = [...treino]
  treinar.map((finish) => (finish.id !== id ? finish.finalizada === true : finish.finalizada === false))
  setTreino(treinar)
}

    return(
    <div className="pai">
      <div className="cabeçalho">
          <h1 style={{marginLeft:45}}>TRAINING POINT</h1>
          <div className='links'>
              <h1 ><Link style={{textDecoration:"none", color:"#1c1c1c"}} to='/Superiores'>SUPERIORES</Link> </h1>
              <h1 ><Link style={{color:"#1c1c1c"}} to='/Inferiores'>INFERIORES</Link> </h1>
              <h1 ><Link style={{textDecoration:"none", color:"#1c1c1c"}} to='/Sobre'>SOBRE</Link> </h1>
          </div>
      </div>
      <div className="filho">
          <div style={{textAlign:"center"}}><h1>INFERIOR</h1></div>
            {treino.map((tr)=>(
              <Interface key={tr.id} tr={tr} remover={remover} finalizar={finalizar}/>
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

export default Inferiores

