function validateForm(){
    const name = document.getElementById("mce-FNAME");
    const email = document.getElementById("mce-EMAIL");
    const phone = document.getElementById("mce-TELWHATS");
    const employeeNumber = document.getElementById("mce-EMPLOYEEN");
    const instagramProfile = document.getElementById("mce-INSTAPROF");
    const objectives = document.getElementById("mce-OBJECTIVES");
    const investment = document.getElementById("mce-INVESTMENT");
    const contactWhats = document.getElementById("mce-group[273893]-273893-0");
    const contactMail = document.getElementById("mce-group[273893]-273893-1");

    let name_v = (name.value !=""?true:false);
    let email_v = (email.value !=""?true:false);
    let phone_v = (phone.value !=""?true:false);
    let employeeNumber_v = (employeeNumber.value !=""?true:false);
    let instagramProfile_v = (instagramProfile.value !=""?true:false);
    let objectives_v = (objectives.value !=""?true:false);
    let investment_v = (investment.value !=""?true:false);
    let contactWhats_v = (contactWhats.value !=""?true:false);
    let contactMail_v = (contactMail.value !=""?true:false);

    let validation = (
        name_v && 
        email_v &&
        phone_v &&
        employeeNumber_v && 
        instagramProfile_v && 
        objectives_v && 
        investment_v &&
        contactWhats_v &&
        contactMail_v
    );
    
    if(!validation){alert("Preencha todos os campos corretamente!")}
    if(!name_v){name.style.boxShadow = "0px 0px 5px 1px red";}
    if(!email_v){email.style.boxShadow = "0px 0px 5px 1px red";}
    if(!phone_v){phone.style.boxShadow = "0px 0px 5px 1px red";}
    if(!employeeNumber_v ){employeeNumber.style.boxShadow = "0px 0px 5px 1px red";}
    if(!instagramProfile_v.value){instagramProfile.style.boxShadow = "0px 0px 5px 1px red";}
    if(!objectives_v.value){objectives.style.boxShadow = "0px 0px 5px 1px red";}
    if(!investment_v.value){investment.style.boxShadow = "0px 0px 5px 1px red";}
    if(!contactWhats_v.value){contactWhats.style.boxShadow = "0px 0px 5px 1px red";}
    if(!contactMail_v.value){contactMail.style.boxShadow = "0px 0px 5px 1px red";}

    return validation;
}