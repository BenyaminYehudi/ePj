$( document ).ready(function() {
	
function UserRegistration (userName, password, email, birthDate, homePhone, mobilePhone, licenseNumber) {
	this.userName = userName;
	this.password = password;
	this.email = email;
	this.birthDate = new Date (year, month, day);
	this.homePhone = homePhone;
	this.mobilePhone = mobilePhone;
	this.licenseNumber = licenseNumber;
};


var start = 1900;
var end = new Date().getFullYear();
var options = "";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("bYear").innerHTML = options;

function register(){
	var userName = $("#registerUsername").val();
	var password = $("#registerPassword").val();
	var email= $("#email").val();
	var bDay= $("#bDay).val();
	var bMonth= $("#bMonth").val();
	var bYear= $("#bYear").val();
	var homePhone= $("#home").val();
	var mobilePhone= $("#mobile").val();
	var drivingLicense= $("#license").val();
	var bDate = new Date(bYear, bMonth, bDay);
	var newUser = new User (userName, password, email, bDate, homePhone, mobilePhone, drivingLicense);
}

});
