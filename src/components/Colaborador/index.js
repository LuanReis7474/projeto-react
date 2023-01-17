import './Colaborador.css'

const Colaborador = ({ nome, cargo, idade }) => {


    return (
        <div className='card'>
            <div className='img-perfil'>
                <img src='./perfil.png' alt='' />
            </div>
            <div className='text'>
                <h4>{nome} - {idade}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;