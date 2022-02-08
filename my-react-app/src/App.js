import logo from './logo.svg';
import './App.css';
import Transaction from './Transaction';
import Formcomponent from './Formcomponent';


function App() {
   const desingn = {color:"red",textAlign:"center",fontSize:'1.5rem'}
  return (
      <div className="container">
         <h1 style={{coloe:"red",textAlign:"center"}}>โปรแกรมรายรับ รายจ่าย</h1>
           
            
            <Formcomponent></Formcomponent>
            <Transaction></Transaction>

      </div>

    

  );
}

export default App;
