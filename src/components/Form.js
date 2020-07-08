import React, { Component } from 'react';
import Bridegroom from './Bridegroom';
import Bridegroomfather from './Bridegroomfather';
import Bridegroommother from './Bridegroommother';
import Bride from './Bride';
import Bridefather from './Bridefather';
import Bridemother from './Bridemother';
import Marriagedetails from './Marriagedetails';
import Marriagepresent from './Marriagepresent';
import Witness from './Witness';
import Attachments from './Attachments';

export  class Form extends Component
{
state={
    step:1,
}

nextStep=()=>{
    const {step} =this.state;
    this.setState({step:step+1});
};

prevStep=()=>{
const {step}=this.state;
this.setState({step:step-1});
};

inputChange=input=>e=>{   
       this.setState({
                [input]:e.target.value
            });
}

    render()
    {
  
        const {step} =this.state;
        const {Dateofmarriage,Name,Nationality,ResidentialStatus,Religion,Caste,DOB,Employername,Designation,
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
                Invitation,Marriagereceipt}=this.state;
        const value={Dateofmarriage,Name,Nationality,ResidentialStatus,Religion,Caste,DOB,Employername,Designation,
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
                Invitation,Marriagereceipt};
switch(step){
    case 1:
        return(
<Bridegroom nextStep={this.nextStep} inputChange={this.inputChange} value={value}/>
        );
        case 2:
            return(
    <Bridegroomfather  nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} value={value}/>
            );
            case 3:
            return(
    <Bridegroommother  nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} value={value}/>
            );
            case 4:
            return(
    <Bride  nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} value={value}/>
            );
            case 5:
                return(
        <Bridefather  nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} value={value}/>
                );
                case 6:
                    return(
            <Bridemother  nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} value={value}/>
                    );
                    case 7:
                        return(
                <Marriagedetails  nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} value={value}/>
                        );
            case 8:
                return(
        <Marriagepresent nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} value={value}/>
                );
                case 9:
                return(
        <Witness nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} value={value}/>
                );
                case 10:
                return(
        <Attachments nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} value={value}/>
                );
} 
    }
}
export default Form