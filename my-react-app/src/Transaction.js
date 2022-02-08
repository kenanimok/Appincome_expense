
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

const Transaction =()=>{
    const data = [
        {title:"ค่ารักษาพยาบาล",amount:3000},
        {title:"ค่านน้ำ",amount:500},
        {title:"ค่านม",amount:444}
    ]

   return (
      <ul>
          {/* <Item title={data[0].title} amount={data[0].amount} />
          <Item title={data[1].title} amount={data[1].amount} />                   //เรียกมาทีละตัว
          <Item title={data[2].title} amount={data[2].amount}/> */}



            {data.map((element)=>{
                    return (
                        // <Item title={element.title} amount={element.amount}/> ธรมมดา
                            // <Item {...element} key={uuidv4()}/>  //space operator

                             <Item title={element.title} amount={element.amount} key={uuidv4()}/>  //space operator
                    );
                            
                    
            })}
      </ul>
   );
}


export default Transaction