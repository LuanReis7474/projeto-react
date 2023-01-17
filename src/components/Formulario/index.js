import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from 'react';

import './Formulario.css';

const Formulario = (props) => {

    const teams = [
        '',
        'Equipe 1',
        'Equipe 2',
        'Equipe 3',
        'Equipe 4'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [idade, setIdade] = useState('');
    const [team, setTeam] = useState('');

    const saving = (event) => {
        event.preventDefault();
        console.log("EQUIPE", team);
        props.userRegister({
            nome,
            cargo,
            idade,
            team
        })

    }

    return (
        <section className="formulario">
            <form onSubmit={saving}>
                <h2>Preencha os dados!</h2>
                <CampoTexto
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    mandatory={true} label="Nome"
                    placeholder="Digite seu nome">
                </CampoTexto>

                <CampoTexto
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    mandatory={true} label="Cargo"
                    placeholder="Digite seu cargo">
                </CampoTexto>

                <CampoTexto
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}
                    mandatory={true} label="Idade"
                    placeholder="Digite sua idade">
                </CampoTexto>

                <ListaSuspensa
                    valor={team}
                    aoAlterado={valor => setTeam(valor)}
                    itens={teams}
                    label="Equipe">
                </ListaSuspensa>

                <Botao>Concluir</Botao>
            </form>
        </section>
    )
}

export default Formulario;