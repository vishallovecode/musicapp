import './style.css'
const MusicCard =(props)=>{
    //props => {item: object}
    const {title , thumbnail , artist}= props.item;
    return  (
        <div className="card-container">
            <img src={thumbnail}/>
            <span className='title'>{title}</span>
            <span className='artist'>{artist?.[0]?.name}</span>
        </div>
    )
}

export default MusicCard;