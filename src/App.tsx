//app
import { useState } from "react";
import type { Tarefa } from "./types/Tarefa";
import Header from "./components/Header";
import FormularioTarefa from "./components/FormularioTarefa";
import ListaTarefas from "./components/ListaTarefa";
import './App.css'

const tarefasIniciais:Tarefa[] = [
    {id:1, titulo: 'Abrir sigilo'},

    {id: 2, titulo: 'lavar dinheiro'},

    {id: 3, titulo: 'Visitar meu pai'},

]

function App(){
    const [tarefas]= useState<Tarefa[]> (tarefasIniciais)
    return(

        <main className="aplicacao">
            <Header/>

            <div className="cartao-tarefas">

                <FormularioTarefa/>
                <ListaTarefas tarefas={tarefas}/>
            </div>

        </main>
    )
}

export default App 