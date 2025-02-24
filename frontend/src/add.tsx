import { useState } from "react"

export default function Addition(){
    const [count, setCount] = useState(0);

    return(
        <>
        <button className="px-2 py-1 border-2 rounded m-1" onClick={()=>{ setCount(count-1)}} >-</button>
        <input className="w-1/4 p-1 border-0" type="text" value={count}/>
        <button className="px-2 py-1 border-2 rounded m-1" onClick={()=>{ setCount(count+1)}}>+</button>
        </>
    )
}