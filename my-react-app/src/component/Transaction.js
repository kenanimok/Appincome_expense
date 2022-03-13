
import Item from "./Item";
import DataContext from "../data/DataContext";


const Transaction =(props)=>{
 const {items}  = props

   return (
     <div>
      <ul>
            {items.map((element)=>{
                    return (
                      <Item title={element.title} amount={element.amount} key={element.id}/>  //space operator
                    );    
            })}
      </ul>
      <DataContext.Consumer>
          {value=><p>{value}</p>}          
            
      </DataContext.Consumer>
     </div>

   );
}


export default Transaction