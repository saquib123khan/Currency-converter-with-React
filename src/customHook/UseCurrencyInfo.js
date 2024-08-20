import {useEffect, useState} from 'react'
export const UseCurrencyInfo = (currency) => {
    const [data, setData] = useState({})
    const API = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    
    useEffect(()=> {
         fetch(API)
         .then((res) => res.json())
         .then((res) => setData(res[currency]))
         console.log(data);
    },[currency])
    console.log(data);
    return data
}