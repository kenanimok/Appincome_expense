import logo from './logo.svg';
import './App.css';
import Transaction from './Transaction';
import Formcomponent from './Formcomponent';
import { v4 as uuidv4 } from 'uuid';

function App() {
   const desingn = {color:"red",textAlign:"center",fontSize:'1.5rem'}
   const initData = [
      {id:1,title:"ค่ารักษาพยาบาล",amount:3000},
      {id:2,title:"ค่านน้ำ",amount:500},
      {id:3,title:"ค่านม",amount:444}
  ]

  const  onAddNewItem = (newItem)=>{
         console.log("ดูnewItem",newItem)
  }

  return (
      <div className="container">
         <h1 style={{coloe:"red",textAlign:"center"}}>โปรแกรมรายรับ รายจ่าย</h1>
           
            
            <Formcomponent onAddItem={onAddNewItem}></Formcomponent>
            <Transaction items={initData}/>
            

      </div>

    

  );
}

export default App;
