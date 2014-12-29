function UserRegistration (userName, password, email, birthDate, homePhone, mobilePhone, licenseNumber) {
	this.userName = userName;
	this.password = password;
	this.email = email;
	this.birthDate = new Date (year, month, day);
	this.homePhone = homePhone;
	this.mobilePhone = mobilePhone;
	this.licenseNumber = licenseNumber;
};

$( document ).ready(function() {


var start = 1900;
var end = new Date().getFullYear();
var options = "";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("bYear").innerHTML = options;



});

