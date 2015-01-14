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
	$("#logInPopup").html('<div id="popupLoginRegst"><h1>Login:</h1><ul><li><input type="text" name="username" id="popupUserRegst" placeholder="Username"></li><li><input type="password" name="password" id="popupPassRegst" placeholder="Password"></li><li><button class="btn btn-primary" onclick="loginPopupRegst()">LOGIN</button></li></ul></div>').css("display","block");
        $("#logInPopupFade").css("display","block");
        checkIfRegistered();
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
*/	$("#home").val(a.homePhone);
	$("#mobile").val(a.mobilePhone);
	$("#license").val(a.drivingLicense);
}

function loginPopupRegst(){
    var usrLog= $("#popupUserRegst").val();
    var pswLog= $("#popupPassRegst").val();
    var a = localStorage.getItem("user");
    a = JSON.parse(a);
    var lclStrgUser = a.userName;
    var lclStrgPass = a.password;
    if(usrLog===lclStrgUser && pswLog===lclStrgPass){
        localStorage.setItem("loggedIn", true);
        checkIfLogged();
        window.location="index.html"
    } else {
        localStorage.setItem("loggedIn", false);
    }
};

function checkIfRegistered(){
	var emailRegstr= $("#email").val();
	var a = localStorage.getItem("email");
	a = JSON.parse(a);
	var lclStrgEmail = a.email;
	if(emailRegstr!==lclStrgEmail){
		localStorage.setItem("singleAccountPerMail", true);
	} else {
		localStorage.setItem("singleAccountPerMail", false);
		alert("This email is already associated with an existing account!");
	}
};
