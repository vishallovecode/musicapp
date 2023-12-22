import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import './home.css'
import MusicCard from "../../library/components/music-card"




const Home = ()=>{

    // we are going to call the api 
    // api call is asynchronous (now and later) 
    // actions we have done now and result we are getting later
    // We hit the api using fetch method provided by the web api(browser)
    // the api response and result depends on the netwrok speed and quality of network and backend code quality and server

    // how we handle asynchoronous programming in react or js 
    // We have Promises so which we use for handling the async programming like api call
    // Whta is Promises (pending , rejected , fullfilled)
  
    // we can handle the promieses using the combination of async and await
    // we should have function as async and we can use await keyword only inside the async function
    // await keyword is wait for until unldss the promises gives the result



    // async function getMusicList () {

    // }

    const getMusicList = async()=>{
            // here  i will call the api and wait for the result 
            // waiting result we can use await keyword
  
            const myheaders = new Headers();
            myheaders.append( "projectId" , "pawxm68lskm5" )
            const options = {
                method: 'GET',
                headers: myheaders
            }
            // fetch method always retunr the promises
           const data = await fetch('https://academics.newtonschool.co/api/v1/music/song' , options);
           // here data will be not in JSON format fetch does not return the data or result in json format
           // we have to convert that whole data whatever fetch is returining in json format 
           // converting fetch result into json we have a function call json()  this also return the promises
           const dataJson = await data.json();
           console.log('musicList' , dataJson)
    }


    // we want to get the api list at once while loading that route 


// useEffect(callback , dependecny)
     
    useEffect(()=>{
        getMusicList()
        // the inside useEffect runs only once at the time of load or first render if we pass dependecny as a empty array
    },[])

    return (
        <div> 
        <h2>Hey This is home</h2>
        <MusicCard/>
        </div>
    )
}

export default Home;