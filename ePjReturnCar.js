function carReturn(){
  var licensePlate = $("#returnCarLicense").val();
  var rentedCars = JSON.parse(localStorage.getItem("rentedCars"));
  console.log(rentedCars);
  if (rentedCars[licensePlate] !== undefined){
    var carList = JSON.parse(localStorage.getItem("carList"));
    carList[licensePlate]=rentedCars[licensePlate];
    localStorage.setItem("carList", JSON.stringify(carList));
    delete rentedCars[licensePlate];
    localStorage.setItem("rentedCars", JSON.stringify(rentedCars));
    $("#returnedCar").html('<h3>The car has been returned successfully!</h3><a href="index.html"><button class="btn btn-primary">Main Page</button></a>').css("display","block");
    $("#fade").css("display","block");
  } else {
    document.getElementById("result").innerHTML = "There is no such vehicle in our fleet. Please check the license number and try again";
    $("#returnedCar").html('<h3>There is no such vehicle in our fleet. Please check the license number and try again.</h3><button class="btn btn-primary" onclick="closePopup()">Close</button>').css("display","block");
    $("#fade").css("display","block");
  }
};

function closePopup(){
  $("#returnedCar").css("display","none");
  $("#fade").css("display","none");
}
