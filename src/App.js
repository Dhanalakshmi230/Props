// import { useState } from 'react';
// import Counterparent from './props/counterparent';
// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <Counterparent count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
//     </div>
//   );
// }

// export default App;

// Parent component
import React from 'react';
import Counterparent from './props/counterparent';

function App() {
   const myarray=[
    { id: 1, name: 'Karniga' },
    { id: 2, name: 'Manasa' },
    { id: 3, name: 'pavithra' }
  ];

  return (
    <div>
      <Counterparent myarray={myarray} />
    </div>
  );
}

export default App;
