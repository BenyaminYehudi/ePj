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
    } else {
        localStorage.setItem("loggedIn", false);
    }
};

function checkIfLogged(){
    if(localStorage.getItem("loggedIn")==="true"){
        $("#loginDiv").html('<button class="btn btn-primary" onclick="logOut()">Log Out</button>');        
    }
};

function logOut(){
    localStorage.setItem("loggedIn", false);
};
