import React, { Component } from 'react';
import {Redirect,Link} from "react-router-dom";
export class  Marriagedetails extends Component
{
    state={
        placeofmarriageerror:"",
        marriageplacenameerror:"",
        Street6error:"",
        Village6error:"",
        Taluk6error:"",
        District6error:"",
        State6error:"",
        Country6error:"",
        Pincode6error:"",
        marriagedateerror:"",
        whosolemnimarriageerror:"",
        Pincode7error:"",

      }  
      
      continue=e=>{
        e.preventDefault();
      const isValid=this.validateForm();
      if(isValid){
        this.props.nextStep();
      }

    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    validateForm() {
        let isValid = true;
        var today = new Date(),
        date = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)) + '-' + today.getDate();
        const {value:{placeofmarriage,marriageplacename,Street6,Village6,Taluk6,District6,State6,Country6,Pincode6,
                marriagedate,whosolemnimarriage,}}=this.props;
  
  let placeofmarriageerror="";
  let marriageplacenameerror="";
  let Street6error="";
  let Village6error="";
  let Taluk6error="";
  let District6error="";
  let State6error="";
  let Country6error="";
  let Pincode6error="";
  let marriagedateerror="";
  let whosolemnimarriageerror="";
  let Pincode7error="";
  var g2 = new Date(marriagedate); 
  
  if(placeofmarriage===""||placeofmarriage===undefined)
  {
    placeofmarriageerror="Please select palceofmarriage";
    isValid=false;
  }

  
  if(marriageplacename===""||marriageplacename===undefined)
  {
     marriageplacenameerror="Please enter marriage place";
    isValid=false;
  }

  if(marriageplacename===""||marriageplacename===undefined)
  {
     marriageplacenameerror="Please enter marriage place";
    isValid=false;
  }
 
  
  if(Street6===""||Street6===undefined)
  {
        Street6error="Please enter street";
    isValid=false;
  }

  if(Village6===""||Village6===undefined)
  {
        Village6error="Please enter village";
    isValid=false;
  }

  if(Taluk6===""||Taluk6===undefined)
  {
        Taluk6error="Please enter taluk";
    isValid=false;
  }

  if(District6===""||District6===undefined)
  {
        District6error="Please enter district";
    isValid=false;
  }

  if(State6===""||State6===undefined)
  {
        State6error="Please enter state";
    isValid=false;
  }

  if(Country6===""||Country6===undefined)
  {
        Country6error="Please enter country";
    isValid=false;
  }

  if(marriagedate===""||marriagedate===undefined)
  {
        marriagedateerror="Please select  marriagedate";
    isValid=false;
  }
  else{
        if(today.getTime() > g2.getTime())
        {
                marriagedateerror="Invalid marriagedate";
          isValid=false;
        }
      }

  if(whosolemnimarriage===""||whosolemnimarriage===undefined)
  {
        whosolemnimarriageerror="Please select person";
    isValid=false;
  }
  
  if(Pincode6===""||Pincode6===undefined)
  {
        Pincode6error="Please select whosolemnimarriage";
    isValid=false;
  }

  
  this.setState({placeofmarriageerror,marriageplacenameerror,Street6error,Village6error,Taluk6error,District6error,State6error,Country6error,Pincode6error,marriagedateerror,whosolemnimarriageerror,Pincode7error
  })
  return isValid;
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
    const {value:{placeofmarriage,marriageplacename,Street6,Village6,Taluk6,District6,State6,Country6,Pincode6,
        marriagedate,whosolemnimarriage,Street7,Village7,Taluk7,District7,State7,Country7,Pincode7
    }}=this.props;
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
      <h1>Marriage Details</h1>
        <div class="row">
        <div class="col-md-6">
        <div class="form-group">
        <label>Place of Marriage<span style={{color:"red"}}> *</span></label>
        <select id="beforemarr" className="input" value={value.placeofmarriage} onChange={inputChange('placeofmarriage')} >
<option value="0">-select value-</option>
<option value="1">Marriage Hall</option>
<option value="2">Temple</option>
</select>
<p style={{color:"red"}}>{this.state.placeofmarriageerror}</p>
</div>
</div>
<div class="col-md-6"></div>

<div class="col-md-12"> <h6 className="text-left"><br></br>Place of Marriage Address</h6></div>
      <div class="col-md-3">
        <div class="form-group">
<label>Name<span style={{color:"red"}}> *</span></label>
<input type="text" name="marriageplacename"  value={value.marriageplacename} onChange={inputChange('marriageplacename')} className="input" />
<p style={{color:"red"}}>{this.state.marriageplacenameerror}</p>
</div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
<label>Street<span style={{color:"red"}}> *</span></label>
<input type="text" name="Street6"  value={value.Street6} onChange={inputChange('Street6')} className="input"  />
<p style={{color:"red"}}>{this.state.Street6error}</p>
</div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
<label>Village<span style={{color:"red"}}> *</span></label>
<input type="text" name="Village6"  value={value.Village6} onChange={inputChange('Village6')} className="input"  />
<p style={{color:"red"}}>{this.state.Village6error}</p>
</div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
<label>Taluk<span style={{color:"red"}}> *</span></label>
<input type="text" name="Taluk6"  value={value.Taluk6} onChange={inputChange('Taluk6')} className="input"  />
<p style={{color:"red"}}>{this.state.Taluk6error}</p>
</div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
<label>District<span style={{color:"red"}}> *</span></label>
<input type="text" name="District6" value={value.District6} onChange={inputChange('District6')} className="input"/>
<p style={{color:"red"}}>{this.state.District6error}</p>
   </div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
        <label>State<span style={{color:"red"}}> *</span></label>
   <input type="text" className="input"  name="State6" value={value.State6} onChange={inputChange('State6')}></input>
   <p style={{color:"red"}}>{this.state.State6error}</p>
</div>
        </div>
        <div class="col-md-3">
        <label>Country<span style={{color:"red"}}> *</span></label>
        <input type="text" className="input"  name="Country6" value={value.Country6} onChange={inputChange('Country6')}></input>
        <p style={{color:"red"}}>{this.state.Country6error}</p>
        </div>
        <div class="col-md-3">
        <div class="form-group">
<label>Pincode<span style={{color:"red"}}> *</span></label>
<input type="number" name="Pincode6" value={value.Pincode6} onChange={inputChange('Pincode6')}  className="input" />
<p style={{color:"red"}}>{this.state.Pincode6error}</p>
   </div>
        </div>     
      <div class="col-md-6">
      <div class="form-group">
<label >Convenient Date of Marriage Registration<span style={{color:"red"}}> *</span></label>
<input type="date" className="input" value={value.marriagedate} name="marriagedate" onChange={inputChange('marriagedate')} ></input>
<p style={{color:"red"}}>{this.state.marriagedateerror}</p>
</div>      
</div>   
<div class="col-md-6">
      <div class="form-group">
<label >Who Solemnized the Marriage<span style={{color:"red"}}> *</span></label>
<select  className="input" name="whosolemnimarriage" value={value.whosolemnimarriage}  onChange={inputChange('whosolemnimarriage')} >
<option value="0">Select person</option>
  <option value="1" >Bride's Mother</option>
  <option value="2" >Bride's Father</option>
  <option value="3" >Bridegroom's Mother</option>
  <option value="4">Bridegroom's Father</option>
</select>
<p style={{color:"red"}}>{this.state.whosolemnimarriageerror}</p></div>      
</div> <div class="col-md-12"> </div>
<div class="col-md-12"> <h6 className="text-left"><br></br>ADDRESS OF THE SOLEMNIZED PERSON</h6></div>

        <div class="col-md-3">
        <div class="form-group">
<label>Street</label>
<input type="text" name="Street7" id="s_name" value={value.Street7} onChange={inputChange('Street7')} className="input"  />
</div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
<label>Village</label>
<input type="text" name="Village7" id="v_name" value={value.Village7} onChange={inputChange('Village7')} className="input"  />
</div>
        </div>
       <div class="col-md-3">
        <div class="form-group">
<label>Taluk</label>
<input type="text" name="Taluk7" id="t_name" value={value.Taluk7} onChange={inputChange('Taluk7')} className="input"  />
</div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
<label>District</label>
<input type="text" name="District7" id="d_name" value={value.District7} onChange={inputChange('District7')} className="input"/>
   </div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
        <label>State</label>
   <input type="text" className="input"  id="st_name" name="State7" value={value.State7} onChange={inputChange('State7')}></input>
</div>
        </div>
        <div class="col-md-3">
        <label>Country</label>
        <input type="text" className="input" id="c_name"  name="Country7" value={value.Country7} onChange={inputChange('Country7')}></input>
        </div>
        <div class="col-md-3">
        <div class="form-group">
<label>Pincode</label>
<input type="number" name="Pincode7" id="p_name" value={value.Pincode7} onChange={inputChange('Pincode7')}  className="input" />
   </div>
        </div>
        </div>   
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
    );
}    
}

export default Marriagedetails