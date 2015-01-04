function carReturn(){
  var licensePlate = $("#returnCarLicense").val();
  var rentedCars = JSON.parse(localStorage.getItem("rentedCars"));
  console.log(rentedCars);
  if (rentedCars[licensePlate] !== undefined){
    var carList = JSON.parse(localStorage.getItem("carList"));
    carList[licensePlate]=rentedCars[licensePlate];
    localStorage.setItem("carList", JSON.stringify(carList));
  } else {
    console.log("it doesn't exist");
  }
};
