function FormularioTarefa(){
    return(

        <form className="formulario-tarefa">
            <label htmlFor="nova-tarefa">
                Nova tarefa
            </label>

            <div className="campos-formulario">
                <input id="nova-tarefa" 
                type="text" 
                placeholder="Digite uma tarefa..."
                />

                <button 
                className="botao-adicionar"
                type="button"
                > Adicionar </button>

            </div>
            <p> Adicionar e excluir tarefas no segundo dia</p>
        </form>

    );
}
export default FormularioTarefa;