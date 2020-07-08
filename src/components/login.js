import React, { Component } from "react";
import {Link} from "react-router-dom";
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
          localStorage.setItem('firstname', resp.firstname);
          localStorage.setItem('lastname', resp.lastname);
          localStorage.setItem('token', resp.token);
          let fname=localStorage.getItem('firstname');
          let lname=localStorage.getItem('lastname');
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
        <div className="container-fluid">
  <div className="row no-gutter">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
    </div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <div><img src="logo.png" style={{width:"360px"}} ></img></div>
            <br></br>
              <h3 className="login-heading mb-4">Welcome!</h3>
              <form method="post"  name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm}>
                <div className="form-label-group">
                  <input type="email" id="emailid" className="form-control" name="emailid" placeholder="Email address" required autofocus value={this.state.fields.emailid} onChange={this.handleChange} />
                  <label htmlFor="emailid">Email address</label>
                  <div className="errorMsg" style={{color: "red"}}>{this.state.errors.emailid}</div>
                </div>
                <br></br>
                <div className="form-label-group">
                  <input type="password" id="Password" className="form-control" name="Password" placeholder="Password" required value={this.state.fields.Password} onChange={this.handleChange}/>
                  <label htmlFor="Password">Password</label>
                  <div className="errorMsg" style={{color: "red"}}>{this.state.errors.Password}</div>
                </div>
                <br></br>
               <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase  mb-2" type="submit" value="Submit" onSubmit={this.submitForm}>Sign in</button>
               <br></br>
               <div id="errormsg1"  style={{display:"none"}}>
                <div class="alert" >
  <span class="closebtn" onClick={this.closeform}>&times;</span> 
  Invalid email/password
</div></div>
<br></br>
               <div className="row">
                 <div className="col-md-6">
                 <div className="text-left">
               <Link className="small" to={"/Sign-Up"}>Register Now</Link>
               </div>
                 </div>
                 <div className="col-md-6">
                 <div className="text-right">
               <a className="small"  href="#">Forgot password?</a>
              </div>
                 </div>
               </div>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}