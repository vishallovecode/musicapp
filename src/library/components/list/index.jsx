import './list.css'
const List = (props)=> {
    console.log(props.item)
    const {Icon , text} = props.item
    return  (
        <div className="flex  list"> 
            {Icon}
            <span>{text}</span>
        </div>
    )
}


export default List;