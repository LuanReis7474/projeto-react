import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

import './Formulario.css';

const Formulario = () => {

    const states = [
        'MG',
        'SP',
        'SC'
    ]

    const saving = (event) => {
        event.preventDefault();
        console.log("SALVEI");
    }

    return (
        <section className="formulario">
            <form onSubmit={saving}>
                <h2>Preencha os dados!</h2>
                <CampoTexto mandatory={true} label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto mandatory={true} label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto mandatory={true} label="Idade" placeholder="Digite sua idade"></CampoTexto>
                <ListaSuspensa itens={states} label="Estado"></ListaSuspensa>
                <Botao>Concluir</Botao>
            </form>
        </section>
    )
}

export default Formulario;