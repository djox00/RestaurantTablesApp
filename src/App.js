
import styled from './App.module.scss';
import NavBar from './Nav/NavBar';
import Panel from './Panel/Panel';
import { useState } from 'react';



function App() {

  const [Free, setFree] = useState(9); 
const [Taken, setTaken] = useState(0); 
const  [Served, setServed] = useState(0); 


  return (
    <div className={styled.App}>
      <div className={styled.page}>
     <NavBar Free={Free} Served={Served} Taken={Taken} />
     <Panel setFree={setFree} setServed={setServed} setTaken={setTaken}   />
   
     

      </div>

    </div>
  );
}

export default App;
