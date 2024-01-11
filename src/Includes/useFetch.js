import { useState } from "react"

export const useFetch = () =>{
    const [data,setData] = useState([])
    const [api,setApi] = useState(`https://dummyjson.com/products`)

    const getData =async (limit=16,category)=>{
        if(category){
            setApi(`https://dummyjson.com/products/category/${category}`)
        }
        const res =await fetch(`${api}?limit=${limit}`)
        const infos =await res.json()
        setData(infos)
    }

    return [data,getData]
}