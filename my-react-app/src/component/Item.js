import './item.css'
import PropTypes from'prop-types';
import DataContext from '../data/DataContext';
import { useContext } from 'react';
const Item =(props)=>{
const {title,amount}= props

const status = amount<0 ?"expense":"income"  //เหมือน if else  ?จริง :เท็จ
const symbol =  amount<0 ?"-":"+"  //เหมือน if else  ?จริง :เท็จ
        return (

                <li className={status}>{title}  <span> {symbol} {amount}</span>
                </li>
        );
}



  
Item .propTypes={     //validation
    title:PropTypes.string.isRequired, 
    amount:PropTypes.number.isRequired  //
}

export default Item