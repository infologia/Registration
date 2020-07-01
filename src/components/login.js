import React, { Component } from "react";
import {Redirect,Link} from "react-router-dom";
export default class Login extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
        fields: {},
        errors: {},
        emailid: "",
        Password:"",
  }
  this.handleChange = this.handleChange.bind(this);
  this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  this.closeform =this.closeform .bind(this);
}
closeform() {
  document.getElementById('errormsg1').style.display = 'none';
}

handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    if (this.validateForm1()) {
       
    let fields = {};
    fields["emailid"] = "";
    this.setState({fields:fields});
    }
  }
  validateForm1() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = false;
    this.state.isDisabled=false;
  if (typeof fields["emailid"] !== "undefined") {
  
      //regular expression for emailid validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        this.state.isDisabled=true;
        errors["emailid"] = "Please enter valid email.";
      }
    }

    this.setState({
      errors: errors
      
    });
  
  }
     submituserRegistrationForm(e) {
      e.preventDefault();
      let url="http://ec2-18-221-198-250.us-east-2.compute.amazonaws.com:9001/Register/authenticate";
      let data= {
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
          localStorage.setItem('token', resp.token);
          let tokenkey=localStorage.getItem('token');
          console.log('Login Successfully');
        
          this.props.history.push('/Form')
          return result;
        }
        else{
          document.getElementById('errormsg1').style.display = 'block';
         
          return result;
          }
    })
    })
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
           
               <h3>Login</h3>
               <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
              <div className="form-group">
               <label>Email ID</label>
               <input type="text" required name="emailid" placeholder="Enter email" className="form-control" value={this.state.fields.emailid} onChange={this.handleChange}  />
               <div className="errorMsg" style={{color: "red"}}>{this.state.errors.emailid}</div></div>
                <div className="form-group">
               <label>Password</label>
               <input type="Password" required name="Password" placeholder="Enter password" className="form-control" value={this.state.fields.Password} onChange={this.handleChange}   />
               <div className="errorMsg" style={{color: "red"}}>{this.state.errors.Password}</div></div>
               <input type="submit" className="btn btn-primary btn-block"  disabled = {this.state.isDisabled}   value="Submit" onSubmit={this.submitForm}/>
<br></br>
               <div id="errormsg1"  style={{display:"none"}}>
                <div class="alert" >
  <span class="closebtn" onClick={this.closeform}>&times;</span> 
  Invalid email/password
</div></div>
<Link className="nav-link" to={"/sign-up"} style={{marginLeft:"305px"}}>Registration</Link>
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