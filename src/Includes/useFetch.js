import { useState } from "react"

export const useFetch = () =>{
    const [data,setData] = useState([])
    const getData =async ({limit,category})=>{
        const res =await fetch(`https://dummyjson.com/products?limit=${limit}`)
        const infos =await res.json()
        setData(infos)
    }

    return [data,getData]
}