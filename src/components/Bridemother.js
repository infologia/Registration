import React, { Component } from 'react';

export class Bridemother extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideDemo1: false,
    };
    const {value:{bridemotherlivingstatuss,bridemotherchooseaddress,bridebridefatherchooseaddress,Street3,Village3,Taluk3,District3,
      State3,Country3,Pincode3,Street4,Village4,Taluk4, District4,State4,Country4,Pincode4,Street5,Village5,
      Taluk5,District5,State5,Country5,Pincode5}}=this.props;
    if(bridemotherlivingstatuss==="1")
{
 if(bridemotherchooseaddress==="1"&&bridebridefatherchooseaddress===undefined)
 {
  this.state = {
    showHideDemo1: true,
    Street:Street4,  
    Village:Village4,
    Taluk:Taluk4,
    District:District4,
State:State4,
Country:Country4,
Pincode:Pincode4,
  };
 }
 else if(bridemotherchooseaddress==="2"&&bridebridefatherchooseaddress==="1")
 {
  this.state = {
    showHideDemo1: true,
    Street:Street3,  
    Village:Village3,
    Taluk:Taluk3,
    District:District3,
State:State3,
Country:Country3,
Pincode:Pincode3,
  };
 }
 else if(bridemotherchooseaddress==="2"&&bridebridefatherchooseaddress===undefined)
 {
  this.state = {
    showHideDemo1: true,
    Street:Street3,  
    Village:Village3,
    Taluk:Taluk3,
    District:District3,
State:State3,
Country:Country3,
Pincode:Pincode3,
  };
 }
 else{
  this.state = {
    showHideDemo1: true,
    Street:Street5,  
    Village:Village5,
    Taluk:Taluk5,
    District:District5,
State:State5,
Country:Country5,
Pincode:Pincode5,
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
        bridemothererror:"",
        bridemotherageerror:"",
        bridemotherreligionerror:"",
        bridemotheroccupationerror:"",
        bridemotherlivingstatusserror:"",
       Pincode5error:"",
      }  
      
      continue=e=>{
        e.preventDefault();
      const isValid=this.validateForm();
     
       this.props.nextStep(); 
    
      };

      validateForm() {
        let isValid = true;
        const {value:{bridemother,bridemotherreligion,bridemotherlivingstatuss,bridemotherchooseaddress,Street5,Village5,Taluk5,District5,State5,Country5,Pincode5}}=this.props;
  
  let bridemothererror="";
  let bridemotherageerror="";
  let bridemotherreligionerror="";
  let bridemotheroccupationerror="";
  let bridemotherlivingstatusserror="";
  let Pincode5error="";
  
  if(bridemother===""||bridemother===undefined)
  {
    bridemothererror="Please enter mother name";
    isValid=false;
  }
  else{
    if(!bridemother.match(/^[a-zA-Z ]*$/))
    {
      bridemothererror="Please enter alphabet characters only";
      isValid=false;
    }
  }
  
  if(bridemotherreligion===""||bridemotherreligion===undefined)
  {
    bridemotherreligionerror="Please enter mother religion";
    isValid=false;
  }
  
  if(bridemotherlivingstatuss===""||bridemotherlivingstatuss===undefined)
  {
    bridemotherlivingstatusserror="Please select  mother living status";
    isValid=false;
  }

  
  
  this.setState({bridemothererror,bridemotherreligionerror,bridemotherlivingstatusserror,Pincode5error})
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

        groomadrress=e=>
        {
          const {value:{Street3,Village3,Taluk3,District3,State3,Country3,Pincode3,Street4,Village4,Taluk4,District4,
            State4,Country4,Pincode4,bridebridefatherchooseaddress}}=this.props;
if(bridebridefatherchooseaddress==="1")
{
  document.getElementById("bms_name").value=Street3;
  document.getElementById("bmv_name").value=Village3;
  document.getElementById("bmd_name").value=District3;
  document.getElementById("bmt_name").value=Taluk3;
  document.getElementById("bmst_name").value=State3;
  document.getElementById("bmc_name").value=Country3;
  document.getElementById("bmp_name").value=Pincode3;
}
else{
  document.getElementById("bms_name").value=Street4;
  document.getElementById("bmv_name").value=Village4;
  document.getElementById("bmd_name").value=District4;
  document.getElementById("bmt_name").value=Taluk4;
  document.getElementById("bmst_name").value=State4;
  document.getElementById("bmc_name").value=Country4;
  document.getElementById("bmp_name").value=Pincode4;
}        
        }

        groomadrressson=e=>
        {
          const {value:{Street3,Village3,Taluk3,District3,State3,Country3,Pincode3}}=this.props;

          document.getElementById("bms_name").value=Street3;
          document.getElementById("bmv_name").value=Village3;
          document.getElementById("bmd_name").value=District3;
          document.getElementById("bmt_name").value=Taluk3;
          document.getElementById("bmst_name").value=State3;
          document.getElementById("bmc_name").value=Country3;
          document.getElementById("bmp_name").value=Pincode3;
          
        }

        render()
        {
          const { showHideDemo1} = this.state;
            const {value,inputChange}=this.props;
            const {value:{bridemother,bridemotherreligion,bridemotherlivingstatuss,bridemotherchooseaddress,
            Street5,Village5,Taluk5,District5,State5,Country5,Pincode5}}=this.props;
            return(
                <div className="form-container">
                  <br></br>
                <h1>Details of Bride Mother </h1>
                <br></br>
                <div class="row">
      <div class="col-md-4">
      <label>Mother's Name<span style={{color:"red"}}> *</span></label>
      <input type="text" className="form-control" name="bridemother" value={value.bridemother} onChange={inputChange('bridemother')}  />
      <p style={{color:"red"}}>{this.state.bridemothererror}</p>
               </div>
      <div class="col-md-4">
      <label>Mother's Relegion<span style={{color:"red"}}> *</span></label>
      <input type="text" className="form-control" name="bridemotherreligion" value={value.bridemotherreligion} onChange={inputChange('bridemotherreligion')} />
      <p style={{color:"red"}}>{this.state.bridemotherreligionerror}</p>
               </div>
      <div class="col-md-4">
      <label>Living Status<span style={{color:"red"}}> *</span></label>
        <div className="form-group">
        <input type="radio" id="alive" name="bridemotherlivingstatuss" value="1" onClick={() => this.onMenuItemClicked()} checked={value.bridemotherlivingstatuss==="1"}  onChange={inputChange('bridemotherlivingstatuss')}/>
        <label >  Alive&nbsp;&nbsp;</label>
        <input type="radio" id="dead"  name="bridemotherlivingstatuss" value="2" onClick={() => this.onMenuItemClickedvalue()} checked={value.bridemotherlivingstatuss==="2"}  onChange={inputChange('bridemotherlivingstatuss')}/>
        <label >&nbsp;&nbsp;Dead</label>
        <p style={{color:"red"}}>{this.state. bridemotherlivingstatusserror}</p>
      </div>
      </div>
     </div>
      <br></br>
      <br></br>
      { this.state.showHideDemo1 && 
      <div id="div4" >
    
      <div class="row">
      <div class="col-md-4">
      <label>Mother's Age</label>
      <input type="text" className="form-control"  name="bridemotherage" value={value.bridemotherage} onChange={inputChange('bridemotherage')}  />
      <p style={{color:"red"}}>{this.state. bridemotherageerror}</p>
               </div>
      <div class="col-md-4">
      <label>Mother's Occupation</label>
      <input type="text" className="form-control" name="bridemotheroccupation" value={value.bridemotheroccupation} onChange={inputChange('bridemotheroccupation')}  />
      <p style={{color:"red"}}>{this.state.bridemotheroccupationerror}</p>
               </div>   
      </div>
      <br></br>
      <div class="row"><div class="col-md-12"> <label >Mother's Address</label></div></div>
      <div class="row">
      <br></br>
      <div class="col-md-4">
        <br></br>
       <input type="radio" id="shusaddress"  name="bridemotherchooseaddress" value="1"  onClick={this.groomadrress} checked={value.bridemotherchooseaddress==="1"}  onChange={inputChange('bridemotherchooseaddress')}/>
      <label >&nbsp;&nbsp;Address same as Husband</label><br></br>
      <input type="radio" id="sonaddress" name="bridemotherchooseaddress" value="2"  onClick={this.groomadrressson } checked={value.bridemotherchooseaddress==="2"}  onChange={inputChange('bridemotherchooseaddress')}/>
      <label >  &nbsp;&nbsp;Address same as Daughter</label>
       </div>
        <div class="col-md-4"> 
        <label>Street</label>
        <input type="text" className="form-control" id="bms_name" name="Street5" value={this.state.Street} onChange={inputChange('Street5')}   />
        </div>
        <div class="col-md-4"> 
<label>Village</label>
 <input type="text" className="form-control" id="bmv_name" name="Village5" value={this.state.Village} onChange={inputChange('Village5')}   />
      </div>
      </div>
      <br></br>
      <div class="row">
      <div class="col-md-4">
  <label>Taluk</label>
   <input type="text" className="form-control" id="bmt_name" name="Taluk5" value={this.state.Taluk} onChange={inputChange('Taluk5')}   />
        </div>
        <div class="col-md-4">
<label>District</label><input type="text" className="form-control" id="bmd_name" name="District5" value={this.state.District} onChange={inputChange('District5')}  />
        </div>
        <div class="col-md-4">
     <label>State</label>
      <input type="text" className="form-control" id="bmst_name" name="State5" value={this.state.State} onChange={inputChange('State5')}   />
        </div>
       
      </div>
      <br></br>
      <div class="row">
        <div class="col-md-4">
<label>Country</label> <input type="text" className="form-control" id="bmc_name" name="Country5" value={this.state.Country} onChange={inputChange('Country5')}   />
        </div>
      <div class="col-md-4">
<label>Pincode</label> <input type="text" id="bmp_name" className="form-control" name="Pincode5" value={this.state.Pincode} onChange={inputChange('Pincode5')}   />
                 <p style={{color:"red"}}>{this.state.Pincode5error}</p>
        </div>
      </div>
      </div>
        }
     <br></br>
      <div className="row">
                  <div className="col-md-6">
                  <button className="btn btn-danger" onClick={this.back}>Back</button>
                  </div>
                  <div className="col-md-6">
                  <div className="text-right">
              <button className="btn btn-primary" onClick={this.continue}>Continue</button>
          </div>
                  </div>
              </div>
              <br></br>
            </div>   
                 
            )
        }
}

export default Bridemother