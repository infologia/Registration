import React, { Component } from 'react';
import {Redirect,Link} from "react-router-dom";
export class Attachements extends Component
{

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }

    state={
      Passporterror:"",
      Marksheeterror:"",
      Rationcarderror:"",
      Aadharcarderror:"",
      Voteriderror:"",
      Drivinglicenceerror:"",
      Passportsizephotoerror:"",
      Divorcecopyerror:"",
      MarriageCertificateerror:"",
      Spousedeathcertificateerror:"",
      Singlestatuscertificateerror:"",
      Bridepassporterror:"",
      BrideMarksheeterror:"",
      BrideRationcarderror:"",
      BrideAaharcarderror:"",
      BrideVoteriderror:"",
      BrideDrivinglicenceerror:"",
      BridePassportsizephotoerror:"",
      BrideDivorcecopyerror:"",
      BrideMarriageCertificateerror:"",
      BrideSpousedeathcertificateerror:"",
      BrideSinglestatuscertificateerror:"",
      Invitationerror:"",
      Marriagereceipterror:"",
      Marriagereciptdocerror:""
     } 
          
         continue=e=>{
          e.preventDefault();
          this.props.nextStep();
        };
        back = e => {
          e.preventDefault();
          this.props.prevStep();
      };

      closeform() {
        document.getElementById('errormsg1').style.display = 'none';
      }

      closeform1() {
        document.getElementById('errormsg2').style.display = 'none';
      }

      closeform2() {
        document.getElementById('errormsg3').style.display = 'none';
      }
    
        submit = e =>{
          e.preventDefault();
     const {value:{Dateofmarriage,Name,Nationality,ResidentialStatus,Religion,Caste,DOB,Employername,Designation,
          maritalstatus,Mobileno,whatsappnumber,emailaddress,Passportno,Street,Village,District,State,Country,Pincode,
          Taluk,Fathername,FatherAge,FatherOccupation,Fatherreligion,groomfatherlivingstatus,fatherschooseaddress,Street1,
          Village1,Taluk1,District1,State1,Country1,Pincode1,MotherName,Motherreligion,groommotherlivingstatus,MotherAge,MotherOccupation,motherchooseaddress,
          Street2,Village2,Taluk2,District2,State2,Country2,Pincode2,bridename,BrideNationality,brideresidential,bridereligion,bridecaste,BrideDateofbirth,brideemployername,
          bridedesignation,bridemaritalstatus,bridemobilenumber,bridewhatsapp,brideemail,Street3,Village3,Taluk3,District3,
          State3,Country3,Pincode3,bridepassport,bridefather,bridefatherreligion,bridefatherlivingstatus,bridefatherage,bridefatheroccupation,
          bridebridefatherchooseaddress,Street4,Village4,Taluk4,District4,State4,Country4,Pincode4,bridemother,bridemotherage,bridemotherreligion,bridemotheroccupation,bridemotherlivingstatuss,
          bridemotherchooseaddress,Street5,Village5,Taluk5,District5,State5,Country5,Pincode5,placeofmarriage,marriageplacename,Street6,Village6,Taluk6,District6,State6,Country6,Pincode6,
          marriagedate,whosolemnimarriage,Street7,Village7,Taluk7,District7,State7,Country7,Pincode7,  bridemotherpresent,  bridefatherpresent,groommother,groomfather,
          relationship,witnessname,fatherhusbandname,Street8,Village8,Taluk8,District8,State8,Country8,Pincode8,idcard,idcardno,
          Passport,Marksheet,Rationcard,Aadharcard,Voterid,Drivinglicence,Passportsizephoto,Divorcecopy,
          MarriageCertificate,Spousedeathcertificate,Singlestatuscertificate,Bridepassport,BrideMarksheet,
          BrideRationcard,BrideAaharcard,BrideVoterid,BrideDrivinglicence,BridePassportsizephoto,
          BrideDivorcecopy,BrideMarriageertificate,BrideSpousedeadcertificate,BrideSinglestatuscertificate,
          Invitation,Marriagereceipt}}=this.props;
let url="http://ec2-18-221-198-250.us-east-2.compute.amazonaws.com:9001/weddingform";          
let access_token=localStorage.getItem('token');
const formData = new FormData();

        formData.append('Dateofmarriage', Dateofmarriage); 
        formData.append('Name', Name);
        formData.append('Nationality',Nationality);
        formData.append('ResidentialStatus',ResidentialStatus);
        formData.append('Religion',Religion);
        formData.append('Caste',Caste);
        formData.append('Dateofbirth',DOB);
        formData.append('Employername',Employername);
        formData.append('Designation',Designation);
        formData.append('MaritalStatusBeforeMarriage', maritalstatus);
        formData.append('Mobileno',Mobileno);
        formData.append('whatsappnumber',whatsappnumber);
        formData.append('Email',emailaddress);
        formData.append('ResiAddress.Street',Street);
        formData.append('ResiAddress.village',Village);
        formData.append('ResiAddress.Taluk',Taluk);
        formData.append('ResiAddress.District',District);
        formData.append('ResiAddress.State',State);
        formData.append('ResiAddress.Country',Country);
        formData.append('ResiAddress.Pincode',Pincode);
        formData.append('Passportno',Passportno);
        formData.append('Fathername',Fathername);
        formData.append('Fatherreligion',Fatherreligion);
        formData.append('Livingstatus','1');
        formData.append('FLivingStatus',groomfatherlivingstatus);
        if(groomfatherlivingstatus==="1")
        {
          formData.append('FatherAge',FatherAge);
        }
        else{
          formData.append('FatherAge',0);
        }
        
        formData.append('FatherOccupation',FatherOccupation);

        if(fatherschooseaddress==="1")
        {
          formData.append('Fatheraddress.Street',Street);
          formData.append('Fatheraddress.village',Village);
          formData.append('Fatheraddress.Taluk',Taluk);
          formData.append('Fatheraddress.District',District);
          formData.append('Fatheraddress.State',State);
          formData.append('Fatheraddress.Country',Country);
          formData.append('Fatheraddress.Pincode',Pincode);
        }
        else
        {
          formData.append('Fatheraddress.Street',Street1);
          formData.append('Fatheraddress.village',Village1);
          formData.append('Fatheraddress.Taluk',Taluk1);
          formData.append('Fatheraddress.District',District1);
          formData.append('Fatheraddress.State',State1);
          formData.append('Fatheraddress.Country',Country1);
          formData.append('Fatheraddress.Pincode',Pincode1);
        }
       
        formData.append('MotherName',MotherName);
        formData.append('Motherreligion',Motherreligion);
        formData.append('MLivingStatus',groommotherlivingstatus);
        if(groommotherlivingstatus==="1")
        {
          formData.append('MotherAge',MotherAge);
        }
        else
        {
          formData.append('MotherAge',0);
        }
       
        formData.append('MotherOccupation',MotherOccupation);

if(motherchooseaddress==="1"&&fatherschooseaddress==="1")
{
formData.append('Motheraddress.Street',Street);
formData.append('Motheraddress.village',Village);
formData.append('Motheraddress.Taluk',Taluk);
formData.append('Motheraddress.District',District);
formData.append('Motheraddress.State',State);
formData.append('Motheraddress.Country',Country);
formData.append('Motheraddress.Pincode',Pincode);
}
else if(motherchooseaddress==="2")
{
formData.append('Motheraddress.Street',Street1);
formData.append('Motheraddress.village',Village1);
formData.append('Motheraddress.Taluk',Taluk1);
formData.append('Motheraddress.District',District1);
formData.append('Motheraddress.State',State1);
formData.append('Motheraddress.Country',Country1);
formData.append('Motheraddress.Pincode',Pincode1);
}
else{
formData.append('Motheraddress.Street',Street2);
formData.append('Motheraddress.village',Village2);
formData.append('Motheraddress.Taluk',Taluk2);
formData.append('Motheraddress.District',District2);
formData.append('Motheraddress.State',State2);
formData.append('Motheraddress.Country',Country2);
formData.append('Motheraddress.Pincode',Pincode2);
}
        formData.append('BrideName',bridename);
        formData.append('BrideNationality',BrideNationality);
        formData.append('BrideResidentialStatus',brideresidential);
        formData.append('BrideReligion',bridereligion);
        formData.append('BrideCaste',bridecaste);
        formData.append('BrideDateofbirth',BrideDateofbirth);
        formData.append('BrideEmployername',brideemployername);
        formData.append('BrideDesignation',bridedesignation);
        formData.append('BrideMaritalStatusBeforeMarriage',bridemaritalstatus);
        formData.append('BrideMobileno',bridemobilenumber);
        formData.append('Bridewhatsappnumber',bridewhatsapp);
        formData.append('BrideEmail',brideemail);
        formData.append('BrideResiAddress.Street',Street3);
        formData.append('BrideResiAddress.village',Village3);
        formData.append('BrideResiAddress.Taluk3',Taluk3);
        formData.append('BrideResiAddress.District',District3);
        formData.append('BrideResiAddress.State',State3);
        formData.append('BrideResiAddress.Country',Country3);
        formData.append('BrideResiAddress.Pincode',Pincode3);
        formData.append('BridePassportno',bridepassport);
        formData.append('BrideFathername',bridefather);
        formData.append('BrideFatherreligion',bridefatherreligion);
        formData.append('BrideLivingStatus','1');
        formData.append('BrideFLivingStatus',bridefatherlivingstatus);
        if(bridefatherlivingstatus==="1"){
          formData.append('BrideFatherAge',bridefatherage);
        }
        else{
          formData.append('BrideFatherAge',0);
        }
       
        formData.append('BrideFatherOccupation',bridefatheroccupation);

if(bridebridefatherchooseaddress==="1")
{
formData.append('BrideFatheraddress.Street',Street3);
        formData.append('BrideFatheraddress.village',Village3);
        formData.append('BrideFatheraddress.Taluk',Taluk3);
        formData.append('BrideFatheraddress.District4',District3);
        formData.append('BrideFatheraddress.State',State3);
        formData.append('BrideFatheraddress.Country',Country3);
        formData.append('BrideFatheraddress.Pincode',Pincode3);
}
else{
formData.append('BrideFatheraddress.Street',Street4);
        formData.append('BrideFatheraddress.village',Village4);
        formData.append('BrideFatheraddress.Taluk',Taluk4);
        formData.append('BrideFatheraddress.District4',District4);
        formData.append('BrideFatheraddress.State',State4);
        formData.append('BrideFatheraddress.Country',Country4);
        formData.append('BrideFatheraddress.Pincode',Pincode4);
}
      
       
        formData.append('BrideMotherName',bridemother);
        formData.append('BrideMotherreligion',bridemotherreligion);
        formData.append('BrideMLivingStatus',bridemotherlivingstatuss);
        if(bridemotherlivingstatuss==="1"){
          formData.append('BrideMotherAge',bridemotherage);
        }
        else{
          formData.append('BrideMotherAge',0);
        }
        
        formData.append('BrideMotherOccupation',bridemotheroccupation);

if(bridemotherchooseaddress==="1"&&bridebridefatherchooseaddress==="1")
{
formData.append('BrideMotheraddress.Street',Street3);
formData.append('BrideMotheraddress.village',Village3);
formData.append('BrideMotheraddress.Taluk',Taluk3);
formData.append('BrideMotheraddress.District',District3);
formData.append('BrideMotheraddress.State',State3);
formData.append('BrideMotheraddress.Country',Country3);
formData.append('BrideMotheraddress.Pincode',Pincode3);
}
else if(bridemotherchooseaddress==="2")
{
formData.append('BrideMotheraddress.Street',Street4);
formData.append('BrideMotheraddress.village',Village4);
formData.append('BrideMotheraddress.Taluk',Taluk4);
formData.append('BrideMotheraddress.District',District4);
formData.append('BrideMotheraddress.State',State4);
formData.append('BrideMotheraddress.Country',Country4);
formData.append('BrideMotheraddress.Pincode',Pincode4);
}
else{
formData.append('BrideMotheraddress.Street',Street5);
        formData.append('BrideMotheraddress.village',Village5);
        formData.append('BrideMotheraddress.Taluk',Taluk5);
        formData.append('BrideMotheraddress.District',District5);
        formData.append('BrideMotheraddress.State',State5);
        formData.append('BrideMotheraddress.Country',Country5);
        formData.append('BrideMotheraddress.Pincode',Pincode5);
}
      
        formData.append('placeofmarriage.Name',marriageplacename);
        formData.append('placeofmarriage. Street', Street6);
        formData.append('placeofmarriage.village',Village6);
        formData.append('placeofmarriage.Taluk',Taluk6);
        formData.append('placeofmarriage.District',District6);
        formData.append('placeofmarriage.State',State6);
        formData.append('placeofmarriage.Country',Country6);
        formData.append('placeofmarriage.Pincode',Pincode6);
        formData.append('MarriageDate',marriagedate);
        formData.append('MarriageNotes','test');
        formData.append('whosolemnizedmarriage',whosolemnimarriage);
        formData.append('Addressofsolemnized.Street',Street7);
        formData.append('Addressofsolemnized.village',Village7);
        formData.append('Addressofsolemnized.Taluk',Taluk7);
        formData.append('Addressofsolemnized.District',District7);
        formData.append('Addressofsolemnized.State',State7);
        formData.append('Addressofsolemnized.Country',Country7);
        formData.append('Addressofsolemnized.Pincode',Pincode7);
        formData.append('Bridemother',bridemotherpresent);
        formData.append('BrideFather',bridefatherpresent);
        formData.append('BrideFatherGroom',groommother);
        formData.append('BridemotherGroom',groomfather);
        formData.append('Witness','1');
        formData.append('Witnessname',witnessname);
        formData.append('Witnessrelation',relationship);
        formData.append('Witnessaddress.Street',Street8);
        formData.append('Witnessaddress.village',Village8);
        formData.append('Witnessaddress.Taluk',Taluk8);
        formData.append('Witnessaddress.District',District8);
        formData.append('Witnessaddress.State',State8);
        formData.append('Witnessaddress.Country',Country8);
        formData.append('Witnessaddress.Pincode',Pincode8);
        formData.append('Identitynumber',idcardno);            
        formData.append('Passport',this.state.Passport);
        formData.append('Marksheet',this.state.Marksheet);
        formData.append('Rationcard',this.state.Rationcard);
        formData.append('Aadharcard',this.state.Aadharcard);
        formData.append('Voterid',this.state.Voterid);
        formData.append('DrivingLicence',this.state.Drivinglicence);
        formData.append('PassportSizePhotograph',this.state.Passportsizephoto);
        formData.append('DivorceCopy',this.state.Divorcecopy);
        formData.append('FirstMarriageCertificate',this.state.MarriageCertificate);
        formData.append('SpouseDeathCertificate',this.state.Spousedeathcertificate);
        formData.append('SingleStatusCertificate',this.state.Singlestatuscertificate);
        formData.append('BridePassport',this.state.BridePassport);
        formData.append('BrideMarksheet',this.state.BrideMarksheet);
        formData.append('BrideRationCard',this.state.BrideRationcard);
        formData.append('BrideAadharcard',this.state.BrideAadharcard);
        formData.append('BrideVoterid',this.state.BrideVoterid);
        formData.append('BrideDrivingLicence',this.state.BrideDrivinglicence);
        formData.append('BridePassportSizePhotograph',this.state.BridePassportsizephoto);
        formData.append('BrideDivorceCopy',this.state.BrideDivorcecopy);
        formData.append('BrideFirstMarriageCertificate',this.state.BrideMarriageCertificate);
        formData.append('BrideSpouseDeathCertificate',this.state.BrideSpousedeadcertificate);
        formData.append('BrideSingleStatusCertificate',this.state.BrideSinglestatuscertificate);
        formData.append('Invitation',this.state.Invitation);
        formData.append('MarriageReceipt',this.state.Marriagereceipt);
        formData.append('Moreattach','test');
        formData.append('Declaration','1');
        formData.append('Otherservices','1');
        formData.append('Subservices','1');
       
        console.log(formData);
fetch(url,{
          method:'POST',
          headers:
          {
            'x-access-token':access_token },
          body:formData
        }).then((result)=>
        {
          result.json().then((resp)=>
        {
          console.warn("resp",resp)
          if (result.status===200) {
           
          }
          else if(result.status===401)
          {
            this.props.history.push('/Login')
            return result;
          }
          else if(result.status===400)
          {
            document.getElementById('errormsg1').style.display = 'block';
           return result;
          }
          else if(result.status===500)
          {
            document.getElementById('errormsg1').style.display = 'block';
           return result;
          }
          else if(result.status===503)
          {
            document.getElementById('errormsg1').style.display = 'block';
           return result;
          }
          else{
          
            }
      })
      })      
      };


      validateForm=()=>{
        let isValid = true;
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const {value:{Passport,Marksheet,Rationcard,Aadharcard,Voterid,Drivinglicence,Passportsizephoto,Divorcecopy,
      MarriageCertificate,Spousedeathcertificate,Singlestatuscertificate,Bridepassport,BrideRationcard,BrideMarksheet,
      BrideAaharcard,BrideVoterid,BrideDrivinglicence,BridePassportsizephoto,BrideDivorcecopy,BrideMarriageCertificate,BrideSpousedeathcertificate,BrideSinglestatuscertificate,Invitation,Marriagereceipt,Marriagereciptdoc}}=this.props;
         let Passporterror = "";
          let Marksheeterror = "";
          let Rationcarderror="";
          let Aadharcarderror="";
  let Voteriderror="";
  let Drivinglicenceerror="";
  let Passportsizephotoerror="";
  let Divorcecopyerror="";
  let MarriageCertificateerror="";
  let Spousedeathcertificateerror="";
  let Singlestatuscertificateerror="";
  let Bridepassporterror="";
  let BrideMarksheeterror="";
  let BrideRationcarderror="";
  let BrideAaharcarderror="";
  let BrideVoteriderror="";
  let BrideDrivinglicenceerror="";
  let BridePassportsizephotoerror="";
  let BrideDivorcecopyerror="";
  let BrideMarriageCertificateerror="";
  let BrideSpousedeathcertificateerror="";
  let BrideSinglestatuscertificateerror="";
  let Invitationerror ="";
  let Marriagereceipterror="";
  let Marriagereciptdocerror="";
  
  
  if(Passport===""||Passport===undefined)
  {
    Passporterror="Please upload passport";
    isValid=false;
  }
  else{
    if(!Passport.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      Passporterror="Please upload only .doc|.docx|.pdf|.png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }

  if(Marksheet===""||Marksheet===undefined)
  {
    Marksheeterror="Please upload marksheet";
    isValid=false;
  }
  else{
    if(!Marksheeterror.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      Marksheeterror="Please upload only .doc|.docx|.pdf|.png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }
  
  if(Rationcard===""||Rationcard===undefined)
  {
    Rationcarderror="Please upload rationcard";
    isValid=false;
  }
  else{
    if(!Rationcard.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      Rationcarderror="Please upload only .doc|.docx|.pdf|.png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }

  if(Aadharcard===""||Aadharcard===undefined)
  {
    Aadharcarderror="Please upload aadharcard";
    isValid=false;
  }
  else{
    if(!Aadharcard.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      Aadharcarderror="Please upload only .doc|.docx|.pdf|.png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }

  if(Voterid===""||Voterid===undefined)
  {
    Voteriderror="Please upload voterid";
    isValid=false;
  }
  else{
    if(!Voterid.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      Voteriderror="Please upload only .doc|.docx|.pdf document";
      isValid=false;
    }
  }


  if(Passportsizephoto===""||Passportsizephoto===undefined)
  {
    Voteriderror="Please upload passport size photo";
    isValid=false;
  }
  else{
    if(!Passportsizephoto.match(/([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif|.jpeg)$/))
    {
      Passportsizephotoerror="Please upload only .png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }

  if(Bridepassport===""||Bridepassport===undefined)
  {
    Bridepassporterror="Please upload passport";
    isValid=false;
  }
  else{
    if(!Bridepassport.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf)$/))
    {
      Bridepassporterror="Please upload only .doc|.docx|.pdf document";
      isValid=false;
    }
  }

  if(BrideRationcard===""||BrideRationcard===undefined)
  {
    BrideRationcarderror="Please upload rationcard";
    isValid=false;
  }
  else{
    if(!BrideRationcard.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      BrideRationcarderror="Please upload only .doc|.docx|.pdf|.png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }

  if(BrideAaharcard===""||BrideAaharcard===undefined)
  {
    BrideAaharcarderror="Please upload aaharcard";
    isValid=false;
  }
  else{
    if(!BrideAaharcard.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      BrideAaharcarderror="Please upload only .doc|.docx|.pdf|.png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }

  if(BrideMarksheet===""||BrideMarksheet===undefined)
  {
    BrideMarksheeterror="Please upload marksheet";
    isValid=false;
  }
  else{
    if(!BrideMarksheet.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      BrideMarksheeterror="Please upload only .doc|.docx|.pdf|.png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }

  if(BrideVoterid===""||BrideVoterid===undefined)
  {
    BrideVoteriderror="Please upload voterid";
    isValid=false;
  }
  else{
    if(!BrideVoterid.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      BrideVoteriderror="Please upload only .doc|.docx|.pdf|.png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }

  if(BridePassportsizephoto===""||BridePassportsizephoto===undefined)
  {
    BridePassportsizephotoerror="Please upload voterid";
    isValid=false;
  }
  else{
    if(!BridePassportsizephoto.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf)$/))
    {
      BridePassportsizephotoerror="Please upload only .doc|.docx|.pdf document";
      isValid=false;
    }
  }

  if(Invitation===""||Invitation===undefined)
  {
    Invitationerror="Please upload Invitation";
    isValid=false;
  }
  else{
    if(!Invitation.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf|.png|.jpg|.gif|.jpeg)$/))
    {
      Invitationerror="Please upload only .doc|.docx|.pdf|.png|.jpg|.gif|.jpeg document";
      isValid=false;
    }
  }


  if(Marriagereceipt===""||Marriagereceipt===undefined||Marriagereceipt===0)
  {
    Marriagereceipterror="Please select marriage receipt";
    isValid=false;
  }

  if(Marriagereciptdoc===""||Marriagereciptdoc===undefined)
  {
    Marriagereciptdocerror="Please upload marriage receipt";
    isValid=false;
  }
  else{
    if(!Marriagereciptdoc.match(/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf)$/))
    {
      Marriagereciptdocerror="Please upload only .doc|.docx|.pdf document";
      isValid=false;
    }
  }

  this.setState({Passporterror,Marksheeterror,Rationcarderror,Aadharcarderror,Voteriderror,Drivinglicenceerror,Passportsizephotoerror,Divorcecopyerror,
    MarriageCertificateerror,Spousedeathcertificateerror,Singlestatuscertificateerror,Bridepassporterror,BrideRationcarderror,BrideAaharcarderror,BrideMarksheeterror,BrideVoteriderror,
    BrideDrivinglicenceerror,BridePassportsizephotoerror,BrideDivorcecopyerror,BrideMarriageCertificateerror,BrideSpousedeathcertificateerror,
    BrideSinglestatuscertificateerror,Invitationerror,Marriagereceipterror,Marriagereciptdocerror})
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
            const {value:{Passport,Marksheet,Rationcard,Aadharcard,Voterid,Drivinglicence,Passportsizephoto,Divorcecopy,
              MarriageCertificate,Spousedeathcertificate,Singlestatuscertificate,Bridepassport,BrideMarksheet,
              BrideRationcard,BrideAaharcard,BrideVoterid,BrideDrivinglicence,BridePassportsizephoto,
              BrideDivorcecopy,BrideMarriageertificate,BrideSpousedeadcertificate,BrideSinglestatuscertificate,
              Invitation,Marriagereceipt,Marriagereciptdoc}}=this.props;
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
              <h1>Attachements</h1>
      
              <div class="row">
                <div class="col-md-12">
                <div className="form-group">
            <label>BRIDE GROOM:</label>
     </div></div>
     <div class="col-md-3">
                  <div class="form-group">
    <label>Passport<span style={{color:"red"}}> *</span></label>
    <input type="file" name="Passport" onChange={(e) => this.setState({ Passport: e.target.files[0] })}/>
    <p style={{color:"red"}}>{this.state.Passporterror}</p>
     </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
     <label>10th Marksheet/ 12th Marksheet<span style={{color:"red"}}> *</span> </label>
     <input type="file" name="Marksheet" onChange={(e) => this.setState({ Marksheet: e.target.files[0] })}  />
     <p style={{color:"red"}}>{this.state.Marksheeterror}</p>
      </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
      <label>Ration Card<span style={{color:"red"}}> *</span></label>
      <input type="file" name="Rationcard" onChange={(e) => this.setState({ Rationcard: e.target.files[0] })} />
      <p style={{color:"red"}}>{this.state.Rationcarderror}</p>
      </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
      <label>Aadhar Card<span style={{color:"red"}}> *</span></label>
      <input type="file" name="Aadharcard" onChange={(e) => this.setState({ Aadharcard: e.target.files[0] })}/>
      <p style={{color:"red"}}>{this.state.Aadharcarderror}</p>
             </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
                  <label>Voter ID<span style={{color:"red"}}> *</span> </label>
             <input type="file"  name="Voterid" onChange={(e) => this.setState({ Voterid: e.target.files[0] })}></input>
             <p style={{color:"red"}}>{this.state.Voteriderror}</p>
    </div>
                  </div>
                  <div class="col-md-3">
                  <label>Driving Licence</label>
                  <input type="file"   name="Drivinglicence" onChange={(e) => this.setState({ Drivinglicence: e.target.files[0] })}></input>
                  <p style={{color:"red"}}>{this.state.Drivinglicenceerror}</p>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
    <label>Passport Size Photography<span style={{color:"red"}}> *</span></label>
    <input type="file" name="Passportsizephoto" onChange={(e) => this.setState({ Passportsizephoto: e.target.files[0] })} />
    <p style={{color:"red"}}>{this.state.Passportsizephotoerror}</p>
             </div>
                  </div>
    
                <div class="col-md-3">
                  <div class="form-group">
    <label>(if divorce) Divorce Copy</label>
    <input type="file" name="Divorcecopy" onChange={(e) => this.setState({ Divorcecopy: e.target.files[0] })} />
    <p style={{color:"red"}}>{this.state.Divorcecopyerror}</p>
             </div>
                  </div> 
                 <div class="col-md-3">
                  <div class="form-group">
    <label>(in divorce) 1st Marriage Certificate</label>
    <input type="file" name="MarriageCertificate" onChange={(e) => this.setState({ MarriageCertificate: e.target.files[0] })}  />
    <p style={{color:"red"}}>{this.state.MarriageCertificateerror}</p>
             </div>
                  </div> 
    <div class="col-md-3">
                  <div class="form-group">
    <label>(if widower) Spouse Death Certificate</label>
    <input type="file" name="Spousedeathcertificate" onChange={(e) => this.setState({ Spousedeathcertificate: e.target.files[0] })} />
    <p style={{color:"red"}}>{this.state.Spousedeathcertificateerror}</p>
             </div>
                  </div> 
    <div class="col-md-3">
                  <div class="form-group">
    <label>(if other than Resident) Single Status</label>
    <input type="file" name="Singlestatuscertificate" onChange={(e) => this.setState({ Singlestatuscertificate: e.target.files[0] })}/>
    <p style={{color:"red"}}>{this.state.Singlestatuscertificateerror}</p>
             </div>
                  </div> 
     </div>         
           <br></br>           
            <div class="row">
                <div class="col-md-12">
                <div className="form-group">
            <label>BRIDE :</label>
     </div></div>
     <div class="col-md-3">
                  <div class="form-group">
    <label>Passport<span style={{color:"red"}}> *</span></label>
    <input type="file" name="BridePassport" onChange={(e) => this.setState({ BridePassport: e.target.files[0] })} />
    <p style={{color:"red"}}>{this.state.Bridepassporterror}</p>
     </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
     <label>10th Marksheet/ 12th Marksheet<span style={{color:"red"}}> *</span> </label>
     <input type="file" name="BrideMarksheet" onChange={(e) => this.setState({ BrideMarksheet: e.target.files[0] })} />
     <p style={{color:"red"}}>{this.state.BrideMarksheeterror}</p>
      </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
      <label>Ration Card<span style={{color:"red"}}> *</span></label>
      <input type="file" name="BrideRationcard" onChange={(e) => this.setState({ BrideRationcard: e.target.files[0] })} />
      <p style={{color:"red"}}>{this.state.BrideRationcarderror}</p>
      </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
      <label>Aadhar Card<span style={{color:"red"}}> *</span></label>
      <input type="file" name="BrideAadharcard" onChange={(e) => this.setState({ BrideAadharcard: e.target.files[0] })}/>
      <p style={{color:"red"}}>{this.state.BrideAaharcarderror}</p>
             </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
                  <label>Voter ID<span style={{color:"red"}}> *</span> </label>
             <input type="file"  name="BrideVoterid" onChange={(e) => this.setState({ BrideVoterid: e.target.files[0] })}></input>
             <p style={{color:"red"}}>{this.state.BrideVoteriderror}</p>
    </div>
                  </div>
                  <div class="col-md-3">
                  <label>Driving Licence</label>
                  <input type="file"   name=" BrideDrivinglicence" onChange={(e) => this.setState({  BrideDrivinglicence: e.target.files[0] })}></input>
                  <p style={{color:"red"}}>{this.state.BrideDrivinglicenceerror}</p>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
    <label>Passport Size Photography</label>
    <input type="file" id="fileInput" name="BridePassportsizephoto" onChange={(e) => this.setState({ BridePassportsizephoto: e.target.files[0] })}  />
    <p style={{color:"red"}}>{this.state.BridePassportsizephotoerror}</p>
             </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
    <label>(if divorce) Divorce Copy</label>
    <input type="file" name="BrideDivorcecopy" onChange={(e) => this.setState({ BrideDivorcecopy: e.target.files[0] })} />
    <p style={{color:"red"}}>{this.state.BrideDivorcecopyerror}</p>
             </div>
                  </div> 
                <div class="col-md-3">
                  <div class="form-group">
    <label>(if divorce) 1st Marriage Certificate</label>
    <input type="file" name="BrideMarriageCertificate" onChange={(e) => this.setState({ BrideMarriageCertificate: e.target.files[0] })}  />
    <p style={{color:"red"}}>{this.state.BrideMarriageCertificateerror}</p>
             </div>
                  </div> 
    
                  <div class="col-md-3">
                  <div class="form-group">
    <label>(if widower) Spouse Death Certificate</label>
    <input type="file" name="BrideSpousedeathcertificate" onChange={(e) => this.setState({ BrideSpousedeadcertificate: e.target.files[0] })} />
    <p style={{color:"red"}}>{this.state.BrideSpousedeathcertificateerror}</p>
             </div>
                  </div> 
     <div class="col-md-3">
                  <div class="form-group">
    <label>(if other than Resident) Single Status </label>
    <input type="file" name="BrideSinglestatuscertificate" onChange={(e) => this.setState({ BrideSinglestatuscertificate: e.target.files[0] })}  />
    <p style={{color:"red"}}>{this.state.BrideSinglestatuscertificateerror}</p>
             </div>
                  </div> 
             </div>
           <br></br>           
            <div class="row">
                <div class="col-md-12">
                <div className="form-group">
            <label>MARRIAGE PROOF:</label>
     </div></div>
     <div class="col-md-3">
                  <div class="form-group">
    <label>Invitation<span style={{color:"red"}}> *</span></label>
    <input type="file" name="Invitation" onChange={(e) => this.setState({ Invitation: e.target.files[0] })}/>
    <p style={{color:"red"}}>{this.state.Invitationerror}</p>
     </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
     <label>Marriage Receipt<span style={{color:"red"}}> *</span></label>
     <select id="Marriagereceipt" className="input" name="Marriagereceipt" onChange={this.onChangeHandler}>
    <option value="0">-Select Value-</option>
      <option value="1">Hall Receipt</option>
      <option value="2">Temple Receipt</option>
      <option value="3">Chutch Certificate</option>
      <option value="4">Jamath Document</option>
      <option value="5"> Chief Khaji Certificate</option>
    </select> 
    <p style={{color:"red"}}>{this.state.Marriagereceipterror}</p>
    </div>
                  </div>
                  <div class="col-md-3">
                  <div class="form-group">
   <input type="file" name="Marriagereciptdoc" onChange={(e) => this.setState({ Marriagereceipt: e.target.files[0] })}/>
   <p style={{color:"red"}}>{this.state.Marriagereciptdocerror}</p>
     </div>
                  </div>
            </div>
         </div>
          </div>
      
          <div className="row">
                  <div className="col-md-6">
                  <button className="pev m-4" onClick={this.back}>Back</button>
                  </div>
                  <div className="col-md-6">
                  <div className="text-right">
                  <button className="next m-4" onClick={this.submit}>Submit</button>
          </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <div id="errormsg2"  style={{display:"none"}}>
                <div class="alert" >
  <span class="closebtn" onClick={this.closeform1}>&times;</span> 
  The request was not completed due to an internal error on the server side
</div></div>
<div id="errormsg3"  style={{display:"none"}}>
                <div class="alert" >
  <span class="closebtn" onClick={this.closeform2}>&times;</span> 
  The server was unavailable
</div>

                </div>
                <div className="col-md-4"></div>
              </div>
              <div id="errormsg1"  style={{display:"none"}}>
                <div class="alert" >
  <span class="closebtn" onClick={this.closeform}>&times;</span> 
  The request was invalid
</div></div>
</div><br></br><br></br>  <br></br><br></br> <br></br>
        
          </div>
          </div>
          </div>

            );
        }
}



export default Attachements