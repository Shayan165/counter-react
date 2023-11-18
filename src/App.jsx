import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

let Additem = ()=>{
  if (count == 10) {
    alert("count is greater than 10");
    setCount(count = 10)
  }
  else{
    setCount(count + 1);
  }
}
let Removeitem = ()=>{
  if(count > 0){
    setCount(count - 1);
  }
  else{
    setCount(count)
  }
  
}



  return (
    <>
    <h1>{count}</h1>
      <button onClick={Additem}>Add item</button>
      <br />
      <br />
      <button onClick={Removeitem}>Remove item</button>
    </>
  )
}

export default App
