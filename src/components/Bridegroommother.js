import React, { Component } from 'react';
import {Redirect,Link} from "react-router-dom";
export class Bridegroommother extends Component
{

  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideDemo1: false,
    };
    const {value:{MotherName,Motherreligion,groommotherlivingstatus,MotherAge,MotherOccupation,fatherschooseaddress,motherchooseaddress,
      Street,Village,District,State,Country,Pincode,Taluk,Street1,Village1,Taluk1,District1,State1,Country1,Pincode1,Street2,Village2,Taluk2,District2,State2,Country2,Pincode2}}=this.props;
       if(groommotherlivingstatus==="1")
{
  if(motherchooseaddress==="1")
 {
  this.state = {
    showHideDemo1: true,
    Street:Street,  
    Village:Village,
    Taluk:Taluk,
    District:District,
State:State,
Country:Country,
Pincode:Pincode,
  };
}
 else  if(motherchooseaddress==="2"&&fatherschooseaddress==="1")
 {
  this.state = {
    showHideDemo1: true,
    Street:Street,  
    Village:Village,
    Taluk:Taluk,
    District:District,
State:State,
Country:Country,
Pincode:Pincode,
 }
}
else  if(motherchooseaddress==="2"&&fatherschooseaddress===undefined)
{
 this.state = {
   showHideDemo1: true,
   Street:Street1,  
   Village:Village1,
   Taluk:Taluk1,
   District:District1,
State:State1,
Country:Country1,
Pincode:Pincode1,
 };
}
else{
  this.state = {
    showHideDemo1: true,
    Street:Street2,  
    Village:Village2,
    Taluk:Taluk2,
    District:District2,
 State:State2,
 Country:Country2,
 Pincode:Pincode2,
  };
}
}
else
{
  this.state = {
    showHideDemo1: false,
  };
}
  }

    state={
        MotherNameerror:"",
        MotherAgeerror:"",
        Motherreligionerror:"",
        MotherOccupationerror:"",
        groommotherlivingstatuserror:"",
       Pincode2error:"",
      }  
      
      continue=e=>{
        e.preventDefault();
      const isValid=this.validateForm();
      if(isValid){
        this.props.nextStep();
      } 
     };

      validateForm() {
        let isValid = true;
        const {value:{MotherName,MotherAge,MotherOccupation,Motherreligion,groommotherlivingstatus,motherchooseaddress,
          Street2,Village2,Taluk2,District2,State2,Country2,Pincode2}}=this.props;
  
  let MotherNameerror="";
  let MotherAgeerror="";
  let Motherreligionerror="";
  let MotherOccupationerror="";
  let groommotherlivingstatuserror="";
  let Street2error="";
let Village2error="";
let Taluk2error="";
let State2error="";
let District2error="";
let Country2error="";
  let Pincode2error="";

  if(MotherName===""||MotherName===undefined)
  {
    MotherNameerror="Please enter Mother name";
    isValid=false;
  }
  else{
    if(!MotherName.match(/^[a-zA-Z ]*$/))
    {
      MotherNameerror="Please enter alphabet characters only";
      isValid=false;
    }
  }
  
  if(Motherreligion===""||Motherreligion===undefined)
  {
    Motherreligionerror="Please enter motherreligion";
    isValid=false;
  }
  
  if(groommotherlivingstatus===""||groommotherlivingstatus===undefined)
  {
    groommotherlivingstatuserror="Please select  living status";
    isValid=false;
  }

  if(groommotherlivingstatus=="1")
  {
    if(MotherAge===""||MotherAge===undefined)
    {
      MotherAgeerror="Please enter mother age";
      isValid=false;
    }
    
    if(MotherOccupation===""||MotherOccupation===undefined)
  {
    MotherOccupationerror="Please enter mother occupation";
    isValid=false;
  }
  }
  
  if(groommotherlivingstatus==="1"&&motherchooseaddress===undefined)
  {
  if(Street2===""||Street2===undefined)
  {
    Street2error="Please enter street";
    isValid=false;
  }
  
  if(Village2===""||Village2===undefined)
  {
    Village2error="Please enter village";
    isValid=false;
  }
  
  if(Taluk2===""||Taluk2===undefined)
  {
    Taluk2error="Please enter taluk";
    isValid=false;
  }
  
  if(District2===""||District2===undefined)
  {
    District2error="Please enter district";
    isValid=false;
  }
  
  if(State2===""||State2===undefined)
  {
    State2error="Please enter state";
    isValid=false;
  }
  
  if(Country2===""||Country2===undefined)
  {
    Country2error="Please enter country";
    isValid=false;
  }
  
  if(Pincode2===""||Pincode2===undefined)
  {
    Pincode2error="Please enter pincode";
    isValid=false;
  }
  
  }
  else if(groommotherlivingstatus==="1"&&motherchooseaddress==="1")
  {
  
  }  
  else if(groommotherlivingstatus==="1"&&motherchooseaddress==="2")
  {

  }
  
  this.setState({MotherNameerror,MotherAgeerror,Motherreligionerror,MotherOccupationerror,groommotherlivingstatuserror,
    Street2error,Village2error,Taluk2error,State2error,District2error,Country2error,Pincode2error})
  return isValid;
        }
  
      back = e => {
          e.preventDefault();
          this.props.prevStep();
      };

      onMenuItemClicked = () => {
        this.setState({showHideDemo1: !this.state.showHideDemo1});
      }
  
      onMenuItemClickedvalue = () => {
      const  showHideDemo1=false;
        this.setState({showHideDemo1: showHideDemo1});
      }

      sonaddress=e=>
      {
        const {value:{Street,Village,District,State,Country,Pincode,Taluk}}=this.props;

  document.getElementById("gs_name").value=Street;
  document.getElementById("gv_name").value=Village;
  document.getElementById("gd_name").value=District;
  document.getElementById("gt_name").value=Taluk;
  document.getElementById("gst_name").value=State;
  document.getElementById("gc_name").value=Country;
  document.getElementById("gp_name").value=Pincode;
  document.getElementById("sonadrress").style.checked="true";
      }

      husaddress=e=>
      {
        const {value:{Street1,Village1,District1,State1,Country1,Pincode1,Taluk1,fatherschooseaddress,Street,Village,District,State,Country,Pincode,Taluk}}=this.props;
        if(fatherschooseaddress==="1")
        {
          document.getElementById("gs_name").value=Street;
          document.getElementById("gv_name").value=Village;
          document.getElementById("gd_name").value=District;
          document.getElementById("gt_name").value=Taluk;
          document.getElementById("gst_name").value=State;
          document.getElementById("gc_name").value=Country;
          document.getElementById("gp_name").value=Pincode;
        }
       else{
        document.getElementById("gs_name").value=Street1;
        document.getElementById("gv_name").value=Village1;
        document.getElementById("gd_name").value=District1;
        document.getElementById("gt_name").value=Taluk1;
        document.getElementById("gst_name").value=State1;
        document.getElementById("gc_name").value=Country1;
        document.getElementById("gp_name").value=Pincode1;
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
          const {value:{MotherName,Motherreligion,groommotherlivingstatus,MotherAge,MotherOccupation,motherchooseaddress,
          Street2,Village2,Taluk2,District2,State2,Country2,Pincode2}}=this.props;
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
              <h1>Details of Bridegroom Mother </h1>
              <br></br>
              <div class="row">
    <div class="col-md-3">
    <label>Mother's Name<span style={{color:"red"}}> *</span> </label>
    <input type="text" className="input" name="MotherName" value={value.MotherName}  onChange={inputChange('MotherName')}  />
    <p style={{color:"red"}}>{this.state.MotherNameerror}</p>
             </div>
    <div class="col-md-3">
    <label>Mother's Relegion<span style={{color:"red"}}> *</span> </label>
    <input type="text" className="input" name="Motherreligion" value={value.Motherreligion} onChange={inputChange('Motherreligion')} />
    <p style={{color:"red"}}>{this.state.Motherreligionerror}</p>
             </div>
    <div class="col-md-3">
    <label>Living Status<span style={{color:"red"}}> *</span> </label>
      <div className="form-group">
      <input type="radio" id="alive" name="groommotherlivingstatus" value="1"  onClick={() => this.onMenuItemClicked()} checked={value.groommotherlivingstatus==="1"}  onChange={inputChange('groommotherlivingstatus')}/>
      <label >  Alive&nbsp;&nbsp;</label>
      <input type="radio" id="dead"  name="groommotherlivingstatus" value="2"  onClick={() => this.onMenuItemClickedvalue()} checked={value.groommotherlivingstatus==="2"}  onChange={inputChange('groommotherlivingstatus')}/>
      <label >&nbsp;&nbsp;Dead</label>
      <p style={{color:"red"}}>{this.state. groommotherlivingstatuserror}</p>
    </div>
    </div>
   </div>
    <br></br>
    <br></br>
    { this.state.showHideDemo1 && 
    <div id="div2" >
    <div class="row">
    <div class="col-md-3">
    <label>Mother's Age</label>
    <input type="text" className="input" name="MotherAge" value={value.MotherAge} onChange={inputChange('MotherAge')}  />
    <p style={{color:"red"}}>{this.state. MotherAgeerror}</p>
             </div>
    <div class="col-md-3">
    <label>Mother's Occupation</label>
    <input type="text" className="input" name="MotherOccupation" value={value.MotherOccupation} onChange={inputChange('MotherOccupation')}  />
    <p style={{color:"red"}}>{this.state.MotherOccupationerror}</p>
             </div>   
    </div>
    <br></br>
    <div class="row"><div class="col-md-12"> <label >Mother's Address</label></div></div>
    <div class="row">
    <br></br>
    <div class="col-md-3">
      <br></br>
      <input type="radio" id="sonadrress" name="motherchooseaddress" value="1"  onClick={this.sonaddress} checked={value.motherchooseaddress==="1"}  onChange={inputChange('motherchooseaddress')}/>
      <label >  &nbsp;&nbsp;Address same as Son&nbsp;&nbsp;</label><br></br>
      <input type="radio" id="huaddress"  name="motherchooseaddress" value="2"  onClick={this.husaddress} checked={value.motherchooseaddress==="2"}  onChange={inputChange('motherchooseaddress')}/>
      <label >&nbsp;&nbsp;Address same as Husband</label>
    </div>
      <div class="col-md-3"> 
      <label>Street </label>
            <input type="text" className="input" id="gs_name" name="Street2" value={this.state.Street} onChange={inputChange('Street2')}   />
            <p style={{color:"red"}}>{this.state. Street2error}</p>
      </div>
      <div class="col-md-3"> 
        <label>Village </label>
              <input type="text" className="input" id="gv_name" name="Village2" value={this.state.Village} onChange={inputChange('Village2')}   />
              <p style={{color:"red"}}>{this.state. Village2error}</p>
      </div>
      <div class="col-md-3">
    <label>Taluk </label>
   <input type="text" className="input" name="Taluk2" id="gt_name" value={this.state.Taluk} onChange={inputChange('Taluk2')}   />
   <p style={{color:"red"}}>{this.state. Taluk2error}</p>
      </div>
    
    </div>
    <br></br>
    <div class="row">
     <div class="col-md-3">
<label>District </label>
 <input type="text" className="input" id="gd_name" name="District2" value={this.state.District} onChange={inputChange('District2')}  />
 <p style={{color:"red"}}>{this.state. District2error}</p>
      </div>
      <div class="col-md-3">
     <label>State </label>
                <input type="text" id="gst_name" className="input" name="State2" value={this.state.State} onChange={inputChange('State2')}   />
                <p style={{color:"red"}}>{this.state. State2error}</p>
       </div>
       <div class="col-md-3">
     <label>Country</label>
      <input type="text" className="input" id="gc_name" name="Country2" value={this.state.Country} onChange={inputChange('Country2')}   />
      <p style={{color:"red"}}>{this.state. Country2error}</p>
       </div>
    <div class="col-md-3">
<label>Pincode</label>
   <input type="text" className="input" id="gp_name" name="Pincode2" value={this.state.Pincode} onChange={inputChange('Pincode2')}   />
               <p style={{color:"red"}}>{this.state.Pincode2error}</p>
      </div>
   
    </div>
    <br></br>
   </div>
   }
    <br></br>
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
               
          )
      }
}

export default Bridegroommother