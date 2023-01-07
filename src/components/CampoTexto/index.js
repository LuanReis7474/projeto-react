import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props.label);

    const newText = `${props.placeholder}...`;

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.mandatory} placeholder={newText}></input>
        </div>
    )
}

export default CampoTexto;