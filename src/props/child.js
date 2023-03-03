import React from 'react';
import Baby from './baby';
export default function Counterparent(props) {
  return (
    // <Baby count={props.count} onIncrement={props.onIncrement} onDecrement={props.onDecrement}/>
    <Baby myarray={props.myarray}/>
    
  )
}