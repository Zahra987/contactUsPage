var emailErr = document.getElementById("emailErr");
var nameErr = document.getElementById('nameErr');
var messageErr = document.getElementById('messageErr');
var upToDateErr = document.getElementById("upToDateErr");

function contactUsValidation(){
 emailErr.innerHTML="";
 nameErr.innerHTML="";
 messageErr.innerHTML="";
 //validation for email
 var emailValue= document.forms['contactUsForm']['femail'].value;
 if (emailValue.indexOf("@") <= 0) {
   emailErr.innerHTML="The email is not valid";
 }
 if (emailValue.charAt(emailValue.length - 4) != '.' && emailValue.charAt(emailValue.length - 3) != '.' ) {
  emailErr.innerHTML="The email is not valid";
 }
 //validation for name
 if (document.forms['contactUsForm']['fname'].value.length < 4) {
  nameErr.innerHTML="at least 3 characters!";
}
  //validation for message
  let charLength= document.forms['contactUsForm']['fmessage'].value.length;
  if (charLength > 50 || charLength < 3 ) {
    messageErr.innerHTML="Maximum 50 characters!";
  }
  if (emailErr.innerHTML !="" || nameErr.innerHTML !="" || messageErr.innerHTML !="" ) {
    return false;
  }
  return true;
}
 //validation uptodateForm
function upToDateFormValidation() {
  upToDateErr.innerHTML="";
  var length=document.forms['upToDateForm']['uptodate'].value.length;
  if (length < 3 || length > 20) {
    upToDateErr.innerHTML="at least 3 characters!";
    return false;
  }
  return true;
}

var navLinks=document.getElementsByClassName('navLink');
var nanLinkList=Object.values(navLinks);
var link=document.getElementById('contactus');
 nanLinkList.map((item) => {
    if (item==link){
     item.style.color="rgb(196, 196, 4)";
    }else{
       item.style.color="black";
     }
    })