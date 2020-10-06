import React from 'react'

class Employee extends React.Component{
    
    render()  
    {
    const {onRouteChange}=this.props;

            

            return(
             <div>
               <h1>User Reaching to the Employee page</h1> 
               <p onClick={()=>onRouteChange('')} >LinkChange</p>
            </div>
            );
        }
}

export default Employee;