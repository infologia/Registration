import React, { Component } from 'react';
import {Redirect,Link} from "react-router-dom";
export class Witness extends Component
{
  state={
    relationshiperror:"",
    witnessnameerror:"",
    gfatherhusbandnameerror:"",
    fathhusnameerror:"",
    Street8error:"",
    Taluk8error:"",
    Village8error:"",
    District8error:"",
    State8error:"",
    Country8error:"",
    Pincode8error:"",
    idcarderror:"",
 } 
      
     continue=e=>{
      e.preventDefault();
      const isValid=this.validateForm();
      if(isValid){
        this.props.nextStep(); 
      }
    };

    back = e => {
      e.preventDefault();
      this.props.prevStep();
  };

  validateForm() {
    let isValid = true;
    const {value:{  relationship,witnessname,fatherhusbandname,fathhusname,Street8,Village8,Taluk8,District8,State8,
      Country8,Pincode8,idcard}}=this.props;

let   relationshiperror="";
let   witnessnameerror="";
let fatherhusbandnameerror="";
let fathhusnameerror="";
let Street8error="";
let Taluk8error="";
let Village8error="";
let District8error="";
let State8error="";
let Country8error="";
let Pincode8error="";
let idcarderror="";

if(  relationship===""||  relationship===undefined)
{
  relationshiperror="Please select relationship";
  isValid=false;
}

if(  witnessname===""||  witnessname===undefined)
{
  witnessnameerror="Please enter witnessname";
  isValid=false;
}

if(  witnessname===""||  witnessname===undefined)
{
  witnessnameerror="Please enter witnessname";
  isValid=false;
}

if(  fatherhusbandname===""||  fatherhusbandname===undefined)
{
  fatherhusbandnameerror="Please select value";
  isValid=false;
}

if(  idcard===""||  idcard===undefined)
{
  idcarderror="Please select value";
  isValid=false;
}


if(  Street8===""||  Street8===undefined)
{
  Street8error="Please enter street";
  isValid=false;
}

if(  Taluk8===""||  Taluk8===undefined)
{
  Taluk8error="Please enter taluk";
  isValid=false;
}

if(  Village8===""||  Village8===undefined)
{
  Village8error="Please enter village";
  isValid=false;
}

if(  District8===""||  District8===undefined)
{
  District8error="Please enter district";
  isValid=false;
}

if(  State8===""||  State8===undefined)
{
  State8error="Please enter state";
  isValid=false;
}

if(  Country8===""||  Country8===undefined)
{
  Country8error="Please enter country";
  isValid=false;
}

if(  Pincode8===""||  Pincode8===undefined)
{
  Pincode8error="Please enter pincode";
  isValid=false;
}

this.setState({relationshiperror,witnessnameerror,fatherhusbandnameerror,Street8error,Taluk8error,
  Village8error,District8error,State8error,Country8error,Pincode8error,idcarderror	})
return isValid;


  }
  closeform=e=>
  {
    window.localStorage.clear();
    this.setState({referrer: '/sign-in'});
  }

    render()
    { const {referrer} = this.state;
    if (referrer) return <Redirect to={referrer} />;

  var fname=localStorage.getItem('firstname');
  var lname=localStorage.getItem('lastname');
        const {value,inputChange}=this.props;
        const {value:{relationship,witnessname,fatherhusbandname,fathhusname,Street8,Village8,Taluk8,District8,State8,Country8,Pincode8,idcard,idcardno}}=this.props;
        return(
          <div >
         <div class="header_design w-100">
        <div class="row float-right m-3" style={{marginRight:"20px"}}> <b style={{marginTop: "7px"}}><label >Welcome {fname }</label></b> &nbsp; &nbsp;<button style={{marginTop: "-7px"}} className="btn btn-primary" onClick={() => this.closeform()} style={{marginToptop: "-7px"}}>logout</button></div>
          <div class="text-black"> 
              <div class="text-black">
                <div class="border-image p-4"></div>  </div>
                
                </div>    </div>
         
       <div class="body_UX">  
      <div class="body_color_code m-4">
             <div className="img_logo"></div>
           <br></br>
<br></br><br></br>

                      <div class="box m-4">
           <div className="form-container ">
              <br></br>
          <h1>Witness</h1>
          <div class="row">
      <div class="col-md-3">
      <label>Relationship<span style={{color:"red"}}> *</span> </label>
      <select id="beforemarr" className="input" name="relationship" value={value.relationship} onChange={inputChange('relationship')} >
<option value="0">Select value</option>
  <option value="1">BRIDE'S MOTHER</option>
  <option value="2">BRIDES FATHER</option>
  <option value="3">BRIDEGROOM'S MOTHER</option>
  <option value="4">BRIDEGROOM'S FATHER</option>
  <option value="5">BROTHER</option>
  <option value="6">SISTER</option>
  <option value="7">UNCLE</option>
  <option value="8">AUNTY</option>
  <option value="9">FRIENDS</option>
  <option value="10">NEIGHBOUR</option>
  <option value="11">OTHERS</option>
</select> 
<p style={{color:"red"}}>{this.state.relationshiperror}</p>
      </div>
      <div class="col-md-3">
      <label>Name<span style={{color:"red"}}> *</span> </label>
      <input type="text" className="input" name="witnessname" value={value.witnessname} onChange={inputChange('witnessname')}/>
      <p style={{color:"red"}}>{this.state.witnessnameerror}</p>
         </div>
      <div class="col-md-3">
      <label>Father's Name/Husband's Name</label>
      <select  className="input" name="fatherhusbandname" value={value.fatherhusbandname} onChange={inputChange('fatherhusbandname')} >
      <option value="0">Select value</option>
  <option value="1">Father's Name</option>
  <option value="2">Husband's Name</option>
</select> 

<p style={{color:"red"}}>{this.state.fatherhusbandnameerror}</p>
      </div>
    </div>
    <div class="col-md-12"> 
    <h6 className="text-left"><br></br>Address </h6></div>
<div class="row">
<div class="col-md-3">
              <div class="form-group">
<label>Street<span style={{color:"red"}}> *</span> </label>
<input type="text" name="Street8" value={value.Street8} onChange={inputChange('Street8')} className="input"  />
<p style={{color:"red"}}>{this.state.Street8error}</p>
 </div>
              </div>
              <div class="col-md-3">
              <div class="form-group">
<label>Village<span style={{color:"red"}}> *</span> </label>
<input type="text" name="Village8" value={value.Village8} onChange={inputChange('Village8')} className="input"  />
<p style={{color:"red"}}>{this.state.Village8error}</p>
 </div>
              </div>
             <div class="col-md-3">
              <div class="form-group">
  <label>Taluk<span style={{color:"red"}}> *</span> </label>
  <input type="text" name="Taluk8" value={value.Taluk8} onChange={inputChange('Taluk8')} className="input"  />
  <p style={{color:"red"}}>{this.state.Taluk8error}</p>
  </div>
              </div>
              <div class="col-md-3">
              <div class="form-group">
  <label>District<span style={{color:"red"}}> *</span> </label>
  <input type="text" name="District8" value={value.District8} onChange={inputChange('District8')} className="input"/>
  <p style={{color:"red"}}>{this.state.District8error}</p>
         </div>
              </div>            
</div>
<div class="row">
<div class="col-md-3">
              <div class="form-group">
              <label>State<span style={{color:"red"}}> *</span> </label>
         <input type="text" className="input"  name="State8" value={value.State8} onChange={inputChange('State8')}></input>
         <p style={{color:"red"}}>{this.state.State8error}</p>
</div>
              </div>
              <div class="col-md-3">
              <label>Country<span style={{color:"red"}}> *</span> </label>
              <input type="text" className="input"  name="Country8" value={value.Country8} onChange={inputChange('Country8')}></input>
              <p style={{color:"red"}}>{this.state.Country8error}</p>
              </div>
              <div class="col-md-3">
              <div class="form-group">
<label>Pincode<span style={{color:"red"}}> *</span> </label>
<input type="text" name="Pincode8" value={value.Pincode8} onChange={inputChange('Pincode8')}  className="input" />
<p style={{color:"red"}}>{this.state.Pincode8error}</p>
         </div>
              </div>           
</div>  
              <div class="row">              
                <div class="col-md-3">
                <label>Identity Card No<span style={{color:"red"}}> *</span> </label>
                <select id="beforemarr" className="input" name="idcard"  onChange={inputChange('idcard')}>
<option value="0">Select proof</option>
  <option value="1">PASSPORT</option>
  <option value="2">AADHAAR</option>
  <option value="3">VOTER'S ID</option>
  <option value="4">DRIVING LICENSE</option>
</select>
<p style={{color:"red"}}>{this.state.idcarderror}</p>
                </div>
                <div class="col-md-3">
                <label></label>
                <br></br>
                <input type="text" className="input" placeholder="Enter id number" name="idcardno" value={value.idcardno} onChange={inputChange('idcardno')} />       
                <p style={{color:"red"}}>{this.state.idcardnoerror}</p>
                </div>
              </div>
              <br></br>
             </div>
    </div>
    <div className="row">
                  <div className="col-md-6">
                  <button className="pev m-4" onClick={this.back}>Previous</button>
                  </div>
                  <div className="col-md-6">
                  <div className="text-right">
              <button className="next m-4" onClick={this.continue}>Next</button>
          </div>
                  </div>
              </div><br></br><br></br>  <br></br><br></br> <br></br>
   
    </div>
    </div>

    </div>
        );
    }
}

export default Witness 