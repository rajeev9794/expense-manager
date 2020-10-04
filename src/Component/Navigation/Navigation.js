import React from 'react';
import './Navigation.css'
const Navigation =({onRouteChange})=>{
   
    /*if(isSignedIn)
   {
    return(
        <div>
        <nav >
        <p style={{display:'flex',justifyContent:'flex-start'}} onClick={()=>onRouteChange('home')}className='f3 link dim black underline pa3 pointer'>Home</p>        
        <p style={{display:'flex',justifyContent:'flex-end'}} onClick={()=>onRouteChange('signin')}className='f3 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
    </div>
      )

       
   }
   else{*/
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
   //}
   
}

export default Navigation;