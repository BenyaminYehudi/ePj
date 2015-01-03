$( document ).ready(function() {

var start = 1900;
var end = new Date().getFullYear();
var options = "";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("bYear").innerHTML = options;

});

	
function User (userName, password, email, bDate, homePhone, mobilePhone, drivingLicense) {
	this.userName = userName;
	this.password = password;
	this.email = email;
	this.bDate = bDate;
	this.homePhone = homePhone;
	this.mobilePhone = mobilePhone;
	this.drivingLicense = drivingLicense;
};

function register(){
	var userName = $("#registerUsername").val();
	var password = $("#registerPassword").val();
	var email= $("#email").val();
	var bDay= $("#bDay").val();
	var bMonth= $("#bMonth").val();
	var bYear= $("#bYear").val();
	var homePhone= $("#home").val();
	var mobilePhone= $("#mobile").val();
	var drivingLicense= $("#license").val();
	var bDate = new Date(bYear, bMonth, bDay);
	var newUser = new User (userName, password, email, bDate, homePhone, mobilePhone, drivingLicense);
	localStorage.setItem("user", JSON.stringify(newUser));
}
