
// validate function
function validateform() {
  var firstName = document.getElementById("firstName").value;
  if (firstName === null || firstName === '' || firstName === "First Name"){
  alert("Please enter f name");
  return false;
  };
  var lastName = document.getElementById('"lastName"').value;
  if (lastName === null || lastName === '' || lastName === "lastName"){
 alert("Please enter l name");
  return false;
  };
  var emailAddress = document.getElementById("emailAddress").value;
  if (emailAddress === null || emailAddress === '' || emailAddress === "emailAddress"){

  return false;
  }else{
  var validEmail = /\S+@\S+\.\S+/;
  if(!validEmail.test(emailAddress)){
  alert("Please enter Email");
    alert("not valid")
    return false;
  }};
  };
  var phoneNumber = document.getElementById("phoneNumber").value;
  if (phoneNumber === null || phoneNumber === '' || phoneNumber === "phoneNumber"){
  alert("Please enter Phone");
  return false;
 } else{
   var validphoneNumber = /\d{3}-\d{3}-\d{4}/
   if(!validphoneNumber.test(phoneNumber)){

     alert("not valid")
     return false;
   }
 return true;
};
