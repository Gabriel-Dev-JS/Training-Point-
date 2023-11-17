const Interface = ({tr, remover,finalizar}) =>{
    
    return(
        <div>
            <p>EXERCICIO: {tr.exercicio}</p>
            <p>REPETIÇÃO: {tr.repeticao}</p>
            <p>SERIE: {tr.serie}</p>
            <button className='botao'>ENCERRADA</button>
            <button className='botao'>APAGAR</button>
            <hr/>
        </div>  
    )
}

export default Interface;