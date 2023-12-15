const List = (props)=> {
    const {Icon , text} = props.item
    return  (
        <div className="flex justify-between"> 
            {Icon}
            <span>{text}</span>
        </div>
    )
}


export default List;