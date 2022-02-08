import {useState} from 'react';
const Formcomponent =()=>{

    const [title,setTitle]=  useState('')
    const [amount,setAmount]= useState(0)

    const inpuTitle = (event)=>{
    //  console.log(event.target.value)
     setTitle(event.target.value)
    }

    const inputAmount = (event)=>{
        // console.log(event.target.value)
        setAmount(event.target.value)
       }


    const saveItem =(event)=>{
        event.preventDefault()
     const itemData ={
         title:title,
        amount:Number(amount)
     }
     console.log("ดุitemdata",itemData);
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

                        <div> <button type="submit">เพิ่มข้อมูล</button></div>

                 </form>
            </div>            
        );
}

export default Formcomponent