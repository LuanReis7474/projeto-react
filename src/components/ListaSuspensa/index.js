
const ListaSupensa = (props) => {

    console.log(props.itens, props.label);

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSupensa;