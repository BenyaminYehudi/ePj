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

function loginPopup(){
    var usrLog= $("#popupUser").val();
    console.log(usrLog);
    var pswLog= $("#popupPass").val();
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
        $("#light").css("display","none");
        $("#fade").css("display","none");
        $("body").css("overflow","visible");
    } else {
        $("#light").html('<div id="popupLogin"><ul><li><input type="text" name="username" id="popupUser" placeholder="Username"></li><li><input type="password" name="password" id="popupPass" placeholder="Password"></li><li><button class="btn btn-primary" onclick="loginPopup()">LOGIN</button></li></ul></div><div id="popupRegister"><h1>Not a Registered Renter?</h1><h3>Sign up now!</h3><a href="ePjRegister.html"><button class="btn btn-primary">Register</button></a></div>').css("display","block");
        $("#fade").css("display","block");
        $("body").css("overflow","hidden");
    }
};

function logOut(){
    localStorage.setItem("loggedIn", false);
    location.reload(true);
};
