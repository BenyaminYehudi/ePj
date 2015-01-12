$( document ).ready(function() {

var start = 1900;
var end = new Date().getFullYear();
var options = "";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("bYear").innerHTML = options;

if (localStorage.getItem("user") !== null) {
refreshed();
}

});

	
function User (userName, password, email, bDate, primaryPhone, secondaryPhone, drivingLicense) {
	this.userName = userName;
	this.password = password;
	this.email = email;
	this.bDate = bDate;
	this.primaryPhone = primaryPhone;
	this.secondaryPhone = secondaryPhone;
	this.drivingLicense = drivingLicense;
};

function register(){
	var userName = $("#registerUsername").val();
	var password = $("#registerPassword").val();
	var email= $("#email").val();
	var bDay= $("#bDay").val();
	var bMonth= $("#bMonth").val();
	var bYear= $("#bYear").val();
	var primaryPhone= $("#primaryPhone").val();
	var secondaryPhone= $("#secondaryPhone").val();
	var drivingLicense= $("#license").val();
	var bDate = new Date(bYear, bMonth, bDay);
	var newUser = new User (userName, password, email, bDate, primaryPhone, secondaryPhone, drivingLicense);
	localStorage.setItem("user", JSON.stringify(newUser));
}

function refreshed(){
	var a = localStorage.getItem("user");
	a = JSON.parse(a);
	$("#registerUsername").val(a.userName);
	$("#registerPassword").val(a.password);
	$("#email").val(a.email);
/*	$("#bDay").val(a.bDate.getDate());
	$("#bMonth").val(a.bDate.getMonth());
	$("#bYear").val(a.bDate.getFullYear());
*/	$("#primaryPhone").val(a.primaryPhone);
	$("#secondaryPhone").val(a.secondaryPhone);
	$("#license").val(a.drivingLicense);
}
