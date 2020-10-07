import React from 'react'

class Signin extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             signInEmail:'',
             signInPassword:'',
             designation:''
        }
    }
    onEmailChange=(event)=>{
        this.setState({signInEmail:event.target.value});
        //console.log(event.target.value);

    }
    onPasswordChange=(event)=>{
        this.setState({signInPassword:event.target.value});
        //console.log(event.target.value);

    }
    onDesignationChange=(event)=>{
        this.setState({designation:event.target.value});
        //console.log(event.target.value);

    }
    onSubmitSignIn= () => {
        
        if(this.state.designation==='engineer')
        this.props.onRouteChange('employee');
        else
        this.props.onRouteChange('manager');
    
        /*
      fetch('http://localhost:3003/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword
            })
        }).then(Response=>Response.json())
          .then(data=>{
              alert("value retured=" + data);
              if(data === 'employee')
              {
                  alert(`Successfully signin`);
                  //On signin Load User to add receipt
                  //After submitting route to home

                  this.props.onRouteChange('employee');
              }
              else if(data === 'manager')
              {
                  this.props.onRouteChange('manager');

              }
              else
              alert(`user doesn't exist`);
            })
            .catch(console.log('error occurred'))
        
            */
    }
    render(){
        const {onloadUser,onRouteChange}=this.props;
    return (
    
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center">
        <main className="pa4 black-80">
            <form className="measure ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={this.onEmailChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" 
                            id="email-address"
                            />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            onChange={this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password" 
                            id="password"
                            />
                        </div>
                        <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="designation">Designation</label>
                        <input 
                            onChange={this.onDesignationChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="designation" 
                            id="designation"
                            />
                        </div>
                            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                        </fieldset>
                            <div className="">
                                <input 
                                    onClick={this.onSubmitSignIn}

                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit"
                                     value="Sign in"
                                />
                            </div>
                                <div className="lh-copy mt3">
                                    <p onClick={()=>onRouteChange('register')} className="f4 link dim black db pointer">Register</p>
                                    <a href="#0" className="f6 link dim black db pointer">Forgot your password?</a>
                                </div>
                        </form>
                    </main>
                  </article>
                  
    )
    }
    
                        
     }
    export default Signin;
