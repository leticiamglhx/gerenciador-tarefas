import type {Tarefa} from '../types/Tarefa'

interface ItemTarefaProps{
    tarefa:Tarefa;
}

function ItemTarefa({tarefa}: ItemTarefaProps){
    return(
        <li className='item-tarefa'>
            <span className='titulo-tarefa'>
                {tarefa.titulo}
            </span>

            <button 
            className='botao-excluir'
            type='button'
            >
                Excluir
            </button>
        </li>
    )
}
export default ItemTarefa