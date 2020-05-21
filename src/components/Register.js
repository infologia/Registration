import React, { Component } from "react";

export default class Register extends Component {
  render()
  {
      return( 
     
        <div className="auth-inner"> 
<div className="row">
    <div className="col-sm-12">
<form>
     <h2 >Registration</h2>
    <br></br>

<div class="row">
   <div class="col-md-6">   
   <div className="auth-inners">
<div class="row">
<div class="col-md-12">
<div className="form-group">
   <br></br>
<h4>DETAILS OF BRIDEGROOM </h4>
<br></br>
<div class="row">
  
      <div class="col-md-4">
<label className="lablemain">DATE OF MARRIAGE</label>
</div>
<div class="col-md-8">
<input type="date" className="form-control" id="birthday" name="birthday"></input>
</div>
</div>
</div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>NAME OF THE GROOM</label>
         </div>
         <div class="col-md-8">
         <input type="text" className="form-control" />
         </div>
     </div>
</div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>NATIONALITY</label>
         </div>
         <div class="col-md-8">
         <input type="text" className="form-control"  />
         </div>
         </div>
         </div>

<div className="form-group">
<div class="row">
      <div class="col-md-4">
<label>RESIDENTIAL STATUS IN INDIA</label>
</div>
<div class="col-md-8">
<select id="resident" className="form-control">
  <option value="resident">RESIDENT</option>
  <option value="nri">NRI</option>
  <option value="pio">PIO</option>
  <option value="oci">OCI</option>
</select>
</div>
</div>
</div>

<div className="form-group">
<div class="row">
      <div class="col-md-4">
<label>RELIGON</label>
</div>
<div class="col-md-8">
<select id="religion" className="form-control">
  <option value="hindu">HINDU</option>
  <option value="muslim">MUSLIM</option>
  <option value="christian">CHRISTIAN</option>
  <option value="jain">JAIN</option>
  <option value="buddhist">BUDDHIST</option>
  <option value="seikh">SEIKH</option>
</select>
</div>
</div>
</div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>CASTE</label>
         </div>
         <div class="col-md-8">
         <input type="text" className="form-control"/>
         </div>
     </div>
     </div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
<label>DATE OF BIRTH</label>
</div>
<div class="col-md-4">
<input type="date" className="form-control" id="birthday" name="birthday"></input>
</div>
<div class="col-md-1"><label>Age</label></div>
<div class="col-md-3"> <input type="text" className="form-control"/></div>
</div>
</div>
   

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>NAME OF THE EMPLOYER</label>
         </div>
         <div class="col-md-8">
         <input type="nameofemp" className="form-control" />
         </div>
     </div>
</div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>DESIGNATION</label>
         </div>
         <div class="col-md-8">
         <input type="designation" className="form-control" />
         </div>
     </div>
     </div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
<label>MARITAL STATUS BEFORE MARRIAGE</label>
</div>
<div class="col-md-8">
<select id="beforemarr" className="form-control">
  <option value="bachelor">BACHELOR</option>
  <option value="divorce">DIVORCE</option>
  <option value="widower">WIDOWER</option>
  <option value="married">MARRIED</option>
</select>
</div>
</div>
</div>

<div className="form-group">
<div class="row">
      <div class="col-md-4">
         <label>MOBILE NUMBER</label>
         </div>
         <div class="col-md-8">
         <input type="mobile" className="form-control"  />
         </div>
     </div>
     </div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>WHATSAPP NUMBER</label>
         </div>
         <div class="col-md-8">
         <input type="whatsapp" className="form-control" />
         </div>
     </div>
</div>

<div className="form-group">
<div class="row">
      <div class="col-md-4">
      <label for="category">RESIDENTIAL ADDRESS</label>
         </div>
         <div class="col-md-8">
           <div class="row">
           <div class="col-md-3"><label>STREET :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
        <br></br>
           <div class="row">
           <div class="col-md-3"><label>VILLAGE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>TALUK :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>DISTRICT :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>STATE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>COUNTRY :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>PINCODE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
         
         </div>         
         </div>
         </div>
         
         <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>PASSPORT NUMBER</label>
         </div>
         <div class="col-md-8">
         <input type="whatsapp" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>FATHER'S NAME</label>
         </div>
         <div class="col-md-8">
         <input type="fathername" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>FATHER'S RELIGON</label>
         </div>
         <div class="col-md-8">
         <input type="fatherreligion" className="form-control" />
         </div>
     </div>
    </div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>LIVING STATUS</label>
         </div>
         <div class="col-md-8">
         <input type="radio" id="alive" name="gender" value="male"/>
  <label for="male">  ALIVE&nbsp;&nbsp;</label>
  <input type="radio" id="dead" name="gender" value="female"/>
  <label for="female">DEAD</label>
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>FATHER'S AGE</label>
         </div>
         <div class="col-md-8">
         <input type="fatherage" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>FATHER'S OCCUPATION</label>
         </div>
         <div class="col-md-8">
         <input type="fatherage" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
<div class="row">
      <div class="col-md-4">
      <label for="category">FATHER'S ADDRESS</label>
         </div>
         <div class="col-md-8">
         <div>
         <input type="checkbox" id="fathersonaddress" name="adrress" /><label>Address same as son</label>
         </div>
         <div class="row">
           <div class="col-md-3"><label>STREET :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
        <br></br>
           <div class="row">
           <div class="col-md-3"><label>VILLAGE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>TALUK :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>DISTRICT :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>STATE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>COUNTRY :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>PINCODE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
         </div>         
         </div>
         </div>

         <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>MOTHER'S NAME</label>
         </div>
         <div class="col-md-8">
         <input type="mothername" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>MOTHER'S RELIGON</label>
         </div>
         <div class="col-md-8">
         <input type="motherreligion" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>LIVING STATUS</label>
         </div>
         <div class="col-md-8">
         <input type="radio" id="alive" name="gender" value="male"/>
  <label for="male">  ALIVE&nbsp;&nbsp;</label>
  <input type="radio" id="dead" name="gender" value="female"/>
  <label for="female">DEAD</label>
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>MOTHER'S AGE</label>
         </div>
         <div class="col-md-8">
         <input type="motherage" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>MOTHER'S OCCUPATION</label>
         </div>
         <div class="col-md-8">
         <input type="motherage" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
<div class="row">
      <div class="col-md-4">
      <label for="category">MOTHER'S ADDRESS</label>
         </div>
         <div class="col-md-8">
           <div>
         <input type="checkbox" id="shusaddress" name="adrress" /><label>Address same as Husband</label> &nbsp;
         <input type="checkbox" id="sonaddress" name="adrress" /><label>Address same as Son</label>
         </div>
         &nbsp;
         <div class="row">
           <div class="col-md-3"><label>STREET :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
        <br></br>
           <div class="row">
           <div class="col-md-3"><label>VILLAGE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>TALUK :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>DISTRICT :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>STATE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>COUNTRY :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>PINCODE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
         </div>         
         </div>
         </div>
</div>
       </div>
</div></div>
  <br></br>
   <div class="col-md-6">
   <div class="auth-innersr">
<div class="col-md-12">
<br></br>
<h4>DETAILS OF BRIDE</h4>
         <br></br>
   <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>NAME OF THE BRIDE</label>
         </div>
         <div class="col-md-8">
         <input type="bridename" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>NATIONALITY</label>
         </div>
         <div class="col-md-8">
         <input type="bridenation" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
<div class="row">
      <div class="col-md-4">
<label>RESIDENTIAL STATUS IN INDIA</label>
</div>
<div class="col-md-8">
<select id="resident" className="form-control">
  <option value="resident">RESIDENT</option>
  <option value="nri">NRI</option>
  <option value="pio">PIO</option>
  <option value="oci">OCI</option>
</select>
</div>
</div>
</div>

<div className="form-group">
<div class="row">
      <div class="col-md-4">
<label>RELIGON</label>
</div>
<div class="col-md-8">
<select id="religion" className="form-control">
  <option value="hindu">HINDU</option>
  <option value="muslim">MUSLIM</option>
  <option value="christian">CHRISTIAN</option>
  <option value="jain">JAIN</option>
  <option value="buddhist">BUDDHIST</option>
  <option value="seikh">SEIKH</option>
</select>
</div>
</div>
</div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>CASTE</label>
         </div>
         <div class="col-md-8">
         <input type="text" className="form-control"/>
         </div>
     </div>
     </div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
<label>DATE OF BIRTH</label>
</div>
<div class="col-md-4">
<input type="date" className="form-control" id="birthday" name="birthday"></input>
</div>
<div class="col-md-1"><label>Age</label></div>
<div class="col-md-3"> <input type="text" className="form-control"/></div>
</div>
</div>
   

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>NAME OF THE EMPLOYER</label>
         </div>
         <div class="col-md-8">
         <input type="nameofemp" className="form-control" />
         </div>
     </div>
</div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>DESIGNATION</label>
         </div>
         <div class="col-md-8">
         <input type="designation" className="form-control" />
         </div>
     </div>
     </div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
<label>MARITAL STATUS BEFORE MARRIAGE</label>
</div>
<div class="col-md-8">
<select id="beforemarr" className="form-control">
  <option value="bachelor">BACHELOR</option>
  <option value="divorce">DIVORCE</option>
  <option value="widower">WIDOWER</option>
  <option value="married">MARRIED</option>
</select>
</div>
</div>
</div>

<div className="form-group">
<div class="row">
      <div class="col-md-4">
         <label>MOBILE NUMBER</label>
         </div>
         <div class="col-md-8">
         <input type="mobile" className="form-control"  />
         </div>
     </div>
     </div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>WHATSAPP NUMBER</label>
         </div>
         <div class="col-md-8">
         <input type="whatsapp" className="form-control" />
         </div>
     </div>
</div>

<div className="form-group">
<div class="row">
      <div class="col-md-4">
      <label for="category">RESIDENTIAL ADDRESS</label>
         </div>
         <div class="col-md-8">
         <div class="row">
           <div class="col-md-3"><label>STREET :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
        <br></br>
           <div class="row">
           <div class="col-md-3"><label>VILLAGE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>TALUK :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>DISTRICT :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>STATE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>COUNTRY :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>PINCODE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
         </div>         
         </div>
         </div>
         
         <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>PASSPORT NUMBER</label>
         </div>
         <div class="col-md-8">
         <input type="whatsapp" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>FATHER'S NAME</label>
         </div>
         <div class="col-md-8">
         <input type="fathername" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>FATHER'S RELIGON</label>
         </div>
         <div class="col-md-8">
         <input type="fatherreligion" className="form-control" />
         </div>
     </div>
    </div>

     <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>LIVING STATUS</label>
         </div>
         <div class="col-md-8">
         <input type="radio" id="alive" name="gender" value="male"/>
  <label for="male">  ALIVE&nbsp;&nbsp;</label>
  <input type="radio" id="dead" name="gender" value="female"/>
  <label for="female">DEAD</label>
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>FATHER'S AGE</label>
         </div>
         <div class="col-md-8">
         <input type="fatherage" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>FATHER'S OCCUPATION</label>
         </div>
         <div class="col-md-8">
         <input type="fatherage" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
<div class="row">
      <div class="col-md-4">
      <label for="category">FATHER'S ADDRESS</label>
         </div>
         <div class="col-md-8">
         <div>
         <input type="checkbox" id="fathersonaddress" name="adrress" /><label>Address same as son</label>
         </div>
         <div class="row">
           <div class="col-md-3"><label>STREET :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
        <br></br>
           <div class="row">
           <div class="col-md-3"><label>VILLAGE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>TALUK :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>DISTRICT :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>STATE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>COUNTRY :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>PINCODE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
         </div>         
         </div>
         </div>

         <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>MOTHER'S NAME</label>
         </div>
         <div class="col-md-8">
         <input type="brimothername" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>MOTHER'S RELIGON</label>
         </div>
         <div class="col-md-8">
         <input type="brimotherreligion" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>LIVING STATUS</label>
         </div>
         <div class="col-md-8">
         <input type="radio" id="livstatusbri"  />
  <label for="male">  ALIVE&nbsp;&nbsp;</label>
  <input type="radio" id="deadbri"  />
  <label for="female">DEAD</label>
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>MOTHER'S AGE</label>
         </div>
         <div class="col-md-8">
         <input type="brimotherage" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>MOTHER'S OCCUPATION</label>
         </div>
         <div class="col-md-8">
         <input type="brimotherage" className="form-control" />
         </div>
     </div>
    </div>

    <div className="form-group">
<div class="row">
      <div class="col-md-4">
      <label for="category">MOTHER'S ADDRESS</label>
         </div>
         <div class="col-md-8">
           <div>
         <input type="checkbox" id="shusaddress" name="adrress" /><label>Address same as Husband</label> &nbsp;
         <input type="checkbox" id="sonaddress" name="adrress" /><label>Address same as Daughter</label>
         </div>
         &nbsp;
         <div class="row">
           <div class="col-md-3"><label>STREET :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
        <br></br>
           <div class="row">
           <div class="col-md-3"><label>VILLAGE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>TALUK :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>DISTRICT :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>STATE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>COUNTRY :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>PINCODE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div> 
         </div>         
         </div>
         </div>
</div>
</div>
   </div>
</div>
<br></br>
 <div className="auth-innerer"> 
 
<h4>MARRIAGE DETAILS</h4>
         <br></br>
<div class="row">
  <div class="col-md-6">
  
         <div className="form-group">
     <div class="row">
      <div class="col-md-4">
<label>PLACE OF MARRIAGE</label>
</div>
<div class="col-md-8">
<select id="beforemarr" className="form-control">
<option value="select">-select value-</option>
  <option value="marriagehall">MARRIAGE HALL</option>
  <option value="temple">TEMPLE</option>
</select>
 <div class="row">
           <div class="col-md-3"><label>Name :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
         <div class="row">
           <div class="col-md-3"><label>STREET :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
        <br></br>
           <div class="row">
           <div class="col-md-3"><label>VILLAGE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>TALUK :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>DISTRICT :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>STATE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>COUNTRY :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>PINCODE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
</div>
</div>
</div>

<div className="form-group">
     <div class="row">
      <div class="col-md-4">
<label>CONVENIENT DATE OF MARRIAGE REGISTRATION</label>
</div>
<div class="col-md-8">
<input type="date" className="form-control" id="marriagedate" ></input>
</div>
</div>
</div>


  </div>
  <div class="col-md-6">

  <div className="form-group">
     <div class="row">
      <div class="col-md-4">
<label>WHO SOLEMNIZED THE MARRIAGE</label>
</div>
<div class="col-md-8">
<select id="beforemarr" className="form-control">
  <option value="bridemother">BRIDE'S MOTHER</option>
  <option value="bridefather">BRIDES FATHER</option>
  <option value="bridegroommother">BRIDEGROOM'S MOTHER</option>
  <option value="bridegroomfather">BRIDEGROOM'S FATHER</option>
</select>
</div>
</div>
</div>

<div className="form-group">
<div class="row">
      <div class="col-md-4">
      <label for="category">ADDRESS OF THE SOLEMNIZED PERSON</label>
         </div>
         <div class="col-md-8">
         <div class="row">
           <div class="col-md-3"><label>STREET :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
        <br></br>
           <div class="row">
           <div class="col-md-3"><label>VILLAGE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>TALUK :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>DISTRICT :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>STATE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>COUNTRY :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
           <br></br>
           <div class="row">
           <div class="col-md-3"><label>PINCODE :</label></div>
           <div class="col-md-9"> <input type="text" className="form-control"  /></div>
           </div>
         </div>         
         </div>
         </div>
  </div>
</div>
</div>
<br></br>
<div class="auth-innerer">
<div class="row">
      <div class="col-md-6">
      <h4>PARENTS PHYSICAL PRESENCE STATUS TO SUB-REGISTRAR OFFICE, AT THE TIME OF REGISTRATION</h4>
         <br></br>

         <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>BRIDE'S MOTHER</label>
         </div>
         <div class="col-md-8">
         <input type="radio" id="alive" name="gender" value="male"/>
  <label for="male">  YES&nbsp;&nbsp;</label>
  <input type="radio" id="dead" name="gender" value="female"/>
  <label for="female">NO</label>
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>BRIDE'S FATHER</label>
         </div>
         <div class="col-md-8">
         <input type="radio" id="alive" name="gender" value="male"/>
  <label for="male">  YES&nbsp;&nbsp;</label>
  <input type="radio" id="dead" name="gender" value="female"/>
  <label for="female">NO</label>
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>BRIDEGROOM'S MOTHER</label>
         </div>
         <div class="col-md-8">
         <input type="radio" id="alive" name="gender" value="male"/>
  <label for="male">  YES&nbsp;&nbsp;</label>
  <input type="radio" id="dead" name="gender" value="female"/>
  <label for="female">NO</label>
         </div>
     </div>
    </div>

    <div className="form-group">
     <div class="row">
      <div class="col-md-4">
         <label>BRIDEGROOM'S FATHER</label>
         </div>
         <div class="col-md-8">
         <input type="radio" id="alive" name="gender" value="male"/>
  <label for="male">  YES&nbsp;&nbsp;</label>
  <input type="radio" id="dead" name="gender" value="female"/>
  <label for="female">NO</label>
         </div>
     </div>
    </div>
      </div>
    </div>
</div>


   

<div class="text-center">
     <button type="submit" className="btn btn-primary ">Submit</button>
     </div>
 </form>
 </div>
 </div>
 </div>
      );
  }
}
