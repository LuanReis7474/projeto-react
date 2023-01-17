

const ListaSupensa = (props) => {

    console.log(props.itens, props.label);

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <select value={props.value} onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => {

                    return <option key={item}>{item}</option>
                })}
            </select>
        </div >
    )
}

export default ListaSupensa;