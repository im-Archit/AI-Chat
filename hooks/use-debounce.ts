
import { useEffect, useState } from 'react';


export function useDebounce<t>(value: t, delay?:number):t{ 

    const [debouncedValue, setDebouncedValue]= useState(value)
    useEffect(()=>{
        const timer = setTimeout(()=> setDebouncedValue(value), delay || 500)

        return () =>{
            clearTimeout(timer);
        }
    },[value,delay])

return debouncedValue;
}