import type {Tarefa} from '../types/Tarefa'
import ItemTarefa from './ItemTarefa'

interface ListaTarefasProps{
    tarefas: Tarefa[];
}

function ListaTarefas({tarefas}:ListaTarefasProps){
    return(
    <section
    className='lista-tarefas'
    >
        {tarefas.length == 0 ? (
        <p className='mensagem-vazia'> Não existem tarefas</p>    
     ):(
        <ul className='lista-tarefas'>
            {tarefas.map((tarefa) => (
                
                <ItemTarefa
                key={tarefa.id}
                tarefa={tarefa}
                />
            ))}
        </ul>

     )}
    </section>
    )
} 
export default ListaTarefas