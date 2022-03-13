import logo from './logo.svg';
import './App.css';
import Transaction from './component/Transaction';
import Formcomponent from './component/Formcomponent';
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";
import DataContext from './data/DataContext';

function App() {
   const desingn = {color:"red",textAlign:"center",fontSize:'1.5rem'}
   const initData = [
      {id:1,title:"ค่ารักษาพยาบาล",amount:3000},
      {id:2,title:"ค่านน้ำ",amount:500},
      {id:3,title:"ค่านม",amount:444}
  ]
 
  const [items,setItems] = useState(initData) //กำหนดค่าเริ่มต้นเป็น itnitData เป็น array


  const  onAddNewItem = (newItem)=>{       //ดึงข้อมูลมาจาก formcomponentโดยใช้  newItem
     setItems ((prevItem) =>{
        return[newItem,...prevItem]
     })
        
  }

  return (
     <DataContext.Provider value={"kenanimok"}>
      <div className="container">
         <h1 style={{coloe:"red",textAlign:"center"}}>โปรแกรมรายรับ รายจ่าย</h1>
            <Formcomponent onAddItem={onAddNewItem}></Formcomponent>
            <Transaction items={items}/>   
      </div>
     </DataContext.Provider>
   
    

  );
}

export default App;
