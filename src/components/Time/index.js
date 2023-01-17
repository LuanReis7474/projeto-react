import Colaborador from '../Colaborador';
import './Times.css';

const Time = (props) => {

    const css = { backgroundColor: props.corPrimaria };
    let i = 0;

    return (
        (props.colaboradores.length > 0) ?
            <section className='time' style={css}>
                <h3 style={{ color: props.corSecundaria }} > {props.nome}</h3>
                <div className='cards'>
                    {
                        props.colaboradores.map(colab => {
                            i++;
                            return <Colaborador
                                className="colaborator"
                                key={i} nome={colab.nome}
                                cargo={colab.cargo}
                                idade={colab.idade}>

                            </Colaborador>
                        })
                    }
                </div>
            </section >
            :
            ""
    )
}
export default Time;