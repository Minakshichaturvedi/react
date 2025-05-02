import { useState,useEffect } from "react";


function App() {
 
  return <div>
   <Counter> </Counter>
  </div>
   
}
//mounting , re - rendering , unmounting
function Counter(){
  //let count = 0 ;
  const [count , setCount] = useState(0);
//hooking into the lifecycle events of react
  //gaurd our setinterval from re rendering
useEffect(function(){
  setInterval(function() {
    // setCount( count => count+1);
    setCount( function(count){
      return count+1;
    });
   //clearInterval
   //react is diffing library
  } , 1000)
  console.log("mounted");
} , []);


// setInterval(function() {
//     setCount(count+1);
//   } , 1000)
  function increaseCount(){
    //count = count +1;
    setCount(count +1);
  }

  // function decreaseCount(){
  //   setCount(count -1);
  // }
  // function resetCount(){
  //   setCount(0);
  // }
  return <div>
    <h1>1</h1>
    <button onClick={increaseCount}>Increase count</button>
   {/* <button onClick={decreaseCount}>decrease count</button>
    <button onClick={resetCount}>reset count</button> */}

  </div>
  
}
export default App
//dependecy array , prop(is like an argument to the function)
