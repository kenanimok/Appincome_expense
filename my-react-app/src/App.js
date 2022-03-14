import logo from './logo.svg';
import './App.css';
import Transaction from './component/Transaction';
import Formcomponent from './component/Formcomponent';
import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect,useReducer} from "react";
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';

function App() {
   const desingn = {color:"red",textAlign:"center",fontSize:'1.5rem'}
   const initState = [
      // {id:1,title:"ค้่าเช้าบ้าน",amount:-2000},
      // {id:2,title:"เงินเดิอน",amount: 2000},
      // {id:3,title:"ค้่าเช้าบ้าน",amount:-2000},
      // {id:4,title:"ค้่าเช้าบ้าน",amount:-2000},

   ]

  const [items,setItems] = useState(initState) //กำหนดค่าเริ่มต้นเป็น itnitData เป็น array
  const [reportIncome,setReportIncome]= useState(0)
  const [reportExpense,setReportExpense]=useState(0)
  const  onAddNewItem = (newItem)=>{       //ดึงข้อมูลมาจาก formcomponentโดยใช้  newItem
     
      setItems ((prevItem) =>{
        return[newItem,...prevItem]
     })
        
  }
 useEffect(()=>{
    const amounts =  items.map(item=>item.amount)
   const income =  amounts.filter(element => element>0).reduce((total,element)=> total += element,0)
   const expense =  (amounts.filter(element => element<0).reduce((total,element)=> total += element,0))*-1   //*-1 เพื้อ ให้ เวลารวมรายจ่ายไม่เปนค่าลบ

   setReportExpense(expense)
   setReportIncome(income)
},[items],reportExpense,reportIncome)


const [showReport,setShowReport] = useState(false)
const reducer = (state,action)=>{
      switch(action.type){
         case "SHOW":
            return setShowReport(true)
         case "HIDE":
            return setShowReport(false)
            case "CLEAR":
            return 0 
      }
}
const [result,dispatch] = useReducer(reducer,showReport)
  return (
     <DataContext.Provider value={
      {
         income:reportIncome,
         expense:reportExpense,
      }  
     }>
      <div className="container">
         <h1 style={{coloe:"red",textAlign:"center"}}>โปรแกรมรายรับ รายจ่าย</h1>
             {showReport && <ReportComponent/>} 
            <Formcomponent onAddItem={onAddNewItem}></Formcomponent>
            <Transaction items={items}/>   
      </div>

      <div align="center">
         <h1>{result}</h1>
         <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
         <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
      </div>
     </DataContext.Provider>


    

  );
}

export default App;
