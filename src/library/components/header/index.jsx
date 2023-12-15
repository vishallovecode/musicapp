import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import List from '../list';


const nav_data = [ {Icon: <HomeIcon/> , text: 'Home'} , {Icon: <FeedIcon/>  , text: 'Social'} , {Icon: <LibraryMusicIcon/> , text: 'Library'}]

const Header = (props)=> {
    return  (
        <div className="flex ">
            {nav_data.map((item)=>{
                return <List  item = {item}/>
            })}
        </div>
    )
}

export default  Header;