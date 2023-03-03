import React from 'react';
import Child from './child';
export default function counterparent(props) {
  return (
    // <Child count={props.count} onIncrement={props.onIncrement} onDecrement={props.onDecrement}/>
   
    <Child myarray={props.myarray}/>
  )
}


  
