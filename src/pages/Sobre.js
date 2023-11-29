import { Link } from 'react-router-dom'

const Sobre = () => {
    return(
    <div className="pai">
      <div className="cabeçalho">
          <h1 style={{marginLeft:45}}>TRAINING </h1>
          <h1 style={{marginLeft:13}}>POINT</h1>
          <div className='links'>
              <h1 ><Link style={{textDecoration:"none",color:"#1c1c1c"}} to='/Superiores'>SUPERIORES</Link> </h1>
              <h1 ><Link style={{textDecoration:"none", color:"#1c1c1c"}} to='/Inferiores'>INFERIORES</Link> </h1>
              <h1 ><Link style={{color:"#1c1c1c"}} to='/Sobre'>SOBRE</Link> </h1>
          </div>
      </div>
      <div className="filho">
        <h1>Sobre</h1>
          <p>olá, somos alunos da unimetrocamp-Wyden, estamos finalizando o segundo semestre
          do curso de análise e desenvolvimento de sistemas, e esse é o nosso aplicativo de gerenciamento
          de treino, criado para facilitar o dia a dia nos treinos da academia!</p>
        <h1>Alunos:</h1>
        <p>Gabriel Luis Santos de Oliveira RA: 2023 0247 5183</p>
        <p>Lucas de Souza Pereira RA: 2023 0315 2035</p>
        <p>Fernando Henrique Melo E silva RA: 2021 0381 8293</p>
        <p>Karina Ribeiro Selingardi Ra: 2022 0889 8505</p>
          
      </div>                
    </div>
    )
}

export default Sobre