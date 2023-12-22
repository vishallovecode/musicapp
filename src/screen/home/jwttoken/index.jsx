

import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import './home.css'


const Card = (props) =>{
    const  {item , cardClick} = props;
    return  (
            <div onClick={()=>cardClick(item._id)}  className="product-card-cont">

              <div className="img-cover">
                <img className="image" src={item.displayImage} alt="Product Image" />
              </div>
              <span className="title">{item.name}</span>
              <div className="footer">
                <span> {item.price}</span>
                <Button  variant ='outlined' onClick={cardClick}>Add</Button>
              </div>
         
            </div>
    )
}

const Home = ()=>{

    const[products , setProducts] = useState([])

    const getData = async()=> {

        const options = {
            headers: new Headers({projectID:'tpe45ahovz01' , 'Content-Type': 'application/json'} ),
        }
        const data   =  await fetch('https://academics.newtonschool.co/api/v1/ecommerce/electronics/products', options)
        const resData=  await data.json();
        setProducts(resData.data)
    }

    useEffect(()=>{
        getData()
    } , [])



    const AddCart = async (productId)=> {
        const options = {
            method: 'PATCH',
            headers: new Headers({projectID:'tpe45ahovz01' , 'Content-Type': 'application/json' ,Authorization:  `Bearer ${localStorage.getItem('token')}`} ),
            quantity: 1,
        
        }
        const data   =  await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`, options)
        const resData=  await data.json();
        console.log('item addedd successfully')
    }
    return (
        <div className="home">
         {
            products.map((obj)=>{
                return  <Card item ={obj} cardClick= {AddCart}/>
            })
         }
        </div>
    )
}

export default Home;