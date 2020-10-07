import { render } from '@testing-library/react';
import React, { Component } from 'react'

class ApprovalSlip extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             reportName:'',
             contactNumber:'',
             reportAddress:'',
             totalExpenses:'',
             reportDate:'',
             expenseType:'',
             businessPurpose:'',
             country:'',
             message:'',
             imageUpload:''

        }
    }
    onChangeReportName=(event)=>{
        this.setState({reportName:event.target.value})
    }
    onChangeContactNumber=(event)=>{
        this.setState({contactNumber:event.target.value})
    }
    onChangeReportAddress=(event)=>{
        this.setState({reportAddress:event.target.value})
    }
    onChangeTotalExpenses=(event)=>{
        this.setState({designation:event.target.value})
    }
    onChangeReportDate=(event)=>{
        this.setState({reportDate:event.target.value})
    }
    onChangeExpenseType=(event)=>{
        this.setState({expenseType:event.target.value})
    }
    onChangeBusinessPurpose=(event)=>{
        this.setState({businessPurpose:event.target.value})
    }
    onChangeCountry=(event)=>{
        this.setState({country:event.target.value})
    }
    onChangeMessage=(event)=>{
        this.setState({message:event.target.value})
    }
    onChangeImageUpload=(event)=>{
        this.setState({imageUpload:event.target.value})
    }
    onSubmit=()=>{
        console.log("value "+ this.state.contactNumber);
    }
    render(){
    return (      
          
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center">
    <main className="pa4 black-80">
        <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Expense Report</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Report Name</label>
                    <input 
                        onChange={this.onChangeReportName}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="name" 
                        id="name"
                    />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="number">Contact Number</label>
                 <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                onChange={this.onChangeContactNumber}
                 type="tel" 
                 name="phone" 
                 pattern="[1-9]{1}[0-9]{9}" 
                 placeholder="1234590678"/>
                    
                    
                </div>
                <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="expense type">Expense Type</label>
                        <select
                            onChange={this.onChangeExpenseType} 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="number" 
                            min="0"
                            name="number" 
                            id="Expense Type"
                        >
                        <option value=" 1" >Expense Type</option>
                        <option value="1">Airfare</option>
                        <option value="1">Hotels</option>
                        <option value="1">Restaurant</option>
                        <option value="1">Meeting with Clients</option>
                        </select>
                    </div>   
               
               
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="Total Expenses">Total Expenses</label>                       
                        <input
                            onChange={this.onChangeTotalExpenses} 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="number" 
                            min="0"
                            name="companyName" 
                            id="companyName"
                        />
                    </div>

                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="bussiness purpose">Business Purpose</label>
                        <input
                            onChange={this.onChangeBusinessPurpose} 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="business" 
                            id="business purpose"
                        />
                    </div>
                <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="reportDate">Report Date</label>
                        <input
                            onChange={this.onChangeReportDate} 
                            className="b pa2 input-reset ba bg-transparent hover-white w-90" 
                            type="date" 
                            name="Report Date" 
                            id="report Date"
                        />
                    </div>
                    
               

                  
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="country">Country</label>
                        <input
                            onChange={this.onChangeCountry} 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="country" 
                            id="country"
                        />
                    </div>
                    <div className="mt3">
                   <label className="db fw6 lh-copy f6" htmlFor="image Upload">Upload Receipt</label>
                    <input 
                    onChange={this.onChangeImageUpload} 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
                    type="file" 
                     name="filename"  
                    id="image Upload"
                    />
                        
                        
                    </div>
            </fieldset>

           <div className="">
                <input
                                onClick={this.onSubmit}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="ApproveExpense"
                            />
                        </div>
                            
                    </form>
                </main>
              </article>
              
       

    
);    

}
}

export default ApprovalSlip;