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
    var pswLog= $("#passwordLOGIN").val();
    var a = localStorage.getItem("user");
    a = JSON.parse(a);
    var lclStrgUser = a.userName;
    var lclStrgPass = a.password;
    if(usrLog===lclStrgUser && pswLog===lclStrgPass){
        localStorage.setItem("loggedIn", true);
        checkIfLogged();
    } else {
        localStorage.setItem("loggedIn", false);
        $("#logInPopupError").html('<div class="loginError" onclick="closePopup()"><h1>Wrong username or password!</h1><h4>Please try again</h4><button class="btn btn-warning">Close</button></div>').css("display","block");
        $("#logInPopupErrorFade").css("display","block");
    }
};

function loginPopup(){
    var usrLog= $("#popupUser").val();
    var pswLog= $("#popupPass").val();
    var a = localStorage.getItem("user");
    a = JSON.parse(a);
    var lclStrgUser = a.userName;
    var lclStrgPass = a.password;
    if(usrLog===lclStrgUser && pswLog===lclStrgPass){
        localStorage.setItem("loggedIn", true);
        checkIfLogged();
    } else {
        localStorage.setItem("loggedIn", false);
        $('<div class="loginErrorPopup">Wrong username or password!</div>').appendTo('.logRegContainer');
    }
};

function checkIfLogged(){
    if(localStorage.getItem("loggedIn")==="true"){
        $("#loginDiv").html('<div class="userName">User: </div><span id="loggedUser"></span><button class="btn btn-primary" onclick="logOut()">Log Out</button>');
        $("#sideNav").html('<h4>Home Page</h4><ul><li><a href="index.html"><button class="btn btn-primary">Home</button></a></li></ul><h4>Our Fleet</h4><ul><li><a href="ePjCars.html"><button class="btn btn-primary">Our Cars</button></a></li></ul><h4>Returning a car?<h4><ul><li><a href="ePjReturnCar.html"><button class="btn btn-primary">Return Car</button></a></li></ul>');
        $("#light").css("display","none");
        $("#fade").css("display","none");
        var a = localStorage.getItem("user");
        a = JSON.parse(a);
        $("#loggedUser").html(a.userName);
    } else {
        $("#light").html('<div class="logRegContainer"><div id="popupLogin"><h1>Login if you\'re already a member:</h1><ul><li><input type="text" name="username" id="popupUser" placeholder="Username"></li><li><input type="password" name="password" id="popupPass" placeholder="Password"></li><li><button class="btn btn-primary" onclick="loginPopup()">LOGIN</button></li></ul></div><div id="popupRegister"><h1>Not a Registered Renter?</h1><h3>Sign up now!</h3><a href="ePjRegister.html"><button class="btn btn-primary">Register</button></a></div></div>').css("display","block");
        $("#fade").css("display","block");
    }
};

function logOut(){
    localStorage.setItem("loggedIn", false);
    location.reload(true);
};

function closePopup(){
	location.reload();
}
