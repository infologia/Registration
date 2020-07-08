import React, { Component } from 'react';
import {Redirect,Link} from "react-router-dom";
export  class Bridegroomfather extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideDemo1: false,
    };
    const {value:{groomfatherlivingstatus,fatherschooseaddress,Street,Village,Taluk,District,State,Country,Pincode,
      Street1,Village1,Taluk1,District1,State1,Country1,Pincode1}}=this.props;
if(groomfatherlivingstatus==="1")
{
 if(fatherschooseaddress==="1")
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
 else
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
}
else
{
  this.state = {
    showHideDemo1: false,
  };
}

  }
 
state={
  Fathernameerror:"",
  FatherAgeerror:"",
  Fatherreligionerror:"",
  FatherOccupationerror:"",
  groomfatherlivingstatuserror:"",
 Pincode1error:"",
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
      const {value:{Fathername,FatherAge,FatherOccupation,Fatherreligion,groomfatherlivingstatus,fatherschooseaddress,
        Street1,Village1,Taluk1,District1,State1,Country1,Pincode1}}=this.props;

let Fathernameerror="";
let FatherAgeerror="";
let Fatherreligionerror="";
let FatherOccupationerror="";
let groomfatherlivingstatuserror="";
let Street1error="";
let Village1error="";
let Taluk1error="";
let State1error="";
let District1error="";
let Country1error="";
let Pincode1error="";

if(Fathername===""||Fathername===undefined)
{
  Fathernameerror="Please enter fathername";
  isValid=false;
}
else{
  
}

if(Fatherreligion===""||Fatherreligion===undefined)
{
  Fatherreligionerror="Please enter fatherreligion";
  isValid=false;
}

if(groomfatherlivingstatus===""||groomfatherlivingstatus===undefined)
{
  groomfatherlivingstatuserror="Please select groom father living status";
  isValid=false;
}

if(groomfatherlivingstatus=="1")
{
  if(FatherAge===""||FatherAge===undefined)
  {
    FatherAgeerror="Please enter father age";
    isValid=false;
  }
  
  if(FatherOccupation===""||FatherOccupation===undefined)
  {
    FatherOccupationerror="Please enter father occupation";
    isValid=false;
  }
}

if(groomfatherlivingstatus==="1"&&fatherschooseaddress===undefined)
{
if(Street1===""||Street1===undefined)
{
  Street1error="Please enter street";
  isValid=false;
}

if(Village1===""||Village1===undefined)
{
  Village1error="Please enter village";
  isValid=false;
}

if(Taluk1===""||Taluk1===undefined)
{
  Taluk1error="Please enter taluk";
  isValid=false;
}

if(District1===""||District1===undefined)
{
  District1error="Please enter district";
  isValid=false;
}

if(State1===""||State1===undefined)
{
  State1error="Please enter state";
  isValid=false;
}

if(Country1===""||Country1===undefined)
{
  Country1error="Please enter country";
  isValid=false;
}

if(Pincode1===""||Pincode1===undefined)
{
  Pincode1error="Please enter pincode";
  isValid=false;
}

}
else if(groomfatherlivingstatus==="1"&&fatherschooseaddress==="1")
{

}

this.setState({Fathernameerror,FatherAgeerror,Fatherreligionerror,FatherOccupationerror,groomfatherlivingstatuserror,
  Street1error,Village1error,Taluk1error,State1error,District1error,Country1error,Pincode1error})
return isValid;
      }

     myFunction=e=> {
      const {value:{Street,Village,District,State,Country,Pincode,Taluk}}=this.props;
    
      var checkBox = document.getElementById("fatherschooseaddress");
      if (checkBox.checked === true){
        document.getElementById("s_name").value=Street;
        document.getElementById("v_name").value=Village;
        document.getElementById("d_name").value=District;
        document.getElementById("t_name").value=Taluk;
        document.getElementById("st_name").value=State;
        document.getElementById("c_name").value=Country;
        document.getElementById("p_name").value=Pincode;
       
      } else {
        document.getElementById("s_name").value="";
        document.getElementById("v_name").value="";
        document.getElementById("d_name").value="";
        document.getElementById("t_name").value="";
        document.getElementById("st_name").value="";
        document.getElementById("c_name").value="";
        document.getElementById("p_name").value="";
      }
    }

    onMenuItemClicked = () => {
      this.setState({showHideDemo1: !this.state.showHideDemo1});
    }

    onMenuItemClickedvalue = () => {
    const  showHideDemo1=false;
      this.setState({showHideDemo1: showHideDemo1});
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
      const { showHideDemo1} = this.state;
        const {value,inputChange}=this.props;
        const {value:{Fathername,Fatherreligion,groomfatherlivingstatus,FatherAge,FatherOccupation,fatherschooseaddress,
        Street1,Village1,Taluk1,District1,State1,Country1,Pincode1}}=this.props;
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
            <h1>Details of Bridegroom Father </h1>
            <br></br>
            <div class="row">
            <div class="col-md-3">
              <div class="form-group">
              <label>Father's Name<span style={{color:"red"}}> *</span> </label>
      <input type="text" className="input" name="Fathername" value={value.Fathername}  onChange={inputChange('Fathername')}  />
      <p style={{color:"red"}}>{this.state.Fathernameerror}</p>
</div>    
           </div>
    <div class="col-md-3">
      <label>Father's Relegion<span style={{color:"red"}}> *</span> </label>
      <input type="text" className="input" name="Fatherreligion" value={value.Fatherreligion}  onChange={inputChange('Fatherreligion')}  />
      <p style={{color:"red"}}>{this.state.Fatherreligionerror}</p>
             </div>
      <div class="col-md-4">
      <label>Living Status<span style={{color:"red"}}> *</span> </label>
      <div className="form-group">
      <input type="radio"  name="groomfatherlivingstatus" value="1" onClick={() => this.onMenuItemClicked()} checked={value.groomfatherlivingstatus==="1"}  onChange={inputChange('groomfatherlivingstatus')}/>
      <label >  Alive&nbsp;&nbsp;</label>
      <input type="radio" id="dead"  name="groomfatherlivingstatus" value="2" onClick={() => this.onMenuItemClickedvalue()} checked={value.groomfatherlivingstatus==="2"}  onChange={inputChange('groomfatherlivingstatus')}/>
      <label >&nbsp;&nbsp;Dead</label>
      
      </div>
      <p style={{color:"red"}}>{this.state.groomfatherlivingstatuserror}</p>
     </div>
             </div>
             
    <br></br>
    <br></br>
  
    <div id="div1" >
    { this.state.showHideDemo1 && 
      <div>
           <div class="row">
    <div class="col-md-3">
      <div className="form-group">
       <label>Fathers Age</label>
      <input type="number" className="input" name="FatherAge" value={value.FatherAge} onChange={inputChange('FatherAge')}  />
      <p style={{color:"red"}}>{this.state.FatherAgeerror}</p>
      </div>
       </div>
             <div class="col-md-3">
             <div id="div2" >
      <label>Father's Occupation</label>
      <input type="text" className="input" name="FatherOccupation" value={value.FatherOccupation} onChange={inputChange('FatherOccupation')}  />
      <p style={{color:"red"}}>{this.state.FatherOccupationerror}</p>
             </div>
             </div>
             </div>
             <br></br>
             <br></br>
    <div class="row"><div class="col-md-12"> <label >Father's Address</label></div></div>
    <div class="row">
    <br></br>
    <div class="col-md-3">
      <br></br>
      <input type="checkbox" id="fatherschooseaddress" name="fatherschooseaddress" value="1"  onClick={this.myFunction} checked={value.fatherschooseaddress==="1"}  onChange={inputChange('fatherschooseaddress')}/>
      <label >  &nbsp;&nbsp;Address same as Son&nbsp;&nbsp;</label>
    </div>
    
      <div class="col-md-3"  > 
      <div class="form-group">
      <label>Street</label>
      <input type="text" id="s_name" className="input" name="Street1" value={this.state.Street} onChange={inputChange('Street1')}   />
      <p style={{color:"red"}}>{this.state.Street1error}</p>
      </div>
      </div>
      <div class="col-md-3"  > 
      <label>Village</label>
      <input type="text" id="v_name" className="input" name="Village1" value={this.state.Village} onChange={inputChange('Village1')}   />
      <p style={{color:"red"}}>{this.state.Village1error}</p>
       </div>
       <div class="col-md-3"  > 
      <label>Taluk</label>
      <input type="text" id="t_name" className="input" name="Taluk1" value={this.state.Taluk} onChange={inputChange('Taluk1')}   />
      <p style={{color:"red"}}>{this.state.Taluk1error}</p>
       </div>
      </div>
    
    <br></br>
    <div  id="div5">
    <div class="row">
   
       <div class="col-md-3"  > 
      <label>District</label>
      <input type="text" id="d_name" className="input" name="District1" value={this.state.District} onChange={inputChange('District1')}  />
      <p style={{color:"red"}}>{this.state.District1error}</p>
       </div>
       <div class="col-md-3"  > 
      <label>State</label>
      <input type="text" id="st_name" className="input" name="State1" value={this.state.State} onChange={inputChange('State1')}  />
      <p style={{color:"red"}}>{this.state.State1error}</p>
       </div>
         <div class="col-md-3"  > 
      <label>Country</label>
      <input type="text" id="c_name" className="input" name="Country1" value={this.state.Country} onChange={inputChange('Country1')}   />
      <p style={{color:"red"}}>{this.state.Country1error}</p>
       </div>
       <div class="col-md-3"  > 
      <label>Pincode</label>
      <input type="number" id="p_name" className="input" name="Pincode1" value={this.state.Pincode} onChange={inputChange('Pincode1')}   />
               <p style={{color:"red"}}>{this.state.Pincode1error}</p>
       </div>
   
   </div>
   </div>   
  
    </div>
   }
    </div>  
    <br></br>    
   
            <br></br>
        </div> 
         </div>
         <div className="row">
                <div className="col-md-6">
                <button className="pev  m-4" onClick={this.back}>Previous</button>
                </div>
                <div className="col-md-6">
                <div className="text-right">
            <button className="next  m-4" onClick={this.continue}>Next</button>
        </div>
                </div>
            </div>
            <br></br><br></br>  <br></br><br></br> <br></br>
        </div>   
        </div>
        </div>
        )
    }
}

export default Bridegroomfather