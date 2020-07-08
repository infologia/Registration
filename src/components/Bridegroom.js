import React, { Component } from 'react'; 
import {Redirect,Link} from "react-router-dom";

export  class Bridegroom extends Component
{
  constructor(props) {
    super(props);
    let calage="";
    const {value:{Dateofmarriage,Name,Nationality,ResidentialStatus,Religion,Caste,DOB,Employername,Designation,
      maritalstatus,Mobileno,whatsappnumber,emailaddress,Passportno,Street,Village,District,State,Country,Pincode,Taluk}}=this.props;
   this.state={
    calage:"0",
   }
  
  if(DOB!==""&&DOB!==undefined)
      {
        var today = new Date(),
        date = today.getFullYear();
        var birthDate = new Date(DOB);
        var getyear=birthDate.getFullYear();
        calage=date-getyear;
    this.state.calage=calage;
      }
      else{
        return
      }   
  }

  state={
    Dateofmarriageerror : "",
    Nameerror : "",
    Nationalityerror:"",
    ResidentialStatuserror:"",
Religionerror:"",
Casteerror:"",
DOBerror:"",
Employernameerror:"",
Designationerror:"",
maritalstatuserror:"",
Mobilenoerror:"",
whatsappnumbererror:"",
emailaddresserror:"",
Passportnoerror:"",
 Streeterror:"",
 Districterror:"",
 Stateerror:"",
 Talukerror:"",
 Pincodeerror:"",
 Countryerror:"",
 Villageerror:"",
 Stateerror:""
  };

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

  handleClick = () => {
 
    this.setState({referrer: '/login'});
}

    validateForm=()=>{
      let isValid=true;
      var today = new Date(),
      date = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)) + '-' + today.getDate();
  const {value:{Dateofmarriage,Name,Nationality,ResidentialStatus,Religion,Caste,DOB,Employername,Designation,
          maritalstatus,Mobileno,whatsappnumber,emailaddress,Passportno,Street,Village,District,State,Country,Pincode,Taluk}}=this.props;
     let Dateofmarriageerror = "";
        let Nameerror = "";
        let Nationalityerror="";
        let ResidentialStatuserror="";
let Religionerror="";
let Casteerror="";
let DOBerror="";
let Employernameerror="";
let Designationerror="";
let maritalstatuserror="";
let Mobilenoerror="";
let whatsappnumbererror="";
let emailaddresserror="";
let Passportnoerror="";
let Streeterror="";
let Districterror="";
let Stateerror="";
let Talukerror="";
let Pincodeerror="";
let Countryerror="";
let Villageerror="";

var g2 = new Date(Dateofmarriage); 

if(Dateofmarriage==="" || Dateofmarriage===undefined)
{
  Dateofmarriageerror="Please select marriage date";
  isValid=false;
}
else{
  if(today.getTime() > g2.getTime())
  {
    Dateofmarriageerror="Invalid marriagedate";
    isValid=false;
  }
}

if(Name===""||Name===undefined)
{
  Nameerror="Please select name of the groom";
 isValid=false;
}
else{
  if(!Name.match(/^[a-zA-Z ]*$/))
  {
    Nameerror="Please enter alphabet characters only";
    isValid=false;
  }
}

if(Nationality===""||Nationality===undefined)
{
  Nationalityerror="Please enter nationality";
  isValid=false;
}
else{
  if(!Nationality.match(/^[a-zA-Z ]*$/))
  {
    Nationalityerror="Please enter alphabet characters only";
    isValid=false;
  }
}

if(ResidentialStatus===""||ResidentialStatus===undefined||ResidentialStatus==="0")
{
  ResidentialStatuserror="Please select residential status";
  isValid=false;
}

if(Religion===""||Religion===undefined||Religion==="0")
{
  Religionerror="Please select religion";
  isValid=false;
}

if(Caste===""||Caste===undefined)
{
  Casteerror="Please enter caste";
  isValid=false;
}
else{
  if(!Caste.match(/^[a-zA-Z ]*$/))
  {
    Casteerror="Please enter alphabet characters only";
    isValid=false;
  }
}

if(DOB===""||DOB===undefined)
{
  DOBerror="Please select dob";
  isValid=false;
}
else
{  let calage="";
  var current = new Date(),
          date = current.getFullYear();
          var birthDate = new Date(DOB);
          var getyear=birthDate.getFullYear();
          calage=date-getyear;
          if(calage < 18)
          {
            DOBerror="Please select valid dob";
            isValid=false;
          }
          else if(calage==="0")
          {
           DOBerror="Please select valid dob";
            isValid=false;
          }
          else{
            
          }
         
}

if(Employername===""||Employername===undefined)
{
  Employernameerror="Please enter employername";
  isValid=false;
}
else{
  if(!Employername.match(/^[a-zA-Z ]*$/))
  {
    Employernameerror="Please enter alphabet characters only";
    isValid=false;
  }
}

if(Designation===""||Designation===undefined)
{
  Designationerror="Please enter employername";
  isValid=false;
}
else
{
  if(!Designation.match(/^[a-zA-Z ]*$/))
  {
    Designationerror="Please enter alphabet characters only";
    isValid=false;
  }
}

if(maritalstatus===""||maritalstatus===undefined||maritalstatus==="0")
{
  maritalstatuserror="Please enter maritalstatus";
  isValid=false;
}

if(Mobileno===""||Mobileno===undefined)
{
  Mobilenoerror="Please enter mobilenumber";
  isValid=false;
}
else{
  if(!Mobileno.match(/^[0-9]{10}$/))
  {
    Mobilenoerror="Ivalid phonenumber";
    isValid=false;
  }
}

if(whatsappnumber===""||whatsappnumber===undefined)
{
  whatsappnumbererror="Please enter whatsappnumber";
  isValid=false;
}
else{
  if(!whatsappnumber.match(/^[0-9]{10}$/))
  {
    whatsappnumbererror="Ivalid whatsappnumber";
    isValid=false;
  }
}

if(emailaddress===""||emailaddress===undefined)
{
  emailaddresserror="Please enter email address";
  isValid=false;
}
else{
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);   
  if(!pattern.test(emailaddress))
  {
    emailaddresserror="Ivalid email address";
    isValid=false;
  }
}

if(Passportno===""||Passportno===undefined)
{
  Passportnoerror="Please enter passportnumber";
  isValid=false;
}

if(Street===""||Street===undefined)
{
  Streeterror="Please enter street";
  isValid=false;
}

if(Village===""||Village===undefined)
{
  Villageerror="Please enter village";
  isValid=false;
}

if(Taluk===""||Taluk===undefined)
{
  Talukerror="Please enter village";
  isValid=false;
}

if(District===""||District===undefined)
{
  Districterror="Please enter district";
  isValid=false;
}

if(State===""||State===undefined)
{
  Stateerror="Please enter state";
  isValid=false;
}

if(Country===""||Country===undefined)
{
  Countryerror="Please enter country";
  isValid=false;
}

if(Pincode===""||Pincode===undefined)
{
  Pincodeerror="Please enter pincode";
  isValid=false;
}

this.setState({Dateofmarriageerror,Nameerror,Nationalityerror,ResidentialStatuserror,Religionerror,Casteerror,DOBerror,
  Employernameerror,Designationerror,maritalstatuserror,Mobilenoerror,whatsappnumbererror,emailaddresserror,Passportnoerror,
Streeterror,Villageerror,Talukerror,Stateerror,Districterror,Countryerror,Pincodeerror})
return isValid;
      }

      datecal=e=>
      {
        let calage="";
        const {value:{Dateofmarriage,Name,Nationality,ResidentialStatus,Religion,Caste,DOB,Employername,Designation,
          maritalstatus,Mobileno,whatsappnumber,emailaddress,Passportno,Street,Village,District,State,Country,Pincode,Taluk}}=this.props;
        if(DOB!==""&&DOB!==undefined)
        {
          var today = new Date(),
          date = today.getFullYear();
          var birthDate = new Date(DOB);
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
        const {value:{Dateofmarriage,Name,Nationality,ResidentialStatus,Religion,Caste,DOB,Employername,Designation,
          maritalstatus,Mobileno,whatsappnumber,emailaddress,Passportno,Street,Village,District,State,Country,Pincode,Taluk}}=this.props;
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
            <h1 style={{fontSize:"24px"}}>Details of Bridegroom</h1>
<br></br>
<br></br>
            <div class="row">
              <div class="col-md-3">
              <div class="form-group">
<label >Date of Marriage<span style={{color:"red"}}> *</span> </label>
<input type="date" className="input" value={value.Dateofmarriage}  onChange={inputChange('Dateofmarriage')}  name="Dateofmarriage"></input>
        <p style={{color:"red"}}>{this.state.Dateofmarriageerror}</p>
</div>    
           </div>
              <div class="col-md-3">
              <div class="form-group">
<label>Name of the Groom<span style={{color:"red"}}> *</span> </label>
<input type="text" name="Name"  value={value.Name} onChange={inputChange('Name')} className="input" />
<p style={{color:"red"}}>{this.state.Nameerror}</p>
</div>
              </div>
              <div class="col-md-3">
              <div class="form-group">
<label>Nationality<span style={{color:"red"}}> *</span> </label>
<input type="text" name="Nationality"  value={value.Nationality} onChange={inputChange('Nationality')} className="input"  />
        <p style={{color:"red"}}>{this.state.Nationalityerror}</p>
 </div>
              </div>
              <div class="col-md-3">
              <div class="form-group">
 <label>Residential Status in India<span style={{color:"red"}}> *</span> </label>
 <select  className="input" name="ResidentialStatus" value={value.ResidentialStatus} onChange={inputChange('ResidentialStatus')} >
<option value="0">Select residential status</option>
  <option value="1">Resident</option>
  <option value="2">NRI</option>
  <option value="3">PIO</option>
  <option value="4">OCI</option>
</select>
<p style={{color:"red"}}>{this.state.ResidentialStatuserror}</p>

  </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
              <div class="form-group">
  <label>Relegion<span style={{color:"red"}}> *</span> </label>
  <select  className="input" name="Religion" value={value.Religion} onChange={inputChange('Religion')} >
<option value="0">Select religion</option>
  <option value="1">Hindu</option>
  <option value="2">Muslim</option>
  <option value="3">Christian</option>
  <option value="4">Jain</option>
  <option value="5">Buddhist</option>
  <option value="6">Seikh</option>
</select>
<p style={{color:"red"}}>{this.state.Religionerror}</p>
  </div>
              </div>
              <div class="col-md-3">
              <div class="form-group">
  <label>Caste<span style={{color:"red"}}> *</span> </label>
  <input type="text" name="Caste" value={value.Caste} onChange={inputChange('Caste')}  className="input"/>
  <p style={{color:"red"}}>{this.state.Casteerror}</p>
         </div>
              </div>
              <div className="col-md-3">
              <label>Date of Birth<span style={{color:"red"}}> *</span> </label>
              <input type="date" className="input" value={value.DOB}  onChange={inputChange('DOB')}  name="DOB"></input>
        <p style={{color:"red"}}>{this.state.DOBerror}</p>

              </div>
              <div class="col-md-3">
                <label>Age</label>
        <p>{this.state.calage}</p>
              </div>
            </div>
<div class="row">   
<div class="col-md-3">
              <div class="form-group">
<label>Name of the Employer<span style={{color:"red"}}> *</span> </label>
<input type="text" name="Employername" value={value.Employername} onClick={this.datecal} onChange={inputChange('Employername')}   className="input" />
<p style={{color:"red"}}>{this.state.Employernameerror}</p>
         </div>
              </div>       
<div class="col-md-3">
  <div class="form-group">
<label>Designation<span style={{color:"red"}}> *</span> </label>
<input type="text"  name="Designation" value={value.Designation} onChange={inputChange('Designation')}    className="input" />
<p style={{color:"red"}}>{this.state.Designationerror}</p>
         </div>
  </div>
  <div class="col-md-3">
  <div class="form-group">
  <label>Marital Status Before Marriage<span style={{color:"red"}}> *</span> </label>
      <select  className="input" name="maritalstatus" value={value.maritalstatus} onChange={inputChange('maritalstatus')}>
    <option value="0">Select marital status</option>
      <option value="1">BACHELOR</option>
      <option value="2">DIVORCE</option>
      <option value="3">WIDOWER</option>
      <option value="4">MARRIED</option>
    </select>
    <p style={{color:"red"}}>{this.state.maritalstatuserror}</p>
         </div>
  </div>  
  <div class="col-md-3">
  <div className="form-group">
<label>Mobile Number<span style={{color:"red"}}> *</span> </label>
<input type="text"  name="whatsappnumber" value={value.Mobileno} onChange={inputChange('Mobileno')}  className="input" />
<p style={{color:"red"}}>{this.state.Mobilenoerror}</p>
         </div>
  </div>
  <div class="col-md-3">
  <div className="form-group">
<label>Whatsapp Number<span style={{color:"red"}}> *</span> </label>
<input type="text"  name="whatsappnumber" value={value.whatsappnumber} onChange={inputChange('whatsappnumber')}  className="input" />
<p style={{color:"red"}}>{this.state.whatsappnumbererror}</p>
         </div>
  </div>
<div class="col-md-3">
  <label>Email Address<span style={{color:"red"}}> *</span> </label>
<input type="text"  name="emailaddress" value={value.emailaddress} onChange={inputChange('emailaddress')}  className="input" />
<p style={{color:"red"}}>{this.state.emailaddresserror}</p>   
  </div>   
</div>

<div class="row"><div class="col-md-12"> <label >RESIDENTIAL ADDRESS</label></div></div>
<br></br>
<div class="row">
<br></br>
  <div class="col-md-3"> 
  <label>Street<span style={{color:"red"}}> *</span> </label>
  <input type="text" className="input" name="Street" value={value.Street} onChange={inputChange('Street')}  />
  <p style={{color:"red"}}>{this.state.Streeterror}</p> 
  </div>
  <div class="col-md-3">
  <label>Village<span style={{color:"red"}}> *</span> </label>
  <input type="text" className="input" name="Village" value={value.Village} onChange={inputChange('Village')}   />
  <p style={{color:"red"}}>{this.state.Villageerror}</p> 
  </div>
  <div class="col-md-3">
  <label>Taluk<span style={{color:"red"}}> *</span> </label>
  <input type="text" className="input" name="Taluk" value={value.Taluk} onChange={inputChange('Taluk')}  />
  <p style={{color:"red"}}>{this.state.Talukerror}</p> 
 </div>
 <div class="col-md-3">
 <label>District<span style={{color:"red"}}> *</span> </label>
 <input type="text" className="input" name="District" value={value.District} onChange={inputChange('District')}   />
 <p style={{color:"red"}}>{this.state.Districterror}</p> 
 </div>
</div>
<div class="row">
  <div class="col-md-3">
  <label>State<span style={{color:"red"}}> *</span> </label>
  <input type="text" className="input" name="State" value={value.State} onChange={inputChange('State')}  />
  <p style={{color:"red"}}>{this.state.Stateerror}</p> 
 </div>
  <div class="col-md-3">
  <label>Country<span style={{color:"red"}}> *</span> </label>
  <input type="text" className="input" name="Country" value={value.Country} onChange={inputChange('Country')}   />
  <p style={{color:"red"}}>{this.state.Countryerror}</p> 
  </div>
  <div class="col-md-3">
  <label>Pincode<span style={{color:"red"}}> *</span> </label>
  <input type="number" className="input" name="Pincode" value={value.Pincode} onChange={inputChange('Pincode')}   />
  <p style={{color:"red"}}>{this.state.Pincodeerror}</p> 
  </div>
  <div class="col-md-3">
    <div class="form-group">
  <label>Passport Number<span style={{color:"red"}}> *</span> </label>
  <input type="text"  className="input" name="Passportno" value={value.Passportno} onChange={inputChange('Passportno')} />
  <p style={{color:"red"}}>{this.state.Passportnoerror}</p>
         </div>
         </div>
</div>   </div>      
        </div> 
       <div className="text-right">
            <button className="next m-4" onClick={this.continue}>Next</button>
        </div>
        <br></br>
        <div className="img_logo" style={{marginBottom:"37px"}}></div>
        </div>
          </div>  
            </div>   
       )
    }
}
export default Bridegroom