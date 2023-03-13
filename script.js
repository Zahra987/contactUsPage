var emailErr = document.getElementById("emailErr");
var nameErr = document.getElementById('nameErr');
var messageErr = document.getElementById('messageErr')

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
  if (charLength > 50 || charLength < 2 ) {
    messageErr.innerHTML="Maximum 50 characters!";
    return false;
  }
}