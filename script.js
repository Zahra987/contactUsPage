var emailErr = document.getElementById("emailErr");
var nameErr = document.getElementById('nameErr');
var messageErr = document.getElementById('messageErr');
var upToDateErr = document.getElementById("upToDateErr");

function contactUsValidation(){
 emailErr.innerHTML="";
 nameErr.innerHTML="";
 messageErr.innerHTML="";
 //validation for email
 var emailValue= document.forms['contactUs-form-box']['femail'].value;
 if (emailValue.indexOf("@") <= 0) {
   emailErr.innerHTML="The email is not valid";
   return false;
 }
 if (emailValue.charAt(emailValue.length - 4) != '.' && emailValue.charAt(emailValue.length - 3) != '.' ) {
  emailErr.innerHTML="The email is not valid";
   return false;
 }
 //validation for name
 if (document.forms['contactUs-form-box']['fname'].value.length < 4) {
  nameErr.innerHTML="at least 3 characters!";
  return false;
}
  //validation for message
  let charLength= document.forms['contactUs-form-box']['fmessage'].value.length;
  if (charLength > 50 || charLength < 3 ) {
    messageErr.innerHTML="Maximum 50 characters!";
    return false;
  }
  return true;
}

function upToDateFormValidation() {
  upToDateErr.innerHTML="";
  var length=document.forms['upToDate-form-box']['uptodate'].value.length;
  if (length < 3 || length > 20) {
    upToDateErr.innerHTML="at least 3 characters!";
    return false;
  }
  return true;
}