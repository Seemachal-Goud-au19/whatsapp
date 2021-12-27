
import React,{useEffect,useState} from 'react';


export default function Assignment() {
    let [info,setInfo] = useState([]);


    
        
       
         
    
    useEffect(() => {
      fetch("http://www.mocky.io/v2/59ac28a9100000ce0bf9c236").then((res=>res.json()))
      .then((data=>setInfo(data.posts))); 
     
      console.log(info) 
    }, [])

    return (
        <div>
        hello
          {}
        </div>
    )
}
