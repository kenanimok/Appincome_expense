import './item.css'
import PropTypes from'prop-types';
const Item =(props)=>{
const {title,amount}= props
        return (
                <li className="item">{title} <span>-{amount}</span></li>
        );
}

Item .propTypes={
    title:PropTypes.string.isRequired, 
    amount:PropTypes.number.isRequired
}

export default Item