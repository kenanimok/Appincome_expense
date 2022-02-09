
import Item from "./Item";


const Transaction =(props)=>{
 const {items}  = props

   return (
      <ul>
            {items.map((element)=>{
                    return (
                      <Item title={element.title} amount={element.amount} key={element.id}/>  //space operator
                    );
                            
                    
            })}
      </ul>
   );
}


export default Transaction