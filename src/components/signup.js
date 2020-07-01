import React, { Component } from "react";
import {Redirect,Link} from "react-router-dom";
export default class SignUp extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
        fields: {},
        errors: {},
        Firstname:"",
        Lastname: "",
        Phonenumber: "",
        emailid: "",
        Password:"",
  }
  this.handleChange = this.handleChange.bind(this);
  this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  this.closeform =this.closeform .bind(this);
  this.closeform1 =this.closeform1 .bind(this);
  this.closeform2 =this.closeform2 .bind(this);
}
closeform() {
  document.getElementById('errormsg1').style.display = 'none';
}
closeform1() {
  document.getElementById('errormsg2').style.display = 'none';
}
closeform2() {
  document.getElementById('errormsg3').style.display = 'none';
}
handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.values;
    if (this.validateForm1()) {
       
    let fields = {};
    fields["firstname"] = "";
    fields["lastname"] = "";
    fields["emailid"] = "";
    fields["Phonenumber"] = "";
    this.setState({fields:fields});
    }
  }
  validateForm1() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "Please enter letters only.";
      }
    }

  
      if (typeof fields["lastname"] !== "undefined") {
        if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lastname"] = "Please enter letters only.";
        }
      }


    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for emailid validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Please enter valid email.";
      }
    }

    

    if (typeof fields["Phonenumber"] !== "undefined") {
      if (!fields["Phonenumber"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["Phonenumber"] = "Please enter valid Phone number.";
      }
    }

    this.setState({
      errors: errors
      
    });
  
  }
     submituserRegistrationForm(e) {
    e.preventDefault();
    let url="http://ec2-18-221-198-250.us-east-2.compute.amazonaws.com:9001/Register";
    let data= {
      Firstname : this.state.fields.firstname,
      Lastname : this.state.fields.lastname,
      Phonenumber:this.state.fields.Phonenumber,
      Emailid:this.state.fields.emailid,
      Password:this.state.fields.Password
    };
    fetch(url,{
      method:'POST',
      headers:
      {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>
    {
      result.json().then((resp)=>
    {
      console.warn("resp",resp);
      if (result.status===200) {
        console.log('Register Successfully');

        this.props.history.push('/sign-in')
        return result;
      }
      else if (result.status=== 401 && resp.response_message==="Emailid already exist.") {
        document.getElementById('errormsg1').style.display = 'block';
        console.log('Email already exist');
        return result;
        }
     else if (result.status=== 401 && resp.response_message==="Phonenumber already exist.") {
      
      console.log('Phonenumber already exist');
      document.getElementById('errormsg2').style.display = 'block';
       return result;
      }
       else {
        document.getElementById('errormsg3').style.display = 'block';
       console.log('Somthing happened wrong');
     }
  })
  })
    }
    validateForm1() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      this.state.isDisabled=false;
      if (typeof fields["firstname"] !== "undefined") {
        if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          this.state.isDisabled=true;
          errors["firstname"] = "Please enter letters only.";
        }
      }
  
    
        if (typeof fields["lastname"] !== "undefined") {
          if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            this.state.isDisabled=true;
            errors["lastname"] = "Please enter letters only.";
          }
        }
  
  
      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for emailid validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          this.state.isDisabled=true;
          errors["emailid"] = "Please enter valid email.";
        }
      }
  
      
  
      if (typeof fields["Phonenumber"] !== "undefined") {
        if (!fields["Phonenumber"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          this.state.isDisabled=true;
          errors["Phonenumber"] = "Please enter valid Phone number.";
        }
      }
  
      this.setState({
        errors: errors
        
      });
    
    }
    render()
    { 
        return(
          <div className="container">
          <div className="auth-wrapper">
          <div className="form-container">
          <div className="auth-inner">
            <div id="main-registration-container">
            <div id="register">
           
               <h3>Registration</h3>
               <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
             
               <div className="form-group">
               <label>First Name</label>
               <input type="text" required name="firstname" placeholder="Enter firstname" className="form-control" values={this.state.fields.firstname} onChange={this.handleChange} />
               <div className="errorMsg" style={{color: "red"}}>{this.state.errors.firstname}</div></div>
               <div className="form-group">
               <label>Last Name</label>
               <input type="text" required name="lastname" placeholder="Enter lastname" className="form-control" values={this.state.fields.lastname} onChange={this.handleChange} />
               <div className="errorMsg" style={{color: "red"}}>{this.state.errors.lastname}</div></div>
               <div className="form-group">
               <label>email ID</label>
               <input type="text" required name="emailid" placeholder="Enter email" className="form-control" values={this.state.fields.emailid} onChange={this.handleChange}  />
               <div className="errorMsg" style={{color: "red"}}>{this.state.errors.emailid}</div></div>
               <div className="form-group">
               <label>Phone No</label>
               <input type="text" required name="Phonenumber" placeholder="Enter phone number" className="form-control" values={this.state.fields.Phonenumber} onChange={this.handleChange}   />
               <div className="errorMsg" style={{color: "red"}}>{this.state.errors.Phonenumber}</div></div>
               <div className="form-group">
               <label>Password</label>
               <input type="Password" required name="Password" placeholder="Enter password" className="form-control" values={this.state.fields.Password} onChange={this.handleChange}   />
               <div className="errorMsg" style={{color: "red"}}>{this.state.errors.Password}</div></div>
               <input type="submit" className="btn btn-primary btn-block"  values="Submit" disabled = {this.state.isDisabled} onSubmit={this.submitForm}/>
<br></br>
               <div id="errormsg1"  style={{display:"none"}}>
                <div class="alert" >
  <span class="closebtn" onClick={this.closeform}>&times;</span> 
  Email already exist
</div></div>
<div id="errormsg2"  style={{display:"none"}}>
                <div class="alert" >
  <span class="closebtn" onClick={this.closeform1}>&times;</span> 
  Phonenumber already exist"
</div></div>
<div id="errormsg3"  style={{display:"none"}}>
                <div class="alert" >
  <span class="closebtn" onClick={this.closeform2}>&times;</span> 
  Phonenumber already exist"
</div></div>
<Link className="nav-link" to={"/sign-in"} style={{marginLeft:"345px"}}>Login</Link>
            </form>
           </div>
       </div>
       </div>
       </div>
        </div>
        </div>
        )
    }
}