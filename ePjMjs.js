$( document ).ready(function() {
    
function footerYear() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("footerYear").innerHTML = n;
}
footerYear();
checkIfLogged();
});

function login(){
    var usrLog= $("#userNameLOGIN").val();
    console.log(usrLog);
    var pswLog= $("#passwordLOGIN").val();
    console.log(pswLog);
    var a = localStorage.getItem("user");
    a = JSON.parse(a);
    var lclStrgUser = a.userName;
    var lclStrgPass = a.password;
    if(usrLog===lclStrgUser && pswLog===lclStrgPass){
        localStorage.setItem("loggedIn", true);
        checkIfLogged();
    } else {
        localStorage.setItem("loggedIn", false);
    }
};

function checkIfLogged(){
    if(localStorage.getItem("loggedIn")==="true"){
        $("#loginDiv").html('<button class="btn btn-primary" onclick="logOut()">Log Out</button>');        
    } else {
        $("#light").html('Please register if you\'re not already a JB Registered Renter, or login (using the form above), in order to continue <a href="ePjRegister.html"><button class="btn btn-primary">Register</button></a>').css("display","block");
        $("#fade").css("display","block");
    }
};

function logOut(){
    localStorage.setItem("loggedIn", false);
    location.reload(true);
};
