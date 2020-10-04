import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Component/Register/Register'
import Navigation from './Component/Navigation/Navigation';
import Home from './Component/Home/Home'
import Logo from './Component/Logo/Logo'
import Signin from './Component/SignIn/SiginIn'
import Services from './Component/Services/Services'
import AboutUs from './Component/AboutUs/AboutUs'


class App extends Component
 {
  constructor(props) {
    super(props)

    this.state = {
      route:'home',
      isSignedIn:false,
      user:{
        id:'',
        name:'',
        email:'',
        company:'',
        designation:'',
        contactNumber:'',
        entry:new Date()
      }
    }
  }
  loadUser=(data)=>{
    //console.log(data.id);
    this.setState({
      user:{
        id:data.id,
        name:data.name,
        email:data.email,
        company:data.company,
        designation:data.designation,
        contactNumber:data.contactNumber,
        entry:data.entry
      }
    })
  }

onRouteChange=(route)=>{
  if(route=='signin'||route=='register')
  {
    this.setState({isSignedIn:false});
  }
  else if(route=='home')
  {
    this.setState({isSignedIn:true});

  }

  this.setState({route:route});
  console.log("set value " + this.state.route);
  console.log("Given value   "+route);
   
  }
  render(){
      return (
    
         <div className='App'>
      {
        <div>
        <Navigation onRouteChange={this.onRouteChange} />
        { 
          this.state.route==='signin' ?
          <Signin onRouteChange={this.onRouteChange}/>
          :
          <div>
          {
              this.state.route==='register'?
              <Register onRouteChange={this.onRouteChange}/>
              :
              <div>  
                {
                this.state.route==='services'?
                <Services onRouteChange={this.onRouteChange}/>
                :
                this.state.route==='aboutus'?
                <AboutUs onRouteChange={this.onRouteChange}/>
                :
                <div>                      
                <Logo/>
                <Home/>  
                </div>
              }
              </div>
      }
      
        </div>   
      }
      </div>
      
    }
      </div>

        
   
        );
      }
  
}

export default App;
