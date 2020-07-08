import React, { Component } from "react";
import {Redirect,Link} from "react-router-dom";
export default class Test extends Component {

//   constructor(props)
//   {
//     super(props);
//     this.state = {
//         fields: {},
//         errors: {},
//         emailid: "",
//         Password:"",
//   }
//   this.handleChange = this.handleChange.bind(this);
//   this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
//   this.closeform =this.closeform .bind(this);
// }
// closeform() {
//   document.getElementById('errormsg1').style.display = 'none';
// }

// handleChange(e) {
//     let fields = this.state.fields;
//     fields[e.target.name] = e.target.value;
//     if (this.validateForm1()) {
       
//     let fields = {};
//     fields["emailid"] = "";
//     this.setState({fields:fields});
//     }
//   }
//   validateForm1() {

//     let fields = this.state.fields;
//     let errors = {};
//     let formIsValid = false;
//     this.state.isDisabled=false;
//   if (typeof fields["emailid"] !== "undefined") {
  
//       //regular expression for emailid validation
//       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//       if (!pattern.test(fields["emailid"])) {
//         formIsValid = false;
//         this.state.isDisabled=true;
//         errors["emailid"] = "Please enter valid email.";
//       }
//     }

//     this.setState({
//       errors: errors
      
//     });
  
//   }
//      submituserRegistrationForm(e) {
//       e.preventDefault();
//       let url="http://ec2-18-221-198-250.us-east-2.compute.amazonaws.com:9001/Register/authenticate";
//       let data= {
//         Emailid:this.state.fields.emailid,
//         Password:this.state.fields.Password
//       };
//       fetch(url,{
//         method:'POST',
//         headers:
//         {
//           "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)
//       }).then((result)=>
//       {
//         result.json().then((resp)=>
//       {
//         console.warn("resp",resp);
//         if (result.status===200) {
//           localStorage.setItem('token', resp.token);
//           let tokenkey=localStorage.getItem('token');
//           console.log('Login Successfully');
        
//           this.props.history.push('/Form')
//           return result;
//         }
//         else{
//           document.getElementById('errormsg1').style.display = 'block';
         
//           return result;
//           }
//     })
//     })
//     }

    render()
    { 
        return(
            <div >
                 <div class="header_design w-100">
                     <div class="text-black"><div class="border-image m-4"></div></div>
                     <div className="text-right"> Naveen</div>
                 </div>
              <div class="body_UX">
                  <div class="body_color_code m-4">
                      <div class="step_wizrd">
                      <div class="step">
                      <div class="step1"><div class="circle_step1"><div class="step1_word"><div className="circle_back1"></div> Step1</div> </div></div>
                      <div class="step2"><div class="circle_step2"><div class="step2_word"><div className="circle_back2"></div>Step2</div> </div></div> </div>  <div class="step11">
                      <div class="step3"><div class="circle_step3"><div class="step3_word"><div className="circle_back3"></div>Step3</div> </div></div>
                      <div class="step4"><div class="circle_step4"><div class="step4_word"><div className="circle_back4"></div>Step4</div> </div></div>
                      <div class="step4"><div class="circle_step5"><div class="step5_word"><div className="circle_back5"></div>Step5</div> </div></div></div>
                      </div>
                      <div class="row"><div class="col-md-1">
                          </div><div class="col-md-10">
                      <br></br><br></br> <div class="box">
                          <div class="row"><div class="col-md-3">
                          <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      <input class="input" type="text"/>
                              </div>
                              <div class="center col-md-3">
                      <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      </div>
                          
                      <div class="center col-md-3"> 
                      <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      </div>
              <div class="col-md-3">
              <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      <input class="input" type="text"/>
                      <input class="input" type="text"/></div></div></div>
</div><div class="col-md-1"></div></div>
              <div class="row"> <div class="col-md-3">  <button  class="pev">Preview</button></div><div class="col-md-5"> </div> <div class="col-md-4"><button  class="next">Next</button></div></div>
              </div>
             
            </div> </div>


        )
    }
}