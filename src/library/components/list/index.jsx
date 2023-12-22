import { Link, NavLink } from 'react-router-dom'
import './list.css'
const List = (props)=> {
    console.log(props.item)
    const {Icon , text , to} = props.item
    return  (
        <Link  to = {to} className="flex  list"> 
            {Icon}
            <span>{text}</span>
        </Link>
    )
}


export default List;