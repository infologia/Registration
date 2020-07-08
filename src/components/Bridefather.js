import React, { Component } from 'react';
import {Redirect,Link} from "react-router-dom";
export class Bridefather extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideDemo1: false,
    };
    const {value:{bridefatherlivingstatus,bridefatherreligion,bridebridefatherchooseaddress,Street3,Village3,Taluk3,District3,
      State3,Country3,Pincode3,Street4,Village4,Taluk4, District4,State4,Country4,Pincode4}}=this.props;
    if(bridefatherlivingstatus==="1")
{
 if(bridebridefatherchooseaddress==="1")
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
 else
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
}
else
{
  this.state = {
    showHideDemo1: false,
  };
}
  }

    state={
        bridefathererror:"",
        bridefatherageerror:"",
        bridefatherreligionerror:"",
        bridefatheroccupationerror:"",
        bridefatherlivingstatuserror:"",
       Pincode4error:"",
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
        const {value:{bridefather,bridefatherage,bridefatherlivingstatus,bridefatherreligion,bridebridefatherchooseaddress,Street4,Village4,Taluk4,District4,State4,Country4,Pincode4}}=this.props;
  
  let bridefathererror="";
  let bridefatherageerror="";
  let bridefatherlivingstatuserror="";
  let Pincode4error="";
   let bridefatherreligionerror="";
  if(bridefather===""||bridefather===undefined)
  {
    bridefathererror="Please enter father name";
    isValid=false;
  }
  else{
    if(!bridefather.match(/^[a-zA-Z ]*$/))
    {
      bridefathererror="Please enter alphabet characters only";
      isValid=false;
    }
  }
  
  // if(bridefatherage===""||bridefatherage===undefined)
  // {
  //   bridefatherageerror="Please enter father age";
  //   isValid=false;
  // }
 
  if(bridefatherlivingstatus===""||bridefatherlivingstatus===undefined)
  {
    bridefatherlivingstatuserror="Please enter  father living status";
    isValid=false;
  }
  
  this.setState({bridefathererror,bridefatherageerror,bridefatherlivingstatuserror,Pincode4error,bridefatherreligionerror})
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

      myFunction=e=> {
        const {value:{Street3,Village3,Taluk3,District3,
          State3,Country3,Pincode3}}=this.props;
      
        var checkBox = document.getElementById("bridebridefatherchooseaddress");
        if (checkBox.checked === true){
          document.getElementById("bs_name").value=Street3;
          document.getElementById("bv_name").value=Village3;
          document.getElementById("bd_name").value=District3;
          document.getElementById("bt_name").value=Taluk3;
          document.getElementById("bst_name").value=State3;
          document.getElementById("bc_name").value=Country3;
          document.getElementById("bp_name").value=Pincode3;
         
        } else {
          document.getElementById("bs_name").value="";
          document.getElementById("bv_name").value="";
          document.getElementById("bd_name").value="";
          document.getElementById("bt_name").value="";
          document.getElementById("bst_name").value="";
          document.getElementById("bc_name").value="";
          document.getElementById("bp_name").value="";
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
        const { showHideDemo1} = this.state;
          const {value,inputChange}=this.props;
          const {value:{bridefather,bridefatherreligion,bridefatherlivingstatus,bridefatherage,bridefatheroccupation,bridebridefatherchooseaddress,
          Street4,Village4,Taluk4,District4,State4,Country4,Pincode4}}=this.props;
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
              <h1>Details of Bride Father </h1>
              <br></br>
              <div class="row">
      <div class="col-md-3">
        <label>Father's Name<span style={{color:"red"}}> *</span></label>
        <input type="text" className="input" name="bridefather" value={value.bridefather} onChange={inputChange('bridefather')}  />
        <p style={{color:"red"}}>{this.state.bridefathererror}</p>
               </div>
        <div class="col-md-3">
        <label>Father's Relegion<span style={{color:"red"}}> *</span></label>
        <input type="text" className="input" name="bridefatherreligion" value={value.bridefatherreligion} onChange={inputChange('bridefatherreligion')}  />
        <p style={{color:"red"}}>{this.state.bridefatherreligionerror}</p>
               </div>
        <div class="col-md-3">
        <label>Living Status<span style={{color:"red"}}> *</span></label>
        <div className="form-group">
        <input type="radio" id="alive" name="bridefatherlivingstatus" value="1" onClick={() => this.onMenuItemClicked()} checked={value.bridefatherlivingstatus==="1"}  onChange={inputChange('bridefatherlivingstatus')}/>
        <label >  Alive&nbsp;&nbsp;</label>
        <input type="radio" id="dead"  name="bridefatherlivingstatus" value="2" onClick={() => this.onMenuItemClickedvalue()} checked={value.bridefatherlivingstatus==="2"}  onChange={inputChange('bridefatherlivingstatus')}/>
        <label >&nbsp;&nbsp;Dead</label>
        <p style={{color:"red"}}>{this.state.bridefatherlivingstatuserror}</p>
        </div>
        </div>
               </div>
      <br></br>
      <br></br>
      { this.state.showHideDemo1 && 
      <div id="div3">
             <div class="row">
      <div class="col-md-3">
         <label>Father's Age</label>
        <input type="number" className="input" name="bridefatherage" value={value.bridefatherage} onChange={inputChange('bridefatherage')}  />
        <p style={{color:"red"}}>{this.state.bridefatherageerror}</p>
         </div>
               <div class="col-md-3">
               <div id="div2" >
        <label>Father's Occupation</label>
        <input type="text" className="input" name="bridefatheroccupation" value={value.bridefatheroccupation} onChange={inputChange('bridefatheroccupation')}  />
          </div>
               </div>
               </div>
               <br></br>
      <div class="row"><div class="col-md-12"> <label >Father's Address</label></div></div>
      <div class="row">
      <br></br>
      <div class="col-md-3">
        <br></br>
        <input type="checkbox" id="bridebridefatherchooseaddress" name="bridebridefatherchooseaddress" value="1"  onClick={this.myFunction} checked={value.bridebridefatherchooseaddress==="1"}  onChange={inputChange('bridebridefatherchooseaddress')}/>
      <label >  &nbsp;&nbsp;Address same as Daughter&nbsp;&nbsp;</label>
       </div>
      
        <div class="col-md-3" > 
       <label>Street</label>
        <input type="text" className="input" id="bs_name" name="Street4" value={this.state.Street} onChange={inputChange('Street4')}   />
        </div>
        <div class="col-md-3" > 
        <label>Village</label>
        <input type="text" className="input" id="bv_name" name="Village4" value={this.state.Village} onChange={inputChange('Village4')}   />
        </div>
        <div class="col-md-3">
    <label>Taluk</label>
     <input type="text" className="input" id="bt_name" name="Taluk4" value={this.state.Taluk} onChange={inputChange('Taluk4')}   />
        </div>
       </div>
      
      <br></br>
      <div class="row">
   
        <div class="col-md-3">
        <label>District</label>
<input type="text" className="input" id="bd_name" name="District4" value={this.state.District} onChange={inputChange('District4')}  />
       </div>
        <div class="col-md-3">
      <label>State</label>
<input type="text" className="input" id="bst_name" name="State4" value={this.state.State} onChange={inputChange('State4')}  />
         </div>  
         <div class="col-md-3">
<label>Country</label>
 <input type="text" className="input" id="bc_name" name="Country4" value={this.state.Country} onChange={inputChange('Country4')}   />
  </div>
      <div class="col-md-3">
     <label>Pincode</label>
 <input type="number" className="input" id="bp_name" name="Pincode4" value={this.state.Pincode} onChange={inputChange('Pincode4')}   />
                 <p style={{color:"red"}}>{this.state.Pincode4error}</p>
       </div>
        
      </div>
      <br></br>
      <br></br>
      </div> 
     }
      <br></br> 
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
              </div>
              <br></br><br></br>  <br></br><br></br> <br></br>
                  </div>
              </div></div>        
          )
      }
}

export default Bridefather