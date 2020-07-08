import React, { Component } from 'react';
import {Redirect,Link} from "react-router-dom";
export class Bride extends Component
{

  constructor(props) {
    super(props);
    let calage="";
    const {value:{BrideDateofbirth}}=this.props;
   this.state={
    calage:""
   }
  
  if(BrideDateofbirth!==""&&BrideDateofbirth!==undefined)
      {
        var today = new Date(),
        date = today.getFullYear();
        var birthDate = new Date(BrideDateofbirth);
        var getyear=birthDate.getFullYear();
        calage=date-getyear;
    this.state.calage=calage;
      }
      else{
        return
      }   
  }

    state={
        bridenameerror:"",
BrideNationalityerror:"",
brideresidentialerror:"",
bridereligionserror:"",
bridecasteerror:"",
BrideDateofbirtherror:"",
brideemployernameerror:"",
bridedesignationerror:"",
bridemaritalstatuserror:"",
bridemobilenumbererror:"",
bridewhatsapperror:"",
brideemailerror:"",
bridepassporterror:"",
Street3error:"",
District3error:"",
State3error:"",
Taluk3error:"",
Pincode3error:"",
Country3error:"",
Village3error:"",
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

      validateForm=()=>{
        let isValid = true;
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const {value:{bridename,BrideNationality,brideresidential,bridereligion,bridecaste,BrideDateofbirth,brideemployername,
        bridedesignation,bridemaritalstatus,bridemobilenumber,bridewhatsapp,brideemail,Street3,Village3,Taluk3,District3,
        State3,Country3,Pincode3,bridepassport}}=this.props;
         let bridenameerror = "";
          let BrideNationalityerror = "";
          let brideresidentialerror="";
          let bridereligionerror="";
  let bridecasteerror="";
  let BrideDateofbirtherror="";
  let brideemployernameerror="";
  let bridedesignationerror="";
  let bridemaritalstatuserror="";
  let bridemobilenumbererror="";
  let bridewhatsapperror="";
  let brideemailerror="";
  let bridepassporterror="";
  let Street3error="";
  let District3error="";
  let State3error="";
  let Taluk3error="";
  let Pincode3error="";
  let Country3error="";
  let Village3error="";
  
  if(bridename===""||bridename===undefined)
  {
    bridenameerror="Please select name of the groom";
   isValid=false;
  }
  else{
    if(!bridename.match(/^[a-zA-Z ]*$/))
    {
      bridenameerror="Please enter alphabet characters only";
      isValid=false;
    }
  }
  
  if(BrideNationality===""||BrideNationality===undefined)
  {
    BrideNationalityerror="Please enter nationality";
    isValid=false;
  }
  else{
    if(!BrideNationality.match(/^[a-zA-Z ]*$/))
    {
        BrideNationalityerror="Please enter alphabet characters only";
      isValid=false;
    }
  }
  
  if(brideresidential===""||brideresidential===undefined||brideresidential==="0")
  {
    brideresidentialerror="Please select residential status";
    isValid=false;
  }
  
  if(bridereligion===""||bridereligion===undefined||bridereligion==="0")
  {
    bridereligionerror="Please select religion";
    isValid=false;
  }
  
  if(bridecaste===""||bridecaste===undefined)
  {
    bridecasteerror="Please enter caste";
    isValid=false;
  }
  else{
    if(!bridecaste.match(/^[a-zA-Z ]*$/))
    {
        bridecasteerror="Please enter alphabet characters only";
      isValid=false;
    }
  }
  
  if(BrideDateofbirth===""||BrideDateofbirth===undefined)
  {
    BrideDateofbirtherror="Please select dob";
    isValid=false;
  }
  else
{
  let calage="";
  var current = new Date(),
          date = current.getFullYear();
          var birthDate = new Date(BrideDateofbirth);
          var getyear=birthDate.getFullYear();
          calage=date-getyear;
          if(calage < 18)
          {
            BrideDateofbirtherror="Please select valid dob";
            isValid=false;
          }
          else if(calage==="0")
          {
            BrideDateofbirtherror="Please select valid dob";
            isValid=false;
          }
          else{
            
          }
         
}
  
  if(brideemployername===""||brideemployername===undefined)
  {
    brideemployernameerror="Please enter employername";
    isValid=false;
  }
  else{
    if(!brideemployername.match(/^[a-zA-Z ]*$/))
    {
        brideemployernameerror="Please enter alphabet characters only";
      isValid=false;
    }
  }
  
  if(bridedesignation===""||bridedesignation===undefined)
  {
    bridedesignationerror="Please enter employername";
    isValid=false;
  }
  else
  {
    if(!bridedesignation.match(/^[a-zA-Z ]*$/))
    {
        bridedesignationerror="Please enter alphabet characters only";
      isValid=false;
    }
  }
  
  if(bridemaritalstatus===""||bridemaritalstatus===undefined||bridemaritalstatus==="0")
  {
    bridemaritalstatuserror="Please enter maritalstatus";
    isValid=false;
  }
  
  if(bridemobilenumber===""||bridemobilenumber===undefined)
  {
    bridemobilenumbererror="Please enter mobilenumber";
    isValid=false;
  }
  else{
    if(!bridemobilenumber.match(/^[0-9]{10}$/))
    {
        bridemobilenumbererror="Ivalid phonenumber";
      isValid=false;
    }
  }
  
  if(bridewhatsapp===""||bridewhatsapp===undefined)
  {
    bridewhatsapperror="Please enter whatsappnumber";
    isValid=false;
  }
  else{
    if(!bridewhatsapp.match(/^[0-9]{10}$/))
    {
        bridewhatsapperror="Ivalid whatsappnumber";
      isValid=false;
    }
  }
  
  if(brideemail===""||brideemail===undefined)
  {
    brideemailerror="Please enter whatsappnumber";
    isValid=false;
  }
  else{
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);   
    if(!pattern.test(brideemail))
    {
        brideemailerror="Ivalid email address";
      isValid=false;
    }
  }
  
  if(bridepassport===""||bridepassport===undefined)
  {
    bridepassporterror="Please enter passportnumber";
    isValid=false;
  }
  
  if(Street3===""||Street3===undefined)
  {
    Street3error="Please enter street";
    isValid=false;
  }
  
  if(Village3===""||Village3===undefined)
  {
    Village3error="Please enter village";
    isValid=false;
  }
  
  if(Taluk3===""||Taluk3===undefined)
  {
    Taluk3error="Please enter village";
    isValid=false;
  }
  
  if(District3===""||District3===undefined)
  {
    District3error="Please enter district";
    isValid=false;
  }
  
  if(State3===""||State3===undefined)
  {
    State3error="Please enter state";
    isValid=false;
  }
  
  if(Country3===""||Country3===undefined)
  {
    Country3error="Please enter country";
    isValid=false;
  }
  
  if(Pincode3===""||Pincode3===undefined)
  {
    Pincode3error="Please enter pincode";
    isValid=false;
  }
  
  this.setState({bridenameerror,BrideNationalityerror,brideresidentialerror,bridereligionerror,bridecasteerror,BrideDateofbirtherror,brideemployernameerror,
    bridedesignationerror,bridemaritalstatuserror,bridemobilenumbererror,bridewhatsapperror,brideemailerror,Street3error,Village3error,Taluk3error,District3error,
    State3error,Country3error,Pincode3error,bridepassporterror})
  return isValid;
        }

        datecal=e=>
        {
          let calage="";
          const {value:{BrideDateofbirth}}=this.props;
          if(BrideDateofbirth!==""&&BrideDateofbirth!==undefined)
          {
            var today = new Date(),
            date = today.getFullYear();
            var birthDate = new Date(BrideDateofbirth);
            var getyear=birthDate.getFullYear();
            calage=date-getyear;
         this.setState({calage})
          }
          else{
            return
          }       
        }
        closeform=e=>
        {
          window.localStorage.clear();
          this.setState({referrer: '/sign-in'});
        }
        render()
        {
          const {referrer} = this.state;
      if (referrer) return <Redirect to={referrer} />;

    var fname=localStorage.getItem('firstname');
    var lname=localStorage.getItem('lastname');
            const {value,inputChange}=this.props;
            const {value:{bridename,BrideNationality,brideresidential,bridereligion,bridecaste,BrideDateofbirth,brideemployername,
              bridedesignation,bridemaritalstatus,bridemobilenumber,bridewhatsapp,brideemail,Street3,Village3,Taluk3,District3,
              State3,Country3,Pincode3,bridepassport}}=this.props;
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
                <h1>Details of Bride </h1>
                <br></br>
                <div class="row">
                    <div class="col-md-3">
                    <div class="form-group">
                    <label>Name of the Bride<span style={{color:"red"}}> *</span> </label>
                    <input type="text" className="input" name="bridename" value={value.bridename} onChange={inputChange('bridename')}  />
                    <p style={{color:"red"}}>{this.state.bridenameerror}</p>
               </div>           
                    </div>                       
                    <div class="col-md-3">
                    <div class="form-group">
      <label>Nationality<span style={{color:"red"}}> *</span> </label>
      <input type="bridenation" className="input" name="bridenationality" value={value.BrideNationality} onChange={inputChange('BrideNationality')}  />
      <p style={{color:"red"}}>{this.state.BrideNationalityerror}</p>
               </div>
                    </div>
                    <div class="col-md-3">
                    <div class="form-group">
       <label>Residential Status in India<span style={{color:"red"}}> *</span> </label>
       <select  className="input" name="brideresidential" value={value.brideresidential} onChange={inputChange('brideresidential')} >
      <option value="0">Select residential status</option>
        <option value="1">Resident</option>
        <option value="2">NRI</option>
        <option value="3">PIO</option>
        <option value="4">OCI</option>
      </select>
      <p style={{color:"red"}}>{this.state.brideresidentialerror}</p>
        </div>
                    </div>
                    <div class="col-md-3">
                    <div class="form-group">
        <label>Relegion<span style={{color:"red"}}> *</span> </label>
        <select  className="input" name="bridereligion" value={value.bridereligion} onChange={inputChange('bridereligion')} >
      <option value="0">Select religion</option>
        <option value="1">Hindu</option>
        <option value="2">Muslim</option>
        <option value="3">Christian</option>
        <option value="4">Jain</option>
        <option value="5">Buddhist</option>
        <option value="6">Seikh</option>
      </select>
      <p style={{color:"red"}}>{this.state.bridereligionerror}</p>
        </div>
                    </div>            
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                    <div class="form-group">
        <label>Caste<span style={{color:"red"}}> *</span> </label>
        <input type="text" className="input" name="bridecaste" value={value.bridecaste} onChange={inputChange('bridecaste')} />
        <p style={{color:"red"}}>{this.state.bridecasteerror}</p>
               </div>
                    </div>
                    <div class="col-md-3">
                    <div class="form-group">
                    <label>Date of Birth<span style={{color:"red"}}> *</span> </label>
                    <input type="date" className="input"  onChange={this.handleChangeStartDate}  name="BrideDateofbirth" value={value.BrideDateofbirth} onChange={inputChange('BrideDateofbirth')} ></input>
                    <p style={{color:"red"}}>{this.state.BrideDateofbirtherror}</p>             
      </div>
                    </div>                
                    <div class="col-md-3">
                      <label>Age</label>
            <p>{this.state.calage}</p>
                    </div>
                    <div class="col-md-3">
                    <div class="form-group">
      <label>Name of the Employer<span style={{color:"red"}}> *</span> </label>
      <input type="text" className="input" name="brideemployername" onClick={this.datecal} value={value.brideemployername} onChange={inputChange('brideemployername')} />
      <p style={{color:"red"}}>{this.state.brideemployernameerror}</p>
               </div>
                    </div>
               </div>
      <div class="row">
  
      <div class="col-md-3">
        <div class="form-group">
      <label>Designation<span style={{color:"red"}}> *</span> </label>
      <input type="text" className="input" name="bridedesignation" value={value.bridedesignation} onChange={inputChange('bridedesignation')}  />
      <p style={{color:"red"}}>{this.state.bridedesignationerror}</p>
               </div>
        </div>
       <div class="col-md-3">
        <div class="form-group">
        <label>Marital Status Before Marriage<span style={{color:"red"}}> *</span> </label>
        <select  className="input" name="bridemaritalstatus" value={value.bridemaritalstatus} onChange={inputChange('bridemaritalstatus')}>
      <option value="0">Select marital status</option>
        <option value="1">BACHELOR</option>
        <option value="2">DIVORCE</option>
        <option value="3">WIDOWER</option>
        <option value="4">MARRIED</option>
      </select>
      <p style={{color:"red"}}>{this.state.bridemaritalstatuserror}</p>
        </div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
      <label>Mobile Number<span style={{color:"red"}}> *</span></label>
      <input type="mobile" className="input" name="bridemobilenumber" value={value.bridemobilenumber} onChange={inputChange('bridemobilenumber')}/>
      <p style={{color:"red"}}>{this.state.bridemobilenumbererror}</p>
               </div>
        </div>
        <div class="col-md-3">
        <div className="form-group">
      <label>Whatsapp Number<span style={{color:"red"}}> *</span></label>
      <input type="whatsapp" className="input" name="bridewhatsapp" value={value.bridewhatsapp} onChange={inputChange('bridewhatsapp')} />
      <p style={{color:"red"}}>{this.state.bridewhatsapperror}</p>
               </div>
        </div>
      </div>
      <div className="row">
  
        <div class="col-md-3">
        <label>Email Address<span style={{color:"red"}}> *</span></label>
        <input type="text" className="input" name="brideemail" value={value.brideemail} onChange={inputChange('brideemail')} />
        <p style={{color:"red"}}>{this.state.brideemailerror}</p>
               </div>
     
      </div>
      <br></br>
      <div class="row"><div class="col-md-12"> <label >Residential Address<span style={{color:"red"}}> *</span></label></div></div>
      <div class="row">
      <br></br>
        <div class="col-md-3"> 
       <label>Street<span style={{color:"red"}}> *</span></label>
                <input type="text" className="input" name="Street3" value={value.Street3} onChange={inputChange('Street3')} />
                 <p style={{color:"red"}}>{this.state.Street3error}</p>
        </div>
        <div class="col-md-3"> 
        <label>Village<span style={{color:"red"}}> *</span></label>
         <input type="text" className="input" name="Village3" value={value.Village3} onChange={inputChange('Village3')} />
                 <p style={{color:"red"}}>{this.state.Village3error}</p>
            </div>
            <div class="col-md-3">
       <label>Taluk<span style={{color:"red"}}> *</span></label>
       <input type="text" className="input" name="Taluk3" value={value.Taluk3} onChange={inputChange('Taluk3')}  />
                 <p style={{color:"red"}}>{this.state.Taluk3error}</p>
        </div>
        <div class="col-md-3">
        <label>District<span style={{color:"red"}}> *</span></label>
          <input type="text" className="input" name="District3" value={value.District3} onChange={inputChange('District3')} />
                 <p style={{color:"red"}}>{this.state.District3error}</p>
        </div>
        </div>
      <br></br>
      <div class="row">
       
        <div class="col-md-3">
      <label>State<span style={{color:"red"}}> *</span></label>
        <input type="text" className="input" name="State3" value={value.State3} onChange={inputChange('State3')} />
                 <p style={{color:"red"}}>{this.state.State3error}</p>
      </div>
        <div class="col-md-3">
     <label>Country<span style={{color:"red"}}> *</span></label>
       <input type="text" className="input" name="Country3" value={value.Country3} onChange={inputChange('Country3')}  />
                 <p style={{color:"red"}}>{this.state.Country3error}</p>
         </div>
         <div class="col-md-3">
   <label>Pincode<span style={{color:"red"}}> *</span></label>
        <input type="text" className="input" name="Pincode3" value={value.Pincode3} onChange={inputChange('Pincode3')} />
                 <p style={{color:"red"}}>{this.state.Pincode3error}</p>
        </div>
        <div class="col-md-3">
          <div class="form-group">
        <label>Passport Number<span style={{color:"red"}}> *</span></label>
        <input type="text"  className="input" name="bridepassport" value={value.bridepassport} onChange={inputChange('bridepassport')}/>
        <p style={{color:"red"}}>{this.state.bridepassporterror}</p>
               </div>
               </div>
      </div>
      <br></br>
    
      </div>   
            </div>
            <div className="row">
                  <div className="col-md-6">
                  <button className="pev  m-4" onClick={this.back}>Previous</button>
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
  
            )
        }
}

export default Bride