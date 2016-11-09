




var dtButton = document.getElementById("dtButton");
if(dtButton != null){
var id = window.location.search.substring(1);
var ctInfo = JSON.parse(localStorage.getItem(id))
document.getElementById("firstName").value = ctInfo.firstName;
document.getElementById("lastName").value = ctInfo.lastName;
document.getElementById("emailAddress").value = ctInfo.emailAddress;
document.getElementById("phoneNumber").value = ctInfo.phoneNumber;
document.addEventListener("click",function (e){
e.preventDefault();
localStorage.removeItem(id);
window.location="contactHome.html"})};


//addEventListener
