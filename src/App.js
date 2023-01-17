import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import { useState } from 'react';


function App() {

  const Times = [
    {
      nome: 'Equipe 1',
      corPrimaria: 'blue',
      corSecundaria: 'red'
    },
    {
      nome: 'Equipe 2',
      corPrimaria: 'green',
      corSecundaria: 'yellow'
    },
    {
      nome: 'Equipe 3',
      corPrimaria: 'pink',
      corSecundaria: 'orange'
    },
    {
      nome: 'Equipe 4',
      corPrimaria: 'grey',
      corSecundaria: 'white'
    }
  ];

  const [users, setUsers] = useState([]);

  const registerNewUser = (user) => {

    console.log("user", user);
    setUsers([...users, user]);
  }




  return (
    <div className="App">
      <Banner></Banner>
      <Formulario userRegister={user => registerNewUser(user)}></Formulario>
      {Times.map(time => {

        return <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={users.filter(user => user.team === time.nome)}>

        </Time>
      })}


    </div >
  );
}

export default App;
