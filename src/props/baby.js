// import React from "react";
// function Counterbaby (props) {
//     return (
    //   <div className="justify-content-center">
    //     <button btn btn-success onClick={props.onIncrement}>Increment</button>
    //     <span>{props.count}</span>
    //     <button btn btn-danger onClick={props.onDecrement}>Decrement</button>
    //   </div>
    // Child component
    import React from 'react';

    function BabyComponent(props) {
      const { myarray } = props;
    
      return (
        <table className="table table-striped ">
        
      
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {myarray?.map((item,index) => {
              return(
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
              )
    })}
          </tbody>
        </table>
      );
      
    }
    
    export default BabyComponent;
    

// export default ChildComponent;

//     );
//   }
  
 