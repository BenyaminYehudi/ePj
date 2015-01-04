$( document ).ready(function() {
    
function footerYear() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("footerYear").innerHTML = n;
}
footerYear();

});

function login(){
    var usrLog= $("#userNameLOGIN").val();
    var pswLog= $("#passwordLOGIN").val();
    var a = localStorage.getItem("user");
    a = JSON.parse(a);
    var lclStrgUser = a.userName;
    var lclStrgPass = a.password;
    if()
}
