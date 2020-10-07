import React from 'react';
import './Navigation.css'
const Navigation =({isSignedIn,onRouteChange,route})=>{
   
    //console.log(`Value of signed in =${isSignedIn}`)

  
 if(route==='employee')
   {
       return(
    <nav style={{display:'flex',justifyContent:'flex-end'}} >
    <p onClick={()=>onRouteChange('home')}className='f3 link dim black underline pa3 pointer'>Home</p>        
    <p onClick={()=>onRouteChange('services') } className='f3 link dim black underline pa3 pointer'>Services</p>
    <p onClick={()=>onRouteChange('aboutus') } className='f3 link dim black underline pa3 pointer'>AboutUs</p>                          
    <p onClick={()=>onRouteChange('expenseSlip')}className='f3 link dim black underline pa3 pointer'>New ExpenseSlip</p>
    <p onClick={()=>onRouteChange('home')}className='f3 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
       );
   }
   else if(route ==='manager')
   {
    return(
        <nav style={{display:'flex',justifyContent:'flex-end'}} >
        <p onClick={()=>onRouteChange('home')}className='f3 link dim black underline pa3 pointer'>Home</p>        
        <p onClick={()=>onRouteChange('services') } className='f3 link dim black underline pa3 pointer'>Services</p>
        <p onClick={()=>onRouteChange('aboutus') } className='f3 link dim black underline pa3 pointer'>AboutUs</p>                          
        <p onClick={()=>onRouteChange('expenseSlip')}className='f3 link dim black underline pa3 pointer'>New ExpenseSlip</p>
        <p onClick={()=>onRouteChange('approveSlip')}className='f3 link dim black underline pa3 pointer'>Approve Expense Report</p>     
        <p onClick={()=>onRouteChange('home')}className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
           );   
   }
   else if(isSignedIn)
   {

    return(
        <div>
        <nav style={{display:'flex',justifyContent:'flex-end'}} >
        <p onClick={()=>onRouteChange('home')}className='f3 link dim black underline pa3 pointer'>Home</p>        
        <p onClick={()=>onRouteChange('services') } className='f3 link dim black underline pa3 pointer'>Services</p>
        <p onClick={()=>onRouteChange('aboutus') } className='f3 link dim black underline pa3 pointer'>AboutUs</p>                          
        <p onClick={()=>onRouteChange('home')}className='f3 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
    </div>
      );

       
   }
   else{
    return(
       <div>
       
        <nav style={{display:'flex',justifyContent:'flex-end'}} >       
            <p onClick={()=>onRouteChange('home') } className='f3 link dim black underline pa3 pointer'>Home</p>
            <p onClick={()=>onRouteChange('services') } className='f3 link dim black underline pa3 pointer'>Services</p>
            <p onClick={()=>onRouteChange('aboutus') } className='f3 link dim black underline pa3 pointer'>AboutUs</p>                  
            <p onClick={()=>onRouteChange('signin') } className='f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={()=>onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        

        
        </nav>
        </div>
   );
   }
   
}

export default Navigation;