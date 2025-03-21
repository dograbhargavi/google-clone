import { useState, useEffect } from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY //YOUR_CONTEXT_KEY

const useGoogleSearch = (term)=> {
const [data,setData] = useState(null);

useEffect(()=>{
const fetchData = async() => {
    if(term!==''){
    fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    )
    .then(res => res.json())
    .then(result => {
        // console.log('&&&&&&&&&&&&&&&&&&&&&& google serch hook call', result)
        setData(result)
    })
}
}

fetchData();

},[term])

return { data };
};

export default useGoogleSearch
