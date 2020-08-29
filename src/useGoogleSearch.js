import {useState, useEffect } from 'react';
import API_KEY from "./keys";

const CONTEXT_KEY = "0799f382c348b7e0b";

// creating custom hook
const useGoogleSearch = (term) =>{
   const [data , setData] = useState(null);

   useEffect( ()=> {

    const fetchData = async() => { // it means asynhronously fetch from this url
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(res => res.json()) // convert the fetched result in form of json
        .then(result => {
            setData(result)    // set that response from the fetchData in result
        })
    }


    fetchData();
   },[term]) //term is a data layer variable: when ever we change it it will fire the useEffect and this useEffect will fetch the searchResults from google
 
   return {data} //return the result as an object named data.
};

export default useGoogleSearch;