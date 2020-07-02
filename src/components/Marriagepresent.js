import React, { Component } from 'react';

export class Marriagepresent extends Component
{
    state={
          bridemotherpresenterror:"",
          bridefatherpresenterror:"",
        groomfathererror:"",
        groommothererror:"",
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
        const {value:{  bridemotherpresent,  bridefatherpresent,groommother,groomfather}}=this.props;
  
  let   bridefatherpresenterror="";
  let   bridemotherpresenterror="";
  let groommothererror="";
  let groomfathererror="";
  if(  bridefatherpresent===""||  bridefatherpresent===undefined)
  {
      bridefatherpresenterror="Please select yes/no";
    isValid=false;
  }
 
  if(  bridemotherpresent===""||  bridemotherpresent===undefined)
  {
      bridemotherpresenterror="Please select yes/no";
    isValid=false;
  }
  
  if(groommother===""||groommother===undefined)
  {
    groommothererror="Please select yes/no";
    isValid=false;
  }

  if(groomfather===""||groomfather===undefined)
  {
    groomfathererror="Please select yes/no";
    isValid=false;
  }
  
  this.setState({  bridemotherpresenterror,  bridefatherpresenterror,groommothererror,groomfathererror})
  return isValid;
        }

    render()
{
    const {value,inputChange}=this.props;
    const {value:{  bridemotherpresent,  bridefatherpresent,groommother,groomfather}}=this.props;
    return(
        <div className="form-container">
        <br></br>
      <h1>Parents pysical  presence  status to sub-register office,at the time of registration</h1>
      <div class="row"> <div class="col-md-3"></div>
                  <div class="col-md-3"><label>Bride's Mother<span style={{color:"red"}}> *</span></label></div>
                  <div class="col-md-3">  <div class="form-group">
                  <input type="radio" id="present" name="bridemotherpresent" value="1"  checked={value.bridemotherpresent==="1"} onChange={inputChange('bridemotherpresent')}/>
      <label > &nbsp; Yes&nbsp;&nbsp;</label>
      <input type="radio" id="present1" name="bridemotherpresent" value="2"  checked={value.bridemotherpresent==="2"} onChange={inputChange('bridemotherpresent')}/>
      <label > &nbsp; No</label>
      <p style={{color:"red"}}>{this.state.  bridemotherpresenterror}</p>
    </div>
      </div><div class="col-md-3"></div>
     </div>  
    
     <div class="row"> <div class="col-md-3"></div>
                  <div class="col-md-3"><label>BRIDE'S FATHER</label></div>
                  <div class="col-md-3">  <div class="form-group">
                  <input type="radio" id="present2" name="bridefatherpresent" value="1" checked={value.bridefatherpresent==="1"} onChange={inputChange('bridefatherpresent')}/>
      <label for="male"> &nbsp; YES&nbsp;&nbsp;</label>
      <input type="radio" id="present4" name="bridefatherpresent" value="2" checked={value.bridefatherpresent==="2"} onChange={inputChange('bridefatherpresent')}/>
      <label for="female"> &nbsp; NO</label>
      <p style={{color:"red"}}>{this.state.  bridefatherpresenterror}</p>
    </div>
      </div><div class="col-md-3"></div>
     </div>  
    
     <div class="row"> <div class="col-md-3"></div>
                  <div class="col-md-3"><label>BRIDEGROOM'S MOTHER</label></div>
                  <div class="col-md-3">  <div class="form-group">
                  <input type="radio" id="present5" name="groommother" value="1" checked={value.groommother==="1"} onChange={inputChange('groommother')}/>
      <label for="male"> &nbsp; YES&nbsp;&nbsp;</label>
      <input type="radio" id="present6" name="groommother" value="2" checked={value.groommother==="2"} onChange={inputChange('groommother')}/>
      <label for="female"> &nbsp; NO</label>
      <p style={{color:"red"}}>{this.state.groommothererror}</p>
    </div>
      </div><div class="col-md-3"></div>
     </div>  
    
     <div class="row"> <div class="col-md-3"></div>
                  <div class="col-md-3"><label>BRIDEGROOM'S FATHER</label></div>
                  <div class="col-md-3">  <div class="form-group">
                  <input type="radio" id="present7" name="groomfather" value="1" checked={value.groomfather==="1"} onChange={inputChange('groomfather')}/>
      <label > &nbsp; YES&nbsp;&nbsp;</label>
      <input type="radio" id="present8" name="groomfather" value="2" checked={value.groomfather==="2"} onChange={inputChange('groomfather')}/>
      <label > &nbsp; NO</label>
      <p style={{color:"red"}}>{this.state.groomfathererror}</p>
    </div>
      </div><div class="col-md-3"></div>
     </div>  
   
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
    );
}
}

export default Marriagepresent