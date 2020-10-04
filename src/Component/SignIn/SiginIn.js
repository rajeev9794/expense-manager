import React from 'react'

class Signin extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             signInEmailChange:'',
             signInPasswordChange:''
        }
    }
    onEmailChange=(event)=>{
        this.setState({signInEmailChange:event.target.value});
        //console.log(event.target.value);

    }
    onPasswordChange=(event)=>{
        this.setState({signInPasswordChange:event.target.value});
        //console.log(event.target.value);

    }
    onSubmitSignIn=()=>{
        console.log(this.state)
       // this.setState({route:})
        /*fetch('http://localhost:3002/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.signInEmailChange,
                password:this.state.signInPasswordChange
            })
        }).then(Response=>Response.json())
          .then(data=>{
              if(data === 'success')
              this.props.onRouteChange('home')
              else
              alert(`user doesn't exist`);
            })
          */
        
    }
    render(){
        const {onRouteChange}=this.props;
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
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            onChange={this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password" 
                            id="password"
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