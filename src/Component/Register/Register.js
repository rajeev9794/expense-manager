import React from 'react'

class Register extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             password:'',
             companyName:'',
             designation:'',
             contactNumber:'',
             joined:''
        }
    }
    onChangeName=(event)=>{
        this.setState({name:event.target.value})
    }
    onChangeEmail=(event)=>{
        this.setState({email:event.target.value})
    }
    onChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
    onChangeDesignation=(event)=>{
        this.setState({designation:event.target.value})
    }
    onChangeContact=(event)=>{
        this.setState({contactNumber:event.target.value})
    }
    
    onRegister=()=>{
        if(this.state.designation==='engineer')
        this.props.onRouteChange('employee');
        else
        this.props.onRouteChange('manager');


        /*
        //console.log('Changed state '+this.state.route);
        //alert('I am inside onRegister');
        //this.props.loadUser();
        this.props.onRouteChange('employee')
        /*
        console.log('Current state designation =' +this.state.designation);
        if(this.state.designation==='employee')
            this.props.onRouteChange('employee');
        else
            this.props.onRouteChange('manager');
        /*
        fetch('http://localhost:3003/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
                companyName:this.state.companyName,
                designation:this.state.designation,
                contactNumber:this.state.contactNumber,
                joined:new Date()           
            })
        }).then(Response=>Response.json())
          .then(user=>{
                if(user)
                {   
                    //On successfully registering load user data 
                    this.props.loadUser(user);
                    if(user.designation==='employee')
                    this.props.onRouteChange('employee');
                    else
                    this.props.onRouteChange('manager');
                }
                
            })
          */  
    }
    
    render(){
    return (
    
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center">
        <main className="pa4 black-80">
            <form className="measure ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                            onChange={this.onChangeName}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name" 
                            id="name"
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            onChange={this.onChangeEmail}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" 
                            id="email-address"
                        />
                    </div>
                      
                   
                    <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                onChange={this.onChangePassword} 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password" 
                                id="password"
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="CompanyName">CompanyName</label>
                            <input
                                onChange={this.onChangeCompanyName} 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="comapnyName" 
                                id="comapnyName"
                            />
                        </div>
                    <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="Designation">Designation</label>
                            <input
                                onChange={this.onChangeDesignation} 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="designation" 
                                id="designation"
                            />
                        </div>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="ContactNumber">ContactNumber</label>
                            <input
                                onChange={this.onChangeContact} 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="contactNumber" 
                                id="contactNumber"
                            />
                        </div>

                
                </fieldset>

               <div className="">
                    <input

                                    onClick={this.onRegister}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    value="Register"
                                />
                            </div>
                                
                        </form>
                    </main>
                  </article>
                  
            )
    }
                        
} 
    export default Register;
