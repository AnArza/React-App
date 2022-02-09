import { useState } from "react";

function Increaser(){
     let [num,setNum]=useState(0);
    return(
    <div>
        <button onClick={()=>{setNum(++num)}}>Increase</button>
        <div>{num}</div>
    </div>
    );
}
export default Increaser;