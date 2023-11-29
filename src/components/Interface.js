const Interface = ({tr, remover}) =>{
    
    return(
        <div>
            <p>EXERCICIO: {tr.exercicio}</p>
            <p>REPETIÇÃO: {tr.repeticao}</p>
            <p>SERIE: {tr.serie}</p>
            <button className='botao'>ENCERRADA</button>
            <button className='botao' onClick={async () => await remover(tr.idExercicio)}>APAGAR</button>
            <hr/>
        </div>  
    )
}

export default Interface;