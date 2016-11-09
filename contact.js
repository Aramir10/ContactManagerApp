
//ADDcontact--func----------------------------
function addContact(fname, lname, emailAddr, phoneNum){
  var newContact = {
      firstName:fname,
      lastName:lname,
      emailAddress:emailAddr,
      phoneNumber:phoneNum
  };
  var newContactString = JSON.stringify(newContact);
     console.log(newContactString);
     localStorage.setItem(emailAddr,newContactString);
};

//edit contact  funct edit-------------
function editContact(fname, lname, emailAddr, phoneNum, key){
  var infoCont = {
      firstName:fname,
      lastName:lname,
      emailAddress:emailAddr,
      phoneNumber:phoneNum
  };
  var editContactString = JSON.stringify(infoCont);
      console.log(editContactString);
      localStorage.setItem(key,editContactString);
      };
//Edit-BTn----------------------------------------------
// step1
      var editButton  = document.getElementById("editButton");
      if(editButton != null){
// step2
        var key = window.location.search.substring(1);
        var contactInfo = JSON.parse(localStorage.getItem(key));
        // step3
        document.getElementById("firstName").value = contactInfo.firstName;
        document.getElementById("lastName").value = contactInfo.lastName;
        document.getElementById("emailAddress").value = contactInfo.emailAddress;
        document.getElementById("phoneNumber").value = contactInfo.phoneNumber;
// step4
        editButton.addEventListener("click", function (e){
          // step5
        e.preventDefault();


    var  firstName =  document.getElementById("firstName").value;
    var  lastName = document.getElementById("lastName").value;
    var  emailAddress  = document.getElementById("emailAddress").value;
    var  phoneNumber = document.getElementById("phoneNumber").value;
        editContact(firstName, lastName, emailAddress, phoneNumber, key);
        window.location.href = ("contactHome.html")

        });
      };
 //CONTACTHOME---list dipl--------------------------------------------
   var contactsData = document.getElementById("contactsData");
   if(contactsData != null){
     var table = document.getElementById("contactsData");
     for (var i in localStorage)
 {
    var nextRow = table.insertRow();
    var nextContact = JSON.parse(localStorage[i]);
    var nextfirstName= nextRow.insertCell(0);
        nextfirstName.innerHTML = nextContact.firstName;
    var nextlastName = nextRow.insertCell(1);
        nextlastName.innerHTML = nextContact.lastName;
    var nextemailAddress = nextRow.insertCell(2);
        nextemailAddress.innerHTML = nextContact.emailAddress;
    var nextphoneNumber = nextRow.insertCell(3)
        nextphoneNumber.innerHTML = nextContact.phoneNumber;
    var nextEdit = nextRow.insertCell(4);
    var editLink = document.createElement("a");
        editLink.setAttribute("href","editcontact.html?"+i);
        editLink.innerHTML = "Edit";
        nextEdit.appendChild(editLink);
    var nextDelete = nextRow.insertCell(5);
    var deleteLink = document.createElement("a");
            deleteLink.setAttribute("href","deleteContact.html?"+i);
            deleteLink.innerHTML = "Delete";
            nextDelete.appendChild(deleteLink);

  };
  };
 //ADDCONTACT--Btn-------------------------------------------
var addnewC = document.getElementById('addContactButton');
if (addnewC != null){
   addnewC.addEventListener("click", function (e) {
    e.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
        addContact(firstName, lastName, emailAddress, phoneNumber);
  });
};
