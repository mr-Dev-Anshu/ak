import { useState } from "react";
export default function IncrementAndDecrement() {
  const [count, setCount] = useState(0);
      function incre () {
          setCount(count+1); // count ++ setCount (count++)......
      }
      function decre (){
         setCount (count-1);
      }
  return (
    <>
      <div className="flex gap-2">
        <p onClick={incre}  className="bg-blue-500 text-white py-1 px-2 rounded-md  cursor-pointer ">Increment</p>
        <div className="text-2xl ">{count}</div> 
     <p onClick={decre} className="bg-blue-500 text-white py-1 px-2 rounded-md  cursor-pointer ">Decrement</p>
      </div>
    </>
  );
}
