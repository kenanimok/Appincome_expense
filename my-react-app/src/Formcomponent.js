import {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formcomponent =(props)=>{

    const [title,setTitle]=  useState('')
    const [amount,setAmount]= useState(0)

    const [formValid,setFormValid]= useState(false)

    const inpuTitle = (event)=>{
    //  console.log(event.target.value)
     setTitle(event.target.value)
    }

    const inputAmount = (event)=>{
        // console.log(event.target.value)
        setAmount(event.target.value)
       }


        useEffect(()=>{
       if(amount !==0){
            setFormValid(true)
       }
          
        },[amount])

    const saveItem =(event)=>{
        event.preventDefault()
     const itemData ={
         id:uuidv4(),
         title:title,
        amount:Number(amount)
     }
   
     props.onAddItem(itemData)
     setTitle('')
     setAmount(0)
    }
        return (
            <div>
                 <form onSubmit ={saveItem}>
                      <div className="form-control">
                          <label> ชื่อรายการ </label>
                          <input type="text" onChange={inpuTitle} value={title}/>
                      </div>
                      <div className="form-control">
                          <label> จำนวนเงิน </label>
                          <input type="number" onChange={inputAmount}  value={amount}/>
                      </div>

                        <div> <button type="submit" disabled={!formValid}> เพิ่มข้อมูล</button></div>

                 </form>
            </div>            
        );
}

export default Formcomponent