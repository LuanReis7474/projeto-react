
import './CampoTexto.css'

const CampoTexto = (props) => {


    const newText = `${props.placeholder}...`;

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.mandatory}
                placeholder={newText}>
            </input>
        </div>
    )
}

export default CampoTexto;