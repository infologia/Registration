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
    fields[e.target.name] = e.target.value;
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

        this.props.history.push('/login')
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
                    <h3 className="login-heading mb-4">Welecome!</h3>
                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
                      <div className="form-label-group">
                        <input type="text" id="firstname" name="firstname"  className="form-control" placeholder="Enter firstname" required   value={this.state.fields.firstname} onChange={this.handleChange}/>
                        <label htmlFor="firstname">Enter firstname</label>
                        <div className="errorMsg" style={{color: "red"}}>{this.state.errors.firstname}</div>
                      </div>
                      <br></br>
                      <div className="form-label-group">
                        <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Enter lastname" required  value={this.state.fields.lastname} onChange={this.handleChange}/>
                        <label htmlFor="lastname">Enter lastname</label>
                        <div className="errorMsg" style={{color: "red"}}>{this.state.errors.lastname}</div>
                      </div>
                      <br></br>
                      <div className="form-label-group">
                  <input type="email" id="email" name="emailid" className="form-control" placeholder="Enter email"  autofocus required value={this.state.fields.emailid} onChange={this.handleChange}/>
                  <label htmlFor="email">Enter email</label>
                  <div className="errorMsg" style={{color: "red"}}>{this.state.errors.emailid}</div>
    </div>
    <br></br>
                      <div className="form-label-group">
                  <input type="number" id="phone" name="Phonenumber" placeholder="Enter phone number" className="form-control" required   value={this.state.fields.Phonenumber} onChange={this.handleChange} />
                  <label htmlFor="phone">Enter phone number</label>
                  <div className="errorMsg" style={{color: "red"}}>{this.state.errors.Phonenumber}</div>
    </div>
                <br></br>
                <div className="form-label-group">
                  <input type="password" id="password" name="Password" className="form-control" placeholder="Enter password" requiredGGJ value={this.state.fields.Password} onChange={this.handleChange} />
                  <label htmlFor="password">Enter password</label>
                  <div className="errorMsg" style={{color: "red"}}>{this.state.errors.Password}</div>
                               </div>
                <br></br>
                     <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase  mb-2" type="submit" values="Submit" disabled = {this.state.isDisabled} onSubmit={this.submitForm}>Sign up</button>
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
                     <br></br>
                     <div className="row">
                       <div className="col-md-6">
                      
                       </div>
                       <div className="col-md-6">
                       <div className="text-right">
                       <Link className="small" to={"/login"}>Login</Link>
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