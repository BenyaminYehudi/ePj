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
    document.getElementById("result").innerHTML = "The car has been returned successfully!";
  } else {
    document.getElementById("result").innerHTML = "There is no such vehicle in our fleet. Please check the license number and try again";
  }
};
